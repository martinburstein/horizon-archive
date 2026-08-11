[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [ValidateSet('create', 'verify')]
    [string]$Mode
)

$ErrorActionPreference = 'Stop'
$releasePath = Join-Path $PSScriptRoot 'FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-003-v5.json'
$release = Get-Content -Raw -LiteralPath $releasePath | ConvertFrom-Json
$primitiveText = $release.policy.accepted_media_manifest_primitive -join [Environment]::NewLine
$primitive = [scriptblock]::Create($primitiveText)
& $primitive -Mode $Mode
