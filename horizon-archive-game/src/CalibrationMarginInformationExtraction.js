import contract from "../../curriculum/readiness/RP-003/contract.json" with { type: "json" };

export const CALIBRATION_MARGIN_IE_DIMENSIONS = Object.freeze([
  ...contract.ai901_contract.dimensions,
]);
export const CALIBRATION_MARGIN_IE_FORMS = Object.freeze([
  "primary",
  "retrieval",
  "transfer",
]);
export const CALIBRATION_MARGIN_UNSUPPORTED_EXPLANATION =
  "unavailable_input_cannot_support_an_extracted_value";

const formSpecifications = Object.freeze(Object.fromEntries(
  CALIBRATION_MARGIN_IE_FORMS.map((form) => [
    form,
    Object.freeze({ ...contract.ai901_contract.forms[form][0] }),
  ]),
));

const distractors = Object.freeze({
  primary: Object.freeze({
    input_boundary: Object.freeze([
      "process_every_referenced_source_even_when_not_supplied",
      "infer_the_missing_source_from_the_supplied_images",
    ]),
    output_contract: Object.freeze([
      "return_a_free_form_summary_without_provenance",
      "return_schema_fields_without_source_links",
    ]),
    unsupported_rule: Object.freeze([
      "record_the_unavailable_field_as_a_negative_result",
      "infer_the_unavailable_value_from_other_sources",
    ]),
  }),
  retrieval: Object.freeze({
    input_boundary: Object.freeze([
      "treat_every_named_modality_as_supplied",
      "use_the_requested_schema_as_proof_of_source_availability",
    ]),
    output_contract: Object.freeze([
      "return_an_unstructured_description",
      "add_fields_outside_the_defined_schema",
    ]),
    unsupported_rule: Object.freeze([
      "convert_unsupported_values_to_false",
      "fill_unsupported_values_from_context",
    ]),
  }),
  transfer: Object.freeze({
    input_boundary: Object.freeze([
      "claim_audio_analysis_from_the_video_track",
      "treat_the_missing_audio_file_as_silent_audio",
    ]),
    output_contract: Object.freeze([
      "return_schema_fields_without_source_provenance",
      "replace_the_requested_schema_with_a_narrative_summary",
    ]),
    unsupported_rule: Object.freeze([
      "mark_audio_only_fields_as_negative",
      "infer_audio_only_fields_from_video",
    ]),
  }),
});

const correctPositions = Object.freeze({
  primary: Object.freeze({
    input_boundary: 1,
    output_contract: 2,
    unsupported_rule: 0,
  }),
  retrieval: Object.freeze({
    input_boundary: 2,
    output_contract: 0,
    unsupported_rule: 1,
  }),
  transfer: Object.freeze({
    input_boundary: 0,
    output_contract: 1,
    unsupported_rule: 2,
  }),
});

function neutralChoices(form, dimension) {
  const options = [...distractors[form][dimension]];
  options.splice(
    correctPositions[form][dimension],
    0,
    formSpecifications[form][dimension],
  );
  return Object.freeze(options);
}

const choices = Object.freeze(Object.fromEntries(
  CALIBRATION_MARGIN_IE_FORMS.map((form) => [
    form,
    Object.freeze(Object.fromEntries(
      CALIBRATION_MARGIN_IE_DIMENSIONS.map((dimension) => [
        dimension,
        neutralChoices(form, dimension),
      ]),
    )),
  ]),
));

export function getCalibrationMarginInformationExtractionPresentation(form) {
  const specification = formSpecifications[form];
  if (!specification) {
    throw new TypeError("form must be primary, retrieval, or transfer.");
  }
  return Object.freeze({
    form,
    caseId: specification.id,
    prompt: specification.prompt,
    dimensions: CALIBRATION_MARGIN_IE_DIMENSIONS,
    choices: choices[form],
  });
}

export function evaluateCalibrationMarginInformationExtraction(form, answers) {
  const specification = formSpecifications[form];
  if (!specification) {
    throw new TypeError("form must be primary, retrieval, or transfer.");
  }
  const correctness = Object.fromEntries(
    CALIBRATION_MARGIN_IE_DIMENSIONS.map((dimension) => [
      dimension,
      answers?.[specification.id]?.[dimension] === specification[dimension],
    ]),
  );
  return Object.freeze({
    form,
    caseId: specification.id,
    correctness: Object.freeze(correctness),
    score: Object.values(correctness).filter(Boolean).length,
    passed: Object.values(correctness).every(Boolean),
  });
}

export function evaluateCalibrationMarginUnsupportedExplanation(value) {
  return Object.freeze({
    correctness: Object.freeze({
      unavailable_input_cannot_support_value:
        value === CALIBRATION_MARGIN_UNSUPPORTED_EXPLANATION,
    }),
    passed: value === CALIBRATION_MARGIN_UNSUPPORTED_EXPLANATION,
  });
}
