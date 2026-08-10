# First Run Shell Variance Reissue - Scalar Revision-Range Correction

Variance ID: `FRSH-003-v1-VR-20`

Disposition: **`FIRST RUN SHELL READY / ONE SCALAR-RANGE SIX-PATH
STATIC-FOCUSED VERIFICATION / FRSH-003-v1-VR-20`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Prior bounded shell / immediate return:
`FRSH-003-v1-VR-19` / `FRCE-003-v1-VR-19`

Mission source inspected:
`28fd26d1afb93e8de409fa6d3309e06ef5405001`

Exact diagnostic field-source candidate:
`2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc`

Exact diagnostic-control predecessor:
`ce7c9abbaf1d0ffad8c1031f0398750676d4970e`

Exact immutable content candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Accepted evidence predecessor:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Released rollback baseline: `3e3da60dc2ffa097a3499a5e2f5fa6ce2273f602`

Date: **2026-08-10**

## Decision and exact correction

Mission independently classifies the VR-19 stop as **`REQUIRED CORRECTION /
EXECUTION CONTROL / OPEN`**. PowerShell did not pass
`$probeCandidate..HEAD` to Git as one valid revision-range scalar. Git printed
usage, returned a command-error status, and VR-19 then collapsed every
nonzero result into `candidate current control drift`. That was a Mission-
authored command-shape and exit-classification defect. It establishes no
candidate, product, manifest, test, E2E, validation, evidence, threshold,
learning, save, route, world, media, or ending defect.

Mission separately preserves **`UNAUTHORIZED DIVERGENCE / PROTECTED PATH
ENUMERATION / OPEN`** from VR-17. VR-19 introduced no new enumeration and
does not waive or merge that classification.

VR-19 is consumed. Its partial passing checks may not be promoted, reused as
current proof, or rerun under VR-19. VR-20 authorizes exactly one new static/
focused invocation. It constructs each revision range as a scalar before
calling Git, passes that scalar as one argument, captures `$LASTEXITCODE`
immediately, and treats `0` as no drift, `1` as drift or integrity findings,
and every value greater than `1` as Git command failure. A usage or command
failure may never be reported as drift.

Mission independently ran only the corrected read-only six-path comparison at
the synchronized source. Exact result:

```text
candidateRange=2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc..HEAD
candidateCurrentAllowlistExit=0; meaning=no drift
```

No changed-path, repository-wide, untracked, protected, media, root,
predecessor-root, or user-state enumeration is authorized by this reissue.

## Exact six tracked-path allowlist

The complete path allowlist is exactly:

```text
Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json
playtest/e2e-playthrough.mjs
horizon-archive-game/test/sixfoldWeir.test.js
horizon-archive-game/src/App.jsx
horizon-archive-game/src/drownedArchive.js
horizon-archive-game/package.json
```

The frozen blobs remain:

```text
diagnostic field-source candidate 2cccbfe:
  FRRC manifest    fc91a863be99b11c44405071324e3502b959e621
  static test      5910af4e4f6754acbc5193ff021f374fe90a96f2
  E2E              0b72f1463c729a8e22337af0115c3316652c2565

immutable content candidate a91763e and current source:
  App.jsx          802ceffb1a07c3b166dc2f7f06ab38138dc37596
  drownedArchive   1bc2f9d93c59a396ddee7ed83cde1600f76b62e7
  package.json     2c23c0a59f62af0463fa54bb1c8465aa9f6bb2da

diagnostic predecessor ce7c9ab:
  FRRC manifest    d9d3491067f072ec2f68dd4159eb4040d47d45ff
  static test      38ea5255a1713740094ab4ee3b36e7b78389bbe0
  E2E              5e63e3fd36ce0d59d276a6bc3324cc15ce03bdb2

validation control 4cd7fbf:
  static test      d71452e6bb5e8ab5d846b8a8ec4f8b12832b03ae

accepted evidence predecessor ca89a679:
  FRRC manifest    786663223f75cb3a88503c50373e79f3c5c5cf26
  E2E              a322016aac859f385d81dd368845de7d5bde4e5b
```

## Preserved FRRC and focused contract

The committed manifest must parse with exact schema
`horizon.first-run.release-command-manifest.v1`, manifest ID `FRRC-002-v1`,
and this exact thirteen-entry property order:

```text
focused
related
full
validators
production-build
fixture-build
production-preview
fixture-preview
served-identity
complete-e2e
pba-media
cleanup-identity
live-summary-verify
```

Every entry key must equal its entry `id`. Validators must be exactly
`validator-01` through `validator-40`, in exact repository-path-sorted order,
with exact `python <repository-relative path> --self-test` command arrays.
Validators are inspected only as JSON and never executed.
`policy.validator_count` remains `40`; `policy.e2e_invocations` remains `1`.

The sole executable manifest entry remains exact `focused`, with workdir
`horizon-archive-game`, timeout `30000`, expected exit `0`, the eleven exact
test paths frozen below, and required totals `68 tests / 68 pass / 0 fail`.
The only other Node execution is exactly
`node --check playtest/e2e-playthrough.mjs` once.

## Exact sole repository-root PowerShell invocation

A fresh Combat Engineer may start exactly one repository-root PowerShell
invocation with `$ErrorActionPreference='Stop'`; the execution tool must set
`timeout_ms=30000`. Use this body without substitution, discovery, repair,
waiver, continuation after failure, partial rerun, or second invocation:

```powershell
$ErrorActionPreference = 'Stop'
$source = (git rev-parse HEAD).Trim()
$origin = (git rev-parse origin/main).Trim()
if ($LASTEXITCODE -ne 0 -or $source -ne $origin) { throw 'start synchronization' }

$productCandidate = 'a91763e28d488f31f8cf7d40ece0b2682246ba9b'
$probeCandidate = '2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc'
$diagnosticPredecessor = 'ce7c9abbaf1d0ffad8c1031f0398750676d4970e'
$validationControl = '4cd7fbf31291671dd28c0743b44a7c49aaad82bb'
$evidencePredecessor = 'ca89a679195c11d441a76e6c02983a6436f2ccb2'
$expectedParent = 'e44e2c7712245c9f34bc1d544fd76c577604d86f'

foreach ($identity in @(
  $productCandidate, $probeCandidate, $diagnosticPredecessor,
  $validationControl, $evidencePredecessor
)) {
  git merge-base --is-ancestor $identity HEAD
  if ($LASTEXITCODE -ne 0) { throw 'frozen ancestry' }
}
foreach ($identity in @(
  $productCandidate, $diagnosticPredecessor,
  $validationControl, $evidencePredecessor
)) {
  git merge-base --is-ancestor $identity $probeCandidate
  if ($LASTEXITCODE -ne 0) { throw 'candidate ancestry' }
}
$actualParent = (git rev-parse "$probeCandidate^").Trim()
if ($LASTEXITCODE -ne 0 -or $actualParent -ne $expectedParent) {
  throw 'candidate parent boundary'
}

$manifestPath = 'Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json'
$e2ePath = 'playtest/e2e-playthrough.mjs'
$staticPath = 'horizon-archive-game/test/sixfoldWeir.test.js'
$appPath = 'horizon-archive-game/src/App.jsx'
$drownedPath = 'horizon-archive-game/src/drownedArchive.js'
$packagePath = 'horizon-archive-game/package.json'

function Assert-TrackedLiteral([string]$literalPath) {
  $tracked = @(git ls-files --error-unmatch -- $literalPath)
  if ($LASTEXITCODE -ne 0 -or $tracked.Count -ne 1 -or
      $tracked[0].Replace('\', '/') -ne $literalPath) {
    throw 'exact tracked allowlist path'
  }
}
Assert-TrackedLiteral 'Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json'
Assert-TrackedLiteral 'playtest/e2e-playthrough.mjs'
Assert-TrackedLiteral 'horizon-archive-game/test/sixfoldWeir.test.js'
Assert-TrackedLiteral 'horizon-archive-game/src/App.jsx'
Assert-TrackedLiteral 'horizon-archive-game/src/drownedArchive.js'
Assert-TrackedLiteral 'horizon-archive-game/package.json'

$blobChecks = @(
  @($probeCandidate, $manifestPath, 'fc91a863be99b11c44405071324e3502b959e621'),
  @($probeCandidate, $staticPath, '5910af4e4f6754acbc5193ff021f374fe90a96f2'),
  @($probeCandidate, $e2ePath, '0b72f1463c729a8e22337af0115c3316652c2565'),
  @($diagnosticPredecessor, $manifestPath, 'd9d3491067f072ec2f68dd4159eb4040d47d45ff'),
  @($diagnosticPredecessor, $staticPath, '38ea5255a1713740094ab4ee3b36e7b78389bbe0'),
  @($diagnosticPredecessor, $e2ePath, '5e63e3fd36ce0d59d276a6bc3324cc15ce03bdb2'),
  @($productCandidate, $appPath, '802ceffb1a07c3b166dc2f7f06ab38138dc37596'),
  @($productCandidate, $drownedPath, '1bc2f9d93c59a396ddee7ed83cde1600f76b62e7'),
  @($productCandidate, $packagePath, '2c23c0a59f62af0463fa54bb1c8465aa9f6bb2da'),
  @($validationControl, $staticPath, 'd71452e6bb5e8ab5d846b8a8ec4f8b12832b03ae'),
  @($evidencePredecessor, $manifestPath, '786663223f75cb3a88503c50373e79f3c5c5cf26'),
  @($evidencePredecessor, $e2ePath, 'a322016aac859f385d81dd368845de7d5bde4e5b')
)
foreach ($check in $blobChecks) {
  git cat-file -e "$($check[0]):$($check[1])"
  if ($LASTEXITCODE -ne 0) { throw 'exact committed path existence' }
  $blob = (git rev-parse "$($check[0]):$($check[1])").Trim()
  if ($LASTEXITCODE -ne 0 -or $blob -ne $check[2]) { throw 'exact blob identity' }
}

$currentBlobChecks = @(
  @($manifestPath, 'fc91a863be99b11c44405071324e3502b959e621'),
  @($e2ePath, '0b72f1463c729a8e22337af0115c3316652c2565'),
  @($staticPath, '5910af4e4f6754acbc5193ff021f374fe90a96f2'),
  @($appPath, '802ceffb1a07c3b166dc2f7f06ab38138dc37596'),
  @($drownedPath, '1bc2f9d93c59a396ddee7ed83cde1600f76b62e7'),
  @($packagePath, '2c23c0a59f62af0463fa54bb1c8465aa9f6bb2da')
)
foreach ($check in $currentBlobChecks) {
  git cat-file -e "HEAD:$($check[0])"
  if ($LASTEXITCODE -ne 0) { throw 'exact current path existence' }
  $blob = (git rev-parse "HEAD:$($check[0])").Trim()
  if ($LASTEXITCODE -ne 0 -or $blob -ne $check[1]) { throw 'exact current blob' }
}

git diff --quiet --exit-code -- `
  'Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json' `
  'playtest/e2e-playthrough.mjs' `
  'horizon-archive-game/test/sixfoldWeir.test.js' `
  'horizon-archive-game/src/App.jsx' `
  'horizon-archive-game/src/drownedArchive.js' `
  'horizon-archive-game/package.json'
$worktreeDiffExit = $LASTEXITCODE
if ($worktreeDiffExit -eq 1) { throw 'allowlisted tracked worktree drift' }
if ($worktreeDiffExit -gt 1) { throw "allowlisted tracked worktree command failure: exit $worktreeDiffExit" }

git diff --cached --quiet --exit-code -- `
  'Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json' `
  'playtest/e2e-playthrough.mjs' `
  'horizon-archive-game/test/sixfoldWeir.test.js' `
  'horizon-archive-game/src/App.jsx' `
  'horizon-archive-game/src/drownedArchive.js' `
  'horizon-archive-game/package.json'
$stagedDiffExit = $LASTEXITCODE
if ($stagedDiffExit -eq 1) { throw 'allowlisted staged drift' }
if ($stagedDiffExit -gt 1) { throw "allowlisted staged command failure: exit $stagedDiffExit" }

$candidateRange = "$($probeCandidate)..HEAD"
git diff --quiet --exit-code $candidateRange -- `
  'Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json' `
  'playtest/e2e-playthrough.mjs' `
  'horizon-archive-game/test/sixfoldWeir.test.js' `
  'horizon-archive-game/src/App.jsx' `
  'horizon-archive-game/src/drownedArchive.js' `
  'horizon-archive-game/package.json'
$candidateDiffExit = $LASTEXITCODE
if ($candidateDiffExit -eq 1) { throw 'candidate current allowlist drift' }
if ($candidateDiffExit -gt 1) { throw "candidate current allowlist command failure: exit $candidateDiffExit" }

$candidatePatchRange = "$($probeCandidate)^..$probeCandidate"
git diff --check $candidatePatchRange
$candidateCheckExit = $LASTEXITCODE
if ($candidateCheckExit -eq 1) { throw 'candidate diff integrity' }
if ($candidateCheckExit -gt 1) { throw "candidate diff command failure: exit $candidateCheckExit" }

git diff --check -- `
  'Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json' `
  'playtest/e2e-playthrough.mjs' `
  'horizon-archive-game/test/sixfoldWeir.test.js' `
  'horizon-archive-game/src/App.jsx' `
  'horizon-archive-game/src/drownedArchive.js' `
  'horizon-archive-game/package.json'
$worktreeCheckExit = $LASTEXITCODE
if ($worktreeCheckExit -eq 1) { throw 'allowlisted worktree diff integrity' }
if ($worktreeCheckExit -gt 1) { throw "allowlisted worktree diff command failure: exit $worktreeCheckExit" }

$manifest = [IO.File]::ReadAllText((Join-Path (Get-Location) $manifestPath)) |
  ConvertFrom-Json
if ($manifest.schema -ne 'horizon.first-run.release-command-manifest.v1' -or
    $manifest.manifest_id -ne 'FRRC-002-v1') { throw 'manifest identity' }
$expectedEntryOrder = @(
  'focused', 'related', 'full', 'validators', 'production-build',
  'fixture-build', 'production-preview', 'fixture-preview',
  'served-identity', 'complete-e2e', 'pba-media', 'cleanup-identity',
  'live-summary-verify'
)
$entryProperties = @($manifest.entries.PSObject.Properties)
if ($entryProperties.Count -ne 13) { throw 'manifest entry count' }
if (@(Compare-Object $expectedEntryOrder @($entryProperties.Name) -SyncWindow 0).Count -ne 0) {
  throw 'manifest entry order'
}
for ($index = 0; $index -lt 13; $index += 1) {
  if ($entryProperties[$index].Value.id -ne $expectedEntryOrder[$index]) {
    throw 'manifest entry key identity'
  }
}

$expectedValidatorPaths = @(
  'curriculum/lessons/L-01-02/validate_route_marker.py',
  'curriculum/lessons/L-01-03/validate_calibration.py',
  'curriculum/lessons/L-01-03/validate_safe_return_guide.py',
  'curriculum/lessons/L-02-01/validate_saved_evidence_resume.py',
  'curriculum/lessons/L-02-02/validate_responsible_ai.py',
  'curriculum/lessons/L-02-03/validate_model_choices.py',
  'curriculum/lessons/L-03-01/validate_structures.py',
  'curriculum/lessons/L-03-02/validate_control_flow.py',
  'curriculum/lessons/L-03-03/validate_client_bridge.py',
  'curriculum/lessons/L-04-01/validate_text_analysis.py',
  'curriculum/lessons/L-04-02/validate_speech_workloads.py',
  'curriculum/lessons/L-04-03/validate_visual_workloads.py',
  'curriculum/lessons/L-04-04/validate_extraction_workloads.py',
  'curriculum/lessons/L-05-01/validate_portal_orientation.py',
  'curriculum/lessons/L-05-02/validate_prompt_layers.py',
  'curriculum/lessons/L-05-03/validate_client_boundaries.py',
  'curriculum/lessons/L-05-03/validate_sdk_route_chooser.py',
  'curriculum/lessons/L-05-03/validate_sdk_route_trace.py',
  'curriculum/lessons/L-05-04/validate_single_agent.py',
  'curriculum/lessons/L-05-05/validate_text_speech_patterns.py',
  'curriculum/lessons/L-05-06/validate_visual_patterns.py',
  'curriculum/lessons/L-05-07/validate_extraction.py',
  'curriculum/lessons/L-06-01/validate_objective_ledger.py',
  'curriculum/lessons/L-06-02/validate_remediation_planner.py',
  'curriculum/lessons/L-06-03/validate_capstone_readiness.py',
  'curriculum/readiness/CUM-01/validate_cumulative.py',
  'curriculum/readiness/RP-002/validate_mapping.py',
  'curriculum/readiness/RP-003/validate_mapping.py',
  'curriculum/readiness/RP-004/validate_mapping.py',
  'curriculum/readiness/RP-005/validate_mapping.py',
  'curriculum/readiness/RP-006/validate_mapping.py',
  'curriculum/readiness/RP-007/validate_mapping.py',
  'curriculum/readiness/RP-008/validate_mapping.py',
  'curriculum/readiness/RP-009/validate_mapping.py',
  'curriculum/readiness/RP-010/validate_mapping.py',
  'curriculum/readiness/RP-011/validate_mapping.py',
  'curriculum/readiness/RP-012/validate_mapping.py',
  'curriculum/readiness/SIM-01/validate_simulation.py',
  'curriculum/readiness/SIM-02/validate_simulation.py',
  'curriculum/readiness/SIM-03/validate_simulation.py'
)
$validators = @($manifest.entries.validators.invocations)
$expectedValidatorIds = @(1..40 | ForEach-Object { 'validator-{0:D2}' -f $_ })
if ($validators.Count -ne 40 -or $manifest.policy.validator_count -ne 40) {
  throw 'validator count'
}
if (@(Compare-Object $expectedValidatorIds @($validators.id) -SyncWindow 0).Count -ne 0) {
  throw 'validator identity order'
}
for ($index = 0; $index -lt 40; $index += 1) {
  $command = @($validators[$index].command)
  $expectedCommand = @('python', $expectedValidatorPaths[$index], '--self-test')
  if ($validators[$index].workdir -ne '.' -or
      @(Compare-Object $expectedCommand $command -SyncWindow 0).Count -ne 0) {
    throw 'validator command allowlist'
  }
}
if (@(Compare-Object @($expectedValidatorPaths | Sort-Object) $expectedValidatorPaths -SyncWindow 0).Count -ne 0) {
  throw 'validator repository path order'
}
if ($manifest.policy.e2e_invocations -ne 1) { throw 'one E2E policy' }

$expectedFocusedCommand = @(
  'node', '--test',
  'test/sixfoldWeir.test.js',
  'test/workloadSortExercise.test.js',
  'test/workloadResumeIntegration.test.js',
  'test/responsibleAIExercise.test.js',
  'test/sceneReturn.test.js',
  'test/sceneTransition.test.js',
  'test/terminalFocus.test.js',
  'test/photorealisticWorldPlates.test.js',
  'test/fractureNursery.test.js',
  'test/meadowRouteMarker.test.js',
  'test/signalCouplerProduction.test.js'
)
$focused = $manifest.entries.focused
if ($focused.workdir -ne 'horizon-archive-game' -or
    $focused.timeout_ms -ne 30000 -or $focused.expected_exit -ne 0 -or
    @(Compare-Object $expectedFocusedCommand @($focused.command) -SyncWindow 0).Count -ne 0) {
  throw 'focused command allowlist'
}

& node --check $e2ePath
if ($LASTEXITCODE -ne 0) { throw 'node check' }
Push-Location $focused.workdir
try {
  $focusedOutput = & $focused.command[0] @($focused.command[1..($focused.command.Count - 1)]) 2>&1
  $focusedExit = $LASTEXITCODE
} finally {
  Pop-Location
}
$focusedText = ($focusedOutput | Out-String)
$focusedOutput | ForEach-Object { Write-Output $_ }
if ($focusedExit -ne 0 -or
    $focusedText -notmatch '(?m)^# tests 68\s*$' -or
    $focusedText -notmatch '(?m)^# pass 68\s*$' -or
    $focusedText -notmatch '(?m)^# fail 0\s*$') {
  throw 'focused exact totals'
}

git diff --quiet --exit-code -- `
  'Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json' `
  'playtest/e2e-playthrough.mjs' `
  'horizon-archive-game/test/sixfoldWeir.test.js' `
  'horizon-archive-game/src/App.jsx' `
  'horizon-archive-game/src/drownedArchive.js' `
  'horizon-archive-game/package.json'
$finalWorktreeDiffExit = $LASTEXITCODE
if ($finalWorktreeDiffExit -eq 1) { throw 'final allowlisted tracked worktree drift' }
if ($finalWorktreeDiffExit -gt 1) { throw "final allowlisted tracked command failure: exit $finalWorktreeDiffExit" }

git diff --cached --quiet --exit-code -- `
  'Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json' `
  'playtest/e2e-playthrough.mjs' `
  'horizon-archive-game/test/sixfoldWeir.test.js' `
  'horizon-archive-game/src/App.jsx' `
  'horizon-archive-game/src/drownedArchive.js' `
  'horizon-archive-game/package.json'
$finalStagedDiffExit = $LASTEXITCODE
if ($finalStagedDiffExit -eq 1) { throw 'final allowlisted staged drift' }
if ($finalStagedDiffExit -gt 1) { throw "final allowlisted staged command failure: exit $finalStagedDiffExit" }

git diff --check -- `
  'Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json' `
  'playtest/e2e-playthrough.mjs' `
  'horizon-archive-game/test/sixfoldWeir.test.js' `
  'horizon-archive-game/src/App.jsx' `
  'horizon-archive-game/src/drownedArchive.js' `
  'horizon-archive-game/package.json'
$finalCheckExit = $LASTEXITCODE
if ($finalCheckExit -eq 1) { throw 'final allowlisted diff integrity' }
if ($finalCheckExit -gt 1) { throw "final allowlisted diff command failure: exit $finalCheckExit" }

Write-Output 'trackedAllowlist.Count=6'
Write-Output 'candidateRange is one scalar revision argument'
Write-Output 'candidate current allowlist exit=0; no drift'
Write-Output 'manifest entries=13; validators=40; e2e_invocations=1'
Write-Output 'focused tests=68; pass=68; fail=0'
```

The six exact literal pathspecs are the only file-path scope. The command does
not call `git diff-tree`, broad `git ls-files`, `git status`, `rg`,
`Get-ChildItem`, `dir`, `find`, or any filesystem/repository traversal. It
does not enumerate candidate paths, forbidden paths, untracked paths,
protected trees, media directories, roots, predecessor roots, or user state.

## Exact Combat authority and return

Fresh Combat must begin from the synchronized commit containing this reissue
and read its full profile, VR-07 and VR-12 through VR-20,
FRCE-003-v1-VR-12 through VR-19, current FRAB-003, current handoff, and the
exact committed FRRC/E2E/static controls. It may run the exact invocation
above once.

Any failure is immediate **`HOLD / NO RERUN`**. Combat may not correct a
command, discover or substitute a path, inspect a failure path, repair a file,
waive a result, continue after failure, or start a second invocation.

On complete PASS, Combat issues **`SCALAR-RANGE SIX-PATH STATIC-FOCUSED PASS
/ RETURN TO FRESH MISSION / FRCE-003-v1-VR-20`**. On failure, it issues
**`HOLD / SCALAR-RANGE SIX-PATH STATIC-FOCUSED FAILURE / NO RERUN / RETURN TO
FRESH MISSION / FRCE-003-v1-VR-20`**. In either case it may write only that
versioned Combat return and `NEXT_INSTANCE_HANDOFF.md`, commit them, push,
prove `HEAD == origin/main`, and route a fresh Mission Captain.

## Explicitly unauthorized execution and change

This reissue authorizes no related/full test, validator execution, build,
PBA/media/offline/performance scan, preview, served request, port/PID
operation, browser, external root, containment/cleanup operation, diagnostic,
complete or partial E2E, summary, verifier, served identity, protected or
repository-wide filename enumeration, release evidence substitution, or
second verification invocation.

It authorizes no implementation, product, test, manifest, E2E, content, CSS,
module, fixture, dependency, package, curriculum, evaluator, save, story,
route, map, scoreboard, maturity, media, or other control change. The six
allowlisted paths are read/execute-only at the exact frozen blobs. After the
attempt, only the Combat return and handoff may change.

## Frozen boundaries, definition of done, and rollback

This pass has no player-visible delta. Exact first-run address remains
`FR-03 / Host 05 / Sixfold Weir`; stage and release remain HOLD; no release-
map or scoreboard cell advances.

All entry, state, completion, exit, hard-stop, LOOK, silent TALK, sole USE,
completed read-only, seven final meanings/owners, Host 04 ordering, `L02-02`,
strict `24/24`, evaluator, remediation, evidence/privacy, save/reload/return,
later rail, equal MH-40 outcomes, null deltas, and `successor=null` meanings
remain frozen. No branch, packet, lesson, hidden-lore answer, reward, access,
identity, authority, world response, successor, RP-013, or post-ending content
may change.

Keyboard, pointer, touch, semantic activation, focus, announcement, desktop,
narrow, effective `200%`, retained small viewports, forced color, reduced
motion, offline, request, dependency, source-map, PBA, performance, preview,
served-identity, external-root, cleanup, summary, verifier, diagnostic non-
evidence/non-verifier, and one-E2E contracts remain frozen but are not
executed or reauthorized.

Immutable media remains exact `17 / 37,410,731`. No media is enumerated, read,
scanned, imported, generated, edited, replaced, varied, moved, revealed, or
used as new evidence. Protected repository QA, PDF, training, browser/profile/
save, hidden lore, media, user state, every predecessor root, and unrelated
external roots remain forbidden. No Quartermaster, Image Specialist,
Intelligence, reveal, schedule, automation, release, maturity advance, or
`FIRST RUN COMPLETE` action is authorized.

Done requires one invocation to prove all five frozen identities and six
tracked paths/blobs; exact scalar-range no-drift with immediate three-way exit
classification; candidate/allowlisted diff integrity; exact FRRC schema, ID,
thirteen-entry order/key identity, forty validator structures without
execution, and one-E2E policy; `node --check`; exact focused `68/68`; final
six-path integrity; no enumeration; and a synchronized return.

There is no product/save rollback. Administrative rollback may only normally
revert this Mission variance/handoff commit. It may not reset history, alter a
frozen candidate, touch protected/untracked/user state, or migrate a save.

Any `git diff --quiet --exit-code` result `1` is the named drift; any result
greater than `1` is command failure and **must not** be called drift. Any
identity/blob/FRRC/node/focused/integrity mismatch is `REQUIRED CORRECTION /
EXECUTION CONTROL` unless exact evidence proves an earlier owner. Any new
protected/media/user enumeration is `UNAUTHORIZED DIVERGENCE` and immediate
HOLD.

## Mission proof, signature, and exact handoff

Mission began at exact synchronized source
`HEAD == origin/main == 28fd26d1afb93e8de409fa6d3309e06ef5405001`
with no tracked or staged drift reported. Mission constructed
`$candidateRange` separately, passed it as one Git argument with the six
literal pathspecs, captured `$LASTEXITCODE` immediately, and observed exact
exit `0`, meaning no drift. Mission ran no Node command, test, validator,
build, preview, browser, E2E, diagnostic, summary, verifier, root, cleanup,
media, or product action; performed no enumeration; and changed no
implementation or maturity control.

Mission Captain signs **`FIRST RUN SHELL READY / ONE SCALAR-RANGE SIX-PATH
STATIC-FOCUSED VERIFICATION / FRSH-003-v1-VR-20`** while preserving stage and
release HOLD and both open classifications separately.

Exact next owner is a **fresh Combat Engineer**. Execute only the one exact
six-path identity/integrity, scalar-range, FRRC JSON/order/structure, `node
--check`, and focused `68/68` invocation; issue one exact return and
synchronized handoff; push; prove synchronization; and return to a fresh
Mission Captain. Do not run or authorize any later gate.

The dedicated Mission commit and final synchronization proof are reported
from Git after commit because this artifact cannot contain the hash that first
contains itself.
