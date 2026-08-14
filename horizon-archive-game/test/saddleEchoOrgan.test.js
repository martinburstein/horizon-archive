import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { SADDLE_ECHO_ORGAN_REGISTRY, auditSaddleEchoOrgan, deriveSaddleEchoOrganState } from "../src/braidedHosts.js";

const decoded = { complete: true, naturalWidth: 1920, naturalHeight: 1080 };

test("Host 29 freezes accepted source provenance copy and six layouts", () => {
  assert.deepEqual(auditSaddleEchoOrgan(), { source: true, provenance: true, layouts: true, copy: true });
  assert.equal(SADDLE_ECHO_ORGAN_REGISTRY.layouts.length, 6);
});

test("Host 29 fails closed on registry mutation", () => {
  for (const mutate of [
    (candidate) => { candidate.source.bytes += 1; },
    (candidate) => { candidate.provenance.sha256 = "0".repeat(64); },
    (candidate) => { candidate.layouts.pop(); },
  ]) {
    const copy = structuredClone(SADDLE_ECHO_ORGAN_REGISTRY);
    mutate(copy);
    assert.equal(deriveSaddleEchoOrganState({ registry: copy, decodedImage: decoded }), "hidden");
  }
});

test("Host 29 requires exact Full HD decode", () => {
  assert.equal(deriveSaddleEchoOrganState({ decodedImage: decoded }), "available");
  assert.equal(deriveSaddleEchoOrganState({ decodedImage: null }), "hidden");
});

test("Braided Verge selects Host 29 only for observation and PY-015 groups", () => {
  const source = fs.readFileSync(path.resolve("src/BraidedVerge.jsx"), "utf8");
  assert.match(source, /const host29Groups = new Set\(\["bv00_orientation", "bv10_observations", "bv20_python_primary", "bv20_python_trace", "bv20_python_transfer"\]\)/);
  assert.match(source, /host29Groups\.has\(state\.activeGroup\)/);
  assert.match(source, /host29NativeActive \? saddleEchoOrganImage : releasedImageSource/);
});

test("Host 29 preserves forms actions focus and both released fallbacks", () => {
  const source = fs.readFileSync(path.resolve("src/BraidedVerge.jsx"), "utf8");
  assert.match(source, /<BraidedVergeForm/);
  assert.match(source, /state\.availableActions/);
  assert.match(source, /focusIntent/);
  assert.match(source, /braidedVergePanorama/);
  assert.match(source, /braidedVergeContactDetail/);
});
