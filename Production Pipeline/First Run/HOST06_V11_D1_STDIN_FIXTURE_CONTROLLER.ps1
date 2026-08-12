$ErrorActionPreference='Stop'
$root=Split-Path -Parent $MyInvocation.MyCommand.Path
$parentPath=Join-Path $root 'HOST06_V11_D1_STDIN_PARENT.ps1'
$controlled=@(
'C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-native-identity-v11-6cf2e401-916a-4457-9396-2fd2b228547d',
'C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-api-v11-8bd3fc8a-9097-423a-8941-2cbf188f5f34',
'C:\Users\marti\OneDrive\Desktop\Horizon Archive\Visual Direction\Production Masters\2026-08-10-first-run-host06')
foreach($path in $controlled){if([IO.File]::Exists($path)-or[IO.Directory]::Exists($path)){throw 'FIXTURE_PREFLIGHT_ABSENCE'}}
$psi=New-Object Diagnostics.ProcessStartInfo
$psi.FileName='C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe'
$psi.Arguments='-NoLogo -NoProfile -NonInteractive -File "'+$parentPath+'"'
$psi.UseShellExecute=$false;$psi.CreateNoWindow=$true;$psi.RedirectStandardOutput=$true;$psi.RedirectStandardError=$true
[void]$psi.EnvironmentVariables.Remove('OPENAI_API_KEY')
$process=New-Object Diagnostics.Process;$process.StartInfo=$psi
try{
  if(-not$process.Start()){throw 'FIXTURE_PARENT_START'}
  $stdoutTask=$process.StandardOutput.ReadToEndAsync();$stderrTask=$process.StandardError.ReadToEndAsync();$process.WaitForExit()
  $stdout=$stdoutTask.GetAwaiter().GetResult();$stderr=$stderrTask.GetAwaiter().GetResult()
  if($process.ExitCode-ne 87-or$stdout.Length-ne 0){throw 'FIXTURE_NO_REQUEST_RESULT'}
  if($stderr-ne"HOST06_PRODUCTION_FAILURE|stage=PT06_CREDENTIAL_GATE|attempt=none|sendStarted=false|status=unavailable|mediaType=unavailable|responseBytes=unavailable|diagnostic=diagnostic-unavailable|helperRootAbsent=true|helperDllAbsent=true|liveRootAbsent=true|activeAbsent=true|productAbsent=true|provenanceAbsent=true`r`n"){throw 'FIXTURE_NO_REQUEST_DIAGNOSTIC'}
  foreach($path in $controlled){if([IO.File]::Exists($path)-or[IO.Directory]::Exists($path)){throw 'FIXTURE_POSTFLIGHT_ABSENCE'}}
  [Console]::Out.WriteLine('HOST06_V11_STDIN_FIXTURE_PASS|earliestStage=PT06_CREDENTIAL_GATE|childInvocations=1|credentialReads=0|requestConstructions=0|sendAsyncCalls=0|apiSends=0|D1Consumed=false|controlledPathsAbsent=true')
}finally{if($process){$process.Dispose()}}
