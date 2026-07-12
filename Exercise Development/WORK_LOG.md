# Exercise Agent Work Log

## 2026-07-12 — Route-safe Calibration Debugger

- **Outcome:** Added optional post-route `EX-L0103-CALIBRATION-DEBUG` / `A-L0103-2` / `AS-L0103-DBG` in the completed Glass Meadow. Route acknowledgement still opens traversal immediately; Start/Resume Calibration appears beside Continue, and Exit Calibration is always available without changing the completed physical route.
- **Skill practiced:** `PY-007`: locate error type/file/line/token, diagnose before editing, repair one misspelled name, repair one indentation boundary, rerun deliberately, and treat tracebacks as evidence rather than punishment.
- **Mastery flow:** Pre-edit diagnosis requires `NameError / line 2 / route_lable` and `IndentationError / line 3 / print`. Each repaired form requires 8/8, retrieval requires 4/4, confidence is captured, and resolved critical misconception tags are cleared at acknowledgement.
- **Compact UI:** The calibration workspace shows one pane at a time with persistent file, form, and `ROUTE OPEN` text. Source fits within eight lines, tracebacks within four, borders and controls use crisp square-pixel treatment, and the layout remains usable at 320px through integer-pixel meadow presentation and Terminal scrolling.
- **Files changed:** `horizon-archive-game/src/App.jsx`, `horizon-archive-game/src/styles.css`, `horizon-archive-game/src/calibrationExercise.js`, `horizon-archive-game/test/calibrationExercise.test.js`, `horizon-archive-game/public/question-manifest.json`, and `playtest/e2e-playthrough.mjs`.
- **Validation:** Thirty unit tests pass. The curriculum self-test covers two valid forms, two real starter tracebacks, and three negative fixtures; both references pass 8/8. Production build and full title-to-credits Playwright regression pass with no runtime errors. Desktop and 320px calibration QA captures verify pane/status/exit presentation.
- **Accessibility and safety:** Native controls follow task → source → Run → output → hint → acknowledgement → exit; traceback and output are selectable and announced; errors remain until the next Run; no timer or attempt limit exists; route state never depends on color or animation; Continue remains available after every exit.
- **Mastery evidence:** Persists only allowlisted IDs, form, diagnosis correctness, form/retrieval check booleans, attempts, maximum hint level, confidence, misconception tags, and mastery status. Learner source, traceback, runtime output, notes, and selections remain in memory only and reset on reload/new expedition/scene transition.
- **Next action:** Pixel Patrol should measure and specify compact Curse-era guidance for the four-pane tab strip, 1-pixel frame hierarchy, traceback/error emphasis, button clusters, monospace bitmap sizing, selected-tab silhouette, and `ROUTE OPEN` status placement at the canonical 640×480 canvas.
- **Risks:** The current compact workspace is a functional pixel-system approximation. Font metrics and exact pane/button spacing need Pixel Patrol's measured benchmark before becoming the production aesthetic standard.

## 2026-07-12 — Coder pass: Glass Meadow production pixels

- **Outcome:** First Signal and Route Marker now inhabit an original `320×180` production-pixel scene with separate silhouettes and locked/awake/completed geometry. Terminal panels dock compactly so the scene stays visible while the editor remains scrollable and keyboard reachable.
- **Files changed:** `src/PixelMeadow.jsx`, `src/pixelMeadow.js`, `test/pixelMeadow.test.js`, App/styles/E2E, production contract, GM-01/design/location records, and desktop/320/completed QA captures.
- **Validation:** 26/26 tests, build, and complete E2E pass. All four exercises, dependency gates, retries, privacy allowlists, reload/resume, forged-save defense, final acknowledgement, credits, and runtime error monitoring remain intact.
- **Accessibility:** Canvas has a two-object alternative description; both silhouettes retain native semantic buttons, visible focus, pointer and Enter activation, and ≥44px targets at desktop and 320px. State never relies on color alone.
- **Next action:** Lore Keeper Agent should preserve interface ownership and write only surface-safe responses for Petal locked/awake/completed and Route Marker locked/awake/completed states.
- **Risks:** Narrow Terminal workspaces use intentional vertical scrolling below a fully visible 320×180 scene; the editor remains reachable but cannot be shown in full simultaneously at 320px.

## 2026-07-12 — Dependency-safe Route Marker Terminal

- **Outcome:** Added `EX-L0102-ROUTE-MARKER` / `A-L0102-3` as a separate meadow hotspot and Machine Terminal after `L-01-01`. Completing the first Python file now wakes the route marker instead of advancing directly; only route-marker mastery unlocks the ruins.
- **Skills practiced:** `PY-004`, `PY-005`, and `PY-006`: string/number/Boolean distinctions, assignment versus output, variable-based printing, reassignment, latest-value tracing, prediction, and transfer.
- **Mastery flow:** Prediction is required before every Run. The primary and fresh transfer forms each require 8/8 under a safe non-executing JS analyzer that mirrors the curriculum AST contract. The transfer requires only `signal_label` to gain a second assignment. Four fixed-choice retrieval distinctions must then pass 4/4 before confidence and acknowledgement.
- **Files changed:** `horizon-archive-game/src/App.jsx`, `horizon-archive-game/src/styles.css`, `horizon-archive-game/src/routeMarkerExercise.js`, `horizon-archive-game/test/routeMarkerExercise.test.js`, `horizon-archive-game/public/question-manifest.json`, and `playtest/e2e-playthrough.mjs`.
- **Validation:** Twenty-two unit tests pass, including valid primary/transfer references, quoted-number, hardcoded-output, missing-reassignment, unsafe-shape, prediction, retrieval, and privacy fixtures. The production build, curriculum self-test/reference commands, and full title-to-credits Playwright journey pass. QA captures cover the awakened hotspot plus desktop and 320px Terminal layouts.
- **Accessibility:** The route marker is a separate native hotspot with a visible ready state. Source, prediction, Run, status, remediation, retrieval, confidence, and acknowledgement follow keyboard order; errors use stable codes and text; output remains selectable; narrow layouts keep task context first and the editor reachable through Terminal scrolling; no motion communicates state.
- **Mastery evidence:** Persists only allowlisted IDs, current form ID, prediction correctness booleans, primary/transfer/retrieval check booleans, attempts, maximum hint level, confidence, misconception tags, and mastery status. Source, prediction text, runtime output, retrieval selections, notes, and free-form input never enter persistent storage.
- **Session behavior:** Same-scene close/reopen restores source, prediction, validator output, and hints. Full reload/resume starts a clean primary form while retaining sanitized evidence. New expedition, route completion, and scene transition clear the working session.
- **Next action:** Location Scout Agent should place a small three-fin route-marker node in the right foreground of the Glass Meadow, clearly separated from the central Petal Terminal, with a readable dormant/awake state and a tight 44px-safe hotspot at desktop and narrow crops.
- **Risks:** The current route-marker interaction region is mapped onto the existing meadow plate without dedicated physical geometry. The next art pass must establish the node silhouette at that location or revise the hotspot coordinates together with the selected plate.

## 2026-07-12 — Coder pass: Evidence Terminal and automaton separation

- **Outcome:** Integrated the WC-01 production plate with two independent hotspots. Only the grounded Evidence Terminal opens `EX-L0507-EVIDENCE-PACKET`; the fallen automaton supplies useful observation, conversation, and redirect responses without becoming an exercise target.
- **Files changed:** `horizon-archive-game/src/App.jsx`, `horizon-archive-game/src/styles.css`, `playtest/e2e-playthrough.mjs`, WC-01/design records, and desktop/320px scene captures.
- **Validation:** Eighteen unit tests, production build, and full title-to-credits E2E pass. Coverage verifies source-aware alignment, minimum size, target separation, distinct accessible names, two-object alt text, visible focus, pointer/Enter behavior, automaton non-launch, assessment mastery, session privacy, reload/resume, save safety, and zero runtime errors.
- **Accessibility:** Both objects are native buttons with verb-specific accessible names. Terminal and automaton focus regions remain visible and non-overlapping at `1600×900` and `320×900`; the narrow Terminal label remains inside the viewport.
- **Next action:** Lore Keeper Agent should treat the automaton as a responsive narrative witness and the grounded Terminal as the sole evidence-workspace interface.
- **Risks:** The mirrored browser validator remains an offline course contract rather than a live Content Understanding service call; this integration does not change that boundary.

## 2026-07-12 — Multimodal Evidence Packet Terminal

- **Outcome:** Replaced the final scene's compact Boolean prompt with the reusable Machine Terminal running `EX-L0507-EVIDENCE-PACKET` / `A-L0507-3`. The workspace exposes the real registered image, playable WAV, manifest, and telemetry beside an editable `working_output.json`, then mirrors the curriculum validator's exact 12-check contract before allowing the existing final narrative acknowledgement and credits gate.
- **Skills practiced:** `AI901-D2-O7`, `PY-015`, `PY-016`, and `PY-020`: schema-driven multimodal extraction, JSON structure, local file/evidence inspection, registered provenance, and deterministic validation.
- **Learning loop:** The starter packet fails with stable error codes. Remediation progresses from a named-boundary cue to a provenance trace and then a worked false-versus-null contrast. Mastery requires 12/12, all critical checks, and confidence capture.
- **Files changed:** `horizon-archive-game/src/App.jsx`, `horizon-archive-game/src/styles.css`, `horizon-archive-game/src/evidencePacketExercise.js`, `horizon-archive-game/test/evidencePacketExercise.test.js`, `horizon-archive-game/public/question-manifest.json`, and `playtest/e2e-playthrough.mjs`.
- **Validation:** Eighteen unit tests pass, including the registered reference packet and critical negative fixtures. The production build and complete title-to-credits browser journey pass. The curriculum validator self-test/reference commands pass. Desktop and 375px evidence-workspace captures are in `playtest/evidence-packet-terminal-*-qa.png`.
- **Accessibility:** Evidence sources are native tabs, JSON and notes have programmatic labels, audio uses native controls, remediation is announced in a live status region, every action is keyboard reachable with visible focus, and the narrow layout exposes the task first while keeping evidence/editor regions reachable through the Terminal scroll area.
- **Mastery evidence:** Persists only allowlisted exercise/lesson/activity/objective/skill identifiers, twelve boolean check results, attempt count, maximum hint level, confidence, misconception tags, and mastery status. Working JSON, scratch notes, evidence-tab state, validator prose, and learner source never enter `localStorage`.
- **Session behavior:** Close/reopen restores the working JSON, notes, active evidence source, validation output, and hint position in memory. Reload/resume, new expedition, completion, and scene transition clear that working session while sanitized mastery survives.
- **Next action:** Location Scout Agent should design a dedicated final-scene evidence Terminal node with a readable inspection surface, three modality indicators, and a tighter 44px-safe hotspot distinct from the automaton's body silhouette.
- **Risks:** The current automaton hotspot remains landmark-sized because no dedicated final-scene node plate exists yet. The browser validator intentionally mirrors the offline course contract and does not represent a live Content Understanding service call.

## 2026-07-12 — Coder pass: physical Workload Sort Terminal integration

- **Outcome:** Replaced the ruins reference plate and landmark-sized hotspot with the selected Drowned Archive clean plate and a tight target on its grounded three-fin Machine Terminal. The suspended archive is now non-interactive environmental storytelling.
- **Files changed:** `horizon-archive-game/src/App.jsx`, `horizon-archive-game/src/styles.css`, `playtest/e2e-playthrough.mjs`, AB-01 concept-art records, and desktop/narrow QA captures.
- **Validation:** Thirteen unit tests and the production build pass. Full Playwright progression exercises source-aware hotspot alignment, 44-pixel target size, pointer and Enter-key activation at desktop and `320px`, alt text, Workload Sort remediation/mastery/session privacy, title-to-credits, and console/page-error monitoring.
- **Accessibility:** The hotspot's accessible name identifies a grounded Workload Sort Terminal; the scene alternative text distinguishes it from the suspended landmark. Native-button keyboard behavior is regression tested at both supported layout modes.
- **Next action:** Lore Keeper Agent can add a spoiler-safe observation or reconnection response unique to the grounded node while keeping the suspended landmark silent.
- **Risks:** On narrow screens, the crop prioritizes the complete grounded node and shows only part of the suspended landmark. The full landscape remains available on desktop.

## 2026-07-11 — Workload Sort Machine Terminal

- **Outcome:** Integrated `L-02-01` activity `A-L0201-2` as the ruins Machine Terminal using the reusable editor shell. `EX-L0201-WORKLOAD-SORT` now presents the curriculum's deterministic 12-card primary form, enforces the 10/12 gate and critical-contrast override, and loads the separate deterministic retry form after remediation.
- **Skills practiced:** `AI901-D1-O4-WORKLOAD-MATCH` and `TERM-STATE-001`: identify the best primary AI workload from input/job/output cues and distinguish editable source, runtime output, saved mastery evidence, and temporary working state.
- **Learning loop:** A first miss produces an input/action/output cue; the learner may reveal a contrast hint; a second miss produces the worked contrast. Corrected retries count, unresolved critical contrasts block mastery, and a failed form requires the fresh retry set.
- **Files changed:** `horizon-archive-game/src/App.jsx`, `horizon-archive-game/src/styles.css`, `horizon-archive-game/src/workloadSortExercise.js`, `horizon-archive-game/test/workloadSortExercise.test.js`, `horizon-archive-game/public/question-manifest.json`, and `playtest/e2e-playthrough.mjs`.
- **Validation:** Thirteen unit tests pass, including both forms, threshold behavior, critical overrides, remediation, and evidence sanitization. The production build and full title-to-credits Playwright journey pass. The curriculum Python asset self-test passes. The 1600×900 render was visually inspected in `playtest/workload-sort-terminal-qa.png`.
- **Accessibility:** Fixed choices use native radio controls and fieldsets; actions and confidence capture are keyboard reachable; headings, progress, output/remediation, and live feedback have programmatic labels; visible focus and responsive layout reuse the Terminal system.
- **Mastery evidence:** Persists only allowlisted exercise/lesson/activity/skill identifiers, per-item booleans, attempt count, maximum hint level, confidence, misconception tags, and mastery status. Scenario text, selected draft responses, and other working-session fields are not saved.
- **Session behavior:** Closing/reopening restores the current card, selection, hint, and output in memory. Reload/resume or scene transition clears that draft while preserving sanitized mastery evidence.
- **Next action:** Location Scout Agent should define a distinct, readable physical node and hotspot placement for the Workload Sort Terminal in the ruins scene, differentiating it from the meadow code Terminal while preserving the shared Machine interface language.
- **Risks:** The current prototype places the learning Terminal on the existing broad ruins hotspot; a dedicated node silhouette and tighter hit region are needed before final environment production.

## 2026-07-11 — Coder pass: preserve the active Terminal session

- **Outcome:** Closing and reopening the Machine Terminal during the meadow encounter now restores the learner's exact in-memory editing session: code, progressive hint position, attempt evidence, and the most recent run feedback/output. The session resets on a new expedition, resume/reload, exercise completion, and scene advancement.
- **Files changed:** `horizon-archive-game/src/App.jsx` and `playtest/e2e-playthrough.mjs`.
- **Validation:** All nine unit tests pass, the Vite production build passes, and the full title-to-credits Playwright journey passes. The browser regression closes and reopens an in-progress failed attempt, verifies editor/hint/feedback/attempt continuity, completes the exercise and remaining scenes, rejects forged progression, and detects console or page errors.
- **Privacy:** Raw `localStorage` is checked during an active attempt. Learner code, the session-only sentinel, displayed hint text, and run feedback are absent; only sanitized mastery evidence (including attempt count and hint use) persists.
- **Next action:** Lore Keeper Agent can support the close/reopen affordance with a short spoiler-safe Terminal reconnection line or interaction note; no new plot dependency is required.
- **Risks:** Deliberately session-only code is lost on a browser reload or explicit resume. That boundary preserves the existing privacy contract and should only change after a separate product/privacy decision.

## 2026-07-11 — First reusable Machine Terminal slice

- **Outcome:** Replaced the meadow's compact one-line prompt with an in-world editor workbench for the independent run activity in `L-01-01`. The encounter follows attempt → targeted feedback → progressive hint → retry → completion acknowledgement.
- **Skill practiced:** `PY-001`, `PY-002`, and `PY-003`: recognize and edit a Python file, assign text and numeric variables, run print instructions, and distinguish program output.
- **Curriculum contracts:** lesson `L-01-01`, activity `A-L0101-3`, readiness gate `AS-L0101-CK`.
- **Files changed:** `horizon-archive-game/src/App.jsx`, `horizon-archive-game/src/styles.css`, `horizon-archive-game/src/terminalExercise.js`, `horizon-archive-game/public/question-manifest.json`, `horizon-archive-game/test/terminalExercise.test.js`, and `playtest/e2e-playthrough.mjs`.
- **Validation:** Nine unit tests pass. The Vite production build passes. The full title-to-credits Playwright journey passes with forged-save rejection, Terminal failure/hint/retry/acknowledgement, structured evidence, reload/resume, and credits checks. The 1600×900 render was visually inspected in `playtest/terminal-exercise-qa.png`.
- **Accessibility:** Named editor and output regions, semantic headings, keyboard-reachable actions, visible focus, status live region, and responsive single-column fallback.
- **Mastery evidence:** Saves only stable exercise/lesson/activity/assessment/skill identifiers plus attempt count, hint use, and completion. Learner code and call sign remain transient and are not persisted.
- **Next action:** Developer Agent should review whether the Terminal overlay should become a shared React component before a second exercise is integrated.
- **Risks:** The prototype evaluates the bounded beginner syntax locally; it does not yet execute arbitrary Python. Rich syntax highlighting and cursor-synchronized line-number scrolling are deferred.
