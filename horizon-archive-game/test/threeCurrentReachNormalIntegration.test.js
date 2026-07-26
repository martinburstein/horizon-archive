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
  threeCurrentReachActions,
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
  assert.equal(local.value(THREE_CURRENT_REACH_SAVE_KEY), null);

  const returned = controller.dispatch(intent(
    controller,
    threeCurrentReachActions.returnCalibration,
    "normal-rp004-return-token",
  ));
  assert.equal(returned.status, "returned_to_calibration_margin_write_free");
  assert.equal(returned.state.activeGroup, "cm50_route");
  assert.equal(controller.getReviewSaveRecord().checkpoint, "calibration_margin_complete");
  assert.equal(local.value(THREE_CURRENT_REACH_SAVE_KEY), null);
});
