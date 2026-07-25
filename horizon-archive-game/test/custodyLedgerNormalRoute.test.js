import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import {
  describeCivicActionAccessibility,
  describeCustodyLedgerPrimaryReturnGroup,
  describeCivicWorldRegionAccessibility,
} from "../src/CivicActionAccessibility.js";
import {
  CUSTODY_LEDGER_NORMAL_ROUTE_SAVE_KEY,
  CUSTODY_LEDGER_NEAR_DETAIL_ACTION,
  CUSTODY_LEDGER_OPEN_PYTHON_PRIMARY_ACTION,
  clearCustodyLedgerNormalRoute,
  createCustodyLedgerNormalExplanationEntry,
  createCustodyLedgerNormalExplanationSubmission,
  createCustodyLedgerNormalPrimaryInteraction,
  createCustodyLedgerNormalPrimaryResultDismissal,
  createCustodyLedgerNormalRAIConclusionReview,
  createCustodyLedgerNormalRAIExplanationConvergence,
  createCustodyLedgerNormalRAIPrimaryConvergence,
  createCustodyLedgerNormalRAIPrimaryEntry,
  createCustodyLedgerNormalRAITransferConvergence,
  createCustodyLedgerNormalTransferInteraction,
  createCustodyLedgerNormalRouteController,
  createCustodyLedgerNormalRouteIntent,
  custodyLedgerRouteActions,
  custodyLedgerRouteOwners,
  readCustodyLedgerNormalRoute,
  sanitizeCustodyLedgerNormalRouteSave,
  writeCustodyLedgerNormalRoute,
} from "../src/CustodyLedgerNormalRoute.js";
import {
  CUSTODY_LEDGER_PRIMARY_INTERACTION_VERSION,
  CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS,
} from "../src/CustodyLedgerPrimaryInteraction.js";
import {
  CUSTODY_LEDGER_CLEAR_RESULT_ACTION,
  CUSTODY_LEDGER_PRIMARY_RESULT_DISMISSAL_VERSION,
} from "../src/CustodyLedgerPrimaryResultDismissal.js";
import { CUSTODY_LEDGER_TRANSFER_INTERACTION_VERSION } from "../src/CustodyLedgerTransferInteraction.js";
import {
  CUSTODY_LEDGER_EXPLANATION_ENTRY_VERSION,
  CUSTODY_LEDGER_OPEN_BLANK_EXPLANATION,
} from "../src/CustodyLedgerExplanationEntry.js";
import {
  CUSTODY_LEDGER_EXPLANATION_SUBMISSION_VERSION,
  CUSTODY_LEDGER_SUBMIT_PYTHON_EXPLANATION,
} from "../src/CustodyLedgerExplanationSubmission.js";
import {
  CUSTODY_LEDGER_OPEN_RAI_PRIMARY,
  CUSTODY_LEDGER_RAI_PRIMARY_ENTRY_VERSION,
} from "../src/CustodyLedgerRAIPrimaryEntry.js";
import {
  CUSTODY_LEDGER_RAI_PRIMARY_CONVERGENCE_VERSION,
  CUSTODY_LEDGER_SUBMIT_RAI_CASE,
} from "../src/CustodyLedgerRAIPrimaryConvergence.js";
import {
  CUSTODY_LEDGER_RAI_TRANSFER_CONVERGENCE_VERSION,
  CUSTODY_LEDGER_SUBMIT_RAI_TRANSFER_CASE,
} from "../src/CustodyLedgerRAITransferConvergence.js";
import {
  CUSTODY_LEDGER_RAI_EXPLANATION_CONVERGENCE_VERSION,
  CUSTODY_LEDGER_RETRY_RAI_EXPLANATION,
  CUSTODY_LEDGER_SUBMIT_RAI_EXPLANATION,
} from "../src/CustodyLedgerRAIExplanationConvergence.js";
import {
  CUSTODY_LEDGER_DISMISS_RAI_CONCLUSION,
  CUSTODY_LEDGER_RAI_CONCLUSION_REVIEW_VERSION,
  CUSTODY_LEDGER_REVIEW_BOUNDED_COMPARISON,
} from "../src/CustodyLedgerRAIConclusionReview.js";
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
  responsibleAIDimensions,
  responsibleAIExercise,
  responsibleAIPrimaryScenarios,
  responsibleAITransferScenarios,
} from "../src/responsibleAIExercise.js";
import {
  structuredPacketChecks,
  structuredPacketExercise,
  structuredPacketExplanationDimensions,
} from "../src/structuredPacketExercise.js";
import {
  custodyLedgerObservationActions,
  custodyLedgerObservationControls,
  custodyLedgerObservationInterfaceCopy,
} from "../src/CustodyLedgerObservation.js";
import {
  custodyLedgerObservationStages,
  custodyLedgerObservationStatements,
  custodyLedgerExplanationAnswers,
  custodyLedgerExplanationDimensions,
  custodyLedgerRAIExplanationAnswers,
  custodyLedgerRAIExplanationDimensions,
} from "../src/custodyLedgerExercise.js";

const predecessor = Object.freeze({
  verificationStatus: "verified",
  cityThresholdAnchorRecorded: true,
  civicDistrictRouteAvailable: true,
});

const activationKinds = [
  "pointer",
  "touch",
  "keyboard_enter",
  "keyboard_space",
  "switch",
  "speech",
  "screen_reader",
];

function intent(action, activationKind = "pointer", token = `${action}-${activationKind}-event`) {
  return createCustodyLedgerNormalRouteIntent(action, activationKind, token);
}

const nearEntries = custodyLedgerObservationStages.near.map((observationId) => [
  observationId,
  custodyLedgerObservationActions[observationId],
]);

function assertNoDeltaOrCredit(state, observationCount = 0) {
  assert.equal(state.cityStateDelta, null);
  assert.equal(state.worldStateDelta, null);
  assert.equal(state.accessStateDelta, null);
  assert.equal(state.observationEvidence.length, observationCount);
  assert.deepEqual(state.learningEvidence, []);
  assert.deepEqual(state.masteryEvidence, []);
  assert.equal(state.saveEligibility, false);
  assert.equal(state.successor, null);
  assert.equal(state.authorityGranted, false);
  assert.equal(state.externalActionEnabled, false);
  assert.equal(state.examCreditGranted, false);
}

function blankController() {
  const controller = createCustodyLedgerNormalRouteController({ predecessor });
  controller.dispatch(intent(custodyLedgerRouteActions.enter, "pointer", `rp002-entry-${Math.random()}`));
  controller.dispatch(intent(custodyLedgerRouteActions.continueProtected, "pointer", `rp002-overview-${Math.random()}`));
  controller.dispatch(intent(CUSTODY_LEDGER_NEAR_DETAIL_ACTION, "pointer", `rp002-blank-${Math.random()}`));
  return controller;
}

function completedNearSave(prefix = "rp002-completed-near") {
  const first = blankController().dispatch(intent(
    custodyLedgerObservationActions.fixed_trace,
    "pointer",
    `${prefix}-first`,
  ));
  const second = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: first.save }).dispatch(intent(
    custodyLedgerObservationActions.outlined_gap,
    "touch",
    `${prefix}-second`,
  ));
  return createCustodyLedgerNormalRouteController({ predecessor, restoredSave: second.save }).dispatch(intent(
    custodyLedgerObservationActions.later_stewardship,
    "keyboard_enter",
    `${prefix}-third`,
  )).save;
}

function farBlankSave(prefix = "rp002-far-blank") {
  const complete = completedNearSave(prefix);
  return createCustodyLedgerNormalRouteController({ predecessor, restoredSave: complete }).dispatch(intent(
    custodyLedgerObservationControls.compareScale.label,
    "pointer",
    `${prefix}-compare`,
  )).save;
}

function completeFarSave(prefix = "rp002-far-complete") {
  const first = createCustodyLedgerNormalRouteController({
    predecessor,
    restoredSave: farBlankSave(prefix),
  }).dispatch(intent(
    custodyLedgerObservationActions.distant_repetition,
    "pointer",
    `${prefix}-first`,
  ));
  return createCustodyLedgerNormalRouteController({ predecessor, restoredSave: first.save }).dispatch(intent(
    custodyLedgerObservationActions.closed_boundary,
    "touch",
    `${prefix}-second`,
  )).save;
}

function completedPrerequisites() {
  return {
    structuredPacketEvidence: {
      exerciseId: structuredPacketExercise.exercise_id,
      checkCorrectness: {
        primary: Object.fromEntries(structuredPacketChecks.map((id) => [id, true])),
        transfer: Object.fromEntries(structuredPacketChecks.map((id) => [id, true])),
        explanation: Object.fromEntries(structuredPacketExplanationDimensions.map((id) => [id, true])),
      },
      masteryStatus: "mastered",
    },
    responsibleAIEvidence: {
      exerciseId: responsibleAIExercise.exercise_id,
      dimensionCorrectness: Object.fromEntries([
        ...responsibleAIPrimaryScenarios,
        ...responsibleAITransferScenarios,
        { id: "closed_note_explanation" },
      ].map(({ id }) => [id, Object.fromEntries(responsibleAIDimensions.map((dimension) => [dimension, true]))])),
      masteryStatus: "mastered",
    },
  };
}

function completedCityThresholdSave() {
  const answers = (form) => Object.fromEntries(cum01Forms[form].map((item) => [
    item.id, { decision: item.decision, reason: item.reason },
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

function memoryStorage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
    removeItem: (key) => values.delete(key),
  };
}

test("far peer accessible names share the exact visible Available, Recorded, and Inert state", async () => {
  const cases = [
    ["available", "AVAILABLE"],
    ["replay", "RECORDED // REPLAY ADDS NO EVIDENCE"],
    ["inert", "INERT // ZERO CREDIT // NOT YET ACTIVE"],
  ];
  for (const action of [
    custodyLedgerObservationActions.distant_repetition,
    custodyLedgerObservationActions.closed_boundary,
  ]) {
    for (const [status, stateText] of cases) {
      const described = describeCivicActionAccessibility(custodyLedgerRouteOwners.pilot, action, status);
      assert.equal(described.stateText, stateText);
      assert.equal(
        described.accessibleName,
        `${custodyLedgerRouteOwners.pilot} — ${action} — ${stateText}`,
      );
    }
  }
  const arrival = await readFile(new URL("../src/CivicRecordArrival.jsx", import.meta.url), "utf8");
  assert.match(arrival, /aria-label=\{accessibility\.accessibleName\}/);
  assert.match(arrival, /\{accessibility\.stateText\}/);
  assert.doesNotMatch(arrival, /aria-label=\{`\$\{owner\}[^`]*\$\{action\}`\}/);
});

test("SC-03-20 world-region names distinguish blank, partial, and complete expedition evidence", async () => {
  assert.equal(
    describeCivicWorldRegionAccessibility({ boardId: "SC-03-20", checkpoint: "sc03_far_blank" }),
    "Scale echo and closed boundary, blank distant observation view",
  );
  for (const checkpoint of ["sc03_far_first", "sc03_far_first_acknowledgement"]) {
    assert.equal(
      describeCivicWorldRegionAccessibility({ boardId: "SC-03-20", checkpoint }),
      "Scale echo and closed boundary; one distant expedition observation retained.",
    );
  }
  for (const checkpoint of ["sc03_far_complete", "sc03_far_complete_acknowledgement"]) {
    assert.equal(
      describeCivicWorldRegionAccessibility({ boardId: "SC-03-20", checkpoint }),
      "Scale echo and closed boundary; both distant expedition observations retained.",
    );
  }
  assert.equal(
    describeCivicWorldRegionAccessibility({ boardId: "SC-03-10", checkpoint: "sc03_near_blank" }),
    "Near exposed layers, bounded observation view",
  );
  assert.equal(
    describeCivicWorldRegionAccessibility({ boardId: "SC-03-00", checkpoint: "sc03_arrival" }),
    "Civic Record District arrival overview",
  );
  assert.equal(
    describeCivicWorldRegionAccessibility({ boardId: "SC-03-30", checkpoint: "sc03_local_comparison_blank" }),
    "Civic Record District unchanged; blank local comparison interface with five expedition observations retained.",
  );
  for (const checkpoint of [
    "sc03_far_blank",
    "sc03_far_first",
    "sc03_far_first_acknowledgement",
    "sc03_far_complete",
    "sc03_far_complete_acknowledgement",
  ]) {
    const label = describeCivicWorldRegionAccessibility({ boardId: "SC-03-20", checkpoint });
    assert.doesNotMatch(label, /Builder|city response|permission|access|world change/i);
    assert.doesNotMatch(label, /Required observations|Far and closed evidence/i);
  }
  const arrival = await readFile(new URL("../src/CivicRecordArrival.jsx", import.meta.url), "utf8");
  assert.match(arrival, /aria-label=\{describeCivicWorldRegionAccessibility\(routeState\)\}/);
});

test("primary evidence-return group names follow the active owner replacement", () => {
  assert.equal(describeCustodyLedgerPrimaryReturnGroup("30-A0"), "Blank Python primary evidence return");
  assert.equal(describeCustodyLedgerPrimaryReturnGroup("30-A1F"), "Primary feedback evidence return");
  assert.equal(describeCustodyLedgerPrimaryReturnGroup("30-A2"), "Provisional result evidence return");
  assert.equal(describeCustodyLedgerPrimaryReturnGroup("DR-00"), "Provisional result evidence return");
  assert.equal(describeCustodyLedgerPrimaryReturnGroup("DR-20"), "Fresh practice evidence return");
  assert.equal(describeCustodyLedgerPrimaryReturnGroup("FT-00"), "Fresh practice evidence return");
  assert.equal(describeCustodyLedgerPrimaryReturnGroup("FT-20F"), "Transfer feedback evidence return");
  assert.equal(describeCustodyLedgerPrimaryReturnGroup("FT-20C"), "Transfer-complete evidence return");
  assert.equal(describeCustodyLedgerPrimaryReturnGroup("EXS-00"), "Blank Python explanation evidence return");
  assert.equal(describeCustodyLedgerPrimaryReturnGroup("EXS-20F"), "Python explanation feedback evidence return");
  assert.equal(describeCustodyLedgerPrimaryReturnGroup("EXS-20C"), "Python explanation conclusion evidence return");
  assert.equal(describeCustodyLedgerPrimaryReturnGroup("RAD-20"), "Blank Responsible-AI primary evidence return");
  assert.equal(describeCustodyLedgerPrimaryReturnGroup("RAIEC-00"), "Responsible-AI explanation evidence return");
  assert.equal(describeCustodyLedgerPrimaryReturnGroup("RAIEC-20F"), "Responsible-AI explanation feedback evidence return");
  assert.equal(describeCustodyLedgerPrimaryReturnGroup("RAIEC-20C"), "Responsible-AI conclusion evidence return");
  assert.doesNotMatch(describeCustodyLedgerPrimaryReturnGroup("DR-00"), /blank python primary/i);
  assert.doesNotMatch(describeCustodyLedgerPrimaryReturnGroup("DR-20"), /blank python primary/i);
});

test("normal RP-002 entry reaches only SC-03-00 and exposes a reversible zero-credit continuation", () => {
  for (const activationKind of activationKinds) {
    const controller = createCustodyLedgerNormalRouteController({ predecessor });
    assert.deepEqual(controller.getState().availableActions, [custodyLedgerRouteActions.enter]);
    const result = controller.dispatch(intent(custodyLedgerRouteActions.enter, activationKind));
    assert.equal(result.status, "entered");
    assert.equal(result.state.checkpoint, "sc03_arrival");
    assert.equal(result.state.boardId, "SC-03-00");
    assert.equal(result.save.checkpoint, "sc03_arrival");
    assert.deepEqual(result.state.availableActions, [
      custodyLedgerRouteActions.continueProtected,
      custodyLedgerRouteActions.returnAccepted,
    ]);
    assertNoDeltaOrCredit(result.state);
  }
});

test("protected continuation exposes explicit Pilot inspection without recording evidence", () => {
  const controller = createCustodyLedgerNormalRouteController({ predecessor });
  controller.dispatch(intent(custodyLedgerRouteActions.enter, "pointer", "rp002-enter-overview"));
  const result = controller.dispatch(intent(
    custodyLedgerRouteActions.continueProtected,
    "keyboard_enter",
    "rp002-continue-overview",
  ));
  assert.equal(result.status, "advanced");
  assert.equal(result.state.checkpoint, "sc03_survey_overview");
  assert.equal(result.state.boardId, "SC-03-00");
  assert.deepEqual(result.state.availableActions, [
    CUSTODY_LEDGER_NEAR_DETAIL_ACTION,
    custodyLedgerRouteActions.returnAccepted,
  ]);
  assert.equal(result.save.checkpoint, "sc03_survey_overview");
  assertNoDeltaOrCredit(result.state);
});

test("explicit near-layer inspection enters only a blank sanitized SC-03-10 group across modalities", () => {
  for (const activationKind of activationKinds) {
    const controller = createCustodyLedgerNormalRouteController({ predecessor });
    controller.dispatch(intent(custodyLedgerRouteActions.enter, "pointer", `rp002-enter-${activationKind}`));
    controller.dispatch(intent(custodyLedgerRouteActions.continueProtected, "pointer", `rp002-continue-${activationKind}`));
    const result = controller.dispatch(intent(
      CUSTODY_LEDGER_NEAR_DETAIL_ACTION,
      activationKind,
      `rp002-near-${activationKind}`,
    ));
    assert.equal(result.status, "advanced");
    assert.equal(result.state.checkpoint, "sc03_near_blank");
    assert.equal(result.state.boardId, "SC-03-10");
    assert.deepEqual(result.state.availableActions, [
      ...nearEntries.map(([, label]) => label),
      custodyLedgerRouteActions.returnAccepted,
    ]);
    assert.deepEqual(result.state.actionStates, []);
    assert.deepEqual(result.state.observationState.observationEvidence, []);
    assert.deepEqual(result.state.observationState.finalizedObservationIds, []);
    assert.equal(result.state.observationState.progress.near, 0);
    assert.equal(result.state.observationState.progress.far, 0);
    assert.equal(result.state.observationState.observationComplete, false);
    assert.equal(result.state.observationState.campaignCommitEnabled, false);
    assert.equal(result.save.checkpoint, "sc03_near_blank");
    assertNoDeltaOrCredit(result.state);
  }
});

test("arrival resumes exactly and returns through the protected route authority", () => {
  const entered = createCustodyLedgerNormalRouteController({ predecessor })
    .dispatch(intent(custodyLedgerRouteActions.enter, "pointer", "rp002-enter-resume-event"));
  const resumed = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: entered.save });
  assert.equal(resumed.getState().boardId, "SC-03-00");
  const returned = resumed.dispatch(intent(
    custodyLedgerRouteActions.returnAccepted,
    "keyboard_space",
    "rp002-return-resume-event",
  ));
  assert.equal(returned.status, "returned");
  assert.equal(returned.state.checkpoint, "city_threshold");
  assert.equal(returned.state.boardId, "SC-02-50");
  assertNoDeltaOrCredit(returned.state);
});

test("overview and blank checkpoints resume deterministically and keep return separate", () => {
  const controller = createCustodyLedgerNormalRouteController({ predecessor });
  controller.dispatch(intent(custodyLedgerRouteActions.enter, "pointer", "rp002-entry-resume-chain"));
  const overview = controller.dispatch(intent(
    custodyLedgerRouteActions.continueProtected,
    "pointer",
    "rp002-overview-resume-chain",
  ));
  const resumedOverview = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: overview.save });
  assert.equal(resumedOverview.getState().checkpoint, "sc03_survey_overview");
  const blank = resumedOverview.dispatch(intent(
    CUSTODY_LEDGER_NEAR_DETAIL_ACTION,
    "screen_reader",
    "rp002-blank-resume-chain",
  ));
  const resumedBlank = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: blank.save });
  assert.equal(resumedBlank.getState().checkpoint, "sc03_near_blank");
  assert.deepEqual(resumedBlank.getState().observationState.observationEvidence, []);
  assertNoDeltaOrCredit(resumedBlank.getState());
  const returned = resumedBlank.dispatch(intent(
    custodyLedgerRouteActions.returnAccepted,
    "switch",
    "rp002-blank-return-chain",
  ));
  assert.equal(returned.status, "returned");
  assert.equal(returned.state.checkpoint, "city_threshold");
  assertNoDeltaOrCredit(returned.state);
});

test("duplicate activation is one-hit and wrong or combined intents fail closed", () => {
  const duplicateController = createCustodyLedgerNormalRouteController({ predecessor });
  const repeated = intent(custodyLedgerRouteActions.enter, "pointer", "rp002-duplicate-event");
  assert.equal(duplicateController.dispatch(repeated).status, "entered");
  assert.equal(duplicateController.dispatch(repeated).status, "duplicate_suppressed");

  for (const bad of [
    { ...intent("OPEN RP-003", "pointer", "rp002-wrong-action") },
    { ...intent(custodyLedgerRouteActions.enter, "pointer", "rp002-multihit"), multiHit: true },
    { ...intent(custodyLedgerRouteActions.enter, "pointer", "rp002-combined"), actions: [custodyLedgerRouteActions.enter] },
  ]) {
    const controller = createCustodyLedgerNormalRouteController({ predecessor });
    assert.equal(controller.dispatch(bad).status, "rejected");
    assert.equal(controller.getState().checkpoint, "city_threshold");
    assertNoDeltaOrCredit(controller.getState());
  }

  const overviewController = createCustodyLedgerNormalRouteController({ predecessor });
  overviewController.dispatch(intent(custodyLedgerRouteActions.enter, "pointer", "rp002-fail-entry"));
  overviewController.dispatch(intent(custodyLedgerRouteActions.continueProtected, "pointer", "rp002-fail-overview"));
  for (const bad of [
    { ...intent(CUSTODY_LEDGER_NEAR_DETAIL_ACTION, "pointer", "rp002-near-stale"), stale: true },
    { ...intent(CUSTODY_LEDGER_NEAR_DETAIL_ACTION, "pointer", "rp002-near-forged"), forged: true },
    { ...intent(CUSTODY_LEDGER_NEAR_DETAIL_ACTION, "pointer", "rp002-near-private"), privateNotes: "do not retain" },
    { ...intent(CUSTODY_LEDGER_NEAR_DETAIL_ACTION, "pointer", "rp002-near-combined"), actions: [CUSTODY_LEDGER_NEAR_DETAIL_ACTION] },
  ]) {
    assert.equal(overviewController.dispatch(bad).status, "rejected");
    assert.equal(overviewController.getState().checkpoint, "sc03_survey_overview");
    assertNoDeltaOrCredit(overviewController.getState());
  }
  const repeatedNear = intent(CUSTODY_LEDGER_NEAR_DETAIL_ACTION, "pointer", "rp002-near-one-hit");
  assert.equal(overviewController.dispatch(repeatedNear).status, "advanced");
  assert.equal(overviewController.dispatch(repeatedNear).status, "duplicate_suppressed");
});

test("missing, forged, private, and Demo Tour route state remain unavailable", () => {
  const validSave = createCustodyLedgerNormalRouteController({ predecessor })
    .dispatch(intent(custodyLedgerRouteActions.enter, "pointer", "rp002-valid-save-event")).save;
  for (const options of [
    {},
    { predecessor: { ...predecessor, civicDistrictRouteAvailable: false } },
    { predecessor, restoredSave: { ...validSave, successor: "RP-003" } },
    { predecessor, restoredSave: { ...validSave, privateNotes: "do not persist" } },
  ]) {
    const controller = createCustodyLedgerNormalRouteController(options);
    assert.equal(controller.dispatch(intent(custodyLedgerRouteActions.enter, "pointer", "rp002-rejected-event")).status, "rejected");
    assert.equal(controller.getState().availableActions.length, 0);
    assertNoDeltaOrCredit(controller.getState());
  }
  const tour = createCustodyLedgerNormalRouteController({ predecessor, mode: "demo_tour" });
  assert.equal(tour.dispatch(intent(custodyLedgerRouteActions.enter, "pointer", "rp002-tour-event")).status, "rejected");
  assert.equal(tour.getState().status, "tour_view_only");
  assertNoDeltaOrCredit(tour.getState());
});

test("each exact first-near choice has seven-modality parity and records only its matching authority evidence", () => {
  for (const [observationId, label] of nearEntries) {
    for (const activationKind of activationKinds) {
      const controller = blankController();
      const result = controller.dispatch(intent(
        label,
        activationKind,
        `rp002-first-${observationId}-${activationKind}`,
      ));
      assert.equal(result.status, "recorded", `${observationId}/${activationKind}`);
      assert.equal(result.observationId, observationId);
      assert.equal(result.state.checkpoint, "sc03_near_acknowledgement");
      assert.deepEqual(result.state.observationEvidence.map((record) => record.observationId), [observationId]);
      assert.deepEqual(result.state.sceneStatement, custodyLedgerObservationStatements[observationId]);
      assert.deepEqual(result.state.statusMessage, {
        owner: "SYSTEM // EXPEDITION STATE",
        text: custodyLedgerObservationInterfaceCopy.partialNear(1),
      });
      assert.deepEqual(result.state.availableActions, [
        custodyLedgerObservationControls.returnToEvidence.label,
        custodyLedgerRouteActions.returnAccepted,
      ]);
      assert.equal(result.save.checkpoint, "sc03_near_first");
      assert.equal(result.save.observationEvidence.observationId, observationId);
      assertNoDeltaOrCredit(result.state, 1);
    }
  }
});

test("RETURN TO EVIDENCE, close/reload, replay, and separate route return preserve exactly one ID", () => {
  const controller = blankController();
  const recorded = controller.dispatch(intent(
    custodyLedgerObservationActions.later_stewardship,
    "keyboard_enter",
    "rp002-first-return-chain",
  ));
  const resumed = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: recorded.save });
  assert.equal(resumed.getState().checkpoint, "sc03_near_first");
  assert.equal(resumed.getState().sceneStatement, null);
  assert.equal(resumed.getState().statusMessage, null);
  assert.deepEqual(resumed.getState().observationEvidence.map((record) => record.observationId), ["later_stewardship"]);
  assert.deepEqual(resumed.getState().availableActions, [
    custodyLedgerObservationActions.fixed_trace,
    custodyLedgerObservationActions.later_stewardship,
    custodyLedgerObservationActions.outlined_gap,
    custodyLedgerRouteActions.returnAccepted,
  ]);
  assert.deepEqual(resumed.getState().actionStates.map(({ label, status }) => ({ label, status })), [
    { label: custodyLedgerObservationActions.fixed_trace, status: "available" },
    { label: custodyLedgerObservationActions.later_stewardship, status: "replay" },
    { label: custodyLedgerObservationActions.outlined_gap, status: "available" },
  ]);
  assert.equal(resumed.getState().focusIntent.target, "rp002-arrival-heading");
  assertNoDeltaOrCredit(resumed.getState(), 1);

  const returnedToEvidence = resumed.dispatch(intent(
    custodyLedgerObservationControls.returnToEvidence.label,
    "screen_reader",
    "rp002-return-to-evidence",
  ));
  assert.equal(returnedToEvidence.status, "returned_to_evidence");
  assert.equal(returnedToEvidence.save.observationEvidence.observationId, "later_stewardship");
  assertNoDeltaOrCredit(returnedToEvidence.state, 1);

  const replay = resumed.dispatch(intent(
    custodyLedgerObservationActions.later_stewardship,
    "speech",
    "rp002-replay-first",
  ));
  assert.equal(replay.status, "replayed");
  assert.equal(replay.observationId, "later_stewardship");
  assert.deepEqual(replay.state.observationEvidence.map((record) => record.observationId), ["later_stewardship"]);
  assertNoDeltaOrCredit(replay.state, 1);

  const returned = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: replay.save }).dispatch(intent(
    custodyLedgerRouteActions.returnAccepted,
    "switch",
    "rp002-first-route-return",
  ));
  assert.equal(returned.status, "returned");
  assert.equal(returned.state.checkpoint, "city_threshold");
  assertNoDeltaOrCredit(returned.state);
});

test("wrong, duplicate, combined, ambiguous, stale, forged, private, and Tour input fail closed", () => {
  const variants = [
    { action: "UNKNOWN" },
    { stale: true },
    { forged: true },
    { multiHit: true },
    { tourDerived: true },
    { actions: [custodyLedgerObservationActions.fixed_trace, custodyLedgerObservationActions.outlined_gap] },
    { candidateSemanticIds: ["rp002.sc03_10.fixed_trace", "rp002.sc03_10.outlined_gap"] },
    { privateNotes: "PRIVATE-NEAR" },
  ];
  for (const override of variants) {
    const controller = blankController();
    const clean = intent(custodyLedgerObservationActions.fixed_trace, "pointer", `rp002-unsafe-${JSON.stringify(override)}`.replace(/[^A-Za-z0-9._:-]/g, "_"));
    const result = controller.dispatch({ ...clean, ...override });
    assert.equal(result.status, "rejected");
    assert.equal(controller.getState().checkpoint, "sc03_near_blank");
    assertNoDeltaOrCredit(controller.getState());
    assert.doesNotMatch(JSON.stringify(controller.getState()), /PRIVATE-NEAR/);
  }

  const controller = blankController();
  const firstIntent = intent(custodyLedgerObservationActions.fixed_trace, "pointer", "rp002-one-hit-first");
  const first = controller.dispatch(firstIntent);
  assert.equal(first.status, "recorded");
  const duplicate = controller.dispatch(firstIntent);
  assert.equal(duplicate.status, "duplicate_suppressed");
  assert.deepEqual(duplicate.state.observationEvidence.map((record) => record.observationId), ["fixed_trace"]);

});

test("all six first-second prefixes and seven modalities add exactly one byte-stable second near record", () => {
  for (const [firstId, firstLabel] of nearEntries) {
    for (const [secondId, secondLabel] of nearEntries.filter(([id]) => id !== firstId)) {
      for (const activationKind of activationKinds) {
        const first = blankController().dispatch(intent(
          firstLabel,
          "pointer",
          `rp002-second-prefix-first-${firstId}-${secondId}-${activationKind}`,
        ));
        const firstRecord = JSON.stringify(first.save.observationEvidence);
        const controller = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: first.save });
        const second = controller.dispatch(intent(
          secondLabel,
          activationKind,
          `rp002-second-prefix-${firstId}-${secondId}-${activationKind}`,
        ));
        assert.equal(second.status, "recorded", `${firstId}->${secondId}/${activationKind}`);
        assert.equal(second.observationId, secondId);
        assert.equal(second.state.checkpoint, "sc03_near_second_acknowledgement");
        assert.deepEqual(second.state.sceneStatement, custodyLedgerObservationStatements[secondId]);
        assert.deepEqual(second.state.statusMessage, {
          owner: "SYSTEM // EXPEDITION STATE",
          text: custodyLedgerObservationInterfaceCopy.partialNear(2),
        });
        assert.deepEqual(second.state.availableActions, [
          custodyLedgerObservationControls.returnToEvidence.label,
          custodyLedgerRouteActions.returnAccepted,
        ]);
        assert.equal(second.save.checkpoint, "sc03_near_second");
        assert.equal(second.save.observationEvidence.length, 2);
        assert.equal(JSON.stringify(second.save.observationEvidence[0]), firstRecord);
        assert.deepEqual(second.save.observationEvidence.map((record) => record.observationId), [firstId, secondId]);
        assertNoDeltaOrCredit(second.state, 2);
      }
    }
  }
});

test("two-ID return, close/reload, and getSave restore two Recorded actions plus one Available without acknowledgement replay", () => {
  const first = blankController().dispatch(intent(
    custodyLedgerObservationActions.outlined_gap,
    "pointer",
    "rp002-two-id-first",
  ));
  const second = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: first.save }).dispatch(intent(
    custodyLedgerObservationActions.fixed_trace,
    "keyboard_enter",
    "rp002-two-id-second",
  ));
  const resumed = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: second.save });
  assert.equal(resumed.getState().checkpoint, "sc03_near_second");
  assert.equal(resumed.getState().sceneStatement, null);
  assert.equal(resumed.getState().statusMessage, null);
  assert.deepEqual(resumed.getState().observationEvidence.map((record) => record.observationId), ["outlined_gap", "fixed_trace"]);
  assert.equal(resumed.getState().actionStates.filter(({ status }) => status === "replay").length, 2);
  assert.equal(resumed.getState().actionStates.filter(({ status }) => status === "available").length, 1);
  assert.deepEqual(resumed.getSave(), second.save);
  const returned = resumed.dispatch(intent(
    custodyLedgerObservationControls.returnToEvidence.label,
    "screen_reader",
    "rp002-two-id-return-evidence",
  ));
  assert.equal(returned.status, "returned_to_evidence");
  assert.deepEqual(returned.save, second.save);
  assertNoDeltaOrCredit(returned.state, 2);
  const routeReturn = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: second.save }).dispatch(intent(
    custodyLedgerRouteActions.returnAccepted,
    "switch",
    "rp002-two-id-route-return",
  ));
  assert.equal(routeReturn.status, "returned");
  assert.equal(routeReturn.state.checkpoint, "city_threshold");
  assertNoDeltaOrCredit(routeReturn.state);
});

test("all six near orders and seven modalities add exactly one third record and enter only blank far comparison", () => {
  const orders = nearEntries.flatMap(([firstId, firstLabel]) => (
    nearEntries.filter(([id]) => id !== firstId).map(([secondId, secondLabel]) => {
      const [thirdId, thirdLabel] = nearEntries.find(([id]) => id !== firstId && id !== secondId);
      return { firstId, firstLabel, secondId, secondLabel, thirdId, thirdLabel };
    })
  ));
  assert.equal(orders.length, 6);
  for (const order of orders) {
    for (const activationKind of activationKinds) {
      const first = blankController().dispatch(intent(
        order.firstLabel,
        "pointer",
        `rp002-third-first-${order.firstId}-${order.secondId}-${activationKind}`,
      ));
      const second = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: first.save }).dispatch(intent(
        order.secondLabel,
        "touch",
        `rp002-third-second-${order.firstId}-${order.secondId}-${activationKind}`,
      ));
      const before = second.save.observationEvidence.map((record) => JSON.stringify(record));
      const controller = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: second.save });
      const third = controller.dispatch(intent(
        order.thirdLabel,
        activationKind,
        `rp002-third-${order.firstId}-${order.secondId}-${activationKind}`,
      ));
      assert.equal(third.status, "recorded", `${order.firstId}->${order.secondId}->${order.thirdId}/${activationKind}`);
      assert.equal(third.observationId, order.thirdId);
      assert.equal(third.state.checkpoint, "sc03_near_third_acknowledgement");
      assert.deepEqual(third.state.sceneStatement, custodyLedgerObservationStatements[order.thirdId]);
      assert.deepEqual(third.state.statusMessage, {
        owner: "SYSTEM // EXPEDITION STATE",
        text: custodyLedgerObservationInterfaceCopy.nearComplete,
      });
      assert.deepEqual(third.state.availableActions, [
        custodyLedgerObservationControls.compareScale.label,
        custodyLedgerRouteActions.returnAccepted,
      ]);
      assert.deepEqual(third.state.actionStates.map(({ label, status }) => ({ label, status })), [{
        label: custodyLedgerObservationControls.compareScale.label,
        status: "available",
      }]);
      assert.equal(third.save.checkpoint, "sc03_near_complete");
      assert.deepEqual(third.save.observationEvidence.map((record) => record.observationId), [
        order.firstId, order.secondId, order.thirdId,
      ]);
      assert.deepEqual(third.save.observationEvidence.slice(0, 2).map((record) => JSON.stringify(record)), before);
      assertNoDeltaOrCredit(third.state, 3);

      const compare = controller.dispatch(intent(
        custodyLedgerObservationControls.compareScale.label,
        "pointer",
        `rp002-compare-stage-${order.firstId}-${order.secondId}-${activationKind}`,
      ));
      assert.equal(compare.status, "advanced");
      assert.equal(compare.reason, "comparison_stage_entered");
      assert.equal(compare.save.checkpoint, "sc03_far_blank");
      assert.equal(controller.getState().checkpoint, "sc03_far_blank");
      assert.equal(controller.getState().boardId, "SC-03-20");
      assert.equal(controller.getState().owner, "SYSTEM // EXPEDITION SESSION");
      assert.equal(controller.getState().observationState.phase, "far_observations");
      assert.equal(controller.getState().observationState.activeGroup, "far_observations");
      assert.deepEqual(controller.getState().observationState.progress, {
        near: 3, nearRequired: 3, far: 0, farRequired: 2,
      });
      assert.deepEqual(controller.getState().availableActions, [
        custodyLedgerObservationActions.distant_repetition,
        custodyLedgerObservationActions.closed_boundary,
        custodyLedgerRouteActions.returnAccepted,
      ]);
      assert.deepEqual(controller.getState().observationEvidence.map((record) => JSON.stringify(record)), [
        ...before,
        JSON.stringify(third.save.observationEvidence[2]),
      ]);
      assert.deepEqual(
        controller.getState().observationState.observationEvidence.map((record) => JSON.stringify(record)),
        controller.getState().observationEvidence.map((record) => JSON.stringify(record)),
      );
      assertNoDeltaOrCredit(controller.getState(), 3);
    }
  }
});

test("two-ID Recorded actions remain replay-only while the sole Available action remains exact", () => {
  const first = blankController().dispatch(intent(
    custodyLedgerObservationActions.fixed_trace,
    "pointer",
    "rp002-two-replay-first",
  ));
  const second = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: first.save }).dispatch(intent(
    custodyLedgerObservationActions.later_stewardship,
    "touch",
    "rp002-two-replay-second",
  ));
  for (const recordedLabel of [custodyLedgerObservationActions.fixed_trace, custodyLedgerObservationActions.later_stewardship]) {
    const controller = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: second.save });
    const replay = controller.dispatch(intent(
      recordedLabel,
      "speech",
      `rp002-two-replay-${recordedLabel.replace(/[^A-Za-z0-9._:-]/g, "_")}`,
    ));
    assert.equal(replay.status, "replayed");
    assert.deepEqual(replay.save, second.save);
    assert.deepEqual(replay.state.observationEvidence.map((record) => record.observationId), ["fixed_trace", "later_stewardship"]);
    assertNoDeltaOrCredit(replay.state, 2);
  }
});

test("three-near zero-far save resumes without acknowledgement replay and route return stays separate", () => {
  const first = blankController().dispatch(intent(
    custodyLedgerObservationActions.outlined_gap,
    "pointer",
    "rp002-three-resume-first",
  ));
  const second = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: first.save }).dispatch(intent(
    custodyLedgerObservationActions.fixed_trace,
    "keyboard_enter",
    "rp002-three-resume-second",
  ));
  const third = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: second.save }).dispatch(intent(
    custodyLedgerObservationActions.later_stewardship,
    "screen_reader",
    "rp002-three-resume-third",
  ));
  const resumed = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: third.save });
  assert.equal(resumed.getState().checkpoint, "sc03_near_complete");
  assert.equal(resumed.getState().sceneStatement, null);
  assert.equal(resumed.getState().statusMessage, null);
  assert.equal(resumed.getState().message, custodyLedgerObservationInterfaceCopy.nearComplete);
  assert.deepEqual(resumed.getState().availableActions, [
    custodyLedgerObservationControls.compareScale.label,
    custodyLedgerRouteActions.returnAccepted,
  ]);
  assert.deepEqual(resumed.getState().actionStates.map(({ label, status }) => ({ label, status })), [{
    label: custodyLedgerObservationControls.compareScale.label,
    status: "available",
  }]);
  assert.deepEqual(resumed.getState().observationEvidence.map((record) => record.observationId), [
    "outlined_gap", "fixed_trace", "later_stewardship",
  ]);
  assert.deepEqual(resumed.getSave(), third.save);
  assertNoDeltaOrCredit(resumed.getState(), 3);
  const compare = resumed.dispatch(intent(
    custodyLedgerObservationControls.compareScale.label,
    "keyboard_space",
    "rp002-three-resume-compare",
  ));
  assert.equal(compare.status, "advanced");
  assert.equal(compare.reason, "comparison_stage_entered");
  assert.equal(compare.state.checkpoint, "sc03_far_blank");
  assert.equal(compare.state.boardId, "SC-03-20");
  assert.deepEqual(compare.state.availableActions, [
    custodyLedgerObservationActions.distant_repetition,
    custodyLedgerObservationActions.closed_boundary,
    custodyLedgerRouteActions.returnAccepted,
  ]);
  assert.deepEqual(compare.state.actionStates.map(({ label, status }) => ({ label, status })), [
    { label: custodyLedgerObservationActions.distant_repetition, status: "available" },
    { label: custodyLedgerObservationActions.closed_boundary, status: "available" },
  ]);
  assert.ok(compare.state.actionStates.every(({ minWidthCssPx, minHeightCssPx }) => (
    minWidthCssPx >= 44 && minHeightCssPx >= 44
  )));
  assert.deepEqual(compare.state.observationEvidence, third.save.observationEvidence);
  assertNoDeltaOrCredit(compare.state, 3);
  const route = resumed.dispatch(intent(
    custodyLedgerRouteActions.returnAccepted,
    "switch",
    "rp002-three-resume-route",
  ));
  assert.equal(route.status, "returned");
  assert.equal(route.state.checkpoint, "city_threshold");
  assertNoDeltaOrCredit(route.state);
});

test("either first far peer records exactly one canonical statement across all seven modalities", () => {
  const farChoices = ["distant_repetition", "closed_boundary"];
  for (const observationId of farChoices) {
    for (const activationKind of activationKinds) {
      const blankSave = farBlankSave(`rp002-first-far-${observationId}-${activationKind}`);
      const nearBytes = blankSave.observationEvidence.map((record) => JSON.stringify(record));
      const controller = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: blankSave });
      const result = controller.dispatch(intent(
        custodyLedgerObservationActions[observationId],
        activationKind,
        `rp002-first-far-${observationId}-${activationKind}-record`,
      ));
      assert.equal(result.status, "recorded");
      assert.equal(result.observationId, observationId);
      assert.equal(result.state.checkpoint, "sc03_far_first_acknowledgement");
      assert.equal(result.state.boardId, "SC-03-20");
      assert.deepEqual(result.state.sceneStatement, custodyLedgerObservationStatements[observationId]);
      assert.deepEqual(result.state.statusMessage, {
        owner: "SYSTEM // EXPEDITION STATE",
        text: custodyLedgerObservationInterfaceCopy.partialFar,
      });
      assert.deepEqual(result.state.availableActions, [
        custodyLedgerObservationControls.returnToEvidence.label,
        custodyLedgerRouteActions.returnAccepted,
      ]);
      assert.equal(result.save.checkpoint, "sc03_far_first");
      assert.deepEqual(result.save.observationEvidence.slice(0, 3).map((record) => JSON.stringify(record)), nearBytes);
      assert.equal(result.save.observationEvidence[3].observationId, observationId);
      assert.deepEqual(result.state.observationState.progress, {
        near: 3, nearRequired: 3, far: 1, farRequired: 2,
      });
      assertNoDeltaOrCredit(result.state, 4);
    }
  }
});

test("first far evidence returns to a replay-only selected peer and an honestly available unselected peer", () => {
  for (const selectedId of ["distant_repetition", "closed_boundary"]) {
    const unselectedId = selectedId === "distant_repetition" ? "closed_boundary" : "distant_repetition";
    const controller = createCustodyLedgerNormalRouteController({
      predecessor,
      restoredSave: farBlankSave(`rp002-first-far-return-${selectedId}`),
    });
    const recorded = controller.dispatch(intent(
      custodyLedgerObservationActions[selectedId],
      "keyboard_enter",
      `rp002-first-far-return-${selectedId}-record`,
    ));
    const evidenceBytes = JSON.stringify(recorded.save.observationEvidence);
    const returned = controller.dispatch(intent(
      custodyLedgerObservationControls.returnToEvidence.label,
      "screen_reader",
      `rp002-first-far-return-${selectedId}-evidence`,
    ));
    assert.equal(returned.status, "returned_to_evidence");
    assert.equal(returned.state.checkpoint, "sc03_far_first");
    assert.equal(returned.state.sceneStatement, null);
    assert.equal(returned.state.statusMessage, null);
    assert.deepEqual(returned.state.actionStates.map(({ label, status }) => ({ label, status })), [
      {
        label: custodyLedgerObservationActions.distant_repetition,
        status: selectedId === "distant_repetition" ? "replay" : "available",
      },
      {
        label: custodyLedgerObservationActions.closed_boundary,
        status: selectedId === "closed_boundary" ? "replay" : "available",
      },
    ]);
    assert.ok(returned.state.actionStates.every(({ minWidthCssPx, minHeightCssPx }) => (
      minWidthCssPx >= 44 && minHeightCssPx >= 44
    )));
    assert.equal(JSON.stringify(returned.save.observationEvidence), evidenceBytes);

    const replay = controller.dispatch(intent(
      custodyLedgerObservationActions[selectedId],
      "speech",
      `rp002-first-far-return-${selectedId}-replay`,
    ));
    assert.equal(replay.status, "replayed");
    assert.deepEqual(replay.state.sceneStatement, custodyLedgerObservationStatements[selectedId]);
    assert.deepEqual(replay.state.statusMessage, {
      owner: "SYSTEM // EXPEDITION STATE",
      text: custodyLedgerObservationInterfaceCopy.revisit,
    });
    assert.equal(JSON.stringify(replay.save.observationEvidence), evidenceBytes);
    assertNoDeltaOrCredit(replay.state, 4);

    const restored = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: returned.save });
    assert.equal(restored.getState().actionStates.find(({ label }) => (
      label === custodyLedgerObservationActions[unselectedId]
    )).status, "available");
    assertNoDeltaOrCredit(restored.getState(), 4);
  }
});

test("either remaining far peer records only its matching fifth fact across all seven modalities", () => {
  for (const selectedId of ["distant_repetition", "closed_boundary"]) {
    const unselectedId = selectedId === "distant_repetition" ? "closed_boundary" : "distant_repetition";
    for (const activationKind of activationKinds) {
      const first = createCustodyLedgerNormalRouteController({
        predecessor,
        restoredSave: farBlankSave(`rp002-second-far-${selectedId}-${activationKind}`),
      }).dispatch(intent(
        custodyLedgerObservationActions[selectedId],
        "pointer",
        `rp002-second-far-${selectedId}-${activationKind}-first`,
      ));
      const priorBytes = first.save.observationEvidence.map((record) => JSON.stringify(record));
      const controller = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: first.save });
      const result = controller.dispatch(intent(
        custodyLedgerObservationActions[unselectedId],
        activationKind,
        `rp002-second-far-${selectedId}-${activationKind}-record`,
      ));
      assert.equal(result.status, "recorded");
      assert.equal(result.observationId, unselectedId);
      assert.equal(result.state.checkpoint, "sc03_far_complete_acknowledgement");
      assert.deepEqual(result.state.sceneStatement, custodyLedgerObservationStatements[unselectedId]);
      assert.deepEqual(result.state.statusMessage, {
        owner: "SYSTEM // EXPEDITION STATE",
        text: custodyLedgerObservationInterfaceCopy.complete,
      });
      assert.deepEqual(result.state.availableActions, [
        custodyLedgerObservationControls.returnToEvidence.label,
        custodyLedgerRouteActions.returnAccepted,
      ]);
      assert.equal(result.save.checkpoint, "sc03_far_complete");
      assert.deepEqual(result.save.observationEvidence.slice(0, 4).map((record) => JSON.stringify(record)), priorBytes);
      assert.equal(result.save.observationEvidence[4].observationId, unselectedId);
      assert.deepEqual(result.state.observationState.progress, {
        near: 3, nearRequired: 3, far: 2, farRequired: 2,
      });
      assert.equal(result.state.observationState.observationComplete, true);
      assertNoDeltaOrCredit(result.state, 5);
    }
  }
});

test("complete far evidence returns to two replay peers and one Available local comparison", () => {
  for (const selectedId of ["distant_repetition", "closed_boundary"]) {
    const unselectedId = selectedId === "distant_repetition" ? "closed_boundary" : "distant_repetition";
    const first = createCustodyLedgerNormalRouteController({
      predecessor,
      restoredSave: farBlankSave(`rp002-complete-return-${selectedId}`),
    }).dispatch(intent(
      custodyLedgerObservationActions[selectedId],
      "keyboard_enter",
      `rp002-complete-return-${selectedId}-first`,
    ));
    const controller = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: first.save });
    const recorded = controller.dispatch(intent(
      custodyLedgerObservationActions[unselectedId],
      "screen_reader",
      `rp002-complete-return-${selectedId}-second`,
    ));
    const evidenceBytes = JSON.stringify(recorded.save.observationEvidence);
    const returned = controller.dispatch(intent(
      custodyLedgerObservationControls.returnToEvidence.label,
      "switch",
      `rp002-complete-return-${selectedId}-evidence`,
    ));
    assert.equal(returned.status, "returned_to_evidence");
    assert.equal(returned.state.checkpoint, "sc03_far_complete");
    assert.equal(returned.state.sceneStatement, null);
    assert.equal(returned.state.statusMessage, null);
    assert.deepEqual(returned.state.availableActions, [
      custodyLedgerObservationActions.distant_repetition,
      custodyLedgerObservationActions.closed_boundary,
      custodyLedgerObservationControls.openLocalComparison.label,
      custodyLedgerRouteActions.returnAccepted,
    ]);
    assert.deepEqual(returned.state.actionStates.map(({ label, status }) => ({ label, status })), [
      { label: custodyLedgerObservationActions.distant_repetition, status: "replay" },
      { label: custodyLedgerObservationActions.closed_boundary, status: "replay" },
      { label: custodyLedgerObservationControls.openLocalComparison.label, status: "available" },
    ]);
    assert.ok(returned.state.actionStates.every(({ minWidthCssPx, minHeightCssPx }) => (
      minWidthCssPx >= 44 && minHeightCssPx >= 44
    )));
    assert.equal(JSON.stringify(returned.save.observationEvidence), evidenceBytes);
    assertNoDeltaOrCredit(returned.state, 5);

    const opened = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: returned.save });
    const entered = opened.dispatch(intent(
      custodyLedgerObservationControls.openLocalComparison.label,
      "pointer",
      `rp002-complete-return-${selectedId}-comparison`,
    ));
    assert.equal(entered.status, "entered_local_comparison");
    assert.equal(entered.state.checkpoint, "sc03_local_comparison_blank");
    assert.equal(entered.state.boardId, "SC-03-30");
    assert.equal(JSON.stringify(entered.save.observationEvidence), evidenceBytes);
    assertNoDeltaOrCredit(entered.state, 5);

    for (const replayId of [selectedId, unselectedId]) {
      const replayController = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: returned.save });
      const replay = replayController.dispatch(intent(
        custodyLedgerObservationActions[replayId],
        "speech",
        `rp002-complete-return-${selectedId}-${replayId}-replay`,
      ));
      assert.equal(replay.status, "replayed");
      assert.deepEqual(replay.state.sceneStatement, custodyLedgerObservationStatements[replayId]);
      assert.deepEqual(replay.state.statusMessage, {
        owner: "SYSTEM // EXPEDITION STATE",
        text: custodyLedgerObservationInterfaceCopy.revisit,
      });
      assert.equal(JSON.stringify(replay.save.observationEvidence), evidenceBytes);
      assertNoDeltaOrCredit(replay.state, 5);
    }

    const routeController = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: returned.save });
    const route = routeController.dispatch(intent(
      custodyLedgerRouteActions.returnAccepted,
      "touch",
      `rp002-complete-return-${selectedId}-route`,
    ));
    assert.equal(route.status, "returned");
    assert.equal(route.state.checkpoint, "city_threshold");
    assertNoDeltaOrCredit(route.state);
  }
});

test("exact five-record completion enters only blank SC-03-30 across all seven modalities", () => {
  const complete = completeFarSave("rp002-local-comparison-modalities");
  const evidenceBytes = JSON.stringify(complete.observationEvidence);
  for (const activationKind of activationKinds) {
    const controller = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: complete });
    const beforeRecords = complete.observationEvidence.map((record) => JSON.stringify(record));
    const result = controller.dispatch(intent(
      custodyLedgerObservationControls.openLocalComparison.label,
      activationKind,
      `rp002-local-comparison-${activationKind}`,
    ));
    assert.equal(result.status, "entered_local_comparison");
    assert.equal(result.reason, "blank_local_comparison_entered");
    assert.equal(result.state.checkpoint, "sc03_local_comparison_blank");
    assert.equal(result.state.boardId, "SC-03-30");
    assert.equal(result.state.owner, "SYSTEM // EXPEDITION STATE");
    assert.equal(result.state.sceneStatement, null);
    assert.equal(result.state.statusMessage, null);
    assert.deepEqual(result.state.focusIntent, {
      group: "local_comparison_blank",
      target: "rp002-arrival-heading",
    });
    assert.deepEqual(result.state.availableActions, [
      CUSTODY_LEDGER_OPEN_PYTHON_PRIMARY_ACTION,
      custodyLedgerObservationControls.returnToEvidence.label,
      custodyLedgerRouteActions.returnAccepted,
    ]);
    assert.deepEqual(result.state.actionStates, [
      {
        label: CUSTODY_LEDGER_OPEN_PYTHON_PRIMARY_ACTION,
        status: "available",
        minWidthCssPx: 44,
        minHeightCssPx: 44,
      },
      {
        label: custodyLedgerObservationControls.returnToEvidence.label,
        status: "available",
        minWidthCssPx: 44,
        minHeightCssPx: 44,
      },
    ]);
    assert.deepEqual(result.state.localComparisonState, {
      packetId: "RP-002",
      boardId: "SC-03-30",
      phase: "blank_entry",
      activeMessageKey: "prerequisites_incomplete",
      scoringEnabled: false,
      campaignCommitEnabled: false,
      focusIntent: { group: "local_comparison_blank", target: "heading" },
      nextFocusIntent: {
        group: "local_comparison_blank",
        target: custodyLedgerObservationControls.returnToEvidence.label,
      },
    });
    assert.deepEqual(result.save.observationEvidence.map((record) => JSON.stringify(record)), beforeRecords);
    assert.equal(JSON.stringify(result.save.observationEvidence), evidenceBytes);
    assert.equal(result.save.checkpoint, "sc03_local_comparison_blank");
    assertNoDeltaOrCredit(result.state, 5);
    assert.doesNotMatch(JSON.stringify(result.state), /python_primary|python_transfer|rai_primary|learnerSource|answers|attemptCount|hintLevel|confidence|mastered|save bounded comparison|RP-003/i);
  }
});

test("strict prerequisites open only a blank PY-009 primary across all seven modalities", () => {
  const complete = completeFarSave("rp002-python-primary");
  const local = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: complete }).dispatch(intent(
    custodyLedgerObservationControls.openLocalComparison.label,
    "pointer",
    "rp002-python-primary-local",
  )).save;
  const evidenceBytes = JSON.stringify(local.observationEvidence);
  for (const activationKind of activationKinds) {
    const controller = createCustodyLedgerNormalRouteController({
      predecessor,
      restoredSave: local,
      prerequisiteEvidence: completedPrerequisites(),
    });
    const result = controller.dispatch(intent(
      CUSTODY_LEDGER_OPEN_PYTHON_PRIMARY_ACTION,
      activationKind,
      `rp002-python-primary-${activationKind}`,
    ));
    assert.equal(result.status, "entered_python_primary");
    assert.equal(result.state.checkpoint, "sc03_python_primary_blank");
    assert.equal(result.state.learningState.phase, "python_primary");
    assert.equal(result.state.learningState.pythonForm, "primary");
    assert.equal(result.state.learningState.unfinishedWorkImage.label, "UNFINISHED WORK IMAGE");
    assert.deepEqual(result.state.learningState.expeditionFields, { classification: "", owner: "" });
    assert.ok(Object.values(result.state.learningState.pythonChecks).every((value) => value === false));
    assert.equal(JSON.stringify(result.save.observationEvidence), evidenceBytes);
    assertNoDeltaOrCredit(result.state, 5);
    assert.doesNotMatch(JSON.stringify(result.state), /attemptCount|hintLevel|confidence|python_primary_result|rai_primary|RP-003/);
  }
});

test("accepted blank normal route composes the protected editable submission without expanding persisted state", () => {
  const complete = completeFarSave("rp002-primary-submit");
  const local = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: complete }).dispatch(intent(
    custodyLedgerObservationControls.openLocalComparison.label,
    "pointer",
    "rp002-primary-submit-local",
  )).save;
  const route = createCustodyLedgerNormalRouteController({
    predecessor,
    restoredSave: local,
    prerequisiteEvidence: completedPrerequisites(),
  });
  const entered = route.dispatch(intent(
    CUSTODY_LEDGER_OPEN_PYTHON_PRIMARY_ACTION,
    "pointer",
    "rp002-primary-submit-open",
  ));
  const persistedBytes = JSON.stringify(entered.save);
  const primary = createCustodyLedgerNormalPrimaryInteraction(entered.state, predecessor);
  assert.ok(primary);
  const result = primary.dispatch({
    packetId: "RP-002",
    version: CUSTODY_LEDGER_PRIMARY_INTERACTION_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS,
    activationKind: "screen_reader",
    eventToken: "rp002-primary-submit-exact",
    classification: "unknown",
    fieldOwner: "human_expedition",
  });
  assert.equal(result.status, "provisional_result");
  assert.equal(result.state.phase, "30-A2");
  assert.equal(result.state.owner, "SUIT // PROVISIONAL TRANSLATION");
  assert.ok(Object.values(result.state.currentAttemptChecks).every(Boolean));
  assert.equal(JSON.stringify(entered.save), persistedBytes);
  assert.equal(entered.save.checkpoint, "sc03_python_primary_blank");
  assert.equal(createCustodyLedgerNormalPrimaryInteraction({ ...entered.state, privateNotes: "PRIVATE" }, predecessor), null);
  assert.equal(createCustodyLedgerNormalPrimaryInteraction(entered.state, { ...predecessor, verificationStatus: "forged" }), null);
});

test("accepted provisional result composes one atomic blank fresh-practice dismissal without storage expansion", () => {
  const complete = completeFarSave("rp002-result-dismiss");
  const local = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: complete }).dispatch(intent(
    custodyLedgerObservationControls.openLocalComparison.label,
    "pointer",
    "rp002-result-dismiss-local",
  )).save;
  const route = createCustodyLedgerNormalRouteController({
    predecessor,
    restoredSave: local,
    prerequisiteEvidence: completedPrerequisites(),
  });
  const entered = route.dispatch(intent(
    CUSTODY_LEDGER_OPEN_PYTHON_PRIMARY_ACTION,
    "pointer",
    "rp002-result-dismiss-open",
  ));
  const persistedBytes = JSON.stringify(entered.save);
  const primary = createCustodyLedgerNormalPrimaryInteraction(entered.state, predecessor);
  const primaryResult = primary.dispatch({
    packetId: "RP-002",
    version: CUSTODY_LEDGER_PRIMARY_INTERACTION_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS,
    activationKind: "pointer",
    eventToken: "rp002-result-dismiss-submit",
    classification: "unknown",
    fieldOwner: "human_expedition",
  });
  assert.equal(primaryResult.status, "provisional_result");

  for (const activationKind of activationKinds) {
    const dismissal = createCustodyLedgerNormalPrimaryResultDismissal(
      entered.state,
      primaryResult.state,
      predecessor,
    );
    assert.ok(dismissal);
    assert.equal(dismissal.getState().phase, "DR-00");
    const result = dismissal.dispatch({
      packetId: "RP-002",
      version: CUSTODY_LEDGER_PRIMARY_RESULT_DISMISSAL_VERSION,
      mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER",
      action: CUSTODY_LEDGER_CLEAR_RESULT_ACTION,
      activationKind,
      eventToken: `rp002-result-dismiss-${activationKind}`,
    });
    assert.equal(result.status, "fresh_practice_opened");
    assert.equal(result.replacement, "atomic");
    assert.equal(result.state.phase, "DR-20");
    assert.equal(result.state.owner, "SYSTEM // EXPEDITION SESSION");
    assert.deepEqual(result.state.sourceFields, {
      condition: "unresolved_interval",
      source: "deidentified_sensor_log",
      identity: null,
      access_requested: false,
    });
    assert.deepEqual(result.state.expeditionFields, { classification: "", owner: "" });
    assert.equal(result.state.transferSubmissionImplemented, false);
    assert.equal(result.state.transferScoringEnabled, false);
    assert.equal(result.state.successor, null);
    assert.equal(JSON.stringify(entered.save), persistedBytes);
  }
  assert.equal(createCustodyLedgerNormalPrimaryResultDismissal(
    { ...entered.state, privateNotes: "PRIVATE" },
    primaryResult.state,
    predecessor,
  ), null);
  assert.equal(createCustodyLedgerNormalPrimaryResultDismissal(
    entered.state,
    { ...primaryResult.state, successor: "RP-003" },
    predecessor,
  ), null);
});

test("accepted fresh practice composes protected transfer feedback, blank retry, and bounded 6/6", () => {
  function openTransfer(token) {
    const complete = completeFarSave(`${token}-complete`);
    const local = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: complete }).dispatch(intent(
      custodyLedgerObservationControls.openLocalComparison.label,
      "pointer",
      `${token}-local`,
    )).save;
    const route = createCustodyLedgerNormalRouteController({
      predecessor,
      restoredSave: local,
      prerequisiteEvidence: completedPrerequisites(),
    });
    const entered = route.dispatch(intent(CUSTODY_LEDGER_OPEN_PYTHON_PRIMARY_ACTION, "pointer", `${token}-open`));
    const primary = createCustodyLedgerNormalPrimaryInteraction(entered.state, predecessor);
    const primaryResult = primary.dispatch({
      packetId: "RP-002",
      version: CUSTODY_LEDGER_PRIMARY_INTERACTION_VERSION,
      mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER",
      action: CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS,
      activationKind: "pointer",
      eventToken: `${token}-primary`,
      classification: "unknown",
      fieldOwner: "human_expedition",
    });
    const dismissal = createCustodyLedgerNormalPrimaryResultDismissal(entered.state, primaryResult.state, predecessor);
    const fresh = dismissal.dispatch({
      packetId: "RP-002",
      version: CUSTODY_LEDGER_PRIMARY_RESULT_DISMISSAL_VERSION,
      mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER",
      action: CUSTODY_LEDGER_CLEAR_RESULT_ACTION,
      activationKind: "pointer",
      eventToken: `${token}-dismiss`,
    });
    return {
      entered,
      primaryResult,
      fresh,
      transfer: createCustodyLedgerNormalTransferInteraction(
        entered.state,
        primaryResult.state,
        fresh.state,
        predecessor,
      ),
    };
  }

  for (const activationKind of activationKinds) {
    const fixture = openTransfer(`rp002-transfer-${activationKind}`);
    assert.ok(fixture.transfer);
    assert.equal(fixture.transfer.getState().phase, "FT-00");
    const persistedBytes = JSON.stringify(fixture.entered.save);
    const result = fixture.transfer.dispatch({
      packetId: "RP-002",
      version: CUSTODY_LEDGER_TRANSFER_INTERACTION_VERSION,
      mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER",
      action: CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS,
      activationKind,
      eventToken: `rp002-transfer-submit-${activationKind}`,
      classification: "unknown",
      fieldOwner: "human_reviewer",
    });
    assert.equal(result.status, "transfer_evidence_complete");
    assert.equal(result.state.phase, "FT-20C");
    assert.equal(result.state.transferStatus, "complete");
    assert.deepEqual(result.state.availableActions, ["RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD"]);
    assert.equal(result.state.successor, null);
    assert.equal(JSON.stringify(fixture.entered.save), persistedBytes);
  }

  const failed = openTransfer("rp002-transfer-feedback");
  const result = failed.transfer.dispatch({
    packetId: "RP-002",
    version: CUSTODY_LEDGER_TRANSFER_INTERACTION_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS,
    activationKind: "keyboard_enter",
    eventToken: "rp002-transfer-feedback-submit",
    classification: "wrong",
    fieldOwner: "wrong",
  });
  assert.equal(result.status, "feedback");
  assert.equal(result.state.phase, "FT-20F");
  assert.equal(result.state.expeditionFields, undefined);
  assert.ok(result.state.falseCheckIds.length > 0);
  assert.doesNotMatch(JSON.stringify(result.state), /\"wrong\"/);
  const retry = failed.transfer.retryBlank();
  assert.equal(retry.status, "blank_retry");
  assert.equal(retry.state.phase, "FT-00");
  assert.deepEqual(retry.state.expeditionFields, { classification: "", owner: "" });
  assert.equal(createCustodyLedgerNormalTransferInteraction(
    { ...failed.entered.state, privateNotes: "PRIVATE" },
    failed.primaryResult.state,
    failed.fresh.state,
    predecessor,
  ), null);
});

test("accepted FT-20C composes one atomic normal blank explanation entry without storage expansion", () => {
  function openExplanation(token) {
    const complete = completeFarSave(`${token}-complete`);
    const local = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: complete }).dispatch(intent(
      custodyLedgerObservationControls.openLocalComparison.label,
      "pointer",
      `${token}-local`,
    )).save;
    const route = createCustodyLedgerNormalRouteController({
      predecessor,
      restoredSave: local,
      prerequisiteEvidence: completedPrerequisites(),
    });
    const entered = route.dispatch(intent(CUSTODY_LEDGER_OPEN_PYTHON_PRIMARY_ACTION, "pointer", `${token}-open`));
    const primaryResult = createCustodyLedgerNormalPrimaryInteraction(entered.state, predecessor).dispatch({
      packetId: "RP-002",
      version: CUSTODY_LEDGER_PRIMARY_INTERACTION_VERSION,
      mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER",
      action: CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS,
      activationKind: "pointer",
      eventToken: `${token}-primary`,
      classification: "unknown",
      fieldOwner: "human_expedition",
    }).state;
    const freshPracticeState = createCustodyLedgerNormalPrimaryResultDismissal(
      entered.state,
      primaryResult,
      predecessor,
    ).dispatch({
      packetId: "RP-002",
      version: CUSTODY_LEDGER_PRIMARY_RESULT_DISMISSAL_VERSION,
      mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER",
      action: CUSTODY_LEDGER_CLEAR_RESULT_ACTION,
      activationKind: "pointer",
      eventToken: `${token}-dismiss`,
    }).state;
    const transferCompleteState = createCustodyLedgerNormalTransferInteraction(
      entered.state,
      primaryResult,
      freshPracticeState,
      predecessor,
    ).dispatch({
      packetId: "RP-002",
      version: CUSTODY_LEDGER_TRANSFER_INTERACTION_VERSION,
      mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER",
      action: CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS,
      activationKind: "pointer",
      eventToken: `${token}-transfer`,
      classification: "unknown",
      fieldOwner: "human_reviewer",
    }).state;
    return { entered, primaryResult, freshPracticeState, transferCompleteState };
  }

  for (const activationKind of activationKinds) {
    const fixture = openExplanation(`rp002-explanation-${activationKind}`);
    const persistedBytes = JSON.stringify(fixture.entered.save);
    const controller = createCustodyLedgerNormalExplanationEntry(
      fixture.entered.state,
      fixture.primaryResult,
      fixture.freshPracticeState,
      fixture.transferCompleteState,
      predecessor,
    );
    assert.ok(controller);
    assert.equal(controller.getState().phase, "EX-00");
    const result = controller.dispatch({
      packetId: "RP-002",
      version: CUSTODY_LEDGER_EXPLANATION_ENTRY_VERSION,
      mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER",
      action: CUSTODY_LEDGER_OPEN_BLANK_EXPLANATION,
      activationKind,
      eventToken: `rp002-explanation-entry-${activationKind}`,
    });
    assert.equal(result.status, "blank_explanation_opened");
    assert.equal(result.replacement, "atomic");
    assert.equal(result.state.phase, "EX-20");
    assert.equal(result.state.owner, "901 TEACHER // FEEDBACK");
    assert.equal(Object.values(result.state.explanationSelections).every((value) => value === ""), true);
    assert.equal(result.state.scoringEnabled, false);
    assert.equal(result.state.savePerformed, false);
    assert.equal(result.state.successor, null);
    assert.deepEqual(result.state.availableActions, ["RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD"]);
    const submission = createCustodyLedgerNormalExplanationSubmission(
      fixture.entered.state,
      fixture.primaryResult,
      fixture.freshPracticeState,
      fixture.transferCompleteState,
      result.state,
      predecessor,
    );
    assert.ok(submission);
    assert.equal(submission.getState().phase, "EXS-00");
    for (const dimension of custodyLedgerExplanationDimensions) {
      assert.equal(submission.updateResponse({
        dimension,
        value: custodyLedgerExplanationAnswers[dimension],
      }).status, "response_updated_session_only");
    }
    const complete = submission.dispatch({
      packetId: "RP-002",
      version: CUSTODY_LEDGER_EXPLANATION_SUBMISSION_VERSION,
      mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER",
      action: CUSTODY_LEDGER_SUBMIT_PYTHON_EXPLANATION,
      activationKind,
      eventToken: `rp002-explanation-submit-${activationKind}`,
    });
    assert.equal(complete.status, "python_explanation_complete");
    assert.equal(complete.state.phase, "EXS-20C");
    assert.equal(complete.state.boundedResult.confirmedDimensions, 3);
    assert.equal(complete.state.successor, null);
    const raiPrimaryEntry = createCustodyLedgerNormalRAIPrimaryEntry(
      fixture.entered.state,
      fixture.primaryResult,
      fixture.freshPracticeState,
      fixture.transferCompleteState,
      result.state,
      complete.state,
      predecessor,
    );
    assert.ok(raiPrimaryEntry);
    assert.equal(raiPrimaryEntry.getState().phase, "RAD-00");
    const blankRAIPrimary = raiPrimaryEntry.dispatch({
      packetId: "RP-002",
      version: CUSTODY_LEDGER_RAI_PRIMARY_ENTRY_VERSION,
      mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER",
      action: CUSTODY_LEDGER_OPEN_RAI_PRIMARY,
      activationKind,
      eventToken: `rp002-rai-primary-entry-${activationKind}`,
    });
    assert.equal(blankRAIPrimary.status, "blank_rai_primary_opened");
    assert.equal(blankRAIPrimary.replacement, "atomic");
    assert.equal(blankRAIPrimary.intentPhase, "RAD-10");
    assert.equal(blankRAIPrimary.state.phase, "RAD-20");
    assert.equal(blankRAIPrimary.state.mappingId, "RP002-RAI-01");
    assert.equal(blankRAIPrimary.state.formId, "RAI-P0");
    assert.deepEqual(blankRAIPrimary.state.controls.map(({ id, value, nativeValue, selected }) => ({
      id, value, nativeValue, selected,
    })), [
      { id: "principle", value: "", nativeValue: "", selected: false },
      { id: "mitigation", value: "", nativeValue: "", selected: false },
      { id: "accountable_owner", value: "", nativeValue: "", selected: false },
    ]);
    assert.equal(blankRAIPrimary.state.attemptStatus, "no_attempt");
    assert.equal(blankRAIPrimary.state.scoringEnabled, false);
    assert.equal(blankRAIPrimary.state.successor, null);
    assert.deepEqual(blankRAIPrimary.state.availableActions, ["RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD"]);
    const convergence = createCustodyLedgerNormalRAIPrimaryConvergence(
      fixture.entered.state,
      fixture.primaryResult,
      fixture.freshPracticeState,
      fixture.transferCompleteState,
      result.state,
      complete.state,
      blankRAIPrimary.state,
      predecessor,
    );
    assert.ok(convergence);
    assert.equal(convergence.getState().phase, "RAIC-00");
    assert.equal(convergence.getState().case.id, "P01");
    assert.deepEqual(convergence.getState().availableActions, [
      CUSTODY_LEDGER_SUBMIT_RAI_CASE,
      "RETURN TO EVIDENCE",
      "RETURN TO CITY THRESHOLD",
    ]);
    for (const control of convergence.getState().controls) {
      assert.equal(convergence.updateResponse({
        caseId: "P01",
        dimension: control.authorityDimension,
        value: control.choices[0],
      }).status, "response_updated_session_only");
    }
    const next = convergence.dispatch({
      packetId: "RP-002",
      version: CUSTODY_LEDGER_RAI_PRIMARY_CONVERGENCE_VERSION,
      mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER",
      action: CUSTODY_LEDGER_SUBMIT_RAI_CASE,
      activationKind,
      eventToken: `rp002-rai-primary-submit-${activationKind}`,
    });
    assert.equal(next.status, "next_blank_case");
    assert.equal(next.evaluationExposed, false);
    assert.equal(next.state.case.id, "P02");
    for (const caseId of ["P02", "P03"]) {
      const scenario = responsibleAIPrimaryScenarios.find(({ id }) => id === caseId);
      for (const dimension of ["principle", "mitigation", "owner"]) {
        assert.equal(convergence.updateResponse({ caseId, dimension, value: scenario[dimension] }).status, "response_updated_session_only");
      }
      var primaryExit = convergence.dispatch({
        packetId: "RP-002",
        version: CUSTODY_LEDGER_RAI_PRIMARY_CONVERGENCE_VERSION,
        mode: "campaign",
        owner: "PILOT // FLIGHT RECORDER",
        action: CUSTODY_LEDGER_SUBMIT_RAI_CASE,
        activationKind,
        eventToken: `rp002-rai-primary-${caseId}-${activationKind}`,
      });
    }
    assert.equal(primaryExit.status, "strict_primary_complete");
    const transferConvergence = createCustodyLedgerNormalRAITransferConvergence(
      fixture.entered.state,
      fixture.primaryResult,
      fixture.freshPracticeState,
      fixture.transferCompleteState,
      result.state,
      complete.state,
      primaryExit.state,
      predecessor,
    );
    assert.ok(transferConvergence);
    assert.equal(transferConvergence.getState().phase, "RAITC-00");
    assert.equal(transferConvergence.getState().case.id, "T01");
    for (const [dimension, value] of Object.entries({
      principle: "transparency",
      mitigation: "preserve_provenance_missingness_and_limits",
      owner: "human_evidence_reviewer",
    })) {
      assert.equal(transferConvergence.updateResponse({ caseId: "T01", dimension, value }).status, "response_updated_session_only");
    }
    const transferNext = transferConvergence.dispatch({
      packetId: "RP-002",
      version: CUSTODY_LEDGER_RAI_TRANSFER_CONVERGENCE_VERSION,
      mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER",
      action: CUSTODY_LEDGER_SUBMIT_RAI_TRANSFER_CASE,
      activationKind,
      eventToken: `rp002-rai-transfer-submit-${activationKind}`,
    });
    assert.equal(transferNext.status, "next_blank_transfer_case");
    assert.equal(transferNext.evaluationExposed, false);
    assert.equal(transferNext.state.case.id, "T02");
    const transferAnswers = {
      T02: {
        principle: "privacy_and_security",
        mitigation: "do_not_open_or_retain_unneeded_private_data",
        owner: "human_privacy_reviewer",
      },
      T03: {
        principle: "accountability",
        mitigation: "assign_review_audit_and_correction_responsibility",
        owner: "human_decision_owner",
      },
    };
    for (const caseId of ["T02", "T03"]) {
      for (const dimension of ["principle", "mitigation", "owner"]) {
        assert.equal(transferConvergence.updateResponse({
          caseId,
          dimension,
          value: transferAnswers[caseId][dimension],
        }).status, "response_updated_session_only");
      }
      var transferExit = transferConvergence.dispatch({
        packetId: "RP-002",
        version: CUSTODY_LEDGER_RAI_TRANSFER_CONVERGENCE_VERSION,
        mode: "campaign",
        owner: "PILOT // FLIGHT RECORDER",
        action: CUSTODY_LEDGER_SUBMIT_RAI_TRANSFER_CASE,
        activationKind,
        eventToken: `rp002-rai-transfer-${caseId}-${activationKind}`,
      });
    }
    assert.equal(transferExit.status, "strict_transfer_complete");
    const explanationConvergence = createCustodyLedgerNormalRAIExplanationConvergence(
      fixture.entered.state,
      fixture.primaryResult,
      fixture.freshPracticeState,
      fixture.transferCompleteState,
      result.state,
      complete.state,
      primaryExit.state,
      transferExit.state,
      predecessor,
    );
    assert.ok(explanationConvergence);
    assert.equal(explanationConvergence.getState().phase, "RAIEC-00");
    assert.equal(explanationConvergence.getState().controlState, "genuinely_blank");
    for (const dimension of custodyLedgerRAIExplanationDimensions) {
      assert.equal(explanationConvergence.updateResponse({
        dimension,
        value: dimension === custodyLedgerRAIExplanationDimensions[0]
          ? "wrong application label boundary"
          : custodyLedgerRAIExplanationAnswers[dimension],
      }).status, "response_updated_session_only");
    }
    const explanationFeedback = explanationConvergence.dispatch({
      packetId: "RP-002",
      version: CUSTODY_LEDGER_RAI_EXPLANATION_CONVERGENCE_VERSION,
      mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER",
      action: CUSTODY_LEDGER_SUBMIT_RAI_EXPLANATION,
      activationKind,
      eventToken: `rp002-rai-explanation-miss-${activationKind}`,
    });
    assert.equal(explanationFeedback.status, "first_actual_boundary_feedback");
    assert.equal(explanationFeedback.state.failedBoundary.id, custodyLedgerRAIExplanationDimensions[0]);
    const explanationRetry = explanationConvergence.dispatch({
      packetId: "RP-002",
      version: CUSTODY_LEDGER_RAI_EXPLANATION_CONVERGENCE_VERSION,
      mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER",
      action: CUSTODY_LEDGER_RETRY_RAI_EXPLANATION,
      activationKind,
      eventToken: `rp002-rai-explanation-retry-${activationKind}`,
    });
    assert.equal(explanationRetry.status, "blank_explanation_retry");
    assert.equal(explanationRetry.state.controls.every(({ valueState }) => valueState === "genuinely_blank"), true);
    assert.equal(explanationRetry.state.focusIntent.then, custodyLedgerRAIExplanationDimensions[0]);
    for (const dimension of custodyLedgerRAIExplanationDimensions) {
      assert.equal(explanationConvergence.updateResponse({
        dimension,
        value: custodyLedgerRAIExplanationAnswers[dimension],
      }).status, "response_updated_session_only");
    }
    const explanationComplete = explanationConvergence.dispatch({
      packetId: "RP-002",
      version: CUSTODY_LEDGER_RAI_EXPLANATION_CONVERGENCE_VERSION,
      mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER",
      action: CUSTODY_LEDGER_SUBMIT_RAI_EXPLANATION,
      activationKind,
      eventToken: `rp002-rai-explanation-pass-${activationKind}`,
    });
    assert.equal(explanationComplete.status, "strict_explanation_complete");
    assert.equal(explanationComplete.state.phase, "RAIEC-20C");
    assert.equal(explanationComplete.state.conclusion.text,
      "My application label is a human interpretation, not their fact or permission to act.");
    assert.equal(explanationComplete.state.dismissalExposed, false);
    assert.equal(explanationComplete.state.successor, null);
    const reviewController = createCustodyLedgerNormalRAIConclusionReview(
      fixture.entered.state,
      fixture.primaryResult,
      fixture.freshPracticeState,
      fixture.transferCompleteState,
      result.state,
      complete.state,
      primaryExit.state,
      transferExit.state,
      explanationComplete.state,
      {
        predecessorValue: completedCityThresholdSave(),
        prerequisiteEvidence: completedPrerequisites(),
      },
      predecessor,
    );
    assert.ok(reviewController);
    assert.equal(reviewController.getState().phase, "RG-00");
    assert.deepEqual(reviewController.getState().availableActions, [
      CUSTODY_LEDGER_DISMISS_RAI_CONCLUSION,
      "RETURN TO EVIDENCE",
      "RETURN TO CITY THRESHOLD",
    ]);
    const dismissalToken = `rp002-rai-conclusion-dismiss-${activationKind}`;
    const dismissed = reviewController.dispatch({
      packetId: "RP-002",
      version: CUSTODY_LEDGER_RAI_CONCLUSION_REVIEW_VERSION,
      mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER",
      action: CUSTODY_LEDGER_DISMISS_RAI_CONCLUSION,
      activationKind,
      eventToken: dismissalToken,
    });
    assert.equal(dismissed.status, "strict_review_eligible");
    assert.equal(dismissed.state.phase, "RG-20");
    assert.deepEqual(dismissed.state.availableActions, [
      CUSTODY_LEDGER_REVIEW_BOUNDED_COMPARISON,
      "RETURN TO EVIDENCE",
      "RETURN TO CITY THRESHOLD",
    ]);
    assert.equal(reviewController.dispatch({
      packetId: "RP-002",
      version: CUSTODY_LEDGER_RAI_CONCLUSION_REVIEW_VERSION,
      mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER",
      action: CUSTODY_LEDGER_DISMISS_RAI_CONCLUSION,
      activationKind,
      eventToken: dismissalToken,
    }).status, "duplicate_suppressed");
    const review = reviewController.dispatch({
      packetId: "RP-002",
      version: CUSTODY_LEDGER_RAI_CONCLUSION_REVIEW_VERSION,
      mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER",
      action: CUSTODY_LEDGER_REVIEW_BOUNDED_COMPARISON,
      activationKind,
      eventToken: `rp002-bounded-review-${activationKind}`,
    });
    assert.equal(review.status, "bounded_review_visible");
    assert.equal(review.state.phase, "RG-30");
    assert.equal(review.state.hardStop, true);
    assert.deepEqual(review.state.availableActions, [
      "RETURN TO EVIDENCE",
      "RETURN TO CITY THRESHOLD",
    ]);
    assert.equal(JSON.stringify(review.state).includes("PREPARE SAVE"), false);
    assert.equal(review.state.cityStateDelta, null);
    assert.equal(review.state.campaignCommitEnabled, false);
    assert.equal(review.state.successor, null);
    if (activationKind === "pointer") {
      const recoveryController = createCustodyLedgerNormalRAIConclusionReview(
        fixture.entered.state,
        fixture.primaryResult,
        fixture.freshPracticeState,
        fixture.transferCompleteState,
        result.state,
        complete.state,
        primaryExit.state,
        transferExit.state,
        explanationComplete.state,
        {
          predecessorValue: null,
          prerequisiteEvidence: completedPrerequisites(),
        },
        predecessor,
      );
      const recovery = recoveryController.dispatch({
        packetId: "RP-002",
        version: CUSTODY_LEDGER_RAI_CONCLUSION_REVIEW_VERSION,
        mode: "campaign",
        owner: "PILOT // FLIGHT RECORDER",
        action: CUSTODY_LEDGER_DISMISS_RAI_CONCLUSION,
        activationKind,
        eventToken: "rp002-rai-conclusion-recovery",
      });
      assert.equal(recovery.status, "returned_to_first_incomplete_protected_boundary");
      assert.equal(recovery.state.phase, "RG-U");
      assert.equal(recovery.state.privateWorkCleared, true);
      assert.equal(recovery.state.returnedBoundary, "rp001_anchor");
      assert.deepEqual(recovery.state.availableActions, []);
    }
    assert.equal(JSON.stringify(fixture.entered.save), persistedBytes);
  }

  const fixture = openExplanation("rp002-explanation-reject");
  assert.equal(createCustodyLedgerNormalExplanationEntry(
    { ...fixture.entered.state, privateNotes: "PRIVATE" },
    fixture.primaryResult,
    fixture.freshPracticeState,
    fixture.transferCompleteState,
    predecessor,
  ), null);
  assert.equal(createCustodyLedgerNormalExplanationEntry(
    fixture.entered.state,
    fixture.primaryResult,
    fixture.freshPracticeState,
    { ...fixture.transferCompleteState, successor: "RP-003" },
    predecessor,
  ), null);

  const feedbackEntry = createCustodyLedgerNormalExplanationEntry(
    fixture.entered.state,
    fixture.primaryResult,
    fixture.freshPracticeState,
    fixture.transferCompleteState,
    predecessor,
  ).dispatch({
    packetId: "RP-002",
    version: CUSTODY_LEDGER_EXPLANATION_ENTRY_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CUSTODY_LEDGER_OPEN_BLANK_EXPLANATION,
    activationKind: "pointer",
    eventToken: "rp002-explanation-feedback-entry",
  }).state;
  const feedbackController = createCustodyLedgerNormalExplanationSubmission(
    fixture.entered.state,
    fixture.primaryResult,
    fixture.freshPracticeState,
    fixture.transferCompleteState,
    feedbackEntry,
    predecessor,
  );
  const feedback = feedbackController.dispatch({
    packetId: "RP-002",
    version: CUSTODY_LEDGER_EXPLANATION_SUBMISSION_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CUSTODY_LEDGER_SUBMIT_PYTHON_EXPLANATION,
    activationKind: "pointer",
    eventToken: "rp002-explanation-feedback-submit",
  });
  assert.equal(feedback.status, "feedback");
  assert.deepEqual(feedback.state.failedDimensions, custodyLedgerExplanationDimensions);
  assert.equal(feedback.state.privateProseCleared, true);
  assert.equal(feedbackController.retryBlank().state.explanationControlState, "genuinely_blank");
});

test("blank primary restore is replay-free and missing or forged prerequisites fail closed", () => {
  const complete = completeFarSave("rp002-python-primary-restore");
  const local = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: complete }).dispatch(intent(
    custodyLedgerObservationControls.openLocalComparison.label,
    "pointer",
    "rp002-python-primary-restore-local",
  )).save;
  const open = (prerequisiteEvidence = completedPrerequisites()) => createCustodyLedgerNormalRouteController({
    predecessor,
    restoredSave: local,
    prerequisiteEvidence,
  });
  assert.equal(open().dispatch(intent(CUSTODY_LEDGER_OPEN_PYTHON_PRIMARY_ACTION, "pointer", "rp002-python-primary-open")).status, "entered_python_primary");
  assert.equal(open(null).dispatch(intent(CUSTODY_LEDGER_OPEN_PYTHON_PRIMARY_ACTION, "pointer", "rp002-python-primary-missing")).status, "rejected");
  assert.equal(open({ ...completedPrerequisites(), privateNotes: "PRIVATE" }).dispatch({
    ...intent(CUSTODY_LEDGER_OPEN_PYTHON_PRIMARY_ACTION, "pointer", "rp002-python-primary-private"),
    learnerSource: "PRIVATE",
  }).status, "rejected");

  const entered = open().dispatch(intent(CUSTODY_LEDGER_OPEN_PYTHON_PRIMARY_ACTION, "keyboard_enter", "rp002-python-primary-save"));
  assert.deepEqual(sanitizeCustodyLedgerNormalRouteSave(entered.save, predecessor), entered.save);
  const restored = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: entered.save, prerequisiteEvidence: completedPrerequisites() });
  assert.equal(restored.getState().checkpoint, "sc03_python_primary_blank");
  assert.equal(restored.getState().sceneStatement, null);
  assert.equal(restored.getState().statusMessage, null);
  assert.deepEqual(restored.getSave(), entered.save);
  assert.equal(createCustodyLedgerNormalRouteController({ predecessor, restoredSave: entered.save }).getState().checkpoint, "sc03_local_comparison_blank");
});

test("blank local comparison resumes without replay and returns separately to evidence or route", () => {
  const complete = completeFarSave("rp002-local-comparison-return");
  const entered = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: complete }).dispatch(intent(
    custodyLedgerObservationControls.openLocalComparison.label,
    "screen_reader",
    "rp002-local-comparison-return-enter",
  ));
  const blankSave = entered.save;
  const evidenceBytes = JSON.stringify(blankSave.observationEvidence);
  assert.deepEqual(sanitizeCustodyLedgerNormalRouteSave(blankSave, predecessor), blankSave);

  const storage = memoryStorage();
  assert.equal(writeCustodyLedgerNormalRoute(storage, blankSave, predecessor), true);
  assert.deepEqual(readCustodyLedgerNormalRoute(storage, predecessor), blankSave);
  const resumed = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: blankSave });
  assert.equal(resumed.getState().checkpoint, "sc03_local_comparison_blank");
  assert.equal(resumed.getState().sceneStatement, null);
  assert.equal(resumed.getState().statusMessage, null);
  assert.deepEqual(resumed.getSave(), blankSave);
  assertNoDeltaOrCredit(resumed.getState(), 5);

  const evidenceReturn = resumed.dispatch(intent(
    custodyLedgerObservationControls.returnToEvidence.label,
    "keyboard_space",
    "rp002-local-comparison-return-evidence",
  ));
  assert.equal(evidenceReturn.status, "returned_to_evidence");
  assert.equal(evidenceReturn.state.checkpoint, "sc03_far_complete");
  assert.equal(JSON.stringify(evidenceReturn.save.observationEvidence), evidenceBytes);
  assert.deepEqual(evidenceReturn.state.actionStates.map(({ label, status }) => ({ label, status })), [
    { label: custodyLedgerObservationActions.distant_repetition, status: "replay" },
    { label: custodyLedgerObservationActions.closed_boundary, status: "replay" },
    { label: custodyLedgerObservationControls.openLocalComparison.label, status: "available" },
  ]);
  assertNoDeltaOrCredit(evidenceReturn.state, 5);

  const routeController = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: blankSave });
  const routeReturn = routeController.dispatch(intent(
    custodyLedgerRouteActions.returnAccepted,
    "switch",
    "rp002-local-comparison-return-route",
  ));
  assert.equal(routeReturn.status, "returned");
  assert.equal(routeReturn.state.checkpoint, "city_threshold");
  assertNoDeltaOrCredit(routeReturn.state);
});

test("local comparison activation is one-hit and unsafe, passive, early, repeated, Tour, or combined intent fails closed", () => {
  const complete = completeFarSave("rp002-local-comparison-negative");
  const clean = intent(
    custodyLedgerObservationControls.openLocalComparison.label,
    "pointer",
    "rp002-local-comparison-negative-clean",
  );
  const variants = [
    { mode: "protected" },
    { mode: "demo_tour" },
    { owner: "SYSTEM // DEMO TOUR" },
    { boardId: "SC-03-30" },
    { version: "stale" },
    { transition: "open_and_learn" },
    { explicit: false },
    { activationKind: "focus" },
    { activationKind: "hover" },
    { activationKind: "dwell" },
    { stale: true },
    { forged: true },
    { implicit: true },
    { multiHit: true },
    { actions: [custodyLedgerObservationControls.openLocalComparison.label, "BEGIN PY-009"] },
    { learnerSource: "PRIVATE" },
    { answers: { python: "PRIVATE" } },
  ];
  for (const [index, override] of variants.entries()) {
    const controller = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: complete });
    const before = JSON.stringify(controller.getState());
    const result = controller.dispatch({
      ...clean,
      eventToken: `rp002-local-comparison-negative-${index}`,
      ...override,
    });
    assert.equal(result.status, "rejected");
    assert.equal(JSON.stringify(result.state), before);
    assert.doesNotMatch(JSON.stringify(result.state), /PRIVATE|BEGIN PY-009/);
    assertNoDeltaOrCredit(result.state, 5);
  }

  const duplicateController = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: complete });
  const repeated = { ...clean, eventToken: "rp002-local-comparison-duplicate" };
  assert.equal(duplicateController.dispatch(repeated).status, "entered_local_comparison");
  const duplicate = duplicateController.dispatch(repeated);
  assert.equal(duplicate.status, "duplicate_suppressed");
  assert.equal(duplicate.state.checkpoint, "sc03_local_comparison_blank");
  assertNoDeltaOrCredit(duplicate.state, 5);

  const repeatedController = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: duplicate.state.checkpoint === "sc03_local_comparison_blank" ? duplicateController.getSave() : null });
  const repeatedFresh = repeatedController.dispatch({ ...clean, eventToken: "rp002-local-comparison-repeat-fresh" });
  assert.equal(repeatedFresh.status, "rejected");
  assert.equal(repeatedFresh.reason, "local_comparison_blank_closed");
  assert.equal(repeatedFresh.state.checkpoint, "sc03_local_comparison_blank");
  assertNoDeltaOrCredit(repeatedFresh.state, 5);

  const early = createCustodyLedgerNormalRouteController({
    predecessor,
    restoredSave: farBlankSave("rp002-local-comparison-early"),
  });
  const earlyBefore = JSON.stringify(early.getState());
  assert.equal(early.dispatch({ ...clean, eventToken: "rp002-local-comparison-early-open" }).status, "rejected");
  assert.equal(JSON.stringify(early.getState()), earlyBefore);

  const tour = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: complete, mode: "demo_tour" });
  const tourBefore = JSON.stringify(tour.getState());
  assert.equal(tour.dispatch({ ...clean, eventToken: "rp002-local-comparison-tour" }).status, "rejected");
  assert.equal(JSON.stringify(tour.getState()), tourBefore);
  assertNoDeltaOrCredit(tour.getState());
});

test("blank local comparison sanitation rejects partial, stale, forged, private, successor, and learning-bearing saves", () => {
  const complete = completeFarSave("rp002-local-comparison-sanitize");
  const blank = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: complete }).dispatch(intent(
    custodyLedgerObservationControls.openLocalComparison.label,
    "speech",
    "rp002-local-comparison-sanitize-enter",
  )).save;
  const [recordA, recordB, recordC, farA, farB] = blank.observationEvidence;
  for (const invalid of [
    { ...blank, privateNotes: "PRIVATE" },
    { ...blank, learnerSource: "PRIVATE" },
    { ...blank, answers: { python: "PRIVATE" } },
    { ...blank, observationEvidence: [recordA, recordB, recordC, farA] },
    { ...blank, observationEvidence: [recordA, recordB, recordC, farA, farA] },
    { ...blank, observationEvidence: [recordA, recordB, recordC, farA, { ...farB, finalizationStatus: "draft" }] },
    { ...blank, observationEvidence: [recordA, recordB, recordC, farA, { ...farB, observationId: "unknown_far" }] },
    { ...blank, checkpoint: "SC-03-30" },
    { ...blank, successor: "RP-003" },
    { ...blank, saveEligibility: true },
  ]) assert.equal(sanitizeCustodyLedgerNormalRouteSave(invalid, predecessor), null);
});

test("complete far save resumes and sanitizes only exact five-record evidence", () => {
  const first = createCustodyLedgerNormalRouteController({
    predecessor,
    restoredSave: farBlankSave("rp002-complete-save"),
  }).dispatch(intent(
    custodyLedgerObservationActions.distant_repetition,
    "pointer",
    "rp002-complete-save-first",
  ));
  const complete = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: first.save }).dispatch(intent(
    custodyLedgerObservationActions.closed_boundary,
    "touch",
    "rp002-complete-save-second",
  )).save;
  assert.deepEqual(sanitizeCustodyLedgerNormalRouteSave(complete, predecessor), complete);
  const storage = memoryStorage();
  assert.equal(writeCustodyLedgerNormalRoute(storage, complete, predecessor), true);
  assert.deepEqual(readCustodyLedgerNormalRoute(storage, predecessor), complete);
  const resumed = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: complete });
  assert.equal(resumed.getState().checkpoint, "sc03_far_complete");
  assert.equal(resumed.getState().sceneStatement, null);
  assert.equal(resumed.getState().statusMessage, null);
  assert.deepEqual(resumed.getSave(), complete);
  assertNoDeltaOrCredit(resumed.getState(), 5);

  const [recordA, recordB, recordC, farA, farB] = complete.observationEvidence;
  for (const invalid of [
    { ...complete, privateNotes: "PRIVATE" },
    { ...complete, observationEvidence: [recordA, recordB, recordC, farA] },
    { ...complete, observationEvidence: [recordA, recordB, recordC, farA, farA] },
    { ...complete, observationEvidence: [recordA, recordB, recordC, farA, { ...farB, finalizationStatus: "draft" }] },
    { ...complete, observationEvidence: [recordA, recordB, recordC, farA, { ...farB, observationId: "unknown_far" }] },
    { ...complete, checkpoint: "sc03_far_first" },
    { ...complete, checkpoint: "sc03_far_complete", successor: "SC-03-30" },
  ]) assert.equal(sanitizeCustodyLedgerNormalRouteSave(invalid, predecessor), null);
});

test("first-far save resumes and sanitizes only exact one-of-two canonical evidence", () => {
  const blankSave = farBlankSave("rp002-first-far-save");
  const recorded = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: blankSave }).dispatch(intent(
    custodyLedgerObservationActions.distant_repetition,
    "touch",
    "rp002-first-far-save-record",
  ));
  const safe = recorded.save;
  assert.deepEqual(sanitizeCustodyLedgerNormalRouteSave(safe, predecessor), safe);
  const storage = memoryStorage();
  assert.equal(writeCustodyLedgerNormalRoute(storage, safe, predecessor), true);
  assert.deepEqual(readCustodyLedgerNormalRoute(storage, predecessor), safe);
  const resumed = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: safe });
  assert.equal(resumed.getState().checkpoint, "sc03_far_first");
  assert.deepEqual(resumed.getSave(), safe);
  assertNoDeltaOrCredit(resumed.getState(), 4);

  const [recordA, recordB, recordC, farRecord] = safe.observationEvidence;
  for (const invalid of [
    { ...safe, privateNotes: "PRIVATE" },
    { ...safe, observationEvidence: [recordA, recordB, recordC] },
    { ...safe, observationEvidence: [recordA, recordB, recordC, farRecord, farRecord] },
    { ...safe, observationEvidence: [recordA, recordB, recordC, { ...farRecord, finalizationStatus: "draft" }] },
    { ...safe, observationEvidence: [recordA, recordB, recordC, { ...farRecord, observationId: "unknown_far" }] },
    { ...safe, checkpoint: "sc03_far_second" },
  ]) assert.equal(sanitizeCustodyLedgerNormalRouteSave(invalid, predecessor), null);
});

test("first far boundary rejects unsafe, passive, ambiguous, private, Tour, and duplicate input without evidence", () => {
  const save = farBlankSave("rp002-first-far-negative");
  const clean = intent(
    custodyLedgerObservationActions.distant_repetition,
    "pointer",
    "rp002-first-far-negative-clean",
  );
  const alternateSemanticId = intent(
    custodyLedgerObservationActions.closed_boundary,
    "pointer",
    "rp002-first-far-negative-alternate",
  ).semanticHotspotId;
  const variants = [
    { mode: "protected" },
    { mode: "demo_tour" },
    { owner: "SYSTEM // DEMO TOUR" },
    { boardId: "SC-03-10" },
    { registryVersion: "stale" },
    { stale: true },
    { forged: true },
    { implicit: true },
    { multiHit: true },
    { actions: [custodyLedgerObservationActions.distant_repetition, custodyLedgerObservationActions.closed_boundary] },
    { candidateSemanticIds: [clean.semanticHotspotId, alternateSemanticId] },
    { semanticHotspotId: alternateSemanticId },
    { privateNotes: "PRIVATE-FAR" },
    { activationKind: "focus" },
    { activationKind: "hover" },
    { activationKind: "dwell" },
    { evidenceReadable: false },
    { cropSafe: false },
  ];
  for (const [index, override] of variants.entries()) {
    const controller = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: save });
    const before = JSON.stringify(controller.getState());
    const result = controller.dispatch({ ...clean, eventToken: `rp002-first-far-negative-${index}`, ...override });
    assert.equal(result.status, "rejected");
    assert.equal(JSON.stringify(result.state), before);
    assert.doesNotMatch(JSON.stringify(result.state), /PRIVATE-FAR/);
    assertNoDeltaOrCredit(result.state, 3);
  }

  const duplicateController = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: save });
  const repeated = { ...clean, eventToken: "rp002-first-far-negative-duplicate" };
  assert.equal(duplicateController.dispatch(repeated).status, "recorded");
  const duplicate = duplicateController.dispatch(repeated);
  assert.equal(duplicate.status, "duplicate_suppressed");
  assertNoDeltaOrCredit(duplicate.state, 4);
});

test("comparison boundary rejects wrong, stale, forged, combined, private, Tour, implicit, early, and duplicate attempts", () => {
  const complete = completedNearSave("rp002-compare-negative");
  const clean = intent(
    custodyLedgerObservationControls.compareScale.label,
    "pointer",
    "rp002-compare-negative-clean",
  );
  const variants = [
    { action: "WRONG" },
    { stale: true },
    { forged: true },
    { multiHit: true },
    { actions: [custodyLedgerObservationControls.compareScale.label, custodyLedgerObservationActions.distant_repetition] },
    { privateNotes: "PRIVATE-COMPARE" },
    { mode: "demo_tour" },
    { explicit: false },
    { owner: "SYSTEM // DEMO TOUR" },
    { boardId: "SC-03-20" },
    { transition: "compare_and_record_far" },
  ];
  for (const [index, override] of variants.entries()) {
    const controller = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: complete });
    const before = JSON.stringify(controller.getState().observationEvidence);
    const result = controller.dispatch({ ...clean, eventToken: `rp002-compare-negative-${index}`, ...override });
    assert.equal(result.status, "rejected");
    assert.equal(controller.getState().checkpoint, "sc03_near_complete");
    assert.equal(JSON.stringify(controller.getState().observationEvidence), before);
    assert.doesNotMatch(JSON.stringify(controller.getState()), /PRIVATE-COMPARE/);
    assertNoDeltaOrCredit(controller.getState(), 3);
  }

  const early = createCustodyLedgerNormalRouteController({ predecessor });
  assert.equal(early.dispatch(clean).status, "rejected");
  assert.equal(early.getState().checkpoint, "city_threshold");
  assertNoDeltaOrCredit(early.getState());

  const controller = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: complete });
  const repeated = { ...clean, eventToken: "rp002-compare-duplicate-token" };
  assert.equal(controller.dispatch(repeated).status, "advanced");
  const duplicate = controller.dispatch(repeated);
  assert.equal(duplicate.status, "duplicate_suppressed");
  assert.equal(duplicate.state.checkpoint, "sc03_far_blank");
  assertNoDeltaOrCredit(duplicate.state, 3);
});

test("far-blank save is allowlisted only with exact three-near zero-far evidence", () => {
  const complete = completedNearSave("rp002-far-save");
  const controller = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: complete });
  const advanced = controller.dispatch(intent(
    custodyLedgerObservationControls.compareScale.label,
    "screen_reader",
    "rp002-far-save-compare",
  ));
  assert.equal(advanced.status, "advanced");
  const storage = memoryStorage();
  assert.equal(writeCustodyLedgerNormalRoute(storage, advanced.save, predecessor), true);
  assert.deepEqual(readCustodyLedgerNormalRoute(storage, predecessor), advanced.save);
  const resumed = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: advanced.save });
  assert.equal(resumed.getState().checkpoint, "sc03_far_blank");
  assert.equal(resumed.getState().sceneStatement, null);
  assert.equal(resumed.getState().statusMessage, null);
  assert.deepEqual(resumed.getSave(), advanced.save);
  assertNoDeltaOrCredit(resumed.getState(), 3);
  const [recordA, recordB, recordC] = advanced.save.observationEvidence;
  for (const invalid of [
    { ...advanced.save, privateNotes: "PRIVATE" },
    { ...advanced.save, observationEvidence: [recordA, recordB] },
    { ...advanced.save, observationEvidence: [recordA, recordB, recordB] },
    { ...advanced.save, observationEvidence: [recordA, recordB, recordC, {
      ...recordC,
      observationId: "distant_repetition",
      boardId: "SC-03-20",
    }] },
    { ...advanced.save, checkpoint: "SC-03-20" },
  ]) assert.equal(sanitizeCustodyLedgerNormalRouteSave(invalid, predecessor), null);
});

test("unsafe third-observation and compare-through-observation input fail closed on exact two-ID evidence", () => {
  const variants = [
    { action: "UNKNOWN" },
    { stale: true },
    { forged: true },
    { multiHit: true },
    { tourDerived: true },
    { actions: [custodyLedgerObservationActions.later_stewardship, custodyLedgerObservationActions.outlined_gap] },
    { candidateSemanticIds: ["rp002.sc03_10.later_stewardship", "rp002.sc03_10.outlined_gap"] },
    { privateNotes: "PRIVATE-THIRD" },
    { action: custodyLedgerObservationControls.compareScale.label, comparisonIntent: true },
  ];
  for (const [index, override] of variants.entries()) {
    const first = blankController().dispatch(intent(
      custodyLedgerObservationActions.fixed_trace,
      "pointer",
      `rp002-unsafe-third-first-${index}`,
    ));
    const second = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: first.save }).dispatch(intent(
      custodyLedgerObservationActions.outlined_gap,
      "touch",
      `rp002-unsafe-third-second-${index}`,
    ));
    const before = JSON.stringify(second.save.observationEvidence);
    const controller = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: second.save });
    const clean = intent(
      custodyLedgerObservationActions.later_stewardship,
      "pointer",
      `rp002-unsafe-third-${index}`,
    );
    const result = controller.dispatch({ ...clean, ...override });
    assert.equal(result.status, "rejected");
    assert.equal(controller.getState().checkpoint, "sc03_near_second");
    assert.equal(JSON.stringify(controller.getState().observationEvidence), before);
    assert.doesNotMatch(JSON.stringify(controller.getState()), /PRIVATE-THIRD/);
    assertNoDeltaOrCredit(controller.getState(), 2);
  }

  const first = blankController().dispatch(intent(
    custodyLedgerObservationActions.fixed_trace,
    "pointer",
    "rp002-third-duplicate-first",
  ));
  const second = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: first.save }).dispatch(intent(
    custodyLedgerObservationActions.outlined_gap,
    "pointer",
    "rp002-third-duplicate-second",
  ));
  const controller = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: second.save });
  const repeated = intent(
    custodyLedgerObservationActions.later_stewardship,
    "pointer",
    "rp002-third-duplicate-token",
  );
  assert.equal(controller.dispatch(repeated).status, "recorded");
  const duplicate = controller.dispatch(repeated);
  assert.equal(duplicate.status, "duplicate_suppressed");
  assert.equal(duplicate.state.checkpoint, "sc03_near_third_acknowledgement");
  assertNoDeltaOrCredit(duplicate.state, 3);
});

test("two-ID save sanitation accepts only two canonical near records and rejects private, forged, duplicate, or third evidence", () => {
  const first = blankController().dispatch(intent(
    custodyLedgerObservationActions.fixed_trace,
    "pointer",
    "rp002-two-save-first",
  ));
  const second = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: first.save }).dispatch(intent(
    custodyLedgerObservationActions.outlined_gap,
    "pointer",
    "rp002-two-save-second",
  ));
  const storage = memoryStorage();
  assert.equal(writeCustodyLedgerNormalRoute(storage, second.save, predecessor), true);
  assert.deepEqual(readCustodyLedgerNormalRoute(storage, predecessor), second.save);
  const [recordA, recordB] = second.save.observationEvidence;
  for (const invalid of [
    { ...second.save, privateNotes: "PRIVATE" },
    { ...second.save, observationEvidence: [recordA] },
    { ...second.save, observationEvidence: [recordA, recordA] },
    { ...second.save, observationEvidence: [recordA, { ...recordB, observationId: "forged" }] },
    { ...second.save, observationEvidence: [...second.save.observationEvidence, recordB] },
    { ...second.save, checkpoint: "SC-03-20" },
  ]) assert.equal(sanitizeCustodyLedgerNormalRouteSave(invalid, predecessor), null);
});

test("three-near zero-far sanitation accepts only exact canonical evidence and no private or far state", () => {
  const first = blankController().dispatch(intent(
    custodyLedgerObservationActions.fixed_trace,
    "pointer",
    "rp002-three-save-first",
  ));
  const second = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: first.save }).dispatch(intent(
    custodyLedgerObservationActions.outlined_gap,
    "pointer",
    "rp002-three-save-second",
  ));
  const third = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: second.save }).dispatch(intent(
    custodyLedgerObservationActions.later_stewardship,
    "pointer",
    "rp002-three-save-third",
  ));
  const storage = memoryStorage();
  assert.equal(writeCustodyLedgerNormalRoute(storage, third.save, predecessor), true);
  assert.deepEqual(readCustodyLedgerNormalRoute(storage, predecessor), third.save);
  const [recordA, recordB, recordC] = third.save.observationEvidence;
  for (const invalid of [
    { ...third.save, privateNotes: "PRIVATE" },
    { ...third.save, observationEvidence: [recordA, recordB] },
    { ...third.save, observationEvidence: [recordA, recordB, recordB] },
    { ...third.save, observationEvidence: [recordA, recordB, { ...recordC, observationId: "distant_repetition" }] },
    { ...third.save, checkpoint: "SC-03-20" },
  ]) assert.equal(sanitizeCustodyLedgerNormalRouteSave(invalid, predecessor), null);
});

test("unsafe second-observation intents fail closed on the byte-stable verified first record", () => {
  const unsafe = [
    { action: "UNKNOWN" },
    { stale: true },
    { forged: true },
    { multiHit: true },
    { tourDerived: true },
    { actions: [custodyLedgerObservationActions.later_stewardship, custodyLedgerObservationActions.outlined_gap] },
    { candidateSemanticIds: ["rp002.sc03_10.later_stewardship", "rp002.sc03_10.outlined_gap"] },
    { privateNotes: "PRIVATE-SECOND" },
  ];
  for (const [index, override] of unsafe.entries()) {
    const first = blankController().dispatch(intent(
      custodyLedgerObservationActions.fixed_trace,
      "pointer",
      `rp002-unsafe-second-first-${index}`,
    ));
    const before = JSON.stringify(first.save.observationEvidence);
    const controller = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: first.save });
    const clean = intent(
      custodyLedgerObservationActions.later_stewardship,
      "pointer",
      `rp002-unsafe-second-${index}`,
    );
    const result = controller.dispatch({ ...clean, ...override });
    assert.equal(result.status, "rejected");
    assert.equal(controller.getState().checkpoint, "sc03_near_first");
    assert.equal(JSON.stringify(controller.getState().observationEvidence[0]), before);
    assert.doesNotMatch(JSON.stringify(controller.getState()), /PRIVATE-SECOND/);
    assertNoDeltaOrCredit(controller.getState(), 1);
  }
});

test("one-ID save sanitation accepts only the allowlisted canonical record and legacy blank saves", () => {
  const recorded = blankController().dispatch(intent(
    custodyLedgerObservationActions.outlined_gap,
    "pointer",
    "rp002-save-outlined-gap",
  ));
  const storage = memoryStorage();
  assert.equal(writeCustodyLedgerNormalRoute(storage, recorded.save, predecessor), true);
  assert.deepEqual(readCustodyLedgerNormalRoute(storage, predecessor), recorded.save);
  const legacyBlank = Object.fromEntries(Object.entries({ ...recorded.save, checkpoint: "sc03_near_blank" })
    .filter(([key]) => key !== "observationEvidence"));
  assert.equal(sanitizeCustodyLedgerNormalRouteSave(legacyBlank, predecessor)?.observationEvidence, null);

  const invalid = [
    { ...recorded.save, observationEvidence: { ...recorded.save.observationEvidence, observationId: "forged" } },
    { ...recorded.save, observationEvidence: null },
    { ...recorded.save, observationEvidence: [recorded.save.observationEvidence, recorded.save.observationEvidence] },
    { ...recorded.save, privateNotes: "PRIVATE" },
    { ...recorded.save, checkpoint: "SC-03-20" },
  ];
  for (const value of invalid) assert.equal(sanitizeCustodyLedgerNormalRouteSave(value, predecessor), null);
});

test("bounded storage keeps only exact allowlisted first-incomplete checkpoints and clears on return", () => {
  const storage = memoryStorage();
  const arrival = createCustodyLedgerNormalRouteController({ predecessor })
    .dispatch(intent(custodyLedgerRouteActions.enter, "pointer", "rp002-storage-event")).save;
  assert.equal(writeCustodyLedgerNormalRoute(storage, arrival, predecessor), true);
  assert.deepEqual(readCustodyLedgerNormalRoute(storage, predecessor), arrival);
  for (const checkpoint of ["sc03_survey_overview", "sc03_near_blank"]) {
    const saved = { ...arrival, checkpoint };
    assert.equal(writeCustodyLedgerNormalRoute(storage, saved, predecessor), true);
    assert.deepEqual(readCustodyLedgerNormalRoute(storage, predecessor), saved);
  }
  assert.equal(sanitizeCustodyLedgerNormalRouteSave({ ...arrival, sourceContent: "private" }, predecessor), null);
  storage.setItem(CUSTODY_LEDGER_NORMAL_ROUTE_SAVE_KEY, JSON.stringify({ ...arrival, checkpoint: "RP-003" }));
  assert.equal(readCustodyLedgerNormalRoute(storage, predecessor), null);
  clearCustodyLedgerNormalRoute(storage);
  assert.equal(storage.getItem(CUSTODY_LEDGER_NORMAL_ROUTE_SAVE_KEY), null);
});

test("normal app surface exposes reversible staged actions and a registered blank-view art hook", async () => {
  const [app, city, arrival, actionAccessibility, normalRoute, styles] = await Promise.all([
    readFile(new URL("../src/App.jsx", import.meta.url), "utf8"),
    readFile(new URL("../src/CityThresholdStaging.jsx", import.meta.url), "utf8"),
    readFile(new URL("../src/CivicRecordArrival.jsx", import.meta.url), "utf8"),
    readFile(new URL("../src/CivicActionAccessibility.js", import.meta.url), "utf8"),
    readFile(new URL("../src/CustodyLedgerNormalRoute.js", import.meta.url), "utf8"),
    readFile(new URL("../src/styles.css", import.meta.url), "utf8"),
  ]);
  assert.match(app, /readVerifiedCityThresholdPredecessor/);
  assert.match(app, /mode === "rp002-arrival"/);
  assert.match(city, /custodyLedgerRouteActions\.enter/);
  assert.match(arrival, /data-board=\{routeState\.boardId\}/);
  assert.match(arrival, /2026-07-16-civic-record-district-arrival\/civic-record-district-arrival-master-v1\.png/);
  assert.match(arrival, /SC-03-00-civic-record-arrival-v1/);
  assert.match(arrival, /SC-03-10-registered-continuity-hook/);
  assert.match(arrival, /SC-03-20-registered-continuity-hook/);
  assert.match(arrival, /SC-03-30-registered-continuity-hook/);
  assert.match(arrival, /SC-03-10-detail-pending/);
  assert.match(arrival, /SC-03-20-detail-pending/);
  assert.match(arrival, /SC-03-30-local-comparison/);
  assert.match(arrival, /SC-03-30-python-primary-blank/);
  assert.match(arrival, /UNFINISHED WORK IMAGE|unfinishedWorkImage\.label/);
  assert.match(arrival, /name="classification"/);
  assert.match(arrival, /name="owner"/);
  assert.match(arrival, /CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS/);
  assert.match(arrival, /primaryPhase === "30-A1F"/);
  assert.match(arrival, /primaryPhase === "30-A2"/);
  assert.match(arrival, /primaryPhase === "DR-00"/);
  assert.match(arrival, /primaryPhase === "DR-20"/);
  assert.match(arrival, /primaryPhase === "FT-00"/);
  assert.match(arrival, /primaryPhase === "FT-20F"/);
  assert.match(arrival, /primaryPhase === "FT-20C"/);
  assert.match(arrival, /primaryPhase === "EX-20"/);
  assert.match(arrival, /CUSTODY_LEDGER_OPEN_BLANK_EXPLANATION/);
  assert.match(arrival, /onExplanationOpen/);
  assert.match(arrival, /PILOT \/\/ FLIGHT RECORDER[\s\S]*CUSTODY_LEDGER_OPEN_BLANK_EXPLANATION/);
  assert.match(arrival, /value=\{explanationResponses\[dimension\] \?\? ""\}/);
  assert.match(arrival, /!\["EX-20", "EXS-00"\]\.includes\(primaryPhase\)[\s\S]*setExplanationResponses\(\{\}\)/);
  assert.match(arrival, /CUSTODY_LEDGER_SUBMIT_PYTHON_EXPLANATION/);
  assert.match(arrival, /primaryPhase === "EXS-20F"/);
  assert.match(arrival, /primaryPhase === "EXS-20C"/);
  assert.match(arrival, /primaryPhase === "RAD-20"/);
  assert.match(arrival, /CUSTODY_LEDGER_OPEN_RAI_PRIMARY/);
  assert.match(arrival, /onRAIPrimaryOpen/);
  assert.match(arrival, /value=\{raiPrimaryResponses\[control\.id\] \?\? ""\}/);
  assert.match(arrival, /CUSTODY_LEDGER_SUBMIT_RAI_CASE/);
  assert.match(arrival, /primaryPhase === "RAIC-20F"/);
  assert.match(arrival, /CUSTODY_LEDGER_ACKNOWLEDGE_RAI_FEEDBACK/);
  assert.match(arrival, /primaryPhase === "RAIC-30G"/);
  assert.match(arrival, /CUSTODY_LEDGER_COMPLETE_RAI_GUIDE/);
  assert.match(arrival, /primaryPhase === "RAIC-20C"/);
  assert.match(arrival, /No transfer action, submission, evaluator, attempt, or later state is available/);
  assert.match(arrival, /primaryPhase === "RAITC-00"/);
  assert.match(arrival, /CUSTODY_LEDGER_SUBMIT_RAI_TRANSFER_CASE/);
  assert.match(arrival, /primaryPhase === "RAITC-20F"/);
  assert.match(arrival, /CUSTODY_LEDGER_ACKNOWLEDGE_RAI_TRANSFER_FEEDBACK/);
  assert.match(arrival, /primaryPhase === "RAITC-30G"/);
  assert.match(arrival, /CUSTODY_LEDGER_COMPLETE_RAI_TRANSFER_GUIDE/);
  assert.match(arrival, /primaryPhase === "RAITC-20C"/);
  assert.match(arrival, /No explanation submit, evaluator, attempt, feedback, result, conclusion, or later action is available/);
  assert.match(arrival, /primaryPhase === "RAIEC-00"/);
  assert.match(arrival, /value=\{raiExplanationResponses\[control\.id\] \?\? ""\}/);
  assert.match(arrival, /CUSTODY_LEDGER_SUBMIT_RAI_EXPLANATION/);
  assert.match(arrival, /primaryPhase === "RAIEC-20F"/);
  assert.match(arrival, /first actual failed boundary/i);
  assert.match(arrival, /CUSTODY_LEDGER_RETRY_RAI_EXPLANATION/);
  assert.match(arrival, /primaryPhase === "RAIEC-20C"/);
  assert.match(arrival, /primaryInteraction\.conclusion\.text/);
  assert.match(arrival, /primaryPhase === "RG-00"/);
  assert.match(arrival, /CUSTODY_LEDGER_DISMISS_RAI_CONCLUSION/);
  assert.match(arrival, /primaryPhase === "RG-20"/);
  assert.match(arrival, /SYSTEM \/\/ EXPEDITION SESSION/);
  assert.match(arrival, /CUSTODY_LEDGER_REVIEW_BOUNDED_COMPARISON/);
  assert.match(arrival, /primaryPhase === "RG-30"/);
  assert.match(arrival, /primaryInteraction\.boundedSummary\.comparison/);
  assert.match(arrival, /primaryInteraction\.boundedSummary\.surveyMarker/);
  assert.match(arrival, /primaryPhase === "RG-U"/);
  assert.doesNotMatch(arrival, /PREPARE SAVE|save confirmation|retry-save/i);
  assert.match(arrival, /CUSTODY_LEDGER_RETRY_BLANK_EXPLANATION/);
  assert.match(arrival, /No explanation attempt, evaluation, feedback, result, or credit is active/);
  assert.match(arrival, /CUSTODY_LEDGER_CLEAR_RESULT_ACTION/);
  assert.match(arrival, /value === false[\s\S]*return "False"/);
  assert.match(app, /createCustodyLedgerNormalPrimaryInteraction/);
  assert.match(app, /createCustodyLedgerNormalPrimaryResultDismissal/);
  assert.match(app, /createCustodyLedgerNormalTransferInteraction/);
  assert.match(app, /createCustodyLedgerNormalExplanationEntry/);
  assert.match(app, /createCustodyLedgerNormalExplanationSubmission/);
  assert.match(app, /createCustodyLedgerNormalRAIPrimaryEntry/);
  assert.match(app, /createCustodyLedgerNormalRAIPrimaryConvergence/);
  assert.match(app, /createCustodyLedgerNormalRAITransferConvergence/);
  assert.match(app, /createCustodyLedgerNormalRAIExplanationConvergence/);
  assert.match(app, /createCustodyLedgerNormalRAIConclusionReview/);
  assert.match(app, /openCustodyLedgerRAIPrimary/);
  assert.match(app, /handleCustodyLedgerExplanationSubmit/);
  assert.match(app, /custodyLedgerPrimaryDismissalControllerRef/);
  assert.match(app, /onPrimaryDismiss=\{\(event\) => clearCustodyLedgerPrimaryResult\(routeState, event\)\}/);
  assert.match(app, /custodyLedgerTransferControllerRef/);
  assert.match(app, /onTransferSubmit=\{\(fields, event\) => submitCustodyLedgerTransfer\(routeState, fields, event\)\}/);
  assert.match(app, /onTransferRetry=\{retryCustodyLedgerTransfer\}/);
  assert.match(app, /onExplanationOpen=\{openCustodyLedgerExplanation\}/);
  assert.match(app, /onExplanationSubmit=\{handleCustodyLedgerExplanationSubmit\}/);
  assert.match(app, /onExplanationRetry=\{retryCustodyLedgerExplanation\}/);
  assert.match(app, /onRAIPrimaryOpen=\{openCustodyLedgerRAIPrimary\}/);
  assert.match(app, /onRAIPrimarySubmit=\{submitCustodyLedgerRAICase\}/);
  assert.match(app, /onRAIFeedbackAcknowledge=\{acknowledgeCustodyLedgerRAIFeedback\}/);
  assert.match(app, /onRAIGuideComplete=\{completeCustodyLedgerRAIGuide\}/);
  assert.match(app, /onRAITransferSubmit=\{submitCustodyLedgerRAITransferCase\}/);
  assert.match(app, /onRAITransferFeedbackAcknowledge=\{acknowledgeCustodyLedgerRAITransferFeedback\}/);
  assert.match(app, /onRAITransferGuideComplete=\{completeCustodyLedgerRAITransferGuide\}/);
  assert.match(app, /onRAIExplanationSubmit=\{submitCustodyLedgerRAIExplanation\}/);
  assert.match(app, /onRAIExplanationRetry=\{retryCustodyLedgerRAIExplanation\}/);
  assert.match(app, /onRAIConclusionDismiss=\{dismissCustodyLedgerRAIConclusion\}/);
  assert.match(app, /onBoundedComparisonReview=\{reviewCustodyLedgerBoundedComparison\}/);
  assert.match(app, /custodyLedgerPrimaryControllerRef/);
  assert.match(app, /setCustodyLedgerPrimaryView\(result\.state\)/);
  assert.match(app, /onPrimaryRetry=\{retryCustodyLedgerPrimary\}/);
  assert.doesNotMatch(arrival, /SC-03-00-overview-pending|REGISTERED CONTINUITY HOOK|city-threshold-overview-master/);
  assert.doesNotMatch(styles, /\.civic-record-art-status/);
  assert.match(arrival, /custodyLedgerRouteActions\.continueProtected/);
  assert.match(arrival, /CUSTODY_LEDGER_NEAR_DETAIL_ACTION/);
  assert.match(normalRoute, /createCustodyLedgerFirstNearDispatchOrchestrator/);
  assert.match(normalRoute, /createCustodyLedgerNormalRAIPrimaryEntry/);
  assert.match(normalRoute, /createCustodyLedgerNormalRAIPrimaryConvergence/);
  assert.match(normalRoute, /createCustodyLedgerNormalRAITransferConvergence/);
  assert.match(normalRoute, /createCustodyLedgerNormalRAIExplanationConvergence/);
  assert.match(normalRoute, /createCustodyLedgerNormalRAIConclusionReview/);
  for (const acceptedSource of [app, arrival, normalRoute]) {
    assert.doesNotMatch(acceptedSource, /submitCustodyLedgerRAIPrimaryScenario|custodyLedgerRAIAnswers/);
  }
  for (const boundedSource of [arrival, normalRoute]) {
    assert.doesNotMatch(boundedSource, /evaluateResponsibleAI/);
  }
  assert.match(normalRoute, /createCustodyLedgerSecondNearDispatchOrchestrator/);
  assert.match(normalRoute, /createCustodyLedgerThirdNearCompletionOrchestrator/);
  assert.match(normalRoute, /createCustodyLedgerHotspotDispatcher/);
  assert.match(normalRoute, /custodyLedgerHotspotRegistry/);
  assert.match(arrival, /data-observation-count/);
  assert.match(actionAccessibility, /RECORDED \/\/ REPLAY ADDS NO EVIDENCE/);
  assert.match(actionAccessibility, /AVAILABLE/);
  assert.match(actionAccessibility, /INERT \/\/ ZERO CREDIT \/\/ NOT YET ACTIVE/);
  assert.match(arrival, /aria-label=\{accessibility\.accessibleName\}/);
  assert.match(arrival, /describeCustodyLedgerPrimaryReturnGroup\(primaryPhase\)/);
  assert.doesNotMatch(arrival, /\? "Blank Python primary actions"/);
  assert.match(arrival, /\{accessibility\.stateText\}/);
  assert.match(arrival, /aria-disabled=\{isInert \|\| undefined\}/);
  assert.match(arrival, /disabled=\{isInert\}/);
  assert.match(arrival, /onClick=\{isInert \? undefined/);
  assert.doesNotMatch(arrival, /DORMANT|isDormant/);
  assert.match(arrival, /Recorded Scene statement/);
  assert.match(arrival, /Separate route return/);
  assert.match(app, /advanceCustodyLedgerNormalRoute/);
  assert.match(app, /custodyLedgerRouteView/);
  assert.match(app, /"recorded", "replayed", "returned_to_evidence", "entered_local_comparison"/);
  assert.match(app, /"sc03_near_second"/);
  assert.match(app, /"sc03_near_complete"/);
  assert.match(app, /"sc03_far_blank"/);
  assert.match(app, /"sc03_far_first"/);
  assert.match(app, /"sc03_far_complete"/);
  assert.match(app, /"sc03_local_comparison_blank"/);
  assert.match(normalRoute, /open_local_comparison_to_blank/);
  assert.match(normalRoute, /blank_entry/);
  assert.doesNotMatch(arrival, /python_transfer|rai_primary|SAVE BOUNDED COMPARISON/);
  assert.doesNotMatch(arrival, /RP-003|learning task/i);
  assert.doesNotMatch(arrival, /INSPECT FIXED TRACE|INSPECT LATER STEWARDSHIP|INSPECT OUTLINED GAP/);
  assert.match(styles, /\.civic-record-arrival[\s\S]*min-height:\s*44px/);
  assert.match(styles, /\.custody-ledger-fields input,[\s\S]*\.custody-ledger-fields textarea[\s\S]*min-height:\s*44px/);
  assert.match(styles, /@media \(forced-colors: active\)[\s\S]*\.custody-ledger-fields \[data-field-state="editable"\]/);
  assert.match(styles, /\.civic-route-return-actions/);
  assert.match(styles, /\.canonical-game-frame\[data-canonical-layout="narrow"\] \.city-command-panel[\s\S]*grid-template-columns:\s*1fr/);
});

test("primary phase replacements focus their active owner and associate failed fields", async () => {
  const arrival = await readFile(new URL("../src/CivicRecordArrival.jsx", import.meta.url), "utf8");

  assert.match(arrival, /ref=\{workHeadingRef\}[\s\S]*id="custody-ledger-work-heading"[\s\S]*tabIndex="-1"/);
  assert.match(arrival, /primaryPhase === "30-A0"[\s\S]*workHeadingRef\.current\?\.focus/);
  assert.match(arrival, /ref=\{feedbackHeadingRef\}[\s\S]*id="custody-ledger-feedback-heading"[\s\S]*tabIndex="-1"/);
  assert.match(arrival, /primaryPhase === "30-A1F"[\s\S]*feedbackHeadingRef\.current\?\.focus/);
  assert.match(arrival, /ref=\{resultHeadingRef\}[\s\S]*id="custody-ledger-result-heading"[\s\S]*tabIndex="-1"/);
  assert.match(arrival, /primaryPhase === "30-A2"[\s\S]*resultHeadingRef\.current\?\.focus/);
  assert.match(arrival, /primaryPhase === "DR-20"[\s\S]*freshHeadingRef\.current\?\.focus/);
  assert.match(arrival, /id="custody-ledger-fresh-classification"[\s\S]*name="classification"/);
  assert.match(arrival, /id="custody-ledger-fresh-owner"[\s\S]*name="owner"/);
  assert.match(arrival, /primaryPhase === "30-A0"[\s\S]*focusIntent\?\.target === "classification"[\s\S]*classificationRef\.current\?\.focus/);
  assert.match(arrival, /primaryPhase === "RG-00"[\s\S]*raiExplanationConclusionHeadingRef\.current\?\.focus/);
  assert.match(arrival, /ref=\{raiReviewEligibilityHeadingRef\}[\s\S]*id="custody-ledger-review-eligibility-heading"[\s\S]*tabIndex="-1"/);
  assert.match(arrival, /primaryPhase === "RG-20"[\s\S]*raiReviewEligibilityHeadingRef\.current\?\.focus/);
  assert.match(arrival, /ref=\{raiBoundedReviewHeadingRef\}[\s\S]*id="custody-ledger-bounded-review-heading"[\s\S]*tabIndex="-1"/);
  assert.match(arrival, /primaryPhase === "RG-30"[\s\S]*raiBoundedReviewHeadingRef\.current\?\.focus/);
  assert.match(arrival, /ref=\{raiReviewRecoveryHeadingRef\}[\s\S]*id="custody-ledger-review-recovery-heading"[\s\S]*tabIndex="-1"/);
  assert.match(arrival, /primaryPhase === "RG-U"[\s\S]*raiReviewRecoveryHeadingRef\.current\?\.focus/);
  assert.match(arrival, /data-feedback-field=\{item\.field\}/);
  assert.match(arrival, /Field \/\/ \{item\.field\}/);
  assert.match(arrival, /aria-labelledby=\{`\$\{fieldId\} \$\{ownerId\} \$\{messageId\}`\}/);
});
