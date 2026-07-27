import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import rp004Contract from "../../curriculum/readiness/RP-004/contract.json" with { type: "json" };
import {
  THREE_CURRENT_REACH_RECORD_VERSION,
  THREE_CURRENT_REACH_SAVE_KEY,
  sanitizeThreeCurrentReachSave,
} from "../src/ThreeCurrentReachNormal.js";
import {
  MANYFOLD_RETURN_RECORD_VERSION,
  MANYFOLD_RETURN_SAVE_KEY,
  createManyfoldReturnIntent,
  createManyfoldReturnNormalController,
  createManyfoldReturnStorageAdapter,
  manyfoldReturnActions,
  manyfoldReturnModalities,
  manyfoldReturnObservationIds,
  resolveManyfoldReturnWorldScene,
  sanitizeManyfoldReturnSave,
} from "../src/ManyfoldReturnNormal.js";

const primarySource = readFileSync(
  new URL("../../curriculum/readiness/RP-005/reference_primary.py", import.meta.url),
  "utf8",
);
const transferSource = readFileSync(
  new URL("../../curriculum/readiness/RP-005/reference_transfer.py", import.meta.url),
  "utf8",
);
const textAnswers = Object.fromEntries(["primary", "retrieval", "transfer"].map((form) => [
  form,
  JSON.parse(readFileSync(
    new URL(`../../curriculum/readiness/RP-005/reference_${form}_answers.json`, import.meta.url),
    "utf8",
  )),
]));
const traceAnswers = {
  functionName: "build_summary",
  parameters: "replica_summary_and_sealed_reading",
  body: "construct_the_four_key_dictionary_from_parameters",
  returnValue: "return_the_nonjudgmental_summary_dictionary",
  callSite: "call_once_with_the_supplied_inputs",
  noneBoundary: "sealed_and_judgment_remain_none",
};
const explanationAnswers = {
  requestedOutput: "the_requested_output_selects_the_text_analysis_technique",
  truthBoundary: "summarization_does_not_establish_truth_or_quality",
};
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

function td004Record() {
  const python = rp004Contract.python_contract.checks;
  const dimensions = rp004Contract.ai901_contract.dimensions;
  const record = {
    version: THREE_CURRENT_REACH_RECORD_VERSION,
    packetId: "RP-004",
    mappingId: "RP004-A3-THREE-CURRENT-REACH",
    checkpoint: "three_current_reach_complete",
    continuation: "continuation",
    cityStateDelta: null,
    externalStateDelta: null,
    successor: null,
    note: {
      relations: [
        "suspended_matter_porous_relation",
        "cyclic_pressure_tensioned_relation",
        "conducted_heat_jointed_relation",
      ],
      commonReturn: "observed_purpose_unknown",
      correspondence: "sanitized_replicas_only",
      purpose: null,
    },
    evidence: [
      evidence("RP-004", "RP004-A3-THREE-CURRENT-REACH", "PY-011", "primary", python),
      evidence("RP-004", "RP004-A3-THREE-CURRENT-REACH", "PY-011", "retrieval", ["iterable", "currentItem", "loopBody", "outputCount", "purposeBoundary"]),
      evidence("RP-004", "RP004-A3-THREE-CURRENT-REACH", "PY-011", "transfer", python),
      ...["primary", "retrieval", "transfer"].map((form) => evidence(
        "RP-004", "RP004-A3-THREE-CURRENT-REACH", "RP004-WORKLOAD-01", form,
        rp004Contract.ai901_contract.forms[form].flatMap((item) => dimensions.map((dimension) => `${item.id}.${dimension}`)),
      )),
      evidence("RP-004", "RP004-A3-THREE-CURRENT-REACH", "RP004-WORKLOAD-01", "modality_explanation", ["modality_boundary"]),
      evidence("RP-004", "RP004-A3-THREE-CURRENT-REACH", "RP004-WORKLOAD-01", "agentic_explanation", ["agentic_boundary"]),
    ],
  };
  return sanitizeThreeCurrentReachSave(record);
}

function memoryStorage(td004, mode = "normal") {
  const values = new Map([[THREE_CURRENT_REACH_SAVE_KEY, JSON.stringify(td004)]]);
  let changed = false;
  return {
    getItem(key) {
      if (mode === "readback-fail" && key === MANYFOLD_RETURN_SAVE_KEY && changed) return "{";
      return values.has(key) ? values.get(key) : null;
    },
    setItem(key, value) {
      if (mode === "write-fail" && key === MANYFOLD_RETURN_SAVE_KEY) throw new Error("quota");
      values.set(key, value);
      if (key === MANYFOLD_RETURN_SAVE_KEY) changed = true;
    },
    removeItem(key) {
      values.delete(key);
      if (key === MANYFOLD_RETURN_SAVE_KEY) changed = false;
    },
    bytes: (key) => values.has(key) ? values.get(key) : null,
  };
}

function options(overrides = {}) {
  const predecessorRecord = td004Record();
  const predecessorBytes = JSON.stringify(predecessorRecord);
  const storage = overrides.storage ?? memoryStorage(predecessorRecord);
  return {
    predecessorRecord,
    predecessorBytes,
    readPredecessorBytes: () => storage.bytes(THREE_CURRENT_REACH_SAVE_KEY),
    adapter: createManyfoldReturnStorageAdapter(storage, {
      record: predecessorRecord,
      bytes: predecessorBytes,
    }),
    ...overrides,
    storage,
  };
}
function dispatch(controller, action, token, modality = "pointer") {
  return controller.dispatch(createManyfoldReturnIntent(controller.getState(), action, modality, token));
}
function update(controller, values) {
  for (const [key, value] of Object.entries(values)) {
    assert.equal(controller.updateField(key, value).status, "field_updated_private");
  }
}
function observe(controller, order = Object.values({
  recurrence: manyfoldReturnActions.recurrence,
  divergence: manyfoldReturnActions.divergence,
  sealed: manyfoldReturnActions.sealed,
  stewardship: manyfoldReturnActions.stewardship,
})) {
  dispatch(controller, manyfoldReturnActions.orient, "orient-token");
  dispatch(controller, manyfoldReturnActions.inspect, "inspect-token");
  order.forEach((action, index) => dispatch(controller, action, `observation-${index}-${action.length}`));
  assert.equal(controller.getState().activeGroup, "mf20_python_primary");
}
function completeLearning(controller) {
  update(controller, { learnerSource: primarySource });
  assert.equal(dispatch(controller, manyfoldReturnActions.pythonPrimary, "py-primary-token").status, "primary_finalized");
  assert.equal(controller.getState().activeGroup, "mf20_python_trace");
  update(controller, traceAnswers);
  assert.equal(dispatch(controller, manyfoldReturnActions.pythonTrace, "py-trace-token").status, "trace_finalized");
  update(controller, { learnerSource: transferSource });
  dispatch(controller, manyfoldReturnActions.pythonTransfer, "py-transfer-token");
  for (const form of ["primary", "retrieval", "transfer"]) {
    for (const [caseId, dimensions] of Object.entries(textAnswers[form])) {
      for (const [dimension, value] of Object.entries(dimensions)) {
        controller.updateField(`${caseId}.${dimension}`, value);
      }
    }
    dispatch(controller, manyfoldReturnActions[`text${form[0].toUpperCase()}${form.slice(1)}`], `text-${form}-token`);
  }
  update(controller, { requestedOutput: explanationAnswers.requestedOutput });
  dispatch(controller, manyfoldReturnActions.requestedOutput, "requested-token");
  update(controller, { truthBoundary: explanationAnswers.truthBoundary });
  dispatch(controller, manyfoldReturnActions.truthBoundary, "truth-token");
  assert.equal(controller.getState().activeGroup, "mf20_review");
}
function completeAndSave(controller) {
  observe(controller);
  completeLearning(controller);
  dispatch(controller, manyfoldReturnActions.review, "review-token");
  return dispatch(controller, manyfoldReturnActions.save, "save-token");
}

test("TD005 seven modalities share exact intent validation and one-hit behavior", () => {
  manyfoldReturnModalities.forEach((modality, index) => {
    const controller = createManyfoldReturnNormalController(options());
    const intent = createManyfoldReturnIntent(controller.getState(), manyfoldReturnActions.orient, modality, `modality-${index}-token`);
    assert.equal(controller.dispatch({ ...intent, expectedOwner: "SYSTEM" }).reason, "intent_rejected");
    assert.equal(controller.dispatch(intent).status, "manyfold_oriented_zero_evidence");
    assert.equal(controller.dispatch(intent).reason, "one_hit_only");
  });
});

test("TD005 all twenty-four observation orders converge to canonical save order", () => {
  const actions = [manyfoldReturnActions.recurrence, manyfoldReturnActions.divergence, manyfoldReturnActions.sealed, manyfoldReturnActions.stewardship];
  const permutations = (items) => items.length === 1 ? [items] : items.flatMap((item) => permutations(items.filter((candidate) => candidate !== item)).map((rest) => [item, ...rest]));
  for (const [index, order] of permutations(actions).entries()) {
    const controller = createManyfoldReturnNormalController(options());
    observe(controller, order);
    assert.deepEqual([...controller.getState().recordedObservationIds].sort(), [...manyfoldReturnObservationIds].sort());
    assert.equal(controller.getState().evidenceCount, 0, `order ${index}`);
  }
});

test("TD005 scene resolver is state-only and switches panorama/detail/panorama", () => {
  const controller = createManyfoldReturnNormalController(options());
  assert.equal(resolveManyfoldReturnWorldScene(controller.getState()).role, "SC-06-PANORAMA-MASTER");
  dispatch(controller, manyfoldReturnActions.orient, "scene-orient");
  dispatch(controller, manyfoldReturnActions.inspect, "scene-inspect");
  assert.equal(resolveManyfoldReturnWorldScene(controller.getState()).role, "SC-06-DETAIL-MASTER");
  [
    manyfoldReturnActions.recurrence, manyfoldReturnActions.divergence,
    manyfoldReturnActions.sealed, manyfoldReturnActions.stewardship,
  ].forEach((action, index) => dispatch(controller, action, `scene-observe-${index}`));
  assert.equal(resolveManyfoldReturnWorldScene(controller.getState()).role, "SC-06-PANORAMA-MASTER");
  assert.equal(resolveManyfoldReturnWorldScene({ ...controller.getState(), boardState: "SC-05" }), null);
});

test("TD005 misses expose public IDs only and retry is genuinely blank", () => {
  const controller = createManyfoldReturnNormalController(options());
  observe(controller);
  update(controller, { learnerSource: "PRIVATE wrong" });
  const miss = dispatch(controller, manyfoldReturnActions.pythonPrimary, "miss-token");
  assert.equal(miss.answerIncluded, false);
  assert.ok(miss.failedIds.length > 0);
  assert.doesNotMatch(JSON.stringify(miss), /PRIVATE wrong/);
  const retry = dispatch(controller, manyfoldReturnActions.retry, "retry-token");
  assert.equal(retry.state.form.kind, "python");
  assert.doesNotMatch(JSON.stringify(retry), /PRIVATE wrong/);
});

test("TD005 empty forms keep their fresh token and focus the first labelled field", () => {
  const controller = createManyfoldReturnNormalController(options());
  observe(controller);
  const candidate = createManyfoldReturnIntent(
    controller.getState(),
    manyfoldReturnActions.pythonPrimary,
    "keyboard_enter",
    "blank-primary-token",
  );
  const blank = controller.dispatch(candidate);
  assert.equal(blank.status, "required_field_missing");
  assert.equal(blank.state.focusIntent.target, "mf20-python-primary-editor");
  update(controller, { learnerSource: primarySource });
  assert.equal(controller.dispatch(candidate).status, "primary_finalized");
});

test("TD005 independent chain yields exactly five review responsibilities", () => {
  const controller = createManyfoldReturnNormalController(options());
  observe(controller);
  completeLearning(controller);
  const reviewed = dispatch(controller, manyfoldReturnActions.review, "five-review-token");
  assert.equal(reviewed.state.reviewRows.length, 5);
  assert.deepEqual(reviewed.state.reviewRows.map((row) => row.id), ["physical", "python", "text", "requested", "truth"]);
  assert.equal(reviewed.state.evidenceCount, 8);
});

test("TD005 exact atomic save and no-replay restore preserve TD004 raw bytes", () => {
  const setup = options();
  const td004Before = setup.storage.bytes(THREE_CURRENT_REACH_SAVE_KEY);
  const controller = createManyfoldReturnNormalController(setup);
  const saved = completeAndSave(controller);
  assert.equal(saved.status, "save_committed_verified_restore");
  assert.equal(saved.record.version, MANYFOLD_RETURN_RECORD_VERSION);
  assert.deepEqual(Object.keys(saved.record), [
    "version", "packetId", "mappingId", "checkpoint", "continuation",
    "cityStateDelta", "externalStateDelta", "successor", "note", "evidence",
  ]);
  assert.deepEqual(Object.keys(saved.record.note), [
    "observations", "recurrence", "divergence", "unavailable", "stewardship",
    "replicas", "truth", "purpose", "destination",
  ]);
  assert.deepEqual(saved.record.note.observations, manyfoldReturnObservationIds);
  assert.equal(saved.record.note.truth, null);
  assert.equal(saved.record.note.purpose, null);
  assert.equal(saved.record.note.destination, null);
  assert.equal(saved.record.evidence.length, 8);
  assert.equal(setup.storage.bytes(THREE_CURRENT_REACH_SAVE_KEY), td004Before);
  assert.ok(sanitizeManyfoldReturnSave(JSON.parse(setup.storage.bytes(MANYFOLD_RETURN_SAVE_KEY))));
  const restored = createManyfoldReturnNormalController({ ...setup, restoredRecord: saved.record });
  assert.equal(restored.getState().activeGroup, "mf30_restore");
  assert.deepEqual(restored.getState().replayedEvents, []);
});

test("TD005 write and readback failures verify rollback without touching TD004", () => {
  for (const mode of ["write-fail", "readback-fail"]) {
    const predecessor = td004Record();
    const storage = memoryStorage(predecessor, mode);
    const setup = options({ storage });
    const td004Before = storage.bytes(THREE_CURRENT_REACH_SAVE_KEY);
    const controller = createManyfoldReturnNormalController(setup);
    observe(controller); completeLearning(controller);
    dispatch(controller, manyfoldReturnActions.review, `${mode}-review`);
    const result = dispatch(controller, manyfoldReturnActions.save, `${mode}-save`);
    assert.equal(result.status, "save_failed_rollback_verified");
    assert.equal(storage.bytes(MANYFOLD_RETURN_SAVE_KEY), null);
    assert.equal(storage.bytes(THREE_CURRENT_REACH_SAVE_KEY), td004Before);
  }
});

test("TD005 malformed prior RP005 bytes fail closed without overwrite", () => {
  const predecessor = td004Record();
  const storage = memoryStorage(predecessor);
  storage.setItem(MANYFOLD_RETURN_SAVE_KEY, "{");
  const setup = options({ storage });
  const controller = createManyfoldReturnNormalController(setup);
  observe(controller); completeLearning(controller);
  dispatch(controller, manyfoldReturnActions.review, "malformed-review");
  const result = dispatch(controller, manyfoldReturnActions.save, "malformed-save");
  assert.equal(result.status, "save_failed_rollback_verified");
  assert.equal(storage.bytes(MANYFOLD_RETURN_SAVE_KEY), "{");
});

test("TD005 returns are write-free and hard stop records no destination or successor", () => {
  const setup = options();
  const early = createManyfoldReturnNormalController(setup);
  const returned = dispatch(early, manyfoldReturnActions.returnThreeCurrent, "return-tr40-token");
  assert.equal(returned.route.target, "RP-004");
  assert.equal(returned.route.writePerformed, false);
  assert.equal(setup.storage.bytes(MANYFOLD_RETURN_SAVE_KEY), null);
  const complete = createManyfoldReturnNormalController(options());
  completeAndSave(complete);
  const continuation = dispatch(complete, manyfoldReturnActions.continuation, "continuation-token");
  assert.equal(continuation.routeOpened, false);
  assert.equal(continuation.destination, null);
  assert.equal(continuation.successor, null);
});

test("TD005 Tour, wrong predecessor bytes, and contaminated records remain closed", () => {
  const tour = createManyfoldReturnNormalController(options({ mode: "demo_tour" }));
  assert.equal(dispatch(tour, manyfoldReturnActions.orient, "tour-token").reason, "tour_route_closed");
  const setup = options();
  const changed = createManyfoldReturnNormalController({ ...setup, readPredecessorBytes: () => "changed" });
  assert.equal(dispatch(changed, manyfoldReturnActions.orient, "changed-token").reason, "predecessor_rejected");
  const saved = completeAndSave(createManyfoldReturnNormalController(options())).record;
  assert.equal(sanitizeManyfoldReturnSave({ ...saved, private_notes: "forbidden" }), null);
});
