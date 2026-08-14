import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import {
  RECEIVER_CHORUS_REGISTRY,
  auditReceiverChorus,
  deriveReceiverChorusState,
} from "../src/manyfoldHosts.js";

const decoded = { complete: true, naturalWidth: 1920, naturalHeight: 1080 };

test("Host 25 freezes accepted source provenance copy and six layouts", () => {
  assert.deepEqual(auditReceiverChorus(), { source: true, provenance: true, layouts: true, copy: true });
  assert.equal(RECEIVER_CHORUS_REGISTRY.layouts.length, 6);
});

test("Host 25 fails closed on registry mutation", () => {
  for (const mutate of [
    (candidate) => { candidate.source.bytes += 1; },
    (candidate) => { candidate.provenance.sha256 = "0".repeat(64); },
    (candidate) => { candidate.layouts.pop(); },
  ]) {
    const copy = structuredClone(RECEIVER_CHORUS_REGISTRY);
    mutate(copy);
    assert.equal(deriveReceiverChorusState({ registry: copy, decodedImage: decoded }), "hidden");
  }
});

test("Host 25 requires exact Full HD decode", () => {
  assert.equal(deriveReceiverChorusState({ decodedImage: decoded }), "available");
  assert.equal(deriveReceiverChorusState({ decodedImage: null }), "hidden");
  assert.equal(deriveReceiverChorusState({ decodedImage: { ...decoded, naturalWidth: 1919 } }), "hidden");
});

test("Manyfold Return selects Host 25 only for observation and PY-012 groups", () => {
  const source = fs.readFileSync(path.resolve("src/ManyfoldReturn.jsx"), "utf8");
  assert.match(source, /const host25Groups = new Set\(\["mf00_arrive", "mf00_oriented", "mf10_observations", "mf20_python_primary", "mf20_python_trace", "mf20_python_transfer"\]\)/);
  assert.match(source, /host25Groups\.has\(state\.activeGroup\)/);
  assert.match(source, /host25NativeActive \? receiverChorusImage : worldImage/);
});

test("Host 25 preserves forms actions focus and released fallback", () => {
  const source = fs.readFileSync(path.resolve("src/ManyfoldReturn.jsx"), "utf8");
  assert.match(source, /<ManyfoldForm/);
  assert.match(source, /state\.availableActions/);
  assert.match(source, /focusIntent/);
  assert.match(source, /panoramaMaster/);
  assert.match(source, /detailMaster/);
});
