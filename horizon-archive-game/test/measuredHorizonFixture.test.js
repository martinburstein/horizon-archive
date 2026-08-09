import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";
import { fileURLToPath } from "node:url";
import manifest from "../review-fixtures/td012-measured-horizon/launch-manifest.json" with { type: "json" };
import { createMeasuredHorizonScenario, measuredHorizonScenarioNames } from "../review-fixtures/td012-measured-horizon/scenarios.js";

test("TD012 fixture contains exactly 58 literal closed public scenarios", () => {
  assert.equal(manifest.scenarioCount, 58); assert.equal(measuredHorizonScenarioNames.length, 58); assert.equal(new Set(measuredHorizonScenarioNames).size, 58);
  assert.equal(measuredHorizonScenarioNames.filter((id) => id.startsWith("gate-miss-")).length, 16);
  for (const id of measuredHorizonScenarioNames) { const scenario = createMeasuredHorizonScenario(id); assert.equal(scenario.storage, "frozen-in-memory-only"); assert.equal(scenario.arbitraryStateAccepted, false); assert.equal(scenario.state.successor, null); assert.equal(scenario.state.worldStateDelta, null); assert.equal(scenario.state.authorityGranted, false); }
  assert.throws(() => createMeasuredHorizonScenario("unknown"));
});

test("TD012 fixture is storage-free and production never imports its harness", () => {
  const fixtureFiles = ["scenarios.js", "ReviewMeasuredHorizonFixture.jsx", "main.jsx"].map((name) => readFileSync(new URL(`../review-fixtures/td012-measured-horizon/${name}`, import.meta.url), "utf8")).join("\n");
  assert.doesNotMatch(fixtureFiles, /location\.(?:search|hash)|URLSearchParams|localStorage|sessionStorage|indexedDB|document\.cookie|fetch\(|XMLHttpRequest|WebSocket|EventSource|FileReader|type=["']file/i);
  const production = ["App.jsx", "CalibrationMarginNormalEntry.js", "MeasuredHorizon.jsx", "MeasuredHorizonNormal.js"].map((name) => readFileSync(new URL(`../src/${name}`, import.meta.url), "utf8")).join("\n");
  assert.doesNotMatch(production, /TD012_MEASURED_HORIZON_FIXTURE|review-fixtures\/td012-measured-horizon|127\.0\.0\.1:4184|MeasuredHorizonProtectedJourney/);
});

test("TD012 all 58 product surfaces render exact visible owner and a real declared focus target", { timeout: 60_000 }, async () => {
  const vite = await createServer({ root: fileURLToPath(new URL("..", import.meta.url)), appType: "custom", server: { middlewareMode: true }, logLevel: "silent" });
  try { const { MeasuredHorizon } = await vite.ssrLoadModule("/src/MeasuredHorizon.jsx"); for (const id of measuredHorizonScenarioNames) { const scenario = createMeasuredHorizonScenario(id); const markup = renderToStaticMarkup(React.createElement(MeasuredHorizon,{state:scenario.state,onAction(){},onFieldChange(){}})); assert.ok(markup.includes(`data-active-owner="${scenario.declaredOwner}"`),`${id} owner`); assert.ok(markup.includes(`>${scenario.declaredOwner}</p>`),`${id} visible owner`); assert.ok(markup.includes(`id="${scenario.declaredFocus}"`),`${id} focus`); assert.equal((markup.match(/<main\b/g)??[]).length,1); assert.equal((markup.match(/role="status"/g)??[]).length,1); } }
  finally { await vite.close(); }
});

test("TD012 browser harness compares visible owner and actual active element", () => {
  const source=readFileSync(new URL("../review-fixtures/td012-measured-horizon/ReviewMeasuredHorizonFixture.jsx",import.meta.url),"utf8"); assert.match(source,/document\.activeElement\?\.id/); assert.match(source,/renderedOwner===scenario\.declaredOwner&&activeElementId===scenario\.declaredFocus/); assert.match(source,/data-rendered-contract=/);
});
