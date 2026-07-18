import {
  acknowledgeCustodyLedgerRAITransferFeedback,
  custodyLedgerPythonOwnershipMessages,
  custodyLedgerRAIDimensions,
  custodyLedgerRAIExplanationDimensions,
  custodyLedgerRAITransferScenarios,
  resumeCustodyLedgerRAI,
  submitCustodyLedgerRAITransferGuidedPractice,
  submitCustodyLedgerRAITransferScenario,
} from "./custodyLedgerExercise.js";
import { createCustodyLedgerRAIPrimaryConvergence } from "./CustodyLedgerRAIPrimaryConvergence.js";

export const CUSTODY_LEDGER_RAI_TRANSFER_CONVERGENCE_VERSION = "rp002.rai-transfer-convergence.v1";
export const CUSTODY_LEDGER_SUBMIT_RAI_TRANSFER_CASE = "SUBMIT RESPONSIBLE-AI TRANSFER CASE";
export const CUSTODY_LEDGER_ACKNOWLEDGE_RAI_TRANSFER_FEEDBACK = "ACKNOWLEDGE RESPONSIBLE-AI TRANSFER FEEDBACK";
export const CUSTODY_LEDGER_COMPLETE_RAI_TRANSFER_GUIDE = "COMPLETE ZERO-CREDIT RESPONSIBLE-AI TRANSFER GUIDE";

export const custodyLedgerRAITransferConvergenceModalities = Object.freeze([
  "pointer", "touch", "keyboard_enter", "keyboard_space", "switch", "speech", "screen_reader",
]);

export const custodyLedgerRAITransferConvergenceAccessibility = Object.freeze({
  oneActiveGroup: true,
  transferSemanticOrder: Object.freeze([
    "owner_heading", "course_transfer_case", "principle", "mitigation", "accountable_owner",
    "submit_responsible_ai_transfer_case", "return_to_evidence", "return_to_city_threshold",
  ]),
  feedbackSemanticOrder: Object.freeze([
    "owner_heading", "actual_failed_case_dimensions", "acknowledge_responsible_ai_transfer_feedback",
    "return_to_evidence", "return_to_city_threshold",
  ]),
  guideSemanticOrder: Object.freeze([
    "owner_heading", "neutral_zero_credit_case", "principle", "mitigation", "accountable_owner",
    "complete_zero_credit_transfer_guide", "return_to_evidence", "return_to_city_threshold",
  ]),
  blankExplanationSemanticOrder: Object.freeze([
    "owner_heading", ...custodyLedgerRAIExplanationDimensions, "return_to_evidence", "return_to_city_threshold",
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
const responseKeys = Object.freeze(["caseId", "dimension", "value"]);
const guideResponseKeys = Object.freeze(["dimension", "value"]);

function clone(value) { return JSON.parse(JSON.stringify(value)); }
function same(value, expected) { return JSON.stringify(value) === JSON.stringify(expected); }
function exactKeys(value, keys) {
  return value && typeof value === "object" && !Array.isArray(value)
    && Object.keys(value).sort().join("|") === [...keys].sort().join("|");
}
function blankDimensions() {
  return Object.fromEntries(custodyLedgerRAIDimensions.map((dimension) => [dimension, ""]));
}

function exactIntent(intent) {
  return exactKeys(intent, intentKeys)
    && intent.packetId === "RP-002"
    && intent.version === CUSTODY_LEDGER_RAI_TRANSFER_CONVERGENCE_VERSION
    && intent.mode === "campaign"
    && intent.owner === "PILOT // FLIGHT RECORDER"
    && [
      CUSTODY_LEDGER_SUBMIT_RAI_TRANSFER_CASE,
      CUSTODY_LEDGER_ACKNOWLEDGE_RAI_TRANSFER_FEEDBACK,
      CUSTODY_LEDGER_COMPLETE_RAI_TRANSFER_GUIDE,
    ].includes(intent.action)
    && custodyLedgerRAITransferConvergenceModalities.includes(intent.activationKind)
    && typeof intent.eventToken === "string"
    && /^[a-z0-9][a-z0-9:_-]{5,79}$/i.test(intent.eventToken);
}

function canonicalAuthorities(options) {
  let primaryController;
  try {
    primaryController = createCustodyLedgerRAIPrimaryConvergence({
      ...options,
      restoredState: options.acceptedBlankTransferState,
    });
  } catch {
    return null;
  }
  const accepted = primaryController.getState();
  if (!same(accepted, options.acceptedBlankTransferState)
    || accepted.phase !== "RAIC-20C"
    || accepted.stateName !== "GENUINELY_BLANK_RAI_TRANSFER_BOUNDARY"
    || accepted.case?.id !== custodyLedgerRAITransferScenarios[0].id
    || accepted.controlState !== "genuinely_blank"
    || accepted.transferActionExposed !== false) return null;
  const raiTransfer = resumeCustodyLedgerRAI({
    phase: "rai_transfer",
    pythonEvidence: accepted.primaryEvidence,
    pythonTransferEvidence: accepted.transferEvidence,
    pythonExplanationEvidence: accepted.pythonExplanationEvidence,
    raiEvidence: accepted.finalizedRAIEvidence,
  });
  if (raiTransfer.phase !== "rai_transfer"
    || raiTransfer.raiTransferScenarioId !== custodyLedgerRAITransferScenarios[0].id
    || !same(raiTransfer.raiTransferResponses, {})) return null;
  return { accepted, primaryController, raiTransfer };
}

function commonState(authorities) {
  const accepted = authorities.accepted;
  return {
    version: CUSTODY_LEDGER_RAI_TRANSFER_CONVERGENCE_VERSION,
    packetId: accepted.packetId,
    boardId: accepted.boardId,
    checkpoint: "sc03_rai_transfer_convergence_protected",
    finalizedPythonEvidenceVisibility: "hidden_prerequisite_only",
    primaryEvidence: clone(accepted.primaryEvidence),
    transferEvidence: clone(accepted.transferEvidence),
    pythonExplanationEvidence: clone(accepted.pythonExplanationEvidence),
    finalizedRAIPrimaryEvidenceVisibility: "hidden_prerequisite_only",
    finalizedRAIPrimaryEvidence: clone(accepted.finalizedRAIEvidence),
    observationEvidence: accepted.observationEvidence.map(clone),
    predecessor: { ...accepted.predecessor },
    continuation: accepted.continuation,
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
    raiCrossCreditGranted: false,
    savePerformed: false,
    examCreditGranted: false,
    examGuarantee: false,
    identityMaterialClosed: true,
    successor: null,
    accessibility: custodyLedgerRAITransferConvergenceAccessibility,
  };
}

function hiddenTransferEvidence(authorityState) {
  return authorityState.raiTransferEvidence
    ? {
      finalizedRAITransferEvidenceVisibility: "hidden_allowlisted_recovery_only",
      finalizedRAITransferEvidence: clone(authorityState.raiTransferEvidence),
    }
    : { finalizedRAITransferEvidenceVisibility: "none" };
}

function control(id, value) {
  return {
    id: id === "owner" ? "accountable_owner" : id,
    authorityDimension: id,
    valueState: value === "" ? "genuinely_blank" : "private_session_work",
  };
}

function transferView(authorities, authorityState, response) {
  const scenario = custodyLedgerRAITransferScenarios.find(({ id }) => id === authorityState.raiTransferScenarioId);
  return {
    ...commonState(authorities),
    ...hiddenTransferEvidence(authorityState),
    phase: "RAITC-00",
    authorityPhase: authorityState.phase,
    stateName: "BLANK_OR_SESSION_ONLY_RAI_TRANSFER",
    owner: custodyLedgerPythonOwnershipMessages.rai_transfer.owner,
    ownershipMessage: clone(custodyLedgerPythonOwnershipMessages.rai_transfer),
    mappingId: "RP002-RAI-01",
    raiForm: "transfer",
    case: { id: scenario.id, prompt: scenario.prompt },
    caseOrdinal: authorityState.raiTransferScenarioIndex + 1,
    caseCount: custodyLedgerRAITransferScenarios.length,
    controls: custodyLedgerRAIDimensions.map((dimension) => control(dimension, response[dimension])),
    controlState: Object.values(response).every((value) => value === "") ? "genuinely_blank" : "private_session_work",
    interimEvaluationExposed: false,
    attemptStatus: "not_yet_simultaneously_evaluated",
    campaignCommitEnabled: false,
    focusIntent: {
      group: "rai_transfer", target: "owner_heading", then: authorityState.focusIntent?.dimension ?? "principle",
    },
    availableActions: [
      CUSTODY_LEDGER_SUBMIT_RAI_TRANSFER_CASE, "RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD",
    ],
  };
}

function feedbackView(authorities, authorityState) {
  const failedCaseDimensions = authorityState.raiTransferFeedback.map(({ scenarioId, dimension, text }) => ({
    scenarioId, dimension, text, answerFree: true,
  }));
  return {
    ...commonState(authorities),
    ...hiddenTransferEvidence(authorityState),
    phase: "RAITC-20F",
    authorityPhase: authorityState.phase,
    stateName: "ACTUAL_FAILED_TRANSFER_CASE_DIMENSIONS_ONLY",
    owner: custodyLedgerPythonOwnershipMessages.rai_transfer_feedback.owner,
    ownershipMessage: clone(custodyLedgerPythonOwnershipMessages.rai_transfer_feedback),
    failedCaseDimensions,
    privateChoicesCleared: true,
    passedDimensionsRecapped: false,
    totalScoreExposed: false,
    transientFeedbackOnly: true,
    campaignCommitEnabled: false,
    focusIntent: {
      group: "rai_transfer_feedback",
      target: "owner_heading",
      then: failedCaseDimensions[0] ? `${failedCaseDimensions[0].scenarioId}:${failedCaseDimensions[0].dimension}` : null,
    },
    availableActions: [
      CUSTODY_LEDGER_ACKNOWLEDGE_RAI_TRANSFER_FEEDBACK, "RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD",
    ],
  };
}

function guideView(authorities, authorityState, response) {
  return {
    ...commonState(authorities),
    ...hiddenTransferEvidence(authorityState),
    phase: "RAITC-30G",
    authorityPhase: authorityState.phase,
    stateName: "NEUTRAL_ZERO_CREDIT_RAI_TRANSFER_GUIDE",
    owner: custodyLedgerPythonOwnershipMessages.rai_transfer_guided.owner,
    ownershipMessage: clone(custodyLedgerPythonOwnershipMessages.rai_transfer_guided),
    guide: { id: authorityState.guidedPractice.id, prompt: authorityState.guidedPractice.prompt, scored: false },
    controls: custodyLedgerRAIDimensions.map((dimension) => control(dimension, response[dimension])),
    controlState: Object.values(response).every((value) => value === "") ? "genuinely_blank" : "private_session_work",
    guideMayGrantCredit: false,
    campaignCommitEnabled: false,
    focusIntent: { group: "rai_transfer_guided", target: "owner_heading", then: "principle" },
    availableActions: [
      CUSTODY_LEDGER_COMPLETE_RAI_TRANSFER_GUIDE, "RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD",
    ],
  };
}

function blankExplanationView(authorities, authorityState) {
  return {
    ...commonState(authorities),
    ...hiddenTransferEvidence(authorityState),
    phase: "RAITC-20C",
    authorityPhase: authorityState.phase,
    stateName: "GENUINELY_BLANK_RAI_EXPLANATION_ENTRY",
    owner: custodyLedgerPythonOwnershipMessages.rai_explanation.owner,
    ownershipMessage: clone(custodyLedgerPythonOwnershipMessages.rai_explanation),
    mappingId: "RP002-RAI-01",
    raiForm: "explanation",
    controls: custodyLedgerRAIExplanationDimensions.map((dimension) => control(dimension, "")),
    controlState: "genuinely_blank",
    attemptStatus: "no_attempt",
    explanationEvaluationExposed: false,
    explanationActionExposed: false,
    campaignCommitEnabled: false,
    focusIntent: { group: "rai_explanation", target: "owner_heading", then: custodyLedgerRAIExplanationDimensions[0] },
    availableActions: ["RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD"],
  };
}

function viewFor(authorities, authorityState, transferResponse, guideResponse) {
  if (authorityState.phase === "rai_transfer") return transferView(authorities, authorityState, transferResponse);
  if (authorityState.phase === "rai_transfer_feedback") return feedbackView(authorities, authorityState);
  if (authorityState.phase === "rai_transfer_guided") return guideView(authorities, authorityState, guideResponse);
  if (authorityState.phase === "rai_explanation") return blankExplanationView(authorities, authorityState);
  return null;
}

function restoreAuthority(authorities, candidate) {
  const blank = transferView(authorities, authorities.raiTransfer, blankDimensions());
  if (same(candidate, blank)) return authorities.raiTransfer;
  const resumed = resumeCustodyLedgerRAI({
    ...authorities.raiTransfer,
    ...(candidate?.finalizedRAITransferEvidence
      ? { raiTransferEvidence: candidate.finalizedRAITransferEvidence }
      : {}),
  });
  const reconstructed = viewFor(authorities, resumed, blankDimensions(), blankDimensions());
  return reconstructed && same(candidate, reconstructed) ? resumed : authorities.raiTransfer;
}

export function createCustodyLedgerRAITransferConvergence(options = {}) {
  const authorities = canonicalAuthorities(options);
  if (!authorities) throw new TypeError("An exact accepted protected blank RAI transfer boundary is required.");
  let transferResponse = blankDimensions();
  let guideResponse = blankDimensions();
  let authorityState = restoreAuthority(authorities, options.restoredState);
  let state = viewFor(authorities, authorityState, transferResponse, guideResponse);
  const handledTokens = new Set();
  const reject = (reason, before) => ({ status: "rejected", reason, state: before });

  return Object.freeze({
    getState() { return clone(state); },
    updateResponse(update) {
      const before = clone(state);
      if (state.phase !== "RAITC-00"
        || !exactKeys(update, responseKeys)
        || update.caseId !== authorityState.raiTransferScenarioId
        || !custodyLedgerRAIDimensions.includes(update.dimension)
        || typeof update.value !== "string"
        || update.value.length > 200) return reject("protected_rai_transfer_authoring_closed", before);
      transferResponse[update.dimension] = update.value;
      state = transferView(authorities, authorityState, transferResponse);
      return { status: "response_updated_session_only", state: clone(state) };
    },
    updateGuidedResponse(update) {
      const before = clone(state);
      if (state.phase !== "RAITC-30G"
        || !exactKeys(update, guideResponseKeys)
        || !custodyLedgerRAIDimensions.includes(update.dimension)
        || typeof update.value !== "string"
        || update.value.length > 200) return reject("protected_rai_transfer_guide_authoring_closed", before);
      guideResponse[update.dimension] = update.value;
      state = guideView(authorities, authorityState, guideResponse);
      return { status: "guided_response_updated_session_only", state: clone(state) };
    },
    dispatch(intent) {
      const before = clone(state);
      if (!exactIntent(intent)) return reject("protected_rai_transfer_convergence_closed", before);
      if (handledTokens.has(intent.eventToken)) {
        return { status: "duplicate_suppressed", reason: "one_hit_only", state: before };
      }
      const expectedAction = state.phase === "RAITC-00"
        ? CUSTODY_LEDGER_SUBMIT_RAI_TRANSFER_CASE
        : state.phase === "RAITC-20F"
          ? CUSTODY_LEDGER_ACKNOWLEDGE_RAI_TRANSFER_FEEDBACK
          : state.phase === "RAITC-30G" ? CUSTODY_LEDGER_COMPLETE_RAI_TRANSFER_GUIDE : null;
      if (intent.action !== expectedAction) return reject("protected_rai_transfer_convergence_closed", before);
      handledTokens.add(intent.eventToken);
      if (state.phase === "RAITC-00") {
        const previousCase = authorityState.raiTransferScenarioId;
        authorityState = submitCustodyLedgerRAITransferScenario(authorityState, previousCase, transferResponse);
        transferResponse = blankDimensions();
        state = viewFor(authorities, authorityState, transferResponse, guideResponse);
        if (!state) return reject("canonical_rai_transfer_evaluation_failed", before);
        if (authorityState.phase === "rai_transfer") {
          return { status: "next_blank_transfer_case", evaluationExposed: false, replacement: "atomic", state: clone(state) };
        }
        if (authorityState.phase === "rai_transfer_feedback") {
          return { status: "actual_transfer_miss_feedback", evaluationPhase: "RAITC-10", replacement: "atomic", state: clone(state) };
        }
        return { status: "strict_transfer_complete", evaluationPhase: "RAITC-10", replacement: "atomic", state: clone(state) };
      }
      if (state.phase === "RAITC-20F") {
        authorityState = acknowledgeCustodyLedgerRAITransferFeedback(authorityState);
        guideResponse = blankDimensions();
        state = guideView(authorities, authorityState, guideResponse);
        return { status: "zero_credit_transfer_guide_opened", replacement: "atomic", state: clone(state) };
      }
      authorityState = submitCustodyLedgerRAITransferGuidedPractice(authorityState, guideResponse);
      if (authorityState.phase === "rai_transfer_guided") {
        guideResponse = blankDimensions();
        state = guideView(authorities, authorityState, guideResponse);
        return { status: "transfer_guided_practice_incomplete", creditGranted: false, state: clone(state) };
      }
      transferResponse = blankDimensions();
      guideResponse = blankDimensions();
      state = transferView(authorities, authorityState, transferResponse);
      return { status: "blank_transfer_retry", creditGranted: false, replacement: "atomic", state: clone(state) };
    },
    sanitizeBoundary() {
      authorityState = resumeCustodyLedgerRAI(authorityState);
      transferResponse = blankDimensions();
      guideResponse = blankDimensions();
      state = viewFor(authorities, authorityState, transferResponse, guideResponse);
      return { status: "sanitized", state: clone(state) };
    },
    returnToEvidence() { return authorities.primaryController.returnToEvidence(); },
    returnToCityThreshold() { return authorities.primaryController.returnToCityThreshold(); },
  });
}
