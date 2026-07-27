import { useState } from "react";
import { ManyfoldReturn } from "../../src/ManyfoldReturn.jsx";
import {
  createManyfoldReturnScenario,
  manyfoldReturnScenarioNames,
} from "./scenarios.js";

function summaryFor(scenario) {
  const { state, scene } = scenario;
  return {
    fixtureId: "td005-manyfold-return-v1",
    scenario: scenario.name,
    shellVersion: state.shellVersion,
    boardState: state.boardState,
    sceneId: scene?.sceneId ?? "SC-05",
    worldRole: scene?.role ?? "SC-05-RELEASED-MASTER",
    worldMasterId: scene?.masterId ?? "sc05-three-current-panorama-runtime-master-v1.webp",
    cropId: scene?.cropId ?? "sc05-released",
    activeGroup: state.activeGroup,
    owner: state.owner,
    headingId: state.headingId,
    statusMessageId: state.statusMessageId,
    focusTarget: state.focusIntent?.target ?? state.headingId,
    availableActionIds: state.availableActions ?? [],
    recordedObservationIds: state.recordedObservationIds ?? [],
    formKind: state.form?.kind ?? null,
    failedPublicIds: state.failedPublicIds ?? [],
    reviewRowIds: (state.reviewRows ?? []).map((row) => row.id),
    hasSanitizedNote: Boolean(state.note),
    targetMinimum: 44,
    layout: window.innerWidth < 768 ? "narrow" : window.innerWidth < 1280 ? "stacked" : "wide",
    horizontalEscape: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    pageErrorCount: 0,
    consoleErrorCount: 0,
    localRequestCount: 0,
  };
}

export function ReviewManyfoldReturnFixture() {
  const [name, setName] = useState(manyfoldReturnScenarioNames[0]);
  const scenario = createManyfoldReturnScenario(name);
  const summary = summaryFor(scenario);
  return (
    <div data-fixture-marker="TD005_MANYFOLD_RETURN_FIXTURE">
      <label className="fixture-scenario-picker">
        Closed review scenario
        <select value={name} onChange={(event) => setName(event.target.value)}>
          {manyfoldReturnScenarioNames.map((candidate) => (
            <option key={candidate} value={candidate}>{candidate}</option>
          ))}
        </select>
      </label>
      {scenario.state.shellVersion === "SS-RP005-MANYFOLD-RETURN-v1" ? (
        <ManyfoldReturn state={scenario.state} onAction={() => {}} onFieldChange={() => {}} />
      ) : (
        <main className="three-current-reach">
          <section className="three-current-panel">
            <h1 id={scenario.state.headingId} tabIndex="-1">Exact released TR-40 route boundary</h1>
            <p>{scenario.state.owner}</p>
            <div role="status" aria-live="polite" aria-atomic="true">{scenario.state.statusMessage}</div>
            <div className="three-current-actions">
              {scenario.state.availableActions.map((action) => <button key={action} type="button">{action}</button>)}
            </div>
          </section>
        </main>
      )}
      <pre data-fixture-summary>{JSON.stringify(summary, null, 2)}</pre>
    </div>
  );
}
