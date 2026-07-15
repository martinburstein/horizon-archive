import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { deriveMeadowRouteMarkerState, MEADOW_PIXEL_HOTSPOTS } from "../src/pixelMeadow.js";

const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const styles = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");

test("integrated Meadow retains the exact interaction geometry", () => {
  assert.deepEqual(MEADOW_PIXEL_HOTSPOTS.primary, {
    left: "25%", top: "11.1111%", width: "50%", height: "88.8889%",
  });
  assert.deepEqual(MEADOW_PIXEL_HOTSPOTS.routeMarker, {
    left: "77.0313%", top: "53.3333%", width: "21.5625%", height: "46.3889%",
  });
});

test("route marker labels still derive only from exact completion evidence", () => {
  assert.equal(deriveMeadowRouteMarkerState(null, null), "locked");
  assert.equal(deriveMeadowRouteMarkerState({ completed: false }, { masteryStatus: "mastered" }), "locked");
  assert.equal(deriveMeadowRouteMarkerState({ completed: true }, { masteryStatus: "in_progress" }), "awake");
  assert.equal(deriveMeadowRouteMarkerState({ completed: true }, { masteryStatus: "mastered" }), "completed");
});

test("active Meadow rendering is one integrated photorealistic plate", () => {
  assert.match(app, /2026-07-15-glass-meadow-integrated-terminal\/glass-meadow-integrated-terminal-master-v1\.png/);
  assert.doesNotMatch(app, /Pixelated Draft|signal-coupler|import \{ MeadowRouteMarker \}|<MeadowRouteMarker|<canvas/);
  assert.doesNotMatch(styles, /signal-coupler-overlay|meadow-route-marker-layer|pixel-scene-canvas/);
  assert.match(styles, /\.canonical-game-frame \.scene-art\.glass-meadow-art \{[^}]*object-fit: cover;[^}]*image-rendering: auto;/s);
});
