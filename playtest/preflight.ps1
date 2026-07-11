[CmdletBinding()]
param(
    [string]$ConfigPath = (Join-Path $PSScriptRoot "playtest.config.json")
)

$ErrorActionPreference = "Stop"

function Fail-Preflight([string]$Message) {
    Write-Error "PLAYTEST BLOCKED: $Message"
    exit 1
}

if (-not (Test-Path -LiteralPath $ConfigPath -PathType Leaf)) {
    Fail-Preflight "Missing config '$ConfigPath'. Copy playtest.config.example.json to playtest.config.json after a real game exists."
}

try {
    $config = Get-Content -LiteralPath $ConfigPath -Raw | ConvertFrom-Json
} catch {
    Fail-Preflight "Config is not valid JSON: $($_.Exception.Message)"
}

$requiredValues = @("entrypoint", "launch_command", "build_id", "build_provenance", "test_environment", "clean_save_command", "title_marker", "credits_marker", "question_manifest")
foreach ($name in $requiredValues) {
    if ([string]::IsNullOrWhiteSpace([string]$config.$name)) {
        Fail-Preflight "Config value '$name' is required."
    }
}

$configDirectory = Split-Path -Parent (Resolve-Path -LiteralPath $ConfigPath)
$entrypointPath = [System.IO.Path]::GetFullPath((Join-Path $configDirectory $config.entrypoint))
$manifestPath = [System.IO.Path]::GetFullPath((Join-Path $configDirectory $config.question_manifest))

if (-not (Test-Path -LiteralPath $entrypointPath -PathType Leaf)) {
    Fail-Preflight "Configured game entry point does not exist: $entrypointPath"
}
if (-not (Test-Path -LiteralPath $manifestPath -PathType Leaf)) {
    Fail-Preflight "Configured question manifest does not exist: $manifestPath"
}

try {
    $manifest = Get-Content -LiteralPath $manifestPath -Raw | ConvertFrom-Json
} catch {
    Fail-Preflight "Question manifest is not valid JSON: $($_.Exception.Message)"
}
if ($null -eq $manifest.questions -or $manifest.questions.Count -lt 1) {
    Fail-Preflight "Question manifest must contain a non-empty 'questions' array."
}

Write-Host "PLAYTEST READY: $($config.game_name)"
Write-Host "Entrypoint: $entrypointPath"
Write-Host "Required questions: $($manifest.questions.Count)"
exit 0
