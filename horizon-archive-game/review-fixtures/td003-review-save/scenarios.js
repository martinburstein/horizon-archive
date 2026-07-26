import contract from "../../../curriculum/readiness/RP-003/contract.json" with { type: "json" };
import {
  createCalibrationMarginPythonCheckpointAdapter,
  createCalibrationMarginPythonEvidenceRecord,
} from "../../src/CalibrationMarginPythonCheckpoint.js";
import {
  createCalibrationMarginExtractionCheckpointAdapter,
  createCalibrationMarginExtractionEvidenceRecord,
} from "../../src/CalibrationMarginExtractionCheckpoint.js";
import {
  CALIBRATION_MARGIN_REVIEW_SAVE_KEY,
  calibrationMarginReviewSaveActions,
  createCalibrationMarginReviewSaveController,
  createCalibrationMarginReviewSaveIntent,
  createCalibrationMarginReviewSaveStorageAdapter,
} from "../../src/CalibrationMarginReviewSave.js";

export const TD003_REVIEW_SAVE_FIXTURE = "TD003_REVIEW_SAVE_FIXTURE";
export const reviewSaveScenarios = Object.freeze([
  "cm40-five-conjunct-ready",
  "cm40-provenance-pending",
  "cm40-observation-invalid",
  "cm40-python-invalid",
  "cm40-ie-invalid",
  "cm40-invariant-invalid",
  "cm41-save-committed",
  "cm41-write-failed-last-good",
  "cm50-verified-restore",
  "cm50-return-civic-comparison",
  "cm50-return-city-threshold",
]);

function checkpoints() {
  const python = createCalibrationMarginPythonCheckpointAdapter();
  const allPython = Object.fromEntries(
    contract.python_contract.checks.map((id) => [id, true]),
  );
  python.append(createCalibrationMarginPythonEvidenceRecord("primary", allPython));
  python.append(createCalibrationMarginPythonEvidenceRecord("retrieval", {
    condition: true,
    trueBranch: true,
    falseBranch: true,
    unavailableBoundary: true,
  }));
  python.append(createCalibrationMarginPythonEvidenceRecord("transfer", allPython));

  const extraction = createCalibrationMarginExtractionCheckpointAdapter();
  const allExtraction = Object.fromEntries(
    contract.ai901_contract.dimensions.map((id) => [id, true]),
  );
  extraction.append(createCalibrationMarginExtractionEvidenceRecord("primary", allExtraction));
  extraction.append(createCalibrationMarginExtractionEvidenceRecord("retrieval", allExtraction));
  extraction.append([
    createCalibrationMarginExtractionEvidenceRecord("transfer", allExtraction),
    createCalibrationMarginExtractionEvidenceRecord(
      "unsupported_explanation",
      { unavailable_input_cannot_support_value: true },
    ),
  ]);
  return { python: python.getState(), extraction: extraction.getState() };
}

function sources(overrides = {}) {
  const source = checkpoints();
  return {
    observations: ["correspondence", "bounded_difference", "sealed_unavailable"],
    pythonCheckpoint: source.python,
    extractionCheckpoint: source.extraction,
    extractionState: {
      version: "rp003.extraction-floor.v1",
      shellVersion: "SS-RP003-IE01-v1",
      packetId: "RP-003",
      boardState: "SC-04",
      phase: "IE-P3",
      activeGroup: "ie_finalized",
      owner: "SYSTEM",
      checkpoint: "IE-P3",
      finalizedSkillIds: ["RP003-IE-01"],
      continuation: "continuation",
      cityStateDelta: null,
      worldStateDelta: null,
      accessStateDelta: null,
      successor: null,
      privateWorkCleared: true,
      transientWorkCleared: true,
      authorityGranted: false,
      externalActionEnabled: false,
      worldStateChanged: false,
    },
    invariants: {
      worldStateDelta: null,
      accessStateDelta: null,
      authorityGranted: false,
      externalActionEnabled: false,
      worldStateChanged: false,
    },
    ...overrides,
  };
}

function memory(seed = null, fail = false) {
  let bytes = seed;
  return {
    storage: {
      getItem(key) {
        if (key !== CALIBRATION_MARGIN_REVIEW_SAVE_KEY) return null;
        return bytes;
      },
      setItem(key, value) {
        if (key !== CALIBRATION_MARGIN_REVIEW_SAVE_KEY || fail) {
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

function intent(controller, action, token) {
  return createCalibrationMarginReviewSaveIntent(
    controller.getState(),
    action,
    "screen_reader",
    token,
  );
}

function controllerWith(source = sources(), store = memory()) {
  return {
    controller: createCalibrationMarginReviewSaveController({
      sources: source,
      adapter: createCalibrationMarginReviewSaveStorageAdapter(store.storage),
    }),
    store,
  };
}

function open(controller) {
  return controller.dispatch(intent(
    controller,
    calibrationMarginReviewSaveActions.review,
    "fixture-review",
  ));
}

function inspect(controller) {
  return controller.dispatch(intent(
    controller,
    calibrationMarginReviewSaveActions.provenance,
    "fixture-provenance",
  ));
}

function fixedBoundary(recovery, statusMessage = "The first incomplete blank boundary is ready.") {
  const owner = recovery.group === "observations" ? "SCENE" : "SYSTEM";
  return {
    version: "rp003.review-save-controller.v1",
    shellVersion: "SS-RP003-REVIEW-SAVE-v1",
    packetId: "RP-003",
    boardState: "SC-04",
    phase: recovery.phase,
    activeGroup: recovery.group,
    owner,
    statusMessage,
    statusMessageId: `${recovery.group}:fixture-recovery`,
    reviewRows: [],
    provenanceInspected: false,
    provenanceDetail: null,
    saveEligibility: false,
    saveDisabled: false,
    note: null,
    recordIntegrity: null,
    availableActions: [
      recovery.target === "heading" ? "FOCUS BLANK BOUNDARY" : recovery.target,
    ],
    focusIntent: { group: recovery.group, target: "heading" },
    privateWorkCleared: true,
    transientWorkCleared: true,
    replayedEvents: [],
    continuation: "continuation",
    cityStateDelta: null,
    worldStateDelta: null,
    accessStateDelta: null,
    successor: null,
    authorityGranted: false,
    externalActionEnabled: false,
    worldStateChanged: false,
  };
}

export function createReviewSaveScenario(name) {
  if (!reviewSaveScenarios.includes(name)) {
    throw new TypeError("A closed TD-003 review-save scenario is required.");
  }
  if (name === "cm40-observation-invalid") {
    const subject = controllerWith(sources({ observations: [] })).controller;
    return { name, state: fixedBoundary(open(subject).recoveryTarget) };
  }
  if (name === "cm40-python-invalid") {
    const exact = sources();
    const subject = controllerWith(sources({
      pythonCheckpoint: { ...exact.pythonCheckpoint, checkpoint: "P1", evidence: exact.pythonCheckpoint.evidence.slice(0, 1) },
    })).controller;
    return { name, state: fixedBoundary(open(subject).recoveryTarget) };
  }
  if (name === "cm40-ie-invalid") {
    const exact = sources();
    const subject = controllerWith(sources({
      extractionCheckpoint: { ...exact.extractionCheckpoint, checkpoint: "IE-P1", evidence: exact.extractionCheckpoint.evidence.slice(0, 1) },
    })).controller;
    return { name, state: fixedBoundary(open(subject).recoveryTarget) };
  }
  if (name === "cm40-invariant-invalid") {
    const exact = sources();
    const subject = controllerWith(sources({
      invariants: { ...exact.invariants, worldStateChanged: true },
    })).controller;
    return { name, state: fixedBoundary(open(subject).recoveryTarget, "No world invariant was accepted; no write occurred.") };
  }

  const subject = controllerWith();
  open(subject.controller);
  if (name === "cm40-five-conjunct-ready") {
    return { name, state: subject.controller.getState() };
  }
  if (name === "cm40-provenance-pending") {
    return { name, state: subject.controller.getState() };
  }
  inspect(subject.controller);
  const saved = subject.controller.dispatch(intent(
    subject.controller,
    calibrationMarginReviewSaveActions.save,
    "fixture-save",
  ));
  if (name === "cm41-save-committed") {
    return { name, state: saved.transactionState };
  }
  if (name === "cm50-verified-restore") {
    return { name, state: saved.state };
  }
  if (name === "cm50-return-civic-comparison"
    || name === "cm50-return-city-threshold") {
    const action = name.endsWith("civic-comparison")
      ? calibrationMarginReviewSaveActions.returnCivicComparison
      : calibrationMarginReviewSaveActions.returnCityThreshold;
    const returned = subject.controller.dispatch(intent(
      subject.controller,
      action,
      `fixture-return-${name.length}`,
    ));
    return {
      name,
      state: fixedBoundary({
        group: returned.route.target === "RP-002"
          ? "rp002_verified_restore"
          : "city_threshold",
        phase: returned.route.target === "RP-002"
          ? "SC-03-50 VERIFIED RESTORE"
          : "SC-02-50 CITY THRESHOLD",
        target: "heading",
      }, "Known anchor restored with no replay or write."),
    };
  }

  const validBytes = subject.store.bytes();
  const failedSubject = controllerWith(sources(), memory(validBytes, true));
  open(failedSubject.controller);
  inspect(failedSubject.controller);
  const failed = failedSubject.controller.dispatch(intent(
    failedSubject.controller,
    calibrationMarginReviewSaveActions.save,
    "fixture-failed-save",
  ));
  return {
    name,
    state: failed.state,
    lastGoodBytesPreserved: failed.lastGoodBytesPreserved,
  };
}
