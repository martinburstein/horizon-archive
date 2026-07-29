import rp006Contract from "../../../curriculum/readiness/RP-006/contract.json" with { type: "json" };
import rp007Contract from "../../../curriculum/readiness/RP-007/contract.json" with { type: "json" };
import {
  INTERVAL_WORKS_RECORD_VERSION,
  INTERVAL_WORKS_SAVE_KEY,
  intervalWorksActions,
  intervalWorksObservationIds,
  sanitizeIntervalWorksSave,
} from "../../src/IntervalWorksNormal.js";
import { MANYFOLD_RETURN_SAVE_KEY } from "../../src/ManyfoldReturnNormal.js";
import { THREE_CURRENT_REACH_SAVE_KEY } from "../../src/ThreeCurrentReachNormal.js";
import {
  BRAIDED_VERGE_ROUTE_GROUP,
  BRAIDED_VERGE_ROUTE_OWNER,
  BRAIDED_VERGE_SAVE_KEY,
  braidedVergeActions,
  braidedVergeExplanationAnswers,
  braidedVergePythonTraceAnswers,
  createBraidedVergeIntent,
  createBraidedVergeNormalController,
  createBraidedVergeRouteIntent,
  createBraidedVergeStorageAdapter,
  resolveBraidedVergeWorldScene,
} from "../../src/BraidedVergeNormal.js";
import manifest from "./launch-manifest.json" with { type: "json" };

export const TD007_BRAIDED_VERGE_FIXTURE = "TD007_BRAIDED_VERGE_FIXTURE";
export const braidedVergeScenarioNames = Object.freeze([...manifest.scenarios]);

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

function predecessor() {
  const aiDimensions = rp006Contract.ai901_contract.dimensions;
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
        rp006Contract.ai901_contract.forms[form].flatMap((item) => aiDimensions.map((dimension) => `${item.id}.${dimension}`)),
      )),
      evidence("RP-006", "RP006-A3-INTERVAL-WORKS", "RP006-SPEECH-01", "direction_boundary_explanation", ["direction_boundary"]),
      evidence("RP-006", "RP006-A3-INTERVAL-WORKS", "RP006-SPEECH-01", "causation_boundary_explanation", ["causation_boundary"]),
    ],
  });
}

function source(form) {
  const expected = rp007Contract.python_contract.forms[form];
  return `from pathlib import Path

report_path = Path("${expected.filename}")
report_text = (
${expected.lines.map((line) => `    "${line}\\n"`).join("\n")}
)
report_path.write_text(report_text, encoding="utf-8")
restored_report = report_path.read_text(encoding="utf-8")`;
}

function memory(mode = "normal") {
  const record = predecessor();
  const intervalBytes = JSON.stringify(record);
  const manyfoldBytes = "fixture-exact-td005-bytes";
  const threeCurrentBytes = "fixture-exact-td004-bytes";
  const values = new Map([
    [INTERVAL_WORKS_SAVE_KEY, intervalBytes],
    [MANYFOLD_RETURN_SAVE_KEY, manyfoldBytes],
    [THREE_CURRENT_REACH_SAVE_KEY, threeCurrentBytes],
  ]);
  let candidateWritten = false;
  const storage = {
    getItem(key) {
      if (["readback-failure", "rollback-unverified"].includes(mode)
        && key === BRAIDED_VERGE_SAVE_KEY && candidateWritten) return "{";
      return values.get(key) ?? null;
    },
    setItem(key, value) {
      if (mode === "write-failure" && key === BRAIDED_VERGE_SAVE_KEY) throw new Error("fixture write unavailable");
      values.set(key, value);
      if (key === BRAIDED_VERGE_SAVE_KEY) candidateWritten = true;
    },
    removeItem(key) {
      if (mode === "rollback-unverified" && key === BRAIDED_VERGE_SAVE_KEY) throw new Error("fixture rollback unavailable");
      values.delete(key);
      if (key === BRAIDED_VERGE_SAVE_KEY) candidateWritten = false;
    },
  };
  return {
    record,
    intervalBytes,
    manyfoldBytes,
    threeCurrentBytes,
    storage,
    bytes: (key) => values.get(key) ?? null,
  };
}

function subject(mode = "normal", options = {}) {
  const store = memory(mode);
  const adapter = createBraidedVergeStorageAdapter(store.storage, {
    intervalRecord: store.record,
    intervalBytes: store.intervalBytes,
    manyfoldBytes: store.manyfoldBytes,
    threeCurrentBytes: store.threeCurrentBytes,
  });
  const controller = createBraidedVergeNormalController({
    predecessorRecord: store.record,
    predecessorBytes: store.intervalBytes,
    readPredecessorBytes: () => store.bytes(INTERVAL_WORKS_SAVE_KEY),
    manyfoldBytes: store.manyfoldBytes,
    readManyfoldBytes: () => store.bytes(MANYFOLD_RETURN_SAVE_KEY),
    threeCurrentBytes: store.threeCurrentBytes,
    readThreeCurrentBytes: () => store.bytes(THREE_CURRENT_REACH_SAVE_KEY),
    entryIntent: createBraidedVergeRouteIntent(
      braidedVergeActions.route,
      "screen_reader",
      "fixture-entry-token",
    ),
    adapter,
    ...options,
  });
  return { controller, store };
}

let fixtureToken = 0;
function dispatch(item, action) {
  fixtureToken += 1;
  return item.controller.dispatch(createBraidedVergeIntent(
    item.controller.getState(),
    action,
    "screen_reader",
    `fixture-token-${fixtureToken}`,
  ));
}

function update(item, values) {
  Object.entries(values).forEach(([key, value]) => item.controller.updateField(key, value));
}

const observations = [
  braidedVergeActions.continuities,
  braidedVergeActions.association,
  braidedVergeActions.difference,
  braidedVergeActions.order,
  braidedVergeActions.junction,
];

function enterObservations(item, count = 0, order = observations) {
  dispatch(item, braidedVergeActions.inspect);
  order.slice(0, count).forEach((action) => dispatch(item, action));
}

function submitVision(item, form, pass = true) {
  rp007Contract.ai901_contract.forms[form].forEach((entry, index) => {
    update(item, {
      [`${entry.id}.capability`]: !pass && index === 0
        ? entry.capability === "computer_vision" ? "image_generation" : "computer_vision"
        : entry.capability,
      [`${entry.id}.deciding_signal`]: entry.deciding_signal,
    });
  });
  return dispatch(item, braidedVergeActions[`vision${form[0].toUpperCase()}${form.slice(1)}`]);
}

function advance(item, count = 8) {
  enterObservations(item, 5);
  const steps = [
    () => { update(item, { learnerSource: source("primary") }); dispatch(item, braidedVergeActions.pythonPrimary); },
    () => { update(item, braidedVergePythonTraceAnswers); dispatch(item, braidedVergeActions.pythonTrace); },
    () => { update(item, { learnerSource: source("transfer") }); dispatch(item, braidedVergeActions.pythonTransfer); },
    () => submitVision(item, "primary"),
    () => submitVision(item, "retrieval"),
    () => submitVision(item, "transfer"),
    () => { update(item, { capabilityBoundary: braidedVergeExplanationAnswers.capabilityBoundary }); dispatch(item, braidedVergeActions.capabilityBoundary); },
    () => { update(item, { relationBoundary: braidedVergeExplanationAnswers.relationBoundary }); dispatch(item, braidedVergeActions.relationBoundary); },
  ];
  steps.slice(0, count).forEach((step) => step());
}

function complete(mode = "normal") {
  const item = subject(mode);
  advance(item);
  dispatch(item, braidedVergeActions.review);
  const saved = dispatch(item, braidedVergeActions.save);
  return { ...item, saved };
}

function iw30(statusMessageId = "td007:iw30_braided_route_choice:ready") {
  return {
    shellVersion: "SS-RP006-INTERVAL-WORKS-v1",
    controllerVersion: "rp006.interval-works-controller.v1",
    packetId: "RP-006",
    mappingId: "RP006-A3-INTERVAL-WORKS",
    phase: "IW-30 ROUTE CHOICE",
    boardState: "SC-07",
    activeGroup: BRAIDED_VERGE_ROUTE_GROUP,
    owner: BRAIDED_VERGE_ROUTE_OWNER,
    headingId: "bv-route-choice-heading",
    statusRegionId: "interval-works-status",
    statusMessageId,
    statusMessage: "Exact Interval Works remains. A fresh valid route choice is required.",
    availableActions: [
      braidedVergeActions.route,
      intervalWorksActions.returnManyfold,
      intervalWorksActions.returnThreshold,
    ],
    replayedEvents: [],
    focusIntent: { group: BRAIDED_VERGE_ROUTE_GROUP, target: "bv-route-choice-heading" },
  };
}

function cityThreshold() {
  return {
    shellVersion: "CITY-THRESHOLD-ACCEPTED",
    boardState: "SC-02-50",
    activeGroup: "city_threshold",
    owner: "PILOT // EXPEDITION NAVIGATION",
    headingId: "city-threshold-heading",
    statusMessageId: "td007:return:city-threshold:write-free",
    statusMessage: "Returned to the accepted City Threshold without write or replay.",
    availableActions: [],
    focusIntent: { group: "city_threshold", target: "city-threshold-heading" },
  };
}

function scenarioState(name) {
  if (name === "iw30-route-ready") return iw30();
  if (name.startsWith("route-") || name.startsWith("reload-")) {
    return iw30(`td007:route:${name.replace("route-", "")}:no-effect`);
  }
  if (name === "bv00-arrive-idle") return subject().controller.getState();
  if (name === "bv00-early-return-interval") return iw30("td007:return:interval-works:write-free");
  if (name === "bv00-early-return-threshold") return cityThreshold();
  if (name.startsWith("bv10-")) {
    const item = subject();
    const selected = {
      "bv10-continuities-recorded": braidedVergeActions.continuities,
      "bv10-association-recorded": braidedVergeActions.association,
      "bv10-difference-recorded": braidedVergeActions.difference,
      "bv10-order-recorded": braidedVergeActions.order,
      "bv10-junction-recorded": braidedVergeActions.junction,
    }[name];
    const count = name.includes("none") ? 0 : name.includes("four") ? 4 : name.includes("all") ? 5 : 1;
    enterObservations(item, selected ? 1 : count, selected ? [selected] : observations);
    if (name.includes("revisit")) {
      dispatch(item, braidedVergeActions.continuities);
      dispatch(item, braidedVergeActions.continuities);
    }
    return item.controller.getState();
  }
  const blankCount = {
    "bv20-python-primary-blank": 0,
    "bv20-python-trace-blank": 1,
    "bv20-python-transfer-blank": 2,
    "bv20-vision-primary-blank": 3,
    "bv20-vision-retrieval-blank": 4,
    "bv20-vision-transfer-blank": 5,
    "bv20-capability-explanation-blank": 6,
    "bv20-relation-explanation-blank": 7,
    "bv20-conjunctive-review": 8,
  }[name];
  if (blankCount !== undefined) {
    const item = subject();
    advance(item, blankCount);
    return item.controller.getState();
  }
  if (name === "bv20-python-primary-miss") {
    const item = subject();
    enterObservations(item, 5);
    update(item, { learnerSource: "from pathlib import Path" });
    dispatch(item, braidedVergeActions.pythonPrimary);
    return item.controller.getState();
  }
  if (name === "bv20-python-primary-cleanup-failure") {
    const item = subject("normal", { workspaceOptions: { primary: { simulateCleanupFailure: true } } });
    enterObservations(item, 5);
    update(item, { learnerSource: source("primary") });
    dispatch(item, braidedVergeActions.pythonPrimary);
    return item.controller.getState();
  }
  if (name === "bv20-python-primary-pass") {
    const item = subject();
    advance(item, 1);
    return item.controller.getState();
  }
  if (name === "bv20-python-trace-miss") {
    const item = subject();
    advance(item, 1);
    update(item, { ...braidedVergePythonTraceAnswers, pathObject: "review_pathObject_boundary" });
    dispatch(item, braidedVergeActions.pythonTrace);
    return item.controller.getState();
  }
  if (name === "bv20-python-trace-pass") {
    const item = subject();
    advance(item, 2);
    return item.controller.getState();
  }
  if (name === "bv20-python-transfer-miss" || name === "bv20-python-transfer-cleanup-failure") {
    const cleanup = name.includes("cleanup");
    const item = subject("normal", cleanup ? { workspaceOptions: { transfer: { simulateCleanupFailure: true } } } : {});
    advance(item, 2);
    update(item, { learnerSource: cleanup ? source("transfer") : "from pathlib import Path" });
    dispatch(item, braidedVergeActions.pythonTransfer);
    return item.controller.getState();
  }
  if (name === "bv20-python-transfer-pass") {
    const item = subject();
    advance(item, 3);
    return item.controller.getState();
  }
  for (const form of ["primary", "retrieval", "transfer"]) {
    if (name === `bv20-vision-${form}-miss`) {
      const item = subject();
      advance(item, { primary: 3, retrieval: 4, transfer: 5 }[form]);
      submitVision(item, form, false);
      return item.controller.getState();
    }
    if (name === `bv20-vision-${form}-pass`) {
      const item = subject();
      advance(item, { primary: 4, retrieval: 5, transfer: 6 }[form]);
      return item.controller.getState();
    }
  }
  if (name === "bv20-capability-explanation-miss" || name === "bv20-relation-explanation-miss") {
    const capability = name.includes("capability");
    const item = subject();
    advance(item, capability ? 6 : 7);
    update(item, capability
      ? { capabilityBoundary: "review_capabilityBoundary_without_world_inference" }
      : { relationBoundary: "review_relationBoundary_without_world_inference" });
    dispatch(item, capability ? braidedVergeActions.capabilityBoundary : braidedVergeActions.relationBoundary);
    return item.controller.getState();
  }
  if (name === "bv20-save-ready") {
    const item = subject();
    advance(item);
    dispatch(item, braidedVergeActions.review);
    return item.controller.getState();
  }
  if (name === "bv20-save-write-failure") return complete("write-failure").controller.getState();
  if (name === "bv20-save-readback-failure") return complete("readback-failure").controller.getState();
  if (name === "bv20-save-rollback-unverified") return complete("rollback-unverified").controller.getState();
  if (name === "bv30-verified-restore") return complete().controller.getState();
  if (name === "bv30-return-interval") return iw30("td007:return:interval-works:write-free");
  if (name === "bv30-return-threshold") return cityThreshold();
  return iw30("td007:fixture:fallback:no-effect");
}

export function createBraidedVergeScenario(name) {
  if (!braidedVergeScenarioNames.includes(name)) throw new TypeError("A closed TD-007 scenario is required.");
  const state = scenarioState(name);
  const scene = resolveBraidedVergeWorldScene(state);
  return Object.freeze({
    name,
    state: Object.freeze(state),
    scene: scene ? Object.freeze(scene) : null,
    storage: "frozen-in-memory-only",
    arbitraryStateAccepted: false,
  });
}
