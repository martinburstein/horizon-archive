import {
  CALIBRATION_MARGIN_EXTRACTION_SHELL_VERSION,
  createCalibrationMarginExtractionCheckpointAdapter,
  createCalibrationMarginExtractionEvidenceRecord,
} from "./CalibrationMarginExtractionCheckpoint.js";
import {
  CALIBRATION_MARGIN_IE_DIMENSIONS,
  CALIBRATION_MARGIN_UNSUPPORTED_EXPLANATION,
  evaluateCalibrationMarginInformationExtraction,
  evaluateCalibrationMarginUnsupportedExplanation,
  getCalibrationMarginInformationExtractionPresentation,
} from "./CalibrationMarginInformationExtraction.js";

export const CALIBRATION_MARGIN_EXTRACTION_FLOOR_VERSION =
  "rp003.extraction-floor.v1";

export const calibrationMarginExtractionActions = Object.freeze({
  begin: "BEGIN_EXTRACTION",
  submitPrimary: "SUBMIT_EXTRACTION_PRIMARY",
  clear: "CLEAR_EXTRACTION_WORK",
  returnPython: "RETURN_TO_PYTHON_LANDING",
  retryPrimary: "RETRY_BLANK_EXTRACTION_PRIMARY",
  continueRetrieval: "CONTINUE_TO_EXTRACTION_RETRIEVAL",
  submitRetrieval: "SUBMIT_EXTRACTION_RETRIEVAL",
  retryRetrieval: "RETRY_BLANK_EXTRACTION_RETRIEVAL",
  submitTransfer: "SUBMIT_EXTRACTION_TRANSFER",
  retryTransfer: "RETRY_BLANK_EXTRACTION_TRANSFER",
});

export const calibrationMarginExtractionActionLabels = Object.freeze({
  [calibrationMarginExtractionActions.begin]: "BEGIN FRESH EXTRACTION RECORD",
  [calibrationMarginExtractionActions.submitPrimary]:
    "CHECK PRIMARY SOURCE BOUNDARY",
  [calibrationMarginExtractionActions.clear]:
    "CLEAR CURRENT EXTRACTION WORK",
  [calibrationMarginExtractionActions.returnPython]:
    "RETURN TO FINALIZED PYTHON",
  [calibrationMarginExtractionActions.retryPrimary]:
    "OPEN BLANK PRIMARY RETRY",
  [calibrationMarginExtractionActions.continueRetrieval]:
    "CONTINUE TO FRESH CLOSED-NOTE CHECK",
  [calibrationMarginExtractionActions.submitRetrieval]:
    "CHECK CLOSED-NOTE SOURCE BOUNDARY",
  [calibrationMarginExtractionActions.retryRetrieval]:
    "OPEN BLANK RETRIEVAL RETRY",
  [calibrationMarginExtractionActions.submitTransfer]:
    "CHECK MISSING-INPUT BOUNDARY",
  [calibrationMarginExtractionActions.retryTransfer]:
    "OPEN BLANK TRANSFER RETRY",
});

const dimensions = CALIBRATION_MARGIN_IE_DIMENSIONS;
const explanationId = "unsupported_explanation";
const explanationChoices = Object.freeze([
  "unavailable_input_can_be_reported_as_a_negative_result",
  CALIBRATION_MARGIN_UNSUPPORTED_EXPLANATION,
  "missing_input_can_be_inferred_from_available_modalities",
]);

export const calibrationMarginExtractionGroups = Object.freeze({
  entry: Object.freeze({
    phase: "PY010-P3",
    activeGroup: "python_finalized",
    owner: "SYSTEM",
    form: null,
    fieldNames: Object.freeze([]),
    actions: Object.freeze([calibrationMarginExtractionActions.begin]),
  }),
  primary: Object.freeze({
    phase: "CM-30 EXTRACTION PRIMARY",
    activeGroup: "ie_primary",
    owner: "PILOT",
    form: "primary",
    fieldNames: dimensions,
    actions: Object.freeze([
      calibrationMarginExtractionActions.submitPrimary,
      calibrationMarginExtractionActions.clear,
      calibrationMarginExtractionActions.returnPython,
    ]),
  }),
  primaryRepair: Object.freeze({
    phase: "CM-31 PRIMARY REPAIR",
    activeGroup: "ie_primary_repair",
    owner: "TEACHER",
    form: "primary",
    fieldNames: Object.freeze([]),
    actions: Object.freeze([
      calibrationMarginExtractionActions.retryPrimary,
      calibrationMarginExtractionActions.returnPython,
    ]),
  }),
  interlude: Object.freeze({
    phase: "CM-32 EXTRACTION INTERLUDE",
    activeGroup: "ie_interlude",
    owner: "SYSTEM",
    form: null,
    fieldNames: Object.freeze([]),
    actions: Object.freeze([
      calibrationMarginExtractionActions.continueRetrieval,
      calibrationMarginExtractionActions.returnPython,
    ]),
  }),
  retrieval: Object.freeze({
    phase: "CM-33 EXTRACTION RETRIEVAL",
    activeGroup: "ie_retrieval",
    owner: "PILOT",
    form: "retrieval",
    fieldNames: dimensions,
    actions: Object.freeze([
      calibrationMarginExtractionActions.submitRetrieval,
      calibrationMarginExtractionActions.clear,
    ]),
  }),
  retrievalRepair: Object.freeze({
    phase: "CM-31 RETRIEVAL REPAIR",
    activeGroup: "ie_retrieval_repair",
    owner: "TEACHER",
    form: "retrieval",
    fieldNames: Object.freeze([]),
    actions: Object.freeze([
      calibrationMarginExtractionActions.retryRetrieval,
    ]),
  }),
  transfer: Object.freeze({
    phase: "CM-34 EXTRACTION TRANSFER",
    activeGroup: "ie_transfer",
    owner: "PILOT",
    form: "transfer",
    fieldNames: Object.freeze([...dimensions, explanationId]),
    actions: Object.freeze([
      calibrationMarginExtractionActions.submitTransfer,
      calibrationMarginExtractionActions.clear,
    ]),
  }),
  transferRepair: Object.freeze({
    phase: "CM-31 TRANSFER REPAIR",
    activeGroup: "ie_transfer_repair",
    owner: "TEACHER",
    form: "transfer",
    fieldNames: Object.freeze([]),
    actions: Object.freeze([
      calibrationMarginExtractionActions.retryTransfer,
    ]),
  }),
  finalized: Object.freeze({
    phase: "IE-P3",
    activeGroup: "ie_finalized",
    owner: "SYSTEM",
    form: null,
    fieldNames: Object.freeze([]),
    actions: Object.freeze([]),
  }),
});

const modalities = Object.freeze([
  "pointer",
  "touch",
  "keyboard_enter",
  "keyboard_space",
  "switch",
  "speech",
  "screen_reader",
]);
const intentKeys = Object.freeze([
  "shellVersion",
  "packetId",
  "activeGroupId",
  "expectedOwner",
  "allowlistedActionId",
  "activationKind",
  "opaqueFreshEventToken",
]);

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function exactKeys(value, expected) {
  return value && typeof value === "object" && !Array.isArray(value)
    && Object.keys(value).sort().join("|") === [...expected].sort().join("|");
}

function opaqueToken(value) {
  return typeof value === "string"
    && /^[a-z0-9][a-z0-9:_-]{5,79}$/i.test(value);
}

function exactIntent(intent, group) {
  return exactKeys(intent, intentKeys)
    && intent.shellVersion === CALIBRATION_MARGIN_EXTRACTION_SHELL_VERSION
    && intent.packetId === "RP-003"
    && intent.activeGroupId === group.activeGroup
    && intent.expectedOwner === group.owner
    && group.actions.includes(intent.allowlistedActionId)
    && modalities.includes(intent.activationKind)
    && opaqueToken(intent.opaqueFreshEventToken);
}

export function exactCalibrationMarginExtractionEntryBoundary(value) {
  return value?.version === "rp003.python-floor.v1"
    && value.shellVersion === "SS-RP003-PY010-v1"
    && value.packetId === "RP-003"
    && value.boardState === "SC-04"
    && value.phase === "PY010-P3"
    && value.activeGroup === "python_finalized"
    && value.owner === "SYSTEM"
    && value.checkpoint === "P3"
    && Array.isArray(value.finalizedSkillIds)
    && value.finalizedSkillIds.length === 1
    && value.finalizedSkillIds[0] === "PY-010"
    && value.continuation === "continuation"
    && value.cityStateDelta === null
    && value.worldStateDelta === null
    && value.accessStateDelta === null
    && value.successor === null
    && value.privateWorkCleared === true
    && value.transientWorkCleared === true
    && value.saveEligibility === false
    && value.authorityGranted === false
    && value.externalActionEnabled === false
    && value.worldStateChanged === false;
}

function groupForCheckpoint(checkpoint) {
  if (checkpoint === "IE-P1") return calibrationMarginExtractionGroups.interlude;
  if (checkpoint === "IE-P2") return calibrationMarginExtractionGroups.transfer;
  if (checkpoint === "IE-P3") return calibrationMarginExtractionGroups.finalized;
  return calibrationMarginExtractionGroups.entry;
}

function blankValues(group) {
  return Object.fromEntries(group.fieldNames.map((name) => [name, ""]));
}

function firstField(group) {
  return group.fieldNames[0] ?? "heading";
}

function makeState(group, options = {}) {
  const values = options.values ?? blankValues(group);
  const blank = Object.values(values).every((value) => value === "")
    && (options.confidence ?? "") === "";
  const presentation = group.form && !group.activeGroup.endsWith("_repair")
    ? getCalibrationMarginInformationExtractionPresentation(group.form)
    : null;
  return {
    version: CALIBRATION_MARGIN_EXTRACTION_FLOOR_VERSION,
    shellVersion: CALIBRATION_MARGIN_EXTRACTION_SHELL_VERSION,
    packetId: "RP-003",
    boardState: "SC-04",
    phase: group.phase,
    activeGroup: group.activeGroup,
    owner: group.owner,
    form: group.form,
    continuation: "continuation",
    cityStateDelta: null,
    worldStateDelta: null,
    accessStateDelta: null,
    successor: null,
    privateWorkCleared: blank,
    transientWorkCleared: blank,
    saveEligibility: false,
    authorityGranted: false,
    externalActionEnabled: false,
    worldStateChanged: false,
    availableActions: [...group.actions],
    fieldNames: [...group.fieldNames],
    fieldValues: { ...values },
    fieldErrors: { ...(options.fieldErrors ?? {}) },
    failedIds: [...(options.failedIds ?? [])],
    confidence: options.confidence ?? "",
    presentation: presentation ? clone(presentation) : null,
    explanationChoices: group === calibrationMarginExtractionGroups.transfer
      ? [...explanationChoices]
      : [],
    statusMessageId: options.statusMessageId ?? `${group.activeGroup}:ready`,
    statusMessage: options.statusMessage ?? "This local extraction boundary is ready.",
    focusIntent: {
      group: group.activeGroup,
      target: options.focusTarget ?? "heading",
    },
    checkpoint: options.checkpoint ?? "IE-P0",
    finalizedSkillIds: group === calibrationMarginExtractionGroups.finalized
      ? ["RP003-IE-01"]
      : group === calibrationMarginExtractionGroups.entry
        ? ["PY-010"]
        : [],
  };
}

function actionKind(actionId) {
  if (actionId === calibrationMarginExtractionActions.begin) return "begin";
  if (actionId === calibrationMarginExtractionActions.submitPrimary
    || actionId === calibrationMarginExtractionActions.submitRetrieval
    || actionId === calibrationMarginExtractionActions.submitTransfer) return "submit";
  if (actionId === calibrationMarginExtractionActions.clear) return "clear";
  if (actionId === calibrationMarginExtractionActions.returnPython) return "return";
  if (actionId === calibrationMarginExtractionActions.retryPrimary
    || actionId === calibrationMarginExtractionActions.retryRetrieval
    || actionId === calibrationMarginExtractionActions.retryTransfer) return "retry";
  if (actionId === calibrationMarginExtractionActions.continueRetrieval) return "continue";
  return "unavailable";
}

function formGroup(form) {
  if (form === "primary") return calibrationMarginExtractionGroups.primary;
  if (form === "retrieval") return calibrationMarginExtractionGroups.retrieval;
  return calibrationMarginExtractionGroups.transfer;
}

function repairGroup(form) {
  if (form === "primary") return calibrationMarginExtractionGroups.primaryRepair;
  if (form === "retrieval") return calibrationMarginExtractionGroups.retrievalRepair;
  return calibrationMarginExtractionGroups.transferRepair;
}

function passGroup(form) {
  if (form === "primary") return calibrationMarginExtractionGroups.interlude;
  if (form === "retrieval") return calibrationMarginExtractionGroups.transfer;
  return calibrationMarginExtractionGroups.finalized;
}

function passStatus(form) {
  if (form === "primary") {
    return Object.freeze({
      status: "extraction_primary_finalized",
      message: "Primary source boundary recorded locally. No choices will carry into the fresh closed-note check.",
    });
  }
  if (form === "retrieval") {
    return Object.freeze({
      status: "extraction_retrieval_finalized",
      message: "Closed-note boundary recorded locally. A distinct blank missing-input transfer is ready.",
    });
  }
  return Object.freeze({
    status: "extraction_finalized",
    message: "RP003-IE-01 is finalized locally. Nothing was sent to a service, and no onward action is available.",
  });
}

export function createCalibrationMarginExtractionIntent(
  state,
  actionId,
  activationKind,
  eventToken,
) {
  return Object.freeze({
    shellVersion: CALIBRATION_MARGIN_EXTRACTION_SHELL_VERSION,
    packetId: "RP-003",
    activeGroupId: state?.activeGroup ?? null,
    expectedOwner: state?.owner ?? null,
    allowlistedActionId: actionId,
    activationKind,
    opaqueFreshEventToken: eventToken,
  });
}

export function createCalibrationMarginExtractionFloor(options = {}) {
  const checkpointAdapter = createCalibrationMarginExtractionCheckpointAdapter({
    restoredState: options.restoredCheckpoint,
    commit: options.commitCheckpoint,
  });
  const restoration = checkpointAdapter.getRestoration();
  const acceptedPython = exactCalibrationMarginExtractionEntryBoundary(
    options.acceptedPythonState,
  );
  const checkpoint = checkpointAdapter.getState().checkpoint;
  const canResume = restoration.valid && ["IE-P1", "IE-P2", "IE-P3"].includes(checkpoint);
  let group = canResume && options.requireFreshEntry !== true
    ? groupForCheckpoint(checkpoint)
    : calibrationMarginExtractionGroups.entry;
  let state = makeState(group, {
    checkpoint,
    statusMessageId: restoration.valid
      ? `${group.activeGroup}:reconstructed`
      : "python_finalized:resume-sanitized",
    statusMessage: restoration.valid
      ? canResume
        ? "Finalized local prefix restored at the first incomplete boundary."
        : "Python is finalized. A fresh Pilot extraction choice is available."
      : "Unsafe extraction state was cleared; finalized Python remains available.",
  });
  let active = acceptedPython || canResume;
  const handledTokens = new Set();
  const attempts = { primary: 0, retrieval: 0, transfer: 0 };
  const repairs = { primary: 0, retrieval: 0, transfer: 0 };

  const reject = (reason) => Object.freeze({
    status: "rejected",
    reason,
    state: clone(state),
  });

  const reconstruct = (prefix, message) => {
    group = groupForCheckpoint(prefix);
    state = makeState(group, {
      checkpoint: prefix,
      statusMessageId: `${group.activeGroup}:checkpoint-recovery`,
      statusMessage: message,
    });
  };

  return Object.freeze({
    getState() {
      return clone(state);
    },
    getCheckpoint() {
      return checkpointAdapter.getState();
    },
    updateField(name, value) {
      if (!active || !group.fieldNames.includes(name)) {
        return reject("field_unavailable");
      }
      if (typeof value !== "string" || value.length > 240) {
        return reject("field_value_rejected");
      }
      const allowed = name === explanationId
        ? explanationChoices
        : state.presentation?.choices?.[name] ?? [];
      if (!allowed.includes(value)) {
        return reject("field_value_rejected");
      }
      state = {
        ...state,
        fieldValues: { ...state.fieldValues, [name]: value },
        fieldErrors: Object.fromEntries(
          Object.entries(state.fieldErrors).filter(([field]) => field !== name),
        ),
        privateWorkCleared: false,
        transientWorkCleared: false,
      };
      return Object.freeze({ status: "field_updated_private", state: clone(state) });
    },
    updateConfidence(value) {
      if (!active
        || !["primary", "retrieval", "transfer"].includes(group.form)
        || !["", "low", "medium", "high"].includes(value)) {
        return reject("confidence_rejected");
      }
      state = {
        ...state,
        confidence: value,
        privateWorkCleared: Object.values(state.fieldValues).every((item) => item === "")
          && value === "",
        transientWorkCleared: Object.values(state.fieldValues).every((item) => item === "")
          && value === "",
      };
      return Object.freeze({ status: "confidence_updated_zero_credit", state: clone(state) });
    },
    dispatch(intent) {
      if (!active) return reject("exact_python_p3_required");
      if (!exactIntent(intent, group)) return reject("intent_rejected");
      if (handledTokens.has(intent.opaqueFreshEventToken)) return reject("one_hit_only");
      const kind = actionKind(intent.allowlistedActionId);

      if (kind === "begin") {
        handledTokens.add(intent.opaqueFreshEventToken);
        group = groupForCheckpoint(checkpointAdapter.getState().checkpoint);
        if (group === calibrationMarginExtractionGroups.entry) {
          group = calibrationMarginExtractionGroups.primary;
        }
        state = makeState(group, {
          checkpoint: checkpointAdapter.getState().checkpoint,
          statusMessageId: `${group.activeGroup}:fresh-entry`,
          statusMessage: group === calibrationMarginExtractionGroups.primary
            ? "A fresh blank source-accountability record is ready. No prior answer is present."
            : "The first incomplete local boundary is ready. Prior active work was not restored.",
        });
        return Object.freeze({
          status: group === calibrationMarginExtractionGroups.primary
            ? "extraction_primary_visible"
            : "extraction_boundary_resumed",
          state: clone(state),
        });
      }

      if (kind === "clear") {
        const populated = Object.values(state.fieldValues).some((value) => value !== "")
          || state.confidence !== "";
        if (!populated) return reject("clear_unavailable");
        handledTokens.add(intent.opaqueFreshEventToken);
        state = makeState(group, {
          checkpoint: checkpointAdapter.getState().checkpoint,
          focusTarget: firstField(group),
          statusMessageId: `${group.activeGroup}:cleared`,
          statusMessage: "Current private selections and confidence cleared.",
        });
        return Object.freeze({ status: "extraction_work_cleared", state: clone(state) });
      }

      if (kind === "return") {
        handledTokens.add(intent.opaqueFreshEventToken);
        group = calibrationMarginExtractionGroups.entry;
        state = makeState(group, {
          checkpoint: checkpointAdapter.getState().checkpoint,
          statusMessageId: "python_finalized:extraction-closed",
          statusMessage: "Extraction work cleared. Finalized Python remains unchanged.",
        });
        return Object.freeze({
          status: "returned_to_python_write_free",
          privateWorkCleared: true,
          checkpoint: checkpointAdapter.getState().checkpoint,
          state: clone(state),
        });
      }

      if (kind === "continue") {
        handledTokens.add(intent.opaqueFreshEventToken);
        group = calibrationMarginExtractionGroups.retrieval;
        state = makeState(group, {
          checkpoint: "IE-P1",
          statusMessageId: "ie_retrieval:fresh-continue",
          statusMessage: "A fresh blank closed-note record is ready; no primary choices were carried forward.",
        });
        return Object.freeze({
          status: "extraction_retrieval_visible",
          state: clone(state),
        });
      }

      if (kind === "retry") {
        handledTokens.add(intent.opaqueFreshEventToken);
        repairs[group.form] += 1;
        group = formGroup(group.form);
        state = makeState(group, {
          checkpoint: checkpointAdapter.getState().checkpoint,
          focusTarget: firstField(group),
          statusMessageId: `${group.activeGroup}:blank-retry`,
          statusMessage: "The prior attempt was cleared. A wholly blank retry is ready.",
        });
        return Object.freeze({ status: "extraction_blank_retry_ready", state: clone(state) });
      }

      if (kind !== "submit") return reject("action_unavailable");
      const incomplete = group.fieldNames.filter(
        (name) => state.fieldValues[name].trim() === "",
      );
      if (incomplete.length > 0) {
        state = {
          ...state,
          fieldErrors: Object.fromEntries(
            incomplete.map((name) => [name, "required"]),
          ),
          statusMessageId: `${group.activeGroup}:incomplete`,
          statusMessage: "Complete every required boundary. Nothing was evaluated or recorded.",
          focusIntent: { group: group.activeGroup, target: incomplete[0] },
        };
        return Object.freeze({ status: "incomplete", state: clone(state) });
      }

      handledTokens.add(intent.opaqueFreshEventToken);
      attempts[group.form] += 1;
      const presentation = getCalibrationMarginInformationExtractionPresentation(group.form);
      const dimensionAnswers = Object.fromEntries(
        dimensions.map((dimension) => [dimension, state.fieldValues[dimension]]),
      );
      const evaluation = evaluateCalibrationMarginInformationExtraction(
        group.form,
        { [presentation.caseId]: dimensionAnswers },
      );
      const explanation = group.form === "transfer"
        ? evaluateCalibrationMarginUnsupportedExplanation(
          state.fieldValues[explanationId],
        )
        : Object.freeze({ passed: true, correctness: Object.freeze({}) });
      const failedIds = [
        ...dimensions.filter((dimension) => !evaluation.correctness[dimension]),
        ...(explanation.passed ? [] : [explanationId]),
      ];

      if (!evaluation.passed || !explanation.passed) {
        group = repairGroup(group.form);
        state = makeState(group, {
          checkpoint: checkpointAdapter.getState().checkpoint,
          failedIds,
          focusTarget: "heading",
          statusMessageId: `${group.activeGroup}:actual-miss`,
          statusMessage: "This attempt needs answer-free review. All private selections were cleared.",
        });
        return Object.freeze({
          status: "extraction_actual_miss_repair",
          failedIds: Object.freeze([...failedIds]),
          state: clone(state),
        });
      }

      const records = [
        createCalibrationMarginExtractionEvidenceRecord(
          group.form,
          evaluation.correctness,
          {
            attempts: attempts[group.form],
            hints: repairs[group.form],
            confidence: state.confidence || null,
          },
        ),
      ];
      if (group.form === "transfer") {
        records.push(createCalibrationMarginExtractionEvidenceRecord(
          "unsupported_explanation",
          explanation.correctness,
          {
            attempts: attempts.transfer,
            hints: repairs.transfer,
            confidence: state.confidence || null,
          },
        ));
      }
      const commit = checkpointAdapter.append(records);
      if (commit.status !== "committed") {
        const prefix = checkpointAdapter.getState().checkpoint;
        reconstruct(
          prefix,
          "The attempted boundary was not finalized. Private work was cleared; the last exact prefix is ready.",
        );
        return Object.freeze({
          status: "extraction_checkpoint_commit_failed_recovered",
          reason: commit.reason,
          state: clone(state),
        });
      }

      const passedForm = group.form;
      const passed = passStatus(passedForm);
      group = passGroup(passedForm);
      state = makeState(group, {
        checkpoint: commit.state.checkpoint,
        statusMessageId: `${group.activeGroup}:${passed.status}`,
        statusMessage: passed.message,
      });
      return Object.freeze({
        status: passed.status,
        checkpoint: commit.state.checkpoint,
        state: clone(state),
      });
    },
  });
}

export const calibrationMarginExtractionAccessibility = Object.freeze({
  modalities,
  minTargetCssPx: 44,
  persistentLabels: true,
  fieldAssociatedErrors: true,
  politeAtomicStatus: true,
  reducedMotionEquivalent: true,
  meaningUsesColorMotionOrAudioAlone: false,
});
