import {
  createCustodyLedgerPersistenceAdapter,
  custodyLedgerAtomicProgression,
  custodyLedgerOwnershipMessages,
  custodyLedgerSaveOwnershipMessages,
  restoreCustodyLedgerBoundedComparison,
  resumeCustodyLedgerRAI,
} from "./custodyLedgerExercise.js";
import { createCustodyLedgerRAIConclusionReview } from "./CustodyLedgerRAIConclusionReview.js";
import { custodyLedgerRAIAtomicSaveModalities } from "./CustodyLedgerRAIAtomicSaveCommit.js";

export const CUSTODY_LEDGER_RAI_VERIFIED_RESTORE_VERSION = "rp002.rai-verified-restore.v1";
export const CUSTODY_LEDGER_RETURN_CITY_THRESHOLD = "RETURN TO CITY THRESHOLD";

export const custodyLedgerRAIVerifiedRestoreAccessibility = Object.freeze({
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

function exactProgression(value) {
  return value && Object.keys(value).length === Object.keys(custodyLedgerAtomicProgression).length
    && Object.entries(custodyLedgerAtomicProgression).every(([key, expected]) => value[key] === expected);
}

function opaqueToken(value) {
  return typeof value === "string" && /^[a-z0-9][a-z0-9:_-]{5,79}$/i.test(value);
}

function exactReturnIntent(intent) {
  return intent && typeof intent === "object" && !Array.isArray(intent)
    && Object.keys(intent).sort().join("|") === [...intentKeys].sort().join("|")
    && intent.packetId === "RP-002"
    && intent.version === CUSTODY_LEDGER_RAI_VERIFIED_RESTORE_VERSION
    && intent.mode === "campaign"
    && intent.owner === "PILOT // FLIGHT RECORDER"
    && intent.action === CUSTODY_LEDGER_RETURN_CITY_THRESHOLD
    && custodyLedgerRAIAtomicSaveModalities.includes(intent.activationKind)
    && opaqueToken(intent.eventToken);
}

function acceptedComparison(candidate) {
  return candidate?.phase === "comparison_complete"
    && candidate?.boardState === "SC-03-40"
    && candidate?.owner === "SYSTEM // EXPEDITION STATE"
    && candidate?.savedText === "Bounded comparison saved. No access request or external action occurred; `continuation` is unchanged."
    && exactProgression(candidate?.progression);
}

function resumedConclusion(accepted) {
  return resumeCustodyLedgerRAI({
    pythonEvidence: accepted?.primaryEvidence,
    pythonTransferEvidence: accepted?.transferEvidence,
    pythonExplanationEvidence: accepted?.pythonExplanationEvidence,
    raiEvidence: accepted?.finalizedRAIPrimaryEvidence,
    raiTransferEvidence: accepted?.finalizedRAITransferEvidence,
    raiExplanationEvidence: accepted?.finalizedRAIExplanationEvidence,
  });
}

function view(state) {
  if (state.phase === "verified_restore") {
    return {
      ...clone(state),
      authorityPhase: "verified_restore",
      activeGroup: "verified_restore",
      owner: custodyLedgerOwnershipMessages.restored.owner,
      ownershipMessage: clone(custodyLedgerOwnershipMessages.restored),
      restoredText: custodyLedgerOwnershipMessages.restored.text,
      progression: clone(custodyLedgerAtomicProgression),
      privateWorkCleared: true,
      transientWorkCleared: true,
      campaignCommitEnabled: false,
      cityStateDelta: null,
      replayedEvents: [],
      availableActions: [CUSTODY_LEDGER_RETURN_CITY_THRESHOLD],
      accessibility: custodyLedgerRAIVerifiedRestoreAccessibility,
    };
  }
  if (state.phase === "sanitation_downgrade") {
    return {
      ...clone(state),
      authorityPhase: "sanitation_downgrade",
      activeGroup: "sanitation_downgrade",
      owner: custodyLedgerSaveOwnershipMessages.sanitation_downgrade.owner,
      ownershipMessage: clone(custodyLedgerSaveOwnershipMessages.sanitation_downgrade),
      sanitationText: custodyLedgerSaveOwnershipMessages.sanitation_downgrade.text,
      progression: {},
      privateWorkCleared: true,
      transientWorkCleared: true,
      campaignCommitEnabled: false,
      cityStateDelta: null,
      replayedEvents: [],
      availableActions: [],
      accessibility: custodyLedgerRAIVerifiedRestoreAccessibility,
    };
  }
  return { ...clone(state), accessibility: custodyLedgerRAIVerifiedRestoreAccessibility };
}

export function createCustodyLedgerRAIVerifiedRestore(options = {}) {
  const adapter = options.adapter ?? createCustodyLedgerPersistenceAdapter();
  const tour = options.mode === "demo_tour";
  const accepted = options.acceptedComparisonState;
  const conclusion = resumedConclusion(options.acceptedRAIConclusionState);
  const runRestore = () => restoreCustodyLedgerBoundedComparison(
    adapter,
    conclusion,
    options.eligibilityDependencies,
    { mode: tour ? "demo_tour" : "campaign" },
  );
  let authority = tour || acceptedComparison(accepted) ? runRestore() : null;
  let state = authority ? view(authority) : { phase: "closed", activeGroup: "closed", availableActions: [] };
  let returnUsed = false;
  const handledTokens = new Set();
  let returnController = null;

  if (!tour && authority?.phase === "verified_restore") {
    try {
      returnController = createCustodyLedgerRAIConclusionReview({
        ...options,
        acceptedRAIConclusionState: options.acceptedRAIConclusionState,
      });
    } catch {
      authority = restoreCustodyLedgerBoundedComparison(adapter, null, null);
      state = view(authority);
    }
  }

  const reject = (reason, before) => ({ status: "rejected", reason, state: before });
  const revalidate = () => {
    if (tour || !acceptedComparison(accepted)) return;
    authority = runRestore();
    state = view(authority);
    returnUsed = false;
    handledTokens.clear();
  };

  return Object.freeze({
    getState() {
      return clone(state);
    },
    hold() {
      return { status: "hold_unavailable", state: clone(state) };
    },
    dispatch(intent) {
      const before = clone(state);
      if (!exactReturnIntent(intent)) return reject("protected_verified_restore_closed", before);
      if (handledTokens.has(intent.eventToken)) return reject("one_hit_only", before);
      if (state.phase !== "verified_restore" || returnUsed || !returnController) return reject("return_unavailable", before);
      handledTokens.add(intent.eventToken);
      const returned = returnController.returnToCityThreshold();
      returnUsed = true;
      return {
        status: "returned_to_city_threshold_write_free",
        state: clone(state),
        route: clone(returned),
      };
    },
    sanitizeBoundary() {
      revalidate();
      return { status: "revalidated", state: clone(state) };
    },
  });
}
