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
  const atBlankObservation = routeState.boardId === "SC-03-10";
  const heading = atBlankObservation ? "Near Exposed Layers" : "Civic Record District";
  const artRegistration = atBlankObservation
    ? "SC-03-10-registered-continuity-hook"
    : "SC-03-00-civic-record-arrival-v1";

  useLayoutEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
  }, [routeState.checkpoint]);

  return (
    <CanonicalGameFrame enabled>
      <main
        className="game-shell city-threshold-screen civic-record-arrival"
        data-scene="civic-record-district"
        data-board={routeState.boardId}
        data-production-art={artRegistration}
        data-production-art-hook={atBlankObservation ? "SC-03-10-detail-pending" : undefined}
      >
        <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
          {routeState.message}
        </p>
        <section
          className="city-world civic-record-world"
          aria-label={atBlankObservation ? "Near exposed layers, blank observation view" : "Civic Record District arrival overview"}
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
            <p>{routeState.message}</p>
            <p>
              {atBlankObservation
                ? "This blank view records no Scene fact, learning evidence, mastery, exam credit, or city change."
                : "Arrival and orientation record no observation or learning evidence. The physical city remains unchanged."}
            </p>
          </div>
          <div className="city-command-actions" aria-label="Civic route actions">
            {routeState.availableActions.map((action) => {
              const owner = action === custodyLedgerRouteActions.continueProtected
                ? custodyLedgerRouteOwners.system
                : custodyLedgerRouteOwners.pilot;
              const primary = action === custodyLedgerRouteActions.continueProtected
                || action === CUSTODY_LEDGER_NEAR_DETAIL_ACTION;
              return (
                <button
                  className={primary ? "primary-action" : "secondary-action"}
                  type="button"
                  key={action}
                  aria-label={`${owner} — ${action}`}
                  onClick={(event) => onAction(action, event)}
                >
                  {action}
                </button>
              );
            })}
          </div>
        </section>
      </main>
    </CanonicalGameFrame>
  );
}
