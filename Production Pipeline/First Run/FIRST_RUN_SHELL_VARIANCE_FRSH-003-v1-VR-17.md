# First Run Shell Variance Reissue - Manifest-Order Command Correction

Variance ID: `FRSH-003-v1-VR-17`

Disposition: **`FIRST RUN SHELL READY / ONE MANIFEST-ORDER-CORRECTED
STATIC-FOCUSED VERIFICATION / FRSH-003-v1-VR-17`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Diagnostic / verification / field-source correction shells:
`FRSH-003-v1-VR-12` / `FRSH-003-v1-VR-13` /
`FRSH-003-v1-VR-14`

Expended complete-verification shell: `FRSH-003-v1-VR-15`

Expended corrected-preflight shell: `FRSH-003-v1-VR-16`

Immediate return: `FRCE-003-v1-VR-16`

Mission source inspected:
`758b669b00a4a22fdd710708f5bb08774dd5cd7d`

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

## Decision

Mission independently classifies the VR-16 stop as **`REQUIRED CORRECTION /
EXECUTION CONTROL / OPEN`** and issues `READY` for one manifest-order-
corrected static/focused verification only.

The exact committed `FRRC-002-v1` manifest was valid JSON and its `entries`
property order was complete. Combat's VR-16 assertion invented an earlier
position for `live-summary-verify`, expecting the final three entries as
`live-summary-verify`, `pba-media`, `cleanup-identity`. The committed manifest
instead ends with the exact four-entry tail:

```text
complete-e2e
pba-media
cleanup-identity
live-summary-verify
```

The terminal `ordered manifest entries mismatch` therefore establishes no
candidate, manifest, static-test, E2E, product, validation, evidence,
threshold, predicate, or protected-boundary defect. VR-16 nevertheless began
its sole invocation and is consumed. Its passing partial subchecks may not be
promoted into a complete pass, reused as current proof, or rerun under VR-16.

This reissue authorizes one new Combat invocation containing only the exact
integrity/diff, independent candidate-boundary, JSON structure, `node
--check`, and focused `68/68` gates below. The expected manifest order is
derived from and frozen against the exact committed manifest and its existing
thirteen-entry contract. No entry is alphabetized, dependency-sorted,
execution-reordered, or inferred from prerequisites.

This reissue restores no complete ladder, E2E, live evidence, downstream
stage, product/control repair, release, or maturity authority. A fresh Mission
Captain must adjudicate the result.

## Exact committed thirteen-entry order

The sole accepted ordered sequence is the JSON property order of
`FRRC-002-v1.entries` at exact candidate `2cccbfe` and at the synchronized
Mission source:

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

Combat must parse the committed file with `ConvertFrom-Json`, read
`$manifest.entries.PSObject.Properties.Name`, require count `13`, require the
exact sequence above, and require each property's key to equal that entry's
own `id`. The expected array comes from this Mission-adjudicated committed
manifest contract. Combat may not move `live-summary-verify` ahead of
`pba-media` or `cleanup-identity`, sort the entries, derive order from
prerequisites, or substitute an assumed execution schedule.

The exact order assertion is:

```powershell
$expectedEntryOrder = @(
  'focused',
  'related',
  'full',
  'validators',
  'production-build',
  'fixture-build',
  'production-preview',
  'fixture-preview',
  'served-identity',
  'complete-e2e',
  'pba-media',
  'cleanup-identity',
  'live-summary-verify'
)
$actualEntryProperties = @($manifest.entries.PSObject.Properties)
$actualEntryOrder = @($actualEntryProperties.Name)
if ($actualEntryOrder.Count -ne 13) {
  throw "manifest entry count: $($actualEntryOrder.Count)"
}
$entryOrderDelta = @(
  Compare-Object -ReferenceObject $expectedEntryOrder `
    -DifferenceObject $actualEntryOrder -SyncWindow 0
)
if ($entryOrderDelta.Count -ne 0) {
  throw "ordered manifest entries mismatch: $($actualEntryOrder -join ', ')"
}
for ($index = 0; $index -lt $actualEntryProperties.Count; $index += 1) {
  if ($actualEntryProperties[$index].Value.id -ne $expectedEntryOrder[$index]) {
    throw "manifest entry id mismatch at $index"
  }
}
```

## Independent candidate-boundary predicates

Combat must retain VR-16's corrected candidate-boundary command without
combining its two meanings. The forbidden set must independently contain
zero paths. The separately sorted candidate-path set must independently equal
the exact three authorized paths. Candidate path display order is not a
contract; exact set identity is.

```powershell
$probeCandidate = '2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc'
$expectedParent = 'e44e2c7712245c9f34bc1d544fd76c577604d86f'

$actualParent = (git rev-parse "$probeCandidate^").Trim()
if ($LASTEXITCODE -ne 0 -or $actualParent -ne $expectedParent) {
  throw "candidate parent boundary"
}

$candidatePaths = @(
  git diff-tree --no-commit-id --name-only -r $probeCandidate |
    ForEach-Object { $_.Replace('\', '/') } |
    Sort-Object -Unique
)
if ($LASTEXITCODE -ne 0) { throw "candidate path collection" }

$forbiddenPatterns = @(
  '^horizon-archive-game/(?:src|public)/',
  '^horizon-archive-game/(?:package(?:-lock)?\.json|vite\.config\.[^/]+)$',
  '^curriculum/',
  '^Production Pipeline/First Run/(?:QA(?:/|$)|FIRST_RUN_(?:PRODUCT_BASELINE|RELEASE_MAP|SCOREBOARD)\.md$)',
  '\.(?:png|jpe?g|webp|gif|svg|avif|mp3|wav|ogg|mp4|webm)$'
)
$forbiddenPaths = @(
  foreach ($candidatePath in $candidatePaths) {
    if (@($forbiddenPatterns | Where-Object { $candidatePath -match $_ }).Count -gt 0) {
      $candidatePath
    }
  }
)
if ($forbiddenPaths.Count -ne 0) {
  throw "forbidden candidate paths: $($forbiddenPaths -join ', ')"
}

$authorizedPaths = @(
  'Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json',
  'horizon-archive-game/test/sixfoldWeir.test.js',
  'playtest/e2e-playthrough.mjs'
) | Sort-Object
if ($candidatePaths.Count -ne 3) { throw "authorized candidate path count" }
$pathDelta = @(
  Compare-Object -ReferenceObject $authorizedPaths -DifferenceObject $candidatePaths
)
if ($pathDelta.Count -ne 0) {
  throw "authorized candidate path identity: $($pathDelta | Out-String)"
}
```

The two expected observations remain separately:

```text
forbiddenPaths.Count = 0
candidatePaths.Count = 3
candidatePaths set =
  Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json
  horizon-archive-game/test/sixfoldWeir.test.js
  playtest/e2e-playthrough.mjs
```

No assertion may require an authorized path to appear in `forbiddenPaths`,
replace either predicate with one combined count, widen the authorized set,
or treat an empty forbidden set as proof of exact authorized identity.

## Exact one-invocation Combat authority

A fresh Combat Engineer must begin from the synchronized commit containing
this reissue and read its full profile, VR-07 and VR-12 through VR-17,
FRCE-003-v1-VR-12 through VR-16, current FRAB-003, current handoff, and the
exact committed FRRC/E2E/static controls. It must preserve these five separate
identities:

```text
HORIZON_ARCHIVE_PRODUCT_CANDIDATE = a91763e28d488f31f8cf7d40ece0b2682246ba9b
HORIZON_ARCHIVE_PROBE_CANDIDATE   = 2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc
diagnostic-control predecessor    = ce7c9abbaf1d0ffad8c1031f0398750676d4970e
validation control                = 4cd7fbf31291671dd28c0743b44a7c49aaad82bb
accepted evidence predecessor     = ca89a679195c11d441a76e6c02983a6436f2ccb2
```

Combat may start exactly one repository-root PowerShell invocation with
`$ErrorActionPreference='Stop'`. That invocation must perform, in order:

1. prove start `HEAD == origin/main`; exact ancestry and probe-candidate
   parentage; frozen product, candidate, predecessor, validation, and evidence
   blobs; tracked/staged drift absence; candidate/current equality; product
   and dependency equality; candidate and worktree `git diff --check`; and
   protected-boundary noninteraction;
2. execute the independent zero-forbidden-path and exact-three-authorized-
   path predicates above once;
3. read and parse the committed manifest once; require exact schema
   `horizon.first-run.release-command-manifest.v1`, ID `FRRC-002-v1`, the
   exact ordered thirteen entries above with key/`id` identity, exactly forty
   `validator-01` through `validator-40` invocations whose commands are
   `python <exact repository-relative validate path> --self-test` in exact
   repository-path-sorted order, and `policy.e2e_invocations=1`, without
   executing a validator;
4. run `node --check playtest/e2e-playthrough.mjs` once;
5. invoke exactly the parsed manifest `focused` command once from its exact
   `horizon-archive-game` workdir within `30s`; and
6. require exact Node test totals **`68 tests / 68 pass / 0 fail`** and exit
   `0`, then prove final tracked/staged drift absence and `git diff --check`.

The invocation may use the execution tool's `30s` timeout enforcement for the
focused process. It may not hand-edit or reorder the parsed command array,
substitute another test list, invoke any non-focused manifest entry, or run a
second PowerShell/static/focused invocation.

Any failure is immediate **`HOLD / NO RERUN`**. Combat may not correct a
command, repair a file, waive a result, partially rerun a failed subcheck, or
continue after failure under this authority.

On complete PASS, Combat issues **`MANIFEST-ORDER-CORRECTED STATIC-FOCUSED
PASS / RETURN TO FRESH MISSION / FRCE-003-v1-VR-17`**. On failure, it issues
**`HOLD / MANIFEST-ORDER-CORRECTED STATIC-FOCUSED FAILURE / NO RERUN /
RETURN TO FRESH MISSION / FRCE-003-v1-VR-17`**. In either case it may write
only that versioned Combat return and `NEXT_INSTANCE_HANDOFF.md`, commit
them, push, prove `HEAD == origin/main`, and route a fresh Mission Captain.

## Explicitly unauthorized execution and change

This reissue authorizes no related or full test, validator execution,
production or fixture build, PBA/media/offline/performance scan, preview,
served request, port/PID operation, browser, external QA root, containment or
cleanup operation, diagnostic execution/read, complete or partial E2E, live
summary, independent verifier, served identity, release evidence
substitution, or second verification invocation.

It authorizes no implementation, product, test, manifest, E2E, content, CSS,
module, fixture, dependency, lockfile, curriculum, evaluator, save, story,
route, map, scoreboard, maturity, media, or other control change. The three
candidate files are read/execute-only at the exact frozen blobs. After the
attempt, only the Combat return and handoff may change.

No product or control repair is authorized. A later complete-verification
ladder remains a new Mission decision after a complete VR-17 result; it is not
an implied continuation or restoration of VR-15.

## Player-visible, state, accessibility, runtime, and media boundaries

This is an execution-control pass with no player-visible delta. Exact first-
run address remains `FR-03 / Host 05 / Sixfold Weir`; stage and release remain
`HOLD`; current and target maturity meanings do not change. No release-map or
scoreboard cell advances.

Entry, active states, completion, permitted exits, hard stop, LOOK, silent
TALK, sole USE, completed read-only behavior, seven final meanings and owners,
Host 04 ordering, `L02-02`, strict `24/24`, evaluator, remediation,
evidence/privacy, save/reload/return, later rail, both equal MH-40 outcomes,
null deltas, and `successor=null` remain frozen. No branch, lesson, reward,
access, identity, authority, world response, successor, RP-013, or post-ending
content may be added or changed.

Keyboard, pointer, touch, semantic activation, focus, announcement, desktop,
narrow, effective `200%`, retained small viewports, forced color, and reduced
motion meanings remain exact but are not executed by this bounded pass.
Offline, request, dependency, source-map, PBA, performance, preview, served-
identity, external-root, cleanup, summary, verifier, and one-E2E contracts
remain frozen but are not executed or reauthorized.

Immutable media remains exact `17 / 37,410,731`. Existing media is not read,
scanned, imported, generated, edited, replaced, varied, moved, revealed, or
used as new evidence. No Quartermaster or Image Specialist replay is
authorized.

Protected repository QA, PDF, training, browser/profile/save, hidden lore,
media, user state, every predecessor root, and every unrelated external root
remain forbidden to inspect, enumerate, reuse, modify, move, or delete. No
schedule, automation, reveal, release, maturity advance, downstream role, or
`FIRST RUN COMPLETE` claim is authorized.

## Definition of done, rollback, and variance routing

This bounded pass is done only when one invocation proves every identity and
diff predicate; the forbidden set is independently empty; the candidate set
independently equals the exact three authorized paths; the committed JSON has
the exact thirteen-entry order above, exact forty sorted validator structures,
and one-E2E policy; `node --check` passes; focused reports exact `68/68`; the
return and handoff contain no other delta; and Git synchronization is proved.

Because no product/control mutation is authorized, there is no product or save
rollback. Bounded administrative rollback removes only this Mission
variance/handoff commit if later rejected through a normal revert; it does not
reset history, alter any frozen candidate, touch protected/untracked/user
state, or migrate a save.

Any mismatch is `REQUIRED CORRECTION / EXECUTION CONTROL` unless exact
evidence proves an earlier owner. Candidate, product, predicate, threshold,
identity, blob, structure, or static-control drift returns `HOLD` to fresh
Mission without repair. A request for related/full/validator/build/live/E2E
authority is a new Mission decision. Product/canon/learning/media/ending or
protected-boundary variance routes to its earliest workflow owner and remains
outside this authority.

## Change history and Mission proof

- `VR-12` authorized failure-side diagnostic localization only.
- `VR-13` authorized one diagnostic-control verification.
- `VR-14` authorized the exact image/label edge-source correction only.
- `VR-15` authorized one complete field-source-corrected verification; its
  sole ladder invocation failed closed on a malformed forbidden-boundary
  assertion and is expended.
- `VR-16` authorized corrected preflight/static/focused proof; its sole
  invocation passed independent path predicates but failed closed because
  Combat invented the wrong final-entry order and is expended.
- `VR-17` authorizes only one manifest-order-corrected static/focused proof
  and a return to fresh Mission; it does not restore the complete ladder.

Mission verified synchronized source
`HEAD == origin/main == 758b669b00a4a22fdd710708f5bb08774dd5cd7d`
before this reissue. All five frozen identities are ancestors. Candidate
`2cccbfe` has exact parent `e44e2c7` and changes exactly the three authorized
controls. Current blobs equal candidate blobs: manifest
`fc91a863be99b11c44405071324e3502b959e621`, static test
`5910af4e4f6754acbc5193ff021f374fe90a96f2`, and E2E
`0b72f1463c729a8e22337af0115c3316652c2565`. Predecessor blobs remain
manifest `d9d3491067f072ec2f68dd4159eb4040d47d45ff`, static test
`38ea5255a1713740094ab4ee3b36e7b78389bbe0`, and E2E
`5e63e3fd36ce0d59d276a6bc3324cc15ce03bdb2`.

Mission independently parsed the committed manifest and observed exact schema
`horizon.first-run.release-command-manifest.v1`, ID `FRRC-002-v1`, the exact
thirteen-entry order frozen above, forty repository-path-sorted validator
structures from `validator-01` through `validator-40`, and
`e2e_invocations=1`. Candidate/worktree integrity and tracked/staged drift
checks passed. Mission ran no `node --check`, focused/related/full test,
validator, build, PBA/media scan, preview, served request, port/PID operation,
browser, external-root operation, diagnostic, E2E, summary, verifier, cleanup,
product, or media action. It opened no protected path contents and changed no
implementation or maturity control.

Mission Captain signs **`FIRST RUN SHELL READY / ONE MANIFEST-ORDER-
CORRECTED STATIC-FOCUSED VERIFICATION / FRSH-003-v1-VR-17`** while preserving
stage and release **HOLD**.

Exact next owner is a **fresh Combat Engineer**. Execute only the one corrected
integrity/diff, independent boundary, JSON/order/structure, `node --check`,
and focused `68/68` invocation; issue one exact return and synchronized
handoff; push; prove synchronization; and return to a fresh Mission Captain.
Do not run or authorize any later gate.

The dedicated Mission commit and final synchronization proof are reported
from Git after commit because this artifact cannot contain the hash that first
contains itself.
