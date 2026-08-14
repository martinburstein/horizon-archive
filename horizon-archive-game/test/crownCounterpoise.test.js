import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  CROWN_COUNTERPOISE_COPY,
  CROWN_COUNTERPOISE_PATH,
  CROWN_COUNTERPOISE_REGISTRY,
  auditCrownCounterpoiseRegistry,
  deriveCrownCounterpoiseLesson,
  deriveCrownCounterpoiseLauncherGuards,
  deriveCrownCounterpoiseSelector,
  deriveCrownCounterpoiseState,
  getCrownCounterpoiseHotspot,
} from "../src/crownCounterpoise.js";

const decoded = { complete: true, naturalWidth: 1920, naturalHeight: 1080 };
const guard = (extra = {}) => ({ predecessorComplete: true, decodedImage: decoded, ...extra });

test("Host 15 production source is exact, frozen, and responsive in all six layouts", () => {
  assert.equal(Object.isFrozen(CROWN_COUNTERPOISE_REGISTRY), true);
  assert.equal(CROWN_COUNTERPOISE_REGISTRY.source.path, CROWN_COUNTERPOISE_PATH);
  assert.deepEqual(auditCrownCounterpoiseRegistry(), { source: true, layouts: true, copy: true });
  assert.equal(Object.keys(CROWN_COUNTERPOISE_REGISTRY.layouts).length, 6);
  assert.ok(Object.values(CROWN_COUNTERPOISE_REGISTRY.layouts).every((entry) => entry.relationRetention >= .95 && entry.essentialCentersVisible && entry.target.contained));
});

test("Host 15 fails closed on source, decode, predecessor, and malformed evidence", () => {
  assert.equal(deriveCrownCounterpoiseState().state, "hidden");
  assert.equal(deriveCrownCounterpoiseState(guard({ predecessorComplete: false })).state, "hidden");
  assert.equal(deriveCrownCounterpoiseState(guard({ decodedImage: { complete: true, naturalWidth: 3840, naturalHeight: 2160 } })).state, "hidden");
  const registry = structuredClone(CROWN_COUNTERPOISE_REGISTRY); registry.source.sha256 = "0".repeat(64);
  assert.equal(deriveCrownCounterpoiseState(guard({ registry })).state, "hidden");
  assert.equal(deriveCrownCounterpoiseState(guard({ capstoneEvidence: { masteryStatus: "mastered" } })).state, "hidden");
});

test("Host 15 preserves capstone, mixed simulation, and optional final-confidence order", () => {
  assert.deepEqual(deriveCrownCounterpoiseState(guard()), { state: "available", lesson: "capstone-readiness" });
  const capstone = { exerciseId: "EX-L0603-CAPSTONE-READINESS", masteryStatus: "mastered" };
  assert.notEqual(deriveCrownCounterpoiseState(guard({ capstoneEvidence: capstone })).lesson, "mixed-simulation", "forged capstone mastery must be downgraded");
  assert.deepEqual(deriveCrownCounterpoiseLesson({ capstone: { masteryStatus: "mastered" } }), { state: "in_progress", lesson: "mixed-simulation" });
  assert.deepEqual(deriveCrownCounterpoiseLesson({ capstone: { masteryStatus: "mastered" }, mixed: { masteryStatus: "mastered" } }), { state: "optional", lesson: "final-confidence" });
  assert.deepEqual(deriveCrownCounterpoiseLesson({ capstone: { masteryStatus: "mastered" }, mixed: { masteryStatus: "mastered" }, final: { masteryStatus: "mastered" } }), { state: "complete", lesson: null });
});

test("one selector owns the native host while inverse guards preserve fallback", () => {
  const state = deriveCrownCounterpoiseState(guard());
  assert.equal(deriveCrownCounterpoiseSelector({ sceneId: "ruins", pendingAdvance: true, state }), true);
  assert.deepEqual(deriveCrownCounterpoiseLauncherGuards({ nativeActive: true, state }), { capstone: false, mixed: false, final: false });
  assert.deepEqual(deriveCrownCounterpoiseLauncherGuards({ nativeActive: false, state }), { capstone: true, mixed: false, final: false });
});

test("Host 15 exposes one contained source-derived semantic target and current alt text", () => {
  const hotspot = getCrownCounterpoiseHotspot();
  assert.ok(hotspot);
  assert.match(hotspot.width, /^max\(.+%, 44px\)$/);
  assert.match(hotspot.height, /^max\(.+%, 44px\)$/);
  assert.match(CROWN_COUNTERPOISE_COPY.alt, /grounded alien coupling/i);
});

test("App binds the selected plate, native entry, three owned launchers, and unchanged departure", () => {
  const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
  const css = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");
  assert.match(app, /host15-environment-master-v2\.png/);
  assert.match(app, /data-hotspot-id=\{hotspot\.id\}/);
  assert.match(app, /hotspotId==="crown-counterpoise"/);
  assert.match(app, /!crownCounterpoiseNativeActive[^\n]+openCapstoneReadiness/);
  assert.match(app, /!crownCounterpoiseNativeActive[^\n]+openMixedSimulation/);
  assert.match(app, /!crownCounterpoiseNativeActive[^\n]+openFinalConfidence/);
  assert.match(app, /mixedSimulationEvidence\?\.masteryStatus === "mastered"[\s\S]*?Continue to the next survey site/);
  assert.match(app, /scene-art waterline-ledger-art crown-counterpoise-art/);
  assert.match(app, /waterline-ledger-hotspot crown-counterpoise-hotspot/);
  assert.match(css, /scene-art\.waterline-ledger-art\s*\{[^}]*object-fit:\s*cover;[^}]*object-position:\s*50% 50%/s);
  assert.match(css, /waterline-ledger-hotspot\s*\{[^}]*min-width:\s*44px;[^}]*min-height:\s*44px/s);
  assert.match(css, /waterline-ledger-hotspot:focus-visible/);
  assert.match(css, /@media \(forced-colors: active\)[\s\S]*waterline-ledger-hotspot/);
});
