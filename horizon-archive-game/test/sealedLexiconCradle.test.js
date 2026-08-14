import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import {
  SEALED_LEXICON_CRADLE_REGISTRY,
  auditSealedLexiconCradle,
  deriveSealedLexiconCradleState,
} from "../src/manyfoldHosts.js";

const decoded = { complete: true, naturalWidth: 1920, naturalHeight: 1080 };

test("Host 26 freezes accepted source provenance copy and six layouts", () => {
  assert.deepEqual(auditSealedLexiconCradle(), { source: true, provenance: true, layouts: true, copy: true });
  assert.equal(SEALED_LEXICON_CRADLE_REGISTRY.layouts.length, 6);
});

test("Host 26 fails closed on registry mutation", () => {
  for (const mutate of [
    (candidate) => { candidate.source.bytes += 1; },
    (candidate) => { candidate.provenance.sha256 = "0".repeat(64); },
    (candidate) => { candidate.layouts.pop(); },
  ]) {
    const copy = structuredClone(SEALED_LEXICON_CRADLE_REGISTRY);
    mutate(copy);
    assert.equal(deriveSealedLexiconCradleState({ registry: copy, decodedImage: decoded }), "hidden");
  }
});

test("Host 26 requires exact Full HD decode", () => {
  assert.equal(deriveSealedLexiconCradleState({ decodedImage: decoded }), "available");
  assert.equal(deriveSealedLexiconCradleState({ decodedImage: null }), "hidden");
  assert.equal(deriveSealedLexiconCradleState({ decodedImage: { ...decoded, naturalHeight: 1079 } }), "hidden");
});

test("Manyfold Return layers Host 26 behind Host 25 for all other SC-06 states", () => {
  const source = fs.readFileSync(path.resolve("src/ManyfoldReturn.jsx"), "utf8");
  assert.match(source, /host26State !== "hidden" && !host25NativeActive/);
  assert.match(source, /host26NativeActive \? sealedLexiconCradleImage : host25NativeActive \? receiverChorusImage : worldImage/);
  assert.match(source, /data-sealed-lexicon-cradle-source=/);
});

test("Host 26 preserves forms actions focus and released fallback", () => {
  const source = fs.readFileSync(path.resolve("src/ManyfoldReturn.jsx"), "utf8");
  assert.match(source, /<ManyfoldForm/);
  assert.match(source, /state\.availableActions/);
  assert.match(source, /focusIntent/);
  assert.match(source, /panoramaMaster/);
  assert.match(source, /detailMaster/);
});
