import assert from "node:assert/strict";
import test from "node:test";
import rp006Contract from "../../curriculum/readiness/RP-006/contract.json" with { type: "json" };
import rp007Contract from "../../curriculum/readiness/RP-007/contract.json" with { type: "json" };
import {
  INTERVAL_WORKS_RECORD_VERSION,
  INTERVAL_WORKS_SAVE_KEY,
  intervalWorksObservationIds,
  sanitizeIntervalWorksSave,
} from "../src/IntervalWorksNormal.js";
import { MANYFOLD_RETURN_SAVE_KEY } from "../src/ManyfoldReturnNormal.js";
import { THREE_CURRENT_REACH_SAVE_KEY } from "../src/ThreeCurrentReachNormal.js";
import {
  BRAIDED_VERGE_RECORD_VERSION,
  BRAIDED_VERGE_SAVE_KEY,
  BRAIDED_VERGE_SHELL_VERSION,
  BRAIDED_VERGE_TRUTHFUL_WORKSPACE_LABEL,
  braidedVergeActions,
  braidedVergeExplanationAnswers,
  braidedVergeObservationIds,
  braidedVergePythonTraceAnswers,
  createBraidedVergeIntent,
  createBraidedVergeNormalController,
  createBraidedVergeRouteIntent,
  createBraidedVergeStorageAdapter,
  evaluateBraidedVergeVision,
  executeBraidedVergeWorkspace,
  resolveBraidedVergeWorldScene,
  sanitizeBraidedVergeSave,
} from "../src/BraidedVergeNormal.js";

const evidenceKeys = [
  "packet_id", "mapping_id", "form", "skill_or_objective_id",
  "dimension_correctness", "attempt_count", "hint_level", "confidence",
  "misconception_tags", "mastery_status",
];

function evidence(packet, mapping, skill, form, dimensions) {
  return Object.fromEntries(evidenceKeys.map((key) => [key, ({
    packet_id: packet,
    mapping_id: mapping,
    form,
    skill_or_objective_id: skill,
    dimension_correctness: Object.fromEntries(dimensions.map((id) => [id, true])),
    attempt_count: 1,
    hint_level: 0,
    confidence: null,
    misconception_tags: [],
    mastery_status: "mastered",
  })[key]]));
}

function intervalRecord() {
  const dimensions = rp006Contract.ai901_contract.dimensions;
  return sanitizeIntervalWorksSave({
    version: INTERVAL_WORKS_RECORD_VERSION,
    packetId: "RP-006",
    mappingId: "RP006-A3-INTERVAL-WORKS",
    checkpoint: "interval_works_complete",
    continuation: "continuation",
    cityStateDelta: null,
    externalStateDelta: null,
    successor: null,
    note: {
      observations: [...intervalWorksObservationIds],
      relativeOrder: "exposed_source_order_preserved",
      changed: "one_visible_change_observed",
      persistent: "one_feature_persists",
      unavailable: "closed_interval_unavailable",
      stewardship: "layered_stewardship_observed",
      replicas: "sanitized_precomputed_only",
      gap: "explicit_unavailable_record",
      cause: null,
      purpose: null,
      destination: null,
    },
    evidence: [
      evidence("RP-006", "RP006-A3-INTERVAL-WORKS", "PY-013", "primary", rp006Contract.python_contract.checks),
      evidence("RP-006", "RP006-A3-INTERVAL-WORKS", "PY-013", "trace", [
        "importStatement", "moduleName", "qualifiedHelper", "inputGroups",
        "listOutput", "sourceOrder", "explicitGap", "causeBoundary",
      ]),
      evidence("RP-006", "RP006-A3-INTERVAL-WORKS", "PY-013", "transfer", rp006Contract.python_contract.checks),
      ...["primary", "retrieval", "transfer"].map((form) => evidence(
        "RP-006",
        "RP006-A3-INTERVAL-WORKS",
        "RP006-SPEECH-01",
        form,
        rp006Contract.ai901_contract.forms[form].flatMap((item) => dimensions.map((dimension) => `${item.id}.${dimension}`)),
      )),
      evidence("RP-006", "RP006-A3-INTERVAL-WORKS", "RP006-SPEECH-01", "direction_boundary_explanation", ["direction_boundary"]),
      evidence("RP-006", "RP006-A3-INTERVAL-WORKS", "RP006-SPEECH-01", "causation_boundary_explanation", ["causation_boundary"]),
    ],
  });
}

function pythonSource(form) {
  const expected = rp007Contract.python_contract.forms[form];
  return `from pathlib import Path

report_path = Path("${expected.filename}")
report_text = (
${expected.lines.map((line) => `    "${line}\\n"`).join("\n")}
)
report_path.write_text(report_text, encoding="utf-8")
restored_report = report_path.read_text(encoding="utf-8")`;
}

function createMemory(mode = "normal") {
  const predecessor = intervalRecord();
  const intervalBytes = JSON.stringify(predecessor);
  const manyfoldBytes = "exact-td005-bytes";
  const threeCurrentBytes = "exact-td004-bytes";
  const values = new Map([
    [INTERVAL_WORKS_SAVE_KEY, intervalBytes],
    [MANYFOLD_RETURN_SAVE_KEY, manyfoldBytes],
    [THREE_CURRENT_REACH_SAVE_KEY, threeCurrentBytes],
  ]);
  let candidateWritten = false;
  const storage = {
    getItem(key) {
      if (mode === "readback-failure" && key === BRAIDED_VERGE_SAVE_KEY && candidateWritten) return "{";
      return values.get(key) ?? null;
    },
    setItem(key, value) {
      if (mode === "write-failure" && key === BRAIDED_VERGE_SAVE_KEY) throw new Error("write unavailable");
      values.set(key, value);
      if (key === BRAIDED_VERGE_SAVE_KEY) candidateWritten = true;
    },
    removeItem(key) {
      if (mode === "rollback-unverified" && key === BRAIDED_VERGE_SAVE_KEY) throw new Error("rollback unavailable");
      values.delete(key);
      if (key === BRAIDED_VERGE_SAVE_KEY) candidateWritten = false;
    },
  };
  const adapter = createBraidedVergeStorageAdapter(storage, {
    intervalRecord: predecessor,
    intervalBytes,
    manyfoldBytes,
    threeCurrentBytes,
  });
  return {
    predecessor,
    intervalBytes,
    manyfoldBytes,
    threeCurrentBytes,
    storage,
    adapter,
    bytes: (key) => values.get(key) ?? null,
  };
}

function subject(mode = "normal", controllerOptions = {}) {
  const memory = createMemory(mode);
  const entryIntent = createBraidedVergeRouteIntent(
    braidedVergeActions.route,
    "screen_reader",
    "td007-entry-token",
  );
  const controller = createBraidedVergeNormalController({
    predecessorRecord: memory.predecessor,
    predecessorBytes: memory.intervalBytes,
    readPredecessorBytes: () => memory.bytes(INTERVAL_WORKS_SAVE_KEY),
    manyfoldBytes: memory.manyfoldBytes,
    readManyfoldBytes: () => memory.bytes(MANYFOLD_RETURN_SAVE_KEY),
    threeCurrentBytes: memory.threeCurrentBytes,
    readThreeCurrentBytes: () => memory.bytes(THREE_CURRENT_REACH_SAVE_KEY),
    entryIntent,
    adapter: memory.adapter,
    ...controllerOptions,
  });
  return { controller, memory };
}

let tokenSequence = 0;
function dispatch(controller, action, modality = "screen_reader") {
  tokenSequence += 1;
  return controller.dispatch(createBraidedVergeIntent(
    controller.getState(),
    action,
    modality,
    `td007-token-${tokenSequence}`,
  ));
}

function update(controller, values) {
  Object.entries(values).forEach(([key, value]) => controller.updateField(key, value));
}

const observationActions = [
  braidedVergeActions.continuities,
  braidedVergeActions.association,
  braidedVergeActions.difference,
  braidedVergeActions.order,
  braidedVergeActions.junction,
];

function enterLearning(controller, order = observationActions) {
  dispatch(controller, braidedVergeActions.inspect);
  order.forEach((action) => dispatch(controller, action));
}

function submitVision(controller, form) {
  for (const item of rp007Contract.ai901_contract.forms[form]) {
    update(controller, {
      [`${item.id}.capability`]: item.capability,
      [`${item.id}.deciding_signal`]: item.deciding_signal,
    });
  }
  return dispatch(controller, braidedVergeActions[`vision${form[0].toUpperCase()}${form.slice(1)}`]);
}

function advanceAll(controller) {
  enterLearning(controller);
  update(controller, { learnerSource: pythonSource("primary") });
  dispatch(controller, braidedVergeActions.pythonPrimary);
  update(controller, braidedVergePythonTraceAnswers);
  dispatch(controller, braidedVergeActions.pythonTrace);
  update(controller, { learnerSource: pythonSource("transfer") });
  dispatch(controller, braidedVergeActions.pythonTransfer);
  submitVision(controller, "primary");
  submitVision(controller, "retrieval");
  submitVision(controller, "transfer");
  update(controller, { capabilityBoundary: braidedVergeExplanationAnswers.capabilityBoundary });
  dispatch(controller, braidedVergeActions.capabilityBoundary);
  update(controller, { relationBoundary: braidedVergeExplanationAnswers.relationBoundary });
  dispatch(controller, braidedVergeActions.relationBoundary);
}

function permutations(values) {
  if (values.length === 0) return [[]];
  return values.flatMap((value, index) => permutations(values.filter((_, candidate) => candidate !== index))
    .map((tail) => [value, ...tail]));
}

test("TD007 route validates exact predecessor and one-hit source intent before BV-00", () => {
  const { controller } = subject();
  assert.equal(controller.getState().shellVersion, BRAIDED_VERGE_SHELL_VERSION);
  assert.equal(controller.getState().activeGroup, "bv00_orientation");
  assert.equal(controller.getState().evidenceCount, 0);
  assert.equal(controller.getState().worldStateChanged, false);
  const rejected = createBraidedVergeNormalController({
    predecessorRecord: intervalRecord(),
    predecessorBytes: JSON.stringify(intervalRecord()),
    entryIntent: { ...createBraidedVergeRouteIntent(braidedVergeActions.route, "pointer", "fresh-route-token"), expectedOwner: "SCENE" },
  });
  assert.equal(rejected.getState().boardState, "SC-07");
  assert.equal(rejected.getState().availableActions.length, 0);
});

test("TD007 Demo Tour rejects before route or campaign mutation", () => {
  const { controller } = subject("normal", { mode: "demo_tour" });
  const result = dispatch(controller, braidedVergeActions.inspect);
  assert.equal(result.status, "rejected");
  assert.equal(result.reason, "tour_route_closed");
  assert.equal(result.tokenConsumed, false);
});

test("TD007 approved workspace performs one UTF-8 memory write/read and unconditional cleanup", () => {
  for (const form of ["primary", "transfer"]) {
    const result = executeBraidedVergeWorkspace(form, pythonSource(form));
    assert.equal(result.passed, true);
    assert.equal(result.cleanupVerified, true);
    assert.deepEqual(result.audit, {
      isolated: true,
      relativePathOnly: true,
      writeCount: 1,
      readCount: 1,
      utf8: true,
      workspaceEntryCountAfterFinally: 0,
      exposedPrivateContent: false,
    });
  }
  assert.match(BRAIDED_VERGE_TRUTHFUL_WORKSPACE_LABEL, /session-only virtual temporary file/);
  assert.match(BRAIDED_VERGE_TRUTHFUL_WORKSPACE_LABEL, /does not execute arbitrary Python/);
});

test("TD007 workspace rejects absolute, traversal, extra operation, and cleanup failure", () => {
  const absolute = pythonSource("primary").replace('Path("braided_relation_report.txt")', 'Path("C:\\\\private\\\\report.txt")');
  assert.equal(executeBraidedVergeWorkspace("primary", absolute).passed, false);
  const traversal = pythonSource("primary").replace("braided_relation_report.txt", "../report.txt");
  assert.equal(executeBraidedVergeWorkspace("primary", traversal).passed, false);
  const forbidden = `${pythonSource("primary")}\nprint(restored_report)`;
  assert.equal(executeBraidedVergeWorkspace("primary", forbidden).passed, false);
  const cleanup = executeBraidedVergeWorkspace("primary", pythonSource("primary"), { simulateCleanupFailure: true });
  assert.equal(cleanup.passed, false);
  assert.deepEqual(cleanup.failed.at(-1), "workspace_cleanup_verified");
  assert.equal(cleanup.audit.workspaceEntryCountAfterFinally, 0);
});

test("TD007 every one of 120 observation orders converges with zero learning credit", () => {
  const orders = permutations(observationActions);
  assert.equal(orders.length, 120);
  for (const order of orders) {
    const { controller } = subject();
    enterLearning(controller, order);
    const state = controller.getState();
    assert.equal(state.activeGroup, "bv20_python_primary");
    assert.equal(state.evidenceCount, 0);
    assert.deepEqual(new Set(state.recordedObservationIds), new Set(braidedVergeObservationIds));
  }
});

test("TD007 Recorded revisit is idempotent and retains five equal peers", () => {
  const { controller } = subject();
  dispatch(controller, braidedVergeActions.inspect);
  const first = dispatch(controller, braidedVergeActions.continuities);
  const repeat = dispatch(controller, braidedVergeActions.continuities);
  assert.equal(first.status, "observation_recorded_zero_learning_credit");
  assert.equal(repeat.status, "observation_recorded_idempotent");
  assert.equal(controller.getState().recordedObservationIds.length, 1);
  assert.equal(controller.getState().evidenceCount, 0);
});

test("TD007 missing fields do not consume a future valid token and misses recover blank", () => {
  const { controller } = subject();
  enterLearning(controller);
  const state = controller.getState();
  const intent = createBraidedVergeIntent(state, braidedVergeActions.pythonPrimary, "pointer", "reusable-valid-token");
  const blank = controller.dispatch(intent);
  assert.equal(blank.status, "required_field_missing");
  assert.equal(blank.tokenConsumed, false);
  update(controller, { learnerSource: "from pathlib import Path" });
  const miss = controller.dispatch(intent);
  assert.equal(miss.status, "remediation_required");
  assert.equal(miss.answerIncluded, false);
  assert.equal(miss.state.activeGroup, "bv20_repair");
  const retry = dispatch(controller, braidedVergeActions.retry);
  assert.equal(retry.state.activeGroup, "bv20_python_primary");
  assert.equal(retry.state.form.kind, "python");
});

test("TD007 cleanup failure invalidates only the active file-work owner", () => {
  const { controller } = subject("normal", {
    workspaceOptions: { primary: { simulateCleanupFailure: true } },
  });
  enterLearning(controller);
  update(controller, { learnerSource: pythonSource("primary") });
  const result = dispatch(controller, braidedVergeActions.pythonPrimary);
  assert.equal(result.status, "workspace_cleanup_failed");
  assert.equal(result.state.statusMessageId, "td007:workspace:cleanup-failed");
  assert.equal(result.state.evidenceCount, 0);
  assert.equal(result.state.privateWorkCleared, true);
});

test("TD007 AI-901 primary/retrieval/transfer and explanations finalize independently", () => {
  const answers = Object.fromEntries(rp007Contract.ai901_contract.forms.primary.map((item) => [
    item.id,
    { capability: item.capability, deciding_signal: item.deciding_signal },
  ]));
  assert.equal(evaluateBraidedVergeVision("primary", answers).passed, true);
  const miss = structuredClone(answers);
  miss.P01.capability = "image_generation";
  const failed = evaluateBraidedVergeVision("primary", miss);
  assert.equal(failed.passed, false);
  assert.deepEqual(failed.failed, ["P01.capability"]);
});

test("TD007 full flow preserves eight independent evidence records and strict 10/14 schema", () => {
  const { controller, memory } = subject();
  advanceAll(controller);
  assert.equal(controller.getState().activeGroup, "bv20_review");
  assert.equal(controller.getState().evidenceCount, 8);
  const review = dispatch(controller, braidedVergeActions.review);
  assert.equal(review.state.activeGroup, "bv20_save");
  assert.equal(review.state.reviewRows.length, 13);
  const saved = dispatch(controller, braidedVergeActions.save);
  assert.equal(saved.status, "save_committed_verified_restore", JSON.stringify(saved));
  assert.equal(saved.state.activeGroup, "bv30_restore");
  assert.equal(Object.keys(saved.record).length, 10);
  assert.deepEqual(Object.keys(saved.record.note), [
    "observations", "continuities", "association", "difference", "order",
    "junction", "stewardship", "replicas", "unity", "coordination", "cause",
    "ownership", "purpose", "destination",
  ]);
  assert.equal(saved.record.evidence.length, 8);
  assert.equal(memory.bytes(INTERVAL_WORKS_SAVE_KEY), memory.intervalBytes);
  assert.equal(memory.bytes(MANYFOLD_RETURN_SAVE_KEY), memory.manyfoldBytes);
  assert.equal(memory.bytes(THREE_CURRENT_REACH_SAVE_KEY), memory.threeCurrentBytes);
  assert.equal(saved.record.successor, null);
});

test("TD007 sanitizer rejects extra, reordered, partial, forged, and private records", () => {
  const { controller } = subject();
  advanceAll(controller);
  dispatch(controller, braidedVergeActions.review);
  const saved = dispatch(controller, braidedVergeActions.save).record;
  assert.equal(sanitizeBraidedVergeSave(saved).version, BRAIDED_VERGE_RECORD_VERSION);
  assert.equal(sanitizeBraidedVergeSave({ ...saved, learner_source: "private" }), null);
  assert.equal(sanitizeBraidedVergeSave({ ...saved, note: { ...saved.note, unity: "one" } }), null);
  assert.equal(sanitizeBraidedVergeSave({ ...saved, evidence: saved.evidence.slice(0, 7) }), null);
  const reordered = Object.fromEntries(Object.entries(saved).reverse());
  assert.equal(sanitizeBraidedVergeSave(reordered), null);
});

test("TD007 adapter verifies write/read-back and verified rollback on failures", () => {
  for (const mode of ["write-failure", "readback-failure"]) {
    const { controller, memory } = subject(mode);
    advanceAll(controller);
    dispatch(controller, braidedVergeActions.review);
    const result = dispatch(controller, braidedVergeActions.save);
    assert.equal(result.status, "save_failed_rollback_verified");
    assert.equal(result.rollbackVerified, true);
    assert.equal(memory.bytes(BRAIDED_VERGE_SAVE_KEY), null);
    assert.equal(memory.bytes(INTERVAL_WORKS_SAVE_KEY), memory.intervalBytes);
  }
});

test("TD007 rollback-unverified failure holds progression with only safe returns", () => {
  const memory = createMemory("rollback-unverified");
  const storage = {
    ...memory.storage,
    getItem(key) {
      if (key === BRAIDED_VERGE_SAVE_KEY && memory.storage.getItem(key) !== null) return "{";
      return memory.storage.getItem(key);
    },
  };
  const adapter = createBraidedVergeStorageAdapter(storage, {
    intervalRecord: memory.predecessor,
    intervalBytes: memory.intervalBytes,
    manyfoldBytes: memory.manyfoldBytes,
    threeCurrentBytes: memory.threeCurrentBytes,
  });
  const controller = createBraidedVergeNormalController({
    predecessorRecord: memory.predecessor,
    predecessorBytes: memory.intervalBytes,
    readPredecessorBytes: () => memory.bytes(INTERVAL_WORKS_SAVE_KEY),
    manyfoldBytes: memory.manyfoldBytes,
    readManyfoldBytes: () => memory.bytes(MANYFOLD_RETURN_SAVE_KEY),
    threeCurrentBytes: memory.threeCurrentBytes,
    readThreeCurrentBytes: () => memory.bytes(THREE_CURRENT_REACH_SAVE_KEY),
    entryIntent: createBraidedVergeRouteIntent(braidedVergeActions.route, "pointer", "rollback-entry-token"),
    adapter,
  });
  advanceAll(controller);
  dispatch(controller, braidedVergeActions.review);
  const result = dispatch(controller, braidedVergeActions.save);
  assert.equal(result.status, "save_failed_rollback_unverified");
  assert.equal(result.state.activeGroup, "bv20_rollback_unverified");
  assert.deepEqual(result.state.availableActions, [
    braidedVergeActions.returnInterval,
    braidedVergeActions.returnThreshold,
  ]);
});

test("TD007 exact restore is heading-first and replay-free; invalid restore remains IW-30", () => {
  const completed = subject();
  advanceAll(completed.controller);
  dispatch(completed.controller, braidedVergeActions.review);
  const saved = dispatch(completed.controller, braidedVergeActions.save).record;
  const restored = createBraidedVergeNormalController({
    predecessorRecord: completed.memory.predecessor,
    predecessorBytes: completed.memory.intervalBytes,
    readPredecessorBytes: () => completed.memory.bytes(INTERVAL_WORKS_SAVE_KEY),
    manyfoldBytes: completed.memory.manyfoldBytes,
    readManyfoldBytes: () => completed.memory.bytes(MANYFOLD_RETURN_SAVE_KEY),
    threeCurrentBytes: completed.memory.threeCurrentBytes,
    readThreeCurrentBytes: () => completed.memory.bytes(THREE_CURRENT_REACH_SAVE_KEY),
    restoredRecord: saved,
    adapter: completed.memory.adapter,
  });
  assert.equal(restored.getState().activeGroup, "bv30_restore");
  assert.equal(restored.getState().focusIntent.target, "bv30-restore-heading");
  assert.deepEqual(restored.getState().replayedEvents, []);
  const invalid = createBraidedVergeNormalController({
    predecessorRecord: completed.memory.predecessor,
    predecessorBytes: completed.memory.intervalBytes,
    restoredRecord: { ...saved, successor: "RP-008" },
  });
  assert.equal(invalid.getState().boardState, "SC-07");
  assert.equal(invalid.getRecord(), null);
});

test("TD007 early/final returns are write-free, replay-free, and target only approved anchors", () => {
  const early = subject();
  const interval = dispatch(early.controller, braidedVergeActions.returnInterval);
  assert.equal(interval.status, "returned_to_interval_works_write_free");
  assert.equal(interval.route.writePerformed, false);
  assert.deepEqual(interval.route.replayedEvents, []);
  const final = subject();
  advanceAll(final.controller);
  dispatch(final.controller, braidedVergeActions.review);
  dispatch(final.controller, braidedVergeActions.save);
  const threshold = dispatch(final.controller, braidedVergeActions.returnThreshold);
  assert.equal(threshold.status, "returned_to_city_threshold_write_free");
  assert.equal(threshold.route.target, "CITY_THRESHOLD");
  assert.equal(threshold.route.successor, null);
});

test("TD007 scene resolver exposes only the two registered SC-08 placeholder seams", () => {
  const { controller } = subject();
  assert.equal(resolveBraidedVergeWorldScene(controller.getState()).role, "SC-08-PANORAMA-MASTER");
  dispatch(controller, braidedVergeActions.inspect);
  dispatch(controller, braidedVergeActions.difference);
  assert.equal(resolveBraidedVergeWorldScene(controller.getState()).role, "SC-08-CONTACT-DETAIL-MASTER");
  assert.equal(resolveBraidedVergeWorldScene(controller.getState()).cropId, "sc08-detail-difference");
  assert.equal(resolveBraidedVergeWorldScene({ boardState: "SC-09", activeGroup: "rp008" }), null);
});

test("TD007 hard stop never exposes RP-008, successor, access, authority, or world effect", () => {
  const { controller } = subject();
  advanceAll(controller);
  dispatch(controller, braidedVergeActions.review);
  const saved = dispatch(controller, braidedVergeActions.save);
  assert.equal(saved.state.phase, "BV-30 VERIFY + RETURN");
  assert.equal(saved.state.successor, null);
  assert.equal(saved.state.authorityGranted, false);
  assert.equal(saved.state.externalActionEnabled, false);
  assert.equal(saved.state.worldStateChanged, false);
  assert.doesNotMatch(JSON.stringify(saved.state), /RP-008|rp008|successor_route|access_granted|world_response/i);
});
