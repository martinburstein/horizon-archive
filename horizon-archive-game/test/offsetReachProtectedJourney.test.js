import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { performance } from "node:perf_hooks";
import test from "node:test";
import rp007Contract from "../../curriculum/readiness/RP-007/contract.json" with { type: "json" };
import rp008Contract from "../../curriculum/readiness/RP-008/contract.json" with { type: "json" };
import {
  BRAIDED_VERGE_PROTECTED_JOURNEY_VERSION,
  braidedVergePythonTraceAnswers,
  createBraidedVergePersistenceAdapter,
} from "../src/BraidedVergeProtectedJourney.js";
import {
  OFFSET_REACH_PROTECTED_JOURNEY_VERSION,
  createOffsetReachPersistenceAdapter,
  deriveOffsetReachResume,
  deriveOffsetReachSafeReturn,
  evaluateOffsetReachInformationExtraction,
  evaluateOffsetReachPython,
  evaluateOffsetReachPythonTrace,
  offsetReachActions,
  offsetReachExplanationAnswers,
  offsetReachPresentation,
  offsetReachPythonTraceAnswers,
  offsetReachReferenceAnswers,
  offsetReachReferenceSources,
  runOffsetReachProtectedJourneySmoke,
} from "../src/OffsetReachProtectedJourney.js";

const observations = [
  "familiar_continuity_trace", "recurring_familiar_contact", "comparable_non_contact",
  "cross_family_contact", "unavailable_case", "layered_stewardship",
];

function record(packetId, mappingId, id, form, dimensions) {
  return {
    packet_id: packetId, mapping_id: mappingId, form, skill_or_objective_id: id,
    dimension_correctness: Object.fromEntries(dimensions.map((dimension) => [dimension, true])),
    attempt_count: 1, hint_level: 0, confidence: null, misconception_tags: [], mastery_status: "mastered",
  };
}

function verifiedRp007Completion() {
  const dimensions = rp007Contract.ai901_contract.dimensions;
  const aiShape = (form) => rp007Contract.ai901_contract.forms[form]
    .flatMap((item) => dimensions.map((dimension) => `${item.id}.${dimension}`));
  const candidate = {
    version: BRAIDED_VERGE_PROTECTED_JOURNEY_VERSION,
    packetId: "RP-007", mappingId: "RP007-A3-BRAIDED-VERGE", checkpoint: "braided_verge_complete",
    continuation: "continuation", cityStateDelta: null, externalStateDelta: null, successor: null,
    note: {
      observations: ["distinct_continuities_trace", "recurrent_exposed_association", "bounded_contact_difference", "crosscut_relative_order", "closed_junction_stewardship"],
      continuities: "distinct_visible_continuities", association: "recurrent_exposed_association",
      difference: "one_bounded_difference", order: "relative_order_supported", junction: "closed_junction_unavailable",
      stewardship: "layered_stewardship_observed", replicas: "sanitized_precomputed_only",
      unity: null, coordination: null, cause: null, ownership: null, purpose: null, destination: null,
    },
    evidence: [
      record("RP-007", "RP007-A3-BRAIDED-VERGE", "PY-015", "primary", rp007Contract.python_contract.checks),
      record("RP-007", "RP007-A3-BRAIDED-VERGE", "PY-015", "trace", Object.keys(braidedVergePythonTraceAnswers)),
      record("RP-007", "RP007-A3-BRAIDED-VERGE", "PY-015", "transfer", rp007Contract.python_contract.checks),
      record("RP-007", "RP007-A3-BRAIDED-VERGE", "RP007-VISION-GENERATION-01", "primary", aiShape("primary")),
      record("RP-007", "RP007-A3-BRAIDED-VERGE", "RP007-VISION-GENERATION-01", "retrieval", aiShape("retrieval")),
      record("RP-007", "RP007-A3-BRAIDED-VERGE", "RP007-VISION-GENERATION-01", "transfer", aiShape("transfer")),
      record("RP-007", "RP007-A3-BRAIDED-VERGE", "RP007-VISION-GENERATION-01", "capability_boundary_explanation", ["capability_boundary"]),
      record("RP-007", "RP007-A3-BRAIDED-VERGE", "RP007-VISION-GENERATION-01", "relation_boundary_explanation", ["relation_boundary"]),
    ],
  };
  const committed = createBraidedVergePersistenceAdapter().write(candidate);
  assert.equal(committed.status, "committed");
  return committed.value;
}

function fixture(overrides = {}) {
  return {
    predecessor: verifiedRp007Completion(),
    prerequisites: {
      python: { lessonId: "L-03-03", skillId: "PY-016", readinessStatus: "ready", prerequisiteSkillIds: ["PY-009", "PY-012", "PY-015"] },
      ai901: { lessonId: "L-04-04", objectiveId: "AI901-D1-O8", objectiveReady: true, readinessStatus: "ready", sourceLessonIds: ["L-06-01"] },
    },
    acceptedCampaign: { continuation: "continuation", cityStateDelta: null, externalStateDelta: null, successor: null, acceptedBoundary: "city_threshold" },
    tour: { mode: "demo_tour", cursor: "rp008", noCredit: true },
    orientAction: offsetReachActions.orient,
    inspectAction: offsetReachActions.inspectEvidence,
    observationOrder: observations,
    runAction: offsetReachActions.runScopeRevision,
    pythonPrimarySource: offsetReachReferenceSources.primary,
    pythonTraceAnswers: offsetReachPythonTraceAnswers,
    pythonTransferSource: offsetReachReferenceSources.transfer,
    extractionAnswers: offsetReachReferenceAnswers.extraction,
    explanations: offsetReachExplanationAnswers,
    reviewAction: "FINALIZE BOUNDED REVIEW",
    saveAction: offsetReachActions.saveNote,
    earlyReturnAction: offsetReachActions.returnBraidedVerge,
    finalReturnAction: offsetReachActions.returnCityThreshold,
    recordContinuationAction: offsetReachActions.recordContinuation,
    ...overrides,
  };
}

function permutations(values) {
  if (values.length <= 1) return [values];
  return values.flatMap((value, index) => permutations([...values.slice(0, index), ...values.slice(index + 1)])
    .map((rest) => [value, ...rest]));
}

test("one protected caller traverses OR-00 through OR-30 and retains RP-007", () => {
  const input = fixture();
  const before = JSON.stringify(input);
  const started = performance.now();
  const result = runOffsetReachProtectedJourneySmoke(input);
  assert.ok(performance.now() - started < 300_000);
  assert.equal(result.version, OFFSET_REACH_PROTECTED_JOURNEY_VERSION);
  assert.equal(result.status, "protected_reference_complete");
  assert.deepEqual(result.timeline, ["OR-00 ARRIVE + ORIENT", "OR-10 INSPECT OFFSET EVIDENCE", "OR-20 REVISE SCOPE + SAVE", "OR-30 VERIFY + RETURN"]);
  assert.equal(result.saved.retainedRp007Summary.checkpoint, "braided_verge_complete");
  assert.equal(result.saved.retainedRp007Summary.association, "recurrent_exposed_association");
  assert.equal(result.saved.checkpoint, "offset_reach_complete");
  assert.deepEqual(result.restored.replayedEvents, []);
  assert.equal(JSON.stringify(input), before);
});

test("all 720 observation orders and idempotent revisits converge", () => {
  const orders = permutations(observations);
  assert.equal(orders.length, 720);
  for (const observationOrder of orders) {
    const result = runOffsetReachProtectedJourneySmoke(fixture({ observationOrder }));
    assert.deepEqual(result.saved.note.observations, observations);
    assert.equal(result.saved.note.unavailable_case, 1);
  }
  const revisited = runOffsetReachProtectedJourneySmoke(fixture({ observationOrder: [observations[0], ...observations, observations[3], observations[0]] }));
  assert.equal(revisited.revisitCount, 3);
  assert.deepEqual(revisited.saved.note.observations, observations);
});

test("strict independent PY-016 primary, trace, and blank transfer chains pass 8/8", () => {
  for (const [form, source] of Object.entries(offsetReachReferenceSources)) {
    const result = evaluateOffsetReachPython(form, source);
    assert.equal(result.score, 8);
    assert.equal(result.passed, true);
    assert.equal(result.transientAudit.cleared, true);
    assert.equal(result.transientAudit.sourceRetained, false);
  }
  const trace = evaluateOffsetReachPythonTrace(offsetReachPythonTraceAnswers);
  assert.equal(trace.score, 8);
  assert.equal(trace.passed, true);
  assert.notEqual(offsetReachReferenceSources.primary, offsetReachReferenceSources.transfer);
});

test("JSON hardcodes, reordered input, unavailable erasure, forbidden operations, and carried transfer fail closed", () => {
  const probes = [
    offsetReachReferenceSources.primary.replace("restored_summary = json.loads(summary_json)", "restored_summary = scope_summary"),
    offsetReachReferenceSources.primary.replace(
      '"recurring_familiar_contact": sum(record["relation"] == "familiar_contact" for record in records),',
      '"recurring_familiar_contact": 1,',
    ),
    offsetReachReferenceSources.primary.replace(
      '  {"case_id":"local","relation":"familiar_contact","available":true},\n  {"case_id":"open","relation":"non_contact","available":true},',
      '  {"case_id":"open","relation":"non_contact","available":true},\n  {"case_id":"local","relation":"familiar_contact","available":true},',
    ),
    offsetReachReferenceSources.primary.replace("\"relation\":null,\"available\":false", "\"relation\":\"non_contact\",\"available\":true"),
    `${offsetReachReferenceSources.primary}\nprint(restored_summary)`,
    offsetReachReferenceSources.primary,
  ];
  assert.equal(evaluateOffsetReachPython("primary", probes[0]).passed, false);
  assert.equal(evaluateOffsetReachPython("primary", probes[1]).passed, false);
  assert.equal(evaluateOffsetReachPython("primary", probes[2]).passed, false);
  assert.equal(evaluateOffsetReachPython("primary", probes[3]).passed, false);
  assert.equal(evaluateOffsetReachPython("primary", probes[4]).passed, false);
  assert.equal(evaluateOffsetReachPython("transfer", probes[5]).passed, false);
  for (const source of probes.slice(0, 5)) assert.throws(() => runOffsetReachProtectedJourneySmoke(fixture({ pythonPrimarySource: source })));
});

test("information-extraction primary, delayed retrieval, and blank transfer remain independent 8/8", () => {
  for (const form of ["primary", "retrieval", "transfer"]) {
    const result = evaluateOffsetReachInformationExtraction(form, offsetReachReferenceAnswers.extraction[form]);
    assert.equal(result.score, 8);
    assert.equal(result.passed, true);
    assert.deepEqual(result.misconceptionTags, []);
  }
  assert.deepEqual(evaluateOffsetReachInformationExtraction("transfer", {}).score, 0);
});

test("remediation derives only from an actually scored misconception and never reveals an answer", () => {
  const wrong = structuredClone(offsetReachReferenceAnswers.extraction);
  wrong.primary.P01.technique = "field_extraction";
  assert.throws(() => runOffsetReachProtectedJourneySmoke(fixture({ extractionAnswers: wrong })), (error) => {
    assert.equal(error.recovery.boundary, "extractionPrimary");
    assert.equal(error.recovery.answerIncluded, false);
    assert.equal(error.recovery.remediationSource, "scored_misconception_tags_only");
    assert.deepEqual(error.recovery.remediationTags, ["ocr_equals_field_extraction"]);
    assert.equal(error.recovery.focusIntent.target, "extraction_primary_heading");
    return true;
  });
});

test("scene, presentation, weakness, private, stale, forged, combined, and Tour bypasses fail closed", () => {
  const probes = [
    { flags: ["scene_derived"] }, { flags: ["position_derived"] }, { flags: ["weakness_derived"] },
    { flags: ["tour_derived"] }, { privateNotes: "private_notes" }, { flags: ["stale"] },
    { flags: ["forged"] }, { flags: ["combined"] }, { credentials: "credentials" }, { endpoint: "endpoint" },
  ];
  for (const probe of probes) assert.throws(() => runOffsetReachProtectedJourneySmoke(fixture(probe)));
  assert.throws(() => runOffsetReachProtectedJourneySmoke(fixture({ predecessor: {} })));
  assert.throws(() => runOffsetReachProtectedJourneySmoke(fixture({ observationOrder: observations.slice(0, 5) })));
});

test("save is an exact allowlist and failed writes remain byte-stable", () => {
  const result = runOffsetReachProtectedJourneySmoke(fixture());
  assert.deepEqual(Object.keys(result.saved), ["version", "packetId", "mappingId", "checkpoint", "continuation", "cityStateDelta", "externalStateDelta", "successor", "retainedRp007Summary", "note", "evidence"]);
  const adapter = createOffsetReachPersistenceAdapter(result.saved);
  const bytes = adapter.bytes();
  for (const mutation of [
    { ...result.saved, learner_source: "secret" },
    { ...result.saved, note: { ...result.saved.note, unavailable_case: 0 } },
    { ...result.saved, retainedRp007Summary: { ...result.saved.retainedRp007Summary, cause: "filled" } },
    { ...result.saved, successor: "RP-009" },
  ]) {
    const rejected = adapter.write(mutation);
    assert.equal(rejected.status, "rejected");
    assert.equal(rejected.byteStable, true);
    assert.equal(adapter.bytes(), bytes);
  }
});

test("partial resume clears private/transient work, reobserves scene facts, and focuses the first gap", () => {
  const partial = deriveOffsetReachResume({ retainedRp007Summary: { checkpoint: "braided_verge_complete" }, finalized: {
    pythonPrimary: true, pythonTrace: true, pythonTransfer: false, extractionPrimary: true,
  }, records_json: "private", summary_json: "private" });
  assert.equal(partial.phase, "OR-10 INSPECT OFFSET EVIDENCE");
  assert.equal(partial.completion.pythonPrimary, true);
  assert.equal(partial.completion.pythonTrace, true);
  assert.equal(partial.completion.pythonTransfer, false);
  assert.equal(partial.completion.extractionPrimary, false);
  assert.equal(partial.focusIntent.group, "observations");
  assert.equal(partial.observationsMustBeReobserved, true);
  assert.equal(partial.transientWorkCleared, true);
  assert.equal(partial.privateWorkCleared, true);
  assert.equal("records_json" in partial, false);
});

test("verified restore is replay-free and approved early/final returns are reversible", () => {
  const saved = runOffsetReachProtectedJourneySmoke(fixture()).saved;
  const restored = deriveOffsetReachResume(saved);
  assert.equal(restored.phase, "verified_restore");
  assert.deepEqual(restored.replayedEvents, []);
  assert.equal(deriveOffsetReachSafeReturn(offsetReachActions.returnBraidedVerge).target, "RP-007");
  assert.equal(deriveOffsetReachSafeReturn(offsetReachActions.returnCityThreshold).target, "CITY_THRESHOLD");
  assert.throws(() => deriveOffsetReachSafeReturn("OPEN RP-009"));
});

test("Tour, authority, world, successor, and evidence boundaries remain exact", () => {
  const result = runOffsetReachProtectedJourneySmoke(fixture());
  assert.equal(result.tourProbe.saveStatus, "tour_preview_only");
  assert.equal(result.tourProbe.adapterValue, null);
  assert.equal(result.tourProbe.masteryFinalized, false);
  assert.equal(result.cityStateDelta, null);
  assert.equal(result.externalStateDelta, null);
  assert.equal(result.worldStateChanged, false);
  assert.equal(result.successor, null);
  assert.equal(result.authorityGranted, false);
  assert.equal(result.externalActionEnabled, false);
  assert.equal(result.examCreditGranted, false);
  assert.equal(result.examGuarantee, false);
  assert.equal(result.sceneEvidenceUsed, false);
  assert.equal(result.presentationEvidenceUsed, false);
  assert.equal(result.tourEvidenceUsed, false);
  assert.equal(result.saved.note.universal, null);
  assert.equal(result.saved.note.exclusive, null);
  assert.equal(result.saved.note.unity, null);
  assert.equal(result.saved.note.cause, null);
  assert.equal(result.saved.note.purpose, null);
});

test("accessibility metadata preserves responsive, deterministic, non-sensory-equivalent operation", () => {
  assert.equal(offsetReachPresentation.responsive, true);
  assert.equal(offsetReachPresentation.fixedLegacyViewportRequired, false);
  assert.ok(offsetReachPresentation.accessibility.minTargetCssPx >= 44);
  assert.equal(offsetReachPresentation.accessibility.oneActiveOwnerGroup, true);
  assert.equal(offsetReachPresentation.accessibility.meaningUsesColorMotionAudioPositionSequenceOrLayoutAlone, false);
  assert.equal(offsetReachPresentation.accessibility.timeLimit, false);
  assert.equal(offsetReachPresentation.accessibility.deterministicFocus, true);
});

test("protected module remains absent from App, main, routes, storage, and production bundle", async () => {
  const [app, main] = await Promise.all([
    readFile(new URL("../src/App.jsx", import.meta.url), "utf8"),
    readFile(new URL("../src/main.jsx", import.meta.url), "utf8"),
  ]);
  assert.doesNotMatch(`${app}\n${main}`, /OffsetReachProtectedJourney|RP-008|SC-09|offset_reach_complete/);
  const source = await readFile(new URL("../src/OffsetReachProtectedJourney.js", import.meta.url), "utf8");
  assert.doesNotMatch(source, /localStorage|sessionStorage|fetch\(|XMLHttpRequest|https?:\/\//);
  const distFiles = await readdir(new URL("../dist/assets", import.meta.url));
  for (const file of distFiles.filter((name) => /\.(?:js|css)$/.test(name))) {
    const bytes = await readFile(new URL(`../dist/assets/${file}`, import.meta.url), "utf8");
    assert.doesNotMatch(bytes, /OffsetReachProtectedJourney|offset_reach_complete|OR-00 ARRIVE|RP008-INFORMATION-EXTRACTION-01/);
  }
});

test("frozen contract and journey retain the exact scope, evidence, and authority identifiers", () => {
  assert.equal(rp008Contract.python_contract.skill_id, "PY-016");
  assert.equal(rp008Contract.ai901_contract.objective_id, "AI901-D1-O8");
  assert.equal(rp008Contract.ai901_contract.check_id, "RP008-INFORMATION-EXTRACTION-01");
  assert.equal(rp008Contract.authority_contract.offline_only, true);
  assert.equal(rp008Contract.authority_contract.no_exam_guarantee, true);
  assert.ok(rp008Contract.world_locks.includes("no RP-009 route or destination"));
});
