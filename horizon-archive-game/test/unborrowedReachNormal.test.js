import assert from "node:assert/strict";
import test from "node:test";
import rp010 from "../../curriculum/readiness/RP-010/contract.json" with { type: "json" };
import rp011 from "../../curriculum/readiness/RP-011/contract.json" with { type: "json" };
import {
  COUNTERFIELD_CONTROLLER_VERSION, COUNTERFIELD_RECORD_VERSION, COUNTERFIELD_SAVE_KEY,
  COUNTERFIELD_SHELL_VERSION, counterfieldActions, counterfieldObservationIds, counterfieldPythonTraceAnswers,
  sanitizeCounterfieldSave,
} from "../src/CounterfieldNormal.js";
import {
  UNBORROWED_REACH_CONTROLLER_VERSION, UNBORROWED_REACH_RECORD_VERSION, UNBORROWED_REACH_ROUTE_ACTION,
  UNBORROWED_REACH_SAVE_KEY, UNBORROWED_REACH_SHELL_VERSION, createUnborrowedReachIntent,
  createUnborrowedReachNormalController, createUnborrowedReachRouteIntent, createUnborrowedReachRouteState,
  createUnborrowedReachStorageAdapter, evaluateUnborrowedReachAgentSurfaces, evaluateUnborrowedReachPython,
  evaluateUnborrowedReachPythonTrace, sanitizeUnborrowedReachSave, unborrowedReachActions,
  unborrowedReachExplanationAnswers, unborrowedReachLimitIds, unborrowedReachModalities,
  unborrowedReachObservationIds, unborrowedReachPythonTraceAnswers, unborrowedReachPublicContract,
  unborrowedReachReconciliationMethodIds, unborrowedReachReferenceSources,
} from "../src/UnborrowedReachNormal.js";
import { createCalibrationMarginNormalEntryIntent } from "../src/CalibrationMarginNormalEntry.js";

const evidenceKeys = ["packet_id", "mapping_id", "form", "skill_or_objective_id", "dimension_correctness", "attempt_count", "hint_level", "confidence", "misconception_tags", "mastery_status"];
function evidence(skill, form, dimensions) {
  const item = { packet_id: "RP-010", mapping_id: "RP010-REQUEST-CLIENT-BOUNDARY-01", form, skill_or_objective_id: skill, dimension_correctness: Object.fromEntries(dimensions.map((id) => [id, true])), attempt_count: 1, hint_level: 0, confidence: null, misconception_tags: [], mastery_status: "mastered" };
  return Object.fromEntries(evidenceKeys.map((key) => [key, item[key]]));
}
function predecessor() {
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
function releasedState() {
  return { shellVersion: COUNTERFIELD_SHELL_VERSION, controllerVersion: COUNTERFIELD_CONTROLLER_VERSION, packetId: "RP-010", phase: "CF-30 VERIFY + RETURN", boardState: "SC-11", activeGroup: "cf30_restore", owner: "SYSTEM // EXPEDITION LEDGER", availableActions: [counterfieldActions.look, counterfieldActions.returnOccludedFold, counterfieldActions.returnThreshold], cityStateDelta: null, externalStateDelta: null, successor: null };
}
function subject(extra = {}) {
  const prior = predecessor(); assert.ok(prior);
  let saved = null;
  const adapter = { predecessorsStable: () => true, commit(candidate) { saved = sanitizeUnborrowedReachSave(candidate); return saved ? { status: "committed", value: saved, rollbackVerified: true, predecessorBytesPreserved: true } : { status: "failed", rollbackVerified: true, predecessorBytesPreserved: true }; }, read: () => saved };
  const released = releasedState(); const route = createUnborrowedReachRouteState(released);
  const controller = createUnborrowedReachNormalController({ entrySourceState: route, releasedPredecessorState: released, predecessorBytes: JSON.stringify(prior), entryIntent: createUnborrowedReachRouteIntent(UNBORROWED_REACH_ROUTE_ACTION, "screen_reader", "td011-route-token-0001"), adapter, ...extra });
  return { controller, adapter, prior, released, route };
}
let token = 0;
function dispatch(controller, action) { token += 1; return controller.dispatch(createUnborrowedReachIntent(controller.getState(), action, "screen_reader", `td011-action-token-${String(token).padStart(6, "0")}`)); }
function update(controller, values) { for (const [key, value] of Object.entries(values)) controller.updateField(key, value); }
function agentAnswers(form) { return Object.fromEntries(rp011.ai901_contract.forms[form].map((item) => [item.id, Object.fromEntries(rp011.ai901_contract.dimensions.map((dimension) => [dimension, item[dimension]]))])); }
const observations = [unborrowedReachActions.observePersistentTransition, unborrowedReachActions.observeDifferingRelation, unborrowedReachActions.observeMaintainedBypass, unborrowedReachActions.observeMultipleCandidate, unborrowedReachActions.observeUnavailableMargin, unborrowedReachActions.observeLayeredStewardship];
function advanceToFreshReview(controller, order = observations) {
  dispatch(controller, unborrowedReachActions.isolate); for (const action of order) dispatch(controller, action);
  update(controller, { learnerSource: unborrowedReachReferenceSources.primary }); dispatch(controller, unborrowedReachActions.pythonPrimary);
  update(controller, unborrowedReachPythonTraceAnswers); dispatch(controller, unborrowedReachActions.pythonTrace);
  update(controller, { learnerSource: unborrowedReachReferenceSources.transfer }); dispatch(controller, unborrowedReachActions.pythonTransfer);
  for (const form of ["primary", "retrieval", "transfer"]) { for (const [id, values] of Object.entries(agentAnswers(form))) for (const [dimension, value] of Object.entries(values)) controller.updateField(`${id}.${dimension}`, value); dispatch(controller, unborrowedReachActions[`agent${form[0].toUpperCase()}${form.slice(1)}`]); }
  update(controller, { surfaceBoundary: unborrowedReachExplanationAnswers.surfaceBoundary }); dispatch(controller, unborrowedReachActions.surfaceExplanation);
  update(controller, { truthPermissionBoundary: unborrowedReachExplanationAnswers.truthPermissionBoundary }); dispatch(controller, unborrowedReachActions.truthExplanation);
}
function permutations(values) { if (!values.length) return [[]]; return values.flatMap((value, index) => permutations(values.filter((_, item) => item !== index)).map((tail) => [value, ...tail])); }

test("TD011 exact Counterfield route accepts seven modalities and rejects contaminated entry", () => {
  for (const modality of unborrowedReachModalities) { const prior = predecessor(); const released = releasedState(); const route = createUnborrowedReachRouteState(released); const controller = createUnborrowedReachNormalController({ entrySourceState: route, releasedPredecessorState: released, predecessorBytes: JSON.stringify(prior), entryIntent: createUnborrowedReachRouteIntent(UNBORROWED_REACH_ROUTE_ACTION, modality, `td011-${modality}-token`), adapter: { predecessorsStable: () => true } }); assert.equal(controller.getState().activeGroup, "ur00_isolation"); assert.equal(controller.getState().shellVersion, UNBORROWED_REACH_SHELL_VERSION); }
  assert.notEqual(subject({ privateNotes: "PRIVATE" }).controller.getState().shellVersion, UNBORROWED_REACH_SHELL_VERSION);
  const tour = createUnborrowedReachNormalController({ mode: "demo_tour", predecessorBytes: "{" }); assert.equal(tour.getState().owner, "SYSTEM // DEMO TOUR");
});

test("TD011 all 720 observation orders converge without learning credit", () => {
  const orders = permutations(observations); assert.equal(orders.length, 720);
  for (const order of orders) { const { controller } = subject(); dispatch(controller, unborrowedReachActions.isolate); for (const action of order) assert.equal(dispatch(controller, action).evidenceGranted, false); assert.equal(controller.getState().activeGroup, "ur20_python_primary"); assert.deepEqual(new Set(controller.getState().recordedObservationIds), new Set(unborrowedReachObservationIds)); }
});

test("TD011 PY-019 and agent-surface forms are independently scored", () => {
  assert.equal(evaluateUnborrowedReachPython("primary", unborrowedReachReferenceSources.primary).passed, true);
  assert.equal(evaluateUnborrowedReachPython("transfer", unborrowedReachReferenceSources.transfer).passed, true);
  assert.equal(evaluateUnborrowedReachPython("primary", `${unborrowedReachReferenceSources.primary}\nprint(fresh_integration_record)`).passed, false);
  assert.equal(evaluateUnborrowedReachPythonTrace(unborrowedReachPythonTraceAnswers).passed, true);
  for (const form of ["primary", "retrieval", "transfer"]) { assert.equal(evaluateUnborrowedReachAgentSurfaces(form, agentAnswers(form)).passed, true); assert.equal(evaluateUnborrowedReachAgentSurfaces(form, {}).passed, false); }
});

test("TD011 commits exact fresh and reconciled records, restores, and hard-stops", () => {
  const { controller, adapter, prior, released } = subject(); advanceToFreshReview(controller); assert.equal(controller.getState().activeGroup, "ur20_fresh_review");
  dispatch(controller, unborrowedReachActions.reviewFresh); const fresh = dispatch(controller, unborrowedReachActions.finalizeFresh); assert.equal(fresh.status, "fresh_save_committed_verified_restore"); assert.equal(fresh.record.checkpoint, "rp011_fresh_finalized"); assert.ok(sanitizeUnborrowedReachSave(fresh.record));
  for (const action of [unborrowedReachActions.reopenRp010, unborrowedReachActions.reopenRp007, unborrowedReachActions.reopenRp009, unborrowedReachActions.reopenRp008]) assert.equal(dispatch(controller, action).evidenceGranted, false);
  update(controller, { methods: [...unborrowedReachReconciliationMethodIds], limits: Object.fromEntries(unborrowedReachLimitIds.map((id) => [id, null])) }); dispatch(controller, unborrowedReachActions.checkReconciliation); dispatch(controller, unborrowedReachActions.reviewReconciliation); const final = dispatch(controller, unborrowedReachActions.saveReconciliation);
  assert.equal(final.status, "reconciliation_saved_verified_restore"); assert.equal(final.record.checkpoint, "rp011_reconciliation_saved"); assert.equal(Object.keys(final.record).length, 15); assert.equal(final.record.version, UNBORROWED_REACH_RECORD_VERSION); assert.deepEqual(final.record.reopenedScopes, ["RP-007", "RP-008", "RP-009", "RP-010"]); assert.ok(sanitizeUnborrowedReachSave(final.record)); assert.equal(final.state.activeGroup, "ur30_restore"); assert.equal(final.state.successor, null);
  const restored = createUnborrowedReachNormalController({ releasedPredecessorState: released, predecessorBytes: JSON.stringify(prior), restoredRecord: adapter.read(), adapter }); assert.equal(restored.getState().activeGroup, "ur30_restore"); assert.deepEqual(restored.getState().replayedEvents, []);
  const look = dispatch(controller, unborrowedReachActions.look); assert.equal(look.destination, null); assert.equal(look.routeOpened, false); assert.equal(look.successor, null);
});

test("TD011 sanitizer, atomic adapter, safe returns, and public contract fail closed", () => {
  const completed = subject(); advanceToFreshReview(completed.controller); dispatch(completed.controller, unborrowedReachActions.reviewFresh); const saved = dispatch(completed.controller, unborrowedReachActions.finalizeFresh).record;
  const extra = { ...saved, privateNotes: "forbidden" }; assert.equal(sanitizeUnborrowedReachSave(extra), null); const mutated = structuredClone(saved); mutated.records.rp010.checkpoint = "forged"; assert.equal(sanitizeUnborrowedReachSave(mutated), null); const badChecksum = { ...saved, checksum: "fnv1a32-00000000" }; assert.equal(sanitizeUnborrowedReachSave(badChecksum), null);
  const priorBytes = JSON.stringify(completed.prior); const memory = new Map([[COUNTERFIELD_SAVE_KEY, priorBytes]]); const storage = { getItem: (key) => memory.get(key) ?? null, setItem: (key, value) => memory.set(key, value), removeItem: (key) => memory.delete(key) }; const adapter = createUnborrowedReachStorageAdapter(storage, { [COUNTERFIELD_SAVE_KEY]: priorBytes }); assert.equal(typeof adapter.commit, "function"); assert.equal(adapter.predecessorsStable(), true); assert.equal(adapter.commit(saved).status, "committed"); assert.ok(adapter.read()); assert.equal(memory.has(UNBORROWED_REACH_SAVE_KEY), true);
  memory.set(COUNTERFIELD_SAVE_KEY, "{}"); assert.equal(adapter.predecessorsStable(), false); assert.equal(adapter.commit(saved).status, "failed");
  const returned = subject(); const safeReturn = dispatch(returned.controller, unborrowedReachActions.returnCounterfield); assert.equal(safeReturn.route.writePerformed, false); assert.equal(dispatch(returned.controller, unborrowedReachActions.isolate).reason, "route_closed");
  assert.equal(unborrowedReachPublicContract.canonicalObservationOrders, 720); assert.equal(unborrowedReachPublicContract.canonicalReopenOrders, 24); assert.deepEqual(unborrowedReachPublicContract.selectedImageRoles, []); assert.equal(unborrowedReachPublicContract.successor, null); assert.equal(unborrowedReachPublicContract.structuralPlaceholdersOnly, false); assert.equal(UNBORROWED_REACH_CONTROLLER_VERSION, "rp011.unborrowed-reach-normal.v1");
  const routeIntent = createCalibrationMarginNormalEntryIntent(UNBORROWED_REACH_ROUTE_ACTION, "keyboard_enter", "td011-integrated-route-token", null, "td011-unborrowed-reach-route"); assert.equal(routeIntent.packetId, "RP-011"); assert.equal(routeIntent.allowlistedActionId, UNBORROWED_REACH_ROUTE_ACTION);
  const internalIntent = createCalibrationMarginNormalEntryIntent(unborrowedReachActions.isolate, "keyboard_space", "td011-integrated-action-token", null, "ur00_isolation"); assert.equal(internalIntent.expectedOwner, "SYSTEM // INDEPENDENT RECORD MODE"); assert.equal(internalIntent.shellVersion, UNBORROWED_REACH_SHELL_VERSION);
});
