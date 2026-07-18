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
  custodyLedgerExplanationEntryAccessibility,
  custodyLedgerExplanationEntryModalities,
} from "../src/CustodyLedgerExplanationEntry.js";
import {
  CUSTODY_LEDGER_OBSERVATION_ACTION,
  advanceCustodyLedgerPrerequisite,
  createCustodyLedgerScaffoldFromVerifiedRouteBoundary,
  custodyLedgerExplanationDimensions,
  custodyLedgerObservationIds,
  custodyLedgerPythonChecks,
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
    eventToken: "explanation-primary-fixture",
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
    eventToken: "explanation-fresh-fixture",
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
    eventToken: "explanation-transfer-fixture",
    classification: "unknown",
    fieldOwner: "human_reviewer",
  }).state;
  return { primaryResult, learningState, freshPracticeState, transferCompleteState };
}

function intent(overrides = {}) {
  return {
    packetId: "RP-002",
    version: CUSTODY_LEDGER_EXPLANATION_ENTRY_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CUSTODY_LEDGER_OPEN_BLANK_EXPLANATION,
    activationKind: "pointer",
    eventToken: "open-blank-explanation",
    ...overrides,
  };
}

function assertZeroEffect(state) {
  assert.equal(state.cityStateDelta, null);
  assert.equal(state.continuation, "continuation");
  assert.equal(state.successor, null);
  assert.equal(state.routable, false);
  assert.equal(state.browserStorageUsed, false);
  assert.equal(state.authorityGranted, false);
  assert.equal(state.accessGranted, false);
  assert.equal(state.externalActionEnabled, false);
  assert.equal(state.savePerformed, false);
  assert.equal(state.examCreditGranted, false);
  assert.equal(state.examGuarantee, false);
}

test("exact FT-20C remains the complete System group until explicit Pilot intent", () => {
  const options = fixture();
  const state = createCustodyLedgerExplanationEntry(options).getState();
  assert.equal(state.phase, "EX-00");
  assert.equal(state.authorityPhase, "FT-20C");
  assert.equal(state.owner, "SYSTEM // EXPEDITION STATE");
  assert.equal(state.transferStatus, "complete");
  assert.deepEqual(state.currentAttemptChecks,
    Object.fromEntries(custodyLedgerPythonChecks.map((id) => [id, true])));
  assert.deepEqual(state.availableActions, [
    "RETURN TO EVIDENCE",
    "RETURN TO CITY THRESHOLD",
    CUSTODY_LEDGER_OPEN_BLANK_EXPLANATION,
  ]);
  assert.equal(state.finalizedEvidenceVisibility, "hidden_prerequisite_only");
  assertZeroEffect(state);
});

test("all seven modalities produce one atomic canonical blank Teacher group", () => {
  const snapshots = [];
  for (const activationKind of custodyLedgerExplanationEntryModalities) {
    const controller = createCustodyLedgerExplanationEntry(fixture());
    const action = intent({ activationKind, eventToken: `explanation-${activationKind}` });
    const result = controller.dispatch(action);
    assert.equal(result.status, "blank_explanation_opened");
    assert.equal(result.intentPhase, "EX-10");
    assert.equal(result.replacement, "atomic");
    assert.equal(result.state.phase, "EX-20");
    assert.equal(result.state.authorityPhase, "python_explanation");
    assert.equal(result.state.checkpoint, "30-D");
    assert.equal(result.state.owner, custodyLedgerPythonOwnershipMessages.explanation_prompt.owner);
    assert.deepEqual(result.state.ownershipMessage, custodyLedgerPythonOwnershipMessages.explanation_prompt);
    assert.deepEqual(result.state.explanationSelections,
      Object.fromEntries(custodyLedgerExplanationDimensions.map((dimension) => [dimension, ""])));
    assert.deepEqual(result.state.availableActions, ["RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD"]);
    assert.equal(result.state.scoringEnabled, false);
    assert.equal(result.state.campaignCommitEnabled, false);
    assert.equal(result.state.finalizedEvidenceVisibility, "hidden_prerequisite_only");
    assertZeroEffect(result.state);
    const duplicate = controller.dispatch(action);
    assert.equal(duplicate.status, "duplicate_suppressed");
    assert.deepEqual(duplicate.state, result.state);
    snapshots.push(JSON.stringify(result.state));
  }
  assert.equal(new Set(snapshots).size, 1);
});

test("invalid, passive, stale, forged, repeated, combined, Tour, private, and later requests fail closed", () => {
  const variants = [
    { mode: "demo_tour" },
    { mode: "protected" },
    { owner: "SYSTEM // EXPEDITION STATE" },
    { version: "stale" },
    { activationKind: "automatic" },
    { activationKind: "focus" },
    { activationKind: "hover" },
    { activationKind: "dwell" },
    { action: "RETURN TO EVIDENCE" },
    { packetId: "RP-003" },
    { eventToken: "bad" },
    { learnerSource: "PRIVATE" },
    { actions: [CUSTODY_LEDGER_OPEN_BLANK_EXPLANATION, "RETURN TO EVIDENCE"] },
    { nextPhase: "python_complete" },
  ];
  for (const [index, override] of variants.entries()) {
    const controller = createCustodyLedgerExplanationEntry(fixture());
    const before = controller.getState();
    const rejected = controller.dispatch(intent({ eventToken: `invalid-explanation-${index}`, ...override }));
    assert.equal(rejected.status, "rejected");
    assert.deepEqual(rejected.state, before);
    assert.equal(controller.dispatch(intent({ eventToken: `valid-after-invalid-${index}` })).status,
      "blank_explanation_opened");
  }

  const controller = createCustodyLedgerExplanationEntry(fixture());
  assert.equal(controller.dispatch(intent()).status, "blank_explanation_opened");
  const repeated = controller.dispatch(intent({ eventToken: "fresh-repeated-request" }));
  assert.equal(repeated.status, "rejected");
  assert.equal(repeated.state.phase, "EX-20");
});

test("returns remain separate, write-free, and byte-stable from both exact groups", () => {
  const options = fixture();
  const observationBytes = JSON.stringify(options.transferCompleteState.observationEvidence);
  const predecessorBytes = JSON.stringify(options.transferCompleteState.predecessor);
  const controller = createCustodyLedgerExplanationEntry(options);
  for (const phase of ["EX-00", "EX-20"]) {
    assert.equal(controller.getState().phase, phase);
    const evidence = controller.returnToEvidence();
    const route = controller.returnToCityThreshold();
    assert.equal(evidence.writePerformed, false);
    assert.equal(route.writePerformed, false);
    assert.equal(JSON.stringify(evidence.observationEvidence), observationBytes);
    assert.equal(JSON.stringify(evidence.predecessor), predecessorBytes);
    assert.equal(JSON.stringify(route.predecessor), predecessorBytes);
    assert.equal(route.continuation, "continuation");
    assert.equal(route.cityStateDelta, null);
    if (phase === "EX-00") assert.equal(controller.dispatch(intent()).status, "blank_explanation_opened");
  }
});

test("exact EX-00 and EX-20 restore without replay while contaminated or stale restore downgrades safely", () => {
  const options = fixture();
  const exactStart = createCustodyLedgerExplanationEntry(options).getState();
  assert.deepEqual(createCustodyLedgerExplanationEntry({ ...options, restoredState: exactStart }).getState(), exactStart);

  const exactExplanation = createCustodyLedgerExplanationEntry(options).dispatch(intent()).state;
  assert.deepEqual(
    createCustodyLedgerExplanationEntry({ ...options, restoredState: exactExplanation }).getState(),
    exactExplanation,
  );
  for (const restoredState of [
    { ...exactExplanation, privateNotes: "PRIVATE" },
    { ...exactExplanation, version: "stale" },
    { ...exactExplanation, explanationSelections: {
      ...exactExplanation.explanationSelections,
      [custodyLedgerExplanationDimensions[0]]: "prefilled",
    } },
    { ...exactExplanation, successor: "RP-003" },
    { phase: "EX-10", partial: true },
  ]) {
    const safe = createCustodyLedgerExplanationEntry({ ...options, restoredState }).getState();
    assert.equal(safe.phase, "EX-00");
    assert.doesNotMatch(JSON.stringify(safe), /PRIVATE|prefilled|RP-003|partial/i);
  }
});

test("forged, incomplete, or contaminated FT-20C cannot authorize entry", () => {
  const options = fixture();
  const invalid = [
    {},
    { ...options, transferCompleteState: { ...options.transferCompleteState, phase: "FT-20F" } },
    { ...options, transferCompleteState: { ...options.transferCompleteState, privateNotes: "PRIVATE" } },
    { ...options, transferCompleteState: { ...options.transferCompleteState, successor: "RP-003" } },
    { ...options, transferCompleteState: {
      ...options.transferCompleteState,
      currentAttemptChecks: { ...options.transferCompleteState.currentAttemptChecks, exact_keys_only: false },
    } },
    { ...options, transferCompleteState: {
      ...options.transferCompleteState,
      observationEvidence: options.transferCompleteState.observationEvidence.slice(0, 4),
    } },
    { ...options, learningState: { ...options.learningState, phase: "python_primary_result" } },
  ];
  for (const [index, value] of invalid.entries()) {
    assert.throws(
      () => createCustodyLedgerExplanationEntry(value),
      /exact canonical protected FT-20C boundary/i,
      `invalid fixture ${index}`,
    );
  }
});

test("entry has no explanation attempt, evaluator, result, RAI, review, save, completion, or successor surface", () => {
  const opened = createCustodyLedgerExplanationEntry(fixture()).dispatch(intent()).state;
  const forbiddenKeys = [
    "currentAttemptChecks", "falseCheckIds", "feedback", "result", "attemptCount", "hintLevel",
    "confidence", "pythonExplanationEvidence", "raiEvidence", "reviewSave", "completion", "credits",
  ];
  for (const key of forbiddenKeys) assert.equal(Object.hasOwn(opened, key), false, key);
  const bytes = JSON.stringify(opened);
  for (const forbidden of ["RP002-RAI-01", "RP-003", "successorRoute", "credits", "externalActionPayload"])
    assert.doesNotMatch(bytes, new RegExp(forbidden, "i"), forbidden);
  assert.equal(opened.primaryEvidence.masteryStatus, "primary_complete");
  assert.equal(opened.transferEvidence.masteryStatus, "transfer_complete");
  assert.equal(Object.values(opened.explanationSelections).every((value) => value === ""), true);
});

test("accessibility, campaign/Tour isolation, module purity, and normal-runtime non-import remain exact", async () => {
  assert.equal(custodyLedgerExplanationEntryAccessibility.oneActiveGroup, true);
  assert.equal(custodyLedgerExplanationEntryAccessibility.minActionCssPx, 44);
  assert.equal(custodyLedgerExplanationEntryAccessibility.ownerHeadingInTabOrder, false);
  assert.equal(custodyLedgerExplanationEntryAccessibility.forcedColorsEquivalent, true);
  assert.equal(custodyLedgerExplanationEntryAccessibility.reducedMotionDirectReplacement, true);
  assert.equal(custodyLedgerExplanationEntryAccessibility.naturalNarrowReflow, true);
  assert.equal(custodyLedgerExplanationEntryAccessibility.textZoomPercent, 200);
  assert.equal(custodyLedgerExplanationEntryAccessibility.horizontalPageEscape, false);

  const campaign = { route: "city_threshold", observations: 5, completion: false };
  const tour = { mode: "demo_tour", cursor: "rp002", noCredit: true };
  const campaignBytes = JSON.stringify(campaign);
  const tourBytes = JSON.stringify(tour);
  createCustodyLedgerExplanationEntry(fixture()).dispatch(intent());
  assert.equal(JSON.stringify(campaign), campaignBytes);
  assert.equal(JSON.stringify(tour), tourBytes);

  const [{ readFile }, { fileURLToPath }] = await Promise.all([
    import("node:fs/promises"),
    import("node:url"),
  ]);
  const [app, main, arrival, normalRoute, entry] = await Promise.all([
    "../src/App.jsx",
    "../src/main.jsx",
    "../src/CivicRecordArrival.jsx",
    "../src/CustodyLedgerNormalRoute.js",
    "../src/CustodyLedgerExplanationEntry.js",
  ].map((relative) => readFile(fileURLToPath(new URL(relative, import.meta.url)), "utf8")));
  for (const source of [app, main, arrival, normalRoute]) {
    assert.doesNotMatch(source, /CustodyLedgerExplanationEntry|rp002\.explanation-entry\.v1|OPEN BLANK PYTHON EXPLANATION/);
  }
  assert.doesNotMatch(entry,
    /localStorage|sessionStorage|indexedDB|fetch\(|XMLHttpRequest|WebSocket|document\.|window\.|navigator\./);
  assert.doesNotMatch(entry, /evaluateCustodyLedgerExplanation|submitCustodyLedgerExplanation/);
});
