import assert from "node:assert/strict";
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
  acknowledgeCustodyLedgerRAIExplanationFeedback,
  acknowledgeCustodyLedgerRAIFeedback,
  acknowledgeCustodyLedgerRAITransferFeedback,
  advanceCustodyLedgerPrerequisite,
  clearCustodyLedgerWorkingState,
  createCustodyLedgerScaffold,
  custodyLedgerCausalResult,
  custodyLedgerExplanationAnswers,
  custodyLedgerExplanationDimensions,
  custodyLedgerOwnershipMessages,
  custodyLedgerPythonOwnershipMessages,
  custodyLedgerPrimaryReferenceSource,
  custodyLedgerPrimaryStarterSource,
  custodyLedgerRAIDimensions,
  custodyLedgerRAIExplanationAnswers,
  custodyLedgerRAIExplanationDimensions,
  custodyLedgerRAIGuidedCase,
  custodyLedgerRAIPrimaryScenarioIds,
  custodyLedgerRAIPrimaryScenarios,
  custodyLedgerRAIRemediationMap,
  custodyLedgerRAITransferGuidedCase,
  custodyLedgerRAITransferRemediationMap,
  custodyLedgerRAITransferScenarioIds,
  custodyLedgerRAITransferScenarios,
  custodyLedgerSourceFields,
  custodyLedgerTransferSourceFields,
  custodyLedgerTransferReferenceSource,
  dismissCustodyLedgerPrimaryResult,
  dismissCustodyLedgerPythonConclusion,
  dismissCustodyLedgerRAIConclusion,
  evaluateCustodyLedgerExplanation,
  evaluateCustodyLedgerPrimarySource,
  evaluateCustodyLedgerRAIExplanation,
  evaluateCustodyLedgerRAITransfer,
  evaluateCustodyLedgerTransferSource,
  getCustodyLedgerOwnershipMessage,
  retryCustodyLedgerPrimary,
  retryCustodyLedgerTransfer,
  resumeCustodyLedgerRAI,
  resumeCustodyLedgerPython,
  setCustodyLedgerOwnershipMessage,
  submitCustodyLedgerPrimary,
  submitCustodyLedgerExplanation,
  submitCustodyLedgerRAIGuidedPractice,
  submitCustodyLedgerRAIExplanation,
  submitCustodyLedgerRAIPrimaryScenario,
  submitCustodyLedgerRAITransferGuidedPractice,
  submitCustodyLedgerRAITransferScenario,
  submitCustodyLedgerTransfer,
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

function completedPredecessor() {
  const answers = (form) => Object.fromEntries(cum01Forms[form].map((item) => [item.id, { decision: item.decision, reason: item.reason }]));
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
    primary: Object.fromEntries(structuredPacketChecks.map((check) => [check, true])),
    transfer: Object.fromEntries(structuredPacketChecks.map((check) => [check, true])),
    explanation: Object.fromEntries(structuredPacketExplanationDimensions.map((dimension) => [dimension, true])),
  };
  const dimensionCorrectness = Object.fromEntries([
    ...responsibleAIPrimaryScenarios,
    ...responsibleAITransferScenarios,
    { id: "closed_note_explanation" },
  ].map(({ id }) => [id, Object.fromEntries(responsibleAIDimensions.map((dimension) => [dimension, true]))]));
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

function blankPrimary() {
  return advanceCustodyLedgerPrerequisite(
    createCustodyLedgerScaffold(completedPredecessor()),
    completedPrerequisites(),
  );
}

function completedPrimaryResult() {
  return submitCustodyLedgerPrimary(blankPrimary(), custodyLedgerPrimaryReferenceSource);
}

function blankTransfer() {
  return dismissCustodyLedgerPrimaryResult(completedPrimaryResult());
}

function blankExplanation() {
  return submitCustodyLedgerTransfer(blankTransfer(), custodyLedgerTransferReferenceSource);
}

function blankRAIPrimary() {
  return dismissCustodyLedgerPythonConclusion(
    submitCustodyLedgerExplanation(blankExplanation(), custodyLedgerExplanationAnswers),
  );
}

function raiAnswer(scenario, overrides = {}) {
  return Object.fromEntries(custodyLedgerRAIDimensions.map((dimension) => [
    dimension,
    overrides[dimension] ?? scenario[dimension],
  ]));
}

function submitRAIForm(state, overridesById = {}) {
  let current = state;
  for (let index = current.raiScenarioIndex; index < custodyLedgerRAIPrimaryScenarioIds.length; index += 1) {
    const scenarioId = custodyLedgerRAIPrimaryScenarioIds[index];
    const scenario = responsibleAIPrimaryScenarios.find((item) => item.id === scenarioId);
    current = submitCustodyLedgerRAIPrimaryScenario(
      current,
      scenarioId,
      raiAnswer(scenario, overridesById[scenarioId]),
    );
  }
  return current;
}

const raiTransferAnswers = Object.freeze({
  T01: Object.freeze({ principle: "transparency", mitigation: "preserve_provenance_missingness_and_limits", owner: "human_evidence_reviewer" }),
  T02: Object.freeze({ principle: "privacy_and_security", mitigation: "do_not_open_or_retain_unneeded_private_data", owner: "human_privacy_reviewer" }),
  T03: Object.freeze({ principle: "accountability", mitigation: "assign_review_audit_and_correction_responsibility", owner: "human_decision_owner" }),
});

function submitRAITransferForm(state, overridesById = {}) {
  let current = state;
  for (let index = current.raiTransferScenarioIndex; index < custodyLedgerRAITransferScenarioIds.length; index += 1) {
    const scenarioId = custodyLedgerRAITransferScenarioIds[index];
    current = submitCustodyLedgerRAITransferScenario(current, scenarioId, {
      ...raiTransferAnswers[scenarioId],
      ...overridesById[scenarioId],
    });
  }
  return current;
}

test("Custody Ledger scaffold opens only after the exact atomic predecessor", () => {
  const blocked = createCustodyLedgerScaffold({
    packetId: "RP-001",
    cityThresholdAnchorRecorded: true,
    civicDistrictRouteAvailable: true,
  });
  assert.equal(blocked.phase, "predecessor_blocked");
  assert.equal(blocked.scoringEnabled, false);

  const ready = createCustodyLedgerScaffold(completedPredecessor());
  assert.equal(ready.phase, "prerequisite_check");
  assert.equal(ready.activeMessageKey, "prerequisites_incomplete");
  assert.equal(ready.continuation, "continuation");
  assert.equal(ready.cityStateDelta, null);
});

test("locked source fields and blank expedition sockets cannot create evidence", () => {
  const scaffold = createCustodyLedgerScaffold(completedPredecessor());
  assert.deepEqual(scaffold.sourceFields, {
    condition: "outlined_gap",
    source: "exposed_surface",
    identity: null,
    access_requested: false,
  });
  assert.deepEqual(scaffold.expeditionFields, { classification: "", owner: "" });
  assert.equal(scaffold.scoringEnabled, false);
  assert.equal(scaffold.campaignCommitEnabled, false);
  assert.deepEqual(Object.keys(scaffold).sort(), [
    "activeMessageKey", "boardId", "campaignCommitEnabled", "cityStateDelta", "continuation",
    "expeditionFields", "packetId", "phase", "scoringEnabled", "sourceFields",
  ]);
});

test("only strict sanitized prerequisites open the blank PY-009 primary boundary", () => {
  const scaffold = createCustodyLedgerScaffold(completedPredecessor());
  const primary = advanceCustodyLedgerPrerequisite({
    ...scaffold,
    sourceFields: { identity: "forged", access_requested: true },
    expeditionFields: { classification: "prefilled", owner: "city" },
    campaignCommitEnabled: true,
  }, completedPrerequisites());
  assert.equal(primary.phase, "python_primary");
  assert.equal(primary.activeMessageKey, "tray_available");
  assert.equal(primary.prerequisiteStatus, "complete");
  assert.equal(primary.pythonForm, "primary");
  assert.deepEqual(primary.sourceFields, {
    condition: "outlined_gap", source: "exposed_surface", identity: null, access_requested: false,
  });
  assert.deepEqual(primary.expeditionFields, { classification: "", owner: "" });
  assert.deepEqual(Object.values(primary.pythonChecks), [false, false, false, false, false, false]);
  assert.equal(primary.scoringEnabled, true);
  assert.equal(primary.campaignCommitEnabled, false);
  assert.equal(primary.continuation, "continuation");
  assert.equal(primary.cityStateDelta, null);
  assert.equal(Object.hasOwn(primary, "structuredPacketEvidence"), false);
  assert.equal(Object.hasOwn(primary, "responsibleAIEvidence"), false);
});

test("forged mastery labels, partial dimensions, and foreign exercises cannot cross prerequisites", () => {
  const scaffold = createCustodyLedgerScaffold(completedPredecessor());
  const strict = completedPrerequisites();
  const probes = [
    {},
    {
      structuredPacketEvidence: { exerciseId: structuredPacketExercise.exercise_id, masteryStatus: "mastered" },
      responsibleAIEvidence: strict.responsibleAIEvidence,
    },
    {
      structuredPacketEvidence: strict.structuredPacketEvidence,
      responsibleAIEvidence: { exerciseId: responsibleAIExercise.exercise_id, masteryStatus: "mastered" },
    },
    {
      structuredPacketEvidence: { ...strict.structuredPacketEvidence, exerciseId: "forged" },
      responsibleAIEvidence: strict.responsibleAIEvidence,
    },
    {
      structuredPacketEvidence: strict.structuredPacketEvidence,
      responsibleAIEvidence: {
        ...strict.responsibleAIEvidence,
        dimensionCorrectness: {
          ...strict.responsibleAIEvidence.dimensionCorrectness,
          P01: { ...strict.responsibleAIEvidence.dimensionCorrectness.P01, owner: false },
        },
      },
    },
  ];
  for (const probe of probes) {
    const result = advanceCustodyLedgerPrerequisite(scaffold, probe);
    assert.equal(result.phase, "prerequisite_check");
    assert.equal(result.activeMessageKey, "prerequisites_incomplete");
    assert.equal(result.scoringEnabled, false);
    assert.equal(result.campaignCommitEnabled, false);
    assert.deepEqual(result.expeditionFields, { classification: "", owner: "" });
  }
});

test("a forged phase cannot bypass the prerequisite transition", () => {
  const result = advanceCustodyLedgerPrerequisite({
    packetId: "RP-002",
    boardId: "SC-03-30",
    phase: "python_primary",
    prerequisiteStatus: "complete",
    pythonForm: "primary",
    scoringEnabled: true,
    campaignCommitEnabled: true,
    sourceFields: { ...custodyLedgerSourceFields, identity: "forged" },
    expeditionFields: { classification: "unknown", owner: "city" },
  }, completedPrerequisites());
  assert.equal(result.phase, "predecessor_blocked");
  assert.equal(result.scoringEnabled, false);
  assert.equal(result.campaignCommitEnabled, false);
  assert.equal(result.sourceFields.identity, null);
  assert.deepEqual(result.expeditionFields, { classification: "", owner: "" });
});

test("every locked ownership node keeps a visible human-interface owner", () => {
  const expectedOwners = new Set([
    "SYSTEM // EXPEDITION STATE",
    "SYSTEM // EXPEDITION SESSION",
    "SYSTEM // LOCAL CHECKS",
    "901 TEACHER // FEEDBACK",
    "PILOT // FLIGHT RECORDER",
    "SYSTEM // DEMO TOUR",
  ]);
  assert.equal(Object.keys(custodyLedgerOwnershipMessages).length, 10);
  for (const [key, message] of Object.entries(custodyLedgerOwnershipMessages)) {
    assert.ok(expectedOwners.has(message.owner), key);
    assert.ok(message.text.length > 20, key);
    assert.doesNotMatch(message.owner, /SCENE|BUILDER|MACHINE|CITY/);
  }
  assert.equal(Object.keys(custodyLedgerPythonOwnershipMessages).length, 13);
  for (const [key, message] of Object.entries(custodyLedgerPythonOwnershipMessages)) {
    assert.ok(message.owner.length > 10, key);
    assert.ok(message.text.length > 20, key);
    assert.doesNotMatch(message.owner, /SCENE|BUILDER|MACHINE|CITY/);
  }
  assert.equal(getCustodyLedgerOwnershipMessage("tour").text, "Preview only — bounded comparison not saved.");
  assert.match(getCustodyLedgerOwnershipMessage("saved").text, /No access request or external action occurred/);
  assert.match(getCustodyLedgerOwnershipMessage("fresh_practice").text, /no source fields or result were carried forward/);
  assert.equal(
    getCustodyLedgerOwnershipMessage("python_conclusion").text,
    "I updated my record without replacing its source. Unknown identity and no access request remain separate facts.",
  );
});

test("reading feedback or cancelling stays zero-credit and clears only working sockets", () => {
  const campaign = { completed: ["meadow"], attempts: 7, civicComparisonSaved: false };
  const tourEvidence = { mode: "demo_tour", tourSceneId: "ruins", resumeBoundary: "practice" };
  const campaignBytes = JSON.stringify(campaign);
  const tourBytes = JSON.stringify(tourEvidence);
  const scaffold = {
    ...createCustodyLedgerScaffold(completedPredecessor()),
    expeditionFields: { classification: "unknown", owner: "human_expedition" },
    masteryStatus: "forged",
  };
  const feedback = setCustodyLedgerOwnershipMessage(scaffold, "identity_unknown");
  assert.equal(feedback.activeMessageKey, "identity_unknown");
  assert.equal(feedback.scoringEnabled, false);
  assert.equal(feedback.campaignCommitEnabled, false);
  assert.equal(feedback.cityStateDelta, null);
  assert.equal(Object.hasOwn(feedback, "masteryStatus"), false);

  const cancelled = clearCustodyLedgerWorkingState(feedback);
  assert.equal(cancelled.activeMessageKey, "cancelled");
  assert.deepEqual(cancelled.expeditionFields, { classification: "", owner: "" });
  assert.equal(cancelled.scoringEnabled, false);
  assert.equal(cancelled.campaignCommitEnabled, false);
  assert.equal(JSON.stringify(campaign), campaignBytes);
  assert.equal(JSON.stringify(tourEvidence), tourBytes);
  assert.equal(Object.hasOwn(cancelled, "campaign"), false);
  assert.equal(Object.hasOwn(cancelled, "tourEvidence"), false);
});

test("protected work image is unfinished and strict reference source alone earns six checks", () => {
  const primary = blankPrimary();
  assert.equal(primary.unfinishedWorkImage.label, "UNFINISHED WORK IMAGE");
  assert.deepEqual(primary.unfinishedWorkImage.sourceFields, custodyLedgerSourceFields);
  assert.deepEqual(primary.unfinishedWorkImage.expeditionFields, { classification: "", owner: "" });
  assert.equal(primary.unfinishedWorkImage.starterSource, custodyLedgerPrimaryStarterSource);
  assert.match(custodyLedgerPrimaryStarterSource, /comparison\["classification"\]\s*=\s*$/m);
  assert.match(custodyLedgerPrimaryStarterSource, /comparison\["owner"\]\s*=\s*$/m);

  const result = evaluateCustodyLedgerPrimarySource(custodyLedgerPrimaryReferenceSource);
  assert.equal(result.score, 6);
  assert.equal(result.passed, true);
  assert.deepEqual(result.misconceptionTags, []);
});

test("compilation, output, a translated-looking value, and forged result fields remain zero credit", () => {
  const syntaxAndOutput = `${custodyLedgerPrimaryStarterSource}\nprint({"classification": "unknown", "owner": "human_expedition"})`;
  const forged = {
    ...blankPrimary(),
    pythonChecks: Object.fromEntries([
      "result_is_dictionary", "exact_keys_only", "condition_and_source_preserved",
      "identity_remains_none", "access_requested_remains_false",
      "classification_and_owner_added_by_key_update",
    ].map((check) => [check, true])),
    causalResult: custodyLedgerCausalResult,
    masteryStatus: "mastered",
    campaignCommitEnabled: true,
  };
  const result = submitCustodyLedgerPrimary(forged, syntaxAndOutput);
  assert.equal(result.phase, "python_primary");
  assert.equal(result.pythonEvidence.masteryStatus, "in_progress");
  assert.equal(result.campaignCommitEnabled, false);
  assert.equal(Object.hasOwn(result, "causalResult"), false);
  assert.equal(Object.hasOwn(result, "masteryStatus"), false);
  assert.ok(result.pythonEvidence.misconceptionTags.includes("output_or_external_operation_is_not_evidence"));
});

test("replacement dictionaries, locked-field changes, extra keys, and non-key updates fail closed", () => {
  const probes = [
    custodyLedgerPrimaryReferenceSource.replace("comparison = {", "comparison = dict({").replace(/^}$/m, "})"),
    custodyLedgerPrimaryReferenceSource.replace('"identity": None', '"identity": False'),
    custodyLedgerPrimaryReferenceSource.replace('"access_requested": False', '"access_requested": True'),
    custodyLedgerPrimaryReferenceSource.replace('"access_requested": False,', '"access_requested": False,\n    "permission": True,'),
    custodyLedgerPrimaryReferenceSource.replace('comparison["owner"] = "human_expedition"', 'comparison.update({"owner": "human_expedition"})'),
  ];
  for (const source of probes) {
    const result = submitCustodyLedgerPrimary(blankPrimary(), source);
    assert.equal(result.phase, "python_primary");
    assert.equal(result.campaignCommitEnabled, false);
    assert.equal(result.cityStateDelta, null);
    assert.deepEqual(result.expeditionFields, { classification: "", owner: "" });
    assert.notEqual(result.pythonEvidence.masteryStatus, "primary_complete");
  }
});

test("strict 6/6 stops at the read-only causal suit result before fresh practice", () => {
  const result = submitCustodyLedgerPrimary(blankPrimary(), `${custodyLedgerPrimaryReferenceSource}\n# private-attempt-marker-7391`);
  assert.equal(result.phase, "python_primary_result");
  assert.equal(result.pythonForm, "primary_result");
  assert.equal(result.primaryStatus, "complete");
  assert.deepEqual(result.causalResult, custodyLedgerCausalResult);
  assert.equal(result.causalResult.owner, "SUIT // PROVISIONAL TRANSLATION");
  assert.match(result.causalResult.text, /Identity-bearing material remains closed/);
  assert.equal(Object.hasOwn(result, "unfinishedWorkImage"), false);
  assert.equal(Object.hasOwn(result, "sourceFields"), false);
  assert.equal(Object.hasOwn(result, "expeditionFields"), false);
  assert.equal(result.pythonEvidence.masteryStatus, "primary_complete");
  assert.equal(result.scoringEnabled, false);
  assert.equal(result.campaignCommitEnabled, false);
  assert.equal(result.cityStateDelta, null);
  assert.equal(result.continuation, "continuation");

  const serialized = JSON.stringify(result);
  assert.doesNotMatch(serialized, /learnerSource|rawComparison|private-attempt-marker-7391|print\(/);
  for (const prohibited of ["campaign", "tourEvidence", "cityResponse", "successor", "route", "item", "accessGranted", "externalAction"]) {
    assert.equal(Object.hasOwn(result, prohibited), false, prohibited);
  }
  assert.equal(Object.hasOwn(result, "raiChecks"), false);
});

test("miss feedback is human-owned, privacy-limited, blank, and supports unlimited recovery", () => {
  const missSource = custodyLedgerPrimaryReferenceSource.replace('"identity": None', '"identity": False');
  const first = submitCustodyLedgerPrimary(blankPrimary(), missSource);
  assert.equal(first.activeMessageKey, "identity_unknown");
  assert.equal(getCustodyLedgerOwnershipMessage(first.activeMessageKey).owner, "901 TEACHER // FEEDBACK");
  assert.deepEqual(first.expeditionFields, { classification: "", owner: "" });
  assert.equal(first.pythonEvidence.attemptCount, 1);
  assert.deepEqual(Object.keys(first.pythonEvidence).sort(), [
    "attemptCount", "confidence", "dimensionCorrectness", "form", "hintLevel", "mappingId",
    "masteryStatus", "misconceptionTags", "packetId", "skillId",
  ]);
  const retry = retryCustodyLedgerPrimary(first);
  assert.deepEqual(Object.values(retry.pythonChecks), [false, false, false, false, false, false]);
  assert.deepEqual(retry.sourceFields, custodyLedgerSourceFields);
  assert.deepEqual(retry.expeditionFields, { classification: "", owner: "" });
  const second = submitCustodyLedgerPrimary(retry, missSource);
  assert.equal(second.pythonEvidence.attemptCount, 2);
  const recovered = submitCustodyLedgerPrimary(retryCustodyLedgerPrimary(second), custodyLedgerPrimaryReferenceSource);
  assert.equal(recovered.phase, "python_primary_result");
  assert.equal(recovered.pythonEvidence.attemptCount, 3);
});

test("submission leaves separate campaign and Tour bytes stable and exposes no normal route", () => {
  const campaign = { completed: ["meadow"], route: "city_threshold", attempts: 3 };
  const tour = { mode: "demo_tour", scene: "city", noCredit: true };
  const campaignBytes = JSON.stringify(campaign);
  const tourBytes = JSON.stringify(tour);
  submitCustodyLedgerPrimary(blankPrimary(), custodyLedgerPrimaryReferenceSource);
  assert.equal(JSON.stringify(campaign), campaignBytes);
  assert.equal(JSON.stringify(tour), tourBytes);
  assert.equal(Object.hasOwn(blankPrimary(), "route"), false);
  assert.equal(Object.hasOwn(blankPrimary(), "successor"), false);
});

test("zero-credit result dismissal clears the causal record into carry-free fresh practice", () => {
  const result = completedPrimaryResult();
  const transfer = dismissCustodyLedgerPrimaryResult({
    ...result,
    sourceFields: { ...custodyLedgerSourceFields },
    expeditionFields: { classification: "unknown", owner: "human_expedition" },
    learnerSource: "private-primary-source",
  });
  assert.equal(transfer.phase, "python_transfer");
  assert.equal(transfer.activeMessageKey, "fresh_practice");
  assert.equal(transfer.unfinishedWorkImage.label, "FRESH PRACTICE IMAGE");
  assert.deepEqual(transfer.sourceFields, custodyLedgerTransferSourceFields);
  assert.deepEqual(transfer.expeditionFields, { classification: "", owner: "" });
  assert.deepEqual(Object.values(transfer.pythonChecks), [false, false, false, false, false, false]);
  assert.equal(Object.hasOwn(transfer, "causalResult"), false);
  assert.equal(Object.hasOwn(transfer, "learnerSource"), false);
  assert.doesNotMatch(JSON.stringify(transfer), /private-primary-source|human_expedition/);
  assert.equal(transfer.pythonEvidence.attemptCount, result.pythonEvidence.attemptCount);
  assert.equal(transfer.pythonTransferEvidence, undefined);
});

test("fresh transfer requires exact six-check human-reviewer key updates without execution", () => {
  const strict = evaluateCustodyLedgerTransferSource(custodyLedgerTransferReferenceSource);
  assert.equal(strict.score, 6);
  assert.equal(strict.passed, true);

  const wrongOwner = custodyLedgerTransferReferenceSource.replace("human_reviewer", "human_expedition");
  const printed = `${custodyLedgerTransferReferenceSource}\nprint(comparison)`;
  for (const source of [wrongOwner, printed, custodyLedgerPrimaryReferenceSource]) {
    const state = submitCustodyLedgerTransfer(blankTransfer(), source);
    assert.equal(state.phase, "python_transfer");
    assert.equal(state.campaignCommitEnabled, false);
    assert.deepEqual(state.expeditionFields, { classification: "", owner: "" });
    assert.notEqual(state.pythonTransferEvidence.masteryStatus, "transfer_complete");
  }

  const explanation = submitCustodyLedgerTransfer(blankTransfer(), custodyLedgerTransferReferenceSource);
  assert.equal(explanation.phase, "python_explanation");
  assert.equal(explanation.activeMessageKey, "explanation_prompt");
  assert.equal(explanation.pythonTransferEvidence.masteryStatus, "transfer_complete");
  assert.deepEqual(explanation.explanationSelections, Object.fromEntries(
    custodyLedgerExplanationDimensions.map((dimension) => [dimension, ""]),
  ));
  assert.equal(Object.hasOwn(explanation, "unfinishedWorkImage"), false);
  assert.equal(Object.hasOwn(explanation, "causalResult"), false);
});

test("transfer misses retain privacy-limited dimensions and retry with a blank fresh image", () => {
  const source = custodyLedgerTransferReferenceSource.replace('"identity": None', '"identity": False');
  const first = submitCustodyLedgerTransfer(blankTransfer(), `${source}\n# private-transfer-8821`);
  assert.equal(first.activeMessageKey, "identity_unknown");
  assert.equal(first.pythonTransferEvidence.attemptCount, 1);
  assert.equal(first.pythonTransferEvidence.dimensionCorrectness.identity_remains_none, false);
  assert.doesNotMatch(JSON.stringify(first), /private-transfer-8821/);
  assert.deepEqual(Object.keys(first.pythonTransferEvidence).sort(), [
    "attemptCount", "confidence", "dimensionCorrectness", "form", "hintLevel", "mappingId",
    "masteryStatus", "misconceptionTags", "packetId", "skillId",
  ]);
  const retry = retryCustodyLedgerTransfer(first);
  assert.equal(retry.unfinishedWorkImage.label, "FRESH PRACTICE IMAGE");
  assert.deepEqual(retry.expeditionFields, { classification: "", owner: "" });
  assert.deepEqual(Object.values(retry.pythonChecks), [false, false, false, false, false, false]);
  const recovered = submitCustodyLedgerTransfer(retry, custodyLedgerTransferReferenceSource);
  assert.equal(recovered.phase, "python_explanation");
  assert.equal(recovered.pythonTransferEvidence.attemptCount, 2);
});

test("closed-note explanation scores three dimensions separately and blanks every retry", () => {
  const partialAnswers = {
    ...custodyLedgerExplanationAnswers,
    none_means_missing_or_unknown_identity: "None means false",
  };
  const evaluated = evaluateCustodyLedgerExplanation(partialAnswers);
  assert.equal(evaluated.score, 2);
  assert.equal(evaluated.firstFailedDimension, "none_means_missing_or_unknown_identity");
  assert.deepEqual(evaluated.dimensionCorrectness, {
    named_key_update: true,
    none_means_missing_or_unknown_identity: false,
    false_means_access_request_did_not_occur: true,
  });

  const missed = submitCustodyLedgerExplanation(blankExplanation(), partialAnswers);
  assert.equal(missed.phase, "python_explanation");
  assert.equal(missed.firstFailedDimension, "none_means_missing_or_unknown_identity");
  assert.deepEqual(missed.explanationSelections, Object.fromEntries(
    custodyLedgerExplanationDimensions.map((dimension) => [dimension, ""]),
  ));
  assert.equal(missed.pythonExplanationEvidence.attemptCount, 1);
  assert.doesNotMatch(JSON.stringify(missed), /None means false/);

  const conclusion = submitCustodyLedgerExplanation(missed, custodyLedgerExplanationAnswers);
  assert.equal(conclusion.phase, "python_complete");
  assert.equal(conclusion.activeMessageKey, "python_conclusion");
  assert.equal(conclusion.pythonExplanationEvidence.masteryStatus, "explanation_complete");
  assert.equal(conclusion.pythonExplanationEvidence.attemptCount, 2);
  assert.equal(conclusion.scoringEnabled, false);
  assert.equal(conclusion.campaignCommitEnabled, false);
  assert.equal(Object.hasOwn(conclusion, "raiChecks"), false);
});

test("Pilot dismissal initializes only a blank protected responsible-AI primary", () => {
  const conclusion = submitCustodyLedgerExplanation(blankExplanation(), custodyLedgerExplanationAnswers);
  const rai = dismissCustodyLedgerPythonConclusion(conclusion);
  assert.equal(rai.phase, "rai_primary");
  assert.equal(rai.activeMessageKey, "rai_primary");
  assert.equal(rai.raiForm, "primary");
  assert.equal(rai.raiScoringImplemented, true);
  assert.equal(rai.scoringEnabled, true);
  assert.equal(rai.campaignCommitEnabled, false);
  assert.deepEqual(Object.values(rai.raiChecks).flatMap((checks) => Object.values(checks)), Array(9).fill(false));
  for (const prohibited of ["raiEvidence", "masteryStatus", "campaign", "route", "successor", "externalAction"]) {
    assert.equal(Object.hasOwn(rai, prohibited), false, prohibited);
  }
});

test("protected RAI catalog exposes exactly three course cases and three approved dimensions", () => {
  assert.deepEqual(custodyLedgerRAIPrimaryScenarioIds, ["P01", "P02", "P03"]);
  assert.deepEqual(custodyLedgerRAIDimensions, ["principle", "mitigation", "owner"]);
  assert.equal(custodyLedgerRAIPrimaryScenarios.length, 3);
  for (const scenario of custodyLedgerRAIPrimaryScenarios) {
    assert.deepEqual(Object.keys(scenario).sort(), ["id", "mitigationChoices", "ownerChoices", "principleChoices", "prompt"]);
    assert.equal(scenario.principleChoices.length, 6);
    assert.equal(scenario.mitigationChoices.length, 2);
    assert.equal(scenario.ownerChoices.length, 2);
  }
  assert.deepEqual(custodyLedgerRAIGuidedCase.dimensions, custodyLedgerRAIDimensions);
});

test("all cases recompute together and principle-only or nonhuman-owner shortcuts open mapped Teacher repair", () => {
  const primary = blankRAIPrimary();
  const pythonBytes = JSON.stringify([
    primary.pythonEvidence,
    primary.pythonTransferEvidence,
    primary.pythonExplanationEvidence,
  ]);
  const missed = submitRAIForm(primary, {
    P01: { mitigation: "publish_ai_disclosure_only", owner: "model_itself" },
  });
  assert.equal(missed.phase, "rai_feedback");
  assert.equal(missed.activeMessageKey, "rai_feedback");
  assert.equal(missed.scoringEnabled, false);
  assert.equal(missed.raiEvidence.attemptCount, 1);
  assert.equal(missed.raiEvidence.masteryStatus, "remediation_required");
  assert.equal(missed.raiEvidence.dimensionCorrectness.P01.principle, true);
  assert.equal(missed.raiEvidence.dimensionCorrectness.P01.mitigation, false);
  assert.equal(missed.raiEvidence.dimensionCorrectness.P01.owner, false);
  assert.equal(missed.raiFeedback.length, 2);
  assert.deepEqual(missed.raiFeedback.map(({ scenarioId, dimension, owner }) => ({ scenarioId, dimension, owner })), [
    { scenarioId: "P01", dimension: "mitigation", owner: "901 TEACHER // FEEDBACK" },
    { scenarioId: "P01", dimension: "owner", owner: "901 TEACHER // FEEDBACK" },
  ]);
  assert.equal(missed.raiFeedback[0].text, custodyLedgerRAIRemediationMap.P01.mitigation);
  assert.equal(Object.hasOwn(missed, "raiWorkingResponses"), false);
  assert.equal(JSON.stringify([
    missed.pythonEvidence,
    missed.pythonTransferEvidence,
    missed.pythonExplanationEvidence,
  ]), pythonBytes);
  assert.equal(missed.campaignCommitEnabled, false);
  assert.equal(missed.continuation, "continuation");
  assert.equal(missed.cityStateDelta, null);
});

test("Teacher feedback is replaced by neutral no-credit guidance and a blank first-failed retry", () => {
  const missed = submitRAIForm(blankRAIPrimary(), {
    P02: { mitigation: "add_privacy_notice", owner: "model_itself" },
  });
  const guided = acknowledgeCustodyLedgerRAIFeedback(missed);
  assert.equal(guided.phase, "rai_guided");
  assert.equal(guided.activeMessageKey, "rai_guided");
  assert.equal(Object.hasOwn(guided, "raiFeedback"), false);
  assert.equal(guided.guidedPractice.status, "blank");
  assert.deepEqual(guided.guidedPractice.response, { principle: "", mitigation: "", owner: "" });

  const rejected = submitCustodyLedgerRAIGuidedPractice(guided, {
    principle: "fairness",
    mitigation: "measure a comparable outcome",
    owner: "the platform itself",
    privateReasoning: "do not retain 4472",
  });
  assert.equal(rejected.phase, "rai_guided");
  assert.equal(rejected.guidedPractice.status, "incomplete");
  assert.doesNotMatch(JSON.stringify(rejected), /4472|platform itself/);

  const retry = submitCustodyLedgerRAIGuidedPractice(guided, {
    principle: "fairness",
    mitigation: "measure group outcomes and review the difference",
    owner: "expedition training lead",
  });
  assert.equal(retry.phase, "rai_primary");
  assert.equal(retry.raiScenarioId, "P02");
  assert.deepEqual(retry.focusIntent, { scenarioId: "P02", dimension: "mitigation" });
  assert.deepEqual(retry.raiWorkingResponses, {});
  assert.equal(Object.hasOwn(retry, "guidedPractice"), false);
  assert.equal(retry.raiEvidence.attemptCount, 1);
  const recovered = submitRAIForm(retry);
  assert.equal(recovered.phase, "rai_transfer");
  assert.equal(recovered.raiEvidence.attemptCount, 2);
  assert.equal(Object.values(recovered.raiEvidence.dimensionCorrectness.P01).every(Boolean), true);
});

test("strict 9/9 after unlimited recovery initializes only a genuinely blank transfer", () => {
  let state = submitRAIForm(blankRAIPrimary(), { P01: { owner: "model_itself" } });
  for (let attempt = 0; attempt < 3; attempt += 1) {
    state = submitCustodyLedgerRAIGuidedPractice(
      acknowledgeCustodyLedgerRAIFeedback(state),
      { principle: "fairness", mitigation: "measure comparable group outcomes", owner: "course review team" },
    );
    if (attempt < 2) state = submitRAIForm(state, { P01: { owner: "model_itself" } });
  }
  const transfer = submitRAIForm(state);
  assert.equal(transfer.phase, "rai_transfer");
  assert.equal(transfer.activeMessageKey, "rai_transfer");
  assert.equal(transfer.raiEvidence.attemptCount, 4);
  assert.equal(transfer.raiEvidence.masteryStatus, "primary_complete");
  assert.equal(Object.values(transfer.raiEvidence.dimensionCorrectness).flatMap(Object.values).every(Boolean), true);
  assert.equal(transfer.raiTransferInitialized, true);
  assert.equal(transfer.raiTransferEvaluatorImplemented, true);
  assert.equal(transfer.scoringEnabled, true);
  assert.deepEqual(transfer.raiTransferResponses, {});
  assert.deepEqual(Object.values(transfer.raiTransferChecks).flatMap(Object.values), Array(9).fill(false));
  assert.equal(Object.hasOwn(transfer, "raiWorkingResponses"), false);
  assert.equal(Object.hasOwn(transfer, "masteryStatus"), false);
});

test("protected RAI transfer exposes only approved fresh cases and recomputes all nine dimensions", () => {
  const transfer = submitRAIForm(blankRAIPrimary());
  assert.deepEqual(custodyLedgerRAITransferScenarioIds, ["T01", "T02", "T03"]);
  assert.deepEqual(custodyLedgerRAITransferScenarios.map(({ id }) => id), custodyLedgerRAITransferScenarioIds);
  assert.match(custodyLedgerRAITransferScenarios[0].prompt, /de-identified sensor packet/);
  assert.match(custodyLedgerRAITransferScenarios[1].prompt, /private operator field/);
  assert.match(custodyLedgerRAITransferScenarios[2].prompt, /automated label/);
  assert.deepEqual(transfer.raiTransferResponses, {});
  assert.equal(Object.hasOwn(transfer, "raiWorkingResponses"), false);

  const evaluated = evaluateCustodyLedgerRAITransfer({
    ...raiTransferAnswers,
    T03: { ...raiTransferAnswers.T03, owner: "platform_itself" },
    score: 9,
    passed: true,
  });
  assert.equal(evaluated.score, 8);
  assert.equal(evaluated.passed, false);
  assert.equal(evaluated.dimensionCorrectness.T03.owner, false);
});

test("transfer miss replaces the blank form with mapped Teacher feedback and neutral zero-credit practice", () => {
  const transfer = submitRAIForm(blankRAIPrimary());
  const pythonAndPrimaryBytes = JSON.stringify([
    transfer.pythonEvidence,
    transfer.pythonTransferEvidence,
    transfer.pythonExplanationEvidence,
    transfer.raiEvidence,
  ]);
  const missed = submitRAITransferForm(transfer, {
    T01: { mitigation: "publish_limits_without_preserving_provenance", privateNotes: "private-771" },
    T03: { owner: "platform_itself", score: 9, passed: true },
  });
  assert.equal(missed.phase, "rai_transfer_feedback");
  assert.equal(missed.activeMessageKey, "rai_transfer_feedback");
  assert.equal(missed.scoringEnabled, false);
  assert.equal(missed.raiTransferEvidence.attemptCount, 1);
  assert.equal(missed.raiTransferEvidence.dimensionCorrectness.T01.mitigation, false);
  assert.equal(missed.raiTransferEvidence.dimensionCorrectness.T03.owner, false);
  assert.deepEqual(missed.raiTransferFeedback.map(({ scenarioId, dimension, owner }) => ({ scenarioId, dimension, owner })), [
    { scenarioId: "T01", dimension: "mitigation", owner: "901 TEACHER // FEEDBACK" },
    { scenarioId: "T03", dimension: "owner", owner: "901 TEACHER // FEEDBACK" },
  ]);
  assert.equal(missed.raiTransferFeedback[0].text, custodyLedgerRAITransferRemediationMap.T01.mitigation);
  assert.equal(Object.hasOwn(missed, "raiTransferResponses"), false);
  assert.doesNotMatch(JSON.stringify(missed), /private-771|platform_itself|publish_limits/);

  const guided = acknowledgeCustodyLedgerRAITransferFeedback(missed);
  assert.equal(guided.phase, "rai_transfer_guided");
  assert.equal(guided.activeMessageKey, "rai_transfer_guided");
  assert.equal(guided.scoringEnabled, false);
  assert.equal(guided.guidedPractice.id, custodyLedgerRAITransferGuidedCase.id);
  assert.deepEqual(guided.guidedPractice.response, { principle: "", mitigation: "", owner: "" });
  assert.equal(JSON.stringify([
    guided.pythonEvidence,
    guided.pythonTransferEvidence,
    guided.pythonExplanationEvidence,
    guided.raiEvidence,
  ]), pythonAndPrimaryBytes);
});

test("neutral transfer practice restores a fully blank first-failed retry with unlimited recovery", () => {
  let state = submitRAITransferForm(submitRAIForm(blankRAIPrimary()), {
    T02: { owner: "city" },
  });
  state = acknowledgeCustodyLedgerRAITransferFeedback(state);
  const rejected = submitCustodyLedgerRAITransferGuidedPractice(state, {
    principle: "privacy_and_security",
    mitigation: "review the evidence boundary",
    owner: "the city",
    privateReasoning: "private-998",
  });
  assert.equal(rejected.phase, "rai_transfer_guided");
  assert.equal(rejected.guidedPractice.status, "incomplete");
  assert.doesNotMatch(JSON.stringify(rejected), /private-998|the city/);

  const retry = submitCustodyLedgerRAITransferGuidedPractice(state, {
    principle: "privacy_and_security",
    mitigation: "review the evidence boundary without opening private data",
    owner: "course privacy review team",
  });
  assert.equal(retry.phase, "rai_transfer");
  assert.equal(retry.raiTransferScenarioId, "T02");
  assert.deepEqual(retry.focusIntent, { scenarioId: "T02", dimension: "owner" });
  assert.deepEqual(retry.raiTransferResponses, {});
  assert.equal(Object.hasOwn(retry, "guidedPractice"), false);

  state = retry;
  for (let attempt = 0; attempt < 2; attempt += 1) {
    state = submitRAITransferForm(state, { T02: { owner: "city" } });
    state = submitCustodyLedgerRAITransferGuidedPractice(
      acknowledgeCustodyLedgerRAITransferFeedback(state),
      { principle: "accountability", mitigation: "assign a review and correction path", owner: "course review lead" },
    );
  }
  const recovered = submitRAITransferForm(state);
  assert.equal(recovered.phase, "rai_explanation");
  assert.equal(recovered.raiTransferEvidence.attemptCount, 4);
  assert.deepEqual(recovered.raiExplanationSelections, Object.fromEntries(
    custodyLedgerRAIExplanationDimensions.map((dimension) => [dimension, ""]),
  ));
});

test("separate three-boundary explanation blanks misses and alone opens the exact Pilot conclusion", () => {
  const explanation = submitRAITransferForm(submitRAIForm(blankRAIPrimary()));
  assert.equal(explanation.phase, "rai_explanation");
  assert.equal(explanation.activeMessageKey, "rai_explanation");
  assert.equal(explanation.raiTransferEvidence.masteryStatus, "transfer_complete");
  assert.deepEqual(explanation.raiExplanationSelections, Object.fromEntries(
    custodyLedgerRAIExplanationDimensions.map((dimension) => [dimension, ""]),
  ));

  const partial = {
    ...custodyLedgerRAIExplanationAnswers,
    not_builder_intent_identity_or_native_fact: "a native fact",
    privateReasoning: "private-334",
    passed: true,
  };
  const evaluated = evaluateCustodyLedgerRAIExplanation(partial);
  assert.equal(evaluated.score, 2);
  assert.equal(evaluated.firstFailedDimension, "not_builder_intent_identity_or_native_fact");
  const feedback = submitCustodyLedgerRAIExplanation(explanation, partial);
  assert.equal(feedback.phase, "rai_explanation_feedback");
  assert.equal(feedback.activeMessageKey, "rai_explanation_feedback");
  assert.equal(feedback.explanationFeedback.dimension, "not_builder_intent_identity_or_native_fact");
  assert.equal(Object.hasOwn(feedback, "raiExplanationSelections"), false);
  assert.doesNotMatch(JSON.stringify(feedback), /private-334|a native fact/);

  const retry = acknowledgeCustodyLedgerRAIExplanationFeedback(feedback);
  assert.equal(retry.phase, "rai_explanation");
  assert.deepEqual(retry.raiExplanationSelections, Object.fromEntries(
    custodyLedgerRAIExplanationDimensions.map((dimension) => [dimension, ""]),
  ));
  assert.deepEqual(retry.focusIntent, {
    group: "rai_explanation",
    dimension: "not_builder_intent_identity_or_native_fact",
  });
  const conclusion = submitCustodyLedgerRAIExplanation(retry, custodyLedgerRAIExplanationAnswers);
  assert.equal(conclusion.phase, "rai_complete");
  assert.equal(conclusion.activeMessageKey, "rai_conclusion");
  assert.deepEqual(conclusion.conclusion, {
    owner: "PILOT // FLIGHT RECORDER",
    text: "My application label is a human interpretation, not their fact or permission to act.",
  });
  assert.equal(conclusion.raiExplanationEvidence.attemptCount, 2);
  assert.equal(conclusion.scoringEnabled, false);
  assert.equal(conclusion.campaignCommitEnabled, false);
  assert.deepEqual(dismissCustodyLedgerRAIConclusion(conclusion), conclusion);
});

test("RAI transfer and explanation resume clear private work and preserve every external invariant", () => {
  const campaign = { cityThresholdAnchorRecorded: true, civicDistrictRouteAvailable: true, continuation: "continuation", cityStateDelta: null };
  const tour = { mode: "demo_tour", cursor: "city", noCredit: true };
  const campaignBytes = JSON.stringify(campaign);
  const tourBytes = JSON.stringify(tour);
  const transfer = submitRAIForm(blankRAIPrimary());
  const transferMiss = submitRAITransferForm(transfer, { T03: { owner: "platform_itself" } });
  const transferResume = resumeCustodyLedgerRAI({
    ...transferMiss,
    raiTransferResponses: { T03: { owner: "private-owner-441" } },
    guidedPractice: { response: "private-guidance-221" },
    freeFormReasoning: "private-reasoning-887",
  });
  assert.equal(transferResume.phase, "rai_transfer");
  assert.equal(transferResume.raiTransferScenarioId, "T03");
  assert.deepEqual(transferResume.raiTransferResponses, {});
  assert.doesNotMatch(JSON.stringify(transferResume), /private-owner|private-guidance|private-reasoning/);

  const explanation = submitRAITransferForm(transferResume);
  const explanationMiss = submitCustodyLedgerRAIExplanation(explanation, {});
  const explanationResume = resumeCustodyLedgerRAI({
    ...explanationMiss,
    raiExplanationSelections: { application_label_is_human_owned_and_provisional: "private-choice-773" },
    prose: "private-prose-664",
  });
  assert.equal(explanationResume.phase, "rai_explanation");
  assert.deepEqual(explanationResume.raiExplanationSelections, Object.fromEntries(
    custodyLedgerRAIExplanationDimensions.map((dimension) => [dimension, ""]),
  ));
  assert.doesNotMatch(JSON.stringify(explanationResume), /private-choice|private-prose/);

  const conclusion = submitCustodyLedgerRAIExplanation(explanationResume, custodyLedgerRAIExplanationAnswers);
  const restoredConclusion = resumeCustodyLedgerRAI(conclusion);
  assert.equal(restoredConclusion.phase, "rai_complete");
  assert.equal(restoredConclusion.conclusion.text, "My application label is a human interpretation, not their fact or permission to act.");
  for (const candidate of [transferResume, explanationResume, restoredConclusion]) {
    assert.equal(candidate.campaignCommitEnabled, false);
    assert.equal(candidate.continuation, "continuation");
    assert.equal(candidate.cityStateDelta, null);
    for (const prohibited of ["save", "cityResponse", "route", "successor", "item", "accessGranted", "permission", "externalAction", "identity"])
      assert.equal(Object.hasOwn(candidate, prohibited), false, prohibited);
  }
  assert.equal(JSON.stringify(campaign), campaignBytes);
  assert.equal(JSON.stringify(tour), tourBytes);
});

test("RAI anti-forgery recomputes nine booleans and strips private working content on resume", () => {
  let state = blankRAIPrimary();
  for (const scenarioId of custodyLedgerRAIPrimaryScenarioIds) {
    const scenario = responsibleAIPrimaryScenarios.find((item) => item.id === scenarioId);
    const response = raiAnswer(scenario, scenarioId === "P03" ? { owner: "city" } : {});
    state = submitCustodyLedgerRAIPrimaryScenario(state, scenarioId, {
      ...response,
      passed: true,
      score: 9,
      dimensionCorrectness: Object.fromEntries(custodyLedgerRAIDimensions.map((dimension) => [dimension, true])),
      privateNotes: "private-working-9813",
    });
  }
  assert.equal(state.phase, "rai_feedback");
  assert.equal(state.raiEvidence.dimensionCorrectness.P03.owner, false);
  assert.doesNotMatch(JSON.stringify(state), /private-working-9813|\"score\":9|\"passed\":true/);

  const resumed = resumeCustodyLedgerRAI({
    ...state,
    raiWorkingResponses: { P03: { owner: "private-owner-812" } },
    guidedPractice: { response: "private-guidance-913" },
    freeFormReasoning: "private-reasoning-115",
  });
  assert.equal(resumed.phase, "rai_primary");
  assert.equal(resumed.raiScenarioId, "P03");
  assert.deepEqual(resumed.raiWorkingResponses, {});
  assert.doesNotMatch(JSON.stringify(resumed), /private-owner|private-guidance|private-reasoning/);
});

test("protected RAI transitions leave campaign, Tour, world, and Python evidence byte-stable", () => {
  const campaign = { cityThresholdAnchorRecorded: true, civicDistrictRouteAvailable: true, continuation: "continuation", cityStateDelta: null };
  const tour = { mode: "demo_tour", cursor: "city", noCredit: true };
  const campaignBytes = JSON.stringify(campaign);
  const tourBytes = JSON.stringify(tour);
  const primary = blankRAIPrimary();
  const pythonBytes = JSON.stringify([primary.pythonEvidence, primary.pythonTransferEvidence, primary.pythonExplanationEvidence]);
  const states = [primary, submitRAIForm(primary, { P03: { owner: "customer" } })];
  states.push(acknowledgeCustodyLedgerRAIFeedback(states[1]));
  states.push(resumeCustodyLedgerRAI(states[2]));
  for (const candidate of states) {
    assert.equal(candidate.campaignCommitEnabled, false);
    assert.equal(candidate.continuation, "continuation");
    assert.equal(candidate.cityStateDelta, null);
    assert.equal(JSON.stringify([candidate.pythonEvidence, candidate.pythonTransferEvidence, candidate.pythonExplanationEvidence]), pythonBytes);
    for (const prohibited of ["save", "cityResponse", "route", "successor", "item", "accessGranted", "permission", "externalAction", "identity"])
      assert.equal(Object.hasOwn(candidate, prohibited), false, prohibited);
  }
  assert.equal(JSON.stringify(campaign), campaignBytes);
  assert.equal(JSON.stringify(tour), tourBytes);
});

test("resume reconstructs the first incomplete scored boundary without replaying result or conclusion", () => {
  const result = completedPrimaryResult();
  const fromResult = resumeCustodyLedgerPython({
    ...result,
    learnerSource: "private",
    causalResult: { forged: true },
  });
  assert.equal(fromResult.phase, "python_transfer");
  assert.equal(fromResult.unfinishedWorkImage.label, "FRESH PRACTICE IMAGE");
  assert.equal(Object.hasOwn(fromResult, "causalResult"), false);
  assert.doesNotMatch(JSON.stringify(fromResult), /private|forged/);

  const transferMiss = submitCustodyLedgerTransfer(blankTransfer(), "print(comparison)");
  const fromTransferMiss = resumeCustodyLedgerPython({ ...transferMiss, expeditionFields: { owner: "private" } });
  assert.equal(fromTransferMiss.phase, "python_transfer");
  assert.deepEqual(fromTransferMiss.expeditionFields, { classification: "", owner: "" });

  const explanationMiss = submitCustodyLedgerExplanation(blankExplanation(), {});
  const fromExplanationMiss = resumeCustodyLedgerPython({
    ...explanationMiss,
    explanationSelections: { named_key_update: "private" },
  });
  assert.equal(fromExplanationMiss.phase, "python_explanation");
  assert.deepEqual(fromExplanationMiss.explanationSelections, Object.fromEntries(
    custodyLedgerExplanationDimensions.map((dimension) => [dimension, ""]),
  ));
  assert.equal(fromExplanationMiss.firstFailedDimension, null);

  const conclusion = submitCustodyLedgerExplanation(blankExplanation(), custodyLedgerExplanationAnswers);
  const fromConclusion = resumeCustodyLedgerPython(conclusion);
  assert.equal(fromConclusion.phase, "rai_primary");
  assert.equal(Object.hasOwn(fromConclusion, "pythonForm"), false);
  assert.equal(fromConclusion.campaignCommitEnabled, false);
});

test("forged phases downgrade and all protected transitions preserve campaign, Tour, and world invariants", () => {
  const campaign = { completed: ["meadow"], continuation: "continuation", cityStateDelta: null };
  const tour = { mode: "demo_tour", noCredit: true, scene: "city" };
  const campaignBytes = JSON.stringify(campaign);
  const tourBytes = JSON.stringify(tour);
  const forged = submitCustodyLedgerTransfer({
    ...blankTransfer(),
    pythonEvidence: { packetId: "forged", form: "primary", masteryStatus: "primary_complete" },
    campaignCommitEnabled: true,
  }, custodyLedgerTransferReferenceSource);
  assert.equal(forged.phase, "predecessor_blocked");
  assert.equal(forged.campaignCommitEnabled, false);

  const states = [completedPrimaryResult(), blankTransfer(), blankExplanation()];
  for (const state of states) {
    assert.equal(state.continuation, "continuation");
    assert.equal(state.cityStateDelta, null);
    assert.equal(state.campaignCommitEnabled, false);
    for (const prohibited of ["cityResponse", "successor", "route", "item", "accessGranted", "permission", "externalAction"])
      assert.equal(Object.hasOwn(state, prohibited), false, prohibited);
  }
  assert.equal(JSON.stringify(campaign), campaignBytes);
  assert.equal(JSON.stringify(tour), tourBytes);
});
