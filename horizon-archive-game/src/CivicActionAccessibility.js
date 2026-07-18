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

const custodyLedgerPrimaryReturnGroupLabels = Object.freeze({
  blank: "Blank Python primary evidence return",
  feedback: "Primary feedback evidence return",
  result: "Provisional result evidence return",
  fresh: "Fresh practice evidence return",
  transferFeedback: "Transfer feedback evidence return",
  transferComplete: "Transfer-complete evidence return",
  explanation: "Blank Python explanation evidence return",
});

export function describeCustodyLedgerPrimaryReturnGroup(primaryPhase) {
  if (primaryPhase === "30-A1F") return custodyLedgerPrimaryReturnGroupLabels.feedback;
  if (primaryPhase === "30-A2" || primaryPhase === "DR-00") {
    return custodyLedgerPrimaryReturnGroupLabels.result;
  }
  if (primaryPhase === "DR-20") return custodyLedgerPrimaryReturnGroupLabels.fresh;
  if (primaryPhase === "FT-20F") return custodyLedgerPrimaryReturnGroupLabels.transferFeedback;
  if (primaryPhase === "FT-20C") return custodyLedgerPrimaryReturnGroupLabels.transferComplete;
  if (primaryPhase === "EX-20") return custodyLedgerPrimaryReturnGroupLabels.explanation;
  if (primaryPhase === "FT-00") return custodyLedgerPrimaryReturnGroupLabels.fresh;
  return custodyLedgerPrimaryReturnGroupLabels.blank;
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
