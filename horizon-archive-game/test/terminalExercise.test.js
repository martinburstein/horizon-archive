import test from "node:test";
import assert from "node:assert/strict";
import {
  evaluateTerminalCode,
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
