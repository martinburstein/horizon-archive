import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const component = readFileSync(new URL("../src/OccludedFold.jsx", import.meta.url), "utf8");
const controller = readFileSync(new URL("../src/OccludedFoldNormal.js", import.meta.url), "utf8");
const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const entry = readFileSync(new URL("../src/CalibrationMarginNormalEntry.js", import.meta.url), "utf8");
const css = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");

test("TD009 production UI exposes the four exact longest UTF-8 samples", () => {
  assert.match(component, /RECONCILE THREE SEPARATELY ATTRIBUTABLE EXPEDITION RECORDS WITHOUT INFERRING AN INTERNAL TOPOLOGY/);
  assert.match(component, /CONFIRM THAT BOUNDED CORRESPONDENCE DOES NOT ESTABLISH IDENTITY, CONTINUITY, TRANSFORMATION, CAUSE, PURPOSE, OR AUTHORITY/);
  assert.match(component, /RP-008 — Bounded offset record retained separately: comparable exposed relations remain local evidence and do not establish a universal arrangement, exclusive lineage, unity, cause, or purpose\./);
  assert.match(`${component}\n${controller}`, /The course validator checks the approved Python source shape and derives the bounded ledger from session-only sanitized replicas\. It does not execute arbitrary Python, read a real process environment or secret, or contact a live service\./);
  assert.doesNotMatch(`${component}\n${controller}`, /Ã|Â|â€”|â€“|â€|â€™/);
});

test("TD009 verified rollback copy names prior RP-009 bytes or verified absence", () => {
  assert.match(component, /Prior RP-009 bytes or verified absence were restored exactly\. Retry begins without private work\./);
  assert.doesNotMatch(component, /prior RP-008 bytes or verified absence were restored/i);
});

test("TD009 retires image placeholders into truthful code-native treatment with no runtime media", () => {
  assert.doesNotMatch(component, /structural placeholder|final media seam|not final art/i);
  assert.equal((component.match(/import\s+\w+\s+from\s+["'][^"']+\.(?:png|webp|jpg|jpeg|avif)["']/gi) ?? []).length, 0);
  assert.match(controller, /SC-10-OCCLUDED-FOLD-PANORAMA/);
  assert.match(controller, /SC-10-OCCLUDED-FOLD-EXPOSED-EDGE-DETAIL/);
  assert.match(component, /data-rendering-medium="css"/);
  assert.match(component, /data-runtime-image="deferred"/);
  assert.match(component, /Code-native environmental treatment of the SC-10 Occluded Fold/);
  assert.doesNotMatch(css, /occluded-structural-placeholder/);
});

test("TD009 UI preserves native semantics, one status, deterministic focus, and 44px targets", () => {
  assert.equal((component.match(/role="status"/g) ?? []).length, 1);
  assert.match(component, /aria-live="polite"/);
  assert.match(component, /aria-atomic="true"/);
  assert.match(component, /<fieldset/);
  assert.match(component, /<legend/);
  assert.match(component, /useLayoutEffect/);
  assert.match(css, /\.occluded-actions button,[\s\S]*?min-height:44px/);
  assert.match(css, /@media\(forced-colors:active\)/);
  assert.match(css, /@media\(prefers-reduced-motion:reduce\)/);
  assert.match(css, /@media\(max-width:900px\)/);
});

test("TD009 rendered contract exposes the frozen active owner and three exact ordered scopes", () => {
  assert.match(component, /data-active-owner=\{state\.owner\}>\{state\.owner\}/);
  assert.match(component, /Content attribution: \{state\.contentAttribution\}/);
  assert.match(component, /data-review-scope=\{row\.scope\}/);
  const rp007 = controller.indexOf('id: "retained_rp007_scope", scope: "RP-007", owner: "Retained RP-007 summary"');
  const rp008 = controller.indexOf('id: "retained_rp008_scope", scope: "RP-008", owner: "Retained RP-008 summary"');
  const rp009 = controller.indexOf('id: "candidate_rp009_scope", scope: "RP-009", owner: "Candidate RP-009 edge ledger"');
  assert.ok(rp007 >= 0 && rp007 < rp008 && rp008 < rp009);
  assert.equal((controller.match(/\["OF-20 [^\n]+, "PILOT \/\/ COURSE WORK"/g) ?? []).length, 8);
});

test("TD009 is normal-App wired and protected identity remains excluded", () => {
  assert.match(app, /import \{ OccludedFold \} from "\.\/OccludedFold\.jsx"/);
  assert.match(app, /createOccludedFoldStorageAdapter/);
  assert.match(app, /<OccludedFold/);
  assert.match(entry, /createOccludedFoldNormalController/);
  assert.match(entry, /OCCLUDED_FOLD_ROUTE_GROUP/);
  assert.doesNotMatch(`${app}\n${entry}\n${component}\n${controller}`, /OccludedFoldProtectedJourney|rp009\.protected-journey\.v1/);
});

test("TD009 hard-stop, offline, and privacy boundaries are explicit", () => {
  assert.match(controller, /successor: null/);
  assert.match(component, /NO LIVE EXTRACTION, FILE, SERVICE, ACCESS, AUTHORITY, EXAM GUARANTEE/);
  assert.doesNotMatch(component, /RP-010|RP-013|ending/i);
  assert.doesNotMatch(controller, /\blocalStorage\.|\bsessionStorage\.|\bindexedDB\.|fetch\(|XMLHttpRequest|WebSocket|Worker\s*\(|WebAssembly\./);
});
