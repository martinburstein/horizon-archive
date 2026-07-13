# Location Scout Work Log

## 2026-07-13 — Frame-grounded derelict signal-mineral Terminal study

- **Completed:** extracted all **320** frames from Martin's `3840 x 2160`, `30 fps`, `10.67 s` gameplay reference; built a complete frame/time manifest, one all-frame index, ten readable 32-frame sheets, sanitized metadata, and explicit transcript/OCR limits. Analyzed the object's mineral/manufacture contradiction, repeating warning cycle, environmental abandonment, and quiet persistence without translating its marks or copying its design. Added the resulting durable Terminal doctrine and prompt to the art-direction system.
- **Sprite result:** generated an original non-oval, asymmetric, half-buried signal-mineral Terminal sheet; removed the chroma background; reduced six states to a `64 x 64` square-logical-pixel candidate; froze all body pixels outside the warning membrane; and assembled logical plus 4x QA GIFs. The loop moves through ember, warning field, abstract marks, displaced marks, interference, and static with a low-hum cadence.
- **Files changed:** new `References/terminal-gif-inspiration/` extraction/reference package; new `production-pixel/AB-01/signal-mineral/` prompt output, build script, logical frames, sheet, GIF, and QA package; updated `.gitignore`, Concept Art Book README, art-direction charter, provenance log, and this work log. The full-resolution frames, audio derivative, contact sheets, and source MOV remain local and excluded from Git; sanitized metadata, analysis, prompt, and original Horizon Archive derivative assets are suitable for the repository.
- **Validation:** verified exactly **320** full-resolution frames from `frame_0001.jpg` through `frame_0320.jpg`; contact sheets cover frames 1–320 without gaps; source SHA-256 recorded; location/device metadata omitted from the derivative record; build produced six `64 x 64` frames and reported `body_pixels_stable_outside_screen: true`; 4x nearest-neighbor sheet visually inspected. No speech transcript or glyph translation is claimed.
- **Next recommended item:** Pixel Patrol and Curse Art Director should judge the candidate at native `64 x 64` inside AB-01. If it passes, Coder Agent can replace only the current Terminal overlay and animate the membrane without changing the hotspot, scene plate, assessment UI, or return route.
- **Unresolved risks:** the generated reduction remains exploration-derived rather than fully hand-authored; the membrane box includes the intended routed light leak, and final reviewers may ask for a tighter manual pixel pass before runtime promotion.

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

## 2026-07-12 — AB-01 canonical route-frame tranche

- **Completed:** composed the existing AB-01 available and complete world states into original native `640×480` framing studies, preserving the `640×360` world and adding a measured `640×120` lower band. Reserved logical rows `461–479` as a flat help-footer field and confined complete-route geometry to rows `448–460`.
- **Files changed:** extended the AB-01 integer renderer; added `CANONICAL_FRAME.md`, native available/complete frames, and exact nearest-neighbor 2× QA renders; updated package, charter, scene sheet, and work log. No gameplay code changed and no new scene was added.
- **Validation:** both native frames are exactly `640×480`; both 2× frames are byte-exact nearest-neighbor `1280×960`; world rows `0–359` are byte-identical to the selected production world; footer rows `461–479` are byte-identical across states and contain only the seam/fill colors; available uses 28 colors and complete uses 29.
- **Next recommended item:** Accessibility Sentinel should verify the exact 102-character orientation sentence against this footer field at native width and the authored narrow layout; Player Agent should verify route completion never competes with footer/help readability after integration.
- **Unresolved risks:** this is framing evidence, not live UI. Runtime focus order, exact text rendering, narrow three-line wrapping, letterboxing, and recovery behavior remain to be verified after Coder integration.

## 2026-07-12 — Responsible AI physical Terminal motif

- **Completed:** authored one native `64 x 64` AB-01-compatible physical Terminal motif with four vertically ordered, non-text indicator groups for principle → stakeholder → mitigation → accountable owner; supplied a five-step geometry/value sequence and exact nearest-neighbor QA.
- **Files changed:** added `production-pixel/AB-01/responsible-ai/` motif, renderer, specification, and QA; linked it from the AB-01 production package. No gameplay code or lore changed.
- **Validation:** native RGBA asset is exactly `64 x 64`; 2x is byte-exact nearest-neighbor `128 x 128`; sequence strips are exact `320 x 64` and `640 x 128`; painted motif is 48 x 61; existing 68 x 76 hotspot remains ≥44 x 44 at 1x; four groups remain ordered and separated; each completed step changes geometry and value; no text, antialiasing, reference pixels, or footer overlap.
- **Next recommended item:** Accessibility Sentinel should test the 1x sequence in grayscale and with low vision, ensuring the four group geometries remain distinguishable; Coder should use the existing AB-01 anchor/hotspot and keep live field labels available when the interface opens.
- **Unresolved risks:** the physical motif communicates order, not the full semantic names. Accessible text labels and the exact beginner-facing field names remain mandatory in the live Terminal interface.

## 2026-07-12 — Responsible AI frame-mode strip

- **Completed:** extended the existing Responsible AI physical motif with one native three-tile strip for primary → transfer → explanation. The four internal indicator groups remain pixel-identical; only surrounding frame silhouette, mass count, and pattern change.
- **Files changed:** extended the motif renderer; added `FRAME_MODES.md`, native `192 x 64` strip, and nearest-neighbor `384 x 128` QA. No gameplay, location, lore, indicator meaning, anchor, or hotspot changed.
- **Validation:** exact native/2x dimensions; byte-exact nearest-neighbor enlargement; all three central Terminal bodies are pixel-identical; grayscale tiles have distinct outer bounding patterns; existing `64 x 64` overlay, AB-01 anchor, 68 x 76 hotspot, `640 x 360` world boundary, and quiet-footer separation remain intact.
- **Next recommended item:** Accessibility Sentinel should name the three modes without color at 1x grayscale and confirm the outer frame never obscures the four internal groups; Coder can crop tiles at x offsets 0, 64, and 128.
- **Unresolved risks:** physical frame geometry supplements but cannot replace live mode labels. The runtime must announce Primary, Transfer, or Explanation textually.

## 2026-07-12 — Model / Deployment Choices physical motif

- **Completed:** authored one native `64 x 64` AB-01-compatible physical motif with three concentric but structurally distinct layers—continuous model octagon, bracketed deployment ring, dashed request-configuration ring—around a split decision/reason core.
- **Files changed:** added `production-pixel/AB-01/model-deployment/` native motif, integer renderer, specification, grayscale/isolation evidence, and 2x QA; linked it from the AB-01 package. No gameplay, location, interface, or lore changed.
- **Validation:** native RGBA is exactly `64 x 64`; 2x is byte-exact nearest-neighbor `128 x 128`; combined silhouette and all three isolated ring masks remain distinct in grayscale; central core has two physically separate halves; painted bounds fit the existing 68 x 76 hotspot and AB-01 anchor; no text, smoothing, reference pixels, world-boundary crossing, or footer intrusion.
- **Next recommended item:** Accessibility Sentinel should identify outer/middle/inner layers and both core halves at native grayscale; Coder should retain live labels for Model, Deployment, Request configuration, Decision, and Reason.
- **Unresolved risks:** concentric geometry communicates hierarchy but not product-specific terminology. The physical motif must never be the learner's only source for field meaning.

## 2026-07-12 — Model / Deployment four-phase strip

- **Completed:** extended the existing three-ring/two-part-core motif with one native four-tile strip for primary → transfer → closed-note → mastered. Only external framing changes; the semantic rings and core remain pixel-identical.
- **Files changed:** extended the motif renderer; added `PHASES.md`, native `256 x 64` strip, and exact nearest-neighbor `512 x 128` QA. No scene, lore, anchor, hotspot, interface, ring, or core meaning changed.
- **Validation:** native/2x dimensions and byte-exact enlargement pass; the local semantic motif crop is byte-identical across all four tiles; all phase pairs remain distinct in grayscale through rail count, rhythm, shutter, or corner-lock geometry; links pass; world/footer separation remains intact.
- **Next recommended item:** Accessibility Sentinel should identify all four phases at native grayscale without touching the semantic rings; Coder can crop tiles at x offsets 0, 64, 128, and 192 and must retain live phase labels.
- **Unresolved risks:** surrounding geometry supplements but cannot replace text. Runtime must announce phase and preserve focus/state semantics independently of the physical motif.

## 2026-07-12 — Structured Packets physical motif

- **Completed:** authored one native `64 x 64` AB-01-compatible physical motif with three nested but structurally distinct square sockets connected by one continuous stepped data-path groove.
- **Files changed:** added `production-pixel/AB-01/structured-packets/` native motif, integer renderer, specification, exact 2x, grayscale, and component-isolation QA; linked it from the AB-01 package. No gameplay, location, interface, or lore changed.
- **Validation:** native RGBA is exactly `64 x 64`; 2x is byte-exact nearest-neighbor `128 x 128`; outer/middle/inner/groove isolation masks remain pairwise distinct in grayscale; the groove is one connected path; painted bounds fit the existing 68 x 76 hotspot and AB-01 anchor; links pass; no text, smoothing, world-boundary crossing, or footer intrusion.
- **Next recommended item:** Accessibility Sentinel should distinguish all three sockets and trace the groove at native grayscale; Coder must retain live packet/field labels and must not infer serialization semantics from the physical motif alone.
- **Unresolved risks:** nested sockets communicate structure but do not define a schema, direction, or validation rule. Live teaching content remains the semantic source.

## 2026-07-12 — Control Flow physical motif

- **Completed:** authored one native `64 x 64` AB-01-compatible control-flow motif with a grounded inlet, continuous repeated loop, equality-notched fork, append/rejoin branch, and open-capped outlet beyond the loop.
- **Files changed:** added `production-pixel/AB-01/control-flow/` native motif, renderer, specification, exact 2x, grayscale, and six-component isolation QA; linked it from the AB-01 package. No gameplay, scene, interface, or lore changed.
- **Validation:** native RGBA and exact nearest-neighbor 2x dimensions pass; all groove pixels form one connected component; inlet/repeat/fork/append/outlet isolation masks remain distinguishable in grayscale; fork's equal notches and outlet's open cap differ by geometry; painted bounds fit the existing 68 x 76 hotspot/anchor; links pass; no text, smoothing, world-boundary crossing, or footer intrusion.
- **Next recommended item:** Accessibility Sentinel should trace inlet → loop → fork → append/outlet in native grayscale and confirm fork/outlet are not confused; Coder must retain live condition, branch, append, and outlet labels.
- **Unresolved risks:** the motif communicates control-flow topology, not Python syntax or actual execution direction. Live instruction and validator feedback remain mandatory.

## 2026-07-12 — Offline Client Bridge physical motif

- **Completed:** authored one native `64 x 64` AB-01-compatible motif with five distinct square stations—module, file, empty keyed secret, request, response—joined by a one-way snake trace and open outlet cap.
- **Files changed:** added `production-pixel/AB-01/offline-client/` native motif, renderer, specification, exact 2x, grayscale, and station/trace isolation QA; linked it from the AB-01 package. No gameplay, scene, interface, secret, or lore changed.
- **Validation:** native RGBA and exact nearest-neighbor 2x dimensions pass; station and trace isolation masks remain distinguishable in grayscale; station outlines plus trace form one connected network; repeated teeth preserve direction; secret interior remains empty and the keyed notch is asymmetric; painted bounds fit the existing 68 x 76 hotspot/anchor; links pass; no text, smoothing, world-boundary crossing, or footer intrusion.
- **Next recommended item:** Accessibility Sentinel should identify all five stations, direction changes, and the empty keyed secret in native grayscale; Coder must provide persistent live labels and never serialize or display secret values.
- **Unresolved risks:** physical geometry cannot define filesystem paths, environment-variable semantics, request options, or response schemas. Live teaching content remains authoritative.

## 2026-07-12 — Offline Client Bridge approval repair

- **Completed:** repaired the unapproved keyed-secret socket with a one-pixel stem to the station boundary, corrected the vertical direction tooth to point downward, and reran every approval gate without creating a new motif.
- **Files changed:** updated the existing offline-client renderer, native/QA outputs, specification, and added a reusable approval validator. No gameplay, scene, interface, secret data, or lore changed.
- **Validation:** exact native/2x dimensions and nearest-neighbor bytes; all station/trace isolation pairs distinct in grayscale; request/response distinct; all amber station/trace pixels form one connected component; keyed tooth belongs to that component; at least 60/81 secret-interior pixels remain empty; direction teeth read right/right/down/left/left; 55 x 57 painted bounds fit the 68 x 76 hotspot; world/footer separation and links pass.
- **Next recommended item:** Accessibility Sentinel should verify the repaired empty keyed socket and full trace in native grayscale. Coder may now integrate the asset only with persistent live labels and strict secret-value privacy.
- **Unresolved risks:** the motif remains a physical mnemonic rather than an explanation of files, environment secrets, request options, or response schemas. Live teaching content is mandatory.

## 2026-07-12 — Text Analysis physical motif

- **Completed:** authored one native `64 x 64` AB-01-compatible motif with four structurally distinct analysis apertures feeding a continuous document-correlation rail and split closed-success/open-error returns.
- **Files changed:** added `production-pixel/AB-01/text-analysis/` native motif, renderer, specification, exact 2x, grayscale, and aperture/rail/return isolation QA; linked it from the AB-01 package. No gameplay, scene, interface, or lore changed.
- **Validation:** native RGBA and exact nearest-neighbor 2x dimensions pass; all aperture/rail/return isolation masks remain pairwise distinct in grayscale; channel pixels form one connected rail network; closed success socket and open stepped error fracture differ by geometry/value; painted bounds fit the 68 x 76 hotspot/anchor; links pass; no text, smoothing, world-boundary crossing, or footer intrusion.
- **Next recommended item:** Accessibility Sentinel should identify all four apertures and distinguish the two returns at native grayscale; Coder must retain live capability and outcome labels plus textual correlation feedback.
- **Unresolved risks:** physical geometry cannot explain model output, confidence, evidence, or errors. Live teaching content remains authoritative.

## 2026-07-12 — Speech Workloads physical strip

- **Completed:** authored one native four-tile strip for recognition, synthesis, spoken multimodal prompting, and cancellation/break using distinct voice ports, text registers, model/response apertures, channel paths, and discontinuity geometry.
- **Files changed:** added `production-pixel/AB-01/speech-workloads/` native strip, integer renderer, specification, exact 2x, and grayscale QA; linked it from the AB-01 package. No gameplay, scene, interface, audio, or lore changed.
- **Validation:** native `256 x 64` and exact nearest-neighbor `512 x 128` pass; all six tile pairs remain distinct in grayscale; recognition, synthesis, and multimodal signal paths are individually connected and direction-marked; cancelled state has exactly two capped signal components separated by a hard gap; each 64 x 64 crop fits the existing 68 x 76 hotspot/anchor; links pass; no text, smoothing, world-boundary crossing, or footer intrusion.
- **Next recommended item:** Accessibility Sentinel should distinguish all three workloads and cancellation at native grayscale and confirm transcript equivalents are mandatory; Coder must expose live labels and reversible cancellation.
- **Unresolved risks:** the physical strip cannot convey speech content, language, timing, consent, or model behavior. Live labels, transcripts, and accessible controls remain authoritative.

## 2026-07-12 — Speech Workloads acceptance completion

- **Completed:** rebuilt the existing strip with the corrected synthesis renderer, joined the multimodal upward direction cue to its channel, added explicit isolation evidence, and completed the acceptance suite without redesigning the four tiles.
- **Files changed:** updated the existing renderer/spec/outputs; added isolation QA and reusable acceptance validator. No new motif, scene, audio, interface, or lore was introduced.
- **Validation:** exact `256 x 64` native and byte-exact `512 x 128` nearest-neighbor/isolation assets; grayscale strip exact; all six tile pairs distinct in grayscale; recognition/synthesis/multimodal each have one connected signal component; cancellation has exactly two; right/right/up direction tips physically join their channels; hard cancellation gap persists; four 64 x 64 crops fit the 68 x 76 hotspot/anchor; world/footer separation and links pass.
- **Next recommended item:** Accessibility Sentinel should verify the four tiles at native grayscale and require transcript equivalents; Coder may integrate only with live workload labels and reversible cancellation.
- **Unresolved risks:** physical geometry remains a mnemonic. Speech content, consent, language, timing, errors, and transcript semantics require live accessible UI.

## 2026-07-12 — Speech Workloads topology approval repair

- **Completed:** repaired only the multimodal topology by evaluating the upward direction branch before generic horizontal direction, eliminating the stray three-pixel top-edge component without changing tile design.
- **Files changed:** updated the existing speech renderer, regenerated native/QA assets, marked the specification approved, and reran the existing validator. No new motif, runtime integration, audio, scene, or lore was introduced.
- **Validation:** exact native `256 x 64` and nearest-neighbor/isolation `512 x 128`; all six grayscale tile pairs distinct; signal components `[1, 1, 1, 2]`; recognition/synthesis/multimodal direction cues join their paths; cancellation retains two capped halves and hard gap; four 64 x 64 crops fit the 68 x 76 hotspot; world/footer separation and links pass.
- **Next recommended item:** Accessibility Sentinel should verify native grayscale recognition, synthesis, multimodal, and cancellation plus transcript requirements. Coder may integrate with live labels and reversible cancellation.
- **Unresolved risks:** physical geometry cannot carry speech content, consent, timing, language, or error semantics. Live labels, transcripts, and accessible controls remain mandatory.

## 2026-07-12 — Information Extraction physical motif

- **Completed:** authored one native `64 x 64` AB-01-compatible motif with four modality apertures feeding a schema lattice, intentional empty-null socket, separate value and evidence/confidence paths, and a broken invented-value rejection spur.
- **Files changed:** added `production-pixel/AB-01/information-extraction/` native motif, renderer, specification, exact 2x, grayscale, and ten-tile component-isolation QA; linked it from the AB-01 package. No gameplay, scene, interface, extracted data, or lore changed.
- **Validation:** native RGBA and exact nearest-neighbor 2x dimensions pass; modality/lattice/null/value/evidence/reject isolation pairs remain distinct in grayscale; modality feeders and accepted outputs form one connected lattice network while rejection retains an isolated fracture; null interior remains intentionally empty; evidence return differs from value channel; painted bounds fit the 68 x 76 hotspot/anchor; links pass; no text, smoothing, world-boundary crossing, or footer intrusion.
- **Next recommended item:** Accessibility Sentinel should identify modalities, empty null, value/evidence paths, and rejection at native grayscale; Coder must expose live labels/text equivalents and explain null versus false/zero.
- **Unresolved risks:** physical geometry cannot define schema semantics, evidence quality, confidence meaning, or extraction errors. Live teaching content remains authoritative.

## 2026-07-12 - Portal Orientation physical motif

- **Completed:** authored one native `64 x 64` AB-01 orientation rail with eight sequential checkpoints for access, project, model, deployment, readiness, interaction, connection details, and cleanup. The catalog shelf is detached from the named deployment socket; credentials use an empty keyed slot; cleanup ends in an owner lock and terminal cap.
- **Files changed:** added `production-pixel/AB-01/portal-orientation/` native motif, renderer, specification, exact 2x, grayscale, checkpoint-isolation QA, and validator; linked it from the AB-01 package. No gameplay, scene, interface, credential data, or lore changed.
- **Validation:** native RGBA `64 x 64`; byte-exact nearest-neighbor `128 x 128`; eight distinct grayscale checkpoint tiles; connected rail reaches all eight frames; empty keyed credential and cleanup owner-lock pass; catalog/deployment separation passes; 59 x 59 bounds fit the 68 x 76 target; local links pass.
- **Next recommended item:** Accessibility Sentinel should identify all eight stages at native grayscale and verify live labels for deployment identity, credential state, ownership, and cleanup consequences.
- **Unresolved risks:** physical geometry cannot convey resource names, readiness evidence, connection values, ownership identity, or destructive consequences. Live teaching content remains authoritative.

## 2026-07-12 - Prompt Layers physical motif

- **Completed:** authored one native `64 x 64` AB-01 prompt assembly with six linked and mechanically distinct layers for system, user, grounding, output contract, conflict/no-authority, and evaluation. Injection is a rejected side spur; action authority is a locked external socket behind a solid boundary.
- **Files changed:** added `production-pixel/AB-01/prompt-layers/` native motif, renderer, specification, exact 2x, grayscale, six-layer isolation QA, and validator; linked it from the AB-01 package. No gameplay, scene, interface, prompt content, credentials, or lore changed.
- **Validation:** native RGBA `64 x 64`; byte-exact nearest-neighbor `128 x 128`; six pairwise-distinct grayscale layers; one accepted spine reaches all six; injection hard gap and external action lock pass; 59 x 59 bounds fit the 68 x 76 target; local links pass.
- **Next recommended item:** Accessibility Sentinel should identify all layers and both authority boundaries at native grayscale. Coder may integrate only with persistent source/authority labels and textual rejection/evaluation outcomes.
- **Unresolved risks:** geometry cannot convey instruction text, source quality, precedence details, contract semantics, authorization identity, or evaluation evidence. Live teaching content remains authoritative.

## 2026-07-12 - Client Boundaries physical motif

- **Completed:** authored one native `64 x 64` AB-01 client-boundary rail with six distinct stations for endpoint, empty keyed credential, named deployment, compatible client layer, request, and response. Mock evidence is a sealed local loop; fabricated live success fractures before response; external action stops at an owner lock.
- **Files changed:** added `production-pixel/AB-01/client-boundaries/` native motif, renderer, specification, exact 2x, grayscale, six-station isolation QA, and validator; linked it from the AB-01 package. No gameplay, scene, interface, credential data, external action, or lore changed.
- **Validation:** native RGBA `64 x 64`; byte-exact nearest-neighbor `128 x 128`; six distinct grayscale stations; one rail reaches all six; credential is empty/keyed; mock loop remains enclosed; fabricated success rejection and external action lock pass; 61 x 59 bounds fit target; links pass.
- **Next recommended item:** Accessibility Sentinel should verify all six boundaries and local/live distinctions at native grayscale. Coder may integrate only with live identifiers, correlation, evidence-source labels, and authorization feedback.
- **Unresolved risks:** geometry cannot convey endpoint values, deployment names, secret state, compatibility versions, payload meaning, correlation evidence, or authorization identity. Live teaching content remains authoritative.

## 2026-07-12 - Single-Agent physical motif

- **Completed:** authored one native `64 x 64` six-station single-agent rail with keyed least-privilege shutters, incomplete denial/timeout branch, rejected fabricated success, and locked external action.
- **Files changed:** added `production-pixel/AB-01/single-agent/` native, renderer, spec, exact 2x, grayscale, and isolation QA; linked the package. No gameplay, scene, interface, action, or lore changed.
- **Validation:** native/2x/grayscale dimensions and exact scaling pass; six grayscale stations differ; rail reaches all stations; denial gap, rejection, external lock, 61 x 59 target fit, and links pass.
- **Next recommended item:** accessibility review at native grayscale with mandatory live permission, denial/timeout, test, correlation, and authorization labels.
- **Unresolved risks:** geometry cannot communicate instruction content, permission identity, test evidence, errors, or authority. Live teaching content remains authoritative.

## 2026-07-12 - Text/Speech Patterns motif

- **Completed:** delivered one native six-station AB-01 text/speech rail with physical direction cues, reversible broken-loop cancellation, and separately locked disclosure/action exits.
- **Files changed:** added `production-pixel/AB-01/text-speech-patterns/` native, renderer, spec, exact 2x, grayscale, and isolation QA; linked the package. No scene, gameplay, speech content, or lore changed.
- **Validation:** native `64 x 64`, byte-exact 2x, grayscale, six pairwise-distinct isolation tiles, connected station rail, direction/cancellation geometry, dual locks, target fit, and links pass.
- **Next recommended item:** native-grayscale accessibility review with mandatory transcript, direction, result/error, cancellation, disclosure, and authorization labels.
- **Unresolved risks:** physical geometry cannot carry speech content, consent, language, errors, disclosure scope, or authority identity. Live accessible UI remains authoritative.

## 2026-07-12 - Offline Capstone Readiness physical motif

- **Completed:** authored one native `64 x 64` AB-01 implementation mnemonic for L-06-03. Three distinct client, text/speech, and extraction inputs feed a closed prerequisite evidence lattice, then split into closed-ready, returning-remediation, and open-insufficient outcomes. The asset adds no location, story event, exam guarantee, service call, or external authority.
- **Files changed:** added `production-pixel/AB-01/capstone-readiness/` native motif, integer renderer, implementation specification, exact 2x, native grayscale, seven-component isolation QA, and reusable validator; linked it from the AB-01 package. No game code, playtest binary, scene, interface, curriculum, or lore changed.
- **Validation:** native transparent RGBA `64 x 64`; byte-exact nearest-neighbor `128 x 128`; seven pairwise-distinct grayscale components; all three inputs reach the evidence gate; all three outcome paths connect; readiness outcomes differ through closed socket, return loop, and open socket geometry; prerequisite lock passes; 61 x 59 painted bounds fit the 68 x 76 AB-01 target; grayscale silhouette, links, surface-canon, spoiler, and no-guarantee checks pass.
- **Next recommended item:** Accessibility Sentinel should identify all three implementation inputs and readiness outcomes at native grayscale. Coder may integrate only with persistent labels, keyboard status, prerequisite evidence details, remediation routing, and explicit no-guarantee/no-action copy.
- **Unresolved risks:** physical geometry cannot convey objective evidence, prerequisite completeness, remediation destination, source currency, recommendation rationale, or authorization identity. Live learner-facing text remains authoritative.

## 2026-07-12 - SIM-01 Mixed Simulation physical motif

- **Completed:** authored one native `64 x 64` AB-01 SIM-01 mnemonic with twelve split decision/reason sockets arranged as five-item and seven-item domain banks. The optional timer is detached from mastery, misses return through remediation, cumulative retention is keyed, and exam-claim/external-action output is blocked. This is original course artwork, not exam content or a new story location.
- **Files changed:** added `production-pixel/AB-01/mixed-simulation/` native motif, integer renderer, implementation specification, exact 2x, native grayscale, seven-component isolation QA, and validator; linked it from the AB-01 package. No runtime, playtest binary, scene, curriculum, or lore changed.
- **Validation:** native transparent RGBA `64 x 64`; byte-exact nearest-neighbor `128 x 128`; seven pairwise-distinct grayscale components; five/seven bank traces remain continuous; all twelve sockets retain split dimensions; timer stays detached; remediation return, retention key, and external block pass; 61 x 59 bounds fit the 68 x 76 target; native silhouette, links, canon, spoiler, and exam-claim checks pass.
- **Next recommended item:** Accessibility Sentinel should verify the five/seven banks, split dimensions, detached timer, remediation route, and keyed boundaries at native grayscale. Runtime integration requires persistent item/objective labels, optional-timing status, remediation destinations, and explicit no-guarantee/no-action text.
- **Unresolved risks:** geometry cannot convey item wording, objective coverage, answer correctness, elapsed time, remediation evidence, retention proof, or authority identity. Live learner-facing content remains authoritative.

## 2026-07-12 - Playable-demo art freeze audit through SIM-01

- **Completed:** audited the canonical AB-01 scene and all fifteen production motif builders used through SIM-01. Confirmed a natural demo art freeze: no new location or motif is required by the frozen playable path. Corrected the only blocking specification defect by adding the missing accessibility handoff to the earliest Responsible AI motif. Deferred all new planets, transition plates, and non-demo concept exploration until after demo review.
- **Files changed:** updated `production-pixel/AB-01/responsible-ai/README.md` and this log only. No pixels, runtime, game code, playtest binary, curriculum, scene canon, or lore changed.
- **Validation:** all 16 builders execute successfully and regenerate 85 PNGs with zero SHA-256 drift; all 7 packaged validators pass; 22 native/2x pairs are byte-exact nearest-neighbor; all 16 package README files have zero broken local links; 14 bounded native motifs pass silhouette/value and 68 x 76 hotspot fit; canonical `640 x 360` world and `640 x 480` complete canvases pass; all 15 motif specifications now include an accessibility handoff. Existing package originality language, surface-canon boundaries, and spoiler-safe no-new-location scope were preserved.
- **Next recommended item:** freeze production art for the playable demo. After demo feedback, prioritize only observed readability defects; otherwise resume the deferred regional transition plate and later planet/scene concept book without changing demo assets.
- **Unresolved risks:** runtime screen-reader, keyboard, smallest-viewport, and first-time-player comprehension still require Player Agent evidence. Physical motifs remain mnemonics; live labels and text remain authoritative.

## 2026-07-13 - Glass Meadow first-view mapping restart

- **Completed:** established the selected root `Glass Meadow Example.png` (`1672 x 941`) as the approved first-person GM-01 composition target and mapped the first discoverable Terminal plus later route node onto exact `640 x 360` rectangles. GM-00 now hands its dormant mat-state wave into the same view. Added non-label search affordances, navigation order, lighting, palette, scale, material, continuity, production, accessibility, and spoiler-safe constraints without changing the raster or runtime.
- **Files changed:** updated `scenes/GM-00-glass-meadow-landing-shelf.md`, `scenes/GM-01-glass-meadow-petal-route-marker.md`, and this log only.
- **Validation:** primary `x=294..414, y=191..327` and route `x=493..631, y=192..359` remain within `640 x 360`, exceed `44 x 44`, are separated, and stay above the interface; relative target links resolve; the selected image is documented as reference-only and original pixel re-authoring remains mandatory; no label, path, ship, protagonist, spoiler, code, raster, lore, curriculum, or Curse file was added or changed.
- **Next recommended item:** Coder Agent should use primary `x=294, y=191, w=120, h=136` and route `x=493, y=192, w=138, h=167` only when the approved original `640 x 360` plate replaces the current blockout. Until then, retain current runtime constants.
- **Unresolved risks:** exact hotspot-to-silhouette alignment, grayscale discovery, keyboard order, and far-right continuation visibility require validation against the future native production plate; the selected high-resolution image is composition evidence, not shippable art.

## 2026-07-13 - Glass Meadow 45-second findability lock

- **Completed:** assessed the unchanged selected Glass Meadow composition at the `640 x 360` world scale and approved the existing first Terminal rectangle without coordinate or art changes. Locked the rationale around central placement, complete bulb/throat/rim/root/collar silhouette, grayscale value separation, 7.1% world occupancy, arrival-field gaze, and the later route node's edge-cropped secondary role. Defined a spoiler-safe 0-45-second first-player search contract with no labels, paths, ship, protagonist, or CSS scenery.
- **Files changed:** updated `scenes/GM-01-glass-meadow-petal-route-marker.md` and this log only. No raster, runtime, hotspot constant, test, CSS, lore, curriculum, or unrelated file changed.
- **Validation:** documented primary `x=294, y=191, w=120, h=136` matches current runtime percentages `45.9375% / 53.0556% / 18.75% / 37.7778%`; route `x=493, y=192, w=138, h=167` matches `77.0313% / 53.3333% / 21.5625% / 46.3889%`; both fit `640 x 360`, exceed `44 x 44`, remain 79 pixels apart, and preserve first-person/no-ship/no-protagonist and realistic functional-glass contracts.
- **Next recommended item:** Player Agent should run a blinded first-open trial at native `640 x 360`: record time to first Terminal focus/selection, wrong selections, whether the route oval steals the first read, grayscale performance, pointer versus keyboard parity, and recovery after inspecting ordinary glass.
- **Unresolved risks:** the 45-second judgment is composition-based until a blinded first-time-player trial exists. Dense glass reflections may slow low-vision or cognitive-search users even though the mapped silhouette and target geometry pass.

## 2026-07-13 - Completed Meadow departure continuity

- **Completed:** mapped the implemented completed-marker departure from GM-01 into AB-01 without new world art. Locked the completed transparent marker as the dominant earned state until explicit departure, matched its rightward groove/edge read to AB-01's lower-left phase-ridge arrival, corrected the AB-01 sheet's stale narrow hotspot record, and reserved a non-destructive ridge return anchor that restores the completed Meadow rather than resetting it. Added direct-cut, reload, optional-calibration exit, palette/material/scale, accessibility, and spoiler-safe continuity contracts.
- **Files changed:** added `scenes/GM-01-to-AB-01-departure-continuity.md`; linked it from the existing GM-01 and AB-01 sheets; corrected only the AB-01 narrow hotspot documentation; updated this log. No raster, overlay, game code, CSS, test, lore, curriculum, or protected-reference asset changed.
- **Validation:** completed marker bounds `x=494..566, y=146..300` and route hotspot `x=493, y=192, w=138, h=167` fit the `640 x 360` Meadow; AB primary `x=156, y=205, w=68, h=76` and reserved return `x=0, y=252, w=112, h=108` fit canonical world bounds and remain 44 pixels apart; authored narrow AB primary `x=64, y=97, w=77, h=77` and return `x=0, y=126, w=48, h=54` fit `320 x 180`, exceed `44 x 44`, and remain 16 pixels apart. Links, existing runtime coordinate contracts, first-person/no-ship/no-protagonist, alien-function, spoiler, and diff checks pass.
- **Next recommended item:** Coder Agent should keep the current direct departure/arrival behavior unchanged. If explicit backtracking enters scope, implement only the reserved AB ridge return action and restore the already-completed Meadow marker/focus/save state; do not add transition art.
- **Unresolved risks:** explicit AB-to-Meadow backtracking is mapped but not implemented. Manual screen-reader confirmation of arrival/return announcements and narrow focus order remains required when that interaction is added.

## 2026-07-13 - Implemented round-trip continuity synchronization

- **Completed:** validated the implemented Drowned Archive safe-return path against the reserved Location Scout geometry and synchronized the continuity records. The lower-left ridge remains untouched secondary negative space; the lower band owns the persistent return name; return restores the approved Glass Meadow painting with its completed/crowned marker, earned summary, and departure focus; re-departure returns to Chapter II without evidence loss. Reclassified the prior future return anchor as implemented and added its exact canonical/narrow hotspot record to AB-01.
- **Files changed:** updated `scenes/GM-01-to-AB-01-departure-continuity.md`, `scenes/AB-01-drowned-archive-workload-terminal.md`, and this log only. No production plate, overlay renderer, game code, CSS, test, lore, curriculum, label art, icon, arrow, sign, portal, path, glow, protagonist, ship, or protected motif changed.
- **Validation:** runtime return hotspot exactly matches canonical `x=0, y=252, w=112, h=108` and narrow `x=0, y=126, w=48, h=54`; both fit their `640 x 360` / `320 x 180` worlds and exceed `44 x 44`. AB primary remains canonical `x=156, y=205, w=68, h=76` and narrow `x=64, y=97, w=77, h=77`; return/primary gaps remain 44 and 16 pixels. Focus-only ridge treatment is transparent and contained; strict mastered gating, evidence preservation, completed-marker restoration, re-departure ordering, reload safety, links, spoiler protocol, and diff checks pass.
- **Next recommended item:** Accessibility Sentinel should verify native pointer/keyboard order, the polite Chapter I announcement, focus transfer to the earned departure action, focus-only ridge label containment, and round-trip reload at `640 x 480` and `320 x 240`.
- **Unresolved risks:** static and unit contracts pass, but native rendered focus/label clearance and manual screen-reader announcement order remain unverified. No further Location Scout art or coordinate change is warranted unless that evidence finds a defect.

## 2026-07-13 - Workload Sort resume boundary synchronization

- **Completed:** audited the current privacy-safe Workload Sort resume rail against the AB-01 production plate, physical Terminal state strip, hotspot map, ridge return, and environmental contract. Locked restored counts and control-reset language to the open Terminal task pane only. Documented that `available`, `active`, and `complete` are coarse scene states, not item counters: W02, W05, retry R-W04, and an unacknowledged 12/12 result all reuse the same generic active geometry while their exact restored state remains live interface text.
- **Files changed:** updated `scenes/AB-01-drowned-archive-workload-terminal.md` and this log only. No production plate, state overlay, scene renderer, game code, CSS, test, lore, curriculum, hotspot, ridge, return action, protected motif, protagonist, companion, or ship changed.
- **Validation:** inspected the native `640 x 360` available plate and `256 x 64` four-state strip at original resolution; neither contains words, numerals, badges, notifications, arrows, signs, paths, glow, or resume-specific marks. Runtime source keeps the conditional resume note inside the Workload Sort Terminal task pane and derives world art only from scene completion or whether an AB-01 Terminal is open. Focused resume/return tests, production raster hashes, canonical `x=156, y=205, w=68, h=76`, narrow `x=64, y=97, w=77, h=77`, return `112 x 108` / `48 x 54`, links, first-person, spoiler, and diff checks pass.
- **Next recommended item:** Curse Art Director should confirm the unchanged destination plate remains dominant and that the generic active physical state reads as local Machine response rather than a progress badge or modern notification treatment.
- **Unresolved risks:** native browser wrapping and screen-reader delivery of the resume rail remain outside static Location Scout evidence. No art or coordinate change is warranted unless rendered review finds the Terminal overlay leaking beyond its modal/task-pane boundary.

## 2026-07-13 - Builder Machine signal-coupler redesign

- **Completed:** replaced the historical red signal-mineral Terminal direction with a colder scientific signal coupler that is visibly one node of a larger buried Machine. Extended sleeved phase bundles through both side crops, continued the laminated front tongue through the lower crop, retained a separate vertical substrate conduit, and removed the unwanted tube that branched from the tongue. Replaced pseudo-writing with abstract diagnostic topology and preserved the six-state low-hum loop.
- **Files changed:** added the versioned V2 durable prompt and the complete `production-pixel/AB-01/signal-coupler/` exploration, selected source, deterministic builder, logical frames, sheet, GIF, and QA package; marked V1 historical; updated Concept Art Book indexes, Terminal family doctrine, prompt provenance, and this log. No runtime, scene plate, gameplay, curriculum, lore, or unrelated user file changed.
- **Validation:** selected chroma source is `1254 x 1254` and divides exactly into a `3 x 2` grid; builder outputs six `64 x 64` RGBA frames, `192 x 128` logical sheet, and six-frame GIF with `620/170/260/240/150/500 ms` timings; all pixels outside the detected membrane are byte-stable, including tongue and network connections; exact 4x nearest-neighbor sheet/GIF reviewed; red, pseudo-glyph, loose-end, and tongue-tube constraints pass visually.
- **Next recommended item:** composite the V2 coupler into an AB-01 scene mockup at native `640 x 360` and compare hotspot readability against the existing physical Terminal state strip before any runtime replacement.
- **Unresolved risks:** the coupler remains an art candidate rather than runtime art. At `64 x 64`, its network context is readable through cropped bus/channel silhouettes, but final scene compositing must confirm it does not resemble a human-built cable junction or overpower the environmental landmark.

## 2026-07-13 - Signal-coupler screen-only animation lock

- **Completed:** replaced the generated-color bounding box with a fixed `164`-pixel membrane-interior polygon. All six output frames now inherit the complete body from frame one and composite variation only inside the screen. Added a hard body-hash gate, a four-channel outside-change detector, six-distinct-screen gate, and a visible 4x mask proof.
- **Files changed:** updated only the signal-coupler builder, rebuilt its six frames/sheets/GIFs, added `qa/terminal-signal-coupler-screen-mask-4x.png`, updated the package README, and updated this log. No source exploration, design, scene plate, runtime, lore, curriculum, or unrelated user file changed.
- **Validation:** build reports `frame_count=6`, logical `64 x 64`, screen box `x=15..36, y=33..40`, `164` animated pixels, `unique_body_hashes=1`, body SHA-256 `61abfe5ae3a0d224d51368a8b206ac7a1bf398623e33de07eac612e75e44c08e`, `unique_screen_hashes=6`, and `only_screen_pixels_change=true`. A shared GIF palette prevents per-frame body requantization; decoded logical and 4x GIF comparisons each return five `None` outside-change boxes. Exact 4x sheet, loop, and mask were visually reviewed.
- **Next recommended item:** preserve this mask and hash gate when compositing the coupler into AB-01; runtime animation must swap only these validated logical frames with nearest-neighbor presentation.
- **Unresolved risks:** none in the standalone GIF body-lock contract. Scene integration still needs to avoid CSS transforms, per-frame positioning, smoothing, or responsive resampling that could make a byte-stable sprite appear to wobble.
