# Exercise Agent Work Log

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
