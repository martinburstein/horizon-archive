import {
  CALIBRATION_MARGIN_PROTECTED_ENTRY_VERSION,
  calibrationMarginEntryAccessibility,
  calibrationMarginEntryActions,
} from "./CalibrationMarginProtectedEntry.js";
import {
  calibrationMarginActions,
  deriveCalibrationMarginSafeReturn,
} from "./CalibrationMarginProtectedJourney.js";

export const CALIBRATION_MARGIN_PROTECTED_SURVEY_VERSION = "rp003.protected-survey.v1";
export const CALIBRATION_MARGIN_REVIEW_LOCAL_WORK_IMAGE = "REVIEW LOCAL WORK IMAGE";

export const calibrationMarginSurveyObservations = Object.freeze({
  "INSPECT EXPOSED SEQUENCE A": "correspondence",
  "INSPECT EXPOSED SEQUENCE B": "bounded_difference",
  "INSPECT SEALED BOUNDARY": "sealed_unavailable",
});

export const calibrationMarginSurveyActions = Object.freeze([
  ...Object.keys(calibrationMarginSurveyObservations),
  calibrationMarginActions.returnCivicComparison,
  calibrationMarginActions.returnCityThreshold,
]);

const observationIds = Object.freeze(Object.values(calibrationMarginSurveyObservations));
const intentKeys = Object.freeze([
  "packetId", "version", "mode", "owner", "action", "observationId",
  "activationKind", "eventToken",
]);
const blankKeys = Object.freeze([
  "version", "packetId", "phase", "boardState", "activeGroup", "owner",
  "continuation", "cityStateDelta", "worldStateDelta", "accessStateDelta",
  "successor", "protected", "routable", "privateWorkCleared", "transientWorkCleared",
  "replayedEvents", "observationEvidence", "learningEvidence", "masteryEvidence",
  "saveEligibility", "authorityGranted", "externalActionEnabled", "worldStateChanged",
  "availableActions", "focusIntent", "accessibility",
]);
const surveyKeys = Object.freeze([
  "version", "packetId", "phase", "boardState", "activeGroup", "owner",
  "continuation", "cityStateDelta", "worldStateDelta", "accessStateDelta",
  "successor", "protected", "routable", "privateWorkCleared", "transientWorkCleared",
  "replayedEvents", "observationEvidence", "learningEvidence", "masteryEvidence",
  "saveEligibility", "authorityGranted", "externalActionEnabled", "worldStateChanged",
  "availableActions", "recordedObservationIds", "observationControls",
  "localReviewEligibility", "focusIntent", "accessibility",
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

function exactZeroEffectBoundary(value) {
  return value.continuation === "continuation"
    && value.cityStateDelta === null
    && value.worldStateDelta === null
    && value.accessStateDelta === null
    && value.successor === null
    && value.protected === true
    && value.routable === false
    && value.privateWorkCleared === true
    && value.transientWorkCleared === true
    && Array.isArray(value.replayedEvents) && value.replayedEvents.length === 0
    && Array.isArray(value.observationEvidence) && value.observationEvidence.length === 0
    && Array.isArray(value.learningEvidence) && value.learningEvidence.length === 0
    && Array.isArray(value.masteryEvidence) && value.masteryEvidence.length === 0
    && value.saveEligibility === false
    && value.authorityGranted === false
    && value.externalActionEnabled === false
    && value.worldStateChanged === false;
}

function exactAcceptedBlank(value) {
  return exactKeys(value, blankKeys)
    && value.version === CALIBRATION_MARGIN_PROTECTED_ENTRY_VERSION
    && value.packetId === "RP-003"
    && value.phase === "CM-00 ARRIVE + IDLE"
    && value.boardState === "SC-04"
    && value.activeGroup === "cm00_blank"
    && value.owner === "SCENE"
    && exactZeroEffectBoundary(value)
    && JSON.stringify(value.availableActions) === JSON.stringify(calibrationMarginEntryActions)
    && exactKeys(value.focusIntent, ["group", "target"])
    && value.focusIntent.group === "cm00_blank"
    && ["heading", ...calibrationMarginEntryActions].includes(value.focusIntent.target)
    && JSON.stringify(value.accessibility) === JSON.stringify(calibrationMarginEntryAccessibility);
}

function blankState(acceptedBlank) {
  return Object.freeze({
    ...clone(acceptedBlank),
    focusIntent: Object.freeze({ group: "cm00_blank", target: "heading" }),
  });
}

function observationControls(recordedIds) {
  const recorded = new Set(recordedIds);
  return Object.freeze(Object.entries(calibrationMarginSurveyObservations).map(
    ([action, observationId]) => Object.freeze({
      action,
      observationId,
      status: recorded.has(observationId) ? "Recorded" : "Available",
      recorded: recorded.has(observationId),
      meaningUsesColorAlone: false,
    }),
  ));
}

function surveyState(recordedIds = [], focusTarget = "heading") {
  const recorded = observationIds.filter((observationId) => recordedIds.includes(observationId));
  const eligible = recorded.length === observationIds.length;
  return Object.freeze({
    version: CALIBRATION_MARGIN_PROTECTED_SURVEY_VERSION,
    packetId: "RP-003",
    phase: "CM-10 SURVEY",
    boardState: "SC-04",
    activeGroup: "cm10_survey",
    owner: "SCENE",
    continuation: "continuation",
    cityStateDelta: null,
    worldStateDelta: null,
    accessStateDelta: null,
    successor: null,
    protected: true,
    routable: false,
    privateWorkCleared: true,
    transientWorkCleared: true,
    replayedEvents: Object.freeze([]),
    observationEvidence: Object.freeze([]),
    learningEvidence: Object.freeze([]),
    masteryEvidence: Object.freeze([]),
    saveEligibility: false,
    authorityGranted: false,
    externalActionEnabled: false,
    worldStateChanged: false,
    availableActions: calibrationMarginSurveyActions,
    recordedObservationIds: Object.freeze(recorded),
    observationControls: observationControls(recorded),
    localReviewEligibility: Object.freeze({
      action: CALIBRATION_MARGIN_REVIEW_LOCAL_WORK_IMAGE,
      eligible,
      status: eligible ? "Eligible" : "Inactive",
      dispatchable: eligible,
      activated: false,
    }),
    focusIntent: Object.freeze({ group: "cm10_survey", target: focusTarget }),
    accessibility: calibrationMarginEntryAccessibility,
  });
}

function exactSurveyResume(value) {
  if (!exactKeys(value, surveyKeys)
    || value.version !== CALIBRATION_MARGIN_PROTECTED_SURVEY_VERSION
    || value.packetId !== "RP-003"
    || value.phase !== "CM-10 SURVEY"
    || value.boardState !== "SC-04"
    || value.activeGroup !== "cm10_survey"
    || value.owner !== "SCENE"
    || !exactZeroEffectBoundary(value)
    || JSON.stringify(value.availableActions) !== JSON.stringify(calibrationMarginSurveyActions)
    || !Array.isArray(value.recordedObservationIds)
    || value.recordedObservationIds.length !== new Set(value.recordedObservationIds).size
    || value.recordedObservationIds.some((id) => !observationIds.includes(id))
    || JSON.stringify(value.observationControls)
      !== JSON.stringify(observationControls(value.recordedObservationIds))
    || JSON.stringify(value.localReviewEligibility)
      !== JSON.stringify(surveyState(value.recordedObservationIds).localReviewEligibility)
    || !exactKeys(value.focusIntent, ["group", "target"])
    || value.focusIntent.group !== "cm10_survey"
    || !["heading", ...Object.keys(calibrationMarginSurveyObservations)]
      .includes(value.focusIntent.target)
    || JSON.stringify(value.accessibility) !== JSON.stringify(calibrationMarginEntryAccessibility)) {
    return false;
  }
  return true;
}

function exactIntent(intent) {
  return exactKeys(intent, intentKeys)
    && intent.packetId === "RP-003"
    && intent.version === CALIBRATION_MARGIN_PROTECTED_SURVEY_VERSION
    && intent.mode === "campaign"
    && intent.owner === "PILOT // FLIGHT RECORDER"
    && calibrationMarginEntryAccessibility.modalities.includes(intent.activationKind)
    && opaqueToken(intent.eventToken);
}

function tourState() {
  return Object.freeze({
    version: CALIBRATION_MARGIN_PROTECTED_SURVEY_VERSION,
    packetId: "RP-003",
    phase: "tour_preview",
    activeGroup: "tour_preview",
    owner: "SYSTEM // DEMO TOUR",
    reason: "tour_isolated_before_protected_survey",
    continuation: "continuation",
    cityStateDelta: null,
    worldStateDelta: null,
    accessStateDelta: null,
    successor: null,
    protected: true,
    routable: false,
    privateWorkCleared: true,
    transientWorkCleared: true,
    replayedEvents: Object.freeze([]),
    observationEvidence: Object.freeze([]),
    learningEvidence: Object.freeze([]),
    masteryEvidence: Object.freeze([]),
    saveEligibility: false,
    authorityGranted: false,
    externalActionEnabled: false,
    worldStateChanged: false,
    availableActions: Object.freeze([]),
    focusIntent: Object.freeze({ group: "tour_preview", target: "heading" }),
    accessibility: calibrationMarginEntryAccessibility,
  });
}

function boundaryRecovery() {
  return Object.freeze({
    ...tourState(),
    phase: "rp002_verified_boundary",
    activeGroup: "rp002_verified_boundary",
    owner: "SYSTEM // EXPEDITION STATE",
    reason: "accepted_blank_cm00_required",
    recoveryTarget: Object.freeze({
      packetId: "RP-002",
      checkpoint: "comparison_complete",
      verificationStatus: "verified",
    }),
    focusIntent: Object.freeze({ group: "rp002_verified_boundary", target: "heading" }),
  });
}

/**
 * Pure protected CM-10 controller. It owns no App route, DOM, network, or persistence.
 */
export function createCalibrationMarginProtectedSurvey(options = {}) {
  const tour = options.mode === "demo_tour";
  const acceptedBlank = tour ? null : options.acceptedBlankState;
  const boundaryValid = !tour && exactAcceptedBlank(acceptedBlank);
  const canonicalBlank = boundaryValid ? blankState(acceptedBlank) : null;
  let state = tour
    ? tourState()
    : !boundaryValid
      ? boundaryRecovery()
      : options.restoredState == null
        ? canonicalBlank
        : exactSurveyResume(options.restoredState)
          ? surveyState(options.restoredState.recordedObservationIds)
          : canonicalBlank;
  const handledTokens = new Set();
  let returned = false;

  const reject = (reason) => Object.freeze({ status: "rejected", reason, state: clone(state) });

  return Object.freeze({
    getState() {
      return clone(state);
    },
    dispatch(intent) {
      if (tour) return reject("tour_protected_survey_closed");
      if (!boundaryValid) return reject("accepted_blank_cm00_required");
      if (!exactIntent(intent)) return reject("protected_survey_intent_rejected");
      if (handledTokens.has(intent.eventToken)) return reject("one_hit_only");

      if (state.phase === "CM-00 ARRIVE + IDLE") {
        if (intent.action !== calibrationMarginActions.orient || intent.observationId !== null) {
          return reject("fresh_orient_required");
        }
        handledTokens.add(intent.eventToken);
        state = surveyState();
        return Object.freeze({ status: "survey_visible", state: clone(state) });
      }

      if (state.phase !== "CM-10 SURVEY" || returned) return reject("survey_action_unavailable");
      if (intent.action === CALIBRATION_MARGIN_REVIEW_LOCAL_WORK_IMAGE) {
        if (intent.observationId !== null
          || !state.localReviewEligibility.eligible
          || !state.localReviewEligibility.dispatchable) {
          return reject("review_not_eligible");
        }
        handledTokens.add(intent.eventToken);
        return Object.freeze({
          status: "review_activated",
          state: clone(state),
        });
      }

      if ([calibrationMarginActions.returnCivicComparison,
        calibrationMarginActions.returnCityThreshold].includes(intent.action)) {
        if (intent.observationId !== null) return reject("return_intent_rejected");
        handledTokens.add(intent.eventToken);
        returned = true;
        return Object.freeze({
          status: intent.action === calibrationMarginActions.returnCivicComparison
            ? "returned_to_rp002_write_free"
            : "returned_to_city_threshold_write_free",
          state: clone(state),
          route: deriveCalibrationMarginSafeReturn(intent.action),
        });
      }

      const expectedObservationId = calibrationMarginSurveyObservations[intent.action];
      if (!expectedObservationId || intent.observationId !== expectedObservationId) {
        return reject("matching_observation_intent_required");
      }
      handledTokens.add(intent.eventToken);
      if (state.recordedObservationIds.includes(expectedObservationId)) {
        state = surveyState(state.recordedObservationIds, intent.action);
        return Object.freeze({ status: "recorded_replay_zero_evidence", state: clone(state) });
      }
      state = surveyState([...state.recordedObservationIds, expectedObservationId], intent.action);
      return Object.freeze({ status: "observation_recorded_zero_evidence", state: clone(state) });
    },
    sanitizeBoundary(restoredState = state) {
      if (!boundaryValid) {
        state = boundaryRecovery();
      } else if (exactSurveyResume(restoredState)) {
        state = surveyState(restoredState.recordedObservationIds);
      } else {
        state = canonicalBlank;
      }
      handledTokens.clear();
      returned = false;
      return Object.freeze({
        status: exactSurveyResume(restoredState) ? "resumed" : "resume_sanitized",
        state: clone(state),
      });
    },
  });
}
