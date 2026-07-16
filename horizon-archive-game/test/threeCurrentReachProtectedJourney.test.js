import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { performance } from "node:perf_hooks";
import test from "node:test";
import {
  calibrationMarginActions,
  calibrationMarginReferenceAnswers,
  calibrationMarginReferenceSources,
  runCalibrationMarginProtectedJourneySmoke,
} from "../src/CalibrationMarginProtectedJourney.js";
import {
  THREE_CURRENT_REACH_PROTECTED_JOURNEY_VERSION,
  createThreeCurrentReachPersistenceAdapter,
  deriveThreeCurrentReachResume,
  deriveThreeCurrentReachSafeReturn,
  evaluateThreeCurrentReachPython,
  evaluateThreeCurrentReachWorkloads,
  runThreeCurrentReachProtectedJourneySmoke,
  threeCurrentNeutralWorkloadInterface,
  threeCurrentReachActions,
  threeCurrentReachPresentation,
  threeCurrentReachReferenceAnswers,
  threeCurrentReachReferenceSources,
} from "../src/ThreeCurrentReachProtectedJourney.js";

function rp003Prerequisites() {
  return {
    python: {
      lessonId: "L-03-02",
      skillId: "PY-010",
      primaryScore: 8,
      transferScore: 8,
      explanationComplete: true,
      masteryStatus: "mastered",
    },
    ai901: {
      lessonId: "L-05-07",
      objectiveId: "AI901-D2-O7",
      primaryScore: 12,
      transferComplete: true,
      provenanceComplete: true,
      nullFalseComplete: true,
      masteryStatus: "mastered",
    },
  };
}

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
  const result = runCalibrationMarginProtectedJourneySmoke({
    predecessor: {
      packetId: "RP-002",
      checkpoint: "comparison_complete",
      verificationStatus: "verified",
      civicComparisonSaved: true,
      nextSurveyDirectionMarked: true,
      continuation: campaign.continuation,
      cityStateDelta: null,
    },
    prerequisites: rp003Prerequisites(),
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
  });
  return result.saved;
}

function completedPrerequisites() {
  return {
    python: {
      lessonId: "L-03-02",
      skillId: "PY-011",
      primaryScore: 8,
      retrievalComplete: true,
      transferScore: 8,
      masteryStatus: "mastered",
    },
    ai901: {
      lessonId: "L-06-01",
      objectiveId: "AI901-D1-O4",
      objectiveReady: true,
      masteryStatus: "mastered",
      sourceLessonIds: ["L-04-01", "L-04-02", "L-04-03", "L-04-04", "L-05-04"],
    },
  };
}

function fixture(overrides = {}) {
  return {
    predecessor: verifiedRp003Completion(),
    prerequisites: completedPrerequisites(),
    acceptedCampaign: acceptedCampaign(),
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

test("one protected caller traverses TR-00 through TR-40 through every real evaluator under five minutes", () => {
  const input = fixture();
  const campaignBytes = JSON.stringify(input.acceptedCampaign);
  const predecessorBytes = JSON.stringify(input.predecessor);
  const tourBytes = JSON.stringify(input.tour);
  const started = performance.now();
  const result = runThreeCurrentReachProtectedJourneySmoke(input);
  const elapsedMs = performance.now() - started;

  assert.equal(result.version, THREE_CURRENT_REACH_PROTECTED_JOURNEY_VERSION);
  assert.ok(elapsedMs < threeCurrentReachPresentation.referenceSmokeMaxSeconds * 1000);
  assert.deepEqual(result.timeline, [
    "TR-00 ARRIVE + ORIENT",
    "TR-10 OBSERVE THREE RELATIONS",
    "TR-20 TRACE COMMON RETURN",
    "TR-30 RELATE + SAVE",
    "TR-40 VERIFY + RETURN",
  ]);
  assert.equal(Object.values(result.completion).every(Boolean), true);
  assert.equal(result.saved.evidence.length, 8);
  assert.equal(result.saved.note.purpose, null);
  assert.deepEqual(result.restored, {
    phase: "verified_restore",
    checkpoint: "three_current_reach_complete",
    focusIntent: { group: "verified_restore", target: "saved_controls" },
    replayedEvents: [],
  });
  assert.equal(result.earlyReturn.target, "RP-003");
  assert.equal(result.returnedRoute.target, "CITY_THRESHOLD");
  assert.deepEqual(result.onwardContinuation, { recorded: true, destination: null, routeOpened: false });
  assert.equal(JSON.stringify(input.acceptedCampaign), campaignBytes);
  assert.equal(JSON.stringify(input.predecessor), predecessorBytes);
  assert.equal(JSON.stringify(input.tour), tourBytes);
});

test("all six deliberate relation orders converge before the separate purpose-unknown return observation", () => {
  const observations = [
    "suspended_matter_porous_relation",
    "cyclic_pressure_tensioned_relation",
    "conducted_heat_jointed_relation",
  ];
  const snapshots = permutations(observations)
    .map((observationOrder) => runThreeCurrentReachProtectedJourneySmoke(fixture({ observationOrder })))
    .map((result) => JSON.stringify({
      completion: result.completion,
      saved: result.saved,
      restored: result.restored,
      returnedRoute: result.returnedRoute,
    }));
  assert.equal(snapshots.length, 6);
  assert.equal(new Set(snapshots).size, 1);
});

test("missing prerequisites hold only scored work while both story returns remain safe", () => {
  const result = runThreeCurrentReachProtectedJourneySmoke(fixture({
    prerequisites: { python: { masteryStatus: "in_progress" } },
  }));
  assert.equal(result.status, "prerequisite_hold");
  assert.equal(result.storyNavigationLocked, false);
  assert.equal(result.earlyReturn.target, "RP-003");
  assert.equal(result.cityStateDelta, null);
  assert.equal(result.externalStateDelta, null);
  assert.equal(result.successor, null);
  assert.deepEqual(result.completion, {});
});

test("hardcoded, wrong-count, wrong-order, mutated-input, and live-source Python shortcuts fail real checks", () => {
  const sources = [
    "correspondence = [{'sample_id': 'suspension_replica', 'corridor': 'porous'}]",
    threeCurrentReachReferenceSources.primary.replace("for sample in samples:", "for sample in samples[:2]:"),
    threeCurrentReachReferenceSources.primary.replace("corridor_for_form[sample[\"form\"]]", "corridor_for_form[samples[0][\"form\"]]"),
    threeCurrentReachReferenceSources.primary.replace('"form": "particulate"', '"form": "thermal"'),
    `${threeCurrentReachReferenceSources.primary}\nopen("live_source")`,
  ];
  for (const source of sources) assert.equal(evaluateThreeCurrentReachPython("primary", source).passed, false);
});

test("a Python miss and a purpose inference fail locally with answer-free blank recovery", () => {
  const badPython = fixture({ pythonPrimarySource: "print('looks right')", privateNotes: "PRIVATE" });
  assert.throws(
    () => runThreeCurrentReachProtectedJourneySmoke(badPython),
    (error) => {
      assert.equal(error.recovery.boundary, "pythonPrimary");
      assert.equal(error.recovery.answerIncluded, false);
      assert.equal(error.recovery.retryBlank, true);
      assert.equal(error.recovery.transientWorkCleared, true);
      assert.doesNotMatch(JSON.stringify(error.recovery), /PRIVATE|looks right/);
      return true;
    },
  );
  assert.throws(
    () => runThreeCurrentReachProtectedJourneySmoke(fixture({
      commonReturnObservation: { observed: true, purpose: "distribution" },
    })),
    (error) => error.recovery.boundary === "commonReturn" && error.recovery.answerIncluded === false,
  );
});

test("workload dimensions and both explanations are independently strict", () => {
  const wrong = structuredClone(threeCurrentReachReferenceAnswers.workloads.transfer);
  wrong.T06.workload = "computer_vision";
  const result = evaluateThreeCurrentReachWorkloads("transfer", wrong);
  assert.equal(result.correctness["T06.workload"], false);
  assert.equal(result.correctness["T06.deciding_signal"], true);
  assert.equal(result.score, 11);
  assert.throws(
    () => runThreeCurrentReachProtectedJourneySmoke(fixture({
      explanations: {
        ...threeCurrentReachReferenceAnswers.explanations,
        agenticBoundary: "it uses text",
      },
    })),
    (error) => error.recovery.boundary === "agenticExplanation" && error.recovery.retryBlank === true,
  );
});

test("neutral workload interface has only frozen course cases and no landscape-derived answer channel", () => {
  const serialized = JSON.stringify(threeCurrentNeutralWorkloadInterface);
  assert.equal(threeCurrentNeutralWorkloadInterface.worldContextExcluded, true);
  assert.deepEqual(Object.fromEntries(Object.entries(threeCurrentNeutralWorkloadInterface.cases).map(
    ([form, cases]) => [form, cases.length],
  )), { primary: 6, retrieval: 4, transfer: 6 });
  assert.doesNotMatch(serialized, /SC-05|builder|landscape|current|corridor|particulate|porous|tensioned|jointed|suspended|cyclic|heat/i);
  assert.doesNotMatch(serialized, /workload"\s*:|deciding_signal/);
});

test("wrong, duplicate, forged, combined, stale, landscape-derived, and Tour-derived intents fail closed", () => {
  const cases = [
    { observationOrder: ["suspended_matter_porous_relation", "suspended_matter_porous_relation", "conducted_heat_jointed_relation"] },
    { observationOrder: ["suspended_matter_porous_relation", "cyclic_pressure_tensioned_relation", "forged"] },
    { orientAction: "AUTO ORIENT" },
    { commonReturnAction: "RECORD AND OPEN ROUTE" },
    { runAction: "RUN LIVE LANDSCAPE" },
    { saveAction: "RUN AND SAVE" },
    { finalReturnAction: "OPEN RP-005" },
    { predecessor: { ...verifiedRp003Completion(), checkpoint: "stale" } },
    { workloadAnswers: { landscapeDerived: true } },
  ];
  for (const replacement of cases) {
    const input = fixture(replacement);
    const campaignBytes = JSON.stringify(input.acceptedCampaign);
    const predecessorBytes = JSON.stringify(input.predecessor);
    const tourBytes = JSON.stringify(input.tour);
    assert.throws(() => runThreeCurrentReachProtectedJourneySmoke(input));
    assert.equal(JSON.stringify(input.acceptedCampaign), campaignBytes);
    assert.equal(JSON.stringify(input.predecessor), predecessorBytes);
    assert.equal(JSON.stringify(input.tour), tourBytes);
  }
});

test("partial, forged, contaminated, and private saves are rejected atomically", () => {
  const valid = runThreeCurrentReachProtectedJourneySmoke(fixture()).saved;
  const adapter = createThreeCurrentReachPersistenceAdapter();
  assert.equal(adapter.write(valid).status, "committed");
  const baseline = adapter.read();
  const invalid = [
    { ...valid, evidence: valid.evidence.slice(0, 7) },
    { ...valid, note: { ...valid.note, purpose: "routing" } },
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

test("resume preserves only contiguous finalized scored boundaries and re-observes transient landscape facts", () => {
  const resumed = deriveThreeCurrentReachResume({
    finalized: {
      pythonPrimary: true,
      pythonRetrieval: false,
      pythonTransfer: true,
      workloadPrimary: true,
    },
    privateNotes: "PRIVATE",
    learner_source: "PRIVATE SOURCE",
  });
  assert.equal(resumed.phase, "TR-10 OBSERVE THREE RELATIONS");
  assert.equal(resumed.completion.relations, false);
  assert.equal(resumed.completion.commonReturn, false);
  assert.equal(resumed.completion.pythonPrimary, true);
  assert.equal(resumed.completion.pythonRetrieval, false);
  assert.equal(resumed.completion.pythonTransfer, false);
  assert.equal(resumed.completion.workloadPrimary, false);
  assert.deepEqual(resumed.focusIntent, { group: "relations", target: "relation_observations_heading" });
  assert.doesNotMatch(JSON.stringify(resumed), /PRIVATE|learner_source/);

  const saved = runThreeCurrentReachProtectedJourneySmoke(fixture()).saved;
  const restored = deriveThreeCurrentReachResume(saved);
  assert.equal(restored.phase, "verified_restore");
  assert.equal(restored.saved.checkpoint, "three_current_reach_complete");
  assert.deepEqual(restored.replayedEvents, []);
});

test("saved evidence is allowlisted, Tour is isolated, and scenery grants no credit or authority", () => {
  const result = runThreeCurrentReachProtectedJourneySmoke(fixture());
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

test("responsive metadata and explicit returns preserve accessibility and open no successor", () => {
  assert.deepEqual(threeCurrentReachPresentation.representativeViewport, { width: 1920, height: 1080 });
  assert.equal(threeCurrentReachPresentation.fullShell.fitWithinDynamicViewport, true);
  assert.equal(threeCurrentReachPresentation.fullShell.outerVerticalScroll, false);
  assert.equal(threeCurrentReachPresentation.reflow.textZoomPercent, 200);
  assert.equal(threeCurrentReachPresentation.reflow.verticalScrollAllowed, true);
  assert.equal(threeCurrentReachPresentation.accessibility.minTargetCssPx, 44);
  assert.equal(threeCurrentReachPresentation.accessibility.modalities.length, 7);
  assert.equal(threeCurrentReachPresentation.firstPerson, true);
  assert.equal(threeCurrentReachPresentation.protagonistVisible, false);
  assert.equal(threeCurrentReachPresentation.shipVisible, false);
  assert.deepEqual(deriveThreeCurrentReachSafeReturn(threeCurrentReachActions.returnCalibrationMargin), {
    target: "RP-003",
    continuation: "continuation",
    cityStateDelta: null,
    externalStateDelta: null,
    replayedEvents: [],
    successor: null,
    authorityGranted: false,
    externalActionEnabled: false,
  });
});

test("protected RP-004 remains unimported, storage-free, network-free, DOM-free, and absent from accepted entrypoints", async () => {
  const [source, app, main] = await Promise.all([
    readFile(new URL("../src/ThreeCurrentReachProtectedJourney.js", import.meta.url), "utf8"),
    readFile(new URL("../src/App.jsx", import.meta.url), "utf8"),
    readFile(new URL("../src/main.jsx", import.meta.url), "utf8"),
  ]);
  assert.doesNotMatch(source, /localStorage|sessionStorage|indexedDB|fetch\s*\(|XMLHttpRequest|WebSocket|navigator\.|document\.|window\./i);
  assert.doesNotMatch(app, /ThreeCurrentReachProtectedJourney|runThreeCurrentReachProtectedJourneySmoke|RP-004|SC-05/);
  assert.doesNotMatch(main, /ThreeCurrentReachProtectedJourney|runThreeCurrentReachProtectedJourneySmoke|RP-004|SC-05/);
});
