import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { buildCompletedMeadowReturnPatch } from "../src/sceneTransition.js";
import {
  createWorkloadSession,
  evaluateWorkloadSelection,
  getWorkloadItems,
  getWorkloadOutcome,
  reconstructWorkloadSession,
  sanitizeWorkloadEvidence,
  updateWorkloadEvidence,
  workloadSortExercise,
} from "../src/workloadSortExercise.js";

const appSource = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const styleSource = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");

function buildFinalizedEvidence(form, correctness) {
  let evidence = form === "retry"
    ? getWorkloadItems("primary").reduce((current, item) => updateWorkloadEvidence(current, {
      incrementAttempt: true,
      itemId: item.id,
      correct: item.id !== "W01",
      misconceptionTags: item.id === "W01" ? item.tags : [],
    }), null)
    : null;
  for (const [index, correct] of correctness.entries()) {
    const item = getWorkloadItems(form)[index];
    evidence = updateWorkloadEvidence(evidence, {
      incrementAttempt: true,
      itemId: item.id,
      correct,
      misconceptionTags: correct ? [] : item.tags,
    });
  }
  return evidence;
}

test("a corrected W01 survives the scene round trip as prior progress while W02 controls restart clean", () => {
  let workingSession = { ...createWorkloadSession(), selected: "s" };
  const firstMiss = evaluateWorkloadSelection(workingSession);
  workingSession = { ...firstMiss.session, selected: "g" };
  const correction = evaluateWorkloadSelection(workingSession);
  let evidence = updateWorkloadEvidence(null, {
    incrementAttempt: true,
    hintLevel: firstMiss.session.hintLevel,
  });
  evidence = updateWorkloadEvidence(evidence, {
    incrementAttempt: true,
    itemId: correction.item.id,
    correct: correction.correct,
    hintLevel: correction.session.hintLevel,
  });
  const evidenceBeforeTrip = structuredClone(evidence);
  const returnPatch = buildCompletedMeadowReturnPatch(["meadow", "ruins"], { masteryStatus: "mastered" });
  const afterReturn = {
    workloadSession: correction.session,
    workloadEvidence: evidence,
    ...returnPatch,
  };

  assert.equal(afterReturn.workloadSession, null);
  assert.deepEqual(afterReturn.workloadEvidence, evidenceBeforeTrip);
  const resumed = reconstructWorkloadSession(afterReturn.workloadEvidence);
  assert.equal(getWorkloadItems(resumed.form)[resumed.index].id, "W02");
  assert.deepEqual(resumed.results, { W01: true });
  assert.equal(resumed.selected, "");
  assert.equal(resumed.itemAttempt, 0);
  assert.equal(resumed.hintLevel, 0);
  assert.equal(
    resumed.resumeNotice,
    "RESUME // PRIOR ASSESSED PROGRESS: 1/12 finalized · WORKING CONTROLS: reset clean",
  );
  assert.equal(afterReturn.workloadEvidence.attemptCount, 2);
});

test("multi-card and retry resumes report only their contiguous active-form prefix", () => {
  const primaryEvidence = buildFinalizedEvidence("primary", [true, true, false, true]);
  const primaryResume = reconstructWorkloadSession(primaryEvidence);
  assert.equal(getWorkloadItems("primary")[primaryResume.index].id, "W05");
  assert.equal(primaryResume.resumeNotice, "RESUME // PRIOR ASSESSED PROGRESS: 4/12 finalized · WORKING CONTROLS: reset clean");
  assert.equal(primaryResume.selected, "");

  const retryEvidence = buildFinalizedEvidence("retry", [true, true, true]);
  const retryResume = reconstructWorkloadSession(retryEvidence);
  assert.equal(retryResume.form, "retry");
  assert.equal(getWorkloadItems("retry")[retryResume.index].id, "R-W04");
  assert.equal(retryResume.resumeNotice, "RESUME // PRIOR ASSESSED PROGRESS: 3/12 finalized · WORKING CONTROLS: reset clean");
  assert.equal(retryResume.selected, "");
  assert.equal(retryResume.itemAttempt, 0);
});

test("an unfinalized miss reports zero finalized progress without retaining its private controls or adding an attempt", () => {
  const evidence = updateWorkloadEvidence(null, { incrementAttempt: true, hintLevel: 1 });
  const snapshot = structuredClone(evidence);
  const resumed = reconstructWorkloadSession({
    ...evidence,
    selected: "s",
    feedback: "private feedback",
    response: "private response",
    workingIndex: 11,
  });
  assert.equal(resumed.index, 0);
  assert.equal(resumed.selected, "");
  assert.equal(resumed.itemAttempt, 0);
  assert.equal(resumed.hintLevel, 0);
  assert.equal(resumed.resumeNotice, "RESUME // PRIOR ASSESSED PROGRESS: 0/12 finalized · WORKING CONTROLS: reset clean");
  assert.equal(JSON.stringify(resumed).includes("private"), false);
  assert.deepEqual(evidence, snapshot);
  assert.equal(evidence.attemptCount, 1);
});

test("a complete reconstructed result remains unacknowledged and obeys score, critical, confidence, and remediation gates", () => {
  const allCorrect = sanitizeWorkloadEvidence({
    exerciseId: workloadSortExercise.exercise_id,
    itemCorrectness: Object.fromEntries(getWorkloadItems("primary").map((item) => [item.id, true])),
    masteryStatus: "in_progress",
  });
  const complete = reconstructWorkloadSession(allCorrect);
  assert.equal(complete.phase, "form_complete");
  assert.equal(complete.resumeNotice, "RESUME // PRIOR ASSESSED PROGRESS: 12/12 finalized · WORKING CONTROLS: reset clean");
  assert.deepEqual(getWorkloadOutcome(complete), { score: 12, total: 12, passed: true, criticalMisses: [] });
  assert.equal(allCorrect.confidence, null);
  assert.equal(allCorrect.masteryStatus, "in_progress");

  const tenNoncritical = reconstructWorkloadSession(buildFinalizedEvidence("primary", [true, true, false, false, true, true, true, true, true, true, true, true]));
  assert.equal(getWorkloadOutcome(tenNoncritical).passed, true);
  const elevenWithCritical = reconstructWorkloadSession(buildFinalizedEvidence("primary", [false, true, true, true, true, true, true, true, true, true, true, true]));
  assert.deepEqual(getWorkloadOutcome(elevenWithCritical), {
    score: 11,
    total: 12,
    passed: false,
    criticalMisses: ["generative-is-agentic"],
  });
  assert.equal(sanitizeWorkloadEvidence({ ...allCorrect, masteryStatus: "mastered" }).masteryStatus, "in_progress");
});

test("the compact resume note is conditional, accessible, and bounded at 640x480 and 320x240", () => {
  assert.match(appSource, /workloadSession\.resumeNotice && \([\s\S]*?className="workload-resume-note" role="note"/);
  assert.match(appSource, /disabled=\{!workloadEvidence\?\.confidence\}[\s\S]*?Acknowledge mastery/);
  assert.match(appSource, /Mastery gate not met[\s\S]*?Load fresh retry form/);
  assert.match(appSource, /onClose=\{\(\) => setTerminalOpen\(false\)\}/);
  assert.match(appSource, /setWorkloadSession\(returnPatch\.workloadSession\)/);
  assert.match(styleSource, /\.workload-resume-note \{[\s\S]*?font: 0\.6rem\/1\.3 "Courier New", monospace;/);
  assert.match(styleSource, /canonical-game-frame \.workload-resume-note \{[\s\S]*?border-radius: 0;[\s\S]*?box-shadow: none;[\s\S]*?font-size: 8px;[\s\S]*?line-height: 10px;[\s\S]*?white-space: normal;[\s\S]*?overflow-wrap: anywhere;/);
  assert.match(styleSource, /data-canonical-layout="narrow"\] \.workload-resume-note \{[\s\S]*?font-size: 8px;[\s\S]*?line-height: 10px;/);
});
