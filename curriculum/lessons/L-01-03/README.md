# L-01-03 — Errors, Indentation, and Debugging Mindset

**Bridge instruction:** This is course-authored Python prerequisite instruction. The current AI-901 guide expects foundational Python syntax and programming techniques, but this calibration exercise is not an official Microsoft lesson or a live Foundry task.

## Mission

Read one small traceback, repair one misspelled variable, then repair one indentation error in a fresh file.

> The route is stable. The error is in our copy. Good—mistakes we can locate are mistakes we can repair.

The files belong to the human expedition calibration layer. A code error never damages a Terminal, changes the world, consumes a resource, or closes the already-marked route. You can leave and return without creating a dead end.

At the departure choice, read [Optional Calibration or Depart](optional-calibration-handoff.md). It explains why the route stays open, what the strict optional-practice gate measures, and which working or mastery data survives exit, reload, and departure.

When the completed route later offers backtracking, read [Return Is Navigation, Not a Score](safe-return-state-guide.md). The restored scene and exact return/departure controls change navigation only; they never count as a new attempt, mastery evidence, objective completion, exam progress, or readiness.

## Keyboard orientation — ungraded

> Tab moves through this workspace. Shift+Tab moves back. Escape closes without discarding this session.

The visible `Exit Calibration` control performs the same safe dismissal. Keyboard technique helps you operate the workspace, but it is not part of `PY-007`, the retrieval score, or mastery. Escape/Exit preserves the current calibration session, and the physical route remains open.

## A traceback is location evidence

When Python cannot finish, it reports where it stopped and what kind of error occurred. For this lesson, read from the bottom upward:

1. Last line: error type and short message.
2. `File ... line N`: the source line Python was using.
3. Named line: the place to inspect first—not proof that every nearby line is wrong.

Do not change five things at once. Locate, classify, make one repair, rerun.

## Activity 1 — Traceback and name repair

Run the starter exactly as supplied:

```powershell
python calibration_traceback.py
```

Before editing, record:

- error type;
- line number;
- undefined name.

Expected diagnosis: `NameError`, line `2`, undefined name `route_lable`.

Compare line 2 with the assignment on line 1. Repair only the misspelled variable name, save, then validate:

```powershell
python validate_calibration.py --form traceback --check calibration_traceback.py
```

Pass is 8/8 with output:

```text
ROUTE VERIFIED
```

## Activity 2 — Fresh indentation repair

Run the transfer starter:

```powershell
python calibration_indentation.py
```

Before editing, record:

- error type;
- line number Python points to;
- which line should belong inside the `if` block.

Expected diagnosis: `IndentationError`, line `3`; the `print()` line belongs inside the block.

Indent line 3 by four spaces, save, then validate:

```powershell
python validate_calibration.py --form indentation --check calibration_indentation.py
```

Pass is 8/8 with output:

```text
CALIBRATION READY
```

Indentation is structure, not decoration. It tells Python which instructions belong inside a block.

## Retrieval gate

Close both source files first.

1. Which traceback line normally names the error type?
2. What does `File "...", line 2` give you?
3. Why is changing one suspected cause before rerunning better than random edits?
4. Does a failed calibration run close or alter the marked adventure route?

Use `check.md` after answering.

## Progressive remediation

1. **Locate:** highlight only error type, file, and line number.
2. **Compare:** for `NameError`, compare the undefined name character by character with earlier assignments.
3. **Structure:** for `IndentationError`, identify the line ending in `:` and the instruction that belongs beneath it.
4. **Worked repair:** inspect the matching reference only after an independent attempt, close it, and reproduce the repair in the starter.

Misconception tags:

- `traceback-is-punishment`
- `line-number-is-random`
- `random-edits-are-debugging`
- `indentation-is-decoration`
- `code-error-closes-route`

## Compact-layout accessibility contract

- Show one pane at a time: task, source, output/traceback, or hint. Do not force a three-column editor into 640×480.
- Keep the current file and route-open status visible in text on every pane.
- Show at most eight source lines and four traceback lines without scrolling; these exercises fit that budget.
- Use a high-contrast scientific workspace with crisp readable type, restrained contemporary chrome, and no retro pixelation. Keep controls visually consistent with the expedition overlay rather than the photorealistic Builder world.
- Error type, file, and line are selectable text and announced as a status update.
- Keyboard order is task → source → Run → output → hint → acknowledgement.
- No time limit, color-only state, forced animation, or disappearing error message.
- Exit Calibration is always available and never clears mastery evidence.

## Mastery gate

Advance in the curriculum when all are true:

- both diagnoses were recorded before editing;
- traceback form: 8/8;
- indentation form: 8/8;
- retrieval: 4/4;
- no critical misconception remains;
- learner can say: “The route stayed open; I repaired the human copy.”

Tab, Shift+Tab, Escape, focus, modal behavior, and the meaning of `inert` are orientation topics only. They are never scored.

Adventure traversal does not depend on passing this gate. Lesson mastery can be resumed safely.

## Spaced review

- Tomorrow: label error type, file, and line in a new three-line traceback.
- In three days: repair one misspelled name and one indentation fault without a worked example.
- In seven days: explain locate → classify → repair one thing → rerun, then apply it to a later structured-data exercise.
