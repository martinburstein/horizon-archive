import test from "node:test";
import assert from "node:assert/strict";
import referencePrimary from "../../curriculum/lessons/L-02-03/reference_primary_answers.json" with { type: "json" };
import referenceTransfer from "../../curriculum/lessons/L-02-03/reference_transfer_answers.json" with { type: "json" };
import { evaluateModelChoiceExplanation, evaluateModelChoiceScenario, getModelChoiceOptions, modelChoicePrimaryScenarios, modelChoiceTransferScenarios, sanitizeModelChoiceEvidence, updateModelChoiceEvidence } from "../src/modelChoiceExercise.js";

test("primary form covers all four topic families at a strict 16 of 16", () => {
  assert.equal(modelChoicePrimaryScenarios.length, 8);
  assert.deepEqual(new Set(modelChoicePrimaryScenarios.map((scenario) => scenario.topic)), new Set(["mechanics", "model_choice", "deployment", "configuration"]));
  for (const scenario of modelChoicePrimaryScenarios) {
    const result = evaluateModelChoiceScenario(scenario.id, referencePrimary[scenario.id]);
    assert.equal(result.score, 2);
    assert.equal(result.passed, true);
    assert.equal(getModelChoiceOptions(scenario.id).decision.includes(referencePrimary[scenario.id].decision), true);
    assert.equal(getModelChoiceOptions(scenario.id).reason.includes(referencePrimary[scenario.id].reason), true);
  }
});

test("packaged fresh transfer form requires a strict 16 of 16", () => {
  assert.equal(modelChoiceTransferScenarios.length, 8);
  assert.deepEqual(new Set(modelChoiceTransferScenarios.map((scenario) => scenario.topic)), new Set(["mechanics", "model_choice", "deployment", "configuration"]));
  for (const scenario of modelChoiceTransferScenarios) {
    const result = evaluateModelChoiceScenario(scenario.id, referenceTransfer[scenario.id], "transfer");
    assert.equal(result.score, 2);
    assert.equal(result.passed, true);
    assert.equal(getModelChoiceOptions(scenario.id, "transfer").decision.includes(referenceTransfer[scenario.id].decision), true);
    assert.equal(getModelChoiceOptions(scenario.id, "transfer").reason.includes(referenceTransfer[scenario.id].reason), true);
  }
});

test("closed-note decision and reason are both required", () => {
  assert.deepEqual(evaluateModelChoiceExplanation({ decision: "data zone deployment", reason: "wrong" }).correctness, { decision: true, reason: false });
  assert.equal(evaluateModelChoiceExplanation({ decision: "data_zone_deployment", reason: "data zone limits processing to the specified zone" }).passed, true);
});

test("decision and reason are remediated independently", () => {
  const result = evaluateModelChoiceScenario("P07", { decision: referencePrimary.P07.decision, reason: "temperature_guarantees_factual_truth" });
  assert.deepEqual(result.correctness, { decision: true, reason: false });
  assert.deepEqual(result.misconceptionTags, ["temperature-guarantees-truth"]);
});

test("primary evidence allowlist never retains choices prompts or free-form content", () => {
  let evidence = updateModelChoiceEvidence(null, { scenarioId: "P01", correctness: { decision: true, reason: true }, incrementAttempt: true, hintLevel: 2, misconceptionTags: ["model-is-a-database"] });
  evidence = sanitizeModelChoiceEvidence({ ...evidence, response: referencePrimary.P01, promptText: "private", freeFormExplanation: "private", runtimeOutput: "private" });
  assert.deepEqual(evidence.itemCorrectness.P01, { decision: true, reason: true });
  assert.equal(evidence.attemptCount, 1);
  for (const key of ["response", "promptText", "freeFormExplanation", "runtimeOutput"]) assert.equal(key in evidence, false);
});

test("mastered evidence requires primary, transfer, and closed-note booleans", () => {
  let evidence = updateModelChoiceEvidence(null, {});
  for (const scenario of modelChoicePrimaryScenarios) evidence = updateModelChoiceEvidence(evidence, { scenarioId: scenario.id, correctness: { decision: true, reason: true } });
  evidence = updateModelChoiceEvidence(evidence, { masteryStatus: "mastered" });
  assert.equal(evidence.masteryStatus, "primary_complete");
  for (const scenario of modelChoiceTransferScenarios) evidence = updateModelChoiceEvidence(evidence, { form: "transfer", scenarioId: scenario.id, correctness: { decision: true, reason: true } });
  evidence = updateModelChoiceEvidence(evidence, { form: "explanation", scenarioId: "closed_note_explanation", correctness: { decision: true, reason: true }, masteryStatus: "mastered" });
  assert.equal(evidence.masteryStatus, "mastered");
  const sanitized = sanitizeModelChoiceEvidence({ ...evidence, freeFormExplanation: "private", response: referenceTransfer.T04 });
  assert.equal("freeFormExplanation" in sanitized, false);
  assert.equal("response" in sanitized, false);
});
