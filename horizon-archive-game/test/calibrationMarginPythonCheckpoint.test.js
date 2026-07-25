import assert from "node:assert/strict";
import test from "node:test";
import {
  calibrationMarginPythonCheckpointContract,
  createCalibrationMarginPythonCheckpointAdapter,
  createCalibrationMarginPythonEvidenceRecord,
  createCalibrationMarginPythonP0,
  sanitizeCalibrationMarginPythonCheckpoint,
} from "../src/CalibrationMarginPythonCheckpoint.js";

function correctness(form) {
  const dimensions = calibrationMarginPythonCheckpointContract.forms
    .find((candidate) => candidate.form === form).dimensions;
  return Object.fromEntries(dimensions.map((dimension) => [dimension, true]));
}

function record(form, options) {
  return createCalibrationMarginPythonEvidenceRecord(form, correctness(form), options);
}

test("EXP-009/012/015 exact ordered records commit only P0 through P3", () => {
  const committed = [];
  const adapter = createCalibrationMarginPythonCheckpointAdapter({
    commit(candidate) {
      committed.push(candidate);
      return true;
    },
  });
  assert.deepEqual(adapter.getState(), createCalibrationMarginPythonP0());
  for (const [form, checkpoint] of [
    ["primary", "P1"],
    ["retrieval", "P2"],
    ["transfer", "P3"],
  ]) {
    const result = adapter.append(record(form, { attempts: 4, hints: 8 }));
    assert.equal(result.status, "committed");
    assert.equal(result.state.checkpoint, checkpoint);
    assert.equal(result.state.evidence.at(-1).form, form);
    assert.equal(result.state.evidence.at(-1).attempt_count, 4);
    assert.equal(result.state.evidence.at(-1).hint_level, 3);
    assert.equal(Object.values(result.state.evidence.at(-1).dimension_correctness)
      .every(Boolean), true);
  }
  assert.equal(committed.length, 3);
  assert.equal(adapter.append(record("transfer")).status, "rejected");
});

test("EXP-016 exact P1/P2/P3 restoration is allowlisted and privacy free", () => {
  const adapter = createCalibrationMarginPythonCheckpointAdapter();
  const states = [adapter.getState()];
  for (const form of ["primary", "retrieval", "transfer"]) {
    assert.equal(adapter.append(record(form)).status, "committed");
    states.push(adapter.getState());
  }
  states.forEach((state, index) => {
    const restored = createCalibrationMarginPythonCheckpointAdapter({
      restoredState: JSON.parse(JSON.stringify(state)),
    });
    assert.deepEqual(restored.getRestoration(), {
      valid: true,
      checkpoint: `P${index}`,
    });
    assert.deepEqual(restored.getState(), state);
    assert.doesNotMatch(
      JSON.stringify(state),
      /"raw_source"|"response"|"answer"|"eventToken"|"focusHistory"|"note"|"save"|"bearing"|"authority"|RP003-IE/,
    );
  });
});

test("EXP-017 unknown, private, partial, failed, duplicate, out-of-order, AI-901 and world content reject atomically", () => {
  const primary = record("primary");
  const p1 = {
    ...createCalibrationMarginPythonP0(),
    checkpoint: "P1",
    evidence: [primary],
  };
  assert.ok(sanitizeCalibrationMarginPythonCheckpoint(p1));
  for (const invalid of [
    { ...p1, privateWork: "PRIVATE" },
    { ...p1, checkpoint: "P2" },
    { ...p1, cityStateDelta: {} },
    { ...p1, successor: "RP-004" },
    { ...p1, evidence: [primary, primary] },
    { ...p1, evidence: [record("retrieval")] },
    {
      ...p1,
      evidence: [{
        ...primary,
        skill_or_objective_id: "RP003-IE-01",
      }],
    },
    {
      ...p1,
      evidence: [{
        ...primary,
        dimension_correctness: {
          ...primary.dimension_correctness,
          result_is_list: false,
        },
      }],
    },
    {
      ...p1,
      evidence: [{
        ...primary,
        raw_source: "PRIVATE",
      }],
    },
  ]) assert.equal(sanitizeCalibrationMarginPythonCheckpoint(invalid), null);
});

test("EXP-017/028 failed commit preserves the prior exact prefix byte for byte", () => {
  let fail = false;
  const adapter = createCalibrationMarginPythonCheckpointAdapter({
    commit() {
      return !fail;
    },
  });
  assert.equal(adapter.append(record("primary")).status, "committed");
  const prior = JSON.stringify(adapter.getState());
  fail = true;
  const result = adapter.append(record("retrieval"));
  assert.equal(result.status, "commit_failed");
  assert.equal(result.reason, "atomic_checkpoint_commit_failed");
  assert.equal(JSON.stringify(adapter.getState()), prior);

  const malformed = createCalibrationMarginPythonCheckpointAdapter({
    restoredState: { ...adapter.getState(), answer: "PRIVATE" },
  });
  assert.deepEqual(malformed.getRestoration(), { valid: false, checkpoint: "P0" });
  assert.deepEqual(malformed.getState(), createCalibrationMarginPythonP0());
});
