import assert from "node:assert/strict";
import test from "node:test";
import {
  UNBORROWED_REACH_CONTROLLER_VERSION,
  UNBORROWED_REACH_SAVE_KEY,
  UNBORROWED_REACH_SHELL_VERSION,
  unborrowedReachActions,
} from "../src/UnborrowedReachNormal.js";
import { objectiveLedgerTransfer } from "../src/objectiveLedgerExercise.js";
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
