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
  CUSTODY_LEDGER_RAI_CONCLUSION,
  advanceCustodyLedgerPrerequisite,
  createCustodyLedgerScaffoldFromVerifiedRouteBoundary,
  custodyLedgerExplanationAnswers,
  custodyLedgerExplanationDimensions,
  custodyLedgerObservationIds,
  custodyLedgerRAIDimensions,
  custodyLedgerRAIExplanationAnswers,
  custodyLedgerRAIExplanationDimensions,
} from "../src/custodyLedgerExercise.js";
import {
  CUSTODY_LEDGER_RAI_PRIMARY_CONVERGENCE_VERSION,
  CUSTODY_LEDGER_SUBMIT_RAI_CASE,
  createCustodyLedgerRAIPrimaryConvergence,
} from "../src/CustodyLedgerRAIPrimaryConvergence.js";
import {
  CUSTODY_LEDGER_RAI_TRANSFER_CONVERGENCE_VERSION,
  CUSTODY_LEDGER_SUBMIT_RAI_TRANSFER_CASE,
  createCustodyLedgerRAITransferConvergence,
} from "../src/CustodyLedgerRAITransferConvergence.js";
import {
  CUSTODY_LEDGER_RAI_EXPLANATION_CONVERGENCE_VERSION,
  CUSTODY_LEDGER_RETRY_RAI_EXPLANATION,
  CUSTODY_LEDGER_SUBMIT_RAI_EXPLANATION,
  createCustodyLedgerRAIExplanationConvergence,
  custodyLedgerRAIExplanationConvergenceAccessibility,
  custodyLedgerRAIExplanationConvergenceModalities,
} from "../src/CustodyLedgerRAIExplanationConvergence.js";
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

const transferAnswers = Object.freeze({
  T01: { principle: "transparency", mitigation: "preserve_provenance_missingness_and_limits", owner: "human_evidence_reviewer" },
  T02: { principle: "privacy_and_security", mitigation: "do_not_open_or_retain_unneeded_private_data", owner: "human_privacy_reviewer" },
  T03: { principle: "accountability", mitigation: "assign_review_audit_and_correction_responsibility", owner: "human_decision_owner" },
});

function fixture() {
  const scaffold = createCustodyLedgerScaffoldFromVerifiedRouteBoundary(predecessor);
  const learningState = advanceCustodyLedgerPrerequisite(scaffold, prerequisites());
  const boards = ["SC-03-10", "SC-03-10", "SC-03-10", "SC-03-20", "SC-03-20"];
  const observationEvidence = custodyLedgerObservationIds.map((observationId, index) => ({
    packetId: "RP-002", observationId, boardId: boards[index], finalizationStatus: "finalized",
    provenance: CUSTODY_LEDGER_OBSERVATION_ACTION,
  }));
  const boundary = {
    checkpoint: "sc03_python_primary_blank", boardId: "SC-03-30", observationEvidence,
    predecessor: { ...predecessor }, learningState,
  };
  const primaryResult = createCustodyLedgerPrimaryInteraction({ boundary }).dispatch({
    packetId: "RP-002", version: CUSTODY_LEDGER_PRIMARY_INTERACTION_VERSION, mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER", action: CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS,
    activationKind: "pointer", eventToken: "rai-explanation-primary", classification: "unknown", fieldOwner: "human_expedition",
  }).state;
  const freshPracticeState = createCustodyLedgerPrimaryResultDismissal({ primaryResult, learningState }).dispatch({
    packetId: "RP-002", version: CUSTODY_LEDGER_PRIMARY_RESULT_DISMISSAL_VERSION, mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER", action: CUSTODY_LEDGER_CLEAR_RESULT_ACTION,
    activationKind: "pointer", eventToken: "rai-explanation-fresh",
  }).state;
  const transferCompleteState = createCustodyLedgerTransferInteraction({ primaryResult, learningState, freshPracticeState }).dispatch({
    packetId: "RP-002", version: CUSTODY_LEDGER_TRANSFER_INTERACTION_VERSION, mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER", action: CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS,
    activationKind: "pointer", eventToken: "rai-explanation-python-transfer", classification: "unknown", fieldOwner: "human_reviewer",
  }).state;
  const explanationEntryState = createCustodyLedgerExplanationEntry({ primaryResult, learningState, freshPracticeState, transferCompleteState }).dispatch({
    packetId: "RP-002", version: CUSTODY_LEDGER_EXPLANATION_ENTRY_VERSION, mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER", action: CUSTODY_LEDGER_OPEN_BLANK_EXPLANATION,
    activationKind: "pointer", eventToken: "rai-explanation-python-entry",
  }).state;
  const options = { primaryResult, learningState, freshPracticeState, transferCompleteState, explanationEntryState };
  const pythonExplanation = createCustodyLedgerExplanationSubmission(options);
  for (const dimension of custodyLedgerExplanationDimensions) {
    pythonExplanation.updateResponse({ dimension, value: custodyLedgerExplanationAnswers[dimension] });
  }
  const explanationCompleteState = pythonExplanation.dispatch({
    packetId: "RP-002", version: CUSTODY_LEDGER_EXPLANATION_SUBMISSION_VERSION, mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER", action: CUSTODY_LEDGER_SUBMIT_PYTHON_EXPLANATION,
    activationKind: "pointer", eventToken: "rai-explanation-python-complete",
  }).state;
  const primary = createCustodyLedgerRAIPrimaryConvergence({ ...options, explanationCompleteState });
  for (const scenario of responsibleAIPrimaryScenarios.filter(({ id }) => ["P01", "P02", "P03"].includes(id))) {
    for (const dimension of custodyLedgerRAIDimensions) {
      primary.updateResponse({ caseId: scenario.id, dimension, value: scenario[dimension] });
    }
    primary.dispatch({
      packetId: "RP-002", version: CUSTODY_LEDGER_RAI_PRIMARY_CONVERGENCE_VERSION, mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER", action: CUSTODY_LEDGER_SUBMIT_RAI_CASE,
      activationKind: "pointer", eventToken: `rai-explanation-primary-${scenario.id}`,
    });
  }
  const acceptedBlankTransferState = primary.getState();
  const transfer = createCustodyLedgerRAITransferConvergence({ ...options, explanationCompleteState, acceptedBlankTransferState });
  for (const caseId of ["T01", "T02", "T03"]) {
    for (const dimension of custodyLedgerRAIDimensions) {
      transfer.updateResponse({ caseId, dimension, value: transferAnswers[caseId][dimension] });
    }
    transfer.dispatch({
      packetId: "RP-002", version: CUSTODY_LEDGER_RAI_TRANSFER_CONVERGENCE_VERSION, mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER", action: CUSTODY_LEDGER_SUBMIT_RAI_TRANSFER_CASE,
      activationKind: "pointer", eventToken: `rai-explanation-transfer-${caseId}`,
    });
  }
  return {
    ...options, explanationCompleteState, acceptedBlankTransferState,
    acceptedBlankExplanationState: transfer.getState(),
  };
}

function intent(action, eventToken, overrides = {}) {
  return {
    packetId: "RP-002", version: CUSTODY_LEDGER_RAI_EXPLANATION_CONVERGENCE_VERSION, mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER", action, activationKind: "pointer", eventToken, ...overrides,
  };
}

function author(controller, responses = custodyLedgerRAIExplanationAnswers) {
  for (const dimension of custodyLedgerRAIExplanationDimensions) {
    assert.equal(controller.updateResponse({ dimension, value: responses[dimension] ?? "" }).status,
      "response_updated_session_only");
  }
}

function submit(controller, token = "submit-rai-explanation") {
  return controller.dispatch(intent(CUSTODY_LEDGER_SUBMIT_RAI_EXPLANATION, token));
}

function assertZeroEffect(state) {
  for (const key of [
    "authorityGranted", "accessGranted", "externalActionEnabled", "storyObservationGranted",
    "savePerformed", "examCreditGranted", "explanationCrossCreditGranted",
  ]) assert.equal(state[key], false, key);
  assert.equal(state.cityStateDelta, null);
  assert.equal(state.campaignCommitEnabled, false);
  assert.equal(state.successor, null);
  assert.equal(state.routable, false);
  assert.equal(state.browserStorageUsed, false);
}

test("exact strict-9/9 boundary opens only genuinely blank RAIEC-00", () => {
  const state = createCustodyLedgerRAIExplanationConvergence(fixture()).getState();
  assert.equal(state.phase, "RAIEC-00");
  assert.equal(state.authorityPhase, "rai_explanation");
  assert.equal(state.owner, "901 TEACHER // FEEDBACK");
  assert.equal(state.controlState, "genuinely_blank");
  assert.deepEqual(state.controls.map(({ id }) => id), custodyLedgerRAIExplanationDimensions);
  assert.equal(state.controls.every(({ valueState }) => valueState === "genuinely_blank"), true);
  assert.equal(state.finalizedRAIExplanationEvidenceVisibility, "none");
  assert.deepEqual(state.accessibility, custodyLedgerRAIExplanationConvergenceAccessibility);
  assert.deepEqual(state.availableActions, [
    CUSTODY_LEDGER_SUBMIT_RAI_EXPLANATION, "RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD",
  ]);
  assertZeroEffect(state);
});

test("authored values remain only in closure and never enter state, intent, evidence, restore, or serialization", () => {
  const controller = createCustodyLedgerRAIExplanationConvergence(fixture());
  const privateValues = Object.fromEntries(custodyLedgerRAIExplanationDimensions.map((dimension, index) => [
    dimension, `PRIVATE-RAI-EXPLANATION-${index}`,
  ]));
  author(controller, privateValues);
  const state = controller.getState();
  assert.equal(state.controlState, "private_session_work");
  assert.equal(state.controls.every((control) => !Object.hasOwn(control, "value")), true);
  for (const value of Object.values(privateValues)) assert.equal(JSON.stringify(state).includes(value), false);
  const semanticIntent = intent(CUSTODY_LEDGER_SUBMIT_RAI_EXPLANATION, "private-free-semantic-hit");
  assert.deepEqual(Object.keys(semanticIntent).sort(), [
    "action", "activationKind", "eventToken", "mode", "owner", "packetId", "version",
  ]);
  const result = controller.dispatch(semanticIntent);
  assert.equal(result.status, "first_actual_boundary_feedback");
  for (const value of Object.values(privateValues)) assert.equal(JSON.stringify(result).includes(value), false);
});

test("all seven modalities produce one strict 3/3 exact zero-credit Pilot conclusion", () => {
  const snapshots = [];
  for (const [index, activationKind] of custodyLedgerRAIExplanationConvergenceModalities.entries()) {
    const controller = createCustodyLedgerRAIExplanationConvergence(fixture());
    author(controller);
    const action = intent(CUSTODY_LEDGER_SUBMIT_RAI_EXPLANATION, `rai-explanation-modality-${index}`, { activationKind });
    const result = controller.dispatch(action);
    assert.equal(result.status, "strict_explanation_complete");
    assert.equal(result.evaluationPhase, "RAIEC-10");
    assert.equal(result.replacement, "atomic");
    assert.equal(result.state.phase, "RAIEC-20C");
    assert.equal(result.state.owner, "PILOT // FLIGHT RECORDER");
    assert.equal(result.state.conclusion.text, CUSTODY_LEDGER_RAI_CONCLUSION);
    assert.equal(result.state.conclusionCredit, "zero");
    assert.equal(result.state.dismissalExposed, false);
    assert.equal(result.state.laterActionExposed, false);
    assert.deepEqual(result.state.availableActions, ["RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD"]);
    assert.equal(controller.dispatch(action).status, "duplicate_suppressed");
    assertZeroEffect(result.state);
    snapshots.push(JSON.stringify(result.state));
  }
  assert.equal(new Set(snapshots).size, 1);
});

test("single and multiple misses expose only the first actual failed boundary in canonical order", () => {
  const variants = [
    [custodyLedgerRAIExplanationDimensions[0]],
    [custodyLedgerRAIExplanationDimensions[1]],
    [custodyLedgerRAIExplanationDimensions[2]],
    [custodyLedgerRAIExplanationDimensions[1], custodyLedgerRAIExplanationDimensions[2]],
    [...custodyLedgerRAIExplanationDimensions],
  ];
  for (const [index, failed] of variants.entries()) {
    const controller = createCustodyLedgerRAIExplanationConvergence(fixture());
    author(controller, Object.fromEntries(custodyLedgerRAIExplanationDimensions.map((dimension) => [
      dimension, failed.includes(dimension) ? `wrong-${dimension}` : custodyLedgerRAIExplanationAnswers[dimension],
    ])));
    const result = submit(controller, `failed-order-${index}`);
    assert.equal(result.status, "first_actual_boundary_feedback");
    assert.equal(result.state.phase, "RAIEC-20F");
    assert.equal(result.state.failedBoundary.id, custodyLedgerRAIExplanationDimensions.find((dimension) => failed.includes(dimension)));
    assert.equal(result.state.failedBoundary.answerFree, true);
    assert.equal(result.state.failedBoundary.programmaticallyAssociated, true);
    assert.equal(result.state.passedBoundariesRecapped, false);
    assert.equal(result.state.totalScoreExposed, false);
    assert.equal(JSON.stringify(result.state).includes("wrong-"), false);
  }
});

test("feedback clears all responses and RETRY BLANK is wholly blank, unlimited, and first-failed focused", () => {
  const controller = createCustodyLedgerRAIExplanationConvergence(fixture());
  const failedDimension = custodyLedgerRAIExplanationDimensions[1];
  for (let attempt = 0; attempt < 3; attempt += 1) {
    author(controller, {
      ...custodyLedgerRAIExplanationAnswers,
      [failedDimension]: `private-miss-${attempt}`,
    });
    const feedback = submit(controller, `miss-${attempt}`);
    assert.equal(feedback.state.privateResponsesCleared, true);
    const retry = controller.dispatch(intent(CUSTODY_LEDGER_RETRY_RAI_EXPLANATION, `retry-${attempt}`));
    assert.equal(retry.status, "blank_explanation_retry");
    assert.equal(retry.state.phase, "RAIEC-00");
    assert.equal(retry.state.controlState, "genuinely_blank");
    assert.equal(retry.state.controls.every(({ valueState }) => valueState === "genuinely_blank"), true);
    assert.equal(retry.state.focusIntent.then, failedDimension);
    assert.equal(JSON.stringify(retry.state).includes(`private-miss-${attempt}`), false);
  }
});

test("complete prerequisites, presentation, and correct peer boundaries cannot compensate for one miss", () => {
  for (const failedDimension of custodyLedgerRAIExplanationDimensions) {
    const controller = createCustodyLedgerRAIExplanationConvergence(fixture());
    author(controller, { ...custodyLedgerRAIExplanationAnswers, [failedDimension]: "" });
    const result = submit(controller, `no-compensation-${failedDimension}`);
    assert.equal(result.status, "first_actual_boundary_feedback");
    assert.equal(result.state.failedBoundary.id, failedDimension);
    assert.notEqual(result.state.phase, "RAIEC-20C");
  }
});

test("malformed, passive, stale, forged, duplicate, combined, wrong-owner, Tour, private, and later intents fail byte-stably", () => {
  const controller = createCustodyLedgerRAIExplanationConvergence(fixture());
  author(controller);
  const before = controller.getState();
  const token = "valid-after-invalid-rai-explanation";
  const invalid = [
    intent(CUSTODY_LEDGER_SUBMIT_RAI_EXPLANATION, token, { activationKind: "automatic" }),
    intent(CUSTODY_LEDGER_SUBMIT_RAI_EXPLANATION, token, { activationKind: "focus" }),
    intent(CUSTODY_LEDGER_SUBMIT_RAI_EXPLANATION, token, { version: "stale" }),
    intent(CUSTODY_LEDGER_SUBMIT_RAI_EXPLANATION, token, { owner: "SYSTEM // EXPEDITION SESSION" }),
    intent(CUSTODY_LEDGER_SUBMIT_RAI_EXPLANATION, token, { mode: "tour" }),
    intent(CUSTODY_LEDGER_RETRY_RAI_EXPLANATION, token),
    intent("SUBMIT RESPONSIBLE-AI EXPLANATION + RETURN", token),
    { ...intent(CUSTODY_LEDGER_SUBMIT_RAI_EXPLANATION, token), privateResponse: "PRIVATE" },
    { ...intent(CUSTODY_LEDGER_SUBMIT_RAI_EXPLANATION, token), nextPhase: "review_save" },
  ];
  for (const value of invalid) {
    const rejected = controller.dispatch(value);
    assert.equal(rejected.status, "rejected");
    assert.deepEqual(rejected.state, before);
  }
  assert.equal(controller.dispatch(intent(CUSTODY_LEDGER_SUBMIT_RAI_EXPLANATION, token)).status,
    "strict_explanation_complete");
});

test("blank, feedback, blank retry, and conclusion restore exactly while contamination downgrades", () => {
  const options = fixture();
  const blank = createCustodyLedgerRAIExplanationConvergence(options).getState();
  assert.deepEqual(createCustodyLedgerRAIExplanationConvergence({ ...options, restoredState: blank }).getState(), blank);

  const failed = createCustodyLedgerRAIExplanationConvergence(options);
  author(failed, { ...custodyLedgerRAIExplanationAnswers, [custodyLedgerRAIExplanationDimensions[2]]: "wrong" });
  const feedback = submit(failed, "restore-feedback").state;
  assert.deepEqual(createCustodyLedgerRAIExplanationConvergence({ ...options, restoredState: feedback }).getState(), feedback);
  const retry = failed.dispatch(intent(CUSTODY_LEDGER_RETRY_RAI_EXPLANATION, "restore-retry")).state;
  assert.deepEqual(createCustodyLedgerRAIExplanationConvergence({ ...options, restoredState: retry }).getState(), retry);

  const passed = createCustodyLedgerRAIExplanationConvergence(options);
  author(passed);
  const conclusion = submit(passed, "restore-conclusion").state;
  assert.deepEqual(createCustodyLedgerRAIExplanationConvergence({ ...options, restoredState: conclusion }).getState(), conclusion);

  for (const contaminated of [
    { ...feedback, privateResponse: "PRIVATE" },
    { ...retry, version: "stale" },
    { ...conclusion, dismissalExposed: true },
    { ...conclusion, successor: "RP-003" },
    { phase: "RAIEC-10", partial: true },
  ]) {
    const safe = createCustodyLedgerRAIExplanationConvergence({ ...options, restoredState: contaminated }).getState();
    assert.equal(safe.phase, "RAIEC-00");
    assert.equal(safe.controlState, "genuinely_blank");
    assert.equal(safe.finalizedRAIExplanationEvidenceVisibility, "none");
    assert.doesNotMatch(JSON.stringify(safe), /PRIVATE|RP-003|partial/i);
  }
});

test("sanitation, separate returns, campaign/Tour, prerequisites, observations, and world remain byte-stable", () => {
  const controller = createCustodyLedgerRAIExplanationConvergence(fixture());
  const initial = controller.getState();
  const evidenceBytes = JSON.stringify({
    primaryEvidence: initial.primaryEvidence,
    transferEvidence: initial.transferEvidence,
    pythonExplanationEvidence: initial.pythonExplanationEvidence,
    finalizedRAIPrimaryEvidence: initial.finalizedRAIPrimaryEvidence,
    finalizedRAITransferEvidence: initial.finalizedRAITransferEvidence,
    observationEvidence: initial.observationEvidence,
    predecessor: initial.predecessor,
  });
  controller.updateResponse({ dimension: custodyLedgerRAIExplanationDimensions[0], value: "PRIVATE-SANITIZE" });
  const sanitized = controller.sanitizeBoundary().state;
  assert.equal(sanitized.controlState, "genuinely_blank");
  assert.equal(JSON.stringify(sanitized).includes("PRIVATE-SANITIZE"), false);
  assert.equal(controller.returnToEvidence().writePerformed, false);
  assert.equal(controller.returnToCityThreshold().writePerformed, false);
  assert.equal(JSON.stringify({
    primaryEvidence: sanitized.primaryEvidence,
    transferEvidence: sanitized.transferEvidence,
    pythonExplanationEvidence: sanitized.pythonExplanationEvidence,
    finalizedRAIPrimaryEvidence: sanitized.finalizedRAIPrimaryEvidence,
    finalizedRAITransferEvidence: sanitized.finalizedRAITransferEvidence,
    observationEvidence: sanitized.observationEvidence,
    predecessor: sanitized.predecessor,
  }), evidenceBytes);
  assertZeroEffect(sanitized);
});

test("controller is normally composed, storage/network/DOM free, and hard-stopped before dismissal or later state", () => {
  const source = readFileSync(new URL("../src/CustodyLedgerRAIExplanationConvergence.js", import.meta.url), "utf8");
  for (const relative of ["../src/App.jsx", "../src/CivicRecordArrival.jsx", "../src/CustodyLedgerNormalRoute.js"]) {
    assert.equal(readFileSync(new URL(relative, import.meta.url), "utf8").includes("CustodyLedgerRAIExplanationConvergence"), true);
  }
  assert.equal(readFileSync(new URL("../src/main.jsx", import.meta.url), "utf8").includes("CustodyLedgerRAIExplanationConvergence"), false);
  for (const forbidden of [
    "dismissCustodyLedgerRAIConclusion", "review_save", "localStorage", "sessionStorage", "fetch(",
    "XMLHttpRequest", "document.", "window.", "RP-003", "RP-013",
  ]) assert.equal(source.includes(forbidden), false, forbidden);
  assert.equal(source.includes("submitCustodyLedgerRAIExplanation"), true);
  assert.equal(source.includes("acknowledgeCustodyLedgerRAIExplanationFeedback"), true);
  assert.equal(source.includes("CUSTODY_LEDGER_RAI_CONCLUSION"), true);
  assert.equal(source.includes("successor: null"), true);
  assert.equal(source.includes("cityStateDelta: null"), true);
});
