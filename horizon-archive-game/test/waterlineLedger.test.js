import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { updateObjectiveLedgerEvidence } from "../src/objectiveLedgerExercise.js";
import {
  WATERLINE_LEDGER_COPY,
  WATERLINE_LEDGER_PATH,
  WATERLINE_LEDGER_REGISTRY,
  auditWaterlineLedgerRegistry,
  buildWaterlineLedgerLayoutRecords,
  deriveWaterlineLedgerLauncherGuards,
  deriveWaterlineLedgerSelector,
  deriveWaterlineLedgerState,
  getWaterlineLedgerHotspot,
  isWaterlineLedgerLawful,
} from "../src/waterlineLedger.js";

const source = { enabled: true, path: WATERLINE_LEDGER_PATH, attemptId: "H14-1", bytes: 123456, sha256: "a".repeat(64), width: 3840, height: 2160, format: "png", color: "opaque-srgb-8" };
const provenance = { schema: "horizon.first-run.source-provenance.v1", path: source.path, attemptId: source.attemptId, bytes: source.bytes, sha256: source.sha256 };
const base = {
  schema: "horizon.waterline-ledger.v1",
  source,
  provenance,
  relation: { x: 600, y: 300, width: 2640, height: 1500 },
  dryApproach: { x: 700, y: 1450, width: 2400, height: 650 },
  histories: {
    foundation: { x: 700, y: 600, width: 850, height: 800 },
    repair: { x: 1550, y: 600, width: 750, height: 800 },
    serviceSkin: { x: 2300, y: 600, width: 800, height: 800 },
  },
  depositionBand: { bounds: { x: 720, y: 850, width: 2330, height: 260 }, points: [{ x: 740, y: 970 }, { x: 1350, y: 900 }, { x: 1900, y: 1040 }, { x: 2500, y: 880 }, { x: 3020, y: 1010 }] },
  waterline: { x: 0, y: 1820, width: 3840, height: 300 },
  serviceSeams: [
    [{ x: 1100, y: 1480 }, { x: 1080, y: 900 }, { x: 1050, y: 420 }],
    [{ x: 1920, y: 1480 }, { x: 1950, y: 900 }, { x: 1910, y: 400 }],
    [{ x: 2740, y: 1480 }, { x: 2700, y: 920 }, { x: 2780, y: 430 }],
  ],
  semanticTarget: { x: 900, y: 500, width: 2040, height: 1100 },
  physicalCenter: { x: 1920, y: 1050 },
  labelAnchor: { x: 450, y: 80, width: 420, height: 180, insetOuterCss: 3, insetTextCss: 5, focusSeparationCss: 8 },
  protected: {
    predecessor: { x: 0, y: 1200, width: 400, height: 400 },
    nextBoundary: { x: 3440, y: 500, width: 400, height: 400 },
    liveWater: { x: 0, y: 1840, width: 3840, height: 320 },
    returnRoute: { x: 0, y: 500, width: 400, height: 400 },
    suspendedLandmark: { x: 3440, y: 0, width: 400, height: 300 },
    crown: { x: 3440, y: 1000, width: 400, height: 400 },
    witness: { x: 0, y: 0, width: 400, height: 300 },
  },
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
  assert.equal(Object.isFrozen(WATERLINE_LEDGER_REGISTRY.histories), true);
  assert.equal(WATERLINE_LEDGER_REGISTRY.source.enabled, false);
  assert.equal(WATERLINE_LEDGER_REGISTRY.source.path, null);
  assert.equal(WATERLINE_LEDGER_REGISTRY.provenance, null);
  assert.equal(WATERLINE_LEDGER_REGISTRY.copy, null);
  assert.deepEqual(WATERLINE_LEDGER_REGISTRY.serviceSeams, []);
  assert.equal(isWaterlineLedgerLawful(guard(WATERLINE_LEDGER_REGISTRY)), false);
});

test("lawfulness requires exact non-coercing source, provenance, copy, decode, and predecessor identity", () => {
  const registry = acceptedRegistry();
  assert.equal(isWaterlineLedgerLawful(guard(registry)), true, JSON.stringify({ audit: auditWaterlineLedgerRegistry(registry), layouts: registry.layouts }));
  for (const mutate of [
    (r) => { r.source.enabled = 1; },
    (r) => { r.source.path = `${WATERLINE_LEDGER_PATH}.wrong`; },
    (r) => { r.source.attemptId = "H14-33"; },
    (r) => { r.source.bytes = String(r.source.bytes); },
    (r) => { r.source.sha256 = "A".repeat(64); },
    (r) => { r.source.format = "PNG"; },
    (r) => { r.source.color = "rgba"; },
    (r) => { r.provenance.sha256 = "b".repeat(64); },
    (r) => { r.schema = "horizon.waterline-ledger.v0"; },
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
    (r) => { r.histories.repair = r.histories.foundation; },
    (r) => { r.histories.repair = structuredClone(r.histories.foundation); },
    (r) => { r.depositionBand.points = r.depositionBand.points.slice(0, 2); },
    (r) => { r.depositionBand.points = [{ x: 800, y: 900 }, { x: 1200, y: 900 }, { x: 1600, y: 900 }, { x: 2000, y: 900 }]; },
    (r) => { r.serviceSeams = r.serviceSeams.slice(0, 2); },
    (r) => { r.serviceSeams[2] = structuredClone(r.serviceSeams[1]); },
    (r) => { r.serviceSeams[0].reverse(); },
    (r) => { r.physicalCenter = { x: 200, y: 200 }; },
    (r) => { r.protected.liveWater = { x: 900, y: 500, width: 500, height: 500 }; },
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
