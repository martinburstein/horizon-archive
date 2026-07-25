import {
  CALIBRATION_MARGIN_ENTRY_ACTION,
  CALIBRATION_MARGIN_PROTECTED_ENTRY_VERSION,
  calibrationMarginEntryAccessibility,
  calibrationMarginEntryActions,
  createCalibrationMarginProtectedEntry,
} from "./CalibrationMarginProtectedEntry.js";
import {
  CALIBRATION_MARGIN_PROTECTED_SURVEY_VERSION,
  calibrationMarginSurveyObservations,
  createCalibrationMarginProtectedSurvey,
} from "./CalibrationMarginProtectedSurvey.js";
import {
  calibrationMarginPythonGroups,
  createCalibrationMarginPythonFloor,
  createCalibrationMarginPythonIntent,
} from "./CalibrationMarginPythonFloor.js";
import {
  sanitizeCalibrationMarginPythonCheckpoint,
} from "./CalibrationMarginPythonCheckpoint.js";

const exactProgression = Object.freeze({
  civicComparisonSaved: true,
  nextSurveyDirectionMarked: true,
  rp002Checkpoint: "comparison_complete",
});
const normalOrientAction = calibrationMarginEntryActions[0];

function containsPrivateContent(value) {
  const forbiddenKey = /^(?:private(?:response|notes?|source|work)|response|feedback|answer|credential|eventToken|focusHistory|adapterDiagnostics?|forged|contaminated)$/i;
  const visit = (candidate) => {
    if (Array.isArray(candidate)) return candidate.some(visit);
    if (!candidate || typeof candidate !== "object") {
      return typeof candidate === "string" && /\bPRIVATE\b/.test(candidate);
    }
    return Object.entries(candidate).some(([key, child]) => forbiddenKey.test(key) || visit(child));
  };
  return visit(value);
}

function exactVerifiedRestore(value) {
  return value
    && !containsPrivateContent(value)
    && value.phase === "verified_restore"
    && value.boardState === "SC-03-50"
    && value.owner === "SYSTEM // EXPEDITION STATE"
    && value.privateWorkCleared === true
    && value.transientWorkCleared === true
    && value.cityStateDelta === null
    && Array.isArray(value.replayedEvents)
    && value.replayedEvents.length === 0
    && JSON.stringify(value.progression) === JSON.stringify(exactProgression);
}

function exactReturnedThreshold(value) {
  const route = value?.route;
  const state = route?.state;
  return value?.status === "returned_to_city_threshold_write_free"
    && !containsPrivateContent(value)
    && route?.writePerformed === false
    && route?.continuation === "continuation"
    && route?.cityStateDelta === null
    && state?.status === "ready"
    && state?.checkpoint === "city_threshold"
    && state?.boardId === "SC-02-50"
    && state?.continuation === "continuation"
    && state?.cityStateDelta === null
    && state?.worldStateDelta === null
    && state?.accessStateDelta === null;
}

function protectedOptions(verifiedRestoreState, returnedCityThreshold, restoredState) {
  const valid = exactVerifiedRestore(verifiedRestoreState)
    && exactReturnedThreshold(returnedCityThreshold);
  return {
    acceptedCityThreshold: valid ? {
      status: "ready",
      checkpoint: "city_threshold",
      boardId: "SC-02-50",
      continuation: "continuation",
      cityStateDelta: null,
      worldStateDelta: null,
      accessStateDelta: null,
    } : null,
    verifiedRp002: valid ? {
      packetId: "RP-002",
      checkpoint: "comparison_complete",
      verificationStatus: "verified",
      civicComparisonSaved: true,
      nextSurveyDirectionMarked: true,
      continuation: "continuation",
      cityStateDelta: null,
    } : null,
    restoredState,
  };
}

export function createCalibrationMarginNormalEntry(options = {}) {
  if (options.mode === "demo_tour") {
    return createCalibrationMarginProtectedEntry({ mode: "demo_tour" });
  }
  const authority = protectedOptions(
    options.verifiedRestoreState,
    options.returnedCityThreshold,
    null,
  );
  let entryController;
  let surveyController = null;
  let surveyAcceptedBlank = null;
  let pythonController = null;

  const configure = (restoredState, restoredPythonCheckpoint = options.restoredPythonCheckpoint) => {
    const restoringSurvey = restoredState?.phase === "CM-10 SURVEY";
    entryController = createCalibrationMarginProtectedEntry({
      ...authority,
      restoredState: restoringSurvey ? null : restoredState,
    });
    surveyController = null;
    surveyAcceptedBlank = null;
    pythonController = null;

    if (restoringSurvey && entryController.getState().phase === "city_threshold") {
      const blank = entryController.dispatch({
        packetId: "RP-003",
        version: CALIBRATION_MARGIN_PROTECTED_ENTRY_VERSION,
        mode: "campaign",
        owner: "PILOT // FLIGHT RECORDER",
        action: CALIBRATION_MARGIN_ENTRY_ACTION,
        activationKind: "screen_reader",
        eventToken: "normal-survey-resume-boundary",
      }).state;
      surveyAcceptedBlank = blank;
      surveyController = createCalibrationMarginProtectedSurvey({
        acceptedBlankState: blank,
        restoredState,
      });
    }

    const checkpoint = sanitizeCalibrationMarginPythonCheckpoint(restoredPythonCheckpoint);
    if (checkpoint && ["P1", "P2", "P3"].includes(checkpoint.checkpoint)) {
      pythonController = createCalibrationMarginPythonFloor({
        restoredCheckpoint: checkpoint,
        commitCheckpoint: options.commitPythonCheckpoint,
      });
    }
  };

  configure(options.restoredState);

  return Object.freeze({
    getState() {
      return (pythonController ?? surveyController ?? entryController).getState();
    },
    dispatch(intent) {
      const state = (pythonController ?? surveyController ?? entryController).getState();
      if (pythonController) {
        const result = pythonController.dispatch(intent);
        if (["returned_to_survey_write_free", "checkpoint_commit_failed_to_survey"]
          .includes(result.status)) {
          const acceptedSurvey = surveyController?.getState();
          if (surveyAcceptedBlank && acceptedSurvey?.phase === "CM-10 SURVEY") {
            surveyController = createCalibrationMarginProtectedSurvey({
              acceptedBlankState: surveyAcceptedBlank,
              restoredState: acceptedSurvey,
            });
            pythonController = null;
            return Object.freeze({ ...result, state: surveyController.getState() });
          }
        }
        return result;
      }
      if (state.phase === "CM-10 SURVEY") {
        const result = surveyController.dispatch(intent);
        if (result.status === "review_activated") {
          pythonController = createCalibrationMarginPythonFloor({
            acceptedSurveyState: result.state,
            commitCheckpoint: options.commitPythonCheckpoint,
          });
          return Object.freeze({
            status: "python_primary_visible",
            state: pythonController.getState(),
          });
        }
        return result;
      }
      if (state.phase === "CM-00 ARRIVE + IDLE"
        && intent?.version === CALIBRATION_MARGIN_PROTECTED_SURVEY_VERSION
        && intent?.action === normalOrientAction) {
        surveyAcceptedBlank = state;
        surveyController = createCalibrationMarginProtectedSurvey({
          acceptedBlankState: state,
        });
        return surveyController.dispatch(intent);
      }
      return entryController.dispatch(intent);
    },
    updateField(name, value) {
      if (!pythonController) {
        return Object.freeze({
          status: "rejected",
          reason: "python_floor_closed",
          state: (surveyController ?? entryController).getState(),
        });
      }
      return pythonController.updateField(name, value);
    },
    getPythonCheckpoint() {
      return pythonController?.getCheckpoint() ?? null;
    },
    sanitizeBoundary(
      restoredState = (pythonController ?? surveyController ?? entryController).getState(),
      restoredPythonCheckpoint = pythonController?.getCheckpoint()
        ?? options.restoredPythonCheckpoint,
    ) {
      configure(restoredState, restoredPythonCheckpoint);
      return Object.freeze({
        status: pythonController
          ? "python_checkpoint_resumed"
          : restoredState?.phase === "CM-10 SURVEY"
            && surveyController?.getState().phase === "CM-10 SURVEY"
            ? "resumed"
            : "revalidated",
        state: (pythonController ?? surveyController ?? entryController).getState(),
      });
    },
  });
}

export function createCalibrationMarginNormalEntryIntent(
  action,
  activationKind,
  eventToken,
  phase = null,
) {
  const pythonGroup = Object.values(calibrationMarginPythonGroups)
    .find((group) => group.phase === phase);
  if (pythonGroup) {
    return createCalibrationMarginPythonIntent(
      { activeGroup: pythonGroup.activeGroup, owner: pythonGroup.owner },
      action,
      activationKind,
      eventToken,
    );
  }
  if (action === normalOrientAction || phase === "CM-10 SURVEY") {
    return Object.freeze({
      packetId: "RP-003",
      version: CALIBRATION_MARGIN_PROTECTED_SURVEY_VERSION,
      mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER",
      action,
      observationId: calibrationMarginSurveyObservations[action] ?? null,
      activationKind,
      eventToken,
    });
  }
  return Object.freeze({
    packetId: "RP-003",
    version: CALIBRATION_MARGIN_PROTECTED_ENTRY_VERSION,
    mode: "campaign",
    owner: "PILOT // FLIGHT RECORDER",
    action,
    activationKind,
    eventToken,
  });
}

export const calibrationMarginNormalEntryAccessibility =
  calibrationMarginEntryAccessibility;

export const calibrationMarginNormalReturnActions = Object.freeze({
  civicComparison: calibrationMarginEntryActions[2],
  cityThreshold: calibrationMarginEntryActions[3],
});

export {
  CALIBRATION_MARGIN_ENTRY_ACTION,
  CALIBRATION_MARGIN_PROTECTED_ENTRY_VERSION,
};
