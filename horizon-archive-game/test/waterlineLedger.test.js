import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { updateObjectiveLedgerEvidence } from "../src/objectiveLedgerExercise.js";
import {
  WATERLINE_LEDGER_COPY,
  WATERLINE_LEDGER_CONTROL_GEOMETRY,
  WATERLINE_LEDGER_PATH,
  WATERLINE_LEDGER_PROVENANCE_SCHEMA,
  WATERLINE_LEDGER_REGISTRY,
  WATERLINE_LEDGER_SCHEMA,
  WATERLINE_LEDGER_SOURCE_ID,
  auditWaterlineLedgerRegistry,
  buildWaterlineLedgerLayoutRecords,
  deriveWaterlineLedgerLauncherGuards,
  deriveWaterlineLedgerSelector,
  deriveWaterlineLedgerState,
  getWaterlineLedgerHotspot,
  isWaterlineLedgerLawful,
  mapWaterlineLedgerGuidePoint,
  mapWaterlineLedgerGuidePolyline,
  mapWaterlineLedgerGuideRect,
} from "../src/waterlineLedger.js";

const source = structuredClone(WATERLINE_LEDGER_REGISTRY.source);
const provenance = structuredClone(WATERLINE_LEDGER_REGISTRY.provenance);

function acceptedRegistry() {
  return structuredClone(WATERLINE_LEDGER_REGISTRY);
}

const decoded = { complete: true, naturalWidth: source.width, naturalHeight: source.height };
const guard = (registry = acceptedRegistry(), evidence = {}) => ({ predecessorComplete: true, registry, decodedImage: decoded, ...evidence });

test("selected production registry is recursively frozen and provenance-bound", () => {
  assert.equal(Object.isFrozen(WATERLINE_LEDGER_REGISTRY), true);
  assert.equal(Object.isFrozen(WATERLINE_LEDGER_REGISTRY.source), true);
  assert.equal(Object.isFrozen(WATERLINE_LEDGER_REGISTRY.visibleGeometry), true);
  assert.equal(Object.isFrozen(WATERLINE_LEDGER_REGISTRY.controlGeometry), true);
  assert.equal(WATERLINE_LEDGER_REGISTRY.source.enabled, true);
  assert.equal(WATERLINE_LEDGER_REGISTRY.source.path, WATERLINE_LEDGER_PATH);
  assert.equal(WATERLINE_LEDGER_REGISTRY.source.sourceId, WATERLINE_LEDGER_SOURCE_ID);
  assert.equal(WATERLINE_LEDGER_REGISTRY.provenance.schema, WATERLINE_LEDGER_PROVENANCE_SCHEMA);
  assert.equal(WATERLINE_LEDGER_REGISTRY.copy.alt, WATERLINE_LEDGER_COPY.alt);
  assert.equal(WATERLINE_LEDGER_REGISTRY.visibleGeometry.serviceSeams.length, 4);
  assert.equal(isWaterlineLedgerLawful(guard(WATERLINE_LEDGER_REGISTRY)), true);
});

test("guide-core mapping is exact, preserves half coordinates, and rejects clamping or alternate inputs", () => {
  assert.deepEqual(mapWaterlineLedgerGuidePoint({ x: 768, y: 500 }), { x: 960, y: 525 });
  assert.deepEqual(mapWaterlineLedgerGuidePoint({ x: 555, y: 100 }), { x: 693.75, y: 25 });
  assert.deepEqual(mapWaterlineLedgerGuideRect({ x: 300, y: 225, width: 1020, height: 535 }), WATERLINE_LEDGER_CONTROL_GEOMETRY.semanticTarget);
  assert.deepEqual(mapWaterlineLedgerGuidePolyline([[225, 535], [430, 485]]), [{ x: 281.25, y: 568.75 }, { x: 537.5, y: 506.25 }]);
  for (const value of [{ x: 1, y: 79.999 }, { x: -1, y: 80 }, { x: "768", y: 500 }, { x: 768, y: 945 }]) {
    assert.equal(mapWaterlineLedgerGuidePoint(value), null);
  }
  assert.equal(mapWaterlineLedgerGuideRect({ x: 0, y: 80, width: 1537, height: 864 }), null);
});

test("lawfulness requires exact non-coercing source, provenance, copy, decode, and predecessor identity", () => {
  const registry = acceptedRegistry();
  assert.equal(isWaterlineLedgerLawful(guard(registry)), true, JSON.stringify({ audit: auditWaterlineLedgerRegistry(registry), layouts: registry.layouts }));
  for (const mutate of [
    (r) => { r.source.enabled = 1; },
    (r) => { r.source.path = `${WATERLINE_LEDGER_PATH}.wrong`; },
    (r) => { r.source.sourceId = "FRM15-R01"; },
    (r) => { r.source.bytes = String(r.source.bytes); },
    (r) => { r.source.sha256 = "A".repeat(64); },
    (r) => { r.source.format = "PNG"; },
    (r) => { r.source.color = "rgba"; },
    (r) => { r.provenance.sha256 = "b".repeat(64); },
    (r) => { r.provenance.schema = "horizon.first-run.source-provenance.v1"; },
    (r) => { r.schema = "horizon.waterline-ledger.v2"; },
    (r) => { r.copy.alt += " changed"; },
    (r) => { r.unknown = true; },
  ]) {
    const candidate = structuredClone(registry); mutate(candidate);
    assert.equal(isWaterlineLedgerLawful(guard(candidate)), false);
  }
  assert.equal(isWaterlineLedgerLawful({ ...guard(registry), predecessorComplete: 1 }), false);
  assert.equal(isWaterlineLedgerLawful({ ...guard(registry), decodedImage: { complete: true, naturalWidth: 3840, naturalHeight: 2160 } }), false);
});

test("physical mutations independently fail closed", () => {
  const registry = acceptedRegistry();
  for (const mutate of [
    (r) => { r.visibleGeometry.histories.repair = r.visibleGeometry.histories.foundation; },
    (r) => { r.visibleGeometry.histories.repair = structuredClone(r.visibleGeometry.histories.foundation); },
    (r) => { r.visibleGeometry.histories.repair.processEvidence = []; },
    (r) => { r.visibleGeometry.pairwiseContacts.foundationRepair[1] = r.visibleGeometry.pairwiseContacts.foundationRepair[0]; },
    (r) => { r.visibleGeometry.pairwiseContacts.foundationRepair[0] = { x: 10, y: 10, width: 20, height: 20 }; },
    (r) => { r.visibleGeometry.depositionTrace.points = r.visibleGeometry.depositionTrace.points.slice(0, 2); },
    (r) => { r.visibleGeometry.depositionTrace.reactions.repair = { x: 1500, y: 1000 }; },
    (r) => { r.visibleGeometry.depositionTrace.points = [{ x: 800, y: 900 }, { x: 1200, y: 900 }, { x: 1600, y: 900 }, { x: 2000, y: 900 }]; },
    (r) => { r.visibleGeometry.serviceSeams = r.visibleGeometry.serviceSeams.filter((seam) => seam.parent !== null); },
    (r) => { r.visibleGeometry.serviceSeams[2].points = structuredClone(r.visibleGeometry.serviceSeams[1].points); },
    (r) => { r.visibleGeometry.serviceSeams = r.visibleGeometry.serviceSeams.filter((seam) => seam.parent === null); },
    (r) => { r.visibleGeometry.serviceSeams[3].points[0] = { x: 2000, y: 1200 }; },
    (r) => { r.controlGeometry.physicalCenter = { x: 200, y: 200 }; },
    (r) => { r.controlGeometry.semanticTarget.x += 1; },
    (r) => { r.controlGeometry.protected.liveWater = structuredClone(r.controlGeometry.protected.nextBoundary); },
    (r) => { r.visibleGeometry.relation = r.controlGeometry.semanticTarget; },
    (r) => { r.visibleGeometry.histories.foundation = structuredClone(r.controlGeometry.semanticTarget); },
  ]) {
    const candidate = structuredClone(registry); mutate(candidate);
    assert.equal(isWaterlineLedgerLawful(guard(candidate)), false);
  }
});

test("state derivation preserves strict lesson order and rejects malformed or forged evidence", () => {
  const registry = acceptedRegistry();
  assert.deepEqual(deriveWaterlineLedgerState(guard(registry)), { state: "available", lesson: "objective-ledger", presentation: "available" });
  const objectiveProgress = updateObjectiveLedgerEvidence(null, { masteryStatus: "in_progress" });
  assert.equal(deriveWaterlineLedgerState(guard(registry, { objectiveLedgerEvidence: objectiveProgress })).state, "in_progress");
  const malformed = { ...objectiveProgress, masteryStatus: "mastered" };
  assert.equal(deriveWaterlineLedgerState(guard(registry, { objectiveLedgerEvidence: malformed })).state, "in_progress", "released sanitizer must downgrade forged mastery");
  assert.equal(deriveWaterlineLedgerState(guard(registry, { objectiveLedgerEvidence: { exerciseId: "wrong", masteryStatus: "mastered" } })).state, "hidden");
  assert.equal(deriveWaterlineLedgerState(guard(registry, { remediationPlannerEvidence: { masteryStatus: "in_progress" } })).state, "hidden");
});

test("one selector atomically yields native or exactly one eligible generic launcher", () => {
  const inactive = deriveWaterlineLedgerSelector({ sceneId: "ruins", pendingAdvance: true, presented: false, state: { state: "available" } });
  assert.equal(inactive, false);
  assert.deepEqual(deriveWaterlineLedgerLauncherGuards({ nativeActive: inactive, sceneId: "ruins", pendingAdvance: true, predecessorComplete: true }), { native: false, objectiveGeneric: true, plannerGeneric: false });
  const active = deriveWaterlineLedgerSelector({ sceneId: "ruins", pendingAdvance: true, presented: true, state: { state: "available" } });
  assert.deepEqual(deriveWaterlineLedgerLauncherGuards({ nativeActive: active, sceneId: "ruins", pendingAdvance: true, predecessorComplete: true }), { native: true, objectiveGeneric: false, plannerGeneric: false });
  const objectiveMastered = { masteryStatus: "mastered" };
  const fallback = deriveWaterlineLedgerLauncherGuards({ nativeActive: false, sceneId: "ruins", pendingAdvance: true, predecessorComplete: true, objectiveLedgerEvidence: objectiveMastered });
  assert.equal(fallback.objectiveGeneric, true);
  assert.equal(fallback.plannerGeneric, false, "forged minimal mastery must not unlock Planner");
});

test("hotspot derives from source geometry and stays at least 44 CSS pixels", () => {
  const hotspot = getWaterlineLedgerHotspot(acceptedRegistry(), "retained320x180");
  assert.ok(hotspot);
  assert.match(hotspot.width, /^max\(.+%, 44px\)$/);
  assert.match(hotspot.height, /^max\(.+%, 44px\)$/);
});

test("App integration uses one positive native selector and inverse guards for only the two owned launchers", () => {
  const app = readFileSync(fileURLToPath(new URL("../src/App.jsx", import.meta.url)), "utf8");
  assert.match(app, /host14-environment-master-v1\.png/);
  assert.match(app, /waterlineLedgerNativeActive/);
  assert.match(app, /!waterlineLedgerNativeActive[^\n]+openObjectiveLedger/);
  assert.match(app, /!waterlineLedgerNativeActive[^\n]+openRemediationPlanner/);
  assert.match(app, /data-hotspot-id=\{hotspot\.id\}/);
  assert.match(app, /event\.detail>1/);
  assert.match(app, /waterlineLedgerActivationRef\.current/);
  assert.match(app, /aria-describedby="waterline-ledger-physical-description waterline-ledger-state-description"/);
  assert.match(app, /restoreFocusTo=\{terminalTriggerRef\.current\}/);
  assert.match(app, /waterlineLedgerNativeActive\?waterlineLedgerRef\.current:continueButtonRef\.current/);
  assert.doesNotMatch(app, /waterline-ledger[^\n]+(?:pointerdown|touchstart|onKeyDown)/i);
});

test("sanctioned journey contains a bounded native-first ownership hook without hidden shortcuts", () => {
  const e2e = readFileSync(fileURLToPath(new URL("../../playtest/e2e-playthrough.mjs", import.meta.url)), "utf8");
  assert.match(e2e, /async function openHost14OwnedLesson\(page, genericName\)/);
  assert.match(e2e, /data-hotspot-id="waterline-ledger"/);
  assert.match(e2e, /getByRole\("button", \{ name: "USE", exact: true \}\)\.click\(\)/);
  assert.match(e2e, /return "native"/);
  assert.match(e2e, /return "generic-fallback"/);
  assert.doesNotMatch(e2e, /waterline-ledger[^\n]+(?:localStorage\.setItem|evaluate\([^)]*mastery|dispatchEvent)/i);
});

test("FRPBA-015 is a source-dependent FRM15 identity overlay with unchanged numeric caps", () => {
  const pba = readFileSync(fileURLToPath(new URL("../../Production Pipeline/First Run/FIRST_RUN_PBA_FRPBA-015-v1.ps1", import.meta.url)), "utf8");
  assert.match(pba, /control = 'FRPBA-015-v1'/);
  assert.match(pba, /source_id = 'FRM15-A01'/);
  assert.match(pba, /horizon\.first-run\.frm15-source-provenance\.v1/);
  assert.match(pba, /FRAM-014-v1/);
  assert.match(pba, /1785000/);
  assert.match(pba, /122000/);
  assert.match(pba, /184163567/);
  assert.match(pba, /media\.Count -ne 25/);
  assert.match(pba, /files\.Count -ne 28/);
});
