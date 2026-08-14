import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { FORKED_LOGIC_STITCH_REGISTRY, auditForkedLogicStitch, deriveForkedLogicStitchState } from "../src/calibrationMarginHosts.js";

const decoded = { complete: true, naturalWidth: 1920, naturalHeight: 1080 };

test("Host 21 freezes accepted source, provenance, copy, and six layouts", () => {
  assert.deepEqual(auditForkedLogicStitch(), { source: true, provenance: true, layouts: true, copy: true });
  assert.equal(FORKED_LOGIC_STITCH_REGISTRY.layouts.length, 6);
});
test("Host 21 fails closed on registry mutations", () => {
  for (const mutate of [(c) => { c.source.bytes++; }, (c) => { c.provenance.sha256 = "0".repeat(64); }, (c) => { c.layouts.pop(); }]) {
    const copy = structuredClone(FORKED_LOGIC_STITCH_REGISTRY); mutate(copy);
    assert.equal(deriveForkedLogicStitchState({ registry: copy, decodedImage: decoded }), "hidden");
  }
});
test("Host 21 requires exact Full HD decode", () => {
  assert.equal(deriveForkedLogicStitchState({ decodedImage: decoded }), "available");
  assert.equal(deriveForkedLogicStitchState({ decodedImage: { ...decoded, naturalWidth: 1919 } }), "hidden");
});
test("Calibration Margin selects Host 21 for observation and PY-010 with legacy fallback", () => {
  const source = fs.readFileSync(path.resolve("src/CalibrationMarginEntry.jsx"), "utf8");
  assert.match(source, /!extractionFloorActive && !reviewSaveActive/);
  assert.match(source, /forkedLogicStitchNativeActive \? forkedLogicStitchImage : cityOverviewImage/);
  assert.match(source, /data-forked-logic-stitch-source=/);
});
test("Host 21 leaves floor, action, and focus ownership unchanged", () => {
  const source = fs.readFileSync(path.resolve("src/CalibrationMarginEntry.jsx"), "utf8");
  assert.match(source, /CalibrationMarginPythonFloor/);
  assert.match(source, /entryState\.availableActions/);
  assert.match(source, /entryState\?\.focusIntent/);
});
