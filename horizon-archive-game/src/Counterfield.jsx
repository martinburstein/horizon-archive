import { useEffect, useLayoutEffect, useRef } from "react";
import { COUNTERFIELD_ROUTE_ACTION, COUNTERFIELD_ROUTE_GROUP, counterfieldActions, counterfieldObservationIds } from "./CounterfieldNormal.js";

const observationLabels = Object.freeze({
  recurrent_adjacency: "Recurrent adjacency", incomplete_ordered_change: "Incomplete ordered change",
  cross_scale_correspondence: "Cross-scale correspondence", ordinary_unmatched_feature: "Ordinary unmatched feature",
  multi_candidate_relation: "Multi-candidate relation", unavailable_margin: "Unavailable margin",
  layered_stewardship: "Layered stewardship",
});
const observationActions = Object.values(counterfieldActions).slice(2, 9);

function Scene({ detail = false }) {
  return (
    <div className={`counterfield-scene ${detail ? "counterfield-scene-detail" : ""}`} role="img"
      data-scene-role={detail ? "SC-11-COUNTERFIELD-CONTINUOUS-LANDSCAPE-DETAIL" : "SC-11-COUNTERFIELD-PANORAMA"}
      data-runtime-image="structural-placeholder"
      aria-label={detail
        ? "A continuous-landscape structural inspection placeholder preserves local material context and sealed replica-only coupling without implying a diagram, pairing, rank, access affordance, or live-field connection."
        : "A structural orientation placeholder shows physically separate near, middle, and horizon works with distinct local rhythms; no common connector, clock, route, purpose, or later destination is shown."}>
      <span className="counterfield-horizon" aria-hidden="true" />
      <span className="counterfield-near" aria-hidden="true" />
      <span className="counterfield-middle" aria-hidden="true" />
      <span className="counterfield-far" aria-hidden="true" />
      <span className="counterfield-mask" aria-hidden="true" />
    </div>
  );
}

function Action({ action, onAction, children, className = "" }) {
  return <button type="button" className={className} onClick={() => onAction(action)}>{children ?? action}</button>;
}

function Form({ form, onFieldChange, onAction, action }) {
  if (!form) return null;
  if (form.kind === "python") return (
    <fieldset className="counterfield-form"><legend>{form.form} sanitized-replica source</legend>
      <p id={`${form.form}-truthful-label`}>{form.truthfulLabel}</p>
      <label htmlFor={`cf20-${form.form}-source`}>Private Python source</label>
      <textarea id={form.form === "primary" ? "cf20-python-primary-editor" : "cf20-python-transfer-editor"} aria-describedby={`${form.form}-truthful-label`} onChange={(event) => onFieldChange("learnerSource", event.target.value)} />
      <Action action={action} onAction={onAction} />
    </fieldset>
  );
  if (form.kind === "trace") return (
    <fieldset className="counterfield-form"><legend>Closed-note ownership trace</legend>
      {form.fieldIds.map((id, index) => <label key={id} htmlFor={`cf20-trace-${id}`}>{id}<select id={index === 0 ? "cf20-python-trace-first" : `cf20-trace-${id}`} defaultValue="" onChange={(event) => onFieldChange(id, event.target.value)}><option value="" disabled>Select one boundary</option>{form.options[id].map((value) => <option key={value}>{value}</option>)}</select></label>)}
      <Action action={action} onAction={onAction} />
    </fieldset>
  );
  if (form.kind === "client") return (
    <fieldset className="counterfield-form"><legend>{form.form} neutral client-flow cases</legend>
      <p>No live Foundry, model, SDK, endpoint, credential, network, or external action occurs.</p>
      {form.cases.map((item, itemIndex) => <section key={item.id} className="counterfield-case"><h3>{item.id}</h3><p>{item.prompt}</p>{form.dimensions.map((dimension, dimensionIndex) => {
        const first = itemIndex === 0 && dimensionIndex === 0; const id = first ? `cf20-client-${form.form}-first` : `cf20-${form.form}-${item.id}-${dimension}`;
        return <label key={dimension} htmlFor={id}>{dimension}<select id={id} defaultValue="" onChange={(event) => onFieldChange(`${item.id}.${dimension}`, event.target.value)}><option value="" disabled>Select one responsibility</option>{form.options[dimension].map((value) => <option key={value}>{value}</option>)}</select></label>;
      })}</section>)}
      <Action action={action} onAction={onAction} />
    </fieldset>
  );
  return (
    <fieldset className="counterfield-form"><legend>Bounded explanation</legend>
      <label htmlFor={form.form === "clientFlowBoundary" ? "cf20-client-flow-explanation" : "cf20-truth-authority-explanation"}>Choose the complete boundary explanation<select id={form.form === "clientFlowBoundary" ? "cf20-client-flow-explanation" : "cf20-truth-authority-explanation"} defaultValue="" onChange={(event) => onFieldChange(form.form, event.target.value)}><option value="" disabled>Select one explanation</option>{form.options.map((value) => <option key={value}>{value}</option>)}</select></label>
      <Action action={action} onAction={onAction} />
    </fieldset>
  );
}

export function Counterfield({ state, onAction, onFieldChange }) {
  const rootRef = useRef(null), saveRef = useRef(null);
  useLayoutEffect(() => { rootRef.current?.querySelector(`#${CSS.escape(state.focusIntent?.target ?? state.headingId)}`)?.focus?.({ preventScroll: true }); }, [state.activeGroup, state.focusIntent?.target, state.statusMessageId]);
  useEffect(() => { if (state.activeGroup !== "cf20_save") return undefined; const node = saveRef.current; const handler = (event) => { if (event.key === "Escape") { event.preventDefault(); onAction(counterfieldActions.cancelSave); } }; node?.addEventListener("keydown", handler); return () => node?.removeEventListener("keydown", handler); }, [state.activeGroup, onAction]);
  const group = state.activeGroup;
  const isRoute = group === COUNTERFIELD_ROUTE_GROUP, isTour = group === "td010-tour";
  const isDetail = group === "cf10_observations" && ["ordinary_unmatched_feature", "multi_candidate_relation", "unavailable_margin", "layered_stewardship"].includes(state.sceneObservationId);
  const learningAction = state.availableActions.find((action) => ![counterfieldActions.returnOccludedFold, counterfieldActions.returnThreshold].includes(action));
  return (
    <main ref={rootRef} className="counterfield-shell" data-product-landmark="counterfield-product-landmark" aria-labelledby={state.headingId}>
      <Scene detail={isDetail} />
      <section className="counterfield-panel">
        <p className="eyebrow" data-active-owner={state.owner}>{state.owner}</p>
        <h2 id={state.headingId} tabIndex="-1">{state.heading ?? (isRoute ? "SURVEY COUNTERFIELD FROM THE VERIFIED OCCLUDED FOLD BOUNDARY" : "COUNTERFIELD")}</h2>
        <p id="counterfield-status" role="status" aria-live="polite" aria-atomic="true">{state.statusMessage}</p>
        {isRoute && <div className="counterfield-actions">{state.availableActions.map((action) => <Action key={action} action={action} onAction={onAction} />)}</div>}
        {group === "cf00_orientation" && <div className="counterfield-actions"><Action action={counterfieldActions.inspect} onAction={onAction} /></div>}
        {group === "cf10_observations" && <section aria-labelledby="cf10-observation-peer-heading"><h3 id="cf10-observation-peer-heading" tabIndex="-1">Seven equal observation peers</h3><div className="counterfield-observation-grid">{counterfieldObservationIds.map((id, index) => <button id={`cf-observe-${id.replaceAll("_", "-")}`} type="button" key={id} aria-pressed={state.recordedObservationIds.includes(id)} onClick={() => onAction(observationActions[index])}><span>{observationLabels[id]}</span><small>{state.recordedObservationIds.includes(id) ? "Recorded · zero learning credit" : "Unrecorded · equal peer"}</small></button>)}</div></section>}
        {state.form && <Form form={state.form} onFieldChange={onFieldChange} onAction={onAction} action={learningAction} />}
        {group === "cf20_recovery" && <section><p id="cf20-python-primary-first-failed" tabIndex="-1">First incomplete public dimension: {state.failedPublicIds?.[0] ?? "current responsibility"}</p><Action action={counterfieldActions.retry} onAction={onAction} /></section>}
        {group === "cf20_review" && <section><p>All seven observations and eight independently attributable learning records are complete.</p><table><caption>Four separately attributable scopes</caption><tbody>{state.reviewRows.map((row) => <tr key={row.id}><th scope="row">{row.scope}</th><td>{row.owner}</td><td>{row.state}</td></tr>)}</tbody></table><Action action={counterfieldActions.prepareSave} onAction={onAction} /></section>}
        {group === "cf20_save" && <div ref={saveRef} className="counterfield-save-group" role="group" aria-labelledby="cf20-save-heading"><table><caption>Four separately attributable scopes</caption><tbody>{state.reviewRows.map((row) => <tr key={row.id}><th scope="row">{row.scope}</th><td>{row.owner}</td><td>{row.state}</td></tr>)}</tbody></table><Action action={counterfieldActions.save} onAction={onAction} /><Action action={counterfieldActions.cancelSave} onAction={onAction} /></div>}
        {group === "cf20_save_recovery" && <Action action={counterfieldActions.retrySave} onAction={onAction} />}
        {group === "cf30_restore" && <section><h3>Verified bounded scope register</h3><p>Four scopes remain separate and no prior event was replayed.</p><Action action={counterfieldActions.look} onAction={onAction} /></section>}
        {!isRoute && !isTour && group !== "cf20_transaction" && <nav className="counterfield-returns" aria-label="Exact safe returns"><Action action={counterfieldActions.returnOccludedFold} onAction={onAction} /><Action action={counterfieldActions.returnThreshold} onAction={onAction} /></nav>}
      </section>
    </main>
  );
}
