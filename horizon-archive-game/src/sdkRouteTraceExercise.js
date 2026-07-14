import bank from "../../curriculum/lessons/L-05-03/sdk_route_trace_scenarios.json" with { type: "json" };
import key from "../../curriculum/lessons/L-05-03/sdk_route_trace_answer_key.json" with { type: "json" };

export const sdkRouteTraceDimensions = ["route", "endpoint_family", "next_action"];

export const sdkRouteTraceLabels = {
  route: "1. Client route",
  endpoint_family: "2. Endpoint family (concept only)",
  next_action: "3. Next authority-safe action",
};

export const sdkRouteTraceChoiceLabels = {
  foundry_sdk: "Foundry SDK",
  agent_framework: "Agent Framework",
  openai_sdk: "OpenAI SDK",
  anthropic_sdk: "Anthropic SDK",
  foundry_tools_sdk: "Foundry Tools SDK",
  reverify_before_live: "Stop and reverify before live use",
  foundry_project_endpoint: "Foundry project endpoint family",
  openai_v1_endpoint: "OpenAI v1 endpoint family",
  anthropic_endpoint: "Anthropic endpoint family",
  tool_specific_endpoint: "Tool-specific endpoint family",
  unverified_endpoint: "Unverified endpoint family",
  verify_identity_rbac_resource_scope: "Verify approved identity, RBAC, resource, and scope",
  stop_and_reverify_current_docs: "Stop and reverify current official documentation",
};

const boundaryMap = {
  foundry_native: "foundry_native",
  hosted_agent_code: "hosted_agent_code",
  openai_compatibility: "openai_compatibility",
  claude_models: "claude_models",
  service_specific_tool: "service_specific_tool",
  resource_scope: "unverified_scope",
  identity_authority: "unverified_scope",
  volatile_detail: "unverified_scope",
};

export function getSdkRouteTraceScenario(routeScenario, form = "primary") {
  const boundary = boundaryMap[routeScenario?.boundary];
  const scenario = bank.forms[form]?.find((item) => item.boundary === boundary);
  if (!scenario) throw new Error(`No SDK decision trace for ${form}/${routeScenario?.boundary}`);
  return scenario;
}

export function getSdkRouteTraceOptions() {
  return Object.fromEntries(
    sdkRouteTraceDimensions.map((dimension) => [dimension, [...bank.choices[dimension]]]),
  );
}

export function evaluateSdkRouteTrace(id, response, form = id?.startsWith("DT") ? "transfer" : "primary") {
  const expected = key.forms[form]?.[id];
  if (!expected) throw new Error(`Unknown SDK decision trace: ${form}/${id}`);
  const correctness = Object.fromEntries(
    sdkRouteTraceDimensions.map((dimension) => [dimension, response?.[dimension] === expected[dimension]]),
  );
  const missedDimensions = sdkRouteTraceDimensions.filter((dimension) => !correctness[dimension]);
  return {
    correctness,
    score: sdkRouteTraceDimensions.length - missedDimensions.length,
    passed: missedDimensions.length === 0,
    missedDimensions,
    misconceptionTags: missedDimensions.map((dimension) => `sdk-trace-${dimension}-miss`),
  };
}

export function getSdkRouteTraceFeedback(result, hintLevel = 0) {
  if (!result) return { systemScore: "Awaiting three independent decisions.", teacherRemediation: null };
  if (result.passed) return { systemScore: "3/3 · DECISION TRACE PASS.", teacherRemediation: null };
  const missed = result.missedDimensions.map((dimension) => sdkRouteTraceLabels[dimension]).join("; ");
  const cues = [
    `Recheck only the missed decision${result.missedDimensions.length === 1 ? "" : "s"}: ${missed}.`,
    "A route fits the capability; an endpoint family names a conceptual boundary; neither grants authority.",
    "For unverified scope, stop and recheck current official documentation. Otherwise verify approved identity, RBAC, resource, and scope before live use.",
  ];
  return {
    systemScore: `${result.score}/3 · TARGETED TRACE NOT YET COMPLETE.`,
    teacherRemediation: cues[Math.max(0, Math.min(2, hintLevel - 1))],
  };
}
