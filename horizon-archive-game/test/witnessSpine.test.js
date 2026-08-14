import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  WITNESS_SPINE_COPY,
  WITNESS_SPINE_PATH,
  WITNESS_SPINE_REGISTRY,
  auditWitnessSpineRegistry,
  deriveWitnessSpineState,
  getWitnessSpineHotspots,
} from "../src/witnessSpine.js";

const decoded = { complete: true, naturalWidth: 1920, naturalHeight: 1080 };

test("Host 16 production source is exact, frozen, and responsive in all six layouts", () => {
  assert.equal(Object.isFrozen(WITNESS_SPINE_REGISTRY), true);
  assert.equal(WITNESS_SPINE_REGISTRY.source.path, WITNESS_SPINE_PATH);
  assert.deepEqual(auditWitnessSpineRegistry(), { source: true, layouts: true, copy: true });
  assert.equal(Object.keys(WITNESS_SPINE_REGISTRY.layouts).length, 6);
  assert.ok(Object.values(WITNESS_SPINE_REGISTRY.layouts).every((entry) => entry.relationRetention >= .95 && entry.essentialCentersVisible && entry.target.contained));
});

test("Host 16 fails closed on scene, source, and decoded identity", () => {
  assert.equal(deriveWitnessSpineState(), "hidden");
  assert.equal(deriveWitnessSpineState({ sceneId: "ruins", decodedImage: decoded }), "hidden");
  assert.equal(deriveWitnessSpineState({ sceneId: "automaton", decodedImage: { complete: true, naturalWidth: 3840, naturalHeight: 2160 } }), "hidden");
  const registry = structuredClone(WITNESS_SPINE_REGISTRY); registry.source.sha256 = "0".repeat(64);
  assert.equal(deriveWitnessSpineState({ sceneId: "automaton", decodedImage: decoded, registry }), "hidden");
});

test("Host 16 preserves existing availability and completion states", () => {
  assert.equal(deriveWitnessSpineState({ sceneId: "automaton", decodedImage: decoded }), "available");
  assert.equal(deriveWitnessSpineState({ sceneId: "automaton", decodedImage: decoded, completed: true }), "complete");
});

test("Host 16 exposes separate source-derived coupling and fallen-assembly targets", () => {
  const hotspots = getWitnessSpineHotspots();
  assert.ok(hotspots);
  assert.match(hotspots.primary.width, /^max\(.+%, 44px\)$/);
  assert.match(hotspots.primary.height, /^max\(.+%, 44px\)$/);
  assert.notDeepEqual(hotspots.primary, hotspots.fallen);
  assert.match(WITNESS_SPINE_COPY.alt, /separate three-aperture coupling/i);
});

test("App swaps only the Witness plate and geometry while retaining its lesson graph fallback", () => {
  const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
  assert.match(app, /host16-environment-master-v1\.png/);
  assert.match(app, /scene\.id === "automaton" && witnessSpineNativeActive\s*\? witnessSpineHotspots/);
  assert.match(app, /scene\.id === "automaton" && witnessSpineNativeActive/);
  assert.match(app, /data-witness-spine-source=\{WITNESS_SPINE_REGISTRY\.source\.path\}/);
  assert.match(app, /scene\.id === "automaton"[\s\S]*setEvidenceSession/);
  assert.match(app, /fallen-automaton/);
  assert.match(app, /witness-corridor-master\.png/);
});
