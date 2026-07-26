import { useLayoutEffect, useRef } from "react";
import {
  calibrationMarginExtractionActionLabels,
  calibrationMarginExtractionActions,
} from "./CalibrationMarginExtractionFloor.js";

const dimensionCopy = Object.freeze({
  input_boundary: Object.freeze({
    label: "Evidence actually supplied",
    help: "Choose the statement that accounts only for the course input present in this case.",
  }),
  output_contract: Object.freeze({
    label: "Record shape and source trace",
    help: "Choose how the requested fields remain structured and traceable to their supporting source.",
  }),
  unsupported_rule: Object.freeze({
    label: "Field without supporting input",
    help: "Choose how the record preserves a field that the supplied evidence cannot support.",
  }),
  unsupported_explanation: Object.freeze({
    label: "Reason for leaving an unsupported field unclaimed",
    help: "Choose why input that was not supplied cannot support an extracted value.",
  }),
});

const groupCopy = Object.freeze({
  ie_primary: Object.freeze({
    heading: "Pilot claim ledger: account for the supplied evidence",
    instruction: "Complete three blank responsibilities for this course case. No answer or prior selection is carried in.",
  }),
  ie_primary_repair: Object.freeze({
    heading: "Teacher review: reconstruct the primary claim",
    instruction: "Reconsider only the listed responsibilities. Every selection from the prior attempt has been cleared.",
  }),
  ie_interlude: Object.freeze({
    heading: "Primary claim recorded; the next check remains fresh",
    instruction: "This pause records nothing new. Continue deliberately when ready to reconstruct the boundary without notes.",
  }),
  ie_retrieval: Object.freeze({
    heading: "Pilot claim ledger: reconstruct without notes",
    instruction: "Rebuild the supplied-evidence, record-shape, and unsupported-field boundaries. No primary choices are present.",
  }),
  ie_retrieval_repair: Object.freeze({
    heading: "Teacher review: reconstruct the closed-note claim",
    instruction: "Reconsider only the listed responsibilities. No selection from the attempt remains.",
  }),
  ie_transfer: Object.freeze({
    heading: "Pilot claim ledger: hold the missing-input line",
    instruction: "Apply the boundary to a distinct course audio/video case. The referenced audio input was not supplied.",
  }),
  ie_transfer_repair: Object.freeze({
    heading: "Teacher review: reconstruct the missing-input claim",
    instruction: "Reconsider only the listed responsibilities or explanation boundary. The complete attempt has been cleared.",
  }),
  ie_finalized: Object.freeze({
    heading: "Local information-extraction record complete",
    instruction: "RP003-IE-01 is finalized on this device. Nothing was sent to a service. The City and route remain unchanged, and no onward action is available.",
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

const choiceCopy = Object.freeze({
  process_supplied_content_only:
    "Use only the maintenance images that were supplied",
  process_every_referenced_source_even_when_not_supplied:
    "Treat every referenced source as supplied",
  infer_the_missing_source_from_the_supplied_images:
    "Infer the missing source from the supplied images",
  schema_aligned_structured_fields_with_provenance:
    "Return the defined fields and trace each value to its source",
  return_a_free_form_summary_without_provenance:
    "Return a free-form summary without a source trace",
  return_schema_fields_without_source_links:
    "Return the defined fields without tracing their sources",
  preserve_unavailable_field_as_null_do_not_infer:
    "Keep the unsupported field null; do not infer a value",
  record_the_unavailable_field_as_a_negative_result:
    "Record the unavailable field as a negative result",
  infer_the_unavailable_value_from_other_sources:
    "Infer the unavailable value from other sources",
  identify_supplied_modalities_and_sources:
    "Identify which source modalities were supplied",
  treat_every_named_modality_as_supplied:
    "Treat every named modality as supplied",
  use_the_requested_schema_as_proof_of_source_availability:
    "Treat a requested field as proof that its source was supplied",
  return_requested_fields_in_the_defined_schema:
    "Return only the requested fields in the defined schema",
  return_an_unstructured_description:
    "Return an unstructured description",
  add_fields_outside_the_defined_schema:
    "Add fields outside the defined schema",
  ground_supported_values_and_leave_unsupported_values_null:
    "Trace supported values to evidence and keep unsupported values null",
  convert_unsupported_values_to_false:
    "Convert unsupported values to false",
  fill_unsupported_values_from_context:
    "Fill unsupported values from surrounding context",
  process_the_available_video_without_claiming_audio_analysis:
    "Use the supplied video without claiming audio analysis",
  claim_audio_analysis_from_the_video_track:
    "Claim audio analysis from the video track",
  treat_the_missing_audio_file_as_silent_audio:
    "Treat the missing audio file as silent audio",
  return_schema_fields_with_source_provenance:
    "Return the schema fields with a source trace for each value",
  return_schema_fields_without_source_provenance:
    "Return schema fields without tracing their sources",
  replace_the_requested_schema_with_a_narrative_summary:
    "Replace the requested schema with a narrative summary",
  keep_audio_only_fields_null_until_audio_is_supplied:
    "Keep audio-only fields null until audio is supplied",
  mark_audio_only_fields_as_negative:
    "Mark audio-only fields as negative",
  infer_audio_only_fields_from_video:
    "Infer audio-only fields from the video",
  unavailable_input_can_be_reported_as_a_negative_result:
    "Unavailable input can be reported as a negative result",
  unavailable_input_cannot_support_an_extracted_value:
    "Input that was not supplied cannot support an extracted value",
  missing_input_can_be_inferred_from_available_modalities:
    "Missing input can be inferred from the available modalities",
});

export function getCalibrationMarginExtractionChoiceLabel(value) {
  const label = choiceCopy[value];
  if (!label) {
    throw new TypeError("Every extraction choice requires approved player-facing copy.");
  }
  return label;
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
            <span>{getCalibrationMarginExtractionChoiceLabel(choice)}</span>
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
          <p className="eyebrow">EXPEDITION TRAINING CASE // LOCAL</p>
          <h2 id={`${state.activeGroup}-source-heading`}>
            Case material and reporting boundary
          </h2>
          <p>
            <strong>Supplied input:</strong> {state.presentation.prompt}
          </p>
          <p>
            <strong>Output record:</strong> Account for the requested fields
            and the source supporting each value.
          </p>
          <p>
            <strong>Unavailable input:</strong> A source that was not supplied
            supports no value. It is not false, negative, or permission to
            infer.
          </p>
          <p>
            <strong>Provenance:</strong> This is course-authored local
            practice, not City evidence or a live Microsoft Foundry or Content
            Understanding analysis.
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
            Keep four things distinct: the input the course supplied, the
            requested record shape, the source trace for each supported value,
            and fields the supplied input cannot support. Opening this note
            records nothing and reveals no choice.
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
        Course-authored practice runs offline on this device; it does not send
        content to Microsoft Foundry or Content Understanding. It grants no
        service access, permission, or authority and is not a Microsoft exam
        item or an exam guarantee.
      </p>
    </section>
  );
}
