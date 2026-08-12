$ErrorActionPreference = 'Stop'

if ($PSVersionTable.PSEdition -cne 'Desktop' -or $PSVersionTable.PSVersion.ToString() -cne '5.1.26100.8875') { throw 'BUILDER_PS51_VERSION' }

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$oldCarrierPath = Join-Path $root 'HOST06_V13_F1_PRODUCTION_CARRIER.ps1'
$oldLauncherPath = Join-Path $root 'HOST06_V13_F1_LAUNCHER.ps1'
$oldParentPath = Join-Path $root 'HOST06_V13_F1_STDIN_PARENT.ps1'
$oldFixturePath = Join-Path $root 'HOST06_V13_F1_STDIN_FIXTURE_CONTROLLER.ps1'
$carrierPath = Join-Path $root 'HOST06_V14_G1_PRODUCTION_CARRIER.ps1'
$launcherPath = Join-Path $root 'HOST06_V14_G1_LAUNCHER.ps1'
$stdinParentPath = Join-Path $root 'HOST06_V14_G1_STDIN_PARENT.ps1'
$fixturePath = Join-Path $root 'HOST06_V14_G1_STDIN_FIXTURE_CONTROLLER.ps1'
$utf8 = New-Object Text.UTF8Encoding($false, $true)
$sha = [Security.Cryptography.SHA256]::Create()

function Read-ExactSource([string]$path, [int]$expectedLength, [string]$expectedSha) {
  $bytes = [IO.File]::ReadAllBytes($path)
  $actualSha = ([BitConverter]::ToString($sha.ComputeHash($bytes))).Replace('-', '').ToLowerInvariant()
  if ($bytes.Length -ne $expectedLength -or $actualSha -cne $expectedSha) { throw 'V13_SOURCE_IDENTITY' }
  $text = $utf8.GetString($bytes)
  if ($text.Contains("`r") -or $text.Length -ne $bytes.Length) { throw 'V13_SOURCE_ENCODING' }
  foreach ($character in $text.ToCharArray()) { if ([int]$character -gt 127) { throw 'V13_SOURCE_ASCII' } }
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

$carrier = Read-ExactSource $oldCarrierPath 36477 'edbe01ea2a7a7b158f09c4882f66ba1a21db72ce5fdff01775608671b193df83'
$launcher = Read-ExactSource $oldLauncherPath 2639 'a57a27bf72126832089e0b5fde1530d16c528482153446a10de905a0226b2d44'
$stdinParent = Read-ExactSource $oldParentPath 2880 '089cc276f1e4a9f64279b69259eacd8842eec2e81eab22124bf2e0f3785809a7'
$fixture = Read-ExactSource $oldFixturePath 2202 '129154d4bb565d0b1aeb0c0d5a3739b6537d8c021558d537aa5056ad5b4a1e9a'

$oldHelper = 'C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-native-identity-v13-1a72c913-2a4c-4c2e-89a6-258748b7f27b'
$newHelper = 'C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-native-identity-v14-5aa24cb3-86e9-4a21-babf-1e00f708ef18'
$oldLive = 'C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-api-v13-3da45298-46a7-4b77-80ee-199078ffcc82'
$newLive = 'C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-api-v14-9783dcf8-7526-475e-b92e-d0abd931c7a3'
$oldComposition = 'Composition/framing: Use a restrained environmental wide view, never a close-up or oversized hero prop. Preserve exact wide 3840 by 2160 landscape intent, first-person eye level, and centered full-source presentation with no required crop. Keep the top 12 percent free of essential physical fact. Keep the complete Host 06 lens/cradle relation wholly within normalized x 0.36 to 0.64 and y 0.32 to 0.68, with a measured tight relation rectangle width 0.24 to 0.27 and height 0.25 to 0.29; no part of the complete relation may exceed that box. Center the relation at normalized x 0.50 to 0.51 and y 0.48 to 0.50, preserving calm basin context on every side and keeping its top no higher than y 0.33 and bottom no lower than y 0.65. Keep the complete Host 05 fragment group inward, wholly within x 0.27 to 0.38 and y 0.62 to 0.80; no required fragment may occur left of x 0.27, right of x 0.38, or below y 0.80. Show at least three individually legible, non-token-like fragments, each at least 0.021 of source width with distinct silhouette and material relationship at a 390 pixel wide downsample. Keep the continuous dry approach wholly within x 0.27 to 0.41 and y 0.54 to 0.82 so it visibly joins the fragment group to the lower-left edge of the relation without entering the activation region. Keep all essential Host 05 to Host 06 reading inside the substantially inset center-safe corridor x 0.27 to 0.64 and y 0.32 to 0.82, legible through scale, silhouette, contact shadow, and material contrast rather than glow, overlay, text, timing, sound, or crop. Reserve same-basin distant context within x 0.68 to 0.96 and y 0.12 to 0.56. Live water may occupy only the right/lower band x 0.70 to 0.98 and y 0.66 to 0.92 and must intersect neither relation nor dry approach. Prohibit crop-dependent essential facts, off-edge breadcrumbs, a second candidate, an enlarged central structure, any relation taller than 0.29 of source height, any required fragment outside the inward band, or responsive repair by alternate image, derivative, zoom, repositioning, overlay, or fabricated alternative text.'
$newComposition = 'Composition/framing: Use an extreme wide establishing shot from much farther back, never a close-up, medium shot, or oversized hero prop. The complete lens/cradle and every required fragment must read as one deliberately small compact island surrounded on all sides by broad uninterrupted dry basin context. Preserve exact wide 3840 by 2160 landscape intent, first-person eye level, and centered full-source presentation with no required crop. Keep the top 20 percent free of essential physical fact. Keep the complete Host 06 lens/cradle relation, including its entire support base and every cradle extremity, wholly within normalized x 0.40 to 0.60 and y 0.39 to 0.61, with a measured tight full-relation rectangle width 0.16 to 0.18 and height 0.17 to 0.20; no part of the complete relation may exceed that box. Center the relation at normalized x 0.50 to 0.51 and y 0.49 to 0.51, keeping its top no higher than y 0.40 and bottom no lower than y 0.60. The complete assembly must occupy less than one fifth of image width and one fifth of image height and must appear as a hand-sized field discovery seen from several meters away, not a monumental device. Keep the complete Host 05 fragment group wholly within x 0.31 to 0.41 and y 0.58 to 0.72; no required fragment may occur left of x 0.31, right of x 0.41, or below y 0.72. Show at least three individually legible, non-token-like fragments, each at least 0.018 of source width with distinct silhouette and material relationship at a 390 pixel wide downsample. Keep the continuous dry approach wholly within x 0.31 to 0.43 and y 0.52 to 0.74 so it visibly joins the compact fragment group to the lower-left edge of the small relation without entering the activation region. Keep every essential Host 05 to Host 06 fact inside the inset center-safe corridor x 0.31 to 0.60 and y 0.39 to 0.74, legible through silhouette, contact shadow, and material contrast rather than scale, glow, overlay, text, timing, sound, or crop. Preserve at least 20 percent image width of calm nonessential basin context to the left of the fragment group and at least 25 percent to the right of the relation. Reserve same-basin distant context within x 0.70 to 0.96 and y 0.12 to 0.56. Live water may occupy only the right/lower band x 0.72 to 0.98 and y 0.70 to 0.92 and must intersect neither relation nor dry approach. Prohibit crop-dependent facts, off-edge breadcrumbs, a second candidate, any enlarged central structure, any complete relation wider than 0.18 or taller than 0.20 of source, any required fragment outside the inward band, camera proximity that makes the assembly dominant, or responsive repair by alternate image, derivative, zoom, repositioning, overlay, or fabricated alternative text.'

$carrier = Replace-Exact $carrier $oldLive $newLive 'CARRIER_LIVE_ROOT'
$carrier = Replace-Exact $carrier $oldComposition $newComposition 'PROMPT_V3'
$carrier = Replace-Exact $carrier "if (`$promptBytes.Length -ne 5386 -or ([BitConverter]::ToString(`$sha.ComputeHash(`$promptBytes))).Replace('-','').ToLowerInvariant() -cne '1c55c9c5d6dbbf7c83a0fcadde4180e974db051dc9f883542aadf3ea2f9b8a1f')" "if (`$promptBytes.Length -ne 6031 -or ([BitConverter]::ToString(`$sha.ComputeHash(`$promptBytes))).Replace('-','').ToLowerInvariant() -cne 'a052c74d83f574fe6628651c2f5b5de54e655468d35b97d076cccd7b35df3086')" 'PROMPT_IDENTITY'
$carrier = $carrier.Replace('HorizonArchive.Host06V13', 'HorizonArchive.Host06V14')
$carrier = Replace-Exact $carrier "`$production.AttemptId='F1'" "`$production.AttemptId='G1'" 'ATTEMPT_ASSIGNMENT'
$carrier = Replace-Exact $carrier '.attempt-F1-81c2fa09-a857-4790-b9bd-e26312ea6b20.stage' '.attempt-G1-f76e28bb-7e72-437b-ab45-b17c4b27c45e.stage' 'STAGE_PATH'
$carrier = Replace-Exact $carrier '\attempt-F1.png' '\attempt-G1.png' 'TARGET_PATH'
$carrier = Replace-Exact $carrier '.attempt-F1.review-v1' '.attempt-G1.review-v1' 'DECISION_PATH'
$carrier = Replace-Exact $carrier 'HOST06_REVIEW_READY|attemptId=F1' 'HOST06_REVIEW_READY|attemptId=G1' 'REVIEW_READY'
$carrier = Replace-Exact $carrier 'HOST06_REVIEW_V1\|attemptId=F1\|decision=' 'HOST06_REVIEW_V1\|attemptId=G1\|decision=' 'REVIEW_DECISION'
$carrier = $carrier.Replace('Work Order: FRWO-005-v15', 'Work Order: FRWO-005-v17')
$carrier = $carrier.Replace('Shell: FRSH-005-v1-VR-44', 'Shell: FRSH-005-v1-VR-45')
$carrier = $carrier.Replace('Prompt: HOST06-GEN-PROMPT-v3 / 5386 / 1c55c9c5d6dbbf7c83a0fcadde4180e974db051dc9f883542aadf3ea2f9b8a1f / no input', 'Prompt: HOST06-GEN-PROMPT-v4 / 6031 / a052c74d83f574fe6628651c2f5b5de54e655468d35b97d076cccd7b35df3086 / no input')
$carrier = $carrier.Replace('Consumed attempt ID: F1 accepted', 'Consumed attempt ID: G1 accepted')
$carrier = $carrier.Replace('Selected attempt ID/path: F1 / attempt-F1.png', 'Selected attempt ID/path: G1 / attempt-G1.png')
$carrier = Replace-Exact $carrier 'HOST06_PRODUCTION_COMPLETE|attemptId=F1' 'HOST06_PRODUCTION_COMPLETE|attemptId=G1' 'PRODUCTION_COMPLETE'

if ($carrier.Contains($oldLive) -or $carrier.Contains('F1') -or $carrier.Contains('HorizonArchive.Host06V13') -or $carrier.Contains('HOST06-GEN-PROMPT-v3') -or $carrier.Contains('FRWO-005-v15') -or $carrier.Contains('FRSH-005-v1-VR-44')) { throw 'CARRIER_STALE_DOMAIN' }
if (-not $carrier.Contains($newLive) -or -not $carrier.Contains('HorizonArchive.Host06V14.StrictJson') -or -not $carrier.Contains("`$production.AttemptId='G1'")) { throw 'CARRIER_G1_DOMAIN' }

$carrierIdentity = Get-Identity $carrier

$launcher = Replace-Exact $launcher $oldHelper $newHelper 'LAUNCHER_HELPER_ROOT'
$launcher = Replace-Exact $launcher $oldLive $newLive 'LAUNCHER_LIVE_ROOT'
if (([regex]::Matches($launcher, '36477')).Count -ne 2) { throw 'PATCH_LAUNCHER_CARRIER_LENGTH' }
$launcher = $launcher.Replace('36477', [string]$carrierIdentity[0])
$launcher = Replace-Exact $launcher 'edbe01ea2a7a7b158f09c4882f66ba1a21db72ce5fdff01775608671b193df83' ([string]$carrierIdentity[1]) 'LAUNCHER_CARRIER_SHA'
$launcherIdentity = Get-Identity $launcher

$stdinParent = Replace-Exact $stdinParent 'HOST06_V13_F1_PRODUCTION_CARRIER.ps1' 'HOST06_V14_G1_PRODUCTION_CARRIER.ps1' 'PARENT_CARRIER_NAME'
$stdinParent = Replace-Exact $stdinParent 'HOST06_V13_F1_LAUNCHER.ps1' 'HOST06_V14_G1_LAUNCHER.ps1' 'PARENT_LAUNCHER_NAME'
$stdinParent = $stdinParent.Replace('36477', [string]$carrierIdentity[0]).Replace('edbe01ea2a7a7b158f09c4882f66ba1a21db72ce5fdff01775608671b193df83', [string]$carrierIdentity[1])
$stdinParent = $stdinParent.Replace('2639', [string]$launcherIdentity[0]).Replace('a57a27bf72126832089e0b5fde1530d16c528482153446a10de905a0226b2d44', [string]$launcherIdentity[1])
$stdinParentIdentity = Get-Identity $stdinParent

$fixture = Replace-Exact $fixture 'HOST06_V13_F1_STDIN_PARENT.ps1' 'HOST06_V14_G1_STDIN_PARENT.ps1' 'FIXTURE_PARENT_NAME'
$fixture = Replace-Exact $fixture $oldHelper $newHelper 'FIXTURE_HELPER_ROOT'
$fixture = Replace-Exact $fixture $oldLive $newLive 'FIXTURE_LIVE_ROOT'
$fixture = Replace-Exact $fixture 'HOST06_V13_STDIN_FIXTURE_PASS' 'HOST06_V14_STDIN_FIXTURE_PASS' 'FIXTURE_VERSION'
$fixture = Replace-Exact $fixture 'F1Consumed=false' 'G1Consumed=false' 'FIXTURE_ATTEMPT'
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
    [HorizonArchive.Host06V14.StrictJson]::Validate($json)
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

$relation = @{ x=[decimal]0.41; y=[decimal]0.405; width=[decimal]0.18; height=[decimal]0.19 }
$activation = @{ x=[decimal]0.40; y=[decimal]0.375; width=[decimal]0.20; height=[decimal]0.25 }
$fragments = @(
  @{ x=[decimal]0.315; y=[decimal]0.60; width=[decimal]0.019; height=[decimal]0.035 },
  @{ x=[decimal]0.337; y=[decimal]0.63; width=[decimal]0.019; height=[decimal]0.04 },
  @{ x=[decimal]0.356; y=[decimal]0.66; width=[decimal]0.019; height=[decimal]0.04 }
)
$fragmentGroup = @{ x=[decimal]0.315; y=[decimal]0.60; width=[decimal]0.06; height=[decimal]0.10 }
$dryApproach = @{ x=[decimal]0.32; y=[decimal]0.54; width=[decimal]0.08; height=[decimal]0.18 }
$water = @{ x=[decimal]0.72; y=[decimal]0.70; width=[decimal]0.26; height=[decimal]0.22 }
$relationCenterX = $relation.x + ($relation.width / 2)
$relationCenterY = $relation.y + ($relation.height / 2)
$relationBottom = $relation.y + $relation.height
$activationAreaRatio = ($activation.width * $activation.height) / ($relation.width * $relation.height)
if ($relation.x -lt 0.40 -or $relation.y -lt 0.39 -or $relation.x + $relation.width -gt 0.60 -or $relationBottom -gt 0.61) { throw 'LAYOUT_RELATION_ENVELOPE' }
if ($relation.width -lt 0.16 -or $relation.width -gt 0.18 -or $relation.height -lt 0.17 -or $relation.height -gt 0.20) { throw 'LAYOUT_RELATION_SIZE' }
if ($relationCenterX -lt 0.50 -or $relationCenterX -gt 0.51 -or $relationCenterY -lt 0.49 -or $relationCenterY -gt 0.51 -or $relation.y -lt 0.40 -or $relationBottom -gt 0.60) { throw 'LAYOUT_RELATION_CENTER' }
if ($activation.x -gt $relation.x -or $activation.y -gt $relation.y -or $activation.x + $activation.width -lt $relation.x + $relation.width -or $activation.y + $activation.height -lt $relationBottom -or $activationAreaRatio -gt 1.50) { throw 'LAYOUT_ACTIVATION' }
if ($fragmentGroup.x -lt 0.31 -or $fragmentGroup.y -lt 0.58 -or $fragmentGroup.x + $fragmentGroup.width -gt 0.41 -or $fragmentGroup.y + $fragmentGroup.height -gt 0.72) { throw 'LAYOUT_FRAGMENT_GROUP' }
foreach ($fragment in $fragments) { if ($fragment.width -lt 0.018 -or $fragment.x -lt 0.31 -or $fragment.y -lt 0.58 -or $fragment.x + $fragment.width -gt 0.41 -or $fragment.y + $fragment.height -gt 0.72) { throw 'LAYOUT_FRAGMENT' } }
if ($dryApproach.x -lt 0.31 -or $dryApproach.y -lt 0.52 -or $dryApproach.x + $dryApproach.width -gt 0.43 -or $dryApproach.y + $dryApproach.height -gt 0.74 -or $dryApproach.x + $dryApproach.width -ne $activation.x) { throw 'LAYOUT_DRY_APPROACH' }
if ($dryApproach.x + $dryApproach.width -gt $water.x -or $relation.x + $relation.width -gt $water.x) { throw 'LAYOUT_WATER_SEPARATION' }
if (($activation.x - ($fragmentGroup.x + $fragmentGroup.width)) * 3840 -lt 96) { throw 'LAYOUT_SOURCE_SEPARATION' }
$layouts = @(
  @('desktop',[decimal]1920,[decimal]1080), @('laptop',[decimal]1366,[decimal]768.375),
  @('narrow',[decimal]390,[decimal]219.375), @('effective200',[decimal]768,[decimal]432),
  @('retained320x180',[decimal]320,[decimal]180), @('retained320x240',[decimal]320,[decimal]180)
)
foreach ($layout in $layouts) {
  $worldWidth=[decimal]$layout[1]; $worldHeight=[decimal]$layout[2]
  if ($worldHeight -ne $worldWidth * 9 / 16) { throw ('LAYOUT_ASPECT_' + $layout[0]) }
  if ($activation.width*$worldWidth -lt 44 -or $activation.height*$worldHeight -lt 44) { throw ('LAYOUT_ACTIVATION_TARGET_' + $layout[0]) }
  if (($activation.x - ($fragmentGroup.x + $fragmentGroup.width))*$worldWidth -lt 8) { throw ('LAYOUT_MAPPED_SEPARATION_' + $layout[0]) }
  foreach ($fragment in $fragments) { if ($fragment.width*$worldWidth -lt [decimal]6.08) { throw ('LAYOUT_FRAGMENT_LEGIBILITY_' + $layout[0]) } }
}
if ($fragments[0].width * 390 -lt [decimal]7.41) { throw 'LAYOUT_390_FRAGMENT_LEGIBILITY' }
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
[Console]::Out.WriteLine('HOST06_V14_SEMANTIC_SUITE_PASS|psVersion=5.1.26100.8875|genericDictionary=true|cases=15|passed=15|credentialReads=0|requestConstructions=0|sendAsyncCalls=0|apiSends=0|media=0')
[Console]::Out.WriteLine('HOST06_V14_LAYOUT_SUITE_PASS|layouts=6|retention=1|fragmentGroup=true|fragments=3|fragmentMinWidth=.019|narrowFragmentPx=7.41|dryApproach=true|relationCenter=.50,.50|activationAreaRatio=1.46198830409357|sourceSeparation=96|mappedMinSeparation=8')
Get-Item $carrierPath,$launcherPath,$stdinParentPath,$fixturePath | Select-Object Name,Length
Get-FileHash -Algorithm SHA256 $carrierPath,$launcherPath,$stdinParentPath,$fixturePath | Select-Object Path,Hash
