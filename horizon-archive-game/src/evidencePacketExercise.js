import exerciseAsset from "../../curriculum/lessons/L-05-07/exercise.json" with { type: "json" };
import manifestAsset from "../../curriculum/lessons/L-05-07/evidence/source_manifest.json" with { type: "json" };
import telemetryAsset from "../../curriculum/lessons/L-05-07/evidence/telemetry.json" with { type: "json" };

export const evidencePacketExercise = exerciseAsset;
export const evidenceManifest = manifestAsset;
export const evidenceTelemetry = telemetryAsset;

export const evidenceStarter = JSON.stringify({
  packet_id: manifestAsset.packet_id,
  simulation_mode: "offline_course_asset",
  fields: {
    structure_count: { value: null, source_ids: [], uncertainty: "TODO" },
    access_surface_detected: { value: null, source_ids: [], uncertainty: "TODO" },
    audible_response_detected: { value: null, source_ids: [], uncertainty: "TODO" },
    response_meaning: { value: null, source_ids: [], uncertainty: "TODO" },
  },
  modalities_reviewed: [],
  unsupported_value_policy: "null",
}, null, 2);

export const evidenceCheckCodes = [
  "E_PACKET_MODE",
  "E_FIELD_SET",
  "E_STRUCTURE_VALUE",
  "E_STRUCTURE_SOURCES",
  "E_ACCESS_FALSE",
  "E_ACCESS_SOURCES",
  "E_AUDIO_FALSE",
  "E_AUDIO_SOURCES",
  "E_RESPONSE_NULL",
  "E_RESPONSE_SOURCES",
  "E_MODALITIES",
  "E_UNCERTAINTY_POLICY",
];

const expectedFields = new Set([
  "structure_count",
  "access_surface_detected",
  "audible_response_detected",
  "response_meaning",
]);
const validTags = new Set([
  "invented-value",
  "missing-provenance",
  "false-is-null",
  "description-is-extraction",
  "simulation-is-live-service",
]);

const errorTags = {
  E_PACKET_MODE: ["simulation-is-live-service"],
  E_FIELD_SET: ["description-is-extraction"],
  E_STRUCTURE_VALUE: ["invented-value"],
  E_STRUCTURE_SOURCES: ["missing-provenance"],
  E_ACCESS_FALSE: ["false-is-null"],
  E_ACCESS_SOURCES: ["missing-provenance"],
  E_AUDIO_FALSE: ["false-is-null"],
  E_AUDIO_SOURCES: ["missing-provenance"],
  E_RESPONSE_NULL: ["invented-value", "false-is-null"],
  E_RESPONSE_SOURCES: ["missing-provenance"],
  E_MODALITIES: ["missing-provenance"],
};

const fallbackRemediation = {
  E_PACKET_MODE: "Keep the registered packet ID and label this deterministic run as an offline course asset.",
  E_UNCERTAINTY_POLICY: "Each field needs a meaningful uncertainty statement; unsupported values use the policy null.",
};

function exactSet(value, expected) {
  return Array.isArray(value) && value.length === expected.size && value.every((item) => expected.has(item));
}

function hasUncertainty(field) {
  const value = field?.uncertainty;
  return typeof value === "string" && value.trim().length >= 12 && value.trim() !== "TODO";
}

export function evaluateEvidencePacket(source) {
  let result;
  try {
    result = JSON.parse(source);
  } catch {
    return {
      parsed: false,
      passed: false,
      score: 0,
      checks: {},
      failedCodes: ["E_JSON_SYNTAX"],
      criticalMisses: [],
      misconceptionTags: [],
      feedback: "E_JSON_SYNTAX: The working file is not valid JSON. Check commas, quotation marks, brackets, and braces.",
    };
  }

  const fields = result?.fields && typeof result.fields === "object" && !Array.isArray(result.fields) ? result.fields : {};
  const structure = fields.structure_count || {};
  const access = fields.access_surface_detected || {};
  const audio = fields.audible_response_detected || {};
  const meaning = fields.response_meaning || {};
  const checks = {
    E_PACKET_MODE: result?.packet_id === "DA-PACKET-01" && result?.simulation_mode === "offline_course_asset",
    E_FIELD_SET: exactSet(Object.keys(fields), expectedFields),
    E_STRUCTURE_VALUE: Number.isInteger(structure.value) && structure.value === 1,
    E_STRUCTURE_SOURCES: exactSet(structure.source_ids, new Set(["DA-IMG-01"])),
    E_ACCESS_FALSE: access.value === false,
    E_ACCESS_SOURCES: exactSet(access.source_ids, new Set(["DA-IMG-01", "DA-TEL-01"])),
    E_AUDIO_FALSE: audio.value === false,
    E_AUDIO_SOURCES: exactSet(audio.source_ids, new Set(["DA-AUD-01", "DA-TEL-01"])),
    E_RESPONSE_NULL: Object.hasOwn(meaning, "value") && meaning.value === null,
    E_RESPONSE_SOURCES: exactSet(meaning.source_ids, new Set(["DA-IMG-01", "DA-AUD-01", "DA-TEL-01"])),
    E_MODALITIES: exactSet(result?.modalities_reviewed, new Set(["audio", "image", "telemetry"])),
    E_UNCERTAINTY_POLICY: [structure, access, audio, meaning].every(hasUncertainty) && result?.unsupported_value_policy === "null",
  };
  const failedCodes = evidenceCheckCodes.filter((code) => !checks[code]);
  const criticalMisses = failedCodes.filter((code) => exerciseAsset.critical_error_codes.includes(code));
  const misconceptionTags = [...new Set(failedCodes.flatMap((code) => errorTags[code] || []))];
  const score = evidenceCheckCodes.length - failedCodes.length;
  const firstFailure = failedCodes[0];
  return {
    parsed: true,
    passed: score === exerciseAsset.mastery.required_points && criticalMisses.length === 0,
    score,
    checks,
    failedCodes,
    criticalMisses,
    misconceptionTags,
    feedback: firstFailure
      ? `${firstFailure}: ${exerciseAsset.remediation_routes[firstFailure] || fallbackRemediation[firstFailure]}`
      : "PASS: 12/12 checks confirmed with registered provenance and the unsupported meaning preserved as null.",
  };
}

export function evidenceRemediation(result, level) {
  const code = result?.failedCodes?.[0];
  if (!code) return "All deterministic checks pass.";
  if (code === "E_JSON_SYNTAX") return "Compare opening and closing braces, then verify that every property except the last has a comma.";
  const route = exerciseAsset.remediation_routes[code] || fallbackRemediation[code];
  if (level <= 1) return `Cue — change only the boundary named by ${code}.`;
  if (level === 2) return `Provenance trace — ${route}`;
  return `Worked boundary — false means a bounded check measured no detection; null means this packet cannot support the requested value. Rebuild the named field without inventing an explanation.`;
}

export function sanitizeEvidencePacketMastery(value) {
  if (!value || typeof value !== "object" || value.exerciseId !== exerciseAsset.exercise_id) return null;
  const checkResults = {};
  if (value.checkResults && typeof value.checkResults === "object") {
    for (const code of evidenceCheckCodes) {
      if (typeof value.checkResults[code] === "boolean") checkResults[code] = value.checkResults[code];
    }
  }
  return {
    exerciseId: exerciseAsset.exercise_id,
    lessonId: exerciseAsset.lesson_id,
    activityId: exerciseAsset.activity_id,
    objectiveIds: [...exerciseAsset.objective_ids],
    skillIds: [...exerciseAsset.skill_ids],
    checkResults,
    attemptCount: Math.min(99, Math.max(0, Number.isInteger(value.attemptCount) ? value.attemptCount : 0)),
    hintLevel: Math.min(3, Math.max(0, Number.isInteger(value.hintLevel) ? value.hintLevel : 0)),
    confidence: ["low", "medium", "high"].includes(value.confidence) ? value.confidence : null,
    misconceptionTags: Array.isArray(value.misconceptionTags)
      ? [...new Set(value.misconceptionTags.filter((tag) => validTags.has(tag)))]
      : [],
    masteryStatus: ["in_progress", "remediation_required", "mastered"].includes(value.masteryStatus)
      ? value.masteryStatus
      : "in_progress",
  };
}

export function updateEvidencePacketMastery(previous, changes = {}) {
  const safe = sanitizeEvidencePacketMastery(previous)
    || sanitizeEvidencePacketMastery({ exerciseId: exerciseAsset.exercise_id });
  const checkResults = changes.checkResults && typeof changes.checkResults === "object"
    ? Object.fromEntries(evidenceCheckCodes.filter((code) => typeof changes.checkResults[code] === "boolean").map((code) => [code, changes.checkResults[code]]))
    : safe.checkResults;
  return {
    ...safe,
    checkResults,
    attemptCount: changes.incrementAttempt ? Math.min(99, safe.attemptCount + 1) : safe.attemptCount,
    hintLevel: Math.max(safe.hintLevel, Number.isInteger(changes.hintLevel) ? Math.min(3, changes.hintLevel) : 0),
    confidence: ["low", "medium", "high"].includes(changes.confidence) ? changes.confidence : safe.confidence,
    misconceptionTags: [...new Set([
      ...safe.misconceptionTags,
      ...(Array.isArray(changes.misconceptionTags) ? changes.misconceptionTags.filter((tag) => validTags.has(tag)) : []),
    ])],
    masteryStatus: ["in_progress", "remediation_required", "mastered"].includes(changes.masteryStatus)
      ? changes.masteryStatus
      : safe.masteryStatus,
  };
}
