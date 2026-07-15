# DI-001 — City Threshold protected staging pass

## 2026-07-15 W1 current photoreal-demo verdict

- **Functional verdict:** `PASS.` A fresh title/save/name/prologue path reached Glass Meadow and opened First Signal at orientation step 1/4. The exact no-credit Demo Tour traversed Drowned Archive, Witness Corridor, and City Threshold; `RESUME CAMPAIGN` restored the open First Signal dialog at the exact unfinished step with `0/3 interfaces` and no visible campaign/mastery credit.
- **Viewport verdict:** exact `640 x 480` contained the approximately `634.55 x 475.91` settled main frame with no overflow. Exact `320 x 240` contained main/body and all tested Tour actions; required targets were at least 44px high.
- **Visual disposition:** `RP001-AESTH-005 — P1 — W3/ART PRODUCTION.` The oversized pixel-era/chroma-derived field-linked Terminal/coupler and the pixel-era route-marker overlay visibly conflict with the new photoreal Glass Meadow and active premium charter. This is not a functional W2 bug; hotspots, screen-only animation, focus, learning state, Tour, and resume remain usable and must be preserved during replacement.
- **W2 handoff:** read-only/no repair. Preserve the passing behavior and hand the reloaded build to W3 Aesthetic Agent for precise overlay replacement findings. This supersedes the temporary browser-infrastructure block and retains the increment's existing `IN DEMO — PARTIAL` disposition pending visual production.

## Identity

- Rail Packet: `RP-001 — City Threshold`
- Working cycle: 1
- Status: `IN DEMO — PARTIAL`
- Starting commit: `dc2d825`
- Ending implementation commit: `28c5f60`
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

- Live build reviewed: W2 handoff build `3145e44 + uncommitted W2 repair` (`index-CPJG972y.js` / `index-EJuHXqOV.css`) and its exact settled-browser measurements were verified from the Coder handoff. The live route was not reopened because W2 explicitly preserved the rough plate, the four exact playtest PNGs expose the unchanged art defects, and `RP001-P1-001` is not reopened.
- PNG size/crop/scale findings: the four reviewed evidence files are exact `640 × 480` or `320 × 240` captures. Their world plate remains a single labeled A5 rough raster; RP-001's required three clean native `640 × 360` plates, three purpose-authored `320 × 180` derivatives, four transparent animation layers, and narrow layer equivalents remain unproduced/unintegrated Working art work.
- Pixel density/resampling findings: `RP001-AESTH-002` records the smooth, high-frequency concept raster against crisp square-pixel interface geometry and its muddy/noisy narrow reduction. This cannot be repaired by CSS scaling or filtering.
- Detail-level consistency: the rough raster's painterly microdetail and soft edges do not match the hard pixel clusters, one-pixel borders, type, focus marks, and status blocks around it.
- Hierarchy and unwanted emphasis: `RP001-AESTH-003` records the large internal `A5 ROUGH PLATE // OVERVIEW // CITY CYCLES INVARIANT` banner as the first visual read and a distraction from world inspection and the lower expedition controls.
- Composition/palette/contrast: the charcoal/amber/violet depth direction is usable evidence for later production, but the suited foreground silhouettes dominate the overlook and falsely make visible occupants the scene's strongest anchors.
- Seams/clipping/stretching/aspect ratio: no new seam, stretching, or aspect-ratio finding is opened from the evidence. W2's exact parent/child containment repair remains accepted unless separately reproduced.
- First-person and `640 × 480` findings: `RP001-AESTH-001` confirms a release-blocking first-person/no-visible-occupant violation. Multiple large suited figures occupy the foreground and midground in `rp001-sc02-40-640x480.png` and both `SC-02-50` captures; smaller figures also appear throughout `rp001-sc02-00-640x480.png`.
- Animation invariants: Player/W2 evidence preserves unchanged city state and continuous geometry through navigation, confirmation, and reload. The required four authored animation layers and reduced-motion stills remain art-production/coordinator validation work.
- Builder richness/functional strangeness: the rough plate conveys scale and heat, but familiar suited people, rails, platforms, and domes are specifically excluded reference traits and weaken the intended visibly operating yet unoccupied Builder-made stewardship network.
- Accepted findings and acceptance checks:
  - `RP001-AESTH-003 — P2 — ACCEPT FOR SAME-PASS W4.` Evidence: the internal rough-plate banner spans the top of `rp001-sc02-50-640x480.png` and remains prominent at `320 × 240`. Action: remove or hide that staging-only banner in every RP-001 scene state without moving world geometry, hotspots, or interface bands. Constraints: preserve all ownership/status copy, persistent no-city-response messaging, focus styling, exact parent/child containment, and route/return geometry. Acceptance: at exact `640 × 480` and `320 × 240`, no `A5 ROUGH PLATE`/internal invariant banner is visible in `SC-02-00/10/20/30/40/50`; required status and controls remain visible and unchanged.
- Deferred or rejected findings with reason:
  - `RP001-AESTH-001 — P1 — DEFER TO ART PRODUCTION; RELEASE BLOCKER.` Exact evidence: the foreground figure centered low in both `SC-02-40/50` views, two large figures at lower left/center, a lower-right figure, and many humanlike figures across spans contradict RP-001 lines 22–24, 82, 105, 178, 190, and 196. Action: replace the rough raster with the locked three-plate/four-layer production package; do not paint over, crop around, blur, or mask figures. Constraints: first-person overlook; no protagonist, ship, body part, reflection, portrait, human trace, or visible occupant; preserve exact hotspot rectangles, empty operational-city reading, invariant city geometry, and already-running cycles. Acceptance: world-only review of every base/detail/completed/return plate and every animation frame at native and narrow sizes finds zero prohibited figures/traces and retains no physical city delta.
  - `RP001-AESTH-002 — P1 — DEFER TO ART PRODUCTION; RELEASE BLOCKER.` Exact evidence: the soft anti-aliased painterly plate and dense microdetail in all three `640 × 480` captures conflict with crisp pixel UI; in `rp001-sc02-50-320x240.png`, city detail collapses into fine speckle while interface borders/type retain hard pixel structure. Action: author the locked native pixel plates and purpose-authored simplified narrow derivatives; do not use automatic downsampling, smoothing, post filters, or an enlarged narrow plate as final scenery. Constraints: square pixels, nearest-neighbor presentation, separate UI/animation layers, exact target maps, Builder input→transformation→distribution→return chain, failure/reroute evidence, three stewardship phases, three scales, and the charcoal/amber/violet doctrine. Acceptance: native and narrow captures show deliberate integer pixel clusters with no smoothing/blur, readable silhouettes at `320 × 180`, consistent detail density against UI/effects, and no enlarged narrow scenery.

## Coder pass 2 — aesthetic implementation and final reload

- Implemented aesthetic finding IDs: `RP001-AESTH-003 — RESOLVED`.
- Asset changes: None. The rough city raster and all production-art dependencies are unchanged.
- Layout/rendering changes: Removed the shared, staging-only `A5 ROUGH PLATE // ... // CITY CYCLES INVARIANT` element and its unused canonical/narrow CSS. Because the element was absolutely positioned, its removal creates no reflow and changes no world, hotspot, overlay, focus, or interface rectangle.
- Pixel and animation invariants: W2 parent/child layout and non-scrollable focus clipping remain intact; cycle layers, reduced-motion rule, world plate, filters, target variables, and animation clocks are untouched.
- Gameplay regressions checked: Shared renderer contains no banner text or class for any `SC-02-00/10/20/30/40/50` state. Focused route/return containment, exact A2 rectangles, board order, evidence gates, atomic commit, privacy sanitizer, reload to `SC-02-50`, `continuation`, and `cityStateDelta:null` regressions pass.
- Browser evidence: At settled exact `640 × 480` and `320 × 240`, banner text match is false and `.city-staging-label` count is zero. Required `SC-02-50 // continuation unchanged // city_state_delta=None` status remains. The exact narrow route remains `x=248,y=136,w=72,h=44`; world/interface bounds and W2 focus containment are unchanged; browser warnings/errors are zero.
- Remaining visual limitations: `RP001-AESTH-001` and `RP001-AESTH-002` remain P1 production-art release blockers. No crop, filter, mask, blur, paint-over, scaling workaround, or acceptance claim was made.
- Final build identity: `28c5f60`; production assets `index-D7ii5z3y.js` and `index-C-koFvjn.css`.
- Final demo reload confirmed: `YES — rebuilt and final-reloaded at http://127.0.0.1:4173/?staging=rp001`, port `4173` PID `90664`.

## Coordinator release gate

- Loaded puzzle path: Complete in W1.
- Player bug disposition: `RP001-P1-001 — RESOLVED IN W2; coordinator recheck PASS`.
- Aesthetic finding disposition: `RP001-AESTH-001/002 — P1 DEFERRED TO ART PRODUCTION; RELEASE BLOCKERS`; `RP001-AESTH-003 — RESOLVED IN W4; coordinator recheck PASS`.
- Exact viewport and asset invariants: `320 × 240 PASS`; `640 × 480 PASS` for W2 layout/containment. W3 production-art invariants fail under `RP001-AESTH-001/002` pending the locked authored asset package.
- Keyboard/focus: Forward and return controls remain fully visible when focused at both exact viewports; Enter activation works and focus cannot scroll the world internally.
- Names/errors/live regions: Persistent ownership/status copy present; no runtime error observed.
- Reduced motion/color independence: CSS contains a reduced-motion stop rule; live emulation still pending.
- Target size/reflow: Narrow forward target remains exactly `72 × 44`; settled `640 × 480` route/return and interface remain contained under the resolved W2 frame contract.
- Privacy/recovery: PY working source cleared on reload; bounded `10/10` evidence resumed; final reload restored `SC-02-50`.
- Manual checks remaining: reduced-motion emulation, forced colors, screen reader, switch control, and production-art review after the authored package exists.
- Verdict: `REVISE — functional staging accepted as partial; production art blocks packet acceptance`

## Validation

- Focused tests: `node --test test/cityThresholdExercise.test.js test/canonicalFrame.test.js` — `11/11 PASS` in W4.
- Full game suite: coordinator rerun `245/245 PASS` at `28c5f60`.
- Curriculum validators: coordinator CUM-01 self-test `PASS` with primary/transfer references `16/16`, blank forms rejected at `0/16`, all 15 objectives/routes/claim/boundary probes; PY-020 visible failure `1/10`, repair `10/10`, CUM primary miss -> mapped `L-05-07` remediation -> blank primary `16/16` -> blank transfer `16/16` -> claim boundary pass.
- Curriculum JSON: `251/251` files parsed.
- Art builders/invariants: Not applicable to W4 banner cleanup; no asset or animation layer changed. `RP001-AESTH-001/002` production-art invariants remain failing/deferred.
- Production build: coordinator build `PASS` at `28c5f60`; bundle `index-D7ii5z3y.js` / `index-C-koFvjn.css`; existing large-chunk advisory remains non-blocking.
- Browser/E2E: W4 live completed-save/reload banner-absence, status-preservation, containment, and keyboard-focus checks passed at exact `640 × 480` and `320 × 240`. Coordinator isolated full title-to-credits E2E at port `5174` passed every reported gate with `credits:true` and `runtimeErrors:false`; incidental legacy QA captures were restored and the isolated server was stopped.
- Runtime errors: None observed.

## Known limitations

- `RP001-P1-001` and `RP001-AESTH-003` are resolved and coordinator-verified.
- `RP001-AESTH-001/002` remain P1 rough-staging production-art release blockers; `RP001-AESTH-003` is resolved.
- Real assistive-technology and forced-color checks remain manual.

## Packet disposition

- Result: `IN DEMO — PARTIAL`
- Reason: Functional learning/state path completes and resumes, the W1 frame blocker is resolved, and accepted W4 banner cleanup passes; deferred production-art release blockers remain before acceptance.
- Team 2 live-demo position after disposition: `RP-001 — IN DEMO PARTIAL / RELEASE BLOCKED ON PRODUCTION ART`
- Ordered Advance lead after disposition: `1 packet — RP-002 seeded`
- `STORY_RAIL_MAP.md` updated: `YES — coordinator partial-release disposition`
- Follow-up packet or defect: `RP001-AESTH-001/002 — deferred production-art release blockers`; `RP001-AESTH-003 — resolved`

## Git and demo update

- Checkpoint commits: Player `3145e44`; Coder bug repair `16b4b05`; Aesthetic `c0a3966`; Coder polish `28c5f60`; coordinator record follows this validation.
- `HEAD == origin/main`: `YES` after coordinator record push and final synchronization check.
- Playable server updated: `YES` — W4 production build final-reloaded at port `4173`; coordinator validation used isolated port `5174` and left `4173` untouched.
# 2026-07-15 visual-direction supersession

- The original W3 pixel-consistency finding `RP001-AESTH-002` is retired and preserved below as historical evidence only.
- The pixel-styled replacement plates produced afterward are archived under `Pixelated Draft/city-threshold-pixel-staging/`. They remain temporary runtime fallbacks so gameplay is not broken.
- Active blocker `RP001-AESTH-004 — P1` requires three high-resolution photorealistic 16:9 City Threshold masters, registered effects, responsive derivatives, physically credible materials/lighting, no image-generation artifacts or pseudo-writing, first-person/no-human framing, and unchanged interaction/state behavior.
- `RP001-AESTH-001` is superseded because the original figure-filled raster was removed; no-human framing must be rechecked on the new photorealistic masters.
