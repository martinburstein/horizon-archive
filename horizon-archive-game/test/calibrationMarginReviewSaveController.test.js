import assert from "node:assert/strict";
import test from "node:test";
import {
  CALIBRATION_MARGIN_REVIEW_SAVE_KEY,
  calibrationMarginReviewSaveActions,
  calibrationMarginReviewSaveModalities,
  createCalibrationMarginReviewSaveController,
  createCalibrationMarginReviewSaveIntent,
  createCalibrationMarginReviewSaveStorageAdapter,
} from "../src/CalibrationMarginReviewSave.js";
import {
  exactReviewSaveCheckpoints,
  exactReviewSaveRecord,
} from "./calibrationMarginReviewSaveFixtures.js";

function memoryStorage(initial = null, fail = false) {
  let value = initial;
  return {
    getItem(key) {
      assert.equal(key, CALIBRATION_MARGIN_REVIEW_SAVE_KEY);
      return value;
    },
    setItem(key, next) {
      assert.equal(key, CALIBRATION_MARGIN_REVIEW_SAVE_KEY);
      if (fail) throw new Error("write unavailable");
      value = next;
    },
    removeItem(key) {
      assert.equal(key, CALIBRATION_MARGIN_REVIEW_SAVE_KEY);
      value = null;
    },
    bytes: () => value,
  };
}

export function exactReviewSaveSources(overrides = {}) {
  const checkpoints = exactReviewSaveCheckpoints();
  return {
    observations: ["correspondence", "bounded_difference", "sealed_unavailable"],
    pythonCheckpoint: checkpoints.python,
    extractionCheckpoint: checkpoints.extraction,
    extractionState: {
      version: "rp003.extraction-floor.v1",
      shellVersion: "SS-RP003-IE01-v1",
      packetId: "RP-003",
      boardState: "SC-04",
      phase: "IE-P3",
      activeGroup: "ie_finalized",
      owner: "SYSTEM",
      checkpoint: "IE-P3",
      finalizedSkillIds: ["RP003-IE-01"],
      continuation: "continuation",
      cityStateDelta: null,
      worldStateDelta: null,
      accessStateDelta: null,
      successor: null,
      privateWorkCleared: true,
      transientWorkCleared: true,
      authorityGranted: false,
      externalActionEnabled: false,
      worldStateChanged: false,
      focusIntent: { group: "ie_finalized", target: "heading" },
    },
    invariants: {
      worldStateDelta: null,
      accessStateDelta: null,
      authorityGranted: false,
      externalActionEnabled: false,
      worldStateChanged: false,
    },
    ...overrides,
  };
}

function intent(controller, action, token, modality = "pointer") {
  return createCalibrationMarginReviewSaveIntent(
    controller.getState(),
    action,
    modality,
    token,
  );
}

function openAndInspect(controller, prefix = "exact") {
  assert.equal(controller.dispatch(intent(
    controller,
    calibrationMarginReviewSaveActions.review,
    `${prefix}-review`,
  )).status, "review_opened");
  return controller.dispatch(intent(
    controller,
    calibrationMarginReviewSaveActions.provenance,
    `${prefix}-provenance`,
  ));
}

test("RS-EXP-001-007 all seven modalities open one five-conjunct zero-score review and fresh provenance", () => {
  for (const modality of calibrationMarginReviewSaveModalities) {
    const controller = createCalibrationMarginReviewSaveController({
      sources: exactReviewSaveSources(),
      adapter: createCalibrationMarginReviewSaveStorageAdapter(memoryStorage()),
    });
    const opened = controller.dispatch(intent(
      controller,
      calibrationMarginReviewSaveActions.review,
      `review-${modality}`,
      modality,
    ));
    assert.equal(opened.status, "review_opened");
    assert.equal(opened.state.activeGroup, "cm40_review");
    assert.deepEqual(opened.state.reviewRows.map((row) => row.id), [
      "observations", "python", "extraction", "provenance", "no_external_action",
    ]);
    assert.equal(opened.state.saveDisabled, true);
    assert.equal(opened.state.availableActions.includes(
      calibrationMarginReviewSaveActions.save,
    ), false);
    assert.doesNotMatch(JSON.stringify(opened.state), /score|grade|badge|percent/i);

    const inspected = controller.dispatch(intent(
      controller,
      calibrationMarginReviewSaveActions.provenance,
      `provenance-${modality}`,
      modality,
    ));
    assert.equal(inspected.status, "provenance_inspected_zero_credit");
    assert.equal(inspected.evidenceGranted, false);
    assert.equal(inspected.state.saveEligibility, true);
    assert.equal(inspected.state.focusIntent.target, "provenance_heading");
    const saved = controller.dispatch(intent(
      controller,
      calibrationMarginReviewSaveActions.save,
      `save-${modality}`,
      modality,
    ));
    assert.equal(saved.status, "save_committed_verified_restore");
  }
});

test("RS-EXP-001/007 private, extra, wrong-owner, stale and duplicate intents fail before accepted mutation", () => {
  const controller = createCalibrationMarginReviewSaveController({
    sources: exactReviewSaveSources(),
    adapter: createCalibrationMarginReviewSaveStorageAdapter(memoryStorage()),
  });
  const valid = intent(
    controller,
    calibrationMarginReviewSaveActions.review,
    "strict-review-token",
  );
  for (const invalid of [
    { ...valid, expectedOwner: "PILOT" },
    { ...valid, mode: "demo_tour" },
    { ...valid, privateResponse: "PRIVATE" },
    { ...valid, opaqueFreshEventToken: "short" },
  ]) {
    assert.equal(controller.dispatch(invalid).status, "rejected");
    assert.equal(controller.getState().activeGroup, "ie_finalized");
  }
  assert.equal(controller.dispatch(valid).status, "review_opened");
  assert.equal(controller.dispatch(valid).reason, "one_hit_only");
  assert.equal(controller.getState().activeGroup, "cm40_review");
});

test("RS-EXP-007-018 exact save is one-hit, source-derived, restored and returns write-free without replay", () => {
  const storage = memoryStorage();
  const controller = createCalibrationMarginReviewSaveController({
    sources: exactReviewSaveSources(),
    adapter: createCalibrationMarginReviewSaveStorageAdapter(storage),
  });
  openAndInspect(controller);
  const saveIntent = intent(
    controller,
    calibrationMarginReviewSaveActions.save,
    "exact-save",
    "screen_reader",
  );
  const saved = controller.dispatch(saveIntent);
  assert.equal(saved.status, "save_committed_verified_restore");
  assert.equal(saved.transactionState.activeGroup, "cm41_transaction");
  assert.equal(saved.state.activeGroup, "cm50_verified_restore");
  assert.deepEqual(saved.state.replayedEvents, []);
  assert.equal(saved.record.evidence.length, 7);
  assert.equal(storage.bytes(), JSON.stringify(saved.record));
  assert.equal(controller.dispatch(saveIntent).status, "rejected");

  const civic = controller.dispatch(intent(
    controller,
    calibrationMarginReviewSaveActions.returnCivicComparison,
    "return-civic",
  ));
  assert.equal(civic.status, "returned_to_rp002_write_free");
  assert.equal(civic.route.writePerformed, false);
  assert.deepEqual(civic.route.replayedEvents, []);
  assert.equal(storage.bytes(), JSON.stringify(saved.record));
});

test("RS-EXP-012-014 failure preserves last-good bytes and requires fresh provenance/save", () => {
  const prior = JSON.stringify(exactReviewSaveRecord());
  const storage = memoryStorage(prior, true);
  const controller = createCalibrationMarginReviewSaveController({
    sources: exactReviewSaveSources(),
    adapter: createCalibrationMarginReviewSaveStorageAdapter(storage),
  });
  openAndInspect(controller, "failure");
  const failed = controller.dispatch(intent(
    controller,
    calibrationMarginReviewSaveActions.save,
    "failure-save",
  ));
  assert.equal(failed.status, "save_failed_recovered");
  assert.equal(failed.lastGoodBytesPreserved, true);
  assert.equal(failed.state.activeGroup, "cm40_provenance_pending");
  assert.equal(failed.state.saveDisabled, true);
  assert.equal(storage.bytes(), prior);
  assert.equal(failed.state.privateWorkCleared, true);
  assert.equal(failed.state.transientWorkCleared, true);
});

test("RS-EXP-014 first-incomplete order rejects observations, Python, IE and invariant before mutation", () => {
  const exact = exactReviewSaveSources();
  const cases = [
    [{ observations: exact.observations.slice(1) }, "observations"],
    [{ pythonCheckpoint: { ...exact.pythonCheckpoint, checkpoint: "P0", evidence: [] } }, "python_primary"],
    [{ extractionCheckpoint: { ...exact.extractionCheckpoint, checkpoint: "IE-P1", evidence: exact.extractionCheckpoint.evidence.slice(0, 1) } }, "ie_retrieval"],
    [{ invariants: { ...exact.invariants, worldStateChanged: true } }, "ie_finalized"],
  ];
  for (const [replacement, expectedGroup] of cases) {
    const controller = createCalibrationMarginReviewSaveController({
      sources: exactReviewSaveSources(replacement),
      adapter: createCalibrationMarginReviewSaveStorageAdapter(memoryStorage()),
    });
    const result = controller.dispatch(intent(
      controller,
      calibrationMarginReviewSaveActions.review,
      `invalid-${expectedGroup}`,
    ));
    assert.equal(result.status, "source_boundary_incomplete");
    assert.equal(result.recoveryTarget.group, expectedGroup);
    assert.equal(controller.getState().activeGroup, "ie_finalized");
  }
});

test("RS-EXP-015/025 exact saved re-entry restores CM-50; Tour cannot read/write/enter", () => {
  const restored = createCalibrationMarginReviewSaveController({
    restoredRecord: exactReviewSaveRecord(),
  });
  assert.equal(restored.getState().activeGroup, "cm50_verified_restore");
  assert.deepEqual(restored.getState().replayedEvents, []);

  const tourStorage = memoryStorage(JSON.stringify(exactReviewSaveRecord()));
  const tour = createCalibrationMarginReviewSaveController({
    mode: "demo_tour",
    restoredRecord: null,
    sources: exactReviewSaveSources(),
    adapter: createCalibrationMarginReviewSaveStorageAdapter(tourStorage),
  });
  assert.equal(tour.dispatch(intent(
    tour,
    calibrationMarginReviewSaveActions.review,
    "tour-review",
  )).reason, "tour_review_save_closed");
  assert.equal(tourStorage.bytes(), JSON.stringify(exactReviewSaveRecord()));
});
