import assert from "node:assert/strict";
import test from "node:test";
import {
  createCalibrationMarginExtractionCheckpointAdapter,
  createCalibrationMarginExtractionEvidenceRecord,
  createCalibrationMarginExtractionP0,
  sanitizeCalibrationMarginExtractionCheckpoint,
} from "../src/CalibrationMarginExtractionCheckpoint.js";

const dimensions = Object.freeze([
  "input_boundary",
  "output_contract",
  "unsupported_rule",
]);
const allDimensions = Object.freeze(Object.fromEntries(
  dimensions.map((dimension) => [dimension, true]),
));
const explanation = Object.freeze({
  unavailable_input_cannot_support_value: true,
});

function record(form, correctness = allDimensions, metadata = {}) {
  return createCalibrationMarginExtractionEvidenceRecord(
    form,
    correctness,
    metadata,
  );
}

test("IE-EXP-009/013/018 exact ordered records alone form IE-P0 through IE-P3", () => {
  const adapter = createCalibrationMarginExtractionCheckpointAdapter();
  assert.equal(adapter.getState().checkpoint, "IE-P0");
  assert.equal(adapter.append(record("primary")).state.checkpoint, "IE-P1");
  assert.equal(adapter.append(record("retrieval")).state.checkpoint, "IE-P2");
  const final = adapter.append([
    record("transfer"),
    record("unsupported_explanation", explanation),
  ]);
  assert.equal(final.status, "committed");
  assert.equal(final.state.checkpoint, "IE-P3");
  assert.deepEqual(
    final.state.evidence.map((item) => item.form),
    ["primary", "retrieval", "transfer", "unsupported_explanation"],
  );
  assert.deepEqual(
    new Set(final.state.evidence.map((item) => item.skill_or_objective_id)),
    new Set(["RP003-IE-01"]),
  );
});

test("IE-EXP-018 transfer and explanation append atomically or not at all", () => {
  const adapter = createCalibrationMarginExtractionCheckpointAdapter();
  adapter.append(record("primary"));
  adapter.append(record("retrieval"));
  const before = JSON.stringify(adapter.getState());
  assert.equal(adapter.append(record("transfer")).status, "rejected");
  assert.equal(JSON.stringify(adapter.getState()), before);
  assert.equal(
    adapter.append(record("unsupported_explanation", explanation)).status,
    "rejected",
  );
  assert.equal(JSON.stringify(adapter.getState()), before);
  assert.equal(adapter.append([
    record("transfer"),
    record("unsupported_explanation", explanation),
  ]).status, "committed");
});

test("IE-EXP-021 exact prefixes restore without private or cross-credit content", () => {
  const adapter = createCalibrationMarginExtractionCheckpointAdapter();
  const prefixes = [adapter.getState()];
  adapter.append(record("primary", allDimensions, {
    attempts: 4,
    hints: 2,
    confidence: "medium",
  }));
  prefixes.push(adapter.getState());
  adapter.append(record("retrieval"));
  prefixes.push(adapter.getState());
  adapter.append([
    record("transfer"),
    record("unsupported_explanation", explanation),
  ]);
  prefixes.push(adapter.getState());

  for (const prefix of prefixes) {
    const restored = sanitizeCalibrationMarginExtractionCheckpoint(prefix);
    assert.equal(restored.checkpoint, prefix.checkpoint);
    assert.deepEqual(restored, prefix);
    assert.doesNotMatch(
      JSON.stringify(restored),
      /PY-010|private|answer|response|feedback|save|bearing|RP-004|RP-013/i,
    );
  }
});
test("IE-EXP-022 malformed, partial, false, duplicate, private and later records reject", () => {
  const valid = createCalibrationMarginExtractionP0();
  for (const candidate of [
    { ...valid, privateResponse: "PRIVATE" },
    { ...valid, checkpoint: "IE-P1" },
    { ...valid, evidence: [record("primary"), record("primary")] },
    {
      ...valid,
      checkpoint: "IE-P1",
      evidence: [{
        ...record("primary"),
        dimension_correctness: {
          input_boundary: true,
          output_contract: false,
          unsupported_rule: true,
        },
      }],
    },
    { ...valid, successor: "RP-004" },
    { ...valid, saveEligibility: true },
  ]) {
    assert.equal(sanitizeCalibrationMarginExtractionCheckpoint(candidate), null);
  }
});

test("IE-EXP-023 failed or throwing commit preserves prior prefix byte-for-byte", () => {
  for (const commit of [
    () => false,
    () => {
      throw new Error("closed");
    },
  ]) {
    const adapter = createCalibrationMarginExtractionCheckpointAdapter({ commit });
    const before = JSON.stringify(adapter.getState());
    const result = adapter.append(record("primary"));
    assert.equal(result.status, "commit_failed");
    assert.equal(JSON.stringify(adapter.getState()), before);
  }
});
