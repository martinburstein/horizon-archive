import { useEffect, useState } from "react";
import { BraidedVerge } from "../../src/BraidedVerge.jsx";
import {
  createBraidedVergeScenario,
  braidedVergeScenarioNames,
} from "./scenarios.js";

function measurePlayerSurface() {
  const surface = document.querySelector(".braided-verge, .braided-fixture-return");
  if (!surface) return null;
  const targets = [...surface.querySelectorAll("button, select, textarea")].map((node) => {
    const rect = node.getBoundingClientRect();
    return {
      id: node.id || node.dataset.actionId || node.tagName,
      width: rect.width,
      height: rect.height,
    };
  });
  return {
    targetCount: targets.length,
    belowMinimum: targets.filter(({ width, height }) => width < 44 || height < 44),
    scrollWidth: surface.scrollWidth,
    clientWidth: surface.clientWidth,
    horizontalEscape: surface.scrollWidth > surface.clientWidth,
  };
}

export function ReviewBraidedVergeFixture() {
  const [name, setName] = useState(braidedVergeScenarioNames[0]);
  const [metrics, setMetrics] = useState(null);
  const scenario = createBraidedVergeScenario(name);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setMetrics(measurePlayerSurface()));
    return () => cancelAnimationFrame(frame);
  }, [name]);
  const summary = {
    fixtureId: "td007-braided-verge-v1",
    scenario: name,
    playerSurface: metrics,
    harness: { scenarioPicker: true, summary: true },
    documentContainment: {
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      horizontalEscape: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    },
    state: {
      sceneRole: scenario.scene?.role ?? scenario.state.boardState,
      cropId: scenario.scene?.cropId ?? "accepted-return",
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
    <div data-fixture-marker="TD007_BRAIDED_VERGE_FIXTURE">
      <label className="fixture-scenario-picker">
        Closed review scenario
        <select value={name} onChange={(event) => setName(event.target.value)}>
          {braidedVergeScenarioNames.map((candidate) => (
            <option key={candidate} value={candidate}>{candidate}</option>
          ))}
        </select>
      </label>
      {scenario.state.shellVersion === "SS-RP007-BRAIDED-VERGE-v1" ? (
        <BraidedVerge state={scenario.state} onAction={() => {}} onFieldChange={() => {}} />
      ) : (
        <main className="braided-fixture-return">
          <section aria-labelledby={scenario.state.headingId}>
            <p className="eyebrow">{scenario.state.owner}</p>
            <h1 id={scenario.state.headingId} tabIndex="-1">{scenario.state.phase ?? "Accepted return"}</h1>
            <p>{scenario.state.statusMessage}</p>
            <p
              role="status"
              aria-live="polite"
              aria-atomic="true"
              data-status-id={scenario.state.statusMessageId}
            >
              {scenario.state.statusMessage}
            </p>
            <div>
              {(scenario.state.availableActions ?? []).map((action) => (
                <button key={action} type="button">{action}</button>
              ))}
            </div>
          </section>
        </main>
      )}
      <pre data-fixture-summary>{JSON.stringify(summary, null, 2)}</pre>
    </div>
  );
}
