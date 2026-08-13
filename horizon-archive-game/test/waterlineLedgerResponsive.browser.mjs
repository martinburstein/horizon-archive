import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { FIRST_RUN_RESPONSIVE_LAYOUTS, deriveResponsiveEvidence } from "../src/responsiveImageProjection.js";

const relation = { x: 600, y: 300, width: 2640, height: 1500 };
const semanticTarget = { x: 900, y: 500, width: 2040, height: 1100 };
const essentialRects = [
  { x: 700, y: 1450, width: 2400, height: 650 },
  { x: 700, y: 600, width: 850, height: 800 },
  { x: 1550, y: 600, width: 750, height: 800 },
  { x: 2300, y: 600, width: 800, height: 800 },
];
const protectedRects = [
  { x: 0, y: 0, width: 400, height: 300 },
  { x: 3440, y: 0, width: 400, height: 300 },
];

test("all six shell layouts derive contained source-backed targets without protected overlap", () => {
  assert.deepEqual(Object.keys(FIRST_RUN_RESPONSIVE_LAYOUTS), ["desktop", "laptop", "narrow", "effective200", "retained320x180", "retained320x240"]);
  for (const viewport of Object.values(FIRST_RUN_RESPONSIVE_LAYOUTS)) {
    const evidence = deriveResponsiveEvidence({ viewport, relation, semanticTarget, essentialRects, protectedRects, objectFit: "cover", objectPosition: "50% 50%" });
    assert.ok(evidence);
    assert.ok(evidence.relation.retainedArea >= .95);
    assert.equal(evidence.essentialCentersVisible, true);
    assert.ok(evidence.target.width >= 44 && evidence.target.height >= 44);
    assert.equal(evidence.target.contained, true);
    assert.equal(evidence.protectedOverlap, 0);
  }
});

test("a deliberately displaced semantic target cannot masquerade as a valid projection", () => {
  const evidence = deriveResponsiveEvidence({ viewport: FIRST_RUN_RESPONSIVE_LAYOUTS.retained320x180, relation, semanticTarget: { x: 0, y: 0, width: 120, height: 120 }, essentialRects, protectedRects, objectFit: "cover", objectPosition: "50% 50%" });
  assert.ok(evidence);
  assert.ok(evidence.protectedOverlap > 0 || evidence.semanticContainsPhysicalCenter === false);
});

test("functional CSS preserves centered cover, minimum target, textual state borders, focus, forced colors, and reduced motion", () => {
  const css = readFileSync(fileURLToPath(new URL("../src/styles.css", import.meta.url)), "utf8");
  assert.match(css, /scene-art\.waterline-ledger-art\s*\{[^}]*object-fit:\s*cover;[^}]*object-position:\s*50% 50%/s);
  assert.match(css, /waterline-ledger-hotspot\s*\{[^}]*min-width:\s*44px;[^}]*min-height:\s*44px/s);
  for (const state of ["in_progress", "remediation_required", "complete"]) assert.match(css, new RegExp(`waterline-ledger-state-${state}`));
  assert.match(css, /waterline-ledger-hotspot:focus-visible/);
  assert.match(css, /@media \(forced-colors: active\)[\s\S]*waterline-ledger-hotspot/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)\s*\{\s*\*\s*\{[^}]*scroll-behavior:\s*auto/s);
});
