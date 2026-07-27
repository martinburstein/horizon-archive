import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  createManyfoldReturnScenario,
  manyfoldReturnScenarioNames,
} from "./scenarios.js";

test("TD005 fixture constructs all forty-four closed scenarios", () => {
  assert.equal(manyfoldReturnScenarioNames.length, 44);
  for (const name of manyfoldReturnScenarioNames) {
    const scenario = createManyfoldReturnScenario(name);
    assert.equal(scenario.name, name);
    assert.equal(scenario.storage, "frozen-in-memory-only");
    assert.equal(scenario.arbitraryStateAccepted, false);
    assert.doesNotMatch(
      JSON.stringify(scenario),
      /learner_source|raw_case_answers|private_notes?|credentials?|event_token|focus_history/i,
    );
  }
  assert.throws(() => createManyfoldReturnScenario("unknown"));
});

test("TD005 fixture has no browser storage, arbitrary URL state, network, or production seam", () => {
  const source = readFileSync(new URL("./scenarios.js", import.meta.url), "utf8");
  assert.doesNotMatch(
    source,
    /localStorage|sessionStorage|indexedDB|document\.cookie|location\.(?:search|hash)|fetch\(|XMLHttpRequest|WebSocket|EventSource/,
  );
  for (const relative of [
    "../../src/App.jsx",
    "../../src/CalibrationMarginNormalEntry.js",
    "../../src/ManyfoldReturnNormal.js",
  ]) {
    const production = readFileSync(new URL(relative, import.meta.url), "utf8");
    assert.doesNotMatch(
      production,
      /TD005_MANYFOLD_RETURN_FIXTURE|td005-manyfold-return-v1|review-fixtures\/td005-manyfold-return/,
    );
  }
});
