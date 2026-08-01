import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const component = readFileSync(new URL("../src/OffsetReach.jsx", import.meta.url), "utf8");
const controller = readFileSync(new URL("../src/OffsetReachNormal.js", import.meta.url), "utf8");
const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const entry = readFileSync(new URL("../src/CalibrationMarginNormalEntry.js", import.meta.url), "utf8");
const css = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");

test("TD008 production UI exposes exact longest copy and exactly two truthful production masters", () => {
  assert.match(component, /Review retained local association and independent offset responsibilities/);
  assert.doesNotMatch(component, /PROVISIONAL STRUCTURAL PLACEHOLDER|offset-world-placeholder/);
  const imports = component.match(/import\s+\w+\s+from\s+["'][^"']+\.(?:png|webp|jpg|jpeg|avif)["']/gi) ?? [];
  assert.equal(imports.length, 2);
  assert.match(component, /sc09-offset-reach-panorama-runtime-master-v1\.webp/);
  assert.match(component, /sc09-offset-reach-relation-detail-runtime-master-v1\.webp/);
  assert.match(component, /<img/);
  assert.match(component, /detailAltByCropId/);
  assert.deepEqual([...controller.matchAll(/imageRoles:[\s\S]*?Object\.freeze\(\[([^\]]+)/g)].length, 1);
});

test("TD008 UI preserves one status, native labelled forms, focus, and minimum targets", () => {
  assert.equal((component.match(/role="status"/g) ?? []).length, 1);
  assert.match(component, /aria-live="polite"/);
  assert.match(component, /aria-atomic="true"/);
  assert.match(component, /<fieldset/);
  assert.match(component, /<legend/);
  assert.match(component, /useLayoutEffect/);
  assert.match(css, /\.offset-actions button,[\s\S]*min-height: 44px/);
  assert.match(css, /@media \(forced-colors: active\)/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(css, /@media \(max-width: 900px\)/);
});

test("TD008 is wired through the normal App and entry controller without protected identity", () => {
  assert.match(app, /import \{ OffsetReach \} from "\.\/OffsetReach\.jsx"/);
  assert.match(app, /createOffsetReachStorageAdapter/);
  assert.match(app, /<OffsetReach/);
  assert.match(entry, /createOffsetReachNormalController/);
  assert.match(entry, /bv30_offset_reach_route_choice/);
  assert.doesNotMatch(`${app}\n${entry}\n${component}\n${controller}`, /OffsetReachProtectedJourney|rp008\.protected-journey\.v1/);
});

test("TD008 hard-stop and privacy vocabulary are explicit in normal source", () => {
  assert.match(controller, /successor: null/);
  assert.match(component, /NO LIVE EXTRACTION, FILE, SERVICE, ACCESS, AUTHORITY, EXAM GUARANTEE/);
  assert.doesNotMatch(component, /RP-009|RP-013|successor|ending/i);
  assert.doesNotMatch(controller, /\blocalStorage\.|\bsessionStorage\.|\bindexedDB\.|fetch\(|XMLHttpRequest|WebSocket|Worker\s*\(|WebAssembly\./);
});
