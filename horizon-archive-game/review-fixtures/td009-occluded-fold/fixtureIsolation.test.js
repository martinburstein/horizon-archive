import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import manifest from "./launch-manifest.json" with { type: "json" };
import { FROZEN_LONGEST_COPY, createOccludedFoldScenario, occludedFoldScenarioNames } from "./scenarios.js";

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
  assert.match(source, /playerSurface:\s*"exact-product-landmark-metrics"/);
  assert.match(source, /documentContainment:\s*true/);
  assert.match(source, /<OccludedFold state=\{scenario\.state\}/);
  assert.match(source, /data-product-landmark=\{scenario\.productLandmark\}/);
  assert.equal((source.match(/data-fixture-summary/g) ?? []).length, 1);
  assert.equal((source.match(/fixture-scenario-picker/g) ?? []).length, 2);
});

test("TD009 fixture imports only the exact product surface contract and accepts no browser, URL, file, or network state", () => {
  const source = ["./scenarios.js", "./ReviewOccludedFoldFixture.jsx", "./main.jsx"]
    .map((relative) => readFileSync(new URL(relative, import.meta.url), "utf8")).join("\n");
  const productionImports = [...source.matchAll(/from\s+["'](\.\.\/\.\.\/src\/[^"']+)["']/g)].map((match) => match[1]);
  assert.deepEqual([...new Set(productionImports)].sort(), ["../../src/OccludedFold.jsx", "../../src/OccludedFoldNormal.js"]);
  assert.doesNotMatch(source, /location\.(?:search|hash)|URLSearchParams|localStorage|sessionStorage|indexedDB|document\.cookie|caches\.|serviceWorker|clipboard|showOpenFilePicker|fetch\(|XMLHttpRequest|WebSocket|EventSource|OccludedFoldProtectedJourney/);
  for (const relative of ["../../src/App.jsx", "../../src/OccludedFoldNormal.js", "../../src/OccludedFold.jsx"]) {
    const production = readFileSync(new URL(relative, import.meta.url), "utf8");
    assert.doesNotMatch(production, /TD009_OCCLUDED_FOLD_FIXTURE|td009-occluded-fold-v1|review-fixtures\/td009-occluded-fold|127\.0\.0\.1:4181/);
  }
});

test("TD009 fixture renders exact product ownership, controls, focus, errors, and statuses", () => {
  const learningScenarios = [
    "python_primary_blank", "python_primary_pass", "python_trace_blank", "python_trace_pass",
    "python_transfer_blank", "python_transfer_pass", "prompt_primary_blank", "prompt_primary_pass",
    "prompt_retrieval_blank", "prompt_retrieval_pass", "prompt_transfer_blank", "prompt_transfer_pass",
    "system_user_explanation_blank", "system_user_explanation_pass",
    "truth_authority_explanation_blank",
  ];
  for (const name of learningScenarios) {
    const scenario = createOccludedFoldScenario(name);
    assert.equal(scenario.surface, "production-occluded-fold");
    assert.equal(scenario.state.owner, "PILOT // COURSE WORK", name);
    assert.ok(scenario.state.headingId.startsWith("of20-"), name);
    assert.ok(scenario.state.statusMessage.length > 30, name);
    assert.ok(scenario.state.focusIntent.target, name);
    assert.ok(scenario.state.availableActions.length >= 3, name);
  }
  assert.equal(createOccludedFoldScenario("truth_authority_explanation_pass").state.owner, "PILOT // EXPEDITION REVIEW");
  for (const name of ["python_primary_miss", "prompt_primary_miss"]) {
    const state = createOccludedFoldScenario(name).state;
    assert.ok(state.failedPublicIds.length > 0, name);
    assert.match(state.statusMessage, /named public dimensions remain incomplete/);
  }
});

test("TD009 fixture exposes all four frozen UTF-8 samples at every frozen layout", () => {
  for (const name of ["layout_desktop", "layout_laptop", "layout_narrow", "layout_effective_200", "longest_copy_contained"]) {
    const scenario = createOccludedFoldScenario(name);
    assert.deepEqual(scenario.frozenLongestCopy, FROZEN_LONGEST_COPY, name);
    for (const value of Object.values(scenario.frozenLongestCopy)) assert.ok(value.length > 70, `${name}: ${value}`);
  }
  assert.match(FROZEN_LONGEST_COPY.retainedRow, /RP-008 — Bounded offset record/);
  assert.match(FROZEN_LONGEST_COPY.truthfulPythonLabel, /does not execute arbitrary Python/);
});

test("TD009 fixture deterministic presentation modes are genuine live review states", () => {
  assert.equal(createOccludedFoldScenario("mode_forced_colors").presentationMode, "forced-colors");
  assert.equal(createOccludedFoldScenario("mode_reduced_motion").presentationMode, "reduced-motion");
  assert.equal(createOccludedFoldScenario("mode_grayscale").presentationMode, "grayscale");
  const css = readFileSync(new URL("./fixture.css", import.meta.url), "utf8");
  assert.match(css, /\.fixture-mode-forced-colors[\s\S]*CanvasText[\s\S]*Highlight/);
  assert.match(css, /\.fixture-mode-reduced-motion[\s\S]*animation:\s*none[\s\S]*scroll-behavior:\s*auto/);
  assert.match(css, /\.fixture-mode-grayscale \.fixture-product\s*\{\s*filter:\s*grayscale\(1\)/);
});
