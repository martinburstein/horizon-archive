import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { counterfieldScopeRows } from "./CounterfieldNormal.js";
import { getObjectiveLedgerOptions, objectiveLedgerTransfer } from "./objectiveLedgerExercise.js";
import {
  MEASURED_HORIZON_ROUTE_ACTION,
  MEASURED_HORIZON_ROUTE_GROUP,
  measuredHorizonActions,
  measuredHorizonGateIds,
} from "./MeasuredHorizonNormal.js";
import quietOuterMarginImage from "../../Visual Direction/Production Masters/2026-08-14-first-run-host39/host39-environment-master-v1.png";
import equalDignityHorizonImage from "../../Visual Direction/Production Masters/2026-08-14-first-run-host40/host40-environment-master-v1.png";
import { EQUAL_DIGNITY_HORIZON_COPY, EQUAL_DIGNITY_HORIZON_REGISTRY, QUIET_OUTER_MARGIN_COPY, QUIET_OUTER_MARGIN_REGISTRY, deriveEqualDignityHorizonState, deriveQuietOuterMarginState } from "./measuredHorizonHosts.js";

const host40Groups = new Set(["mh25_remediation", "mh30_ready", "mh30_not_yet_ready", "mh40_restore_ready", "mh40_restore_not_yet", "mh40_save_confirm", "mh40_save_transaction", "mh40_save_recovery", "mh40_rollback_hold"]);
function useDecodedImage(enabled, src) { const [decoded, setDecoded] = useState(null); useEffect(() => { if (!enabled) { setDecoded(null); return undefined; } let connected = true; const image = new Image(); image.onload = () => connected && setDecoded({ complete: image.complete, naturalWidth: image.naturalWidth, naturalHeight: image.naturalHeight }); image.onerror = () => connected && setDecoded(null); image.src = src; return () => { connected = false; image.onload = null; image.onerror = null; }; }, [enabled, src]); return decoded; }

const label = (value) => String(value ?? "").replaceAll("_", " ").replaceAll("-", " ");
const slug = (value) => String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const outcomeGroups = new Set(["mh30_ready", "mh30_not_yet_ready", "mh40_restore_ready", "mh40_restore_not_yet"]);
const measuredHorizonCustodyRows = Object.freeze([
  ...counterfieldScopeRows.map((row) => Object.freeze({ scope: row.scope, title: row.owner, description: row.longestCopy ?? row.description, state: row.state })),
  Object.freeze({ scope: "RP-011", title: "Fresh Unborrowed Reach bounded integration record", description: "Six equal observations and eight independent learning responsibilities remain provenance-bound; identity, chronology, cause, purpose, readiness, authority, and successor remain unassigned.", state: "Read-only // separately attributable" }),
  Object.freeze({ scope: "Separate reconciliation", title: "Method-and-limit reconciliation", description: "Defensible methods remain separate from conclusions; all twelve unsupported limits remain unknown / null.", state: "Complete // not merged" }),
]);

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
      <div className="measured-horizon-actions"><Action action={measuredHorizonActions.submitObjective} onAction={onAction} /></div>
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
  const host39DecodedImage = useDecodedImage(QUIET_OUTER_MARGIN_REGISTRY.source.enabled, quietOuterMarginImage);
  const host40DecodedImage = useDecodedImage(EQUAL_DIGNITY_HORIZON_REGISTRY.source.enabled, equalDignityHorizonImage);
  const group = state.activeGroup;
  const host39State = deriveQuietOuterMarginState({ decodedImage: host39DecodedImage });
  const host39NativeActive = host39State !== "hidden" && !host40Groups.has(group);
  const host40State = deriveEqualDignityHorizonState({ decodedImage: host40DecodedImage });
  const host40NativeActive = host40State !== "hidden" && host40Groups.has(group);
  const renderedHeadingId = group === "mh40_save_confirm"
    ? "mh40-save-confirm-shell-heading"
    : group === "mh40_save_recovery"
      ? "mh40-save-recovery-heading"
      : state.headingId;
  useLayoutEffect(() => {
    const target = rootRef.current?.querySelector(`#${CSS.escape(state.focusIntent?.target ?? state.headingId)}`)
      ?? rootRef.current?.querySelector(`#${CSS.escape(renderedHeadingId)}`);
    target?.focus({ preventScroll: true });
  }, [group, state.focusIntent?.target, state.headingId, renderedHeadingId]);
  const route = group === MEASURED_HORIZON_ROUTE_GROUP;
  const tour = group === "td012-tour";
  const currentIndex = measuredHorizonGateIds.indexOf(state.currentObjectiveId);
  const failed = state.failedGateIds ?? [];
  const inlineAction = ["mh20_python_fresh", "mh25_python_retry"].includes(group)
    ? measuredHorizonActions.submitPython
    : ["mh20_ai901_fresh", "mh25_ai901_retry"].includes(group)
      ? measuredHorizonActions.submitObjective
      : null;
  const regularActions = (state.availableActions ?? []).filter((action) => action !== inlineAction && ![measuredHorizonActions.returnUnborrowed, measuredHorizonActions.returnThreshold].includes(action));
  const returns = (state.availableActions ?? []).filter((action) => [measuredHorizonActions.returnUnborrowed, measuredHorizonActions.returnThreshold].includes(action));
  return (
    <main ref={rootRef} className="measured-horizon-shell" data-product-landmark="measured-horizon-product-landmark"
      data-shell-version={state.shellVersion} data-controller-version={state.controllerVersion}
      data-active-group={group} data-owner={state.owner} data-phase={state.phase}
      data-fixture-contract-version="td012.fixture-manifest.v1" aria-labelledby={renderedHeadingId}>
      <figure className="measured-horizon-world" role={host39NativeActive || host40NativeActive ? undefined : "img"} data-rendering-medium={host39NativeActive || host40NativeActive ? "production-master" : "css"} data-runtime-image={host40NativeActive ? "host40-environment-master-v1.png" : host39NativeActive ? "host39-environment-master-v1.png" : "not-selected"} data-quiet-outer-margin-state={host39State} data-quiet-outer-margin-native-active={host39NativeActive ? "true" : undefined} data-equal-dignity-horizon-state={host40State} data-equal-dignity-horizon-native-active={host40NativeActive ? "true" : undefined}
        aria-label={host39NativeActive || host40NativeActive ? undefined : "Unfamiliar mineral laminae continue across an indifferent horizon. A calm expedition datum folio overlays the view without changing, measuring, or interpreting the world."}>
        {host40NativeActive ? <img className="measured-horizon-native-scene" src={equalDignityHorizonImage} alt={EQUAL_DIGNITY_HORIZON_COPY.alt} data-equal-dignity-horizon-source={EQUAL_DIGNITY_HORIZON_REGISTRY.source.path} /> : host39NativeActive ? <img className="measured-horizon-native-scene" src={quietOuterMarginImage} alt={QUIET_OUTER_MARGIN_COPY.alt} data-quiet-outer-margin-source={QUIET_OUTER_MARGIN_REGISTRY.source.path} /> : <><span className="mh-lamina mh-lamina-a" /><span className="mh-lamina mh-lamina-b" /><span className="mh-lamina mh-lamina-c" /></>}
        <figcaption>The same SC-12 laminae remain unchanged. The expedition supplies the review standard; the world supplies no verdict.</figcaption>
      </figure>
      <section className="measured-horizon-folio">
        <header className="measured-horizon-header">
          <p className="eyebrow" data-active-owner={state.owner}>{state.owner}</p>
          <p className="mh-objective-version">CURRENT OBJECTIVE SET · 2026-04-15</p>
          <h1 id={renderedHeadingId} tabIndex={-1}>{state.heading}</h1>
          <p className="measured-horizon-status" role="status" aria-live="polite">{state.statusMessage}</p>
        </header>

        {!route && !tour && <section className="measured-horizon-provenance" aria-labelledby="mh-provenance-heading">
          <h2 id="mh-provenance-heading">Separately attributable evidence folio</h2>
          <p>Five retained expedition records remain complete, read-only, and separate from their reconciliation.</p>
          <ul>{measuredHorizonCustodyRows.map((row) => <li key={row.scope}><strong>{row.scope} · {row.title}</strong><span>{row.description}</span><small>{row.state}</small></li>)}</ul>
          <p>Current eligibility is separately based on all prior SOLIDIFIED Python homes, accepted PY-020 fresh reinforcement, CUM-01, L-06-03, and fifteen individually retained current-objective evidence chains. None supplies fresh-work credit.</p>
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
          <div className="measured-horizon-actions"><Action action={measuredHorizonActions.submitPython} onAction={onAction} /></div>
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
          <dl><div><dt>Objective version</dt><dd>2026-04-15</dd></div><div><dt>Evidence basis</dt><dd>5 records + reconciliation + 16 fresh gates</dd></div><div><dt>Current gates</dt><dd>{measuredHorizonGateIds.length - failed.length}/16</dd></div><div><dt>Exact remediation routes</dt><dd>{failed.length ? `${failed.length} OPEN` : "NONE"}</dd></div><div><dt>Authority</dt><dd>None</dd></div><div><dt>Successor</dt><dd>None</dd></div></dl>
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
