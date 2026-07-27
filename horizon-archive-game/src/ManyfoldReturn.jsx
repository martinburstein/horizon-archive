import { useLayoutEffect, useMemo, useRef, useState } from "react";
import panoramaPlaceholder from "../../Visual Direction/Production Masters/2026-07-26-rp004-three-current-runtime-master/sc05-three-current-panorama-runtime-master-v1.webp";
import detailPlaceholder from "../../Visual Direction/Production Masters/2026-07-15-photorealistic-demo/city-threshold-access-master.png";
import { CanonicalGameFrame } from "./CanonicalGameFrame.jsx";
import {
  manyfoldReturnActions,
  manyfoldReturnObservationIds,
  resolveManyfoldReturnWorldScene,
} from "./ManyfoldReturnNormal.js";

const headingCopy = Object.freeze({
  mf00_arrive: "Arrive without assigning meaning",
  mf00_oriented: "Orient to four equal physical relations",
  mf10_observations: "Inspect one distribution without verdict",
  mf20_python_primary: "Build one bounded summary function",
  mf20_python_trace: "Trace the function responsibilities",
  mf20_python_transfer: "Transfer the function to fresh replicas",
  mf20_text_primary: "Identify requested text techniques",
  mf20_text_retrieval: "Retrieve three technique boundaries",
  mf20_text_transfer: "Transfer technique recognition",
  mf20_requested_output: "Separate requested output from input alone",
  mf20_truth_boundary: "Keep summarization separate from truth",
  mf20_repair: "Review one incomplete boundary",
  mf20_review: "Keep five responsibilities independent",
  mf20_provenance: "Confirm source and authority limits",
  mf20_transaction: "Verify one atomic local replacement",
  mf20_save_recovery: "The prior note remains verified",
  mf20_rollback_unverified: "Local rollback cannot be verified",
  mf30_restore: "Restore the exact bounded note",
  mf30_restore_recorded: "Restore with serviced continuation noted",
});
const introductionCopy = Object.freeze({
  mf00_arrive:
    "An exposed field receives one divided carrier across recurring traces, one bounded divergence, an opaque bypassed branch, and layered repairs. Arrival records nothing.",
  mf00_oriented:
    "The four relations remain equal peers. Recurrence is description, divergence is supported difference, the sealed branch is unavailable, and stewardship is visible material continuity only.",
  mf10_observations:
    "Record each physical relation deliberately in any order. Crop, color, frequency, motion, sound, timing, focus, and position grant no observation.",
  mf20_python_primary:
    "Use only the supplied sanitized precomputed replica values. The local function reads no live field and controls nothing.",
  mf20_python_trace:
    "Reconstruct six responsibilities from memory. Every choice starts blank and remains separate from the world.",
  mf20_python_transfer:
    "A different sanitized replica summary is supplied. The editor is genuinely blank and carries no primary source.",
  mf20_text_primary:
    "Choose the text technique and its deciding requested-output signal for each neutral course case.",
  mf20_text_retrieval:
    "A smaller neutral closed-note set checks three boundaries. Scenery and trace frequency contain no answer.",
  mf20_text_transfer:
    "Apply the same course distinctions to four fresh cases. The world remains an invariant backdrop.",
  mf20_requested_output:
    "Identify which property selects the requested technique. Do not infer from scenery, frequency, or field form.",
  mf20_truth_boundary:
    "Keep a shorter account separate from truth, quality, value, purpose, or approval.",
  mf20_repair:
    "Only the listed public checks remain incomplete. Prior private work was cleared, and no answer appears here.",
  mf20_review:
    "Each responsibility below must be finalized by its owner; none is a score, grade, rank, or expedition-wide verdict.",
  mf20_provenance:
    "The note contains only finalized evidence from sanitized replicas and neutral course cases. There was no live read, rank, correction, control, or external action.",
  mf20_transaction:
    "The action group is unavailable while raw bytes, strict object equality, rollback, and predecessor stability are checked.",
  mf20_save_recovery:
    "The failed candidate did not replace the verified prior note or verified absence. A new attempt begins only after provenance review.",
  mf20_rollback_unverified:
    "Progression is held. This interface does not claim that local or predecessor bytes were preserved.",
  mf30_restore:
    "The exact ten-key note and eight independent evidence identities passed strict read-back. Integrity is not truth, authority, access, reward, or world response.",
  mf30_restore_recorded:
    "The local note includes serviced continuation with destination still null. No route or successor was opened.",
});
const observationCopy = Object.freeze({
  recurring_exposed_trace_range: "Recurring exposed trace range — repeated interfaces are described without normality or preference.",
  bounded_divergent_trace: "Bounded divergent trace — one supported difference is described without failure, defect, or value.",
  sealed_branch_unavailable: "Sealed branch boundary — opaque and bypassed; contents, cause, and access remain unavailable.",
  layered_stewardship_visible: "Layered stewardship — compatible material eras remain visible without owner, doctrine, or authority.",
});
const fieldCopy = Object.freeze({
  functionName: "Function name",
  parameters: "Two parameters",
  body: "Function body responsibility",
  returnValue: "Returned value",
  callSite: "Call site",
  noneBoundary: "None boundary",
  technique: "Requested text technique",
  deciding_signal: "Deciding requested-output signal",
  requestedOutput: "Requested-output boundary",
  truthBoundary: "Truth and quality boundary",
});
const optionCopy = Object.freeze({
  keyword_extraction: "Keyword extraction",
  entity_detection: "Entity detection",
  sentiment_analysis: "Sentiment analysis",
  summarization: "Summarization",
  return_salient_words_or_phrases: "Return salient words or phrases",
  identify_named_people_places_organizations_or_other_entities: "Identify named people, places, organizations, or other entities",
  classify_expressed_opinion_or_emotional_tone: "Classify expressed opinion or emotional tone",
  condense_source_content_while_preserving_main_points: "Condense source content while preserving its main points",
  surface_representative_phrases_not_named_entities: "Surface representative phrases rather than named entities",
  locate_named_organizations_not_opinion: "Locate named organizations rather than opinion",
  produce_a_shorter_account_not_a_sentiment_label: "Produce a shorter account rather than a sentiment label",
  return_compact_topic_phrases_from_notes: "Return compact topic phrases from notes",
  identify_named_locations_and_products: "Identify named locations and products",
  classify_customer_opinion_as_positive_negative_or_neutral: "Classify customer opinion as positive, negative, or neutral",
  create_a_brief_account_of_the_source_text: "Create a brief account of the source text",
  build_summary: "build_summary",
  replica_summary_and_sealed_reading: "replica_summary and sealed_reading",
  construct_the_four_key_dictionary_from_parameters: "Construct the four-key dictionary from parameters",
  return_the_nonjudgmental_summary_dictionary: "Return the nonjudgmental summary dictionary",
  call_once_with_the_supplied_inputs: "Call once with the supplied inputs",
  sealed_and_judgment_remain_none: "sealed and judgment remain None",
  the_requested_output_selects_the_text_analysis_technique: "The requested output selects the text analysis technique",
  summarization_does_not_establish_truth_or_quality: "Summarization does not establish truth or quality",
});

const failedBoundaryCopy = Object.freeze({
  summary_is_dictionary: "Return one dictionary.",
  exact_keys_and_values: "Preserve the four required fields and their supplied values.",
  function_named_build_summary: "Name the function build_summary.",
  exact_two_parameters: "Use the two supplied parameters.",
  return_uses_parameters_without_inference: "Build the returned fields from the supplied parameters without inference.",
  function_called_once_with_supplied_inputs: "Call the function once with the supplied inputs.",
  sealed_and_judgment_remain_none: "Keep sealed and judgment as None.",
  inputs_unchanged_and_no_forbidden_operations: "Leave the supplied inputs unchanged and use no live or forbidden operation.",
  functionName: "Review the function name.",
  parameters: "Review the two parameter names.",
  body: "Review how the four-key dictionary is constructed.",
  returnValue: "Review the returned nonjudgmental dictionary.",
  callSite: "Review the single call with supplied inputs.",
  noneBoundary: "Review the None boundary for sealed and judgment.",
  requested_output: "Review which part of a request selects the text-analysis technique.",
  truth_boundary: "Review what summarization cannot establish about truth or quality.",
});
const actionIds = Object.freeze({
  [manyfoldReturnActions.orient]: "mf00-orient-action",
  [manyfoldReturnActions.inspect]: "mf00-inspect-action",
  [manyfoldReturnActions.recurrence]: "observation-recurrence-action",
  [manyfoldReturnActions.divergence]: "observation-divergence-action",
  [manyfoldReturnActions.sealed]: "observation-sealed-action",
  [manyfoldReturnActions.stewardship]: "observation-stewardship-action",
  [manyfoldReturnActions.retry]: "mf20-retry-action",
  [manyfoldReturnActions.review]: "mf20-provenance-action",
  [manyfoldReturnActions.save]: "mf20-save-action",
  [manyfoldReturnActions.reviewAgain]: "mf20-provenance-action",
  [manyfoldReturnActions.continuation]: "mf30-continuation-action",
  [manyfoldReturnActions.returnThreeCurrent]: "return-three-current-action",
  [manyfoldReturnActions.returnThreshold]: "return-threshold-action",
});

function optionLabel(value) {
  if (optionCopy[value]) return optionCopy[value];
  const reviewBoundary = String(value).match(/^review_(.+)_boundary$/);
  if (reviewBoundary && fieldCopy[reviewBoundary[1]]) {
    return `Review only the ${fieldCopy[reviewBoundary[1]].toLowerCase()} boundary`;
  }
  const noInference = String(value).match(/^do_not_infer_(.+)$/);
  if (noInference && fieldCopy[noInference[1]]) {
    return `Do not infer the ${fieldCopy[noInference[1]].toLowerCase()}`;
  }
  return "Unrecognized course option";
}

function caseLabel(id, fallbackIndex) {
  const match = String(id).match(/^([PRT])(\d{2})$/);
  if (!match) return `Course case ${fallbackIndex + 1}`;
  const form = { P: "Primary", R: "Retrieval", T: "Transfer" }[match[1]];
  return `${form} case ${Number(match[2])}`;
}

function publicFailedBoundary(id) {
  if (failedBoundaryCopy[id]) return failedBoundaryCopy[id];
  const caseDimension = String(id).match(/^([PRT])(\d{2})\.(technique|deciding_signal)$/);
  if (caseDimension) {
    const form = { P: "Primary", R: "Retrieval", T: "Transfer" }[caseDimension[1]];
    return `${form} case ${Number(caseDimension[2])} — ${fieldCopy[caseDimension[3]]} remains incomplete.`;
  }
  return "One required course boundary remains incomplete.";
}

function ManyfoldForm({ form, onFieldChange }) {
  const [values, setValues] = useState({});
  const update = (name, value) => {
    setValues((current) => ({ ...current, [name]: value }));
    onFieldChange(name, value);
  };
  if (!form) return null;
  if (form.kind === "python") {
    return (
      <div className="three-current-form manyfold-form">
        <section className="manyfold-scaffold" aria-label="Supplied unscored scaffold">
          <h2>Supplied sanitized inputs</h2>
          <pre>{JSON.stringify({ ...form.scaffold, required_keys: ["recurring_count", "divergent_count", "sealed", "judgment"] }, null, 2)}</pre>
          <p>Define <code>build_summary(replica_summary, sealed_reading)</code>, return the four keys from the supplied parameters, keep <code>sealed</code> and <code>judgment</code> as <code>None</code>, then call it once.</p>
        </section>
        <label htmlFor="mf20-python-editor">Blank Python editor</label>
        <textarea
          id={form.form === "primary" ? "mf20-python-primary-editor" : "mf20-python-transfer-editor"}
          value={values.learnerSource ?? ""}
          rows="13"
          spellCheck="false"
          onChange={(event) => update("learnerSource", event.target.value)}
        />
      </div>
    );
  }
  if (form.kind === "trace") {
    return (
      <div className="three-current-form manyfold-form-grid">
        {form.fieldIds.map((id, index) => (
          <label key={id} htmlFor={`mf20-python-trace-${id}`}>
            {fieldCopy[id]}
            <select
              id={index === 0 ? "mf20-python-trace-first" : `mf20-python-trace-${id}`}
              value={values[id] ?? ""}
              onChange={(event) => update(id, event.target.value)}
            >
              <option value="">Choose one</option>
              {form.options[id].map((value) => <option key={value} value={value}>{optionLabel(value)}</option>)}
            </select>
          </label>
        ))}
      </div>
    );
  }
  if (form.kind === "text") {
    return (
      <div className="three-current-form manyfold-cases">
        {form.cases.map((item, caseIndex) => (
          <fieldset key={item.id}>
            <legend>{caseLabel(item.id, caseIndex)}: {item.prompt}</legend>
            {form.dimensions.map((dimension, dimensionIndex) => {
              const name = `${item.id}.${dimension}`;
              return (
                <label key={name} htmlFor={`mf20-${form.form}-${name}`}>
                  {fieldCopy[dimension]}
                  <select
                    id={caseIndex === 0 && dimensionIndex === 0 ? `mf20-text-${form.form}-first` : `mf20-${form.form}-${name}`}
                    value={values[name] ?? ""}
                    onChange={(event) => update(name, event.target.value)}
                  >
                    <option value="">Choose one</option>
                    {form.options[dimension].map((value) => <option key={value} value={value}>{optionLabel(value)}</option>)}
                  </select>
                </label>
              );
            })}
          </fieldset>
        ))}
      </div>
    );
  }
  if (form.kind === "explanation") {
    const name = form.fieldIds[0];
    return (
      <div className="three-current-form manyfold-form">
        <label htmlFor={name === "requestedOutput" ? "mf20-requested-output-field" : "mf20-truth-boundary-field"}>
          {fieldCopy[name]}
          <select
            id={name === "requestedOutput" ? "mf20-requested-output-field" : "mf20-truth-boundary-field"}
            value={values[name] ?? ""}
            onChange={(event) => update(name, event.target.value)}
          >
            <option value="">Choose one</option>
            {form.options.map((value) => <option key={value} value={value}>{optionLabel(value)}</option>)}
          </select>
        </label>
      </div>
    );
  }
  return null;
}

export function ManyfoldReturn({ state, onAction, onFieldChange }) {
  const panelRef = useRef(null);
  const worldScene = resolveManyfoldReturnWorldScene(state);
  const worldImage = worldScene?.role === "SC-06-DETAIL-MASTER"
    ? detailPlaceholder
    : panoramaPlaceholder;
  const worldAlt = worldScene?.role === "SC-06-DETAIL-MASTER"
    ? "Temporary noninteractive visual reference: the existing City Threshold access scene stands in for the pending SC-06 forensic detail master and supplies no SC-06 observation or course evidence"
    : "Temporary noninteractive visual reference: the released Three-Current Reach panorama stands in for the pending SC-06 panorama master and supplies no SC-06 observation or course evidence";
  const runtimeSourceMaster = worldScene?.role === "SC-06-DETAIL-MASTER"
    ? "city-threshold-access-master.png"
    : "sc05-three-current-panorama-runtime-master-v1.webp";
  const recorded = useMemo(() => new Set(state.recordedObservationIds ?? []), [state.recordedObservationIds]);

  useLayoutEffect(() => {
    const target = document.getElementById(state.focusIntent?.target)
      ?? document.getElementById(state.headingId);
    target?.focus({ preventScroll: true });
  }, [state.activeGroup, state.focusIntent?.target, state.headingId]);

  return (
    <CanonicalGameFrame mode="campaign">
      <main
        className="three-current-reach manyfold-return"
        data-shell-version={state.shellVersion}
        data-board-state={state.boardState}
        data-active-group={state.activeGroup}
      >
        <figure
          className="three-current-world manyfold-world"
          data-world-scene={worldScene?.sceneId}
          data-world-master={worldScene?.masterId}
          data-world-role={worldScene?.role}
          data-world-crop={worldScene?.cropId}
          data-runtime-source-master={runtimeSourceMaster}
          data-asset-status="PLACEHOLDER — IMAGE SPECIALIST GAP"
          data-placeholder-retirement="SC-06 masters remain unfilled; predecessor assets are disclosed and grant no SC-06 evidence"
        >
          <img src={worldImage} alt={worldAlt} />
          <figcaption>
            Visual production gap: this disclosed predecessor image is noninteractive and grants no SC-06 observation or course evidence. The adjacent expedition text carries the complete current meaning.
          </figcaption>
        </figure>

        <section ref={panelRef} className="three-current-panel manyfold-panel" aria-labelledby={state.headingId}>
          <header className="three-current-heading">
            <p className="eyebrow">{state.phase}</p>
            <p className="manyfold-owner">{state.owner}</p>
            <h1 id={state.headingId} tabIndex="-1">{headingCopy[state.activeGroup]}</h1>
          </header>
          <p>{introductionCopy[state.activeGroup]}</p>
          <div id={state.statusRegionId} role="status" aria-live="polite" aria-atomic="true" data-message-id={state.statusMessageId}>
            {state.statusMessage}
          </div>

          {state.activeGroup === "mf10_observations" && (
            <ul className="three-current-relations manyfold-observations" aria-label="Four equal physical observations">
              {manyfoldReturnObservationIds.map((id) => (
                <li key={id}>
                  <p>{observationCopy[id]}</p>
                  <span>{recorded.has(id) ? "Recorded - no second event" : "Available - deliberate action required"}</span>
                </li>
              ))}
            </ul>
          )}

          <ManyfoldForm key={state.activeGroup} form={state.form} onFieldChange={onFieldChange} />

          {state.failedPublicIds?.length > 0 && (
            <section className="manyfold-errors" aria-labelledby="manyfold-error-heading">
              <h2 id="manyfold-error-heading">Incomplete public checks</h2>
              <ul>{state.failedPublicIds.map((id) => <li key={id}>{publicFailedBoundary(id)}</li>)}</ul>
              <p>Review the named responsibility only. No expected source, answer, score, case choice, or truth value is supplied.</p>
            </section>
          )}

          {state.reviewRows?.length > 0 && (
            <ol className="three-current-review manyfold-review">
              {state.reviewRows.map((row) => (
                <li key={row.id}><strong>{row.owner}</strong><span>{row.state}</span></li>
              ))}
            </ol>
          )}

          {state.note && (
            <section className="three-current-note manyfold-note" aria-labelledby="mf30-note-heading">
              <h2 id="mf30-note-heading">Bounded restored note</h2>
              <ul>
                {state.note.observations.map((id) => <li key={id}>{observationCopy[id]}</li>)}
                <li>Replicas: sanitized precomputed only.</li>
                <li>Truth: null. Purpose: null. Destination: null.</li>
                <li>Evidence identities: {state.evidenceCount} independent finalized records.</li>
              </ul>
            </section>
          )}

          <div className="three-current-actions manyfold-actions" aria-label="Current actions">
            {state.availableActions.map((action) => {
              const observationId = Object.entries({
                [manyfoldReturnObservationIds[0]]: manyfoldReturnActions.recurrence,
                [manyfoldReturnObservationIds[1]]: manyfoldReturnActions.divergence,
                [manyfoldReturnObservationIds[2]]: manyfoldReturnActions.sealed,
                [manyfoldReturnObservationIds[3]]: manyfoldReturnActions.stewardship,
              }).find(([, candidate]) => candidate === action)?.[0];
              const disabled = observationId ? recorded.has(observationId) : false;
              return (
                <button
                  key={action}
                  id={actionIds[action]}
                  type="button"
                  data-action-id={action}
                  disabled={disabled}
                  aria-describedby={action === manyfoldReturnActions.returnThreeCurrent || action === manyfoldReturnActions.returnThreshold ? "manyfold-return-boundary" : undefined}
                  onClick={(event) => onAction(action, event)}
                >
                  {disabled ? `${action} — Recorded - no second event` : action}
                </button>
              );
            })}
          </div>
          <p id="manyfold-return-boundary" className="manyfold-boundary">
            PILOT // SAFE RETURN — exact write-free returns clear unsaved RP-005 work. Offline course practice grants no authority, external action, exam guarantee, route response, or world response.
          </p>
        </section>
      </main>
    </CanonicalGameFrame>
  );
}
