import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const manifestPath = new URL(
  "../review-fixtures/td004-three-current/launch-manifest.json",
  import.meta.url,
);
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));

test("TD004 closed fixture manifest allowlists exactly 34 storage-free scenarios", () => {
  assert.equal(manifest.fixtureId, "td004-three-current-v1");
  assert.equal(manifest.rootMarker, "TD004_THREE_CURRENT_FIXTURE");
  assert.equal(manifest.host, "127.0.0.1");
  assert.equal(manifest.port, 4176);
  assert.equal(manifest.storage, "frozen-in-memory-only");
  assert.equal(manifest.acceptsArbitraryState, false);
  assert.equal(manifest.scenarios.length, 34);
  assert.equal(new Set(manifest.scenarios).size, 34);
  assert.ok(manifest.scenarios.includes("cm50-route-rejected-stale-token"));
  assert.ok(manifest.scenarios.includes("tr30-save-malformed-readback"));
  assert.ok(manifest.scenarios.includes("tour-route-closed"));
});

test("TD004 fixture identity and scenario names are absent from production source imports", () => {
  for (const relative of [
    "../src/App.jsx",
    "../src/CalibrationMarginNormalEntry.js",
    "../src/ThreeCurrentReachNormal.js",
    "../src/ThreeCurrentReach.jsx",
  ]) {
    const source = readFileSync(new URL(relative, import.meta.url), "utf8");
    assert.doesNotMatch(source, /TD004_THREE_CURRENT_FIXTURE|td004-three-current-v1|review-fixtures\/td004-three-current/);
  }
});
