import {
  custodyLedgerExplanationDimensions,
  custodyLedgerPythonOwnershipMessages,
  resumeCustodyLedgerPython,
  submitCustodyLedgerExplanation,
} from "./custodyLedgerExercise.js";
import {
  createCustodyLedgerExplanationEntry,
} from "./CustodyLedgerExplanationEntry.js";

export const CUSTODY_LEDGER_EXPLANATION_SUBMISSION_VERSION = "rp002.explanation-submission.v1";
export const CUSTODY_LEDGER_SUBMIT_PYTHON_EXPLANATION = "SUBMIT PYTHON EXPLANATION";
export const CUSTODY_LEDGER_RETRY_BLANK_EXPLANATION = "RETRY BLANK";

export const custodyLedgerExplanationSubmissionModalities = Object.freeze([
  "pointer",
  "touch",
  "keyboard_enter",
  "keyboard_space",
  "switch",
  "speech",
  "screen_reader",
]);

export const custodyLedgerExplanationSubmissionAccessibility = Object.freeze({
  oneActiveGroup: true,
  authoringSemanticOrder: Object.freeze([
    "owner_heading",
    "explanation_prompt",
    ...custodyLedgerExplanationDimensions,
    "submit_python_explanation",
    "return_to_evidence",
    "return_to_city_threshold",
  ]),
  feedbackSemanticOrder: Object.freeze([
    "owner_heading",
    "bounded_system_result",
    "failed_dimension_associations",
    "retry_blank",
    "return_to_evidence",
    "return_to_city_threshold",
  ]),
  conclusionSemanticOrder: Object.freeze([
    "owner_heading",
    "bounded_system_result",
    "python_conclusion",
    "return_to_evidence",
    "return_to_city_threshold",
  ]),
  minActionCssPx: 44,
  errorsControlAssociated: true,
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
]);

const responseKeys = Object.freeze(["dimension", "value"]);
const evidenceKeys = Object.freeze([
  "packetId",
  "mappingId",
  "form",
  "skillId",
  "dimensionCorrectness",
  "attemptCount",
  "hintLevel",
  "confidence",
  "misconceptionTags",
  "masteryStatus",
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

function blankResponses() {
  return Object.fromEntries(custodyLedgerExplanationDimensions.map((dimension) => [dimension, ""]));
}

function exactIntent(intent) {
  return exactKeys(intent, intentKeys)
    && intent.packetId === "RP-002"
    && intent.version === CUSTODY_LEDGER_EXPLANATION_SUBMISSION_VERSION
    && intent.mode === "campaign"
    && intent.owner === "PILOT // FLIGHT RECORDER"
    && intent.action === CUSTODY_LEDGER_SUBMIT_PYTHON_EXPLANATION
    && custodyLedgerExplanationSubmissionModalities.includes(intent.activationKind)
    && typeof intent.eventToken === "string"
    && /^[a-z0-9][a-z0-9:_-]{5,79}$/i.test(intent.eventToken);
}

function exactResponseUpdate(update) {
  return exactKeys(update, responseKeys)
    && custodyLedgerExplanationDimensions.includes(update.dimension)
    && typeof update.value === "string"
    && update.value.length <= 2000;
}

function canonicalAuthorities(options) {
  let entryAuthority;
  try {
    entryAuthority = createCustodyLedgerExplanationEntry({
      ...options,
      restoredState: options.explanationEntryState,
    });
  } catch {
    return null;
  }
  const explanationEntry = entryAuthority.getState();
  if (explanationEntry.phase !== "EX-20"
    || explanationEntry.stateName !== "CANONICAL_BLANK_PYTHON_EXPLANATION"
    || !same(explanationEntry, options.explanationEntryState)
    || !same(explanationEntry.explanationSelections, blankResponses())) return null;

  const learningState = resumeCustodyLedgerPython({
    ...options.learningState,
    prerequisiteStatus: "complete",
    pythonEvidence: explanationEntry.primaryEvidence,
    pythonTransferEvidence: explanationEntry.transferEvidence,
  });
  if (learningState.phase !== "python_explanation"
    || learningState.activeMessageKey !== "explanation_prompt"
    || learningState.pythonForm !== "explanation"
    || !same(learningState.explanationSelections, blankResponses())) return null;

  return { entryAuthority, explanationEntry, learningState };
}

function commonState(authorities) {
  const entry = authorities.explanationEntry;
  return {
    version: CUSTODY_LEDGER_EXPLANATION_SUBMISSION_VERSION,
    packetId: entry.packetId,
    boardId: entry.boardId,
    checkpoint: "sc03_python_explanation_submission_protected",
    finalizedEvidenceVisibility: "hidden_prerequisite_only",
    primaryEvidence: clone(entry.primaryEvidence),
    transferEvidence: clone(entry.transferEvidence),
    observationEvidence: entry.observationEvidence.map(clone),
    predecessor: { ...entry.predecessor },
    continuation: entry.continuation,
    cityStateDelta: null,
    protected: true,
    routable: false,
    browserStorageUsed: false,
    offlineOnly: true,
    liveServiceUsed: false,
    authorityGranted: false,
    accessGranted: false,
    externalActionEnabled: false,
    storyObservationGranted: false,
    masteryGrantedByPresentation: false,
    savePerformed: false,
    examCreditGranted: false,
    examGuarantee: false,
    identityMaterialClosed: true,
    successor: null,
    accessibility: custodyLedgerExplanationSubmissionAccessibility,
  };
}

function authoringState(authorities, responses, recoveryTarget = null) {
  return {
    ...commonState(authorities),
    phase: "EXS-00",
    authorityPhase: "python_explanation",
    stateName: "BLANK_OR_SESSION_ONLY_EXPLANATION_AUTHORING",
    owner: custodyLedgerPythonOwnershipMessages.explanation_prompt.owner,
    ownershipMessage: { ...custodyLedgerPythonOwnershipMessages.explanation_prompt },
    explanationControls: custodyLedgerExplanationDimensions.map((dimension) => ({
      id: dimension,
      valueState: responses[dimension] === "" ? "genuinely_blank" : "authored_session_only",
    })),
    explanationControlState: Object.values(responses).every((value) => value === "")
      ? "genuinely_blank"
      : "private_session_work",
    scoringEnabled: true,
    campaignCommitEnabled: false,
    attemptStatus: "no_attempt",
    focusIntent: {
      group: "python_explanation",
      target: "owner_heading",
      then: recoveryTarget ?? custodyLedgerExplanationDimensions[0],
    },
    availableActions: [
      CUSTODY_LEDGER_SUBMIT_PYTHON_EXPLANATION,
      "RETURN TO EVIDENCE",
      "RETURN TO CITY THRESHOLD",
    ],
  };
}

function boundedSystemResult(score, passed) {
  return {
    owner: "SYSTEM // EXPEDITION STATE",
    confirmedDimensions: score,
    totalDimensions: custodyLedgerExplanationDimensions.length,
    passed,
    currentAttemptOnly: true,
  };
}

function feedbackState(authorities, result) {
  const evidence = result.pythonExplanationEvidence;
  const failedDimensions = custodyLedgerExplanationDimensions.filter(
    (dimension) => evidence.dimensionCorrectness[dimension] !== true,
  );
  return {
    ...commonState(authorities),
    phase: "EXS-20F",
    authorityPhase: result.phase,
    stateName: "ANSWER_FREE_TEACHER_REMEDIATION",
    owner: "901 TEACHER // FEEDBACK",
    boundedResult: boundedSystemResult(
      custodyLedgerExplanationDimensions.length - failedDimensions.length,
      false,
    ),
    failedDimensions,
    remediation: failedDimensions.map((dimension) => ({
      dimension,
      control: dimension,
      text: "This response did not satisfy the current dimension. Rebuild it without carrying prior prose.",
      answerFree: true,
    })),
    privateProseCleared: true,
    transientResultOnly: true,
    focusIntent: {
      group: "python_explanation_feedback",
      target: "owner_heading",
      then: failedDimensions[0],
    },
    availableActions: [
      CUSTODY_LEDGER_RETRY_BLANK_EXPLANATION,
      "RETURN TO EVIDENCE",
      "RETURN TO CITY THRESHOLD",
    ],
  };
}

function completeState(authorities, explanationEvidence) {
  return {
    ...commonState(authorities),
    phase: "EXS-20C",
    authorityPhase: "python_complete",
    stateName: "BOUNDED_PYTHON_CONCLUSION",
    owner: custodyLedgerPythonOwnershipMessages.python_conclusion.owner,
    ownershipMessage: { ...custodyLedgerPythonOwnershipMessages.python_conclusion },
    boundedResult: boundedSystemResult(custodyLedgerExplanationDimensions.length, true),
    pythonExplanationEvidence: clone(explanationEvidence),
    evidenceScope: "PY-009_EXPLANATION_CURRENT_ATTEMPT_ONLY",
    transientResultOnly: true,
    campaignCommitEnabled: false,
    focusIntent: { group: "python_conclusion", target: "owner_heading" },
    availableActions: ["RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD"],
  };
}

function exactCompleteEvidence(value) {
  return exactKeys(value, evidenceKeys)
    && value.packetId === "RP-002"
    && value.mappingId === "RP002-A3-CIVIC-COMPARISON"
    && value.form === "explanation"
    && value.skillId === "PY-009"
    && exactKeys(value.dimensionCorrectness, custodyLedgerExplanationDimensions)
    && custodyLedgerExplanationDimensions.every(
      (dimension) => value.dimensionCorrectness[dimension] === true,
    )
    && Number.isSafeInteger(value.attemptCount)
    && value.attemptCount >= 1
    && value.attemptCount <= 999
    && value.hintLevel === 0
    && value.confidence === null
    && Array.isArray(value.misconceptionTags)
    && value.misconceptionTags.length === 0
    && value.masteryStatus === "explanation_complete";
}

function restoredState(authorities, candidate) {
  const blank = authoringState(authorities, blankResponses());
  if (same(candidate, blank)) return blank;
  if (!exactCompleteEvidence(candidate?.pythonExplanationEvidence)) return blank;
  const complete = completeState(authorities, candidate.pythonExplanationEvidence);
  return same(candidate, complete) ? complete : blank;
}

export function createCustodyLedgerExplanationSubmission(options = {}) {
  const authorities = canonicalAuthorities(options);
  if (!authorities) throw new TypeError("An exact canonical protected blank EX-20 boundary is required.");
  let responses = blankResponses();
  let state = restoredState(authorities, options.restoredState);
  const handledTokens = new Set();
  let recoveryTarget = null;

  return Object.freeze({
    getState() {
      return clone(state);
    },
    updateResponse(update) {
      const before = clone(state);
      if (state.phase !== "EXS-00" || !exactResponseUpdate(update)) {
        return { status: "rejected", reason: "protected_explanation_authoring_closed", state: before };
      }
      responses[update.dimension] = update.value;
      state = authoringState(authorities, responses, recoveryTarget);
      return { status: "response_updated_session_only", state: clone(state) };
    },
    dispatch(intent) {
      const before = clone(state);
      if (!exactIntent(intent)) {
        return { status: "rejected", reason: "protected_explanation_submission_closed", state: before };
      }
      if (handledTokens.has(intent.eventToken)) {
        return { status: "duplicate_suppressed", reason: "one_hit_only", state: before };
      }
      if (state.phase !== "EXS-00") {
        return { status: "rejected", reason: "protected_explanation_submission_closed", state: before };
      }
      handledTokens.add(intent.eventToken);
      const evaluated = submitCustodyLedgerExplanation(authorities.learningState, responses);
      responses = blankResponses();
      if (!evaluated.pythonExplanationEvidence) {
        return { status: "rejected", reason: "canonical_explanation_evaluation_failed", state: before };
      }
      if (evaluated.phase === "python_complete") {
        state = completeState(authorities, evaluated.pythonExplanationEvidence);
        return { status: "python_explanation_complete", evaluationPhase: "EXS-10", state: clone(state) };
      }
      if (evaluated.phase !== "python_explanation") {
        state = authoringState(authorities, responses);
        return { status: "rejected", reason: "canonical_explanation_evaluation_failed", state: clone(state) };
      }
      state = feedbackState(authorities, evaluated);
      recoveryTarget = state.failedDimensions[0];
      return { status: "feedback", evaluationPhase: "EXS-10", state: clone(state) };
    },
    retryBlank() {
      if (state.phase !== "EXS-20F") return { status: "rejected", state: clone(state) };
      responses = blankResponses();
      state = authoringState(authorities, responses, recoveryTarget);
      return { status: "blank_retry", state: clone(state) };
    },
    returnToEvidence() {
      return authorities.entryAuthority.returnToEvidence();
    },
    returnToCityThreshold() {
      return authorities.entryAuthority.returnToCityThreshold();
    },
  });
}
