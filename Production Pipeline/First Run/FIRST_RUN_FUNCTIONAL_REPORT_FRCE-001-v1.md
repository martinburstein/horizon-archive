# First Run Functional Report / FRCE-001-v1

Date: **2026-08-10**
Role: **Combat Engineer**
Disposition: **PRODUCTION FUNCTIONAL**

## Candidate identity

- Shell: `FIRST RUN SHELL READY / FRSH-001-v1`
- Directorial treatment: `DIRECTORIAL LOCK / FRDT-001-v1`
- Player-experience blueprint: `PLAYER EXPERIENCE READY / FRPX-001-v1`
- Work Order: `WORK ORDER READY / FRWO-001-v1`
- Combat source: committed `5324724f00fba6ef848e9a3fbfb1f85291fc8722`
- Bounded product/test candidate commit:
  `f47855c5d676da8938e4a654becab1a02345f3ad`
- Canonical E2E completion repair:
  `5fbb7a0118aa64072eb7426a47ec788481eafe6d`
- Mission source: `0b90108d159bb889b1a5e3b9d81f4f0e7adf56c6`
- Accepted ending remains `TD-012 / PASS - AS BUILT RELEASED` under
  `SS-RP012-MEASURED-HORIZON-v1` with `successor=null`.

## Implemented bounded build

- Added `PLAY_HORIZON_ARCHIVE.cmd` as the quoted, repository-relative,
  prerequisite-checking canonical launcher with nonzero failure propagation.
- Reduced `PLAY_HORIZON_ARCHIVE_DEMO.cmd` to a truthful one-call compatibility
  wrapper that preserves the canonical exit code.
- Added `PLAY_HORIZON_ARCHIVE.md`; reduced `PLAYABLE_DEMO.md` to a compatibility
  pointer. Final Quartermaster prose was not written.
- Replaced temporary opening identities with stable `PROLOGUE_BEAT_n`
  structure and explicit copy-slot hooks without changing opening save v1.
- Kept Drowned work local: Crown/basin state is unchanged and the dry outflow
  is pre-existing. Removed route-appearance and archive-response implications.
- Kept the fallen Witness inert under LOOK/TALK/USE and distinct from the
  Evidence Terminal. Removed response, tracking, listening, pulse, rejection,
  and voice implications from owned Witness states.
- Added one fail-closed projection helper for both completed-prefix resume and
  final Witness continuation. It atomically writes `playing`, scene index `2`,
  exact completed prefix `[meadow, ruins, automaton]`, and
  `pendingSceneId=null` before City can focus.
- Removed the obsolete credits render and City return-to-credits action.
- Added deterministic City heading/status entry, background inertness during
  the local-record overlay, bounded Tab/Shift+Tab behavior, Escape cancel,
  deterministic access-action focus restoration, partial-overlay resume, and
  44px targets. Forced-colors focus was repaired after the live gate exposed
  it.
- Routed E2E captures through an isolated QA directory so validation never
  mutates tracked QA artifacts.
- Repaired the completed City world hotspot so `ENTER CIVIC DISTRICT` advances
  from `SC-02-40` to the existing `SC-02-50` command boundary instead of
  leaving `FOLLOW RECORDED CIVIC ROUTE` unreachable.
- Extended the same clean-start E2E through the real Final Confidence UI,
  exact completed RP-001 predecessor, RP-002 verified restore, the released
  RP-003 through RP-011 predecessor chain, and both RP-012 MH-40 outcomes.

## Authorized files changed

- `PLAY_HORIZON_ARCHIVE.cmd`
- `PLAY_HORIZON_ARCHIVE_DEMO.cmd`
- `PLAY_HORIZON_ARCHIVE.md`
- `PLAYABLE_DEMO.md`
- `horizon-archive-game/src/App.jsx`
- `horizon-archive-game/src/CityThresholdStaging.jsx`
- `horizon-archive-game/src/firstRunOpeningTransition.js`
- `horizon-archive-game/src/styles.css`
- `horizon-archive-game/test/openingFlow.test.js`
- `horizon-archive-game/test/cityThresholdExercise.test.js`
- `horizon-archive-game/test/firstRunOpeningTransition.test.js`
- `horizon-archive-game/test/firstRunPackageContract.test.js`
- `playtest/e2e-playthrough.mjs`
- this report and `NEXT_INSTANCE_HANDOFF.md`

No media, dependency, curriculum, readiness, later-controller, hidden-lore,
protected, or real user-state file was read for evidence or changed.

## State, action, persistence, and recovery evidence

- Unit coverage proves exact completed-prefix projection, malformed/forged/
  noncontiguous rejection, preservation of sanitized evidence, and cleared
  pending state.
- Opening tests prove stable beat identities, final-purpose actions, absent
  credits node/action, Drowned unchanged-world language, and inert Witness
  separation.
- City tests prove heading/status ownership, modal background inertness,
  keyboard containment, cancel/resume focus, obsolete action absence, and
  minimum target size.
- Live canonical production proves direct City persistence before heading
  focus, byte-identical separate City save on arrival, immediate reload at the
  cleared frontier, partial overlay reload, deterministic cancel focus, and no
  runtime errors.
- The single non-overlapping browser context completes Final Confidence through
  its real entry gate and twelve scored items, completes City, and proves the
  live City record is byte-identical to the exact RP-001 predecessor used by
  RP-002.
- Later-rail setup uses test-only sanctioned normal authorities: RP-002 is
  constructed through its protected journey, normal route sanitizer, and
  atomic checkpoint writer; RP-003/RP-004 use their exported exact normal
  records; RP-005 through RP-012 are emitted by their normal controllers. Each
  adjacent predecessor pair is byte-equal before browser installation. No
  closed review harness is claimed as the journey and no production fixture
  seam exists.
- Production accepts the chain through RP-002 verified restore, RP-011, and
  MH-40. READY and NOT YET READY restore in the same browser context with the
  same shell/controller/owner/phase/outcome anatomy/boundary/returns, differing
  only in the local evidence result and exact remediation state. Both preserve
  `successor=null` and null city/world/external/authority deltas.
- Launcher contract tests exercise a genuinely missing `npm` prerequisite and
  prove a clear nonzero exit without waiting for input.

## Validation evidence

| Gate | Result |
|---|---|
| Touched City and Final Confidence suite | **19/19 PASS**, `0.14s` |
| Prior focused opening/logic/transition/return/Tour/City/package suite | **54/54 PASS**, about `0.2s` |
| Prior related opening/workload/evidence/Tour/City/Civic/Calibration suite | **148/148 PASS**, `0.70s` |
| Cold full `npm test` after E2E repair | **953/953 PASS**, `22.91s` |
| Curriculum/readiness validators | **40/40 PASS** |
| Production build | **PASS**, `216` modules |
| TD-012 fixture build | **PASS**, `57` modules |
| `PBA-TD012-v1` candidate | **PASS**: JS `1,661,116` bytes; CSS `119,662` bytes; media `17` files / `37,410,731` bytes; zero new media |
| Served identity | **PASS**: root/deep fallback exact; JS `F983C9F4...D2888C` and CSS `BFD4134C...BAEC7A` served bytes equal disk |
| Single clean-start through MH-40 browser run | **PASS**, `68.388s < 180s`; READY and NOT YET READY; zero runtime errors |
| Live affected states | **PASS** at `1920x1080`, `1366x768`, `390x844`, and `768x900` effective `200%`; keyboard, pointer, forced colors, reduced motion, target, focus, inertness, containment, cancel, and resume checks |
| Cleanup | **PASS**: `12` owned isolated QA temp directories removed; ports `4173`, `4184`, and `5190` clear |
| Protected-path proof | **PASS**: protected untracked entries remain uninspected, unstaged, and unchanged |

## Performance and media

The final build stays inside the fixed PBA with 216 modules. JavaScript is
`1,661,116` bytes and CSS is `119,662` bytes, both within the accepted cap.
Exact accepted runtime media count, bytes, and identity remain unchanged. No
runtime request, package dependency, media file, image generation, or image
editing was added.

## Quartermaster placeholder ledger

The following final-copy slots remain deliberately open and structurally
bounded for Quartermaster after functional acceptance:

- package: `PKG-LAUNCH-HEAD`, `PKG-LAUNCH-BODY`, `PKG-SUPPORT-HEAD`,
  `PKG-SUPPORT-BODY`;
- opening beats: `OPN-B1` through `OPN-B5`;
- Meadow reveal/route prompt;
- Drowned success and reorientation;
- Witness verb, Evidence Terminal, success, and resume states;
- City entry heading/status, locked-route status, and local-record overlay
  labels.

Quartermaster must preserve the approved meanings and may not add response,
reward, access, authority, identity, world change, successor, or host claims.

## Defect and variance classification

`FRCE-VAR-001` is **resolved**. The single clean-start production journey now
reaches both MH-40 outcomes under the exact released later-controller chain.
The City staging transition defect exposed by that extension is a
`REQUIRED CORRECTION` within Combat scope and is repaired without changing the
shell, route meaning, save schema, learning, canon, media, or ending.

No shell variance remains. No test was weakened, no second overlapping
whole-game run was claimed, and no closed review fixture or production fixture
seam substitutes for the canonical browser path.

## Rollback and hard stop

The bounded code/test/report commits can be reverted without migration or user
state repair; opening save v1 and every later save schema are unchanged. No
media, dependency, learning, route-controller, or protected-state rollback is
needed.

The shell definition of done is satisfied. This candidate is
**PRODUCTION FUNCTIONAL** and may proceed only to Quartermaster.

## Commit and push synchronization

- Product/test candidate: `f47855c5d676da8938e4a654becab1a02345f3ad`
- E2E completion repair: `5fbb7a0118aa64072eb7426a47ec788481eafe6d`
- Report/handoff control: the dedicated commit containing this final report
  and synchronized `NEXT_INSTANCE_HANDOFF.md`
- Branch: `main`
- Required post-push proof: `git rev-parse HEAD` equals
  `git rev-parse origin/main`; protected untracked entries remain unstaged.

## Exact next action

Quartermaster must verify exact candidate
`5fbb7a0118aa64072eb7426a47ec788481eafe6d`, read the shell, treatment,
blueprint, this Functional Report, and the placeholder ledger, then resolve or
honestly disposition only the declared final-purpose copy, learning-
presentation, and major content/asset slots. Preserve mechanics, evidence,
focus, state, canon, route order, opening save v1, immutable accepted media,
and the shared `successor=null` MH-40 ending. Issue the versioned First Run
Content and Asset Ledger with `PRODUCTION CONTENT COMPLETE`, `REVISE`, or
`HOLD`; do not perform Image Specialist runtime presentation work.
