import assert from "node:assert/strict";
import test from "node:test";
import rp008 from "../../curriculum/readiness/RP-008/contract.json" with { type: "json" };
import rp009 from "../../curriculum/readiness/RP-009/contract.json" with { type: "json" };
import { OFFSET_REACH_RECORD_VERSION, OFFSET_REACH_SAVE_KEY, offsetReachObservationIds, offsetReachPythonTraceAnswers, sanitizeOffsetReachSave } from "../src/OffsetReachNormal.js";
import { BRAIDED_VERGE_SAVE_KEY } from "../src/BraidedVergeNormal.js";
import { INTERVAL_WORKS_SAVE_KEY } from "../src/IntervalWorksNormal.js";
import { MANYFOLD_RETURN_SAVE_KEY } from "../src/ManyfoldReturnNormal.js";
import { THREE_CURRENT_REACH_SAVE_KEY } from "../src/ThreeCurrentReachNormal.js";
import {
  OCCLUDED_FOLD_RECORD_VERSION, OCCLUDED_FOLD_SAVE_KEY, OCCLUDED_FOLD_SHELL_VERSION,
  OCCLUDED_FOLD_TRUTHFUL_WORKSPACE_LABEL, createOccludedFoldIntent,
  createOccludedFoldNormalController, createOccludedFoldRouteIntent,
  createOccludedFoldStorageAdapter, evaluateOccludedFoldPromptBoundary,
  executeOccludedFoldWorkspace, occludedFoldActions, occludedFoldExplanationAnswers,
  occludedFoldObservationIds, occludedFoldPythonTraceAnswers,
  resolveOccludedFoldWorldScene, sanitizeOccludedFoldSave,
} from "../src/OccludedFoldNormal.js";

const evidenceKeys = ["packet_id", "mapping_id", "form", "skill_or_objective_id", "dimension_correctness", "attempt_count", "hint_level", "confidence", "misconception_tags", "mastery_status"];
function evidence(packet, mapping, skill, form, dimensions) {
  const value = { packet_id: packet, mapping_id: mapping, form, skill_or_objective_id: skill,
    dimension_correctness: Object.fromEntries(dimensions.map((id) => [id, true])), attempt_count: 1,
    hint_level: 0, confidence: null, misconception_tags: [], mastery_status: "mastered" };
  return Object.fromEntries(evidenceKeys.map((key) => [key, value[key]]));
}

function offsetRecord() {
  const aiShape = (form) => rp008.ai901_contract.forms[form].flatMap((item) => rp008.ai901_contract.dimensions.map((dimension) => `${item.id}.${dimension}`));
  return sanitizeOffsetReachSave({
    version: OFFSET_REACH_RECORD_VERSION, packetId: "RP-008", mappingId: "RP008-A3-OFFSET-REACH",
    checkpoint: "offset_reach_complete", continuation: "continuation", cityStateDelta: null, externalStateDelta: null, successor: null,
    retainedRp007Summary: { checkpoint: "braided_verge_complete", continuities: "distinct_visible_continuities", association: "recurrent_exposed_association", difference: "one_bounded_difference", junction: "closed_junction_unavailable", unity: null, cause: null, purpose: null },
    note: { observations: [...offsetReachObservationIds], retained_local_association: true, recurring_familiar_contact: 1,
      comparable_non_contact: 1, cross_family_contact: 1, unavailable_case: 1, universal: null, exclusive: null,
      unity: null, cause: null, purpose: null, stewardship: "layered_stewardship_observed", replicas: "sanitized_precomputed_only" },
    evidence: [
      evidence("RP-008", "RP008-A3-OFFSET-REACH", "PY-016", "primary", rp008.python_contract.checks),
      evidence("RP-008", "RP008-A3-OFFSET-REACH", "PY-016", "trace", Object.keys(offsetReachPythonTraceAnswers)),
      evidence("RP-008", "RP008-A3-OFFSET-REACH", "PY-016", "transfer", rp008.python_contract.checks),
      ...["primary", "retrieval", "transfer"].map((form) => evidence("RP-008", "RP008-A3-OFFSET-REACH", "RP008-INFORMATION-EXTRACTION-01", form, aiShape(form))),
      evidence("RP-008", "RP008-A3-OFFSET-REACH", "RP008-INFORMATION-EXTRACTION-01", "selection_boundary_explanation", ["selection_boundary"]),
      evidence("RP-008", "RP008-A3-OFFSET-REACH", "RP008-INFORMATION-EXTRACTION-01", "inference_boundary_explanation", ["inference_boundary"]),
    ],
  });
}

function pythonSource(form) {
  const names = form === "primary"
    ? ["near_lamellar", "far_unmatched", "far_ambiguous", "outer_margin"]
    : ["inlet_ribbed", "outer_solitary", "outer_mixed", "sealed_edge"];
  const candidates = form === "primary" ? [["far_lamellar"], [], ["near_lamellar", "near_filament"], null] : [["outer_ribbed"], [], ["inlet_ribbed", "inlet_beaded"], null];
  const statuses = ["correspondence", "unmatched", "ambiguous", "unavailable"];
  const records = names.map((record_id, index) => ({ record_id, status: statuses[index], candidates: candidates[index] }));
  const environmentName = rp009.python_contract.forms[form].environment_name;
  return `import os

edge_records = ${JSON.stringify(records, null, 4).replaceAll("null", "None")}
mode = os.environ.get("${environmentName}")
if mode != "bounded":
    raise ValueError("${environmentName} must be bounded")
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
}`;
}

function memory(mode = "normal") {
  const predecessor = offsetRecord();
  assert.ok(predecessor);
  const offsetBytes = JSON.stringify(predecessor);
  const braidedBytes = "exact-td007-bytes", intervalBytes = "exact-td006-bytes", manyfoldBytes = "exact-td005-bytes", threeCurrentBytes = "exact-td004-bytes";
  const values = new Map([[OFFSET_REACH_SAVE_KEY, offsetBytes], [BRAIDED_VERGE_SAVE_KEY, braidedBytes], [INTERVAL_WORKS_SAVE_KEY, intervalBytes], [MANYFOLD_RETURN_SAVE_KEY, manyfoldBytes], [THREE_CURRENT_REACH_SAVE_KEY, threeCurrentBytes]]);
  let candidateWritten = false;
  const storage = { getItem(key) { if (mode === "readback-failure" && key === OCCLUDED_FOLD_SAVE_KEY && candidateWritten) return "{"; return values.get(key) ?? null; },
    setItem(key, value) { if (mode === "write-failure" && key === OCCLUDED_FOLD_SAVE_KEY) throw new Error("write"); values.set(key, value); if (key === OCCLUDED_FOLD_SAVE_KEY) candidateWritten = true; },
    removeItem(key) { values.delete(key); if (key === OCCLUDED_FOLD_SAVE_KEY) candidateWritten = false; } };
  const predecessorSet = { offsetRecord: predecessor, offsetBytes, braidedBytes, intervalBytes, manyfoldBytes, threeCurrentBytes };
  return { predecessor, offsetBytes, braidedBytes, intervalBytes, manyfoldBytes, threeCurrentBytes, values, storage,
    adapter: createOccludedFoldStorageAdapter(storage, predecessorSet) };
}

function subject(mode = "normal", extra = {}) {
  const item = memory(mode);
  const controller = createOccludedFoldNormalController({ predecessorRecord: item.predecessor, predecessorBytes: item.offsetBytes,
    readPredecessorBytes: () => item.values.get(OFFSET_REACH_SAVE_KEY), braidedBytes: item.braidedBytes,
    readBraidedBytes: () => item.values.get(BRAIDED_VERGE_SAVE_KEY), intervalBytes: item.intervalBytes,
    readIntervalBytes: () => item.values.get(INTERVAL_WORKS_SAVE_KEY), manyfoldBytes: item.manyfoldBytes,
    readManyfoldBytes: () => item.values.get(MANYFOLD_RETURN_SAVE_KEY), threeCurrentBytes: item.threeCurrentBytes,
    readThreeCurrentBytes: () => item.values.get(THREE_CURRENT_REACH_SAVE_KEY),
    entryIntent: createOccludedFoldRouteIntent(occludedFoldActions.route, "screen_reader", "td009-entry-token"), adapter: item.adapter, ...extra });
  return { ...item, controller };
}
let token = 0;
function dispatch(controller, action) { token += 1; return controller.dispatch(createOccludedFoldIntent(controller.getState(), action, "screen_reader", `td009-${token}-token`)); }
function update(controller, values) { Object.entries(values).forEach(([key, value]) => controller.updateField(key, value)); }
const observations = [occludedFoldActions.continuities, occludedFoldActions.association, occludedFoldActions.difference, occludedFoldActions.order, occludedFoldActions.junction, occludedFoldActions.stewardship];
function enterLearning(controller, order = observations) { dispatch(controller, occludedFoldActions.inspect); order.forEach((action) => dispatch(controller, action)); }
function submitPrompt(controller, form) { for (const item of rp009.ai901_contract.forms[form]) update(controller, { [`${item.id}.prompt_owner`]: item.prompt_owner, [`${item.id}.deciding_signal`]: item.deciding_signal }); return dispatch(controller, occludedFoldActions[`vision${form[0].toUpperCase()}${form.slice(1)}`]); }
function advance(controller) { enterLearning(controller); update(controller, { learnerSource: pythonSource("primary") }); dispatch(controller, occludedFoldActions.pythonPrimary); update(controller, occludedFoldPythonTraceAnswers); dispatch(controller, occludedFoldActions.pythonTrace); update(controller, { learnerSource: pythonSource("transfer") }); dispatch(controller, occludedFoldActions.pythonTransfer); submitPrompt(controller, "primary"); submitPrompt(controller, "retrieval"); submitPrompt(controller, "transfer"); update(controller, { capabilityBoundary: occludedFoldExplanationAnswers.capabilityBoundary }); dispatch(controller, occludedFoldActions.capabilityBoundary); update(controller, { relationBoundary: occludedFoldExplanationAnswers.relationBoundary }); dispatch(controller, occludedFoldActions.relationBoundary); }
function permutations(values) { if (!values.length) return [[]]; return values.flatMap((value, index) => permutations(values.filter((_, i) => i !== index)).map((tail) => [value, ...tail])); }

test("TD009 exact route mounts blank OF-00 and exactly two structural SC-10 roles", () => {
  const { controller } = subject(); assert.equal(controller.getState().shellVersion, OCCLUDED_FOLD_SHELL_VERSION); assert.equal(controller.getState().activeGroup, "of00_orientation"); assert.equal(resolveOccludedFoldWorldScene(controller.getState()).role, "SC-10-OCCLUDED-FOLD-PANORAMA"); dispatch(controller, occludedFoldActions.inspect); dispatch(controller, occludedFoldActions.difference); assert.equal(resolveOccludedFoldWorldScene(controller.getState()).role, "SC-10-OCCLUDED-FOLD-EXPOSED-EDGE-DETAIL");
});
test("TD009 all 720 observation orders converge and revisits are idempotent", () => {
  const orders = permutations(observations); assert.equal(orders.length, 720); for (const order of orders) { const { controller } = subject(); enterLearning(controller, order); assert.equal(controller.getState().activeGroup, "of20_python_primary"); assert.deepEqual(new Set(controller.getState().recordedObservationIds), new Set(occludedFoldObservationIds)); }
  const { controller } = subject(); dispatch(controller, occludedFoldActions.inspect); dispatch(controller, occludedFoldActions.continuities); assert.equal(dispatch(controller, occludedFoldActions.continuities).status, "observation_recorded_idempotent");
});
test("TD009 PY-017 and prompt responsibilities are independent and private-free", () => {
  for (const form of ["primary", "transfer"]) { const result = executeOccludedFoldWorkspace(form, pythonSource(form)); assert.equal(result.passed, true, JSON.stringify(result.failed)); assert.equal(Object.values(result.correctness).filter(Boolean).length, 8); assert.equal(result.transientAudit.cleared, true); }
  assert.equal(executeOccludedFoldWorkspace("primary", `${pythonSource("primary")}\nprint(edge_ledger)`).passed, false);
  for (const form of ["primary", "retrieval", "transfer"]) { const answers = Object.fromEntries(rp009.ai901_contract.forms[form].map((item) => [item.id, { prompt_owner: item.prompt_owner, deciding_signal: item.deciding_signal }])); assert.equal(evaluateOccludedFoldPromptBoundary(form, answers).passed, true); }
  assert.match(OCCLUDED_FOLD_TRUTHFUL_WORKSPACE_LABEL, /does not execute arbitrary Python/);
});
test("TD009 all eight OF-20 course-work groups retain Pilot as active owner", () => {
  const { controller } = subject();
  enterLearning(controller);
  const assertPilotOwner = (group) => {
    const state = controller.getState();
    assert.equal(state.activeGroup, group);
    assert.equal(state.owner, "PILOT // COURSE WORK");
    assert.match(state.contentAttribution, /^(?:BUILDER WORK|TEACHER)/);
  };
  assertPilotOwner("of20_python_primary");
  update(controller, { learnerSource: pythonSource("primary") }); dispatch(controller, occludedFoldActions.pythonPrimary);
  assertPilotOwner("of20_python_trace");
  update(controller, occludedFoldPythonTraceAnswers); dispatch(controller, occludedFoldActions.pythonTrace);
  assertPilotOwner("of20_python_transfer");
  update(controller, { learnerSource: pythonSource("transfer") }); dispatch(controller, occludedFoldActions.pythonTransfer);
  assertPilotOwner("of20_prompt_primary"); submitPrompt(controller, "primary");
  assertPilotOwner("of20_prompt_retrieval"); submitPrompt(controller, "retrieval");
  assertPilotOwner("of20_prompt_transfer"); submitPrompt(controller, "transfer");
  assertPilotOwner("of20_system_user_explanation");
  update(controller, { capabilityBoundary: occludedFoldExplanationAnswers.capabilityBoundary }); dispatch(controller, occludedFoldActions.capabilityBoundary);
  assertPilotOwner("of20_truth_authority_explanation");
});
test("TD009 pre-save review renders three exact ordered record scopes without merging", () => {
  const { controller } = subject(); advance(controller);
  const reviewed = dispatch(controller, occludedFoldActions.review);
  assert.deepEqual(reviewed.state.reviewRows.slice(0, 3).map(({ id, scope, owner, state }) => ({ id, scope, owner, state })), [
    { id: "retained_rp007_scope", scope: "RP-007", owner: "Retained RP-007 summary", state: "Read-only // separately attributable" },
    { id: "retained_rp008_scope", scope: "RP-008", owner: "Retained RP-008 summary", state: "Read-only // separately attributable" },
    { id: "candidate_rp009_scope", scope: "RP-009", owner: "Candidate RP-009 edge ledger", state: "Read-only // separately attributable" },
  ]);
  assert.equal(reviewed.state.reviewRows.length, 17);
  assert.equal(new Set(reviewed.state.reviewRows.slice(0, 3).map((row) => row.scope)).size, 3);
  assert.equal(reviewed.state.reviewRows.slice(3).every((row) => row.scope === "RP-009"), true);
});
test("TD009 exact twelve-key save commits atomically, restores without replay, and hard-stops", () => {
  const { controller } = subject(); advance(controller); assert.equal(controller.getState().activeGroup, "of20_review"); dispatch(controller, occludedFoldActions.review); const saved = dispatch(controller, occludedFoldActions.save); assert.equal(saved.status, "save_committed_verified_restore"); assert.deepEqual(Object.keys(saved.record), ["version", "packetId", "mappingId", "checkpoint", "continuation", "cityStateDelta", "externalStateDelta", "successor", "retainedRp007Summary", "retainedRp008Summary", "edgeLedger", "evidence"]); assert.equal(saved.record.evidence.length, 8); assert.equal(saved.record.version, OCCLUDED_FOLD_RECORD_VERSION); assert.equal(sanitizeOccludedFoldSave(saved.record)?.checkpoint, "occluded_fold_complete"); assert.equal(saved.state.owner, "SYSTEM // EXPEDITION LEDGER"); assert.equal(saved.state.focusIntent.target, "of30-restore-heading"); const look = dispatch(controller, occludedFoldActions.notation); assert.equal(look.routeOpened, false); assert.equal(controller.getState().activeGroup, "of30_restore"); assert.equal(controller.getState().successor, null);
});
test("TD009 verified rollback names prior RP-009 bytes or verified absence exactly", () => {
  const { controller } = subject("write-failure");
  advance(controller);
  dispatch(controller, occludedFoldActions.review);
  const result = dispatch(controller, occludedFoldActions.save);
  assert.equal(result.status, "save_failed_rollback_verified");
  assert.equal(result.rollbackVerified, true);
  assert.equal(result.predecessorBytesPreserved, true);
  assert.equal(result.state.activeGroup, "of20_save_recovery");
  assert.match(result.state.statusMessage, /^Prior RP-009 bytes or verified absence were restored exactly;/);
  assert.doesNotMatch(result.state.statusMessage, /prior RP-008 bytes/i);
});
test("TD009 Tour and invalid route fail closed before SC-10", () => {
  const tour = subject("normal", { mode: "demo_tour" }).controller; assert.notEqual(tour.getState().shellVersion, OCCLUDED_FOLD_SHELL_VERSION); const invalid = createOccludedFoldNormalController({}); assert.equal(invalid.getState().boardState, "SC-09"); assert.equal(resolveOccludedFoldWorldScene(invalid.getState()).role, "SC-09-PANORAMA-MASTER");
});
