import {
  custodyLedgerRouteActions,
  custodyLedgerRouteActivationKinds,
  custodyLedgerRouteOwners,
} from "./CustodyLedgerRouteState.js";
import {
  CUSTODY_LEDGER_ROUTE_OBSERVATION_VERSION,
  custodyLedgerRouteObservationPhases,
  sanitizeCustodyLedgerRouteObservationState,
} from "./CustodyLedgerRouteObservationState.js";
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
  custodyLedgerObservationOwnershipMessages,
  custodyLedgerObservationStages,
  sanitizeCustodyLedgerObservationState,
} from "./custodyLedgerExercise.js";

export const CUSTODY_LEDGER_FIRST_NEAR_DISPATCH_VERSION = "rp002.first-near-dispatch.v1";

export const custodyLedgerFirstNearDispatchPhases = Object.freeze({
  verifiedBlank: "FD-00",
  acknowledgement: "FD-10",
  oneIdEvidence: "FD-20",
  unavailable: "FD-U",
  tour: "FD-T",
});

const PACKET_ID = "RP-002";
const BOARD_ID = "SC-03-10";
const STAGE = "near_observations";
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

function exactBlankBoundary(routeObservationState, routeState) {
  const sanitized = sanitizeCustodyLedgerRouteObservationState(routeObservationState, routeState);
  if (sanitized.phase !== custodyLedgerRouteObservationPhases.blankObservation
    || sanitized.version !== CUSTODY_LEDGER_ROUTE_OBSERVATION_VERSION
    || sanitized.mode !== "protected"
    || sanitized.routeBoard !== BOARD_ID
    || sanitized.observationBoard !== BOARD_ID
    || sanitized.viewRegistrationStatus !== "registered"
    || !exactObject(routeObservationState, sanitized)) return null;
  return sanitized;
}

function exactOneNearObservation(value) {
  const safe = sanitizeCustodyLedgerObservationState(value);
  return safe.phase === STAGE
    && safe.boardId === BOARD_ID
    && safe.finalizedObservationIds.length === 1
    && custodyLedgerObservationStages.near.includes(safe.finalizedObservationIds[0])
    && safe.progress.near === 1
    && safe.progress.far === 0
    && safe.observationComplete === false
    ? safe
    : null;
}

function invariantFields(routeObservationState) {
  return {
    continuation: routeObservationState?.continuation,
    cityStateDelta: null,
    identityMaterialClosed: true,
    campaignCommitEnabled: false,
  };
}

function stateView(phase, routeObservationState, observationState, failureReason = null) {
  const safe = observationState ? sanitizeCustodyLedgerObservationState(observationState) : null;
  const acknowledgement = phase === custodyLedgerFirstNearDispatchPhases.acknowledgement;
  const model = acknowledgement ? observationState : safe;
  const view = model ? describeCustodyLedgerObservationInterface(model) : null;
  const controls = safe && !acknowledgement
    ? describeCustodyLedgerHotspotControls(safe)
    : Object.freeze([]);
  return Object.freeze({
    packetId: PACKET_ID,
    version: CUSTODY_LEDGER_FIRST_NEAR_DISPATCH_VERSION,
    mode: phase === custodyLedgerFirstNearDispatchPhases.tour ? "demo_tour" : "protected",
    phase,
    boardId: phase === custodyLedgerFirstNearDispatchPhases.tour ? null : BOARD_ID,
    stage: phase === custodyLedgerFirstNearDispatchPhases.tour ? null : STAGE,
    activeGroup: phase === custodyLedgerFirstNearDispatchPhases.tour
      ? "first_near_dispatch_tour"
      : acknowledgement ? "observation_statement" : "near_observations",
    ownerMessage: phase === custodyLedgerFirstNearDispatchPhases.tour
      ? custodyLedgerObservationOwnershipMessages.tour
      : phase === custodyLedgerFirstNearDispatchPhases.unavailable
        ? custodyLedgerObservationOwnershipMessages.unavailable
        : view?.primary ?? null,
    interface: phase === custodyLedgerFirstNearDispatchPhases.tour ? null : view,
    controls,
    separateRouteControl: phase === custodyLedgerFirstNearDispatchPhases.tour
      ? null
      : routeObservationState?.separateRouteControl ?? null,
    observationState: model,
    focusIntent: model?.focusIntent ?? { group: "first_near_dispatch", target: "heading" },
    nextFocusIntent: model?.nextFocusIntent ?? safe?.focusIntent ?? null,
    activationKinds: Object.freeze([...custodyLedgerRouteActivationKinds]),
    failureReason,
    scoringEnabled: false,
    learningEvidenceEnabled: false,
    reviewEnabled: false,
    saveEnabled: false,
    restoreEnabled: false,
    ...invariantFields(routeObservationState),
  });
}

function tourState(routeObservationState) {
  return stateView(custodyLedgerFirstNearDispatchPhases.tour, routeObservationState, null);
}

function unavailableState(routeObservationState, blankObservationState, reason) {
  return stateView(
    custodyLedgerFirstNearDispatchPhases.unavailable,
    routeObservationState,
    blankObservationState,
    reason,
  );
}

function exactCampaignIntent(intent) {
  return intent?.packetId === PACKET_ID
    && intent.mode === "campaign"
    && intent.owner === custodyLedgerRouteOwners.pilot
    && intent.boardId === BOARD_ID
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
    && intent.tourDerived !== true
    && intent.partial !== true
    && intent.routeIntent !== true
    && intent.saveIntent !== true
    && !Array.isArray(intent.actions)
    && !containsPrivateContent(intent);
}

function validRecordedResult(result) {
  const safe = sanitizeCustodyLedgerObservationState(result?.state);
  return result?.status === "recorded"
    && result.semanticHotspotId
    && custodyLedgerObservationStages.near.includes(result.observationId)
    && result.state?.activeGroup === "observation_statement"
    && result.state?.activeObservation?.observationId === result.observationId
    && result.state?.activeObservation?.status === "finalized"
    && safe.activeGroup === STAGE
    && safe.finalizedObservationIds.length === 1
    && safe.finalizedObservationIds[0] === result.observationId
    && safe.progress.near === 1
    && safe.progress.far === 0
    && safe.observationComplete === false;
}

export function createCustodyLedgerFirstNearDispatchOrchestrator({
  routeObservationState,
  routeState,
  mode = "protected",
  restoredState = null,
} = {}) {
  if (mode === "demo_tour" || routeObservationState?.mode === "demo_tour") {
    let state = tourState(routeObservationState);
    return Object.freeze({
      getState: () => state,
      dispatch: () => Object.freeze({ status: "tour_view_only", state }),
      returnToEvidence: () => Object.freeze({ status: "tour_view_only", state }),
      getSeparateRouteControl: () => null,
      snapshot: () => Object.freeze({ state }),
    });
  }

  const boundary = exactBlankBoundary(routeObservationState, routeState);
  const blankObservationState = boundary?.observationState ?? null;
  let state;
  if (!boundary) {
    state = unavailableState(routeObservationState, null, "unverified_blank_boundary");
  } else {
    const restoredOne = exactOneNearObservation(restoredState?.observationState);
    state = restoredOne
      ? stateView(custodyLedgerFirstNearDispatchPhases.oneIdEvidence, boundary, restoredOne)
      : stateView(custodyLedgerFirstNearDispatchPhases.verifiedBlank, boundary, blankObservationState);
  }
  const consumedEventTokens = new Set();

  function fail(reason) {
    if (state.phase === custodyLedgerFirstNearDispatchPhases.verifiedBlank
      || state.phase === custodyLedgerFirstNearDispatchPhases.unavailable) {
      state = unavailableState(boundary ?? routeObservationState, blankObservationState, reason);
    }
    return Object.freeze({ status: "unavailable", reason, state });
  }

  function dispatch(intent = {}) {
    if (!boundary) return fail("unverified_blank_boundary");
    if (typeof intent.eventToken === "string" && consumedEventTokens.has(intent.eventToken)) {
      return Object.freeze({ status: "duplicate_suppressed", reason: "event_token_consumed", state });
    }
    if (typeof intent.eventToken === "string" && /^[A-Za-z0-9._:-]{1,128}$/.test(intent.eventToken)) {
      consumedEventTokens.add(intent.eventToken);
    }
    if (state.phase !== custodyLedgerFirstNearDispatchPhases.verifiedBlank) {
      return fail("first_dispatch_closed");
    }
    if (!exactCampaignIntent(intent)) return fail("invalid_campaign_activation");
    const dispatcher = createCustodyLedgerHotspotDispatcher({ initialState: blankObservationState });
    const result = dispatcher.dispatch(intent);
    if (!validRecordedResult(result)) return fail(result.reason ?? result.status ?? "dispatch_unavailable");

    state = stateView(
      custodyLedgerFirstNearDispatchPhases.acknowledgement,
      boundary,
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
    if (state.phase !== custodyLedgerFirstNearDispatchPhases.acknowledgement) {
      return Object.freeze({ status: "unavailable", reason: "acknowledgement_not_active", state });
    }
    const returned = returnToCustodyLedgerObservationEvidence(state.observationState);
    const oneId = exactOneNearObservation(returned);
    if (!oneId) return fail("invalid_one_id_boundary");
    state = stateView(custodyLedgerFirstNearDispatchPhases.oneIdEvidence, boundary, oneId);
    return Object.freeze({ status: "returned_to_evidence", state });
  }

  function snapshot() {
    const oneId = exactOneNearObservation(state.observationState);
    const safeState = oneId
      ? stateView(custodyLedgerFirstNearDispatchPhases.oneIdEvidence, boundary, oneId)
      : stateView(custodyLedgerFirstNearDispatchPhases.verifiedBlank, boundary, blankObservationState);
    return Object.freeze({ state: safeState });
  }

  return Object.freeze({
    getState: () => state,
    dispatch,
    returnToEvidence,
    getSeparateRouteControl: () => state.separateRouteControl,
    snapshot,
  });
}

export function isCustodyLedgerFirstNearRouteReturn(value) {
  return value?.action === custodyLedgerRouteActions.returnAccepted
    && value.owner === custodyLedgerRouteOwners.pilot;
}
