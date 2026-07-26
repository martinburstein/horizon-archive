import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const component = readFileSync(
  new URL("../src/ThreeCurrentReach.jsx", import.meta.url),
  "utf8",
);
const styles = readFileSync(
  new URL("../src/styles.css", import.meta.url),
  "utf8",
);

test("TD004 renderer owns one heading, one polite status, blank native forms and deterministic focus", () => {
  assert.match(component, /<h1 ref=\{headingRef\} id=\{state\.headingId\} tabIndex="-1">/);
  assert.match(component, /id="three-current-status"/);
  assert.match(component, /role="status"/);
  assert.match(component, /aria-live="polite"/);
  assert.match(component, /aria-atomic="true"/);
  assert.match(component, /value=\{fields\.learnerSource \?\? ""\}/);
  assert.match(component, /<select/);
  assert.match(component, /type="button"/);
  assert.match(component, /disabled=\{observation\?\.recorded \|\| undefined\}/);
  assert.match(component, /headingRef\.current\?\.focus/);
});

test("TD004 responsive, target, forced-color and reduced-motion rules are explicit", () => {
  assert.match(styles, /\.three-current-reach/);
  assert.match(styles, /min-height: 44px/);
  assert.match(styles, /@media \(max-width: 1279px\)/);
  assert.match(styles, /@media \(max-width: 520px\)/);
  assert.match(styles, /@media \(forced-colors: active\)/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
});

test("TD004 public renderer states no live control, authority, guarantee, or world response", () => {
  assert.match(component, /No live landscape, Azure,/);
  assert.match(component, /external action,/);
  assert.match(component, /exam guarantee,/);
  assert.match(component, /world response/);
  assert.match(component, /no landscape crop, material,/);
});
