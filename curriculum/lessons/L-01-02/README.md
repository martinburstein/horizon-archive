# L-01-02 — Strings, Variables, and Visible Output

**Bridge instruction:** This is course-authored Python prerequisite instruction. AI-901 expects foundational Python syntax and programming techniques, but this route-marker exercise is not a Microsoft product lab or official Microsoft Learn lesson.

## Mission

Create a compact human survey label, predict its two output lines, and then change one stored value so you can see which later output changes.

The small route-marker Terminal repeats the produced label in light. That shows only that a bounded output was repeated; it does not prove that the site was renamed or that anything understood the words.

## Four ideas

- A **string** is text in quotation marks: `"DROWNED ARCHIVE"`.
- A **number** is numeric data without quotation marks: `3`.
- A **boolean** is `True` or `False`, with no quotation marks.
- A **variable** is a name that refers to a value: `channel_count = 3`.

The equals sign in a simple assignment stores the value on the right under the name on the left. It does not print anything by itself.

```python
channel_count = 3
print(channel_count)
```

The first line assigns. The second line produces visible output.

## Activity 1 — Identify each part

For `route_open = False`, say each answer before reading on:

- variable name: `route_open`
- assignment operator: `=`
- value: `False`
- value type: boolean

Now compare:

- `3` is a number; `"3"` is a string.
- `True` is a boolean; `"True"` is a string.
- `site_name` is a variable name; `"DROWNED ARCHIVE"` is the string it can store.
- `site_name = "DROWNED ARCHIVE"` is source code; `DROWNED ARCHIVE` can be runtime output.

## Activity 2 — Primary route marker

Open `route_marker_primary.py`. Replace only the `TODO` values so the variables contain:

- `site_name`: string `DROWNED ARCHIVE`
- `signal_label`: string `LOCAL SURFACE`
- `channel_count`: number `3`

Before running, write or say the exact two output lines. Then validate:

```powershell
python validate_route_marker.py --form primary --check route_marker_primary.py
```

Success is 8/8. The output must come from the variables. Writing the expected words directly inside `print()` hides whether you understand storage and reuse.

## Activity 3 — Reassign and transfer

Open `route_marker_transfer.py`. Complete the same three starting assignments, then replace the reassignment placeholder so `signal_label` changes from `LOCAL SURFACE` to `ROUTE VERIFIED` before the two `print()` calls.

Predict both lines before running:

1. Does changing `signal_label` change the line produced from `site_name`?
2. Which value will the later `print(signal_label, channel_count)` use?

Validate the fresh form:

```powershell
python validate_route_marker.py --form transfer --check route_marker_transfer.py
```

Python uses the latest value assigned before a line runs. Reassignment changes later uses of that variable; it does not rewrite earlier source lines or unrelated variables.

## Retrieval gate

Close the source files first.

1. What is the difference between `3` and `"3"`?
2. Does `signal_label = "LOCAL SURFACE"` display text by itself?
3. After `signal_label` is reassigned to `"ROUTE VERIFIED"`, what does a later `print(signal_label)` display?
4. Why should `print(signal_label, channel_count)` use variable names instead of repeating literal answers?

Check with `check.md`.

## Progressive remediation

Use the smallest route that matches the validator code:

1. **Literal cue:** `E_VALUE` or `E_CHANNEL_TYPE` means check quotes and exact capitalization.
2. **Assignment trace:** draw an arrow from each variable name to its current value.
3. **Output trace:** at each `print()`, read the latest value above that line.
4. **Worked comparison:** inspect the matching reference file only after an independent attempt, then close it and rebuild your form.

Critical misconception tags:

- `quoted-number-is-number`
- `assignment-prints-output`
- `hardcoded-output-is-variable-use`
- `reassignment-changes-everything`
- `earlier-value-survives-reassignment`

## Accessibility contract

- Instructions and errors use text and stable codes, never color alone.
- Expected output is selectable text and should be announced as a status region in the game.
- There is no time limit.
- Keyboard users can reach source, prediction, Run, output, hints, and acknowledgement in logical order.
- Reduced motion removes light pulses without removing state information.
- A hint never changes story access or the mastery target.

## Spaced review

- Tomorrow: recreate three variables and two `print()` calls without looking.
- In three days: explain string, number, boolean, variable, assignment, and output from memory.
- In seven days: write a fresh two-line label, reassign one variable, and predict the result before running.

