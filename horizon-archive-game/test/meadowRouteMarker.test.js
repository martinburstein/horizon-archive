import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { deriveMeadowRouteMarkerState, MEADOW_PIXEL_HOTSPOTS } from "../src/pixelMeadow.js";
import { routeMarkerExercise, sanitizeRouteMarkerMastery } from "../src/routeMarkerExercise.js";
import { sanitizeExerciseEvidence, terminalExercise } from "../src/terminalExercise.js";

const appSource = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const componentSource = readFileSync(new URL("../src/MeadowRouteMarker.jsx", import.meta.url), "utf8");
const styleSource = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");

test("App renders the stateful marker over the approved Glass Meadow painting", () => {
  assert.match(appSource, /src=\{glassMeadowImage\}[\s\S]*?<MeadowRouteMarker state=\{meadowRouteMarkerState\} \/>/);
  assert.match(appSource, /deriveMeadowRouteMarkerState\(exerciseEvidence, routeMarkerMastery\)/);
  assert.match(appSource, /data-route-marker-state=\{scene\.id === "meadow" \? meadowRouteMarkerState : undefined\}/);
  assert.match(appSource, /data-route-marker-state=\{isMeadowRouteMarker \? meadowRouteMarkerState : undefined\}/);
  assert.match(componentSource, /drawRouteMarkerPixelLayer\(canvasRef\.current, state\)/);
  assert.match(componentSource, /aria-hidden="true"/);
});

test("App-derived state consumes the existing allowlisted save evidence", () => {
  const completedTerminal = sanitizeExerciseEvidence({
    exerciseId: terminalExercise.exerciseId,
    completed: true,
  });
  const forgedTerminal = sanitizeExerciseEvidence({ exerciseId: "forged", completed: true });
  const masteredRoute = sanitizeRouteMarkerMastery({
    exerciseId: routeMarkerExercise.exercise_id,
    masteryStatus: "mastered",
  });
  const forgedRoute = sanitizeRouteMarkerMastery({ exerciseId: "forged", masteryStatus: "mastered" });

  assert.equal(deriveMeadowRouteMarkerState(forgedTerminal, forgedRoute), "locked");
  assert.equal(deriveMeadowRouteMarkerState(forgedTerminal, masteredRoute), "locked");
  assert.equal(deriveMeadowRouteMarkerState(completedTerminal, forgedRoute), "awake");
  assert.equal(deriveMeadowRouteMarkerState(completedTerminal, masteredRoute), "completed");
  assert.match(appSource, /exerciseEvidence: sanitizeExerciseEvidence\(saved\.exerciseEvidence\)/);
  assert.match(appSource, /const routeMarkerMastery = sanitizeRouteMarkerMastery\(saved\.routeMarkerMastery\)/);
});

test("persistent route label is inset inside its canonical and narrow hotspot", () => {
  const route = MEADOW_PIXEL_HOTSPOTS.routeMarker;
  const rightEdge = Number.parseFloat(route.left) + Number.parseFloat(route.width);
  const narrowRightEdge = Number.parseFloat(route.narrow?.left ?? route.left)
    + Number.parseFloat(route.narrow?.width ?? route.width);
  assert.ok(rightEdge < 100);
  assert.ok(narrowRightEdge < 100);
  assert.match(appSource, /<span>\{verb\} \{hotspot\.label\}\{routeMarkerLabel\}<\/span>/);
  assert.match(styleSource, /\.hotspot\[data-hotspot-id="route-marker"\] span \{[\s\S]*?left: 3px;[\s\S]*?right: 3px;[\s\S]*?transform: none;[\s\S]*?width: auto;[\s\S]*?max-width: none;[\s\S]*?white-space: normal;[\s\S]*?opacity: 1;/);
});
