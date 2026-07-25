import { useLayoutEffect, useRef } from "react";
import cityOverviewImage from "../../Visual Direction/Production Masters/2026-07-15-photorealistic-demo/city-threshold-overview-master.png";
import { CanonicalGameFrame } from "./CanonicalGameFrame.jsx";

export function CalibrationMarginEntry({ entryState, onAction }) {
  const headingRef = useRef(null);
  const actionRefs = useRef(new Map());

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
      >
        <section className="city-world" aria-label={entryState.boardState}>
          <img
            className="city-world-plate city-world-plate-native"
            src={cityOverviewImage}
            alt="An immense empty underground civic landscape already operating above geothermal chasms"
          />
        </section>
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
            {entryState.availableActions.map((action) => (
              <button
                key={action}
                ref={(element) => {
                  if (element) actionRefs.current.set(action, element);
                  else actionRefs.current.delete(action);
                }}
                type="button"
                onClick={(event) => onAction(action, event)}
              >
                {action}
              </button>
            ))}
          </div>
        </section>
      </main>
    </CanonicalGameFrame>
  );
}
