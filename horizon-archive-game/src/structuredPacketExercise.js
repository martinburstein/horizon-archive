import exerciseAsset from "../../curriculum/lessons/L-03-01/exercise.json" with { type: "json" };

export const structuredPacketExercise = exerciseAsset;
export const structuredPacketStarters = {
  primary: `import json

raw_json = '{"terminal":"basin-7","observations":[{"kind":"audio","values":["whistle"]}],"meta":{"complete":false}}'
packet = json.loads(raw_json)

# TODO 1: append the image record to packet["observations"].
# TODO 2: set packet["meta"]["complete"] to True.
# TODO 3: derive first_kind and last_value through nested access.
first_kind = ""
last_value = ""

encoded = json.dumps(packet, sort_keys=True)
print(first_kind)
print(last_value)
print(encoded)`,
  transfer: `import json

raw_json = '{"terminal":"ridge-2","readings":[{"sensor":"wind","values":[12,15]}],"meta":{"verified":false}}'
packet = json.loads(raw_json)

# TODO 1: append the light record to packet["readings"].
# TODO 2: set packet["meta"]["verified"] to True.
# TODO 3: derive second_sensor and first_value through nested access.
second_sensor = ""
first_value = 0

encoded = json.dumps(packet, sort_keys=True)
print(second_sensor)
print(first_value)
print(encoded)`,
};
export const structuredPacketChecks = [
  "runs", "json_to_nested_containers", "appends_record", "updates_nested_flag",
  "first_nested_access", "second_nested_access", "json_round_trip", "derived_output_no_bypass",
];
export const structuredPacketExplanationDimensions = ["container_path", "nested_access", "json_round_trip"];

const formConfig = {
  primary: {
    raw: `'${"{\"terminal\":\"basin-7\",\"observations\":[{\"kind\":\"audio\",\"values\":[\"whistle\"]}],\"meta\":{\"complete\":false}}"}'`,
    append: 'packet["observations"].append({"kind": "image", "values": ["arch", "blue"]})',
    update: 'packet["meta"]["complete"] = True',
    first: 'first_kind = packet["observations"][0]["kind"]',
    second: 'last_value = packet["observations"][1]["values"][-1]',
    prints: ["print(first_kind)", "print(last_value)", "print(encoded)"],
  },
  transfer: {
    raw: `'${"{\"terminal\":\"ridge-2\",\"readings\":[{\"sensor\":\"wind\",\"values\":[12,15]}],\"meta\":{\"verified\":false}}"}'`,
    append: 'packet["readings"].append({"sensor": "light", "values": [3, 5]})',
    update: 'packet["meta"]["verified"] = True',
    first: 'second_sensor = packet["readings"][1]["sensor"]',
    second: 'first_value = packet["readings"][1]["values"][0]',
    prints: ["print(second_sensor)", "print(first_value)", "print(encoded)"],
  },
};

const tagByCheck = {
  json_to_nested_containers: "json-is-python-object", appends_record: "append-replaces-list",
  updates_nested_flag: "nested-update-wrong-level", first_nested_access: "dictionary-index-confusion",
  second_nested_access: "list-key-confusion", json_round_trip: "json-is-python-object",
  derived_output_no_bypass: "hardcoded-output", runs: "nested-update-wrong-level",
};
const validTags = new Set(exerciseAsset.misconception_tags);

function compact(line) {
  return line.replace(/\s+/g, " ").trim();
}

function hasLine(source, expected) {
  return source.split(/\r?\n/).some((line) => compact(line) === expected);
}

export function evaluateStructuredPacketSource(source, form = "primary") {
  const cfg = formConfig[form];
  const safe = typeof source === "string" && !/(?:eval|exec|open|__import__|subprocess|os\.|sys\.|fetch|while\s+True)/.test(source);
  const suppliedPacket = hasLine(source, `raw_json = ${cfg.raw}`) && hasLine(source, "packet = json.loads(raw_json)");
  const checks = {
    runs: safe && suppliedPacket && !/\bTODO\b/.test(source),
    json_to_nested_containers: suppliedPacket,
    appends_record: hasLine(source, cfg.append),
    updates_nested_flag: hasLine(source, cfg.update),
    first_nested_access: hasLine(source, cfg.first),
    second_nested_access: hasLine(source, cfg.second),
    json_round_trip: hasLine(source, "encoded = json.dumps(packet, sort_keys=True)"),
    derived_output_no_bypass: cfg.prints.every((line) => hasLine(source, line)) && !/print\s*\(\s*["']/.test(source),
  };
  const score = structuredPacketChecks.filter((check) => checks[check]).length;
  const failedChecks = structuredPacketChecks.filter((check) => !checks[check]);
  return { form, checks, score, passed: score === 8, failedChecks, misconceptionTags: [...new Set(failedChecks.map((check) => tagByCheck[check]))] };
}

function normalize(value) {
  return String(value ?? "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
}

export function evaluateStructuredPacketExplanation(response) {
  const expected = {
    container_path: "dictionary_list_dictionary_list_value",
    nested_access: "packet_readings_1_values_0",
    json_round_trip: "json_text_loads_python_object_dumps_json_text",
  };
  const correctness = Object.fromEntries(structuredPacketExplanationDimensions.map((dimension) => [dimension, normalize(response[dimension]) === expected[dimension]]));
  return { correctness, score: Object.values(correctness).filter(Boolean).length, passed: Object.values(correctness).every(Boolean) };
}

export function structuredPacketRemediation(result, level) {
  const failed = result.failedChecks?.[0] || "data_path";
  if (level <= 1) return `${failed}: name the current container type before choosing a bracket.`;
  if (level === 2) return `${failed}: trace one bracket at a time; string keys open dictionaries and numeric indexes select list items.`;
  return `${failed}: keep the Python object separate from JSON text, fix only this operation, then rerun.`;
}

export function getStructuredPacketFeedback(result, level) {
  if (!result) return { systemScore: "Awaiting a structure-preserving run.", teacherRemediation: null };
  return {
    systemScore: `${result.score}/8 · ${result.passed ? "FORM PASS · all eight checks confirmed." : "FORM NOT YET COMPLETE."}`,
    teacherRemediation: result.passed ? null : structuredPacketRemediation(result, level),
  };
}

export function getStructuredExplanationFeedback(result) {
  if (!result) return { systemScore: "Awaiting the learner's three-part explanation.", teacherRemediation: null };
  return {
    systemScore: `${result.score}/3 · ${result.passed ? "EXPLANATION PASS · all three dimensions confirmed." : "EXPLANATION NOT YET COMPLETE."}`,
    teacherRemediation: result.passed ? null : "Trace dictionary keys, list indexes, and the serialization boundary separately.",
  };
}

function complete(checkCorrectness, form) {
  return structuredPacketChecks.every((check) => checkCorrectness[form]?.[check] === true);
}

export function sanitizeStructuredPacketEvidence(value) {
  if (!value || typeof value !== "object" || value.exerciseId !== exerciseAsset.exercise_id) return null;
  const checkCorrectness = {};
  for (const form of ["primary", "transfer", "explanation"]) {
    const keys = form === "explanation" ? structuredPacketExplanationDimensions : structuredPacketChecks;
    if (!value.checkCorrectness?.[form]) continue;
    checkCorrectness[form] = Object.fromEntries(keys.filter((key) => typeof value.checkCorrectness[form][key] === "boolean").map((key) => [key, value.checkCorrectness[form][key]]));
  }
  const strict = complete(checkCorrectness, "primary") && complete(checkCorrectness, "transfer") && structuredPacketExplanationDimensions.every((key) => checkCorrectness.explanation?.[key] === true);
  let masteryStatus = ["in_progress", "remediation_required", "primary_complete", "transfer_complete", "mastered"].includes(value.masteryStatus) ? value.masteryStatus : "in_progress";
  if (masteryStatus === "mastered" && !strict) masteryStatus = complete(checkCorrectness, "transfer") ? "transfer_complete" : complete(checkCorrectness, "primary") ? "primary_complete" : "in_progress";
  return {
    exerciseId: exerciseAsset.exercise_id, lessonId: exerciseAsset.lesson_id, activityId: exerciseAsset.activity_id,
    assessmentIds: [...exerciseAsset.assessment_ids], objectiveIds: [], skillIds: [...exerciseAsset.skill_ids],
    form: ["primary", "transfer", "explanation"].includes(value.form) ? value.form : "primary", checkCorrectness,
    attemptCount: Math.min(99, Math.max(0, Number.isInteger(value.attemptCount) ? value.attemptCount : 0)),
    hintLevel: Math.min(3, Math.max(0, Number.isInteger(value.hintLevel) ? value.hintLevel : 0)),
    confidence: ["low", "medium", "high"].includes(value.confidence) ? value.confidence : null,
    misconceptionTags: Array.isArray(value.misconceptionTags) ? [...new Set(value.misconceptionTags.filter((tag) => validTags.has(tag)))] : [], masteryStatus,
  };
}

export function updateStructuredPacketEvidence(previous, changes = {}) {
  const safe = sanitizeStructuredPacketEvidence(previous) || sanitizeStructuredPacketEvidence({ exerciseId: exerciseAsset.exercise_id });
  const checkCorrectness = { ...safe.checkCorrectness };
  if (changes.form && changes.correctness) checkCorrectness[changes.form] = changes.correctness;
  return sanitizeStructuredPacketEvidence({ ...safe, form: changes.form || safe.form, checkCorrectness,
    attemptCount: safe.attemptCount + (changes.incrementAttempt ? 1 : 0), hintLevel: Math.max(safe.hintLevel, changes.hintLevel || 0),
    confidence: changes.confidence || safe.confidence, misconceptionTags: changes.clearMisconceptionTags ? [] : [...safe.misconceptionTags, ...(changes.misconceptionTags || [])], masteryStatus: changes.masteryStatus || safe.masteryStatus });
}
