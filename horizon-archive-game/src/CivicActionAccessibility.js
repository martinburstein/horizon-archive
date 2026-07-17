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
