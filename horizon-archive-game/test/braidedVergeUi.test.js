import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  BRAIDED_VERGE_ROUTE_GROUP,
  BRAIDED_VERGE_ROUTE_OWNER,
  braidedVergeActions,
  braidedVergeObservationIds,
  braidedVergeRegions,
  createBraidedVergeIntent,
  createBraidedVergeRouteIntent,
} from "../src/BraidedVergeNormal.js";
import { createCalibrationMarginNormalEntryIntent } from "../src/CalibrationMarginNormalEntry.js";

const component = readFileSync(new URL("../src/BraidedVerge.jsx", import.meta.url), "utf8");
const controller = readFileSync(new URL("../src/BraidedVergeNormal.js", import.meta.url), "utf8");
const intervalComponent = readFileSync(new URL("../src/IntervalWorks.jsx", import.meta.url), "utf8");
const entry = readFileSync(new URL("../src/CalibrationMarginNormalEntry.js", import.meta.url), "utf8");
const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const styles = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");

test("TD007 production entry exposes one independent IW-30 route and normal BV component", () => {
  const intent = createBraidedVergeRouteIntent(
    braidedVergeActions.route,
    "screen_reader",
    "normal-ui-route-token",
  );
  assert.equal(intent.activeGroupId, BRAIDED_VERGE_ROUTE_GROUP);
  assert.equal(intent.expectedOwner, BRAIDED_VERGE_ROUTE_OWNER);
  assert.equal(intent.allowlistedActionId, braidedVergeActions.route);
  const integrated = createCalibrationMarginNormalEntryIntent(
    braidedVergeActions.route,
    "screen_reader",
    "integrated-route-token",
    "IW-30 ROUTE CHOICE",
    BRAIDED_VERGE_ROUTE_GROUP,
  );
  assert.deepEqual(integrated, {
    ...intent,
    opaqueFreshEventToken: "integrated-route-token",
  });
  assert.match(intervalComponent, /Choose the next expedition boundary/);
  assert.match(intervalComponent, /braidedVergeActions\.route/);
  assert.match(app, /from "\.\/BraidedVerge\.jsx"/);
  assert.match(app, /<BraidedVerge/);
});

test("TD007 UI has one status, deterministic focus, native controls, and equal textual peers", () => {
  assert.equal((component.match(/role="status"/g) ?? []).length, 1);
  assert.match(component, /aria-live="polite"/);
  assert.match(component, /aria-atomic="true"/);
  assert.match(component, /CSS\.escape\(state\.focusIntent/);
  assert.match(component, /Five equal material observations/);
  assert.match(component, /Recorded/);
  assert.match(component, /Available/);
  assert.match(component, /<button/);
  assert.match(component, /<select/);
  assert.match(component, /<textarea/);
  assert.equal(braidedVergeObservationIds.length, 5);
  assert.equal(Object.keys(braidedVergeRegions).length, 5);
  assert.match(component, /data-region-id=\{braidedVergeRegions\[id\]\.id\}/);
});

test("TD007 exposes exactly two truthful structural image-role placeholders", () => {
  assert.match(component, /STRUCTURAL PLACEHOLDER/);
  assert.match(component, /data-placeholder-owner="quartermaster"/);
  assert.match(component, /SC-08-PANORAMA-MASTER — QUARTERMASTER ASSET PENDING/);
  assert.match(component, /SC-08-CONTACT-DETAIL-MASTER — QUARTERMASTER ASSET PENDING/);
  assert.doesNotMatch(component, /import\s+\w+\s+from\s+["'][^"']+\.(?:png|webp|jpg|jpeg|avif)["']/i);
  assert.doesNotMatch(component, /<img/);
  assert.doesNotMatch(controller, /Production Masters|\.png|\.webp|\.jpg|\.avif/i);
});

test("TD007 UI states exact workspace truth, offline authority limits, and no answer-bearing image map", () => {
  assert.match(`${component}\n${controller}`, /does not execute arbitrary Python or contact a live service/);
  assert.match(component, /NO LIVE FILE, VISION, GENERATION, SERVICE, ACCESS, AUTHORITY/);
  assert.match(component, /Local expedition record only/);
  assert.doesNotMatch(component, /onClick=.*braidedVergeRegions|<area|useMap|image-map/i);
  assert.doesNotMatch(component, /Python executed|program ran|file saved to disk/i);
});

test("TD007 CSS preserves targets, four layouts, forced colors, reduced motion, and containment", () => {
  const td007 = styles.slice(styles.indexOf("TD-007 Braided Verge"), styles.indexOf("TD-006 Interval Works"));
  assert.match(td007, /min-height:\s*44px/);
  assert.match(td007, /100dvh/);
  assert.match(td007, /max-width:\s*1500px/);
  assert.match(td007, /max-width:\s*840px/);
  assert.match(td007, /prefers-reduced-motion/);
  assert.match(td007, /forced-colors/);
  assert.match(td007, /scroll-behavior:\s*auto/);
  assert.match(td007, /grid-template-columns:\s*1fr/);
  assert.match(td007, /border-style:\s*double/);
});

test("TD007 production excludes protected reference, fixture, storage APIs, network, and later content", () => {
  const production = [component, controller, entry, app].join("\n");
  assert.doesNotMatch(production, /BraidedVergeProtectedJourney/);
  assert.doesNotMatch(production, /reference_(?:primary|retrieval|transfer)/);
  assert.doesNotMatch(production, /TD007_BRAIDED_VERGE_FIXTURE|td007-braided-verge-v1|127\.0\.0\.1:4179/);
  assert.doesNotMatch(controller, /(?:window\.)?(?:localStorage|sessionStorage)\.(?:getItem|setItem|removeItem)|indexedDB\.open|caches\.(?:open|match)|serviceWorker\.register|showOpenFilePicker\(|clipboard\.(?:read|write)|fetch\(|new\s+(?:XMLHttpRequest|WebSocket|EventSource)/);
  assert.doesNotMatch(controller, /RP-008|rp008|SC-09|successor_route|post-ending/i);
});

test("TD007 all seven modality metadata paths converge through one semantic intent shape", () => {
  for (const modality of [
    "pointer", "touch", "keyboard_enter", "keyboard_space", "switch", "speech", "screen_reader",
  ]) {
    const intent = createBraidedVergeIntent({
      activeGroup: "bv00_orientation",
      owner: "PILOT // FIELD ORIENTATION",
    }, braidedVergeActions.inspect, modality, `modality-${modality}-token`);
    assert.equal(intent.activationKind, modality);
    assert.equal(Object.keys(intent).length, 9);
    assert.equal(intent.allowlistedActionId, braidedVergeActions.inspect);
  }
});
