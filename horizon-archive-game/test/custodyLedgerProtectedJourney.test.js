import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { performance } from "node:perf_hooks";
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
  CUSTODY_LEDGER_PROTECTED_JOURNEY_VERSION,
  custodyLedgerProtectedJourneyActions,
  custodyLedgerProtectedJourneyPresentation,
  custodyLedgerProtectedJourneyReferenceDefaults,
  runCustodyLedgerProtectedJourneySmoke,
} from "../src/CustodyLedgerProtectedJourney.js";
import {
  custodyLedgerExplanationAnswers,
  custodyLedgerPrimaryReferenceSource,
  custodyLedgerRAIExplanationAnswers,
  custodyLedgerTransferReferenceSource,
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
  const answers = (form) => Object.fromEntries(cum01Forms[form].map((item) => [
    item.id,
    { decision: item.decision, reason: item.reason },
  ]));
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

const raiTransferAnswers = Object.freeze({
  T01: Object.freeze({ principle: "transparency", mitigation: "preserve_provenance_missingness_and_limits", owner: "human_evidence_reviewer" }),
  T02: Object.freeze({ principle: "privacy_and_security", mitigation: "do_not_open_or_retain_unneeded_private_data", owner: "human_privacy_reviewer" }),
  T03: Object.freeze({ principle: "accountability", mitigation: "assign_review_audit_and_correction_responsibility", owner: "human_decision_owner" }),
});

function fixture(overrides = {}) {
  const acceptedCampaign = {
    packetId: "RP-001",
    checkpoint: "accepted",
    continuation: "continuation",
    cityStateDelta: null,
    world: { clock: 17, cameraClock: 8, cropClock: 4, effectClock: 2 },
    identityMaterialClosed: true,
    successor: null,
    authority: null,
    access: null,
    externalAction: null,
  };
  const tour = { mode: "demo_tour", cursor: "rp002", noCredit: true };
  return {
    routePredecessor: {
      verificationStatus: "verified",
      cityThresholdAnchorRecorded: true,
      civicDistrictRouteAvailable: true,
    },
    learningPredecessor: completedPredecessor(),
    prerequisiteEvidence: completedPrerequisites(),
    continuation: acceptedCampaign.continuation,
    acceptedCampaign,
    tour,
    nearOrder: ["fixed_trace", "later_stewardship", "outlined_gap"],
    farOrder: ["distant_repetition", "closed_boundary"],
    compareScaleAction: custodyLedgerProtectedJourneyActions.compareScale,
    openLocalComparisonAction: custodyLedgerProtectedJourneyActions.openLocalComparison,
    pythonPrimarySource: custodyLedgerPrimaryReferenceSource,
    pythonTransferSource: custodyLedgerTransferReferenceSource,
    pythonExplanationAnswers: custodyLedgerExplanationAnswers,
    raiPrimaryAnswers: Object.fromEntries(responsibleAIPrimaryScenarios.map((scenario) => [
      scenario.id,
      Object.fromEntries(responsibleAIDimensions.map((dimension) => [dimension, scenario[dimension]])),
    ])),
    raiTransferAnswers,
    raiExplanationAnswers: custodyLedgerRAIExplanationAnswers,
    saveAction: custodyLedgerProtectedJourneyActions.saveBoundedComparison,
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

test("one protected caller traverses P0-P3 through real evaluators in under the five-minute smoke budget", () => {
  const input = fixture();
  const campaignBytes = JSON.stringify(input.acceptedCampaign);
  const tourBytes = JSON.stringify(input.tour);
  const started = performance.now();
  const result = runCustodyLedgerProtectedJourneySmoke(input);
  const elapsedMs = performance.now() - started;

  assert.equal(result.version, CUSTODY_LEDGER_PROTECTED_JOURNEY_VERSION);
  assert.ok(elapsedMs < custodyLedgerProtectedJourneyPresentation.referenceSmokeMaxSeconds * 1000);
  assert.deepEqual(result.timeline, [
    "P0 ARRIVE",
    "P1 SURVEY:NEAR",
    "P1 SURVEY:COMPARE SCALE",
    "P1 SURVEY:FAR",
    "P1 SURVEY:OPEN LOCAL COMPARISON",
    "P2 INTERPRET:PY-009",
    "P2 INTERPRET:RP002-RAI-01",
    "P2 INTERPRET + SAVE:BOUNDED REVIEW",
    "P2 INTERPRET + SAVE:SC-03-40",
    "P3 VERIFY:SC-03-50",
    "P3 RETURN:RP-001",
  ]);
  assert.deepEqual(result.observationIds, [
    "fixed_trace", "later_stewardship", "outlined_gap", "distant_repetition", "closed_boundary",
  ]);
  assert.ok(Object.values(result.learning).every(Boolean));
  assert.deepEqual(result.progression, {
    civicComparisonSaved: true,
    nextSurveyDirectionMarked: true,
    rp002Checkpoint: "comparison_complete",
  });
  assert.deepEqual(result.restored, {
    phase: "verified_restore",
    boardState: "SC-03-50",
    focusIntent: { group: "verified_restore", target: "heading", then: "saved_controls" },
  });
  assert.equal(result.returnedRoute.phase, "RT-00");
  assert.equal(result.returnedRoute.continuation, input.continuation);
  assert.deepEqual(result.tourProbe, {
    routePhase: "RT-T",
    dispatchStatus: "tour_view_only",
    savePhase: "tour_preview",
    adapterValue: {
      civicComparisonSaved: true,
      nextSurveyDirectionMarked: true,
      rp002Checkpoint: "comparison_complete",
    },
  });
  assert.equal(JSON.stringify(input.acceptedCampaign), campaignBytes);
  assert.equal(JSON.stringify(input.tour), tourBytes);
});

test("all six near orders and both far orders converge on the identical protected result", () => {
  const snapshots = [];
  for (const nearOrder of permutations(["fixed_trace", "later_stewardship", "outlined_gap"])) {
    for (const farOrder of [
      ["distant_repetition", "closed_boundary"],
      ["closed_boundary", "distant_repetition"],
    ]) {
      const result = runCustodyLedgerProtectedJourneySmoke(fixture({ nearOrder, farOrder }));
      snapshots.push(JSON.stringify({
        observationIds: [...result.observationIds].sort(),
        learning: result.learning,
        progression: result.progression,
        restored: result.restored,
        returnedRoute: result.returnedRoute,
      }));
    }
  }
  assert.equal(snapshots.length, 12);
  assert.equal(new Set(snapshots).size, 1);
});

test("invalid ordering and missing explicit intents fail closed without mutating accepted or Tour state", () => {
  const cases = [
    { nearOrder: ["fixed_trace", "fixed_trace", "outlined_gap"] },
    { farOrder: ["distant_repetition"] },
    { compareScaleAction: "CONTINUE" },
    { openLocalComparisonAction: "AUTO OPEN" },
    { saveAction: "SAVE" },
    { pythonPrimarySource: "print('looks correct')" },
  ];
  for (const replacement of cases) {
    const input = fixture(replacement);
    const campaignBytes = JSON.stringify(input.acceptedCampaign);
    const tourBytes = JSON.stringify(input.tour);
    assert.throws(() => runCustodyLedgerProtectedJourneySmoke(input));
    assert.equal(JSON.stringify(input.acceptedCampaign), campaignBytes);
    assert.equal(JSON.stringify(input.tour), tourBytes);
  }
});

test("journey output exposes deterministic resume, atomic restore, isolation, and zero cross-credit only", () => {
  const result = runCustodyLedgerProtectedJourneySmoke(fixture());
  assert.equal(result.learning.pythonPrimaryPhaseOnResume, "python_transfer");
  assert.equal(result.learning.finalPhaseOnResume, "rai_complete");
  assert.equal(result.protected, true);
  assert.equal(result.routable, false);
  assert.equal(result.offlineOnly, true);
  assert.equal(result.browserStorageUsed, false);
  assert.equal(result.externalActionEnabled, false);
  assert.equal(result.authorityGranted, false);
  assert.equal(result.examCreditGranted, false);
  assert.equal(result.examGuarantee, false);
  assert.equal(result.cityStateDelta, null);
  assert.equal(result.identityMaterialClosed, true);
  assert.equal(result.successor, null);
  assert.doesNotMatch(JSON.stringify(result), /learnerSource|privateNotes|credentials|endpoints|payloads|responses/);
});

test("presentation metadata carries the future responsive full-shell acceptance without editing the live UI", () => {
  assert.deepEqual(custodyLedgerProtectedJourneyPresentation.representativeViewport, { width: 1920, height: 1080 });
  assert.deepEqual(custodyLedgerProtectedJourneyPresentation.fullShell, {
    fitWithinDynamicViewport: true,
    outerHorizontalScroll: false,
    outerVerticalScroll: false,
    currentActionsVisible: true,
    worldAndActiveGroupVisibleTogether: true,
    optionalCrtConsumesFitBudget: false,
  });
  assert.equal(custodyLedgerProtectedJourneyPresentation.reflow.textZoomPercent, 200);
  assert.equal(custodyLedgerProtectedJourneyPresentation.reflow.verticalScrollAllowed, true);
  assert.equal(custodyLedgerProtectedJourneyPresentation.accessibility.minTargetCssPx, 44);
  assert.equal(custodyLedgerProtectedJourneyPresentation.accessibility.modalities.length, 7);
  assert.equal(custodyLedgerProtectedJourneyReferenceDefaults.saveAction, "SAVE BOUNDED COMPARISON");
});

test("protected journey remains unimported by App/main and contains no browser, storage, or network authority", async () => {
  const [source, app, main] = await Promise.all([
    readFile(new URL("../src/CustodyLedgerProtectedJourney.js", import.meta.url), "utf8"),
    readFile(new URL("../src/App.jsx", import.meta.url), "utf8"),
    readFile(new URL("../src/main.jsx", import.meta.url), "utf8"),
  ]);
  assert.doesNotMatch(source, /localStorage|sessionStorage|indexedDB|fetch\s*\(|XMLHttpRequest|WebSocket|navigator\./i);
  assert.doesNotMatch(app, /CustodyLedgerProtectedJourney|runCustodyLedgerProtectedJourneySmoke/);
  assert.doesNotMatch(main, /CustodyLedgerProtectedJourney|runCustodyLedgerProtectedJourneySmoke/);
});
