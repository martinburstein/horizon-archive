import test from "node:test";
import assert from "node:assert/strict";
import {
  evaluateRoutePrediction,
  evaluateRouteRetrieval,
  evaluateRouteSource,
  sanitizeRouteMarkerMastery,
  updateRouteMarkerMastery,
} from "../src/routeMarkerExercise.js";

const primary = `site_name = "DROWNED ARCHIVE"
signal_label = "LOCAL SURFACE"
channel_count = 3

print(site_name)
print(signal_label, channel_count)`;
const transfer = `site_name = "DROWNED ARCHIVE"
signal_label = "LOCAL SURFACE"
channel_count = 3

signal_label = "ROUTE VERIFIED"

print(site_name)
print(signal_label, channel_count)`;

test("safe JS analyzer mirrors both eight-check reference forms", () => {
  assert.equal(evaluateRouteSource(primary, "primary").score, 8);
  assert.equal(evaluateRouteSource(primary, "primary").passed, true);
  assert.deepEqual(evaluateRouteSource(transfer, "transfer").outputs, ["DROWNED ARCHIVE", "ROUTE VERIFIED 3"]);
  assert.equal(evaluateRouteSource(transfer, "transfer").passed, true);
});

test("quoted numbers, hardcoded output, and missing reassignment fail stable checks", () => {
  assert.equal(evaluateRouteSource(primary.replace("channel_count = 3", 'channel_count = "3"'), "primary").checks.E_CHANNEL_TYPE, false);
  assert.equal(evaluateRouteSource(primary.replace("print(site_name)", 'print("DROWNED ARCHIVE")'), "primary").checks.E_PRINT_VARIABLES, false);
  assert.equal(evaluateRouteSource(transfer.replace('\nsignal_label = "ROUTE VERIFIED"\n', "\n"), "transfer").checks.E_LABEL_HISTORY, false);
  assert.equal(evaluateRouteSource(`${primary}\nsite_name = input()`, "primary").checks.E_SAFE_SHAPE, false);
});

test("prediction and retrieval gates are deterministic", () => {
  assert.deepEqual(evaluateRoutePrediction(["DROWNED ARCHIVE", "LOCAL SURFACE 3"], "primary"), [true, true]);
  assert.deepEqual(evaluateRoutePrediction(["DROWNED ARCHIVE", "LOCAL SURFACE 3"], "transfer"), [true, false]);
  assert.deepEqual(evaluateRouteRetrieval({
    R_NUMBER_STRING: "number_string",
    R_ASSIGNMENT_OUTPUT: "no",
    R_REASSIGNMENT: "latest",
    R_VARIABLE_PRINT: "reuse",
  }), {
    R_NUMBER_STRING: true,
    R_ASSIGNMENT_OUTPUT: true,
    R_REASSIGNMENT: true,
    R_VARIABLE_PRINT: true,
  });
});

test("mastery sanitizer never retains source, prediction text, output, notes, or free-form answers", () => {
  let evidence = updateRouteMarkerMastery(null, {
    formId: "primary",
    incrementAttempt: true,
    predictionCorrectness: [true, true],
    checkResults: evaluateRouteSource(primary, "primary").checks,
    hintLevel: 2,
    misconceptionTags: ["quoted-number-is-number", "forged"],
  });
  evidence = sanitizeRouteMarkerMastery({
    ...evidence,
    learnerSourceCode: primary,
    learnerPredictionText: ["private"],
    runtimeOutputText: "private",
    learnerFreeFormNotes: "private",
    answers: { private: "private" },
  });
  assert.equal(evidence.attemptCount, 1);
  assert.deepEqual(evidence.predictionCorrectness.primary, [true, true]);
  assert.deepEqual(evidence.misconceptionTags, ["quoted-number-is-number"]);
  for (const key of ["learnerSourceCode", "learnerPredictionText", "runtimeOutputText", "learnerFreeFormNotes", "answers"]) {
    assert.equal(key in evidence, false);
  }
});
