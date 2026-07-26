import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  createReviewSaveScenario,
  reviewSaveScenarios,
} from "./scenarios.js";

const sources = [
  "scenarios.js",
  "main.jsx",
  "ReviewSaveFixture.jsx",
].map((file) => readFileSync(new URL(file, import.meta.url), "utf8")).join("\n");
const manifest = JSON.parse(readFileSync(
  new URL("./launch-manifest.json", import.meta.url),
  "utf8",
));
const app = readFileSync(new URL("../../src/App.jsx", import.meta.url), "utf8");
const productionMain = readFileSync(new URL("../../src/main.jsx", import.meta.url), "utf8");

test("RS-EXP-027 all eleven closed public scenarios are private-free and deterministic", () => {
  assert.equal(reviewSaveScenarios.length, 11);
  const expectedGroups = [
    "cm40_review",
    "cm40_review",
    "observations",
    "python_retrieval",
    "ie_retrieval",
    "ie_finalized",
    "cm41_transaction",
    "cm40_provenance_pending",
    "cm50_verified_restore",
    "rp002_verified_restore",
    "city_threshold",
  ];
  reviewSaveScenarios.forEach((name, index) => {
    const scenario = createReviewSaveScenario(name);
    assert.equal(scenario.name, name);
    assert.equal(scenario.state.activeGroup, expectedGroups[index]);
    assert.doesNotMatch(
      JSON.stringify(scenario),
      /privateResponse|rawAnswer|credential|endpoint|payload|eventToken|focusHistory/i,
    );
  });
  assert.throws(() => createReviewSaveScenario("arbitrary-json"));
});

test("RS-EXP-028 manifest has exact owned launch and cleanup contract", () => {
  assert.deepEqual(manifest, {
    fixtureId: "td003-review-save-v1",
    owner: "Intelligence Officer",
    host: "127.0.0.1",
    port: 4175,
    packageCommand: "npm run review:td003-review-save",
    configPath: "review-fixtures/td003-review-save/vite.config.js",
    scenarios: [...reviewSaveScenarios],
    expectedRootMarker: "TD003_REVIEW_SAVE_FIXTURE",
    productionExclusionMarkers: [
      "TD003_REVIEW_SAVE_FIXTURE",
      "td003-review-save",
      "4175",
    ],
    pidCapture: "exact spawned fixture-process PID",
    cleanupCommand: "stop only that captured PID",
  });
});

test("RS-EXP-027-029 fixture has no URL/browser storage/network/arbitrary seam and no production import", () => {
  assert.doesNotMatch(
    sources,
    /localStorage|sessionStorage|indexedDB|document\.cookie|caches\.|serviceWorker|window\.location|URLSearchParams|location\.hash|fetch\(|XMLHttpRequest|WebSocket|navigator\./i,
  );
  assert.doesNotMatch(sources, /JSON\.parse|dangerouslySetInnerHTML|\beval\s*\(/);
  assert.match(sources, /const DEFAULT_SCENARIO = "cm40-five-conjunct-ready"/);
  assert.match(sources, /reviewSaveScenarios\.includes\(name\)/);
  for (const source of [app, productionMain]) {
    assert.doesNotMatch(
      source,
      /review-fixtures|TD003_REVIEW_SAVE_FIXTURE|td003-review-save|4175|cm41-write-failed-last-good/,
    );
  }
});
