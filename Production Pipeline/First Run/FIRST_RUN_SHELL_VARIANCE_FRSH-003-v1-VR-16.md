# First Run Shell Variance Reissue - Corrected Preflight Command Control

Variance ID: `FRSH-003-v1-VR-16`

Disposition: **`FIRST RUN SHELL READY / ONE CORRECTED PREFLIGHT-CONTROL
VERIFICATION / FRSH-003-v1-VR-16`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Diagnostic / verification / field-source correction shells:
`FRSH-003-v1-VR-12` / `FRSH-003-v1-VR-13` /
`FRSH-003-v1-VR-14`

Expended complete-verification shell: `FRSH-003-v1-VR-15`

Immediate return: `FRCE-003-v1-VR-15`

Mission source inspected:
`7f569baf6a6d7833c7684fa8a3b5dedbad2fca6f`

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

Mission independently classifies the VR-15 stop as **`REQUIRED CORRECTION /
EXECUTION CONTROL / OPEN`** and issues `READY` for one corrected preflight-
control verification only.

The candidate's actual forbidden-path collection was empty. The Combat-owned
assertion was malformed because it then required that empty collection to
contain exact authorized path
`horizon-archive-game/test/sixfoldWeir.test.js`, although the assertion's own
forbidden regex excluded `/test/`. The terminal `forbidden boundary` result
therefore establishes no candidate, product, test, manifest, E2E, evidence,
or protected-boundary defect.

The malformed assertion nevertheless executed inside Combat's one authorized
complete-ladder invocation. VR-15 required the complete ladder to begin once,
made any deterministic failure an immediate `HOLD / NO E2E / NO RERUN`, and
did not permit Mission or Combat to promote earlier subchecks into a complete
gate pass. The complete-ladder authority was therefore consumed. Mission may
not silently reinterpret the failure as occurring outside that invocation or
reauthorize the full ladder under VR-15 or VR-16.

This reissue separates the two predicates that the malformed assertion
collapsed:

1. the forbidden candidate-path set must contain exactly zero paths; and
2. the candidate's own changed-path set must separately equal the exact three
   authorized paths.

It then permits only the remaining bounded static corroboration needed to
prove that corrected command shape: integrity/diff, JSON structure,
`node --check`, and the exact focused `68/68` command. It authorizes no E2E,
full release ladder, live evidence, downstream stage, product/control repair,
or maturity action. A fresh Mission Captain must adjudicate the result before
any later complete-verification authority may be considered.

## Exact corrected candidate-boundary command

Fresh Combat must execute the following repository-root PowerShell command
once as part of its single integrity/diff gate. The forbidden-count assertion
and exact-authorized-path assertion are intentionally independent. The
authorized static-test path is never looked up inside the forbidden set.

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
$pathDelta = @(Compare-Object -ReferenceObject $authorizedPaths -DifferenceObject $candidatePaths)
if ($pathDelta.Count -ne 0) {
  throw "authorized candidate path identity: $($pathDelta | Out-String)"
}
```

The expected successful observations are independently:

```text
forbiddenPaths.Count = 0
candidatePaths.Count = 3
candidatePaths =
  Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json
  horizon-archive-game/test/sixfoldWeir.test.js
  playtest/e2e-playthrough.mjs
```

No assertion may require an authorized path to appear in `forbiddenPaths`,
replace either check with one combined count, widen the authorized set, or
treat an empty forbidden set as proof of the exact authorized set.

## Exact bounded Combat verification authority

Combat must begin from the synchronized commit containing this reissue and
read its full profile, VR-07 and VR-12 through VR-16, FRCE-003-v1-VR-12
through VR-15, current FRAB-003, current handoff, and the exact committed
FRRC/E2E/static controls. It must preserve these five separate identities:

```text
HORIZON_ARCHIVE_PRODUCT_CANDIDATE = a91763e28d488f31f8cf7d40ece0b2682246ba9b
HORIZON_ARCHIVE_PROBE_CANDIDATE   = 2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc
diagnostic-control predecessor    = ce7c9abbaf1d0ffad8c1031f0398750676d4970e
validation control                = 4cd7fbf31291671dd28c0743b44a7c49aaad82bb
accepted evidence predecessor     = ca89a679195c11d441a76e6c02983a6436f2ccb2
```

Combat may run this exact bounded ladder once:

1. prove start synchronization; exact ancestry and parentage; frozen product,
   candidate, predecessor, validation, and evidence blobs; tracked/staged
   drift absence; candidate/current control equality; candidate and worktree
   `git diff --check`; protected-boundary noninteraction; then run the exact
   corrected candidate-boundary command above once;
2. parse the committed FRRC JSON and require exact `FRRC-002-v1`, thirteen
   ordered entries, forty exactly named repository-path-sorted validator
   invocations, and `e2e_invocations=1` without executing a validator;
3. run `node --check playtest/e2e-playthrough.mjs` once; and
4. invoke the exact manifest `focused` command once within `30s`, requiring
   unchanged **`68/68`**.

No other gate is authorized. Any failure is immediate **`HOLD / NO RERUN`**.
Combat may not correct a command, repair a file, waive a result, partially
rerun a failed gate, or continue after failure under this authority.

On complete PASS, Combat issues **`CORRECTED PREFLIGHT-CONTROL PASS / RETURN
TO FRESH MISSION / FRCE-003-v1-VR-16`**. On failure, it issues **`HOLD /
CORRECTED PREFLIGHT-CONTROL FAILURE / NO RERUN / RETURN TO FRESH MISSION /
FRCE-003-v1-VR-16`**. In either case it may write only that versioned Combat
return and `NEXT_INSTANCE_HANDOFF.md`, commit them, push, prove
`HEAD == origin/main`, and route a fresh Mission Captain.

## Explicitly unauthorized execution

This reissue authorizes no related or full test, validator execution,
production or fixture build, PBA/media/offline/performance scan, preview,
served request, port/PID operation, browser, external QA root, containment or
cleanup operation, diagnostic execution/read, complete or partial E2E, live
summary, independent verifier, release evidence substitution, or second
verification ladder.

It also authorizes no implementation, product, test, manifest, E2E, content,
CSS, module, fixture, dependency, lockfile, curriculum, evaluator, save,
story, route, map, scoreboard, maturity, media, or other control change. The
three candidate files are read/execute-only at the exact frozen blobs. After
the attempt, only the Combat return and handoff may change.

## Player-visible, state, accessibility, runtime, and media boundaries

This is an execution-control pass with no player-visible delta. Exact first-
run address remains `FR-03 / Host 05 / Sixfold Weir`; stage and release remain
`HOLD`; the current and target maturity meanings do not change.

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

This bounded pass is done only when the corrected command reports the empty
forbidden set and exact three authorized paths independently, every other
authorized integrity/static gate passes once, focused reports exact `68/68`,
the return and handoff contain no other delta, and Git synchronization is
proved.

Because no product/control mutation is authorized, there is no product or
save rollback. Bounded administrative rollback removes only this Mission
variance/handoff commit if later rejected through a normal revert; it does
not reset history, alter any frozen candidate, touch protected/untracked/user
state, or migrate a save.

Any mismatch is `REQUIRED CORRECTION / EXECUTION CONTROL` unless exact
evidence proves an earlier owner. Candidate, product, predicate, threshold,
identity, or static-control drift returns `HOLD` to fresh Mission without
repair. A request for a related/full/build/live/E2E gate is a new Mission
decision, not an implied continuation. Product/canon/learning/media/ending or
protected-boundary variance routes to its earliest workflow owner and remains
outside this authority.

## Change history and Mission proof

- `VR-12` authorized failure-side diagnostic localization only.
- `VR-13` authorized one complete diagnostic-control verification.
- `VR-14` authorized the exact image/label edge-source correction only.
- `VR-15` authorized one complete field-source-corrected verification; its
  sole ladder invocation failed closed on the malformed final gate-1 command
  assertion and is expended.
- `VR-16` authorizes only corrected preflight command/control proof and a
  return to fresh Mission; it does not restore the complete ladder.

Mission verified synchronized source
`HEAD == origin/main == 7f569baf6a6d7833c7684fa8a3b5dedbad2fca6f`
before this reissue. All five frozen identities are ancestors. Candidate
`2cccbfe` has exact parent `e44e2c7` and its own changed paths are exactly the
three authorized controls. Current blobs equal candidate blobs: manifest
`fc91a863be99b11c44405071324e3502b959e621`, static test
`5910af4e4f6754acbc5193ff021f374fe90a96f2`, and E2E
`0b72f1463c729a8e22337af0115c3316652c2565`. Frozen product blobs remain
`App.jsx` `802ceffb1a07c3b166dc2f7f06ab38138dc37596` and
`drownedArchive.js` `1bc2f9d93c59a396ddee7ed83cde1600f76b62e7`.
Validation and accepted-evidence blobs remain separately identifiable, and
candidate `git diff --check` passed.

Mission ran no newly authorized boundary command, JSON gate, `node --check`,
focused/related/full test, validator, build, PBA/media scan, preview, served
request, port/PID operation, browser, external-root operation, diagnostic,
E2E, summary, verifier, cleanup, product, or media action; inspected no
protected, predecessor, media, or user state; and changed no implementation or
maturity control.

Mission Captain signs **`FIRST RUN SHELL READY / ONE CORRECTED PREFLIGHT-
CONTROL VERIFICATION / FRSH-003-v1-VR-16`** while preserving stage and
release **HOLD**.

Exact next owner is a **fresh Combat Engineer**. Execute only the corrected
integrity/diff, JSON, `node --check`, and focused `68/68` ladder once, issue
one exact return and synchronized handoff, push, prove sync, and return to a
fresh Mission Captain. Do not run or authorize any later gate.

The dedicated Mission commit and final synchronization proof are reported
from Git after commit because this artifact cannot contain the hash that first
contains itself.
