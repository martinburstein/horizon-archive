import {
  CUSTODY_LEDGER_RAI_CONCLUSION,
  beginCustodyLedgerSaveEligibility,
  custodyLedgerObservationIds,
  custodyLedgerSaveOwnershipMessages,
  deriveCustodyLedgerSaveEligibility,
  dismissCustodyLedgerRAIConclusion,
  resumeCustodyLedgerRAI,
} from "./custodyLedgerExercise.js";
import { createCustodyLedgerRAIExplanationConvergence } from "./CustodyLedgerRAIExplanationConvergence.js";

export const CUSTODY_LEDGER_RAI_CONCLUSION_REVIEW_VERSION = "rp002.rai-conclusion-review.v1";
export const CUSTODY_LEDGER_DISMISS_RAI_CONCLUSION = "DISMISS RESPONSIBLE-AI CONCLUSION";
export const CUSTODY_LEDGER_REVIEW_BOUNDED_COMPARISON = "REVIEW BOUNDED COMPARISON";

export const custodyLedgerRAIConclusionReviewModalities = Object.freeze([
  "pointer", "touch", "keyboard_enter", "keyboard_space", "switch", "speech", "screen_reader",
]);

export const custodyLedgerRAIConclusionReviewAccessibility = Object.freeze({
  oneActiveGroup: true,
  conclusionSemanticOrder: Object.freeze([
    "owner_heading", "zero_credit_pilot_conclusion", "dismiss_responsible_ai_conclusion",
    "return_to_evidence", "return_to_city_threshold",
  ]),
  eligibilitySemanticOrder: Object.freeze([
    "owner_heading", "review_bounded_comparison",
    "return_to_evidence", "return_to_city_threshold",
  ]),
  reviewSemanticOrder: Object.freeze([
    "owner_heading", "bounded_comparison_summary", "survey_marker_meaning",
    "return_to_evidence", "return_to_city_threshold",
  ]),
  minActionCssPx: 44,
  ownerHeadingProgrammaticFocus: true,
  ownerHeadingInTabOrder: false,
  removedGroupFocusCleanup: true,
  meaningUsesColorAlone: false,
  forcedColorsEquivalent: true,
  reducedMotionDirectReplacement: true,
  naturalNarrowReflow: true,
  textZoomPercent: 200,
  horizontalPageEscape: false,
  modalities: custodyLedgerRAIConclusionReviewModalities,
});

const intentKeys = Object.freeze([
  "packetId", "version", "mode", "owner", "action", "activationKind", "eventToken",
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

function exactIntent(intent) {
  return exactKeys(intent, intentKeys)
    && intent.packetId === "RP-002"
    && intent.version === CUSTODY_LEDGER_RAI_CONCLUSION_REVIEW_VERSION
    && intent.mode === "campaign"
    && intent.owner === "PILOT // FLIGHT RECORDER"
    && [CUSTODY_LEDGER_DISMISS_RAI_CONCLUSION, CUSTODY_LEDGER_REVIEW_BOUNDED_COMPARISON]
      .includes(intent.action)
    && custodyLedgerRAIConclusionReviewModalities.includes(intent.activationKind)
    && typeof intent.eventToken === "string"
    && /^[a-z0-9][a-z0-9:_-]{5,79}$/i.test(intent.eventToken);
}

function canonicalAuthorities(options) {
  let explanationController;
  try {
    explanationController = createCustodyLedgerRAIExplanationConvergence({
      ...options,
      restoredState: options.acceptedRAIConclusionState,
    });
  } catch {
    return null;
  }
  const accepted = explanationController.getState();
  if (!same(accepted, options.acceptedRAIConclusionState)
    || accepted.phase !== "RAIEC-20C"
    || accepted.stateName !== "EXACT_ZERO_CREDIT_PILOT_RAI_CONCLUSION"
    || accepted.owner !== "PILOT // FLIGHT RECORDER"
    || accepted.conclusion?.text !== CUSTODY_LEDGER_RAI_CONCLUSION
    || accepted.conclusionCredit !== "zero"
    || accepted.dismissalExposed !== false
    || accepted.laterActionExposed !== false
    || accepted.finalizedRAIExplanationEvidenceVisibility !== "hidden_allowlisted_recovery_only"
    || accepted.observationEvidence?.length !== custodyLedgerObservationIds.length) return null;

  const conclusionAuthority = resumeCustodyLedgerRAI({
    pythonEvidence: accepted.primaryEvidence,
    pythonTransferEvidence: accepted.transferEvidence,
    pythonExplanationEvidence: accepted.pythonExplanationEvidence,
    raiEvidence: accepted.finalizedRAIPrimaryEvidence,
    raiTransferEvidence: accepted.finalizedRAITransferEvidence,
    raiExplanationEvidence: accepted.finalizedRAIExplanationEvidence,
  });
  if (conclusionAuthority.phase !== "rai_complete"
    || conclusionAuthority.conclusion?.text !== CUSTODY_LEDGER_RAI_CONCLUSION) return null;
  const dismissedAuthority = dismissCustodyLedgerRAIConclusion(conclusionAuthority);
  if (dismissedAuthority.phase !== "rai_complete"
    || dismissedAuthority.conclusion?.text !== CUSTODY_LEDGER_RAI_CONCLUSION) return null;

  const saveEligibility = beginCustodyLedgerSaveEligibility(
    dismissedAuthority,
    options.eligibilityDependencies,
  );
  const eligibilityResult = deriveCustodyLedgerSaveEligibility(saveEligibility);
  return {
    accepted,
    conclusionAuthority,
    dismissedAuthority,
    explanationController,
    saveEligibility,
    eligibilityResult,
  };
}

function commonState(authorities) {
  const accepted = authorities.accepted;
  return {
    version: CUSTODY_LEDGER_RAI_CONCLUSION_REVIEW_VERSION,
    packetId: accepted.packetId,
    boardId: accepted.boardId,
    checkpoint: "sc03_rai_conclusion_review_protected",
    finalizedPythonEvidenceVisibility: accepted.finalizedPythonEvidenceVisibility,
    primaryEvidence: clone(accepted.primaryEvidence),
    transferEvidence: clone(accepted.transferEvidence),
    pythonExplanationEvidence: clone(accepted.pythonExplanationEvidence),
    finalizedRAIPrimaryEvidenceVisibility: accepted.finalizedRAIPrimaryEvidenceVisibility,
    finalizedRAIPrimaryEvidence: clone(accepted.finalizedRAIPrimaryEvidence),
    finalizedRAITransferEvidenceVisibility: accepted.finalizedRAITransferEvidenceVisibility,
    finalizedRAITransferEvidence: clone(accepted.finalizedRAITransferEvidence),
    finalizedRAIExplanationEvidenceVisibility: accepted.finalizedRAIExplanationEvidenceVisibility,
    finalizedRAIExplanationEvidence: clone(accepted.finalizedRAIExplanationEvidence),
    observationEvidence: accepted.observationEvidence.map(clone),
    predecessor: clone(accepted.predecessor),
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
    reviewCreditGranted: false,
    dismissalCreditGranted: false,
    savePerformed: false,
    examCreditGranted: false,
    examGuarantee: false,
    identityMaterialClosed: true,
    successor: null,
    accessibility: custodyLedgerRAIConclusionReviewAccessibility,
  };
}

function conclusionView(authorities) {
  return {
    ...commonState(authorities),
    phase: "RG-00",
    authorityPhase: "RAIEC-20C",
    stateName: "EXACT_ZERO_CREDIT_PILOT_RAI_CONCLUSION",
    activeGroup: "rai_conclusion",
    owner: authorities.accepted.owner,
    conclusion: clone(authorities.accepted.conclusion),
    conclusionCredit: "zero",
    dismissalExposed: true,
    laterActionExposed: false,
    focusIntent: { group: "rai_conclusion", target: "owner_heading" },
    availableActions: [
      CUSTODY_LEDGER_DISMISS_RAI_CONCLUSION, "RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD",
    ],
  };
}

function eligibilityView(authorities) {
  return {
    ...commonState(authorities),
    phase: "RG-20",
    authorityPhase: authorities.saveEligibility.phase,
    stateName: "STRICT_SYSTEM_REVIEW_ELIGIBILITY",
    activeGroup: "save_eligibility",
    owner: custodyLedgerSaveOwnershipMessages.save_eligibility.owner,
    ownershipMessage: clone(custodyLedgerSaveOwnershipMessages.save_eligibility),
    eligibilityDerivedOnly: Object.freeze({
      pythonChain: "PY-009:finalized",
      responsibleAIChain: "RP002-RAI-01:finalized",
      observations: Object.freeze([...custodyLedgerObservationIds]),
      conjunction: "all_required",
    }),
    reviewActionExposed: true,
    laterActionExposed: false,
    focusIntent: {
      group: "save_eligibility", target: "owner_heading", then: "review_bounded_comparison",
    },
    availableActions: [
      CUSTODY_LEDGER_REVIEW_BOUNDED_COMPARISON,
      "RETURN TO EVIDENCE",
      "RETURN TO CITY THRESHOLD",
    ],
  };
}

function reviewView(authorities) {
  return {
    ...commonState(authorities),
    phase: "RG-30",
    authorityPhase: authorities.eligibilityResult.phase,
    stateName: "PILOT_BOUNDED_COMPARISON_REVIEW",
    activeGroup: "bounded_review",
    owner: custodyLedgerSaveOwnershipMessages.bounded_review.owner,
    ownershipMessage: clone(custodyLedgerSaveOwnershipMessages.bounded_review),
    boundedSummary: clone(authorities.eligibilityResult.boundedSummary),
    finalizedSummaryOnly: true,
    reviewCredit: "zero",
    laterActionExposed: false,
    hardStop: true,
    focusIntent: { group: "bounded_review", target: "owner_heading" },
    availableActions: ["RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD"],
  };
}

function recoveryView(authorities) {
  if (dependenciesEligible(authorities)) return eligibilityView(authorities);
  const boundary = authorities.eligibilityResult.firstIncompleteBoundary;
  return {
    ...commonState(authorities),
    phase: "RG-U",
    authorityPhase: "first_incomplete_protected_return",
    stateName: "DETERMINISTIC_FIRST_INCOMPLETE_PROTECTED_RETURN",
    activeGroup: boundary,
    owner: "SYSTEM // EXPEDITION SESSION",
    privateWorkCleared: true,
    returnedBoundary: boundary,
    laterActionExposed: false,
    focusIntent: {
      group: boundary,
      target: "owner_heading",
      then: "first_required_control",
    },
    availableActions: [],
  };
}

function dependenciesEligible(authorities) {
  return authorities.eligibilityResult?.phase === "bounded_review";
}

function restoredView(authorities, candidate) {
  const conclusion = conclusionView(authorities);
  if (candidate == null || same(candidate, conclusion)) return conclusion;
  if (dependenciesEligible(authorities)) {
    const eligibility = eligibilityView(authorities);
    const review = reviewView(authorities);
    if (same(candidate, eligibility)) return eligibility;
    if (same(candidate, review)) return review;
  }
  return recoveryView(authorities);
}

export function createCustodyLedgerRAIConclusionReview(options = {}) {
  const authorities = canonicalAuthorities(options);
  if (!authorities) throw new TypeError("An exact accepted protected RAI conclusion boundary is required.");
  let state = restoredView(authorities, options.restoredState);
  const handledTokens = new Set();
  const reject = (reason, before) => ({ status: "rejected", reason, state: before });

  return Object.freeze({
    getState() {
      return clone(state);
    },
    dispatch(intent) {
      const before = clone(state);
      if (!exactIntent(intent)) return reject("protected_rai_conclusion_review_closed", before);
      if (handledTokens.has(intent.eventToken)) {
        return { status: "duplicate_suppressed", reason: "one_hit_only", state: before };
      }
      const expectedAction = state.phase === "RG-00"
        ? CUSTODY_LEDGER_DISMISS_RAI_CONCLUSION
        : state.phase === "RG-20" ? CUSTODY_LEDGER_REVIEW_BOUNDED_COMPARISON : null;
      if (intent.action !== expectedAction) {
        return reject("protected_rai_conclusion_review_closed", before);
      }
      handledTokens.add(intent.eventToken);
      if (state.phase === "RG-00") {
        state = dependenciesEligible(authorities) ? eligibilityView(authorities) : recoveryView(authorities);
        return {
          status: state.phase === "RG-20"
            ? "strict_review_eligible"
            : "returned_to_first_incomplete_protected_boundary",
          transitionPhase: "RG-10",
          replacement: "atomic",
          state: clone(state),
        };
      }
      state = reviewView(authorities);
      return {
        status: "bounded_review_visible",
        replacement: "atomic",
        state: clone(state),
      };
    },
    sanitizeBoundary(candidate = state) {
      handledTokens.clear();
      state = restoredView(authorities, candidate);
      return { status: "sanitized", state: clone(state) };
    },
    returnToEvidence() {
      return authorities.explanationController.returnToEvidence();
    },
    returnToCityThreshold() {
      return authorities.explanationController.returnToCityThreshold();
    },
  });
}
