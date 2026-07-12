import exerciseAsset from "../../curriculum/lessons/L-04-03/exercise.json" with { type: "json" };
import scenarioBank from "../../curriculum/lessons/L-04-03/scenario_bank.json" with { type: "json" };
import answerKey from "../../curriculum/lessons/L-04-03/answer_key.json" with { type: "json" };

export const visualWorkloadExercise = exerciseAsset;
export const visualPrimaryScenarios = scenarioBank.forms.primary;
export const visualTransferScenarios = scenarioBank.forms.transfer;
export const visualDimensions = exerciseAsset.dimensions;
export const visualExplanationDimensions = ["existing_or_new", "input_modalities", "required_output", "media_handling"];
export const visualDialogDescriptionIds = ["visual-offline-warning", "visual-text-equivalent", "visual-deprecation-warning"];
export const visualDialogDescribedBy = visualDialogDescriptionIds.join(" ");

const distractors = {
  image_analysis: { decision: "image_generation", reason: "existing_pixels_are_replaced_by_a_new_visual" },
  multimodal_visual_prompt: { decision: "image_analysis", reason: "all_visual_questions_return_only_fixed_image_labels" },
  image_generation: { decision: "video_generation", reason: "every_generated_visual_is_time_based_media" },
  video_generation: { decision: "image_generation", reason: "a_motion_sequence_is_a_single_still_visual" },
  P05: { decision: "send_file_without_validation", reason: "paths_and_media_types_cannot_affect_visual_requests" },
  P06: { decision: "treat_all_outputs_as_json", reason: "generated_media_and_analysis_records_are_interchangeable" },
  T05: { decision: "send_mismatched_media_metadata", reason: "declared_type_never_affects_routing_or_parsing" },
  T06: { decision: "parse_every_output_as_media", reason: "structured_labels_and_media_references_are_interchangeable" },
};
const tags = { image_analysis: "analysis-is-generation", multimodal_visual_prompt: "vision-tool-is-any-multimodal-model", image_generation: "image-generation-is-video-generation", video_generation: "image-generation-is-video-generation", P05: "ignores-media-type", T05: "ignores-media-type", P06: "treats-json-as-media", T06: "treats-json-as-media" };
const validTags = new Set(exerciseAsset.misconception_tags);
const allScenarios = [...visualPrimaryScenarios, ...visualTransferScenarios];

export function getVisualOptions(id, form = id?.startsWith("T") ? "transfer" : "primary") {
  const scenario = scenarioBank.forms[form].find((item) => item.id === id);
  const expected = answerKey.forms[form][id];
  const wrong = distractors[id] || distractors[scenario.topic];
  return { decision: [expected.decision, wrong.decision], reason: [expected.reason, wrong.reason] };
}

export function evaluateVisualScenario(id, response, form = id?.startsWith("T") ? "transfer" : "primary") {
  const expected = answerKey.forms[form]?.[id];
  if (!expected) return null;
  const correctness = Object.fromEntries(visualDimensions.map((key) => [key, response[key] === expected[key]]));
  const passed = Object.values(correctness).every(Boolean);
  const scenario = scenarioBank.forms[form].find((item) => item.id === id);
  return { correctness, score: Object.values(correctness).filter(Boolean).length, passed, misconceptionTags: passed ? [] : [tags[id] || tags[scenario.topic]] };
}

function normalize(value) { return String(value ?? "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, ""); }
export function evaluateVisualExplanation(response) {
  const expected = {
    existing_or_new: "analysis_interprets_existing_media_generation_creates_new_media",
    input_modalities: "multimodal_visual_prompt_combines_visual_and_text_inputs",
    required_output: "image_generation_returns_still_media_video_generation_returns_time_based_media",
    media_handling: "validate_path_type_then_parse_analysis_json_or_handle_generated_media",
  };
  const correctness = Object.fromEntries(visualExplanationDimensions.map((key) => [key, normalize(response[key]) === expected[key]]));
  return { correctness, score: Object.values(correctness).filter(Boolean).length, passed: Object.values(correctness).every(Boolean) };
}

export function visualRemediation(scenario, result, level) {
  const missed = visualDimensions.filter((key) => !result.correctness[key]);
  if (level <= 1) return `Review ${missed.join(" and ")}: identify existing versus new media and the required output.`;
  if (level === 2) return `Contrast analysis, multimodal prompting, image generation, and video generation for this ${scenario.topic.replaceAll("_", " ")} card.`;
  return "Validate the media path and declared type, then branch structured analysis JSON from generated-media handling.";
}
export function getVisualFeedback(scenario, result, level) { if (!result) return { systemScore: "Awaiting both visual-workload dimensions.", teacherRemediation: null }; return { systemScore: `${result.score}/2 · ${result.passed ? "CHOICE PASS · both dimensions confirmed." : "CHOICE NOT YET COMPLETE."}`, teacherRemediation: result.passed ? null : visualRemediation(scenario, result, level) }; }
export function getVisualExplanationFeedback(result) { if (!result) return { systemScore: "Awaiting the learner's four-part visual workload explanation.", teacherRemediation: null }; return { systemScore: `${result.score}/4 · ${result.passed ? "EXPLANATION PASS · all four dimensions confirmed." : "EXPLANATION NOT YET COMPLETE."}`, teacherRemediation: result.passed ? null : "Trace existing versus new media, input modalities, required output, and JSON-versus-media handling." }; }

function complete(correctness, scenarios) { return scenarios.every((scenario) => visualDimensions.every((key) => correctness[scenario.id]?.[key] === true)); }
export function sanitizeVisualEvidence(value) {
  if (!value || typeof value !== "object" || value.exerciseId !== exerciseAsset.exercise_id) return null;
  const dimensionCorrectness = {};
  for (const scenario of [...allScenarios, { id: "explanation", dimensions: visualExplanationDimensions }]) {
    const keys = scenario.dimensions || visualDimensions;
    if (value.dimensionCorrectness?.[scenario.id]) dimensionCorrectness[scenario.id] = Object.fromEntries(keys.filter((key) => typeof value.dimensionCorrectness[scenario.id][key] === "boolean").map((key) => [key, value.dimensionCorrectness[scenario.id][key]]));
  }
  const strict = complete(dimensionCorrectness, visualPrimaryScenarios) && complete(dimensionCorrectness, visualTransferScenarios) && visualExplanationDimensions.every((key) => dimensionCorrectness.explanation?.[key] === true);
  let masteryStatus = ["in_progress", "remediation_required", "primary_complete", "transfer_complete", "mastered"].includes(value.masteryStatus) ? value.masteryStatus : "in_progress";
  if (masteryStatus === "mastered" && !strict) masteryStatus = complete(dimensionCorrectness, visualTransferScenarios) ? "transfer_complete" : complete(dimensionCorrectness, visualPrimaryScenarios) ? "primary_complete" : "in_progress";
  return { exerciseId: exerciseAsset.exercise_id, lessonId: exerciseAsset.lesson_id, activityId: exerciseAsset.activity_id, assessmentIds: [exerciseAsset.assessment_id], objectiveIds: [...exerciseAsset.objective_ids], skillIds: [...exerciseAsset.skill_ids], form: ["primary", "transfer", "explanation"].includes(value.form) ? value.form : "primary", dimensionCorrectness, attemptCount: Math.min(99, Math.max(0, Number.isInteger(value.attemptCount) ? value.attemptCount : 0)), hintLevel: Math.min(3, Math.max(0, Number.isInteger(value.hintLevel) ? value.hintLevel : 0)), confidence: ["low", "medium", "high"].includes(value.confidence) ? value.confidence : null, misconceptionTags: Array.isArray(value.misconceptionTags) ? [...new Set(value.misconceptionTags.filter((tag) => validTags.has(tag)))] : [], masteryStatus };
}
export function updateVisualEvidence(previous, changes = {}) {
  const safe = sanitizeVisualEvidence(previous) || sanitizeVisualEvidence({ exerciseId: exerciseAsset.exercise_id });
  const dimensionCorrectness = { ...safe.dimensionCorrectness };
  if (changes.scenarioId && changes.correctness) dimensionCorrectness[changes.scenarioId] = changes.correctness;
  return sanitizeVisualEvidence({ ...safe, form: changes.form || safe.form, dimensionCorrectness, attemptCount: safe.attemptCount + (changes.incrementAttempt ? 1 : 0), hintLevel: Math.max(safe.hintLevel, changes.hintLevel || 0), confidence: changes.confidence || safe.confidence, misconceptionTags: changes.clearMisconceptionTags ? [] : [...safe.misconceptionTags, ...(changes.misconceptionTags || [])], masteryStatus: changes.masteryStatus || safe.masteryStatus });
}
