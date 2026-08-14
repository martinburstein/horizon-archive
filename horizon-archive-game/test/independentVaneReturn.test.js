import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { INDEPENDENT_VANE_RETURN_REGISTRY, auditIndependentVaneReturn, deriveIndependentVaneReturnState } from "../src/counterfieldHosts.js";

const decoded = { complete: true, naturalWidth: 1920, naturalHeight: 1080 };
test("Host 36 freezes accepted source provenance copy and six layouts", () => { assert.deepEqual(auditIndependentVaneReturn(), { source: true, provenance: true, layouts: true, copy: true }); assert.equal(INDEPENDENT_VANE_RETURN_REGISTRY.layouts.length, 6); });
test("Host 36 fails closed on source provenance or layout mutation", () => { for (const mutate of [(copy) => { copy.source.bytes += 1; }, (copy) => { copy.provenance.sha256 = "0".repeat(64); }, (copy) => { copy.layouts.pop(); }]) { const copy = structuredClone(INDEPENDENT_VANE_RETURN_REGISTRY); mutate(copy); assert.equal(deriveIndependentVaneReturnState({ registry: copy, decodedImage: decoded }), "hidden"); } });
test("Host 36 requires exact Full HD decode", () => { assert.equal(deriveIndependentVaneReturnState({ decodedImage: decoded }), "available"); assert.equal(deriveIndependentVaneReturnState({ decodedImage: null }), "hidden"); });
test("Counterfield selects Host 36 only outside Host 35 ownership", () => { const source = fs.readFileSync(path.resolve("src/Counterfield.jsx"), "utf8"); assert.match(source, /host36State !== "hidden" && !host35NativeActive/); assert.match(source, /data-independent-vane-return-source=/); assert.match(source, /host36NativeActive/); });
test("Host 36 preserves Host 35 and the CSS fallback", () => { const source = fs.readFileSync(path.resolve("src/Counterfield.jsx"), "utf8"); assert.match(source, /: host35NativeActive/); assert.match(source, /counterfield-horizon/); assert.match(source, /state\.availableActions/); });
