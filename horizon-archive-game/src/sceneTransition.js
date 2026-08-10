export function buildMeadowDeparturePresentation(destination, {
  calibrationState = "available",
} = {}) {
  const safeDestination = typeof destination === "string" && destination.trim()
    ? destination.trim()
    : "the next survey site";
  return {
    summary: calibrationState === "complete"
      ? "ROUTE OPEN // Calibration evidence is finalized. The fractured stock and field remain unchanged; departure remains open."
      : calibrationState === "in_progress"
        ? "ROUTE OPEN // The human working copy is unfinished. Resume or exit safely at the coupling; departure remains open."
        : "ROUTE OPEN // Scored calibration is available at the Fracture Nursery coupling; departure remains open.",
    departureLabel: `Depart: ${safeDestination.replace(/^The\s+/i, "")}`,
    departureAriaLabel: `Depart for Chapter II, ${safeDestination}`,
  };
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
