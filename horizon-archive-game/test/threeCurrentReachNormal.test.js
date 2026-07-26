import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  THREE_CURRENT_REACH_RECORD_VERSION,
  THREE_CURRENT_REACH_SAVE_KEY,
  createThreeCurrentReachIntent,
  createThreeCurrentReachNormalController,
  createThreeCurrentReachStorageAdapter,
  sanitizeThreeCurrentReachSave,
  threeCurrentReachActions,
  threeCurrentReachModalities,
  threeCurrentReachObservationIds,
} from "../src/ThreeCurrentReachNormal.js";
import { exactReviewSaveRecord } from "./calibrationMarginReviewSaveFixtures.js";

const primarySource = readFileSync(
  new URL("../../curriculum/readiness/RP-004/reference_primary.py", import.meta.url),
  "utf8",
);
const transferSource = readFileSync(
  new URL("../../curriculum/readiness/RP-004/reference_transfer.py", import.meta.url),
  "utf8",
);
const workloadAnswers = Object.fromEntries(
  ["primary", "retrieval", "transfer"].map((form) => [
    form,
    JSON.parse(readFileSync(
      new URL(`../../curriculum/readiness/RP-004/reference_${form}_answers.json`, import.meta.url),
      "utf8",
    )),
  ]),
);
const pythonRetrieval = {
  iterable: "samples",
  currentItem: "sample",
  loopBody: "append_one_ordered_correspondence_record",
  outputCount: "three_records_for_three_samples",
  purposeBoundary: "common_return_purpose_remains_none",
};

function memoryStorage(initial = null, mode = "normal") {
  let value = initial;
  return {
    getItem(key) {
      assert.equal(key, THREE_CURRENT_REACH_SAVE_KEY);
      if (mode === "malformed-readback" && value !== initial) return "{";
      return value;
    },
    setItem(key, next) {
      assert.equal(key, THREE_CURRENT_REACH_SAVE_KEY);
      if (mode === "throw") throw new Error("quota");
      value = next;
    },
    removeItem(key) {
      assert.equal(key, THREE_CURRENT_REACH_SAVE_KEY);
      value = null;
    },
    bytes: () => value,
  };
}

function controllerOptions(overrides = {}) {
  const predecessor = exactReviewSaveRecord();
  const predecessorBytes = JSON.stringify(predecessor);
  const storage = overrides.storage ?? memoryStorage();
  return {
    predecessorRecord: predecessor,
    predecessorBytes,
    readPredecessorBytes: () => predecessorBytes,
    adapter: createThreeCurrentReachStorageAdapter(storage),
    ...overrides,
    storage,
  };
}

function intent(controller, action, token, modality = "pointer") {
  return createThreeCurrentReachIntent(
    controller.getState(),
    action,
    modality,
    token,
  );
}

function dispatch(controller, action, token, modality = "pointer") {
  return controller.dispatch(intent(controller, action, token, modality));
}

function enterAndObserve(controller, order = [
  threeCurrentReachActions.observeSuspended,
  threeCurrentReachActions.observeCyclic,
  threeCurrentReachActions.observeHeat,
]) {
  assert.equal(dispatch(controller, threeCurrentReachActions.route, "route-token").status,
    "three_current_arrived_zero_evidence");
  assert.equal(dispatch(controller, threeCurrentReachActions.orient, "orient-token").status,
    "relations_visible_zero_evidence");
  for (const [index, action] of order.entries()) {
    dispatch(controller, action, `observe-token-${index}`);
  }
  assert.equal(controller.getState().activeGroup, "tr20_common_return");
  assert.equal(dispatch(controller, threeCurrentReachActions.commonReturn, "common-token").status,
    "common_return_recorded_zero_learning_credit");
}

function fillCurrent(controller, values) {
  for (const [name, value] of Object.entries(values)) {
    assert.equal(controller.updateField(name, value).status, "field_updated_private");
  }
}

function completeLearning(controller) {
  fillCurrent(controller, { learnerSource: primarySource });
  assert.equal(dispatch(
    controller,
    threeCurrentReachActions.submitPythonPrimary,
    "python-primary-token",
  ).status, "primary_finalized");

  fillCurrent(controller, pythonRetrieval);
  dispatch(controller, threeCurrentReachActions.submitPythonRetrieval, "python-retrieval-token");

  fillCurrent(controller, { learnerSource: transferSource });
  dispatch(controller, threeCurrentReachActions.submitPythonTransfer, "python-transfer-token");

  for (const form of ["primary", "retrieval", "transfer"]) {
    for (const [caseId, dimensions] of Object.entries(workloadAnswers[form])) {
      for (const [dimension, value] of Object.entries(dimensions)) {
        controller.updateField(`${caseId}.${dimension}`, value);
      }
    }
    dispatch(
      controller,
      threeCurrentReachActions[
        `submitWorkload${form[0].toUpperCase()}${form.slice(1)}`
      ],
      `workload-${form}-token`,
    );
  }
  fillCurrent(controller, {
    modality: "modality_alone_does_not_determine_the_requested_workload",
  });
  dispatch(controller, threeCurrentReachActions.submitModality, "modality-token");
  fillCurrent(controller, {
    agentic: "multi_step_autonomy_and_approved_tool_selection_distinguish_agentic_work",
  });
  dispatch(controller, threeCurrentReachActions.submitAgentic, "agentic-token");
  assert.equal(controller.getState().activeGroup, "tr30_review");
}

function completeAndSave(controller) {
  enterAndObserve(controller);
  completeLearning(controller);
  assert.equal(dispatch(controller, threeCurrentReachActions.review, "review-token").status,
    "provenance_inspected_zero_credit");
  return dispatch(controller, threeCurrentReachActions.save, "save-token");
}

test("TD004 route validates all seven modalities, exact owner/group, and one-hit tokens", () => {
  for (const [index, modality] of threeCurrentReachModalities.entries()) {
    const controller = createThreeCurrentReachNormalController(controllerOptions());
    const route = intent(controller, threeCurrentReachActions.route, `route-${index}-token`, modality);
    assert.equal(controller.dispatch({ ...route, expectedOwner: "SYSTEM" }).status, "rejected");
    assert.equal(controller.dispatch(route).status, "three_current_arrived_zero_evidence");
    assert.equal(controller.dispatch(route).reason, "one_hit_only");
    assert.equal(controller.getState().evidenceCount, 0);
  }
});

test("TD004 CM-50 retains three independent choices and safe exits are write-free", () => {
  const storage = memoryStorage();
  const controller = createThreeCurrentReachNormalController(controllerOptions({ storage }));
  assert.deepEqual(controller.getState().availableActions, [
    threeCurrentReachActions.route,
    threeCurrentReachActions.returnCivic,
    threeCurrentReachActions.returnThreshold,
  ]);
  const civic = dispatch(controller, threeCurrentReachActions.returnCivic, "civic-return-token");
  assert.equal(civic.status, "returned_to_rp002_write_free");
  assert.equal(civic.route.writePerformed, false);
  assert.equal(storage.bytes(), null);
});

test("TD004 all six equal observation orders converge to canonical relation order", () => {
  const actions = [
    threeCurrentReachActions.observeSuspended,
    threeCurrentReachActions.observeCyclic,
    threeCurrentReachActions.observeHeat,
  ];
  const orders = [
    [0, 1, 2], [0, 2, 1], [1, 0, 2],
    [1, 2, 0], [2, 0, 1], [2, 1, 0],
  ];
  for (const order of orders) {
    const controller = createThreeCurrentReachNormalController(controllerOptions());
    enterAndObserve(controller, order.map((index) => actions[index]));
    completeLearning(controller);
    dispatch(controller, threeCurrentReachActions.review, `review-${order.join("")}`);
    const saved = dispatch(controller, threeCurrentReachActions.save, `save-${order.join("")}`);
    assert.deepEqual(saved.record.note.relations, threeCurrentReachObservationIds);
  }
});

test("TD004 purpose inference rejects without consuming the fresh token or granting evidence", () => {
  const controller = createThreeCurrentReachNormalController(controllerOptions());
  dispatch(controller, threeCurrentReachActions.route, "route-purpose");
  dispatch(controller, threeCurrentReachActions.orient, "orient-purpose");
  for (const [index, action] of [
    threeCurrentReachActions.observeSuspended,
    threeCurrentReachActions.observeCyclic,
    threeCurrentReachActions.observeHeat,
  ].entries()) dispatch(controller, action, `observe-purpose-${index}`);
  controller.setCommonReturnPurpose("destination");
  const candidate = intent(controller, threeCurrentReachActions.commonReturn, "purpose-token");
  const rejected = controller.dispatch(candidate);
  assert.equal(rejected.status, "purpose_inference_rejected");
  assert.equal(rejected.evidenceGranted, false);
  assert.equal(controller.dispatch(candidate).status, "common_return_recorded_zero_learning_credit");
});

test("TD004 misses expose only public failed IDs and reopen a wholly blank retry", () => {
  const controller = createThreeCurrentReachNormalController(controllerOptions());
  enterAndObserve(controller);
  fillCurrent(controller, { learnerSource: "PRIVATE wrong" });
  const miss = dispatch(
    controller,
    threeCurrentReachActions.submitPythonPrimary,
    "python-miss-token",
  );
  assert.equal(miss.status, "remediation_required");
  assert.equal(miss.answerIncluded, false);
  assert.doesNotMatch(JSON.stringify(miss), /PRIVATE wrong/);
  assert.ok(miss.state.failedIds.length > 0);
  const retry = dispatch(controller, threeCurrentReachActions.retry, "python-retry-token");
  assert.equal(retry.status, "fresh_blank_retry_visible");
  assert.equal(retry.state.form.kind, "python");
  assert.doesNotMatch(JSON.stringify(retry.state), /PRIVATE wrong/);
  assert.equal(controller.dispatch(intent(
    controller,
    threeCurrentReachActions.submitPythonPrimary,
    "python-miss-token",
  )).reason, "one_hit_only");
});

test("TD004 review rows use owner-separated production language without changing evidence", () => {
  const controller = createThreeCurrentReachNormalController(controllerOptions());
  enterAndObserve(controller);
  completeLearning(controller);
  const reviewed = dispatch(controller, threeCurrentReachActions.review, "copy-review-token");
  assert.equal(reviewed.status, "provenance_inspected_zero_credit");
  assert.deepEqual(reviewed.state.reviewRows, [
    {
      id: "physical",
      label: "Four physical observations",
      state: "Three relations and one apparent return finalized separately",
    },
    {
      id: "python",
      label: "Python loop evidence",
      state: "Primary, closed-note retrieval, and fresh transfer finalized",
    },
    {
      id: "ai901",
      label: "AI workload evidence",
      state: "Three forms and two explanations finalized independently",
    },
    {
      id: "provenance",
      label: "Local source and authority boundary",
      state: "Sanitized replicas only; no live read, control, or external action",
    },
  ]);
  assert.equal(reviewed.state.evidenceCount, 8);
});

test("TD004 contiguous learning prefix resumes only after fresh route and re-observation", () => {
  const evidence = completeAndSave(
    createThreeCurrentReachNormalController(controllerOptions()),
  ).record.evidence.slice(0, 2);
  const resumed = createThreeCurrentReachNormalController(controllerOptions({
    restoredEvidence: evidence,
  }));
  assert.equal(resumed.getState().activeGroup, "cm50_route");
  enterAndObserve(resumed);
  assert.equal(resumed.getState().activeGroup, "tr30_python_transfer");
  assert.equal(resumed.getState().evidenceCount, 2);
  assert.deepEqual(resumed.getState().recordedObservationIds, threeCurrentReachObservationIds);
});

test("TD004 exact save has ten keys, canonical note, eight ordered records, and no-replay restore", () => {
  const storage = memoryStorage();
  const controller = createThreeCurrentReachNormalController(controllerOptions({ storage }));
  const saved = completeAndSave(controller);
  assert.equal(saved.status, "save_committed_verified_restore");
  assert.equal(saved.predecessorBytesPreserved, true);
  assert.equal(saved.record.version, THREE_CURRENT_REACH_RECORD_VERSION);
  assert.deepEqual(Object.keys(saved.record), [
    "version", "packetId", "mappingId", "checkpoint", "continuation",
    "cityStateDelta", "externalStateDelta", "successor", "note", "evidence",
  ]);
  assert.deepEqual(Object.keys(saved.record.note), [
    "relations", "commonReturn", "correspondence", "purpose",
  ]);
  assert.deepEqual(saved.record.evidence.map((item) => (
    `${item.skill_or_objective_id}/${item.form}`
  )), [
    "PY-011/primary",
    "PY-011/retrieval",
    "PY-011/transfer",
    "RP004-WORKLOAD-01/primary",
    "RP004-WORKLOAD-01/retrieval",
    "RP004-WORKLOAD-01/transfer",
    "RP004-WORKLOAD-01/modality_explanation",
    "RP004-WORKLOAD-01/agentic_explanation",
  ]);
  assert.equal(storage.bytes(), JSON.stringify(saved.record));
  assert.ok(sanitizeThreeCurrentReachSave(JSON.parse(storage.bytes())));

  const restored = createThreeCurrentReachNormalController(controllerOptions({
    restoredRecord: saved.record,
    storage,
  }));
  assert.equal(restored.getState().activeGroup, "tr40_restore");
  assert.deepEqual(restored.getState().replayedEvents, []);
});

test("TD004 write throw and malformed read-back preserve prior bytes or verified absence", () => {
  for (const mode of ["throw", "malformed-readback"]) {
    const storage = memoryStorage(null, mode);
    const controller = createThreeCurrentReachNormalController(controllerOptions({ storage }));
    enterAndObserve(controller);
    completeLearning(controller);
    dispatch(controller, threeCurrentReachActions.review, `${mode}-review`);
    const failed = dispatch(controller, threeCurrentReachActions.save, `${mode}-save`);
    assert.equal(failed.status, "save_failed_recovered");
    assert.equal(failed.lastGoodBytesPreserved, true);
    assert.equal(storage.bytes(), null);
  }
});

test("TD004 Tour is isolated and hard stop exposes no successor or world response", () => {
  const storage = memoryStorage();
  const controller = createThreeCurrentReachNormalController(controllerOptions({
    mode: "demo_tour",
    storage,
  }));
  const result = dispatch(controller, threeCurrentReachActions.route, "tour-route-token");
  assert.equal(result.reason, "tour_route_closed");
  assert.equal(storage.bytes(), null);

  const campaign = createThreeCurrentReachNormalController(controllerOptions());
  const saved = completeAndSave(campaign);
  const continuation = dispatch(
    campaign,
    threeCurrentReachActions.continuation,
    "continuation-token",
  );
  assert.equal(continuation.routeOpened, false);
  assert.equal(continuation.destination, null);
  assert.equal(continuation.successor, null);
  assert.equal(continuation.evidenceGranted, false);
  assert.equal(saved.record.successor, null);
  assert.equal(campaign.getState().worldStateChanged, false);
});
