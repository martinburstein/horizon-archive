import { useEffect, useLayoutEffect, useRef, useState } from "react";
import forkedLogicStitchImage from "../../Visual Direction/Production Masters/2026-08-14-first-run-host21/host21-environment-master-v1.png";
import sheddingCarrierSkinImage from "../../Visual Direction/Production Masters/2026-08-14-first-run-host22/host22-environment-master-v1.png";
import cityOverviewImage from "../../Visual Direction/Production Masters/2026-07-15-photorealistic-demo/city-threshold-overview-master.png";
import { CanonicalGameFrame } from "./CanonicalGameFrame.jsx";
import { CalibrationMarginExtractionFloor } from "./CalibrationMarginExtractionFloor.jsx";
import { CalibrationMarginPythonFloor } from "./CalibrationMarginPythonFloor.jsx";
import { CalibrationMarginReviewSave } from "./CalibrationMarginReviewSave.jsx";
import { FORKED_LOGIC_STITCH_COPY, FORKED_LOGIC_STITCH_REGISTRY, SHEDDING_CARRIER_SKIN_COPY, SHEDDING_CARRIER_SKIN_REGISTRY, deriveForkedLogicStitchState, deriveSheddingCarrierSkinState } from "./calibrationMarginHosts.js";

function useDecodedImage(enabled, src) {
  const [decoded, setDecoded] = useState(null);
  useEffect(() => {
    if (!enabled) { setDecoded(null); return undefined; }
    let connected = true;
    const image = new Image();
    image.onload = () => connected && setDecoded({ complete: image.complete, naturalWidth: image.naturalWidth, naturalHeight: image.naturalHeight });
    image.onerror = () => connected && setDecoded(null);
    image.src = src;
    return () => { connected = false; image.onload = null; image.onerror = null; };
  }, [enabled, src]);
  return decoded;
}

export function CalibrationMarginEntry({
  entryState,
  onAction,
  onFieldChange,
  onConfidenceChange,
}) {
  const headingRef = useRef(null);
  const actionRefs = useRef(new Map());
  const observationControls = new Map(
    (entryState.observationControls ?? []).map((control) => [control.action, control]),
  );
  const pythonFloorActive = entryState.shellVersion === "SS-RP003-PY010-v1";
  const extractionFloorActive =
    entryState.shellVersion === "SS-RP003-IE01-v1";
  const reviewSaveActive =
    entryState.shellVersion === "SS-RP003-REVIEW-SAVE-v1";
  const forkedLogicStitchDecodedImage = useDecodedImage(FORKED_LOGIC_STITCH_REGISTRY.source.enabled, forkedLogicStitchImage);
  const forkedLogicStitchState = deriveForkedLogicStitchState({ decodedImage: forkedLogicStitchDecodedImage });
  const forkedLogicStitchNativeActive = forkedLogicStitchState !== "hidden" && !extractionFloorActive && !reviewSaveActive;
  const sheddingCarrierSkinDecodedImage = useDecodedImage(SHEDDING_CARRIER_SKIN_REGISTRY.source.enabled, sheddingCarrierSkinImage);
  const sheddingCarrierSkinState = deriveSheddingCarrierSkinState({ decodedImage: sheddingCarrierSkinDecodedImage });
  const sheddingCarrierSkinNativeActive = sheddingCarrierSkinState !== "hidden" && (extractionFloorActive || reviewSaveActive);

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
        data-extraction-floor={extractionFloorActive || reviewSaveActive || undefined}
        data-forked-logic-stitch-state={forkedLogicStitchState}
        data-forked-logic-stitch-native-active={forkedLogicStitchNativeActive ? "true" : undefined}
        data-shedding-carrier-skin-state={sheddingCarrierSkinState}
        data-shedding-carrier-skin-native-active={sheddingCarrierSkinNativeActive ? "true" : undefined}
      >
        <section className="city-world calibration-margin-world" aria-label={entryState.boardState}>
          <img
            className="city-world-plate city-world-plate-native"
            src={sheddingCarrierSkinNativeActive ? sheddingCarrierSkinImage : forkedLogicStitchNativeActive ? forkedLogicStitchImage : cityOverviewImage}
            alt={sheddingCarrierSkinNativeActive ? SHEDDING_CARRIER_SKIN_COPY.alt : forkedLogicStitchNativeActive ? FORKED_LOGIC_STITCH_COPY.alt : "An immense empty underground civic landscape already operating above geothermal chasms"}
            data-forked-logic-stitch-source={forkedLogicStitchNativeActive ? FORKED_LOGIC_STITCH_REGISTRY.source.path : undefined}
            data-shedding-carrier-skin-source={sheddingCarrierSkinNativeActive ? SHEDDING_CARRIER_SKIN_REGISTRY.source.path : undefined}
          />
        </section>
        {reviewSaveActive ? (
          <CalibrationMarginReviewSave
            state={entryState}
            onAction={onAction}
          />
        ) : extractionFloorActive ? (
          <CalibrationMarginExtractionFloor
            state={entryState}
            onAction={onAction}
            onFieldChange={onFieldChange}
            onConfidenceChange={onConfidenceChange}
          />
        ) : pythonFloorActive ? (
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
