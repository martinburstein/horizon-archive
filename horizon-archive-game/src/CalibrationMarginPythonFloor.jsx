import { useLayoutEffect, useRef } from "react";
import {
  calibrationMarginPythonActionLabels,
  calibrationMarginPythonActions,
} from "./CalibrationMarginPythonFloor.js";

const fieldCopy = Object.freeze({
  condition: Object.freeze({
    label: "Equality condition",
    help: "Write only the comparison expression used at the aligned index.",
  }),
  trueBranch: Object.freeze({
    label: "Label when the condition is true",
    help: "Write one local label value. No completed line is supplied.",
  }),
  falseBranch: Object.freeze({
    label: "Label when the condition is false",
    help: "Write one local label value. No completed line is supplied.",
  }),
  unavailableBoundary: Object.freeze({
    label: "Unavailable-source boundary",
    help: "State how unavailable source material remains bounded without inferring a value.",
  }),
});

const groupCopy = Object.freeze({
  python_primary: Object.freeze({
    heading: "Blank bounded Python primary",
    instruction: "Complete the three Pilot-owned fields inside the supplied bounded scaffold.",
    placeholder: "COPY-CM20-INSTRUCTION",
  }),
  primary_repair: Object.freeze({
    heading: "Primary repair for the current missed checks",
    instruction: "Review only the checks listed below. No expected value or completed line is shown.",
    placeholder: "COPY-CM21-PY-CHECK",
  }),
  python_retrieval: Object.freeze({
    heading: "Closed-note four-boundary retrieval",
    instruction: "Recall all four boundaries together without reopening the primary work.",
    placeholder: "COPY-CM22-INSTRUCTION",
  }),
  retrieval_repair: Object.freeze({
    heading: "Retrieval repair for the current missed dimensions",
    instruction: "Review only the named dimensions, then begin a wholly blank retrieval.",
    placeholder: "COPY-CM21-RETRIEVAL",
  }),
  python_transfer: Object.freeze({
    heading: "Blank unseen transfer",
    instruction: "Complete the same bounded responsibility in a distinct fresh case.",
    placeholder: "COPY-CM23-INSTRUCTION",
  }),
  transfer_repair: Object.freeze({
    heading: "Transfer repair for the current missed checks",
    instruction: "Review only the checks listed below, then begin a wholly blank transfer.",
    placeholder: "COPY-CM21-PY-CHECK",
  }),
  python_finalized: Object.freeze({
    heading: "PY-010 local evidence finalized",
    instruction: "The bounded local objective is complete. No onward action is available here.",
    placeholder: "COPY-PY010-P3-STATUS",
  }),
});

const suppliedCases = Object.freeze({
  primary: Object.freeze({
    exposedA: '["steady", "rise", "steady", "cool"]',
    exposedB: '["steady", "rise", "hold", "cool"]',
  }),
  transfer: Object.freeze({
    exposedA: '["north", "pulse", "settle", "settle"]',
    exposedB: '["north", "pulse", "settle", "drift"]',
  }),
});

function actionLabel(actionId) {
  return calibrationMarginPythonActionLabels[actionId] ?? actionId;
}

function primaryAction(state) {
  if (state.form === "primary") return calibrationMarginPythonActions.submitPrimary;
  if (state.form === "retrieval") return calibrationMarginPythonActions.submitRetrieval;
  if (state.form === "transfer") return calibrationMarginPythonActions.submitTransfer;
  return null;
}

function InputFields({ state, inputRefs, onFieldChange }) {
  return (
    <div className={`python-floor-fields python-floor-fields-${state.form}`}>
      {state.fieldNames.map((name) => {
        const copy = fieldCopy[name];
        const helpId = `${state.activeGroup}-${name}-help`;
        const errorId = `${state.activeGroup}-${name}-error`;
        const error = state.fieldErrors[name];
        return (
          <div className="python-floor-field" key={name}>
            <label htmlFor={`${state.activeGroup}-${name}`}>{copy.label}</label>
            <p id={helpId} className="python-floor-field-help">{copy.help}</p>
            <input
              ref={(element) => {
                if (element) inputRefs.current.set(name, element);
                else inputRefs.current.delete(name);
              }}
              id={`${state.activeGroup}-${name}`}
              name={`${state.form}-${name}`}
              type="text"
              required
              readOnly={state.readOnly}
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck="false"
              value={state.fieldValues[name] ?? ""}
              aria-invalid={error ? "true" : undefined}
              aria-describedby={error ? `${helpId} ${errorId}` : helpId}
              onChange={(event) => onFieldChange(name, event.target.value)}
            />
            {error && (
              <p id={errorId} className="python-floor-field-error">
                {error === "required"
                  ? "This Pilot-owned field is required for a complete local attempt."
                  : "This field participates in one or more currently missed checks. No answer is supplied."}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

function SuppliedScaffold({ form }) {
  const supplied = suppliedCases[form];
  if (!supplied) return null;
  return (
    <section className="python-floor-scaffold" aria-labelledby={`${form}-scaffold-heading`}>
      <p className="eyebrow">BUILDER WORK // SUPPLIED</p>
      <h2 id={`${form}-scaffold-heading`}>Bounded exposed inputs and result structure</h2>
      <pre>
        {`exposed_a = ${supplied.exposedA}
exposed_b = ${supplied.exposedB}

comparison = []
for index in range(len(exposed_a)):
    if [PILOT CONDITION]:
        status = [PILOT TRUE-BRANCH LABEL]
    else:
        status = [PILOT FALSE-BRANCH LABEL]
    comparison.append({"index": index, "status": status})

sealed_source = {"status": "unavailable", "value": None}`}
      </pre>
    </section>
  );
}

export function CalibrationMarginPythonFloor({
  state,
  onAction,
  onFieldChange,
}) {
  const headingRef = useRef(null);
  const inputRefs = useRef(new Map());
  const actionRefs = useRef(new Map());
  const copy = groupCopy[state.activeGroup];
  const submitAction = primaryAction(state);

  useLayoutEffect(() => {
    const target = state.focusIntent?.target;
    if (target === "heading") {
      headingRef.current?.focus({ preventScroll: true });
      return;
    }
    inputRefs.current.get(target)?.focus({ preventScroll: true });
    actionRefs.current.get(target)?.focus({ preventScroll: true });
  }, [state]);

  const controls = (
    <div className="python-floor-actions">
      {state.availableActions.map((actionId) => {
        const isSubmit = actionId === submitAction;
        const isClear = actionId.startsWith("CLEAR_");
        const disabled = isClear
          && Object.values(state.fieldValues).every((value) => value === "");
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
            {actionLabel(actionId)}
          </button>
        );
      })}
    </div>
  );

  const content = (
    <>
      {["primary", "transfer"].includes(state.form) && (
        <SuppliedScaffold form={state.form} />
      )}
      {state.failedIds.length > 0 && (
        <section className="python-floor-repair" aria-labelledby={`${state.activeGroup}-repair-heading`}>
          <h2 id={`${state.activeGroup}-repair-heading`}>Current answer-free review boundary</h2>
          <ul>
            {state.failedIds.map((failedId) => (
              <li key={failedId} data-copy-placeholder={`${copy.placeholder}-${failedId}`}>
                {failedId}
              </li>
            ))}
          </ul>
        </section>
      )}
      {state.fieldNames.length > 0 && (
        <InputFields
          state={state}
          inputRefs={inputRefs}
          onFieldChange={onFieldChange}
        />
      )}
    </>
  );

  return (
    <section
      className="city-command-panel python-floor-panel"
      aria-labelledby={`${state.activeGroup}-heading`}
      data-active-group={state.activeGroup}
      data-python-checkpoint={state.checkpoint}
    >
      <header className="python-floor-heading">
        <p className="eyebrow">{state.owner}</p>
        <h1
          ref={headingRef}
          id={`${state.activeGroup}-heading`}
          tabIndex="-1"
          data-copy-placeholder={copy.placeholder}
        >
          {copy.heading}
        </h1>
        <p>{copy.instruction}</p>
      </header>
      <div
        className="python-floor-status"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        data-status-message-id={state.statusMessageId}
      >
        <span className="eyebrow">SYSTEM STATUS</span>
        <span>{state.statusMessage}</span>
      </div>
      {submitAction && !state.readOnly ? (
        <form
          className="python-floor-form"
          noValidate
          onSubmit={(event) => {
            event.preventDefault();
            onAction(submitAction, event);
          }}
        >
          {content}
          {controls}
        </form>
      ) : (
        <div className="python-floor-content">
          {content}
          {controls}
        </div>
      )}
      <p className="python-floor-negative-authority" data-copy-placeholder="COPY-NEGATIVE-AUTHORITY">
        Local course-authored practice. Offline evidence grants no access, service authority, or exam guarantee.
      </p>
    </section>
  );
}
