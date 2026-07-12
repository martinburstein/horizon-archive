import test from "node:test";
import assert from "node:assert/strict";
import referencePrimary from "../../curriculum/lessons/L-02-03/reference_primary_answers.json" with { type: "json" };
import { evaluateModelChoiceScenario, getModelChoiceOptions, modelChoicePrimaryScenarios, sanitizeModelChoiceEvidence, updateModelChoiceEvidence } from "../src/modelChoiceExercise.js";

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
