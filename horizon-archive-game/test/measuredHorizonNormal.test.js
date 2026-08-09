import assert from "node:assert/strict";
import test from "node:test";
import rp010 from "../../curriculum/readiness/RP-010/contract.json" with { type: "json" };
import rp011 from "../../curriculum/readiness/RP-011/contract.json" with { type: "json" };
import {
  COUNTERFIELD_CONTROLLER_VERSION,
  COUNTERFIELD_RECORD_VERSION,
  COUNTERFIELD_SHELL_VERSION,
  counterfieldActions,
  counterfieldObservationIds,
  counterfieldPythonTraceAnswers,
  sanitizeCounterfieldSave,
} from "../src/CounterfieldNormal.js";
import {
  UNBORROWED_REACH_CONTROLLER_VERSION,
  UNBORROWED_REACH_RECORD_VERSION,
  UNBORROWED_REACH_ROUTE_ACTION,
  UNBORROWED_REACH_SAVE_KEY,
  UNBORROWED_REACH_SHELL_VERSION,
  createUnborrowedReachIntent,
  createUnborrowedReachNormalController,
  createUnborrowedReachRouteIntent,
  createUnborrowedReachRouteState,
  sanitizeUnborrowedReachSave,
  unborrowedReachActions,
  unborrowedReachExplanationAnswers,
  unborrowedReachLimitIds,
  unborrowedReachPythonTraceAnswers,
  unborrowedReachReconciliationMethodIds,
  unborrowedReachReferenceSources,
} from "../src/UnborrowedReachNormal.js";
import { objectiveLedgerTransfer } from "../src/objectiveLedgerExercise.js";
import {
  createCalibrationMarginNormalEntryIntent,
} from "../src/CalibrationMarginNormalEntry.js";
import {
  MEASURED_HORIZON_CHECKPOINT,
  MEASURED_HORIZON_NOT_YET,
  MEASURED_HORIZON_OBJECTIVE_VERSION,
  MEASURED_HORIZON_READY,
  MEASURED_HORIZON_RECORD_VERSION,
  MEASURED_HORIZON_ROUTE_ACTION,
  MEASURED_HORIZON_ROUTE_GROUP,
  MEASURED_HORIZON_SAVE_KEY,
  MEASURED_HORIZON_SHELL_VERSION,
  createMeasuredHorizonNormalController,
  createMeasuredHorizonRouteIntent,
  createMeasuredHorizonRouteState,
  createMeasuredHorizonStorageAdapter,
  evaluateMeasuredHorizonObjective,
  evaluateMeasuredHorizonPython,
  measuredHorizonActions,
  measuredHorizonGateIds,
  measuredHorizonModalities,
  measuredHorizonObjectiveIds,
  measuredHorizonPublicContract,
  sanitizeMeasuredHorizonEligibility,
  sanitizeMeasuredHorizonSave,
} from "../src/MeasuredHorizonNormal.js";

function releasedState() {
  return {
    shellVersion: UNBORROWED_REACH_SHELL_VERSION,
    controllerVersion: UNBORROWED_REACH_CONTROLLER_VERSION,
    packetId: "RP-011",
    phase: "UR-30 REOPEN + RECONCILE + VERIFY + RETURN",
    boardState: "SC-12",
    activeGroup: "ur30_restore",
    owner: "SYSTEM // RECORD CUSTODY",
    headingId: "ur30-restored-heading",
    heading: "UNBORROWED REACH RESTORED",
    statusMessageId: "td011:ur30_restore",
    statusMessage: "Independent record and separate reconciliation restored without replay.",
    availableActions: [unborrowedReachActions.look, unborrowedReachActions.returnCounterfield, unborrowedReachActions.returnThreshold],
    cityStateDelta: null,
    worldStateDelta: null,
    externalStateDelta: null,
    successor: null,
    authorityGranted: false,
    externalActionEnabled: false,
    worldStateChanged: false,
    routeOpened: false,
    replayedEvents: [],
    focusIntent: { group: "ur30_restore", target: "ur30-restored-heading" },
  };
}

function eligibility() {
  return {
    objectiveVersion: MEASURED_HORIZON_OBJECTIVE_VERSION,
    pythonHomesFinalized: true,
    py020FreshReinforcementAccepted: true,
    evidenceReferenceIds: ["PY-HOMES-FINAL", "PY-020-FRESH", "CUM-01", "L-06-03"],
    objectives: Object.fromEntries(measuredHorizonObjectiveIds.map((id) => [id, {
      primary: true,
      retrieval: true,
      remediationClosed: true,
      freshTransfer: true,
    }])),
  };
}

const evidenceKeys = ["packet_id", "mapping_id", "form", "skill_or_objective_id", "dimension_correctness", "attempt_count", "hint_level", "confidence", "misconception_tags", "mastery_status"];
function evidence(skill, form, dimensions) {
  const item = { packet_id: "RP-010", mapping_id: "RP010-REQUEST-CLIENT-BOUNDARY-01", form, skill_or_objective_id: skill, dimension_correctness: Object.fromEntries(dimensions.map((id) => [id, true])), attempt_count: 1, hint_level: 0, confidence: null, misconception_tags: [], mastery_status: "mastered" };
  return Object.fromEntries(evidenceKeys.map((key) => [key, item[key]]));
}
function counterfieldRecord() {
  const ai = (form) => rp010.ai901_contract.forms[form].flatMap((item) => rp010.ai901_contract.dimensions.map((dimension) => `${item.id}.${dimension}`));
  return sanitizeCounterfieldSave({
    version: COUNTERFIELD_RECORD_VERSION, packetId: "RP-010", mappingId: "RP010-REQUEST-CLIENT-BOUNDARY-01", checkpoint: "counterfield_complete", continuation: "continuation", cityStateDelta: null, externalStateDelta: null, successor: null,
    retainedRp007Summary: { checkpoint: "braided_verge_complete", continuities: "distinct_visible_continuities", association: "recurrent_exposed_association", difference: "one_bounded_difference", junction: "closed_junction_unavailable", unity: null, cause: null, purpose: null },
    retainedRp008Summary: { checkpoint: "offset_reach_complete", retained_local_association: true, recurring_familiar_contact: 1, comparable_non_contact: 1, cross_family_contact: 1, unavailable_case: 1, universal: null, exclusive: null, unity: null, cause: null, purpose: null },
    retainedRp009Ledger: { observations: ["three_near_margins", "bounded_signature_correspondences", "unmatched_exposed_record", "ambiguous_candidate_record", "unavailable_outer_margin", "layered_edge_stewardship"], reconciliation: { mode: "bounded", correspondence: ["near_lamellar"], unmatched: ["far_unmatched"], ambiguous: { far_ambiguous: ["near_lamellar", "near_filament"] }, unavailable: ["outer_margin"], identity: null, topology: null, continuity: null, transformation: null, cause: null, purpose: null } },
    scopeRegister: { observations: [...counterfieldObservationIds], exchange: { request: { method: "POST", route_label: "project_responses", content_type: "application/json", record_ids: ["near_relation", "ordered_gap", "far_correspondence"], scope: "sanitized_exposed_record_replicas" }, response: { status_code: 200, content_type: "application/json", supported: ["near_relation"], counterevidence: ["far_correspondence"], ambiguous: ["ordered_gap"], unavailable: ["outer_margin"] }, unsupported: { identity: null, topology: null, continuity: null, transformation: null, unity: null, synchronization: null, chronology: null, cause: null, purpose: null } } },
    evidence: [evidence("PY-018", "primary", rp010.python_contract.checks), evidence("PY-018", "trace", Object.keys(counterfieldPythonTraceAnswers)), evidence("PY-018", "transfer", rp010.python_contract.checks), ...["primary", "retrieval", "transfer"].map((form) => evidence("RP010-FOUNDRY-CLIENT-FLOW-01", form, ai(form))), evidence("RP010-FOUNDRY-CLIENT-FLOW-01", "client_flow_boundary_explanation", ["client_flow_boundary"]), evidence("RP010-FOUNDRY-CLIENT-FLOW-01", "truth_authority_boundary_explanation", ["truth_authority_boundary"])],
  });
}
function exactReleasedCounterfieldState() {
  return { shellVersion: COUNTERFIELD_SHELL_VERSION, controllerVersion: COUNTERFIELD_CONTROLLER_VERSION, packetId: "RP-010", phase: "CF-30 VERIFY + RETURN", boardState: "SC-11", activeGroup: "cf30_restore", owner: "SYSTEM // EXPEDITION LEDGER", availableActions: [counterfieldActions.look, counterfieldActions.returnOccludedFold, counterfieldActions.returnThreshold], cityStateDelta: null, externalStateDelta: null, successor: null };
}
let unborrowedToken = 0;
function dispatchUnborrowed(controller, action) {
  unborrowedToken += 1;
  return controller.dispatch(createUnborrowedReachIntent(controller.getState(), action, "screen_reader", `td011-e2e-token-${String(unborrowedToken).padStart(6, "0")}`));
}
function updateFields(controller, values) {
  for (const [key, value] of Object.entries(values)) controller.updateField(key, value);
}
function agentAnswers(form) {
  return Object.fromEntries(rp011.ai901_contract.forms[form].map((item) => [item.id, Object.fromEntries(rp011.ai901_contract.dimensions.map((dimension) => [dimension, item[dimension]]))]));
}
function exactReleasedUnborrowedRecordAndState() {
  const predecessor = counterfieldRecord(); assert.ok(predecessor);
  const released = exactReleasedCounterfieldState(); const route = createUnborrowedReachRouteState(released);
  let saved = null;
  const controller = createUnborrowedReachNormalController({ entrySourceState: route, releasedPredecessorState: released, predecessorBytes: JSON.stringify(predecessor), entryIntent: createUnborrowedReachRouteIntent(UNBORROWED_REACH_ROUTE_ACTION, "screen_reader", "td011-e2e-route-token-0001"), adapter: { predecessorsStable: () => true, commit(candidate) { saved = sanitizeUnborrowedReachSave(candidate); return saved ? { status: "committed", value: saved, rollbackVerified: true, predecessorBytesPreserved: true } : { status: "failed", rollbackVerified: true, predecessorBytesPreserved: true }; }, read: () => saved } });
  dispatchUnborrowed(controller, unborrowedReachActions.isolate);
  for (const action of [unborrowedReachActions.observePersistentTransition, unborrowedReachActions.observeDifferingRelation, unborrowedReachActions.observeMaintainedBypass, unborrowedReachActions.observeMultipleCandidate, unborrowedReachActions.observeUnavailableMargin, unborrowedReachActions.observeLayeredStewardship]) dispatchUnborrowed(controller, action);
  updateFields(controller, { learnerSource: unborrowedReachReferenceSources.primary }); dispatchUnborrowed(controller, unborrowedReachActions.pythonPrimary);
  updateFields(controller, unborrowedReachPythonTraceAnswers); dispatchUnborrowed(controller, unborrowedReachActions.pythonTrace);
  updateFields(controller, { learnerSource: unborrowedReachReferenceSources.transfer }); dispatchUnborrowed(controller, unborrowedReachActions.pythonTransfer);
  for (const form of ["primary", "retrieval", "transfer"]) { for (const [id, values] of Object.entries(agentAnswers(form))) for (const [dimension, value] of Object.entries(values)) controller.updateField(`${id}.${dimension}`, value); dispatchUnborrowed(controller, unborrowedReachActions[`agent${form[0].toUpperCase()}${form.slice(1)}`]); }
  updateFields(controller, { surfaceBoundary: unborrowedReachExplanationAnswers.surfaceBoundary }); dispatchUnborrowed(controller, unborrowedReachActions.surfaceExplanation);
  updateFields(controller, { truthPermissionBoundary: unborrowedReachExplanationAnswers.truthPermissionBoundary }); dispatchUnborrowed(controller, unborrowedReachActions.truthExplanation);
  dispatchUnborrowed(controller, unborrowedReachActions.reviewFresh); dispatchUnborrowed(controller, unborrowedReachActions.finalizeFresh);
  for (const action of [unborrowedReachActions.reopenRp007, unborrowedReachActions.reopenRp008, unborrowedReachActions.reopenRp009, unborrowedReachActions.reopenRp010]) dispatchUnborrowed(controller, action);
  updateFields(controller, { methods: [...unborrowedReachReconciliationMethodIds], limits: Object.fromEntries(unborrowedReachLimitIds.map((id) => [id, null])) });
  dispatchUnborrowed(controller, unborrowedReachActions.checkReconciliation); dispatchUnborrowed(controller, unborrowedReachActions.reviewReconciliation);
  const final = dispatchUnborrowed(controller, unborrowedReachActions.saveReconciliation);
  assert.equal(final.status, "reconciliation_saved_verified_restore"); assert.equal(final.record.version, UNBORROWED_REACH_RECORD_VERSION);
  return { record: final.record, state: final.state };
}

let measuredToken = 0;
function measuredIntent(controller, action, token = null) {
  measuredToken += 1;
  const state = controller.getState();
  return createCalibrationMarginNormalEntryIntent(action, "screen_reader", token ?? `td012-e2e-action-${String(measuredToken).padStart(6, "0")}`, state.phase, state.activeGroup);
}
function dispatchMeasured(controller, action, token = null) {
  return controller.dispatch(measuredIntent(controller, action, token));
}
const passingPython = `def current_readiness(gate_rows):\n    all_passed = all(bool(row["passed"]) for row in gate_rows)\n    return {"gate_count": len(gate_rows), "all_passed": all_passed}`;
function makeMeasuredSubject(storageOverrides = {}) {
  const released = exactReleasedUnborrowedRecordAndState(); const predecessorBytes = JSON.stringify(released.record);
  const memory = new Map([[UNBORROWED_REACH_SAVE_KEY, predecessorBytes]]);
  const storage = { getItem: (key) => memory.get(key) ?? null, setItem: (key, value) => memory.set(key, value), removeItem: (key) => memory.delete(key), ...storageOverrides };
  const adapter = createMeasuredHorizonStorageAdapter(storage, { [UNBORROWED_REACH_SAVE_KEY]: predecessorBytes });
  const route = createMeasuredHorizonRouteState(released.state);
  const controller = createMeasuredHorizonNormalController({ releasedPredecessorState: released.state, entrySourceState: route, predecessorBytes, entryIntent: createCalibrationMarginNormalEntryIntent(MEASURED_HORIZON_ROUTE_ACTION, "screen_reader", `td012-e2e-route-${String(++measuredToken).padStart(6, "0")}`, null, MEASURED_HORIZON_ROUTE_GROUP), eligibility: eligibility(), adapter });
  assert.equal(controller.entryTokenConsumed(), true);
  return { controller, adapter, memory, released, predecessorBytes };
}
function advanceMeasuredToOutcome(subject, missedGateId = null) {
  const { controller } = subject;
  dispatchMeasured(controller, measuredHorizonActions.requestReview);
  const duplicateIntent = measuredIntent(controller, measuredHorizonActions.verifyCoverage, "td012-e2e-duplicate-token");
  assert.equal(controller.dispatch(duplicateIntent).status, "eligibility_verified_zero_fresh_credit");
  assert.equal(controller.dispatch(duplicateIntent).reason, "invalid_or_stale_intent");
  dispatchMeasured(controller, measuredHorizonActions.beginFresh);
  controller.updateField("learnerSource", missedGateId === measuredHorizonGateIds[0] ? "def current_readiness(gate_rows):\n    return {}" : passingPython);
  dispatchMeasured(controller, measuredHorizonActions.submitPython);
  for (const objectiveId of measuredHorizonObjectiveIds) {
    const answer = objectiveLedgerTransfer.find((row) => row.topic === objectiveId); assert.ok(answer);
    controller.updateField("decision", answer.decision);
    controller.updateField("reason", objectiveId === missedGateId ? "confidence_or_domain_score_proves_this_objective" : answer.reason);
    dispatchMeasured(controller, measuredHorizonActions.submitObjective);
  }
  assert.equal(controller.getState().activeGroup, missedGateId ? "mh25_remediation" : "mh30_local_decision");
  const decision = dispatchMeasured(controller, measuredHorizonActions.reviewDecision);
  assert.equal(decision.state.localReadinessState, missedGateId ? MEASURED_HORIZON_NOT_YET : MEASURED_HORIZON_READY);
  return decision;
}

function stable(value) {
  if (Array.isArray(value)) return `[${value.map(stable).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stable(value[key])}`).join(",")}}`;
  return JSON.stringify(value);
}
function hash(value) {
  let result = 0x811c9dc5;
  for (const byte of new TextEncoder().encode(value)) { result ^= byte; result = Math.imul(result, 0x01000193) >>> 0; }
  return `fnv1a32-${result.toString(16).padStart(8, "0")}`;
}
function record(gates = Object.fromEntries(measuredHorizonGateIds.map((id) => [id, true]))) {
  const canonical = {
    version: MEASURED_HORIZON_RECORD_VERSION,
    packetId: "RP-012",
    checkpoint: MEASURED_HORIZON_CHECKPOINT,
    objectiveVersion: MEASURED_HORIZON_OBJECTIVE_VERSION,
    objectiveIds: [...measuredHorizonObjectiveIds],
    evidenceReferenceIds: [...eligibility().evidenceReferenceIds],
    perGatePassBoolean: gates,
    remediationRouteIds: measuredHorizonGateIds.filter((id) => !gates[id]).map((id) => `REMEDIATE-${id}`),
    localReadinessState: Object.values(gates).every(Boolean) ? MEASURED_HORIZON_READY : MEASURED_HORIZON_NOT_YET,
    continuation: "continuation",
    cityStateDelta: null,
    worldStateDelta: null,
    externalStateDelta: null,
    authorityDelta: null,
    successor: null,
  };
  return { ...canonical, auditChecksum: hash(stable(canonical)) };
}

test("TD012 public identities, ordered gates, modalities, and zero-media hard stop are exact", () => {
  assert.equal(measuredHorizonGateIds.length, 16);
  assert.equal(measuredHorizonObjectiveIds.length, 15);
  assert.equal(measuredHorizonGateIds[0], "PY-R12-CUMULATIVE-TRANSFER-01");
  assert.deepEqual(measuredHorizonModalities, ["pointer", "touch", "keyboard_enter", "keyboard_space", "switch", "speech", "screen_reader"]);
  assert.equal(measuredHorizonPublicContract.shellVersion, MEASURED_HORIZON_SHELL_VERSION);
  assert.deepEqual(measuredHorizonPublicContract.selectedImageRoles, []);
  assert.equal(measuredHorizonPublicContract.mediaAdded, 0);
  assert.equal(measuredHorizonPublicContract.successor, null);
});

test("TD012 eligibility is complete, current, private-free, and independently attributable", () => {
  const safe = sanitizeMeasuredHorizonEligibility(eligibility());
  assert.ok(safe);
  assert.equal(safe.evidenceReferenceIds.length, 4);
  assert.equal(sanitizeMeasuredHorizonEligibility({ ...eligibility(), objectiveVersion: "stale" }), null);
  assert.equal(sanitizeMeasuredHorizonEligibility({ ...eligibility(), privateNotes: "PRIVATE" }), null);
  const missing = eligibility(); delete missing.objectives[measuredHorizonObjectiveIds[3]];
  assert.equal(sanitizeMeasuredHorizonEligibility(missing), null);
  const crossCredited = eligibility(); crossCredited.objectives[measuredHorizonObjectiveIds[1]] = crossCredited.objectives[measuredHorizonObjectiveIds[0]];
  crossCredited.objectives[measuredHorizonObjectiveIds[1]].retrieval = false;
  assert.equal(sanitizeMeasuredHorizonEligibility(crossCredited), null);
});

test("TD012 fresh Python and all 15 current-objective gates score independently", () => {
  const python = `def current_readiness(gate_rows):\n    all_passed = all(bool(row["passed"]) for row in gate_rows)\n    return {"gate_count": len(gate_rows), "all_passed": all_passed}`;
  assert.equal(evaluateMeasuredHorizonPython("").blank, true);
  assert.equal(evaluateMeasuredHorizonPython(python).passed, true);
  assert.equal(evaluateMeasuredHorizonPython(`${python}\nexec("unsafe")`).passed, false);
  for (const item of objectiveLedgerTransfer) {
    assert.equal(evaluateMeasuredHorizonObjective(item.topic, {}).blank, true);
    assert.equal(evaluateMeasuredHorizonObjective(item.topic, { decision: item.decision, reason: item.reason }).passed, true);
    assert.equal(evaluateMeasuredHorizonObjective(item.topic, { decision: item.decision, reason: "confidence_or_domain_score_proves_this_objective" }).passed, false);
  }
});

test("TD012 route projection is exact and rejected/Tour controllers remain inert", () => {
  const released = releasedState();
  const route = createMeasuredHorizonRouteState(released);
  assert.equal(route.activeGroup, MEASURED_HORIZON_ROUTE_GROUP);
  assert.equal(route.availableActions[0], MEASURED_HORIZON_ROUTE_ACTION);
  assert.equal(route.successor, null);
  for (const modality of measuredHorizonModalities) {
    const intent = createMeasuredHorizonRouteIntent(MEASURED_HORIZON_ROUTE_ACTION, modality, `td012-${modality}-token-01`);
    assert.equal(intent.activationKind, modality);
  }
  const rejected = createMeasuredHorizonNormalController({ releasedPredecessorState: released, entrySourceState: route, predecessorBytes: "{}", entryIntent: createMeasuredHorizonRouteIntent(MEASURED_HORIZON_ROUTE_ACTION, "pointer", "td012-pointer-token-01"), adapter: { predecessorsStable: () => true }, eligibility: eligibility() });
  assert.equal(rejected.entryTokenConsumed(), false);
  assert.equal(rejected.getState().shellVersion, UNBORROWED_REACH_SHELL_VERSION);
  const tour = createMeasuredHorizonNormalController({ mode: "demo_tour" });
  assert.equal(tour.getState().activeGroup, "td012-tour");
  assert.equal(tour.dispatch(MEASURED_HORIZON_ROUTE_ACTION).reason, "route_closed");
});

test("TD012 record sanitizer and atomic adapter enforce 16 ordered keys and predecessor equality", () => {
  const safe = sanitizeMeasuredHorizonSave(record());
  assert.ok(safe);
  assert.equal(Object.keys(safe).length, 16);
  assert.equal(safe.localReadinessState, MEASURED_HORIZON_READY);
  assert.equal(sanitizeMeasuredHorizonSave({ ...safe, privateNotes: "PRIVATE" }), null);
  const failed = Object.fromEntries(measuredHorizonGateIds.map((id, index) => [id, index !== 4]));
  const notYet = sanitizeMeasuredHorizonSave(record(failed));
  assert.ok(notYet);
  assert.deepEqual(notYet.remediationRouteIds, [`REMEDIATE-${measuredHorizonGateIds[4]}`]);

  const predecessorBytes = JSON.stringify({ version: "not-a-canonical-predecessor" });
  const memory = new Map([[UNBORROWED_REACH_SAVE_KEY, predecessorBytes]]);
  const storage = { getItem: (key) => memory.get(key) ?? null, setItem: (key, value) => memory.set(key, value), removeItem: (key) => memory.delete(key) };
  const adapter = createMeasuredHorizonStorageAdapter(storage, { [UNBORROWED_REACH_SAVE_KEY]: predecessorBytes });
  assert.equal(adapter.predecessorsStable(), false);
  assert.equal(adapter.commit(safe).status, "failed");
  assert.equal(memory.has(MEASURED_HORIZON_SAVE_KEY), false);
});

test("TD012 exact released UR-30 controller/orchestrator traversal proves both outcomes, persistence recovery, returns, rejection, and null hard stop", () => {
  for (const missedGateId of [null, measuredHorizonGateIds[4]]) {
    const subject = makeMeasuredSubject();
    const decision = advanceMeasuredToOutcome(subject, missedGateId);
    assert.equal(decision.state.activeGroup, missedGateId ? "mh30_not_yet_ready" : "mh30_ready");
    assert.deepEqual(decision.state.remediationRouteIds, missedGateId ? [`REMEDIATE-${missedGateId}`] : []);
    assert.equal(decision.state.successor, null);
    assert.equal(decision.state.worldStateChanged, false);

    assert.equal(dispatchMeasured(subject.controller, measuredHorizonActions.save).status, "local_save_confirmation_visible");
    const saved = dispatchMeasured(subject.controller, measuredHorizonActions.save);
    assert.equal(saved.status, "local_readiness_saved_verified_restore");
    assert.equal(saved.record.localReadinessState, missedGateId ? MEASURED_HORIZON_NOT_YET : MEASURED_HORIZON_READY);
    assert.equal(saved.record.successor, null);
    assert.deepEqual(subject.adapter.read(), saved.record);
    assert.equal(subject.memory.get(UNBORROWED_REACH_SAVE_KEY), subject.predecessorBytes);

    const restored = createMeasuredHorizonNormalController({ releasedPredecessorState: subject.released.state, entrySourceState: createMeasuredHorizonRouteState(subject.released.state), predecessorBytes: subject.predecessorBytes, restoredRecord: subject.adapter.read(), eligibility: eligibility(), adapter: subject.adapter });
    assert.equal(restored.getState().activeGroup, missedGateId ? "mh40_restore_not_yet" : "mh40_restore_ready");
    assert.deepEqual(restored.getState().replayedEvents, []);
    assert.equal(restored.getState().successor, null);
    assert.equal(restored.getState().routeOpened, false);
    const returned = dispatchMeasured(restored, measuredHorizonActions.returnUnborrowed);
    assert.equal(returned.status, "returned_to_unborrowed_reach_write_free");
    assert.equal(returned.route.writePerformed, false);
    assert.equal(returned.route.successor, null);
    assert.equal(dispatchMeasured(restored, measuredHorizonActions.returnThreshold).reason, "route_closed");
  }

  const thresholdSubject = makeMeasuredSubject();
  const thresholdReturn = dispatchMeasured(thresholdSubject.controller, measuredHorizonActions.returnThreshold);
  assert.equal(thresholdReturn.status, "returned_to_city_threshold_write_free");
  assert.equal(thresholdReturn.route.writePerformed, false);
  assert.equal(thresholdReturn.route.successor, null);

  const rollbackMemory = new Map();
  const rollbackSubject = makeMeasuredSubject({
    setItem(key, value) {
      if (key === MEASURED_HORIZON_SAVE_KEY) throw new Error("deterministic_write_failure");
      rollbackMemory.set(key, value);
    },
  });
  advanceMeasuredToOutcome(rollbackSubject);
  dispatchMeasured(rollbackSubject.controller, measuredHorizonActions.save);
  const failed = dispatchMeasured(rollbackSubject.controller, measuredHorizonActions.save);
  assert.equal(failed.status, "local_save_failed_rollback_verified");
  assert.equal(failed.state.activeGroup, "mh40_save_recovery");
  assert.equal(rollbackSubject.memory.has(MEASURED_HORIZON_SAVE_KEY), false);
  assert.equal(dispatchMeasured(rollbackSubject.controller, measuredHorizonActions.retrySave).status, "fresh_local_save_confirmation_visible");

  const holdSubject = makeMeasuredSubject({
    setItem(key, value) {
      if (key === MEASURED_HORIZON_SAVE_KEY) { this.corrupt = value; throw new Error("write_then_fail"); }
    },
    removeItem(key) {
      if (key === MEASURED_HORIZON_SAVE_KEY) throw new Error("rollback_unverifiable");
    },
  });
  advanceMeasuredToOutcome(holdSubject, measuredHorizonGateIds[7]);
  dispatchMeasured(holdSubject.controller, measuredHorizonActions.save);
  const hold = dispatchMeasured(holdSubject.controller, measuredHorizonActions.save);
  assert.equal(hold.status, "rollback_integrity_hold");
  assert.equal(hold.state.activeGroup, "mh40_rollback_hold");
  assert.deepEqual(hold.state.availableActions, [measuredHorizonActions.returnUnborrowed, measuredHorizonActions.returnThreshold]);
  assert.equal(hold.state.successor, null);
});
