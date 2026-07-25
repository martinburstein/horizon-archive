import {
  CUSTODY_LEDGER_SAVE_INTENT,
  beginCustodyLedgerSaveEligibility,
  cancelCustodyLedgerSave,
  custodyLedgerSaveOwnershipMessages,
  deriveCustodyLedgerSaveEligibility,
  dismissCustodyLedgerRAIConclusion,
  prepareCustodyLedgerSave,
  resumeCustodyLedgerRAI,
} from "./custodyLedgerExercise.js";
import { createCustodyLedgerRAIConclusionReview } from "./CustodyLedgerRAIConclusionReview.js";

export const CUSTODY_LEDGER_RAI_PREPARE_SAVE_VERSION = "rp002.rai-prepare-save.v1";
export const CUSTODY_LEDGER_PREPARE_SAVE = "PREPARE SAVE";
export const CUSTODY_LEDGER_CANCEL_PREPARE_SAVE = "CANCEL";

export const custodyLedgerRAIPrepareSaveModalities = Object.freeze([
  "pointer", "touch", "keyboard_enter", "keyboard_space", "switch", "speech", "screen_reader",
]);

export const custodyLedgerRAIPrepareSaveAccessibility = Object.freeze({
  oneActiveGroup: true,
  reviewSemanticOrder: Object.freeze([
    "owner_heading", "bounded_comparison_summary", "survey_marker_meaning", "prepare_save",
    "return_to_evidence", "return_to_city_threshold",
  ]),
  confirmationSemanticOrder: Object.freeze([
    "owner_heading", "local_confirmation", "save_bounded_comparison_visible_only", "cancel",
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
  modalities: custodyLedgerRAIPrepareSaveModalities,
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

function tokenIsOpaque(value) {
  return typeof value === "string" && /^[a-z0-9][a-z0-9:_-]{5,79}$/i.test(value);
}

function exactIntent(intent) {
  if (!exactKeys(intent, intentKeys)
    || intent.packetId !== "RP-002"
    || intent.version !== CUSTODY_LEDGER_RAI_PREPARE_SAVE_VERSION
    || intent.mode !== "campaign"
    || intent.owner !== "PILOT // FLIGHT RECORDER"
    || !tokenIsOpaque(intent.eventToken)) return false;
  if (intent.action === CUSTODY_LEDGER_PREPARE_SAVE || intent.action === CUSTODY_LEDGER_SAVE_INTENT) {
    return custodyLedgerRAIPrepareSaveModalities.includes(intent.activationKind);
  }
  return intent.action === CUSTODY_LEDGER_CANCEL_PREPARE_SAVE
    && [...custodyLedgerRAIPrepareSaveModalities, "keyboard_escape"].includes(intent.activationKind);
}

function existingSaveAuthority(options) {
  const accepted = options.acceptedRAIConclusionState;
  const conclusion = resumeCustodyLedgerRAI({
    pythonEvidence: accepted?.primaryEvidence,
    pythonTransferEvidence: accepted?.transferEvidence,
    pythonExplanationEvidence: accepted?.pythonExplanationEvidence,
    raiEvidence: accepted?.finalizedRAIPrimaryEvidence,
    raiTransferEvidence: accepted?.finalizedRAITransferEvidence,
    raiExplanationEvidence: accepted?.finalizedRAIExplanationEvidence,
  });
  const dismissed = dismissCustodyLedgerRAIConclusion(conclusion);
  const eligibility = beginCustodyLedgerSaveEligibility(dismissed, options.eligibilityDependencies);
  const review = deriveCustodyLedgerSaveEligibility(eligibility);
  if (review.phase !== "bounded_review"
    || review.ownerMessage?.owner !== "PILOT // FLIGHT RECORDER") return null;
  const confirmation = prepareCustodyLedgerSave(review);
  if (confirmation.phase !== "save_confirmation"
    || confirmation.ownerMessage?.text !== custodyLedgerSaveOwnershipMessages.save_confirmation.text
    || confirmation.commitIntent !== CUSTODY_LEDGER_SAVE_INTENT) return null;
  return { review, confirmation };
}

function reviewView(authorities, focusIntent = null) {
  return {
    ...clone(authorities.reviewState),
    phase: "RG-30",
    authorityPhase: "bounded_review",
    activeGroup: "bounded_review",
    owner: custodyLedgerSaveOwnershipMessages.bounded_review.owner,
    ownershipMessage: clone(custodyLedgerSaveOwnershipMessages.bounded_review),
    boundedSummary: clone(authorities.save.review.boundedSummary),
    prepareActionExposed: true,
    commitIntentVisible: false,
    campaignCommitEnabled: false,
    cityStateDelta: null,
    savePerformed: false,
    hardStop: false,
    focusIntent: focusIntent ?? { group: "bounded_review", target: "owner_heading" },
    availableActions: [
      CUSTODY_LEDGER_PREPARE_SAVE, "RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD",
    ],
    accessibility: custodyLedgerRAIPrepareSaveAccessibility,
  };
}

function confirmationView(authorities) {
  return {
    ...clone(authorities.reviewState),
    phase: "save_confirmation",
    authorityPhase: "save_confirmation",
    stateName: "CONTAINED_LOCAL_SAVE_CONFIRMATION",
    activeGroup: "save_confirmation",
    owner: authorities.save.confirmation.ownerMessage.owner,
    ownershipMessage: clone(authorities.save.confirmation.ownerMessage),
    confirmationText: authorities.save.confirmation.ownerMessage.text,
    commitIntent: CUSTODY_LEDGER_SAVE_INTENT,
    commitIntentVisible: true,
    commitIntentDispatchEnabled: false,
    cancelAction: CUSTODY_LEDGER_CANCEL_PREPARE_SAVE,
    confirmationLocalOnly: true,
    holdIsNoOp: true,
    campaignCommitEnabled: false,
    cityStateDelta: null,
    savePerformed: false,
    hardStop: true,
    focusIntent: { group: "save_confirmation", target: "owner_heading", contained: true },
    availableActions: [
      CUSTODY_LEDGER_CANCEL_PREPARE_SAVE, "RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD",
    ],
    accessibility: custodyLedgerRAIPrepareSaveAccessibility,
  };
}

function canonicalAuthorities(options) {
  const reviewController = createCustodyLedgerRAIConclusionReview({
    ...options,
    restoredState: options.acceptedReviewState,
  });
  const reviewState = reviewController.getState();
  const save = existingSaveAuthority(options);
  if (reviewState.phase !== "RG-30" || !save
    || !same(reviewState.boundedSummary, save.review.boundedSummary)
    || reviewState.owner !== custodyLedgerSaveOwnershipMessages.bounded_review.owner) {
    return { reviewController, recoveryState: reviewState, reviewState: null, save: null };
  }
  return { reviewController, reviewState, save };
}

function restoredView(authorities, candidate) {
  if (authorities.recoveryState) return clone(authorities.recoveryState);
  const review = reviewView(authorities);
  const confirmation = confirmationView(authorities);
  if (candidate == null || same(candidate, authorities.reviewState) || same(candidate, review)) return review;
  if (same(candidate, confirmation)) return confirmation;
  return review;
}

export function createCustodyLedgerRAIPrepareSaveConfirmation(options = {}) {
  const authorities = canonicalAuthorities(options);
  let state = restoredView(authorities, options.restoredState);
  const handledPrepareTokens = new Set();
  const reject = (reason, before, sanitize = false) => {
    if (sanitize) {
      handledPrepareTokens.clear();
      state = restoredView(authorities, null);
      return { status: "sanitized_to_first_incomplete_protected_boundary", reason, state: clone(state) };
    }
    return { status: "rejected", reason, state: before };
  };

  return Object.freeze({
    getState() {
      return clone(state);
    },
    holdConfirmation() {
      return { status: state.phase === "save_confirmation" ? "confirmation_held" : "hold_unavailable", state: clone(state) };
    },
    dispatch(intent) {
      const before = clone(state);
      if (!exactIntent(intent)) return reject("protected_prepare_save_closed", before, true);
      if (intent.action === CUSTODY_LEDGER_SAVE_INTENT) {
        return reject("save_bounded_comparison_closed", before);
      }
      if (intent.action === CUSTODY_LEDGER_PREPARE_SAVE) {
        if (!authorities.save) return reject("protected_prepare_save_closed", before, true);
        if (state.phase !== "RG-30") return reject("protected_prepare_save_closed", before);
        if (handledPrepareTokens.has(intent.eventToken)) {
          return { status: "duplicate_suppressed", reason: "one_hit_only", state: before };
        }
        handledPrepareTokens.add(intent.eventToken);
        state = confirmationView(authorities);
        return { status: "local_confirmation_visible", replacement: "atomic", state: clone(state) };
      }
      if (!authorities.save) return reject("cancel_unavailable", before, true);
      if (state.phase !== "save_confirmation") return reject("cancel_unavailable", before);
      const returned = cancelCustodyLedgerSave(authorities.save.confirmation);
      if (returned.phase !== "bounded_review") return reject("protected_prepare_save_closed", before, true);
      handledPrepareTokens.clear();
      state = reviewView(authorities, { group: "bounded_review", target: "prepare_save" });
      return { status: "confirmation_cancelled_write_free", replacement: "atomic", state: clone(state) };
    },
    sanitizeBoundary(candidate = state) {
      handledPrepareTokens.clear();
      state = restoredView(authorities, candidate);
      return { status: "sanitized", state: clone(state) };
    },
    returnToEvidence() {
      handledPrepareTokens.clear();
      return authorities.reviewController.returnToEvidence();
    },
    returnToCityThreshold() {
      handledPrepareTokens.clear();
      return authorities.reviewController.returnToCityThreshold();
    },
  });
}
