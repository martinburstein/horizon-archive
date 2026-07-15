# DI-001 — City Threshold protected staging pass

## Identity

- Rail Packet: `RP-001 — City Threshold`
- Working cycle: 1
- Status: `IN DEMO — PARTIAL`
- Starting commit: `dc2d825`
- Ending commit: `3145e44 + uncommitted W2 repair` (coordinator owns Git)
- Playable URL: `http://127.0.0.1:4173/?staging=rp001`
- Team 1 railhead at review: `RP-002 — seeded; A1 pending`
- Team 2 live-demo position before increment: `Accepted baseline — Witness Corridor complete -> THE CITY BENEATH / Prologue complete credits`
- Ordered Advance lead before increment: `1 packet — RP-002 seeded`

## Player-visible delta

The protected route now lets a player cross from accepted prologue credits into the City Threshold, compare the maintenance/map and environmental/record boundaries, complete the PY-020 local-record probe and CUM-01 gate, record an expedition-only anchor, reload into `SC-02-50`, and expose the reversible civic-district route without a physical city response. W2 repaired the exact `640 × 480` parent/child layout mismatch; the entire world and interface plus focused forward/return controls now remain visible at both exact viewports.

## Five-minute demonstration path

1. Resume the accepted prologue-complete save at `/?staging=rp001` and choose `Open RP-001 staging route`.
2. Inspect the already-running cycles and locked bridge, trace maintenance, compare both boundaries, and inspect the two distinct access surfaces.
3. Establish and cancel the survey point once, then reopen it to demonstrate the bounded overlay and unchanged `continuation` / `city_state_delta=None` status.

## Player Agent evidence

- Loaded puzzles attempted: `SC-02-00 -> 10 -> 20 -> 30 -> 40`, PY-020 `10/10` plus structure explanation, CUM-01 primary with mapped remediation, blank fresh transfer `16/16`, safety/claim explanation, and reload to `SC-02-50`.
- Completed path: Yes. `ENTER CIVIC DISTRICT` reached the successor staging boundary after reload.
- Starting state/save: Valid accepted prologue-complete save produced through the public UI at commit `dc2d825`; staging evidence began clean at `SC-02-00`.
- Bugs found: `RP001-P1-001`.
- Reproduction steps: At exact host viewport `640 × 480`, resume accepted credits, open RP-001, and wait for the canonical frame to settle. The parent reports `data-canonical-layout="narrow"` with `width:320px;height:240px` and scales to approximately the full host, while `.city-threshold-screen` remains on its host-media-query canonical rules. At completed/reloaded `SC-02-50`, the focused `ENTER CIVIC DISTRICT` rectangle is `x=978.34, y=589, w=293.47, h=126.91`, wholly outside the `640 × 480` viewport; the command panel is clipped and the document exposes no scroll recovery. Repeat at exact `320 × 240`: the forward control is correctly `x=248, y=136, w=72, h=44`, the complete `320 × 240` frame is visible, and keyboard Enter activates it.
- Expected versus actual behavior: Expected the full canonical `640 × 480` canvas (`640 × 360` world plus `640 × 120` interface) and visible keyboard focus. Actual behavior double-applies incompatible narrow-parent/canonical-child sizing, crops the interface, and focuses an offscreen route. Exact `320 × 240` is correct.
- Severity and evidence: `P1` because the exact canonical presentation hides required status/return controls and the only completed-state forward action. Evidence: `playtest/rp001-sc02-00-640x480.png`, `playtest/rp001-sc02-40-640x480.png`, `playtest/rp001-sc02-50-640x480.png`, and the passing comparison `playtest/rp001-sc02-50-320x240.png`.
- Clean-play verdict: `REVISE — one P1 canonical-frame bug; no puzzle/state blocker at exact 320 × 240.`
- Aesthetic-only concern: `RP001-AESTH-001` — the labeled A5 rough plate is smooth concept art and visibly contains suited human figures, so it cannot satisfy the locked first-person/no-protagonist/no-ship production-art contract. This known staging limitation did not block the functional run and is reserved for Aesthetic review after W2.

## Coder pass 1 — bug repair and reload

- Repaired issue IDs: `RP001-P1-001 — RESOLVED`.
- Runtime behavior changed: RP-001 no longer chooses canonical/narrow child sizing from host media queries. Its world, interface, hotspots, overlay, and typography now derive from the settled parent `.canonical-game-frame[data-canonical-layout]`. RP-001 clipping containers use non-scrollable clipping so keyboard focus cannot shift the authored world internally.
- State/save changes: None. The completed staging save still restores `SC-02-50`, both atomic flags, unchanged `continuation`, and `cityStateDelta:null`.
- Recovery behavior: The W1 checkpoint/reload contract is unchanged; reload through accepted credits restored `SC-02-50` and the enabled route.
- Files/systems: `src/styles.css`, `src/cityThresholdExercise.js`, and `test/cityThresholdExercise.test.js` only, plus pipeline/work-log records.
- Regression coverage: Added deterministic parent/child layout agreement, exact frame/world/interface projection, completed/reload forward and return containment, focus containment, and non-scrollable focus clipping at exact `640 × 480` and `320 × 240`.
- Browser evidence: settled `640 × 480` uses matching narrow parent/child at scale `1.983`; child `x=2.72..637.27, y=2.05..477.95`, world bottom `358.98`, interface bottom `477.95`, focused route `x=494.48..637.25, y=271.72..358.97`, return `x=415.19..625.38, y=369.91..413.53`. Exact `320 × 240` remains `x=0..320, y=0..240`; focused route remains exactly `x=248, y=136, w=72, h=44`, return is `x=208..314, y=186..208`, and world scroll remains `0,0`.
- Remaining known bugs: None from W1. `RP001-AESTH-001` remains reserved for W3 and was not changed.
- Build identity: base `3145e44` plus uncommitted W2 repair; production assets `index-CPJG972y.js` and `index-EJuHXqOV.css`.
- Demo reload confirmed: `YES — rebuilt preview listening at http://127.0.0.1:4173/?staging=rp001`; browser console warnings/errors: none.

## Aesthetic Agent review

- Live build reviewed: Pending W2 repair/reload.
- PNG size/crop/scale findings: Player finding `RP001-AESTH-001` reserved.
- Pixel density/resampling findings: Pending.
- Detail-level consistency: Pending.
- Hierarchy and unwanted emphasis: Pending.
- Composition/palette/contrast: Pending.
- Seams/clipping/stretching/aspect ratio: Pending.
- First-person and `640 × 480` findings: W2 frame containment is resolved. Rough plate contains visible suited figures and remains W3 review scope.
- Animation invariants: Player observed unchanged city status through navigation, failure, confirmation, and reload; live reduced-motion emulation remains pending.
- Builder richness/functional strangeness: Pending production-art review.
- Accepted findings and acceptance checks: Pending.
- Deferred or rejected findings with reason: Pending.

## Coder pass 2 — aesthetic implementation and final reload

- Implemented aesthetic finding IDs: Pending.
- Asset changes: Pending.
- Layout/rendering changes: Pending.
- Pixel and animation invariants: Pending.
- Gameplay regressions checked: Pending.
- Remaining visual limitations: Pending.
- Final build identity: Pending.
- Final demo reload confirmed: Pending.

## Coordinator release gate

- Loaded puzzle path: Complete in W1.
- Player bug disposition: `RP001-P1-001 — RESOLVED IN W2; coordinator recheck pending`.
- Aesthetic finding disposition: `RP001-AESTH-001 — RESERVED FOR W3`.
- Exact viewport and asset invariants: `320 × 240 PASS`; `640 × 480 PASS` for W2 layout/containment. Production art remains W3 scope.
- Keyboard/focus: Forward and return controls remain fully visible when focused at both exact viewports; Enter activation works and focus cannot scroll the world internally.
- Names/errors/live regions: Persistent ownership/status copy present; no runtime error observed.
- Reduced motion/color independence: CSS contains a reduced-motion stop rule; live emulation still pending.
- Target size/reflow: Narrow forward target is exactly `72 × 44`; canonical target is clipped by the frame defect.
- Privacy/recovery: PY working source cleared on reload; bounded `10/10` evidence resumed; final reload restored `SC-02-50`.
- Manual checks remaining: reduced-motion emulation, forced colors, screen reader, switch control, and W3 art review.
- Verdict: `REVISE`

## Validation

- Focused tests: `node --test test/cityThresholdExercise.test.js test/canonicalFrame.test.js` — `10/10 PASS`.
- Full game suite: W2 rerun `244/244 PASS`.
- Curriculum validators: PY-020 visible failure `1/10`, repair `10/10`, CUM primary miss -> mapped `L-05-07` remediation -> blank primary `16/16` -> blank transfer `16/16` -> claim boundary pass.
- Art builders/invariants: Not run in W1.
- Production build: W2 build passed; preview rebuilt from base `3145e44` plus uncommitted repair, bundle `index-CPJG972y.js` / `index-EJuHXqOV.css`.
- Browser/E2E: W2 live completed-save/reload containment and keyboard-focus checks passed at exact `640 × 480` and `320 × 240`; no full legacy title-to-credits E2E rerun was needed for the isolated CSS repair.
- Runtime errors: None observed.

## Known limitations

- `RP001-P1-001` is resolved; coordinator release validation remains pending.
- `RP001-AESTH-001` remains a known rough-staging art limitation.
- Real assistive-technology and forced-color checks remain manual.

## Packet disposition

- Result: `IN DEMO — PARTIAL`
- Reason: Functional learning/state path completes and resumes and the W1 frame blocker is resolved; production-art and Aesthetic review gates remain before acceptance.
- Team 2 live-demo position after disposition: `RP-001 — AESTHETIC REVIEW`
- Ordered Advance lead after disposition: `1 packet — RP-002 seeded`
- `STORY_RAIL_MAP.md` updated: `YES — W1 bug-repair state`
- Follow-up packet or defect: `RP001-AESTH-001 — W3 review`

## Git and demo update

- Checkpoint commits: None; coordinator owns Git.
- `HEAD == origin/main`: Not asserted by Player Agent; tested `HEAD` is `dc2d825`.
- Playable server updated: W2 production build rebuilt and reloaded at port `4173`.
