[CmdletBinding()]
param(
    [switch]$FullE2E
)

$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent $PSScriptRoot
$GameRoot = Join-Path $ProjectRoot "horizon-archive-game"
$MappingValidator = Join-Path $ProjectRoot "curriculum\readiness\RP-002\validate_mapping.py"
$E2EScript = Join-Path $ProjectRoot "playtest\e2e-playthrough.mjs"

function Resolve-NativeCommand([string[]]$Names) {
    foreach ($name in $Names) {
        $command = Get-Command $name -ErrorAction SilentlyContinue
        if ($null -ne $command) { return $command.Source }
    }
    throw "Required command not found: $($Names -join ' or ')"
}

function Invoke-NativeStep {
    param(
        [Parameter(Mandatory = $true)][string]$Name,
        [Parameter(Mandatory = $true)][string]$Command,
        [string[]]$Arguments = @(),
        [Parameter(Mandatory = $true)][string]$WorkingDirectory
    )

    Write-Host "`n== $Name ==" -ForegroundColor Cyan
    Push-Location $WorkingDirectory
    try {
        & $Command @Arguments
        if ($LASTEXITCODE -ne 0) {
            throw "$Name failed with exit code $LASTEXITCODE."
        }
    }
    finally {
        Pop-Location
    }
}

$npm = Resolve-NativeCommand @("npm.cmd", "npm")
$node = Resolve-NativeCommand @("node.exe", "node")
$python = Resolve-NativeCommand @("python.exe", "python")
$git = Resolve-NativeCommand @("git.exe", "git")
$stopwatch = [System.Diagnostics.Stopwatch]::StartNew()

Invoke-NativeStep -Name "Game test suite" -Command $npm -Arguments @("test") -WorkingDirectory $GameRoot
Invoke-NativeStep -Name "Production build" -Command $npm -Arguments @("run", "build") -WorkingDirectory $GameRoot
Invoke-NativeStep -Name "RP-002 curriculum contract" -Command $python -Arguments @($MappingValidator, "--self-test") -WorkingDirectory $ProjectRoot
Invoke-NativeStep -Name "E2E syntax" -Command $node -Arguments @("--check", $E2EScript) -WorkingDirectory $ProjectRoot
Invoke-NativeStep -Name "Whitespace and patch integrity" -Command $git -Arguments @("diff", "--check") -WorkingDirectory $ProjectRoot

if ($FullE2E) {
    Invoke-NativeStep -Name "Full title-to-credits E2E" -Command $node -Arguments @($E2EScript) -WorkingDirectory $ProjectRoot
}

$modifiedQa = @(& $git -C $ProjectRoot status --short -- "playtest/*.png")
if ($modifiedQa.Count -gt 0) {
    Write-Warning "Tracked QA images changed during validation. Review and restore only incidental regeneration before committing."
    $modifiedQa | ForEach-Object { Write-Host $_ }
}

$stopwatch.Stop()
Write-Host "`nAUTOMATED RELEASE CHECKS PASS in $([math]::Round($stopwatch.Elapsed.TotalSeconds, 1))s" -ForegroundColor Green
if (-not $FullE2E) {
    Write-Host "Full E2E was not requested. Re-run with -FullE2E for a coordinator release gate."
}
Write-Host "Manual live browser review remains required at representative desktop and narrow responsive layouts."

