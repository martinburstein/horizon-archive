import {
  calibrationMarginReferenceSources,
  evaluateCalibrationMarginPython,
  evaluateCalibrationMarginPythonRetrieval,
} from "./CalibrationMarginProtectedJourney.js";
import {
  CALIBRATION_MARGIN_PYTHON_SHELL_VERSION,
  createCalibrationMarginPythonCheckpointAdapter,
  createCalibrationMarginPythonEvidenceRecord,
} from "./CalibrationMarginPythonCheckpoint.js";
import {
  CALIBRATION_MARGIN_PROTECTED_SURVEY_VERSION,
  CALIBRATION_MARGIN_REVIEW_LOCAL_WORK_IMAGE,
} from "./CalibrationMarginProtectedSurvey.js";

export const CALIBRATION_MARGIN_PYTHON_FLOOR_VERSION = "rp003.python-floor.v1";

export const calibrationMarginPythonActions = Object.freeze({
  review: CALIBRATION_MARGIN_REVIEW_LOCAL_WORK_IMAGE,
  submitPrimary: "SUBMIT_PRIMARY",
  clearPrimary: "CLEAR_PRIMARY",
  returnSurvey: "RETURN_TO_SURVEY",
  retryPrimary: "RETRY_BLANK_PRIMARY",
  submitRetrieval: "SUBMIT_RETRIEVAL",
  clearRetrieval: "CLEAR_RETRIEVAL",
  retryRetrieval: "RETRY_BLANK_RETRIEVAL",
  submitTransfer: "SUBMIT_TRANSFER",
  clearTransfer: "CLEAR_TRANSFER",
  retryTransfer: "RETRY_BLANK_TRANSFER",
});

export const calibrationMarginPythonActionLabels = Object.freeze({
  [calibrationMarginPythonActions.submitPrimary]: "RUN BOUNDED COMPARISON",
  [calibrationMarginPythonActions.clearPrimary]: "CLEAR WORK",
  [calibrationMarginPythonActions.returnSurvey]: "RETURN TO SURVEY",
  [calibrationMarginPythonActions.retryPrimary]: "RETRY BLANK FORM",
  [calibrationMarginPythonActions.submitRetrieval]: "CHECK CLOSED-NOTE RETRIEVAL",
  [calibrationMarginPythonActions.clearRetrieval]: "CLEAR WORK",
  [calibrationMarginPythonActions.retryRetrieval]: "RETRY BLANK RETRIEVAL",
  [calibrationMarginPythonActions.submitTransfer]: "RUN UNSEEN TRANSFER",
  [calibrationMarginPythonActions.clearTransfer]: "CLEAR WORK",
  [calibrationMarginPythonActions.retryTransfer]: "RETRY BLANK TRANSFER",
});

export const calibrationMarginPythonGroups = Object.freeze({
  primary: Object.freeze({
    phase: "CM-20 PRIMARY",
    activeGroup: "python_primary",
    owner: "PILOT",
    form: "primary",
    fieldNames: Object.freeze(["condition", "trueBranch", "falseBranch"]),
    actions: Object.freeze([
      calibrationMarginPythonActions.submitPrimary,
      calibrationMarginPythonActions.clearPrimary,
      calibrationMarginPythonActions.returnSurvey,
    ]),
  }),
  primaryRepair: Object.freeze({
    phase: "CM-21 PRIMARY REPAIR",
    activeGroup: "primary_repair",
    owner: "TEACHER",
    form: "primary",
    fieldNames: Object.freeze(["condition", "trueBranch", "falseBranch"]),
    actions: Object.freeze([
      calibrationMarginPythonActions.retryPrimary,
      calibrationMarginPythonActions.returnSurvey,
    ]),
  }),
  retrieval: Object.freeze({
    phase: "CM-22 CLOSED-NOTE RETRIEVAL",
    activeGroup: "python_retrieval",
    owner: "TEACHER",
    form: "retrieval",
    fieldNames: Object.freeze(["condition", "trueBranch", "falseBranch", "unavailableBoundary"]),
    actions: Object.freeze([
      calibrationMarginPythonActions.submitRetrieval,
      calibrationMarginPythonActions.clearRetrieval,
    ]),
  }),
  retrievalRepair: Object.freeze({
    phase: "CM-21 RETRIEVAL REPAIR",
    activeGroup: "retrieval_repair",
    owner: "TEACHER",
    form: "retrieval",
    fieldNames: Object.freeze(["condition", "trueBranch", "falseBranch", "unavailableBoundary"]),
    actions: Object.freeze([calibrationMarginPythonActions.retryRetrieval]),
  }),
  transfer: Object.freeze({
    phase: "CM-23 UNSEEN TRANSFER",
    activeGroup: "python_transfer",
    owner: "PILOT",
    form: "transfer",
    fieldNames: Object.freeze(["condition", "trueBranch", "falseBranch"]),
    actions: Object.freeze([
      calibrationMarginPythonActions.submitTransfer,
      calibrationMarginPythonActions.clearTransfer,
    ]),
  }),
  transferRepair: Object.freeze({
    phase: "CM-21 TRANSFER REPAIR",
    activeGroup: "transfer_repair",
    owner: "TEACHER",
    form: "transfer",
    fieldNames: Object.freeze(["condition", "trueBranch", "falseBranch"]),
    actions: Object.freeze([calibrationMarginPythonActions.retryTransfer]),
  }),
  finalized: Object.freeze({
    phase: "PY010-P3",
    activeGroup: "python_finalized",
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
  "owner",
  "actionId",
  "activationKind",
  "opaqueFreshEventToken",
]);
const observationIds = Object.freeze([
  "correspondence",
  "bounded_difference",
  "sealed_unavailable",
]);

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function exactKeys(value, expected) {
  return value && typeof value === "object" && !Array.isArray(value)
    && Object.keys(value).sort().join("|") === [...expected].sort().join("|");
}

function opaqueToken(value) {
  return typeof value === "string" && /^[a-z0-9][a-z0-9:_-]{5,79}$/i.test(value);
}

function exactIntent(intent, group) {
  return exactKeys(intent, intentKeys)
    && intent.shellVersion === CALIBRATION_MARGIN_PYTHON_SHELL_VERSION
    && intent.packetId === "RP-003"
    && intent.activeGroupId === group.activeGroup
    && intent.owner === group.owner
    && group.actions.includes(intent.actionId)
    && modalities.includes(intent.activationKind)
    && opaqueToken(intent.opaqueFreshEventToken);
}

export function exactCalibrationMarginPythonEntryBoundary(value) {
  const ids = value?.recordedObservationIds;
  return value?.version === CALIBRATION_MARGIN_PROTECTED_SURVEY_VERSION
    && value.packetId === "RP-003"
    && value.phase === "CM-10 SURVEY"
    && value.boardState === "SC-04"
    && value.activeGroup === "cm10_survey"
    && value.owner === "SCENE"
    && value.continuation === "continuation"
    && value.cityStateDelta === null
    && value.worldStateDelta === null
    && value.accessStateDelta === null
    && value.successor === null
    && value.privateWorkCleared === true
    && value.transientWorkCleared === true
    && Array.isArray(ids)
    && ids.length === observationIds.length
    && new Set(ids).size === observationIds.length
    && observationIds.every((id) => ids.includes(id))
    && value.localReviewEligibility?.action === CALIBRATION_MARGIN_REVIEW_LOCAL_WORK_IMAGE
    && value.localReviewEligibility.eligible === true
    && value.localReviewEligibility.dispatchable === true
    && value.localReviewEligibility.activated === false
    && Array.isArray(value.learningEvidence)
    && value.learningEvidence.length === 0
    && Array.isArray(value.masteryEvidence)
    && value.masteryEvidence.length === 0
    && value.saveEligibility === false
    && value.authorityGranted === false
    && value.externalActionEnabled === false
    && value.worldStateChanged === false;
}

function blankValues(group) {
  return Object.fromEntries(group.fieldNames.map((name) => [name, ""]));
}

function firstField(group) {
  return group.fieldNames[0] ?? "heading";
}

function makeState(group, options = {}) {
  const values = options.values ?? blankValues(group);
  return {
    version: CALIBRATION_MARGIN_PYTHON_FLOOR_VERSION,
    shellVersion: CALIBRATION_MARGIN_PYTHON_SHELL_VERSION,
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
    privateWorkCleared: Object.values(values).every((value) => value === ""),
    transientWorkCleared: Object.values(values).every((value) => value === ""),
    saveEligibility: false,
    authorityGranted: false,
    externalActionEnabled: false,
    worldStateChanged: false,
    availableActions: [...group.actions],
    fieldNames: [...group.fieldNames],
    fieldValues: { ...values },
    fieldErrors: { ...(options.fieldErrors ?? {}) },
    failedIds: [...(options.failedIds ?? [])],
    readOnly: options.readOnly === true,
    statusMessageId: options.statusMessageId ?? `${group.activeGroup}:ready`,
    statusMessage: options.statusMessage ?? "Local work group ready.",
    focusIntent: {
      group: group.activeGroup,
      target: options.focusTarget ?? "heading",
    },
    checkpoint: options.checkpoint ?? "P0",
    finalizedSkillIds: group === calibrationMarginPythonGroups.finalized
      ? ["PY-010"]
      : [],
  };
}

function assembleSource(form, values) {
  return calibrationMarginReferenceSources[form]
    .replace(
      /if\s+exposed_a\s*\[\s*index\s*\]\s*==\s*exposed_b\s*\[\s*index\s*\]\s*:/,
      `if ${values.condition}:`,
    )
    .replace(/status\s*=\s*["']corresponding["']/, `status = ${JSON.stringify(values.trueBranch)}`)
    .replace(/status\s*=\s*["']different["']/, `status = ${JSON.stringify(values.falseBranch)}`);
}

function groupForCheckpoint(checkpoint) {
  if (checkpoint === "P1") return calibrationMarginPythonGroups.retrieval;
  if (checkpoint === "P2") return calibrationMarginPythonGroups.transfer;
  if (checkpoint === "P3") return calibrationMarginPythonGroups.finalized;
  return calibrationMarginPythonGroups.primary;
}

function passStatus(group) {
  if (group.form === "primary") {
    return {
      status: "primary_finalized",
      messageId: "python_retrieval:primary-finalized",
      message: "Primary evidence finalized locally. Closed-note retrieval is ready.",
    };
  }
  if (group.form === "retrieval") {
    return {
      status: "retrieval_finalized",
      messageId: "python_transfer:retrieval-finalized",
      message: "Retrieval evidence finalized locally. Blank unseen transfer is ready.",
    };
  }
  return {
    status: "python_finalized",
    messageId: "python_finalized:complete",
    message: "PY-010 local evidence finalized. No onward action is available.",
  };
}

function actionKind(actionId) {
  if (actionId === calibrationMarginPythonActions.submitPrimary) return "submit";
  if (actionId === calibrationMarginPythonActions.submitRetrieval) return "submit";
  if (actionId === calibrationMarginPythonActions.submitTransfer) return "submit";
  if (actionId === calibrationMarginPythonActions.clearPrimary) return "clear";
  if (actionId === calibrationMarginPythonActions.clearRetrieval) return "clear";
  if (actionId === calibrationMarginPythonActions.clearTransfer) return "clear";
  if (actionId === calibrationMarginPythonActions.retryPrimary) return "retry";
  if (actionId === calibrationMarginPythonActions.retryRetrieval) return "retry";
  if (actionId === calibrationMarginPythonActions.retryTransfer) return "retry";
  if (actionId === calibrationMarginPythonActions.returnSurvey) return "return";
  return "unavailable";
}

export function createCalibrationMarginPythonIntent(state, actionId, activationKind, eventToken) {
  return Object.freeze({
    shellVersion: CALIBRATION_MARGIN_PYTHON_SHELL_VERSION,
    packetId: "RP-003",
    activeGroupId: state?.activeGroup ?? null,
    owner: state?.owner ?? null,
    actionId,
    activationKind,
    opaqueFreshEventToken: eventToken,
  });
}

export function createCalibrationMarginPythonFloor(options = {}) {
  const checkpointAdapter = createCalibrationMarginPythonCheckpointAdapter({
    restoredState: options.restoredCheckpoint,
    commit: options.commitCheckpoint,
  });
  const restoration = checkpointAdapter.getRestoration();
  const freshEntry = exactCalibrationMarginPythonEntryBoundary(options.acceptedSurveyState);
  const canResume = restoration.valid && ["P1", "P2", "P3"].includes(restoration.checkpoint);
  const initialGroup = canResume
    ? groupForCheckpoint(restoration.checkpoint)
    : calibrationMarginPythonGroups.primary;
  let group = initialGroup;
  let state = makeState(group, {
    checkpoint: canResume ? restoration.checkpoint : "P0",
    statusMessageId: canResume
      ? `${group.activeGroup}:resume`
      : "python_primary:fresh-review",
    statusMessage: canResume
      ? "Sanitized local evidence resumed at the first incomplete blank group."
      : "Fresh local review opened. The primary form is blank.",
  });
  let active = freshEntry || canResume;
  const handledTokens = new Set();
  const attempts = { primary: 0, retrieval: 0, transfer: 0 };
  const repairs = { primary: 0, retrieval: 0, transfer: 0 };

  const reject = (reason) => Object.freeze({
    status: "rejected",
    reason,
    state: clone(state),
  });

  const reconstruct = (checkpoint, statusMessage) => {
    group = groupForCheckpoint(checkpoint);
    state = makeState(group, {
      checkpoint,
      statusMessageId: `${group.activeGroup}:checkpoint-recovery`,
      statusMessage,
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
      if (!active || state.readOnly || !group.fieldNames.includes(name)) {
        return reject("field_unavailable");
      }
      if (typeof value !== "string" || value.length > 160) {
        return reject("field_value_rejected");
      }
      state = {
        ...state,
        fieldValues: { ...state.fieldValues, [name]: value.replace(/\r/g, "") },
        fieldErrors: Object.fromEntries(
          Object.entries(state.fieldErrors).filter(([field]) => field !== name),
        ),
        privateWorkCleared: false,
        transientWorkCleared: false,
      };
      return Object.freeze({ status: "field_updated_private", state: clone(state) });
    },
    dispatch(intent) {
      if (!active) return reject("python_floor_closed");
      if (!exactIntent(intent, group)) return reject("python_floor_intent_rejected");
      if (handledTokens.has(intent.opaqueFreshEventToken)) return reject("one_hit_only");

      const kind = actionKind(intent.actionId);
      if (kind === "clear") {
        if (Object.values(state.fieldValues).every((value) => value === "")) {
          return reject("clear_unavailable");
        }
        handledTokens.add(intent.opaqueFreshEventToken);
        state = makeState(group, {
          checkpoint: state.checkpoint,
          focusTarget: firstField(group),
          statusMessageId: `${group.activeGroup}:cleared`,
          statusMessage: "Local work cleared. This form is blank.",
        });
        return Object.freeze({ status: "work_cleared", state: clone(state) });
      }

      if (kind === "return") {
        handledTokens.add(intent.opaqueFreshEventToken);
        active = false;
        const previous = state;
        state = makeState(calibrationMarginPythonGroups.primary, {
          statusMessageId: "python_primary:closed",
          statusMessage: "Local Python work cleared. Review closed.",
        });
        return Object.freeze({
          status: "returned_to_survey_write_free",
          privateWorkCleared: true,
          previousGroup: previous.activeGroup,
          state: clone(state),
        });
      }

      if (kind === "retry") {
        handledTokens.add(intent.opaqueFreshEventToken);
        repairs[group.form] += 1;
        group = group.form === "primary"
          ? calibrationMarginPythonGroups.primary
          : group.form === "retrieval"
            ? calibrationMarginPythonGroups.retrieval
            : calibrationMarginPythonGroups.transfer;
        state = makeState(group, {
          checkpoint: checkpointAdapter.getState().checkpoint,
          focusTarget: firstField(group),
          statusMessageId: `${group.activeGroup}:blank-retry`,
          statusMessage: "Previous private work cleared. Blank retry ready.",
        });
        return Object.freeze({ status: "blank_retry_ready", state: clone(state) });
      }

      if (kind !== "submit") return reject("action_unavailable");
      const incomplete = group.fieldNames.filter(
        (name) => state.fieldValues[name].trim() === "",
      );
      if (incomplete.length > 0) {
        state = {
          ...state,
          fieldErrors: Object.fromEntries(incomplete.map((name) => [name, "required"])),
          statusMessageId: `${group.activeGroup}:incomplete`,
          statusMessage: "Current form has incomplete required fields.",
          focusIntent: { group: group.activeGroup, target: incomplete[0] },
        };
        return Object.freeze({ status: "incomplete", state: clone(state) });
      }

      handledTokens.add(intent.opaqueFreshEventToken);
      attempts[group.form] += 1;
      const evaluation = group.form === "retrieval"
        ? evaluateCalibrationMarginPythonRetrieval(state.fieldValues)
        : evaluateCalibrationMarginPython(group.form, assembleSource(group.form, state.fieldValues));
      const failedIds = group.form === "retrieval"
        ? Object.entries(evaluation.correctness)
          .filter(([, correct]) => !correct)
          .map(([dimension]) => dimension)
        : [...evaluation.failedCheckIds];

      if (!evaluation.passed) {
        const repairGroup = group.form === "primary"
          ? calibrationMarginPythonGroups.primaryRepair
          : group.form === "retrieval"
            ? calibrationMarginPythonGroups.retrievalRepair
            : calibrationMarginPythonGroups.transferRepair;
        const failedFields = group.form === "retrieval"
          ? failedIds
          : group.fieldNames.filter((name) => (
            name === "condition"
              ? failedIds.includes("conditional_compares_exposed_values_at_same_index")
              : name === "trueBranch" || name === "falseBranch"
                ? failedIds.includes("conditional_compares_exposed_values_at_same_index")
                  || failedIds.includes("corresponding_positions_correct")
                  || failedIds.includes("difference_positions_correct")
                : false
          ));
        group = repairGroup;
        state = makeState(group, {
          checkpoint: checkpointAdapter.getState().checkpoint,
          values: state.fieldValues,
          fieldErrors: Object.fromEntries(failedFields.map((name) => [name, "failed"])),
          failedIds,
          readOnly: true,
          focusTarget: failedFields[0] ?? "heading",
          statusMessageId: `${group.activeGroup}:actual-miss`,
          statusMessage: "Current attempt needs bounded answer-free review.",
        });
        return Object.freeze({
          status: "actual_miss_repair",
          failedIds: Object.freeze([...failedIds]),
          state: clone(state),
        });
      }

      const correctness = group.form === "retrieval"
        ? evaluation.correctness
        : evaluation.checks;
      const record = createCalibrationMarginPythonEvidenceRecord(group.form, correctness, {
        attempts: attempts[group.form],
        hints: repairs[group.form],
      });
      const commit = checkpointAdapter.append(record);
      if (commit.status !== "committed") {
        const checkpoint = checkpointAdapter.getState().checkpoint;
        if (checkpoint === "P0") {
          active = false;
          state = makeState(calibrationMarginPythonGroups.primary, {
            statusMessageId: "python_primary:checkpoint-recovery",
            statusMessage: "Local review recovered to the accepted survey boundary.",
          });
          return Object.freeze({
            status: "checkpoint_commit_failed_to_survey",
            reason: commit.reason,
            state: clone(state),
          });
        }
        reconstruct(
          checkpoint,
          "Local review recovered to the last finalized evidence boundary.",
        );
        return Object.freeze({
          status: "checkpoint_commit_failed_recovered",
          reason: commit.reason,
          state: clone(state),
        });
      }

      const checkpoint = commit.state.checkpoint;
      group = groupForCheckpoint(checkpoint);
      const passed = passStatus(group === calibrationMarginPythonGroups.finalized
        ? calibrationMarginPythonGroups.transfer
        : checkpoint === "P1"
          ? calibrationMarginPythonGroups.primary
          : calibrationMarginPythonGroups.retrieval);
      state = makeState(group, {
        checkpoint,
        statusMessageId: passed.messageId,
        statusMessage: passed.message,
      });
      return Object.freeze({
        status: passed.status,
        checkpoint,
        state: clone(state),
      });
    },
  });
}

export const calibrationMarginPythonAccessibility = Object.freeze({
  modalities,
  minTargetCssPx: 44,
  persistentLabels: true,
  fieldAssociatedErrors: true,
  politeAtomicStatus: true,
  reducedMotionEquivalent: true,
  meaningUsesColorMotionOrAudioAlone: false,
});
