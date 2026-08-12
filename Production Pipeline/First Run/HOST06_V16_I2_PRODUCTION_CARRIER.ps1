$state.Predicate='PH04_PS51_VERSION'
if ($PSVersionTable.PSEdition -ne 'Desktop' -or $PSVersionTable.PSVersion.ToString() -ne '5.1.26100.8875') { throw 'PH04_PS51_VERSION' }
$state.Predicate='PH05_X64_PROCESS'
if ([IntPtr]::Size -ne 8) { throw 'PH05_X64_PROCESS' }
$state.Predicate='PH06_ROOT_ABSENT'
if ([IO.Directory]::Exists($helperRoot) -or [IO.File]::Exists($helperRoot) -or [IO.File]::Exists($helperDll) -or [IO.Directory]::Exists($helperDll)) { throw 'PH06_ROOT_ABSENT' }
$state.Predicate='PH07_ROOT_CREATE_ENTRY'
$created=[IO.Directory]::CreateDirectory($helperRoot)
$state.RootCreated=$true
$state.Predicate='PH08_ROOT_CREATE_COMPLETE'
if ($created.FullName -cne $helperRoot -or -not [IO.Directory]::Exists($helperRoot) -or [IO.File]::Exists($helperRoot) -or [IO.File]::Exists($helperDll) -or [IO.Directory]::Exists($helperDll) -or (($created.Attributes -band [IO.FileAttributes]::ReparsePoint) -ne 0)) { throw 'PH08_ROOT_CREATE_COMPLETE' }
$state.RootOrdinary=$true
$production=@{Stage='PT01_TAIL_ENTRY';AttemptId='none';SendStarted=$false;Status='unavailable';MediaType='unavailable';ResponseByteCount='unavailable';Diagnostic='diagnostic-unavailable';HelperOwned=$true;HelperIdentity=$false;LiveOwned=$false;ActivePath=$null;ActiveIdentity=$null;ProductRootOwned=$false;ProductOwned=$false;ProvenanceOwned=$false}
$liveRoot='C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-api-v16-c5a1e9d5-bb05-4b1c-b132-06220c2cc2f6'
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
  $helperSource += [char]10
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
  if ($dllInfo.Length -lt 1 -or $dllInfo.Length -gt 1048576 -or (($dllInfo.Attributes -band [IO.FileAttributes]::ReparsePoint) -ne 0)) { throw 'PT03_HELPER_COMPILE' }
  $assemblyBytes=[IO.File]::ReadAllBytes($helperDll)
  $dllLength=[int64]$assemblyBytes.LongLength
  $dllSha=([BitConverter]::ToString($sha.ComputeHash($assemblyBytes))).Replace('-','').ToLowerInvariant()
  if ($dllLength -ne $dllInfo.Length -or $dllSha -notmatch '\A[0-9a-f]{64}\z') { throw 'PT03_HELPER_COMPILE' }
  $production.Stage='PT04_HELPER_LOAD_IDENTITY'
  $assembly=[Reflection.Assembly]::Load($assemblyBytes)
  $identityType=$assembly.GetType('HorizonArchive.Host06.FileIdentity',$true,$false)
  $readMethod=$identityType.GetMethod('Read',[Reflection.BindingFlags]'Public,Static')
  $nativeMethod=$identityType.GetMethod('GetFileInformationByHandle',[Reflection.BindingFlags]'NonPublic,Static')
  $declared=$identityType.GetMethods([Reflection.BindingFlags]'Public,NonPublic,Static,DeclaredOnly')
  $nativeImport=$nativeMethod.GetCustomAttributes([Runtime.InteropServices.DllImportAttribute],$false)
  if ($declared.Count -ne 2 -or $readMethod.ReturnType.FullName -cne 'System.UInt64[]' -or $readMethod.GetParameters().Count -ne 1 -or $readMethod.GetParameters()[0].ParameterType.FullName -cne 'Microsoft.Win32.SafeHandles.SafeFileHandle' -or $null-eq $nativeMethod -or $nativeMethod.ReturnType.FullName -cne 'System.Boolean' -or $nativeMethod.GetParameters().Count -ne 2 -or $nativeMethod.GetParameters()[0].ParameterType.FullName -cne 'Microsoft.Win32.SafeHandles.SafeFileHandle' -or -not $nativeMethod.GetParameters()[1].IsOut -or $nativeImport.Count -ne 1 -or $nativeImport[0].Value -cne 'kernel32.dll' -or -not $nativeImport[0].SetLastError) { throw 'PT04_HELPER_LOAD_IDENTITY' }
  $dllStream=New-Object IO.FileStream($helperDll,[IO.FileMode]::Open,[IO.FileAccess]::Read,[IO.FileShare]::None)
  try {
    $reobservedMemory=New-Object IO.MemoryStream
    try { $dllStream.CopyTo($reobservedMemory);$reobservedBytes=$reobservedMemory.ToArray() } finally { $reobservedMemory.Dispose() }
    $reobservedSha=([BitConverter]::ToString($sha.ComputeHash($reobservedBytes))).Replace('-','').ToLowerInvariant()
    if ($reobservedBytes.LongLength -ne $dllLength -or $reobservedSha -cne $dllSha) { throw 'PT04_HELPER_LOAD_IDENTITY' }
    $dllIdentity=[HorizonArchive.Host06.FileIdentity]::Read($dllStream.SafeFileHandle)
  } finally { $dllStream.Dispose() }
  if ($dllIdentity.Count -ne 5 -or $dllIdentity[2] -ne 1 -or (($dllIdentity[3] -band 0x400) -ne 0) -or $dllIdentity[4] -ne $dllLength) { throw 'PT04_HELPER_LOAD_IDENTITY' }
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
Composition/framing: Use a calm wide establishing view from several meters back at a slightly elevated first-person eye level. Keep the entire lens, tilted cradle, support base, all structural extremities, the complete fragment trail, and the dry approach comfortably inside the frame with generous visible margin on every side; nothing essential may touch or approach an image edge. Place the complete lens-and-cradle assembly as a clearly legible medium-scale discovery centered slightly right of image center, occupying roughly one third of image width and no more than one half of image height. Keep its highest point below the upper quarter of the image and its lowest support above the lower quarter. Place at least three large individually legible related lens fragments together in the lower-left middle ground, not at the bottom edge, as a short inward trail connected by an obvious dry route to the cradle. Preserve broad dry basin context around both the fragment trail and assembly. Keep distant same-basin infrastructure and horizon on the far right and upper background; keep live water confined to the far-right lower background, separated from every required dry fact. The full uncropped 16:9 image must remain readable when reduced to 390 pixels wide and at effective 200 percent zoom: one unmistakable lens-in-cradle silhouette, visible load contacts and drainage seams, three visible fragments, and one continuous dry approach. Avoid close-up, monumental hero scale, tiny token scale, low camera angle, foreground fragments cut by the bottom edge, oversized support plinth, off-frame structure, crop-dependent facts, alternate image, derivative, overlay, or fabricated alternative text.
Lighting/mood: Restrained natural basin light, horizon reflection caught by the inner lens, sober discovery, deep atmospheric scale, no magical glow, spectacle cue, invitation, reward, activation flash, or world response.
Text: No text.
Constraints: No image input. No protagonist, body, hands, shadow, reflection, portrait, companion, ship, person, face, human path, human control, label, glyph, symbol, interface, overlay, beacon, readable mark, prior-human trace, or native educational graphic. The Machine and Builders do not speak, react, recognize, reward, authorize, invite, judge, explain, move, heal, aim, drain, illuminate, or open anything because of the player. Preserve physical ambiguity and surface-safe canon.
Avoid: Empty ring; lens beside, behind, through, or in front of an aperture; submerged or water-filled cradle; inaccessible scenic landmark; duplicate lens/cradle relation; the distant Tidal Lens as Host 06; generic ruins; terrestrial industrial shorthand; arbitrary fantasy ornament; answer key; model or deployment diagram; purpose certainty; hidden-lore answer; watermark; border; crop-dependent essential fact.
"@
  if($prompt.EndsWith("`n")){$prompt=$prompt.Substring(0,$prompt.Length-1)}
  $promptBytes=$utf8.GetBytes($prompt)
  if ($promptBytes.Length -ne 4996 -or ([BitConverter]::ToString($sha.ComputeHash($promptBytes))).Replace('-','').ToLowerInvariant() -cne 'c15c7eee8870ab240c4e8873a5dba699d27715b5195e02ddf13bdccba20e1d02') { throw 'PT08_REQUEST_SCHEMA' }
  Add-Type -AssemblyName System.Net.Http -ErrorAction Stop
  Add-Type -AssemblyName System.Web.Extensions -ErrorAction Stop
  $jsonGuardSource=@"
using System;
using System.Collections.Generic;
namespace HorizonArchive.Host06V15 {
  public static class StrictJson {
    private sealed class Reader {
      private readonly string s; private int i;
      internal Reader(string text) { if (text == null) throw new FormatException(); s=text; }
      internal void Run() { WS(); Value(); WS(); if(i!=s.Length) throw new FormatException(); }
      private void WS(){while(i<s.Length&&(s[i]==' '||s[i]=='\t'||s[i]=='\r'||s[i]=='\n'))i++;}
      private void Value(){WS();if(i>=s.Length)throw new FormatException();char c=s[i];if(c=='{')Obj();else if(c=='[')Arr();else if(c=='\"')Str(false);else if(c=='t')Lit("true");else if(c=='f')Lit("false");else if(c=='n')Lit("null");else Num();}
      private void Obj(){i++;WS();var keys=new HashSet<string>(StringComparer.Ordinal);if(Take('}'))return;while(true){WS();string k=Str(true);if(!keys.Add(k))throw new FormatException();WS();Need(':');Value();WS();if(Take('}'))return;Need(',');}}
      private void Arr(){i++;WS();if(Take(']'))return;while(true){Value();WS();if(Take(']'))return;Need(',');}}
      private string Str(bool keep){Need('\"');var b=keep?new System.Text.StringBuilder():null;while(i<s.Length){char c=s[i++];if(c=='\"')return keep?b.ToString():null;if(c<0x20)throw new FormatException();if(c=='\\'){if(i>=s.Length)throw new FormatException();char e=s[i++];if(e=='u'){int v=Hex4();char u=(char)v;if(char.IsHighSurrogate(u)){if(i+5>=s.Length||s[i++]!='\\'||s[i++]!='u')throw new FormatException();char l=(char)Hex4();if(!char.IsLowSurrogate(l))throw new FormatException();if(keep){b.Append(u);b.Append(l);}}else{if(char.IsLowSurrogate(u))throw new FormatException();if(keep)b.Append(u);}}else{if("\"\\/bfnrt".IndexOf(e)<0)throw new FormatException();if(keep)b.Append(e);}}else if(keep)b.Append(c);}throw new FormatException();}
      private int Hex4(){int v=0;for(int n=0;n<4;n++){if(i>=s.Length)throw new FormatException();char c=s[i++];int d=c>='0'&&c<='9'?c-'0':c>='a'&&c<='f'?c-'a'+10:c>='A'&&c<='F'?c-'A'+10:-1;if(d<0)throw new FormatException();v=(v<<4)|d;}return v;}
      private void Num(){int st=i;if(Take('-')){}if(Take('0')){if(i<s.Length&&char.IsDigit(s[i]))throw new FormatException();}else{OneNine();while(i<s.Length&&char.IsDigit(s[i]))i++;}if(Take('.')){Digit();while(i<s.Length&&char.IsDigit(s[i]))i++;}if(i<s.Length&&(s[i]=='e'||s[i]=='E')){i++;if(i<s.Length&&(s[i]=='+'||s[i]=='-'))i++;Digit();while(i<s.Length&&char.IsDigit(s[i]))i++;}if(i==st)throw new FormatException();}
      private void OneNine(){if(i>=s.Length||s[i]<'1'||s[i]>'9')throw new FormatException();i++;}private void Digit(){if(i>=s.Length||!char.IsDigit(s[i]))throw new FormatException();i++;}
      private void Lit(string x){if(i+x.Length>s.Length||String.CompareOrdinal(s,i,x,0,x.Length)!=0)throw new FormatException();i+=x.Length;}
      private bool Take(char c){if(i<s.Length&&s[i]==c){i++;return true;}return false;}private void Need(char c){if(!Take(c))throw new FormatException();}
    }
    public static void Validate(string text){new Reader(text).Run();}
  }
}
"@
  Add-Type -TypeDefinition $jsonGuardSource -Language CSharp -ErrorAction Stop
  function Test-ExactKeys([System.Collections.IDictionary]$o,[string[]]$allowed,[string[]]$required){
    if($null-eq$o){return $false};foreach($k in $o.Keys){if($k-isnot[string]-or-not($allowed-ccontains[string]$k)){return $false}};foreach($k in $required){if(-not($o.Keys-ccontains[string]$k)){return $false}};return $true
  }
  function Test-Key([System.Collections.IDictionary]$o,[string]$name){return $null-ne$o-and($o.Keys-ccontains$name)}
  function Test-UInt64Json($v){
    if($v-is[bool]-or$v-is[string]-or$null-eq$v){return $false};try{$d=[decimal]$v;if($d-lt 0-or[decimal]::Truncate($d)-ne$d-or$d-gt[long]::MaxValue){return $false};return $true}catch{return $false}
  }  $serializer=New-Object Web.Script.Serialization.JavaScriptSerializer
  $serializer.MaxJsonLength=40500000
  $serializer.RecursionLimit=16
  $requestObject=[ordered]@{model='gpt-image-2';prompt=$prompt;n=1;size='3840x2160';quality='high';background='opaque';output_format='png'}
  $requestJson=$serializer.Serialize($requestObject)
  if ($requestObject.Count -ne 7) { throw 'PT08_REQUEST_SCHEMA' }
  $production.AttemptId='I2'
  $production.Stage='PT09_SEND_ENTRY'
  $stagePath=$liveRoot+'\.attempt-I2-bc93ebf9-8074-4e64-86b4-1967b6c0a978.stage'
  $targetPath=$liveRoot+'\attempt-I2.png'
  $decisionPath=$liveRoot+'\.attempt-I2.review-v1'
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
  try{$response=$client.SendAsync($request,[Net.Http.HttpCompletionOption]::ResponseHeadersRead).GetAwaiter().GetResult()}finally{$request.Dispose();$client.Dispose();$handler.Dispose()}
  $status=[int]$response.StatusCode
  $mediaType=if($null-eq$response.Content.Headers.ContentType-or[string]::IsNullOrWhiteSpace($response.Content.Headers.ContentType.MediaType)){'absent'}else{$response.Content.Headers.ContentType.MediaType.ToLowerInvariant()}
  $production.Status=$status;$production.MediaType=$mediaType;$production.ResponseByteCount='cap-exceeded';$production.Diagnostic='diagnostic-unavailable'
  if($status-lt 100-or$status-gt 599){$response.Dispose();throw 'PT10_RESPONSE_ENVELOPE'}
  if($response.Content.Headers.ContentLength.HasValue-and($response.Content.Headers.ContentLength.Value-lt 1-or$response.Content.Headers.ContentLength.Value-gt 40500000)){$response.Dispose();throw 'PT10_RESPONSE_ENVELOPE'}
  $stream=$response.Content.ReadAsStreamAsync().GetAwaiter().GetResult();$memory=New-Object IO.MemoryStream;$buffer=New-Object byte[] 65536
  try{while(($read=$stream.Read($buffer,0,$buffer.Length))-gt 0){if($memory.Length+$read-gt 40500000){throw 'PT10_RESPONSE_ENVELOPE'};$memory.Write($buffer,0,$read)};$responseBytes=$memory.ToArray()}finally{$memory.Dispose();$stream.Dispose();$response.Dispose()}
  $production.ResponseByteCount=$responseBytes.Length
  if($responseBytes.Length-lt 1){throw 'PT10_RESPONSE_ENVELOPE'}
  $responseText=$utf8.GetString($responseBytes)
  $responseBytes=$null
  if($responseText.Length-gt 0-and$responseText[0]-eq[char]0xFEFF){throw 'PT10_RESPONSE_ENVELOPE'}
  try{[HorizonArchive.Host06V15.StrictJson]::Validate($responseText);$responseObject=$serializer.DeserializeObject($responseText)}catch{throw 'PT10_RESPONSE_ENVELOPE'}
  if($status-ne 200){
    try{
      if(-not(Test-ExactKeys $responseObject @('error') @('error'))){throw 'DIAG'};$err=$responseObject['error'];if(-not(Test-ExactKeys $err @('type','code','param','message') @())){throw 'DIAG'}
      $parts=New-Object Collections.Generic.List[string]
      foreach($name in @('type','code','param','message')){if(Test-Key $err $name){if($err[$name]-isnot[string]){throw 'DIAG'};$value=[string]$err[$name];$cap=if($name-eq'message'){512}else{128};if($utf8.GetByteCount($value)-gt$cap-or$value-match'[\x00-\x1f\x7f]'){throw 'DIAG'};$value=[regex]::Replace($value,'(?i)(bearer\s+|sk-[A-Za-z0-9_-]{8,}|api[_-]?key\s*[:=]\s*)\S+','$1[REDACTED]');[void]$parts.Add($name+'='+$value)}}
      $projection=[string]::Join('|',$parts);if($utf8.GetByteCount($projection)-gt 1024){throw 'DIAG'};$production.Diagnostic=if($projection.Length){$projection}else{'diagnostic-unavailable'}
    }catch{$production.Diagnostic='diagnostic-unavailable'}
    throw 'PT10_RESPONSE_ENVELOPE'
  }
  if($mediaType-cne'application/json'){throw 'PT10_RESPONSE_ENVELOPE'}
  $production.Stage='PT11_RESPONSE_PARSE'
  if(-not(Test-Key $responseObject 'created')-or-not(Test-Key $responseObject 'data')){throw 'PT11_RESPONSE_PARSE'}
  if(-not(Test-UInt64Json $responseObject['created'])){throw 'PT11_RESPONSE_PARSE'}
  foreach($echo in @{background='opaque';output_format='png';quality='high';size='3840x2160'}.GetEnumerator()){if((Test-Key $responseObject $echo.Key)-and($responseObject[$echo.Key]-isnot[string]-or$responseObject[$echo.Key]-cne$echo.Value)){throw 'PT11_RESPONSE_PARSE'}}
  $data=$responseObject['data'];if($data-isnot[System.Array]-or$data.Count-ne 1-or$data[0]-isnot[System.Collections.IDictionary]-or-not(Test-Key $data[0] 'b64_json')-or$data[0]['b64_json']-isnot[string]){throw 'PT11_RESPONSE_PARSE'}
  foreach($forbidden in @('url','revised_prompt')){if((Test-Key $data[0] $forbidden)-and$null-ne$data[0][$forbidden]){throw 'PT11_RESPONSE_PARSE'}}
  if(Test-Key $responseObject 'usage'){$usage=$responseObject['usage'];if($usage-isnot[System.Collections.IDictionary]){throw 'PT11_RESPONSE_PARSE'};foreach($n in @('input_tokens','output_tokens','total_tokens')){if((Test-Key $usage $n)-and-not(Test-UInt64Json $usage[$n])){throw 'PT11_RESPONSE_PARSE'}};foreach($dn in @('input_tokens_details','output_tokens_details')){if(Test-Key $usage $dn){$details=$usage[$dn];if($details-isnot[System.Collections.IDictionary]){throw 'PT11_RESPONSE_PARSE'};foreach($n in @('text_tokens','image_tokens')){if((Test-Key $details $n)-and-not(Test-UInt64Json $details[$n])){throw 'PT11_RESPONSE_PARSE'}}}}}
  $b64=[string]$data[0]['b64_json']
  if($b64.Length-lt 4-or$b64.Length-gt 40000000-or($b64.Length%4)-ne 0-or-not[regex]::IsMatch($b64,'\A(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?\z')){throw 'PT11_RESPONSE_PARSE'}
  $decodedLength=($b64.Length/4*3)-($(if($b64.EndsWith('==')){2}elseif($b64.EndsWith('=')){1}else{0}));if($decodedLength-lt 1-or$decodedLength-gt 30000000){throw 'PT11_RESPONSE_PARSE'}
  $responseObject=$null;$responseText=$null;$responseBytes=$null;$data=$null;$usage=$null
  $decodedBytes=[Convert]::FromBase64String($b64);if($decodedBytes.Length-ne$decodedLength-or[Convert]::ToBase64String($decodedBytes)-cne$b64){throw 'PT11_RESPONSE_PARSE'}
  $b64=$null
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
    [Console]::Out.WriteLine('HOST06_REVIEW_READY|attemptId=I2'+'|length='+$targetIdentity[4]+'|sha256='+$decodedSha)
    $deadline=[DateTime]::UtcNow.AddMinutes(20)
    while(-not [IO.File]::Exists($decisionPath)){if([DateTime]::UtcNow-ge$deadline){throw 'PT13_REVIEW_WAIT'};[Threading.Thread]::Sleep(250)}
    $decisionInfo=[IO.FileInfo]$decisionPath
    if($decisionInfo.Length-lt 1-or$decisionInfo.Length-gt 512-or(($decisionInfo.Attributes-band[IO.FileAttributes]::ReparsePoint)-ne 0)){throw 'PT14_REVIEW_DECISION'}
    $decisionBytes=[IO.File]::ReadAllBytes($decisionPath)
    $decision=$utf8.GetString($decisionBytes)
    $decisionPattern='\AHOST06_REVIEW_V1\|attemptId=I2\|decision=(?<decision>ACCEPT|REJECT)\|technical=true\|physical=(?<physical>true|false)\|layouts=(?<layouts>true|false)\|accessibility=(?<accessibility>true|false)\|codes=(?<codes>NONE|PHY(?:-\d{2})(?:,PHY-\d{2})*|LAYOUT|ACCESSIBILITY)\n\z'
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
      throw 'PT15_OBJECTIVE_REJECTION_LIMIT'
    }
    $production.Stage='PT16_PRODUCT_IMPORT'
    if($targetIdentity[4]-lt 1-or$targetIdentity[4]-gt 30000000-or(37410731+$targetIdentity[4])-gt 67410731){throw 'PT16_PRODUCT_IMPORT'}
    if([IO.File]::Exists($productRaster)-or[IO.Directory]::Exists($productRaster)-or[IO.File]::Exists($productProvenance)-or[IO.Directory]::Exists($productProvenance)){throw 'PT16_PRODUCT_IMPORT'}
    if(-not[IO.Directory]::Exists((Split-Path -Parent $productRoot))){throw 'PT16_PRODUCT_IMPORT'}
    if(-not[IO.Directory]::Exists($productRoot)){$productCreated=[IO.Directory]::CreateDirectory($productRoot);$production.ProductRootOwned=$true;if($productCreated.FullName-cne$productRoot-or(($productCreated.Attributes-band[IO.FileAttributes]::ReparsePoint)-ne 0)){throw 'PT16_PRODUCT_IMPORT'}}
    $sourceStream=New-Object IO.FileStream($targetPath,[IO.FileMode]::Open,[IO.FileAccess]::Read,[IO.FileShare]::None)
    $productStream=New-Object IO.FileStream($productRaster,[IO.FileMode]::CreateNew,[IO.FileAccess]::Write,[IO.FileShare]::None)
    $production.ProductOwned=$true
    try{$sourceStream.CopyTo($productStream);$productStream.Flush($true)}finally{$productStream.Dispose();$sourceStream.Dispose()}
    $productBytes=[IO.File]::ReadAllBytes($productRaster)
    if($productBytes.Length-ne$targetIdentity[4]-or([BitConverter]::ToString($sha.ComputeHash($productBytes))).Replace('-','').ToLowerInvariant()-cne$decodedSha){throw 'PT16_PRODUCT_IMPORT'}
    $provenance="# HOST06 Source Provenance`n`nWork Order: FRWO-005-v21`nShell: FRSH-005-v1-VR-47`nHelper: HOST06-FILE-IDENTITY-PSNET-v1`nHelper source: 1693 / 98cf564b7d22da686adc204a3f6051927ac2d37ef7b5f2fe22d774cb10d5da97`nHelper DLL: "+$dllLength+" / "+$dllSha+"`nTransport: HOST06-IMAGE-API-PSNET-v1`nEndpoint: https://api.openai.com/v1/images/generations`nModel/options: gpt-image-2 / n=1 / 3840x2160 / high / opaque / png`nPrompt: HOST06-GEN-PROMPT-v6 / 4996 / c15c7eee8870ab240c4e8873a5dba699d27715b5195e02ddf13bdccba20e1d02 / no input`nConsumed attempt ID: I2 accepted`nSelected attempt ID/path: I2 / attempt-I2.png`nSelected identity: "+$targetIdentity[4]+" / "+$decodedSha+"`nTechnical/physical/layout/accessibility: pass / pass / pass / pass`nManifest: c7ca95201029b490f2460a846e3dc2a64a26775b57e8c587cbc2d874df654d99`nProduct: Visual Direction/Production Masters/2026-08-10-first-run-host06/host06-stranded-lens-cradle-master-v1.png`nAccepted media baseline before import: 17 / 37410731`nHelper/live cleanup: complete`n"
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
    [Console]::Out.WriteLine('HOST06_PRODUCTION_COMPLETE|attemptId=I2'+'|length='+$targetIdentity[4]+'|sha256='+$decodedSha+'|helperRootAbsent=true|liveRootAbsent=true')
    break
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
  [Console]::Error.WriteLine('HOST06_PRODUCTION_FAILURE|stage='+$failureStage+'|attemptId='+$production.AttemptId+'|sendStarted='+$production.SendStarted.ToString().ToLowerInvariant()+'|status='+$production.Status+'|mediaType='+$production.MediaType+'|responseBytes='+$production.ResponseByteCount+'|diagnostic='+$production.Diagnostic+'|helperRootAbsent='+$helperRootAbsent.ToString().ToLowerInvariant()+'|helperDllAbsent='+$helperDllAbsent.ToString().ToLowerInvariant()+'|liveRootAbsent='+$liveRootAbsent.ToString().ToLowerInvariant()+'|activeAbsent='+$activeAbsent.ToString().ToLowerInvariant()+'|productAbsent='+$productAbsent.ToString().ToLowerInvariant()+'|provenanceAbsent='+$provenanceAbsent.ToString().ToLowerInvariant())
  exit 87
} finally {
  $credential=$null;$requestJson=$null;$requestObject=$null;$responseBytes=$null;$decodedBytes=$null;$sourceBytes=$null;$assemblyBytes=$null
}
