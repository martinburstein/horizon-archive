import assert from "node:assert/strict";
import test from "node:test";
import contract from "../../curriculum/readiness/RP-003/contract.json" with { type: "json" };
import {
  createCalibrationMarginPythonCheckpointAdapter,
  createCalibrationMarginPythonEvidenceRecord,
} from "../src/CalibrationMarginPythonCheckpoint.js";
import {
  createCalibrationMarginExtractionCheckpointAdapter,
  createCalibrationMarginExtractionEvidenceRecord,
} from "../src/CalibrationMarginExtractionCheckpoint.js";
import {
  CALIBRATION_MARGIN_REVIEW_SAVE_KEY,
  CALIBRATION_MARGIN_REVIEW_SAVE_RECORD_VERSION,
  createCalibrationMarginReviewSaveStorageAdapter,
  sanitizeCalibrationMarginReviewSave,
} from "../src/CalibrationMarginReviewSave.js";

export function exactReviewSaveCheckpoints() {
  const python = createCalibrationMarginPythonCheckpointAdapter();
  const pythonDimensions = Object.fromEntries(
    contract.python_contract.checks.map((id) => [id, true]),
  );
  const retrieval = {
    condition: true,
    trueBranch: true,
    falseBranch: true,
    unavailableBoundary: true,
  };
  python.append(createCalibrationMarginPythonEvidenceRecord("primary", pythonDimensions));
  python.append(createCalibrationMarginPythonEvidenceRecord("retrieval", retrieval));
  python.append(createCalibrationMarginPythonEvidenceRecord("transfer", pythonDimensions));

  const extraction = createCalibrationMarginExtractionCheckpointAdapter();
  const ieDimensions = Object.fromEntries(
    contract.ai901_contract.dimensions.map((id) => [id, true]),
  );
  extraction.append(createCalibrationMarginExtractionEvidenceRecord("primary", ieDimensions));
  extraction.append(createCalibrationMarginExtractionEvidenceRecord("retrieval", ieDimensions));
  extraction.append([
    createCalibrationMarginExtractionEvidenceRecord("transfer", ieDimensions),
    createCalibrationMarginExtractionEvidenceRecord(
      "unsupported_explanation",
      { unavailable_input_cannot_support_value: true },
    ),
  ]);
  return { python: python.getState(), extraction: extraction.getState() };
}

export function exactReviewSaveRecord() {
  const checkpoints = exactReviewSaveCheckpoints();
  return {
    version: CALIBRATION_MARGIN_REVIEW_SAVE_RECORD_VERSION,
    packetId: "RP-003",
    mappingId: "RP003-A3-CALIBRATION-MARGIN",
    checkpoint: "calibration_margin_complete",
    continuation: "continuation",
    cityStateDelta: null,
    successor: null,
    note: {
      correspondence: "bounded_exposed_correspondence_observed",
      difference: "one_bounded_exposed_difference_observed",
      unavailable: "sealed_source_unavailable_and_unread",
    },
    evidence: [...checkpoints.python.evidence, ...checkpoints.extraction.evidence],
  };
}

function memoryStorage(initial = null) {
  const values = new Map();
  if (initial !== null) values.set(CALIBRATION_MARGIN_REVIEW_SAVE_KEY, initial);
  return {
    getItem(key) {
      return values.has(key) ? values.get(key) : null;
    },
    setItem(key, value) {
      values.set(key, value);
    },
    removeItem(key) {
      values.delete(key);
    },
  };
}

test("RS-EXP-008-010 strict save accepts only exact nine/three/seven/ten-key source identity", () => {
  const source = exactReviewSaveRecord();
  const safe = sanitizeCalibrationMarginReviewSave(source);
  assert.ok(safe);
  assert.deepEqual(Object.keys(safe), [
    "version", "packetId", "mappingId", "checkpoint", "continuation",
    "cityStateDelta", "successor", "note", "evidence",
  ]);
  assert.deepEqual(safe.evidence.map(({ skill_or_objective_id, form }) => (
    `${skill_or_objective_id}/${form}`
  )), [
    "PY-010/primary",
    "PY-010/retrieval",
    "PY-010/transfer",
    "RP003-IE-01/primary",
    "RP003-IE-01/retrieval",
    "RP003-IE-01/transfer",
    "RP003-IE-01/unsupported_explanation",
  ]);
  assert.equal(Object.isFrozen(safe), true);
  assert.equal(Object.isFrozen(safe.evidence[0].dimension_correctness), true);

  const invalid = [
    { ...source, rawAnswer: "PRIVATE" },
    { ...source, mappingId: "RP003-IE-01" },
    { ...source, note: { ...source.note, privateNote: "PRIVATE" } },
    { ...source, evidence: [...source.evidence].reverse() },
    {
      ...source,
      evidence: source.evidence.map((record, index) => index === 0
        ? { ...record, dimension_correctness: {
          ...record.dimension_correctness,
          result_is_list: false,
        } }
        : record),
    },
    {
      ...source,
      evidence: source.evidence.map((record, index) => index === 3
        ? { ...record, skill_or_objective_id: "PY-010" }
        : record),
    },
  ];
  invalid.forEach((candidate) => assert.equal(
    sanitizeCalibrationMarginReviewSave(candidate),
    null,
  ));
});

test("RS-EXP-011 adapter sanitizes, replaces once and strict-verifies immutable read-back", () => {
  const storage = memoryStorage();
  const adapter = createCalibrationMarginReviewSaveStorageAdapter(storage);
  const result = adapter.commit(exactReviewSaveRecord());
  assert.equal(result.status, "committed");
  assert.equal(result.priorBytes, null);
  assert.equal(
    storage.getItem(CALIBRATION_MARGIN_REVIEW_SAVE_KEY),
    JSON.stringify(result.value),
  );
  assert.deepEqual(adapter.read(), result.value);
  assert.equal(Object.isFrozen(result.value), true);
});

test("RS-EXP-012 write/read-back failures preserve exact prior bytes and absence", () => {
  const validBytes = JSON.stringify(sanitizeCalibrationMarginReviewSave(
    exactReviewSaveRecord(),
  ));
  for (const prior of [validBytes, null]) {
    let value = prior;
    let writes = 0;
    const storage = {
      getItem() {
        return value;
      },
      setItem(key, next) {
        writes += 1;
        value = writes === 1 ? `${next}partial` : next;
        if (writes === 1) throw new Error("quota after partial replacement");
      },
      removeItem() {
        value = null;
      },
    };
    const result = createCalibrationMarginReviewSaveStorageAdapter(storage)
      .commit(exactReviewSaveRecord());
    assert.equal(result.status, "failed");
    assert.equal(result.reason, "local_write_not_completed");
    assert.equal(result.lastGoodBytesPreserved, true);
    assert.equal(value, prior);
  }

  let value = validBytes;
  let corruptNextRead = false;
  let setCount = 0;
  const readbackStorage = {
    getItem() {
      if (corruptNextRead) {
        corruptNextRead = false;
        return '{"malformed":true}';
      }
      return value;
    },
    setItem(key, next) {
      setCount += 1;
      value = next;
      corruptNextRead = setCount === 1;
    },
    removeItem() {
      value = null;
    },
  };
  const failed = createCalibrationMarginReviewSaveStorageAdapter(readbackStorage)
    .commit(exactReviewSaveRecord());
  assert.equal(failed.status, "failed");
  assert.equal(failed.reason, "local_readback_not_verified");
  assert.equal(failed.lastGoodBytesPreserved, true);
  assert.equal(value, validBytes);
});
