import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import primary from "../../curriculum/lessons/L-05-03/sdk_route_reference_answers.json" with { type: "json" };
import transfer from "../../curriculum/lessons/L-05-03/sdk_route_reference_transfer_answers.json" with { type: "json" };
import {
  deriveSdkRouteResume,
  evaluateSdkRouteScenario,
  getSdkRouteFeedback,
  getSdkRouteOptions,
  sanitizeSdkRouteEvidence,
  sdkRouteDialogDescribedBy,
  sdkRoutePrimary,
  sdkRouteTransfer,
  updateSdkRouteEvidence,
} from "../src/sdkRouteChooserExercise.js";

test("primary and fresh transfer require sixteen route-plus-reason dimensions each", () => {
  for (const [form, scenarios, answers] of [
    ["primary", sdkRoutePrimary, primary],
    ["transfer", sdkRouteTransfer, transfer],
  ]) {
    assert.equal(scenarios.length, 8);
    for (const scenario of scenarios) {
      assert.deepEqual(evaluateSdkRouteScenario(scenario.id, answers[scenario.id], form).correctness, {
        route: true,
        reason: true,
      });
    }
  }
});

test("a correct route with a wrong reason cannot pass", () => {
  const result = evaluateSdkRouteScenario("P03", {
    route: primary.P03.route,
    reason: primary.P01.reason,
  }, "primary");
  assert.deepEqual(result.correctness, { route: true, reason: false });
  assert.equal(result.passed, false);
  assert.ok(result.misconceptionTags.includes("route-correct-reason-incorrect"));
});

test("all route labels and same-form reasons remain available on every scenario", () => {
  for (const form of ["primary", "transfer"]) {
    const options = getSdkRouteOptions(form);
    assert.equal(options.route.length, 6);
    assert.equal(options.reason.length, 8);
    assert.ok(options.route.includes("reverify_before_live"));
  }
  assert.equal(sdkRouteDialogDescribedBy, "sdk-route-offline-warning");
});

test("feedback reports route and reason separately and supports unlimited retry", () => {
  const scenario = sdkRoutePrimary[6];
  const miss = evaluateSdkRouteScenario(scenario.id, { route: "foundry_sdk", reason: "foundry_project_features" }, "primary");
  assert.equal(getSdkRouteFeedback(scenario, miss, 1).systemScore, "0/2 · ROUTE CHOICE NOT YET COMPLETE.");
  assert.match(getSdkRouteFeedback(scenario, miss, 3).teacherRemediation, /narrowest current route/i);
  assert.deepEqual(evaluateSdkRouteScenario(scenario.id, primary[scenario.id], "primary").correctness, { route: true, reason: true });
});

test("sanitized evidence stores reasoning booleans but no choices, endpoints, credentials, or dexterity data", () => {
  const safe = sanitizeSdkRouteEvidence({
    exerciseId: "EX-L0503-SDK-ROUTE-CHOOSER",
    itemCorrectness: { P01: { route: true, reason: false } },
    attemptCount: 2,
    hintLevel: 1,
    confidence: "medium",
    masteryStatus: "mastered",
    response: primary.P01,
    endpoint: "https://private.example",
    credential: "secret",
    deploymentName: "private",
    clickTime: 123,
    keySequence: ["Tab"],
  });
  assert.equal(safe.masteryStatus, "in_progress");
  assert.deepEqual(safe.itemCorrectness.P01, { route: true, reason: false });
  for (const key of ["response", "endpoint", "credential", "deploymentName", "clickTime", "keySequence"]) {
    assert.equal(key in safe, false);
  }
});

test("fresh transfer begins with blank working choices after strict primary evidence", () => {
  let evidence = null;
  for (const scenario of sdkRoutePrimary) {
    const result = evaluateSdkRouteScenario(scenario.id, primary[scenario.id], "primary");
    evidence = updateSdkRouteEvidence(evidence, {
      form: "primary",
      scenarioId: scenario.id,
      correctness: result.correctness,
      incrementAttempt: true,
    });
  }
  evidence = updateSdkRouteEvidence(evidence, { form: "transfer", masteryStatus: "primary_complete" });
  assert.deepEqual(deriveSdkRouteResume(evidence), { form: "transfer", index: 0, complete: false });
  assert.equal("response" in evidence, false);
});

test("mastery cannot be forged without all thirty-two reasoning dimensions", () => {
  let evidence = null;
  for (const [form, scenarios, answers] of [
    ["primary", sdkRoutePrimary, primary],
    ["transfer", sdkRouteTransfer, transfer],
  ]) {
    for (const scenario of scenarios) {
      evidence = updateSdkRouteEvidence(evidence, {
        form,
        scenarioId: scenario.id,
        correctness: evaluateSdkRouteScenario(scenario.id, answers[scenario.id], form).correctness,
      });
    }
  }
  evidence = updateSdkRouteEvidence(evidence, { form: "transfer", masteryStatus: "mastered" });
  assert.equal(evidence.masteryStatus, "mastered");
  const forged = sanitizeSdkRouteEvidence({ ...evidence, itemCorrectness: { ...evidence.itemCorrectness, T08: { route: true, reason: false } } });
  assert.equal(forged.masteryStatus, "primary_complete");
});

test("runtime source exposes persistent labels, safe exit, and no timer or credential fields", () => {
  const source = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
  assert.match(source, /sdk-route-label-key/);
  assert.match(source, /id="sdk-route-label-key"[\s\S]*?role="region"[\s\S]*?tabIndex="0"[\s\S]*?aria-labelledby="sdk-route-label-key-title"/);
  assert.match(source, /id="sdk-route-label-key-title">ROUTE KEY/);
  assert.match(source, /Exit SDK Route Chooser/);
  assert.match(source, /No endpoint, credential, resource, deployment, request, or response is collected/);
  assert.doesNotMatch(source, /sdk-route-(?:timer|countdown)/);
});

test("route key has an explicit contained density contract at both logical viewports", () => {
  const source = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
  const styles = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");
  assert.match(source, /className="speech-transcript sdk-route-key"/);
  assert.match(styles, /\.sdk-route-workspace\s*\{[^}]*grid-template-rows:\s*auto minmax\(42px, 0\.55fr\) minmax\(0, 1\.45fr\);[^}]*overflow:\s*hidden;/s);
  assert.match(styles, /\.sdk-route-key\s*\{[^}]*overflow:\s*auto;[^}]*border-radius:\s*0;[^}]*box-shadow:\s*none;[^}]*font-size:\s*8px;[^}]*line-height:\s*10px;/s);
  assert.match(styles, /\.sdk-route-key ul\s*\{[^}]*grid-template-columns:\s*repeat\(3, minmax\(0, 1fr\)\);[^}]*list-style:\s*none;/s);
  assert.match(styles, /data-canonical-layout="narrow"[^}]*\.sdk-route-key ul\s*\{[^}]*grid-template-columns:\s*repeat\(2, minmax\(0, 1fr\)\);/s);
  assert.match(styles, /data-canonical-layout="narrow"[^}]*\.sdk-route-key\s*\{[^}]*font-size:\s*8px;[^}]*line-height:\s*10px;/s);
});
