# First Run Shell Variance - Complete Same-Process Production Tail

Variance ID: `FRSH-005-v1-VR-11`

Disposition: **`FIRST RUN SHELL READY / COMPLETE SAME-PROCESS PRODUCTION
TAIL FROZEN / CREDENTIAL-CLEARED SCIENCE FIXTURE REQUIRED /
FRSH-005-v1-VR-11`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / decisive Science return: `FRWO-005-v7` /
`FRVE-005-v7-VR-08`

Quartermaster return: `FRCA-005-v4`

Effective prior shell: `FRSH-005-v1` through `FRSH-005-v1-VR-10`

Effective treatment / blueprint: `FRDT-005-v1-VR-01` /
`FRPX-005-v1-VR-01`

Functional report: `FRCE-005-v1-VR-05`

Mission source inspected:
`8b3c9d6ee47734fe102f307bf76083e098c8d0f3`

Corrected inert code candidate:
`f4b2062508f9e0606953a4cc9bcdaff09b66ebc4`

Corrected candidate tree:
`92b22fc56d79d18cf1abf7213c5268c9e4149830`

Immutable accepted-media manifest: `FRAM-001-v1`, file SHA-256
`a674c337b377de113eaa4c6763bd431afc73ab613374a76501aa8c5ce37e5437`,
exact `17 / 37,410,731`, canonical digest
`c7ca95201029b490f2460a846e3dc2a64a26775b57e8c587cbc2d874df654d99`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Date: **2026-08-11**

Exact next recipient: one fresh Office of Science Administrator /
`office_of_science_administrator`

## Mission decision

Mission accepts `FRCA-005-v4`. The frozen `2,001`-byte launcher invokes only
the process environment value. `FRSH-005-v1-VR-09` froze that value as the
exact `976`-byte pre-helper, while `FRSH-005-v1-VR-10` authorized a later
helper/API continuation without giving that continuation any executable
carrier. Reaching end of the pre-helper therefore returned to the launcher and
ended the only child process. The contradiction is a shell defect.

This variance repairs only that defect. The exact environment value is now a
single combined script: the byte-identical accepted `976`-byte pre-helper
prefix followed immediately by the exact production tail frozen below. The
launcher, executable, argument order, environment name, parser, call-operator
invocation, `PH01..PH08`, PS5.1/bitness gates, root primitive, and pre-helper
failure semantics do not change. The tail executes inside the same invoked
script block and therefore inside the same bounded PowerShell process. It
does not use a second environment name, command, process, shell, source file,
stdin payload, encoded command, profile, interpolation, or alternate transport.

The former `976`-byte value identity is retained as the mandatory prefix
identity, not as the complete value identity. This explicitly supersedes only
the complete-value clauses of `FRSH-005-v1-VR-09` and
`FRSH-005-v1-VR-10`. It also supersedes the claim that the environment value
contains no endpoint, prompt, request schema, or production instructions; it
still contains no key, header value, response, base64 output, media bytes,
native tuple, review result, or diagnostic body.

Variance classification: **`REQUIRED CORRECTION RESOLVED / FROZEN
PRE-HELPER-TO-PRODUCTION SAME-PROCESS CONTINUATION`**.

## Exact combined environment value

Transport contract ID: `HOST06-PREHELPER-PRODUCTION-PS51-v2`.

The sole process-environment name remains exact:

```text
HORIZON_ARCHIVE_HOST06_PREHELPER_V1
```

The exact launcher remains byte-identical:

```text
byteLength=2001
sha256=96feaf7e62fa89e8c80cc46d38425d465cf845ffbd426405a75c73c056314212
```

It remains the sole `-Command` value to exact
`C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe`, with arguments
`-NoLogo -NoProfile -NonInteractive -ExecutionPolicy Bypass -Command` in that
order.

The combined environment value is UTF-8 without BOM, LF-only, including its
final LF. Its exact identity is frozen after the literal block below:

```text
byteLength=27044
sha256=015dfd96befad29793892f1e15dc9ff4362ff8cec0ae4ce7b9c45b5da9e125f3
```

Bytes `[0..975]` of that value must independently equal the exact accepted
pre-helper:

```text
prefixByteLength=976
prefixSha256=5cd257c94bcd70b8d6ada4e0b561b2a14ed52fd9459146b1269dc93ce1bdc7d1
```

Bytes `[976..end]` are the exact production tail:

```text
tailByteLength=26068
tailSha256=e9815ce8f988bca0f1f9bd14a7ba50cfa4935b3d7a47492c95bfa90986b7070c
```

The exact combined value is formed by concatenating, with no inserted or
removed byte, the complete `prehelper` block in `FRSH-005-v1-VR-09` and the
following exact `production-tail` block. The `prehelper` block's final LF is
byte `975`; the first `$` below is byte `976`.

```powershell production-tail
$production=@{Stage='PT01_TAIL_ENTRY';Ordinal=0;SendStarted=$false;HelperOwned=$true;HelperIdentity=$false;LiveOwned=$false;ActivePath=$null;ActiveIdentity=$null;ProductRootOwned=$false;ProductOwned=$false;ProvenanceOwned=$false}
$liveRoot='C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-api-6eae8313-1407-492d-af7c-675051ab8e08'
$productRoot='C:\Users\marti\OneDrive\Desktop\Horizon Archive\Visual Direction\Production Masters\2026-08-10-first-run-host06'
$productRaster=$productRoot+'\host06-stranded-lens-cradle-master-v1.png'
$productProvenance=$productRoot+'\PROVENANCE.md'
$sourceBytes=$null
$assemblyBytes=$null
$credential=$null
$responseBytes=$null
$decodedBytes=$null
try {
  $production.Stage='PT02_HELPER_SOURCE'
  $helperSource=@"
using System;
using System.ComponentModel;
using System.Runtime.InteropServices;
using Microsoft.Win32.SafeHandles;
namespace HorizonArchive.Host06 {
  public static class FileIdentity {
    [StructLayout(LayoutKind.Sequential)]
    private struct BY_HANDLE_FILE_INFORMATION {
      public uint FileAttributes;
      public System.Runtime.InteropServices.ComTypes.FILETIME CreationTime;
      public System.Runtime.InteropServices.ComTypes.FILETIME LastAccessTime;
      public System.Runtime.InteropServices.ComTypes.FILETIME LastWriteTime;
      public uint VolumeSerialNumber;
      public uint FileSizeHigh;
      public uint FileSizeLow;
      public uint NumberOfLinks;
      public uint FileIndexHigh;
      public uint FileIndexLow;
    }
    [DllImport("kernel32.dll", SetLastError = true)]
    [return: MarshalAs(UnmanagedType.Bool)]
    private static extern bool GetFileInformationByHandle(
      SafeFileHandle handle,
      out BY_HANDLE_FILE_INFORMATION information);
    public static ulong[] Read(SafeFileHandle handle) {
      if (handle == null || handle.IsInvalid || handle.IsClosed) {
        throw new ArgumentException("An open SafeFileHandle is required.", "handle");
      }
      BY_HANDLE_FILE_INFORMATION information;
      if (!GetFileInformationByHandle(handle, out information)) {
        throw new Win32Exception(Marshal.GetLastWin32Error());
      }
      return new ulong[] {
        information.VolumeSerialNumber,
        ((ulong)information.FileIndexHigh << 32) | information.FileIndexLow,
        information.NumberOfLinks,
        information.FileAttributes,
        ((ulong)information.FileSizeHigh << 32) | information.FileSizeLow
      };
    }
  }
}
"@
  $utf8=New-Object Text.UTF8Encoding($false,$true)
  $sha=[Security.Cryptography.SHA256]::Create()
  $sourceBytes=$utf8.GetBytes($helperSource)
  if ($sourceBytes.Length -ne 1693 -or ([BitConverter]::ToString($sha.ComputeHash($sourceBytes))).Replace('-','').ToLowerInvariant() -cne '98cf564b7d22da686adc204a3f6051927ac2d37ef7b5f2fe22d774cb10d5da97') { throw 'PT02_HELPER_SOURCE' }
  $production.Stage='PT03_HELPER_COMPILE'
  $oldWarning=$WarningPreference
  try {
    $WarningPreference='Stop'
    $compileOutput=@(Add-Type -TypeDefinition $helperSource -Language CSharp -OutputAssembly $helperDll -ErrorAction Stop)
  } finally { $WarningPreference=$oldWarning }
  if ($compileOutput.Count -ne 0) { throw 'PT03_HELPER_COMPILE' }
  if (-not [IO.File]::Exists($helperDll) -or [IO.Directory]::Exists($helperDll)) { throw 'PT03_HELPER_COMPILE' }
  $dllInfo=[IO.FileInfo]$helperDll
  if ($dllInfo.Length -ne 4096 -or (($dllInfo.Attributes -band [IO.FileAttributes]::ReparsePoint) -ne 0)) { throw 'PT03_HELPER_COMPILE' }
  $assemblyBytes=[IO.File]::ReadAllBytes($helperDll)
  if (([BitConverter]::ToString($sha.ComputeHash($assemblyBytes))).Replace('-','').ToLowerInvariant() -cne '39e85b32b7f8437c2b5732e26093ca5bd9a9182b048c411e9dc5660ba03f10c9') { throw 'PT03_HELPER_COMPILE' }
  $production.Stage='PT04_HELPER_LOAD_IDENTITY'
  $assembly=[Reflection.Assembly]::Load($assemblyBytes)
  $identityType=$assembly.GetType('HorizonArchive.Host06.FileIdentity',$true,$false)
  $readMethod=$identityType.GetMethod('Read',[Reflection.BindingFlags]'Public,Static')
  $declared=$identityType.GetMethods([Reflection.BindingFlags]'Public,NonPublic,Static,DeclaredOnly')
  if ($declared.Count -ne 2 -or $readMethod.ReturnType.FullName -cne 'System.UInt64[]' -or $readMethod.GetParameters().Count -ne 1 -or $readMethod.GetParameters()[0].ParameterType.FullName -cne 'Microsoft.Win32.SafeHandles.SafeFileHandle') { throw 'PT04_HELPER_LOAD_IDENTITY' }
  $dllStream=New-Object IO.FileStream($helperDll,[IO.FileMode]::Open,[IO.FileAccess]::Read,[IO.FileShare]::None)
  try { $dllIdentity=[HorizonArchive.Host06.FileIdentity]::Read($dllStream.SafeFileHandle) } finally { $dllStream.Dispose() }
  if ($dllIdentity.Count -ne 5 -or $dllIdentity[2] -ne 1 -or (($dllIdentity[3] -band 0x400) -ne 0) -or $dllIdentity[4] -ne 4096) { throw 'PT04_HELPER_LOAD_IDENTITY' }
  $production.HelperIdentity=$true
  [IO.File]::Delete($helperDll)
  if ([IO.File]::Exists($helperDll) -or [IO.Directory]::Exists($helperDll)) { throw 'PT05_HELPER_CLEANUP' }
  [IO.Directory]::Delete($helperRoot,$false)
  if ([IO.Directory]::Exists($helperRoot) -or [IO.File]::Exists($helperRoot)) { throw 'PT05_HELPER_CLEANUP' }
  $production.HelperOwned=$false
  $production.Stage='PT06_CREDENTIAL_GATE'
  $credential=[Environment]::GetEnvironmentVariable('OPENAI_API_KEY','Process')
  if ([string]::IsNullOrWhiteSpace($credential)) { throw 'PT06_CREDENTIAL_GATE' }
  if ([IO.Directory]::Exists($liveRoot) -or [IO.File]::Exists($liveRoot)) { throw 'PT07_LIVE_ROOT_CREATE' }
  $liveCreated=[IO.Directory]::CreateDirectory($liveRoot)
  if ($liveCreated.FullName -cne $liveRoot -or (($liveCreated.Attributes -band [IO.FileAttributes]::ReparsePoint) -ne 0)) { throw 'PT07_LIVE_ROOT_CREATE' }
  $production.LiveOwned=$true
  $production.Stage='PT08_REQUEST_SCHEMA'
  $prompt=@"
Use case: stylized-concept
Asset type: final runtime 16:9 first-person environment plate for Horizon Archive Host 06
Primary request: Create one premium contemporary, maximum-quality cinematic science-fiction environment view of the Stranded Lens Cradle in the existing Drowned Archive basin. Show one visibly weathered lens resting inside one tilted conformal cradle on an already-dry, above-water local reach. The scene must preserve quiet scientific uncertainty about whether the lens was stranded by a former phase or is exactly where it belongs.
Scene/backdrop: One local next reach of the same enormous flooded Builder phase-processing basin, continuous with the prior Sixfold Weir rather than a second basin, teleport, cutaway, or lesson diagram. Keep a ruler-straight horizon and reflected horizon, restrained atmosphere, and physically legible old process routing.
Subject: The complete lens-and-cradle relation is the single discovery center. At least 80 percent of the visible lens body lies within the projected inner cradle. Tilt the cradle principal axis 12 to 35 degrees from image horizontal. Show at least two distinct load or stress-control contacts coupling lens, cradle, and supporting fabric; at least two continuous drainage seams leading away toward basin drainage; at least 2 percent of source height of dry clearance above live water; and one continuous dry material approach. Show at least three lens-like fragments leading from the Host 05 side toward but not into the activation region. Make the horizon or its reflection cross at least 25 percent of the visible inner lens width.
Style/medium: Feature-film environment credibility and flagship current-generation game key art; photorealistic materials, physically convincing smoky phase glass, ceramic ribs, mineral deposition, corrosion, abrasion, dust, inclusions, refraction, internal reflection, caustics, repair seams, and several visible stewardship eras. Builder beauty must read as accumulated functional civic construction, engineered ecology, maintenance, revision, graceful failure, and nonhuman process rather than generic fantasy ornament or human industry.
Composition/framing: Exact wide 3840 by 2160 landscape intent, first-person eye level, centered full-source presentation with no required crop. Keep the top 10 percent free of essential physical fact. Place the complete Host 06 relation wholly within normalized x 0.34 to 0.70 and y 0.30 to 0.74, with a tight relation rectangle width 0.30 to 0.36 and height 0.30 to 0.40. Place the Host 05 fragment approach wholly within x 0.04 to 0.30 and y 0.56 to 0.88. Reserve same-basin distant context within x 0.70 to 0.98 and y 0.08 to 0.56. Live water may occupy x 0.68 to 0.98 and y 0.62 to 0.92 but must not intersect the relation or dry approach. Keep the relation distinct from live water, the Host 05 cue, a return-like ridge, the Crown, the distant suspended Tidal Lens, and any second lens/cradle candidate.
Lighting/mood: Restrained natural basin light, horizon reflection caught by the inner lens, sober discovery, deep atmospheric scale, no magical glow, spectacle cue, invitation, reward, activation flash, or world response.
Text: No text.
Constraints: No image input. No protagonist, body, hands, shadow, reflection, portrait, companion, ship, person, face, human path, human control, label, glyph, symbol, interface, overlay, beacon, readable mark, prior-human trace, or native educational graphic. The Machine and Builders do not speak, react, recognize, reward, authorize, invite, judge, explain, move, heal, aim, drain, illuminate, or open anything because of the player. Preserve physical ambiguity and surface-safe canon.
Avoid: Empty ring; lens beside, behind, through, or in front of an aperture; submerged or water-filled cradle; inaccessible scenic landmark; duplicate lens/cradle relation; the distant Tidal Lens as Host 06; generic ruins; terrestrial industrial shorthand; arbitrary fantasy ornament; answer key; model or deployment diagram; purpose certainty; hidden-lore answer; watermark; border; crop-dependent essential fact.
"@
  if($prompt.EndsWith("`n")){$prompt=$prompt.Substring(0,$prompt.Length-1)}
  $promptBytes=$utf8.GetBytes($prompt)
  if ($promptBytes.Length -ne 4099 -or ([BitConverter]::ToString($sha.ComputeHash($promptBytes))).Replace('-','').ToLowerInvariant() -cne 'efd8c7f8b5ca6c0ec9e16ac82cdb008921a480e549b3b0b1b4b767f79e323179') { throw 'PT08_REQUEST_SCHEMA' }
  Add-Type -AssemblyName System.Net.Http -ErrorAction Stop
  Add-Type -AssemblyName System.Web.Extensions -ErrorAction Stop
  $serializer=New-Object Web.Script.Serialization.JavaScriptSerializer
  $requestObject=[ordered]@{model='gpt-image-2';prompt=$prompt;n=1;size='3840x2160';quality='high';background='opaque';output_format='png'}
  $requestJson=$serializer.Serialize($requestObject)
  if ($requestObject.Count -ne 7) { throw 'PT08_REQUEST_SCHEMA' }
  foreach ($ordinal in @(2,3)) {
    if ($ordinal -eq 3 -and $ordinal2Rejected -ne $true) { break }
    $production.Ordinal=$ordinal
    $production.Stage='PT09_SEND_ENTRY'
    $stagePath=if($ordinal -eq 2){$liveRoot+'\.attempt-02-5f858a43-216c-4344-a4ce-0bfbcd042bcb.stage'}else{$liveRoot+'\.attempt-03-63422fd8-bf71-489b-921a-5acb0fca7357.stage'}
    $targetPath=if($ordinal -eq 2){$liveRoot+'\attempt-02.png'}else{$liveRoot+'\attempt-03.png'}
    $decisionPath=if($ordinal -eq 2){$liveRoot+'\.attempt-02.review-v1'}else{$liveRoot+'\.attempt-03.review-v1'}
    foreach($path in @($stagePath,$targetPath,$decisionPath)){if([IO.File]::Exists($path)-or[IO.Directory]::Exists($path)){throw 'PT09_SEND_ENTRY'}}
    $handler=New-Object Net.Http.HttpClientHandler
    $handler.AllowAutoRedirect=$false
    $client=New-Object Net.Http.HttpClient($handler)
    $client.Timeout=[TimeSpan]::FromMinutes(10)
    $request=New-Object Net.Http.HttpRequestMessage([Net.Http.HttpMethod]::Post,'https://api.openai.com/v1/images/generations')
    $request.Headers.Authorization=New-Object Net.Http.Headers.AuthenticationHeaderValue('Bearer',$credential)
    $request.Headers.Accept.ParseAdd('application/json')
    $request.Content=New-Object Net.Http.StringContent($requestJson,$utf8,'application/json')
    $production.SendStarted=$true
    try { $response=$client.SendAsync($request,[Net.Http.HttpCompletionOption]::ResponseHeadersRead).GetAwaiter().GetResult() } finally { $request.Dispose();$client.Dispose();$handler.Dispose() }
    if ([int]$response.StatusCode -ne 200 -or $response.Content.Headers.ContentType.MediaType -cne 'application/json') { $response.Dispose();throw 'PT10_RESPONSE_ENVELOPE' }
    if ($response.Content.Headers.ContentLength.HasValue -and ($response.Content.Headers.ContentLength.Value -lt 1 -or $response.Content.Headers.ContentLength.Value -gt 16500000)) { $response.Dispose();throw 'PT10_RESPONSE_ENVELOPE' }
    $stream=$response.Content.ReadAsStreamAsync().GetAwaiter().GetResult()
    $memory=New-Object IO.MemoryStream
    $buffer=New-Object byte[] 65536
    try { while(($read=$stream.Read($buffer,0,$buffer.Length)) -gt 0){if($memory.Length+$read -gt 16500000){throw 'PT10_RESPONSE_ENVELOPE'};$memory.Write($buffer,0,$read)};$responseBytes=$memory.ToArray() } finally { $memory.Dispose();$stream.Dispose();$response.Dispose() }
    $production.Stage='PT11_RESPONSE_PARSE'
    $responseText=$utf8.GetString($responseBytes)
    $match=[regex]::Match($responseText,'\A\s*\{\s*"data"\s*:\s*\[\s*\{\s*"b64_json"\s*:\s*"(?<b64>[A-Za-z0-9+/]*={0,2})"\s*\}\s*\]\s*\}\s*\z',[Text.RegularExpressions.RegexOptions]::CultureInvariant)
    if (-not $match.Success) { throw 'PT11_RESPONSE_PARSE' }
    $b64=$match.Groups['b64'].Value
    if ($b64.Length -lt 4 -or $b64.Length -gt 16000000 -or ($b64.Length%4) -ne 0) { throw 'PT11_RESPONSE_PARSE' }
    $decodedLength=($b64.Length/4*3)-($(if($b64.EndsWith('==')){2}elseif($b64.EndsWith('=')){1}else{0}))
    if ($decodedLength -lt 1 -or $decodedLength -gt 12000000) { throw 'PT11_RESPONSE_PARSE' }
    $decodedBytes=[Convert]::FromBase64String($b64)
    if ($decodedBytes.Length -ne $decodedLength -or [Convert]::ToBase64String($decodedBytes) -cne $b64) { throw 'PT11_RESPONSE_PARSE' }
    $responseText=$null;$responseBytes=$null;$b64=$null
    $production.Stage='PT12_MATERIALIZE_STAGE'
    $writeStream=New-Object IO.FileStream($stagePath,[IO.FileMode]::CreateNew,[IO.FileAccess]::Write,[IO.FileShare]::None)
    $production.ActivePath=$stagePath
    try {$writeStream.Write($decodedBytes,0,$decodedBytes.Length);$writeStream.Flush($true);$writeIdentity=[HorizonArchive.Host06.FileIdentity]::Read($writeStream.SafeFileHandle)}finally{$writeStream.Dispose()}
    if($writeIdentity.Count-ne 5-or$writeIdentity[2]-ne 1-or(($writeIdentity[3]-band 0x400)-ne 0)-or$writeIdentity[4]-ne $decodedBytes.Length){throw 'PT12_MATERIALIZE_STAGE'}
    $decodedSha=([BitConverter]::ToString($sha.ComputeHash($decodedBytes))).Replace('-','').ToLowerInvariant()
    $readStream=New-Object IO.FileStream($stagePath,[IO.FileMode]::Open,[IO.FileAccess]::Read,[IO.FileShare]::None)
    try{$readIdentity=[HorizonArchive.Host06.FileIdentity]::Read($readStream.SafeFileHandle);$fileSha=([BitConverter]::ToString($sha.ComputeHash($readStream))).Replace('-','').ToLowerInvariant();$preMove=[HorizonArchive.Host06.FileIdentity]::Read($readStream.SafeFileHandle)}finally{$readStream.Dispose()}
    if(($writeIdentity[0]-ne$readIdentity[0])-or($writeIdentity[1]-ne$readIdentity[1])-or($readIdentity[0]-ne$preMove[0])-or($readIdentity[1]-ne$preMove[1])-or$readIdentity[2]-ne 1-or(($readIdentity[3]-band 0x400)-ne 0)-or$readIdentity[4]-ne$decodedBytes.Length-or$fileSha-cne$decodedSha){throw 'PT12_MATERIALIZE_STAGE'}
    if([IO.File]::Exists($targetPath)-or[IO.Directory]::Exists($targetPath)){throw 'PT12_MATERIALIZE_STAGE'}
    [IO.File]::Move($stagePath,$targetPath)
    $production.ActivePath=$targetPath
    $targetStream=New-Object IO.FileStream($targetPath,[IO.FileMode]::Open,[IO.FileAccess]::Read,[IO.FileShare]::None)
    try{$targetIdentity=[HorizonArchive.Host06.FileIdentity]::Read($targetStream.SafeFileHandle)}finally{$targetStream.Dispose()}
    if(($writeIdentity[0]-ne$targetIdentity[0])-or($writeIdentity[1]-ne$targetIdentity[1])-or$targetIdentity[2]-ne 1-or(($targetIdentity[3]-band 0x400)-ne 0)-or$targetIdentity[4]-ne$decodedBytes.Length){throw 'PT12_MATERIALIZE_STAGE'}
    $production.ActiveIdentity=@($targetIdentity)
    $decodedBytes=$null
    $production.Stage='PT13_REVIEW_WAIT'
    [Console]::Out.WriteLine('HOST06_REVIEW_READY|ordinal='+$ordinal+'|length='+$targetIdentity[4]+'|sha256='+$decodedSha)
    $deadline=[DateTime]::UtcNow.AddMinutes(20)
    while(-not [IO.File]::Exists($decisionPath)){if([DateTime]::UtcNow-ge$deadline){throw 'PT13_REVIEW_WAIT'};[Threading.Thread]::Sleep(250)}
    $decisionInfo=[IO.FileInfo]$decisionPath
    if($decisionInfo.Length-lt 1-or$decisionInfo.Length-gt 512-or(($decisionInfo.Attributes-band[IO.FileAttributes]::ReparsePoint)-ne 0)){throw 'PT14_REVIEW_DECISION'}
    $decisionBytes=[IO.File]::ReadAllBytes($decisionPath)
    $decision=$utf8.GetString($decisionBytes)
    $decisionPattern='\AHOST06_REVIEW_V1\|ordinal='+$ordinal+'\|decision=(?<decision>ACCEPT|REJECT)\|technical=true\|physical=(?<physical>true|false)\|layouts=(?<layouts>true|false)\|accessibility=(?<accessibility>true|false)\|codes=(?<codes>NONE|PHY(?:-\d{2})(?:,PHY-\d{2})*|LAYOUT|ACCESSIBILITY)\n\z'
    $decisionMatch=[regex]::Match($decision,$decisionPattern,[Text.RegularExpressions.RegexOptions]::CultureInvariant)
    if(-not$decisionMatch.Success){throw 'PT14_REVIEW_DECISION'}
    [IO.File]::Delete($decisionPath)
    if([IO.File]::Exists($decisionPath)-or[IO.Directory]::Exists($decisionPath)){throw 'PT14_REVIEW_DECISION'}
    $accepted=($decisionMatch.Groups['decision'].Value-ceq'ACCEPT')
    if($accepted-and($decisionMatch.Groups['physical'].Value-cne'true'-or$decisionMatch.Groups['layouts'].Value-cne'true'-or$decisionMatch.Groups['accessibility'].Value-cne'true'-or$decisionMatch.Groups['codes'].Value-cne'NONE')){throw 'PT14_REVIEW_DECISION'}
    if(-not$accepted){
      if($decisionMatch.Groups['codes'].Value-ceq'NONE'){throw 'PT14_REVIEW_DECISION'}
      $cleanupStream=New-Object IO.FileStream($targetPath,[IO.FileMode]::Open,[IO.FileAccess]::Read,[IO.FileShare]::None)
      try{$cleanupIdentity=[HorizonArchive.Host06.FileIdentity]::Read($cleanupStream.SafeFileHandle)}finally{$cleanupStream.Dispose()}
      if(($cleanupIdentity[0]-ne$targetIdentity[0])-or($cleanupIdentity[1]-ne$targetIdentity[1])-or$cleanupIdentity[2]-ne 1-or(($cleanupIdentity[3]-band 0x400)-ne 0)-or$cleanupIdentity[4]-ne$targetIdentity[4]){throw 'PT15_REJECTION_CLEANUP'}
      [IO.File]::Delete($targetPath)
      if([IO.File]::Exists($targetPath)-or[IO.Directory]::Exists($targetPath)){throw 'PT15_REJECTION_CLEANUP'}
      $production.ActivePath=$null;$production.ActiveIdentity=$null
      if($ordinal-eq 2){$ordinal2Rejected=$true;continue}else{throw 'PT15_OBJECTIVE_REJECTION_LIMIT'}
    }
    $production.Stage='PT16_PRODUCT_IMPORT'
    if([IO.File]::Exists($productRaster)-or[IO.Directory]::Exists($productRaster)-or[IO.File]::Exists($productProvenance)-or[IO.Directory]::Exists($productProvenance)){throw 'PT16_PRODUCT_IMPORT'}
    if(-not[IO.Directory]::Exists((Split-Path -Parent $productRoot))){throw 'PT16_PRODUCT_IMPORT'}
    if(-not[IO.Directory]::Exists($productRoot)){$productCreated=[IO.Directory]::CreateDirectory($productRoot);$production.ProductRootOwned=$true;if($productCreated.FullName-cne$productRoot-or(($productCreated.Attributes-band[IO.FileAttributes]::ReparsePoint)-ne 0)){throw 'PT16_PRODUCT_IMPORT'}}
    $sourceStream=New-Object IO.FileStream($targetPath,[IO.FileMode]::Open,[IO.FileAccess]::Read,[IO.FileShare]::None)
    $productStream=New-Object IO.FileStream($productRaster,[IO.FileMode]::CreateNew,[IO.FileAccess]::Write,[IO.FileShare]::None)
    $production.ProductOwned=$true
    try{$sourceStream.CopyTo($productStream);$productStream.Flush($true)}finally{$productStream.Dispose();$sourceStream.Dispose()}
    $productBytes=[IO.File]::ReadAllBytes($productRaster)
    if($productBytes.Length-ne$targetIdentity[4]-or([BitConverter]::ToString($sha.ComputeHash($productBytes))).Replace('-','').ToLowerInvariant()-cne$decodedSha){throw 'PT16_PRODUCT_IMPORT'}
    $provenance="# HOST06 Source Provenance`n`nWork Order: FRWO-005-v7`nShell: FRSH-005-v1 through FRSH-005-v1-VR-11`nHelper: HOST06-FILE-IDENTITY-PSNET-v1`nHelper source: 1693 / 98cf564b7d22da686adc204a3f6051927ac2d37ef7b5f2fe22d774cb10d5da97`nHelper DLL: 4096 / 39e85b32b7f8437c2b5732e26093ca5bd9a9182b048c411e9dc5660ba03f10c9`nTransport: HOST06-IMAGE-API-PSNET-v1`nEndpoint: https://api.openai.com/v1/images/generations`nModel/options: gpt-image-2 / n=1 / 3840x2160 / high / opaque / png`nPrompt: HOST06-GEN-PROMPT-v1 / no input`nConsumed ordinals: "+$(if($ordinal-eq 2){'2 accepted'}else{'2 objective rejection; 3 accepted'})+"`nSelected attempt: attempt-0"+$ordinal+".png`nSelected identity: "+$targetIdentity[4]+" / "+$decodedSha+"`nTechnical/physical/layout/accessibility: pass / pass / pass / pass`nManifest: c7ca95201029b490f2460a846e3dc2a64a26775b57e8c587cbc2d874df654d99`nProduct: Visual Direction/Production Masters/2026-08-10-first-run-host06/host06-stranded-lens-cradle-master-v1.png`nAccepted media unchanged: true`nHelper/live cleanup: complete`n"
    $provenanceStream=New-Object IO.FileStream($productProvenance,[IO.FileMode]::CreateNew,[IO.FileAccess]::Write,[IO.FileShare]::None)
    $production.ProvenanceOwned=$true
    try{$provenanceBytes=$utf8.GetBytes($provenance);$provenanceStream.Write($provenanceBytes,0,$provenanceBytes.Length);$provenanceStream.Flush($true)}finally{$provenanceStream.Dispose()}
    $cleanupStream=New-Object IO.FileStream($targetPath,[IO.FileMode]::Open,[IO.FileAccess]::Read,[IO.FileShare]::None)
    try{$cleanupIdentity=[HorizonArchive.Host06.FileIdentity]::Read($cleanupStream.SafeFileHandle)}finally{$cleanupStream.Dispose()}
    if(($cleanupIdentity[0]-ne$targetIdentity[0])-or($cleanupIdentity[1]-ne$targetIdentity[1])-or$cleanupIdentity[2]-ne 1-or(($cleanupIdentity[3]-band 0x400)-ne 0)-or$cleanupIdentity[4]-ne$targetIdentity[4]){throw 'PT17_SUCCESS_CLEANUP'}
    [IO.File]::Delete($targetPath)
    $production.ActivePath=$null;$production.ActiveIdentity=$null
    [IO.Directory]::Delete($liveRoot,$false)
    $production.LiveOwned=$false
    if([IO.Directory]::Exists($liveRoot)-or[IO.File]::Exists($liveRoot)){throw 'PT17_SUCCESS_CLEANUP'}
    $production.Stage='PT18_COMPLETE'
    [Console]::Out.WriteLine('HOST06_PRODUCTION_COMPLETE|ordinal='+$ordinal+'|length='+$targetIdentity[4]+'|sha256='+$decodedSha+'|helperRootAbsent=true|liveRootAbsent=true')
    break
  }
} catch {
  $failureStage=$production.Stage
  if($_.Exception.Message -match '\APT\d{2}_[A-Z0-9_]+\z'){$failureStage=$_.Exception.Message}
  $activeAbsent=$true
  if($production.ActivePath){$activeAbsent=(-not[IO.File]::Exists($production.ActivePath)-and-not[IO.Directory]::Exists($production.ActivePath))}
  if($production.HelperOwned-and$production.HelperIdentity-and[IO.File]::Exists($helperDll)){try{[IO.File]::Delete($helperDll)}catch{}}
  if($production.HelperOwned-and-not[IO.File]::Exists($helperDll)-and[IO.Directory]::Exists($helperRoot)){try{[IO.Directory]::Delete($helperRoot,$false)}catch{}}
  if($production.ActivePath-and$production.ActiveIdentity-and[IO.File]::Exists($production.ActivePath)){
    try{$cleanupStream=New-Object IO.FileStream($production.ActivePath,[IO.FileMode]::Open,[IO.FileAccess]::Read,[IO.FileShare]::None);try{$cleanupIdentity=[HorizonArchive.Host06.FileIdentity]::Read($cleanupStream.SafeFileHandle)}finally{$cleanupStream.Dispose()};if(($cleanupIdentity[0]-eq$production.ActiveIdentity[0])-and($cleanupIdentity[1]-eq$production.ActiveIdentity[1])-and$cleanupIdentity[2]-eq 1-and(($cleanupIdentity[3]-band 0x400)-eq 0)-and$cleanupIdentity[4]-eq$production.ActiveIdentity[4]){[IO.File]::Delete($production.ActivePath)}}catch{}
  }
  if($production.LiveOwned-and[IO.Directory]::Exists($liveRoot)){try{[IO.Directory]::Delete($liveRoot,$false)}catch{}}
  if($production.ProvenanceOwned-and[IO.File]::Exists($productProvenance)){try{$provenanceInfo=[IO.FileInfo]$productProvenance;if(($provenanceInfo.Attributes-band[IO.FileAttributes]::ReparsePoint)-eq 0){[IO.File]::Delete($productProvenance)}}catch{}}
  if($production.ProductOwned-and[IO.File]::Exists($productRaster)){try{$rollbackInfo=[IO.FileInfo]$productRaster;if(($rollbackInfo.Attributes-band[IO.FileAttributes]::ReparsePoint)-eq 0-and$rollbackInfo.Length-eq$targetIdentity[4]-and([BitConverter]::ToString($sha.ComputeHash([IO.File]::ReadAllBytes($productRaster)))).Replace('-','').ToLowerInvariant()-ceq$decodedSha){[IO.File]::Delete($productRaster)}}catch{}}
  if($production.ProductRootOwned-and[IO.Directory]::Exists($productRoot)){try{[IO.Directory]::Delete($productRoot,$false)}catch{}}
  $helperRootAbsent=(-not[IO.Directory]::Exists($helperRoot)-and-not[IO.File]::Exists($helperRoot))
  $helperDllAbsent=(-not[IO.File]::Exists($helperDll)-and-not[IO.Directory]::Exists($helperDll))
  $liveRootAbsent=(-not[IO.Directory]::Exists($liveRoot)-and-not[IO.File]::Exists($liveRoot))
  $activeAbsent=$true;if($production.ActivePath){$activeAbsent=(-not[IO.File]::Exists($production.ActivePath)-and-not[IO.Directory]::Exists($production.ActivePath))}
  $productAbsent=(-not[IO.File]::Exists($productRaster)-and-not[IO.Directory]::Exists($productRaster))
  $provenanceAbsent=(-not[IO.File]::Exists($productProvenance)-and-not[IO.Directory]::Exists($productProvenance))
  [Console]::Error.WriteLine('HOST06_PRODUCTION_FAILURE|stage='+$failureStage+'|ordinal='+$production.Ordinal+'|sendStarted='+$production.SendStarted.ToString().ToLowerInvariant()+'|helperRootAbsent='+$helperRootAbsent.ToString().ToLowerInvariant()+'|helperDllAbsent='+$helperDllAbsent.ToString().ToLowerInvariant()+'|liveRootAbsent='+$liveRootAbsent.ToString().ToLowerInvariant()+'|activeAbsent='+$activeAbsent.ToString().ToLowerInvariant()+'|productAbsent='+$productAbsent.ToString().ToLowerInvariant()+'|provenanceAbsent='+$provenanceAbsent.ToString().ToLowerInvariant())
  exit 87
} finally {
  $credential=$null;$requestJson=$null;$requestObject=$null;$responseBytes=$null;$decodedBytes=$null;$sourceBytes=$null;$assemblyBytes=$null
}
```

## Tail state machine and review rendezvous

The exact production stages are ordered and first-failure only:

`PT01_TAIL_ENTRY`, `PT02_HELPER_SOURCE`, `PT03_HELPER_COMPILE`,
`PT04_HELPER_LOAD_IDENTITY`, `PT05_HELPER_CLEANUP`,
`PT06_CREDENTIAL_GATE`, `PT07_LIVE_ROOT_CREATE`, `PT08_REQUEST_SCHEMA`,
`PT09_SEND_ENTRY`, `PT10_RESPONSE_ENVELOPE`, `PT11_RESPONSE_PARSE`,
`PT12_MATERIALIZE_STAGE`, `PT13_REVIEW_WAIT`, `PT14_REVIEW_DECISION`,
`PT15_REJECTION_CLEANUP`, `PT15_OBJECTIVE_REJECTION_LIMIT`,
`PT16_PRODUCT_IMPORT`, `PT17_SUCCESS_CLEANUP`, and `PT18_COMPLETE`.

The review rendezvous is not a script, command, API, environment, or process
transport. It is one bounded data-only decision written while the same child
remains alive and owns the live root. The child accepts only the exact ordinal
path frozen above, UTF-8 without BOM, LF-only, one line, `1..512` bytes,
ordinary and non-reparse, with this exact schema:

```text
HOST06_REVIEW_V1|ordinal=<2|3>|decision=<ACCEPT|REJECT>|technical=true|physical=<true|false>|layouts=<true|false>|accessibility=<true|false>|codes=<NONE|allowlisted rejection codes>\n
```

Quartermaster may write it only after the exact target passes the complete
strict technical/browser-decode gate and after original-resolution
`PHY-01..12`, six-layout crop/mapping, focus, forced-color, reduced-motion,
and accessibility review. `ACCEPT` requires all four booleans true and
`codes=NONE`. `REJECT` requires an objective allowlisted code, exact target
identity, and authorizes ordinal `3` only after the same still-running process
deletes the exact ordinal-2 target and proves it absent. Timeout, malformed
decision, identity mismatch, cleanup uncertainty, or any post-send technical
failure is terminal and never authorizes ordinal `3`.

The outer parent must preserve stdout only when it is exactly one
`HOST06_REVIEW_READY|...` or `HOST06_PRODUCTION_COMPLETE|...` record matching
the frozen scalar schema. It must preserve stderr only after accepting exactly
one ASCII `HOST06_PRODUCTION_FAILURE|...` record, at most `640` bytes, with an
allowlisted stage, ordinal `0|2|3`, lowercase booleans, and no extra field.
Everything else collapses to `STABLE_LOCAL_FAILURE /
diagnosticRecordRejected=true` plus freshly observed exact absence booleans.
No exception, message, stack, command, source, path, tuple, timestamp, user,
key, header, request/response, JSON, base64, media, pixel, or opaque value is
retained.

## Preserved helper, API, ordinal, validation, and rollback contracts

The exact helper source/DLL identities, reflection surface, owning exclusive
`SafeFileHandle` calls, one-link/non-reparse/size and volume/file-index
continuity, helper cleanup before credential/live-root activity, API endpoint,
model, seven request members, prompt identity, environment-only credential,
no redirect, `ResponseHeadersRead`, ten-minute timeout, one `SendAsync` per
active ordinal, bounded strict UTF-8/JSON/canonical-base64 response, one decode,
create-new/flush/handle-bound stage, no-replace move, and identity-conditioned
cleanup remain those of `FRSH-005-v1-VR-08`.

Historical ordinal `1` remains consumed, opaque, inaccessible, and unchanged.
Ordinals `2` and `3` remain unstarted and unconsumed. Direct sends remain
exact `0`. Maximum future sends remain two, sequential. Any failure after
`SendAsync` consumes that active ordinal. Ordinal `3` is reachable only in the
same still-running child after a fully identified objective ordinal-2 rejection
and exact cleanup. No retry, ordinal `4`, parallel send, replacement,
alternate transport, or later-process continuation exists.

The rendezvous attests the unchanged full technical, physical, layout, and
accessibility gates; it does not weaken them. At most the first passing source
is copied create-new and byte-identically to the sole product raster. The tail
then writes only the sole provenance record, identity-cleans the attempt, and
nonrecursively deletes the empty live root. A failure after product creation
removes only a tail-owned raster when provenance is absent. Any identity or
cleanup uncertainty is `HOLD`, deletes nothing uncertain, and preserves no
authority to retry.

All focused/related/full, sorted `40/40` validator, build, PBA, served identity,
offline, performance, and one-E2E requirements remain downstream gates. The
tail creates no canon, lesson, save, route, world, reward, access, authority,
branch, successor, RP-013, or post-ending state.

## Mandatory fresh Science fixture

One fresh Office of Science Administrator must independently extract the
literal blocks, normalize only repository CRLF framing into the frozen LF byte
domain, recompute launcher, prefix, tail, and combined identities, and prove
that combined bytes `[0..975]` exactly equal the accepted `976`-byte
pre-helper. Science must parser-check the complete combined block and
conservatively render the unchanged executable-plus-argv and complete
environment value below all applicable Windows limits.

Science then runs one credential-cleared, no-request fixture through the exact
launcher/name/combined value. It must reach `PH08`, enter the exact tail,
compile/hash/load/reflect/identity-check the frozen helper, delete its exact DLL
and root, reach `PT06_CREDENTIAL_GATE`, emit only the accepted bounded
production failure, and restore every controlled path to absence. Science must
prove zero credential value read beyond empty presence, zero request object,
zero `SendAsync`, zero sends, and zero ordinal consumption. It also fixture-
validates the production diagnostic normalizer, review-record parser,
ordinal-2 rejection-to-3 transition logic, success/rollback branches, and
identity-conditioned cleanup using synthetic non-media data only; it may not
allocate the live root or product target in the exact no-request run.

Science issues one new versioned `POLISH VIABILITY READY`, `REVISE`, or `HOLD`
artifact and routes only to a fresh Mission Captain. Science may not authorize
Quartermaster directly.

## Protected state, maturity, Git gate, and exact handoff

The immutable `FRAM-001-v1` manifest, accepted-media bytes/pixels, repository
QA quarantine, protected PDF, training tree, Martin's browser/profile/save,
hidden lore, OS-temp parent, ordinal-1 residual, real managed directory, user
work, VR-65, and every opaque residual remain protected. The thirteen inherited
process records and separate Commandant filename/search-scope record remain
separate and **OPEN**. This variance closes, cures, merges, waives, renumbers,
accesses, or reclassifies none.

Maturity impact: none. `FR-03` remains continuity `FR2`; physical-host
expression remains `FR0 - 1 accepted shared compression / 1 exact / 10
missing`; learning `FR2`; behavior/save/recovery `FR1`; content `FR2`;
presentation `FR3`; and prior bounded release proof `FR4`.

Mission changed no product, test, runtime, lesson, save, media, manifest,
candidate, map, scoreboard, maturity, process classification, residual,
schedule, or automation state. Mission did not execute the launcher, helper,
tail, or fixture; allocate a root; read a credential; construct/send a request;
consume an ordinal; inspect media/pixels; run a build/browser/E2E; reveal;
advance maturity; close an OPEN record; access a residual or VR-65; release;
or call `FIRST RUN COMPLETE`.

The dedicated Mission contribution contains only this variance and
`NEXT_INSTANCE_HANDOFF.md`. It is committed and pushed at the shell gate, and
exact `HEAD == origin/main` is proved before this handoff becomes active.

After synchronization, one fresh Office of Science Administrator /
`office_of_science_administrator` reads the complete active intake, full
Science profile, this complete variance, `FRCA-005-v4`, complete
`FRSH-005-v1-VR-10`, complete `FRSH-005-v1-VR-09`,
`FRVE-005-v7-VR-08`, complete `FRWO-005-v7`, decisive
`FRVE-005-v7-VR-03`, complete effective shell, treatment, blueprint,
`FRCE-005-v1-VR-05`, immutable `FRAM-001-v1`, and both exact literal blocks.
Science performs only the mandatory credential-cleared fixture above.

Mission Captain signs **`FIRST RUN SHELL READY / COMPLETE SAME-PROCESS
PRODUCTION TAIL FROZEN / FRESH SCIENCE REQUIRED / FRSH-005-v1-VR-11`** from
exact source `8b3c9d6...`.
