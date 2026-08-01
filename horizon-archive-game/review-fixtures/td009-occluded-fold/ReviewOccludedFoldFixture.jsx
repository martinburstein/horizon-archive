import { useMemo, useState } from "react";
import { OccludedFold } from "../../src/OccludedFold.jsx";
import { createOccludedFoldScenario, occludedFoldScenarioNames } from "./scenarios.js";
import "../../src/styles.css";
import "./fixture.css";

export const fixtureMeasurements = Object.freeze({
  harness: { scenarioPicker: true, summary: true },
  playerSurface: "exact-product-landmark-metrics",
  documentContainment: true,
  frozenCopy: { heading: true, label: true, retainedRow: true, truthfulPythonLabel: true },
  presentationModes: { forcedColors: true, reducedMotion: true, grayscale: true },
});

function BoundaryProductState({ state }) {
  return (
    <main className="fixture-boundary-product" data-product-landmark={state.landmark} aria-labelledby={state.headingId}>
      <div className="fixture-boundary-world" role="img" aria-label="Released boundary review surface; no onward scene, route, or world response is manufactured." />
      <section className="fixture-boundary-panel">
        <p className="eyebrow" data-active-owner={state.owner}>{state.owner}</p>
        <h2 id={state.headingId} tabIndex="-1">{state.heading}</h2>
        <p role="status" aria-live="polite" aria-atomic="true">{state.status}</p>
        <div className="fixture-boundary-actions" aria-label="Exact boundary controls">
          {state.controls.map((label) => <button type="button" key={label}>{label}</button>)}
        </div>
      </section>
    </main>
  );
}

function FrozenCopyEvidence({ copy, layout }) {
  if (!copy) return null;
  return (
    <section className="fixture-frozen-copy" data-frozen-copy-layout={layout} aria-labelledby="fixture-frozen-copy-heading">
      <h2 id="fixture-frozen-copy-heading">Frozen longest-copy containment evidence</h2>
      <p data-frozen-copy="heading">{copy.heading}</p>
      <p data-frozen-copy="label">{copy.label}</p>
      <p data-frozen-copy="retained-rp008-row">{copy.retainedRow}</p>
      <p data-frozen-copy="truthful-python-label">{copy.truthfulPythonLabel}</p>
    </section>
  );
}

export function ReviewOccludedFoldFixture() {
  const [name, setName] = useState(occludedFoldScenarioNames[0]);
  const scenario = useMemo(() => createOccludedFoldScenario(name), [name]);
  const modeClass = `fixture-mode-${scenario.presentationMode}`;
  return (
    <main className={`fixture-shell ${modeClass}`} data-fixture-root="TD009_OCCLUDED_FOLD_FIXTURE" data-presentation-mode={scenario.presentationMode}>
      <aside className="fixture-harness" aria-labelledby="fixture-harness-heading">
        <h1 id="fixture-harness-heading">TD-009 closed review harness</h1>
        <label htmlFor="fixture-scenario-picker">Frozen scenario</label>
        <select id="fixture-scenario-picker" value={name} onChange={(event) => setName(event.target.value)}>
          {occludedFoldScenarioNames.map((id) => <option key={id}>{id}</option>)}
        </select>
        <p data-fixture-summary>{occludedFoldScenarioNames.length} allowlisted scenarios · storage-free · no arbitrary state</p>
        <dl className="fixture-measurements">
          <div><dt>Product landmark</dt><dd>{scenario.productLandmark}</dd></div>
          <div><dt>Layout</dt><dd>{scenario.layout}</dd></div>
          <div><dt>Presentation mode</dt><dd>{scenario.presentationMode}</dd></div>
          <div><dt>Focus target</dt><dd>{scenario.state.focusIntent?.target ?? scenario.state.focusTarget}</dd></div>
        </dl>
      </aside>
      <section className="fixture-product" aria-label="Selected exact product state" data-layout={scenario.layout} data-product-landmark={scenario.productLandmark}>
        {scenario.surface === "production-occluded-fold" ? (
          <OccludedFold state={scenario.state} onAction={() => {}} onFieldChange={() => {}} />
        ) : (
          <BoundaryProductState state={scenario.state} />
        )}
        <FrozenCopyEvidence copy={scenario.frozenLongestCopy} layout={scenario.layout} />
      </section>
    </main>
  );
}
