import exerciseAsset from "../../curriculum/lessons/L-03-02/exercise.json" with { type: "json" };

export const controlFlowExercise = exerciseAsset;
export const controlFlowChecks = ["runs", "function_signature", "uses_for_loop", "uses_if_else", "sample_return", "boundary_behavior", "unseen_reuse_no_mutation", "derived_output_no_bypass"];
export const controlFlowExplanationDimensions = ["parameter", "loop_condition", "return"];
export const controlFlowStarters = {
  primary: `def classify_readings(readings, threshold):
    results = []
    # TODO: loop over every value; append alert for value >= threshold, else clear.
    # Return results after the loop.
    return results

readings = [3, 8, 5]
results = classify_readings(readings, 5)
print(results)`,
  transfer: `def route_items(items, minimum):
    routes = []
    # TODO: loop over item dictionaries; append review at score >= minimum, else hold.
    # Return routes after the loop.
    return routes

items = [{"name": "alpha", "score": 2}, {"name": "beta", "score": 4}]
routes = route_items(items, 3)
print(routes)`,
};

const configs = {
  primary: {
    signature: "def classify_readings(readings, threshold):", loop: "for value in readings:", condition: "if value >= threshold:",
    yes: 'results.append("alert")', no: 'results.append("clear")', returned: "return results", call: "results = classify_readings(readings, 5)", print: "print(results)", accumulator: "results = []",
  },
  transfer: {
    signature: "def route_items(items, minimum):", loop: "for item in items:", condition: 'if item["score"] >= minimum:',
    yes: 'routes.append({"name": item["name"], "route": "review"})', no: 'routes.append({"name": item["name"], "route": "hold"})', returned: "return routes", call: "routes = route_items(items, 3)", print: "print(routes)", accumulator: "routes = []",
  },
};
const tags = { function_signature: "ignores-parameters", uses_for_loop: "append-outside-loop", uses_if_else: "condition-boundary-off-by-one", sample_return: "return-inside-loop", boundary_behavior: "condition-boundary-off-by-one", unseen_reuse_no_mutation: "mutates-input", derived_output_no_bypass: "hardcoded-sample-output", runs: "return-inside-loop" };
const validTags = new Set(exerciseAsset.misconception_tags);

function lines(source) { return source.split(/\r?\n/).map((line) => line.trim()); }
function has(source, line) { return lines(source).includes(line); }

export function evaluateControlFlowSource(source, form = "primary") {
  const cfg = configs[form];
  const safe = typeof source === "string" && !/(?:eval|exec|open|__import__|subprocess|os\.|sys\.|while\s+True)/.test(source);
  const signature = has(source, cfg.signature);
  const loop = has(source, cfg.loop);
  const condition = has(source, cfg.condition);
  const branches = has(source, cfg.yes) && has(source, cfg.no) && /\n\s*else\s*:/.test(source);
  const returnAfterLoop = has(source, cfg.returned) && source.lastIndexOf(cfg.returned) > source.lastIndexOf(cfg.no);
  const outputDerived = has(source, cfg.call) && has(source, cfg.print) && !/print\s*\(\s*[\[{'"0-9]/.test(source);
  const noMutation = !form.startsWith("primary") ? !/items\s*\[.*\]\s*=|items\.(?:append|pop|remove|clear)/.test(source) : !/readings\s*\[.*\]\s*=|readings\.(?:append|pop|remove|clear)/.test(source);
  const checks = {
    runs: safe && !/\bTODO\b/.test(source) && signature && returnAfterLoop,
    function_signature: signature,
    uses_for_loop: loop,
    uses_if_else: condition && branches,
    sample_return: has(source, cfg.accumulator) && returnAfterLoop && has(source, cfg.call),
    boundary_behavior: condition,
    unseen_reuse_no_mutation: signature && loop && condition && branches && noMutation && !/return\s+[\[{'"]/.test(source),
    derived_output_no_bypass: outputDerived,
  };
  const score = controlFlowChecks.filter((check) => checks[check]).length;
  const failedChecks = controlFlowChecks.filter((check) => !checks[check]);
  return { form, checks, score, passed: score === 8, failedChecks, misconceptionTags: [...new Set(failedChecks.map((check) => tags[check]))] };
}

function normalize(value) { return String(value ?? "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, ""); }
export function evaluateControlFlowExplanation(response) {
  const expected = { parameter: "parameters_receive_caller_inputs", loop_condition: "loop_each_item_condition_selects_one_append_branch", return: "return_completed_accumulator_after_loop" };
  const correctness = Object.fromEntries(controlFlowExplanationDimensions.map((key) => [key, normalize(response[key]) === expected[key]]));
  return { correctness, score: Object.values(correctness).filter(Boolean).length, passed: Object.values(correctness).every(Boolean) };
}

export function controlFlowRemediation(result, level) {
  const failed = result.failedChecks?.[0] || "control_flow";
  if (level <= 1) return `${failed}: trace one iteration and name the current parameter value.`;
  if (level === 2) return `${failed}: test the exact boundary; >= includes equality, then identify which branch appends.`;
  return `${failed}: keep append inside the loop and return once after all items; then retry unseen input.`;
}

export function getControlFlowFeedback(result, level) {
  if (!result) return { systemScore: "Awaiting a reusable function.", teacherRemediation: null };
  return {
    systemScore: `${result.score}/8 · ${result.passed ? "FORM PASS · all eight checks confirmed." : "FORM NOT YET COMPLETE."}`,
    teacherRemediation: result.passed ? null : controlFlowRemediation(result, level),
  };
}

export function getControlFlowExplanationFeedback(result) {
  if (!result) return { systemScore: "Awaiting the learner's three-part execution path.", teacherRemediation: null };
  return {
    systemScore: `${result.score}/3 · ${result.passed ? "EXPLANATION PASS · all three dimensions confirmed." : "EXPLANATION NOT YET COMPLETE."}`,
    teacherRemediation: result.passed ? null : "Trace parameters, one boundary iteration, the selected append branch, then the return after the loop.",
  };
}

function formComplete(correctness, form) { return controlFlowChecks.every((check) => correctness[form]?.[check] === true); }
export function sanitizeControlFlowEvidence(value) {
  if (!value || typeof value !== "object" || value.exerciseId !== exerciseAsset.exercise_id) return null;
  const checkCorrectness = {};
  for (const form of ["primary", "transfer", "explanation"]) {
    const keys = form === "explanation" ? controlFlowExplanationDimensions : controlFlowChecks;
    if (value.checkCorrectness?.[form]) checkCorrectness[form] = Object.fromEntries(keys.filter((key) => typeof value.checkCorrectness[form][key] === "boolean").map((key) => [key, value.checkCorrectness[form][key]]));
  }
  const strict = formComplete(checkCorrectness, "primary") && formComplete(checkCorrectness, "transfer") && controlFlowExplanationDimensions.every((key) => checkCorrectness.explanation?.[key] === true);
  let masteryStatus = ["in_progress", "remediation_required", "primary_complete", "transfer_complete", "mastered"].includes(value.masteryStatus) ? value.masteryStatus : "in_progress";
  if (masteryStatus === "mastered" && !strict) masteryStatus = formComplete(checkCorrectness, "transfer") ? "transfer_complete" : formComplete(checkCorrectness, "primary") ? "primary_complete" : "in_progress";
  return { exerciseId: exerciseAsset.exercise_id, lessonId: exerciseAsset.lesson_id, activityId: exerciseAsset.activity_id, assessmentId: exerciseAsset.assessment_id, objectiveIds: [], skillIds: [...exerciseAsset.skill_ids], form: ["primary", "transfer", "explanation"].includes(value.form) ? value.form : "primary", checkCorrectness, attemptCount: Math.min(99, Math.max(0, Number.isInteger(value.attemptCount) ? value.attemptCount : 0)), hintLevel: Math.min(3, Math.max(0, Number.isInteger(value.hintLevel) ? value.hintLevel : 0)), confidence: ["low", "medium", "high"].includes(value.confidence) ? value.confidence : null, misconceptionTags: Array.isArray(value.misconceptionTags) ? [...new Set(value.misconceptionTags.filter((tag) => validTags.has(tag)))] : [], masteryStatus };
}

export function updateControlFlowEvidence(previous, changes = {}) {
  const safe = sanitizeControlFlowEvidence(previous) || sanitizeControlFlowEvidence({ exerciseId: exerciseAsset.exercise_id });
  const checkCorrectness = { ...safe.checkCorrectness };
  if (changes.form && changes.correctness) checkCorrectness[changes.form] = changes.correctness;
  return sanitizeControlFlowEvidence({ ...safe, form: changes.form || safe.form, checkCorrectness, attemptCount: safe.attemptCount + (changes.incrementAttempt ? 1 : 0), hintLevel: Math.max(safe.hintLevel, changes.hintLevel || 0), confidence: changes.confidence || safe.confidence, misconceptionTags: changes.clearMisconceptionTags ? [] : [...safe.misconceptionTags, ...(changes.misconceptionTags || [])], masteryStatus: changes.masteryStatus || safe.masteryStatus });
}
