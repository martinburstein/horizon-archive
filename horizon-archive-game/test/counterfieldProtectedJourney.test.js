import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";
import rp008Contract from "../../curriculum/readiness/RP-008/contract.json" with { type: "json" };
import rp010Contract from "../../curriculum/readiness/RP-010/contract.json" with { type: "json" };
import {
  OFFSET_REACH_PROTECTED_JOURNEY_VERSION,
  createOffsetReachPersistenceAdapter,
  offsetReachPythonTraceAnswers,
} from "../src/OffsetReachProtectedJourney.js";
import {
  createOccludedFoldPersistenceAdapter,
  occludedFoldActions,
  occludedFoldExplanationAnswers,
  occludedFoldPythonTraceAnswers,
  occludedFoldReferenceAnswers,
  occludedFoldReferenceSources,
  runOccludedFoldProtectedJourneySmoke,
} from "../src/OccludedFoldProtectedJourney.js";
import {
  COUNTERFIELD_PROTECTED_JOURNEY_VERSION,
  counterfieldActions,
  counterfieldExplanationAnswers,
  counterfieldPresentation,
  counterfieldPythonTraceAnswers,
  counterfieldReferenceAnswers,
  counterfieldReferenceSources,
  createCounterfieldPersistenceAdapter,
  deriveCounterfieldLookContinuation,
  deriveCounterfieldResume,
  deriveCounterfieldSafeReturn,
  evaluateCounterfieldClientFlow,
  evaluateCounterfieldPython,
  evaluateCounterfieldPythonTrace,
  runCounterfieldProtectedJourneySmoke,
} from "../src/CounterfieldProtectedJourney.js";

const observations = [
  "recurrent_adjacency", "incomplete_ordered_change", "cross_scale_correspondence",
  "ordinary_unmatched_feature", "multi_candidate_relation", "unavailable_margin", "layered_stewardship",
];

function record(packetId, mappingId, id, form, dimensions) {
  return {
    packet_id: packetId, mapping_id: mappingId, form, skill_or_objective_id: id,
    dimension_correctness: Object.fromEntries(dimensions.map((dimension) => [dimension, true])),
    attempt_count: 1, hint_level: 0, confidence: null, misconception_tags: [], mastery_status: "mastered",
  };
}

function verifiedRp008Completion() {
  const dimensions = rp008Contract.ai901_contract.dimensions;
  const aiShape = (form) => rp008Contract.ai901_contract.forms[form]
    .flatMap((item) => dimensions.map((dimension) => `${item.id}.${dimension}`));
  const candidate = {
    version: OFFSET_REACH_PROTECTED_JOURNEY_VERSION,
    packetId: "RP-008", mappingId: "RP008-A3-OFFSET-REACH", checkpoint: "offset_reach_complete",
    continuation: "continuation", cityStateDelta: null, externalStateDelta: null, successor: null,
    retainedRp007Summary: {
      checkpoint: "braided_verge_complete", continuities: "distinct_visible_continuities",
      association: "recurrent_exposed_association", difference: "one_bounded_difference",
      junction: "closed_junction_unavailable", unity: null, cause: null, purpose: null,
    },
    note: {
      observations: ["familiar_continuity_trace", "recurring_familiar_contact", "comparable_non_contact", "cross_family_contact", "unavailable_case", "layered_stewardship"],
      retained_local_association: true, recurring_familiar_contact: 1, comparable_non_contact: 1,
      cross_family_contact: 1, unavailable_case: 1, universal: null, exclusive: null, unity: null,
      cause: null, purpose: null, stewardship: "layered_stewardship_observed", replicas: "sanitized_precomputed_only",
    },
    evidence: [
      record("RP-008", "RP008-A3-OFFSET-REACH", "PY-016", "primary", rp008Contract.python_contract.checks),
      record("RP-008", "RP008-A3-OFFSET-REACH", "PY-016", "trace", Object.keys(offsetReachPythonTraceAnswers)),
      record("RP-008", "RP008-A3-OFFSET-REACH", "PY-016", "transfer", rp008Contract.python_contract.checks),
      record("RP-008", "RP008-A3-OFFSET-REACH", "RP008-INFORMATION-EXTRACTION-01", "primary", aiShape("primary")),
      record("RP-008", "RP008-A3-OFFSET-REACH", "RP008-INFORMATION-EXTRACTION-01", "retrieval", aiShape("retrieval")),
      record("RP-008", "RP008-A3-OFFSET-REACH", "RP008-INFORMATION-EXTRACTION-01", "transfer", aiShape("transfer")),
      record("RP-008", "RP008-A3-OFFSET-REACH", "RP008-INFORMATION-EXTRACTION-01", "selection_boundary_explanation", ["selection_boundary"]),
      record("RP-008", "RP008-A3-OFFSET-REACH", "RP008-INFORMATION-EXTRACTION-01", "inference_boundary_explanation", ["inference_boundary"]),
    ],
  };
  return createOffsetReachPersistenceAdapter().write(candidate).value;
}

let cachedRp009;
function verifiedRp009Completion() {
  if (cachedRp009) return cachedRp009;
  const result = runOccludedFoldProtectedJourneySmoke({
    predecessor: verifiedRp008Completion(),
    prerequisites: {
      python: { lessonId: "L-03-03", skillId: "PY-017", readinessStatus: "ready", prerequisiteSkillIds: ["PY-009", "PY-012", "PY-016"] },
      ai901: { lessonId: "L-05-02", objectiveId: "AI901-D2-O1", objectiveReady: true, readinessStatus: "ready", sourceLessonIds: ["L-06-01"] },
    },
    acceptedCampaign: { continuation: "continuation", cityStateDelta: null, externalStateDelta: null, successor: null, acceptedBoundary: "city_threshold" },
    tour: { mode: "demo_tour", cursor: "rp009", noCredit: true },
    orientAction: occludedFoldActions.orient,
    inspectAction: occludedFoldActions.inspectEvidence,
    observationOrder: ["three_near_margins", "bounded_signature_correspondences", "unmatched_exposed_record", "ambiguous_candidate_record", "unavailable_outer_margin", "layered_edge_stewardship"],
    runAction: occludedFoldActions.runReconciliation,
    pythonPrimarySource: occludedFoldReferenceSources.primary,
    pythonTraceAnswers: occludedFoldPythonTraceAnswers,
    pythonTransferSource: occludedFoldReferenceSources.transfer,
    promptAnswers: occludedFoldReferenceAnswers.prompt,
    explanations: occludedFoldExplanationAnswers,
    reviewAction: occludedFoldActions.finalizeReview,
    saveAction: occludedFoldActions.saveLedger,
    earlyReturnAction: occludedFoldActions.returnOffsetReach,
    finalReturnAction: occludedFoldActions.returnCityThreshold,
    lookContinuationAction: occludedFoldActions.lookContinuation,
  });
  cachedRp009 = createOccludedFoldPersistenceAdapter().write(result.saved).value;
  return cachedRp009;
}

function fixture(overrides = {}) {
  return {
    predecessor: verifiedRp009Completion(),
    prerequisites: {
      python: { skillId: "PY-018", readinessStatus: "ready", sourceLessonIds: ["L-03-03", "L-05-03"] },
      ai901: { objectiveId: "AI901-D2-O3", readinessStatus: "ready", sourceLessonIds: ["L-05-03", "L-06-01"] },
    },
    acceptedCampaign: { continuation: "continuation", cityStateDelta: null, externalStateDelta: null, successor: null },
    tour: { mode: "demo_tour", cursor: "rp010", noCredit: true },
    orientAction: counterfieldActions.orient,
    inspectAction: counterfieldActions.inspectEvidence,
    observationOrder: observations,
    runAction: counterfieldActions.runExchange,
    pythonPrimarySource: counterfieldReferenceSources.primary,
    pythonTraceAnswers: counterfieldPythonTraceAnswers,
    pythonTransferSource: counterfieldReferenceSources.transfer,
    clientAnswers: counterfieldReferenceAnswers.client,
    explanations: counterfieldExplanationAnswers,
    reviewAction: counterfieldActions.finalizeReview,
    saveAction: counterfieldActions.saveRegister,
    earlyReturnAction: counterfieldActions.returnOccludedFold,
    finalReturnAction: counterfieldActions.returnCityThreshold,
    lookContinuationAction: counterfieldActions.lookContinuation,
    ...overrides,
  };
}

function permutations(values) {
  if (values.length <= 1) return [values];
  return values.flatMap((value, index) => permutations([...values.slice(0, index), ...values.slice(index + 1)])
    .map((rest) => [value, ...rest]));
}

test("one pure protected caller traverses CF-00 through CF-30 from exact RP-009", () => {
  const input = fixture();
  const before = JSON.stringify(input);
  const result = runCounterfieldProtectedJourneySmoke(input);
  assert.equal(result.version, COUNTERFIELD_PROTECTED_JOURNEY_VERSION);
  assert.equal(result.status, "protected_reference_complete");
  assert.equal(result.routable, false);
  assert.deepEqual(result.timeline, ["CF-00 ARRIVE + ORIENT", "CF-10 SURVEY SEPARATE DISTRICTS", "CF-20 BOUND EXCHANGE + SAVE", "CF-30 VERIFY + RETURN"]);
  assert.equal(result.saved.retainedRp007Summary.checkpoint, "braided_verge_complete");
  assert.equal(result.saved.retainedRp008Summary.checkpoint, "offset_reach_complete");
  assert.deepEqual(result.saved.retainedRp009Ledger.observations, ["three_near_margins", "bounded_signature_correspondences", "unmatched_exposed_record", "ambiguous_candidate_record", "unavailable_outer_margin", "layered_edge_stewardship"]);
  assert.equal(result.saved.checkpoint, "counterfield_complete");
  assert.deepEqual(result.restored.replayedEvents, []);
  assert.equal(JSON.stringify(input), before);
});

test("all 5,040 observation orders converge and revisits are idempotent", () => {
  const orders = permutations(observations);
  assert.equal(orders.length, 5040);
  for (const observationOrder of orders) {
    const result = runCounterfieldProtectedJourneySmoke(fixture({ observationOrder }));
    assert.deepEqual(result.saved.scopeRegister.observations, observations);
    assert.deepEqual(Object.keys(result.saved.scopeRegister.exchange.response), ["status_code", "content_type", "supported", "counterevidence", "ambiguous", "unavailable"]);
  }
  const revisited = runCounterfieldProtectedJourneySmoke(fixture({ observationOrder: [observations[0], ...observations, observations[3], observations[0]] }));
  assert.equal(revisited.revisitCount, 3);
  assert.deepEqual(revisited.saved.scopeRegister.observations, observations);
});

test("strict independent PY-018 primary, trace, and blank transfer pass 8/8", () => {
  for (const [form, source] of Object.entries(counterfieldReferenceSources)) {
    const result = evaluateCounterfieldPython(form, source);
    assert.equal(result.score, 8);
    assert.equal(result.passed, true);
    assert.equal(result.transientAudit.cleared, true);
  }
  assert.equal(evaluateCounterfieldPythonTrace(counterfieldPythonTraceAnswers).score, 8);
  assert.notEqual(counterfieldReferenceSources.primary, counterfieldReferenceSources.transfer);
});

test("PY-018 mutations, collapsed evidence, filled limits, output, remote surface, and carried transfer fail closed", () => {
  const primary = counterfieldReferenceSources.primary;
  const probes = [
    primary.replace('"method": "POST"', '"method": "GET"'),
    primary.replace('"counterevidence": response_record["body"]["counterevidence"]', '"counterevidence": []'),
    primary.replace('"purpose": None,', '"purpose": "known",'),
    `${primary}\nprint(exchange_summary)`,
    `${primary}\nfetch = "remote"`,
  ];
  for (const source of probes) assert.equal(evaluateCounterfieldPython("primary", source).passed, false);
  assert.equal(evaluateCounterfieldPython("transfer", primary).passed, false);
  assert.throws(() => runCounterfieldProtectedJourneySmoke(fixture({ pythonPrimarySource: probes[2] })), (error) => {
    assert.equal(error.recovery.remediationSource, "failed_python_checks_only");
    assert.equal(error.recovery.answerIncluded, false);
    assert.equal(error.recovery.retryBlank, true);
    assert.deepEqual(error.recovery.failedCheckIds, ["request_and_response_inputs_preserved_exactly", "unsupported_limits_remain_none"]);
    return true;
  });
});

test("client-flow primary, retrieval, transfer, and both explanations are independent", () => {
  for (const form of ["primary", "retrieval", "transfer"]) {
    const result = evaluateCounterfieldClientFlow(form, counterfieldReferenceAnswers.client[form]);
    assert.equal(result.score, 8);
    assert.equal(result.passed, true);
    assert.deepEqual(result.misconceptionTags, []);
  }
  assert.equal(evaluateCounterfieldClientFlow("transfer", {}).score, 0);
  assert.throws(() => runCounterfieldProtectedJourneySmoke(fixture({ explanations: { ...counterfieldExplanationAnswers, truthAuthorityBoundary: "valid_flow_proves_truth" } })));
});

test("AI recovery uses only an actually scored miss and reveals no answer", () => {
  const wrong = structuredClone(counterfieldReferenceAnswers.client);
  wrong.primary.P01.client_step = "endpoint_and_credential_are_model_input";
  assert.throws(() => runCounterfieldProtectedJourneySmoke(fixture({ clientAnswers: wrong })), (error) => {
    assert.equal(error.recovery.boundary, "clientPrimary");
    assert.equal(error.recovery.answerIncluded, false);
    assert.equal(error.recovery.remediationSource, "scored_misconception_tags_only");
    assert.deepEqual(error.recovery.remediationTags, ["endpoint_and_credential_are_model_input"]);
    return true;
  });
});

test("private, inferred, remote, forged, Tour, predecessor, and partial-observation bypasses fail closed", () => {
  const probes = [
    { flags: ["scene_derived"] }, { flags: ["presentation_derived"] }, { flags: ["accessibility_derived"] },
    { flags: ["tour_derived"] }, { flags: ["remote_operation"] }, { privateNotes: "private_notes" },
    { credentials: "credentials" }, { endpoint: "endpoint" }, { flags: ["forged"] },
  ];
  for (const probe of probes) assert.throws(() => runCounterfieldProtectedJourneySmoke(fixture(probe)));
  assert.throws(() => runCounterfieldProtectedJourneySmoke(fixture({ predecessor: {} })));
  assert.throws(() => runCounterfieldProtectedJourneySmoke(fixture({ observationOrder: observations.slice(0, 6) })));
});

test("save is exact, conjunctive, atomic, and rejected writes remain byte-stable", () => {
  const result = runCounterfieldProtectedJourneySmoke(fixture());
  assert.deepEqual(Object.keys(result.saved), ["version", "packetId", "mappingId", "checkpoint", "continuation", "cityStateDelta", "externalStateDelta", "successor", "retainedRp007Summary", "retainedRp008Summary", "retainedRp009Ledger", "scopeRegister", "evidence"]);
  assert.deepEqual(Object.keys(result.saved.scopeRegister.exchange.unsupported), ["identity", "topology", "continuity", "transformation", "unity", "synchronization", "chronology", "cause", "purpose"]);
  const adapter = createCounterfieldPersistenceAdapter(result.saved);
  const bytes = adapter.bytes();
  const mutations = [
    { ...result.saved, learner_source: "private" },
    { ...result.saved, scopeRegister: { ...result.saved.scopeRegister, observations: observations.slice(0, 6) } },
    { ...result.saved, scopeRegister: { ...result.saved.scopeRegister, exchange: { ...result.saved.scopeRegister.exchange, response: { ...result.saved.scopeRegister.exchange.response, supported: [] } } } },
    { ...result.saved, retainedRp009Ledger: { ...result.saved.retainedRp009Ledger, reconciliation: { ...result.saved.retainedRp009Ledger.reconciliation, cause: "filled" } } },
    { ...result.saved, successor: "RP-011" },
    { ...result.saved, evidence: result.saved.evidence.slice(0, 7) },
  ];
  for (const mutation of mutations) {
    const rejected = adapter.write(mutation);
    assert.equal(rejected.status, "rejected");
    assert.equal(rejected.byteStable, true);
    assert.equal(adapter.bytes(), bytes);
  }
});

test("resume clears private/transient work, restore is replay-free, returns are safe, and LOOK stays destinationless", () => {
  const completed = runCounterfieldProtectedJourneySmoke(fixture());
  const partial = deriveCounterfieldResume({
    retainedRp007Summary: completed.saved.retainedRp007Summary,
    retainedRp008Summary: completed.saved.retainedRp008Summary,
    retainedRp009Ledger: completed.saved.retainedRp009Ledger,
    finalized: { pythonPrimary: true, pythonTrace: true, pythonTransfer: false, clientPrimary: true },
    learner_source: "private", request_record: "private", response_record: "private",
  });
  assert.equal(partial.phase, "CF-10 SURVEY SEPARATE DISTRICTS");
  assert.equal(partial.completion.pythonPrimary, true);
  assert.equal(partial.completion.pythonTrace, true);
  assert.equal(partial.completion.pythonTransfer, false);
  assert.equal(partial.completion.clientPrimary, false);
  assert.equal(partial.focusIntent.group, "observations");
  assert.equal(partial.transientWorkCleared, true);
  assert.equal(partial.privateWorkCleared, true);
  assert.deepEqual(deriveCounterfieldResume(completed.saved).replayedEvents, []);
  assert.equal(deriveCounterfieldSafeReturn(counterfieldActions.returnOccludedFold).target, "RP-009");
  assert.equal(deriveCounterfieldSafeReturn(counterfieldActions.returnCityThreshold).target, "CITY_THRESHOLD");
  assert.throws(() => deriveCounterfieldSafeReturn("OPEN RP-011"));
  const look = deriveCounterfieldLookContinuation(counterfieldActions.lookContinuation);
  assert.equal(look.destination, null);
  assert.equal(look.routeOpened, false);
  assert.equal(look.successor, null);
  assert.throws(() => deriveCounterfieldLookContinuation("TRAVEL"));
});

test("Tour, world, authority, record provenance, four evidence classes, and nine None limits remain exact", () => {
  const result = runCounterfieldProtectedJourneySmoke(fixture());
  assert.equal(result.tourProbe.saveStatus, "tour_preview_only");
  assert.equal(result.tourProbe.adapterValue, null);
  assert.equal(result.cityStateDelta, null);
  assert.equal(result.externalStateDelta, null);
  assert.equal(result.worldStateChanged, false);
  assert.equal(result.worldClockDelta, null);
  assert.equal(result.successor, null);
  assert.equal(result.authorityGranted, false);
  assert.equal(result.examCreditGranted, false);
  assert.equal(result.examGuarantee, false);
  assert.equal(result.offlineOnly, true);
  assert.equal(result.recordInputsPreserved, true);
  assert.equal(result.evidenceClassesPreserved, true);
  assert.deepEqual(Object.keys(result.saved.scopeRegister.exchange.response).slice(2), ["supported", "counterevidence", "ambiguous", "unavailable"]);
  for (const key of ["identity", "topology", "continuity", "transformation", "unity", "synchronization", "chronology", "cause", "purpose"]) {
    assert.equal(result.saved.scopeRegister.exchange.unsupported[key], null);
  }
});

test("canonical sources/forms match frozen RP-010 authorities and presentation remains accessible", async () => {
  const [primary, transfer] = await Promise.all([
    readFile(new URL("../../curriculum/readiness/RP-010/reference_primary.py", import.meta.url), "utf8"),
    readFile(new URL("../../curriculum/readiness/RP-010/reference_transfer.py", import.meta.url), "utf8"),
  ]);
  assert.equal(counterfieldReferenceSources.primary.trim(), primary.trim());
  assert.equal(counterfieldReferenceSources.transfer.trim(), transfer.trim());
  assert.equal(rp010Contract.python_contract.skill_id, "PY-018");
  assert.equal(rp010Contract.ai901_contract.objective_id, "AI901-D2-O3");
  assert.equal(rp010Contract.ai901_contract.check_id, "RP010-FOUNDRY-CLIENT-FLOW-01");
  assert.equal(rp010Contract.authority_contract.offline_only, true);
  assert.equal(rp010Contract.authority_contract.no_exam_guarantee, true);
  assert.equal(counterfieldPresentation.responsive, true);
  assert.equal(counterfieldPresentation.fixedLegacyViewportRequired, false);
  assert.ok(counterfieldPresentation.accessibility.minTargetCssPx >= 44);
  assert.equal(counterfieldPresentation.accessibility.oneActiveOwnerGroup, true);
  assert.equal(counterfieldPresentation.accessibility.meaningUsesColorMotionAudioPositionScaleSequenceOrLayoutAlone, false);
});

test("protected module remains absent from App, main, browser authority, and production bundle", async () => {
  const [app, main] = await Promise.all([
    readFile(new URL("../src/App.jsx", import.meta.url), "utf8"),
    readFile(new URL("../src/main.jsx", import.meta.url), "utf8"),
  ]);
  assert.doesNotMatch(`${app}\n${main}`, /CounterfieldProtectedJourney|rp010\.protected-journey\.v1/);
  const source = await readFile(new URL("../src/CounterfieldProtectedJourney.js", import.meta.url), "utf8");
  assert.doesNotMatch(source, /localStorage|sessionStorage|fetch\(|XMLHttpRequest|https?:\/\//);
  const distFiles = await readdir(new URL("../dist/assets", import.meta.url));
  for (const file of distFiles.filter((name) => /\.(?:js|css)$/.test(name))) {
    const bytes = await readFile(new URL(`../dist/assets/${file}`, import.meta.url), "utf8");
    assert.doesNotMatch(bytes, /CounterfieldProtectedJourney|rp010\.protected-journey\.v1/);
  }
});
