import test from "node:test";
import assert from "node:assert/strict";
import {
  buildMeadowPixelPlan,
  configurePixelContext,
  getIntegerPixelStage,
  MEADOW_LOGICAL_SIZE,
  MEADOW_PIXEL_HOTSPOTS,
} from "../src/pixelMeadow.js";

const percentage = (value) => Number.parseFloat(value) / 100;

test("meadow production art is authored on a bounded 320x180 integer grid", () => {
  assert.deepEqual(MEADOW_LOGICAL_SIZE, { width: 320, height: 180 });
  const plan = buildMeadowPixelPlan();
  assert.ok(plan.length > 100);
  for (const command of plan) {
    for (const value of [command.x, command.y, command.width, command.height]) assert.equal(Number.isInteger(value), true);
    assert.ok(command.x >= 0 && command.y >= 0 && command.width > 0 && command.height > 0);
    assert.ok(command.x + command.width <= 320 && command.y + command.height <= 180, JSON.stringify(command));
  }
});

test("pixel renderer explicitly disables interpolation", () => {
  const context = { imageSmoothingEnabled: true };
  assert.equal(configurePixelContext(context), context);
  assert.equal(context.imageSmoothingEnabled, false);
});

test("locked awake and completed states change silhouette geometry, not color alone", () => {
  const locked = buildMeadowPixelPlan({ petalState: "locked", routeState: "locked" });
  const awake = buildMeadowPixelPlan({ petalState: "awake", routeState: "awake" });
  const completed = buildMeadowPixelPlan({ petalState: "completed", routeState: "completed" });
  assert.ok(locked.some(({ tag }) => tag === "petal-locked-cross"));
  assert.ok(locked.some(({ tag }) => tag === "route-locked-groove"));
  assert.ok(awake.some(({ tag }) => tag === "petal-awake-ring"));
  assert.ok(awake.some(({ tag }) => tag === "route-awake-groove"));
  assert.ok(completed.some(({ tag }) => tag === "petal-complete-step-c"));
  assert.ok(completed.some(({ tag }) => tag === "route-complete-step-b"));
  assert.notDeepEqual(locked.map(({ x, y, width, height, tag }) => [x, y, width, height, tag]), completed.map(({ x, y, width, height, tag }) => [x, y, width, height, tag]));
});

test("integer stages letterbox and keep both meadow targets usable", () => {
  for (const [frameWidth, frameHeight, expectedScale] of [[1600, 666, 3], [320, 180, 1]]) {
    const stage = getIntegerPixelStage(frameWidth, frameHeight);
    assert.equal(stage.scale, expectedScale);
    assert.equal(stage.width % 320, 0);
    assert.equal(stage.height % 180, 0);
    const petal = MEADOW_PIXEL_HOTSPOTS.primary;
    const route = MEADOW_PIXEL_HOTSPOTS.routeMarker;
    const petalBox = {
      left: percentage(petal.left) * stage.width,
      width: percentage(petal.width) * stage.width,
      height: percentage(petal.height) * stage.height,
    };
    const routeBox = {
      left: percentage(route.left) * stage.width,
      width: percentage(route.width) * stage.width,
      height: percentage(route.height) * stage.height,
    };
    assert.ok(petalBox.width >= 44 && petalBox.height >= 44);
    assert.ok(routeBox.width >= 44 && routeBox.height >= 44);
    assert.ok(petalBox.left + petalBox.width < routeBox.left);
  }
});
