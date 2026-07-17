import assert from "node:assert/strict";
import test from "node:test";
import {
  CUSTODY_LEDGER_PRIMARY_INTERACTION_VERSION,
  CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS,
  createCustodyLedgerPrimaryInteraction,
  custodyLedgerPrimaryInteractionAccessibility,
  custodyLedgerPrimaryInteractionModalities,
  describeCustodyLedgerPrimaryReview,
} from "../src/CustodyLedgerPrimaryInteraction.js";
import {
  CUSTODY_LEDGER_OBSERVATION_ACTION,
  advanceCustodyLedgerPrerequisite,
  createCustodyLedgerScaffoldFromVerifiedRouteBoundary,
  custodyLedgerObservationIds,
  custodyLedgerPythonChecks,
  custodyLedgerSourceFields,
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

function completedPrerequisites() {
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
      ].map(({ id }) => [id, Object.fromEntries(responsibleAIDimensions.map((dimension) => [dimension, true]))])),
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

function boundary() {
  const scaffold = createCustodyLedgerScaffoldFromVerifiedRouteBoundary(predecessor);
  return {
    checkpoint: "sc03_python_primary_blank",
    boardId: "SC-03-30",
    observationEvidence: observationEvidence(),
    predecessor: { ...predecessor },
    learningState: advanceCustodyLedgerPrerequisite(scaffold, completedPrerequisites()),
  };
}

function intent(overrides = {}) {
  return {
    packetId: "RP-002",
    version: CUSTODY_LEDGER_PRIMARY_INTERACTION_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS,
    activationKind: "pointer",
    eventToken: "primary-interaction-submit",
    classification: "unknown",
    fieldOwner: "human_expedition",
    ...overrides,
  };
}

function assertHardStop(value) {
  const bytes = JSON.stringify(value);
  for (const prohibited of [
    "python_transfer", "python_explanation", "rai_primary", "save_eligibility", "comparison_complete",
    "RP-003", "successorRoute", "learnerSource", "privateNotes", "credentials", "endpoint",
  ]) assert.doesNotMatch(bytes, new RegExp(prohibited, "i"), prohibited);
  assert.equal(value.successor, null);
  assert.equal(value.cityStateDelta, null);
  assert.equal(value.authorityGranted, false);
  assert.equal(value.externalActionEnabled, false);
}

test("exact verified boundary opens one protected blank interaction group only", () => {
  const state = createCustodyLedgerPrimaryInteraction({ boundary: boundary() }).getState();
  assert.equal(state.phase, "30-A0");
  assert.equal(state.stateName, "BLANK_EDITABLE");
  assert.deepEqual(state.sourceFields, custodyLedgerSourceFields);
  assert.equal(state.sourceFieldState, "locked");
  assert.deepEqual(state.expeditionFields, { classification: "", owner: "" });
  assert.ok(Object.values(state.currentAttemptChecks).every((value) => value === false));
  assert.deepEqual(state.focusIntent, { group: "primary_interaction", target: "owner_heading" });
  assert.equal(state.routable, false);
  assert.equal(state.browserStorageUsed, false);
  assertHardStop(state);
});

test("all seven modalities converge on a one-hit strict 6/6 read-only provisional result", () => {
  const snapshots = [];
  for (const activationKind of custodyLedgerPrimaryInteractionModalities) {
    const controller = createCustodyLedgerPrimaryInteraction({ boundary: boundary() });
    const action = intent({ activationKind, eventToken: `primary-${activationKind}` });
    const result = controller.dispatch(action);
    assert.equal(result.status, "provisional_result");
    assert.equal(result.reviewPhase, "30-A1");
    assert.equal(result.state.phase, "30-A2");
    assert.equal(result.state.owner, "SUIT // PROVISIONAL TRANSLATION");
    assert.deepEqual(result.state.sourceFields, custodyLedgerSourceFields);
    assert.equal(result.state.sourceFieldState, "read_only_locked");
    assert.deepEqual(result.state.expeditionFields, {
      classification: "unknown",
      owner: "human_expedition",
    });
    assert.equal(result.state.expeditionFieldState, "read_only_addition");
    assert.ok(Object.values(result.state.currentAttemptChecks).every(Boolean));
    assert.equal(result.state.provisionalResult.record.identity_bearing_material, "closed");
    assertHardStop(result.state);
    const duplicate = controller.dispatch(action);
    assert.equal(duplicate.status, "duplicate_suppressed");
    assert.deepEqual(duplicate.state, result.state);
    snapshots.push(JSON.stringify(result.state));
  }
  assert.equal(new Set(snapshots).size, 1);
});

test("each exact false check and a multi-failure select only answer-free associated feedback", () => {
  for (const failedId of custodyLedgerPythonChecks) {
    const evaluation = Object.fromEntries(custodyLedgerPythonChecks.map((id) => [id, id !== failedId]));
    const review = describeCustodyLedgerPrimaryReview({ ...evaluation, passed: false });
    assert.deepEqual(review.falseCheckIds, [failedId]);
    assert.equal(review.feedback.length, 1);
    assert.equal(review.feedback[0].checkId, failedId);
    assert.equal(review.feedback[0].owner, "901 TEACHER // FEEDBACK");
    assert.doesNotMatch(review.feedback[0].text, /human_expedition|classification.*unknown/i);
  }
  const evaluation = Object.fromEntries(custodyLedgerPythonChecks.map((id, index) => [id, index > 1]));
  const multi = describeCustodyLedgerPrimaryReview({ ...evaluation, passed: false });
  assert.deepEqual(multi.falseCheckIds, custodyLedgerPythonChecks.slice(0, 2));
  assert.deepEqual(multi.focusIntent, {
    group: "primary_feedback",
    target: "owner_heading",
    then: "classification",
  });
});

test("a miss clears submitted values and private work into an unlimited genuinely blank retry", () => {
  const controller = createCustodyLedgerPrimaryInteraction({ boundary: boundary() });
  const miss = controller.dispatch(intent({ classification: "", fieldOwner: "private-owner-8821" }));
  assert.equal(miss.status, "feedback");
  assert.equal(miss.state.phase, "30-A1F");
  assert.equal(miss.state.owner, "901 TEACHER // FEEDBACK");
  assert.equal(Object.hasOwn(miss.state, "expeditionFields"), false);
  assert.doesNotMatch(JSON.stringify(miss.state), /private-owner-8821/);
  assert.ok(miss.state.falseCheckIds.includes("classification_and_owner_added_by_key_update"));
  const retry = controller.retryBlank();
  assert.equal(retry.status, "blank_retry");
  assert.deepEqual(retry.state.expeditionFields, { classification: "", owner: "" });
  assert.ok(Object.values(retry.state.currentAttemptChecks).every((value) => value === false));
  assert.equal(retry.state.attemptCount, 1);
  const second = controller.dispatch(intent({ eventToken: "primary-second-miss", classification: "", fieldOwner: "" }));
  assert.equal(second.state.attemptCount, 2);
  assert.equal(controller.retryBlank().status, "blank_retry");
});

test("separate evidence and route returns are write-free and preserve exact predecessor/observation bytes", () => {
  const accepted = boundary();
  const observationBytes = JSON.stringify(accepted.observationEvidence);
  const predecessorBytes = JSON.stringify(accepted.predecessor);
  const controller = createCustodyLedgerPrimaryInteraction({ boundary: accepted });
  controller.dispatch(intent());
  const evidence = controller.returnToEvidence();
  const route = controller.returnToCityThreshold();
  assert.equal(evidence.writePerformed, false);
  assert.equal(evidence.checkpoint, "sc03_far_complete");
  assert.equal(JSON.stringify(evidence.observationEvidence), observationBytes);
  assert.equal(route.writePerformed, false);
  assert.equal(route.checkpoint, "city_threshold");
  assert.equal(route.cityStateDelta, null);
  assert.equal(JSON.stringify(evidence.predecessor), predecessorBytes);
  assert.equal(JSON.stringify(route.predecessor), predecessorBytes);
});

test("unsafe, malformed, combined, passive, Tour, stale, and private intents fail closed", () => {
  const variants = [
    { mode: "demo_tour" },
    { mode: "protected" },
    { owner: "SYSTEM // DEMO TOUR" },
    { version: "stale" },
    { activationKind: "focus" },
    { activationKind: "hover" },
    { activationKind: "dwell" },
    { action: "SUBMIT AND CONTINUE" },
    { packetId: "RP-003" },
    { eventToken: "bad" },
    { learnerSource: "PRIVATE" },
    { actions: [CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS, "OPEN TRANSFER"] },
  ];
  for (const [index, override] of variants.entries()) {
    const controller = createCustodyLedgerPrimaryInteraction({ boundary: boundary() });
    const before = controller.getState();
    const result = controller.dispatch(intent({ eventToken: `unsafe-primary-${index}`, ...override }));
    assert.equal(result.status, "rejected");
    assert.deepEqual(result.state, before);
    assert.doesNotMatch(JSON.stringify(result.state), /PRIVATE|OPEN TRANSFER/);
  }
});

test("forged result, feedback, private, Tour, and later restored states sanitize to genuine A0", () => {
  for (const restoredState of [
    { version: CUSTODY_LEDGER_PRIMARY_INTERACTION_VERSION, phase: "30-A1", checks: { forged: true } },
    { version: CUSTODY_LEDGER_PRIMARY_INTERACTION_VERSION, phase: "30-A1F", privateNotes: "PRIVATE" },
    { version: CUSTODY_LEDGER_PRIMARY_INTERACTION_VERSION, phase: "30-A2", provisionalResult: { forged: true } },
    { version: CUSTODY_LEDGER_PRIMARY_INTERACTION_VERSION, phase: "python_transfer" },
    { version: CUSTODY_LEDGER_PRIMARY_INTERACTION_VERSION, phase: "tour_preview", mode: "demo_tour" },
    { version: "stale", phase: "30-A0", expeditionFields: { classification: "unknown" } },
  ]) {
    const state = createCustodyLedgerPrimaryInteraction({ boundary: boundary(), restoredState }).getState();
    assert.equal(state.phase, "30-A0");
    assert.deepEqual(state.expeditionFields, { classification: "", owner: "" });
    assert.equal(state.attemptCount, 0);
    assert.doesNotMatch(JSON.stringify(state), /PRIVATE|forged|python_transfer|tour_preview/);
  }
});

test("missing, forged, contaminated, or incomplete canonical boundaries cannot authorize the seam", () => {
  const good = boundary();
  const invalid = [
    null,
    { ...good, checkpoint: "sc03_local_comparison_blank" },
    { ...good, privateNotes: "PRIVATE" },
    { ...good, predecessor: { ...good.predecessor, verificationStatus: "forged" } },
    { ...good, observationEvidence: good.observationEvidence.slice(0, 4) },
    { ...good, observationEvidence: [...good.observationEvidence, good.observationEvidence[0]] },
    { ...good, learningState: { ...good.learningState, prerequisiteStatus: "missing" } },
    { ...good, learningState: { ...good.learningState, phase: "python_primary_result" } },
  ];
  for (const [index, value] of invalid.entries()) {
    assert.throws(
      () => createCustodyLedgerPrimaryInteraction({ boundary: value }),
      /exact verified blank/,
      `invalid boundary ${index}`,
    );
  }
});

test("campaign and Tour objects remain byte-stable and cannot be smuggled into interaction state", () => {
  const campaign = { route: "city_threshold", observations: 5, completion: false };
  const tour = { mode: "demo_tour", cursor: "rp002", noCredit: true };
  const campaignBytes = JSON.stringify(campaign);
  const tourBytes = JSON.stringify(tour);
  const controller = createCustodyLedgerPrimaryInteraction({ boundary: boundary() });
  controller.dispatch(intent());
  assert.equal(JSON.stringify(campaign), campaignBytes);
  assert.equal(JSON.stringify(tour), tourBytes);
  assert.doesNotMatch(JSON.stringify(controller.getState()), /demo_tour|tourEvidence|campaignCompletion/);
});

test("accessibility metadata preserves one group, field association, 44px targets, and parity", () => {
  assert.deepEqual(custodyLedgerPrimaryInteractionAccessibility, {
    oneActiveGroup: true,
    semanticOrder: [
      "owner_heading", "locked_source_fields", "classification", "owner", "associated_help",
      "primary_action", "return_to_evidence", "return_to_city_threshold",
    ],
    minActionCssPx: 44,
    lockedSourceFieldsProgrammatic: true,
    errorsFieldAssociated: true,
    meaningUsesColorAlone: false,
    forcedColorsEquivalent: true,
    reducedMotionDirectReplacement: true,
    naturalNarrowReflow: true,
    textZoomPercent: 200,
    horizontalPageEscape: false,
  });
  const failed = createCustodyLedgerPrimaryInteraction({ boundary: boundary() }).dispatch(intent({
    classification: "",
    fieldOwner: "",
  })).state;
  assert.equal(failed.feedback.every(({ field }) => ["classification", "owner"].includes(field)), true);
  assert.equal(failed.accessibility.oneActiveGroup, true);
  assert.equal(failed.accessibility.minActionCssPx, 44);
});
