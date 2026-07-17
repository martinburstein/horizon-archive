import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { describeCivicActionAccessibility } from "../src/CivicActionAccessibility.js";
import {
  CUSTODY_LEDGER_NORMAL_ROUTE_SAVE_KEY,
  CUSTODY_LEDGER_NEAR_DETAIL_ACTION,
  clearCustodyLedgerNormalRoute,
  createCustodyLedgerNormalRouteController,
  createCustodyLedgerNormalRouteIntent,
  custodyLedgerRouteActions,
  custodyLedgerRouteOwners,
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

test("complete far evidence returns to two replay peers and one dormant local comparison", () => {
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
      { label: custodyLedgerObservationControls.openLocalComparison.label, status: "inert" },
    ]);
    assert.ok(returned.state.actionStates.every(({ minWidthCssPx, minHeightCssPx }) => (
      minWidthCssPx >= 44 && minHeightCssPx >= 44
    )));
    assert.equal(JSON.stringify(returned.save.observationEvidence), evidenceBytes);
    assertNoDeltaOrCredit(returned.state, 5);

    const dormant = createCustodyLedgerNormalRouteController({ predecessor, restoredSave: returned.save });
    const before = JSON.stringify(dormant.getState());
    const blocked = dormant.dispatch(intent(
      custodyLedgerObservationControls.openLocalComparison.label,
      "pointer",
      `rp002-complete-return-${selectedId}-comparison`,
    ));
    assert.equal(blocked.status, "rejected");
    assert.equal(blocked.reason, "local_comparison_dormant");
    assert.equal(JSON.stringify(blocked.state), before);

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
  assert.match(arrival, /SC-03-10-detail-pending/);
  assert.match(arrival, /SC-03-20-detail-pending/);
  assert.doesNotMatch(arrival, /SC-03-00-overview-pending|REGISTERED CONTINUITY HOOK|city-threshold-overview-master/);
  assert.doesNotMatch(styles, /\.civic-record-art-status/);
  assert.match(arrival, /custodyLedgerRouteActions\.continueProtected/);
  assert.match(arrival, /CUSTODY_LEDGER_NEAR_DETAIL_ACTION/);
  assert.match(normalRoute, /createCustodyLedgerFirstNearDispatchOrchestrator/);
  assert.match(normalRoute, /createCustodyLedgerSecondNearDispatchOrchestrator/);
  assert.match(normalRoute, /createCustodyLedgerThirdNearCompletionOrchestrator/);
  assert.match(normalRoute, /createCustodyLedgerHotspotDispatcher/);
  assert.match(normalRoute, /custodyLedgerHotspotRegistry/);
  assert.match(arrival, /data-observation-count/);
  assert.match(actionAccessibility, /RECORDED \/\/ REPLAY ADDS NO EVIDENCE/);
  assert.match(actionAccessibility, /AVAILABLE/);
  assert.match(actionAccessibility, /INERT \/\/ ZERO CREDIT \/\/ NOT YET ACTIVE/);
  assert.match(arrival, /aria-label=\{accessibility\.accessibleName\}/);
  assert.match(arrival, /\{accessibility\.stateText\}/);
  assert.match(arrival, /aria-disabled=\{isInert \|\| undefined\}/);
  assert.match(arrival, /disabled=\{isInert\}/);
  assert.match(arrival, /onClick=\{isInert \? undefined/);
  assert.doesNotMatch(arrival, /DORMANT|isDormant/);
  assert.match(arrival, /Recorded Scene statement/);
  assert.match(arrival, /Separate route return/);
  assert.match(app, /advanceCustodyLedgerNormalRoute/);
  assert.match(app, /custodyLedgerRouteView/);
  assert.match(app, /"recorded", "replayed", "returned_to_evidence"/);
  assert.match(app, /"sc03_near_second"/);
  assert.match(app, /"sc03_near_complete"/);
  assert.match(app, /"sc03_far_blank"/);
  assert.match(app, /"sc03_far_first"/);
  assert.match(app, /"sc03_far_complete"/);
  assert.doesNotMatch(arrival, /RP-003|learning task/i);
  assert.doesNotMatch(arrival, /INSPECT FIXED TRACE|INSPECT LATER STEWARDSHIP|INSPECT OUTLINED GAP/);
  assert.match(styles, /\.civic-record-arrival[\s\S]*min-height:\s*44px/);
  assert.match(styles, /\.civic-route-return-actions/);
  assert.match(styles, /\.canonical-game-frame\[data-canonical-layout="narrow"\] \.city-command-panel[\s\S]*grid-template-columns:\s*1fr/);
});
