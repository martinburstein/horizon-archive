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
  custodyLedgerObservationControls,
  custodyLedgerObservationInterfaceCopy,
  describeCustodyLedgerObservationInterface,
  returnToCustodyLedgerObservationEvidence,
} from "./CustodyLedgerObservation.js";
import {
  createCustodyLedgerSecondNearDispatchOrchestrator,
  custodyLedgerSecondNearDispatchPhases,
  isCustodyLedgerSecondNearRouteReturn,
} from "./CustodyLedgerSecondNearDispatch.js";
import {
  custodyLedgerObservationOwnershipMessages,
  custodyLedgerObservationStages,
  sanitizeCustodyLedgerObservationState,
} from "./custodyLedgerExercise.js";

export const CUSTODY_LEDGER_THIRD_NEAR_COMPLETION_VERSION = "rp002.third-near-completion.v1";

export const custodyLedgerThirdNearCompletionPhases = Object.freeze({
  verifiedTwoId: "TD-00",
  recordedReplay: "TD-R",
  thirdAcknowledgement: "TD-10",
  unavailable: "TD-U",
  tour: "TD-T",
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
  const exactNearIds = safe.finalizedObservationIds.filter((id) => (
    custodyLedgerObservationStages.near.includes(id)
  ));
  const exact = exactObject(value, safe)
    && exactNearIds.length === count
    && safe.finalizedObservationIds.length === count
    && safe.progress.near === count
    && safe.progress.far === 0
    && safe.observationComplete === false
    && safe.campaignCommitEnabled === false
    && safe.cityStateDelta === null;
  if (count === 2) {
    return exact && safe.phase === "near_observations" ? safe : null;
  }
  return exact && count === custodyLedgerObservationStages.near.length
    && safe.phase === "far_observations"
    ? safe
    : null;
}

function sanitizedNearEvidence(value, count) {
  const safe = sanitizeCustodyLedgerObservationState(value);
  return exactNearEvidence(safe, count);
}

function verifiedTwoIdBoundary({
  routeObservationState,
  routeState,
  firstNearState,
  secondNearState,
}) {
  if (!secondNearState || containsPrivateContent(secondNearState)) return null;
  const authority = createCustodyLedgerSecondNearDispatchOrchestrator({
    routeObservationState,
    routeState,
    firstNearState,
    restoredState: secondNearState,
  });
  const canonical = authority.getState();
  return canonical.phase === custodyLedgerSecondNearDispatchPhases.verifiedTwoId
    && exactObject(secondNearState, canonical)
    && exactNearEvidence(canonical.observationState, 2)
    ? canonical
    : null;
}

function invariantFields(twoIdBoundary) {
  return {
    continuation: twoIdBoundary?.continuation ?? null,
    cityStateDelta: null,
    identityMaterialClosed: true,
    campaignCommitEnabled: false,
    scoringEnabled: false,
    learningEvidenceEnabled: false,
    reviewEnabled: false,
    saveEnabled: false,
    restoreEnabled: false,
    comparisonActivated: false,
    farEvidenceEnabled: false,
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

function dormantCompletionInterface() {
  const completionStatus = Object.freeze({
    owner: custodyLedgerRouteOwners.system,
    text: custodyLedgerObservationInterfaceCopy.nearComplete,
  });
  return Object.freeze({
    activeGroup: "near_completion_ready",
    primary: completionStatus,
    status: null,
    actionIds: Object.freeze([]),
    control: custodyLedgerObservationControls.compareScale,
    focusIntent: Object.freeze({ group: "near_completion_ready", target: "heading" }),
    nextFocusIntent: Object.freeze({ group: "near_completion_ready", target: "compare_scale" }),
  });
}

function stateView(phase, twoIdBoundary, observationState, failureReason = null, dormant = false) {
  const safe = observationState ? sanitizeCustodyLedgerObservationState(observationState) : null;
  const acknowledgement = phase === custodyLedgerThirdNearCompletionPhases.thirdAcknowledgement
    || phase === custodyLedgerThirdNearCompletionPhases.recordedReplay;
  const model = acknowledgement && !dormant ? observationState : safe;
  const view = phase === custodyLedgerThirdNearCompletionPhases.tour
    ? null
    : dormant ? dormantCompletionInterface() : model ? describeCustodyLedgerObservationInterface(model) : null;
  const evidenceGroup = phase === custodyLedgerThirdNearCompletionPhases.verifiedTwoId
    || phase === custodyLedgerThirdNearCompletionPhases.unavailable;
  const controls = safe && evidenceGroup
    ? describeCustodyLedgerHotspotControls(safe)
    : Object.freeze([]);
  const focusIntent = dormant
    ? view.focusIntent
    : model?.focusIntent ?? { group: "third_near_completion", target: "heading" };
  const nextFocusIntent = dormant
    ? view.nextFocusIntent
    : model?.nextFocusIntent ?? safe?.focusIntent ?? null;
  return Object.freeze({
    packetId: twoIdBoundary?.packetId ?? CUSTODY_LEDGER_ROUTE_PACKET_ID,
    version: CUSTODY_LEDGER_THIRD_NEAR_COMPLETION_VERSION,
    mode: phase === custodyLedgerThirdNearCompletionPhases.tour ? "demo_tour" : "protected",
    phase,
    boardId: phase === custodyLedgerThirdNearCompletionPhases.tour ? null : twoIdBoundary?.boardId ?? null,
    stage: phase === custodyLedgerThirdNearCompletionPhases.tour ? null : twoIdBoundary?.stage ?? null,
    activeGroup: phase === custodyLedgerThirdNearCompletionPhases.tour
      ? "third_near_completion_tour"
      : dormant ? "near_completion_ready" : model?.activeGroup ?? "third_near_completion_unavailable",
    ownerMessage: phase === custodyLedgerThirdNearCompletionPhases.tour
      ? custodyLedgerObservationOwnershipMessages.tour
      : phase === custodyLedgerThirdNearCompletionPhases.unavailable
        ? custodyLedgerObservationOwnershipMessages.unavailable
        : view?.primary ?? null,
    interface: view,
    controls,
    separateRouteControl: phase === custodyLedgerThirdNearCompletionPhases.tour
      ? null
      : twoIdBoundary?.separateRouteControl ?? null,
    observationState: model,
    focusIntent,
    nextFocusIntent,
    compareScaleControl: phase === custodyLedgerThirdNearCompletionPhases.thirdAcknowledgement
      ? view?.control ?? null
      : null,
    activationKinds: Object.freeze([...custodyLedgerRouteActivationKinds]),
    failureReason,
    ...invariantFields(twoIdBoundary),
  });
}

function exactCampaignIntent(intent, twoIdBoundary) {
  return intent?.packetId === twoIdBoundary.packetId
    && intent.mode === "campaign"
    && intent.owner === custodyLedgerRouteOwners.pilot
    && intent.boardId === twoIdBoundary.boardId
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
    && intent.comparisonIntent !== true
    && !Array.isArray(intent.actions)
    && !containsPrivateContent(intent);
}

function retainedRecordsAreByteStable(before, after) {
  return before.observationEvidence.every((record) => {
    const retained = after.observationEvidence.find((candidate) => (
      candidate.observationId === record.observationId
    ));
    return retained && exactObject(record, retained);
  });
}

function validThirdResult(result, twoIdEvidence) {
  const safe = sanitizeCustodyLedgerObservationState(result?.state);
  const remainingId = custodyLedgerObservationStages.near.find((id) => (
    !twoIdEvidence.finalizedObservationIds.includes(id)
  ));
  return result?.status === "recorded"
    && result.semanticHotspotId
    && result.observationId === remainingId
    && result.state?.activeGroup === "observation_statement"
    && result.state?.activeObservation?.observationId === remainingId
    && result.state?.activeObservation?.status === "finalized"
    && safe.phase === "far_observations"
    && safe.finalizedObservationIds.length === custodyLedgerObservationStages.near.length
    && safe.finalizedObservationIds.every((id) => custodyLedgerObservationStages.near.includes(id))
    && retainedRecordsAreByteStable(twoIdEvidence, safe)
    && safe.progress.near === custodyLedgerObservationStages.near.length
    && safe.progress.far === 0
    && safe.observationComplete === false;
}

function validReplayResult(result, twoIdEvidence) {
  const safe = sanitizeCustodyLedgerObservationState(result?.state);
  return result?.status === "replayed"
    && twoIdEvidence.finalizedObservationIds.includes(result.observationId)
    && result.state?.activeGroup === "observation_revisit"
    && result.state?.activeObservation?.observationId === result.observationId
    && result.state?.activeObservation?.status === "already_recorded"
    && exactObject(safe, twoIdEvidence);
}

export function createCustodyLedgerThirdNearCompletionOrchestrator({
  routeObservationState,
  routeState,
  firstNearState,
  secondNearState,
  mode = "protected",
  restoredState = null,
} = {}) {
  if (mode === "demo_tour" || routeObservationState?.mode === "demo_tour") {
    let state = stateView(custodyLedgerThirdNearCompletionPhases.tour, null, null);
    return Object.freeze({
      getState: () => state,
      dispatch: () => Object.freeze({ status: "tour_view_only", state }),
      recover: () => state,
      getCompareScaleControl: () => null,
      getSeparateRouteControl: () => null,
      snapshot: () => Object.freeze({ state }),
    });
  }

  const twoIdBoundary = verifiedTwoIdBoundary({
    routeObservationState,
    routeState,
    firstNearState,
    secondNearState,
  });
  const twoIdEvidence = twoIdBoundary?.observationState ?? null;
  const restoredThree = exactNearEvidence(restoredState?.observationState, 3);
  const canonicalCompletion = restoredThree && twoIdEvidence
    && retainedRecordsAreByteStable(twoIdEvidence, restoredThree)
    ? stateView(
      custodyLedgerThirdNearCompletionPhases.thirdAcknowledgement,
      twoIdBoundary,
      restoredThree,
      null,
      true,
    )
    : null;
  let state = !twoIdBoundary
    ? stateView(custodyLedgerThirdNearCompletionPhases.unavailable, null, null, "unverified_two_id_boundary")
    : canonicalCompletion && exactObject(restoredState, canonicalCompletion)
      ? canonicalCompletion
      : stateView(custodyLedgerThirdNearCompletionPhases.verifiedTwoId, twoIdBoundary, twoIdEvidence);
  const consumedEventTokens = new Set();

  function fail(reason) {
    state = stateView(
      custodyLedgerThirdNearCompletionPhases.unavailable,
      twoIdBoundary,
      twoIdEvidence,
      reason,
    );
    return Object.freeze({ status: "unavailable", reason, state });
  }

  function dispatch(intent = {}) {
    if (!twoIdBoundary) return fail("unverified_two_id_boundary");
    if (typeof intent.eventToken === "string" && consumedEventTokens.has(intent.eventToken)) {
      return Object.freeze({ status: "duplicate_suppressed", reason: "event_token_consumed", state });
    }
    if (typeof intent.eventToken === "string" && /^[A-Za-z0-9._:-]{1,128}$/.test(intent.eventToken)) {
      consumedEventTokens.add(intent.eventToken);
    }
    if (state.phase !== custodyLedgerThirdNearCompletionPhases.verifiedTwoId) {
      return Object.freeze({ status: "unavailable", reason: "third_dispatch_closed", state });
    }
    if (!exactCampaignIntent(intent, twoIdBoundary)) return fail("invalid_campaign_activation");

    const dispatcher = createCustodyLedgerHotspotDispatcher({ initialState: twoIdEvidence });
    const result = dispatcher.dispatch(intent);
    if (validReplayResult(result, twoIdEvidence)) {
      state = stateView(custodyLedgerThirdNearCompletionPhases.recordedReplay, twoIdBoundary, result.state);
      return Object.freeze({
        status: "replayed",
        semanticHotspotId: result.semanticHotspotId,
        observationId: result.observationId,
        state,
      });
    }
    if (!validThirdResult(result, twoIdEvidence)) return fail(result.reason ?? result.status ?? "dispatch_unavailable");

    state = stateView(
      custodyLedgerThirdNearCompletionPhases.thirdAcknowledgement,
      twoIdBoundary,
      result.state,
    );
    return Object.freeze({
      status: "recorded",
      semanticHotspotId: result.semanticHotspotId,
      observationId: result.observationId,
      state,
    });
  }

  function returnFromReplay() {
    if (state.phase !== custodyLedgerThirdNearCompletionPhases.recordedReplay) {
      return Object.freeze({ status: "unavailable", reason: "recorded_replay_not_active", state });
    }
    const returned = returnToCustodyLedgerObservationEvidence(state.observationState);
    const safe = exactNearEvidence(returned, 2);
    if (!safe || !retainedRecordsAreByteStable(twoIdEvidence, safe)) {
      return fail("invalid_two_id_boundary");
    }
    state = stateView(custodyLedgerThirdNearCompletionPhases.verifiedTwoId, twoIdBoundary, safe);
    return Object.freeze({ status: "returned_to_two_id_evidence", state });
  }

  function recover() {
    if (!twoIdBoundary) return state;
    state = stateView(custodyLedgerThirdNearCompletionPhases.verifiedTwoId, twoIdBoundary, twoIdEvidence);
    return state;
  }

  function snapshot() {
    const three = sanitizedNearEvidence(state.observationState, 3);
    if (three) {
      return Object.freeze({
        state: stateView(
          custodyLedgerThirdNearCompletionPhases.thirdAcknowledgement,
          twoIdBoundary,
          three,
          null,
          true,
        ),
      });
    }
    return Object.freeze({
      state: stateView(custodyLedgerThirdNearCompletionPhases.verifiedTwoId, twoIdBoundary, twoIdEvidence),
    });
  }

  return Object.freeze({
    getState: () => state,
    dispatch,
    returnFromReplay,
    recover,
    getCompareScaleControl: () => (
      state.phase === custodyLedgerThirdNearCompletionPhases.thirdAcknowledgement
        ? state.compareScaleControl
        : null
    ),
    getSeparateRouteControl: () => state.separateRouteControl,
    snapshot,
  });
}

export function isCustodyLedgerThirdNearRouteReturn(value) {
  return isCustodyLedgerSecondNearRouteReturn(value)
    && value.owner === custodyLedgerRouteOwners.pilot;
}
