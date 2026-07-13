export function buildMeadowDeparturePresentation(destination, {
  calibrationStarted = false,
  calibrationMastered = false,
} = {}) {
  const safeDestination = typeof destination === "string" && destination.trim()
    ? destination.trim()
    : "the next survey site";
  return {
    summary: calibrationMastered
      ? "ROUTE OPEN // Primary, transfer, retrieval, and optional calibration complete; crowned passage earned."
      : "ROUTE OPEN // Depart now, or choose scored calibration: diagnose first, then pass 8/8 + 8/8 + 4/4. Retry or Exit safely; the route stays open.",
    calibrationLabel: calibrationStarted ? "Resume optional calibration" : "Optional calibration",
    calibrationAriaLabel: calibrationStarted ? "Resume optional calibration practice" : "Start optional calibration practice",
    departureLabel: `Depart: ${safeDestination.replace(/^The\s+/i, "")}`,
    departureAriaLabel: `Depart for Chapter II, ${safeDestination}`,
  };
}

export function buildSceneArrivalAnnouncement(scene) {
  if (!scene) return "";
  return `Chapter ${scene.chapter}, ${scene.location}.`;
}
