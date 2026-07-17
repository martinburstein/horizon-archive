import {
  CUSTODY_LEDGER_FRESH_PRACTICE_LABEL,
  custodyLedgerExpeditionFields,
  custodyLedgerObservationIds,
  custodyLedgerPythonChecks,
  custodyLedgerPythonOwnershipMessages,
  custodyLedgerSourceFields,
  custodyLedgerTransferSourceFields,
  dismissCustodyLedgerPrimaryResult,
  resumeCustodyLedgerPython,
  sanitizeCustodyLedgerObservationState,
  submitCustodyLedgerPrimary,
} from "./custodyLedgerExercise.js";
import {
  CUSTODY_LEDGER_PRIMARY_INTERACTION_VERSION,
  buildCustodyLedgerPrimarySource,
} from "./CustodyLedgerPrimaryInteraction.js";

export const CUSTODY_LEDGER_PRIMARY_RESULT_DISMISSAL_VERSION = "rp002.primary-result-dismissal.v1";
export const CUSTODY_LEDGER_CLEAR_RESULT_ACTION = "CLEAR RESULT AND OPEN FRESH PRACTICE";

export const custodyLedgerPrimaryResultDismissalModalities = Object.freeze([
  "pointer",
  "touch",
  "keyboard_enter",
  "keyboard_space",
  "switch",
  "speech",
  "screen_reader",
]);

export const custodyLedgerPrimaryResultDismissalAccessibility = Object.freeze({
  oneActiveGroup: true,
  resultSemanticOrder: Object.freeze([
    "owner_heading",
    "read_only_source_fields",
    "read_only_expedition_fields",
    "dismissal_action",
    "return_to_evidence",
    "return_to_city_threshold",
  ]),
  freshSemanticOrder: Object.freeze([
    "owner_heading",
    "locked_source_fields",
    "classification",
    "owner",
    "return_to_evidence",
    "return_to_city_threshold",
  ]),
  minActionCssPx: 44,
  ownerHeadingProgrammaticFocus: true,
  ownerHeadingInTabOrder: false,
  firstFreshTabTarget: "classification",
  meaningUsesColorAlone: false,
  forcedColorsEquivalent: true,
  reducedMotionDirectReplacement: true,
  naturalNarrowReflow: true,
  textZoomPercent: 200,
  horizontalPageEscape: false,
});

const intentKeys = Object.freeze([
  "packetId",
  "version",
  "mode",
  "owner",
  "action",
  "activationKind",
  "eventToken",
]);

const primaryResultKeys = Object.freeze([
  "version", "packetId", "boardId", "checkpoint", "phase", "stateName", "owner",
  "sourceFields", "sourceFieldState", "expeditionFields", "expeditionFieldState",
  "currentAttemptChecks", "attemptCount", "focusIntent", "availableActions", "accessibility",
  "observationEvidence", "predecessor", "continuation", "cityStateDelta", "protected",
  "routable", "browserStorageUsed", "offlineOnly", "liveServiceUsed", "authorityGranted",
  "accessGranted", "externalActionEnabled", "examCreditGranted", "examGuarantee",
  "identityMaterialClosed", "successor", "provisionalResult",
]);

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function exactKeys(value, keys) {
  return value && typeof value === "object" && !Array.isArray(value)
    && Object.keys(value).sort().join("|") === [...keys].sort().join("|");
}

function same(value, expected) {
  return JSON.stringify(value) === JSON.stringify(expected);
}

function sanitizePrimaryResult(primaryResult) {
  if (!exactKeys(primaryResult, primaryResultKeys)
    || primaryResult.version !== CUSTODY_LEDGER_PRIMARY_INTERACTION_VERSION
    || primaryResult.packetId !== "RP-002"
    || primaryResult.boardId !== "SC-03-30"
    || primaryResult.checkpoint !== "sc03_python_primary_blank"
    || primaryResult.phase !== "30-A2"
    || primaryResult.stateName !== "PROVISIONAL_SUIT_RESULT"
    || primaryResult.owner !== custodyLedgerPythonOwnershipMessages.primary_result.owner
    || !same(primaryResult.sourceFields, custodyLedgerSourceFields)
    || primaryResult.sourceFieldState !== "read_only_locked"
    || !same(primaryResult.expeditionFields, {
      classification: "unknown",
      owner: "human_expedition",
    })
    || primaryResult.expeditionFieldState !== "read_only_addition"
    || !exactKeys(primaryResult.currentAttemptChecks, custodyLedgerPythonChecks)
    || custodyLedgerPythonChecks.some((id) => primaryResult.currentAttemptChecks[id] !== true)
    || !Number.isInteger(primaryResult.attemptCount)
    || primaryResult.attemptCount < 1
    || primaryResult.protected !== true
    || primaryResult.routable !== false
    || primaryResult.browserStorageUsed !== false
    || primaryResult.offlineOnly !== true
    || primaryResult.liveServiceUsed !== false
    || primaryResult.authorityGranted !== false
    || primaryResult.accessGranted !== false
    || primaryResult.externalActionEnabled !== false
    || primaryResult.examCreditGranted !== false
    || primaryResult.examGuarantee !== false
    || primaryResult.identityMaterialClosed !== true
    || primaryResult.successor !== null
    || primaryResult.cityStateDelta !== null
    || primaryResult.continuation !== "continuation") return null;

  const observations = sanitizeCustodyLedgerObservationState({
    observationEvidence: primaryResult.observationEvidence,
  });
  if (!Array.isArray(primaryResult.observationEvidence)
    || primaryResult.observationEvidence.length !== custodyLedgerObservationIds.length
    || observations.phase !== "observation_complete"
    || observations.observationEvidence.length !== custodyLedgerObservationIds.length
    || custodyLedgerObservationIds.some((id) => !observations.observationEvidence
      .some((record) => record.observationId === id))) return null;

  if (!exactKeys(primaryResult.predecessor, [
    "verificationStatus", "cityThresholdAnchorRecorded", "civicDistrictRouteAvailable",
  ])
    || primaryResult.predecessor.verificationStatus !== "verified"
    || primaryResult.predecessor.cityThresholdAnchorRecorded !== true
    || primaryResult.predecessor.civicDistrictRouteAvailable !== true) return null;

  return clone(primaryResult);
}

function canonicalAuthorities(primaryResult, learningState) {
  if (learningState?.phase !== "python_primary"
    || learningState?.prerequisiteStatus !== "complete"
    || learningState?.pythonForm !== "primary") return null;
  const resumed = resumeCustodyLedgerPython(learningState);
  if (resumed.phase !== "python_primary"
    || resumed.prerequisiteStatus !== "complete"
    || resumed.pythonForm !== "primary"
    || custodyLedgerPythonChecks.some((id) => resumed.pythonChecks?.[id] !== false)) return null;

  const canonicalResult = submitCustodyLedgerPrimary(
    resumed,
    buildCustodyLedgerPrimarySource(primaryResult.expeditionFields),
  );
  if (canonicalResult.phase !== "python_primary_result"
    || canonicalResult.activeMessageKey !== "primary_result"
    || canonicalResult.pythonForm !== "primary_result"
    || canonicalResult.causalResult?.owner !== custodyLedgerPythonOwnershipMessages.primary_result.owner) return null;

  const canonicalFresh = dismissCustodyLedgerPrimaryResult(canonicalResult);
  if (canonicalFresh.phase !== "python_transfer"
    || canonicalFresh.activeMessageKey !== "fresh_practice"
    || canonicalFresh.pythonForm !== "transfer"
    || !same(canonicalFresh.sourceFields, custodyLedgerTransferSourceFields)
    || !same(canonicalFresh.expeditionFields, custodyLedgerExpeditionFields)) return null;
  return { canonicalResult, canonicalFresh };
}

function resultView(primaryResult) {
  return {
    ...clone(primaryResult),
    version: CUSTODY_LEDGER_PRIMARY_RESULT_DISMISSAL_VERSION,
    phase: "DR-00",
    stateName: "VERIFIED_PRIMARY_RESULT",
    ownershipMessage: { ...custodyLedgerPythonOwnershipMessages.primary_result },
    focusIntent: { group: "primary_result", target: "owner_heading" },
    availableActions: [
      CUSTODY_LEDGER_CLEAR_RESULT_ACTION,
      "RETURN TO EVIDENCE",
      "RETURN TO CITY THRESHOLD",
    ],
    accessibility: custodyLedgerPrimaryResultDismissalAccessibility,
    dismissalEffect: "zero_evidence",
  };
}

function freshView(primaryResult, canonicalFresh) {
  return {
    version: CUSTODY_LEDGER_PRIMARY_RESULT_DISMISSAL_VERSION,
    packetId: "RP-002",
    boardId: "SC-03-30",
    checkpoint: "sc03_python_fresh_practice_blank_protected",
    phase: "DR-20",
    stateName: "CANONICAL_BLANK_FRESH_PRACTICE",
    owner: custodyLedgerPythonOwnershipMessages.fresh_practice.owner,
    ownershipMessage: { ...custodyLedgerPythonOwnershipMessages.fresh_practice },
    workImageLabel: CUSTODY_LEDGER_FRESH_PRACTICE_LABEL,
    sourceFields: { ...canonicalFresh.sourceFields },
    sourceFieldState: "locked",
    expeditionFields: { ...custodyLedgerExpeditionFields },
    expeditionFieldState: "blank",
    transferSubmissionImplemented: false,
    transferScoringEnabled: false,
    focusIntent: { group: "fresh_practice", target: "owner_heading", then: "classification" },
    availableActions: ["RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD"],
    accessibility: custodyLedgerPrimaryResultDismissalAccessibility,
    observationEvidence: primaryResult.observationEvidence.map(clone),
    predecessor: { ...primaryResult.predecessor },
    continuation: "continuation",
    cityStateDelta: null,
    protected: true,
    routable: false,
    browserStorageUsed: false,
    offlineOnly: true,
    liveServiceUsed: false,
    authorityGranted: false,
    accessGranted: false,
    externalActionEnabled: false,
    masteryGranted: false,
    scoreDelta: 0,
    savePerformed: false,
    examCreditGranted: false,
    examGuarantee: false,
    identityMaterialClosed: true,
    successor: null,
  };
}

function exactIntent(intent) {
  return exactKeys(intent, intentKeys)
    && intent.packetId === "RP-002"
    && intent.version === CUSTODY_LEDGER_PRIMARY_RESULT_DISMISSAL_VERSION
    && intent.mode === "campaign"
    && intent.owner === "PILOT // FLIGHT RECORDER"
    && intent.action === CUSTODY_LEDGER_CLEAR_RESULT_ACTION
    && custodyLedgerPrimaryResultDismissalModalities.includes(intent.activationKind)
    && typeof intent.eventToken === "string"
    && /^[a-z0-9][a-z0-9:_-]{5,79}$/i.test(intent.eventToken);
}

export function createCustodyLedgerPrimaryResultDismissal(options = {}) {
  const primaryResult = sanitizePrimaryResult(options.primaryResult);
  if (!primaryResult) throw new TypeError("An exact verified protected primary result is required.");
  const authorities = canonicalAuthorities(primaryResult, options.learningState);
  if (!authorities) throw new TypeError("Exact canonical primary learning authority is required.");
  const canonicalResultView = resultView(primaryResult);
  const canonicalFreshView = freshView(primaryResult, authorities.canonicalFresh);
  let state = same(options.restoredState, canonicalFreshView)
    ? clone(canonicalFreshView)
    : clone(canonicalResultView);
  const handledTokens = new Set();

  return Object.freeze({
    getState() {
      return clone(state);
    },
    dispatch(intent) {
      const before = clone(state);
      if (!exactIntent(intent)) {
        return { status: "rejected", reason: "protected_result_dismissal_closed", state: before };
      }
      if (handledTokens.has(intent.eventToken)) {
        return { status: "duplicate_suppressed", reason: "one_hit_only", state: before };
      }
      if (state.phase !== "DR-00") {
        return { status: "rejected", reason: "protected_result_dismissal_closed", state: before };
      }
      handledTokens.add(intent.eventToken);
      const dismissed = dismissCustodyLedgerPrimaryResult(authorities.canonicalResult);
      if (dismissed.phase !== "python_transfer" || !same(dismissed.sourceFields, custodyLedgerTransferSourceFields)) {
        return { status: "rejected", reason: "canonical_dismissal_failed", state: before };
      }
      state = clone(canonicalFreshView);
      return { status: "fresh_practice_opened", replacement: "atomic", state: clone(state) };
    },
    returnToEvidence() {
      return {
        status: "returned_to_evidence",
        writePerformed: false,
        checkpoint: "sc03_far_complete",
        observationEvidence: primaryResult.observationEvidence.map(clone),
        predecessor: { ...primaryResult.predecessor },
      };
    },
    returnToCityThreshold() {
      return {
        status: "returned_to_city_threshold",
        writePerformed: false,
        checkpoint: "city_threshold",
        continuation: "continuation",
        cityStateDelta: null,
        predecessor: { ...primaryResult.predecessor },
      };
    },
  });
}
