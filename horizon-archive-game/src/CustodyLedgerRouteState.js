export const CUSTODY_LEDGER_ROUTE_VERSION = "rp002.route.v1";
export const CUSTODY_LEDGER_ROUTE_PACKET_ID = "RP-002";
export const CUSTODY_LEDGER_ROUTE_MIN_TARGET_CSS_PX = 44;

export const custodyLedgerRoutePhases = Object.freeze({
  accepted: "RT-00",
  entryVerification: "RT-10",
  protectedArrival: "RT-20",
  protectedActive: "RT-30",
  returnReconstruction: "RT-40",
  acceptedRestored: "RT-50",
  unavailable: "RT-U",
  sanitized: "RT-S",
  tour: "RT-T",
});

export const custodyLedgerRouteActions = Object.freeze({
  enter: "FOLLOW RECORDED CIVIC ROUTE",
  continueProtected: "CONTINUE PROTECTED SURVEY",
  returnAccepted: "RETURN TO CITY THRESHOLD",
  recoverUnavailable: "RETURN TO VERIFIED BOUNDARY",
  recoverSanitized: "CONTINUE AT VERIFIED BOUNDARY",
  continueAccepted: "CONTINUE AT CITY THRESHOLD",
});

export const custodyLedgerRouteOwners = Object.freeze({
  system: "SYSTEM // EXPEDITION STATE",
  pilot: "PILOT // FLIGHT RECORDER",
  tour: "SYSTEM // DEMO TOUR",
});

export const custodyLedgerRouteActivationKinds = Object.freeze([
  "pointer",
  "touch",
  "keyboard_enter",
  "keyboard_space",
  "switch",
  "speech",
  "screen_reader",
]);

const ACCEPTED_BOUNDARY = "RP-001";
const PROTECTED_BOARD = "SC-03-00";
const ACCEPTED_CONTROL = "accepted-boundary:next-control";
const PRIVATE_KEYS = new Set([
  "privateNotes", "workingSource", "selections", "prose", "feedback", "credentials",
  "endpoints", "payloads", "responses", "externalActionRequests", "pointerPath",
  "focusHistory", "inputHistory", "eventTokens", "routeRequestHistory",
]);

const copy = Object.freeze({
  accepted: "Verified expedition records make a protected survey route available. No city response occurred.",
  unavailable: "Route request unavailable or ambiguous. Return to the verified expedition boundary.",
  verifying: "Verifying expedition-held predecessor records locally. No external action is occurring.",
  arrival: "Protected survey staging is ready at SC-03-00. This is not accepted campaign progress.",
  active: "Protected survey active. Return remains available; route controls create no learning or save evidence.",
  reconstructing: "Clearing temporary protected-session data and reconstructing the verified expedition boundary.",
  restored: "City Threshold boundary restored locally. Accepted campaign records remain unchanged.",
  sanitized: "Unverified route state cleared. Continue at the last verified expedition boundary.",
  tour: "Preview only. No Pilot route action or campaign checkpoint is available.",
});

function exactVerifiedPredecessor(predecessor) {
  return predecessor && typeof predecessor === "object"
    && Object.keys(predecessor).sort().join("|") === "cityThresholdAnchorRecorded|civicDistrictRouteAvailable|verificationStatus"
    && predecessor.verificationStatus === "verified"
    && predecessor.cityThresholdAnchorRecorded === true
    && predecessor.civicDistrictRouteAvailable === true;
}

function actionDescriptor(action, owner, label = action) {
  return Object.freeze({
    action,
    label,
    accessibleName: label,
    owner,
    minWidthCssPx: CUSTODY_LEDGER_ROUTE_MIN_TARGET_CSS_PX,
    minHeightCssPx: CUSTODY_LEDGER_ROUTE_MIN_TARGET_CSS_PX,
    meaningUsesColorAlone: false,
    motionRequired: false,
  });
}

function baseState(phase, options = {}) {
  const protectedSession = phase === custodyLedgerRoutePhases.protectedArrival
    || phase === custodyLedgerRoutePhases.protectedActive
    || phase === custodyLedgerRoutePhases.returnReconstruction;
  return {
    packetId: CUSTODY_LEDGER_ROUTE_PACKET_ID,
    version: CUSTODY_LEDGER_ROUTE_VERSION,
    mode: "campaign",
    phase,
    lastVerifiedBoundary: ACCEPTED_BOUNDARY,
    protectedBoard: protectedSession ? PROTECTED_BOARD : null,
    protectedSession,
    continuation: options.continuation ?? null,
    cityStateDelta: null,
    identityMaterialClosed: true,
    activeGroup: "route_transition",
    ownerMessage: { owner: custodyLedgerRouteOwners.system, text: copy.sanitized },
    focusIntent: { group: "route_transition", target: "heading" },
    nextFocusIntent: { group: "accepted_boundary", target: ACCEPTED_CONTROL },
    availableActions: [],
  };
}

function acceptedState(predecessor, options = {}) {
  if (!exactVerifiedPredecessor(predecessor)) return unavailableState(options);
  const state = baseState(custodyLedgerRoutePhases.accepted, options);
  return {
    ...state,
    predecessor: {
      verificationStatus: "verified",
      cityThresholdAnchorRecorded: true,
      civicDistrictRouteAvailable: true,
    },
    ownerMessage: { owner: custodyLedgerRouteOwners.system, text: copy.accepted },
    focusIntent: { group: "route_transition", target: "heading" },
    nextFocusIntent: { group: "route_transition", target: custodyLedgerRouteActions.enter },
    availableActions: [actionDescriptor(custodyLedgerRouteActions.enter, custodyLedgerRouteOwners.pilot)],
  };
}

function unavailableState(options = {}) {
  const state = baseState(custodyLedgerRoutePhases.unavailable, options);
  return {
    ...state,
    ownerMessage: { owner: custodyLedgerRouteOwners.system, text: copy.unavailable },
    availableActions: [actionDescriptor(custodyLedgerRouteActions.recoverUnavailable, custodyLedgerRouteOwners.system)],
  };
}

function sanitizedState(options = {}) {
  const state = baseState(custodyLedgerRoutePhases.sanitized, options);
  return {
    ...state,
    ownerMessage: { owner: custodyLedgerRouteOwners.system, text: copy.sanitized },
    availableActions: [actionDescriptor(custodyLedgerRouteActions.recoverSanitized, custodyLedgerRouteOwners.system)],
  };
}

function protectedMarkerIsValid(marker) {
  return marker?.packetId === CUSTODY_LEDGER_ROUTE_PACKET_ID
    && marker.version === CUSTODY_LEDGER_ROUTE_VERSION
    && marker.mode === "protected_in_memory"
    && marker.boardId === PROTECTED_BOARD
    && marker.verified === true;
}

function tourState() {
  return {
    packetId: CUSTODY_LEDGER_ROUTE_PACKET_ID,
    version: CUSTODY_LEDGER_ROUTE_VERSION,
    mode: "demo_tour",
    phase: custodyLedgerRoutePhases.tour,
    lastVerifiedBoundary: null,
    protectedBoard: null,
    protectedSession: false,
    cityStateDelta: null,
    identityMaterialClosed: true,
    activeGroup: "tour_preview",
    ownerMessage: { owner: custodyLedgerRouteOwners.tour, text: copy.tour },
    focusIntent: { group: "tour_preview", target: "heading" },
    nextFocusIntent: { group: "tour_preview", target: "tour:continue" },
    availableActions: [],
  };
}

function containsPrivateContent(value) {
  if (!value || typeof value !== "object") return false;
  return Object.keys(value).some((key) => PRIVATE_KEYS.has(key) || containsPrivateContent(value[key]));
}

export function createCustodyLedgerRouteState(options = {}) {
  if (options.mode === "demo_tour") return tourState();
  if (options.restoredState) {
    if (options.restoredState.version !== CUSTODY_LEDGER_ROUTE_VERSION || containsPrivateContent(options.restoredState)) {
      return sanitizedState(options);
    }
    if (protectedMarkerIsValid(options.protectedSessionMarker)) {
      const state = baseState(custodyLedgerRoutePhases.protectedArrival, options);
      return {
        ...state,
        ownerMessage: { owner: custodyLedgerRouteOwners.system, text: copy.arrival },
        nextFocusIntent: { group: "route_transition", target: custodyLedgerRouteActions.continueProtected },
        availableActions: [actionDescriptor(custodyLedgerRouteActions.continueProtected, custodyLedgerRouteOwners.system)],
      };
    }
    return sanitizedState(options);
  }
  return acceptedState(options.predecessor, options);
}

function intentIsExact(request, action, owner, mode) {
  return request?.packetId === CUSTODY_LEDGER_ROUTE_PACKET_ID
    && request.version === CUSTODY_LEDGER_ROUTE_VERSION
    && request.mode === mode
    && request.action === action
    && request.owner === owner
    && custodyLedgerRouteActivationKinds.includes(request.activationKind)
    && typeof request.eventToken === "string"
    && request.eventToken.length >= 8
    && request.implicit !== true
    && request.stale !== true
    && request.forged !== true
    && request.multiHit !== true
    && request.saveIntent !== true
    && !Array.isArray(request.actions);
}

function failClosed(state) {
  return unavailableState({ continuation: state?.continuation ?? null });
}

export function requestCustodyLedgerRouteTransition(state, request) {
  if (state?.mode === "demo_tour" || request?.mode === "demo_tour") return failClosed(state);
  if (state?.phase === custodyLedgerRoutePhases.accepted) {
    if (!intentIsExact(request, custodyLedgerRouteActions.enter, custodyLedgerRouteOwners.pilot, "campaign")) return failClosed(state);
    const next = baseState(custodyLedgerRoutePhases.entryVerification, state);
    return {
      ...next,
      predecessor: state.predecessor,
      ownerMessage: { owner: custodyLedgerRouteOwners.system, text: copy.verifying },
    };
  }
  if (state?.phase === custodyLedgerRoutePhases.protectedActive) {
    if (!intentIsExact(request, custodyLedgerRouteActions.returnAccepted, custodyLedgerRouteOwners.pilot, "protected")) return failClosed(state);
    const next = baseState(custodyLedgerRoutePhases.returnReconstruction, state);
    return {
      ...next,
      predecessor: state.predecessor,
      ownerMessage: { owner: custodyLedgerRouteOwners.system, text: copy.reconstructing },
    };
  }
  return failClosed(state);
}

export function advanceCustodyLedgerRouteSystem(state, options = {}) {
  if (state?.phase === custodyLedgerRoutePhases.entryVerification) {
    if (!exactVerifiedPredecessor(options.predecessor)) return failClosed(state);
    const next = baseState(custodyLedgerRoutePhases.protectedArrival, state);
    return {
      ...next,
      predecessor: {
        verificationStatus: "verified",
        cityThresholdAnchorRecorded: true,
        civicDistrictRouteAvailable: true,
      },
      ownerMessage: { owner: custodyLedgerRouteOwners.system, text: copy.arrival },
      nextFocusIntent: { group: "route_transition", target: custodyLedgerRouteActions.continueProtected },
      availableActions: [actionDescriptor(custodyLedgerRouteActions.continueProtected, custodyLedgerRouteOwners.system)],
    };
  }
  if (state?.phase === custodyLedgerRoutePhases.returnReconstruction) {
    if (options.reconstructionValid !== true) return sanitizedState(state);
    const next = baseState(custodyLedgerRoutePhases.acceptedRestored, state);
    return {
      ...next,
      predecessor: state.predecessor,
      ownerMessage: { owner: custodyLedgerRouteOwners.system, text: copy.restored },
      availableActions: [actionDescriptor(custodyLedgerRouteActions.continueAccepted, custodyLedgerRouteOwners.system)],
    };
  }
  return sanitizedState(state);
}

export function acknowledgeCustodyLedgerRouteState(state, action, predecessor) {
  if (state?.phase === custodyLedgerRoutePhases.protectedArrival && action === custodyLedgerRouteActions.continueProtected) {
    const next = baseState(custodyLedgerRoutePhases.protectedActive, state);
    return {
      ...next,
      predecessor: state.predecessor,
      ownerMessage: { owner: custodyLedgerRouteOwners.system, text: copy.active },
      focusIntent: { group: "route_transition", target: "heading" },
      nextFocusIntent: { group: "protected_sc03", target: "first-incomplete-action" },
      availableActions: [actionDescriptor(custodyLedgerRouteActions.returnAccepted, custodyLedgerRouteOwners.pilot)],
    };
  }
  if (state?.phase === custodyLedgerRoutePhases.acceptedRestored && action === custodyLedgerRouteActions.continueAccepted) {
    return acceptedState(predecessor ?? state.predecessor, state);
  }
  if ((state?.phase === custodyLedgerRoutePhases.unavailable && action === custodyLedgerRouteActions.recoverUnavailable)
    || (state?.phase === custodyLedgerRoutePhases.sanitized && action === custodyLedgerRouteActions.recoverSanitized)) {
    return acceptedState(predecessor, state);
  }
  return failClosed(state);
}

export function sanitizeCustodyLedgerRouteState(state, options = {}) {
  return createCustodyLedgerRouteState({
    restoredState: state,
    protectedSessionMarker: options.protectedSessionMarker,
    predecessor: options.predecessor,
    continuation: state?.continuation ?? null,
  });
}

export function createCustodyLedgerRouteDispatcher(options = {}) {
  let state = createCustodyLedgerRouteState(options);
  const consumedTokens = new Set();
  return Object.freeze({
    getState: () => state,
    snapshot: () => JSON.parse(JSON.stringify(state)),
    dispatch(request) {
      if (typeof request?.eventToken === "string" && consumedTokens.has(request.eventToken)) {
        return { status: "duplicate_suppressed", state };
      }
      if (typeof request?.eventToken === "string") consumedTokens.add(request.eventToken);
      state = requestCustodyLedgerRouteTransition(state, request);
      return { status: state.phase === custodyLedgerRoutePhases.unavailable ? "unavailable" : "requested", state };
    },
    advanceSystem(stepOptions) {
      state = advanceCustodyLedgerRouteSystem(state, stepOptions);
      return state;
    },
    acknowledge(action, predecessor) {
      state = acknowledgeCustodyLedgerRouteState(state, action, predecessor);
      return state;
    },
  });
}
