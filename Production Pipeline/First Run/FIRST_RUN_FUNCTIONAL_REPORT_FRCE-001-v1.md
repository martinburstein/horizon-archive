# First Run Functional Report / FRCE-001-v1

Date: **2026-08-10**
Role: **Combat Engineer**
Disposition: **REVISE**

## Candidate identity

- Shell: `FIRST RUN SHELL READY / FRSH-001-v1`
- Directorial treatment: `DIRECTORIAL LOCK / FRDT-001-v1`
- Player-experience blueprint: `PLAYER EXPERIENCE READY / FRPX-001-v1`
- Work Order: `WORK ORDER READY / FRWO-001-v1`
- Combat source: committed `5324724f00fba6ef848e9a3fbfb1f85291fc8722`
- Bounded product/test candidate commit:
  `f47855c5d676da8938e4a654becab1a02345f3ad`
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
- Launcher contract tests exercise a genuinely missing `npm` prerequisite and
  prove a clear nonzero exit without waiting for input.

## Validation evidence

| Gate | Result |
|---|---|
| Focused opening/logic/transition/return/Tour/City/package suite | **54/54 PASS**, about `0.2s` |
| Related opening/workload/evidence/Tour/City/Civic/Calibration suite | **148/148 PASS**, `0.70s` |
| Cold full `npm test` after final fixes | **953/953 PASS**, `16.58s` |
| Curriculum/readiness validators | **40/40 PASS** |
| Production build | **PASS**, `216` modules |
| TD-012 fixture build | **PASS**, `57` modules |
| `PBA-TD012-v1` candidate | **PASS**: JS `1,661,051` bytes; CSS `119,662` bytes; media `17` files / `37,410,731` bytes; zero new media |
| Served identity | **PASS**: root/deep/JS/CSS HTTP; deep fallback exact; JS/CSS served bytes equal disk |
| Affected canonical browser run | **PASS**, `55.9s`, zero runtime errors |
| Live affected states | **PASS** at `1920x1080`, `1366x768`, `390x844`, and `768x900` effective `200%`; keyboard, pointer, forced colors, reduced motion, target, focus, inertness, containment, cancel, and resume checks |
| Cleanup | **PASS**: owned QA temp directories removed; ports `4173`, `4184`, and `5190` clear |
| Protected-path proof | **PASS**: protected untracked entries remain uninspected, unstaged, and unchanged |

## Performance and media

The final build stays inside the fixed PBA with 216 modules. CSS is 77 bytes
above the predecessor candidate but remains within the accepted cap; the added
bytes provide City entry hierarchy, target sizing, and visible forced-colors
focus. Exact accepted runtime media count and bytes remain unchanged. No
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

`FRCE-VAR-001` is a **blocking validation deficiency**, not an accepted shell
variance. `playtest/e2e-playthrough.mjs` now proves the final opening, retries,
pending Witness reload, direct City, immediate cleared-frontier reload, and
affected City states, but it still stops at City. It does not exercise the
exact RP-001 predecessor, RP-002 through RP-012 later rail, or MH-40 in the
same canonical browser journey.

The existing TD-002 through TD-012 review fixtures are intentionally isolated
from production and cannot truthfully substitute for that canonical journey.
Full tests prove those released controllers remain green, but controller and
closed-fixture evidence is not the shell-mandated clean-start-to-MH-40 E2E.
No test was weakened and no second overlapping whole-game run was claimed.

## Rollback and hard stop

The bounded code/test/report commit can be reverted without migration or user
state repair; opening save v1 and later save schemas are unchanged. Reversion
restores the predecessor launcher/opening/credits behavior. No media,
dependency, learning, route-controller, or protected-state rollback is needed.

Because `FRCE-VAR-001` violates the explicit FRSH definition of done and stop
condition, this candidate is **REVISE**. It is not handed to Quartermaster.

## Commit and push synchronization

- Product/test candidate: `f47855c5d676da8938e4a654becab1a02345f3ad`
- Report/handoff control: the dedicated commit containing this report and the
  synchronized `NEXT_INSTANCE_HANDOFF.md`
- Branch: `main`
- Required post-push proof: `git rev-parse HEAD` equals
  `git rev-parse origin/main`; protected untracked entries remain unstaged.

## Exact next action

Combat Engineer must extend the one existing non-overlapping canonical E2E so
the same clean-start context completes/restores City, enters the exact verified
RP-001 predecessor, traverses the released RP-002 through RP-012 rail, proves
both equal MH-40 outcomes only with proportionate sanctioned fixtures where
the shell permits them, asserts `successor=null` and zero world/authority
delta, then reruns the affected E2E, build/PBA/served-identity/cleanup gates.
Only after that passes may Combat change the disposition to
`PRODUCTION FUNCTIONAL` and issue the exact Quartermaster handoff.
