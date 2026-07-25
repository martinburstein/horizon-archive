import {
  CUSTODY_LEDGER_SAVE_INTENT,
  beginCustodyLedgerSaveEligibility,
  createCustodyLedgerPersistenceAdapter,
  custodyLedgerAtomicProgression,
  custodyLedgerSaveOwnershipMessages,
  commitCustodyLedgerBoundedComparison,
  deriveCustodyLedgerSaveEligibility,
  dismissCustodyLedgerRAIConclusion,
  prepareCustodyLedgerSave,
  resumeCustodyLedgerRAI,
  returnSafelyFromCustodyLedgerSaveFailure,
  retryCustodyLedgerSave,
} from "./custodyLedgerExercise.js";
import {
  createCustodyLedgerRAIPrepareSaveConfirmation,
  custodyLedgerRAIPrepareSaveModalities,
} from "./CustodyLedgerRAIPrepareSaveConfirmation.js";

export const CUSTODY_LEDGER_RAI_ATOMIC_SAVE_VERSION = "rp002.rai-atomic-save.v1";
export const CUSTODY_LEDGER_RETRY_SAVE = "RETRY SAVE";
export const CUSTODY_LEDGER_RETURN_SAFELY = "RETURN SAFELY";

export const custodyLedgerRAIAtomicSaveModalities = custodyLedgerRAIPrepareSaveModalities;

export const custodyLedgerRAIAtomicSaveAccessibility = Object.freeze({
  oneActiveGroup: true,
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
  modalities: custodyLedgerRAIAtomicSaveModalities,
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

function exactKeys(value) {
  return value && typeof value === "object" && !Array.isArray(value)
    && Object.keys(value).sort().join("|") === [...intentKeys].sort().join("|");
}

function opaqueToken(value) {
  return typeof value === "string" && /^[a-z0-9][a-z0-9:_-]{5,79}$/i.test(value);
}

function validIntent(intent) {
  if (!exactKeys(intent)
    || intent.packetId !== "RP-002"
    || intent.version !== CUSTODY_LEDGER_RAI_ATOMIC_SAVE_VERSION
    || intent.mode !== "campaign"
    || !opaqueToken(intent.eventToken)
    || !custodyLedgerRAIAtomicSaveModalities.includes(intent.activationKind)) return false;
  if (intent.action === CUSTODY_LEDGER_SAVE_INTENT) return intent.owner === "PILOT // FLIGHT RECORDER";
  return [CUSTODY_LEDGER_RETRY_SAVE, CUSTODY_LEDGER_RETURN_SAFELY].includes(intent.action)
    && intent.owner === "SYSTEM // EXPEDITION STATE";
}

function exactProgression(value) {
  return value && Object.keys(value).length === Object.keys(custodyLedgerAtomicProgression).length
    && Object.entries(custodyLedgerAtomicProgression).every(([key, expected]) => value[key] === expected);
}

function confirmationState(options) {
  const accepted = options.acceptedConfirmationState;
  if (accepted?.phase !== "save_confirmation"
    || accepted?.owner !== "PILOT // FLIGHT RECORDER"
    || accepted?.confirmationText !== custodyLedgerSaveOwnershipMessages.save_confirmation.text
    || accepted?.commitIntent !== CUSTODY_LEDGER_SAVE_INTENT) return null;
  // Instantiate the contained controller as the boundary authority, but derive
  // the commit authority from its accepted prerequisites. Its rendered state is
  // intentionally UI-shaped and therefore never passed to the write helper.
  createCustodyLedgerRAIPrepareSaveConfirmation({
    ...options,
    restoredState: options.acceptedConfirmationState,
  });
  const conclusion = resumeCustodyLedgerRAI({
    pythonEvidence: options.acceptedRAIConclusionState?.primaryEvidence,
    pythonTransferEvidence: options.acceptedRAIConclusionState?.transferEvidence,
    pythonExplanationEvidence: options.acceptedRAIConclusionState?.pythonExplanationEvidence,
    raiEvidence: options.acceptedRAIConclusionState?.finalizedRAIPrimaryEvidence,
    raiTransferEvidence: options.acceptedRAIConclusionState?.finalizedRAITransferEvidence,
    raiExplanationEvidence: options.acceptedRAIConclusionState?.finalizedRAIExplanationEvidence,
  });
  const eligibility = beginCustodyLedgerSaveEligibility(
    dismissCustodyLedgerRAIConclusion(conclusion),
    options.eligibilityDependencies,
  );
  const review = deriveCustodyLedgerSaveEligibility(eligibility);
  const authority = prepareCustodyLedgerSave(review);
  if (authority.phase !== "save_confirmation"
    || authority.commitIntent !== CUSTODY_LEDGER_SAVE_INTENT) return null;
  return authority;
}

function confirmationView(state) {
  return {
    ...clone(state),
    phase: "save_confirmation",
    authorityPhase: "save_confirmation",
    activeGroup: "save_confirmation",
    owner: "PILOT // FLIGHT RECORDER",
    confirmationText: custodyLedgerSaveOwnershipMessages.save_confirmation.text,
    commitIntent: CUSTODY_LEDGER_SAVE_INTENT,
    commitIntentVisible: true,
    commitIntentDispatchEnabled: true,
    campaignCommitEnabled: false,
    cityStateDelta: null,
    progression: {},
    privateWorkCleared: true,
    hardStop: false,
    focusIntent: { group: "save_confirmation", target: "owner_heading", contained: true },
    availableActions: [CUSTODY_LEDGER_SAVE_INTENT],
    accessibility: custodyLedgerRAIAtomicSaveAccessibility,
  };
}

function failureView(state) {
  return {
    ...clone(state),
    phase: "recoverable_save_failure",
    authorityPhase: "recoverable_save_failure",
    activeGroup: "recoverable_save_failure",
    owner: custodyLedgerSaveOwnershipMessages.save_failure.owner,
    ownershipMessage: clone(custodyLedgerSaveOwnershipMessages.save_failure),
    failureText: custodyLedgerSaveOwnershipMessages.save_failure.text,
    progression: {},
    privateWorkCleared: true,
    campaignCommitEnabled: false,
    cityStateDelta: null,
    hardStop: false,
    focusIntent: { group: "recoverable_save_failure", target: "owner_heading" },
    availableActions: [CUSTODY_LEDGER_RETRY_SAVE, CUSTODY_LEDGER_RETURN_SAFELY],
    accessibility: custodyLedgerRAIAtomicSaveAccessibility,
  };
}

function savedView(state) {
  return {
    ...clone(state),
    phase: "comparison_complete",
    authorityPhase: "comparison_complete",
    activeGroup: "comparison_complete",
    owner: "SYSTEM // EXPEDITION STATE",
    ownershipMessage: clone(state.ownerMessage),
    savedText: state.ownerMessage?.text,
    boardState: "SC-03-40",
    progression: clone(custodyLedgerAtomicProgression),
    privateWorkCleared: true,
    campaignCommitEnabled: false,
    cityStateDelta: null,
    hardStop: true,
    focusIntent: { group: "comparison_complete", target: "owner_heading" },
    availableActions: [],
    accessibility: custodyLedgerRAIAtomicSaveAccessibility,
  };
}

function reviewView(state) {
  const returned = returnSafelyFromCustodyLedgerSaveFailure(state);
  return {
    ...clone(returned),
    phase: "RG-30",
    authorityPhase: "bounded_review",
    activeGroup: "bounded_review",
    owner: custodyLedgerSaveOwnershipMessages.bounded_review.owner,
    ownershipMessage: clone(custodyLedgerSaveOwnershipMessages.bounded_review),
    progression: {},
    privateWorkCleared: true,
    campaignCommitEnabled: false,
    cityStateDelta: null,
    focusIntent: { group: "bounded_review", target: "prepare_save" },
    accessibility: custodyLedgerRAIAtomicSaveAccessibility,
  };
}

function isExactFailure(candidate, authority) {
  return candidate?.phase === "recoverable_save_failure"
    && candidate?.owner === custodyLedgerSaveOwnershipMessages.save_failure.owner
    && candidate?.failureText === custodyLedgerSaveOwnershipMessages.save_failure.text
    && same(candidate?.progression, {})
    && same(candidate?.saveDependencies, authority?.saveDependencies);
}

export function createCustodyLedgerRAIAtomicSaveCommit(options = {}) {
  const confirmed = confirmationState(options);
  const adapter = options.adapter ?? createCustodyLedgerPersistenceAdapter();
  let authority = confirmed;
  let state = confirmed ? confirmationView(confirmed) : null;
  const handledTokens = new Set();

  if (!state) {
    const fallback = createCustodyLedgerRAIPrepareSaveConfirmation(options).getState();
    state = { ...clone(fallback), atomicSaveClosed: true };
  } else if (isExactFailure(options.restoredState, confirmed)) {
    authority = clone(options.restoredState);
    state = failureView(authority);
  }

  const reject = (reason, before) => ({ status: "rejected", reason, state: before });
  const cleanFailure = (result) => {
    authority = result;
    state = failureView(result);
    return { status: "recoverable_save_failure", replacement: "atomic", state: clone(state) };
  };

  return Object.freeze({
    getState() {
      return clone(state);
    },
    hold() {
      return { status: ["save_confirmation", "recoverable_save_failure"].includes(state.phase) ? "held" : "hold_unavailable", state: clone(state) };
    },
    dispatch(intent) {
      const before = clone(state);
      if (!validIntent(intent)) return reject("protected_atomic_save_closed", before);
      if (handledTokens.has(intent.eventToken)) return reject("one_hit_only", before);
      if (intent.action === CUSTODY_LEDGER_SAVE_INTENT) {
        if (state.phase !== "save_confirmation" || !authority) return reject("commit_unavailable", before);
        handledTokens.add(intent.eventToken);
        const result = commitCustodyLedgerBoundedComparison(authority, adapter, CUSTODY_LEDGER_SAVE_INTENT);
        if (result?.phase === "comparison_complete" && exactProgression(result.progression)) {
          authority = result;
          state = savedView(result);
          return { status: "comparison_saved", replacement: "atomic", state: clone(state) };
        }
        return cleanFailure(result);
      }
      if (intent.action === CUSTODY_LEDGER_RETRY_SAVE) {
        if (state.phase !== "recoverable_save_failure" || !authority) return reject("retry_unavailable", before);
        handledTokens.add(intent.eventToken);
        const retried = retryCustodyLedgerSave(authority);
        if (retried?.phase !== "save_confirmation") return reject("retry_unavailable", before);
        authority = retried;
        handledTokens.clear();
        state = confirmationView(retried);
        return { status: "fresh_confirmation_visible", replacement: "atomic", state: clone(state) };
      }
      if (state.phase !== "recoverable_save_failure" || !authority) return reject("safe_return_unavailable", before);
      handledTokens.add(intent.eventToken);
      const returned = returnSafelyFromCustodyLedgerSaveFailure(authority);
      if (returned?.phase !== "bounded_review") return reject("safe_return_unavailable", before);
      handledTokens.clear();
      authority = returned;
      state = reviewView(authority);
      return { status: "returned_safely_write_free", replacement: "atomic", state: clone(state) };
    },
    sanitizeBoundary(candidate = state) {
      handledTokens.clear();
      if (isExactFailure(candidate, confirmed)) {
        authority = clone(candidate);
        state = failureView(authority);
      } else {
        authority = confirmed;
        state = confirmationView(confirmed);
      }
      return { status: "sanitized", state: clone(state) };
    },
  });
}
