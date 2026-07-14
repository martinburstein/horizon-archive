import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import primary from "../../curriculum/lessons/L-05-03/sdk_route_trace_reference_answers.json" with { type: "json" };
import transfer from "../../curriculum/lessons/L-05-03/sdk_route_trace_reference_transfer_answers.json" with { type: "json" };
import routeBank from "../../curriculum/lessons/L-05-03/sdk_route_scenarios.json" with { type: "json" };
import {
  evaluateSdkRouteTrace,
  getSdkRouteTraceFeedback,
  getSdkRouteTraceOptions,
  getSdkRouteTraceScenario,
  sdkRouteTraceDimensions,
  sdkRouteTraceLabels,
} from "../src/sdkRouteTraceExercise.js";

test("one matching trace is selected for every chooser boundary and form", () => {
  for (const form of ["primary", "transfer"]) {
    for (const scenario of routeBank.forms[form]) {
      const trace = getSdkRouteTraceScenario(scenario, form);
      assert.equal(trace.id.startsWith(form === "transfer" ? "DT" : "DP"), true);
      assert.equal(typeof trace.prompt, "string");
    }
  }
});

test("primary and fresh transfer references pass all three independently labeled decisions", () => {
  assert.deepEqual(Object.keys(sdkRouteTraceLabels), sdkRouteTraceDimensions);
  for (const [form, answers] of [["primary", primary], ["transfer", transfer]]) {
    for (const [id, response] of Object.entries(answers)) {
      assert.deepEqual(evaluateSdkRouteTrace(id, response, form).correctness, {
        route: true,
        endpoint_family: true,
        next_action: true,
      });
    }
  }
});

test("a single missed dimension receives targeted feedback without weakening 3/3", () => {
  const response = { ...primary.DP02, endpoint_family: "openai_v1_endpoint" };
  const result = evaluateSdkRouteTrace("DP02", response, "primary");
  assert.equal(result.passed, false);
  assert.deepEqual(result.missedDimensions, ["endpoint_family"]);
  assert.match(getSdkRouteTraceFeedback(result, 1).teacherRemediation, /Endpoint family/);
  assert.equal(evaluateSdkRouteTrace("DP02", primary.DP02, "primary").passed, true);
});

test("trace exposes conceptual choices only and no credential or URL input", () => {
  const options = getSdkRouteTraceOptions();
  assert.equal(options.route.length, 6);
  assert.equal(options.endpoint_family.length, 5);
  assert.equal(options.next_action.length, 2);
  assert.equal(JSON.stringify(options).includes("https://"), false);
  assert.equal(JSON.stringify(options).toLowerCase().includes("credential"), false);
});

test("runtime clinic requires trace pass, fresh retry, and keeps membrane animation separate", () => {
  const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
  assert.match(app, /SDK DECISION TRACE · ONE SCENARIO/);
  assert.match(app, /Check three decisions/);
  assert.match(app, /Return to a fresh route retry/);
  assert.match(app, /response:\{route:"",endpoint_family:"",next_action:""\}/);
  assert.match(app, /No URL, endpoint value, credential, resource name, deployment, request, response, or live action/);
  const traceHandler = app.match(/function checkSdkRouteTrace[\s\S]*?function retrySdkRouteAfterTrace/)?.[0] ?? "";
  assert.doesNotMatch(traceHandler, /signalCoupler|membrane|Image/);
});

test("decision trace has a whole-pixel three-column canonical and one-column narrow contract", () => {
  const styles = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");
  assert.match(styles, /\.sdk-route-trace-form\s*\{[^}]*padding:\s*8px;/s);
  assert.match(styles, /\.sdk-route-trace-form header h2\s*\{[^}]*font-size:\s*12px;[^}]*line-height:\s*14px;/s);
  assert.match(styles, /\.sdk-route-trace-fields\s*\{[^}]*grid-template-columns:\s*repeat\(3, minmax\(0, 1fr\)\);[^}]*gap:\s*4px;[^}]*margin:\s*6px 0;/s);
  assert.match(styles, /\.sdk-route-trace-fields label\s*\{[^}]*padding:\s*4px;[^}]*border-radius:\s*0;[^}]*box-shadow:\s*none;[^}]*font-size:\s*8px;[^}]*line-height:\s*10px;/s);
  assert.match(styles, /\.sdk-route-trace-fields select\s*\{[^}]*min-height:\s*24px;[^}]*padding:\s*3px 4px;[^}]*border-radius:\s*0;[^}]*box-shadow:\s*none;[^}]*font-size:\s*8px;[^}]*line-height:\s*10px;/s);
  assert.match(styles, /data-canonical-layout="narrow"[^}]*\.sdk-route-trace-form\s*\{[^}]*padding:\s*4px;/s);
  assert.match(styles, /data-canonical-layout="narrow"[^}]*\.sdk-route-trace-fields\s*\{[^}]*grid-template-columns:\s*1fr;[^}]*gap:\s*4px;[^}]*margin:\s*4px 0;/s);
  assert.doesNotMatch(styles.match(/\.sdk-route-trace-form[\s\S]*?\.visual-workspace/)?.[0] ?? "", /(?:font-size|line-height|padding|gap|margin|min-height):\s*\d+\.\d+px/);
});
