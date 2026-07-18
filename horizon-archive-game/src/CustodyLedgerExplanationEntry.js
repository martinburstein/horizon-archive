import {
  custodyLedgerPythonOwnershipMessages,
  resumeCustodyLedgerPython,
} from "./custodyLedgerExercise.js";
import {
  createCustodyLedgerTransferInteraction,
} from "./CustodyLedgerTransferInteraction.js";

export const CUSTODY_LEDGER_EXPLANATION_ENTRY_VERSION = "rp002.explanation-entry.v1";
export const CUSTODY_LEDGER_OPEN_BLANK_EXPLANATION = "OPEN BLANK PYTHON EXPLANATION";

export const custodyLedgerExplanationEntryModalities = Object.freeze([
  "pointer",
  "touch",
  "keyboard_enter",
  "keyboard_space",
  "switch",
  "speech",
  "screen_reader",
]);

export const custodyLedgerExplanationEntryAccessibility = Object.freeze({
  oneActiveGroup: true,
  completionSemanticOrder: Object.freeze([
    "owner_heading",
    "transfer_evidence_status",
    "return_to_evidence",
    "return_to_city_threshold",
    "open_blank_python_explanation",
  ]),
  explanationSemanticOrder: Object.freeze([
    "owner_heading",
    "explanation_prompt",
    "blank_explanation_controls",
    "return_to_evidence",
    "return_to_city_threshold",
  ]),
  minActionCssPx: 44,
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
    && intent.version === CUSTODY_LEDGER_EXPLANATION_ENTRY_VERSION
    && intent.mode === "campaign"
    && intent.owner === "PILOT // FLIGHT RECORDER"
    && intent.action === CUSTODY_LEDGER_OPEN_BLANK_EXPLANATION
    && custodyLedgerExplanationEntryModalities.includes(intent.activationKind)
    && typeof intent.eventToken === "string"
    && /^[a-z0-9][a-z0-9:_-]{5,79}$/i.test(intent.eventToken);
}

function canonicalAuthorities(options) {
  let transferAuthority;
  try {
    transferAuthority = createCustodyLedgerTransferInteraction({
      primaryResult: options.primaryResult,
      learningState: options.learningState,
      freshPracticeState: options.freshPracticeState,
      restoredState: options.transferCompleteState,
    });
  } catch {
    return null;
  }
  const transferComplete = transferAuthority.getState();
  if (transferComplete.phase !== "FT-20C"
    || transferComplete.stateName !== "TRANSFER_EVIDENCE_COMPLETE"
    || transferComplete.owner !== "SYSTEM // EXPEDITION STATE"
    || transferComplete.transferStatus !== "complete"
    || !same(transferComplete, options.transferCompleteState)) return null;

  const explanation = resumeCustodyLedgerPython({
    ...options.learningState,
    prerequisiteStatus: "complete",
    pythonEvidence: transferComplete.primaryEvidence,
    pythonTransferEvidence: transferComplete.transferEvidence,
  });
  if (explanation.phase !== "python_explanation"
    || explanation.activeMessageKey !== "explanation_prompt"
    || explanation.pythonForm !== "explanation"
    || explanation.transferStatus !== "complete"
    || !Object.values(explanation.explanationSelections ?? {}).every((value) => value === "")) return null;

  return { transferAuthority, transferComplete, explanation };
}

function completionView(authorities) {
  return {
    ...clone(authorities.transferComplete),
    version: CUSTODY_LEDGER_EXPLANATION_ENTRY_VERSION,
    phase: "EX-00",
    authorityPhase: "FT-20C",
    stateName: "TRANSFER_COMPLETE_RETAINED",
    availableActions: [
      "RETURN TO EVIDENCE",
      "RETURN TO CITY THRESHOLD",
      CUSTODY_LEDGER_OPEN_BLANK_EXPLANATION,
    ],
    focusIntent: { group: "transfer_complete", target: "owner_heading" },
    accessibility: custodyLedgerExplanationEntryAccessibility,
    finalizedEvidenceVisibility: "hidden_prerequisite_only",
  };
}

function explanationView(authorities) {
  const canonical = authorities.explanation;
  return {
    version: CUSTODY_LEDGER_EXPLANATION_ENTRY_VERSION,
    packetId: canonical.packetId,
    boardId: canonical.boardId,
    checkpoint: "30-D",
    phase: "EX-20",
    authorityPhase: canonical.phase,
    stateName: "CANONICAL_BLANK_PYTHON_EXPLANATION",
    owner: custodyLedgerPythonOwnershipMessages.explanation_prompt.owner,
    ownershipMessage: { ...custodyLedgerPythonOwnershipMessages.explanation_prompt },
    activeMessageKey: canonical.activeMessageKey,
    pythonForm: canonical.pythonForm,
    explanationSelections: { ...canonical.explanationSelections },
    explanationControlState: "genuinely_blank",
    scoringEnabled: false,
    campaignCommitEnabled: false,
    primaryEvidence: clone(canonical.pythonEvidence),
    transferEvidence: clone(canonical.pythonTransferEvidence),
    finalizedEvidenceVisibility: "hidden_prerequisite_only",
    focusIntent: { group: "python_explanation", target: "owner_heading", then: "first_blank_explanation_control" },
    availableActions: ["RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD"],
    accessibility: custodyLedgerExplanationEntryAccessibility,
    observationEvidence: authorities.transferComplete.observationEvidence.map(clone),
    predecessor: { ...authorities.transferComplete.predecessor },
    continuation: canonical.continuation,
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
  };
}

export function createCustodyLedgerExplanationEntry(options = {}) {
  const authorities = canonicalAuthorities(options);
  if (!authorities) throw new TypeError("An exact canonical protected FT-20C boundary is required.");
  const canonicalCompletion = completionView(authorities);
  const canonicalExplanation = explanationView(authorities);
  let state = same(options.restoredState, canonicalExplanation)
    ? clone(canonicalExplanation)
    : clone(canonicalCompletion);
  const handledTokens = new Set();

  return Object.freeze({
    getState() {
      return clone(state);
    },
    dispatch(intent) {
      const before = clone(state);
      if (!exactIntent(intent)) {
        return { status: "rejected", reason: "protected_explanation_entry_closed", state: before };
      }
      if (handledTokens.has(intent.eventToken)) {
        return { status: "duplicate_suppressed", reason: "one_hit_only", state: before };
      }
      if (state.phase !== "EX-00") {
        return { status: "rejected", reason: "protected_explanation_entry_closed", state: before };
      }
      handledTokens.add(intent.eventToken);
      state = clone(canonicalExplanation);
      return { status: "blank_explanation_opened", replacement: "atomic", intentPhase: "EX-10", state: clone(state) };
    },
    returnToEvidence() {
      return authorities.transferAuthority.returnToEvidence();
    },
    returnToCityThreshold() {
      return authorities.transferAuthority.returnToCityThreshold();
    },
  });
}
