import contract from "../../curriculum/readiness/RP-009/contract.json" with { type: "json" };
import {
  OFFSET_REACH_CONTROLLER_VERSION,
  OFFSET_REACH_RECORD_VERSION,
  OFFSET_REACH_SAVE_KEY,
  OFFSET_REACH_SHELL_VERSION,
  sanitizeOffsetReachSave,
} from "./OffsetReachNormal.js";
import {
  BRAIDED_VERGE_SAVE_KEY,
} from "./BraidedVergeNormal.js";
import { INTERVAL_WORKS_SAVE_KEY } from "./IntervalWorksNormal.js";
import { MANYFOLD_RETURN_SAVE_KEY } from "./ManyfoldReturnNormal.js";
import { THREE_CURRENT_REACH_SAVE_KEY } from "./ThreeCurrentReachNormal.js";

export const OCCLUDED_FOLD_SHELL_VERSION = "SS-RP009-OCCLUDED-FOLD-v1";
export const OCCLUDED_FOLD_CONTROLLER_VERSION = "rp009.occluded-fold-controller.v1";
export const OCCLUDED_FOLD_ROUTE_CONTROLLER_VERSION = "td009.route-controller.v1";
export const OCCLUDED_FOLD_RECORD_VERSION = "rp009.occluded-fold-save.v1";
export const OCCLUDED_FOLD_SAVE_KEY = "horizon-archive-rp009-occluded-fold-save-v1";
export const OCCLUDED_FOLD_ROUTE_GROUP = "td009-occluded-fold-route";
export const OCCLUDED_FOLD_ROUTE_OWNER = "PILOT // EXPEDITION NAVIGATION";
export const OCCLUDED_FOLD_TRUTHFUL_WORKSPACE_LABEL = "The course validator checks the approved Python source shape and derives the bounded ledger from session-only sanitized replicas. It does not execute arbitrary Python, read a real process environment or secret, or contact a live service.";

export const occludedFoldModalities = Object.freeze([
  "pointer", "touch", "keyboard_enter", "keyboard_space", "switch", "speech", "screen_reader",
]);

export const occludedFoldActions = Object.freeze({
  route: "PILOT // SURVEY OCCLUDED FOLD",
  inspect: "BEGIN EXPOSED-EDGE SURVEY",
  continuities: "TRACE THREE NEAR MARGINS",
  association: "RECORD BOUNDED CORRESPONDENCES",
  difference: "RECORD UNMATCHED EXPOSED EVIDENCE",
  order: "RECORD UNRANKED CANDIDATES",
  junction: "RECORD UNAVAILABLE OUTER MARGIN",
  stewardship: "RECORD LAYERED EDGE STEWARDSHIP",
  pythonPrimary: "VALIDATE PRIMARY BOUNDED LEDGER SOURCE",
  pythonTrace: "SUBMIT CLOSED-NOTE ENVIRONMENT TRACE",
  pythonTransfer: "VALIDATE FRESH TRANSFER SOURCE",
  visionPrimary: "SUBMIT PROMPT-BOUNDARY PRIMARY",
  visionRetrieval: "SUBMIT CLOSED-NOTE PROMPT RETRIEVAL",
  visionTransfer: "SUBMIT FRESH PROMPT TRANSFER",
  capabilityBoundary: "SUBMIT SYSTEM AND USER RESPONSIBILITY EXPLANATION",
  relationBoundary: "SUBMIT TRUTH AND AUTHORITY LIMIT EXPLANATION",
  retry: "RETRY WITH A BLANK FORM",
  review: "REVIEW THREE SEPARATELY ATTRIBUTABLE RECORDS",
  save: "SAVE BOUNDED EDGE LEDGER",
  cancelSave: "CANCEL LOCAL SAVE",
  retrySave: "RETRY LOCAL SAVE",
  notation: "LOOK AT OUTWARD CONTINUATION",
  returnInterval: "RETURN TO OFFSET REACH",
  returnThreshold: "RETURN TO CITY THRESHOLD",
});

export const occludedFoldObservationIds = Object.freeze([
  "three_near_margins",
  "bounded_signature_correspondences",
  "unmatched_exposed_record",
  "ambiguous_candidate_record",
  "unavailable_outer_margin",
  "layered_edge_stewardship",
]);

export const occludedFoldWorldPlateIds = Object.freeze({
  panorama: "SC-10-OCCLUDED-FOLD-PANORAMA",
  detail: "SC-10-OCCLUDED-FOLD-EXPOSED-EDGE-DETAIL",
  predecessor: "SC-09-PANORAMA-MASTER",
});

export const occludedFoldRegions = Object.freeze({
  three_near_margins: Object.freeze({ id: "sc10-region-three-near-margins", master: "panorama", x: 0.03, y: 0.05, width: 0.94, height: 0.86 }),
  bounded_signature_correspondences: Object.freeze({ id: "sc10-region-bounded-correspondences", master: "panorama", x: 0.08, y: 0.12, width: 0.84, height: 0.68 }),
  unmatched_exposed_record: Object.freeze({ id: "sc10-region-unmatched-record", master: "detail", x: 0.04, y: 0.1, width: 0.28, height: 0.7 }),
  ambiguous_candidate_record: Object.freeze({ id: "sc10-region-ambiguous-record", master: "detail", x: 0.34, y: 0.12, width: 0.28, height: 0.66 }),
  unavailable_outer_margin: Object.freeze({ id: "sc10-region-unavailable-margin", master: "detail", x: 0.64, y: 0.08, width: 0.32, height: 0.72 }),
  layered_edge_stewardship: Object.freeze({ id: "sc10-region-layered-stewardship", master: "detail", x: 0.08, y: 0.58, width: 0.84, height: 0.34 }),
});

export const occludedFoldPythonTraceAnswers = Object.freeze({
  configurationSource: "one_allowlisted_nonsecret_environment_name",
  environmentRead: "exactly_one_os_environ_get",
  requiredMode: "mode_must_equal_bounded",
  secretBoundary: "no_secret_name_or_value_is_read_stored_or_output",
  environmentBoundary: "process_environment_remains_unchanged",
  recordDerivation: "ledger_is_derived_only_from_unchanged_supplied_records",
  evidenceClasses: "correspondence_unmatched_ambiguous_unavailable_remain_separate",
  unknownLimits: "identity_topology_continuity_transformation_cause_purpose_remain_none",
});

export const occludedFoldExplanationAnswers = Object.freeze({
  capabilityBoundary: "system_prompts_carry_persistent_role_rules_boundaries_and_output_contracts_while_user_prompts_carry_the_current_task_and_supplied_input",
  relationBoundary: "prompt_quality_neither_proves_output_truth_nor_authorizes_live_action",
});

const pythonChecks = Object.freeze([...contract.python_contract.checks]);
const traceDimensions = Object.freeze(Object.keys(occludedFoldPythonTraceAnswers));
const visionDimensions = Object.freeze([...contract.ai901_contract.dimensions]);
const allowedMisconceptions = new Set(contract.ai901_contract.misconception_tags);
const ledgerKeys = Object.freeze(["mode", "correspondence", "unmatched", "ambiguous", "unavailable", "identity", "topology", "continuity", "transformation", "cause", "purpose"]);
const unsupportedLimitKeys = Object.freeze(["identity", "topology", "continuity", "transformation", "cause", "purpose"]);
const topKeys = Object.freeze([
  "version", "packetId", "mappingId", "checkpoint", "continuation",
  "cityStateDelta", "externalStateDelta", "successor", "retainedRp007Summary", "retainedRp008Summary", "edgeLedger", "evidence",
]);
const noteKeys = Object.freeze(["observations", "reconciliation"]);
const retainedSummaryKeys = Object.freeze([
  "checkpoint", "continuities", "association", "difference", "junction", "unity", "cause", "purpose",
]);
const evidenceKeys = Object.freeze([
  "packet_id", "mapping_id", "form", "skill_or_objective_id",
  "dimension_correctness", "attempt_count", "hint_level", "confidence",
  "misconception_tags", "mastery_status",
]);
const intentKeys = Object.freeze([
  "mode", "shellVersion", "controllerVersion", "packetId", "activeGroupId",
  "expectedOwner", "allowlistedActionId", "activationKind", "opaqueFreshEventToken",
]);
const forbiddenPython = /\b(?:open|print|eval|exec|system|remove|unlink|rmdir|requests|urlopen|fetch|connect|send|subprocess|socket|pip|install)\s*\(|\b(?:localStorage|sessionStorage|indexedDB|Worker|WebAssembly)\b/i;
const forbiddenSourcePattern = /\b(?:open|print|eval|exec|system|popen|remove|unlink|rmdir|requests|urlopen|fetch|connect|send|write_text|read_text|subprocess|socket|pip|install)\s*\(|\b(?:localStorage|sessionStorage|indexedDB|Worker|WebAssembly)\b/i;

const actionObservation = Object.freeze({
  [occludedFoldActions.continuities]: occludedFoldObservationIds[0],
  [occludedFoldActions.association]: occludedFoldObservationIds[1],
  [occludedFoldActions.difference]: occludedFoldObservationIds[2],
  [occludedFoldActions.order]: occludedFoldObservationIds[3],
  [occludedFoldActions.junction]: occludedFoldObservationIds[4],
  [occludedFoldActions.stewardship]: occludedFoldObservationIds[5],
});
const groups = Object.freeze({
  of00_orientation: ["OF-00 ARRIVE + ORIENT", "SYSTEM // EXPEDITION LEDGER", "of00-heading", [occludedFoldActions.inspect]],
  of10_observations: ["OF-10 SURVEY EXPOSED EDGES", "PILOT // EDGE SURVEY", "of10-heading", Object.keys(actionObservation)],
  of20_python_primary: ["OF-20 PYTHON PRIMARY", "PILOT // COURSE WORK", "of20-python-primary-heading", [occludedFoldActions.pythonPrimary], "BUILDER WORK // SANITIZED REPLICA"],
  of20_python_trace: ["OF-20 PYTHON TRACE", "PILOT // COURSE WORK", "of20-python-trace-heading", [occludedFoldActions.pythonTrace], "TEACHER / COURSE // CLOSED-NOTE TRACE"],
  of20_python_transfer: ["OF-20 PYTHON TRANSFER", "PILOT // COURSE WORK", "of20-python-transfer-heading", [occludedFoldActions.pythonTransfer], "BUILDER WORK // SANITIZED REPLICA"],
  of20_prompt_primary: ["OF-20 PROMPT BOUNDARY PRIMARY", "PILOT // COURSE WORK", "of20-prompt-primary-heading", [occludedFoldActions.visionPrimary], "TEACHER // COURSE"],
  of20_prompt_retrieval: ["OF-20 PROMPT BOUNDARY RETRIEVAL", "PILOT // COURSE WORK", "of20-prompt-retrieval-heading", [occludedFoldActions.visionRetrieval], "TEACHER // COURSE"],
  of20_prompt_transfer: ["OF-20 PROMPT BOUNDARY TRANSFER", "PILOT // COURSE WORK", "of20-prompt-transfer-heading", [occludedFoldActions.visionTransfer], "TEACHER // COURSE"],
  of20_system_user_explanation: ["OF-20 SYSTEM AND USER RESPONSIBILITY", "PILOT // COURSE WORK", "of20-system-user-explanation-heading", [occludedFoldActions.capabilityBoundary], "TEACHER // COURSE"],
  of20_truth_authority_explanation: ["OF-20 TRUTH AND AUTHORITY LIMIT", "PILOT // COURSE WORK", "of20-truth-authority-explanation-heading", [occludedFoldActions.relationBoundary], "TEACHER // COURSE"],
  of20_recovery: ["OF-20 RECOVERY", "SYSTEM // RECOVERY", "of20-recovery-heading", [occludedFoldActions.retry]],
  of20_review: ["OF-20 RECONCILE + SAVE", "PILOT // EXPEDITION REVIEW", "of20-review-heading", [occludedFoldActions.review]],
  of20_save: ["OF-20 LOCAL SAVE", "PILOT // EXPEDITION LEDGER", "of20-save-heading", [occludedFoldActions.save, occludedFoldActions.cancelSave]],
  of20_transaction: ["OF-20 LOCAL TRANSACTION", "SYSTEM // EXPEDITION LEDGER", "of20-transaction-heading", []],
  of20_save_recovery: ["OF-20 VERIFIED ROLLBACK", "SYSTEM // RECOVERY", "of20-save-recovery-heading", [occludedFoldActions.retrySave]],
  of20_rollback_unverified: ["OF-20 TRANSACTION HOLD", "SYSTEM // RECOVERY", "of20-rollback-unverified-heading", []],
  of30_restore: ["OF-30 VERIFY + RETURN", "SYSTEM // RESTORED EXPEDITION NOTES", "of30-restore-heading", [occludedFoldActions.notation]],
});

const learningGroups = Object.freeze([
  "of20_python_primary", "of20_python_trace", "of20_python_transfer",
  "of20_prompt_primary", "of20_prompt_retrieval", "of20_prompt_transfer",
  "of20_system_user_explanation", "of20_truth_authority_explanation",
]);

function clone(value) {
  return value == null ? value : JSON.parse(JSON.stringify(value));
}

function exactKeys(value, expected) {
  return value && typeof value === "object" && !Array.isArray(value)
    && Object.keys(value).length === expected.length
    && expected.every((key, index) => Object.keys(value)[index] === key);
}

function tokenOkay(value) {
  return typeof value === "string" && value.length >= 8 && value.length <= 160
    && !/\s|private|answer|credential/i.test(value);
}

function stableJson(value) {
  if (value === null || typeof value !== "object") return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(stableJson).join(",")}]`;
  return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(",")}}`;
}

function expectedRecords(form) {
  return form === "primary"
    ? [
      { record_id: "near_lamellar", status: "correspondence", candidates: ["far_lamellar"] },
      { record_id: "far_unmatched", status: "unmatched", candidates: [] },
      { record_id: "far_ambiguous", status: "ambiguous", candidates: ["near_lamellar", "near_filament"] },
      { record_id: "outer_margin", status: "unavailable", candidates: null },
    ]
    : [
      { record_id: "inlet_ribbed", status: "correspondence", candidates: ["outer_ribbed"] },
      { record_id: "outer_solitary", status: "unmatched", candidates: [] },
      { record_id: "outer_mixed", status: "ambiguous", candidates: ["inlet_ribbed", "inlet_beaded"] },
      { record_id: "sealed_edge", status: "unavailable", candidates: null },
    ];
}

function sourceRecords(source) {
  const match = source.match(/edge_records\s*=\s*(\[[\s\S]*?\n\])/);
  if (!match) return null;
  try { return JSON.parse(match[1].replace(/\bNone\b/g, "null").replace(/,\s*\]$/, "\n]")); } catch { return null; }
}

function expectedLedger(form) {
  const records = expectedRecords(form);
  return Object.freeze({
    mode: "bounded",
    correspondence: Object.freeze([records[0].record_id]),
    unmatched: Object.freeze([records[1].record_id]),
    ambiguous: Object.freeze({ [records[2].record_id]: Object.freeze([...records[2].candidates]) }),
    unavailable: Object.freeze([records[3].record_id]),
    identity: null, topology: null, continuity: null, transformation: null, cause: null, purpose: null,
  });
}

export function executeOccludedFoldWorkspace(form, learnerSource) {
  const spec = contract.python_contract.forms[form];
  if (!spec) throw new TypeError("form must be primary or transfer.");
  const source = String(learnerSource ?? "").replace(/\r/g, "");
  const imports = source.match(/^\s*(?:import\s+[^\n]+|from\s+[^\n]+\s+import\s+[^\n]+)\s*$/gm) ?? [];
  const gets = [...source.matchAll(/os\.environ\.get\(\s*["']([^"']+)["']\s*\)/g)];
  const exactGet = imports.length === 1 && imports[0].trim() === "import os" && gets.length === 1
    && gets[0][1] === spec.environment_name
    && new RegExp(`^\\s*mode\\s*=\\s*os\\.environ\\.get\\(\\s*["']${spec.environment_name}["']\\s*\\)\\s*$`, "m").test(source);
  const records = sourceRecords(source);
  const recordsExact = records != null && stableJson(records) === stableJson(expectedRecords(form));
  const keyMatches = [...source.matchAll(/^\s{4}["']([a-z_]+)["']\s*:/gm)].map((match) => match[1]);
  const keyShape = keyMatches.length === ledgerKeys.length && keyMatches.every((key, index) => key === ledgerKeys[index]);
  const classesExact = /"correspondence"\s*:\s*\[record\["record_id"\]\s+for\s+record\s+in\s+edge_records\s+if\s+record\["status"\]\s*==\s*"correspondence"\]/.test(source)
    && /"unmatched"\s*:\s*\[record\["record_id"\]\s+for\s+record\s+in\s+edge_records\s+if\s+record\["status"\]\s*==\s*"unmatched"\]/.test(source)
    && /"ambiguous"\s*:\s*\{record\["record_id"\]\s*:\s*record\["candidates"\]\s+for\s+record\s+in\s+edge_records\s+if\s+record\["status"\]\s*==\s*"ambiguous"\}/.test(source)
    && /"unavailable"\s*:\s*\[record\["record_id"\]\s+for\s+record\s+in\s+edge_records\s+if\s+record\["status"\]\s*==\s*"unavailable"\]/.test(source);
  const limitsExact = unsupportedLimitKeys.every((key) => new RegExp(`^[ \\t]*["']${key}["']\\s*:\\s*None\\s*,?\\s*$`, "m").test(source));
  const environmentMutation = /(?:os\.environ\s*=|os\.environ\s*\[|del\s+os\.environ|os\.putenv|os\.unsetenv)/.test(source);
  const secretNames = new Set(spec.secret_names_forbidden);
  const sourceStrings = [...source.matchAll(/["']([^"']+)["']/g)].map((match) => match[1]);
  const safe = !forbiddenSourcePattern.test(source) && !environmentMutation
    && !sourceStrings.some((value) => secretNames.has(value))
    && !/https?:|node:|child_process/i.test(source);
  const modeExact = new RegExp(`^\\s*if\\s+mode\\s*!=\\s*["']${spec.environment_value}["']\\s*:\\s*$`, "m").test(source)
    && new RegExp(`^[ \\t]+raise\\s+ValueError\\(["']${spec.environment_name} must be ${spec.environment_value}["']\\)\\s*$`, "m").test(source)
    && /^[ \t]*["']mode["']\s*:\s*mode\s*,?\s*$/m.test(source);
  const checks = Object.freeze({
    os_import_and_single_allowlisted_get: exactGet,
    nonsecret_mode_read_exactly: exactGet && modeExact,
    environment_unchanged: !environmentMutation,
    records_preserved_exactly: recordsExact,
    ledger_exact_keys: keyShape,
    four_evidence_classes_preserved: recordsExact && classesExact,
    unsupported_limits_remain_none: limitsExact,
    no_secret_file_network_output_or_external_operation: safe,
  });
  const failedCheckIds = pythonChecks.filter((id) => !checks[id]);
  return Object.freeze({
    form, checks, correctness: checks, score: pythonChecks.length - failedCheckIds.length, passed: failedCheckIds.length === 0,
    failed: Object.freeze(failedCheckIds), cleanupVerified: true,
    failedCheckIds: Object.freeze(failedCheckIds),
    derivedLedger: failedCheckIds.length === 0 ? expectedLedger(form) : null,
    environmentReads: gets.length,
    transientAudit: Object.freeze({ sourceRetained: false, environmentValuesRetained: false, recordsRetained: false, ledgerWorkRetained: false, cleared: true }),
  });
}

export function evaluateOccludedFoldPythonTrace(answers) {
  const correctness = Object.fromEntries(Object.entries(occludedFoldPythonTraceAnswers)
    .map(([dimension, expected]) => [dimension, answers?.[dimension] === expected]));
  const failed = Object.keys(correctness).filter((id) => !correctness[id]);
  return Object.freeze({ correctness: Object.freeze(correctness), failed: Object.freeze(failed), score: Object.values(correctness).filter(Boolean).length, passed: failed.length === 0 });
}

function misconceptionFor(item, dimension, answer) {
  if (allowedMisconceptions.has(answer)) return answer;
  if (dimension === "prompt_owner" && answer && answer !== item.prompt_owner) {
    return item.prompt_owner === "system_prompt" ? "persistent_safety_rule_belongs_only_in_current_request" : "current_input_belongs_in_persistent_rules";
  }
  if (dimension === "deciding_signal" && answer === "grounding_equals_guaranteed_truth") return "grounding_equals_guaranteed_truth";
  return null;
}

export function evaluateOccludedFoldPromptBoundary(form, answers) {
  const cases = contract.ai901_contract.forms[form];
  if (!cases) throw new TypeError("form must be primary, retrieval, or transfer.");
  const correctness = {};
  const tags = [];
  for (const item of cases) {
    for (const dimension of visionDimensions) {
      const supplied = answers?.[item.id]?.[dimension];
      const key = `${item.id}.${dimension}`;
      correctness[key] = supplied === item[dimension];
      if (!correctness[key]) {
        const tag = misconceptionFor(item, dimension, supplied);
        if (tag && !tags.includes(tag)) tags.push(tag);
      }
    }
  }
  return Object.freeze({
    form, correctness: Object.freeze(correctness), score: Object.values(correctness).filter(Boolean).length,
    passed: Object.values(correctness).every(Boolean), failed: Object.freeze(Object.keys(correctness).filter((id) => !correctness[id])), misconceptionTags: Object.freeze(tags),
  });
}

export const evaluateOccludedFoldVision = evaluateOccludedFoldPromptBoundary;
export const evaluateOccludedFoldInformationExtraction = evaluateOccludedFoldPromptBoundary;

function evidenceRecord(skill, form, correctness, attempts = 1) {
  return Object.freeze({
    packet_id: "RP-009",
    mapping_id: "RP009-A3-OCCLUDED-FOLD",
    form,
    skill_or_objective_id: skill,
    dimension_correctness: Object.freeze({ ...correctness }),
    attempt_count: Math.max(1, Math.min(99, attempts)),
    hint_level: 0,
    confidence: null,
    misconception_tags: Object.freeze([]),
    mastery_status: "mastered",
  });
}

function expectedEvidence() {
  return [
    ["PY-017", "primary", pythonChecks],
    ["PY-017", "trace", traceDimensions],
    ["PY-017", "transfer", pythonChecks],
    ...["primary", "retrieval", "transfer"].map((form) => [
      "RP009-PROMPT-BOUNDARY-01",
      form,
      contract.ai901_contract.forms[form].flatMap((item) => visionDimensions.map((dimension) => `${item.id}.${dimension}`)),
    ]),
    ["RP009-PROMPT-BOUNDARY-01", "system_user_boundary_explanation", ["system_user_boundary"]],
    ["RP009-PROMPT-BOUNDARY-01", "truth_authority_boundary_explanation", ["truth_authority_boundary"]],
  ];
}

function sanitizeEvidence(value) {
  if (!Array.isArray(value)) return [];
  const expected = expectedEvidence();
  const safe = [];
  for (let index = 0; index < Math.min(value.length, expected.length); index += 1) {
    const [skill, form, dimensions] = expected[index];
    const record = value[index];
    if (!exactKeys(record, evidenceKeys)
      || record.packet_id !== "RP-009" || record.mapping_id !== "RP009-A3-OCCLUDED-FOLD"
      || record.skill_or_objective_id !== skill || record.form !== form
      || record.mastery_status !== "mastered"
      || !exactKeys(record.dimension_correctness, dimensions)
      || !dimensions.every((id) => record.dimension_correctness[id] === true)
      || !Number.isInteger(record.attempt_count) || record.attempt_count < 1 || record.attempt_count > 99
      || !Number.isInteger(record.hint_level) || record.hint_level < 0 || record.hint_level > 3
      || ![null, "low", "medium", "high"].includes(record.confidence)
      || !Array.isArray(record.misconception_tags)
      || !record.misconception_tags.every((tag) => contract.ai901_contract.misconception_tags.includes(tag))) break;
    safe.push(Object.freeze({
      ...record,
      dimension_correctness: Object.freeze({ ...record.dimension_correctness }),
      misconception_tags: Object.freeze([...record.misconception_tags]),
    }));
  }
  return safe;
}

export function sanitizeOccludedFoldSave(value) {
  const retained = value?.retainedRp007Summary;
  const retainedOffset = value?.retainedRp008Summary;
  const ledger = value?.edgeLedger;
  const reconciliation = ledger?.reconciliation;
  const retainedOffsetKeys = ["checkpoint", "retained_local_association", "recurring_familiar_contact", "comparable_non_contact", "cross_family_contact", "unavailable_case", "universal", "exclusive", "unity", "cause", "purpose"];
  if (!exactKeys(value, topKeys)
    || value.version !== OCCLUDED_FOLD_RECORD_VERSION
    || value.packetId !== "RP-009" || value.mappingId !== "RP009-A3-OCCLUDED-FOLD"
    || value.checkpoint !== "occluded_fold_complete" || value.continuation !== "continuation"
    || value.cityStateDelta !== null || value.externalStateDelta !== null || value.successor !== null
    || !exactKeys(retained, retainedSummaryKeys)
    || retained.checkpoint !== "braided_verge_complete"
    || retained.continuities !== "distinct_visible_continuities"
    || retained.association !== "recurrent_exposed_association"
    || retained.difference !== "one_bounded_difference"
    || retained.junction !== "closed_junction_unavailable"
    || retained.unity !== null || retained.cause !== null || retained.purpose !== null
    || !exactKeys(retainedOffset, retainedOffsetKeys)
    || retainedOffset.checkpoint !== "offset_reach_complete"
    || retainedOffset.retained_local_association !== true
    || retainedOffset.recurring_familiar_contact !== 1 || retainedOffset.comparable_non_contact !== 1
    || retainedOffset.cross_family_contact !== 1 || retainedOffset.unavailable_case !== 1
    || [retainedOffset.universal, retainedOffset.exclusive, retainedOffset.unity, retainedOffset.cause, retainedOffset.purpose].some((item) => item !== null)
    || !exactKeys(ledger, noteKeys)
    || JSON.stringify(ledger.observations) !== JSON.stringify(occludedFoldObservationIds)
    || !exactKeys(reconciliation, ledgerKeys)
    || stableJson(reconciliation) !== stableJson(expectedLedger("primary"))) return null;
  const evidence = sanitizeEvidence(value.evidence);
  if (evidence.length !== 8 || value.evidence.length !== 8) return null;
  return Object.freeze({
    version: OCCLUDED_FOLD_RECORD_VERSION,
    packetId: "RP-009",
    mappingId: "RP009-A3-OCCLUDED-FOLD",
    checkpoint: "occluded_fold_complete",
    continuation: "continuation",
    cityStateDelta: null,
    externalStateDelta: null,
    successor: null,
    retainedRp007Summary: Object.freeze({
      checkpoint: "braided_verge_complete",
      continuities: "distinct_visible_continuities",
      association: "recurrent_exposed_association",
      difference: "one_bounded_difference",
      junction: "closed_junction_unavailable",
      unity: null,
      cause: null,
      purpose: null,
    }),
    retainedRp008Summary: Object.freeze({ ...retainedOffset }),
    edgeLedger: Object.freeze({ observations: Object.freeze([...occludedFoldObservationIds]), reconciliation: expectedLedger("primary") }),
    evidence: Object.freeze(evidence),
  });
}
export function createOccludedFoldStorageAdapter(storage, predecessor = {}) {
  const readRaw = (key) => {
    try { return storage?.getItem(key) ?? null; } catch { return null; }
  };
  const strictRead = () => {
    const raw = readRaw(OCCLUDED_FOLD_SAVE_KEY);
    if (raw === null) return null;
    try {
      const safe = sanitizeOccludedFoldSave(JSON.parse(raw));
      return safe && JSON.stringify(safe) === raw ? safe : null;
    } catch {
      return null;
    }
  };
  return Object.freeze({
    read: strictRead,
    commit(candidate) {
      const priorRaw = readRaw(OCCLUDED_FOLD_SAVE_KEY);
      const td008Before = readRaw(OFFSET_REACH_SAVE_KEY);
      const td007Before = readRaw(BRAIDED_VERGE_SAVE_KEY);
      const td006Before = readRaw(INTERVAL_WORKS_SAVE_KEY);
      const td005Before = readRaw(MANYFOLD_RETURN_SAVE_KEY);
      const td004Before = readRaw(THREE_CURRENT_REACH_SAVE_KEY);
      if (td008Before !== predecessor.offsetBytes
        || td007Before !== predecessor.braidedBytes
        || td006Before !== predecessor.intervalBytes
        || td005Before !== predecessor.manyfoldBytes
        || td004Before !== predecessor.threeCurrentBytes
        || !sanitizeOffsetReachSave(predecessor.offsetRecord)
        || JSON.stringify(predecessor.offsetRecord) !== predecessor.offsetBytes) {
        return Object.freeze({ status: "failed", reason: "predecessor_changed", rollbackVerified: true, predecessorBytesPreserved: false });
      }
      if (priorRaw !== null) {
        try {
          if (!sanitizeOccludedFoldSave(JSON.parse(priorRaw))) {
            return Object.freeze({ status: "failed", reason: "malformed_prior_record", rollbackVerified: true, predecessorBytesPreserved: true });
          }
        } catch {
          return Object.freeze({ status: "failed", reason: "malformed_prior_record", rollbackVerified: true, predecessorBytesPreserved: true });
        }
      }
      const safe = sanitizeOccludedFoldSave(candidate);
      if (!safe) return Object.freeze({ status: "failed", reason: "candidate_rejected", rollbackVerified: true, predecessorBytesPreserved: true });
      const serialized = JSON.stringify(safe);
      try {
        storage?.setItem(OCCLUDED_FOLD_SAVE_KEY, serialized);
        const raw = readRaw(OCCLUDED_FOLD_SAVE_KEY);
        const object = strictRead();
        if (raw !== serialized || JSON.stringify(object) !== serialized
          || readRaw(OFFSET_REACH_SAVE_KEY) !== td008Before
          || readRaw(BRAIDED_VERGE_SAVE_KEY) !== td007Before
          || readRaw(INTERVAL_WORKS_SAVE_KEY) !== td006Before
          || readRaw(MANYFOLD_RETURN_SAVE_KEY) !== td005Before
          || readRaw(THREE_CURRENT_REACH_SAVE_KEY) !== td004Before) throw new Error("read_back_mismatch");
        return Object.freeze({ status: "committed", value: object, raw, rollbackVerified: true, predecessorBytesPreserved: true });
      } catch (error) {
        try {
          if (priorRaw === null) storage?.removeItem(OCCLUDED_FOLD_SAVE_KEY);
          else storage?.setItem(OCCLUDED_FOLD_SAVE_KEY, priorRaw);
        } catch {
          return Object.freeze({ status: "failed", reason: "rollback_unverified", rollbackVerified: false, predecessorBytesPreserved: false });
        }
        const rollbackVerified = readRaw(OCCLUDED_FOLD_SAVE_KEY) === priorRaw
          && readRaw(OFFSET_REACH_SAVE_KEY) === td008Before
          && readRaw(BRAIDED_VERGE_SAVE_KEY) === td007Before
          && readRaw(INTERVAL_WORKS_SAVE_KEY) === td006Before
          && readRaw(MANYFOLD_RETURN_SAVE_KEY) === td005Before
          && readRaw(THREE_CURRENT_REACH_SAVE_KEY) === td004Before;
        return Object.freeze({
          status: "failed",
          reason: rollbackVerified ? (error?.message === "read_back_mismatch" ? "read_back_mismatch" : "local_write_unavailable") : "rollback_unverified",
          rollbackVerified,
          predecessorBytesPreserved: readRaw(OFFSET_REACH_SAVE_KEY) === td008Before
            && readRaw(BRAIDED_VERGE_SAVE_KEY) === td007Before
            && readRaw(INTERVAL_WORKS_SAVE_KEY) === td006Before
            && readRaw(MANYFOLD_RETURN_SAVE_KEY) === td005Before
            && readRaw(THREE_CURRENT_REACH_SAVE_KEY) === td004Before,
        });
      }
    },
  });
}

function publicForm(group) {
  if (group === "of20_python_primary" || group === "of20_python_transfer") {
    const form = group.endsWith("primary") ? "primary" : "transfer";
    return {
      kind: "python",
      form,
      fieldIds: ["learnerSource"],
      scaffold: {
        records: expectedRecords(form),
        environmentName: contract.python_contract.forms[form].environment_name,
        interpretationLimits: ["identity=None", "topology=None", "continuity=None", "transformation=None", "cause=None", "purpose=None"],
      },
      truthfulLabel: OCCLUDED_FOLD_TRUTHFUL_WORKSPACE_LABEL,
    };
  }
  if (group === "of20_python_trace") {
    return {
      kind: "trace",
      form: "trace",
      fieldIds: traceDimensions,
      options: Object.fromEntries(traceDimensions.map((id) => [
        id,
        [occludedFoldPythonTraceAnswers[id], `review_${id}_boundary`, `do_not_infer_${id}`],
      ])),
    };
  }
  if (["of20_prompt_primary", "of20_prompt_retrieval", "of20_prompt_transfer"].includes(group)) {
    const form = group.split("_").at(-1);
    const allSignals = [...new Set(Object.values(contract.ai901_contract.forms).flat().map((item) => item.deciding_signal))];
    const allOwners = ["system_prompt", "user_prompt"];
    return {
      kind: "vision",
      form,
      cases: contract.ai901_contract.forms[form].map(({ id, prompt }) => ({ id, prompt })),
      dimensions: visionDimensions,
      options: {
        prompt_owner: allOwners,
        deciding_signal: allSignals,
      },
    };
  }
  if (group === "of20_system_user_explanation" || group === "of20_truth_authority_explanation") {
    const kind = group === "of20_system_user_explanation" ? "capabilityBoundary" : "relationBoundary";
    return {
      kind: "explanation",
      form: kind,
      fieldIds: [kind],
      options: [
        occludedFoldExplanationAnswers[kind],
        `review_${kind}_without_world_inference`,
        `do_not_infer_${kind}`,
      ],
    };
  }
  return null;
}

function sceneForGroup(group, observationId) {
  const detail = group === "of10_observations"
    && ["unmatched_exposed_record", "ambiguous_candidate_record", "unavailable_outer_margin", "layered_edge_stewardship"].includes(observationId);
  if (detail) {
    return {
      sceneId: "SC-10",
      masterId: occludedFoldWorldPlateIds.detail,
      role: "SC-10-OCCLUDED-FOLD-EXPOSED-EDGE-DETAIL",
      cropId: observationId === "unmatched_exposed_record" ? "sc10-detail-unmatched"
        : observationId === "ambiguous_candidate_record" ? "sc10-detail-ambiguous"
          : observationId === "unavailable_outer_margin" ? "sc10-detail-unavailable" : "sc10-detail-stewardship",
    };
  }
  return {
    sceneId: "SC-10",
    masterId: occludedFoldWorldPlateIds.panorama,
    role: "SC-10-OCCLUDED-FOLD-PANORAMA",
    cropId: group === "of10_observations" ? "sc10-panorama-near-correspondence"
      : group.startsWith("of20_python") ? "sc10-panorama-work"
        : group.startsWith("of20_ai") || group.includes("explanation") ? "sc10-panorama-course"
          : group === "of30_restore" ? "sc10-panorama-restore"
            : group.startsWith("of20_") ? "sc10-panorama-review" : "sc10-panorama-orient",
  };
}

export function resolveOccludedFoldWorldScene(state) {
  if (state?.boardState === "SC-09" && state?.activeGroup === OCCLUDED_FOLD_ROUTE_GROUP) {
    return Object.freeze({ sceneId: "SC-09", masterId: occludedFoldWorldPlateIds.predecessor, role: "SC-09-PANORAMA-MASTER", cropId: "sc09-released" });
  }
  if (state?.boardState === "SC-10" && typeof state?.activeGroup === "string" && state.activeGroup.startsWith("of")) {
    return Object.freeze(sceneForGroup(state.activeGroup, state.sceneObservationId));
  }
  return null;
}

function stateFor(group, observations, evidence, extra = {}) {
  const [phase, owner, headingId, localActions, contentAttribution] = groups[group];
  const returnActions = group === "of20_transaction" ? []
    : [occludedFoldActions.returnInterval, occludedFoldActions.returnThreshold];
  return {
    shellVersion: OCCLUDED_FOLD_SHELL_VERSION,
    controllerVersion: OCCLUDED_FOLD_CONTROLLER_VERSION,
    packetId: "RP-009",
    mappingId: "RP009-A3-OCCLUDED-FOLD",
    phase,
    boardState: "SC-10",
    activeGroup: group,
    owner,
    contentAttribution: contentAttribution ?? null,
    headingId,
    statusRegionId: "occluded-fold-status",
    statusMessageId: extra.statusMessageId ?? `td009:${group}:ready`,
    statusMessage: extra.statusMessage ?? "The current bounded responsibility is ready. The world, route, authority, and external systems remain unchanged.",
    availableActions: [...localActions, ...returnActions],
    recordedObservationIds: [...observations],
    sceneObservationId: extra.sceneObservationId ?? null,
    form: publicForm(group),
    failedPublicIds: extra.failedPublicIds ?? [],
    repairTarget: extra.repairTarget ?? null,
    reviewRows: extra.reviewRows ?? [],
    note: extra.note ?? null,
    evidenceCount: evidence.length,
    privateWorkCleared: true,
    transientWorkCleared: true,
    temporaryWorkspaceCleared: true,
    cityStateDelta: null,
    externalStateDelta: null,
    successor: null,
    authorityGranted: false,
    externalActionEnabled: false,
    worldStateChanged: false,
    replayedEvents: [],
    focusIntent: { group, target: extra.focusTarget ?? ({
      of20_python_primary: "of20-python-primary-editor",
      of20_python_trace: "of20-python-trace-first",
      of20_python_transfer: "of20-python-transfer-editor",
      of20_prompt_primary: "of20-prompt-primary-first",
      of20_prompt_retrieval: "of20-prompt-retrieval-first",
      of20_prompt_transfer: "of20-prompt-transfer-first",
      of20_system_user_explanation: "of20-system-user-explanation-field",
      of20_truth_authority_explanation: "of20-truth-authority-explanation-field",
    }[group] ?? headingId) },
    predecessorBytesPreserved: extra.predecessorBytesPreserved,
    routeOpened: false,
  };
}

function exactIntent(intent, state) {
  return exactKeys(intent, intentKeys)
    && intent.mode === "campaign"
    && intent.shellVersion === OCCLUDED_FOLD_SHELL_VERSION
    && intent.controllerVersion === OCCLUDED_FOLD_CONTROLLER_VERSION
    && intent.packetId === "RP-009"
    && intent.activeGroupId === state.activeGroup
    && intent.expectedOwner === state.owner
    && state.availableActions.includes(intent.allowlistedActionId)
    && (occludedFoldModalities.includes(intent.activationKind)
      || (intent.allowlistedActionId === occludedFoldActions.cancelSave && intent.activationKind === "keyboard_escape"))
    && tokenOkay(intent.opaqueFreshEventToken);
}

export function createOccludedFoldIntent(state, action, activationKind, opaqueFreshEventToken) {
  return Object.freeze({
    mode: "campaign",
    shellVersion: OCCLUDED_FOLD_SHELL_VERSION,
    controllerVersion: OCCLUDED_FOLD_CONTROLLER_VERSION,
    packetId: "RP-009",
    activeGroupId: state?.activeGroup ?? null,
    expectedOwner: state?.owner ?? null,
    allowlistedActionId: action,
    activationKind,
    opaqueFreshEventToken,
  });
}

export function createOccludedFoldRouteIntent(action, activationKind, opaqueFreshEventToken) {
  return Object.freeze({
    mode: "campaign",
    shellVersion: OFFSET_REACH_SHELL_VERSION,
    controllerVersion: OFFSET_REACH_CONTROLLER_VERSION,
    packetId: "RP-008",
    activeGroupId: OCCLUDED_FOLD_ROUTE_GROUP,
    expectedOwner: OCCLUDED_FOLD_ROUTE_OWNER,
    allowlistedActionId: action,
    activationKind,
    opaqueFreshEventToken,
  });
}

function routeIntentOkay(intent) {
  return exactKeys(intent, intentKeys)
    && intent.mode === "campaign"
    && intent.shellVersion === OFFSET_REACH_SHELL_VERSION
    && intent.controllerVersion === OFFSET_REACH_CONTROLLER_VERSION
    && intent.packetId === "RP-008"
    && intent.activeGroupId === OCCLUDED_FOLD_ROUTE_GROUP
    && intent.expectedOwner === OCCLUDED_FOLD_ROUTE_OWNER
    && intent.allowlistedActionId === occludedFoldActions.route
    && occludedFoldModalities.includes(intent.activationKind)
    && tokenOkay(intent.opaqueFreshEventToken);
}

function buildCandidate(evidence) {
  return {
    version: OCCLUDED_FOLD_RECORD_VERSION,
    packetId: "RP-009",
    mappingId: "RP009-A3-OCCLUDED-FOLD",
    checkpoint: "occluded_fold_complete",
    continuation: "continuation",
    cityStateDelta: null,
    externalStateDelta: null,
    successor: null,
    retainedRp007Summary: {
      checkpoint: "braided_verge_complete",
      continuities: "distinct_visible_continuities",
      association: "recurrent_exposed_association",
      difference: "one_bounded_difference",
      junction: "closed_junction_unavailable",
      unity: null,
      cause: null,
      purpose: null,
    },
    retainedRp008Summary: {
      checkpoint: "offset_reach_complete", retained_local_association: true,
      recurring_familiar_contact: 1, comparable_non_contact: 1, cross_family_contact: 1,
      unavailable_case: 1, universal: null, exclusive: null, unity: null, cause: null, purpose: null,
    },
    edgeLedger: { observations: [...occludedFoldObservationIds], reconciliation: expectedLedger("primary") },
    evidence: clone(evidence),
  };
}

export function createOccludedFoldNormalController(options = {}) {
  const predecessor = sanitizeOffsetReachSave(options.predecessorRecord);
  const predecessorBytes = options.predecessorBytes ?? (predecessor ? JSON.stringify(predecessor) : null);
  const readPredecessorBytes = typeof options.readPredecessorBytes === "function" ? options.readPredecessorBytes : () => predecessorBytes;
  const braidedBytes = options.braidedBytes ?? options.readBraidedBytes?.() ?? null;
  const intervalBytes = options.intervalBytes ?? options.readIntervalBytes?.() ?? null;
  const manyfoldBytes = options.manyfoldBytes ?? options.readManyfoldBytes?.() ?? null;
  const threeCurrentBytes = options.threeCurrentBytes ?? options.readThreeCurrentBytes?.() ?? null;
  const readBraidedBytes = typeof options.readBraidedBytes === "function" ? options.readBraidedBytes : () => braidedBytes;
  const readIntervalBytes = typeof options.readIntervalBytes === "function" ? options.readIntervalBytes : () => intervalBytes;
  const readManyfoldBytes = typeof options.readManyfoldBytes === "function" ? options.readManyfoldBytes : () => manyfoldBytes;
  const readThreeCurrentBytes = typeof options.readThreeCurrentBytes === "function" ? options.readThreeCurrentBytes : () => threeCurrentBytes;
  const restored = sanitizeOccludedFoldSave(options.restoredRecord);
  const predecessorsStable = () => predecessor
    && predecessor.version === OFFSET_REACH_RECORD_VERSION
    && predecessorBytes === JSON.stringify(predecessor)
    && readPredecessorBytes() === predecessorBytes
    && readBraidedBytes() === braidedBytes
    && readIntervalBytes() === intervalBytes
    && readManyfoldBytes() === manyfoldBytes
    && readThreeCurrentBytes() === threeCurrentBytes;
  const acceptedEntry = options.mode !== "demo_tour"
    && (restored ? predecessorsStable() : routeIntentOkay(options.entryIntent) && predecessorsStable());
  const adapter = options.adapter;
  const tokens = new Set();
  if (acceptedEntry && options.entryIntent?.opaqueFreshEventToken) tokens.add(options.entryIntent.opaqueFreshEventToken);
  let observations = restored ? [...occludedFoldObservationIds] : [];
  let evidence = restored ? [...restored.evidence] : [];
  let draft = {};
  let attempts = {};
  let repairTarget = null;
  let record = restored;
  let lastObservation = null;
  let state = restored && acceptedEntry
    ? stateFor("of30_restore", observations, evidence, {
      note: restored.edgeLedger,
      statusMessageId: "td009:restore:no-replay",
      statusMessage: "The exact bounded note was restored heading-first. No route, arrival, observation, evaluator, explanation, save, sound, world, or return event replayed.",
    })
    : acceptedEntry
      ? stateFor("of00_orientation", [], [], {
        statusMessageId: "td009:of00_orientation:ready",
        statusMessage: "Occluded Fold is present without observation, learning, save, route, authority, or world effect.",
      })
      : {
        shellVersion: OFFSET_REACH_SHELL_VERSION,
        controllerVersion: OFFSET_REACH_CONTROLLER_VERSION,
        packetId: "RP-008",
        mappingId: "RP008-A3-OFFSET-REACH",
        phase: "OR-30 ROUTE CHOICE",
        boardState: "SC-09",
        activeGroup: OCCLUDED_FOLD_ROUTE_GROUP,
        owner: OCCLUDED_FOLD_ROUTE_OWNER,
        headingId: "td009-route-heading",
        statusRegionId: "offset-reach-status",
        statusMessageId: "td009:route:rejected:no-effect",
        statusMessage: "Occluded Fold was not entered; exact Offset Reach remains available and no future valid token was spent.",
        availableActions: [],
        privateWorkCleared: true,
        transientWorkCleared: true,
        cityStateDelta: null,
        externalStateDelta: null,
        successor: null,
        worldStateChanged: false,
        replayedEvents: [],
        focusIntent: { group: OCCLUDED_FOLD_ROUTE_GROUP, target: "td009-route-heading" },
      };

  const setGroup = (group, extra = {}) => {
    draft = {};
    state = stateFor(group, observations, evidence, {
      sceneObservationId: lastObservation,
      ...extra,
    });
    return clone(state);
  };
  const reject = (reason) => Object.freeze({ status: "rejected", reason, tokenConsumed: false, state: clone(state) });
  const fail = (target, failed, cleanupFailure = false) => {
    attempts[target] = (attempts[target] ?? 0) + 1;
    repairTarget = target;
    return Object.freeze({
      status: cleanupFailure ? "workspace_cleanup_failed" : "remediation_required",
      answerIncluded: false,
      failedIds: Object.freeze([...failed]),
      evidenceGranted: false,
      state: setGroup("of20_recovery", {
        failedPublicIds: failed,
        repairTarget: target,
      focusTarget: "of20-recovery-heading",
        statusMessageId: cleanupFailure ? "td009:workspace:cleanup-failed" : `td009:${target}:remediation`,
        statusMessage: cleanupFailure
          ? "The temporary workspace could not be verified as cleared. Private work was discarded; retry starts blank."
          : "Only the named public dimensions remain incomplete. Private work was discarded; guidance contains no answer and retry starts blank.",
      }),
    });
  };
  const finalize = (skill, form, correctness, next) => {
    const key = `${skill}:${form}`;
    attempts[key] = (attempts[key] ?? 0) + 1;
    evidence.push(evidenceRecord(skill, form, correctness, attempts[key]));
    return Object.freeze({
      status: `${form}_finalized`,
      evidenceGranted: true,
      state: setGroup(next, {
        statusMessageId: `td009:${next}:ready`,
        statusMessage: "The prior responsibility finalized independently. The next form is genuinely blank and the invariant world remains unchanged.",
      }),
    });
  };
  const safeReturn = (target) => {
    draft = {};
    observations = [];
    evidence = [];
    repairTarget = null;
    tokens.clear();
    return Object.freeze({
      status: target === "RP-008" ? "returned_to_offset_reach_write_free" : "returned_to_city_threshold_write_free",
      route: Object.freeze({
        target,
        continuation: "continuation",
        cityStateDelta: null,
        externalStateDelta: null,
        successor: null,
        authorityGranted: false,
        externalActionEnabled: false,
        writePerformed: false,
        replayedEvents: Object.freeze([]),
      }),
      state: clone(state),
    });
  };

  return Object.freeze({
    getState: () => clone(state),
    getRecord: () => clone(record),
    updateField(name, value) {
      if (!state.form || typeof name !== "string" || typeof value !== "string" || value.length > 24000) return reject("field_update_rejected");
      const form = state.form;
      if (form.kind === "python" && name === "learnerSource") draft.learnerSource = value;
      else if (form.kind === "trace" && form.fieldIds.includes(name) && form.options[name].includes(value)) draft[name] = value;
      else if (form.kind === "vision") {
        const [caseId, dimension] = name.split(".");
        if (!form.cases.some((item) => item.id === caseId)
          || !form.dimensions.includes(dimension)
          || !form.options[dimension].includes(value)) return reject("field_update_rejected");
        draft[caseId] = { ...(draft[caseId] ?? {}), [dimension]: value };
      } else if (form.kind === "explanation" && form.fieldIds.includes(name) && form.options.includes(value)) draft[name] = value;
      else return reject("field_update_rejected");
      return Object.freeze({ status: "field_updated_private", state: clone(state) });
    },
    dispatch(intent) {
      if (options.mode === "demo_tour") return reject("tour_route_closed");
      const token = intent?.opaqueFreshEventToken;
      if (!exactIntent(intent, state) || tokens.has(token)) return reject(tokens.has(token) ? "one_hit_only" : "intent_rejected");
      const action = intent.allowlistedActionId;
      if (action === occludedFoldActions.returnInterval) {
        if (!predecessorsStable()) return reject("predecessor_changed");
        tokens.add(token);
        return safeReturn("RP-008");
      }
      if (action === occludedFoldActions.returnThreshold) {
        tokens.add(token);
        return safeReturn("CITY_THRESHOLD");
      }
      if (!predecessorsStable()) return reject("predecessor_rejected");
      if (action === occludedFoldActions.inspect) {
        tokens.add(token);
        return Object.freeze({ status: "offset_evidence_visible_zero_credit", evidenceGranted: false, state: setGroup("of10_observations") });
      }
      if (Object.hasOwn(actionObservation, action)) {
        const id = actionObservation[action];
        lastObservation = id;
        if (observations.includes(id)) {
          tokens.add(token);
          state = {
            ...state,
            sceneObservationId: id,
            statusMessageId: `td009:observation:${id}:recorded`,
            statusMessage: `${observations.length} of 6 · ${id} · Recorded already; no new evidence, order, score, route, or world effect was created.`,
            focusIntent: {
              group: "of10_observations",
              target: "of10-observation-peer-heading",
            },
          };
          return Object.freeze({ status: "observation_recorded_idempotent", evidenceGranted: false, state: clone(state) });
        }
        tokens.add(token);
        observations.push(id);
        const complete = observations.length === 6;
        return Object.freeze({
          status: complete ? "observations_complete_zero_learning_credit" : "observation_recorded_zero_learning_credit",
          evidenceGranted: false,
          state: setGroup(complete ? "of20_python_primary" : "of10_observations", {
            sceneObservationId: id,
            focusTarget: complete ? "of20-python-primary-editor" : "of10-observation-peer-heading",
            statusMessageId: `td009:observation:${id}:recorded`,
            statusMessage: `${observations.length} of 6 · ${id} · One bounded physical fact was recorded within its interpretation limit. No course credit, unity, cause, access, authority, route, or response was created.`,
          }),
        });
      }
      const submit = {
        [occludedFoldActions.pythonPrimary]: ["PY-017", "primary", "of20_python_trace", "of20_python_primary"],
        [occludedFoldActions.pythonTrace]: ["PY-017", "trace", "of20_python_transfer", "of20_python_trace"],
        [occludedFoldActions.pythonTransfer]: ["PY-017", "transfer", "of20_prompt_primary", "of20_python_transfer"],
        [occludedFoldActions.visionPrimary]: ["RP009-PROMPT-BOUNDARY-01", "primary", "of20_prompt_retrieval", "of20_prompt_primary"],
        [occludedFoldActions.visionRetrieval]: ["RP009-PROMPT-BOUNDARY-01", "retrieval", "of20_prompt_transfer", "of20_prompt_retrieval"],
        [occludedFoldActions.visionTransfer]: ["RP009-PROMPT-BOUNDARY-01", "transfer", "of20_system_user_explanation", "of20_prompt_transfer"],
      };
      if (Object.hasOwn(submit, action)) {
        const [skill, form, next, current] = submit[action];
        let firstBlank = null;
        if (skill === "PY-017" && form !== "trace" && !String(draft.learnerSource ?? "").trim()) {
          firstBlank = form === "primary" ? "of20-python-primary-editor" : "of20-python-transfer-editor";
        } else if (skill === "PY-017" && form === "trace") {
          firstBlank = traceDimensions.some((id) => !draft[id]) ? "of20-python-trace-first" : null;
        } else if (skill === "RP009-PROMPT-BOUNDARY-01") {
          const complete = contract.ai901_contract.forms[form].every((item) => visionDimensions.every((dimension) => Boolean(draft[item.id]?.[dimension])));
          firstBlank = complete ? null : `of20-prompt-${form}-first`;
        }
        if (firstBlank) {
          state = {
            ...state,
            statusMessageId: `td009:${current}:required`,
            statusMessage: "Complete the first blank labelled field before submitting. No token, evidence, or answer was consumed.",
            focusIntent: { group: current, target: firstBlank },
          };
          return Object.freeze({ status: "required_field_missing", evidenceGranted: false, tokenConsumed: false, state: clone(state) });
        }
        const result = skill === "PY-017"
          ? form === "trace"
            ? evaluateOccludedFoldPythonTrace(draft)
            : executeOccludedFoldWorkspace(form, draft.learnerSource, options.workspaceOptions?.[form])
          : evaluateOccludedFoldVision(form, draft);
        tokens.add(token);
        if (!result.passed) return fail(`${skill}:${form}`, result.failed, result.cleanupVerified === false);
        return finalize(skill, form, result.correctness, next);
      }
      if (action === occludedFoldActions.capabilityBoundary || action === occludedFoldActions.relationBoundary) {
        const kind = action === occludedFoldActions.capabilityBoundary ? "capabilityBoundary" : "relationBoundary";
        const form = kind === "capabilityBoundary" ? "system_user_boundary_explanation" : "truth_authority_boundary_explanation";
        const dimension = kind === "capabilityBoundary" ? "system_user_boundary" : "truth_authority_boundary";
        if (!draft[kind]) {
          state = {
            ...state,
            statusMessageId: `td009:${state.activeGroup}:required`,
            statusMessage: "Complete the blank labelled explanation before submitting. No token, evidence, or answer was consumed.",
            focusIntent: { group: state.activeGroup, target: kind === "capabilityBoundary" ? "of20-system-user-explanation-field" : "of20-truth-authority-explanation-field" },
          };
          return Object.freeze({ status: "required_field_missing", evidenceGranted: false, tokenConsumed: false, state: clone(state) });
        }
        tokens.add(token);
        if (draft[kind] !== occludedFoldExplanationAnswers[kind]) {
          return fail(`RP009-PROMPT-BOUNDARY-01:${form}`, [dimension]);
        }
        return finalize(
          "RP009-PROMPT-BOUNDARY-01",
          form,
          { [dimension]: true },
          kind === "capabilityBoundary" ? "of20_truth_authority_explanation" : "of20_review",
        );
      }
      if (action === occludedFoldActions.retry) {
        tokens.add(token);
        const target = repairTarget;
        repairTarget = null;
        const index = expectedEvidence().findIndex(([skill, form]) => `${skill}:${form}` === target);
        if (index < 0) return reject("repair_target_missing");
        return Object.freeze({
          status: "fresh_blank_retry_visible",
          state: setGroup(learningGroups[index], {
            statusMessageId: `td009:${learningGroups[index]}:retry-blank`,
            statusMessage: "A wholly blank retry is ready. No source, report, result, choice, case answer, or feedback carried forward.",
          }),
        });
      }
      if (action === occludedFoldActions.review) {
        if (observations.length !== 6 || evidence.length !== 8) {
          return Object.freeze({
            status: "review_incomplete_recovered",
            evidenceGranted: false,
            state: setGroup(observations.length !== 6 ? "of10_observations" : learningGroups[evidence.length]),
          });
        }
        tokens.add(token);
        const reviewRows = [
          { id: "retained_rp007_scope", scope: "RP-007", owner: "Retained RP-007 summary", state: "Read-only // separately attributable" },
          { id: "retained_rp008_scope", scope: "RP-008", owner: "Retained RP-008 summary", state: "Read-only // separately attributable" },
          { id: "candidate_rp009_scope", scope: "RP-009", owner: "Candidate RP-009 edge ledger", state: "Read-only // separately attributable" },
          ...occludedFoldObservationIds.map((id) => ({ id, scope: "RP-009", owner: `PILOT // ${id}`, state: "Complete" })),
          ...expectedEvidence().map(([skill, form]) => ({ id: `${skill}:${form}`, scope: "RP-009", owner: `${skill} / ${form}`, state: "Complete" })),
        ];
        return Object.freeze({
          status: "bounded_review_visible_zero_credit",
          evidenceGranted: false,
          state: setGroup("of20_save", {
            reviewRows,
            statusMessageId: "td009:review:ready",
            statusMessage: "The retained RP-007 summary, retained RP-008 summary, and candidate RP-009 edge ledger are ordered, separate, and read-only. Six observations and eight learning records are complete; the strict bounded preview is ready for an explicit local-only save.",
          }),
        });
      }
      if (action === occludedFoldActions.retrySave) {
        tokens.add(token);
        return Object.freeze({ status: "save_retry_ready_after_verified_rollback", state: setGroup("of20_save") });
      }
      if (action === occludedFoldActions.cancelSave) {
        tokens.add(token);
        return Object.freeze({
          status: "save_cancelled_write_free",
          evidenceGranted: false,
          writePerformed: false,
          state: setGroup("of20_review", {
            statusMessageId: "td009:save:cancelled-write-free",
            statusMessage: "The local save confirmation was cancelled without a write. All independent finalized evidence remains available for review.",
          }),
        });
      }
      if (action === occludedFoldActions.save) {
        tokens.add(token);
        state = stateFor("of20_transaction", observations, evidence);
        const result = adapter?.commit(buildCandidate(evidence))
          ?? { status: "failed", reason: "local_storage_unavailable", rollbackVerified: true, predecessorBytesPreserved: true };
        const stable = predecessorsStable();
        const safe = result.status === "committed" ? sanitizeOccludedFoldSave(result.value) : null;
        if (!safe || !stable) {
          const rollbackVerified = result.rollbackVerified === true && stable;
          return Object.freeze({
            status: rollbackVerified ? "save_failed_rollback_verified" : "save_failed_rollback_unverified",
            reason: stable ? result.reason ?? "read_back_rejected" : "predecessor_changed",
            rollbackVerified,
            predecessorBytesPreserved: stable,
            state: setGroup(rollbackVerified ? "of20_save_recovery" : "of20_rollback_unverified", {
              predecessorBytesPreserved: stable,
              statusMessageId: rollbackVerified
                ? `td009:save:${result.reason ?? "failed"}:rolled-back`
                : "td009:save:rollback-unverified",
              statusMessage: rollbackVerified
                ? "The candidate did not replace the prior verified record or verified absence. Rollback and predecessor bytes were verified; retry starts without private work."
                : "Rollback or predecessor equality could not be verified. Progression is held and only safe returns remain.",
            }),
          });
        }
        record = safe;
        evidence = [...safe.evidence];
        observations = [...occludedFoldObservationIds];
        return Object.freeze({
          status: "save_committed_verified_restore",
          record: clone(record),
          predecessorBytesPreserved: true,
          state: setGroup("of30_restore", {
            note: record.edgeLedger,
            statusMessageId: "td009:save:committed",
            statusMessage: "Exact raw and strict object read-back passed while TD-008 through TD-004 bytes remained unchanged. No earlier event replayed and no route opened.",
          }),
        });
      }
      if (action === occludedFoldActions.notation) {
        tokens.add(token);
        state = {
          ...state,
          statusMessageId: "td009:of30_restore:destinationless-notation",
          statusMessage: "A destinationless local notation was recorded with destination=null and routeOpened=false. It grants no evidence and opens nothing.",
          focusIntent: { group: "of30_restore", target: "of30-restore-heading" },
        };
        return Object.freeze({ status: "destinationless_notation_zero_evidence", evidenceGranted: false, routeOpened: false, state: clone(state) });
      }
      return reject("action_unavailable");
    },
  });
}

export const occludedFoldPublicContract = Object.freeze({
  observationIds: occludedFoldObservationIds,
  minimumTargetCssPx: 44,
  offlineOnly: true,
  noAuthority: true,
  noExamGuarantee: true,
  imageRoles: Object.freeze(["SC-10-OCCLUDED-FOLD-PANORAMA", "SC-10-OCCLUDED-FOLD-EXPOSED-EDGE-DETAIL"]),
  layouts: Object.freeze(["1920x1080", "1366x768", "390x844", "768x900-effective-200"]),
});
