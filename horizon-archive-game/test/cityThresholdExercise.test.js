import test from "node:test";
import assert from "node:assert/strict";
import {
  CITY_THRESHOLD_CONTINUATION,
  anchorPacketReference,
  anchorProbeChecks,
  cityThresholdBoards,
  cityThresholdHotspots,
  commitCityThresholdAnchor,
  createCityThresholdSave,
  cum01Forms,
  evaluateAnchorExplanation,
  evaluateAnchorPacketSource,
  evaluateCum01Form,
  evaluateSafetyExplanation,
  getCityThresholdResumeBoard,
  sanitizeCityThresholdSave,
  withAnchorExplanation,
  withAnchorProbeResult,
  withCum01Result,
  withSafetyExplanation,
} from "../src/cityThresholdExercise.js";

const correctAnchorExplanation = {
  list_role: "ordered observation collection",
  dictionary_role: "named nested state",
  json_role: "string interchange requires parsing and serialization",
};

const correctSafetyExplanation = {
  valid_output_boundary: "valid output is not authority to act",
  exam_claim_boundary: "internal readiness is not an exam guarantee",
  external_action_boundary: "external action needs separate scope authority and privacy review",
};

function referenceCumAnswers(form) {
  return Object.fromEntries(cum01Forms[form].map((item) => [item.id, { decision: item.decision, reason: item.reason }]));
}

function completeEvidence() {
  let save = createCityThresholdSave();
  save = withAnchorProbeResult(save, evaluateAnchorPacketSource(anchorPacketReference));
  save = withAnchorExplanation(save, evaluateAnchorExplanation(correctAnchorExplanation));
  save = withCum01Result(save, evaluateCum01Form("primary", referenceCumAnswers("primary")));
  save = withCum01Result(save, evaluateCum01Form("transfer", referenceCumAnswers("transfer")));
  save = withSafetyExplanation(save, evaluateSafetyExplanation(correctSafetyExplanation));
  return save;
}

test("locked board order and all canonical/narrow A2 rectangles remain exact", () => {
  assert.deepEqual(cityThresholdBoards, ["SC-02-00", "SC-02-10", "SC-02-20", "SC-02-30", "SC-02-40", "SC-02-50"]);
  assert.deepEqual(cityThresholdHotspots["SC-02-00"].cycles, { canonical: [36, 154, 158, 140], narrow: [10, 64, 82, 64] });
  assert.deepEqual(cityThresholdHotspots["SC-02-10"].stopSeam, { canonical: [214, 138, 190, 160], narrow: [105, 58, 102, 78] });
  assert.deepEqual(cityThresholdHotspots["SC-02-20"].identity, { canonical: [382, 126, 180, 174], narrow: [206, 50, 92, 82] });
  assert.deepEqual(cityThresholdHotspots["SC-02-30"].anchor, { canonical: [246, 258, 148, 92], narrow: [112, 126, 96, 54] });
  assert.deepEqual(cityThresholdHotspots["SC-02-50"].forward, { canonical: [492, 296, 148, 64], narrow: [248, 136, 72, 44] });
  for (const zones of Object.values(cityThresholdHotspots)) {
    for (const rect of Object.values(zones)) {
      assert.ok(rect.canonical[2] >= 44 && rect.canonical[3] >= 44);
      assert.ok(rect.narrow[2] >= 44 && rect.narrow[3] >= 44);
    }
  }
});

test("the fresh PY-020 reference passes exactly ten independently named checks", () => {
  const result = evaluateAnchorPacketSource(anchorPacketReference);
  assert.equal(anchorProbeChecks.length, 10);
  assert.equal(result.score, 10);
  assert.equal(result.passed, true);
  assert.deepEqual(result.failedChecks, []);
});

test("PY-020 rejects packet replacement, merged records, continuation mutation, city delta, and missing round trip independently", () => {
  const cases = [
    [anchorPacketReference.replace("packet = json.loads(anchor_packet)", "packet = {}"), "parses_supplied_json"],
    [anchorPacketReference.replace('{"kind": "identity_record_closed", "observed": True}', '{"kind": "environmental_access_open", "observed": True}'), "appends_identity_record"],
    [anchorPacketReference.replace('packet["expedition_state"]["anchor_recorded"] = True', 'packet["continuation"] = "changed"'), "preserves_continuation"],
    [anchorPacketReference.replace('packet["expedition_state"]["anchor_recorded"] = True', 'packet["city_state_delta"] = {"opened": True}'), "preserves_null_city_delta"],
    [anchorPacketReference.replace('packet["expedition_state"]["anchor_recorded"] = True', 'packet["continuation"].strip()'), "changes_only_allowed_fields"],
    [anchorPacketReference.replace("round_trip = json.loads(encoded)", ""), "verifies_json_round_trip"],
  ];
  for (const [source, check] of cases) assert.equal(evaluateAnchorPacketSource(source).checks[check], false, check);
});

test("CUM-01 reuses both packaged eight-item forms and requires both dimensions for 16/16", () => {
  for (const form of ["primary", "transfer"]) {
    const pass = evaluateCum01Form(form, referenceCumAnswers(form));
    assert.equal(pass.score, 16);
    assert.equal(pass.passed, true);
    assert.equal(pass.objectiveIds.length, 15);
    const first = cum01Forms[form][0];
    const miss = evaluateCum01Form(form, { ...referenceCumAnswers(form), [first.id]: { decision: first.decision, reason: "wrong" } });
    assert.equal(miss.score, 15);
    assert.equal(miss.passed, false);
    assert.ok(miss.remediationLessonIds.length > 0);
  }
});

test("atomic expedition commit is impossible until 10/10, structure, both 16/16 forms, and safety explanation pass", () => {
  const emptyAttempt = commitCityThresholdAnchor(createCityThresholdSave());
  assert.equal(emptyAttempt.cityThresholdAnchorRecorded, false);
  assert.equal(emptyAttempt.civicDistrictRouteAvailable, false);

  const ready = completeEvidence();
  assert.equal(ready.python.masteryStatus, "mastered");
  assert.equal(ready.cum01.masteryStatus, "mastered");
  assert.equal(ready.cityThresholdAnchorRecorded, false);
  assert.equal(ready.civicDistrictRouteAvailable, false);

  const committed = commitCityThresholdAnchor(ready);
  assert.equal(committed.cityThresholdAnchorRecorded, true);
  assert.equal(committed.civicDistrictRouteAvailable, true);
  assert.equal(committed.checkpoint, "anchor_complete");
  assert.equal(committed.continuation, CITY_THRESHOLD_CONTINUATION);
  assert.equal(committed.cityStateDelta, null);
  assert.equal(getCityThresholdResumeBoard(committed), "SC-02-50");
});

test("save sanitizer keeps only bounded evidence and rejects forged split flags and private working data", () => {
  const safe = sanitizeCityThresholdSave({
    ...completeEvidence(),
    cityThresholdAnchorRecorded: true,
    civicDistrictRouteAvailable: false,
    learnerSource: anchorPacketReference,
    rawAnswers: { private: true },
    credential: "secret",
    endpoint: "https://example.invalid",
    python: { ...completeEvidence().python, workingSource: anchorPacketReference, runtimeOutput: "private" },
    cum01: { ...completeEvidence().cum01, rawDecisions: { private: true }, personalNote: "private" },
    continuation: "forged",
    cityStateDelta: { opened: true },
  });
  assert.equal(safe.cityThresholdAnchorRecorded, false);
  assert.equal(safe.civicDistrictRouteAvailable, false);
  assert.equal(safe.continuation, CITY_THRESHOLD_CONTINUATION);
  assert.equal(safe.cityStateDelta, null);
  for (const key of ["learnerSource", "rawAnswers", "credential", "endpoint"]) assert.equal(key in safe, false);
  for (const key of ["workingSource", "runtimeOutput"]) assert.equal(key in safe.python, false);
  for (const key of ["rawDecisions", "personalNote"]) assert.equal(key in safe.cum01, false);
});

test("resume returns to entry, first incomplete scored boundary, or saved overview only", () => {
  assert.equal(getCityThresholdResumeBoard(createCityThresholdSave()), "SC-02-00");
  const pending = sanitizeCityThresholdSave({ ...createCityThresholdSave(), checkpoint: "python_pending" });
  assert.equal(getCityThresholdResumeBoard(pending), "SC-02-30");
  assert.equal(getCityThresholdResumeBoard(commitCityThresholdAnchor(completeEvidence())), "SC-02-50");
});
