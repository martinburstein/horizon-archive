import test from "node:test";
import assert from "node:assert/strict";
import {
  advanceWorkloadSession,
  createWorkloadSession,
  evaluateWorkloadSelection,
  getWorkloadItems,
  getWorkloadOutcome,
  revealWorkloadHint,
  sanitizeWorkloadEvidence,
  updateWorkloadEvidence,
  workloadSortExercise,
} from "../src/workloadSortExercise.js";

function answerForm(form, overrides = {}) {
  let session = createWorkloadSession(form);
  for (const item of getWorkloadItems(form)) {
    const answer = overrides[item.id] || item.answer;
    session = { ...session, selected: answer };
    session = evaluateWorkloadSelection(session).session;
    if (overrides[item.id]) {
      session = { ...session, selected: answer };
      session = evaluateWorkloadSelection(session).session;
    }
    session = advanceWorkloadSession(session);
  }
  return session;
}

test("both deterministic forms contain twelve unique cards", () => {
  assert.equal(workloadSortExercise.exercise_id, "EX-L0201-WORKLOAD-SORT");
  assert.equal(getWorkloadItems("primary").length, 12);
  assert.equal(getWorkloadItems("retry").length, 12);
  assert.equal(new Set([...getWorkloadItems("primary"), ...getWorkloadItems("retry")].map((item) => item.id)).size, 24);
});

test("mastery requires ten correct and no critical miss", () => {
  assert.equal(getWorkloadOutcome(answerForm("primary")).passed, true);
  const noncriticalMisses = answerForm("primary", { W03: "g", W04: "g" });
  assert.deepEqual(getWorkloadOutcome(noncriticalMisses), { score: 10, total: 12, passed: true, criticalMisses: [] });
  const critical = answerForm("primary", { W01: "s" });
  assert.equal(getWorkloadOutcome(critical).score, 11);
  assert.equal(getWorkloadOutcome(critical).passed, false);
  assert.deepEqual(getWorkloadOutcome(critical).criticalMisses, ["generative-is-agentic"]);
});

test("a first miss gives progressive remediation and permits a corrected retry", () => {
  let session = { ...createWorkloadSession(), selected: "s" };
  let result = evaluateWorkloadSelection(session);
  assert.equal(result.finalized, false);
  assert.equal(result.session.hintLevel, 1);
  session = revealWorkloadHint(result.session);
  assert.equal(session.hintLevel, 2);
  session = { ...session, selected: "g" };
  result = evaluateWorkloadSelection(session);
  assert.equal(result.correct, true);
  assert.equal(result.session.criticalMisses.length, 0);
});

test("saved evidence is allowlisted and excludes selections and free-form content", () => {
  let evidence = updateWorkloadEvidence(null, { incrementAttempt: true, hintLevel: 2 });
  evidence = updateWorkloadEvidence(evidence, {
    itemId: "W01",
    correct: false,
    misconceptionTags: ["generative-is-agentic", "forged"],
    confidence: "medium",
    masteryStatus: "remediation_required",
  });
  const sanitized = sanitizeWorkloadEvidence({ ...evidence, selected: "g", freeFormResponse: "private" });
  assert.equal(sanitized.attemptCount, 1);
  assert.equal(sanitized.itemCorrectness.W01, false);
  assert.deepEqual(sanitized.misconceptionTags, ["generative-is-agentic"]);
  assert.equal("selected" in sanitized, false);
  assert.equal("freeFormResponse" in sanitized, false);
});
