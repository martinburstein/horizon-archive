import exerciseAsset from "../../curriculum/lessons/L-02-03/exercise.json" with { type: "json" };
import scenarioBank from "../../curriculum/lessons/L-02-03/scenario_bank.json" with { type: "json" };
import answerKey from "../../curriculum/lessons/L-02-03/answer_key.json" with { type: "json" };

export const modelChoiceExercise = exerciseAsset;
export const modelChoicePrimaryScenarios = scenarioBank.forms.primary;
export const modelChoiceDimensions = exerciseAsset.dimensions;

const distractors = {
  P01: { decision: "retrieve_exact_fact_from_database", reason: "generation_is_deterministic_when_a_prompt_repeats" },
  P02: { decision: "choose_text_only_model", reason: "model_popularity_overrides_required_input_modality" },
  P03: { decision: "choose_largest_model", reason: "model_size_always_outweighs_measured_quality_latency_and_cost" },
  P04: { decision: "provisioned_deployment", reason: "provisioned_is_pay_per_token_for_variable_workloads" },
  P05: { decision: "standard_deployment", reason: "standard_reserves_capacity_for_predictable_throughput" },
  P06: { decision: "global_processing", reason: "global_processing_means_one_deployment_region" },
  P07: { decision: "raise_temperature", reason: "temperature_guarantees_factual_truth" },
  P08: { decision: "set_context_window", reason: "max_output_tokens_equals_total_context_capacity" },
};

const misconceptionByScenario = {
  P01: "model-is-a-database", P02: "largest-model-always-best", P03: "largest-model-always-best",
  P04: "provisioned-is-pay-per-token", P05: "provisioned-is-pay-per-token", P06: "global-means-single-region",
  P07: "temperature-guarantees-truth", P08: "max-output-tokens-is-context-window",
};
const validTags = new Set(exerciseAsset.misconception_tags);

export function getModelChoiceOptions(scenarioId) {
  const expected = answerKey.forms.primary[scenarioId];
  const wrong = distractors[scenarioId];
  if (!expected || !wrong) return null;
  return {
    decision: [expected.decision, wrong.decision],
    reason: [expected.reason, wrong.reason],
  };
}

export function evaluateModelChoiceScenario(scenarioId, response) {
  const expected = answerKey.forms.primary[scenarioId];
  if (!expected) return null;
  const correctness = Object.fromEntries(modelChoiceDimensions.map((dimension) => [dimension, response[dimension] === expected[dimension]]));
  return {
    scenarioId,
    correctness,
    score: Object.values(correctness).filter(Boolean).length,
    passed: Object.values(correctness).every(Boolean),
    misconceptionTags: Object.values(correctness).every(Boolean) ? [] : [misconceptionByScenario[scenarioId]],
  };
}

export function modelChoiceRemediation(scenario, result, level) {
  const missed = modelChoiceDimensions.filter((dimension) => !result.correctness[dimension]);
  if (level <= 1) return `Review ${missed.join(" and ")}. Name the requirement, then identify whether it belongs to model, deployment, or request configuration.`;
  if (level === 2) return `Compare the two options for this ${scenario.topic.replaceAll("_", " ")} card. Which one directly satisfies the stated requirement?`;
  return "State the tradeoff and its boundary. Do not treat model size, deployment labels, or request parameters as interchangeable.";
}

export function sanitizeModelChoiceEvidence(value) {
  if (!value || typeof value !== "object" || value.exerciseId !== exerciseAsset.exercise_id) return null;
  const itemCorrectness = {};
  for (const scenario of modelChoicePrimaryScenarios) {
    if (!value.itemCorrectness?.[scenario.id]) continue;
    itemCorrectness[scenario.id] = Object.fromEntries(modelChoiceDimensions
      .filter((dimension) => typeof value.itemCorrectness[scenario.id][dimension] === "boolean")
      .map((dimension) => [dimension, value.itemCorrectness[scenario.id][dimension]]));
  }
  return {
    exerciseId: exerciseAsset.exercise_id,
    lessonId: exerciseAsset.lesson_id,
    activityId: exerciseAsset.activity_id,
    assessmentId: exerciseAsset.assessment_id,
    objectiveIds: [...exerciseAsset.objective_ids],
    skillIds: [...exerciseAsset.skill_ids],
    form: "primary",
    itemCorrectness,
    attemptCount: Math.min(99, Math.max(0, Number.isInteger(value.attemptCount) ? value.attemptCount : 0)),
    hintLevel: Math.min(3, Math.max(0, Number.isInteger(value.hintLevel) ? value.hintLevel : 0)),
    confidence: ["low", "medium", "high"].includes(value.confidence) ? value.confidence : null,
    misconceptionTags: Array.isArray(value.misconceptionTags) ? [...new Set(value.misconceptionTags.filter((tag) => validTags.has(tag)))] : [],
    masteryStatus: ["in_progress", "remediation_required", "primary_complete"].includes(value.masteryStatus) ? value.masteryStatus : "in_progress",
  };
}

export function updateModelChoiceEvidence(previous, changes = {}) {
  const safe = sanitizeModelChoiceEvidence(previous) || sanitizeModelChoiceEvidence({ exerciseId: exerciseAsset.exercise_id });
  const itemCorrectness = { ...safe.itemCorrectness };
  if (changes.scenarioId && changes.correctness) itemCorrectness[changes.scenarioId] = changes.correctness;
  return sanitizeModelChoiceEvidence({
    ...safe,
    itemCorrectness,
    attemptCount: safe.attemptCount + (changes.incrementAttempt ? 1 : 0),
    hintLevel: Math.max(safe.hintLevel, changes.hintLevel || 0),
    confidence: changes.confidence || safe.confidence,
    misconceptionTags: changes.clearMisconceptionTags ? [] : [...safe.misconceptionTags, ...(changes.misconceptionTags || [])],
    masteryStatus: changes.masteryStatus || safe.masteryStatus,
  });
}
