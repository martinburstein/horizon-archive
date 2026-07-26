import assert from "node:assert/strict";
import test from "node:test";
import {
  createCalibrationMarginNormalEntry,
  createCalibrationMarginNormalEntryIntent,
} from "../src/CalibrationMarginNormalEntry.js";
import {
  calibrationMarginSurveyActions,
} from "../src/CalibrationMarginProtectedSurvey.js";
import {
  calibrationMarginReviewSaveActions,
  createCalibrationMarginReviewSaveStorageAdapter,
} from "../src/CalibrationMarginReviewSave.js";
import { exactReviewSaveCheckpoints } from "./calibrationMarginReviewSaveFixtures.js";

function options() {
  const checkpoints = exactReviewSaveCheckpoints();
  let value = null;
  const storage = {
    getItem() { return value; },
    setItem(key, next) { value = next; },
    removeItem() { value = null; },
  };
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
    restoredPythonCheckpoint: checkpoints.python,
    restoredExtractionCheckpoint: checkpoints.extraction,
    reviewSaveAdapter: createCalibrationMarginReviewSaveStorageAdapter(storage),
  };
}

function intent(controller, action, token, modality = "pointer") {
  const state = controller.getState();
  return createCalibrationMarginNormalEntryIntent(
    action,
    modality,
    token,
    state.phase,
    state.activeGroup,
  );
}

test("RS-EXP-001/014/015 normal restored IE-P3 rechecks observations then completes CM40-CM50", () => {
  const controller = createCalibrationMarginNormalEntry(options());
  assert.equal(controller.getState().activeGroup, "ie_finalized");
  assert.deepEqual(controller.getState().availableActions, [
    calibrationMarginReviewSaveActions.review,
  ]);
  const recovery = controller.dispatch(intent(
    controller,
    calibrationMarginReviewSaveActions.review,
    "normal-review-before-observations",
  ));
  assert.equal(recovery.status, "source_boundary_incomplete");
  assert.equal(recovery.state.phase, "CM-10 SURVEY");
  assert.deepEqual(recovery.state.recordedObservationIds, []);

  for (const [index, action] of calibrationMarginSurveyActions.slice(0, 3).entries()) {
    const result = controller.dispatch(intent(
      controller,
      action,
      `normal-observation-${index}`,
      "keyboard_enter",
    ));
    if (index === 2) {
      assert.equal(result.status, "review_boundary_restored");
      assert.equal(result.state.activeGroup, "ie_finalized");
    }
  }
  assert.equal(controller.dispatch(intent(
    controller,
    calibrationMarginReviewSaveActions.review,
    "normal-review-fresh",
  )).status, "review_opened");
  assert.equal(controller.dispatch(intent(
    controller,
    calibrationMarginReviewSaveActions.provenance,
    "normal-provenance-fresh",
  )).status, "provenance_inspected_zero_credit");
  const saved = controller.dispatch(intent(
    controller,
    calibrationMarginReviewSaveActions.save,
    "normal-save-fresh",
  ));
  assert.equal(saved.status, "save_committed_verified_restore");
  assert.equal(saved.state.activeGroup, "cm50_verified_restore");
  assert.equal(controller.getReviewSaveRecord().checkpoint, "calibration_margin_complete");
});
