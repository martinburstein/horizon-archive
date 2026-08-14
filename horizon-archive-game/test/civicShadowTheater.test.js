import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import {
  CIVIC_SHADOW_REGISTRY,
  auditCivicShadowRegistry,
  deriveCivicShadowState,
  getCivicShadowHotspots,
} from "../src/condensateSpine.js";

const decoded = { complete: true, naturalWidth: 1920, naturalHeight: 1080 };

test("Host 18 freezes the accepted source and six responsive layouts", () => {
  assert.deepEqual(auditCivicShadowRegistry(), { source: true, layouts: true, copy: true });
  assert.equal(Object.keys(CIVIC_SHADOW_REGISTRY.layouts).length, 6);
});

test("Host 18 fails closed on source, provenance, and layout mutation", () => {
  for (const mutate of [
    (copy) => { copy.source.sha256 = "0".repeat(64); },
    (copy) => { copy.provenance.bytes += 1; },
    (copy) => { copy.layouts.desktop.target.width = 1; },
  ]) {
    const copy = structuredClone(CIVIC_SHADOW_REGISTRY);
    mutate(copy);
    assert.equal(deriveCivicShadowState({ registry: copy, decodedImage: decoded }), "hidden");
  }
});

test("Host 18 requires an exact decoded Full HD source", () => {
  assert.equal(deriveCivicShadowState({ decodedImage: decoded }), "available");
  assert.equal(deriveCivicShadowState({ decodedImage: { ...decoded, naturalWidth: 1919 } }), "hidden");
  assert.equal(deriveCivicShadowState({ decodedImage: null }), "hidden");
});

test("Host 18 maps its service throat and bridge into the locked City boards", () => {
  const hotspots = getCivicShadowHotspots();
  assert.deepEqual(Object.keys(hotspots), ["SC-02-30", "SC-02-40", "SC-02-50"]);
  for (const board of Object.values(hotspots)) for (const rect of Object.values(board)) {
    assert.ok(rect.canonical[2] >= 44 && rect.canonical[3] >= 44);
    assert.ok(rect.narrow[2] >= 44 && rect.narrow[3] >= 44);
  }
});

test("City Threshold selects Host 18 only for anchor and forward boards with legacy fallback", () => {
  const source = fs.readFileSync(path.resolve("src/CityThresholdStaging.jsx"), "utf8");
  assert.match(source, /const useCivicShadow = civicShadowNativeActive && civicShadowHotspots\?\.\[board\]/);
  assert.match(source, /useCivicShadow \? civicShadowHotspots\[board\]/);
  assert.match(source, /: cityThresholdHotspots\[board\]/);
  assert.match(source, /data-civic-shadow-native-active=\{useCivicShadow/);
});
