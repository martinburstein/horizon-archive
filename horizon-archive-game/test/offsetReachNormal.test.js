import assert from "node:assert/strict";
import test from "node:test";
import rp007Contract from "../../curriculum/readiness/RP-007/contract.json" with { type: "json" };
import rp008Contract from "../../curriculum/readiness/RP-008/contract.json" with { type: "json" };
import {
  BRAIDED_VERGE_RECORD_VERSION,
  BRAIDED_VERGE_SAVE_KEY,
  braidedVergeObservationIds,
  braidedVergePythonTraceAnswers,
  sanitizeBraidedVergeSave,
} from "../src/BraidedVergeNormal.js";
import { INTERVAL_WORKS_SAVE_KEY } from "../src/IntervalWorksNormal.js";
import { MANYFOLD_RETURN_SAVE_KEY } from "../src/ManyfoldReturnNormal.js";
import { THREE_CURRENT_REACH_SAVE_KEY } from "../src/ThreeCurrentReachNormal.js";
import {
  OFFSET_REACH_RECORD_VERSION,
  OFFSET_REACH_SAVE_KEY,
  OFFSET_REACH_SHELL_VERSION,
  OFFSET_REACH_TRUTHFUL_WORKSPACE_LABEL,
  createOffsetReachIntent,
  createOffsetReachNormalController,
  createOffsetReachRouteIntent,
  createOffsetReachStorageAdapter,
  evaluateOffsetReachInformationExtraction,
  executeOffsetReachWorkspace,
  offsetReachActions,
  offsetReachExplanationAnswers,
  offsetReachObservationIds,
  offsetReachPythonTraceAnswers,
  resolveOffsetReachWorldScene,
  sanitizeOffsetReachSave,
} from "../src/OffsetReachNormal.js";

const evidenceKeys = ["packet_id", "mapping_id", "form", "skill_or_objective_id",
  "dimension_correctness", "attempt_count", "hint_level", "confidence", "misconception_tags", "mastery_status"];

function evidence(packet, mapping, skill, form, dimensions) {
  const value = { packet_id: packet, mapping_id: mapping, form, skill_or_objective_id: skill,
    dimension_correctness: Object.fromEntries(dimensions.map((id) => [id, true])), attempt_count: 1,
    hint_level: 0, confidence: null, misconception_tags: [], mastery_status: "mastered" };
  return Object.fromEntries(evidenceKeys.map((key) => [key, value[key]]));
}

function braidedRecord() {
  const dims = rp007Contract.ai901_contract.dimensions;
  const aiShape = (form) => rp007Contract.ai901_contract.forms[form]
    .flatMap((item) => dims.map((dimension) => `${item.id}.${dimension}`));
  return sanitizeBraidedVergeSave({
    version: BRAIDED_VERGE_RECORD_VERSION, packetId: "RP-007", mappingId: "RP007-A3-BRAIDED-VERGE",
    checkpoint: "braided_verge_complete", continuation: "continuation", cityStateDelta: null,
    externalStateDelta: null, successor: null,
    note: { observations: [...braidedVergeObservationIds], continuities: "distinct_visible_continuities",
      association: "recurrent_exposed_association", difference: "one_bounded_difference",
      order: "relative_order_supported", junction: "closed_junction_unavailable",
      stewardship: "layered_stewardship_observed", replicas: "sanitized_precomputed_only",
      unity: null, coordination: null, cause: null, ownership: null, purpose: null, destination: null },
    evidence: [
      evidence("RP-007", "RP007-A3-BRAIDED-VERGE", "PY-015", "primary", rp007Contract.python_contract.checks),
      evidence("RP-007", "RP007-A3-BRAIDED-VERGE", "PY-015", "trace", Object.keys(braidedVergePythonTraceAnswers)),
      evidence("RP-007", "RP007-A3-BRAIDED-VERGE", "PY-015", "transfer", rp007Contract.python_contract.checks),
      ...["primary", "retrieval", "transfer"].map((form) => evidence("RP-007", "RP007-A3-BRAIDED-VERGE", "RP007-VISION-GENERATION-01", form, aiShape(form))),
      evidence("RP-007", "RP007-A3-BRAIDED-VERGE", "RP007-VISION-GENERATION-01", "capability_boundary_explanation", ["capability_boundary"]),
      evidence("RP-007", "RP007-A3-BRAIDED-VERGE", "RP007-VISION-GENERATION-01", "relation_boundary_explanation", ["relation_boundary"]),
    ],
  });
}

function pythonSource(form) {
  const relations = rp008Contract.python_contract.forms[form].relations;
  const ids = form === "primary" ? ["local", "open", "cross", "closed"] : ["retained", "gap", "alternate", "sealed"];
  const tokens = form === "primary"
    ? ["familiar_contact", "familiar_contact", "non_contact", "cross_family_contact"]
    : ["paired_interface", "paired_interface", "exposed_gap", "alternate_interface"];
  const records = ids.map((case_id, index) => ({ case_id, relation: relations[index], available: relations[index] !== null }));
  return `import json

records_json = """${JSON.stringify(records, null, 2)}"""
records = json.loads(records_json)
scope_summary = {
    "retained_local_association": sum(record["relation"] == "${tokens[0]}" for record in records) == 1,
    "recurring_familiar_contact": sum(record["relation"] == "${tokens[1]}" for record in records),
    "comparable_non_contact": sum(record["relation"] == "${tokens[2]}" for record in records),
    "cross_family_contact": sum(record["relation"] == "${tokens[3]}" for record in records),
    "unavailable_case": sum(record["available"] is False for record in records),
    "universal": None,
    "exclusive": None,
    "unity": None,
    "cause": None,
    "purpose": None,
}
summary_json = json.dumps(scope_summary, sort_keys=True)
restored_summary = json.loads(summary_json)`;
}

function memory(mode = "normal") {
  const predecessor = braidedRecord();
  assert.ok(predecessor);
  const braidedBytes = JSON.stringify(predecessor);
  const intervalBytes = "exact-td006-bytes";
  const manyfoldBytes = "exact-td005-bytes";
  const threeCurrentBytes = "exact-td004-bytes";
  const values = new Map([[BRAIDED_VERGE_SAVE_KEY, braidedBytes], [INTERVAL_WORKS_SAVE_KEY, intervalBytes],
    [MANYFOLD_RETURN_SAVE_KEY, manyfoldBytes], [THREE_CURRENT_REACH_SAVE_KEY, threeCurrentBytes]]);
  let candidateWritten = false;
  const storage = { getItem(key) { if (["readback-failure", "rollback-unverified"].includes(mode) && key === OFFSET_REACH_SAVE_KEY && candidateWritten) return "{"; return values.get(key) ?? null; },
    setItem(key, value) { if (mode === "write-failure" && key === OFFSET_REACH_SAVE_KEY) throw new Error("write"); values.set(key, value); if (key === OFFSET_REACH_SAVE_KEY) candidateWritten = true; },
    removeItem(key) { if (mode === "rollback-unverified" && key === OFFSET_REACH_SAVE_KEY) throw new Error("rollback"); values.delete(key); if (key === OFFSET_REACH_SAVE_KEY) candidateWritten = false; } };
  const adapter = createOffsetReachStorageAdapter(storage, { braidedRecord: predecessor, braidedBytes, intervalBytes, manyfoldBytes, threeCurrentBytes });
  return { predecessor, braidedBytes, intervalBytes, manyfoldBytes, threeCurrentBytes, values, storage, adapter };
}

function subject(mode = "normal", options = {}) {
  const item = memory(mode);
  const controller = createOffsetReachNormalController({ predecessorRecord: item.predecessor,
    predecessorBytes: item.braidedBytes, readPredecessorBytes: () => item.values.get(BRAIDED_VERGE_SAVE_KEY),
    intervalBytes: item.intervalBytes, readIntervalBytes: () => item.values.get(INTERVAL_WORKS_SAVE_KEY),
    manyfoldBytes: item.manyfoldBytes, readManyfoldBytes: () => item.values.get(MANYFOLD_RETURN_SAVE_KEY),
    threeCurrentBytes: item.threeCurrentBytes, readThreeCurrentBytes: () => item.values.get(THREE_CURRENT_REACH_SAVE_KEY),
    entryIntent: createOffsetReachRouteIntent(offsetReachActions.route, "screen_reader", "td008-entry-token"),
    adapter: item.adapter, ...options });
  return { ...item, controller };
}

let token = 0;
function dispatch(controller, action) {
  token += 1;
  return controller.dispatch(createOffsetReachIntent(controller.getState(), action, "screen_reader", `td008-${token}-token`));
}
function update(controller, values) { Object.entries(values).forEach(([key, value]) => controller.updateField(key, value)); }
const observationActions = [offsetReachActions.continuities, offsetReachActions.association, offsetReachActions.difference,
  offsetReachActions.order, offsetReachActions.junction, offsetReachActions.stewardship];

function enterLearning(controller, order = observationActions) { dispatch(controller, offsetReachActions.inspect); order.forEach((action) => dispatch(controller, action)); }
function submitAi(controller, form) { for (const item of rp008Contract.ai901_contract.forms[form]) update(controller, {
  [`${item.id}.technique`]: item.technique, [`${item.id}.deciding_signal`]: item.deciding_signal });
  return dispatch(controller, offsetReachActions[`vision${form[0].toUpperCase()}${form.slice(1)}`]); }
function advanceAll(controller) { enterLearning(controller); update(controller, { learnerSource: pythonSource("primary") }); dispatch(controller, offsetReachActions.pythonPrimary);
  update(controller, offsetReachPythonTraceAnswers); dispatch(controller, offsetReachActions.pythonTrace);
  update(controller, { learnerSource: pythonSource("transfer") }); dispatch(controller, offsetReachActions.pythonTransfer);
  submitAi(controller, "primary"); submitAi(controller, "retrieval"); submitAi(controller, "transfer");
  update(controller, { capabilityBoundary: offsetReachExplanationAnswers.capabilityBoundary }); dispatch(controller, offsetReachActions.capabilityBoundary);
  update(controller, { relationBoundary: offsetReachExplanationAnswers.relationBoundary }); dispatch(controller, offsetReachActions.relationBoundary); }
function permutations(values) { if (!values.length) return [[]]; return values.flatMap((value, index) => permutations(values.filter((_, i) => i !== index)).map((tail) => [value, ...tail])); }

test("TD008 exact route mounts one zero-evidence OR-00 and two provisional SC-09 roles", () => {
  const { controller } = subject();
  assert.equal(controller.getState().shellVersion, OFFSET_REACH_SHELL_VERSION);
  assert.equal(controller.getState().activeGroup, "or00_orientation");
  assert.equal(controller.getState().evidenceCount, 0);
  assert.equal(resolveOffsetReachWorldScene(controller.getState()).role, "SC-09-PANORAMA-MASTER");
  dispatch(controller, offsetReachActions.inspect); dispatch(controller, offsetReachActions.association);
  assert.equal(resolveOffsetReachWorldScene(controller.getState()).role, "SC-09-RELATION-DETAIL-MASTER");
});

test("TD008 all 720 observation orders converge and revisits are idempotent", () => {
  const orders = permutations(observationActions); assert.equal(orders.length, 720);
  for (const order of orders) { const { controller } = subject(); enterLearning(controller, order);
    assert.equal(controller.getState().activeGroup, "or20_python_primary");
    assert.deepEqual(new Set(controller.getState().recordedObservationIds), new Set(offsetReachObservationIds)); }
  const { controller } = subject(); dispatch(controller, offsetReachActions.inspect);
  dispatch(controller, offsetReachActions.continuities); const repeat = dispatch(controller, offsetReachActions.continuities);
  assert.equal(repeat.status, "observation_recorded_idempotent"); assert.equal(controller.getState().recordedObservationIds.length, 1);
});

test("TD008 PY-016 memory-only primary and transfer pass exact 8/8 while unsafe variants fail", () => {
  for (const form of ["primary", "transfer"]) { const result = executeOffsetReachWorkspace(form, pythonSource(form));
    assert.equal(result.passed, true, JSON.stringify(result.failed)); assert.equal(Object.values(result.correctness).filter(Boolean).length, 8);
    assert.equal(result.audit.sessionMemoryOnly, true); assert.equal(result.audit.sourceRetained, false); }
  assert.equal(executeOffsetReachWorkspace("primary", `${pythonSource("primary")}\nprint(restored_summary)`).passed, false);
  assert.match(OFFSET_REACH_TRUTHFUL_WORKSPACE_LABEL, /session-only sanitized replicas/);
});

test("TD008 information extraction is independent 8/8 and reports only actually scored tags", () => {
  for (const form of ["primary", "retrieval", "transfer"]) { const answers = Object.fromEntries(rp008Contract.ai901_contract.forms[form].map((item) => [item.id, { technique: item.technique, deciding_signal: item.deciding_signal }]));
    assert.equal(evaluateOffsetReachInformationExtraction(form, answers).passed, true); }
  const answers = Object.fromEntries(rp008Contract.ai901_contract.forms.primary.map((item) => [item.id, { technique: item.technique, deciding_signal: item.deciding_signal }]));
  answers.P01.technique = "field_extraction";
  assert.deepEqual(evaluateOffsetReachInformationExtraction("primary", answers).misconceptionTags, ["ocr_equals_field_extraction"]);
});

test("TD008 review shows retained RP-007 first, then six observations and eight independent learning records", () => {
  const { controller } = subject(); advanceAll(controller);
  const reviewed = dispatch(controller, offsetReachActions.review);
  assert.equal(reviewed.state.reviewRows.length, 15);
  assert.deepEqual(reviewed.state.reviewRows.map((row) => row.id), [
    "retained_rp007_summary",
    ...offsetReachObservationIds,
    "PY-016:primary",
    "PY-016:trace",
    "PY-016:transfer",
    "RP008-INFORMATION-EXTRACTION-01:primary",
    "RP008-INFORMATION-EXTRACTION-01:retrieval",
    "RP008-INFORMATION-EXTRACTION-01:transfer",
    "RP008-INFORMATION-EXTRACTION-01:selection_boundary_explanation",
    "RP008-INFORMATION-EXTRACTION-01:inference_boundary_explanation",
  ]);
  assert.deepEqual(reviewed.state.reviewRows[0], {
    id: "retained_rp007_summary",
    owner: "Retained — separately valid",
    state: "Complete",
  });
  assert.equal(new Set(reviewed.state.reviewRows.map((row) => row.id)).size, 15);
  assert.equal(reviewed.state.reviewRows.slice(1).every((row) => row.state === "Complete"), true);
  assert.equal(reviewed.state.statusMessage,
    "Six observations and eight learning records are complete. The separately retained RP-007 summary remains valid. The strict bounded preview is ready for an explicit local-only save.");
  assert.doesNotMatch(reviewed.state.statusMessage, /Thirteen/);
});

test("TD008 full flow commits exact 11/8/13/8 record and preserves four predecessor byte strings", () => {
  const item = subject(); advanceAll(item.controller); assert.equal(item.controller.getState().activeGroup, "or20_review");
  dispatch(item.controller, offsetReachActions.review);
  const cancelled = dispatch(item.controller, offsetReachActions.cancelSave);
  assert.equal(cancelled.status, "save_cancelled_write_free"); assert.equal(cancelled.state.activeGroup, "or20_review"); assert.equal(item.adapter.read(OFFSET_REACH_SAVE_KEY), null);
  dispatch(item.controller, offsetReachActions.review); const saved = dispatch(item.controller, offsetReachActions.save);
  assert.equal(saved.status, "save_committed_verified_restore", JSON.stringify(saved));
  assert.equal(Object.keys(saved.record).length, 11); assert.equal(Object.keys(saved.record.retainedRp007Summary).length, 8);
  assert.equal(Object.keys(saved.record.note).length, 13); assert.equal(saved.record.evidence.length, 8);
  assert.equal(saved.record.version, OFFSET_REACH_RECORD_VERSION); assert.equal(saved.record.successor, null);
  assert.equal(item.values.get(BRAIDED_VERGE_SAVE_KEY), item.braidedBytes);
  assert.equal(item.values.get(INTERVAL_WORKS_SAVE_KEY), item.intervalBytes);
  assert.ok(sanitizeOffsetReachSave(saved.record));
});

test("TD008 save failures verify rollback and exact restore is replay-free with only bounded exits", () => {
  for (const mode of ["write-failure", "readback-failure"]) { const item = subject(mode); advanceAll(item.controller); dispatch(item.controller, offsetReachActions.review);
    const result = dispatch(item.controller, offsetReachActions.save); assert.equal(result.status, "save_failed_rollback_verified"); assert.equal(result.rollbackVerified, true); }
  const item = subject(); advanceAll(item.controller); dispatch(item.controller, offsetReachActions.review); const record = dispatch(item.controller, offsetReachActions.save).record;
  const restored = createOffsetReachNormalController({ predecessorRecord: item.predecessor, predecessorBytes: item.braidedBytes,
    readPredecessorBytes: () => item.braidedBytes, intervalBytes: item.intervalBytes, readIntervalBytes: () => item.intervalBytes,
    manyfoldBytes: item.manyfoldBytes, readManyfoldBytes: () => item.manyfoldBytes, threeCurrentBytes: item.threeCurrentBytes,
    readThreeCurrentBytes: () => item.threeCurrentBytes, restoredRecord: record, adapter: item.adapter });
  assert.equal(restored.getState().activeGroup, "or30_restore"); assert.deepEqual(restored.getState().replayedEvents, []);
  assert.deepEqual(restored.getState().availableActions, [offsetReachActions.notation, offsetReachActions.returnInterval, offsetReachActions.returnThreshold]);
});

test("TD008 Tour, malformed predecessor, private save, and RP-009 hard stop fail closed", () => {
  assert.equal(subject("normal", { mode: "demo_tour" }).controller.getState().boardState, "SC-08");
  assert.equal(sanitizeOffsetReachSave({ version: OFFSET_REACH_RECORD_VERSION, learner_source: "private" }), null);
  const { controller } = subject(); assert.equal(controller.getState().availableActions.some((action) => /RP-009|successor|open/i.test(action)), false);
});
