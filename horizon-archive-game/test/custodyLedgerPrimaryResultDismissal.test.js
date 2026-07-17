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
  custodyLedgerPrimaryResultDismissalAccessibility,
  custodyLedgerPrimaryResultDismissalModalities,
} from "../src/CustodyLedgerPrimaryResultDismissal.js";
import {
  CUSTODY_LEDGER_FRESH_PRACTICE_LABEL,
  CUSTODY_LEDGER_OBSERVATION_ACTION,
  advanceCustodyLedgerPrerequisite,
  createCustodyLedgerScaffoldFromVerifiedRouteBoundary,
  custodyLedgerExpeditionFields,
  custodyLedgerObservationIds,
  custodyLedgerPythonOwnershipMessages,
  custodyLedgerTransferSourceFields,
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

function verifiedBoundary() {
  const scaffold = createCustodyLedgerScaffoldFromVerifiedRouteBoundary(predecessor);
  return {
    checkpoint: "sc03_python_primary_blank",
    boardId: "SC-03-30",
    observationEvidence: observationEvidence(),
    predecessor: { ...predecessor },
    learningState: advanceCustodyLedgerPrerequisite(scaffold, prerequisites()),
  };
}

function primaryResultFixture() {
  const boundary = verifiedBoundary();
  const primary = createCustodyLedgerPrimaryInteraction({ boundary });
  const result = primary.dispatch({
    packetId: "RP-002",
    version: CUSTODY_LEDGER_PRIMARY_INTERACTION_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS,
    activationKind: "pointer",
    eventToken: "primary-result-fixture",
    classification: "unknown",
    fieldOwner: "human_expedition",
  });
  assert.equal(result.status, "provisional_result");
  return { primaryResult: result.state, learningState: boundary.learningState };
}

function intent(overrides = {}) {
  return {
    packetId: "RP-002",
    version: CUSTODY_LEDGER_PRIMARY_RESULT_DISMISSAL_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CUSTODY_LEDGER_CLEAR_RESULT_ACTION,
    activationKind: "pointer",
    eventToken: "dismiss-primary-result",
    ...overrides,
  };
}

function assertNoLaterOrContamination(state) {
  const bytes = JSON.stringify(state);
  for (const forbidden of [
    "primaryResult", "provisionalResult", "currentAttemptChecks", "pythonEvidence",
    "python_transfer", "submit transfer", "evaluation", "feedback", "explanation",
    "rai_", "save_eligibility", "comparison_complete", "credits", "RP-003",
    "learnerSource", "private", "answerBank", "successorRoute", "credentials", "endpoint",
  ]) assert.doesNotMatch(bytes, new RegExp(forbidden, "i"), forbidden);
  assert.equal(state.transferSubmissionImplemented, false);
  assert.equal(state.transferScoringEnabled, false);
  assert.equal(state.successor, null);
  assert.equal(state.cityStateDelta, null);
  assert.equal(state.authorityGranted, false);
  assert.equal(state.externalActionEnabled, false);
}

test("exact verified result remains complete until the sole explicit forward intent", () => {
  const controller = createCustodyLedgerPrimaryResultDismissal(primaryResultFixture());
  const state = controller.getState();
  assert.equal(state.phase, "DR-00");
  assert.equal(state.stateName, "VERIFIED_PRIMARY_RESULT");
  assert.equal(state.owner, custodyLedgerPythonOwnershipMessages.primary_result.owner);
  assert.equal(state.ownershipMessage.text, custodyLedgerPythonOwnershipMessages.primary_result.text);
  assert.deepEqual(state.availableActions, [
    CUSTODY_LEDGER_CLEAR_RESULT_ACTION,
    "RETURN TO EVIDENCE",
    "RETURN TO CITY THRESHOLD",
  ]);
  assert.equal(state.provisionalResult.record.identity_bearing_material, "closed");
  assert.deepEqual(state.focusIntent, { group: "primary_result", target: "owner_heading" });
});

test("all seven modalities produce one identical atomic carry-free blank group", () => {
  const snapshots = [];
  for (const activationKind of custodyLedgerPrimaryResultDismissalModalities) {
    const controller = createCustodyLedgerPrimaryResultDismissal(primaryResultFixture());
    const action = intent({
      activationKind,
      eventToken: `dismiss-${activationKind}`,
    });
    const result = controller.dispatch(action);
    assert.equal(result.status, "fresh_practice_opened");
    assert.equal(result.replacement, "atomic");
    assert.equal(result.state.phase, "DR-20");
    assert.equal(result.state.owner, custodyLedgerPythonOwnershipMessages.fresh_practice.owner);
    assert.deepEqual(result.state.ownershipMessage, custodyLedgerPythonOwnershipMessages.fresh_practice);
    assert.equal(result.state.workImageLabel, CUSTODY_LEDGER_FRESH_PRACTICE_LABEL);
    assert.deepEqual(result.state.sourceFields, custodyLedgerTransferSourceFields);
    assert.deepEqual(result.state.expeditionFields, custodyLedgerExpeditionFields);
    assert.deepEqual(result.state.availableActions, [
      "RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD",
    ]);
    assertNoLaterOrContamination(result.state);
    const duplicate = controller.dispatch(action);
    assert.equal(duplicate.status, "duplicate_suppressed");
    assert.deepEqual(duplicate.state, result.state);
    snapshots.push(JSON.stringify(result.state));
  }
  assert.equal(new Set(snapshots).size, 1);
});

test("invalid, passive, stale, forged, Tour, combined, private, and later requests fail closed", () => {
  const variants = [
    { mode: "demo_tour" },
    { mode: "protected" },
    { owner: "SYSTEM // EXPEDITION SESSION" },
    { version: "stale" },
    { activationKind: "focus" },
    { activationKind: "hover" },
    { activationKind: "dwell" },
    { action: "RETURN TO EVIDENCE" },
    { packetId: "RP-003" },
    { eventToken: "bad" },
    { learnerSource: "PRIVATE" },
    { actions: [CUSTODY_LEDGER_CLEAR_RESULT_ACTION, "RETURN TO EVIDENCE"] },
    { nextPhase: "python_transfer" },
  ];
  for (const [index, override] of variants.entries()) {
    const controller = createCustodyLedgerPrimaryResultDismissal(primaryResultFixture());
    const before = controller.getState();
    const rejected = controller.dispatch(intent({ eventToken: `invalid-${index}`, ...override }));
    assert.equal(rejected.status, "rejected");
    assert.deepEqual(rejected.state, before);
    const valid = controller.dispatch(intent({ eventToken: `valid-after-invalid-${index}` }));
    assert.equal(valid.status, "fresh_practice_opened");
  }
});

test("returns remain separate and write-free from both exact terminal groups", () => {
  const fixture = primaryResultFixture();
  const observationBytes = JSON.stringify(fixture.primaryResult.observationEvidence);
  const predecessorBytes = JSON.stringify(fixture.primaryResult.predecessor);
  const controller = createCustodyLedgerPrimaryResultDismissal(fixture);
  for (const phase of ["DR-00", "DR-20"]) {
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
    if (phase === "DR-00") assert.equal(controller.dispatch(intent()).status, "fresh_practice_opened");
  }
});

test("exact fresh restore is replay-free while contaminated or stale restore downgrades to result", () => {
  const fixture = primaryResultFixture();
  const first = createCustodyLedgerPrimaryResultDismissal(fixture);
  const fresh = first.dispatch(intent()).state;
  const restoredFresh = createCustodyLedgerPrimaryResultDismissal({
    ...fixture,
    restoredState: fresh,
  }).getState();
  assert.deepEqual(restoredFresh, fresh);
  assertNoLaterOrContamination(restoredFresh);

  for (const restoredState of [
    { ...fresh, privateNotes: "PRIVATE" },
    { ...fresh, sourceFields: { ...fresh.sourceFields, identity: "forged" } },
    { ...fresh, transferSubmissionImplemented: true },
    { ...fresh, phase: "python_transfer" },
    { ...fresh, version: "stale" },
    { phase: "DR-10", partial: true },
  ]) {
    const restored = createCustodyLedgerPrimaryResultDismissal({
      ...fixture,
      restoredState,
    }).getState();
    assert.equal(restored.phase, "DR-00");
    assert.doesNotMatch(JSON.stringify(restored), /PRIVATE|forged|python_transfer|partial/i);
  }
});

test("forged, incomplete, or contaminated input cannot authorize the protected seam", () => {
  const fixture = primaryResultFixture();
  const invalid = [
    {},
    { ...fixture, primaryResult: { ...fixture.primaryResult, phase: "30-A1F" } },
    { ...fixture, primaryResult: { ...fixture.primaryResult, privateNotes: "PRIVATE" } },
    { ...fixture, primaryResult: { ...fixture.primaryResult, successor: "RP-003" } },
    { ...fixture, primaryResult: {
      ...fixture.primaryResult,
      currentAttemptChecks: { ...fixture.primaryResult.currentAttemptChecks, exact_keys_only: false },
    } },
    { ...fixture, primaryResult: {
      ...fixture.primaryResult,
      observationEvidence: fixture.primaryResult.observationEvidence.slice(0, 4),
    } },
    { ...fixture, learningState: { ...fixture.learningState, phase: "python_primary_result" } },
  ];
  for (const [index, value] of invalid.entries()) {
    assert.throws(
      () => createCustodyLedgerPrimaryResultDismissal(value),
      /exact verified|canonical primary/i,
      `invalid fixture ${index}`,
    );
  }
});

test("focus and accessibility metadata preserve owner replacement and blank-field order", () => {
  assert.equal(custodyLedgerPrimaryResultDismissalAccessibility.oneActiveGroup, true);
  assert.equal(custodyLedgerPrimaryResultDismissalAccessibility.minActionCssPx, 44);
  assert.equal(custodyLedgerPrimaryResultDismissalAccessibility.ownerHeadingInTabOrder, false);
  assert.equal(custodyLedgerPrimaryResultDismissalAccessibility.firstFreshTabTarget, "classification");
  assert.deepEqual(custodyLedgerPrimaryResultDismissalAccessibility.freshSemanticOrder, [
    "owner_heading", "locked_source_fields", "classification", "owner",
    "return_to_evidence", "return_to_city_threshold",
  ]);
  const fresh = createCustodyLedgerPrimaryResultDismissal(primaryResultFixture()).dispatch(intent()).state;
  assert.deepEqual(fresh.focusIntent, {
    group: "fresh_practice", target: "owner_heading", then: "classification",
  });
  assert.equal(fresh.accessibility.forcedColorsEquivalent, true);
  assert.equal(fresh.accessibility.reducedMotionDirectReplacement, true);
  assert.equal(fresh.accessibility.horizontalPageEscape, false);
});

test("campaign and Tour objects remain byte-stable and no accepted entrypoint imports the seam", async () => {
  const campaign = { route: "city_threshold", observations: 5, completion: false };
  const tour = { mode: "demo_tour", cursor: "rp002", noCredit: true };
  const campaignBytes = JSON.stringify(campaign);
  const tourBytes = JSON.stringify(tour);
  const controller = createCustodyLedgerPrimaryResultDismissal(primaryResultFixture());
  controller.dispatch(intent());
  assert.equal(JSON.stringify(campaign), campaignBytes);
  assert.equal(JSON.stringify(tour), tourBytes);
  assert.doesNotMatch(JSON.stringify(controller.getState()), /demo_tour|tourEvidence|campaignCompletion/);

  const [{ readFile }, { fileURLToPath }] = await Promise.all([
    import("node:fs/promises"),
    import("node:url"),
  ]);
  for (const relative of ["../src/App.jsx", "../src/main.jsx", "../src/CivicRecordArrival.jsx", "../src/CustodyLedgerNormalRoute.js"]) {
    const source = await readFile(fileURLToPath(new URL(relative, import.meta.url)), "utf8");
    assert.doesNotMatch(source, /CustodyLedgerPrimaryResultDismissal|CLEAR RESULT AND OPEN FRESH PRACTICE/);
  }
});
