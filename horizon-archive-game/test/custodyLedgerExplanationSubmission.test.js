import assert from "node:assert/strict";
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
  custodyLedgerExplanationSubmissionAccessibility,
  custodyLedgerExplanationSubmissionModalities,
} from "../src/CustodyLedgerExplanationSubmission.js";
import {
  CUSTODY_LEDGER_OBSERVATION_ACTION,
  advanceCustodyLedgerPrerequisite,
  createCustodyLedgerScaffoldFromVerifiedRouteBoundary,
  custodyLedgerExplanationAnswers,
  custodyLedgerExplanationDimensions,
  custodyLedgerObservationIds,
  custodyLedgerPythonOwnershipMessages,
} from "../src/custodyLedgerExercise.js";
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
    eventToken: "submission-primary-fixture",
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
    eventToken: "submission-fresh-fixture",
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
    eventToken: "submission-transfer-fixture",
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
    eventToken: "submission-entry-fixture",
  }).state;
  return { primaryResult, learningState, freshPracticeState, transferCompleteState, explanationEntryState };
}

function intent(overrides = {}) {
  return {
    packetId: "RP-002",
    version: CUSTODY_LEDGER_EXPLANATION_SUBMISSION_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CUSTODY_LEDGER_SUBMIT_PYTHON_EXPLANATION,
    activationKind: "pointer",
    eventToken: "submit-python-explanation",
    ...overrides,
  };
}

function author(controller, selections) {
  for (const dimension of custodyLedgerExplanationDimensions) {
    const updated = controller.updateResponse({ dimension, value: selections[dimension] ?? "" });
    assert.equal(updated.status, "response_updated_session_only");
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
  assert.equal(state.savePerformed, false);
  assert.equal(state.examCreditGranted, false);
  assert.equal(state.examGuarantee, false);
}

test("exact accepted blank EX-20 becomes one protected blank authoring group", () => {
  const state = createCustodyLedgerExplanationSubmission(fixture()).getState();
  assert.equal(state.phase, "EXS-00");
  assert.equal(state.authorityPhase, "python_explanation");
  assert.equal(state.owner, custodyLedgerPythonOwnershipMessages.explanation_prompt.owner);
  assert.deepEqual(state.explanationControls, custodyLedgerExplanationDimensions.map((id) => ({
    id,
    valueState: "genuinely_blank",
  })));
  assert.equal(state.attemptStatus, "no_attempt");
  assert.equal(state.finalizedEvidenceVisibility, "hidden_prerequisite_only");
  assert.deepEqual(state.availableActions, [
    CUSTODY_LEDGER_SUBMIT_PYTHON_EXPLANATION,
    "RETURN TO EVIDENCE",
    "RETURN TO CITY THRESHOLD",
  ]);
  assertZeroEffect(state);
});

test("private responses remain internal and every modality reaches the same exact 3/3 conclusion", () => {
  const snapshots = [];
  for (const activationKind of custodyLedgerExplanationSubmissionModalities) {
    const controller = createCustodyLedgerExplanationSubmission(fixture());
    author(controller, custodyLedgerExplanationAnswers);
    assert.doesNotMatch(JSON.stringify(controller.getState()), /a key names|identity value|explicitly did not occur/i);
    const result = controller.dispatch(intent({
      activationKind,
      eventToken: `submit-explanation-${activationKind}`,
    }));
    assert.equal(result.status, "python_explanation_complete");
    assert.equal(result.evaluationPhase, "EXS-10");
    assert.equal(result.state.phase, "EXS-20C");
    assert.equal(result.state.owner, custodyLedgerPythonOwnershipMessages.python_conclusion.owner);
    assert.deepEqual(result.state.ownershipMessage, custodyLedgerPythonOwnershipMessages.python_conclusion);
    assert.deepEqual(result.state.boundedResult, {
      owner: "SYSTEM // EXPEDITION STATE",
      confirmedDimensions: 3,
      totalDimensions: 3,
      passed: true,
      currentAttemptOnly: true,
    });
    assert.equal(result.state.pythonExplanationEvidence.masteryStatus, "explanation_complete");
    assertZeroEffect(result.state);
    snapshots.push(JSON.stringify(result.state));
  }
  assert.equal(new Set(snapshots).size, 1);
});

test("actual failed dimensions alone select answer-free Teacher remediation and clear all prose", () => {
  const controller = createCustodyLedgerExplanationSubmission(fixture());
  const selections = {
    [custodyLedgerExplanationDimensions[0]]: custodyLedgerExplanationAnswers[custodyLedgerExplanationDimensions[0]],
    [custodyLedgerExplanationDimensions[1]]: "PRIVATE SECOND RESPONSE",
    [custodyLedgerExplanationDimensions[2]]: "PRIVATE THIRD RESPONSE",
  };
  author(controller, selections);
  const result = controller.dispatch(intent());
  assert.equal(result.status, "feedback");
  assert.equal(result.state.phase, "EXS-20F");
  assert.equal(result.state.owner, "901 TEACHER // FEEDBACK");
  assert.deepEqual(result.state.failedDimensions, custodyLedgerExplanationDimensions.slice(1));
  assert.deepEqual(result.state.remediation.map(({ dimension }) => dimension), custodyLedgerExplanationDimensions.slice(1));
  assert.equal(result.state.remediation.every(({ answerFree }) => answerFree), true);
  assert.equal(result.state.privateProseCleared, true);
  assert.deepEqual(result.state.boundedResult, {
    owner: "SYSTEM // EXPEDITION STATE",
    confirmedDimensions: 1,
    totalDimensions: 3,
    passed: false,
    currentAttemptOnly: true,
  });
  const bytes = JSON.stringify(result.state);
  assert.doesNotMatch(bytes, /PRIVATE SECOND RESPONSE|PRIVATE THIRD RESPONSE/);
  for (const answer of Object.values(custodyLedgerExplanationAnswers)) assert.equal(bytes.includes(answer), false);
});

test("retry is wholly blank, owner-first, first-failed focused, and unlimited", () => {
  const controller = createCustodyLedgerExplanationSubmission(fixture());
  author(controller, {});
  const first = controller.dispatch(intent({ eventToken: "failed-explanation-one" }));
  assert.equal(first.status, "feedback");
  const retry = controller.retryBlank();
  assert.equal(retry.status, "blank_retry");
  assert.equal(retry.state.phase, "EXS-00");
  assert.equal(retry.state.explanationControlState, "genuinely_blank");
  assert.equal(retry.state.attemptStatus, "no_attempt");
  assert.deepEqual(retry.state.focusIntent, {
    group: "python_explanation",
    target: "owner_heading",
    then: custodyLedgerExplanationDimensions[0],
  });
  author(controller, { [custodyLedgerExplanationDimensions[0]]: "another miss" });
  assert.equal(controller.dispatch(intent({ eventToken: "failed-explanation-two" })).status, "feedback");
  assert.equal(controller.retryBlank().status, "blank_retry");
});

test("invalid, combined, Tour, private-bearing, stale, repeated, and duplicate requests fail closed", () => {
  const variants = [
    { mode: "demo_tour" },
    { mode: "protected" },
    { owner: "901 TEACHER // FEEDBACK" },
    { version: "stale" },
    { activationKind: "automatic" },
    { activationKind: "focus" },
    { action: "RETURN TO EVIDENCE" },
    { packetId: "RP-003" },
    { eventToken: "bad" },
    { privateResponse: "PRIVATE" },
    { responses: custodyLedgerExplanationAnswers },
    { actions: [CUSTODY_LEDGER_SUBMIT_PYTHON_EXPLANATION, "RETURN TO EVIDENCE"] },
    { nextPhase: "python_complete" },
  ];
  for (const [index, override] of variants.entries()) {
    const controller = createCustodyLedgerExplanationSubmission(fixture());
    const before = controller.getState();
    const rejected = controller.dispatch(intent({ eventToken: `invalid-submit-${index}`, ...override }));
    assert.equal(rejected.status, "rejected");
    assert.deepEqual(rejected.state, before);
    assert.equal(controller.dispatch(intent({ eventToken: `valid-after-invalid-${index}` })).status, "feedback");
  }

  const controller = createCustodyLedgerExplanationSubmission(fixture());
  const action = intent({ eventToken: "duplicate-explanation-token" });
  assert.equal(controller.dispatch(action).status, "feedback");
  assert.equal(controller.dispatch(action).status, "duplicate_suppressed");
  assert.equal(controller.dispatch(intent({ eventToken: "fresh-outside-authoring" })).status, "rejected");
});

test("response updates reject wrong shapes and never place prose in the public state", () => {
  for (const update of [
    null,
    {},
    { dimension: "not_a_dimension", value: "private" },
    { dimension: custodyLedgerExplanationDimensions[0], value: 42 },
    { dimension: custodyLedgerExplanationDimensions[0], value: "private", owner: "forged" },
    { dimension: custodyLedgerExplanationDimensions[0], value: "x".repeat(2001) },
  ]) {
    const controller = createCustodyLedgerExplanationSubmission(fixture());
    const before = controller.getState();
    const rejected = controller.updateResponse(update);
    assert.equal(rejected.status, "rejected");
    assert.deepEqual(rejected.state, before);
  }
  const controller = createCustodyLedgerExplanationSubmission(fixture());
  const privateText = "PRIVATE AUTHORING THAT MUST NOT LEAK";
  const updated = controller.updateResponse({ dimension: custodyLedgerExplanationDimensions[0], value: privateText });
  assert.equal(updated.state.explanationControls[0].valueState, "authored_session_only");
  assert.doesNotMatch(JSON.stringify(updated.state), new RegExp(privateText));
});

test("exact blank and exact conclusion restore safely while feedback or contamination downgrades blank", () => {
  const options = fixture();
  const exactBlank = createCustodyLedgerExplanationSubmission(options).getState();
  assert.deepEqual(
    createCustodyLedgerExplanationSubmission({ ...options, restoredState: exactBlank }).getState(),
    exactBlank,
  );

  const successController = createCustodyLedgerExplanationSubmission(options);
  author(successController, custodyLedgerExplanationAnswers);
  const exactComplete = successController.dispatch(intent()).state;
  assert.deepEqual(
    createCustodyLedgerExplanationSubmission({ ...options, restoredState: exactComplete }).getState(),
    exactComplete,
  );

  const failedController = createCustodyLedgerExplanationSubmission(options);
  const feedback = failedController.dispatch(intent()).state;
  for (const restoredState of [
    feedback,
    { ...exactBlank, privateProse: "PRIVATE" },
    { ...exactComplete, successor: "RP-003" },
    { ...exactComplete, pythonExplanationEvidence: {
      ...exactComplete.pythonExplanationEvidence,
      dimensionCorrectness: {
        ...exactComplete.pythonExplanationEvidence.dimensionCorrectness,
        [custodyLedgerExplanationDimensions[0]]: false,
      },
    } },
    { phase: "EXS-10", partial: true },
  ]) {
    const safe = createCustodyLedgerExplanationSubmission({ ...options, restoredState }).getState();
    assert.equal(safe.phase, "EXS-00");
    assert.equal(safe.explanationControlState, "genuinely_blank");
    assert.doesNotMatch(JSON.stringify(safe), /PRIVATE|RP-003/i);
    assert.equal(Object.hasOwn(safe, "partial"), false);
  }
});

test("forged, incomplete, or contaminated EX-20 cannot authorize submission", () => {
  const options = fixture();
  const invalid = [
    {},
    { ...options, explanationEntryState: { ...options.explanationEntryState, phase: "EX-00" } },
    { ...options, explanationEntryState: { ...options.explanationEntryState, privateProse: "PRIVATE" } },
    { ...options, explanationEntryState: { ...options.explanationEntryState, successor: "RP-003" } },
    { ...options, explanationEntryState: {
      ...options.explanationEntryState,
      explanationSelections: {
        ...options.explanationEntryState.explanationSelections,
        [custodyLedgerExplanationDimensions[0]]: "prefilled",
      },
    } },
  ];
  for (const [index, value] of invalid.entries()) {
    assert.throws(
      () => createCustodyLedgerExplanationSubmission(value),
      /exact canonical protected blank EX-20 boundary/i,
      `invalid fixture ${index}`,
    );
  }
});

test("separate returns remain write-free and byte-stable from authoring, feedback, and conclusion", () => {
  for (const outcome of ["authoring", "feedback", "conclusion"]) {
    const options = fixture();
    const observationBytes = JSON.stringify(options.explanationEntryState.observationEvidence);
    const predecessorBytes = JSON.stringify(options.explanationEntryState.predecessor);
    const controller = createCustodyLedgerExplanationSubmission(options);
    if (outcome === "feedback") controller.dispatch(intent());
    if (outcome === "conclusion") {
      author(controller, custodyLedgerExplanationAnswers);
      controller.dispatch(intent());
    }
    const evidence = controller.returnToEvidence();
    const route = controller.returnToCityThreshold();
    assert.equal(evidence.writePerformed, false);
    assert.equal(route.writePerformed, false);
    assert.equal(JSON.stringify(evidence.observationEvidence), observationBytes);
    assert.equal(JSON.stringify(evidence.predecessor), predecessorBytes);
    assert.equal(JSON.stringify(route.predecessor), predecessorBytes);
    assert.equal(route.continuation, "continuation");
    assert.equal(route.cityStateDelta, null);
  }
});

test("accessibility, privacy, hard-stop, module-purity, and unimported boundaries remain exact", async () => {
  assert.equal(custodyLedgerExplanationSubmissionAccessibility.oneActiveGroup, true);
  assert.equal(custodyLedgerExplanationSubmissionAccessibility.minActionCssPx, 44);
  assert.equal(custodyLedgerExplanationSubmissionAccessibility.errorsControlAssociated, true);
  assert.equal(custodyLedgerExplanationSubmissionAccessibility.ownerHeadingInTabOrder, false);
  assert.equal(custodyLedgerExplanationSubmissionAccessibility.forcedColorsEquivalent, true);
  assert.equal(custodyLedgerExplanationSubmissionAccessibility.reducedMotionDirectReplacement, true);
  assert.equal(custodyLedgerExplanationSubmissionAccessibility.naturalNarrowReflow, true);
  assert.equal(custodyLedgerExplanationSubmissionAccessibility.textZoomPercent, 200);
  assert.equal(custodyLedgerExplanationSubmissionAccessibility.horizontalPageEscape, false);

  const campaign = { route: "city_threshold", observations: 5, completion: false };
  const tour = { mode: "demo_tour", cursor: "rp002", noCredit: true };
  const campaignBytes = JSON.stringify(campaign);
  const tourBytes = JSON.stringify(tour);
  const controller = createCustodyLedgerExplanationSubmission(fixture());
  author(controller, custodyLedgerExplanationAnswers);
  const complete = controller.dispatch(intent()).state;
  assert.equal(JSON.stringify(campaign), campaignBytes);
  assert.equal(JSON.stringify(tour), tourBytes);
  const completeBytes = JSON.stringify(complete);
  for (const forbidden of [
    "RP002-RAI-01", "RP-003", "dismiss", "reviewSave", "completion", "credits",
    "externalActionPayload", "successorRoute",
  ]) assert.doesNotMatch(completeBytes, new RegExp(forbidden, "i"), forbidden);

  const [{ readFile }, { fileURLToPath }] = await Promise.all([
    import("node:fs/promises"),
    import("node:url"),
  ]);
  const [app, main, normalRoute, source] = await Promise.all([
    "../src/App.jsx",
    "../src/main.jsx",
    "../src/CustodyLedgerNormalRoute.js",
    "../src/CustodyLedgerExplanationSubmission.js",
  ].map((relative) => readFile(fileURLToPath(new URL(relative, import.meta.url)), "utf8")));
  assert.match(app, /CUSTODY_LEDGER_EXPLANATION_SUBMISSION_VERSION/);
  assert.match(app, /handleCustodyLedgerExplanationSubmit/);
  assert.match(normalRoute, /createCustodyLedgerNormalExplanationSubmission/);
  assert.doesNotMatch(main,
    /CustodyLedgerExplanationSubmission|rp002\.explanation-submission\.v1|SUBMIT PYTHON EXPLANATION/);
  for (const acceptedSource of [app, normalRoute]) {
    assert.doesNotMatch(acceptedSource, /custodyLedgerExplanationAnswers|dismissCustodyLedgerPythonConclusion/);
  }
  assert.doesNotMatch(source,
    /localStorage|sessionStorage|indexedDB|fetch\(|XMLHttpRequest|WebSocket|document\.|window\.|navigator\./);
  assert.doesNotMatch(source, /custodyLedgerExplanationAnswers|dismissCustodyLedgerPythonConclusion/);
});
