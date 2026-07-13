# Horizon Archive playable demo

Double-click `PLAY_HORIZON_ARCHIVE_DEMO.cmd` in the project folder.

The launcher builds the frozen demo, starts it only on this computer at
`http://127.0.0.1:4173`, and opens it in the default browser. Keep the launcher
window open while playing; press `Ctrl+C` in that window when finished.

## Demo scope

The playable slice runs from the title screen through the current credits and
includes the zero-Python learning path, the packaged AI-901 lesson sequence,
Capstone Readiness, and Mixed Simulation Block 1. Mixed Simulation Block 2 and
later story development are intentionally held for after the demo freeze.

The learning material is course-authored practice. It is not an official exam
result, an exam guarantee, or authorization to create or change live services.

## Controls

- Mouse or touch: choose visible actions and hotspots.
- Keyboard: use `Tab` and `Shift+Tab` to move focus, `Enter` or `Space` to
  activate a focused control, and `Escape` to close a Terminal.
- Progress is stored locally in the browser using sanitized completion evidence.
  Submitted code, answer prose, credentials, prompts, and service payloads are
  not retained as progress data.

## If the launcher cannot start

Install the current Node.js LTS release, reopen the project folder, and run the
launcher again. The first run may prepare local JavaScript dependencies. No
Azure sign-in, credentials, or cloud resources are required.
