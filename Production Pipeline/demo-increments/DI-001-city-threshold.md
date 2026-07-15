# DI-001 — City Threshold protected staging pass

## Identity

- Rail Packet: `RP-001 — City Threshold`
- Working cycle: 1
- Status: `IN DEMO — PARTIAL`
- Starting commit: `dc2d825`
- Ending commit: `dc2d825` (Player documentation/evidence changes remain uncommitted)
- Playable URL: `http://127.0.0.1:4173/?staging=rp001`
- Team 1 railhead at review: `RP-002 — seeded; A1 pending`
- Team 2 live-demo position before increment: `Accepted baseline — Witness Corridor complete -> THE CITY BENEATH / Prologue complete credits`
- Ordered Advance lead before increment: `1 packet — RP-002 seeded`

## Player-visible delta

The protected route now lets a player cross from accepted prologue credits into the City Threshold, compare the maintenance/map and environmental/record boundaries, complete the PY-020 local-record probe and CUM-01 gate, record an expedition-only anchor, reload into `SC-02-50`, and expose the reversible civic-district route without a physical city response. Exact `640 × 480` presentation is not release-ready because the lower interface and forward control are clipped.

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

- Repaired issue IDs: Pending `RP001-P1-001`.
- Runtime behavior changed: Pending.
- State/save changes: None requested.
- Recovery behavior: Preserve the verified checkpoint behavior.
- Files/systems: Expected narrow scope is canonical frame selection and RP-001 narrow-layout selectors only.
- Regression coverage: Add rendered browser assertions for settled `640 × 480` and `320 × 240` containment and visible focus.
- Remaining known bugs: `RP001-P1-001`.
- Build identity: Pending.
- Demo reload confirmed: Pending.

## Aesthetic Agent review

- Live build reviewed: Pending W2 repair/reload.
- PNG size/crop/scale findings: Player finding `RP001-AESTH-001` reserved.
- Pixel density/resampling findings: Pending.
- Detail-level consistency: Pending.
- Hierarchy and unwanted emphasis: Pending.
- Composition/palette/contrast: Pending.
- Seams/clipping/stretching/aspect ratio: Pending.
- First-person and `640 × 480` findings: Rough plate contains visible suited figures; canonical crop is owned by `RP001-P1-001` first.
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
- Player bug disposition: `RP001-P1-001 — OPEN`.
- Aesthetic finding disposition: `RP001-AESTH-001 — RESERVED FOR W3`.
- Exact viewport and asset invariants: `320 × 240 PASS`; `640 × 480 FAIL`.
- Keyboard/focus: Required controls activate by Enter, but canonical focus is offscreen under `RP001-P1-001`.
- Names/errors/live regions: Persistent ownership/status copy present; no runtime error observed.
- Reduced motion/color independence: CSS contains a reduced-motion stop rule; live emulation still pending.
- Target size/reflow: Narrow forward target is exactly `72 × 44`; canonical target is clipped by the frame defect.
- Privacy/recovery: PY working source cleared on reload; bounded `10/10` evidence resumed; final reload restored `SC-02-50`.
- Manual checks remaining: W2 live repair verification, reduced-motion emulation, forced colors, screen reader, switch control, and W3 art review.
- Verdict: `REVISE`

## Validation

- Focused tests: `node --test test/cityThresholdExercise.test.js` — `7/7 PASS`.
- Full game suite: Not rerun in W1 strict scope; A5 handoff recorded `242/242 PASS`.
- Curriculum validators: PY-020 visible failure `1/10`, repair `10/10`, CUM primary miss -> mapped `L-05-07` remediation -> blank primary `16/16` -> blank transfer `16/16` -> claim boundary pass.
- Art builders/invariants: Not run in W1.
- Production build: Preview rebuilt at `dc2d825` before W1; no production changes.
- Browser/E2E: Natural RP-001 browser run completed; no full legacy E2E rerun in the strict W1 pass.
- Runtime errors: None observed.

## Known limitations

- `RP001-P1-001` blocks canonical exact-viewport acceptance.
- `RP001-AESTH-001` remains a known rough-staging art limitation.
- Real assistive-technology and forced-color checks remain manual.

## Packet disposition

- Result: `IN DEMO — PARTIAL`
- Reason: Functional learning/state path completes and resumes, but exact `640 × 480` presentation hides required controls.
- Team 2 live-demo position after disposition: `RP-001 — BUG REPAIR`
- Ordered Advance lead after disposition: `1 packet — RP-002 seeded`
- `STORY_RAIL_MAP.md` updated: `YES — W1 bug-repair state`
- Follow-up packet or defect: `RP001-P1-001`

## Git and demo update

- Checkpoint commits: None; coordinator owns Git.
- `HEAD == origin/main`: Not asserted by Player Agent; tested `HEAD` is `dc2d825`.
- Playable server updated: Rebuilt preview running at port `4173`.
