import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  CALIBRATION_MARGIN_ENTRY_ACTION,
  createCalibrationMarginNormalEntry,
  createCalibrationMarginNormalEntryIntent,
} from "../src/CalibrationMarginNormalEntry.js";
import {
  CALIBRATION_MARGIN_REVIEW_LOCAL_WORK_IMAGE,
  calibrationMarginSurveyObservations,
} from "../src/CalibrationMarginProtectedSurvey.js";
import {
  calibrationMarginPythonActions,
  createCalibrationMarginPythonIntent,
} from "../src/CalibrationMarginPythonFloor.js";
import { calibrationMarginActions } from "../src/CalibrationMarginProtectedJourney.js";

function options(overrides = {}) {
  const verifiedRestoreState = {
    phase: "verified_restore",
    boardState: "SC-03-50",
    owner: "SYSTEM // EXPEDITION STATE",
    privateWorkCleared: true,
    transientWorkCleared: true,
    cityStateDelta: null,
    replayedEvents: [],
    progression: {
      civicComparisonSaved: true,
      nextSurveyDirectionMarked: true,
      rp002Checkpoint: "comparison_complete",
    },
  };
  return {
    verifiedRestoreState,
    returnedCityThreshold: {
      status: "returned_to_city_threshold_write_free",
      state: verifiedRestoreState,
      route: {
        writePerformed: false,
        continuation: "continuation",
        cityStateDelta: null,
        state: {
          status: "ready",
          checkpoint: "city_threshold",
          boardId: "SC-02-50",
          continuation: "continuation",
          cityStateDelta: null,
          worldStateDelta: null,
          accessStateDelta: null,
        },
      },
    },
    ...overrides,
  };
}

function normalIntent(action, token, phase = null, modality = "pointer") {
  return createCalibrationMarginNormalEntryIntent(action, modality, token, phase);
}

function pythonIntent(controller, action, token, modality = "pointer") {
  return createCalibrationMarginPythonIntent(
    controller.getState(),
    action,
    modality,
    token,
  );
}

function readyController(routeOptions = {}) {
  const controller = createCalibrationMarginNormalEntry(options(routeOptions));
  controller.dispatch(normalIntent(
    CALIBRATION_MARGIN_ENTRY_ACTION,
    "normal-python-enter",
  ));
  controller.dispatch(normalIntent(
    calibrationMarginActions.orient,
    "normal-python-orient",
    "CM-00 ARRIVE + IDLE",
  ));
  Object.keys(calibrationMarginSurveyObservations).forEach((action, index) => {
    controller.dispatch(normalIntent(
      action,
      `normal-python-observe-${index}`,
      "CM-10 SURVEY",
    ));
  });
  return controller;
}

function fill(controller, values) {
  Object.entries(values).forEach(([name, value]) => {
    assert.equal(controller.updateField(name, value).status, "field_updated_private");
  });
}

const correctPython = Object.freeze({
  condition: "exposed_a[index] == exposed_b[index]",
  trueBranch: "corresponding",
  falseBranch: "different",
});
const correctRetrieval = Object.freeze({
  condition: "compare_exposed_values_at_same_index",
  trueBranch: "corresponding",
  falseBranch: "different",
  unavailableBoundary: "sealed_source_remains_unread_and_unavailable",
});

test("EXP-001-003 normal all-three review is the sole fresh route to a blank CM-20", () => {
  const controller = readyController();
  const ready = controller.getState();
  assert.equal(ready.phase, "CM-10 SURVEY");
  assert.equal(ready.localReviewEligibility.dispatchable, true);
  const result = controller.dispatch(normalIntent(
    CALIBRATION_MARGIN_REVIEW_LOCAL_WORK_IMAGE,
    "normal-python-review",
    "CM-10 SURVEY",
    "screen_reader",
  ));
  assert.equal(result.status, "python_primary_visible");
  assert.equal(result.state.activeGroup, "python_primary");
  assert.deepEqual(result.state.fieldValues, {
    condition: "",
    trueBranch: "",
    falseBranch: "",
  });
  assert.equal(result.state.focusIntent.target, "heading");

  const partial = createCalibrationMarginNormalEntry(options());
  partial.dispatch(normalIntent(CALIBRATION_MARGIN_ENTRY_ACTION, "partial-enter"));
  partial.dispatch(normalIntent(
    calibrationMarginActions.orient,
    "partial-orient",
    "CM-00 ARRIVE + IDLE",
  ));
  const rejected = partial.dispatch(normalIntent(
    CALIBRATION_MARGIN_REVIEW_LOCAL_WORK_IMAGE,
    "partial-review",
    "CM-10 SURVEY",
  ));
  assert.equal(rejected.status, "rejected");
  assert.equal(rejected.reason, "review_not_eligible");
});

test("EXP-008 normal primary return clears work and requires another fresh review", () => {
  const controller = readyController();
  controller.dispatch(normalIntent(
    CALIBRATION_MARGIN_REVIEW_LOCAL_WORK_IMAGE,
    "normal-return-review",
    "CM-10 SURVEY",
  ));
  controller.updateField("condition", "PRIVATE LOCAL WORK");
  const returned = controller.dispatch(pythonIntent(
    controller,
    calibrationMarginPythonActions.returnSurvey,
    "normal-return-survey",
  ));
  assert.equal(returned.status, "returned_to_survey_write_free");
  assert.equal(returned.state.phase, "CM-10 SURVEY");
  assert.deepEqual(returned.state.recordedObservationIds, [
    "correspondence", "bounded_difference", "sealed_unavailable",
  ]);
  assert.doesNotMatch(JSON.stringify(returned.state), /PRIVATE LOCAL WORK/);
  const reopened = controller.dispatch(normalIntent(
    CALIBRATION_MARGIN_REVIEW_LOCAL_WORK_IMAGE,
    "normal-return-fresh-review",
    "CM-10 SURVEY",
  ));
  assert.equal(reopened.status, "python_primary_visible");
  assert.equal(Object.values(reopened.state.fieldValues).every((value) => value === ""), true);
});

test("EXP-009-018 normal route commits only ordered PY-010 evidence and stops at P3", () => {
  let stored = null;
  const controller = readyController({
    commitPythonCheckpoint(candidate) {
      stored = JSON.parse(JSON.stringify(candidate));
      return true;
    },
  });
  controller.dispatch(normalIntent(
    CALIBRATION_MARGIN_REVIEW_LOCAL_WORK_IMAGE,
    "normal-complete-review",
    "CM-10 SURVEY",
  ));
  fill(controller, correctPython);
  assert.equal(controller.dispatch(pythonIntent(
    controller,
    calibrationMarginPythonActions.submitPrimary,
    "normal-pass-primary",
  )).status, "primary_finalized");
  assert.equal(stored.checkpoint, "P1");
  assert.deepEqual(stored.evidence.map((record) => record.form), ["primary"]);

  fill(controller, correctRetrieval);
  assert.equal(controller.dispatch(pythonIntent(
    controller,
    calibrationMarginPythonActions.submitRetrieval,
    "normal-pass-retrieval",
  )).status, "retrieval_finalized");
  assert.equal(stored.checkpoint, "P2");
  assert.deepEqual(stored.evidence.map((record) => record.form), ["primary", "retrieval"]);

  fill(controller, correctPython);
  const final = controller.dispatch(pythonIntent(
    controller,
    calibrationMarginPythonActions.submitTransfer,
    "normal-pass-transfer",
  ));
  assert.equal(final.status, "python_finalized");
  assert.equal(final.state.phase, "PY010-P3");
  assert.deepEqual(final.state.availableActions, []);
  assert.equal(stored.checkpoint, "P3");
  assert.deepEqual(stored.evidence.map((record) => record.skill_or_objective_id), [
    "PY-010", "PY-010", "PY-010",
  ]);
  assert.doesNotMatch(JSON.stringify(stored), /RP003-IE|CM-30|RP-004|RP-013/);
});

test("EXP-016 exact checkpoint resume bypasses active work and reconstructs only its blank target", () => {
  let stored = null;
  const first = readyController({
    commitPythonCheckpoint(candidate) {
      stored = JSON.parse(JSON.stringify(candidate));
      return true;
    },
  });
  first.dispatch(normalIntent(
    CALIBRATION_MARGIN_REVIEW_LOCAL_WORK_IMAGE,
    "normal-resume-review",
    "CM-10 SURVEY",
  ));
  fill(first, correctPython);
  first.dispatch(pythonIntent(
    first,
    calibrationMarginPythonActions.submitPrimary,
    "normal-resume-primary",
  ));
  const resumed = createCalibrationMarginNormalEntry(options({
    restoredPythonCheckpoint: stored,
  }));
  assert.equal(resumed.getState().activeGroup, "python_retrieval");
  assert.equal(resumed.getState().checkpoint, "P1");
  assert.equal(Object.values(resumed.getState().fieldValues).every((value) => value === ""), true);
  assert.equal(resumed.getState().focusIntent.target, "heading");

  const invalid = createCalibrationMarginNormalEntry(options({
    restoredPythonCheckpoint: { ...stored, privateResponse: "PRIVATE" },
  })).getState();
  assert.equal(invalid.phase, "city_threshold");
  assert.doesNotMatch(JSON.stringify(invalid), /PRIVATE/);
});

test("EXP-026-030 implementation reuses one world plate and exposes no later route or runtime media", () => {
  const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
  const entry = readFileSync(new URL("../src/CalibrationMarginEntry.jsx", import.meta.url), "utf8");
  const floor = readFileSync(new URL("../src/CalibrationMarginPythonFloor.js", import.meta.url), "utf8");
  const view = readFileSync(new URL("../src/CalibrationMarginPythonFloor.jsx", import.meta.url), "utf8");
  const normal = readFileSync(new URL("../src/CalibrationMarginNormalEntry.js", import.meta.url), "utf8");
  assert.equal((entry.match(/city-threshold-overview-master\.png/g) ?? []).length, 1);
  assert.doesNotMatch(view, /\.(?:png|jpe?g|webp|gif|svg|wav|mp3|woff2?)["']/i);
  assert.doesNotMatch(floor, /\bfetch\s*\(|XMLHttpRequest|WebSocket|\beval\s*\(|\bexec\s*\(/);
  assert.doesNotMatch(normal, /CM-30|RP003-IE-01|RP-004|RP-013/);
  assert.match(app, /CALIBRATION_MARGIN_PYTHON_CHECKPOINT_KEY/);
  assert.match(app, /sanitizeCalibrationMarginPythonCheckpoint/);
  assert.match(app, /writeCalibrationMarginPythonCheckpoint/);
  assert.doesNotMatch(app, /CalibrationMarginProtectedJourney/);
});
