[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)][string]$RunPath,
    [Parameter(Mandatory = $true)][string]$ManifestPath
)

$ErrorActionPreference = "Stop"

function Fail-Validation([string]$Message) {
    Write-Error "RUN INVALID: $Message"
    exit 1
}

try { $run = Get-Content -LiteralPath $RunPath -Raw | ConvertFrom-Json } catch { Fail-Validation "Run report is not valid JSON." }
try { $manifest = Get-Content -LiteralPath $ManifestPath -Raw | ConvertFrom-Json } catch { Fail-Validation "Manifest is not valid JSON." }

if ($null -eq $manifest.questions -or $manifest.questions.Count -lt 1) { Fail-Validation "Manifest must contain questions." }
$manifestIds = @($manifest.questions | ForEach-Object { [string]$_.id })
if ($manifestIds -contains "") { Fail-Validation "Every manifest question requires an id." }
if (($manifestIds | Sort-Object -Unique).Count -ne $manifestIds.Count) { Fail-Validation "Manifest question IDs must be unique." }

$resultIds = @($run.question_results | ForEach-Object { [string]$_.question_id })
if (($resultIds | Sort-Object -Unique).Count -ne $resultIds.Count) { Fail-Validation "Run question IDs must be unique." }
$missing = @($manifestIds | Where-Object { $_ -notin $resultIds })
$extra = @($resultIds | Where-Object { $_ -notin $manifestIds })
if ($missing.Count -or $extra.Count) { Fail-Validation "Question coverage mismatch. Missing=[$($missing -join ',')] Extra=[$($extra -join ',')]" }

if ([int]$run.questions_required -ne $manifestIds.Count) { Fail-Validation "questions_required does not equal manifest count." }
if ([int]$run.questions_answered -ne $resultIds.Count) { Fail-Validation "questions_answered does not equal result count." }

$manifestIdentity = if (-not [string]::IsNullOrWhiteSpace([string]$manifest.manifest_id)) {
    [string]$manifest.manifest_id
} elseif (-not [string]::IsNullOrWhiteSpace([string]$manifest.id)) {
    [string]$manifest.id
} elseif (-not [string]::IsNullOrWhiteSpace([string]$manifest.version)) {
    [string]$manifest.version
} else { "" }
if ($manifestIdentity -and [string]$run.question_manifest_id -ne $manifestIdentity) {
    Fail-Validation "question_manifest_id does not match manifest identity '$manifestIdentity'."
}

$sequences = @($run.transcript | ForEach-Object { [int]$_.sequence })
if (($sequences | Sort-Object -Unique).Count -ne $sequences.Count) { Fail-Validation "Transcript sequence values must be unique." }
$sortedSequences = @($sequences | Sort-Object)
for ($index = 0; $index -lt $sortedSequences.Count; $index++) {
    if ($sortedSequences[$index] -ne ($index + 1)) { Fail-Validation "Transcript sequence must be contiguous starting at 1." }
}
$transcriptQuestionIds = @($run.transcript | ForEach-Object { [string]$_.question_id } | Where-Object { $_ })
$unloggedQuestionIds = @($manifestIds | Where-Object { $_ -notin $transcriptQuestionIds })
if ($unloggedQuestionIds.Count) { Fail-Validation "Every manifest question must appear in the transcript. Missing=[$($unloggedQuestionIds -join ',')]" }

$titleEvents = @($run.transcript | Where-Object { $_.event_type -eq "title" })
$creditsEvents = @($run.transcript | Where-Object { $_.event_type -eq "credits" })
$questionEvents = @($run.transcript | Where-Object { $_.event_type -eq "question" })
if ($titleEvents.Count -lt 1) { Fail-Validation "Transcript requires a title event." }
if ($creditsEvents.Count -lt 1) { Fail-Validation "Transcript requires a credits event." }
if ($questionEvents.Count -lt 1) { Fail-Validation "Transcript requires question events." }
$firstTitle = ($titleEvents | Measure-Object -Property sequence -Minimum).Minimum
$firstQuestion = ($questionEvents | Measure-Object -Property sequence -Minimum).Minimum
$lastQuestion = ($questionEvents | Measure-Object -Property sequence -Maximum).Maximum
$firstCredits = ($creditsEvents | Measure-Object -Property sequence -Minimum).Minimum
if ($firstTitle -ge $firstQuestion) { Fail-Validation "Title event must occur before every question event." }
if ($firstCredits -le $lastQuestion) { Fail-Validation "Credits event must occur after every question event." }

if ($run.result -eq "passed") {
    $requiredTrue = @("clean_save", "title_reached", "credits_reached", "wrong_answer_recovery_tested", "persistence_tested", "persistence_passed", "premature_ending_gate_tested", "premature_ending_gate_passed")
    foreach ($name in $requiredTrue) { if ($run.$name -ne $true) { Fail-Validation "Passed run requires '$name' to be true." } }
    if ($run.open_blocking_bug_ids.Count -ne 0) { Fail-Validation "Passed run cannot have blocking bugs." }
    if ([string]::IsNullOrWhiteSpace([string]$run.finished_at)) { Fail-Validation "Passed run requires finished_at." }
    if ([string]::IsNullOrWhiteSpace([string]$run.credits_marker_observed)) { Fail-Validation "Passed run requires credits marker evidence." }
    if ($null -eq $run.wrong_answer_test -or $run.wrong_answer_test.recovery_passed -ne $true) { Fail-Validation "Passed run requires a successful wrong-answer recovery record." }
    $wrongAnswerQuestionId = [string]$run.wrong_answer_test.question_id
    if ($wrongAnswerQuestionId -notin $manifestIds) { Fail-Validation "Wrong-answer test question must exist in the manifest." }
    $wrongAnswerResult = @($run.question_results | Where-Object { $_.question_id -eq $wrongAnswerQuestionId })[0]
    if ($null -eq $wrongAnswerResult -or [int]$wrongAnswerResult.attempts -lt 2) { Fail-Validation "Wrong-answer test question must record at least two attempts." }
    if ($run.transcript.Count -lt 3) { Fail-Validation "Passed run requires a title-to-credits transcript." }
    if (@($run.question_results | Where-Object { $_.correct -ne $true }).Count) { Fail-Validation "Every required question must be correct." }
}

$actualHash = (Get-FileHash -LiteralPath $ManifestPath -Algorithm SHA256).Hash.ToLowerInvariant()
if ([string]$run.question_manifest_sha256 -ne $actualHash) { Fail-Validation "Manifest SHA-256 does not match the run report." }

Write-Host "RUN VALID: $($run.run_id) ($($run.result))"
exit 0
