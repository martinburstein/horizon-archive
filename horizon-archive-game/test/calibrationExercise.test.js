import test from "node:test";
import assert from "node:assert/strict";
import { calibrationExercise, calibrationStarters, evaluateCalibrationDiagnosis, evaluateCalibrationRetrieval, evaluateCalibrationSource, sanitizeCalibrationMastery, updateCalibrationMastery } from "../src/calibrationExercise.js";

test("keyboard orientation is exact, visible-only guidance and explicitly ungraded", () => {
  assert.equal(calibrationExercise.ungraded_keyboard_orientation.copy, "Tab moves through this workspace. Shift+Tab moves back. Escape closes without discarding this session.");
  assert.equal(calibrationExercise.ungraded_keyboard_orientation.visible_exit_required, true);
  assert.equal(calibrationExercise.ungraded_keyboard_orientation.included_in_mastery_evidence, false);
  assert.deepEqual(calibrationExercise.mastery.explicitly_ungraded, ["Tab", "Shift+Tab", "Escape", "focus", "modal", "inert"]);
});

test("diagnoses must identify type line and token before repair", () => {
  assert.deepEqual(evaluateCalibrationDiagnosis({ errorType: "NameError", lineNumber: "2", namedToken: "route_lable" }, "traceback"), { errorType: true, lineNumber: true, namedToken: true });
  assert.deepEqual(evaluateCalibrationDiagnosis({ errorType: "IndentationError", lineNumber: "3", namedToken: "print" }, "indentation"), { errorType: true, lineNumber: true, namedToken: true });
});

test("both repaired forms mirror the eight-check curriculum contract", () => {
  assert.equal(evaluateCalibrationSource('route_label = "ROUTE VERIFIED"\nprint(route_label)', "traceback").score, 8);
  assert.equal(evaluateCalibrationSource('route_open = True\nif route_open:\n    print("CALIBRATION READY")', "indentation").score, 8);
  assert.equal(evaluateCalibrationSource(calibrationStarters.traceback, "traceback").passed, false);
  assert.equal(evaluateCalibrationSource(calibrationStarters.indentation, "indentation").passed, false);
});

test("retrieval includes the route-open safety distinction", () => {
  const checks = evaluateCalibrationRetrieval({ R_ERROR_TYPE: "last", R_LINE: "location", R_ONE_CHANGE: "test", R_ROUTE: "open" });
  assert.equal(Object.values(checks).every(Boolean), true);
});

test("mastery sanitizer strips source traceback output and notes", () => {
  let evidence = updateCalibrationMastery(null, { formId: "traceback", incrementAttempt: true, diagnosisCorrectness: { errorType: true, lineNumber: true, namedToken: true }, checkResults: evaluateCalibrationSource('route_label = "ROUTE VERIFIED"\nprint(route_label)', "traceback").checks, hintLevel: 1 });
  evidence = sanitizeCalibrationMastery({ ...evidence, source: "private", traceback: "private", output: "private", notes: "private" });
  assert.equal(evidence.attemptCount, 1);
  for (const key of ["source", "traceback", "output", "notes"]) assert.equal(key in evidence, false);
});
