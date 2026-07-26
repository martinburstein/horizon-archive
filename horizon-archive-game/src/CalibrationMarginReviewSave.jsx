import { useLayoutEffect, useRef } from "react";
import { calibrationMarginReviewSaveActions } from "./CalibrationMarginReviewSave.js";

const noteDisplay = Object.freeze({
  correspondence: Object.freeze({
    label: "Correspondence",
    value: "A bounded correspondence was observed between the exposed source sequences.",
  }),
  difference: Object.freeze({
    label: "Bounded difference",
    value: "One bounded difference was observed between the exposed source sequences.",
  }),
  unavailable: Object.freeze({
    label: "Unavailable source",
    value: "The sealed source remains unavailable and unread.",
  }),
});

const phaseTitles = Object.freeze({
  ie_finalized: "Expedition record ready for review",
  cm40_review: "Review expedition evidence",
  cm40_provenance_pending: "Review expedition evidence",
  cm40_provenance_inspected: "Review expedition evidence",
  cm41_transaction: "Preserve local expedition note",
  cm50_verified_restore: "Restored expedition note",
  observations: "Return to incomplete observations",
  python_retrieval: "Return to incomplete Python work",
  ie_retrieval: "Return to incomplete extraction work",
  rp002_verified_restore: "Civic Comparison restored",
  city_threshold: "City Threshold",
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
  const hasReturns = state.availableActions.some((action) => (
    action === calibrationMarginReviewSaveActions.returnCivicComparison
    || action === calibrationMarginReviewSaveActions.returnCityThreshold
  ));

  return (
    <section
      className="city-command-panel extraction-floor-panel"
      aria-labelledby="calibration-review-save-heading"
      data-active-group={state.activeGroup}
    >
      <header className="extraction-floor-heading">
        <p className="eyebrow">{state.owner}</p>
        <h1 ref={headingRef} id="calibration-review-save-heading" tabIndex="-1">
          {phaseTitles[state.activeGroup] ?? "Expedition review"}
        </h1>
        <p>
          {entry
            ? "Your completed observations and learning records remain separate until you choose to review them together."
            : transaction
              ? "The System is checking one local offline note and will replace it only as a complete verified record."
              : restored
                ? "The local expedition note returned intact. Completed work was not replayed, and the city did not respond."
                : "Inspect five separate obligations before preserving a local note. Each must stand on its own; this is not a score or verdict."}
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
              <strong>{row.label} — {row.state}</strong>
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
              {Object.keys(state.note).map((key) => (
                <div key={key} data-field-state="read-only">
                  <dt>{noteDisplay[key].label}</dt>
                  <dd>{noteDisplay[key].value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      )}

      {hasReturns && (
        <p id="known-return-context" className="extraction-floor-field-help">
          {restored
            ? "Choose either already-known return when ready. Both leave this local note unchanged and create no onward route."
            : "Optional return: both destinations are already known. Returning writes nothing, replays nothing, and opens no new route."}
        </p>
      )}

      <div
        className="extraction-floor-actions"
        role="group"
        aria-label={`${phaseTitles[state.activeGroup] ?? "Expedition review"} actions`}
      >
        {state.availableActions.map((action) => (
          <button
            key={action}
            ref={(element) => {
              if (element) actionRefs.current.set(action, element);
              else actionRefs.current.delete(action);
            }}
            type="button"
            data-action-id={action}
            aria-describedby={action.startsWith("RETURN TO ") ? "known-return-context" : undefined}
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
        {restored ? "This note is" : "Any saved note stays"} only in this
        browser on this device. It contains no submitted answers, drafts,
        account data, or source content. No network or cloud sync is used.
        It grants no city action, access, authority, exam standing, exam
        guarantee, or world response.
      </p>
    </section>
  );
}
