# First Run Shell Variance Reissue - Corrected Diagnostic-Control Verification

Variance ID: `FRSH-003-v1-VR-15`

Disposition: **`FIRST RUN SHELL READY / ONE FIELD-SOURCE-CORRECTED
DIAGNOSTIC-CONTROL VERIFICATION / FRSH-003-v1-VR-15`**

Stage gate remains: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Diagnostic / prior verification / correction shells: `FRSH-003-v1-VR-12` /
`FRSH-003-v1-VR-13` / `FRSH-003-v1-VR-14`

Immediate return: `FRCE-003-v1-VR-14`

Mission source inspected: `4f69bd05b07a925bce8980cf33f1e4467dad3d42`

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

Mission independently accepts exact candidate `2cccbfe` and issues **READY
for one fresh Combat-owned verification only**. The corrected candidate
satisfies VR-14 while preserving the runtime product, validation control,
accepted evidence predecessor, direct live predicates, summary schema,
independent verifier, thresholds, identities, and one-complete-E2E rule.

This reissue authorizes a fresh Combat Engineer to run the exact complete
deterministic ladder from the beginning and, only after every deterministic
gate passes, exactly one complete E2E in one new contained external GUID root.
It is not functional acceptance, release acceptance, production-stage replay,
or maturity advancement. No failed gate may be repaired or rerun under this
authority.

## Independent candidate adjudication

Candidate `2cccbfe` has exact parent `e44e2c7`, includes predecessor
`ce7c9ab` in its ancestry, and changes exactly:

- `playtest/e2e-playthrough.mjs`;
- `Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json`;
  and
- `horizon-archive-game/test/sixfoldWeir.test.js` inside its existing
  FRRC-002 test, with no added test and unchanged focused count.

The E2E creates four distinct unrounded `Number.parseFloat` edge objects.
Image border and padding come only from `imageStyle`; label border and padding
come only from `labelStyle`. Label text geometry, `labelBorderExact`, and
`labelPaddingExact` use only the label objects. `zeroImageEdges` uses only the
image objects. Raw output stores them only under their separate
`geometry.image.*` and `geometry.label.*` fields.

For each of six frozen layouts, two phases, four edges, and both edge groups,
the diagnostic retains exact image-zero checks with owner `source` and adds
parallel exact label-one checks with owner `geometry`: **96 image checks and
96 label checks**. They enter the same predeclared required-path set, emitted
path set, uniqueness proof, fixed layout-plus-lexical sort, complete false-
check list, and per-layout grouping. All check owners remain within
`semantic | focus | geometry | source | aggregate`.

The manifest freezes that separation without changing `FRRC-002-v1`, its
thirteen ordered entries, commands, timeouts, owners, forty sorted validator
invocations, one-E2E policy, output ownership, summary/verifier separation,
cleanup, thresholds, or failed-run no-retry boundary. The diagnostic remains
failure localization only: `release_evidence=false`, `verifier_input=false`,
and `failed_e2e_authorizes_retry=false`.

## Mission proof

- Before this reissue, local and remote synchronization was exact:
  `HEAD == origin/main == 4f69bd05b07a925bce8980cf33f1e4467dad3d42`.
- Product `a91763e`, validation `4cd7fbf`, accepted evidence `ca89a679`, and
  diagnostic predecessor `ce7c9ab` are all ancestors of candidate `2cccbfe`.
- Candidate blobs are manifest
  `fc91a863be99b11c44405071324e3502b959e621`, E2E
  `0b72f1463c729a8e22337af0115c3316652c2565`, and static test
  `5910af4e4f6754acbc5193ff021f374fe90a96f2`; current blobs are identical.
- Exact predecessor blobs remain manifest
  `d9d3491067f072ec2f68dd4159eb4040d47d45ff`, E2E
  `5e63e3fd36ce0d59d276a6bc3324cc15ce03bdb2`, and static test
  `38ea5255a1713740094ab4ee3b36e7b78389bbe0`.
- Frozen product blobs remain `App.jsx`
  `802ceffb1a07c3b166dc2f7f06ab38138dc37596` and `drownedArchive.js`
  `1bc2f9d93c59a396ddee7ed83cde1600f76b62e7` at both product and current
  source. Validation test blob remains
  `d71452e6bb5e8ab5d846b8a8ec4f8b12832b03ae`; accepted evidence blobs
  remain manifest `786663223f75cb3a88503c50373e79f3c5c5cf26` and E2E
  `a322016aac859f385d81dd368845de7d5bde4e5b` at their frozen commits.
- Exact candidate `git diff --check`: **PASS**. Candidate-to-current drift in
  the three corrected files is empty, and frozen product drift is empty.
- FRRC JSON parse: **PASS**; exact `FRRC-002-v1`, thirteen ordered entries,
  forty exactly named and repository-path-sorted `--self-test` validators,
  and `e2e_invocations=1`.
- `node --check playtest/e2e-playthrough.mjs`: **PASS**.
- Exact manifest focused command was invoked once: **68/68 PASS**; Node
  duration `165.7208ms`, wall `223.2773ms`, within `30s`. This independently
  corroborates Combat's reported `68/68` at `200.4442ms`.

One initial PowerShell JSON-inspection form used the unavailable
`ConvertFrom-Json -AsHashtable` parameter and stopped before parsing. The
supported parse then passed. Two initial read-only `git diff` forms supplied
an unexpanded revision expression and printed usage without comparing data;
the explicit revision-range checks then passed. These command-shape issues
ran no test or product operation and changed no state. The focused command
was not rerun.

## Exact fresh Combat verification authority

Combat must begin from the synchronized commit containing this reissue, read
its complete profile, VR-07, VR-12, VR-13, VR-14, VR-15,
FRCE-003-v1-VR-12 through VR-14, current FRAB-003, current handoff, and the
exact committed manifest/E2E/static test. It must preserve these identities:

```text
HORIZON_ARCHIVE_PRODUCT_CANDIDATE = a91763e28d488f31f8cf7d40ece0b2682246ba9b
HORIZON_ARCHIVE_PROBE_CANDIDATE   = 2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc
diagnostic-control predecessor    = ce7c9abbaf1d0ffad8c1031f0398750676d4970e
validation control                = 4cd7fbf31291671dd28c0743b44a7c49aaad82bb
accepted evidence predecessor     = ca89a679195c11d441a76e6c02983a6436f2ccb2
```

Combat may make no implementation, test, manifest, product, content, CSS,
module, fixture, dependency, lockfile, curriculum, evaluator, save, story,
route, map, scoreboard, maturity, or media change. After the attempt it may
write only one versioned Combat verification return and
`NEXT_INSTANCE_HANDOFF.md`.

Run the complete current deterministic ladder once from the beginning:

1. exact ancestry, three-file candidate boundary, frozen blob/identity,
   forbidden-change, protected-boundary, tracked-drift, JSON, `node --check`,
   and `git diff --check` preflight;
2. exact focused command within `30s`, requiring `68/68`;
3. exact related command within `60s`, requiring `74/74`;
4. cold full suite within `60s`, requiring `972/972`;
5. exactly forty sorted validator self-tests, requiring `40/40`;
6. exact production and TD-012 fixture builds, requiring `217/57` modules;
7. current FRRC PBA, exact `17 / 37,410,731` media, offline/request,
   dependency, source-map, performance, and immutable-media gates;
8. owned previews at `127.0.0.1:4173` and `:4184`, followed by exact
   root/deep/JavaScript/CSS served identity; and
9. exact PID, port, candidate, fresh-root, and containment pre-live proof.

Any deterministic failure is immediate **HOLD / NO E2E / NO RERUN**. Clean
only exact owned resources, record the earliest failed gate, perform no
repair, and issue a synchronized return.

## Sole fresh-root E2E and exact evidence branching

Only after all deterministic gates pass may Combat create exactly one
previously nonexistent GUID-named direct child of the resolved OS temp root.
Before use and cleanup, prove resolved identity, direct-parent/descendant
containment, and bidirectional repository exclusion. It must be outside the
repository and distinct from every disclosed predecessor root. Never inspect,
enumerate, reuse, mutate, move, or delete a predecessor root.

Invoke exact `FRRC-002-v1.entries.complete-e2e` **once** within `180s` using
the frozen identities and that root. No real browser profile, campaign save,
user state, overlapping run, partial rerun, or second E2E is permitted.

- **If E2E fails, aborts, times out, or omits a valid success summary:** issue
  **HOLD / NO RERUN**. Read only that owned root's exact
  `first-run-live-diagnostic.json`; record every failure path, expected value,
  actual value, and diagnostic owner without hiding or collapsing any path.
  Route the earliest responsible workflow owner supported by those exact
  values; if ownership is mixed or ambiguous, return to a fresh Mission
  Captain for bounded adjudication. The diagnostic is not a retry oracle,
  summary, verifier input, acceptance evidence, or maturity evidence. Run no
  verifier and no retry.
- **If E2E succeeds:** require the same run's one diagnostic to have exact
  `checkInventoryExact=true` and `failureCount=0`, and require exactly one
  machine-owned `first-run-live-summary.json`. Only then invoke the exact
  independent `live-summary-verify` once with that summary as its sole live
  evidence input. Acceptance requires exactly one passing verifier. Any
  missing/extra diagnostic or summary, false inventory, nonzero failure count,
  diagnostic/summary substitution, verifier failure, extra verifier, identity
  drift, or cleanup failure is **HOLD / NO RERUN**.

After either branch, close only owned browser/processes, stop only recorded
preview PIDs, prove ports `4173` and `4184` clear, repeat containment proof,
and remove only the exact owned GUID root using a policy-supported literal
method. Disclose any policy-level cleanup limitation without touching any
other root.

On complete PASS, Combat issues **`DIAGNOSTIC-CONTROL VERIFICATION PASS /
RETURN TO FRESH INTELLIGENCE / FRCE-003-v1-VR-15`**, commits its report and
handoff, pushes, proves `HEAD == origin/main`, and routes fresh Intelligence
to adjudicate the exact candidate plus the one summary/verifier evidence
without another E2E. Any failure gets a versioned HOLD return and the exact
owner routing above.

## Frozen boundaries and Mission signature

All product, threshold, layout predicate, summary/verifier meaning, learning,
evidence/privacy, save/reload/return, route, world, identity, authority,
reward/access, both equal MH-40 outcomes, null deltas, `successor=null`,
ending, PBA/offline/performance, external-root, cleanup, and media boundaries
remain exact. Immutable media remains `17 / 37,410,731`; no media operation
or reveal is authorized.

No Host 06-15, City repair, lesson, branch, successor, RP-013, post-ending
content, Quartermaster/Image replay, release, maturity advance, schedule,
automation, or `FIRST RUN COMPLETE` claim is authorized. Protected repository
QA, PDF, training, browser/profile/save, hidden lore, media, user state,
predecessor roots, and unrelated external roots remain forbidden.

Mission ran no related/full test, validator, build, PBA/media scan, preview,
served request, port/PID operation, browser, external-root command, diagnostic,
E2E, summary, verifier, cleanup, media, or product operation; inspected no
protected, predecessor, media, or user state; and changed no implementation or
maturity control.

Mission Captain signs **`FIRST RUN SHELL READY / ONE FIELD-SOURCE-CORRECTED
DIAGNOSTIC-CONTROL VERIFICATION / FRSH-003-v1-VR-15`** while preserving stage
and release **HOLD**.

The dedicated Mission commit and final synchronization proof are reported
from Git after commit because this artifact cannot contain the hash that first
contains itself.
