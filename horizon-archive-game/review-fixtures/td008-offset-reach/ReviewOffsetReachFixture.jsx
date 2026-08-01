import { useMemo, useState } from "react";
import { createOffsetReachScenario, offsetReachScenarioNames } from "./scenarios.js";
import "./fixture.css";

export const fixtureMeasurements = Object.freeze({ harness: { scenarioPicker: true, summary: true }, playerSurface: "metrics", documentContainment: true });

export function ReviewOffsetReachFixture() {
  const [name, setName] = useState(offsetReachScenarioNames[0]);
  const scenario = useMemo(() => createOffsetReachScenario(name), [name]);
  return (
    <main className="fixture-shell" data-fixture-root="TD008_OFFSET_REACH_FIXTURE">
      <aside className="fixture-harness" aria-labelledby="fixture-harness-heading">
        <h1 id="fixture-harness-heading">TD-008 closed review harness</h1>
        <label htmlFor="fixture-scenario-picker">Frozen scenario</label>
        <select id="fixture-scenario-picker" value={name} onChange={(event) => setName(event.target.value)}>
          {offsetReachScenarioNames.map((id) => <option key={id}>{id}</option>)}
        </select>
        <p data-fixture-summary>{offsetReachScenarioNames.length} allowlisted scenarios · storage-free · no arbitrary state</p>
      </aside>
      <section className="fixture-product" aria-labelledby="fixture-product-heading" data-layout={scenario.state.layout}>
        <div className="fixture-world" role="img" aria-label={`${scenario.scene.role} closed-fixture review surface`} />
        <div className="fixture-panel">
          <p>{scenario.state.owner}</p>
          <h2 id="fixture-product-heading">{scenario.state.heading}</h2>
          <p role="status" aria-live="polite" aria-atomic="true">{scenario.state.status}</p>
          <button type="button">Review frozen product state</button>
        </div>
      </section>
    </main>
  );
}
