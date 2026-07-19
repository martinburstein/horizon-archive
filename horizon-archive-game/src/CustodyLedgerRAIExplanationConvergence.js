import {
  CUSTODY_LEDGER_RAI_CONCLUSION,
  acknowledgeCustodyLedgerRAIExplanationFeedback,
  custodyLedgerPythonOwnershipMessages,
  custodyLedgerRAIExplanationAnswers,
  custodyLedgerRAIExplanationDimensions,
  resumeCustodyLedgerRAI,
  submitCustodyLedgerRAIExplanation,
} from "./custodyLedgerExercise.js";
import { createCustodyLedgerRAITransferConvergence } from "./CustodyLedgerRAITransferConvergence.js";

export const CUSTODY_LEDGER_RAI_EXPLANATION_CONVERGENCE_VERSION = "rp002.rai-explanation-convergence.v1";
export const CUSTODY_LEDGER_SUBMIT_RAI_EXPLANATION = "SUBMIT RESPONSIBLE-AI EXPLANATION";
export const CUSTODY_LEDGER_RETRY_RAI_EXPLANATION = "RETRY BLANK";

export const custodyLedgerRAIExplanationConvergenceModalities = Object.freeze([
  "pointer", "touch", "keyboard_enter", "keyboard_space", "switch", "speech", "screen_reader",
]);

export const custodyLedgerRAIExplanationConvergenceAccessibility = Object.freeze({
  oneActiveGroup: true,
  authoringSemanticOrder: Object.freeze([
    "owner_heading", ...custodyLedgerRAIExplanationDimensions,
    "submit_responsible_ai_explanation", "return_to_evidence", "return_to_city_threshold",
  ]),
  feedbackSemanticOrder: Object.freeze([
    "owner_heading", "first_actual_failed_boundary", "retry_blank",
    "return_to_evidence", "return_to_city_threshold",
  ]),
  conclusionSemanticOrder: Object.freeze([
    "owner_heading", "zero_credit_pilot_conclusion", "return_to_evidence", "return_to_city_threshold",
  ]),
  minActionCssPx: 44,
  controlsSourceOrdered: true,
  errorsControlAssociated: true,
  ownerHeadingProgrammaticFocus: true,
  ownerHeadingInTabOrder: false,
  removedGroupFocusCleanup: true,
  meaningUsesColorAlone: false,
  forcedColorsEquivalent: true,
  reducedMotionDirectReplacement: true,
  naturalNarrowReflow: true,
  textZoomPercent: 200,
  horizontalPageEscape: false,
});

const intentKeys = Object.freeze(["packetId", "version", "mode", "owner", "action", "activationKind", "eventToken"]);
const responseKeys = Object.freeze(["dimension", "value"]);

function clone(value) { return JSON.parse(JSON.stringify(value)); }
function same(value, expected) { return JSON.stringify(value) === JSON.stringify(expected); }
function exactKeys(value, keys) {
  return value && typeof value === "object" && !Array.isArray(value)
    && Object.keys(value).sort().join("|") === [...keys].sort().join("|");
}
function blankResponses() {
  return Object.fromEntries(custodyLedgerRAIExplanationDimensions.map((dimension) => [dimension, ""]));
}

function exactIntent(intent) {
  return exactKeys(intent, intentKeys)
    && intent.packetId === "RP-002"
    && intent.version === CUSTODY_LEDGER_RAI_EXPLANATION_CONVERGENCE_VERSION
    && intent.mode === "campaign"
    && intent.owner === "PILOT // FLIGHT RECORDER"
    && [CUSTODY_LEDGER_SUBMIT_RAI_EXPLANATION, CUSTODY_LEDGER_RETRY_RAI_EXPLANATION].includes(intent.action)
    && custodyLedgerRAIExplanationConvergenceModalities.includes(intent.activationKind)
    && typeof intent.eventToken === "string"
    && /^[a-z0-9][a-z0-9:_-]{5,79}$/i.test(intent.eventToken);
}

function canonicalAuthorities(options) {
  let transferController;
  try {
    transferController = createCustodyLedgerRAITransferConvergence({
      ...options,
      restoredState: options.acceptedBlankExplanationState,
    });
  } catch {
    return null;
  }
  const accepted = transferController.getState();
  if (!same(accepted, options.acceptedBlankExplanationState)
    || accepted.phase !== "RAITC-20C"
    || accepted.stateName !== "GENUINELY_BLANK_RAI_EXPLANATION_ENTRY"
    || accepted.owner !== custodyLedgerPythonOwnershipMessages.rai_explanation.owner
    || accepted.controlState !== "genuinely_blank"
    || accepted.controls?.length !== custodyLedgerRAIExplanationDimensions.length
    || accepted.controls.some(({ id, valueState }, index) => (
      id !== custodyLedgerRAIExplanationDimensions[index] || valueState !== "genuinely_blank"
    ))
    || accepted.explanationActionExposed !== false
    || accepted.explanationEvaluationExposed !== false) return null;

  const explanation = resumeCustodyLedgerRAI({
    pythonEvidence: accepted.primaryEvidence,
    pythonTransferEvidence: accepted.transferEvidence,
    pythonExplanationEvidence: accepted.pythonExplanationEvidence,
    raiEvidence: accepted.finalizedRAIPrimaryEvidence,
    raiTransferEvidence: accepted.finalizedRAITransferEvidence,
  });
  if (explanation.phase !== "rai_explanation"
    || explanation.activeMessageKey !== "rai_explanation"
    || explanation.raiForm !== "explanation"
    || !Object.values(explanation.raiExplanationSelections ?? {}).every((value) => value === "")) return null;
  return { accepted, transferController, explanation };
}

function hiddenExplanationEvidence(authorityState) {
  return authorityState.raiExplanationEvidence
    ? {
      finalizedRAIExplanationEvidenceVisibility: "hidden_allowlisted_recovery_only",
      finalizedRAIExplanationEvidence: clone(authorityState.raiExplanationEvidence),
    }
    : { finalizedRAIExplanationEvidenceVisibility: "none" };
}

function commonState(authorities, authorityState) {
  const accepted = authorities.accepted;
  return {
    version: CUSTODY_LEDGER_RAI_EXPLANATION_CONVERGENCE_VERSION,
    packetId: accepted.packetId,
    boardId: accepted.boardId,
    checkpoint: "sc03_rai_explanation_convergence_protected",
    finalizedPythonEvidenceVisibility: "hidden_prerequisite_only",
    primaryEvidence: clone(accepted.primaryEvidence),
    transferEvidence: clone(accepted.transferEvidence),
    pythonExplanationEvidence: clone(accepted.pythonExplanationEvidence),
    finalizedRAIPrimaryEvidenceVisibility: "hidden_prerequisite_only",
    finalizedRAIPrimaryEvidence: clone(accepted.finalizedRAIPrimaryEvidence),
    finalizedRAITransferEvidenceVisibility: "hidden_prerequisite_only",
    finalizedRAITransferEvidence: clone(accepted.finalizedRAITransferEvidence),
    ...hiddenExplanationEvidence(authorityState),
    observationEvidence: accepted.observationEvidence.map(clone),
    predecessor: { ...accepted.predecessor },
    continuation: accepted.continuation,
    cityStateDelta: null,
    campaignCommitEnabled: false,
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
    explanationCrossCreditGranted: false,
    savePerformed: false,
    examCreditGranted: false,
    examGuarantee: false,
    identityMaterialClosed: true,
    successor: null,
    accessibility: custodyLedgerRAIExplanationConvergenceAccessibility,
  };
}

function control(dimension, value) {
  return { id: dimension, valueState: value === "" ? "genuinely_blank" : "private_session_work" };
}

function authoringView(authorities, authorityState, responses) {
  const blank = Object.values(responses).every((value) => value === "");
  return {
    ...commonState(authorities, authorityState),
    phase: "RAIEC-00",
    authorityPhase: authorityState.phase,
    stateName: "BLANK_OR_SESSION_ONLY_RAI_EXPLANATION",
    owner: custodyLedgerPythonOwnershipMessages.rai_explanation.owner,
    ownershipMessage: clone(custodyLedgerPythonOwnershipMessages.rai_explanation),
    mappingId: "RP002-RAI-01",
    raiForm: "explanation",
    controls: custodyLedgerRAIExplanationDimensions.map((dimension) => control(dimension, responses[dimension])),
    controlState: blank ? "genuinely_blank" : "private_session_work",
    attemptStatus: authorityState.raiExplanationEvidence ? "blank_retry_not_submitted" : "no_attempt",
    evaluationStatus: "not_yet_evaluated",
    focusIntent: {
      group: "rai_explanation",
      target: "owner_heading",
      then: authorityState.focusIntent?.dimension ?? custodyLedgerRAIExplanationDimensions[0],
    },
    availableActions: [
      CUSTODY_LEDGER_SUBMIT_RAI_EXPLANATION, "RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD",
    ],
  };
}

function feedbackView(authorities, authorityState) {
  const feedback = authorityState.explanationFeedback;
  return {
    ...commonState(authorities, authorityState),
    phase: "RAIEC-20F",
    authorityPhase: authorityState.phase,
    stateName: "FIRST_ACTUAL_FAILED_RAI_EXPLANATION_BOUNDARY_ONLY",
    owner: feedback.owner,
    ownershipMessage: clone(custodyLedgerPythonOwnershipMessages.rai_explanation_feedback),
    failedBoundary: {
      id: feedback.dimension,
      text: feedback.text,
      answerFree: true,
      programmaticallyAssociated: true,
    },
    privateResponsesCleared: true,
    passedBoundariesRecapped: false,
    totalScoreExposed: false,
    transientFeedbackOnly: true,
    focusIntent: {
      group: "rai_explanation_feedback", target: "owner_heading", then: feedback.dimension,
    },
    availableActions: [
      CUSTODY_LEDGER_RETRY_RAI_EXPLANATION, "RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD",
    ],
  };
}

function conclusionView(authorities, authorityState) {
  if (authorityState.conclusion?.text !== CUSTODY_LEDGER_RAI_CONCLUSION
    || authorityState.conclusion?.owner !== custodyLedgerPythonOwnershipMessages.rai_conclusion.owner) return null;
  return {
    ...commonState(authorities, authorityState),
    phase: "RAIEC-20C",
    authorityPhase: authorityState.phase,
    stateName: "EXACT_ZERO_CREDIT_PILOT_RAI_CONCLUSION",
    owner: authorityState.conclusion.owner,
    conclusion: clone(authorityState.conclusion),
    conclusionCredit: "zero",
    dismissalExposed: false,
    laterActionExposed: false,
    focusIntent: { group: "rai_complete", target: "owner_heading" },
    availableActions: ["RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD"],
  };
}

function viewFor(authorities, authorityState, responses) {
  if (authorityState.phase === "rai_explanation") return authoringView(authorities, authorityState, responses);
  if (authorityState.phase === "rai_explanation_feedback") return feedbackView(authorities, authorityState);
  if (authorityState.phase === "rai_complete") return conclusionView(authorities, authorityState);
  return null;
}

function reconstructFeedback(authorities, evidence) {
  if (!evidence || evidence.masteryStatus !== "remediation_required" || evidence.attemptCount < 1) return null;
  const priorEvidence = {
    ...clone(evidence),
    attemptCount: Math.max(0, evidence.attemptCount - 1),
    hintLevel: Math.max(0, evidence.hintLevel - 1),
  };
  const blank = resumeCustodyLedgerRAI({
    ...authorities.explanation,
    raiExplanationEvidence: priorEvidence,
  });
  const selections = Object.fromEntries(custodyLedgerRAIExplanationDimensions.map((dimension) => [
    dimension,
    evidence.dimensionCorrectness?.[dimension] === true
      ? custodyLedgerRAIExplanationAnswers[dimension]
      : `invalid-${dimension}`,
  ]));
  const feedback = submitCustodyLedgerRAIExplanation(blank, selections);
  return feedback.phase === "rai_explanation_feedback" ? feedback : null;
}

function restoreAuthority(authorities, candidate) {
  const initial = authoringView(authorities, authorities.explanation, blankResponses());
  if (same(candidate, initial)) return authorities.explanation;
  const evidence = candidate?.finalizedRAIExplanationEvidence;
  if (!evidence) return authorities.explanation;
  const restored = candidate.phase === "RAIEC-20F"
    ? reconstructFeedback(authorities, evidence)
    : resumeCustodyLedgerRAI({ ...authorities.explanation, raiExplanationEvidence: evidence });
  const reconstructed = restored ? viewFor(authorities, restored, blankResponses()) : null;
  return reconstructed && same(candidate, reconstructed) ? restored : authorities.explanation;
}

export function createCustodyLedgerRAIExplanationConvergence(options = {}) {
  const authorities = canonicalAuthorities(options);
  if (!authorities) throw new TypeError("An exact accepted protected blank RAI explanation boundary is required.");
  let responses = blankResponses();
  let authorityState = restoreAuthority(authorities, options.restoredState);
  let state = viewFor(authorities, authorityState, responses);
  const handledTokens = new Set();
  const reject = (reason, before) => ({ status: "rejected", reason, state: before });

  return Object.freeze({
    getState() { return clone(state); },
    updateResponse(update) {
      const before = clone(state);
      if (state.phase !== "RAIEC-00"
        || !exactKeys(update, responseKeys)
        || !custodyLedgerRAIExplanationDimensions.includes(update.dimension)
        || typeof update.value !== "string"
        || update.value.length > 240) return reject("protected_rai_explanation_authoring_closed", before);
      responses[update.dimension] = update.value;
      state = authoringView(authorities, authorityState, responses);
      return { status: "response_updated_session_only", state: clone(state) };
    },
    dispatch(intent) {
      const before = clone(state);
      if (!exactIntent(intent)) return reject("protected_rai_explanation_convergence_closed", before);
      if (handledTokens.has(intent.eventToken)) {
        return { status: "duplicate_suppressed", reason: "one_hit_only", state: before };
      }
      const expectedAction = state.phase === "RAIEC-00"
        ? CUSTODY_LEDGER_SUBMIT_RAI_EXPLANATION
        : state.phase === "RAIEC-20F" ? CUSTODY_LEDGER_RETRY_RAI_EXPLANATION : null;
      if (intent.action !== expectedAction) return reject("protected_rai_explanation_convergence_closed", before);
      handledTokens.add(intent.eventToken);
      if (state.phase === "RAIEC-00") {
        authorityState = submitCustodyLedgerRAIExplanation(authorityState, responses);
        responses = blankResponses();
        state = viewFor(authorities, authorityState, responses);
        if (!state) return reject("canonical_rai_explanation_evaluation_failed", before);
        return {
          status: authorityState.phase === "rai_complete"
            ? "strict_explanation_complete"
            : "first_actual_boundary_feedback",
          evaluationPhase: "RAIEC-10",
          replacement: "atomic",
          state: clone(state),
        };
      }
      authorityState = acknowledgeCustodyLedgerRAIExplanationFeedback(authorityState);
      responses = blankResponses();
      state = authoringView(authorities, authorityState, responses);
      return { status: "blank_explanation_retry", replacement: "atomic", state: clone(state) };
    },
    sanitizeBoundary() {
      authorityState = resumeCustodyLedgerRAI(authorityState);
      responses = blankResponses();
      state = viewFor(authorities, authorityState, responses);
      return { status: "sanitized", state: clone(state) };
    },
    returnToEvidence() { return authorities.transferController.returnToEvidence(); },
    returnToCityThreshold() { return authorities.transferController.returnToCityThreshold(); },
  });
}
