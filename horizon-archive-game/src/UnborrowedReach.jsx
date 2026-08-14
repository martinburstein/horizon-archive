import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { counterfieldScopeRows } from "./CounterfieldNormal.js";
import {
  UNBORROWED_REACH_CONTROLLER_VERSION, UNBORROWED_REACH_ROUTE_GROUP,
  UNBORROWED_REACH_SHELL_VERSION, unborrowedReachActions, unborrowedReachLimitIds,
  unborrowedReachObservationIds, unborrowedReachReconciliationMethodIds,
} from "./UnborrowedReachNormal.js";
import membraneFoamSeamImage from "../../Visual Direction/Production Masters/2026-08-14-first-run-host37/host37-environment-master-v1.png";
import { MEMBRANE_FOAM_SEAM_COPY, MEMBRANE_FOAM_SEAM_REGISTRY, deriveMembraneFoamSeamState } from "./unborrowedHosts.js";

const host37Groups = new Set(["ur00_isolation", "ur10_fresh_observations", "ur20_python_primary", "ur20_python_trace", "ur20_python_transfer"]);
function useDecodedImage(enabled, src) { const [decoded, setDecoded] = useState(null); useEffect(() => { if (!enabled) { setDecoded(null); return undefined; } let connected = true; const image = new Image(); image.onload = () => connected && setDecoded({ complete: image.complete, naturalWidth: image.naturalWidth, naturalHeight: image.naturalHeight }); image.onerror = () => connected && setDecoded(null); image.src = src; return () => { connected = false; image.onload = null; image.onerror = null; }; }, [enabled, src]); return decoded; }

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
const controlSlug = (value) => String(value).replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().replaceAll("_", "-");
const observationContent = Object.freeze([
  ["One relation persists across a material change. Its source remains unseen.", unborrowedReachActions.observePersistentTransition],
  ["A similar exposed form carries a different bounded relation.", unborrowedReachActions.observeDifferingRelation],
  ["A maintained bypass crosses older material without revealing order or cause.", unborrowedReachActions.observeMaintainedBypass],
  ["One exposure supports several correspondences; none is selected by appearance.", unborrowedReachActions.observeMultipleCandidate],
  ["A comparable margin remains physically unavailable and supplies no inferred content.", unborrowedReachActions.observeUnavailableMargin],
  ["Foundation, insertion, sacrificial layer, and current repair remain distinct without dates or shared authorship.", unborrowedReachActions.observeLayeredStewardship],
]);
const learningResponsibilities = Object.freeze([
  "PY-019 primary source shape — 8/8", "PY-019 closed-note role trace — 8/8", "PY-019 fresh transfer source shape — 8/8",
  "Agent-surface primary cases — 8/8", "Agent-surface delayed retrieval — 8/8", "Agent-surface fresh transfer — 8/8",
  "Four-surface boundary explanation", "Truth and permission boundary explanation",
]);

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
      {form.fieldIds.map((id) => <label key={id} htmlFor={`ur20-python-trace-${controlSlug(id)}`}>{label(id)}<select id={`ur20-python-trace-${controlSlug(id)}`} defaultValue="" onChange={(event) => onFieldChange(id, event.target.value)}><option value="" disabled>Select one bounded statement</option>{form.options[id].map((value) => <option key={value} value={value}>{label(value)}</option>)}</select></label>)}
      <Action action={action} onAction={onAction} />
    </fieldset>
  );
  if (form.kind === "agent") return (
    <fieldset className="unborrowed-form"><legend>{label(form.form)} single-agent surface cases</legend>
      <p>Portal authoring, portal testing, client invocation, and client result handling remain distinct.</p>
      {form.cases.map((item) => <section className="unborrowed-case" key={item.id}><h3>{item.id}</h3><p>{item.prompt}</p>{form.dimensions.map((dimension) => <label key={dimension} htmlFor={`ur20-agent-${form.form}-${item.id.toLowerCase()}-${controlSlug(dimension)}`}>{label(dimension)}<select id={`ur20-agent-${form.form}-${item.id.toLowerCase()}-${controlSlug(dimension)}`} defaultValue="" onChange={(event) => onFieldChange(`${item.id}.${dimension}`, event.target.value)}><option value="" disabled>Select one surface</option>{form.options[dimension].map((value) => <option key={value} value={value}>{label(value)}</option>)}</select></label>)}</section>)}
      <Action action={action} onAction={onAction} />
    </fieldset>
  );
  return (
    <fieldset className="unborrowed-form"><legend>Bounded explanation</legend>
      <label htmlFor={form.form === "surfaceBoundary" ? "ur20-surface-explanation" : "ur20-truth-permission-explanation"}>Choose the complete boundary statement<select id={form.form === "surfaceBoundary" ? "ur20-surface-explanation" : "ur20-truth-permission-explanation"} defaultValue="" onChange={(event) => onFieldChange(form.form, event.target.value)}><option value="" disabled>Select one explanation</option>{form.options.map((value) => <option key={value} value={value}>{label(value)}</option>)}</select></label>
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
      <fieldset><legend>Select every defensible method</legend>{unborrowedReachReconciliationMethodIds.map((id) => <label key={id}><input id={`ur30-method-${controlSlug(id)}`} type="checkbox" checked={methods.includes(id)} onChange={() => toggle(id)} />{label(id)}</label>)}</fieldset>
      <dl>{unborrowedReachLimitIds.map((id) => <div key={id}><dt>{label(id)}</dt><dd>Unknown / null</dd></div>)}</dl>
      <Action action={unborrowedReachActions.checkReconciliation} onAction={onAction} onBeforeAction={() => onFieldChange("limits", limits)} />
    </section>
  );
}

function CustodyTable({ rows = counterfieldScopeRows, includeFresh = false, includeReconciliation = false }) {
  return <table className="unborrowed-custody"><caption>Separately attributable record custody</caption><tbody>
    {rows.map((row) => <tr key={row.scope}><th scope="row">{row.scope}</th><td><strong>{row.owner}</strong><span>{row.longestCopy ?? row.description}</span></td><td>{row.state}</td></tr>)}
    {includeFresh && <tr><th scope="row">RP-011</th><td><strong>Fresh Unborrowed Reach bounded integration record</strong><span>Six equal observations and eight independent learning responsibilities remain provenance-bound; identity, chronology, cause, purpose, readiness, authority, and successor remain unassigned.</span></td><td>Current // separately attributable</td></tr>}
    {includeReconciliation && <tr><th scope="row">Separate reconciliation</th><td><strong>Method-and-limit reconciliation</strong><span>Defensible methods remain separate from conclusions; all twelve unsupported limits remain unknown / null.</span></td><td>Complete // not merged</td></tr>}
  </tbody></table>;
}

function SaveConfirmation({ group, actions, onAction }) {
  const dialogRef = useRef(null);
  const fresh = group === "ur20_fresh_confirm";
  const saveAction = fresh ? unborrowedReachActions.finalizeFresh : unborrowedReachActions.saveReconciliation;
  const cancelAction = fresh ? unborrowedReachActions.cancelFresh : unborrowedReachActions.cancelReconciliation;
  useLayoutEffect(() => { if (dialogRef.current && !dialogRef.current.open) dialogRef.current.showModal?.(); }, []);
  return <dialog ref={dialogRef} className="unborrowed-save-dialog" onCancel={(event) => { event.preventDefault(); onAction(cancelAction); }}>
    <h3>{fresh ? "Finalize the fresh record" : "Save the separate reconciliation"}</h3>
    <p>{fresh ? "Write one atomic private-free checkpoint while four prior scopes remain hidden and retained." : "Write one atomic checkpoint while all five records and the reconciliation remain separate."}</p>
    <div className="unborrowed-actions">{actions.filter((action) => action === saveAction || action === cancelAction).map((action) => <Action key={action} group={group} action={action} onAction={onAction} />)}</div>
  </dialog>;
}

export function UnborrowedReach({ state, onAction, onFieldChange }) {
  const rootRef = useRef(null);
  const host37DecodedImage = useDecodedImage(MEMBRANE_FOAM_SEAM_REGISTRY.source.enabled, membraneFoamSeamImage);
  useLayoutEffect(() => { const target = state.focusIntent?.target ?? state.headingId; rootRef.current?.querySelector(`#${CSS.escape(target)}`)?.focus?.({ preventScroll: true }); }, [state.activeGroup, state.focusIntent?.target, state.statusMessageId]);
  const group = state.activeGroup;
  const host37State = deriveMembraneFoamSeamState({ decodedImage: host37DecodedImage });
  const host37NativeActive = host37State !== "hidden" && host37Groups.has(group);
  const route = group === UNBORROWED_REACH_ROUTE_GROUP;
  const confirmation = group === "ur20_fresh_confirm" || group === "ur30_final_confirm";
  const controlFocus = !state.headingId.endsWith("-heading");
  const headingDomId = controlFocus ? `${state.headingId}-heading` : state.headingId;
  const learningAction = state.form && state.availableActions.find((action) => !returnActions.has(action));
  const mainActions = state.availableActions.filter((action) => !returnActions.has(action));
  return (
    <main ref={rootRef} className="unborrowed-reach-shell" data-product-landmark="unborrowed-reach-product-landmark" data-shell-version={state.shellVersion ?? UNBORROWED_REACH_SHELL_VERSION} data-controller-version={state.controllerVersion ?? UNBORROWED_REACH_CONTROLLER_VERSION} data-active-group={group} data-owner={state.owner} data-phase={state.phase} data-fixture-contract-version="td011.fixture-manifest.v1" aria-labelledby={headingDomId}>
      <div className="unborrowed-reach-scene" role={host37NativeActive ? undefined : "img"} data-rendering-medium={host37NativeActive ? "production-master" : "css"} data-runtime-image={host37NativeActive ? "host37-environment-master-v1.png" : "not-selected"} data-membrane-foam-seam-state={host37State} data-membrane-foam-seam-native-active={host37NativeActive ? "true" : undefined} aria-label={host37NativeActive ? undefined : "Unfamiliar mineral laminae continue outward without a repeated landmark, alignment, route, destination, or response."}>{host37NativeActive ? <img className="unborrowed-native-scene" src={membraneFoamSeamImage} alt={MEMBRANE_FOAM_SEAM_COPY.alt} data-membrane-foam-seam-source={MEMBRANE_FOAM_SEAM_REGISTRY.source.path} /> : <><span /><span /><span /><span /></>}</div>
      <section className="unborrowed-reach-panel">
        <p className="eyebrow" data-active-owner={state.owner}>{state.owner}</p>
        <h2 id={headingDomId} tabIndex="-1">{state.heading ?? "UNBORROWED REACH"}</h2>
        <p id="unborrowed-reach-status" role="status" aria-live="polite" aria-atomic="true">{state.statusMessage}</p>
        {group === "ur10_fresh_observations" && <section aria-labelledby="ur10-observation-peer-heading"><h3 id="ur10-observation-peer-heading">Six fresh equal observations</h3><div className="unborrowed-observation-grid">{unborrowedReachObservationIds.map((id, index) => <article className="unborrowed-observation-card" key={id}><p>{observationContent[index][0]}</p><button id={observationControlIds[index]} type="button" aria-pressed={state.recordedObservationIds.includes(id)} onClick={() => onAction(observationActions[index])}><strong>{observationContent[index][1]}</strong><small>{state.recordedObservationIds.includes(id) ? "Recorded · zero learning credit" : "Fresh · independent peer"}</small></button></article>)}</div></section>}
        <LearningForm form={state.form?.kind === "reconciliation" ? null : state.form} action={learningAction} onAction={onAction} onFieldChange={onFieldChange} />
        {group === "ur30_reconciliation" && <Reconciliation onAction={onAction} onFieldChange={onFieldChange} />}
        {group === "ur20_fresh_review" && <section><h3>Independent completion responsibilities</h3><ul className="unborrowed-responsibilities">{learningResponsibilities.map((item, index) => <li id={index === state.evidenceCount ? "ur20-first-incomplete" : undefined} tabIndex={index === state.evidenceCount ? -1 : undefined} key={item}>{item}<span>{index < state.evidenceCount ? "Complete" : "Incomplete"}</span></li>)}</ul><p>{state.recordedObservationIds.length}/6 fresh observations recorded. Four complete prior scopes remain hidden and retained.</p></section>}
        {group === "ur30_scope_reopen" && <section><p>Reopen each retained scope individually. Reopening grants no learning credit and changes no record.</p>{state.activeReopenedScope && <CustodyTable rows={counterfieldScopeRows.filter((row) => row.scope === state.activeReopenedScope)} />}<ul className="unborrowed-custody-list">{counterfieldScopeRows.map((row) => <li key={row.scope}><strong>{row.scope}</strong><span>{state.reopenedScopes.includes(row.scope) ? "Reopened · complete · read-only" : "Hidden · retained · read-only"}</span></li>)}</ul></section>}
        {group === "ur30_final_review" && <CustodyTable includeFresh includeReconciliation />}
        {group === "ur30_restore" && <section><h3>Five separately attributable records restored</h3><p>No prior event replayed. No readiness verdict, authority, route, world response, or successor exists.</p></section>}
        {group.includes("recovery") && <section aria-labelledby="unborrowed-recovery-details"><h3 id="unborrowed-recovery-details">Public recovery boundary</h3><p>Only named failed public checks remain. Private work is clear; retry starts blank and contains no answer.</p>{state.failedPublicIds.length > 0 && <><h4>Failed public checks</h4><ul>{state.failedPublicIds.map((id) => <li key={id}>{label(id)}</li>)}</ul></>}{state.failedMisconceptionTags.length > 0 && <><h4>Scored misconception tags</h4><ul>{state.failedMisconceptionTags.map((id) => <li key={id}>{label(id)}</li>)}</ul></>}</section>}
        {group.includes("rollback") && <p role="alert">Record-byte equality could not be verified. Progression remains held.</p>}
        {confirmation && <SaveConfirmation group={group} actions={mainActions} onAction={onAction} />}
        {mainActions.length > 0 && !route && group !== "ur10_fresh_observations" && !state.form && group !== "ur30_reconciliation" && group !== "ur20_fresh_confirm" && group !== "ur30_final_confirm" && <div className="unborrowed-actions">{mainActions.map((action) => <Action key={action} group={group} action={action} onAction={onAction} />)}</div>}
        {!route && !confirmation && <nav className="unborrowed-returns" aria-label="Exact safe returns">{state.availableActions.filter((action) => returnActions.has(action)).map((action) => <Action key={action} group={group} action={action} onAction={onAction} />)}</nav>}
        {route && <div className="unborrowed-actions">{state.availableActions.map((action) => <Action key={action} group={group} action={action} onAction={onAction} />)}</div>}
      </section>
    </main>
  );
}
