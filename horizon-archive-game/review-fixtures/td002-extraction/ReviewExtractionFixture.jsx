import { CalibrationMarginExtractionFloor } from "../../src/CalibrationMarginExtractionFloor.jsx";
import { CanonicalGameFrame } from "../../src/CanonicalGameFrame.jsx";
import cityOverviewImage from "../../../Visual Direction/Production Masters/2026-07-15-photorealistic-demo/city-threshold-overview-master.png";

export function ReviewExtractionFixture({ state }) {
  const noAction = () => null;
  return (
    <CanonicalGameFrame enabled>
      <main
        className="game-shell city-threshold-screen calibration-margin-entry"
        data-scene="calibration-margin"
        data-board="SC-04"
        data-phase={state.phase}
        data-extraction-floor="true"
      >
        <section className="city-world calibration-margin-world" aria-label="SC-04">
          <img
            className="city-world-plate city-world-plate-native"
            src={cityOverviewImage}
            alt="An immense empty underground civic landscape already operating above geothermal chasms"
          />
        </section>
        <CalibrationMarginExtractionFloor
          state={state}
          onAction={noAction}
          onFieldChange={noAction}
          onConfidenceChange={noAction}
        />
      </main>
    </CanonicalGameFrame>
  );
}
