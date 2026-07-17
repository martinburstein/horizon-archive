import contract from "../../curriculum/readiness/RP-008/contract.json" with { type: "json" };
import {
  BRAIDED_VERGE_PROTECTED_JOURNEY_VERSION,
  deriveBraidedVergeResume,
} from "./BraidedVergeProtectedJourney.js";

export const OFFSET_REACH_PROTECTED_JOURNEY_VERSION = "rp008.protected-journey.v1";

export const offsetReachActions = Object.freeze({
  orient: "ORIENT TO OFFSET REACH",
  inspectEvidence: "INSPECT OFFSET EVIDENCE",
  runScopeRevision: "RUN BOUNDED SCOPE REVISION",
  saveNote: "SAVE OFFSET SUMMARY",
  returnBraidedVerge: "RETURN TO BRAIDED VERGE",
  returnCityThreshold: "RETURN TO CITY THRESHOLD",
  recordContinuation: "RECORD DESTINATIONLESS OFFSET",
});

export const offsetReachPresentation = Object.freeze({
  sceneBoard: "SC-09",
  firstPerson: true,
  photorealistic: true,
  invariantWorld: true,
  protagonistVisible: false,
  shipVisible: false,
  responsive: true,
  fixedLegacyViewportRequired: false,
  accessibility: Object.freeze({
    minTargetCssPx: contract.accessibility_contract.minimum_target_css_px,
    oneActiveOwnerGroup: contract.accessibility_contract.one_active_owner_message_content_action_group,
    persistentLabels: contract.accessibility_contract.persistent_labels,
    fieldAssociatedErrors: contract.accessibility_contract.field_associated_text_feedback,
    statusLiveRegion: contract.accessibility_contract.status_live_region,
    deterministicFocus: contract.accessibility_contract.focus_returns_to_first_invalid_or_next_required_control,
    reducedMotionEquivalent: contract.accessibility_contract.reduced_motion_equivalent,
    timeLimit: contract.accessibility_contract.time_limit,
    meaningUsesColorMotionAudioPositionSequenceOrLayoutAlone: false,
    modalities: Object.freeze(["pointer", "touch", "keyboard_enter", "keyboard_space", "switch", "speech", "screen_reader"]),
  }),
});

export const offsetReachReferenceSources = Object.freeze({
  primary: `import json

records_json = """[
  {"case_id":"local","relation":"familiar_contact","available":true},
  {"case_id":"open","relation":"non_contact","available":true},
  {"case_id":"cross","relation":"cross_family_contact","available":true},
  {"case_id":"closed","relation":null,"available":false}
]"""
records = json.loads(records_json)
scope_summary = {
    "retained_local_association": sum(record["relation"] == "familiar_contact" for record in records) == 1,
    "recurring_familiar_contact": sum(record["relation"] == "familiar_contact" for record in records),
    "comparable_non_contact": sum(record["relation"] == "non_contact" for record in records),
    "cross_family_contact": sum(record["relation"] == "cross_family_contact" for record in records),
    "unavailable_case": sum(record["available"] is False for record in records),
    "universal": None,
    "exclusive": None,
    "unity": None,
    "cause": None,
    "purpose": None,
}
summary_json = json.dumps(scope_summary, sort_keys=True)
restored_summary = json.loads(summary_json)`,
  transfer: `import json

records_json = """[
  {"case_id":"retained","relation":"paired_interface","available":true},
  {"case_id":"gap","relation":"exposed_gap","available":true},
  {"case_id":"alternate","relation":"alternate_interface","available":true},
  {"case_id":"sealed","relation":null,"available":false}
]"""
records = json.loads(records_json)
scope_summary = {
    "retained_local_association": sum(record["relation"] == "paired_interface" for record in records) == 1,
    "recurring_familiar_contact": sum(record["relation"] == "paired_interface" for record in records),
    "comparable_non_contact": sum(record["relation"] == "exposed_gap" for record in records),
    "cross_family_contact": sum(record["relation"] == "alternate_interface" for record in records),
    "unavailable_case": sum(record["available"] is False for record in records),
    "universal": None,
    "exclusive": None,
    "unity": None,
    "cause": None,
    "purpose": None,
}
summary_json = json.dumps(scope_summary, sort_keys=True)
restored_summary = json.loads(summary_json)`,
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
  selectionBoundary: "source_modality_and_requested_output_contract_select_the_extraction_technique",
  inferenceBoundary: "extracted_or_missing_values_do_not_establish_truth_universality_exclusivity_separation_equivalence_unity_cause_or_purpose",
});

const observationIds = Object.freeze([
  "familiar_continuity_trace",
  "recurring_familiar_contact",
  "comparable_non_contact",
  "cross_family_contact",
  "unavailable_case",
  "layered_stewardship",
]);
const pythonCheckIds = Object.freeze([...contract.python_contract.checks]);
const traceDimensions = Object.freeze(Object.keys(offsetReachPythonTraceAnswers));
const aiDimensions = Object.freeze([...contract.ai901_contract.dimensions]);
const allowedMisconceptions = new Set(contract.ai901_contract.misconception_tags);
const summaryKeys = Object.freeze([
  "retained_local_association", "recurring_familiar_contact", "comparable_non_contact",
  "cross_family_contact", "unavailable_case", "universal", "exclusive", "unity", "cause", "purpose",
]);
const safeReturnTargets = Object.freeze({
  [offsetReachActions.returnBraidedVerge]: "RP-007",
  [offsetReachActions.returnCityThreshold]: "CITY_THRESHOLD",
});
const unsafeFixturePattern = /private_?notes?|credentials?|endpoints?|payloads?|responses?|external_?action_?requests?|forged|stale|combined|scene_?derived|position_?derived|motion_?derived|sound_?derived|timing_?derived|focus_?derived|navigation_?derived|accessibility_?derived|save_?display_?derived|tour_?derived|weakness_?derived|confidence_?derived/i;
const forbiddenSourcePattern = /\b(?:open|print|eval|exec|system|remove|unlink|rmdir|requests|urlopen|fetch|connect|send|write_text|read_text|subprocess|socket|pip|install)\s*\(/i;

function stableJson(value) {
  if (value === null || typeof value !== "object") return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(stableJson).join(",")}]`;
  return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(",")}}`;
}

function exactObservationSet(value) {
  if (!Array.isArray(value) || value.some((id) => !observationIds.includes(id))) return false;
  const unique = new Set(value);
  return unique.size === observationIds.length && observationIds.every((id) => unique.has(id));
}

function expectedRecords(form) {
  const ids = form === "primary" ? ["local", "open", "cross", "closed"] : ["retained", "gap", "alternate", "sealed"];
  return ids.map((caseId, index) => ({
    case_id: caseId,
    relation: contract.python_contract.forms[form].relations[index],
    available: contract.python_contract.forms[form].relations[index] !== null,
  }));
}

function sourceRecords(source) {
  const match = source.match(/records_json\s*=\s*"""([\s\S]*?)"""/);
  if (!match) return null;
  try { return { text: match[1], records: JSON.parse(match[1]) }; } catch { return null; }
}

function expectedRelationTokens(form) {
  return form === "primary"
    ? ["familiar_contact", "familiar_contact", "non_contact", "cross_family_contact"]
    : ["paired_interface", "paired_interface", "exposed_gap", "alternate_interface"];
}

export function evaluateOffsetReachPython(form, learnerSource) {
  if (!contract.python_contract.forms[form]) throw new TypeError("form must be primary or transfer.");
  const source = String(learnerSource ?? "").replace(/\r/g, "");
  const decoded = sourceRecords(source);
  const loadCalls = source.match(/json\.loads\s*\(/g) ?? [];
  const dumpCalls = source.match(/json\.dumps\s*\(/g) ?? [];
  const sumCalls = source.match(/\bsum\s*\(/g) ?? [];
  const importCount = (source.match(/^\s*import\s+json\s*$/gm) ?? []).length;
  const allImports = source.match(/^\s*(?:import\s+[^\n]+|from\s+[^\n]+\s+import\s+[^\n]+)\s*$/gm) ?? [];
  const exactShape = importCount === 1 && allImports.length === 1 && loadCalls.length === 2 && dumpCalls.length === 1
    && sumCalls.length === 5 && /json\.dumps\s*\(\s*scope_summary\s*,\s*sort_keys\s*=\s*True\s*\)/.test(source);
  const keyMatches = [...source.matchAll(/^\s{4}"([a-z_]+)"\s*:/gm)].map((match) => match[1]);
  const relations = expectedRelationTokens(form);
  const relationExpressions = [...source.matchAll(/sum\(record\["relation"\]\s*==\s*"([a-z_]+)"\s+for\s+record\s+in\s+records\)/g)].map((match) => match[1]);
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
  const safe = !forbiddenSourcePattern.test(source)
    && !/https?:|node:|child_process|process\.|os\.|sys\.|\\\\|\/[A-Za-z0-9_-]+\//i.test(source)
    && (source.match(/^\s*records_json\s*=/gm) ?? []).length === 1
    && (source.match(/^\s*records\s*=/gm) ?? []).length === 1
    && (source.match(/^\s*scope_summary\s*=/gm) ?? []).length === 1
    && (source.match(/^\s*summary_json\s*=/gm) ?? []).length === 1
    && (source.match(/^\s*restored_summary\s*=/gm) ?? []).length === 1;
  const checks = Object.freeze({
    json_import_and_call_shape: exactShape,
    records_decoded_exactly: recordsExact,
    summary_exact_keys: keyMatches.length === summaryKeys.length && keyMatches.every((key, index) => key === summaryKeys[index]),
    counts_and_retained_local: countsExact,
    unavailable_case_preserved: unavailableExact,
    unsupported_limits_remain_none: limitsExact,
    round_trip_matches_sorted_json: roundTripExact && countsExact && unavailableExact && limitsExact,
    inputs_unchanged_and_no_forbidden_operations: safe && recordsExact,
  });
  const failedCheckIds = pythonCheckIds.filter((id) => !checks[id]);
  return Object.freeze({
    form,
    checks,
    score: pythonCheckIds.length - failedCheckIds.length,
    passed: failedCheckIds.length === 0,
    failedCheckIds: Object.freeze(failedCheckIds),
    transientAudit: Object.freeze({ sourceRetained: false, recordsJsonRetained: false, summaryJsonRetained: false, cleared: true }),
  });
}

export function evaluateOffsetReachPythonTrace(answers) {
  const correctness = Object.fromEntries(Object.entries(offsetReachPythonTraceAnswers)
    .map(([dimension, expected]) => [dimension, answers?.[dimension] === expected]));
  return Object.freeze({ correctness: Object.freeze(correctness), score: Object.values(correctness).filter(Boolean).length, passed: Object.values(correctness).every(Boolean) });
}

function misconceptionFor(item, dimension, answer) {
  if (dimension === "technique") {
    if ((item.technique === "ocr" && answer === "field_extraction") || (item.technique === "field_extraction" && answer === "ocr")) return "ocr_equals_field_extraction";
    if (answer === "ocr" && item.technique !== "ocr") return "all_extraction_is_ocr";
    if (item.technique === "multimodal_extraction" && answer === "image_only") return "multimodal_equals_image_only";
    if (item.technique === "knowledge_mining" && answer === "field_extraction") return "knowledge_mining_equals_field_mapping";
  }
  if (answer === "scene_case_selects_technique") return "scene_case_selects_technique";
  if (answer === "visible_non_contact_proves_separation") return "visible_non_contact_proves_separation";
  if (answer === "missing_value_proves_absence") return "missing_value_proves_absence";
  if (answer === "extraction_proves_truth_or_cause") return "extraction_proves_truth_or_cause";
  if (answer === "offline_case_proves_live_configuration") return "offline_case_proves_live_configuration";
  if (answer === "valid_answer_authorizes_action") return "valid_answer_authorizes_action";
  return null;
}

export function evaluateOffsetReachInformationExtraction(form, answers) {
  const cases = contract.ai901_contract.forms[form];
  if (!cases) throw new TypeError("form must be primary, retrieval, or transfer.");
  const correctness = {};
  const tags = [];
  for (const item of cases) {
    for (const dimension of aiDimensions) {
      const supplied = answers?.[item.id]?.[dimension];
      const key = `${item.id}.${dimension}`;
      correctness[key] = supplied === item[dimension];
      if (!correctness[key]) {
        const tag = misconceptionFor(item, dimension, supplied);
        if (tag && allowedMisconceptions.has(tag) && !tags.includes(tag)) tags.push(tag);
      }
    }
  }
  return Object.freeze({
    form,
    correctness: Object.freeze(correctness),
    score: Object.values(correctness).filter(Boolean).length,
    passed: Object.values(correctness).every(Boolean),
    misconceptionTags: Object.freeze(tags),
  });
}

export const offsetReachNeutralExtractionInterface = Object.freeze({
  owner: "EXPEDITION COURSE",
  answerSource: "course_authored_neutral_text_cases_only",
  sceneEvidenceExcluded: true,
  inferredWeaknessExcluded: true,
  performsLiveExtraction: false,
  usesCredentialsOrEndpoints: false,
  cases: Object.freeze(Object.fromEntries(["primary", "retrieval", "transfer"].map((form) => [form,
    Object.freeze(contract.ai901_contract.forms[form].map((item) => Object.freeze({ id: item.id, prompt: item.prompt }))),
  ]))),
});

function prerequisitesPass(value) {
  return value?.python?.lessonId === "L-03-03"
    && value.python.skillId === "PY-016"
    && value.python.readinessStatus === "ready"
    && Array.isArray(value.python.prerequisiteSkillIds)
    && ["PY-009", "PY-012", "PY-015"].every((id) => value.python.prerequisiteSkillIds.includes(id))
    && value?.ai901?.lessonId === "L-04-04"
    && value.ai901.objectiveId === "AI901-D1-O8"
    && value.ai901.objectiveReady === true
    && value.ai901.readinessStatus === "ready"
    && Array.isArray(value.ai901.sourceLessonIds)
    && value.ai901.sourceLessonIds.includes("L-06-01");
}

function predecessorPasses(value, continuation) {
  const restored = deriveBraidedVergeResume(value);
  const saved = restored?.saved;
  return restored?.phase === "verified_restore"
    && saved?.version === BRAIDED_VERGE_PROTECTED_JOURNEY_VERSION
    && saved.packetId === "RP-007"
    && saved.mappingId === "RP007-A3-BRAIDED-VERGE"
    && saved.checkpoint === "braided_verge_complete"
    && saved.continuation === continuation
    && saved.cityStateDelta === null
    && saved.externalStateDelta === null
    && saved.successor === null
    && saved.note?.association === "recurrent_exposed_association"
    && saved.note?.unity === null && saved.note?.cause === null && saved.note?.purpose === null;
}

function retainedRp007Summary(value) {
  return Object.freeze({
    checkpoint: value.checkpoint,
    continuities: value.note.continuities,
    association: value.note.association,
    difference: value.note.difference,
    junction: value.note.junction,
    unity: null,
    cause: null,
    purpose: null,
  });
}

function focusForBoundary(boundary) {
  const targets = {
    observations: "offset_evidence_heading", pythonPrimary: "python_primary_heading", pythonTrace: "python_trace_heading",
    pythonTransfer: "python_transfer_heading", extractionPrimary: "extraction_primary_heading",
    extractionRetrieval: "extraction_retrieval_heading", extractionTransfer: "extraction_transfer_heading",
    selectionBoundaryExplanation: "selection_boundary_explanation", inferenceBoundaryExplanation: "inference_boundary_explanation",
    review: "bounded_review_heading", saved: "saved_controls",
  };
  return Object.freeze({ group: boundary, target: targets[boundary] ?? "offset_evidence_heading" });
}

function firstIncompleteFocus(completion) {
  const order = ["observations", "pythonPrimary", "pythonTrace", "pythonTransfer", "extractionPrimary", "extractionRetrieval", "extractionTransfer", "selectionBoundaryExplanation", "inferenceBoundaryExplanation", "review", "saved"];
  const boundary = order.find((key) => completion[key] !== true);
  return boundary ? focusForBoundary(boundary) : Object.freeze({ group: "verified_restore", target: "saved_controls" });
}

function evidenceRecord({ form, skillOrObjectiveId, correctness, attempts = 1, hints = 0, confidence = null, misconceptionTags = [] }) {
  return Object.freeze({
    packet_id: contract.packet_id, mapping_id: contract.mapping_id, form, skill_or_objective_id: skillOrObjectiveId,
    dimension_correctness: Object.freeze({ ...correctness }),
    attempt_count: Math.max(0, Math.min(99, Number.isInteger(attempts) ? attempts : 0)),
    hint_level: Math.max(0, Math.min(3, Number.isInteger(hints) ? hints : 0)),
    confidence: ["low", "medium", "high"].includes(confidence) ? confidence : null,
    misconception_tags: Object.freeze(misconceptionTags.filter((tag) => allowedMisconceptions.has(tag))),
    mastery_status: "mastered",
  });
}

function expectedEvidenceShape() {
  const aiShape = (form) => contract.ai901_contract.forms[form].flatMap((item) => aiDimensions.map((dimension) => `${item.id}.${dimension}`));
  return [
    ["PY-016", "primary", pythonCheckIds], ["PY-016", "trace", traceDimensions], ["PY-016", "transfer", pythonCheckIds],
    ["RP008-INFORMATION-EXTRACTION-01", "primary", aiShape("primary")],
    ["RP008-INFORMATION-EXTRACTION-01", "retrieval", aiShape("retrieval")],
    ["RP008-INFORMATION-EXTRACTION-01", "transfer", aiShape("transfer")],
    ["RP008-INFORMATION-EXTRACTION-01", "selection_boundary_explanation", ["selection_boundary"]],
    ["RP008-INFORMATION-EXTRACTION-01", "inference_boundary_explanation", ["inference_boundary"]],
  ];
}

function sanitizeSave(value) {
  if (/learner_source|records_json|summary_json|raw_cases?|case_answers?|free_form_reasoning|private_notes?|identity_content|credentials?|endpoints?|payloads?|responses?|source_content|exam_items?|external_action_requests?|temporary/i.test(JSON.stringify(value ?? {}))) return null;
  const expected = expectedEvidenceShape();
  const evidenceValid = Array.isArray(value?.evidence) && value.evidence.length === expected.length
    && expected.every(([id, form, dimensions], index) => {
      const record = value.evidence[index];
      const correctness = record?.dimension_correctness;
      return record?.packet_id === contract.packet_id && record.mapping_id === contract.mapping_id
        && record.skill_or_objective_id === id && record.form === form && record.mastery_status === "mastered"
        && Array.isArray(record.misconception_tags) && record.misconception_tags.every((tag) => allowedMisconceptions.has(tag))
        && correctness && Object.keys(correctness).length === dimensions.length && dimensions.every((dimension) => correctness[dimension] === true);
    });
  const retained = value?.retainedRp007Summary;
  const retainedValid = retained?.checkpoint === "braided_verge_complete"
    && retained.continuities === "distinct_visible_continuities" && retained.association === "recurrent_exposed_association"
    && retained.difference === "one_bounded_difference" && retained.junction === "closed_junction_unavailable"
    && retained.unity === null && retained.cause === null && retained.purpose === null;
  const note = value?.note;
  const noteValid = exactObservationSet(note?.observations)
    && note.retained_local_association === true && note.recurring_familiar_contact === 1
    && note.comparable_non_contact === 1 && note.cross_family_contact === 1 && note.unavailable_case === 1
    && [note.universal, note.exclusive, note.unity, note.cause, note.purpose].every((item) => item === null)
    && note.stewardship === "layered_stewardship_observed" && note.replicas === "sanitized_precomputed_only";
  const exactTopKeys = ["version", "packetId", "mappingId", "checkpoint", "continuation", "cityStateDelta", "externalStateDelta", "successor", "retainedRp007Summary", "note", "evidence"];
  if (!value || Object.keys(value).length !== exactTopKeys.length || exactTopKeys.some((key) => !(key in value))
    || value.version !== OFFSET_REACH_PROTECTED_JOURNEY_VERSION || value.packetId !== "RP-008"
    || value.mappingId !== "RP008-A3-OFFSET-REACH" || value.checkpoint !== "offset_reach_complete"
    || value.continuation !== "continuation" || value.cityStateDelta !== null || value.externalStateDelta !== null
    || value.successor !== null || !retainedValid || !noteValid || !evidenceValid) return null;
  return Object.freeze({
    version: value.version, packetId: value.packetId, mappingId: value.mappingId, checkpoint: value.checkpoint,
    continuation: value.continuation, cityStateDelta: null, externalStateDelta: null, successor: null,
    retainedRp007Summary: Object.freeze({ ...retained }),
    note: Object.freeze({
      observations: Object.freeze([...observationIds]), retained_local_association: true, recurring_familiar_contact: 1,
      comparable_non_contact: 1, cross_family_contact: 1, unavailable_case: 1,
      universal: null, exclusive: null, unity: null, cause: null, purpose: null,
      stewardship: "layered_stewardship_observed", replicas: "sanitized_precomputed_only",
    }),
    evidence: Object.freeze(value.evidence.map((record) => evidenceRecord({
      form: record.form, skillOrObjectiveId: record.skill_or_objective_id, correctness: record.dimension_correctness,
      attempts: record.attempt_count, hints: record.hint_level, confidence: record.confidence, misconceptionTags: record.misconception_tags,
    }))),
  });
}

export function createOffsetReachPersistenceAdapter(initialValue = null) {
  let stored = initialValue == null ? null : sanitizeSave(initialValue);
  return Object.freeze({
    read: () => stored,
    bytes: () => JSON.stringify(stored),
    write(value) {
      const before = JSON.stringify(stored);
      const safe = sanitizeSave(value);
      if (!safe) return Object.freeze({ status: "rejected", value: stored, byteStable: JSON.stringify(stored) === before });
      stored = safe;
      return Object.freeze({ status: "committed", value: stored, byteStable: false });
    },
  });
}

export function deriveOffsetReachResume(value) {
  const saved = sanitizeSave(value);
  if (saved) return Object.freeze({
    phase: "verified_restore", completion: Object.freeze({ saved: true }),
    focusIntent: Object.freeze({ group: "verified_restore", target: "saved_controls" }), saved,
    transientWorkCleared: true, privateWorkCleared: true, replayedEvents: Object.freeze([]),
  });
  const ordered = ["pythonPrimary", "pythonTrace", "pythonTransfer", "extractionPrimary", "extractionRetrieval", "extractionTransfer", "selectionBoundaryExplanation", "inferenceBoundaryExplanation", "review"];
  const completion = { observations: false };
  let gap = false;
  for (const key of ordered) {
    const finalized = value?.finalized?.[key] === true;
    if (gap || !finalized) { gap = true; completion[key] = false; } else completion[key] = true;
  }
  return Object.freeze({
    phase: "OR-10 INSPECT OFFSET EVIDENCE", completion: Object.freeze(completion), focusIntent: firstIncompleteFocus(completion),
    saved: null, retainedRp007Summary: value?.retainedRp007Summary ?? null,
    observationsMustBeReobserved: true, transientWorkCleared: true, privateWorkCleared: true, replayedEvents: Object.freeze([]),
  });
}

export function deriveOffsetReachSafeReturn(action) {
  const target = safeReturnTargets[action];
  if (!target) throw new TypeError("An explicit approved return action is required.");
  return Object.freeze({ target, continuation: "continuation", cityStateDelta: null, externalStateDelta: null,
    replayedEvents: Object.freeze([]), successor: null, authorityGranted: false, externalActionEnabled: false,
    transientWorkCleared: true, privateWorkCleared: true });
}

function answerFreeFailure(boundary, message, misconceptionTags = []) {
  const error = new Error(message);
  error.recovery = Object.freeze({
    boundary, answerIncluded: false, retryBlank: true, attemptsRemaining: "unlimited",
    remediationTags: Object.freeze(misconceptionTags.filter((tag) => allowedMisconceptions.has(tag))),
    remediationSource: "scored_misconception_tags_only", transientWorkCleared: true, privateWorkCleared: true,
    focusIntent: focusForBoundary(boundary),
  });
  throw error;
}

function buildEvidence(results) {
  return Object.freeze([
    evidenceRecord({ form: "primary", skillOrObjectiveId: "PY-016", correctness: results.pythonPrimary.checks }),
    evidenceRecord({ form: "trace", skillOrObjectiveId: "PY-016", correctness: results.pythonTrace.correctness }),
    evidenceRecord({ form: "transfer", skillOrObjectiveId: "PY-016", correctness: results.pythonTransfer.checks }),
    evidenceRecord({ form: "primary", skillOrObjectiveId: "RP008-INFORMATION-EXTRACTION-01", correctness: results.extractionPrimary.correctness }),
    evidenceRecord({ form: "retrieval", skillOrObjectiveId: "RP008-INFORMATION-EXTRACTION-01", correctness: results.extractionRetrieval.correctness }),
    evidenceRecord({ form: "transfer", skillOrObjectiveId: "RP008-INFORMATION-EXTRACTION-01", correctness: results.extractionTransfer.correctness }),
    evidenceRecord({ form: "selection_boundary_explanation", skillOrObjectiveId: "RP008-INFORMATION-EXTRACTION-01", correctness: { selection_boundary: true } }),
    evidenceRecord({ form: "inference_boundary_explanation", skillOrObjectiveId: "RP008-INFORMATION-EXTRACTION-01", correctness: { inference_boundary: true } }),
  ]);
}

/** Protected Node-only reference caller. It is intentionally absent from App/main, routes, bundles, and browser persistence. */
export function runOffsetReachProtectedJourneySmoke(fixture) {
  const acceptedBytes = JSON.stringify(fixture?.acceptedCampaign);
  const predecessorBytes = JSON.stringify(fixture?.predecessor);
  const tourBytes = JSON.stringify(fixture?.tour);
  const continuation = fixture?.acceptedCampaign?.continuation;
  if (continuation !== "continuation" || fixture.acceptedCampaign?.cityStateDelta !== null
    || fixture.acceptedCampaign?.externalStateDelta !== null || fixture.acceptedCampaign?.successor !== null) {
    throw new TypeError("The exact accepted campaign boundary is required.");
  }
  if (unsafeFixturePattern.test(JSON.stringify({ privateNotes: fixture.privateNotes, credentials: fixture.credentials, endpoint: fixture.endpoint, flags: fixture.flags }))) {
    throw new TypeError("Unsafe, private, inferred, scene-derived, weakness-derived, or Tour-derived input is not accepted.");
  }
  if (!predecessorPasses(fixture.predecessor, continuation)) throw new TypeError("Exact verified RP-007 completion is required.");
  const earlyReturn = deriveOffsetReachSafeReturn(fixture.earlyReturnAction);
  if (fixture.orientAction !== offsetReachActions.orient || fixture.inspectAction !== offsetReachActions.inspectEvidence) {
    throw new TypeError("Exact separate orient and inspect actions are required.");
  }
  if (!prerequisitesPass(fixture.prerequisites)) return Object.freeze({
    version: OFFSET_REACH_PROTECTED_JOURNEY_VERSION, status: "prerequisite_hold", protected: true, routable: false,
    storyNavigationLocked: false, completion: Object.freeze({}), earlyReturn, cityStateDelta: null,
    externalStateDelta: null, successor: null, transientWorkCleared: true, privateWorkCleared: true,
  });
  if (!exactObservationSet(fixture.observationOrder)) answerFreeFailure("observations", "Record every supported physical observation; revisits are harmless.");
  if (fixture.runAction !== offsetReachActions.runScopeRevision) throw new TypeError("Exact bounded scope-revision action is required.");
  const results = {
    pythonPrimary: evaluateOffsetReachPython("primary", fixture.pythonPrimarySource),
    pythonTrace: evaluateOffsetReachPythonTrace(fixture.pythonTraceAnswers),
    pythonTransfer: evaluateOffsetReachPython("transfer", fixture.pythonTransferSource),
    extractionPrimary: evaluateOffsetReachInformationExtraction("primary", fixture.extractionAnswers?.primary),
    extractionRetrieval: evaluateOffsetReachInformationExtraction("retrieval", fixture.extractionAnswers?.retrieval),
    extractionTransfer: evaluateOffsetReachInformationExtraction("transfer", fixture.extractionAnswers?.transfer),
  };
  for (const boundary of ["pythonPrimary", "pythonTrace", "pythonTransfer", "extractionPrimary", "extractionRetrieval", "extractionTransfer"]) {
    if (!results[boundary].passed) answerFreeFailure(boundary, "The current bounded check is incomplete.", results[boundary].misconceptionTags ?? []);
  }
  if (fixture.explanations?.selectionBoundary !== offsetReachExplanationAnswers.selectionBoundary) {
    answerFreeFailure("selectionBoundaryExplanation", "Explain what selects an information-extraction technique.");
  }
  if (fixture.explanations?.inferenceBoundary !== offsetReachExplanationAnswers.inferenceBoundary) {
    answerFreeFailure("inferenceBoundaryExplanation", "Explain the limits of extracted and missing values.");
  }
  if (fixture.reviewAction !== "FINALIZE BOUNDED REVIEW") answerFreeFailure("review", "Finalize the separate bounded review.");
  if (fixture.saveAction !== offsetReachActions.saveNote) throw new TypeError("Exact separate atomic save action is required.");
  const evidence = buildEvidence(results);
  const candidate = {
    version: OFFSET_REACH_PROTECTED_JOURNEY_VERSION, packetId: "RP-008", mappingId: "RP008-A3-OFFSET-REACH",
    checkpoint: "offset_reach_complete", continuation, cityStateDelta: null, externalStateDelta: null, successor: null,
    retainedRp007Summary: retainedRp007Summary(fixture.predecessor),
    note: {
      observations: [...new Set(fixture.observationOrder)], retained_local_association: true,
      recurring_familiar_contact: 1, comparable_non_contact: 1, cross_family_contact: 1, unavailable_case: 1,
      universal: null, exclusive: null, unity: null, cause: null, purpose: null,
      stewardship: "layered_stewardship_observed", replicas: "sanitized_precomputed_only",
    }, evidence,
  };
  const adapter = createOffsetReachPersistenceAdapter();
  const commit = adapter.write(candidate);
  if (commit.status !== "committed") throw new TypeError("Atomic save rejected the bounded evidence.");
  const restored = deriveOffsetReachResume(adapter.read());
  if (restored.phase !== "verified_restore" || restored.replayedEvents.length !== 0) throw new TypeError("Verified replay-free restore is required.");
  const returnedRoute = deriveOffsetReachSafeReturn(fixture.finalReturnAction);
  if (fixture.recordContinuationAction !== offsetReachActions.recordContinuation) throw new TypeError("Continuation may only be recorded by the exact optional action.");
  const tourAdapter = createOffsetReachPersistenceAdapter();
  const tourProbe = Object.freeze({ mode: fixture.tour?.mode, observationsFinalized: false, masteryFinalized: false,
    saveStatus: "tour_preview_only", routeUnlocked: false, successor: null, adapterValue: tourAdapter.read() });
  if (JSON.stringify(fixture.acceptedCampaign) !== acceptedBytes || JSON.stringify(fixture.predecessor) !== predecessorBytes || JSON.stringify(fixture.tour) !== tourBytes) {
    throw new TypeError("Protected inputs must remain byte-stable.");
  }
  const completion = Object.fromEntries(["observations", "pythonPrimary", "pythonTrace", "pythonTransfer", "extractionPrimary", "extractionRetrieval", "extractionTransfer", "selectionBoundaryExplanation", "inferenceBoundaryExplanation", "review", "saved"].map((key) => [key, true]));
  return Object.freeze({
    version: OFFSET_REACH_PROTECTED_JOURNEY_VERSION, status: "protected_reference_complete", protected: true, routable: false,
    offlineOnly: true, browserStorageUsed: false, networkUsed: false, liveWorldRead: false, liveExtractionPerformed: false,
    sceneEvidenceUsed: false, presentationEvidenceUsed: false, tourEvidenceUsed: false, externalActionEnabled: false,
    authorityGranted: false, examCreditGranted: false, examGuarantee: false, continuation,
    cityStateDelta: null, externalStateDelta: null, worldStateChanged: false, successor: null,
    timeline: Object.freeze(["OR-00 ARRIVE + ORIENT", "OR-10 INSPECT OFFSET EVIDENCE", "OR-20 REVISE SCOPE + SAVE", "OR-30 VERIFY + RETURN"]),
    observations: Object.freeze([...new Set(fixture.observationOrder)]), revisitCount: fixture.observationOrder.length - observationIds.length,
    completion: Object.freeze(completion), focusIntent: firstIncompleteFocus(completion),
    transientAudit: Object.freeze({ primary: results.pythonPrimary.transientAudit, transfer: results.pythonTransfer.transientAudit, allCleared: true, privateCleared: true }),
    saved: restored.saved, restored: Object.freeze({ phase: restored.phase, checkpoint: restored.saved.checkpoint,
      focusIntent: restored.focusIntent, replayedEvents: restored.replayedEvents, transientWorkCleared: restored.transientWorkCleared }),
    earlyReturn, returnedRoute, onwardContinuation: Object.freeze({ recorded: true, destination: null, routeOpened: false }),
    tourProbe, presentation: offsetReachPresentation, capabilityInterface: offsetReachNeutralExtractionInterface,
  });
}

export const offsetReachReferenceAnswers = Object.freeze({
  extraction: Object.freeze(Object.fromEntries(["primary", "retrieval", "transfer"].map((form) => [form,
    Object.freeze(Object.fromEntries(contract.ai901_contract.forms[form].map((item) => [item.id,
      Object.freeze(Object.fromEntries(aiDimensions.map((dimension) => [dimension, item[dimension]]))),
    ]))),
  ]))),
  pythonTrace: offsetReachPythonTraceAnswers,
  explanations: offsetReachExplanationAnswers,
});
