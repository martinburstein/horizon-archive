import { useLayoutEffect, useRef } from "react";
import cityOverviewImage from "../../Visual Direction/Production Masters/2026-07-15-photorealistic-demo/city-threshold-overview-master.png";
import { CanonicalGameFrame } from "./CanonicalGameFrame.jsx";
import { CalibrationMarginPythonFloor } from "./CalibrationMarginPythonFloor.jsx";

export function CalibrationMarginEntry({ entryState, onAction, onFieldChange }) {
  const headingRef = useRef(null);
  const actionRefs = useRef(new Map());
  const observationControls = new Map(
    (entryState.observationControls ?? []).map((control) => [control.action, control]),
  );
  const pythonFloorActive = entryState.shellVersion === "SS-RP003-PY010-v1";

  useLayoutEffect(() => {
    const target = entryState?.focusIntent?.target;
    if (target === "heading") {
      headingRef.current?.focus({ preventScroll: true });
      return;
    }
    actionRefs.current.get(target)?.focus({ preventScroll: true });
  }, [entryState]);

  return (
    <CanonicalGameFrame enabled>
      <main
        className="game-shell city-threshold-screen calibration-margin-entry"
        data-scene="calibration-margin"
        data-board={entryState.boardState}
        data-phase={entryState.phase}
        data-python-floor={pythonFloorActive || undefined}
      >
        <section className="city-world calibration-margin-world" aria-label={entryState.boardState}>
          <img
            className="city-world-plate city-world-plate-native"
            src={cityOverviewImage}
            alt="An immense empty underground civic landscape already operating above geothermal chasms"
          />
        </section>
        {pythonFloorActive ? (
          <CalibrationMarginPythonFloor
            state={entryState}
            onAction={onAction}
            onFieldChange={onFieldChange}
          />
        ) : (
        <section
          className="city-command-panel"
          aria-labelledby="calibration-margin-entry-heading"
          data-active-group={entryState.activeGroup}
        >
          <div>
            <p className="eyebrow">{entryState.owner}</p>
            <h1
              ref={headingRef}
              id="calibration-margin-entry-heading"
              tabIndex="-1"
            >
              {entryState.boardState} // {entryState.phase}
            </h1>
          </div>
          <div className="city-command-actions" role="group" aria-label={entryState.phase}>
            {entryState.availableActions.map((action) => {
              const observation = observationControls.get(action);
              const label = observation ? `${action} — ${observation.status}` : action;
              return (
                <button
                  key={action}
                  ref={(element) => {
                    if (element) actionRefs.current.set(action, element);
                    else actionRefs.current.delete(action);
                  }}
                  type="button"
                  data-observation-id={observation?.observationId}
                  data-recorded={observation?.recorded || undefined}
                  onClick={(event) => onAction(action, event)}
                >
                  {label}
                </button>
              );
            })}
            {entryState.localReviewEligibility?.eligible && (
              <button
                type="button"
                data-review-eligibility="eligible-active"
                onClick={(event) => onAction(
                  entryState.localReviewEligibility.action,
                  event,
                )}
              >
                {entryState.localReviewEligibility.action} — Eligible
              </button>
            )}
          </div>
        </section>
        )}
      </main>
    </CanonicalGameFrame>
  );
}
