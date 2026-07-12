import test from "node:test";
import assert from "node:assert/strict";
import referenceAnswers from "../../curriculum/lessons/L-02-02/reference_primary_answers.json" with { type: "json" };
import { evaluateResponsibleAIScenario, responsibleAIPrimaryScenarios, sanitizeResponsibleAIEvidence, updateResponsibleAIEvidence } from "../src/responsibleAIExercise.js";

test("primary form covers six course-authored scenarios and all four response dimensions", () => {
  assert.equal(responsibleAIPrimaryScenarios.length, 6);
  for (const scenario of responsibleAIPrimaryScenarios) {
    const result = evaluateResponsibleAIScenario(scenario.id, referenceAnswers[scenario.id]);
    assert.equal(result.score, 4);
    assert.equal(result.passed, true);
  }
});

test("strict feedback detects each incorrect dimension independently", () => {
  const wrong = { ...referenceAnswers.P03, principle: "transparency", stakeholder: "support_vendor_sales_team", mitigation: "add_more_general_training_examples", owner: "customer" };
  const result = evaluateResponsibleAIScenario("P03", wrong);
  assert.deepEqual(result.correctness, { principle: false, stakeholder: false, mitigation: false, owner: false });
  assert.equal(result.score, 0);
  assert.deepEqual(result.misconceptionTags, ["privacy-is-only-secrecy"]);
});

test("evidence sanitizer stores booleans and metadata but never choices or reasoning", () => {
  let evidence = updateResponsibleAIEvidence(null, { scenarioId: "P01", correctness: { principle: true, stakeholder: true, mitigation: true, owner: true }, incrementAttempt: true, hintLevel: 2 });
  evidence = sanitizeResponsibleAIEvidence({ ...evidence, response: referenceAnswers.P01, freeFormReasoning: "private", scenarioNotes: "private", runtimeDisplay: "private" });
  assert.deepEqual(evidence.dimensionCorrectness.P01, { principle: true, stakeholder: true, mitigation: true, owner: true });
  for (const key of ["response", "freeFormReasoning", "scenarioNotes", "runtimeDisplay"]) assert.equal(key in evidence, false);
});
