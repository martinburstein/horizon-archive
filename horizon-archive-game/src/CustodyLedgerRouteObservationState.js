import { CITY_THRESHOLD_CONTINUATION } from "./cityThresholdExercise.js";
import {
  CUSTODY_LEDGER_ROUTE_PACKET_ID,
  CUSTODY_LEDGER_ROUTE_VERSION,
  custodyLedgerRouteActions,
  custodyLedgerRouteActivationKinds,
  custodyLedgerRouteOwners,
  custodyLedgerRoutePhases,
} from "./CustodyLedgerRouteState.js";
import {
  createCustodyLedgerObservationState,
  sanitizeCustodyLedgerObservationState,
} from "./custodyLedgerExercise.js";

export const CUSTODY_LEDGER_ROUTE_OBSERVATION_VERSION = "rp002.route-observation.v1";
export const CUSTODY_LEDGER_NEAR_DETAIL_ACTION = "INSPECT NEAR EXPOSED LAYERS";
export const CUSTODY_LEDGER_ROUTE_OBSERVATION_MIN_TARGET_CSS_PX = 44;

export const custodyLedgerRouteObservationPhases = Object.freeze({
  protectedOverview: "RO-00",
  systemTransition: "RO-10",
  blankObservation: "RO-20",
  unavailable: "RO-U",
  sanitized: "RO-S",
  tour: "RO-T",
});

export const custodyLedgerRouteObservationOwners = Object.freeze({
  systemState: "SYSTEM // EXPEDITION STATE",
  systemSession: "SYSTEM // EXPEDITION SESSION",
  pilot: custodyLedgerRouteOwners.pilot,
  tour: custodyLedgerRouteOwners.tour,
});

export const custodyLedgerRouteObservationCopy = Object.freeze({
  overview: "Protected survey overview ready. Orientation alone records no district evidence.",
  transition: "Registering a closer expedition viewpoint. No district evidence is being recorded.",
  blank: "Near evidence is ready for deliberate inspection. Nothing has been recorded yet.",
  unavailable: "Protected viewpoint change was not verified. Continue at the last safe expedition boundary.",
  tour: "Preview only — viewpoint changes record no district observations.",
});

const PRIVATE_KEYS = new Set([
  "privateNotes", "workingSource", "selections", "prose", "feedback", "credentials",
  "endpoints", "payloads", "responses", "externalActionRequests", "pointerPath",
  "focusHistory", "inputHistory", "eventTokens", "requestHistory", "learnerSource",
]);
const ROUTE_BOARD = "SC-03-00";
const OBSERVATION_BOARD = "SC-03-10";

function containsPrivateContent(value) {
  if (!value || typeof value !== "object") return false;
  return Object.entries(value).some(([key, nested]) => PRIVATE_KEYS.has(key) || containsPrivateContent(nested));
}

function verifiedProtectedRoute(routeState) {
  return routeState?.packetId === CUSTODY_LEDGER_ROUTE_PACKET_ID
    && routeState.version === CUSTODY_LEDGER_ROUTE_VERSION
    && routeState.mode === "campaign"
    && routeState.phase === custodyLedgerRoutePhases.protectedActive
    && routeState.protectedSession === true
    && routeState.protectedBoard === ROUTE_BOARD
    && routeState.continuation === CITY_THRESHOLD_CONTINUATION
    && routeState.cityStateDelta === null
    && routeState.identityMaterialClosed === true
    && routeState.predecessor?.verificationStatus === "verified"
    && routeState.predecessor?.cityThresholdAnchorRecorded === true
    && routeState.predecessor?.civicDistrictRouteAvailable === true
    && routeState.availableActions?.length === 1
    && routeState.availableActions[0]?.action === custodyLedgerRouteActions.returnAccepted
    && routeState.availableActions[0]?.owner === custodyLedgerRouteOwners.pilot
    && !containsPrivateContent(routeState);
}

function actionDescriptor(action, owner, label = action) {
  return Object.freeze({
    action,
    owner,
    label,
    accessibleName: `${owner} — ${label}`,
    minWidthCssPx: CUSTODY_LEDGER_ROUTE_OBSERVATION_MIN_TARGET_CSS_PX,
    minHeightCssPx: CUSTODY_LEDGER_ROUTE_OBSERVATION_MIN_TARGET_CSS_PX,
    meaningUsesColorAlone: false,
    motionRequired: false,
  });
}

function separateReturnDescriptor() {
  return actionDescriptor(custodyLedgerRouteActions.returnAccepted, custodyLedgerRouteOwners.pilot);
}

function baseState(phase, owner, text) {
  return {
    packetId: CUSTODY_LEDGER_ROUTE_PACKET_ID,
    version: CUSTODY_LEDGER_ROUTE_OBSERVATION_VERSION,
    mode: "protected",
    phase,
    routePhase: custodyLedgerRoutePhases.protectedActive,
    routeBoard: ROUTE_BOARD,
    observationBoard: null,
    viewRegistrationStatus: "not_requested",
    activeGroup: "route_observation_handoff",
    ownerMessage: { owner, text },
    focusIntent: { group: "route_observation_handoff", target: "heading" },
    nextFocusIntent: { group: "route_observation_handoff", target: "heading" },
    availableActions: [],
    separateRouteControl: separateReturnDescriptor(),
    continuation: CITY_THRESHOLD_CONTINUATION,
    cityStateDelta: null,
    identityMaterialClosed: true,
    campaignCommitEnabled: false,
  };
}

function overviewState(routeState, phase = custodyLedgerRouteObservationPhases.protectedOverview) {
  if (!verifiedProtectedRoute(routeState)) return sanitizedState();
  const state = baseState(phase, custodyLedgerRouteObservationOwners.systemState, custodyLedgerRouteObservationCopy.overview);
  return {
    ...state,
    nextFocusIntent: { group: "route_observation_handoff", target: CUSTODY_LEDGER_NEAR_DETAIL_ACTION },
    availableActions: [actionDescriptor(
      CUSTODY_LEDGER_NEAR_DETAIL_ACTION,
      custodyLedgerRouteObservationOwners.pilot,
      "Inspect the exposed layers from a closer expedition viewpoint.",
    )],
  };
}

function unavailableState(routeState) {
  const state = baseState(
    custodyLedgerRouteObservationPhases.unavailable,
    custodyLedgerRouteObservationOwners.systemState,
    custodyLedgerRouteObservationCopy.unavailable,
  );
  return {
    ...state,
    routeVerified: verifiedProtectedRoute(routeState),
    nextFocusIntent: {
      group: "route_observation_handoff",
      target: verifiedProtectedRoute(routeState) ? "return_to_protected_overview" : "accepted-boundary:next-control",
    },
  };
}

function sanitizedState() {
  const state = baseState(
    custodyLedgerRouteObservationPhases.sanitized,
    custodyLedgerRouteObservationOwners.systemState,
    custodyLedgerRouteObservationCopy.unavailable,
  );
  return {
    ...state,
    routePhase: null,
    routeBoard: null,
    separateRouteControl: null,
    nextFocusIntent: { group: "accepted_boundary", target: "accepted-boundary:next-control" },
  };
}

function protectedSanitizedState(routeState) {
  return {
    ...unavailableState(routeState),
    phase: custodyLedgerRouteObservationPhases.sanitized,
  };
}

function tourState() {
  return {
    packetId: CUSTODY_LEDGER_ROUTE_PACKET_ID,
    version: CUSTODY_LEDGER_ROUTE_OBSERVATION_VERSION,
    mode: "demo_tour",
    phase: custodyLedgerRouteObservationPhases.tour,
    routePhase: null,
    routeBoard: null,
    observationBoard: null,
    viewRegistrationStatus: "preview_only",
    activeGroup: "route_observation_tour",
    ownerMessage: {
      owner: custodyLedgerRouteObservationOwners.tour,
      text: custodyLedgerRouteObservationCopy.tour,
    },
    focusIntent: { group: "route_observation_tour", target: "heading" },
    nextFocusIntent: { group: "route_observation_tour", target: "tour:continue" },
    availableActions: [],
    separateRouteControl: null,
    continuation: CITY_THRESHOLD_CONTINUATION,
    cityStateDelta: null,
    identityMaterialClosed: true,
    campaignCommitEnabled: false,
  };
}

function blankObservationIsExact(value) {
  if (!value || containsPrivateContent(value)) return false;
  const sanitized = sanitizeCustodyLedgerObservationState(value);
  return sanitized.packetId === CUSTODY_LEDGER_ROUTE_PACKET_ID
    && sanitized.boardId === OBSERVATION_BOARD
    && sanitized.phase === "near_observations"
    && sanitized.activeGroup === "near_observations"
    && sanitized.observationEvidence.length === 0
    && sanitized.finalizedObservationIds.length === 0
    && sanitized.progress.near === 0
    && sanitized.progress.far === 0
    && sanitized.observationComplete === false
    && sanitized.nextBoundary === "fixed_trace"
    && sanitized.focusIntent?.then === "observation:fixed_trace"
    && sanitized.campaignCommitEnabled === false
    && sanitized.cityStateDelta === null;
}

function blankObservationState(routeState) {
  if (!verifiedProtectedRoute(routeState)) return sanitizedState();
  const observationState = createCustodyLedgerObservationState();
  const state = baseState(
    custodyLedgerRouteObservationPhases.blankObservation,
    custodyLedgerRouteObservationOwners.systemSession,
    custodyLedgerRouteObservationCopy.blank,
  );
  return {
    ...state,
    routeBoard: OBSERVATION_BOARD,
    observationBoard: OBSERVATION_BOARD,
    viewRegistrationStatus: "registered",
    activeGroup: "blank_observation",
    focusIntent: { group: "blank_observation", target: "heading" },
    nextFocusIntent: observationState.focusIntent,
    observationState,
  };
}

export function createCustodyLedgerRouteObservationState(routeState, options = {}) {
  if (options.mode === "demo_tour") return tourState();
  return overviewState(routeState);
}

function exactNearDetailIntent(request) {
  return request?.packetId === CUSTODY_LEDGER_ROUTE_PACKET_ID
    && request.version === CUSTODY_LEDGER_ROUTE_OBSERVATION_VERSION
    && request.mode === "protected"
    && request.action === CUSTODY_LEDGER_NEAR_DETAIL_ACTION
    && request.owner === custodyLedgerRouteObservationOwners.pilot
    && custodyLedgerRouteActivationKinds.includes(request.activationKind)
    && typeof request.eventToken === "string"
    && request.eventToken.length >= 8
    && request.implicit !== true
    && request.stale !== true
    && request.forged !== true
    && request.multiHit !== true
    && request.saveIntent !== true
    && request.routeIntent !== true
    && !Array.isArray(request.actions);
}

export function requestCustodyLedgerNearObservation(state, routeState, request) {
  if (!verifiedProtectedRoute(routeState)
    || state?.mode !== "protected"
    || state?.phase !== custodyLedgerRouteObservationPhases.protectedOverview
    || state.routePhase !== custodyLedgerRoutePhases.protectedActive
    || state.routeBoard !== ROUTE_BOARD
    || !exactNearDetailIntent(request)) {
    return unavailableState(routeState);
  }
  const next = baseState(
    custodyLedgerRouteObservationPhases.systemTransition,
    custodyLedgerRouteObservationOwners.systemState,
    custodyLedgerRouteObservationCopy.transition,
  );
  return {
    ...next,
    viewRegistrationStatus: "pending",
  };
}

export function registerCustodyLedgerNearObservationView(state, routeState, registration) {
  const exactRegistration = registration?.status === "registered"
    && registration.sourceBoard === ROUTE_BOARD
    && registration.targetBoard === OBSERVATION_BOARD
    && registration.worldChanged === false
    && registration.replayRequested === false;
  if (!verifiedProtectedRoute(routeState)
    || state?.phase !== custodyLedgerRouteObservationPhases.systemTransition
    || state.routeBoard !== ROUTE_BOARD
    || state.viewRegistrationStatus !== "pending"
    || !exactRegistration) {
    return unavailableState(routeState);
  }
  return blankObservationState(routeState);
}

export function sanitizeCustodyLedgerRouteObservationState(state, routeState) {
  if (state?.mode === "demo_tour" || state?.phase === custodyLedgerRouteObservationPhases.tour) return tourState();
  if (!verifiedProtectedRoute(routeState) || containsPrivateContent(state)) return sanitizedState();
  if (state?.version === CUSTODY_LEDGER_ROUTE_OBSERVATION_VERSION
    && state.phase === custodyLedgerRouteObservationPhases.blankObservation
    && state.viewRegistrationStatus === "registered"
    && state.routeBoard === OBSERVATION_BOARD
    && state.observationBoard === OBSERVATION_BOARD
    && blankObservationIsExact(state.observationState)) {
    return blankObservationState(routeState);
  }
  return protectedSanitizedState(routeState);
}

export function createCustodyLedgerRouteObservationDispatcher(routeState, options = {}) {
  let state = createCustodyLedgerRouteObservationState(routeState, options);
  const consumedTokens = new Set();
  return Object.freeze({
    getState: () => state,
    snapshot: () => JSON.parse(JSON.stringify(state)),
    dispatch(request) {
      if (typeof request?.eventToken === "string" && consumedTokens.has(request.eventToken)) {
        return { status: "duplicate_suppressed", state };
      }
      if (typeof request?.eventToken === "string") consumedTokens.add(request.eventToken);
      state = requestCustodyLedgerNearObservation(state, routeState, request);
      return {
        status: state.phase === custodyLedgerRouteObservationPhases.systemTransition ? "requested" : "unavailable",
        state,
      };
    },
    registerView(registration) {
      state = registerCustodyLedgerNearObservationView(state, routeState, registration);
      return state;
    },
    recover() {
      state = overviewState(routeState);
      return state;
    },
    sanitize(restoredState = state) {
      state = sanitizeCustodyLedgerRouteObservationState(restoredState, routeState);
      return state;
    },
  });
}
