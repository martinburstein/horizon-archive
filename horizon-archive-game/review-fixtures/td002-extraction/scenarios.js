import {
  calibrationMarginExtractionActions,
  createCalibrationMarginExtractionFloor,
  createCalibrationMarginExtractionIntent,
} from "../../src/CalibrationMarginExtractionFloor.js";

export const TD002_EXTRACTION_REVIEW_FIXTURE =
  "TD002_EXTRACTION_REVIEW_FIXTURE";
export const extractionReviewScenarios = Object.freeze([
  "blank-primary",
  "primary-repair-input-boundary",
  "primary-repair-output-contract",
  "primary-repair-unsupported-rule",
  "interlude",
  "blank-retrieval",
  "blank-transfer",
  "explanation-only-repair",
  "finalized-p3",
]);

const correct = Object.freeze({
  primary: Object.freeze({
    input_boundary: "process_supplied_content_only",
    output_contract: "schema_aligned_structured_fields_with_provenance",
    unsupported_rule: "preserve_unavailable_field_as_null_do_not_infer",
  }),
  retrieval: Object.freeze({
    input_boundary: "identify_supplied_modalities_and_sources",
    output_contract: "return_requested_fields_in_the_defined_schema",
    unsupported_rule: "ground_supported_values_and_leave_unsupported_values_null",
  }),
  transfer: Object.freeze({
    input_boundary: "process_the_available_video_without_claiming_audio_analysis",
    output_contract: "return_schema_fields_with_source_provenance",
    unsupported_rule: "keep_audio_only_fields_null_until_audio_is_supplied",
    unsupported_explanation:
      "unavailable_input_cannot_support_an_extracted_value",
  }),
});

const exactPythonP3 = Object.freeze({
  version: "rp003.python-floor.v1",
  shellVersion: "SS-RP003-PY010-v1",
  packetId: "RP-003",
  boardState: "SC-04",
  phase: "PY010-P3",
  activeGroup: "python_finalized",
  owner: "SYSTEM",
  checkpoint: "P3",
  finalizedSkillIds: Object.freeze(["PY-010"]),
  continuation: "continuation",
  cityStateDelta: null,
  worldStateDelta: null,
  accessStateDelta: null,
  successor: null,
  privateWorkCleared: true,
  transientWorkCleared: true,
  saveEligibility: false,
  authorityGranted: false,
  externalActionEnabled: false,
  worldStateChanged: false,
});

function intent(controller, action, token) {
  return createCalibrationMarginExtractionIntent(
    controller.getState(),
    action,
    "screen_reader",
    token,
  );
}

function setValues(controller, values) {
  Object.entries(values).forEach(([name, value]) => {
    controller.updateField(name, value);
  });
}

function begin() {
  const controller = createCalibrationMarginExtractionFloor({
    acceptedPythonState: exactPythonP3,
  });
  controller.dispatch(intent(
    controller,
    calibrationMarginExtractionActions.begin,
    "fixture-begin",
  ));
  return controller;
}

function passPrimary(controller) {
  setValues(controller, correct.primary);
  controller.dispatch(intent(
    controller,
    calibrationMarginExtractionActions.submitPrimary,
    "fixture-primary-pass",
  ));
}

function continueToRetrieval(controller) {
  controller.dispatch(intent(
    controller,
    calibrationMarginExtractionActions.continueRetrieval,
    "fixture-retrieval-continue",
  ));
}

function passRetrieval(controller) {
  setValues(controller, correct.retrieval);
  controller.dispatch(intent(
    controller,
    calibrationMarginExtractionActions.submitRetrieval,
    "fixture-retrieval-pass",
  ));
}

function passTransfer(controller) {
  setValues(controller, correct.transfer);
  controller.dispatch(intent(
    controller,
    calibrationMarginExtractionActions.submitTransfer,
    "fixture-transfer-pass",
  ));
}

function singleDimensionMiss(dimension) {
  const controller = begin();
  const values = { ...correct.primary };
  values[dimension] = controller.getState().presentation.choices[dimension]
    .find((value) => value !== correct.primary[dimension]);
  setValues(controller, values);
  controller.dispatch(intent(
    controller,
    calibrationMarginExtractionActions.submitPrimary,
    `fixture-${dimension}-miss`,
  ));
  return controller;
}

export function createExtractionReviewScenario(name) {
  if (!extractionReviewScenarios.includes(name)) {
    throw new TypeError("A closed TD-002 extraction review scenario is required.");
  }
  if (name.startsWith("primary-repair-")) {
    return singleDimensionMiss(
      name.replace("primary-repair-", "").replaceAll("-", "_"),
    ).getState();
  }

  const controller = begin();
  if (name === "blank-primary") return controller.getState();
  passPrimary(controller);
  if (name === "interlude") return controller.getState();
  continueToRetrieval(controller);
  if (name === "blank-retrieval") return controller.getState();
  passRetrieval(controller);
  if (name === "blank-transfer") return controller.getState();
  if (name === "explanation-only-repair") {
    setValues(controller, {
      ...correct.transfer,
      unsupported_explanation:
        "unavailable_input_can_be_reported_as_a_negative_result",
    });
    controller.dispatch(intent(
      controller,
      calibrationMarginExtractionActions.submitTransfer,
      "fixture-explanation-only-miss",
    ));
    return controller.getState();
  }
  passTransfer(controller);
  return controller.getState();
}
