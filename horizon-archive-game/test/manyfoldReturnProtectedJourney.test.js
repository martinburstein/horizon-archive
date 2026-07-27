import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { performance } from "node:perf_hooks";
import test from "node:test";
import {
  calibrationMarginActions,
  calibrationMarginReferenceAnswers,
  calibrationMarginReferenceSources,
  runCalibrationMarginProtectedJourneySmoke,
} from "../src/CalibrationMarginProtectedJourney.js";
import {
  runThreeCurrentReachProtectedJourneySmoke,
  threeCurrentReachActions,
  threeCurrentReachReferenceAnswers,
  threeCurrentReachReferenceSources,
} from "../src/ThreeCurrentReachProtectedJourney.js";
import {
  MANYFOLD_RETURN_PROTECTED_JOURNEY_VERSION,
  createManyfoldReturnPersistenceAdapter,
  deriveManyfoldReturnResume,
  deriveManyfoldReturnSafeReturn,
  evaluateManyfoldReturnPython,
  evaluateManyfoldReturnTextAnalysis,
  manyfoldNeutralTextInterface,
  manyfoldReturnActions,
  manyfoldReturnPresentation,
  manyfoldReturnReferenceAnswers,
  manyfoldReturnReferenceSources,
  runManyfoldReturnProtectedJourneySmoke,
} from "../src/ManyfoldReturnProtectedJourney.js";

function acceptedCampaign() {
  return {
    packetId: "RP-001",
    checkpoint: "accepted",
    continuation: "continuation",
    cityStateDelta: null,
    externalStateDelta: null,
    world: { clock: 29, cameraClock: 11, cropClock: 6, effectClock: 4 },
    successor: null,
    authority: null,
    externalAction: null,
  };
}

function verifiedRp003Completion() {
  const campaign = acceptedCampaign();
  return runCalibrationMarginProtectedJourneySmoke({
    predecessor: {
      packetId: "RP-002",
      checkpoint: "comparison_complete",
      verificationStatus: "verified",
      civicComparisonSaved: true,
      nextSurveyDirectionMarked: true,
      continuation: campaign.continuation,
      cityStateDelta: null,
    },
    prerequisites: {
      python: {
        lessonId: "L-03-02", skillId: "PY-010", primaryScore: 8, transferScore: 8,
        explanationComplete: true, masteryStatus: "mastered",
      },
      ai901: {
        lessonId: "L-05-07", objectiveId: "AI901-D2-O7", primaryScore: 12,
        transferComplete: true, provenanceComplete: true, nullFalseComplete: true,
        masteryStatus: "mastered",
      },
    },
    acceptedCampaign: campaign,
    tour: { mode: "demo_tour", cursor: "rp003", noCredit: true },
    orientAction: calibrationMarginActions.orient,
    observationOrder: ["correspondence", "bounded_difference", "sealed_unavailable"],
    runAction: calibrationMarginActions.runComparison,
    pythonPrimarySource: calibrationMarginReferenceSources.primary,
    pythonRetrievalAnswers: calibrationMarginReferenceAnswers.pythonRetrieval,
    pythonTransferSource: calibrationMarginReferenceSources.transfer,
    aiAnswers: calibrationMarginReferenceAnswers.ai,
    unsupportedExplanation: calibrationMarginReferenceAnswers.unsupportedExplanation,
    saveAction: calibrationMarginActions.saveNote,
    earlyReturnAction: calibrationMarginActions.returnCivicComparison,
    finalReturnAction: calibrationMarginActions.returnCityThreshold,
    markBearingAction: calibrationMarginActions.markBearing,
  }).saved;
}

function verifiedRp004Completion() {
  const campaign = acceptedCampaign();
  return runThreeCurrentReachProtectedJourneySmoke({
    predecessor: verifiedRp003Completion(),
    prerequisites: {
      python: {
        lessonId: "L-03-02", skillId: "PY-011", primaryScore: 8,
        retrievalComplete: true, transferScore: 8, masteryStatus: "mastered",
      },
      ai901: {
        lessonId: "L-06-01", objectiveId: "AI901-D1-O4", objectiveReady: true,
        masteryStatus: "mastered",
        sourceLessonIds: ["L-04-01", "L-04-02", "L-04-03", "L-04-04", "L-05-04"],
      },
    },
    acceptedCampaign: campaign,
    tour: { mode: "demo_tour", cursor: "rp004", noCredit: true },
    orientAction: threeCurrentReachActions.orient,
    observationOrder: [
      "suspended_matter_porous_relation",
      "cyclic_pressure_tensioned_relation",
      "conducted_heat_jointed_relation",
    ],
    commonReturnAction: threeCurrentReachActions.recordCommonReturn,
    commonReturnObservation: { observed: true, purpose: null },
    runAction: threeCurrentReachActions.runCorrespondence,
    pythonPrimarySource: threeCurrentReachReferenceSources.primary,
    pythonRetrievalAnswers: threeCurrentReachReferenceAnswers.pythonRetrieval,
    pythonTransferSource: threeCurrentReachReferenceSources.transfer,
    workloadAnswers: threeCurrentReachReferenceAnswers.workloads,
    explanations: threeCurrentReachReferenceAnswers.explanations,
    saveAction: threeCurrentReachActions.saveNote,
    earlyReturnAction: threeCurrentReachActions.returnCalibrationMargin,
    finalReturnAction: threeCurrentReachActions.returnCityThreshold,
    markContinuationAction: threeCurrentReachActions.markContinuation,
  }).saved;
}

function completedPrerequisites() {
  return {
    python: {
      lessonId: "L-03-02",
      skillId: "PY-012",
      primaryScore: 8,
      traceComplete: true,
      transferScore: 8,
      masteryStatus: "mastered",
    },
    ai901: {
      lessonId: "L-06-01",
      objectiveId: "AI901-D1-O5",
      objectiveReady: true,
      masteryStatus: "mastered",
      sourceLessonIds: ["L-04-01"],
    },
  };
}

function fixture(overrides = {}) {
  return {
    predecessor: verifiedRp004Completion(),
    prerequisites: completedPrerequisites(),
    acceptedCampaign: acceptedCampaign(),
    tour: { mode: "demo_tour", cursor: "rp005", noCredit: true },
    orientAction: manyfoldReturnActions.orient,
    inspectAction: manyfoldReturnActions.inspectDistribution,
    observationOrder: [
      "recurring_exposed_trace_range",
      "bounded_divergent_trace",
      "sealed_branch_unavailable",
      "layered_stewardship_visible",
    ],
    runAction: manyfoldReturnActions.runSummary,
    pythonPrimarySource: manyfoldReturnReferenceSources.primary,
    pythonTraceAnswers: manyfoldReturnReferenceAnswers.pythonTrace,
    pythonTransferSource: manyfoldReturnReferenceSources.transfer,
    textAnswers: manyfoldReturnReferenceAnswers.text,
    explanations: manyfoldReturnReferenceAnswers.explanations,
    saveAction: manyfoldReturnActions.saveNote,
    earlyReturnAction: manyfoldReturnActions.returnThreeCurrentReach,
    finalReturnAction: manyfoldReturnActions.returnCityThreshold,
    recordContinuationAction: manyfoldReturnActions.recordContinuation,
    ...overrides,
  };
}

function permutations(values) {
  if (values.length <= 1) return [values];
  return values.flatMap((value, index) => permutations([
    ...values.slice(0, index),
    ...values.slice(index + 1),
  ]).map((rest) => [value, ...rest]));
}

test("one protected caller traverses MF-00 through MF-30 through every real evaluator under five minutes", () => {
  const input = fixture();
  const campaignBytes = JSON.stringify(input.acceptedCampaign);
  const predecessorBytes = JSON.stringify(input.predecessor);
  const tourBytes = JSON.stringify(input.tour);
  const started = performance.now();
  const result = runManyfoldReturnProtectedJourneySmoke(input);
  const elapsedMs = performance.now() - started;

  assert.equal(result.version, MANYFOLD_RETURN_PROTECTED_JOURNEY_VERSION);
  assert.ok(elapsedMs < manyfoldReturnPresentation.referenceSmokeMaxSeconds * 1000);
  assert.deepEqual(result.timeline, [
    "MF-00 ARRIVE + IDLE",
    "MF-10 INSPECT DISTRIBUTION",
    "MF-20 SUMMARIZE + SAVE",
    "MF-30 VERIFY + RETURN",
  ]);
  assert.equal(Object.values(result.completion).every(Boolean), true);
  assert.equal(result.saved.evidence.length, 8);
  assert.equal(result.saved.note.truth, null);
  assert.equal(result.saved.note.purpose, null);
  assert.equal(result.saved.note.destination, null);
  assert.deepEqual(result.restored, {
    phase: "verified_restore",
    checkpoint: "manyfold_return_complete",
    focusIntent: { group: "verified_restore", target: "saved_controls" },
    replayedEvents: [],
  });
  assert.equal(result.earlyReturn.target, "RP-004");
  assert.equal(result.returnedRoute.target, "CITY_THRESHOLD");
  assert.deepEqual(result.onwardContinuation, { recorded: true, destination: null, routeOpened: false });
  assert.equal(JSON.stringify(input.acceptedCampaign), campaignBytes);
  assert.equal(JSON.stringify(input.predecessor), predecessorBytes);
  assert.equal(JSON.stringify(input.tour), tourBytes);
});

test("all 24 deliberate observation orders converge on one protected save", () => {
  const observations = [
    "recurring_exposed_trace_range",
    "bounded_divergent_trace",
    "sealed_branch_unavailable",
    "layered_stewardship_visible",
  ];
  const snapshots = permutations(observations)
    .map((observationOrder) => runManyfoldReturnProtectedJourneySmoke(fixture({ observationOrder })))
    .map((result) => JSON.stringify({
      completion: result.completion,
      saved: result.saved,
      restored: result.restored,
      returnedRoute: result.returnedRoute,
    }));
  assert.equal(snapshots.length, 24);
  assert.equal(new Set(snapshots).size, 1);
});

test("missing prerequisites hold scored work while both returns remain safe", () => {
  const result = runManyfoldReturnProtectedJourneySmoke(fixture({
    prerequisites: { python: { masteryStatus: "in_progress" } },
  }));
  assert.equal(result.status, "prerequisite_hold");
  assert.equal(result.storyNavigationLocked, false);
  assert.equal(result.earlyReturn.target, "RP-004");
  assert.equal(result.cityStateDelta, null);
  assert.equal(result.externalStateDelta, null);
  assert.equal(result.successor, null);
  assert.deepEqual(result.completion, {});
});

test("hardcoded, mutated, computed, wrong-input, and live-source Python shortcuts fail real checks", () => {
  const sources = [
    "summary = {'recurring_count': 5, 'divergent_count': 2, 'sealed': None, 'judgment': None}",
    manyfoldReturnReferenceSources.primary.replace('replica_summary["recurring_count"]', "5"),
    manyfoldReturnReferenceSources.primary.replace('replica_summary["divergent_count"]', 'max(replica_summary["divergent_count"], 2)'),
    manyfoldReturnReferenceSources.primary.replace('"recurring_count": 5', '"recurring_count": 9'),
    `${manyfoldReturnReferenceSources.primary}\nopen("live_field")`,
    `${manyfoldReturnReferenceSources.primary}\nreplica_summary["recurring_count"] = 1`,
  ];
  for (const source of sources) assert.equal(evaluateManyfoldReturnPython("primary", source).passed, false);
  assert.equal(evaluateManyfoldReturnPython("primary", manyfoldReturnReferenceSources.primary).score, 8);
  assert.equal(evaluateManyfoldReturnPython("transfer", manyfoldReturnReferenceSources.transfer).score, 8);
});

test("a Python miss and truth inference fail locally with answer-free blank recovery", () => {
  assert.throws(
    () => runManyfoldReturnProtectedJourneySmoke(fixture({ pythonPrimarySource: "print('looks right')" })),
    (error) => {
      assert.equal(error.recovery.boundary, "pythonPrimary");
      assert.equal(error.recovery.answerIncluded, false);
      assert.equal(error.recovery.retryBlank, true);
      assert.equal(error.recovery.transientWorkCleared, true);
      assert.deepEqual(error.recovery.focusIntent, { group: "pythonPrimary", target: "python_primary_heading" });
      assert.doesNotMatch(JSON.stringify(error.recovery), /looks right/);
      return true;
    },
  );
  assert.throws(() => runManyfoldReturnProtectedJourneySmoke(fixture({
    flags: { truth_inferred: true },
  })));
});

test("text-analysis dimensions, retrieval, transfer, and both explanations remain independent", () => {
  const wrong = structuredClone(manyfoldReturnReferenceAnswers.text.transfer);
  wrong.T04.technique = "sentiment_analysis";
  const result = evaluateManyfoldReturnTextAnalysis("transfer", wrong);
  assert.equal(result.correctness["T04.technique"], false);
  assert.equal(result.correctness["T04.deciding_signal"], true);
  assert.equal(result.score, 7);
  assert.throws(
    () => runManyfoldReturnProtectedJourneySmoke(fixture({
      explanations: {
        ...manyfoldReturnReferenceAnswers.explanations,
        truthBoundary: "a summary is true",
      },
    })),
    (error) => error.recovery.boundary === "truthBoundaryExplanation" && error.recovery.retryBlank === true,
  );
});

test("neutral text interface exposes only course cases and no scenery or frequency answer channel", () => {
  const serialized = JSON.stringify(manyfoldNeutralTextInterface.cases);
  assert.equal(manyfoldNeutralTextInterface.worldContextExcluded, true);
  assert.equal(manyfoldNeutralTextInterface.frequencyExcluded, true);
  assert.deepEqual(Object.fromEntries(Object.entries(manyfoldNeutralTextInterface.cases).map(
    ([form, cases]) => [form, cases.length],
  )), { primary: 4, retrieval: 3, transfer: 4 });
  assert.doesNotMatch(serialized, /SC-06|builder|landscape|receiver|branch|trace|frequency|sealed|stewardship/i);
  assert.doesNotMatch(serialized, /technique"\s*:|deciding_signal/);
});

test("unsafe, private, stale, forged, combined, scenery, frequency, and Tour inputs fail closed", () => {
  const cases = [
    { observationOrder: ["recurring_exposed_trace_range", "recurring_exposed_trace_range", "sealed_branch_unavailable", "layered_stewardship_visible"] },
    { observationOrder: ["recurring_exposed_trace_range", "bounded_divergent_trace", "forged", "layered_stewardship_visible"] },
    { orientAction: "AUTO ORIENT" },
    { inspectAction: "INSPECT AND SAVE" },
    { runAction: "RUN LIVE FIELD" },
    { saveAction: "RUN AND SAVE" },
    { finalReturnAction: "OPEN RP-006" },
    { predecessor: { ...verifiedRp004Completion(), checkpoint: "stale" } },
    { predecessor: {
      ...verifiedRp004Completion(),
      note: { ...verifiedRp004Completion().note, relations: ["forged", ...verifiedRp004Completion().note.relations.slice(1)] },
    } },
    { privateNotes: "PRIVATE" },
    { flags: { scenery_derived: true } },
    { flags: { frequency_derived: true } },
    { flags: { tour_derived: true } },
  ];
  for (const replacement of cases) {
    const input = fixture(replacement);
    const campaignBytes = JSON.stringify(input.acceptedCampaign);
    const predecessorBytes = JSON.stringify(input.predecessor);
    const tourBytes = JSON.stringify(input.tour);
    assert.throws(() => runManyfoldReturnProtectedJourneySmoke(input));
    assert.equal(JSON.stringify(input.acceptedCampaign), campaignBytes);
    assert.equal(JSON.stringify(input.predecessor), predecessorBytes);
    assert.equal(JSON.stringify(input.tour), tourBytes);
  }
});

test("partial, forged, contaminated, and private saves reject atomically", () => {
  const valid = runManyfoldReturnProtectedJourneySmoke(fixture()).saved;
  const adapter = createManyfoldReturnPersistenceAdapter();
  assert.equal(adapter.write(valid).status, "committed");
  const baseline = adapter.read();
  const invalid = [
    { ...valid, evidence: valid.evidence.slice(0, 7) },
    { ...valid, note: { ...valid.note, truth: true } },
    { ...valid, note: { ...valid.note, observations: valid.note.observations.slice(0, 3) } },
    { ...valid, evidence: valid.evidence.map((record, index) => index === 0
      ? { ...record, dimension_correctness: { forged: true } }
      : record) },
    { ...valid, learner_source: "PRIVATE" },
  ];
  for (const candidate of invalid) {
    assert.equal(adapter.write(candidate).status, "rejected");
    assert.equal(adapter.read(), baseline);
  }
});

test("resume keeps only a contiguous finalized prefix and re-observes all transient physical facts", () => {
  const resumed = deriveManyfoldReturnResume({
    finalized: {
      pythonPrimary: true,
      pythonTrace: false,
      pythonTransfer: true,
      textPrimary: true,
    },
    privateNotes: "PRIVATE",
    learner_source: "PRIVATE SOURCE",
  });
  assert.equal(resumed.phase, "MF-10 INSPECT DISTRIBUTION");
  assert.equal(resumed.completion.observations, false);
  assert.equal(resumed.completion.pythonPrimary, true);
  assert.equal(resumed.completion.pythonTrace, false);
  assert.equal(resumed.completion.pythonTransfer, false);
  assert.equal(resumed.completion.textPrimary, false);
  assert.deepEqual(resumed.focusIntent, { group: "observations", target: "distribution_observations_heading" });
  assert.doesNotMatch(JSON.stringify(resumed), /PRIVATE|learner_source/);

  const saved = runManyfoldReturnProtectedJourneySmoke(fixture()).saved;
  const restored = deriveManyfoldReturnResume(saved);
  assert.equal(restored.phase, "verified_restore");
  assert.equal(restored.saved.checkpoint, "manyfold_return_complete");
  assert.deepEqual(restored.replayedEvents, []);
});

test("saved evidence is allowlisted, Tour is isolated, and no world or authority delta occurs", () => {
  const result = runManyfoldReturnProtectedJourneySmoke(fixture());
  assert.equal(result.protected, true);
  assert.equal(result.routable, false);
  assert.equal(result.offlineOnly, true);
  assert.equal(result.browserStorageUsed, false);
  assert.equal(result.networkUsed, false);
  assert.equal(result.liveWorldRead, false);
  assert.equal(result.externalActionEnabled, false);
  assert.equal(result.authorityGranted, false);
  assert.equal(result.examCreditGranted, false);
  assert.equal(result.examGuarantee, false);
  assert.equal(result.cityStateDelta, null);
  assert.equal(result.externalStateDelta, null);
  assert.equal(result.worldStateChanged, false);
  assert.equal(result.successor, null);
  assert.deepEqual(result.tourProbe, {
    mode: "demo_tour",
    observationsFinalized: false,
    masteryFinalized: false,
    saveStatus: "tour_preview_only",
    routeUnlocked: false,
    successor: null,
    adapterValue: null,
  });
  assert.doesNotMatch(
    JSON.stringify(result.saved),
    /learner_source|raw_case_answers|free_form|private|credential|endpoint|payload|response|exam_item|external_action/i,
  );
});

test("responsive metadata, explicit returns, and destinationless continuation preserve accessibility", () => {
  assert.deepEqual(manyfoldReturnPresentation.representativeViewport, { width: 1920, height: 1080 });
  assert.equal(manyfoldReturnPresentation.fullShell.fitWithinDynamicViewport, true);
  assert.equal(manyfoldReturnPresentation.fullShell.outerVerticalScroll, false);
  assert.equal(manyfoldReturnPresentation.reflow.textZoomPercent, 200);
  assert.equal(manyfoldReturnPresentation.reflow.verticalScrollAllowed, true);
  assert.equal(manyfoldReturnPresentation.accessibility.minTargetCssPx, 44);
  assert.equal(manyfoldReturnPresentation.accessibility.modalities.length, 7);
  assert.equal(manyfoldReturnPresentation.firstPerson, true);
  assert.equal(manyfoldReturnPresentation.protagonistVisible, false);
  assert.equal(manyfoldReturnPresentation.shipVisible, false);
  assert.deepEqual(deriveManyfoldReturnSafeReturn(manyfoldReturnActions.returnThreeCurrentReach), {
    target: "RP-004",
    continuation: "continuation",
    cityStateDelta: null,
    externalStateDelta: null,
    replayedEvents: [],
    successor: null,
    authorityGranted: false,
    externalActionEnabled: false,
  });
});

test("protected RP-005 stays unimported, storage-free, network-free, DOM-free, and absent from built entrypoints", async () => {
  const [source, app, main] = await Promise.all([
    readFile(new URL("../src/ManyfoldReturnProtectedJourney.js", import.meta.url), "utf8"),
    readFile(new URL("../src/App.jsx", import.meta.url), "utf8"),
    readFile(new URL("../src/main.jsx", import.meta.url), "utf8"),
  ]);
  assert.doesNotMatch(source, /localStorage|sessionStorage|indexedDB|fetch\s*\(|XMLHttpRequest|WebSocket|navigator\.|document\.|window\./i);
  assert.doesNotMatch(app, /ManyfoldReturnProtectedJourney|runManyfoldReturnProtectedJourneySmoke|rp005\.protected-journey\.v1/);
  assert.doesNotMatch(main, /ManyfoldReturnProtectedJourney|runManyfoldReturnProtectedJourneySmoke|rp005\.protected-journey\.v1/);
  const distAssets = await readdir(new URL("../dist/assets/", import.meta.url));
  const jsAssets = distAssets.filter((name) => name.endsWith(".js"));
  for (const asset of jsAssets) {
    const built = await readFile(new URL(`../dist/assets/${asset}`, import.meta.url), "utf8");
    assert.doesNotMatch(built, /ManyfoldReturnProtectedJourney|runManyfoldReturnProtectedJourneySmoke|rp005\.protected-journey\.v1/);
  }
});
