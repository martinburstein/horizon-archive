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
import {
  sanitizeCalibrationMarginExtractionCheckpoint,
} from "./CalibrationMarginExtractionCheckpoint.js";
import {
  calibrationMarginExtractionActions,
  calibrationMarginExtractionGroups,
  createCalibrationMarginExtractionFloor,
  createCalibrationMarginExtractionIntent,
} from "./CalibrationMarginExtractionFloor.js";
import {
  calibrationMarginReviewSaveActions,
  createCalibrationMarginReviewSaveController,
  createCalibrationMarginReviewSaveIntent,
  sanitizeCalibrationMarginReviewSave,
} from "./CalibrationMarginReviewSave.js";

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
  let extractionController = null;
  let reviewController = null;
  let reviewRecovery = false;
  let extractionCheckpoint = sanitizeCalibrationMarginExtractionCheckpoint(
    options.restoredExtractionCheckpoint,
  );

  const currentState = () => {
    if (reviewController) return reviewController.getState();
    if (reviewRecovery && surveyController) return surveyController.getState();
    if (extractionController) return extractionController.getState();
    const current = (pythonController ?? surveyController ?? entryController).getState();
    if (pythonController
      && current.phase === "PY010-P3"
      && current.activeGroup === "python_finalized"
      && current.checkpoint === "P3") {
      return {
        ...current,
        availableActions: [calibrationMarginExtractionActions.begin],
        statusMessageId: "python_finalized:extraction-available",
        statusMessage:
          "PY-010 remains finalized. A fresh Pilot extraction check is available.",
      };
    }
    return current;
  };

  const reviewSources = () => {
    const extractionState = extractionController?.getState() ?? {};
    return {
      observations: surveyController?.getState().recordedObservationIds ?? [],
      pythonCheckpoint: pythonController?.getCheckpoint()
        ?? options.restoredPythonCheckpoint,
      extractionCheckpoint: extractionController?.getCheckpoint()
        ?? extractionCheckpoint
        ?? options.restoredExtractionCheckpoint,
      extractionState,
      invariants: {
        worldStateDelta: extractionState.worldStateDelta ?? null,
        accessStateDelta: extractionState.accessStateDelta ?? null,
        authorityGranted: extractionState.authorityGranted ?? false,
        externalActionEnabled: extractionState.externalActionEnabled ?? false,
        worldStateChanged: extractionState.worldStateChanged ?? false,
      },
    };
  };

  const mountReview = (restoredRecord = null) => {
    reviewController = createCalibrationMarginReviewSaveController({
      getSources: reviewSources,
      restoredRecord,
      adapter: options.reviewSaveAdapter,
    });
    reviewRecovery = false;
    return reviewController.getState();
  };

  const mountObservationRecovery = () => {
    const blank = entryController.dispatch({
      packetId: "RP-003",
      version: CALIBRATION_MARGIN_PROTECTED_ENTRY_VERSION,
      mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER",
      action: CALIBRATION_MARGIN_ENTRY_ACTION,
      activationKind: "screen_reader",
      eventToken: "review-observation-recovery-entry",
    }).state;
    surveyAcceptedBlank = blank;
    surveyController = createCalibrationMarginProtectedSurvey({
      acceptedBlankState: blank,
    });
    surveyController.dispatch({
      packetId: "RP-003",
      version: CALIBRATION_MARGIN_PROTECTED_SURVEY_VERSION,
      mode: "campaign",
      owner: "PILOT // FLIGHT RECORDER",
      action: normalOrientAction,
      observationId: null,
      activationKind: "screen_reader",
      eventToken: "review-observation-recovery-survey",
    });
    reviewController = null;
    reviewRecovery = true;
    return surveyController.getState();
  };

  const configure = (
    restoredState,
    restoredPythonCheckpoint = options.restoredPythonCheckpoint,
    restoredExtractionCheckpoint = extractionCheckpoint
      ?? options.restoredExtractionCheckpoint,
  ) => {
    const restoringSurvey = restoredState?.phase === "CM-10 SURVEY";
    entryController = createCalibrationMarginProtectedEntry({
      ...authority,
      restoredState: restoringSurvey ? null : restoredState,
    });
    surveyController = null;
    surveyAcceptedBlank = null;
    pythonController = null;
    extractionController = null;
    reviewController = null;
    reviewRecovery = false;
    extractionCheckpoint = sanitizeCalibrationMarginExtractionCheckpoint(
      restoredExtractionCheckpoint,
    );
    const restoredReview = sanitizeCalibrationMarginReviewSave(
      options.restoredReviewSave,
    );
    if (restoredReview) {
      mountReview(restoredReview);
      return;
    }

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
      const pythonState = pythonController.getState();
      if (checkpoint.checkpoint === "P3"
        && extractionCheckpoint
        && ["IE-P1", "IE-P2", "IE-P3"].includes(extractionCheckpoint.checkpoint)) {
        extractionController = createCalibrationMarginExtractionFloor({
          acceptedPythonState: pythonState,
          restoredCheckpoint: extractionCheckpoint,
          commitCheckpoint: options.commitExtractionCheckpoint,
        });
        if (extractionCheckpoint.checkpoint === "IE-P3") {
          mountReview();
        }
      }
    }
  };

  configure(options.restoredState);

  return Object.freeze({
    getState() {
      return clonePublicState(currentState());
    },
    dispatch(intent) {
      const state = currentState();
      if (reviewController) {
        const result = reviewController.dispatch(intent);
        if (result.status === "source_boundary_incomplete"
          && result.recoveryTarget?.group === "observations") {
          return Object.freeze({
            ...result,
            state: clonePublicState(mountObservationRecovery()),
          });
        }
        return result;
      }
      if (reviewRecovery && surveyController) {
        const result = surveyController.dispatch(intent);
        if (result.state?.localReviewEligibility?.eligible === true) {
          return Object.freeze({
            status: "review_boundary_restored",
            state: clonePublicState(mountReview()),
          });
        }
        return result;
      }
      if (extractionController) {
        const result = extractionController.dispatch(intent);
        extractionCheckpoint = sanitizeCalibrationMarginExtractionCheckpoint(
          extractionController.getCheckpoint(),
        );
        if (result.status === "extraction_finalized") {
          return Object.freeze({
            ...result,
            state: clonePublicState(mountReview()),
          });
        }
        if (result.status === "returned_to_python_write_free") {
          extractionController = null;
          return Object.freeze({ ...result, state: clonePublicState(currentState()) });
        }
        return result;
      }
      if (pythonController) {
        const pythonState = pythonController.getState();
        if (pythonState.phase === "PY010-P3"
          && intent?.allowlistedActionId === calibrationMarginExtractionActions.begin) {
          extractionController = createCalibrationMarginExtractionFloor({
            acceptedPythonState: pythonState,
            restoredCheckpoint: extractionCheckpoint,
            commitCheckpoint: options.commitExtractionCheckpoint,
            requireFreshEntry: true,
          });
          const result = extractionController.dispatch(intent);
          extractionCheckpoint = sanitizeCalibrationMarginExtractionCheckpoint(
            extractionController.getCheckpoint(),
          );
          return result;
        }
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
        if (reviewRecovery
          && result.state?.localReviewEligibility?.eligible === true) {
          return Object.freeze({
            status: "review_boundary_restored",
            state: clonePublicState(mountReview()),
          });
        }
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
      if (extractionController) {
        return extractionController.updateField(name, value);
      }
      if (!pythonController) {
        return Object.freeze({
          status: "rejected",
          reason: "python_floor_closed",
          state: (surveyController ?? entryController).getState(),
        });
      }
      return pythonController.updateField(name, value);
    },
    updateConfidence(value) {
      if (!extractionController) {
        return Object.freeze({
          status: "rejected",
          reason: "extraction_floor_closed",
          state: clonePublicState(currentState()),
        });
      }
      return extractionController.updateConfidence(value);
    },
    getPythonCheckpoint() {
      return pythonController?.getCheckpoint() ?? null;
    },
    getExtractionCheckpoint() {
      return extractionController?.getCheckpoint()
        ?? (extractionCheckpoint ? clonePublicState(extractionCheckpoint) : null);
    },
    getReviewSaveRecord() {
      return reviewController?.getRecord() ?? null;
    },
    sanitizeBoundary(
      restoredState = currentState(),
      restoredPythonCheckpoint = pythonController?.getCheckpoint()
        ?? options.restoredPythonCheckpoint,
      restoredExtractionCheckpoint = extractionController?.getCheckpoint()
        ?? extractionCheckpoint
        ?? options.restoredExtractionCheckpoint,
    ) {
      configure(
        restoredState,
        restoredPythonCheckpoint,
        restoredExtractionCheckpoint,
      );
      return Object.freeze({
        status: reviewController
          ? reviewController.getState().activeGroup === "cm50_verified_restore"
            ? "review_save_restored"
            : "review_boundary_restored"
          : extractionController
          ? "extraction_checkpoint_resumed"
          : pythonController
            ? "python_checkpoint_resumed"
          : restoredState?.phase === "CM-10 SURVEY"
            && surveyController?.getState().phase === "CM-10 SURVEY"
            ? "resumed"
            : "revalidated",
        state: clonePublicState(currentState()),
      });
    },
  });
}

function clonePublicState(value) {
  return JSON.parse(JSON.stringify(value));
}

export function createCalibrationMarginNormalEntryIntent(
  action,
  activationKind,
  eventToken,
  phase = null,
  activeGroup = null,
) {
  const reviewPhase = [
    "IE-P3",
    "CM-40 BOUNDED REVIEW",
    "CM-41 ATOMIC SAVE",
    "CM-50 VERIFIED RESTORE",
  ].includes(phase);
  if (Object.values(calibrationMarginReviewSaveActions).includes(action)
    && (reviewPhase || [
      calibrationMarginReviewSaveActions.review,
      calibrationMarginReviewSaveActions.provenance,
      calibrationMarginReviewSaveActions.save,
    ].includes(action))) {
    return createCalibrationMarginReviewSaveIntent(
      {
        activeGroup: activeGroup ?? (phase === "IE-P3" ? "ie_finalized" : phase),
        owner: phase === "IE-P3"
          ? "SYSTEM"
          : phase === "CM-41 ATOMIC SAVE"
            ? "SYSTEM // LOCAL EXPEDITION TRANSACTION"
            : phase === "CM-50 VERIFIED RESTORE"
              ? "SYSTEM // RESTORED EXPEDITION NOTE"
              : "SYSTEM // EXPEDITION STATE",
      },
      action,
      activationKind,
      eventToken,
    );
  }
  if (action === calibrationMarginExtractionActions.begin) {
    return createCalibrationMarginExtractionIntent(
      { activeGroup: "python_finalized", owner: "SYSTEM" },
      action,
      activationKind,
      eventToken,
    );
  }
  const extractionGroup = Object.values(calibrationMarginExtractionGroups)
    .find((group) => group.phase === phase);
  if (extractionGroup) {
    return createCalibrationMarginExtractionIntent(
      { activeGroup: extractionGroup.activeGroup, owner: extractionGroup.owner },
      action,
      activationKind,
      eventToken,
    );
  }
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
