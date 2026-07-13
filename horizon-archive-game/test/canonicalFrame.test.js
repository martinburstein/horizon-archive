import test from "node:test";
import assert from "node:assert/strict";
import { getCanonicalGameFrame } from "../src/canonicalFrame.js";

test("canonical frame keeps authored logical layouts while the CRT stage fills the display", () => {
  const desktop = getCanonicalGameFrame(1600, 900);
  assert.equal(desktop.layout, "canonical");
  assert.deepEqual(
    { width: desktop.width, height: desktop.height, worldHeight: desktop.worldHeight, interfaceHeight: desktop.interfaceHeight },
    { width: 640, height: 480, worldHeight: 360, interfaceHeight: 120 },
  );
  assert.deepEqual({ stageWidth: desktop.stageWidth, stageHeight: desktop.stageHeight }, { stageWidth: 736, stageHeight: 572 });
  assert.equal(desktop.scale, 1.531);
  assert.ok(desktop.renderedStageHeight <= 900 && desktop.renderedStageHeight >= 870);

  const compactDesktop = getCanonicalGameFrame(640, 480);
  assert.equal(compactDesktop.layout, "narrow");
  assert.equal(compactDesktop.scale, 1.983);
  assert.ok(compactDesktop.renderedStageWidth <= 640 && compactDesktop.renderedStageHeight <= 480);

  const narrow = getCanonicalGameFrame(320, 240);
  assert.equal(narrow.layout, "narrow");
  assert.deepEqual(
    { width: narrow.width, height: narrow.height, worldHeight: narrow.worldHeight, interfaceHeight: narrow.interfaceHeight },
    { width: 320, height: 240, worldHeight: 180, interfaceHeight: 60 },
  );
  assert.deepEqual({ stageWidth: narrow.stageWidth, stageHeight: narrow.stageHeight }, { stageWidth: 320, stageHeight: 240 });
  assert.equal(narrow.scale, 1);
  assert.equal(narrow.renderedWidth, 320);
  assert.equal(narrow.renderedHeight, 240);
});
