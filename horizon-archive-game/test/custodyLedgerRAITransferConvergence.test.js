import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  CUSTODY_LEDGER_PRIMARY_INTERACTION_VERSION,
  CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS,
  createCustodyLedgerPrimaryInteraction,
} from "../src/CustodyLedgerPrimaryInteraction.js";
import {
  CUSTODY_LEDGER_CLEAR_RESULT_ACTION,
  CUSTODY_LEDGER_PRIMARY_RESULT_DISMISSAL_VERSION,
  createCustodyLedgerPrimaryResultDismissal,
} from "../src/CustodyLedgerPrimaryResultDismissal.js";
import { CUSTODY_LEDGER_TRANSFER_INTERACTION_VERSION, createCustodyLedgerTransferInteraction } from "../src/CustodyLedgerTransferInteraction.js";
import {
  CUSTODY_LEDGER_EXPLANATION_ENTRY_VERSION,
  CUSTODY_LEDGER_OPEN_BLANK_EXPLANATION,
  createCustodyLedgerExplanationEntry,
} from "../src/CustodyLedgerExplanationEntry.js";
import {
  CUSTODY_LEDGER_EXPLANATION_SUBMISSION_VERSION,
  CUSTODY_LEDGER_SUBMIT_PYTHON_EXPLANATION,
  createCustodyLedgerExplanationSubmission,
} from "../src/CustodyLedgerExplanationSubmission.js";
import {
  CUSTODY_LEDGER_OBSERVATION_ACTION,
  advanceCustodyLedgerPrerequisite,
  createCustodyLedgerScaffoldFromVerifiedRouteBoundary,
  custodyLedgerExplanationAnswers,
  custodyLedgerExplanationDimensions,
  custodyLedgerObservationIds,
  custodyLedgerRAIDimensions,
} from "../src/custodyLedgerExercise.js";
import {
  CUSTODY_LEDGER_RAI_PRIMARY_CONVERGENCE_VERSION,
  CUSTODY_LEDGER_SUBMIT_RAI_CASE,
  createCustodyLedgerRAIPrimaryConvergence,
} from "../src/CustodyLedgerRAIPrimaryConvergence.js";
import {
  CUSTODY_LEDGER_ACKNOWLEDGE_RAI_TRANSFER_FEEDBACK,
  CUSTODY_LEDGER_COMPLETE_RAI_TRANSFER_GUIDE,
  CUSTODY_LEDGER_RAI_TRANSFER_CONVERGENCE_VERSION,
  CUSTODY_LEDGER_SUBMIT_RAI_TRANSFER_CASE,
  createCustodyLedgerRAITransferConvergence,
  custodyLedgerRAITransferConvergenceAccessibility,
  custodyLedgerRAITransferConvergenceModalities,
} from "../src/CustodyLedgerRAITransferConvergence.js";
import { structuredPacketChecks, structuredPacketExercise, structuredPacketExplanationDimensions } from "../src/structuredPacketExercise.js";
import {
  responsibleAIDimensions,
  responsibleAIExercise,
  responsibleAIPrimaryScenarios,
  responsibleAITransferScenarios,
} from "../src/responsibleAIExercise.js";

const predecessor = Object.freeze({
  verificationStatus: "verified", cityThresholdAnchorRecorded: true, civicDistrictRouteAvailable: true,
});

function prerequisites() {
  return {
    structuredPacketEvidence: {
      exerciseId: structuredPacketExercise.exercise_id,
      checkCorrectness: {
        primary: Object.fromEntries(structuredPacketChecks.map((id) => [id, true])),
        transfer: Object.fromEntries(structuredPacketChecks.map((id) => [id, true])),
        explanation: Object.fromEntries(structuredPacketExplanationDimensions.map((id) => [id, true])),
      },
      masteryStatus: "mastered",
    },
    responsibleAIEvidence: {
      exerciseId: responsibleAIExercise.exercise_id,
      dimensionCorrectness: Object.fromEntries([
        ...responsibleAIPrimaryScenarios, ...responsibleAITransferScenarios, { id: "closed_note_explanation" },
      ].map(({ id }) => [id, Object.fromEntries(responsibleAIDimensions.map((dimension) => [dimension, true]))])),
      masteryStatus: "mastered",
    },
  };
}

function fixture() {
  const scaffold = createCustodyLedgerScaffoldFromVerifiedRouteBoundary(predecessor);
  const learningState = advanceCustodyLedgerPrerequisite(scaffold, prerequisites());
  const boards = ["SC-03-10", "SC-03-10", "SC-03-10", "SC-03-20", "SC-03-20"];
  const observationEvidence = custodyLedgerObservationIds.map((observationId, index) => ({
    packetId: "RP-002", observationId, boardId: boards[index], finalizationStatus: "finalized",
    provenance: CUSTODY_LEDGER_OBSERVATION_ACTION,
  }));
  const boundary = { checkpoint: "sc03_python_primary_blank", boardId: "SC-03-30", observationEvidence, predecessor: { ...predecessor }, learningState };
  const primaryResult = createCustodyLedgerPrimaryInteraction({ boundary }).dispatch({
    packetId: "RP-002", version: CUSTODY_LEDGER_PRIMARY_INTERACTION_VERSION, mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER", action: CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS,
    activationKind: "pointer", eventToken: "transfer-convergence-primary", classification: "unknown", fieldOwner: "human_expedition",
  }).state;
  const freshPracticeState = createCustodyLedgerPrimaryResultDismissal({ primaryResult, learningState }).dispatch({
    packetId: "RP-002", version: CUSTODY_LEDGER_PRIMARY_RESULT_DISMISSAL_VERSION, mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER", action: CUSTODY_LEDGER_CLEAR_RESULT_ACTION,
    activationKind: "pointer", eventToken: "transfer-convergence-fresh",
  }).state;
  const transferCompleteState = createCustodyLedgerTransferInteraction({ primaryResult, learningState, freshPracticeState }).dispatch({
    packetId: "RP-002", version: CUSTODY_LEDGER_TRANSFER_INTERACTION_VERSION, mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER", action: CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS,
    activationKind: "pointer", eventToken: "transfer-convergence-python-transfer", classification: "unknown", fieldOwner: "human_reviewer",
  }).state;
  const explanationEntryState = createCustodyLedgerExplanationEntry({ primaryResult, learningState, freshPracticeState, transferCompleteState }).dispatch({
    packetId: "RP-002", version: CUSTODY_LEDGER_EXPLANATION_ENTRY_VERSION, mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER", action: CUSTODY_LEDGER_OPEN_BLANK_EXPLANATION,
    activationKind: "pointer", eventToken: "transfer-convergence-python-explanation",
  }).state;
  const options = { primaryResult, learningState, freshPracticeState, transferCompleteState, explanationEntryState };
  const explanation = createCustodyLedgerExplanationSubmission(options);
  for (const dimension of custodyLedgerExplanationDimensions) {
    explanation.updateResponse({ dimension, value: custodyLedgerExplanationAnswers[dimension] });
  }
  const explanationCompleteState = explanation.dispatch({
    packetId: "RP-002", version: CUSTODY_LEDGER_EXPLANATION_SUBMISSION_VERSION, mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER", action: CUSTODY_LEDGER_SUBMIT_PYTHON_EXPLANATION,
    activationKind: "pointer", eventToken: "transfer-convergence-python-complete",
  }).state;
  const primary = createCustodyLedgerRAIPrimaryConvergence({ ...options, explanationCompleteState });
  for (const scenario of responsibleAIPrimaryScenarios.filter(({ id }) => ["P01", "P02", "P03"].includes(id))) {
    for (const dimension of custodyLedgerRAIDimensions) {
      primary.updateResponse({ caseId: scenario.id, dimension, value: scenario[dimension] });
    }
    primary.dispatch({
      packetId: "RP-002", version: CUSTODY_LEDGER_RAI_PRIMARY_CONVERGENCE_VERSION, mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER", action: CUSTODY_LEDGER_SUBMIT_RAI_CASE,
      activationKind: "pointer", eventToken: `transfer-convergence-primary-${scenario.id}`,
    });
  }
  return { ...options, explanationCompleteState, acceptedBlankTransferState: primary.getState() };
}

const answers = Object.freeze({
  T01: { principle: "transparency", mitigation: "preserve_provenance_missingness_and_limits", owner: "human_evidence_reviewer" },
  T02: { principle: "privacy_and_security", mitigation: "do_not_open_or_retain_unneeded_private_data", owner: "human_privacy_reviewer" },
  T03: { principle: "accountability", mitigation: "assign_review_audit_and_correction_responsibility", owner: "human_decision_owner" },
});

function intent(action, eventToken, overrides = {}) {
  return {
    packetId: "RP-002", version: CUSTODY_LEDGER_RAI_TRANSFER_CONVERGENCE_VERSION, mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER", action, activationKind: "pointer", eventToken, ...overrides,
  };
}
function author(controller, caseId, response = answers[caseId]) {
  for (const dimension of custodyLedgerRAIDimensions) {
    assert.equal(controller.updateResponse({ caseId, dimension, value: response[dimension] }).status, "response_updated_session_only");
  }
}
function submit(controller, caseId, suffix = caseId) {
  return controller.dispatch(intent(CUSTODY_LEDGER_SUBMIT_RAI_TRANSFER_CASE, `submit-transfer-${suffix}`));
}
function passFirstTwo(controller) {
  for (const caseId of ["T01", "T02"]) {
    author(controller, caseId);
    assert.equal(submit(controller, caseId).status, "next_blank_transfer_case");
  }
}
function assertZeroEffect(state) {
  for (const key of ["authorityGranted", "accessGranted", "externalActionEnabled", "storyObservationGranted", "savePerformed", "examCreditGranted"]) {
    assert.equal(state[key], false, key);
  }
  assert.equal(state.cityStateDelta, null);
  assert.equal(state.successor, null);
  assert.equal(state.routable, false);
  assert.equal(state.browserStorageUsed, false);
  assert.equal(state.raiCrossCreditGranted, false);
}

test("protected transfer convergence opens only blank T01 and preserves the accepted boundary", () => {
  const state = createCustodyLedgerRAITransferConvergence(fixture()).getState();
  assert.equal(state.phase, "RAITC-00");
  assert.equal(state.case.id, "T01");
  assert.equal(state.controlState, "genuinely_blank");
  assert.equal(state.controls.every(({ valueState }) => valueState === "genuinely_blank"), true);
  assert.equal(state.finalizedRAITransferEvidenceVisibility, "none");
  assert.deepEqual(state.accessibility, custodyLedgerRAITransferConvergenceAccessibility);
  assertZeroEffect(state);
});

test("T01 and T02 replace atomically with wholly blank cases and no interim result", () => {
  const controller = createCustodyLedgerRAITransferConvergence(fixture());
  for (const [index, caseId] of ["T01", "T02"].entries()) {
    author(controller, caseId);
    assert.equal(controller.getState().controls.some((control) => Object.hasOwn(control, "value")), false);
    const result = submit(controller, caseId);
    assert.equal(result.status, "next_blank_transfer_case");
    assert.equal(result.evaluationExposed, false);
    assert.equal(result.state.case.id, index === 0 ? "T02" : "T03");
    assert.equal(result.state.controlState, "genuinely_blank");
    assert.equal(JSON.stringify(result.state).includes("score"), false);
  }
});

test("only T03 invokes strict 9/9 and opens a blank Teacher explanation entry", () => {
  const controller = createCustodyLedgerRAITransferConvergence(fixture());
  passFirstTwo(controller);
  author(controller, "T03");
  const result = submit(controller, "T03");
  assert.equal(result.status, "strict_transfer_complete");
  assert.equal(result.state.phase, "RAITC-20C");
  assert.equal(result.state.stateName, "GENUINELY_BLANK_RAI_EXPLANATION_ENTRY");
  assert.equal(result.state.owner, "901 TEACHER // FEEDBACK");
  assert.equal(result.state.controls.length, 3);
  assert.equal(result.state.controls.every(({ valueState }) => valueState === "genuinely_blank"), true);
  assert.equal(result.state.explanationEvaluationExposed, false);
  assert.equal(result.state.explanationActionExposed, false);
  assert.deepEqual(result.state.availableActions, ["RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD"]);
  assert.equal(Object.values(result.state.finalizedRAITransferEvidence.dimensionCorrectness)
    .flatMap((dimensions) => Object.values(dimensions)).filter(Boolean).length, 9);
  assertZeroEffect(result.state);
});

test("unsafe mitigation and nonhuman owner yield only actual failed pairs", () => {
  const controller = createCustodyLedgerRAITransferConvergence(fixture());
  author(controller, "T01"); submit(controller, "T01");
  author(controller, "T02", { ...answers.T02, mitigation: "unsafe_shortcut" }); submit(controller, "T02");
  author(controller, "T03", { ...answers.T03, owner: "model" });
  const result = submit(controller, "T03");
  assert.equal(result.status, "actual_transfer_miss_feedback");
  assert.deepEqual(result.state.failedCaseDimensions.map(({ scenarioId, dimension }) => [scenarioId, dimension]), [
    ["T02", "mitigation"], ["T03", "owner"],
  ]);
  assert.equal(result.state.failedCaseDimensions.every(({ answerFree }) => answerFree), true);
  assert.equal(JSON.stringify(result.state).includes("unsafe_shortcut"), false);
  assert.equal(JSON.stringify(result.state).includes('"model"'), false);
});

test("failed-pair feedback opens one zero-credit guide then a wholly blank first-failed retry", () => {
  const controller = createCustodyLedgerRAITransferConvergence(fixture());
  author(controller, "T01"); submit(controller, "T01");
  author(controller, "T02", { ...answers.T02, mitigation: "" }); submit(controller, "T02");
  author(controller, "T03"); submit(controller, "T03");
  const opened = controller.dispatch(intent(CUSTODY_LEDGER_ACKNOWLEDGE_RAI_TRANSFER_FEEDBACK, "open-transfer-guide"));
  assert.equal(opened.status, "zero_credit_transfer_guide_opened");
  assert.equal(opened.state.guide.scored, false);
  for (const [dimension, value] of Object.entries({
    principle: "fairness", mitigation: "measure outcomes and require human review", owner: "expedition review board",
  })) controller.updateGuidedResponse({ dimension, value });
  const retry = controller.dispatch(intent(CUSTODY_LEDGER_COMPLETE_RAI_TRANSFER_GUIDE, "complete-transfer-guide"));
  assert.equal(retry.status, "blank_transfer_retry");
  assert.equal(retry.creditGranted, false);
  assert.equal(retry.state.case.id, "T02");
  assert.equal(retry.state.focusIntent.then, "mitigation");
  assert.equal(retry.state.controlState, "genuinely_blank");
  assert.equal(JSON.stringify(retry.state).includes("expedition review board"), false);
  assertZeroEffect(retry.state);
});

test("incomplete or nonhuman guide work remains zero-credit and clears private work", () => {
  const controller = createCustodyLedgerRAITransferConvergence(fixture());
  for (const caseId of ["T01", "T02", "T03"]) {
    author(controller, caseId, caseId === "T01" ? { ...answers[caseId], principle: "" } : answers[caseId]);
    submit(controller, caseId, `guide-${caseId}`);
  }
  controller.dispatch(intent(CUSTODY_LEDGER_ACKNOWLEDGE_RAI_TRANSFER_FEEDBACK, "open-incomplete-transfer-guide"));
  for (const [dimension, value] of Object.entries({ principle: "fairness", mitigation: "measure outcomes", owner: "system" })) {
    controller.updateGuidedResponse({ dimension, value });
  }
  const result = controller.dispatch(intent(CUSTODY_LEDGER_COMPLETE_RAI_TRANSFER_GUIDE, "reject-transfer-guide"));
  assert.equal(result.status, "transfer_guided_practice_incomplete");
  assert.equal(result.state.controlState, "genuinely_blank");
  assert.equal(JSON.stringify(result.state).includes('"system"'), false);
});

test("all seven modalities are one-hit and malformed, combined, Tour, private, and later intents fail closed", () => {
  for (const [index, activationKind] of custodyLedgerRAITransferConvergenceModalities.entries()) {
    const controller = createCustodyLedgerRAITransferConvergence(fixture());
    author(controller, "T01");
    const token = `transfer-modality-${index}`;
    const before = controller.getState();
    for (const invalid of [
      intent(CUSTODY_LEDGER_SUBMIT_RAI_TRANSFER_CASE, token, { activationKind: "automatic" }),
      intent(CUSTODY_LEDGER_SUBMIT_RAI_TRANSFER_CASE, token, { mode: "tour" }),
      { ...intent(CUSTODY_LEDGER_SUBMIT_RAI_TRANSFER_CASE, token), privateNote: "carry" },
      intent("SUBMIT TRANSFER + RETURN", token),
      intent("SUBMIT RESPONSIBLE-AI EXPLANATION", token),
    ]) {
      const rejected = controller.dispatch(invalid);
      assert.equal(rejected.status, "rejected");
      assert.deepEqual(rejected.state, before);
    }
    const accepted = controller.dispatch(intent(CUSTODY_LEDGER_SUBMIT_RAI_TRANSFER_CASE, token, { activationKind }));
    assert.equal(accepted.status, "next_blank_transfer_case");
    assert.equal(controller.dispatch(intent(CUSTODY_LEDGER_SUBMIT_RAI_TRANSFER_CASE, token, { activationKind })).status, "duplicate_suppressed");
  }
});

test("wrong-case and forged updates preserve exact state", () => {
  const controller = createCustodyLedgerRAITransferConvergence(fixture());
  const before = controller.getState();
  for (const update of [
    { caseId: "T02", dimension: "principle", value: "transparency" },
    { caseId: "T01", dimension: "stakeholder", value: "person" },
    { caseId: "T01", dimension: "owner", value: "human", privateNote: "carry" },
    { caseId: "T01", dimension: "principle" },
  ]) {
    const result = controller.updateResponse(update);
    assert.equal(result.status, "rejected");
    assert.deepEqual(result.state, before);
  }
});

test("sanitation clears transient work and reconstructs only blank T01, first-failed retry, or blank Teacher entry", () => {
  const unscored = createCustodyLedgerRAITransferConvergence(fixture());
  author(unscored, "T01"); submit(unscored, "T01"); author(unscored, "T02");
  assert.equal(unscored.sanitizeBoundary().state.case.id, "T01");
  const failed = createCustodyLedgerRAITransferConvergence(fixture());
  for (const caseId of ["T01", "T02", "T03"]) {
    author(failed, caseId, caseId === "T02" ? { ...answers[caseId], owner: "" } : answers[caseId]);
    submit(failed, caseId, `sanitize-failed-${caseId}`);
  }
  const retry = failed.sanitizeBoundary().state;
  assert.equal(retry.phase, "RAITC-00");
  assert.equal(retry.case.id, "T02");
  assert.equal(retry.focusIntent.then, "owner");
  assert.equal(retry.controlState, "genuinely_blank");
  const passed = createCustodyLedgerRAITransferConvergence(fixture());
  for (const caseId of ["T01", "T02", "T03"]) { author(passed, caseId); submit(passed, caseId, `sanitize-pass-${caseId}`); }
  const explanation = passed.sanitizeBoundary().state;
  assert.equal(explanation.phase, "RAITC-20C");
  assert.equal(explanation.controlState, "genuinely_blank");
});

test("exact blank retry and explanation restore while contaminated state downgrades to blank T01", () => {
  const options = fixture();
  const failed = createCustodyLedgerRAITransferConvergence(options);
  for (const caseId of ["T01", "T02", "T03"]) {
    author(failed, caseId, caseId === "T03" ? { ...answers[caseId], owner: "" } : answers[caseId]);
    submit(failed, caseId, `restore-failed-${caseId}`);
  }
  const retry = failed.sanitizeBoundary().state;
  assert.deepEqual(createCustodyLedgerRAITransferConvergence({ ...options, restoredState: retry }).getState(), retry);
  const passed = createCustodyLedgerRAITransferConvergence(options);
  for (const caseId of ["T01", "T02", "T03"]) { author(passed, caseId); submit(passed, caseId, `restore-pass-${caseId}`); }
  const explanation = passed.getState();
  assert.deepEqual(createCustodyLedgerRAITransferConvergence({ ...options, restoredState: explanation }).getState(), explanation);
  const downgraded = createCustodyLedgerRAITransferConvergence({
    ...options, restoredState: { ...explanation, explanationActionExposed: true, privateNote: "later" },
  }).getState();
  assert.equal(downgraded.phase, "RAITC-00");
  assert.equal(downgraded.case.id, "T01");
  assert.equal(downgraded.finalizedRAITransferEvidenceVisibility, "none");
});

test("separate returns are write-free and preserve accepted evidence and world bytes", () => {
  const controller = createCustodyLedgerRAITransferConvergence(fixture());
  const before = controller.getState();
  assert.equal(controller.returnToEvidence().writePerformed, false);
  assert.equal(controller.returnToCityThreshold().writePerformed, false);
  assert.deepEqual(controller.getState(), before);
  assertZeroEffect(controller.getState());
});

test("protected controller is unimported, storage/network/DOM free, and hard-stopped before explanation evaluation", () => {
  const source = readFileSync(new URL("../src/CustodyLedgerRAITransferConvergence.js", import.meta.url), "utf8");
  for (const entry of ["App.jsx", "main.jsx", "CustodyLedgerNormalRoute.js"]) {
    assert.equal(readFileSync(new URL(`../src/${entry}`, import.meta.url), "utf8").includes("CustodyLedgerRAITransferConvergence"), false);
  }
  for (const forbidden of [
    "submitCustodyLedgerRAIExplanation", "evaluateCustodyLedgerRAIExplanation", "dismissCustodyLedgerRAIConclusion",
    "localStorage", "sessionStorage", "fetch(", "XMLHttpRequest", "document.", "window.", "RP-003", "RP-013",
  ]) assert.equal(source.includes(forbidden), false, forbidden);
  assert.equal(source.includes("successor: null"), true);
  assert.equal(source.includes("cityStateDelta: null"), true);
});
