# First Run Functional Return - Single Diagnostic-Control Verification

Return ID: `FRCE-003-v1-VR-13`

Disposition: **`HOLD / DIAGNOSTIC FALSE-PATH CONTRACT / NO RERUN / RETURN TO
FRESH MISSION / FRCE-003-v1-VR-13`**

Stage gate: **`HOLD / PRODUCTION FUNCTIONAL NOT ISSUED`**

Release state remains: **`HOLD / RELEASE GATE FAILURE / FRAB-003-v1`**
until fresh Intelligence independently adjudicates this exact candidate and
evidence.

Stage / stable agent: Combat Engineer / `combat_engineer`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Operative evidence shell: `FRSH-003-v1-VR-07`

Diagnostic correction shell / return: `FRSH-003-v1-VR-12` /
`FRCE-003-v1-VR-12`

Single-run verification shell: `FRSH-003-v1-VR-13`

Combat start source:
`144db318edc9eb261ddb69f89264b72e76c94fa6`

Exact diagnostic-control candidate:
`ce7c9abbaf1d0ffad8c1031f0398750676d4970e`

Exact immutable content candidate:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b`

Validation control: `4cd7fbf31291671dd28c0743b44a7c49aaad82bb`

Accepted evidence predecessor:
`ca89a679195c11d441a76e6c02983a6436f2ccb2`

Recorded: `2026-08-10 11:49:45 -04:00`

## Outcome

Combat ran the complete deterministic ladder from the beginning, then one and
only one complete E2E in one fresh contained OS-temp root. The E2E passed,
emitted exactly one live summary, and the exact independent manifest verifier
passed on its first and only invocation. However, the same run's automatic
diagnostic transport reported `failureCount=96` while `focusPass=true` and
`layoutPass=true`. Bounded static inspection after cleanup proves those 96
paths are false diagnostic failures caused by a field-meaning mismatch. The
VR-12 diagnostic correction is therefore **not verified**.

Combat classifies this as **`REQUIRED CORRECTION / EVIDENCE CONTROL / OPEN`**.
The summary and verifier success remain truthful evidence from the only run,
but they cannot convert a self-contradictory diagnostic-control candidate into
a verified correction. Per VR-13, Combat performs no repair and no rerun,
issues `HOLD`, and returns to a fresh Mission Captain. No product, test,
manifest, E2E, content, media, fixture, dependency, curriculum, save, route,
ending, map, scoreboard, or maturity control changed. This is not release
acceptance, a maturity advance, a Quartermaster replay, or `FIRST RUN
COMPLETE`.

## Identity, integrity, and protected-boundary proof

- Combat began with `HEAD == origin/main == 144db318edc9eb261ddb69f89264b72e76c94fa6`.
- Product, validation, evidence predecessor, and diagnostic candidate all
  resolve as ancestors of the start source.
- Candidate `ce7c9ab` has exact parent `d63a23104884978cd0c8943b6419b1c49a1458f9`
  and changes exactly:
  - `Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json`;
  - `horizon-archive-game/test/sixfoldWeir.test.js`; and
  - `playtest/e2e-playthrough.mjs`.
- Frozen product blobs remained exact: `App.jsx`
  `802ceffb1a07c3b166dc2f7f06ab38138dc37596` and `drownedArchive.js`
  `1bc2f9d93c59a396ddee7ed83cde1600f76b62e7`.
- Validation-control test blob remained
  `d71452e6bb5e8ab5d846b8a8ec4f8b12832b03ae` at `4cd7fbf`.
- Accepted predecessor blobs remained manifest
  `786663223f75cb3a88503c50373e79f3c5c5cf26` and E2E
  `a322016aac859f385d81dd368845de7d5bde4e5b` at `ca89a679`.
- Current diagnostic-control blobs remained byte-exact to `ce7c9ab`: manifest
  `d9d3491067f072ec2f68dd4159eb4040d47d45ff`, E2E
  `5e63e3fd36ce0d59d276a6bc3324cc15ce03bdb2`, and static test
  `38ea5255a1713740094ab4ee3b36e7b78389bbe0`.
- The committed manifest parsed as exact schema `FRRC-002-v1`, thirteen
  entries, forty sorted validators, and one complete E2E policy.
- `node --check playtest/e2e-playthrough.mjs`, tracked-drift proof, relevant
  post-candidate drift proof, and `git diff --check` passed.
- Protected repository QA, PDF, training, browser/profile/save, hidden lore,
  media, user state, and the disclosed predecessor root were not inspected,
  enumerated, reused, modified, moved, or deleted. Their three known untracked
  repository entries remained unstaged and untouched.

## Complete deterministic ladder

| Gate | Fresh Combat result |
| --- | --- |
| Integrity/static | **PASS**; exact ancestry, three-file boundary, frozen blobs, manifest identity, `node --check`, no tracked/relevant drift, `git diff --check` |
| Focused | **68/68 PASS**; Node duration `176.1711ms` within `30s` |
| Related | **74/74 PASS**; Node duration `2411.7306ms` within `60s` |
| Cold full | **972/972 PASS**; Node duration `13260.4401ms` within `60s` |
| Validators | **40/40 PASS**; exact sorted repository-relative inventory, wall `3448ms` |
| Production build | **PASS**; `217` modules; Vite `6.53s`; command wall `7.6s` |
| TD-012 fixture build | **PASS**; `57` modules; Vite `744ms`; command wall `1.8s` |
| PBA | **PASS**; JavaScript `1,667,393`, CSS `119,247` |
| Immutable media / maps | **PASS**; `17 / 37,410,731`; `0` source maps |
| Dependency / product / request static | **PASS**; no dependency drift, runtime-product drift, or runtime request surface; exact same-origin live gate retained |
| Performance contracts | **PASS static identity**; journey `<180s`, sampled task `<=100ms`, Sixfold activation `<=2ms` retained |
| Served identity | **2/2 PASS**; production and fixture root/deep/JavaScript/CSS byte-equal to disk |

The PBA values remained below current exact caps: narrow JavaScript
`1,675,664`, narrow CSS `119,281`, global JavaScript `1,703,258`, and global
CSS `119,672`.

Owned preview identity was exact:

- production `127.0.0.1:4173`, PID `51452`, index `551` bytes, assets
  `index-CgBMczBD.css` and `index-rzLfTFj0.js`;
- TD-012 fixture `127.0.0.1:4184`, PID `45324`, index `362` bytes, assets
  `index-CcVWsWzb.js` and `index-CgBMczBD.css`.

No live root or browser existed before every deterministic gate and served
identity passed.

## Sole fresh-root E2E

Combat created exactly one previously nonexistent root:

`C:\Users\marti\AppData\Local\Temp\horizon-archive-frrc002-8a50b403-6ca1-4e15-8768-0c7753450281`

Before use, its resolved identity, direct parent equal to resolved OS temp,
temp-descendant relation, repository exclusion in both directions, and
distinction from the disclosed predecessor root all passed. The injected
identities were exactly product `a91763e`, probe `ce7c9ab`, validation
`4cd7fbf`, and evidence predecessor `ca89a679`.

`FRRC-002-v1.entries.complete-e2e` was invoked exactly once:

- exit: `0`;
- wall: `57,709ms` within `180s`;
- canonical journey: `56.937s`;
- maximum sampled main-thread task: `0.2999999523162842ms`;
- Sixfold activation: `0.2999999523162842ms`;
- runtime errors: `false`;
- focus aggregate: `true`;
- layout aggregate: `true`; and
- no rerun, retry, abort, overlap, or second root occurred.

### Automatic diagnostic transport observation

The E2E automatically printed the diagnostic transport before its live
success branch. Combat did **not** open or read
`first-run-live-diagnostic.json`, because VR-13 permits that file read only on
E2E failure. The diagnostic was not summary, verifier input, acceptance
evidence, maturity evidence, or a retry oracle.

The printed transport must not be hidden or reinterpreted. It reported:

- `schema=horizon.first-run.live-diagnostic.v1`;
- exact product/probe/validation/evidence identities;
- `diagnosticContract=FRSH-003-v1-VR-12`;
- `checkInventoryExact=true`;
- `focusPass=true`;
- `layoutPass=true`; and
- `failureCount=96`.

The exact 96 printed `failurePaths` are sixteen paths for each of the six
ordered layout IDs `desktop`, `laptop`, `narrow`, `effective-200`,
`retained-320x180`, and `retained-320x240`. For each ID the ordered suffixes
are exactly:

```text
geometry.post.image.border.bottom
geometry.post.image.border.left
geometry.post.image.border.right
geometry.post.image.border.top
geometry.post.image.padding.bottom
geometry.post.image.padding.left
geometry.post.image.padding.right
geometry.post.image.padding.top
geometry.pre.image.border.bottom
geometry.pre.image.border.left
geometry.pre.image.border.right
geometry.pre.image.border.top
geometry.pre.image.padding.bottom
geometry.pre.image.padding.left
geometry.pre.image.padding.right
geometry.pre.image.padding.top
```

Each complete path is `layouts.<ordered-id>.<suffix>`, yielding exactly
`6 x 16 = 96`. The concise transport did not include expected/actual values or
`failuresByLayout`, and the successful E2E branch prohibited reading the
diagnostic file to obtain them. The diagnostic file was therefore never read.

Post-cleanup static inspection of the exact committed E2E localizes the
control defect without using the diagnostic file:

- `captureSixfoldGeometry` builds `border` and `padding` from
  `labelStyle` at current lines `2261-2267` and returns those `1px` label box
  values as `image.border` / `image.padding` at line `2345`;
- the real image-edge gate separately reads `imageStyle` and correctly passes
  `zeroImageEdges` at lines `2310-2311`; and
- `buildSixfoldLiveDiagnostic` expects each captured
  `geometry.image.border/padding` leaf to equal `0` at lines `2037-2040`.

The diagnostic therefore compares the label's exact `1px` border/padding to
the image's expected zero-edge values in both phases of every layout. This
explains the exact `6 layouts x 2 phases x 2 groups x 4 edges = 96` false
paths while the true direct image-edge gate and layout aggregate pass. The
diagnostic is localization-only and remains forbidden as verifier, release,
or maturity evidence, but its deterministic false-path contract is a gating
evidence-control defect for the objective of this verification.

## Exactly one summary and one independent verifier

The sole successful E2E emitted exactly one
`first-run-live-summary.json`:

- bytes: `312,564`;
- SHA-256:
  `04919AC83D83F0F9759ABBFDF6119990E9A7961DB0F21A097DEA49D59B8E0533`;
- schema/producer: `horizon.first-run.live-summary.v1` /
  `playtest/e2e-playthrough.mjs`;
- Work Order/shell/manifest: `FRWO-003-v1` / `FRSH-003-v1-VR-07` /
  `FRRC-002-v1`;
- product/probe/validation: exact `a91763e` / `ce7c9ab` / `4cd7fbf`;
- Chromium: `148.0.7778.96`;
- lattice: `q=1/64`, `floor`, `epsilon=false`;
- ordered layouts: desktop, laptop, narrow, effective-200,
  retained-320x180, retained-320x240, all `pass=true`;
- focus and input aggregates: all `true`;
- PBA: narrow/global/media identity/runtime requests all `true`, Sixfold
  activation `0.2999999523162842ms`;
- journey: complete, both MH-40 outcomes, equal dignity, null deltas, and
  `successor=null`; and
- top-level `pass=true` with zero runtime errors.

The exact manifest `live-summary-verify` entry was invoked exactly once with
that summary as its only live evidence input. It returned exit `0` in `62ms`
and independently reported exact product/probe identity, six layouts, and
`pass=true`. The diagnostic was never verifier input. No second verifier or
second summary was created.

## Cleanup and hard-stop proof

- The E2E-owned Chromium closed in the E2E `finally` block before exit.
- Exact preview PIDs `51452` and `45324` were stopped after port/PID ownership
  proof.
- Ports `4173` and `4184` are clear.
- Root identity, direct-parent containment, descendant containment, and
  repository exclusion were repeated before deletion.
- Only the exact owned root was recursively deleted through literal
  `System.IO.Directory.Delete`; it is absent.
- Four exact `ha-combat-{prod|fixture}-0803c26e-...` preview log files were
  deleted through literal `System.IO.File.Delete`; none remains.
- One combined cleanup command and one later `Remove-Item` file-cleanup
  command were policy-blocked before execution. One narrower containment
  command had a PowerShell parse error before execution. No blocked/invalid
  command changed state. The exact policy-supported literal operations then
  completed the same bounded cleanup successfully.
- No predecessor root, protected repository QA, PDF, training, user browser,
  profile, save, hidden lore, media, or unrelated process/path was touched.

## Variance, scope, maturity, and exact handoff

Variance: **`REQUIRED CORRECTION / EVIDENCE CONTROL / OPEN`**. The diagnostic
path inventory maps image-edge expectations onto label border/padding values,
creating 96 deterministic false failures on an otherwise passing run. No
runtime product defect is established. The earliest implementation discipline
is Combat Engineer, but VR-13 authorizes no repair after the sole attempt and
requires failure return through Mission.

Only this versioned Combat return and `NEXT_INSTANCE_HANDOFF.md` change in
this stage. There is no product/content placeholder delta for Quartermaster,
no Image Specialist work, no Host 06-15 or City expansion, no media/image
operation, no successor/RP-013/post-ending content, no schedule/reveal, and no
maturity or release-map/scoreboard advance.

Exact next owner is a **fresh Mission Captain**. Adjudicate the exact 96-path
diagnostic false-positive defect against VR-12/VR-13, preserve the truthful
single-run summary and verifier results without treating them as a correction
waiver, and issue one bounded shell `HOLD` or evidence-control correction
authority to the earliest responsible implementation owner. Do not run or
authorize a second E2E under the current shell, use the diagnostic as
acceptance evidence, repair product, begin Quartermaster or Image, inspect
protected/predecessor/user state, or advance maturity.

The dedicated report/handoff commit and final `HEAD == origin/main` proof are
reported from Git after commit because this artifact cannot contain the hash
that first contains itself.
