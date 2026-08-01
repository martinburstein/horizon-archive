import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { performance } from "node:perf_hooks";
import test from "node:test";
import rp008Contract from "../../curriculum/readiness/RP-008/contract.json" with { type: "json" };
import rp009Contract from "../../curriculum/readiness/RP-009/contract.json" with { type: "json" };
import {
  OFFSET_REACH_PROTECTED_JOURNEY_VERSION,
  createOffsetReachPersistenceAdapter,
  offsetReachPythonTraceAnswers,
} from "../src/OffsetReachProtectedJourney.js";
import {
  OCCLUDED_FOLD_PROTECTED_JOURNEY_VERSION,
  createOccludedFoldPersistenceAdapter,
  deriveOccludedFoldLookContinuation,
  deriveOccludedFoldResume,
  deriveOccludedFoldSafeReturn,
  evaluateOccludedFoldPromptBoundary,
  evaluateOccludedFoldPython,
  evaluateOccludedFoldPythonTrace,
  occludedFoldActions,
  occludedFoldExplanationAnswers,
  occludedFoldPresentation,
  occludedFoldPythonTraceAnswers,
  occludedFoldReferenceAnswers,
  occludedFoldReferenceSources,
  runOccludedFoldProtectedJourneySmoke,
} from "../src/OccludedFoldProtectedJourney.js";

const observations = [
  "three_near_margins", "bounded_signature_correspondences", "unmatched_exposed_record",
  "ambiguous_candidate_record", "unavailable_outer_margin", "layered_edge_stewardship",
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
  const committed = createOffsetReachPersistenceAdapter().write(candidate);
  assert.equal(committed.status, "committed");
  return committed.value;
}

function fixture(overrides = {}) {
  return {
    predecessor: verifiedRp008Completion(),
    prerequisites: {
      python: { lessonId: "L-03-03", skillId: "PY-017", readinessStatus: "ready", prerequisiteSkillIds: ["PY-009", "PY-012", "PY-016"] },
      ai901: { lessonId: "L-05-02", objectiveId: "AI901-D2-O1", objectiveReady: true, readinessStatus: "ready", sourceLessonIds: ["L-06-01"] },
    },
    acceptedCampaign: { continuation: "continuation", cityStateDelta: null, externalStateDelta: null, successor: null, acceptedBoundary: "city_threshold" },
    tour: { mode: "demo_tour", cursor: "rp009", noCredit: true },
    orientAction: occludedFoldActions.orient,
    inspectAction: occludedFoldActions.inspectEvidence,
    observationOrder: observations,
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
    ...overrides,
  };
}

function permutations(values) {
  if (values.length <= 1) return [values];
  return values.flatMap((value, index) => permutations([...values.slice(0, index), ...values.slice(index + 1)])
    .map((rest) => [value, ...rest]));
}

test("one pure protected caller traverses OF-00 through OF-30 from exact RP-008", () => {
  const input = fixture();
  const before = JSON.stringify(input);
  const started = performance.now();
  const result = runOccludedFoldProtectedJourneySmoke(input);
  assert.ok(performance.now() - started < 300_000);
  assert.equal(result.version, OCCLUDED_FOLD_PROTECTED_JOURNEY_VERSION);
  assert.equal(result.status, "protected_reference_complete");
  assert.equal(result.routable, false);
  assert.deepEqual(result.timeline, ["OF-00 ARRIVE + ORIENT", "OF-10 SURVEY EXPOSED EDGES", "OF-20 RECONCILE BOUNDARIES + SAVE", "OF-30 VERIFY + RETURN"]);
  assert.equal(result.saved.retainedRp007Summary.checkpoint, "braided_verge_complete");
  assert.equal(result.saved.retainedRp008Summary.checkpoint, "offset_reach_complete");
  assert.equal(result.saved.checkpoint, "occluded_fold_complete");
  assert.deepEqual(result.restored.replayedEvents, []);
  assert.equal(JSON.stringify(input), before);
});

test("all 720 observation orders converge and revisits are idempotent", () => {
  const orders = permutations(observations);
  assert.equal(orders.length, 720);
  for (const observationOrder of orders) {
    const result = runOccludedFoldProtectedJourneySmoke(fixture({ observationOrder }));
    assert.deepEqual(result.saved.edgeLedger.observations, observations);
    assert.equal(result.saved.edgeLedger.reconciliation.unavailable[0], "outer_margin");
  }
  const revisited = runOccludedFoldProtectedJourneySmoke(fixture({ observationOrder: [observations[0], ...observations, observations[3], observations[0]] }));
  assert.equal(revisited.revisitCount, 3);
  assert.deepEqual(revisited.saved.edgeLedger.observations, observations);
});

test("strict independent PY-017 primary, trace, and genuinely blank transfer pass 8/8", () => {
  for (const [form, source] of Object.entries(occludedFoldReferenceSources)) {
    const result = evaluateOccludedFoldPython(form, source);
    assert.equal(result.score, 8);
    assert.equal(result.passed, true);
    assert.equal(result.environmentReads, 1);
    assert.equal(result.transientAudit.cleared, true);
  }
  const trace = evaluateOccludedFoldPythonTrace(occludedFoldPythonTraceAnswers);
  assert.equal(trace.score, 8);
  assert.equal(trace.passed, true);
  assert.notEqual(occludedFoldReferenceSources.primary, occludedFoldReferenceSources.transfer);
});

test("PY-017 hardcodes, mutations, collapsed classes, filled limits, secret/output, and carried transfer fail closed", () => {
  const primary = occludedFoldReferenceSources.primary;
  const probes = [
    primary.replace('mode = os.environ.get("EDGE_LEDGER_MODE")', 'mode = "bounded"'),
    `${primary}\nos.environ["EDGE_LEDGER_MODE"] = "bounded"`,
    primary.replace('"unmatched": [record["record_id"] for record in edge_records if record["status"] == "unmatched"],', '"unmatched": [],'),
    primary.replace('"identity": None,', '"identity": "same",'),
    `${primary}\nprint(edge_ledger)`,
    `${primary}\nsecret = os.environ.get("AZURE_API_KEY")`,
    primary,
  ];
  for (const source of probes.slice(0, 6)) assert.equal(evaluateOccludedFoldPython("primary", source).passed, false);
  assert.equal(evaluateOccludedFoldPython("transfer", probes[6]).passed, false);
  for (const source of probes.slice(0, 6)) assert.throws(() => runOccludedFoldProtectedJourneySmoke(fixture({ pythonPrimarySource: source })));
});

test("prompt ownership primary, delayed retrieval, blank transfer, and explanations are independent", () => {
  for (const form of ["primary", "retrieval", "transfer"]) {
    const result = evaluateOccludedFoldPromptBoundary(form, occludedFoldReferenceAnswers.prompt[form]);
    assert.equal(result.score, 8);
    assert.equal(result.passed, true);
    assert.deepEqual(result.misconceptionTags, []);
  }
  assert.equal(evaluateOccludedFoldPromptBoundary("transfer", {}).score, 0);
  assert.throws(() => runOccludedFoldProtectedJourneySmoke(fixture({ explanations: { ...occludedFoldExplanationAnswers, truthAuthorityBoundary: "prompt_quality_proves_truth" } })));
});

test("AI remediation derives only from an actually scored misconception and reveals no answer", () => {
  const wrong = structuredClone(occludedFoldReferenceAnswers.prompt);
  wrong.primary.P01.prompt_owner = "current_input_belongs_in_persistent_rules";
  assert.throws(() => runOccludedFoldProtectedJourneySmoke(fixture({ promptAnswers: wrong })), (error) => {
    assert.equal(error.recovery.boundary, "promptPrimary");
    assert.equal(error.recovery.answerIncluded, false);
    assert.equal(error.recovery.retryBlank, true);
    assert.equal(error.recovery.remediationSource, "scored_misconception_tags_only");
    assert.deepEqual(error.recovery.remediationTags, ["current_input_belongs_in_persistent_rules"]);
    assert.equal(error.recovery.focusIntent.target, "prompt_primary_heading");
    return true;
  });
});

test("Python remediation is failed-check-only, local, answer-free, blank, and unlimited", () => {
  const wrong = occludedFoldReferenceSources.primary.replace('"purpose": None,', '"purpose": "known",');
  assert.throws(() => runOccludedFoldProtectedJourneySmoke(fixture({ pythonPrimarySource: wrong })), (error) => {
    assert.equal(error.recovery.boundary, "pythonPrimary");
    assert.equal(error.recovery.answerIncluded, false);
    assert.equal(error.recovery.attemptsRemaining, "unlimited");
    assert.equal(error.recovery.remediationSource, "failed_python_checks_only");
    assert.deepEqual(error.recovery.failedCheckIds, ["unsupported_limits_remain_none"]);
    assert.deepEqual(error.recovery.remediationTags, []);
    assert.equal(error.recovery.transientWorkCleared, true);
    assert.equal(error.recovery.privateWorkCleared, true);
    return true;
  });
});

test("scene, presentation, confidence, focus, save display, private, stale, forged, combined, and Tour bypasses fail closed", () => {
  const probes = [
    { flags: ["scene_derived"] }, { flags: ["position_derived"] }, { flags: ["signature_derived"] },
    { flags: ["silhouette_derived"] }, { flags: ["presentation_derived"] }, { flags: ["accessibility_derived"] },
    { flags: ["confidence_derived"] }, { flags: ["timing_derived"] }, { flags: ["focus_derived"] },
    { flags: ["navigation_derived"] }, { flags: ["save_display_derived"] }, { flags: ["tour_derived"] },
    { privateNotes: "private_notes" }, { flags: ["stale"] }, { flags: ["forged"] }, { flags: ["combined"] },
    { credentials: "credentials" }, { endpoint: "endpoint" },
  ];
  for (const probe of probes) assert.throws(() => runOccludedFoldProtectedJourneySmoke(fixture(probe)));
  assert.throws(() => runOccludedFoldProtectedJourneySmoke(fixture({ predecessor: {} })));
  assert.throws(() => runOccludedFoldProtectedJourneySmoke(fixture({ observationOrder: observations.slice(0, 5) })));
});

test("save is exact, conjunctive, atomic, and rejected writes remain byte-stable", () => {
  const result = runOccludedFoldProtectedJourneySmoke(fixture());
  assert.deepEqual(Object.keys(result.saved), ["version", "packetId", "mappingId", "checkpoint", "continuation", "cityStateDelta", "externalStateDelta", "successor", "retainedRp007Summary", "retainedRp008Summary", "edgeLedger", "evidence"]);
  assert.deepEqual(Object.keys(result.saved.edgeLedger.reconciliation), ["mode", "correspondence", "unmatched", "ambiguous", "unavailable", "identity", "topology", "continuity", "transformation", "cause", "purpose"]);
  const adapter = createOccludedFoldPersistenceAdapter(result.saved);
  const bytes = adapter.bytes();
  const mutations = [
    { ...result.saved, learner_source: "secret" },
    { ...result.saved, edgeLedger: { ...result.saved.edgeLedger, observations: observations.slice(0, 5) } },
    { ...result.saved, edgeLedger: { ...result.saved.edgeLedger, reconciliation: { ...result.saved.edgeLedger.reconciliation, ambiguous: {} } } },
    { ...result.saved, retainedRp008Summary: { ...result.saved.retainedRp008Summary, cause: "filled" } },
    { ...result.saved, successor: "RP-010" },
    { ...result.saved, evidence: result.saved.evidence.slice(0, 7) },
  ];
  for (const mutation of mutations) {
    const rejected = adapter.write(mutation);
    assert.equal(rejected.status, "rejected");
    assert.equal(rejected.byteStable, true);
    assert.equal(adapter.bytes(), bytes);
  }
});

test("partial resume clears private/transient work and deterministically focuses the first incomplete boundary", () => {
  const partial = deriveOccludedFoldResume({
    retainedRp007Summary: verifiedRp008Completion().retainedRp007Summary,
    retainedRp008Summary: { checkpoint: "offset_reach_complete", retained_local_association: true, recurring_familiar_contact: 1, comparable_non_contact: 1, cross_family_contact: 1, unavailable_case: 1, universal: null, exclusive: null, unity: null, cause: null, purpose: null },
    finalized: { pythonPrimary: true, pythonTrace: true, pythonTransfer: false, promptPrimary: true },
    learner_source: "private", environment_values: "private", raw_cases: "private",
  });
  assert.equal(partial.phase, "OF-10 SURVEY EXPOSED EDGES");
  assert.equal(partial.completion.pythonPrimary, true);
  assert.equal(partial.completion.pythonTrace, true);
  assert.equal(partial.completion.pythonTransfer, false);
  assert.equal(partial.completion.promptPrimary, false);
  assert.equal(partial.focusIntent.group, "observations");
  assert.equal(partial.observationsMustBeReobserved, true);
  assert.equal(partial.transientWorkCleared, true);
  assert.equal(partial.privateWorkCleared, true);
  assert.equal("learner_source" in partial, false);
});

test("restore is replay-free, returns are reversible, and continuation is LOOK-only/destinationless", () => {
  const saved = runOccludedFoldProtectedJourneySmoke(fixture()).saved;
  const restored = deriveOccludedFoldResume(saved);
  assert.equal(restored.phase, "verified_restore");
  assert.deepEqual(restored.replayedEvents, []);
  assert.equal(deriveOccludedFoldSafeReturn(occludedFoldActions.returnOffsetReach).target, "RP-008");
  assert.equal(deriveOccludedFoldSafeReturn(occludedFoldActions.returnCityThreshold).target, "CITY_THRESHOLD");
  assert.throws(() => deriveOccludedFoldSafeReturn("OPEN RP-010"));
  const look = deriveOccludedFoldLookContinuation(occludedFoldActions.lookContinuation);
  assert.equal(look.action, "LOOK");
  assert.equal(look.destination, null);
  assert.equal(look.routeOpened, false);
  assert.equal(look.persisted, false);
  assert.equal(look.evidenceGranted, false);
  assert.equal(look.successor, null);
  assert.throws(() => deriveOccludedFoldLookContinuation("TRAVEL"));
});

test("Tour, authority, world, six None limits, and successor boundaries remain exact", () => {
  const result = runOccludedFoldProtectedJourneySmoke(fixture());
  assert.equal(result.tourProbe.saveStatus, "tour_preview_only");
  assert.equal(result.tourProbe.adapterValue, null);
  assert.equal(result.tourProbe.masteryFinalized, false);
  assert.equal(result.cityStateDelta, null);
  assert.equal(result.externalStateDelta, null);
  assert.equal(result.worldStateChanged, false);
  assert.equal(result.worldClockDelta, null);
  assert.equal(result.successor, null);
  assert.equal(result.authorityGranted, false);
  assert.equal(result.externalActionEnabled, false);
  assert.equal(result.examCreditGranted, false);
  assert.equal(result.examGuarantee, false);
  assert.equal(result.offlineOnly, true);
  assert.equal(result.sceneEvidenceUsed, false);
  assert.equal(result.presentationEvidenceUsed, false);
  assert.equal(result.accessibilityEvidenceUsed, false);
  assert.equal(result.tourEvidenceUsed, false);
  for (const key of ["identity", "topology", "continuity", "transformation", "cause", "purpose"]) {
    assert.equal(result.saved.edgeLedger.reconciliation[key], null);
  }
});

test("canonical sources/forms match frozen RP-009 authorities and presentation remains accessible", async () => {
  const [primary, transfer] = await Promise.all([
    readFile(new URL("../../curriculum/readiness/RP-009/reference_primary.py", import.meta.url), "utf8"),
    readFile(new URL("../../curriculum/readiness/RP-009/reference_transfer.py", import.meta.url), "utf8"),
  ]);
  assert.equal(occludedFoldReferenceSources.primary.trim(), primary.trim());
  assert.equal(occludedFoldReferenceSources.transfer.trim(), transfer.trim());
  assert.equal(rp009Contract.python_contract.skill_id, "PY-017");
  assert.equal(rp009Contract.ai901_contract.objective_id, "AI901-D2-O1");
  assert.equal(rp009Contract.ai901_contract.check_id, "RP009-PROMPT-BOUNDARY-01");
  assert.equal(rp009Contract.authority_contract.offline_only, true);
  assert.equal(rp009Contract.authority_contract.no_exam_guarantee, true);
  assert.equal(occludedFoldPresentation.responsive, true);
  assert.equal(occludedFoldPresentation.fixedLegacyViewportRequired, false);
  assert.ok(occludedFoldPresentation.accessibility.minTargetCssPx >= 44);
  assert.equal(occludedFoldPresentation.accessibility.oneActiveOwnerGroup, true);
  assert.equal(occludedFoldPresentation.accessibility.meaningUsesColorMotionAudioPositionSequenceOrLayoutAlone, false);
  assert.equal(occludedFoldPresentation.accessibility.timeLimit, false);
});

test("protected module remains absent while the distinct normal RP-009 implementation is production-wired", async () => {
  const [app, main] = await Promise.all([
    readFile(new URL("../src/App.jsx", import.meta.url), "utf8"),
    readFile(new URL("../src/main.jsx", import.meta.url), "utf8"),
  ]);
  assert.doesNotMatch(`${app}\n${main}`, /OccludedFoldProtectedJourney|rp009\.protected-journey\.v1/);
  assert.match(app, /OccludedFold|OCCLUDED_FOLD_SHELL_VERSION/);
  const source = await readFile(new URL("../src/OccludedFoldProtectedJourney.js", import.meta.url), "utf8");
  assert.doesNotMatch(source, /localStorage|sessionStorage|fetch\(|XMLHttpRequest|https?:\/\//);
  const distFiles = await readdir(new URL("../dist/assets", import.meta.url));
  for (const file of distFiles.filter((name) => /\.(?:js|css)$/.test(name))) {
    const bytes = await readFile(new URL(`../dist/assets/${file}`, import.meta.url), "utf8");
    assert.doesNotMatch(bytes, /OccludedFoldProtectedJourney|rp009\.protected-journey\.v1|protected_reference_complete/);
  }
});
