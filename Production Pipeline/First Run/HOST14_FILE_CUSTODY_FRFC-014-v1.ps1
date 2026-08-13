param(
  [Parameter(Mandatory = $true)]
  [ValidateSet('CreateRoot','InspectRoot','InspectAttempt','DeleteAttempt','ImportSelected','DeleteProductPartial','DeleteRoot')]
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

if (-not ('FirstRunHost14.NativeIdentity' -as [type])) {
  Add-Type -TypeDefinition @'
using System;
using System.ComponentModel;
using System.Runtime.InteropServices;
using Microsoft.Win32.SafeHandles;

namespace FirstRunHost14 {
  [StructLayout(LayoutKind.Sequential)]
  internal struct ByHandleFileInformation {
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

  public static class NativeIdentity {
    [DllImport("kernel32.dll", SetLastError=true)]
    private static extern bool GetFileInformationByHandle(SafeFileHandle handle, out ByHandleFileInformation information);
    [DllImport("kernel32.dll", CharSet=CharSet.Unicode, SetLastError=true)]
    private static extern SafeFileHandle CreateFileW(string name, uint access, uint share, IntPtr security, uint creation, uint flags, IntPtr template);

    public static string FromFileHandle(SafeFileHandle handle) {
      ByHandleFileInformation information;
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
  return [pscustomobject]@{ path = $full; identity = [FirstRunHost14.NativeIdentity]::FromDirectory($full) }
}

function Assert-AttemptId([string]$Id) {
  if ($Id -notmatch '^H14-(?:[1-9]|[12][0-9]|3[0-2])$') { throw 'attempt identity must be H14-1 through H14-32' }
}

function Read-FileSnapshot([string]$Path, [bool]$RequirePng) {
  $full = [IO.Path]::GetFullPath($Path)
  $attrsBefore = [IO.File]::GetAttributes($full)
  if (($attrsBefore -band [IO.FileAttributes]::ReparsePoint) -ne 0) { throw "reparse file rejected: $full" }
  $stream = [IO.FileStream]::new($full, [IO.FileMode]::Open, [IO.FileAccess]::Read, [IO.FileShare]::None)
  try {
    $identityBefore = [FirstRunHost14.NativeIdentity]::FromFileHandle($stream.SafeFileHandle)
    if (-not $identityBefore.EndsWith(':1')) { throw "file link count is not one: $identityBefore" }
    $lengthBefore = $stream.Length
    $sha = [Security.Cryptography.SHA256]::Create()
    try { $hash = ([BitConverter]::ToString($sha.ComputeHash($stream))).Replace('-','').ToLowerInvariant() } finally { $sha.Dispose() }
    if ($stream.Position -ne $stream.Length) { throw 'same-handle hash did not reach EOF' }
    $width = $null; $height = $null; $pixelFormat = $null; $imageFlags = $null
    if ($RequirePng) {
      Add-Type -AssemblyName System.Drawing
      $stream.Position = 0
      $image = [Drawing.Image]::FromStream($stream, $true, $true)
      try {
        $bitmap = [Drawing.Bitmap]::new($image)
        try { $width = $bitmap.Width; $height = $bitmap.Height; $pixelFormat = $bitmap.PixelFormat.ToString(); $imageFlags = [int]$bitmap.Flags } finally { $bitmap.Dispose() }
      } finally { $image.Dispose() }
    }
    $identityAfter = [FirstRunHost14.NativeIdentity]::FromFileHandle($stream.SafeFileHandle)
    $lengthAfter = $stream.Length
    $attrsAfter = [IO.File]::GetAttributes($full)
    if ($identityBefore -cne $identityAfter -or $lengthBefore -ne $lengthAfter -or $attrsBefore -ne $attrsAfter) { throw 'same-handle identity changed during inspection' }
    return [pscustomobject]@{ path=$full; identity=$identityAfter; bytes=$lengthAfter; sha256=$hash; width=$width; height=$height; pixel_format=$pixelFormat; image_flags=$imageFlags }
  } finally { $stream.Dispose() }
}

function Assert-Expected($Snapshot) {
  if ([string]::IsNullOrWhiteSpace($ExpectedIdentity) -or $ExpectedBytes -lt 0 -or $ExpectedSha256 -notmatch '^[0-9a-f]{64}$') { throw 'expected identity, bytes, and lowercase SHA-256 are required' }
  if ($Snapshot.identity -cne $ExpectedIdentity -or $Snapshot.bytes -ne $ExpectedBytes -or $Snapshot.sha256 -cne $ExpectedSha256) { throw 'file differs from frozen expected identity' }
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
    [pscustomobject]@{schema='horizon.first-run.custody.v1';control='FRFC-014-v1';action='delete_attempt';attempt=$AttemptId;identity=$ExpectedIdentity;sha256=$ExpectedSha256;absent=$true} | ConvertTo-Json -Compress
  }
  'ImportSelected' {
    Assert-AttemptId $AttemptId
    Assert-OrdinaryDirectory $scratchRoot | Out-Null
    $sourcePath = Join-Path $scratchRoot "$AttemptId.png"
    $source = Read-FileSnapshot $sourcePath $true; Assert-Expected $source
    if ($source.width -ne 3840 -or $source.height -ne 2160 -or $source.pixel_format -ne 'Format24bppRgb') { throw 'selected source is not exact opaque RGB 3840x2160' }
    if (Test-Path -LiteralPath $productPath -or Test-Path -LiteralPath $partialPath) { throw 'product target or partial already exists' }
    if (-not (Test-Path -LiteralPath $productRoot)) { [IO.Directory]::CreateDirectory($productRoot) | Out-Null }
    Assert-OrdinaryDirectory $productRoot | Out-Null
    $input = [IO.FileStream]::new($sourcePath, [IO.FileMode]::Open, [IO.FileAccess]::Read, [IO.FileShare]::None)
    $output = [IO.FileStream]::new($partialPath, [IO.FileMode]::CreateNew, [IO.FileAccess]::Write, [IO.FileShare]::None)
    try { $input.CopyTo($output); $output.Flush($true) } finally { $output.Dispose(); $input.Dispose() }
    $partial = Read-FileSnapshot $partialPath $true
    if ($partial.bytes -ne $ExpectedBytes -or $partial.sha256 -cne $ExpectedSha256 -or $partial.width -ne 3840 -or $partial.height -ne 2160 -or $partial.pixel_format -ne 'Format24bppRgb') { throw 'partial import identity mismatch' }
    [IO.File]::Move($partialPath, $productPath)
    $final = Read-FileSnapshot $productPath $true
    if ($final.bytes -ne $ExpectedBytes -or $final.sha256 -cne $ExpectedSha256 -or $final.width -ne 3840 -or $final.height -ne 2160 -or $final.pixel_format -ne 'Format24bppRgb') { throw 'final import identity mismatch' }
    $final | Add-Member -NotePropertyName schema -NotePropertyValue 'horizon.first-run.custody.v1'
    $final | Add-Member -NotePropertyName control -NotePropertyValue 'FRFC-014-v1'
    $final | Add-Member -NotePropertyName attempt -NotePropertyValue $AttemptId
    $final | ConvertTo-Json -Compress
  }
  'DeleteProductPartial' {
    $partial = Read-FileSnapshot $partialPath $true; Assert-Expected $partial
    $second = Read-FileSnapshot $partialPath $true; Assert-Expected $second
    [IO.File]::Delete($partialPath)
    if (Test-Path -LiteralPath $partialPath) { throw 'product partial deletion did not reach absence' }
    [pscustomobject]@{schema='horizon.first-run.custody.v1';control='FRFC-014-v1';action='delete_product_partial';identity=$ExpectedIdentity;sha256=$ExpectedSha256;absent=$true} | ConvertTo-Json -Compress
  }
  'DeleteRoot' {
    $root = Assert-OrdinaryDirectory $scratchRoot
    if ([string]::IsNullOrWhiteSpace($ExpectedIdentity) -or $root.identity -cne $ExpectedIdentity) { throw 'scratch root identity mismatch' }
    if ((Get-ChildItem -LiteralPath $scratchRoot -Force).Count -ne 0) { throw 'scratch root is not empty' }
    [IO.Directory]::Delete($scratchRoot, $false)
    if (Test-Path -LiteralPath $scratchRoot) { throw 'scratch root deletion did not reach absence' }
    [pscustomobject]@{schema='horizon.first-run.custody.v1';control='FRFC-014-v1';action='delete_root';identity=$ExpectedIdentity;absent=$true} | ConvertTo-Json -Compress
  }
}
