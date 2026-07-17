import { CITY_THRESHOLD_CONTINUATION, sanitizeCityThresholdSave } from "./cityThresholdExercise.js";
import {
  sanitizeStructuredPacketEvidence,
  structuredPacketChecks,
  structuredPacketExplanationDimensions,
} from "./structuredPacketExercise.js";
import {
  responsibleAIDimensions,
  responsibleAIExercise,
  responsibleAIPrimaryScenarios,
  responsibleAIPrinciples,
  responsibleAITransferScenarios,
  sanitizeResponsibleAIEvidence,
} from "./responsibleAIExercise.js";

export const CUSTODY_LEDGER_PACKET_ID = "RP-002";
export const CUSTODY_LEDGER_BOARD_ID = "SC-03-30";

export const custodyLedgerPredecessorMessage = Object.freeze({
  owner: "SYSTEM // EXPEDITION STATE",
  text: "Required predecessor evidence is incomplete. Return to the saved City Threshold anchor.",
});

export const custodyLedgerLocalComparisonBlankMessage = Object.freeze({
  owner: "SYSTEM // EXPEDITION STATE",
  text: "Required practice evidence is incomplete. The district remains available; no local request has been sent.",
});

export const custodyLedgerOwnershipMessages = Object.freeze({
  prerequisites_incomplete: custodyLedgerLocalComparisonBlankMessage,
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

export const custodyLedgerPythonOwnershipMessages = Object.freeze({
  primary_result: Object.freeze({
    owner: "SUIT // PROVISIONAL TRANSLATION",
    text: "Execution renders the exposed three-condition record. Identity-bearing material remains closed.",
  }),
  fresh_practice: Object.freeze({
    owner: "SYSTEM // EXPEDITION SESSION",
    text: "Builder work image cleared. Fresh expedition practice loaded; no source fields or result were carried forward.",
  }),
  explanation_prompt: Object.freeze({
    owner: "901 TEACHER // FEEDBACK",
    text: "Explain the update, then distinguish missing identity from an access request that did not occur.",
  }),
  python_conclusion: Object.freeze({
    owner: "PILOT // FLIGHT RECORDER",
    text: "I updated my record without replacing its source. Unknown identity and no access request remain separate facts.",
  }),
  rai_primary: Object.freeze({
    owner: "SYSTEM // EXPEDITION SESSION",
    text: "Responsible AI primary initialized. No choices are selected and no comparison has been saved.",
  }),
  rai_feedback: Object.freeze({
    owner: "901 TEACHER // FEEDBACK",
    text: "Review is limited to the failed case and dimensions. No answer, authority, or world response is supplied.",
  }),
  rai_guided: Object.freeze({
    owner: "SYSTEM // EXPEDITION SESSION",
    text: "Neutral guided practice loaded. Its response is unscored and will not carry into the primary retry.",
  }),
  rai_transfer: Object.freeze({
    owner: "SYSTEM // EXPEDITION SESSION",
    text: "Fresh course transfer loaded. These cases came from the expedition lesson, not the city.",
  }),
  rai_transfer_feedback: Object.freeze({
    owner: "901 TEACHER // FEEDBACK",
    text: "Transfer review is incomplete. Recheck the named case and dimensions; no city response occurred.",
  }),
  rai_transfer_guided: Object.freeze({
    owner: "901 TEACHER // FEEDBACK",
    text: "Neutral guided practice loaded. Its response is unscored and will not carry into the transfer retry.",
  }),
  rai_explanation: Object.freeze({
    owner: "901 TEACHER // FEEDBACK",
    text: "Explain three boundaries: human application label, native fact, and authority to act.",
  }),
  rai_explanation_feedback: Object.freeze({
    owner: "901 TEACHER // FEEDBACK",
    text: "Explanation incomplete. Recheck the named boundary, then retry from a blank form.",
  }),
  rai_conclusion: Object.freeze({
    owner: "PILOT // FLIGHT RECORDER",
    text: "My application label is a human interpretation, not their fact or permission to act.",
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
export const CUSTODY_LEDGER_FRESH_PRACTICE_LABEL = "FRESH PRACTICE IMAGE";

export const custodyLedgerObservationIds = Object.freeze([
  "fixed_trace",
  "later_stewardship",
  "outlined_gap",
  "distant_repetition",
  "closed_boundary",
]);

export const custodyLedgerObservationStages = Object.freeze({
  near: Object.freeze(["fixed_trace", "later_stewardship", "outlined_gap"]),
  far: Object.freeze(["distant_repetition", "closed_boundary"]),
});

export const custodyLedgerObservationStatements = Object.freeze({
  fixed_trace: Object.freeze({
    owner: "SCENE // SENSOR RECORD",
    text: "Aged impressions continue through one substrate and beneath the darker crossing layer.",
  }),
  later_stewardship: Object.freeze({
    owner: "SCENE // SENSOR RECORD",
    text: "A later laminate crosses older seams and steps around surviving impressions instead of erasing them.",
  }),
  outlined_gap: Object.freeze({
    owner: "SCENE // SENSOR RECORD",
    text: "The border encloses solid substrate; dust and heat staining continue across the unmarked interval.",
  }),
  distant_repetition: Object.freeze({
    owner: "SCENE // SENSOR RECORD",
    text: "A farther mass repeats the three-condition relation at another scale without exact duplication.",
  }),
  closed_boundary: Object.freeze({
    owner: "SCENE // SENSOR RECORD",
    text: "The sealed interlock shows no crossing or request path; maintenance continues beneath it.",
  }),
});

export const custodyLedgerObservationOwnershipMessages = Object.freeze({
  entry: Object.freeze({
    owner: "SYSTEM // EXPEDITION SESSION",
    text: "Inspect each exposed condition deliberately. Visibility and orientation alone record no evidence.",
  }),
  unavailable: Object.freeze({
    owner: "SYSTEM // EXPEDITION SESSION",
    text: "That comparison is not available from this evidence stage. Recorded observations remain unchanged.",
  }),
  tour: Object.freeze({
    owner: "SYSTEM // DEMO TOUR",
    text: "Preview only — district observations are not recorded.",
  }),
});

export const CUSTODY_LEDGER_OBSERVATION_ACTION = "deliberate_campaign_inspection";

export const custodyLedgerAtomicProgression = Object.freeze({
  civicComparisonSaved: true,
  nextSurveyDirectionMarked: true,
  rp002Checkpoint: "comparison_complete",
});

export const CUSTODY_LEDGER_SAVE_INTENT = "SAVE BOUNDED COMPARISON";

export const custodyLedgerSaveOwnershipMessages = Object.freeze({
  save_eligibility: Object.freeze({
    owner: "SYSTEM // EXPEDITION SESSION",
    text: "Finalized expedition evidence is being checked locally. No request has been sent.",
  }),
  bounded_review: Object.freeze({
    owner: "PILOT // FLIGHT RECORDER",
    text: "Review my bounded comparison and the next survey marker before saving them together.",
  }),
  save_confirmation: Object.freeze({
    owner: "PILOT // FLIGHT RECORDER",
    text: "Save only the bounded expedition comparison and survey marker. This grants no access or authority.",
  }),
  save_failure: Object.freeze({
    owner: "SYSTEM // EXPEDITION STATE",
    text: "Local save did not complete. No comparison, marker, or checkpoint was retained.",
  }),
  sanitation_downgrade: Object.freeze({
    owner: "SYSTEM // EXPEDITION STATE",
    text: "Saved comparison could not be verified. Private work and all comparison markers were cleared.",
  }),
});

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

export const custodyLedgerTransferReferenceSource = `comparison = {
    "condition": "unresolved_interval",
    "source": "deidentified_sensor_log",
    "identity": None,
    "access_requested": False,
}

comparison["classification"] = "unknown"
comparison["owner"] = "human_reviewer"
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

export const custodyLedgerExplanationDimensions = Object.freeze([
  "named_key_update",
  "none_means_missing_or_unknown_identity",
  "false_means_access_request_did_not_occur",
]);

export const custodyLedgerExplanationAnswers = Object.freeze({
  named_key_update: "a key names one field whose value can be updated without replacing the dictionary",
  none_means_missing_or_unknown_identity: "None means the identity value is missing or unknown",
  false_means_access_request_did_not_occur: "False means an access request explicitly did not occur",
});

export const custodyLedgerRAIPrimaryScenarioIds = Object.freeze(["P01", "P02", "P03"]);
export const custodyLedgerRAITransferScenarioIds = Object.freeze(["T01", "T02", "T03"]);
export const custodyLedgerRAIDimensions = Object.freeze(["principle", "mitigation", "owner"]);
export const custodyLedgerRAIPrimaryScenarios = Object.freeze(responsibleAIPrimaryScenarios
  .filter((scenario) => custodyLedgerRAIPrimaryScenarioIds.includes(scenario.id))
  .map((scenario) => Object.freeze({
    id: scenario.id,
    prompt: scenario.prompt,
    principleChoices: [...responsibleAIPrinciples],
    mitigationChoices: [...scenario.mitigation_choices],
    ownerChoices: [...scenario.owner_choices],
  })));

export const custodyLedgerRAITransferScenarios = Object.freeze([
  Object.freeze({
    id: "T01",
    prompt: "A de-identified sensor packet contains a measurement, a later annotation, and an unresolved interval.",
  }),
  Object.freeze({
    id: "T02",
    prompt: "A private operator field is closed and unnecessary for the maintenance comparison.",
  }),
  Object.freeze({
    id: "T03",
    prompt: "An automated label could affect later decisions but has no named reviewer or correction path.",
  }),
].map((scenario) => Object.freeze({
  ...scenario,
  dimensions: [...custodyLedgerRAIDimensions],
})));

const custodyLedgerRAITransferAnswers = Object.freeze({
  T01: Object.freeze({
    principle: "transparency",
    mitigation: "preserve_provenance_missingness_and_limits",
    owner: "human_evidence_reviewer",
  }),
  T02: Object.freeze({
    principle: "privacy_and_security",
    mitigation: "do_not_open_or_retain_unneeded_private_data",
    owner: "human_privacy_reviewer",
  }),
  T03: Object.freeze({
    principle: "accountability",
    mitigation: "assign_review_audit_and_correction_responsibility",
    owner: "human_decision_owner",
  }),
});

export const custodyLedgerRAIExplanationDimensions = Object.freeze([
  "application_label_is_human_owned_and_provisional",
  "not_builder_intent_identity_or_native_fact",
  "no_access_disclosure_request_or_external_action_authority",
]);

export const custodyLedgerRAIExplanationAnswers = Object.freeze({
  application_label_is_human_owned_and_provisional: "the application label is human-owned and provisional",
  not_builder_intent_identity_or_native_fact: "the label is not Builder intent, identity, or native fact",
  no_access_disclosure_request_or_external_action_authority: "the label grants no access, disclosure, request, or external-action authority",
});

export const CUSTODY_LEDGER_RAI_CONCLUSION = "My application label is a human interpretation, not their fact or permission to act.";

const custodyLedgerRAIMisconceptionTags = Object.freeze({
  P01: "fairness-means-identical-outcomes",
  P02: "reliability-is-one-successful-test",
  P03: "privacy-is-only-secrecy",
});

export const custodyLedgerRAIRemediationMap = Object.freeze({
  P01: Object.freeze({
    principle: "Review fairness as measured disparity in comparable outcomes; contrast it with inclusiveness as equivalent participation and access.",
    mitigation: "Choose a human-run safeguard whose group outcome can be measured, compared, and corrected.",
    owner: "Name a human or organizational role able to monitor the hiring system, receive appeals, and correct disparity.",
  }),
  P02: Object.freeze({
    principle: "Review reliability and safety as tested behavior under expected and edge conditions; contrast it with transparency about system limits.",
    mitigation: "Choose a testable safeguard that exercises missing-unit inputs and fails safely to qualified human review.",
    owner: "Name a human or organizational role accountable for clinical product testing, escalation, and correction.",
  }),
  P03: Object.freeze({
    principle: "Review privacy and security as authorized, minimized, isolated data handling; contrast it with transparency about how a system is used.",
    mitigation: "Choose a testable safeguard for authorization, minimization, and cross-customer isolation.",
    owner: "Name a human or organizational role accountable for service security, data handling, review, and remedy.",
  }),
});

export const custodyLedgerRAITransferRemediationMap = Object.freeze(Object.fromEntries(
  custodyLedgerRAITransferScenarioIds.map((scenarioId) => [scenarioId, Object.freeze({
    principle: "Compare the human application practice in this case with the nearest responsible-AI principle; do not infer a city or Builder value.",
    mitigation: "Choose a testable human safeguard that preserves the stated boundary without performing an external action.",
    owner: "Name an accountable human or organizational review role, not a model, platform, city, Builder surface, or device.",
  })]),
));

export const custodyLedgerRAIGuidedCase = Object.freeze({
  id: "RP002-RAI-GUIDE-01",
  prompt: "An expedition practice dashboard reports uneven outcomes and has no named reviewer. Choose a primary principle, a testable human-run safeguard, and an accountable human or organizational role.",
  dimensions: [...custodyLedgerRAIDimensions],
});

export const custodyLedgerRAITransferGuidedCase = Object.freeze({
  id: "RP002-RAI-TRANSFER-GUIDE-01",
  prompt: "A neutral course record has a provisional label, a stated evidence limit, and no named reviewer. Choose a principle, a testable human safeguard, and an accountable human or organizational role.",
  dimensions: [...custodyLedgerRAIDimensions],
});

function blankPythonChecks() {
  return Object.fromEntries(custodyLedgerPythonChecks.map((check) => [check, false]));
}

function workImage(sourceFields = custodyLedgerSourceFields) {
  const transfer = sourceFields.condition === custodyLedgerTransferSourceFields.condition;
  return {
    label: transfer ? CUSTODY_LEDGER_FRESH_PRACTICE_LABEL : CUSTODY_LEDGER_UNFINISHED_WORK_LABEL,
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
  const completeStatus = form === "primary" ? "primary_complete" : "transfer_complete";
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
    masteryStatus: value.masteryStatus === completeStatus
      ? completeStatus
      : "in_progress",
  };
}

function sanitizedExplanationEvidence(value) {
  if (!value || value.form !== "explanation" || value.packetId !== CUSTODY_LEDGER_PACKET_ID) return null;
  return {
    packetId: CUSTODY_LEDGER_PACKET_ID,
    mappingId: "RP002-A3-CIVIC-COMPARISON",
    form: "explanation",
    skillId: "PY-009",
    dimensionCorrectness: Object.fromEntries(custodyLedgerExplanationDimensions.map((dimension) => [
      dimension,
      value?.dimensionCorrectness?.[dimension] === true,
    ])),
    attemptCount: sanitizeAttemptCount(value.attemptCount),
    hintLevel: Number.isSafeInteger(value.hintLevel) && value.hintLevel >= 0
      ? Math.min(value.hintLevel, 9)
      : 0,
    confidence: ["low", "medium", "high"].includes(value.confidence) ? value.confidence : null,
    misconceptionTags: Array.isArray(value.misconceptionTags)
      ? value.misconceptionTags.filter((tag) => custodyLedgerExplanationDimensions.includes(tag)).slice(0, 3)
      : [],
    masteryStatus: value.masteryStatus === "explanation_complete" ? "explanation_complete" : "in_progress",
  };
}

function evidenceIsComplete(value, form) {
  const safe = sanitizedPythonEvidence(value, form);
  const completeStatus = form === "primary" ? "primary_complete" : "transfer_complete";
  return safe?.masteryStatus === completeStatus
    && custodyLedgerPythonChecks.every((check) => safe.dimensionCorrectness[check] === true);
}

function explanationEvidenceIsComplete(value) {
  const safe = sanitizedExplanationEvidence(value);
  return safe?.masteryStatus === "explanation_complete"
    && custodyLedgerExplanationDimensions.every((dimension) => safe.dimensionCorrectness[dimension] === true);
}

function blankRAIChecks() {
  return Object.fromEntries(custodyLedgerRAIPrimaryScenarioIds.map((scenarioId) => [
    scenarioId,
    Object.fromEntries(custodyLedgerRAIDimensions.map((dimension) => [dimension, false])),
  ]));
}

function sanitizedRAIEvidence(value) {
  if (!value || value.packetId !== CUSTODY_LEDGER_PACKET_ID || value.form !== "primary") return null;
  const dimensionCorrectness = Object.fromEntries(custodyLedgerRAIPrimaryScenarioIds.map((scenarioId) => [
    scenarioId,
    Object.fromEntries(custodyLedgerRAIDimensions.map((dimension) => [
      dimension,
      value?.dimensionCorrectness?.[scenarioId]?.[dimension] === true,
    ])),
  ]));
  const allCorrect = custodyLedgerRAIPrimaryScenarioIds.every((scenarioId) => custodyLedgerRAIDimensions
    .every((dimension) => dimensionCorrectness[scenarioId][dimension] === true));
  return {
    packetId: CUSTODY_LEDGER_PACKET_ID,
    mappingId: "RP002-RAI-01",
    exerciseId: responsibleAIExercise.exercise_id,
    form: "primary",
    dimensionCorrectness,
    attemptCount: sanitizeAttemptCount(value.attemptCount),
    hintLevel: Number.isSafeInteger(value.hintLevel) && value.hintLevel >= 0
      ? Math.min(value.hintLevel, 9)
      : 0,
    confidence: ["low", "medium", "high"].includes(value.confidence) ? value.confidence : null,
    misconceptionTags: Array.isArray(value.misconceptionTags)
      ? [...new Set(value.misconceptionTags.filter((tag) => Object.values(custodyLedgerRAIMisconceptionTags).includes(tag)))].slice(0, 3)
      : [],
    masteryStatus: allCorrect && value.masteryStatus === "primary_complete"
      ? "primary_complete"
      : "remediation_required",
  };
}

function raiEvidenceIsComplete(value) {
  const safe = sanitizedRAIEvidence(value);
  return safe?.masteryStatus === "primary_complete"
    && custodyLedgerRAIPrimaryScenarioIds.every((scenarioId) => custodyLedgerRAIDimensions
      .every((dimension) => safe.dimensionCorrectness[scenarioId][dimension] === true));
}

function firstFailedRAI(value) {
  const safe = sanitizedRAIEvidence(value);
  for (const scenarioId of custodyLedgerRAIPrimaryScenarioIds) {
    for (const dimension of custodyLedgerRAIDimensions) {
      if (safe?.dimensionCorrectness?.[scenarioId]?.[dimension] !== true) return { scenarioId, dimension };
    }
  }
  return { scenarioId: custodyLedgerRAIPrimaryScenarioIds[0], dimension: custodyLedgerRAIDimensions[0] };
}

function sanitizeRAIResponse(scenarioId, response) {
  const scenario = responsibleAIPrimaryScenarios.find((item) => item.id === scenarioId);
  if (!scenario) return Object.fromEntries(custodyLedgerRAIDimensions.map((dimension) => [dimension, ""]));
  const allowed = {
    principle: responsibleAIPrinciples,
    mitigation: scenario.mitigation_choices,
    owner: scenario.owner_choices,
  };
  return Object.fromEntries(custodyLedgerRAIDimensions.map((dimension) => [
    dimension,
    allowed[dimension].includes(response?.[dimension]) ? response[dimension] : "",
  ]));
}

function sanitizeRAIWorkingResponses(value, scenarioIndex) {
  const limit = Number.isInteger(scenarioIndex) ? Math.max(0, Math.min(scenarioIndex, 2)) : 0;
  return Object.fromEntries(custodyLedgerRAIPrimaryScenarioIds.slice(0, limit)
    .filter((scenarioId) => Object.hasOwn(value ?? {}, scenarioId))
    .map((scenarioId) => [scenarioId, sanitizeRAIResponse(scenarioId, value[scenarioId])]));
}

const custodyLedgerRAITransferMisconceptionTags = Object.freeze({
  T01: "disclosure_without_limits_is_transparency",
  T02: "closed_data_is_permission_to_infer",
  T03: "system_or_platform_is_accountable_owner",
});

function blankRAITransferChecks() {
  return Object.fromEntries(custodyLedgerRAITransferScenarioIds.map((scenarioId) => [
    scenarioId,
    Object.fromEntries(custodyLedgerRAIDimensions.map((dimension) => [dimension, false])),
  ]));
}

function sanitizedRAITransferEvidence(value) {
  if (!value || value.packetId !== CUSTODY_LEDGER_PACKET_ID || value.form !== "transfer") return null;
  const dimensionCorrectness = Object.fromEntries(custodyLedgerRAITransferScenarioIds.map((scenarioId) => [
    scenarioId,
    Object.fromEntries(custodyLedgerRAIDimensions.map((dimension) => [
      dimension,
      value?.dimensionCorrectness?.[scenarioId]?.[dimension] === true,
    ])),
  ]));
  const allCorrect = custodyLedgerRAITransferScenarioIds.every((scenarioId) => custodyLedgerRAIDimensions
    .every((dimension) => dimensionCorrectness[scenarioId][dimension] === true));
  return {
    packetId: CUSTODY_LEDGER_PACKET_ID,
    mappingId: "RP002-RAI-01",
    exerciseId: responsibleAIExercise.exercise_id,
    form: "transfer",
    dimensionCorrectness,
    attemptCount: sanitizeAttemptCount(value.attemptCount),
    hintLevel: Number.isSafeInteger(value.hintLevel) && value.hintLevel >= 0
      ? Math.min(value.hintLevel, 9)
      : 0,
    confidence: ["low", "medium", "high"].includes(value.confidence) ? value.confidence : null,
    misconceptionTags: Array.isArray(value.misconceptionTags)
      ? [...new Set(value.misconceptionTags.filter((tag) => Object.values(custodyLedgerRAITransferMisconceptionTags).includes(tag)))].slice(0, 3)
      : [],
    masteryStatus: allCorrect && value.masteryStatus === "transfer_complete"
      ? "transfer_complete"
      : "remediation_required",
  };
}

function raiTransferEvidenceIsComplete(value) {
  const safe = sanitizedRAITransferEvidence(value);
  return safe?.masteryStatus === "transfer_complete"
    && custodyLedgerRAITransferScenarioIds.every((scenarioId) => custodyLedgerRAIDimensions
      .every((dimension) => safe.dimensionCorrectness[scenarioId][dimension] === true));
}

function firstFailedRAITransfer(value) {
  const safe = sanitizedRAITransferEvidence(value);
  for (const scenarioId of custodyLedgerRAITransferScenarioIds) {
    for (const dimension of custodyLedgerRAIDimensions) {
      if (safe?.dimensionCorrectness?.[scenarioId]?.[dimension] !== true) return { scenarioId, dimension };
    }
  }
  return { scenarioId: custodyLedgerRAITransferScenarioIds[0], dimension: custodyLedgerRAIDimensions[0] };
}

function sanitizeRAITransferResponse(response) {
  return Object.fromEntries(custodyLedgerRAIDimensions.map((dimension) => {
    const value = typeof response?.[dimension] === "string" ? response[dimension].trim().slice(0, 160) : "";
    return [dimension, dimension === "principle" && !responsibleAIPrinciples.includes(value) ? "" : value];
  }));
}

function sanitizeRAITransferWorkingResponses(value, scenarioIndex) {
  const limit = Number.isInteger(scenarioIndex) ? Math.max(0, Math.min(scenarioIndex, 2)) : 0;
  return Object.fromEntries(custodyLedgerRAITransferScenarioIds.slice(0, limit)
    .filter((scenarioId) => Object.hasOwn(value ?? {}, scenarioId))
    .map((scenarioId) => [scenarioId, sanitizeRAITransferResponse(value[scenarioId])]));
}

function sanitizedRAIExplanationEvidence(value) {
  if (!value || value.packetId !== CUSTODY_LEDGER_PACKET_ID || value.form !== "explanation") return null;
  const dimensionCorrectness = Object.fromEntries(custodyLedgerRAIExplanationDimensions.map((dimension) => [
    dimension,
    value?.dimensionCorrectness?.[dimension] === true,
  ]));
  const allCorrect = custodyLedgerRAIExplanationDimensions.every((dimension) => dimensionCorrectness[dimension] === true);
  return {
    packetId: CUSTODY_LEDGER_PACKET_ID,
    mappingId: "RP002-RAI-01",
    exerciseId: responsibleAIExercise.exercise_id,
    form: "explanation",
    dimensionCorrectness,
    attemptCount: sanitizeAttemptCount(value.attemptCount),
    hintLevel: Number.isSafeInteger(value.hintLevel) && value.hintLevel >= 0
      ? Math.min(value.hintLevel, 9)
      : 0,
    confidence: ["low", "medium", "high"].includes(value.confidence) ? value.confidence : null,
    misconceptionTags: Array.isArray(value.misconceptionTags)
      ? [...new Set(value.misconceptionTags.filter((tag) => custodyLedgerRAIExplanationDimensions.includes(tag)))].slice(0, 3)
      : [],
    masteryStatus: allCorrect && value.masteryStatus === "explanation_complete"
      ? "explanation_complete"
      : "remediation_required",
  };
}

function raiExplanationEvidenceIsComplete(value) {
  const safe = sanitizedRAIExplanationEvidence(value);
  return safe?.masteryStatus === "explanation_complete"
    && custodyLedgerRAIExplanationDimensions.every((dimension) => safe.dimensionCorrectness[dimension] === true);
}

function firstFailedRAIExplanation(value) {
  const safe = sanitizedRAIExplanationEvidence(value);
  return custodyLedgerRAIExplanationDimensions.find(
    (dimension) => safe?.dimensionCorrectness?.[dimension] !== true,
  ) ?? custodyLedgerRAIExplanationDimensions[0];
}

export function evaluateCustodyLedgerRAITransfer(responses) {
  const dimensionCorrectness = Object.fromEntries(custodyLedgerRAITransferScenarioIds.map((scenarioId) => [
    scenarioId,
    Object.fromEntries(custodyLedgerRAIDimensions.map((dimension) => [
      dimension,
      responses?.[scenarioId]?.[dimension] === custodyLedgerRAITransferAnswers[scenarioId][dimension],
    ])),
  ]));
  const score = custodyLedgerRAITransferScenarioIds.reduce((total, scenarioId) => total
    + custodyLedgerRAIDimensions.filter((dimension) => dimensionCorrectness[scenarioId][dimension]).length, 0);
  return { dimensionCorrectness, score, passed: score === 9 };
}

export function evaluateCustodyLedgerRAIExplanation(selections) {
  const dimensionCorrectness = Object.fromEntries(custodyLedgerRAIExplanationDimensions.map((dimension) => [
    dimension,
    selections?.[dimension] === custodyLedgerRAIExplanationAnswers[dimension],
  ]));
  const firstFailedDimension = custodyLedgerRAIExplanationDimensions.find(
    (dimension) => !dimensionCorrectness[dimension],
  ) ?? null;
  const score = custodyLedgerRAIExplanationDimensions.filter((dimension) => dimensionCorrectness[dimension]).length;
  return { dimensionCorrectness, firstFailedDimension, score, passed: score === 3 };
}

/**
 * Statically evaluates the bounded course-authored Python fragment. It never
 * executes learner code, performs I/O, or treats displayed output as evidence.
 */
function evaluateCustodyLedgerPythonSource(source, expectedSourceFields, expectedOwner) {
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
  checks.condition_and_source_preserved = mappingEntries.condition === expectedSourceFields.condition
    && mappingEntries.source === expectedSourceFields.source
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
    && updates.some(({ key, value } = {}) => key === "owner" && value === expectedOwner)
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


export function evaluateCustodyLedgerPrimarySource(source) {
  return evaluateCustodyLedgerPythonSource(source, custodyLedgerSourceFields, "human_expedition");
}

export function evaluateCustodyLedgerTransferSource(source) {
  return evaluateCustodyLedgerPythonSource(source, custodyLedgerTransferSourceFields, "human_reviewer");
}

export function evaluateCustodyLedgerExplanation(selections) {
  const dimensionCorrectness = Object.fromEntries(custodyLedgerExplanationDimensions.map((dimension) => [
    dimension,
    selections?.[dimension] === custodyLedgerExplanationAnswers[dimension],
  ]));
  const firstFailedDimension = custodyLedgerExplanationDimensions.find(
    (dimension) => !dimensionCorrectness[dimension],
  ) ?? null;
  const score = custodyLedgerExplanationDimensions.filter((dimension) => dimensionCorrectness[dimension]).length;
  return {
    dimensionCorrectness,
    firstFailedDimension,
    score,
    passed: score === custodyLedgerExplanationDimensions.length,
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
  return custodyLedgerOwnershipMessages[messageKey]
    ?? custodyLedgerPythonOwnershipMessages[messageKey]
    ?? custodyLedgerOwnershipMessages.prerequisites_incomplete;
}

function hasCustodyLedgerOwnershipMessage(messageKey) {
  return Object.hasOwn(custodyLedgerOwnershipMessages, messageKey)
    || Object.hasOwn(custodyLedgerPythonOwnershipMessages, messageKey);
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

export function createCustodyLedgerScaffoldFromVerifiedRouteBoundary(predecessorValue) {
  const exactKeys = Object.keys(predecessorValue ?? {}).sort().join("|")
    === "cityThresholdAnchorRecorded|civicDistrictRouteAvailable|verificationStatus";
  const predecessorReady = exactKeys
    && predecessorValue.verificationStatus === "verified"
    && predecessorValue.cityThresholdAnchorRecorded === true
    && predecessorValue.civicDistrictRouteAvailable === true;
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
  const primaryComplete = evidenceIsComplete(state?.pythonEvidence, "primary");
  const resultReady = state?.phase === "python_primary_result"
    && state?.prerequisiteStatus === "complete"
    && state?.pythonForm === "primary_result"
    && primaryComplete;
  const transferReady = state?.phase === "python_transfer"
    && state?.prerequisiteStatus === "complete"
    && state?.pythonForm === "transfer"
    && primaryComplete;
  const transferComplete = evidenceIsComplete(state?.pythonTransferEvidence, "transfer");
  const explanationReady = state?.phase === "python_explanation"
    && state?.prerequisiteStatus === "complete"
    && state?.pythonForm === "explanation"
    && primaryComplete
    && transferComplete;
  const explanationComplete = explanationEvidenceIsComplete(state?.pythonExplanationEvidence);
  const raiPhase = [
    "rai_primary", "rai_feedback", "rai_guided", "rai_transfer", "rai_transfer_feedback",
    "rai_transfer_guided", "rai_explanation", "rai_explanation_feedback", "rai_complete",
  ].includes(state?.phase);
  if (raiPhase && primaryComplete && transferComplete && explanationComplete) {
    const primaryEvidence = sanitizedPythonEvidence(state.pythonEvidence, "primary");
    const transferEvidence = sanitizedPythonEvidence(state.pythonTransferEvidence, "transfer");
    const explanationEvidence = sanitizedExplanationEvidence(state.pythonExplanationEvidence);
    const raiEvidence = sanitizedRAIEvidence(state.raiEvidence);
    if (state.phase === "rai_feedback" && raiEvidence && !raiEvidenceIsComplete(raiEvidence)) {
      return raiFeedbackState(primaryEvidence, transferEvidence, explanationEvidence, raiEvidence);
    }
    if (state.phase === "rai_guided" && raiEvidence && !raiEvidenceIsComplete(raiEvidence)) {
      return raiGuidedState(primaryEvidence, transferEvidence, explanationEvidence, raiEvidence);
    }
    if (!raiEvidenceIsComplete(raiEvidence)) {
      const scenarioIndex = Number.isInteger(state.raiScenarioIndex)
        ? Math.max(0, Math.min(state.raiScenarioIndex, 2))
        : firstFailedRAI(raiEvidence).scenarioId === "P02" ? 1
          : firstFailedRAI(raiEvidence).scenarioId === "P03" ? 2 : 0;
      return raiPrimaryState(
        primaryEvidence,
        transferEvidence,
        explanationEvidence,
        raiEvidence,
        scenarioIndex,
        sanitizeRAIWorkingResponses(state.raiWorkingResponses, scenarioIndex),
        state.focusIntent,
      );
    }
    const raiTransferEvidence = sanitizedRAITransferEvidence(state.raiTransferEvidence);
    const raiExplanationEvidence = sanitizedRAIExplanationEvidence(state.raiExplanationEvidence);
    if (raiTransferEvidenceIsComplete(raiTransferEvidence)) {
      if (raiExplanationEvidenceIsComplete(raiExplanationEvidence)) {
        return raiCompleteState(primaryEvidence, transferEvidence, explanationEvidence, raiEvidence, raiTransferEvidence, raiExplanationEvidence);
      }
      if (state.phase === "rai_explanation_feedback" && raiExplanationEvidence) {
        return raiExplanationFeedbackState(primaryEvidence, transferEvidence, explanationEvidence, raiEvidence, raiTransferEvidence, raiExplanationEvidence);
      }
      return raiExplanationState(primaryEvidence, transferEvidence, explanationEvidence, raiEvidence, raiTransferEvidence, raiExplanationEvidence);
    }
    if (state.phase === "rai_transfer_feedback" && raiTransferEvidence) {
      return raiTransferFeedbackState(primaryEvidence, transferEvidence, explanationEvidence, raiEvidence, raiTransferEvidence);
    }
    if (state.phase === "rai_transfer_guided" && raiTransferEvidence) {
      return raiTransferGuidedState(primaryEvidence, transferEvidence, explanationEvidence, raiEvidence, raiTransferEvidence, state.guidedPractice?.status);
    }
    const transferScenarioIndex = Number.isInteger(state.raiTransferScenarioIndex)
      ? Math.max(0, Math.min(state.raiTransferScenarioIndex, 2))
      : custodyLedgerRAITransferScenarioIds.indexOf(firstFailedRAITransfer(raiTransferEvidence).scenarioId);
    return raiTransferState(
      primaryEvidence,
      transferEvidence,
      explanationEvidence,
      raiEvidence,
      raiTransferEvidence,
      transferScenarioIndex >= 0 ? transferScenarioIndex : 0,
      sanitizeRAITransferWorkingResponses(state.raiTransferResponses, transferScenarioIndex),
      state.focusIntent,
    );
  }
  const conclusionReady = state?.phase === "python_complete"
    && state?.prerequisiteStatus === "complete"
    && state?.pythonForm === "complete"
    && primaryComplete
    && transferComplete
    && explanationComplete;
  const phase = conclusionReady ? "python_complete"
      : explanationReady ? "python_explanation"
        : transferReady ? "python_transfer"
          : resultReady ? "python_primary_result"
    : primaryReady ? "python_primary"
    : state?.phase === "prerequisite_check" ? "prerequisite_check"
      : "predecessor_blocked";
  const activeMessageKey = hasCustodyLedgerOwnershipMessage(state?.activeMessageKey)
    ? state.activeMessageKey
    : "prerequisites_incomplete";
  return {
    packetId: CUSTODY_LEDGER_PACKET_ID,
    boardId: CUSTODY_LEDGER_BOARD_ID,
    phase,
    activeMessageKey,
    ...((primaryReady || transferReady || phase === "prerequisite_check" || phase === "predecessor_blocked") ? {
      sourceFields: { ...(transferReady ? custodyLedgerTransferSourceFields : custodyLedgerSourceFields) },
      expeditionFields: {
        classification: typeof state?.expeditionFields?.classification === "string"
          ? state.expeditionFields.classification.slice(0, 40)
          : "",
        owner: typeof state?.expeditionFields?.owner === "string"
          ? state.expeditionFields.owner.slice(0, 40)
          : "",
      },
    } : {}),
    scoringEnabled: primaryReady || transferReady || explanationReady,
    campaignCommitEnabled: false,
    continuation: CITY_THRESHOLD_CONTINUATION,
    cityStateDelta: null,
    ...((primaryReady || resultReady || transferReady || explanationReady || conclusionReady) ? {
      prerequisiteStatus: "complete",
      ...({
        pythonForm: conclusionReady ? "complete"
          : explanationReady ? "explanation"
            : transferReady ? "transfer"
              : resultReady ? "primary_result"
                : "primary",
      }),
      ...(sanitizedPythonEvidence(state?.pythonEvidence, "primary") ? {
        pythonEvidence: sanitizedPythonEvidence(state.pythonEvidence, "primary"),
      } : {}),
      ...(sanitizedPythonEvidence(state?.pythonTransferEvidence, "transfer") ? {
        pythonTransferEvidence: sanitizedPythonEvidence(state.pythonTransferEvidence, "transfer"),
      } : {}),
      ...(sanitizedExplanationEvidence(state?.pythonExplanationEvidence) ? {
        pythonExplanationEvidence: sanitizedExplanationEvidence(state.pythonExplanationEvidence),
      } : {}),
      ...((primaryReady || transferReady) ? {
        pythonChecks: Object.fromEntries(custodyLedgerPythonChecks.map((check) => [
          check,
          state?.pythonChecks?.[check] === true,
        ])),
        unfinishedWorkImage: workImage(transferReady ? custodyLedgerTransferSourceFields : custodyLedgerSourceFields),
      } : {}),
      ...(resultReady ? {
        primaryStatus: "complete",
        causalResult: {
          owner: custodyLedgerCausalResult.owner,
          text: custodyLedgerCausalResult.text,
          record: { ...custodyLedgerCausalResult.record },
        },
      } : {}),
      ...(transferReady || explanationReady || conclusionReady ? { primaryStatus: "complete" } : {}),
      ...(explanationReady ? {
        transferStatus: "complete",
        explanationSelections: Object.fromEntries(custodyLedgerExplanationDimensions.map((dimension) => [dimension, ""])),
        firstFailedDimension: custodyLedgerExplanationDimensions.includes(state?.firstFailedDimension)
          ? state.firstFailedDimension
          : null,
      } : {}),
      ...(conclusionReady ? {
        transferStatus: "complete",
        pythonStatus: "complete",
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
    phase: "python_primary_result",
    activeMessageKey: "primary_result",
    scoringEnabled: false,
    campaignCommitEnabled: false,
    continuation: CITY_THRESHOLD_CONTINUATION,
    cityStateDelta: null,
    prerequisiteStatus: "complete",
    primaryStatus: "complete",
    pythonForm: "primary_result",
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

function transferState(primaryEvidence, transferEvidence = null) {
  return {
    packetId: CUSTODY_LEDGER_PACKET_ID,
    boardId: CUSTODY_LEDGER_BOARD_ID,
    phase: "python_transfer",
    activeMessageKey: "fresh_practice",
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
    pythonEvidence: sanitizedPythonEvidence(primaryEvidence, "primary"),
    ...(sanitizedPythonEvidence(transferEvidence, "transfer") ? {
      pythonTransferEvidence: sanitizedPythonEvidence(transferEvidence, "transfer"),
    } : {}),
  };
}

function explanationState(primaryEvidence, transferEvidence, explanationEvidence = null, firstFailedDimension = null) {
  return {
    packetId: CUSTODY_LEDGER_PACKET_ID,
    boardId: CUSTODY_LEDGER_BOARD_ID,
    phase: "python_explanation",
    activeMessageKey: "explanation_prompt",
    scoringEnabled: true,
    campaignCommitEnabled: false,
    continuation: CITY_THRESHOLD_CONTINUATION,
    cityStateDelta: null,
    prerequisiteStatus: "complete",
    primaryStatus: "complete",
    transferStatus: "complete",
    pythonForm: "explanation",
    explanationSelections: Object.fromEntries(custodyLedgerExplanationDimensions.map((dimension) => [dimension, ""])),
    firstFailedDimension: custodyLedgerExplanationDimensions.includes(firstFailedDimension)
      ? firstFailedDimension
      : null,
    pythonEvidence: sanitizedPythonEvidence(primaryEvidence, "primary"),
    pythonTransferEvidence: sanitizedPythonEvidence(transferEvidence, "transfer"),
    ...(sanitizedExplanationEvidence(explanationEvidence) ? {
      pythonExplanationEvidence: sanitizedExplanationEvidence(explanationEvidence),
    } : {}),
  };
}

function raiBaseState(primaryEvidence, transferEvidence, explanationEvidence) {
  return {
    packetId: CUSTODY_LEDGER_PACKET_ID,
    boardId: CUSTODY_LEDGER_BOARD_ID,
    campaignCommitEnabled: false,
    continuation: CITY_THRESHOLD_CONTINUATION,
    cityStateDelta: null,
    prerequisiteStatus: "complete",
    primaryStatus: "complete",
    transferStatus: "complete",
    pythonStatus: "complete",
    pythonEvidence: sanitizedPythonEvidence(primaryEvidence, "primary"),
    pythonTransferEvidence: sanitizedPythonEvidence(transferEvidence, "transfer"),
    pythonExplanationEvidence: sanitizedExplanationEvidence(explanationEvidence),
  };
}

function raiPrimaryState(primaryEvidence, transferEvidence, explanationEvidence, raiEvidence = null, scenarioIndex = 0, workingResponses = {}, focusIntent = null) {
  const safeEvidence = sanitizedRAIEvidence(raiEvidence);
  const safeIndex = Number.isInteger(scenarioIndex) ? Math.max(0, Math.min(scenarioIndex, 2)) : 0;
  const fallbackFocus = firstFailedRAI(safeEvidence);
  const safeFocus = custodyLedgerRAIPrimaryScenarioIds.includes(focusIntent?.scenarioId)
    && custodyLedgerRAIDimensions.includes(focusIntent?.dimension)
    ? { scenarioId: focusIntent.scenarioId, dimension: focusIntent.dimension }
    : { scenarioId: custodyLedgerRAIPrimaryScenarioIds[safeIndex] ?? fallbackFocus.scenarioId, dimension: fallbackFocus.dimension };
  return {
    ...raiBaseState(primaryEvidence, transferEvidence, explanationEvidence),
    phase: "rai_primary",
    activeMessageKey: "rai_primary",
    scoringEnabled: true,
    raiForm: "primary",
    raiScoringImplemented: true,
    raiScenarioIndex: safeIndex,
    raiScenarioId: custodyLedgerRAIPrimaryScenarioIds[safeIndex],
    raiWorkingResponses: sanitizeRAIWorkingResponses(workingResponses, safeIndex),
    raiChecks: safeEvidence?.dimensionCorrectness ?? blankRAIChecks(),
    focusIntent: safeFocus,
    ...(safeEvidence ? { raiEvidence: safeEvidence } : {}),
  };
}

function raiFeedbackState(primaryEvidence, transferEvidence, explanationEvidence, raiEvidence) {
  const safeEvidence = sanitizedRAIEvidence(raiEvidence);
  const failed = custodyLedgerRAIPrimaryScenarioIds.flatMap((scenarioId) => custodyLedgerRAIDimensions
    .filter((dimension) => safeEvidence?.dimensionCorrectness?.[scenarioId]?.[dimension] !== true)
    .map((dimension) => ({
      scenarioId,
      dimension,
      owner: "901 TEACHER // FEEDBACK",
      text: custodyLedgerRAIRemediationMap[scenarioId][dimension],
    })));
  const focusIntent = failed[0]
    ? { scenarioId: failed[0].scenarioId, dimension: failed[0].dimension }
    : firstFailedRAI(safeEvidence);
  return {
    ...raiBaseState(primaryEvidence, transferEvidence, explanationEvidence),
    phase: "rai_feedback",
    activeMessageKey: "rai_feedback",
    scoringEnabled: false,
    raiForm: "primary",
    raiScoringImplemented: true,
    raiEvidence: safeEvidence,
    raiChecks: safeEvidence?.dimensionCorrectness ?? blankRAIChecks(),
    raiFeedback: failed,
    focusIntent,
  };
}

function raiGuidedState(primaryEvidence, transferEvidence, explanationEvidence, raiEvidence, guidedStatus = "blank") {
  const safeEvidence = sanitizedRAIEvidence(raiEvidence);
  return {
    ...raiBaseState(primaryEvidence, transferEvidence, explanationEvidence),
    phase: "rai_guided",
    activeMessageKey: "rai_guided",
    scoringEnabled: false,
    raiForm: "primary",
    raiScoringImplemented: true,
    raiEvidence: safeEvidence,
    raiChecks: safeEvidence?.dimensionCorrectness ?? blankRAIChecks(),
    guidedPractice: {
      ...custodyLedgerRAIGuidedCase,
      response: Object.fromEntries(custodyLedgerRAIDimensions.map((dimension) => [dimension, ""])),
      status: guidedStatus === "incomplete" ? "incomplete" : "blank",
    },
    focusIntent: { group: "guided_practice", dimension: "principle" },
  };
}

function raiTransferState(primaryEvidence, transferEvidence, explanationEvidence, raiEvidence, raiTransferEvidence = null, scenarioIndex = 0, workingResponses = {}, focusIntent = null) {
  const safeEvidence = sanitizedRAIEvidence(raiEvidence);
  if (!raiEvidenceIsComplete(safeEvidence)) {
    return raiPrimaryState(primaryEvidence, transferEvidence, explanationEvidence, safeEvidence);
  }
  const safeTransferEvidence = sanitizedRAITransferEvidence(raiTransferEvidence);
  const safeIndex = Number.isInteger(scenarioIndex) ? Math.max(0, Math.min(scenarioIndex, 2)) : 0;
  const fallbackFocus = firstFailedRAITransfer(safeTransferEvidence);
  const safeFocus = custodyLedgerRAITransferScenarioIds.includes(focusIntent?.scenarioId)
    && custodyLedgerRAIDimensions.includes(focusIntent?.dimension)
    ? { scenarioId: focusIntent.scenarioId, dimension: focusIntent.dimension }
    : { scenarioId: custodyLedgerRAITransferScenarioIds[safeIndex] ?? fallbackFocus.scenarioId, dimension: fallbackFocus.dimension };
  return {
    ...raiBaseState(primaryEvidence, transferEvidence, explanationEvidence),
    phase: "rai_transfer",
    activeMessageKey: "rai_transfer",
    scoringEnabled: true,
    raiForm: "transfer",
    raiScoringImplemented: true,
    raiTransferInitialized: true,
    raiTransferEvaluatorImplemented: true,
    raiChecks: safeEvidence.dimensionCorrectness,
    raiEvidence: safeEvidence,
    raiTransferScenarioIndex: safeIndex,
    raiTransferScenarioId: custodyLedgerRAITransferScenarioIds[safeIndex],
    raiTransferResponses: sanitizeRAITransferWorkingResponses(workingResponses, safeIndex),
    raiTransferChecks: safeTransferEvidence?.dimensionCorrectness ?? blankRAITransferChecks(),
    focusIntent: safeFocus,
    ...(safeTransferEvidence ? { raiTransferEvidence: safeTransferEvidence } : {}),
  };
}

function raiTransferFeedbackState(primaryEvidence, transferEvidence, explanationEvidence, raiEvidence, raiTransferEvidence) {
  const safeTransferEvidence = sanitizedRAITransferEvidence(raiTransferEvidence);
  const failed = custodyLedgerRAITransferScenarioIds.flatMap((scenarioId) => custodyLedgerRAIDimensions
    .filter((dimension) => safeTransferEvidence?.dimensionCorrectness?.[scenarioId]?.[dimension] !== true)
    .map((dimension) => ({
      scenarioId,
      dimension,
      owner: "901 TEACHER // FEEDBACK",
      text: custodyLedgerRAITransferRemediationMap[scenarioId][dimension],
    })));
  const focusIntent = failed[0]
    ? { scenarioId: failed[0].scenarioId, dimension: failed[0].dimension }
    : firstFailedRAITransfer(safeTransferEvidence);
  return {
    ...raiBaseState(primaryEvidence, transferEvidence, explanationEvidence),
    phase: "rai_transfer_feedback",
    activeMessageKey: "rai_transfer_feedback",
    scoringEnabled: false,
    raiForm: "transfer",
    raiScoringImplemented: true,
    raiTransferEvaluatorImplemented: true,
    raiEvidence: sanitizedRAIEvidence(raiEvidence),
    raiTransferEvidence: safeTransferEvidence,
    raiTransferChecks: safeTransferEvidence?.dimensionCorrectness ?? blankRAITransferChecks(),
    raiTransferFeedback: failed,
    focusIntent,
  };
}

function raiTransferGuidedState(primaryEvidence, transferEvidence, explanationEvidence, raiEvidence, raiTransferEvidence, guidedStatus = "blank") {
  const safeTransferEvidence = sanitizedRAITransferEvidence(raiTransferEvidence);
  return {
    ...raiBaseState(primaryEvidence, transferEvidence, explanationEvidence),
    phase: "rai_transfer_guided",
    activeMessageKey: "rai_transfer_guided",
    scoringEnabled: false,
    raiForm: "transfer",
    raiScoringImplemented: true,
    raiTransferEvaluatorImplemented: true,
    raiEvidence: sanitizedRAIEvidence(raiEvidence),
    raiTransferEvidence: safeTransferEvidence,
    raiTransferChecks: safeTransferEvidence?.dimensionCorrectness ?? blankRAITransferChecks(),
    guidedPractice: {
      ...custodyLedgerRAITransferGuidedCase,
      response: Object.fromEntries(custodyLedgerRAIDimensions.map((dimension) => [dimension, ""])),
      status: guidedStatus === "incomplete" ? "incomplete" : "blank",
    },
    focusIntent: { group: "rai_transfer_guided", dimension: "principle" },
  };
}

function raiExplanationState(primaryEvidence, transferEvidence, explanationEvidence, raiEvidence, raiTransferEvidence, raiExplanationEvidence = null, firstFailedDimension = null) {
  const safeExplanationEvidence = sanitizedRAIExplanationEvidence(raiExplanationEvidence);
  const focusDimension = custodyLedgerRAIExplanationDimensions.includes(firstFailedDimension)
    ? firstFailedDimension
    : firstFailedRAIExplanation(safeExplanationEvidence);
  return {
    ...raiBaseState(primaryEvidence, transferEvidence, explanationEvidence),
    phase: "rai_explanation",
    activeMessageKey: "rai_explanation",
    scoringEnabled: true,
    raiForm: "explanation",
    raiScoringImplemented: true,
    raiTransferEvaluatorImplemented: true,
    raiEvidence: sanitizedRAIEvidence(raiEvidence),
    raiTransferEvidence: sanitizedRAITransferEvidence(raiTransferEvidence),
    raiExplanationSelections: Object.fromEntries(custodyLedgerRAIExplanationDimensions.map((dimension) => [dimension, ""])),
    focusIntent: { group: "rai_explanation", dimension: focusDimension },
    ...(safeExplanationEvidence ? { raiExplanationEvidence: safeExplanationEvidence } : {}),
  };
}

function raiExplanationFeedbackState(primaryEvidence, transferEvidence, explanationEvidence, raiEvidence, raiTransferEvidence, raiExplanationEvidence) {
  const safeExplanationEvidence = sanitizedRAIExplanationEvidence(raiExplanationEvidence);
  const firstFailedDimension = firstFailedRAIExplanation(safeExplanationEvidence);
  return {
    ...raiBaseState(primaryEvidence, transferEvidence, explanationEvidence),
    phase: "rai_explanation_feedback",
    activeMessageKey: "rai_explanation_feedback",
    scoringEnabled: false,
    raiForm: "explanation",
    raiScoringImplemented: true,
    raiTransferEvaluatorImplemented: true,
    raiEvidence: sanitizedRAIEvidence(raiEvidence),
    raiTransferEvidence: sanitizedRAITransferEvidence(raiTransferEvidence),
    raiExplanationEvidence: safeExplanationEvidence,
    explanationFeedback: {
      owner: "901 TEACHER // FEEDBACK",
      dimension: firstFailedDimension,
      text: custodyLedgerPythonOwnershipMessages.rai_explanation_feedback.text,
    },
    focusIntent: { group: "rai_explanation_feedback", dimension: firstFailedDimension },
  };
}

function raiCompleteState(primaryEvidence, transferEvidence, explanationEvidence, raiEvidence, raiTransferEvidence, raiExplanationEvidence) {
  if (!raiEvidenceIsComplete(raiEvidence)
    || !raiTransferEvidenceIsComplete(raiTransferEvidence)
    || !raiExplanationEvidenceIsComplete(raiExplanationEvidence)) {
    return raiTransferState(primaryEvidence, transferEvidence, explanationEvidence, raiEvidence, raiTransferEvidence);
  }
  return {
    ...raiBaseState(primaryEvidence, transferEvidence, explanationEvidence),
    phase: "rai_complete",
    activeMessageKey: "rai_conclusion",
    scoringEnabled: false,
    raiForm: "complete",
    raiScoringImplemented: true,
    raiTransferEvaluatorImplemented: true,
    raiEvidence: sanitizedRAIEvidence(raiEvidence),
    raiTransferEvidence: sanitizedRAITransferEvidence(raiTransferEvidence),
    raiExplanationEvidence: sanitizedRAIExplanationEvidence(raiExplanationEvidence),
    raiStatus: "complete",
    conclusion: {
      owner: custodyLedgerPythonOwnershipMessages.rai_conclusion.owner,
      text: CUSTODY_LEDGER_RAI_CONCLUSION,
    },
    focusIntent: { group: "rai_complete" },
  };
}

export function dismissCustodyLedgerPrimaryResult(state) {
  const current = normalizeCustodyLedgerScaffold(state);
  if (current.phase !== "python_primary_result" || !evidenceIsComplete(current.pythonEvidence, "primary")) {
    return createCustodyLedgerScaffold(null);
  }
  return transferState(current.pythonEvidence);
}

export function submitCustodyLedgerTransfer(state, source) {
  const current = normalizeCustodyLedgerScaffold(state);
  if (current.phase !== "python_transfer"
    || !evidenceIsComplete(current.pythonEvidence, "primary")) {
    return createCustodyLedgerScaffold(null);
  }
  const result = evaluateCustodyLedgerTransferSource(source);
  const attemptCount = sanitizeAttemptCount(current.pythonTransferEvidence?.attemptCount) + 1;
  const pythonTransferEvidence = {
    packetId: CUSTODY_LEDGER_PACKET_ID,
    mappingId: "RP002-A3-CIVIC-COMPARISON",
    form: "transfer",
    skillId: "PY-009",
    dimensionCorrectness: Object.fromEntries(custodyLedgerPythonChecks.map((check) => [check, result[check] === true])),
    attemptCount,
    hintLevel: 0,
    confidence: null,
    misconceptionTags: result.misconceptionTags,
    masteryStatus: result.passed ? "transfer_complete" : "in_progress",
  };
  if (!result.passed) {
    return {
      ...transferState(current.pythonEvidence, pythonTransferEvidence),
      activeMessageKey: checkMessageFor(result),
      pythonChecks: Object.fromEntries(custodyLedgerPythonChecks.map((check) => [check, result[check] === true])),
    };
  }
  return explanationState(current.pythonEvidence, pythonTransferEvidence);
}

export function retryCustodyLedgerTransfer(state) {
  const current = normalizeCustodyLedgerScaffold(state);
  if (current.phase !== "python_transfer") return current;
  return transferState(current.pythonEvidence, current.pythonTransferEvidence);
}

export function submitCustodyLedgerExplanation(state, selections) {
  const current = normalizeCustodyLedgerScaffold(state);
  if (current.phase !== "python_explanation"
    || !evidenceIsComplete(current.pythonEvidence, "primary")
    || !evidenceIsComplete(current.pythonTransferEvidence, "transfer")) {
    return createCustodyLedgerScaffold(null);
  }
  const result = evaluateCustodyLedgerExplanation(selections);
  const attemptCount = sanitizeAttemptCount(current.pythonExplanationEvidence?.attemptCount) + 1;
  const pythonExplanationEvidence = {
    packetId: CUSTODY_LEDGER_PACKET_ID,
    mappingId: "RP002-A3-CIVIC-COMPARISON",
    form: "explanation",
    skillId: "PY-009",
    dimensionCorrectness: { ...result.dimensionCorrectness },
    attemptCount,
    hintLevel: 0,
    confidence: null,
    misconceptionTags: custodyLedgerExplanationDimensions.filter(
      (dimension) => result.dimensionCorrectness[dimension] !== true,
    ),
    masteryStatus: result.passed ? "explanation_complete" : "in_progress",
  };
  if (!result.passed) {
    return explanationState(
      current.pythonEvidence,
      current.pythonTransferEvidence,
      pythonExplanationEvidence,
      result.firstFailedDimension,
    );
  }
  return {
    packetId: CUSTODY_LEDGER_PACKET_ID,
    boardId: CUSTODY_LEDGER_BOARD_ID,
    phase: "python_complete",
    activeMessageKey: "python_conclusion",
    scoringEnabled: false,
    campaignCommitEnabled: false,
    continuation: CITY_THRESHOLD_CONTINUATION,
    cityStateDelta: null,
    prerequisiteStatus: "complete",
    primaryStatus: "complete",
    transferStatus: "complete",
    pythonStatus: "complete",
    pythonForm: "complete",
    pythonEvidence: sanitizedPythonEvidence(current.pythonEvidence, "primary"),
    pythonTransferEvidence: sanitizedPythonEvidence(current.pythonTransferEvidence, "transfer"),
    pythonExplanationEvidence: sanitizedExplanationEvidence(pythonExplanationEvidence),
  };
}

export function retryCustodyLedgerExplanation(state) {
  const current = normalizeCustodyLedgerScaffold(state);
  if (current.phase !== "python_explanation") return current;
  return explanationState(
    current.pythonEvidence,
    current.pythonTransferEvidence,
    current.pythonExplanationEvidence,
    current.firstFailedDimension,
  );
}

export function dismissCustodyLedgerPythonConclusion(state) {
  const current = normalizeCustodyLedgerScaffold(state);
  if (current.phase !== "python_complete"
    || !explanationEvidenceIsComplete(current.pythonExplanationEvidence)) {
    return createCustodyLedgerScaffold(null);
  }
  return raiPrimaryState(
    current.pythonEvidence,
    current.pythonTransferEvidence,
    current.pythonExplanationEvidence,
  );
}

export function submitCustodyLedgerRAIPrimaryScenario(state, scenarioId, response) {
  const current = normalizeCustodyLedgerScaffold(state);
  if (current.phase !== "rai_primary"
    || current.raiForm !== "primary"
    || current.raiScenarioId !== scenarioId) return current;
  const safeResponse = sanitizeRAIResponse(scenarioId, response);
  const raiWorkingResponses = {
    ...current.raiWorkingResponses,
    [scenarioId]: safeResponse,
  };
  if (current.raiScenarioIndex < custodyLedgerRAIPrimaryScenarioIds.length - 1) {
    return raiPrimaryState(
      current.pythonEvidence,
      current.pythonTransferEvidence,
      current.pythonExplanationEvidence,
      current.raiEvidence,
      current.raiScenarioIndex + 1,
      raiWorkingResponses,
    );
  }
  const dimensionCorrectness = Object.fromEntries(custodyLedgerRAIPrimaryScenarioIds.map((id) => {
    const scenario = responsibleAIPrimaryScenarios.find((item) => item.id === id);
    const submitted = raiWorkingResponses[id];
    return [id, Object.fromEntries(custodyLedgerRAIDimensions.map((dimension) => [
      dimension,
      submitted
        ? submitted[dimension] === scenario?.[dimension]
        : current.raiEvidence?.dimensionCorrectness?.[id]?.[dimension] === true,
    ]))];
  }));
  const passed = custodyLedgerRAIPrimaryScenarioIds.every((id) => custodyLedgerRAIDimensions
    .every((dimension) => dimensionCorrectness[id][dimension] === true));
  const failedScenarioIds = custodyLedgerRAIPrimaryScenarioIds.filter((id) => custodyLedgerRAIDimensions
    .some((dimension) => dimensionCorrectness[id][dimension] !== true));
  const raiEvidence = sanitizedRAIEvidence({
    packetId: CUSTODY_LEDGER_PACKET_ID,
    form: "primary",
    dimensionCorrectness,
    attemptCount: sanitizeAttemptCount(current.raiEvidence?.attemptCount) + 1,
    hintLevel: passed ? current.raiEvidence?.hintLevel : sanitizeAttemptCount(current.raiEvidence?.hintLevel) + 1,
    confidence: null,
    misconceptionTags: failedScenarioIds.map((id) => custodyLedgerRAIMisconceptionTags[id]),
    masteryStatus: passed ? "primary_complete" : "remediation_required",
  });
  return passed
    ? raiTransferState(current.pythonEvidence, current.pythonTransferEvidence, current.pythonExplanationEvidence, raiEvidence)
    : raiFeedbackState(current.pythonEvidence, current.pythonTransferEvidence, current.pythonExplanationEvidence, raiEvidence);
}

export function acknowledgeCustodyLedgerRAIFeedback(state) {
  const current = normalizeCustodyLedgerScaffold(state);
  if (current.phase !== "rai_feedback" || !current.raiEvidence) return current;
  return raiGuidedState(
    current.pythonEvidence,
    current.pythonTransferEvidence,
    current.pythonExplanationEvidence,
    current.raiEvidence,
  );
}

export function submitCustodyLedgerRAIGuidedPractice(state, response) {
  const current = normalizeCustodyLedgerScaffold(state);
  if (current.phase !== "rai_guided" || !current.raiEvidence) return current;
  const principleValid = responsibleAIPrinciples.includes(response?.principle);
  const mitigationValid = typeof response?.mitigation === "string"
    && response.mitigation.trim().length >= 8
    && response.mitigation.trim().length <= 160;
  const owner = typeof response?.owner === "string" ? response.owner.trim().slice(0, 120) : "";
  const nonHumanOwner = /\b(model|platform|city|builder|machine|system|device|terminal|artifact|algorithm)\b/i.test(owner);
  if (!principleValid || !mitigationValid || owner.length < 3 || nonHumanOwner) {
    return raiGuidedState(
      current.pythonEvidence,
      current.pythonTransferEvidence,
      current.pythonExplanationEvidence,
      current.raiEvidence,
      "incomplete",
    );
  }
  const focusIntent = firstFailedRAI(current.raiEvidence);
  const scenarioIndex = custodyLedgerRAIPrimaryScenarioIds.indexOf(focusIntent.scenarioId);
  return raiPrimaryState(
    current.pythonEvidence,
    current.pythonTransferEvidence,
    current.pythonExplanationEvidence,
    current.raiEvidence,
    scenarioIndex >= 0 ? scenarioIndex : 0,
    {},
    focusIntent,
  );
}

export function submitCustodyLedgerRAITransferScenario(state, scenarioId, response) {
  const current = normalizeCustodyLedgerScaffold(state);
  if (current.phase !== "rai_transfer"
    || current.raiForm !== "transfer"
    || current.raiTransferScenarioId !== scenarioId) return current;
  const safeResponse = sanitizeRAITransferResponse(response);
  const raiTransferResponses = {
    ...current.raiTransferResponses,
    [scenarioId]: safeResponse,
  };
  if (current.raiTransferScenarioIndex < custodyLedgerRAITransferScenarioIds.length - 1) {
    return raiTransferState(
      current.pythonEvidence,
      current.pythonTransferEvidence,
      current.pythonExplanationEvidence,
      current.raiEvidence,
      current.raiTransferEvidence,
      current.raiTransferScenarioIndex + 1,
      raiTransferResponses,
    );
  }
  const dimensionCorrectness = Object.fromEntries(custodyLedgerRAITransferScenarioIds.map((id) => [
    id,
    Object.fromEntries(custodyLedgerRAIDimensions.map((dimension) => [
      dimension,
      Object.hasOwn(raiTransferResponses, id)
        ? raiTransferResponses[id][dimension] === custodyLedgerRAITransferAnswers[id][dimension]
        : current.raiTransferEvidence?.dimensionCorrectness?.[id]?.[dimension] === true,
    ])),
  ]));
  const score = custodyLedgerRAITransferScenarioIds.reduce((total, id) => total
    + custodyLedgerRAIDimensions.filter((dimension) => dimensionCorrectness[id][dimension]).length, 0);
  const result = { dimensionCorrectness, score, passed: score === 9 };
  const failedScenarioIds = custodyLedgerRAITransferScenarioIds.filter((id) => custodyLedgerRAIDimensions
    .some((dimension) => result.dimensionCorrectness[id][dimension] !== true));
  const raiTransferEvidence = sanitizedRAITransferEvidence({
    packetId: CUSTODY_LEDGER_PACKET_ID,
    form: "transfer",
    dimensionCorrectness: result.dimensionCorrectness,
    attemptCount: sanitizeAttemptCount(current.raiTransferEvidence?.attemptCount) + 1,
    hintLevel: result.passed
      ? current.raiTransferEvidence?.hintLevel
      : sanitizeAttemptCount(current.raiTransferEvidence?.hintLevel) + 1,
    confidence: null,
    misconceptionTags: failedScenarioIds.map((id) => custodyLedgerRAITransferMisconceptionTags[id]),
    masteryStatus: result.passed ? "transfer_complete" : "remediation_required",
  });
  return result.passed
    ? raiExplanationState(
      current.pythonEvidence,
      current.pythonTransferEvidence,
      current.pythonExplanationEvidence,
      current.raiEvidence,
      raiTransferEvidence,
    )
    : raiTransferFeedbackState(
      current.pythonEvidence,
      current.pythonTransferEvidence,
      current.pythonExplanationEvidence,
      current.raiEvidence,
      raiTransferEvidence,
    );
}

export function acknowledgeCustodyLedgerRAITransferFeedback(state) {
  const current = normalizeCustodyLedgerScaffold(state);
  if (current.phase !== "rai_transfer_feedback" || !current.raiTransferEvidence) return current;
  return raiTransferGuidedState(
    current.pythonEvidence,
    current.pythonTransferEvidence,
    current.pythonExplanationEvidence,
    current.raiEvidence,
    current.raiTransferEvidence,
  );
}

export function submitCustodyLedgerRAITransferGuidedPractice(state, response) {
  const current = normalizeCustodyLedgerScaffold(state);
  if (current.phase !== "rai_transfer_guided" || !current.raiTransferEvidence) return current;
  const principleValid = responsibleAIPrinciples.includes(response?.principle);
  const mitigationValid = typeof response?.mitigation === "string"
    && response.mitigation.trim().length >= 8
    && response.mitigation.trim().length <= 160;
  const owner = typeof response?.owner === "string" ? response.owner.trim().slice(0, 120) : "";
  const nonHumanOwner = /\b(model|platform|city|builder|machine|system|device|terminal|artifact|algorithm)\b/i.test(owner);
  if (!principleValid || !mitigationValid || owner.length < 3 || nonHumanOwner) {
    return raiTransferGuidedState(
      current.pythonEvidence,
      current.pythonTransferEvidence,
      current.pythonExplanationEvidence,
      current.raiEvidence,
      current.raiTransferEvidence,
      "incomplete",
    );
  }
  const focusIntent = firstFailedRAITransfer(current.raiTransferEvidence);
  const scenarioIndex = custodyLedgerRAITransferScenarioIds.indexOf(focusIntent.scenarioId);
  return raiTransferState(
    current.pythonEvidence,
    current.pythonTransferEvidence,
    current.pythonExplanationEvidence,
    current.raiEvidence,
    current.raiTransferEvidence,
    scenarioIndex >= 0 ? scenarioIndex : 0,
    {},
    focusIntent,
  );
}

export function submitCustodyLedgerRAIExplanation(state, selections) {
  const current = normalizeCustodyLedgerScaffold(state);
  if (current.phase !== "rai_explanation"
    || !raiEvidenceIsComplete(current.raiEvidence)
    || !raiTransferEvidenceIsComplete(current.raiTransferEvidence)) return current;
  const result = evaluateCustodyLedgerRAIExplanation(selections);
  const raiExplanationEvidence = sanitizedRAIExplanationEvidence({
    packetId: CUSTODY_LEDGER_PACKET_ID,
    form: "explanation",
    dimensionCorrectness: result.dimensionCorrectness,
    attemptCount: sanitizeAttemptCount(current.raiExplanationEvidence?.attemptCount) + 1,
    hintLevel: result.passed
      ? current.raiExplanationEvidence?.hintLevel
      : sanitizeAttemptCount(current.raiExplanationEvidence?.hintLevel) + 1,
    confidence: null,
    misconceptionTags: custodyLedgerRAIExplanationDimensions.filter(
      (dimension) => result.dimensionCorrectness[dimension] !== true,
    ),
    masteryStatus: result.passed ? "explanation_complete" : "remediation_required",
  });
  return result.passed
    ? raiCompleteState(
      current.pythonEvidence,
      current.pythonTransferEvidence,
      current.pythonExplanationEvidence,
      current.raiEvidence,
      current.raiTransferEvidence,
      raiExplanationEvidence,
    )
    : raiExplanationFeedbackState(
      current.pythonEvidence,
      current.pythonTransferEvidence,
      current.pythonExplanationEvidence,
      current.raiEvidence,
      current.raiTransferEvidence,
      raiExplanationEvidence,
    );
}

export function acknowledgeCustodyLedgerRAIExplanationFeedback(state) {
  const current = normalizeCustodyLedgerScaffold(state);
  if (current.phase !== "rai_explanation_feedback" || !current.raiExplanationEvidence) return current;
  return raiExplanationState(
    current.pythonEvidence,
    current.pythonTransferEvidence,
    current.pythonExplanationEvidence,
    current.raiEvidence,
    current.raiTransferEvidence,
    current.raiExplanationEvidence,
    firstFailedRAIExplanation(current.raiExplanationEvidence),
  );
}

export function dismissCustodyLedgerRAIConclusion(state) {
  const current = normalizeCustodyLedgerScaffold(state);
  if (current.phase !== "rai_complete") return current;
  return raiCompleteState(
    current.pythonEvidence,
    current.pythonTransferEvidence,
    current.pythonExplanationEvidence,
    current.raiEvidence,
    current.raiTransferEvidence,
    current.raiExplanationEvidence,
  );
}

export function resumeCustodyLedgerRAI(state) {
  const primaryEvidence = sanitizedPythonEvidence(state?.pythonEvidence, "primary");
  const transferEvidence = sanitizedPythonEvidence(state?.pythonTransferEvidence, "transfer");
  const explanationEvidence = sanitizedExplanationEvidence(state?.pythonExplanationEvidence);
  if (!evidenceIsComplete(primaryEvidence, "primary")
    || !evidenceIsComplete(transferEvidence, "transfer")
    || !explanationEvidenceIsComplete(explanationEvidence)) {
    return resumeCustodyLedgerPython(state);
  }
  const raiEvidence = sanitizedRAIEvidence(state?.raiEvidence);
  if (!raiEvidenceIsComplete(raiEvidence)) {
    const focusIntent = firstFailedRAI(raiEvidence);
    const scenarioIndex = custodyLedgerRAIPrimaryScenarioIds.indexOf(focusIntent.scenarioId);
    return raiPrimaryState(
      primaryEvidence,
      transferEvidence,
      explanationEvidence,
      raiEvidence,
      scenarioIndex >= 0 ? scenarioIndex : 0,
      {},
      focusIntent,
    );
  }
  const raiTransferEvidence = sanitizedRAITransferEvidence(state?.raiTransferEvidence);
  if (!raiTransferEvidenceIsComplete(raiTransferEvidence)) {
    const focusIntent = firstFailedRAITransfer(raiTransferEvidence);
    const scenarioIndex = custodyLedgerRAITransferScenarioIds.indexOf(focusIntent.scenarioId);
    return raiTransferState(
      primaryEvidence,
      transferEvidence,
      explanationEvidence,
      raiEvidence,
      raiTransferEvidence,
      scenarioIndex >= 0 ? scenarioIndex : 0,
      {},
      focusIntent,
    );
  }
  const raiExplanationEvidence = sanitizedRAIExplanationEvidence(state?.raiExplanationEvidence);
  if (!raiExplanationEvidenceIsComplete(raiExplanationEvidence)) {
    return raiExplanationState(
      primaryEvidence,
      transferEvidence,
      explanationEvidence,
      raiEvidence,
      raiTransferEvidence,
      raiExplanationEvidence,
      firstFailedRAIExplanation(raiExplanationEvidence),
    );
  }
  return raiCompleteState(
    primaryEvidence,
    transferEvidence,
    explanationEvidence,
    raiEvidence,
    raiTransferEvidence,
    raiExplanationEvidence,
  );
}

/**
 * Reconstructs only the first incomplete scored boundary. Result and Pilot
 * presentation are intentionally not replayed, and no private working content
 * survives close, cancel, reload, return, stale sanitation, or Tour resume.
 */
export function resumeCustodyLedgerPython(state) {
  const primaryEvidence = sanitizedPythonEvidence(state?.pythonEvidence, "primary");
  const transferEvidence = sanitizedPythonEvidence(state?.pythonTransferEvidence, "transfer");
  const explanationEvidence = sanitizedExplanationEvidence(state?.pythonExplanationEvidence);
  if (!evidenceIsComplete(primaryEvidence, "primary")) {
    if (state?.prerequisiteStatus !== "complete") return createCustodyLedgerScaffold(null);
    return {
      ...blankPrimaryState(primaryEvidence),
      activeMessageKey: "tray_available",
    };
  }
  if (!evidenceIsComplete(transferEvidence, "transfer")) {
    return transferState(primaryEvidence, transferEvidence);
  }
  if (!explanationEvidenceIsComplete(explanationEvidence)) {
    return explanationState(primaryEvidence, transferEvidence, explanationEvidence);
  }
  if (state?.raiEvidence || ["rai_feedback", "rai_guided", "rai_transfer"].includes(state?.phase)) {
    return resumeCustodyLedgerRAI(state);
  }
  return raiPrimaryState(primaryEvidence, transferEvidence, explanationEvidence);
}

function blankPrimaryState(primaryEvidence = null) {
  return {
    packetId: CUSTODY_LEDGER_PACKET_ID,
    boardId: CUSTODY_LEDGER_BOARD_ID,
    phase: "python_primary",
    activeMessageKey: "tray_available",
    sourceFields: { ...custodyLedgerSourceFields },
    expeditionFields: { ...custodyLedgerExpeditionFields },
    scoringEnabled: true,
    campaignCommitEnabled: false,
    continuation: CITY_THRESHOLD_CONTINUATION,
    cityStateDelta: null,
    prerequisiteStatus: "complete",
    pythonForm: "primary",
    pythonChecks: blankPythonChecks(),
    unfinishedWorkImage: workImage(),
    ...(sanitizedPythonEvidence(primaryEvidence, "primary") ? {
      pythonEvidence: sanitizedPythonEvidence(primaryEvidence, "primary"),
    } : {}),
  };
}

export function setCustodyLedgerOwnershipMessage(state, messageKey) {
  const current = normalizeCustodyLedgerScaffold(state);
  const safeKey = hasCustodyLedgerOwnershipMessage(messageKey)
    ? messageKey
    : current.activeMessageKey;
  return {
    ...current,
    activeMessageKey: safeKey,
  };
}

export function clearCustodyLedgerWorkingState(state) {
  const current = normalizeCustodyLedgerScaffold(state);
  const raiPhases = [
    "rai_primary", "rai_feedback", "rai_guided", "rai_transfer", "rai_transfer_feedback",
    "rai_transfer_guided", "rai_explanation", "rai_explanation_feedback", "rai_complete",
  ];
  if (["python_primary", "python_primary_result", "python_transfer", "python_explanation", "python_complete", ...raiPhases]
    .includes(current.phase)) {
    return {
      ...(raiPhases.includes(current.phase)
        ? resumeCustodyLedgerRAI(current)
        : resumeCustodyLedgerPython(current)),
      activeMessageKey: "cancelled",
    };
  }
  return {
    ...current,
    activeMessageKey: "cancelled",
    expeditionFields: { ...custodyLedgerExpeditionFields },
  };
}

const custodyLedgerObservationBoardIds = Object.freeze({
  fixed_trace: "SC-03-10",
  later_stewardship: "SC-03-10",
  outlined_gap: "SC-03-10",
  distant_repetition: "SC-03-20",
  closed_boundary: "SC-03-20",
});

function custodyLedgerObservationRecordIsFinal(record, observationId) {
  return record?.packetId === CUSTODY_LEDGER_PACKET_ID
    && record?.observationId === observationId
    && record?.boardId === custodyLedgerObservationBoardIds[observationId]
    && record?.finalizationStatus === "finalized"
    && record?.provenance === CUSTODY_LEDGER_OBSERVATION_ACTION;
}

function sanitizeCustodyLedgerObservationEvidence(value) {
  if (!Array.isArray(value)) return [];
  const records = custodyLedgerObservationIds.flatMap((observationId) => {
    const matched = value.find((record) => custodyLedgerObservationRecordIsFinal(record, observationId));
    return matched ? [{
      packetId: CUSTODY_LEDGER_PACKET_ID,
      observationId,
      boardId: custodyLedgerObservationBoardIds[observationId],
      finalizationStatus: "finalized",
      provenance: CUSTODY_LEDGER_OBSERVATION_ACTION,
    }] : [];
  });
  const nearComplete = custodyLedgerObservationStages.near.every((observationId) => (
    records.some((record) => record.observationId === observationId)
  ));
  return nearComplete
    ? records
    : records.filter((record) => custodyLedgerObservationStages.near.includes(record.observationId));
}

function custodyLedgerObservationPhase(finalizedIds) {
  const nearComplete = custodyLedgerObservationStages.near.every((observationId) => finalizedIds.includes(observationId));
  if (!nearComplete) return "near_observations";
  const farComplete = custodyLedgerObservationStages.far.every((observationId) => finalizedIds.includes(observationId));
  return farComplete ? "observation_complete" : "far_observations";
}

function firstIncompleteCustodyLedgerObservation(finalizedIds) {
  return custodyLedgerObservationIds.find((observationId) => !finalizedIds.includes(observationId))
    ?? "open_local_comparison";
}

function custodyLedgerObservationFocus(phase, finalizedIds) {
  const next = firstIncompleteCustodyLedgerObservation(finalizedIds);
  return {
    group: phase,
    target: "heading",
    then: next === "open_local_comparison" ? "open_local_comparison" : `observation:${next}`,
  };
}

function custodyLedgerObservationBase(evidence) {
  const observationEvidence = sanitizeCustodyLedgerObservationEvidence(evidence);
  const finalizedObservationIds = observationEvidence.map((record) => record.observationId);
  const phase = custodyLedgerObservationPhase(finalizedObservationIds);
  const nearCount = custodyLedgerObservationStages.near.filter((id) => finalizedObservationIds.includes(id)).length;
  const farCount = custodyLedgerObservationStages.far.filter((id) => finalizedObservationIds.includes(id)).length;
  return {
    packetId: CUSTODY_LEDGER_PACKET_ID,
    boardId: phase === "near_observations" ? "SC-03-10" : "SC-03-20",
    phase,
    activeGroup: phase,
    ownerMessage: custodyLedgerObservationOwnershipMessages.entry,
    observationEvidence,
    finalizedObservationIds,
    progress: Object.freeze({ near: nearCount, nearRequired: 3, far: farCount, farRequired: 2 }),
    observationComplete: phase === "observation_complete",
    nextBoundary: firstIncompleteCustodyLedgerObservation(finalizedObservationIds),
    focusIntent: custodyLedgerObservationFocus(phase, finalizedObservationIds),
    scoringEnabled: false,
    campaignCommitEnabled: false,
    continuation: CITY_THRESHOLD_CONTINUATION,
    cityStateDelta: null,
  };
}

export function createCustodyLedgerObservationState(options = {}) {
  if (options.mode === "demo_tour") {
    return {
      packetId: CUSTODY_LEDGER_PACKET_ID,
      phase: "tour_preview",
      activeGroup: "tour_preview",
      ownerMessage: custodyLedgerObservationOwnershipMessages.tour,
      scoringEnabled: false,
      campaignCommitEnabled: false,
      continuation: CITY_THRESHOLD_CONTINUATION,
      cityStateDelta: null,
    };
  }
  return custodyLedgerObservationBase([]);
}

export function sanitizeCustodyLedgerObservationState(state) {
  if (state?.phase === "tour_preview" || state?.mode === "demo_tour") {
    return createCustodyLedgerObservationState({ mode: "demo_tour" });
  }
  return custodyLedgerObservationBase(state?.observationEvidence);
}

function custodyLedgerUnavailableObservationState(current) {
  return {
    ...custodyLedgerObservationBase(current.observationEvidence),
    activeGroup: "observation_unavailable",
    ownerMessage: custodyLedgerObservationOwnershipMessages.unavailable,
    focusIntent: { group: "observation_unavailable", target: "heading" },
    nextFocusIntent: custodyLedgerObservationFocus(current.phase, current.finalizedObservationIds),
  };
}

export function recordCustodyLedgerObservation(state, request) {
  if (state?.phase === "tour_preview" || state?.mode === "demo_tour") {
    return createCustodyLedgerObservationState({ mode: "demo_tour" });
  }
  const current = sanitizeCustodyLedgerObservationState(state);
  const observationId = request?.observationId;
  const known = custodyLedgerObservationIds.includes(observationId);
  const expectedBoard = known ? custodyLedgerObservationBoardIds[observationId] : null;
  const deliberate = request?.actionType === CUSTODY_LEDGER_OBSERVATION_ACTION
    && request?.boardId === expectedBoard
    && request?.available !== false;
  const alreadyFinalized = current.finalizedObservationIds.includes(observationId);
  const inCurrentStage = (current.phase === "near_observations" && custodyLedgerObservationStages.near.includes(observationId))
    || (current.phase === "far_observations" && custodyLedgerObservationStages.far.includes(observationId));
  if (!known || !deliberate || (!alreadyFinalized && !inCurrentStage)) {
    return custodyLedgerUnavailableObservationState(current);
  }

  const observationEvidence = alreadyFinalized ? current.observationEvidence : [
    ...current.observationEvidence,
    {
      packetId: CUSTODY_LEDGER_PACKET_ID,
      observationId,
      boardId: expectedBoard,
      finalizationStatus: "finalized",
      provenance: CUSTODY_LEDGER_OBSERVATION_ACTION,
    },
  ];
  const next = custodyLedgerObservationBase(observationEvidence);
  return {
    ...next,
    activeGroup: alreadyFinalized ? "observation_revisit" : "observation_statement",
    activeObservation: {
      observationId,
      ...custodyLedgerObservationStatements[observationId],
      status: alreadyFinalized ? "already_recorded" : "finalized",
    },
    focusIntent: {
      group: alreadyFinalized ? "observation_revisit" : "observation_statement",
      target: "heading",
    },
    nextFocusIntent: custodyLedgerObservationFocus(next.phase, next.finalizedObservationIds),
  };
}

const CUSTODY_LEDGER_SAVE_PHASES = Object.freeze([
  "save_eligibility",
  "bounded_review",
  "save_confirmation",
  "recoverable_save_failure",
  "comparison_complete",
  "verified_restore",
  "sanitation_downgrade",
]);

function sanitizeCustodyLedgerObservationFixtures(value) {
  if (!Array.isArray(value)) return [];
  return custodyLedgerObservationIds.filter((observationId) => value.some((fixture) => (
    fixture?.observationId === observationId
      && fixture?.finalizationStatus === "finalized"
      && fixture?.fixtureType === "protected_sanitized"
  )));
}

export function createCustodyLedgerFinalizedObservationFixtures() {
  return custodyLedgerObservationIds.map((observationId) => ({
    observationId,
    finalizationStatus: "finalized",
    fixtureType: "protected_sanitized",
  }));
}

function sanitizeCustodyLedgerSaveDependencies(raiConclusionState, dependencies) {
  const predecessor = sanitizeCityThresholdSave(dependencies?.predecessorValue);
  const structuredPacketEvidence = sanitizeStructuredPacketEvidence(
    dependencies?.prerequisiteEvidence?.structuredPacketEvidence,
  );
  const responsibleAIEvidence = sanitizeResponsibleAIEvidence(
    dependencies?.prerequisiteEvidence?.responsibleAIEvidence,
  );
  const normalizedConclusion = raiConclusionState?.phase === "rai_complete"
    ? resumeCustodyLedgerRAI(raiConclusionState)
    : null;
  const observationStateProvided = Object.hasOwn(dependencies ?? {}, "observationState");
  const observationState = observationStateProvided
    ? sanitizeCustodyLedgerObservationState(dependencies.observationState)
    : null;
  return {
    predecessor,
    observations: observationStateProvided
      ? [...(observationState?.finalizedObservationIds ?? [])]
      : sanitizeCustodyLedgerObservationFixtures(dependencies?.observationFixtures),
    prerequisites: {
      structuredPacketEvidence,
      responsibleAIEvidence,
    },
    learning: {
      pythonEvidence: sanitizedPythonEvidence(normalizedConclusion?.pythonEvidence, "primary"),
      pythonTransferEvidence: sanitizedPythonEvidence(normalizedConclusion?.pythonTransferEvidence, "transfer"),
      pythonExplanationEvidence: sanitizedExplanationEvidence(normalizedConclusion?.pythonExplanationEvidence),
      raiEvidence: sanitizedRAIEvidence(normalizedConclusion?.raiEvidence),
      raiTransferEvidence: sanitizedRAITransferEvidence(normalizedConclusion?.raiTransferEvidence),
      raiExplanationEvidence: sanitizedRAIExplanationEvidence(normalizedConclusion?.raiExplanationEvidence),
    },
  };
}

function custodyLedgerSaveDependenciesAreComplete(value) {
  return value?.predecessor?.cityThresholdAnchorRecorded === true
    && value?.predecessor?.civicDistrictRouteAvailable === true
    && custodyLedgerObservationIds.every((observationId) => value?.observations?.includes(observationId))
    && hasStrictStructuredPrerequisite(value?.prerequisites?.structuredPacketEvidence)
    && hasStrictResponsibleAIPrerequisite(value?.prerequisites?.responsibleAIEvidence)
    && evidenceIsComplete(value?.learning?.pythonEvidence, "primary")
    && evidenceIsComplete(value?.learning?.pythonTransferEvidence, "transfer")
    && explanationEvidenceIsComplete(value?.learning?.pythonExplanationEvidence)
    && raiEvidenceIsComplete(value?.learning?.raiEvidence)
    && raiTransferEvidenceIsComplete(value?.learning?.raiTransferEvidence)
    && raiExplanationEvidenceIsComplete(value?.learning?.raiExplanationEvidence);
}

function firstIncompleteCustodyLedgerBoundary(value) {
  if (value?.predecessor?.cityThresholdAnchorRecorded !== true) return "rp001_anchor";
  if (value?.predecessor?.civicDistrictRouteAvailable !== true) return "rp001_civic_route";
  for (const observationId of custodyLedgerObservationIds) {
    if (!value?.observations?.includes(observationId)) return `observation:${observationId}`;
  }
  if (!hasStrictStructuredPrerequisite(value?.prerequisites?.structuredPacketEvidence)) return "prerequisite:L-03-01";
  if (!hasStrictResponsibleAIPrerequisite(value?.prerequisites?.responsibleAIEvidence)) return "prerequisite:L-02-02";
  if (!evidenceIsComplete(value?.learning?.pythonEvidence, "primary")) return "python:primary";
  if (!evidenceIsComplete(value?.learning?.pythonTransferEvidence, "transfer")) return "python:transfer";
  if (!explanationEvidenceIsComplete(value?.learning?.pythonExplanationEvidence)) return "python:explanation";
  if (!raiEvidenceIsComplete(value?.learning?.raiEvidence)) return "rai:primary";
  if (!raiTransferEvidenceIsComplete(value?.learning?.raiTransferEvidence)) return "rai:transfer";
  if (!raiExplanationEvidenceIsComplete(value?.learning?.raiExplanationEvidence)) return "rai:explanation";
  return "save:bounded_review";
}

function custodyLedgerSaveBase(phase, saveDependencies, focusIntent) {
  return {
    packetId: CUSTODY_LEDGER_PACKET_ID,
    boardId: CUSTODY_LEDGER_BOARD_ID,
    phase,
    activeGroup: phase,
    scoringEnabled: false,
    campaignCommitEnabled: false,
    continuation: CITY_THRESHOLD_CONTINUATION,
    cityStateDelta: null,
    saveDependencies,
    focusIntent,
  };
}

function custodyLedgerCanonicalFocus(phase) {
  if (phase === "bounded_review") return { group: phase, target: "heading" };
  if (phase === "save_confirmation") return { group: phase, target: "heading", contained: true };
  if (phase === "comparison_complete") return { group: phase, target: "saved_controls" };
  if (phase === "verified_restore") return { group: phase, target: "heading", then: "saved_controls" };
  return { group: phase, target: "heading" };
}

function sanitizeCustodyLedgerSaveState(state) {
  if (!CUSTODY_LEDGER_SAVE_PHASES.includes(state?.phase)) return null;
  const dependencies = sanitizeCustodyLedgerSaveDependencies({
    phase: "rai_complete",
    ...state?.saveDependencies?.learning,
  }, {
    predecessorValue: state?.saveDependencies?.predecessor,
    prerequisiteEvidence: state?.saveDependencies?.prerequisites,
    observationFixtures: (state?.saveDependencies?.observations ?? []).map((observationId) => ({
      observationId,
      finalizationStatus: "finalized",
      fixtureType: "protected_sanitized",
    })),
  });
  return custodyLedgerSaveBase(state.phase, dependencies, custodyLedgerCanonicalFocus(state.phase));
}

function clearCustodyLedgerAtomicTriplet(adapter) {
  if (adapter && typeof adapter.clearAtomicTriplet === "function") adapter.clearAtomicTriplet();
}

function custodyLedgerSanitationDowngrade(saveDependencies, adapter) {
  clearCustodyLedgerAtomicTriplet(adapter);
  const firstIncompleteBoundary = firstIncompleteCustodyLedgerBoundary(saveDependencies);
  return {
    ...custodyLedgerSaveBase(
      "sanitation_downgrade",
      saveDependencies,
      { group: "sanitation_downgrade", target: "heading" },
    ),
    ownerMessage: custodyLedgerSaveOwnershipMessages.sanitation_downgrade,
    progression: {},
    firstIncompleteBoundary,
    nextFocusIntent: { boundary: firstIncompleteBoundary, target: "first_required_control" },
  };
}

/**
 * A protected deterministic adapter used only by the non-routable state model.
 * It has no browser storage integration and can inject complete local failures
 * without ever exposing a partial RP-002 triplet.
 */
export function createCustodyLedgerPersistenceAdapter(initialValue = {}, options = {}) {
  let progression = Object.keys(custodyLedgerAtomicProgression).every(
    (key) => initialValue?.[key] === custodyLedgerAtomicProgression[key],
  ) ? { ...custodyLedgerAtomicProgression } : {};
  let failuresRemaining = Number.isSafeInteger(options.failuresBeforeSuccess)
    ? Math.max(0, Math.min(options.failuresBeforeSuccess, 9999))
    : 0;
  return Object.freeze({
    read() {
      return { ...progression };
    },
    commitAtomicTriplet(value) {
      const exact = Object.keys(custodyLedgerAtomicProgression).length === Object.keys(value ?? {}).length
        && Object.entries(custodyLedgerAtomicProgression).every(([key, expected]) => value?.[key] === expected);
      if (!exact || failuresRemaining > 0) {
        if (failuresRemaining > 0) failuresRemaining -= 1;
        progression = {};
        return { ok: false, value: {} };
      }
      progression = { ...custodyLedgerAtomicProgression };
      return { ok: true, value: { ...progression } };
    },
    clearAtomicTriplet() {
      progression = {};
      return {};
    },
  });
}

export function beginCustodyLedgerSaveEligibility(raiConclusionState, dependencies, options = {}) {
  if (options.mode === "demo_tour") {
    return {
      packetId: CUSTODY_LEDGER_PACKET_ID,
      phase: "tour_preview",
      activeGroup: "tour_preview",
      ownerMessage: custodyLedgerOwnershipMessages.tour,
      scoringEnabled: false,
      campaignCommitEnabled: false,
      continuation: CITY_THRESHOLD_CONTINUATION,
      cityStateDelta: null,
    };
  }
  const saveDependencies = sanitizeCustodyLedgerSaveDependencies(raiConclusionState, dependencies);
  return {
    ...custodyLedgerSaveBase(
      "save_eligibility",
      saveDependencies,
      { group: "save_eligibility", target: "heading" },
    ),
    ownerMessage: custodyLedgerSaveOwnershipMessages.save_eligibility,
  };
}

export function deriveCustodyLedgerSaveEligibility(state, adapter) {
  const current = sanitizeCustodyLedgerSaveState(state);
  if (!current || current.phase !== "save_eligibility") {
    return custodyLedgerSanitationDowngrade(current?.saveDependencies ?? sanitizeCustodyLedgerSaveDependencies(null, null), adapter);
  }
  if (!custodyLedgerSaveDependenciesAreComplete(current.saveDependencies)) {
    return custodyLedgerSanitationDowngrade(current.saveDependencies, adapter);
  }
  return {
    ...custodyLedgerSaveBase(
      "bounded_review",
      current.saveDependencies,
      { group: "bounded_review", target: "heading" },
    ),
    ownerMessage: custodyLedgerSaveOwnershipMessages.bounded_review,
    boundedSummary: Object.freeze({
      comparison: "Human expedition classification remains provisional.",
      surveyMarker: "Next survey direction is an expedition marker, not city permission.",
    }),
  };
}

export function prepareCustodyLedgerSave(state) {
  const current = sanitizeCustodyLedgerSaveState(state);
  if (!current || current.phase !== "bounded_review" || !custodyLedgerSaveDependenciesAreComplete(current.saveDependencies)) {
    return custodyLedgerSanitationDowngrade(current?.saveDependencies ?? sanitizeCustodyLedgerSaveDependencies(null, null));
  }
  return {
    ...custodyLedgerSaveBase(
      "save_confirmation",
      current.saveDependencies,
      { group: "save_confirmation", target: "heading", contained: true },
    ),
    ownerMessage: custodyLedgerSaveOwnershipMessages.save_confirmation,
    commitIntent: CUSTODY_LEDGER_SAVE_INTENT,
  };
}

export function cancelCustodyLedgerSave(state) {
  const current = sanitizeCustodyLedgerSaveState(state);
  if (!current || current.phase !== "save_confirmation") return current ?? state;
  return {
    ...custodyLedgerSaveBase(
      "bounded_review",
      current.saveDependencies,
      { group: "bounded_review", target: "prepare_save" },
    ),
    ownerMessage: custodyLedgerSaveOwnershipMessages.bounded_review,
    boundedSummary: Object.freeze({
      comparison: "Human expedition classification remains provisional.",
      surveyMarker: "Next survey direction is an expedition marker, not city permission.",
    }),
  };
}

export function commitCustodyLedgerBoundedComparison(state, adapter, intent) {
  const current = sanitizeCustodyLedgerSaveState(state);
  if (!current || current.phase !== "save_confirmation" || intent !== CUSTODY_LEDGER_SAVE_INTENT) {
    return current ?? state;
  }
  if (!custodyLedgerSaveDependenciesAreComplete(current.saveDependencies)) {
    return custodyLedgerSanitationDowngrade(current.saveDependencies, adapter);
  }
  const result = adapter?.commitAtomicTriplet?.({ ...custodyLedgerAtomicProgression });
  if (result?.ok !== true
    || !Object.entries(custodyLedgerAtomicProgression).every(([key, value]) => result?.value?.[key] === value)) {
    clearCustodyLedgerAtomicTriplet(adapter);
    return {
      ...custodyLedgerSaveBase(
        "recoverable_save_failure",
        current.saveDependencies,
        { group: "recoverable_save_failure", target: "heading" },
      ),
      ownerMessage: custodyLedgerSaveOwnershipMessages.save_failure,
      progression: {},
    };
  }
  return {
    ...custodyLedgerSaveBase(
      "comparison_complete",
      current.saveDependencies,
      { group: "comparison_complete", target: "saved_controls" },
    ),
    activeMessageKey: "saved",
    ownerMessage: custodyLedgerOwnershipMessages.saved,
    boardState: "SC-03-40",
    progression: { ...custodyLedgerAtomicProgression },
  };
}

export function retryCustodyLedgerSave(state) {
  const current = sanitizeCustodyLedgerSaveState(state);
  if (!current || current.phase !== "recoverable_save_failure") return current ?? state;
  return {
    ...custodyLedgerSaveBase(
      "save_confirmation",
      current.saveDependencies,
      { group: "save_confirmation", target: "heading", contained: true },
    ),
    ownerMessage: custodyLedgerSaveOwnershipMessages.save_confirmation,
    commitIntent: CUSTODY_LEDGER_SAVE_INTENT,
  };
}

export function returnSafelyFromCustodyLedgerSaveFailure(state) {
  const current = sanitizeCustodyLedgerSaveState(state);
  if (!current || current.phase !== "recoverable_save_failure") return current ?? state;
  return {
    ...custodyLedgerSaveBase(
      "bounded_review",
      current.saveDependencies,
      { group: "bounded_review", target: "prepare_save" },
    ),
    ownerMessage: custodyLedgerSaveOwnershipMessages.bounded_review,
    boundedSummary: Object.freeze({
      comparison: "Human expedition classification remains provisional.",
      surveyMarker: "Next survey direction is an expedition marker, not city permission.",
    }),
  };
}

export function restoreCustodyLedgerBoundedComparison(adapter, raiConclusionState, dependencies, options = {}) {
  if (options.mode === "demo_tour") return beginCustodyLedgerSaveEligibility(null, null, { mode: "demo_tour" });
  const saveDependencies = sanitizeCustodyLedgerSaveDependencies(raiConclusionState, dependencies);
  const stored = adapter?.read?.() ?? {};
  const exactTriplet = Object.keys(stored).length === Object.keys(custodyLedgerAtomicProgression).length
    && Object.entries(custodyLedgerAtomicProgression).every(([key, value]) => stored[key] === value);
  if (!exactTriplet || !custodyLedgerSaveDependenciesAreComplete(saveDependencies)) {
    return custodyLedgerSanitationDowngrade(saveDependencies, adapter);
  }
  return {
    ...custodyLedgerSaveBase(
      "verified_restore",
      saveDependencies,
      { group: "verified_restore", target: "heading", then: "saved_controls" },
    ),
    activeMessageKey: "restored",
    ownerMessage: custodyLedgerOwnershipMessages.restored,
    boardState: "SC-03-50",
    progression: { ...custodyLedgerAtomicProgression },
  };
}
