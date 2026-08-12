$ErrorActionPreference='Stop'
$state=@{Predicate='PH01_STDIN_RETRIEVAL';RootCreated=$false;RootOrdinary=$false}
$helperRoot='C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-native-identity-v9-5825b06f-e16d-4518-b924-6d50809e3a33'
$helperDll=$helperRoot+'\Host06FileIdentity.dll'
$liveRoot='C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-api-v9-ca96f453-a3ca-439b-b45a-635652d387ba'
$source=$null;$sourceBytes=$null;$block=$null;$sha=$null
try {
  $source=[Console]::In.ReadToEnd()
  if ([string]::IsNullOrEmpty($source)) { throw 'PH01_STDIN_RETRIEVAL' }
  $strictUtf8=New-Object Text.UTF8Encoding($false,$true)
  $sourceBytes=$strictUtf8.GetBytes($source)
  if ($source.Length-ne 34766-or$sourceBytes.Length-ne 34766) { throw 'PH01_STDIN_RETRIEVAL' }
  foreach($character in $source.ToCharArray()){if([int]$character-gt 127){throw 'PH01_STDIN_RETRIEVAL'}}
  $sha=[Security.Cryptography.SHA256]::Create()
  if (([BitConverter]::ToString($sha.ComputeHash($sourceBytes))).Replace('-','').ToLowerInvariant()-cne'2b029ef83752051bb5e255e269d291e47a6449a960f13d4a35311c78a257194e'){throw 'PH01_STDIN_RETRIEVAL'}
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