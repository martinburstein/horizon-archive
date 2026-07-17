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
  manyfoldReturnActions,
  manyfoldReturnReferenceAnswers,
  manyfoldReturnReferenceSources,
  runManyfoldReturnProtectedJourneySmoke,
} from "../src/ManyfoldReturnProtectedJourney.js";
import {
  INTERVAL_WORKS_PROTECTED_JOURNEY_VERSION,
  createIntervalWorksPersistenceAdapter,
  deriveIntervalWorksResume,
  deriveIntervalWorksSafeReturn,
  evaluateIntervalWorksPython,
  evaluateIntervalWorksSpeech,
  intervalWorksActions,
  intervalWorksNeutralSpeechInterface,
  intervalWorksPresentation,
  intervalWorksReferenceAnswers,
  intervalWorksReferenceSources,
  runIntervalWorksProtectedJourneySmoke,
} from "../src/IntervalWorksProtectedJourney.js";

function acceptedCampaign() {
  return {
    packetId: "RP-001",
    checkpoint: "accepted",
    continuation: "continuation",
    cityStateDelta: null,
    externalStateDelta: null,
    world: { clock: 31, cameraClock: 12, cropClock: 7, effectClock: 5 },
    successor: null,
    authority: null,
    externalAction: null,
  };
}

function verifiedRp003Completion() {
  const campaign = acceptedCampaign();
  return runCalibrationMarginProtectedJourneySmoke({
    predecessor: {
      packetId: "RP-002", checkpoint: "comparison_complete", verificationStatus: "verified",
      civicComparisonSaved: true, nextSurveyDirectionMarked: true,
      continuation: campaign.continuation, cityStateDelta: null,
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

function verifiedRp005Completion() {
  const campaign = acceptedCampaign();
  return runManyfoldReturnProtectedJourneySmoke({
    predecessor: verifiedRp004Completion(),
    prerequisites: {
      python: {
        lessonId: "L-03-02", skillId: "PY-012", primaryScore: 8,
        traceComplete: true, transferScore: 8, masteryStatus: "mastered",
      },
      ai901: {
        lessonId: "L-06-01", objectiveId: "AI901-D1-O5", objectiveReady: true,
        masteryStatus: "mastered", sourceLessonIds: ["L-04-01"],
      },
    },
    acceptedCampaign: campaign,
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
  }).saved;
}

function completedPrerequisites() {
  return {
    python: {
      lessonId: "L-03-03", skillId: "PY-013", primaryScore: 8,
      traceComplete: true, transferScore: 8, masteryStatus: "mastered",
    },
    ai901: {
      lessonId: "L-06-01", objectiveId: "AI901-D1-O6", objectiveReady: true,
      masteryStatus: "mastered", sourceLessonIds: ["L-04-02"],
    },
  };
}

function fixture(overrides = {}) {
  return {
    predecessor: verifiedRp005Completion(),
    prerequisites: completedPrerequisites(),
    acceptedCampaign: acceptedCampaign(),
    tour: { mode: "demo_tour", cursor: "rp006", noCredit: true },
    orientAction: intervalWorksActions.orient,
    inspectAction: intervalWorksActions.inspectMaterialOrder,
    observationOrder: [
      "overlap_crosscut_relative_order",
      "changed_persistent_feature_pair",
      "closed_interval_unavailable",
      "layered_stewardship_visible",
    ],
    runAction: intervalWorksActions.runSequence,
    pythonPrimarySource: intervalWorksReferenceSources.primary,
    pythonTraceAnswers: intervalWorksReferenceAnswers.pythonTrace,
    pythonTransferSource: intervalWorksReferenceSources.transfer,
    speechAnswers: intervalWorksReferenceAnswers.speech,
    explanations: intervalWorksReferenceAnswers.explanations,
    saveAction: intervalWorksActions.saveNote,
    earlyReturnAction: intervalWorksActions.returnManyfold,
    finalReturnAction: intervalWorksActions.returnCityThreshold,
    recordContinuationAction: intervalWorksActions.recordContinuation,
    ...overrides,
  };
}

function permutations(values) {
  if (values.length <= 1) return [values];
  return values.flatMap((value, index) => permutations([
    ...values.slice(0, index), ...values.slice(index + 1),
  ]).map((rest) => [value, ...rest]));
}

test("one protected caller traverses IW-00 through IW-30 through every real evaluator under five minutes", () => {
  const input = fixture();
  const campaignBytes = JSON.stringify(input.acceptedCampaign);
  const predecessorBytes = JSON.stringify(input.predecessor);
  const tourBytes = JSON.stringify(input.tour);
  const started = performance.now();
  const result = runIntervalWorksProtectedJourneySmoke(input);
  const elapsedMs = performance.now() - started;

  assert.equal(result.version, INTERVAL_WORKS_PROTECTED_JOURNEY_VERSION);
  assert.ok(elapsedMs < intervalWorksPresentation.referenceSmokeMaxSeconds * 1000);
  assert.deepEqual(result.timeline, [
    "IW-00 ARRIVE + IDLE", "IW-10 INSPECT MATERIAL ORDER",
    "IW-20 SEQUENCE + SAVE", "IW-30 VERIFY + RETURN",
  ]);
  assert.equal(Object.values(result.completion).every(Boolean), true);
  assert.equal(result.saved.evidence.length, 8);
  assert.equal(result.saved.note.gap, "explicit_unavailable_record");
  assert.equal(result.saved.note.cause, null);
  assert.equal(result.saved.note.purpose, null);
  assert.equal(result.saved.note.destination, null);
  assert.deepEqual(result.restored, {
    phase: "verified_restore", checkpoint: "interval_works_complete",
    focusIntent: { group: "verified_restore", target: "saved_controls" }, replayedEvents: [],
  });
  assert.equal(result.earlyReturn.target, "RP-005");
  assert.equal(result.returnedRoute.target, "CITY_THRESHOLD");
  assert.deepEqual(result.onwardContinuation, { recorded: true, destination: null, routeOpened: false });
  assert.equal(JSON.stringify(input.acceptedCampaign), campaignBytes);
  assert.equal(JSON.stringify(input.predecessor), predecessorBytes);
  assert.equal(JSON.stringify(input.tour), tourBytes);
});

test("all 24 deliberate observation orders converge on one protected interval save", () => {
  const observations = [
    "overlap_crosscut_relative_order", "changed_persistent_feature_pair",
    "closed_interval_unavailable", "layered_stewardship_visible",
  ];
  const snapshots = permutations(observations)
    .map((observationOrder) => runIntervalWorksProtectedJourneySmoke(fixture({ observationOrder })))
    .map((result) => JSON.stringify({
      completion: result.completion, saved: result.saved, restored: result.restored,
      returnedRoute: result.returnedRoute,
    }));
  assert.equal(snapshots.length, 24);
  assert.equal(new Set(snapshots).size, 1);
});

test("missing prerequisites hold scored work while both returns remain safe", () => {
  const result = runIntervalWorksProtectedJourneySmoke(fixture({
    prerequisites: { python: { masteryStatus: "in_progress" } },
  }));
  assert.equal(result.status, "prerequisite_hold");
  assert.equal(result.storyNavigationLocked, false);
  assert.equal(result.earlyReturn.target, "RP-005");
  assert.equal(result.cityStateDelta, null);
  assert.equal(result.externalStateDelta, null);
  assert.equal(result.successor, null);
  assert.deepEqual(result.completion, {});
});

test("hardcoded, sorted, reversed, gap-filled, inferred, mutated, and live-source Python shortcuts fail real checks", () => {
  const sources = [
    "sequence = [{'state_id': 'r1'}]",
    intervalWorksReferenceSources.primary.replace("itertools.chain.from_iterable(record_groups)", "sorted(record_groups)"),
    intervalWorksReferenceSources.primary.replace("itertools.chain.from_iterable(record_groups)", "reversed(record_groups)"),
    intervalWorksReferenceSources.primary.replace('{"state_id": None, "changed": None, "persistent": None, "available": False, "cause": None}', '{"state_id": "r3", "changed": None, "persistent": "continuity", "available": True, "cause": None}'),
    intervalWorksReferenceSources.primary.replace('"cause": None}],\n]', '"cause": "previous_state"}],\n]'),
    `${intervalWorksReferenceSources.primary}\nrecord_groups[0][0] = {}`,
    `${intervalWorksReferenceSources.primary}\nopen("live_interval")`,
  ];
  for (const source of sources) assert.equal(evaluateIntervalWorksPython("primary", source).passed, false);
  assert.equal(evaluateIntervalWorksPython("primary", intervalWorksReferenceSources.primary).score, 8);
  assert.equal(evaluateIntervalWorksPython("transfer", intervalWorksReferenceSources.transfer).score, 8);
});

test("a Python miss and causation inference fail locally with answer-free blank recovery", () => {
  assert.throws(
    () => runIntervalWorksProtectedJourneySmoke(fixture({ pythonPrimarySource: "print('sequence')" })),
    (error) => {
      assert.equal(error.recovery.boundary, "pythonPrimary");
      assert.equal(error.recovery.answerIncluded, false);
      assert.equal(error.recovery.retryBlank, true);
      assert.equal(error.recovery.transientWorkCleared, true);
      assert.deepEqual(error.recovery.focusIntent, { group: "pythonPrimary", target: "python_primary_heading" });
      assert.doesNotMatch(JSON.stringify(error.recovery), /sequence\)/);
      return true;
    },
  );
  assert.throws(() => runIntervalWorksProtectedJourneySmoke(fixture({ flags: { cause_inferred: true } })));
});

test("speech dimensions, retrieval, transfer, and both explanations remain independent", () => {
  const wrong = structuredClone(intervalWorksReferenceAnswers.speech.transfer);
  wrong.T04.capability = "speech_recognition";
  const result = evaluateIntervalWorksSpeech("transfer", wrong);
  assert.equal(result.correctness["T04.capability"], false);
  assert.equal(result.correctness["T04.deciding_signal"], true);
  assert.equal(result.score, 7);
  assert.throws(
    () => runIntervalWorksProtectedJourneySmoke(fixture({
      explanations: {
        ...intervalWorksReferenceAnswers.explanations,
        causationBoundary: "transcript order proves cause",
      },
    })),
    (error) => error.recovery.boundary === "causationBoundaryExplanation" && error.recovery.retryBlank === true,
  );
});

test("neutral speech interface exposes course cases without SC-07 or answer channels", () => {
  const serialized = JSON.stringify(intervalWorksNeutralSpeechInterface.cases);
  assert.equal(intervalWorksNeutralSpeechInterface.worldContextExcluded, true);
  assert.equal(intervalWorksNeutralSpeechInterface.sceneOrderExcluded, true);
  assert.equal(intervalWorksNeutralSpeechInterface.sceneSoundExcluded, true);
  assert.deepEqual(Object.fromEntries(Object.entries(intervalWorksNeutralSpeechInterface.cases).map(
    ([form, cases]) => [form, cases.length],
  )), { primary: 4, retrieval: 2, transfer: 4 });
  assert.doesNotMatch(serialized, /SC-07|builder|landscape|layer|repair|sequence|changed|persistent|closed|stewardship/i);
  assert.doesNotMatch(serialized, /capability"\s*:|deciding_signal/);
});

test("unsafe, private, stale, forged, combined, scene, sound, gap, cause, and Tour inputs fail closed", () => {
  const cases = [
    { observationOrder: ["overlap_crosscut_relative_order", "overlap_crosscut_relative_order", "closed_interval_unavailable", "layered_stewardship_visible"] },
    { observationOrder: ["overlap_crosscut_relative_order", "changed_persistent_feature_pair", "forged", "layered_stewardship_visible"] },
    { orientAction: "AUTO ORIENT" },
    { inspectAction: "INSPECT AND SAVE" },
    { runAction: "RUN LIVE INTERVAL" },
    { saveAction: "RUN AND SAVE" },
    { finalReturnAction: "OPEN RP-007" },
    { predecessor: { ...verifiedRp005Completion(), checkpoint: "stale" } },
    { privateNotes: "PRIVATE" },
    { flags: { scene_derived: true } },
    { flags: { sound_derived: true } },
    { flags: { gap_filled: true } },
    { flags: { cause_inferred: true } },
    { flags: { tour_derived: true } },
  ];
  for (const replacement of cases) {
    const input = fixture(replacement);
    const campaignBytes = JSON.stringify(input.acceptedCampaign);
    const predecessorBytes = JSON.stringify(input.predecessor);
    const tourBytes = JSON.stringify(input.tour);
    assert.throws(() => runIntervalWorksProtectedJourneySmoke(input));
    assert.equal(JSON.stringify(input.acceptedCampaign), campaignBytes);
    assert.equal(JSON.stringify(input.predecessor), predecessorBytes);
    assert.equal(JSON.stringify(input.tour), tourBytes);
  }
});

test("partial, forged, contaminated, causal, and private saves reject atomically", () => {
  const valid = runIntervalWorksProtectedJourneySmoke(fixture()).saved;
  const adapter = createIntervalWorksPersistenceAdapter();
  assert.equal(adapter.write(valid).status, "committed");
  const baseline = adapter.read();
  const invalid = [
    { ...valid, evidence: valid.evidence.slice(0, 7) },
    { ...valid, note: { ...valid.note, cause: "previous_state" } },
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

test("resume keeps one contiguous finalized prefix and re-observes transient physical facts", () => {
  const resumed = deriveIntervalWorksResume({
    finalized: {
      pythonPrimary: true, pythonTrace: false, pythonTransfer: true, speechPrimary: true,
    },
    privateNotes: "PRIVATE", learner_source: "PRIVATE SOURCE",
  });
  assert.equal(resumed.phase, "IW-10 INSPECT MATERIAL ORDER");
  assert.equal(resumed.completion.observations, false);
  assert.equal(resumed.completion.pythonPrimary, true);
  assert.equal(resumed.completion.pythonTrace, false);
  assert.equal(resumed.completion.pythonTransfer, false);
  assert.equal(resumed.completion.speechPrimary, false);
  assert.deepEqual(resumed.focusIntent, { group: "observations", target: "material_order_observations_heading" });
  assert.doesNotMatch(JSON.stringify(resumed), /PRIVATE|learner_source/);

  const saved = runIntervalWorksProtectedJourneySmoke(fixture()).saved;
  const restored = deriveIntervalWorksResume(saved);
  assert.equal(restored.phase, "verified_restore");
  assert.equal(restored.saved.checkpoint, "interval_works_complete");
  assert.deepEqual(restored.replayedEvents, []);
});

test("saved evidence is allowlisted, Tour is isolated, and world, interval, and authority remain unchanged", () => {
  const result = runIntervalWorksProtectedJourneySmoke(fixture());
  assert.equal(result.protected, true);
  assert.equal(result.routable, false);
  assert.equal(result.offlineOnly, true);
  assert.equal(result.browserStorageUsed, false);
  assert.equal(result.networkUsed, false);
  assert.equal(result.liveWorldRead, false);
  assert.equal(result.closedIntervalOpened, false);
  assert.equal(result.externalActionEnabled, false);
  assert.equal(result.authorityGranted, false);
  assert.equal(result.examCreditGranted, false);
  assert.equal(result.examGuarantee, false);
  assert.equal(result.cityStateDelta, null);
  assert.equal(result.externalStateDelta, null);
  assert.equal(result.worldStateChanged, false);
  assert.equal(result.successor, null);
  assert.deepEqual(result.tourProbe, {
    mode: "demo_tour", observationsFinalized: false, masteryFinalized: false,
    saveStatus: "tour_preview_only", routeUnlocked: false, successor: null, adapterValue: null,
  });
  assert.doesNotMatch(
    JSON.stringify(result.saved),
    /learner_source|raw_case_answers|free_form|private|credential|endpoint|payload|response|exam_item|external_action/i,
  );
});

test("responsive metadata, explicit returns, and destinationless continuation preserve accessibility", () => {
  assert.deepEqual(intervalWorksPresentation.representativeViewport, { width: 1920, height: 1080 });
  assert.equal(intervalWorksPresentation.fullShell.fitWithinDynamicViewport, true);
  assert.equal(intervalWorksPresentation.fullShell.outerVerticalScroll, false);
  assert.equal(intervalWorksPresentation.reflow.textZoomPercent, 200);
  assert.equal(intervalWorksPresentation.reflow.verticalScrollAllowed, true);
  assert.equal(intervalWorksPresentation.accessibility.minTargetCssPx, 44);
  assert.equal(intervalWorksPresentation.accessibility.modalities.length, 7);
  assert.equal(intervalWorksPresentation.firstPerson, true);
  assert.equal(intervalWorksPresentation.protagonistVisible, false);
  assert.equal(intervalWorksPresentation.shipVisible, false);
  assert.deepEqual(deriveIntervalWorksSafeReturn(intervalWorksActions.returnManyfold), {
    target: "RP-005", continuation: "continuation", cityStateDelta: null,
    externalStateDelta: null, replayedEvents: [], successor: null,
    authorityGranted: false, externalActionEnabled: false,
  });
});

test("protected RP-006 stays unimported, storage-free, network-free, DOM-free, and absent from built entrypoints", async () => {
  const [source, app, main] = await Promise.all([
    readFile(new URL("../src/IntervalWorksProtectedJourney.js", import.meta.url), "utf8"),
    readFile(new URL("../src/App.jsx", import.meta.url), "utf8"),
    readFile(new URL("../src/main.jsx", import.meta.url), "utf8"),
  ]);
  assert.doesNotMatch(source, /localStorage|sessionStorage|indexedDB|fetch\s*\(|XMLHttpRequest|WebSocket|navigator\.|document\.|window\./i);
  assert.doesNotMatch(app, /IntervalWorksProtectedJourney|runIntervalWorksProtectedJourneySmoke|RP-006|SC-07/);
  assert.doesNotMatch(main, /IntervalWorksProtectedJourney|runIntervalWorksProtectedJourneySmoke|RP-006|SC-07/);
  const distAssets = await readdir(new URL("../dist/assets/", import.meta.url));
  const jsAssets = distAssets.filter((name) => name.endsWith(".js"));
  for (const asset of jsAssets) {
    const built = await readFile(new URL(`../dist/assets/${asset}`, import.meta.url), "utf8");
    assert.doesNotMatch(built, /IntervalWorksProtectedJourney|interval_works_complete|IW-00 ARRIVE|RP006-SPEECH-01/);
  }
});
