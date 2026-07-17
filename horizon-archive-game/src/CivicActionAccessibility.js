export function describeCivicActionAccessibility(owner, action, status) {
  const stateText = status === "replay"
    ? "RECORDED // REPLAY ADDS NO EVIDENCE"
    : status === "inert"
      ? "INERT // ZERO CREDIT // NOT YET ACTIVE"
      : status === "available"
        ? "AVAILABLE"
        : null;
  return Object.freeze({
    stateText,
    accessibleName: [owner, action, stateText].filter(Boolean).join(" — "),
  });
}

const civicWorldRegionLabels = Object.freeze({
  overview: "Civic Record District arrival overview",
  near: "Near exposed layers, bounded observation view",
  farBlank: "Scale echo and closed boundary, blank distant observation view",
  farPartial: "Scale echo and closed boundary; one distant expedition observation retained.",
  farComplete: "Scale echo and closed boundary; both distant expedition observations retained.",
  localComparisonBlank: "Civic Record District unchanged; blank local comparison interface with five expedition observations retained.",
});

export function describeCivicWorldRegionAccessibility({ boardId, checkpoint } = {}) {
  if (boardId === "SC-03-10") {
    return civicWorldRegionLabels.near;
  }
  if (boardId === "SC-03-30") {
    return civicWorldRegionLabels.localComparisonBlank;
  }
  if (boardId !== "SC-03-20") {
    return civicWorldRegionLabels.overview;
  }
  if (["sc03_far_complete", "sc03_far_complete_acknowledgement"].includes(checkpoint)) {
    return civicWorldRegionLabels.farComplete;
  }
  if (["sc03_far_first", "sc03_far_first_acknowledgement"].includes(checkpoint)) {
    return civicWorldRegionLabels.farPartial;
  }
  return civicWorldRegionLabels.farBlank;
}
