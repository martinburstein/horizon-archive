import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync, statSync } from "node:fs";
import test from "node:test";

const component = readFileSync(
  new URL("../src/ThreeCurrentReach.jsx", import.meta.url),
  "utf8",
);
const styles = readFileSync(
  new URL("../src/styles.css", import.meta.url),
  "utf8",
);
const controller = readFileSync(
  new URL("../src/ThreeCurrentReachNormal.js", import.meta.url),
  "utf8",
);
const runtimeMasterUrl = new URL(
  "../../Visual Direction/Production Masters/2026-07-26-rp004-three-current-runtime-master/sc05-three-current-panorama-runtime-master-v1.webp",
  import.meta.url,
);
const runtimeMaster = readFileSync(runtimeMasterUrl);
const runtimeMasterProvenance = readFileSync(
  new URL(
    "../../Visual Direction/Production Masters/2026-07-26-rp004-three-current-runtime-master/PROVENANCE.md",
    import.meta.url,
  ),
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

test("TD004 directly imports the registered SC-05 runtime master with exact identity", () => {
  assert.match(
    component,
    /2026-07-26-rp004-three-current-runtime-master\/sc05-three-current-panorama-runtime-master-v1\.webp/,
  );
  assert.doesNotMatch(component, /city-threshold-overview-master\.png/);
  assert.equal(statSync(runtimeMasterUrl).size, 2_163_752);
  assert.equal(
    createHash("sha256").update(runtimeMaster).digest("hex").toUpperCase(),
    "B6E0F34A917732DBB7B66B65968198CFC068BC650AC00CD8A01F095A6109F63F",
  );
  assert.match(runtimeMasterProvenance, /Dimensions: `3840 x 2160`/);
  assert.match(
    runtimeMasterProvenance,
    /does not contain or claim\s+native 4K capture detail/,
  );
  assert.match(runtimeMasterProvenance, /Additional generations for this runtime master: `0`/);
  assert.match(runtimeMasterProvenance, /source reveal remains byte-for-byte unchanged/);
});

test("TD004 responsive, target, forced-color and reduced-motion rules are explicit", () => {
  assert.match(styles, /\.three-current-reach/);
  assert.match(styles, /\.three-current-reach \.three-current-world \{[\s\S]*?aspect-ratio: auto/);
  assert.match(styles, /\.three-current-reach \.three-current-panel \{[\s\S]*?grid-template-columns: minmax\(0, 1fr\)/);
  assert.match(styles, /\.canonical-game-host:has\(\.three-current-reach\) \.crt-stage-anchor \{[\s\S]*?width: 100%/);
  assert.match(styles, /\.three-current-actions \{[\s\S]*?position: sticky/);
  assert.match(styles, /@media \(max-width: 1279px\) \{[\s\S]*?\.three-current-actions \{[\s\S]*?position: static/);
  assert.match(styles, /\.three-current-actions button\[data-action-id\^="SUBMIT "\]/);
  assert.match(styles, /\.three-current-world \.city-world-plate-native \{[\s\S]*?display: block/);
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

test("TD004 production copy replaces raw evaluator and structural placeholder labels", () => {
  assert.doesNotMatch(component, /replaceAll\("_", " "\)/);
  assert.doesNotMatch(component, /<legend>\{scenario\.id\}/);
  assert.match(component, /Collection traversed by the loop/);
  assert.match(component, /Requested AI workload/);
  assert.match(component, /Append one ordered sample-and-corridor record/);
  assert.match(component, /The prior response has been cleared/);
  assert.match(controller, /Four physical observations/);
  assert.match(component, /PILOT \/\/ KNOWN RETURN/);
  assert.doesNotMatch(component, /Â|â€”/);
});
