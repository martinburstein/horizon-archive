import primaryAnswers from "../../../curriculum/readiness/RP-005/reference_primary_answers.json" with { type: "json" };
import retrievalAnswers from "../../../curriculum/readiness/RP-005/reference_retrieval_answers.json" with { type: "json" };
import transferAnswers from "../../../curriculum/readiness/RP-005/reference_transfer_answers.json" with { type: "json" };
import { exactThreeCurrentReachSaveRecord } from "../../test/threeCurrentReachSaveFixture.js";
import {
  THREE_CURRENT_REACH_SAVE_KEY,
  threeCurrentReachActions,
} from "../../src/ThreeCurrentReachNormal.js";
import {
  MANYFOLD_RETURN_SAVE_KEY,
  createManyfoldReturnIntent,
  createManyfoldReturnNormalController,
  createManyfoldReturnStorageAdapter,
  manyfoldReturnActions,
  resolveManyfoldReturnWorldScene,
} from "../../src/ManyfoldReturnNormal.js";
import manifest from "./launch-manifest.json" with { type: "json" };

export const TD005_MANYFOLD_RETURN_FIXTURE = "TD005_MANYFOLD_RETURN_FIXTURE";
export const manyfoldReturnScenarioNames = Object.freeze([...manifest.scenarios]);

const primarySource = `replica_summary = {"recurring_count": 5, "divergent_count": 2}
sealed_reading = None

def build_summary(replica_summary, sealed_reading):
    return {
        "recurring_count": replica_summary["recurring_count"],
        "divergent_count": replica_summary["divergent_count"],
        "sealed": sealed_reading,
        "judgment": None,
    }

summary = build_summary(replica_summary, sealed_reading)`;
const transferSource = primarySource
  .replace('"recurring_count": 5', '"recurring_count": 4')
  .replace('"divergent_count": 2', '"divergent_count": 3');
const traceAnswers = Object.freeze({
  functionName: "build_summary",
  parameters: "replica_summary_and_sealed_reading",
  body: "construct_the_four_key_dictionary_from_parameters",
  returnValue: "return_the_nonjudgmental_summary_dictionary",
  callSite: "call_once_with_the_supplied_inputs",
  noneBoundary: "sealed_and_judgment_remain_none",
});

function memory(mode = "normal", prior = null) {
  const predecessor = exactThreeCurrentReachSaveRecord();
  const values = new Map([[THREE_CURRENT_REACH_SAVE_KEY, JSON.stringify(predecessor)]]);
  if (prior !== null) values.set(MANYFOLD_RETURN_SAVE_KEY, prior);
  let candidateWritten = false;
  return {
    predecessor,
    storage: {
      getItem(key) {
        if (mode === "readback-failure" && key === MANYFOLD_RETURN_SAVE_KEY && candidateWritten) return "{";
        return values.get(key) ?? null;
      },
      setItem(key, value) {
        if (mode === "write-failure" && key === MANYFOLD_RETURN_SAVE_KEY) throw new Error("fixture write unavailable");
        if (mode === "rollback-unverified" && key === MANYFOLD_RETURN_SAVE_KEY) throw new Error("fixture rollback unavailable");
        values.set(key, value);
        if (key === MANYFOLD_RETURN_SAVE_KEY) candidateWritten = true;
      },
      removeItem(key) {
        if (mode === "rollback-unverified" && key === MANYFOLD_RETURN_SAVE_KEY) throw new Error("fixture rollback unavailable");
        values.delete(key);
        if (key === MANYFOLD_RETURN_SAVE_KEY) candidateWritten = false;
      },
    },
    bytes: (key) => values.get(key) ?? null,
  };
}

function subject(options = {}) {
  const store = options.store ?? memory();
  const predecessorBytes = store.bytes(THREE_CURRENT_REACH_SAVE_KEY);
  const adapter = options.adapter ?? createManyfoldReturnStorageAdapter(store.storage, {
    record: store.predecessor,
    bytes: predecessorBytes,
  });
  return {
    store,
    controller: createManyfoldReturnNormalController({
      mode: options.mode,
      predecessorRecord: store.predecessor,
      predecessorBytes,
      readPredecessorBytes: () => store.bytes(THREE_CURRENT_REACH_SAVE_KEY),
      restoredRecord: options.restoredRecord,
      adapter,
    }),
  };
}
function dispatch(item, action, token) {
  return item.controller.dispatch(createManyfoldReturnIntent(
    item.controller.getState(), action, "screen_reader", `fixture-${token}`,
  ));
}
function update(item, values) {
  Object.entries(values).forEach(([key, value]) => item.controller.updateField(key, value));
}
function enterObservation(item, count = 0, order = [
  manyfoldReturnActions.recurrence,
  manyfoldReturnActions.divergence,
  manyfoldReturnActions.sealed,
  manyfoldReturnActions.stewardship,
]) {
  dispatch(item, manyfoldReturnActions.orient, "orient");
  dispatch(item, manyfoldReturnActions.inspect, "inspect");
  order.slice(0, count).forEach((action, index) => dispatch(item, action, `observe-${index}`));
}
function submitText(item, form, answers) {
  Object.entries(answers).forEach(([caseId, dimensions]) => {
    Object.entries(dimensions).forEach(([dimension, value]) => (
      item.controller.updateField(`${caseId}.${dimension}`, value)
    ));
  });
  return dispatch(item, manyfoldReturnActions[`text${form[0].toUpperCase()}${form.slice(1)}`], `text-${form}`);
}
function advanceLearning(item, count = 8) {
  enterObservation(item, 4);
  const steps = [
    () => { update(item, { learnerSource: primarySource }); dispatch(item, manyfoldReturnActions.pythonPrimary, "py-primary"); },
    () => { update(item, traceAnswers); dispatch(item, manyfoldReturnActions.pythonTrace, "py-trace"); },
    () => { update(item, { learnerSource: transferSource }); dispatch(item, manyfoldReturnActions.pythonTransfer, "py-transfer"); },
    () => submitText(item, "primary", primaryAnswers),
    () => submitText(item, "retrieval", retrievalAnswers),
    () => submitText(item, "transfer", transferAnswers),
    () => { update(item, { requestedOutput: "the_requested_output_selects_the_text_analysis_technique" }); dispatch(item, manyfoldReturnActions.requestedOutput, "requested"); },
    () => { update(item, { truthBoundary: "summarization_does_not_establish_truth_or_quality" }); dispatch(item, manyfoldReturnActions.truthBoundary, "truth"); },
  ];
  steps.slice(0, count).forEach((step) => step());
}
function completed(options = {}) {
  const item = subject(options);
  advanceLearning(item);
  dispatch(item, manyfoldReturnActions.review, "review");
  const saved = dispatch(item, manyfoldReturnActions.save, "save");
  return { ...item, saved };
}

function routeState(recorded = false) {
  return {
    shellVersion: "SS-RP004-THREE-CURRENT-v1",
    controllerVersion: "rp004.three-current-controller.v1",
    packetId: "RP-004",
    mappingId: "RP004-A3-THREE-CURRENT-REACH",
    phase: recorded ? "TR-40 VERIFIED + CONTINUATION NOTED" : "TR-40 VERIFY + RETURN",
    boardState: "SC-05",
    activeGroup: recorded ? "tr40_restore_recorded" : "tr40_restore",
    owner: "SYSTEM // RESTORED EXPEDITION NOTE",
    headingId: "tr40-restore-heading",
    statusRegionId: "three-current-reach-status",
    statusMessageId: "td004:tr40_restore:no-replay",
    statusMessage: "The exact released predecessor is ready.",
    availableActions: [
      threeCurrentReachActions.manyfoldReturn,
      ...(recorded ? [] : [threeCurrentReachActions.continuation]),
      threeCurrentReachActions.returnCalibration,
      threeCurrentReachActions.returnThreshold,
    ],
    recordedObservationIds: [],
    form: null,
    failedPublicIds: [],
    reviewRows: [],
    note: null,
    evidenceCount: 8,
    focusIntent: { group: recorded ? "tr40_restore_recorded" : "tr40_restore", target: "tr40-restore-heading" },
    replayedEvents: [],
  };
}

function scenarioState(name) {
  if (name === "tr40-route-ready") return routeState();
  if (name === "tr40-route-ready-notation-recorded") return routeState(true);
  if (name.startsWith("tr40-route-") || name === "tr40-invalid-predecessor-recovery"
    || name.startsWith("reload-")) return routeState();
  const item = subject({ mode: name === "tour-route-closed" ? "demo_tour" : undefined });
  if (name === "tour-route-closed") {
    dispatch(item, manyfoldReturnActions.orient, "tour");
    return item.controller.getState();
  }
  if (name === "mf00-arrive-idle") return item.controller.getState();
  if (name === "mf00-oriented") {
    dispatch(item, manyfoldReturnActions.orient, "oriented");
    return item.controller.getState();
  }
  if (name.startsWith("mf00-early-return-")) {
    dispatch(item, name.endsWith("threshold") ? manyfoldReturnActions.returnThreshold : manyfoldReturnActions.returnThreeCurrent, "early-return");
    return item.controller.getState();
  }
  if (name.startsWith("mf10-")) {
    const singled = {
      "mf10-observation-recurrence-recorded": manyfoldReturnActions.recurrence,
      "mf10-observation-divergence-recorded": manyfoldReturnActions.divergence,
      "mf10-observation-sealed-recorded": manyfoldReturnActions.sealed,
      "mf10-observation-stewardship-recorded": manyfoldReturnActions.stewardship,
    }[name];
    const count = name.includes("none") ? 0 : name.includes("three") ? 3 : name.includes("all") || name.includes("twenty-four") ? 4 : 1;
    enterObservation(item, singled ? 1 : count, singled ? [singled] : undefined);
    if (name === "mf10-recorded-revisit-idempotent") {
      dispatch(item, manyfoldReturnActions.recurrence, "revisit-one");
      dispatch(item, manyfoldReturnActions.recurrence, "revisit-two");
    }
    return item.controller.getState();
  }
  const learningCount = {
    "mf20-python-primary-blank": 0,
    "mf20-python-trace-blank": 1,
    "mf20-python-transfer-blank": 2,
    "mf20-text-primary-neutral": 3,
    "mf20-text-retrieval-neutral": 4,
    "mf20-text-transfer-neutral": 5,
    "mf20-requested-output-blank": 6,
    "mf20-truth-boundary-blank": 7,
    "mf20-five-responsibility-review": 8,
  }[name];
  if (learningCount !== undefined) {
    advanceLearning(item, learningCount);
    return item.controller.getState();
  }
  if (name === "mf20-python-primary-answer-free-repair"
    || name === "mf20-python-trace-answer-free-repair"
    || name === "mf20-text-primary-answer-free-repair") {
    advanceLearning(item, name.includes("trace") ? 1 : name.includes("text") ? 3 : 0);
    dispatch(item, name.includes("trace")
      ? manyfoldReturnActions.pythonTrace
      : name.includes("text")
        ? manyfoldReturnActions.textPrimary
        : manyfoldReturnActions.pythonPrimary, "miss");
    return item.controller.getState();
  }
  if (name === "mf20-provenance-inspected" || name === "mf20-save-transaction") {
    advanceLearning(item);
    dispatch(item, manyfoldReturnActions.review, "provenance");
    if (name.endsWith("transaction")) {
      return {
        ...item.controller.getState(),
        phase: "MF-20 LOCAL TRANSACTION",
        activeGroup: "mf20_transaction",
        owner: "SYSTEM // LOCAL EXPEDITION NOTE",
        headingId: "mf20-transaction-heading",
        availableActions: [],
        form: null,
      };
    }
    return item.controller.getState();
  }
  if (name.startsWith("mf20-save-")) {
    const mode = name.includes("write-failed") ? "write-failure"
      : name.includes("readback") ? "readback-failure" : "rollback-unverified";
    const failed = subject({ store: memory(mode) });
    advanceLearning(failed);
    dispatch(failed, manyfoldReturnActions.review, "failure-review");
    dispatch(failed, manyfoldReturnActions.save, "failure-save");
    return failed.controller.getState();
  }
  if (name.startsWith("mf30-")) {
    const done = completed();
    if (name.includes("serviced")) dispatch(done, manyfoldReturnActions.continuation, "continuation");
    else if (name.endsWith("three-current")) dispatch(done, manyfoldReturnActions.returnThreeCurrent, "return-three");
    else if (name.endsWith("threshold")) dispatch(done, manyfoldReturnActions.returnThreshold, "return-threshold");
    return done.controller.getState();
  }
  if (name === "resume-same-session-first-incomplete") {
    advanceLearning(item, 3);
    return item.controller.getState();
  }
  throw new TypeError("A closed TD-005 scenario is required.");
}

export function createManyfoldReturnScenario(name) {
  if (!manyfoldReturnScenarioNames.includes(name)) {
    throw new TypeError("A closed TD-005 scenario is required.");
  }
  const state = scenarioState(name);
  const scene = resolveManyfoldReturnWorldScene(state);
  return Object.freeze({
    name,
    state: Object.freeze(state),
    scene: scene ? Object.freeze(scene) : null,
    storage: "frozen-in-memory-only",
    arbitraryStateAccepted: false,
  });
}
