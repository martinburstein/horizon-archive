import { useLayoutEffect, useRef } from "react";
import { calibrationMarginReviewSaveActions } from "./CalibrationMarginReviewSave.js";

const noteLabels = Object.freeze({
  correspondence: "Correspondence",
  difference: "Bounded difference",
  unavailable: "Unavailable source",
});

export function CalibrationMarginReviewSave({ state, onAction }) {
  const headingRef = useRef(null);
  const provenanceRef = useRef(null);
  const actionRefs = useRef(new Map());

  useLayoutEffect(() => {
    const target = state?.focusIntent?.target;
    if (target === "heading") {
      headingRef.current?.focus({ preventScroll: true });
      return;
    }
    if (target === "provenance_heading") {
      provenanceRef.current?.focus({ preventScroll: true });
      return;
    }
    actionRefs.current.get(target)?.focus({ preventScroll: true });
  }, [state]);

  const restored = state.activeGroup === "cm50_verified_restore";
  const transaction = state.activeGroup === "cm41_transaction";
  const entry = state.activeGroup === "ie_finalized";
  const saveDisabled = state.saveDisabled === true;

  return (
    <section
      className="city-command-panel extraction-floor-panel"
      aria-labelledby="calibration-review-save-heading"
      data-active-group={state.activeGroup}
    >
      <header className="extraction-floor-heading">
        <p className="eyebrow">{state.owner}</p>
        <h1 ref={headingRef} id="calibration-review-save-heading" tabIndex="-1">
          {state.phase}
        </h1>
        <p>
          {entry
            ? "Finalized expedition evidence remains separate until a fresh review begins."
            : transaction
              ? "One local, offline record is being validated all-or-none."
              : restored
                ? "The expedition note returned intact without replaying completed work."
                : "Review five independent obligations. This is not a score or verdict."}
        </p>
      </header>

      <div
        className="extraction-floor-status"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        data-message-id={state.statusMessageId}
      >
        <strong>System status</strong>
        <span>{state.statusMessage}</span>
      </div>

      {!entry && !transaction && !restored && (
        <ol className="extraction-floor-content" aria-label="Five independent expedition obligations">
          {state.reviewRows.map((row) => (
            <li className="extraction-floor-field" key={row.id} data-review-row={row.id}>
              <strong>{row.label} â€” {row.state}</strong>
              <span>{row.owner}</span>
              <small>{row.limit}</small>
            </li>
          ))}
        </ol>
      )}

      {state.provenanceDetail && (
        <section className="extraction-source-envelope" aria-labelledby="review-provenance-heading">
          <h2 ref={provenanceRef} id="review-provenance-heading" tabIndex="-1">
            Provenance boundary
          </h2>
          <p>{state.provenanceDetail}</p>
        </section>
      )}

      {restored && (
        <div className="extraction-floor-content">
          <section className="extraction-source-envelope" aria-labelledby="record-integrity-heading">
            <h2 id="record-integrity-heading">Local record integrity</h2>
            <p>{state.recordIntegrity}</p>
          </section>
          <section className="extraction-source-envelope" aria-labelledby="expedition-note-heading">
            <h2 id="expedition-note-heading">Expedition-owned note</h2>
            <dl className="custody-ledger-fields">
              {Object.entries(state.note).map(([key, value]) => (
                <div key={key} data-field-state="read-only">
                  <dt>{noteLabels[key]}</dt>
                  <dd>{value.replaceAll("_", " ")}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      )}

      <div className="extraction-floor-actions" role="group" aria-label={`${state.phase} actions`}>
        {state.availableActions.map((action) => (
          <button
            key={action}
            ref={(element) => {
              if (element) actionRefs.current.set(action, element);
              else actionRefs.current.delete(action);
            }}
            type="button"
            data-action-id={action}
            onClick={(event) => onAction(action, event)}
          >
            {action}
          </button>
        ))}
        {saveDisabled && (
          <button
            type="button"
            data-action-id={calibrationMarginReviewSaveActions.save}
            disabled
            aria-disabled="true"
            aria-describedby="review-save-disabled-reason"
          >
            {calibrationMarginReviewSaveActions.save}
          </button>
        )}
      </div>

      {saveDisabled && (
        <p id="review-save-disabled-reason" className="extraction-floor-field-help">
          Provenance inspection is required before a fresh local save.
        </p>
      )}

      <p className="extraction-floor-negative-authority">
        Local device only. No account, network service, city action, access,
        authority, exam standing, exam guarantee, or world response is created.
      </p>
    </section>
  );
}
