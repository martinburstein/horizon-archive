# First Run Shell Variance Reissue - Complete Diagnostic-Control Verification

Variance ID: `FRSH-003-v1-VR-22`

Disposition: **`FIRST RUN SHELL READY / ONE COMPLETE DIAGNOSTIC-CONTROL
VERIFICATION / FRSH-003-v1-VR-22`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Diagnostic / field-source controls: `FRSH-003-v1-VR-12` /
`FRSH-003-v1-VR-14`

Static/focused correction chain: `FRSH-003-v1-VR-15` through
`FRSH-003-v1-VR-21`

Immediate return: `FRCE-003-v1-VR-21`

Mission source inspected:
`a247c980df67a523a8528b6d92b1ce5a717d881a`

Combat start source for VR-21:
`65ad8aa116ccc8ddf4ced5d7d3d5a07e8fec7938`

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

Mission independently accepts the complete VR-21 static/focused result and
issues **READY for one fresh Combat-owned complete diagnostic-control
verification only**.

VR-21 is the first invocation in the VR-15 through VR-21 correction chain to
complete the entire authorized static/focused envelope. It began once from
the exact synchronized source, used the six exact literal tracked paths,
proved all frozen/current identities and blobs, passed the scalar revision
range with correct tri-state exit semantics, parsed the exact committed FRRC
structure, ran `node --check` once, ran the exact focused command once with
`68 tests / 68 pass / 0 fail`, and completed all three required post-focused
integrity checks in the same invocation. It exited `0` after `4.1s`.

This result closes **`REQUIRED CORRECTION / EXECUTION CONTROL`**. The prior
wrapper defects were command-construction, expected-order, literal-path,
revision-range, and output-marker defects. None established a product,
candidate, manifest, test, E2E, validation, evidence, threshold, learning,
save, route, media, world, or ending defect. The final VR-21 pass proves the
corrected execution-control envelope without promoting any partial result
from VR-15 through VR-20.

The separate **`UNAUTHORIZED DIVERGENCE / PROTECTED PATH ENUMERATION / OPEN`**
classification from VR-17 remains separately classified and open. It is not
waived, merged into the execution-control closure, used as evidence, or
reclassified as a candidate defect. VR-18 through VR-21 introduced no repeat
of the disclosed repository-wide filename enumeration. This process
classification does not alter the frozen candidate and does not by itself
prevent one exact, containment-bounded verification under the restrictions
below.

This reissue is not production-functional acceptance, release acceptance,
maturity advancement, product repair, production-stage replay, or downstream
work. A fresh Combat Engineer must run the complete current ladder from its
beginning; VR-21 static/focused evidence is adjudication evidence only and may
not substitute for any fresh VR-22 gate.

## Independent Mission corroboration

Mission performed static, non-executing corroboration only:

- `HEAD == origin/main == a247c980df67a523a8528b6d92b1ce5a717d881a`.
- The commit first containing `FRCE-003-v1-VR-21` is exact current `HEAD`, and
  its exact parent is the reported Combat start source `65ad8aa...`.
- All five frozen identities and the VR-21 Combat start source are ancestors
  of current `HEAD`.
- Probe candidate `2cccbfe...` has exact parent `e44e2c7...`.
- Candidate/current blobs remain exact: manifest
  `fc91a863be99b11c44405071324e3502b959e621`, E2E
  `0b72f1463c729a8e22337af0115c3316652c2565`, and static test
  `5910af4e4f6754acbc5193ff021f374fe90a96f2`.
- Frozen product/current blobs remain exact: `App.jsx`
  `802ceffb1a07c3b166dc2f7f06ab38138dc37596`, `drownedArchive.js`
  `1bc2f9d93c59a396ddee7ed83cde1600f76b62e7`, and `package.json`
  `2c23c0a59f62af0463fa54bb1c8465aa9f6bb2da`.
- Candidate-to-current equality over the six literal paths passed with exit
  `0`; candidate `git diff --check` passed.
- The committed manifest parsed with schema
  `horizon.first-run.release-command-manifest.v1`, manifest ID
  `FRRC-002-v1`, exact thirteen-entry property order and entry key/ID
  identity, forty sorted validator structures,
  `policy.validator_count=40`, and `policy.e2e_invocations=1`.
- Static control text preserves separate unrounded image and label edge
  sources, diagnostic-before-summary ordering, exact exhaustive inventory,
  diagnostic non-release/non-verifier status, failed-run no-retry behavior,
  exactly one complete-E2E entry, and one independent summary verifier.

Mission did not execute `node --check`, focused/related/full tests,
validators, builds, PBA/media/offline/performance gates, previews, served
requests, ports/PIDs, browser, external root, containment/cleanup, diagnostic,
E2E, summary, verifier, product, or media operations.

## Frozen identities and no-change authority

Fresh Combat must begin from the synchronized commit containing this reissue
and preserve these identities separately:

```text
HORIZON_ARCHIVE_PRODUCT_CANDIDATE = a91763e28d488f31f8cf7d40ece0b2682246ba9b
HORIZON_ARCHIVE_PROBE_CANDIDATE   = 2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc
diagnostic-control predecessor    = ce7c9abbaf1d0ffad8c1031f0398750676d4970e
validation control                = 4cd7fbf31291671dd28c0743b44a7c49aaad82bb
accepted evidence predecessor     = ca89a679195c11d441a76e6c02983a6436f2ccb2
```

Combat may make no implementation, product, test, manifest, E2E, content,
CSS, module, fixture, dependency, package, lockfile, curriculum, evaluator,
save, story, route, map, scoreboard, maturity, media, or other control change.
The frozen controls are read/execute-only. After the attempt Combat may write
only one versioned return `FRCE-003-v1-VR-22` and
`NEXT_INSTANCE_HANDOFF.md`.

No repair, command correction, waiver, partial rerun, second ladder, second
root, or second E2E is authorized. Every gate is fail-closed.

## Exact complete deterministic ladder

Combat must read its full profile, VR-07 and VR-12 through VR-22,
FRCE-003-v1-VR-12 through VR-21, current `FRAB-003-v1`, current handoff, and
the exact committed FRRC/E2E/static controls. It must then run the complete
current deterministic ladder exactly once from the beginning against the
frozen identities:

1. **Integrity/static preflight:** prove start `HEAD == origin/main`; all
   required ancestry and exact probe parentage; the exact three-file probe
   boundary; all frozen/current blobs; the six literal tracked paths; initial
   allowlisted worktree and staged absence; scalar candidate-to-current
   equality with immediate `0 / 1 / >1` exit classification; candidate and
   worktree diff integrity; forbidden-change and protected-boundary
   noninteraction; exact FRRC JSON schema/ID/thirteen-entry order/key identity;
   exact forty sorted validator command structures and one-E2E policy; exact
   focused-command allowlist; and `node --check playtest/e2e-playthrough.mjs`
   exactly once.
2. **Focused:** invoke exact `FRRC-002-v1.entries.focused` once from its exact
   workdir within `30s`; require exit `0` and exact
   `68 tests / 68 pass / 0 fail` under the line-anchored
   `(?:#|\u2139)` parser.
3. **Related:** invoke exact `entries.related` once within `60s`; require
   exact `74 tests / 74 pass / 0 fail`.
4. **Cold full:** invoke exact `entries.full` once within `60s`; require exact
   `972 tests / 972 pass / 0 fail`.
5. **Validators:** invoke exactly the forty manifest-frozen, repository-path-
   sorted validator self-tests once each and require `40/40` pass. No extra,
   missing, reordered, substituted, or repeated validator is permitted.
6. **Builds:** invoke exact production and TD-012 fixture builds once each
   within their `60s` limits; require exact `217 / 57` module counts.
7. **PBA/media/offline/performance:** run the current FRRC/operative-shell
   PBA, immutable-media, source-map, runtime-request/offline, dependency,
   product-drift, and performance gates without substitution. Preserve the
   current narrow/global caps, Host 05 `<=2ms`, sampled-task `<=100ms`, whole
   journey `<180s`, and immutable media identity `17 / 37,410,731`.
8. **Preview and served identity:** start only owned production/fixture
   previews at `127.0.0.1:4173` and `:4184`; require exact root/deep/JavaScript/
   CSS byte identity against the corresponding builds.
9. **Pre-live containment:** prove exact owned preview PID/port identity,
   frozen candidate environment, absence of an overlapping run, and the
   exact fresh-root containment contract below before live execution.

Any deterministic failure is immediate **`HOLD / NO E2E / NO RERUN`**.
Combat must stop at the earliest failing gate, run no later gate, make no
repair, clean only exact owned resources, record the exact failure, commit one
return/handoff, push, prove synchronization, and route a fresh Mission
Captain.

## Sole fresh containment-proved GUID-root E2E

Only after all deterministic gates pass may Combat create exactly one
previously nonexistent GUID-named direct child of the resolved OS temp root.
Before use and again before deletion Combat must prove:

- exact resolved root identity;
- direct parent equal to the resolved OS temp root;
- descendant containment inside that temp root;
- exclusion outside the repository in both directions;
- distinction from every disclosed predecessor root; and
- ownership by this sole VR-22 attempt.

Combat may not inspect, enumerate, reuse, mutate, move, or delete a predecessor
or unrelated root. No real browser profile, campaign save, user state,
overlapping run, or repository QA directory is permitted.

With the exact frozen environment identities and this one owned root, Combat
may invoke exact `FRRC-002-v1.entries.complete-e2e` **once** within `180s`.
No partial E2E, retry, second invocation, second root, or continuation after
failure is authorized.

### Successful E2E branch

A successful E2E is acceptable only when that same sole run produces all of
the following without substitution:

- exactly one machine-owned `first-run-live-diagnostic.json` in the owned
  root;
- diagnostic `checkInventoryExact=true` and exact `failureCount=0`;
- exactly one machine-owned `first-run-live-summary.json` in the owned root;
- no missing, extra, duplicate, or substituted diagnostic or summary;
- exact product/probe/validation/evidence/root identities; and
- successful completion of every unchanged live predicate.

Only after those conditions pass may Combat invoke exact
`FRRC-002-v1.entries.live-summary-verify` exactly once with the one summary as
its sole live evidence input. The diagnostic remains forbidden verifier input
and carries no independent acceptance or maturity weight. Acceptance requires
exactly one verifier invocation and exactly one passing verifier result.

A false `checkInventoryExact`, nonzero `failureCount`, missing/extra
diagnostic, missing/extra summary, diagnostic/summary substitution, verifier
failure, extra verifier, identity drift, or cleanup failure is immediate
**`HOLD / NO RERUN`**.

### Failed E2E branch

If the sole E2E fails, aborts, times out, or omits a valid success summary,
Combat must issue **`HOLD / NO RERUN`**. It may read only that exact owned
root's `first-run-live-diagnostic.json`, if present, solely to record:

- `checkInventoryExact` and `failureCount`;
- every exact failure path;
- every corresponding expected value, actual value, and diagnostic owner;
- the complete unchanged failures-by-layout grouping; and
- the earliest responsible workflow owner supported by those exact values.

The diagnostic is localization only. It is not a retry oracle, live summary,
verifier input, release evidence, maturity evidence, or authority to repair.
Combat must run no verifier, no retry, no replacement command, and no repair.
If the diagnostic is absent, incomplete, or establishes mixed/ambiguous
ownership, route a fresh Mission Captain for bounded adjudication rather than
inventing an owner.

## Cleanup, return, and synchronization

After either live branch, Combat must close only the owned browser/processes,
stop only recorded preview PIDs, prove ports `4173` and `4184` clear, repeat
the exact containment proof, and remove only the exact owned GUID root through
a policy-supported literal method. Any policy-level cleanup limitation must
be disclosed without touching another path or root.

On complete PASS, Combat issues **`DIAGNOSTIC-CONTROL VERIFICATION PASS /
RETURN TO FRESH INTELLIGENCE / FRCE-003-v1-VR-22`**, commits only its return
and synchronized handoff, pushes, and proves `HEAD == origin/main`. Fresh
Intelligence may then independently adjudicate the exact candidate and this
single run's summary/verifier evidence without another E2E.

On any failure, Combat issues the exact bounded `HOLD / NO RERUN` return,
commits only its return and synchronized handoff, pushes, proves
`HEAD == origin/main`, and routes the exact owner established above.

## Frozen player, learning, accessibility, media, and ending boundaries

This verification has no player-visible delta. Exact first-run address
remains `FR-03 / Host 05 / Sixfold Weir`; stage and release remain HOLD until
fresh evidence is accepted; no release-map or scoreboard cell advances.

All entry, active-state, completion, permitted-exit, hard-stop, LOOK, silent
TALK, sole USE, completed read-only, seven final meanings/owners, Host 04
ordering, `L02-02`, strict `24/24`, evaluator, remediation, evidence/privacy,
save/reload/return, later rail, both equal MH-40 outcomes, null deltas, and
`successor=null` meanings remain exact.

Keyboard, pointer, touch, semantic activation, focus, announcement, desktop,
narrow, effective `200%`, retained small viewports, forced color, reduced
motion, strict `q=1/64` floor lattice, zero-epsilon geometry, source,
retention, containment, overlap, offline, request, dependency, source-map,
PBA, performance, preview, served identity, external-root, cleanup, summary,
verifier, diagnostic non-evidence/non-verifier, and one-E2E contracts remain
exact.

Immutable media remains exact `17 / 37,410,731`. No media generation, edit,
replacement, variation, import, movement, or reveal is authorized. No branch,
packet, lesson, hidden-lore answer, reward, access, identity, authority, world
response, successor, RP-013, or post-ending content may be added or changed.

Protected repository QA, PDF, training, browser/profile/save, hidden lore,
media, user state, every predecessor root, and unrelated external roots remain
forbidden to inspect, enumerate, reuse, modify, move, or delete except for the
exact manifest-frozen, allowlisted identity/inventory operations required by
the deterministic ladder. No broad discovery is permitted.

No Quartermaster, Image Specialist, reveal, maturity advance, release,
schedule, automation, or `FIRST RUN COMPLETE` action is authorized from this
Mission gate.

## Definition of done, rollback, and variance routing

VR-22 is done only when one fresh Combat invocation sequence completes every
deterministic gate once, one fresh containment-proved GUID-root E2E passes
once, the same run's sole diagnostic reports exact inventory and zero
failures, exactly one summary exists, exactly one independent verifier passes,
owned cleanup is exact, only the return/handoff change, and Git
synchronization is proved.

Because no product/control mutation is authorized, there is no product or save
rollback. Administrative rollback may only normally revert this Mission
variance/handoff commit; it may not reset history, alter a frozen identity,
touch protected/untracked/user state, or migrate a save.

Variance routing remains exact:

- deterministic command/control mismatch -> `REQUIRED CORRECTION / EXECUTION
  CONTROL`, fresh Mission, no repair;
- exact diagnostic failure values -> earliest workflow owner proven by those
  values;
- mixed/ambiguous or absent diagnostic localization -> fresh Mission;
- product/canon/learning/privacy/save/accessibility/performance/media/ending
  variance -> its earliest workflow owner;
- new protected/media/user discovery outside the exact allowlist ->
  `UNAUTHORIZED DIVERGENCE`, immediate HOLD; and
- release evidence/maturity classification -> fresh Intelligence only after
  a complete Combat PASS.

Mission Captain signs **`FIRST RUN SHELL READY / ONE COMPLETE DIAGNOSTIC-
CONTROL VERIFICATION / FRSH-003-v1-VR-22`** while preserving stage and
release HOLD, closing the execution-control correction, and retaining the
prior protected-path enumeration classification separately.

Exact next owner is a **fresh Combat Engineer**. Run the complete deterministic
ladder once and, only after it passes, the sole fresh containment-proved
GUID-root E2E once under the exact success/failure branches above. Make no
product/control change, rerun, repair, reveal, maturity action, or downstream
start.

The dedicated Mission commit and final synchronization proof are reported
from Git after commit because this artifact cannot contain the hash that first
contains itself.
