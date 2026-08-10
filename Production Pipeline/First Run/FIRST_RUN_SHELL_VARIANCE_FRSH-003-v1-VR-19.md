# First Run Shell Variance Reissue - Minimal Tracked-Allowlist Correction

Variance ID: `FRSH-003-v1-VR-19`

Disposition: **`FIRST RUN SHELL READY / ONE MINIMAL-TRACKED-ALLOWLIST
STATIC-FOCUSED VERIFICATION / FRSH-003-v1-VR-19`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Prior bounded shell / immediate return:
`FRSH-003-v1-VR-18` / `FRCE-003-v1-VR-18`

Mission source inspected:
`e003fb6902984314d2ab56e4ff1434981bf34df8`

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

## Decision and separate variance classifications

Mission independently classifies the VR-18 stop as **`REQUIRED CORRECTION /
EXECUTION CONTROL / OPEN`**. The literal path
`horizon-archive-game/package-lock.json` is not known to Git at synchronized
source. Its inclusion in VR-18's tracked allowlist was a Mission-authored
execution-control defect. It establishes no product, candidate, manifest,
test, E2E, validation, evidence, dependency, threshold, predicate, learning,
save, route, world, media, or ending defect.

The existing **`UNAUTHORIZED DIVERGENCE / PROTECTED PATH ENUMERATION / OPEN`**
classification from VR-17 remains separate and open. VR-18 reported no new
protected, untracked, media, repository-wide, predecessor-root, or user-state
enumeration, and Mission performed none during this adjudication. The earlier
divergence is not waived, merged into the tracked-path defect, or used as
verification evidence.

VR-18 began its sole invocation and is consumed. None of its partial identity
or ancestry passes may be promoted, reused as current proof, or rerun under
VR-18. Mission issues READY only for one fresh minimal static/focused
invocation. This restores no related/full/validator/build/live/E2E authority,
downstream stage, product/control repair, release, or maturity action. A fresh
Mission Captain must adjudicate the return.

## Independently proven tracked paths and minimal allowlist

Mission used one literal `git ls-files --error-unmatch -- <path>` invocation
for each named path. The following six paths each resolved as exactly one
tracked path and form the complete VR-19 allowlist:

```text
Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json
playtest/e2e-playthrough.mjs
horizon-archive-game/test/sixfoldWeir.test.js
horizon-archive-game/src/App.jsx
horizon-archive-game/src/drownedArchive.js
horizon-archive-game/package.json
```

`package.json` entered the allowlist only after its own exact tracked-path
proof. The lockfile path failed its separate exact tracked-path proof and is
excluded. Combat may not search for, substitute, infer, or add a package or
lockfile path. Focused-test and validator paths are verified only as exact
committed FRRC command structure; they are not added to this tracked-path
allowlist and no validator executes.

The exact frozen blobs are:

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

## Exact FRRC and focused contract

The committed manifest must parse with:

```text
schema       horizon.first-run.release-command-manifest.v1
manifest_id  FRRC-002-v1
entries      focused, related, full, validators, production-build,
             fixture-build, production-preview, fixture-preview,
             served-identity, complete-e2e, pba-media, cleanup-identity,
             live-summary-verify
validators   validator-01 through validator-40, exact path-sorted
             python <repository-relative path> --self-test structures
policy       validator_count=40; e2e_invocations=1
```

Every entry key must equal its entry `id`. Validators are inspected only as
JSON structure and never executed. The only executable manifest entry is the
exact `focused` command:

```text
workdir: horizon-archive-game
timeout_ms: 30000
expected_exit: 0
command: node --test test/sixfoldWeir.test.js
  test/workloadSortExercise.test.js
  test/workloadResumeIntegration.test.js
  test/responsibleAIExercise.test.js test/sceneReturn.test.js
  test/sceneTransition.test.js test/terminalFocus.test.js
  test/photorealisticWorldPlates.test.js test/fractureNursery.test.js
  test/meadowRouteMarker.test.js test/signalCouplerProduction.test.js
required totals: 68 tests / 68 pass / 0 fail
```

The only other Node execution is exactly
`node --check playtest/e2e-playthrough.mjs` once.

## Exact sole repository-root PowerShell invocation

A fresh Combat Engineer may start exactly one repository-root PowerShell
invocation with `$ErrorActionPreference='Stop'`; the execution tool must
enforce `timeout_ms=30000`. Use this body without substitution, search,
repair, waiver, continuation after failure, partial rerun, or second
invocation:

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

git diff --quiet
if ($LASTEXITCODE -ne 0) { throw 'tracked worktree drift' }
git diff --cached --quiet
if ($LASTEXITCODE -ne 0) { throw 'staged drift' }
git diff --quiet $probeCandidate..HEAD -- $manifestPath $staticPath $e2ePath
if ($LASTEXITCODE -ne 0) { throw 'candidate current control drift' }
git diff --quiet $productCandidate..HEAD -- $appPath $drownedPath $packagePath
if ($LASTEXITCODE -ne 0) { throw 'product dependency drift' }
git diff --check "$probeCandidate^" $probeCandidate
if ($LASTEXITCODE -ne 0) { throw 'candidate diff integrity' }
git diff --check
if ($LASTEXITCODE -ne 0) { throw 'worktree diff integrity' }

$candidatePaths = @(
  git diff-tree --no-commit-id --name-only -r $probeCandidate |
    ForEach-Object { $_.Replace('\', '/') } |
    Sort-Object -Unique
)
if ($LASTEXITCODE -ne 0) { throw 'candidate path collection' }
$forbiddenPatterns = @(
  '^horizon-archive-game/(?:src|public)/',
  '^horizon-archive-game/(?:package(?:-lock)?\.json|vite\.config\.[^/]+)$',
  '^curriculum/',
  '^Production Pipeline/First Run/(?:QA(?:/|$)|FIRST_RUN_(?:PRODUCT_BASELINE|RELEASE_MAP|SCOREBOARD)\.md$)',
  '\.(?:png|jpe?g|webp|gif|svg|avif|mp3|wav|ogg|mp4|webm)$'
)
$forbiddenCount = @(
  foreach ($candidatePath in $candidatePaths) {
    if (@($forbiddenPatterns | Where-Object { $candidatePath -match $_ }).Count -gt 0) { 1 }
  }
).Count
if ($forbiddenCount -ne 0) { throw 'forbidden candidate path count' }
$authorizedPaths = @($manifestPath, $staticPath, $e2ePath) | Sort-Object
if ($candidatePaths.Count -ne 3) { throw 'authorized candidate path count' }
$pathDelta = @(
  Compare-Object -ReferenceObject $authorizedPaths -DifferenceObject $candidatePaths
)
if ($pathDelta.Count -ne 0) { throw 'authorized candidate path identity' }

$manifest = [IO.File]::ReadAllText(
  (Join-Path (Get-Location) $manifestPath)
) | ConvertFrom-Json
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

git diff --quiet
if ($LASTEXITCODE -ne 0) { throw 'final tracked worktree drift' }
git diff --cached --quiet
if ($LASTEXITCODE -ne 0) { throw 'final staged drift' }
git diff --check
if ($LASTEXITCODE -ne 0) { throw 'final diff integrity' }
Write-Output 'trackedAllowlist.Count=6'
Write-Output 'forbiddenPaths.Count=0'
Write-Output 'candidatePaths.Count=3'
Write-Output 'manifest entries=13; validators=40; e2e_invocations=1'
Write-Output 'focused tests=68; pass=68; fail=0'
```

The only changed-path enumeration is the frozen candidate tree held in
memory. It is required to have zero forbidden matches and the exact three
authorized paths; unexpected names are never printed. The invocation does
not enumerate untracked paths, protected trees, media directories,
repository-wide filenames, filesystem roots, predecessor roots, or user
state.

## Exact Combat authority and return

Fresh Combat must begin from the synchronized commit containing this reissue
and read its full profile, VR-07 and VR-12 through VR-19,
FRCE-003-v1-VR-12 through VR-18, current FRAB-003, current handoff, and the
exact committed FRRC/E2E/static controls. It may run the exact invocation
above once.

Any failure is immediate **`HOLD / NO RERUN`**. Combat may not correct a
command, discover or substitute a path, inspect a failure path, repair a file,
waive a result, continue after failure, or start a second invocation.

On complete PASS, Combat issues **`MINIMAL-TRACKED-ALLOWLIST STATIC-FOCUSED
PASS / RETURN TO FRESH MISSION / FRCE-003-v1-VR-19`**. On failure, it issues
**`HOLD / MINIMAL-TRACKED-ALLOWLIST STATIC-FOCUSED FAILURE / NO RERUN /
RETURN TO FRESH MISSION / FRCE-003-v1-VR-19`**. In either case it may write
only that versioned Combat return and `NEXT_INSTANCE_HANDOFF.md`, commit them,
push, prove `HEAD == origin/main`, and route a fresh Mission Captain.

## Explicitly unauthorized execution and change

This reissue authorizes no related/full test, validator execution, build,
PBA/media/offline/performance scan, preview, served request, port/PID
operation, browser, external root, containment/cleanup operation, diagnostic,
complete or partial E2E, summary, verifier, served identity, root/path search,
protected/untracked/media enumeration, release evidence substitution, or
second verification invocation.

It authorizes no implementation, product, test, manifest, E2E, content, CSS,
module, fixture, dependency, package, lockfile, curriculum, evaluator, save,
story, route, map, scoreboard, maturity, media, or other control change. The
six allowlisted paths are read/execute-only at the exact frozen blobs. After
the attempt, only the Combat return and handoff may change.

## Frozen player, state, accessibility, runtime, and media boundaries

This execution-control pass has no player-visible delta. Exact first-run
address remains `FR-03 / Host 05 / Sixfold Weir`; stage and release remain
HOLD; current and target maturity meanings do not change. No release-map or
scoreboard cell advances.

Entry, active states, completion, permitted exits, hard stop, LOOK, silent
TALK, sole USE, completed read-only behavior, seven final meanings and owners,
Host 04 ordering, `L02-02`, strict `24/24`, evaluator, remediation,
evidence/privacy, save/reload/return, later rail, both equal MH-40 outcomes,
null deltas, and `successor=null` remain frozen. No branch, packet, lesson,
hidden-lore answer, reward, access, identity, authority, world response,
successor, RP-013, or post-ending content may be added or changed.

Keyboard, pointer, touch, semantic activation, focus, announcement, desktop,
narrow, effective `200%`, retained small viewports, forced color, and reduced
motion meanings remain exact but are not executed. Offline, request,
dependency, source-map, PBA, performance, preview, served-identity,
external-root, cleanup, summary, verifier, diagnostic non-evidence/non-
verifier, and one-E2E contracts remain frozen but are not executed or
reauthorized.

Immutable media remains exact `17 / 37,410,731`. Existing media is not
enumerated, read, scanned, imported, generated, edited, replaced, varied,
moved, revealed, or used as new evidence. Protected repository QA, PDF,
training, browser/profile/save, hidden lore, media, user state, every
predecessor root, and every unrelated external root remain forbidden to
inspect, enumerate, reuse, modify, move, or delete. No Quartermaster, Image
Specialist, Intelligence, reveal, schedule, automation, release, maturity
advance, or `FIRST RUN COMPLETE` claim is authorized.

## Definition of done, rollback, and variance routing

This pass is done only when one invocation proves start/current identity;
all six literal tracked paths and every frozen/current blob; tracked/staged
drift absence; candidate/current and product/package equality; diff integrity;
independent zero-forbidden and exact-three-authorized candidate predicates;
actual JSON field names and exact thirteen-entry order; forty exact validator
structures without execution; one-E2E policy; `node --check`; the exact
focused command; exact `68/68`; final integrity; and no protected/untracked/
media filename enumeration.

Because no product/control mutation is authorized, there is no product or
save rollback. Bounded administrative rollback removes only this Mission
variance/handoff commit through a normal revert; it does not reset history,
alter a frozen candidate, touch protected/untracked/user state, or migrate a
save.

Any command/path/blob/predicate/threshold/identity/structure mismatch is
`REQUIRED CORRECTION / EXECUTION CONTROL` unless exact evidence proves an
earlier owner. Any new protected/media/user filename or content discovery is
`UNAUTHORIZED DIVERGENCE` and immediate HOLD. Requests for related/full/
validator/build/live/E2E authority are new Mission decisions. Product/canon/
learning/media/ending variance routes to its earliest workflow owner.

## Mission proof, signature, and exact handoff

Mission began at exact synchronized source
`HEAD == origin/main == e003fb6902984314d2ab56e4ff1434981bf34df8`
with no tracked or staged drift. Mission proved each of the six allowlisted
paths separately with literal `git ls-files --error-unmatch`, proved the
lockfile path is not tracked, and admitted only the independently verified
`package.json`. It proved all frozen/current blobs above and parsed the exact
committed FRRC schema, ID, thirteen-entry order, validator count, one-E2E
policy, and focused command.

Mission ran no `node --check`, focused/related/full test, validator, build,
PBA/media scan, preview, served request, port/PID operation, browser,
external-root operation, diagnostic, E2E, summary, verifier, cleanup,
product, root, or media action. Mission performed no protected, untracked,
media, predecessor-root, repository-wide, or user-state enumeration and
changed no implementation or maturity control.

Mission Captain signs **`FIRST RUN SHELL READY / ONE MINIMAL-TRACKED-ALLOWLIST
STATIC-FOCUSED VERIFICATION / FRSH-003-v1-VR-19`** while preserving stage and
release HOLD and both open variance classifications separately.

Exact next owner is a **fresh Combat Engineer**. Execute only the one exact
minimal tracked-path, blob/integrity, FRRC JSON/order/structure, `node
--check`, and focused `68/68` invocation; issue one exact return and
synchronized handoff; push; prove synchronization; and return to a fresh
Mission Captain. Do not run or authorize any later gate.

The dedicated Mission commit and final synchronization proof are reported
from Git after commit because this artifact cannot contain the hash that
first contains itself.
