import { useLayoutEffect, useRef } from "react";
import { getObjectiveLedgerOptions, objectiveLedgerTransfer } from "./objectiveLedgerExercise.js";
import {
  MEASURED_HORIZON_ROUTE_ACTION,
  MEASURED_HORIZON_ROUTE_GROUP,
  measuredHorizonActions,
  measuredHorizonGateIds,
} from "./MeasuredHorizonNormal.js";

const label = (value) => String(value ?? "").replaceAll("_", " ").replaceAll("-", " ");
const slug = (value) => String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const outcomeGroups = new Set(["mh30_ready", "mh30_not_yet_ready", "mh40_restore_ready", "mh40_restore_not_yet"]);

function Action({ action, onAction }) {
  const ids = {
    [MEASURED_HORIZON_ROUTE_ACTION]: "td012-route-action",
    [measuredHorizonActions.requestReview]: "mh00-request-review",
    [measuredHorizonActions.verifyCoverage]: "mh10-verify-coverage",
    [measuredHorizonActions.beginFresh]: "mh20-begin-fresh",
    [measuredHorizonActions.submitPython]: "mh20-submit-python",
    [measuredHorizonActions.submitObjective]: "mh20-submit-objective",
    [measuredHorizonActions.openRemediation]: "mh25-open-remediation",
    [measuredHorizonActions.beginRetry]: "mh25-begin-retry",
    [measuredHorizonActions.reviewDecision]: "mh30-review-decision",
    [measuredHorizonActions.save]: "mh40-save-readiness",
    [measuredHorizonActions.cancelSave]: "mh40-cancel-save",
    [measuredHorizonActions.retrySave]: "mh40-retry-save",
    [measuredHorizonActions.returnUnborrowed]: "mh-return-unborrowed",
    [measuredHorizonActions.returnThreshold]: "mh-return-city-threshold",
  };
  return <button id={ids[action] ?? `mh-action-${slug(action)}`} type="button" onClick={(event) => onAction(action, event)}>{action}</button>;
}

function ObjectiveForm({ objectiveId, onAction, onFieldChange }) {
  const scenario = objectiveLedgerTransfer.find((item) => item.topic === objectiveId);
  if (!scenario) return null;
  const options = getObjectiveLedgerOptions(scenario.id, "transfer");
  return (
    <fieldset className="measured-horizon-form">
      <legend>{objectiveId} · fresh current-objective responsibility</legend>
      <p>{scenario.prompt}</p>
      <label htmlFor={`mh-objective-${slug(objectiveId)}-decision`}>Objective decision
        <select id={`mh-objective-${slug(objectiveId)}-decision`} defaultValue="" onChange={(event) => onFieldChange("decision", event.target.value)}>
          <option value="">Choose one</option>{options.decision.map((value) => <option key={value} value={value}>{label(value)}</option>)}
        </select>
      </label>
      <label htmlFor={`mh-objective-${slug(objectiveId)}-reason`}>Evidence reason
        <select id={`mh-objective-${slug(objectiveId)}-reason`} defaultValue="" onChange={(event) => onFieldChange("reason", event.target.value)}>
          <option value="">Choose one</option>{options.reason.map((value) => <option key={value} value={value}>{label(value)}</option>)}
        </select>
      </label>
      <Action action={measuredHorizonActions.submitObjective} onAction={onAction} />
    </fieldset>
  );
}

function SaveConfirmation({ state, onAction }) {
  const dialogRef = useRef(null);
  useLayoutEffect(() => { dialogRef.current?.showModal(); }, []);
  return (
    <dialog ref={dialogRef} className="measured-horizon-dialog" onCancel={(event) => { event.preventDefault(); onAction(measuredHorizonActions.cancelSave, event); }}>
      <h2 id="mh40-confirm-heading">SAVE THE LOCAL READINESS RECORD</h2>
      <p>Only the private-free 16-key audit basis will be written. No answer, source, identity, authority, world effect, or successor is stored.</p>
      <p><strong>{state.localReadinessState}</strong></p>
      <div className="measured-horizon-actions"><Action action={measuredHorizonActions.save} onAction={onAction} /><Action action={measuredHorizonActions.cancelSave} onAction={onAction} /></div>
    </dialog>
  );
}

export function MeasuredHorizon({ state, onAction, onFieldChange }) {
  const rootRef = useRef(null);
  const group = state.activeGroup;
  useLayoutEffect(() => {
    const target = rootRef.current?.querySelector(`#${CSS.escape(state.focusIntent?.target ?? state.headingId)}`)
      ?? rootRef.current?.querySelector(`#${CSS.escape(state.headingId)}`);
    target?.focus({ preventScroll: true });
  }, [group, state.focusIntent?.target, state.headingId]);
  const route = group === MEASURED_HORIZON_ROUTE_GROUP;
  const tour = group === "td012-tour";
  const currentIndex = measuredHorizonGateIds.indexOf(state.currentObjectiveId);
  const failed = state.failedGateIds ?? [];
  const regularActions = (state.availableActions ?? []).filter((action) => ![measuredHorizonActions.returnUnborrowed, measuredHorizonActions.returnThreshold].includes(action));
  const returns = (state.availableActions ?? []).filter((action) => [measuredHorizonActions.returnUnborrowed, measuredHorizonActions.returnThreshold].includes(action));
  return (
    <main ref={rootRef} className="measured-horizon-shell" data-product-landmark="measured-horizon-product-landmark"
      data-shell-version={state.shellVersion} data-controller-version={state.controllerVersion}
      data-active-group={group} data-owner={state.owner} data-phase={state.phase}
      data-fixture-contract-version="td012.fixture-manifest.v1" aria-labelledby={state.headingId}>
      <figure className="measured-horizon-world" role="img" data-rendering-medium="css" data-runtime-image="not-selected"
        aria-label="Unfamiliar mineral laminae continue across an indifferent horizon. A calm expedition datum folio overlays the view without changing, measuring, or interpreting the world.">
        <span className="mh-lamina mh-lamina-a" /><span className="mh-lamina mh-lamina-b" /><span className="mh-lamina mh-lamina-c" />
        <figcaption>The same SC-12 laminae remain unchanged. The expedition supplies the review standard; the world supplies no verdict.</figcaption>
      </figure>
      <section className="measured-horizon-folio">
        <header className="measured-horizon-header">
          <p className="eyebrow" data-active-owner={state.owner}>{state.owner}</p>
          <p className="mh-objective-version">CURRENT OBJECTIVE SET · 2026-04-15</p>
          <h1 id={state.headingId} tabIndex={-1}>{state.heading}</h1>
          <p className="measured-horizon-status" role="status" aria-live="polite">{state.statusMessage}</p>
        </header>

        {!route && !tour && <section className="measured-horizon-provenance" aria-labelledby="mh-provenance-heading">
          <h2 id="mh-provenance-heading">Separately attributable evidence folio</h2>
          <ul><li>Prior Python homes · read-only</li><li>PY-020 reinforcement · read-only</li><li>CUM-01 and L-06-03 · read-only</li><li>15 current objective records · individually retained</li><li>Unborrowed Reach reconciliation · separate and unchanged</li></ul>
        </section>}

        {(group === "mh10_eligibility" || group === "mh10_eligibility_recovery") && <section className="measured-horizon-gates" aria-labelledby="mh-gates-heading">
          <h2 id="mh-gates-heading">Current evidence coverage</h2>
          <p>Eligibility is current finalized evidence only. Confidence, timing, scenery, Tour, layout, save, and world state provide zero credit.</p>
          <ol>{measuredHorizonGateIds.map((id) => <li key={id} id={`mh10-reference-${slug(id)}`}>{id} · {failed.includes(id) ? "exact answer-free route required" : "separately verified or awaiting fresh work"}</li>)}</ol>
        </section>}

        {(group === "mh20_python_fresh" || group === "mh25_python_retry") && <fieldset className="measured-horizon-form">
          <legend>PY-R12-CUMULATIVE-TRANSFER-01 · fresh closed-note offline work</legend>
          <p>Write a local function that receives gate rows and returns the row count plus whether every row passed. No service, endpoint, credential, file, or network use is permitted.</p>
          <label htmlFor={group === "mh25_python_retry" ? "mh25-python-source" : "mh20-python-source"}>Private session-only Python source
            <textarea id={group === "mh25_python_retry" ? "mh25-python-source" : "mh20-python-source"} onChange={(event) => onFieldChange("learnerSource", event.target.value)} />
          </label>
          <Action action={measuredHorizonActions.submitPython} onAction={onAction} />
        </fieldset>}

        {(group === "mh20_ai901_fresh" || group === "mh25_ai901_retry") && <section aria-labelledby="mh-objective-work-heading">
          <h2 id="mh-objective-work-heading">Fresh objective {Math.max(1, currentIndex + 1)} of 15</h2>
          <ObjectiveForm key={`${group}-${state.currentObjectiveId}`} objectiveId={state.currentObjectiveId} onAction={onAction} onFieldChange={onFieldChange} />
        </section>}

        {(group === "mh25_remediation" || group === "mh30_not_yet_ready" || group === "mh40_restore_not_yet") && <section className="measured-horizon-remediation" aria-labelledby="mh-remediation-heading">
          <h2 id="mh-remediation-heading">Exact demonstrated routes</h2>
          <p>Earned evidence remains valid. Each route is answer-free and returns to genuinely blank fresh work.</p>
          <ul>{failed.map((id) => <li key={id}><h3 id={`mh25-remediate-${slug(id)}`} tabIndex={-1}>REMEDIATE-{id}</h3><p>Return to the mapped prerequisite lesson, retrieve the rule, complete bounded guidance, then retry a fresh equivalent.</p></li>)}</ul>
        </section>}

        {outcomeGroups.has(group) && <section className="measured-horizon-outcome" data-outcome-anatomy="common-v1">
          <p className="mh-datum-label">EXPEDITION LOCAL DATUM</p><h2>{state.localReadinessState}</h2>
          <dl><div><dt>Current gates</dt><dd>{measuredHorizonGateIds.length - failed.length}/16</dd></div><div><dt>Open routes</dt><dd>{failed.length}</dd></div><div><dt>Authority</dt><dd>None</dd></div><div><dt>Successor</dt><dd>None</dd></div></dl>
          <p>This is recoverable course evidence, not a Microsoft exam result, certification, guarantee, access decision, permission, or world response.</p>
        </section>}

        {group === "mh40_save_confirm" && <SaveConfirmation state={state} onAction={onAction} />}
        {!group.includes("transaction") && group !== "mh40_save_confirm" && regularActions.length > 0 && <div className="measured-horizon-actions">{regularActions.map((action) => <Action key={action} action={action} onAction={onAction} />)}</div>}
        {returns.length > 0 && group !== "mh40_save_confirm" && <nav className="measured-horizon-returns" aria-label="Exact safe returns">{returns.map((action) => <Action key={action} action={action} onAction={onAction} />)}</nav>}
        <aside className="measured-horizon-boundary" role="note">COURSE-AUTHORED OFFLINE REVIEW · no live Azure or Foundry action · no exam guarantee · no authority or access · no persisted private work · no successor.</aside>
      </section>
    </main>
  );
}
