import { CITY_THRESHOLD_CONTINUATION, sanitizeCityThresholdSave } from "./cityThresholdExercise.js";
import {
  sanitizeStructuredPacketEvidence,
  structuredPacketChecks,
  structuredPacketExplanationDimensions,
} from "./structuredPacketExercise.js";
import {
  responsibleAIDimensions,
  responsibleAIPrimaryScenarios,
  responsibleAITransferScenarios,
  sanitizeResponsibleAIEvidence,
} from "./responsibleAIExercise.js";

export const CUSTODY_LEDGER_PACKET_ID = "RP-002";
export const CUSTODY_LEDGER_BOARD_ID = "SC-03-30";

export const custodyLedgerPredecessorMessage = Object.freeze({
  owner: "SYSTEM // EXPEDITION STATE",
  text: "Required predecessor evidence is incomplete. Return to the saved City Threshold anchor.",
});

export const custodyLedgerOwnershipMessages = Object.freeze({
  prerequisites_incomplete: Object.freeze({
    owner: "SYSTEM // EXPEDITION STATE",
    text: "Required practice evidence is incomplete. The district remains available; no local request has been sent.",
  }),
  tray_available: Object.freeze({
    owner: "SYSTEM // EXPEDITION SESSION",
    text: "Five exposed conditions logged. Add only the two expedition-owned fields.",
  }),
  source_locked: Object.freeze({
    owner: "SYSTEM // LOCAL CHECKS",
    text: "Source evidence is locked. Add expedition fields without replacing it.",
  }),
  identity_unknown: Object.freeze({
    owner: "901 TEACHER // FEEDBACK",
    text: "Identity is missing or unknown here; it is not a false identity.",
  }),
  access_not_requested: Object.freeze({
    owner: "SYSTEM // LOCAL CHECKS",
    text: "No request occurred. This comparison cannot claim access.",
  }),
  review: Object.freeze({
    owner: "PILOT // FLIGHT RECORDER",
    text: "This label is mine. It does not name their purpose or open what remains closed.",
  }),
  cancelled: Object.freeze({
    owner: "SYSTEM // EXPEDITION SESSION",
    text: "Unsubmitted work cleared. The district and closed records are unchanged.",
  }),
  saved: Object.freeze({
    owner: "SYSTEM // EXPEDITION STATE",
    text: "Bounded comparison saved. No access request or external action occurred; `continuation` is unchanged.",
  }),
  restored: Object.freeze({
    owner: "SYSTEM // EXPEDITION STATE",
    text: "Civic comparison restored. Working notes are cleared; closed records remain closed.",
  }),
  tour: Object.freeze({
    owner: "SYSTEM // DEMO TOUR",
    text: "Preview only — bounded comparison not saved.",
  }),
});

export const custodyLedgerSourceFields = Object.freeze({
  condition: "outlined_gap",
  source: "exposed_surface",
  identity: null,
  access_requested: false,
});

export const custodyLedgerExpeditionFields = Object.freeze({
  classification: "",
  owner: "",
});

export const CUSTODY_LEDGER_UNFINISHED_WORK_LABEL = "UNFINISHED WORK IMAGE";

export const custodyLedgerPrimaryStarterSource = `comparison = {
    "condition": "outlined_gap",
    "source": "exposed_surface",
    "identity": None,
    "access_requested": False,
}

# Add only the two expedition-owned key updates below.
# comparison["classification"] =
# comparison["owner"] =
`;

export const custodyLedgerPrimaryReferenceSource = `comparison = {
    "condition": "outlined_gap",
    "source": "exposed_surface",
    "identity": None,
    "access_requested": False,
}

comparison["classification"] = "unknown"
comparison["owner"] = "human_expedition"
`;

export const custodyLedgerTransferStarterSource = `comparison = {
    "condition": "unresolved_interval",
    "source": "deidentified_sensor_log",
    "identity": None,
    "access_requested": False,
}

# Add only the two human-reviewer-owned key updates below.
# comparison["classification"] =
# comparison["owner"] =
`;

export const custodyLedgerTransferSourceFields = Object.freeze({
  condition: "unresolved_interval",
  source: "deidentified_sensor_log",
  identity: null,
  access_requested: false,
});

export const custodyLedgerCausalResult = Object.freeze({
  owner: "SUIT // PROVISIONAL TRANSLATION",
  text: "Execution renders the exposed three-condition record. Identity-bearing material remains closed.",
  record: Object.freeze({
    fixed_trace: "distinct",
    later_stewardship: "distinct",
    outlined_gap: "distinct",
    identity_bearing_material: "closed",
  }),
});

export const custodyLedgerPythonChecks = Object.freeze([
  "result_is_dictionary",
  "exact_keys_only",
  "condition_and_source_preserved",
  "identity_remains_none",
  "access_requested_remains_false",
  "classification_and_owner_added_by_key_update",
]);

function blankPythonChecks() {
  return Object.fromEntries(custodyLedgerPythonChecks.map((check) => [check, false]));
}

function workImage(sourceFields = custodyLedgerSourceFields) {
  const transfer = sourceFields.condition === custodyLedgerTransferSourceFields.condition;
  return {
    label: CUSTODY_LEDGER_UNFINISHED_WORK_LABEL,
    sourceFields: { ...sourceFields },
    expeditionFields: { ...custodyLedgerExpeditionFields },
    unfinishedUpdates: ["classification", "owner"],
    starterSource: transfer ? custodyLedgerTransferStarterSource : custodyLedgerPrimaryStarterSource,
  };
}

function stripPythonComments(source) {
  return String(source ?? "")
    .split(/\r?\n/)
    .map((line) => line.replace(/#.*$/, "").trim())
    .filter(Boolean);
}

function parseLiteral(value) {
  const token = value.trim().replace(/,$/, "").trim();
  if (token === "None") return null;
  if (token === "False") return false;
  if (token === "True") return true;
  const quoted = token.match(/^(["'])(.*)\1$/);
  return quoted ? quoted[2] : Symbol.for("invalid_python_literal");
}

function checkMessageFor(result) {
  if (!result.condition_and_source_preserved || !result.exact_keys_only || !result.result_is_dictionary) {
    return "source_locked";
  }
  if (!result.identity_remains_none) return "identity_unknown";
  if (!result.access_requested_remains_false) return "access_not_requested";
  return "source_locked";
}

function sanitizeAttemptCount(value) {
  return Number.isSafeInteger(value) && value >= 0 ? Math.min(value, 9999) : 0;
}

function sanitizedPythonEvidence(value, form) {
  if (!value || value.form !== form || value.packetId !== CUSTODY_LEDGER_PACKET_ID) return null;
  return {
    packetId: CUSTODY_LEDGER_PACKET_ID,
    mappingId: "RP002-A3-CIVIC-COMPARISON",
    form,
    skillId: "PY-009",
    dimensionCorrectness: Object.fromEntries(custodyLedgerPythonChecks.map((check) => [
      check,
      value?.dimensionCorrectness?.[check] === true,
    ])),
    attemptCount: sanitizeAttemptCount(value.attemptCount),
    hintLevel: Number.isSafeInteger(value.hintLevel) && value.hintLevel >= 0
      ? Math.min(value.hintLevel, 9)
      : 0,
    confidence: ["low", "medium", "high"].includes(value.confidence) ? value.confidence : null,
    misconceptionTags: Array.isArray(value.misconceptionTags)
      ? value.misconceptionTags.filter((tag) => typeof tag === "string").slice(0, 8)
      : [],
    masteryStatus: form === "primary" && value.masteryStatus === "primary_complete"
      ? "primary_complete"
      : "in_progress",
  };
}

/**
 * Statically evaluates the bounded course-authored Python fragment. It never
 * executes learner code, performs I/O, or treats displayed output as evidence.
 */
export function evaluateCustodyLedgerPrimarySource(source) {
  const lines = stripPythonComments(source);
  const checks = blankPythonChecks();
  const misconceptionTags = [];
  const forbidden = /\b(print|open|eval|exec|compile|input|globals|locals|__import__|requests|fetch|subprocess)\s*\(|\b(os|sys)\s*\.|\|=|\.update\s*\(/;
  const hasForbiddenOperation = lines.some((line) => forbidden.test(line));
  const initializerStarts = lines.filter((line) => /^comparison\s*=\s*\{$/.test(line));
  const rebindingLines = lines.filter((line) => /^comparison\s*=/.test(line));
  const closeIndexes = lines.reduce((indexes, line, index) => line === "}" ? [...indexes, index] : indexes, []);
  const startIndex = lines.findIndex((line) => /^comparison\s*=\s*\{$/.test(line));
  const endIndex = startIndex >= 0 ? lines.findIndex((line, index) => index > startIndex && line === "}") : -1;
  const mappingEntries = {};
  let mappingShapeValid = initializerStarts.length === 1 && rebindingLines.length === 1 && endIndex > startIndex;
  if (mappingShapeValid) {
    for (const line of lines.slice(startIndex + 1, endIndex)) {
      const match = line.match(/^(["'])([^"']+)\1\s*:\s*(.+)$/);
      if (!match || Object.hasOwn(mappingEntries, match[2])) {
        mappingShapeValid = false;
        break;
      }
      mappingEntries[match[2]] = parseLiteral(match[3]);
    }
  }
  checks.result_is_dictionary = mappingShapeValid && closeIndexes.length === 1;

  const updateLines = lines.filter((line) => /^comparison\s*\[/.test(line));
  const updates = updateLines.map((line) => {
    const match = line.match(/^comparison\s*\[\s*(["'])([^"']+)\1\s*\]\s*=\s*(.+)$/);
    return match ? { key: match[2], value: parseLiteral(match[3]) } : null;
  });
  const mappingKeys = Object.keys(mappingEntries);
  const expectedInputKeys = ["condition", "source", "identity", "access_requested"];
  const allowedLines = lines.every((line, index) => {
    if (index === startIndex || index === endIndex) return true;
    if (index > startIndex && index < endIndex) return /^(["'])([^"']+)\1\s*:\s*(.+)$/.test(line);
    return /^comparison\s*\[/.test(line);
  });
  checks.exact_keys_only = checks.result_is_dictionary
    && mappingKeys.length === expectedInputKeys.length
    && expectedInputKeys.every((key) => Object.hasOwn(mappingEntries, key))
    && updates.length === 2
    && updates.every(Boolean)
    && new Set(updates.map(({ key }) => key)).size === 2
    && updates.every(({ key }) => ["classification", "owner"].includes(key))
    && allowedLines;
  checks.condition_and_source_preserved = mappingEntries.condition === "outlined_gap"
    && mappingEntries.source === "exposed_surface"
    && !updates.some((update) => update && ["condition", "source"].includes(update.key));
  checks.identity_remains_none = Object.hasOwn(mappingEntries, "identity")
    && mappingEntries.identity === null
    && !updates.some((update) => update?.key === "identity");
  checks.access_requested_remains_false = Object.hasOwn(mappingEntries, "access_requested")
    && mappingEntries.access_requested === false
    && !updates.some((update) => update?.key === "access_requested");
  checks.classification_and_owner_added_by_key_update = !hasForbiddenOperation
    && updates.length === 2
    && updates.some(({ key, value } = {}) => key === "classification" && value === "unknown")
    && updates.some(({ key, value } = {}) => key === "owner" && value === "human_expedition")
    && rebindingLines.length === 1
    && allowedLines;

  if (!checks.result_is_dictionary || rebindingLines.length !== 1) misconceptionTags.push("replace_the_input_dictionary");
  if (!checks.exact_keys_only) misconceptionTags.push("exact_keys_only");
  if (!checks.condition_and_source_preserved) misconceptionTags.push("locked_source_changed");
  if (!checks.identity_remains_none) misconceptionTags.push("missing_value_equals_false");
  if (!checks.access_requested_remains_false) misconceptionTags.push("no_request_changed");
  if (!checks.classification_and_owner_added_by_key_update) misconceptionTags.push("two_key_updates_incomplete");
  if (hasForbiddenOperation) misconceptionTags.push("output_or_external_operation_is_not_evidence");
  const score = custodyLedgerPythonChecks.filter((check) => checks[check]).length;
  return {
    ...checks,
    score,
    passed: score === custodyLedgerPythonChecks.length && !hasForbiddenOperation,
    misconceptionTags: [...new Set(misconceptionTags)],
  };
}

function hasStrictStructuredPrerequisite(value) {
  const safe = sanitizeStructuredPacketEvidence(value);
  return safe?.masteryStatus === "mastered"
    && structuredPacketChecks.every((check) => safe.checkCorrectness.primary?.[check] === true)
    && structuredPacketChecks.every((check) => safe.checkCorrectness.transfer?.[check] === true)
    && structuredPacketExplanationDimensions.every((dimension) => safe.checkCorrectness.explanation?.[dimension] === true);
}

function hasStrictResponsibleAIPrerequisite(value) {
  const safe = sanitizeResponsibleAIEvidence(value);
  if (!safe || safe.masteryStatus !== "mastered") return false;
  return [...responsibleAIPrimaryScenarios, ...responsibleAITransferScenarios]
    .every((scenario) => responsibleAIDimensions
      .every((dimension) => safe.dimensionCorrectness[scenario.id]?.[dimension] === true))
    && responsibleAIDimensions
      .every((dimension) => safe.dimensionCorrectness.closed_note_explanation?.[dimension] === true);
}

export function getCustodyLedgerOwnershipMessage(messageKey) {
  return custodyLedgerOwnershipMessages[messageKey] ?? custodyLedgerOwnershipMessages.prerequisites_incomplete;
}

export function createCustodyLedgerScaffold(predecessorValue) {
  const predecessor = sanitizeCityThresholdSave(predecessorValue);
  const predecessorReady = predecessor?.cityThresholdAnchorRecorded === true
    && predecessor?.civicDistrictRouteAvailable === true;
  return {
    packetId: CUSTODY_LEDGER_PACKET_ID,
    boardId: CUSTODY_LEDGER_BOARD_ID,
    phase: predecessorReady ? "prerequisite_check" : "predecessor_blocked",
    activeMessageKey: "prerequisites_incomplete",
    sourceFields: { ...custodyLedgerSourceFields },
    expeditionFields: { ...custodyLedgerExpeditionFields },
    scoringEnabled: false,
    campaignCommitEnabled: false,
    continuation: CITY_THRESHOLD_CONTINUATION,
    cityStateDelta: null,
  };
}

function normalizeCustodyLedgerScaffold(state) {
  const primaryReady = state?.phase === "python_primary"
    && state?.prerequisiteStatus === "complete"
    && state?.pythonForm === "primary";
  const transferReady = state?.phase === "python_transfer"
    && state?.prerequisiteStatus === "complete"
    && state?.pythonForm === "transfer"
    && state?.primaryStatus === "complete";
  const phase = transferReady ? "python_transfer"
    : primaryReady ? "python_primary"
    : state?.phase === "prerequisite_check" ? "prerequisite_check"
      : "predecessor_blocked";
  const activeMessageKey = Object.hasOwn(custodyLedgerOwnershipMessages, state?.activeMessageKey)
    ? state.activeMessageKey
    : "prerequisites_incomplete";
  return {
    packetId: CUSTODY_LEDGER_PACKET_ID,
    boardId: CUSTODY_LEDGER_BOARD_ID,
    phase,
    activeMessageKey,
    sourceFields: { ...(transferReady ? custodyLedgerTransferSourceFields : custodyLedgerSourceFields) },
    expeditionFields: {
      classification: typeof state?.expeditionFields?.classification === "string"
        ? state.expeditionFields.classification.slice(0, 40)
        : "",
      owner: typeof state?.expeditionFields?.owner === "string"
        ? state.expeditionFields.owner.slice(0, 40)
        : "",
    },
    scoringEnabled: primaryReady || transferReady,
    campaignCommitEnabled: false,
    continuation: CITY_THRESHOLD_CONTINUATION,
    cityStateDelta: null,
    ...((primaryReady || transferReady) ? {
      prerequisiteStatus: "complete",
      pythonForm: transferReady ? "transfer" : "primary",
      pythonChecks: Object.fromEntries(custodyLedgerPythonChecks.map((check) => [
        check,
        state?.pythonChecks?.[check] === true,
      ])),
      unfinishedWorkImage: workImage(transferReady ? custodyLedgerTransferSourceFields : custodyLedgerSourceFields),
      ...(sanitizedPythonEvidence(state?.pythonEvidence, "primary") ? {
        pythonEvidence: sanitizedPythonEvidence(state.pythonEvidence, "primary"),
      } : {}),
      ...(transferReady ? {
        primaryStatus: "complete",
        causalResult: {
          owner: custodyLedgerCausalResult.owner,
          text: custodyLedgerCausalResult.text,
          record: { ...custodyLedgerCausalResult.record },
        },
      } : {}),
    } : {}),
  };
}

export function advanceCustodyLedgerPrerequisite(state, prerequisiteEvidence) {
  const current = normalizeCustodyLedgerScaffold(state);
  if (current.phase !== "prerequisite_check") return createCustodyLedgerScaffold(null);
  const prerequisitesPass = hasStrictStructuredPrerequisite(prerequisiteEvidence?.structuredPacketEvidence)
    && hasStrictResponsibleAIPrerequisite(prerequisiteEvidence?.responsibleAIEvidence);
  if (!prerequisitesPass) {
    return {
      ...current,
      activeMessageKey: "prerequisites_incomplete",
      scoringEnabled: false,
      campaignCommitEnabled: false,
    };
  }
  return {
    ...current,
    phase: "python_primary",
    activeMessageKey: "tray_available",
    sourceFields: { ...custodyLedgerSourceFields },
    expeditionFields: { ...custodyLedgerExpeditionFields },
    scoringEnabled: true,
    campaignCommitEnabled: false,
    prerequisiteStatus: "complete",
    pythonForm: "primary",
    pythonChecks: blankPythonChecks(),
    unfinishedWorkImage: workImage(),
  };
}

export function submitCustodyLedgerPrimary(state, source) {
  const current = normalizeCustodyLedgerScaffold(state);
  if (current.phase !== "python_primary"
    || current.prerequisiteStatus !== "complete"
    || current.pythonForm !== "primary") {
    return createCustodyLedgerScaffold(null);
  }
  const result = evaluateCustodyLedgerPrimarySource(source);
  const attemptCount = sanitizeAttemptCount(current.pythonEvidence?.attemptCount) + 1;
  const pythonEvidence = {
    packetId: CUSTODY_LEDGER_PACKET_ID,
    mappingId: "RP002-A3-CIVIC-COMPARISON",
    form: "primary",
    skillId: "PY-009",
    dimensionCorrectness: Object.fromEntries(custodyLedgerPythonChecks.map((check) => [check, result[check] === true])),
    attemptCount,
    hintLevel: 0,
    confidence: null,
    misconceptionTags: result.misconceptionTags,
    masteryStatus: result.passed ? "primary_complete" : "in_progress",
  };
  if (!result.passed) {
    return {
      ...current,
      activeMessageKey: checkMessageFor(result),
      sourceFields: { ...custodyLedgerSourceFields },
      expeditionFields: { ...custodyLedgerExpeditionFields },
      pythonChecks: Object.fromEntries(custodyLedgerPythonChecks.map((check) => [check, result[check] === true])),
      unfinishedWorkImage: workImage(),
      pythonEvidence,
      scoringEnabled: true,
      campaignCommitEnabled: false,
      continuation: CITY_THRESHOLD_CONTINUATION,
      cityStateDelta: null,
    };
  }
  return {
    packetId: CUSTODY_LEDGER_PACKET_ID,
    boardId: CUSTODY_LEDGER_BOARD_ID,
    phase: "python_transfer",
    activeMessageKey: "tray_available",
    sourceFields: { ...custodyLedgerTransferSourceFields },
    expeditionFields: { ...custodyLedgerExpeditionFields },
    scoringEnabled: true,
    campaignCommitEnabled: false,
    continuation: CITY_THRESHOLD_CONTINUATION,
    cityStateDelta: null,
    prerequisiteStatus: "complete",
    primaryStatus: "complete",
    pythonForm: "transfer",
    pythonChecks: blankPythonChecks(),
    unfinishedWorkImage: workImage(custodyLedgerTransferSourceFields),
    pythonEvidence,
    causalResult: {
      owner: custodyLedgerCausalResult.owner,
      text: custodyLedgerCausalResult.text,
      record: { ...custodyLedgerCausalResult.record },
    },
  };
}

export function retryCustodyLedgerPrimary(state) {
  const current = normalizeCustodyLedgerScaffold(state);
  if (current.phase !== "python_primary") return current;
  return {
    ...current,
    activeMessageKey: "tray_available",
    sourceFields: { ...custodyLedgerSourceFields },
    expeditionFields: { ...custodyLedgerExpeditionFields },
    pythonChecks: blankPythonChecks(),
    unfinishedWorkImage: workImage(),
  };
}

export function setCustodyLedgerOwnershipMessage(state, messageKey) {
  const current = normalizeCustodyLedgerScaffold(state);
  const safeKey = Object.hasOwn(custodyLedgerOwnershipMessages, messageKey)
    ? messageKey
    : current.activeMessageKey;
  return {
    ...current,
    activeMessageKey: safeKey,
  };
}

export function clearCustodyLedgerWorkingState(state) {
  const current = normalizeCustodyLedgerScaffold(state);
  return {
    ...current,
    activeMessageKey: "cancelled",
    expeditionFields: { ...custodyLedgerExpeditionFields },
  };
}
