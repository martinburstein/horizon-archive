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
  assert.match(firstTerminalOrientation.disclaimer, /course-authored practice/i);
  assert.match(firstTerminalOrientation.disclaimer, /not a Microsoft exam question/i);
  assert.match(firstTerminalOrientation.exampleCode, /^message = "Terminal found\."$/m);
  assert.match(firstTerminalOrientation.exampleCode, /^signal = 1$/m);
  assert.match(firstTerminalOrientation.exampleCode, /^print\("Python signal:", signal\)$/m);
  assert.match(firstTerminalOrientation.changedCode, /^signal = 2$/m);
  assert.match(firstTerminalOrientation.steps[2].body, /Slot 01.*display name.*local save data/i);
  assert.match(firstTerminalOrientation.steps[2].body, /Mastery evidence.*allowlisted/i);
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
  const orientationGate = source.indexOf("{!terminalOrientationComplete ? (");
  const editableForm = source.indexOf('<form className="editor-layout" onSubmit={runTerminal}>', orientationGate);
  assert.ok(orientationGate >= 0 && editableForm > orientationGate);
  assert.match(source, /onClose=\{exitFirstTerminal\}/);
  assert.match(source, /Reopen it to continue from the same orientation or code step/);
  assert.match(source, /ref=\{firstTerminalEditorRef\}/);
  assert.match(source, /No name, source, output, credentials, or private notes/);
});
