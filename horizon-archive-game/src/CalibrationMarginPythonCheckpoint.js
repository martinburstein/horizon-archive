export const CALIBRATION_MARGIN_PYTHON_CHECKPOINT_VERSION =
  "rp003.python-checkpoint.v1";
export const CALIBRATION_MARGIN_PYTHON_SHELL_VERSION = "SS-RP003-PY010-v1";

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
const pythonChecks = Object.freeze([
  "result_is_list",
  "one_record_per_exposed_index",
  "exact_record_keys_and_index_order",
  "corresponding_positions_correct",
  "difference_positions_correct",
  "conditional_compares_exposed_values_at_same_index",
  "sealed_source_marked_unavailable_none",
  "inputs_unchanged_and_no_forbidden_operations",
]);
const retrievalDimensions = Object.freeze([
  "condition",
  "trueBranch",
  "falseBranch",
  "unavailableBoundary",
]);
const forms = Object.freeze([
  Object.freeze({ form: "primary", dimensions: pythonChecks }),
  Object.freeze({ form: "retrieval", dimensions: retrievalDimensions }),
  Object.freeze({ form: "transfer", dimensions: pythonChecks }),
]);
const checkpoints = Object.freeze(["P0", "P1", "P2", "P3"]);
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
  return exactKeys(value, recordKeys)
    && value.packet_id === packetId
    && value.mapping_id === mappingId
    && value.form === specification.form
    && value.skill_or_objective_id === "PY-010"
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
  const evidence = value.evidence.map((record) => Object.freeze({
    ...record,
    dimension_correctness: Object.freeze({ ...record.dimension_correctness }),
    misconception_tags: Object.freeze([...record.misconception_tags]),
  }));
  return Object.freeze({ ...value, evidence: Object.freeze(evidence) });
}

export function createCalibrationMarginPythonP0() {
  return freezeCheckpoint({
    version: CALIBRATION_MARGIN_PYTHON_CHECKPOINT_VERSION,
    shellVersion: CALIBRATION_MARGIN_PYTHON_SHELL_VERSION,
    packetId,
    mappingId,
    checkpoint: "P0",
    continuation: "continuation",
    cityStateDelta: null,
    worldStateDelta: null,
    accessStateDelta: null,
    successor: null,
    evidence: [],
  });
}

export function sanitizeCalibrationMarginPythonCheckpoint(value) {
  if (!exactKeys(value, checkpointKeys)
    || value.version !== CALIBRATION_MARGIN_PYTHON_CHECKPOINT_VERSION
    || value.shellVersion !== CALIBRATION_MARGIN_PYTHON_SHELL_VERSION
    || value.packetId !== packetId
    || value.mappingId !== mappingId
    || value.continuation !== "continuation"
    || value.cityStateDelta !== null
    || value.worldStateDelta !== null
    || value.accessStateDelta !== null
    || value.successor !== null
    || !Array.isArray(value.evidence)
    || value.evidence.length > forms.length
    || value.checkpoint !== checkpoints[value.evidence.length]
    || value.evidence.some((record, index) => !exactRecord(record, index))) {
    return null;
  }
  return freezeCheckpoint(clone(value));
}

export function createCalibrationMarginPythonEvidenceRecord(
  form,
  correctness,
  { attempts = 1, hints = 0, confidence = null } = {},
) {
  const index = forms.findIndex((specification) => specification.form === form);
  const dimensionCorrectness = Object.fromEntries(
    (forms[index]?.dimensions ?? []).map((dimension) => [dimension, correctness?.[dimension] === true]),
  );
  const record = {
    packet_id: packetId,
    mapping_id: mappingId,
    form,
    skill_or_objective_id: "PY-010",
    dimension_correctness: dimensionCorrectness,
    attempt_count: Math.max(1, Math.min(99, Number.isInteger(attempts) ? attempts : 1)),
    hint_level: Math.max(0, Math.min(3, Number.isInteger(hints) ? hints : 0)),
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

export function createCalibrationMarginPythonCheckpointAdapter(options = {}) {
  const restored = sanitizeCalibrationMarginPythonCheckpoint(options.restoredState);
  let state = restored ?? createCalibrationMarginPythonP0();
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
    append(record) {
      const index = state.evidence.length;
      if (index >= forms.length || !exactRecord(record, index)) {
        return Object.freeze({
          status: "rejected",
          reason: "ordered_allowlisted_record_required",
          state: clone(state),
        });
      }
      const candidate = sanitizeCalibrationMarginPythonCheckpoint({
        ...clone(state),
        checkpoint: checkpoints[index + 1],
        evidence: [...clone(state.evidence), clone(record)],
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

export const calibrationMarginPythonCheckpointContract = Object.freeze({
  packetId,
  mappingId,
  forms,
  checkpoints,
  recordKeys,
  checkpointKeys,
});
