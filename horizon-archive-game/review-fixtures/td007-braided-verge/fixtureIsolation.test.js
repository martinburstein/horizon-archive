import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import manifest from "./launch-manifest.json" with { type: "json" };
import {
  createBraidedVergeScenario,
  braidedVergeScenarioNames,
} from "./scenarios.js";

test("TD007 fixture constructs exactly every closed allowlisted scenario", () => {
  assert.equal(manifest.fixtureId, "td007-braided-verge-v1");
  assert.equal(manifest.rootMarker, "TD007_BRAIDED_VERGE_FIXTURE");
  assert.equal(manifest.host, "127.0.0.1");
  assert.equal(manifest.port, 4179);
  assert.equal(manifest.storage, "frozen-in-memory-only");
  assert.equal(manifest.acceptsArbitraryState, false);
  assert.equal(braidedVergeScenarioNames.length, 56);
  assert.equal(new Set(braidedVergeScenarioNames).size, 56);
  for (const name of braidedVergeScenarioNames) {
    const scenario = createBraidedVergeScenario(name);
    assert.equal(scenario.name, name);
    assert.equal(scenario.storage, "frozen-in-memory-only");
    assert.equal(scenario.arbitraryStateAccepted, false);
    assert.doesNotMatch(
      JSON.stringify(scenario),
      /learner_source|report_content|raw_case_answers|private_notes?|credentials?|event_token|focus_history|temporary_path|cleanup_diagnostics/i,
    );
  }
  assert.throws(() => createBraidedVergeScenario("unknown"));
});

test("TD007 fixture has two separately measured harness elements and no production seam", () => {
  const component = readFileSync(new URL("./ReviewBraidedVergeFixture.jsx", import.meta.url), "utf8");
  assert.match(component, /scenarioPicker:\s*true,\s*summary:\s*true/);
  assert.match(component, /playerSurface:\s*metrics/);
  assert.match(component, /documentContainment/);
  assert.equal((component.match(/data-fixture-summary/g) ?? []).length, 1);
  assert.equal((component.match(/fixture-scenario-picker/g) ?? []).length, 1);
  for (const relative of [
    "../../src/App.jsx",
    "../../src/CalibrationMarginNormalEntry.js",
    "../../src/BraidedVergeNormal.js",
    "../../src/BraidedVerge.jsx",
  ]) {
    const production = readFileSync(new URL(relative, import.meta.url), "utf8");
    assert.doesNotMatch(
      production,
      /TD007_BRAIDED_VERGE_FIXTURE|td007-braided-verge-v1|review-fixtures\/td007-braided-verge|127\.0\.0\.1:4179/,
    );
  }
});

test("TD007 fixture accepts no URL state, browser storage, network, or protected reference", () => {
  const sources = [
    "./scenarios.js",
    "./ReviewBraidedVergeFixture.jsx",
    "./main.jsx",
  ].map((relative) => readFileSync(new URL(relative, import.meta.url), "utf8")).join("\n");
  assert.doesNotMatch(
    sources,
    /location\.(?:search|hash)|URLSearchParams|localStorage|sessionStorage|indexedDB|document\.cookie|caches\.|serviceWorker|clipboard|showOpenFilePicker|fetch\(|XMLHttpRequest|WebSocket|EventSource/,
  );
  assert.doesNotMatch(sources, /BraidedVergeProtectedJourney|reference_(?:primary|retrieval|transfer)/);
});
