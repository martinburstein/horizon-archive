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

test("representative 1920x1080 desktop contains the complete accepted shell", () => {
  assert.match(styles, /@media \(min-width: 1280px\) and \(min-height: 800px\) \{[\s\S]*?\.crt-stage-anchor \{[\s\S]*?width: min\(100%, calc\(\(100dvh - 220px - var\(--desktop-shell-inset\)\) \/ 0\.5625\)\);/);
  assert.match(styles, /@media \(min-width: 1280px\) and \(min-height: 800px\) \{[\s\S]*?\.canonical-game-frame \.adventure-screen \{[\s\S]*?grid-template-rows: minmax\(0, 1fr\) 220px;[\s\S]*?overflow: hidden;/);
  assert.match(styles, /@media \(min-width: 1280px\) and \(min-height: 800px\) \{[\s\S]*?\.canonical-game-frame \.scene-frame \{[\s\S]*?width: 100%;[\s\S]*?height: auto;[\s\S]*?aspect-ratio: 16 \/ 9;/);
  assert.match(styles, /@media \(min-width: 1280px\) and \(min-height: 800px\) \{[\s\S]*?\.canonical-game-frame \.command-panel \{[\s\S]*?min-height: 220px;[\s\S]*?max-height: 220px;[\s\S]*?overflow: hidden;/);

  const viewportWidth = 1920;
  const viewportHeight = 1080;
  const desktopShellInset = 44;
  const interfaceHeight = 220;
  const gameWidth = Math.min(
    viewportWidth,
    (viewportHeight - interfaceHeight - desktopShellInset) * 16 / 9,
  );
  const worldHeight = gameWidth * 9 / 16;
  assert.ok(gameWidth >= viewportWidth * 0.75, "world remains visually dominant");
  assert.ok(worldHeight + interfaceHeight + desktopShellInset <= viewportHeight);
});

test("Python explanation authoring preserves three wide peers and one-column narrow or 200% recovery", () => {
  const arrival = readFileSync(new URL("../src/CivicRecordArrival.jsx", import.meta.url), "utf8");
  assert.match(arrival,
    /\["EX-20", "EXS-00"\]\.includes\(primaryPhase\)[\s\S]*?<dl className="custody-ledger-fields custody-ledger-explanation-controls">/);
  assert.match(styles,
    /\.custody-ledger-fields \{[^}]*grid-template-columns: repeat\(2, minmax\(0, 1fr\)\);/);
  assert.match(styles,
    /\.custody-ledger-explanation-controls \{[^}]*grid-template-columns: repeat\(3, minmax\(0, 1fr\)\);/);
  assert.match(styles,
    /data-canonical-layout="narrow"\] \.custody-ledger-fields \{[^}]*grid-template-columns: 1fr;/);
  assert.match(styles,
    /@media \(max-width: 1279px\) \{[\s\S]*?\.custody-ledger-explanation-controls \{[^}]*grid-template-columns: 1fr;/);
  assert.doesNotMatch(arrival,
    /rp002-blank-explanation-archive-reveal-v1|2026-07-17-rp002-blank-explanation-reveal/);
});

test("blank Responsible-AI selects inherit custody-ledger target and focus treatment", () => {
  const arrival = readFileSync(new URL("../src/CivicRecordArrival.jsx", import.meta.url), "utf8");
  assert.match(arrival,
    /primaryPhase === "RAD-20"[\s\S]*?<dl className="custody-ledger-fields">[\s\S]*?primaryInteraction\.controls\.map\(\(control\) => \([\s\S]*?<select/);
  assert.match(styles,
    /\.custody-ledger-fields input,\s*\.custody-ledger-fields textarea,\s*\.custody-ledger-fields select \{[^}]*box-sizing: border-box;[^}]*width: 100%;[^}]*min-height: 44px;[^}]*padding: 8px 10px;[^}]*border: 1px solid #8792a5;[^}]*color: #f2f5fa;[^}]*background: #070a10;[^}]*font: inherit;/);
  assert.match(styles,
    /\.custody-ledger-fields input:focus-visible,\s*\.custody-ledger-fields textarea:focus-visible,\s*\.custody-ledger-fields select:focus-visible \{ outline: 3px solid #e4b36c; outline-offset: 2px; \}/);
  assert.match(styles,
    /@media \(forced-colors: active\) \{[\s\S]*?\.custody-ledger-fields select:focus-visible \{ outline-color: Highlight; \}/);
});

test("Responsible-AI primary preserves three wide peers and one-column narrow or 200% recovery", () => {
  const arrival = readFileSync(new URL("../src/CivicRecordArrival.jsx", import.meta.url), "utf8");
  assert.match(arrival,
    /\["RAD-20", "RAIC-00"\]\.includes\(primaryPhase\)[\s\S]*?<dl className="custody-ledger-fields custody-ledger-rai-primary-controls">[\s\S]*?primaryInteraction\.controls\.map\(\(control\) => \(/);
  assert.match(styles,
    /\.custody-ledger-fields \{[^}]*grid-template-columns: repeat\(2, minmax\(0, 1fr\)\);/);
  assert.match(styles,
    /\.custody-ledger-rai-primary-controls \{[^}]*grid-template-columns: repeat\(3, minmax\(0, 1fr\)\);/);
  assert.match(styles,
    /data-canonical-layout="narrow"\] \.custody-ledger-fields \{[^}]*grid-template-columns: 1fr;/);
  assert.match(styles,
    /@media \(max-width: 1279px\) \{[\s\S]*?\.custody-ledger-rai-primary-controls \{[^}]*grid-template-columns: 1fr;/);
  assert.doesNotMatch(arrival,
    /rp002-blank-rai-review-frame-v1|2026-07-17-rp002-blank-rai-primary-reveal/);
});
