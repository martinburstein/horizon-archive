import { useLayoutEffect, useRef } from "react";
import {
  calibrationMarginExtractionActionLabels,
  calibrationMarginExtractionActions,
} from "./CalibrationMarginExtractionFloor.js";

const dimensionCopy = Object.freeze({
  input_boundary: Object.freeze({
    label: "Supplied input boundary",
    help: "Identify only the course material supplied for this case.",
  }),
  output_contract: Object.freeze({
    label: "Structured output and provenance",
    help: "Choose the accountable output obligation for the supplied source.",
  }),
  unsupported_rule: Object.freeze({
    label: "Unsupported-value boundary",
    help: "Choose how the record treats a value its supplied input cannot support.",
  }),
  unsupported_explanation: Object.freeze({
    label: "Why unavailable input cannot support an extracted value",
    help: "Select the accountable reasoning boundary separately from the three extraction dimensions.",
  }),
});

const groupCopy = Object.freeze({
  ie_primary: Object.freeze({
    heading: "Pilot provenance ledger: source boundary",
    instruction: "Build one expedition-owned record from the course material actually supplied.",
  }),
  ie_primary_repair: Object.freeze({
    heading: "Teacher review: primary source boundary",
    instruction: "Reconstruct only the listed responsibilities. The prior attempt has been cleared.",
  }),
  ie_interlude: Object.freeze({
    heading: "Primary boundary recorded locally",
    instruction: "This pause grants no evidence. Continue deliberately when ready for a fresh closed-note check.",
  }),
  ie_retrieval: Object.freeze({
    heading: "Pilot provenance ledger: closed-note reconstruction",
    instruction: "Rebuild the source, output, and unsupported-value boundaries without the primary answer set.",
  }),
  ie_retrieval_repair: Object.freeze({
    heading: "Teacher review: closed-note boundary",
    instruction: "Reconstruct only the listed responsibilities. No prior selection remains.",
  }),
  ie_transfer: Object.freeze({
    heading: "Pilot provenance ledger: missing-input transfer",
    instruction: "Apply the boundary to a distinct course audio/video case in which one referenced input was not supplied.",
  }),
  ie_transfer_repair: Object.freeze({
    heading: "Teacher review: missing-input transfer",
    instruction: "Reconstruct only the listed dimensions or explanation boundary. The complete attempt has been cleared.",
  }),
  ie_finalized: Object.freeze({
    heading: "Information-extraction objective finalized locally",
    instruction: "RP003-IE-01 is finalized on this device. The City and route remain unchanged; no onward action is available.",
  }),
});

const repairCopy = Object.freeze({
  input_boundary:
    "Recheck which course source was actually supplied. Do not add a missing modality.",
  output_contract:
    "Recheck how requested fields remain structured and traceable to their source.",
  unsupported_rule:
    "Recheck the boundary between an unsupported value and a negative result.",
  unsupported_explanation:
    "Explain only why unavailable input cannot support a value; do not infer from another modality.",
});

function humanize(value) {
  return String(value)
    .split("_")
    .filter(Boolean)
    .map((word) => `${word[0]?.toUpperCase() ?? ""}${word.slice(1)}`)
    .join(" ");
}

function submitAction(state) {
  if (state.form === "primary") return calibrationMarginExtractionActions.submitPrimary;
  if (state.form === "retrieval") return calibrationMarginExtractionActions.submitRetrieval;
  if (state.form === "transfer") return calibrationMarginExtractionActions.submitTransfer;
  return null;
}

function ExtractionChoice({
  state,
  name,
  choices,
  inputRefs,
  onFieldChange,
}) {
  const copy = dimensionCopy[name];
  const helpId = `${state.activeGroup}-${name}-help`;
  const errorId = `${state.activeGroup}-${name}-error`;
  const error = state.fieldErrors[name];
  return (
    <fieldset
      className="extraction-floor-field"
      aria-describedby={error ? `${helpId} ${errorId}` : helpId}
      aria-invalid={error ? "true" : undefined}
    >
      <legend>{copy.label}</legend>
      <p id={helpId} className="extraction-floor-field-help">{copy.help}</p>
      <div className="extraction-floor-options">
        {choices.map((choice, index) => (
          <label key={choice}>
            <input
              ref={(element) => {
                if (index !== 0) return;
                if (element) inputRefs.current.set(name, element);
                else inputRefs.current.delete(name);
              }}
              type="radio"
              name={`${state.activeGroup}-${name}`}
              value={choice}
              required
              checked={state.fieldValues[name] === choice}
              onChange={(event) => onFieldChange(name, event.target.value)}
            />
            <span>{humanize(choice)}</span>
          </label>
        ))}
      </div>
      {error && (
        <p id={errorId} className="extraction-floor-field-error">
          This expedition-owned boundary is required before evaluation.
        </p>
      )}
    </fieldset>
  );
}
export function CalibrationMarginExtractionFloor({
  state,
  onAction,
  onFieldChange,
  onConfidenceChange,
}) {
  const headingRef = useRef(null);
  const inputRefs = useRef(new Map());
  const actionRefs = useRef(new Map());
  const copy = groupCopy[state.activeGroup];
  const primaryAction = submitAction(state);
  const authoring = ["primary", "retrieval", "transfer"].includes(state.form)
    && !state.activeGroup.endsWith("_repair");

  useLayoutEffect(() => {
    const target = state.focusIntent?.target;
    if (target === "heading") {
      headingRef.current?.focus({ preventScroll: true });
      return;
    }
    inputRefs.current.get(target)?.focus({ preventScroll: true });
    actionRefs.current.get(target)?.focus({ preventScroll: true });
  }, [state]);

  const actions = (
    <div className="extraction-floor-actions">
      {state.availableActions.map((actionId) => {
        const isSubmit = actionId === primaryAction;
        const isClear = actionId === calibrationMarginExtractionActions.clear;
        const disabled = isClear
          && Object.values(state.fieldValues).every((value) => value === "")
          && state.confidence === "";
        return (
          <button
            key={actionId}
            ref={(element) => {
              if (element) actionRefs.current.set(actionId, element);
              else actionRefs.current.delete(actionId);
            }}
            type={isSubmit ? "submit" : "button"}
            disabled={disabled}
            aria-disabled={disabled ? "true" : undefined}
            data-action-id={actionId}
            onClick={isSubmit ? undefined : (event) => onAction(actionId, event)}
          >
            {calibrationMarginExtractionActionLabels[actionId] ?? actionId}
          </button>
        );
      })}
    </div>
  );

  const content = (
    <>
      {state.presentation && (
        <section
          className="extraction-source-envelope"
          aria-labelledby={`${state.activeGroup}-source-heading`}
        >
          <p className="eyebrow">EXPEDITION COURSE SOURCE</p>
          <h2 id={`${state.activeGroup}-source-heading`}>Supplied case boundary</h2>
          <p>{state.presentation.prompt}</p>
          <p>
            The case is course-authored practice. Unavailable input remains
            unsupported; it is not a negative result or a City response.
          </p>
        </section>
      )}
      {state.failedIds.length > 0 && (
        <section
          className="extraction-floor-repair"
          aria-labelledby={`${state.activeGroup}-repair-heading`}
        >
          <h2 id={`${state.activeGroup}-repair-heading`}>
            Answer-free review for this attempt
          </h2>
          <ul>
            {state.failedIds.map((failedId) => (
              <li key={failedId}>
                {repairCopy[failedId]
                  ?? "Review this source boundary without reopening prior work."}
              </li>
            ))}
          </ul>
        </section>
      )}
      {authoring && (
        <div className="extraction-floor-fields">
          {state.presentation.dimensions.map((dimension) => (
            <ExtractionChoice
              key={dimension}
              state={state}
              name={dimension}
              choices={state.presentation.choices[dimension]}
              inputRefs={inputRefs}
              onFieldChange={onFieldChange}
            />
          ))}
          {state.form === "transfer" && (
            <ExtractionChoice
              state={state}
              name="unsupported_explanation"
              choices={state.explanationChoices}
              inputRefs={inputRefs}
              onFieldChange={onFieldChange}
            />
          )}
          <label className="extraction-confidence">
            <span>Confidence (optional, zero credit)</span>
            <select
              value={state.confidence}
              onChange={(event) => onConfidenceChange(event.target.value)}
            >
              <option value="">Not recorded</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
        </div>
      )}
      {state.activeGroup === "ie_interlude" && (
        <details className="extraction-source-reinspection">
          <summary>Review the source boundary before the closed-note check</summary>
          <p>
            Separate the supplied course input, the requested structured output
            with provenance, and values the supplied input cannot support.
            Opening this note records nothing.
          </p>
        </details>
      )}
    </>
  );

  return (
    <section
      className="city-command-panel extraction-floor-panel"
      aria-labelledby={`${state.activeGroup}-heading`}
      data-active-group={state.activeGroup}
      data-extraction-checkpoint={state.checkpoint}
    >
      <header className="extraction-floor-heading">
        <p className="eyebrow">{state.owner}</p>
        <h1 ref={headingRef} id={`${state.activeGroup}-heading`} tabIndex="-1">
          {copy.heading}
        </h1>
        <p>{copy.instruction}</p>
      </header>
      <div
        className="extraction-floor-status"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        data-status-message-id={state.statusMessageId}
      >
        <span className="eyebrow">SYSTEM STATUS</span>
        <span>{state.statusMessage}</span>
      </div>
      {primaryAction && authoring ? (
        <form
          className="extraction-floor-form"
          noValidate
          onSubmit={(event) => {
            event.preventDefault();
            onAction(primaryAction, event);
          }}
        >
          {content}
          {actions}
        </form>
      ) : (
        <div className="extraction-floor-content">
          {content}
          {actions}
        </div>
      )}
      <p className="extraction-floor-negative-authority">
        Course-authored practice runs offline on this device. It grants no
        service access or authority and is not a Microsoft exam item or exam
        guarantee.
      </p>
    </section>
  );
}
