import test from "node:test";
import assert from "node:assert/strict";
import {
  buildMeadowPixelPlan,
  buildRouteMarkerPixelPlan,
  configurePixelContext,
  deriveMeadowRouteMarkerState,
  drawRouteMarkerPixelLayer,
  getIntegerPixelStage,
  MEADOW_LOGICAL_SIZE,
  MEADOW_PIXEL_HOTSPOTS,
} from "../src/pixelMeadow.js";

const percentage = (value) => Number.parseFloat(value) / 100;
const alphaOf = (color) => Number(color.match(/^rgba\([^,]+,[^,]+,[^,]+,\s*([\d.]+)\)$/)?.[1]);

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

test("route marker layer has bounded and visibly distinct locked awake and completed profiles", () => {
  const states = Object.fromEntries(["locked", "awake", "completed"].map((state) => [state, buildRouteMarkerPixelPlan(state)]));
  for (const plan of Object.values(states)) {
    for (const command of plan) {
      assert.ok(command.x >= 0 && command.y >= 0 && command.width > 0 && command.height > 0);
      assert.ok(command.x + command.width <= MEADOW_LOGICAL_SIZE.width);
      assert.ok(command.y + command.height <= MEADOW_LOGICAL_SIZE.height);
    }
  }
  const top = (plan) => Math.min(...plan.map(({ y }) => y));
  assert.ok(top(states.locked) > top(states.awake), "awakening must raise the marker silhouette");
  assert.ok(top(states.completed) < top(states.awake), "completion must add an earned crown");
  assert.ok(states.locked.every(({ tag }) => !tag.startsWith("route-fin-")));
  assert.ok(states.awake.some(({ tag }) => tag === "route-fin-center"));
  assert.ok(states.completed.some(({ tag }) => tag === "route-complete-crown"));
  const bounds = (plan) => ({
    left: Math.min(...plan.map(({ x }) => x)),
    top: Math.min(...plan.map(({ y }) => y)),
    right: Math.max(...plan.map(({ x, width }) => x + width)),
    bottom: Math.max(...plan.map(({ y, height }) => y + height)),
  });
  assert.deepEqual(bounds(states.locked), { left: 247, top: 119, right: 281, bottom: 150 });
  assert.deepEqual(bounds(states.awake), { left: 247, top: 85, right: 281, bottom: 150 });
  assert.deepEqual(bounds(states.completed), { left: 247, top: 73, right: 283, bottom: 150 });
});

test("route marker material is translucent Builder glass with restrained reflections and mat contact", () => {
  for (const state of ["locked", "awake", "completed"]) {
    const plan = buildRouteMarkerPixelPlan(state);
    assert.ok(plan.every(({ color }) => Number.isFinite(alphaOf(color)) && alphaOf(color) > 0 && alphaOf(color) < 1));
    const body = plan.find(({ tag }) => tag === (state === "locked" ? "route-locked-body" : "route-body"));
    assert.ok(alphaOf(body.color) <= 0.4, `${state} body must let the Meadow show through`);
    assert.deepEqual([...new Set(plan
      .filter(({ tag }) => tag.startsWith("route-reflection-"))
      .map(({ tag }) => tag))], [
      "route-reflection-edge-left",
      "route-reflection-center",
      "route-reflection-edge-right",
    ]);
    assert.deepEqual(plan.find(({ tag }) => tag === "route-warm-floor-pickup"), {
      x: 250, y: 144, width: 28, height: 2,
      color: "rgba(222, 159, 88, 0.62)", tag: "route-warm-floor-pickup",
    });
    assert.deepEqual(plan.find(({ tag }) => tag === "route-flush-mat-contact"), {
      x: 247, y: 148, width: 34, height: 2,
      color: "rgba(75, 49, 31, 0.72)", tag: "route-flush-mat-contact",
    });
  }
});

test("transparent route layer renderer clears once and preserves authored alpha colors", () => {
  const fills = [];
  const clears = [];
  const context = {
    imageSmoothingEnabled: true,
    fillStyle: "",
    clearRect: (...args) => clears.push(args),
    fillRect(...args) { fills.push({ args, color: this.fillStyle }); },
  };
  drawRouteMarkerPixelLayer({ getContext: () => context }, "awake");
  assert.deepEqual(clears, [[0, 0, 320, 180]]);
  assert.equal(context.imageSmoothingEnabled, false);
  assert.deepEqual(fills, buildRouteMarkerPixelPlan("awake").map(({ x, y, width, height, color }) => ({
    args: [x, y, width, height], color,
  })));
  assert.ok(fills.every(({ color }) => alphaOf(color) < 1));
});

test("route marker world state follows only exact completion evidence", () => {
  assert.equal(deriveMeadowRouteMarkerState(null, null), "locked");
  assert.equal(deriveMeadowRouteMarkerState({ completed: false }, { masteryStatus: "in_progress" }), "locked");
  assert.equal(deriveMeadowRouteMarkerState(null, { masteryStatus: "mastered" }), "locked");
  assert.equal(deriveMeadowRouteMarkerState({ completed: true }, { masteryStatus: "in_progress" }), "awake");
  assert.equal(deriveMeadowRouteMarkerState({ completed: true }, { masteryStatus: "remediation_required" }), "awake");
  assert.equal(deriveMeadowRouteMarkerState({ completed: true }, { masteryStatus: "mastered" }), "completed");
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

test("selected 640x360 meadow targets align to the production coupler and route marker", () => {
  assert.deepEqual(MEADOW_PIXEL_HOTSPOTS.primary, {
    left: "25%", top: "11.1111%", width: "50%", height: "88.8889%",
  });
  assert.deepEqual(MEADOW_PIXEL_HOTSPOTS.routeMarker, {
    left: "77.0313%", top: "53.3333%", width: "21.5625%", height: "46.3889%",
  });
});

test("first Terminal hotspot tracks the production coupler at both canonical sizes", () => {
  const primary = MEADOW_PIXEL_HOTSPOTS.primary;
  const route = MEADOW_PIXEL_HOTSPOTS.routeMarker;
  const boxAt = (width, height, hotspot) => ({
    left: percentage(hotspot.left) * width,
    top: percentage(hotspot.top) * height,
    width: percentage(hotspot.width) * width,
    height: percentage(hotspot.height) * height,
  });
  const canonical = boxAt(640, 360, primary);
  const narrow = boxAt(320, 180, primary);
  assert.equal(canonical.left, 160);
  assert.ok(Math.abs(canonical.top - 40) < 0.001);
  assert.equal(canonical.width, 320);
  assert.ok(Math.abs(canonical.height - 320) < 0.001);
  assert.equal(narrow.left, 80);
  assert.ok(Math.abs(narrow.top - 20) < 0.001);
  assert.equal(narrow.width, 160);
  assert.ok(Math.abs(narrow.height - 160) < 0.001);
  assert.ok(narrow.width >= 44 && narrow.height >= 44);
  assert.equal(canonical.left, narrow.left * 2);
  assert.equal(canonical.width, narrow.width * 2);
  assert.ok(canonical.left + canonical.width < percentage(route.left) * 640);
});
