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
import {
  CUSTODY_LEDGER_FIRST_NEAR_DISPATCH_VERSION,
  createCustodyLedgerFirstNearDispatchOrchestrator,
  custodyLedgerFirstNearDispatchPhases,
  isCustodyLedgerFirstNearRouteReturn,
} from "../src/CustodyLedgerFirstNearDispatch.js";
import {
  custodyLedgerObservationActions,
  custodyLedgerObservationInterfaceCopy,
} from "../src/CustodyLedgerObservation.js";
import {
  custodyLedgerAtomicProgression,
  custodyLedgerObservationStatements,
} from "../src/custodyLedgerExercise.js";

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
const semanticByObservation = Object.fromEntries(
  custodyLedgerHotspotRegistry.map((entry) => [entry.observationId, entry.semanticHotspotId]),
);
const nearIds = ["fixed_trace", "later_stewardship", "outlined_gap"];
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
    eventToken: `first-dispatch-route-${++token}`,
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
    eventToken: `first-dispatch-view-${++token}`,
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
    eventToken: `first-dispatch-${++token}`,
    evidenceReadable: true,
    cropSafe: true,
    candidateSemanticIds: [semanticByObservation[observationId]],
    ...overrides,
  };
}

function fresh() {
  const route = activeRoute();
  return {
    route,
    boundary: blankBoundary(route),
  };
}

function assertNoCrossCredit(state) {
  for (const key of [
    "pythonEvidence", "pythonTransferEvidence", "raiEvidence", "raiTransferEvidence",
    "mastery", "comparison", "save", "restore", "route", "successor", "authority",
    "access", "cityResponse", "externalAction", "world", "worldClock", "cameraClock",
    "cropClock", "effectClock", "civicComparisonSaved", "nextSurveyDirectionMarked",
    "rp002Checkpoint",
  ]) assert.equal(Object.hasOwn(state, key), false, key);
  assert.equal(state.scoringEnabled, false);
  assert.equal(state.learningEvidenceEnabled, false);
  assert.equal(state.reviewEnabled, false);
  assert.equal(state.saveEnabled, false);
  assert.equal(state.restoreEnabled, false);
  assert.equal(state.campaignCommitEnabled, false);
  assert.equal(state.cityStateDelta, null);
  assert.equal(state.identityMaterialClosed, true);
}

test("exact RO-20 boundary presents one blank System group and three equal near controls", () => {
  const { route, boundary } = fresh();
  const orchestrator = createCustodyLedgerFirstNearDispatchOrchestrator({ routeObservationState: boundary, routeState: route });
  const state = orchestrator.getState();
  assert.equal(state.version, CUSTODY_LEDGER_FIRST_NEAR_DISPATCH_VERSION);
  assert.equal(state.phase, custodyLedgerFirstNearDispatchPhases.verifiedBlank);
  assert.equal(state.interface.primary.owner, "SYSTEM // EXPEDITION SESSION");
  assert.deepEqual(state.interface.actionIds, nearIds);
  assert.deepEqual(state.observationState.finalizedObservationIds, []);
  assert.deepEqual(state.activationKinds, custodyLedgerRouteActivationKinds);
  assert.equal(state.controls.length, 3);
  for (const control of state.controls) {
    assert.equal(control.status, "available");
    assert.equal(control.label, custodyLedgerObservationActions[control.observationId]);
    assert.ok(control.minWidthCssPx >= 44);
    assert.ok(control.minHeightCssPx >= 44);
  }
  assert.equal(orchestrator.getSeparateRouteControl().action, custodyLedgerRouteActions.returnAccepted);
  assert.equal(orchestrator.getSeparateRouteControl().owner, custodyLedgerRouteOwners.pilot);
  assertNoCrossCredit(state);
});

test("all three first choices and seven modalities produce the sole exact ID, Scene statement, and 1-of-3 status", () => {
  for (const observationId of nearIds) {
    for (const activationKind of custodyLedgerRouteActivationKinds) {
      const { route, boundary } = fresh();
      const orchestrator = createCustodyLedgerFirstNearDispatchOrchestrator({ routeObservationState: boundary, routeState: route });
      const result = orchestrator.dispatch(observationIntent(observationId, activationKind));
      assert.equal(result.status, "recorded", `${observationId}/${activationKind}`);
      assert.equal(result.observationId, observationId);
      assert.equal(result.state.phase, custodyLedgerFirstNearDispatchPhases.acknowledgement);
      assert.deepEqual(result.state.observationState.finalizedObservationIds, [observationId]);
      assert.deepEqual(result.state.interface.primary, custodyLedgerObservationStatements[observationId]);
      assert.deepEqual(result.state.interface.status, {
        owner: "SYSTEM // EXPEDITION STATE",
        text: custodyLedgerObservationInterfaceCopy.partialNear(1),
      });
      assert.deepEqual(result.state.interface.control, { label: "RETURN TO EVIDENCE", kind: "return" });
      assert.deepEqual(result.state.interface.actionIds, []);
      assert.deepEqual(result.state.controls, []);
      assert.equal(result.state.focusIntent.target, "heading");
      assertNoCrossCredit(result.state);
    }
  }
});

test("zero-credit return restores one-ID evidence heading-first with two unrecorded peer actions", () => {
  const { route, boundary } = fresh();
  const orchestrator = createCustodyLedgerFirstNearDispatchOrchestrator({ routeObservationState: boundary, routeState: route });
  orchestrator.dispatch(observationIntent("later_stewardship"));
  const result = orchestrator.returnToEvidence();
  assert.equal(result.status, "returned_to_evidence");
  assert.equal(result.state.phase, custodyLedgerFirstNearDispatchPhases.oneIdEvidence);
  assert.deepEqual(result.state.observationState.finalizedObservationIds, ["later_stewardship"]);
  assert.equal(result.state.focusIntent.target, "heading");
  assert.equal(result.state.focusIntent.then, "observation:fixed_trace");
  assert.deepEqual(result.state.interface.actionIds, nearIds);
  assert.equal(result.state.controls.filter((control) => control.status === "replay").length, 1);
  assert.equal(result.state.controls.filter((control) => control.status === "available").length, 2);
  assert.equal(orchestrator.getSeparateRouteControl().action, custodyLedgerRouteActions.returnAccepted);
  assertNoCrossCredit(result.state);
});

test("one-hit ingress suppresses combined delivery without replay or a second ID", () => {
  const { route, boundary } = fresh();
  const orchestrator = createCustodyLedgerFirstNearDispatchOrchestrator({ routeObservationState: boundary, routeState: route });
  const request = observationIntent("outlined_gap", "pointer");
  const first = orchestrator.dispatch(request);
  const bytes = JSON.stringify(first.state);
  const duplicate = orchestrator.dispatch({ ...request, activationKind: "keyboard_enter" });
  assert.equal(duplicate.status, "duplicate_suppressed");
  assert.equal(JSON.stringify(orchestrator.getState()), bytes);
  assert.deepEqual(orchestrator.getState().observationState.finalizedObservationIds, ["outlined_gap"]);
});

test("unsafe, ambiguous, unavailable, wrong-owner, wrong-mode, route, save, and contaminated inputs fail closed at zero IDs", () => {
  const variants = [
    { stale: true }, { forged: true }, { multiHit: true }, { tourDerived: true }, { partial: true },
    { implicit: true }, { available: false }, { owner: "SYSTEM // EXPEDITION STATE" },
    { mode: "demo_tour" }, { boardId: "SC-03-20" }, { registryVersion: "stale" },
    { evidenceReadable: false }, { cropSafe: false }, { routeIntent: true }, { saveIntent: true },
    { action: custodyLedgerRouteActions.returnAccepted }, { actions: ["fixed_trace", "outlined_gap"] },
    { candidateSemanticIds: [] },
    { candidateSemanticIds: [semanticByObservation.fixed_trace, semanticByObservation.outlined_gap] },
    { occludedSemanticIds: [semanticByObservation.fixed_trace] },
    { movingSemanticIds: [semanticByObservation.fixed_trace] },
    { privateNotes: "private-771" },
  ];
  for (const override of variants) {
    const { route, boundary } = fresh();
    const orchestrator = createCustodyLedgerFirstNearDispatchOrchestrator({ routeObservationState: boundary, routeState: route });
    const result = orchestrator.dispatch(observationIntent("fixed_trace", "pointer", override));
    assert.equal(result.status, "unavailable", JSON.stringify(override));
    assert.equal(result.state.phase, custodyLedgerFirstNearDispatchPhases.unavailable);
    assert.deepEqual(result.state.observationState.finalizedObservationIds, []);
    assert.equal(result.state.interface.status, null);
    assert.equal(result.state.interface.control, null);
    assert.doesNotMatch(JSON.stringify(result.state), /private-771/);
    assertNoCrossCredit(result.state);
  }
});

test("invalid first use consumes a valid token and corrected duplicate remains suppressed", () => {
  const { route, boundary } = fresh();
  const orchestrator = createCustodyLedgerFirstNearDispatchOrchestrator({ routeObservationState: boundary, routeState: route });
  const invalid = observationIntent("fixed_trace", "screen_reader", { stale: true });
  assert.equal(orchestrator.dispatch(invalid).status, "unavailable");
  const duplicate = orchestrator.dispatch({ ...invalid, stale: false });
  assert.equal(duplicate.status, "duplicate_suppressed");
  assert.deepEqual(orchestrator.getState().observationState.finalizedObservationIds, []);
});

test("unverified, nonblank, partial, and contaminated route boundaries cannot dispatch", () => {
  const { route, boundary } = fresh();
  const invalid = [
    null,
    { ...boundary, phase: "RO-10" },
    { ...boundary, viewRegistrationStatus: "pending" },
    { ...boundary, routeBoard: "SC-03-20" },
    { ...boundary, privateNotes: "private-991" },
  ];
  for (const routeObservationState of invalid) {
    const orchestrator = createCustodyLedgerFirstNearDispatchOrchestrator({ routeObservationState, routeState: route });
    assert.equal(orchestrator.getState().phase, custodyLedgerFirstNearDispatchPhases.unavailable);
    assert.equal(orchestrator.dispatch(observationIntent("fixed_trace")).status, "unavailable");
    assert.equal(orchestrator.getState().observationState, null);
    assert.doesNotMatch(JSON.stringify(orchestrator.getState()), /private-991/);
  }
});

test("snapshots resume exact zero-ID and one-ID fixtures without replaying acknowledgement", () => {
  const { route, boundary } = fresh();
  const zero = createCustodyLedgerFirstNearDispatchOrchestrator({ routeObservationState: boundary, routeState: route });
  const zeroResume = createCustodyLedgerFirstNearDispatchOrchestrator({
    routeObservationState: boundary,
    routeState: route,
    restoredState: { ...zero.snapshot().state, eventTokens: ["discard"], privateNotes: "private-663" },
  });
  assert.equal(zeroResume.getState().phase, custodyLedgerFirstNearDispatchPhases.verifiedBlank);
  assert.deepEqual(zeroResume.getState().observationState.finalizedObservationIds, []);

  zero.dispatch(observationIntent("outlined_gap"));
  const oneSnapshot = zero.snapshot();
  assert.equal(oneSnapshot.state.phase, custodyLedgerFirstNearDispatchPhases.oneIdEvidence);
  assert.equal(oneSnapshot.state.interface.status, null);
  const oneResume = createCustodyLedgerFirstNearDispatchOrchestrator({
    routeObservationState: boundary,
    routeState: route,
    restoredState: { ...oneSnapshot.state, focusHistory: ["discard"], privateNotes: "private-442" },
  });
  assert.equal(oneResume.getState().phase, custodyLedgerFirstNearDispatchPhases.oneIdEvidence);
  assert.deepEqual(oneResume.getState().observationState.finalizedObservationIds, ["outlined_gap"]);
  assert.equal(oneResume.getState().interface.status, null);
  assert.doesNotMatch(JSON.stringify(oneResume.snapshot()), /eventTokens|focusHistory|private-663|private-442/);
});

test("Tour is view-only and exposes no dispatcher, route control, ID, progress, or save surface", () => {
  const { route, boundary } = fresh();
  const orchestrator = createCustodyLedgerFirstNearDispatchOrchestrator({
    routeObservationState: boundary,
    routeState: route,
    mode: "demo_tour",
  });
  assert.equal(orchestrator.getState().phase, custodyLedgerFirstNearDispatchPhases.tour);
  assert.equal(orchestrator.getState().ownerMessage.owner, "SYSTEM // DEMO TOUR");
  assert.equal(orchestrator.getState().observationState, null);
  assert.deepEqual(orchestrator.getState().controls, []);
  assert.equal(orchestrator.getSeparateRouteControl(), null);
  assert.equal(orchestrator.dispatch(observationIntent("fixed_trace")).status, "tour_view_only");
  assertNoCrossCredit(orchestrator.getState());
});

test("route return remains separately recognizable and never enters observation dispatch", () => {
  assert.equal(isCustodyLedgerFirstNearRouteReturn({
    action: custodyLedgerRouteActions.returnAccepted,
    owner: custodyLedgerRouteOwners.pilot,
  }), true);
  assert.equal(isCustodyLedgerFirstNearRouteReturn({
    action: custodyLedgerRouteActions.returnAccepted,
    owner: "SYSTEM // EXPEDITION STATE",
  }), false);
  const { route, boundary } = fresh();
  const orchestrator = createCustodyLedgerFirstNearDispatchOrchestrator({ routeObservationState: boundary, routeState: route });
  const result = orchestrator.dispatch(observationIntent("fixed_trace", "screen_reader", {
    action: custodyLedgerRouteActions.returnAccepted,
  }));
  assert.equal(result.status, "unavailable");
  assert.deepEqual(result.state.observationState.finalizedObservationIds, []);
});

test("accepted campaign, Tour, atomic save, continuation, and world clocks remain byte-stable", () => {
  const campaignBytes = JSON.stringify(acceptedCampaign);
  const tripletBytes = JSON.stringify(custodyLedgerAtomicProgression);
  const { route, boundary } = fresh();
  const routeBytes = JSON.stringify(route);
  const boundaryBytes = JSON.stringify(boundary);
  const orchestrator = createCustodyLedgerFirstNearDispatchOrchestrator({ routeObservationState: boundary, routeState: route });
  orchestrator.dispatch(observationIntent("fixed_trace"));
  orchestrator.returnToEvidence();
  assert.equal(JSON.stringify(acceptedCampaign), campaignBytes);
  assert.equal(JSON.stringify(custodyLedgerAtomicProgression), tripletBytes);
  assert.equal(JSON.stringify(route), routeBytes);
  assert.equal(JSON.stringify(boundary), boundaryBytes);
  assert.equal(orchestrator.getState().continuation, acceptedCampaign.continuation);
  assertNoCrossCredit(orchestrator.getState());
});

test("first-near orchestration stays pure, storage-free, UI-free, non-routable, and absent from App/main", async () => {
  const source = await readFile(new URL("../src/CustodyLedgerFirstNearDispatch.js", import.meta.url), "utf8");
  const app = await readFile(new URL("../src/App.jsx", import.meta.url), "utf8");
  const main = await readFile(new URL("../src/main.jsx", import.meta.url), "utf8");
  assert.doesNotMatch(source, /React|jsx|localStorage|sessionStorage|indexedDB|fetch\(|XMLHttpRequest|WebSocket|document\.|window\.|navigator\./);
  assert.doesNotMatch(source, /cityResponse\s*:|successor\s*:|authority\s*:|access\s*:|externalAction\s*:/);
  assert.doesNotMatch(app, /CustodyLedgerFirstNearDispatch|createCustodyLedgerFirstNearDispatchOrchestrator/);
  assert.doesNotMatch(main, /CustodyLedgerFirstNearDispatch|createCustodyLedgerFirstNearDispatchOrchestrator/);
});
