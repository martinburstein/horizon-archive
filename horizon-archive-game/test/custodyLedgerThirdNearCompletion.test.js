import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import {
  acknowledgeCustodyLedgerRouteState,
  advanceCustodyLedgerRouteSystem,
  createCustodyLedgerRouteState,
  custodyLedgerRouteActions,
  custodyLedgerRouteActivationKinds,
  custodyLedgerRouteOwners,
  requestCustodyLedgerRouteTransition,
} from "../src/CustodyLedgerRouteState.js";
import {
  CUSTODY_LEDGER_NEAR_DETAIL_ACTION,
  CUSTODY_LEDGER_ROUTE_OBSERVATION_VERSION,
  createCustodyLedgerRouteObservationDispatcher,
  custodyLedgerRouteObservationOwners,
} from "../src/CustodyLedgerRouteObservationState.js";
import {
  CUSTODY_LEDGER_HOTSPOT_REGISTRY_VERSION,
  custodyLedgerHotspotRegistry,
} from "../src/CustodyLedgerHotspots.js";
import { createCustodyLedgerFirstNearDispatchOrchestrator } from "../src/CustodyLedgerFirstNearDispatch.js";
import { createCustodyLedgerSecondNearDispatchOrchestrator } from "../src/CustodyLedgerSecondNearDispatch.js";
import {
  CUSTODY_LEDGER_THIRD_NEAR_COMPLETION_VERSION,
  createCustodyLedgerThirdNearCompletionOrchestrator,
  custodyLedgerThirdNearCompletionPhases,
  isCustodyLedgerThirdNearRouteReturn,
} from "../src/CustodyLedgerThirdNearCompletion.js";
import {
  custodyLedgerObservationControls,
  custodyLedgerObservationInterfaceCopy,
} from "../src/CustodyLedgerObservation.js";
import { custodyLedgerObservationStatements } from "../src/custodyLedgerExercise.js";

const predecessor = Object.freeze({
  verificationStatus: "verified",
  cityThresholdAnchorRecorded: true,
  civicDistrictRouteAvailable: true,
});
const acceptedCampaign = Object.freeze({
  packetId: "RP-001",
  continuation: "continuation",
  world: Object.freeze({ clock: 17, cameraClock: 8, cropClock: 4, effectClock: 2 }),
  tour: Object.freeze({ noCredit: true }),
  successor: null,
  authority: null,
  access: null,
  cityResponse: null,
  externalAction: null,
});
const nearEntries = custodyLedgerHotspotRegistry.filter((entry) => entry.stage === "near_observations");
const nearIds = nearEntries.map((entry) => entry.observationId);
const semanticByObservation = Object.fromEntries(
  custodyLedgerHotspotRegistry.map((entry) => [entry.observationId, entry.semanticHotspotId]),
);
const nearOrders = nearIds.flatMap((firstId) => (
  nearIds.filter((id) => id !== firstId).map((secondId) => [
    firstId,
    secondId,
    nearIds.find((id) => id !== firstId && id !== secondId),
  ])
));
let token = 0;

function activeRoute() {
  let state = createCustodyLedgerRouteState({ predecessor, continuation: acceptedCampaign.continuation });
  state = requestCustodyLedgerRouteTransition(state, {
    packetId: "RP-002",
    version: "rp002.route.v1",
    mode: "campaign",
    action: custodyLedgerRouteActions.enter,
    owner: custodyLedgerRouteOwners.pilot,
    activationKind: "screen_reader",
    eventToken: `third-completion-route-${++token}`,
  });
  state = advanceCustodyLedgerRouteSystem(state, { predecessor });
  return acknowledgeCustodyLedgerRouteState(state, custodyLedgerRouteActions.continueProtected);
}

function blankBoundary(route) {
  const dispatcher = createCustodyLedgerRouteObservationDispatcher(route);
  dispatcher.dispatch({
    packetId: "RP-002",
    version: CUSTODY_LEDGER_ROUTE_OBSERVATION_VERSION,
    mode: "protected",
    action: CUSTODY_LEDGER_NEAR_DETAIL_ACTION,
    owner: custodyLedgerRouteObservationOwners.pilot,
    activationKind: "screen_reader",
    eventToken: `third-completion-view-${++token}`,
  });
  return dispatcher.registerView({
    status: "registered",
    sourceBoard: "SC-03-00",
    targetBoard: "SC-03-10",
    worldChanged: false,
    replayRequested: false,
  });
}

function observationIntent(observationId, activationKind = "screen_reader", overrides = {}) {
  return {
    packetId: "RP-002",
    mode: "campaign",
    owner: custodyLedgerRouteOwners.pilot,
    registryVersion: CUSTODY_LEDGER_HOTSPOT_REGISTRY_VERSION,
    boardId: "SC-03-10",
    semanticHotspotId: semanticByObservation[observationId],
    activationKind,
    eventToken: `third-completion-${++token}`,
    evidenceReadable: true,
    cropSafe: true,
    candidateSemanticIds: [semanticByObservation[observationId]],
    ...overrides,
  };
}

function fresh(order = nearOrders[0]) {
  const [firstId, secondId, thirdId] = order;
  const route = activeRoute();
  const boundary = blankBoundary(route);
  const first = createCustodyLedgerFirstNearDispatchOrchestrator({
    routeObservationState: boundary,
    routeState: route,
  });
  assert.equal(first.dispatch(observationIntent(firstId)).status, "recorded");
  const firstNearState = first.returnToEvidence().state;
  const second = createCustodyLedgerSecondNearDispatchOrchestrator({
    routeObservationState: boundary,
    routeState: route,
    firstNearState,
  });
  assert.equal(second.dispatch(observationIntent(secondId)).status, "recorded");
  const secondNearState = second.returnToEvidence().state;
  return { route, boundary, firstNearState, secondNearState, firstId, secondId, thirdId };
}

function createThird(fixture, options = {}) {
  return createCustodyLedgerThirdNearCompletionOrchestrator({
    routeObservationState: fixture.boundary,
    routeState: fixture.route,
    firstNearState: fixture.firstNearState,
    secondNearState: fixture.secondNearState,
    ...options,
  });
}

function assertNoCrossCredit(state) {
  assert.equal(state.scoringEnabled, false);
  assert.equal(state.learningEvidenceEnabled, false);
  assert.equal(state.reviewEnabled, false);
  assert.equal(state.saveEnabled, false);
  assert.equal(state.restoreEnabled, false);
  assert.equal(state.campaignCommitEnabled, false);
  assert.equal(state.comparisonActivated, false);
  assert.equal(state.farEvidenceEnabled, false);
  assert.equal(state.cityStateDelta, null);
  assert.equal(state.identityMaterialClosed, true);
  assert.equal(state.worldStateChanged, false);
  assert.equal(state.cityActionEnabled, false);
  assert.equal(state.accessEnabled, false);
  assert.equal(state.externalActionEnabled, false);
  assert.equal(state.successorEnabled, false);
  assert.equal(state.liveAuthorityEnabled, false);
  assert.equal(state.offlineOnly, true);
  assert.equal(state.examCreditGranted, false);
  assert.equal(state.examGuarantee, false);
}

test("exact second-dispatch return presents TD-00 with two Recorded actions and one sole Available action", () => {
  const fixture = fresh(["later_stewardship", "fixed_trace", "outlined_gap"]);
  const orchestrator = createThird(fixture);
  const state = orchestrator.getState();
  assert.equal(state.version, CUSTODY_LEDGER_THIRD_NEAR_COMPLETION_VERSION);
  assert.equal(state.phase, custodyLedgerThirdNearCompletionPhases.verifiedTwoId);
  assert.equal(state.boardId, "SC-03-10");
  assert.equal(state.stage, "near_observations");
  assert.equal(state.controls.filter((control) => control.status === "replay").length, 2);
  const available = state.controls.filter((control) => control.status === "available");
  assert.equal(available.length, 1);
  assert.equal(available[0].observationId, fixture.thirdId);
  assert.equal(state.focusIntent.target, "heading");
  assert.equal(state.focusIntent.then, `observation:${fixture.thirdId}`);
  assert.ok(state.controls.every((control) => control.minWidthCssPx >= 44 && control.minHeightCssPx >= 44));
  assert.deepEqual(state.activationKinds, custodyLedgerRouteActivationKinds);
  assert.equal(orchestrator.getCompareScaleControl(), null);
  assertNoCrossCredit(state);
});

test("all six near orders and seven modalities retain both prior records and add only the sole matching third fact", () => {
  for (const order of nearOrders) {
    for (const activationKind of custodyLedgerRouteActivationKinds) {
      const fixture = fresh(order);
      const beforeRecords = fixture.secondNearState.observationState.observationEvidence;
      const orchestrator = createThird(fixture);
      const result = orchestrator.dispatch(observationIntent(fixture.thirdId, activationKind));
      assert.equal(result.status, "recorded", `${order.join("->")}/${activationKind}`);
      assert.equal(result.state.phase, custodyLedgerThirdNearCompletionPhases.thirdAcknowledgement);
      assert.equal(result.observationId, fixture.thirdId);
      assert.equal(result.state.boardId, "SC-03-10");
      assert.equal(result.state.stage, "near_observations");
      assert.equal(result.state.observationState.finalizedObservationIds.length, 3);
      assert.ok(result.state.observationState.finalizedObservationIds.every((id) => nearIds.includes(id)));
      for (const prior of beforeRecords) {
        assert.deepEqual(
          result.state.observationState.observationEvidence.find((record) => record.observationId === prior.observationId),
          prior,
        );
      }
      assert.deepEqual(result.state.interface.primary, custodyLedgerObservationStatements[fixture.thirdId]);
      assert.deepEqual(result.state.interface.status, {
        owner: "SYSTEM // EXPEDITION STATE",
        text: custodyLedgerObservationInterfaceCopy.nearComplete,
      });
      assert.deepEqual(result.state.interface.control, custodyLedgerObservationControls.compareScale);
      assert.deepEqual(result.state.interface.actionIds, []);
      assert.deepEqual(result.state.controls, []);
      assert.deepEqual(orchestrator.getCompareScaleControl(), custodyLedgerObservationControls.compareScale);
      assertNoCrossCredit(result.state);
    }
  }
});

test("completion snapshot exposes only dormant zero-credit COMPARE SCALE and no SC-03-20 or far action", () => {
  const fixture = fresh(["outlined_gap", "fixed_trace", "later_stewardship"]);
  const orchestrator = createThird(fixture);
  orchestrator.dispatch(observationIntent(fixture.thirdId));
  const snapshot = orchestrator.snapshot().state;
  assert.equal(snapshot.phase, custodyLedgerThirdNearCompletionPhases.thirdAcknowledgement);
  assert.equal(snapshot.boardId, "SC-03-10");
  assert.equal(snapshot.stage, "near_observations");
  assert.equal(snapshot.activeGroup, "near_completion_ready");
  assert.equal(snapshot.observationState.activeObservation, undefined);
  assert.deepEqual(snapshot.interface.primary, {
    owner: "SYSTEM // EXPEDITION STATE",
    text: custodyLedgerObservationInterfaceCopy.nearComplete,
  });
  assert.equal(snapshot.interface.status, null);
  assert.deepEqual(snapshot.interface.actionIds, []);
  assert.deepEqual(snapshot.interface.control, custodyLedgerObservationControls.compareScale);
  assert.equal(snapshot.focusIntent.target, "heading");
  assert.equal(snapshot.nextFocusIntent.target, "compare_scale");
  assert.deepEqual(snapshot.controls, []);
  assert.ok(snapshot.observationState.finalizedObservationIds.every((id) => nearIds.includes(id)));
  assertNoCrossCredit(snapshot);
});

test("both TD-R Recorded replays are idempotent and return to the identical two-ID evidence group", () => {
  const fixture = fresh(["fixed_trace", "outlined_gap", "later_stewardship"]);
  for (const replayId of [fixture.firstId, fixture.secondId]) {
    const orchestrator = createThird(fixture);
    const replay = orchestrator.dispatch(observationIntent(replayId));
    assert.equal(replay.status, "replayed");
    assert.equal(replay.state.phase, custodyLedgerThirdNearCompletionPhases.recordedReplay);
    assert.deepEqual(replay.state.interface.primary, custodyLedgerObservationStatements[replayId]);
    assert.equal(replay.state.interface.status.text, custodyLedgerObservationInterfaceCopy.revisit);
    assert.equal(replay.state.observationState.finalizedObservationIds.length, 2);
    const returned = orchestrator.returnFromReplay();
    assert.equal(returned.status, "returned_to_two_id_evidence");
    assert.deepEqual(returned.state.observationState, fixture.secondNearState.observationState);
    assertNoCrossCredit(returned.state);
  }
});

test("one-hit token suppression cannot add, replay, redirect, activate comparison, or erase evidence", () => {
  const fixture = fresh();
  const orchestrator = createThird(fixture);
  const intent = observationIntent(fixture.thirdId);
  const first = orchestrator.dispatch(intent);
  const duplicate = orchestrator.dispatch({ ...intent, comparisonIntent: true });
  assert.equal(first.status, "recorded");
  assert.equal(duplicate.status, "duplicate_suppressed");
  assert.deepEqual(duplicate.state, first.state);
  assert.equal(duplicate.state.observationState.finalizedObservationIds.length, 3);
  assertNoCrossCredit(duplicate.state);
});

test("unsafe, ambiguous, stale, forged, combined, Tour, partial, and contaminated input fail closed retaining both facts", () => {
  const unsafeOverrides = [
    { owner: "SYSTEM // EXPEDITION STATE" },
    { mode: "demo_tour", tourDerived: true },
    { boardId: "SC-03-20" },
    { registryVersion: "stale" },
    { stale: true },
    { forged: true },
    { multiHit: true },
    { overlapping: true },
    { partial: true },
    { evidenceReadable: false },
    { cropSafe: false },
    { activationKind: "pointer", semanticHotspotId: undefined, candidateSemanticIds: [] },
    { activationKind: "pointer", semanticHotspotId: undefined, candidateSemanticIds: [semanticByObservation.fixed_trace, semanticByObservation.outlined_gap] },
    { activationKind: "pointer", semanticHotspotId: undefined, occludedSemanticIds: [semanticByObservation.later_stewardship] },
    { activationKind: "pointer", semanticHotspotId: undefined, movingSemanticIds: [semanticByObservation.later_stewardship] },
    { actions: ["combined"] },
    { privateNotes: "must clear" },
    { responses: { raw: true } },
    { routeIntent: true },
    { saveIntent: true },
    { comparisonIntent: true },
    { action: custodyLedgerObservationControls.compareScale.label },
  ];
  for (const overrides of unsafeOverrides) {
    const fixture = fresh(["fixed_trace", "outlined_gap", "later_stewardship"]);
    const orchestrator = createThird(fixture);
    const result = orchestrator.dispatch(observationIntent(fixture.thirdId, "screen_reader", overrides));
    assert.equal(result.status, "unavailable", JSON.stringify(overrides));
    assert.equal(result.state.phase, custodyLedgerThirdNearCompletionPhases.unavailable);
    assert.deepEqual(result.state.observationState, fixture.secondNearState.observationState);
    assert.equal(result.state.compareScaleControl, null);
    const recovered = orchestrator.recover();
    assert.equal(recovered.phase, custodyLedgerThirdNearCompletionPhases.verifiedTwoId);
    assert.deepEqual(recovered.observationState, fixture.secondNearState.observationState);
    assertNoCrossCredit(recovered);
  }
});

test("malformed or contaminated two-ID entry is unavailable and cannot manufacture completion", () => {
  const fixture = fresh();
  for (const forged of [
    { ...fixture.secondNearState, privateNotes: "not allowed" },
    { ...fixture.secondNearState, phase: "SD-20", observationState: { ...fixture.secondNearState.observationState, finalizedObservationIds: nearIds } },
  ]) {
    const orchestrator = createCustodyLedgerThirdNearCompletionOrchestrator({
      routeObservationState: fixture.boundary,
      routeState: fixture.route,
      firstNearState: fixture.firstNearState,
      secondNearState: forged,
    });
    assert.equal(orchestrator.getState().phase, custodyLedgerThirdNearCompletionPhases.unavailable);
    assert.equal(orchestrator.dispatch(observationIntent(fixture.thirdId)).status, "unavailable");
  }
});

test("exact two-ID and three-near zero-far fixtures resume without replay or view replacement", () => {
  const fixture = fresh(["later_stewardship", "outlined_gap", "fixed_trace"]);
  const source = createThird(fixture);
  const twoSnapshot = source.snapshot();
  const resumedTwo = createThird(fixture, { restoredState: twoSnapshot.state });
  assert.deepEqual(resumedTwo.getState(), twoSnapshot.state);
  assert.equal(resumedTwo.getState().observationState.activeObservation, undefined);

  source.dispatch(observationIntent(fixture.thirdId));
  const threeSnapshot = source.snapshot();
  const resumedThree = createThird(fixture, { restoredState: threeSnapshot.state });
  assert.deepEqual(resumedThree.getState(), threeSnapshot.state);
  assert.equal(resumedThree.getState().boardId, "SC-03-10");
  assert.equal(resumedThree.getState().observationState.activeObservation, undefined);
  assert.deepEqual(resumedThree.getState().interface.actionIds, []);
  assert.deepEqual(resumedThree.getCompareScaleControl(), custodyLedgerObservationControls.compareScale);
});

test("forged three-near resume that changes a retained record sanitizes back to TD-00", () => {
  const fixture = fresh(["fixed_trace", "later_stewardship", "outlined_gap"]);
  const source = createThird(fixture);
  source.dispatch(observationIntent(fixture.thirdId));
  const legitimate = source.snapshot().state;
  const forgedObservation = {
    ...legitimate.observationState,
    observationEvidence: legitimate.observationState.observationEvidence.map((record) => (
      record.observationId === fixture.firstId ? { ...record, provenance: "forged" } : record
    )),
  };
  const resumed = createThird(fixture, {
    restoredState: { ...legitimate, observationState: forgedObservation },
  });
  assert.equal(resumed.getState().phase, custodyLedgerThirdNearCompletionPhases.verifiedTwoId);
  assert.deepEqual(resumed.getState().observationState, fixture.secondNearState.observationState);
  assert.equal(resumed.getCompareScaleControl(), null);
});

test("Tour remains view-only with no campaign dispatcher, IDs, count, comparison, route action, or credit", () => {
  const orchestrator = createCustodyLedgerThirdNearCompletionOrchestrator({ mode: "demo_tour" });
  const initial = orchestrator.getState();
  assert.equal(initial.phase, custodyLedgerThirdNearCompletionPhases.tour);
  assert.equal(initial.interface, null);
  assert.equal(initial.observationState, null);
  assert.equal(initial.separateRouteControl, null);
  assert.equal(orchestrator.getCompareScaleControl(), null);
  assert.equal(orchestrator.dispatch(observationIntent("fixed_trace")).status, "tour_view_only");
  assertNoCrossCredit(initial);
});

test("route return stays separate and COMPARE SCALE cannot enter dispatch, SC-03-20, or far evidence", () => {
  const fixture = fresh();
  const orchestrator = createThird(fixture);
  const routeControl = orchestrator.getSeparateRouteControl();
  assert.ok(isCustodyLedgerThirdNearRouteReturn(routeControl));
  assert.equal(routeControl.owner, custodyLedgerRouteOwners.pilot);
  const routeAttempt = orchestrator.dispatch({
    ...observationIntent(fixture.thirdId),
    action: routeControl.action,
    routeIntent: true,
  });
  assert.equal(routeAttempt.status, "unavailable");
  orchestrator.recover();
  const comparisonAttempt = orchestrator.dispatch({
    ...observationIntent(fixture.thirdId),
    action: custodyLedgerObservationControls.compareScale.label,
    comparisonIntent: true,
  });
  assert.equal(comparisonAttempt.status, "unavailable");
  assert.deepEqual(comparisonAttempt.state.observationState, fixture.secondNearState.observationState);
  assert.equal(comparisonAttempt.state.farEvidenceEnabled, false);
});

test("accepted campaign and Tour stay byte-stable with world clocks and external boundaries unchanged", () => {
  const campaignBefore = JSON.stringify(acceptedCampaign);
  const tourBefore = JSON.stringify(acceptedCampaign.tour);
  const fixture = fresh();
  const orchestrator = createThird(fixture);
  orchestrator.dispatch(observationIntent(fixture.thirdId));
  orchestrator.snapshot();
  assert.equal(JSON.stringify(acceptedCampaign), campaignBefore);
  assert.equal(JSON.stringify(acceptedCampaign.tour), tourBefore);
  assert.equal(orchestrator.getState().continuation, acceptedCampaign.continuation);
  assertNoCrossCredit(orchestrator.getState());
});

test("third-near completion is isolated from App/main, storage, routes, UI, art, and accepted bundles", async () => {
  const [app, main, packageJson, secondModule, thirdModule] = await Promise.all([
    readFile(new URL("../src/App.jsx", import.meta.url), "utf8"),
    readFile(new URL("../src/main.jsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../src/CustodyLedgerSecondNearDispatch.js", import.meta.url), "utf8"),
    readFile(new URL("../src/CustodyLedgerThirdNearCompletion.js", import.meta.url), "utf8"),
  ]);
  for (const source of [app, main, secondModule]) {
    assert.doesNotMatch(source, /CustodyLedgerThirdNearCompletion|createCustodyLedgerThirdNearCompletionOrchestrator/);
  }
  assert.doesNotMatch(thirdModule, /localStorage|sessionStorage|indexedDB|fetch\(|XMLHttpRequest|WebSocket|document\.|window\./i);
  assert.doesNotMatch(packageJson, /CustodyLedgerThirdNearCompletion/);
});
