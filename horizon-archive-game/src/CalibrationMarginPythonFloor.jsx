import { useLayoutEffect, useRef } from "react";
import {
  calibrationMarginPythonActionLabels,
  calibrationMarginPythonActions,
} from "./CalibrationMarginPythonFloor.js";

const fieldCopy = Object.freeze({
  condition: Object.freeze({
    label: "Condition at one aligned index",
    help: "Write only the Boolean comparison for the two exposed values at the same index.",
  }),
  trueBranch: Object.freeze({
    label: "True-branch label",
    help: "Write the local label used when your comparison holds. No value is supplied.",
  }),
  falseBranch: Object.freeze({
    label: "False-branch label",
    help: "Write the local label used when your comparison does not hold. No value is supplied.",
  }),
  unavailableBoundary: Object.freeze({
    label: "Unavailable-source boundary",
    help: "Describe how an absent source stays bounded without assigning it a comparison outcome.",
  }),
});

const groupCopy = Object.freeze({
  python_primary: Object.freeze({
    heading: "Pilot field folio: bounded comparison",
    instruction: "Complete one equality condition and its two branch labels inside the supplied scaffold. The sealed source remains unavailable.",
  }),
  primary_repair: Object.freeze({
    heading: "Teacher review: primary attempt",
    instruction: "Review only the listed boundaries. Your submitted fields remain visible for association, but no expected value or completed line is shown.",
  }),
  python_retrieval: Object.freeze({
    heading: "Teacher check: closed-note boundaries",
    instruction: "Without reopening the primary form, state the condition, both branch meanings, and the unavailable-source boundary.",
  }),
  retrieval_repair: Object.freeze({
    heading: "Teacher review: retrieval attempt",
    instruction: "Review only the listed boundaries. No prior response or expected value will carry into the blank retry.",
  }),
  python_transfer: Object.freeze({
    heading: "Pilot field folio: independent transfer",
    instruction: "Complete the fresh case from its supplied inputs. Nothing from the primary or retrieval forms carries into this attempt.",
  }),
  transfer_repair: Object.freeze({
    heading: "Teacher review: transfer attempt",
    instruction: "Review only the listed boundaries. No prior response or expected value will carry into the blank retry.",
  }),
  python_finalized: Object.freeze({
    heading: "Local Python objective finalized",
    instruction: "PY-010 evidence is finalized on this device. The City remains unchanged. No onward action is available here; any expedition check shown below is separate, fresh Pilot-owned work.",
  }),
});

const repairCopy = Object.freeze({
  result_is_list:
    "Recheck the result container used to collect the bounded comparison records.",
  one_record_per_exposed_index:
    "Trace one aligned index and verify that the supplied append is reached once.",
  exact_record_keys_and_index_order:
    "Keep the supplied record shape and aligned index order unchanged.",
  corresponding_positions_correct:
    "Trace one aligned pair where the condition holds, then name only the branch taken.",
  difference_positions_correct:
    "Trace one aligned pair where the condition does not hold, then name only the branch taken.",
  conditional_compares_exposed_values_at_same_index:
    "State the Boolean comparison between the two exposed values at one shared index.",
  sealed_source_marked_unavailable_none:
    "Keep the sealed source unavailable; do not compare it, infer a value, or relabel it.",
  inputs_unchanged_and_no_forbidden_operations:
    "Use only the three learner-owned fields; leave the supplied inputs and scaffold unchanged.",
  condition:
    "Rebuild what the condition compares at one aligned index without reopening the primary form.",
  trueBranch:
    "Name the responsibility of the branch taken when the condition holds; no label is supplied.",
  falseBranch:
    "Name the responsibility of the branch taken when the condition does not hold; no label is supplied.",
  unavailableBoundary:
    "Separate a supplied mismatch from a source that was never available; do not infer from missing input.",
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
  if (actionId === "BEGIN_EXTRACTION") {
    return "BEGIN FRESH EXTRACTION RECORD";
  }
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
                  : "This field is involved in at least one boundary listed below. No answer is supplied."}
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
      <h2 id={`${form}-scaffold-heading`}>Supplied bounded inputs and result shape</h2>
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
          <h2 id={`${state.activeGroup}-repair-heading`}>Answer-free review for this attempt</h2>
          <ul>
            {state.failedIds.map((failedId) => (
              <li key={failedId}>
                {repairCopy[failedId] ?? "Review this bounded check without reopening prior work."}
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
      <p className="python-floor-negative-authority">
        Course-authored practice runs offline on this device. Its evidence grants no access or service authority and is not a Microsoft exam item or exam guarantee.
      </p>
    </section>
  );
}
