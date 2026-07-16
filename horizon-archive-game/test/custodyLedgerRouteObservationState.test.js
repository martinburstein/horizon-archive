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
  CUSTODY_LEDGER_ROUTE_OBSERVATION_MIN_TARGET_CSS_PX,
  CUSTODY_LEDGER_ROUTE_OBSERVATION_VERSION,
  createCustodyLedgerRouteObservationDispatcher,
  createCustodyLedgerRouteObservationState,
  custodyLedgerRouteObservationCopy,
  custodyLedgerRouteObservationOwners,
  custodyLedgerRouteObservationPhases,
  registerCustodyLedgerNearObservationView,
  requestCustodyLedgerNearObservation,
  sanitizeCustodyLedgerRouteObservationState,
} from "../src/CustodyLedgerRouteObservationState.js";
import {
  CUSTODY_LEDGER_OBSERVATION_ACTION,
  custodyLedgerAtomicProgression,
  custodyLedgerObservationIds,
  recordCustodyLedgerObservation,
} from "../src/custodyLedgerExercise.js";

const predecessor = Object.freeze({
  verificationStatus: "verified",
  cityThresholdAnchorRecorded: true,
  civicDistrictRouteAvailable: true,
});
const acceptedCampaign = Object.freeze({
  packetId: "RP-001",
  continuation: "continuation",
  cityThresholdAnchorRecorded: true,
  civicDistrictRouteAvailable: true,
  cityStateDelta: null,
  world: { clock: 17, cameraClock: 8, cropClock: 4, effectClock: 2 },
  identityMaterialClosed: true,
  successor: null,
  authority: null,
  access: null,
  cityResponse: null,
  externalAction: null,
});

let token = 0;
function routeEntryIntent() {
  return {
    packetId: "RP-002",
    version: "rp002.route.v1",
    mode: "campaign",
    action: custodyLedgerRouteActions.enter,
    owner: custodyLedgerRouteOwners.pilot,
    activationKind: "screen_reader",
    eventToken: `route-observation-entry-${++token}`,
  };
}

function activeRoute() {
  let route = createCustodyLedgerRouteState({ predecessor, continuation: acceptedCampaign.continuation });
  route = requestCustodyLedgerRouteTransition(route, routeEntryIntent());
  route = advanceCustodyLedgerRouteSystem(route, { predecessor });
  route = acknowledgeCustodyLedgerRouteState(route, custodyLedgerRouteActions.continueProtected);
  return route;
}

function nearIntent(activationKind = "screen_reader", overrides = {}) {
  return {
    packetId: "RP-002",
    version: CUSTODY_LEDGER_ROUTE_OBSERVATION_VERSION,
    mode: "protected",
    action: CUSTODY_LEDGER_NEAR_DETAIL_ACTION,
    owner: custodyLedgerRouteObservationOwners.pilot,
    activationKind,
    eventToken: `route-observation-${++token}`,
    ...overrides,
  };
}

const exactRegistration = Object.freeze({
  status: "registered",
  sourceBoard: "SC-03-00",
  targetBoard: "SC-03-10",
  worldChanged: false,
  replayRequested: false,
});

function assertNoCrossCredit(state) {
  for (const key of [
    "pythonEvidence", "pythonTransferEvidence", "raiEvidence", "raiTransferEvidence",
    "comparison", "mastery", "save", "civicComparisonSaved", "nextSurveyDirectionMarked",
    "rp002Checkpoint", "successor", "authority", "access", "cityResponse", "externalAction",
    "world", "worldClock", "cameraClock", "cropClock", "effectClock",
  ]) assert.equal(Object.hasOwn(state, key), false, key);
  assert.equal(state.cityStateDelta, null);
  assert.equal(state.identityMaterialClosed, true);
  assert.equal(state.campaignCommitEnabled, false);
}

test("verified RT-30 exposes one exact Pilot near-detail action while return stays separate", () => {
  const route = activeRoute();
  const routeBytes = JSON.stringify(route);
  const campaignBytes = JSON.stringify(acceptedCampaign);
  const state = createCustodyLedgerRouteObservationState(route);
  assert.equal(state.phase, custodyLedgerRouteObservationPhases.protectedOverview);
  assert.equal(state.routePhase, "RT-30");
  assert.equal(state.routeBoard, "SC-03-00");
  assert.equal(state.ownerMessage.text, custodyLedgerRouteObservationCopy.overview);
  assert.equal(state.availableActions.length, 1);
  assert.equal(state.availableActions[0].action, CUSTODY_LEDGER_NEAR_DETAIL_ACTION);
  assert.equal(state.availableActions[0].owner, custodyLedgerRouteObservationOwners.pilot);
  assert.equal(state.availableActions[0].minWidthCssPx, CUSTODY_LEDGER_ROUTE_OBSERVATION_MIN_TARGET_CSS_PX);
  assert.equal(state.availableActions[0].minHeightCssPx, CUSTODY_LEDGER_ROUTE_OBSERVATION_MIN_TARGET_CSS_PX);
  assert.equal(state.availableActions[0].meaningUsesColorAlone, false);
  assert.equal(state.availableActions[0].motionRequired, false);
  assert.equal(state.separateRouteControl.action, custodyLedgerRouteActions.returnAccepted);
  assertNoCrossCredit(state);
  assert.equal(JSON.stringify(route), routeBytes);
  assert.equal(JSON.stringify(acceptedCampaign), campaignBytes);
});

test("only verified protected RT-30 may create the orchestration overview", () => {
  const route = activeRoute();
  const invalidRoutes = [
    null,
    { ...route, phase: "RT-20" },
    { ...route, protectedBoard: "SC-03-10" },
    { ...route, continuation: "forged" },
    { ...route, cityStateDelta: { changed: true } },
    { ...route, privateNotes: "private-401" },
    { ...route, predecessor: { ...predecessor, verificationStatus: "stale" } },
  ];
  for (const value of invalidRoutes) {
    const state = createCustodyLedgerRouteObservationState(value);
    assert.equal(state.phase, custodyLedgerRouteObservationPhases.sanitized);
    assert.equal(state.routeBoard, null);
    assertNoCrossCredit(state);
    assert.doesNotMatch(JSON.stringify(state), /private-401|forged/);
  }
});

test("all seven modalities request the same pending System transition without changing boards", () => {
  const route = activeRoute();
  const snapshots = custodyLedgerRouteActivationKinds.map((kind) => {
    const state = createCustodyLedgerRouteObservationState(route);
    const next = requestCustodyLedgerNearObservation(state, route, nearIntent(kind));
    assert.equal(next.phase, custodyLedgerRouteObservationPhases.systemTransition);
    assert.equal(next.routeBoard, "SC-03-00");
    assert.equal(next.observationBoard, null);
    assert.equal(next.viewRegistrationStatus, "pending");
    assert.equal(next.ownerMessage.owner, custodyLedgerRouteObservationOwners.systemState);
    assertNoCrossCredit(next);
    return JSON.stringify(next);
  });
  assert.equal(new Set(snapshots).size, 1);
});

test("SC-03-00 is held until exact registration constructs one blank SC-03-10 state", () => {
  const route = activeRoute();
  const pending = requestCustodyLedgerNearObservation(
    createCustodyLedgerRouteObservationState(route), route, nearIntent(),
  );
  for (const invalid of [
    null,
    { ...exactRegistration, status: "pending" },
    { ...exactRegistration, sourceBoard: "SC-03-10" },
    { ...exactRegistration, targetBoard: "SC-03-20" },
    { ...exactRegistration, worldChanged: true },
    { ...exactRegistration, replayRequested: true },
  ]) {
    const failed = registerCustodyLedgerNearObservationView(pending, route, invalid);
    assert.equal(failed.phase, custodyLedgerRouteObservationPhases.unavailable);
    assert.equal(failed.routeBoard, "SC-03-00");
    assert.equal(failed.observationBoard, null);
    assertNoCrossCredit(failed);
  }
  const opened = registerCustodyLedgerNearObservationView(pending, route, exactRegistration);
  assert.equal(opened.phase, custodyLedgerRouteObservationPhases.blankObservation);
  assert.equal(opened.routeBoard, "SC-03-10");
  assert.equal(opened.observationBoard, "SC-03-10");
  assert.equal(opened.viewRegistrationStatus, "registered");
  assert.equal(opened.ownerMessage.text, custodyLedgerRouteObservationCopy.blank);
  assert.deepEqual(opened.observationState.observationEvidence, []);
  assert.deepEqual(opened.observationState.finalizedObservationIds, []);
  assert.equal(opened.observationState.nextBoundary, "fixed_trace");
  assert.equal(opened.observationState.focusIntent.then, "observation:fixed_trace");
  assert.equal(opened.observationState.observationComplete, false);
  assert.equal(opened.observationState.campaignCommitEnabled, false);
  assertNoCrossCredit(opened);
});

test("one event token is a one-hit latch across duplicate activation", () => {
  const route = activeRoute();
  const dispatcher = createCustodyLedgerRouteObservationDispatcher(route);
  const request = nearIntent("pointer");
  assert.equal(dispatcher.dispatch(request).status, "requested");
  const bytes = JSON.stringify(dispatcher.getState());
  assert.equal(dispatcher.dispatch({ ...request, activationKind: "keyboard_enter" }).status, "duplicate_suppressed");
  assert.equal(JSON.stringify(dispatcher.getState()), bytes);
});

test("implicit, stale, forged, wrong-owner, wrong-mode, combined, and out-of-order requests fail closed", () => {
  const route = activeRoute();
  const initial = createCustodyLedgerRouteObservationState(route);
  const bad = [
    nearIntent("pointer", { implicit: true }),
    nearIntent("pointer", { stale: true }),
    nearIntent("pointer", { forged: true }),
    nearIntent("pointer", { multiHit: true }),
    nearIntent("pointer", { owner: custodyLedgerRouteObservationOwners.systemState }),
    nearIntent("pointer", { mode: "demo_tour" }),
    nearIntent("pointer", { saveIntent: true }),
    nearIntent("pointer", { routeIntent: true }),
    nearIntent("pointer", { action: custodyLedgerRouteActions.returnAccepted }),
    nearIntent("pointer", { action: "SAVE BOUNDED COMPARISON" }),
    nearIntent("pointer", { actions: [CUSTODY_LEDGER_NEAR_DETAIL_ACTION, custodyLedgerRouteActions.returnAccepted] }),
  ];
  for (const request of bad) {
    const state = requestCustodyLedgerNearObservation(initial, route, request);
    assert.equal(state.phase, custodyLedgerRouteObservationPhases.unavailable);
    assert.equal(state.routeBoard, "SC-03-00");
    assert.equal(state.ownerMessage.text, custodyLedgerRouteObservationCopy.unavailable);
    assertNoCrossCredit(state);
  }
  const pending = requestCustodyLedgerNearObservation(initial, route, nearIntent());
  const outOfOrder = requestCustodyLedgerNearObservation(pending, route, nearIntent());
  assert.equal(outOfOrder.phase, custodyLedgerRouteObservationPhases.unavailable);
});

test("fail-closed recovery returns to the verified overview without manufacturing intent", () => {
  const route = activeRoute();
  const dispatcher = createCustodyLedgerRouteObservationDispatcher(route);
  assert.equal(dispatcher.dispatch(nearIntent("pointer", { forged: true })).status, "unavailable");
  assert.equal(dispatcher.getState().phase, custodyLedgerRouteObservationPhases.unavailable);
  const recovered = dispatcher.recover();
  assert.equal(recovered.phase, custodyLedgerRouteObservationPhases.protectedOverview);
  assert.equal(recovered.viewRegistrationStatus, "not_requested");
  assert.equal(recovered.availableActions[0].action, CUSTODY_LEDGER_NEAR_DETAIL_ACTION);
  assertNoCrossCredit(recovered);
});

test("sanitation clears private state and reconstructs only a valid zero-ID blank boundary", () => {
  const route = activeRoute();
  const dispatcher = createCustodyLedgerRouteObservationDispatcher(route);
  dispatcher.dispatch(nearIntent());
  const opened = dispatcher.registerView(exactRegistration);
  const resumed = sanitizeCustodyLedgerRouteObservationState(opened, route);
  assert.equal(resumed.phase, custodyLedgerRouteObservationPhases.blankObservation);
  assert.deepEqual(resumed.observationState.finalizedObservationIds, []);
  assert.equal(resumed.observationState.focusIntent.then, "observation:fixed_trace");
  const contaminated = sanitizeCustodyLedgerRouteObservationState({
    ...opened,
    privateNotes: "private-877",
    observationState: {
      ...opened.observationState,
      observationEvidence: [{ observationId: "fixed_trace", finalizationStatus: "finalized" }],
    },
  }, route);
  assert.equal(contaminated.phase, custodyLedgerRouteObservationPhases.sanitized);
  assert.equal(contaminated.routeBoard, null);
  assert.equal(contaminated.nextFocusIntent.target, "accepted-boundary:next-control");
  assert.equal(Object.hasOwn(contaminated, "observationState"), false);
  assert.doesNotMatch(JSON.stringify(contaminated), /private-877|fixed_trace/);
});

test("the blank boundary preserves the later three-near-then-two-far observation order", () => {
  const route = activeRoute();
  const pending = requestCustodyLedgerNearObservation(
    createCustodyLedgerRouteObservationState(route), route, nearIntent(),
  );
  const opened = registerCustodyLedgerNearObservationView(pending, route, exactRegistration);
  let observations = opened.observationState;
  const order = ["outlined_gap", "fixed_trace", "later_stewardship", "closed_boundary", "distant_repetition"];
  for (const observationId of order) {
    const boardId = ["fixed_trace", "later_stewardship", "outlined_gap"].includes(observationId) ? "SC-03-10" : "SC-03-20";
    observations = recordCustodyLedgerObservation(observations, {
      actionType: CUSTODY_LEDGER_OBSERVATION_ACTION,
      observationId,
      boardId,
      available: true,
    });
  }
  assert.deepEqual(new Set(observations.finalizedObservationIds), new Set(custodyLedgerObservationIds));
  assert.equal(observations.observationComplete, true);
  assert.equal(observations.campaignCommitEnabled, false);
});

test("Tour is view-only and cannot expose Pilot intent or construct observation state", () => {
  const route = activeRoute();
  const preview = createCustodyLedgerRouteObservationState(route, { mode: "demo_tour" });
  assert.equal(preview.phase, custodyLedgerRouteObservationPhases.tour);
  assert.equal(preview.ownerMessage.owner, custodyLedgerRouteObservationOwners.tour);
  assert.equal(preview.availableActions.length, 0);
  assert.equal(preview.separateRouteControl, null);
  assert.equal(Object.hasOwn(preview, "observationState"), false);
  const requested = requestCustodyLedgerNearObservation(preview, route, nearIntent("screen_reader", { mode: "demo_tour" }));
  assert.equal(requested.phase, custodyLedgerRouteObservationPhases.unavailable);
  assertNoCrossCredit(requested);
});

test("route, accepted campaign, world clocks, and atomic triplet remain byte-stable and absent", () => {
  const route = activeRoute();
  const routeBytes = JSON.stringify(route);
  const campaignBytes = JSON.stringify(acceptedCampaign);
  const tripletBytes = JSON.stringify(custodyLedgerAtomicProgression);
  const dispatcher = createCustodyLedgerRouteObservationDispatcher(route);
  dispatcher.dispatch(nearIntent());
  const opened = dispatcher.registerView(exactRegistration);
  assertNoCrossCredit(opened);
  assert.equal(JSON.stringify(route), routeBytes);
  assert.equal(JSON.stringify(acceptedCampaign), campaignBytes);
  assert.equal(JSON.stringify(custodyLedgerAtomicProgression), tripletBytes);
  assert.equal(opened.continuation, acceptedCampaign.continuation);
  assert.equal(opened.cityStateDelta, null);
});

test("orchestration module stays pure, storage-free, UI-free, and absent from App/main", async () => {
  const moduleSource = await readFile(new URL("../src/CustodyLedgerRouteObservationState.js", import.meta.url), "utf8");
  const appSource = await readFile(new URL("../src/App.jsx", import.meta.url), "utf8");
  const mainSource = await readFile(new URL("../src/main.jsx", import.meta.url), "utf8");
  assert.doesNotMatch(moduleSource, /React|jsx|localStorage|sessionStorage|fetch\(|XMLHttpRequest|document\.|window\.|navigator\./);
  assert.doesNotMatch(moduleSource, /cityResponse\s*:|successor\s*:|authority\s*:|access\s*:|externalAction\s*:/);
  assert.doesNotMatch(appSource, /CustodyLedgerRouteObservationState|INSPECT NEAR EXPOSED LAYERS/);
  assert.doesNotMatch(mainSource, /CustodyLedgerRouteObservationState|INSPECT NEAR EXPOSED LAYERS/);
});
