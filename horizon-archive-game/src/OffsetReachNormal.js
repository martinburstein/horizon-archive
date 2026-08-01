import contract from "../../curriculum/readiness/RP-008/contract.json" with { type: "json" };
import {
  BRAIDED_VERGE_CONTROLLER_VERSION,
  BRAIDED_VERGE_RECORD_VERSION,
  BRAIDED_VERGE_SAVE_KEY,
  BRAIDED_VERGE_SHELL_VERSION,
  sanitizeBraidedVergeSave,
} from "./BraidedVergeNormal.js";
import {
  INTERVAL_WORKS_SAVE_KEY,
} from "./IntervalWorksNormal.js";
import { MANYFOLD_RETURN_SAVE_KEY } from "./ManyfoldReturnNormal.js";
import { THREE_CURRENT_REACH_SAVE_KEY } from "./ThreeCurrentReachNormal.js";

export const OFFSET_REACH_SHELL_VERSION = "SS-RP008-OFFSET-REACH-v1";
export const OFFSET_REACH_CONTROLLER_VERSION = "rp008.offset-reach-controller.v1";
export const OFFSET_REACH_ROUTE_CONTROLLER_VERSION = "td008.route-controller.v1";
export const OFFSET_REACH_RECORD_VERSION = "rp008.offset-reach-save.v1";
export const OFFSET_REACH_SAVE_KEY = "horizon-archive-rp008-offset-reach-save-v1";
export const OFFSET_REACH_ROUTE_GROUP = "bv30_offset_reach_route_choice";
export const OFFSET_REACH_ROUTE_OWNER = "PILOT // EXPEDITION NAVIGATION";
export const OFFSET_REACH_TRUTHFUL_WORKSPACE_LABEL = "The course validator checks the approved Python source shape and performs the supplied JSON decode, bounded derivation, sorted encode, and decode plan over session-only sanitized replicas. It does not execute arbitrary Python or contact a live service.";

export const offsetReachModalities = Object.freeze([
  "pointer", "touch", "keyboard_enter", "keyboard_space", "switch", "speech", "screen_reader",
]);

export const offsetReachActions = Object.freeze({
  route: "PILOT // FOLLOW EXPEDITION-MARKED ADJACENT SURVEY TO OFFSET REACH",
  inspect: "ORIENT TO OFFSET REACH",
  continuities: "TRACE FAMILIAR MATERIAL CONTINUITIES",
  association: "INSPECT RECURRING FAMILIAR CONTACT",
  difference: "INSPECT COMPARABLE OPEN PASSAGE",
  order: "INSPECT CROSS-FAMILY CONTACT",
  junction: "INSPECT UNAVAILABLE CASE BOUNDARY",
  stewardship: "INSPECT LAYERED STEWARDSHIP",
  pythonPrimary: "VALIDATE BOUNDED JSON PLAN",
  pythonTrace: "SUBMIT CLOSED-NOTE JSON TRACE",
  pythonTransfer: "VALIDATE FRESH JSON PLAN",
  visionPrimary: "SUBMIT INFORMATION-EXTRACTION PRIMARY",
  visionRetrieval: "SUBMIT CLOSED-NOTE RETRIEVAL",
  visionTransfer: "SUBMIT FRESH TRANSFER",
  capabilityBoundary: "SUBMIT TECHNIQUE-SELECTION EXPLANATION",
  relationBoundary: "SUBMIT INFERENCE-LIMIT EXPLANATION",
  retry: "RETRY WITH A BLANK FORM",
  review: "REVIEW INDEPENDENT RESPONSIBILITIES",
  save: "SAVE BOUNDED OFFSET NOTE",
  cancelSave: "CANCEL LOCAL SAVE",
  retrySave: "RETRY LOCAL SAVE",
  notation: "RECORD DESTINATIONLESS OFFSET",
  returnInterval: "RETURN TO BRAIDED VERGE",
  returnThreshold: "RETURN TO CITY THRESHOLD",
});

export const offsetReachObservationIds = Object.freeze([
  "familiar_continuity_trace",
  "recurring_familiar_contact",
  "comparable_non_contact",
  "cross_family_contact",
  "unavailable_case",
  "layered_stewardship",
]);

export const offsetReachWorldPlateIds = Object.freeze({
  panorama: "SC-09-PANORAMA-MASTER",
  detail: "SC-09-RELATION-DETAIL-MASTER",
  predecessor: "SC-08-PANORAMA-MASTER",
});

export const offsetReachRegions = Object.freeze({
  familiar_continuity_trace: Object.freeze({ id: "sc09-region-continuity", master: "panorama", x: 0.03, y: 0.05, width: 0.94, height: 0.86 }),
  recurring_familiar_contact: Object.freeze({ id: "sc09-region-recurring-contact", master: "detail", x: 0.04, y: 0.1, width: 0.28, height: 0.7 }),
  comparable_non_contact: Object.freeze({ id: "sc09-region-non-contact", master: "detail", x: 0.34, y: 0.12, width: 0.28, height: 0.66 }),
  cross_family_contact: Object.freeze({ id: "sc09-region-cross-family", master: "detail", x: 0.64, y: 0.08, width: 0.32, height: 0.72 }),
  unavailable_case: Object.freeze({ id: "sc09-region-unavailable", master: "panorama", x: 0.72, y: 0.16, width: 0.24, height: 0.58 }),
  layered_stewardship: Object.freeze({ id: "sc09-region-stewardship", master: "panorama", x: 0.08, y: 0.58, width: 0.84, height: 0.34 }),
});

export const offsetReachPythonTraceAnswers = Object.freeze({
  firstDecode: "records_equals_json_loads_records_json",
  deriveCounts: "five_sums_derive_only_supplied_records",
  retainedLocal: "retained_local_association_remains_true",
  unavailableBoundary: "null_relation_and_false_availability_remain_explicit",
  unsupportedLimits: "universal_exclusive_unity_cause_purpose_remain_none",
  deterministicEncode: "json_dumps_scope_summary_sort_keys_true",
  roundTrip: "restored_summary_equals_scope_summary",
  freshForm: "retry_uses_blank_form_without_carried_result",
});

export const offsetReachExplanationAnswers = Object.freeze({
  capabilityBoundary: "source_modality_and_requested_output_contract_select_the_extraction_technique",
  relationBoundary: "extracted_or_missing_values_do_not_establish_truth_universality_exclusivity_separation_equivalence_unity_cause_or_purpose",
});

const pythonChecks = Object.freeze([...contract.python_contract.checks]);
const traceDimensions = Object.freeze(Object.keys(offsetReachPythonTraceAnswers));
const visionDimensions = Object.freeze([...contract.ai901_contract.dimensions]);
const topKeys = Object.freeze([
  "version", "packetId", "mappingId", "checkpoint", "continuation",
  "cityStateDelta", "externalStateDelta", "successor", "retainedRp007Summary", "note", "evidence",
]);
const noteKeys = Object.freeze([
  "observations", "retained_local_association", "recurring_familiar_contact",
  "comparable_non_contact", "cross_family_contact", "unavailable_case",
  "universal", "exclusive", "unity", "cause", "purpose", "stewardship", "replicas",
]);
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

const actionObservation = Object.freeze({
  [offsetReachActions.continuities]: offsetReachObservationIds[0],
  [offsetReachActions.association]: offsetReachObservationIds[1],
  [offsetReachActions.difference]: offsetReachObservationIds[2],
  [offsetReachActions.order]: offsetReachObservationIds[3],
  [offsetReachActions.junction]: offsetReachObservationIds[4],
  [offsetReachActions.stewardship]: offsetReachObservationIds[5],
});
const groups = Object.freeze({
  or00_orientation: ["OR-00 ARRIVE + ORIENT", "SCENE // OFFSET REACH", "or00-orientation-heading", [offsetReachActions.inspect]],
  or10_observations: ["OR-10 INSPECT OFFSET EVIDENCE", "SCENE // SENSOR RECORD", "or10-observation-heading", Object.keys(actionObservation)],
  or20_python_primary: ["OR-20 PYTHON PRIMARY", "BUILDER WORK // SANITIZED REPLICA", "or20-python-primary-heading", [offsetReachActions.pythonPrimary]],
  or20_python_trace: ["OR-20 PYTHON TRACE", "TEACHER / COURSE // CLOSED-NOTE TRACE", "or20-python-trace-heading", [offsetReachActions.pythonTrace]],
  or20_python_transfer: ["OR-20 PYTHON TRANSFER", "BUILDER WORK // SANITIZED REPLICA", "or20-python-transfer-heading", [offsetReachActions.pythonTransfer]],
  or20_ai_primary: ["OR-20 INFORMATION EXTRACTION PRIMARY", "TEACHER / COURSE // INFORMATION EXTRACTION", "or20-ai-primary-heading", [offsetReachActions.visionPrimary]],
  or20_ai_retrieval: ["OR-20 INFORMATION EXTRACTION RETRIEVAL", "TEACHER / COURSE // CLOSED-NOTE RETRIEVAL", "or20-ai-retrieval-heading", [offsetReachActions.visionRetrieval]],
  or20_ai_transfer: ["OR-20 INFORMATION EXTRACTION TRANSFER", "TEACHER / COURSE // INFORMATION EXTRACTION", "or20-ai-transfer-heading", [offsetReachActions.visionTransfer]],
  or20_selection_explanation: ["OR-20 TECHNIQUE SELECTION", "TEACHER / COURSE // EXPLANATION", "or20-selection-explanation-heading", [offsetReachActions.capabilityBoundary]],
  or20_inference_explanation: ["OR-20 INFERENCE LIMIT", "TEACHER / COURSE // EXPLANATION", "or20-inference-explanation-heading", [offsetReachActions.relationBoundary]],
  or20_repair: ["OR-20 PRIVATE-SAFE RECOVERY", "SYSTEM // PRIVATE-SAFE RECOVERY", "or20-repair-heading", [offsetReachActions.retry]],
  or20_review: ["OR-20 REVISE SCOPE + SAVE", "PILOT // EXPEDITION REVIEW", "or20-review-heading", [offsetReachActions.review]],
  or20_save: ["OR-20 LOCAL SAVE", "PILOT // EXPEDITION RECORD", "or20-save-heading", [offsetReachActions.save, offsetReachActions.cancelSave]],
  or20_transaction: ["OR-20 LOCAL TRANSACTION", "SYSTEM // LOCAL TRANSACTION", "or20-transaction-heading", []],
  or20_save_recovery: ["OR-20 VERIFIED ROLLBACK", "SYSTEM // VERIFIED ROLLBACK", "or20-save-recovery-heading", [offsetReachActions.retrySave]],
  or20_rollback_unverified: ["OR-20 TRANSACTION HOLD", "SYSTEM // TRANSACTION HOLD", "or20-rollback-unverified-heading", []],
  or30_restore: ["OR-30 VERIFY + RETURN", "SYSTEM // RESTORED EXPEDITION NOTES", "or30-restore-heading", [offsetReachActions.notation]],
});

const learningGroups = Object.freeze([
  "or20_python_primary", "or20_python_trace", "or20_python_transfer",
  "or20_ai_primary", "or20_ai_retrieval", "or20_ai_transfer",
  "or20_selection_explanation", "or20_inference_explanation",
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
  const ids = form === "primary" ? ["local", "open", "cross", "closed"] : ["retained", "gap", "alternate", "sealed"];
  return ids.map((caseId, index) => ({
    case_id: caseId,
    relation: contract.python_contract.forms[form].relations[index],
    available: contract.python_contract.forms[form].relations[index] !== null,
  }));
}

function expectedRelationTokens(form) {
  return form === "primary"
    ? ["familiar_contact", "familiar_contact", "non_contact", "cross_family_contact"]
    : ["paired_interface", "paired_interface", "exposed_gap", "alternate_interface"];
}

export function executeOffsetReachWorkspace(form, learnerSource) {
  if (!contract.python_contract.forms[form]) throw new TypeError("form must be primary or transfer");
  let source = String(learnerSource ?? "").replace(/\r/g, "");
  const match = source.match(/records_json\s*=\s*"""([\s\S]*?)"""/);
  let decoded = null;
  try { decoded = match ? { text: match[1], records: JSON.parse(match[1]) } : null; } catch { decoded = null; }
  const loadCalls = source.match(/json\.loads\s*\(/g) ?? [];
  const dumpCalls = source.match(/json\.dumps\s*\(/g) ?? [];
  const sumCalls = source.match(/\bsum\s*\(/g) ?? [];
  const importCount = (source.match(/^\s*import\s+json\s*$/gm) ?? []).length;
  const allImports = source.match(/^\s*(?:import\s+[^\n]+|from\s+[^\n]+\s+import\s+[^\n]+)\s*$/gm) ?? [];
  const exactShape = importCount === 1 && allImports.length === 1 && loadCalls.length === 2
    && dumpCalls.length === 1 && sumCalls.length === 5
    && /json\.dumps\s*\(\s*scope_summary\s*,\s*sort_keys\s*=\s*True\s*\)/.test(source);
  const summaryKeys = ["retained_local_association", "recurring_familiar_contact", "comparable_non_contact",
    "cross_family_contact", "unavailable_case", "universal", "exclusive", "unity", "cause", "purpose"];
  const summaryBody = source.match(/scope_summary\s*=\s*\{([\s\S]*?)\}\s*summary_json/)?.[1] ?? "";
  const keyMatches = [...summaryBody.matchAll(/^\s{4}"([a-z_]+)"\s*:/gm)].map((item) => item[1]);
  const relations = expectedRelationTokens(form);
  const relationExpressions = [...source.matchAll(/sum\(record\["relation"\]\s*==\s*"([a-z_]+)"\s+for\s+record\s+in\s+records\)/g)].map((item) => item[1]);
  const recordsExact = decoded != null && stableJson(decoded.records) === stableJson(expectedRecords(form));
  const countsExact = relationExpressions.length === 4
    && relationExpressions.every((value, index) => value === relations[index])
    && new RegExp(`"retained_local_association"\\s*:\\s*sum\\(record\\["relation"\\]\\s*==\\s*"${relations[0]}"\\s+for\\s+record\\s+in\\s+records\\)\\s*==\\s*1\\s*,`).test(source)
    && new RegExp(`"recurring_familiar_contact"\\s*:\\s*sum\\(record\\["relation"\\]\\s*==\\s*"${relations[1]}"\\s+for\\s+record\\s+in\\s+records\\)\\s*,`).test(source)
    && new RegExp(`"comparable_non_contact"\\s*:\\s*sum\\(record\\["relation"\\]\\s*==\\s*"${relations[2]}"\\s+for\\s+record\\s+in\\s+records\\)\\s*,`).test(source)
    && new RegExp(`"cross_family_contact"\\s*:\\s*sum\\(record\\["relation"\\]\\s*==\\s*"${relations[3]}"\\s+for\\s+record\\s+in\\s+records\\)\\s*,`).test(source);
  const unavailableExact = /"unavailable_case"\s*:\s*sum\(record\["available"\]\s+is\s+False\s+for\s+record\s+in\s+records\)\s*,/.test(source)
    && decoded?.records?.at(-1)?.relation === null && decoded?.records?.at(-1)?.available === false;
  const limitsExact = ["universal", "exclusive", "unity", "cause", "purpose"]
    .every((key) => new RegExp(`"${key}"\\s*:\\s*None\\s*,?`).test(source));
  const roundTripExact = /^\s*records\s*=\s*json\.loads\(records_json\)\s*$/m.test(source)
    && /^\s*summary_json\s*=\s*json\.dumps\(scope_summary,\s*sort_keys=True\)\s*$/m.test(source)
    && /^\s*restored_summary\s*=\s*json\.loads\(summary_json\)\s*$/m.test(source);
  const safe = !forbiddenPython.test(source)
    && !/https?:|node:|child_process|process\.|os\.|sys\.|\\\\|\/[A-Za-z0-9_-]+\//i.test(source)
    && ["records_json", "records", "scope_summary", "summary_json", "restored_summary"]
      .every((name) => (source.match(new RegExp(`^\\s*${name}\\s*=`, "gm")) ?? []).length === 1);
  const correctness = Object.freeze({
    json_import_and_call_shape: exactShape,
    records_decoded_exactly: recordsExact,
    summary_exact_keys: keyMatches.length === summaryKeys.length && keyMatches.every((key, index) => key === summaryKeys[index]),
    counts_and_retained_local: countsExact,
    unavailable_case_preserved: unavailableExact,
    unsupported_limits_remain_none: limitsExact,
    round_trip_matches_sorted_json: roundTripExact && countsExact && unavailableExact && limitsExact,
    inputs_unchanged_and_no_forbidden_operations: safe && recordsExact,
  });
  const failed = pythonChecks.filter((id) => correctness[id] !== true);
  source = "";
  decoded = null;
  return Object.freeze({ form, correctness, failed: Object.freeze(failed), passed: failed.length === 0,
    cleanupVerified: true, audit: Object.freeze({ sessionMemoryOnly: true, decodedOnce: true, encodedOnce: true,
      decodedSerializationOnce: true, sourceRetained: false, recordsJsonRetained: false, summaryJsonRetained: false,
      workspaceEntryCountAfterFinally: 0, exposedPrivateContent: false }) });
}
export function evaluateOffsetReachPythonTrace(answers) {
  const correctness = Object.fromEntries(Object.entries(offsetReachPythonTraceAnswers)
    .map(([id, expected]) => [id, answers?.[id] === expected]));
  const failed = Object.keys(correctness).filter((id) => !correctness[id]);
  return Object.freeze({ correctness: Object.freeze(correctness), failed: Object.freeze(failed), passed: failed.length === 0 });
}

export function evaluateOffsetReachVision(form, answers) {
  const cases = contract.ai901_contract.forms[form];
  if (!cases) throw new TypeError("form must be primary, retrieval, or transfer");
  const correctness = {};
  for (const item of cases) for (const dimension of visionDimensions) {
    correctness[`${item.id}.${dimension}`] = answers?.[item.id]?.[dimension] === item[dimension];
  }
  const failed = Object.keys(correctness).filter((id) => !correctness[id]);
  const tags = [];
  for (const id of failed) {
    const [caseId, dimension] = id.split(".");
    const expected = cases.find((item) => item.id === caseId);
    const supplied = answers?.[caseId]?.[dimension];
    let tag = null;
    if (dimension === "technique" && expected?.technique === "ocr" && supplied === "field_extraction") tag = "ocr_equals_field_extraction";
    else if (dimension === "technique" && supplied === "ocr") tag = "all_extraction_is_ocr";
    else if (dimension === "technique" && expected?.technique === "multimodal_extraction") tag = "multimodal_equals_image_only";
    else if (dimension === "technique" && expected?.technique === "knowledge_mining") tag = "knowledge_mining_equals_field_mapping";
    else if (supplied === "scene_case_selects_technique") tag = "scene_case_selects_technique";
    if (tag && contract.ai901_contract.misconception_tags.includes(tag) && !tags.includes(tag)) tags.push(tag);
  }
  return Object.freeze({ form, correctness: Object.freeze(correctness), failed: Object.freeze(failed),
    misconceptionTags: Object.freeze(tags), passed: failed.length === 0 });
}

export const evaluateOffsetReachInformationExtraction = evaluateOffsetReachVision;

function evidenceRecord(skill, form, correctness, attempts = 1) {
  return Object.freeze({
    packet_id: "RP-008",
    mapping_id: "RP008-A3-OFFSET-REACH",
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
    ["PY-016", "primary", pythonChecks],
    ["PY-016", "trace", traceDimensions],
    ["PY-016", "transfer", pythonChecks],
    ...["primary", "retrieval", "transfer"].map((form) => [
      "RP008-INFORMATION-EXTRACTION-01",
      form,
      contract.ai901_contract.forms[form].flatMap((item) => visionDimensions.map((dimension) => `${item.id}.${dimension}`)),
    ]),
    ["RP008-INFORMATION-EXTRACTION-01", "selection_boundary_explanation", ["selection_boundary"]],
    ["RP008-INFORMATION-EXTRACTION-01", "inference_boundary_explanation", ["inference_boundary"]],
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
      || record.packet_id !== "RP-008" || record.mapping_id !== "RP008-A3-OFFSET-REACH"
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

export function sanitizeOffsetReachSave(value) {
  const retained = value?.retainedRp007Summary;
  const note = value?.note;
  if (!exactKeys(value, topKeys)
    || value.version !== OFFSET_REACH_RECORD_VERSION
    || value.packetId !== "RP-008" || value.mappingId !== "RP008-A3-OFFSET-REACH"
    || value.checkpoint !== "offset_reach_complete" || value.continuation !== "continuation"
    || value.cityStateDelta !== null || value.externalStateDelta !== null || value.successor !== null
    || !exactKeys(retained, retainedSummaryKeys)
    || retained.checkpoint !== "braided_verge_complete"
    || retained.continuities !== "distinct_visible_continuities"
    || retained.association !== "recurrent_exposed_association"
    || retained.difference !== "one_bounded_difference"
    || retained.junction !== "closed_junction_unavailable"
    || retained.unity !== null || retained.cause !== null || retained.purpose !== null
    || !exactKeys(note, noteKeys)
    || JSON.stringify(note.observations) !== JSON.stringify(offsetReachObservationIds)
    || note.retained_local_association !== true
    || note.recurring_familiar_contact !== 1 || note.comparable_non_contact !== 1
    || note.cross_family_contact !== 1 || note.unavailable_case !== 1
    || note.universal !== null || note.exclusive !== null || note.unity !== null
    || note.cause !== null || note.purpose !== null
    || note.stewardship !== "layered_stewardship_observed"
    || note.replicas !== "sanitized_precomputed_only") return null;
  const evidence = sanitizeEvidence(value.evidence);
  if (evidence.length !== 8 || value.evidence.length !== 8) return null;
  return Object.freeze({
    version: OFFSET_REACH_RECORD_VERSION,
    packetId: "RP-008",
    mappingId: "RP008-A3-OFFSET-REACH",
    checkpoint: "offset_reach_complete",
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
    note: Object.freeze({
      observations: Object.freeze([...offsetReachObservationIds]),
      retained_local_association: true,
      recurring_familiar_contact: 1,
      comparable_non_contact: 1,
      cross_family_contact: 1,
      unavailable_case: 1,
      universal: null,
      exclusive: null,
      unity: null,
      cause: null,
      purpose: null,
      stewardship: "layered_stewardship_observed",
      replicas: "sanitized_precomputed_only",
    }),
    evidence: Object.freeze(evidence),
  });
}
export function createOffsetReachStorageAdapter(storage, predecessor = {}) {
  const readRaw = (key) => {
    try { return storage?.getItem(key) ?? null; } catch { return null; }
  };
  const strictRead = () => {
    const raw = readRaw(OFFSET_REACH_SAVE_KEY);
    if (raw === null) return null;
    try {
      const safe = sanitizeOffsetReachSave(JSON.parse(raw));
      return safe && JSON.stringify(safe) === raw ? safe : null;
    } catch {
      return null;
    }
  };
  return Object.freeze({
    read: strictRead,
    commit(candidate) {
      const priorRaw = readRaw(OFFSET_REACH_SAVE_KEY);
      const td007Before = readRaw(BRAIDED_VERGE_SAVE_KEY);
      const td006Before = readRaw(INTERVAL_WORKS_SAVE_KEY);
      const td005Before = readRaw(MANYFOLD_RETURN_SAVE_KEY);
      const td004Before = readRaw(THREE_CURRENT_REACH_SAVE_KEY);
      if (td007Before !== predecessor.braidedBytes
        || td006Before !== predecessor.intervalBytes
        || td005Before !== predecessor.manyfoldBytes
        || td004Before !== predecessor.threeCurrentBytes
        || !sanitizeBraidedVergeSave(predecessor.braidedRecord)
        || JSON.stringify(predecessor.braidedRecord) !== predecessor.braidedBytes) {
        return Object.freeze({ status: "failed", reason: "predecessor_changed", rollbackVerified: true, predecessorBytesPreserved: false });
      }
      if (priorRaw !== null) {
        try {
          if (!sanitizeOffsetReachSave(JSON.parse(priorRaw))) {
            return Object.freeze({ status: "failed", reason: "malformed_prior_record", rollbackVerified: true, predecessorBytesPreserved: true });
          }
        } catch {
          return Object.freeze({ status: "failed", reason: "malformed_prior_record", rollbackVerified: true, predecessorBytesPreserved: true });
        }
      }
      const safe = sanitizeOffsetReachSave(candidate);
      if (!safe) return Object.freeze({ status: "failed", reason: "candidate_rejected", rollbackVerified: true, predecessorBytesPreserved: true });
      const serialized = JSON.stringify(safe);
      try {
        storage?.setItem(OFFSET_REACH_SAVE_KEY, serialized);
        const raw = readRaw(OFFSET_REACH_SAVE_KEY);
        const object = strictRead();
        if (raw !== serialized || JSON.stringify(object) !== serialized
          || readRaw(BRAIDED_VERGE_SAVE_KEY) !== td007Before
          || readRaw(INTERVAL_WORKS_SAVE_KEY) !== td006Before
          || readRaw(MANYFOLD_RETURN_SAVE_KEY) !== td005Before
          || readRaw(THREE_CURRENT_REACH_SAVE_KEY) !== td004Before) throw new Error("read_back_mismatch");
        return Object.freeze({ status: "committed", value: object, raw, rollbackVerified: true, predecessorBytesPreserved: true });
      } catch (error) {
        try {
          if (priorRaw === null) storage?.removeItem(OFFSET_REACH_SAVE_KEY);
          else storage?.setItem(OFFSET_REACH_SAVE_KEY, priorRaw);
        } catch {
          return Object.freeze({ status: "failed", reason: "rollback_unverified", rollbackVerified: false, predecessorBytesPreserved: false });
        }
        const rollbackVerified = readRaw(OFFSET_REACH_SAVE_KEY) === priorRaw
          && readRaw(BRAIDED_VERGE_SAVE_KEY) === td007Before
          && readRaw(INTERVAL_WORKS_SAVE_KEY) === td006Before
          && readRaw(MANYFOLD_RETURN_SAVE_KEY) === td005Before
          && readRaw(THREE_CURRENT_REACH_SAVE_KEY) === td004Before;
        return Object.freeze({
          status: "failed",
          reason: rollbackVerified ? (error?.message === "read_back_mismatch" ? "read_back_mismatch" : "local_write_unavailable") : "rollback_unverified",
          rollbackVerified,
          predecessorBytesPreserved: readRaw(BRAIDED_VERGE_SAVE_KEY) === td007Before
            && readRaw(INTERVAL_WORKS_SAVE_KEY) === td006Before
            && readRaw(MANYFOLD_RETURN_SAVE_KEY) === td005Before
            && readRaw(THREE_CURRENT_REACH_SAVE_KEY) === td004Before,
        });
      }
    },
  });
}

function publicForm(group) {
  if (group === "or20_python_primary" || group === "or20_python_transfer") {
    const form = group.endsWith("primary") ? "primary" : "transfer";
    return {
      kind: "python",
      form,
      fieldIds: ["learnerSource"],
      scaffold: {
        relations: [...contract.python_contract.forms[form].relations],
        interpretationLimits: ["universal=None", "exclusive=None", "unity=None", "cause=None", "purpose=None"],
      },
      truthfulLabel: OFFSET_REACH_TRUTHFUL_WORKSPACE_LABEL,
    };
  }
  if (group === "or20_python_trace") {
    return {
      kind: "trace",
      form: "trace",
      fieldIds: traceDimensions,
      options: Object.fromEntries(traceDimensions.map((id) => [
        id,
        [offsetReachPythonTraceAnswers[id], `review_${id}_boundary`, `do_not_infer_${id}`],
      ])),
    };
  }
  if (["or20_ai_primary", "or20_ai_retrieval", "or20_ai_transfer"].includes(group)) {
    const form = group.split("_").at(-1);
    const allSignals = [...new Set(Object.values(contract.ai901_contract.forms).flat().map((item) => item.deciding_signal))];
    const allTechniques = [...new Set(Object.values(contract.ai901_contract.forms).flat().map((item) => item.technique))];
    return {
      kind: "vision",
      form,
      cases: contract.ai901_contract.forms[form].map(({ id, prompt }) => ({ id, prompt })),
      dimensions: visionDimensions,
      options: {
        technique: allTechniques,
        deciding_signal: allSignals,
      },
    };
  }
  if (group === "or20_selection_explanation" || group === "or20_inference_explanation") {
    const kind = group === "or20_selection_explanation" ? "capabilityBoundary" : "relationBoundary";
    return {
      kind: "explanation",
      form: kind,
      fieldIds: [kind],
      options: [
        offsetReachExplanationAnswers[kind],
        `review_${kind}_without_world_inference`,
        `do_not_infer_${kind}`,
      ],
    };
  }
  return null;
}

function sceneForGroup(group, observationId) {
  const detail = group === "or10_observations"
    && ["recurring_familiar_contact", "comparable_non_contact", "cross_family_contact"].includes(observationId);
  if (detail) {
    return {
      sceneId: "SC-09",
      masterId: offsetReachWorldPlateIds.detail,
      role: "SC-09-RELATION-DETAIL-MASTER",
      cropId: observationId === "recurring_familiar_contact" ? "sc09-detail-recurring-contact"
        : observationId === "comparable_non_contact" ? "sc09-detail-non-contact"
          : "sc09-detail-cross-family",
    };
  }
  return {
    sceneId: "SC-09",
    masterId: offsetReachWorldPlateIds.panorama,
    role: "SC-09-PANORAMA-MASTER",
    cropId: group === "or10_observations" ? "sc09-panorama-relations"
      : group.startsWith("or20_python") ? "sc09-panorama-work"
        : group.startsWith("or20_ai") || group.includes("explanation") ? "sc09-panorama-course"
          : group === "or30_restore" ? "sc09-panorama-restore"
            : group.startsWith("or20_") ? "sc09-panorama-review" : "sc09-panorama-orient",
  };
}

export function resolveOffsetReachWorldScene(state) {
  if (state?.boardState === "SC-08" && state?.activeGroup === OFFSET_REACH_ROUTE_GROUP) {
    return Object.freeze({ sceneId: "SC-08", masterId: offsetReachWorldPlateIds.predecessor, role: "SC-08-PANORAMA-MASTER", cropId: "sc08-released" });
  }
  if (state?.boardState === "SC-09" && typeof state?.activeGroup === "string" && state.activeGroup.startsWith("or")) {
    return Object.freeze(sceneForGroup(state.activeGroup, state.sceneObservationId));
  }
  return null;
}

function stateFor(group, observations, evidence, extra = {}) {
  const [phase, owner, headingId, localActions] = groups[group];
  const returnActions = group === "or20_transaction" ? []
    : [offsetReachActions.returnInterval, offsetReachActions.returnThreshold];
  return {
    shellVersion: OFFSET_REACH_SHELL_VERSION,
    controllerVersion: OFFSET_REACH_CONTROLLER_VERSION,
    packetId: "RP-008",
    mappingId: "RP008-A3-OFFSET-REACH",
    phase,
    boardState: "SC-09",
    activeGroup: group,
    owner,
    headingId,
    statusRegionId: "offset-reach-status",
    statusMessageId: extra.statusMessageId ?? `td008:${group}:ready`,
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
      or20_python_primary: "or20-python-primary-editor",
      or20_python_trace: "or20-python-trace-first",
      or20_python_transfer: "or20-python-transfer-editor",
      or20_ai_primary: "or20-ai-primary-first",
      or20_ai_retrieval: "or20-ai-retrieval-first",
      or20_ai_transfer: "or20-ai-transfer-first",
      or20_selection_explanation: "or20-selection-explanation-field",
      or20_inference_explanation: "or20-inference-explanation-field",
    }[group] ?? headingId) },
    predecessorBytesPreserved: extra.predecessorBytesPreserved,
    routeOpened: false,
  };
}

function exactIntent(intent, state) {
  return exactKeys(intent, intentKeys)
    && intent.mode === "campaign"
    && intent.shellVersion === OFFSET_REACH_SHELL_VERSION
    && intent.controllerVersion === OFFSET_REACH_CONTROLLER_VERSION
    && intent.packetId === "RP-008"
    && intent.activeGroupId === state.activeGroup
    && intent.expectedOwner === state.owner
    && state.availableActions.includes(intent.allowlistedActionId)
    && (offsetReachModalities.includes(intent.activationKind)
      || (intent.allowlistedActionId === offsetReachActions.cancelSave && intent.activationKind === "keyboard_escape"))
    && tokenOkay(intent.opaqueFreshEventToken);
}

export function createOffsetReachIntent(state, action, activationKind, opaqueFreshEventToken) {
  return Object.freeze({
    mode: "campaign",
    shellVersion: OFFSET_REACH_SHELL_VERSION,
    controllerVersion: OFFSET_REACH_CONTROLLER_VERSION,
    packetId: "RP-008",
    activeGroupId: state?.activeGroup ?? null,
    expectedOwner: state?.owner ?? null,
    allowlistedActionId: action,
    activationKind,
    opaqueFreshEventToken,
  });
}

export function createOffsetReachRouteIntent(action, activationKind, opaqueFreshEventToken) {
  return Object.freeze({
    mode: "campaign",
    shellVersion: BRAIDED_VERGE_SHELL_VERSION,
    controllerVersion: BRAIDED_VERGE_CONTROLLER_VERSION,
    packetId: "RP-007",
    activeGroupId: OFFSET_REACH_ROUTE_GROUP,
    expectedOwner: OFFSET_REACH_ROUTE_OWNER,
    allowlistedActionId: action,
    activationKind,
    opaqueFreshEventToken,
  });
}

function routeIntentOkay(intent) {
  return exactKeys(intent, intentKeys)
    && intent.mode === "campaign"
    && intent.shellVersion === BRAIDED_VERGE_SHELL_VERSION
    && intent.controllerVersion === BRAIDED_VERGE_CONTROLLER_VERSION
    && intent.packetId === "RP-007"
    && intent.activeGroupId === OFFSET_REACH_ROUTE_GROUP
    && intent.expectedOwner === OFFSET_REACH_ROUTE_OWNER
    && intent.allowlistedActionId === offsetReachActions.route
    && offsetReachModalities.includes(intent.activationKind)
    && tokenOkay(intent.opaqueFreshEventToken);
}

function buildCandidate(evidence) {
  return {
    version: OFFSET_REACH_RECORD_VERSION,
    packetId: "RP-008",
    mappingId: "RP008-A3-OFFSET-REACH",
    checkpoint: "offset_reach_complete",
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
    note: {
      observations: [...offsetReachObservationIds],
      retained_local_association: true,
      recurring_familiar_contact: 1,
      comparable_non_contact: 1,
      cross_family_contact: 1,
      unavailable_case: 1,
      universal: null,
      exclusive: null,
      unity: null,
      cause: null,
      purpose: null,
      stewardship: "layered_stewardship_observed",
      replicas: "sanitized_precomputed_only",
    },
    evidence: clone(evidence),
  };
}

export function createOffsetReachNormalController(options = {}) {
  const predecessor = sanitizeBraidedVergeSave(options.predecessorRecord);
  const predecessorBytes = options.predecessorBytes ?? (predecessor ? JSON.stringify(predecessor) : null);
  const readPredecessorBytes = typeof options.readPredecessorBytes === "function" ? options.readPredecessorBytes : () => predecessorBytes;
  const intervalBytes = options.intervalBytes ?? options.readIntervalBytes?.() ?? null;
  const manyfoldBytes = options.manyfoldBytes ?? options.readManyfoldBytes?.() ?? null;
  const threeCurrentBytes = options.threeCurrentBytes ?? options.readThreeCurrentBytes?.() ?? null;
  const readIntervalBytes = typeof options.readIntervalBytes === "function" ? options.readIntervalBytes : () => intervalBytes;
  const readManyfoldBytes = typeof options.readManyfoldBytes === "function" ? options.readManyfoldBytes : () => manyfoldBytes;
  const readThreeCurrentBytes = typeof options.readThreeCurrentBytes === "function" ? options.readThreeCurrentBytes : () => threeCurrentBytes;
  const restored = sanitizeOffsetReachSave(options.restoredRecord);
  const predecessorsStable = () => predecessor
    && predecessor.version === BRAIDED_VERGE_RECORD_VERSION
    && predecessorBytes === JSON.stringify(predecessor)
    && readPredecessorBytes() === predecessorBytes
    && readIntervalBytes() === intervalBytes
    && readManyfoldBytes() === manyfoldBytes
    && readThreeCurrentBytes() === threeCurrentBytes;
  const acceptedEntry = options.mode !== "demo_tour"
    && (restored ? predecessorsStable() : routeIntentOkay(options.entryIntent) && predecessorsStable());
  const adapter = options.adapter;
  const tokens = new Set();
  if (acceptedEntry && options.entryIntent?.opaqueFreshEventToken) tokens.add(options.entryIntent.opaqueFreshEventToken);
  let observations = restored ? [...offsetReachObservationIds] : [];
  let evidence = restored ? [...restored.evidence] : [];
  let draft = {};
  let attempts = {};
  let repairTarget = null;
  let record = restored;
  let lastObservation = null;
  let state = restored && acceptedEntry
    ? stateFor("or30_restore", observations, evidence, {
      note: restored.note,
      statusMessageId: "td008:restore:no-replay",
      statusMessage: "The exact bounded note was restored heading-first. No route, arrival, observation, evaluator, explanation, save, sound, world, or return event replayed.",
    })
    : acceptedEntry
      ? stateFor("or00_orientation", [], [], {
        statusMessageId: "td008:or00_orientation:ready",
        statusMessage: "Offset Reach is present as an invariant shared region. Arrival grants no observation, learning evidence, access, authority, route, or response.",
      })
      : {
        shellVersion: BRAIDED_VERGE_SHELL_VERSION,
        controllerVersion: BRAIDED_VERGE_CONTROLLER_VERSION,
        packetId: "RP-007",
        mappingId: "RP007-A3-BRAIDED-VERGE",
        phase: "BV-30 ROUTE CHOICE",
        boardState: "SC-08",
        activeGroup: OFFSET_REACH_ROUTE_GROUP,
        owner: OFFSET_REACH_ROUTE_OWNER,
        headingId: "or-route-choice-heading",
        statusRegionId: "braided-verge-status",
        statusMessageId: "td008:route:rejected:no-effect",
        statusMessage: "The Offset Reach route was not accepted. Exact Braided Verge remains available and no future valid route token was spent.",
        availableActions: [],
        privateWorkCleared: true,
        transientWorkCleared: true,
        cityStateDelta: null,
        externalStateDelta: null,
        successor: null,
        worldStateChanged: false,
        replayedEvents: [],
        focusIntent: { group: OFFSET_REACH_ROUTE_GROUP, target: "or-route-choice-heading" },
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
      state: setGroup("or20_repair", {
        failedPublicIds: failed,
        repairTarget: target,
        focusTarget: "or20-repair-heading",
        statusMessageId: cleanupFailure ? "td008:workspace:cleanup-failed" : `td008:${target}:remediation`,
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
        statusMessageId: `td008:${next}:ready`,
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
      status: target === "RP-007" ? "returned_to_braided_verge_write_free" : "returned_to_city_threshold_write_free",
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
      if (action === offsetReachActions.returnInterval) {
        if (!predecessorsStable()) return reject("predecessor_changed");
        tokens.add(token);
        return safeReturn("RP-007");
      }
      if (action === offsetReachActions.returnThreshold) {
        tokens.add(token);
        return safeReturn("CITY_THRESHOLD");
      }
      if (!predecessorsStable()) return reject("predecessor_rejected");
      if (action === offsetReachActions.inspect) {
        tokens.add(token);
        return Object.freeze({ status: "offset_evidence_visible_zero_credit", evidenceGranted: false, state: setGroup("or10_observations") });
      }
      if (Object.hasOwn(actionObservation, action)) {
        const id = actionObservation[action];
        lastObservation = id;
        if (observations.includes(id)) {
          tokens.add(token);
          state = {
            ...state,
            sceneObservationId: id,
            statusMessageId: `td008:observation:${id}:recorded`,
            statusMessage: `${observations.length} of 6 · ${id} · Recorded already; no new evidence, order, score, route, or world effect was created.`,
            focusIntent: {
              group: "or10_observations",
              target: "or10-observation-peer-heading",
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
          state: setGroup(complete ? "or20_python_primary" : "or10_observations", {
            sceneObservationId: id,
            focusTarget: complete ? "or20-python-primary-editor" : "or10-observation-peer-heading",
            statusMessageId: `td008:observation:${id}:recorded`,
            statusMessage: `${observations.length} of 6 · ${id} · One bounded physical fact was recorded within its interpretation limit. No course credit, unity, cause, access, authority, route, or response was created.`,
          }),
        });
      }
      const submit = {
        [offsetReachActions.pythonPrimary]: ["PY-016", "primary", "or20_python_trace", "or20_python_primary"],
        [offsetReachActions.pythonTrace]: ["PY-016", "trace", "or20_python_transfer", "or20_python_trace"],
        [offsetReachActions.pythonTransfer]: ["PY-016", "transfer", "or20_ai_primary", "or20_python_transfer"],
        [offsetReachActions.visionPrimary]: ["RP008-INFORMATION-EXTRACTION-01", "primary", "or20_ai_retrieval", "or20_ai_primary"],
        [offsetReachActions.visionRetrieval]: ["RP008-INFORMATION-EXTRACTION-01", "retrieval", "or20_ai_transfer", "or20_ai_retrieval"],
        [offsetReachActions.visionTransfer]: ["RP008-INFORMATION-EXTRACTION-01", "transfer", "or20_selection_explanation", "or20_ai_transfer"],
      };
      if (Object.hasOwn(submit, action)) {
        const [skill, form, next, current] = submit[action];
        let firstBlank = null;
        if (skill === "PY-016" && form !== "trace" && !String(draft.learnerSource ?? "").trim()) {
          firstBlank = form === "primary" ? "or20-python-primary-editor" : "or20-python-transfer-editor";
        } else if (skill === "PY-016" && form === "trace") {
          firstBlank = traceDimensions.some((id) => !draft[id]) ? "or20-python-trace-first" : null;
        } else if (skill === "RP008-INFORMATION-EXTRACTION-01") {
          const complete = contract.ai901_contract.forms[form].every((item) => visionDimensions.every((dimension) => Boolean(draft[item.id]?.[dimension])));
          firstBlank = complete ? null : `or20-ai-${form}-first`;
        }
        if (firstBlank) {
          state = {
            ...state,
            statusMessageId: `td008:${current}:required`,
            statusMessage: "Complete the first blank labelled field before submitting. No token, evidence, or answer was consumed.",
            focusIntent: { group: current, target: firstBlank },
          };
          return Object.freeze({ status: "required_field_missing", evidenceGranted: false, tokenConsumed: false, state: clone(state) });
        }
        const result = skill === "PY-016"
          ? form === "trace"
            ? evaluateOffsetReachPythonTrace(draft)
            : executeOffsetReachWorkspace(form, draft.learnerSource, options.workspaceOptions?.[form])
          : evaluateOffsetReachVision(form, draft);
        tokens.add(token);
        if (!result.passed) return fail(`${skill}:${form}`, result.failed, result.cleanupVerified === false);
        return finalize(skill, form, result.correctness, next);
      }
      if (action === offsetReachActions.capabilityBoundary || action === offsetReachActions.relationBoundary) {
        const kind = action === offsetReachActions.capabilityBoundary ? "capabilityBoundary" : "relationBoundary";
        const form = kind === "capabilityBoundary" ? "selection_boundary_explanation" : "inference_boundary_explanation";
        const dimension = kind === "capabilityBoundary" ? "selection_boundary" : "inference_boundary";
        if (!draft[kind]) {
          state = {
            ...state,
            statusMessageId: `td008:${state.activeGroup}:required`,
            statusMessage: "Complete the blank labelled explanation before submitting. No token, evidence, or answer was consumed.",
            focusIntent: { group: state.activeGroup, target: kind === "capabilityBoundary" ? "or20-selection-explanation-field" : "or20-inference-explanation-field" },
          };
          return Object.freeze({ status: "required_field_missing", evidenceGranted: false, tokenConsumed: false, state: clone(state) });
        }
        tokens.add(token);
        if (draft[kind] !== offsetReachExplanationAnswers[kind]) {
          return fail(`RP008-INFORMATION-EXTRACTION-01:${form}`, [dimension]);
        }
        return finalize(
          "RP008-INFORMATION-EXTRACTION-01",
          form,
          { [dimension]: true },
          kind === "capabilityBoundary" ? "or20_inference_explanation" : "or20_review",
        );
      }
      if (action === offsetReachActions.retry) {
        tokens.add(token);
        const target = repairTarget;
        repairTarget = null;
        const index = expectedEvidence().findIndex(([skill, form]) => `${skill}:${form}` === target);
        if (index < 0) return reject("repair_target_missing");
        return Object.freeze({
          status: "fresh_blank_retry_visible",
          state: setGroup(learningGroups[index], {
            statusMessageId: `td008:${learningGroups[index]}:retry-blank`,
            statusMessage: "A wholly blank retry is ready. No source, report, result, choice, case answer, or feedback carried forward.",
          }),
        });
      }
      if (action === offsetReachActions.review) {
        if (observations.length !== 6 || evidence.length !== 8) {
          return Object.freeze({
            status: "review_incomplete_recovered",
            evidenceGranted: false,
            state: setGroup(observations.length !== 6 ? "or10_observations" : learningGroups[evidence.length]),
          });
        }
        tokens.add(token);
        const reviewRows = [
          ...offsetReachObservationIds.map((id) => ({ id, owner: `PILOT // ${id}`, state: "Complete" })),
          ...expectedEvidence().map(([skill, form]) => ({ id: `${skill}:${form}`, owner: `${skill} / ${form}`, state: "Complete" })),
        ];
        return Object.freeze({
          status: "bounded_review_visible_zero_credit",
          evidenceGranted: false,
          state: setGroup("or20_save", {
            reviewRows,
            statusMessageId: "td008:review:ready",
            statusMessage: "Thirteen independent responsibilities are complete. The strict bounded preview is ready for an explicit local-only save.",
          }),
        });
      }
      if (action === offsetReachActions.retrySave) {
        tokens.add(token);
        return Object.freeze({ status: "save_retry_ready_after_verified_rollback", state: setGroup("or20_save") });
      }
      if (action === offsetReachActions.cancelSave) {
        tokens.add(token);
        return Object.freeze({
          status: "save_cancelled_write_free",
          evidenceGranted: false,
          writePerformed: false,
          state: setGroup("or20_review", {
            statusMessageId: "td008:save:cancelled-write-free",
            statusMessage: "The local save confirmation was cancelled without a write. All independent finalized evidence remains available for review.",
          }),
        });
      }
      if (action === offsetReachActions.save) {
        tokens.add(token);
        state = stateFor("or20_transaction", observations, evidence);
        const result = adapter?.commit(buildCandidate(evidence))
          ?? { status: "failed", reason: "local_storage_unavailable", rollbackVerified: true, predecessorBytesPreserved: true };
        const stable = predecessorsStable();
        const safe = result.status === "committed" ? sanitizeOffsetReachSave(result.value) : null;
        if (!safe || !stable) {
          const rollbackVerified = result.rollbackVerified === true && stable;
          return Object.freeze({
            status: rollbackVerified ? "save_failed_rollback_verified" : "save_failed_rollback_unverified",
            reason: stable ? result.reason ?? "read_back_rejected" : "predecessor_changed",
            rollbackVerified,
            predecessorBytesPreserved: stable,
            state: setGroup(rollbackVerified ? "or20_save_recovery" : "or20_rollback_unverified", {
              predecessorBytesPreserved: stable,
              statusMessageId: rollbackVerified
                ? `td008:save:${result.reason ?? "failed"}:rolled-back`
                : "td008:save:rollback-unverified",
              statusMessage: rollbackVerified
                ? "The candidate did not replace the prior verified record or verified absence. Rollback and predecessor bytes were verified; retry starts without private work."
                : "Rollback or predecessor equality could not be verified. Progression is held and only safe returns remain.",
            }),
          });
        }
        record = safe;
        evidence = [...safe.evidence];
        observations = [...offsetReachObservationIds];
        return Object.freeze({
          status: "save_committed_verified_restore",
          record: clone(record),
          predecessorBytesPreserved: true,
          state: setGroup("or30_restore", {
            note: record.note,
            statusMessageId: "td008:save:committed",
            statusMessage: "Exact raw and strict object read-back passed while TD-007, TD-006, TD-005, and TD-004 bytes remained unchanged. No earlier event replayed and no route opened.",
          }),
        });
      }
      if (action === offsetReachActions.notation) {
        tokens.add(token);
        state = {
          ...state,
          statusMessageId: "td008:or30_restore:destinationless-notation",
          statusMessage: "A destinationless local notation was recorded with destination=null and routeOpened=false. It grants no evidence and opens nothing.",
          focusIntent: { group: "or30_restore", target: "or30-restore-heading" },
        };
        return Object.freeze({ status: "destinationless_notation_zero_evidence", evidenceGranted: false, routeOpened: false, state: clone(state) });
      }
      return reject("action_unavailable");
    },
  });
}

export const offsetReachPublicContract = Object.freeze({
  observationIds: offsetReachObservationIds,
  minimumTargetCssPx: 44,
  offlineOnly: true,
  noAuthority: true,
  noExamGuarantee: true,
  imageRoles: Object.freeze(["SC-09-PANORAMA-MASTER", "SC-09-RELATION-DETAIL-MASTER"]),
  layouts: Object.freeze(["1920x1080", "1366x768", "390x844", "768x900-effective-200"]),
});
