import contract from "../../curriculum/readiness/RP-010/contract.json" with { type: "json" };
import {
  OCCLUDED_FOLD_PROTECTED_JOURNEY_VERSION,
  deriveOccludedFoldResume,
} from "./OccludedFoldProtectedJourney.js";

export const COUNTERFIELD_PROTECTED_JOURNEY_VERSION = "rp010.protected-journey.v1";

export const counterfieldActions = Object.freeze({
  orient: "ORIENT TO COUNTERFIELD",
  inspectEvidence: "SURVEY SEPARATE DISTRICTS",
  runExchange: "RUN BOUNDED EXCHANGE SUMMARY",
  finalizeReview: "FINALIZE BOUNDED SCOPE REVIEW",
  saveRegister: "SAVE BOUNDED SCOPE REGISTER",
  returnOccludedFold: "RETURN TO OCCLUDED FOLD",
  returnCityThreshold: "RETURN TO CITY THRESHOLD",
  lookContinuation: "LOOK AT FIELD-MARGIN CONTINUATION",
});

export const counterfieldPresentation = Object.freeze({
  sceneBoard: "SC-11",
  firstPerson: true,
  photorealistic: true,
  invariantWorld: true,
  independentClocks: true,
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
    meaningUsesColorMotionAudioPositionScaleSequenceOrLayoutAlone: false,
    modalities: Object.freeze(["pointer", "touch", "keyboard_enter", "keyboard_space", "switch", "speech", "screen_reader"]),
  }),
});

export const counterfieldReferenceSources = Object.freeze({
  primary: `request_record = {
    "method": "POST",
    "route_label": "project_responses",
    "headers": {"content_type": "application/json"},
    "payload": {
        "record_ids": ["near_relation", "ordered_gap", "far_correspondence"],
        "scope": "sanitized_exposed_record_replicas",
    },
}

response_record = {
    "status_code": 200,
    "headers": {"content_type": "application/json"},
    "body": {
        "supported": ["near_relation"],
        "counterevidence": ["far_correspondence"],
        "ambiguous": ["ordered_gap"],
        "unavailable": ["outer_margin"],
        "identity": None,
        "topology": None,
        "continuity": None,
        "transformation": None,
        "unity": None,
        "synchronization": None,
        "chronology": None,
        "cause": None,
        "purpose": None,
    },
}

exchange_summary = {
    "request": {
        "method": request_record["method"],
        "route_label": request_record["route_label"],
        "content_type": request_record["headers"]["content_type"],
        "record_ids": request_record["payload"]["record_ids"],
        "scope": request_record["payload"]["scope"],
    },
    "response": {
        "status_code": response_record["status_code"],
        "content_type": response_record["headers"]["content_type"],
        "supported": response_record["body"]["supported"],
        "counterevidence": response_record["body"]["counterevidence"],
        "ambiguous": response_record["body"]["ambiguous"],
        "unavailable": response_record["body"]["unavailable"],
    },
    "unsupported": {
        key: response_record["body"][key]
        for key in (
            "identity",
            "topology",
            "continuity",
            "transformation",
            "unity",
            "synchronization",
            "chronology",
            "cause",
            "purpose",
        )
    },
}`,
  transfer: `request_record = {
    "method": "POST",
    "route_label": "bounded_analysis",
    "headers": {"content_type": "application/json"},
    "payload": {
        "record_ids": ["inlet_pair", "missing_interval", "outer_repeat"],
        "scope": "fresh_sanitized_replica_set",
    },
}

response_record = {
    "status_code": 202,
    "headers": {"content_type": "application/json"},
    "body": {
        "supported": ["inlet_pair"],
        "counterevidence": ["outer_repeat"],
        "ambiguous": ["missing_interval"],
        "unavailable": ["sealed_margin"],
        "identity": None,
        "topology": None,
        "continuity": None,
        "transformation": None,
        "unity": None,
        "synchronization": None,
        "chronology": None,
        "cause": None,
        "purpose": None,
    },
}

exchange_summary = {
    "request": {
        "method": request_record["method"],
        "route_label": request_record["route_label"],
        "content_type": request_record["headers"]["content_type"],
        "record_ids": request_record["payload"]["record_ids"],
        "scope": request_record["payload"]["scope"],
    },
    "response": {
        "status_code": response_record["status_code"],
        "content_type": response_record["headers"]["content_type"],
        "supported": response_record["body"]["supported"],
        "counterevidence": response_record["body"]["counterevidence"],
        "ambiguous": response_record["body"]["ambiguous"],
        "unavailable": response_record["body"]["unavailable"],
    },
    "unsupported": {
        key: response_record["body"][key]
        for key in (
            "identity",
            "topology",
            "continuity",
            "transformation",
            "unity",
            "synchronization",
            "chronology",
            "cause",
            "purpose",
        )
    },
}`,
});

export const counterfieldPythonTraceAnswers = Object.freeze({
  requestMethodAndRoute: "method_and_route_label_remain_request_owned",
  requestContentType: "request_content_type_remains_request_owned",
  requestPayloadProvenance: "record_ids_are_traced_only_from_request_payload",
  requestScope: "replica_scope_is_traced_only_from_request_payload",
  responseStatus: "status_code_remains_response_owned",
  responseContentType: "response_content_type_remains_response_owned",
  responseEvidenceClasses: "supported_counterevidence_ambiguous_unavailable_remain_separate_response_fields",
  unsupportedLimits: "nine_unsupported_limits_remain_none",
});

export const counterfieldExplanationAnswers = Object.freeze({
  clientFlowBoundary: "project_client_setup_compatible_client_derivation_model_input_submission_and_returned_output_processing_are_distinct_steps",
  truthAuthorityBoundary: "a_valid_client_flow_neither_proves_output_truth_nor_authorizes_live_or_external_action",
});

const observationIds = Object.freeze([
  "recurrent_adjacency",
  "incomplete_ordered_change",
  "cross_scale_correspondence",
  "ordinary_unmatched_feature",
  "multi_candidate_relation",
  "unavailable_margin",
  "layered_stewardship",
]);
const pythonCheckIds = Object.freeze([...contract.python_contract.checks]);
const traceDimensions = Object.freeze(Object.keys(counterfieldPythonTraceAnswers));
const aiDimensions = Object.freeze([...contract.ai901_contract.dimensions]);
const allowedMisconceptions = new Set(contract.ai901_contract.misconception_tags);
const unsupportedLimitKeys = Object.freeze([
  "identity", "topology", "continuity", "transformation", "unity", "synchronization", "chronology", "cause", "purpose",
]);
const safeReturnTargets = Object.freeze({
  [counterfieldActions.returnOccludedFold]: "RP-009",
  [counterfieldActions.returnCityThreshold]: "CITY_THRESHOLD",
});
const unsafeFixturePattern = /learner_?source|request_?record|response_?record|exchange_?summary|raw_?cases?|case_?answers?|free_?form_?reasoning|private_?notes?|identity_?content|credentials?|secrets?|endpoints?|headers?|payloads?|responses?|source_?content|exam_?items?|external_?action_?requests?|forged|stale|duplicate|combined|hardcoded|swapped|mutated|collapsed|filled|scene_?derived|success_?derived|district_?derived|material_?derived|scale_?derived|position_?derived|clock_?derived|timing_?derived|focus_?derived|navigation_?derived|presentation_?derived|accessibility_?derived|save_?display_?derived|tour_?derived|confidence_?derived|remote_?operation|unauthorized/i;
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

function exactObservationSet(value) {
  if (!Array.isArray(value) || value.some((id) => !observationIds.includes(id))) return false;
  const unique = new Set(value);
  return unique.size === observationIds.length && observationIds.every((id) => unique.has(id));
}

function expectedRecords(form) {
  if (form === "primary") return Object.freeze({
    request: Object.freeze({ method: "POST", route_label: "project_responses", content_type: "application/json", record_ids: Object.freeze(["near_relation", "ordered_gap", "far_correspondence"]), scope: "sanitized_exposed_record_replicas" }),
    response: Object.freeze({ status_code: 200, content_type: "application/json", supported: Object.freeze(["near_relation"]), counterevidence: Object.freeze(["far_correspondence"]), ambiguous: Object.freeze(["ordered_gap"]), unavailable: Object.freeze(["outer_margin"]) }),
    unsupported: Object.freeze(Object.fromEntries(unsupportedLimitKeys.map((key) => [key, null]))),
  });
  return Object.freeze({
    request: Object.freeze({ method: "POST", route_label: "bounded_analysis", content_type: "application/json", record_ids: Object.freeze(["inlet_pair", "missing_interval", "outer_repeat"]), scope: "fresh_sanitized_replica_set" }),
    response: Object.freeze({ status_code: 202, content_type: "application/json", supported: Object.freeze(["inlet_pair"]), counterevidence: Object.freeze(["outer_repeat"]), ambiguous: Object.freeze(["missing_interval"]), unavailable: Object.freeze(["sealed_margin"]) }),
    unsupported: Object.freeze(Object.fromEntries(unsupportedLimitKeys.map((key) => [key, null]))),
  });
}

function normalized(value) {
  return String(value ?? "").replace(/\r/g, "").trim();
}

export function evaluateCounterfieldPython(form, learnerSource) {
  if (!contract.python_contract.forms?.[form] && !["primary", "transfer"].includes(form)) throw new TypeError("form must be primary or transfer.");
  const source = normalized(learnerSource);
  const expected = expectedRecords(form);
  const canonical = normalized(counterfieldReferenceSources[form]);
  const safe = !forbiddenSourcePattern.test(source) && !/https?:\/\/|API_KEY|SECRET|PASSWORD|credential|endpoint/i.test(source);
  const requestShape = source.includes(`"method": "${expected.request.method}"`)
    && source.includes(`"route_label": "${expected.request.route_label}"`)
    && source.includes('"content_type": "application/json"');
  const payloadShape = expected.request.record_ids.every((id) => source.includes(`"${id}"`))
    && source.includes(`"scope": "${expected.request.scope}"`)
    && /request_record\["payload"\]\["record_ids"\]/.test(source)
    && /request_record\["payload"\]\["scope"\]/.test(source);
  const responseShape = source.includes(`"status_code": ${expected.response.status_code}`)
    && /response_record\["status_code"\]/.test(source)
    && /response_record\["headers"\]\["content_type"\]/.test(source);
  const classesShape = ["supported", "counterevidence", "ambiguous", "unavailable"].every((key) => (
    source.includes(`"${key}": response_record["body"]["${key}"]`)
  ));
  const limitsShape = unsupportedLimitKeys.every((key) => new RegExp(`^[ \\t]*["']${key}["']\\s*:\\s*None\\s*,?\\s*$`, "m").test(source));
  const exactInputs = source === canonical;
  const checks = Object.freeze({
    local_python_only_no_import_or_remote_client: safe,
    request_and_response_inputs_preserved_exactly: exactInputs,
    request_method_route_and_content_type_preserved: requestShape,
    request_payload_provenance_and_scope_preserved: payloadShape,
    response_status_and_content_type_preserved: responseShape,
    response_evidence_classes_remain_separate: classesShape,
    unsupported_limits_remain_none: limitsShape,
    no_file_network_output_secret_credential_endpoint_or_external_operation: safe,
  });
  const failedCheckIds = pythonCheckIds.filter((id) => !checks[id]);
  return Object.freeze({
    form,
    checks,
    score: pythonCheckIds.length - failedCheckIds.length,
    passed: failedCheckIds.length === 0,
    failedCheckIds: Object.freeze(failedCheckIds),
    derivedExchange: failedCheckIds.length === 0 ? expectedRecords(form) : null,
    transientAudit: Object.freeze({ sourceRetained: false, requestRecordRetained: false, responseRecordRetained: false, exchangeSummaryRetained: false, cleared: true }),
  });
}

export function evaluateCounterfieldPythonTrace(answers) {
  const correctness = Object.fromEntries(Object.entries(counterfieldPythonTraceAnswers)
    .map(([dimension, expected]) => [dimension, answers?.[dimension] === expected]));
  return Object.freeze({ correctness: Object.freeze(correctness), score: Object.values(correctness).filter(Boolean).length, passed: Object.values(correctness).every(Boolean) });
}

export function evaluateCounterfieldClientFlow(form, answers) {
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

export const counterfieldNeutralClientInterface = Object.freeze({
  owner: "EXPEDITION COURSE",
  answerSource: "course_authored_neutral_client_flow_cases_only",
  sceneEvidenceExcluded: true,
  inferredWeaknessExcluded: true,
  performsLiveFoundryOrModelCall: false,
  usesCredentialsEndpointsHeadersPayloadsOrResponses: false,
  cases: Object.freeze(Object.fromEntries(["primary", "retrieval", "transfer"].map((form) => [form,
    Object.freeze(contract.ai901_contract.forms[form].map((item) => Object.freeze({ id: item.id, case: item.case }))),
  ]))),
});

function predecessorRecords(value, continuation) {
  const restored = deriveOccludedFoldResume(value);
  const saved = restored?.saved;
  if (restored?.phase !== "verified_restore" || saved?.version !== OCCLUDED_FOLD_PROTECTED_JOURNEY_VERSION
    || saved.packetId !== "RP-009" || saved.checkpoint !== "occluded_fold_complete"
    || saved.continuation !== continuation || saved.cityStateDelta !== null || saved.externalStateDelta !== null || saved.successor !== null) return null;
  return Object.freeze({
    retainedRp007Summary: frozenClone(saved.retainedRp007Summary),
    retainedRp008Summary: frozenClone(saved.retainedRp008Summary),
    retainedRp009Ledger: frozenClone(saved.edgeLedger),
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

function prerequisitesPass(value) {
  return value?.python?.skillId === "PY-018" && value.python.readinessStatus === "ready"
    && Array.isArray(value.python.sourceLessonIds) && ["L-03-03", "L-05-03"].every((id) => value.python.sourceLessonIds.includes(id))
    && value?.ai901?.objectiveId === "AI901-D2-O3" && value.ai901.readinessStatus === "ready"
    && Array.isArray(value.ai901.sourceLessonIds) && ["L-05-03", "L-06-01"].every((id) => value.ai901.sourceLessonIds.includes(id));
}

function focusForBoundary(boundary) {
  const targets = {
    observations: "counterfield_survey_heading", pythonPrimary: "python_primary_heading", pythonTrace: "python_trace_heading",
    pythonTransfer: "python_transfer_heading", clientPrimary: "client_primary_heading", clientRetrieval: "client_retrieval_heading",
    clientTransfer: "client_transfer_heading", clientFlowBoundaryExplanation: "client_flow_boundary_explanation",
    truthAuthorityBoundaryExplanation: "truth_authority_boundary_explanation", review: "bounded_scope_review_heading", saved: "saved_controls",
  };
  return Object.freeze({ group: boundary, target: targets[boundary] ?? "counterfield_survey_heading" });
}

function firstIncompleteFocus(completion) {
  const order = ["observations", "pythonPrimary", "pythonTrace", "pythonTransfer", "clientPrimary", "clientRetrieval", "clientTransfer", "clientFlowBoundaryExplanation", "truthAuthorityBoundaryExplanation", "review", "saved"];
  const boundary = order.find((key) => completion[key] !== true);
  return boundary ? focusForBoundary(boundary) : Object.freeze({ group: "verified_restore", target: "saved_controls" });
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
    ["PY-018", "primary", pythonCheckIds], ["PY-018", "trace", traceDimensions], ["PY-018", "transfer", pythonCheckIds],
    ["RP010-FOUNDRY-CLIENT-FLOW-01", "primary", aiShape("primary")],
    ["RP010-FOUNDRY-CLIENT-FLOW-01", "retrieval", aiShape("retrieval")],
    ["RP010-FOUNDRY-CLIENT-FLOW-01", "transfer", aiShape("transfer")],
    ["RP010-FOUNDRY-CLIENT-FLOW-01", "client_flow_boundary_explanation", ["client_flow_boundary"]],
    ["RP010-FOUNDRY-CLIENT-FLOW-01", "truth_authority_boundary_explanation", ["truth_authority_boundary"]],
  ];
}

function sanitizeSave(value) {
  const keys = ["version", "packetId", "mappingId", "checkpoint", "continuation", "cityStateDelta", "externalStateDelta", "successor", "retainedRp007Summary", "retainedRp008Summary", "retainedRp009Ledger", "scopeRegister", "evidence"];
  if (!value || Object.keys(value).length !== keys.length || keys.some((key) => !(key in value))
    || value.version !== COUNTERFIELD_PROTECTED_JOURNEY_VERSION || value.packetId !== "RP-010"
    || value.mappingId !== contract.mapping_id || value.checkpoint !== "counterfield_complete"
    || value.continuation !== "continuation" || value.cityStateDelta !== null || value.externalStateDelta !== null || value.successor !== null
    || !validRp007(value.retainedRp007Summary) || !validRp008(value.retainedRp008Summary)
    || stableJson(value.retainedRp009Ledger) !== stableJson(expectedRp009Ledger())) return null;
  const register = value.scopeRegister;
  if (!register || Object.keys(register).sort().join("|") !== "exchange|observations"
    || !exactObservationSet(register.observations)
    || stableJson(register.exchange) !== stableJson(expectedRecords("primary"))) return null;
  const expected = expectedEvidenceShape();
  const evidenceKeys = ["packet_id", "mapping_id", "form", "skill_or_objective_id", "dimension_correctness", "attempt_count", "hint_level", "confidence", "misconception_tags", "mastery_status"];
  if (!Array.isArray(value.evidence) || value.evidence.length !== expected.length || !expected.every(([id, form, dimensions], index) => {
    const record = value.evidence[index];
    return record && Object.keys(record).length === evidenceKeys.length && evidenceKeys.every((key) => key in record)
      && record.packet_id === contract.packet_id && record.mapping_id === contract.mapping_id
      && record.skill_or_objective_id === id && record.form === form && record.mastery_status === "mastered"
      && Array.isArray(record.misconception_tags) && record.misconception_tags.every((tag) => allowedMisconceptions.has(tag))
      && record.dimension_correctness && Object.keys(record.dimension_correctness).length === dimensions.length
      && dimensions.every((dimension) => record.dimension_correctness[dimension] === true);
  })) return null;
  return Object.freeze({
    version: value.version, packetId: value.packetId, mappingId: value.mappingId, checkpoint: value.checkpoint,
    continuation: value.continuation, cityStateDelta: null, externalStateDelta: null, successor: null,
    retainedRp007Summary: frozenClone(value.retainedRp007Summary), retainedRp008Summary: frozenClone(value.retainedRp008Summary),
    retainedRp009Ledger: expectedRp009Ledger(),
    scopeRegister: Object.freeze({ observations: Object.freeze([...observationIds]), exchange: expectedRecords("primary") }),
    evidence: Object.freeze(value.evidence.map((record) => evidenceRecord({
      form: record.form, skillOrObjectiveId: record.skill_or_objective_id, correctness: record.dimension_correctness,
      attempts: record.attempt_count, hints: record.hint_level, confidence: record.confidence, misconceptionTags: record.misconception_tags,
    }))),
  });
}

export function createCounterfieldPersistenceAdapter(initialValue = null) {
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

export function deriveCounterfieldResume(value) {
  const saved = sanitizeSave(value);
  if (saved) return Object.freeze({
    phase: "verified_restore", completion: Object.freeze({ saved: true }),
    focusIntent: Object.freeze({ group: "verified_restore", target: "saved_controls" }), saved,
    transientWorkCleared: true, privateWorkCleared: true, replayedEvents: Object.freeze([]),
  });
  const order = ["pythonPrimary", "pythonTrace", "pythonTransfer", "clientPrimary", "clientRetrieval", "clientTransfer", "clientFlowBoundaryExplanation", "truthAuthorityBoundaryExplanation", "review"];
  const completion = { observations: false };
  let gap = false;
  for (const key of order) {
    const finalized = value?.finalized?.[key] === true;
    if (gap || !finalized) { gap = true; completion[key] = false; } else completion[key] = true;
  }
  return Object.freeze({
    phase: "CF-10 SURVEY SEPARATE DISTRICTS", completion: Object.freeze(completion), focusIntent: firstIncompleteFocus(completion),
    saved: null, retainedRp007Summary: validRp007(value?.retainedRp007Summary) ? frozenClone(value.retainedRp007Summary) : null,
    retainedRp008Summary: validRp008(value?.retainedRp008Summary) ? frozenClone(value.retainedRp008Summary) : null,
    retainedRp009Ledger: stableJson(value?.retainedRp009Ledger) === stableJson(expectedRp009Ledger()) ? expectedRp009Ledger() : null,
    observationsMustBeReobserved: true, transientWorkCleared: true, privateWorkCleared: true, replayedEvents: Object.freeze([]),
  });
}

export function deriveCounterfieldSafeReturn(action) {
  const target = safeReturnTargets[action];
  if (!target) throw new TypeError("An explicit approved return action is required.");
  return Object.freeze({ target, continuation: "continuation", cityStateDelta: null, externalStateDelta: null,
    replayedEvents: Object.freeze([]), successor: null, authorityGranted: false, externalActionEnabled: false,
    transientWorkCleared: true, privateWorkCleared: true });
}

export function deriveCounterfieldLookContinuation(action) {
  if (action !== counterfieldActions.lookContinuation) throw new TypeError("The field-margin continuation is LOOK-only.");
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
    evidenceRecord({ form: "primary", skillOrObjectiveId: "PY-018", correctness: results.pythonPrimary.checks }),
    evidenceRecord({ form: "trace", skillOrObjectiveId: "PY-018", correctness: results.pythonTrace.correctness }),
    evidenceRecord({ form: "transfer", skillOrObjectiveId: "PY-018", correctness: results.pythonTransfer.checks }),
    evidenceRecord({ form: "primary", skillOrObjectiveId: "RP010-FOUNDRY-CLIENT-FLOW-01", correctness: results.clientPrimary.correctness }),
    evidenceRecord({ form: "retrieval", skillOrObjectiveId: "RP010-FOUNDRY-CLIENT-FLOW-01", correctness: results.clientRetrieval.correctness }),
    evidenceRecord({ form: "transfer", skillOrObjectiveId: "RP010-FOUNDRY-CLIENT-FLOW-01", correctness: results.clientTransfer.correctness }),
    evidenceRecord({ form: "client_flow_boundary_explanation", skillOrObjectiveId: "RP010-FOUNDRY-CLIENT-FLOW-01", correctness: { client_flow_boundary: true } }),
    evidenceRecord({ form: "truth_authority_boundary_explanation", skillOrObjectiveId: "RP010-FOUNDRY-CLIENT-FLOW-01", correctness: { truth_authority_boundary: true } }),
  ]);
}

/** Protected Node-only reference caller. It is intentionally absent from App/main, routes, bundles, and browser persistence. */
export function runCounterfieldProtectedJourneySmoke(fixture) {
  const acceptedBytes = JSON.stringify(fixture?.acceptedCampaign);
  const predecessorBytes = JSON.stringify(fixture?.predecessor);
  const tourBytes = JSON.stringify(fixture?.tour);
  const continuation = fixture?.acceptedCampaign?.continuation;
  if (continuation !== "continuation" || fixture.acceptedCampaign?.cityStateDelta !== null
    || fixture.acceptedCampaign?.externalStateDelta !== null || fixture.acceptedCampaign?.successor !== null) {
    throw new TypeError("The exact accepted campaign boundary is required.");
  }
  const optionalUnsafe = { privateNotes: fixture.privateNotes, credentials: fixture.credentials, endpoint: fixture.endpoint,
    headers: fixture.headers, payload: fixture.payload, response: fixture.response, flags: fixture.flags,
    sceneSignal: fixture.sceneSignal, confidenceSignal: fixture.confidenceSignal, presentationSignal: fixture.presentationSignal };
  if (unsafeFixturePattern.test(JSON.stringify(optionalUnsafe))) throw new TypeError("Unsafe, private, inferred, presentation-derived, remote, or Tour-derived input is not accepted.");
  const retained = predecessorRecords(fixture.predecessor, continuation);
  if (!retained) throw new TypeError("Exact verified RP-009 completion is required.");
  const earlyReturn = deriveCounterfieldSafeReturn(fixture.earlyReturnAction);
  if (fixture.orientAction !== counterfieldActions.orient || fixture.inspectAction !== counterfieldActions.inspectEvidence) {
    throw new TypeError("Exact separate orient and survey actions are required.");
  }
  if (!prerequisitesPass(fixture.prerequisites)) return Object.freeze({
    version: COUNTERFIELD_PROTECTED_JOURNEY_VERSION, status: "prerequisite_hold", protected: true, routable: false,
    storyNavigationLocked: false, completion: Object.freeze({}), earlyReturn, cityStateDelta: null, externalStateDelta: null,
    successor: null, transientWorkCleared: true, privateWorkCleared: true,
  });
  if (!exactObservationSet(fixture.observationOrder)) answerFreeFailure("observations", "Record each supported Counterfield observation; revisits are harmless.");
  if (fixture.runAction !== counterfieldActions.runExchange) throw new TypeError("Exact bounded exchange action is required.");
  const results = {
    pythonPrimary: evaluateCounterfieldPython("primary", fixture.pythonPrimarySource),
    pythonTrace: evaluateCounterfieldPythonTrace(fixture.pythonTraceAnswers),
    pythonTransfer: evaluateCounterfieldPython("transfer", fixture.pythonTransferSource),
    clientPrimary: evaluateCounterfieldClientFlow("primary", fixture.clientAnswers?.primary),
    clientRetrieval: evaluateCounterfieldClientFlow("retrieval", fixture.clientAnswers?.retrieval),
    clientTransfer: evaluateCounterfieldClientFlow("transfer", fixture.clientAnswers?.transfer),
  };
  for (const boundary of ["pythonPrimary", "pythonTrace", "pythonTransfer", "clientPrimary", "clientRetrieval", "clientTransfer"]) {
    if (!results[boundary].passed) answerFreeFailure(boundary, "The current bounded check is incomplete.", {
      misconceptionTags: results[boundary].misconceptionTags ?? [], failedCheckIds: results[boundary].failedCheckIds ?? [],
    });
  }
  if (fixture.explanations?.clientFlowBoundary !== counterfieldExplanationAnswers.clientFlowBoundary) {
    answerFreeFailure("clientFlowBoundaryExplanation", "Explain the four distinct client-flow stages.");
  }
  if (fixture.explanations?.truthAuthorityBoundary !== counterfieldExplanationAnswers.truthAuthorityBoundary) {
    answerFreeFailure("truthAuthorityBoundaryExplanation", "Explain the truth and authority limit of a valid client flow.");
  }
  if (fixture.reviewAction !== counterfieldActions.finalizeReview) answerFreeFailure("review", "Finalize the separate bounded scope review.");
  if (fixture.saveAction !== counterfieldActions.saveRegister) throw new TypeError("Exact separate atomic save action is required.");
  const candidate = {
    version: COUNTERFIELD_PROTECTED_JOURNEY_VERSION, packetId: "RP-010", mappingId: contract.mapping_id,
    checkpoint: "counterfield_complete", continuation, cityStateDelta: null, externalStateDelta: null, successor: null,
    retainedRp007Summary: retained.retainedRp007Summary, retainedRp008Summary: retained.retainedRp008Summary,
    retainedRp009Ledger: retained.retainedRp009Ledger,
    scopeRegister: { observations: [...new Set(fixture.observationOrder)], exchange: results.pythonPrimary.derivedExchange },
    evidence: buildEvidence(results),
  };
  const adapter = createCounterfieldPersistenceAdapter();
  const commit = adapter.write(candidate);
  if (commit.status !== "committed") throw new TypeError("Atomic save rejected the bounded evidence.");
  const restored = deriveCounterfieldResume(adapter.read());
  if (restored.phase !== "verified_restore" || restored.replayedEvents.length !== 0) throw new TypeError("Verified replay-free restore is required.");
  const returnedRoute = deriveCounterfieldSafeReturn(fixture.finalReturnAction);
  const onwardContinuation = deriveCounterfieldLookContinuation(fixture.lookContinuationAction);
  const tourAdapter = createCounterfieldPersistenceAdapter();
  const tourProbe = Object.freeze({ mode: fixture.tour?.mode, observationsFinalized: false, masteryFinalized: false,
    saveStatus: "tour_preview_only", routeUnlocked: false, successor: null, adapterValue: tourAdapter.read() });
  if (JSON.stringify(fixture.acceptedCampaign) !== acceptedBytes || JSON.stringify(fixture.predecessor) !== predecessorBytes || JSON.stringify(fixture.tour) !== tourBytes) {
    throw new TypeError("Protected inputs must remain byte-stable.");
  }
  const completion = Object.fromEntries(["observations", "pythonPrimary", "pythonTrace", "pythonTransfer", "clientPrimary", "clientRetrieval", "clientTransfer", "clientFlowBoundaryExplanation", "truthAuthorityBoundaryExplanation", "review", "saved"].map((key) => [key, true]));
  return Object.freeze({
    version: COUNTERFIELD_PROTECTED_JOURNEY_VERSION, status: "protected_reference_complete", protected: true, routable: false,
    offlineOnly: true, browserStorageUsed: false, networkUsed: false, liveWorldRead: false, liveFoundryRead: false,
    liveRequestResponseOrExternalOperationPerformed: false, sceneEvidenceUsed: false, presentationEvidenceUsed: false,
    accessibilityEvidenceUsed: false, confidenceEvidenceUsed: false, timingEvidenceUsed: false, focusEvidenceUsed: false,
    navigationEvidenceUsed: false, saveDisplayEvidenceUsed: false, tourEvidenceUsed: false, externalActionEnabled: false,
    authorityGranted: false, examCreditGranted: false, examGuarantee: false, continuation,
    cityStateDelta: null, externalStateDelta: null, worldStateChanged: false, worldClockDelta: null, successor: null,
    timeline: Object.freeze(["CF-00 ARRIVE + ORIENT", "CF-10 SURVEY SEPARATE DISTRICTS", "CF-20 BOUND EXCHANGE + SAVE", "CF-30 VERIFY + RETURN"]),
    observations: Object.freeze([...new Set(fixture.observationOrder)]), revisitCount: fixture.observationOrder.length - observationIds.length,
    completion: Object.freeze(completion), focusIntent: firstIncompleteFocus(completion),
    recordInputsPreserved: true, evidenceClassesPreserved: true, unsupportedLimitsPreserved: true,
    transientAudit: Object.freeze({ primary: results.pythonPrimary.transientAudit, transfer: results.pythonTransfer.transientAudit,
      allCleared: true, privateCleared: true, requestResponseCleared: true }),
    saved: restored.saved,
    restored: Object.freeze({ phase: restored.phase, checkpoint: restored.saved.checkpoint, focusIntent: restored.focusIntent,
      replayedEvents: restored.replayedEvents, transientWorkCleared: restored.transientWorkCleared, privateWorkCleared: restored.privateWorkCleared }),
    earlyReturn, returnedRoute, onwardContinuation, tourProbe, presentation: counterfieldPresentation,
    capabilityInterface: counterfieldNeutralClientInterface,
  });
}

export const counterfieldReferenceAnswers = Object.freeze({
  client: Object.freeze(Object.fromEntries(["primary", "retrieval", "transfer"].map((form) => [form,
    Object.freeze(Object.fromEntries(contract.ai901_contract.forms[form].map((item) => [item.id,
      Object.freeze(Object.fromEntries(aiDimensions.map((dimension) => [dimension, item[dimension]]))),
    ]))),
  ]))),
  pythonTrace: counterfieldPythonTraceAnswers,
  explanations: counterfieldExplanationAnswers,
});
