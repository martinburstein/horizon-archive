import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import {
  CUSTODY_LEDGER_ROUTE_MIN_TARGET_CSS_PX,
  CUSTODY_LEDGER_ROUTE_PACKET_ID,
  CUSTODY_LEDGER_ROUTE_VERSION,
  acknowledgeCustodyLedgerRouteState,
  advanceCustodyLedgerRouteSystem,
  createCustodyLedgerRouteDispatcher,
  createCustodyLedgerRouteState,
  custodyLedgerRouteActions,
  custodyLedgerRouteActivationKinds,
  custodyLedgerRouteOwners,
  custodyLedgerRoutePhases,
  requestCustodyLedgerRouteTransition,
  sanitizeCustodyLedgerRouteState,
} from "../src/CustodyLedgerRouteState.js";

const predecessor = Object.freeze({
  verificationStatus: "verified",
  cityThresholdAnchorRecorded: true,
  civicDistrictRouteAvailable: true,
});

const acceptedCampaign = Object.freeze({
  boundary: "RP-001",
  continuation: "second_moon_route_restored",
  cityThresholdAnchorRecorded: true,
  civicDistrictRouteAvailable: true,
  cityStateDelta: null,
  world: { clock: 17, cameraClock: 8, cropClock: 4, effectClock: 2 },
  identityMaterialClosed: true,
  successor: null,
  authority: null,
  access: null,
  externalAction: null,
});

let token = 0;
function routeIntent(action, activationKind = "screen_reader", overrides = {}) {
  const returning = action === custodyLedgerRouteActions.returnAccepted;
  return {
    packetId: CUSTODY_LEDGER_ROUTE_PACKET_ID,
    version: CUSTODY_LEDGER_ROUTE_VERSION,
    mode: returning ? "protected" : "campaign",
    action,
    owner: custodyLedgerRouteOwners.pilot,
    activationKind,
    eventToken: `route-event-${++token}`,
    ...overrides,
  };
}

function enterProtected(activationKind = "screen_reader") {
  const dispatcher = createCustodyLedgerRouteDispatcher({
    predecessor,
    continuation: acceptedCampaign.continuation,
  });
  assert.equal(dispatcher.dispatch(routeIntent(custodyLedgerRouteActions.enter, activationKind)).status, "requested");
  assert.equal(dispatcher.getState().phase, custodyLedgerRoutePhases.entryVerification);
  dispatcher.advanceSystem({ predecessor });
  assert.equal(dispatcher.getState().phase, custodyLedgerRoutePhases.protectedArrival);
  dispatcher.acknowledge(custodyLedgerRouteActions.continueProtected);
  assert.equal(dispatcher.getState().phase, custodyLedgerRoutePhases.protectedActive);
  return dispatcher;
}

function assertNoCrossCredit(state) {
  for (const key of [
    "pythonEvidence", "pythonTransferEvidence", "raiEvidence", "raiTransferEvidence",
    "observationEvidence", "comparison", "civicComparisonSaved", "nextSurveyDirectionMarked",
    "rp002Checkpoint", "mastery", "save", "successor", "authority", "access",
    "cityResponse", "externalAction", "worldClock", "cameraClock", "cropClock", "effectClock",
  ]) assert.equal(Object.hasOwn(state, key), false, key);
  assert.equal(state.cityStateDelta, null);
  assert.equal(state.identityMaterialClosed, true);
}

test("verified predecessor eligibility exposes one exact Pilot action without activating it", () => {
  const campaignBytes = JSON.stringify(acceptedCampaign);
  const state = createCustodyLedgerRouteState({ predecessor, continuation: acceptedCampaign.continuation });
  assert.equal(state.phase, custodyLedgerRoutePhases.accepted);
  assert.equal(state.activeGroup, "route_transition");
  assert.equal(state.availableActions.length, 1);
  assert.equal(state.availableActions[0].action, custodyLedgerRouteActions.enter);
  assert.equal(state.availableActions[0].owner, custodyLedgerRouteOwners.pilot);
  assert.equal(state.availableActions[0].minWidthCssPx, CUSTODY_LEDGER_ROUTE_MIN_TARGET_CSS_PX);
  assert.equal(state.availableActions[0].minHeightCssPx, CUSTODY_LEDGER_ROUTE_MIN_TARGET_CSS_PX);
  assert.equal(state.availableActions[0].meaningUsesColorAlone, false);
  assert.equal(state.availableActions[0].motionRequired, false);
  assertNoCrossCredit(state);
  assert.equal(JSON.stringify(acceptedCampaign), campaignBytes);
});

test("missing, stale, invalid, and review-required predecessors fail closed at RP-001", () => {
  const bad = [
    null,
    { ...predecessor, cityThresholdAnchorRecorded: false },
    { ...predecessor, civicDistrictRouteAvailable: false },
    { ...predecessor, verificationStatus: "stale" },
    { ...predecessor, verificationStatus: "review_required" },
    { ...predecessor, extra: "forged" },
  ];
  for (const value of bad) {
    const state = createCustodyLedgerRouteState({ predecessor: value });
    assert.equal(state.phase, custodyLedgerRoutePhases.unavailable);
    assert.equal(state.lastVerifiedBoundary, "RP-001");
    assert.equal(state.availableActions[0].action, custodyLedgerRouteActions.recoverUnavailable);
    assertNoCrossCredit(state);
  }
});

test("valid entry follows RT-00 -> RT-10 -> RT-20 -> RT-30 and never skips the acknowledgement", () => {
  const dispatcher = createCustodyLedgerRouteDispatcher({ predecessor });
  dispatcher.dispatch(routeIntent(custodyLedgerRouteActions.enter));
  assert.equal(dispatcher.getState().phase, custodyLedgerRoutePhases.entryVerification);
  assert.deepEqual(dispatcher.getState().availableActions, []);
  dispatcher.advanceSystem({ predecessor });
  assert.equal(dispatcher.getState().phase, custodyLedgerRoutePhases.protectedArrival);
  assert.equal(dispatcher.getState().protectedBoard, "SC-03-00");
  assert.equal(dispatcher.getState().availableActions[0].action, custodyLedgerRouteActions.continueProtected);
  dispatcher.acknowledge(custodyLedgerRouteActions.continueProtected);
  assert.equal(dispatcher.getState().phase, custodyLedgerRoutePhases.protectedActive);
  assert.equal(dispatcher.getState().nextFocusIntent.target, "first-incomplete-action");
  assert.equal(dispatcher.getState().availableActions[0].action, custodyLedgerRouteActions.returnAccepted);
  assertNoCrossCredit(dispatcher.getState());
});

test("all seven input modalities produce equivalent single entry verification state", () => {
  const snapshots = custodyLedgerRouteActivationKinds.map((kind) => {
    const state = createCustodyLedgerRouteState({ predecessor });
    const result = requestCustodyLedgerRouteTransition(state, routeIntent(custodyLedgerRouteActions.enter, kind));
    assert.equal(result.phase, custodyLedgerRoutePhases.entryVerification);
    return JSON.stringify({ ...result, ownerMessage: null });
  });
  assert.equal(new Set(snapshots).size, 1);
});

test("one event token is consumed at most once across synthetic and repeated activation", () => {
  const dispatcher = createCustodyLedgerRouteDispatcher({ predecessor });
  const shared = routeIntent(custodyLedgerRouteActions.enter, "keyboard_enter", { eventToken: "one-hit-route-event" });
  assert.equal(dispatcher.dispatch(shared).status, "requested");
  const bytes = JSON.stringify(dispatcher.getState());
  for (const activationKind of ["pointer", "touch", "switch", "screen_reader"]) {
    const result = dispatcher.dispatch({ ...shared, activationKind });
    assert.equal(result.status, "duplicate_suppressed");
    assert.equal(JSON.stringify(result.state), bytes);
  }
  assert.equal(dispatcher.getState().phase, custodyLedgerRoutePhases.entryVerification);
});

test("wrong owner, mode, action, token, order, stale, forged, implicit, multi-hit, and combined save fail closed", () => {
  const invalid = [
    routeIntent(custodyLedgerRouteActions.enter, "screen_reader", { owner: custodyLedgerRouteOwners.system }),
    routeIntent(custodyLedgerRouteActions.enter, "screen_reader", { mode: "protected" }),
    routeIntent(custodyLedgerRouteActions.returnAccepted),
    routeIntent(custodyLedgerRouteActions.enter, "screen_reader", { eventToken: "short" }),
    routeIntent(custodyLedgerRouteActions.enter, "hover"),
    routeIntent(custodyLedgerRouteActions.enter, "screen_reader", { stale: true }),
    routeIntent(custodyLedgerRouteActions.enter, "screen_reader", { forged: true }),
    routeIntent(custodyLedgerRouteActions.enter, "screen_reader", { implicit: true }),
    routeIntent(custodyLedgerRouteActions.enter, "screen_reader", { multiHit: true }),
    routeIntent(custodyLedgerRouteActions.enter, "screen_reader", { saveIntent: true }),
    routeIntent(custodyLedgerRouteActions.enter, "screen_reader", { actions: [custodyLedgerRouteActions.enter, "SAVE BOUNDED COMPARISON"] }),
  ];
  for (const request of invalid) {
    const state = requestCustodyLedgerRouteTransition(createCustodyLedgerRouteState({ predecessor }), request);
    assert.equal(state.phase, custodyLedgerRoutePhases.unavailable);
    assert.equal(state.lastVerifiedBoundary, "RP-001");
    assertNoCrossCredit(state);
  }
});

test("System re-verification rejects a changed predecessor without constructing protected staging", () => {
  const verifying = requestCustodyLedgerRouteTransition(
    createCustodyLedgerRouteState({ predecessor }),
    routeIntent(custodyLedgerRouteActions.enter),
  );
  const result = advanceCustodyLedgerRouteSystem(verifying, {
    predecessor: { ...predecessor, civicDistrictRouteAvailable: false },
  });
  assert.equal(result.phase, custodyLedgerRoutePhases.unavailable);
  assert.equal(result.protectedSession, false);
  assert.equal(result.protectedBoard, null);
  assertNoCrossCredit(result);
});

test("explicit voluntary return follows RT-30 -> RT-40 -> RT-50 -> RT-00", () => {
  const dispatcher = enterProtected();
  assert.equal(dispatcher.dispatch(routeIntent(custodyLedgerRouteActions.returnAccepted)).status, "requested");
  assert.equal(dispatcher.getState().phase, custodyLedgerRoutePhases.returnReconstruction);
  assert.equal(dispatcher.getState().availableActions.length, 0);
  dispatcher.advanceSystem({ reconstructionValid: true });
  assert.equal(dispatcher.getState().phase, custodyLedgerRoutePhases.acceptedRestored);
  assert.equal(dispatcher.getState().availableActions[0].action, custodyLedgerRouteActions.continueAccepted);
  dispatcher.acknowledge(custodyLedgerRouteActions.continueAccepted, predecessor);
  assert.equal(dispatcher.getState().phase, custodyLedgerRoutePhases.accepted);
  assert.equal(dispatcher.getState().nextFocusIntent.target, custodyLedgerRouteActions.enter);
  assertNoCrossCredit(dispatcher.getState());
});

test("SAVE BOUNDED COMPARISON is never a route action in accepted or protected state", () => {
  const accepted = requestCustodyLedgerRouteTransition(createCustodyLedgerRouteState({ predecessor }), {
    ...routeIntent("SAVE BOUNDED COMPARISON"),
    owner: custodyLedgerRouteOwners.pilot,
  });
  assert.equal(accepted.phase, custodyLedgerRoutePhases.unavailable);
  const protectedDispatcher = enterProtected();
  const result = protectedDispatcher.dispatch({
    ...routeIntent(custodyLedgerRouteActions.returnAccepted),
    action: "SAVE BOUNDED COMPARISON",
    saveIntent: true,
  });
  assert.equal(result.state.phase, custodyLedgerRoutePhases.unavailable);
  assertNoCrossCredit(result.state);
});

test("failed or interrupted reconstruction sanitizes to a deterministic heading-first boundary", () => {
  const dispatcher = enterProtected();
  dispatcher.dispatch(routeIntent(custodyLedgerRouteActions.returnAccepted));
  const result = dispatcher.advanceSystem({ reconstructionValid: false });
  assert.equal(result.phase, custodyLedgerRoutePhases.sanitized);
  assert.equal(result.focusIntent.target, "heading");
  assert.equal(result.nextFocusIntent.target, "accepted-boundary:next-control");
  assert.equal(result.availableActions[0].action, custodyLedgerRouteActions.recoverSanitized);
  const recovered = acknowledgeCustodyLedgerRouteState(result, custodyLedgerRouteActions.recoverSanitized, predecessor);
  assert.equal(recovered.phase, custodyLedgerRoutePhases.accepted);
});

test("remount clears private, focus, input, source, payload, response, and token history", () => {
  const contaminated = {
    ...createCustodyLedgerRouteState({ predecessor }),
    privateNotes: "private-771",
    workingSource: "learner-code-441",
    selections: ["private-selection"],
    prose: "private-prose",
    feedback: "private-feedback",
    credentials: "secret-credential",
    endpoints: ["https://private.invalid"],
    payloads: [{ private: true }],
    responses: [{ private: true }],
    externalActionRequests: ["send"],
    eventTokens: ["token"],
    inputHistory: ["pointer"],
    focusHistory: ["button"],
  };
  const clean = sanitizeCustodyLedgerRouteState(contaminated, { predecessor });
  const bytes = JSON.stringify(clean);
  assert.equal(clean.phase, custodyLedgerRoutePhases.sanitized);
  for (const secret of ["private-771", "learner-code-441", "private-selection", "private-prose", "secret-credential", "private.invalid", "token", "pointer", "button"]) {
    assert.doesNotMatch(bytes, new RegExp(secret.replaceAll(".", "\\.")));
  }
  assertNoCrossCredit(clean);
});

test("only a valid isolated in-memory marker may reconstruct protected arrival", () => {
  const restored = createCustodyLedgerRouteState({ predecessor });
  const marker = {
    packetId: CUSTODY_LEDGER_ROUTE_PACKET_ID,
    version: CUSTODY_LEDGER_ROUTE_VERSION,
    mode: "protected_in_memory",
    boardId: "SC-03-00",
    verified: true,
  };
  const protectedState = sanitizeCustodyLedgerRouteState(restored, { protectedSessionMarker: marker, predecessor });
  assert.equal(protectedState.phase, custodyLedgerRoutePhases.protectedArrival);
  assert.equal(protectedState.protectedBoard, "SC-03-00");
  assert.equal(protectedState.focusIntent.target, "heading");
  const forged = sanitizeCustodyLedgerRouteState(restored, { protectedSessionMarker: { ...marker, version: "stale" }, predecessor });
  assert.equal(forged.phase, custodyLedgerRoutePhases.sanitized);
  assertNoCrossCredit(protectedState);
});

test("Tour is view-only, byte-stable, and has no Pilot route controls or campaign bridge", () => {
  const campaignBytes = JSON.stringify(acceptedCampaign);
  const tour = { mode: "demo_tour", step: 4, previewOnly: true };
  const tourBytes = JSON.stringify(tour);
  const state = createCustodyLedgerRouteState({ mode: "demo_tour", predecessor, campaign: acceptedCampaign, tour });
  assert.equal(state.phase, custodyLedgerRoutePhases.tour);
  assert.equal(state.activeGroup, "tour_preview");
  assert.deepEqual(state.availableActions, []);
  assert.equal(state.lastVerifiedBoundary, null);
  const request = requestCustodyLedgerRouteTransition(state, routeIntent(custodyLedgerRouteActions.enter));
  assert.equal(request.phase, custodyLedgerRoutePhases.unavailable);
  assertNoCrossCredit(request);
  assert.equal(JSON.stringify(acceptedCampaign), campaignBytes);
  assert.equal(JSON.stringify(tour), tourBytes);
});

test("route state preserves accepted campaign, continuation, world clocks, closed identity, and no successor or authority", () => {
  const bytes = JSON.stringify(acceptedCampaign);
  const dispatcher = enterProtected("pointer");
  dispatcher.dispatch(routeIntent(custodyLedgerRouteActions.returnAccepted));
  dispatcher.advanceSystem({ reconstructionValid: true });
  assert.equal(JSON.stringify(acceptedCampaign), bytes);
  assert.equal(dispatcher.getState().continuation, acceptedCampaign.continuation);
  assertNoCrossCredit(dispatcher.getState());
});

test("protected route module remains pure, non-routable, storage-free, and absent from App/main", async () => {
  const app = await readFile(new URL("../src/App.jsx", import.meta.url), "utf8");
  const main = await readFile(new URL("../src/main.jsx", import.meta.url), "utf8");
  const source = await readFile(new URL("../src/CustodyLedgerRouteState.js", import.meta.url), "utf8");
  assert.doesNotMatch(app, /CustodyLedgerRouteState|createCustodyLedgerRoute/);
  assert.doesNotMatch(main, /CustodyLedgerRouteState|createCustodyLedgerRoute/);
  assert.doesNotMatch(source, /localStorage|sessionStorage|indexedDB|fetch\(|XMLHttpRequest|WebSocket|window\.|document\.|React|jsx/);
  assert.doesNotMatch(source, /civicComparisonSaved\s*:|nextSurveyDirectionMarked\s*:|rp002Checkpoint\s*:/);
});
