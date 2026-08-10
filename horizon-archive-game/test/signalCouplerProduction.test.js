import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { MEADOW_PIXEL_HOTSPOTS } from "../src/pixelMeadow.js";

const appUrl = new URL("../src/App.jsx", import.meta.url);
const styleUrl = new URL("../src/styles.css", import.meta.url);

test("playable first Terminal uses the approved integrated static master", async () => {
  const app = await readFile(appUrl, "utf8");
  assert.match(app, /glass-meadow-integrated-terminal-master-v1\.png/);
  assert.doesNotMatch(app, /Pixelated Draft|\.gif|signalCoupler|signal-coupler|import \{ MeadowRouteMarker \}|<MeadowRouteMarker/);
});

test("first-contact semantics and focus geometry remain unchanged", async () => {
  const [app, styles] = await Promise.all([readFile(appUrl, "utf8"), readFile(styleUrl, "utf8")]);
  assert.match(app, /hotspotLabel: "field-linked Terminal"/);
  assert.doesNotMatch(app, /Petal [Tt]erminal/);
  assert.match(app, /Cold glass fins rise from a dark housing\. Paired channels continue under the field and beyond sight\./);
  assert.match(styles, /data-scene="meadow"\] \.hotspot\[data-hotspot-id="primary"\] span \{[\s\S]*?left: -148px;[\s\S]*?top: 6px;[\s\S]*?width: 132px;/);
  assert.match(styles, /data-canonical-layout="narrow"\][\s\S]*?data-hotspot-id="primary"\] span \{[\s\S]*?left: -76px;[\s\S]*?top: 2px;[\s\S]*?width: 70px;/);
  assert.deepEqual(MEADOW_PIXEL_HOTSPOTS.primary, {
    left: "25%", top: "11.1111%", width: "50%", height: "88.8889%",
  });
  assert.match(app, /ref=\{hotspot\.primary \? primaryHotspotRef : isFractureNursery \? fractureNurseryRef : isSixfoldWeir \? sixfoldWeirRef : undefined\}/);
  assert.match(app, /aria-label=\{`\$\{verb\.toLowerCase\(\)\} \$\{hotspot\.label\}/);
});

test("primary Terminal focus is localized while every other hotspot keeps the shared cue", async () => {
  const styles = await readFile(styleUrl, "utf8");
  assert.match(styles, /\.hotspot:hover, \.hotspot:focus-visible \{ border-color: rgba\(232, 215, 177, 0\.88\); background: rgba\(116, 91, 143, 0\.16\); \}/);
  assert.match(styles, /data-scene="meadow"\] \.hotspot\[data-hotspot-id="primary"\]:hover,[\s\S]*?data-scene="meadow"\] \.hotspot\[data-hotspot-id="primary"\]:focus-visible \{[\s\S]*?border-color: transparent;[\s\S]*?background: transparent;/);
  assert.match(styles, /data-scene="meadow"\] \.hotspot\[data-hotspot-id="primary"\]:focus-visible \{[\s\S]*?outline: none;/);
  assert.match(styles, /data-scene="meadow"\] \.hotspot\[data-hotspot-id="primary"\]:focus-visible span \{[\s\S]*?opacity: 1;[\s\S]*?border-color: #f0c96a;[\s\S]*?outline: 2px solid #f0c96a;[\s\S]*?outline-offset: 2px;[\s\S]*?box-shadow: 0 0 0 5px rgba\(8, 9, 16, 0\.86\);/);
  assert.match(styles, /@media \(forced-colors: active\) \{[\s\S]*?data-scene="meadow"\] \.hotspot\[data-hotspot-id="primary"\]:focus-visible span \{[\s\S]*?background: Canvas;[\s\S]*?outline: 3px solid Highlight;[\s\S]*?forced-color-adjust: auto;/);
  assert.match(styles, /\.hotspot:is\(\[data-hotspot-id="route-marker"\], \[data-hotspot-id="fracture-nursery"\], \[data-hotspot-id="sixfold-weir"\]\) span \{[\s\S]*?opacity: 1;/);
  assert.doesNotMatch(styles, /data-scene="meadow"\][^}]*data-hotspot-id="route-marker"[^}]*outline:\s*none/);
});

test("retired whole-object overlay styles cannot return accidentally", async () => {
  const styles = await readFile(styleUrl, "utf8");
  assert.doesNotMatch(styles, /signal-coupler-picture|signal-coupler-overlay|meadow-route-marker-layer/);
  assert.match(styles, /\.canonical-game-frame \.scene-art\.glass-meadow-art \{[^}]*object-fit: cover;/s);
});
