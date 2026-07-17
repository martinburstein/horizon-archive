import {
  custodyLedgerCausalResult,
  custodyLedgerExpeditionFields,
  custodyLedgerObservationIds,
  custodyLedgerPythonChecks,
  custodyLedgerSourceFields,
  evaluateCustodyLedgerPrimarySource,
  getCustodyLedgerOwnershipMessage,
  resumeCustodyLedgerPython,
  sanitizeCustodyLedgerObservationState,
} from "./custodyLedgerExercise.js";

export const CUSTODY_LEDGER_PRIMARY_INTERACTION_VERSION = "rp002.primary-interaction.v1";
export const CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS = "SUBMIT EXPEDITION FIELDS";

export const custodyLedgerPrimaryInteractionModalities = Object.freeze([
  "pointer",
  "touch",
  "keyboard_enter",
  "keyboard_space",
  "switch",
  "speech",
  "screen_reader",
]);

export const custodyLedgerPrimaryInteractionAccessibility = Object.freeze({
  oneActiveGroup: true,
  semanticOrder: Object.freeze([
    "owner_heading",
    "locked_source_fields",
    "classification",
    "owner",
    "associated_help",
    "primary_action",
    "return_to_evidence",
    "return_to_city_threshold",
  ]),
  minActionCssPx: 44,
  lockedSourceFieldsProgrammatic: true,
  errorsFieldAssociated: true,
  meaningUsesColorAlone: false,
  forcedColorsEquivalent: true,
  reducedMotionDirectReplacement: true,
  naturalNarrowReflow: true,
  textZoomPercent: 200,
  horizontalPageEscape: false,
});

const permittedIntentKeys = Object.freeze([
  "packetId",
  "version",
  "mode",
  "owner",
  "action",
  "activationKind",
  "eventToken",
  "classification",
  "fieldOwner",
]);

const globalChecks = new Set([
  "result_is_dictionary",
  "exact_keys_only",
  "condition_and_source_preserved",
]);

const focusByCheck = Object.freeze({
  result_is_dictionary: "classification",
  exact_keys_only: "classification",
  condition_and_source_preserved: "classification",
  identity_remains_none: "classification",
  access_requested_remains_false: "classification",
  classification_and_owner_added_by_key_update: "classification",
});

const feedbackKeyByCheck = Object.freeze({
  result_is_dictionary: "source_locked",
  exact_keys_only: "source_locked",
  condition_and_source_preserved: "source_locked",
  identity_remains_none: "identity_unknown",
  access_requested_remains_false: "access_not_requested",
  classification_and_owner_added_by_key_update: "source_locked",
});

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function hasExactKeys(value, expected) {
  return value && typeof value === "object" && !Array.isArray(value)
    && Object.keys(value).sort().join("|") === [...expected].sort().join("|");
}

function sanitizeCanonicalBoundary(boundary) {
  if (!hasExactKeys(boundary, [
    "checkpoint", "boardId", "observationEvidence", "predecessor", "learningState",
  ])) return null;
  if (boundary.checkpoint !== "sc03_python_primary_blank" || boundary.boardId !== "SC-03-30") return null;
  if (!hasExactKeys(boundary.predecessor, [
    "verificationStatus", "cityThresholdAnchorRecorded", "civicDistrictRouteAvailable",
  ])) return null;
  if (boundary.predecessor.verificationStatus !== "verified"
    || boundary.predecessor.cityThresholdAnchorRecorded !== true
    || boundary.predecessor.civicDistrictRouteAvailable !== true) return null;

  const observations = sanitizeCustodyLedgerObservationState({
    observationEvidence: boundary.observationEvidence,
  });
  if (!Array.isArray(boundary.observationEvidence)
    || boundary.observationEvidence.length !== custodyLedgerObservationIds.length
    || new Set(boundary.observationEvidence.map((record) => record?.observationId)).size
      !== custodyLedgerObservationIds.length
    || observations.phase !== "observation_complete"
    || observations.observationEvidence.length !== custodyLedgerObservationIds.length
    || custodyLedgerObservationIds.some((id) => !observations.observationEvidence
      .some((record) => record.observationId === id))) return null;

  if (boundary.learningState?.phase !== "python_primary"
    || boundary.learningState?.prerequisiteStatus !== "complete"
    || boundary.learningState?.pythonForm !== "primary") return null;
  const learningState = resumeCustodyLedgerPython(boundary.learningState);
  if (learningState.phase !== "python_primary"
    || learningState.prerequisiteStatus !== "complete"
    || learningState.pythonForm !== "primary"
    || Object.values(learningState.pythonChecks).some(Boolean)) return null;

  return Object.freeze({
    checkpoint: boundary.checkpoint,
    boardId: boundary.boardId,
    observationEvidence: Object.freeze(boundary.observationEvidence.map((record) => Object.freeze(clone(record)))),
    predecessor: Object.freeze({ ...boundary.predecessor }),
  });
}

function blankState(boundary, attemptCount = 0, focusTarget = "owner_heading") {
  return {
    version: CUSTODY_LEDGER_PRIMARY_INTERACTION_VERSION,
    packetId: "RP-002",
    boardId: "SC-03-30",
    checkpoint: "sc03_python_primary_blank",
    phase: "30-A0",
    stateName: "BLANK_EDITABLE",
    owner: "SYSTEM // EXPEDITION SESSION",
    sourceFields: { ...custodyLedgerSourceFields },
    sourceFieldState: "locked",
    expeditionFields: { ...custodyLedgerExpeditionFields },
    editableFields: ["classification", "owner"],
    currentAttemptChecks: Object.fromEntries(custodyLedgerPythonChecks.map((id) => [id, false])),
    attemptCount,
    focusIntent: { group: "primary_interaction", target: focusTarget },
    availableActions: [
      CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS,
      "RETURN TO EVIDENCE",
      "RETURN TO CITY THRESHOLD",
    ],
    accessibility: custodyLedgerPrimaryInteractionAccessibility,
    observationEvidence: boundary.observationEvidence.map(clone),
    predecessor: { ...boundary.predecessor },
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
    examCreditGranted: false,
    examGuarantee: false,
    identityMaterialClosed: true,
    successor: null,
  };
}

export function buildCustodyLedgerPrimarySource(fields) {
  return `comparison = {
    "condition": "${custodyLedgerSourceFields.condition}",
    "source": "${custodyLedgerSourceFields.source}",
    "identity": None,
    "access_requested": False,
}

comparison["classification"] = ${JSON.stringify(fields.classification)}
comparison["owner"] = ${JSON.stringify(fields.owner)}
`;
}

export function describeCustodyLedgerPrimaryReview(evaluation) {
  const checks = Object.fromEntries(custodyLedgerPythonChecks.map((id) => [id, evaluation?.[id] === true]));
  const falseCheckIds = custodyLedgerPythonChecks.filter((id) => checks[id] !== true);
  const globalMiss = falseCheckIds.some((id) => globalChecks.has(id));
  const firstFailedCheck = falseCheckIds[0] ?? null;
  return {
    checks,
    falseCheckIds,
    passed: falseCheckIds.length === 0 && evaluation?.passed === true,
    focusIntent: falseCheckIds.length === 0
      ? { group: "primary_result", target: "owner_heading" }
      : globalMiss
        ? { group: "primary_feedback", target: "owner_heading", then: "classification" }
        : { group: "primary_feedback", target: focusByCheck[firstFailedCheck] },
    feedback: falseCheckIds.map((checkId) => {
      const authority = getCustodyLedgerOwnershipMessage(feedbackKeyByCheck[checkId]);
      return {
        checkId,
        field: focusByCheck[checkId],
        owner: "901 TEACHER // FEEDBACK",
        text: authority.text,
      };
    }),
  };
}

function exactIntent(intent) {
  return hasExactKeys(intent, permittedIntentKeys)
    && intent.packetId === "RP-002"
    && intent.version === CUSTODY_LEDGER_PRIMARY_INTERACTION_VERSION
    && intent.mode === "campaign"
    && intent.owner === "PILOT // FLIGHT RECORDER"
    && intent.action === CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS
    && custodyLedgerPrimaryInteractionModalities.includes(intent.activationKind)
    && typeof intent.eventToken === "string"
    && /^[a-z0-9][a-z0-9:_-]{5,79}$/i.test(intent.eventToken)
    && typeof intent.classification === "string"
    && intent.classification.length <= 40
    && typeof intent.fieldOwner === "string"
    && intent.fieldOwner.length <= 40;
}

function feedbackState(base, review, attemptCount) {
  return {
    ...base,
    phase: "30-A1F",
    stateName: "FEEDBACK",
    owner: "901 TEACHER // FEEDBACK",
    sourceFields: undefined,
    sourceFieldState: undefined,
    expeditionFields: undefined,
    editableFields: undefined,
    currentAttemptChecks: review.checks,
    falseCheckIds: review.falseCheckIds,
    feedback: review.feedback,
    attemptCount,
    focusIntent: review.focusIntent,
    availableActions: ["RETRY BLANK", "RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD"],
  };
}

function resultState(base, review, fields, attemptCount) {
  return {
    ...base,
    phase: "30-A2",
    stateName: "PROVISIONAL_SUIT_RESULT",
    owner: custodyLedgerCausalResult.owner,
    sourceFields: { ...custodyLedgerSourceFields },
    sourceFieldState: "read_only_locked",
    expeditionFields: { classification: fields.classification, owner: fields.owner },
    expeditionFieldState: "read_only_addition",
    editableFields: undefined,
    currentAttemptChecks: review.checks,
    attemptCount,
    focusIntent: review.focusIntent,
    availableActions: ["RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD"],
    provisionalResult: clone(custodyLedgerCausalResult),
  };
}

function stripUndefined(value) {
  return Object.fromEntries(Object.entries(value).filter(([, item]) => item !== undefined));
}

export function createCustodyLedgerPrimaryInteraction(options = {}) {
  const boundary = sanitizeCanonicalBoundary(options.boundary);
  if (!boundary) throw new TypeError("An exact verified blank PY-009 boundary is required.");
  let state = blankState(boundary);
  const restored = options.restoredState;
  if (restored && restored.phase === "30-A0" && restored.version === CUSTODY_LEDGER_PRIMARY_INTERACTION_VERSION) {
    state = blankState(boundary);
  }
  const handledTokens = new Set();

  return Object.freeze({
    getState() {
      return clone(stripUndefined(state));
    },
    dispatch(intent) {
      const before = clone(stripUndefined(state));
      if (!exactIntent(intent)) {
        return { status: "rejected", reason: "protected_primary_closed", state: before };
      }
      if (handledTokens.has(intent.eventToken)) {
        return { status: "duplicate_suppressed", reason: "one_hit_only", state: before };
      }
      if (state.phase !== "30-A0") {
        return { status: "rejected", reason: "protected_primary_closed", state: before };
      }
      handledTokens.add(intent.eventToken);
      const fields = { classification: intent.classification, owner: intent.fieldOwner };
      const evaluation = evaluateCustodyLedgerPrimarySource(buildCustodyLedgerPrimarySource(fields));
      const review = describeCustodyLedgerPrimaryReview(evaluation);
      const attemptCount = state.attemptCount + 1;
      state = review.passed
        ? resultState(state, review, fields, attemptCount)
        : feedbackState(state, review, attemptCount);
      state = stripUndefined(state);
      return {
        status: review.passed ? "provisional_result" : "feedback",
        reviewPhase: "30-A1",
        state: clone(state),
      };
    },
    retryBlank() {
      if (state.phase !== "30-A1F") return { status: "rejected", state: clone(state) };
      const focusTarget = state.focusIntent?.then ?? state.focusIntent?.target ?? "classification";
      state = blankState(boundary, state.attemptCount, focusTarget);
      return { status: "blank_retry", state: clone(state) };
    },
    returnToEvidence() {
      return {
        status: "returned_to_evidence",
        writePerformed: false,
        checkpoint: "sc03_far_complete",
        observationEvidence: boundary.observationEvidence.map(clone),
        predecessor: { ...boundary.predecessor },
      };
    },
    returnToCityThreshold() {
      return {
        status: "returned_to_city_threshold",
        writePerformed: false,
        checkpoint: "city_threshold",
        continuation: "continuation",
        cityStateDelta: null,
        predecessor: { ...boundary.predecessor },
      };
    },
  });
}
