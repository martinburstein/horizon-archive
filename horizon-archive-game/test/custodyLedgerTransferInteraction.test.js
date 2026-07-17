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
  CUSTODY_LEDGER_RETRY_TRANSFER_ACTION,
  CUSTODY_LEDGER_TRANSFER_INTERACTION_VERSION,
  buildCustodyLedgerTransferSource,
  createCustodyLedgerTransferInteraction,
  custodyLedgerTransferInteractionAccessibility,
  custodyLedgerTransferInteractionModalities,
  describeCustodyLedgerTransferReview,
} from "../src/CustodyLedgerTransferInteraction.js";
import {
  CUSTODY_LEDGER_FRESH_PRACTICE_LABEL,
  CUSTODY_LEDGER_OBSERVATION_ACTION,
  advanceCustodyLedgerPrerequisite,
  createCustodyLedgerScaffoldFromVerifiedRouteBoundary,
  custodyLedgerExpeditionFields,
  custodyLedgerObservationIds,
  custodyLedgerPythonChecks,
  custodyLedgerPythonOwnershipMessages,
  custodyLedgerTransferReferenceSource,
  custodyLedgerTransferSourceFields,
  evaluateCustodyLedgerTransferSource,
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
  const primary = createCustodyLedgerPrimaryInteraction({ boundary });
  const submitted = primary.dispatch({
    packetId: "RP-002",
    version: CUSTODY_LEDGER_PRIMARY_INTERACTION_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS,
    activationKind: "pointer",
    eventToken: "transfer-primary-fixture",
    classification: "unknown",
    fieldOwner: "human_expedition",
  });
  assert.equal(submitted.status, "provisional_result");
  const dismissal = createCustodyLedgerPrimaryResultDismissal({
    primaryResult: submitted.state,
    learningState,
  });
  const opened = dismissal.dispatch({
    packetId: "RP-002",
    version: CUSTODY_LEDGER_PRIMARY_RESULT_DISMISSAL_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CUSTODY_LEDGER_CLEAR_RESULT_ACTION,
    activationKind: "pointer",
    eventToken: "transfer-fresh-fixture",
  });
  assert.equal(opened.status, "fresh_practice_opened");
  return {
    primaryResult: submitted.state,
    learningState,
    freshPracticeState: opened.state,
  };
}

function intent(overrides = {}) {
  return {
    packetId: "RP-002",
    version: CUSTODY_LEDGER_TRANSFER_INTERACTION_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS,
    activationKind: "pointer",
    eventToken: "submit-transfer-fields",
    classification: "unknown",
    fieldOwner: "human_reviewer",
    ...overrides,
  };
}

function assertNoLaterState(state) {
  const bytes = JSON.stringify(state);
  for (const forbidden of [
    "explanation_prompt", "python_explanation", "rai_", "review_save", "comparison_complete",
    "credits", "RP-003", "successorRoute", "credentials", "endpoint", "payload", "response",
  ]) assert.doesNotMatch(bytes, new RegExp(forbidden, "i"), forbidden);
  assert.equal(state.successor, null);
  assert.equal(state.cityStateDelta, null);
  assert.equal(state.authorityGranted, false);
  assert.equal(state.externalActionEnabled, false);
  assert.equal(state.savePerformed, false);
}

test("exact canonical fresh practice opens only the protected blank transfer group", () => {
  const controller = createCustodyLedgerTransferInteraction(fixture());
  const state = controller.getState();
  assert.equal(state.phase, "FT-00");
  assert.equal(state.owner, custodyLedgerPythonOwnershipMessages.fresh_practice.owner);
  assert.equal(state.workImageLabel, CUSTODY_LEDGER_FRESH_PRACTICE_LABEL);
  assert.deepEqual(state.sourceFields, custodyLedgerTransferSourceFields);
  assert.deepEqual(state.expeditionFields, custodyLedgerExpeditionFields);
  assert.deepEqual(state.availableActions, [
    CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS,
    "RETURN TO EVIDENCE",
    "RETURN TO CITY THRESHOLD",
  ]);
  assert.equal(state.primaryEvidence.masteryStatus, "primary_complete");
  assert.equal(state.transferEvidence, undefined);
  assertNoLaterState(state);
});

test("all seven modalities produce one identical current-attempt 6/6 terminal group", () => {
  const snapshots = [];
  for (const activationKind of custodyLedgerTransferInteractionModalities) {
    const controller = createCustodyLedgerTransferInteraction(fixture());
    const action = intent({ activationKind, eventToken: `transfer-${activationKind}` });
    const result = controller.dispatch(action);
    assert.equal(result.status, "transfer_evidence_complete");
    assert.equal(result.reviewPhase, "FT-10");
    assert.equal(result.state.phase, "FT-20C");
    assert.equal(result.state.owner, "SYSTEM // EXPEDITION STATE");
    assert.equal(result.state.transferEvidence.masteryStatus, "transfer_complete");
    assert.deepEqual(result.state.currentAttemptChecks,
      Object.fromEntries(custodyLedgerPythonChecks.map((id) => [id, true])));
    assert.deepEqual(result.state.availableActions, [
      "RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD",
    ]);
    assertNoLaterState(result.state);
    const duplicate = controller.dispatch(action);
    assert.equal(duplicate.status, "duplicate_suppressed");
    assert.deepEqual(duplicate.state, result.state);
    snapshots.push(JSON.stringify(result.state));
  }
  assert.equal(new Set(snapshots).size, 1);
});

test("wrong transfer values expose only actual failed checks and RETRY BLANK clears private work", () => {
  const controller = createCustodyLedgerTransferInteraction(fixture());
  const failed = controller.dispatch(intent({
    eventToken: "wrong-transfer-owner",
    classification: "private-label",
    fieldOwner: "human_expedition",
  }));
  assert.equal(failed.status, "feedback");
  assert.equal(failed.state.phase, "FT-20F");
  assert.deepEqual(failed.state.falseCheckIds, ["classification_and_owner_added_by_key_update"]);
  assert.deepEqual(failed.state.feedback.map(({ checkId }) => checkId), failed.state.falseCheckIds);
  assert.deepEqual(failed.state.availableActions, [
    CUSTODY_LEDGER_RETRY_TRANSFER_ACTION,
    "RETURN TO EVIDENCE",
    "RETURN TO CITY THRESHOLD",
  ]);
  assert.doesNotMatch(JSON.stringify(failed.state), /private-label|human_expedition/);
  const retry = controller.retryBlank();
  assert.equal(retry.status, "blank_retry");
  assert.equal(retry.state.phase, "FT-00");
  assert.deepEqual(retry.state.expeditionFields, custodyLedgerExpeditionFields);
  assert.deepEqual(retry.state.focusIntent, {
    group: "fresh_practice", target: "owner_heading", then: "classification",
  });
  assert.equal(retry.state.transferEvidence.attemptCount, 1);
  const recovered = controller.dispatch(intent({ eventToken: "recovered-transfer" }));
  assert.equal(recovered.status, "transfer_evidence_complete");
  assert.equal(recovered.state.transferEvidence.attemptCount, 2);
});

test("the real evaluator proves every check boundary, multi-failure, and forbidden operations", () => {
  const variants = {
    result_is_dictionary: custodyLedgerTransferReferenceSource.replace("comparison = {", "comparison = [] #"),
    exact_keys_only: custodyLedgerTransferReferenceSource.replace(
      '"access_requested": False,',
      '"access_requested": False,\n    "extra": "value",',
    ),
    condition_and_source_preserved: custodyLedgerTransferReferenceSource.replace("unresolved_interval", "changed"),
    identity_remains_none: custodyLedgerTransferReferenceSource.replace('"identity": None', '"identity": False'),
    access_requested_remains_false: custodyLedgerTransferReferenceSource.replace(
      '"access_requested": False',
      '"access_requested": True',
    ),
    classification_and_owner_added_by_key_update: custodyLedgerTransferReferenceSource.replace(
      "human_reviewer",
      "human_expedition",
    ),
  };
  for (const [checkId, source] of Object.entries(variants)) {
    const evaluation = evaluateCustodyLedgerTransferSource(source);
    const review = describeCustodyLedgerTransferReview(evaluation);
    assert.equal(evaluation[checkId], false, checkId);
    assert.equal(review.falseCheckIds.includes(checkId), true, checkId);
    assert.equal(review.passed, false, checkId);
  }
  const multi = evaluateCustodyLedgerTransferSource(
    custodyLedgerTransferReferenceSource
      .replace("unresolved_interval", "changed")
      .replace('"identity": None', '"identity": False'),
  );
  assert.equal(multi.condition_and_source_preserved, false);
  assert.equal(multi.identity_remains_none, false);
  for (const suffix of [
    "\nprint(comparison)",
    "\nopen('private.txt', 'w')",
    "\nrequests.post('https://example.invalid', json=comparison)",
  ]) assert.equal(evaluateCustodyLedgerTransferSource(`${custodyLedgerTransferReferenceSource}${suffix}`).passed, false);
});

test("the protected source builder supplies only the two learner-owned values", () => {
  const source = buildCustodyLedgerTransferSource({ classification: "unknown", owner: "human_reviewer" });
  assert.equal(evaluateCustodyLedgerTransferSource(source).passed, true);
  assert.match(source, /unresolved_interval/);
  assert.match(source, /deidentified_sensor_log/);
  assert.match(source, /"identity": None/);
  assert.match(source, /"access_requested": False/);
  assert.doesNotMatch(source, /outlined_gap|exposed_surface|human_expedition/);
});

test("invalid, passive, stale, forged, combined, Tour, private, and later requests fail closed", () => {
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
    { actions: [CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS, "RETURN TO EVIDENCE"] },
    { nextPhase: "python_explanation" },
  ];
  for (const [index, override] of variants.entries()) {
    const controller = createCustodyLedgerTransferInteraction(fixture());
    const before = controller.getState();
    const rejected = controller.dispatch(intent({ eventToken: `invalid-${index}`, ...override }));
    assert.equal(rejected.status, "rejected");
    assert.deepEqual(rejected.state, before);
    assert.equal(controller.dispatch(intent({ eventToken: `valid-${index}` })).status,
      "transfer_evidence_complete");
  }
});

test("returns stay separate and write-free from blank, feedback, and complete groups", () => {
  for (const terminal of ["blank", "feedback", "complete"]) {
    const options = fixture();
    const observationBytes = JSON.stringify(options.freshPracticeState.observationEvidence);
    const predecessorBytes = JSON.stringify(options.freshPracticeState.predecessor);
    const controller = createCustodyLedgerTransferInteraction(options);
    if (terminal === "feedback") controller.dispatch(intent({ fieldOwner: "wrong" }));
    if (terminal === "complete") controller.dispatch(intent());
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

test("exact protected restore is replay-free while contaminated restore sanitizes to blank", () => {
  for (const terminal of ["feedback", "complete", "retry"]) {
    const options = fixture();
    const first = createCustodyLedgerTransferInteraction(options);
    if (terminal === "feedback") first.dispatch(intent({ fieldOwner: "wrong" }));
    if (terminal === "complete") first.dispatch(intent());
    if (terminal === "retry") {
      first.dispatch(intent({ fieldOwner: "wrong" }));
      first.retryBlank();
    }
    const exact = first.getState();
    const restored = createCustodyLedgerTransferInteraction({ ...options, restoredState: exact }).getState();
    assert.deepEqual(restored, exact);
    assertNoLaterState(restored);

    for (const contaminated of [
      { ...exact, privateNotes: "PRIVATE" },
      { ...exact, successor: "RP-003" },
      { ...exact, version: "stale" },
      { ...exact, phase: "python_explanation" },
    ]) {
      const safe = createCustodyLedgerTransferInteraction({
        ...options,
        restoredState: contaminated,
      }).getState();
      assert.equal(safe.phase, "FT-00");
      assert.equal(safe.transferEvidence, undefined);
      assert.doesNotMatch(JSON.stringify(safe), /PRIVATE|RP-003|python_explanation/i);
    }
  }
});

test("forged or incomplete entry cannot authorize the protected transfer seam", () => {
  const options = fixture();
  const invalid = [
    {},
    { ...options, freshPracticeState: { ...options.freshPracticeState, phase: "FT-00" } },
    { ...options, freshPracticeState: { ...options.freshPracticeState, privateNotes: "PRIVATE" } },
    { ...options, freshPracticeState: { ...options.freshPracticeState, successor: "RP-003" } },
    { ...options, primaryResult: {
      ...options.primaryResult,
      currentAttemptChecks: { ...options.primaryResult.currentAttemptChecks, exact_keys_only: false },
    } },
    { ...options, learningState: { ...options.learningState, phase: "python_primary_result" } },
  ];
  for (const [index, value] of invalid.entries()) {
    assert.throws(
      () => createCustodyLedgerTransferInteraction(value),
      /exact canonical protected fresh-practice boundary/i,
      `invalid fixture ${index}`,
    );
  }
});

test("accessibility metadata, campaign isolation, and bounded normal integration remain exact", async () => {
  assert.equal(custodyLedgerTransferInteractionAccessibility.oneActiveGroup, true);
  assert.equal(custodyLedgerTransferInteractionAccessibility.minActionCssPx, 44);
  assert.equal(custodyLedgerTransferInteractionAccessibility.ownerHeadingInTabOrder, false);
  assert.equal(custodyLedgerTransferInteractionAccessibility.errorsFieldAssociated, true);
  assert.equal(custodyLedgerTransferInteractionAccessibility.forcedColorsEquivalent, true);
  assert.equal(custodyLedgerTransferInteractionAccessibility.reducedMotionDirectReplacement, true);
  assert.equal(custodyLedgerTransferInteractionAccessibility.horizontalPageEscape, false);

  const campaign = { route: "city_threshold", observations: 5, completion: false };
  const tour = { mode: "demo_tour", cursor: "rp002", noCredit: true };
  const campaignBytes = JSON.stringify(campaign);
  const tourBytes = JSON.stringify(tour);
  createCustodyLedgerTransferInteraction(fixture()).dispatch(intent());
  assert.equal(JSON.stringify(campaign), campaignBytes);
  assert.equal(JSON.stringify(tour), tourBytes);

  const [{ readFile }, { fileURLToPath }] = await Promise.all([
    import("node:fs/promises"),
    import("node:url"),
  ]);
  const [app, main, arrival, normalRoute, interaction] = await Promise.all([
    "../src/App.jsx",
    "../src/main.jsx",
    "../src/CivicRecordArrival.jsx",
    "../src/CustodyLedgerNormalRoute.js",
    "../src/CustodyLedgerTransferInteraction.js",
  ].map((relative) => readFile(fileURLToPath(new URL(relative, import.meta.url)), "utf8")));
  assert.match(app, /createCustodyLedgerNormalTransferInteraction|CUSTODY_LEDGER_TRANSFER_INTERACTION_VERSION/);
  assert.match(arrival, /FT-00|FT-20F|FT-20C/);
  assert.match(normalRoute, /createCustodyLedgerTransferInteraction/);
  assert.doesNotMatch(main, /CustodyLedgerTransferInteraction|rp002\.transfer-interaction\.v1/);
  assert.doesNotMatch(interaction, /localStorage|sessionStorage|fetch\(|XMLHttpRequest|WebSocket|document\.|window\.|navigator\./);
});
