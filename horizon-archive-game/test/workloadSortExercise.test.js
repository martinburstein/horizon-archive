import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  advanceWorkloadSession,
  createWorkloadSession,
  evaluateWorkloadSelection,
  getWorkloadItems,
  getWorkloadOutcome,
  reconstructWorkloadSession,
  revealWorkloadHint,
  sanitizeWorkloadEvidence,
  updateWorkloadEvidence,
  workloadSortExercise,
} from "../src/workloadSortExercise.js";

const appSource = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");

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

test("reload after an unfinalized first miss restarts the same incomplete card without private working state", () => {
  const evidence = updateWorkloadEvidence(null, { incrementAttempt: true, hintLevel: 1 });
  const resumed = reconstructWorkloadSession({
    ...evidence,
    selected: "s",
    prompt: "private prompt copy",
    feedback: "transient feedback",
    freeFormResponse: "private response",
  });
  assert.equal(resumed.form, "primary");
  assert.equal(resumed.index, 0);
  assert.equal(resumed.phase, "answering");
  assert.equal(resumed.selected, "");
  assert.equal(resumed.itemAttempt, 0);
  assert.equal(resumed.hintLevel, 0);
  assert.equal(JSON.stringify(resumed).includes("private"), false);
  assert.equal(evidence.attemptCount, 1);
  assert.equal(evidence.hintLevel, 1);
});

test("a finalized correction resumes on the first incomplete card instead of W01", () => {
  let session = { ...createWorkloadSession(), selected: "s" };
  const miss = evaluateWorkloadSelection(session);
  session = { ...miss.session, selected: "g" };
  const corrected = evaluateWorkloadSelection(session);
  let evidence = updateWorkloadEvidence(null, { incrementAttempt: true, hintLevel: miss.session.hintLevel });
  evidence = updateWorkloadEvidence(evidence, {
    incrementAttempt: true,
    itemId: corrected.item.id,
    correct: corrected.correct,
    hintLevel: corrected.session.hintLevel,
  });
  const resumed = reconstructWorkloadSession(evidence);
  assert.equal(resumed.index, 1);
  assert.equal(getWorkloadItems(resumed.form)[resumed.index].id, "W02");
  assert.deepEqual(resumed.results, { W01: true });
  assert.equal(resumed.selected, "");
  assert.equal(resumed.feedback, "Saved evidence restored. Continue with the first incomplete card.");
});

test("several finalized cards reconstruct a deterministic contiguous result prefix", () => {
  let evidence = null;
  for (const [index, item] of getWorkloadItems("primary").slice(0, 4).entries()) {
    evidence = updateWorkloadEvidence(evidence, {
      incrementAttempt: true,
      itemId: item.id,
      correct: index !== 2,
    });
  }
  const resumed = reconstructWorkloadSession(evidence);
  assert.equal(resumed.index, 4);
  assert.equal(getWorkloadItems(resumed.form)[resumed.index].id, "W05");
  assert.deepEqual(resumed.results, { W01: true, W02: true, W03: false, W04: true });
});

test("a complete unacknowledged form reconstructs its result without auto-promoting mastery", () => {
  const itemCorrectness = Object.fromEntries(getWorkloadItems("primary").map((item) => [item.id, true]));
  const evidence = sanitizeWorkloadEvidence({
    exerciseId: workloadSortExercise.exercise_id,
    itemCorrectness,
    confidence: "medium",
    masteryStatus: "in_progress",
  });
  const resumed = reconstructWorkloadSession(evidence);
  assert.equal(resumed.phase, "form_complete");
  assert.deepEqual(getWorkloadOutcome(resumed), { score: 12, total: 12, passed: true, criticalMisses: [] });
  assert.equal(evidence.masteryStatus, "in_progress");
});

test("critical misses survive reconstruction and forged mastery cannot bypass the override", () => {
  const itemCorrectness = Object.fromEntries(getWorkloadItems("primary").map((item) => [item.id, item.id !== "W01"]));
  const evidence = sanitizeWorkloadEvidence({
    exerciseId: workloadSortExercise.exercise_id,
    itemCorrectness,
    confidence: "high",
    misconceptionTags: [],
    masteryStatus: "mastered",
  });
  const resumed = reconstructWorkloadSession(evidence);
  assert.equal(evidence.masteryStatus, "remediation_required");
  assert.deepEqual(evidence.misconceptionTags, ["generative-is-agentic"]);
  assert.deepEqual(getWorkloadOutcome(resumed), {
    score: 11,
    total: 12,
    passed: false,
    criticalMisses: ["generative-is-agentic"],
  });
});

test("retry-form evidence resumes independently and can recover an earlier critical miss", () => {
  let evidence = null;
  for (const item of getWorkloadItems("primary")) {
    evidence = updateWorkloadEvidence(evidence, {
      incrementAttempt: true,
      itemId: item.id,
      correct: item.id !== "W01",
      misconceptionTags: item.id === "W01" ? item.tags : [],
    });
  }
  evidence = updateWorkloadEvidence(evidence, { masteryStatus: "remediation_required" });
  for (const item of getWorkloadItems("retry").slice(0, 3)) {
    evidence = updateWorkloadEvidence(evidence, { incrementAttempt: true, itemId: item.id, correct: true });
  }
  let resumed = reconstructWorkloadSession(evidence);
  assert.equal(resumed.form, "retry");
  assert.equal(resumed.index, 3);
  assert.deepEqual(resumed.criticalMisses, []);

  for (const item of getWorkloadItems("retry").slice(3)) {
    evidence = updateWorkloadEvidence(evidence, { incrementAttempt: true, itemId: item.id, correct: true });
  }
  evidence = updateWorkloadEvidence(evidence, { confidence: "high" });
  resumed = reconstructWorkloadSession(evidence);
  assert.equal(resumed.phase, "form_complete");
  assert.equal(getWorkloadOutcome(resumed).passed, true);
  const mastered = updateWorkloadEvidence(evidence, { masteryStatus: "mastered" });
  assert.equal(mastered.masteryStatus, "mastered");
});

test("forged gaps, retry records, and private fields cannot become resumable progress", () => {
  const evidence = sanitizeWorkloadEvidence({
    exerciseId: workloadSortExercise.exercise_id,
    itemCorrectness: { W01: true, W03: true, "R-W01": true, forged: true },
    selected: "g",
    response: "private",
    prompt: "private",
    workingState: { index: 11 },
    masteryStatus: "mastered",
  });
  assert.deepEqual(evidence.itemCorrectness, { W01: true });
  assert.equal(evidence.masteryStatus, "in_progress");
  const resumed = reconstructWorkloadSession(evidence);
  assert.equal(resumed.form, "primary");
  assert.equal(resumed.index, 1);
  for (const key of ["selected", "response", "prompt", "workingState"]) assert.equal(key in evidence, false);
});

test("App reconstructs only when opening a cleared session and never saves workload working state", () => {
  assert.match(appSource, /if \(!workloadSession\) setWorkloadSession\(reconstructWorkloadSession\(workloadEvidence\)\)/);
  assert.match(appSource, /setWorkloadEvidence\(saved\.workloadEvidence\);\s*setWorkloadSession\(null\)/);
  const savePayload = appSource.match(/localStorage\.setItem\(SAVE_KEY, JSON\.stringify\(\{([\s\S]*?)\n      \}\)\);/);
  assert.ok(savePayload);
  assert.match(savePayload[1], /workloadEvidence/);
  assert.doesNotMatch(savePayload[1], /\n\s+(?:workloadSession|selected|freeFormSource|freeFormResponse|prompt|feedback|workingState),/);
});
