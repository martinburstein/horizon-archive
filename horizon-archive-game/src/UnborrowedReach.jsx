import { useLayoutEffect, useRef, useState } from "react";
import {
  UNBORROWED_REACH_ROUTE_GROUP, unborrowedReachActions, unborrowedReachLimitIds,
  unborrowedReachObservationIds, unborrowedReachReconciliationMethodIds,
} from "./UnborrowedReachNormal.js";

const observationActions = [
  unborrowedReachActions.observePersistentTransition, unborrowedReachActions.observeDifferingRelation,
  unborrowedReachActions.observeMaintainedBypass, unborrowedReachActions.observeMultipleCandidate,
  unborrowedReachActions.observeUnavailableMargin, unborrowedReachActions.observeLayeredStewardship,
];
const observationControlIds = Object.freeze([
  "ur10-persistent-transition", "ur10-similar-form-different-relation", "ur10-maintained-bypass",
  "ur10-multiple-candidate-exposure", "ur10-unavailable-comparable-margin", "ur10-layered-stewardship",
]);
const returnActions = new Set([unborrowedReachActions.returnCounterfield, unborrowedReachActions.returnThreshold]);
const label = (value) => String(value).replaceAll("_", " ");

const fixedActionIds = Object.freeze({
  [unborrowedReachActions.isolate]: "ur00-isolate-action",
  [unborrowedReachActions.finalizeFresh]: "ur20-finalize-fresh",
  [unborrowedReachActions.retryFreshSave]: "ur20-fresh-retry-save",
  [unborrowedReachActions.reopenRp007]: "ur30-reopen-rp007",
  [unborrowedReachActions.reopenRp008]: "ur30-reopen-rp008",
  [unborrowedReachActions.reopenRp009]: "ur30-reopen-rp009",
  [unborrowedReachActions.reopenRp010]: "ur30-reopen-rp010",
  [unborrowedReachActions.saveReconciliation]: "ur30-save-reconciliation",
  [unborrowedReachActions.retryFinalSave]: "ur30-final-retry-save",
});
function actionId(action, group) {
  if (action === unborrowedReachActions.returnCounterfield) return group.startsWith("ur30") ? "ur30-return-counterfield" : group.startsWith("ur10") ? "ur10-return-counterfield" : "ur00-return-counterfield";
  if (action === unborrowedReachActions.returnThreshold) return group.startsWith("ur30") ? "ur30-return-city-threshold" : `${group}-return-city-threshold`;
  return fixedActionIds[action];
}
function Action({ action, group = "", onAction, onBeforeAction }) {
  return <button id={actionId(action, group)} type="button" onClick={() => { onBeforeAction?.(); onAction(action); }}>{action}</button>;
}

function LearningForm({ form, action, onAction, onFieldChange }) {
  if (!form || !action) return null;
  if (form.kind === "python") return (
    <fieldset className="unborrowed-form"><legend>{label(form.form)} local Python record</legend>
      <p>Use only the supplied sanitized replicas. No package, file, network, output, secret, credential, endpoint value, or external operation is available.</p>
      <label htmlFor={`ur20-python-${form.form}-source`}>Blank private source</label>
      <textarea id={`ur20-python-${form.form}-source`} onChange={(event) => onFieldChange("learnerSource", event.target.value)} />
      <Action action={action} onAction={onAction} />
    </fieldset>
  );
  if (form.kind === "trace") return (
    <fieldset className="unborrowed-form"><legend>Closed-note API / SDK / endpoint role trace</legend>
      {form.fieldIds.map((id) => <label key={id} htmlFor={`ur20-trace-${id}`}>{label(id)}<select id={`ur20-trace-${id}`} defaultValue="" onChange={(event) => onFieldChange(id, event.target.value)}><option value="" disabled>Select one bounded statement</option>{form.options[id].map((value) => <option key={value} value={value}>{label(value)}</option>)}</select></label>)}
      <Action action={action} onAction={onAction} />
    </fieldset>
  );
  if (form.kind === "agent") return (
    <fieldset className="unborrowed-form"><legend>{label(form.form)} single-agent surface cases</legend>
      <p>Portal authoring, portal testing, client invocation, and client result handling remain distinct.</p>
      {form.cases.map((item) => <section className="unborrowed-case" key={item.id}><h3>{item.id}</h3><p>{item.prompt}</p>{form.dimensions.map((dimension) => <label key={dimension} htmlFor={`ur20-${form.form}-${item.id}-${dimension}`}>{label(dimension)}<select id={`ur20-${form.form}-${item.id}-${dimension}`} defaultValue="" onChange={(event) => onFieldChange(`${item.id}.${dimension}`, event.target.value)}><option value="" disabled>Select one surface</option>{form.options[dimension].map((value) => <option key={value} value={value}>{label(value)}</option>)}</select></label>)}</section>)}
      <Action action={action} onAction={onAction} />
    </fieldset>
  );
  return (
    <fieldset className="unborrowed-form"><legend>Bounded explanation</legend>
      <label htmlFor={`ur20-${form.form}`}>Choose the complete boundary statement<select id={`ur20-${form.form}`} defaultValue="" onChange={(event) => onFieldChange(form.form, event.target.value)}><option value="" disabled>Select one explanation</option>{form.options.map((value) => <option key={value} value={value}>{label(value)}</option>)}</select></label>
      <Action action={action} onAction={onAction} />
    </fieldset>
  );
}

function Reconciliation({ onAction, onFieldChange }) {
  const [methods, setMethods] = useState([]);
  const toggle = (id) => {
    const next = methods.includes(id) ? methods.filter((item) => item !== id) : [...methods, id];
    setMethods(next); onFieldChange("methods", next);
  };
  const limits = Object.fromEntries(unborrowedReachLimitIds.map((id) => [id, null]));
  return (
    <section className="unborrowed-reconciliation" aria-labelledby="ur30-reconciliation-heading">
      <h3 id="ur30-reconciliation-heading">Method transfer without conclusion transfer</h3>
      <fieldset><legend>Select every defensible method</legend>{unborrowedReachReconciliationMethodIds.map((id) => <label key={id}><input type="checkbox" checked={methods.includes(id)} onChange={() => toggle(id)} />{label(id)}</label>)}</fieldset>
      <dl>{unborrowedReachLimitIds.map((id) => <div key={id}><dt>{label(id)}</dt><dd>Unknown / null</dd></div>)}</dl>
      <Action action={unborrowedReachActions.checkReconciliation} onAction={onAction} onBeforeAction={() => onFieldChange("limits", limits)} />
    </section>
  );
}

export function UnborrowedReach({ state, onAction, onFieldChange }) {
  const rootRef = useRef(null);
  useLayoutEffect(() => { const target = state.focusIntent?.target ?? state.headingId; rootRef.current?.querySelector(`#${CSS.escape(target)}`)?.focus?.({ preventScroll: true }); }, [state.activeGroup, state.focusIntent?.target, state.statusMessageId]);
  const group = state.activeGroup;
  const route = group === UNBORROWED_REACH_ROUTE_GROUP;
  const actionFocus = Object.values(fixedActionIds).includes(state.headingId) || state.headingId.includes("-return-");
  const headingDomId = actionFocus ? `${state.headingId}-heading` : state.headingId;
  const learningAction = state.form && state.availableActions.find((action) => !returnActions.has(action));
  const mainActions = state.availableActions.filter((action) => !returnActions.has(action));
  return (
    <main ref={rootRef} className="unborrowed-reach-shell" data-product-landmark="unborrowed-reach-product-landmark" aria-labelledby={headingDomId}>
      <div className="unborrowed-reach-scene" role="img" data-rendering-medium="css" data-runtime-image="not-selected" aria-label="Unfamiliar mineral laminae continue outward without a repeated landmark, alignment, route, destination, or response."><span /><span /><span /><span /></div>
      <section className="unborrowed-reach-panel">
        <p className="eyebrow" data-active-owner={state.owner}>{state.owner}</p>
        <h2 id={headingDomId} tabIndex="-1">{state.heading ?? "UNBORROWED REACH"}</h2>
        <p id="unborrowed-reach-status" role="status" aria-live="polite" aria-atomic="true">{state.statusMessage}</p>
        {group === "ur10_fresh_observations" && <section aria-labelledby="ur10-observation-peer-heading"><h3 id="ur10-observation-peer-heading">Six fresh equal observations</h3><div className="unborrowed-observation-grid">{unborrowedReachObservationIds.map((id, index) => <button id={observationControlIds[index]} key={id} type="button" aria-pressed={state.recordedObservationIds.includes(id)} onClick={() => onAction(observationActions[index])}><strong>{label(id)}</strong><small>{state.recordedObservationIds.includes(id) ? "Recorded · zero learning credit" : "Fresh · independent peer"}</small></button>)}</div></section>}
        <LearningForm form={state.form?.kind === "reconciliation" ? null : state.form} action={learningAction} onAction={onAction} onFieldChange={onFieldChange} />
        {group === "ur30_reconciliation" && <Reconciliation onAction={onAction} onFieldChange={onFieldChange} />}
        {group === "ur30_scope_reopen" && <p>Reopen each retained scope individually. Reopening grants no learning credit and changes no record.</p>}
        {group === "ur30_restore" && <section><h3>Five separately attributable records restored</h3><p>No prior event replayed. No readiness verdict, authority, route, world response, or successor exists.</p></section>}
        {group.includes("recovery") && <p>Only named failed public checks remain. Private work is clear; retry starts blank and contains no answer.</p>}
        {group.includes("rollback") && <p role="alert">Record-byte equality could not be verified. Progression remains held.</p>}
        {mainActions.length > 0 && !route && group !== "ur10_fresh_observations" && !state.form && group !== "ur30_reconciliation" && <div className="unborrowed-actions">{mainActions.map((action) => <Action key={action} group={group} action={action} onAction={onAction} />)}</div>}
        {!route && <nav className="unborrowed-returns" aria-label="Exact safe returns">{state.availableActions.filter((action) => returnActions.has(action)).map((action) => <Action key={action} group={group} action={action} onAction={onAction} />)}</nav>}
        {route && <div className="unborrowed-actions">{state.availableActions.map((action) => <Action key={action} group={group} action={action} onAction={onAction} />)}</div>}
      </section>
    </main>
  );
}
