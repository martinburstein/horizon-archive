import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { deriveMeadowRouteMarkerState, MEADOW_PIXEL_HOTSPOTS } from "../src/pixelMeadow.js";
import { routeMarkerExercise, sanitizeRouteMarkerMastery } from "../src/routeMarkerExercise.js";
import { sanitizeExerciseEvidence, terminalExercise } from "../src/terminalExercise.js";

const appSource = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const styleSource = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");

test("integrated route marker keeps state in labels and logic, not a canvas overlay", () => {
  assert.match(appSource, /deriveMeadowRouteMarkerState\(exerciseEvidence, routeMarkerMastery\)/);
  assert.match(appSource, /data-route-marker-state=\{scene\.id === "meadow" \? meadowRouteMarkerState : undefined\}/);
  assert.match(appSource, /data-route-marker-state=\{isMeadowRouteMarker \? meadowRouteMarkerState : undefined\}/);
  assert.doesNotMatch(appSource, /import \{ MeadowRouteMarker \}|<MeadowRouteMarker|drawRouteMarkerPixelLayer|<canvas/);
});

test("App-derived state consumes the existing allowlisted save evidence", () => {
  const completedTerminal = sanitizeExerciseEvidence({ exerciseId: terminalExercise.exerciseId, completed: true });
  const forgedTerminal = sanitizeExerciseEvidence({ exerciseId: "forged", completed: true });
  const masteredRoute = sanitizeRouteMarkerMastery({ exerciseId: routeMarkerExercise.exercise_id, masteryStatus: "mastered" });
  const forgedRoute = sanitizeRouteMarkerMastery({ exerciseId: "forged", masteryStatus: "mastered" });
  assert.equal(deriveMeadowRouteMarkerState(forgedTerminal, forgedRoute), "locked");
  assert.equal(deriveMeadowRouteMarkerState(forgedTerminal, masteredRoute), "locked");
  assert.equal(deriveMeadowRouteMarkerState(completedTerminal, forgedRoute), "awake");
  assert.equal(deriveMeadowRouteMarkerState(completedTerminal, masteredRoute), "completed");
});

test("persistent route label remains inset inside its unchanged hotspot", () => {
  const route = MEADOW_PIXEL_HOTSPOTS.routeMarker;
  assert.ok(Number.parseFloat(route.left) + Number.parseFloat(route.width) < 100);
  assert.match(appSource, /<span>\{verb\} \{hotspot\.label\}\{routeMarkerLabel\}\{nurseryLabel\}<\/span>/);
  assert.match(styleSource, /\.hotspot:is\(\[data-hotspot-id="route-marker"\], \[data-hotspot-id="fracture-nursery"\]\) span \{[\s\S]*?left: 3px;[\s\S]*?right: 3px;[\s\S]*?transform: none;[\s\S]*?width: auto;[\s\S]*?max-width: none;[\s\S]*?white-space: normal;[\s\S]*?opacity: 1;/);
});
