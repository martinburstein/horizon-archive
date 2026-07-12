import exerciseAsset from "../../curriculum/lessons/L-02-02/exercise.json" with { type: "json" };
import scenarioBank from "../../curriculum/lessons/L-02-02/scenario_bank.json" with { type: "json" };
import answerKey from "../../curriculum/lessons/L-02-02/answer_key.json" with { type: "json" };

export const responsibleAIExercise = exerciseAsset;
export const responsibleAIPrimaryScenarios = scenarioBank.forms.primary;
export const responsibleAIPrinciples = scenarioBank.principles;
export const responsibleAIDimensions = exerciseAsset.dimensions;

const validTags = new Set(exerciseAsset.misconception_tags);
const scenarioTags = {
  P01: "fairness-means-identical-outcomes", P02: "reliability-is-one-successful-test",
  P03: "privacy-is-only-secrecy", P04: "accessibility-is-polish",
  P05: "disclosure-alone-solves-harm", P06: "platform-is-accountable-owner",
};

export function evaluateResponsibleAIScenario(scenarioId, response) {
  const expected = answerKey.forms.primary[scenarioId];
  if (!expected) return null;
  const correctness = Object.fromEntries(responsibleAIDimensions.map((dimension) => [dimension, response[dimension] === expected[dimension]]));
  return {
    scenarioId,
    correctness,
    score: Object.values(correctness).filter(Boolean).length,
    passed: Object.values(correctness).every(Boolean),
    misconceptionTags: Object.values(correctness).every(Boolean) ? [] : [scenarioTags[scenarioId]],
  };
}

export function responsibleAIRemediation(result, level) {
  const missed = responsibleAIDimensions.filter((dimension) => !result.correctness[dimension]);
  if (level <= 1) return `Check ${missed.join(", ")}. Name who experiences the consequence before choosing the primary principle.`;
  if (level === 2) return "Compare the nearest principles, then choose a mitigation that can be observed or tested.";
  return "The owner must be a human or organizational role with authority to monitor, appeal, and remedy—not a model, platform, device, or slogan.";
}

export function sanitizeResponsibleAIEvidence(value) {
  if (!value || typeof value !== "object" || value.exerciseId !== exerciseAsset.exercise_id) return null;
  const dimensionCorrectness = {};
  for (const scenario of responsibleAIPrimaryScenarios) {
    if (!value.dimensionCorrectness?.[scenario.id]) continue;
    dimensionCorrectness[scenario.id] = Object.fromEntries(responsibleAIDimensions
      .filter((dimension) => typeof value.dimensionCorrectness[scenario.id][dimension] === "boolean")
      .map((dimension) => [dimension, value.dimensionCorrectness[scenario.id][dimension]]));
  }
  return {
    exerciseId: exerciseAsset.exercise_id,
    lessonId: exerciseAsset.lesson_id,
    activityId: exerciseAsset.activity_id,
    assessmentId: exerciseAsset.assessment_id,
    objectiveIds: [...exerciseAsset.objective_ids],
    skillIds: [...exerciseAsset.skill_ids],
    form: "primary",
    dimensionCorrectness,
    attemptCount: Math.min(99, Math.max(0, Number.isInteger(value.attemptCount) ? value.attemptCount : 0)),
    hintLevel: Math.min(3, Math.max(0, Number.isInteger(value.hintLevel) ? value.hintLevel : 0)),
    confidence: ["low", "medium", "high"].includes(value.confidence) ? value.confidence : null,
    misconceptionTags: Array.isArray(value.misconceptionTags) ? [...new Set(value.misconceptionTags.filter((tag) => validTags.has(tag)))] : [],
    masteryStatus: ["in_progress", "remediation_required", "primary_complete"].includes(value.masteryStatus) ? value.masteryStatus : "in_progress",
  };
}

export function updateResponsibleAIEvidence(previous, changes = {}) {
  const safe = sanitizeResponsibleAIEvidence(previous) || sanitizeResponsibleAIEvidence({ exerciseId: exerciseAsset.exercise_id });
  const dimensionCorrectness = { ...safe.dimensionCorrectness };
  if (changes.scenarioId && changes.correctness) dimensionCorrectness[changes.scenarioId] = changes.correctness;
  return sanitizeResponsibleAIEvidence({
    ...safe, dimensionCorrectness,
    attemptCount: safe.attemptCount + (changes.incrementAttempt ? 1 : 0),
    hintLevel: Math.max(safe.hintLevel, changes.hintLevel || 0),
    confidence: changes.confidence || safe.confidence,
    misconceptionTags: changes.clearMisconceptionTags ? [] : [...safe.misconceptionTags, ...(changes.misconceptionTags || [])],
    masteryStatus: changes.masteryStatus || safe.masteryStatus,
  });
}
