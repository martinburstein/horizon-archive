import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";
import rp010Contract from "../../curriculum/readiness/RP-010/contract.json" with { type: "json" };
import rp011Contract from "../../curriculum/readiness/RP-011/contract.json" with { type: "json" };
import {
  COUNTERFIELD_PROTECTED_JOURNEY_VERSION,
  counterfieldPythonTraceAnswers,
  createCounterfieldPersistenceAdapter,
} from "../src/CounterfieldProtectedJourney.js";
import {
  UNBORROWED_REACH_PROTECTED_JOURNEY_VERSION,
  createUnborrowedReachPersistenceAdapter,
  deriveUnborrowedReachLook,
  deriveUnborrowedReachResume,
  deriveUnborrowedReachSafeReturn,
  evaluateUnborrowedReachAgentSurfaces,
  evaluateUnborrowedReachPython,
  evaluateUnborrowedReachPythonTrace,
  evaluateUnborrowedReachReconciliation,
  runUnborrowedReachProtectedJourneySmoke,
  unborrowedReachActions,
  unborrowedReachExplanationAnswers,
  unborrowedReachLimitIds,
  unborrowedReachObservationIds,
  unborrowedReachPresentation,
  unborrowedReachPythonTraceAnswers,
  unborrowedReachReconciliationMethodIds,
  unborrowedReachReferenceAnswers,
  unborrowedReachReferenceSources,
  unborrowedReachReopenIds,
} from "../src/UnborrowedReachProtectedJourney.js";

function record(packetId, mappingId, id, form, dimensions) {
  return {
    packet_id: packetId, mapping_id: mappingId, form, skill_or_objective_id: id,
    dimension_correctness: Object.fromEntries(dimensions.map((dimension) => [dimension, true])),
    attempt_count: 1, hint_level: 0, confidence: null, misconception_tags: [], mastery_status: "mastered",
  };
}

let cachedRp010;
function verifiedRp010Completion() {
  if (cachedRp010) return cachedRp010;
  const aiShape = (form) => rp010Contract.ai901_contract.forms[form]
    .flatMap((item) => rp010Contract.ai901_contract.dimensions.map((dimension) => `${item.id}.${dimension}`));
  const candidate = {
    version: COUNTERFIELD_PROTECTED_JOURNEY_VERSION,
    packetId: "RP-010",
    mappingId: rp010Contract.mapping_id,
    checkpoint: "counterfield_complete",
    continuation: "continuation",
    cityStateDelta: null,
    externalStateDelta: null,
    successor: null,
    retainedRp007Summary: {
      checkpoint: "braided_verge_complete", continuities: "distinct_visible_continuities",
      association: "recurrent_exposed_association", difference: "one_bounded_difference",
      junction: "closed_junction_unavailable", unity: null, cause: null, purpose: null,
    },
    retainedRp008Summary: {
      checkpoint: "offset_reach_complete", retained_local_association: true,
      recurring_familiar_contact: 1, comparable_non_contact: 1, cross_family_contact: 1,
      unavailable_case: 1, universal: null, exclusive: null, unity: null, cause: null, purpose: null,
    },
    retainedRp009Ledger: {
      observations: ["three_near_margins", "bounded_signature_correspondences", "unmatched_exposed_record", "ambiguous_candidate_record", "unavailable_outer_margin", "layered_edge_stewardship"],
      reconciliation: {
        mode: "bounded", correspondence: ["near_lamellar"], unmatched: ["far_unmatched"],
        ambiguous: { far_ambiguous: ["near_lamellar", "near_filament"] }, unavailable: ["outer_margin"],
        identity: null, topology: null, continuity: null, transformation: null, cause: null, purpose: null,
      },
    },
    scopeRegister: {
      observations: ["recurrent_adjacency", "incomplete_ordered_change", "cross_scale_correspondence", "ordinary_unmatched_feature", "multi_candidate_relation", "unavailable_margin", "layered_stewardship"],
      exchange: {
        request: { method: "POST", route_label: "project_responses", content_type: "application/json", record_ids: ["near_relation", "ordered_gap", "far_correspondence"], scope: "sanitized_exposed_record_replicas" },
        response: { status_code: 200, content_type: "application/json", supported: ["near_relation"], counterevidence: ["far_correspondence"], ambiguous: ["ordered_gap"], unavailable: ["outer_margin"] },
        unsupported: { identity: null, topology: null, continuity: null, transformation: null, unity: null, synchronization: null, chronology: null, cause: null, purpose: null },
      },
    },
    evidence: [
      record("RP-010", rp010Contract.mapping_id, "PY-018", "primary", rp010Contract.python_contract.checks),
      record("RP-010", rp010Contract.mapping_id, "PY-018", "trace", Object.keys(counterfieldPythonTraceAnswers)),
      record("RP-010", rp010Contract.mapping_id, "PY-018", "transfer", rp010Contract.python_contract.checks),
      record("RP-010", rp010Contract.mapping_id, rp010Contract.ai901_contract.check_id, "primary", aiShape("primary")),
      record("RP-010", rp010Contract.mapping_id, rp010Contract.ai901_contract.check_id, "retrieval", aiShape("retrieval")),
      record("RP-010", rp010Contract.mapping_id, rp010Contract.ai901_contract.check_id, "transfer", aiShape("transfer")),
      record("RP-010", rp010Contract.mapping_id, rp010Contract.ai901_contract.check_id, "client_flow_boundary_explanation", ["client_flow_boundary"]),
      record("RP-010", rp010Contract.mapping_id, rp010Contract.ai901_contract.check_id, "truth_authority_boundary_explanation", ["truth_authority_boundary"]),
    ],
  };
  const result = createCounterfieldPersistenceAdapter().write(candidate);
  assert.equal(result.status, "committed");
  cachedRp010 = result.value;
  return cachedRp010;
}

function fixture(overrides = {}) {
  return {
    predecessor: verifiedRp010Completion(),
    prerequisites: {
      python: { skillId: "PY-019", readinessStatus: "ready", sourceLessonIds: ["L-05-03"] },
      ai901: { objectiveId: "AI901-D2-O4", readinessStatus: "ready", sourceLessonIds: ["L-05-04", "L-06-01"] },
    },
    acceptedCampaign: { continuation: "continuation", cityStateDelta: null, worldStateDelta: null, externalStateDelta: null, successor: null },
    tour: { mode: "demo_tour", cursor: "rp011", noCredit: true },
    isolateAction: unborrowedReachActions.isolate,
    inspectAction: unborrowedReachActions.inspectFresh,
    observationOrder: [...unborrowedReachObservationIds],
    runAction: unborrowedReachActions.runLocalWork,
    pythonPrimarySource: unborrowedReachReferenceSources.primary,
    pythonTraceAnswers: unborrowedReachPythonTraceAnswers,
    pythonTransferSource: unborrowedReachReferenceSources.transfer,
    agentAnswers: unborrowedReachReferenceAnswers.agent,
    explanations: unborrowedReachExplanationAnswers,
    freshReviewAction: unborrowedReachActions.reviewFresh,
    freshFinalizeAction: unborrowedReachActions.finalizeFresh,
    reopenOrder: [...unborrowedReachReopenIds],
    reconcileAction: unborrowedReachActions.reconcile,
    reconciliation: unborrowedReachReferenceAnswers.reconciliation,
    reconciliationReviewAction: unborrowedReachActions.reviewReconciliation,
    saveAction: unborrowedReachActions.saveReconciliation,
    earlyReturnAction: unborrowedReachActions.returnCounterfield,
    finalReturnAction: unborrowedReachActions.returnCityThreshold,
    lookAction: unborrowedReachActions.lookOutward,
    ...overrides,
  };
}

function permutations(values) {
  if (values.length <= 1) return [values];
  return values.flatMap((value, index) => permutations([...values.slice(0, index), ...values.slice(index + 1)])
    .map((rest) => [value, ...rest]));
}

test("one pure protected caller traverses UR-00 through UR-30 only from exact RP-010", () => {
  const input = fixture();
  const before = JSON.stringify(input);
  const result = runUnborrowedReachProtectedJourneySmoke(input);
  assert.equal(result.version, UNBORROWED_REACH_PROTECTED_JOURNEY_VERSION);
  assert.equal(result.status, "protected_reference_complete");
  assert.equal(result.routable, false);
  assert.deepEqual(result.timeline, ["UR-00 ARRIVE + ISOLATE", "UR-10 INSPECT FRESH EVIDENCE", "UR-20 REVIEW LOCAL WORK + FINALIZE FRESH RECORD", "UR-30 REOPEN + RECONCILE + VERIFY + RETURN"]);
  assert.equal(result.freshCheckpoint.checkpoint, "rp011_fresh_finalized");
  assert.equal(result.saved.checkpoint, "rp011_reconciliation_saved");
  assert.deepEqual(result.restored.replayedEvents, []);
  assert.equal(result.recordsRemainSeparate, true);
  assert.equal(result.predecessorRecordBytesPreserved, true);
  assert.equal(JSON.stringify(input), before);
  assert.throws(() => runUnborrowedReachProtectedJourneySmoke(fixture({ predecessor: {} })), /Exact verified RP-010/);
});

test("all 720 fresh-observation orders converge and revisits are idempotent", () => {
  const orders = permutations(unborrowedReachObservationIds);
  assert.equal(orders.length, 720);
  for (const observationOrder of orders) {
    const result = runUnborrowedReachProtectedJourneySmoke(fixture({ observationOrder }));
    assert.deepEqual(result.saved.records.rp011.observations, unborrowedReachObservationIds);
    assert.equal(result.freshCheckpoint.visibility.rp010, "hidden_retained");
  }
  const revisited = runUnborrowedReachProtectedJourneySmoke(fixture({
    observationOrder: [unborrowedReachObservationIds[0], ...unborrowedReachObservationIds, unborrowedReachObservationIds[3], unborrowedReachObservationIds[0]],
  }));
  assert.equal(revisited.observationRevisitCount, 3);
  assert.deepEqual(revisited.saved.records.rp011.observations, unborrowedReachObservationIds);
});

test("all 24 complete-scope reopening orders converge only after fresh finalization", () => {
  const orders = permutations(unborrowedReachReopenIds);
  assert.equal(orders.length, 24);
  for (const reopenOrder of orders) {
    const result = runUnborrowedReachProtectedJourneySmoke(fixture({ reopenOrder }));
    assert.deepEqual(result.saved.reopenedScopes, unborrowedReachReopenIds);
    assert.equal(result.saved.visibility.rp007, "reopened");
    assert.equal(result.freshCheckpoint.visibility.rp007, "hidden_retained");
    assert.deepEqual(result.freshCheckpoint.reopenedScopes, []);
  }
  const revisited = runUnborrowedReachProtectedJourneySmoke(fixture({ reopenOrder: ["RP-007", ...unborrowedReachReopenIds, "RP-010"] }));
  assert.equal(revisited.reopenRevisitCount, 2);
  assert.equal(revisited.noMemoryOfHiddenContentRequired, true);
});

test("strict PY-019 primary, trace, and genuinely blank transfer pass independently", async () => {
  for (const [form, source] of Object.entries(unborrowedReachReferenceSources)) {
    const result = evaluateUnborrowedReachPython(form, source);
    assert.equal(result.score, 8);
    assert.equal(result.passed, true);
    assert.equal(result.transientAudit.cleared, true);
  }
  assert.equal(evaluateUnborrowedReachPythonTrace(unborrowedReachPythonTraceAnswers).score, 8);
  assert.notEqual(unborrowedReachReferenceSources.primary, unborrowedReachReferenceSources.transfer);
  const [primary, transfer] = await Promise.all([
    readFile(new URL("../../curriculum/readiness/RP-011/reference_primary.py", import.meta.url), "utf8"),
    readFile(new URL("../../curriculum/readiness/RP-011/reference_transfer.py", import.meta.url), "utf8"),
  ]);
  assert.equal(unborrowedReachReferenceSources.primary.trim(), primary.trim());
  assert.equal(unborrowedReachReferenceSources.transfer.trim(), transfer.trim());
});

test("PY-019 mutation, carried transfer, filled limits, output, imports, and addresses fail closed", () => {
  const primary = unborrowedReachReferenceSources.primary;
  const probes = [
    primary.replace("request_response_contract", "collapsed_role"),
    primary.replace('"authority": None,', '"authority": "known",'),
    `${primary}\nprint(fresh_integration_record)`,
    `import socket\n${primary}`,
    `${primary}\naddress = "https://example.invalid"`,
  ];
  for (const source of probes) assert.equal(evaluateUnborrowedReachPython("primary", source).passed, false);
  assert.equal(evaluateUnborrowedReachPython("transfer", primary).passed, false);
  assert.throws(() => runUnborrowedReachProtectedJourneySmoke(fixture({ pythonPrimarySource: probes[1] })), (error) => {
    assert.equal(error.recovery.remediationSource, "failed_python_checks_only");
    assert.equal(error.recovery.answerIncluded, false);
    assert.equal(error.recovery.retryBlank, true);
    assert.deepEqual(error.recovery.failedCheckIds, ["supplied_replicas_preserved_exactly", "unsupported_limits_remain_none"]);
    return true;
  });
});

test("agent-surface primary, retrieval, transfer, and both explanations are independent", () => {
  for (const form of ["primary", "retrieval", "transfer"]) {
    const result = evaluateUnborrowedReachAgentSurfaces(form, unborrowedReachReferenceAnswers.agent[form]);
    assert.equal(result.score, 8);
    assert.equal(result.passed, true);
    assert.deepEqual(result.misconceptionTags, []);
  }
  assert.equal(evaluateUnborrowedReachAgentSurfaces("transfer", {}).score, 0);
  assert.throws(() => runUnborrowedReachProtectedJourneySmoke(fixture({
    explanations: { ...unborrowedReachExplanationAnswers, truthPermissionBoundary: "returned_result_proves_truth" },
  })), (error) => error.recovery.boundary === "truthPermissionBoundaryExplanation");
});

test("agent remediation comes only from an actually scored case and dimension miss", () => {
  const wrong = structuredClone(unborrowedReachReferenceAnswers.agent);
  wrong.primary.P01.agent_surface = "portal_authoring_equals_client_invocation";
  assert.throws(() => runUnborrowedReachProtectedJourneySmoke(fixture({ agentAnswers: wrong })), (error) => {
    assert.equal(error.recovery.boundary, "agentPrimary");
    assert.equal(error.recovery.answerIncluded, false);
    assert.equal(error.recovery.remediationSource, "scored_misconception_tags_only");
    assert.deepEqual(error.recovery.remediationTags, ["portal_authoring_equals_client_invocation"]);
    return true;
  });
});

test("fresh finalization is conjunctive, checksummed, hidden-retained, and byte-stable on rejection", () => {
  const result = runUnborrowedReachProtectedJourneySmoke(fixture());
  assert.equal(result.freshCheckpoint.checkpoint, "rp011_fresh_finalized");
  assert.match(result.freshCheckpoint.checksum, /^fnv1a32-[0-9a-f]{8}$/);
  assert.deepEqual(result.freshCheckpoint.visibility, { rp007: "hidden_retained", rp008: "hidden_retained", rp009: "hidden_retained", rp010: "hidden_retained", rp011: "current" });
  assert.deepEqual(Object.keys(result.freshCheckpoint.records), ["rp007", "rp008", "rp009", "rp010", "rp011"]);
  assert.deepEqual(result.freshCheckpoint.records.rp011.unknowns, Object.fromEntries(unborrowedReachLimitIds.map((id) => [id, null])));
  const adapter = createUnborrowedReachPersistenceAdapter(result.freshCheckpoint);
  const bytes = adapter.bytes();
  for (const mutation of [
    { ...result.freshCheckpoint, learner_source: "private" },
    { ...result.freshCheckpoint, checkpoint: "rp011_reconciliation_saved" },
    { ...result.freshCheckpoint, successor: "RP-012" },
    { ...result.freshCheckpoint, visibility: { ...result.freshCheckpoint.visibility, rp010: "reopened" } },
    { ...result.freshCheckpoint, records: { ...result.freshCheckpoint.records, rp011: { ...result.freshCheckpoint.records.rp011, provenance: "prior_record" } } },
  ]) {
    const rejected = adapter.write(mutation);
    assert.equal(rejected.status, "rejected");
    assert.equal(rejected.byteStable, true);
    assert.equal(adapter.bytes(), bytes);
  }
});

test("final checkpoint keeps five records separate and reconciliation exact at 6 methods and 12 None limits", () => {
  const result = runUnborrowedReachProtectedJourneySmoke(fixture());
  assert.match(result.saved.checksum, /^fnv1a32-[0-9a-f]{8}$/);
  assert.deepEqual(Object.keys(result.saved.records), ["rp007", "rp008", "rp009", "rp010", "rp011"]);
  assert.deepEqual(Object.keys(result.saved.reconciliation.methods), unborrowedReachReconciliationMethodIds);
  assert.equal(Object.values(result.saved.reconciliation.methods).filter(Boolean).length, 6);
  assert.deepEqual(Object.keys(result.saved.reconciliation.limits), unborrowedReachLimitIds);
  assert.ok(Object.values(result.saved.reconciliation.limits).every((value) => value === null));
  assert.equal(JSON.stringify(result.freshCheckpoint.records), JSON.stringify(result.saved.records));
  const adapter = createUnborrowedReachPersistenceAdapter(result.saved);
  const bytes = adapter.bytes();
  const rejected = adapter.write({ ...result.saved, reconciliation: { ...result.saved.reconciliation, limits: { ...result.saved.reconciliation.limits, readiness: "ready" } } });
  assert.equal(rejected.status, "rejected");
  assert.equal(rejected.byteStable, true);
  assert.equal(adapter.bytes(), bytes);
});

test("reconciliation misses only remediate actually missed items and always restore a blank retry", () => {
  const methods = unborrowedReachReconciliationMethodIds.slice(1);
  const limits = { ...unborrowedReachReferenceAnswers.reconciliation.limits, readiness: "ready" };
  const scored = evaluateUnborrowedReachReconciliation({ methods, limits });
  assert.equal(scored.methodScore, 5);
  assert.equal(scored.limitScore, 11);
  assert.deepEqual(scored.failedItemIds, ["method:inspect_fresh_before_prior_conclusions", "limit:readiness"]);
  assert.throws(() => runUnborrowedReachProtectedJourneySmoke(fixture({ reconciliation: { methods, limits } })), (error) => {
    assert.equal(error.recovery.remediationSource, "actually_missed_reconciliation_items_only");
    assert.deepEqual(error.recovery.remediationItems, scored.failedItemIds);
    assert.equal(error.recovery.answerIncluded, false);
    assert.equal(error.recovery.retryBlank, true);
    assert.equal(error.recovery.reconciliationDraftCleared, true);
    assert.equal(error.recovery.attemptsRemaining, "unlimited");
    return true;
  });
});

test("resume is replay-free, recovery is deterministic, returns are reversible, and LOOK is destinationless", () => {
  const result = runUnborrowedReachProtectedJourneySmoke(fixture());
  const fresh = deriveUnborrowedReachResume(result.freshCheckpoint);
  assert.equal(fresh.phase, "UR-30 REOPEN + RECONCILE + VERIFY + RETURN");
  assert.equal(fresh.focusIntent.group, "reopenRP007");
  assert.equal(fresh.priorScopesHiddenRetained, true);
  assert.deepEqual(fresh.replayedEvents, []);
  const final = deriveUnborrowedReachResume(result.saved);
  assert.equal(final.phase, "verified_restore");
  assert.equal(final.focusIntent.group, "restored");
  assert.deepEqual(final.replayedEvents, []);
  const partial = deriveUnborrowedReachResume({ finalized: { pythonPrimary: true }, learner_source: "private" });
  assert.equal(partial.phase, "UR-10 INSPECT FRESH EVIDENCE");
  assert.equal(partial.focusIntent.group, "freshObservations");
  assert.equal(partial.transientWorkCleared, true);
  assert.equal(partial.privateWorkCleared, true);
  assert.equal(deriveUnborrowedReachSafeReturn(unborrowedReachActions.returnCounterfield).target, "RP-010");
  assert.equal(deriveUnborrowedReachSafeReturn(unborrowedReachActions.returnCityThreshold).target, "CITY_THRESHOLD");
  assert.throws(() => deriveUnborrowedReachSafeReturn("OPEN RP-012"));
  const look = deriveUnborrowedReachLook(unborrowedReachActions.lookOutward);
  assert.equal(look.destination, null);
  assert.equal(look.routeOpened, false);
  assert.equal(look.persisted, false);
  assert.equal(look.evidenceGranted, false);
  assert.throws(() => deriveUnborrowedReachLook("TRAVEL"));
});

test("forged, stale, private, remote, partial, Tour, successor, and implicit evidence fail closed", () => {
  const probes = [
    { flags: ["scene_derived"] }, { flags: ["visibility_derived"] }, { flags: ["tour_derived"] },
    { flags: ["remote"] }, { privateNotes: "private" }, { credentials: "credential" },
    { endpoint: "endpoint" }, { agentIdentifier: "agent_identifier" }, { toolResult: "tool_result" },
    { priorRecordContent: "prior_record_content" }, { flags: ["successor_bearing"] },
  ];
  for (const probe of probes) assert.throws(() => runUnborrowedReachProtectedJourneySmoke(fixture(probe)));
  assert.throws(() => runUnborrowedReachProtectedJourneySmoke(fixture({ observationOrder: unborrowedReachObservationIds.slice(0, 5) })));
  assert.throws(() => runUnborrowedReachProtectedJourneySmoke(fixture({ reopenOrder: unborrowedReachReopenIds.slice(0, 3) })));
  assert.throws(() => runUnborrowedReachProtectedJourneySmoke(fixture({ acceptedCampaign: { ...fixture().acceptedCampaign, successor: "RP-012" } })));
});

test("Tour, SC-12, visibility, execution, save display, focus, authority, and world state remain zero-credit", () => {
  const result = runUnborrowedReachProtectedJourneySmoke(fixture());
  for (const key of [
    "sceneEvidenceUsed", "visibilityEvidenceUsed", "reopeningEvidenceUsed", "executionEvidenceUsed",
    "saveRestoreDisplayEvidenceUsed", "confidenceEvidenceUsed", "timingEvidenceUsed", "focusEvidenceUsed",
    "accessibilityEvidenceUsed", "storyProgressEvidenceUsed", "tourEvidenceUsed", "authorityGranted",
    "readinessVerdictGranted", "examCreditGranted", "examGuarantee", "worldStateChanged",
  ]) assert.equal(result[key], false, key);
  assert.equal(result.tourProbe.adapterValue, null);
  assert.equal(result.tourProbe.freshRecordFinalized, false);
  assert.equal(result.tourProbe.scopesReopened, false);
  assert.equal(result.tourProbe.reconciliationFinalized, false);
  assert.equal(result.cityStateDelta, null);
  assert.equal(result.worldStateDelta, null);
  assert.equal(result.externalStateDelta, null);
  assert.equal(result.worldClockDelta, null);
  assert.equal(result.successor, null);
  assert.equal(result.offlineOnly, true);
});

test("frozen RP-011 authorities and accessible protected presentation remain exact", () => {
  assert.equal(rp011Contract.status, "SOLIDIFIED");
  assert.equal(rp011Contract.python_contract.skill_id, "PY-019");
  assert.equal(rp011Contract.ai901_contract.objective_id, "AI901-D2-O4");
  assert.equal(rp011Contract.ai901_contract.check_id, "RP011-SINGLE-AGENT-SURFACES-01");
  assert.equal(rp011Contract.authority_contract.offline_only, true);
  assert.equal(rp011Contract.authority_contract.no_exam_guarantee, true);
  assert.equal(unborrowedReachPresentation.sceneBoard, "SC-12");
  assert.equal(unborrowedReachPresentation.invariantWorld, true);
  assert.equal(unborrowedReachPresentation.worldMasters.length, 2);
  assert.ok(unborrowedReachPresentation.accessibility.minTargetCssPx >= 44);
  assert.equal(unborrowedReachPresentation.accessibility.oneActiveOwnerGroup, true);
  assert.equal(unborrowedReachPresentation.accessibility.completePriorScopesOneAtATime, true);
  assert.equal(unborrowedReachPresentation.accessibility.meaningUsesColorMotionAudioPositionScaleSequenceLayoutOrMemoryAlone, false);
});

test("protected module remains absent from App, main, routes, browser authority, and production bundle", async () => {
  const [app, main, source] = await Promise.all([
    readFile(new URL("../src/App.jsx", import.meta.url), "utf8"),
    readFile(new URL("../src/main.jsx", import.meta.url), "utf8"),
    readFile(new URL("../src/UnborrowedReachProtectedJourney.js", import.meta.url), "utf8"),
  ]);
  assert.doesNotMatch(`${app}\n${main}`, /UnborrowedReachProtectedJourney|RP-011|SC-12|rp011_fresh_finalized|rp011_reconciliation_saved/);
  assert.doesNotMatch(source, /localStorage|sessionStorage|fetch\(|XMLHttpRequest|https?:\/\//);
  const distFiles = await readdir(new URL("../dist/assets", import.meta.url));
  for (const file of distFiles.filter((name) => /\.(?:js|css)$/.test(name))) {
    const bytes = await readFile(new URL(`../dist/assets/${file}`, import.meta.url), "utf8");
    assert.doesNotMatch(bytes, /UnborrowedReachProtectedJourney|rp011_fresh_finalized|UR-00 ARRIVE|RP011-SINGLE-AGENT-SURFACES-01/);
  }
});
