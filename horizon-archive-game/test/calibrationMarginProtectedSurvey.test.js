import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  CALIBRATION_MARGIN_ENTRY_ACTION,
  CALIBRATION_MARGIN_PROTECTED_ENTRY_VERSION,
  calibrationMarginEntryAccessibility,
  createCalibrationMarginProtectedEntry,
} from "../src/CalibrationMarginProtectedEntry.js";
import {
  CALIBRATION_MARGIN_PROTECTED_SURVEY_VERSION,
  CALIBRATION_MARGIN_REVIEW_LOCAL_WORK_IMAGE,
  calibrationMarginSurveyActions,
  calibrationMarginSurveyObservations,
  createCalibrationMarginProtectedSurvey,
} from "../src/CalibrationMarginProtectedSurvey.js";
import {
  calibrationMarginActions,
  calibrationMarginPresentation,
} from "../src/CalibrationMarginProtectedJourney.js";

function acceptedCityThreshold() {
  return {
    status: "ready",
    checkpoint: "city_threshold",
    boardId: "SC-02-50",
    continuation: "continuation",
    cityStateDelta: null,
    worldStateDelta: null,
    accessStateDelta: null,
  };
}

function verifiedRp002() {
  return {
    packetId: "RP-002",
    checkpoint: "comparison_complete",
    verificationStatus: "verified",
    civicComparisonSaved: true,
    nextSurveyDirectionMarked: true,
    continuation: "continuation",
    cityStateDelta: null,
  };
}

function entryIntent(activationKind = "pointer") {
  return {
    packetId: "RP-003",
    version: CALIBRATION_MARGIN_PROTECTED_ENTRY_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CALIBRATION_MARGIN_ENTRY_ACTION,
    activationKind,
    eventToken: `entry-${activationKind}`,
  };
}

function acceptedBlank() {
  const entry = createCalibrationMarginProtectedEntry({
    acceptedCityThreshold: acceptedCityThreshold(),
    verifiedRp002: verifiedRp002(),
  });
  assert.equal(entry.dispatch(entryIntent()).status, "blank_entry_visible");
  return entry.getState();
}

function intent(action, observationId, eventToken, overrides = {}) {
  return {
    packetId: "RP-003",
    version: CALIBRATION_MARGIN_PROTECTED_SURVEY_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action,
    observationId,
    activationKind: "pointer",
    eventToken,
    ...overrides,
  };
}

function enterSurvey(activationKind = "pointer") {
  const controller = createCalibrationMarginProtectedSurvey({ acceptedBlankState: acceptedBlank() });
  const result = controller.dispatch(intent(
    calibrationMarginActions.orient,
    null,
    `orient-${activationKind}`,
    { activationKind },
  ));
  assert.equal(result.status, "survey_visible");
  return controller;
}

function assertZeroEffect(state) {
  assert.deepEqual(state.observationEvidence, []);
  assert.deepEqual(state.learningEvidence, []);
  assert.deepEqual(state.masteryEvidence, []);
  assert.equal(state.saveEligibility, false);
  assert.equal(state.authorityGranted, false);
  assert.equal(state.externalActionEnabled, false);
  assert.equal(state.worldStateChanged, false);
  assert.equal(state.continuation, "continuation");
  assert.equal(state.cityStateDelta, null);
  assert.equal(state.worldStateDelta, null);
  assert.equal(state.accessStateDelta, null);
  assert.equal(state.successor, null);
  assert.deepEqual(state.replayedEvents, []);
}

function permutations(values) {
  if (values.length <= 1) return [values];
  return values.flatMap((value, index) => permutations(values.filter((_, i) => i !== index))
    .map((tail) => [value, ...tail]));
}

test("fresh validated ORIENT replaces accepted blank CM-00 with one Scene CM-10 group in all seven modalities", () => {
  for (const activationKind of calibrationMarginEntryAccessibility.modalities) {
    const state = enterSurvey(activationKind).getState();
    assert.equal(state.phase, "CM-10 SURVEY");
    assert.equal(state.boardState, "SC-04");
    assert.equal(state.activeGroup, "cm10_survey");
    assert.equal(state.owner, "SCENE");
    assert.deepEqual(state.availableActions, calibrationMarginSurveyActions);
    assert.deepEqual(state.recordedObservationIds, []);
    assert.deepEqual(state.focusIntent, { group: "cm10_survey", target: "heading" });
    assert.deepEqual(state.localReviewEligibility, {
      action: CALIBRATION_MARGIN_REVIEW_LOCAL_WORK_IMAGE,
      eligible: false,
      status: "Inactive",
      dispatchable: false,
      activated: false,
    });
    assertZeroEffect(state);
  }
});

test("all six A/B/sealed orders converge on three distinct Recorded controls and active review eligibility", () => {
  const actions = Object.keys(calibrationMarginSurveyObservations);
  for (const order of permutations(actions)) {
    const controller = enterSurvey();
    order.forEach((action, index) => {
      const result = controller.dispatch(intent(
        action,
        calibrationMarginSurveyObservations[action],
        `order-${order.indexOf(action)}-${index}-${action.slice(-1)}`,
      ));
      assert.equal(result.status, "observation_recorded_zero_evidence");
      assert.deepEqual(result.state.focusIntent, { group: "cm10_survey", target: action });
      assert.equal(result.state.recordedObservationIds.length, index + 1);
      assertZeroEffect(result.state);
    });
    const state = controller.getState();
    assert.deepEqual(state.recordedObservationIds, [
      "correspondence", "bounded_difference", "sealed_unavailable",
    ]);
    assert.equal(state.observationControls.every((control) => (
      control.status === "Recorded"
      && control.recorded === true
      && control.meaningUsesColorAlone === false
    )), true);
    assert.deepEqual(state.localReviewEligibility, {
      action: CALIBRATION_MARGIN_REVIEW_LOCAL_WORK_IMAGE,
      eligible: true,
      status: "Eligible",
      dispatchable: true,
      activated: false,
    });
    assert.equal(state.availableActions.includes(CALIBRATION_MARGIN_REVIEW_LOCAL_WORK_IMAGE), false);
    assertZeroEffect(state);
  }
});

test("each action finalizes only its matching observation and cannot infer or prefill a peer", () => {
  for (const [action, observationId] of Object.entries(calibrationMarginSurveyObservations)) {
    const controller = enterSurvey();
    const result = controller.dispatch(intent(action, observationId, `match-${observationId}`));
    assert.equal(result.status, "observation_recorded_zero_evidence");
    assert.deepEqual(result.state.recordedObservationIds, [observationId]);
    assert.deepEqual(
      result.state.observationControls.filter((control) => control.recorded)
        .map((control) => control.observationId),
      [observationId],
    );
    assert.equal(result.state.localReviewEligibility.eligible, false);
    assertZeroEffect(result.state);
  }
});

test("Recorded replay is idempotent, focus-stable, and grants no evidence or eligibility shortcut", () => {
  const [action, observationId] = Object.entries(calibrationMarginSurveyObservations)[0];
  const controller = enterSurvey();
  const recorded = controller.dispatch(intent(action, observationId, "record-first")).state;
  const replay = controller.dispatch(intent(action, observationId, "record-replay"));
  assert.equal(replay.status, "recorded_replay_zero_evidence");
  assert.deepEqual(replay.state.recordedObservationIds, recorded.recordedObservationIds);
  assert.deepEqual(replay.state.observationControls, recorded.observationControls);
  assert.deepEqual(replay.state.focusIntent, { group: "cm10_survey", target: action });
  assert.equal(replay.state.localReviewEligibility.eligible, false);
  assertZeroEffect(replay.state);
});

test("invalid, duplicate, combined, passive, stale, wrong-owner, private, and mismatched input spends no future token", () => {
  const [action, observationId] = Object.entries(calibrationMarginSurveyObservations)[0];
  const orientToken = "orient-valid-after-invalid";
  const controller = createCalibrationMarginProtectedSurvey({ acceptedBlankState: acceptedBlank() });
  for (const invalid of [
    intent(calibrationMarginActions.orient, null, orientToken, { activationKind: "automatic" }),
    intent(calibrationMarginActions.orient, null, orientToken, { mode: "demo_tour" }),
    intent(calibrationMarginActions.orient, null, orientToken, { version: "stale" }),
    intent(calibrationMarginActions.orient, null, orientToken, { owner: "SYSTEM" }),
    { ...intent(calibrationMarginActions.orient, null, orientToken), privateResponse: "PRIVATE" },
    intent("ORIENT + INSPECT", null, orientToken),
  ]) assert.equal(controller.dispatch(invalid).status, "rejected");
  assert.equal(controller.dispatch(intent(calibrationMarginActions.orient, null, orientToken)).status,
    "survey_visible");
  assert.equal(controller.dispatch(intent(calibrationMarginActions.orient, null, orientToken)).reason,
    "one_hit_only");

  const observationToken = "observe-valid-after-invalid";
  for (const invalid of [
    intent(action, "bounded_difference", observationToken),
    intent(`${action} + INSPECT SEALED BOUNDARY`, observationId, observationToken),
    intent(action, observationId, observationToken, { activationKind: "passive" }),
    intent(action, observationId, observationToken, { owner: "SCENE" }),
    { ...intent(action, observationId, observationToken), privateNotes: "PRIVATE" },
  ]) assert.equal(controller.dispatch(invalid).status, "rejected");
  assert.equal(controller.dispatch(intent(action, observationId, observationToken)).status,
    "observation_recorded_zero_evidence");
  assert.equal(controller.dispatch(intent(action, observationId, observationToken)).reason,
    "one_hit_only");
});

test("Tour isolates before blank-state access and never exposes campaign observations", () => {
  const throwingBlank = Object.defineProperty({}, "phase", {
    get() { throw new Error("Tour must sanitize before protected blank access"); },
  });
  const controller = createCalibrationMarginProtectedSurvey({
    mode: "demo_tour",
    acceptedBlankState: throwingBlank,
  });
  const state = controller.getState();
  assert.equal(state.phase, "tour_preview");
  assert.deepEqual(state.availableActions, []);
  assert.equal(controller.dispatch(intent(
    calibrationMarginActions.orient,
    null,
    "tour-orient",
  )).reason, "tour_protected_survey_closed");
  assert.doesNotMatch(JSON.stringify(state), /correspondence|bounded_difference|sealed_unavailable/);
  assertZeroEffect(state);
});

test("exact resume reconstructs only Recorded controls heading-first; malformed resume clears to safe blank CM-00", () => {
  const controller = enterSurvey();
  const entries = Object.entries(calibrationMarginSurveyObservations);
  for (const [index, [action, observationId]] of entries.slice(0, 2).entries()) {
    controller.dispatch(intent(action, observationId, `resume-record-${index}`));
  }
  const accepted = controller.getState();
  const resumed = createCalibrationMarginProtectedSurvey({
    acceptedBlankState: acceptedBlank(),
    restoredState: accepted,
  }).getState();
  assert.equal(resumed.phase, "CM-10 SURVEY");
  assert.deepEqual(resumed.recordedObservationIds, ["correspondence", "bounded_difference"]);
  assert.deepEqual(resumed.focusIntent, { group: "cm10_survey", target: "heading" });
  assert.equal(resumed.localReviewEligibility.eligible, false);
  assertZeroEffect(resumed);

  for (const contaminated of [
    { ...accepted, privateResponse: "PRIVATE" },
    { ...accepted, recordedObservationIds: [...accepted.recordedObservationIds, "forged"] },
    { ...accepted, phase: "CM-20 PYTHON" },
    { ...accepted, observationEvidence: ["forged"] },
    { ...accepted, localReviewEligibility: { ...accepted.localReviewEligibility, dispatchable: true } },
  ]) {
    const safe = createCalibrationMarginProtectedSurvey({
      acceptedBlankState: acceptedBlank(),
      restoredState: contaminated,
    }).getState();
    assert.equal(safe.phase, "CM-00 ARRIVE + IDLE");
    assert.equal(safe.activeGroup, "cm00_blank");
    assert.deepEqual(safe.focusIntent, { group: "cm00_blank", target: "heading" });
    assert.doesNotMatch(JSON.stringify(safe), /PRIVATE|CM-20|forged/);
    assertZeroEffect(safe);
  }
});

test("review dispatches exactly once after completion and both accepted returns remain write-free", () => {
  const controller = enterSurvey();
  Object.entries(calibrationMarginSurveyObservations).forEach(([action, observationId], index) => {
    controller.dispatch(intent(action, observationId, `complete-${index}`));
  });
  const token = "review-token-reusable";
  const review = controller.dispatch(intent(
    CALIBRATION_MARGIN_REVIEW_LOCAL_WORK_IMAGE,
    null,
    token,
  ));
  assert.equal(review.status, "review_activated");
  assert.equal(review.state.localReviewEligibility.dispatchable, true);
  assert.equal(controller.dispatch(intent(
    CALIBRATION_MARGIN_REVIEW_LOCAL_WORK_IMAGE,
    null,
    token,
  )).reason, "one_hit_only");
  const returned = controller.dispatch(intent(
    calibrationMarginActions.returnCivicComparison,
    null,
    "review-then-return",
  ));
  assert.equal(returned.status, "returned_to_rp002_write_free");
  assert.equal(returned.route.target, "RP-002");
  assert.equal(returned.route.cityStateDelta, null);
  assert.equal(returned.route.authorityGranted, false);
  assertZeroEffect(returned.state);

  const thresholdController = enterSurvey();
  const thresholdReturn = thresholdController.dispatch(intent(
    calibrationMarginActions.returnCityThreshold,
    null,
    "return-city-threshold",
  ));
  assert.equal(thresholdReturn.status, "returned_to_city_threshold_write_free");
  assert.equal(thresholdReturn.route.target, "CITY_THRESHOLD");
  assertZeroEffect(thresholdReturn.state);
});

test("invalid accepted blank fails closed without leaking or minting CM-10 state", () => {
  for (const invalid of [
    { ...acceptedBlank(), privateResponse: "PRIVATE" },
    { ...acceptedBlank(), phase: "stale" },
    { ...acceptedBlank(), observationEvidence: ["forged"] },
    { ...acceptedBlank(), availableActions: [...acceptedBlank().availableActions, "OPEN RP-004"] },
  ]) {
    const controller = createCalibrationMarginProtectedSurvey({ acceptedBlankState: invalid });
    const state = controller.getState();
    assert.equal(state.phase, "rp002_verified_boundary");
    assert.equal(state.recoveryTarget.packetId, "RP-002");
    assert.equal(controller.dispatch(intent(
      calibrationMarginActions.orient,
      null,
      "blocked-orient",
    )).reason, "accepted_blank_cm00_required");
    assert.doesNotMatch(JSON.stringify(state), /PRIVATE|stale|forged|RP-004|CM-10/);
    assertZeroEffect(state);
  }
});

test("protected survey is pure, unimported, storage-free, and contains no later-state authority", () => {
  const source = readFileSync(new URL("../src/CalibrationMarginProtectedSurvey.js", import.meta.url), "utf8");
  const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
  const main = readFileSync(new URL("../src/main.jsx", import.meta.url), "utf8");
  for (const forbidden of [
    "localStorage", "sessionStorage", "indexedDB", "fetch(", "XMLHttpRequest",
    "WebSocket", "navigator.", "document.", "window.", "CM-20", "RP-004", "RP-013",
    "mastery_status", "attempt_count", "learnerSource", "saveNote", "markBearing",
  ]) assert.equal(source.includes(forbidden), false, forbidden);
  assert.equal(app.includes("CalibrationMarginProtectedSurvey"), false);
  assert.equal(main.includes("CalibrationMarginProtectedSurvey"), false);
  assert.equal(calibrationMarginEntryAccessibility.oneActiveGroup, true);
  assert.equal(calibrationMarginEntryAccessibility.minActionCssPx, 44);
  assert.equal(calibrationMarginEntryAccessibility.modalities.length, 7);
  assert.equal(calibrationMarginPresentation.firstPerson, true);
  assert.equal(calibrationMarginPresentation.invariantWorld, true);
});
