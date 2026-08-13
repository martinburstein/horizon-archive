param(
  [Parameter(Mandatory = $true)][string]$SelectedSourcePath,
  [Parameter(Mandatory = $true)][string]$SelectedProvenancePath,
  [Parameter(Mandatory = $true)][string]$BuildLogPath,
  [string]$RepositoryRoot = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path,
  [string]$DistPath = (Join-Path (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path 'horizon-archive-game\dist')
)

$ErrorActionPreference = 'Stop'
$manifestPath = Join-Path $PSScriptRoot 'FIRST_RUN_ACCEPTED_MEDIA_MANIFEST_FRAM-014-v1.json'
$manifest = Get-Content -Raw -LiteralPath $manifestPath | ConvertFrom-Json
if ($manifest.schema -ne 'horizon.first-run.accepted-media.v1' -or $manifest.manifest_id -ne 'FRAM-014-v1') { throw 'accepted-media manifest identity mismatch' }

$root = (Resolve-Path -LiteralPath $RepositoryRoot).Path
$dist = (Resolve-Path -LiteralPath $DistPath).Path
$selected = (Resolve-Path -LiteralPath $SelectedSourcePath).Path
$selectedProvenance = (Resolve-Path -LiteralPath $SelectedProvenancePath).Path
$expectedSelected = [IO.Path]::GetFullPath((Join-Path $root 'Visual Direction\Production Masters\2026-08-13-first-run-host14\host14-waterline-ledger-master-v1.png'))
$expectedProvenance = [IO.Path]::GetFullPath((Join-Path $root 'Production Pipeline\First Run\FIRST_RUN_SELECTED_PROVENANCE_FRSP-015-v1.json'))
if ($selected -cne $expectedSelected) { throw 'selected source path mismatch' }
if ($selectedProvenance -cne $expectedProvenance) { throw 'selected provenance path mismatch' }

$baselineBytes = 0L
$baselineHashes = [Collections.Generic.List[string]]::new()
foreach ($entry in $manifest.files) {
  $path = [IO.Path]::GetFullPath((Join-Path $root ([string]$entry.path)))
  if (-not (Test-Path -LiteralPath $path -PathType Leaf)) { throw "accepted source missing: $($entry.path)" }
  $item = Get-Item -LiteralPath $path
  $hash = (Get-FileHash -Algorithm SHA256 -LiteralPath $path).Hash.ToLowerInvariant()
  if ($item.Length -ne [long]$entry.bytes -or $hash -cne [string]$entry.sha256) { throw "accepted source identity drift: $($entry.path)" }
  $baselineBytes += $item.Length
  $baselineHashes.Add($hash)
}
if ($manifest.files.Count -ne 24 -or $baselineBytes -ne 154163567) { throw 'accepted baseline aggregate mismatch' }

$selectedItem = Get-Item -LiteralPath $selected
$selectedHash = (Get-FileHash -Algorithm SHA256 -LiteralPath $selected).Hash.ToLowerInvariant()
if ($selectedItem.Length -lt 1 -or $selectedItem.Length -gt 30000000) { throw 'selected source byte cap failed' }
$provenance = Get-Content -Raw -LiteralPath $selectedProvenance | ConvertFrom-Json
if ($provenance.schema -cne 'horizon.first-run.frm15-source-provenance.v1' -or $provenance.sourceId -cne 'FRM15-A01') { throw 'selected provenance identity mismatch' }
if ([string]$provenance.path -cne 'Visual Direction/Production Masters/2026-08-13-first-run-host14/host14-waterline-ledger-master-v1.png') { throw 'selected provenance runtime path mismatch' }
if ([long]$provenance.bytes -ne $selectedItem.Length -or [string]$provenance.sha256 -cne $selectedHash) { throw 'selected provenance source mismatch' }

$assetsPath = Join-Path $dist 'assets'
$files = Get-ChildItem -LiteralPath $assetsPath -File
$js = @($files | Where-Object Extension -eq '.js')
$css = @($files | Where-Object Extension -eq '.css')
$maps = @($files | Where-Object Extension -eq '.map')
$media = @($files | Where-Object { $_.Extension -in '.png', '.webp' })
$jsBytes = [long](($js | Measure-Object Length -Sum).Sum)
$cssBytes = [long](($css | Measure-Object Length -Sum).Sum)
if ($jsBytes -gt 1785000 -or $cssBytes -gt 122000) { throw "PBA JS/CSS cap failed: $jsBytes/$cssBytes" }
if ($maps.Count -ne 0) { throw "source map output forbidden: $($maps.Count)" }
if ($media.Count -ne 25) { throw "emitted media count mismatch: $($media.Count)" }
if ($files.Count -ne 28) { throw "emitted runtime file count mismatch: $($files.Count)" }

$expectedHashes = @($baselineHashes.ToArray() + $selectedHash | Sort-Object)
$actualHashes = @($media | ForEach-Object { (Get-FileHash -Algorithm SHA256 -LiteralPath $_.FullName).Hash.ToLowerInvariant() } | Sort-Object)
if (($expectedHashes -join "`n") -cne ($actualHashes -join "`n")) { throw 'emitted media hash set mismatch' }
$acceptedBytes = $baselineBytes + $selectedItem.Length
if ($acceptedBytes -gt 184163567) { throw "accepted media aggregate cap failed: $acceptedBytes" }

$buildLog = Get-Content -Raw -LiteralPath $BuildLogPath
$matches = [regex]::Matches($buildLog, '(\d+) modules transformed')
if ($matches.Count -lt 1) { throw 'build module count unavailable' }
$modules = [int]$matches[$matches.Count - 1].Groups[1].Value
if ($modules -gt 236) { throw "production module cap failed: $modules" }

[pscustomobject]@{
  schema = 'horizon.first-run.pba.v1'
  control = 'FRPBA-015-v1'
  source_id = 'FRM15-A01'
  provenance_schema = 'horizon.first-run.frm15-source-provenance.v1'
  modules = $modules
  javascript_bytes = $jsBytes
  css_bytes = $cssBytes
  source_maps = $maps.Count
  emitted_files = $files.Count
  emitted_media = $media.Count
  accepted_media_bytes = $acceptedBytes
  selected_sha256 = $selectedHash
  pass = $true
} | ConvertTo-Json -Compress
