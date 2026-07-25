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
  createCustodyLedgerThirdNearCompletionOrchestrator,
  custodyLedgerThirdNearCompletionPhases,
} from "./CustodyLedgerThirdNearCompletion.js";
import {
  CUSTODY_LEDGER_HOTSPOT_REGISTRY_VERSION,
  createCustodyLedgerHotspotDispatcher,
  custodyLedgerHotspotRegistry,
} from "./CustodyLedgerHotspots.js";
import {
  custodyLedgerObservationActions,
  custodyLedgerObservationControls,
  custodyLedgerObservationInterfaceCopy,
  describeCustodyLedgerObservationInterface,
} from "./CustodyLedgerObservation.js";
import {
  advanceCustodyLedgerPrerequisite,
  CUSTODY_LEDGER_OBSERVATION_ACTION,
  CUSTODY_LEDGER_BOARD_ID,
  createCustodyLedgerScaffoldFromVerifiedRouteBoundary,
  getCustodyLedgerOwnershipMessage,
  custodyLedgerLocalComparisonBlankMessage,
  custodyLedgerObservationStages,
  recordCustodyLedgerObservation,
  sanitizeCustodyLedgerObservationState,
} from "./custodyLedgerExercise.js";
import { createCustodyLedgerPrimaryInteraction } from "./CustodyLedgerPrimaryInteraction.js";
import { createCustodyLedgerPrimaryResultDismissal } from "./CustodyLedgerPrimaryResultDismissal.js";
import { createCustodyLedgerTransferInteraction } from "./CustodyLedgerTransferInteraction.js";
import { createCustodyLedgerExplanationEntry } from "./CustodyLedgerExplanationEntry.js";
import { createCustodyLedgerExplanationSubmission } from "./CustodyLedgerExplanationSubmission.js";
import {
  CUSTODY_LEDGER_OPEN_RAI_PRIMARY,
  CUSTODY_LEDGER_RAI_PRIMARY_ENTRY_VERSION,
  createCustodyLedgerRAIPrimaryEntry,
} from "./CustodyLedgerRAIPrimaryEntry.js";
import { createCustodyLedgerRAIPrimaryConvergence } from "./CustodyLedgerRAIPrimaryConvergence.js";
import { createCustodyLedgerRAITransferConvergence } from "./CustodyLedgerRAITransferConvergence.js";
import { createCustodyLedgerRAIExplanationConvergence } from "./CustodyLedgerRAIExplanationConvergence.js";
import { createCustodyLedgerRAIConclusionReview } from "./CustodyLedgerRAIConclusionReview.js";

export const CUSTODY_LEDGER_NORMAL_ROUTE_SAVE_KEY = "horizon-archive-rp002-route-v1";
export const CUSTODY_LEDGER_NORMAL_ROUTE_VERSION = "rp002.normal-route.v1";
export const CUSTODY_LEDGER_OPEN_PYTHON_PRIMARY_ACTION = "OPEN UNFINISHED WORK IMAGE";

export function createCustodyLedgerNormalPrimaryInteraction(routeState, predecessor) {
  if (routeState?.checkpoint !== "sc03_python_primary_blank"
    || routeState?.boardId !== CUSTODY_LEDGER_BOARD_ID
    || routeState?.learningState?.phase !== "python_primary"
    || containsPrivateContent(routeState)) return null;
  try {
    return createCustodyLedgerPrimaryInteraction({
      boundary: {
        checkpoint: routeState.checkpoint,
        boardId: routeState.boardId,
        observationEvidence: routeState.observationEvidence,
        predecessor,
        learningState: routeState.learningState,
      },
    });
  } catch {
    return null;
  }
}

export function createCustodyLedgerNormalPrimaryResultDismissal(routeState, primaryResult, predecessor) {
  if (routeState?.checkpoint !== "sc03_python_primary_blank"
    || routeState?.boardId !== CUSTODY_LEDGER_BOARD_ID
    || routeState?.learningState?.phase !== "python_primary"
    || containsPrivateContent(routeState)
    || JSON.stringify(primaryResult?.observationEvidence) !== JSON.stringify(routeState.observationEvidence)
    || JSON.stringify(primaryResult?.predecessor) !== JSON.stringify(predecessor)) return null;
  try {
    return createCustodyLedgerPrimaryResultDismissal({
      primaryResult,
      learningState: routeState.learningState,
    });
  } catch {
    return null;
  }
}

export function createCustodyLedgerNormalTransferInteraction(
  routeState,
  primaryResult,
  freshPracticeState,
  predecessor,
) {
  if (routeState?.checkpoint !== "sc03_python_primary_blank"
    || routeState?.boardId !== CUSTODY_LEDGER_BOARD_ID
    || routeState?.learningState?.phase !== "python_primary"
    || freshPracticeState?.phase !== "DR-20"
    || containsPrivateContent(routeState)
    || JSON.stringify(freshPracticeState?.observationEvidence) !== JSON.stringify(routeState.observationEvidence)
    || JSON.stringify(freshPracticeState?.predecessor) !== JSON.stringify(predecessor)) return null;
  try {
    return createCustodyLedgerTransferInteraction({
      primaryResult,
      learningState: routeState.learningState,
      freshPracticeState,
    });
  } catch {
    return null;
  }
}

export function createCustodyLedgerNormalExplanationEntry(
  routeState,
  primaryResult,
  freshPracticeState,
  transferCompleteState,
  predecessor,
) {
  if (routeState?.checkpoint !== "sc03_python_primary_blank"
    || routeState?.boardId !== CUSTODY_LEDGER_BOARD_ID
    || routeState?.learningState?.phase !== "python_primary"
    || freshPracticeState?.phase !== "DR-20"
    || transferCompleteState?.phase !== "FT-20C"
    || containsPrivateContent(routeState)
    || JSON.stringify(transferCompleteState?.observationEvidence) !== JSON.stringify(routeState.observationEvidence)
    || JSON.stringify(transferCompleteState?.predecessor) !== JSON.stringify(predecessor)) return null;
  try {
    return createCustodyLedgerExplanationEntry({
      primaryResult,
      learningState: routeState.learningState,
      freshPracticeState,
      transferCompleteState,
    });
  } catch {
    return null;
  }
}

export function createCustodyLedgerNormalExplanationSubmission(
  routeState,
  primaryResult,
  freshPracticeState,
  transferCompleteState,
  explanationEntryState,
  predecessor,
) {
  if (routeState?.checkpoint !== "sc03_python_primary_blank"
    || routeState?.boardId !== CUSTODY_LEDGER_BOARD_ID
    || routeState?.learningState?.phase !== "python_primary"
    || freshPracticeState?.phase !== "DR-20"
    || transferCompleteState?.phase !== "FT-20C"
    || explanationEntryState?.phase !== "EX-20"
    || containsPrivateContent(routeState)
    || JSON.stringify(explanationEntryState?.observationEvidence) !== JSON.stringify(routeState.observationEvidence)
    || JSON.stringify(explanationEntryState?.predecessor) !== JSON.stringify(predecessor)) return null;
  try {
    return createCustodyLedgerExplanationSubmission({
      primaryResult,
      learningState: routeState.learningState,
      freshPracticeState,
      transferCompleteState,
      explanationEntryState,
    });
  } catch {
    return null;
  }
}

export function createCustodyLedgerNormalRAIPrimaryEntry(
  routeState,
  primaryResult,
  freshPracticeState,
  transferCompleteState,
  explanationEntryState,
  explanationCompleteState,
  predecessor,
) {
  if (routeState?.checkpoint !== "sc03_python_primary_blank"
    || routeState?.boardId !== CUSTODY_LEDGER_BOARD_ID
    || routeState?.learningState?.phase !== "python_primary"
    || freshPracticeState?.phase !== "DR-20"
    || transferCompleteState?.phase !== "FT-20C"
    || explanationEntryState?.phase !== "EX-20"
    || explanationCompleteState?.phase !== "EXS-20C"
    || containsPrivateContent(routeState)
    || JSON.stringify(explanationCompleteState?.observationEvidence) !== JSON.stringify(routeState.observationEvidence)
    || JSON.stringify(explanationCompleteState?.predecessor) !== JSON.stringify(predecessor)) return null;
  try {
    return createCustodyLedgerRAIPrimaryEntry({
      primaryResult,
      learningState: routeState.learningState,
      freshPracticeState,
      transferCompleteState,
      explanationEntryState,
      explanationCompleteState,
    });
  } catch {
    return null;
  }
}

export function createCustodyLedgerNormalRAIPrimaryConvergence(
  routeState,
  primaryResult,
  freshPracticeState,
  transferCompleteState,
  explanationEntryState,
  explanationCompleteState,
  blankRAIPrimaryState,
  predecessor,
) {
  if (routeState?.checkpoint !== "sc03_python_primary_blank"
    || routeState?.boardId !== CUSTODY_LEDGER_BOARD_ID
    || routeState?.learningState?.phase !== "python_primary"
    || freshPracticeState?.phase !== "DR-20"
    || transferCompleteState?.phase !== "FT-20C"
    || explanationEntryState?.phase !== "EX-20"
    || explanationCompleteState?.phase !== "EXS-20C"
    || blankRAIPrimaryState?.phase !== "RAD-20"
    || containsPrivateContent(routeState)
    || JSON.stringify(blankRAIPrimaryState?.observationEvidence) !== JSON.stringify(routeState.observationEvidence)
    || JSON.stringify(blankRAIPrimaryState?.predecessor) !== JSON.stringify(predecessor)) return null;
  const options = {
    primaryResult,
    learningState: routeState.learningState,
    freshPracticeState,
    transferCompleteState,
    explanationEntryState,
    explanationCompleteState,
  };
  try {
    const entry = createCustodyLedgerRAIPrimaryEntry(options).dispatch({
      packetId: "RP-002",
      version: CUSTODY_LEDGER_RAI_PRIMARY_ENTRY_VERSION,
      mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER",
      action: CUSTODY_LEDGER_OPEN_RAI_PRIMARY,
      activationKind: "pointer",
      eventToken: "normal-route-convergence-boundary",
    });
    if (entry.status !== "blank_rai_primary_opened"
      || JSON.stringify(entry.state) !== JSON.stringify(blankRAIPrimaryState)) return null;
    return createCustodyLedgerRAIPrimaryConvergence(options);
  } catch {
    return null;
  }
}

export function createCustodyLedgerNormalRAITransferConvergence(
  routeState,
  primaryResult,
  freshPracticeState,
  transferCompleteState,
  explanationEntryState,
  explanationCompleteState,
  acceptedBlankTransferState,
  predecessor,
) {
  if (routeState?.checkpoint !== "sc03_python_primary_blank"
    || routeState?.boardId !== CUSTODY_LEDGER_BOARD_ID
    || routeState?.learningState?.phase !== "python_primary"
    || freshPracticeState?.phase !== "DR-20"
    || transferCompleteState?.phase !== "FT-20C"
    || explanationEntryState?.phase !== "EX-20"
    || explanationCompleteState?.phase !== "EXS-20C"
    || acceptedBlankTransferState?.phase !== "RAIC-20C"
    || acceptedBlankTransferState?.stateName !== "GENUINELY_BLANK_RAI_TRANSFER_BOUNDARY"
    || containsPrivateContent(routeState)
    || JSON.stringify(acceptedBlankTransferState?.observationEvidence) !== JSON.stringify(routeState.observationEvidence)
    || JSON.stringify(acceptedBlankTransferState?.predecessor) !== JSON.stringify(predecessor)) return null;
  try {
    return createCustodyLedgerRAITransferConvergence({
      primaryResult,
      learningState: routeState.learningState,
      freshPracticeState,
      transferCompleteState,
      explanationEntryState,
      explanationCompleteState,
      acceptedBlankTransferState,
    });
  } catch {
    return null;
  }
}

export function createCustodyLedgerNormalRAIExplanationConvergence(
  routeState,
  primaryResult,
  freshPracticeState,
  transferCompleteState,
  explanationEntryState,
  explanationCompleteState,
  acceptedBlankTransferState,
  acceptedBlankExplanationState,
  predecessor,
) {
  if (routeState?.checkpoint !== "sc03_python_primary_blank"
    || routeState?.boardId !== CUSTODY_LEDGER_BOARD_ID
    || routeState?.learningState?.phase !== "python_primary"
    || freshPracticeState?.phase !== "DR-20"
    || transferCompleteState?.phase !== "FT-20C"
    || explanationEntryState?.phase !== "EX-20"
    || explanationCompleteState?.phase !== "EXS-20C"
    || acceptedBlankTransferState?.phase !== "RAIC-20C"
    || acceptedBlankExplanationState?.phase !== "RAITC-20C"
    || acceptedBlankExplanationState?.stateName !== "GENUINELY_BLANK_RAI_EXPLANATION_ENTRY"
    || containsPrivateContent(routeState)
    || JSON.stringify(acceptedBlankExplanationState?.observationEvidence) !== JSON.stringify(routeState.observationEvidence)
    || JSON.stringify(acceptedBlankExplanationState?.predecessor) !== JSON.stringify(predecessor)) return null;
  try {
    return createCustodyLedgerRAIExplanationConvergence({
      primaryResult,
      learningState: routeState.learningState,
      freshPracticeState,
      transferCompleteState,
      explanationEntryState,
      explanationCompleteState,
      acceptedBlankTransferState,
      acceptedBlankExplanationState,
    });
  } catch {
    return null;
  }
}

export function createCustodyLedgerNormalRAIConclusionReview(
  routeState,
  primaryResult,
  freshPracticeState,
  transferCompleteState,
  explanationEntryState,
  explanationCompleteState,
  acceptedBlankTransferState,
  acceptedBlankExplanationState,
  acceptedRAIConclusionState,
  eligibilityDependencies,
  predecessor,
) {
  if (routeState?.checkpoint !== "sc03_python_primary_blank"
    || routeState?.boardId !== CUSTODY_LEDGER_BOARD_ID
    || routeState?.learningState?.phase !== "python_primary"
    || freshPracticeState?.phase !== "DR-20"
    || transferCompleteState?.phase !== "FT-20C"
    || explanationEntryState?.phase !== "EX-20"
    || explanationCompleteState?.phase !== "EXS-20C"
    || acceptedBlankTransferState?.phase !== "RAIC-20C"
    || acceptedBlankExplanationState?.phase !== "RAITC-20C"
    || acceptedRAIConclusionState?.phase !== "RAIEC-20C"
    || acceptedRAIConclusionState?.stateName !== "EXACT_ZERO_CREDIT_PILOT_RAI_CONCLUSION"
    || containsPrivateContent(routeState)
    || JSON.stringify(acceptedRAIConclusionState?.observationEvidence) !== JSON.stringify(routeState.observationEvidence)
    || JSON.stringify(acceptedRAIConclusionState?.predecessor) !== JSON.stringify(predecessor)) return null;
  try {
    return createCustodyLedgerRAIConclusionReview({
      primaryResult,
      learningState: routeState.learningState,
      freshPracticeState,
      transferCompleteState,
      explanationEntryState,
      explanationCompleteState,
      acceptedBlankTransferState,
      acceptedBlankExplanationState,
      acceptedRAIConclusionState,
      eligibilityDependencies: {
        predecessorValue: eligibilityDependencies?.predecessorValue,
        prerequisiteEvidence: eligibilityDependencies?.prerequisiteEvidence,
        observationState: { observationEvidence: routeState.observationEvidence },
      },
    });
  } catch {
    return null;
  }
}

const allowedCheckpoints = new Set([
  "city_threshold",
  "sc03_arrival",
  "sc03_survey_overview",
  "sc03_near_blank",
  "sc03_near_first",
  "sc03_near_second",
  "sc03_near_complete",
  "sc03_far_blank",
  "sc03_far_first",
  "sc03_far_complete",
  "sc03_local_comparison_blank",
  "sc03_python_primary_blank",
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
const farHotspotByLabel = new Map(custodyLedgerHotspotRegistry
  .filter((entry) => entry.boardId === "SC-03-20" && custodyLedgerObservationStages.far.includes(entry.observationId))
  .map((entry) => [entry.actionLabel, entry]));

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

function boundedThirdObservationEvidence(value) {
  if (!Array.isArray(value) || value.length !== custodyLedgerObservationStages.near.length) return null;
  const safe = sanitizeCustodyLedgerObservationState({ observationEvidence: value });
  const exactRecords = value.every((record) => {
    const canonical = safe.observationEvidence.find((candidate) => candidate.observationId === record?.observationId);
    return canonical && JSON.stringify(canonical) === JSON.stringify(record);
  });
  return safe.finalizedObservationIds.length === custodyLedgerObservationStages.near.length
    && safe.finalizedObservationIds.every((id) => custodyLedgerObservationStages.near.includes(id))
    && safe.progress.near === custodyLedgerObservationStages.near.length
    && safe.progress.far === 0
    && safe.phase === "far_observations"
    && safe.observationComplete === false
    && safe.campaignCommitEnabled === false
    && exactRecords
      ? Object.freeze([...value])
      : null;
}

function boundedFirstFarObservationEvidence(value) {
  if (!Array.isArray(value) || value.length !== custodyLedgerObservationStages.near.length + 1) return null;
  const safe = sanitizeCustodyLedgerObservationState({ observationEvidence: value });
  const exactRecords = value.every((record) => {
    const canonical = safe.observationEvidence.find((candidate) => candidate.observationId === record?.observationId);
    return canonical && JSON.stringify(canonical) === JSON.stringify(record);
  });
  const nearIds = safe.finalizedObservationIds.filter((id) => custodyLedgerObservationStages.near.includes(id));
  const farIds = safe.finalizedObservationIds.filter((id) => custodyLedgerObservationStages.far.includes(id));
  return safe.finalizedObservationIds.length === custodyLedgerObservationStages.near.length + 1
    && nearIds.length === custodyLedgerObservationStages.near.length
    && farIds.length === 1
    && safe.progress.near === custodyLedgerObservationStages.near.length
    && safe.progress.far === 1
    && safe.phase === "far_observations"
    && safe.observationComplete === false
    && safe.campaignCommitEnabled === false
    && exactRecords
      ? Object.freeze([...value])
      : null;
}

function boundedCompleteObservationEvidence(value) {
  if (!Array.isArray(value) || value.length !== custodyLedgerObservationStages.near.length + custodyLedgerObservationStages.far.length) return null;
  const safe = sanitizeCustodyLedgerObservationState({ observationEvidence: value });
  const exactRecords = value.every((record) => {
    const canonical = safe.observationEvidence.find((candidate) => candidate.observationId === record?.observationId);
    return canonical && JSON.stringify(canonical) === JSON.stringify(record);
  });
  return safe.finalizedObservationIds.length === 5
    && safe.progress.near === 3
    && safe.progress.far === 2
    && safe.phase === "observation_complete"
    && safe.activeGroup === "observation_complete"
    && safe.observationComplete === true
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
  const thirdEvidence = boundedThirdObservationEvidence(value?.observationEvidence);
  const firstFarEvidence = boundedFirstFarObservationEvidence(value?.observationEvidence);
  const completeEvidence = boundedCompleteObservationEvidence(value?.observationEvidence);
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
        : ["sc03_near_complete", "sc03_far_blank"].includes(value.checkpoint)
          ? !thirdEvidence
        : value.checkpoint === "sc03_far_first"
          ? !firstFarEvidence
        : ["sc03_far_complete", "sc03_local_comparison_blank", "sc03_python_primary_blank"].includes(value.checkpoint)
          ? !completeEvidence
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
        : ["sc03_near_complete", "sc03_far_blank"].includes(value.checkpoint)
          ? thirdEvidence
        : value.checkpoint === "sc03_far_first"
          ? firstFarEvidence
        : ["sc03_far_complete", "sc03_local_comparison_blank", "sc03_python_primary_blank"].includes(value.checkpoint)
          ? completeEvidence
        : null,
    successor: null,
  });
}

function saveFor(checkpoint, observationEvidence = null) {
  const firstEvidence = boundedFirstObservationEvidence(observationEvidence);
  const secondEvidence = boundedSecondObservationEvidence(observationEvidence);
  const thirdEvidence = boundedThirdObservationEvidence(observationEvidence);
  const firstFarEvidence = boundedFirstFarObservationEvidence(observationEvidence);
  const completeEvidence = boundedCompleteObservationEvidence(observationEvidence);
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
        : ["sc03_near_complete", "sc03_far_blank"].includes(checkpoint)
          ? thirdEvidence
        : checkpoint === "sc03_far_first"
          ? firstFarEvidence
        : ["sc03_far_complete", "sc03_local_comparison_blank", "sc03_python_primary_blank"].includes(checkpoint)
          ? completeEvidence
        : null,
    successor: null,
  });
}

function normalState(checkpoint, status = "ready", observationState = null, dispatchState = null, persistedEvidence = null, learningState = null) {
  const atArrival = checkpoint === "sc03_arrival";
  const atOverview = checkpoint === "sc03_survey_overview";
  const atBlank = checkpoint === "sc03_near_blank";
  const atAcknowledgement = checkpoint === "sc03_near_acknowledgement";
  const atSecondAcknowledgement = checkpoint === "sc03_near_second_acknowledgement";
  const atThirdAcknowledgement = checkpoint === "sc03_near_third_acknowledgement";
  const atFirst = checkpoint === "sc03_near_first";
  const atSecond = checkpoint === "sc03_near_second";
  const atComplete = checkpoint === "sc03_near_complete";
  const atFarBlank = checkpoint === "sc03_far_blank";
  const atFarFirstAcknowledgement = checkpoint === "sc03_far_first_acknowledgement";
  const atFarCompleteAcknowledgement = checkpoint === "sc03_far_complete_acknowledgement";
  const atFarAcknowledgement = atFarFirstAcknowledgement || atFarCompleteAcknowledgement;
  const atFarFirst = checkpoint === "sc03_far_first";
  const atFarComplete = checkpoint === "sc03_far_complete";
  const atLocalComparisonBlank = checkpoint === "sc03_local_comparison_blank";
  const atPythonPrimaryBlank = checkpoint === "sc03_python_primary_blank";
  const atNear = atBlank || atAcknowledgement || atSecondAcknowledgement
    || atThirdAcknowledgement || atFirst || atSecond || atComplete;
  const atFar = atFarBlank || atFarAcknowledgement || atFarFirst || atFarComplete;
  const atObservation = atNear || atFar;
  const safeObservation = atObservation && observationState
      ? atFar
        ? atFarBlank
          ? blankFarObservationFromCompletedNear(persistedEvidence)
          : atFarFirst || atFarFirstAcknowledgement
            ? firstFarObservationFromEvidence(persistedEvidence)
            : completeObservationFromEvidence(persistedEvidence)
      : sanitizeCustodyLedgerObservationState(observationState)
    : null;
  const message = atArrival
    ? "Recorded civic route followed. District overview restored locally. No city response occurred."
    : atOverview
      ? "Protected survey overview ready. Orientation alone records no district evidence."
      : atAcknowledgement || atSecondAcknowledgement || atThirdAcknowledgement || atFarAcknowledgement
        ? dispatchState?.interface?.primary?.text ?? "One bounded observation was recorded."
        : atComplete
          ? custodyLedgerObservationInterfaceCopy.nearComplete
        : atSecond
          ? "Two bounded near observations are restored. No event or acknowledgement was replayed."
        : atFirst
          ? "One bounded near observation is restored. No event or acknowledgement was replayed."
          : atBlank
            ? "Near evidence is ready for deliberate inspection. Nothing has been recorded yet."
        : atFarFirst
          ? "One bounded far observation is restored. No event or acknowledgement was replayed."
        : atFarComplete
          ? "All five bounded observations are restored. No event or acknowledgement was replayed."
        : atLocalComparisonBlank
          ? custodyLedgerLocalComparisonBlankMessage.text
        : atPythonPrimaryBlank
          ? getCustodyLedgerOwnershipMessage(learningState?.activeMessageKey).text
        : atFarBlank
          ? safeObservation?.ownerMessage?.text ?? "Inspect each exposed condition deliberately. Visibility and orientation alone record no evidence."
          : "The verified expedition record preserves one reversible civic route.";
  const nearActions = atAcknowledgement || atSecondAcknowledgement
    ? [custodyLedgerObservationControls.returnToEvidence.label]
    : atThirdAcknowledgement || atComplete
      ? [custodyLedgerObservationControls.compareScale.label]
    : atFirst || atSecond || atBlank
      ? (dispatchState?.controls ?? []).map((control) => control.label)
        : [];
  const farActions = atFar
    ? custodyLedgerObservationStages.far.map((id) => custodyLedgerObservationActions[id])
    : [];
  const availableActions = atArrival
    ? [custodyLedgerRouteActions.continueProtected, custodyLedgerRouteActions.returnAccepted]
    : atOverview
      ? [CUSTODY_LEDGER_NEAR_DETAIL_ACTION, custodyLedgerRouteActions.returnAccepted]
      : atNear
        ? [...nearActions, custodyLedgerRouteActions.returnAccepted]
        : atFar
          ? [...(atFarAcknowledgement
            ? [custodyLedgerObservationControls.returnToEvidence.label]
            : atFarComplete
              ? [...farActions, custodyLedgerObservationControls.openLocalComparison.label]
              : farActions), custodyLedgerRouteActions.returnAccepted]
        : atLocalComparisonBlank
          ? [CUSTODY_LEDGER_OPEN_PYTHON_PRIMARY_ACTION, custodyLedgerObservationControls.returnToEvidence.label, custodyLedgerRouteActions.returnAccepted]
        : atPythonPrimaryBlank
          ? [custodyLedgerObservationControls.returnToEvidence.label, custodyLedgerRouteActions.returnAccepted]
        : [custodyLedgerRouteActions.enter];
  return Object.freeze({
    status,
    checkpoint,
    boardId: atNear ? "SC-03-10" : atFar ? "SC-03-20" : atLocalComparisonBlank || atPythonPrimaryBlank ? CUSTODY_LEDGER_BOARD_ID : atArrival || atOverview ? "SC-03-00" : "SC-02-50",
    owner: atPythonPrimaryBlank
      ? getCustodyLedgerOwnershipMessage(learningState?.activeMessageKey).owner
      : atLocalComparisonBlank
      ? custodyLedgerLocalComparisonBlankMessage.owner
      : atObservation
      ? dispatchState?.ownerMessage?.owner ?? custodyLedgerRouteObservationOwners.systemSession
      : atArrival || atOverview
        ? custodyLedgerRouteOwners.system
        : custodyLedgerRouteOwners.pilot,
    message,
    sceneStatement: atAcknowledgement || atSecondAcknowledgement || atThirdAcknowledgement || atFarAcknowledgement
      ? dispatchState?.interface?.primary ?? null
      : null,
    statusMessage: atAcknowledgement || atSecondAcknowledgement || atThirdAcknowledgement || atFarAcknowledgement
      ? dispatchState?.interface?.status ?? null
      : null,
    focusIntent: Object.freeze({
      group: atPythonPrimaryBlank
        ? "python_primary_blank"
        : atLocalComparisonBlank
        ? "local_comparison_blank"
        : atObservation ? dispatchState?.focusIntent?.group ?? (atFar ? "far_observations" : "near_observations") : "route_transition",
      target: atArrival
        ? custodyLedgerRouteActions.continueProtected
        : atOverview
          ? CUSTODY_LEDGER_NEAR_DETAIL_ACTION
          : atObservation || atLocalComparisonBlank || atPythonPrimaryBlank
            ? "rp002-arrival-heading"
            : custodyLedgerRouteActions.enter,
    }),
    availableActions: Object.freeze(availableActions),
    actionStates: Object.freeze(((atFirst || atSecond)
      ? dispatchState?.controls ?? []
      : atThirdAcknowledgement || atComplete
        ? [{ ...custodyLedgerObservationControls.compareScale, status: "available" }]
        : atFarBlank
          ? farActions.map((label) => ({ label, status: "available", minWidthCssPx: 44, minHeightCssPx: 44 }))
        : atFarFirst
          ? farActions.map((label) => ({
            label,
            status: safeObservation?.finalizedObservationIds?.includes(farHotspotByLabel.get(label)?.observationId)
              ? "replay"
              : "available",
            minWidthCssPx: 44,
            minHeightCssPx: 44,
          }))
        : atFarComplete
          ? [
            ...farActions.map((label) => ({ label, status: "replay", minWidthCssPx: 44, minHeightCssPx: 44 })),
            { ...custodyLedgerObservationControls.openLocalComparison, status: "available", minWidthCssPx: 44, minHeightCssPx: 44 },
          ]
        : atLocalComparisonBlank
          ? [
            { label: CUSTODY_LEDGER_OPEN_PYTHON_PRIMARY_ACTION, status: "available", minWidthCssPx: 44, minHeightCssPx: 44 },
            { ...custodyLedgerObservationControls.returnToEvidence, status: "available", minWidthCssPx: 44, minHeightCssPx: 44 },
          ]
        : atPythonPrimaryBlank
          ? [{ ...custodyLedgerObservationControls.returnToEvidence, status: "available", minWidthCssPx: 44, minHeightCssPx: 44 }]
        : []).map((control) => Object.freeze({
      label: control.label,
      status: control.status,
      minWidthCssPx: control.minWidthCssPx,
      minHeightCssPx: control.minHeightCssPx,
    }))),
    routeReturnAction: atObservation || atLocalComparisonBlank ? custodyLedgerRouteActions.returnAccepted : null,
    continuation: "continuation",
    cityStateDelta: null,
    worldStateDelta: null,
    accessStateDelta: null,
    observationEvidence: Object.freeze([...(persistedEvidence ?? safeObservation?.observationEvidence ?? [])]),
    learningEvidence: Object.freeze([]),
    masteryEvidence: Object.freeze([]),
    saveEligibility: false,
    ...(atObservation ? {
      observationState: safeObservation,
      dispatchState,
      nextFocusIntent: safeObservation?.focusIntent ?? null,
    } : atLocalComparisonBlank ? {
      localComparisonState: Object.freeze({
        packetId: CUSTODY_LEDGER_ROUTE_PACKET_ID,
        boardId: CUSTODY_LEDGER_BOARD_ID,
        phase: "blank_entry",
        activeMessageKey: "prerequisites_incomplete",
        scoringEnabled: false,
        campaignCommitEnabled: false,
        focusIntent: Object.freeze({ group: "local_comparison_blank", target: "heading" }),
        nextFocusIntent: Object.freeze({
          group: "local_comparison_blank",
          target: custodyLedgerObservationControls.returnToEvidence.label,
        }),
      }),
    } : atPythonPrimaryBlank ? {
      learningState: Object.freeze({
        phase: learningState.phase,
        activeMessageKey: learningState.activeMessageKey,
        prerequisiteStatus: learningState.prerequisiteStatus,
        pythonForm: learningState.pythonForm,
        scoringEnabled: learningState.scoringEnabled,
        campaignCommitEnabled: learningState.campaignCommitEnabled,
        sourceFields: Object.freeze({ ...learningState.sourceFields }),
        expeditionFields: Object.freeze({ ...learningState.expeditionFields }),
        pythonChecks: Object.freeze({ ...learningState.pythonChecks }),
        unfinishedWorkImage: Object.freeze({
          label: learningState.unfinishedWorkImage.label,
          sourceFields: Object.freeze({ ...learningState.unfinishedWorkImage.sourceFields }),
          expeditionFields: Object.freeze({ ...learningState.unfinishedWorkImage.expeditionFields }),
        }),
      }),
    } : {}),
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
  const farHotspot = farHotspotByLabel.get(action);
  const hotspot = nearHotspot ?? farHotspot;
  if (hotspot) {
    return Object.freeze({
      packetId: CUSTODY_LEDGER_ROUTE_PACKET_ID,
      mode: "campaign",
      owner: custodyLedgerRouteOwners.pilot,
      registryVersion: CUSTODY_LEDGER_HOTSPOT_REGISTRY_VERSION,
      boardId: hotspot.boardId,
      semanticHotspotId: hotspot.semanticHotspotId,
      activationKind,
      eventToken,
      evidenceReadable: true,
      cropSafe: true,
      candidateSemanticIds: Object.freeze([hotspot.semanticHotspotId]),
    });
  }
  if (action === custodyLedgerObservationControls.compareScale.label) {
    return Object.freeze({
      packetId: CUSTODY_LEDGER_ROUTE_PACKET_ID,
      version: CUSTODY_LEDGER_NORMAL_ROUTE_VERSION,
      mode: "campaign",
      owner: custodyLedgerRouteOwners.pilot,
      boardId: "SC-03-10",
      action,
      transition: "compare_scale_to_far_blank",
      explicit: true,
      activationKind,
      eventToken,
    });
  }
  if (action === custodyLedgerObservationControls.openLocalComparison.label) {
    return Object.freeze({
      packetId: CUSTODY_LEDGER_ROUTE_PACKET_ID,
      version: CUSTODY_LEDGER_NORMAL_ROUTE_VERSION,
      mode: "campaign",
      owner: custodyLedgerRouteOwners.pilot,
      boardId: "SC-03-20",
      action,
      transition: "open_local_comparison_to_blank",
      explicit: true,
      activationKind,
      eventToken,
    });
  }
  if (action === CUSTODY_LEDGER_OPEN_PYTHON_PRIMARY_ACTION) {
    return Object.freeze({
      packetId: CUSTODY_LEDGER_ROUTE_PACKET_ID,
      version: CUSTODY_LEDGER_NORMAL_ROUTE_VERSION,
      mode: "campaign",
      owner: custodyLedgerRouteOwners.pilot,
      boardId: CUSTODY_LEDGER_BOARD_ID,
      action,
      transition: "open_blank_python_primary",
      explicit: true,
      activationKind,
      eventToken,
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

function comparisonStageIntentIsExact(request) {
  const exactKeys = [
    "action", "activationKind", "boardId", "eventToken", "explicit", "mode",
    "owner", "packetId", "transition", "version",
  ];
  return request && typeof request === "object"
    && Object.keys(request).sort().join("|") === exactKeys.sort().join("|")
    && request.packetId === CUSTODY_LEDGER_ROUTE_PACKET_ID
    && request.version === CUSTODY_LEDGER_NORMAL_ROUTE_VERSION
    && request.mode === "campaign"
    && request.owner === custodyLedgerRouteOwners.pilot
    && request.boardId === "SC-03-10"
    && request.action === custodyLedgerObservationControls.compareScale.label
    && request.transition === "compare_scale_to_far_blank"
    && request.explicit === true
    && custodyLedgerRouteActivationKinds.includes(request.activationKind)
    && typeof request.eventToken === "string"
    && /^[A-Za-z0-9._:-]{8,128}$/.test(request.eventToken)
    && !containsPrivateContent(request);
}

function localComparisonIntentIsExact(request) {
  const exactKeys = [
    "action", "activationKind", "boardId", "eventToken", "explicit", "mode",
    "owner", "packetId", "transition", "version",
  ];
  return request && typeof request === "object"
    && Object.keys(request).sort().join("|") === exactKeys.sort().join("|")
    && request.packetId === CUSTODY_LEDGER_ROUTE_PACKET_ID
    && request.version === CUSTODY_LEDGER_NORMAL_ROUTE_VERSION
    && request.mode === "campaign"
    && request.owner === custodyLedgerRouteOwners.pilot
    && request.boardId === "SC-03-20"
    && request.action === custodyLedgerObservationControls.openLocalComparison.label
    && request.transition === "open_local_comparison_to_blank"
    && request.explicit === true
    && custodyLedgerRouteActivationKinds.includes(request.activationKind)
    && typeof request.eventToken === "string"
    && /^[A-Za-z0-9._:-]{8,128}$/.test(request.eventToken)
    && !containsPrivateContent(request);
}

function localComparisonReturnIntentIsExact(request) {
  return request && typeof request === "object"
    && request.packetId === CUSTODY_LEDGER_ROUTE_PACKET_ID
    && request.version === CUSTODY_LEDGER_ROUTE_VERSION
    && request.mode === "protected"
    && request.owner === custodyLedgerRouteOwners.pilot
    && request.action === custodyLedgerObservationControls.returnToEvidence.label
    && custodyLedgerRouteActivationKinds.includes(request.activationKind)
    && typeof request.eventToken === "string"
    && /^[A-Za-z0-9._:-]{8,128}$/.test(request.eventToken)
    && request.implicit !== true
    && request.stale !== true
    && request.forged !== true
    && request.multiHit !== true
    && request.saveIntent !== true
    && request.tourDerived !== true
    && !Array.isArray(request.actions)
    && !containsPrivateContent(request);
}

function pythonPrimaryIntentIsExact(request) {
  const exactKeys = [
    "action", "activationKind", "boardId", "eventToken", "explicit", "mode",
    "owner", "packetId", "transition", "version",
  ];
  return request && typeof request === "object"
    && Object.keys(request).sort().join("|") === exactKeys.sort().join("|")
    && request.packetId === CUSTODY_LEDGER_ROUTE_PACKET_ID
    && request.version === CUSTODY_LEDGER_NORMAL_ROUTE_VERSION
    && request.mode === "campaign"
    && request.owner === custodyLedgerRouteOwners.pilot
    && request.boardId === CUSTODY_LEDGER_BOARD_ID
    && request.action === CUSTODY_LEDGER_OPEN_PYTHON_PRIMARY_ACTION
    && request.transition === "open_blank_python_primary"
    && request.explicit === true
    && custodyLedgerRouteActivationKinds.includes(request.activationKind)
    && typeof request.eventToken === "string"
    && /^[A-Za-z0-9._:-]{8,128}$/.test(request.eventToken)
    && !containsPrivateContent(request);
}

function firstFarIntentIsBounded(request) {
  return request && typeof request === "object"
    && request.packetId === CUSTODY_LEDGER_ROUTE_PACKET_ID
    && request.mode === "campaign"
    && request.owner === custodyLedgerRouteOwners.pilot
    && request.registryVersion === CUSTODY_LEDGER_HOTSPOT_REGISTRY_VERSION
    && request.boardId === "SC-03-20"
    && farHotspotByLabel.size === custodyLedgerObservationStages.far.length
    && [...farHotspotByLabel.values()].some((entry) => entry.semanticHotspotId === request.semanticHotspotId)
    && Array.isArray(request.candidateSemanticIds)
    && request.candidateSemanticIds.length === 1
    && request.candidateSemanticIds[0] === request.semanticHotspotId
    && custodyLedgerRouteActivationKinds.includes(request.activationKind)
    && typeof request.eventToken === "string"
    && /^[A-Za-z0-9._:-]{1,128}$/.test(request.eventToken)
    && request.evidenceReadable === true
    && request.cropSafe === true
    && request.implicit !== true
    && request.stale !== true
    && request.forged !== true
    && request.multiHit !== true
    && request.saveIntent !== true
    && request.tourDerived !== true
    && !Array.isArray(request.actions)
    && !containsPrivateContent(request);
}

function blankFarObservationFromCompletedNear(observationEvidence) {
  const retained = boundedThirdObservationEvidence(observationEvidence);
  if (!retained) return null;
  const sanitized = sanitizeCustodyLedgerObservationState({ observationEvidence: retained });
  if (!(sanitized.phase === "far_observations"
    && sanitized.activeGroup === "far_observations"
    && sanitized.boardId === "SC-03-20"
    && sanitized.ownerMessage?.owner === "SYSTEM // EXPEDITION SESSION"
    && sanitized.progress.near === 3
    && sanitized.progress.far === 0
    && sanitized.finalizedObservationIds.length === 3
    && sanitized.observationComplete === false
    && sanitized.campaignCommitEnabled === false
    && sanitized.cityStateDelta === null)) return null;
  return Object.freeze({
    ...sanitized,
    observationEvidence: Object.freeze(retained.map((record) => Object.freeze({ ...record }))),
    finalizedObservationIds: Object.freeze(retained.map((record) => record.observationId)),
  });
}

function firstFarObservationFromEvidence(observationEvidence) {
  const retained = boundedFirstFarObservationEvidence(observationEvidence);
  if (!retained) return null;
  const sanitized = sanitizeCustodyLedgerObservationState({ observationEvidence: retained });
  if (!(sanitized.phase === "far_observations"
    && sanitized.activeGroup === "far_observations"
    && sanitized.boardId === "SC-03-20"
    && sanitized.ownerMessage?.owner === "SYSTEM // EXPEDITION SESSION"
    && sanitized.progress.near === 3
    && sanitized.progress.far === 1
    && sanitized.finalizedObservationIds.length === 4
    && sanitized.observationComplete === false
    && sanitized.campaignCommitEnabled === false
    && sanitized.cityStateDelta === null)) return null;
  return Object.freeze({
    ...sanitized,
    observationEvidence: Object.freeze(retained.map((record) => Object.freeze({ ...record }))),
    finalizedObservationIds: Object.freeze(retained.map((record) => record.observationId)),
  });
}

function completeObservationFromEvidence(observationEvidence) {
  const retained = boundedCompleteObservationEvidence(observationEvidence);
  if (!retained) return null;
  const sanitized = sanitizeCustodyLedgerObservationState({ observationEvidence: retained });
  if (!(sanitized.phase === "observation_complete"
    && sanitized.activeGroup === "observation_complete"
    && sanitized.boardId === "SC-03-20"
    && sanitized.ownerMessage?.owner === "SYSTEM // EXPEDITION SESSION"
    && sanitized.progress.near === 3
    && sanitized.progress.far === 2
    && sanitized.finalizedObservationIds.length === 5
    && sanitized.observationComplete === true
    && sanitized.campaignCommitEnabled === false
    && sanitized.cityStateDelta === null)) return null;
  return Object.freeze({
    ...sanitized,
    observationEvidence: Object.freeze(retained.map((record) => Object.freeze({ ...record }))),
    finalizedObservationIds: Object.freeze(retained.map((record) => record.observationId)),
  });
}

function replayCompleteFarObservation(complete, request) {
  if (!complete || !firstFarIntentIsBounded(request)) return null;
  const entry = [...farHotspotByLabel.values()]
    .find((candidate) => candidate.semanticHotspotId === request.semanticHotspotId);
  if (!entry) return null;
  const replayed = recordCustodyLedgerObservation(complete, {
    actionType: CUSTODY_LEDGER_OBSERVATION_ACTION,
    observationId: entry.observationId,
    boardId: entry.boardId,
    available: true,
  });
  return replayed.activeGroup === "observation_revisit"
    ? Object.freeze({ status: "replayed", observationId: entry.observationId, state: replayed })
    : null;
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

function thirdNearOrchestratorFor(predecessor, observationEvidence, restoredThreeEvidence = null) {
  const evidence = boundedSecondObservationEvidence(observationEvidence);
  if (!evidence) return null;
  const routeState = protectedRouteDispatcher(predecessor)?.getState();
  if (!routeState) return null;
  const boundary = blankObservationFromProtectedRoute(routeState, createCustodyLedgerNormalRouteIntent(
    CUSTODY_LEDGER_NEAR_DETAIL_ACTION,
    "screen_reader",
    "rp002-third-near-reconstruction",
  ));
  if (!boundary) return null;
  const first = createCustodyLedgerFirstNearDispatchOrchestrator({
    routeObservationState: boundary,
    routeState,
    restoredState: { observationState: { observationEvidence: [evidence[0]] } },
  });
  if (first.getState().phase !== custodyLedgerFirstNearDispatchPhases.oneIdEvidence) return null;
  const second = createCustodyLedgerSecondNearDispatchOrchestrator({
    routeObservationState: boundary,
    routeState,
    firstNearState: first.getState(),
  });
  const restoredSecond = second.dispatch(createCustodyLedgerNormalRouteIntent(
    nearHotspotByObservationId.get(evidence[1].observationId)?.actionLabel,
    "screen_reader",
    "rp002-third-near-restore-second",
  ));
  if (restoredSecond.status !== "recorded") return null;
  const returned = second.returnToEvidence();
  if (returned.status !== "returned_to_two_id_evidence"
    || !boundedSecondObservationEvidence(returned.state.observationState.observationEvidence)) return null;
  const base = createCustodyLedgerThirdNearCompletionOrchestrator({
    routeObservationState: boundary,
    routeState,
    firstNearState: first.getState(),
    secondNearState: second.getState(),
  });
  if (base.getState().phase !== custodyLedgerThirdNearCompletionPhases.verifiedTwoId) return null;
  const complete = boundedThirdObservationEvidence(restoredThreeEvidence);
  if (!complete) return base;
  const thirdRecord = complete.find((record) => !evidence.some((prior) => (
    prior.observationId === record.observationId
  )));
  const completion = base.dispatch(createCustodyLedgerNormalRouteIntent(
    nearHotspotByObservationId.get(thirdRecord?.observationId)?.actionLabel,
    "screen_reader",
    "rp002-third-near-restore-third",
  ));
  if (completion.status !== "recorded") return null;
  const snapshot = base.snapshot().state;
  const restored = createCustodyLedgerThirdNearCompletionOrchestrator({
    routeObservationState: boundary,
    routeState,
    firstNearState: first.getState(),
    secondNearState: second.getState(),
    restoredState: snapshot,
  });
  return restored.getState().phase === custodyLedgerThirdNearCompletionPhases.thirdAcknowledgement
    && boundedThirdObservationEvidence(restored.getState().observationState.observationEvidence)
      ? restored
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

function restoredStateFor(checkpoint, predecessor, observationEvidence = null, prerequisiteEvidence = null) {
  if (checkpoint === "sc03_far_blank") {
    const farBlank = blankFarObservationFromCompletedNear(observationEvidence);
    return farBlank
      ? normalState("sc03_far_blank", "ready", farBlank, farBlank, observationEvidence)
      : unavailableState();
  }
  if (checkpoint === "sc03_far_first") {
    const farFirst = firstFarObservationFromEvidence(observationEvidence);
    return farFirst
      ? normalState("sc03_far_first", "ready", farFirst, farFirst, observationEvidence)
      : unavailableState();
  }
  if (checkpoint === "sc03_far_complete") {
    const complete = completeObservationFromEvidence(observationEvidence);
    return complete
      ? normalState("sc03_far_complete", "ready", complete, complete, observationEvidence)
      : unavailableState();
  }
  if (checkpoint === "sc03_local_comparison_blank") {
    const complete = completeObservationFromEvidence(observationEvidence);
    return complete
      ? normalState("sc03_local_comparison_blank", "ready", null, null, observationEvidence)
      : unavailableState();
  }
  if (checkpoint === "sc03_python_primary_blank") {
    const complete = boundedCompleteObservationEvidence(observationEvidence);
    const scaffold = createCustodyLedgerScaffoldFromVerifiedRouteBoundary(predecessor);
    const learningState = advanceCustodyLedgerPrerequisite(scaffold, prerequisiteEvidence);
    return complete && learningState.phase === "python_primary"
      ? normalState("sc03_python_primary_blank", "ready", null, null, complete, learningState)
      : complete
        ? normalState("sc03_local_comparison_blank", "ready", null, null, complete)
        : unavailableState();
  }
  if (!["sc03_near_blank", "sc03_near_first", "sc03_near_second", "sc03_near_complete"].includes(checkpoint)) {
    return normalState(checkpoint);
  }
  const orchestrator = checkpoint === "sc03_near_complete"
    ? thirdNearOrchestratorFor(predecessor, observationEvidence?.slice(0, 2), observationEvidence)
    : checkpoint === "sc03_near_second"
      ? secondNearOrchestratorFor(predecessor, observationEvidence)
      : firstNearOrchestratorFor(predecessor, checkpoint === "sc03_near_first" ? observationEvidence : null);
  if (!orchestrator) return unavailableState();
  const dispatchState = orchestrator.getState();
  return normalState(
    checkpoint,
    "ready",
    dispatchState.observationState,
    dispatchState,
    ["sc03_near_second", "sc03_near_complete"].includes(checkpoint) ? observationEvidence : null,
  );
}

/**
 * Thin normal integration over the existing protected route and viewpoint authorities.
 * It owns reversible SC-03-00 staging and the five bounded observation records through a blank local-comparison boundary.
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
          options.prerequisiteEvidence ?? null,
        );
  const consumedTokens = new Set();

  return Object.freeze({
    getState: () => state,
    snapshot: () => JSON.parse(JSON.stringify(state)),
    getSave: () => state.status === "ready"
      ? saveFor(state.checkpoint === "sc03_far_first_acknowledgement"
        ? "sc03_far_first"
        : state.checkpoint === "sc03_far_complete_acknowledgement"
          ? "sc03_far_complete"
          : state.checkpoint, state.checkpoint === "sc03_near_first"
        ? state.observationEvidence[0]
        : ["sc03_near_second", "sc03_near_complete", "sc03_far_blank", "sc03_far_first", "sc03_far_first_acknowledgement", "sc03_far_complete", "sc03_far_complete_acknowledgement", "sc03_local_comparison_blank", "sc03_python_primary_blank"].includes(state.checkpoint)
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

      if (["sc03_near_blank", "sc03_near_first", "sc03_near_second", "sc03_near_complete", "sc03_near_third_acknowledgement", "sc03_far_blank", "sc03_far_first", "sc03_far_first_acknowledgement", "sc03_far_complete", "sc03_far_complete_acknowledgement", "sc03_local_comparison_blank", "sc03_python_primary_blank"].includes(state.checkpoint)) {
        if (request?.action === custodyLedgerRouteActions.returnAccepted) {
          if (!returnToAccepted(predecessor, request)) return Object.freeze({ status: "rejected", state });
          state = normalState("city_threshold");
          return Object.freeze({ status: "returned", state, save: saveFor("city_threshold") });
        }

        if (state.checkpoint === "sc03_local_comparison_blank") {
          const evidence = boundedCompleteObservationEvidence(state.observationEvidence);
          if (request?.action === CUSTODY_LEDGER_OPEN_PYTHON_PRIMARY_ACTION) {
            const scaffold = createCustodyLedgerScaffoldFromVerifiedRouteBoundary(predecessor);
            const learningState = advanceCustodyLedgerPrerequisite(scaffold, options.prerequisiteEvidence);
            if (!evidence
              || !pythonPrimaryIntentIsExact(request)
              || containsPrivateContent(options.prerequisiteEvidence)
              || learningState.phase !== "python_primary") {
              return Object.freeze({ status: "rejected", reason: "python_primary_prerequisites_incomplete", state });
            }
            state = normalState("sc03_python_primary_blank", "ready", null, null, evidence, learningState);
            return Object.freeze({
              status: "entered_python_primary",
              reason: "blank_python_primary_entered",
              state,
              save: saveFor("sc03_python_primary_blank", evidence),
            });
          }
          if (!evidence || !localComparisonReturnIntentIsExact(request)) {
            return Object.freeze({ status: "rejected", reason: "local_comparison_blank_closed", state });
          }
          const restoredComplete = completeObservationFromEvidence(evidence);
          if (!restoredComplete) {
            return Object.freeze({ status: "rejected", reason: "invalid_complete_far_evidence", state });
          }
          state = normalState("sc03_far_complete", "ready", restoredComplete, restoredComplete, evidence);
          return Object.freeze({
            status: "returned_to_evidence",
            state,
            save: saveFor("sc03_far_complete", evidence),
          });
        }

        if (state.checkpoint === "sc03_python_primary_blank") {
          const evidence = boundedCompleteObservationEvidence(state.observationEvidence);
          if (!evidence || !localComparisonReturnIntentIsExact(request)) {
            return Object.freeze({ status: "rejected", reason: "python_primary_submission_not_integrated", state });
          }
          state = normalState("sc03_local_comparison_blank", "ready", null, null, evidence);
          return Object.freeze({
            status: "returned_to_evidence",
            state,
            save: saveFor("sc03_local_comparison_blank", evidence),
          });
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

        if (state.checkpoint === "sc03_far_first_acknowledgement"
          && request?.action === custodyLedgerObservationControls.returnToEvidence.label) {
          const evidence = boundedFirstFarObservationEvidence(state.observationEvidence);
          const restoredFar = firstFarObservationFromEvidence(evidence);
          if (!restoredFar) return Object.freeze({ status: "rejected", reason: "invalid_first_far_evidence", state });
          state = normalState("sc03_far_first", "ready", restoredFar, restoredFar, evidence);
          return Object.freeze({
            status: "returned_to_evidence",
            state,
            save: saveFor("sc03_far_first", evidence),
          });
        }

        if (state.checkpoint === "sc03_far_complete_acknowledgement"
          && request?.action === custodyLedgerObservationControls.returnToEvidence.label) {
          const evidence = boundedCompleteObservationEvidence(state.observationEvidence);
          const restoredComplete = completeObservationFromEvidence(evidence);
          if (!restoredComplete) return Object.freeze({ status: "rejected", reason: "invalid_complete_far_evidence", state });
          state = normalState("sc03_far_complete", "ready", restoredComplete, restoredComplete, evidence);
          return Object.freeze({
            status: "returned_to_evidence",
            state,
            save: saveFor("sc03_far_complete", evidence),
          });
        }

        if (state.checkpoint === "sc03_far_blank") {
          const nearEvidence = boundedThirdObservationEvidence(state.observationEvidence);
          const blankFar = blankFarObservationFromCompletedNear(nearEvidence);
          const result = blankFar && firstFarIntentIsBounded(request)
            ? createCustodyLedgerHotspotDispatcher({ initialState: blankFar }).dispatch(request)
            : null;
          if (result?.status !== "recorded") {
            return Object.freeze({ status: "rejected", reason: result?.reason ?? "invalid_first_far_intent", state });
          }
          const farRecord = result.state.observationEvidence
            ?.find((record) => record.observationId === result.observationId);
          const evidence = boundedFirstFarObservationEvidence([...nearEvidence, farRecord]);
          const nearBefore = nearEvidence.map((record) => JSON.stringify(record));
          if (!evidence || nearBefore.some((record, index) => JSON.stringify(evidence[index]) !== record)) {
            return Object.freeze({ status: "rejected", reason: "invalid_first_far_evidence", state });
          }
          const dispatchState = Object.freeze({
            ...result.state,
            interface: describeCustodyLedgerObservationInterface(result.state),
          });
          state = normalState(
            "sc03_far_first_acknowledgement",
            "ready",
            result.state,
            dispatchState,
            evidence,
          );
          return Object.freeze({
            status: "recorded",
            observationId: result.observationId,
            state,
            save: saveFor("sc03_far_first", evidence),
          });
        }

        if (state.checkpoint === "sc03_far_first") {
          const evidence = boundedFirstFarObservationEvidence(state.observationEvidence);
          const firstFar = firstFarObservationFromEvidence(evidence);
          const result = firstFar && firstFarIntentIsBounded(request)
            ? createCustodyLedgerHotspotDispatcher({ initialState: firstFar }).dispatch(request)
            : null;
          if (result?.status === "recorded") {
            const farRecord = result.state.observationEvidence
              ?.find((record) => record.observationId === result.observationId);
            const completeEvidence = boundedCompleteObservationEvidence([...evidence, farRecord]);
            const priorBytes = evidence.map((record) => JSON.stringify(record));
            if (!completeEvidence || priorBytes.some((record, index) => JSON.stringify(completeEvidence[index]) !== record)) {
              return Object.freeze({ status: "rejected", reason: "invalid_complete_far_evidence", state });
            }
            const dispatchState = Object.freeze({
              ...result.state,
              interface: describeCustodyLedgerObservationInterface(result.state),
            });
            state = normalState(
              "sc03_far_complete_acknowledgement",
              "ready",
              result.state,
              dispatchState,
              completeEvidence,
            );
            return Object.freeze({
              status: "recorded",
              observationId: result.observationId,
              state,
              save: saveFor("sc03_far_complete", completeEvidence),
            });
          }
          if (result?.status !== "replayed") {
            return Object.freeze({ status: "rejected", reason: result?.reason ?? "invalid_first_far_replay", state });
          }
          const dispatchState = Object.freeze({
            ...result.state,
            interface: describeCustodyLedgerObservationInterface(result.state),
          });
          state = normalState(
            "sc03_far_first_acknowledgement",
            "ready",
            result.state,
            dispatchState,
            evidence,
          );
          return Object.freeze({
            status: "replayed",
            observationId: result.observationId,
            state,
            save: saveFor("sc03_far_first", evidence),
          });
        }

        if (state.checkpoint === "sc03_far_complete") {
          const evidence = boundedCompleteObservationEvidence(state.observationEvidence);
          const complete = completeObservationFromEvidence(evidence);
          if (request?.action === custodyLedgerObservationControls.openLocalComparison.label) {
            if (!complete || !localComparisonIntentIsExact(request)) {
              return Object.freeze({ status: "rejected", reason: "invalid_local_comparison_intent", state });
            }
            const priorBytes = evidence.map((record) => JSON.stringify(record));
            state = normalState("sc03_local_comparison_blank", "ready", null, null, evidence);
            if (state.observationEvidence.some((record, index) => JSON.stringify(record) !== priorBytes[index])) {
              return Object.freeze({ status: "rejected", reason: "observation_evidence_changed", state: unavailableState() });
            }
            return Object.freeze({
              status: "entered_local_comparison",
              reason: "blank_local_comparison_entered",
              state,
              save: saveFor("sc03_local_comparison_blank", evidence),
            });
          }
          const result = replayCompleteFarObservation(complete, request);
          if (result?.status !== "replayed") {
            return Object.freeze({ status: "rejected", reason: result?.reason ?? "invalid_complete_far_replay", state });
          }
          const dispatchState = Object.freeze({
            ...result.state,
            interface: describeCustodyLedgerObservationInterface(result.state),
          });
          state = normalState(
            "sc03_far_complete_acknowledgement",
            "ready",
            result.state,
            dispatchState,
            evidence,
          );
          return Object.freeze({
            status: "replayed",
            observationId: result.observationId,
            state,
            save: saveFor("sc03_far_complete", evidence),
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

        if (state.checkpoint === "sc03_near_second") {
          const savedEvidence = boundedSecondObservationEvidence(state.observationEvidence);
          if (!savedEvidence) return Object.freeze({ status: "rejected", state });
          const authority = thirdNearOrchestratorFor(predecessor, savedEvidence);
          const result = authority?.dispatch(request);
          if (!result || !["recorded", "replayed"].includes(result.status)) {
            return Object.freeze({ status: "rejected", reason: result?.reason ?? "unverified_third_near_boundary", state });
          }
          if (result.status === "recorded") {
            const thirdRecord = result.state.observationState?.observationEvidence
              ?.find((record) => record.observationId === result.observationId);
            const evidence = boundedThirdObservationEvidence([...savedEvidence, thirdRecord]);
            if (!evidence) return Object.freeze({ status: "rejected", reason: "invalid_third_evidence", state });
            state = normalState(
              "sc03_near_third_acknowledgement",
              "ready",
              result.state.observationState,
              result.state,
              evidence,
            );
            return Object.freeze({
              status: "recorded",
              observationId: result.observationId,
              state,
              save: saveFor("sc03_near_complete", evidence),
            });
          }
          state = normalState(
            "sc03_near_second_acknowledgement",
            "ready",
            result.state.observationState,
            result.state,
            savedEvidence,
          );
          return Object.freeze({
            status: "replayed",
            observationId: result.observationId,
            state,
            save: saveFor("sc03_near_second", savedEvidence),
          });
        }

        if (["sc03_near_complete", "sc03_near_third_acknowledgement"].includes(state.checkpoint)) {
          const evidence = boundedThirdObservationEvidence(state.observationEvidence);
          const farBlank = comparisonStageIntentIsExact(request)
            ? blankFarObservationFromCompletedNear(evidence)
            : null;
          if (!farBlank) return Object.freeze({ status: "rejected", reason: "invalid_comparison_stage_intent", state });
          const before = evidence.map((record) => JSON.stringify(record));
          state = normalState("sc03_far_blank", "ready", farBlank, farBlank, evidence);
          if (state.observationEvidence.some((record, index) => JSON.stringify(record) !== before[index])) {
            return Object.freeze({ status: "rejected", reason: "near_evidence_changed", state: unavailableState() });
          }
          return Object.freeze({
            status: "advanced",
            reason: "comparison_stage_entered",
            state,
            save: saveFor("sc03_far_blank", evidence),
          });
        }

        return Object.freeze({ status: "rejected", reason: "near_completion_closed", state });
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
