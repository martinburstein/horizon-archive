import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  CALIBRATION_MARGIN_ENTRY_ACTION,
  CALIBRATION_MARGIN_INSPECT_SEALED_BOUNDARY,
  CALIBRATION_MARGIN_PROTECTED_ENTRY_VERSION,
  calibrationMarginEntryAccessibility,
  calibrationMarginEntryActions,
  createCalibrationMarginProtectedEntry,
} from "../src/CalibrationMarginProtectedEntry.js";
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

function options(overrides = {}) {
  return {
    acceptedCityThreshold: acceptedCityThreshold(),
    verifiedRp002: verifiedRp002(),
    ...overrides,
  };
}

function intent(action, eventToken, overrides = {}) {
  return {
    packetId: "RP-003",
    version: CALIBRATION_MARGIN_PROTECTED_ENTRY_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action,
    activationKind: "pointer",
    eventToken,
    ...overrides,
  };
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

function enter(activationKind = "pointer") {
  const controller = createCalibrationMarginProtectedEntry(options());
  const result = controller.dispatch(intent(
    CALIBRATION_MARGIN_ENTRY_ACTION,
    `entry-${String(activationKind).replace(/[^a-z0-9_-]/gi, "-").slice(-60)}`,
    { activationKind },
  ));
  assert.equal(result.status, "blank_entry_visible");
  return controller;
}

test("exact verified RP-002 at accepted City Threshold mounts only blank CM-00 for all seven modalities", () => {
  for (const activationKind of calibrationMarginEntryAccessibility.modalities) {
    const controller = enter(activationKind);
    const state = controller.getState();
    assert.equal(state.phase, "CM-00 ARRIVE + IDLE");
    assert.equal(state.boardState, "SC-04");
    assert.equal(state.activeGroup, "cm00_blank");
    assert.equal(state.owner, "SCENE");
    assert.deepEqual(state.availableActions, calibrationMarginEntryActions);
    assert.deepEqual(state.focusIntent, { group: "cm00_blank", target: "heading" });
    assertZeroEffect(state);
  }
});

test("orientation and sealed-boundary inspection stay in blank CM-00 and finalize nothing", () => {
  for (const action of [
    calibrationMarginActions.orient,
    CALIBRATION_MARGIN_INSPECT_SEALED_BOUNDARY,
  ]) {
    for (const activationKind of calibrationMarginEntryAccessibility.modalities) {
      const controller = enter(activationKind);
      const result = controller.dispatch(intent(
        action,
        `blank-action-${activationKind}-${action.length}`,
        { activationKind },
      ));
      assert.match(result.status, /presented_zero_evidence/);
      assert.equal(result.state.phase, "CM-00 ARRIVE + IDLE");
      assert.deepEqual(result.state.availableActions, calibrationMarginEntryActions);
      assert.deepEqual(result.state.focusIntent, { group: "cm00_blank", target: action });
      assertZeroEffect(result.state);
    }
  }
});

test("both existing returns are reversible, write-free, and preserve the invariant boundary", () => {
  for (const [action, status, target] of [
    [calibrationMarginActions.returnCivicComparison, "returned_to_rp002_write_free", "RP-002"],
    [calibrationMarginActions.returnCityThreshold, "returned_to_city_threshold_write_free", "CITY_THRESHOLD"],
  ]) {
    const controller = enter();
    const result = controller.dispatch(intent(action, `route-${target.toLowerCase()}`));
    assert.equal(result.status, status);
    assert.equal(result.route.target, target);
    assert.equal(result.route.continuation, "continuation");
    assert.equal(result.route.cityStateDelta, null);
    assert.deepEqual(result.route.replayedEvents, []);
    assert.equal(result.route.authorityGranted, false);
    assert.equal(result.route.externalActionEnabled, false);
    assertZeroEffect(result.state);
  }
});

test("invalid entry and blank-action inputs do not spend a future valid one-hit token", () => {
  const controller = createCalibrationMarginProtectedEntry(options());
  const token = "entry-valid-after-rejections";
  for (const invalid of [
    intent(CALIBRATION_MARGIN_ENTRY_ACTION, token, { activationKind: "automatic" }),
    intent(CALIBRATION_MARGIN_ENTRY_ACTION, token, { mode: "demo_tour" }),
    intent(CALIBRATION_MARGIN_ENTRY_ACTION, token, { version: "stale" }),
    intent(CALIBRATION_MARGIN_ENTRY_ACTION, token, { owner: "SYSTEM" }),
    { ...intent(CALIBRATION_MARGIN_ENTRY_ACTION, token), privateResponse: "PRIVATE" },
    intent("ENTER + ORIENT", token),
  ]) assert.equal(controller.dispatch(invalid).status, "rejected");
  assert.equal(controller.dispatch(intent(CALIBRATION_MARGIN_ENTRY_ACTION, token)).status, "blank_entry_visible");

  const actionToken = "orient-valid-after-rejections";
  for (const invalid of [
    intent(calibrationMarginActions.orient, actionToken, { activationKind: "automatic" }),
    { ...intent(calibrationMarginActions.orient, actionToken), privateNotes: "PRIVATE" },
    intent("ORIENT + RETURN", actionToken),
  ]) assert.equal(controller.dispatch(invalid).status, "rejected");
  assert.equal(controller.dispatch(intent(calibrationMarginActions.orient, actionToken)).status,
    "orientation_presented_zero_evidence");
  assert.equal(controller.dispatch(intent(calibrationMarginActions.orient, actionToken)).reason, "one_hit_only");
});

test("Tour, stale, partial, forged, extra, and private boundaries fail closed without leaking inputs", () => {
  const throwingThreshold = Object.defineProperty({}, "status", {
    get() { throw new Error("Tour must sanitize before campaign boundary access"); },
  });
  const tour = createCalibrationMarginProtectedEntry({
    mode: "demo_tour",
    acceptedCityThreshold: throwingThreshold,
    verifiedRp002: Object.defineProperty({}, "packetId", {
      get() { throw new Error("Tour must sanitize before predecessor access"); },
    }),
  }).getState();
  assert.equal(tour.phase, "tour_preview");
  assert.equal(tour.recoveryTarget.packetId, "RP-002");
  assertZeroEffect(tour);

  const cases = [
    { acceptedCityThreshold: { ...acceptedCityThreshold(), privateNote: "PRIVATE" } },
    { acceptedCityThreshold: { ...acceptedCityThreshold(), checkpoint: "stale" } },
    { verifiedRp002: { ...verifiedRp002(), verificationStatus: "stale" } },
    { verifiedRp002: { ...verifiedRp002(), nextSurveyDirectionMarked: false } },
    { verifiedRp002: { ...verifiedRp002(), privateResponse: "PRIVATE" } },
    { verifiedRp002: { ...verifiedRp002(), forged: true } },
    { verifiedRp002: { packetId: "RP-002", checkpoint: "comparison_complete" } },
  ];
  for (const replacement of cases) {
    const controller = createCalibrationMarginProtectedEntry(options(replacement));
    const state = controller.getState();
    assert.equal(state.phase, "rp002_verified_boundary");
    assert.equal(state.boardState, "SC-03-50");
    assert.equal(state.recoveryTarget.packetId, "RP-002");
    assert.equal(state.privateWorkCleared, true);
    assert.equal(state.transientWorkCleared, true);
    assert.doesNotMatch(JSON.stringify(state), /PRIVATE|stale|forged/);
    assert.equal(controller.dispatch(intent(CALIBRATION_MARGIN_ENTRY_ACTION, "blocked-entry")).reason,
      "rp002_recovery_required");
    assertZeroEffect(state);
  }
});

test("exact blank resume revalidates to heading first; contaminated resume sanitizes to RP-002", () => {
  const accepted = enter().getState();
  const resumed = createCalibrationMarginProtectedEntry(options({ restoredState: accepted })).getState();
  assert.equal(resumed.phase, "CM-00 ARRIVE + IDLE");
  assert.deepEqual(resumed.focusIntent, { group: "cm00_blank", target: "heading" });
  assert.deepEqual(resumed.replayedEvents, []);
  assertZeroEffect(resumed);

  for (const contaminated of [
    { ...accepted, privateResponse: "PRIVATE" },
    { ...accepted, focusIntent: { group: "cm00_blank", target: "PRIVATE" } },
    { ...accepted, phase: "CM-10 SURVEY" },
    { ...accepted, observationEvidence: ["forged"] },
    { ...accepted, availableActions: [...accepted.availableActions, "OPEN RP-004"] },
  ]) {
    const state = createCalibrationMarginProtectedEntry(options({ restoredState: contaminated })).getState();
    assert.equal(state.phase, "rp002_verified_boundary");
    assert.doesNotMatch(JSON.stringify(state), /PRIVATE|CM-10|forged|RP-004/);
    assertZeroEffect(state);
  }
});

test("entry controller is pure, unimported, storage-free, and stops before later RP-003 state", () => {
  const source = readFileSync(new URL("../src/CalibrationMarginProtectedEntry.js", import.meta.url), "utf8");
  const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
  const main = readFileSync(new URL("../src/main.jsx", import.meta.url), "utf8");
  for (const forbidden of [
    "localStorage", "sessionStorage", "indexedDB", "fetch(", "XMLHttpRequest",
    "WebSocket", "navigator.", "document.", "window.", "CM-10", "RP-004", "RP-013",
  ]) assert.equal(source.includes(forbidden), false, forbidden);
  assert.equal(app.includes("CalibrationMarginProtectedEntry"), false);
  assert.equal(main.includes("CalibrationMarginProtectedEntry"), false);
  assert.equal(calibrationMarginEntryAccessibility.minActionCssPx, 44);
  assert.equal(calibrationMarginEntryAccessibility.modalities.length, 7);
  assert.equal(calibrationMarginPresentation.firstPerson, true);
  assert.equal(calibrationMarginPresentation.invariantWorld, true);
});
