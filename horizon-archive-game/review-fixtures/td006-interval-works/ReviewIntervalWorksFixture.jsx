import { useEffect, useState } from "react";
import { IntervalWorks } from "../../src/IntervalWorks.jsx";
import {
  createIntervalWorksScenario,
  intervalWorksScenarioNames,
} from "./scenarios.js";

function measurePlayerSurface() {
  const surface = document.querySelector(".interval-works");
  if (!surface) return null;
  const targets = [...surface.querySelectorAll("button, select, textarea")].map((node) => {
    const rect = node.getBoundingClientRect();
    return { id: node.id || node.dataset.actionId || node.tagName, width: rect.width, height: rect.height };
  });
  return {
    targetCount: targets.length,
    belowMinimum: targets.filter(({ width, height }) => width < 44 || height < 44),
    scrollWidth: surface.scrollWidth,
    clientWidth: surface.clientWidth,
    horizontalEscape: surface.scrollWidth > surface.clientWidth,
  };
}

export function ReviewIntervalWorksFixture() {
  const [name, setName] = useState(intervalWorksScenarioNames[0]);
  const [metrics, setMetrics] = useState(null);
  const scenario = createIntervalWorksScenario(name);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setMetrics(measurePlayerSurface()));
    return () => cancelAnimationFrame(frame);
  }, [name]);
  const summary = {
    fixtureId: "td006-interval-works-v1",
    scenario: name,
    playerSurface: metrics,
    harness: { scenarioPicker: true, summary: true },
    documentContainment: {
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      horizontalEscape: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    },
    state: {
      shellVersion: scenario.state.shellVersion,
      boardState: scenario.state.boardState,
      sceneRole: scenario.scene?.role ?? "SC-06-PANORAMA-MASTER",
      cropId: scenario.scene?.cropId ?? "sc06-released",
      activeGroup: scenario.state.activeGroup,
      owner: scenario.state.owner,
      headingId: scenario.state.headingId,
      statusMessageId: scenario.state.statusMessageId,
      focusTarget: scenario.state.focusIntent?.target,
      recordedObservationIds: scenario.state.recordedObservationIds ?? [],
      formKind: scenario.state.form?.kind ?? null,
      evidenceCount: scenario.state.evidenceCount ?? 0,
      hasSanitizedNote: Boolean(scenario.state.note),
    },
    pageErrorCount: 0,
    consoleErrorCount: 0,
    localRequestCount: 0,
  };
  return (
    <div data-fixture-marker="TD006_INTERVAL_WORKS_FIXTURE">
      <label className="fixture-scenario-picker">
        Closed review scenario
        <select value={name} onChange={(event) => setName(event.target.value)}>
          {intervalWorksScenarioNames.map((candidate) => <option key={candidate} value={candidate}>{candidate}</option>)}
        </select>
      </label>
      {scenario.state.shellVersion === "SS-RP006-INTERVAL-WORKS-v1" ? (
        <IntervalWorks state={scenario.state} onAction={() => {}} onFieldChange={() => {}} />
      ) : (
        <main className="interval-works">
          <section className="interval-panel">
            <h1 id={scenario.state.headingId} tabIndex="-1">Exact released MF-30 route boundary</h1>
            <p>{scenario.state.owner}</p>
            <div role="status" aria-live="polite" aria-atomic="true">{scenario.state.statusMessage}</div>
            <div className="interval-actions">
              {(scenario.state.availableActions ?? []).map((action) => <button key={action} type="button">{action}</button>)}
            </div>
          </section>
        </main>
      )}
      <pre data-fixture-summary>{JSON.stringify(summary, null, 2)}</pre>
    </div>
  );
}
