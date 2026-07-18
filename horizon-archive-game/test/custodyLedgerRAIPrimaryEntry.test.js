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
} from "../src/CustodyLedgerExplanationSubmission.js";
import {
  CUSTODY_LEDGER_OBSERVATION_ACTION,
  advanceCustodyLedgerPrerequisite,
  createCustodyLedgerScaffoldFromVerifiedRouteBoundary,
  custodyLedgerExplanationAnswers,
  custodyLedgerExplanationDimensions,
  custodyLedgerObservationIds,
  custodyLedgerPythonOwnershipMessages,
  custodyLedgerRAIPrimaryScenarios,
} from "../src/custodyLedgerExercise.js";
import {
  CUSTODY_LEDGER_OPEN_RAI_PRIMARY,
  CUSTODY_LEDGER_RAI_PRIMARY_ENTRY_VERSION,
  createCustodyLedgerRAIPrimaryEntry,
  custodyLedgerRAIPrimaryEntryAccessibility,
  custodyLedgerRAIPrimaryEntryModalities,
} from "../src/CustodyLedgerRAIPrimaryEntry.js";
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
    eventToken: "rai-entry-primary-fixture",
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
    eventToken: "rai-entry-fresh-fixture",
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
    eventToken: "rai-entry-transfer-fixture",
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
    eventToken: "rai-entry-explanation-fixture",
  }).state;
  const options = {
    primaryResult,
    learningState,
    freshPracticeState,
    transferCompleteState,
    explanationEntryState,
  };
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
    eventToken: "rai-entry-complete-fixture",
  }).state;
  return { ...options, explanationCompleteState };
}

function intent(overrides = {}) {
  return {
    packetId: "RP-002",
    version: CUSTODY_LEDGER_RAI_PRIMARY_ENTRY_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CUSTODY_LEDGER_OPEN_RAI_PRIMARY,
    activationKind: "pointer",
    eventToken: "dismiss-python-conclusion",
    ...overrides,
  };
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
  assert.equal(state.raiAttemptCreated, false);
  assert.equal(state.raiEvidenceCreated, false);
  assert.equal(state.raiCrossCreditGranted, false);
  assert.equal(state.savePerformed, false);
  assert.equal(state.examCreditGranted, false);
  assert.equal(state.examGuarantee, false);
}

test("exact accepted Pilot conclusion remains the sole stable RAD-00 group", () => {
  const state = createCustodyLedgerRAIPrimaryEntry(fixture()).getState();
  assert.equal(state.phase, "RAD-00");
  assert.equal(state.authorityPhase, "python_complete");
  assert.equal(state.owner, custodyLedgerPythonOwnershipMessages.python_conclusion.owner);
  assert.deepEqual(state.availableActions, [
    "RETURN TO EVIDENCE",
    "RETURN TO CITY THRESHOLD",
    CUSTODY_LEDGER_OPEN_RAI_PRIMARY,
  ]);
  assert.equal(state.finalizedEvidenceVisibility, "hidden_prerequisite_only");
  assertZeroEffect(state);
});

test("all seven modalities converge on one exact blank RAD-20 group", () => {
  const snapshots = [];
  for (const activationKind of custodyLedgerRAIPrimaryEntryModalities) {
    const result = createCustodyLedgerRAIPrimaryEntry(fixture()).dispatch(intent({
      activationKind,
      eventToken: `dismiss-conclusion-${activationKind}`,
    }));
    assert.equal(result.status, "blank_rai_primary_opened");
    assert.equal(result.replacement, "atomic");
    assert.equal(result.intentPhase, "RAD-10");
    assert.equal(result.state.phase, "RAD-20");
    assert.equal(result.state.authorityPhase, "rai_primary");
    assert.equal(result.state.owner, custodyLedgerPythonOwnershipMessages.rai_primary.owner);
    assertZeroEffect(result.state);
    snapshots.push(JSON.stringify(result.state));
  }
  assert.equal(new Set(snapshots).size, 1);
});

test("RAD-20 exposes only the unchanged first case and three genuinely blank controls", () => {
  const state = createCustodyLedgerRAIPrimaryEntry(fixture()).dispatch(intent()).state;
  const firstCase = custodyLedgerRAIPrimaryScenarios[0];
  assert.deepEqual(state.case, { id: firstCase.id, prompt: firstCase.prompt });
  assert.deepEqual(state.controls.map(({ id }) => id), ["principle", "mitigation", "accountable_owner"]);
  assert.deepEqual(state.controls.map(({ authorityDimension }) => authorityDimension), ["principle", "mitigation", "owner"]);
  for (const control of state.controls) {
    assert.equal(control.value, "");
    assert.equal(control.nativeValue, "");
    assert.equal(control.selected, false);
    assert.equal(control.semanticState, "genuinely_blank");
  }
  assert.equal(state.attemptStatus, "no_attempt");
  assert.equal(state.scoringEnabled, false);
  assert.deepEqual(state.availableActions, ["RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD"]);
  assert.deepEqual(state.focusIntent, { group: "rai_primary", target: "owner_heading", then: "principle" });
  assert.equal(Object.hasOwn(state, "raiEvidence"), false);
  assert.equal(Object.hasOwn(state, "submitAction"), false);
});

test("invalid, private, combined, Tour, stale, automatic, and later requests fail byte-stable without spending a valid token", () => {
  const variants = [
    { mode: "demo_tour" },
    { mode: "protected" },
    { owner: "SYSTEM // EXPEDITION SESSION" },
    { version: "stale" },
    { activationKind: "automatic" },
    { activationKind: ["pointer", "touch"] },
    { action: "RETURN TO EVIDENCE" },
    { packetId: "RP-003" },
    { eventToken: "bad" },
    { privateResponse: "PRIVATE" },
    { conclusionText: "PRIVATE" },
    { actions: [CUSTODY_LEDGER_OPEN_RAI_PRIMARY, "RETURN TO EVIDENCE"] },
    { nextPhase: "rai_feedback" },
  ];
  for (const [index, override] of variants.entries()) {
    const controller = createCustodyLedgerRAIPrimaryEntry(fixture());
    const before = controller.getState();
    const token = `valid-after-invalid-${index}`;
    const rejected = controller.dispatch(intent({ eventToken: token, ...override }));
    assert.equal(rejected.status, "rejected");
    assert.deepEqual(rejected.state, before);
    assert.equal(controller.dispatch(intent({ eventToken: token })).status, "blank_rai_primary_opened");
  }
});

test("one fresh token is consumed once and no second or later transition opens", () => {
  const controller = createCustodyLedgerRAIPrimaryEntry(fixture());
  const action = intent({ eventToken: "one-hit-conclusion-dismissal" });
  const first = controller.dispatch(action);
  assert.equal(first.status, "blank_rai_primary_opened");
  assert.equal(controller.dispatch(action).status, "duplicate_suppressed");
  const later = controller.dispatch(intent({ eventToken: "fresh-but-later-state" }));
  assert.equal(later.status, "rejected");
  assert.deepEqual(later.state, first.state);
});

test("exact conclusion and exact blank resume while mixed, private, partial, or later state downgrades to RAD-00", () => {
  const options = fixture();
  const exactConclusion = createCustodyLedgerRAIPrimaryEntry(options).getState();
  const controller = createCustodyLedgerRAIPrimaryEntry(options);
  const exactBlank = controller.dispatch(intent()).state;
  assert.deepEqual(
    createCustodyLedgerRAIPrimaryEntry({ ...options, restoredState: exactConclusion }).getState(),
    exactConclusion,
  );
  assert.deepEqual(
    createCustodyLedgerRAIPrimaryEntry({ ...options, restoredState: exactBlank }).getState(),
    exactBlank,
  );
  for (const restoredState of [
    { ...exactConclusion, privateProse: "PRIVATE" },
    { ...exactBlank, controls: exactBlank.controls.map((control, index) => (
      index === 0 ? { ...control, value: "prefilled" } : control
    )) },
    { ...exactBlank, raiEvidence: { forged: true } },
    { ...exactBlank, successor: "RP-003" },
    { phase: "RAD-10", partial: true },
    { phase: "rai_feedback", later: true },
  ]) {
    const safe = createCustodyLedgerRAIPrimaryEntry({ ...options, restoredState }).getState();
    assert.equal(safe.phase, "RAD-00");
    assert.doesNotMatch(JSON.stringify(safe), /PRIVATE|prefilled|RP-003|forged/i);
    assert.equal(Object.hasOwn(safe, "later"), false);
    assert.equal(Object.hasOwn(safe, "partial"), false);
  }
});

test("forged, incomplete, or contaminated EXS-20C cannot authorize dismissal", () => {
  const options = fixture();
  const invalid = [
    {},
    { ...options, explanationCompleteState: { ...options.explanationCompleteState, phase: "EXS-20F" } },
    { ...options, explanationCompleteState: { ...options.explanationCompleteState, privateProse: "PRIVATE" } },
    { ...options, explanationCompleteState: { ...options.explanationCompleteState, successor: "RP-003" } },
    { ...options, explanationCompleteState: {
      ...options.explanationCompleteState,
      pythonExplanationEvidence: {
        ...options.explanationCompleteState.pythonExplanationEvidence,
        masteryStatus: "in_progress",
      },
    } },
  ];
  for (const value of invalid) {
    assert.throws(
      () => createCustodyLedgerRAIPrimaryEntry(value),
      /exact accepted protected EXS-20C conclusion/i,
    );
  }
});

test("separate returns remain write-free and byte-stable from both RAD states", () => {
  for (const outcome of ["conclusion", "blank_primary"]) {
    const options = fixture();
    const observationBytes = JSON.stringify(options.explanationCompleteState.observationEvidence);
    const predecessorBytes = JSON.stringify(options.explanationCompleteState.predecessor);
    const controller = createCustodyLedgerRAIPrimaryEntry(options);
    if (outcome === "blank_primary") controller.dispatch(intent());
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

test("accessibility, privacy, hard stop, module purity, and normal-route composition boundaries remain exact", async () => {
  assert.equal(custodyLedgerRAIPrimaryEntryAccessibility.oneActiveGroup, true);
  assert.equal(custodyLedgerRAIPrimaryEntryAccessibility.minActionCssPx, 44);
  assert.equal(custodyLedgerRAIPrimaryEntryAccessibility.blankNativeControls, true);
  assert.equal(custodyLedgerRAIPrimaryEntryAccessibility.ownerHeadingInTabOrder, false);
  assert.equal(custodyLedgerRAIPrimaryEntryAccessibility.removedGroupFocusCleanup, true);
  assert.equal(custodyLedgerRAIPrimaryEntryAccessibility.forcedColorsEquivalent, true);
  assert.equal(custodyLedgerRAIPrimaryEntryAccessibility.reducedMotionDirectReplacement, true);
  assert.equal(custodyLedgerRAIPrimaryEntryAccessibility.naturalNarrowReflow, true);
  assert.equal(custodyLedgerRAIPrimaryEntryAccessibility.textZoomPercent, 200);
  assert.equal(custodyLedgerRAIPrimaryEntryAccessibility.horizontalPageEscape, false);

  const campaign = { route: "city_threshold", observations: 5, completion: false };
  const tour = { mode: "demo_tour", cursor: "rp002", noCredit: true };
  const campaignBytes = JSON.stringify(campaign);
  const tourBytes = JSON.stringify(tour);
  const state = createCustodyLedgerRAIPrimaryEntry(fixture()).dispatch(intent()).state;
  assert.equal(JSON.stringify(campaign), campaignBytes);
  assert.equal(JSON.stringify(tour), tourBytes);
  for (const forbidden of [
    "rai_feedback", "rai_transfer", "rai_explanation", "reviewSave", "completion", "credits",
    "externalActionPayload", "successorRoute",
  ]) assert.doesNotMatch(JSON.stringify(state), new RegExp(forbidden, "i"), forbidden);

  const [{ readFile }, { fileURLToPath }] = await Promise.all([
    import("node:fs/promises"),
    import("node:url"),
  ]);
  const [app, main, normalRoute, arrival, source] = await Promise.all([
    "../src/App.jsx",
    "../src/main.jsx",
    "../src/CustodyLedgerNormalRoute.js",
    "../src/CivicRecordArrival.jsx",
    "../src/CustodyLedgerRAIPrimaryEntry.js",
  ].map((relative) => readFile(fileURLToPath(new URL(relative, import.meta.url)), "utf8")));
  assert.doesNotMatch(main,
    /CustodyLedgerRAIPrimaryEntry|rp002\.rai-primary-entry\.v1|DISMISS PYTHON CONCLUSION AND OPEN RESPONSIBLE-AI REVIEW/);
  assert.match(app, /createCustodyLedgerNormalRAIPrimaryEntry/);
  assert.match(app, /CUSTODY_LEDGER_OPEN_RAI_PRIMARY/);
  assert.match(normalRoute, /createCustodyLedgerNormalRAIPrimaryEntry/);
  assert.match(arrival, /CUSTODY_LEDGER_OPEN_RAI_PRIMARY/);
  assert.match(arrival, /primaryPhase === "RAD-20"/);
  for (const acceptedSource of [app, main, normalRoute, arrival]) {
    assert.doesNotMatch(acceptedSource,
      /submitCustodyLedgerRAIPrimaryScenario|custodyLedgerRAIAnswers/);
  }
  for (const boundedSource of [normalRoute, arrival]) {
    assert.doesNotMatch(boundedSource, /evaluateResponsibleAI/);
  }
  assert.doesNotMatch(source,
    /localStorage|sessionStorage|indexedDB|fetch\(|XMLHttpRequest|WebSocket|document\.|window\.|navigator\./);
  assert.doesNotMatch(source, /submitCustodyLedgerRAIPrimaryScenario|evaluateResponsibleAI/);
});
