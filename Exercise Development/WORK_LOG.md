# Exercise Agent Work Log

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
