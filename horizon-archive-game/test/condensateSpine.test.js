import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  CONDENSATE_SPINE_COPY,
  CONDENSATE_SPINE_PATH,
  CONDENSATE_SPINE_REGISTRY,
  auditCondensateSpineRegistry,
  deriveCondensateSpineState,
  getCondensateSpineHotspots,
} from "../src/condensateSpine.js";

const decoded = { complete: true, naturalWidth: 1920, naturalHeight: 1080 };

test("Host 17 production source is exact, frozen, and responsive in all six layouts", () => {
  assert.equal(Object.isFrozen(CONDENSATE_SPINE_REGISTRY), true);
  assert.equal(CONDENSATE_SPINE_REGISTRY.source.path, CONDENSATE_SPINE_PATH);
  assert.deepEqual(auditCondensateSpineRegistry(), { source: true, layouts: true, copy: true });
  assert.equal(Object.keys(CONDENSATE_SPINE_REGISTRY.layouts).length, 6);
  assert.ok(Object.values(CONDENSATE_SPINE_REGISTRY.layouts).every((entry) => entry.relationRetention >= .95 && entry.essentialCentersVisible && entry.target.contained));
});

test("Host 17 fails closed on source and decoded identity", () => {
  assert.equal(deriveCondensateSpineState(), "hidden");
  assert.equal(deriveCondensateSpineState({ decodedImage: { complete: true, naturalWidth: 3840, naturalHeight: 2160 } }), "hidden");
  const registry = structuredClone(CONDENSATE_SPINE_REGISTRY); registry.source.bytes += 1;
  assert.equal(deriveCondensateSpineState({ registry, decodedImage: decoded }), "hidden");
});

test("Host 17 preserves existing threshold and completion states", () => {
  assert.equal(deriveCondensateSpineState({ decodedImage: decoded }), "available");
  assert.equal(deriveCondensateSpineState({ checkpoint: "anchor_complete", decodedImage: decoded }), "complete");
});

test("Host 17 maps source-derived coupling, cycles, and route to canonical and narrow boards", () => {
  const hotspots = getCondensateSpineHotspots();
  assert.ok(hotspots);
  assert.deepEqual(Object.keys(hotspots), ["SC-02-00", "SC-02-30", "SC-02-40", "SC-02-50"]);
  for (const board of Object.values(hotspots)) for (const rect of Object.values(board)) {
    assert.ok(rect.canonical[2] >= 44 && rect.canonical[3] >= 44);
    assert.ok(rect.narrow[2] >= 44 && rect.narrow[3] >= 44);
  }
  assert.match(CONDENSATE_SPINE_COPY.alt, /already-lit alien civic bridge/i);
});

test("City Threshold binds Host 17 only to overview boards and retains legacy plates as fallback", () => {
  const component = readFileSync(new URL("../src/CityThresholdStaging.jsx", import.meta.url), "utf8");
  assert.match(component, /host17-environment-master-v1\.png/);
  assert.match(component, /boardLayer === "overview" && condensateSpineNativeActive/);
  assert.match(component, /condensateSpineHotspots\?\.\[board\] \? condensateSpineHotspots\[board\] : cityThresholdHotspots\[board\]/);
  assert.match(component, /data-condensate-spine-source=\{boardLayer === "overview" && condensateSpineNativeActive \? CONDENSATE_SPINE_REGISTRY\.source\.path : undefined\}/);
  assert.match(component, /city-threshold-overview-master\.png/);
  assert.match(component, /city-threshold-boundary-master\.png/);
  assert.match(component, /city-threshold-access-master\.png/);
});
