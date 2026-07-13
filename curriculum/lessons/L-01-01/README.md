# L-01-01 — Run Your First Python File

**Bridge instruction:** This lesson is course-authored prerequisite instruction. It teaches the Python fluency needed for later Foundry client labs; it is not an official Microsoft Learn lesson.

Coming directly from the opening? Read [Before Your First Terminal](first-terminal-orientation.md) before selecting the Terminal's first task. It explains the edit-run-retry loop and keeps local expedition save data separate from temporary code and mastery evidence.

## Mission

By the end, you will create a small program, run it, change it, and explain what happened. You do not need prior coding knowledge.

## Four words to know

- **Python:** the language you are learning.
- **File:** saved text containing instructions. A Python file ends in `.py`.
- **Terminal:** a text window where you type commands for the computer.
- **Output:** what a program shows after it runs.

The file contains Python. PowerShell runs a command. Python reads the file. The text printed by the program is output.

## Activity 1 — Verify Python

Open PowerShell in this lesson folder and enter:

```powershell
python --version
```

Success looks like `Python 3.x.x`. If PowerShell says Python is not recognized, stop and use the remediation section. Do not guess through installation errors.

## Activity 2 — Predict, run, inspect

Before running anything, open `first_signal.py` and predict the two output lines. Then run:

```powershell
python first_signal.py
```

Expected output:

```text
Horizon Archive online.
Python signal: 1
```

What happened:

1. `python` started the Python interpreter.
2. `first_signal.py` told it which file to read.
3. Each `print(...)` instruction produced one line of output.

## Activity 3 — Change one thing

Change `signal = 1` to `signal = 2`, save the file, and run it again. You should see `Python signal: 2`.

Now complete the independent challenge without copying a finished answer:

1. Add a variable named `learner` containing your first name or a nickname.
2. Add a third `print(...)` instruction.
3. Make the third line display `Operator: <your name>`.
4. Save and run.

Example shape, not the answer: a name is text, so Python surrounds it with quotation marks. `print("Operator:", learner)` can print a label and a variable.

## Retrieval check — close the code first

Answer aloud or on paper before opening `check.md`.

1. Which filename ending tells you a file contains Python?
2. What does the command `python first_signal.py` ask the computer to do?
3. If you edit but do not save, which version normally runs?
4. Is `Python signal: 2` an instruction or output?
5. Write one Python instruction that displays `ready`.

## Mastery gate

Pass when both are true:

- Your independent challenge runs with no error and produces three sensible lines.
- You answer at least four retrieval questions correctly, including questions 2 and 4.

If not, use one remediation route, then retry with a new value. A first error is diagnostic information, not a verdict.

## Remediation

- **Python not recognized:** installation or PATH is missing. Record the exact message. Install a current Python 3 release through an approved method, reopen PowerShell, and retry `python --version`.
- **Can't open file:** PowerShell is in the wrong folder or the filename differs. Run `Get-ChildItem` and compare the displayed filename exactly.
- **SyntaxError:** inspect the named line. Check quotation marks and parentheses first.
- **Old output appears:** save the file, confirm its last-modified time, and run again.
- **Still stuck after two attempts:** copy the exact command, full error, and the named line into the error log. Do not repeatedly make random edits.

## Spaced review

- Tomorrow: recreate a two-line program in a new file without looking.
- In three days: explain file, command, interpreter, and output from memory.
- In seven days: run a tiny script from a different folder and diagnose one deliberate filename error.
