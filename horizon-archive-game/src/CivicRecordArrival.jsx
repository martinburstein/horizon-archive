import { useLayoutEffect, useRef } from "react";
import civicRecordArrivalMaster from "../../Visual Direction/Production Masters/2026-07-16-civic-record-district-arrival/civic-record-district-arrival-master-v1.png";
import { CanonicalGameFrame } from "./CanonicalGameFrame.jsx";
import { custodyLedgerRouteActions, custodyLedgerRouteOwners } from "./CustodyLedgerNormalRoute.js";

export function CivicRecordArrival({ routeState, onReturn }) {
  const headingRef = useRef(null);

  useLayoutEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <CanonicalGameFrame enabled>
      <main
        className="game-shell city-threshold-screen civic-record-arrival"
        data-scene="civic-record-district"
        data-board="SC-03-00"
        data-production-art="SC-03-00-civic-record-arrival-v1"
      >
        <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
          {routeState.message}
        </p>
        <section className="city-world civic-record-world" aria-label="Civic Record District arrival overview">
          <img
            className="city-world-plate-native"
            src={civicRecordArrivalMaster}
            alt="An immense nonhuman civic landscape of layered mineral infrastructure and glowing geothermal return channels, viewed in first person"
          />
        </section>
        <section className="city-command-panel" aria-labelledby="rp002-arrival-heading">
          <div>
            <p className="eyebrow">{custodyLedgerRouteOwners.system}</p>
            <h1 ref={headingRef} id="rp002-arrival-heading" tabIndex="-1">Civic Record District</h1>
            <p>{routeState.message}</p>
            <p>Arrival records no observation or learning evidence. The physical city remains unchanged.</p>
          </div>
          <div className="city-command-actions" aria-label="Civic route actions">
            <button className="secondary-action" type="button" onClick={onReturn}>
              {custodyLedgerRouteActions.returnAccepted}
            </button>
          </div>
        </section>
      </main>
    </CanonicalGameFrame>
  );
}
