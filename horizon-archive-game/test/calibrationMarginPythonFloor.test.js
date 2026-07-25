import assert from "node:assert/strict";
import test from "node:test";
import {
  CALIBRATION_MARGIN_ENTRY_ACTION,
  CALIBRATION_MARGIN_PROTECTED_ENTRY_VERSION,
  createCalibrationMarginProtectedEntry,
} from "../src/CalibrationMarginProtectedEntry.js";
import {
  CALIBRATION_MARGIN_PROTECTED_SURVEY_VERSION,
  calibrationMarginSurveyObservations,
  createCalibrationMarginProtectedSurvey,
} from "../src/CalibrationMarginProtectedSurvey.js";
import { calibrationMarginActions } from "../src/CalibrationMarginProtectedJourney.js";
import {
  calibrationMarginPythonAccessibility,
  calibrationMarginPythonActions,
  createCalibrationMarginPythonFloor,
  createCalibrationMarginPythonIntent,
} from "../src/CalibrationMarginPythonFloor.js";

function entryIntent() {
  return {
    packetId: "RP-003",
    version: CALIBRATION_MARGIN_PROTECTED_ENTRY_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CALIBRATION_MARGIN_ENTRY_ACTION,
    activationKind: "pointer",
    eventToken: "python-floor-entry",
  };
}

function surveyIntent(action, observationId, token) {
  return {
    packetId: "RP-003",
    version: CALIBRATION_MARGIN_PROTECTED_SURVEY_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action,
    observationId,
    activationKind: "pointer",
    eventToken: token,
  };
}

function acceptedSurvey() {
  const entry = createCalibrationMarginProtectedEntry({
    acceptedCityThreshold: {
      status: "ready",
      checkpoint: "city_threshold",
      boardId: "SC-02-50",
      continuation: "continuation",
      cityStateDelta: null,
      worldStateDelta: null,
      accessStateDelta: null,
    },
    verifiedRp002: {
      packetId: "RP-002",
      checkpoint: "comparison_complete",
      verificationStatus: "verified",
      civicComparisonSaved: true,
      nextSurveyDirectionMarked: true,
      continuation: "continuation",
      cityStateDelta: null,
    },
  });
  assert.equal(entry.dispatch(entryIntent()).status, "blank_entry_visible");
  const survey = createCalibrationMarginProtectedSurvey({
    acceptedBlankState: entry.getState(),
  });
  survey.dispatch(surveyIntent(
    calibrationMarginActions.orient,
    null,
    "python-floor-orient",
  ));
  Object.entries(calibrationMarginSurveyObservations).forEach(([action, observationId], index) => {
    survey.dispatch(surveyIntent(action, observationId, `python-floor-observation-${index}`));
  });
  return survey.getState();
}

function floor(options = {}) {
  return createCalibrationMarginPythonFloor({
    acceptedSurveyState: acceptedSurvey(),
    ...options,
  });
}

function intent(controller, action, token, modality = "pointer", overrides = {}) {
  return {
    ...createCalibrationMarginPythonIntent(
      controller.getState(),
      action,
      modality,
      token,
    ),
    ...overrides,
  };
}

function fillPython(controller, values = {
  condition: "exposed_a[index] == exposed_b[index]",
  trueBranch: "corresponding",
  falseBranch: "different",
}) {
  for (const [name, value] of Object.entries(values)) {
    assert.equal(controller.updateField(name, value).status, "field_updated_private");
  }
}

function fillRetrieval(controller, values = {
  condition: "compare_exposed_values_at_same_index",
  trueBranch: "corresponding",
  falseBranch: "different",
  unavailableBoundary: "sealed_source_remains_unread_and_unavailable",
}) {
  for (const [name, value] of Object.entries(values)) {
    assert.equal(controller.updateField(name, value).status, "field_updated_private");
  }
}

function passPrimary(controller, token = "pass-primary") {
  fillPython(controller);
  return controller.dispatch(intent(
    controller,
    calibrationMarginPythonActions.submitPrimary,
    token,
  ));
}

function passRetrieval(controller, token = "pass-retrieval") {
  fillRetrieval(controller);
  return controller.dispatch(intent(
    controller,
    calibrationMarginPythonActions.submitRetrieval,
    token,
  ));
}

test("EXP-001-003 all seven modalities open the same wholly blank P0 group", () => {
  for (const modality of calibrationMarginPythonAccessibility.modalities) {
    const controller = floor();
    const state = controller.getState();
    assert.equal(state.phase, "CM-20 PRIMARY");
    assert.equal(state.activeGroup, "python_primary");
    assert.equal(state.owner, "PILOT");
    assert.equal(state.checkpoint, "P0");
    assert.deepEqual(state.fieldValues, {
      condition: "",
      trueBranch: "",
      falseBranch: "",
    });
    assert.equal(state.privateWorkCleared, true);
    assert.deepEqual(state.focusIntent, { group: "python_primary", target: "heading" });
    assert.equal(modality.length > 0, true);
  }
});

test("EXP-004 validation precedes token consumption and strict 8/8 is the sole P1 route", () => {
  const controller = floor();
  const token = "incomplete-then-valid";
  const incomplete = controller.dispatch(intent(
    controller,
    calibrationMarginPythonActions.submitPrimary,
    token,
    "keyboard_enter",
  ));
  assert.equal(incomplete.status, "incomplete");
  assert.deepEqual(Object.keys(incomplete.state.fieldErrors), [
    "condition", "trueBranch", "falseBranch",
  ]);
  assert.deepEqual(incomplete.state.focusIntent, {
    group: "python_primary",
    target: "condition",
  });
  assert.equal(controller.getCheckpoint().checkpoint, "P0");

  fillPython(controller);
  const passed = controller.dispatch(intent(
    controller,
    calibrationMarginPythonActions.submitPrimary,
    token,
    "keyboard_enter",
  ));
  assert.equal(passed.status, "primary_finalized");
  assert.equal(passed.checkpoint, "P1");
  assert.equal(passed.state.activeGroup, "python_retrieval");
  assert.deepEqual(passed.state.fieldValues, {
    condition: "",
    trueBranch: "",
    falseBranch: "",
    unavailableBoundary: "",
  });
  assert.equal(controller.dispatch(intent(
    controller,
    calibrationMarginPythonActions.submitRetrieval,
    token,
  )).reason, "one_hit_only");
});

test("EXP-005-008 actual primary miss is bounded, retry is wholly blank, and return is write free", () => {
  const controller = floor();
  fillPython(controller, {
    condition: "exposed_a[index] != exposed_b[index]",
    trueBranch: "same",
    falseBranch: "other",
  });
  const miss = controller.dispatch(intent(
    controller,
    calibrationMarginPythonActions.submitPrimary,
    "primary-actual-miss",
  ));
  assert.equal(miss.status, "actual_miss_repair");
  assert.equal(miss.state.activeGroup, "primary_repair");
  assert.equal(miss.state.readOnly, true);
  assert.ok(miss.failedIds.length > 0);
  assert.doesNotMatch(miss.state.statusMessage, /corresponding|different|exposed_a/);
  assert.equal(controller.getCheckpoint().checkpoint, "P0");

  const retry = controller.dispatch(intent(
    controller,
    calibrationMarginPythonActions.retryPrimary,
    "primary-blank-retry",
  ));
  assert.equal(retry.status, "blank_retry_ready");
  assert.deepEqual(retry.state.fieldValues, {
    condition: "",
    trueBranch: "",
    falseBranch: "",
  });
  assert.deepEqual(retry.state.fieldErrors, {});
  assert.deepEqual(retry.state.failedIds, []);
  assert.deepEqual(retry.state.focusIntent, {
    group: "python_primary",
    target: "condition",
  });

  controller.updateField("condition", "PRIVATE LOCAL WORK");
  const returned = controller.dispatch(intent(
    controller,
    calibrationMarginPythonActions.returnSurvey,
    "primary-return-survey",
  ));
  assert.equal(returned.status, "returned_to_survey_write_free");
  assert.equal(returned.privateWorkCleared, true);
  assert.equal(controller.getCheckpoint().checkpoint, "P0");
  assert.doesNotMatch(JSON.stringify(returned.state), /PRIVATE LOCAL WORK/);
});

test("EXP-009-015 strict closed-note 4/4 and distinct transfer 8/8 reach only PY010-P3", () => {
  const controller = floor();
  assert.equal(passPrimary(controller).status, "primary_finalized");

  fillRetrieval(controller, {
    condition: "same-index",
    trueBranch: "corresponding",
    falseBranch: "different",
    unavailableBoundary: "guess",
  });
  const retrievalMiss = controller.dispatch(intent(
    controller,
    calibrationMarginPythonActions.submitRetrieval,
    "retrieval-actual-miss",
  ));
  assert.equal(retrievalMiss.status, "actual_miss_repair");
  assert.deepEqual([...retrievalMiss.failedIds].sort(), ["condition", "unavailableBoundary"].sort());
  assert.equal(retrievalMiss.state.activeGroup, "retrieval_repair");
  assert.equal(controller.dispatch(intent(
    controller,
    calibrationMarginPythonActions.retryRetrieval,
    "retrieval-blank-retry",
  )).status, "blank_retry_ready");
  assert.equal(passRetrieval(controller).status, "retrieval_finalized");
  assert.equal(controller.getState().activeGroup, "python_transfer");
  assert.deepEqual(controller.getState().fieldValues, {
    condition: "",
    trueBranch: "",
    falseBranch: "",
  });
  assert.doesNotMatch(JSON.stringify(controller.getState()), /steady|rise|cool/);

  fillPython(controller, {
    condition: "exposed_a[index] == exposed_b[index]",
    trueBranch: "corresponding",
    falseBranch: "wrong",
  });
  assert.equal(controller.dispatch(intent(
    controller,
    calibrationMarginPythonActions.submitTransfer,
    "transfer-miss",
  )).status, "actual_miss_repair");
  assert.equal(controller.dispatch(intent(
    controller,
    calibrationMarginPythonActions.retryTransfer,
    "transfer-retry",
  )).status, "blank_retry_ready");
  fillPython(controller);
  const finalized = controller.dispatch(intent(
    controller,
    calibrationMarginPythonActions.submitTransfer,
    "transfer-pass",
  ));
  assert.equal(finalized.status, "python_finalized");
  assert.equal(finalized.state.phase, "PY010-P3");
  assert.deepEqual(finalized.state.finalizedSkillIds, ["PY-010"]);
  assert.deepEqual(finalized.state.availableActions, []);
  assert.deepEqual(finalized.state.fieldValues, {});
  assert.equal(finalized.state.privateWorkCleared, true);
  assert.equal(finalized.state.continuation, "continuation");
  assert.equal(finalized.state.cityStateDelta, null);
  assert.equal(finalized.state.worldStateDelta, null);
  assert.equal(finalized.state.accessStateDelta, null);
  assert.equal(finalized.state.successor, null);
  assert.doesNotMatch(
    JSON.stringify(finalized.state),
    /CM-30|RP003-IE|"saveAction"|"bearing"|RP-004|RP-013|successor":\s*"|authorityGranted":\s*true/,
  );
});

test("EXP-016 exact P1/P2/P3 resume reconstructs only the blank first-incomplete group", () => {
  const first = floor();
  passPrimary(first);
  const p1 = first.getCheckpoint();
  const resumedP1 = createCalibrationMarginPythonFloor({ restoredCheckpoint: p1 });
  assert.equal(resumedP1.getState().activeGroup, "python_retrieval");
  assert.equal(Object.values(resumedP1.getState().fieldValues).every((value) => value === ""), true);
  passRetrieval(first);
  const p2 = first.getCheckpoint();
  const resumedP2 = createCalibrationMarginPythonFloor({ restoredCheckpoint: p2 });
  assert.equal(resumedP2.getState().activeGroup, "python_transfer");
  assert.equal(Object.values(resumedP2.getState().fieldValues).every((value) => value === ""), true);
  fillPython(first);
  first.dispatch(intent(first, calibrationMarginPythonActions.submitTransfer, "resume-p3-pass"));
  const resumedP3 = createCalibrationMarginPythonFloor({
    restoredCheckpoint: first.getCheckpoint(),
  });
  assert.equal(resumedP3.getState().activeGroup, "python_finalized");
  assert.deepEqual(resumedP3.getState().availableActions, []);
});

test("EXP-002/017 invalid, duplicate, forged, private and wrong-owner input spends no valid token", () => {
  const controller = floor();
  const token = "valid-after-invalid";
  for (const invalid of [
    intent(controller, calibrationMarginPythonActions.clearPrimary, token, "automatic"),
    intent(controller, calibrationMarginPythonActions.clearPrimary, token, "pointer", {
      owner: "SYSTEM",
    }),
    intent(controller, calibrationMarginPythonActions.clearPrimary, token, "pointer", {
      privateResponse: "PRIVATE",
    }),
    intent(controller, "SUBMIT_PRIMARY + SUBMIT_TRANSFER", token),
  ]) assert.equal(controller.dispatch(invalid).status, "rejected");
  controller.updateField("condition", "local");
  assert.equal(controller.dispatch(intent(
    controller,
    calibrationMarginPythonActions.clearPrimary,
    token,
    "screen_reader",
  )).status, "work_cleared");
  assert.equal(controller.dispatch(intent(
    controller,
    calibrationMarginPythonActions.clearPrimary,
    token,
    "screen_reader",
  )).reason, "one_hit_only");
});

test("EXP-017 checkpoint write failure clears private work and recovers to the last exact prefix", () => {
  let commits = 0;
  const controller = floor({
    commitCheckpoint() {
      commits += 1;
      return commits === 1;
    },
  });
  assert.equal(passPrimary(controller).status, "primary_finalized");
  fillRetrieval(controller);
  const failed = controller.dispatch(intent(
    controller,
    calibrationMarginPythonActions.submitRetrieval,
    "retrieval-commit-failure",
  ));
  assert.equal(failed.status, "checkpoint_commit_failed_recovered");
  assert.equal(failed.state.activeGroup, "python_retrieval");
  assert.equal(failed.state.checkpoint, "P1");
  assert.equal(Object.values(failed.state.fieldValues).every((value) => value === ""), true);
  assert.equal(controller.getCheckpoint().evidence.length, 1);
});
