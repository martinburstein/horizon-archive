import assert from "node:assert/strict";
import test from "node:test";
import {
  createCalibrationMarginNormalEntry,
  createCalibrationMarginNormalEntryIntent,
} from "../src/CalibrationMarginNormalEntry.js";
import {
  CALIBRATION_MARGIN_REVIEW_SAVE_KEY,
  createCalibrationMarginReviewSaveStorageAdapter,
} from "../src/CalibrationMarginReviewSave.js";
import {
  THREE_CURRENT_REACH_SAVE_KEY,
  createThreeCurrentReachStorageAdapter,
  threeCurrentReachActions,
} from "../src/ThreeCurrentReachNormal.js";
import {
  MANYFOLD_RETURN_SHELL_VERSION,
  createManyfoldReturnStorageAdapter,
  manyfoldReturnActions,
  resolveManyfoldReturnWorldScene,
} from "../src/ManyfoldReturnNormal.js";
import { exactReviewSaveRecord } from "./calibrationMarginReviewSaveFixtures.js";
import { exactThreeCurrentReachSaveRecord } from "./threeCurrentReachSaveFixture.js";

function storage(initial) {
  const values = new Map(Object.entries(initial));
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
    removeItem: (key) => values.delete(key),
    bytes: (key) => values.get(key) ?? null,
  };
}
function intent(controller, action, token) {
  const state = controller.getState();
  return createCalibrationMarginNormalEntryIntent(
    action, "screen_reader", token, state.phase, state.activeGroup,
  );
}

test("TD005 normal integration opens only from exact released TR40 and returns write-free", () => {
  const review = exactReviewSaveRecord();
  const predecessor = exactThreeCurrentReachSaveRecord();
  const local = storage({
    [CALIBRATION_MARGIN_REVIEW_SAVE_KEY]: JSON.stringify(review),
    [THREE_CURRENT_REACH_SAVE_KEY]: JSON.stringify(predecessor),
  });
  const readThreeCurrentBytes = () => local.bytes(THREE_CURRENT_REACH_SAVE_KEY);
  const controller = createCalibrationMarginNormalEntry({
    restoredReviewSave: review,
    reviewSaveAdapter: createCalibrationMarginReviewSaveStorageAdapter(local),
    restoredThreeCurrentReach: predecessor,
    threeCurrentReachAdapter: createThreeCurrentReachStorageAdapter(local),
    readThreeCurrentBytes,
    manyfoldReturnAdapter: createManyfoldReturnStorageAdapter(local, {
      record: predecessor,
      bytes: readThreeCurrentBytes(),
    }),
  });
  assert.equal(controller.getState().activeGroup, "tr40_restore");
  assert.ok(controller.getState().availableActions.includes(threeCurrentReachActions.manyfoldReturn));
  const route = intent(controller, manyfoldReturnActions.route, "td005-route-token");
  assert.equal(controller.dispatch({ ...route, expectedOwner: "PILOT // EXPEDITION OBSERVATION" }).status, "rejected");
  const arrived = controller.dispatch(route);
  assert.equal(arrived.status, "manyfold_arrived_zero_evidence");
  assert.equal(arrived.state.shellVersion, MANYFOLD_RETURN_SHELL_VERSION);
  assert.equal(arrived.state.activeGroup, "mf00_arrive");
  assert.equal(resolveManyfoldReturnWorldScene(arrived.state).role, "SC-06-PANORAMA-MASTER");
  const returned = controller.dispatch(intent(
    controller,
    manyfoldReturnActions.returnThreeCurrent,
    "td005-return-token",
  ));
  assert.equal(returned.status, "returned_to_three_current_reach_write_free");
  assert.equal(returned.state.activeGroup, "tr40_restore");
  assert.equal(local.bytes(THREE_CURRENT_REACH_SAVE_KEY), JSON.stringify(predecessor));
});
