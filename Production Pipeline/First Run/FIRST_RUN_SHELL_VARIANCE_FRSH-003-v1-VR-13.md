# First Run Shell Variance Reissue - Single Diagnostic-Control Verification

Variance ID: `FRSH-003-v1-VR-13`

Disposition: **`FIRST RUN SHELL READY / ONE DIAGNOSTIC-CONTROL
VERIFICATION / FRSH-003-v1-VR-13`**

Release state: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Diagnostic correction shell / return: `FRSH-003-v1-VR-12` /
`FRCE-003-v1-VR-12`

Mission source inspected: `abf06ed34b757598c2b1ce5a4fb7137b1567b432`

Exact diagnostic-control candidate:
`ce7c9abbaf1d0ffad8c1031f0398750676d4970e`

Exact immutable content candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Accepted evidence predecessor:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Released rollback baseline: `3e3da60dc2ffa097a3499a5e2f5fa6ce2273f602`

Date: **2026-08-10**

## Decision

Mission independently accepts the exact three-file diagnostic-control
candidate and issues **READY for one Combat-owned verification only**. The
candidate satisfies VR-12 without changing the product, validation control,
accepted evidence predecessor, live acceptance predicates, summary schema,
independent verifier, thresholds, or one-run rule.

This is not release acceptance, a product correction, production-stage
reopening, or maturity advancement. `FRAB-003-v1` remains a release `HOLD`
until fresh Intelligence independently adjudicates a completely passing exact
run. Combat may not repair any failure under this authority.

## Independent candidate adjudication

Candidate `ce7c9ab` has parent `d63a231` and changes exactly:

- `playtest/e2e-playthrough.mjs`;
- `Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json`;
  and
- `horizon-archive-game/test/sixfoldWeir.test.js`.

The E2E now constructs the diagnostic from the same run's six unmodified raw
layout records. It declares the exact schema, producer, Work Order, operative
shell, diagnostic contract, manifest, product/probe/validation/evidence
identities, external root, and runtime-error Boolean required by VR-12. The
six frozen IDs and indexes are checked in exact order.

The deterministic inventory is built before evaluation, and every emitted
entry carries `path`, `expected`, `actual`, `pass`, and the bounded owner. Its
paths are sorted by frozen layout index and then lexicographically, with exact
required/emitted arrays and uniqueness checks. It covers the envelope and
strict `q=1/64` floor lattice; node/semantic/action/game-state identity;
focus, forced color, reduced motion, and zero motion; pre/post direct gates;
all nine rectangles in viewport/document/image-relative spaces; browser-used
physical, semantic, label, and label-text boxes; source values; drift,
delta, residual, containment, overlap, overflow, and aggregate predicates.
Every false emitted check is preserved in the sorted failure paths and the
same complete set is grouped by layout.

The synchronous diagnostic write occurs after the six layouts, runtime-error
aggregate, focus aggregate, and performance values exist and before the
canonical-duration, runtime-error, performance, focus, or layout throws. The
transport is concise and cites the same count and path list. The accepted
summary write remains after every live throw. The exact existing layout
conjunction remains:

```text
semanticIdentityStable && focusPass && geometryStable && directGatesPass
```

The diagnostic cannot modify that conjunction, turn failure into success,
replace `first-run-live-summary.json`, or enter `live-summary-verify`. The
manifest explicitly freezes machine ownership, failure retention, exact-root
cleanup, non-release/non-verifier status, and no retry after a failed E2E.

## Mission proof

- `HEAD == origin/main == abf06ed34b757598c2b1ce5a4fb7137b1567b432`
  before this adjudication.
- Product `a91763e`, validation `4cd7fbf`, and evidence predecessor
  `ca89a679` are ancestors of `ce7c9ab`.
- Exact product blobs remain `App.jsx`
  `802ceffb1a07c3b166dc2f7f06ab38138dc37596` and `drownedArchive.js`
  `1bc2f9d93c59a396ddee7ed83cde1600f76b62e7`.
- Validation predecessor test blob remains
  `d71452e6bb5e8ab5d846b8a8ec4f8b12832b03ae`.
- Accepted predecessor blobs remain manifest
  `786663223f75cb3a88503c50373e79f3c5c5cf26` and E2E
  `a322016aac859f385d81dd368845de7d5bde4e5b`.
- Exact candidate `git diff --check`: **PASS**.
- Current `FRRC-002-v1` JSON parse, 13-entry inventory, and one-E2E policy:
  **PASS**.
- `node --check playtest/e2e-playthrough.mjs`: **PASS**.
- Exact manifest focused command: **68/68 PASS**, Node duration
  `166.7833ms`, within `30s`. This independently corroborates Combat's
  reported `68/68` at `207.1096ms`.

One initial read-only blob command named nonexistent
`horizon-archive-game/src/data/drownedArchive.js` and stopped at Git path
resolution. Mission corrected it to the actual
`horizon-archive-game/src/drownedArchive.js`; the bounded proof then passed.
The failed lookup executed no test or diagnostic and changed no state.

## Exact Combat verification authority

Combat must begin from the synchronized commit containing this reissue, read
its profile and the complete VR-07, VR-12, VR-13, FRCE-003-v1-VR-12, current
FRAB-003-v1, current handoff, and exact committed manifest/E2E/static test.
It must freeze these separate identities:

```text
HORIZON_ARCHIVE_PRODUCT_CANDIDATE = a91763e28d488f31f8cf7d40ece0b2682246ba9b
HORIZON_ARCHIVE_PROBE_CANDIDATE   = ce7c9abbaf1d0ffad8c1031f0398750676d4970e
validation control               = 4cd7fbf31291671dd28c0743b44a7c49aaad82bb
accepted evidence predecessor    = ca89a679195c11d441a76e6c02983a6436f2ccb2
```

Combat may make no implementation, test, manifest, product, content, media,
fixture, dependency, curriculum, save, route, ending, map, scoreboard, or
maturity change. It may write only one versioned Combat verification return
and `NEXT_INSTANCE_HANDOFF.md` after the attempt.

From the beginning, Combat must run the complete current deterministic ladder
in manifest order and against the exact frozen identities:

1. ancestry, exact three-file candidate boundary, frozen blob/identity,
   forbidden-change, protected-boundary, JSON, `node --check`, tracked-drift,
   and `git diff --check` preflight;
2. exact focused command within `30s`, requiring `68/68`;
3. exact related command within `60s`, requiring `74/74`;
4. cold full suite within `60s`, requiring `972/972`;
5. exactly forty sorted repository-relative validator self-tests, requiring
   `40/40`;
6. exact production and TD-012 fixture builds, requiring `217/57` modules;
7. current FRRC-002 PBA, media, offline/request, dependency, source-map,
   performance, and immutable-media thresholds without substitution;
8. owned production/fixture previews at `127.0.0.1:4173` and `:4184`, then
   exact root/deep/JavaScript/CSS served identity; and
9. exact pre-live PID, port, candidate, and external-root containment proof.

Any deterministic failure is immediate **HOLD**. Combat must clean only its
exact owned resources, must not repair or partially rerun the failed gate, and
must not invoke E2E.

## Sole fresh-root E2E and evidence separation

Only after every deterministic gate passes, Combat may create exactly one
previously nonexistent GUID-named direct child of the resolved OS temp root.
Before use and again before cleanup it must prove exact resolved identity,
direct-parent containment, descendant containment, and bidirectional
repository exclusion. It must be outside the repository and must not be the
disclosed VR-11 predecessor root. Combat may not inspect, enumerate, reuse,
mutate, move, or delete that predecessor root.

Using the exact environment identities above and that one fresh external root,
Combat may invoke `FRRC-002-v1.entries.complete-e2e` **exactly once** within
`180s`. No real browser profile, campaign save, user state, or overlapping
run is permitted.

- If the E2E fails, aborts, times out, or omits the accepted summary, the
  result is **HOLD with no rerun**. Combat may read only the exact
  `first-run-live-diagnostic.json` in its owned root to record every failure
  path/value. The diagnostic is localization only, never a retry oracle,
  summary, verifier input, acceptance evidence, or maturity evidence. The
  verifier must not run.
- If the E2E succeeds, it must emit exactly one machine-owned
  `first-run-live-summary.json`. Combat must then invoke the exact independent
  `live-summary-verify` entry exactly once with that summary as its only live
  evidence input. The diagnostic remains forbidden input and carries no
  acceptance weight.
- A missing/extra summary, diagnostic/summary substitution, verifier failure,
  second summary, second verifier, second E2E, identity drift, or cleanup
  failure is **HOLD with no rerun**.

After the attempt, Combat must close only its owned browser/processes, stop
only recorded preview PIDs, prove ports `4173` and `4184` clear, repeat exact
containment proof, and remove only its exact owned fresh GUID root by a
policy-supported literal method. It must truthfully disclose any policy-level
cleanup limitation without touching another root.

On complete PASS, Combat issues **`DIAGNOSTIC-CONTROL VERIFICATION PASS /
RETURN TO FRESH INTELLIGENCE / FRCE-003-v1-VR-13`** and routes a fresh
Intelligence Officer to adjudicate the exact candidate and evidence without a
second E2E. On any failure, Combat issues **`HOLD / NO RERUN /
FRCE-003-v1-VR-13`**, records the earliest exact failing gate and any allowed
diagnostic localization, and returns to a fresh Mission Captain. In either
case it commits the report and handoff, pushes, and proves
`HEAD == origin/main`.

## Frozen scope and hard stops

All VR-07 and FRWO-003 thresholds and meanings remain exact: authored
`45/75/20/25`; strict `q=1/64`, `Q=floor`, no epsilon; semantic `>=44`;
label/source/retention/overlap/overflow/residual/focus/forced-color/reduced-
motion gates; the seven final meanings; LOOK, silent TALK, sole USE, completed
read-only behavior; `L02-02`, strict `24/24`, evaluator, remediation,
evidence/privacy/save/reload/return; PBA/performance/offline/served identity;
and immutable media `17 / 37,410,731`.

Host 04, later Drowned/Witness/City/rail, both equal MH-40 outcomes, null
deltas, and `successor=null` remain unchanged. No Host 06-15 work, City
repair, lesson, branch, reward, access, identity, authority, response,
successor, RP-013, post-ending content, image/media operation, reveal,
schedule, automation, production-stage replay, maturity advance, or
`FIRST RUN COMPLETE` claim is authorized.

Protected repository QA, PDF, training, browser/profile/save, hidden lore,
media, user state, and every predecessor root remain forbidden. Released
rollback remains `3e3da60`; this authority creates no product rollback or
save migration.

Mission ran no related/full test, validator, build, preview, served request,
browser, external-root command, diagnostic execution, E2E, summary, verifier,
PBA/media operation, or cleanup command; inspected no protected, predecessor,
user, or media state; and changed no product or maturity control.

Mission Captain signs **`FIRST RUN SHELL READY / ONE DIAGNOSTIC-CONTROL
VERIFICATION / FRSH-003-v1-VR-13`** while preserving release state
**`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**.

The dedicated Mission commit and synchronization proof are reported from Git
after commit because this artifact cannot contain the hash that first contains
itself.
