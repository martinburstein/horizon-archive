$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$parentPath = Join-Path $root 'HOST06_SCIENCE_PARENT_V2.ps1'
$carrierPath = Join-Path $root 'HOST06_V8_A1_PRODUCTION_CARRIER.ps1'
$launcherPath = Join-Path $root 'HOST06_V8_A1_LAUNCHER.ps1'
$source = [IO.File]::ReadAllText($parentPath, (New-Object Text.UTF8Encoding($false, $true)))
$carrierLine = ($source -split "`n" | Where-Object { $_ -like '$combinedCarrier=*' } | Select-Object -First 1).TrimEnd("`r")
$launcherLine = ($source -split "`n" | Where-Object { $_ -like '$launcherCarrier=*' } | Select-Object -First 1).TrimEnd("`r")
if (-not $carrierLine.StartsWith("`$combinedCarrier='") -or -not $carrierLine.EndsWith("'")) { throw 'CARRIER_SOURCE' }
if (-not $launcherLine.StartsWith("`$launcherCarrier='") -or -not $launcherLine.EndsWith("'")) { throw 'LAUNCHER_SOURCE' }
$carrier = [Text.Encoding]::UTF8.GetString([Convert]::FromBase64String($carrierLine.Substring(18, $carrierLine.Length - 19)))
$launcher = [Text.Encoding]::UTF8.GetString([Convert]::FromBase64String($launcherLine.Substring(18, $launcherLine.Length - 19)))

$helperNeedle = '"@' + [char]10 + '  $utf8=New-Object Text.UTF8Encoding($false,$true)'
$helperReplacement = '"@' + [char]10 + '  $helperSource += [char]10' + [char]10 + '  $utf8=New-Object Text.UTF8Encoding($false,$true)'
if (([regex]::Matches($carrier, [regex]::Escape($helperNeedle))).Count -ne 1) { throw 'HELPER_LF_SOURCE' }
$carrier = $carrier.Replace($helperNeedle, $helperReplacement)

$oldHelper = 'C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-native-identity-725b75e4-8083-4df5-9a80-a0301b8f00dd'
$newHelper = 'C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-native-identity-v8-5fbbd31e-8b50-4cb4-a0d3-c2f0d4b9e8aa'
$oldLive = 'C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-api-6eae8313-1407-492d-af7c-675051ab8e08'
$newLive = 'C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-api-v8-3f7d8a21-76c5-4d4e-9641-b2f5e73a019c'
$carrier = $carrier.Replace($oldLive, $newLive).Replace($oldHelper, $newHelper)
$launcher = $launcher.Replace($oldLive, $newLive).Replace($oldHelper, $newHelper)

$guard = @'
  $jsonGuardSource=@"
using System;
using System.Collections.Generic;
namespace HorizonArchive.Host06V8 {
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
    if($null-eq$o){return $false};foreach($k in $o.Keys){if($k-isnot[string]-or-not($allowed-ccontains[string]$k)){return $false}};foreach($k in $required){if(-not$o.Contains($k)){return $false}};return $true
  }
  function Test-UInt64Json($v){
    if($v-is[bool]-or$v-is[string]-or$null-eq$v){return $false};try{$d=[decimal]$v;if($d-lt 0-or[decimal]::Truncate($d)-ne$d-or$d-gt[long]::MaxValue){return $false};return $true}catch{return $false}
  }
'@

$transport = @'
  $serializer=New-Object Web.Script.Serialization.JavaScriptSerializer
  $serializer.MaxJsonLength=16500000
  $serializer.RecursionLimit=16
  $requestObject=[ordered]@{model='gpt-image-2';prompt=$prompt;n=1;size='3840x2160';quality='high';background='opaque';output_format='png'}
  $requestJson=$serializer.Serialize($requestObject)
  if ($requestObject.Count -ne 7) { throw 'PT08_REQUEST_SCHEMA' }
  $production.Ordinal='A1'
  $production.Stage='PT09_SEND_ENTRY'
  $stagePath=$liveRoot+'\.attempt-A1-95a70af8-f9d0-49dc-87dc-89675212ed35.stage'
  $targetPath=$liveRoot+'\attempt-A1.png'
  $decisionPath=$liveRoot+'\.attempt-A1.review-v1'
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
  if($response.Content.Headers.ContentLength.HasValue-and($response.Content.Headers.ContentLength.Value-lt 1-or$response.Content.Headers.ContentLength.Value-gt 16500000)){$response.Dispose();throw 'PT10_RESPONSE_ENVELOPE'}
  $stream=$response.Content.ReadAsStreamAsync().GetAwaiter().GetResult();$memory=New-Object IO.MemoryStream;$buffer=New-Object byte[] 65536
  try{while(($read=$stream.Read($buffer,0,$buffer.Length))-gt 0){if($memory.Length+$read-gt 16500000){throw 'PT10_RESPONSE_ENVELOPE'};$memory.Write($buffer,0,$read)};$responseBytes=$memory.ToArray()}finally{$memory.Dispose();$stream.Dispose();$response.Dispose()}
  $production.ResponseByteCount=$responseBytes.Length
  if($responseBytes.Length-lt 1){throw 'PT10_RESPONSE_ENVELOPE'}
  $responseText=$utf8.GetString($responseBytes)
  if($responseText.Length-gt 0-and$responseText[0]-eq[char]0xFEFF){throw 'PT10_RESPONSE_ENVELOPE'}
  try{[HorizonArchive.Host06V8.StrictJson]::Validate($responseText);$responseObject=$serializer.DeserializeObject($responseText)}catch{throw 'PT10_RESPONSE_ENVELOPE'}
  if($status-ne 200){
    try{
      if(-not(Test-ExactKeys $responseObject @('error') @('error'))){throw 'DIAG'};$err=$responseObject['error'];if(-not(Test-ExactKeys $err @('type','code','param','message') @())){throw 'DIAG'}
      $parts=New-Object Collections.Generic.List[string]
      foreach($name in @('type','code','param','message')){if($err.Contains($name)){if($err[$name]-isnot[string]){throw 'DIAG'};$value=[string]$err[$name];$cap=if($name-eq'message'){512}else{128};if($utf8.GetByteCount($value)-gt$cap-or$value-match'[\x00-\x1f\x7f]'){throw 'DIAG'};$value=[regex]::Replace($value,'(?i)(bearer\s+|sk-[A-Za-z0-9_-]{8,}|api[_-]?key\s*[:=]\s*)\S+','$1[REDACTED]');[void]$parts.Add($name+'='+$value)}}
      $projection=[string]::Join('|',$parts);if($utf8.GetByteCount($projection)-gt 1024){throw 'DIAG'};$production.Diagnostic=if($projection.Length){$projection}else{'diagnostic-unavailable'}
    }catch{$production.Diagnostic='diagnostic-unavailable'}
    throw 'PT10_RESPONSE_ENVELOPE'
  }
  if($mediaType-cne'application/json'){throw 'PT10_RESPONSE_ENVELOPE'}
  $production.Stage='PT11_RESPONSE_PARSE'
  if(-not(Test-ExactKeys $responseObject @('created','background','data','output_format','quality','size','usage') @('created','data'))){throw 'PT11_RESPONSE_PARSE'}
  if(-not(Test-UInt64Json $responseObject['created'])){throw 'PT11_RESPONSE_PARSE'}
  foreach($echo in @{background='opaque';output_format='png';quality='high';size='3840x2160'}.GetEnumerator()){if($responseObject.Contains($echo.Key)-and($responseObject[$echo.Key]-isnot[string]-or$responseObject[$echo.Key]-cne$echo.Value)){throw 'PT11_RESPONSE_PARSE'}}
  $data=$responseObject['data'];if($data-isnot[System.Array]-or$data.Count-ne 1-or-not(Test-ExactKeys $data[0] @('b64_json') @('b64_json'))-or$data[0]['b64_json']-isnot[string]){throw 'PT11_RESPONSE_PARSE'}
  if($responseObject.Contains('usage')){$usage=$responseObject['usage'];if(-not(Test-ExactKeys $usage @('input_tokens','output_tokens','total_tokens','input_tokens_details','output_tokens_details') @())){throw 'PT11_RESPONSE_PARSE'};foreach($n in @('input_tokens','output_tokens','total_tokens')){if($usage.Contains($n)-and-not(Test-UInt64Json $usage[$n])){throw 'PT11_RESPONSE_PARSE'}};foreach($dn in @('input_tokens_details','output_tokens_details')){if($usage.Contains($dn)){$details=$usage[$dn];if(-not(Test-ExactKeys $details @('text_tokens','image_tokens') @())){throw 'PT11_RESPONSE_PARSE'};foreach($n in @('text_tokens','image_tokens')){if($details.Contains($n)-and-not(Test-UInt64Json $details[$n])){throw 'PT11_RESPONSE_PARSE'}}}}}
  $b64=[string]$data[0]['b64_json']
  if($b64.Length-lt 4-or$b64.Length-gt 16000000-or($b64.Length%4)-ne 0-or-not[regex]::IsMatch($b64,'\A(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?\z')){throw 'PT11_RESPONSE_PARSE'}
  $decodedLength=($b64.Length/4*3)-($(if($b64.EndsWith('==')){2}elseif($b64.EndsWith('=')){1}else{0}));if($decodedLength-lt 1-or$decodedLength-gt 12000000){throw 'PT11_RESPONSE_PARSE'}
  $decodedBytes=[Convert]::FromBase64String($b64);if($decodedBytes.Length-ne$decodedLength-or[Convert]::ToBase64String($decodedBytes)-cne$b64){throw 'PT11_RESPONSE_PARSE'}
  $responseObject=$null;$responseText=$null;$responseBytes=$null;$b64=$null;$data=$null;$usage=$null
'@

$carrier = $carrier.Replace("  `$serializer=New-Object Web.Script.Serialization.JavaScriptSerializer`n", $guard + "  `$serializer=New-Object Web.Script.Serialization.JavaScriptSerializer`n")
$pattern = '(?s)  \$serializer=New-Object Web\.Script\.Serialization\.JavaScriptSerializer\n  \$requestObject=.*?\n    \$production\.Stage=''PT12_MATERIALIZE_STAGE'''
$replacement = $transport + "`n  `$production.Stage='PT12_MATERIALIZE_STAGE'"
$carrier = [regex]::Replace($carrier, $pattern, $replacement, 1)
$carrier = $carrier.Replace("  foreach (`$ordinal in @(2,3)) {`n", '').Replace("    if (`$ordinal -eq 3 -and `$ordinal2Rejected -ne `$true) { break }`n", '')
$carrier = $carrier.Replace("  }`n} catch {", "} catch {")
$carrier = $carrier.Replace("'HOST06_REVIEW_READY|ordinal='+`$ordinal", "'HOST06_REVIEW_READY|ordinal=A1'")
$carrier = $carrier.Replace("'\AHOST06_REVIEW_V1\|ordinal='+`$ordinal+'\|decision=", "'\AHOST06_REVIEW_V1\|ordinal=A1\|decision=")
$carrier = $carrier.Replace("      if(`$ordinal-eq 2){`$ordinal2Rejected=`$true;continue}else{throw 'PT15_OBJECTIVE_REJECTION_LIMIT'}`n", "      throw 'PT15_OBJECTIVE_REJECTION_LIMIT'`n")
$carrier = $carrier.Replace('Work Order: FRWO-005-v7', 'Work Order: FRWO-005-v8').Replace('Shell: FRSH-005-v1 through FRSH-005-v1-VR-11', 'Shell: FRSH-005-v1-VR-34').Replace('Consumed ordinals: "+$(if($ordinal-eq 2){''2 accepted''}else{''2 objective rejection; 3 accepted''})+"', 'Consumed attempt: A1 accepted').Replace('Selected attempt: attempt-0"+$ordinal+".png', 'Selected attempt: attempt-A1.png')
$carrier = $carrier.Replace("Ordinal=0;SendStarted=`$false;", "Ordinal='none';SendStarted=`$false;Status='unavailable';MediaType='unavailable';ResponseByteCount='unavailable';Diagnostic='diagnostic-unavailable';")
$carrier = $carrier.Replace("'|ordinal='+`$production.Ordinal+'|sendStarted='", "'|attempt='+`$production.Ordinal+'|sendStarted='")
$carrier = $carrier.Replace("+'|sendStarted='+`$production.SendStarted.ToString().ToLowerInvariant()+'|helperRootAbsent='", "+'|sendStarted='+`$production.SendStarted.ToString().ToLowerInvariant()+'|status='+`$production.Status+'|mediaType='+`$production.MediaType+'|responseBytes='+`$production.ResponseByteCount+'|diagnostic='+`$production.Diagnostic+'|helperRootAbsent='")
$carrier = $carrier.Replace("'HOST06_PRODUCTION_COMPLETE|ordinal='+`$ordinal", "'HOST06_PRODUCTION_COMPLETE|attempt=A1'")

if($carrier.Contains('foreach ($ordinal in @(2,3))') -or $carrier.Contains('attempt-02') -or $carrier.Contains('attempt-03')){throw 'A1_PATCH'}
if(-not $carrier.Contains('HorizonArchive.Host06V8.StrictJson') -or -not $carrier.Contains('.attempt-A1-95a70af8-f9d0-49dc-87dc-89675212ed35.stage')){throw 'PARSER_PATCH'}

$utf8 = New-Object Text.UTF8Encoding($false, $true)
[IO.File]::WriteAllText($carrierPath, $carrier, $utf8)
[IO.File]::WriteAllText($launcherPath, $launcher, $utf8)
$tokens=$null;$errors=$null
[void][Management.Automation.Language.Parser]::ParseInput($carrier,[ref]$tokens,[ref]$errors)
if($errors.Count){throw ('CARRIER_PARSE: '+(($errors | ForEach-Object { $_.Message }) -join '; '))}
$tokens=$null;$errors=$null
[void][Management.Automation.Language.Parser]::ParseInput($launcher,[ref]$tokens,[ref]$errors)
if($errors.Count){throw ('LAUNCHER_PARSE: '+(($errors | ForEach-Object { $_.Message }) -join '; '))}
Get-Item $launcherPath,$carrierPath | Select-Object Name,Length
Get-FileHash -Algorithm SHA256 $launcherPath,$carrierPath | Select-Object Path,Hash
