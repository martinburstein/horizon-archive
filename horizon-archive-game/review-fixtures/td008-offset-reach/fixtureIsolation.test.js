import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import manifest from "./launch-manifest.json" with { type: "json" };
import { createOffsetReachScenario, offsetReachScenarioNames } from "./scenarios.js";

test("TD008 fixture constructs exactly 64 closed storage-free scenarios", () => {
  assert.equal(manifest.fixtureId, "td008-offset-reach-v1");
  assert.equal(manifest.rootMarker, "TD008_OFFSET_REACH_FIXTURE");
  assert.equal(offsetReachScenarioNames.length, 64);
  assert.equal(new Set(offsetReachScenarioNames).size, 64);
  for (const name of offsetReachScenarioNames) {
    const scenario = createOffsetReachScenario(name);
    assert.equal(scenario.storage, "frozen-in-memory-only");
    assert.equal(scenario.arbitraryStateAccepted, false);
    assert.doesNotMatch(JSON.stringify(scenario), /"(?:learner_source|records_json|summary_json|raw_cases?|answers?|credentials?|endpoints?|payloads?|responses?|event_token|focus_history)"/i);
  }
  assert.throws(() => createOffsetReachScenario("unknown"));
});

test("TD008 fixture separates two harness measurements from the product landmark", () => {
  const source = readFileSync(new URL("./ReviewOffsetReachFixture.jsx", import.meta.url), "utf8");
  assert.match(source, /scenarioPicker:\s*true,\s*summary:\s*true/);
  assert.match(source, /playerSurface:\s*"metrics"/);
  assert.match(source, /documentContainment:\s*true/);
  assert.equal((source.match(/data-fixture-summary/g) ?? []).length, 1);
  assert.equal((source.match(/fixture-scenario-picker/g) ?? []).length, 2);
});

test("TD008 fixture imports no production module and accepts no browser, URL, file, or network state", () => {
  const source = ["./scenarios.js", "./ReviewOffsetReachFixture.jsx", "./main.jsx"]
    .map((relative) => readFileSync(new URL(relative, import.meta.url), "utf8")).join("\n");
  assert.doesNotMatch(source, /\.\.\/\.\.\/src\//);
  assert.doesNotMatch(source, /location\.(?:search|hash)|URLSearchParams|localStorage|sessionStorage|indexedDB|document\.cookie|caches\.|serviceWorker|clipboard|showOpenFilePicker|fetch\(|XMLHttpRequest|WebSocket|EventSource|OffsetReachProtectedJourney/);
  for (const relative of ["../../src/App.jsx", "../../src/OffsetReachNormal.js", "../../src/OffsetReach.jsx"]) {
    const production = readFileSync(new URL(relative, import.meta.url), "utf8");
    assert.doesNotMatch(production, /TD008_OFFSET_REACH_FIXTURE|td008-offset-reach-v1|review-fixtures\/td008-offset-reach|127\.0\.0\.1:4180/);
  }
});
