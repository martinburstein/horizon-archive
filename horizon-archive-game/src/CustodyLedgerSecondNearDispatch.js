import {
  CUSTODY_LEDGER_ROUTE_PACKET_ID,
  custodyLedgerRouteActivationKinds,
  custodyLedgerRouteOwners,
} from "./CustodyLedgerRouteState.js";
import {
  CUSTODY_LEDGER_HOTSPOT_REGISTRY_VERSION,
  createCustodyLedgerHotspotDispatcher,
  describeCustodyLedgerHotspotControls,
} from "./CustodyLedgerHotspots.js";
import {
  describeCustodyLedgerObservationInterface,
  returnToCustodyLedgerObservationEvidence,
} from "./CustodyLedgerObservation.js";
import {
  createCustodyLedgerFirstNearDispatchOrchestrator,
  custodyLedgerFirstNearDispatchPhases,
  isCustodyLedgerFirstNearRouteReturn,
} from "./CustodyLedgerFirstNearDispatch.js";
import {
  custodyLedgerObservationOwnershipMessages,
  custodyLedgerObservationStages,
  sanitizeCustodyLedgerObservationState,
} from "./custodyLedgerExercise.js";

export const CUSTODY_LEDGER_SECOND_NEAR_DISPATCH_VERSION = "rp002.second-near-dispatch.v1";

export const custodyLedgerSecondNearDispatchPhases = Object.freeze({
  verifiedOneId: "SD-00",
  recordedReplay: "SD-R",
  secondAcknowledgement: "SD-10",
  verifiedTwoId: "SD-20",
  unavailable: "SD-U",
  tour: "SD-T",
});

const PRIVATE_KEYS = new Set([
  "privateNotes", "workingSource", "learnerSource", "selections", "prose", "feedback",
  "credentials", "endpoints", "payloads", "responses", "externalActionRequests",
  "pointerPath", "focusHistory", "inputHistory", "eventTokens", "requestHistory",
]);

function containsPrivateContent(value) {
  if (!value || typeof value !== "object") return false;
  return Object.entries(value).some(([key, nested]) => (
    PRIVATE_KEYS.has(key) || containsPrivateContent(nested)
  ));
}

function exactObject(left, right) {
  return JSON.stringify(left) === JSON.stringify(right);
}

function exactNearEvidence(value, count) {
  if (!value || containsPrivateContent(value)) return null;
  const safe = sanitizeCustodyLedgerObservationState(value);
  const exact = exactObject(value, safe)
    && safe.phase === "near_observations"
    && safe.boardId
    && safe.finalizedObservationIds.length === count
    && safe.finalizedObservationIds.every((id) => custodyLedgerObservationStages.near.includes(id))
    && safe.progress.near === count
    && safe.progress.far === 0
    && safe.observationComplete === false
    && safe.campaignCommitEnabled === false
    && safe.cityStateDelta === null;
  return exact ? safe : null;
}

function sanitizedNearEvidence(value, count) {
  const safe = sanitizeCustodyLedgerObservationState(value);
  return exactNearEvidence(safe, count);
}

function verifiedFirstBoundary(routeObservationState, routeState, firstNearState) {
  if (!firstNearState || containsPrivateContent(firstNearState)) return null;
  const authority = createCustodyLedgerFirstNearDispatchOrchestrator({
    routeObservationState,
    routeState,
    restoredState: firstNearState,
  });
  const canonical = authority.getState();
  return canonical.phase === custodyLedgerFirstNearDispatchPhases.oneIdEvidence
    && exactObject(firstNearState, canonical)
    && exactNearEvidence(canonical.observationState, 1)
    ? canonical
    : null;
}

function invariantFields(firstBoundary) {
  return {
    continuation: firstBoundary?.continuation ?? null,
    cityStateDelta: null,
    identityMaterialClosed: true,
    campaignCommitEnabled: false,
    scoringEnabled: false,
    learningEvidenceEnabled: false,
    reviewEnabled: false,
    saveEnabled: false,
    restoreEnabled: false,
    worldStateChanged: false,
    cityActionEnabled: false,
    accessEnabled: false,
    externalActionEnabled: false,
    successorEnabled: false,
    liveAuthorityEnabled: false,
    offlineOnly: true,
    examCreditGranted: false,
    examGuarantee: false,
  };
}

function stateView(phase, firstBoundary, observationState, failureReason = null) {
  const safe = observationState ? sanitizeCustodyLedgerObservationState(observationState) : null;
  const acknowledgement = phase === custodyLedgerSecondNearDispatchPhases.secondAcknowledgement
    || phase === custodyLedgerSecondNearDispatchPhases.recordedReplay;
  const model = acknowledgement ? observationState : safe;
  const view = model ? describeCustodyLedgerObservationInterface(model) : null;
  const evidenceGroup = phase === custodyLedgerSecondNearDispatchPhases.verifiedOneId
    || phase === custodyLedgerSecondNearDispatchPhases.verifiedTwoId
    || phase === custodyLedgerSecondNearDispatchPhases.unavailable;
  const controls = safe && evidenceGroup
    ? describeCustodyLedgerHotspotControls(safe)
    : Object.freeze([]);
  return Object.freeze({
    packetId: firstBoundary?.packetId ?? CUSTODY_LEDGER_ROUTE_PACKET_ID,
    version: CUSTODY_LEDGER_SECOND_NEAR_DISPATCH_VERSION,
    mode: phase === custodyLedgerSecondNearDispatchPhases.tour ? "demo_tour" : "protected",
    phase,
    boardId: phase === custodyLedgerSecondNearDispatchPhases.tour ? null : firstBoundary?.boardId ?? null,
    stage: phase === custodyLedgerSecondNearDispatchPhases.tour ? null : firstBoundary?.stage ?? null,
    activeGroup: phase === custodyLedgerSecondNearDispatchPhases.tour
      ? "second_near_dispatch_tour"
      : model?.activeGroup ?? "second_near_dispatch_unavailable",
    ownerMessage: phase === custodyLedgerSecondNearDispatchPhases.tour
      ? custodyLedgerObservationOwnershipMessages.tour
      : phase === custodyLedgerSecondNearDispatchPhases.unavailable
        ? custodyLedgerObservationOwnershipMessages.unavailable
        : view?.primary ?? null,
    interface: phase === custodyLedgerSecondNearDispatchPhases.tour ? null : view,
    controls,
    separateRouteControl: phase === custodyLedgerSecondNearDispatchPhases.tour
      ? null
      : firstBoundary?.separateRouteControl ?? null,
    observationState: model,
    focusIntent: model?.focusIntent ?? { group: "second_near_dispatch", target: "heading" },
    nextFocusIntent: model?.nextFocusIntent ?? safe?.focusIntent ?? null,
    activationKinds: Object.freeze([...custodyLedgerRouteActivationKinds]),
    failureReason,
    ...invariantFields(firstBoundary),
  });
}

function exactCampaignIntent(intent, firstBoundary) {
  return intent?.packetId === firstBoundary.packetId
    && intent.mode === "campaign"
    && intent.owner === custodyLedgerRouteOwners.pilot
    && intent.boardId === firstBoundary.boardId
    && intent.registryVersion === CUSTODY_LEDGER_HOTSPOT_REGISTRY_VERSION
    && custodyLedgerRouteActivationKinds.includes(intent.activationKind)
    && typeof intent.eventToken === "string"
    && /^[A-Za-z0-9._:-]{1,128}$/.test(intent.eventToken)
    && intent.evidenceReadable === true
    && intent.cropSafe === true
    && intent.available !== false
    && intent.action === undefined
    && intent.implicit !== true
    && intent.stale !== true
    && intent.forged !== true
    && intent.multiHit !== true
    && intent.overlapping !== true
    && intent.tourDerived !== true
    && intent.partial !== true
    && intent.routeIntent !== true
    && intent.saveIntent !== true
    && !Array.isArray(intent.actions)
    && !containsPrivateContent(intent);
}

function retainedRecordIsByteStable(before, after, firstId) {
  const firstBefore = before.observationEvidence.find((record) => record.observationId === firstId);
  const firstAfter = after.observationEvidence.find((record) => record.observationId === firstId);
  return firstBefore && firstAfter && exactObject(firstBefore, firstAfter);
}

function validSecondResult(result, firstEvidence) {
  const safe = sanitizeCustodyLedgerObservationState(result?.state);
  const firstId = firstEvidence.finalizedObservationIds[0];
  return result?.status === "recorded"
    && result.semanticHotspotId
    && result.observationId !== firstId
    && custodyLedgerObservationStages.near.includes(result.observationId)
    && result.state?.activeGroup === "observation_statement"
    && result.state?.activeObservation?.observationId === result.observationId
    && result.state?.activeObservation?.status === "finalized"
    && safe.phase === "near_observations"
    && safe.finalizedObservationIds.length === 2
    && safe.finalizedObservationIds.includes(firstId)
    && safe.finalizedObservationIds.includes(result.observationId)
    && retainedRecordIsByteStable(firstEvidence, safe, firstId)
    && safe.progress.near === 2
    && safe.progress.far === 0
    && safe.observationComplete === false;
}

function validReplayResult(result, firstEvidence) {
  const safe = sanitizeCustodyLedgerObservationState(result?.state);
  const firstId = firstEvidence.finalizedObservationIds[0];
  return result?.status === "replayed"
    && result.observationId === firstId
    && result.state?.activeGroup === "observation_revisit"
    && result.state?.activeObservation?.observationId === firstId
    && result.state?.activeObservation?.status === "already_recorded"
    && exactObject(safe, firstEvidence);
}

export function createCustodyLedgerSecondNearDispatchOrchestrator({
  routeObservationState,
  routeState,
  firstNearState,
  mode = "protected",
  restoredState = null,
} = {}) {
  if (mode === "demo_tour" || routeObservationState?.mode === "demo_tour") {
    let state = stateView(custodyLedgerSecondNearDispatchPhases.tour, null, null);
    return Object.freeze({
      getState: () => state,
      dispatch: () => Object.freeze({ status: "tour_view_only", state }),
      returnToEvidence: () => Object.freeze({ status: "tour_view_only", state }),
      recover: () => state,
      getSeparateRouteControl: () => null,
      snapshot: () => Object.freeze({ state }),
    });
  }

  const firstBoundary = verifiedFirstBoundary(routeObservationState, routeState, firstNearState);
  const oneIdEvidence = firstBoundary?.observationState ?? null;
  const restoredObservation = restoredState?.observationState;
  const restoredTwoCandidate = exactNearEvidence(restoredObservation, 2);
  const firstId = oneIdEvidence?.finalizedObservationIds[0];
  const restoredTwo = restoredTwoCandidate
    && restoredTwoCandidate.finalizedObservationIds.includes(firstId)
    && retainedRecordIsByteStable(oneIdEvidence, restoredTwoCandidate, firstId)
    ? restoredTwoCandidate
    : null;
  const canonicalTwo = restoredTwo
    ? stateView(custodyLedgerSecondNearDispatchPhases.verifiedTwoId, firstBoundary, restoredTwo)
    : null;
  let state = !firstBoundary
    ? stateView(custodyLedgerSecondNearDispatchPhases.unavailable, null, null, "unverified_one_id_boundary")
    : canonicalTwo && exactObject(restoredState, canonicalTwo)
      ? canonicalTwo
      : stateView(custodyLedgerSecondNearDispatchPhases.verifiedOneId, firstBoundary, oneIdEvidence);
  const consumedEventTokens = new Set();

  function fail(reason) {
    state = stateView(
      custodyLedgerSecondNearDispatchPhases.unavailable,
      firstBoundary,
      oneIdEvidence,
      reason,
    );
    return Object.freeze({ status: "unavailable", reason, state });
  }

  function dispatch(intent = {}) {
    if (!firstBoundary) return fail("unverified_one_id_boundary");
    if (typeof intent.eventToken === "string" && consumedEventTokens.has(intent.eventToken)) {
      return Object.freeze({ status: "duplicate_suppressed", reason: "event_token_consumed", state });
    }
    if (typeof intent.eventToken === "string" && /^[A-Za-z0-9._:-]{1,128}$/.test(intent.eventToken)) {
      consumedEventTokens.add(intent.eventToken);
    }
    if (state.phase !== custodyLedgerSecondNearDispatchPhases.verifiedOneId) {
      return Object.freeze({ status: "unavailable", reason: "second_dispatch_closed", state });
    }
    if (!exactCampaignIntent(intent, firstBoundary)) return fail("invalid_campaign_activation");

    const dispatcher = createCustodyLedgerHotspotDispatcher({ initialState: oneIdEvidence });
    const result = dispatcher.dispatch(intent);
    if (validReplayResult(result, oneIdEvidence)) {
      state = stateView(custodyLedgerSecondNearDispatchPhases.recordedReplay, firstBoundary, result.state);
      return Object.freeze({
        status: "replayed",
        semanticHotspotId: result.semanticHotspotId,
        observationId: result.observationId,
        state,
      });
    }
    if (!validSecondResult(result, oneIdEvidence)) return fail(result.reason ?? result.status ?? "dispatch_unavailable");

    state = stateView(
      custodyLedgerSecondNearDispatchPhases.secondAcknowledgement,
      firstBoundary,
      result.state,
    );
    return Object.freeze({
      status: "recorded",
      semanticHotspotId: result.semanticHotspotId,
      observationId: result.observationId,
      state,
    });
  }

  function returnToEvidence() {
    const replay = state.phase === custodyLedgerSecondNearDispatchPhases.recordedReplay;
    const acknowledgement = state.phase === custodyLedgerSecondNearDispatchPhases.secondAcknowledgement;
    if (!replay && !acknowledgement) {
      return Object.freeze({ status: "unavailable", reason: "acknowledgement_not_active", state });
    }
    const returned = returnToCustodyLedgerObservationEvidence(state.observationState);
    const expectedCount = replay ? 1 : 2;
    const safe = exactNearEvidence(returned, expectedCount);
    if (!safe) return fail(`invalid_${expectedCount}_id_boundary`);
    state = stateView(
      replay
        ? custodyLedgerSecondNearDispatchPhases.verifiedOneId
        : custodyLedgerSecondNearDispatchPhases.verifiedTwoId,
      firstBoundary,
      safe,
    );
    return Object.freeze({
      status: replay ? "returned_to_one_id_evidence" : "returned_to_two_id_evidence",
      state,
    });
  }

  function recover() {
    if (!firstBoundary) return state;
    state = stateView(custodyLedgerSecondNearDispatchPhases.verifiedOneId, firstBoundary, oneIdEvidence);
    return state;
  }

  function snapshot() {
    const safe = sanitizedNearEvidence(state.observationState, 2)
      ?? sanitizedNearEvidence(state.observationState, 1)
      ?? oneIdEvidence;
    const phase = safe?.finalizedObservationIds.length === 2
      ? custodyLedgerSecondNearDispatchPhases.verifiedTwoId
      : custodyLedgerSecondNearDispatchPhases.verifiedOneId;
    return Object.freeze({ state: stateView(phase, firstBoundary, safe) });
  }

  return Object.freeze({
    getState: () => state,
    dispatch,
    returnToEvidence,
    recover,
    getSeparateRouteControl: () => state.separateRouteControl,
    snapshot,
  });
}

export function isCustodyLedgerSecondNearRouteReturn(value) {
  return isCustodyLedgerFirstNearRouteReturn(value)
    && value.owner === custodyLedgerRouteOwners.pilot;
}
