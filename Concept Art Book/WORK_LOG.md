# Location Scout Work Log

## 2026-07-12 — Coder production-pixel vertical slice

- **Completed:** translated GM-01 into a new hand-authored `320×180` integer-rectangle scene instead of shipping or filtering the exploration plate. Petal Terminal, three-fin Route Marker, survey craft, route, depth bands, and three redundant interaction states are built directly on the logical grid.
- **Files changed:** new meadow renderer/component/tests and pixel contract; game/App/CSS/E2E integration; GM-01, design, exercise, and QA records.
- **Validation:** 26 unit tests, production build, and the four-exercise title-to-credits E2E pass. Runtime checks cover no smoothing, integer scale/letterbox, state geometry, ≥44px targets, pointer/Enter access, scene-visible Terminal docking, save/privacy, and zero console errors.
- **Next recommended item:** Lore Keeper Agent should use the implemented ownership contract: Petal owns First Signal; the Route Marker remains locked until Petal acknowledgement, then owns route training and shows completed directional geometry only after mastery.
- **Unresolved risks:** ruins, corridor, city, and most Terminal chrome still use the earlier high-resolution presentation and need separate future pixel translations; this tranche intentionally converts only Glass Meadow.

## 2026-07-12 — Production pixel-art direction

- **Completed:** replaced the earlier concept-as-authority assumption with a two-tier pipeline: high-resolution concept plates provide inspiration for mood, palette, scale, composition, and interaction intent; final game assets must be intentionally rebuilt on a low-resolution square-logical-pixel grid.
- **Files changed:** `horizon-archive-game/AGENTS.md`, `AGENT_WORKFLOW.md`, and `Concept Art Book/art-direction-charter.md`.
- **Validation:** confirmed the durable instructions now require nearest-neighbor presentation, crisp one-logical-pixel edges, intentional pixel clusters and dithering, unified pixel treatment across world/UI/Terminal chrome, and a prohibition on shipping direct smooth downscales or generic pixelation filters.
- **Next recommended item:** before the next scene-art integration, Coder Agent and Location Scout Agent should define and validate the production logical resolution plus supported integer-scale viewport strategy.
- **Unresolved risks:** the existing gameplay and concept plates remain high-resolution painterly assets. They are now classified as exploration references and must be translated through the new production pixel pipeline rather than treated as finished art.

## 2026-07-12 — Coder integration: Witness Corridor two-object scene

- **Completed:** integrated the selected WC-01 clean plate and split the former combined target into a grounded Evidence Terminal and separate fallen automaton. Only the Terminal launches the exercise; the automaton retains narrative LOOK/TALK/USE responses.
- **Files changed:** game scene/rendering/styles, E2E harness, WC-01 scene sheet, design/exercise/location logs, and desktop/320px QA captures.
- **Validation:** both source-mapped targets exceed 44px, remain non-overlapping, expose distinct semantics, show keyboard focus, and pass pointer/Enter activation at both viewports. Full assessment, privacy, save, reload, final acknowledgement, credits, and console checks pass.
- **Next recommended item:** Lore Keeper Agent should preserve the contract that the automaton observes and responds while the grounded Terminal alone owns evidence inspection.
- **Unresolved risks:** narrow framing trims the automaton's far-right body edge while retaining its face, torso, and narrative identity; this is the intended interaction-safe crop.

## 2026-07-12 — Coder integration: Drowned Archive Terminal

- **Completed:** integrated the selected AB-01 clean plate into the playable ruins scene; moved interaction from the suspended landmark to the grounded three-fin Workload Sort Terminal; tuned separate desktop and narrow crop/target geometry from the source-zone specification.
- **Files changed:** `horizon-archive-game/src/App.jsx`, `horizon-archive-game/src/styles.css`, `playtest/e2e-playthrough.mjs`, the AB-01 scene sheet, and two rendered QA captures under `playtest/`.
- **Validation:** source-aware browser geometry, minimum target size, pointer and Enter-key activation pass at `1600×900` and `320×900`; both captures were visually reviewed; full Workload Sort and title-to-credits progression pass without console errors.
- **Next recommended item:** Lore Keeper Agent may give the grounded node its own brief observation/reconnection voice while leaving the suspended archive silent and unexplained.
- **Unresolved risks:** the narrow crop intentionally shows only part of the suspended landmark so the actionable node remains readable; this is an interaction-first framing decision, not a new canonical distinction.

## 2026-07-11 — Foundation tranche

- **Completed:** visually inspected all four source-of-truth plates; established the spoiler-safe art-direction charter, planet/region production map, playable scene index, reusable scene-sheet template, prompt/provenance system, and selected first new clean environment plate.
- **Files changed:** all files under `Concept Art Book/`; no gameplay code changed.
- **Validation:** checked all five PNG files exist and report `1672 x 941`; reviewed the selected plate against navigation, hotspot, tone, clean-master, continuity, and spoiler gates; validated local Markdown links.
- **Next recommended item:** after the next agent cycle, scout a transition plate whose gameplay purpose is confirmed by the Player/Developer handoff.
- **Unresolved risks:** the current concept references bake the dialogue panel into the image while the new production standard uses clean plates; implementation should continue composing UI separately. Future-world names remain deliberately provisional until gameplay and surface-safe learning purposes are defined.

## 2026-07-11 — Drowned Archive Terminal tranche

- **Completed:** inspected the current ruins implementation and QA references; designed and selected a clean Drowned Archive plate with a distinct grounded Workload Sort Terminal; established Terminal-family grammar and implementation-ready hotspot/navigation notes.
- **Files changed:** added `images/drowned-archive-workload-terminal-v1.png` and `scenes/AB-01-drowned-archive-workload-terminal.md`; updated the book README, art-direction charter, planet/region map, scene index, and provenance log. No gameplay code changed.
- **Validation:** confirmed the selected PNG is `1672 x 941`; reviewed Terminal silhouette, meadow-family relationship, causeway traversal, landmark separation, lighting, scale, clean-master, and spoiler gates; validated local Markdown links.
- **Next recommended item:** Player Agent should test whether a first-time player notices the physical node without a hotspot label, distinguishes it from the suspended archive, and can activate it with keyboard and pointer at the smallest supported viewport.
- **Unresolved risks:** the selected plate is a concept target, not yet integrated. Its clean 16:9 composition differs from the current source plate's baked dialogue panel, so final hotspot percentages must be checked against the implemented crop rather than copied blindly. Existing project QA PNGs show the meadow or layout comparisons, not the new ruins exercise, so the next Player Agent must capture fresh ruins evidence after integration.

## 2026-07-12 — Witness Corridor Evidence Terminal tranche

- **Completed:** inspected the current automaton scene, final Evidence Packet UI, desktop QA, and narrow QA; generated a clean Witness Corridor plate with a dedicated grounded Evidence Terminal, blank inspection surface, and three modality indicators; corrected the first candidate's left-edge placement for narrow-crop safety; authored implementation-ready hotspot and crop notes.
- **Files changed:** added `images/witness-corridor-evidence-terminal-v1.png` and `scenes/WC-01-witness-corridor-evidence-terminal.md`; updated README, art-direction charter, planet/region map, scene index, and prompt/provenance log. No gameplay code changed.
- **Validation:** selected PNG is `1672 x 941`; confirmed exact three indicators, blank inspection surface, separate Terminal/automaton silhouettes and light pools, open traversable route, 44px-safe pointer target, desktop top-crop survival, centered 320–375px narrow-crop survival, source continuity, clean-master rules, and spoiler safety; validated all local Markdown links.
- **Next recommended item:** Player Agent should verify that players discover and activate the Evidence Terminal without clicking the automaton, while the automaton remains the first narrative focal read, at both 1600x900 and 320x900.
- **Unresolved risks:** concept coordinates are source-image estimates. Integration must capture fresh desktop and narrow screenshots before locking final hotspot percentages; the current broad automaton hotspot must be split rather than merely relabeled.

## 2026-07-12 — Glass Meadow dual-node tranche

- **Completed:** inspected current meadow implementation and route-marker QA; created a clean selected Glass Meadow master combining ship continuity, the First Signal Petal Terminal, and a separate prerequisite-gated three-fin route marker; corrected marker anatomy and vertical crop placement; documented dormant/awake state cues and responsive hotspot targets.
- **Files changed:** added `images/glass-meadow-petal-route-marker-v1.png` and `scenes/GM-01-glass-meadow-petal-route-marker.md`; updated README, charter, map, index, GM-00 continuity link, and provenance log. No gameplay code changed.
- **Validation:** selected PNG is `1672 x 941`; exact three-fin marker, two distinct silhouettes, separate light pools, open path, current-state cues, desktop top-crop, centered 320–375px crop, source continuity, 44px-safe targets, clean-master rules, and spoiler safety pass; local Markdown links validated.
- **Next recommended item:** Player Agent should test whether a first-time player distinguishes the route marker from ordinary meadow monoliths before hover, understands its locked state, and returns to it after completing First Signal at desktop and 320px widths.
- **Unresolved risks:** the narrow framing intentionally omits the ship and trims the Petal Terminal's far-left decorative outer edge while preserving its core and actionable crown. Awake-state cues are documented but require a verified state variant or restrained runtime treatment.

## 2026-07-12 — AB-01 production pixel tranche

- **Completed:** authored an original Drowned Archive directly at `640 x 360`; delivered background, four state overlays/composites, native and exact nearest-neighbor 2x QA, palette swatches, state strip, geometry, originality record, and twelve-point handoff.
- **Files changed:** new `production-pixel/AB-01/` package and renderer; updated book README, map, index, AB-01 sheet, provenance, and work log. No gameplay code changed.
- **Validation:** 27 scene colors from a 32-color library; exact dimensions/modes; byte-exact nearest-neighbor 2x; square hard pixels; 45 x 57 painted Terminal; 68 x 76 hit box; route/safe zones; outline/cluster/dither limits; four geometry/value states; originality gate.
- **Next recommended item:** Player Agent should inspect the 1x plate for landmark → Terminal → route readability. After Coder integration, verify default action, keyboard/pointer access, state progression, and recovery on the canonical 640 x 480 canvas.
- **Unresolved risks:** runtime letterboxing, unified world/UI scaling, cursor/action cluster, save, and no-dead-end behavior require integration. The smooth AB-01 asset remains exploration-only.
