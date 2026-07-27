import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const view = readFileSync(new URL("../src/ManyfoldReturn.jsx", import.meta.url), "utf8");
const styles = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");
const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");

test("TD005 UI has one polite atomic status, heading focus, persistent labels, and native controls", () => {
  assert.match(view, /role="status"/);
  assert.match(view, /aria-live="polite"/);
  assert.match(view, /aria-atomic="true"/);
  assert.match(view, /<h1 id=\{state\.headingId\} tabIndex="-1"/);
  assert.match(view, /<textarea/);
  assert.match(view, /<select/);
  assert.match(view, /<button/);
  assert.doesNotMatch(view, /onMouseOver|onPointerMove|imageMap|<area\b/);
});
test("TD005 UI binds exactly two honestly disclosed role gaps and state metadata", () => {
  assert.equal((view.match(/^import .*Placeholder from /gm) ?? []).length, 2);
  assert.match(view, /data-world-role=\{worldScene\?\.role\}/);
  assert.match(view, /data-world-master=\{worldScene\?\.masterId\}/);
  assert.match(view, /data-world-crop=\{worldScene\?\.cropId\}/);
  assert.match(view, /data-runtime-source-master=\{runtimeSourceMaster\}/);
  assert.match(view, /data-asset-status="PLACEHOLDER — IMAGE SPECIALIST GAP"/);
  assert.match(view, /data-placeholder-retirement=/);
  assert.match(view, /released Three-Current Reach panorama stands in for the pending SC-06 panorama master/);
  assert.match(view, /existing City Threshold access scene stands in for the pending SC-06 forensic detail master/);
  assert.match(view, /adjacent expedition text carries the complete current meaning/);
  assert.match(app, /MANYFOLD_RETURN_SHELL_VERSION/);
});

test("TD005 Quartermaster copy retires structural placeholders and raw evaluator identifiers", () => {
  assert.doesNotMatch(view, /TD005-COPY-|data-copy-placeholder/);
  assert.doesNotMatch(view, /replaceAll\("_", " "\)/);
  assert.doesNotMatch(view, /<legend>\{item\.id\}/);
  assert.doesNotMatch(view, /<li key=\{id\}>\{id\}<\/li>/);
  assert.match(view, /return `\$\{form\} case \$\{Number\(match\[2\]\)\}`/);
  assert.match(view, /Return one dictionary/);
  assert.match(view, /technique: "Requested text technique"/);
  assert.match(view, /fieldCopy\[caseDimension\[3\]\]/);
  assert.match(view, /Review the named responsibility only/);
  assert.match(view, /recurrence is description, divergence is supported difference/i);
  assert.match(view, /Truth: null\. Purpose: null\. Destination: null\./);
  assert.match(view, /PILOT \/\/ SAFE RETURN/);
});

test("TD005 styles preserve target, reflow, forced-color, and reduced-motion contracts", () => {
  assert.match(styles, /\.three-current-actions button,[\s\S]*min-height: 44px/);
  assert.match(styles, /@media \(max-width: 767px\)[\s\S]*\.manyfold-form-grid,[\s\S]*grid-template-columns: 1fr/);
  assert.match(styles, /@media \(forced-colors: active\)[\s\S]*\.manyfold-panel \[role="status"\]/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)[\s\S]*\.manyfold-return/);
});
