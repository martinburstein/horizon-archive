import primaryAnswers from "../../../curriculum/readiness/RP-004/reference_primary_answers.json" with { type: "json" };
import retrievalWorkloadAnswers from "../../../curriculum/readiness/RP-004/reference_retrieval_answers.json" with { type: "json" };
import transferAnswers from "../../../curriculum/readiness/RP-004/reference_transfer_answers.json" with { type: "json" };
import { exactReviewSaveRecord } from "../../test/calibrationMarginReviewSaveFixtures.js";
import {
  THREE_CURRENT_REACH_SAVE_KEY,
  createThreeCurrentReachIntent,
  createThreeCurrentReachNormalController,
  createThreeCurrentReachStorageAdapter,
  threeCurrentReachActions,
} from "../../src/ThreeCurrentReachNormal.js";
import manifest from "./launch-manifest.json" with { type: "json" };

export const TD004_THREE_CURRENT_FIXTURE = "TD004_THREE_CURRENT_FIXTURE";
export const threeCurrentScenarioNames = Object.freeze([...manifest.scenarios]);

const primarySource = `samples = [
    {"sample_id": "suspension_replica", "form": "particulate"},
    {"sample_id": "pressure_replica", "form": "cyclic"},
    {"sample_id": "heat_replica", "form": "thermal"}
]

corridor_for_form = {
    "particulate": "porous",
    "cyclic": "tensioned",
    "thermal": "jointed"
}

correspondence = []
for sample in samples:
    correspondence.append(
        {
            "sample_id": sample["sample_id"],
            "corridor": corridor_for_form[sample["form"]]
        }
    )

common_return = {"observed": True, "purpose": None}`;
const transferSource = `samples = [
    {"sample_id": "fiber_replica", "form": "filament"},
    {"sample_id": "wave_replica", "form": "oscillating"},
    {"sample_id": "gradient_replica", "form": "graded"}
]

corridor_for_form = {
    "filament": "meshed",
    "oscillating": "resonant",
    "graded": "layered"
}

correspondence = []
for sample in samples:
    correspondence.append(
        {
            "sample_id": sample["sample_id"],
            "corridor": corridor_for_form[sample["form"]]
        }
    )

common_return = {"observed": True, "purpose": None}`;

const retrievalAnswers = Object.freeze({
  iterable: "samples",
  currentItem: "sample",
  loopBody: "append_one_ordered_correspondence_record",
  outputCount: "three_records_for_three_samples",
  purposeBoundary: "common_return_purpose_remains_none",
});

function memory(mode = "normal", seed = null) {
  let bytes = seed;
  return {
    storage: {
      getItem(key) {
        if (key !== THREE_CURRENT_REACH_SAVE_KEY) return null;
        if (mode === "malformed-readback" && bytes !== seed) return "{";
        return bytes;
      },
      setItem(key, value) {
        if (key !== THREE_CURRENT_REACH_SAVE_KEY || mode === "write-failure") {
          throw new Error("closed fixture write failure");
        }
        bytes = value;
      },
      removeItem() {
        bytes = null;
      },
    },
    bytes: () => bytes,
  };
}

function createSubject(options = {}) {
  const store = options.store ?? memory();
  const predecessor = exactReviewSaveRecord();
  const predecessorBytes = JSON.stringify(predecessor);
  return {
    store,
    controller: createThreeCurrentReachNormalController({
      mode: options.mode,
      predecessorRecord: predecessor,
      predecessorBytes,
      readPredecessorBytes: () => predecessorBytes,
      restoredRecord: options.restoredRecord,
      restoredEvidence: options.restoredEvidence,
      adapter: createThreeCurrentReachStorageAdapter(store.storage),
    }),
  };
}

function intent(controller, action, token) {
  return createThreeCurrentReachIntent(
    controller.getState(),
    action,
    "screen_reader",
    `fixture-${token}`,
  );
}

function dispatch(subject, action, token) {
  return subject.controller.dispatch(intent(subject.controller, action, token));
}

function enter(subject) {
  dispatch(subject, threeCurrentReachActions.route, "route");
}

function orient(subject) {
  enter(subject);
  dispatch(subject, threeCurrentReachActions.orient, "orient");
}

function observe(subject, count = 3, order = [
  threeCurrentReachActions.observeSuspended,
  threeCurrentReachActions.observeCyclic,
  threeCurrentReachActions.observeHeat,
]) {
  orient(subject);
  order.slice(0, count).forEach((action, index) => {
    dispatch(subject, action, `observation-${index}`);
  });
}

function common(subject) {
  observe(subject);
  dispatch(subject, threeCurrentReachActions.commonReturn, "common-return");
}

function fill(subject, values) {
  Object.entries(values).forEach(([name, value]) => {
    subject.controller.updateField(name, value);
  });
}

function submitWorkload(subject, form, answers) {
  Object.entries(answers).forEach(([caseId, dimensions]) => {
    Object.entries(dimensions).forEach(([dimension, value]) => {
      subject.controller.updateField(`${caseId}.${dimension}`, value);
    });
  });
  return dispatch(
    subject,
    threeCurrentReachActions[
      `submitWorkload${form[0].toUpperCase()}${form.slice(1)}`
    ],
    `workload-${form}`,
  );
}

function advanceLearning(subject, count = 8) {
  common(subject);
  const steps = [
    () => {
      fill(subject, { learnerSource: primarySource });
      return dispatch(subject, threeCurrentReachActions.submitPythonPrimary, "python-primary");
    },
    () => {
      fill(subject, retrievalAnswers);
      return dispatch(subject, threeCurrentReachActions.submitPythonRetrieval, "python-retrieval");
    },
    () => {
      fill(subject, { learnerSource: transferSource });
      return dispatch(subject, threeCurrentReachActions.submitPythonTransfer, "python-transfer");
    },
    () => submitWorkload(subject, "primary", primaryAnswers),
    () => submitWorkload(subject, "retrieval", retrievalWorkloadAnswers),
    () => submitWorkload(subject, "transfer", transferAnswers),
    () => {
      fill(subject, {
        modality: "modality_alone_does_not_determine_the_requested_workload",
      });
      return dispatch(subject, threeCurrentReachActions.submitModality, "modality");
    },
    () => {
      fill(subject, {
        agentic: "multi_step_autonomy_and_approved_tool_selection_distinguish_agentic_work",
      });
      return dispatch(subject, threeCurrentReachActions.submitAgentic, "agentic");
    },
  ];
  steps.slice(0, count).forEach((step) => step());
}

function completedSubject(options = {}) {
  const subject = createSubject(options);
  advanceLearning(subject);
  dispatch(subject, threeCurrentReachActions.review, "provenance");
  const saved = dispatch(subject, threeCurrentReachActions.save, "save");
  return { ...subject, saved };
}

function scenarioState(name) {
  const subject = createSubject();
  if (name === "cm50-three-choice-route-ready") return subject.controller.getState();
  if (name === "cm50-route-rejected-stale-token") {
    const candidate = intent(subject.controller, threeCurrentReachActions.route, "stale");
    subject.controller.dispatch({ ...candidate, expectedOwner: "SYSTEM" });
    return subject.controller.getState();
  }
  if (name === "tr00-arrive-orient") {
    enter(subject);
    return subject.controller.getState();
  }
  if (name === "tr00-early-return-calibration"
    || name === "tr00-early-return-threshold") {
    enter(subject);
    dispatch(
      subject,
      name.endsWith("calibration")
        ? threeCurrentReachActions.returnCalibration
        : threeCurrentReachActions.returnThreshold,
      "early-return",
    );
    return subject.controller.getState();
  }
  if (name.startsWith("tr10-relations-")) {
    const count = name.includes("none") ? 0 : name.includes("one") ? 1 : name.includes("two") ? 2 : 3;
    observe(subject, count);
    return subject.controller.getState();
  }
  if (name === "tr10-six-orders-converge") {
    observe(subject, 3, [
      threeCurrentReachActions.observeHeat,
      threeCurrentReachActions.observeSuspended,
      threeCurrentReachActions.observeCyclic,
    ]);
    return subject.controller.getState();
  }
  if (name === "tr20-common-return-purpose-unknown") {
    observe(subject);
    return subject.controller.getState();
  }
  if (name === "tr20-purpose-inference-rejected") {
    observe(subject);
    subject.controller.setCommonReturnPurpose("destination");
    dispatch(subject, threeCurrentReachActions.commonReturn, "purpose-rejected");
    return subject.controller.getState();
  }

  const learningTarget = {
    "tr30-python-primary-blank": 0,
    "tr30-python-retrieval-blank": 1,
    "tr30-python-transfer-blank": 2,
    "tr30-ai901-primary-neutral": 3,
    "tr30-ai901-retrieval-neutral": 4,
    "tr30-ai901-transfer-neutral": 5,
    "tr30-modality-explanation-blank": 6,
    "tr30-agentic-explanation-blank": 7,
    "tr30-conjunctive-review": 8,
  }[name];
  if (learningTarget !== undefined) {
    advanceLearning(subject, learningTarget);
    return subject.controller.getState();
  }
  if (name === "tr30-python-primary-answer-free-repair"
    || name === "tr30-ai901-primary-answer-free-repair") {
    advanceLearning(subject, name.includes("python") ? 0 : 3);
    if (name.includes("python")) {
      fill(subject, { learnerSource: "not a valid loop" });
      dispatch(subject, threeCurrentReachActions.submitPythonPrimary, "python-miss");
    } else {
      dispatch(subject, threeCurrentReachActions.submitWorkloadPrimary, "workload-miss");
    }
    return subject.controller.getState();
  }
  if (name === "tr30-provenance-inspected") {
    advanceLearning(subject);
    dispatch(subject, threeCurrentReachActions.review, "provenance");
    return subject.controller.getState();
  }
  if (name === "tr30-save-transaction") {
    advanceLearning(subject);
    dispatch(subject, threeCurrentReachActions.review, "provenance");
    const state = subject.controller.getState();
    return {
      ...state,
      phase: "TR-30 ATOMIC SAVE",
      activeGroup: "tr30_transaction",
      owner: "SYSTEM // LOCAL EXPEDITION NOTE",
      headingId: "tr30-save-action",
      availableActions: [],
      statusMessageId: "td004:tr30_transaction:checking",
      statusMessage: "Checking one complete local replacement and strict read-back.",
      form: null,
    };
  }
  if (name === "tr30-save-failed-last-good"
    || name === "tr30-save-malformed-readback") {
    const failed = createSubject({
      store: memory(name.endsWith("last-good") ? "write-failure" : "malformed-readback"),
    });
    advanceLearning(failed);
    dispatch(failed, threeCurrentReachActions.review, "failure-provenance");
    dispatch(failed, threeCurrentReachActions.save, "failure-save");
    return failed.controller.getState();
  }
  if (name.startsWith("tr40-")) {
    const complete = completedSubject();
    if (name === "tr40-destinationless-continuation-recorded") {
      dispatch(complete, threeCurrentReachActions.continuation, "continuation");
    } else if (name === "tr40-return-calibration") {
      dispatch(complete, threeCurrentReachActions.returnCalibration, "return-calibration");
    } else if (name === "tr40-return-threshold") {
      dispatch(complete, threeCurrentReachActions.returnThreshold, "return-threshold");
    }
    return complete.controller.getState();
  }
  if (name === "resume-contiguous-prefix"
    || name === "resume-gap-first-incomplete") {
    const complete = completedSubject();
    const prefix = complete.saved.record.evidence.slice(0, name.includes("gap") ? 1 : 4);
    const resumed = createSubject({ restoredEvidence: prefix });
    common(resumed);
    return resumed.controller.getState();
  }
  if (name === "tour-route-closed") {
    const tour = createSubject({ mode: "demo_tour" });
    dispatch(tour, threeCurrentReachActions.route, "tour");
    return tour.controller.getState();
  }
  throw new TypeError("A closed TD-004 three-current scenario is required.");
}

export function createThreeCurrentScenario(name) {
  if (!threeCurrentScenarioNames.includes(name)) {
    throw new TypeError("A closed TD-004 three-current scenario is required.");
  }
  return Object.freeze({
    name,
    state: Object.freeze(scenarioState(name)),
    storage: "frozen-in-memory-only",
    arbitraryStateAccepted: false,
  });
}
