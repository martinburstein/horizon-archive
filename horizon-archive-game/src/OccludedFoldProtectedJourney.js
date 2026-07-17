import contract from "../../curriculum/readiness/RP-009/contract.json" with { type: "json" };
import {
  OFFSET_REACH_PROTECTED_JOURNEY_VERSION,
  deriveOffsetReachResume,
} from "./OffsetReachProtectedJourney.js";

export const OCCLUDED_FOLD_PROTECTED_JOURNEY_VERSION = "rp009.protected-journey.v1";

export const occludedFoldActions = Object.freeze({
  orient: "ORIENT TO OCCLUDED FOLD",
  inspectEvidence: "SURVEY EXPOSED EDGES",
  runReconciliation: "RUN BOUNDED EDGE RECONCILIATION",
  finalizeReview: "FINALIZE BOUNDED REVIEW",
  saveLedger: "SAVE BOUNDED EDGE LEDGER",
  returnOffsetReach: "RETURN TO OFFSET REACH",
  returnCityThreshold: "RETURN TO CITY THRESHOLD",
  lookContinuation: "LOOK AT OUTWARD CONTINUATION",
});

export const occludedFoldPresentation = Object.freeze({
  sceneBoard: "SC-10",
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

export const occludedFoldReferenceSources = Object.freeze({
  primary: `import os

edge_records = [
    {"record_id": "near_lamellar", "status": "correspondence", "candidates": ["far_lamellar"]},
    {"record_id": "far_unmatched", "status": "unmatched", "candidates": []},
    {"record_id": "far_ambiguous", "status": "ambiguous", "candidates": ["near_lamellar", "near_filament"]},
    {"record_id": "outer_margin", "status": "unavailable", "candidates": None},
]
mode = os.environ.get("EDGE_LEDGER_MODE")
if mode != "bounded":
    raise ValueError("EDGE_LEDGER_MODE must be bounded")
edge_ledger = {
    "mode": mode,
    "correspondence": [record["record_id"] for record in edge_records if record["status"] == "correspondence"],
    "unmatched": [record["record_id"] for record in edge_records if record["status"] == "unmatched"],
    "ambiguous": {record["record_id"]: record["candidates"] for record in edge_records if record["status"] == "ambiguous"},
    "unavailable": [record["record_id"] for record in edge_records if record["status"] == "unavailable"],
    "identity": None,
    "topology": None,
    "continuity": None,
    "transformation": None,
    "cause": None,
    "purpose": None,
}`,
  transfer: `import os

edge_records = [
    {"record_id": "inlet_ribbed", "status": "correspondence", "candidates": ["outer_ribbed"]},
    {"record_id": "outer_solitary", "status": "unmatched", "candidates": []},
    {"record_id": "outer_mixed", "status": "ambiguous", "candidates": ["inlet_ribbed", "inlet_beaded"]},
    {"record_id": "sealed_edge", "status": "unavailable", "candidates": None},
]
mode = os.environ.get("REPLICA_LEDGER_MODE")
if mode != "bounded":
    raise ValueError("REPLICA_LEDGER_MODE must be bounded")
edge_ledger = {
    "mode": mode,
    "correspondence": [record["record_id"] for record in edge_records if record["status"] == "correspondence"],
    "unmatched": [record["record_id"] for record in edge_records if record["status"] == "unmatched"],
    "ambiguous": {record["record_id"]: record["candidates"] for record in edge_records if record["status"] == "ambiguous"},
    "unavailable": [record["record_id"] for record in edge_records if record["status"] == "unavailable"],
    "identity": None,
    "topology": None,
    "continuity": None,
    "transformation": None,
    "cause": None,
    "purpose": None,
}`,
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
  systemUserBoundary: "system_prompts_carry_persistent_role_rules_boundaries_and_output_contracts_while_user_prompts_carry_the_current_task_and_supplied_input",
  truthAuthorityBoundary: "prompt_quality_neither_proves_output_truth_nor_authorizes_live_action",
});

const observationIds = Object.freeze([
  "three_near_margins",
  "bounded_signature_correspondences",
  "unmatched_exposed_record",
  "ambiguous_candidate_record",
  "unavailable_outer_margin",
  "layered_edge_stewardship",
]);
const pythonCheckIds = Object.freeze([...contract.python_contract.checks]);
const traceDimensions = Object.freeze(Object.keys(occludedFoldPythonTraceAnswers));
const aiDimensions = Object.freeze([...contract.ai901_contract.dimensions]);
const allowedMisconceptions = new Set(contract.ai901_contract.misconception_tags);
const ledgerKeys = Object.freeze(["mode", "correspondence", "unmatched", "ambiguous", "unavailable", "identity", "topology", "continuity", "transformation", "cause", "purpose"]);
const unsupportedLimitKeys = Object.freeze(["identity", "topology", "continuity", "transformation", "cause", "purpose"]);
const safeReturnTargets = Object.freeze({
  [occludedFoldActions.returnOffsetReach]: "RP-008",
  [occludedFoldActions.returnCityThreshold]: "CITY_THRESHOLD",
});
const unsafeFixturePattern = /learner_?source|environment_?(?:snapshot|values?|choices?)|edge_?(?:records?|ledger)|raw_?cases?|case_?answers?|free_?form_?reasoning|private_?notes?|identity_?content|credentials?|secrets?|endpoints?|payloads?|responses?|source_?content|exam_?items?|external_?action_?requests?|forged|stale|combined|scene_?derived|position_?derived|signature_?derived|silhouette_?derived|timing_?derived|focus_?derived|navigation_?derived|presentation_?derived|accessibility_?derived|save_?display_?derived|tour_?derived|weakness_?derived|confidence_?derived/i;
const forbiddenSourcePattern = /\b(?:open|print|eval|exec|system|popen|remove|unlink|rmdir|requests|urlopen|fetch|connect|send|write_text|read_text|subprocess|socket|pip|install)\s*\(/i;

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

export function evaluateOccludedFoldPython(form, learnerSource) {
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
  const failedCheckIds = pythonCheckIds.filter((id) => !checks[id]);
  return Object.freeze({
    form, checks, score: pythonCheckIds.length - failedCheckIds.length, passed: failedCheckIds.length === 0,
    failedCheckIds: Object.freeze(failedCheckIds),
    derivedLedger: failedCheckIds.length === 0 ? expectedLedger(form) : null,
    environmentReads: gets.length,
    transientAudit: Object.freeze({ sourceRetained: false, environmentValuesRetained: false, recordsRetained: false, ledgerWorkRetained: false, cleared: true }),
  });
}

export function evaluateOccludedFoldPythonTrace(answers) {
  const correctness = Object.fromEntries(Object.entries(occludedFoldPythonTraceAnswers)
    .map(([dimension, expected]) => [dimension, answers?.[dimension] === expected]));
  return Object.freeze({ correctness: Object.freeze(correctness), score: Object.values(correctness).filter(Boolean).length, passed: Object.values(correctness).every(Boolean) });
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
    for (const dimension of aiDimensions) {
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
    passed: Object.values(correctness).every(Boolean), misconceptionTags: Object.freeze(tags),
  });
}

export const occludedFoldNeutralPromptInterface = Object.freeze({
  owner: "EXPEDITION COURSE",
  answerSource: "course_authored_neutral_text_cases_only",
  sceneEvidenceExcluded: true,
  inferredWeaknessExcluded: true,
  performsLiveModelCall: false,
  usesCredentialsOrEndpoints: false,
  cases: Object.freeze(Object.fromEntries(["primary", "retrieval", "transfer"].map((form) => [form,
    Object.freeze(contract.ai901_contract.forms[form].map((item) => Object.freeze({ id: item.id, prompt: item.prompt }))),
  ]))),
});

function prerequisitesPass(value) {
  return value?.python?.lessonId === "L-03-03" && value.python.skillId === "PY-017"
    && value.python.readinessStatus === "ready" && Array.isArray(value.python.prerequisiteSkillIds)
    && ["PY-009", "PY-012", "PY-016"].every((id) => value.python.prerequisiteSkillIds.includes(id))
    && value?.ai901?.lessonId === "L-05-02" && value.ai901.objectiveId === "AI901-D2-O1"
    && value.ai901.objectiveReady === true && value.ai901.readinessStatus === "ready"
    && Array.isArray(value.ai901.sourceLessonIds) && value.ai901.sourceLessonIds.includes("L-06-01");
}

function predecessorPasses(value, continuation) {
  const restored = deriveOffsetReachResume(value);
  const saved = restored?.saved;
  return restored?.phase === "verified_restore"
    && saved?.version === OFFSET_REACH_PROTECTED_JOURNEY_VERSION
    && saved.packetId === "RP-008" && saved.mappingId === "RP008-A3-OFFSET-REACH"
    && saved.checkpoint === "offset_reach_complete" && saved.continuation === continuation
    && saved.cityStateDelta === null && saved.externalStateDelta === null && saved.successor === null
    && saved.retainedRp007Summary?.checkpoint === "braided_verge_complete"
    && saved.note?.retained_local_association === true && saved.note?.unavailable_case === 1
    && saved.note?.universal === null && saved.note?.exclusive === null
    && saved.note?.unity === null && saved.note?.cause === null && saved.note?.purpose === null;
}

function retainedRp008Summary(value) {
  return Object.freeze({
    checkpoint: value.checkpoint,
    retained_local_association: value.note.retained_local_association,
    recurring_familiar_contact: value.note.recurring_familiar_contact,
    comparable_non_contact: value.note.comparable_non_contact,
    cross_family_contact: value.note.cross_family_contact,
    unavailable_case: value.note.unavailable_case,
    universal: null, exclusive: null, unity: null, cause: null, purpose: null,
  });
}

function focusForBoundary(boundary) {
  const targets = {
    observations: "occluded_edge_survey_heading", pythonPrimary: "python_primary_heading", pythonTrace: "python_trace_heading",
    pythonTransfer: "python_transfer_heading", promptPrimary: "prompt_primary_heading", promptRetrieval: "prompt_retrieval_heading",
    promptTransfer: "prompt_transfer_heading", systemUserBoundaryExplanation: "system_user_boundary_explanation",
    truthAuthorityBoundaryExplanation: "truth_authority_boundary_explanation", review: "bounded_review_heading", saved: "saved_controls",
  };
  return Object.freeze({ group: boundary, target: targets[boundary] ?? "occluded_edge_survey_heading" });
}

function firstIncompleteFocus(completion) {
  const order = ["observations", "pythonPrimary", "pythonTrace", "pythonTransfer", "promptPrimary", "promptRetrieval", "promptTransfer", "systemUserBoundaryExplanation", "truthAuthorityBoundaryExplanation", "review", "saved"];
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
    ["PY-017", "primary", pythonCheckIds], ["PY-017", "trace", traceDimensions], ["PY-017", "transfer", pythonCheckIds],
    ["RP009-PROMPT-BOUNDARY-01", "primary", aiShape("primary")],
    ["RP009-PROMPT-BOUNDARY-01", "retrieval", aiShape("retrieval")],
    ["RP009-PROMPT-BOUNDARY-01", "transfer", aiShape("transfer")],
    ["RP009-PROMPT-BOUNDARY-01", "system_user_boundary_explanation", ["system_user_boundary"]],
    ["RP009-PROMPT-BOUNDARY-01", "truth_authority_boundary_explanation", ["truth_authority_boundary"]],
  ];
}

function sanitizeRp007Summary(value) {
  const keys = ["checkpoint", "continuities", "association", "difference", "junction", "unity", "cause", "purpose"];
  if (!value || Object.keys(value).length !== keys.length || keys.some((key) => !(key in value))
    || value.checkpoint !== "braided_verge_complete" || value.continuities !== "distinct_visible_continuities"
    || value.association !== "recurrent_exposed_association" || value.difference !== "one_bounded_difference"
    || value.junction !== "closed_junction_unavailable" || value.unity !== null || value.cause !== null || value.purpose !== null) return null;
  return Object.freeze({ ...value });
}

function sanitizeRp008Summary(value) {
  const keys = ["checkpoint", "retained_local_association", "recurring_familiar_contact", "comparable_non_contact", "cross_family_contact", "unavailable_case", "universal", "exclusive", "unity", "cause", "purpose"];
  if (!value || Object.keys(value).length !== keys.length || keys.some((key) => !(key in value))
    || value.checkpoint !== "offset_reach_complete" || value.retained_local_association !== true
    || value.recurring_familiar_contact !== 1 || value.comparable_non_contact !== 1
    || value.cross_family_contact !== 1 || value.unavailable_case !== 1
    || [value.universal, value.exclusive, value.unity, value.cause, value.purpose].some((item) => item !== null)) return null;
  return Object.freeze({ ...value });
}

function sanitizeSave(value) {
  const exactTopKeys = ["version", "packetId", "mappingId", "checkpoint", "continuation", "cityStateDelta", "externalStateDelta", "successor", "retainedRp007Summary", "retainedRp008Summary", "edgeLedger", "evidence"];
  if (!value || Object.keys(value).length !== exactTopKeys.length || exactTopKeys.some((key) => !(key in value))
    || value.version !== OCCLUDED_FOLD_PROTECTED_JOURNEY_VERSION || value.packetId !== "RP-009"
    || value.mappingId !== contract.mapping_id || value.checkpoint !== "occluded_fold_complete"
    || value.continuation !== "continuation" || value.cityStateDelta !== null || value.externalStateDelta !== null || value.successor !== null) return null;
  const rp007 = sanitizeRp007Summary(value.retainedRp007Summary);
  const rp008 = sanitizeRp008Summary(value.retainedRp008Summary);
  if (!rp007 || !rp008) return null;
  const ledger = value.edgeLedger;
  const reconciliation = ledger?.reconciliation;
  if (!ledger || Object.keys(ledger).length !== 2 || !exactObservationSet(ledger.observations)
    || !reconciliation || Object.keys(reconciliation).length !== ledgerKeys.length
    || ledgerKeys.some((key) => !(key in reconciliation)) || stableJson(reconciliation) !== stableJson(expectedLedger("primary"))) return null;
  const expected = expectedEvidenceShape();
  const evidenceKeys = ["packet_id", "mapping_id", "form", "skill_or_objective_id", "dimension_correctness", "attempt_count", "hint_level", "confidence", "misconception_tags", "mastery_status"];
  const evidenceValid = Array.isArray(value.evidence) && value.evidence.length === expected.length
    && expected.every(([id, form, dimensions], index) => {
      const record = value.evidence[index];
      const correctness = record?.dimension_correctness;
      return record && Object.keys(record).length === evidenceKeys.length && evidenceKeys.every((key) => key in record)
        && record.packet_id === contract.packet_id && record.mapping_id === contract.mapping_id
        && record.skill_or_objective_id === id && record.form === form && record.mastery_status === "mastered"
        && Array.isArray(record.misconception_tags) && record.misconception_tags.every((tag) => allowedMisconceptions.has(tag))
        && correctness && Object.keys(correctness).length === dimensions.length && dimensions.every((dimension) => correctness[dimension] === true);
    });
  if (!evidenceValid) return null;
  return Object.freeze({
    version: value.version, packetId: value.packetId, mappingId: value.mappingId, checkpoint: value.checkpoint,
    continuation: value.continuation, cityStateDelta: null, externalStateDelta: null, successor: null,
    retainedRp007Summary: rp007, retainedRp008Summary: rp008,
    edgeLedger: Object.freeze({ observations: Object.freeze([...observationIds]), reconciliation: expectedLedger("primary") }),
    evidence: Object.freeze(value.evidence.map((record) => evidenceRecord({
      form: record.form, skillOrObjectiveId: record.skill_or_objective_id, correctness: record.dimension_correctness,
      attempts: record.attempt_count, hints: record.hint_level, confidence: record.confidence, misconceptionTags: record.misconception_tags,
    }))),
  });
}

export function createOccludedFoldPersistenceAdapter(initialValue = null) {
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

export function deriveOccludedFoldResume(value) {
  const saved = sanitizeSave(value);
  if (saved) return Object.freeze({
    phase: "verified_restore", completion: Object.freeze({ saved: true }),
    focusIntent: Object.freeze({ group: "verified_restore", target: "saved_controls" }), saved,
    transientWorkCleared: true, privateWorkCleared: true, replayedEvents: Object.freeze([]),
  });
  const ordered = ["pythonPrimary", "pythonTrace", "pythonTransfer", "promptPrimary", "promptRetrieval", "promptTransfer", "systemUserBoundaryExplanation", "truthAuthorityBoundaryExplanation", "review"];
  const completion = { observations: false };
  let gap = false;
  for (const key of ordered) {
    const finalized = value?.finalized?.[key] === true;
    if (gap || !finalized) { gap = true; completion[key] = false; } else completion[key] = true;
  }
  return Object.freeze({
    phase: "OF-10 SURVEY EXPOSED EDGES", completion: Object.freeze(completion), focusIntent: firstIncompleteFocus(completion),
    saved: null, retainedRp007Summary: sanitizeRp007Summary(value?.retainedRp007Summary) ?? null,
    retainedRp008Summary: sanitizeRp008Summary(value?.retainedRp008Summary) ?? null,
    observationsMustBeReobserved: true, transientWorkCleared: true, privateWorkCleared: true, replayedEvents: Object.freeze([]),
  });
}

export function deriveOccludedFoldSafeReturn(action) {
  const target = safeReturnTargets[action];
  if (!target) throw new TypeError("An explicit approved return action is required.");
  return Object.freeze({ target, continuation: "continuation", cityStateDelta: null, externalStateDelta: null,
    replayedEvents: Object.freeze([]), successor: null, authorityGranted: false, externalActionEnabled: false,
    transientWorkCleared: true, privateWorkCleared: true });
}

export function deriveOccludedFoldLookContinuation(action) {
  if (action !== occludedFoldActions.lookContinuation) throw new TypeError("The outward continuation is LOOK-only.");
  return Object.freeze({ action: "LOOK", observed: true, destination: null, routeOpened: false, persisted: false,
    evidenceGranted: false, successor: null, authorityGranted: false, externalActionEnabled: false });
}

function answerFreeFailure(boundary, message, { misconceptionTags = [], failedCheckIds = [] } = {}) {
  const error = new Error(message);
  error.recovery = Object.freeze({
    boundary, answerIncluded: false, retryBlank: true, attemptsRemaining: "unlimited",
    remediationTags: Object.freeze(misconceptionTags.filter((tag) => allowedMisconceptions.has(tag))),
    failedCheckIds: Object.freeze(failedCheckIds.filter((id) => pythonCheckIds.includes(id))),
    remediationSource: misconceptionTags.length ? "scored_misconception_tags_only" : failedCheckIds.length ? "failed_python_checks_only" : "boundary_only",
    transientWorkCleared: true, privateWorkCleared: true, focusIntent: focusForBoundary(boundary),
  });
  throw error;
}

function buildEvidence(results) {
  return Object.freeze([
    evidenceRecord({ form: "primary", skillOrObjectiveId: "PY-017", correctness: results.pythonPrimary.checks }),
    evidenceRecord({ form: "trace", skillOrObjectiveId: "PY-017", correctness: results.pythonTrace.correctness }),
    evidenceRecord({ form: "transfer", skillOrObjectiveId: "PY-017", correctness: results.pythonTransfer.checks }),
    evidenceRecord({ form: "primary", skillOrObjectiveId: "RP009-PROMPT-BOUNDARY-01", correctness: results.promptPrimary.correctness }),
    evidenceRecord({ form: "retrieval", skillOrObjectiveId: "RP009-PROMPT-BOUNDARY-01", correctness: results.promptRetrieval.correctness }),
    evidenceRecord({ form: "transfer", skillOrObjectiveId: "RP009-PROMPT-BOUNDARY-01", correctness: results.promptTransfer.correctness }),
    evidenceRecord({ form: "system_user_boundary_explanation", skillOrObjectiveId: "RP009-PROMPT-BOUNDARY-01", correctness: { system_user_boundary: true } }),
    evidenceRecord({ form: "truth_authority_boundary_explanation", skillOrObjectiveId: "RP009-PROMPT-BOUNDARY-01", correctness: { truth_authority_boundary: true } }),
  ]);
}

/** Protected Node-only reference caller. It is intentionally absent from App/main, routes, bundles, and browser persistence. */
export function runOccludedFoldProtectedJourneySmoke(fixture) {
  const acceptedBytes = JSON.stringify(fixture?.acceptedCampaign);
  const predecessorBytes = JSON.stringify(fixture?.predecessor);
  const tourBytes = JSON.stringify(fixture?.tour);
  const continuation = fixture?.acceptedCampaign?.continuation;
  if (continuation !== "continuation" || fixture.acceptedCampaign?.cityStateDelta !== null
    || fixture.acceptedCampaign?.externalStateDelta !== null || fixture.acceptedCampaign?.successor !== null) {
    throw new TypeError("The exact accepted campaign boundary is required.");
  }
  const optionalUnsafe = { privateNotes: fixture.privateNotes, credentials: fixture.credentials, endpoint: fixture.endpoint, flags: fixture.flags,
    sceneSignal: fixture.sceneSignal, confidenceSignal: fixture.confidenceSignal, presentationSignal: fixture.presentationSignal };
  if (unsafeFixturePattern.test(JSON.stringify(optionalUnsafe))) throw new TypeError("Unsafe, private, inferred, presentation-derived, or Tour-derived input is not accepted.");
  if (!predecessorPasses(fixture.predecessor, continuation)) throw new TypeError("Exact verified RP-008 completion is required.");
  const earlyReturn = deriveOccludedFoldSafeReturn(fixture.earlyReturnAction);
  if (fixture.orientAction !== occludedFoldActions.orient || fixture.inspectAction !== occludedFoldActions.inspectEvidence) {
    throw new TypeError("Exact separate orient and survey actions are required.");
  }
  if (!prerequisitesPass(fixture.prerequisites)) return Object.freeze({
    version: OCCLUDED_FOLD_PROTECTED_JOURNEY_VERSION, status: "prerequisite_hold", protected: true, routable: false,
    storyNavigationLocked: false, completion: Object.freeze({}), earlyReturn, cityStateDelta: null, externalStateDelta: null,
    successor: null, transientWorkCleared: true, privateWorkCleared: true,
  });
  if (!exactObservationSet(fixture.observationOrder)) answerFreeFailure("observations", "Record each supported exposed-edge observation; revisits are harmless.");
  if (fixture.runAction !== occludedFoldActions.runReconciliation) throw new TypeError("Exact bounded reconciliation action is required.");
  const results = {
    pythonPrimary: evaluateOccludedFoldPython("primary", fixture.pythonPrimarySource),
    pythonTrace: evaluateOccludedFoldPythonTrace(fixture.pythonTraceAnswers),
    pythonTransfer: evaluateOccludedFoldPython("transfer", fixture.pythonTransferSource),
    promptPrimary: evaluateOccludedFoldPromptBoundary("primary", fixture.promptAnswers?.primary),
    promptRetrieval: evaluateOccludedFoldPromptBoundary("retrieval", fixture.promptAnswers?.retrieval),
    promptTransfer: evaluateOccludedFoldPromptBoundary("transfer", fixture.promptAnswers?.transfer),
  };
  for (const boundary of ["pythonPrimary", "pythonTrace", "pythonTransfer", "promptPrimary", "promptRetrieval", "promptTransfer"]) {
    if (!results[boundary].passed) answerFreeFailure(boundary, "The current bounded check is incomplete.", {
      misconceptionTags: results[boundary].misconceptionTags ?? [], failedCheckIds: results[boundary].failedCheckIds ?? [],
    });
  }
  if (fixture.explanations?.systemUserBoundary !== occludedFoldExplanationAnswers.systemUserBoundary) {
    answerFreeFailure("systemUserBoundaryExplanation", "Explain the persistent-system and current-user prompt boundary.");
  }
  if (fixture.explanations?.truthAuthorityBoundary !== occludedFoldExplanationAnswers.truthAuthorityBoundary) {
    answerFreeFailure("truthAuthorityBoundaryExplanation", "Explain the truth and authority limit of a prompt.");
  }
  if (fixture.reviewAction !== occludedFoldActions.finalizeReview) answerFreeFailure("review", "Finalize the separate bounded review.");
  if (fixture.saveAction !== occludedFoldActions.saveLedger) throw new TypeError("Exact separate atomic save action is required.");
  const evidence = buildEvidence(results);
  const candidate = {
    version: OCCLUDED_FOLD_PROTECTED_JOURNEY_VERSION, packetId: "RP-009", mappingId: contract.mapping_id,
    checkpoint: "occluded_fold_complete", continuation, cityStateDelta: null, externalStateDelta: null, successor: null,
    retainedRp007Summary: fixture.predecessor.retainedRp007Summary,
    retainedRp008Summary: retainedRp008Summary(fixture.predecessor),
    edgeLedger: { observations: [...new Set(fixture.observationOrder)], reconciliation: results.pythonPrimary.derivedLedger }, evidence,
  };
  const adapter = createOccludedFoldPersistenceAdapter();
  const commit = adapter.write(candidate);
  if (commit.status !== "committed") throw new TypeError("Atomic save rejected the bounded evidence.");
  const restored = deriveOccludedFoldResume(adapter.read());
  if (restored.phase !== "verified_restore" || restored.replayedEvents.length !== 0) throw new TypeError("Verified replay-free restore is required.");
  const returnedRoute = deriveOccludedFoldSafeReturn(fixture.finalReturnAction);
  const onwardContinuation = deriveOccludedFoldLookContinuation(fixture.lookContinuationAction);
  const tourAdapter = createOccludedFoldPersistenceAdapter();
  const tourProbe = Object.freeze({ mode: fixture.tour?.mode, observationsFinalized: false, masteryFinalized: false,
    saveStatus: "tour_preview_only", routeUnlocked: false, successor: null, adapterValue: tourAdapter.read() });
  if (JSON.stringify(fixture.acceptedCampaign) !== acceptedBytes || JSON.stringify(fixture.predecessor) !== predecessorBytes || JSON.stringify(fixture.tour) !== tourBytes) {
    throw new TypeError("Protected inputs must remain byte-stable.");
  }
  const completion = Object.fromEntries(["observations", "pythonPrimary", "pythonTrace", "pythonTransfer", "promptPrimary", "promptRetrieval", "promptTransfer", "systemUserBoundaryExplanation", "truthAuthorityBoundaryExplanation", "review", "saved"].map((key) => [key, true]));
  return Object.freeze({
    version: OCCLUDED_FOLD_PROTECTED_JOURNEY_VERSION, status: "protected_reference_complete", protected: true, routable: false,
    offlineOnly: true, browserStorageUsed: false, networkUsed: false, liveWorldRead: false, liveInteriorRead: false,
    liveTraceJoinRouteOpenControlPerformed: false, sceneEvidenceUsed: false, presentationEvidenceUsed: false,
    accessibilityEvidenceUsed: false, confidenceEvidenceUsed: false, timingEvidenceUsed: false, focusEvidenceUsed: false,
    navigationEvidenceUsed: false, saveDisplayEvidenceUsed: false, tourEvidenceUsed: false, externalActionEnabled: false,
    authorityGranted: false, examCreditGranted: false, examGuarantee: false, continuation,
    cityStateDelta: null, externalStateDelta: null, worldStateChanged: false, worldClockDelta: null, successor: null,
    timeline: Object.freeze(["OF-00 ARRIVE + ORIENT", "OF-10 SURVEY EXPOSED EDGES", "OF-20 RECONCILE BOUNDARIES + SAVE", "OF-30 VERIFY + RETURN"]),
    observations: Object.freeze([...new Set(fixture.observationOrder)]), revisitCount: fixture.observationOrder.length - observationIds.length,
    completion: Object.freeze(completion), focusIntent: firstIncompleteFocus(completion),
    transientAudit: Object.freeze({ primary: results.pythonPrimary.transientAudit, transfer: results.pythonTransfer.transientAudit,
      allCleared: true, privateCleared: true, environmentReadsPrimary: results.pythonPrimary.environmentReads,
      environmentReadsTransfer: results.pythonTransfer.environmentReads }),
    saved: restored.saved,
    restored: Object.freeze({ phase: restored.phase, checkpoint: restored.saved.checkpoint, focusIntent: restored.focusIntent,
      replayedEvents: restored.replayedEvents, transientWorkCleared: restored.transientWorkCleared, privateWorkCleared: restored.privateWorkCleared }),
    earlyReturn, returnedRoute, onwardContinuation, tourProbe, presentation: occludedFoldPresentation,
    capabilityInterface: occludedFoldNeutralPromptInterface,
  });
}

export const occludedFoldReferenceAnswers = Object.freeze({
  prompt: Object.freeze(Object.fromEntries(["primary", "retrieval", "transfer"].map((form) => [form,
    Object.freeze(Object.fromEntries(contract.ai901_contract.forms[form].map((item) => [item.id,
      Object.freeze(Object.fromEntries(aiDimensions.map((dimension) => [dimension, item[dimension]]))),
    ]))),
  ]))),
  pythonTrace: occludedFoldPythonTraceAnswers,
  explanations: occludedFoldExplanationAnswers,
});
