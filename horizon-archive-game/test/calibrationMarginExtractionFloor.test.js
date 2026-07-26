import assert from "node:assert/strict";
import test from "node:test";
import {
  calibrationMarginExtractionAccessibility,
  calibrationMarginExtractionActions,
  createCalibrationMarginExtractionFloor,
  createCalibrationMarginExtractionIntent,
} from "../src/CalibrationMarginExtractionFloor.js";

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

function controller(options = {}) {
  return createCalibrationMarginExtractionFloor({
    acceptedPythonState: exactPythonP3,
    ...options,
  });
}

function intent(subject, action, token, modality = "pointer", overrides = {}) {
  return {
    ...createCalibrationMarginExtractionIntent(
      subject.getState(),
      action,
      modality,
      token,
    ),
    ...overrides,
  };
}

function begin(subject, token = "begin-extraction") {
  return subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.begin,
    token,
  ));
}

function fill(subject, values) {
  Object.entries(values).forEach(([name, value]) => {
    assert.equal(subject.updateField(name, value).status, "field_updated_private");
  });
}

function passPrimary(subject, token = "primary-pass") {
  fill(subject, correct.primary);
  return subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.submitPrimary,
    token,
  ));
}

function passRetrieval(subject, token = "retrieval-pass") {
  fill(subject, correct.retrieval);
  return subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.submitRetrieval,
    token,
  ));
}

function continueRetrieval(subject, token = "continue-retrieval") {
  return subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.continueRetrieval,
    token,
  ));
}

test("IE-EXP-001-003 exact Python P3 plus all seven modalities opens one blank primary", () => {
  for (const modality of calibrationMarginExtractionAccessibility.modalities) {
    const subject = controller();
    const entry = subject.getState();
    assert.equal(entry.activeGroup, "python_finalized");
    assert.deepEqual(entry.availableActions, ["BEGIN_EXTRACTION"]);
    const result = subject.dispatch(intent(
      subject,
      calibrationMarginExtractionActions.begin,
      `entry-${modality}`,
      modality,
    ));
    assert.equal(result.status, "extraction_primary_visible");
    assert.equal(result.state.activeGroup, "ie_primary");
    assert.equal(result.state.owner, "PILOT");
    assert.deepEqual(result.state.fieldValues, {
      input_boundary: "",
      output_contract: "",
      unsupported_rule: "",
    });
    assert.equal(result.state.confidence, "");
    assert.equal(result.state.privateWorkCleared, true);
    assert.deepEqual(result.state.focusIntent, {
      group: "ie_primary",
      target: "heading",
    });
  }
});

test("IE-EXP-003 candidate order is neutral and not a positional answer key", () => {
  const positions = [];
  const subject = controller();
  begin(subject);
  positions.push(...Object.entries(correct.primary).map(([dimension, value]) => (
    subject.getState().presentation.choices[dimension]?.indexOf(value)
  )).filter((value) => value >= 0));
  fill(subject, correct.primary);
  subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.submitPrimary,
    "neutral-order-primary-pass",
  ));
  continueRetrieval(subject, "neutral-order-continue");
  positions.push(...Object.entries(correct.retrieval).map(([dimension, value]) => (
    subject.getState().presentation.choices[dimension]?.indexOf(value)
  )).filter((value) => value >= 0));
  fill(subject, correct.retrieval);
  subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.submitRetrieval,
    "neutral-order-retrieval-pass",
  ));
  positions.push(...Object.entries(correct.transfer).map(([dimension, value]) => (
    subject.getState().presentation?.choices?.[dimension]?.indexOf(value)
  )).filter((value) => value >= 0));
  assert.deepEqual(new Set(positions), new Set([0, 1, 2]));
});

test("IE-EXP-004-005 incomplete primary preserves token; only current 3/3 commits P1", () => {
  const subject = controller();
  begin(subject);
  const token = "incomplete-then-pass";
  const incomplete = subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.submitPrimary,
    token,
  ));
  assert.equal(incomplete.status, "incomplete");
  assert.deepEqual(Object.keys(incomplete.state.fieldErrors), [
    "input_boundary",
    "output_contract",
    "unsupported_rule",
  ]);
  assert.equal(incomplete.state.focusIntent.target, "input_boundary");
  assert.equal(subject.getCheckpoint().checkpoint, "IE-P0");

  fill(subject, correct.primary);
  assert.equal(subject.updateConfidence("high").status, "confidence_updated_zero_credit");
  const passed = subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.submitPrimary,
    token,
  ));
  assert.equal(passed.status, "extraction_primary_finalized");
  assert.equal(passed.checkpoint, "IE-P1");
  assert.equal(passed.state.activeGroup, "ie_interlude");
  assert.equal(subject.getCheckpoint().evidence[0].confidence, "high");
});

test("IE-EXP-006-008 primary miss clears before actual-ID repair, retry and return", () => {
  const subject = controller();
  begin(subject);
  fill(subject, {
    ...correct.primary,
    input_boundary: subject.getState().presentation.choices.input_boundary
      .find((value) => value !== correct.primary.input_boundary),
  });
  subject.updateConfidence("medium");
  const miss = subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.submitPrimary,
    "primary-one-dimension-miss",
  ));
  assert.equal(miss.status, "extraction_actual_miss_repair");
  assert.deepEqual(miss.failedIds, ["input_boundary"]);
  assert.equal(miss.state.activeGroup, "ie_primary_repair");
  assert.deepEqual(miss.state.fieldValues, {});
  assert.equal(miss.state.confidence, "");
  assert.equal(miss.state.privateWorkCleared, true);
  assert.doesNotMatch(JSON.stringify(miss.state), /process_supplied_content_only/);

  const retry = subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.retryPrimary,
    "primary-blank-retry",
  ));
  assert.equal(retry.status, "extraction_blank_retry_ready");
  assert.deepEqual(retry.state.fieldValues, {
    input_boundary: "",
    output_contract: "",
    unsupported_rule: "",
  });
  assert.equal(retry.state.focusIntent.target, "input_boundary");
  subject.updateField("input_boundary", correct.primary.input_boundary);
  const returned = subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.returnPython,
    "primary-return",
  ));
  assert.equal(returned.status, "returned_to_python_write_free");
  assert.equal(returned.checkpoint, "IE-P0");
  assert.doesNotMatch(JSON.stringify(returned.state), /process_supplied_content_only/);
});

test("IE-EXP-009-010 interlude is zero credit, return preserves P1 and continue is fresh", () => {
  const subject = controller();
  begin(subject);
  passPrimary(subject);
  const before = JSON.stringify(subject.getCheckpoint());
  const returned = subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.returnPython,
    "interlude-return",
  ));
  assert.equal(returned.checkpoint, "IE-P1");
  assert.equal(JSON.stringify(subject.getCheckpoint()), before);

  const resumed = createCalibrationMarginExtractionFloor({
    acceptedPythonState: exactPythonP3,
    restoredCheckpoint: subject.getCheckpoint(),
    requireFreshEntry: true,
  });
  assert.equal(resumed.getState().activeGroup, "python_finalized");
  assert.equal(begin(resumed, "resume-p1-entry").state.activeGroup, "ie_interlude");
  assert.equal(JSON.stringify(resumed.getCheckpoint()), before);
  const retrieval = continueRetrieval(resumed);
  assert.equal(retrieval.status, "extraction_retrieval_visible");
  assert.deepEqual(retrieval.state.fieldValues, {
    input_boundary: "",
    output_contract: "",
    unsupported_rule: "",
  });
  assert.equal(JSON.stringify(resumed.getCheckpoint()), before);
});

test("IE-EXP-011-013 retrieval is blank, strict, repairable and alone commits P2", () => {
  const subject = controller();
  begin(subject);
  passPrimary(subject);
  continueRetrieval(subject);
  assert.deepEqual(subject.getState().fieldValues, {
    input_boundary: "",
    output_contract: "",
    unsupported_rule: "",
  });
  fill(subject, {
    ...correct.retrieval,
    unsupported_rule: subject.getState().presentation.choices.unsupported_rule
      .find((value) => value !== correct.retrieval.unsupported_rule),
  });
  const miss = subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.submitRetrieval,
    "retrieval-miss",
  ));
  assert.deepEqual(miss.failedIds, ["unsupported_rule"]);
  assert.deepEqual(miss.state.fieldValues, {});
  assert.equal(subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.retryRetrieval,
    "retrieval-retry",
  )).status, "extraction_blank_retry_ready");
  const pass = passRetrieval(subject);
  assert.equal(pass.status, "extraction_retrieval_finalized");
  assert.equal(pass.checkpoint, "IE-P2");
  assert.equal(pass.state.activeGroup, "ie_transfer");
  assert.deepEqual(pass.state.fieldValues, {
    input_boundary: "",
    output_contract: "",
    unsupported_rule: "",
    unsupported_explanation: "",
  });
});

test("IE-EXP-014-017 transfer is distinct, incomplete-safe and repairs exact union", () => {
  const subject = controller();
  begin(subject);
  passPrimary(subject);
  continueRetrieval(subject);
  passRetrieval(subject);
  const state = subject.getState();
  assert.match(state.presentation.prompt, /audio-and-video/i);
  assert.doesNotMatch(
    JSON.stringify(state),
    /microphone|camera|permission|corrupted|SC-04 source/i,
  );
  fill(subject, correct.transfer);
  subject.updateField(
    "unsupported_explanation",
    "unavailable_input_can_be_reported_as_a_negative_result",
  );
  const explanationMiss = subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.submitTransfer,
    "explanation-only-miss",
  ));
  assert.deepEqual(explanationMiss.failedIds, ["unsupported_explanation"]);
  assert.deepEqual(explanationMiss.state.fieldValues, {});
  subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.retryTransfer,
    "transfer-retry-one",
  ));
  fill(subject, {
    ...correct.transfer,
    input_boundary: subject.getState().presentation.choices.input_boundary
      .find((value) => value !== correct.transfer.input_boundary),
    unsupported_explanation:
      "missing_input_can_be_inferred_from_available_modalities",
  });
  const mixed = subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.submitTransfer,
    "mixed-transfer-miss",
  ));
  assert.deepEqual(mixed.failedIds, [
    "input_boundary",
    "unsupported_explanation",
  ]);
});

test("IE-EXP-018-020 exact transfer plus explanation atomically finalizes only IE", () => {
  let stored = null;
  const subject = controller({
    commitCheckpoint(candidate) {
      stored = JSON.parse(JSON.stringify(candidate));
      return true;
    },
  });
  begin(subject);
  passPrimary(subject);
  continueRetrieval(subject);
  passRetrieval(subject);
  fill(subject, correct.transfer);
  const final = subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.submitTransfer,
    "transfer-final-pass",
  ));
  assert.equal(final.status, "extraction_finalized");
  assert.equal(final.checkpoint, "IE-P3");
  assert.equal(final.state.activeGroup, "ie_finalized");
  assert.deepEqual(final.state.finalizedSkillIds, ["RP003-IE-01"]);
  assert.deepEqual(final.state.availableActions, []);
  assert.equal(final.state.privateWorkCleared, true);
  assert.deepEqual(stored.evidence.map((item) => item.form), [
    "primary",
    "retrieval",
    "transfer",
    "unsupported_explanation",
  ]);
  assert.doesNotMatch(JSON.stringify(stored), /PY-010|observation|save|bearing/);
});

test("IE-EXP-021 exact P1/P2/P3 resume reconstructs only first incomplete boundary", () => {
  const first = controller();
  begin(first);
  passPrimary(first);
  const p1 = first.getCheckpoint();
  const resumedP1 = createCalibrationMarginExtractionFloor({
    restoredCheckpoint: p1,
  });
  assert.equal(resumedP1.getState().activeGroup, "ie_interlude");
  continueRetrieval(first);
  passRetrieval(first);
  const p2 = first.getCheckpoint();
  const resumedP2 = createCalibrationMarginExtractionFloor({
    restoredCheckpoint: p2,
  });
  assert.equal(resumedP2.getState().activeGroup, "ie_transfer");
  assert.equal(Object.values(resumedP2.getState().fieldValues).every(
    (value) => value === "",
  ), true);
  fill(first, correct.transfer);
  first.dispatch(intent(
    first,
    calibrationMarginExtractionActions.submitTransfer,
    "resume-final-pass",
  ));
  const resumedP3 = createCalibrationMarginExtractionFloor({
    restoredCheckpoint: first.getCheckpoint(),
  });
  assert.equal(resumedP3.getState().activeGroup, "ie_finalized");
  assert.deepEqual(resumedP3.getState().availableActions, []);
});

test("IE-EXP-022 invalid/private/stale input fails before a future valid token", () => {
  const subject = controller();
  const token = "valid-after-invalid";
  for (const bad of [
    intent(subject, calibrationMarginExtractionActions.begin, token, "automatic"),
    intent(subject, calibrationMarginExtractionActions.begin, token, "pointer", {
      expectedOwner: "PILOT",
    }),
    intent(subject, calibrationMarginExtractionActions.begin, token, "pointer", {
      privateResponse: "PRIVATE",
    }),
    intent(subject, "BEGIN_EXTRACTION + SAVE", token),
  ]) {
    assert.equal(subject.dispatch(bad).status, "rejected");
  }
  assert.equal(begin(subject, token).status, "extraction_primary_visible");
});

test("IE-EXP-023 failed checkpoint preserves P2 and reconstructs blank transfer", () => {
  let commits = 0;
  const subject = controller({
    commitCheckpoint() {
      commits += 1;
      return commits < 3;
    },
  });
  begin(subject);
  passPrimary(subject);
  continueRetrieval(subject);
  passRetrieval(subject);
  const before = JSON.stringify(subject.getCheckpoint());
  fill(subject, correct.transfer);
  const failure = subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.submitTransfer,
    "transfer-commit-failure",
  ));
  assert.equal(failure.status, "extraction_checkpoint_commit_failed_recovered");
  assert.equal(failure.state.activeGroup, "ie_transfer");
  assert.equal(failure.state.checkpoint, "IE-P2");
  assert.equal(Object.values(failure.state.fieldValues).every(
    (value) => value === "",
  ), true);
  assert.equal(JSON.stringify(subject.getCheckpoint()), before);
});

test("IE-EXP-024/029/031-033 state exposes one owner and no private/later/world authority", () => {
  const subject = controller();
  begin(subject);
  fill(subject, correct.primary);
  subject.dispatch(intent(
    subject,
    calibrationMarginExtractionActions.submitPrimary,
    "boundary-primary-pass",
  ));
  const serialized = JSON.stringify(subject.getState());
  assert.equal(["PILOT", "TEACHER", "SYSTEM"].includes(subject.getState().owner), true);
  assert.doesNotMatch(
    serialized,
    /localStorage|sessionStorage|indexedDB|fetch|Foundry|Azure|CM-40|SAVE EXPEDITION NOTE|RP-004|RP-013|successor":\s*"|authorityGranted":true|worldStateChanged":true/i,
  );
});
