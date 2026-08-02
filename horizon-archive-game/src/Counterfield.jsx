import { useEffect, useLayoutEffect, useRef } from "react";
import { COUNTERFIELD_ROUTE_ACTION, COUNTERFIELD_ROUTE_GROUP, counterfieldActions, counterfieldObservationIds } from "./CounterfieldNormal.js";

const observationLabels = Object.freeze({
  recurrent_adjacency: "Recurrent adjacency", incomplete_ordered_change: "Incomplete ordered change",
  cross_scale_correspondence: "Cross-scale correspondence", ordinary_unmatched_feature: "Ordinary unmatched feature",
  multi_candidate_relation: "Multi-candidate relation", unavailable_margin: "Unavailable margin",
  layered_stewardship: "Layered stewardship",
});
const observationDescriptions = Object.freeze({
  recurrent_adjacency: ["Variable-thickness vanes recur beside porous collars with natural local variation.", "Adjacency does not establish shared enclosure, identity, source, function, or purpose."],
  incomplete_ordered_change: ["Overlapping skins, deposition, repairs, and opaque intervals support a bounded physical order.", "The available surfaces do not establish complete chronology, duration, authorship, or cause."],
  cross_scale_correspondence: ["A bounded edge stack and inclusion family recur at another scale with natural variation.", "Correspondence does not establish a connector, common clock, identity, topology, continuity, or synchronization."],
  ordinary_unmatched_feature: ["One maintained ordinary casing has no counterpart in the available comparison scopes.", "Unmatched does not mean damaged, failed, anomalous, created, destroyed, severed, replaced, or transformed."],
  multi_candidate_relation: ["One ordinary surface carries two bounded feature families without favoring either candidate.", "Multiple candidates do not establish pairing, rank, branching, merging, copying, exchange, or flow."],
  unavailable_margin: ["A complete high-mass margin and accretion expose no comparable surface or interior evidence.", "Unavailability does not imply contents, a lock, invitation, reward, denial, access, task, or route."],
  layered_stewardship: ["Foundation sockets, inserted collars, sacrificial skins, sealed paths, detours, and current repair remain legible.", "Visible stewardship does not establish one era, institution, occupation, hierarchy, owner, cause, or purpose."],
});
const actionLabels = Object.freeze({
  [counterfieldActions.inspect]: "BEGIN SEVEN-PEER COUNTERFIELD SURVEY",
  [counterfieldActions.multiCandidateRelation]: "RECORD MULTIPLE UNRANKED CANDIDATES",
  [counterfieldActions.pythonPrimary]: "VALIDATE PRIMARY REQUEST/RESPONSE SOURCE",
  [counterfieldActions.pythonTrace]: "SUBMIT CLOSED-NOTE OWNERSHIP TRACE",
  [counterfieldActions.pythonTransfer]: "VALIDATE FRESH TRANSFER SOURCE",
  [counterfieldActions.clientPrimary]: "SUBMIT CLIENT-FLOW PRIMARY",
  [counterfieldActions.clientRetrieval]: "SUBMIT CLOSED-NOTE CLIENT-FLOW RETRIEVAL",
  [counterfieldActions.clientTransfer]: "SUBMIT FRESH CLIENT-FLOW TRANSFER",
  [counterfieldActions.clientFlowBoundary]: "SUBMIT DISTINCT CLIENT-FLOW RESPONSIBILITIES EXPLANATION",
  [counterfieldActions.truthAuthorityBoundary]: "SUBMIT TRUTH AND LIVE-AUTHORITY LIMIT EXPLANATION",
  [counterfieldActions.retry]: "RETRY WITH A GENUINELY BLANK FORM",
  [counterfieldActions.prepareSave]: "PREPARE PRIVATE-FREE LOCAL SAVE",
  [counterfieldActions.save]: "SAVE BOUNDED COUNTERFIELD SCOPE REGISTER",
  [counterfieldActions.cancelSave]: "CANCEL LOCAL SAVE",
  [counterfieldActions.retrySave]: "RETRY PRIVATE-FREE LOCAL SAVE",
});
const observationActions = Object.values(counterfieldActions).slice(2, 9);

const sceneAlternatives = Object.freeze({
  cf00_orientation: "Physically separate near, middle, and horizon works keep distinct local rhythms across an immense mineral field; no common connector, clock, route, purpose, or response is shown.",
  recurrent_adjacency: "Repeated variable-thickness vanes and porous collars remain locally adjacent with natural variation and no shared enclosure, identity, source, function, or purpose.",
  incomplete_ordered_change: "Overlapping skins, deposition, repairs, and opaque missing intervals support bounded order without complete chronology, duration, authorship, or cause.",
  cross_scale_correspondence: "A bounded edge stack and inclusion family recur at another scale with natural variation but no connector, common clock, identity, topology, continuity, or synchronization.",
  ordinary_unmatched_feature: "One maintained ordinary casing has no counterpart in the available scopes and is not damaged, failed, anomalous, created, destroyed, severed, replaced, or transformed.",
  multi_candidate_relation: "One ordinary surface carries two bounded feature families without favored candidate, pairing, rank, branching, merging, copying, exchange, or flow.",
  unavailable_margin: "A complete high-mass margin and accretion expose no comparable surface, interior, contents, lock, invitation, reward, denial, access, task, or route.",
  layered_stewardship: "Foundation sockets, inserted collars, sacrificial skins, sealed paths, detours, and current repair remain legible without one era, institution, occupation, hierarchy, owner, cause, or purpose.",
  cf10_observations: "Seven equal physical evidence classes remain separate: recurrent adjacency, incomplete order, cross-scale correspondence, an ordinary unmatched feature, several plausible candidates, an unavailable margin, and layered stewardship.",
  cf20_course: "The field remains unchanged while private course work, four bounded scopes, and local save controls appear only in a separate expedition interface.",
  cf30_restore: "Four separately attributable expedition scopes restore without replay while every district, unavailable margin, material state, and independent local rhythm remains unchanged; no onward route is shown.",
});

function Scene({ detail = false, group, observationId }) {
  const alternativeKey = observationId ?? (group.startsWith("cf20_") ? "cf20_course" : group);
  return (
    <div className={`counterfield-scene ${detail ? "counterfield-scene-detail" : ""}`} role="img"
      data-scene-role={detail ? "SC-11-COUNTERFIELD-CONTINUOUS-LANDSCAPE-DETAIL" : "SC-11-COUNTERFIELD-PANORAMA"}
      data-rendering-medium="css"
      data-runtime-image="not-selected"
      data-asset-role-disposition="retired-no-runtime-image"
      aria-label={sceneAlternatives[alternativeKey] ?? sceneAlternatives.cf10_observations}>
      <span className="counterfield-horizon" aria-hidden="true" />
      <span className="counterfield-near" aria-hidden="true" />
      <span className="counterfield-middle" aria-hidden="true" />
      <span className="counterfield-far" aria-hidden="true" />
      <span className="counterfield-mask" aria-hidden="true" />
    </div>
  );
}

function Action({ action, onAction, children, className = "" }) {
  return <button type="button" className={className} onClick={() => onAction(action)}>{children ?? actionLabels[action] ?? action}</button>;
}

const displayToken = (value) => String(value).replaceAll("_", " ");

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
      {form.fieldIds.map((id, index) => <label key={id} htmlFor={`cf20-trace-${id}`}>{displayToken(id)}<select id={index === 0 ? "cf20-python-trace-first" : `cf20-trace-${id}`} defaultValue="" onChange={(event) => onFieldChange(id, event.target.value)}><option value="" disabled>Select one boundary</option>{form.options[id].map((value) => <option key={value} value={value}>{displayToken(value)}</option>)}</select></label>)}
      <Action action={action} onAction={onAction} />
    </fieldset>
  );
  if (form.kind === "client") return (
    <fieldset className="counterfield-form"><legend>{form.form} neutral client-flow cases</legend>
      <p>No live Foundry, model, SDK, endpoint, credential, network, or external action occurs.</p>
      {form.cases.map((item, itemIndex) => <section key={item.id} className="counterfield-case"><h3>{item.id}</h3><p>{item.prompt}</p>{form.dimensions.map((dimension, dimensionIndex) => {
        const first = itemIndex === 0 && dimensionIndex === 0; const id = first ? `cf20-client-${form.form}-first` : `cf20-${form.form}-${item.id}-${dimension}`;
        return <label key={dimension} htmlFor={id}>{displayToken(dimension)}<select id={id} defaultValue="" onChange={(event) => onFieldChange(`${item.id}.${dimension}`, event.target.value)}><option value="" disabled>Select one responsibility</option>{form.options[dimension].map((value) => <option key={value} value={value}>{displayToken(value)}</option>)}</select></label>;
      })}</section>)}
      <Action action={action} onAction={onAction} />
    </fieldset>
  );
  return (
    <fieldset className="counterfield-form"><legend>Bounded explanation</legend>
      <label htmlFor={form.form === "clientFlowBoundary" ? "cf20-client-flow-explanation" : "cf20-truth-authority-explanation"}>Choose the complete boundary explanation<select id={form.form === "clientFlowBoundary" ? "cf20-client-flow-explanation" : "cf20-truth-authority-explanation"} defaultValue="" onChange={(event) => onFieldChange(form.form, event.target.value)}><option value="" disabled>Select one explanation</option>{form.options.map((value) => <option key={value} value={value}>{displayToken(value)}</option>)}</select></label>
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
  const isDetail = group === "cf10_observations" && ["incomplete_ordered_change", "multi_candidate_relation"].includes(state.sceneObservationId);
  const learningAction = state.availableActions.find((action) => ![counterfieldActions.returnOccludedFold, counterfieldActions.returnThreshold].includes(action));
  return (
    <main ref={rootRef} className="counterfield-shell" data-product-landmark="counterfield-product-landmark" aria-labelledby={state.headingId}>
      <Scene detail={isDetail} group={group} observationId={state.sceneObservationId} />
      <section className="counterfield-panel">
        <p className="eyebrow" data-active-owner={state.owner}>{state.owner}</p>
        <h2 id={state.headingId} tabIndex="-1">{state.heading ?? (isRoute ? "SURVEY COUNTERFIELD FROM THE VERIFIED OCCLUDED FOLD BOUNDARY" : "COUNTERFIELD")}</h2>
        <p id="counterfield-status" role="status" aria-live="polite" aria-atomic="true">{state.statusMessage}</p>
        {isRoute && <div className="counterfield-actions">{state.availableActions.map((action) => <Action key={action} action={action} onAction={onAction} />)}</div>}
        {group === "cf00_orientation" && <div className="counterfield-actions"><Action action={counterfieldActions.inspect} onAction={onAction} /></div>}
        {group === "cf10_observations" && <section aria-labelledby="cf10-observation-peer-heading"><h3 id="cf10-observation-peer-heading" tabIndex="-1">Seven equal observation peers</h3><p>Record each physical fact independently. No peer supplies a course answer, route, rank, or world effect.</p><div className="counterfield-observation-grid">{counterfieldObservationIds.map((id, index) => { const descriptionId = `cf-observe-${id.replaceAll("_", "-")}-description`; return <article className="counterfield-observation-card" key={id}><button id={`cf-observe-${id.replaceAll("_", "-")}`} type="button" aria-describedby={descriptionId} aria-pressed={state.recordedObservationIds.includes(id)} onClick={() => onAction(observationActions[index])}><span>{observationLabels[id]}</span><small>{state.recordedObservationIds.includes(id) ? "Recorded · zero learning credit" : "Unrecorded · equal peer"}</small></button><p id={descriptionId}><span>{observationDescriptions[id][0]}</span><span>{observationDescriptions[id][1]}</span></p></article>; })}</div></section>}
        {state.form && <Form form={state.form} onFieldChange={onFieldChange} onAction={onAction} action={learningAction} />}
        {group === "cf20_recovery" && <section><p id="cf20-python-primary-first-failed" tabIndex="-1">First incomplete public dimension: {state.failedPublicIds?.[0] ?? "current responsibility"}</p><Action action={counterfieldActions.retry} onAction={onAction} /></section>}
        {group === "cf20_review" && <section><p>All seven observations and eight independently attributable learning records are complete.</p><table><caption>Four separately attributable scopes</caption><tbody>{state.reviewRows.map((row) => <tr key={row.id}><th scope="row">{row.scope}</th><td><strong>{row.owner}</strong><span className="counterfield-scope-description">{row.description}</span></td><td>{row.state}</td></tr>)}</tbody></table><Action action={counterfieldActions.prepareSave} onAction={onAction} /></section>}
        {group === "cf20_save" && <div ref={saveRef} className="counterfield-save-group" role="group" aria-labelledby="cf20-save-heading"><table><caption>Four separately attributable scopes</caption><tbody>{state.reviewRows.map((row) => <tr key={row.id}><th scope="row">{row.scope}</th><td><strong>{row.owner}</strong><span className="counterfield-scope-description">{row.description}</span></td><td>{row.state}</td></tr>)}</tbody></table><Action action={counterfieldActions.save} onAction={onAction} /><Action action={counterfieldActions.cancelSave} onAction={onAction} /></div>}
        {group === "cf20_save_recovery" && <Action action={counterfieldActions.retrySave} onAction={onAction} />}
        {group === "cf30_restore" && <section><h3>Verified bounded scope register</h3><p>Four scopes remain separate and no prior event was replayed.</p><Action action={counterfieldActions.look} onAction={onAction} /></section>}
        {!isRoute && !isTour && group !== "cf20_transaction" && <nav className="counterfield-returns" aria-label="Exact safe returns"><Action action={counterfieldActions.returnOccludedFold} onAction={onAction} /><Action action={counterfieldActions.returnThreshold} onAction={onAction} /></nav>}
      </section>
    </main>
  );
}
