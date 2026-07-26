import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  createExtractionReviewScenario,
  extractionReviewScenarios,
} from "./scenarios.js";

const scenarioSource = readFileSync(new URL("./scenarios.js", import.meta.url), "utf8");
const hostSource = readFileSync(new URL("./main.jsx", import.meta.url), "utf8");
const viewSource = readFileSync(
  new URL("./ReviewExtractionFixture.jsx", import.meta.url),
  "utf8",
);
const appSource = readFileSync(new URL("../../src/App.jsx", import.meta.url), "utf8");
const productionMain = readFileSync(new URL("../../src/main.jsx", import.meta.url), "utf8");

test("IE-EXP-030 closed fixture allowlist constructs every required public state", () => {
  assert.deepEqual(extractionReviewScenarios, [
    "blank-primary",
    "primary-repair-input-boundary",
    "primary-repair-output-contract",
    "primary-repair-unsupported-rule",
    "interlude",
    "blank-retrieval",
    "blank-transfer",
    "explanation-only-repair",
    "finalized-p3",
  ]);
  const expectedGroups = [
    "ie_primary",
    "ie_primary_repair",
    "ie_primary_repair",
    "ie_primary_repair",
    "ie_interlude",
    "ie_retrieval",
    "ie_transfer",
    "ie_transfer_repair",
    "ie_finalized",
  ];
  extractionReviewScenarios.forEach((name, index) => {
    const state = createExtractionReviewScenario(name);
    assert.equal(state.activeGroup, expectedGroups[index]);
    assert.equal(state.privateWorkCleared, true);
    assert.doesNotMatch(
      JSON.stringify(state),
      /"privateResponse"|"credential"|"endpoint"|"payload"|"response"|"eventToken"|"focusHistory"/i,
    );
  });
  assert.throws(() => createExtractionReviewScenario("arbitrary-json"));
});

test("IE-EXP-030/031 fixture has no storage, URL, campaign or arbitrary injection seam", () => {
  const fixtureSource = `${scenarioSource}\n${hostSource}\n${viewSource}`;
  assert.doesNotMatch(
    fixtureSource,
    /localStorage|sessionStorage|indexedDB|document\.cookie|caches\.|serviceWorker|window\.location|URLSearchParams|location\.hash|SAVE_KEY|campaign save/i,
  );
  assert.doesNotMatch(fixtureSource, /JSON\.parse|dangerouslySetInnerHTML|\beval\s*\(/);
  assert.match(hostSource, /const DEFAULT_SCENARIO = "blank-primary"/);
  assert.match(scenarioSource, /extractionReviewScenarios\.includes\(name\)/);
});

test("IE-EXP-030 production source has no fixture import, route, marker or scenario ID", () => {
  for (const source of [appSource, productionMain]) {
    assert.doesNotMatch(
      source,
      /review-fixtures|TD002_EXTRACTION_REVIEW_FIXTURE|blank-primary|finalized-p3/,
    );
  }
  assert.doesNotMatch(appSource, /query.*scenario|debug.*extraction|fixture.*route/i);
});
