import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  anchorPacketReference,
  commitCityThresholdAnchor,
  createCityThresholdSave,
  cum01Forms,
  evaluateAnchorExplanation,
  evaluateAnchorPacketSource,
  evaluateCum01Form,
  evaluateSafetyExplanation,
  withAnchorExplanation,
  withAnchorProbeResult,
  withCum01Result,
  withSafetyExplanation,
} from "../src/cityThresholdExercise.js";
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
  CUSTODY_LEDGER_RAI_CONCLUSION,
  advanceCustodyLedgerPrerequisite,
  createCustodyLedgerFinalizedObservationFixtures,
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
  CUSTODY_LEDGER_SUBMIT_RAI_EXPLANATION,
  createCustodyLedgerRAIExplanationConvergence,
} from "../src/CustodyLedgerRAIExplanationConvergence.js";
import {
  CUSTODY_LEDGER_DISMISS_RAI_CONCLUSION,
  CUSTODY_LEDGER_RAI_CONCLUSION_REVIEW_VERSION,
  CUSTODY_LEDGER_REVIEW_BOUNDED_COMPARISON,
  createCustodyLedgerRAIConclusionReview,
  custodyLedgerRAIConclusionReviewAccessibility,
  custodyLedgerRAIConclusionReviewModalities,
} from "../src/CustodyLedgerRAIConclusionReview.js";
import {
  CUSTODY_LEDGER_CANCEL_PREPARE_SAVE,
  CUSTODY_LEDGER_PREPARE_SAVE,
  CUSTODY_LEDGER_RAI_PREPARE_SAVE_VERSION,
  createCustodyLedgerRAIPrepareSaveConfirmation,
  custodyLedgerRAIPrepareSaveModalities,
} from "../src/CustodyLedgerRAIPrepareSaveConfirmation.js";
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

const routePredecessor = Object.freeze({
  verificationStatus: "verified",
  cityThresholdAnchorRecorded: true,
  civicDistrictRouteAvailable: true,
});

const transferAnswers = Object.freeze({
  T01: Object.freeze({
    principle: "transparency",
    mitigation: "preserve_provenance_missingness_and_limits",
    owner: "human_evidence_reviewer",
  }),
  T02: Object.freeze({
    principle: "privacy_and_security",
    mitigation: "do_not_open_or_retain_unneeded_private_data",
    owner: "human_privacy_reviewer",
  }),
  T03: Object.freeze({
    principle: "accountability",
    mitigation: "assign_review_audit_and_correction_responsibility",
    owner: "human_decision_owner",
  }),
});

function completedPredecessor() {
  const answers = (form) => Object.fromEntries(cum01Forms[form].map((item) => [
    item.id, { decision: item.decision, reason: item.reason },
  ]));
  let save = createCityThresholdSave();
  save = withAnchorProbeResult(save, evaluateAnchorPacketSource(anchorPacketReference));
  save = withAnchorExplanation(save, evaluateAnchorExplanation({
    list_role: "ordered observation collection",
    dictionary_role: "named nested state",
    json_role: "string interchange requires parsing and serialization",
  }));
  save = withCum01Result(save, evaluateCum01Form("primary", answers("primary")));
  save = withCum01Result(save, evaluateCum01Form("transfer", answers("transfer")));
  save = withSafetyExplanation(save, evaluateSafetyExplanation({
    valid_output_boundary: "valid output is not authority to act",
    exam_claim_boundary: "internal readiness is not an exam guarantee",
    external_action_boundary: "external action needs separate scope authority and privacy review",
  }));
  return commitCityThresholdAnchor(save);
}

function completedPrerequisites() {
  const checkCorrectness = {
    primary: Object.fromEntries(structuredPacketChecks.map((id) => [id, true])),
    transfer: Object.fromEntries(structuredPacketChecks.map((id) => [id, true])),
    explanation: Object.fromEntries(structuredPacketExplanationDimensions.map((id) => [id, true])),
  };
  const dimensionCorrectness = Object.fromEntries([
    ...responsibleAIPrimaryScenarios,
    ...responsibleAITransferScenarios,
    { id: "closed_note_explanation" },
  ].map(({ id }) => [
    id,
    Object.fromEntries(responsibleAIDimensions.map((dimension) => [dimension, true])),
  ]));
  return {
    structuredPacketEvidence: {
      exerciseId: structuredPacketExercise.exercise_id,
      checkCorrectness,
      masteryStatus: "mastered",
    },
    responsibleAIEvidence: {
      exerciseId: responsibleAIExercise.exercise_id,
      dimensionCorrectness,
      masteryStatus: "mastered",
    },
  };
}

function acceptedConclusionFixture() {
  const predecessorValue = completedPredecessor();
  const prerequisiteEvidence = completedPrerequisites();
  const scaffold = createCustodyLedgerScaffoldFromVerifiedRouteBoundary(routePredecessor);
  const learningState = advanceCustodyLedgerPrerequisite(scaffold, prerequisiteEvidence);
  const boards = ["SC-03-10", "SC-03-10", "SC-03-10", "SC-03-20", "SC-03-20"];
  const observationEvidence = custodyLedgerObservationIds.map((observationId, index) => ({
    packetId: "RP-002",
    observationId,
    boardId: boards[index],
    finalizationStatus: "finalized",
    provenance: CUSTODY_LEDGER_OBSERVATION_ACTION,
  }));
  const boundary = {
    checkpoint: "sc03_python_primary_blank",
    boardId: "SC-03-30",
    observationEvidence,
    predecessor: { ...routePredecessor },
    learningState,
  };
  const primaryResult = createCustodyLedgerPrimaryInteraction({ boundary }).dispatch({
    packetId: "RP-002",
    version: CUSTODY_LEDGER_PRIMARY_INTERACTION_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS,
    activationKind: "pointer",
    eventToken: "conclusion-review-primary",
    classification: "unknown",
    fieldOwner: "human_expedition",
  }).state;
  const freshPracticeState = createCustodyLedgerPrimaryResultDismissal({
    primaryResult,
    learningState,
  }).dispatch({
    packetId: "RP-002",
    version: CUSTODY_LEDGER_PRIMARY_RESULT_DISMISSAL_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CUSTODY_LEDGER_CLEAR_RESULT_ACTION,
    activationKind: "pointer",
    eventToken: "conclusion-review-fresh",
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
    eventToken: "conclusion-review-python-transfer",
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
    eventToken: "conclusion-review-python-entry",
  }).state;
  const baseOptions = {
    primaryResult,
    learningState,
    freshPracticeState,
    transferCompleteState,
    explanationEntryState,
  };
  const pythonExplanation = createCustodyLedgerExplanationSubmission(baseOptions);
  for (const dimension of custodyLedgerExplanationDimensions) {
    pythonExplanation.updateResponse({ dimension, value: custodyLedgerExplanationAnswers[dimension] });
  }
  const explanationCompleteState = pythonExplanation.dispatch({
    packetId: "RP-002",
    version: CUSTODY_LEDGER_EXPLANATION_SUBMISSION_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CUSTODY_LEDGER_SUBMIT_PYTHON_EXPLANATION,
    activationKind: "pointer",
    eventToken: "conclusion-review-python-complete",
  }).state;
  const raiPrimary = createCustodyLedgerRAIPrimaryConvergence({
    ...baseOptions,
    explanationCompleteState,
  });
  for (const scenario of responsibleAIPrimaryScenarios.filter(({ id }) => (
    ["P01", "P02", "P03"].includes(id)
  ))) {
    for (const dimension of custodyLedgerRAIDimensions) {
      raiPrimary.updateResponse({ caseId: scenario.id, dimension, value: scenario[dimension] });
    }
    raiPrimary.dispatch({
      packetId: "RP-002",
      version: CUSTODY_LEDGER_RAI_PRIMARY_CONVERGENCE_VERSION,
      mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER",
      action: CUSTODY_LEDGER_SUBMIT_RAI_CASE,
      activationKind: "pointer",
      eventToken: `conclusion-review-primary-${scenario.id}`,
    });
  }
  const acceptedBlankTransferState = raiPrimary.getState();
  const raiTransfer = createCustodyLedgerRAITransferConvergence({
    ...baseOptions,
    explanationCompleteState,
    acceptedBlankTransferState,
  });
  for (const caseId of ["T01", "T02", "T03"]) {
    for (const dimension of custodyLedgerRAIDimensions) {
      raiTransfer.updateResponse({ caseId, dimension, value: transferAnswers[caseId][dimension] });
    }
    raiTransfer.dispatch({
      packetId: "RP-002",
      version: CUSTODY_LEDGER_RAI_TRANSFER_CONVERGENCE_VERSION,
      mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER",
      action: CUSTODY_LEDGER_SUBMIT_RAI_TRANSFER_CASE,
      activationKind: "pointer",
      eventToken: `conclusion-review-transfer-${caseId}`,
    });
  }
  const acceptedBlankExplanationState = raiTransfer.getState();
  const raiExplanation = createCustodyLedgerRAIExplanationConvergence({
    ...baseOptions,
    explanationCompleteState,
    acceptedBlankTransferState,
    acceptedBlankExplanationState,
  });
  for (const dimension of custodyLedgerRAIExplanationDimensions) {
    raiExplanation.updateResponse({ dimension, value: custodyLedgerRAIExplanationAnswers[dimension] });
  }
  const acceptedRAIConclusionState = raiExplanation.dispatch({
    packetId: "RP-002",
    version: CUSTODY_LEDGER_RAI_EXPLANATION_CONVERGENCE_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CUSTODY_LEDGER_SUBMIT_RAI_EXPLANATION,
    activationKind: "pointer",
    eventToken: "conclusion-review-rai-complete",
  }).state;
  return {
    ...baseOptions,
    explanationCompleteState,
    acceptedBlankTransferState,
    acceptedBlankExplanationState,
    acceptedRAIConclusionState,
    eligibilityDependencies: {
      predecessorValue,
      prerequisiteEvidence,
      observationFixtures: createCustodyLedgerFinalizedObservationFixtures(),
    },
  };
}

function intent(action, eventToken, overrides = {}) {
  return {
    packetId: "RP-002",
    version: CUSTODY_LEDGER_RAI_CONCLUSION_REVIEW_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action,
    activationKind: "pointer",
    eventToken,
    ...overrides,
  };
}

function assertZeroEffect(state) {
  for (const key of [
    "authorityGranted",
    "accessGranted",
    "externalActionEnabled",
    "storyObservationGranted",
    "savePerformed",
    "examCreditGranted",
    "reviewCreditGranted",
    "dismissalCreditGranted",
  ]) assert.equal(state[key], false, key);
  assert.equal(state.cityStateDelta, null);
  assert.equal(state.campaignCommitEnabled, false);
  assert.equal(state.successor, null);
  assert.equal(state.routable, false);
  assert.equal(state.browserStorageUsed, false);
}

test("exact accepted RAIEC-20C remains stable as the sole RG-00 Pilot group", () => {
  const state = createCustodyLedgerRAIConclusionReview(acceptedConclusionFixture()).getState();
  assert.equal(state.phase, "RG-00");
  assert.equal(state.activeGroup, "rai_conclusion");
  assert.equal(state.authorityPhase, "RAIEC-20C");
  assert.equal(state.owner, "PILOT // FLIGHT RECORDER");
  assert.equal(state.conclusion.text, CUSTODY_LEDGER_RAI_CONCLUSION);
  assert.equal(state.conclusionCredit, "zero");
  assert.equal(state.dismissalExposed, true);
  assert.equal(state.laterActionExposed, false);
  assert.deepEqual(state.availableActions, [
    CUSTODY_LEDGER_DISMISS_RAI_CONCLUSION,
    "RETURN TO EVIDENCE",
    "RETURN TO CITY THRESHOLD",
  ]);
  assert.deepEqual(state.accessibility, custodyLedgerRAIConclusionReviewAccessibility);
  assertZeroEffect(state);
});

test("all seven modalities produce one identical zero-effect eligibility replacement and one hit", () => {
  const snapshots = [];
  for (const [index, activationKind] of custodyLedgerRAIConclusionReviewModalities.entries()) {
    const controller = createCustodyLedgerRAIConclusionReview(acceptedConclusionFixture());
    const action = intent(
      CUSTODY_LEDGER_DISMISS_RAI_CONCLUSION,
      `conclusion-review-modality-${index}`,
      { activationKind },
    );
    const result = controller.dispatch(action);
    assert.equal(result.status, "strict_review_eligible");
    assert.equal(result.transitionPhase, "RG-10");
    assert.equal(result.replacement, "atomic");
    assert.equal(result.state.phase, "RG-20");
    assert.equal(result.state.activeGroup, "save_eligibility");
    assert.equal(result.state.owner, "SYSTEM // EXPEDITION SESSION");
    assert.deepEqual(result.state.eligibilityDerivedOnly, {
      pythonChain: "PY-009:finalized",
      responsibleAIChain: "RP002-RAI-01:finalized",
      observations: custodyLedgerObservationIds,
      conjunction: "all_required",
    });
    assert.deepEqual(result.state.availableActions, [
      CUSTODY_LEDGER_REVIEW_BOUNDED_COMPARISON,
      "RETURN TO EVIDENCE",
      "RETURN TO CITY THRESHOLD",
    ]);
    assert.equal(controller.dispatch(action).status, "duplicate_suppressed");
    assertZeroEffect(result.state);
    snapshots.push(JSON.stringify(result.state));
  }
  assert.equal(new Set(snapshots).size, 1);
});

test("malformed, stale, automatic, wrong-owner, Tour, private, combined, and later intents fail without spending a valid token", () => {
  const controller = createCustodyLedgerRAIConclusionReview(acceptedConclusionFixture());
  const before = controller.getState();
  const token = "valid-after-invalid-conclusion-review";
  const invalid = [
    intent(CUSTODY_LEDGER_DISMISS_RAI_CONCLUSION, token, { activationKind: "automatic" }),
    intent(CUSTODY_LEDGER_DISMISS_RAI_CONCLUSION, token, { activationKind: "focus" }),
    intent(CUSTODY_LEDGER_DISMISS_RAI_CONCLUSION, token, { version: "stale" }),
    intent(CUSTODY_LEDGER_DISMISS_RAI_CONCLUSION, token, { owner: "SYSTEM // EXPEDITION SESSION" }),
    intent(CUSTODY_LEDGER_DISMISS_RAI_CONCLUSION, token, { mode: "demo_tour" }),
    intent(CUSTODY_LEDGER_REVIEW_BOUNDED_COMPARISON, token),
    intent("DISMISS + RETURN", token),
    { ...intent(CUSTODY_LEDGER_DISMISS_RAI_CONCLUSION, token), privateResponse: "PRIVATE" },
    { ...intent(CUSTODY_LEDGER_DISMISS_RAI_CONCLUSION, token), nextPhase: "comparison_complete" },
  ];
  for (const value of invalid) {
    const rejected = controller.dispatch(value);
    assert.equal(rejected.status, "rejected");
    assert.deepEqual(rejected.state, before);
  }
  assert.equal(
    controller.dispatch(intent(CUSTODY_LEDGER_DISMISS_RAI_CONCLUSION, token)).status,
    "strict_review_eligible",
  );
});

test("strict conjunction rejects every missing, stale, or review-required observation in deterministic order", () => {
  for (const [index, observationId] of custodyLedgerObservationIds.entries()) {
    const options = acceptedConclusionFixture();
    const fixtures = options.eligibilityDependencies.observationFixtures.map((fixture, fixtureIndex) => (
      fixtureIndex === index
        ? {
          ...fixture,
          finalizationStatus: index % 2 ? "review_required" : "stale",
          privateNotes: `PRIVATE-OBS-${index}`,
        }
        : fixture
    ));
    const controller = createCustodyLedgerRAIConclusionReview({
      ...options,
      eligibilityDependencies: {
        ...options.eligibilityDependencies,
        observationFixtures: fixtures,
      },
    });
    const result = controller.dispatch(intent(
      CUSTODY_LEDGER_DISMISS_RAI_CONCLUSION,
      `missing-observation-${index}`,
    ));
    assert.equal(result.status, "returned_to_first_incomplete_protected_boundary");
    assert.equal(result.state.phase, "RG-U");
    assert.equal(result.state.activeGroup, `observation:${observationId}`);
    assert.equal(result.state.returnedBoundary, `observation:${observationId}`);
    assert.deepEqual(result.state.focusIntent, {
      group: `observation:${observationId}`,
      target: "owner_heading",
      then: "first_required_control",
    });
    assert.equal(result.state.privateWorkCleared, true);
    assert.equal(result.state.availableActions.length, 0);
    assert.doesNotMatch(JSON.stringify(result.state), /PRIVATE-OBS|review_required|stale/);
    assertZeroEffect(result.state);
  }
});

test("forged or partial finalized learning records cannot manufacture an accepted conclusion", () => {
  const options = acceptedConclusionFixture();
  const variants = [
    {
      ...options.acceptedRAIConclusionState,
      primaryEvidence: {
        ...options.acceptedRAIConclusionState.primaryEvidence,
        dimensionCorrectness: {},
      },
    },
    {
      ...options.acceptedRAIConclusionState,
      finalizedRAITransferEvidence: {
        ...options.acceptedRAIConclusionState.finalizedRAITransferEvidence,
        masteryStatus: "review_required",
      },
    },
    {
      ...options.acceptedRAIConclusionState,
      finalizedRAIExplanationEvidence: {
        ...options.acceptedRAIConclusionState.finalizedRAIExplanationEvidence,
        dimensionCorrectness: {
          ...options.acceptedRAIConclusionState.finalizedRAIExplanationEvidence.dimensionCorrectness,
          [custodyLedgerRAIExplanationDimensions[1]]: false,
        },
      },
    },
    {
      ...options.acceptedRAIConclusionState,
      observationEvidence: options.acceptedRAIConclusionState.observationEvidence.slice(0, 4),
    },
  ];
  for (const acceptedRAIConclusionState of variants) {
    assert.throws(
      () => createCustodyLedgerRAIConclusionReview({ ...options, acceptedRAIConclusionState }),
      /exact accepted protected RAI conclusion boundary/,
    );
  }
});

test("eligible review action atomically exposes only existing bounded summary material and stops", () => {
  const controller = createCustodyLedgerRAIConclusionReview(acceptedConclusionFixture());
  controller.dispatch(intent(CUSTODY_LEDGER_DISMISS_RAI_CONCLUSION, "open-review-eligibility"));
  const result = controller.dispatch(intent(
    CUSTODY_LEDGER_REVIEW_BOUNDED_COMPARISON,
    "open-bounded-review",
    { activationKind: "keyboard_enter" },
  ));
  assert.equal(result.status, "bounded_review_visible");
  assert.equal(result.replacement, "atomic");
  assert.equal(result.state.phase, "RG-30");
  assert.equal(result.state.activeGroup, "bounded_review");
  assert.equal(result.state.owner, "PILOT // FLIGHT RECORDER");
  assert.deepEqual(result.state.boundedSummary, {
    comparison: "Human expedition classification remains provisional.",
    surveyMarker: "Next survey direction is an expedition marker, not city permission.",
  });
  assert.equal(result.state.finalizedSummaryOnly, true);
  assert.equal(result.state.reviewCredit, "zero");
  assert.equal(result.state.hardStop, true);
  assert.deepEqual(result.state.availableActions, [
    "RETURN TO EVIDENCE",
    "RETURN TO CITY THRESHOLD",
  ]);
  for (const key of [
    "commitIntent", "progression", "saveConfirmation", "retrySave", "completion", "credits", "route",
  ]) assert.equal(Object.hasOwn(result.state, key), false, key);
  assertZeroEffect(result.state);
});

test("RG-00, RG-20, and RG-30 resume exactly; contamination clears and reconstructs strict eligibility", () => {
  const options = acceptedConclusionFixture();
  const initial = createCustodyLedgerRAIConclusionReview(options);
  const conclusion = initial.getState();
  assert.deepEqual(
    createCustodyLedgerRAIConclusionReview({ ...options, restoredState: conclusion }).getState(),
    conclusion,
  );
  const eligibility = initial.dispatch(intent(
    CUSTODY_LEDGER_DISMISS_RAI_CONCLUSION,
    "resume-eligibility",
  )).state;
  assert.deepEqual(
    createCustodyLedgerRAIConclusionReview({ ...options, restoredState: eligibility }).getState(),
    eligibility,
  );
  const review = initial.dispatch(intent(
    CUSTODY_LEDGER_REVIEW_BOUNDED_COMPARISON,
    "resume-review",
  )).state;
  assert.deepEqual(
    createCustodyLedgerRAIConclusionReview({ ...options, restoredState: review }).getState(),
    review,
  );
  for (const contaminated of [
    { ...conclusion, privateResponse: "PRIVATE" },
    { ...eligibility, reviewActionExposed: false },
    { ...review, boundedSummary: { comparison: "forged" } },
    { ...review, successor: "RP-003" },
    { phase: "save_confirmation", partial: true },
  ]) {
    const safe = createCustodyLedgerRAIConclusionReview({
      ...options,
      restoredState: contaminated,
    }).getState();
    assert.equal(safe.phase, "RG-20");
    assert.equal(safe.owner, "SYSTEM // EXPEDITION SESSION");
    assert.doesNotMatch(JSON.stringify(safe), /PRIVATE|forged|RP-003|save_confirmation|partial/i);
  }
});

test("separate returns, sanitation, campaign, Tour, evidence, continuation, and world bytes remain stable", () => {
  const options = acceptedConclusionFixture();
  const campaign = {
    checkpoint: "accepted",
    continuation: "continuation",
    cityStateDelta: null,
    world: { clock: 17, cameraClock: 8, cropClock: 4, effectClock: 2 },
  };
  const tour = { mode: "demo_tour", cursor: "rp002", noCredit: true };
  const campaignBytes = JSON.stringify(campaign);
  const tourBytes = JSON.stringify(tour);
  const optionBytes = JSON.stringify(options);
  const controller = createCustodyLedgerRAIConclusionReview(options);
  const eligibility = controller.dispatch(intent(
    CUSTODY_LEDGER_DISMISS_RAI_CONCLUSION,
    "bytes-eligibility",
  )).state;
  const review = controller.dispatch(intent(
    CUSTODY_LEDGER_REVIEW_BOUNDED_COMPARISON,
    "bytes-review",
  )).state;
  const sanitized = controller.sanitizeBoundary(review).state;
  assert.deepEqual(sanitized, review);
  assert.equal(controller.returnToEvidence().writePerformed, false);
  assert.equal(controller.returnToCityThreshold().writePerformed, false);
  assert.equal(JSON.stringify(options), optionBytes);
  assert.equal(JSON.stringify(campaign), campaignBytes);
  assert.equal(JSON.stringify(tour), tourBytes);
  assert.equal(review.continuation, "continuation");
  assert.equal(review.cityStateDelta, null);
  assert.equal(review.observationEvidence.length, 5);
  assert.equal(JSON.stringify(review.primaryEvidence), JSON.stringify(eligibility.primaryEvidence));
  assert.equal(
    JSON.stringify(review.finalizedRAIExplanationEvidence),
    JSON.stringify(eligibility.finalizedRAIExplanationEvidence),
  );
  assertZeroEffect(review);
});

test("controller remains pure while the normal route composes it without direct main entry", () => {
  const source = readFileSync(
    new URL("../src/CustodyLedgerRAIConclusionReview.js", import.meta.url),
    "utf8",
  );
  for (const relative of [
    "../src/App.jsx",
    "../src/CivicRecordArrival.jsx",
    "../src/CustodyLedgerNormalRoute.js",
  ]) assert.equal(
    readFileSync(new URL(relative, import.meta.url), "utf8")
      .includes("CustodyLedgerRAIConclusionReview"),
    true,
    relative,
  );
  assert.equal(
    readFileSync(new URL("../src/main.jsx", import.meta.url), "utf8")
      .includes("CustodyLedgerRAIConclusionReview"),
    false,
  );
  for (const forbidden of [
    "localStorage",
    "sessionStorage",
    "createCustodyLedgerPersistenceAdapter",
    "prepareCustodyLedgerSave",
    "commitCustodyLedgerBoundedComparison",
    "retryCustodyLedgerSave",
    "restoreCustodyLedgerBoundedComparison",
    "fetch(",
    "XMLHttpRequest",
    "document.",
    "window.",
    "RP-003",
    "RP-013",
  ]) assert.equal(source.includes(forbidden), false, forbidden);
  assert.equal(source.includes("dismissCustodyLedgerRAIConclusion"), true);
  assert.equal(source.includes("beginCustodyLedgerSaveEligibility"), true);
  assert.equal(source.includes("deriveCustodyLedgerSaveEligibility"), true);
  assert.equal(source.includes("successor: null"), true);
  assert.equal(source.includes("cityStateDelta: null"), true);
});

function acceptedPrepareSaveFixture() {
  const options = acceptedConclusionFixture();
  const reviewController = createCustodyLedgerRAIConclusionReview(options);
  reviewController.dispatch(intent(CUSTODY_LEDGER_DISMISS_RAI_CONCLUSION, "prepare-fixture-dismiss"));
  const acceptedReviewState = reviewController.dispatch(intent(
    CUSTODY_LEDGER_REVIEW_BOUNDED_COMPARISON,
    "prepare-fixture-review",
  )).state;
  return { ...options, acceptedReviewState };
}

function prepareIntent(action, eventToken, overrides = {}) {
  return {
    packetId: "RP-002",
    version: CUSTODY_LEDGER_RAI_PREPARE_SAVE_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action,
    activationKind: "pointer",
    eventToken,
    ...overrides,
  };
}

test("protected prepare-save controller atomically mounts only the existing local confirmation for every modality", () => {
  for (const activationKind of custodyLedgerRAIPrepareSaveModalities) {
    const controller = createCustodyLedgerRAIPrepareSaveConfirmation(acceptedPrepareSaveFixture());
    const review = controller.getState();
    assert.equal(review.phase, "RG-30");
    assert.deepEqual(review.availableActions, [
      CUSTODY_LEDGER_PREPARE_SAVE, "RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD",
    ]);
    const result = controller.dispatch(prepareIntent(
      CUSTODY_LEDGER_PREPARE_SAVE,
      `prepare-${activationKind}`,
      { activationKind },
    ));
    assert.equal(result.status, "local_confirmation_visible");
    assert.equal(result.replacement, "atomic");
    assert.equal(result.state.phase, "save_confirmation");
    assert.equal(result.state.activeGroup, "save_confirmation");
    assert.equal(result.state.owner, "PILOT // FLIGHT RECORDER");
    assert.equal(result.state.confirmationText,
      "Save only the bounded expedition comparison and survey marker. This grants no access or authority.");
    assert.equal(result.state.commitIntent, "SAVE BOUNDED COMPARISON");
    assert.equal(result.state.commitIntentVisible, true);
    assert.equal(result.state.commitIntentDispatchEnabled, false);
    assert.deepEqual(result.state.focusIntent, {
      group: "save_confirmation", target: "owner_heading", contained: true,
    });
    assert.equal(controller.holdConfirmation().status, "confirmation_held");
    assertZeroEffect(result.state);
  }
});

test("cancel and Escape are write-free, restore exact review focus, and permit a fresh prepare", () => {
  for (const activationKind of ["pointer", "keyboard_escape"]) {
    const controller = createCustodyLedgerRAIPrepareSaveConfirmation(acceptedPrepareSaveFixture());
    controller.dispatch(prepareIntent(CUSTODY_LEDGER_PREPARE_SAVE, `prepare-before-${activationKind}`));
    const cancelled = controller.dispatch(prepareIntent(
      CUSTODY_LEDGER_CANCEL_PREPARE_SAVE,
      `cancel-${activationKind}`,
      { activationKind },
    ));
    assert.equal(cancelled.status, "confirmation_cancelled_write_free");
    assert.equal(cancelled.state.phase, "RG-30");
    assert.deepEqual(cancelled.state.focusIntent, { group: "bounded_review", target: "prepare_save" });
    assert.equal(cancelled.state.savePerformed, false);
    assertZeroEffect(cancelled.state);
    assert.equal(controller.dispatch(prepareIntent(
      CUSTODY_LEDGER_PREPARE_SAVE,
      `prepare-after-${activationKind}`,
    )).status, "local_confirmation_visible");
  }
});

test("invalid, private, duplicate, commit, Tour, and contaminated inputs cannot spend a future valid prepare", () => {
  const controller = createCustodyLedgerRAIPrepareSaveConfirmation(acceptedPrepareSaveFixture());
  const token = "valid-after-prepare-rejections";
  for (const invalid of [
    prepareIntent(CUSTODY_LEDGER_PREPARE_SAVE, token, { activationKind: "automatic" }),
    prepareIntent(CUSTODY_LEDGER_PREPARE_SAVE, token, { mode: "demo_tour" }),
    prepareIntent(CUSTODY_LEDGER_PREPARE_SAVE, token, { version: "stale" }),
    prepareIntent(CUSTODY_LEDGER_PREPARE_SAVE, token, { owner: "SYSTEM // EXPEDITION SESSION" }),
    { ...prepareIntent(CUSTODY_LEDGER_PREPARE_SAVE, token), privateResponse: "PRIVATE" },
    prepareIntent("PREPARE + RETURN", token),
  ]) {
    assert.match(controller.dispatch(invalid).status, /rejected|sanitized/);
    assert.equal(controller.getState().phase, "RG-30");
  }
  assert.equal(controller.dispatch(prepareIntent(CUSTODY_LEDGER_PREPARE_SAVE, token)).status,
    "local_confirmation_visible");
  const beforeCommit = controller.getState();
  const closed = controller.dispatch(prepareIntent("SAVE BOUNDED COMPARISON", "closed-commit"));
  assert.equal(closed.status, "rejected");
  assert.equal(closed.reason, "save_bounded_comparison_closed");
  assert.deepEqual(closed.state, beforeCommit);
  assert.equal(controller.dispatch(prepareIntent(CUSTODY_LEDGER_PREPARE_SAVE, token)).status,
    "rejected");
  const restored = controller.sanitizeBoundary({ ...beforeCommit, privateResponse: "PRIVATE" }).state;
  assert.equal(restored.phase, "RG-30");
  assert.doesNotMatch(JSON.stringify(restored), /PRIVATE/);
  assert.equal(controller.dispatch(prepareIntent(CUSTODY_LEDGER_PREPARE_SAVE, "fresh-after-sanitize")).status,
    "local_confirmation_visible");
});

test("partial or review-required prerequisites sanitize to the existing first-incomplete boundary before prepare", () => {
  for (const [index, observationId] of custodyLedgerObservationIds.entries()) {
    const options = acceptedPrepareSaveFixture();
    options.eligibilityDependencies.observationFixtures[index] = {
      ...options.eligibilityDependencies.observationFixtures[index],
      finalizationStatus: index % 2 ? "review_required" : "stale",
      privateNotes: `PRIVATE-${observationId}`,
    };
    const controller = createCustodyLedgerRAIPrepareSaveConfirmation(options);
    const state = controller.getState();
    assert.equal(state.phase, "RG-U");
    assert.equal(state.returnedBoundary, `observation:${observationId}`);
    assert.doesNotMatch(JSON.stringify(state), /PRIVATE|review_required|stale/);
    assert.equal(controller.dispatch(prepareIntent(
      CUSTODY_LEDGER_PREPARE_SAVE,
      `partial-prepare-${index}`,
    )).status, "sanitized_to_first_incomplete_protected_boundary");
  }
});

test("exact review and confirmation resume without replay while the prepare controller remains non-routable and pure", () => {
  const options = acceptedPrepareSaveFixture();
  const initial = createCustodyLedgerRAIPrepareSaveConfirmation(options);
  const review = initial.getState();
  assert.deepEqual(createCustodyLedgerRAIPrepareSaveConfirmation({ ...options, restoredState: review }).getState(), review);
  const confirmation = initial.dispatch(prepareIntent(CUSTODY_LEDGER_PREPARE_SAVE, "resume-confirmation")).state;
  assert.deepEqual(
    createCustodyLedgerRAIPrepareSaveConfirmation({ ...options, restoredState: confirmation }).getState(),
    confirmation,
  );
  const source = readFileSync(
    new URL("../src/CustodyLedgerRAIPrepareSaveConfirmation.js", import.meta.url),
    "utf8",
  );
  for (const forbidden of [
    "localStorage", "sessionStorage", "createCustodyLedgerPersistenceAdapter",
    "commitCustodyLedgerBoundedComparison", "retryCustodyLedgerSave",
    "restoreCustodyLedgerBoundedComparison", "fetch(", "XMLHttpRequest", "document.", "window.",
    "RP-003", "RP-013",
  ]) assert.equal(source.includes(forbidden), false, forbidden);
  for (const relative of ["../src/App.jsx", "../src/main.jsx", "../src/CustodyLedgerNormalRoute.js"]) {
    assert.equal(readFileSync(new URL(relative, import.meta.url), "utf8")
      .includes("CustodyLedgerRAIPrepareSaveConfirmation"), false, relative);
  }
  assert.equal(source.includes("prepareCustodyLedgerSave"), true);
  assert.equal(source.includes("cancelCustodyLedgerSave"), true);
  assert.equal(confirmation.campaignCommitEnabled, false);
  assert.equal(confirmation.cityStateDelta, null);
  assert.equal(confirmation.successor, null);
});
