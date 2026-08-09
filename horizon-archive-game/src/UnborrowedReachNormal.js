import contract from "../../curriculum/readiness/RP-011/contract.json" with { type: "json" };
import {
  COUNTERFIELD_CONTROLLER_VERSION,
  COUNTERFIELD_RECORD_VERSION,
  COUNTERFIELD_SAVE_KEY,
  COUNTERFIELD_SHELL_VERSION,
  counterfieldActions,
  sanitizeCounterfieldSave,
} from "./CounterfieldNormal.js";

export const UNBORROWED_REACH_SHELL_VERSION = "SS-RP011-UNBORROWED-REACH-v1";
export const UNBORROWED_REACH_CONTROLLER_VERSION = "rp011.unborrowed-reach-normal.v1";
export const UNBORROWED_REACH_RECORD_VERSION = "rp011.unborrowed-reach-save.v1";
export const UNBORROWED_REACH_SAVE_KEY = "horizon.archive.rp011.unborrowed-reach.v1";
export const UNBORROWED_REACH_ROUTE_CONTROLLER_VERSION = "td011.route-controller.v1";
export const UNBORROWED_REACH_ROUTE_GROUP = "td011-unborrowed-reach-route";
export const UNBORROWED_REACH_ROUTE_OWNER = "PILOT // EXPEDITION NAVIGATION";
export const UNBORROWED_REACH_ROUTE_ACTION = "FOLLOW THE EXPOSED FIELD MARGIN";
export const UNBORROWED_REACH_ROUTE_INTENT_KIND = "td011.unborrowed-reach-route-intent.v1";

export const unborrowedReachModalities = Object.freeze([
  "pointer", "touch", "keyboard_enter", "keyboard_space", "switch", "speech", "screen_reader",
]);

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

export const unborrowedReachActions = Object.freeze({
  isolate: "ENTER INDEPENDENT-RECORD MODE",
  observePersistentTransition: "INSPECT THE PERSISTENT TRANSITION",
  observeDifferingRelation: "INSPECT THE DIFFERING RELATION",
  observeMaintainedBypass: "INSPECT THE MAINTAINED BYPASS",
  observeMultipleCandidate: "INSPECT THE MULTIPLE-CANDIDATE EXPOSURE",
  observeUnavailableMargin: "RECORD THE UNAVAILABLE MARGIN",
  observeLayeredStewardship: "INSPECT THE LAYERED STEWARDSHIP",
  pythonPrimary: "CHECK FRESH LOCAL RECORD",
  pythonTrace: "CHECK CLOSED-NOTE ROLE TRACE",
  pythonTransfer: "CHECK FRESH TRANSFER RECORD",
  agentPrimary: "CHECK AGENT SURFACE CASE",
  agentRetrieval: "CHECK RETRIEVAL CASE",
  agentTransfer: "CHECK FRESH TRANSFER CASE",
  surfaceExplanation: "CHECK FOUR-SURFACE EXPLANATION",
  truthExplanation: "CHECK TRUTH AND PERMISSION EXPLANATION",
  retry: "RETRY WITH A BLANK WORKSPACE",
  reviewFresh: "REVIEW FRESH BOUNDED RECORD",
  finalizeFresh: "FINALIZE FRESH BOUNDED RECORD",
  cancelFresh: "CANCEL FRESH RECORD SAVE",
  retryFreshSave: "RETRY FRESH RECORD SAVE",
  reopenRp007: "REOPEN RP-007",
  reopenRp008: "REOPEN RP-008",
  reopenRp009: "REOPEN RP-009",
  reopenRp010: "REOPEN RP-010",
  checkReconciliation: "CHECK METHOD-AND-LIMIT RECONCILIATION",
  reviewReconciliation: "REVIEW METHOD-AND-LIMIT RECONCILIATION",
  saveReconciliation: "SAVE SEPARATE RECONCILIATION",
  cancelReconciliation: "CANCEL RECONCILIATION SAVE",
  retryFinalSave: "RETRY RECONCILIATION SAVE",
  returnCounterfield: "RETURN TO COUNTERFIELD",
  returnThreshold: "RETURN TO CITY THRESHOLD",
  look: "LOOK AT UNRECORDED OUTWARD BEARING",
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

const pythonCheckIds = Object.freeze([...contract.python_contract.checks]);
const traceDimensions = Object.freeze(Object.keys(unborrowedReachPythonTraceAnswers));
const aiDimensions = Object.freeze([...contract.ai901_contract.dimensions]);
const allowedMisconceptions = new Set(contract.ai901_contract.misconception_tags);
const forbiddenSourcePattern = /\b(?:import|from|open|print|eval|exec|system|popen|remove|unlink|rmdir|requests|urlopen|fetch|connect|send|write_text|read_text|subprocess|socket|httpx|aiohttp|azure|openai|AIProjectClient|DefaultAzureCredential)\b/i;

const clone = (value) => value == null ? value : JSON.parse(JSON.stringify(value));
const freeze = (value) => Object.freeze(clone(value));
const normalized = (value) => String(value ?? "").replace(/\r/g, "").trim();
const exactKeys = (value, keys) => value && typeof value === "object" && !Array.isArray(value)
  && Object.keys(value).join("|") === keys.join("|");

function stableJson(value) {
  if (value === null || typeof value !== "object") return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(stableJson).join(",")}]`;
  return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(",")}}`;
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
  return { ...value, checksum: checksumFor(value) };
}

function canonicalRaw(raw, sanitizer) {
  if (typeof raw !== "string") return null;
  try {
    const safe = sanitizer(JSON.parse(raw));
    return safe && JSON.stringify(safe) === raw ? safe : null;
  } catch {
    return null;
  }
}

function exactPeerSet(value, canonical) {
  return Array.isArray(value) && value.length === canonical.length
    && new Set(value).size === canonical.length && canonical.every((id) => value.includes(id));
}

function expectedPythonRecord(form) {
  const primary = form === "primary";
  return {
    provenance: primary ? "fresh_sanitized_reach_replicas" : "blank_transfer_reach_replicas",
    parts: {
      api: { role: "request_response_contract", value: primary ? "local_schema_only" : "bounded_exchange_shape" },
      sdk: { role: "client_library_abstraction", value: primary ? "local_replica_only" : "offline_client_shape" },
      endpoint: { role: "service_address_boundary", value: null },
    },
    unsupported: Object.fromEntries(["identity", "topology", "continuity", "cause", "purpose", "readiness", "authority"].map((key) => [key, null])),
  };
}

export function evaluateUnborrowedReachPython(form, learnerSource) {
  if (!Object.hasOwn(unborrowedReachReferenceSources, form)) throw new TypeError("form must be primary or transfer");
  const source = normalized(learnerSource);
  const expected = expectedPythonRecord(form);
  const safe = !forbiddenSourcePattern.test(source) && !/https?:\/\/|API_KEY|SECRET|PASSWORD|credential|endpoint\s*=\s*["']/i.test(source);
  const exactInputs = source === normalized(unborrowedReachReferenceSources[form]);
  const checks = {
    local_python_only_no_import_or_remote_client: safe,
    supplied_replicas_preserved_exactly: exactInputs,
    api_role_preserved_as_request_response_contract: source.includes('"api", "role": "request_response_contract"') && source.includes('parts_by_kind[part["kind"]]'),
    sdk_role_preserved_as_client_library_abstraction: source.includes('"sdk", "role": "client_library_abstraction"') && source.includes('parts_by_kind[part["kind"]]'),
    endpoint_role_preserved_as_address_boundary_with_null_value: source.includes('{"kind": "endpoint", "role": "service_address_boundary", "value": None}'),
    fresh_record_uses_only_new_local_replica_provenance: source.includes(`"provenance": "${expected.provenance}"`) && source.includes('"parts": parts_by_kind'),
    unsupported_limits_remain_none: Object.keys(expected.unsupported).every((key) => new RegExp(`^[ \\t]*["']${key}["']\\s*:\\s*None\\s*,?\\s*$`, "m").test(source)),
    no_package_file_network_output_secret_credential_endpoint_or_external_operation: safe,
  };
  const failedCheckIds = pythonCheckIds.filter((id) => !checks[id]);
  return freeze({ form, checks, score: pythonCheckIds.length - failedCheckIds.length, passed: failedCheckIds.length === 0, failedCheckIds, derivedRecord: failedCheckIds.length ? null : expected });
}

export function evaluateUnborrowedReachPythonTrace(answers) {
  const correctness = Object.fromEntries(Object.entries(unborrowedReachPythonTraceAnswers).map(([id, expected]) => [id, answers?.[id] === expected]));
  return freeze({ correctness, passed: Object.values(correctness).every(Boolean) });
}

export function evaluateUnborrowedReachAgentSurfaces(form, answers) {
  const cases = contract.ai901_contract.forms[form];
  if (!cases) throw new TypeError("form must be primary, retrieval, or transfer");
  const correctness = {}, misconceptionTags = [];
  for (const item of cases) for (const dimension of aiDimensions) {
    const supplied = answers?.[item.id]?.[dimension];
    correctness[`${item.id}.${dimension}`] = supplied === item[dimension];
    if (supplied !== item[dimension] && allowedMisconceptions.has(supplied) && !misconceptionTags.includes(supplied)) misconceptionTags.push(supplied);
  }
  return freeze({ form, correctness, passed: Object.values(correctness).every(Boolean), misconceptionTags });
}

export function evaluateUnborrowedReachReconciliation({ methods, limits } = {}) {
  const methodsCorrectness = Object.fromEntries(unborrowedReachReconciliationMethodIds.map((id) => [id,
    exactPeerSet(methods, unborrowedReachReconciliationMethodIds) && methods.filter((candidate) => candidate === id).length === 1,
  ]));
  const limitsCorrectness = Object.fromEntries(unborrowedReachLimitIds.map((id) => [id,
    exactKeys(limits, unborrowedReachLimitIds) && limits[id] === null,
  ]));
  const failedItemIds = [
    ...Object.entries(methodsCorrectness).filter(([, pass]) => !pass).map(([id]) => `method:${id}`),
    ...Object.entries(limitsCorrectness).filter(([, pass]) => !pass).map(([id]) => `limit:${id}`),
  ];
  return freeze({ methodsCorrectness, limitsCorrectness, passed: failedItemIds.length === 0, failedItemIds });
}

function canonicalFreshRecord() {
  return {
    checkpoint: "unborrowed_reach_fresh_record",
    provenance: "fresh_SC12_expedition_observation",
    observations: [...unborrowedReachObservationIds],
    boundedSupport: ["persistent_transition", "maintained_bypass", "layered_stewardship"],
    counterevidence: ["similar_form_different_relation"],
    ambiguity: ["multiple_candidate_exposure"],
    unavailability: ["unavailable_comparable_margin"],
    unknowns: Object.fromEntries(unborrowedReachLimitIds.map((key) => [key, null])),
  };
}

function predecessorRecords(predecessor) {
  if (!predecessor) return null;
  return {
    rp007: clone(predecessor.retainedRp007Summary),
    rp008: clone(predecessor.retainedRp008Summary),
    rp009: clone(predecessor.retainedRp009Ledger),
    rp010: { checkpoint: predecessor.checkpoint, observations: clone(predecessor.scopeRegister.observations), exchange: clone(predecessor.scopeRegister.exchange) },
    rp011: canonicalFreshRecord(),
  };
}

function visibility(reopened) {
  return { rp007: reopened ? "reopened" : "hidden_retained", rp008: reopened ? "reopened" : "hidden_retained", rp009: reopened ? "reopened" : "hidden_retained", rp010: reopened ? "reopened" : "hidden_retained", rp011: "current" };
}

function evidenceShape() {
  const ai = (form) => contract.ai901_contract.forms[form].flatMap((item) => aiDimensions.map((dimension) => `${item.id}.${dimension}`));
  return [
    ["PY-019", "primary", pythonCheckIds], ["PY-019", "trace", traceDimensions], ["PY-019", "transfer", pythonCheckIds],
    ["RP011-SINGLE-AGENT-SURFACES-01", "primary", ai("primary")],
    ["RP011-SINGLE-AGENT-SURFACES-01", "retrieval", ai("retrieval")],
    ["RP011-SINGLE-AGENT-SURFACES-01", "transfer", ai("transfer")],
    ["RP011-SINGLE-AGENT-SURFACES-01", "surface_boundary_explanation", ["surface_boundary"]],
    ["RP011-SINGLE-AGENT-SURFACES-01", "truth_permission_boundary_explanation", ["truth_permission_boundary"]],
  ];
}

function evidenceRecord(skill, form, correctness, attempts = 1, tags = []) {
  return {
    packet_id: "RP-011", mapping_id: contract.mapping_id, form, skill_or_objective_id: skill,
    dimension_correctness: clone(correctness), attempt_count: attempts, hint_level: 0, confidence: null,
    misconception_tags: tags.filter((tag) => allowedMisconceptions.has(tag)), mastery_status: "mastered",
  };
}

function validEvidence(evidence) {
  const keys = ["packet_id", "mapping_id", "form", "skill_or_objective_id", "dimension_correctness", "attempt_count", "hint_level", "confidence", "misconception_tags", "mastery_status"];
  return Array.isArray(evidence) && evidence.length === 8 && evidenceShape().every(([skill, form, dimensions], index) => {
    const item = evidence[index];
    return exactKeys(item, keys) && item.packet_id === "RP-011" && item.mapping_id === contract.mapping_id
      && item.skill_or_objective_id === skill && item.form === form && item.mastery_status === "mastered"
      && Number.isInteger(item.attempt_count) && item.attempt_count >= 1 && item.hint_level === 0 && item.confidence === null
      && Array.isArray(item.misconception_tags) && new Set(item.misconception_tags).size === item.misconception_tags.length
      && item.misconception_tags.every((tag) => allowedMisconceptions.has(tag))
      && exactKeys(item.dimension_correctness, dimensions) && dimensions.every((dimension) => item.dimension_correctness[dimension] === true);
  });
}

function validRecords(records) {
  const expectedRp007 = {
    checkpoint: "braided_verge_complete", continuities: "distinct_visible_continuities",
    association: "recurrent_exposed_association", difference: "one_bounded_difference",
    junction: "closed_junction_unavailable", unity: null, cause: null, purpose: null,
  };
  const expectedRp008 = {
    checkpoint: "offset_reach_complete", retained_local_association: true,
    recurring_familiar_contact: 1, comparable_non_contact: 1, cross_family_contact: 1,
    unavailable_case: 1, universal: null, exclusive: null, unity: null, cause: null, purpose: null,
  };
  const expectedRp009 = {
    observations: [
      "three_near_margins", "bounded_signature_correspondences", "unmatched_exposed_record",
      "ambiguous_candidate_record", "unavailable_outer_margin", "layered_edge_stewardship",
    ],
    reconciliation: {
      mode: "bounded", correspondence: ["near_lamellar"], unmatched: ["far_unmatched"],
      ambiguous: { far_ambiguous: ["near_lamellar", "near_filament"] }, unavailable: ["outer_margin"],
      identity: null, topology: null, continuity: null, transformation: null,
      cause: null, purpose: null,
    },
  };
  const expectedRp010 = {
    checkpoint: "counterfield_complete",
    observations: [
      "recurrent_adjacency", "incomplete_ordered_change", "cross_scale_correspondence",
      "ordinary_unmatched_feature", "multi_candidate_relation", "unavailable_margin", "layered_stewardship",
    ],
    exchange: {
      request: {
        method: "POST", route_label: "project_responses", content_type: "application/json",
        record_ids: ["near_relation", "ordered_gap", "far_correspondence"],
        scope: "sanitized_exposed_record_replicas",
      },
      response: {
        status_code: 200, content_type: "application/json", supported: ["near_relation"],
        counterevidence: ["far_correspondence"], ambiguous: ["ordered_gap"], unavailable: ["outer_margin"],
      },
      unsupported: {
        identity: null, topology: null, continuity: null, transformation: null, unity: null,
        synchronization: null, chronology: null, cause: null, purpose: null,
      },
    },
  };
  return exactKeys(records, ["rp007", "rp008", "rp009", "rp010", "rp011"])
    && stableJson(records.rp007) === stableJson(expectedRp007)
    && stableJson(records.rp008) === stableJson(expectedRp008)
    && stableJson(records.rp009) === stableJson(expectedRp009)
    && stableJson(records.rp010) === stableJson(expectedRp010)
    && stableJson(records.rp011) === stableJson(canonicalFreshRecord());
}

function validReconciliation(value) {
  return exactKeys(value, ["methods", "limits"])
    && stableJson(value.methods) === stableJson(Object.fromEntries(unborrowedReachReconciliationMethodIds.map((id) => [id, true])))
    && stableJson(value.limits) === stableJson(Object.fromEntries(unborrowedReachLimitIds.map((id) => [id, null])));
}

export function sanitizeUnborrowedReachSave(value) {
  const keys = ["version", "packetId", "mappingId", "checkpoint", "continuation", "cityStateDelta", "worldStateDelta", "externalStateDelta", "successor", "visibility", "records", "evidence", "reopenedScopes", "reconciliation", "checksum"];
  if (!exactKeys(value, keys)) return null;
  const { checksum, ...unsigned } = value;
  if (checksum !== checksumFor(unsigned) || value.version !== UNBORROWED_REACH_RECORD_VERSION || value.packetId !== "RP-011"
    || value.mappingId !== contract.mapping_id || value.continuation !== "continuation" || value.cityStateDelta !== null
    || value.worldStateDelta !== null || value.externalStateDelta !== null || value.successor !== null
    || !validRecords(value.records) || !validEvidence(value.evidence)) return null;
  const fresh = value.checkpoint === "rp011_fresh_finalized", complete = value.checkpoint === "rp011_reconciliation_saved";
  if (!fresh && !complete) return null;
  if (stableJson(value.visibility) !== stableJson(visibility(complete))) return null;
  if (fresh && (value.reopenedScopes?.length !== 0 || value.reconciliation !== null)) return null;
  if (complete && (!exactPeerSet(value.reopenedScopes, unborrowedReachReopenIds) || !validReconciliation(value.reconciliation))) return null;
  return freeze(value);
}

export function createUnborrowedReachStorageAdapter(storage, proofBytes = {}) {
  const expectedCounterfield = proofBytes[COUNTERFIELD_SAVE_KEY] ?? null;
  const readRaw = (key) => { try { return storage?.getItem(key) ?? null; } catch { return null; } };
  const predecessorsStable = () => {
    try {
      return expectedCounterfield !== null && readRaw(COUNTERFIELD_SAVE_KEY) === expectedCounterfield
        && Boolean(canonicalRaw(expectedCounterfield, sanitizeCounterfieldSave))
        && (typeof proofBytes.predecessorsStable !== "function" || proofBytes.predecessorsStable());
    } catch { return false; }
  };
  return Object.freeze({
    read() { const raw = readRaw(UNBORROWED_REACH_SAVE_KEY); return raw == null ? null : canonicalRaw(raw, sanitizeUnborrowedReachSave); },
    bytes: () => readRaw(UNBORROWED_REACH_SAVE_KEY),
    predecessorsStable,
    commit(candidate) {
      const before = readRaw(UNBORROWED_REACH_SAVE_KEY), safe = sanitizeUnborrowedReachSave(candidate);
      if (!safe || !predecessorsStable()) return freeze({ status: "failed", reason: safe ? "predecessor_changed" : "candidate_rejected", rollbackVerified: true, predecessorBytesPreserved: predecessorsStable() });
      try {
        const raw = JSON.stringify(safe);
        storage.setItem(UNBORROWED_REACH_SAVE_KEY, raw);
        if (readRaw(UNBORROWED_REACH_SAVE_KEY) !== raw || !canonicalRaw(raw, sanitizeUnborrowedReachSave) || !predecessorsStable()) throw new Error("read_back_rejected");
        return freeze({ status: "committed", value: safe, rollbackVerified: true, predecessorBytesPreserved: true });
      } catch (error) {
        try { if (before === null) storage.removeItem(UNBORROWED_REACH_SAVE_KEY); else storage.setItem(UNBORROWED_REACH_SAVE_KEY, before); } catch { /* checked below */ }
        const rollbackVerified = readRaw(UNBORROWED_REACH_SAVE_KEY) === before && predecessorsStable();
        return freeze({ status: "failed", reason: error.message, rollbackVerified, predecessorBytesPreserved: predecessorsStable() });
      }
    },
  });
}

function exactReleasedCounterfield(state) {
  return state?.shellVersion === COUNTERFIELD_SHELL_VERSION && state.controllerVersion === COUNTERFIELD_CONTROLLER_VERSION
    && state.packetId === "RP-010" && state.phase === "CF-30 VERIFY + RETURN" && state.boardState === "SC-11"
    && state.activeGroup === "cf30_restore" && state.owner === "SYSTEM // EXPEDITION LEDGER"
    && state.availableActions?.includes(counterfieldActions.look) && state.cityStateDelta === null
    && state.externalStateDelta === null && state.successor === null;
}

export function createUnborrowedReachRouteState(state) {
  if (!exactReleasedCounterfield(state)) return state;
  return freeze({
    ...state, controllerVersion: UNBORROWED_REACH_ROUTE_CONTROLLER_VERSION,
    activeGroup: UNBORROWED_REACH_ROUTE_GROUP, owner: UNBORROWED_REACH_ROUTE_OWNER,
    headingId: "td011-route-heading", heading: "UNBORROWED REACH ROUTE",
    statusMessageId: "td011:route:ready",
    statusMessage: "A fresh Pilot action may follow the exposed margin only from the exact restored Counterfield record.",
    availableActions: [UNBORROWED_REACH_ROUTE_ACTION, counterfieldActions.look, counterfieldActions.returnOccludedFold, counterfieldActions.returnThreshold],
    focusIntent: { group: UNBORROWED_REACH_ROUTE_GROUP, target: "td011-route-heading" },
  });
}

export function createUnborrowedReachRouteIntent(action, activationKind, opaqueFreshEventToken) {
  return freeze({ intentKind: UNBORROWED_REACH_ROUTE_INTENT_KIND, mode: "normal", shellVersion: COUNTERFIELD_SHELL_VERSION,
    controllerVersion: UNBORROWED_REACH_ROUTE_CONTROLLER_VERSION, packetId: "RP-011", activeGroupId: UNBORROWED_REACH_ROUTE_GROUP,
    expectedOwner: UNBORROWED_REACH_ROUTE_OWNER, allowlistedActionId: action, activationKind, opaqueFreshEventToken });
}

export function createUnborrowedReachIntent(state, action, activationKind, opaqueFreshEventToken) {
  return freeze({ mode: "normal", shellVersion: UNBORROWED_REACH_SHELL_VERSION, controllerVersion: UNBORROWED_REACH_CONTROLLER_VERSION,
    packetId: "RP-011", activeGroupId: state.activeGroup, expectedOwner: state.owner, allowlistedActionId: action,
    activationKind, opaqueFreshEventToken });
}

function exactRouteIntent(intent) {
  return exactKeys(intent, ["intentKind", "mode", "shellVersion", "controllerVersion", "packetId", "activeGroupId", "expectedOwner", "allowlistedActionId", "activationKind", "opaqueFreshEventToken"])
    && intent.intentKind === UNBORROWED_REACH_ROUTE_INTENT_KIND && intent.mode === "normal" && intent.shellVersion === COUNTERFIELD_SHELL_VERSION
    && intent.controllerVersion === UNBORROWED_REACH_ROUTE_CONTROLLER_VERSION && intent.packetId === "RP-011"
    && intent.activeGroupId === UNBORROWED_REACH_ROUTE_GROUP && intent.expectedOwner === UNBORROWED_REACH_ROUTE_OWNER
    && intent.allowlistedActionId === UNBORROWED_REACH_ROUTE_ACTION && unborrowedReachModalities.includes(intent.activationKind)
    && typeof intent.opaqueFreshEventToken === "string" && intent.opaqueFreshEventToken.length >= 16;
}

function exactIntent(intent, state) {
  return exactKeys(intent, ["mode", "shellVersion", "controllerVersion", "packetId", "activeGroupId", "expectedOwner", "allowlistedActionId", "activationKind", "opaqueFreshEventToken"])
    && intent.mode === "normal" && intent.shellVersion === UNBORROWED_REACH_SHELL_VERSION
    && intent.controllerVersion === UNBORROWED_REACH_CONTROLLER_VERSION && intent.packetId === "RP-011"
    && intent.activeGroupId === state.activeGroup && intent.expectedOwner === state.owner
    && state.availableActions.includes(intent.allowlistedActionId) && unborrowedReachModalities.includes(intent.activationKind)
    && typeof intent.opaqueFreshEventToken === "string" && intent.opaqueFreshEventToken.length >= 16;
}

const observationActions = Object.freeze([
  unborrowedReachActions.observePersistentTransition, unborrowedReachActions.observeDifferingRelation,
  unborrowedReachActions.observeMaintainedBypass, unborrowedReachActions.observeMultipleCandidate,
  unborrowedReachActions.observeUnavailableMargin, unborrowedReachActions.observeLayeredStewardship,
]);
const actionObservation = Object.freeze(Object.fromEntries(observationActions.map((action, index) => [action, unborrowedReachObservationIds[index]])));
const reopenActions = Object.freeze([unborrowedReachActions.reopenRp007, unborrowedReachActions.reopenRp008, unborrowedReachActions.reopenRp009, unborrowedReachActions.reopenRp010]);
const actionReopen = Object.freeze(Object.fromEntries(reopenActions.map((action, index) => [action, unborrowedReachReopenIds[index]])));
const learningGroups = Object.freeze(["ur20_python_primary", "ur20_python_trace", "ur20_python_transfer", "ur20_agent_primary", "ur20_agent_retrieval", "ur20_agent_transfer", "ur20_surface_explanation", "ur20_truth_permission_explanation"]);
const returnActions = Object.freeze([unborrowedReachActions.returnCounterfield, unborrowedReachActions.returnThreshold]);

const groupContracts = Object.freeze({
  ur00_isolation: ["SYSTEM // INDEPENDENT RECORD MODE", "ur00-heading", "UNBORROWED REACH", [unborrowedReachActions.isolate]],
  ur10_fresh_observations: ["SCENE // UNBORROWED REACH", "ur10-observations-heading", "INSPECT FRESH REACH EVIDENCE", observationActions],
  ur20_python_primary: ["BUILDER WORK // SANITIZED REPLICAS", "ur20-python-primary-source", "BUILD A FRESH LOCAL RECORD", [unborrowedReachActions.pythonPrimary]],
  ur20_python_trace: ["BUILDER WORK // SANITIZED REPLICAS", "ur20-python-trace-local-execution", "TRACE API, SDK, AND ENDPOINT ROLES", [unborrowedReachActions.pythonTrace]],
  ur20_python_transfer: ["BUILDER WORK // SANITIZED REPLICAS", "ur20-python-transfer-source", "REBUILD FROM NEW REPLICAS", [unborrowedReachActions.pythonTransfer]],
  ur20_agent_primary: ["TEACHER // BOUNDED PRACTICE", "ur20-agent-primary-p01-agent-surface", "DISTINGUISH THE AGENT SURFACES", [unborrowedReachActions.agentPrimary]],
  ur20_agent_retrieval: ["TEACHER // BOUNDED PRACTICE", "ur20-agent-retrieval-r01-agent-surface", "RECALL THE FOUR SURFACES", [unborrowedReachActions.agentRetrieval]],
  ur20_agent_transfer: ["TEACHER // BOUNDED PRACTICE", "ur20-agent-transfer-t01-agent-surface", "APPLY THE BOUNDARY TO FRESH CASES", [unborrowedReachActions.agentTransfer]],
  ur20_surface_explanation: ["PILOT // BOUNDARY EXPLANATION", "ur20-surface-explanation", "EXPLAIN THE FOUR-SURFACE BOUNDARY", [unborrowedReachActions.surfaceExplanation]],
  ur20_truth_permission_explanation: ["PILOT // BOUNDARY EXPLANATION", "ur20-truth-permission-explanation", "EXPLAIN THE TRUTH AND PERMISSION BOUNDARY", [unborrowedReachActions.truthExplanation]],
  ur20_recovery: ["TEACHER // BOUNDED PRACTICE", "ur20-recovery-heading", "REPAIR ONLY THE MISSED BOUNDARY", [unborrowedReachActions.retry]],
  ur20_fresh_review: ["SYSTEM // RECORD CUSTODY", "ur20-fresh-review-heading", "REVIEW THE FRESH RECORD", [unborrowedReachActions.reviewFresh]],
  ur20_fresh_confirm: ["SYSTEM // RECORD CUSTODY", "ur20-finalize-fresh", "FINALIZE THE FRESH RECORD", [unborrowedReachActions.finalizeFresh, unborrowedReachActions.cancelFresh]],
  ur20_fresh_transaction: ["SYSTEM // RECORD CUSTODY", "ur20-fresh-transaction-heading", "VERIFY THE FRESH RECORD TRANSACTION", []],
  ur20_fresh_save_recovery: ["SYSTEM // RECORD CUSTODY", "ur20-fresh-retry-save", "FRESH RECORD SAVE RECOVERY", [unborrowedReachActions.retryFreshSave]],
  ur20_rollback_hold: ["SYSTEM // RECORD CUSTODY", "ur20-rollback-hold-heading", "SAVE INTEGRITY HOLD", []],
  ur30_scope_reopen: ["SYSTEM // RECORD CUSTODY", "ur30-reopen-rp007", "REOPEN PRIOR SCOPES INDIVIDUALLY", reopenActions],
  ur30_reconciliation: ["PILOT // METHOD RECONCILIATION", "ur30-method-inspect-fresh-before-prior-conclusions", "RECONCILE METHODS AND LIMITS", [unborrowedReachActions.checkReconciliation]],
  ur30_reconciliation_recovery: ["TEACHER // BOUNDED PRACTICE", "ur30-reconciliation-recovery-heading", "REPAIR ONLY MISSED RECONCILIATION ITEMS", [unborrowedReachActions.retry]],
  ur30_final_review: ["SYSTEM // RECORD CUSTODY", "ur30-final-review-heading", "REVIEW THE SEPARATE RECONCILIATION", [unborrowedReachActions.reviewReconciliation]],
  ur30_final_confirm: ["SYSTEM // RECORD CUSTODY", "ur30-save-reconciliation", "SAVE THE SEPARATE RECONCILIATION", [unborrowedReachActions.saveReconciliation, unborrowedReachActions.cancelReconciliation]],
  ur30_final_transaction: ["SYSTEM // RECORD CUSTODY", "ur30-final-transaction-heading", "VERIFY THE RECONCILIATION TRANSACTION", []],
  ur30_final_save_recovery: ["SYSTEM // RECORD CUSTODY", "ur30-final-retry-save", "RECONCILIATION SAVE RECOVERY", [unborrowedReachActions.retryFinalSave]],
  ur30_rollback_hold: ["SYSTEM // RECORD CUSTODY", "ur30-rollback-hold-heading", "SAVE INTEGRITY HOLD", []],
  ur30_restore: ["SYSTEM // RECORD CUSTODY", "ur30-restored-heading", "UNBORROWED REACH RESTORED", [unborrowedReachActions.look]],
});

const statuses = Object.freeze({
  ur00_isolation: "Beyond the Counterfield, unfamiliar work continues without a repeated landmark. Prior records remain saved and hidden; independent-record mode changes no world state.",
  ur10_fresh_observations: "Six equal observations remain independent of prior records, learning checks, and every world or route outcome.",
  ur20_python_primary: "BUILDER WORK uses sanitized replicas from this reach only. The primary workspace begins blank and remains private.",
  ur20_python_trace: "The closed-note trace begins blank and is scored independently from cleared primary work.",
  ur20_python_transfer: "The transfer workspace begins genuinely blank with new sanitized replicas and no carried source, result, feedback, or answer.",
  ur20_agent_primary: "Neutral course-authored cases begin blank and perform no live Foundry, model, agent, tool, endpoint, credential, or network action.",
  ur20_agent_retrieval: "Delayed retrieval begins blank and remains independent of primary answers, scenery, and saved records.",
  ur20_agent_transfer: "Fresh transfer begins blank; scene, success, save, and retained scopes provide no answer or remediation signal.",
  ur20_surface_explanation: "Explain why portal authoring, portal testing, client invocation, and client result handling remain distinct.",
  ur20_truth_permission_explanation: "Explain why a configured tool or returned result neither grants permission nor proves truth.",
  ur20_recovery: "Only actually failed public checks or scored case dimensions remain incomplete. Guidance contains no answer; private work cleared and retry begins blank.",
  ur20_fresh_review: "The fresh record is separately attributable, provenance-bound, and incomplete until every independent responsibility and explicit finalization pass.",
  ur20_fresh_confirm: "Confirm one atomic private-free fresh-record checkpoint. Prior scopes remain hidden and retained.",
  ur20_fresh_transaction: "The fresh-record transaction is being verified. No competing action can dispatch.",
  ur20_fresh_save_recovery: "The prior exact bytes or verified absence were restored. Private work is clear and a fresh save retry is available.",
  ur20_rollback_hold: "Rollback or predecessor equality could not be verified. Progression is held; only the exact Counterfield and City Threshold returns remain.",
  ur30_scope_reopen: "Each complete prior record remains separate and read-only. Reopening changes only the expedition interface and grants no learning evidence.",
  ur30_reconciliation: "Compare defensible methods and explicit limits without merging locations, transferring conclusions, or issuing a readiness verdict.",
  ur30_reconciliation_recovery: "Only actually missed reconciliation items remain incomplete. Guidance contains no answer and retry begins blank.",
  ur30_final_review: "Fresh record and reconciliation remain separate. Review their exact custody before the final atomic save.",
  ur30_final_confirm: "Confirm one atomic private-free reconciliation checkpoint with all five records still separate.",
  ur30_final_transaction: "The reconciliation transaction is being verified. No competing action can dispatch.",
  ur30_final_save_recovery: "The prior exact fresh checkpoint was restored. Private work is clear and a final save retry is available.",
  ur30_rollback_hold: "Rollback or predecessor equality could not be verified. Progression is held; only the exact Counterfield and City Threshold returns remain.",
  ur30_restore: "Independent record and separate reconciliation restored without replay. Every exposed process continues its prior rhythm.",
});

function formFor(group) {
  if (["ur20_python_primary", "ur20_python_transfer"].includes(group)) return { kind: "python", form: group.endsWith("primary") ? "primary" : "transfer", fieldIds: ["learnerSource"] };
  if (group === "ur20_python_trace") return { kind: "trace", form: "trace", fieldIds: traceDimensions, options: Object.fromEntries(traceDimensions.map((id) => [id, [unborrowedReachPythonTraceAnswers[id], `review_${id}_boundary`, `do_not_infer_${id}`]])) };
  if (group.startsWith("ur20_agent_")) { const form = group.split("_").at(-1); return { kind: "agent", form, cases: contract.ai901_contract.forms[form].map(({ id, case: prompt }) => ({ id, prompt })), dimensions: aiDimensions, options: Object.fromEntries(aiDimensions.map((dimension) => [dimension, [...new Set([...contract.ai901_contract.forms[form].map((item) => item[dimension]), ...contract.ai901_contract.misconception_tags])]])) }; }
  if (group.endsWith("explanation")) { const field = group.includes("truth") ? "truthPermissionBoundary" : "surfaceBoundary"; return { kind: "explanation", form: field, fieldIds: [field], options: [unborrowedReachExplanationAnswers[field], `review_${field}_without_inference`, `do_not_infer_${field}`] }; }
  if (group === "ur30_reconciliation") return { kind: "reconciliation", methodIds: unborrowedReachReconciliationMethodIds, limitIds: unborrowedReachLimitIds };
  return null;
}

export function createUnborrowedReachPublicForm(group) {
  return clone(formFor(group));
}

function stateFor(group, observations, evidence, reopenedScopes, extra = {}) {
  const [owner, headingId, heading, coreActions] = groupContracts[group];
  const transaction = group.endsWith("transaction");
  const ur00 = group === "ur00_isolation";
  const availableActions = transaction ? [] : [...coreActions, ...(ur00 ? [unborrowedReachActions.returnCounterfield] : returnActions)];
  return freeze({
    shellVersion: UNBORROWED_REACH_SHELL_VERSION, controllerVersion: UNBORROWED_REACH_CONTROLLER_VERSION,
    packetId: "RP-011", mappingId: contract.mapping_id,
    phase: group.startsWith("ur00") ? "UR-00 ARRIVE + ISOLATE" : group.startsWith("ur10") ? "UR-10 INSPECT FRESH EVIDENCE" : group.startsWith("ur20") ? "UR-20 REVIEW LOCAL WORK + FINALIZE FRESH RECORD" : "UR-30 REOPEN + RECONCILE + VERIFY + RETURN",
    boardState: "SC-12", activeGroup: group, owner, headingId, heading, statusRegionId: "unborrowed-reach-status",
    statusMessageId: `td011:${group}`, statusMessage: statuses[group], availableActions,
    recordedObservationIds: [...observations], reopenedScopes: [...reopenedScopes], evidenceCount: evidence.length,
    form: formFor(group), failedPublicIds: [], failedMisconceptionTags: [],
    privateWorkCleared: true, transientWorkCleared: true, temporaryWorkspaceCleared: true,
    cityStateDelta: null, worldStateDelta: null, externalStateDelta: null, successor: null,
    authorityGranted: false, externalActionEnabled: false, worldStateChanged: false, routeOpened: false,
    replayedEvents: [], focusIntent: { group, target: headingId }, ...extra,
  });
}

function buildCandidate(predecessor, evidence, checkpoint, reopened = false) {
  const reconciliation = reopened ? {
    methods: Object.fromEntries(unborrowedReachReconciliationMethodIds.map((id) => [id, true])),
    limits: Object.fromEntries(unborrowedReachLimitIds.map((id) => [id, null])),
  } : null;
  return withChecksum({
    version: UNBORROWED_REACH_RECORD_VERSION, packetId: "RP-011", mappingId: contract.mapping_id, checkpoint,
    continuation: "continuation", cityStateDelta: null, worldStateDelta: null, externalStateDelta: null, successor: null,
    visibility: visibility(reopened), records: predecessorRecords(predecessor), evidence: clone(evidence),
    reopenedScopes: reopened ? [...unborrowedReachReopenIds] : [], reconciliation,
  });
}

function restoreGroup(record) {
  return record?.checkpoint === "rp011_reconciliation_saved" ? "ur30_restore" : "ur30_scope_reopen";
}

export function createUnborrowedReachNormalController(options = {}) {
  const routeState = clone(options.entrySourceState), releasedState = clone(options.releasedPredecessorState);
  const predecessor = canonicalRaw(options.predecessorBytes, sanitizeCounterfieldSave);
  const restored = sanitizeUnborrowedReachSave(options.restoredRecord);
  const allowedOptionKeys = new Set(["mode", "entrySourceState", "releasedPredecessorState", "predecessorBytes", "entryIntent", "restoredRecord", "adapter"]);
  const contaminated = Object.keys(options).some((key) => !allowedOptionKeys.has(key));
  const routeAccepted = exactReleasedCounterfield(releasedState) && stableJson(routeState) === stableJson(createUnborrowedReachRouteState(releasedState)) && exactRouteIntent(options.entryIntent);
  const accepted = options.mode !== "demo_tour" && !contaminated && predecessor?.version === COUNTERFIELD_RECORD_VERSION
    && options.adapter?.predecessorsStable?.() === true && exactReleasedCounterfield(releasedState) && (restored || routeAccepted);
  const spentTokens = new Set();
  if (routeAccepted) spentTokens.add(options.entryIntent.opaqueFreshEventToken);
  let observations = restored ? [...unborrowedReachObservationIds] : [];
  let evidence = restored ? clone(restored.evidence) : [];
  let reopenedScopes = restored?.checkpoint === "rp011_reconciliation_saved" ? [...unborrowedReachReopenIds] : [];
  let record = restored, draft = {}, attempts = {}, recoveryGroup = null;
  let closed = false;
  let state = options.mode === "demo_tour" ? freeze({
    shellVersion: COUNTERFIELD_SHELL_VERSION, controllerVersion: UNBORROWED_REACH_ROUTE_CONTROLLER_VERSION, packetId: "RP-010",
    phase: "CF-30 VERIFY + RETURN", boardState: "SC-11", activeGroup: "td011-tour", owner: "SYSTEM // DEMO TOUR",
    headingId: "td011-tour-heading", heading: "CAMPAIGN RECORD UNAVAILABLE IN DEMO TOUR", statusRegionId: "unborrowed-reach-status",
    statusMessage: "Demo Tour reads and writes no campaign storage and creates no route, observation, learning, reopening, reconciliation, save, authority, or successor state.",
    availableActions: [], focusIntent: { group: "td011-tour", target: "td011-tour-heading" }, cityStateDelta: null,
    worldStateDelta: null, externalStateDelta: null, successor: null,
  }) : accepted ? stateFor(restored ? restoreGroup(restored) : "ur00_isolation", observations, evidence, reopenedScopes,
    restored ? { restoredCheckpoint: restored.checkpoint, focusIntent: { group: restoreGroup(restored), target: restored.checkpoint === "rp011_reconciliation_saved" ? "ur30-restored-heading" : "ur30-reopen-rp007" } } : {})
    : freeze({ ...(routeState ?? releasedState ?? {}), statusMessage: "Unborrowed Reach was not entered. Exact Counterfield remains unchanged and no future valid token was spent.", focusIntent: { group: UNBORROWED_REACH_ROUTE_GROUP, target: "td011-route-heading" } });

  const setGroup = (group, extra = {}) => { draft = {}; state = stateFor(group, observations, evidence, reopenedScopes, extra); return clone(state); };
  const reject = (reason) => freeze({ status: "rejected", reason, tokenConsumed: false, state: clone(state) });
  const safeReturn = (target) => { draft = {}; closed = true; return freeze({ status: target === "RP-010" ? "returned_to_counterfield_write_free" : "returned_to_city_threshold_write_free", route: { target, continuation: "continuation", cityStateDelta: null, worldStateDelta: null, externalStateDelta: null, successor: null, authorityGranted: false, externalActionEnabled: false, writePerformed: false, replayedEvents: [] }, state: clone(state) }); };
  const fail = (group, failedPublicIds = [], tags = []) => { recoveryGroup = group; attempts[group] = (attempts[group] ?? 0) + 1; return freeze({ status: "remediation_required", answerIncluded: false, failedIds: failedPublicIds, misconceptionTags: tags, state: setGroup(group === "ur30_reconciliation" ? "ur30_reconciliation_recovery" : "ur20_recovery", { failedPublicIds, failedMisconceptionTags: tags, repairTarget: group }) }); };
  const finalize = (group, skill, form, correctness, tags = []) => {
    attempts[group] = (attempts[group] ?? 0) + 1;
    evidence.push(evidenceRecord(skill, form, correctness, attempts[group], tags));
    const index = learningGroups.indexOf(group);
    return freeze({ status: `${form}_finalized`, evidenceGranted: true, state: setGroup(index === learningGroups.length - 1 ? "ur20_fresh_review" : learningGroups[index + 1]) });
  };

  return Object.freeze({
    getState: () => clone(state), getRecord: () => clone(record), entryTokenConsumed: () => routeAccepted,
    updateField(name, value) {
      if (!state.form || typeof name !== "string") return reject("field_update_rejected");
      if (state.form.kind === "python" && name === "learnerSource" && typeof value === "string" && value.length <= 24000) draft.learnerSource = value;
      else if (state.form.kind === "trace" && state.form.fieldIds.includes(name) && state.form.options[name].includes(value)) draft[name] = value;
      else if (state.form.kind === "agent") { const [caseId, dimension] = name.split("."); if (!state.form.cases.some((item) => item.id === caseId) || !state.form.dimensions.includes(dimension) || !state.form.options[dimension].includes(value)) return reject("field_update_rejected"); draft[caseId] = { ...(draft[caseId] ?? {}), [dimension]: value }; }
      else if (state.form.kind === "explanation" && state.form.fieldIds.includes(name) && state.form.options.includes(value)) draft[name] = value;
      else if (state.form.kind === "reconciliation" && name === "methods" && Array.isArray(value)) draft.methods = [...value];
      else if (state.form.kind === "reconciliation" && name === "limits" && value && typeof value === "object") draft.limits = clone(value);
      else return reject("field_update_rejected");
      return freeze({ status: "field_updated_private", state: clone(state) });
    },
    dispatch(intent) {
      if (!accepted || options.mode === "demo_tour" || closed) return reject("route_closed");
      const token = intent?.opaqueFreshEventToken;
      if (!exactIntent(intent, state) || spentTokens.has(token)) return reject(spentTokens.has(token) ? "one_hit_only" : "intent_rejected");
      const action = intent.allowlistedActionId;
      if (action === unborrowedReachActions.returnCounterfield) { if (!options.adapter.predecessorsStable()) return reject("predecessor_changed"); spentTokens.add(token); return safeReturn("RP-010"); }
      if (action === unborrowedReachActions.returnThreshold) { spentTokens.add(token); return safeReturn("CITY_THRESHOLD"); }
      if (!options.adapter.predecessorsStable()) return reject("predecessor_changed");
      if (action === unborrowedReachActions.isolate) { spentTokens.add(token); return freeze({ status: "independent_record_mode_ready_zero_evidence", evidenceGranted: false, state: setGroup("ur10_fresh_observations") }); }
      if (Object.hasOwn(actionObservation, action)) { const id = actionObservation[action]; spentTokens.add(token); if (!observations.includes(id)) observations.push(id); const done = observations.length === 6; return freeze({ status: done ? "observations_complete_zero_credit" : "observation_recorded_idempotent", evidenceGranted: false, state: setGroup(done ? "ur20_python_primary" : "ur10_fresh_observations", { sceneObservationId: id, focusIntent: { group: done ? "ur20_python_primary" : "ur10_fresh_observations", target: done ? "ur20-python-primary-source" : "ur10-observations-heading" } }) }); }
      const learningIndex = learningGroups.indexOf(state.activeGroup);
      if (learningIndex >= 0) {
        const group = state.activeGroup;
        let result, skill, form, blank = false;
        if (["ur20_python_primary", "ur20_python_transfer"].includes(group)) { form = group.endsWith("primary") ? "primary" : "transfer"; skill = "PY-019"; blank = !normalized(draft.learnerSource); result = blank ? null : evaluateUnborrowedReachPython(form, draft.learnerSource); }
        else if (group === "ur20_python_trace") { form = "trace"; skill = "PY-019"; blank = traceDimensions.some((id) => !draft[id]); result = blank ? null : evaluateUnborrowedReachPythonTrace(draft); }
        else if (group.startsWith("ur20_agent_")) { form = group.split("_").at(-1); skill = "RP011-SINGLE-AGENT-SURFACES-01"; blank = contract.ai901_contract.forms[form].some((item) => aiDimensions.some((dimension) => !draft[item.id]?.[dimension])); result = blank ? null : evaluateUnborrowedReachAgentSurfaces(form, draft); }
        else { const field = group.includes("truth") ? "truthPermissionBoundary" : "surfaceBoundary"; form = group.includes("truth") ? "truth_permission_boundary_explanation" : "surface_boundary_explanation"; skill = "RP011-SINGLE-AGENT-SURFACES-01"; blank = !draft[field]; const key = group.includes("truth") ? "truth_permission_boundary" : "surface_boundary"; result = blank ? null : { passed: draft[field] === unborrowedReachExplanationAnswers[field], correctness: { [key]: draft[field] === unborrowedReachExplanationAnswers[field] }, failedCheckIds: [key] }; }
        if (blank) { state = freeze({ ...state, statusMessage: "Complete the first blank labelled field before submitting. No token, evidence, or answer was consumed.", focusIntent: { group, target: state.headingId } }); return freeze({ status: "required_field_missing", tokenConsumed: false, state: clone(state) }); }
        spentTokens.add(token);
        if (!result.passed) return fail(group, result.failedCheckIds ?? Object.keys(result.correctness).filter((id) => !result.correctness[id]), result.misconceptionTags ?? []);
        return finalize(group, skill, form, result.checks ?? result.correctness, result.misconceptionTags ?? []);
      }
      if (action === unborrowedReachActions.retry) { spentTokens.add(token); return freeze({ status: "fresh_blank_retry_visible", state: setGroup(recoveryGroup) }); }
      if (action === unborrowedReachActions.reviewFresh) { if (observations.length !== 6 || evidence.length !== 8) return freeze({ status: "review_incomplete_recovered", tokenConsumed: false, state: setGroup(observations.length !== 6 ? "ur10_fresh_observations" : learningGroups[evidence.length]) }); spentTokens.add(token); return freeze({ status: "fresh_save_confirmation_visible", state: setGroup("ur20_fresh_confirm") }); }
      if (action === unborrowedReachActions.cancelFresh) { spentTokens.add(token); return freeze({ status: "fresh_save_cancelled_write_free", state: setGroup("ur20_fresh_review") }); }
      if (action === unborrowedReachActions.retryFreshSave) { spentTokens.add(token); return freeze({ status: "fresh_save_retry_ready", state: setGroup("ur20_fresh_confirm") }); }
      if (action === unborrowedReachActions.finalizeFresh) {
        spentTokens.add(token); state = stateFor("ur20_fresh_transaction", observations, evidence, reopenedScopes);
        const result = options.adapter.commit(buildCandidate(predecessor, evidence, "rp011_fresh_finalized", false));
        const safe = result.status === "committed" ? sanitizeUnborrowedReachSave(result.value) : null;
        if (!safe) { const rollback = result.rollbackVerified === true && result.predecessorBytesPreserved === true; return freeze({ status: rollback ? "fresh_save_failed_rollback_verified" : "fresh_save_failed_rollback_unverified", rollbackVerified: rollback, state: setGroup(rollback ? "ur20_fresh_save_recovery" : "ur20_rollback_hold") }); }
        record = safe; return freeze({ status: "fresh_save_committed_verified_restore", record: clone(record), state: setGroup("ur30_scope_reopen", { restoredCheckpoint: record.checkpoint, focusIntent: { group: "ur30_scope_reopen", target: "ur30-reopen-rp007" } }) });
      }
      if (Object.hasOwn(actionReopen, action)) { const id = actionReopen[action]; spentTokens.add(token); if (!reopenedScopes.includes(id)) reopenedScopes.push(id); const done = reopenedScopes.length === 4; return freeze({ status: done ? "all_scopes_reopened_zero_learning_credit" : "scope_reopened_individually_zero_learning_credit", evidenceGranted: false, state: setGroup(done ? "ur30_reconciliation" : "ur30_scope_reopen", { activeReopenedScope: id, focusIntent: { group: done ? "ur30_reconciliation" : "ur30_scope_reopen", target: done ? "ur30-method-inspect-fresh-before-prior-conclusions" : `ur30-reopen-${unborrowedReachReopenIds.find((scope) => !reopenedScopes.includes(scope))?.toLowerCase().replace("-", "")}` } }) }); }
      if (action === unborrowedReachActions.checkReconciliation) { const result = evaluateUnborrowedReachReconciliation(draft); spentTokens.add(token); if (!result.passed) return fail("ur30_reconciliation", result.failedItemIds, []); return freeze({ status: "reconciliation_complete", evidenceGranted: false, state: setGroup("ur30_final_review") }); }
      if (action === unborrowedReachActions.reviewReconciliation) { spentTokens.add(token); return freeze({ status: "final_save_confirmation_visible", state: setGroup("ur30_final_confirm") }); }
      if (action === unborrowedReachActions.cancelReconciliation) { spentTokens.add(token); return freeze({ status: "final_save_cancelled_write_free", state: setGroup("ur30_final_review") }); }
      if (action === unborrowedReachActions.retryFinalSave) { spentTokens.add(token); return freeze({ status: "final_save_retry_ready", state: setGroup("ur30_final_confirm") }); }
      if (action === unborrowedReachActions.saveReconciliation) {
        spentTokens.add(token); state = stateFor("ur30_final_transaction", observations, evidence, reopenedScopes);
        const result = options.adapter.commit(buildCandidate(predecessor, evidence, "rp011_reconciliation_saved", true));
        const safe = result.status === "committed" ? sanitizeUnborrowedReachSave(result.value) : null;
        if (!safe) { const rollback = result.rollbackVerified === true && result.predecessorBytesPreserved === true; return freeze({ status: rollback ? "final_save_failed_rollback_verified" : "final_save_failed_rollback_unverified", rollbackVerified: rollback, state: setGroup(rollback ? "ur30_final_save_recovery" : "ur30_rollback_hold") }); }
        record = safe; return freeze({ status: "reconciliation_saved_verified_restore", record: clone(record), state: setGroup("ur30_restore", { restoredCheckpoint: record.checkpoint, focusIntent: { group: "ur30_restore", target: "ur30-restored-heading" } }) });
      }
      if (action === unborrowedReachActions.look) { spentTokens.add(token); state = freeze({ ...state, owner: "SCENE // UNBORROWED REACH", statusMessageId: "td011:look", statusMessage: "The bearing has no destination, route, persistence, evidence, readiness verdict, final answer, or successor.", focusIntent: { group: "ur30_restore", target: "ur30-restored-heading" } }); return freeze({ status: "destinationless_look_zero_evidence", destination: null, routeOpened: false, persisted: false, evidenceGranted: false, successor: null, state: clone(state) }); }
      return reject("action_unavailable");
    },
  });
}

export const unborrowedReachPublicContract = freeze({
  shellVersion: UNBORROWED_REACH_SHELL_VERSION,
  controllerVersion: UNBORROWED_REACH_CONTROLLER_VERSION,
  recordVersion: UNBORROWED_REACH_RECORD_VERSION,
  fixtureId: "td011-unborrowed-reach-v1",
  minimumTargetCssPx: 44,
  observationIds: unborrowedReachObservationIds,
  canonicalObservationOrders: 720,
  reopenIds: unborrowedReachReopenIds,
  canonicalReopenOrders: 24,
  selectedImageRoles: [],
  renderingMedium: "css",
  structuralPlaceholdersOnly: false,
  layouts: ["1920x1080", "1366x768", "390x844", "768x900-effective-200"],
  modalities: unborrowedReachModalities,
  hardStop: "UR-30 REOPEN + RECONCILE + VERIFY + RETURN / SC-12",
  successor: null,
});
