import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  createCustodyLedgerObservationState,
  CUSTODY_LEDGER_OBSERVATION_ACTION,
  custodyLedgerObservationIds,
  custodyLedgerObservationOwnershipMessages,
  custodyLedgerObservationStages,
  custodyLedgerObservationStatements,
  recordCustodyLedgerObservation,
  sanitizeCustodyLedgerObservationState,
} from "./custodyLedgerExercise.js";

export const custodyLedgerObservationActions = Object.freeze({
  fixed_trace: "INSPECT FIXED TRACE",
  later_stewardship: "INSPECT LATER STEWARDSHIP",
  outlined_gap: "INSPECT OUTLINED GAP",
  distant_repetition: "COMPARE DISTANT REPETITION",
  closed_boundary: "INSPECT CLOSED BOUNDARY",
});

export const custodyLedgerObservationInterfaceCopy = Object.freeze({
  partialNear: (count) => `Near evidence recorded: ${count} of 3. The district remains unchanged.`,
  nearComplete: "Near evidence recorded: 3 of 3. Distant comparison is available; no city state changed.",
  partialFar: "Far and closed evidence recorded: 1 of 2. The district remains unchanged.",
  complete: "Required observations recorded: 5 of 5. Local comparison is available; no access request occurred.",
  revisit: "Already recorded. This replay adds no evidence or city change.",
  sanitized: "Recorded observations checked. Continue from the first incomplete condition; no city response occurred.",
});

export const custodyLedgerObservationControls = Object.freeze({
  compareScale: Object.freeze({ label: "COMPARE SCALE", kind: "return" }),
  openLocalComparison: Object.freeze({ label: "OPEN LOCAL COMPARISON", kind: "comparison" }),
});

export const custodyLedgerObservationInterfaceStyles = `
.custody-ledger-observation {
  box-sizing: border-box;
  width: 100%;
  max-width: 72rem;
  margin-inline: auto;
  padding: clamp(1rem, 2.4vw, 2rem);
  overflow-wrap: anywhere;
  color: #f4f1e8;
  background: #10131a;
  border: 1px solid #6f7684;
  border-radius: 0.75rem;
}
.custody-ledger-observation *, .custody-ledger-observation *::before, .custody-ledger-observation *::after { box-sizing: border-box; }
.custody-ledger-observation__owner { margin: 0 0 0.5rem; font: 700 0.78rem/1.4 ui-monospace, monospace; letter-spacing: 0.12em; text-transform: uppercase; }
.custody-ledger-observation__text { max-width: 68ch; margin: 0; font: 400 1rem/1.6 system-ui, sans-serif; }
.custody-ledger-observation__status { margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid #6f7684; }
.custody-ledger-observation__actions { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr)); gap: 0.75rem; margin-top: 1.25rem; }
.custody-ledger-observation button {
  min-width: 44px;
  min-height: 44px;
  padding: 0.7rem 1rem;
  color: inherit;
  background: #222938;
  border: 1px solid #aeb7c8;
  border-radius: 0.4rem;
  font: 700 0.9rem/1.35 ui-monospace, monospace;
  text-align: left;
}
.custody-ledger-observation button:hover { background: #30394c; }
.custody-ledger-observation button:focus-visible { outline: 3px solid #f7c96a; outline-offset: 3px; }
.custody-ledger-observation__recorded { display: block; margin-top: 0.35rem; font: 400 0.78rem/1.35 system-ui, sans-serif; }
@media (max-width: 42rem) {
  .custody-ledger-observation { padding: 1rem; border-radius: 0; }
  .custody-ledger-observation__actions { grid-template-columns: 1fr; }
}
@media (prefers-reduced-motion: reduce) {
  .custody-ledger-observation, .custody-ledger-observation * { scroll-behavior: auto !important; transition: none !important; animation: none !important; }
}
@media (forced-colors: active) {
  .custody-ledger-observation { color: CanvasText; background: Canvas; border-color: CanvasText; }
  .custody-ledger-observation button { color: ButtonText; background: ButtonFace; border-color: ButtonText; forced-color-adjust: auto; }
  .custody-ledger-observation button:focus-visible { outline-color: Highlight; }
}
`;

function presentSanitizedState(state) {
  const model = sanitizeCustodyLedgerObservationState(state);
  if (model.phase === "tour_preview") return model;
  return {
    ...model,
    activeGroup: "observation_sanitized",
    ownerMessage: {
      owner: "SYSTEM // EXPEDITION STATE",
      text: custodyLedgerObservationInterfaceCopy.sanitized,
    },
    focusIntent: { group: "observation_sanitized", target: "heading" },
    nextFocusIntent: model.focusIntent,
  };
}

export function createCustodyLedgerObservationInterfaceState(options = {}) {
  if (options.mode === "demo_tour") return createCustodyLedgerObservationState({ mode: "demo_tour" });
  if (options.restoredState) return presentSanitizedState(options.restoredState);
  return createCustodyLedgerObservationState();
}

export function requestCustodyLedgerObservation(interfaceState, request) {
  return recordCustodyLedgerObservation(interfaceState, request);
}

export function activateCustodyLedgerObservationAction(interfaceState, observationId) {
  const safe = sanitizeCustodyLedgerObservationState(interfaceState);
  const boardId = custodyLedgerObservationStages.near.includes(observationId) ? "SC-03-10" : "SC-03-20";
  return recordCustodyLedgerObservation(safe, {
    actionType: CUSTODY_LEDGER_OBSERVATION_ACTION,
    observationId,
    boardId,
    available: true,
  });
}

export function returnToCustodyLedgerObservationEvidence(interfaceState) {
  return sanitizeCustodyLedgerObservationState(interfaceState);
}

function progressMessage(state) {
  if (state.activeGroup === "observation_revisit") return custodyLedgerObservationInterfaceCopy.revisit;
  if (state.progress.near < 3) return custodyLedgerObservationInterfaceCopy.partialNear(state.progress.near);
  if (state.progress.far === 0) return custodyLedgerObservationInterfaceCopy.nearComplete;
  if (state.progress.far === 1) return custodyLedgerObservationInterfaceCopy.partialFar;
  return custodyLedgerObservationInterfaceCopy.complete;
}

function availableObservationIds(state) {
  if (state.phase === "near_observations") return custodyLedgerObservationStages.near;
  return custodyLedgerObservationIds;
}

function controlFor(state) {
  if (state.phase === "tour_preview") return { label: "CONTINUE TOUR", kind: "tour" };
  if (state.activeGroup === "observation_unavailable" || state.activeGroup === "observation_sanitized") {
    return { label: "RETURN TO AVAILABLE EVIDENCE", kind: "return" };
  }
  if (state.activeGroup === "observation_revisit") return { label: "RETURN TO CURRENT EVIDENCE", kind: "return" };
  if (state.activeGroup === "observation_complete") return custodyLedgerObservationControls.openLocalComparison;
  if (state.activeGroup !== "observation_statement") return null;
  if (state.observationComplete) return custodyLedgerObservationControls.openLocalComparison;
  if (state.progress.near === 3 && state.progress.far === 0) return custodyLedgerObservationControls.compareScale;
  return { label: "RETURN TO EVIDENCE", kind: "return" };
}

export function describeCustodyLedgerObservationInterface(state) {
  const isEntry = ["near_observations", "far_observations", "observation_complete"].includes(state.activeGroup);
  const isStatement = ["observation_statement", "observation_revisit"].includes(state.activeGroup);
  const primary = isStatement
    ? custodyLedgerObservationStatements[state.activeObservation.observationId]
    : state.ownerMessage ?? custodyLedgerObservationOwnershipMessages.entry;
  return Object.freeze({
    activeGroup: state.activeGroup,
    primary,
    status: isStatement ? Object.freeze({
      owner: "SYSTEM // EXPEDITION STATE",
      text: progressMessage(state),
    }) : null,
    actionIds: Object.freeze(isEntry ? [...availableObservationIds(state)] : []),
    control: controlFor(state),
    focusIntent: state.focusIntent,
    nextFocusIntent: state.nextFocusIntent,
  });
}

function GroupHeading({ owner, focusKey = "heading" }) {
  return React.createElement("h2", {
    className: "custody-ledger-observation__owner",
    tabIndex: -1,
    "data-focus-key": focusKey,
  }, owner);
}

export function CustodyLedgerObservation({
  initialState,
  mode = "campaign",
  onStateChange,
  onOpenLocalComparison,
  onContinueTour,
}) {
  const initial = useMemo(() => createCustodyLedgerObservationInterfaceState(
    mode === "demo_tour" ? { mode } : initialState ? { restoredState: initialState } : {},
  ), []); // The protected seam intentionally captures only its mount fixture.
  const [state, setState] = useState(initial);
  const rootRef = useRef(null);

  useEffect(() => {
    const target = rootRef.current?.querySelector('[data-focus-key="heading"]');
    target?.focus({ preventScroll: true });
    target?.scrollIntoView({ block: "nearest", behavior: "auto" });
  }, [state.activeGroup, state.activeObservation?.observationId]);

  const commit = (next) => {
    setState(next);
    onStateChange?.(next);
  };
  const view = describeCustodyLedgerObservationInterface(state);
  const control = view.control;
  const isEntry = view.actionIds.length > 0;
  const isStatement = ["observation_statement", "observation_revisit"].includes(state.activeGroup);

  const children = [React.createElement("style", { key: "styles" }, custodyLedgerObservationInterfaceStyles)];
  if (isStatement) {
    const statement = custodyLedgerObservationStatements[state.activeObservation.observationId];
    children.push(React.createElement("div", { key: "statement", "data-interface-group": state.activeGroup },
      React.createElement(GroupHeading, { owner: statement.owner }),
      React.createElement("p", { className: "custody-ledger-observation__text" }, statement.text),
      React.createElement("div", { className: "custody-ledger-observation__status" },
        React.createElement("p", { className: "custody-ledger-observation__owner" }, "SYSTEM // EXPEDITION STATE"),
        React.createElement("p", { className: "custody-ledger-observation__text", role: "status" }, progressMessage(state)),
      ),
    ));
  } else {
    children.push(React.createElement("div", { key: "message", "data-interface-group": state.activeGroup },
      React.createElement(GroupHeading, { owner: view.primary.owner }),
      React.createElement("p", { className: "custody-ledger-observation__text", role: "status" }, view.primary.text),
    ));
  }

  if (isEntry) {
    children.push(React.createElement("div", { className: "custody-ledger-observation__actions", key: "actions" },
      view.actionIds.map((observationId) => React.createElement("button", {
        key: observationId,
        type: "button",
        "data-observation-id": observationId,
        "data-observation-status": state.finalizedObservationIds.includes(observationId) ? "recorded" : "available",
        onClick: () => commit(activateCustodyLedgerObservationAction(state, observationId)),
      },
      custodyLedgerObservationActions[observationId],
      state.finalizedObservationIds.includes(observationId)
        ? React.createElement("span", { className: "custody-ledger-observation__recorded" }, "RECORDED // REPLAY ADDS NO EVIDENCE")
        : null,
      )),
    ));
  }

  if (control) {
    children.push(React.createElement("div", { className: "custody-ledger-observation__actions", key: "control" },
      React.createElement("button", {
        type: "button",
        "data-control-kind": control.kind,
        onClick: () => {
          if (control.kind === "comparison" && state.observationComplete) onOpenLocalComparison?.({ type: "protected_local_comparison_intent" });
          else if (control.kind === "tour") onContinueTour?.({ type: "protected_tour_continuation_intent" });
          else commit(returnToCustodyLedgerObservationEvidence(state));
        },
      }, control.label),
    ));
  }

  return React.createElement("section", {
    ref: rootRef,
    className: "custody-ledger-observation",
    "aria-label": "Protected expedition observation interface",
    "data-active-group": state.activeGroup,
    "data-next-focus": state.nextFocusIntent?.then ?? state.focusIntent?.then ?? "",
  }, children);
}

export default CustodyLedgerObservation;
