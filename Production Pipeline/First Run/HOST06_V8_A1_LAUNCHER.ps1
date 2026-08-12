$ErrorActionPreference='Stop'
$state=@{Predicate='PH01_ENV_RETRIEVAL';RootCreated=$false;RootOrdinary=$false}
$helperRoot='C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-native-identity-v8-5fbbd31e-8b50-4cb4-a0d3-c2f0d4b9e8aa'
$helperDll=$helperRoot+'\Host06FileIdentity.dll'
$liveRoot='C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-api-v8-3f7d8a21-76c5-4d4e-9641-b2f5e73a019c'
try {
  $source=[Environment]::GetEnvironmentVariable('HORIZON_ARCHIVE_HOST06_PREHELPER_V1','Process')
  if ([string]::IsNullOrEmpty($source)) { throw 'PH01_ENV_RETRIEVAL' }
  $state.Predicate='PH02_PARSE_SUCCESS'
  $tokens=$null
  $errors=$null
  [void][System.Management.Automation.Language.Parser]::ParseInput($source,[ref]$tokens,[ref]$errors)
  if ($errors.Count -ne 0) { throw 'PH02_PARSE_SUCCESS' }
  $block=[scriptblock]::Create($source)
  $state.Predicate='PH03_INVOCATION_ENTRY'
  & $block
  if ($state.Predicate -ne 'PH08_ROOT_CREATE_COMPLETE' -or -not $state.RootOrdinary) { throw 'PH08_ROOT_CREATE_COMPLETE' }
} catch {
  $failurePredicate=$state.Predicate
  $failureClass=$_.Exception.GetType().FullName
  $failureFqid=$_.FullyQualifiedErrorId
  if ($state.RootCreated -and $state.RootOrdinary -and [IO.Directory]::Exists($helperRoot) -and -not [IO.File]::Exists($helperDll)) {
    try { [IO.Directory]::Delete($helperRoot,$false) } catch {}
  }
  $helperRootAbsent=(-not [IO.Directory]::Exists($helperRoot) -and -not [IO.File]::Exists($helperRoot))
  $helperDllAbsent=(-not [IO.File]::Exists($helperDll) -and -not [IO.Directory]::Exists($helperDll))
  $liveRootAbsent=(-not [IO.Directory]::Exists($liveRoot) -and -not [IO.File]::Exists($liveRoot))
  [Console]::Error.WriteLine('HOST06_PREHELPER_FAILURE|predicate='+$failurePredicate+'|class='+$failureClass+'|fqid='+$failureFqid+'|helperRootAbsent='+$helperRootAbsent.ToString().ToLowerInvariant()+'|helperDllAbsent='+$helperDllAbsent.ToString().ToLowerInvariant()+'|liveRootAbsent='+$liveRootAbsent.ToString().ToLowerInvariant())
  exit 86
}
