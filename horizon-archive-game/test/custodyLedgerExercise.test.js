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
  advanceCustodyLedgerPrerequisite,
  clearCustodyLedgerWorkingState,
  createCustodyLedgerScaffold,
  custodyLedgerCausalResult,
  custodyLedgerOwnershipMessages,
  custodyLedgerPrimaryReferenceSource,
  custodyLedgerPrimaryStarterSource,
  custodyLedgerSourceFields,
  custodyLedgerTransferSourceFields,
  evaluateCustodyLedgerPrimarySource,
  getCustodyLedgerOwnershipMessage,
  retryCustodyLedgerPrimary,
  setCustodyLedgerOwnershipMessage,
  submitCustodyLedgerPrimary,
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
  assert.equal(getCustodyLedgerOwnershipMessage("tour").text, "Preview only — bounded comparison not saved.");
  assert.match(getCustodyLedgerOwnershipMessage("saved").text, /No access request or external action occurred/);
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

test("strict 6/6 creates only the causal suit record and a blank transfer boundary", () => {
  const result = submitCustodyLedgerPrimary(blankPrimary(), `${custodyLedgerPrimaryReferenceSource}\n# private-attempt-marker-7391`);
  assert.equal(result.phase, "python_transfer");
  assert.equal(result.pythonForm, "transfer");
  assert.equal(result.primaryStatus, "complete");
  assert.deepEqual(result.sourceFields, custodyLedgerTransferSourceFields);
  assert.deepEqual(result.expeditionFields, { classification: "", owner: "" });
  assert.deepEqual(Object.values(result.pythonChecks), [false, false, false, false, false, false]);
  assert.deepEqual(result.causalResult, custodyLedgerCausalResult);
  assert.equal(result.causalResult.owner, "SUIT // PROVISIONAL TRANSLATION");
  assert.match(result.causalResult.text, /Identity-bearing material remains closed/);
  assert.equal(result.unfinishedWorkImage.label, "UNFINISHED WORK IMAGE");
  assert.equal(result.pythonEvidence.masteryStatus, "primary_complete");
  assert.equal(result.campaignCommitEnabled, false);
  assert.equal(result.cityStateDelta, null);
  assert.equal(result.continuation, "continuation");

  const serialized = JSON.stringify(result);
  assert.doesNotMatch(serialized, /learnerSource|rawComparison|private-attempt-marker-7391|print\(/);
  for (const prohibited of ["campaign", "tourEvidence", "cityResponse", "successor", "route", "item", "accessGranted", "externalAction"]) {
    assert.equal(Object.hasOwn(result, prohibited), false, prohibited);
  }
  assert.equal(result.sourceFields.identity, null);
  assert.equal(result.sourceFields.access_requested, false);
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
  assert.equal(recovered.phase, "python_transfer");
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
