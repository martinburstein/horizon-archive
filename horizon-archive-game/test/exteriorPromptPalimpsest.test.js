import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import {
  EXTERIOR_PROMPT_PALIMPSEST_REGISTRY,
  auditExteriorPromptPalimpsest,
  deriveExteriorPromptPalimpsestState,
} from "../src/occludedHosts.js";

const decoded = { complete: true, naturalWidth: 1920, naturalHeight: 1080 };

test("Host 34 freezes accepted source provenance copy and six layouts", () => {
  assert.deepEqual(auditExteriorPromptPalimpsest(), { source: true, provenance: true, layouts: true, copy: true });
  assert.equal(EXTERIOR_PROMPT_PALIMPSEST_REGISTRY.layouts.length, 6);
});

test("Host 34 fails closed on registry mutation", () => {
  for (const mutate of [
    (copy) => { copy.source.bytes += 1; },
    (copy) => { copy.provenance.sha256 = "0".repeat(64); },
    (copy) => { copy.layouts.pop(); },
  ]) {
    const copy = structuredClone(EXTERIOR_PROMPT_PALIMPSEST_REGISTRY);
    mutate(copy);
    assert.equal(deriveExteriorPromptPalimpsestState({ registry: copy, decodedImage: decoded }), "hidden");
  }
});

test("Host 34 requires exact Full HD decode", () => {
  assert.equal(deriveExteriorPromptPalimpsestState({ decodedImage: decoded }), "available");
  assert.equal(deriveExteriorPromptPalimpsestState({ decodedImage: null }), "hidden");
});

test("Occluded Fold selects Host 34 only outside Host 33 ownership", () => {
  const source = fs.readFileSync(path.resolve("src/OccludedFold.jsx"), "utf8");
  assert.match(source, /host34State!=="hidden"&&\!host33NativeActive/);
  assert.match(source, /host34NativeActive \? <img/);
  assert.match(source, /data-exterior-prompt-palimpsest-source=/);
});

test("Host 34 preserves Host 33 and the code-native fallback", () => {
  const source = fs.readFileSync(path.resolve("src/OccludedFold.jsx"), "utf8");
  assert.match(source, /: host33NativeActive \? <img/);
  assert.match(source, /occluded-native-mass-primary/);
  assert.match(source, /<OccludedFoldForm/);
});
