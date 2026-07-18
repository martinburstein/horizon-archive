import {
  acknowledgeCustodyLedgerRAIFeedback,
  custodyLedgerPythonOwnershipMessages,
  custodyLedgerRAIDimensions,
  custodyLedgerRAIPrimaryScenarios,
  custodyLedgerRAITransferScenarios,
  dismissCustodyLedgerPythonConclusion,
  resumeCustodyLedgerRAI,
  submitCustodyLedgerRAIGuidedPractice,
  submitCustodyLedgerRAIPrimaryScenario,
} from "./custodyLedgerExercise.js";
import {
  createCustodyLedgerExplanationSubmission,
} from "./CustodyLedgerExplanationSubmission.js";
import {
  CUSTODY_LEDGER_OPEN_RAI_PRIMARY,
  CUSTODY_LEDGER_RAI_PRIMARY_ENTRY_VERSION,
  createCustodyLedgerRAIPrimaryEntry,
} from "./CustodyLedgerRAIPrimaryEntry.js";

export const CUSTODY_LEDGER_RAI_PRIMARY_CONVERGENCE_VERSION = "rp002.rai-primary-convergence.v1";
export const CUSTODY_LEDGER_SUBMIT_RAI_CASE = "SUBMIT RESPONSIBLE-AI CASE";
export const CUSTODY_LEDGER_ACKNOWLEDGE_RAI_FEEDBACK = "ACKNOWLEDGE RESPONSIBLE-AI FEEDBACK";
export const CUSTODY_LEDGER_COMPLETE_RAI_GUIDE = "COMPLETE ZERO-CREDIT RESPONSIBLE-AI GUIDE";

export const custodyLedgerRAIPrimaryConvergenceModalities = Object.freeze([
  "pointer",
  "touch",
  "keyboard_enter",
  "keyboard_space",
  "switch",
  "speech",
  "screen_reader",
]);

export const custodyLedgerRAIPrimaryConvergenceAccessibility = Object.freeze({
  oneActiveGroup: true,
  primarySemanticOrder: Object.freeze([
    "owner_heading",
    "course_case",
    "principle",
    "mitigation",
    "accountable_owner",
    "submit_responsible_ai_case",
    "return_to_evidence",
    "return_to_city_threshold",
  ]),
  feedbackSemanticOrder: Object.freeze([
    "owner_heading",
    "actual_failed_case_dimensions",
    "acknowledge_responsible_ai_feedback",
    "return_to_evidence",
    "return_to_city_threshold",
  ]),
  guideSemanticOrder: Object.freeze([
    "owner_heading",
    "neutral_zero_credit_case",
    "principle",
    "mitigation",
    "accountable_owner",
    "complete_zero_credit_guide",
    "return_to_evidence",
    "return_to_city_threshold",
  ]),
  blankTransferSemanticOrder: Object.freeze([
    "owner_heading",
    "course_transfer_case",
    "principle",
    "mitigation",
    "accountable_owner",
    "return_to_evidence",
    "return_to_city_threshold",
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

const intentKeys = Object.freeze([
  "packetId",
  "version",
  "mode",
  "owner",
  "action",
  "activationKind",
  "eventToken",
]);
const responseKeys = Object.freeze(["caseId", "dimension", "value"]);
const guideResponseKeys = Object.freeze(["dimension", "value"]);

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

function blankDimensions() {
  return Object.fromEntries(custodyLedgerRAIDimensions.map((dimension) => [dimension, ""]));
}

function exactIntent(intent) {
  return exactKeys(intent, intentKeys)
    && intent.packetId === "RP-002"
    && intent.version === CUSTODY_LEDGER_RAI_PRIMARY_CONVERGENCE_VERSION
    && intent.mode === "campaign"
    && intent.owner === "PILOT // FLIGHT RECORDER"
    && [
      CUSTODY_LEDGER_SUBMIT_RAI_CASE,
      CUSTODY_LEDGER_ACKNOWLEDGE_RAI_FEEDBACK,
      CUSTODY_LEDGER_COMPLETE_RAI_GUIDE,
    ].includes(intent.action)
    && custodyLedgerRAIPrimaryConvergenceModalities.includes(intent.activationKind)
    && typeof intent.eventToken === "string"
    && /^[a-z0-9][a-z0-9:_-]{5,79}$/i.test(intent.eventToken);
}

function canonicalAuthorities(options) {
  let explanationAuthority;
  let entryAuthority;
  try {
    explanationAuthority = createCustodyLedgerExplanationSubmission({
      ...options,
      restoredState: options.explanationCompleteState,
    });
    entryAuthority = createCustodyLedgerRAIPrimaryEntry({
      ...options,
      restoredState: options.explanationCompleteState,
    });
  } catch {
    return null;
  }
  const conclusion = explanationAuthority.getState();
  if (conclusion.phase !== "EXS-20C"
    || conclusion.stateName !== "BOUNDED_PYTHON_CONCLUSION"
    || !same(conclusion, options.explanationCompleteState)) return null;

  const entryResult = entryAuthority.dispatch({
    packetId: "RP-002",
    version: CUSTODY_LEDGER_RAI_PRIMARY_ENTRY_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action: CUSTODY_LEDGER_OPEN_RAI_PRIMARY,
    activationKind: "pointer",
    eventToken: "protected-convergence-entry",
  });
  if (entryResult.status !== "blank_rai_primary_opened"
    || entryResult.state.stateName !== "GENUINELY_BLANK_RAI_PRIMARY") return null;

  const raiPrimary = dismissCustodyLedgerPythonConclusion({
    packetId: conclusion.packetId,
    boardId: conclusion.boardId,
    phase: "python_complete",
    activeMessageKey: "python_conclusion",
    prerequisiteStatus: "complete",
    pythonForm: "complete",
    pythonEvidence: conclusion.primaryEvidence,
    pythonTransferEvidence: conclusion.transferEvidence,
    pythonExplanationEvidence: conclusion.pythonExplanationEvidence,
  });
  if (raiPrimary.phase !== "rai_primary"
    || raiPrimary.raiScenarioId !== custodyLedgerRAIPrimaryScenarios[0].id
    || !same(raiPrimary.raiWorkingResponses, {})) return null;
  return { conclusion, entryAuthority, entryView: entryResult.state, raiPrimary };
}

function commonState(authorities) {
  const conclusion = authorities.conclusion;
  return {
    version: CUSTODY_LEDGER_RAI_PRIMARY_CONVERGENCE_VERSION,
    packetId: conclusion.packetId,
    boardId: conclusion.boardId,
    checkpoint: "sc03_rai_primary_convergence_protected",
    finalizedPythonEvidenceVisibility: "hidden_prerequisite_only",
    primaryEvidence: clone(conclusion.primaryEvidence),
    transferEvidence: clone(conclusion.transferEvidence),
    pythonExplanationEvidence: clone(conclusion.pythonExplanationEvidence),
    observationEvidence: conclusion.observationEvidence.map(clone),
    predecessor: { ...conclusion.predecessor },
    continuation: conclusion.continuation,
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
    accessibility: custodyLedgerRAIPrimaryConvergenceAccessibility,
  };
}

function hiddenEvidence(authorityState) {
  return authorityState.raiEvidence
    ? { finalizedRAIEvidenceVisibility: "hidden_allowlisted_recovery_only", finalizedRAIEvidence: clone(authorityState.raiEvidence) }
    : { finalizedRAIEvidenceVisibility: "none" };
}

function control(id, value, choices = null) {
  return {
    id: id === "owner" ? "accountable_owner" : id,
    authorityDimension: id,
    valueState: value === "" ? "genuinely_blank" : "private_session_work",
    ...(choices ? { choices: [...choices] } : {}),
  };
}

function primaryView(authorities, authorityState, response) {
  const scenario = custodyLedgerRAIPrimaryScenarios.find(({ id }) => id === authorityState.raiScenarioId);
  return {
    ...commonState(authorities),
    ...hiddenEvidence(authorityState),
    phase: "RAIC-00",
    authorityPhase: authorityState.phase,
    stateName: "BLANK_OR_SESSION_ONLY_RAI_PRIMARY",
    owner: custodyLedgerPythonOwnershipMessages.rai_primary.owner,
    ownershipMessage: clone(custodyLedgerPythonOwnershipMessages.rai_primary),
    mappingId: "RP002-RAI-01",
    formId: "RAI-P0",
    raiForm: "primary",
    case: { id: scenario.id, prompt: scenario.prompt },
    caseOrdinal: authorityState.raiScenarioIndex + 1,
    caseCount: custodyLedgerRAIPrimaryScenarios.length,
    controls: [
      control("principle", response.principle, scenario.principleChoices),
      control("mitigation", response.mitigation, scenario.mitigationChoices),
      control("owner", response.owner, scenario.ownerChoices),
    ],
    controlState: Object.values(response).every((value) => value === "")
      ? "genuinely_blank"
      : "private_session_work",
    interimEvaluationExposed: false,
    attemptStatus: "not_yet_simultaneously_evaluated",
    campaignCommitEnabled: false,
    focusIntent: {
      group: "rai_primary",
      target: "owner_heading",
      then: authorityState.focusIntent?.dimension ?? "principle",
    },
    availableActions: [
      CUSTODY_LEDGER_SUBMIT_RAI_CASE,
      "RETURN TO EVIDENCE",
      "RETURN TO CITY THRESHOLD",
    ],
  };
}

function feedbackView(authorities, authorityState) {
  const failedCaseDimensions = authorityState.raiFeedback.map(({ scenarioId, dimension, text }) => ({
    scenarioId,
    dimension,
    text,
    answerFree: true,
  }));
  return {
    ...commonState(authorities),
    ...hiddenEvidence(authorityState),
    phase: "RAIC-20F",
    authorityPhase: authorityState.phase,
    stateName: "ACTUAL_FAILED_CASE_DIMENSIONS_ONLY",
    owner: "901 TEACHER // FEEDBACK",
    failedCaseDimensions,
    privateChoicesCleared: true,
    passedDimensionsRecapped: false,
    totalScoreExposed: false,
    transientFeedbackOnly: true,
    campaignCommitEnabled: false,
    focusIntent: {
      group: "rai_feedback",
      target: "owner_heading",
      then: failedCaseDimensions[0]
        ? `${failedCaseDimensions[0].scenarioId}:${failedCaseDimensions[0].dimension}`
        : null,
    },
    availableActions: [
      CUSTODY_LEDGER_ACKNOWLEDGE_RAI_FEEDBACK,
      "RETURN TO EVIDENCE",
      "RETURN TO CITY THRESHOLD",
    ],
  };
}

function guideView(authorities, authorityState, response) {
  return {
    ...commonState(authorities),
    ...hiddenEvidence(authorityState),
    phase: "RAIC-30G",
    authorityPhase: authorityState.phase,
    stateName: "NEUTRAL_ZERO_CREDIT_GUIDED_NEAR_CASE",
    owner: custodyLedgerPythonOwnershipMessages.rai_guided.owner,
    ownershipMessage: clone(custodyLedgerPythonOwnershipMessages.rai_guided),
    guide: {
      id: authorityState.guidedPractice.id,
      prompt: authorityState.guidedPractice.prompt,
      scored: false,
    },
    controls: custodyLedgerRAIDimensions.map((dimension) => control(dimension, response[dimension])),
    controlState: Object.values(response).every((value) => value === "")
      ? "genuinely_blank"
      : "private_session_work",
    guideMayGrantCredit: false,
    campaignCommitEnabled: false,
    focusIntent: { group: "rai_guided", target: "owner_heading", then: "principle" },
    availableActions: [
      CUSTODY_LEDGER_COMPLETE_RAI_GUIDE,
      "RETURN TO EVIDENCE",
      "RETURN TO CITY THRESHOLD",
    ],
  };
}

function blankTransferView(authorities, authorityState) {
  const scenario = custodyLedgerRAITransferScenarios.find(({ id }) => id === authorityState.raiTransferScenarioId);
  return {
    ...commonState(authorities),
    ...hiddenEvidence(authorityState),
    phase: "RAIC-20C",
    authorityPhase: authorityState.phase,
    stateName: "GENUINELY_BLANK_RAI_TRANSFER_BOUNDARY",
    owner: custodyLedgerPythonOwnershipMessages.rai_transfer.owner,
    ownershipMessage: clone(custodyLedgerPythonOwnershipMessages.rai_transfer),
    mappingId: "RP002-RAI-01",
    raiForm: "transfer",
    case: { id: scenario.id, prompt: scenario.prompt },
    controls: custodyLedgerRAIDimensions.map((dimension) => control(dimension, "")),
    controlState: "genuinely_blank",
    attemptStatus: "no_attempt",
    transferEvaluationExposed: false,
    transferActionExposed: false,
    campaignCommitEnabled: false,
    focusIntent: { group: "rai_transfer", target: "owner_heading", then: "principle" },
    availableActions: ["RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD"],
  };
}

function viewFor(authorities, authorityState, primaryResponse, guideResponse) {
  if (authorityState.phase === "rai_primary") return primaryView(authorities, authorityState, primaryResponse);
  if (authorityState.phase === "rai_feedback") return feedbackView(authorities, authorityState);
  if (authorityState.phase === "rai_guided") return guideView(authorities, authorityState, guideResponse);
  if (authorityState.phase === "rai_transfer") return blankTransferView(authorities, authorityState);
  return null;
}

function restoreAuthority(authorities, candidate) {
  const blank = primaryView(authorities, authorities.raiPrimary, blankDimensions());
  if (same(candidate, blank)) return authorities.raiPrimary;
  const resumed = resumeCustodyLedgerRAI({
    ...authorities.raiPrimary,
    ...(candidate?.finalizedRAIEvidence ? { raiEvidence: candidate.finalizedRAIEvidence } : {}),
  });
  const reconstructed = viewFor(authorities, resumed, blankDimensions(), blankDimensions());
  return reconstructed && same(candidate, reconstructed) ? resumed : authorities.raiPrimary;
}

export function createCustodyLedgerRAIPrimaryConvergence(options = {}) {
  const authorities = canonicalAuthorities(options);
  if (!authorities) throw new TypeError("An exact accepted protected blank RAI-P0 boundary is required.");
  let primaryResponse = blankDimensions();
  let guideResponse = blankDimensions();
  let authorityState = restoreAuthority(authorities, options.restoredState);
  let state = viewFor(authorities, authorityState, primaryResponse, guideResponse);
  const handledTokens = new Set();

  function reject(reason, before) {
    return { status: "rejected", reason, state: before };
  }

  return Object.freeze({
    getState() {
      return clone(state);
    },
    updateResponse(update) {
      const before = clone(state);
      const scenario = custodyLedgerRAIPrimaryScenarios.find(({ id }) => id === authorityState.raiScenarioId);
      if (state.phase !== "RAIC-00"
        || !exactKeys(update, responseKeys)
        || update.caseId !== scenario?.id
        || !custodyLedgerRAIDimensions.includes(update.dimension)
        || typeof update.value !== "string"
        || update.value.length > 200) return reject("protected_rai_primary_authoring_closed", before);
      primaryResponse[update.dimension] = update.value;
      state = primaryView(authorities, authorityState, primaryResponse);
      return { status: "response_updated_session_only", state: clone(state) };
    },
    updateGuidedResponse(update) {
      const before = clone(state);
      if (state.phase !== "RAIC-30G"
        || !exactKeys(update, guideResponseKeys)
        || !custodyLedgerRAIDimensions.includes(update.dimension)
        || typeof update.value !== "string"
        || update.value.length > 200) return reject("protected_rai_guide_authoring_closed", before);
      guideResponse[update.dimension] = update.value;
      state = guideView(authorities, authorityState, guideResponse);
      return { status: "guided_response_updated_session_only", state: clone(state) };
    },
    dispatch(intent) {
      const before = clone(state);
      if (!exactIntent(intent)) return reject("protected_rai_primary_convergence_closed", before);
      if (handledTokens.has(intent.eventToken)) {
        return { status: "duplicate_suppressed", reason: "one_hit_only", state: before };
      }
      const expectedAction = state.phase === "RAIC-00"
        ? CUSTODY_LEDGER_SUBMIT_RAI_CASE
        : state.phase === "RAIC-20F"
          ? CUSTODY_LEDGER_ACKNOWLEDGE_RAI_FEEDBACK
          : state.phase === "RAIC-30G"
            ? CUSTODY_LEDGER_COMPLETE_RAI_GUIDE
            : null;
      if (intent.action !== expectedAction) return reject("protected_rai_primary_convergence_closed", before);
      handledTokens.add(intent.eventToken);

      if (state.phase === "RAIC-00") {
        const previousCase = authorityState.raiScenarioId;
        authorityState = submitCustodyLedgerRAIPrimaryScenario(authorityState, previousCase, primaryResponse);
        primaryResponse = blankDimensions();
        state = viewFor(authorities, authorityState, primaryResponse, guideResponse);
        if (!state) return reject("canonical_rai_primary_evaluation_failed", before);
        if (authorityState.phase === "rai_primary") {
          return { status: "next_blank_case", evaluationExposed: false, replacement: "atomic", state: clone(state) };
        }
        if (authorityState.phase === "rai_feedback") {
          return { status: "actual_miss_feedback", evaluationPhase: "RAIC-10", replacement: "atomic", state: clone(state) };
        }
        return { status: "strict_primary_complete", evaluationPhase: "RAIC-10", replacement: "atomic", state: clone(state) };
      }
      if (state.phase === "RAIC-20F") {
        authorityState = acknowledgeCustodyLedgerRAIFeedback(authorityState);
        guideResponse = blankDimensions();
        state = guideView(authorities, authorityState, guideResponse);
        return { status: "zero_credit_guide_opened", replacement: "atomic", state: clone(state) };
      }
      authorityState = submitCustodyLedgerRAIGuidedPractice(authorityState, guideResponse);
      if (authorityState.phase === "rai_guided") {
        guideResponse = blankDimensions();
        state = guideView(authorities, authorityState, guideResponse);
        return { status: "guided_practice_incomplete", creditGranted: false, state: clone(state) };
      }
      primaryResponse = blankDimensions();
      guideResponse = blankDimensions();
      state = primaryView(authorities, authorityState, primaryResponse);
      return { status: "blank_primary_retry", creditGranted: false, replacement: "atomic", state: clone(state) };
    },
    sanitizeBoundary() {
      authorityState = resumeCustodyLedgerRAI(authorityState);
      primaryResponse = blankDimensions();
      guideResponse = blankDimensions();
      state = viewFor(authorities, authorityState, primaryResponse, guideResponse);
      return { status: "sanitized", state: clone(state) };
    },
    returnToEvidence() {
      return authorities.entryAuthority.returnToEvidence();
    },
    returnToCityThreshold() {
      return authorities.entryAuthority.returnToCityThreshold();
    },
  });
}
