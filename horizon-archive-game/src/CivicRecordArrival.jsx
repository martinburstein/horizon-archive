import { useLayoutEffect, useRef } from "react";
import civicRecordArrivalMaster from "../../Visual Direction/Production Masters/2026-07-16-civic-record-district-arrival/civic-record-district-arrival-master-v1.png";
import { CanonicalGameFrame } from "./CanonicalGameFrame.jsx";
import {
  CUSTODY_LEDGER_NEAR_DETAIL_ACTION,
  custodyLedgerRouteActions,
  custodyLedgerRouteOwners,
} from "./CustodyLedgerNormalRoute.js";

export function CivicRecordArrival({ routeState, onAction }) {
  const headingRef = useRef(null);
  const atNearObservation = routeState.boardId === "SC-03-10";
  const atFarObservation = routeState.boardId === "SC-03-20";
  const atObservation = atNearObservation || atFarObservation;
  const observationCount = routeState.observationEvidence?.length ?? 0;
  const hasObservation = observationCount > 0;
  const heading = atNearObservation
    ? "Near Exposed Layers"
    : atFarObservation
      ? "Scale Echo and Closed Boundary"
      : "Civic Record District";
  const artRegistration = atNearObservation
    ? "SC-03-10-registered-continuity-hook"
    : atFarObservation
      ? "SC-03-20-registered-continuity-hook"
      : "SC-03-00-civic-record-arrival-v1";
  const routeActions = routeState.availableActions.filter((action) => action !== routeState.routeReturnAction);
  const returnActions = routeState.availableActions.filter((action) => action === routeState.routeReturnAction);

  useLayoutEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
  }, [routeState.checkpoint]);

  function renderAction(action) {
    const owner = action === custodyLedgerRouteActions.continueProtected
      ? custodyLedgerRouteOwners.system
      : custodyLedgerRouteOwners.pilot;
    const primary = action === custodyLedgerRouteActions.continueProtected
      || action === CUSTODY_LEDGER_NEAR_DETAIL_ACTION
      || (atObservation && action !== routeState.routeReturnAction);
    const actionState = routeState.actionStates?.find((candidate) => candidate.label === action);
    return (
      <button
        className={primary ? "primary-action" : "secondary-action"}
        type="button"
        key={action}
        aria-label={`${owner} — ${action}`}
        onClick={(event) => onAction(action, event)}
      >
        {action}
        {actionState && (
          <span className="civic-action-state" data-action-status={actionState.status}>
            {actionState.status === "replay"
              ? "RECORDED // REPLAY ADDS NO EVIDENCE"
              : "AVAILABLE"}
          </span>
        )}
      </button>
    );
  }

  return (
    <CanonicalGameFrame enabled>
      <main
        className="game-shell city-threshold-screen civic-record-arrival"
        data-scene="civic-record-district"
        data-board={routeState.boardId}
        data-production-art={artRegistration}
        data-production-art-hook={atNearObservation
          ? "SC-03-10-detail-pending"
          : atFarObservation
            ? "SC-03-20-detail-pending"
            : undefined}
        data-observation-count={routeState.observationEvidence?.length ?? 0}
      >
        <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
          {[routeState.sceneStatement?.text, routeState.statusMessage?.text, routeState.message].filter(Boolean).join(" ")}
        </p>
        <section
          className="city-world civic-record-world"
          aria-label={atNearObservation
            ? "Near exposed layers, bounded observation view"
            : atFarObservation
              ? "Scale echo and closed boundary, blank distant observation view"
              : "Civic Record District arrival overview"}
        >
          <img
            className="city-world-plate-native"
            src={civicRecordArrivalMaster}
            alt="An immense nonhuman civic landscape of layered mineral infrastructure and glowing geothermal return channels, viewed in first person"
          />
        </section>
        <section className="city-command-panel" aria-labelledby="rp002-arrival-heading">
          <div>
            <p className="eyebrow">{routeState.owner ?? custodyLedgerRouteOwners.system}</p>
            <h1 ref={headingRef} id="rp002-arrival-heading" tabIndex="-1">{heading}</h1>
            {routeState.sceneStatement ? (
              <div className="civic-observation-statement" aria-label="Recorded Scene statement">
                <p className="eyebrow">{routeState.sceneStatement.owner}</p>
                <p>{routeState.sceneStatement.text}</p>
              </div>
            ) : <p>{routeState.message}</p>}
            {routeState.statusMessage && (
              <p className="civic-observation-status">
                <span className="eyebrow">{routeState.statusMessage.owner}</span><br />
                {routeState.statusMessage.text}
              </p>
            )}
            <p>
              {atObservation
                ? hasObservation
                  ? `${observationCount === 1 ? "One" : observationCount === 2 ? "Two" : "Three"} bounded Scene ${observationCount === 1 ? "fact is" : "facts are"} retained. ${observationCount === 1 ? "It grants" : "They grant"} no learning evidence, mastery, exam credit, access, or city change.`
                  : "This blank view records no Scene fact, learning evidence, mastery, exam credit, or city change."
                : "Arrival and orientation record no observation or learning evidence. The physical city remains unchanged."}
            </p>
          </div>
          <div className="civic-action-groups">
            <div className="city-command-actions" aria-label={atNearObservation
              ? "Near evidence actions"
              : atFarObservation
                ? "Far evidence actions"
                : "Civic route actions"}>
              {routeActions.map(renderAction)}
            </div>
            {returnActions.length > 0 && (
              <div className="city-command-actions civic-route-return-actions" aria-label="Separate route return">
                {returnActions.map(renderAction)}
              </div>
            )}
          </div>
        </section>
      </main>
    </CanonicalGameFrame>
  );
}
