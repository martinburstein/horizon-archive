import assert from "node:assert/strict";
import test from "node:test";
import {
  createCalibrationMarginNormalEntry,
  createCalibrationMarginNormalEntryIntent,
} from "../src/CalibrationMarginNormalEntry.js";
import {
  createCalibrationMarginReviewSaveStorageAdapter,
} from "../src/CalibrationMarginReviewSave.js";
import {
  THREE_CURRENT_REACH_SAVE_KEY,
  createThreeCurrentReachStorageAdapter,
  resolveThreeCurrentReachWorldScene,
  threeCurrentReachActions,
  threeCurrentReachWorldPlateIds,
} from "../src/ThreeCurrentReachNormal.js";
import { exactReviewSaveRecord } from "./calibrationMarginReviewSaveFixtures.js";

function storage() {
  const values = new Map();
  return {
    getItem(key) { return values.get(key) ?? null; },
    setItem(key, value) { values.set(key, value); },
    removeItem(key) { values.delete(key); },
    value(key) { return values.get(key) ?? null; },
  };
}

function intent(controller, action, token) {
  const state = controller.getState();
  return createCalibrationMarginNormalEntryIntent(
    action,
    "keyboard_enter",
    token,
    state.phase,
    state.activeGroup,
  );
}

test("TD004 normal integration mounts exactly beside released CM-50 returns", () => {
  const local = storage();
  const review = exactReviewSaveRecord();
  const controller = createCalibrationMarginNormalEntry({
    restoredReviewSave: review,
    reviewSaveAdapter: createCalibrationMarginReviewSaveStorageAdapter(local),
    threeCurrentReachAdapter: createThreeCurrentReachStorageAdapter(local),
  });
  assert.equal(controller.getState().activeGroup, "cm50_route");
  assert.deepEqual(resolveThreeCurrentReachWorldScene(controller.getState()), {
    sceneId: "SC-04",
    assetId: threeCurrentReachWorldPlateIds.calibrationMargin,
  });
  assert.deepEqual(controller.getState().availableActions, [
    threeCurrentReachActions.route,
    threeCurrentReachActions.returnCivic,
    threeCurrentReachActions.returnThreshold,
  ]);
  const arrived = controller.dispatch(intent(
    controller,
    threeCurrentReachActions.route,
    "normal-rp004-route-token",
  ));
  assert.equal(arrived.status, "three_current_arrived_zero_evidence");
  assert.equal(arrived.state.activeGroup, "tr00_orient");
  assert.deepEqual(resolveThreeCurrentReachWorldScene(arrived.state), {
    sceneId: "SC-05",
    assetId: threeCurrentReachWorldPlateIds.threeCurrentReach,
  });
  assert.equal(local.value(THREE_CURRENT_REACH_SAVE_KEY), null);

  const returned = controller.dispatch(intent(
    controller,
    threeCurrentReachActions.returnCalibration,
    "normal-rp004-return-token",
  ));
  assert.equal(returned.status, "returned_to_calibration_margin_write_free");
  assert.equal(returned.state.activeGroup, "cm50_route");
  assert.deepEqual(resolveThreeCurrentReachWorldScene(returned.state), {
    sceneId: "SC-04",
    assetId: threeCurrentReachWorldPlateIds.calibrationMargin,
  });
  assert.equal(controller.getReviewSaveRecord().checkpoint, "calibration_margin_complete");
  assert.equal(local.value(THREE_CURRENT_REACH_SAVE_KEY), null);
});

test("TD004 invalid or interrupted pre-save route attempts fail closed to SC-04", () => {
  const local = storage();
  const review = exactReviewSaveRecord();
  const options = {
    restoredReviewSave: review,
    reviewSaveAdapter: createCalibrationMarginReviewSaveStorageAdapter(local),
    threeCurrentReachAdapter: createThreeCurrentReachStorageAdapter(local),
  };
  const controller = createCalibrationMarginNormalEntry(options);
  const invalid = {
    ...intent(controller, threeCurrentReachActions.route, "invalid-route-token"),
    expectedOwner: "SCENE // THREE-CURRENT REACH",
  };
  const rejected = controller.dispatch(invalid);
  assert.equal(rejected.status, "rejected");
  assert.deepEqual(resolveThreeCurrentReachWorldScene(rejected.state), {
    sceneId: "SC-04",
    assetId: threeCurrentReachWorldPlateIds.calibrationMargin,
  });
  assert.equal(resolveThreeCurrentReachWorldScene({
    ...rejected.state,
    boardState: "SC-05",
  }), null);
  const duplicateRejected = controller.dispatch(invalid);
  assert.equal(duplicateRejected.status, "rejected");
  assert.deepEqual(resolveThreeCurrentReachWorldScene(duplicateRejected.state), {
    sceneId: "SC-04",
    assetId: threeCurrentReachWorldPlateIds.calibrationMargin,
  });

  const arrived = controller.dispatch(intent(
    controller,
    threeCurrentReachActions.route,
    "accepted-before-interruption",
  ));
  assert.equal(resolveThreeCurrentReachWorldScene(arrived.state).sceneId, "SC-05");
  assert.equal(local.value(THREE_CURRENT_REACH_SAVE_KEY), null);

  const reloaded = createCalibrationMarginNormalEntry(options);
  assert.equal(reloaded.getState().activeGroup, "cm50_route");
  assert.deepEqual(resolveThreeCurrentReachWorldScene(reloaded.getState()), {
    sceneId: "SC-04",
    assetId: threeCurrentReachWorldPlateIds.calibrationMargin,
  });
});
