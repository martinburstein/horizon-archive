import {
  CUSTODY_LEDGER_FRESH_PRACTICE_LABEL,
  custodyLedgerExpeditionFields,
  custodyLedgerPythonChecks,
  custodyLedgerPythonOwnershipMessages,
  custodyLedgerTransferSourceFields,
  dismissCustodyLedgerPrimaryResult,
  evaluateCustodyLedgerTransferSource,
  getCustodyLedgerOwnershipMessage,
  resumeCustodyLedgerPython,
  retryCustodyLedgerTransfer,
  submitCustodyLedgerPrimary,
  submitCustodyLedgerTransfer,
} from "./custodyLedgerExercise.js";
import {
  CUSTODY_LEDGER_PRIMARY_INTERACTION_VERSION,
  CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS,
  buildCustodyLedgerPrimarySource,
  describeCustodyLedgerPrimaryReview,
} from "./CustodyLedgerPrimaryInteraction.js";
import {
  CUSTODY_LEDGER_CLEAR_RESULT_ACTION,
  CUSTODY_LEDGER_PRIMARY_RESULT_DISMISSAL_VERSION,
  createCustodyLedgerPrimaryResultDismissal,
} from "./CustodyLedgerPrimaryResultDismissal.js";

export const CUSTODY_LEDGER_TRANSFER_INTERACTION_VERSION = "rp002.transfer-interaction.v1";
export const CUSTODY_LEDGER_RETRY_TRANSFER_ACTION = "RETRY BLANK";

export const custodyLedgerTransferInteractionModalities = Object.freeze([
  "pointer",
  "touch",
  "keyboard_enter",
  "keyboard_space",
  "switch",
  "speech",
  "screen_reader",
]);

export const custodyLedgerTransferInteractionAccessibility = Object.freeze({
  oneActiveGroup: true,
  blankSemanticOrder: Object.freeze([
    "owner_heading",
    "locked_source_fields",
    "classification",
    "owner",
    "associated_help",
    "submit_action",
    "return_to_evidence",
    "return_to_city_threshold",
  ]),
  feedbackSemanticOrder: Object.freeze([
    "owner_heading",
    "failed_check_associations",
    "retry_blank",
    "return_to_evidence",
    "return_to_city_threshold",
  ]),
  completeSemanticOrder: Object.freeze([
    "owner_heading",
    "transfer_evidence_status",
    "return_to_evidence",
    "return_to_city_threshold",
  ]),
  minActionCssPx: 44,
  lockedSourceFieldsProgrammatic: true,
  errorsFieldAssociated: true,
  ownerHeadingProgrammaticFocus: true,
  ownerHeadingInTabOrder: false,
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
  "classification",
  "fieldOwner",
]);

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function same(value, expected) {
  return JSON.stringify(value) === JSON.stringify(expected);
}

function exactKeys(value, keys) {
  return value && typeof value === "object" && !Array.isArray(value)
    && Object.keys(value).sort().join("|") === [...keys].sort().join("|");
}

function stripUndefined(value) {
  return Object.fromEntries(Object.entries(value).filter(([, item]) => item !== undefined));
}

export function buildCustodyLedgerTransferSource(fields) {
  return `comparison = {
    "condition": "${custodyLedgerTransferSourceFields.condition}",
    "source": "${custodyLedgerTransferSourceFields.source}",
    "identity": None,
    "access_requested": False,
}

comparison["classification"] = ${JSON.stringify(fields.classification)}
comparison["owner"] = ${JSON.stringify(fields.owner)}
`;
}

export function describeCustodyLedgerTransferReview(evaluation) {
  const primaryReview = describeCustodyLedgerPrimaryReview(evaluation);
  return {
    ...primaryReview,
    focusIntent: primaryReview.passed
      ? { group: "transfer_complete", target: "owner_heading" }
      : primaryReview.focusIntent.then
        ? { group: "transfer_feedback", target: "owner_heading", then: primaryReview.focusIntent.then }
        : { group: "transfer_feedback", target: primaryReview.focusIntent.target },
  };
}

function primaryEvidence(primaryResult, canonicalFreshLearning) {
  const evidence = canonicalFreshLearning.pythonEvidence;
  if (!evidence
    || evidence.form !== "primary"
    || evidence.masteryStatus !== "primary_complete"
    || custodyLedgerPythonChecks.some((id) => evidence.dimensionCorrectness?.[id] !== true)
    || custodyLedgerPythonChecks.some((id) => primaryResult.currentAttemptChecks?.[id] !== true)) return null;
  return clone(evidence);
}

function canonicalBoundary(options) {
  let dismissal;
  try {
    dismissal = createCustodyLedgerPrimaryResultDismissal({
      primaryResult: options.primaryResult,
      learningState: options.learningState,
    });
  } catch {
    return null;
  }
  const opened = dismissal.dispatch({
    packetId: "RP-002",
    version: CUSTODY_LEDGER_PRIMARY_RESULT_DISMISSAL_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CUSTODY_LEDGER_CLEAR_RESULT_ACTION,
    activationKind: "pointer",
    eventToken: "transfer-boundary-open",
  });
  if (opened.status !== "fresh_practice_opened"
    || !same(options.freshPracticeState, opened.state)) return null;

  const resumed = resumeCustodyLedgerPython(options.learningState);
  if (resumed.phase !== "python_primary"
    || resumed.prerequisiteStatus !== "complete"
    || resumed.pythonForm !== "primary") return null;
  const canonicalResult = submitCustodyLedgerPrimary(
    resumed,
    buildCustodyLedgerPrimarySource(options.primaryResult.expeditionFields),
  );
  const canonicalFreshLearning = dismissCustodyLedgerPrimaryResult(canonicalResult);
  if (canonicalFreshLearning.phase !== "python_transfer"
    || canonicalFreshLearning.activeMessageKey !== "fresh_practice"
    || canonicalFreshLearning.pythonForm !== "transfer"
    || !same(canonicalFreshLearning.sourceFields, custodyLedgerTransferSourceFields)
    || !same(canonicalFreshLearning.expeditionFields, custodyLedgerExpeditionFields)) return null;
  const verifiedPrimaryEvidence = primaryEvidence(options.primaryResult, canonicalFreshLearning);
  if (!verifiedPrimaryEvidence) return null;

  return {
    freshPracticeState: clone(opened.state),
    learningState: clone(canonicalFreshLearning),
    primaryEvidence: verifiedPrimaryEvidence,
    observationEvidence: opened.state.observationEvidence.map(clone),
    predecessor: { ...opened.state.predecessor },
  };
}

function blankState(boundary, transferEvidence = null, focusTarget = "classification") {
  const attemptCount = transferEvidence?.attemptCount ?? 0;
  return stripUndefined({
    version: CUSTODY_LEDGER_TRANSFER_INTERACTION_VERSION,
    packetId: "RP-002",
    boardId: "SC-03-30",
    checkpoint: "sc03_python_fresh_practice_blank_protected",
    phase: "FT-00",
    stateName: "BLANK_EDITABLE_TRANSFER",
    owner: custodyLedgerPythonOwnershipMessages.fresh_practice.owner,
    ownershipMessage: { ...custodyLedgerPythonOwnershipMessages.fresh_practice },
    workImageLabel: CUSTODY_LEDGER_FRESH_PRACTICE_LABEL,
    sourceFields: { ...custodyLedgerTransferSourceFields },
    sourceFieldState: "locked",
    expeditionFields: { ...custodyLedgerExpeditionFields },
    expeditionFieldState: "blank_editable",
    editableFields: ["classification", "owner"],
    currentAttemptChecks: Object.fromEntries(custodyLedgerPythonChecks.map((id) => [id, false])),
    attemptCount,
    primaryEvidence: clone(boundary.primaryEvidence),
    transferEvidence: transferEvidence ? clone(transferEvidence) : undefined,
    transferSubmissionImplemented: true,
    transferScoringEnabled: true,
    focusIntent: { group: "fresh_practice", target: "owner_heading", then: focusTarget },
    availableActions: [
      CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS,
      "RETURN TO EVIDENCE",
      "RETURN TO CITY THRESHOLD",
    ],
    accessibility: custodyLedgerTransferInteractionAccessibility,
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
    masteryGrantedByPresentation: false,
    savePerformed: false,
    examCreditGranted: false,
    examGuarantee: false,
    identityMaterialClosed: true,
    successor: null,
  });
}

function feedbackState(boundary, review, transferEvidence) {
  const base = blankState(boundary, transferEvidence);
  return stripUndefined({
    ...base,
    phase: "FT-20F",
    stateName: "TRANSFER_FEEDBACK",
    owner: "901 TEACHER // FEEDBACK",
    ownershipMessage: undefined,
    workImageLabel: undefined,
    sourceFields: undefined,
    sourceFieldState: undefined,
    expeditionFields: undefined,
    expeditionFieldState: undefined,
    editableFields: undefined,
    currentAttemptChecks: review.checks,
    falseCheckIds: review.falseCheckIds,
    feedback: review.feedback,
    focusIntent: review.focusIntent,
    availableActions: [
      CUSTODY_LEDGER_RETRY_TRANSFER_ACTION,
      "RETURN TO EVIDENCE",
      "RETURN TO CITY THRESHOLD",
    ],
  });
}

function completeState(boundary, review, transferEvidence) {
  const base = blankState(boundary, transferEvidence);
  return stripUndefined({
    ...base,
    checkpoint: "sc03_python_transfer_complete_protected",
    phase: "FT-20C",
    stateName: "TRANSFER_EVIDENCE_COMPLETE",
    owner: "SYSTEM // EXPEDITION STATE",
    ownershipMessage: undefined,
    workImageLabel: undefined,
    sourceFields: undefined,
    sourceFieldState: undefined,
    expeditionFields: undefined,
    expeditionFieldState: undefined,
    editableFields: undefined,
    currentAttemptChecks: review.checks,
    transferStatus: "complete",
    focusIntent: review.focusIntent,
    availableActions: ["RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD"],
  });
}

function exactIntent(intent) {
  return exactKeys(intent, intentKeys)
    && intent.packetId === "RP-002"
    && intent.version === CUSTODY_LEDGER_TRANSFER_INTERACTION_VERSION
    && intent.mode === "campaign"
    && intent.owner === "PILOT // FLIGHT RECORDER"
    && intent.action === CUSTODY_LEDGER_SUBMIT_EXPEDITION_FIELDS
    && custodyLedgerTransferInteractionModalities.includes(intent.activationKind)
    && typeof intent.eventToken === "string"
    && /^[a-z0-9][a-z0-9:_-]{5,79}$/i.test(intent.eventToken)
    && typeof intent.classification === "string"
    && intent.classification.length <= 40
    && typeof intent.fieldOwner === "string"
    && intent.fieldOwner.length <= 40;
}

function sanitizedRestoredEvidence(candidate, canonicalLearningState) {
  if (!candidate || typeof candidate !== "object") return null;
  const resumed = resumeCustodyLedgerPython({
    ...canonicalLearningState,
    pythonTransferEvidence: candidate,
  });
  return resumed.pythonTransferEvidence
    ? { evidence: clone(resumed.pythonTransferEvidence), learningState: clone(resumed) }
    : null;
}

function restoredBoundary(boundary, restoredState) {
  const initial = blankState(boundary);
  if (same(restoredState, initial)) {
    return { state: initial, learningState: clone(boundary.learningState) };
  }
  const safe = sanitizedRestoredEvidence(restoredState?.transferEvidence, boundary.learningState);
  if (!safe) return { state: initial, learningState: clone(boundary.learningState) };
  const review = describeCustodyLedgerTransferReview({
    ...safe.evidence.dimensionCorrectness,
    passed: safe.evidence.masteryStatus === "transfer_complete",
  });
  const rebuilt = review.passed
    ? completeState(boundary, review, safe.evidence)
    : restoredState?.phase === "FT-00"
      ? blankState(boundary, safe.evidence, review.focusIntent.then ?? review.focusIntent.target)
      : feedbackState(boundary, review, safe.evidence);
  return same(restoredState, rebuilt)
    ? { state: rebuilt, learningState: safe.learningState }
    : { state: initial, learningState: clone(boundary.learningState) };
}

export function createCustodyLedgerTransferInteraction(options = {}) {
  const boundary = canonicalBoundary(options);
  if (!boundary) throw new TypeError("An exact canonical protected fresh-practice boundary is required.");
  const restored = restoredBoundary(boundary, options.restoredState);
  let state = restored.state;
  let learningState = restored.learningState;
  const handledTokens = new Set();

  return Object.freeze({
    getState() {
      return clone(state);
    },
    dispatch(intent) {
      const before = clone(state);
      if (!exactIntent(intent)) {
        return { status: "rejected", reason: "protected_transfer_closed", state: before };
      }
      if (handledTokens.has(intent.eventToken)) {
        return { status: "duplicate_suppressed", reason: "one_hit_only", state: before };
      }
      if (state.phase !== "FT-00") {
        return { status: "rejected", reason: "protected_transfer_closed", state: before };
      }
      handledTokens.add(intent.eventToken);
      const source = buildCustodyLedgerTransferSource({
        classification: intent.classification,
        owner: intent.fieldOwner,
      });
      const evaluated = submitCustodyLedgerTransfer(learningState, source);
      const transferEvidence = evaluated.pythonTransferEvidence;
      if (!transferEvidence) {
        return { status: "rejected", reason: "canonical_transfer_evaluation_failed", state: before };
      }
      const review = describeCustodyLedgerTransferReview(evaluateCustodyLedgerTransferSource(source));
      learningState = clone(evaluated);
      state = review.passed
        ? completeState(boundary, review, transferEvidence)
        : feedbackState(boundary, review, transferEvidence);
      return {
        status: review.passed ? "transfer_evidence_complete" : "feedback",
        reviewPhase: "FT-10",
        state: clone(state),
      };
    },
    retryBlank() {
      if (state.phase !== "FT-20F") return { status: "rejected", state: clone(state) };
      learningState = retryCustodyLedgerTransfer(learningState);
      const focusTarget = state.focusIntent?.then ?? state.focusIntent?.target ?? "classification";
      state = blankState(boundary, learningState.pythonTransferEvidence, focusTarget);
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
