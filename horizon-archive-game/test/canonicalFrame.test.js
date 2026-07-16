import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { getCanonicalGameFrame } from "../src/canonicalFrame.js";

const component = readFileSync(new URL("../src/CanonicalGameFrame.jsx", import.meta.url), "utf8");
const styles = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");

test("responsive frame uses available width with a 16:9 world and reflowing interface", () => {
  for (const [width, height] of [
    [1600, 900],
    [1920, 1080],
    [2558, 1240],
    [3440, 1440],
    [1279, 620], // representative 200% zoom/reflow effective CSS viewport
    [768, 1024],
    [360, 800],
  ]) {
    const frame = getCanonicalGameFrame(width, height);
    assert.equal(frame.width, width);
    assert.equal(frame.worldHeight, width * 9 / 16);
    assert.ok(frame.interfaceHeight >= 220);
    assert.equal(frame.height, frame.worldHeight + frame.interfaceHeight);
    assert.equal(frame.scale, 1);
    assert.equal(frame.renderedStageWidth, width);
    assert.equal(frame.layout, width <= 719 ? "narrow" : "canonical");
  }
});

test("frame component no longer applies fixed dimensions, zoom, or integer canvas selection", () => {
  assert.doesNotMatch(component, /style=\{\{ width: frame\.|zoom: frame\.scale|--world-height|--interface-height|data-canonical-scale/);
  assert.match(styles, /\.canonical-game-frame \.scene-frame,[\s\S]*?aspect-ratio: 16 \/ 9;/);
  assert.match(styles, /\.canonical-game-frame \.adventure-screen,[\s\S]*?grid-template-rows: auto auto;/);
  assert.match(styles, /\.canonical-game-host \{[\s\S]*?overflow-x: clip;/);
  assert.doesNotMatch(styles, /\.canonical-game-host \{[^}]*position: fixed;/s);
  const anchorRule = styles.match(/\.crt-stage-anchor \{([^}]*)\}/s)?.[1] ?? "";
  assert.match(anchorRule, /width: 100%;/);
  assert.doesNotMatch(anchorRule, /max-width|min\(100%|1920px|2558px|3440px/);
});

test("narrow and zoom-reflow presentation keeps required targets at least 44px", () => {
  assert.match(styles, /\.canonical-game-frame \.command-panel button,[\s\S]*?min-height: 44px;/);
  assert.match(styles, /\.canonical-game-frame \.terminal-workbench button,[\s\S]*?min-height: 44px;/);
  assert.match(styles, /data-canonical-layout="narrow"\] \.verb,[\s\S]*?min-width: 44px;[\s\S]*?min-height: 44px;/);
  assert.match(styles, /data-canonical-layout="narrow"\] \.demo-tour-actions button,[\s\S]*?min-height: 44px;/);
  assert.match(styles, /@media \(max-width: 480px\)[\s\S]*?body \{ min-width: 0; \}/);
});
