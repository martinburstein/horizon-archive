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
import {
  THREE_CURRENT_REACH_SHELL_VERSION,
  createThreeCurrentReachIntent,
  createThreeCurrentReachNormalController,
  sanitizeThreeCurrentReachSave,
  threeCurrentReachActions,
} from "./ThreeCurrentReachNormal.js";
import {
  MANYFOLD_RETURN_SHELL_VERSION,
  createManyfoldReturnIntent,
  createManyfoldReturnNormalController,
  manyfoldReturnActions,
  sanitizeManyfoldReturnSave,
} from "./ManyfoldReturnNormal.js";
import {
  INTERVAL_WORKS_SHELL_VERSION,
  createIntervalWorksIntent,
  createIntervalWorksNormalController,
  intervalWorksActions,
  sanitizeIntervalWorksSave,
} from "./IntervalWorksNormal.js";
import {
  BRAIDED_VERGE_ROUTE_GROUP,
  BRAIDED_VERGE_ROUTE_OWNER,
  BRAIDED_VERGE_SHELL_VERSION,
  braidedVergeActions,
  createBraidedVergeIntent,
  createBraidedVergeNormalController,
  createBraidedVergeRouteIntent,
  sanitizeBraidedVergeSave,
} from "./BraidedVergeNormal.js";
import {
  OFFSET_REACH_ROUTE_GROUP,
  OFFSET_REACH_ROUTE_OWNER,
  OFFSET_REACH_SHELL_VERSION,
  createOffsetReachIntent,
  createOffsetReachNormalController,
  createOffsetReachRouteIntent,
  offsetReachActions,
  sanitizeOffsetReachSave,
} from "./OffsetReachNormal.js";

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

function intervalStateWithBraidedRoute(state) {
  if (state?.activeGroup !== "iw30_restore") return state;
  return {
    ...state,
    phase: "IW-30 ROUTE CHOICE",
    activeGroup: BRAIDED_VERGE_ROUTE_GROUP,
    owner: BRAIDED_VERGE_ROUTE_OWNER,
    headingId: "bv-route-choice-heading",
    statusMessageId: "td007:iw30_braided_route_choice:ready",
    statusMessage: "The exact released Interval Works note remains restored. A fresh independent Pilot choice may follow the expedition-marked adjacent survey; no scenery or prior result dispatches it.",
    availableActions: [
      braidedVergeActions.route,
      intervalWorksActions.returnManyfold,
      intervalWorksActions.returnThreshold,
    ],
    focusIntent: {
      group: BRAIDED_VERGE_ROUTE_GROUP,
      target: "bv-route-choice-heading",
    },
  };
}

function braidedStateWithOffsetRoute(state) {
  if (state?.activeGroup !== "bv30_restore") return state;
  return {
    ...state,
    phase: "BV-30 ROUTE CHOICE",
    activeGroup: OFFSET_REACH_ROUTE_GROUP,
    owner: OFFSET_REACH_ROUTE_OWNER,
    headingId: "td008-route-choice-heading",
    statusMessageId: "td008:bv30_offset_reach_route_choice:ready",
    statusMessage: "The exact released Braided Verge note remains restored. A fresh independent Pilot choice may follow the expedition-marked adjacent Offset Reach survey; no scenery or prior result dispatches it.",
    availableActions: [
      offsetReachActions.route,
      braidedVergeActions.returnInterval,
      braidedVergeActions.returnThreshold,
    ],
    focusIntent: { group: OFFSET_REACH_ROUTE_GROUP, target: "td008-route-choice-heading" },
  };
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
  let threeCurrentController = null;
  let manyfoldReturnController = null;
  let intervalWorksController = null;
  let braidedVergeController = null;
  let offsetReachController = null;
  let reviewRecovery = false;
  let extractionCheckpoint = sanitizeCalibrationMarginExtractionCheckpoint(
    options.restoredExtractionCheckpoint,
  );

  const currentState = () => {
    if (offsetReachController) return offsetReachController.getState();
    if (braidedVergeController) return braidedStateWithOffsetRoute(braidedVergeController.getState());
    if (intervalWorksController) return intervalStateWithBraidedRoute(intervalWorksController.getState());
    if (manyfoldReturnController) return manyfoldReturnController.getState();
    if (threeCurrentController) return threeCurrentController.getState();
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
  const currentPredecessorBytes = (record) => (
    typeof options.readPredecessorBytes === "function"
      ? options.readPredecessorBytes()
      : options.predecessorBytes ?? JSON.stringify(record)
  );

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
    threeCurrentController = null;
    manyfoldReturnController = null;
    intervalWorksController = null;
    braidedVergeController = null;
    offsetReachController = null;
    reviewRecovery = false;
    extractionCheckpoint = sanitizeCalibrationMarginExtractionCheckpoint(
      restoredExtractionCheckpoint,
    );
    const restoredReview = sanitizeCalibrationMarginReviewSave(
      options.restoredReviewSave,
    );
    if (restoredReview) {
      mountReview(restoredReview);
      const restoredThreeCurrent = sanitizeThreeCurrentReachSave(
        options.restoredThreeCurrentReach,
      );
      threeCurrentController = createThreeCurrentReachNormalController({
        predecessorRecord: restoredReview,
        predecessorBytes: currentPredecessorBytes(restoredReview),
        readPredecessorBytes: options.readPredecessorBytes,
        restoredRecord: restoredThreeCurrent,
        restoredEvidence: options.restoredThreeCurrentEvidence,
        adapter: options.threeCurrentReachAdapter,
      });
      const restoredManyfold = sanitizeManyfoldReturnSave(options.restoredManyfoldReturn);
      if (restoredThreeCurrent && restoredManyfold) {
        manyfoldReturnController = createManyfoldReturnNormalController({
          predecessorRecord: restoredThreeCurrent,
          predecessorBytes: options.readThreeCurrentBytes?.(),
          readPredecessorBytes: options.readThreeCurrentBytes,
          restoredRecord: restoredManyfold,
          adapter: options.manyfoldReturnAdapter,
        });
        const restoredInterval = sanitizeIntervalWorksSave(options.restoredIntervalWorks);
        if (restoredInterval) {
          intervalWorksController = createIntervalWorksNormalController({
            predecessorRecord: restoredManyfold,
            predecessorBytes: options.readManyfoldBytes?.(),
            readPredecessorBytes: options.readManyfoldBytes,
            threeCurrentBytes: options.readThreeCurrentBytes?.(),
            readThreeCurrentBytes: options.readThreeCurrentBytes,
            restoredRecord: restoredInterval,
            adapter: options.intervalWorksAdapter,
          });
          const restoredBraided = sanitizeBraidedVergeSave(options.restoredBraidedVerge);
          if (restoredBraided) {
            braidedVergeController = createBraidedVergeNormalController({
              predecessorRecord: restoredInterval,
              predecessorBytes: options.readIntervalBytes?.(),
              readPredecessorBytes: options.readIntervalBytes,
              manyfoldBytes: options.readManyfoldBytes?.(),
              readManyfoldBytes: options.readManyfoldBytes,
              threeCurrentBytes: options.readThreeCurrentBytes?.(),
              readThreeCurrentBytes: options.readThreeCurrentBytes,
              restoredRecord: restoredBraided,
              adapter: options.braidedVergeAdapter,
            });
            const restoredOffset = sanitizeOffsetReachSave(options.restoredOffsetReach);
            if (restoredOffset) {
              offsetReachController = createOffsetReachNormalController({
                predecessorRecord: restoredBraided,
                predecessorBytes: options.readBraidedBytes?.(),
                readPredecessorBytes: options.readBraidedBytes,
                intervalBytes: options.readIntervalBytes?.(),
                readIntervalBytes: options.readIntervalBytes,
                manyfoldBytes: options.readManyfoldBytes?.(),
                readManyfoldBytes: options.readManyfoldBytes,
                threeCurrentBytes: options.readThreeCurrentBytes?.(),
                readThreeCurrentBytes: options.readThreeCurrentBytes,
                restoredRecord: restoredOffset,
                adapter: options.offsetReachAdapter,
              });
            }
          }
        }
      }
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
      if (offsetReachController) {
        const result = offsetReachController.dispatch(intent);
        if (result.status === "returned_to_braided_verge_write_free") {
          offsetReachController = null;
          return Object.freeze({
            ...result,
            state: clonePublicState(braidedStateWithOffsetRoute(braidedVergeController.getState())),
          });
        }
        return result;
      }
      if (braidedVergeController) {
        const braidedState = braidedVergeController.getState();
        if (braidedState.activeGroup === "bv30_restore"
          && intent?.allowlistedActionId === offsetReachActions.route) {
          const predecessorRecord = braidedVergeController.getRecord();
          const currentBraidedBytes = options.readBraidedBytes?.() ?? JSON.stringify(predecessorRecord);
          const candidate = createOffsetReachNormalController({
            predecessorRecord,
            predecessorBytes: currentBraidedBytes,
            readPredecessorBytes: options.readBraidedBytes,
            intervalBytes: options.readIntervalBytes?.(),
            readIntervalBytes: options.readIntervalBytes,
            manyfoldBytes: options.readManyfoldBytes?.(),
            readManyfoldBytes: options.readManyfoldBytes,
            threeCurrentBytes: options.readThreeCurrentBytes?.(),
            readThreeCurrentBytes: options.readThreeCurrentBytes,
            entryIntent: intent,
            restoredRecord: options.restoredOffsetReach,
            adapter: options.createOffsetReachAdapter?.(predecessorRecord, currentBraidedBytes)
              ?? options.offsetReachAdapter,
          });
          if (candidate.getState().shellVersion !== OFFSET_REACH_SHELL_VERSION) {
            return Object.freeze({ status: "rejected", reason: "offset_route_rejected",
              state: clonePublicState(braidedStateWithOffsetRoute(braidedState)) });
          }
          offsetReachController = candidate;
          return Object.freeze({ status: "offset_reach_arrived_zero_evidence", evidenceGranted: false,
            state: clonePublicState(offsetReachController.getState()) });
        }
        const mappedIntent = intent?.activeGroupId === OFFSET_REACH_ROUTE_GROUP
          ? createBraidedVergeIntent({ activeGroup: "bv30_restore", owner: "SYSTEM // RESTORED EXPEDITION NOTE" },
            intent.allowlistedActionId, intent.activationKind, intent.opaqueFreshEventToken)
          : intent;
        const result = braidedVergeController.dispatch(mappedIntent);
        if (result.status === "returned_to_interval_works_write_free") {
          braidedVergeController = null;
          return Object.freeze({
            ...result,
            state: clonePublicState(intervalStateWithBraidedRoute(intervalWorksController.getState())),
          });
        }
        return result;
      }
      if (intervalWorksController) {
        const intervalState = intervalWorksController.getState();
        if (intervalState.activeGroup === "iw30_restore"
          && intent?.allowlistedActionId === braidedVergeActions.route) {
          const predecessorRecord = intervalWorksController.getRecord();
          const currentIntervalBytes = options.readIntervalBytes?.()
            ?? JSON.stringify(predecessorRecord);
          const candidate = createBraidedVergeNormalController({
            predecessorRecord,
            predecessorBytes: currentIntervalBytes,
            readPredecessorBytes: options.readIntervalBytes,
            manyfoldBytes: options.readManyfoldBytes?.(),
            readManyfoldBytes: options.readManyfoldBytes,
            threeCurrentBytes: options.readThreeCurrentBytes?.(),
            readThreeCurrentBytes: options.readThreeCurrentBytes,
            entryIntent: intent,
            restoredRecord: options.restoredBraidedVerge,
            adapter: options.createBraidedVergeAdapter?.(
              predecessorRecord,
              currentIntervalBytes,
            ) ?? options.braidedVergeAdapter,
          });
          if (candidate.getState().shellVersion !== BRAIDED_VERGE_SHELL_VERSION) {
            return Object.freeze({
              status: "rejected",
              reason: "braided_route_rejected",
              state: clonePublicState(intervalStateWithBraidedRoute(intervalState)),
            });
          }
          braidedVergeController = candidate;
          return Object.freeze({
            status: "braided_verge_arrived_zero_evidence",
            evidenceGranted: false,
            state: clonePublicState(braidedVergeController.getState()),
          });
        }
        const mappedIntent = intent?.activeGroupId === BRAIDED_VERGE_ROUTE_GROUP
          ? createIntervalWorksIntent(
            intervalState,
            intent.allowlistedActionId,
            intent.activationKind,
            intent.opaqueFreshEventToken,
          )
          : intent;
        const result = intervalWorksController.dispatch(mappedIntent);
        if (result.status === "returned_to_manyfold_return_write_free") {
          intervalWorksController = null;
          return Object.freeze({
            ...result,
            state: clonePublicState(manyfoldReturnController.getState()),
          });
        }
        return result;
      }
      if (manyfoldReturnController) {
        if (["mf30_restore", "mf30_restore_recorded"].includes(
          manyfoldReturnController.getState().activeGroup,
        ) && intent?.allowlistedActionId === intervalWorksActions.route) {
          const predecessorRecord = manyfoldReturnController.getRecord();
          const candidate = createIntervalWorksNormalController({
            predecessorRecord,
            predecessorBytes: options.readManyfoldBytes?.() ?? JSON.stringify(predecessorRecord),
            readPredecessorBytes: options.readManyfoldBytes,
            threeCurrentBytes: options.readThreeCurrentBytes?.(),
            readThreeCurrentBytes: options.readThreeCurrentBytes,
            entryIntent: intent,
            restoredRecord: options.restoredIntervalWorks,
            adapter: options.createIntervalWorksAdapter?.(
              predecessorRecord,
              options.readManyfoldBytes?.() ?? JSON.stringify(predecessorRecord),
            ) ?? options.intervalWorksAdapter,
          });
          if (candidate.getState().shellVersion !== INTERVAL_WORKS_SHELL_VERSION) {
            return Object.freeze({
              status: "rejected",
              reason: "interval_route_rejected",
              state: clonePublicState(manyfoldReturnController.getState()),
            });
          }
          intervalWorksController = candidate;
          return Object.freeze({
            status: "interval_works_arrived_zero_evidence",
            evidenceGranted: false,
            state: clonePublicState(intervalWorksController.getState()),
          });
        }
        const result = manyfoldReturnController.dispatch(intent);
        if (result.status === "returned_to_three_current_reach_write_free") {
          manyfoldReturnController = null;
          return Object.freeze({
            ...result,
            state: clonePublicState(threeCurrentController.getState()),
          });
        }
        return result;
      }
      if (threeCurrentController) {
        if (["tr40_restore", "tr40_restore_recorded"].includes(
          threeCurrentController.getState().activeGroup,
        ) && intent?.allowlistedActionId === manyfoldReturnActions.route) {
          const validation = threeCurrentController.dispatch(intent);
          if (validation?.reason !== "action_unavailable") return validation;
          const predecessorRecord = threeCurrentController.getRecord();
          manyfoldReturnController = createManyfoldReturnNormalController({
            predecessorRecord,
            predecessorBytes: options.readThreeCurrentBytes?.()
              ?? JSON.stringify(predecessorRecord),
            readPredecessorBytes: options.readThreeCurrentBytes,
            restoredRecord: options.restoredManyfoldReturn,
            adapter: options.manyfoldReturnAdapter,
          });
          return Object.freeze({
            status: "manyfold_arrived_zero_evidence",
            evidenceGranted: false,
            state: clonePublicState(manyfoldReturnController.getState()),
          });
        }
        const result = threeCurrentController.dispatch(intent);
        return result;
      }
      if (reviewController) {
        if (reviewController.getState().activeGroup === "cm50_verified_restore"
          && intent?.allowlistedActionId === threeCurrentReachActions.route) {
          threeCurrentController = createThreeCurrentReachNormalController({
            predecessorRecord: reviewController.getRecord(),
            predecessorBytes: currentPredecessorBytes(reviewController.getRecord()),
            readPredecessorBytes: options.readPredecessorBytes,
            restoredEvidence: options.restoredThreeCurrentEvidence,
            adapter: options.threeCurrentReachAdapter,
          });
          return threeCurrentController.dispatch(intent);
        }
        const result = reviewController.dispatch(intent);
        if (result.status === "save_committed_verified_restore") {
          threeCurrentController = createThreeCurrentReachNormalController({
            predecessorRecord: reviewController.getRecord(),
            predecessorBytes: currentPredecessorBytes(reviewController.getRecord()),
            readPredecessorBytes: options.readPredecessorBytes,
            restoredEvidence: options.restoredThreeCurrentEvidence,
            adapter: options.threeCurrentReachAdapter,
          });
          return Object.freeze({
            ...result,
            state: clonePublicState(threeCurrentController.getState()),
          });
        }
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
      if (offsetReachController) {
        return offsetReachController.updateField(name, value);
      }
      if (braidedVergeController) {
        return braidedVergeController.updateField(name, value);
      }
      if (intervalWorksController) {
        return intervalWorksController.updateField(name, value);
      }
      if (manyfoldReturnController) {
        return manyfoldReturnController.updateField(name, value);
      }
      if (threeCurrentController) {
        return threeCurrentController.updateField(name, value);
      }
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
    getThreeCurrentReachRecord() {
      return threeCurrentController?.getRecord() ?? null;
    },
    getIntervalWorksRecord() {
      return intervalWorksController?.getRecord() ?? null;
    },
    getBraidedVergeRecord() {
      return braidedVergeController?.getRecord() ?? null;
    },
    getOffsetReachRecord() {
      return offsetReachController?.getRecord() ?? null;
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
        status: threeCurrentController
          ? threeCurrentController.getState().activeGroup.startsWith("tr40_")
            ? "three_current_reach_restored"
            : "three_current_reach_revalidated"
          : reviewController
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
  if (activeGroup === OFFSET_REACH_ROUTE_GROUP) {
    if (action === offsetReachActions.route) {
      return createOffsetReachRouteIntent(action, activationKind, eventToken);
    }
    return createBraidedVergeIntent(
      { activeGroup: "bv30_restore", owner: "SYSTEM // RESTORED EXPEDITION NOTE" },
      action,
      activationKind,
      eventToken,
    );
  }
  if (shellVersionOrPhaseIsOffsetReach(activeGroup)) {
    return createOffsetReachIntent(
      { activeGroup: activeGroup ?? "or00_orientation", owner: offsetReachOwner(activeGroup) },
      action,
      activationKind,
      eventToken,
    );
  }
  if (activeGroup === BRAIDED_VERGE_ROUTE_GROUP) {
    if (action === braidedVergeActions.route) {
      return createBraidedVergeRouteIntent(action, activationKind, eventToken);
    }
    return createIntervalWorksIntent(
      {
        activeGroup: "iw30_restore",
        owner: "SYSTEM // RESTORED EXPEDITION NOTE",
      },
      action,
      activationKind,
      eventToken,
    );
  }
  if (shellVersionOrPhaseIsBraidedVerge(activeGroup)) {
    return createBraidedVergeIntent(
      {
        activeGroup: activeGroup ?? "bv00_orientation",
        owner: braidedVergeOwner(activeGroup),
      },
      action,
      activationKind,
      eventToken,
    );
  }
  if (shellVersionOrPhaseIsIntervalWorks(activeGroup)) {
    return createIntervalWorksIntent(
      {
        shellVersion: INTERVAL_WORKS_SHELL_VERSION,
        activeGroup: activeGroup ?? "iw00_orientation",
        owner: intervalWorksOwner(activeGroup),
      },
      action,
      activationKind,
      eventToken,
    );
  }
  if (shellVersionOrPhaseIsManyfold(activeGroup)) {
    if (action === intervalWorksActions.route) {
      return Object.freeze({
        mode: "campaign",
        shellVersion: MANYFOLD_RETURN_SHELL_VERSION,
        controllerVersion: "rp005.manyfold-return-controller.v1",
        packetId: "RP-005",
        activeGroupId: activeGroup,
        expectedOwner: "PILOT // EXPEDITION NAVIGATION",
        allowlistedActionId: action,
        activationKind,
        opaqueFreshEventToken: eventToken,
      });
    }
    return createManyfoldReturnIntent(
      {
        shellVersion: MANYFOLD_RETURN_SHELL_VERSION,
        activeGroup: activeGroup ?? "mf00_arrive",
        owner: manyfoldOwner(activeGroup),
      },
      action,
      activationKind,
      eventToken,
    );
  }
  if (action === threeCurrentReachActions.route
    || action === manyfoldReturnActions.route
    || shellVersionOrPhaseIsThreeCurrent(phase, activeGroup)) {
    return createThreeCurrentReachIntent(
      {
        shellVersion: THREE_CURRENT_REACH_SHELL_VERSION,
        activeGroup: activeGroup ?? "cm50_route",
        owner: threeCurrentOwner(activeGroup),
      },
      action,
      activationKind,
      eventToken,
    );
  }
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

function shellVersionOrPhaseIsThreeCurrent(phase, activeGroup) {
  return typeof activeGroup === "string"
    && (activeGroup === "cm50_route" || activeGroup.startsWith("tr"));
}

function shellVersionOrPhaseIsManyfold(activeGroup) {
  return typeof activeGroup === "string" && activeGroup.startsWith("mf");
}

function shellVersionOrPhaseIsIntervalWorks(activeGroup) {
  return typeof activeGroup === "string" && activeGroup.startsWith("iw");
}

function shellVersionOrPhaseIsBraidedVerge(activeGroup) {
  return typeof activeGroup === "string" && activeGroup.startsWith("bv");
}

function shellVersionOrPhaseIsOffsetReach(activeGroup) {
  return typeof activeGroup === "string" && activeGroup.startsWith("or");
}

function offsetReachOwner(activeGroup) {
  if (activeGroup === "or00_orientation") return "SCENE // OFFSET REACH";
  if (activeGroup === "or10_observations") return "SCENE // SENSOR RECORD";
  if (["or20_python_primary", "or20_python_transfer"].includes(activeGroup)) return "BUILDER WORK // SANITIZED REPLICA";
  if (activeGroup === "or20_python_trace") return "TEACHER / COURSE // CLOSED-NOTE TRACE";
  if (activeGroup === "or20_ai_primary" || activeGroup === "or20_ai_transfer") return "TEACHER / COURSE // INFORMATION EXTRACTION";
  if (activeGroup === "or20_ai_retrieval") return "TEACHER / COURSE // CLOSED-NOTE RETRIEVAL";
  if (["or20_selection_explanation", "or20_inference_explanation"].includes(activeGroup)) return "TEACHER / COURSE // EXPLANATION";
  if (activeGroup === "or20_repair") return "SYSTEM // PRIVATE-SAFE RECOVERY";
  if (activeGroup === "or20_review") return "PILOT // EXPEDITION REVIEW";
  if (activeGroup === "or20_save") return "PILOT // EXPEDITION RECORD";
  if (activeGroup === "or20_transaction") return "SYSTEM // LOCAL TRANSACTION";
  if (activeGroup === "or20_save_recovery") return "SYSTEM // VERIFIED ROLLBACK";
  if (activeGroup === "or20_rollback_unverified") return "SYSTEM // TRANSACTION HOLD";
  if (activeGroup === "or30_restore") return "SYSTEM // RESTORED EXPEDITION NOTES";
  return "SCENE // OFFSET REACH";
}

function braidedVergeOwner(activeGroup) {
  if (activeGroup === "bv00_orientation") return "PILOT // FIELD ORIENTATION";
  if (activeGroup === "bv10_observations") return "PILOT // FIELD OBSERVATION";
  if (activeGroup === "bv20_python_primary" || activeGroup === "bv20_python_transfer") {
    return "BUILDER WORK // SANITIZED REPLICA";
  }
  if (activeGroup === "bv20_python_trace") return "TEACHER / COURSE // METHOD TRACE";
  if (activeGroup?.startsWith("bv20_vision")) return "TEACHER / COURSE // CAPABILITY PRACTICE";
  if (["bv20_capability_boundary", "bv20_relation_boundary"].includes(activeGroup)) {
    return "TEACHER / COURSE // EXPLANATION";
  }
  if (activeGroup === "bv20_repair") return "SYSTEM // PRIVATE-SAFE RECOVERY";
  if (activeGroup === "bv20_review") return "PILOT // EXPEDITION REVIEW";
  if (activeGroup === "bv20_save") return "PILOT // LOCAL EXPEDITION RECORD";
  if (activeGroup === "bv20_transaction") return "SYSTEM // LOCAL TRANSACTION";
  if (activeGroup === "bv20_save_recovery") return "SYSTEM // VERIFIED ROLLBACK";
  if (activeGroup === "bv20_rollback_unverified") return "SYSTEM // TRANSACTION HOLD";
  if (activeGroup === "bv30_restore") return "SYSTEM // RESTORED EXPEDITION NOTE";
  return "PILOT // FIELD ORIENTATION";
}

function intervalWorksOwner(activeGroup) {
  if (activeGroup === "iw00_orientation") return "SYSTEM // EXPEDITION ORIENTATION";
  if (activeGroup === "iw10_observations") return "SCENE // SENSOR RECORD";
  if (activeGroup?.startsWith("iw20_python")) return "BUILDER WORK // SANITIZED PRECOMPUTED REPLICAS";
  if (activeGroup?.startsWith("iw20_speech")
    || ["iw20_direction", "iw20_causation"].includes(activeGroup)) {
    return "TEACHER / COURSE // SPEECH CAPABILITY PRACTICE";
  }
  if (activeGroup === "iw20_repair") return "SYSTEM // LOCAL PRACTICE RECOVERY";
  if (["iw20_review", "iw20_save"].includes(activeGroup)) return "PILOT // BOUNDED EXPEDITION NOTE";
  if (["iw20_transaction", "iw20_save_recovery", "iw20_rollback_unverified"].includes(activeGroup)) {
    return "SYSTEM // LOCAL EXPEDITION NOTE";
  }
  if (activeGroup === "iw30_restore") return "SYSTEM // RESTORED EXPEDITION NOTE";
  return "SYSTEM // EXPEDITION ORIENTATION";
}

function manyfoldOwner(activeGroup) {
  if (activeGroup === "mf00_arrive") return "SCENE // MANYFOLD RETURN";
  if (["mf00_oriented", "mf10_observations"].includes(activeGroup)) {
    return "PILOT // EXPEDITION OBSERVATION";
  }
  if (activeGroup?.startsWith("mf20_python")) {
    return "BUILDER WORK // SANITIZED PRECOMPUTED REPLICAS";
  }
  if (activeGroup?.startsWith("mf20_text")
    || ["mf20_requested_output", "mf20_truth_boundary", "mf20_repair"].includes(activeGroup)) {
    return "TEACHER / COURSE // TEXT TECHNIQUE PRACTICE";
  }
  if (["mf20_review", "mf20_provenance"].includes(activeGroup)) {
    return "PILOT // BOUNDED REVIEW";
  }
  if (["mf20_transaction", "mf20_save_recovery", "mf20_rollback_unverified"].includes(activeGroup)) {
    return "SYSTEM // LOCAL EXPEDITION NOTE";
  }
  if (activeGroup?.startsWith("mf30_")) return "SYSTEM // RESTORED EXPEDITION NOTE";
  return "SCENE // MANYFOLD RETURN";
}

function threeCurrentOwner(activeGroup) {
  if (activeGroup === "cm50_route") return "PILOT // EXPEDITION NAVIGATION";
  if (activeGroup === "tr00_orient") return "SCENE // THREE-CURRENT REACH";
  if (["tr10_relations", "tr20_common_return"].includes(activeGroup)) {
    return "PILOT // EXPEDITION OBSERVATION";
  }
  if (activeGroup?.startsWith("tr30_python")) {
    return "BUILDER WORK // SANITIZED REPLICA";
  }
  if (activeGroup?.startsWith("tr30_workload")
    || ["tr30_modality", "tr30_agentic", "tr30_repair"].includes(activeGroup)) {
    return "901 TEACHER // COURSE PRACTICE";
  }
  if (["tr30_review", "tr30_provenance"].includes(activeGroup)) {
    return "PILOT // BOUNDED REVIEW";
  }
  if (activeGroup === "tr30_save_recovery") {
    return "SYSTEM // LOCAL EXPEDITION NOTE";
  }
  if (activeGroup?.startsWith("tr40_")) {
    return "SYSTEM // RESTORED EXPEDITION NOTE";
  }
  return "PILOT // EXPEDITION NAVIGATION";
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
