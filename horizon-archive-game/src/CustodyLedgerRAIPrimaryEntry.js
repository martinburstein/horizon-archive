import {
  custodyLedgerPythonOwnershipMessages,
  custodyLedgerRAIDimensions,
  custodyLedgerRAIPrimaryScenarios,
  dismissCustodyLedgerPythonConclusion,
} from "./custodyLedgerExercise.js";
import {
  createCustodyLedgerExplanationSubmission,
} from "./CustodyLedgerExplanationSubmission.js";

export const CUSTODY_LEDGER_RAI_PRIMARY_ENTRY_VERSION = "rp002.rai-primary-entry.v1";
export const CUSTODY_LEDGER_OPEN_RAI_PRIMARY = "DISMISS PYTHON CONCLUSION AND OPEN RESPONSIBLE-AI REVIEW";

export const custodyLedgerRAIPrimaryEntryModalities = Object.freeze([
  "pointer",
  "touch",
  "keyboard_enter",
  "keyboard_space",
  "switch",
  "speech",
  "screen_reader",
]);

export const custodyLedgerRAIPrimaryEntryAccessibility = Object.freeze({
  oneActiveGroup: true,
  conclusionSemanticOrder: Object.freeze([
    "owner_heading",
    "bounded_system_result",
    "python_conclusion",
    "return_to_evidence",
    "return_to_city_threshold",
    "dismiss_python_conclusion_and_open_responsible_ai_review",
  ]),
  blankPrimarySemanticOrder: Object.freeze([
    "owner_heading",
    "course_primary_copy",
    "first_case",
    "principle",
    "mitigation",
    "accountable_owner",
    "return_to_evidence",
    "return_to_city_threshold",
  ]),
  minActionCssPx: 44,
  blankNativeControls: true,
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
    && intent.version === CUSTODY_LEDGER_RAI_PRIMARY_ENTRY_VERSION
    && intent.mode === "campaign"
    && intent.owner === "PILOT // FLIGHT RECORDER"
    && intent.action === CUSTODY_LEDGER_OPEN_RAI_PRIMARY
    && custodyLedgerRAIPrimaryEntryModalities.includes(intent.activationKind)
    && typeof intent.eventToken === "string"
    && /^[a-z0-9][a-z0-9:_-]{5,79}$/i.test(intent.eventToken);
}

function isExactBlankRAIAuthority(state) {
  const scenarioIds = custodyLedgerRAIPrimaryScenarios.map(({ id }) => id);
  return state.phase === "rai_primary"
    && state.activeMessageKey === "rai_primary"
    && state.raiForm === "primary"
    && state.raiScenarioIndex === 0
    && state.raiScenarioId === custodyLedgerRAIPrimaryScenarios[0].id
    && !Object.hasOwn(state, "raiEvidence")
    && same(state.raiWorkingResponses, {})
    && exactKeys(state.raiChecks, scenarioIds)
    && Object.values(state.raiChecks).every((dimensions) => (
      exactKeys(dimensions, custodyLedgerRAIDimensions)
      && custodyLedgerRAIDimensions.every((dimension) => dimensions[dimension] === false)
    ));
}

function canonicalAuthorities(options) {
  let explanationAuthority;
  try {
    explanationAuthority = createCustodyLedgerExplanationSubmission({
      ...options,
      restoredState: options.explanationCompleteState,
    });
  } catch {
    return null;
  }
  const conclusion = explanationAuthority.getState();
  if (conclusion.phase !== "EXS-20C"
    || conclusion.stateName !== "BOUNDED_PYTHON_CONCLUSION"
    || conclusion.owner !== "PILOT // FLIGHT RECORDER"
    || !same(conclusion, options.explanationCompleteState)) return null;

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
  if (!isExactBlankRAIAuthority(raiPrimary)) return null;

  return { explanationAuthority, conclusion, raiPrimary };
}

function commonState(authorities) {
  const conclusion = authorities.conclusion;
  return {
    version: CUSTODY_LEDGER_RAI_PRIMARY_ENTRY_VERSION,
    packetId: conclusion.packetId,
    boardId: conclusion.boardId,
    checkpoint: "sc03_rai_primary_entry_protected",
    finalizedEvidenceVisibility: "hidden_prerequisite_only",
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
    raiAttemptCreated: false,
    raiEvidenceCreated: false,
    raiCrossCreditGranted: false,
    savePerformed: false,
    examCreditGranted: false,
    examGuarantee: false,
    identityMaterialClosed: true,
    successor: null,
    accessibility: custodyLedgerRAIPrimaryEntryAccessibility,
  };
}

function conclusionView(authorities) {
  return {
    ...commonState(authorities),
    phase: "RAD-00",
    authorityPhase: authorities.conclusion.authorityPhase,
    stateName: "ACCEPTED_STABLE_PYTHON_CONCLUSION",
    owner: authorities.conclusion.owner,
    ownershipMessage: clone(authorities.conclusion.ownershipMessage),
    boundedResult: clone(authorities.conclusion.boundedResult),
    evidenceScope: authorities.conclusion.evidenceScope,
    focusIntent: { group: "python_conclusion", target: "owner_heading" },
    availableActions: [
      "RETURN TO EVIDENCE",
      "RETURN TO CITY THRESHOLD",
      CUSTODY_LEDGER_OPEN_RAI_PRIMARY,
    ],
  };
}

function blankControl(id, choices) {
  return {
    id,
    authorityDimension: id === "accountable_owner" ? "owner" : id,
    value: "",
    nativeValue: "",
    selected: false,
    semanticState: "genuinely_blank",
    choices: [...choices],
  };
}

function blankPrimaryView(authorities) {
  const firstCase = custodyLedgerRAIPrimaryScenarios[0];
  return {
    ...commonState(authorities),
    phase: "RAD-20",
    authorityPhase: authorities.raiPrimary.phase,
    stateName: "GENUINELY_BLANK_RAI_PRIMARY",
    owner: custodyLedgerPythonOwnershipMessages.rai_primary.owner,
    ownershipMessage: clone(custodyLedgerPythonOwnershipMessages.rai_primary),
    mappingId: "RP002-RAI-01",
    formId: "RAI-P0",
    raiForm: "primary",
    case: { id: firstCase.id, prompt: firstCase.prompt },
    controls: [
      blankControl("principle", firstCase.principleChoices),
      blankControl("mitigation", firstCase.mitigationChoices),
      blankControl("accountable_owner", firstCase.ownerChoices),
    ],
    controlState: "genuinely_blank",
    attemptStatus: "no_attempt",
    scoringEnabled: false,
    campaignCommitEnabled: false,
    focusIntent: {
      group: "rai_primary",
      target: "owner_heading",
      then: "principle",
    },
    availableActions: ["RETURN TO EVIDENCE", "RETURN TO CITY THRESHOLD"],
  };
}

export function createCustodyLedgerRAIPrimaryEntry(options = {}) {
  const authorities = canonicalAuthorities(options);
  if (!authorities) throw new TypeError("An exact accepted protected EXS-20C conclusion is required.");
  const canonicalConclusion = conclusionView(authorities);
  const canonicalBlankPrimary = blankPrimaryView(authorities);
  let state = same(options.restoredState, canonicalBlankPrimary)
    ? clone(canonicalBlankPrimary)
    : clone(canonicalConclusion);
  const handledTokens = new Set();

  return Object.freeze({
    getState() {
      return clone(state);
    },
    dispatch(intent) {
      const before = clone(state);
      if (!exactIntent(intent)) {
        return { status: "rejected", reason: "protected_rai_primary_entry_closed", state: before };
      }
      if (handledTokens.has(intent.eventToken)) {
        return { status: "duplicate_suppressed", reason: "one_hit_only", state: before };
      }
      if (state.phase !== "RAD-00") {
        return { status: "rejected", reason: "protected_rai_primary_entry_closed", state: before };
      }
      handledTokens.add(intent.eventToken);
      state = clone(canonicalBlankPrimary);
      return {
        status: "blank_rai_primary_opened",
        replacement: "atomic",
        intentPhase: "RAD-10",
        state: clone(state),
      };
    },
    returnToEvidence() {
      return authorities.explanationAuthority.returnToEvidence();
    },
    returnToCityThreshold() {
      return authorities.explanationAuthority.returnToCityThreshold();
    },
  });
}
