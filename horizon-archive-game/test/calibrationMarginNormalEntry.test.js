import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  CALIBRATION_MARGIN_ENTRY_ACTION,
  calibrationMarginNormalEntryAccessibility,
  createCalibrationMarginNormalEntry,
  createCalibrationMarginNormalEntryIntent,
} from "../src/CalibrationMarginNormalEntry.js";
import {
  CALIBRATION_MARGIN_INSPECT_SEALED_BOUNDARY,
  calibrationMarginEntryActions,
} from "../src/CalibrationMarginProtectedEntry.js";
import { calibrationMarginActions } from "../src/CalibrationMarginProtectedJourney.js";

function verifiedRestoreState(overrides = {}) {
  return {
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
    ...overrides,
  };
}

function returnedCityThreshold(overrides = {}) {
  return {
    status: "returned_to_city_threshold_write_free",
    state: verifiedRestoreState(),
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
    ...overrides,
  };
}

function options(overrides = {}) {
  return {
    verifiedRestoreState: verifiedRestoreState(),
    returnedCityThreshold: returnedCityThreshold(),
    ...overrides,
  };
}

function intent(action, activationKind, eventToken) {
  return createCalibrationMarginNormalEntryIntent(action, activationKind, eventToken);
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

test("normal exact verified return exposes one private-free seven-modality blank entry", () => {
  for (const activationKind of calibrationMarginNormalEntryAccessibility.modalities) {
    const controller = createCalibrationMarginNormalEntry(options());
    assert.equal(controller.getState().phase, "city_threshold");
    const result = controller.dispatch(intent(
      CALIBRATION_MARGIN_ENTRY_ACTION,
      activationKind,
      `rp003-normal-entry-${activationKind}`,
    ));
    assert.equal(result.status, "blank_entry_visible");
    assert.equal(result.state.phase, "CM-00 ARRIVE + IDLE");
    assert.equal(result.state.boardState, "SC-04");
    assert.equal(result.state.owner, "SCENE");
    assert.equal(result.state.activeGroup, "cm00_blank");
    assert.deepEqual(result.state.availableActions, calibrationMarginEntryActions);
    assert.deepEqual(result.state.focusIntent, { group: "cm00_blank", target: "heading" });
    assertZeroEffect(result.state);
  }
});

test("normal blank entry preserves only zero-effect orientation, sealed boundary, and reversible returns", () => {
  for (const [action, expected] of [
    [calibrationMarginActions.orient, "orientation_presented_zero_evidence"],
    [CALIBRATION_MARGIN_INSPECT_SEALED_BOUNDARY, "sealed_boundary_presented_zero_evidence"],
    [calibrationMarginActions.returnCivicComparison, "returned_to_rp002_write_free"],
    [calibrationMarginActions.returnCityThreshold, "returned_to_city_threshold_write_free"],
  ]) {
    const controller = createCalibrationMarginNormalEntry(options());
    controller.dispatch(intent(CALIBRATION_MARGIN_ENTRY_ACTION, "pointer", `enter-${action.length}`));
    const result = controller.dispatch(intent(action, "keyboard_enter", `action-${action.length}`));
    assert.equal(result.status, expected);
    assert.equal(result.state.phase, "CM-00 ARRIVE + IDLE");
    assertZeroEffect(result.state);
    if (result.route) {
      assert.ok(["RP-002", "CITY_THRESHOLD"].includes(result.route.target));
      assert.equal(result.route.continuation, "continuation");
      assert.equal(result.route.cityStateDelta, null);
      assert.deepEqual(result.route.replayedEvents, []);
    }
  }
});

test("Tour and invalid, private, partial, stale, forged, and contaminated boundaries fail closed to exact RP-002", () => {
  const tour = createCalibrationMarginNormalEntry({
    mode: "demo_tour",
    verifiedRestoreState: Object.defineProperty({}, "phase", {
      get() { throw new Error("Tour must resolve before predecessor access"); },
    }),
    returnedCityThreshold: Object.defineProperty({}, "status", {
      get() { throw new Error("Tour must resolve before threshold access"); },
    }),
  }).getState();
  assert.equal(tour.phase, "tour_preview");
  assert.equal(tour.recoveryTarget.packetId, "RP-002");
  assertZeroEffect(tour);

  const invalid = [
    { verifiedRestoreState: verifiedRestoreState({ phase: "stale" }) },
    { verifiedRestoreState: verifiedRestoreState({ privateResponse: "PRIVATE" }) },
    { verifiedRestoreState: verifiedRestoreState({ progression: { civicComparisonSaved: true } }) },
    { verifiedRestoreState: verifiedRestoreState({ forged: true, progression: {} }) },
    { returnedCityThreshold: returnedCityThreshold({ status: "partial" }) },
    { returnedCityThreshold: returnedCityThreshold({ privateNotes: "PRIVATE" }) },
    { returnedCityThreshold: returnedCityThreshold({ route: { writePerformed: true } }) },
  ];
  for (const replacement of invalid) {
    const controller = createCalibrationMarginNormalEntry(options(replacement));
    const state = controller.getState();
    assert.equal(state.phase, "rp002_verified_boundary");
    assert.equal(state.boardState, "SC-03-50");
    assert.equal(state.recoveryTarget.packetId, "RP-002");
    assert.equal(state.privateWorkCleared, true);
    assert.equal(state.transientWorkCleared, true);
    assert.doesNotMatch(JSON.stringify(state), /PRIVATE|stale|forged/);
    assert.equal(controller.dispatch(intent(
      CALIBRATION_MARGIN_ENTRY_ACTION,
      "pointer",
      "blocked-entry",
    )).reason, "rp002_recovery_required");
    assertZeroEffect(state);
  }
});

test("normal resume revalidates exact blank state to heading and rejects contaminated later state", () => {
  const first = createCalibrationMarginNormalEntry(options());
  const blank = first.dispatch(intent(
    CALIBRATION_MARGIN_ENTRY_ACTION,
    "screen_reader",
    "rp003-normal-resume-source",
  )).state;
  const resumed = createCalibrationMarginNormalEntry(options({ restoredState: blank })).getState();
  assert.equal(resumed.phase, "CM-00 ARRIVE + IDLE");
  assert.deepEqual(resumed.focusIntent, { group: "cm00_blank", target: "heading" });
  assertZeroEffect(resumed);

  for (const contaminated of [
    { ...blank, phase: "CM-10 SURVEY" },
    { ...blank, privateNotes: "PRIVATE" },
    { ...blank, observationEvidence: ["forged"] },
    { ...blank, availableActions: [...blank.availableActions, "OPEN RP-004"] },
  ]) {
    const state = createCalibrationMarginNormalEntry(options({ restoredState: contaminated })).getState();
    assert.equal(state.phase, "rp002_verified_boundary");
    assert.doesNotMatch(JSON.stringify(state), /CM-10|PRIVATE|forged|RP-004/);
    assertZeroEffect(state);
  }
});

test("normal App and UI integrate only the transient blank boundary with no storage, learning, or later-state surface", () => {
  const normal = readFileSync(new URL("../src/CalibrationMarginNormalEntry.js", import.meta.url), "utf8");
  const view = readFileSync(new URL("../src/CalibrationMarginEntry.jsx", import.meta.url), "utf8");
  const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
  const city = readFileSync(new URL("../src/CityThresholdStaging.jsx", import.meta.url), "utf8");
  for (const forbidden of [
    "localStorage", "sessionStorage", "indexedDB", "fetch(", "XMLHttpRequest",
    "WebSocket", "navigator.", "document.", "window.", "CM-10", "RP-004", "RP-013",
  ]) assert.equal(normal.includes(forbidden), false, forbidden);
  assert.match(app, /createCalibrationMarginNormalEntry/);
  assert.match(app, /mode === "rp003-entry"/);
  assert.match(app, /calibrationReturnToRp002/);
  assert.doesNotMatch(app, /createCalibrationMarginProtectedEntry/);
  assert.match(city, /onEnterAdjacentSurvey/);
  assert.match(city, /adjacentSurveyActionRef/);
  assert.match(view, /data-active-group=\{entryState\.activeGroup\}/);
  assert.match(view, /entryState\.availableActions\.map/);
  assert.match(view, /tabIndex="-1"/);
  assert.doesNotMatch(view, /CM-10|learning|observation|save|RP-004|RP-013/);
  assert.equal(calibrationMarginNormalEntryAccessibility.minActionCssPx, 44);
  assert.equal(calibrationMarginNormalEntryAccessibility.modalities.length, 7);
});
