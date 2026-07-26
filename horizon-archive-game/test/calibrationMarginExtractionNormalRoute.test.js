import assert from "node:assert/strict";
import test from "node:test";
import contract from "../../curriculum/readiness/RP-003/contract.json" with { type: "json" };
import {
  createCalibrationMarginNormalEntry,
  createCalibrationMarginNormalEntryIntent,
} from "../src/CalibrationMarginNormalEntry.js";
import {
  calibrationMarginExtractionActions,
  createCalibrationMarginExtractionIntent,
} from "../src/CalibrationMarginExtractionFloor.js";
import {
  createCalibrationMarginPythonCheckpointAdapter,
  createCalibrationMarginPythonEvidenceRecord,
} from "../src/CalibrationMarginPythonCheckpoint.js";

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

function pythonP3() {
  const adapter = createCalibrationMarginPythonCheckpointAdapter();
  const allPython = Object.fromEntries(
    contract.python_contract.checks.map((checkId) => [checkId, true]),
  );
  const allRetrieval = {
    condition: true,
    trueBranch: true,
    falseBranch: true,
    unavailableBoundary: true,
  };
  adapter.append(createCalibrationMarginPythonEvidenceRecord("primary", allPython));
  adapter.append(createCalibrationMarginPythonEvidenceRecord("retrieval", allRetrieval));
  adapter.append(createCalibrationMarginPythonEvidenceRecord("transfer", allPython));
  return adapter.getState();
}

function options(overrides = {}) {
  const verifiedRestoreState = {
    phase: "verified_restore",
    boardState: "SC-03-50",
    owner: "SYSTEM // EXPEDITION STATE",
    privateWorkCleared: true,
    transientWorkCleared: true,
    cityStateDelta: null,
    replayedEvents: [],
    progression: {
      civicComparisonSaved: true,
      nextSurveyDirectionMarked: true,
      rp002Checkpoint: "comparison_complete",
    },
  };
  return {
    verifiedRestoreState,
    returnedCityThreshold: {
      status: "returned_to_city_threshold_write_free",
      state: verifiedRestoreState,
      route: {
        writePerformed: false,
        continuation: "continuation",
        cityStateDelta: null,
        state: {
          status: "ready",
          checkpoint: "city_threshold",
          boardId: "SC-02-50",
          continuation: "continuation",
          cityStateDelta: null,
          worldStateDelta: null,
          accessStateDelta: null,
        },
      },
    },
    restoredPythonCheckpoint: pythonP3(),
    ...overrides,
  };
}

function intent(subject, action, token, modality = "pointer") {
  return createCalibrationMarginExtractionIntent(
    subject.getState(),
    action,
    modality,
    token,
  );
}

function fill(subject, values) {
  Object.entries(values).forEach(([name, value]) => {
    assert.equal(subject.updateField(name, value).status, "field_updated_private");
  });
}

function begin(subject, token = "normal-ie-begin") {
  return subject.dispatch(createCalibrationMarginNormalEntryIntent(
    calibrationMarginExtractionActions.begin,
    "screen_reader",
    token,
    "PY010-P3",
  ));
}

test("IE-EXP-001 normal exact Python P3 exposes one fresh extraction action only", () => {
  const subject = createCalibrationMarginNormalEntry(options());
  const state = subject.getState();
  assert.equal(state.shellVersion, "SS-RP003-PY010-v1");
  assert.equal(state.phase, "PY010-P3");
  assert.deepEqual(state.finalizedSkillIds, ["PY-010"]);
  assert.deepEqual(state.availableActions, ["BEGIN_EXTRACTION"]);
  const result = begin(subject);
  assert.equal(result.status, "extraction_primary_visible");
  assert.equal(result.state.shellVersion, "SS-RP003-IE01-v1");
  assert.equal(result.state.activeGroup, "ie_primary");
  assert.equal(result.state.focusIntent.target, "heading");
});

test("IE-EXP-009-020 normal route finalizes only ordered IE evidence and preserves Python", () => {
  let stored = null;
  const sourcePython = pythonP3();
  const sourceBytes = JSON.stringify(sourcePython);
  const subject = createCalibrationMarginNormalEntry(options({
    restoredPythonCheckpoint: sourcePython,
    commitExtractionCheckpoint(candidate) {
      stored = JSON.parse(JSON.stringify(candidate));
      return true;
    },
  }));
  begin(subject);
  fill(subject, correct.primary);
  assert.equal(subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.submitPrimary,
    "normal-ie-primary-pass",
  )).status, "extraction_primary_finalized");
  assert.equal(stored.checkpoint, "IE-P1");
  assert.equal(subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.continueRetrieval,
    "normal-ie-retrieval-continue",
  )).status, "extraction_retrieval_visible");
  fill(subject, correct.retrieval);
  assert.equal(subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.submitRetrieval,
    "normal-ie-retrieval-pass",
  )).status, "extraction_retrieval_finalized");
  assert.equal(stored.checkpoint, "IE-P2");
  fill(subject, correct.transfer);
  const final = subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.submitTransfer,
    "normal-ie-transfer-pass",
  ));
  assert.equal(final.status, "extraction_finalized");
  assert.equal(final.state.activeGroup, "ie_finalized");
  assert.deepEqual(final.state.finalizedSkillIds, ["RP003-IE-01"]);
  assert.deepEqual(final.state.availableActions, []);
  assert.equal(JSON.stringify(subject.getPythonCheckpoint()), sourceBytes);
  assert.deepEqual(stored.evidence.map((item) => item.form), [
    "primary",
    "retrieval",
    "transfer",
    "unsupported_explanation",
  ]);
  assert.doesNotMatch(
    JSON.stringify(final.state),
    /CM-40|"reviewEligibility":true|"saveEligibility":true|bearing|RP-004|RP-013|authorityGranted":true|worldStateChanged":true/i,
  );
});

test("IE-EXP-008/010 P0 and P1 returns are private-cleared and require fresh entry", () => {
  const subject = createCalibrationMarginNormalEntry(options());
  begin(subject);
  subject.updateField("input_boundary", correct.primary.input_boundary);
  const p0Return = subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.returnPython,
    "normal-ie-p0-return",
  ));
  assert.equal(p0Return.status, "returned_to_python_write_free");
  assert.equal(p0Return.state.activeGroup, "python_finalized");
  assert.deepEqual(p0Return.state.availableActions, ["BEGIN_EXTRACTION"]);
  assert.doesNotMatch(JSON.stringify(p0Return.state), /process_supplied_content_only/);

  begin(subject, "normal-ie-p0-reentry");
  fill(subject, correct.primary);
  subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.submitPrimary,
    "normal-ie-p1-pass",
  ));
  const p1 = JSON.stringify(subject.getExtractionCheckpoint());
  const p1Return = subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.returnPython,
    "normal-ie-p1-return",
  ));
  assert.equal(p1Return.state.activeGroup, "python_finalized");
  assert.equal(JSON.stringify(subject.getExtractionCheckpoint()), p1);
  const reopened = begin(subject, "normal-ie-p1-reentry");
  assert.equal(reopened.state.activeGroup, "ie_interlude");
  assert.equal(JSON.stringify(subject.getExtractionCheckpoint()), p1);
});

test("IE-EXP-021/022 exact P1 resumes interlude; contaminated IE sanitizes to P0", () => {
  let p1 = null;
  const first = createCalibrationMarginNormalEntry(options({
    commitExtractionCheckpoint(candidate) {
      p1 = JSON.parse(JSON.stringify(candidate));
      return true;
    },
  }));
  begin(first);
  fill(first, correct.primary);
  first.dispatch(intent(
    first,
    calibrationMarginExtractionActions.submitPrimary,
    "normal-ie-resume-p1",
  ));
  const resumed = createCalibrationMarginNormalEntry(options({
    restoredExtractionCheckpoint: p1,
  }));
  assert.equal(resumed.getState().activeGroup, "ie_interlude");
  assert.equal(resumed.getState().checkpoint, "IE-P1");

  const contaminated = createCalibrationMarginNormalEntry(options({
    restoredExtractionCheckpoint: { ...p1, privateResponse: "PRIVATE" },
  }));
  assert.equal(contaminated.getState().activeGroup, "python_finalized");
  assert.deepEqual(contaminated.getState().availableActions, ["BEGIN_EXTRACTION"]);
  assert.equal(contaminated.getExtractionCheckpoint(), null);
  assert.doesNotMatch(JSON.stringify(contaminated.getState()), /PRIVATE/);
});

test("IE-EXP-020/032 Tour and passive state produce zero extraction evidence", () => {
  const tour = createCalibrationMarginNormalEntry({ mode: "demo_tour" });
  assert.notEqual(tour.getState().phase, "PY010-P3");
  assert.equal(
    tour.getState().availableActions?.includes("BEGIN_EXTRACTION") ?? false,
    false,
  );
  const subject = createCalibrationMarginNormalEntry(options());
  const before = JSON.stringify(subject.getState());
  assert.equal(subject.getExtractionCheckpoint(), null);
  assert.equal(JSON.stringify(subject.getState()), before);
});
