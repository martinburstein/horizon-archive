import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import rp005Contract from "../../curriculum/readiness/RP-005/contract.json" with { type: "json" };
import {
  MANYFOLD_RETURN_CONTROLLER_VERSION,
  MANYFOLD_RETURN_RECORD_VERSION,
  MANYFOLD_RETURN_SAVE_KEY,
  MANYFOLD_RETURN_SHELL_VERSION,
  manyfoldReturnActions,
  manyfoldReturnObservationIds,
  sanitizeManyfoldReturnSave,
} from "../src/ManyfoldReturnNormal.js";
import { THREE_CURRENT_REACH_SAVE_KEY } from "../src/ThreeCurrentReachNormal.js";
import {
  INTERVAL_WORKS_RECORD_VERSION,
  INTERVAL_WORKS_SAVE_KEY,
  createIntervalWorksIntent,
  createIntervalWorksNormalController,
  createIntervalWorksStorageAdapter,
  intervalWorksActions,
  intervalWorksExplanationAnswers,
  intervalWorksModalities,
  intervalWorksObservationIds,
  intervalWorksPythonTraceAnswers,
  resolveIntervalWorksWorldScene,
  sanitizeIntervalWorksSave,
} from "../src/IntervalWorksNormal.js";

const primarySource = readFileSync(
  new URL("../../curriculum/readiness/RP-006/reference_primary.py", import.meta.url),
  "utf8",
);
const transferSource = readFileSync(
  new URL("../../curriculum/readiness/RP-006/reference_transfer.py", import.meta.url),
  "utf8",
);
const speechAnswers = Object.fromEntries(["primary", "retrieval", "transfer"].map((form) => [
  form,
  JSON.parse(readFileSync(
    new URL(`../../curriculum/readiness/RP-006/reference_${form}_answers.json`, import.meta.url),
    "utf8",
  )),
]));
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

function manyfoldRecord() {
  const python = rp005Contract.python_contract.checks;
  const aiDimensions = rp005Contract.ai901_contract.dimensions;
  return sanitizeManyfoldReturnSave({
    version: MANYFOLD_RETURN_RECORD_VERSION,
    packetId: "RP-005",
    mappingId: "RP005-A3-MANYFOLD-RETURN",
    checkpoint: "manyfold_return_complete",
    continuation: "continuation",
    cityStateDelta: null,
    externalStateDelta: null,
    successor: null,
    note: {
      observations: [...manyfoldReturnObservationIds],
      recurrence: "exposed_recurring_range_observed",
      divergence: "one_bounded_divergence_observed",
      unavailable: "sealed_branch_unavailable",
      stewardship: "layered_stewardship_observed",
      replicas: "sanitized_precomputed_only",
      truth: null,
      purpose: null,
      destination: null,
    },
    evidence: [
      evidence("RP-005", "RP005-A3-MANYFOLD-RETURN", "PY-012", "primary", python),
      evidence("RP-005", "RP005-A3-MANYFOLD-RETURN", "PY-012", "trace", ["functionName", "parameters", "body", "returnValue", "callSite", "noneBoundary"]),
      evidence("RP-005", "RP005-A3-MANYFOLD-RETURN", "PY-012", "transfer", python),
      ...["primary", "retrieval", "transfer"].map((form) => evidence(
        "RP-005", "RP005-A3-MANYFOLD-RETURN", "RP005-TEXT-01", form,
        rp005Contract.ai901_contract.forms[form].flatMap((item) => aiDimensions.map((dimension) => `${item.id}.${dimension}`)),
      )),
      evidence("RP-005", "RP005-A3-MANYFOLD-RETURN", "RP005-TEXT-01", "requested_output_explanation", ["requested_output"]),
      evidence("RP-005", "RP005-A3-MANYFOLD-RETURN", "RP005-TEXT-01", "truth_boundary_explanation", ["truth_boundary"]),
    ],
  });
}

function memoryStorage(predecessor, mode = "normal") {
  const manyfoldBytes = JSON.stringify(predecessor);
  const threeCurrentBytes = "exact-td004-bytes";
  const values = new Map([
    [MANYFOLD_RETURN_SAVE_KEY, manyfoldBytes],
    [THREE_CURRENT_REACH_SAVE_KEY, threeCurrentBytes],
  ]);
  let changed = false;
  return {
    getItem(key) {
      if (mode === "readback-fail" && key === INTERVAL_WORKS_SAVE_KEY && changed) return "{";
      return values.has(key) ? values.get(key) : null;
    },
    setItem(key, value) {
      if (mode === "write-fail" && key === INTERVAL_WORKS_SAVE_KEY) throw new Error("quota");
      values.set(key, value);
      if (key === INTERVAL_WORKS_SAVE_KEY) changed = true;
    },
    removeItem(key) {
      values.delete(key);
      if (key === INTERVAL_WORKS_SAVE_KEY) changed = false;
    },
    bytes: (key) => values.has(key) ? values.get(key) : null,
    manyfoldBytes,
    threeCurrentBytes,
  };
}

function routeIntent(token = "td006-route-token", modality = "pointer") {
  return {
    mode: "campaign",
    shellVersion: MANYFOLD_RETURN_SHELL_VERSION,
    controllerVersion: MANYFOLD_RETURN_CONTROLLER_VERSION,
    packetId: "RP-005",
    activeGroupId: "mf30_restore",
    expectedOwner: "PILOT // EXPEDITION NAVIGATION",
    allowlistedActionId: manyfoldReturnActions.intervalWorks,
    activationKind: modality,
    opaqueFreshEventToken: token,
  };
}

function options(overrides = {}) {
  const predecessorRecord = manyfoldRecord();
  const storage = overrides.storage ?? memoryStorage(predecessorRecord);
  return {
    predecessorRecord,
    predecessorBytes: storage.manyfoldBytes,
    readPredecessorBytes: () => storage.bytes(MANYFOLD_RETURN_SAVE_KEY),
    threeCurrentBytes: storage.threeCurrentBytes,
    readThreeCurrentBytes: () => storage.bytes(THREE_CURRENT_REACH_SAVE_KEY),
    entryIntent: routeIntent(),
    adapter: createIntervalWorksStorageAdapter(storage, {
      manyfoldRecord: predecessorRecord,
      manyfoldBytes: storage.manyfoldBytes,
      threeCurrentBytes: storage.threeCurrentBytes,
    }),
    ...overrides,
    storage,
  };
}

function dispatch(controller, action, token, modality = "pointer") {
  return controller.dispatch(createIntervalWorksIntent(controller.getState(), action, modality, token));
}
function update(controller, values) {
  for (const [key, value] of Object.entries(values)) {
    assert.equal(controller.updateField(key, value).status, "field_updated_private");
  }
}
function observe(controller, order = [
  intervalWorksActions.overlap,
  intervalWorksActions.changedPersistent,
  intervalWorksActions.closedInterval,
  intervalWorksActions.stewardship,
]) {
  assert.equal(dispatch(controller, intervalWorksActions.inspect, "inspect-token").status, "material_order_visible_zero_evidence");
  order.forEach((action, index) => dispatch(controller, action, `observation-${index}-${action.length}`));
  assert.equal(controller.getState().activeGroup, "iw20_python_primary");
}
function completeLearning(controller) {
  update(controller, { learnerSource: primarySource });
  assert.equal(dispatch(controller, intervalWorksActions.pythonPrimary, "py-primary-token").status, "primary_finalized");
  update(controller, intervalWorksPythonTraceAnswers);
  assert.equal(dispatch(controller, intervalWorksActions.pythonTrace, "py-trace-token").status, "trace_finalized");
  update(controller, { learnerSource: transferSource });
  assert.equal(dispatch(controller, intervalWorksActions.pythonTransfer, "py-transfer-token").status, "transfer_finalized");
  for (const form of ["primary", "retrieval", "transfer"]) {
    for (const [caseId, dimensions] of Object.entries(speechAnswers[form])) {
      for (const [dimension, value] of Object.entries(dimensions)) {
        controller.updateField(`${caseId}.${dimension}`, value);
      }
    }
    const action = intervalWorksActions[`speech${form[0].toUpperCase()}${form.slice(1)}`];
    assert.equal(dispatch(controller, action, `speech-${form}-token`).status, `${form}_finalized`);
  }
  update(controller, { directionBoundary: intervalWorksExplanationAnswers.directionBoundary });
  dispatch(controller, intervalWorksActions.directionBoundary, "direction-token");
  update(controller, { causationBoundary: intervalWorksExplanationAnswers.causationBoundary });
  dispatch(controller, intervalWorksActions.causationBoundary, "causation-token");
  assert.equal(controller.getState().activeGroup, "iw20_review");
}
function completeAndSave(controller) {
  observe(controller);
  completeLearning(controller);
  dispatch(controller, intervalWorksActions.review, "review-token");
  return dispatch(controller, intervalWorksActions.save, "save-token");
}
function permutations(items) {
  return items.length === 1 ? [items]
    : items.flatMap((item) => permutations(items.filter((candidate) => candidate !== item)).map((rest) => [item, ...rest]));
}

test("TD006 route accepts seven modalities, validates owner, and consumes once", () => {
  intervalWorksModalities.forEach((modality, index) => {
    const good = createIntervalWorksNormalController(options({
      entryIntent: routeIntent(`route-${index}-token`, modality),
    }));
    assert.equal(good.getState().activeGroup, "iw00_orientation");
    assert.equal(good.getState().evidenceCount, 0);
    const bad = createIntervalWorksNormalController(options({
      entryIntent: { ...routeIntent(`bad-${index}-token`, modality), expectedOwner: "SCENE" },
    }));
    assert.equal(bad.getState().boardState, "SC-06");
  });
});

test("TD006 all twenty-four observation orders converge and revisits are idempotent", () => {
  const actions = [
    intervalWorksActions.overlap,
    intervalWorksActions.changedPersistent,
    intervalWorksActions.closedInterval,
    intervalWorksActions.stewardship,
  ];
  for (const [index, order] of permutations(actions).entries()) {
    const controller = createIntervalWorksNormalController(options());
    observe(controller, order);
    assert.deepEqual([...controller.getState().recordedObservationIds].sort(), [...intervalWorksObservationIds].sort(), `order ${index}`);
    assert.equal(controller.getState().evidenceCount, 0);
  }
  const controller = createIntervalWorksNormalController(options());
  dispatch(controller, intervalWorksActions.inspect, "inspect-revisit");
  dispatch(controller, intervalWorksActions.overlap, "first-overlap");
  assert.equal(dispatch(controller, intervalWorksActions.overlap, "second-overlap").status, "observation_recorded_idempotent");
  assert.equal(controller.getState().recordedObservationIds.length, 1);
});

test("TD006 scene resolver switches panorama/cross-section/panorama and alt role is state-only", () => {
  const controller = createIntervalWorksNormalController(options());
  assert.equal(resolveIntervalWorksWorldScene(controller.getState()).role, "SC-07-PANORAMA-MASTER");
  dispatch(controller, intervalWorksActions.inspect, "scene-inspect");
  assert.equal(resolveIntervalWorksWorldScene(controller.getState()).role, "SC-07-CROSSSECTION-MASTER");
  [
    intervalWorksActions.overlap,
    intervalWorksActions.changedPersistent,
    intervalWorksActions.closedInterval,
    intervalWorksActions.stewardship,
  ].forEach((action, index) => dispatch(controller, action, `scene-${index}-token`));
  assert.equal(resolveIntervalWorksWorldScene(controller.getState()).role, "SC-07-PANORAMA-MASTER");
});

test("TD006 independent learning chain saves exact record and restores without replay", () => {
  const item = options();
  const controller = createIntervalWorksNormalController(item);
  const result = completeAndSave(controller);
  assert.equal(result.status, "save_committed_verified_restore");
  assert.equal(controller.getState().activeGroup, "iw30_restore");
  assert.deepEqual(controller.getState().replayedEvents, []);
  assert.equal(item.storage.bytes(MANYFOLD_RETURN_SAVE_KEY), item.storage.manyfoldBytes);
  assert.equal(item.storage.bytes(THREE_CURRENT_REACH_SAVE_KEY), item.storage.threeCurrentBytes);
  const safe = sanitizeIntervalWorksSave(JSON.parse(item.storage.bytes(INTERVAL_WORKS_SAVE_KEY)));
  assert.equal(Object.keys(safe).length, 10);
  assert.equal(Object.keys(safe.note).length, 11);
  assert.equal(safe.evidence.length, 8);
  assert.deepEqual(safe.note.observations, intervalWorksObservationIds);
  const restored = createIntervalWorksNormalController({ ...item, restoredRecord: safe, entryIntent: null });
  assert.equal(restored.getState().activeGroup, "iw30_restore");
  assert.equal(restored.getState().focusIntent.target, "iw30-restore-heading");
  assert.deepEqual(restored.getState().replayedEvents, []);
});

test("TD006 misses are local, answer-free, and retry is blank", () => {
  const controller = createIntervalWorksNormalController(options());
  observe(controller);
  update(controller, { learnerSource: "import itertools\nsequence = []" });
  const miss = dispatch(controller, intervalWorksActions.pythonPrimary, "miss-token");
  assert.equal(miss.status, "remediation_required");
  assert.equal(miss.answerIncluded, false);
  assert.equal(controller.getState().form, null);
  const retry = dispatch(controller, intervalWorksActions.retry, "retry-token");
  assert.equal(retry.status, "fresh_blank_retry_visible");
  assert.equal(controller.getState().form.form, "primary");
  assert.equal(controller.getState().evidenceCount, 0);
});

test("TD006 sanitation, write failure, read-back failure, and predecessor mutation fail closed", () => {
  const validItem = options();
  const validController = createIntervalWorksNormalController(validItem);
  const valid = completeAndSave(validController).record;
  assert.equal(sanitizeIntervalWorksSave({ ...valid, private_notes: "no" }), null);
  assert.equal(sanitizeIntervalWorksSave({ ...valid, successor: "RP-007" }), null);
  assert.equal(sanitizeIntervalWorksSave({ ...valid, note: { ...valid.note, cause: "repair" } }), null);

  for (const mode of ["write-fail", "readback-fail"]) {
    const predecessor = manyfoldRecord();
    const storage = memoryStorage(predecessor, mode);
    const controller = createIntervalWorksNormalController(options({ storage }));
    observe(controller);
    completeLearning(controller);
    dispatch(controller, intervalWorksActions.review, `${mode}-review`);
    const result = dispatch(controller, intervalWorksActions.save, `${mode}-save`);
    assert.equal(result.status, "save_failed_rollback_verified");
    assert.equal(storage.bytes(INTERVAL_WORKS_SAVE_KEY), null);
    assert.equal(storage.bytes(MANYFOLD_RETURN_SAVE_KEY), storage.manyfoldBytes);
  }

  const changed = options();
  const controller = createIntervalWorksNormalController(changed);
  changed.storage.setItem(MANYFOLD_RETURN_SAVE_KEY, "changed");
  assert.equal(dispatch(controller, intervalWorksActions.inspect, "changed-predecessor").reason, "predecessor_rejected");
  assert.equal(controller.getState().boardState, "SC-07");
  assert.equal(controller.getState().evidenceCount, 0);
});

test("TD006 returns are write-free and IW-30 exposes no successor route", () => {
  const item = options();
  const controller = createIntervalWorksNormalController(item);
  const early = dispatch(controller, intervalWorksActions.returnManyfold, "return-manyfold");
  assert.equal(early.status, "returned_to_manyfold_return_write_free");
  assert.equal(early.route.writePerformed, false);
  assert.equal(early.route.successor, null);

  const finalController = createIntervalWorksNormalController(options());
  completeAndSave(finalController);
  const final = dispatch(finalController, intervalWorksActions.returnThreshold, "return-threshold");
  assert.equal(final.status, "returned_to_city_threshold_write_free");
  assert.equal(final.route.writePerformed, false);
  assert.equal(final.route.successor, null);
  assert.equal(Object.values(intervalWorksActions).some((action) => /RP-007|BRAIDED/i.test(action)), false);
  assert.equal(INTERVAL_WORKS_RECORD_VERSION, "rp006.interval-works-save.v1");
});
