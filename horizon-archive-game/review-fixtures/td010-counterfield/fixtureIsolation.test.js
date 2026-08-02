import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import manifest from "./launch-manifest.json" with { type: "json" };
import { FROZEN_LONGEST_COPY, createCounterfieldScenario, counterfieldScenarioNames } from "./scenarios.js";

test("TD010 fixture constructs exactly 66 closed storage-free scenarios", () => {
  assert.equal(manifest.fixtureId, "td010-counterfield-v1");
  assert.equal(counterfieldScenarioNames.length, 66); assert.equal(new Set(counterfieldScenarioNames).size, 66);
  for (const name of counterfieldScenarioNames) { const scenario = createCounterfieldScenario(name); assert.equal(scenario.storage, "frozen-in-memory-only"); assert.equal(scenario.arbitraryStateAccepted, false); assert.equal(scenario.scene.structuralPlaceholder, false); assert.equal(scenario.scene.renderingMedium, "css"); assert.equal(scenario.scene.runtimeImage, "not-selected"); assert.equal(scenario.scene.assetRoleDisposition, "retired-no-runtime-image"); assert.doesNotMatch(JSON.stringify(scenario), /"(?:learner_source|request_record|response_record|exchange_summary|credentials|endpoints|payloads|responses|event_token|focus_history)"/i); }
  assert.throws(() => createCounterfieldScenario("unknown"));
});

test("TD010 fixture imports only the production surface contract and accepts no external state", () => {
  const source = ["./scenarios.js", "./ReviewCounterfieldFixture.jsx", "./main.jsx"].map((path) => readFileSync(new URL(path, import.meta.url), "utf8")).join("\n");
  const productionImports = [...source.matchAll(/from\s+["'](\.\.\/\.\.\/src\/[^"']+)["']/g)].map((match) => match[1]);
  assert.deepEqual([...new Set(productionImports)].sort(), ["../../src/Counterfield.jsx", "../../src/CounterfieldNormal.js"]);
  assert.doesNotMatch(source, /location\.(?:search|hash)|URLSearchParams|localStorage|sessionStorage|indexedDB|document\.cookie|fetch\(|XMLHttpRequest|WebSocket|EventSource/);
  for (const path of ["../../src/App.jsx", "../../src/CounterfieldNormal.js", "../../src/Counterfield.jsx"]) assert.doesNotMatch(readFileSync(new URL(path, import.meta.url), "utf8"), /TD010_COUNTERFIELD_FIXTURE|td010-counterfield-v1|review-fixtures\/td010-counterfield|127\.0\.0\.1:4182/);
});

test("TD010 browser fixture compares visible owner and actual active element to all declared contracts", () => {
  const source = readFileSync(new URL("./ReviewCounterfieldFixture.jsx", import.meta.url), "utf8");
  assert.match(source, /document\.activeElement\?\.id/); assert.match(source, /renderedOwner === declaredOwner && activeElementId === declaredFocus/); assert.match(source, /data-rendered-contract=/);
  for (const name of counterfieldScenarioNames) { const state = createCounterfieldScenario(name).state; assert.ok(state.owner); assert.ok(state.focusIntent.target); }
  const exact = {
    resume_contiguous_prefix: ["PILOT // COURSE WORK", "cf20-python-transfer-editor"],
    resume_first_gap: ["PILOT // COURSE WORK", "cf20-python-primary-editor"],
    request_response_work_cleared: ["PILOT // COURSE WORK", "cf20-python-trace-first"],
    review_four_scopes: ["PILOT // EXPEDITION REVIEW", "cf20-review-heading"],
    save_committed: ["SYSTEM // EXPEDITION LEDGER", "cf30-restore-heading"],
    save_rollback_verified: ["SYSTEM // RECOVERY", "cf20-save-retry-heading"],
  };
  for (const [name, [owner, focus]] of Object.entries(exact)) { const state = createCounterfieldScenario(name).state; assert.equal(state.owner, owner, name); assert.equal(state.focusIntent.target, focus, name); }
});

test("TD010 fixture freezes layouts, presentation modes, and longest-copy evidence", () => {
  for (const name of ["layout_desktop", "layout_laptop", "layout_narrow", "layout_effective_200", "longest_copy_contained"]) assert.deepEqual(createCounterfieldScenario(name).frozenLongestCopy, FROZEN_LONGEST_COPY);
  assert.equal(createCounterfieldScenario("mode_forced_colors").presentationMode, "forced-colors"); assert.equal(createCounterfieldScenario("mode_reduced_motion").presentationMode, "reduced-motion"); assert.equal(createCounterfieldScenario("mode_grayscale").presentationMode, "grayscale");
  const css = readFileSync(new URL("./fixture.css", import.meta.url), "utf8"); assert.match(css, /CanvasText/); assert.match(css, /animation:none!important/); assert.match(css, /grayscale\(1\)/);
});

test("TD010 production graph retires image placeholders and contains no protected or successor source", () => {
  const source = ["../../src/CounterfieldNormal.js", "../../src/Counterfield.jsx", "../../src/App.jsx"].map((path) => readFileSync(new URL(path, import.meta.url), "utf8")).join("\n");
  assert.match(source, /SC-11-COUNTERFIELD-PANORAMA/); assert.match(source, /retired-no-runtime-image/); assert.doesNotMatch(source, /structural-placeholder/);
  assert.doesNotMatch(source, /CounterfieldProtectedJourney|rp010\.protected-journey|RP-011|SC-12|successor:\s*["'][^"']/);
});
