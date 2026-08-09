import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";
import manifest from "../review-fixtures/td011-unborrowed-reach/launch-manifest.json" with { type: "json" };
import { createUnborrowedReachScenario, unborrowedReachScenarioNames } from "../review-fixtures/td011-unborrowed-reach/scenarios.js";

const shellPath = fileURLToPath(new URL("../../Production Pipeline/Skyscraper Test Drives/TD-011/05-PLAYABLE-SLICE-SHELL.md", import.meta.url));

function parseShellScenarios() {
  const shell = readFileSync(shellPath, "utf8");
  const start = shell.indexOf("## Closed storage-free 80-scenario fixture");
  const end = shell.indexOf("The manifest rejects", start);
  assert.ok(start >= 0 && end > start);
  return shell.slice(start, end).split(/\r?\n/).map((line) => line.match(/^\|\s*\d+\s*\|\s*`([^`]+)`\s*\|\s*`([^`]+)`\s*\|\s*`([^`]+)`\s*\|$/)).filter(Boolean).map((match) => ({ id: match[1], owner: match[2], focus: match[3] }));
}

test("TD011 fixture contains exactly the shell-authorized 80 public scenarios", () => {
  const shellRows = parseShellScenarios();
  assert.equal(manifest.fixtureId, "td011-unborrowed-reach-v1"); assert.equal(manifest.contractVersion, "td011.fixture-manifest.v1"); assert.equal(manifest.scenarioCount, 80);
  assert.equal(shellRows.length, 80); assert.equal(unborrowedReachScenarioNames.length, 80); assert.equal(new Set(unborrowedReachScenarioNames).size, 80);
  assert.deepEqual(unborrowedReachScenarioNames, shellRows.map((row) => row.id));
  for (const row of shellRows) { const scenario = createUnborrowedReachScenario(row.id); assert.equal(scenario.declaredOwner, row.owner); assert.equal(scenario.declaredFocus, row.focus); assert.equal(scenario.storage, "frozen-in-memory-only"); assert.equal(scenario.arbitraryStateAccepted, false); assert.equal(scenario.state.cityStateDelta, null); assert.equal(scenario.state.worldStateDelta, null); assert.equal(scenario.state.externalStateDelta, null); assert.equal(scenario.state.successor, null); }
  assert.throws(() => createUnborrowedReachScenario("unknown"));
});

test("TD011 fixture imports only the exact public normal surface and accepts no external state", () => {
  const fixtureFiles = ["scenarios.js", "ReviewUnborrowedReachFixture.jsx", "main.jsx"].map((name) => readFileSync(new URL(`../review-fixtures/td011-unborrowed-reach/${name}`, import.meta.url), "utf8")).join("\n");
  const imports = [...fixtureFiles.matchAll(/from\s+["'](\.\.\/\.\.\/src\/[^"']+)["']/g)].map((match) => match[1]);
  assert.deepEqual([...new Set(imports)].sort(), ["../../src/UnborrowedReach.jsx", "../../src/UnborrowedReachNormal.js"]);
  assert.doesNotMatch(fixtureFiles, /location\.(?:search|hash)|URLSearchParams|localStorage|sessionStorage|indexedDB|document\.cookie|fetch\(|XMLHttpRequest|WebSocket|EventSource|FileReader|<input[^>]+type=["']file/i);
  const production = ["App.jsx", "CalibrationMarginNormalEntry.js", "UnborrowedReach.jsx", "UnborrowedReachNormal.js"].map((name) => readFileSync(new URL(`../src/${name}`, import.meta.url), "utf8")).join("\n");
  assert.doesNotMatch(production, /TD011_UNBORROWED_REACH_FIXTURE|review-fixtures\/td011-unborrowed-reach|127\.0\.0\.1:4183/);
  assert.doesNotMatch(production, /UnborrowedReachProtectedJourney|rp011\.protected-journey\.v1|protected_reference_complete/);
});

test("TD011 all 80 production surfaces render exact owner text and a real declared focus target", { timeout: 60_000 }, async () => {
  const vite = await createServer({ root: fileURLToPath(new URL("..", import.meta.url)), appType: "custom", server: { middlewareMode: true }, logLevel: "silent" });
  try {
    const { UnborrowedReach } = await vite.ssrLoadModule("/src/UnborrowedReach.jsx");
    for (const id of unborrowedReachScenarioNames) {
      const scenario = createUnborrowedReachScenario(id);
      const markup = renderToStaticMarkup(React.createElement(UnborrowedReach, { state: scenario.state, onAction() {}, onFieldChange() {} }));
      assert.ok(markup.includes(`data-active-owner="${scenario.declaredOwner}"`), `${id} owner attribute`);
      assert.ok(markup.includes(`>${scenario.declaredOwner}</p>`), `${id} visible owner`);
      assert.ok(markup.includes(`id="${scenario.declaredFocus}"`), `${id} real focus target`);
      assert.equal((markup.match(/<main\b/g) ?? []).length, 1, `${id} one main`);
      assert.equal((markup.match(/role="status"/g) ?? []).length, 1, `${id} one status`);
    }
  } finally { await vite.close(); }
});

test("TD011 browser harness compares visible owner and actual active element", () => {
  const source = readFileSync(new URL("../review-fixtures/td011-unborrowed-reach/ReviewUnborrowedReachFixture.jsx", import.meta.url), "utf8");
  assert.match(source, /document\.activeElement\?\.id/); assert.match(source, /renderedOwner === declaredOwner && activeElementId === declaredFocus/); assert.match(source, /data-rendered-contract=/);
  const css = readFileSync(new URL("../review-fixtures/td011-unborrowed-reach/fixture.css", import.meta.url), "utf8"); assert.match(css, /CanvasText/); assert.match(css, /animation:none!important/);
});
