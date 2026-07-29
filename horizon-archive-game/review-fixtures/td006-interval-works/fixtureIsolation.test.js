import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  createIntervalWorksScenario,
  intervalWorksScenarioNames,
} from "./scenarios.js";

test("TD006 fixture constructs every closed allowlisted scenario", () => {
  assert.equal(intervalWorksScenarioNames.length, 36);
  for (const name of intervalWorksScenarioNames) {
    const scenario = createIntervalWorksScenario(name);
    assert.equal(scenario.name, name);
    assert.equal(scenario.storage, "frozen-in-memory-only");
    assert.equal(scenario.arbitraryStateAccepted, false);
    assert.doesNotMatch(
      JSON.stringify(scenario),
      /learner_source|raw_case_answers|private_notes?|credentials?|event_token|focus_history/i,
    );
  }
  assert.throws(() => createIntervalWorksScenario("unknown"));
});

test("TD006 fixture has no browser storage, URL state, network, or production seam", () => {
  const source = readFileSync(new URL("./scenarios.js", import.meta.url), "utf8");
  assert.doesNotMatch(
    source,
    /localStorage|sessionStorage|indexedDB|document\.cookie|location\.(?:search|hash)|fetch\(|XMLHttpRequest|WebSocket|EventSource/,
  );
  for (const relative of [
    "../../src/App.jsx",
    "../../src/CalibrationMarginNormalEntry.js",
    "../../src/IntervalWorksNormal.js",
  ]) {
    const production = readFileSync(new URL(relative, import.meta.url), "utf8");
    assert.doesNotMatch(
      production,
      /TD006_INTERVAL_WORKS_FIXTURE|td006-interval-works-v1|review-fixtures\/td006-interval-works/,
    );
  }
});
