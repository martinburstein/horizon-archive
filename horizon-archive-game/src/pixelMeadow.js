// The filename is retained as a compatibility seam for saved-game and test imports.
// Active Meadow rendering is a single integrated photorealistic production plate.
export const MEADOW_PIXEL_HOTSPOTS = Object.freeze({
  primary: Object.freeze({ left: "25%", top: "11.1111%", width: "50%", height: "88.8889%" }),
  routeMarker: Object.freeze({ left: "77.0313%", top: "53.3333%", width: "21.5625%", height: "46.3889%" }),
  fractureNursery: Object.freeze({
    left: "0%", top: "52%", width: "24%", height: "48%",
    narrow: Object.freeze({ left: "0%", top: "52%", width: "24%", height: "48%" }),
  }),
});

export function deriveMeadowRouteMarkerState(exerciseEvidence, routeMarkerMastery) {
  if (exerciseEvidence?.completed !== true) return "locked";
  if (routeMarkerMastery?.masteryStatus === "mastered") return "completed";
  return "awake";
}

export function deriveFractureNurseryState(routeMarkerMastery, calibrationMastery) {
  if (routeMarkerMastery?.masteryStatus !== "mastered") return "hidden";
  if (calibrationMastery?.masteryStatus === "mastered") return "complete";
  if (["in_progress", "remediation_required"].includes(calibrationMastery?.masteryStatus)) return "in_progress";
  return "available";
}
