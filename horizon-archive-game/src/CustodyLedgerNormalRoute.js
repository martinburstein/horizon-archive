import {
  CUSTODY_LEDGER_ROUTE_PACKET_ID,
  CUSTODY_LEDGER_ROUTE_VERSION,
  createCustodyLedgerRouteDispatcher,
  custodyLedgerRouteActions,
  custodyLedgerRouteActivationKinds,
  custodyLedgerRouteOwners,
  custodyLedgerRoutePhases,
} from "./CustodyLedgerRouteState.js";
import {
  CUSTODY_LEDGER_NEAR_DETAIL_ACTION,
  CUSTODY_LEDGER_ROUTE_OBSERVATION_VERSION,
  createCustodyLedgerRouteObservationDispatcher,
  createCustodyLedgerRouteObservationState,
  custodyLedgerRouteObservationOwners,
  custodyLedgerRouteObservationPhases,
} from "./CustodyLedgerRouteObservationState.js";
import {
  createCustodyLedgerFirstNearDispatchOrchestrator,
  custodyLedgerFirstNearDispatchPhases,
} from "./CustodyLedgerFirstNearDispatch.js";
import {
  createCustodyLedgerSecondNearDispatchOrchestrator,
  custodyLedgerSecondNearDispatchPhases,
} from "./CustodyLedgerSecondNearDispatch.js";
import {
  CUSTODY_LEDGER_HOTSPOT_REGISTRY_VERSION,
  createCustodyLedgerHotspotDispatcher,
  custodyLedgerHotspotRegistry,
} from "./CustodyLedgerHotspots.js";
import {
  custodyLedgerObservationControls,
  describeCustodyLedgerObservationInterface,
} from "./CustodyLedgerObservation.js";
import {
  custodyLedgerObservationStages,
  sanitizeCustodyLedgerObservationState,
} from "./custodyLedgerExercise.js";

export const CUSTODY_LEDGER_NORMAL_ROUTE_SAVE_KEY = "horizon-archive-rp002-route-v1";
export const CUSTODY_LEDGER_NORMAL_ROUTE_VERSION = "rp002.normal-route.v1";

const allowedCheckpoints = new Set([
  "city_threshold",
  "sc03_arrival",
  "sc03_survey_overview",
  "sc03_near_blank",
  "sc03_near_first",
  "sc03_near_second",
]);
const privateKeys = new Set([
  "privateNotes", "workingSource", "selections", "prose", "feedback", "credentials",
  "endpoints", "payloads", "responses", "externalActionRequests", "sourceContent",
  "learnerSource", "answers", "eventTokens", "inputHistory", "focusHistory",
]);
const nearHotspotByLabel = new Map(custodyLedgerHotspotRegistry
  .filter((entry) => entry.boardId === "SC-03-10" && custodyLedgerObservationStages.near.includes(entry.observationId))
  .map((entry) => [entry.actionLabel, entry]));
const nearHotspotByObservationId = new Map(custodyLedgerHotspotRegistry
  .filter((entry) => entry.boardId === "SC-03-10" && custodyLedgerObservationStages.near.includes(entry.observationId))
  .map((entry) => [entry.observationId, entry]));

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

function boundedFirstObservationEvidence(value) {
  const safe = sanitizeCustodyLedgerObservationState({
    observationEvidence: value == null ? [] : [value],
  });
  return safe.finalizedObservationIds.length === 1
    && custodyLedgerObservationStages.near.includes(safe.finalizedObservationIds[0])
    && safe.progress.near === 1
    && safe.progress.far === 0
      ? safe.observationEvidence[0]
      : null;
}

function boundedSecondObservationEvidence(value) {
  if (!Array.isArray(value) || value.length !== 2) return null;
  const safe = sanitizeCustodyLedgerObservationState({ observationEvidence: value });
  const exactRecords = value.every((record) => {
    const canonical = safe.observationEvidence.find((candidate) => candidate.observationId === record?.observationId);
    return canonical && JSON.stringify(canonical) === JSON.stringify(record);
  });
  return safe.finalizedObservationIds.length === 2
    && safe.finalizedObservationIds.every((id) => custodyLedgerObservationStages.near.includes(id))
    && safe.progress.near === 2
    && safe.progress.far === 0
    && safe.observationComplete === false
    && safe.campaignCommitEnabled === false
    && exactRecords
      ? Object.freeze([...value])
      : null;
}

export function sanitizeCustodyLedgerNormalRouteSave(value, predecessor) {
  const keys = Object.keys(value ?? {}).sort().join("|");
  const legacyKeys = "checkpoint|cityStateDelta|continuation|lastVerifiedBoundary|packetId|successor|version|worldStateDelta";
  const currentKeys = "checkpoint|cityStateDelta|continuation|lastVerifiedBoundary|observationEvidence|packetId|successor|version|worldStateDelta";
  const firstEvidence = boundedFirstObservationEvidence(value?.observationEvidence);
  const secondEvidence = boundedSecondObservationEvidence(value?.observationEvidence);
  if (!predecessorIsExact(predecessor)
    || !value
    || typeof value !== "object"
    || containsPrivateContent(value)
    || (keys !== legacyKeys && keys !== currentKeys)
    || value.version !== CUSTODY_LEDGER_NORMAL_ROUTE_VERSION
    || value.packetId !== CUSTODY_LEDGER_ROUTE_PACKET_ID
    || !allowedCheckpoints.has(value.checkpoint)
    || value.continuation !== "continuation"
    || value.cityStateDelta !== null
    || value.worldStateDelta !== null
    || value.lastVerifiedBoundary !== "RP-001"
    || value.successor !== null
    || (value.checkpoint === "sc03_near_first"
      ? !firstEvidence
      : value.checkpoint === "sc03_near_second"
        ? !secondEvidence
        : value.observationEvidence != null)) {
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
    observationEvidence: value.checkpoint === "sc03_near_first"
      ? firstEvidence
      : value.checkpoint === "sc03_near_second"
        ? secondEvidence
        : null,
    successor: null,
  });
}

function saveFor(checkpoint, observationEvidence = null) {
  const firstEvidence = boundedFirstObservationEvidence(observationEvidence);
  const secondEvidence = boundedSecondObservationEvidence(observationEvidence);
  return Object.freeze({
    version: CUSTODY_LEDGER_NORMAL_ROUTE_VERSION,
    packetId: CUSTODY_LEDGER_ROUTE_PACKET_ID,
    checkpoint,
    continuation: "continuation",
    cityStateDelta: null,
    worldStateDelta: null,
    lastVerifiedBoundary: "RP-001",
    observationEvidence: checkpoint === "sc03_near_first"
      ? firstEvidence
      : checkpoint === "sc03_near_second"
        ? secondEvidence
        : null,
    successor: null,
  });
}

function normalState(checkpoint, status = "ready", observationState = null, dispatchState = null, persistedEvidence = null) {
  const atArrival = checkpoint === "sc03_arrival";
  const atOverview = checkpoint === "sc03_survey_overview";
  const atBlank = checkpoint === "sc03_near_blank";
  const atAcknowledgement = checkpoint === "sc03_near_acknowledgement";
  const atSecondAcknowledgement = checkpoint === "sc03_near_second_acknowledgement";
  const atFirst = checkpoint === "sc03_near_first";
  const atSecond = checkpoint === "sc03_near_second";
  const atNear = atBlank || atAcknowledgement || atSecondAcknowledgement || atFirst || atSecond;
  const safeObservation = atNear && observationState
    ? sanitizeCustodyLedgerObservationState(observationState)
    : null;
  const message = atArrival
    ? "Recorded civic route followed. District overview restored locally. No city response occurred."
    : atOverview
      ? "Protected survey overview ready. Orientation alone records no district evidence."
      : atAcknowledgement || atSecondAcknowledgement
        ? dispatchState?.interface?.primary?.text ?? "One bounded observation was recorded."
        : atSecond
          ? "Two bounded near observations are restored. No event or acknowledgement was replayed."
        : atFirst
          ? "One bounded near observation is restored. No event or acknowledgement was replayed."
          : atBlank
            ? "Near evidence is ready for deliberate inspection. Nothing has been recorded yet."
        : "The verified expedition record preserves one reversible civic route.";
  const nearActions = atAcknowledgement || atSecondAcknowledgement
    ? [custodyLedgerObservationControls.returnToEvidence.label]
    : atFirst || atSecond || atBlank
      ? (dispatchState?.controls ?? []).map((control) => control.label)
        : [];
  const availableActions = atArrival
    ? [custodyLedgerRouteActions.continueProtected, custodyLedgerRouteActions.returnAccepted]
    : atOverview
      ? [CUSTODY_LEDGER_NEAR_DETAIL_ACTION, custodyLedgerRouteActions.returnAccepted]
      : atNear
        ? [...nearActions, custodyLedgerRouteActions.returnAccepted]
        : [custodyLedgerRouteActions.enter];
  return Object.freeze({
    status,
    checkpoint,
    boardId: atNear ? "SC-03-10" : atArrival || atOverview ? "SC-03-00" : "SC-02-50",
    owner: atNear
      ? dispatchState?.ownerMessage?.owner ?? custodyLedgerRouteObservationOwners.systemSession
      : atArrival || atOverview
        ? custodyLedgerRouteOwners.system
        : custodyLedgerRouteOwners.pilot,
    message,
    sceneStatement: atAcknowledgement || atSecondAcknowledgement ? dispatchState?.interface?.primary ?? null : null,
    statusMessage: atAcknowledgement || atSecondAcknowledgement ? dispatchState?.interface?.status ?? null : null,
    focusIntent: Object.freeze({
      group: atNear ? dispatchState?.focusIntent?.group ?? "near_observations" : "route_transition",
      target: atArrival
        ? custodyLedgerRouteActions.continueProtected
        : atOverview
          ? CUSTODY_LEDGER_NEAR_DETAIL_ACTION
          : atNear
            ? "rp002-arrival-heading"
            : custodyLedgerRouteActions.enter,
    }),
    availableActions: Object.freeze(availableActions),
    actionStates: Object.freeze(((atFirst || atSecond) ? dispatchState?.controls ?? [] : []).map((control) => Object.freeze({
      label: control.label,
      status: control.status,
      minWidthCssPx: control.minWidthCssPx,
      minHeightCssPx: control.minHeightCssPx,
    }))),
    routeReturnAction: atNear ? custodyLedgerRouteActions.returnAccepted : null,
    continuation: "continuation",
    cityStateDelta: null,
    worldStateDelta: null,
    accessStateDelta: null,
    observationEvidence: Object.freeze([...(persistedEvidence ?? safeObservation?.observationEvidence ?? [])]),
    learningEvidence: Object.freeze([]),
    masteryEvidence: Object.freeze([]),
    saveEligibility: false,
    ...(atNear ? { observationState: safeObservation, dispatchState } : {}),
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
  const nearHotspot = nearHotspotByLabel.get(action);
  if (nearHotspot) {
    return Object.freeze({
      packetId: CUSTODY_LEDGER_ROUTE_PACKET_ID,
      mode: "campaign",
      owner: custodyLedgerRouteOwners.pilot,
      registryVersion: CUSTODY_LEDGER_HOTSPOT_REGISTRY_VERSION,
      boardId: "SC-03-10",
      semanticHotspotId: nearHotspot.semanticHotspotId,
      activationKind,
      eventToken,
      evidenceReadable: true,
      cropSafe: true,
      candidateSemanticIds: Object.freeze([nearHotspot.semanticHotspotId]),
    });
  }
  const nearDetail = action === CUSTODY_LEDGER_NEAR_DETAIL_ACTION;
  const continueProtected = action === custodyLedgerRouteActions.continueProtected;
  return Object.freeze({
    packetId: CUSTODY_LEDGER_ROUTE_PACKET_ID,
    version: nearDetail ? CUSTODY_LEDGER_ROUTE_OBSERVATION_VERSION : CUSTODY_LEDGER_ROUTE_VERSION,
    mode: action === custodyLedgerRouteActions.enter ? "campaign" : "protected",
    action,
    owner: continueProtected ? custodyLedgerRouteOwners.system : custodyLedgerRouteOwners.pilot,
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

function protectedRouteDispatcher(predecessor) {
  const dispatcher = createCustodyLedgerRouteDispatcher({
    predecessor,
    continuation: "continuation",
  });
  const requested = dispatcher.dispatch({
    packetId: CUSTODY_LEDGER_ROUTE_PACKET_ID,
    version: CUSTODY_LEDGER_ROUTE_VERSION,
    mode: "campaign",
    action: custodyLedgerRouteActions.enter,
    owner: custodyLedgerRouteOwners.pilot,
    activationKind: "screen_reader",
    eventToken: "rp002-protected-reconstruction",
  });
  if (requested.status !== "requested"
    || dispatcher.getState().phase !== custodyLedgerRoutePhases.entryVerification) return null;
  dispatcher.advanceSystem({ predecessor });
  if (dispatcher.getState().phase !== custodyLedgerRoutePhases.protectedArrival) return null;
  dispatcher.acknowledge(custodyLedgerRouteActions.continueProtected);
  return dispatcher.getState().phase === custodyLedgerRoutePhases.protectedActive
    ? dispatcher
    : null;
}

function continueIntentIsExact(request) {
  return request?.packetId === CUSTODY_LEDGER_ROUTE_PACKET_ID
    && request.version === CUSTODY_LEDGER_ROUTE_VERSION
    && request.mode === "protected"
    && request.action === custodyLedgerRouteActions.continueProtected
    && request.owner === custodyLedgerRouteOwners.system
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

function blankObservationFromProtectedRoute(routeState, request) {
  const dispatcher = createCustodyLedgerRouteObservationDispatcher(routeState);
  const requested = dispatcher.dispatch(request);
  if (requested.status !== "requested"
    || dispatcher.getState().phase !== custodyLedgerRouteObservationPhases.systemTransition) return null;
  const registered = dispatcher.registerView({
    status: "registered",
    sourceBoard: "SC-03-00",
    targetBoard: "SC-03-10",
    worldChanged: false,
    replayRequested: false,
  });
  return registered.phase === custodyLedgerRouteObservationPhases.blankObservation
    && registered.observationState?.observationEvidence?.length === 0
    && registered.observationState?.finalizedObservationIds?.length === 0
    && registered.observationState?.progress?.near === 0
    && registered.observationState?.progress?.far === 0
    && registered.observationState?.observationComplete === false
    && registered.observationState?.campaignCommitEnabled === false
      ? registered
      : null;
}

function firstNearOrchestratorFor(predecessor, observationEvidence = null) {
  const routeState = protectedRouteDispatcher(predecessor)?.getState();
  if (!routeState) return null;
  const boundary = blankObservationFromProtectedRoute(routeState, createCustodyLedgerNormalRouteIntent(
    CUSTODY_LEDGER_NEAR_DETAIL_ACTION,
    "screen_reader",
    "rp002-first-near-reconstruction",
  ));
  if (!boundary) return null;
  const evidence = boundedFirstObservationEvidence(observationEvidence);
  const orchestrator = createCustodyLedgerFirstNearDispatchOrchestrator({
    routeObservationState: boundary,
    routeState,
    ...(evidence ? { restoredState: { observationState: { observationEvidence: [evidence] } } } : {}),
  });
  const expected = evidence
    ? custodyLedgerFirstNearDispatchPhases.oneIdEvidence
    : custodyLedgerFirstNearDispatchPhases.verifiedBlank;
  return orchestrator.getState().phase === expected ? orchestrator : null;
}

function secondNearOrchestratorFromFirst(predecessor, observationEvidence) {
  const firstEvidence = boundedFirstObservationEvidence(observationEvidence);
  if (!firstEvidence) return null;
  const routeState = protectedRouteDispatcher(predecessor)?.getState();
  if (!routeState) return null;
  const boundary = blankObservationFromProtectedRoute(routeState, createCustodyLedgerNormalRouteIntent(
    CUSTODY_LEDGER_NEAR_DETAIL_ACTION,
    "screen_reader",
    "rp002-second-near-reconstruction",
  ));
  if (!boundary) return null;
  const first = createCustodyLedgerFirstNearDispatchOrchestrator({
    routeObservationState: boundary,
    routeState,
    restoredState: { observationState: { observationEvidence: [firstEvidence] } },
  });
  if (first.getState().phase !== custodyLedgerFirstNearDispatchPhases.oneIdEvidence) return null;
  const second = createCustodyLedgerSecondNearDispatchOrchestrator({
    routeObservationState: boundary,
    routeState,
    firstNearState: first.getState(),
  });
  return second.getState().phase === custodyLedgerSecondNearDispatchPhases.verifiedOneId
    ? second
    : null;
}

function secondNearOrchestratorFor(predecessor, observationEvidence) {
  const evidence = boundedSecondObservationEvidence(observationEvidence);
  const second = secondNearOrchestratorFromFirst(predecessor, evidence?.[0]);
  if (!second) return null;
  const secondRecord = evidence[1];
  const result = second.dispatch(createCustodyLedgerNormalRouteIntent(
    nearHotspotByObservationId.get(secondRecord.observationId)?.actionLabel,
    "screen_reader",
    "rp002-second-near-restore-record",
  ));
  if (result.status !== "recorded") return null;
  const returned = second.returnToEvidence();
  const restored = boundedSecondObservationEvidence(returned.state.observationState.observationEvidence);
  return returned.status === "returned_to_two_id_evidence"
    && restored
    && evidence.every((record) => restored.some((candidate) => JSON.stringify(candidate) === JSON.stringify(record)))
      ? second
      : null;
}

function returnToAccepted(predecessor, request) {
  const dispatcher = protectedRouteDispatcher(predecessor);
  if (!dispatcher) return null;
  const requested = dispatcher.dispatch(request);
  if (requested.status !== "requested"
    || dispatcher.getState().phase !== custodyLedgerRoutePhases.returnReconstruction) return null;
  dispatcher.advanceSystem({ reconstructionValid: true });
  if (dispatcher.getState().phase !== custodyLedgerRoutePhases.acceptedRestored) return null;
  dispatcher.acknowledge(custodyLedgerRouteActions.continueAccepted, predecessor);
  return dispatcher.getState().phase === custodyLedgerRoutePhases.accepted ? dispatcher.getState() : null;
}

function restoredStateFor(checkpoint, predecessor, observationEvidence = null) {
  if (!["sc03_near_blank", "sc03_near_first", "sc03_near_second"].includes(checkpoint)) {
    return normalState(checkpoint);
  }
  const orchestrator = checkpoint === "sc03_near_second"
    ? secondNearOrchestratorFor(predecessor, observationEvidence)
    : firstNearOrchestratorFor(predecessor, checkpoint === "sc03_near_first" ? observationEvidence : null);
  if (!orchestrator) return unavailableState();
  const dispatchState = orchestrator.getState();
  return normalState(
    checkpoint,
    "ready",
    dispatchState.observationState,
    dispatchState,
    checkpoint === "sc03_near_second" ? observationEvidence : null,
  );
}

/**
 * Thin normal integration over the existing protected route and viewpoint authorities.
 * It owns only reversible SC-03-00 staging and the first two bounded SC-03-10 observations.
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
        : restoredStateFor(
          restored?.checkpoint ?? "city_threshold",
          predecessor,
          restored?.observationEvidence ?? null,
        );
  const consumedTokens = new Set();

  return Object.freeze({
    getState: () => state,
    snapshot: () => JSON.parse(JSON.stringify(state)),
    getSave: () => state.status === "ready"
      ? saveFor(state.checkpoint, state.checkpoint === "sc03_near_first"
        ? state.observationEvidence[0]
        : state.checkpoint === "sc03_near_second"
          ? state.observationEvidence
          : null)
      : null,
    dispatch(request) {
      if (typeof request?.eventToken === "string" && consumedTokens.has(request.eventToken)) {
        return Object.freeze({ status: "duplicate_suppressed", state });
      }
      if (typeof request?.eventToken === "string") consumedTokens.add(request.eventToken);
      if (options.mode === "demo_tour" || state.status !== "ready" || containsPrivateContent(request)) {
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
        state = normalState("sc03_arrival");
        return Object.freeze({ status: "entered", state, save: saveFor("sc03_arrival") });
      }

      if (state.checkpoint === "sc03_arrival") {
        if (request?.action === custodyLedgerRouteActions.returnAccepted) {
          if (!returnToAccepted(predecessor, request)) return Object.freeze({ status: "rejected", state });
          state = normalState("city_threshold");
          return Object.freeze({ status: "returned", state, save: saveFor("city_threshold") });
        }
        if (!continueIntentIsExact(request)) return Object.freeze({ status: "rejected", state });
        const route = protectedRouteDispatcher(predecessor)?.getState();
        const observation = route ? createCustodyLedgerRouteObservationState(route) : null;
        if (observation?.phase !== custodyLedgerRouteObservationPhases.protectedOverview
          || observation.availableActions?.[0]?.action !== CUSTODY_LEDGER_NEAR_DETAIL_ACTION) {
          return Object.freeze({ status: "rejected", state });
        }
        state = normalState("sc03_survey_overview");
        return Object.freeze({ status: "advanced", state, save: saveFor("sc03_survey_overview") });
      }

      if (state.checkpoint === "sc03_survey_overview") {
        if (request?.action === custodyLedgerRouteActions.returnAccepted) {
          if (!returnToAccepted(predecessor, request)) return Object.freeze({ status: "rejected", state });
          state = normalState("city_threshold");
          return Object.freeze({ status: "returned", state, save: saveFor("city_threshold") });
        }
        const route = protectedRouteDispatcher(predecessor)?.getState();
        const boundary = route ? blankObservationFromProtectedRoute(route, request) : null;
        const orchestrator = boundary && route
          ? createCustodyLedgerFirstNearDispatchOrchestrator({ routeObservationState: boundary, routeState: route })
          : null;
        const firstNearState = orchestrator?.getState();
        if (firstNearState?.phase !== custodyLedgerFirstNearDispatchPhases.verifiedBlank) {
          return Object.freeze({ status: "rejected", state });
        }
        state = normalState("sc03_near_blank", "ready", firstNearState.observationState, firstNearState);
        return Object.freeze({ status: "advanced", state, save: saveFor("sc03_near_blank") });
      }

      if (["sc03_near_blank", "sc03_near_first", "sc03_near_second"].includes(state.checkpoint)) {
        if (request?.action === custodyLedgerRouteActions.returnAccepted) {
          if (!returnToAccepted(predecessor, request)) return Object.freeze({ status: "rejected", state });
          state = normalState("city_threshold");
          return Object.freeze({ status: "returned", state, save: saveFor("city_threshold") });
        }

        if (["sc03_near_first", "sc03_near_second"].includes(state.checkpoint)
          && request?.action === custodyLedgerObservationControls.returnToEvidence.label) {
          const evidence = state.checkpoint === "sc03_near_first"
            ? state.observationEvidence[0]
            : state.observationEvidence;
          return Object.freeze({
            status: "returned_to_evidence",
            state,
            save: saveFor(state.checkpoint, evidence),
          });
        }

        if (state.checkpoint === "sc03_near_blank") {
          const validator = firstNearOrchestratorFor(predecessor);
          const validated = validator?.dispatch(request);
          if (validated?.status !== "recorded") return Object.freeze({ status: "rejected", state });
          const evidence = boundedFirstObservationEvidence(
            validated.state.observationState?.observationEvidence?.[0],
          );
          if (!evidence) return Object.freeze({ status: "rejected", state });
          state = normalState(
            "sc03_near_acknowledgement",
            "ready",
            validated.state.observationState,
            validated.state,
          );
          return Object.freeze({
            status: "recorded",
            observationId: validated.observationId,
            state,
            save: saveFor("sc03_near_first", evidence),
          });
        }

        if (state.checkpoint === "sc03_near_first") {
          const savedEvidence = boundedFirstObservationEvidence(state.observationEvidence[0]);
          const validator = secondNearOrchestratorFromFirst(predecessor, savedEvidence);
          const validated = validator?.dispatch(request);
          if (!["recorded", "replayed"].includes(validated?.status)) {
            return Object.freeze({ status: "rejected", reason: validated?.reason ?? "unverified_second_near_boundary", state });
          }
          if (validated.status === "recorded") {
            const secondRecord = validated.state.observationState?.observationEvidence
              ?.find((record) => record.observationId === validated.observationId);
            const evidence = boundedSecondObservationEvidence([savedEvidence, secondRecord]);
            if (!evidence) {
              return Object.freeze({
                status: "rejected",
                reason: "invalid_second_evidence",
                state,
              });
            }
            state = normalState(
              "sc03_near_second_acknowledgement",
              "ready",
              validated.state.observationState,
              validated.state,
              evidence,
            );
            return Object.freeze({
              status: "recorded",
              observationId: validated.observationId,
              state,
              save: saveFor("sc03_near_second", evidence),
            });
          }
          state = normalState(
            "sc03_near_acknowledgement",
            "ready",
            validated.state.observationState,
            validated.state,
          );
          return Object.freeze({
            status: "replayed",
            observationId: validated.observationId,
            state,
            save: saveFor("sc03_near_first", savedEvidence),
          });
        }

        const savedEvidence = boundedSecondObservationEvidence(state.observationEvidence);
        if (!savedEvidence) return Object.freeze({ status: "rejected", state });
        const dispatcher = createCustodyLedgerHotspotDispatcher({ initialState: state.observationState });
        const replay = dispatcher.dispatch(request);
        if (replay.status !== "replayed"
          || !savedEvidence.some((record) => record.observationId === replay.observationId)) {
          return Object.freeze({ status: "rejected", reason: replay.reason ?? replay.status, state });
        }
        const replayInterface = describeCustodyLedgerObservationInterface(replay.state);
        const replayState = Object.freeze({
          phase: custodyLedgerSecondNearDispatchPhases.recordedReplay,
          ownerMessage: replayInterface.primary,
          interface: replayInterface,
          controls: Object.freeze([]),
          observationState: replay.state,
          focusIntent: replay.state.focusIntent,
        });
        state = normalState(
          "sc03_near_second_acknowledgement",
          "ready",
          replay.state,
          replayState,
          savedEvidence,
        );
        return Object.freeze({
          status: "replayed",
          observationId: replay.observationId,
          state,
          save: saveFor("sc03_near_second", savedEvidence),
        });
      }

      return Object.freeze({ status: "rejected", state });
    },
  });
}

export {
  CUSTODY_LEDGER_NEAR_DETAIL_ACTION,
  custodyLedgerRouteActions,
  custodyLedgerRouteOwners,
};
