import rp005Contract from "../../../curriculum/readiness/RP-005/contract.json" with { type: "json" };
import primaryAnswers from "../../../curriculum/readiness/RP-006/reference_primary_answers.json" with { type: "json" };
import retrievalAnswers from "../../../curriculum/readiness/RP-006/reference_retrieval_answers.json" with { type: "json" };
import transferAnswers from "../../../curriculum/readiness/RP-006/reference_transfer_answers.json" with { type: "json" };
import {
  MANYFOLD_RETURN_RECORD_VERSION,
  MANYFOLD_RETURN_SAVE_KEY,
  manyfoldReturnActions,
  manyfoldReturnObservationIds,
  sanitizeManyfoldReturnSave,
} from "../../src/ManyfoldReturnNormal.js";
import { THREE_CURRENT_REACH_SAVE_KEY } from "../../src/ThreeCurrentReachNormal.js";
import {
  INTERVAL_WORKS_SAVE_KEY,
  createIntervalWorksIntent,
  createIntervalWorksNormalController,
  createIntervalWorksStorageAdapter,
  intervalWorksActions,
  intervalWorksExplanationAnswers,
  intervalWorksPythonTraceAnswers,
  resolveIntervalWorksWorldScene,
} from "../../src/IntervalWorksNormal.js";
import manifest from "./launch-manifest.json" with { type: "json" };

export const TD006_INTERVAL_WORKS_FIXTURE = "TD006_INTERVAL_WORKS_FIXTURE";
export const intervalWorksScenarioNames = Object.freeze([...manifest.scenarios]);

const primarySource = `import itertools

record_groups = [
    [{"state_id": "r1", "changed": None, "persistent": "continuity", "available": True, "cause": None}],
    [{"state_id": "r2", "changed": "vane", "persistent": "continuity", "available": True, "cause": None}],
    [{"state_id": None, "changed": None, "persistent": None, "available": False, "cause": None}],
    [{"state_id": "r4", "changed": "film", "persistent": "continuity", "available": True, "cause": None}],
]

sequence = list(itertools.chain.from_iterable(record_groups))`;
const transferSource = primarySource
  .replaceAll('"r1"', '"s1"')
  .replaceAll('"r2"', '"s2"')
  .replaceAll('"r4"', '"s4"')
  .replaceAll('"vane"', '"ridge"')
  .replaceAll('"film"', '"coating"')
  .replaceAll('"continuity"', '"joint"');
const evidenceKeys = [
  "packet_id", "mapping_id", "form", "skill_or_objective_id",
  "dimension_correctness", "attempt_count", "hint_level", "confidence",
  "misconception_tags", "mastery_status",
];
function evidence(skill, form, dimensions) {
  return Object.fromEntries(evidenceKeys.map((key) => [key, ({
    packet_id: "RP-005",
    mapping_id: "RP005-A3-MANYFOLD-RETURN",
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
function predecessor() {
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
      evidence("PY-012", "primary", rp005Contract.python_contract.checks),
      evidence("PY-012", "trace", ["functionName", "parameters", "body", "returnValue", "callSite", "noneBoundary"]),
      evidence("PY-012", "transfer", rp005Contract.python_contract.checks),
      ...["primary", "retrieval", "transfer"].map((form) => evidence(
        "RP005-TEXT-01",
        form,
        rp005Contract.ai901_contract.forms[form].flatMap((item) => aiDimensions.map((dimension) => `${item.id}.${dimension}`)),
      )),
      evidence("RP005-TEXT-01", "requested_output_explanation", ["requested_output"]),
      evidence("RP005-TEXT-01", "truth_boundary_explanation", ["truth_boundary"]),
    ],
  });
}
function routeIntent() {
  return {
    mode: "campaign",
    shellVersion: "SS-RP005-MANYFOLD-RETURN-v1",
    controllerVersion: "rp005.manyfold-return-controller.v1",
    packetId: "RP-005",
    activeGroupId: "mf30_restore",
    expectedOwner: "PILOT // EXPEDITION NAVIGATION",
    allowlistedActionId: manyfoldReturnActions.intervalWorks,
    activationKind: "screen_reader",
    opaqueFreshEventToken: "fixture-route-token",
  };
}
function memory(mode = "normal") {
  const record = predecessor();
  const manyfoldBytes = JSON.stringify(record);
  const threeCurrentBytes = "fixture-exact-td004-bytes";
  const values = new Map([
    [MANYFOLD_RETURN_SAVE_KEY, manyfoldBytes],
    [THREE_CURRENT_REACH_SAVE_KEY, threeCurrentBytes],
  ]);
  let candidateWritten = false;
  return {
    record, manyfoldBytes, threeCurrentBytes,
    storage: {
      getItem(key) {
        if (mode === "readback-failure" && key === INTERVAL_WORKS_SAVE_KEY && candidateWritten) return "{";
        return values.get(key) ?? null;
      },
      setItem(key, value) {
        if (mode === "write-failure" && key === INTERVAL_WORKS_SAVE_KEY) throw new Error("fixture write unavailable");
        values.set(key, value);
        if (key === INTERVAL_WORKS_SAVE_KEY) candidateWritten = true;
      },
      removeItem(key) {
        values.delete(key);
        if (key === INTERVAL_WORKS_SAVE_KEY) candidateWritten = false;
      },
    },
    bytes: (key) => values.get(key) ?? null,
  };
}
function subject(mode = "normal", controllerMode) {
  const store = memory(mode);
  const adapter = createIntervalWorksStorageAdapter(store.storage, {
    manyfoldRecord: store.record,
    manyfoldBytes: store.manyfoldBytes,
    threeCurrentBytes: store.threeCurrentBytes,
  });
  return {
    store,
    controller: createIntervalWorksNormalController({
      mode: controllerMode,
      predecessorRecord: store.record,
      predecessorBytes: store.manyfoldBytes,
      readPredecessorBytes: () => store.bytes(MANYFOLD_RETURN_SAVE_KEY),
      threeCurrentBytes: store.threeCurrentBytes,
      readThreeCurrentBytes: () => store.bytes(THREE_CURRENT_REACH_SAVE_KEY),
      entryIntent: routeIntent(),
      adapter,
    }),
  };
}
function dispatch(item, action, token) {
  return item.controller.dispatch(createIntervalWorksIntent(
    item.controller.getState(), action, "screen_reader", `fixture-${token}`,
  ));
}
function update(item, values) {
  Object.entries(values).forEach(([key, value]) => item.controller.updateField(key, value));
}
const observationActions = [
  intervalWorksActions.overlap,
  intervalWorksActions.changedPersistent,
  intervalWorksActions.closedInterval,
  intervalWorksActions.stewardship,
];
function enterObservations(item, count = 0, order = observationActions) {
  dispatch(item, intervalWorksActions.inspect, "inspect");
  order.slice(0, count).forEach((action, index) => dispatch(item, action, `observe-${index}-${action.length}`));
}
function submitSpeech(item, form, answers) {
  Object.entries(answers).forEach(([caseId, dimensions]) => {
    Object.entries(dimensions).forEach(([dimension, value]) => item.controller.updateField(`${caseId}.${dimension}`, value));
  });
  return dispatch(item, intervalWorksActions[`speech${form[0].toUpperCase()}${form.slice(1)}`], `speech-${form}`);
}
function advanceLearning(item, count = 8) {
  enterObservations(item, 4);
  const steps = [
    () => { update(item, { learnerSource: primarySource }); dispatch(item, intervalWorksActions.pythonPrimary, "python-primary"); },
    () => { update(item, intervalWorksPythonTraceAnswers); dispatch(item, intervalWorksActions.pythonTrace, "python-trace"); },
    () => { update(item, { learnerSource: transferSource }); dispatch(item, intervalWorksActions.pythonTransfer, "python-transfer"); },
    () => submitSpeech(item, "primary", primaryAnswers),
    () => submitSpeech(item, "retrieval", retrievalAnswers),
    () => submitSpeech(item, "transfer", transferAnswers),
    () => { update(item, { directionBoundary: intervalWorksExplanationAnswers.directionBoundary }); dispatch(item, intervalWorksActions.directionBoundary, "direction"); },
    () => { update(item, { causationBoundary: intervalWorksExplanationAnswers.causationBoundary }); dispatch(item, intervalWorksActions.causationBoundary, "causation"); },
  ];
  steps.slice(0, count).forEach((step) => step());
}
function completed(mode = "normal") {
  const item = subject(mode);
  advanceLearning(item);
  dispatch(item, intervalWorksActions.review, "review");
  const saved = dispatch(item, intervalWorksActions.save, "save");
  return { ...item, saved };
}
function mf30(recorded = false) {
  return {
    shellVersion: "SS-RP005-MANYFOLD-RETURN-v1",
    controllerVersion: "rp005.manyfold-return-controller.v1",
    packetId: "RP-005",
    mappingId: "RP005-A3-MANYFOLD-RETURN",
    phase: recorded ? "MF-30 CONTINUATION NOTED" : "MF-30 VERIFIED RESTORE",
    boardState: "SC-06",
    activeGroup: recorded ? "mf30_restore_recorded" : "mf30_restore",
    owner: "SYSTEM // RESTORED EXPEDITION NOTE",
    headingId: recorded ? "mf30-restore-recorded-heading" : "mf30-restore-heading",
    statusMessageId: "td005:mf30_restore:no-replay",
    statusMessage: "The exact released predecessor is ready.",
    availableActions: [manyfoldReturnActions.intervalWorks],
    focusIntent: { group: "mf30_restore", target: "mf30-restore-heading" },
  };
}

function scenarioState(name) {
  if (name === "mf30-route-ready") return mf30();
  if (name === "mf30-route-notation-recorded") return mf30(true);
  if (name.startsWith("route-") || name.startsWith("reload-")) return mf30();
  const item = subject("normal", name === "route-tour-closed" ? "demo_tour" : undefined);
  if (name === "iw00-arrive-idle") return item.controller.getState();
  if (name.startsWith("iw00-early-return-")) {
    dispatch(item, name.endsWith("threshold") ? intervalWorksActions.returnThreshold : intervalWorksActions.returnManyfold, "early-return");
    return item.controller.getState();
  }
  if (name.startsWith("iw10-")) {
    const singled = {
      "iw10-overlap-recorded": intervalWorksActions.overlap,
      "iw10-changed-persistent-recorded": intervalWorksActions.changedPersistent,
      "iw10-closed-recorded": intervalWorksActions.closedInterval,
      "iw10-stewardship-recorded": intervalWorksActions.stewardship,
    }[name];
    const count = name.includes("none") ? 0 : name.includes("three") ? 3 : name.includes("all") ? 4 : 1;
    enterObservations(item, singled ? 1 : count, singled ? [singled] : observationActions);
    if (name.includes("revisit")) {
      dispatch(item, intervalWorksActions.overlap, "revisit-one");
      dispatch(item, intervalWorksActions.overlap, "revisit-two");
    }
    return item.controller.getState();
  }
  const count = {
    "iw20-python-primary-blank": 0,
    "iw20-python-trace-blank": 1,
    "iw20-python-transfer-blank": 2,
    "iw20-speech-primary-neutral": 3,
    "iw20-speech-retrieval-neutral": 4,
    "iw20-speech-transfer-neutral": 5,
    "iw20-direction-blank": 6,
    "iw20-causation-blank": 7,
    "iw20-conjunctive-review": 8,
  }[name];
  if (count !== undefined) {
    advanceLearning(item, count);
    return item.controller.getState();
  }
  if (name === "iw20-python-primary-repair") {
    enterObservations(item, 4);
    update(item, { learnerSource: "import itertools\nsequence = []" });
    dispatch(item, intervalWorksActions.pythonPrimary, "miss");
    return item.controller.getState();
  }
  if (name === "iw20-save-ready") {
    advanceLearning(item);
    dispatch(item, intervalWorksActions.review, "review");
    return item.controller.getState();
  }
  if (name === "iw20-save-write-failure") return completed("write-failure").controller.getState();
  if (name === "iw20-save-readback-failure") return completed("readback-failure").controller.getState();
  if (name.startsWith("iw30-")) {
    const done = completed();
    if (name.endsWith("manyfold")) dispatch(done, intervalWorksActions.returnManyfold, "return-manyfold");
    if (name.endsWith("threshold")) dispatch(done, intervalWorksActions.returnThreshold, "return-threshold");
    return done.controller.getState();
  }
  return item.controller.getState();
}

export function createIntervalWorksScenario(name) {
  if (!intervalWorksScenarioNames.includes(name)) throw new TypeError("A closed TD-006 scenario is required.");
  const state = scenarioState(name);
  const scene = resolveIntervalWorksWorldScene(state);
  return Object.freeze({
    name,
    state: Object.freeze(state),
    scene: scene ? Object.freeze(scene) : null,
    storage: "frozen-in-memory-only",
    arbitraryStateAccepted: false,
  });
}
