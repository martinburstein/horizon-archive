import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { deriveFractureNurseryState, MEADOW_PIXEL_HOTSPOTS } from "../src/pixelMeadow.js";
import { FRPX02_COPY } from "../src/sceneTransition.js";
import { calibrationExercise, sanitizeCalibrationMastery } from "../src/calibrationExercise.js";
import { routeMarkerExercise, sanitizeRouteMarkerMastery } from "../src/routeMarkerExercise.js";

const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const styles = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");
const releaseManifest = JSON.parse(readFileSync(new URL("../../Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-001-v1.json", import.meta.url), "utf8"));

test("Fracture Nursery is the exact third non-overlapping Meadow relationship", () => {
  assert.deepEqual(MEADOW_PIXEL_HOTSPOTS.fractureNursery, {
    left: "0%", top: "52%", width: "24%", height: "48%",
    narrow: { left: "0%", top: "52%", width: "24%", height: "48%" },
  });
  const rect = (hotspot) => ({
    left: Number.parseFloat(hotspot.left),
    top: Number.parseFloat(hotspot.top),
    right: Number.parseFloat(hotspot.left) + Number.parseFloat(hotspot.width),
    bottom: Number.parseFloat(hotspot.top) + Number.parseFloat(hotspot.height),
  });
  const nursery = rect(MEADOW_PIXEL_HOTSPOTS.fractureNursery);
  for (const other of [rect(MEADOW_PIXEL_HOTSPOTS.primary), rect(MEADOW_PIXEL_HOTSPOTS.routeMarker)]) {
    assert.equal(Math.max(0, Math.min(nursery.right, other.right) - Math.max(nursery.left, other.left))
      * Math.max(0, Math.min(nursery.bottom, other.bottom) - Math.max(nursery.top, other.top)), 0);
  }
  assert.match(app, /\.\.\.\(scene\.id === "meadow" && fractureNurseryState !== "hidden"[\s\S]*?id: "fracture-nursery"[\s\S]*?MEADOW_PIXEL_HOTSPOTS\.fractureNursery/);
});

test("Nursery view state consumes only sanitized existing evidence and fails closed", () => {
  const route = sanitizeRouteMarkerMastery({
    exerciseId: routeMarkerExercise.exercise_id,
    masteryStatus: "mastered",
  });
  const forgedRoute = sanitizeRouteMarkerMastery({ exerciseId: "forged", masteryStatus: "mastered" });
  assert.equal(deriveFractureNurseryState(forgedRoute, null), "hidden");
  assert.equal(deriveFractureNurseryState(route, null), "available");
  for (const masteryStatus of ["in_progress", "remediation_required"]) {
    const calibration = sanitizeCalibrationMastery({
      exerciseId: calibrationExercise.exercise_id,
      masteryStatus,
    });
    assert.equal(deriveFractureNurseryState(route, calibration), "in_progress");
  }
  const mastered = sanitizeCalibrationMastery({
    exerciseId: calibrationExercise.exercise_id,
    masteryStatus: "mastered",
  });
  assert.equal(deriveFractureNurseryState(route, mastered), "complete");
  assert.match(app, /deriveFractureNurseryState\(\s*sanitizeRouteMarkerMastery\(routeMarkerMastery\),\s*sanitizeCalibrationMastery\(calibrationMastery\)/);
  assert.doesNotMatch(app, /useState\([^\n]*fractureNursery|fractureNurseryState:\s*/);
});

test("pre-Marker Nursery is absent and completed Meadow exposes only its target plus three verbs", () => {
  assert.match(app, /scene\.id === "meadow" && fractureNurseryState !== "hidden" \? \[\{/);
  assert.match(app, /disabled=\{terminalOpen \|\| \(pendingAdvance && !isFractureNursery\)\}/);
  assert.match(app, /disabled=\{pendingAdvance && !\(scene\.id === "meadow" && fractureNurseryState !== "hidden"\)\}/);
  assert.match(app, /data-fracture-nursery-state=\{isFractureNursery \? fractureNurseryState : undefined\}/);
  assert.match(app, /const nurseryStateLabel = isFractureNursery \? FRPX02_COPY\.NURSERY_STATE\[fractureNurseryState\]/);
  assert.match(app, /aria-label=\{`\$\{verb\.toLowerCase\(\)\} \$\{hotspot\.label\}[\s\S]*?nurseryStateLabel/);
});

test("LOOK TALK and sole USE preserve bounded action semantics", () => {
  const handler = app.slice(
    app.indexOf('if (scene.id === "meadow" && hotspotId === "fracture-nursery")'),
    app.indexOf('if (scene.id === "automaton")'),
  );
  assert.match(handler, /verb === "LOOK AT"[\s\S]*?FRPX02_COPY\.LOOK[\s\S]*?"scene"[\s\S]*?return;/);
  assert.match(handler, /verb === "TALK TO"[\s\S]*?FRPX02_COPY\.TALK[\s\S]*?"pilot"[\s\S]*?return;/);
  assert.match(handler, /fractureNurseryState === "complete"[\s\S]*?FRPX02_COPY\.COMPLETE[\s\S]*?"system"[\s\S]*?return;/);
  assert.match(handler, /openCalibration\(\);\s*return;/);
  assert.match(app, /function openCalibration\(\) \{\s*if \(scene\.id !== "meadow" \|\| !\["available", "in_progress"\]\.includes\(fractureNurseryState\)\) return;/);
  assert.doesNotMatch(app, /Optional calibration|Resume optional calibration|calibration-launch/);
});

test("detection mastery return and reload use deterministic nonpersisted focus", () => {
  assert.match(app, /const fractureNurseryRef = useRef\(null\)/);
  assert.match(app, /const fractureNurseryFocusPendingRef = useRef\(false\)/);
  assert.match(app, /fractureNurseryFocusPendingRef\.current = false;\s*fractureNurseryRef\.current\?\.focus/);
  assert.match(app, /function acknowledgeRouteMastery[\s\S]*?fractureNurseryFocusPendingRef\.current = true;[\s\S]*?FRPX02_COPY\.DETECTION[\s\S]*?FRPX02_COPY\.CHAPTER_TURN/);
  assert.match(app, /function acknowledgeCalibrationMastery[\s\S]*?fractureNurseryFocusPendingRef\.current = true;/);
  assert.match(app, /deriveFractureNurseryState\(saved\.routeMarkerMastery, saved\.calibrationMastery\) === "in_progress"/);
  assert.match(app, /if \(returnState === "in_progress"\) fractureNurseryFocusPendingRef\.current = true;\s*else resumeContinueFocusPendingRef\.current = true;/);
});

test("Terminal leaves complete background inert while preserving its own active layer", () => {
  assert.match(app, /className="scene-world-content" inert=\{terminalOpen \|\| demoTourConfirmation \? true : undefined\}/);
  assert.match(app, /className="scene-terminal-layer" inert=\{demoTourConfirmation \? true : undefined\}/);
  assert.match(app, /className="command-panel"[\s\S]*?inert=\{terminalOpen \|\| demoTourConfirmation \? true : undefined\}/);
  assert.match(styles, /\.scene-world-content \{ position: absolute; inset: 0; \}/);
  assert.match(styles, /\.scene-terminal-layer \{ display: contents; \}/);
});

test("Nursery state focus and narrow controls retain non-color meaning and minimum size", () => {
  assert.match(styles, /fracture-nursery[^}]*in_progress[^}]*border-style: dashed/);
  assert.match(styles, /fracture-nursery[^}]*complete[^}]*border-style: double/);
  assert.match(styles, /fracture-nursery"\]:focus-visible \{ outline: 2px solid/);
  assert.match(styles, /forced-colors: active[\s\S]*?fracture-nursery"\]:focus-visible \{ outline: 3px solid Highlight/);
  assert.match(styles, /data-canonical-layout="narrow"[\s\S]*?data-scene="meadow"[\s\S]*?:is\(\.verb, \.dialogue-actions \.continue-action\)[\s\S]*?min-height: 44px/);
  assert.doesNotMatch(styles, /data-meadow-departure-choice="true"\][^}]*> \.verb-grid[\s\S]*?display: none/);
});

test("accepted Meadow plate stays immutable and alt reports visible repair stock without interactivity", () => {
  assert.match(app, /glass-meadow-integrated-terminal-master-v1\.png/);
  assert.match(app, /alt=\{FRPX02_COPY\.MEADOW_ALT\}/);
  assert.match(FRPX02_COPY.MEADOW_ALT, /perfectly flat field[\s\S]*rejected cloudy forms[\s\S]*fused repair stock[\s\S]*first person/);
  assert.doesNotMatch(FRPX02_COPY.MEADOW_ALT, /interactive|awake|responsive|Fracture Nursery/i);
});

test("FRRC-001-v1 freezes one complete reproducible release ladder", () => {
  assert.equal(releaseManifest.schema, "horizon.first-run.release-command-manifest.v1");
  assert.equal(releaseManifest.manifest_id, "FRRC-001-v1");
  for (const id of ["focused", "related", "full", "production-build", "fixture-build", "production-preview", "fixture-preview", "served-identity", "complete-e2e", "pba-media", "cleanup-identity"]) {
    const entry = releaseManifest.entries[id];
    assert.equal(entry.id, id);
    assert.ok(entry.workdir && entry.command.length && entry.timeout_ms > 0);
    assert.equal(entry.expected_exit, 0);
    assert.equal(entry.owner, "combat_engineer");
    assert.ok("prerequisites" in entry && "output_port_ownership" in entry && "cleanup" in entry);
  }
  const validators = releaseManifest.entries.validators.invocations;
  assert.equal(validators.length, 40);
  assert.deepEqual(validators.map((entry) => entry.command[1]), [...validators.map((entry) => entry.command[1])].sort());
  assert.ok(validators.every((entry) => entry.command[0] === "python" && entry.command.at(-1) === "--self-test"));
  assert.deepEqual(releaseManifest.entries["production-preview"].command.slice(-5), ["--host", "127.0.0.1", "--port", "4173", "--strictPort"]);
  assert.match(releaseManifest.entries["fixture-preview"].command.join(" "), /td012-measured-horizon\/vite\.config\.js[\s\S]*127\.0\.0\.1[\s\S]*4184/);
  assert.deepEqual(releaseManifest.entries["complete-e2e"].command, ["node", "playtest/e2e-playthrough.mjs"]);
  assert.equal(releaseManifest.policy.e2e_invocations, 1);
});
