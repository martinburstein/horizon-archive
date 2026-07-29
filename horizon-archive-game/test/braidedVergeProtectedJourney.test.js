import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { performance } from "node:perf_hooks";
import test from "node:test";
import rp006Contract from "../../curriculum/readiness/RP-006/contract.json" with { type: "json" };
import rp007Contract from "../../curriculum/readiness/RP-007/contract.json" with { type: "json" };
import {
  BRAIDED_VERGE_PROTECTED_JOURNEY_VERSION,
  braidedVergeActions,
  braidedVergeExplanationAnswers,
  braidedVergeNeutralCapabilityInterface,
  braidedVergePresentation,
  braidedVergePythonTraceAnswers,
  braidedVergeReferenceAnswers,
  braidedVergeReferenceSources,
  createBraidedVergePersistenceAdapter,
  deriveBraidedVergeResume,
  deriveBraidedVergeSafeReturn,
  evaluateBraidedVergePython,
  evaluateBraidedVergePythonTrace,
  evaluateBraidedVergeVision,
  runBraidedVergeProtectedJourneySmoke,
} from "../src/BraidedVergeProtectedJourney.js";
import {
  INTERVAL_WORKS_PROTECTED_JOURNEY_VERSION,
  createIntervalWorksPersistenceAdapter,
  intervalWorksReferenceAnswers,
} from "../src/IntervalWorksProtectedJourney.js";

const observations = [
  "distinct_continuities_trace",
  "recurrent_exposed_association",
  "bounded_contact_difference",
  "crosscut_relative_order",
  "closed_junction_stewardship",
];

function acceptedCampaign() {
  return {
    continuation: "continuation",
    cityStateDelta: null,
    externalStateDelta: null,
    successor: null,
    acceptedBoundary: "city_threshold",
  };
}

function finalizedRecord(packetId, mappingId, skillOrObjectiveId, form, dimensions) {
  return {
    packet_id: packetId,
    mapping_id: mappingId,
    form,
    skill_or_objective_id: skillOrObjectiveId,
    dimension_correctness: Object.fromEntries(dimensions.map((dimension) => [dimension, true])),
    attempt_count: 1,
    hint_level: 0,
    confidence: null,
    misconception_tags: [],
    mastery_status: "mastered",
  };
}

function verifiedRp006Completion() {
  const dimensions = rp006Contract.ai901_contract.dimensions;
  const speechDimensions = (form) => rp006Contract.ai901_contract.forms[form]
    .flatMap((item) => dimensions.map((dimension) => `${item.id}.${dimension}`));
  const candidate = {
    version: INTERVAL_WORKS_PROTECTED_JOURNEY_VERSION,
    packetId: "RP-006",
    mappingId: "RP006-A3-INTERVAL-WORKS",
    checkpoint: "interval_works_complete",
    continuation: "continuation",
    cityStateDelta: null,
    externalStateDelta: null,
    successor: null,
    note: {
      observations: [
        "overlap_crosscut_relative_order",
        "changed_persistent_feature_pair",
        "closed_interval_unavailable",
        "layered_stewardship_visible",
      ],
      relativeOrder: "exposed_source_order_preserved",
      changed: "one_visible_change_observed",
      persistent: "one_feature_persists",
      unavailable: "closed_interval_unavailable",
      stewardship: "layered_stewardship_observed",
      replicas: "sanitized_precomputed_only",
      gap: "explicit_unavailable_record",
      cause: null,
      purpose: null,
      destination: null,
    },
    evidence: [
      finalizedRecord("RP-006", "RP006-A3-INTERVAL-WORKS", "PY-013", "primary", rp006Contract.python_contract.checks),
      finalizedRecord("RP-006", "RP006-A3-INTERVAL-WORKS", "PY-013", "trace", Object.keys(intervalWorksReferenceAnswers.pythonTrace)),
      finalizedRecord("RP-006", "RP006-A3-INTERVAL-WORKS", "PY-013", "transfer", rp006Contract.python_contract.checks),
      finalizedRecord("RP-006", "RP006-A3-INTERVAL-WORKS", "RP006-SPEECH-01", "primary", speechDimensions("primary")),
      finalizedRecord("RP-006", "RP006-A3-INTERVAL-WORKS", "RP006-SPEECH-01", "retrieval", speechDimensions("retrieval")),
      finalizedRecord("RP-006", "RP006-A3-INTERVAL-WORKS", "RP006-SPEECH-01", "transfer", speechDimensions("transfer")),
      finalizedRecord("RP-006", "RP006-A3-INTERVAL-WORKS", "RP006-SPEECH-01", "direction_boundary_explanation", ["direction_boundary"]),
      finalizedRecord("RP-006", "RP006-A3-INTERVAL-WORKS", "RP006-SPEECH-01", "causation_boundary_explanation", ["causation_boundary"]),
    ],
  };
  const committed = createIntervalWorksPersistenceAdapter().write(candidate);
  assert.equal(committed.status, "committed");
  return committed.value;
}

function completedPrerequisites() {
  return {
    python: {
      lessonId: "L-03-03",
      skillId: "PY-015",
      readinessStatus: "ready",
      prerequisiteSkillIds: ["PY-009", "PY-012"],
    },
    ai901: {
      lessonId: "L-06-01",
      objectiveId: "AI901-D1-O7",
      objectiveReady: true,
      readinessStatus: "ready",
      sourceLessonIds: ["L-04-03"],
    },
  };
}

function fixture(overrides = {}) {
  return {
    predecessor: verifiedRp006Completion(),
    prerequisites: completedPrerequisites(),
    acceptedCampaign: acceptedCampaign(),
    tour: { mode: "demo_tour", cursor: "rp007", noCredit: true },
    orientAction: braidedVergeActions.orient,
    inspectAction: braidedVergeActions.inspectEvidence,
    observationOrder: observations,
    runAction: braidedVergeActions.runReport,
    pythonPrimarySource: braidedVergeReferenceSources.primary,
    pythonTraceAnswers: braidedVergePythonTraceAnswers,
    pythonTransferSource: braidedVergeReferenceSources.transfer,
    visionAnswers: braidedVergeReferenceAnswers.vision,
    explanations: braidedVergeExplanationAnswers,
    saveAction: braidedVergeActions.saveNote,
    earlyReturnAction: braidedVergeActions.returnIntervalWorks,
    finalReturnAction: braidedVergeActions.returnCityThreshold,
    recordContinuationAction: braidedVergeActions.recordContinuation,
    ...overrides,
  };
}

function permutations(values) {
  if (values.length <= 1) return [values];
  return values.flatMap((value, index) => permutations([
    ...values.slice(0, index), ...values.slice(index + 1),
  ]).map((rest) => [value, ...rest]));
}

test("one pure caller traverses BV-00 through BV-30 under five minutes", () => {
  const input = fixture();
  const acceptedBytes = JSON.stringify(input.acceptedCampaign);
  const predecessorBytes = JSON.stringify(input.predecessor);
  const tourBytes = JSON.stringify(input.tour);
  const started = performance.now();
  const result = runBraidedVergeProtectedJourneySmoke(input);

  assert.ok(performance.now() - started < 300_000);
  assert.equal(result.version, BRAIDED_VERGE_PROTECTED_JOURNEY_VERSION);
  assert.equal(result.status, "protected_reference_complete");
  assert.deepEqual(result.timeline, [
    "BV-00 ARRIVE + ORIENT", "BV-10 INSPECT BRAIDED EVIDENCE",
    "BV-20 RELATE + SAVE", "BV-30 VERIFY + RETURN",
  ]);
  assert.equal(result.saved.checkpoint, "braided_verge_complete");
  assert.equal(result.restored.phase, "verified_restore");
  assert.deepEqual(result.restored.replayedEvents, []);
  assert.equal(result.onwardContinuation.destination, null);
  assert.equal(result.onwardContinuation.routeOpened, false);
  assert.equal(JSON.stringify(input.acceptedCampaign), acceptedBytes);
  assert.equal(JSON.stringify(input.predecessor), predecessorBytes);
  assert.equal(JSON.stringify(input.tour), tourBytes);
});

test("all 120 supported physical observation orders converge", () => {
  const orders = permutations(observations);
  assert.equal(orders.length, 120);
  for (const observationOrder of orders) {
    const result = runBraidedVergeProtectedJourneySmoke(fixture({ observationOrder }));
    assert.equal(result.saved.checkpoint, "braided_verge_complete");
    assert.deepEqual(new Set(result.saved.note.observations), new Set(observations));
  }
});

test("missing readiness evidence holds only the scored owner and preserves returns", () => {
  const result = runBraidedVergeProtectedJourneySmoke(fixture({ prerequisites: {} }));
  assert.equal(result.status, "prerequisite_hold");
  assert.equal(result.storyNavigationLocked, false);
  assert.equal(result.routable, false);
  assert.equal(result.earlyReturn.target, "RP-006");
  assert.equal(result.successor, null);
  assert.equal(result.temporaryFileCleared, true);
});

test("strict PY-015 primary, trace, and blank transfer pass independent file round trips", () => {
  const primary = evaluateBraidedVergePython("primary", braidedVergeReferenceSources.primary);
  const transfer = evaluateBraidedVergePython("transfer", braidedVergeReferenceSources.transfer);
  const trace = evaluateBraidedVergePythonTrace(braidedVergePythonTraceAnswers);
  for (const result of [primary, transfer]) {
    assert.equal(result.score, 8);
    assert.equal(result.passed, true);
    assert.equal(result.temporaryAudit.writeCount, 1);
    assert.equal(result.temporaryAudit.readCount, 1);
    assert.equal(result.temporaryAudit.relativePathOnly, true);
    assert.equal(result.temporaryAudit.fileCleared, true);
    assert.equal(result.temporaryAudit.directoryCleared, true);
  }
  assert.equal(trace.score, 8);
  assert.equal(trace.passed, true);
});

test("PY-015 rejects shortcuts and recovery is answer-free and cleanup-safe", () => {
  const invalid = [
    braidedVergeReferenceSources.primary.replace("report_path.write_text(report_text, encoding=\"utf-8\")", "restored_report = report_text"),
    braidedVergeReferenceSources.primary.replace("encoding=\"utf-8\"", "encoding=\"utf-16\""),
    braidedVergeReferenceSources.primary.replace("braided_relation_report.txt", "C:/private/report.txt"),
    braidedVergeReferenceSources.primary.replace("unity=None", "unity=joined"),
    `${braidedVergeReferenceSources.primary}\nprint(restored_report)`,
  ];
  for (const source of invalid) {
    const evaluated = evaluateBraidedVergePython("primary", source);
    assert.equal(evaluated.passed, false);
    assert.equal(evaluated.temporaryAudit.fileCleared, true);
    assert.equal(evaluated.temporaryAudit.directoryCleared, true);
    assert.throws(() => runBraidedVergeProtectedJourneySmoke(fixture({ pythonPrimarySource: source })), (error) => {
      assert.equal(error.recovery.answerIncluded, false);
      assert.equal(error.recovery.retryBlank, true);
      assert.equal(error.recovery.temporaryFileCleared, true);
      return true;
    });
  }
});

test("vision-generation primary, retrieval, transfer, and explanations remain independent", () => {
  assert.equal(evaluateBraidedVergeVision("primary", braidedVergeReferenceAnswers.vision.primary).score, 8);
  assert.equal(evaluateBraidedVergeVision("retrieval", braidedVergeReferenceAnswers.vision.retrieval).score, 4);
  assert.equal(evaluateBraidedVergeVision("transfer", braidedVergeReferenceAnswers.vision.transfer).score, 8);
  const wrong = structuredClone(braidedVergeReferenceAnswers.vision);
  wrong.retrieval.R01.capability = "image_generation";
  assert.equal(evaluateBraidedVergeVision("primary", wrong.primary).passed, true);
  assert.equal(evaluateBraidedVergeVision("retrieval", wrong.retrieval).passed, false);
  assert.equal(evaluateBraidedVergeVision("transfer", wrong.transfer).passed, true);
  assert.throws(() => runBraidedVergeProtectedJourneySmoke(fixture({ visionAnswers: wrong })), (error) => {
    assert.equal(error.recovery.boundary, "visionRetrieval");
    assert.equal(error.recovery.answerIncluded, false);
    return true;
  });
  assert.throws(() => runBraidedVergeProtectedJourneySmoke(fixture({
    explanations: { ...braidedVergeExplanationAnswers, relationBoundary: "visible relation proves unity" },
  })), (error) => error.recovery.boundary === "relationBoundaryExplanation");
});

test("neutral capability cases contain no scene cues and perform no live service work", () => {
  assert.equal(braidedVergeNeutralCapabilityInterface.worldContextExcluded, true);
  assert.equal(braidedVergeNeutralCapabilityInterface.sceneRelationsExcluded, true);
  assert.equal(braidedVergeNeutralCapabilityInterface.performsLiveVisualAnalysis, false);
  assert.equal(braidedVergeNeutralCapabilityInterface.performsImageGeneration, false);
  const caseBytes = JSON.stringify(braidedVergeNeutralCapabilityInterface.cases);
  assert.doesNotMatch(caseBytes, /SC-08|braided|continuity|junction|stewardship/i);
  assert.doesNotMatch(caseBytes, /capability\"|deciding_signal/);
});

test("unsafe, inferred, stale, forged, combined, scene, modality, and Tour inputs fail closed", () => {
  const probes = [
    { privateNotes: "private_notes" }, { credentials: "credentials" },
    { flags: "stale" }, { flags: "forged" }, { flags: "combined" },
    { flags: "scene_derived" }, { flags: "relation_derived" },
    { flags: "motion_derived" }, { flags: "sound_derived" }, { flags: "tour_derived" },
  ];
  for (const probe of probes) assert.throws(() => runBraidedVergeProtectedJourneySmoke(fixture(probe)));
  assert.throws(() => runBraidedVergeProtectedJourneySmoke(fixture({ predecessor: {} })));
});

test("partial, private, and forged saves reject atomically", () => {
  const result = runBraidedVergeProtectedJourneySmoke(fixture());
  const adapter = createBraidedVergePersistenceAdapter(result.saved);
  const original = adapter.read();
  const partial = structuredClone(original);
  partial.evidence.pop();
  assert.equal(adapter.write(partial).status, "rejected");
  assert.equal(adapter.read(), original);
  assert.equal(adapter.write({ ...structuredClone(original), private_notes: "x" }).status, "rejected");
  assert.equal(adapter.read(), original);
  assert.equal(adapter.write({ ...structuredClone(original), checkpoint: "forged" }).status, "rejected");
  assert.equal(adapter.read(), original);
});

test("resume restores only a contiguous finalized prefix or a replay-free verified save", () => {
  const partial = deriveBraidedVergeResume({ finalized: {
    pythonPrimary: true, pythonTrace: false, pythonTransfer: true, visionPrimary: true,
  } });
  assert.equal(partial.completion.observations, false);
  assert.equal(partial.completion.pythonPrimary, true);
  assert.equal(partial.completion.pythonTrace, false);
  assert.equal(partial.completion.pythonTransfer, false);
  assert.equal(partial.focusIntent.group, "observations");
  assert.equal(partial.transientWorkCleared, true);
  assert.equal(partial.temporaryFileCleared, true);
  const saved = runBraidedVergeProtectedJourneySmoke(fixture()).saved;
  const restored = deriveBraidedVergeResume(saved);
  assert.equal(restored.phase, "verified_restore");
  assert.deepEqual(restored.replayedEvents, []);
  assert.equal(restored.temporaryFileCleared, true);
});

test("allowlisted save, Tour isolation, world invariants, and no authority remain exact", () => {
  const result = runBraidedVergeProtectedJourneySmoke(fixture());
  assert.deepEqual(Object.keys(result.saved).sort(), [
    "checkpoint", "cityStateDelta", "continuation", "evidence", "externalStateDelta",
    "mappingId", "note", "packetId", "successor", "version",
  ].sort());
  assert.equal(result.tourProbe.saveStatus, "tour_preview_only");
  assert.equal(result.tourProbe.adapterValue, null);
  assert.equal(result.examCreditGranted, false);
  assert.equal(result.authorityGranted, false);
  assert.equal(result.externalActionEnabled, false);
  assert.equal(result.worldStateChanged, false);
  assert.equal(result.successor, null);
  assert.equal(result.saved.note.unity, null);
  assert.equal(result.saved.note.cause, null);
  assert.equal(result.saved.note.purpose, null);
});

test("presentation and reversible return contracts remain accessible and deterministic", () => {
  assert.equal(braidedVergePresentation.firstPerson, true);
  assert.equal(braidedVergePresentation.invariantWorld, true);
  assert.equal(braidedVergePresentation.fullShell.outerHorizontalScroll, false);
  assert.equal(braidedVergePresentation.reflow.horizontalPageEscape, false);
  assert.equal(braidedVergePresentation.accessibility.minTargetCssPx, 44);
  assert.equal(braidedVergePresentation.accessibility.deterministicFocus, true);
  assert.equal(deriveBraidedVergeSafeReturn(braidedVergeActions.returnIntervalWorks).target, "RP-006");
  assert.equal(deriveBraidedVergeSafeReturn(braidedVergeActions.returnCityThreshold).target, "CITY_THRESHOLD");
  assert.throws(() => deriveBraidedVergeSafeReturn("continue"));
});

test("protected source is leakage-free, absent from the app bundle, and leaves no temp files", async () => {
  const source = await readFile(new URL("../src/BraidedVergeProtectedJourney.js", import.meta.url), "utf8");
  const app = await readFile(new URL("../src/App.jsx", import.meta.url), "utf8");
  const main = await readFile(new URL("../src/main.jsx", import.meta.url), "utf8");
  assert.doesNotMatch(source, /localStorage|sessionStorage|indexedDB|fetch\(|XMLHttpRequest|WebSocket|navigator\.|document\.|window\./);
  assert.doesNotMatch(source, /from\s+["']node:child_process|execSync\(|spawnSync\(|process\.env|npm\s+install|pip\s+install/);
  assert.doesNotMatch(`${app}\n${main}`, /BraidedVergeProtectedJourney|runBraidedVergeProtectedJourneySmoke|braidedVergeReferenceAnswers|node:(?:fs|os|path)/);

  const before = (await readdir(tmpdir())).filter((name) => name.startsWith("horizon-rp007-")).sort();
  runBraidedVergeProtectedJourneySmoke(fixture());
  evaluateBraidedVergePython("primary", braidedVergeReferenceSources.primary.replace("utf-8", "utf-16"));
  const after = (await readdir(tmpdir())).filter((name) => name.startsWith("horizon-rp007-")).sort();
  assert.deepEqual(after, before);

  const distAssets = await readdir(new URL("../dist/assets/", import.meta.url));
  for (const filename of distAssets.filter((name) => name.endsWith(".js"))) {
    const bytes = await readFile(new URL(`../dist/assets/${filename}`, import.meta.url), "utf8");
    assert.doesNotMatch(bytes, /BraidedVergeProtectedJourney|runBraidedVergeProtectedJourneySmoke|braidedVergeReferenceAnswers|horizon-rp007-/);
  }
});
