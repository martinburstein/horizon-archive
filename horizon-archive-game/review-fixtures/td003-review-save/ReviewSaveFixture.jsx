import { CalibrationMarginReviewSave } from "../../src/CalibrationMarginReviewSave.jsx";
import { CanonicalGameFrame } from "../../src/CanonicalGameFrame.jsx";
import cityOverviewImage from "../../../Visual Direction/Production Masters/2026-07-15-photorealistic-demo/city-threshold-overview-master.png";

export function ReviewSaveFixture({ scenario }) {
  const noAction = () => null;
  return (
    <CanonicalGameFrame enabled>
      <main
        className="game-shell city-threshold-screen calibration-margin-entry"
        data-scene="calibration-margin"
        data-board="SC-04"
        data-phase={scenario.state.phase}
        data-extraction-floor="true"
        data-fixture-scenario={scenario.name}
      >
        <section className="city-world calibration-margin-world" aria-label="SC-04">
          <img
            className="city-world-plate city-world-plate-native"
            src={cityOverviewImage}
            alt="An immense empty underground civic landscape already operating above geothermal chasms"
          />
        </section>
        <CalibrationMarginReviewSave state={scenario.state} onAction={noAction} />
      </main>
    </CanonicalGameFrame>
  );
}
