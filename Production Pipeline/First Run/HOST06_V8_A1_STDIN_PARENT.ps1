$ErrorActionPreference='Stop'
$root=Split-Path -Parent $MyInvocation.MyCommand.Path
$carrierPath=Join-Path $root 'HOST06_V8_A1_PRODUCTION_CARRIER.ps1'
$launcherPath=Join-Path $root 'HOST06_V8_A1_LAUNCHER.ps1'
$strictUtf8=New-Object Text.UTF8Encoding($false,$true)
$sha=[Security.Cryptography.SHA256]::Create()
$process=$null;$carrier=$null;$carrierBytes=$null
try{
  $carrierBytes=[IO.File]::ReadAllBytes($carrierPath)
  if($carrierBytes.Length-ne 34766-or([BitConverter]::ToString($sha.ComputeHash($carrierBytes))).Replace('-','').ToLowerInvariant()-cne'9b1d315bc728299145d9a9582f7fd0da134403dd0a076254a8423a065da046a5'){throw 'PARENT_CARRIER_IDENTITY'}
  foreach($byte in $carrierBytes){if($byte-gt 127){throw 'PARENT_CARRIER_ASCII'}}
  $carrier=$strictUtf8.GetString($carrierBytes)
  if($carrier.Length-ne 33666){throw 'PARENT_CARRIER_LENGTH'}
  $tokens=$null;$errors=$null
  [void][Management.Automation.Language.Parser]::ParseInput($carrier,[ref]$tokens,[ref]$errors)
  if($errors.Count-ne 0){throw 'PARENT_CARRIER_PARSE'}
  $launcherBytes=[IO.File]::ReadAllBytes($launcherPath)
  $launcherHash=([BitConverter]::ToString($sha.ComputeHash($launcherBytes))).Replace('-','').ToLowerInvariant()
  if($launcherBytes.Length-ne 2637-or$launcherHash-cne'4eccc9abbed86b917dd987050b04340867aee023707aa063d0ecf13c6bf4bc1a'){throw 'PARENT_LAUNCHER_IDENTITY'}
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
