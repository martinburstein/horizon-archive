$ErrorActionPreference = 'Stop'

if ($PSVersionTable.PSEdition -cne 'Desktop' -or $PSVersionTable.PSVersion.ToString() -cne '5.1.26100.8875') { throw 'BUILDER_PS51_VERSION' }

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$oldCarrierPath = Join-Path $root 'HOST06_V11_D1_PRODUCTION_CARRIER.ps1'
$oldLauncherPath = Join-Path $root 'HOST06_V11_D1_LAUNCHER.ps1'
$oldParentPath = Join-Path $root 'HOST06_V11_D1_STDIN_PARENT.ps1'
$oldFixturePath = Join-Path $root 'HOST06_V11_D1_STDIN_FIXTURE_CONTROLLER.ps1'
$carrierPath = Join-Path $root 'HOST06_V12_E1_PRODUCTION_CARRIER.ps1'
$launcherPath = Join-Path $root 'HOST06_V12_E1_LAUNCHER.ps1'
$stdinParentPath = Join-Path $root 'HOST06_V12_E1_STDIN_PARENT.ps1'
$fixturePath = Join-Path $root 'HOST06_V12_E1_STDIN_FIXTURE_CONTROLLER.ps1'
$utf8 = New-Object Text.UTF8Encoding($false, $true)
$sha = [Security.Cryptography.SHA256]::Create()

function Read-ExactSource([string]$path, [int]$expectedLength, [string]$expectedSha) {
  $bytes = [IO.File]::ReadAllBytes($path)
  $actualSha = ([BitConverter]::ToString($sha.ComputeHash($bytes))).Replace('-', '').ToLowerInvariant()
  if ($bytes.Length -ne $expectedLength -or $actualSha -cne $expectedSha) { throw 'V11_SOURCE_IDENTITY' }
  $text = $utf8.GetString($bytes)
  if ($text.Contains("`r") -or $text.Length -ne $bytes.Length) { throw 'V11_SOURCE_ENCODING' }
  foreach ($character in $text.ToCharArray()) { if ([int]$character -gt 127) { throw 'V11_SOURCE_ASCII' } }
  return $text
}

function Replace-Exact([string]$text, [string]$old, [string]$new, [string]$label) {
  if (([regex]::Matches($text, [regex]::Escape($old))).Count -ne 1) { throw ('PATCH_' + $label) }
  return $text.Replace($old, $new)
}

function Get-Identity([string]$text) {
  $bytes = $utf8.GetBytes($text)
  return @($bytes.Length, ([BitConverter]::ToString($sha.ComputeHash($bytes))).Replace('-', '').ToLowerInvariant())
}

$carrier = Read-ExactSource $oldCarrierPath 34948 '48a0b3556db83ec5fa6266b3e248c763dd3ed50b009271ea0f39e432152f5392'
$launcher = Read-ExactSource $oldLauncherPath 2639 'a05570a6d3c330bda5d87421c24d1944a20a856b1cb2c170a70e7044a8b0cfa3'
$stdinParent = Read-ExactSource $oldParentPath 2880 'b3c375cb06efd5d2ddb7e9b85fc50d2a40130e3dfe7954054d26e598674a6661'
$fixture = Read-ExactSource $oldFixturePath 2200 '6ede575905c165288e6961e3fd43a09428a2027fe8430fd0ff8262cb8b1453e4'

$oldHelper = 'C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-native-identity-v11-6cf2e401-916a-4457-9396-2fd2b228547d'
$newHelper = 'C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-native-identity-v12-7b3e6b6c-f96d-4f5a-91f9-a02be46e560b'
$oldLive = 'C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-api-v11-8bd3fc8a-9097-423a-8941-2cbf188f5f34'
$newLive = 'C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-api-v12-15ae0b5e-04a0-43eb-b6be-0f8ab94f9cc9'
$oldComposition = 'Composition/framing: Exact wide 3840 by 2160 landscape intent, first-person eye level, centered full-source presentation with no required crop. Keep the top 10 percent free of essential physical fact. Place the complete Host 06 relation wholly within normalized x 0.34 to 0.70 and y 0.30 to 0.74, with a tight relation rectangle width 0.30 to 0.36 and height 0.30 to 0.40. Place the Host 05 fragment approach wholly within x 0.04 to 0.30 and y 0.56 to 0.88. Reserve same-basin distant context within x 0.70 to 0.98 and y 0.08 to 0.56. Live water may occupy x 0.68 to 0.98 and y 0.62 to 0.92 but must not intersect the relation or dry approach. Keep the relation distinct from live water, the Host 05 cue, a return-like ridge, the Crown, the distant suspended Tidal Lens, and any second lens/cradle candidate.'
$newComposition = 'Composition/framing: Use a restrained environmental medium-wide view, never a close-up or oversized hero prop. Preserve exact wide 3840 by 2160 landscape intent, first-person eye level, and centered full-source presentation with no required crop. Keep the top 10 percent free of essential physical fact. Keep the complete Host 06 lens/cradle relation wholly within normalized x 0.34 to 0.70 and y 0.30 to 0.74, with a measured tight relation rectangle width 0.30 to 0.34 and height 0.30 to 0.38; no part of the complete relation may exceed that box. Center the relation at normalized x 0.51 to 0.53 and retain clear basin context around it. Move the complete Host 05 fragment group inward, wholly within x 0.18 to 0.32 and y 0.58 to 0.84; no required fragment may occur left of x 0.18. Show at least three individually legible, non-token-like fragments, each retaining a distinct silhouette and material relationship at a 390 pixel wide downsample. Keep the continuous dry approach wholly within x 0.18 to 0.40 and y 0.52 to 0.88 so it visibly joins the fragment group to the lower-left edge of the relation without entering the activation region. Keep all essential Host 05 to Host 06 reading inside the combined center-safe source corridor x 0.18 to 0.70 and y 0.30 to 0.88, legible through scale, silhouette, contact shadow, and material contrast rather than glow, overlay, text, timing, sound, or crop. Reserve same-basin distant context within x 0.70 to 0.98 and y 0.08 to 0.56. Live water may occupy only the right/lower band x 0.68 to 0.98 and y 0.62 to 0.92 and must intersect neither relation nor dry approach. Prohibit crop-dependent essential facts, off-edge breadcrumbs, a second candidate, an enlarged central structure, or responsive repair by alternate image, derivative, zoom, repositioning, overlay, or fabricated alternative text.'

$carrier = Replace-Exact $carrier $oldLive $newLive 'CARRIER_LIVE_ROOT'
$carrier = Replace-Exact $carrier $oldComposition $newComposition 'PROMPT_V2'
$carrier = Replace-Exact $carrier "if (`$promptBytes.Length -ne 4099 -or ([BitConverter]::ToString(`$sha.ComputeHash(`$promptBytes))).Replace('-','').ToLowerInvariant() -cne 'efd8c7f8b5ca6c0ec9e16ac82cdb008921a480e549b3b0b1b4b767f79e323179')" "if (`$promptBytes.Length -ne 5139 -or ([BitConverter]::ToString(`$sha.ComputeHash(`$promptBytes))).Replace('-','').ToLowerInvariant() -cne '561a82faa45aed45d2fca50bfb189bfe6e315682ca1289882361939f79455801')" 'PROMPT_IDENTITY'
$carrier = $carrier.Replace('HorizonArchive.Host06V11', 'HorizonArchive.Host06V12')
$carrier = Replace-Exact $carrier "Ordinal='none'" "AttemptId='none'" 'ATTEMPT_FIELD'
$carrier = Replace-Exact $carrier "`$production.Ordinal='D1'" "`$production.AttemptId='E1'" 'ATTEMPT_ASSIGNMENT'
$carrier = Replace-Exact $carrier '.attempt-D1-817cfc16-b9a3-4812-af66-64f672a48c0f.stage' '.attempt-E1-053311a9-3849-42d4-bada-3a7f44c3044c.stage' 'STAGE_PATH'
$carrier = Replace-Exact $carrier '\attempt-D1.png' '\attempt-E1.png' 'TARGET_PATH'
$carrier = Replace-Exact $carrier '.attempt-D1.review-v1' '.attempt-E1.review-v1' 'DECISION_PATH'
$carrier = Replace-Exact $carrier 'HOST06_REVIEW_READY|ordinal=D1' 'HOST06_REVIEW_READY|attemptId=E1' 'REVIEW_READY'
$carrier = Replace-Exact $carrier 'HOST06_REVIEW_V1\|ordinal=D1\|decision=' 'HOST06_REVIEW_V1\|attemptId=E1\|decision=' 'REVIEW_DECISION'
$carrier = Replace-Exact $carrier "`$production.Stage='PT16_PRODUCT_IMPORT'" "`$production.Stage='PT16_PRODUCT_IMPORT'`n    if(`$targetIdentity[4]-lt 1-or`$targetIdentity[4]-gt 30000000-or(37410731+`$targetIdentity[4])-gt 67410731){throw 'PT16_PRODUCT_IMPORT'}" 'PRODUCT_BUDGET'
$carrier = $carrier.Replace('Work Order: FRWO-005-v11', 'Work Order: FRWO-005-v13')
$carrier = $carrier.Replace('Shell: FRSH-005-v1-VR-42', 'Shell: FRSH-005-v1-VR-43')
$carrier = $carrier.Replace('Prompt: HOST06-GEN-PROMPT-v1 / no input', 'Prompt: HOST06-GEN-PROMPT-v2 / 5139 / 561a82faa45aed45d2fca50bfb189bfe6e315682ca1289882361939f79455801 / no input')
$carrier = $carrier.Replace('Consumed attempt: D1 accepted', 'Consumed attempt ID: E1 accepted')
$carrier = $carrier.Replace('Selected attempt: attempt-D1.png', 'Selected attempt ID/path: E1 / attempt-E1.png')
$carrier = Replace-Exact $carrier 'HOST06_PRODUCTION_COMPLETE|attempt=D1' 'HOST06_PRODUCTION_COMPLETE|attemptId=E1' 'PRODUCTION_COMPLETE'
$carrier = $carrier.Replace("'|attempt='+`$production.Ordinal", "'|attemptId='+`$production.AttemptId")

if ($carrier.Contains($oldLive) -or $carrier.Contains('D1') -or $carrier.Contains('$production.Ordinal') -or $carrier.Contains('HOST06-GEN-PROMPT-v1') -or $carrier.Contains('FRWO-005-v11') -or $carrier.Contains('FRSH-005-v1-VR-42')) { throw 'CARRIER_STALE_DOMAIN' }
if (-not $carrier.Contains($newLive) -or -not $carrier.Contains('HorizonArchive.Host06V12.StrictJson') -or -not $carrier.Contains("`$production.AttemptId='E1'")) { throw 'CARRIER_E1_DOMAIN' }

$carrierIdentity = Get-Identity $carrier

$launcher = Replace-Exact $launcher $oldHelper $newHelper 'LAUNCHER_HELPER_ROOT'
$launcher = Replace-Exact $launcher $oldLive $newLive 'LAUNCHER_LIVE_ROOT'
if (([regex]::Matches($launcher, '34948')).Count -ne 2) { throw 'PATCH_LAUNCHER_CARRIER_LENGTH' }
$launcher = $launcher.Replace('34948', [string]$carrierIdentity[0])
$launcher = Replace-Exact $launcher '48a0b3556db83ec5fa6266b3e248c763dd3ed50b009271ea0f39e432152f5392' ([string]$carrierIdentity[1]) 'LAUNCHER_CARRIER_SHA'
$launcherIdentity = Get-Identity $launcher

$stdinParent = Replace-Exact $stdinParent 'HOST06_V11_D1_PRODUCTION_CARRIER.ps1' 'HOST06_V12_E1_PRODUCTION_CARRIER.ps1' 'PARENT_CARRIER_NAME'
$stdinParent = Replace-Exact $stdinParent 'HOST06_V11_D1_LAUNCHER.ps1' 'HOST06_V12_E1_LAUNCHER.ps1' 'PARENT_LAUNCHER_NAME'
$stdinParent = $stdinParent.Replace('34948', [string]$carrierIdentity[0]).Replace('48a0b3556db83ec5fa6266b3e248c763dd3ed50b009271ea0f39e432152f5392', [string]$carrierIdentity[1])
$stdinParent = $stdinParent.Replace('2639', [string]$launcherIdentity[0]).Replace('a05570a6d3c330bda5d87421c24d1944a20a856b1cb2c170a70e7044a8b0cfa3', [string]$launcherIdentity[1])
$stdinParentIdentity = Get-Identity $stdinParent

$fixture = Replace-Exact $fixture 'HOST06_V11_D1_STDIN_PARENT.ps1' 'HOST06_V12_E1_STDIN_PARENT.ps1' 'FIXTURE_PARENT_NAME'
$fixture = Replace-Exact $fixture $oldHelper $newHelper 'FIXTURE_HELPER_ROOT'
$fixture = Replace-Exact $fixture $oldLive $newLive 'FIXTURE_LIVE_ROOT'
$fixture = Replace-Exact $fixture 'attempt=none' 'attemptId=none' 'FIXTURE_DIAGNOSTIC'
$fixture = Replace-Exact $fixture 'HOST06_V11_STDIN_FIXTURE_PASS' 'HOST06_V12_STDIN_FIXTURE_PASS' 'FIXTURE_VERSION'
$fixture = Replace-Exact $fixture 'D1Consumed=false' 'E1Consumed=false' 'FIXTURE_ATTEMPT'
$fixtureIdentity = Get-Identity $fixture

$guardMatch = [regex]::Match($carrier, '(?s)\$jsonGuardSource=@"\n(?<source>.*?)\n"@')
if (-not $guardMatch.Success) { throw 'SEMANTIC_GUARD_EXTRACTION' }
Add-Type -TypeDefinition $guardMatch.Groups['source'].Value -Language CSharp -ErrorAction Stop
Add-Type -AssemblyName System.Web.Extensions -ErrorAction Stop
$serializer = New-Object Web.Script.Serialization.JavaScriptSerializer
$serializer.MaxJsonLength = 40500000
$serializer.RecursionLimit = 16
function Test-Key([System.Collections.IDictionary]$object, [string]$name) { return $null -ne $object -and ($object.Keys -ccontains $name) }
function Test-UInt64Json($value) {
  if ($value -is [bool] -or $value -is [string] -or $null -eq $value) { return $false }
  try { $number = [decimal]$value; return $number -ge 0 -and [decimal]::Truncate($number) -eq $number -and $number -le [long]::MaxValue } catch { return $false }
}
function Test-SemanticResponse([string]$json) {
  try {
    [HorizonArchive.Host06V12.StrictJson]::Validate($json)
    $responseObject = $serializer.DeserializeObject($json)
    if (-not (Test-Key $responseObject 'created') -or -not (Test-Key $responseObject 'data') -or -not (Test-UInt64Json $responseObject['created'])) { return $false }
    foreach ($echo in @{background='opaque';output_format='png';quality='high';size='3840x2160'}.GetEnumerator()) { if ((Test-Key $responseObject $echo.Key) -and ($responseObject[$echo.Key] -isnot [string] -or $responseObject[$echo.Key] -cne $echo.Value)) { return $false } }
    $data = $responseObject['data']
    if ($data -isnot [System.Array] -or $data.Count -ne 1 -or $data[0] -isnot [System.Collections.IDictionary] -or -not (Test-Key $data[0] 'b64_json') -or $data[0]['b64_json'] -isnot [string]) { return $false }
    foreach ($forbidden in @('url','revised_prompt')) { if ((Test-Key $data[0] $forbidden) -and $null -ne $data[0][$forbidden]) { return $false } }
    if (Test-Key $responseObject 'usage') { $usage=$responseObject['usage']; if($usage-isnot[System.Collections.IDictionary]){return $false}; foreach($name in @('input_tokens','output_tokens','total_tokens')){if((Test-Key $usage $name)-and-not(Test-UInt64Json $usage[$name])){return $false}}; foreach($detailsName in @('input_tokens_details','output_tokens_details')){if(Test-Key $usage $detailsName){$details=$usage[$detailsName];if($details-isnot[System.Collections.IDictionary]){return $false};foreach($name in @('text_tokens','image_tokens')){if((Test-Key $details $name)-and-not(Test-UInt64Json $details[$name])){return $false}}}} }
    $b64=[string]$data[0]['b64_json']; if($b64.Length-lt 4-or$b64.Length-gt 40000000-or($b64.Length%4)-ne 0-or-not[regex]::IsMatch($b64,'\A(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?\z')){return $false}
    $decodedLength=($b64.Length/4*3)-($(if($b64.EndsWith('==')){2}elseif($b64.EndsWith('=')){1}else{0})); if($decodedLength-lt 1-or$decodedLength-gt 30000000){return $false}
    $decoded=[Convert]::FromBase64String($b64); return $decoded.Length-eq$decodedLength-and[Convert]::ToBase64String($decoded)-ceq$b64
  } catch { return $false }
}
$cases = @(
  @('base', '{"created":0,"data":[{"b64_json":"AA=="}]}', $true),
  @('known-echoes', '{"created":1,"background":"opaque","output_format":"png","quality":"high","size":"3840x2160","data":[{"b64_json":"AA=="}]}', $true),
  @('future-metadata', '{"created":2,"future":{"nested":[1,true,null]},"data":[{"b64_json":"AA==","future_data":"ok"}]}', $true),
  @('null-optionals', '{"created":3,"data":[{"b64_json":"AA==","url":null,"revised_prompt":null}]}', $true),
  @('usage-future', '{"created":4,"usage":{"input_tokens":1,"output_tokens":2,"total_tokens":3,"future":9,"input_tokens_details":{"text_tokens":1,"image_tokens":0,"future":7}},"data":[{"b64_json":"AA=="}]}', $true),
  @('url-substitution', '{"created":5,"data":[{"b64_json":"AA==","url":"https://example.invalid"}]}', $false),
  @('revised-prompt', '{"created":6,"data":[{"b64_json":"AA==","revised_prompt":"changed"}]}', $false),
  @('extra-data', '{"created":7,"data":[{"b64_json":"AA=="},{"b64_json":"AA=="}]}', $false),
  @('missing-payload', '{"created":8,"data":[{}]}', $false),
  @('wrong-payload-type', '{"created":9,"data":[{"b64_json":7}]}', $false),
  @('fractional-created', '{"created":1.5,"data":[{"b64_json":"AA=="}]}', $false),
  @('fractional-usage', '{"created":10,"usage":{"total_tokens":1.5},"data":[{"b64_json":"AA=="}]}', $false),
  @('wrong-size', '{"created":11,"size":"1024x1024","data":[{"b64_json":"AA=="}]}', $false),
  @('duplicate-key', '{"created":12,"created":13,"data":[{"b64_json":"AA=="}]}', $false),
  @('noncanonical-base64', '{"created":14,"data":[{"b64_json":"AB=="}]}', $false)
)
$genericDictionary = $serializer.DeserializeObject($cases[0][1]).GetType().FullName -like 'System.Collections.Generic.Dictionary*'
if (-not $genericDictionary) { throw 'SEMANTIC_GENERIC_DICTIONARY' }
$passed = 0
foreach ($case in $cases) { if ((Test-SemanticResponse $case[1]) -ne $case[2]) { throw ('SEMANTIC_CASE_' + $case[0]) }; $passed++ }
if ($passed -ne 15) { throw 'SEMANTIC_CASE_COUNT' }

[IO.File]::WriteAllText($carrierPath, $carrier, $utf8)
[IO.File]::WriteAllText($launcherPath, $launcher, $utf8)
[IO.File]::WriteAllText($stdinParentPath, $stdinParent, $utf8)
[IO.File]::WriteAllText($fixturePath, $fixture, $utf8)

foreach ($pair in @(@($carrierPath,$carrier),@($launcherPath,$launcher),@($stdinParentPath,$stdinParent),@($fixturePath,$fixture))) {
  $tokens=$null;$errors=$null
  [void][Management.Automation.Language.Parser]::ParseInput($pair[1],[ref]$tokens,[ref]$errors)
  if($errors.Count-ne 0){throw ('OUTPUT_PARSE_' + [IO.Path]::GetFileName($pair[0]))}
}

$sha.Dispose()
[Console]::Out.WriteLine('HOST06_V12_SEMANTIC_SUITE_PASS|psVersion=5.1.26100.8875|genericDictionary=true|cases=15|passed=15|credentialReads=0|requestConstructions=0|sendAsyncCalls=0|apiSends=0|media=0')
Get-Item $carrierPath,$launcherPath,$stdinParentPath,$fixturePath | Select-Object Name,Length
Get-FileHash -Algorithm SHA256 $carrierPath,$launcherPath,$stdinParentPath,$fixturePath | Select-Object Path,Hash
