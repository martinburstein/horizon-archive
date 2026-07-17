import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import {
  CUSTODY_LEDGER_NORMAL_ROUTE_SAVE_KEY,
  CUSTODY_LEDGER_NEAR_DETAIL_ACTION,
  clearCustodyLedgerNormalRoute,
  createCustodyLedgerNormalRouteController,
  createCustodyLedgerNormalRouteIntent,
  custodyLedgerRouteActions,
  readCustodyLedgerNormalRoute,
  sanitizeCustodyLedgerNormalRouteSave,
  writeCustodyLedgerNormalRoute,
} from "../src/CustodyLedgerNormalRoute.js";
import {
  custodyLedgerObservationActions,
  custodyLedgerObservationControls,
  custodyLedgerObservationInterfaceCopy,
} from "../src/CustodyLedgerObservation.js";
import {
  custodyLedgerObservationStages,
  custodyLedgerObservationStatements,
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

function memoryStorage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
    removeItem: (key) => values.delete(key),
  };
}

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

test("two-ID Recorded actions replay idempotently while the third Available action remains unactivatable", () => {
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
  const controller = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: second.save });
  const third = controller.dispatch(intent(
    custodyLedgerObservationActions.outlined_gap,
    "switch",
    "rp002-third-stays-closed",
  ));
  assert.equal(third.status, "rejected");
  assert.equal(controller.getState().checkpoint, "sc03_near_second");
  assert.deepEqual(controller.getState().observationEvidence.map((record) => record.observationId), ["fixed_trace", "later_stewardship"]);
  assertNoDeltaOrCredit(controller.getState(), 2);
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
  const [app, city, arrival, normalRoute, styles] = await Promise.all([
    readFile(new URL("../src/App.jsx", import.meta.url), "utf8"),
    readFile(new URL("../src/CityThresholdStaging.jsx", import.meta.url), "utf8"),
    readFile(new URL("../src/CivicRecordArrival.jsx", import.meta.url), "utf8"),
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
  assert.match(arrival, /SC-03-10-detail-pending/);
  assert.doesNotMatch(arrival, /SC-03-00-overview-pending|REGISTERED CONTINUITY HOOK|city-threshold-overview-master/);
  assert.doesNotMatch(styles, /\.civic-record-art-status/);
  assert.match(arrival, /custodyLedgerRouteActions\.continueProtected/);
  assert.match(arrival, /CUSTODY_LEDGER_NEAR_DETAIL_ACTION/);
  assert.match(normalRoute, /createCustodyLedgerFirstNearDispatchOrchestrator/);
  assert.match(normalRoute, /createCustodyLedgerSecondNearDispatchOrchestrator/);
  assert.match(normalRoute, /createCustodyLedgerHotspotDispatcher/);
  assert.match(normalRoute, /custodyLedgerHotspotRegistry/);
  assert.match(arrival, /data-observation-count/);
  assert.match(arrival, /RECORDED \/\/ REPLAY ADDS NO EVIDENCE/);
  assert.match(arrival, /AVAILABLE/);
  assert.match(arrival, /Recorded Scene statement/);
  assert.match(arrival, /Separate route return/);
  assert.match(app, /advanceCustodyLedgerNormalRoute/);
  assert.match(app, /custodyLedgerRouteView/);
  assert.match(app, /"recorded", "replayed", "returned_to_evidence"/);
  assert.match(app, /"sc03_near_second"/);
  assert.doesNotMatch(arrival, /RP-003|learning task/i);
  assert.doesNotMatch(arrival, /INSPECT FIXED TRACE|INSPECT LATER STEWARDSHIP|INSPECT OUTLINED GAP/);
  assert.match(styles, /\.civic-record-arrival[\s\S]*min-height:\s*44px/);
  assert.match(styles, /\.civic-route-return-actions/);
  assert.match(styles, /\.canonical-game-frame\[data-canonical-layout="narrow"\] \.city-command-panel[\s\S]*grid-template-columns:\s*1fr/);
});
