import contract from "../../curriculum/readiness/RP-010/contract.json" with { type: "json" };
import { THREE_CURRENT_REACH_SAVE_KEY, sanitizeThreeCurrentReachSave } from "./ThreeCurrentReachNormal.js";
import { MANYFOLD_RETURN_SAVE_KEY, sanitizeManyfoldReturnSave } from "./ManyfoldReturnNormal.js";
import { INTERVAL_WORKS_SAVE_KEY, sanitizeIntervalWorksSave } from "./IntervalWorksNormal.js";
import { BRAIDED_VERGE_SAVE_KEY, sanitizeBraidedVergeSave } from "./BraidedVergeNormal.js";
import { OFFSET_REACH_SAVE_KEY, sanitizeOffsetReachSave } from "./OffsetReachNormal.js";
import {
  OCCLUDED_FOLD_CONTROLLER_VERSION, OCCLUDED_FOLD_RECORD_VERSION, OCCLUDED_FOLD_SAVE_KEY,
  OCCLUDED_FOLD_SHELL_VERSION, occludedFoldActions, occludedFoldObservationIds, sanitizeOccludedFoldSave,
} from "./OccludedFoldNormal.js";

export const COUNTERFIELD_SHELL_VERSION = "SS-RP010-COUNTERFIELD-v1";
export const COUNTERFIELD_CONTROLLER_VERSION = "rp010.counterfield-controller.v1";
export const COUNTERFIELD_RECORD_VERSION = "rp010.counterfield-save.v1";
export const COUNTERFIELD_SAVE_KEY = "horizon-archive-rp010-counterfield-save-v1";
export const COUNTERFIELD_ROUTE_CONTROLLER_VERSION = "td010.route-controller.v1";
export const COUNTERFIELD_ROUTE_GROUP = "td010-counterfield-route";
export const COUNTERFIELD_ROUTE_OWNER = "PILOT // EXPEDITION NAVIGATION";
export const COUNTERFIELD_ROUTE_ACTION = "PILOT // SURVEY COUNTERFIELD";
export const COUNTERFIELD_ROUTE_INTENT_KIND = "td010.counterfield-route-intent.v1";

export const counterfieldModalities = Object.freeze(["pointer", "touch", "keyboard_enter", "keyboard_space", "switch", "speech", "screen_reader"]);
export const counterfieldObservationIds = Object.freeze([
  "recurrent_adjacency", "incomplete_ordered_change", "cross_scale_correspondence",
  "ordinary_unmatched_feature", "multi_candidate_relation", "unavailable_margin", "layered_stewardship",
]);
export const counterfieldActions = Object.freeze({
  route: COUNTERFIELD_ROUTE_ACTION, inspect: "SURVEY SEVEN EQUAL EVIDENCE CLASSES",
  recurrentAdjacency: "RECORD RECURRENT ADJACENCY", incompleteOrderedChange: "RECORD INCOMPLETE ORDERED CHANGE",
  crossScaleCorrespondence: "RECORD CROSS-SCALE CORRESPONDENCE", ordinaryUnmatchedFeature: "RECORD ORDINARY UNMATCHED FEATURE",
  multiCandidateRelation: "RECORD MULTI-CANDIDATE RELATION", unavailableMargin: "RECORD UNAVAILABLE MARGIN",
  layeredStewardship: "RECORD LAYERED STEWARDSHIP", pythonPrimary: "CHECK PY-018 PRIMARY",
  pythonTrace: "CHECK PY-018 TRACE", pythonTransfer: "CHECK PY-018 TRANSFER",
  clientPrimary: "CHECK CLIENT FLOW PRIMARY", clientRetrieval: "CHECK CLIENT FLOW RETRIEVAL",
  clientTransfer: "CHECK CLIENT FLOW TRANSFER", clientFlowBoundary: "CHECK CLIENT-FLOW BOUNDARY EXPLANATION",
  truthAuthorityBoundary: "CHECK TRUTH/AUTHORITY BOUNDARY EXPLANATION", review: "REVIEW FOUR BOUNDED SCOPES",
  prepareSave: "PREPARE BOUNDED SCOPE REGISTER", save: "SAVE BOUNDED SCOPE REGISTER",
  cancelSave: "CANCEL SAVE", retry: "RETRY BLANK RESPONSIBILITY", retrySave: "RETRY SAVE",
  returnOccludedFold: "RETURN TO OCCLUDED FOLD", returnThreshold: "RETURN TO CITY THRESHOLD",
  look: "LOOK AT FIELD-MARGIN CONTINUATION",
});

export const counterfieldReferenceSources = Object.freeze({
  primary: `request_record = {"method": "POST", "route_label": "project_responses", "headers": {"content_type": "application/json"}, "payload": {"record_ids": ["near_relation", "ordered_gap", "far_correspondence"], "scope": "sanitized_exposed_record_replicas"}}
response_record = {"status_code": 200, "headers": {"content_type": "application/json"}, "body": {"supported": ["near_relation"], "counterevidence": ["far_correspondence"], "ambiguous": ["ordered_gap"], "unavailable": ["outer_margin"], "identity": None, "topology": None, "continuity": None, "transformation": None, "unity": None, "synchronization": None, "chronology": None, "cause": None, "purpose": None}}
exchange_summary = {"request": {"method": request_record["method"], "route_label": request_record["route_label"], "content_type": request_record["headers"]["content_type"], "record_ids": request_record["payload"]["record_ids"], "scope": request_record["payload"]["scope"]}, "response": {"status_code": response_record["status_code"], "content_type": response_record["headers"]["content_type"], "supported": response_record["body"]["supported"], "counterevidence": response_record["body"]["counterevidence"], "ambiguous": response_record["body"]["ambiguous"], "unavailable": response_record["body"]["unavailable"]}, "unsupported": {key: response_record["body"][key] for key in ("identity", "topology", "continuity", "transformation", "unity", "synchronization", "chronology", "cause", "purpose")}}`,
  transfer: `request_record = {"method": "POST", "route_label": "bounded_analysis", "headers": {"content_type": "application/json"}, "payload": {"record_ids": ["inlet_pair", "missing_interval", "outer_repeat"], "scope": "fresh_sanitized_replica_set"}}
response_record = {"status_code": 202, "headers": {"content_type": "application/json"}, "body": {"supported": ["inlet_pair"], "counterevidence": ["outer_repeat"], "ambiguous": ["missing_interval"], "unavailable": ["sealed_margin"], "identity": None, "topology": None, "continuity": None, "transformation": None, "unity": None, "synchronization": None, "chronology": None, "cause": None, "purpose": None}}
exchange_summary = {"request": {"method": request_record["method"], "route_label": request_record["route_label"], "content_type": request_record["headers"]["content_type"], "record_ids": request_record["payload"]["record_ids"], "scope": request_record["payload"]["scope"]}, "response": {"status_code": response_record["status_code"], "content_type": response_record["headers"]["content_type"], "supported": response_record["body"]["supported"], "counterevidence": response_record["body"]["counterevidence"], "ambiguous": response_record["body"]["ambiguous"], "unavailable": response_record["body"]["unavailable"]}, "unsupported": {key: response_record["body"][key] for key in ("identity", "topology", "continuity", "transformation", "unity", "synchronization", "chronology", "cause", "purpose")}}`,
});
export const counterfieldPythonTraceAnswers = Object.freeze({
  requestMethodAndRoute: "method_and_route_label_remain_request_owned", requestContentType: "request_content_type_remains_request_owned",
  requestPayloadProvenance: "record_ids_are_traced_only_from_request_payload", requestScope: "replica_scope_is_traced_only_from_request_payload",
  responseStatus: "status_code_remains_response_owned", responseContentType: "response_content_type_remains_response_owned",
  responseEvidenceClasses: "supported_counterevidence_ambiguous_unavailable_remain_separate_response_fields", unsupportedLimits: "nine_unsupported_limits_remain_none",
});
export const counterfieldExplanationAnswers = Object.freeze({
  clientFlowBoundary: "project_client_setup_compatible_client_derivation_model_input_submission_and_returned_output_processing_are_distinct_steps",
  truthAuthorityBoundary: "a_valid_client_flow_neither_proves_output_truth_nor_authorizes_live_or_external_action",
});
export const counterfieldTruthfulWorkspaceLabel = "The course validator checks the approved Python source shape and derives the bounded exchange summary from session-only sanitized request/response replicas. It does not execute arbitrary Python, contact a network or Foundry service, use a credential or endpoint, or perform an external action.";

const unsupportedKeys = ["identity", "topology", "continuity", "transformation", "unity", "synchronization", "chronology", "cause", "purpose"];
const pythonCheckIds = Object.freeze([...contract.python_contract.checks]);
const traceDimensions = Object.freeze(Object.keys(counterfieldPythonTraceAnswers));
const aiDimensions = Object.freeze([...contract.ai901_contract.dimensions]);
const allowedMisconceptions = new Set(contract.ai901_contract.misconception_tags);
const clone = (value) => value == null ? value : JSON.parse(JSON.stringify(value));
const freeze = (value) => Object.freeze(value);
const exactKeys = (value, keys) => value && typeof value === "object" && !Array.isArray(value) && Object.keys(value).length === keys.length && keys.every((key, index) => Object.keys(value)[index] === key);
const canonical = (value) => JSON.stringify(value);
const normalized = (value) => String(value ?? "").replace(/\r/g, "").trim();
const forbiddenSource = /\b(?:import|from|open|print|eval|exec|system|popen|remove|unlink|rmdir|requests|urlopen|fetch|connect|send|write_text|read_text|subprocess|socket|httpx|aiohttp|azure|openai|AIProjectClient|DefaultAzureCredential)\b|https?:\/\/|API_KEY|SECRET|PASSWORD|credential|endpoint/i;

function expectedExchange(form) {
  const primary = form === "primary";
  return { request: { method: "POST", route_label: primary ? "project_responses" : "bounded_analysis", content_type: "application/json", record_ids: primary ? ["near_relation", "ordered_gap", "far_correspondence"] : ["inlet_pair", "missing_interval", "outer_repeat"], scope: primary ? "sanitized_exposed_record_replicas" : "fresh_sanitized_replica_set" }, response: { status_code: primary ? 200 : 202, content_type: "application/json", supported: [primary ? "near_relation" : "inlet_pair"], counterevidence: [primary ? "far_correspondence" : "outer_repeat"], ambiguous: [primary ? "ordered_gap" : "missing_interval"], unavailable: [primary ? "outer_margin" : "sealed_margin"] }, unsupported: Object.fromEntries(unsupportedKeys.map((key) => [key, null])) };
}
export function evaluateCounterfieldPython(form, learnerSource) {
  if (!["primary", "transfer"].includes(form)) throw new TypeError("form must be primary or transfer");
  const source = normalized(learnerSource), expected = expectedExchange(form);
  const safe = !forbiddenSource.test(source), exact = source === normalized(counterfieldReferenceSources[form]);
  const checks = freeze({
    local_python_only_no_import_or_remote_client: safe,
    request_and_response_inputs_preserved_exactly: exact,
    request_method_route_and_content_type_preserved: exact,
    request_payload_provenance_and_scope_preserved: exact,
    response_status_and_content_type_preserved: exact,
    response_evidence_classes_remain_separate: exact,
    unsupported_limits_remain_none: exact,
    no_file_network_output_secret_credential_endpoint_or_external_operation: safe,
  });
  const failedCheckIds = pythonCheckIds.filter((id) => checks[id] !== true);
  return freeze({ form, checks, score: pythonCheckIds.length - failedCheckIds.length, passed: failedCheckIds.length === 0, failedCheckIds: freeze(failedCheckIds), derivedExchange: failedCheckIds.length ? null : expected, transientAudit: freeze({ sourceRetained: false, requestRecordRetained: false, responseRecordRetained: false, exchangeSummaryRetained: false, cleared: true }) });
}
export function evaluateCounterfieldPythonTrace(answers) {
  const correctness = Object.fromEntries(Object.entries(counterfieldPythonTraceAnswers).map(([key, expected]) => [key, answers?.[key] === expected]));
  return freeze({ correctness: freeze(correctness), score: Object.values(correctness).filter(Boolean).length, passed: Object.values(correctness).every(Boolean) });
}
export function evaluateCounterfieldClientFlow(form, answers) {
  if (!contract.ai901_contract.forms[form]) throw new TypeError("form must be primary, retrieval, or transfer");
  const correctness = {}, misconceptionTags = [];
  for (const item of contract.ai901_contract.forms[form]) for (const dimension of aiDimensions) {
    const supplied = answers?.[item.id]?.[dimension]; correctness[`${item.id}.${dimension}`] = supplied === item[dimension];
    if (correctness[`${item.id}.${dimension}`] === false && allowedMisconceptions.has(supplied) && !misconceptionTags.includes(supplied)) misconceptionTags.push(supplied);
  }
  return freeze({ form, correctness: freeze(correctness), score: Object.values(correctness).filter(Boolean).length, passed: Object.values(correctness).every(Boolean), misconceptionTags: freeze(misconceptionTags) });
}

function exactObservationSet(value) { return canonical(value) === canonical(counterfieldObservationIds); }
function validRp007(value) { return canonical(value) === canonical({ checkpoint: "braided_verge_complete", continuities: "distinct_visible_continuities", association: "recurrent_exposed_association", difference: "one_bounded_difference", junction: "closed_junction_unavailable", unity: null, cause: null, purpose: null }); }
function validRp008(value) { return canonical(value) === canonical({ checkpoint: "offset_reach_complete", retained_local_association: true, recurring_familiar_contact: 1, comparable_non_contact: 1, cross_family_contact: 1, unavailable_case: 1, universal: null, exclusive: null, unity: null, cause: null, purpose: null }); }
function validRp009(value) { return canonical(value) === canonical({ observations: [...occludedFoldObservationIds], reconciliation: { mode: "bounded", correspondence: ["near_lamellar"], unmatched: ["far_unmatched"], ambiguous: { far_ambiguous: ["near_lamellar", "near_filament"] }, unavailable: ["outer_margin"], identity: null, topology: null, continuity: null, transformation: null, cause: null, purpose: null } }); }
function evidenceShape() {
  const ai = (form) => contract.ai901_contract.forms[form].flatMap((item) => aiDimensions.map((dimension) => `${item.id}.${dimension}`));
  return [["PY-018", "primary", pythonCheckIds], ["PY-018", "trace", traceDimensions], ["PY-018", "transfer", pythonCheckIds], ["RP010-FOUNDRY-CLIENT-FLOW-01", "primary", ai("primary")], ["RP010-FOUNDRY-CLIENT-FLOW-01", "retrieval", ai("retrieval")], ["RP010-FOUNDRY-CLIENT-FLOW-01", "transfer", ai("transfer")], ["RP010-FOUNDRY-CLIENT-FLOW-01", "client_flow_boundary_explanation", ["client_flow_boundary"]], ["RP010-FOUNDRY-CLIENT-FLOW-01", "truth_authority_boundary_explanation", ["truth_authority_boundary"]]];
}
function evidenceRecord(skill, form, correctness, attempt = 1, tags = []) { return { packet_id: "RP-010", mapping_id: "RP010-REQUEST-CLIENT-BOUNDARY-01", form, skill_or_objective_id: skill, dimension_correctness: clone(correctness), attempt_count: attempt, hint_level: 0, confidence: null, misconception_tags: tags.filter((tag) => allowedMisconceptions.has(tag)), mastery_status: "mastered" }; }
export function sanitizeCounterfieldSave(value) {
  const keys = ["version", "packetId", "mappingId", "checkpoint", "continuation", "cityStateDelta", "externalStateDelta", "successor", "retainedRp007Summary", "retainedRp008Summary", "retainedRp009Ledger", "scopeRegister", "evidence"];
  if (!exactKeys(value, keys) || value.version !== COUNTERFIELD_RECORD_VERSION || value.packetId !== "RP-010" || value.mappingId !== "RP010-REQUEST-CLIENT-BOUNDARY-01" || value.checkpoint !== "counterfield_complete" || value.continuation !== "continuation" || value.cityStateDelta !== null || value.externalStateDelta !== null || value.successor !== null || !validRp007(value.retainedRp007Summary) || !validRp008(value.retainedRp008Summary) || !validRp009(value.retainedRp009Ledger)) return null;
  if (!exactKeys(value.scopeRegister, ["observations", "exchange"]) || !exactObservationSet(value.scopeRegister.observations) || canonical(value.scopeRegister.exchange) !== canonical(expectedExchange("primary"))) return null;
  const shape = evidenceShape(), ekeys = ["packet_id", "mapping_id", "form", "skill_or_objective_id", "dimension_correctness", "attempt_count", "hint_level", "confidence", "misconception_tags", "mastery_status"];
  if (!Array.isArray(value.evidence) || value.evidence.length !== 8 || !shape.every(([skill, form, dimensions], i) => { const e = value.evidence[i]; return exactKeys(e, ekeys) && e.packet_id === "RP-010" && e.mapping_id === "RP010-REQUEST-CLIENT-BOUNDARY-01" && e.skill_or_objective_id === skill && e.form === form && e.mastery_status === "mastered" && Number.isInteger(e.attempt_count) && e.attempt_count >= 1 && Number.isInteger(e.hint_level) && e.hint_level >= 0 && e.hint_level <= 3 && (e.confidence === null || ["low", "medium", "high"].includes(e.confidence)) && Array.isArray(e.misconception_tags) && e.misconception_tags.every((tag) => allowedMisconceptions.has(tag)) && exactKeys(e.dimension_correctness, dimensions) && dimensions.every((d) => e.dimension_correctness[d] === true); })) return null;
  return freeze(clone(value));
}

const priorProofs = Object.freeze([
  [THREE_CURRENT_REACH_SAVE_KEY, sanitizeThreeCurrentReachSave], [MANYFOLD_RETURN_SAVE_KEY, sanitizeManyfoldReturnSave],
  [INTERVAL_WORKS_SAVE_KEY, sanitizeIntervalWorksSave], [BRAIDED_VERGE_SAVE_KEY, sanitizeBraidedVergeSave],
  [OFFSET_REACH_SAVE_KEY, sanitizeOffsetReachSave], [OCCLUDED_FOLD_SAVE_KEY, sanitizeOccludedFoldSave],
]);
function canonicalRaw(raw, sanitizer) { if (typeof raw !== "string") return null; try { const safe = sanitizer(JSON.parse(raw)); return safe && JSON.stringify(safe) === raw ? safe : null; } catch { return null; } }
export function createCounterfieldStorageAdapter(storage, proofBytes) {
  const expected = Object.fromEntries(priorProofs.map(([key]) => [key, proofBytes?.[key] ?? null]));
  const readRaw = (key) => { try { return storage?.getItem(key) ?? null; } catch { return null; } };
  const predecessorsStable = () => priorProofs.every(([key, sanitizer]) => expected[key] !== null && readRaw(key) === expected[key] && canonicalRaw(expected[key], sanitizer));
  return freeze({
    read() { const raw = readRaw(COUNTERFIELD_SAVE_KEY); return raw == null ? null : canonicalRaw(raw, sanitizeCounterfieldSave); },
    bytes: () => readRaw(COUNTERFIELD_SAVE_KEY), predecessorsStable,
    commit(candidate) {
      const before = readRaw(COUNTERFIELD_SAVE_KEY), safe = sanitizeCounterfieldSave(candidate);
      if (!safe || !predecessorsStable()) return freeze({ status: "failed", reason: safe ? "predecessor_changed" : "candidate_rejected", rollbackVerified: true, predecessorBytesPreserved: predecessorsStable() });
      try {
        const raw = JSON.stringify(safe); storage.setItem(COUNTERFIELD_SAVE_KEY, raw);
        if (readRaw(COUNTERFIELD_SAVE_KEY) !== raw || !canonicalRaw(raw, sanitizeCounterfieldSave) || !predecessorsStable()) throw new Error("read_back_rejected");
        return freeze({ status: "committed", value: safe, rollbackVerified: true, predecessorBytesPreserved: true });
      } catch (error) {
        try { if (before === null) storage.removeItem(COUNTERFIELD_SAVE_KEY); else storage.setItem(COUNTERFIELD_SAVE_KEY, before); } catch { /* verified below */ }
        const rollbackVerified = readRaw(COUNTERFIELD_SAVE_KEY) === before && predecessorsStable();
        return freeze({ status: "failed", reason: error.message, rollbackVerified, predecessorBytesPreserved: predecessorsStable() });
      }
    },
  });
}

function exactReleasedOf30(state) { return state?.shellVersion === OCCLUDED_FOLD_SHELL_VERSION && state.controllerVersion === OCCLUDED_FOLD_CONTROLLER_VERSION && state.packetId === "RP-009" && state.phase === "OF-30 VERIFY + RETURN" && state.boardState === "SC-10" && state.activeGroup === "of30_restore" && state.owner === "SYSTEM // EXPEDITION LEDGER" && state.availableActions?.includes(occludedFoldActions.notation) && state.cityStateDelta === null && state.externalStateDelta === null && state.successor === null; }
function exactRouteState(state) { return state?.shellVersion === OCCLUDED_FOLD_SHELL_VERSION && state.controllerVersion === COUNTERFIELD_ROUTE_CONTROLLER_VERSION && state.packetId === "RP-009" && state.phase === "OF-30 VERIFY + RETURN" && state.boardState === "SC-10" && state.activeGroup === COUNTERFIELD_ROUTE_GROUP && state.owner === COUNTERFIELD_ROUTE_OWNER && state.availableActions?.includes(COUNTERFIELD_ROUTE_ACTION) && state.availableActions?.includes(occludedFoldActions.notation) && state.cityStateDelta === null && state.externalStateDelta === null && state.successor === null; }
export function createCounterfieldRouteIntent(action, activationKind, opaqueFreshEventToken) { return freeze({ intentKind: COUNTERFIELD_ROUTE_INTENT_KIND, mode: "normal", shellVersion: OCCLUDED_FOLD_SHELL_VERSION, controllerVersion: COUNTERFIELD_ROUTE_CONTROLLER_VERSION, packetId: "RP-010", activeGroupId: COUNTERFIELD_ROUTE_GROUP, expectedOwner: COUNTERFIELD_ROUTE_OWNER, allowlistedActionId: action, activationKind, opaqueFreshEventToken }); }
function exactRouteIntent(intent) { return exactKeys(intent, ["intentKind", "mode", "shellVersion", "controllerVersion", "packetId", "activeGroupId", "expectedOwner", "allowlistedActionId", "activationKind", "opaqueFreshEventToken"]) && intent.intentKind === COUNTERFIELD_ROUTE_INTENT_KIND && intent.mode === "normal" && intent.shellVersion === OCCLUDED_FOLD_SHELL_VERSION && intent.controllerVersion === COUNTERFIELD_ROUTE_CONTROLLER_VERSION && intent.packetId === "RP-010" && intent.activeGroupId === COUNTERFIELD_ROUTE_GROUP && intent.expectedOwner === COUNTERFIELD_ROUTE_OWNER && intent.allowlistedActionId === COUNTERFIELD_ROUTE_ACTION && counterfieldModalities.includes(intent.activationKind) && typeof intent.opaqueFreshEventToken === "string" && intent.opaqueFreshEventToken.length >= 16; }
export function createCounterfieldIntent(state, action, activationKind, opaqueFreshEventToken) { return freeze({ mode: "normal", shellVersion: COUNTERFIELD_SHELL_VERSION, controllerVersion: COUNTERFIELD_CONTROLLER_VERSION, packetId: "RP-010", activeGroupId: state.activeGroup, expectedOwner: state.owner, allowlistedActionId: action, activationKind, opaqueFreshEventToken }); }
function exactIntent(intent, state) { return exactKeys(intent, ["mode", "shellVersion", "controllerVersion", "packetId", "activeGroupId", "expectedOwner", "allowlistedActionId", "activationKind", "opaqueFreshEventToken"]) && intent.mode === "normal" && intent.shellVersion === COUNTERFIELD_SHELL_VERSION && intent.controllerVersion === COUNTERFIELD_CONTROLLER_VERSION && intent.packetId === "RP-010" && intent.activeGroupId === state.activeGroup && intent.expectedOwner === state.owner && state.availableActions.includes(intent.allowlistedActionId) && counterfieldModalities.includes(intent.activationKind) && typeof intent.opaqueFreshEventToken === "string" && intent.opaqueFreshEventToken.length >= 16; }

const returnActions = [counterfieldActions.returnOccludedFold, counterfieldActions.returnThreshold];
const groups = Object.freeze({
  cf00_orientation: ["SYSTEM // EXPEDITION LEDGER", "cf00-heading", "CF-00 — ARRIVE AND ORIENT WITHOUT ASSIGNING ONE SYSTEM", [counterfieldActions.inspect]],
  cf10_observations: ["PILOT // COUNTERFIELD SURVEY", "cf10-observation-peer-heading", "CF-10 — SURVEY SEVEN EQUAL PHYSICAL EVIDENCE CLASSES", Object.values(counterfieldActions).slice(2, 9)],
  cf20_python_primary: ["PILOT // COURSE WORK", "cf20-python-primary-editor", "PY-018 — DERIVE ONE BOUNDED EXCHANGE SUMMARY FROM SANITIZED REPLICAS", [counterfieldActions.pythonPrimary]],
  cf20_python_trace: ["PILOT // COURSE WORK", "cf20-python-trace-first", "TRACE REQUEST-OWNED AND RESPONSE-OWNED FIELDS WITHOUT COLLAPSING THEM", [counterfieldActions.pythonTrace]],
  cf20_python_transfer: ["PILOT // COURSE WORK", "cf20-python-transfer-editor", "PY-018 TRANSFER — DERIVE A FRESH BOUNDED EXCHANGE SUMMARY", [counterfieldActions.pythonTransfer]],
  cf20_client_primary: ["PILOT // COURSE WORK", "cf20-client-primary-first", "AI901-D2-O3 — IDENTIFY THE FOUR DISTINCT CLIENT-FLOW RESPONSIBILITIES", [counterfieldActions.clientPrimary]],
  cf20_client_retrieval: ["PILOT // COURSE WORK", "cf20-client-retrieval-first", "AI901-D2-O3 RETRIEVAL — KEEP CLIENT-FLOW RESPONSIBILITIES DISTINCT", [counterfieldActions.clientRetrieval]],
  cf20_client_transfer: ["PILOT // COURSE WORK", "cf20-client-transfer-first", "AI901-D2-O3 TRANSFER — APPLY THE CLIENT-FLOW BOUNDARY", [counterfieldActions.clientTransfer]],
  cf20_client_flow_explanation: ["PILOT // COURSE WORK", "cf20-client-flow-explanation", "EXPLAIN THE FOUR DISTINCT CLIENT-FLOW RESPONSIBILITIES", [counterfieldActions.clientFlowBoundary]],
  cf20_truth_authority_explanation: ["PILOT // COURSE WORK", "cf20-truth-authority-explanation", "EXPLAIN WHY VALID CLIENT FLOW PROVES NEITHER OUTPUT TRUTH NOR LIVE AUTHORITY", [counterfieldActions.truthAuthorityBoundary]],
  cf20_recovery: ["SYSTEM // RECOVERY", "cf20-python-primary-first-failed", "RETRY THE FIRST INCOMPLETE RESPONSIBILITY WITHOUT AN ANSWER", [counterfieldActions.retry]],
  cf20_review: ["PILOT // EXPEDITION REVIEW", "cf20-review-heading", "REVIEW FOUR SEPARATELY ATTRIBUTABLE EXPEDITION SCOPES WITHOUT MERGING THEIR CLAIMS", [counterfieldActions.prepareSave]],
  cf20_save: ["PILOT // EXPEDITION LEDGER", "cf20-save-heading", "SAVE ONE PRIVATE-FREE BOUNDED COUNTERFIELD SCOPE REGISTER", [counterfieldActions.save, counterfieldActions.cancelSave]],
  cf20_transaction: ["SYSTEM // EXPEDITION LEDGER", "cf20-transaction-heading", "VERIFY THE ATOMIC COUNTERFIELD TRANSACTION", []],
  cf20_save_recovery: ["SYSTEM // RECOVERY", "cf20-save-retry-heading", "PRIOR COUNTERFIELD BYTES OR VERIFIED ABSENCE WERE RESTORED EXACTLY", [counterfieldActions.retrySave]],
  cf20_rollback_hold: ["SYSTEM // RECOVERY", "cf20-rollback-hold-heading", "COUNTERFIELD TRANSACTION HOLD", []],
  cf30_restore: ["SYSTEM // EXPEDITION LEDGER", "cf30-restore-heading", "CF-30 — VERIFY FOUR BOUNDED SCOPES AND RETURN WITHOUT REPLAY", [counterfieldActions.look]],
});
const statuses = Object.freeze({
  cf00_orientation: "Seven physical evidence classes are available as equal peers. No observation, learning, route, authority, or world effect has been granted.",
  cf10_observations: "Record each bounded physical fact deliberately. Revisit changes no evidence, rank, order, route, or world state.",
  cf20_review: "RP-007, RP-008, RP-009, and candidate RP-010 remain ordered, separate, read-only, provenance-bound, and non-credit.",
  cf20_save: "Confirm one canonical local write, exact read-back, TD-004 through TD-009 byte equality, and verified rollback protection.",
  cf20_transaction: "The local transaction is being verified. No competing action, evidence, route, authority, or world effect can dispatch.",
  cf20_save_recovery: "TD-004 through TD-009 bytes also remain exact. Private work was cleared and a blank save retry is available.",
  cf20_rollback_hold: "Rollback or predecessor equality could not be verified. Progression is held; only the two exact safe returns remain.",
  cf30_restore: "Exact canonical read-back passed while TD-004 through TD-009 bytes remained unchanged. No route, observation, evaluator, explanation, save, clock, or world event replayed.",
});
const headingIds = Object.freeze({
  cf20_python_primary: "cf20-python-primary-heading", cf20_python_trace: "cf20-python-trace-heading",
  cf20_python_transfer: "cf20-python-transfer-heading", cf20_client_primary: "cf20-client-primary-heading",
  cf20_client_retrieval: "cf20-client-retrieval-heading", cf20_client_transfer: "cf20-client-transfer-heading",
  cf20_client_flow_explanation: "cf20-client-flow-explanation-heading",
  cf20_truth_authority_explanation: "cf20-truth-authority-explanation-heading",
  cf20_recovery: "cf20-recovery-heading",
});
function publicForm(group) {
  if (["cf20_python_primary", "cf20_python_transfer"].includes(group)) return { kind: "python", form: group.endsWith("primary") ? "primary" : "transfer", fieldIds: ["learnerSource"], truthfulLabel: counterfieldTruthfulWorkspaceLabel };
  if (group === "cf20_python_trace") return { kind: "trace", form: "trace", fieldIds: traceDimensions, options: Object.fromEntries(traceDimensions.map((id) => [id, [counterfieldPythonTraceAnswers[id], `review_${id}_boundary`, `do_not_infer_${id}`]])) };
  if (group.startsWith("cf20_client_") && !group.endsWith("explanation")) { const form = group.split("_").at(-1); return { kind: "client", form, cases: contract.ai901_contract.forms[form].map(({ id, case: text }) => ({ id, prompt: text })), dimensions: aiDimensions, options: Object.fromEntries(aiDimensions.map((d) => [d, [...new Set([...contract.ai901_contract.forms[form].map((x) => x[d]), ...contract.ai901_contract.misconception_tags])]])) }; }
  if (group.endsWith("explanation")) { const form = group.includes("truth") ? "truthAuthorityBoundary" : "clientFlowBoundary"; return { kind: "explanation", form, fieldIds: [form], options: [counterfieldExplanationAnswers[form], `review_${form}_without_world_inference`, `do_not_infer_${form}`] }; }
  return null;
}
function fourScopeRows() { return ["RP-007", "RP-008", "RP-009", "RP-010"].map((scope) => ({ id: `${scope.toLowerCase()}_scope`, scope, owner: scope === "RP-010" ? "Candidate Counterfield scope register" : `Retained ${scope} scope`, state: "Read-only // separately attributable" })); }
function stateFor(group, observations = [], evidence = [], extra = {}) {
  const [owner, focusTarget, heading, actions] = groups[group]; const hold = group === "cf20_rollback_hold"; const headingId = headingIds[group] ?? focusTarget;
  return { shellVersion: COUNTERFIELD_SHELL_VERSION, controllerVersion: COUNTERFIELD_CONTROLLER_VERSION, packetId: "RP-010", mappingId: "RP010-REQUEST-CLIENT-BOUNDARY-01", phase: group === "cf00_orientation" ? "CF-00 ARRIVE + ORIENT" : group === "cf10_observations" ? "CF-10 SURVEY SEPARATE DISTRICTS" : group === "cf30_restore" ? "CF-30 VERIFY + RETURN" : "CF-20 BOUND EXCHANGE + SAVE", boardState: "SC-11", activeGroup: group, owner, headingId, heading, statusRegionId: "counterfield-status", statusMessageId: `td010:${group}`, statusMessage: statuses[group] ?? "This responsibility begins blank and remains private until its independent bounded check passes.", availableActions: [...actions, ...(group === "cf20_transaction" ? [] : returnActions)], recordedObservationIds: [...observations], form: publicForm(group), failedPublicIds: [], reviewRows: group === "cf20_review" ? fourScopeRows() : [], note: null, evidenceCount: evidence.length, privateWorkCleared: true, transientWorkCleared: true, temporaryWorkspaceCleared: true, cityStateDelta: null, externalStateDelta: null, successor: null, authorityGranted: false, externalActionEnabled: false, worldStateChanged: false, replayedEvents: [], routeOpened: false, focusIntent: { group, target: focusTarget }, ...extra, availableActions: hold ? [...returnActions] : [...actions, ...(group === "cf20_transaction" ? [] : returnActions)] };
}
function buildCandidate(predecessor, observations, evidence) { return { version: COUNTERFIELD_RECORD_VERSION, packetId: "RP-010", mappingId: "RP010-REQUEST-CLIENT-BOUNDARY-01", checkpoint: "counterfield_complete", continuation: "continuation", cityStateDelta: null, externalStateDelta: null, successor: null, retainedRp007Summary: clone(predecessor.retainedRp007Summary), retainedRp008Summary: clone(predecessor.retainedRp008Summary), retainedRp009Ledger: clone(predecessor.edgeLedger), scopeRegister: { observations: [...counterfieldObservationIds], exchange: expectedExchange("primary") }, evidence: clone(evidence) }; }
const actionObservation = Object.freeze(Object.fromEntries(Object.values(counterfieldActions).slice(2, 9).map((action, i) => [action, counterfieldObservationIds[i]])));
const learning = ["cf20_python_primary", "cf20_python_trace", "cf20_python_transfer", "cf20_client_primary", "cf20_client_retrieval", "cf20_client_transfer", "cf20_client_flow_explanation", "cf20_truth_authority_explanation"];

export function createCounterfieldNormalController(options = {}) {
  const routeState = clone(options.entrySourceState), releasedState = clone(options.releasedPredecessorState), routeIntent = options.entryIntent, adapter = options.adapter;
  const tour = options.mode === "demo_tour";
  const contaminated = ["privateNotes", "learnerSource", "requestRecord", "responseRecord", "exchangeSummary", "rawCases", "answers", "credentials", "endpoint", "headers", "payload", "response", "focusHistory", "pointerHistory", "timingHistory", "tourState"].some((key) => options[key] != null);
  const predecessorRaw = options.predecessorBytes; const predecessor = tour ? null : canonicalRaw(predecessorRaw, sanitizeOccludedFoldSave);
  const restored = tour ? null : sanitizeCounterfieldSave(options.restoredRecord);
  const accepted = !tour && !contaminated && predecessor?.version === OCCLUDED_FOLD_RECORD_VERSION && adapter?.predecessorsStable?.() === true && exactReleasedOf30(releasedState) && (restored || (exactRouteState(routeState) && exactRouteIntent(routeIntent)));
  const tokens = new Set(); if (accepted && routeIntent?.opaqueFreshEventToken) tokens.add(routeIntent.opaqueFreshEventToken);
  let observations = restored ? [...counterfieldObservationIds] : [], evidence = restored ? [...restored.evidence] : [], record = restored, draft = {}, attempts = {}, repairIndex = 0;
  let state = restored && accepted ? stateFor("cf30_restore", observations, evidence, { note: restored.scopeRegister, focusIntent: { group: "cf30_restore", target: "cf30-restore-heading" } }) : accepted ? stateFor("cf00_orientation") : options.mode === "demo_tour" ? { shellVersion: OCCLUDED_FOLD_SHELL_VERSION, controllerVersion: OCCLUDED_FOLD_CONTROLLER_VERSION, packetId: "RP-009", phase: "OF-30 VERIFY + RETURN", boardState: "SC-10", activeGroup: "td010-tour", owner: "SYSTEM // DEMO TOUR", headingId: "td010-tour-heading", heading: "COUNTERFIELD CAMPAIGN ROUTE UNAVAILABLE IN DEMO TOUR", statusRegionId: "counterfield-status", statusMessage: "Demo Tour reads and writes no campaign storage and creates no route, observation, learning, remediation, save, scope, world, authority, or successor state.", availableActions: [], privateWorkCleared: true, transientWorkCleared: true, cityStateDelta: null, externalStateDelta: null, successor: null, focusIntent: { group: "td010-tour", target: "td010-tour-heading" } } : { ...(routeState ?? {}), statusMessage: "Counterfield was not entered. Exact Occluded Fold remains restored; nothing was written or replayed, no SC-11 identity was exposed, and no future valid token was spent.", focusIntent: { group: COUNTERFIELD_ROUTE_GROUP, target: "td010-route-heading" } };
  const setGroup = (group, extra = {}) => { draft = {}; state = stateFor(group, observations, evidence, extra); return clone(state); };
  const reject = (reason) => freeze({ status: "rejected", reason, tokenConsumed: false, state: clone(state) });
  const safeReturn = (target) => { draft = {}; tokens.clear(); return freeze({ status: target === "RP-009" ? "returned_to_occluded_fold_write_free" : "returned_to_city_threshold_write_free", route: freeze({ target, continuation: "continuation", cityStateDelta: null, externalStateDelta: null, successor: null, authorityGranted: false, externalActionEnabled: false, writePerformed: false, replayedEvents: freeze([]) }), state: clone(state) }); };
  const fail = (index, failed, tags = []) => { repairIndex = index; attempts[index] = (attempts[index] ?? 0) + 1; return freeze({ status: "remediation_required", answerIncluded: false, failedIds: freeze([...failed]), misconceptionTags: freeze(tags), state: setGroup("cf20_recovery", { failedPublicIds: failed, repairTarget: learning[index], focusIntent: { group: "cf20_recovery", target: "cf20-python-primary-first-failed" }, statusMessage: "SYSTEM // RECOVERY: Only the named public dimensions remain incomplete. Private work was discarded; guidance contains no answer and retry starts blank." }) }); };
  const finalize = (index, skill, form, correctness, tags = []) => { attempts[index] = (attempts[index] ?? 0) + 1; evidence.push(evidenceRecord(skill, form, correctness, attempts[index], tags)); return freeze({ status: `${form}_finalized`, evidenceGranted: true, state: setGroup(index === 7 ? "cf20_review" : learning[index + 1]) }); };
  return freeze({
    getState: () => clone(state), getRecord: () => clone(record), entryTokenConsumed: () => accepted && Boolean(routeIntent?.opaqueFreshEventToken),
    updateField(name, value) {
      if (!state.form || typeof value !== "string" || value.length > 24000) return reject("field_update_rejected"); const form = state.form;
      if (form.kind === "python" && name === "learnerSource") draft.learnerSource = value;
      else if (form.kind === "trace" && form.fieldIds.includes(name) && form.options[name].includes(value)) draft[name] = value;
      else if (form.kind === "client") { const [id, dim] = name.split("."); if (!form.cases.some((x) => x.id === id) || !form.dimensions.includes(dim) || !form.options[dim].includes(value)) return reject("field_update_rejected"); draft[id] = { ...(draft[id] ?? {}), [dim]: value }; }
      else if (form.kind === "explanation" && form.fieldIds.includes(name) && form.options.includes(value)) draft[name] = value; else return reject("field_update_rejected");
      return freeze({ status: "field_updated_private", state: clone(state) });
    },
    dispatch(intent) {
      if (!accepted || options.mode === "demo_tour") return reject("route_closed"); const token = intent?.opaqueFreshEventToken;
      if (!exactIntent(intent, state) || tokens.has(token)) return reject(tokens.has(token) ? "one_hit_only" : "intent_rejected"); const action = intent.allowlistedActionId;
      if (action === counterfieldActions.returnOccludedFold) { if (!adapter.predecessorsStable()) return reject("predecessor_changed"); tokens.add(token); return safeReturn("RP-009"); }
      if (action === counterfieldActions.returnThreshold) { tokens.add(token); return safeReturn("CITY_THRESHOLD"); }
      if (!adapter.predecessorsStable()) return reject("predecessor_changed");
      if (action === counterfieldActions.inspect) { tokens.add(token); return freeze({ status: "survey_ready_zero_credit", state: setGroup("cf10_observations") }); }
      if (Object.hasOwn(actionObservation, action)) { const id = actionObservation[action]; tokens.add(token); if (!observations.includes(id)) observations.push(id); const done = observations.length === 7; return freeze({ status: done ? "observations_complete_zero_credit" : "observation_recorded_idempotent", evidenceGranted: false, state: setGroup(done ? "cf20_python_primary" : "cf10_observations", { sceneObservationId: id, focusIntent: { group: done ? "cf20_python_primary" : "cf10_observations", target: done ? "cf20-python-primary-editor" : "cf10-observation-peer-heading" } }) }); }
      const index = learning.findIndex((group) => group === state.activeGroup);
      if (index >= 0) {
        let result, skill, form, blank = false;
        if (index === 0 || index === 2) { form = index === 0 ? "primary" : "transfer"; skill = "PY-018"; blank = !String(draft.learnerSource ?? "").trim(); result = blank ? null : evaluateCounterfieldPython(form, draft.learnerSource); }
        else if (index === 1) { form = "trace"; skill = "PY-018"; blank = traceDimensions.some((id) => !draft[id]); result = blank ? null : evaluateCounterfieldPythonTrace(draft); }
        else if (index <= 5) { form = ["primary", "retrieval", "transfer"][index - 3]; skill = "RP010-FOUNDRY-CLIENT-FLOW-01"; blank = contract.ai901_contract.forms[form].some((item) => aiDimensions.some((d) => !draft[item.id]?.[d])); result = blank ? null : evaluateCounterfieldClientFlow(form, draft); }
        else { const key = index === 6 ? "clientFlowBoundary" : "truthAuthorityBoundary"; form = index === 6 ? "client_flow_boundary_explanation" : "truth_authority_boundary_explanation"; skill = "RP010-FOUNDRY-CLIENT-FLOW-01"; blank = !draft[key]; result = blank ? null : { passed: draft[key] === counterfieldExplanationAnswers[key], correctness: { [index === 6 ? "client_flow_boundary" : "truth_authority_boundary"]: draft[key] === counterfieldExplanationAnswers[key] }, failedCheckIds: [index === 6 ? "client_flow_boundary" : "truth_authority_boundary"] }; }
        if (blank) { state = { ...state, statusMessage: "Complete the first blank labelled field before submitting. No token, evidence, or answer was consumed." }; return freeze({ status: "required_field_missing", tokenConsumed: false, state: clone(state) }); }
        tokens.add(token); if (!result.passed) return fail(index, result.failedCheckIds ?? Object.keys(result.correctness).filter((k) => !result.correctness[k]), result.misconceptionTags ?? []); return finalize(index, skill, form, result.checks ?? result.correctness, result.misconceptionTags ?? []);
      }
      if (action === counterfieldActions.retry) { tokens.add(token); return freeze({ status: "fresh_blank_retry_visible", state: setGroup(learning[repairIndex]) }); }
      if (action === counterfieldActions.prepareSave) { if (observations.length !== 7 || evidence.length !== 8) return freeze({ status: "review_incomplete_recovered", state: setGroup(observations.length !== 7 ? "cf10_observations" : learning[evidence.length]) }); tokens.add(token); return freeze({ status: "save_confirmation_visible", state: setGroup("cf20_save", { reviewRows: fourScopeRows() }) }); }
      if (action === counterfieldActions.cancelSave) { tokens.add(token); return freeze({ status: "save_cancelled_write_free", writePerformed: false, state: setGroup("cf20_review") }); }
      if (action === counterfieldActions.retrySave) { tokens.add(token); return freeze({ status: "save_retry_ready_after_verified_rollback", state: setGroup("cf20_save") }); }
      if (action === counterfieldActions.save) { tokens.add(token); state = stateFor("cf20_transaction", observations, evidence); const result = adapter.commit(buildCandidate(predecessor, observations, evidence)); const safe = result.status === "committed" ? sanitizeCounterfieldSave(result.value) : null; if (!safe) { const rollback = result.rollbackVerified === true && result.predecessorBytesPreserved === true; return freeze({ status: rollback ? "save_failed_rollback_verified" : "save_failed_rollback_unverified", rollbackVerified: rollback, state: setGroup(rollback ? "cf20_save_recovery" : "cf20_rollback_hold") }); } record = safe; return freeze({ status: "save_committed_verified_restore", record: clone(record), state: setGroup("cf30_restore", { note: record.scopeRegister }) }); }
      if (action === counterfieldActions.look) { tokens.add(token); state = { ...state, statusMessage: "A destinationless field-margin observation was recorded with destination=null, routeOpened=false, successor=null, zero persistence, and zero evidence.", focusIntent: { group: "cf30_restore", target: "cf30-restore-heading" } }; return freeze({ status: "destinationless_look_zero_evidence", destination: null, routeOpened: false, successor: null, persisted: false, evidenceGranted: false, state: clone(state) }); }
      return reject("action_unavailable");
    },
  });
}

export const counterfieldPublicContract = freeze({ minimumTargetCssPx: 44, observationIds: counterfieldObservationIds, canonicalOrders: 5040, imageRoles: freeze(["SC-11-COUNTERFIELD-PANORAMA", "SC-11-COUNTERFIELD-CONTINUOUS-LANDSCAPE-DETAIL"]), structuralPlaceholdersOnly: true, layouts: freeze(["1920x1080", "1366x768", "390x844", "768x900-effective-200"]), modalities: counterfieldModalities, hardStop: "CF-30 VERIFY + RETURN / SC-11", successor: null });
