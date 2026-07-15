import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  CITY_THRESHOLD_CONTINUATION,
  anchorPacketReference,
  anchorProbeChecks,
  cityThresholdBoards,
  cityThresholdHotspots,
  getCityThresholdLayout,
  projectCityThresholdRect,
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
import { getCanonicalGameFrame } from "../src/canonicalFrame.js";

const cityCss = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");
const cityComponent = readFileSync(new URL("../src/CityThresholdStaging.jsx", import.meta.url), "utf8");

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

test("RP-001 child layout derives from the settled canonical-frame layout instead of host media queries", () => {
  assert.match(cityCss, /\.canonical-game-frame\[data-canonical-layout="narrow"\] \.city-threshold-screen \{ width: 320px; height: 240px; \}/);
  assert.match(cityCss, /\.canonical-game-frame\[data-canonical-layout="narrow"\] \.city-world \{ width: 320px; height: 180px; \}/);
  assert.doesNotMatch(cityCss, /@media \(max-width: 639px\), \(max-height: 479px\)/);
  assert.match(cityCss, /\.city-threshold-screen \{[\s\S]*?overflow: clip;/);
  assert.match(cityCss, /\.city-world \{[\s\S]*?overflow: clip;/);

  for (const [hostWidth, hostHeight] of [[640, 480], [320, 240]]) {
    const parent = getCanonicalGameFrame(hostWidth, hostHeight);
    const child = getCityThresholdLayout(parent.layout);
    assert.equal(parent.layout, "narrow");
    assert.deepEqual(child, { width: parent.width, height: parent.height, worldHeight: parent.worldHeight, interfaceHeight: parent.interfaceHeight });
  }
});

test("settled completed and reload controls plus focused route remain inside both exact viewports", () => {
  assert.match(cityComponent, /return <CityHotspot rect=\{cityThresholdHotspots\[board\]\.forward\} label="ENTER CIVIC DISTRICT"/);
  assert.match(cityComponent, /<button onClick=\{onReturnToCredits\}>RETURN TO PROLOGUE CREDITS<\/button>/);

  for (const [hostWidth, hostHeight] of [[640, 480], [320, 240]]) {
    const parent = getCanonicalGameFrame(hostWidth, hostHeight);
    const child = getCityThresholdLayout(parent.layout);
    const origin = {
      x: (hostWidth - parent.renderedStageWidth) / 2 + parent.bezel.left * parent.scale,
      y: (hostHeight - parent.renderedStageHeight) / 2 + parent.bezel.top * parent.scale,
    };
    const focusedForward = projectCityThresholdRect(cityThresholdHotspots["SC-02-50"].forward, parent.layout, parent.scale, origin);
    const interfacePanel = projectCityThresholdRect({
      canonical: [0, child.worldHeight, child.width, child.interfaceHeight],
      narrow: [0, child.worldHeight, child.width, child.interfaceHeight],
    }, parent.layout, parent.scale, origin);
    for (const rect of [focusedForward, interfacePanel]) {
      assert.ok(rect.x >= 0 && rect.y >= 0);
      assert.ok(rect.right <= hostWidth && rect.bottom <= hostHeight);
    }
  }
});

test("the accepted staging banner is absent from the shared renderer without replacing required status copy", () => {
  assert.doesNotMatch(cityComponent, /A5 ROUGH PLATE|CITY CYCLES INVARIANT|city-staging-label/);
  assert.doesNotMatch(cityCss, /city-staging-label/);
  assert.match(cityComponent, /SC-02-50 \/\/ continuation unchanged \/\/ city_state_delta=None|visibleStatus/);
  assert.match(cityComponent, /RETURN TO PROLOGUE CREDITS/);
  assert.deepEqual(cityThresholdBoards, ["SC-02-00", "SC-02-10", "SC-02-20", "SC-02-30", "SC-02-40", "SC-02-50"]);
});

test("each City Threshold board uses the coordinated photorealistic production family", () => {
  assert.doesNotMatch(cityComponent, /Concept Art\/Underground City\.png|Pixelated Draft\/city-threshold-pixel-staging|city-world-filter/);
  assert.match(cityComponent, /Visual Direction\/Production Masters\/2026-07-15-photorealistic-demo/);
  for (const plate of ["overview", "boundary", "access"]) {
    assert.match(cityComponent, new RegExp(`city-threshold-${plate}-master\\.png`));
  }
  assert.match(cityComponent, /city-world-plate-native/);
  assert.match(cityComponent, /city-world-plate-narrow/);
  assert.match(cityCss, /data-canonical-layout="narrow"[^}]+city-world-plate-native/);
  assert.match(cityCss, /data-canonical-layout="narrow"[^}]+city-world-plate-narrow/);
});
