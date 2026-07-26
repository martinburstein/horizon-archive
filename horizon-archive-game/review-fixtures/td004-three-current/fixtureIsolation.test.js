import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  createThreeCurrentScenario,
  threeCurrentScenarioNames,
} from "./scenarios.js";

test("TD004 fixture constructs every exact allowlisted scenario without arbitrary input", () => {
  assert.equal(threeCurrentScenarioNames.length, 34);
  for (const name of threeCurrentScenarioNames) {
    const scenario = createThreeCurrentScenario(name);
    assert.equal(scenario.name, name);
    assert.equal(scenario.storage, "frozen-in-memory-only");
    assert.equal(scenario.arbitraryStateAccepted, false);
    assert.equal(scenario.state.packetId, "RP-004");
    assert.doesNotMatch(
      JSON.stringify(scenario),
      /learner_source|raw_case_answers|private_notes?|credentials?|event_token|focus_history/i,
    );
  }
  assert.throws(() => createThreeCurrentScenario("unknown"));
});

test("TD004 fixture has no browser storage, URL state, network, or production import seam", () => {
  const source = readFileSync(new URL("./scenarios.js", import.meta.url), "utf8");
  assert.doesNotMatch(
    source,
    /localStorage|sessionStorage|indexedDB|document\.cookie|location\.(?:search|hash)|fetch\(|XMLHttpRequest|WebSocket|EventSource/,
  );
  for (const relative of [
    "../../src/App.jsx",
    "../../src/CalibrationMarginNormalEntry.js",
    "../../src/ThreeCurrentReachNormal.js",
  ]) {
    const production = readFileSync(new URL(relative, import.meta.url), "utf8");
    assert.doesNotMatch(
      production,
      /TD004_THREE_CURRENT_FIXTURE|td004-three-current-v1|review-fixtures\/td004-three-current/,
    );
  }
});
