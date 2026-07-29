import { useLayoutEffect, useRef } from "react";
import {
  intervalWorksActions,
  intervalWorksObservationIds,
  resolveIntervalWorksWorldScene,
} from "./IntervalWorksNormal.js";
import { braidedVergeActions } from "./BraidedVergeNormal.js";
import intervalWorksPanorama from "../../Visual Direction/Production Masters/2026-07-29-rp006-interval-works-runtime/sc07-interval-works-panorama-runtime-master-v1.webp";
import intervalWorksCrosssection from "../../Visual Direction/Production Masters/2026-07-29-rp006-interval-works-runtime/sc07-interval-works-crosssection-runtime-master-v1.webp";

const headingCopy = {
  iw00_orientation: "Interval Works",
  iw10_observations: "Inspect material order",
  iw20_python_primary: "Preserve source order",
  iw20_python_trace: "Trace the bounded helper",
  iw20_python_transfer: "Transfer the method",
  iw20_speech_primary: "Recognize speech capability",
  iw20_speech_retrieval: "Retrieve input/output direction",
  iw20_speech_transfer: "Transfer speech capability",
  iw20_direction: "Explain the direction boundary",
  iw20_causation: "Explain the causation boundary",
  iw20_repair: "Review the incomplete dimensions",
  iw20_review: "Review independent responsibilities",
  iw20_save: "Save a bounded expedition note",
  iw20_transaction: "Verify the local transaction",
  iw20_save_recovery: "Recover the local save",
  iw20_rollback_unverified: "Local rollback is unverified",
  iw30_restore: "IW-30 verified restore",
  iw30_braided_route_choice: "Choose the next expedition boundary",
};

const introductionCopy = {
  iw00_orientation: "A vast exposed working cut supports relative order without supplying a history. The opaque interval remains unavailable; the visible works neither invite nor respond.",
  iw10_observations: "Record four equal physical facts in any order. Relative order is not chronology or cause; change is not progress; persistence is not identity; an unavailable boundary is not an access challenge.",
  iw20_python_primary: "Use the supplied sanitized replicas only. Import itertools and call itertools.chain.from_iterable(record_groups) once; preserve source order, the explicit gap, and cause=None.",
  iw20_python_trace: "Identify the imported module, qualified helper, supplied input, list output, preserved order, explicit gap, and cause boundary.",
  iw20_python_transfer: "Apply the same bounded method to genuinely fresh sanitized replicas. No live material is read or controlled.",
  iw20_speech_primary: "Course-authored neutral cases distinguish speech recognition from synthesis by input/output direction. The scene carries no answer.",
  iw20_speech_retrieval: "Retrieve the capability from the direction of information flow, not the subject or order of words.",
  iw20_speech_transfer: "Apply the same distinction to fresh neutral cases. This offline practice grants no service, exam, or production authority.",
  iw20_direction: "State that input and output direction selects recognition or synthesis.",
  iw20_causation: "State that transcript order or content does not establish causation.",
  iw20_repair: "The named dimensions remain incomplete. Guidance is answer-free; retry opens a wholly blank form.",
  iw20_review: "Physical observations, Python, speech practice, and explanations remain separate owners. No score, total, world verdict, or route is created.",
  iw20_save: "The preview contains only the strict ten-key record, eleven-key note, and eight finalized evidence records. Saving is a local expedition transaction.",
  iw20_transaction: "The System is checking strict sanitation, one-key replacement, raw/object read-back, and unchanged predecessor bytes.",
  iw20_save_recovery: "The prior RP-006 bytes or verified absence were restored and checked. Retry or return safely.",
  iw20_rollback_unverified: "Progression is held because rollback or predecessor stability cannot be proven. No save or route is claimed.",
  iw30_restore: "The bounded note was restored without replay. Cause, duration, authorship, identity, importance, purpose, destination, and closed contents remain unresolved.",
  iw30_braided_route_choice: "The exact released note remains restored. The Braided Verge action is a fresh Pilot-owned adjacent-survey choice; scenery, completion, and destinationless notation neither require nor dispatch it.",
};

const observationLabels = {
  [intervalWorksObservationIds[0]]: ["Overlap and cross-cut", intervalWorksActions.overlap, "Underlay, overlay, crossing repair, and covering deposit support relative order only."],
  [intervalWorksObservationIds[1]]: ["Changed and persistent", intervalWorksActions.changedPersistent, "One form differs while surrounding geometry and one material phase continue without verdict or identity."],
  [intervalWorksObservationIds[2]]: ["Closed interval", intervalWorksActions.closedInterval, "An opaque boundary and external bypass preserve only an unavailable evidence interval."],
  [intervalWorksObservationIds[3]]: ["Layered stewardship", intervalWorksActions.stewardship, "Compatible foundation, adaptation, repair, deposition, and current contact imply care without a named owner or doctrine."],
};

const actionIds = {
  [intervalWorksActions.inspect]: "iw00-inspect-action",
  [intervalWorksActions.overlap]: "iw-observation-overlap",
  [intervalWorksActions.changedPersistent]: "iw-observation-changed-persistent",
  [intervalWorksActions.closedInterval]: "iw-observation-closed",
  [intervalWorksActions.stewardship]: "iw-observation-stewardship",
  [intervalWorksActions.retry]: "iw20-retry-action",
  [intervalWorksActions.review]: "iw20-review-action",
  [intervalWorksActions.save]: "iw20-save-action",
  [intervalWorksActions.retrySave]: "iw20-save-retry-action",
  [intervalWorksActions.returnManyfold]: "iw-return-manyfold",
  [intervalWorksActions.returnThreshold]: "iw-return-threshold",
  [braidedVergeActions.route]: "iw-route-braided-verge",
};

function optionLabel(value) {
  return String(value).replaceAll("_", " ");
}

function IntervalWorksForm({ form, onFieldChange }) {
  if (!form) return null;
  if (form.kind === "python") {
    return (
      <div className="interval-form-grid">
        <div className="interval-scaffold" aria-label="Supplied sanitized replica scaffold">
          <strong>Supplied, unscored replicas</strong>
          <pre>{JSON.stringify(form.scaffold, null, 2)}</pre>
        </div>
        <label>
          <span>Learner-owned Python fragment</span>
          <textarea
            id={form.form === "primary" ? "iw20-python-primary-editor" : "iw20-python-transfer-editor"}
            rows="12"
            spellCheck="false"
            onChange={(event) => onFieldChange("learnerSource", event.target.value)}
          />
        </label>
      </div>
    );
  }
  if (form.kind === "trace") {
    return (
      <div className="interval-form-grid">
        {form.fieldIds.map((id, index) => (
          <label key={id}>
            <span>{optionLabel(id)}</span>
            <select
              id={index === 0 ? "iw20-python-trace-first" : undefined}
              defaultValue=""
              onChange={(event) => onFieldChange(id, event.target.value)}
            >
              <option value="" disabled>Select one</option>
              {form.options[id].map((value) => <option key={value} value={value}>{optionLabel(value)}</option>)}
            </select>
          </label>
        ))}
      </div>
    );
  }
  if (form.kind === "speech") {
    return (
      <div className="interval-cases">
        {form.cases.map((item, index) => (
          <fieldset key={item.id}>
            <legend>{item.id}: {item.prompt}</legend>
            {form.dimensions.map((dimension, dimensionIndex) => (
              <label key={dimension}>
                <span>{optionLabel(dimension)}</span>
                <select
                  id={index === 0 && dimensionIndex === 0 ? `iw20-speech-${form.form}-first` : undefined}
                  defaultValue=""
                  onChange={(event) => onFieldChange(`${item.id}.${dimension}`, event.target.value)}
                >
                  <option value="" disabled>Select one</option>
                  {form.options[dimension].map((value) => <option key={value} value={value}>{optionLabel(value)}</option>)}
                </select>
              </label>
            ))}
          </fieldset>
        ))}
      </div>
    );
  }
  if (form.kind === "explanation") {
    const id = form.form === "directionBoundary" ? "iw20-direction-field" : "iw20-causation-field";
    return (
      <label>
        <span>{form.form === "directionBoundary" ? "Input/output direction boundary" : "Transcript causation boundary"}</span>
        <select id={id} defaultValue="" onChange={(event) => onFieldChange(form.form, event.target.value)}>
          <option value="" disabled>Select one</option>
          {form.options.map((value) => <option key={value} value={value}>{optionLabel(value)}</option>)}
        </select>
      </label>
    );
  }
  return null;
}

export function IntervalWorks({ state, onAction, onFieldChange }) {
  const rootRef = useRef(null);
  const scene = resolveIntervalWorksWorldScene(state);
  const isCrosssection = scene?.role === "SC-07-CROSSSECTION-MASTER";
  const alt = isCrosssection
    ? "Close first-person material section. Dark underlay and translucent overlay meet pale crossing repairs and a thinner covering deposit. A changed branch form, a continuous dark phase, a sealed opaque interval with an external bypass, and compatible layers remain visible together."
    : "First-person panorama across immense nested mineral and glass-ceramic works. Pale repaired seams cross dark exposed layers around a broad opaque interval while maintained conductive lines continue beyond the view.";
  const imageSource = isCrosssection ? intervalWorksCrosssection : intervalWorksPanorama;
  const imageSourceName = isCrosssection
    ? "sc07-interval-works-crosssection-runtime-master-v1.webp"
    : "sc07-interval-works-panorama-runtime-master-v1.webp";

  useLayoutEffect(() => {
    const root = rootRef.current;
    const target = root?.querySelector(`#${CSS.escape(state.focusIntent?.target ?? state.headingId)}`)
      ?? root?.querySelector(`#${CSS.escape(state.headingId)}`);
    target?.focus?.({ preventScroll: true });
  }, [state.activeGroup, state.focusIntent?.target, state.headingId]);

  const observations = new Set(state.recordedObservationIds ?? []);
  const observationActions = new Set(Object.values(observationLabels).map((entry) => entry[1]));
  const renderedActions = state.activeGroup === "iw10_observations"
    ? state.availableActions.filter((action) => !observationActions.has(action))
    : state.availableActions;
  return (
    <main
      className="interval-works"
      data-active-group={state.activeGroup}
      data-scene-id={scene?.sceneId}
      data-scene-role={scene?.role}
      data-crop-id={scene?.cropId}
      ref={rootRef}
    >
      <figure className={`interval-world ${isCrosssection ? "is-crosssection" : "is-panorama"}`}>
        <img
          src={imageSource}
          alt={alt}
          data-image-role={scene?.role}
          data-runtime-source-master={imageSourceName}
        />
        <figcaption>
          Expedition view only. These visible relations support bounded description, not a
          date, cause, author, purpose, or account of the closed interval.
        </figcaption>
      </figure>

      <section className="interval-panel" aria-labelledby={state.headingId}>
        <header className="interval-heading">
          <p className="eyebrow">{state.owner}</p>
          <h1 id={state.headingId} tabIndex="-1">{headingCopy[state.activeGroup]}</h1>
        </header>
        <p>{introductionCopy[state.activeGroup]}</p>
        <p className="interval-boundary">
          SANITIZED PRECOMPUTED REPLICAS ONLY · OFFLINE COURSE-AUTHORED PRACTICE ·
          NO LIVE READ, ACCESS, AUTHORITY, EXAM GUARANTEE, EXTERNAL ACTION, OR WORLD RESPONSE
        </p>

        {state.activeGroup === "iw10_observations" && (
          <ul className="interval-observations" aria-label="Four equal material observations">
            {intervalWorksObservationIds.map((id) => {
              const [label, action, description] = observationLabels[id];
              const recorded = observations.has(id);
              return (
                <li key={id}>
                  <button
                    id={actionIds[action]}
                    type="button"
                    data-action-id={action}
                    data-recorded={recorded ? "true" : "false"}
                    onClick={(event) => onAction(action, event)}
                  >
                    <strong>{label}</strong>
                    <span>{recorded ? "Recorded" : "Available"}</span>
                  </button>
                  <p>{description}</p>
                </li>
              );
            })}
          </ul>
        )}

        <IntervalWorksForm key={state.activeGroup} form={state.form} onFieldChange={onFieldChange} />

        {state.failedPublicIds?.length > 0 && (
          <div className="interval-errors" role="note">
            <strong>Incomplete dimensions</strong>
            <ul>{state.failedPublicIds.map((id) => <li key={id}>{optionLabel(id)}</li>)}</ul>
          </div>
        )}

        {state.reviewRows?.length > 0 && (
          <ul className="interval-review">
            {state.reviewRows.map((row) => (
              <li key={row.id}><strong>{row.owner}</strong><span>{row.state}</span></li>
            ))}
          </ul>
        )}

        {state.note && (
          <section className="interval-note" aria-label="Restored bounded expedition note">
            <h2>Bounded note</h2>
            <dl>
              <div><dt>Relative order</dt><dd>Exposed source order preserved; no chronology or cause.</dd></div>
              <div><dt>Changed</dt><dd>One visible change observed without progress or damage framing.</dd></div>
              <div><dt>Persistent</dt><dd>One feature persists without identity or importance framing.</dd></div>
              <div><dt>Unavailable</dt><dd>The closed interval remains unavailable evidence.</dd></div>
              <div><dt>Stewardship</dt><dd>Compatible material eras are visible without a named owner or doctrine.</dd></div>
            </dl>
          </section>
        )}

        <p
          id={state.statusRegionId}
          role="status"
          aria-live="polite"
          aria-atomic="true"
          data-status-id={state.statusMessageId}
        >
          {state.statusMessage}
        </p>

        <div className="interval-actions" aria-label="Current actions">
          {renderedActions.map((action) => (
            <button
              key={action}
              id={actionIds[action]}
              type="button"
              data-action-id={action}
              onClick={(event) => onAction(action, event)}
            >
              {action}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
