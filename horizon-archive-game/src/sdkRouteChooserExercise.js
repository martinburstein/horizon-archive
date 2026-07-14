import bank from "../../curriculum/lessons/L-05-03/sdk_route_scenarios.json" with { type: "json" };
import key from "../../curriculum/lessons/L-05-03/sdk_route_answer_key.json" with { type: "json" };

export const sdkRouteChooserExercise = {
  exerciseId: "EX-L0503-SDK-ROUTE-CHOOSER",
  lessonId: "L-05-03",
  activityId: "A-L0503-3",
  objectiveIds: ["AI901-D2-O3"],
  skillIds: ["SDK-ROUTE-CHOICE", "SDK-ROUTE-REASON"],
};

export const sdkRoutePrimary = bank.forms.primary;
export const sdkRouteTransfer = bank.forms.transfer;
export const sdkRouteDimensions = ["route", "reason"];
export const sdkRouteLabels = {
  foundry_sdk: "Foundry SDK — project APIs and Foundry-native features",
  agent_framework: "Agent Framework — hosted or multi-agent code",
  openai_sdk: "OpenAI SDK — compatible direct-model APIs and embeddings",
  anthropic_sdk: "Anthropic SDK — Claude models deployed in Foundry",
  foundry_tools_sdk: "Foundry Tools SDK — a specific prebuilt service",
  reverify_before_live: "Reverify before live use — resource, identity, or volatile detail",
};
export const sdkRouteDialogDescribedBy = "sdk-route-offline-warning";

const allScenarios = [...sdkRoutePrimary, ...sdkRouteTransfer];
const validIds = new Set(allScenarios.map((scenario) => scenario.id));
const validMisconceptions = new Set([
  "brand-familiarity-over-scenario-fit",
  "route-correct-reason-incorrect",
  "resource-endpoints-interchangeable",
  "identity-or-rbac-assumed",
  "volatile-detail-treated-as-stable",
]);

export function getSdkRouteOptions(form = "primary") {
  const reasons = Object.values(key.forms[form]).map((answer) => answer.reason);
  return { route: [...bank.routes], reason: [...new Set(reasons)] };
}

export function evaluateSdkRouteScenario(id, response, form = id?.startsWith("T") ? "transfer" : "primary") {
  const expected = key.forms[form]?.[id];
  if (!expected) throw new Error(`Unknown SDK route scenario: ${form}/${id}`);
  const correctness = Object.fromEntries(
    sdkRouteDimensions.map((dimension) => [dimension, response?.[dimension] === expected[dimension]]),
  );
  const passed = Object.values(correctness).every(Boolean);
  const scenario = bank.forms[form].find((item) => item.id === id);
  const misconceptionTags = [];
  if (!correctness.route) misconceptionTags.push("brand-familiarity-over-scenario-fit");
  if (correctness.route && !correctness.reason) misconceptionTags.push("route-correct-reason-incorrect");
  if (scenario.boundary === "resource_scope" && !passed) misconceptionTags.push("resource-endpoints-interchangeable");
  if (scenario.boundary === "identity_authority" && !passed) misconceptionTags.push("identity-or-rbac-assumed");
  if (scenario.boundary === "volatile_detail" && !passed) misconceptionTags.push("volatile-detail-treated-as-stable");
  return {
    correctness,
    score: Object.values(correctness).filter(Boolean).length,
    passed,
    misconceptionTags,
  };
}

export function getSdkRouteFeedback(scenario, result, hintLevel = 0) {
  if (!result) return { systemScore: "Awaiting route and reason.", teacherRemediation: null };
  if (result.passed) return { systemScore: "2/2 · ROUTE + REASON PASS.", teacherRemediation: null };
  const focus = scenario.boundary.replaceAll("_", " ");
  const cues = [
    `Name the requested capability first; this item tests ${focus}.`,
    "Separate scenario fit from resource endpoint and identity authority. A route name cannot prove access.",
    "Choose the narrowest current route that fits, then choose the reason that explains that fit. Reverify before any live use.",
  ];
  return {
    systemScore: `${result.score}/2 · ROUTE CHOICE NOT YET COMPLETE.`,
    teacherRemediation: cues[Math.max(0, Math.min(2, hintLevel - 1))],
  };
}

function formComplete(itemCorrectness, form) {
  return bank.forms[form].every((scenario) =>
    sdkRouteDimensions.every((dimension) => itemCorrectness[scenario.id]?.[dimension] === true),
  );
}

export function sanitizeSdkRouteEvidence(value) {
  if (!value || typeof value !== "object" || value.exerciseId !== sdkRouteChooserExercise.exerciseId) return null;
  const itemCorrectness = {};
  for (const [id, dimensions] of Object.entries(value.itemCorrectness ?? {})) {
    if (!validIds.has(id) || !dimensions || typeof dimensions !== "object") continue;
    const safe = {};
    for (const dimension of sdkRouteDimensions) {
      if (typeof dimensions[dimension] === "boolean") safe[dimension] = dimensions[dimension];
    }
    if (Object.keys(safe).length) itemCorrectness[id] = safe;
  }
  const primaryComplete = formComplete(itemCorrectness, "primary");
  const transferComplete = formComplete(itemCorrectness, "transfer");
  let masteryStatus = ["in_progress", "remediation_required", "primary_complete", "mastered"].includes(value.masteryStatus)
    ? value.masteryStatus
    : "in_progress";
  if (masteryStatus === "primary_complete" && !primaryComplete) masteryStatus = "in_progress";
  if (masteryStatus === "mastered" && !(primaryComplete && transferComplete)) {
    masteryStatus = primaryComplete ? "primary_complete" : "in_progress";
  }
  return {
    exerciseId: sdkRouteChooserExercise.exerciseId,
    lessonId: sdkRouteChooserExercise.lessonId,
    activityId: sdkRouteChooserExercise.activityId,
    objectiveIds: [...sdkRouteChooserExercise.objectiveIds],
    skillIds: [...sdkRouteChooserExercise.skillIds],
    form: value.form === "transfer" ? "transfer" : "primary",
    itemCorrectness,
    attemptCount: Number.isInteger(value.attemptCount) && value.attemptCount >= 0 ? value.attemptCount : 0,
    hintLevel: Number.isInteger(value.hintLevel) && value.hintLevel >= 0 ? Math.min(3, value.hintLevel) : 0,
    confidence: ["low", "medium", "high"].includes(value.confidence) ? value.confidence : null,
    misconceptionTags: Array.isArray(value.misconceptionTags)
      ? [...new Set(value.misconceptionTags.filter((tag) => validMisconceptions.has(tag)))]
      : [],
    masteryStatus,
  };
}

export function updateSdkRouteEvidence(previous, change = {}) {
  const base = sanitizeSdkRouteEvidence(previous) ?? sanitizeSdkRouteEvidence({
    exerciseId: sdkRouteChooserExercise.exerciseId,
    itemCorrectness: {},
  });
  const itemCorrectness = { ...base.itemCorrectness };
  if (change.scenarioId && validIds.has(change.scenarioId) && change.correctness) {
    itemCorrectness[change.scenarioId] = Object.fromEntries(
      sdkRouteDimensions.filter((dimension) => typeof change.correctness[dimension] === "boolean")
        .map((dimension) => [dimension, change.correctness[dimension]]),
    );
  }
  return sanitizeSdkRouteEvidence({
    ...base,
    ...change,
    itemCorrectness,
    attemptCount: base.attemptCount + (change.incrementAttempt ? 1 : 0),
    hintLevel: Math.max(base.hintLevel, change.hintLevel ?? 0),
    misconceptionTags: change.clearMisconceptionTags
      ? []
      : [...base.misconceptionTags, ...(change.misconceptionTags ?? [])],
  });
}

export function deriveSdkRouteResume(evidence) {
  const safe = sanitizeSdkRouteEvidence(evidence);
  const form = safe?.masteryStatus === "primary_complete" || safe?.form === "transfer" ? "transfer" : "primary";
  const scenarios = bank.forms[form];
  const index = scenarios.findIndex((scenario) =>
    sdkRouteDimensions.some((dimension) => safe?.itemCorrectness?.[scenario.id]?.[dimension] !== true),
  );
  return { form, index: index < 0 ? scenarios.length - 1 : index, complete: index < 0 };
}
