import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { STRATA_COMB_REGISTRY, auditStrataComb, deriveStrataCombState } from "../src/intervalHosts.js";

const decoded = { complete: true, naturalWidth: 1920, naturalHeight: 1080 };

test("Host 27 freezes accepted source provenance copy and six layouts", () => {
  assert.deepEqual(auditStrataComb(), { source: true, provenance: true, layouts: true, copy: true });
  assert.equal(STRATA_COMB_REGISTRY.layouts.length, 6);
});

test("Host 27 fails closed on registry mutation", () => {
  for (const mutate of [
    (candidate) => { candidate.source.bytes += 1; },
    (candidate) => { candidate.provenance.sha256 = "0".repeat(64); },
    (candidate) => { candidate.layouts.pop(); },
  ]) {
    const copy = structuredClone(STRATA_COMB_REGISTRY);
    mutate(copy);
    assert.equal(deriveStrataCombState({ registry: copy, decodedImage: decoded }), "hidden");
  }
});

test("Host 27 requires exact Full HD decode", () => {
  assert.equal(deriveStrataCombState({ decodedImage: decoded }), "available");
  assert.equal(deriveStrataCombState({ decodedImage: null }), "hidden");
});

test("Interval Works selects Host 27 only for observation and PY-013 groups", () => {
  const source = fs.readFileSync(path.resolve("src/IntervalWorks.jsx"), "utf8");
  assert.match(source, /const host27Groups = new Set\(\["iw00_orientation", "iw10_observations", "iw20_python_primary", "iw20_python_trace", "iw20_python_transfer"\]\)/);
  assert.match(source, /host27Groups\.has\(state\.activeGroup\)/);
  assert.match(source, /host27NativeActive \? strataCombImage : releasedImageSource/);
});

test("Host 27 preserves forms actions focus and both released fallbacks", () => {
  const source = fs.readFileSync(path.resolve("src/IntervalWorks.jsx"), "utf8");
  assert.match(source, /<IntervalWorksForm/);
  assert.match(source, /state\.availableActions/);
  assert.match(source, /focusIntent/);
  assert.match(source, /intervalWorksPanorama/);
  assert.match(source, /intervalWorksCrosssection/);
});
