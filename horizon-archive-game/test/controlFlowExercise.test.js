import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { controlFlowChecks, evaluateControlFlowExplanation, evaluateControlFlowSource, sanitizeControlFlowEvidence, updateControlFlowEvidence } from "../src/controlFlowExercise.js";
const primary = readFileSync(new URL("../../curriculum/lessons/L-03-02/reference_primary.py", import.meta.url), "utf8");
const transfer = readFileSync(new URL("../../curriculum/lessons/L-03-02/reference_transfer.py", import.meta.url), "utf8");

test("packaged control-flow references pass strict 8 of 8", () => { for (const [form, source] of [["primary", primary], ["transfer", transfer]]) assert.equal(evaluateControlFlowSource(source, form).score, 8); });
test("boundary, loop, and literal-output bypass fail independently", () => {
  assert.equal(evaluateControlFlowSource(primary.replace(">=", ">"), "primary").checks.boundary_behavior, false);
  assert.equal(evaluateControlFlowSource(primary.replace("for value in readings:", ""), "primary").checks.uses_for_loop, false);
  assert.equal(evaluateControlFlowSource(primary.replace("print(results)", 'print(["clear", "alert", "alert"])'), "primary").checks.derived_output_no_bypass, false);
});
test("closed-note explanation requires parameter, loop-condition, and return", () => { assert.deepEqual(evaluateControlFlowExplanation({ parameter: "parameters receive caller inputs", loop_condition: "wrong", return: "return completed accumulator after loop" }).correctness, { parameter: true, loop_condition: false, return: true }); });
test("mastery requires both forms and explanation and strips private content", () => {
  const pass = Object.fromEntries(controlFlowChecks.map((key) => [key, true])); let evidence = updateControlFlowEvidence(null, { form: "primary", correctness: pass }); evidence = updateControlFlowEvidence(evidence, { masteryStatus: "mastered" }); assert.equal(evidence.masteryStatus, "primary_complete"); evidence = updateControlFlowEvidence(evidence, { form: "transfer", correctness: pass }); evidence = updateControlFlowEvidence(evidence, { form: "explanation", correctness: { parameter: true, loop_condition: true, return: true }, masteryStatus: "mastered" }); assert.equal(evidence.masteryStatus, "mastered"); const safe = sanitizeControlFlowEvidence({ ...evidence, learnerSource: primary, freeFormExplanation: "private", runtimeOutput: "private" }); for (const key of ["learnerSource", "freeFormExplanation", "runtimeOutput"]) assert.equal(key in safe, false);
});
