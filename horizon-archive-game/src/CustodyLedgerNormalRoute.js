import {
  CUSTODY_LEDGER_ROUTE_PACKET_ID,
  CUSTODY_LEDGER_ROUTE_VERSION,
  createCustodyLedgerRouteDispatcher,
  createCustodyLedgerRouteState,
  custodyLedgerRouteActions,
  custodyLedgerRouteOwners,
  custodyLedgerRoutePhases,
} from "./CustodyLedgerRouteState.js";

export const CUSTODY_LEDGER_NORMAL_ROUTE_SAVE_KEY = "horizon-archive-rp002-route-v1";
export const CUSTODY_LEDGER_NORMAL_ROUTE_VERSION = "rp002.normal-route.v1";

const allowedCheckpoints = new Set(["city_threshold", "sc03_arrival"]);
const privateKeys = new Set([
  "privateNotes", "workingSource", "selections", "prose", "feedback", "credentials",
  "endpoints", "payloads", "responses", "externalActionRequests", "sourceContent",
  "learnerSource", "answers", "eventTokens", "inputHistory", "focusHistory",
]);

function predecessorIsExact(value) {
  return value && typeof value === "object"
    && Object.keys(value).sort().join("|") === "cityThresholdAnchorRecorded|civicDistrictRouteAvailable|verificationStatus"
    && value.verificationStatus === "verified"
    && value.cityThresholdAnchorRecorded === true
    && value.civicDistrictRouteAvailable === true;
}

function containsPrivateContent(value) {
  if (!value || typeof value !== "object") return false;
  return Object.keys(value).some((key) => privateKeys.has(key) || containsPrivateContent(value[key]));
}

export function sanitizeCustodyLedgerNormalRouteSave(value, predecessor) {
  if (!predecessorIsExact(predecessor)
    || !value
    || typeof value !== "object"
    || containsPrivateContent(value)
    || Object.keys(value).sort().join("|") !== "checkpoint|cityStateDelta|continuation|lastVerifiedBoundary|packetId|successor|version|worldStateDelta"
    || value.version !== CUSTODY_LEDGER_NORMAL_ROUTE_VERSION
    || value.packetId !== CUSTODY_LEDGER_ROUTE_PACKET_ID
    || !allowedCheckpoints.has(value.checkpoint)
    || value.continuation !== "continuation"
    || value.cityStateDelta !== null
    || value.worldStateDelta !== null
    || value.lastVerifiedBoundary !== "RP-001"
    || value.successor !== null) {
    return null;
  }
  return Object.freeze({
    version: CUSTODY_LEDGER_NORMAL_ROUTE_VERSION,
    packetId: CUSTODY_LEDGER_ROUTE_PACKET_ID,
    checkpoint: value.checkpoint,
    continuation: "continuation",
    cityStateDelta: null,
    worldStateDelta: null,
    lastVerifiedBoundary: "RP-001",
    successor: null,
  });
}

function saveFor(checkpoint) {
  return Object.freeze({
    version: CUSTODY_LEDGER_NORMAL_ROUTE_VERSION,
    packetId: CUSTODY_LEDGER_ROUTE_PACKET_ID,
    checkpoint,
    continuation: "continuation",
    cityStateDelta: null,
    worldStateDelta: null,
    lastVerifiedBoundary: "RP-001",
    successor: null,
  });
}

function normalState(checkpoint, status = "ready") {
  const atArrival = checkpoint === "sc03_arrival";
  return Object.freeze({
    status,
    checkpoint,
    boardId: atArrival ? "SC-03-00" : "SC-02-50",
    owner: atArrival ? custodyLedgerRouteOwners.system : custodyLedgerRouteOwners.pilot,
    message: atArrival
      ? "Recorded civic route followed. District overview restored locally. No city response occurred."
      : "The verified expedition record preserves one reversible civic route.",
    focusIntent: Object.freeze({
      group: "route_transition",
      target: atArrival ? "rp002-arrival-heading" : custodyLedgerRouteActions.enter,
    }),
    availableActions: Object.freeze([
      atArrival ? custodyLedgerRouteActions.returnAccepted : custodyLedgerRouteActions.enter,
    ]),
    continuation: "continuation",
    cityStateDelta: null,
    worldStateDelta: null,
    observationEvidence: Object.freeze([]),
    learningEvidence: Object.freeze([]),
    successor: null,
    authorityGranted: false,
    externalActionEnabled: false,
    examCreditGranted: false,
  });
}

function unavailableState() {
  return Object.freeze({
    ...normalState("city_threshold", "unavailable"),
    owner: custodyLedgerRouteOwners.system,
    message: "Route state was missing, stale, private, or unverifiable. The City Threshold remains the last verified boundary.",
    availableActions: Object.freeze([]),
  });
}

function tourState() {
  return Object.freeze({
    ...normalState("city_threshold", "tour_view_only"),
    boardId: null,
    owner: "SYSTEM // DEMO TOUR",
    message: "Preview only. Campaign route entry is unavailable.",
    availableActions: Object.freeze([]),
  });
}

export function createCustodyLedgerNormalRouteIntent(action, activationKind, eventToken) {
  return Object.freeze({
    packetId: CUSTODY_LEDGER_ROUTE_PACKET_ID,
    version: CUSTODY_LEDGER_ROUTE_VERSION,
    mode: action === custodyLedgerRouteActions.returnAccepted ? "protected" : "campaign",
    action,
    owner: custodyLedgerRouteOwners.pilot,
    activationKind,
    eventToken,
  });
}

export function readCustodyLedgerNormalRoute(storage, predecessor) {
  try {
    return sanitizeCustodyLedgerNormalRouteSave(
      JSON.parse(storage?.getItem(CUSTODY_LEDGER_NORMAL_ROUTE_SAVE_KEY) ?? "null"),
      predecessor,
    );
  } catch {
    return null;
  }
}

export function writeCustodyLedgerNormalRoute(storage, value, predecessor) {
  const safe = sanitizeCustodyLedgerNormalRouteSave(value, predecessor);
  if (!safe) return false;
  storage?.setItem(CUSTODY_LEDGER_NORMAL_ROUTE_SAVE_KEY, JSON.stringify(safe));
  return true;
}

export function clearCustodyLedgerNormalRoute(storage) {
  storage?.removeItem(CUSTODY_LEDGER_NORMAL_ROUTE_SAVE_KEY);
}

/**
 * Thin normal integration over the existing protected route authority.
 * It owns only P0 entry/return and a bounded arrival checkpoint.
 */
export function createCustodyLedgerNormalRouteController(options = {}) {
  const predecessor = options.predecessor;
  const restored = options.restoredSave == null
    ? null
    : sanitizeCustodyLedgerNormalRouteSave(options.restoredSave, predecessor);
  let state = options.mode === "demo_tour"
    ? tourState()
    : !predecessorIsExact(predecessor)
      ? unavailableState()
      : options.restoredSave != null && !restored
        ? unavailableState()
        : normalState(restored?.checkpoint ?? "city_threshold");
  const consumedTokens = new Set();

  return Object.freeze({
    getState: () => state,
    snapshot: () => JSON.parse(JSON.stringify(state)),
    getSave: () => state.status === "ready" ? saveFor(state.checkpoint) : null,
    dispatch(request) {
      if (typeof request?.eventToken === "string" && consumedTokens.has(request.eventToken)) {
        return Object.freeze({ status: "duplicate_suppressed", state });
      }
      if (typeof request?.eventToken === "string") consumedTokens.add(request.eventToken);
      if (options.mode === "demo_tour" || state.status !== "ready") {
        return Object.freeze({ status: "rejected", state });
      }

      if (state.checkpoint === "city_threshold") {
        const dispatcher = createCustodyLedgerRouteDispatcher({ predecessor, continuation: "continuation" });
        const requested = dispatcher.dispatch(request);
        if (requested.status !== "requested" || dispatcher.getState().phase !== custodyLedgerRoutePhases.entryVerification) {
          return Object.freeze({ status: "rejected", state });
        }
        dispatcher.advanceSystem({ predecessor });
        if (dispatcher.getState().phase !== custodyLedgerRoutePhases.protectedArrival
          || dispatcher.getState().protectedBoard !== "SC-03-00") {
          return Object.freeze({ status: "rejected", state });
        }
        state = normalState("sc03_arrival", "ready");
        return Object.freeze({ status: "entered", state, save: saveFor("sc03_arrival") });
      }

      if (state.checkpoint === "sc03_arrival") {
        const marker = {
          packetId: CUSTODY_LEDGER_ROUTE_PACKET_ID,
          version: CUSTODY_LEDGER_ROUTE_VERSION,
          mode: "protected_in_memory",
          boardId: "SC-03-00",
          verified: true,
        };
        const restoredRoute = createCustodyLedgerRouteState({
          restoredState: { version: CUSTODY_LEDGER_ROUTE_VERSION, continuation: "continuation" },
          protectedSessionMarker: marker,
          predecessor,
          continuation: "continuation",
        });
        const dispatcher = createCustodyLedgerRouteDispatcher({
          restoredState: restoredRoute,
          protectedSessionMarker: marker,
          predecessor,
          continuation: "continuation",
        });
        dispatcher.acknowledge(custodyLedgerRouteActions.continueProtected);
        const requested = dispatcher.dispatch(request);
        if (requested.status !== "requested" || dispatcher.getState().phase !== custodyLedgerRoutePhases.returnReconstruction) {
          return Object.freeze({ status: "rejected", state });
        }
        dispatcher.advanceSystem({ reconstructionValid: true });
        if (dispatcher.getState().phase !== custodyLedgerRoutePhases.acceptedRestored) {
          return Object.freeze({ status: "rejected", state });
        }
        dispatcher.acknowledge(custodyLedgerRouteActions.continueAccepted, predecessor);
        if (dispatcher.getState().phase !== custodyLedgerRoutePhases.accepted) {
          return Object.freeze({ status: "rejected", state });
        }
        state = normalState("city_threshold", "ready");
        return Object.freeze({ status: "returned", state, save: saveFor("city_threshold") });
      }

      return Object.freeze({ status: "rejected", state });
    },
  });
}

export { custodyLedgerRouteActions, custodyLedgerRouteOwners };
