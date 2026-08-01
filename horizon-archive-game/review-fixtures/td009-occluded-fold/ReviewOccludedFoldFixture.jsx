import { useMemo, useState } from "react";
import { createOccludedFoldScenario, occludedFoldScenarioNames } from "./scenarios.js";
import "./fixture.css";

export const fixtureMeasurements = Object.freeze({ harness: { scenarioPicker: true, summary: true }, playerSurface: "metrics", documentContainment: true });

export function ReviewOccludedFoldFixture() {
  const [name, setName] = useState(occludedFoldScenarioNames[0]);
  const scenario = useMemo(() => createOccludedFoldScenario(name), [name]);
  return (
    <main className="fixture-shell" data-fixture-root="TD009_OCCLUDED_FOLD_FIXTURE">
      <aside className="fixture-harness" aria-labelledby="fixture-harness-heading">
        <h1 id="fixture-harness-heading">TD-009 closed review harness</h1>
        <label htmlFor="fixture-scenario-picker">Frozen scenario</label>
        <select id="fixture-scenario-picker" value={name} onChange={(event) => setName(event.target.value)}>
          {occludedFoldScenarioNames.map((id) => <option key={id}>{id}</option>)}
        </select>
        <p data-fixture-summary>{occludedFoldScenarioNames.length} allowlisted scenarios · storage-free · no arbitrary state</p>
      </aside>
      <section className="fixture-product" aria-labelledby="fixture-product-heading" data-layout={scenario.state.layout}>
        <div className="fixture-world" role="img" aria-label={`${scenario.scene.role} code-native closed-fixture review surface; runtime imagery deferred`} />
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
