import contract from "../../curriculum/readiness/RP-003/contract.json" with { type: "json" };
import {
  createCalibrationMarginPythonCheckpointAdapter,
  createCalibrationMarginPythonEvidenceRecord,
} from "../src/CalibrationMarginPythonCheckpoint.js";
import {
  createCalibrationMarginExtractionCheckpointAdapter,
  createCalibrationMarginExtractionEvidenceRecord,
} from "../src/CalibrationMarginExtractionCheckpoint.js";
import {
  CALIBRATION_MARGIN_REVIEW_SAVE_RECORD_VERSION,
} from "../src/CalibrationMarginReviewSave.js";

export function exactReviewSaveCheckpoints() {
  const python = createCalibrationMarginPythonCheckpointAdapter();
  const pythonDimensions = Object.fromEntries(
    contract.python_contract.checks.map((id) => [id, true]),
  );
  const retrieval = {
    condition: true,
    trueBranch: true,
    falseBranch: true,
    unavailableBoundary: true,
  };
  python.append(createCalibrationMarginPythonEvidenceRecord("primary", pythonDimensions));
  python.append(createCalibrationMarginPythonEvidenceRecord("retrieval", retrieval));
  python.append(createCalibrationMarginPythonEvidenceRecord("transfer", pythonDimensions));

  const extraction = createCalibrationMarginExtractionCheckpointAdapter();
  const ieDimensions = Object.fromEntries(
    contract.ai901_contract.dimensions.map((id) => [id, true]),
  );
  extraction.append(createCalibrationMarginExtractionEvidenceRecord("primary", ieDimensions));
  extraction.append(createCalibrationMarginExtractionEvidenceRecord("retrieval", ieDimensions));
  extraction.append([
    createCalibrationMarginExtractionEvidenceRecord("transfer", ieDimensions),
    createCalibrationMarginExtractionEvidenceRecord(
      "unsupported_explanation",
      { unavailable_input_cannot_support_value: true },
    ),
  ]);
  return { python: python.getState(), extraction: extraction.getState() };
}

export function exactReviewSaveRecord() {
  const checkpoints = exactReviewSaveCheckpoints();
  return {
    version: CALIBRATION_MARGIN_REVIEW_SAVE_RECORD_VERSION,
    packetId: "RP-003",
    mappingId: "RP003-A3-CALIBRATION-MARGIN",
    checkpoint: "calibration_margin_complete",
    continuation: "continuation",
    cityStateDelta: null,
    successor: null,
    note: {
      correspondence: "bounded_exposed_correspondence_observed",
      difference: "one_bounded_exposed_difference_observed",
      unavailable: "sealed_source_unavailable_and_unread",
    },
    evidence: [...checkpoints.python.evidence, ...checkpoints.extraction.evidence],
  };
}
