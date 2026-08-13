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

const source = { enabled: true, path: WATERLINE_LEDGER_PATH, sourceId: WATERLINE_LEDGER_SOURCE_ID, bytes: 123456, sha256: "a".repeat(64), width: 3840, height: 2160, format: "png", color: "opaque-srgb-8" };
const provenance = { schema: WATERLINE_LEDGER_PROVENANCE_SCHEMA, path: source.path, sourceId: source.sourceId, bytes: source.bytes, sha256: source.sha256 };
const base = {
  schema: WATERLINE_LEDGER_SCHEMA,
  source,
  provenance,
  visibleGeometry: {
    relation: { x: 225, y: 250, width: 3400, height: 1525 },
    dryApproach: { x: 375, y: 1450, width: 3100, height: 650 },
    histories: {
      foundation: { bounds: { x: 300, y: 350, width: 3225, height: 1350 }, processEvidence: [{ x: 400, y: 500, width: 500, height: 500 }] },
      repair: { bounds: { x: 650, y: 425, width: 2025, height: 1087.5 }, processEvidence: [{ x: 900, y: 600, width: 500, height: 500 }] },
      serviceSkin: { bounds: { x: 1050, y: 375, width: 2225, height: 1175 }, processEvidence: [{ x: 2200, y: 500, width: 500, height: 500 }] },
    },
    pairwiseContacts: {
      foundationRepair: [{ x: 625, y: 450, width: 550, height: 450 }, { x: 975, y: 1150, width: 575, height: 375 }],
      foundationServiceSkin: [{ x: 2475, y: 350, width: 625, height: 475 }, { x: 2800, y: 1125, width: 525, height: 425 }],
      repairServiceSkin: [{ x: 1312.5, y: 512.5, width: 550, height: 425 }, { x: 1850, y: 987.5, width: 600, height: 475 }],
    },
    depositionTrace: {
      bounds: { x: 500, y: 900, width: 2900, height: 350 },
      points: [{ x: 562.5, y: 1137.5 }, { x: 1075, y: 1012.5 }, { x: 1550, y: 1087.5 }, { x: 1975, y: 1187.5 }, { x: 2450, y: 987.5 }, { x: 2975, y: 1062.5 }, { x: 3312.5, y: 1175 }],
      reactions: { foundation: { x: 562.5, y: 1137.5 }, repair: { x: 1550, y: 1087.5 }, serviceSkin: { x: 2450, y: 987.5 } },
    },
    waterline: { x: 3300, y: 1262.5, width: 540, height: 897.5 },
    serviceSeams: [
      { id: "seam-01", parent: null, points: [{ x: 1050, y: 1550 }, { x: 1100, y: 1150 }, { x: 1025, y: 675 }, { x: 950, y: 262.5 }] },
      { id: "seam-02", parent: null, points: [{ x: 1900, y: 1550 }, { x: 1950, y: 1250 }, { x: 1875, y: 875 }, { x: 1975, y: 450 }] },
      { id: "seam-03", parent: null, points: [{ x: 2750, y: 1550 }, { x: 2700, y: 1200 }, { x: 2800, y: 850 }, { x: 2725, y: 350 }] },
      { id: "seam-02-branch", parent: "seam-02", points: [{ x: 1950, y: 1250 }, { x: 2250, y: 875 }, { x: 2450, y: 500 }] },
    ],
  },
  controlGeometry: structuredClone(WATERLINE_LEDGER_CONTROL_GEOMETRY),
  layouts: { desktop: null, laptop: null, narrow: null, effective200: null, retained320x180: null, retained320x240: null },
  copy: { ...WATERLINE_LEDGER_COPY },
};

function acceptedRegistry() {
  const pending = structuredClone(base);
  const layouts = buildWaterlineLedgerLayoutRecords(pending);
  return { ...pending, layouts };
}

const decoded = { complete: true, naturalWidth: 3840, naturalHeight: 2160 };
const guard = (registry = acceptedRegistry(), evidence = {}) => ({ predecessorComplete: true, registry, decodedImage: decoded, ...evidence });

test("null-first registry is recursively frozen, disabled, and contains no selected source or copy", () => {
  assert.equal(Object.isFrozen(WATERLINE_LEDGER_REGISTRY), true);
  assert.equal(Object.isFrozen(WATERLINE_LEDGER_REGISTRY.source), true);
  assert.equal(Object.isFrozen(WATERLINE_LEDGER_REGISTRY.visibleGeometry), true);
  assert.equal(Object.isFrozen(WATERLINE_LEDGER_REGISTRY.controlGeometry), true);
  assert.equal(WATERLINE_LEDGER_REGISTRY.source.enabled, false);
  assert.equal(WATERLINE_LEDGER_REGISTRY.source.path, null);
  assert.equal(WATERLINE_LEDGER_REGISTRY.source.sourceId, null);
  assert.equal(WATERLINE_LEDGER_REGISTRY.provenance, null);
  assert.equal(WATERLINE_LEDGER_REGISTRY.copy, null);
  assert.deepEqual(WATERLINE_LEDGER_REGISTRY.visibleGeometry.serviceSeams, []);
  assert.equal(isWaterlineLedgerLawful(guard(WATERLINE_LEDGER_REGISTRY)), false);
});

test("guide-core mapping is exact, preserves half coordinates, and rejects clamping or alternate inputs", () => {
  assert.deepEqual(mapWaterlineLedgerGuidePoint({ x: 768, y: 500 }), { x: 1920, y: 1050 });
  assert.deepEqual(mapWaterlineLedgerGuidePoint({ x: 555, y: 100 }), { x: 1387.5, y: 50 });
  assert.deepEqual(mapWaterlineLedgerGuideRect({ x: 300, y: 225, width: 1020, height: 535 }), WATERLINE_LEDGER_CONTROL_GEOMETRY.semanticTarget);
  assert.deepEqual(mapWaterlineLedgerGuidePolyline([[225, 535], [430, 485]]), [{ x: 562.5, y: 1137.5 }, { x: 1075, y: 1012.5 }]);
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
    (r) => { r.schema = "horizon.waterline-ledger.v1"; },
    (r) => { r.copy.alt += " changed"; },
    (r) => { r.unknown = true; },
  ]) {
    const candidate = structuredClone(registry); mutate(candidate);
    assert.equal(isWaterlineLedgerLawful(guard(candidate)), false);
  }
  assert.equal(isWaterlineLedgerLawful({ ...guard(registry), predecessorComplete: 1 }), false);
  assert.equal(isWaterlineLedgerLawful({ ...guard(registry), decodedImage: { complete: true, naturalWidth: 1920, naturalHeight: 1080 } }), false);
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
