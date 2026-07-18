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
import {
  CUSTODY_LEDGER_TRANSFER_INTERACTION_VERSION,
  createCustodyLedgerTransferInteraction,
} from "../src/CustodyLedgerTransferInteraction.js";
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
  CUSTODY_LEDGER_ACKNOWLEDGE_RAI_FEEDBACK,
  CUSTODY_LEDGER_COMPLETE_RAI_GUIDE,
  CUSTODY_LEDGER_RAI_PRIMARY_CONVERGENCE_VERSION,
  CUSTODY_LEDGER_SUBMIT_RAI_CASE,
  createCustodyLedgerRAIPrimaryConvergence,
  custodyLedgerRAIPrimaryConvergenceAccessibility,
  custodyLedgerRAIPrimaryConvergenceModalities,
} from "../src/CustodyLedgerRAIPrimaryConvergence.js";
import {
  structuredPacketChecks,
  structuredPacketExercise,
  structuredPacketExplanationDimensions,
} from "../src/structuredPacketExercise.js";
import {
  responsibleAIDimensions,
  responsibleAIExercise,
  responsibleAIPrimaryScenarios,
  responsibleAITransferScenarios,
} from "../src/responsibleAIExercise.js";

const predecessor = Object.freeze({
  verificationStatus: "verified",
  cityThresholdAnchorRecorded: true,
  civicDistrictRouteAvailable: true,
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
        ...responsibleAIPrimaryScenarios,
        ...responsibleAITransferScenarios,
        { id: "closed_note_explanation" },
      ].map(({ id }) => [
        id,
        Object.fromEntries(responsibleAIDimensions.map((dimension) => [dimension, true])),
      ])),
      masteryStatus: "mastered",
    },
  };
}

function observationEvidence() {
  const boards = ["SC-03-10", "SC-03-10", "SC-03-10", "SC-03-20", "SC-03-20"];
  return custodyLedgerObservationIds.map((observationId, index) => ({
    packetId: "RP-002",
    observationId,
    boardId: boards[index],
    finalizationStatus: "finalized",
    provenance: CUSTODY_LEDGER_OBSERVATION_ACTION,
  }));
}

function fixture() {
  const scaffold = createCustodyLedgerScaffoldFromVerifiedRouteBoundary(predecessor);
  const learningState = advanceCustodyLedgerPrerequisite(scaffold, prerequisites());
  const boundary = {
    checkpoint: "sc03_python_primary_blank",
    boardId: "SC-03-30",
    observationEvidence: observationEvidence(),
    predecessor: { ...predecessor },
    learningState,
  };
  const primaryResult = createCustodyLedgerPrimaryInteraction({ boundary }).dispatch({
    packetId: "RP-002",
    version: CUSTODY_LEDGER_PRIMARY_INTERACTION_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS,
    activationKind: "pointer",
    eventToken: "rai-convergence-primary-fixture",
    classification: "unknown",
    fieldOwner: "human_expedition",
  }).state;
  const freshPracticeState = createCustodyLedgerPrimaryResultDismissal({ primaryResult, learningState }).dispatch({
    packetId: "RP-002",
    version: CUSTODY_LEDGER_PRIMARY_RESULT_DISMISSAL_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CUSTODY_LEDGER_CLEAR_RESULT_ACTION,
    activationKind: "pointer",
    eventToken: "rai-convergence-fresh-fixture",
  }).state;
  const transferCompleteState = createCustodyLedgerTransferInteraction({
    primaryResult,
    learningState,
    freshPracticeState,
  }).dispatch({
    packetId: "RP-002",
    version: CUSTODY_LEDGER_TRANSFER_INTERACTION_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS,
    activationKind: "pointer",
    eventToken: "rai-convergence-transfer-fixture",
    classification: "unknown",
    fieldOwner: "human_reviewer",
  }).state;
  const explanationEntryState = createCustodyLedgerExplanationEntry({
    primaryResult,
    learningState,
    freshPracticeState,
    transferCompleteState,
  }).dispatch({
    packetId: "RP-002",
    version: CUSTODY_LEDGER_EXPLANATION_ENTRY_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CUSTODY_LEDGER_OPEN_BLANK_EXPLANATION,
    activationKind: "pointer",
    eventToken: "rai-convergence-explanation-fixture",
  }).state;
  const options = { primaryResult, learningState, freshPracticeState, transferCompleteState, explanationEntryState };
  const explanation = createCustodyLedgerExplanationSubmission(options);
  for (const dimension of custodyLedgerExplanationDimensions) {
    explanation.updateResponse({ dimension, value: custodyLedgerExplanationAnswers[dimension] });
  }
  const explanationCompleteState = explanation.dispatch({
    packetId: "RP-002",
    version: CUSTODY_LEDGER_EXPLANATION_SUBMISSION_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CUSTODY_LEDGER_SUBMIT_PYTHON_EXPLANATION,
    activationKind: "pointer",
    eventToken: "rai-convergence-complete-fixture",
  }).state;
  return { ...options, explanationCompleteState };
}

function intent(action, eventToken, overrides = {}) {
  return {
    packetId: "RP-002",
    version: CUSTODY_LEDGER_RAI_PRIMARY_CONVERGENCE_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action,
    activationKind: "pointer",
    eventToken,
    ...overrides,
  };
}

function canonicalResponse(caseId) {
  const scenario = responsibleAIPrimaryScenarios.find(({ id }) => id === caseId);
  return Object.fromEntries(custodyLedgerRAIDimensions.map((dimension) => [dimension, scenario[dimension]]));
}

function authorCase(controller, caseId, response = canonicalResponse(caseId)) {
  for (const dimension of custodyLedgerRAIDimensions) {
    assert.equal(controller.updateResponse({ caseId, dimension, value: response[dimension] }).status, "response_updated_session_only");
  }
}

function submitCase(controller, caseId, suffix = caseId) {
  return controller.dispatch(intent(CUSTODY_LEDGER_SUBMIT_RAI_CASE, `submit-${suffix}`));
}

function passFirstTwo(controller) {
  for (const caseId of ["P01", "P02"]) {
    authorCase(controller, caseId);
    const result = submitCase(controller, caseId);
    assert.equal(result.status, "next_blank_case");
    assert.equal(result.evaluationExposed, false);
  }
}

function assertZeroEffect(state) {
  assert.equal(state.cityStateDelta, null);
  assert.equal(state.continuation, "continuation");
  assert.equal(state.successor, null);
  assert.equal(state.routable, false);
  assert.equal(state.browserStorageUsed, false);
  assert.equal(state.liveServiceUsed, false);
  assert.equal(state.authorityGranted, false);
  assert.equal(state.accessGranted, false);
  assert.equal(state.externalActionEnabled, false);
  assert.equal(state.masteryGrantedByPresentation, false);
  assert.equal(state.raiCrossCreditGranted, false);
  assert.equal(state.savePerformed, false);
  assert.equal(state.examCreditGranted, false);
  assert.equal(state.examGuarantee, false);
}

test("protected convergence opens only blank P01 with one-group accessibility and no transfer authority", () => {
  const state = createCustodyLedgerRAIPrimaryConvergence(fixture()).getState();
  assert.equal(state.phase, "RAIC-00");
  assert.equal(state.stateName, "BLANK_OR_SESSION_ONLY_RAI_PRIMARY");
  assert.equal(state.case.id, "P01");
  assert.deepEqual(state.controls.map(({ id, valueState }) => [id, valueState]), [
    ["principle", "genuinely_blank"],
    ["mitigation", "genuinely_blank"],
    ["accountable_owner", "genuinely_blank"],
  ]);
  assert.equal(state.interimEvaluationExposed, false);
  assert.equal(state.finalizedRAIEvidenceVisibility, "none");
  assert.deepEqual(state.accessibility, custodyLedgerRAIPrimaryConvergenceAccessibility);
  assert.equal(state.accessibility.minActionCssPx, 44);
  assert.equal(state.accessibility.textZoomPercent, 200);
  assert.equal(JSON.stringify(state).includes("raiTransferEvaluatorImplemented"), false);
  assertZeroEffect(state);
});

test("P01 and P02 replace atomically with blank next cases and expose no interim result or evidence", () => {
  const controller = createCustodyLedgerRAIPrimaryConvergence(fixture());
  for (const [index, caseId] of ["P01", "P02"].entries()) {
    authorCase(controller, caseId);
    assert.equal(controller.getState().controlState, "private_session_work");
    assert.equal(controller.getState().controls.some((control) => Object.hasOwn(control, "value")), false);
    const result = submitCase(controller, caseId);
    assert.equal(result.status, "next_blank_case");
    assert.equal(result.replacement, "atomic");
    assert.equal(result.state.case.id, index === 0 ? "P02" : "P03");
    assert.equal(result.state.controlState, "genuinely_blank");
    assert.equal(result.state.interimEvaluationExposed, false);
    assert.equal(result.state.finalizedRAIEvidenceVisibility, "none");
    assert.equal(JSON.stringify(result.state).includes("score"), false);
  }
});

test("only P03 invokes simultaneous strict 9/9 and opens a sanitized blank transfer boundary", () => {
  const controller = createCustodyLedgerRAIPrimaryConvergence(fixture());
  passFirstTwo(controller);
  authorCase(controller, "P03");
  const result = submitCase(controller, "P03");
  assert.equal(result.status, "strict_primary_complete");
  assert.equal(result.state.phase, "RAIC-20C");
  assert.equal(result.state.stateName, "GENUINELY_BLANK_RAI_TRANSFER_BOUNDARY");
  assert.equal(result.state.case.id, "T01");
  assert.equal(result.state.controlState, "genuinely_blank");
  assert.equal(result.state.attemptStatus, "no_attempt");
  assert.equal(result.state.transferEvaluationExposed, false);
  assert.equal(result.state.transferActionExposed, false);
  assert.deepEqual(result.state.availableActions, ["RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD"]);
  assert.equal(result.state.finalizedRAIEvidence.masteryStatus, "primary_complete");
  assert.equal(Object.values(result.state.finalizedRAIEvidence.dimensionCorrectness)
    .flatMap((dimensions) => Object.values(dimensions)).filter(Boolean).length, 9);
  assert.equal(JSON.stringify(result.state).includes("raiTransferEvaluatorImplemented"), false);
  assertZeroEffect(result.state);
});

test("unsafe mitigation and nonhuman owner cannot be compensated by otherwise correct principles", () => {
  const controller = createCustodyLedgerRAIPrimaryConvergence(fixture());
  authorCase(controller, "P01");
  submitCase(controller, "P01");
  const p02 = canonicalResponse("P02");
  p02.mitigation = responsibleAIPrimaryScenarios.find(({ id }) => id === "P02").mitigation_choices[1];
  authorCase(controller, "P02", p02);
  submitCase(controller, "P02");
  const p03 = canonicalResponse("P03");
  p03.owner = responsibleAIPrimaryScenarios.find(({ id }) => id === "P03").owner_choices[1];
  authorCase(controller, "P03", p03);
  const result = submitCase(controller, "P03");
  assert.equal(result.status, "actual_miss_feedback");
  assert.deepEqual(result.state.failedCaseDimensions.map(({ scenarioId, dimension }) => [scenarioId, dimension]), [
    ["P02", "mitigation"],
    ["P03", "owner"],
  ]);
  assert.equal(result.state.failedCaseDimensions.every(({ answerFree }) => answerFree), true);
  assert.equal(result.state.passedDimensionsRecapped, false);
  assert.equal(result.state.totalScoreExposed, false);
  assert.equal(result.state.privateChoicesCleared, true);
  assert.equal(JSON.stringify(result.state).includes(p02.mitigation), false);
  assert.equal(JSON.stringify(result.state).includes(p03.owner), false);
});

test("actual-miss feedback opens one neutral guide and valid zero-credit work returns wholly blank at first failed case", () => {
  const controller = createCustodyLedgerRAIPrimaryConvergence(fixture());
  authorCase(controller, "P01");
  submitCase(controller, "P01");
  const p02 = canonicalResponse("P02");
  p02.mitigation = "";
  authorCase(controller, "P02", p02);
  submitCase(controller, "P02");
  authorCase(controller, "P03");
  submitCase(controller, "P03");

  const opened = controller.dispatch(intent(CUSTODY_LEDGER_ACKNOWLEDGE_RAI_FEEDBACK, "open-neutral-guide"));
  assert.equal(opened.status, "zero_credit_guide_opened");
  assert.equal(opened.state.phase, "RAIC-30G");
  assert.equal(opened.state.guide.scored, false);
  assert.equal(JSON.stringify(opened.state).includes("raiFeedback"), false);
  for (const [dimension, value] of Object.entries({
    principle: "fairness",
    mitigation: "measure outcomes and require a human appeal path",
    owner: "expedition review board",
  })) controller.updateGuidedResponse({ dimension, value });
  const retry = controller.dispatch(intent(CUSTODY_LEDGER_COMPLETE_RAI_GUIDE, "complete-neutral-guide"));
  assert.equal(retry.status, "blank_primary_retry");
  assert.equal(retry.creditGranted, false);
  assert.equal(retry.state.case.id, "P02");
  assert.equal(retry.state.focusIntent.then, "mitigation");
  assert.equal(retry.state.controlState, "genuinely_blank");
  assert.equal(retry.state.controls.every(({ valueState }) => valueState === "genuinely_blank"), true);
  assert.equal(JSON.stringify(retry.state).includes("expedition review board"), false);
  assertZeroEffect(retry.state);
});

test("incomplete or nonhuman guided work stays zero-credit and clears private work", () => {
  const controller = createCustodyLedgerRAIPrimaryConvergence(fixture());
  for (const caseId of ["P01", "P02", "P03"]) {
    const response = canonicalResponse(caseId);
    if (caseId === "P01") response.principle = "";
    authorCase(controller, caseId, response);
    submitCase(controller, caseId);
  }
  controller.dispatch(intent(CUSTODY_LEDGER_ACKNOWLEDGE_RAI_FEEDBACK, "guide-for-incomplete"));
  for (const [dimension, value] of Object.entries({ principle: "fairness", mitigation: "measure outcomes", owner: "model" })) {
    controller.updateGuidedResponse({ dimension, value });
  }
  const result = controller.dispatch(intent(CUSTODY_LEDGER_COMPLETE_RAI_GUIDE, "reject-nonhuman-guide"));
  assert.equal(result.status, "guided_practice_incomplete");
  assert.equal(result.creditGranted, false);
  assert.equal(result.state.phase, "RAIC-30G");
  assert.equal(result.state.controlState, "genuinely_blank");
  assert.equal(JSON.stringify(result.state).includes("model"), false);
});

test("all seven modalities are one-hit and malformed, stale, combined, Tour, private, and later requests fail closed", () => {
  for (const [index, activationKind] of custodyLedgerRAIPrimaryConvergenceModalities.entries()) {
    const controller = createCustodyLedgerRAIPrimaryConvergence(fixture());
    authorCase(controller, "P01");
    const token = `modality-${index}-submission`;
    const before = controller.getState();
    const invalids = [
      intent(CUSTODY_LEDGER_SUBMIT_RAI_CASE, token, { activationKind: "automatic" }),
      intent(CUSTODY_LEDGER_SUBMIT_RAI_CASE, token, { mode: "tour" }),
      intent(CUSTODY_LEDGER_SUBMIT_RAI_CASE, token, { owner: "SYSTEM // EXPEDITION SESSION" }),
      { ...intent(CUSTODY_LEDGER_SUBMIT_RAI_CASE, token), response: canonicalResponse("P01") },
      intent("SUBMIT RESPONSIBLE-AI CASE + RETURN", token),
      intent("SUBMIT RESPONSIBLE-AI TRANSFER", token),
    ];
    for (const invalid of invalids) {
      const rejected = controller.dispatch(invalid);
      assert.equal(rejected.status, "rejected");
      assert.deepEqual(rejected.state, before);
    }
    const accepted = controller.dispatch(intent(CUSTODY_LEDGER_SUBMIT_RAI_CASE, token, { activationKind }));
    assert.equal(accepted.status, "next_blank_case");
    const duplicate = controller.dispatch(intent(CUSTODY_LEDGER_SUBMIT_RAI_CASE, token, { activationKind }));
    assert.equal(duplicate.status, "duplicate_suppressed");
    assert.deepEqual(duplicate.state, accepted.state);
  }
});

test("wrong case updates and partial or forged response objects preserve the current state", () => {
  const controller = createCustodyLedgerRAIPrimaryConvergence(fixture());
  const before = controller.getState();
  for (const update of [
    { caseId: "P02", dimension: "principle", value: "fairness" },
    { caseId: "P01", dimension: "stakeholder", value: "qualified_applicants" },
    { caseId: "P01", dimension: "principle", value: "fairness", privateNote: "carry me" },
    { caseId: "P01", dimension: "principle" },
  ]) {
    const result = controller.updateResponse(update);
    assert.equal(result.status, "rejected");
    assert.deepEqual(result.state, before);
  }
});

test("sanitation clears unfinalized responses, feedback prose, guide work, tokens, and focus history to deterministic boundaries", () => {
  const controller = createCustodyLedgerRAIPrimaryConvergence(fixture());
  authorCase(controller, "P01");
  submitCase(controller, "P01");
  authorCase(controller, "P02");
  const sanitizedUnscored = controller.sanitizeBoundary().state;
  assert.equal(sanitizedUnscored.case.id, "P01");
  assert.equal(sanitizedUnscored.controlState, "genuinely_blank");
  assert.equal(sanitizedUnscored.finalizedRAIEvidenceVisibility, "none");

  const missed = createCustodyLedgerRAIPrimaryConvergence(fixture());
  for (const caseId of ["P01", "P02", "P03"]) {
    const response = canonicalResponse(caseId);
    if (caseId === "P02") response.owner = "";
    authorCase(missed, caseId, response);
    submitCase(missed, caseId, `miss-${caseId}`);
  }
  const retry = missed.sanitizeBoundary().state;
  assert.equal(retry.phase, "RAIC-00");
  assert.equal(retry.case.id, "P02");
  assert.equal(retry.focusIntent.then, "owner");
  assert.equal(retry.controlState, "genuinely_blank");
  assert.equal(JSON.stringify(retry).includes("raiFeedback"), false);

  const passed = createCustodyLedgerRAIPrimaryConvergence(fixture());
  for (const caseId of ["P01", "P02", "P03"]) {
    authorCase(passed, caseId);
    submitCase(passed, caseId, `pass-${caseId}`);
  }
  const transfer = passed.sanitizeBoundary().state;
  assert.equal(transfer.phase, "RAIC-20C");
  assert.equal(transfer.controlState, "genuinely_blank");
  assert.equal(transfer.transferActionExposed, false);
});

test("exact blank retry and blank transfer restore while contaminated restore downgrades to blank P01", () => {
  const options = fixture();
  const failed = createCustodyLedgerRAIPrimaryConvergence(options);
  for (const caseId of ["P01", "P02", "P03"]) {
    const response = canonicalResponse(caseId);
    if (caseId === "P03") response.owner = "";
    authorCase(failed, caseId, response);
    submitCase(failed, caseId, `restore-miss-${caseId}`);
  }
  const retry = failed.sanitizeBoundary().state;
  assert.deepEqual(createCustodyLedgerRAIPrimaryConvergence({ ...options, restoredState: retry }).getState(), retry);

  const passed = createCustodyLedgerRAIPrimaryConvergence(options);
  for (const caseId of ["P01", "P02", "P03"]) {
    authorCase(passed, caseId);
    submitCase(passed, caseId, `restore-pass-${caseId}`);
  }
  const transfer = passed.getState();
  assert.deepEqual(createCustodyLedgerRAIPrimaryConvergence({ ...options, restoredState: transfer }).getState(), transfer);
  const contaminated = { ...transfer, transferActionExposed: true, privateNote: "later" };
  const downgraded = createCustodyLedgerRAIPrimaryConvergence({ ...options, restoredState: contaminated }).getState();
  assert.equal(downgraded.phase, "RAIC-00");
  assert.equal(downgraded.case.id, "P01");
  assert.equal(downgraded.finalizedRAIEvidenceVisibility, "none");
});

test("separate returns stay write-free and preserve Python, observation, predecessor, campaign, Tour, and world bytes", () => {
  const controller = createCustodyLedgerRAIPrimaryConvergence(fixture());
  const before = controller.getState();
  const evidenceReturn = controller.returnToEvidence();
  const cityReturn = controller.returnToCityThreshold();
  assert.equal(evidenceReturn.writePerformed, false);
  assert.equal(cityReturn.writePerformed, false);
  assert.equal(cityReturn.continuation, "continuation");
  assert.equal(cityReturn.cityStateDelta, null);
  assert.notDeepEqual(evidenceReturn, cityReturn);
  assert.deepEqual(controller.getState(), before);
  assert.deepEqual(controller.getState().primaryEvidence, before.primaryEvidence);
  assert.deepEqual(controller.getState().transferEvidence, before.transferEvidence);
  assert.deepEqual(controller.getState().pythonExplanationEvidence, before.pythonExplanationEvidence);
  assert.deepEqual(controller.getState().observationEvidence, before.observationEvidence);
  assert.deepEqual(controller.getState().predecessor, before.predecessor);
  assert.equal(controller.getState().campaignCommitEnabled, false);
  assertZeroEffect(controller.getState());
});

test("protected controller remains pure, normally composed, and hard-stopped before transfer evaluation and every later state", () => {
  const source = readFileSync(new URL("../src/CustodyLedgerRAIPrimaryConvergence.js", import.meta.url), "utf8");
  const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
  const main = readFileSync(new URL("../src/main.jsx", import.meta.url), "utf8");
  const normalRoute = readFileSync(new URL("../src/CustodyLedgerNormalRoute.js", import.meta.url), "utf8");
  assert.equal(app.includes("CustodyLedgerRAIPrimaryConvergence"), true);
  assert.equal(main.includes("CustodyLedgerRAIPrimaryConvergence"), false);
  assert.equal(normalRoute.includes("CustodyLedgerRAIPrimaryConvergence"), true);
  for (const forbidden of [
    "submitCustodyLedgerRAITransferScenario",
    "evaluateCustodyLedgerRAITransfer",
    "submitCustodyLedgerRAIExplanation",
    "dismissCustodyLedgerRAIConclusion",
    "localStorage",
    "sessionStorage",
    "fetch(",
    "XMLHttpRequest",
    "document.",
    "window.",
    "RP-003",
  ]) assert.equal(source.includes(forbidden), false, forbidden);
  assert.equal(source.includes("successor: null"), true);
  assert.equal(source.includes("cityStateDelta: null"), true);
});
