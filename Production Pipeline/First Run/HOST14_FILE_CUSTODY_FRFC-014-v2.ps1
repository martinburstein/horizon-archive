param(
  [Parameter(Mandatory = $true)]
  [ValidateSet('CreateRoot','InspectRoot','InspectAttempt','DeleteAttempt','ImportSelected','DeleteProductPartial','DeleteRoot','SelfTestOpacity')]
  [string]$Mode,
  [string]$AttemptId,
  [string]$ExpectedIdentity,
  [long]$ExpectedBytes = -1,
  [string]$ExpectedSha256
)

$ErrorActionPreference = 'Stop'
$scratchRoot = 'C:\Users\marti\AppData\Local\Temp\horizon-archive-host14-e3223c20-b7b5-410d-b335-3c15c576cfba'
$productRoot = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..\..\Visual Direction\Production Masters\2026-08-13-first-run-host14'))
$productPath = Join-Path $productRoot 'host14-waterline-ledger-master-v1.png'
$partialPath = "$productPath.partial"

if (-not ('FirstRunHost14.NativeIdentityV2' -as [type])) {
  Add-Type -TypeDefinition @'
using System;
using System.ComponentModel;
using System.Runtime.InteropServices;
using Microsoft.Win32.SafeHandles;

namespace FirstRunHost14 {
  [StructLayout(LayoutKind.Sequential)]
  internal struct ByHandleFileInformationV2 {
    internal uint FileAttributes;
    internal System.Runtime.InteropServices.ComTypes.FILETIME CreationTime;
    internal System.Runtime.InteropServices.ComTypes.FILETIME LastAccessTime;
    internal System.Runtime.InteropServices.ComTypes.FILETIME LastWriteTime;
    internal uint VolumeSerialNumber;
    internal uint FileSizeHigh;
    internal uint FileSizeLow;
    internal uint NumberOfLinks;
    internal uint FileIndexHigh;
    internal uint FileIndexLow;
  }

  public static class NativeIdentityV2 {
    [DllImport("kernel32.dll", SetLastError=true)]
    private static extern bool GetFileInformationByHandle(SafeFileHandle handle, out ByHandleFileInformationV2 information);
    [DllImport("kernel32.dll", CharSet=CharSet.Unicode, SetLastError=true)]
    private static extern SafeFileHandle CreateFileW(string name, uint access, uint share, IntPtr security, uint creation, uint flags, IntPtr template);

    public static string FromFileHandle(SafeFileHandle handle) {
      ByHandleFileInformationV2 information;
      if (!GetFileInformationByHandle(handle, out information)) throw new Win32Exception(Marshal.GetLastWin32Error());
      return String.Format("{0:x8}:{1:x8}:{2:x8}:{3}", information.VolumeSerialNumber, information.FileIndexHigh, information.FileIndexLow, information.NumberOfLinks);
    }

    public static string FromDirectory(string path) {
      const uint ShareAll = 1u | 2u | 4u;
      const uint OpenExisting = 3u;
      const uint BackupSemantics = 0x02000000u;
      using (SafeFileHandle handle = CreateFileW(path, 0u, ShareAll, IntPtr.Zero, OpenExisting, BackupSemantics, IntPtr.Zero)) {
        if (handle.IsInvalid) throw new Win32Exception(Marshal.GetLastWin32Error());
        return FromFileHandle(handle);
      }
    }
  }
}
'@
}

function Assert-OrdinaryDirectory([string]$Path) {
  $full = [IO.Path]::GetFullPath($Path)
  $item = Get-Item -LiteralPath $full -Force
  if (-not $item.PSIsContainer -or (($item.Attributes -band [IO.FileAttributes]::ReparsePoint) -ne 0)) { throw "directory identity rejected: $full" }
  return [pscustomobject]@{ path = $full; identity = [FirstRunHost14.NativeIdentityV2]::FromDirectory($full) }
}

function Assert-AttemptId([string]$Id) {
  if ($Id -notmatch '^H14-(?:[1-9]|[12][0-9]|3[0-2])$') { throw 'attempt identity must be H14-1 through H14-32' }
}

function Read-ExactBytes([IO.Stream]$Stream, [int]$Count) {
  $buffer = [byte[]]::new($Count)
  $offset = 0
  while ($offset -lt $Count) {
    $read = $Stream.Read($buffer, $offset, $Count - $offset)
    if ($read -le 0) { throw 'PNG datastream ended before the declared chunk boundary' }
    $offset += $read
  }
  return $buffer
}

function ConvertFrom-BigEndianUInt32([byte[]]$Bytes) {
  if ($Bytes.Count -ne 4) { throw 'big-endian uint32 requires four bytes' }
  return [uint32]((([uint64]$Bytes[0]) -shl 24) -bor (([uint64]$Bytes[1]) -shl 16) -bor (([uint64]$Bytes[2]) -shl 8) -bor ([uint64]$Bytes[3]))
}

function Read-PngContract([IO.Stream]$Stream) {
  $Stream.Position = 0
  $signature = Read-ExactBytes $Stream 8
  $expected = [byte[]](137,80,78,71,13,10,26,10)
  for ($i = 0; $i -lt 8; $i++) { if ($signature[$i] -ne $expected[$i]) { throw 'PNG signature mismatch' } }

  $seenIhdr = $false; $seenIend = $false; $width = 0; $height = 0; $bitDepth = 0; $colorType = 0
  while ($Stream.Position -lt $Stream.Length) {
    $chunkLength = [uint64](ConvertFrom-BigEndianUInt32 (Read-ExactBytes $Stream 4))
    $chunkType = [Text.Encoding]::ASCII.GetString((Read-ExactBytes $Stream 4))
    if ($chunkLength -gt [uint64]($Stream.Length - $Stream.Position - 4)) { throw 'PNG chunk exceeds datastream boundary' }
    $chunkData = Read-ExactBytes $Stream ([int]$chunkLength)
    [void](Read-ExactBytes $Stream 4)

    if (-not $seenIhdr) {
      if ($chunkType -cne 'IHDR' -or $chunkLength -ne 13) { throw 'PNG IHDR must be first and exactly 13 bytes' }
      $seenIhdr = $true
      $width = ConvertFrom-BigEndianUInt32 $chunkData[0..3]
      $height = ConvertFrom-BigEndianUInt32 $chunkData[4..7]
      $bitDepth = [int]$chunkData[8]
      $colorType = [int]$chunkData[9]
      if ($bitDepth -ne 8 -or $colorType -notin @(2,6) -or $chunkData[10] -ne 0 -or $chunkData[11] -ne 0 -or $chunkData[12] -ne 0) {
        throw 'PNG must be non-interlaced 8-bit truecolor RGB or truecolor RGBA using standard compression and filtering'
      }
    } elseif ($chunkType -ceq 'IHDR') {
      throw 'PNG contains a duplicate IHDR'
    }

    if ($chunkType -ceq 'tRNS') { throw 'PNG transparency chunk is forbidden by the opaque RGB contract' }
    if ($chunkType -ceq 'IEND') {
      if ($chunkLength -ne 0) { throw 'PNG IEND must be empty' }
      $seenIend = $true
      if ($Stream.Position -ne $Stream.Length) { throw 'PNG contains trailing bytes after IEND' }
      break
    }
  }
  if (-not $seenIhdr -or -not $seenIend) { throw 'PNG is missing required IHDR or IEND' }
  return [pscustomobject]@{width=[long]$width;height=[long]$height;bit_depth=$bitDepth;color_type=$colorType;encoded_channels=$(if ($colorType -eq 2) {'rgb'} else {'rgba'})}
}

function Assert-FullyOpaqueBitmap([Drawing.Bitmap]$Bitmap) {
  $rect = [Drawing.Rectangle]::new(0, 0, $Bitmap.Width, $Bitmap.Height)
  $data = $Bitmap.LockBits($rect, [Drawing.Imaging.ImageLockMode]::ReadOnly, [Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $minimum = 255; $maximum = 0; [long]$nonOpaque = 0; [long]$samples = 0
  try {
    $rowBytes = [Math]::Abs($data.Stride)
    $row = [byte[]]::new($rowBytes)
    for ($y = 0; $y -lt $Bitmap.Height; $y++) {
      $rowPointer = [IntPtr]::Add($data.Scan0, $y * $data.Stride)
      [Runtime.InteropServices.Marshal]::Copy($rowPointer, $row, 0, $rowBytes)
      for ($x = 0; $x -lt $Bitmap.Width; $x++) {
        $alpha = [int]$row[$x * 4 + 3]
        if ($alpha -lt $minimum) { $minimum = $alpha }
        if ($alpha -gt $maximum) { $maximum = $alpha }
        if ($alpha -ne 255) { $nonOpaque++ }
        $samples++
      }
    }
  } finally { $Bitmap.UnlockBits($data) }
  if ($nonOpaque -ne 0 -or $samples -ne ([long]$Bitmap.Width * [long]$Bitmap.Height)) {
    throw "PNG_OPACITY_FAIL: every decoded alpha sample must equal 255; nonopaque=$nonOpaque samples=$samples min=$minimum max=$maximum"
  }
  return [pscustomobject]@{alpha_samples=$samples;alpha_min=$minimum;alpha_max=$maximum;nonopaque_alpha_samples=$nonOpaque;fully_opaque=$true}
}

function Read-FileSnapshot([string]$Path, [bool]$RequirePng) {
  $full = [IO.Path]::GetFullPath($Path)
  $attrsBefore = [IO.File]::GetAttributes($full)
  if (($attrsBefore -band [IO.FileAttributes]::ReparsePoint) -ne 0) { throw "reparse file rejected: $full" }
  $stream = [IO.FileStream]::new($full, [IO.FileMode]::Open, [IO.FileAccess]::Read, [IO.FileShare]::None)
  try {
    $identityBefore = [FirstRunHost14.NativeIdentityV2]::FromFileHandle($stream.SafeFileHandle)
    if (-not $identityBefore.EndsWith(':1')) { throw "file link count is not one: $identityBefore" }
    $lengthBefore = $stream.Length
    $sha = [Security.Cryptography.SHA256]::Create()
    try { $hash = ([BitConverter]::ToString($sha.ComputeHash($stream))).Replace('-','').ToLowerInvariant() } finally { $sha.Dispose() }
    if ($stream.Position -ne $stream.Length) { throw 'same-handle hash did not reach EOF' }
    $width = $null; $height = $null; $pixelFormat = $null; $imageFlags = $null
    $bitDepth = $null; $colorType = $null; $encodedChannels = $null
    $alphaSamples = $null; $alphaMin = $null; $alphaMax = $null; $nonOpaque = $null; $fullyOpaque = $null
    if ($RequirePng) {
      $png = Read-PngContract $stream
      Add-Type -AssemblyName System.Drawing
      $stream.Position = 0
      $image = [Drawing.Image]::FromStream($stream, $true, $true)
      try {
        $bitmap = [Drawing.Bitmap]::new($image)
        try {
          $width = $bitmap.Width; $height = $bitmap.Height; $pixelFormat = $bitmap.PixelFormat.ToString(); $imageFlags = [int]$bitmap.Flags
          if ($pixelFormat -notin @('Format24bppRgb','Format32bppArgb')) { throw "decoded pixel representation is outside the RGB contract: $pixelFormat" }
          $opacity = Assert-FullyOpaqueBitmap $bitmap
          $alphaSamples = $opacity.alpha_samples; $alphaMin = $opacity.alpha_min; $alphaMax = $opacity.alpha_max
          $nonOpaque = $opacity.nonopaque_alpha_samples; $fullyOpaque = $opacity.fully_opaque
        } finally { $bitmap.Dispose() }
      } finally { $image.Dispose() }
      if ($width -ne $png.width -or $height -ne $png.height) { throw 'PNG header and strict decoder dimensions disagree' }
      $bitDepth = $png.bit_depth; $colorType = $png.color_type; $encodedChannels = $png.encoded_channels
    }
    $identityAfter = [FirstRunHost14.NativeIdentityV2]::FromFileHandle($stream.SafeFileHandle)
    $lengthAfter = $stream.Length
    $attrsAfter = [IO.File]::GetAttributes($full)
    if ($identityBefore -cne $identityAfter -or $lengthBefore -ne $lengthAfter -or $attrsBefore -ne $attrsAfter) { throw 'same-handle identity changed during inspection' }
    return [pscustomobject]@{path=$full;identity=$identityAfter;bytes=$lengthAfter;sha256=$hash;width=$width;height=$height;pixel_format=$pixelFormat;image_flags=$imageFlags;png_bit_depth=$bitDepth;png_color_type=$colorType;encoded_channels=$encodedChannels;alpha_samples=$alphaSamples;alpha_min=$alphaMin;alpha_max=$alphaMax;nonopaque_alpha_samples=$nonOpaque;fully_opaque=$fullyOpaque}
  } finally { $stream.Dispose() }
}

function Assert-Expected($Snapshot) {
  if ([string]::IsNullOrWhiteSpace($ExpectedIdentity) -or $ExpectedBytes -lt 0 -or $ExpectedSha256 -notmatch '^[0-9a-f]{64}$') { throw 'expected identity, bytes, and lowercase SHA-256 are required' }
  if ($Snapshot.identity -cne $ExpectedIdentity -or $Snapshot.bytes -ne $ExpectedBytes -or $Snapshot.sha256 -cne $ExpectedSha256) { throw 'file differs from frozen expected identity' }
}

function Assert-ExpectedContent($Snapshot) {
  if ($ExpectedBytes -lt 0 -or $ExpectedSha256 -notmatch '^[0-9a-f]{64}$') { throw 'expected bytes and lowercase SHA-256 are required' }
  if ($Snapshot.bytes -ne $ExpectedBytes -or $Snapshot.sha256 -cne $ExpectedSha256) { throw 'file content differs from frozen expected bytes and SHA-256' }
}

function Assert-OpaqueSource($Snapshot, [string]$Label) {
  if ($Snapshot.width -ne 3840 -or $Snapshot.height -ne 2160 -or $Snapshot.png_bit_depth -ne 8 -or $Snapshot.png_color_type -notin @(2,6) -or -not $Snapshot.fully_opaque -or $Snapshot.alpha_min -ne 255 -or $Snapshot.alpha_max -ne 255 -or $Snapshot.nonopaque_alpha_samples -ne 0) {
    throw "$Label is not exact ordinary fully opaque 8-bit RGB/RGBA 3840x2160"
  }
}

function Invoke-OpacitySelfTest {
  Add-Type -AssemblyName System.Drawing
  $root = Join-Path ([IO.Path]::GetTempPath()) ('horizon-fr014-opacity-selftest-' + [Guid]::NewGuid().ToString('N'))
  if (Test-Path -LiteralPath $root) { throw 'self-test root unexpectedly exists' }
  [IO.Directory]::CreateDirectory($root) | Out-Null
  try {
    $rgbPath = Join-Path $root 'opaque-rgb.png'
    $opaquePath = Join-Path $root 'opaque-rgba.png'
    $mutantPath = Join-Path $root 'alpha-mutant.png'
    $rgb = [Drawing.Bitmap]::new(2, 1, [Drawing.Imaging.PixelFormat]::Format24bppRgb)
    try {
      $rgb.SetPixel(0, 0, [Drawing.Color]::FromArgb(11, 22, 33))
      $rgb.SetPixel(1, 0, [Drawing.Color]::FromArgb(44, 55, 66))
      $rgb.Save($rgbPath, [Drawing.Imaging.ImageFormat]::Png)
    } finally { $rgb.Dispose() }
    foreach ($case in @(@($opaquePath,255), @($mutantPath,254))) {
      $bitmap = [Drawing.Bitmap]::new(2, 1, [Drawing.Imaging.PixelFormat]::Format32bppArgb)
      try {
        $bitmap.SetPixel(0, 0, [Drawing.Color]::FromArgb(255, 11, 22, 33))
        $bitmap.SetPixel(1, 0, [Drawing.Color]::FromArgb([int]$case[1], 44, 55, 66))
        $bitmap.Save([string]$case[0], [Drawing.Imaging.ImageFormat]::Png)
      } finally { $bitmap.Dispose() }
    }
    $opaqueRgb = Read-FileSnapshot $rgbPath $true
    if (-not $opaqueRgb.fully_opaque -or $opaqueRgb.png_color_type -ne 2 -or $opaqueRgb.alpha_min -ne 255 -or $opaqueRgb.alpha_max -ne 255) { throw 'opaque RGB positive control failed' }
    $opaque = Read-FileSnapshot $opaquePath $true
    if (-not $opaque.fully_opaque -or $opaque.alpha_samples -ne 2 -or $opaque.alpha_min -ne 255 -or $opaque.alpha_max -ne 255) { throw 'opaque RGBA positive control failed' }
    $rejected = $false; $rejection = $null
    try { [void](Read-FileSnapshot $mutantPath $true) } catch { $rejection = $_.Exception.Message; $rejected = $rejection -like 'PNG_OPACITY_FAIL:*' }
    if (-not $rejected) { throw 'single-sample alpha mutation was not rejected' }
    return [pscustomobject]@{schema='horizon.first-run.opacity-selftest.v1';control='FRFC-014-v2';opaque_rgb_positive='PASS';opaque_rgba_positive='PASS';single_alpha_254_mutation='PASS_REJECTED';rejection=$rejection}
  } finally {
    foreach ($path in @((Join-Path $root 'opaque-rgb.png'), (Join-Path $root 'opaque-rgba.png'), (Join-Path $root 'alpha-mutant.png'))) { if (Test-Path -LiteralPath $path) { [IO.File]::Delete($path) } }
    if ((Get-ChildItem -LiteralPath $root -Force).Count -ne 0) { throw 'self-test root is not empty' }
    [IO.Directory]::Delete($root, $false)
    if (Test-Path -LiteralPath $root) { throw 'self-test root cleanup failed' }
  }
}

switch ($Mode) {
  'CreateRoot' {
    if (Test-Path -LiteralPath $scratchRoot) { throw 'scratch root must be initially absent' }
    $parent = (Resolve-Path -LiteralPath ([IO.Path]::GetDirectoryName($scratchRoot))).Path
    if ([IO.Path]::GetFullPath((Join-Path $parent ([IO.Path]::GetFileName($scratchRoot)))) -cne $scratchRoot) { throw 'scratch containment mismatch' }
    [IO.Directory]::CreateDirectory($scratchRoot) | Out-Null
    Assert-OrdinaryDirectory $scratchRoot | ConvertTo-Json -Compress
  }
  'InspectRoot' { Assert-OrdinaryDirectory $scratchRoot | ConvertTo-Json -Compress }
  'InspectAttempt' {
    Assert-AttemptId $AttemptId
    $path = Join-Path $scratchRoot "$AttemptId.png"
    Read-FileSnapshot $path $true | ConvertTo-Json -Compress
  }
  'DeleteAttempt' {
    Assert-AttemptId $AttemptId
    Assert-OrdinaryDirectory $scratchRoot | Out-Null
    $path = Join-Path $scratchRoot "$AttemptId.png"
    $first = Read-FileSnapshot $path $true; Assert-Expected $first
    $second = Read-FileSnapshot $path $true; Assert-Expected $second
    [IO.File]::Delete($path)
    if (Test-Path -LiteralPath $path) { throw 'attempt deletion did not reach absence' }
    [pscustomobject]@{schema='horizon.first-run.custody.v2';control='FRFC-014-v2';action='delete_attempt';attempt=$AttemptId;identity=$ExpectedIdentity;sha256=$ExpectedSha256;absent=$true} | ConvertTo-Json -Compress
  }
  'ImportSelected' {
    Assert-AttemptId $AttemptId
    Assert-OrdinaryDirectory $scratchRoot | Out-Null
    $sourcePath = Join-Path $scratchRoot "$AttemptId.png"
    $source = Read-FileSnapshot $sourcePath $true; Assert-Expected $source; Assert-OpaqueSource $source 'selected source'
    if (Test-Path -LiteralPath $productPath -or Test-Path -LiteralPath $partialPath) { throw 'product target or partial already exists' }
    if (-not (Test-Path -LiteralPath $productRoot)) { [IO.Directory]::CreateDirectory($productRoot) | Out-Null }
    Assert-OrdinaryDirectory $productRoot | Out-Null
    $input = [IO.FileStream]::new($sourcePath, [IO.FileMode]::Open, [IO.FileAccess]::Read, [IO.FileShare]::None)
    $output = [IO.FileStream]::new($partialPath, [IO.FileMode]::CreateNew, [IO.FileAccess]::Write, [IO.FileShare]::None)
    try { $input.CopyTo($output); $output.Flush($true) } finally { $output.Dispose(); $input.Dispose() }
    $partial = Read-FileSnapshot $partialPath $true; Assert-ExpectedContent $partial; Assert-OpaqueSource $partial 'partial import'
    [IO.File]::Move($partialPath, $productPath)
    $final = Read-FileSnapshot $productPath $true; Assert-ExpectedContent $final; Assert-OpaqueSource $final 'final import'
    $final | Add-Member -NotePropertyName schema -NotePropertyValue 'horizon.first-run.custody.v2'
    $final | Add-Member -NotePropertyName control -NotePropertyValue 'FRFC-014-v2'
    $final | Add-Member -NotePropertyName attempt -NotePropertyValue $AttemptId
    $final | ConvertTo-Json -Compress
  }
  'DeleteProductPartial' {
    $partial = Read-FileSnapshot $partialPath $true; Assert-Expected $partial
    $second = Read-FileSnapshot $partialPath $true; Assert-Expected $second
    [IO.File]::Delete($partialPath)
    if (Test-Path -LiteralPath $partialPath) { throw 'product partial deletion did not reach absence' }
    [pscustomobject]@{schema='horizon.first-run.custody.v2';control='FRFC-014-v2';action='delete_product_partial';identity=$ExpectedIdentity;sha256=$ExpectedSha256;absent=$true} | ConvertTo-Json -Compress
  }
  'DeleteRoot' {
    $root = Assert-OrdinaryDirectory $scratchRoot
    if ([string]::IsNullOrWhiteSpace($ExpectedIdentity) -or $root.identity -cne $ExpectedIdentity) { throw 'scratch root identity mismatch' }
    if ((Get-ChildItem -LiteralPath $scratchRoot -Force).Count -ne 0) { throw 'scratch root is not empty' }
    [IO.Directory]::Delete($scratchRoot, $false)
    if (Test-Path -LiteralPath $scratchRoot) { throw 'scratch root deletion did not reach absence' }
    [pscustomobject]@{schema='horizon.first-run.custody.v2';control='FRFC-014-v2';action='delete_root';identity=$ExpectedIdentity;absent=$true} | ConvertTo-Json -Compress
  }
  'SelfTestOpacity' { Invoke-OpacitySelfTest | ConvertTo-Json -Compress }
}
