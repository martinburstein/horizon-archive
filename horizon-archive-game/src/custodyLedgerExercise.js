import { CITY_THRESHOLD_CONTINUATION, sanitizeCityThresholdSave } from "./cityThresholdExercise.js";

export const CUSTODY_LEDGER_PACKET_ID = "RP-002";
export const CUSTODY_LEDGER_BOARD_ID = "SC-03-30";

export const custodyLedgerPredecessorMessage = Object.freeze({
  owner: "SYSTEM // EXPEDITION STATE",
  text: "Required predecessor evidence is incomplete. Return to the saved City Threshold anchor.",
});

export const custodyLedgerOwnershipMessages = Object.freeze({
  prerequisites_incomplete: Object.freeze({
    owner: "SYSTEM // EXPEDITION STATE",
    text: "Required practice evidence is incomplete. The district remains available; no local request has been sent.",
  }),
  tray_available: Object.freeze({
    owner: "SYSTEM // EXPEDITION SESSION",
    text: "Five exposed conditions logged. Add only the two expedition-owned fields.",
  }),
  source_locked: Object.freeze({
    owner: "SYSTEM // LOCAL CHECKS",
    text: "Source evidence is locked. Add expedition fields without replacing it.",
  }),
  identity_unknown: Object.freeze({
    owner: "901 TEACHER // FEEDBACK",
    text: "Identity is missing or unknown here; it is not a false identity.",
  }),
  access_not_requested: Object.freeze({
    owner: "SYSTEM // LOCAL CHECKS",
    text: "No request occurred. This comparison cannot claim access.",
  }),
  review: Object.freeze({
    owner: "PILOT // FLIGHT RECORDER",
    text: "This label is mine. It does not name their purpose or open what remains closed.",
  }),
  cancelled: Object.freeze({
    owner: "SYSTEM // EXPEDITION SESSION",
    text: "Unsubmitted work cleared. The district and closed records are unchanged.",
  }),
  saved: Object.freeze({
    owner: "SYSTEM // EXPEDITION STATE",
    text: "Bounded comparison saved. No access request or external action occurred; `continuation` is unchanged.",
  }),
  restored: Object.freeze({
    owner: "SYSTEM // EXPEDITION STATE",
    text: "Civic comparison restored. Working notes are cleared; closed records remain closed.",
  }),
  tour: Object.freeze({
    owner: "SYSTEM // DEMO TOUR",
    text: "Preview only — bounded comparison not saved.",
  }),
});

export const custodyLedgerSourceFields = Object.freeze({
  condition: "outlined_gap",
  source: "exposed_surface",
  identity: null,
  access_requested: false,
});

export const custodyLedgerExpeditionFields = Object.freeze({
  classification: "",
  owner: "",
});

export function getCustodyLedgerOwnershipMessage(messageKey) {
  return custodyLedgerOwnershipMessages[messageKey] ?? custodyLedgerOwnershipMessages.prerequisites_incomplete;
}

export function createCustodyLedgerScaffold(predecessorValue) {
  const predecessor = sanitizeCityThresholdSave(predecessorValue);
  const predecessorReady = predecessor?.cityThresholdAnchorRecorded === true
    && predecessor?.civicDistrictRouteAvailable === true;
  return {
    packetId: CUSTODY_LEDGER_PACKET_ID,
    boardId: CUSTODY_LEDGER_BOARD_ID,
    phase: predecessorReady ? "prerequisite_check" : "predecessor_blocked",
    activeMessageKey: "prerequisites_incomplete",
    sourceFields: { ...custodyLedgerSourceFields },
    expeditionFields: { ...custodyLedgerExpeditionFields },
    scoringEnabled: false,
    campaignCommitEnabled: false,
    continuation: CITY_THRESHOLD_CONTINUATION,
    cityStateDelta: null,
  };
}

function normalizeCustodyLedgerScaffold(state) {
  const phase = state?.phase === "prerequisite_check" ? "prerequisite_check" : "predecessor_blocked";
  const activeMessageKey = Object.hasOwn(custodyLedgerOwnershipMessages, state?.activeMessageKey)
    ? state.activeMessageKey
    : "prerequisites_incomplete";
  return {
    packetId: CUSTODY_LEDGER_PACKET_ID,
    boardId: CUSTODY_LEDGER_BOARD_ID,
    phase,
    activeMessageKey,
    sourceFields: { ...custodyLedgerSourceFields },
    expeditionFields: {
      classification: typeof state?.expeditionFields?.classification === "string"
        ? state.expeditionFields.classification.slice(0, 40)
        : "",
      owner: typeof state?.expeditionFields?.owner === "string"
        ? state.expeditionFields.owner.slice(0, 40)
        : "",
    },
    scoringEnabled: false,
    campaignCommitEnabled: false,
    continuation: CITY_THRESHOLD_CONTINUATION,
    cityStateDelta: null,
  };
}

export function setCustodyLedgerOwnershipMessage(state, messageKey) {
  const current = normalizeCustodyLedgerScaffold(state);
  const safeKey = Object.hasOwn(custodyLedgerOwnershipMessages, messageKey)
    ? messageKey
    : current.activeMessageKey;
  return {
    ...current,
    activeMessageKey: safeKey,
  };
}

export function clearCustodyLedgerWorkingState(state) {
  const current = normalizeCustodyLedgerScaffold(state);
  return {
    ...current,
    activeMessageKey: "cancelled",
    expeditionFields: { ...custodyLedgerExpeditionFields },
  };
}
