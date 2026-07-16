import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { performance } from "node:perf_hooks";
import test from "node:test";
import {
  CALIBRATION_MARGIN_PROTECTED_JOURNEY_VERSION,
  calibrationMarginActions,
  calibrationMarginPresentation,
  calibrationMarginReferenceAnswers,
  calibrationMarginReferenceSources,
  createCalibrationMarginPersistenceAdapter,
  deriveCalibrationMarginSafeReturn,
  evaluateCalibrationMarginInformationExtraction,
  evaluateCalibrationMarginPython,
  runCalibrationMarginProtectedJourneySmoke,
} from "../src/CalibrationMarginProtectedJourney.js";

function completedPrerequisites() {
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

function fixture(overrides = {}) {
  const acceptedCampaign = {
    packetId: "RP-001",
    checkpoint: "accepted",
    continuation: "continuation",
    cityStateDelta: null,
    world: { clock: 23, cameraClock: 8, cropClock: 4, effectClock: 2 },
    successor: null,
    authority: null,
    externalAction: null,
  };
  const tour = { mode: "demo_tour", cursor: "rp003", noCredit: true };
  return {
    predecessor: {
      packetId: "RP-002",
      checkpoint: "comparison_complete",
      verificationStatus: "verified",
      civicComparisonSaved: true,
      nextSurveyDirectionMarked: true,
      continuation: acceptedCampaign.continuation,
      cityStateDelta: null,
    },
    prerequisites: completedPrerequisites(),
    acceptedCampaign,
    tour,
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

test("one protected caller traverses CM-00 through CM-50 with the real evaluators under five minutes", () => {
  const input = fixture();
  const campaignBytes = JSON.stringify(input.acceptedCampaign);
  const tourBytes = JSON.stringify(input.tour);
  const started = performance.now();
  const result = runCalibrationMarginProtectedJourneySmoke(input);
  const elapsedMs = performance.now() - started;

  assert.equal(result.version, CALIBRATION_MARGIN_PROTECTED_JOURNEY_VERSION);
  assert.ok(elapsedMs < calibrationMarginPresentation.referenceSmokeMaxSeconds * 1000);
  assert.deepEqual(result.timeline, [
    "CM-00 ARRIVE + IDLE",
    "CM-10 SURVEY",
    "CM-20-23 PYTHON",
    "CM-30-34 EXTRACTION",
    "CM-40 BOUNDED REVIEW",
    "CM-41 ATOMIC SAVE",
    "CM-50 VERIFY + RETURN",
  ]);
  assert.equal(Object.values(result.completion).every(Boolean), true);
  assert.equal(result.saved.evidence.length, 7);
  assert.deepEqual(result.restored, {
    phase: "verified_restore",
    checkpoint: "calibration_margin_complete",
    focusIntent: { group: "verified_restore", target: "saved_controls" },
    replayedEvents: [],
  });
  assert.equal(result.earlyReturn.target, "RP-002");
  assert.equal(result.returnedRoute.target, "CITY_THRESHOLD");
  assert.deepEqual(result.onwardBearing, { marked: true, destination: null, routeOpened: false });
  assert.equal(JSON.stringify(input.acceptedCampaign), campaignBytes);
  assert.equal(JSON.stringify(input.tour), tourBytes);
});

test("all six deliberate observation orders converge without changing the saved meaning", () => {
  const snapshots = permutations(["correspondence", "bounded_difference", "sealed_unavailable"])
    .map((observationOrder) => runCalibrationMarginProtectedJourneySmoke(fixture({ observationOrder })))
    .map((result) => JSON.stringify({
      completion: result.completion,
      saved: result.saved,
      restored: result.restored,
      returnedRoute: result.returnedRoute,
    }));
  assert.equal(snapshots.length, 6);
  assert.equal(new Set(snapshots).size, 1);
});

test("missing prerequisites hold only the scored work and preserve both reversible story returns", () => {
  const input = fixture({ prerequisites: { python: { masteryStatus: "in_progress" } } });
  const result = runCalibrationMarginProtectedJourneySmoke(input);
  assert.equal(result.status, "prerequisite_hold");
  assert.equal(result.storyNavigationLocked, false);
  assert.equal(result.earlyReturn.target, "RP-002");
  assert.equal(result.cityStateDelta, null);
  assert.equal(result.successor, null);
  assert.deepEqual(result.completion, {});
});

test("Python output-only, sealed-source, forbidden-operation, and mutated-input shortcuts fail real checks", () => {
  const cases = [
    "comparison = [{'index': 0, 'status': 'corresponding'}]",
    calibrationMarginReferenceSources.primary.replace(
      'sealed_source = {"status": "unavailable", "value": None}',
      'sealed_source = open("sealed")',
    ),
    calibrationMarginReferenceSources.primary.replace(
      'exposed_a = ["steady", "rise", "steady", "cool"]',
      'exposed_a = ["steady", "rise", "hold", "cool"]',
    ),
    `${calibrationMarginReferenceSources.primary}\nprint(comparison)`,
  ];
  for (const source of cases) assert.equal(evaluateCalibrationMarginPython("primary", source).passed, false);
});

test("a Python miss fails locally with answer-free blank remediation and private work omitted", () => {
  const input = fixture({ pythonPrimarySource: "print('looks right')", privateNotes: "PRIVATE" });
  const campaignBytes = JSON.stringify(input.acceptedCampaign);
  assert.throws(
    () => runCalibrationMarginProtectedJourneySmoke(input),
    (error) => {
      assert.equal(error.recovery.boundary, "pythonPrimary");
      assert.equal(error.recovery.answerIncluded, false);
      assert.equal(error.recovery.retryBlank, true);
      assert.equal(error.recovery.transientWorkCleared, true);
      assert.doesNotMatch(JSON.stringify(error.recovery), /PRIVATE|print\('looks right'\)/);
      return true;
    },
  );
  assert.equal(JSON.stringify(input.acceptedCampaign), campaignBytes);
});

test("information-extraction dimensions are independently scored and remit only the failed dimension", () => {
  const wrong = structuredClone(calibrationMarginReferenceAnswers.ai.transfer);
  wrong.T01.unsupported_rule = "treat_missing_audio_as_no_alarm";
  const result = evaluateCalibrationMarginInformationExtraction("transfer", wrong);
  assert.deepEqual(result.correctness, {
    input_boundary: true,
    output_contract: true,
    unsupported_rule: false,
  });
  assert.equal(result.score, 2);
  assert.equal(result.passed, false);
});

test("wrong, duplicate, forged, combined, stale, and sealed-source intents fail closed", () => {
  const cases = [
    { observationOrder: ["correspondence", "correspondence", "sealed_unavailable"] },
    { observationOrder: ["correspondence", "bounded_difference", "forged"] },
    { orientAction: "AUTO ORIENT" },
    { runAction: "RUN AND SAVE" },
    { saveAction: "SAVE" },
    { finalReturnAction: "OPEN RP-004" },
    { predecessor: { ...fixture().predecessor, verificationStatus: "stale" } },
  ];
  for (const replacement of cases) {
    const input = fixture(replacement);
    const campaignBytes = JSON.stringify(input.acceptedCampaign);
    const tourBytes = JSON.stringify(input.tour);
    assert.throws(() => runCalibrationMarginProtectedJourneySmoke(input));
    assert.equal(JSON.stringify(input.acceptedCampaign), campaignBytes);
    assert.equal(JSON.stringify(input.tour), tourBytes);
  }
});

test("partial, forged, and private save records are rejected atomically", () => {
  const valid = runCalibrationMarginProtectedJourneySmoke(fixture()).saved;
  const adapter = createCalibrationMarginPersistenceAdapter();
  assert.equal(adapter.write(valid).status, "committed");
  const baseline = adapter.read();
  for (const invalid of [
    { ...valid, evidence: valid.evidence.slice(0, 6) },
    { ...valid, evidence: valid.evidence.map((record, index) => index === 0
      ? { ...record, mastery_status: "mastered", dimension_correctness: { forged: true } }
      : record) },
    { ...valid, learner_source: "PRIVATE", evidence: valid.evidence.slice(0, 6) },
  ]) {
    assert.equal(adapter.write(invalid).status, "rejected");
    assert.equal(adapter.read(), baseline);
  }
});

test("saved evidence is allowlisted, Tour is isolated, and no authority or cross-credit appears", () => {
  const result = runCalibrationMarginProtectedJourneySmoke(fixture());
  assert.equal(result.protected, true);
  assert.equal(result.routable, false);
  assert.equal(result.offlineOnly, true);
  assert.equal(result.browserStorageUsed, false);
  assert.equal(result.externalActionEnabled, false);
  assert.equal(result.authorityGranted, false);
  assert.equal(result.examCreditGranted, false);
  assert.equal(result.examGuarantee, false);
  assert.equal(result.cityStateDelta, null);
  assert.equal(result.worldStateChanged, false);
  assert.equal(result.sealedSourceRead, false);
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
    /learner_source|raw_exposed|sealed_source_content|free_form|private|credential|endpoint|payload|response|exam_item|external_action/i,
  );
});

test("responsive metadata and explicit safe-return boundaries carry no route or mastery side effect", () => {
  assert.deepEqual(calibrationMarginPresentation.representativeViewport, { width: 1920, height: 1080 });
  assert.equal(calibrationMarginPresentation.fullShell.fitWithinDynamicViewport, true);
  assert.equal(calibrationMarginPresentation.fullShell.outerVerticalScroll, false);
  assert.equal(calibrationMarginPresentation.reflow.textZoomPercent, 200);
  assert.equal(calibrationMarginPresentation.reflow.verticalScrollAllowed, true);
  assert.equal(calibrationMarginPresentation.accessibility.minTargetCssPx, 44);
  assert.equal(calibrationMarginPresentation.accessibility.modalities.length, 7);
  assert.equal(calibrationMarginPresentation.firstPerson, true);
  assert.equal(calibrationMarginPresentation.protagonistVisible, false);
  assert.equal(calibrationMarginPresentation.shipVisible, false);
  assert.deepEqual(deriveCalibrationMarginSafeReturn(calibrationMarginActions.returnCivicComparison), {
    target: "RP-002",
    continuation: "continuation",
    cityStateDelta: null,
    replayedEvents: [],
    successor: null,
    authorityGranted: false,
    externalActionEnabled: false,
  });
});

test("protected RP-003 remains unimported, storage-free, network-free, and absent from accepted entrypoints", async () => {
  const [source, app, main] = await Promise.all([
    readFile(new URL("../src/CalibrationMarginProtectedJourney.js", import.meta.url), "utf8"),
    readFile(new URL("../src/App.jsx", import.meta.url), "utf8"),
    readFile(new URL("../src/main.jsx", import.meta.url), "utf8"),
  ]);
  assert.doesNotMatch(source, /localStorage|sessionStorage|indexedDB|fetch\s*\(|XMLHttpRequest|WebSocket|navigator\.|document\.|window\./i);
  assert.doesNotMatch(app, /CalibrationMarginProtectedJourney|runCalibrationMarginProtectedJourneySmoke|RP-003|SC-04/);
  assert.doesNotMatch(main, /CalibrationMarginProtectedJourney|runCalibrationMarginProtectedJourneySmoke|RP-003|SC-04/);
});
