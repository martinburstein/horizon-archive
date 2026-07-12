import test from "node:test";
import assert from "node:assert/strict";
import referenceAnswers from "../../curriculum/lessons/L-02-02/reference_primary_answers.json" with { type: "json" };
import referenceTransfer from "../../curriculum/lessons/L-02-02/reference_transfer_answers.json" with { type: "json" };
import { evaluateResponsibleAIExplanation, evaluateResponsibleAIScenario, responsibleAIPrimaryScenarios, responsibleAITransferScenarios, sanitizeResponsibleAIEvidence, updateResponsibleAIEvidence } from "../src/responsibleAIExercise.js";

test("primary form covers six course-authored scenarios and all four response dimensions", () => {
  assert.equal(responsibleAIPrimaryScenarios.length, 6);
  for (const scenario of responsibleAIPrimaryScenarios) {
    const result = evaluateResponsibleAIScenario(scenario.id, referenceAnswers[scenario.id]);
    assert.equal(result.score, 4);
    assert.equal(result.passed, true);
  }
});

test("fresh transfer form covers every principle at a strict 24 of 24", () => {
  assert.equal(responsibleAITransferScenarios.length, 6);
  assert.deepEqual(new Set(responsibleAITransferScenarios.map((scenario) => scenario.principle)), new Set(["fairness", "reliability_and_safety", "privacy_and_security", "inclusiveness", "transparency", "accountability"]));
  for (const scenario of responsibleAITransferScenarios) {
    const result = evaluateResponsibleAIScenario(scenario.id, referenceTransfer[scenario.id], "transfer");
    assert.equal(result.score, 4);
    assert.equal(result.passed, true);
  }
});

test("closed-note explanation requires all four independently typed dimensions", () => {
  assert.equal(evaluateResponsibleAIExplanation("T06", {
    principle: "Accountability",
    stakeholder: "people affected by moderation decisions",
    mitigation: "assign appeals owner audit and remedy",
    owner: "trust and safety lead",
  }).passed, true);
  const miss = evaluateResponsibleAIExplanation("T06", { principle: "transparency", stakeholder: "people affected by moderation decisions", mitigation: "assign appeals owner audit and remedy", owner: "moderation model" });
  assert.deepEqual(miss.correctness, { principle: false, stakeholder: true, mitigation: true, owner: false });
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

test("mastery evidence preserves both forms and explanation booleans without explanation text", () => {
  let evidence = updateResponsibleAIEvidence({ exerciseId: "EX-L0202-RESPONSIBLE-AI", masteryStatus: "primary_complete" }, { form: "transfer", scenarioId: "T01", correctness: { principle: true, stakeholder: true, mitigation: true, owner: true }, masteryStatus: "transfer_complete" });
  evidence = updateResponsibleAIEvidence(evidence, { form: "explanation", scenarioId: "closed_note_explanation", correctness: { principle: true, stakeholder: true, mitigation: true, owner: true }, masteryStatus: "mastered" });
  assert.equal(evidence.masteryStatus, "mastered");
  assert.equal(evidence.form, "explanation");
  assert.deepEqual(evidence.dimensionCorrectness.closed_note_explanation, { principle: true, stakeholder: true, mitigation: true, owner: true });
  assert.equal("explanation" in evidence, false);
});
