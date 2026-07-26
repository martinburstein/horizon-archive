import { useLayoutEffect, useMemo, useRef, useState } from "react";
import cityOverviewImage from "../../Visual Direction/Production Masters/2026-07-15-photorealistic-demo/city-threshold-overview-master.png";
import { CanonicalGameFrame } from "./CanonicalGameFrame.jsx";
import { threeCurrentReachActions } from "./ThreeCurrentReachNormal.js";

const headings = Object.freeze({
  cm50_route: "Choose the next expedition movement",
  tr00_orient: "Three-Current Reach",
  tr10_relations: "Observe three equal physical relations",
  tr20_common_return: "Trace the apparent common return",
  tr30_python_primary: "Relate three sanitized replicas with one loop",
  tr30_python_retrieval: "Retrieve the loop boundary from memory",
  tr30_python_transfer: "Transfer the loop to a fresh replica set",
  tr30_workload_primary: "Identify six requested AI workloads",
  tr30_workload_retrieval: "Retrieve four workload boundaries",
  tr30_workload_transfer: "Transfer workload recognition to six new cases",
  tr30_modality: "Separate modality from requested workload",
  tr30_agentic: "Separate generation from agentic work",
  tr30_repair: "Review the named boundary",
  tr30_review: "Review independent expedition obligations",
  tr30_provenance: "Review local provenance",
  tr30_save_recovery: "Local note not replaced",
  tr40_restore: "Restored Three-Current expedition note",
  tr40_restore_recorded: "Restored note with outbound relation recorded",
});

const relationCopy = Object.freeze({
  suspended_matter_porous_relation:
    "Suspended matter remains visibly paired with a porous handling corridor.",
  cyclic_pressure_tensioned_relation:
    "Cyclic pressure remains visibly paired with a tensioned handling corridor.",
  conducted_heat_jointed_relation:
    "Conducted heat remains visibly paired with a jointed handling corridor.",
});

function actionTargetId(action) {
  return {
    [threeCurrentReachActions.observeSuspended]: "relation-suspended-action",
    [threeCurrentReachActions.observeCyclic]: "relation-cyclic-action",
    [threeCurrentReachActions.observeHeat]: "relation-heat-action",
    [threeCurrentReachActions.commonReturn]: "common-return-action",
    [threeCurrentReachActions.save]: "tr30-save-action",
    [threeCurrentReachActions.continuation]: "tr40-continuation-action",
    [threeCurrentReachActions.returnCalibration]: "return-calibration-action",
    [threeCurrentReachActions.returnThreshold]: "return-threshold-action",
  }[action];
}

export function ThreeCurrentReach({
  state,
  onAction,
  onFieldChange,
}) {
  const headingRef = useRef(null);
  const actionRefs = useRef(new Map());
  const fieldRefs = useRef(new Map());
  const [fields, setFields] = useState({});

  useLayoutEffect(() => {
    setFields({});
    const target = state?.focusIntent?.target;
    if (!target || target === state.headingId || target.endsWith("-heading")) {
      headingRef.current?.focus({ preventScroll: true });
      return;
    }
    (actionRefs.current.get(target) ?? fieldRefs.current.get(target))
      ?.focus({ preventScroll: true });
  }, [state.activeGroup, state.focusIntent?.target]);

  const observationStatus = useMemo(() => new Map(
    state.observationControls.map((item) => [item.action, item]),
  ), [state.observationControls]);

  function updateField(name, value) {
    setFields((previous) => ({ ...previous, [name]: value }));
    onFieldChange(name, value);
  }

  function actionButton(action) {
    const observation = observationStatus.get(action);
    const targetId = actionTargetId(action) ?? action;
    return (
      <button
        key={action}
        id={actionTargetId(action)}
        ref={(element) => {
          if (element) actionRefs.current.set(targetId, element);
          else actionRefs.current.delete(targetId);
        }}
        type="button"
        data-action-id={action}
        data-observation-id={observation?.observationId}
        disabled={observation?.recorded || undefined}
        aria-describedby={action.startsWith("RETURN TO ")
          ? "three-current-return-boundary"
          : undefined}
        onClick={(event) => onAction(action, event)}
      >
        {observation ? `${action} — ${observation.status}` : action}
      </button>
    );
  }

  function renderForm() {
    const form = state.form;
    if (!form) return null;
    if (form.kind === "python") {
      return (
        <section className="three-current-form" aria-labelledby={`${state.headingId}-instructions`}>
          <h2 id={`${state.headingId}-instructions`}>Sanitized replica exercise</h2>
          <p>
            The supplied sample dictionaries and lookup are course-owned,
            offline replicas. Write one loop that appends one ordered
            sample/corridor record per supplied item and leaves purpose unknown.
          </p>
          <pre aria-label={`${form.form} supplied replica shape`}>
            {JSON.stringify(form.starter, null, 2)}
          </pre>
          <label htmlFor={`${state.activeGroup}-editor`}>
            Python source
          </label>
          <textarea
            id={`${state.activeGroup}-editor`}
            ref={(element) => {
              if (element) fieldRefs.current.set(
                form.form === "primary"
                  ? "tr30-python-primary-editor"
                  : "tr30-python-transfer-editor",
                element,
              );
            }}
            value={fields.learnerSource ?? ""}
            aria-describedby={`${state.activeGroup}-help`}
            onChange={(event) => updateField("learnerSource", event.target.value)}
          />
          <small id={`${state.activeGroup}-help`}>
            Runs only against the supplied sanitized replicas. It cannot read
            or control the landscape, a live source, Azure, Foundry, or any
            external system.
          </small>
        </section>
      );
    }
    if (form.kind === "retrieval") {
      return (
        <fieldset className="three-current-form">
          <legend>Closed-note loop trace</legend>
          {form.fieldIds.map((fieldId, index) => (
            <label key={fieldId}>
              <span>{fieldId.replaceAll(/([A-Z])/g, " $1")}</span>
              <select
                ref={(element) => {
                  if (index === 0 && element) {
                    fieldRefs.current.set("tr30-python-retrieval-first", element);
                  }
                }}
                value={fields[fieldId] ?? ""}
                onChange={(event) => updateField(fieldId, event.target.value)}
              >
                <option value="">Choose one</option>
                {form.options[fieldId].map((option) => (
                  <option key={option} value={option}>
                    {option.replaceAll("_", " ")}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </fieldset>
      );
    }
    if (form.kind === "workload") {
      return (
        <div className="three-current-form">
          <p className="three-current-neutral-boundary">
            COURSE-AUTHORED NEUTRAL CASES · no landscape crop, material,
            movement, sound, or Builder feature supplies an answer.
          </p>
          {form.cases.map((scenario, caseIndex) => (
            <fieldset key={scenario.id}>
              <legend>{scenario.id} · {scenario.prompt}</legend>
              {form.dimensions.map((dimension, dimensionIndex) => {
                const name = `${scenario.id}.${dimension}`;
                return (
                  <label key={name}>
                    <span>{dimension.replaceAll("_", " ")}</span>
                    <select
                      ref={(element) => {
                        if (caseIndex === 0 && dimensionIndex === 0 && element) {
                          const focusId = `tr30-ai-${form.form}-first`;
                          fieldRefs.current.set(focusId, element);
                        }
                      }}
                      value={fields[name] ?? ""}
                      onChange={(event) => updateField(name, event.target.value)}
                    >
                      <option value="">Choose one</option>
                      {form.options[dimension].map((option) => (
                        <option key={option} value={option}>
                          {option.replaceAll("_", " ")}
                        </option>
                      ))}
                    </select>
                  </label>
                );
              })}
            </fieldset>
          ))}
        </div>
      );
    }
    return (
      <fieldset className="three-current-form">
        <legend>
          {form.form === "modality"
            ? "Which boundary keeps modality separate from workload?"
            : "Which boundary distinguishes agentic work?"}
        </legend>
        <label>
          <span>Boundary explanation</span>
          <select
            ref={(element) => {
              if (element) fieldRefs.current.set(
                form.form === "modality"
                  ? "tr30-modality-field"
                  : "tr30-agentic-field",
                element,
              );
            }}
            value={fields[form.form] ?? ""}
            onChange={(event) => updateField(form.form, event.target.value)}
          >
            <option value="">Choose one</option>
            {form.options.map((option) => (
              <option key={option} value={option}>
                {option.replaceAll("_", " ")}
              </option>
            ))}
          </select>
        </label>
      </fieldset>
    );
  }

  const worldAlt = state.boardState === "SC-04"
    ? "The restored Calibration Margin remains unchanged at its three-choice navigation boundary"
    : "A vast first-person working reach where suspended matter, cyclic pressure, and conducted heat follow three equally legible handling relations toward an apparent capped return";

  return (
    <CanonicalGameFrame enabled>
      <main
        className="game-shell city-threshold-screen three-current-reach"
        data-scene="three-current-reach"
        data-board={state.boardState}
        data-phase={state.phase}
        data-active-group={state.activeGroup}
      >
        <section className="city-world three-current-world" aria-label={`${state.boardState} invariant world`}>
          <img
            className="city-world-plate city-world-plate-native"
            src={cityOverviewImage}
            alt={worldAlt}
          />
        </section>
        <section
          className="city-command-panel three-current-panel"
          aria-labelledby={state.headingId}
        >
          <header className="three-current-heading">
            <p className="eyebrow">{state.owner}</p>
            <h1 ref={headingRef} id={state.headingId} tabIndex="-1">
              {headings[state.activeGroup] ?? state.phase}
            </h1>
            <p>
              {state.activeGroup === "tr10_relations"
                ? "The three observations are equal peers. Record them in any order; no observation creates course evidence."
                : state.activeGroup.startsWith("tr40")
                  ? "The local note is expedition-owned and verified. Nothing in the reach responded, and no completed event replayed."
                  : "The world remains invariant. Only the current expedition or course boundary can change."}
            </p>
          </header>

          <div
            id="three-current-status"
            className="extraction-floor-status"
            role="status"
            aria-live="polite"
            aria-atomic="true"
            data-message-id={state.statusMessageId}
          >
            <strong>System status</strong>
            <span>{state.statusMessage}</span>
          </div>

          {state.activeGroup === "tr10_relations" && (
            <ol className="three-current-relations">
              {state.observationControls.map((item) => (
                <li key={item.observationId}>
                  <strong>{item.status}</strong>
                  <span>{relationCopy[item.observationId]}</span>
                </li>
              ))}
            </ol>
          )}

          {state.activeGroup === "tr20_common_return" && (
            <section aria-labelledby="apparent-return-boundary">
              <h2 id="apparent-return-boundary">Apparent common return</h2>
              <p>
                The three visible relations appear to meet at one capped
                return. Its purpose, destination, and category remain unknown.
              </p>
            </section>
          )}

          {renderForm()}

          {state.failedIds.length > 0 && (
            <section className="three-current-repair" aria-labelledby="three-current-failed-boundaries">
              <h2 id="three-current-failed-boundaries">Named boundaries to review</h2>
              <ul>
                {state.failedIds.map((id) => <li key={id}>{id}</li>)}
              </ul>
              <p>No answer or prior response is retained here.</p>
            </section>
          )}

          {state.reviewRows.length > 0 && (
            <ol className="three-current-review" aria-label="Independent bounded review">
              {state.reviewRows.map((row) => (
                <li key={row.id}>
                  <strong>{row.label}</strong>
                  <span>{row.state}</span>
                </li>
              ))}
            </ol>
          )}

          {state.note && (
            <section className="three-current-note" aria-labelledby="three-current-note-heading">
              <h2 id="three-current-note-heading">Expedition-owned local note</h2>
              <ul>
                {state.note.relations.map((relation) => (
                  <li key={relation}>{relationCopy[relation]}</li>
                ))}
              </ul>
              <p>
                Apparent common return recorded; purpose unknown. Correspondence
                used sanitized replicas only.
              </p>
            </section>
          )}

          {state.availableActions.some((action) => action.startsWith("RETURN TO ")) && (
            <p id="three-current-return-boundary">
              PILOT // SAFE RETURN · Each return is explicit, write-free,
              replay-free, and grants no evidence, route, or world response.
            </p>
          )}

          <div
            className="extraction-floor-actions three-current-actions"
            role="group"
            aria-label={`${headings[state.activeGroup] ?? state.phase} actions`}
          >
            {state.availableActions.map(actionButton)}
          </div>

          <p className="extraction-floor-negative-authority">
            Offline local expedition work only. No live landscape, Azure,
            Foundry, credential, endpoint, request, response, external action,
            access, authority, exam standing, exam guarantee, or world response
            is created.
          </p>
        </section>
      </main>
    </CanonicalGameFrame>
  );
}
