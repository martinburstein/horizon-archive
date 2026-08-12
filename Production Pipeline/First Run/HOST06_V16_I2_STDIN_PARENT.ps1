$ErrorActionPreference='Stop'
$root=Split-Path -Parent $MyInvocation.MyCommand.Path
$carrierPath=Join-Path $root 'HOST06_V16_I2_PRODUCTION_CARRIER.ps1'
$launcherPath=Join-Path $root 'HOST06_V16_I2_LAUNCHER.ps1'
$strictUtf8=New-Object Text.UTF8Encoding($false,$true)
$sha=[Security.Cryptography.SHA256]::Create()
$process=$null;$carrier=$null;$carrierBytes=$null
try{
  $carrierBytes=[IO.File]::ReadAllBytes($carrierPath)
  if($carrierBytes.Length-ne 36109-or([BitConverter]::ToString($sha.ComputeHash($carrierBytes))).Replace('-','').ToLowerInvariant()-cne'655ae1be91b0fe202023c7ffadd3851d83b1c02f6dfba44b4b3660e4c9a01a88'){throw 'PARENT_CARRIER_IDENTITY'}
  foreach($byte in $carrierBytes){if($byte-gt 127){throw 'PARENT_CARRIER_ASCII'}}
  $carrier=$strictUtf8.GetString($carrierBytes)
  if($carrier.Length-ne 36109){throw 'PARENT_CARRIER_LENGTH'}
  $tokens=$null;$errors=$null
  [void][Management.Automation.Language.Parser]::ParseInput($carrier,[ref]$tokens,[ref]$errors)
  if($errors.Count-ne 0){throw 'PARENT_CARRIER_PARSE'}
  $launcherBytes=[IO.File]::ReadAllBytes($launcherPath)
  $launcherHash=([BitConverter]::ToString($sha.ComputeHash($launcherBytes))).Replace('-','').ToLowerInvariant()
  if($launcherBytes.Length-ne 2640-or([BitConverter]::ToString($sha.ComputeHash($launcherBytes))).Replace('-','').ToLowerInvariant()-cne'85c17dad950aa5a45573473847e16e645e720545486e928beaffbde1c7c03d07'){throw 'PARENT_LAUNCHER_IDENTITY'}
  $launcher=$strictUtf8.GetString($launcherBytes)
  $tokens=$null;$errors=$null
  [void][Management.Automation.Language.Parser]::ParseInput($launcher,[ref]$tokens,[ref]$errors)
  if($errors.Count-ne 0){throw 'PARENT_LAUNCHER_PARSE'}
  $psi=New-Object Diagnostics.ProcessStartInfo
  $psi.FileName='C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe'
  $psi.Arguments='-NoLogo -NoProfile -NonInteractive -File "'+$launcherPath+'"'
  $psi.UseShellExecute=$false;$psi.CreateNoWindow=$true
  $psi.RedirectStandardInput=$true;$psi.RedirectStandardOutput=$true;$psi.RedirectStandardError=$true
  [void]$psi.EnvironmentVariables.Remove('HORIZON_ARCHIVE_HOST06_PREHELPER_V1')
  $process=New-Object Diagnostics.Process;$process.StartInfo=$psi
  if(-not$process.Start()){throw 'PARENT_CHILD_START'}
  $stdoutTask=$process.StandardOutput.ReadToEndAsync();$stderrTask=$process.StandardError.ReadToEndAsync()
  try{$process.StandardInput.Write($carrier)}finally{$process.StandardInput.Close()}
  $process.WaitForExit()
  $stdout=$stdoutTask.GetAwaiter().GetResult();$stderr=$stderrTask.GetAwaiter().GetResult()
  if($stdout.Length-gt 2048-or$stderr.Length-gt 4096){throw 'PARENT_CHILD_OUTPUT_BOUND'}
  if($stdout.Length){[Console]::Out.Write($stdout)}
  if($stderr.Length){[Console]::Error.Write($stderr)}
  exit $process.ExitCode
}finally{
  if($process){$process.Dispose()};if($sha){$sha.Dispose()}
  $tokens=$null;$errors=$null;$launcher=$null;$launcherBytes=$null;$carrier=$null;$carrierBytes=$null;$stdout=$null;$stderr=$null
}
