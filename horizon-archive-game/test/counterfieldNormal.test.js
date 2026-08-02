import assert from "node:assert/strict";
import test from "node:test";
import rp009 from "../../curriculum/readiness/RP-009/contract.json" with { type: "json" };
import rp010 from "../../curriculum/readiness/RP-010/contract.json" with { type: "json" };
import { OCCLUDED_FOLD_CONTROLLER_VERSION, OCCLUDED_FOLD_RECORD_VERSION, OCCLUDED_FOLD_SHELL_VERSION, occludedFoldActions, occludedFoldObservationIds, occludedFoldPythonTraceAnswers, sanitizeOccludedFoldSave } from "../src/OccludedFoldNormal.js";
import {
  COUNTERFIELD_CONTROLLER_VERSION, COUNTERFIELD_RECORD_VERSION, COUNTERFIELD_ROUTE_ACTION,
  COUNTERFIELD_ROUTE_CONTROLLER_VERSION, COUNTERFIELD_ROUTE_GROUP, COUNTERFIELD_ROUTE_OWNER, COUNTERFIELD_SHELL_VERSION,
  counterfieldActions, counterfieldExplanationAnswers, counterfieldModalities, counterfieldObservationIds,
  counterfieldPythonTraceAnswers, counterfieldPublicContract, counterfieldReferenceSources,
  createCounterfieldIntent, createCounterfieldNormalController, createCounterfieldRouteIntent,
  createCounterfieldStorageAdapter,
  evaluateCounterfieldClientFlow, evaluateCounterfieldPython, evaluateCounterfieldPythonTrace,
  sanitizeCounterfieldSave,
} from "../src/CounterfieldNormal.js";

const evidenceKeys = ["packet_id", "mapping_id", "form", "skill_or_objective_id", "dimension_correctness", "attempt_count", "hint_level", "confidence", "misconception_tags", "mastery_status"];
function evidence(packet, mapping, skill, form, dimensions) { const e = { packet_id: packet, mapping_id: mapping, form, skill_or_objective_id: skill, dimension_correctness: Object.fromEntries(dimensions.map((id) => [id, true])), attempt_count: 1, hint_level: 0, confidence: null, misconception_tags: [], mastery_status: "mastered" }; return Object.fromEntries(evidenceKeys.map((key) => [key, e[key]])); }
function predecessor() {
  const shape = (form) => rp009.ai901_contract.forms[form].flatMap((item) => rp009.ai901_contract.dimensions.map((dimension) => `${item.id}.${dimension}`));
  return sanitizeOccludedFoldSave({
    version: OCCLUDED_FOLD_RECORD_VERSION, packetId: "RP-009", mappingId: "RP009-A3-OCCLUDED-FOLD", checkpoint: "occluded_fold_complete", continuation: "continuation", cityStateDelta: null, externalStateDelta: null, successor: null,
    retainedRp007Summary: { checkpoint: "braided_verge_complete", continuities: "distinct_visible_continuities", association: "recurrent_exposed_association", difference: "one_bounded_difference", junction: "closed_junction_unavailable", unity: null, cause: null, purpose: null },
    retainedRp008Summary: { checkpoint: "offset_reach_complete", retained_local_association: true, recurring_familiar_contact: 1, comparable_non_contact: 1, cross_family_contact: 1, unavailable_case: 1, universal: null, exclusive: null, unity: null, cause: null, purpose: null },
    edgeLedger: { observations: [...occludedFoldObservationIds], reconciliation: { mode: "bounded", correspondence: ["near_lamellar"], unmatched: ["far_unmatched"], ambiguous: { far_ambiguous: ["near_lamellar", "near_filament"] }, unavailable: ["outer_margin"], identity: null, topology: null, continuity: null, transformation: null, cause: null, purpose: null } },
    evidence: [evidence("RP-009", "RP009-A3-OCCLUDED-FOLD", "PY-017", "primary", rp009.python_contract.checks), evidence("RP-009", "RP009-A3-OCCLUDED-FOLD", "PY-017", "trace", Object.keys(occludedFoldPythonTraceAnswers)), evidence("RP-009", "RP009-A3-OCCLUDED-FOLD", "PY-017", "transfer", rp009.python_contract.checks), ...["primary", "retrieval", "transfer"].map((form) => evidence("RP-009", "RP009-A3-OCCLUDED-FOLD", "RP009-PROMPT-BOUNDARY-01", form, shape(form))), evidence("RP-009", "RP009-A3-OCCLUDED-FOLD", "RP009-PROMPT-BOUNDARY-01", "system_user_boundary_explanation", ["system_user_boundary"]), evidence("RP-009", "RP009-A3-OCCLUDED-FOLD", "RP009-PROMPT-BOUNDARY-01", "truth_authority_boundary_explanation", ["truth_authority_boundary"])],
  });
}
function releasedState() { return { shellVersion: OCCLUDED_FOLD_SHELL_VERSION, controllerVersion: OCCLUDED_FOLD_CONTROLLER_VERSION, packetId: "RP-009", phase: "OF-30 VERIFY + RETURN", boardState: "SC-10", activeGroup: "of30_restore", owner: "SYSTEM // EXPEDITION LEDGER", availableActions: [occludedFoldActions.notation, occludedFoldActions.returnInterval, occludedFoldActions.returnThreshold], cityStateDelta: null, externalStateDelta: null, successor: null }; }
function routeState() { return { ...releasedState(), controllerVersion: COUNTERFIELD_ROUTE_CONTROLLER_VERSION, activeGroup: COUNTERFIELD_ROUTE_GROUP, owner: COUNTERFIELD_ROUTE_OWNER, headingId: "td010-route-heading", availableActions: [COUNTERFIELD_ROUTE_ACTION, occludedFoldActions.notation, occludedFoldActions.returnInterval, occludedFoldActions.returnThreshold] }; }
function subject(extra = {}) { const prior = predecessor(); assert.ok(prior); let saved = null; const adapter = { predecessorsStable: () => true, commit(candidate) { saved = sanitizeCounterfieldSave(candidate); return saved ? { status: "committed", value: saved, rollbackVerified: true, predecessorBytesPreserved: true } : { status: "failed", rollbackVerified: true, predecessorBytesPreserved: true }; }, read: () => saved }; const controller = createCounterfieldNormalController({ entrySourceState: routeState(), releasedPredecessorState: releasedState(), predecessorBytes: JSON.stringify(prior), entryIntent: createCounterfieldRouteIntent(COUNTERFIELD_ROUTE_ACTION, "screen_reader", "td010-route-token-0001"), adapter, ...extra }); return { controller, prior, adapter }; }
let token = 0; function dispatch(controller, action) { token += 1; return controller.dispatch(createCounterfieldIntent(controller.getState(), action, "screen_reader", `td010-action-token-${token}`)); }
function update(controller, values) { for (const [key, value] of Object.entries(values)) controller.updateField(key, value); }
const observationActions = Object.values(counterfieldActions).slice(2, 9);
function enterLearning(controller, order = observationActions) { dispatch(controller, counterfieldActions.inspect); for (const action of order) dispatch(controller, action); }
function clientAnswers(form) { return Object.fromEntries(rp010.ai901_contract.forms[form].map((item) => [item.id, Object.fromEntries(rp010.ai901_contract.dimensions.map((dimension) => [dimension, item[dimension]]))])); }
function advance(controller) { enterLearning(controller); update(controller, { learnerSource: counterfieldReferenceSources.primary }); dispatch(controller, counterfieldActions.pythonPrimary); update(controller, counterfieldPythonTraceAnswers); dispatch(controller, counterfieldActions.pythonTrace); update(controller, { learnerSource: counterfieldReferenceSources.transfer }); dispatch(controller, counterfieldActions.pythonTransfer); for (const form of ["primary", "retrieval", "transfer"]) { for (const [id, values] of Object.entries(clientAnswers(form))) for (const [dimension, value] of Object.entries(values)) controller.updateField(`${id}.${dimension}`, value); dispatch(controller, counterfieldActions[`client${form[0].toUpperCase()}${form.slice(1)}`]); } update(controller, { clientFlowBoundary: counterfieldExplanationAnswers.clientFlowBoundary }); dispatch(controller, counterfieldActions.clientFlowBoundary); update(controller, { truthAuthorityBoundary: counterfieldExplanationAnswers.truthAuthorityBoundary }); dispatch(controller, counterfieldActions.truthAuthorityBoundary); }
function permutations(values) { if (!values.length) return [[]]; return values.flatMap((value, index) => permutations(values.filter((_, i) => i !== index)).map((tail) => [value, ...tail])); }

test("TD010 exact released route accepts all seven modalities and rejects protected or stale inputs before SC-11", () => {
  for (const modality of counterfieldModalities) { const prior = predecessor(), controller = createCounterfieldNormalController({ entrySourceState: routeState(), releasedPredecessorState: releasedState(), predecessorBytes: JSON.stringify(prior), entryIntent: createCounterfieldRouteIntent(COUNTERFIELD_ROUTE_ACTION, modality, `td010-${modality}-token`), adapter: { predecessorsStable: () => true } }); assert.equal(controller.getState().activeGroup, "cf00_orientation"); assert.equal(controller.getState().shellVersion, COUNTERFIELD_SHELL_VERSION); }
  const invalid = createCounterfieldNormalController({ entrySourceState: routeState(), releasedPredecessorState: releasedState(), predecessorBytes: JSON.stringify(predecessor()), entryIntent: createCounterfieldRouteIntent(COUNTERFIELD_ROUTE_ACTION, "screen_reader", "short"), adapter: { predecessorsStable: () => true } }); assert.equal(invalid.getState().boardState, "SC-10"); assert.notEqual(invalid.getState().shellVersion, COUNTERFIELD_SHELL_VERSION);
  const protectedRecord = { ...predecessor(), version: "rp009.protected-journey.v1" }; const protectedRoute = createCounterfieldNormalController({ entrySourceState: routeState(), releasedPredecessorState: releasedState(), predecessorBytes: JSON.stringify(protectedRecord), entryIntent: createCounterfieldRouteIntent(COUNTERFIELD_ROUTE_ACTION, "screen_reader", "td010-protected-token"), adapter: { predecessorsStable: () => true } }); assert.equal(protectedRoute.getState().boardState, "SC-10");
  assert.notEqual(subject({ privateNotes: "PRIVATE" }).controller.getState().shellVersion, COUNTERFIELD_SHELL_VERSION);
  let tourReads = 0; const tour = createCounterfieldNormalController({ mode: "demo_tour", predecessorBytes: "{", adapter: { predecessorsStable() { tourReads += 1; return true; } } }); assert.equal(tour.getState().owner, "SYSTEM // DEMO TOUR"); assert.equal(tourReads, 0);
});

test("TD010 all 5,040 observation orders converge and revisits are idempotent zero-credit", () => {
  const orders = permutations(observationActions); assert.equal(orders.length, 5040);
  for (const order of orders) { const { controller } = subject(); enterLearning(controller, order); assert.equal(controller.getState().activeGroup, "cf20_python_primary"); assert.deepEqual(new Set(controller.getState().recordedObservationIds), new Set(counterfieldObservationIds)); }
  const { controller } = subject(); dispatch(controller, counterfieldActions.inspect); dispatch(controller, observationActions[0]); const revisit = dispatch(controller, observationActions[0]); assert.equal(revisit.evidenceGranted, false); assert.equal(controller.getState().recordedObservationIds.length, 1);
});

test("TD010 PY-018, trace, client-flow, and two explanations are strictly independent", () => {
  assert.equal(evaluateCounterfieldPython("primary", counterfieldReferenceSources.primary).passed, true); assert.equal(evaluateCounterfieldPython("transfer", counterfieldReferenceSources.transfer).passed, true); assert.equal(evaluateCounterfieldPython("primary", `${counterfieldReferenceSources.primary}\nprint(exchange_summary)`).passed, false);
  assert.equal(evaluateCounterfieldPythonTrace(counterfieldPythonTraceAnswers).passed, true); assert.equal(evaluateCounterfieldPythonTrace({}).score, 0);
  for (const form of ["primary", "retrieval", "transfer"]) { assert.equal(evaluateCounterfieldClientFlow(form, clientAnswers(form)).passed, true); assert.equal(evaluateCounterfieldClientFlow(form, {}).score, 0); }
  const { controller } = subject(); enterLearning(controller); const forged = dispatch(controller, counterfieldActions.clientPrimary); assert.equal(forged.status, "rejected"); assert.equal(controller.getState().activeGroup, "cf20_python_primary");
});

test("TD010 exact 13-key record commits, restores replay-free, and hard-stops at CF-30", () => {
  const { controller, adapter, prior } = subject(); advance(controller); assert.equal(controller.getState().activeGroup, "cf20_review"); assert.deepEqual(controller.getState().reviewRows.map((row) => row.scope), ["RP-007", "RP-008", "RP-009", "RP-010"]); dispatch(controller, counterfieldActions.prepareSave); const saved = dispatch(controller, counterfieldActions.save); assert.equal(saved.status, "save_committed_verified_restore"); assert.deepEqual(Object.keys(saved.record), ["version", "packetId", "mappingId", "checkpoint", "continuation", "cityStateDelta", "externalStateDelta", "successor", "retainedRp007Summary", "retainedRp008Summary", "retainedRp009Ledger", "scopeRegister", "evidence"]); assert.equal(saved.record.version, COUNTERFIELD_RECORD_VERSION); assert.equal(saved.record.evidence.length, 8); assert.ok(sanitizeCounterfieldSave(saved.record)); assert.equal(saved.state.activeGroup, "cf30_restore"); assert.equal(saved.state.successor, null);
  const reordered = structuredClone(saved.record); reordered.scopeRegister.observations.reverse(); assert.equal(sanitizeCounterfieldSave(reordered), null);
  const look = dispatch(controller, counterfieldActions.look); assert.equal(look.destination, null); assert.equal(look.routeOpened, false); assert.equal(look.successor, null);
  const restored = createCounterfieldNormalController({ releasedPredecessorState: releasedState(), predecessorBytes: JSON.stringify(prior), restoredRecord: adapter.read(), adapter }); assert.equal(restored.getState().activeGroup, "cf30_restore"); assert.deepEqual(restored.getState().replayedEvents, []);
});

test("TD010 safe returns are write-free and public contract exposes no successor", () => {
  const first = subject().controller; const of = dispatch(first, counterfieldActions.returnOccludedFold); assert.equal(of.route.target, "RP-009"); assert.equal(of.route.writePerformed, false);
  const second = subject().controller; const city = dispatch(second, counterfieldActions.returnThreshold); assert.equal(city.route.target, "CITY_THRESHOLD"); assert.equal(city.route.successor, null);
  assert.equal(counterfieldPublicContract.canonicalOrders, 5040); assert.equal(counterfieldPublicContract.hardStop, "CF-30 VERIFY + RETURN / SC-11"); assert.equal(counterfieldPublicContract.successor, null); assert.equal(COUNTERFIELD_CONTROLLER_VERSION, "rp010.counterfield-controller.v1");
  const unavailable = createCounterfieldStorageAdapter(null, {}); assert.equal(unavailable.read(), null); assert.equal(unavailable.predecessorsStable(), false);
});
