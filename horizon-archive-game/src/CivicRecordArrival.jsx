import { useLayoutEffect, useRef } from "react";
import temporaryContinuityPlate from "../../Visual Direction/Production Masters/2026-07-15-photorealistic-demo/city-threshold-overview-master.png";
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
        data-production-art-hook="SC-03-00-overview-pending"
      >
        <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
          {routeState.message}
        </p>
        <section className="city-world civic-record-world" aria-label="Civic Record District arrival overview">
          <img
            className="city-world-plate-native"
            src={temporaryContinuityPlate}
            alt="A first-person civic route arrival using the registered predecessor continuity plate while the dedicated district master is prepared"
          />
          <div className="civic-record-art-status" aria-hidden="true">SC-03-00 // REGISTERED CONTINUITY HOOK</div>
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
