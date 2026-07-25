import {
  calibrationMarginActions,
  calibrationMarginPresentation,
  deriveCalibrationMarginSafeReturn,
} from "./CalibrationMarginProtectedJourney.js";

export const CALIBRATION_MARGIN_PROTECTED_ENTRY_VERSION = "rp003.protected-blank-entry.v1";
export const CALIBRATION_MARGIN_ENTRY_ACTION = "ENTER ADJACENT SURVEY";
export const CALIBRATION_MARGIN_INSPECT_SEALED_BOUNDARY = "INSPECT SEALED BOUNDARY";

export const calibrationMarginEntryActions = Object.freeze([
  calibrationMarginActions.orient,
  CALIBRATION_MARGIN_INSPECT_SEALED_BOUNDARY,
  calibrationMarginActions.returnCivicComparison,
  calibrationMarginActions.returnCityThreshold,
]);

export const calibrationMarginEntryAccessibility = Object.freeze({
  oneActiveGroup: true,
  minActionCssPx: calibrationMarginPresentation.accessibility.minTargetCssPx,
  ownerHeadingProgrammaticFocus: true,
  ownerHeadingInTabOrder: false,
  meaningUsesColorMotionOrAudioAlone: false,
  forcedColorsEquivalent: true,
  reducedMotionDirectReplacement: true,
  naturalNarrowReflow: true,
  textZoomPercent: calibrationMarginPresentation.reflow.textZoomPercent,
  horizontalPageEscape: false,
  modalities: calibrationMarginPresentation.accessibility.modalities,
});

const entryIntentKeys = Object.freeze([
  "packetId", "version", "mode", "owner", "action", "activationKind", "eventToken",
]);
const actionIntentKeys = Object.freeze([...entryIntentKeys]);
const predecessorKeys = Object.freeze([
  "packetId", "checkpoint", "verificationStatus", "civicComparisonSaved",
  "nextSurveyDirectionMarked", "continuation", "cityStateDelta",
]);
const cityThresholdKeys = Object.freeze([
  "status", "checkpoint", "boardId", "continuation", "cityStateDelta",
  "worldStateDelta", "accessStateDelta",
]);
const resumeKeys = Object.freeze([
  "version", "packetId", "phase", "boardState", "activeGroup", "owner",
  "continuation", "cityStateDelta", "worldStateDelta", "accessStateDelta",
  "successor", "protected", "routable", "privateWorkCleared", "transientWorkCleared",
  "replayedEvents", "observationEvidence", "learningEvidence", "masteryEvidence",
  "saveEligibility", "authorityGranted", "externalActionEnabled", "worldStateChanged",
  "availableActions", "focusIntent", "accessibility",
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

function exactCityThreshold(value) {
  return exactKeys(value, cityThresholdKeys)
    && value.status === "ready"
    && value.checkpoint === "city_threshold"
    && value.boardId === "SC-02-50"
    && value.continuation === "continuation"
    && value.cityStateDelta === null
    && value.worldStateDelta === null
    && value.accessStateDelta === null;
}

function exactPredecessor(value) {
  return exactKeys(value, predecessorKeys)
    && value.packetId === "RP-002"
    && value.checkpoint === "comparison_complete"
    && value.verificationStatus === "verified"
    && value.civicComparisonSaved === true
    && value.nextSurveyDirectionMarked === true
    && value.continuation === "continuation"
    && value.cityStateDelta === null;
}

function exactIntent(intent, action, owner) {
  return exactKeys(intent, action === CALIBRATION_MARGIN_ENTRY_ACTION ? entryIntentKeys : actionIntentKeys)
    && intent.packetId === "RP-003"
    && intent.version === CALIBRATION_MARGIN_PROTECTED_ENTRY_VERSION
    && intent.mode === "campaign"
    && intent.owner === owner
    && intent.action === action
    && calibrationMarginEntryAccessibility.modalities.includes(intent.activationKind)
    && opaqueToken(intent.eventToken);
}

function rp002Recovery(reason, mode = "campaign") {
  return Object.freeze({
    version: CALIBRATION_MARGIN_PROTECTED_ENTRY_VERSION,
    packetId: "RP-003",
    phase: mode === "demo_tour" ? "tour_preview" : "rp002_verified_boundary",
    boardState: mode === "demo_tour" ? null : "SC-03-50",
    activeGroup: mode === "demo_tour" ? "tour_preview" : "rp002_verified_boundary",
    owner: mode === "demo_tour" ? "SYSTEM // DEMO TOUR" : "SYSTEM // EXPEDITION STATE",
    reason,
    recoveryTarget: Object.freeze({
      packetId: "RP-002",
      checkpoint: "comparison_complete",
      verificationStatus: "verified",
      focusIntent: Object.freeze({
        group: "verified_restore",
        target: "heading",
        then: "saved_controls",
      }),
    }),
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
    focusIntent: Object.freeze({
      group: mode === "demo_tour" ? "tour_preview" : "rp002_verified_boundary",
      target: "heading",
    }),
    accessibility: calibrationMarginEntryAccessibility,
  });
}

function cityThresholdBoundary() {
  return Object.freeze({
    version: CALIBRATION_MARGIN_PROTECTED_ENTRY_VERSION,
    packetId: "RP-003",
    phase: "city_threshold",
    boardState: "SC-02-50",
    activeGroup: "city_threshold",
    owner: "PILOT // FLIGHT RECORDER",
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
    focusIntent: Object.freeze({ group: "city_threshold", target: "heading" }),
    accessibility: calibrationMarginEntryAccessibility,
  });
}

function blankEntry(focusTarget = "heading") {
  return Object.freeze({
    version: CALIBRATION_MARGIN_PROTECTED_ENTRY_VERSION,
    packetId: "RP-003",
    phase: "CM-00 ARRIVE + IDLE",
    boardState: "SC-04",
    activeGroup: "cm00_blank",
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
    availableActions: calibrationMarginEntryActions,
    focusIntent: Object.freeze({ group: "cm00_blank", target: focusTarget }),
    accessibility: calibrationMarginEntryAccessibility,
  });
}

function exactBlankResume(value) {
  const focusTarget = value?.focusIntent?.target;
  return exactKeys(value, resumeKeys)
    && value.version === CALIBRATION_MARGIN_PROTECTED_ENTRY_VERSION
    && value.packetId === "RP-003"
    && value.phase === "CM-00 ARRIVE + IDLE"
    && value.boardState === "SC-04"
    && value.activeGroup === "cm00_blank"
    && value.owner === "SCENE"
    && value.continuation === "continuation"
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
    && value.worldStateChanged === false
    && JSON.stringify(value.availableActions) === JSON.stringify(calibrationMarginEntryActions)
    && exactKeys(value.focusIntent, ["group", "target"])
    && value.focusIntent.group === "cm00_blank"
    && ["heading", ...calibrationMarginEntryActions].includes(focusTarget)
    && JSON.stringify(value.accessibility) === JSON.stringify(calibrationMarginEntryAccessibility);
}

/**
 * Pure protected RP-003 entry controller. It owns no App route, DOM, network, or persistence.
 */
export function createCalibrationMarginProtectedEntry(options = {}) {
  const tour = options.mode === "demo_tour";
  const boundaryValid = !tour
    && exactCityThreshold(options.acceptedCityThreshold)
    && exactPredecessor(options.verifiedRp002);
  let state = tour
    ? rp002Recovery("tour_isolated_before_campaign_entry", "demo_tour")
    : !boundaryValid
      ? rp002Recovery("predecessor_or_threshold_sanitized")
      : options.restoredState == null
        ? cityThresholdBoundary()
        : exactBlankResume(options.restoredState)
          ? blankEntry()
          : rp002Recovery("resume_sanitized");
  const handledTokens = new Set();
  let returned = false;

  const reject = (reason) => Object.freeze({ status: "rejected", reason, state: clone(state) });

  return Object.freeze({
    getState() {
      return clone(state);
    },
    dispatch(intent) {
      if (tour) return reject("tour_campaign_entry_closed");
      if (!boundaryValid) return reject("rp002_recovery_required");
      if (state.phase === "city_threshold") {
        if (!exactIntent(intent, CALIBRATION_MARGIN_ENTRY_ACTION, "PILOT // FLIGHT RECORDER")) {
          return reject("protected_entry_intent_rejected");
        }
        if (handledTokens.has(intent.eventToken)) return reject("one_hit_only");
        handledTokens.add(intent.eventToken);
        state = blankEntry();
        return Object.freeze({ status: "blank_entry_visible", state: clone(state) });
      }
      if (state.phase !== "CM-00 ARRIVE + IDLE" || returned) return reject("blank_entry_action_unavailable");
      if (!calibrationMarginEntryActions.includes(intent?.action)
        || !exactIntent(intent, intent.action, "PILOT // FLIGHT RECORDER")) {
        return reject("blank_entry_action_rejected");
      }
      if (handledTokens.has(intent.eventToken)) return reject("one_hit_only");
      handledTokens.add(intent.eventToken);

      if (intent.action === calibrationMarginActions.orient
        || intent.action === CALIBRATION_MARGIN_INSPECT_SEALED_BOUNDARY) {
        state = blankEntry(intent.action);
        return Object.freeze({
          status: intent.action === calibrationMarginActions.orient
            ? "orientation_presented_zero_evidence"
            : "sealed_boundary_presented_zero_evidence",
          state: clone(state),
        });
      }

      returned = true;
      return Object.freeze({
        status: intent.action === calibrationMarginActions.returnCivicComparison
          ? "returned_to_rp002_write_free"
          : "returned_to_city_threshold_write_free",
        state: clone(state),
        route: deriveCalibrationMarginSafeReturn(intent.action),
      });
    },
    sanitizeBoundary(restoredState = state) {
      if (!boundaryValid) {
        state = rp002Recovery("predecessor_or_threshold_sanitized");
      } else if (exactBlankResume(restoredState)) {
        state = blankEntry();
      } else if (restoredState?.phase === "city_threshold") {
        state = cityThresholdBoundary();
      } else {
        state = rp002Recovery("resume_sanitized");
      }
      handledTokens.clear();
      returned = false;
      return Object.freeze({ status: "revalidated", state: clone(state) });
    },
  });
}
