import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  checkFirstTerminalOrientation,
  evaluateTerminalCode,
  firstTerminalOrientation,
  sanitizeExerciseEvidence,
  terminalExercise,
  updateExerciseEvidence,
} from "../src/terminalExercise.js";

const passingCode = `message = "Horizon Archive online."
signal = 2
learner = "PILOT"

print(message)
print("Python signal:", signal)
print("Operator:", learner)`;

test("independent first-signal solution produces the expected output", () => {
  const result = evaluateTerminalCode(passingCode);
  assert.equal(result.passed, true);
  assert.match(result.output, /Python signal: 2/);
  assert.match(result.output, /Operator: PILOT/);
});

test("feedback targets the first missing requirement", () => {
  assert.match(evaluateTerminalCode(terminalExercise.starterCode).feedback, /wrong value/);
  assert.match(evaluateTerminalCode(passingCode.replace('learner = "PILOT"', "")).feedback, /learner/);
  assert.match(evaluateTerminalCode(passingCode.replace('print("Operator:", learner)', "")).feedback, /third print/);
});

test("mastery evidence stores identifiers and behavior, never submitted code", () => {
  let evidence = updateExerciseEvidence(null, { incrementAttempt: true });
  evidence = updateExerciseEvidence(evidence, { incrementAttempt: true, hintUsed: true, completed: true });
  assert.equal(evidence.attempts, 2);
  assert.equal(evidence.hintUsed, true);
  assert.equal(evidence.completed, true);
  assert.equal(evidence.lessonId, "L-01-01");
  assert.deepEqual(evidence.skillIds, ["PY-001", "PY-002", "PY-003"]);
  assert.equal("code" in evidence, false);
  assert.deepEqual(sanitizeExerciseEvidence({ ...evidence, attempts: 200, code: passingCode }), { ...evidence, attempts: 99 });
});

test("first-Terminal orientation is bounded course practice using real Python", () => {
  assert.equal(firstTerminalOrientation.steps.length, 4);
  assert.deepEqual(firstTerminalOrientation.steps.map((step) => step.id), [
    "run-control",
    "safe-retry",
    "storage-boundaries",
    "output-prediction",
  ]);
  assert.match(firstTerminalOrientation.disclaimer, /course-authored Python practice/i);
  assert.match(firstTerminalOrientation.disclaimer, /not expected to know Python yet/i);
  assert.match(firstTerminalOrientation.disclaimer, /not a Microsoft exam question/i);
  assert.match(firstTerminalOrientation.disclaimer, /does not guarantee an AI-901 result/i);
  assert.match(firstTerminalOrientation.exampleCode, /^message = "Terminal found\."$/m);
  assert.match(firstTerminalOrientation.exampleCode, /^signal = 1$/m);
  assert.match(firstTerminalOrientation.exampleCode, /^print\("Python signal:", signal\)$/m);
  assert.equal(firstTerminalOrientation.signalChange, "signal = 1  →  signal = 2");
  assert.equal(firstTerminalOrientation.steps[1].heading, "Inspect, hint, and retry");
  assert.match(firstTerminalOrientation.steps[1].body, /cannot damage the world or consume the lesson/i);
  assert.match(firstTerminalOrientation.steps[2].body, /Local save.*working session.*allowlisted mastery evidence/i);
  assert.match(firstTerminalOrientation.steps[3].body, /saving.*selecting Run.*second output line/i);
});

test("each orientation check allows unlimited retry but advances only on its correct answer", () => {
  firstTerminalOrientation.steps.forEach((step, stepIndex) => {
    const wrongOption = step.options.find((option) => option.id !== step.correctOptionId);
    for (let retry = 0; retry < 5; retry += 1) {
      const result = checkFirstTerminalOrientation(stepIndex, wrongOption.id);
      assert.equal(result.passed, false);
      assert.match(result.feedback, /Try again/i);
    }
    assert.equal(checkFirstTerminalOrientation(stepIndex, step.correctOptionId).passed, true);
  });
  assert.equal(checkFirstTerminalOrientation(firstTerminalOrientation.steps.length, "run").passed, false);
});

test("App gates the editable first signal behind the session-only orientation and restores focus safely", () => {
  const source = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
  const styles = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");
  const orientationGate = source.indexOf("{!terminalOrientationComplete ? (");
  const editableForm = source.indexOf('<form className="editor-layout" onSubmit={runTerminal}>', orientationGate);
  assert.ok(orientationGate >= 0 && editableForm > orientationGate);
  assert.match(source, /terminalOpen && scene\.id === "meadow" && meadowTerminalKind === "first"/);
  assert.match(source, /onClose=\{exitFirstTerminal\}/);
  assert.match(source, /Reopen it to continue from the same orientation or code step/);
  assert.match(source, /ref=\{firstTerminalEditorRef\}/);
  assert.match(source, /reload, resume, completion, or scene transition clears them/);
  assert.match(source, /No display name, source code, output, credentials, or private notes/);
  assert.equal(source.match(/\{firstTerminalOrientation\.disclaimer\}/g)?.length, 1);
  assert.doesNotMatch(source, /orientation-session-note|orientation-recovery/);
  assert.match(source, /data-orientation-step=\{activeTerminalOrientationStep\.id\}/);
  assert.ok(source.indexOf('className="orientation-context"', orientationGate) < source.indexOf('className="orientation-action"', orientationGate));
  assert.ok(source.indexOf('className="orientation-action"', orientationGate) < source.indexOf('className="orientation-choices"', orientationGate));
  assert.match(styles, /\.canonical-game-frame \.first-terminal-orientation \{ display: grid; overflow: hidden; \}/);
  assert.match(styles, /\.canonical-game-frame \.adventure-screen\[data-scene\]\[data-terminal-open\] \{ grid-template-rows: var\(--world-height\) var\(--interface-height\); overflow: hidden; \}/);
  assert.match(styles, /\.first-terminal-orientation \{[^}]*grid-template-rows: auto minmax\(0, 1fr\);[^}]*overflow: hidden;/s);
  assert.match(styles, /\.orientation-action \{[^}]*overflow: auto;/s);
  assert.match(styles, /\.orientation-choices button \{[^}]*min-height: 44px;/s);
  assert.match(styles, /\.canonical-game-frame\[data-canonical-layout="canonical"\] \.first-terminal-orientation \{[^}]*grid-template-columns:[^}]*grid-template-rows: minmax\(0, 1fr\);/s);
  assert.match(styles, /\.canonical-game-frame\[data-canonical-layout="canonical"\] \.orientation-action \{[^}]*overflow: hidden;/s);
  assert.match(styles, /\.canonical-game-frame\[data-canonical-layout="canonical"\] \.orientation-choices button \{[^}]*min-height: 44px;/s);
  assert.match(styles, /\.canonical-game-frame\[data-canonical-layout="canonical"\] \.orientation-boundaries div \{[^}]*grid-template-columns: 104px minmax\(0, 1fr\);/s);
  assert.match(styles, /\.canonical-game-frame\[data-canonical-layout="narrow"\][^}]*\.terminal-workbench[^}]*\{ inset: 4px; \}/s);
  assert.match(styles, /\.canonical-game-frame\[data-canonical-layout="narrow"\] \.first-terminal-orientation \{ display: grid; grid-template-rows: auto minmax\(0, 1fr\); overflow: hidden; \}/);
  assert.match(styles, /\.canonical-game-frame\[data-canonical-layout="narrow"\] \.orientation-action \{[^}]*min-height: 0;[^}]*overflow: auto;/s);
  assert.match(styles, /\.canonical-game-frame\[data-canonical-layout="narrow"\] \.orientation-choices \{ grid-template-columns: 1fr; \}/);
});
