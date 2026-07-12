import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { evaluateStructuredPacketExplanation, evaluateStructuredPacketSource, sanitizeStructuredPacketEvidence, structuredPacketChecks, updateStructuredPacketEvidence } from "../src/structuredPacketExercise.js";

const primaryReference = readFileSync(new URL("../../curriculum/lessons/L-03-01/reference_primary.py", import.meta.url), "utf8");
const transferReference = readFileSync(new URL("../../curriculum/lessons/L-03-01/reference_transfer.py", import.meta.url), "utf8");

test("packaged primary and transfer references pass strict 8 of 8", () => {
  for (const [form, source] of [["primary", primaryReference], ["transfer", transferReference]]) {
    const result = evaluateStructuredPacketSource(source, form);
    assert.equal(result.score, 8);
    assert.equal(result.passed, true);
  }
});

test("nested operations and hardcoding fail independently", () => {
  const missingAppend = evaluateStructuredPacketSource(primaryReference.replace('packet["observations"].append({"kind": "image", "values": ["arch", "blue"]})', ""), "primary");
  assert.equal(missingAppend.checks.appends_record, false);
  const hardcoded = evaluateStructuredPacketSource(primaryReference.replace("print(first_kind)", 'print("audio")'), "primary");
  assert.equal(hardcoded.checks.derived_output_no_bypass, false);
});

test("closed-note data path requires all three dimensions", () => {
  const result = evaluateStructuredPacketExplanation({ container_path: "dictionary list dictionary list value", nested_access: "packet readings 1 values 0", json_round_trip: "wrong" });
  assert.deepEqual(result.correctness, { container_path: true, nested_access: true, json_round_trip: false });
});

test("mastery requires both forms and explanation and stores no source or prose", () => {
  let evidence = updateStructuredPacketEvidence(null, { form: "primary", correctness: Object.fromEntries(structuredPacketChecks.map((key) => [key, true])) });
  evidence = updateStructuredPacketEvidence(evidence, { masteryStatus: "mastered" });
  assert.equal(evidence.masteryStatus, "primary_complete");
  evidence = updateStructuredPacketEvidence(evidence, { form: "transfer", correctness: Object.fromEntries(structuredPacketChecks.map((key) => [key, true])) });
  evidence = updateStructuredPacketEvidence(evidence, { form: "explanation", correctness: { container_path: true, nested_access: true, json_round_trip: true }, masteryStatus: "mastered" });
  assert.equal(evidence.masteryStatus, "mastered");
  const safe = sanitizeStructuredPacketEvidence({ ...evidence, learnerSource: primaryReference, freeFormExplanation: "private", runtimeOutput: "private" });
  for (const key of ["learnerSource", "freeFormExplanation", "runtimeOutput"]) assert.equal(key in safe, false);
});
