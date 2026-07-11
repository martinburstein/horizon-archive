# Horizon Archive player/debugger loop

This folder defines the QA loop for the playable Horizon Archive prologue in
`../horizon-archive-game/`.

## Roles

- **Player agent:** starts from a clean save, plays only through the public UI,
  answers every required question, and records the run in `runs/`.
- **Debugger agent:** reproduces each reported failure, changes only game or
  test code, records the diagnosis/fix on the bug report, and asks the player
  to retry from the required checkpoint (or from a clean save when state may
  be contaminated).

## Loop

1. Copy `playtest.config.example.json` to `playtest.config.json` and set the
   real game entry point after the game exists.
2. Run `./preflight.ps1`. Do not begin a playtest unless it exits successfully.
3. Player creates a run report conforming to `schemas/run-report.schema.json`.
   Validate it with `./validate-run.ps1 -RunPath <report> -ManifestPath <manifest>`.
   The script enforces cross-field and manifest rules. JSON Schema validation
   itself remains a separate CI integration until the game chooses a runtime
   and validator library.
4. On a failure, player creates a bug report conforming to
   `schemas/bug-report.schema.json` and sends its path to the debugger.
5. Debugger reproduces, fixes, tests, and updates `debugger_resolution`.
6. Player retries and starts a new run report whose `supersedes_run_id` points
   to the prior run. Repeat until all acceptance checks pass.

## Title-to-credits acceptance criteria

A run is accepted only when all of these are true:

- a clean-save launch visibly reaches the title screen;
- the player starts a new game through the public UI;
- every required question is displayed, answerable, and answered correctly;
- wrong-answer recovery is tested at least once without corrupting progress;
- question completion and chapter progress persist as designed;
- no required path is blocked by a crash, dead end, missing control, or
  impossible answer;
- the ending triggers only after all required questions are complete;
- credits are visibly reached and the run records their terminal marker;
- the run report has `result: "passed"`, zero open blocking bugs, and matching
  nonzero `questions_answered` / `questions_required` counts;
- the run's question IDs equal the manifest's required question ID set exactly
  (no omissions, additions, or duplicates);
- the transcript records each public-UI action/input and visible result with a
  checkpoint, question ID where applicable, and evidence path where available;
- build provenance, launch command, environment, clean-save procedure/result,
  manifest hash, persistence test, premature-ending gate test, and the exact
  wrong-answer recovery probe are recorded.

The current prologue is wired into `playtest.config.json`; run `preflight.ps1`
before each title-to-credits playthrough.
