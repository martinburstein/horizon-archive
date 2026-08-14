import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { NESTED_CUSTODY_FOLIO_REGISTRY, auditNestedCustodyFolio, deriveNestedCustodyFolioState } from "../src/civicRecordHosts.js";

const decoded = { complete: true, naturalWidth: 1920, naturalHeight: 1080 };

test("Host 19 freezes the accepted source, provenance, copy, and six layouts", () => {
  assert.deepEqual(auditNestedCustodyFolio(), { source: true, provenance: true, layouts: true, copy: true });
  assert.equal(NESTED_CUSTODY_FOLIO_REGISTRY.layouts.length, 6);
});

test("Host 19 fails closed on source, provenance, layout, and decode mutation", () => {
  for (const mutate of [
    (copy) => { copy.source.bytes += 1; },
    (copy) => { copy.provenance.sha256 = "0".repeat(64); },
    (copy) => { copy.layouts.pop(); },
  ]) {
    const copy = structuredClone(NESTED_CUSTODY_FOLIO_REGISTRY);
    mutate(copy);
    assert.equal(deriveNestedCustodyFolioState({ registry: copy, decodedImage: decoded }), "hidden");
  }
  assert.equal(deriveNestedCustodyFolioState({ decodedImage: { ...decoded, naturalHeight: 1079 } }), "hidden");
});

test("Host 19 activates only after exact Full HD decode", () => {
  assert.equal(deriveNestedCustodyFolioState({ decodedImage: decoded }), "available");
  assert.equal(deriveNestedCustodyFolioState({ decodedImage: null }), "hidden");
});

test("Civic Record District selects Host 19 for arrival, near, local, and Python states while retaining fallback", () => {
  const source = fs.readFileSync(path.resolve("src/CivicRecordArrival.jsx"), "utf8");
  assert.match(source, /host19-environment-master-v1\.png/);
  assert.match(source, /!atFarObservation/);
  assert.match(source, /!String\(primaryPhase \?\? ""\)\.startsWith\("RAI"\)/);
  assert.match(source, /nestedCustodyFolioNativeActive \? nestedCustodyFolioImage : civicRecordArrivalMaster/);
  assert.match(source, /data-nested-custody-folio-source=/);
});

test("Host 19 integration leaves the RP-002 route and learning handlers untouched", () => {
  const source = fs.readFileSync(path.resolve("src/CivicRecordArrival.jsx"), "utf8");
  assert.match(source, /onPrimarySubmit/);
  assert.match(source, /onRAIPrimarySubmit/);
  assert.match(source, /routeState\.availableActions/);
  assert.match(source, /onSaveCommit/);
});
