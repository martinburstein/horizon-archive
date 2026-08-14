import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { PRESSURE_LANGUAGE_ORGAN_REGISTRY, auditPressureLanguageOrgan, derivePressureLanguageOrganState } from "../src/intervalHosts.js";

const decoded = { complete: true, naturalWidth: 1920, naturalHeight: 1080 };

test("Host 28 freezes accepted source provenance copy and six layouts", () => {
  assert.deepEqual(auditPressureLanguageOrgan(), { source: true, provenance: true, layouts: true, copy: true });
  assert.equal(PRESSURE_LANGUAGE_ORGAN_REGISTRY.layouts.length, 6);
});

test("Host 28 fails closed on registry mutation", () => {
  for (const mutate of [
    (candidate) => { candidate.source.bytes += 1; },
    (candidate) => { candidate.provenance.sha256 = "0".repeat(64); },
    (candidate) => { candidate.layouts.pop(); },
  ]) {
    const copy = structuredClone(PRESSURE_LANGUAGE_ORGAN_REGISTRY);
    mutate(copy);
    assert.equal(derivePressureLanguageOrganState({ registry: copy, decodedImage: decoded }), "hidden");
  }
});

test("Host 28 requires exact Full HD decode", () => {
  assert.equal(derivePressureLanguageOrganState({ decodedImage: decoded }), "available");
  assert.equal(derivePressureLanguageOrganState({ decodedImage: null }), "hidden");
});

test("Interval Works layers Host 28 behind Host 27 for all other SC-07 states", () => {
  const source = fs.readFileSync(path.resolve("src/IntervalWorks.jsx"), "utf8");
  assert.match(source, /host28State !== "hidden" && !host27NativeActive/);
  assert.match(source, /host28NativeActive \? pressureLanguageOrganImage : host27NativeActive \? strataCombImage : releasedImageSource/);
  assert.match(source, /data-pressure-language-organ-source=/);
});

test("Host 28 preserves forms actions focus and both released fallbacks", () => {
  const source = fs.readFileSync(path.resolve("src/IntervalWorks.jsx"), "utf8");
  assert.match(source, /<IntervalWorksForm/);
  assert.match(source, /state\.availableActions/);
  assert.match(source, /focusIntent/);
  assert.match(source, /intervalWorksPanorama/);
  assert.match(source, /intervalWorksCrosssection/);
});
