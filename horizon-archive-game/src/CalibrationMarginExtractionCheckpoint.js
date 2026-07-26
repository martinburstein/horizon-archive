import {
  CALIBRATION_MARGIN_IE_DIMENSIONS,
} from "./CalibrationMarginInformationExtraction.js";

export const CALIBRATION_MARGIN_EXTRACTION_CHECKPOINT_VERSION =
  "rp003.extraction-checkpoint.v1";
export const CALIBRATION_MARGIN_EXTRACTION_SHELL_VERSION =
  "SS-RP003-IE01-v1";

const packetId = "RP-003";
const mappingId = "RP003-A3-CALIBRATION-MARGIN";
const recordKeys = Object.freeze([
  "packet_id",
  "mapping_id",
  "form",
  "skill_or_objective_id",
  "dimension_correctness",
  "attempt_count",
  "hint_level",
  "confidence",
  "misconception_tags",
  "mastery_status",
]);
const checkpointKeys = Object.freeze([
  "version",
  "shellVersion",
  "packetId",
  "mappingId",
  "checkpoint",
  "continuation",
  "cityStateDelta",
  "worldStateDelta",
  "accessStateDelta",
  "successor",
  "evidence",
]);
const forms = Object.freeze([
  Object.freeze({ form: "primary", dimensions: CALIBRATION_MARGIN_IE_DIMENSIONS }),
  Object.freeze({ form: "retrieval", dimensions: CALIBRATION_MARGIN_IE_DIMENSIONS }),
  Object.freeze({ form: "transfer", dimensions: CALIBRATION_MARGIN_IE_DIMENSIONS }),
  Object.freeze({
    form: "unsupported_explanation",
    dimensions: Object.freeze(["unavailable_input_cannot_support_value"]),
  }),
]);
const prefixes = Object.freeze({
  "IE-P0": 0,
  "IE-P1": 1,
  "IE-P2": 2,
  "IE-P3": 4,
});
const checkpointsByLength = Object.freeze({
  0: "IE-P0",
  1: "IE-P1",
  2: "IE-P2",
  4: "IE-P3",
});
const confidences = Object.freeze([null, "low", "medium", "high"]);

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function exactKeys(value, expected) {
  return value && typeof value === "object" && !Array.isArray(value)
    && Object.keys(value).sort().join("|") === [...expected].sort().join("|");
}

function exactCorrectness(value, dimensions) {
  return exactKeys(value, dimensions)
    && dimensions.every((dimension) => value[dimension] === true);
}

function exactRecord(value, index) {
  const specification = forms[index];
  return specification
    && exactKeys(value, recordKeys)
    && value.packet_id === packetId
    && value.mapping_id === mappingId
    && value.form === specification.form
    && value.skill_or_objective_id === "RP003-IE-01"
    && exactCorrectness(value.dimension_correctness, specification.dimensions)
    && Number.isInteger(value.attempt_count)
    && value.attempt_count >= 1
    && value.attempt_count <= 99
    && Number.isInteger(value.hint_level)
    && value.hint_level >= 0
    && value.hint_level <= 3
    && confidences.includes(value.confidence)
    && Array.isArray(value.misconception_tags)
    && value.misconception_tags.length === 0
    && value.mastery_status === "mastered";
}

function freezeCheckpoint(value) {
  return Object.freeze({
    ...value,
    evidence: Object.freeze(value.evidence.map((record) => Object.freeze({
      ...record,
      dimension_correctness: Object.freeze({ ...record.dimension_correctness }),
      misconception_tags: Object.freeze([...record.misconception_tags]),
    }))),
  });
}

export function createCalibrationMarginExtractionP0() {
  return freezeCheckpoint({
    version: CALIBRATION_MARGIN_EXTRACTION_CHECKPOINT_VERSION,
    shellVersion: CALIBRATION_MARGIN_EXTRACTION_SHELL_VERSION,
    packetId,
    mappingId,
    checkpoint: "IE-P0",
    continuation: "continuation",
    cityStateDelta: null,
    worldStateDelta: null,
    accessStateDelta: null,
    successor: null,
    evidence: [],
  });
}

export function sanitizeCalibrationMarginExtractionCheckpoint(value) {
  if (!exactKeys(value, checkpointKeys)
    || value.version !== CALIBRATION_MARGIN_EXTRACTION_CHECKPOINT_VERSION
    || value.shellVersion !== CALIBRATION_MARGIN_EXTRACTION_SHELL_VERSION
    || value.packetId !== packetId
    || value.mappingId !== mappingId
    || value.continuation !== "continuation"
    || value.cityStateDelta !== null
    || value.worldStateDelta !== null
    || value.accessStateDelta !== null
    || value.successor !== null
    || !Array.isArray(value.evidence)
    || prefixes[value.checkpoint] !== value.evidence.length
    || value.evidence.some((record, index) => !exactRecord(record, index))) {
    return null;
  }
  return freezeCheckpoint(clone(value));
}

export function createCalibrationMarginExtractionEvidenceRecord(
  form,
  correctness,
  { attempts = 1, hints = 0, confidence = null } = {},
) {
  const index = forms.findIndex((specification) => specification.form === form);
  const dimensionCorrectness = Object.fromEntries(
    (forms[index]?.dimensions ?? []).map(
      (dimension) => [dimension, correctness?.[dimension] === true],
    ),
  );
  const record = {
    packet_id: packetId,
    mapping_id: mappingId,
    form,
    skill_or_objective_id: "RP003-IE-01",
    dimension_correctness: dimensionCorrectness,
    attempt_count: Math.max(1, Math.min(
      99,
      Number.isInteger(attempts) ? attempts : 1,
    )),
    hint_level: Math.max(0, Math.min(
      3,
      Number.isInteger(hints) ? hints : 0,
    )),
    confidence: confidences.includes(confidence) ? confidence : null,
    misconception_tags: [],
    mastery_status: "mastered",
  };
  return exactRecord(record, index)
    ? Object.freeze({
      ...record,
      dimension_correctness: Object.freeze(dimensionCorrectness),
      misconception_tags: Object.freeze([]),
    })
    : null;
}

export function createCalibrationMarginExtractionCheckpointAdapter(options = {}) {
  const restored = sanitizeCalibrationMarginExtractionCheckpoint(options.restoredState);
  let state = restored ?? createCalibrationMarginExtractionP0();
  const commit = typeof options.commit === "function" ? options.commit : () => true;

  return Object.freeze({
    getState() {
      return clone(state);
    },
    getRestoration() {
      return Object.freeze({
        valid: options.restoredState == null || restored !== null,
        checkpoint: state.checkpoint,
      });
    },
    append(records) {
      const batch = Array.isArray(records) ? records : [records];
      const start = state.evidence.length;
      const end = start + batch.length;
      const nextCheckpoint = checkpointsByLength[end];
      if (!nextCheckpoint
        || batch.length < 1
        || batch.some((record, offset) => !exactRecord(record, start + offset))) {
        return Object.freeze({
          status: "rejected",
          reason: "ordered_allowlisted_record_set_required",
          state: clone(state),
        });
      }
      const candidate = sanitizeCalibrationMarginExtractionCheckpoint({
        ...clone(state),
        checkpoint: nextCheckpoint,
        evidence: [...clone(state.evidence), ...clone(batch)],
      });
      if (!candidate) {
        return Object.freeze({
          status: "rejected",
          reason: "checkpoint_candidate_rejected",
          state: clone(state),
        });
      }
      try {
        if (commit(clone(candidate)) !== true) {
          return Object.freeze({
            status: "commit_failed",
            reason: "atomic_checkpoint_commit_failed",
            state: clone(state),
          });
        }
      } catch {
        return Object.freeze({
          status: "commit_failed",
          reason: "atomic_checkpoint_commit_failed",
          state: clone(state),
        });
      }
      state = candidate;
      return Object.freeze({ status: "committed", state: clone(state) });
    },
  });
}

export const calibrationMarginExtractionCheckpointContract = Object.freeze({
  packetId,
  mappingId,
  forms,
  prefixes,
  recordKeys,
  checkpointKeys,
});
