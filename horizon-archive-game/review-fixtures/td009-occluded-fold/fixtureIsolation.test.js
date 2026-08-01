import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import manifest from "./launch-manifest.json" with { type: "json" };
import { createOccludedFoldScenario, occludedFoldScenarioNames } from "./scenarios.js";

test("TD009 fixture constructs exactly 64 closed storage-free scenarios", () => {
  assert.equal(manifest.fixtureId, "td009-occluded-fold-v1");
  assert.equal(manifest.rootMarker, "TD009_OCCLUDED_FOLD_FIXTURE");
  assert.equal(occludedFoldScenarioNames.length, 64);
  assert.equal(new Set(occludedFoldScenarioNames).size, 64);
  for (const name of occludedFoldScenarioNames) {
    const scenario = createOccludedFoldScenario(name);
    assert.equal(scenario.storage, "frozen-in-memory-only");
    assert.equal(scenario.arbitraryStateAccepted, false);
    assert.equal(scenario.scene.structuralPlaceholder, false);
    assert.equal(scenario.scene.renderingMedium, "css");
    assert.equal(scenario.scene.runtimeImage, "deferred");
    assert.doesNotMatch(JSON.stringify(scenario), /"(?:learner_source|records_json|summary_json|raw_cases?|answers?|credentials?|endpoints?|payloads?|responses?|event_token|focus_history)"/i);
  }
  assert.throws(() => createOccludedFoldScenario("unknown"));
});

test("TD009 fixture separates two harness measurements from the product landmark", () => {
  const source = readFileSync(new URL("./ReviewOccludedFoldFixture.jsx", import.meta.url), "utf8");
  assert.match(source, /scenarioPicker:\s*true,\s*summary:\s*true/);
  assert.match(source, /playerSurface:\s*"metrics"/);
  assert.match(source, /documentContainment:\s*true/);
  assert.equal((source.match(/data-fixture-summary/g) ?? []).length, 1);
  assert.equal((source.match(/fixture-scenario-picker/g) ?? []).length, 2);
});

test("TD009 fixture imports no production module and accepts no browser, URL, file, or network state", () => {
  const source = ["./scenarios.js", "./ReviewOccludedFoldFixture.jsx", "./main.jsx"]
    .map((relative) => readFileSync(new URL(relative, import.meta.url), "utf8")).join("\n");
  assert.doesNotMatch(source, /\.\.\/\.\.\/src\//);
  assert.doesNotMatch(source, /location\.(?:search|hash)|URLSearchParams|localStorage|sessionStorage|indexedDB|document\.cookie|caches\.|serviceWorker|clipboard|showOpenFilePicker|fetch\(|XMLHttpRequest|WebSocket|EventSource|OccludedFoldProtectedJourney/);
  for (const relative of ["../../src/App.jsx", "../../src/OccludedFoldNormal.js", "../../src/OccludedFold.jsx"]) {
    const production = readFileSync(new URL(relative, import.meta.url), "utf8");
    assert.doesNotMatch(production, /TD009_OCCLUDED_FOLD_FIXTURE|td009-occluded-fold-v1|review-fixtures\/td009-occluded-fold|127\.0\.0\.1:4181/);
  }
});
