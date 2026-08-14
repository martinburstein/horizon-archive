import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { SILENT_ACCOUNTABILITY_APERTURE_REGISTRY, auditSilentAccountabilityAperture, deriveSilentAccountabilityApertureState } from "../src/civicRecordHosts.js";

const decoded = { complete: true, naturalWidth: 1920, naturalHeight: 1080 };

test("Host 20 freezes the accepted source, provenance, copy, and six layouts", () => {
  assert.deepEqual(auditSilentAccountabilityAperture(), { source: true, provenance: true, layouts: true, copy: true });
  assert.equal(SILENT_ACCOUNTABILITY_APERTURE_REGISTRY.layouts.length, 6);
});

test("Host 20 fails closed on source, provenance, layout, and decode mutation", () => {
  for (const mutate of [
    (copy) => { copy.source.sha256 = "0".repeat(64); },
    (copy) => { copy.provenance.bytes += 1; },
    (copy) => { copy.layouts.shift(); },
  ]) {
    const copy = structuredClone(SILENT_ACCOUNTABILITY_APERTURE_REGISTRY);
    mutate(copy);
    assert.equal(deriveSilentAccountabilityApertureState({ registry: copy, decodedImage: decoded }), "hidden");
  }
  assert.equal(deriveSilentAccountabilityApertureState({ decodedImage: { ...decoded, naturalWidth: 1919 } }), "hidden");
});

test("Host 20 activates only after exact Full HD decode", () => {
  assert.equal(deriveSilentAccountabilityApertureState({ decodedImage: decoded }), "available");
  assert.equal(deriveSilentAccountabilityApertureState({ decodedImage: null }), "hidden");
});

test("Civic Record District selects Host 20 for far and RAI-owned states with Host 19 and legacy fallback", () => {
  const source = fs.readFileSync(path.resolve("src/CivicRecordArrival.jsx"), "utf8");
  assert.match(source, /host20-environment-master-v1\.png/);
  assert.match(source, /atFarObservation \|\| \(atPythonPrimary && !nestedCustodyFolioNativeActive\)/);
  assert.match(source, /silentAccountabilityApertureNativeActive \? silentAccountabilityApertureImage : nestedCustodyFolioNativeActive \? nestedCustodyFolioImage : civicRecordArrivalMaster/);
  assert.match(source, /data-silent-accountability-aperture-source=/);
});

test("Host 20 integration leaves RP-002 RAI, save, and route ownership unchanged", () => {
  const source = fs.readFileSync(path.resolve("src/CivicRecordArrival.jsx"), "utf8");
  assert.match(source, /onRAIPrimarySubmit/);
  assert.match(source, /onBoundedComparisonReview/);
  assert.match(source, /onSaveCommit/);
  assert.match(source, /routeState\.availableActions/);
});
