$ErrorActionPreference='Stop'
$controllerStage='OC01_STATIC_IDENTITY'
$parentExecutions=0
$parentStarted=$false
$process=$null
$parentExitEvidence=$null
$parentStdoutCharacters=$null
$parentStderrCharacters=$null
$parentStdoutCaptured=$null
$parentStderrCaptured=$null
$captureClass='NOT_STARTED'
$parentStopStage='NOT_APPLICABLE'
$parentStopCode='NOT_APPLICABLE'
$childExitFact='NOT_APPLICABLE'
$childStdoutFact='NOT_APPLICABLE'
$childStderrFact='NOT_APPLICABLE'

function Get-Sha256Hex([byte[]]$bytes){
  $sha=[Security.Cryptography.SHA256]::Create()
  try{return ([BitConverter]::ToString($sha.ComputeHash($bytes))).Replace('-','').ToLowerInvariant()}finally{$sha.Dispose()}
}

function Assert-Outer([bool]$condition,[string]$name){
  if(-not $condition){throw ('ASSERT:'+$name)}
}

function Test-PathAbsent([string]$path){
  return ((-not [IO.File]::Exists($path))-and(-not [IO.Directory]::Exists($path)))
}

function Get-TerminatedContent([string]$captured,[long]$count){
  if($null-eq$captured){return $null}
  if($count-eq 0){return ''}
  if(($count-eq$captured.Length)-and$captured.EndsWith("`r`n",[StringComparison]::Ordinal)){return $captured.Substring(0,$captured.Length-2)}
  if(($count-eq$captured.Length)-and$captured.EndsWith("`n",[StringComparison]::Ordinal)){return $captured.Substring(0,$captured.Length-1)}
  return $null
}

try{
  $parentSourcePath='C:\Users\marti\OneDrive\Desktop\Horizon Archive\Production Pipeline\First Run\HOST06_SCIENCE_PARENT_V2.ps1'
  Assert-Outer ([IO.File]::Exists($parentSourcePath)) 'PARENT_SOURCE_PATH'
  Assert-Outer (-not [IO.Directory]::Exists($parentSourcePath)) 'PARENT_SOURCE_PATH'
  $parentSourceBytes=[IO.File]::ReadAllBytes($parentSourcePath)
  Assert-Outer ($parentSourceBytes.Length-eq 51241) 'PARENT_SOURCE_LENGTH'
  Assert-Outer ((Get-Sha256Hex $parentSourceBytes)-ceq'60755e9374d56ba0d9d96ed763a9b44840c2819d90979734370f843124c297f7') 'PARENT_SOURCE_SHA256'
  Assert-Outer ($parentSourceBytes[$parentSourceBytes.Length-1]-eq 10) 'PARENT_SOURCE_FINAL_LF'
  Assert-Outer (-not($parentSourceBytes-contains 13)) 'PARENT_SOURCE_LF_ONLY'
  foreach($byte in $parentSourceBytes){Assert-Outer ($byte-le 127) 'PARENT_SOURCE_ASCII'}
  $ascii=New-Object Text.ASCIIEncoding
  $parentSource=$ascii.GetString($parentSourceBytes)
  Assert-Outer ($parentSource.Length-eq 51241) 'PARENT_SOURCE_CHARACTERS'

  $controllerStage='OC02_PARENT_PARSE'
  $tokens=$null
  $parseErrors=$null
  [void][Management.Automation.Language.Parser]::ParseInput($parentSource,[ref]$tokens,[ref]$parseErrors)
  Assert-Outer ($parseErrors.Count-eq 0) 'PARENT_SOURCE_PARSER'

  $controllerStage='OC03_PREFLIGHT_ABSENCE'
  $helperRoot='C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-native-identity-725b75e4-8083-4df5-9a80-a0301b8f00dd'
  $helperDll=$helperRoot+'\Host06FileIdentity.dll'
  $liveRoot='C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-api-6eae8313-1407-492d-af7c-675051ab8e08'
  $ordinal2Stage=$liveRoot+'\.attempt-02-5f858a43-216c-4344-a4ce-0bfbcd042bcb.stage'
  $ordinal2Target=$liveRoot+'\attempt-02.png'
  $ordinal2Decision=$liveRoot+'\.attempt-02.review-v1'
  $ordinal3Stage=$liveRoot+'\.attempt-03-63422fd8-bf71-489b-921a-5acb0fca7357.stage'
  $ordinal3Target=$liveRoot+'\attempt-03.png'
  $ordinal3Decision=$liveRoot+'\.attempt-03.review-v1'
  $productRoot='C:\Users\marti\OneDrive\Desktop\Horizon Archive\Visual Direction\Production Masters\2026-08-10-first-run-host06'
  $productRaster=$productRoot+'\host06-stranded-lens-cradle-master-v1.png'
  $productProvenance=$productRoot+'\PROVENANCE.md'
  $scienceFixtureRoot='C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-science-parent-v2'
  $controlledPaths=@($helperRoot,$helperDll,$liveRoot,$ordinal2Stage,$ordinal2Target,$ordinal2Decision,$ordinal3Stage,$ordinal3Target,$ordinal3Decision,$productRoot,$productRaster,$productProvenance,$scienceFixtureRoot)
  foreach($path in $controlledPaths){Assert-Outer (Test-PathAbsent $path) 'CONTROLLED_PATH_ABSENCE'}

  $controllerStage='OC04_PARENT_PREPARE'
  $bootstrap='$s=[Console]::In.ReadToEnd(); if ([string]::IsNullOrEmpty($s)) { exit 97 }; & ([scriptblock]::Create($s))'
  $arguments='-NoLogo -NoProfile -NonInteractive -Command "'+$bootstrap+'"'
  Assert-Outer ($bootstrap.Length-eq 105) 'BOOTSTRAP_LENGTH'
  Assert-Outer ((Get-Sha256Hex $ascii.GetBytes($bootstrap))-ceq'0b4ba2e1ded92d98027f350abad13cc76fa30ea0419e472e3be0a7bac3b97cbc') 'BOOTSTRAP_SHA256'
  Assert-Outer ($arguments.Length-eq 151) 'ARGUMENTS_LENGTH'
  Assert-Outer ((Get-Sha256Hex $ascii.GetBytes($arguments))-ceq'a0f684461636f5ee04f78020695bf5b055d9e94bbf750a3a060d1ba291cfef47') 'ARGUMENTS_SHA256'
  $psi=New-Object Diagnostics.ProcessStartInfo
  $psi.FileName='C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe'
  $psi.Arguments=$arguments
  $psi.UseShellExecute=$false
  $psi.CreateNoWindow=$true
  $psi.RedirectStandardInput=$true
  $psi.RedirectStandardOutput=$true
  $psi.RedirectStandardError=$true
  [void]$psi.EnvironmentVariables.Remove('OPENAI_API_KEY')
  $process=New-Object Diagnostics.Process
  $process.StartInfo=$psi

  $controllerStage='OC05_PARENT_START'
  Assert-Outer ($process.Start()) 'PARENT_START'
  $parentStarted=$true
  $parentExecutions=1

  $stdoutBuffer=New-Object char[] 256
  $stderrBuffer=New-Object char[] 256
  $stdoutCaptured=New-Object Text.StringBuilder
  $stderrCaptured=New-Object Text.StringBuilder
  [long]$stdoutCount=0
  [long]$stderrCount=0
  $stdoutDone=$false
  $stderrDone=$false
  $stdoutTask=$process.StandardOutput.ReadAsync($stdoutBuffer,0,$stdoutBuffer.Length)
  $stderrTask=$process.StandardError.ReadAsync($stderrBuffer,0,$stderrBuffer.Length)

  $controllerStage='OC06_PARENT_WRITE_AND_CAPTURE'
  $process.StandardInput.Write($parentSource)
  $process.StandardInput.Close()
  while(-not($stdoutDone-and$stderrDone)){
    $pending=@()
    if(-not$stdoutDone){$pending+=$stdoutTask}
    if(-not$stderrDone){$pending+=$stderrTask}
    [void][Threading.Tasks.Task]::WaitAny([Threading.Tasks.Task[]]$pending)
    if((-not$stdoutDone)-and$stdoutTask.IsCompleted){
      $read=$stdoutTask.GetAwaiter().GetResult()
      if($read-eq 0){$stdoutDone=$true}else{
        $stdoutCount+=$read
        $remaining=2048-$stdoutCaptured.Length
        if($remaining-gt 0){[void]$stdoutCaptured.Append($stdoutBuffer,0,[Math]::Min($read,$remaining))}
        $stdoutTask=$process.StandardOutput.ReadAsync($stdoutBuffer,0,$stdoutBuffer.Length)
      }
    }
    if((-not$stderrDone)-and$stderrTask.IsCompleted){
      $read=$stderrTask.GetAwaiter().GetResult()
      if($read-eq 0){$stderrDone=$true}else{
        $stderrCount+=$read
        $remaining=2048-$stderrCaptured.Length
        if($remaining-gt 0){[void]$stderrCaptured.Append($stderrBuffer,0,[Math]::Min($read,$remaining))}
        $stderrTask=$process.StandardError.ReadAsync($stderrBuffer,0,$stderrBuffer.Length)
      }
    }
  }
  $process.WaitForExit()
  $parentExitEvidence=[int]$process.ExitCode
  $parentStdoutCharacters=$stdoutCount
  $parentStderrCharacters=$stderrCount
  $parentStdoutCaptured=$stdoutCaptured.ToString()
  $parentStderrCaptured=$stderrCaptured.ToString()
  $captureClass='COMPLETE'
}catch{
  if(-not$parentStarted){
    [Console]::Out.WriteLine('SCIENCE_OUTER_STOP_V1|stage='+$controllerStage+'|parentExecutions=0|code=ASSERTION_FAILED')
    exit 90
  }
  $captureClass='CAPTURE_FAILURE'
  try{$process.StandardInput.Close()}catch{}
  try{$process.WaitForExit()}catch{}
  try{$parentExitEvidence=[int]$process.ExitCode}catch{$parentExitEvidence=$null}
  if($null-eq$parentStdoutCharacters){$parentStdoutCharacters=-1}
  if($null-eq$parentStderrCharacters){$parentStderrCharacters=-1}
}finally{
  $parentSource=$null
  $parentSourceBytes=$null
}

$controllerStage='OC07_CLASSIFY_AND_EMIT'
$exitFact=if($null-eq$parentExitEvidence){'UNAVAILABLE'}elseif($parentExitEvidence-ge 0-and$parentExitEvidence-le 255){[string]$parentExitEvidence}else{'OUT_OF_RANGE'}
$expectedResult='SCIENCE_HOST06_COMBINED_RESULT_V2|outcome=ACCEPTED_NO_REQUEST_STOP|earliestStage=PT06_CREDENTIAL_GATE|code=CREDENTIAL_ABSENT|childExit=87|childInvocations=1|credentialValueReads=0|requestConstructions=0|sendAsyncCalls=0|directSends=0|ordinalsConsumed=0|helperRootAbsent=true|helperDllAbsent=true|liveRootAbsent=true|ordinal2StageAbsent=true|ordinal2TargetAbsent=true|ordinal2DecisionAbsent=true|ordinal3StageAbsent=true|ordinal3TargetAbsent=true|ordinal3DecisionAbsent=true|productRootAbsent=true|productRasterAbsent=true|productProvenanceAbsent=true|scienceFixtureRootsAbsent=true'
$stdoutContent=Get-TerminatedContent $parentStdoutCaptured $parentStdoutCharacters
$stderrContent=Get-TerminatedContent $parentStderrCaptured $parentStderrCharacters
$stdoutFact=if($captureClass-cne'COMPLETE'){'UNAVAILABLE'}elseif($parentStdoutCharacters-gt 2048){'OVERSIZE'}elseif($stdoutContent-ceq$expectedResult){'EXACT_ACCEPTED_V2'}elseif($parentStdoutCharacters-eq 0){'EMPTY'}else{'NONEXACT_BOUNDED'}
$childInvocationsFact='UNPROVEN_0_OR_1'
if($stdoutFact-ceq'EXACT_ACCEPTED_V2'){$childInvocationsFact='1'}
$stderrFact='UNAVAILABLE'
if($captureClass-ceq'COMPLETE'){
  if($parentStderrCharacters-eq 0){$stderrFact='EMPTY'}
  elseif($parentStderrCharacters-gt 2048){$stderrFact='OVERSIZE'}
  elseif($null-ne$stderrContent){
    $stopPattern='\ASCIENCE_PARENT_STOP_V2\|stage=(SR01_STATIC_IDENTITY|SR02_NORMALIZER_SELF_TEST|SR03_CHILD_PREPARE|SR04_CHILD_INVOKE|SR05_CHILD_CAPTURE|SR06_CHILD_CLASSIFY|SR07_POSTFLIGHT_ABSENCE|SR08_ZERO_ACTIVITY|SR09_RESULT_EMIT)\|assertion=ASSERTION_FAILED\|childInvocations=(0|1)\|childExit=(UNAVAILABLE|OUT_OF_RANGE|[0-9]{1,3})\|childStdout=(UNAVAILABLE|ZERO|NONZERO_BOUNDED|NONZERO_OVERSIZE)\|childStderr=(UNAVAILABLE|EXACT_PT06|EMPTY|NONEXACT_BOUNDED|OVERSIZE)\|code=ASSERTION_FAILED\z'
    $stopMatch=[regex]::Match($stderrContent,$stopPattern,[Text.RegularExpressions.RegexOptions]::CultureInvariant)
    if($stopMatch.Success){
      $stderrFact='EXACT_PARENT_STOP_V2'
      $childInvocationsFact=$stopMatch.Groups[2].Value
      $parentStopStage=$stopMatch.Groups[1].Value
      $parentStopCode='ASSERTION_FAILED'
      $childExitFact=$stopMatch.Groups[3].Value
      $childStdoutFact=$stopMatch.Groups[4].Value
      $childStderrFact=$stopMatch.Groups[5].Value
    }else{$stderrFact='NONEXACT_BOUNDED'}
  }else{$stderrFact='NONEXACT_BOUNDED'}
}
$postflightAbsent=$true
foreach($path in $controlledPaths){if(-not(Test-PathAbsent $path)){$postflightAbsent=$false}}
$accepted=($captureClass-ceq'COMPLETE')-and($exitFact-ceq'0')-and($stdoutFact-ceq'EXACT_ACCEPTED_V2')-and($stderrFact-ceq'EMPTY')-and($childInvocationsFact-ceq'1')-and$postflightAbsent
$classification=if($accepted){'ACCEPTED_PARENT_RESULT'}else{'REJECTED_PARENT_RESULT'}
$result='SCIENCE_OUTER_RESULT_V1|classification='+$classification+'|parentExit='+$exitFact+'|parentStdout='+$stdoutFact+'|parentStderr='+$stderrFact+'|parentStopStage='+$parentStopStage+'|parentStopCode='+$parentStopCode+'|childExitFact='+$childExitFact+'|childStdoutFact='+$childStdoutFact+'|childStderrFact='+$childStderrFact+'|childInvocations='+$childInvocationsFact+'|postflightAbsent='+$postflightAbsent.ToString().ToLowerInvariant()
[Console]::Out.WriteLine($result)
if($process){$process.Dispose()}
if($accepted){exit 0}else{exit 89}
