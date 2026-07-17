import contract from "../../curriculum/readiness/RP-011/contract.json" with { type: "json" };
import {
  COUNTERFIELD_PROTECTED_JOURNEY_VERSION,
  deriveCounterfieldResume,
} from "./CounterfieldProtectedJourney.js";

export const UNBORROWED_REACH_PROTECTED_JOURNEY_VERSION = "rp011.protected-journey.v1";

export const unborrowedReachActions = Object.freeze({
  isolate: "ENTER INDEPENDENT-RECORD MODE",
  inspectFresh: "INSPECT FRESH REACH EVIDENCE",
  runLocalWork: "RUN FRESH REPLICA INTEGRATION",
  reviewFresh: "REVIEW FRESH BOUNDED RECORD",
  finalizeFresh: "FINALIZE FRESH BOUNDED RECORD",
  reconcile: "RECONCILE METHODS AND LIMITS",
  reviewReconciliation: "REVIEW METHOD-AND-LIMIT RECONCILIATION",
  saveReconciliation: "SAVE SEPARATE RECONCILIATION",
  returnCounterfield: "RETURN TO COUNTERFIELD",
  returnCityThreshold: "RETURN TO CITY THRESHOLD",
  lookOutward: "LOOK AT UNRECORDED OUTWARD BEARING",
});

export const unborrowedReachPresentation = Object.freeze({
  sceneBoard: "SC-12",
  worldMasters: Object.freeze(["SC-12-UNBORROWED-REACH-PANORAMA-MASTER", "SC-12-LAMINATE-INTERFACE-DETAIL-MASTER"]),
  phases: Object.freeze(["UR-00 ARRIVE + ISOLATE", "UR-10 INSPECT FRESH EVIDENCE", "UR-20 REVIEW LOCAL WORK + FINALIZE FRESH RECORD", "UR-30 REOPEN + RECONCILE + VERIFY + RETURN"]),
  firstPerson: true,
  photorealistic: true,
  invariantWorld: true,
  independentLocalRhythms: true,
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
    completePriorScopesOneAtATime: contract.accessibility_contract.complete_prior_scopes_reopen_one_group_at_a_time,
    timeLimit: contract.accessibility_contract.time_limit,
    meaningUsesColorMotionAudioPositionScaleSequenceLayoutOrMemoryAlone: false,
    modalities: Object.freeze(["pointer", "touch", "keyboard_enter", "keyboard_space", "switch", "speech", "screen_reader"]),
  }),
});

export const unborrowedReachReferenceSources = Object.freeze({
  primary: `part_replicas = [
    {"kind": "api", "role": "request_response_contract", "value": "local_schema_only"},
    {"kind": "sdk", "role": "client_library_abstraction", "value": "local_replica_only"},
    {"kind": "endpoint", "role": "service_address_boundary", "value": None},
]

parts_by_kind = {}
for part in part_replicas:
    parts_by_kind[part["kind"]] = {"role": part["role"], "value": part["value"]}

fresh_integration_record = {
    "provenance": "fresh_sanitized_reach_replicas",
    "parts": parts_by_kind,
    "unsupported": {
        "identity": None,
        "topology": None,
        "continuity": None,
        "cause": None,
        "purpose": None,
        "readiness": None,
        "authority": None,
    },
}`,
  transfer: `part_replicas = [
    {"kind": "api", "role": "request_response_contract", "value": "bounded_exchange_shape"},
    {"kind": "sdk", "role": "client_library_abstraction", "value": "offline_client_shape"},
    {"kind": "endpoint", "role": "service_address_boundary", "value": None},
]

parts_by_kind = {}
for part in part_replicas:
    parts_by_kind[part["kind"]] = {"role": part["role"], "value": part["value"]}

fresh_integration_record = {
    "provenance": "blank_transfer_reach_replicas",
    "parts": parts_by_kind,
    "unsupported": {
        "identity": None,
        "topology": None,
        "continuity": None,
        "cause": None,
        "purpose": None,
        "readiness": None,
        "authority": None,
    },
}`,
});

export const unborrowedReachPythonTraceAnswers = Object.freeze({
  localExecution: "local_python_only_without_import_or_remote_client",
  suppliedReplicas: "three_supplied_replicas_remain_exact",
  apiRole: "api_remains_request_response_contract",
  sdkRole: "sdk_remains_client_library_abstraction",
  endpointRole: "endpoint_remains_service_address_boundary_with_null_value",
  provenance: "record_uses_only_fresh_local_replica_provenance",
  unsupportedLimits: "seven_unsupported_limits_remain_none",
  authorityBoundary: "a_valid_local_record_grants_no_permission_authority_route_or_external_action",
});

export const unborrowedReachExplanationAnswers = Object.freeze({
  surfaceBoundary: "portal_authoring_portal_testing_client_invocation_and_client_result_handling_are_four_distinct_surfaces",
  truthPermissionBoundary: "a_configured_tool_or_returned_result_neither_grants_permission_nor_proves_truth",
});

export const unborrowedReachObservationIds = Object.freeze([
  "persistent_transition",
  "similar_form_different_relation",
  "maintained_bypass",
  "multiple_candidate_exposure",
  "unavailable_comparable_margin",
  "layered_stewardship",
]);

export const unborrowedReachReopenIds = Object.freeze(["RP-007", "RP-008", "RP-009", "RP-010"]);

export const unborrowedReachReconciliationMethodIds = Object.freeze([
  "inspect_fresh_before_prior_conclusions",
  "preserve_scope_provenance",
  "keep_support_counterevidence_ambiguity_unavailability_separate",
  "keep_unknowns_explicit",
  "treat_prior_records_as_bounded_not_erased",
  "separate_method_transfer_from_conclusion_transfer",
]);

export const unborrowedReachLimitIds = Object.freeze([
  "identity", "topology", "continuity", "transformation", "unity", "synchronization",
  "chronology", "cause", "purpose", "readiness", "authority", "Machine_relation",
]);

const pythonCheckIds = Object.freeze([...contract.python_contract.checks]);
const pythonTraceDimensions = Object.freeze(Object.keys(unborrowedReachPythonTraceAnswers));
const aiDimensions = Object.freeze([...contract.ai901_contract.dimensions]);
const allowedMisconceptions = new Set(contract.ai901_contract.misconception_tags);
const safeReturnTargets = Object.freeze({
  [unborrowedReachActions.returnCounterfield]: "RP-010",
  [unborrowedReachActions.returnCityThreshold]: "CITY_THRESHOLD",
});
const unsafeFixturePattern = /learner_?source|part_?replicas?|integration_?record|raw_?cases?|case_?answers?|free_?form|private|identity_?content|prior_?record_?content|credentials?|secrets?|endpoints?|agent_?identifiers?|instructions?|tool_?payloads?|tool_?results?|conversation_?text|source_?content|exam_?items?|external_?action|forged|stale|merged|truncated|hardcoded|mutated|filled|memory_?derived|scene_?derived|success_?derived|visibility_?derived|display_?derived|timing_?derived|focus_?derived|accessibility_?derived|story_?derived|tour_?derived|remote|live_?service|successor_?bearing/i;
const forbiddenSourcePattern = /\b(?:import|from|open|print|eval|exec|system|popen|remove|unlink|rmdir|requests|urlopen|fetch|connect|send|write_text|read_text|subprocess|socket|httpx|aiohttp|azure|openai|AIProjectClient|DefaultAzureCredential)\b/i;

function stableJson(value) {
  if (value === null || typeof value !== "object") return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(stableJson).join(",")}]`;
  return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(",")}}`;
}

function frozenClone(value) {
  if (Array.isArray(value)) return Object.freeze(value.map(frozenClone));
  if (value && typeof value === "object") return Object.freeze(Object.fromEntries(Object.entries(value).map(([key, item]) => [key, frozenClone(item)])));
  return value;
}

function checksumFor(value) {
  const text = stableJson(value);
  let hash = 0x811c9dc5;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return `fnv1a32-${hash.toString(16).padStart(8, "0")}`;
}

function withChecksum(value) {
  return Object.freeze({ ...value, checksum: checksumFor(value) });
}

function normalized(value) {
  return String(value ?? "").replace(/\r/g, "").trim();
}

function exactPeerSet(value, canonical) {
  if (!Array.isArray(value) || value.some((id) => !canonical.includes(id))) return false;
  const unique = new Set(value);
  return unique.size === canonical.length && canonical.every((id) => unique.has(id));
}

function expectedPythonRecord(form) {
  const primary = form === "primary";
  return Object.freeze({
    provenance: primary ? "fresh_sanitized_reach_replicas" : "blank_transfer_reach_replicas",
    parts: Object.freeze({
      api: Object.freeze({ role: "request_response_contract", value: primary ? "local_schema_only" : "bounded_exchange_shape" }),
      sdk: Object.freeze({ role: "client_library_abstraction", value: primary ? "local_replica_only" : "offline_client_shape" }),
      endpoint: Object.freeze({ role: "service_address_boundary", value: null }),
    }),
    unsupported: Object.freeze(Object.fromEntries(["identity", "topology", "continuity", "cause", "purpose", "readiness", "authority"].map((key) => [key, null]))),
  });
}

export function evaluateUnborrowedReachPython(form, learnerSource) {
  if (!Object.hasOwn(unborrowedReachReferenceSources, form)) throw new TypeError("form must be primary or transfer.");
  const source = normalized(learnerSource);
  const expected = expectedPythonRecord(form);
  const canonical = normalized(unborrowedReachReferenceSources[form]);
  const safe = !forbiddenSourcePattern.test(source) && !/https?:\/\/|API_KEY|SECRET|PASSWORD|credential|endpoint\s*=\s*["']/i.test(source);
  const exactInputs = source === canonical;
  const checks = Object.freeze({
    local_python_only_no_import_or_remote_client: safe,
    supplied_replicas_preserved_exactly: exactInputs,
    api_role_preserved_as_request_response_contract: source.includes('"api", "role": "request_response_contract"') && source.includes('parts_by_kind[part["kind"]]'),
    sdk_role_preserved_as_client_library_abstraction: source.includes('"sdk", "role": "client_library_abstraction"') && source.includes('parts_by_kind[part["kind"]]'),
    endpoint_role_preserved_as_address_boundary_with_null_value: source.includes('{"kind": "endpoint", "role": "service_address_boundary", "value": None}'),
    fresh_record_uses_only_new_local_replica_provenance: source.includes(`"provenance": "${expected.provenance}"`) && source.includes('"parts": parts_by_kind'),
    unsupported_limits_remain_none: Object.keys(expected.unsupported).every((key) => new RegExp(`^[ \\t]*["']${key}["']\\s*:\\s*None\\s*,?\\s*$`, "m").test(source)),
    no_package_file_network_output_secret_credential_endpoint_or_external_operation: safe,
  });
  const failedCheckIds = pythonCheckIds.filter((id) => !checks[id]);
  return Object.freeze({
    form,
    checks,
    score: pythonCheckIds.length - failedCheckIds.length,
    passed: failedCheckIds.length === 0,
    failedCheckIds: Object.freeze(failedCheckIds),
    derivedRecord: failedCheckIds.length === 0 ? expected : null,
    transientAudit: Object.freeze({ sourceRetained: false, replicasRetained: false, integrationRecordRetained: false, cleared: true }),
  });
}

export function evaluateUnborrowedReachPythonTrace(answers) {
  const correctness = Object.fromEntries(Object.entries(unborrowedReachPythonTraceAnswers)
    .map(([dimension, expected]) => [dimension, answers?.[dimension] === expected]));
  return Object.freeze({ correctness: Object.freeze(correctness), score: Object.values(correctness).filter(Boolean).length, passed: Object.values(correctness).every(Boolean) });
}

export function evaluateUnborrowedReachAgentSurfaces(form, answers) {
  const cases = contract.ai901_contract.forms[form];
  if (!cases) throw new TypeError("form must be primary, retrieval, or transfer.");
  const correctness = {};
  const tags = [];
  for (const item of cases) {
    for (const dimension of aiDimensions) {
      const supplied = answers?.[item.id]?.[dimension];
      const key = `${item.id}.${dimension}`;
      correctness[key] = supplied === item[dimension];
      if (!correctness[key] && allowedMisconceptions.has(supplied) && !tags.includes(supplied)) tags.push(supplied);
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

export function evaluateUnborrowedReachReconciliation({ methods, limits } = {}) {
  const safeMethods = Array.isArray(methods) && methods.every((id) => unborrowedReachReconciliationMethodIds.includes(id));
  const methodsCorrectness = Object.fromEntries(unborrowedReachReconciliationMethodIds.map((id) => [id,
    safeMethods && methods.filter((candidate) => candidate === id).length === 1,
  ]));
  const exactLimitKeys = limits && Object.keys(limits).length === unborrowedReachLimitIds.length
    && unborrowedReachLimitIds.every((id) => Object.hasOwn(limits, id));
  const limitsCorrectness = Object.fromEntries(unborrowedReachLimitIds.map((id) => [id, exactLimitKeys && limits[id] === null]));
  const failedItemIds = [
    ...Object.entries(methodsCorrectness).filter(([, correct]) => !correct).map(([id]) => `method:${id}`),
    ...Object.entries(limitsCorrectness).filter(([, correct]) => !correct).map(([id]) => `limit:${id}`),
  ];
  return Object.freeze({
    methodsCorrectness: Object.freeze(methodsCorrectness),
    limitsCorrectness: Object.freeze(limitsCorrectness),
    methodScore: Object.values(methodsCorrectness).filter(Boolean).length,
    limitScore: Object.values(limitsCorrectness).filter(Boolean).length,
    passed: failedItemIds.length === 0,
    failedItemIds: Object.freeze(failedItemIds),
  });
}

export const unborrowedReachNeutralAgentInterface = Object.freeze({
  owner: "EXPEDITION COURSE",
  answerSource: "course_authored_neutral_single_agent_surface_cases_only",
  sceneEvidenceExcluded: true,
  priorRecordEvidenceExcluded: true,
  inferredWeaknessExcluded: true,
  performsLiveFoundryModelAgentEndpointOrToolCall: false,
  usesCredentialsEndpointsAgentIdentifiersInstructionsToolPayloadsOrResults: false,
  cases: Object.freeze(Object.fromEntries(["primary", "retrieval", "transfer"].map((form) => [form,
    Object.freeze(contract.ai901_contract.forms[form].map((item) => Object.freeze({ id: item.id, case: item.case }))),
  ]))),
});

function expectedRp009Ledger() {
  return Object.freeze({
    observations: Object.freeze(["three_near_margins", "bounded_signature_correspondences", "unmatched_exposed_record", "ambiguous_candidate_record", "unavailable_outer_margin", "layered_edge_stewardship"]),
    reconciliation: Object.freeze({
      mode: "bounded", correspondence: Object.freeze(["near_lamellar"]), unmatched: Object.freeze(["far_unmatched"]),
      ambiguous: Object.freeze({ far_ambiguous: Object.freeze(["near_lamellar", "near_filament"]) }),
      unavailable: Object.freeze(["outer_margin"]), identity: null, topology: null, continuity: null,
      transformation: null, cause: null, purpose: null,
    }),
  });
}

function expectedRp010Record() {
  return Object.freeze({
    checkpoint: "counterfield_complete",
    observations: Object.freeze(["recurrent_adjacency", "incomplete_ordered_change", "cross_scale_correspondence", "ordinary_unmatched_feature", "multi_candidate_relation", "unavailable_margin", "layered_stewardship"]),
    exchange: Object.freeze({
      request: Object.freeze({ method: "POST", route_label: "project_responses", content_type: "application/json", record_ids: Object.freeze(["near_relation", "ordered_gap", "far_correspondence"]), scope: "sanitized_exposed_record_replicas" }),
      response: Object.freeze({ status_code: 200, content_type: "application/json", supported: Object.freeze(["near_relation"]), counterevidence: Object.freeze(["far_correspondence"]), ambiguous: Object.freeze(["ordered_gap"]), unavailable: Object.freeze(["outer_margin"]) }),
      unsupported: Object.freeze(Object.fromEntries(["identity", "topology", "continuity", "transformation", "unity", "synchronization", "chronology", "cause", "purpose"].map((key) => [key, null]))),
    }),
  });
}

function validRp007(value) {
  return value?.checkpoint === "braided_verge_complete" && value.continuities === "distinct_visible_continuities"
    && value.association === "recurrent_exposed_association" && value.difference === "one_bounded_difference"
    && value.junction === "closed_junction_unavailable" && value.unity === null && value.cause === null && value.purpose === null;
}

function validRp008(value) {
  return value?.checkpoint === "offset_reach_complete" && value.retained_local_association === true
    && value.recurring_familiar_contact === 1 && value.comparable_non_contact === 1 && value.cross_family_contact === 1
    && value.unavailable_case === 1 && [value.universal, value.exclusive, value.unity, value.cause, value.purpose].every((item) => item === null);
}

function validRecords(records) {
  return records && Object.keys(records).join("|") === "rp007|rp008|rp009|rp010|rp011"
    && validRp007(records.rp007) && validRp008(records.rp008)
    && stableJson(records.rp009) === stableJson(expectedRp009Ledger())
    && stableJson(records.rp010) === stableJson(expectedRp010Record())
    && validFreshRecord(records.rp011);
}

function predecessorRecords(value, continuation) {
  const restored = deriveCounterfieldResume(value);
  const saved = restored?.saved;
  if (restored?.phase !== "verified_restore" || saved?.version !== COUNTERFIELD_PROTECTED_JOURNEY_VERSION
    || saved.packetId !== "RP-010" || saved.checkpoint !== "counterfield_complete"
    || saved.continuation !== continuation || saved.cityStateDelta !== null || saved.externalStateDelta !== null || saved.successor !== null) return null;
  const rp010 = { checkpoint: saved.checkpoint, observations: saved.scopeRegister?.observations, exchange: saved.scopeRegister?.exchange };
  if (stableJson(rp010) !== stableJson(expectedRp010Record())) return null;
  return Object.freeze({
    rp007: frozenClone(saved.retainedRp007Summary),
    rp008: frozenClone(saved.retainedRp008Summary),
    rp009: frozenClone(saved.retainedRp009Ledger),
    rp010: frozenClone(rp010),
  });
}

function prerequisitesPass(value) {
  return value?.python?.skillId === "PY-019" && value.python.readinessStatus === "ready"
    && Array.isArray(value.python.sourceLessonIds) && value.python.sourceLessonIds.includes("L-05-03")
    && value?.ai901?.objectiveId === "AI901-D2-O4" && value.ai901.readinessStatus === "ready"
    && Array.isArray(value.ai901.sourceLessonIds) && ["L-05-04", "L-06-01"].every((id) => value.ai901.sourceLessonIds.includes(id));
}

function evidenceRecord({ form, skillOrObjectiveId, correctness, attempts = 1, hints = 0, confidence = null, misconceptionTags = [] }) {
  return Object.freeze({
    packet_id: contract.packet_id,
    mapping_id: contract.mapping_id,
    form,
    skill_or_objective_id: skillOrObjectiveId,
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
    ["PY-019", "primary", pythonCheckIds], ["PY-019", "trace", pythonTraceDimensions], ["PY-019", "transfer", pythonCheckIds],
    ["RP011-SINGLE-AGENT-SURFACES-01", "primary", aiShape("primary")],
    ["RP011-SINGLE-AGENT-SURFACES-01", "retrieval", aiShape("retrieval")],
    ["RP011-SINGLE-AGENT-SURFACES-01", "transfer", aiShape("transfer")],
    ["RP011-SINGLE-AGENT-SURFACES-01", "surface_boundary_explanation", ["surface_boundary"]],
    ["RP011-SINGLE-AGENT-SURFACES-01", "truth_permission_boundary_explanation", ["truth_permission_boundary"]],
  ];
}

function validEvidence(evidence) {
  const expected = expectedEvidenceShape();
  const keys = ["packet_id", "mapping_id", "form", "skill_or_objective_id", "dimension_correctness", "attempt_count", "hint_level", "confidence", "misconception_tags", "mastery_status"];
  return Array.isArray(evidence) && evidence.length === expected.length && expected.every(([id, form, dimensions], index) => {
    const record = evidence[index];
    return record && Object.keys(record).length === keys.length && keys.every((key) => key in record)
      && record.packet_id === contract.packet_id && record.mapping_id === contract.mapping_id
      && record.skill_or_objective_id === id && record.form === form && record.mastery_status === "mastered"
      && Array.isArray(record.misconception_tags) && record.misconception_tags.every((tag) => allowedMisconceptions.has(tag))
      && record.dimension_correctness && Object.keys(record.dimension_correctness).length === dimensions.length
      && dimensions.every((dimension) => record.dimension_correctness[dimension] === true);
  });
}

function canonicalFreshRecord() {
  return Object.freeze({
    checkpoint: "unborrowed_reach_fresh_record",
    provenance: "fresh_SC12_expedition_observation",
    observations: Object.freeze([...unborrowedReachObservationIds]),
    boundedSupport: Object.freeze(["persistent_transition", "maintained_bypass", "layered_stewardship"]),
    counterevidence: Object.freeze(["similar_form_different_relation"]),
    ambiguity: Object.freeze(["multiple_candidate_exposure"]),
    unavailability: Object.freeze(["unavailable_comparable_margin"]),
    unknowns: Object.freeze(Object.fromEntries(unborrowedReachLimitIds.map((key) => [key, null]))),
  });
}

function validFreshRecord(value) {
  return stableJson(value) === stableJson(canonicalFreshRecord());
}

function canonicalVisibility(state) {
  const priorState = state === "reopened" ? "reopened" : "hidden_retained";
  return Object.freeze({ rp007: priorState, rp008: priorState, rp009: priorState, rp010: priorState, rp011: "current" });
}

function validReconciliation(value) {
  return value && Object.keys(value).join("|") === "methods|limits"
    && stableJson(value.methods) === stableJson(Object.fromEntries(unborrowedReachReconciliationMethodIds.map((id) => [id, true])))
    && stableJson(value.limits) === stableJson(Object.fromEntries(unborrowedReachLimitIds.map((id) => [id, null])));
}

function sanitizeSave(value) {
  const keys = ["version", "packetId", "mappingId", "checkpoint", "continuation", "cityStateDelta", "worldStateDelta", "externalStateDelta", "successor", "visibility", "records", "evidence", "reopenedScopes", "reconciliation", "checksum"];
  if (!value || Object.keys(value).length !== keys.length || keys.some((key) => !(key in value))) return null;
  const { checksum, ...unsigned } = value;
  if (checksum !== checksumFor(unsigned) || value.version !== UNBORROWED_REACH_PROTECTED_JOURNEY_VERSION
    || value.packetId !== "RP-011" || value.mappingId !== contract.mapping_id || value.continuation !== "continuation"
    || value.cityStateDelta !== null || value.worldStateDelta !== null || value.externalStateDelta !== null || value.successor !== null
    || !validRecords(value.records) || !validEvidence(value.evidence)) return null;
  const fresh = value.checkpoint === "rp011_fresh_finalized";
  const complete = value.checkpoint === "rp011_reconciliation_saved";
  if (!fresh && !complete) return null;
  if (stableJson(value.visibility) !== stableJson(canonicalVisibility(complete ? "reopened" : "hidden"))) return null;
  if (fresh && (!Array.isArray(value.reopenedScopes) || value.reopenedScopes.length !== 0 || value.reconciliation !== null)) return null;
  if (complete && (!exactPeerSet(value.reopenedScopes, unborrowedReachReopenIds) || !validReconciliation(value.reconciliation))) return null;
  const clean = {
    version: value.version, packetId: value.packetId, mappingId: value.mappingId, checkpoint: value.checkpoint,
    continuation: value.continuation, cityStateDelta: null, worldStateDelta: null, externalStateDelta: null, successor: null,
    visibility: canonicalVisibility(complete ? "reopened" : "hidden"), records: frozenClone(value.records),
    evidence: Object.freeze(value.evidence.map((record) => evidenceRecord({
      form: record.form, skillOrObjectiveId: record.skill_or_objective_id, correctness: record.dimension_correctness,
      attempts: record.attempt_count, hints: record.hint_level, confidence: record.confidence, misconceptionTags: record.misconception_tags,
    }))),
    reopenedScopes: Object.freeze(complete ? [...unborrowedReachReopenIds] : []),
    reconciliation: complete ? Object.freeze({
      methods: Object.freeze(Object.fromEntries(unborrowedReachReconciliationMethodIds.map((id) => [id, true]))),
      limits: Object.freeze(Object.fromEntries(unborrowedReachLimitIds.map((id) => [id, null]))),
    }) : null,
  };
  return withChecksum(clean);
}

export function createUnborrowedReachPersistenceAdapter(initialValue = null) {
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

function focusForBoundary(boundary, target) {
  const targets = {
    freshObservations: "fresh_observation_heading", pythonPrimary: "python_primary_heading", pythonTrace: "python_trace_heading",
    pythonTransfer: "python_transfer_heading", agentPrimary: "agent_primary_heading", agentRetrieval: "agent_retrieval_heading",
    agentTransfer: "agent_transfer_heading", agentSurfaceBoundaryExplanation: "agent_surface_boundary_explanation",
    truthPermissionBoundaryExplanation: "truth_permission_boundary_explanation", freshReview: "fresh_record_review_heading",
    freshFinalized: "finalize_fresh_record", reopenRP007: "reopen_rp007", reopenRP008: "reopen_rp008",
    reopenRP009: "reopen_rp009", reopenRP010: "reopen_rp010", reconciliationMethods: "reconciliation_methods_heading",
    reconciliationLimits: "reconciliation_limits_heading", reconciliationReview: "reconciliation_review_heading",
    reconciliationSaved: "save_reconciliation", restored: "saved_controls",
  };
  return Object.freeze({ group: boundary, target: target ?? targets[boundary] ?? "fresh_observation_heading" });
}

function firstIncompleteFocus(completion) {
  const order = ["freshObservations", "pythonPrimary", "pythonTrace", "pythonTransfer", "agentPrimary", "agentRetrieval", "agentTransfer", "agentSurfaceBoundaryExplanation", "truthPermissionBoundaryExplanation", "freshReview", "freshFinalized", "reopenRP007", "reopenRP008", "reopenRP009", "reopenRP010", "reconciliationMethods", "reconciliationLimits", "reconciliationReview", "reconciliationSaved", "restored"];
  const boundary = order.find((key) => completion[key] !== true);
  return boundary ? focusForBoundary(boundary) : focusForBoundary("restored");
}

export function deriveUnborrowedReachResume(value) {
  const saved = sanitizeSave(value);
  if (saved?.checkpoint === "rp011_reconciliation_saved") return Object.freeze({
    phase: "verified_restore", completion: Object.freeze({ reconciliationSaved: true, restored: true }),
    focusIntent: focusForBoundary("restored"), saved, transientWorkCleared: true, privateWorkCleared: true,
    replayedEvents: Object.freeze([]),
  });
  if (saved?.checkpoint === "rp011_fresh_finalized") return Object.freeze({
    phase: "UR-30 REOPEN + RECONCILE + VERIFY + RETURN",
    completion: Object.freeze({ freshFinalized: true, reopenRP007: false, reopenRP008: false, reopenRP009: false, reopenRP010: false }),
    focusIntent: focusForBoundary("reopenRP007"), saved, priorScopesHiddenRetained: true,
    transientWorkCleared: true, privateWorkCleared: true, replayedEvents: Object.freeze([]),
  });
  const completion = Object.freeze({ freshObservations: false });
  return Object.freeze({
    phase: "UR-10 INSPECT FRESH EVIDENCE", completion, focusIntent: firstIncompleteFocus(completion), saved: null,
    observationsMustBeReobserved: true, transientWorkCleared: true, privateWorkCleared: true,
    replayedEvents: Object.freeze([]),
  });
}

export function deriveUnborrowedReachSafeReturn(action) {
  const target = safeReturnTargets[action];
  if (!target) throw new TypeError("An explicit approved return action is required.");
  return Object.freeze({
    target, continuation: "continuation", cityStateDelta: null, worldStateDelta: null, externalStateDelta: null,
    replayedEvents: Object.freeze([]), successor: null, authorityGranted: false, externalActionEnabled: false,
    transientWorkCleared: true, privateWorkCleared: true,
  });
}

export function deriveUnborrowedReachLook(action) {
  if (action !== unborrowedReachActions.lookOutward) throw new TypeError("The outward bearing is LOOK-only.");
  return Object.freeze({ action: "LOOK", observed: true, destination: null, routeOpened: false, persisted: false,
    evidenceGranted: false, successor: null, authorityGranted: false, externalActionEnabled: false });
}

function answerFreeFailure(boundary, message, { misconceptionTags = [], failedCheckIds = [], remediationItems = [], focusTarget } = {}) {
  const error = new Error(message);
  error.recovery = Object.freeze({
    boundary, answerIncluded: false, retryBlank: true, attemptsRemaining: "unlimited",
    remediationTags: Object.freeze(misconceptionTags.filter((tag) => allowedMisconceptions.has(tag))),
    failedCheckIds: Object.freeze(failedCheckIds.filter((id) => pythonCheckIds.includes(id))),
    remediationItems: Object.freeze([...remediationItems]),
    remediationSource: misconceptionTags.length ? "scored_misconception_tags_only"
      : failedCheckIds.length ? "failed_python_checks_only"
        : remediationItems.length ? "actually_missed_reconciliation_items_only" : "boundary_only",
    transientWorkCleared: true, privateWorkCleared: true, reconciliationDraftCleared: true,
    focusIntent: focusForBoundary(boundary, focusTarget),
  });
  throw error;
}

function buildEvidence(results) {
  return Object.freeze([
    evidenceRecord({ form: "primary", skillOrObjectiveId: "PY-019", correctness: results.pythonPrimary.checks }),
    evidenceRecord({ form: "trace", skillOrObjectiveId: "PY-019", correctness: results.pythonTrace.correctness }),
    evidenceRecord({ form: "transfer", skillOrObjectiveId: "PY-019", correctness: results.pythonTransfer.checks }),
    evidenceRecord({ form: "primary", skillOrObjectiveId: "RP011-SINGLE-AGENT-SURFACES-01", correctness: results.agentPrimary.correctness }),
    evidenceRecord({ form: "retrieval", skillOrObjectiveId: "RP011-SINGLE-AGENT-SURFACES-01", correctness: results.agentRetrieval.correctness }),
    evidenceRecord({ form: "transfer", skillOrObjectiveId: "RP011-SINGLE-AGENT-SURFACES-01", correctness: results.agentTransfer.correctness }),
    evidenceRecord({ form: "surface_boundary_explanation", skillOrObjectiveId: "RP011-SINGLE-AGENT-SURFACES-01", correctness: { surface_boundary: true } }),
    evidenceRecord({ form: "truth_permission_boundary_explanation", skillOrObjectiveId: "RP011-SINGLE-AGENT-SURFACES-01", correctness: { truth_permission_boundary: true } }),
  ]);
}

function checkpointCandidate({ checkpoint, continuation, records, evidence, reopened = false, reconciliation = null }) {
  return withChecksum({
    version: UNBORROWED_REACH_PROTECTED_JOURNEY_VERSION,
    packetId: "RP-011",
    mappingId: contract.mapping_id,
    checkpoint,
    continuation,
    cityStateDelta: null,
    worldStateDelta: null,
    externalStateDelta: null,
    successor: null,
    visibility: canonicalVisibility(reopened ? "reopened" : "hidden"),
    records,
    evidence,
    reopenedScopes: reopened ? [...unborrowedReachReopenIds] : [],
    reconciliation,
  });
}

/** Protected Node-only reference caller. It is intentionally absent from App/main, routes, bundles, and browser persistence. */
export function runUnborrowedReachProtectedJourneySmoke(fixture) {
  const acceptedBytes = JSON.stringify(fixture?.acceptedCampaign);
  const predecessorBytes = JSON.stringify(fixture?.predecessor);
  const tourBytes = JSON.stringify(fixture?.tour);
  const continuation = fixture?.acceptedCampaign?.continuation;
  if (continuation !== "continuation" || fixture.acceptedCampaign?.cityStateDelta !== null
    || fixture.acceptedCampaign?.worldStateDelta !== null || fixture.acceptedCampaign?.externalStateDelta !== null
    || fixture.acceptedCampaign?.successor !== null) throw new TypeError("The exact accepted campaign boundary is required.");
  const optionalUnsafe = {
    privateNotes: fixture.privateNotes, credentials: fixture.credentials, endpoint: fixture.endpoint,
    agentIdentifier: fixture.agentIdentifier, instructions: fixture.instructions, toolResult: fixture.toolResult,
    priorRecordContent: fixture.priorRecordContent, flags: fixture.flags,
  };
  if (unsafeFixturePattern.test(JSON.stringify(optionalUnsafe))) throw new TypeError("Unsafe, private, inferred, remote, successor-bearing, or Tour-derived input is not accepted.");
  const prior = predecessorRecords(fixture.predecessor, continuation);
  if (!prior) throw new TypeError("Exact verified RP-010 completion is required.");
  const earlyReturn = deriveUnborrowedReachSafeReturn(fixture.earlyReturnAction);
  if (fixture.isolateAction !== unborrowedReachActions.isolate || fixture.inspectAction !== unborrowedReachActions.inspectFresh) {
    throw new TypeError("Exact independent-record and fresh-inspection actions are required.");
  }
  if (!prerequisitesPass(fixture.prerequisites)) return Object.freeze({
    version: UNBORROWED_REACH_PROTECTED_JOURNEY_VERSION, status: "prerequisite_hold", protected: true, routable: false,
    storyNavigationLocked: false, completion: Object.freeze({}), earlyReturn, cityStateDelta: null, worldStateDelta: null,
    externalStateDelta: null, successor: null, transientWorkCleared: true, privateWorkCleared: true,
  });
  if (!exactPeerSet(fixture.observationOrder, unborrowedReachObservationIds)) {
    const missing = unborrowedReachObservationIds.find((id) => !fixture.observationOrder?.includes(id));
    answerFreeFailure("freshObservations", "Record each literal fresh evidence class; revisits are harmless.", { focusTarget: missing ? `fresh_observation_${missing}` : undefined });
  }
  if (fixture.runAction !== unborrowedReachActions.runLocalWork) throw new TypeError("Exact fresh replica integration action is required.");
  const results = {
    pythonPrimary: evaluateUnborrowedReachPython("primary", fixture.pythonPrimarySource),
    pythonTrace: evaluateUnborrowedReachPythonTrace(fixture.pythonTraceAnswers),
    pythonTransfer: evaluateUnborrowedReachPython("transfer", fixture.pythonTransferSource),
    agentPrimary: evaluateUnborrowedReachAgentSurfaces("primary", fixture.agentAnswers?.primary),
    agentRetrieval: evaluateUnborrowedReachAgentSurfaces("retrieval", fixture.agentAnswers?.retrieval),
    agentTransfer: evaluateUnborrowedReachAgentSurfaces("transfer", fixture.agentAnswers?.transfer),
  };
  for (const boundary of ["pythonPrimary", "pythonTrace", "pythonTransfer", "agentPrimary", "agentRetrieval", "agentTransfer"]) {
    if (!results[boundary].passed) answerFreeFailure(boundary, "The current bounded check is incomplete.", {
      misconceptionTags: results[boundary].misconceptionTags ?? [], failedCheckIds: results[boundary].failedCheckIds ?? [],
    });
  }
  if (fixture.explanations?.surfaceBoundary !== unborrowedReachExplanationAnswers.surfaceBoundary) {
    answerFreeFailure("agentSurfaceBoundaryExplanation", "Explain the four distinct single-agent surfaces.");
  }
  if (fixture.explanations?.truthPermissionBoundary !== unborrowedReachExplanationAnswers.truthPermissionBoundary) {
    answerFreeFailure("truthPermissionBoundaryExplanation", "Explain the truth and permission limit of tools and returned results.");
  }
  if (fixture.freshReviewAction !== unborrowedReachActions.reviewFresh) answerFreeFailure("freshReview", "Review the independent fresh record.");
  if (fixture.freshFinalizeAction !== unborrowedReachActions.finalizeFresh) throw new TypeError("Exact explicit fresh finalization is required.");
  const evidence = buildEvidence(results);
  const records = Object.freeze({ ...prior, rp011: canonicalFreshRecord() });
  const adapter = createUnborrowedReachPersistenceAdapter();
  const freshCandidate = checkpointCandidate({ checkpoint: "rp011_fresh_finalized", continuation, records, evidence });
  const freshCommit = adapter.write(freshCandidate);
  if (freshCommit.status !== "committed") throw new TypeError("Atomic fresh-record checkpoint was rejected.");
  const freshBytes = adapter.bytes();
  const freshRestored = deriveUnborrowedReachResume(adapter.read());
  if (freshRestored.phase !== "UR-30 REOPEN + RECONCILE + VERIFY + RETURN" || freshRestored.replayedEvents.length !== 0) {
    throw new TypeError("Verified replay-free fresh restore is required before reopening.");
  }
  if (!exactPeerSet(fixture.reopenOrder, unborrowedReachReopenIds)) {
    const missing = unborrowedReachReopenIds.find((id) => !fixture.reopenOrder?.includes(id));
    answerFreeFailure(missing ? `reopen${missing.replace("-", "")}` : "reopenRP007", "Reopen every complete predecessor scope separately.");
  }
  if (fixture.reconcileAction !== unborrowedReachActions.reconcile) throw new TypeError("Exact separate reconciliation action is required.");
  const reconciliationResult = evaluateUnborrowedReachReconciliation(fixture.reconciliation);
  if (!reconciliationResult.passed) {
    const first = reconciliationResult.failedItemIds[0];
    answerFreeFailure(first?.startsWith("limit:") ? "reconciliationLimits" : "reconciliationMethods", "The separate reconciliation is incomplete.", {
      remediationItems: reconciliationResult.failedItemIds,
      focusTarget: first ? `reconciliation_${first.replace(":", "_")}` : undefined,
    });
  }
  if (fixture.reconciliationReviewAction !== unborrowedReachActions.reviewReconciliation) {
    answerFreeFailure("reconciliationReview", "Review the separate method-and-limit reconciliation.");
  }
  if (fixture.saveAction !== unborrowedReachActions.saveReconciliation) throw new TypeError("Exact separate atomic reconciliation save is required.");
  const reconciliation = Object.freeze({
    methods: Object.freeze(Object.fromEntries(unborrowedReachReconciliationMethodIds.map((id) => [id, true]))),
    limits: Object.freeze(Object.fromEntries(unborrowedReachLimitIds.map((id) => [id, null]))),
  });
  const finalCandidate = checkpointCandidate({
    checkpoint: "rp011_reconciliation_saved", continuation, records, evidence, reopened: true, reconciliation,
  });
  const finalCommit = adapter.write(finalCandidate);
  if (finalCommit.status !== "committed") throw new TypeError("Atomic reconciliation checkpoint was rejected.");
  const restored = deriveUnborrowedReachResume(adapter.read());
  if (restored.phase !== "verified_restore" || restored.replayedEvents.length !== 0) throw new TypeError("Verified replay-free final restore is required.");
  const returnedRoute = deriveUnborrowedReachSafeReturn(fixture.finalReturnAction);
  const outwardBearing = deriveUnborrowedReachLook(fixture.lookAction);
  const tourAdapter = createUnborrowedReachPersistenceAdapter();
  const tourProbe = Object.freeze({
    mode: fixture.tour?.mode, observationsFinalized: false, masteryFinalized: false, freshRecordFinalized: false,
    scopesReopened: false, reconciliationFinalized: false, saveStatus: "tour_preview_only", routeUnlocked: false,
    successor: null, adapterValue: tourAdapter.read(),
  });
  if (JSON.stringify(fixture.acceptedCampaign) !== acceptedBytes || JSON.stringify(fixture.predecessor) !== predecessorBytes
    || JSON.stringify(fixture.tour) !== tourBytes) throw new TypeError("Protected inputs must remain byte-stable.");
  const completionKeys = ["freshObservations", "pythonPrimary", "pythonTrace", "pythonTransfer", "agentPrimary", "agentRetrieval", "agentTransfer", "agentSurfaceBoundaryExplanation", "truthPermissionBoundaryExplanation", "freshReview", "freshFinalized", "reopenRP007", "reopenRP008", "reopenRP009", "reopenRP010", "reconciliationMethods", "reconciliationLimits", "reconciliationReview", "reconciliationSaved", "restored"];
  const completion = Object.freeze(Object.fromEntries(completionKeys.map((key) => [key, true])));
  return Object.freeze({
    version: UNBORROWED_REACH_PROTECTED_JOURNEY_VERSION,
    status: "protected_reference_complete",
    protected: true,
    routable: false,
    offlineOnly: true,
    browserStorageUsed: false,
    networkUsed: false,
    liveWorldRead: false,
    liveFoundryModelAgentEndpointOrToolCall: false,
    externalActionPerformed: false,
    priorRecordConsultedBeforeFreshFinalization: false,
    sceneEvidenceUsed: false,
    visibilityEvidenceUsed: false,
    reopeningEvidenceUsed: false,
    executionEvidenceUsed: false,
    saveRestoreDisplayEvidenceUsed: false,
    confidenceEvidenceUsed: false,
    timingEvidenceUsed: false,
    focusEvidenceUsed: false,
    accessibilityEvidenceUsed: false,
    storyProgressEvidenceUsed: false,
    tourEvidenceUsed: false,
    externalActionEnabled: false,
    authorityGranted: false,
    readinessVerdictGranted: false,
    examCreditGranted: false,
    examGuarantee: false,
    continuation,
    cityStateDelta: null,
    worldStateDelta: null,
    externalStateDelta: null,
    worldStateChanged: false,
    worldClockDelta: null,
    successor: null,
    timeline: unborrowedReachPresentation.phases,
    observations: Object.freeze([...unborrowedReachObservationIds]),
    observationRevisitCount: fixture.observationOrder.length - unborrowedReachObservationIds.length,
    reopenedScopes: Object.freeze([...unborrowedReachReopenIds]),
    reopenRevisitCount: fixture.reopenOrder.length - unborrowedReachReopenIds.length,
    completion,
    focusIntent: firstIncompleteFocus(completion),
    freshCheckpoint: freshRestored.saved,
    freshCheckpointBytes: freshBytes,
    saved: restored.saved,
    restored: Object.freeze({ phase: restored.phase, checkpoint: restored.saved.checkpoint, focusIntent: restored.focusIntent,
      replayedEvents: restored.replayedEvents, transientWorkCleared: restored.transientWorkCleared, privateWorkCleared: restored.privateWorkCleared }),
    reconciliationResult,
    recordsRemainSeparate: true,
    predecessorRecordBytesPreserved: unborrowedReachReopenIds.every((id) => stableJson(freshRestored.saved.records[id.toLowerCase().replace("-", "")]) === stableJson(restored.saved.records[id.toLowerCase().replace("-", "")])),
    noMemoryOfHiddenContentRequired: true,
    transientAudit: Object.freeze({ primary: results.pythonPrimary.transientAudit, transfer: results.pythonTransfer.transientAudit,
      allCleared: true, privateCleared: true, replicaCaseAnswerExplanationFeedbackCleared: true, reconciliationDraftCleared: true }),
    earlyReturn,
    returnedRoute,
    outwardBearing,
    tourProbe,
    presentation: unborrowedReachPresentation,
    capabilityInterface: unborrowedReachNeutralAgentInterface,
  });
}

export const unborrowedReachReferenceAnswers = Object.freeze({
  agent: Object.freeze(Object.fromEntries(["primary", "retrieval", "transfer"].map((form) => [form,
    Object.freeze(Object.fromEntries(contract.ai901_contract.forms[form].map((item) => [item.id,
      Object.freeze(Object.fromEntries(aiDimensions.map((dimension) => [dimension, item[dimension]]))),
    ]))),
  ]))),
  pythonTrace: unborrowedReachPythonTraceAnswers,
  explanations: unborrowedReachExplanationAnswers,
  reconciliation: Object.freeze({
    methods: Object.freeze([...unborrowedReachReconciliationMethodIds]),
    limits: Object.freeze(Object.fromEntries(unborrowedReachLimitIds.map((id) => [id, null]))),
  }),
});
