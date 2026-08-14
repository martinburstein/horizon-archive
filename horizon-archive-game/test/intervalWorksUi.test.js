import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const component = readFileSync(new URL("../src/IntervalWorks.jsx", import.meta.url), "utf8");
const controller = readFileSync(new URL("../src/IntervalWorksNormal.js", import.meta.url), "utf8");
const styles = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");
const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const entry = readFileSync(new URL("../src/CalibrationMarginNormalEntry.js", import.meta.url), "utf8");

test("TD006 UI has one polite status, heading focus, native controls, and persistent labels", () => {
  assert.match(component, /role="status"/);
  assert.match(component, /aria-live="polite"/);
  assert.match(component, /aria-atomic="true"/);
  assert.match(component, /tabIndex="-1"/);
  assert.match(component, /Available/);
  assert.match(component, /Recorded/);
  assert.doesNotMatch(component, /role="button"/);
  assert.match(component, /<button/);
  assert.match(component, /<select/);
  assert.match(component, /<textarea/);
});

test("TD006 UI binds two released masters plus fail-closed native metadata", () => {
  assert.match(controller, /SC-07-PANORAMA-MASTER/);
  assert.match(controller, /SC-07-CROSSSECTION-MASTER/);
  assert.match(component, /sc07-interval-works-panorama-runtime-master-v1\.webp/);
  assert.match(component, /sc07-interval-works-crosssection-runtime-master-v1\.webp/);
  assert.match(component, /data-image-role/);
  assert.match(component, /data-scene-role/);
  assert.match(component, /data-crop-id/);
  assert.match(component, /data-runtime-source-master/);
  assert.match(component, /data-strata-comb-state=\{host27State\}/);
  assert.match(component, /data-strata-comb-source=/);
  assert.match(component, /<img/);
  assert.doesNotMatch(component, /STRUCTURAL PLACEHOLDER|data-placeholder-owner|interval-world-placeholder/);
  assert.doesNotMatch(controller, /SC-08|BRAIDED VERGE|RP-007/i);
});

test("TD006 styles preserve targets, four layouts, forced colors, reduced motion, and containment", () => {
  const td006 = styles.slice(styles.indexOf("TD-006 Interval Works"));
  assert.match(td006, /min-height:\s*44px/);
  assert.match(td006, /100dvh/);
  assert.match(td006, /max-width:\s*1500px/);
  assert.match(td006, /max-width:\s*840px/);
  assert.match(td006, /prefers-reduced-motion/);
  assert.match(td006, /forced-colors/);
  assert.match(td006, /scroll-behavior:\s*auto/);
  assert.match(td006, /grid-template-columns:\s*1fr/);
});

test("TD006 production entry imports normal implementation and keeps protected journey unimported", () => {
  assert.match(app, /from "\.\/IntervalWorks\.jsx"/);
  assert.match(app, /from "\.\/IntervalWorksNormal\.js"/);
  assert.match(entry, /from "\.\/IntervalWorksNormal\.js"/);
  assert.doesNotMatch(app, /IntervalWorksProtectedJourney/);
  assert.doesNotMatch(entry, /IntervalWorksProtectedJourney/);
  assert.doesNotMatch(controller, /IntervalWorksProtectedJourney/);
  assert.match(app, /INTERVAL_WORKS_SHELL_VERSION/);
  assert.match(entry, /interval_works_arrived_zero_evidence/);
});
