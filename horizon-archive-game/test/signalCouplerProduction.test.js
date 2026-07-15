import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

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
});

test("retired whole-object overlay styles cannot return accidentally", async () => {
  const styles = await readFile(styleUrl, "utf8");
  assert.doesNotMatch(styles, /signal-coupler-picture|signal-coupler-overlay|meadow-route-marker-layer/);
  assert.match(styles, /\.canonical-game-frame \.scene-art\.glass-meadow-art \{[^}]*object-fit: cover;/s);
});
