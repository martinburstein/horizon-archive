$ErrorActionPreference='Stop'
$state=@{Predicate='PH01_STDIN_RETRIEVAL';RootCreated=$false;RootOrdinary=$false}
$helperRoot='C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-native-identity-v12-7b3e6b6c-f96d-4f5a-91f9-a02be46e560b'
$helperDll=$helperRoot+'\Host06FileIdentity.dll'
$liveRoot='C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-api-v12-15ae0b5e-04a0-43eb-b6be-0f8ab94f9cc9'
$source=$null;$sourceBytes=$null;$block=$null;$sha=$null
try {
  $source=[Console]::In.ReadToEnd()
  if ([string]::IsNullOrEmpty($source)) { throw 'PH01_STDIN_RETRIEVAL' }
  $strictUtf8=New-Object Text.UTF8Encoding($false,$true)
  $sourceBytes=$strictUtf8.GetBytes($source)
  if ($source.Length-ne 36230-or$sourceBytes.Length-ne 36230) { throw 'PH01_STDIN_RETRIEVAL' }
  foreach($character in $source.ToCharArray()){if([int]$character-gt 127){throw 'PH01_STDIN_RETRIEVAL'}}
  $sha=[Security.Cryptography.SHA256]::Create()
  if (([BitConverter]::ToString($sha.ComputeHash($sourceBytes))).Replace('-','').ToLowerInvariant()-cne'639ca116dd083019bdcd63471beae7b9e352cf29c1ac9166aa8e8aa4f13f7739'){throw 'PH01_STDIN_RETRIEVAL'}
  $state.Predicate='PH02_PARSE_SUCCESS'
  $tokens=$null;$errors=$null
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
  if ($state.RootCreated-and$state.RootOrdinary-and[IO.Directory]::Exists($helperRoot)-and-not[IO.File]::Exists($helperDll)){try{[IO.Directory]::Delete($helperRoot,$false)}catch{}}
  $helperRootAbsent=(-not[IO.Directory]::Exists($helperRoot)-and-not[IO.File]::Exists($helperRoot))
  $helperDllAbsent=(-not[IO.File]::Exists($helperDll)-and-not[IO.Directory]::Exists($helperDll))
  $liveRootAbsent=(-not[IO.Directory]::Exists($liveRoot)-and-not[IO.File]::Exists($liveRoot))
  [Console]::Error.WriteLine('HOST06_PREHELPER_FAILURE|predicate='+$failurePredicate+'|class='+$failureClass+'|fqid='+$failureFqid+'|helperRootAbsent='+$helperRootAbsent.ToString().ToLowerInvariant()+'|helperDllAbsent='+$helperDllAbsent.ToString().ToLowerInvariant()+'|liveRootAbsent='+$liveRootAbsent.ToString().ToLowerInvariant())
  exit 86
} finally {
  if($sha){$sha.Dispose()}
  $tokens=$null;$errors=$null;$block=$null;$source=$null;$sourceBytes=$null
}