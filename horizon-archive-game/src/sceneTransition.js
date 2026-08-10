export const FRPX02_COPY = Object.freeze({
  MEADOW_ALT: "An immense, perfectly flat field of cultivated transparent glass; rejected cloudy forms, low collars, and fused repair stock lie beneath a bright sky, viewed in first person.",
  NURSERY_NAME: "Fracture Nursery coupling",
  NURSERY_STATE: Object.freeze({
    available: "available",
    in_progress: "in progress",
    complete: "complete",
  }),
  DETECTION: "One compatible local coupling is now classified in the low repair stock. No material change detected.",
  CHAPTER_TURN: "Three unlike bodies. The same expedition interface on each. The familiarity came with us.",
  LOOK: "Clouded test-fractures, imperfect sleeves, fused edges, and low collars rest beside the field's feed and return channels.",
  TALK: "Complete silence. The repair stock stays exactly as it was.",
  AVAILABLE: "ROUTE OPEN // Optional scored calibration is available at the Fracture Nursery coupling. Departure is already open.",
  IN_PROGRESS: "ROUTE OPEN // Your human working copy is unfinished. Resume or exit safely at the coupling. Departure remains open.",
  COMPLETE: "SYSTEM // Calibration evidence is finalized. SCENE // Every crack and the field remain unchanged. Departure remains open.",
  RETURN: Object.freeze({
    available: "SCENE // Same repair stock. SUIT // The same coupling remains classified; optional scored calibration is available here. Departure remains open.",
    in_progress: "SCENE // Same repair stock. SYSTEM // Your working copy is unfinished and can resume here. Departure remains open.",
    complete: "SCENE // Same repair stock; every crack remains. SYSTEM // Calibration evidence remains finalized. Departure remains open.",
  }),
  DEPARTURE: Object.freeze({
    labelPrefix: "Depart: ",
    ariaPrefix: "Depart for Chapter II, ",
  }),
});

export function buildMeadowDeparturePresentation(destination, {
  calibrationState = "available",
} = {}) {
  const safeDestination = typeof destination === "string" && destination.trim()
    ? destination.trim()
    : "the next survey site";
  return {
    summary: calibrationState === "complete"
      ? FRPX02_COPY.COMPLETE
      : calibrationState === "in_progress"
        ? FRPX02_COPY.IN_PROGRESS
        : FRPX02_COPY.AVAILABLE,
    departureLabel: `${FRPX02_COPY.DEPARTURE.labelPrefix}${safeDestination.replace(/^The\s+/i, "")}`,
    departureAriaLabel: `${FRPX02_COPY.DEPARTURE.ariaPrefix}${safeDestination}`,
  };
}

export function buildMeadowReturnPresentation(calibrationState = "available") {
  return FRPX02_COPY.RETURN[calibrationState] ?? FRPX02_COPY.RETURN.available;
}

export function buildSceneArrivalAnnouncement(scene) {
  if (!scene) return "";
  return `Chapter ${scene.chapter}, ${scene.location}.`;
}

export const DROWNED_ARCHIVE_RETURN_HOTSPOT = Object.freeze({
  left: "0%",
  top: "70%",
  width: "17.5%",
  height: "30%",
  narrow: Object.freeze({ left: "0%", top: "70%", width: "15%", height: "30%" }),
});

export function canReturnToCompletedMeadow(completed, routeMarkerMastery) {
  return Array.isArray(completed)
    && completed.includes("meadow")
    && routeMarkerMastery?.masteryStatus === "mastered";
}

export function buildCompletedMeadowReturnPatch(completed, routeMarkerMastery) {
  if (!canReturnToCompletedMeadow(completed, routeMarkerMastery)) return null;
  return Object.freeze({
    sceneIndex: 0,
    pendingAdvance: true,
    terminalOpen: false,
    questionOpen: false,
    workloadSession: null,
    evidenceSession: null,
    calibrationSession: null,
    verb: "LOOK AT",
  });
}

export function getForwardSceneIndex(sceneId, completedCount) {
  return sceneId === "meadow" ? 1 : completedCount;
}
