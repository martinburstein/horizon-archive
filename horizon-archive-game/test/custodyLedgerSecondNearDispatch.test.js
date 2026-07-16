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
  createCustodyLedgerFirstNearDispatchOrchestrator,
} from "../src/CustodyLedgerFirstNearDispatch.js";
import {
  CUSTODY_LEDGER_SECOND_NEAR_DISPATCH_VERSION,
  createCustodyLedgerSecondNearDispatchOrchestrator,
  custodyLedgerSecondNearDispatchPhases,
  isCustodyLedgerSecondNearRouteReturn,
} from "../src/CustodyLedgerSecondNearDispatch.js";
import {
  custodyLedgerObservationInterfaceCopy,
} from "../src/CustodyLedgerObservation.js";
import {
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
const nearIds = custodyLedgerHotspotRegistry
  .filter((entry) => entry.stage === "near_observations")
  .map((entry) => entry.observationId);
const semanticByObservation = Object.fromEntries(
  custodyLedgerHotspotRegistry.map((entry) => [entry.observationId, entry.semanticHotspotId]),
);
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
    eventToken: `second-dispatch-route-${++token}`,
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
    eventToken: `second-dispatch-view-${++token}`,
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
    eventToken: `second-dispatch-${++token}`,
    evidenceReadable: true,
    cropSafe: true,
    candidateSemanticIds: [semanticByObservation[observationId]],
    ...overrides,
  };
}

function fresh(firstId = nearIds[0]) {
  const route = activeRoute();
  const boundary = blankBoundary(route);
  const first = createCustodyLedgerFirstNearDispatchOrchestrator({
    routeObservationState: boundary,
    routeState: route,
  });
  assert.equal(first.dispatch(observationIntent(firstId)).status, "recorded");
  const returned = first.returnToEvidence();
  assert.equal(returned.status, "returned_to_evidence");
  return { route, boundary, firstNearState: returned.state };
}

function assertNoCrossCredit(state) {
  assert.equal(state.scoringEnabled, false);
  assert.equal(state.learningEvidenceEnabled, false);
  assert.equal(state.reviewEnabled, false);
  assert.equal(state.saveEnabled, false);
  assert.equal(state.restoreEnabled, false);
  assert.equal(state.campaignCommitEnabled, false);
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

test("exact first-dispatch return presents SD-00 with one Recorded and two equal Available actions", () => {
  const { route, boundary, firstNearState } = fresh("later_stewardship");
  const orchestrator = createCustodyLedgerSecondNearDispatchOrchestrator({
    routeObservationState: boundary,
    routeState: route,
    firstNearState,
  });
  const state = orchestrator.getState();
  assert.equal(state.version, CUSTODY_LEDGER_SECOND_NEAR_DISPATCH_VERSION);
  assert.equal(state.phase, custodyLedgerSecondNearDispatchPhases.verifiedOneId);
  assert.deepEqual(state.observationState.finalizedObservationIds, ["later_stewardship"]);
  assert.equal(state.controls.filter((control) => control.status === "replay").length, 1);
  assert.equal(state.controls.filter((control) => control.status === "available").length, 2);
  assert.equal(state.focusIntent.target, "heading");
  assert.equal(state.focusIntent.then, "observation:fixed_trace");
  assert.deepEqual(state.activationKinds, custodyLedgerRouteActivationKinds);
  assert.ok(state.controls.every((control) => control.minWidthCssPx >= 44 && control.minHeightCssPx >= 44));
  assertNoCrossCredit(state);
});

test("all six ordered prefixes and seven modalities retain the first record and add only the selected second fact", () => {
  for (const firstId of nearIds) {
    for (const secondId of nearIds.filter((id) => id !== firstId)) {
      for (const activationKind of custodyLedgerRouteActivationKinds) {
        const { route, boundary, firstNearState } = fresh(firstId);
        const beforeRecord = firstNearState.observationState.observationEvidence
          .find((record) => record.observationId === firstId);
        const orchestrator = createCustodyLedgerSecondNearDispatchOrchestrator({
          routeObservationState: boundary,
          routeState: route,
          firstNearState,
        });
        const result = orchestrator.dispatch(observationIntent(secondId, activationKind));
        assert.equal(result.status, "recorded", `${firstId}->${secondId}/${activationKind}`);
        assert.equal(result.state.phase, custodyLedgerSecondNearDispatchPhases.secondAcknowledgement);
        assert.equal(result.observationId, secondId);
        assert.equal(result.state.observationState.finalizedObservationIds.length, 2);
        assert.ok(result.state.observationState.finalizedObservationIds.includes(firstId));
        assert.ok(result.state.observationState.finalizedObservationIds.includes(secondId));
        assert.deepEqual(
          result.state.observationState.observationEvidence.find((record) => record.observationId === firstId),
          beforeRecord,
        );
        assert.deepEqual(result.state.interface.primary, custodyLedgerObservationStatements[secondId]);
        assert.deepEqual(result.state.interface.status, {
          owner: "SYSTEM // EXPEDITION STATE",
          text: custodyLedgerObservationInterfaceCopy.partialNear(2),
        });
        assert.deepEqual(result.state.interface.control, { label: "RETURN TO EVIDENCE", kind: "return" });
        assert.deepEqual(result.state.interface.actionIds, []);
        assert.deepEqual(result.state.controls, []);
        assertNoCrossCredit(result.state);
      }
    }
  }
});

test("zero-credit return from SD-10 restores exactly two Recorded actions and one Available action", () => {
  const { route, boundary, firstNearState } = fresh("outlined_gap");
  const orchestrator = createCustodyLedgerSecondNearDispatchOrchestrator({
    routeObservationState: boundary,
    routeState: route,
    firstNearState,
  });
  orchestrator.dispatch(observationIntent("fixed_trace"));
  const result = orchestrator.returnToEvidence();
  assert.equal(result.status, "returned_to_two_id_evidence");
  assert.equal(result.state.phase, custodyLedgerSecondNearDispatchPhases.verifiedTwoId);
  assert.equal(result.state.controls.filter((control) => control.status === "replay").length, 2);
  assert.equal(result.state.controls.filter((control) => control.status === "available").length, 1);
  assert.equal(result.state.focusIntent.target, "heading");
  assert.equal(result.state.focusIntent.then, "observation:later_stewardship");
  assertNoCrossCredit(result.state);
});

test("SD-R recorded replay is idempotent and returns to the identical one-ID evidence group", () => {
  const { route, boundary, firstNearState } = fresh("fixed_trace");
  const orchestrator = createCustodyLedgerSecondNearDispatchOrchestrator({
    routeObservationState: boundary,
    routeState: route,
    firstNearState,
  });
  const replay = orchestrator.dispatch(observationIntent("fixed_trace"));
  assert.equal(replay.status, "replayed");
  assert.equal(replay.state.phase, custodyLedgerSecondNearDispatchPhases.recordedReplay);
  assert.deepEqual(replay.state.interface.primary, custodyLedgerObservationStatements.fixed_trace);
  assert.equal(replay.state.interface.status.text, custodyLedgerObservationInterfaceCopy.revisit);
  assert.deepEqual(replay.state.observationState.finalizedObservationIds, ["fixed_trace"]);
  const returned = orchestrator.returnToEvidence();
  assert.equal(returned.status, "returned_to_one_id_evidence");
  assert.deepEqual(returned.state.observationState, firstNearState.observationState);
  assertNoCrossCredit(returned.state);
});

test("one-hit token suppression cannot add, replay, redirect, or erase evidence", () => {
  const { route, boundary, firstNearState } = fresh("fixed_trace");
  const orchestrator = createCustodyLedgerSecondNearDispatchOrchestrator({
    routeObservationState: boundary,
    routeState: route,
    firstNearState,
  });
  const intent = observationIntent("later_stewardship");
  const first = orchestrator.dispatch(intent);
  const duplicate = orchestrator.dispatch({ ...intent, semanticHotspotId: semanticByObservation.outlined_gap });
  assert.equal(first.status, "recorded");
  assert.equal(duplicate.status, "duplicate_suppressed");
  assert.deepEqual(duplicate.state, first.state);
  assert.deepEqual(duplicate.state.observationState.finalizedObservationIds.sort(), ["fixed_trace", "later_stewardship"]);
});

test("unsafe, ambiguous, stale, forged, combined, partial, and contaminated input fail closed retaining the verified first fact", () => {
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
    { activationKind: "pointer", semanticHotspotId: undefined, candidateSemanticIds: [semanticByObservation.later_stewardship, semanticByObservation.outlined_gap] },
    { activationKind: "pointer", semanticHotspotId: undefined, occludedSemanticIds: [semanticByObservation.later_stewardship] },
    { activationKind: "pointer", semanticHotspotId: undefined, movingSemanticIds: [semanticByObservation.later_stewardship] },
    { actions: ["combined"] },
    { privateNotes: "must clear" },
    { payloads: { raw: true } },
    { routeIntent: true },
    { saveIntent: true },
  ];
  for (const overrides of unsafeOverrides) {
    const { route, boundary, firstNearState } = fresh("fixed_trace");
    const orchestrator = createCustodyLedgerSecondNearDispatchOrchestrator({
      routeObservationState: boundary,
      routeState: route,
      firstNearState,
    });
    const result = orchestrator.dispatch(observationIntent("later_stewardship", "screen_reader", overrides));
    assert.equal(result.status, "unavailable", JSON.stringify(overrides));
    assert.equal(result.state.phase, custodyLedgerSecondNearDispatchPhases.unavailable);
    assert.deepEqual(result.state.observationState.finalizedObservationIds, ["fixed_trace"]);
    assert.equal(result.state.observationState.activeObservation, undefined);
    const recovered = orchestrator.recover();
    assert.equal(recovered.phase, custodyLedgerSecondNearDispatchPhases.verifiedOneId);
    assert.deepEqual(recovered.observationState, firstNearState.observationState);
    assertNoCrossCredit(recovered);
  }
});

test("malformed or contaminated one-ID entry is unavailable and cannot be recovered into evidence", () => {
  const { route, boundary, firstNearState } = fresh("fixed_trace");
  for (const forged of [
    { ...firstNearState, privateNotes: "not allowed" },
    { ...firstNearState, phase: "FD-20", observationState: { ...firstNearState.observationState, finalizedObservationIds: ["fixed_trace", "outlined_gap"] } },
  ]) {
    const orchestrator = createCustodyLedgerSecondNearDispatchOrchestrator({
      routeObservationState: boundary,
      routeState: route,
      firstNearState: forged,
    });
    assert.equal(orchestrator.getState().phase, custodyLedgerSecondNearDispatchPhases.unavailable);
    assert.equal(orchestrator.dispatch(observationIntent("later_stewardship")).status, "unavailable");
  }
});

test("snapshots resume exact one-ID and two-ID fixtures without replay or acknowledgement", () => {
  const { route, boundary, firstNearState } = fresh("later_stewardship");
  const one = createCustodyLedgerSecondNearDispatchOrchestrator({ routeObservationState: boundary, routeState: route, firstNearState });
  const oneSnapshot = one.snapshot();
  assert.equal(oneSnapshot.state.phase, custodyLedgerSecondNearDispatchPhases.verifiedOneId);
  assert.equal(oneSnapshot.state.observationState.activeObservation, undefined);
  const resumedOne = createCustodyLedgerSecondNearDispatchOrchestrator({
    routeObservationState: boundary,
    routeState: route,
    firstNearState,
    restoredState: oneSnapshot.state,
  });
  assert.deepEqual(resumedOne.getState(), oneSnapshot.state);

  const acknowledgement = one.dispatch(observationIntent("outlined_gap"));
  const acknowledgementSnapshot = one.snapshot();
  assert.equal(acknowledgementSnapshot.state.phase, custodyLedgerSecondNearDispatchPhases.verifiedTwoId);
  assert.equal(acknowledgementSnapshot.state.observationState.activeObservation, undefined);
  assert.ok(acknowledgement.state.observationState.finalizedObservationIds.includes("later_stewardship"));
  one.returnToEvidence();
  const twoSnapshot = one.snapshot();
  const resumed = createCustodyLedgerSecondNearDispatchOrchestrator({
    routeObservationState: boundary,
    routeState: route,
    firstNearState,
    restoredState: twoSnapshot.state,
  });
  assert.equal(resumed.getState().phase, custodyLedgerSecondNearDispatchPhases.verifiedTwoId);
  assert.deepEqual(resumed.getState(), twoSnapshot.state);
  assert.equal(resumed.getState().observationState.activeObservation, undefined);
});

test("a forged two-ID resume that omits the verified first fact sanitizes back to SD-00", () => {
  const { route, boundary, firstNearState } = fresh("fixed_trace");
  const source = createCustodyLedgerSecondNearDispatchOrchestrator({ routeObservationState: boundary, routeState: route, firstNearState });
  source.dispatch(observationIntent("later_stewardship"));
  source.returnToEvidence();
  const legitimate = source.snapshot().state;
  const forgedObservation = {
    ...legitimate.observationState,
    observationEvidence: legitimate.observationState.observationEvidence.map((record) => (
      record.observationId === "fixed_trace"
        ? { ...record, observationId: "outlined_gap" }
        : record
    )),
  };
  const resumed = createCustodyLedgerSecondNearDispatchOrchestrator({
    routeObservationState: boundary,
    routeState: route,
    firstNearState,
    restoredState: { ...legitimate, observationState: forgedObservation },
  });
  assert.equal(resumed.getState().phase, custodyLedgerSecondNearDispatchPhases.verifiedOneId);
  assert.deepEqual(resumed.getState().observationState.finalizedObservationIds, ["fixed_trace"]);
});

test("Tour remains view-only with no campaign dispatcher, evidence, count, route action, or credit", () => {
  const orchestrator = createCustodyLedgerSecondNearDispatchOrchestrator({ mode: "demo_tour" });
  const initial = orchestrator.getState();
  assert.equal(initial.phase, custodyLedgerSecondNearDispatchPhases.tour);
  assert.equal(initial.interface, null);
  assert.equal(initial.observationState, null);
  assert.equal(initial.separateRouteControl, null);
  assert.equal(orchestrator.dispatch(observationIntent("fixed_trace")).status, "tour_view_only");
  assert.equal(orchestrator.returnToEvidence().status, "tour_view_only");
  assertNoCrossCredit(initial);
});

test("separate route return remains Pilot-owned and is never an observation dispatch", () => {
  const { route, boundary, firstNearState } = fresh("fixed_trace");
  const orchestrator = createCustodyLedgerSecondNearDispatchOrchestrator({ routeObservationState: boundary, routeState: route, firstNearState });
  const routeControl = orchestrator.getSeparateRouteControl();
  assert.ok(isCustodyLedgerSecondNearRouteReturn(routeControl));
  assert.equal(routeControl.owner, custodyLedgerRouteOwners.pilot);
  const result = orchestrator.dispatch({
    ...observationIntent("later_stewardship"),
    action: routeControl.action,
    routeIntent: true,
  });
  assert.equal(result.status, "unavailable");
  assert.deepEqual(result.state.observationState.finalizedObservationIds, ["fixed_trace"]);
});

test("accepted campaign and Tour objects remain byte-stable with world clocks and external boundaries unchanged", () => {
  const campaignBefore = JSON.stringify(acceptedCampaign);
  const tourBefore = JSON.stringify(acceptedCampaign.tour);
  const { route, boundary, firstNearState } = fresh("outlined_gap");
  const orchestrator = createCustodyLedgerSecondNearDispatchOrchestrator({ routeObservationState: boundary, routeState: route, firstNearState });
  orchestrator.dispatch(observationIntent("later_stewardship"));
  orchestrator.returnToEvidence();
  assert.equal(JSON.stringify(acceptedCampaign), campaignBefore);
  assert.equal(JSON.stringify(acceptedCampaign.tour), tourBefore);
  assert.equal(orchestrator.getState().continuation, acceptedCampaign.continuation);
  assertNoCrossCredit(orchestrator.getState());
});

test("second-near orchestration is isolated from App/main, browser storage, routes, UI, and accepted bundles", async () => {
  const [app, main, packageJson, firstModule, secondModule] = await Promise.all([
    readFile(new URL("../src/App.jsx", import.meta.url), "utf8"),
    readFile(new URL("../src/main.jsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../src/CustodyLedgerFirstNearDispatch.js", import.meta.url), "utf8"),
    readFile(new URL("../src/CustodyLedgerSecondNearDispatch.js", import.meta.url), "utf8"),
  ]);
  for (const source of [app, main, firstModule]) {
    assert.doesNotMatch(source, /CustodyLedgerSecondNearDispatch|createCustodyLedgerSecondNearDispatchOrchestrator/);
  }
  assert.doesNotMatch(secondModule, /localStorage|sessionStorage|indexedDB/i);
  assert.doesNotMatch(packageJson, /CustodyLedgerSecondNearDispatch/);
});
