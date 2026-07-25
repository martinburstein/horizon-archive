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
  CALIBRATION_MARGIN_REVIEW_LOCAL_WORK_IMAGE,
  calibrationMarginSurveyActions,
  calibrationMarginSurveyObservations,
} from "../src/CalibrationMarginProtectedSurvey.js";
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

function intent(action, activationKind, eventToken, phase = null) {
  return createCalibrationMarginNormalEntryIntent(action, activationKind, eventToken, phase);
}

function enterBlank(controller, token = "normal-entry") {
  return controller.dispatch(intent(
    CALIBRATION_MARGIN_ENTRY_ACTION,
    "pointer",
    token,
  )).state;
}

function enterSurvey(controller, activationKind = "pointer", token = "normal-orient") {
  return controller.dispatch(intent(
    calibrationMarginActions.orient,
    activationKind,
    token,
    "CM-00 ARRIVE + IDLE",
  )).state;
}

function renderedActionLabels(state) {
  const observations = new Map(
    (state.observationControls ?? []).map((control) => [control.action, control]),
  );
  return state.availableActions.map((action) => {
    const observation = observations.get(action);
    return observation ? `${action} — ${observation.status}` : action;
  });
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

test("normal blank entry preserves zero-effect sealed-boundary presentation and reversible returns", () => {
  for (const [action, expected] of [
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

test("normal fresh ORIENT mounts exactly one zero-effect CM-10 survey in all seven modalities", () => {
  for (const activationKind of calibrationMarginNormalEntryAccessibility.modalities) {
    const controller = createCalibrationMarginNormalEntry(options());
    enterBlank(controller, `entry-${activationKind}`);
    const state = enterSurvey(controller, activationKind, `orient-${activationKind}`);
    assert.equal(state.phase, "CM-10 SURVEY");
    assert.equal(state.boardState, "SC-04");
    assert.equal(state.activeGroup, "cm10_survey");
    assert.equal(state.owner, "SCENE");
    assert.deepEqual(state.availableActions, calibrationMarginSurveyActions);
    assert.deepEqual(state.recordedObservationIds, []);
    assert.deepEqual(renderedActionLabels(state), [
      "INSPECT EXPOSED SEQUENCE A — Available",
      "INSPECT EXPOSED SEQUENCE B — Available",
      "INSPECT SEALED BOUNDARY — Available",
      calibrationMarginActions.returnCivicComparison,
      calibrationMarginActions.returnCityThreshold,
    ]);
    assert.deepEqual(state.focusIntent, { group: "cm10_survey", target: "heading" });
    assert.equal(state.localReviewEligibility.eligible, false);
    assert.equal(state.localReviewEligibility.dispatchable, false);
    assertZeroEffect(state);
  }
});

test("normal A/B/sealed actions finalize only matching IDs in any order with safe Recorded replay", () => {
  const orders = [
    ["INSPECT EXPOSED SEQUENCE A", "INSPECT EXPOSED SEQUENCE B", "INSPECT SEALED BOUNDARY"],
    ["INSPECT EXPOSED SEQUENCE A", "INSPECT SEALED BOUNDARY", "INSPECT EXPOSED SEQUENCE B"],
    ["INSPECT EXPOSED SEQUENCE B", "INSPECT EXPOSED SEQUENCE A", "INSPECT SEALED BOUNDARY"],
    ["INSPECT EXPOSED SEQUENCE B", "INSPECT SEALED BOUNDARY", "INSPECT EXPOSED SEQUENCE A"],
    ["INSPECT SEALED BOUNDARY", "INSPECT EXPOSED SEQUENCE A", "INSPECT EXPOSED SEQUENCE B"],
    ["INSPECT SEALED BOUNDARY", "INSPECT EXPOSED SEQUENCE B", "INSPECT EXPOSED SEQUENCE A"],
  ];
  for (const [orderIndex, order] of orders.entries()) {
    const controller = createCalibrationMarginNormalEntry(options());
    enterBlank(controller, `order-entry-${orderIndex}`);
    const initial = enterSurvey(controller, "pointer", `order-orient-${orderIndex}`);
    let expectedRecorded = [];
    assert.equal(
      renderedActionLabels(initial).filter((label) => label.endsWith("— Available")).length,
      3,
    );
    order.forEach((action, actionIndex) => {
      const result = controller.dispatch(intent(
        action,
        "keyboard_enter",
        `record-${orderIndex}-${actionIndex}`,
        "CM-10 SURVEY",
      ));
      assert.equal(result.status, "observation_recorded_zero_evidence");
      expectedRecorded = [...expectedRecorded, action];
      assert.deepEqual(
        renderedActionLabels(result.state).slice(0, 3),
        calibrationMarginSurveyActions.slice(0, 3).map((candidate) => (
          `${candidate} — ${expectedRecorded.includes(candidate) ? "Recorded" : "Available"}`
        )),
      );
      assert.deepEqual(result.state.focusIntent, { group: "cm10_survey", target: action });
      assert.deepEqual(
        result.state.recordedObservationIds,
        Object.values(calibrationMarginSurveyObservations)
          .filter((id) => order.slice(0, actionIndex + 1)
            .some((recordedAction) => calibrationMarginSurveyObservations[recordedAction] === id)),
      );
      assertZeroEffect(result.state);
    });
    const complete = controller.getState();
    assert.equal(complete.observationControls.every((control) => (
      control.recorded && control.status === "Recorded" && !control.meaningUsesColorAlone
    )), true);
    assert.deepEqual(complete.localReviewEligibility, {
      action: CALIBRATION_MARGIN_REVIEW_LOCAL_WORK_IMAGE,
      eligible: true,
      status: "Eligible",
      dispatchable: true,
      activated: false,
    });

    const replay = controller.dispatch(intent(
      order[1],
      "touch",
      `replay-${orderIndex}`,
      "CM-10 SURVEY",
    ));
    assert.equal(replay.status, "recorded_replay_zero_evidence");
    assert.deepEqual(replay.state.recordedObservationIds, complete.recordedObservationIds);
    assert.deepEqual(renderedActionLabels(replay.state), renderedActionLabels(complete));
    assert.deepEqual(replay.state.focusIntent, {
      group: "cm10_survey",
      target: order[1],
    });
    assertZeroEffect(replay.state);
  }
});

test("normal CM-10 resume is heading-first, malformed recovery is blank, and partial review stays closed", () => {
  const first = createCalibrationMarginNormalEntry(options());
  enterBlank(first);
  enterSurvey(first);
  const action = "INSPECT EXPOSED SEQUENCE B";
  const partial = first.dispatch(intent(
    action,
    "switch",
    "resume-record-b",
    "CM-10 SURVEY",
  )).state;

  const resumedController = createCalibrationMarginNormalEntry(options({ restoredState: partial }));
  const resumed = resumedController.getState();
  assert.equal(resumed.phase, "CM-10 SURVEY");
  assert.deepEqual(resumed.recordedObservationIds, ["bounded_difference"]);
  assert.deepEqual(resumed.focusIntent, { group: "cm10_survey", target: "heading" });
  assertZeroEffect(resumed);

  const review = resumedController.dispatch(intent(
    CALIBRATION_MARGIN_REVIEW_LOCAL_WORK_IMAGE,
    "pointer",
    "review-remains-closed",
    "CM-10 SURVEY",
  ));
  assert.equal(review.status, "rejected");
  assert.equal(review.reason, "review_not_eligible");
  assert.deepEqual(review.state, resumed);

  for (const contaminated of [
    { ...partial, privateNotes: "PRIVATE" },
    { ...partial, recordedObservationIds: ["forged"] },
    { ...partial, phase: "CM-20 REVIEW" },
  ]) {
    const safe = createCalibrationMarginNormalEntry(options({ restoredState: contaminated }))
      .getState();
    if (contaminated.phase === "CM-10 SURVEY") {
      assert.equal(safe.phase, "CM-00 ARRIVE + IDLE");
      assert.deepEqual(safe.focusIntent, { group: "cm00_blank", target: "heading" });
    } else {
      assert.equal(safe.phase, "rp002_verified_boundary");
    }
    assert.doesNotMatch(JSON.stringify(safe), /PRIVATE|forged|CM-20/);
    assertZeroEffect(safe);
  }
});

test("normal CM-10 retains both write-free returns without saving observation state", () => {
  for (const [action, status, target] of [
    [calibrationMarginActions.returnCivicComparison, "returned_to_rp002_write_free", "RP-002"],
    [calibrationMarginActions.returnCityThreshold, "returned_to_city_threshold_write_free", "CITY_THRESHOLD"],
  ]) {
    const controller = createCalibrationMarginNormalEntry(options());
    enterBlank(controller, `return-entry-${target}`);
    enterSurvey(controller, "pointer", `return-orient-${target}`);
    controller.dispatch(intent(
      "INSPECT EXPOSED SEQUENCE A",
      "speech",
      `return-record-${target}`,
      "CM-10 SURVEY",
    ));
    const result = controller.dispatch(intent(
      action,
      "screen_reader",
      `return-action-${target}`,
      "CM-10 SURVEY",
    ));
    assert.equal(result.status, status);
    assert.equal(result.route.target, target);
    assert.equal(result.route.cityStateDelta, null);
    assert.equal(result.route.authorityGranted, false);
    assertZeroEffect(result.state);
  }
});

test("CM-10 RP-002 return can continue write-free to City Threshold from the restored survey", () => {
  const controller = createCalibrationMarginNormalEntry(options());
  enterBlank(controller);
  enterSurvey(controller);
  const returned = controller.dispatch(intent(
    calibrationMarginActions.returnCivicComparison,
    "pointer",
    "survey-return-rp002",
    "CM-10 SURVEY",
  ));
  assert.equal(returned.status, "returned_to_rp002_write_free");

  const restoredController = createCalibrationMarginNormalEntry(options({
    restoredState: returned.state,
  }));
  assert.equal(restoredController.getState().phase, "CM-10 SURVEY");
  const threshold = restoredController.dispatch(intent(
    calibrationMarginActions.returnCityThreshold,
    "keyboard_space",
    "survey-rp002-to-threshold",
    "CM-10 SURVEY",
  ));
  assert.equal(threshold.status, "returned_to_city_threshold_write_free");
  assert.equal(threshold.route.target, "CITY_THRESHOLD");
  assertZeroEffect(threshold.state);
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

test("normal resume revalidates exact blank state to heading and rejects contaminated blank state", () => {
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
    { ...blank, privateNotes: "PRIVATE" },
    { ...blank, observationEvidence: ["forged"] },
    { ...blank, availableActions: [...blank.availableActions, "OPEN RP-004"] },
  ]) {
    const state = createCalibrationMarginNormalEntry(options({ restoredState: contaminated })).getState();
    assert.equal(state.phase, "rp002_verified_boundary");
    assert.doesNotMatch(JSON.stringify(state), /PRIVATE|forged|RP-004/);
    assertZeroEffect(state);
  }
});

test("normal App and UI compose the bounded Python floor through the active review boundary", () => {
  const normal = readFileSync(new URL("../src/CalibrationMarginNormalEntry.js", import.meta.url), "utf8");
  const view = readFileSync(new URL("../src/CalibrationMarginEntry.jsx", import.meta.url), "utf8");
  const styles = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");
  const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
  const city = readFileSync(new URL("../src/CityThresholdStaging.jsx", import.meta.url), "utf8");
  for (const forbidden of [
    "localStorage", "sessionStorage", "indexedDB", "fetch(", "XMLHttpRequest",
    "WebSocket", "navigator.", "document.", "window.", "RP-004", "RP-013",
  ]) assert.equal(normal.includes(forbidden), false, forbidden);
  assert.match(normal, /createCalibrationMarginProtectedSurvey/);
  assert.doesNotMatch(normal, /from "\.\/CalibrationMarginProtectedJourney\.js"/);
  assert.match(app, /createCalibrationMarginNormalEntry/);
  assert.match(app, /mode === "rp003-entry"/);
  assert.match(app, /"CM-10 SURVEY"/);
  assert.match(app, /calibrationReturnToRp002/);
  assert.doesNotMatch(app, /createCalibrationMarginProtectedEntry/);
  assert.match(city, /onEnterAdjacentSurvey/);
  assert.match(city, /adjacentSurveyActionRef/);
  assert.match(view, /data-active-group=\{entryState\.activeGroup\}/);
  assert.match(view, /entryState\.availableActions\.map/);
  assert.match(view, /data-observation-id/);
  assert.match(view, /data-recorded/);
  assert.match(
    view,
    /const label = observation \? `\$\{action\} — \$\{observation\.status\}` : action;/,
  );
  assert.match(view, /data-review-eligibility="eligible-active"/);
  assert.match(view, /CalibrationMarginPythonFloor/);
  assert.match(view, /onFieldChange/);
  assert.match(view, /tabIndex="-1"/);
  assert.match(view, /className="city-world calibration-margin-world"/);
  assert.equal((view.match(/<img\b/g) ?? []).length, 1);
  assert.doesNotMatch(view, /city-world-plate-narrow|<picture\b|<source\b/);
  const genericNativeHide = styles.indexOf(
    '.canonical-game-frame[data-canonical-layout="narrow"] .city-world-plate-native { display: none; }',
  );
  const calibrationVisibilityOverride = styles.indexOf(
    '.canonical-game-frame[data-canonical-layout="narrow"] .calibration-margin-world .city-world-plate-native',
  );
  assert.ok(genericNativeHide >= 0, "paired City Threshold narrow switching remains registered");
  assert.ok(
    calibrationVisibilityOverride > genericNativeHide,
    "the blank CM-00 same-master visibility exception must win the narrow/effective-200% cascade",
  );
  assert.match(
    styles.slice(calibrationVisibilityOverride),
    /\.calibration-margin-world \.city-world-plate-native\s*\{[^}]*display:\s*block;[^}]*object-fit:\s*cover;/,
  );
  assert.match(styles, /\.canonical-game-frame \.city-world \{[\s\S]*?aspect-ratio: 16 \/ 9;/);
  assert.match(styles, /data-canonical-layout="narrow"\] \.city-command-panel \{[\s\S]*?grid-template-columns: 1fr;/);
  assert.match(styles, /\.canonical-game-host \{[\s\S]*?overflow-x: clip;/);
  assert.match(styles, /\.canonical-game-frame \.city-command-actions button,[\s\S]*?min-height: 44px;/);
  assert.match(styles, /@media \(forced-colors: active\)/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
  assert.doesNotMatch(view, /learning|save|RP-004|RP-013/);
  assert.equal(calibrationMarginNormalEntryAccessibility.minActionCssPx, 44);
  assert.equal(calibrationMarginNormalEntryAccessibility.modalities.length, 7);
});
