import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { TWIN_RETURN_COUPLING_REGISTRY, auditTwinReturnCoupling, deriveTwinReturnCouplingState } from "../src/counterfieldHosts.js";

const decoded = { complete: true, naturalWidth: 1920, naturalHeight: 1080 };

test("Host 35 freezes accepted source provenance copy and six layouts", () => { assert.deepEqual(auditTwinReturnCoupling(), { source: true, provenance: true, layouts: true, copy: true }); assert.equal(TWIN_RETURN_COUPLING_REGISTRY.layouts.length, 6); });
test("Host 35 fails closed on source provenance or layout mutation", () => { for (const mutate of [(copy) => { copy.source.bytes += 1; }, (copy) => { copy.provenance.sha256 = "0".repeat(64); }, (copy) => { copy.layouts.pop(); }]) { const copy = structuredClone(TWIN_RETURN_COUPLING_REGISTRY); mutate(copy); assert.equal(deriveTwinReturnCouplingState({ registry: copy, decodedImage: decoded }), "hidden"); } });
test("Host 35 requires exact Full HD decode", () => { assert.equal(deriveTwinReturnCouplingState({ decodedImage: decoded }), "available"); assert.equal(deriveTwinReturnCouplingState({ decodedImage: null }), "hidden"); });
test("Counterfield selects Host 35 only for orientation observation and PY-018 states", () => { const source = fs.readFileSync(path.resolve("src/Counterfield.jsx"), "utf8"); assert.match(source, /host35Groups\.has\(group\)/); assert.match(source, /data-twin-return-coupling-source=/); assert.match(source, /data-runtime-image=\{host35NativeActive/); });
test("Host 35 retains the code-native fail-closed treatment and gameplay UI", () => { const source = fs.readFileSync(path.resolve("src/Counterfield.jsx"), "utf8"); assert.match(source, /counterfield-horizon/); assert.match(source, /state\.availableActions/); assert.match(source, /useLayoutEffect/); });
