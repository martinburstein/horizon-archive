import test from "node:test";
import assert from "node:assert/strict";
import { getCanonicalGameFrame } from "../src/canonicalFrame.js";

test("canonical frame uses authored logical layouts and whole-number scaling", () => {
  assert.deepEqual(getCanonicalGameFrame(640, 480), { width: 640, height: 480, worldHeight: 360, interfaceHeight: 120, scale: 1, renderedWidth: 640, renderedHeight: 480, layout: "canonical" });
  assert.equal(getCanonicalGameFrame(1280, 960).scale, 2);
  assert.deepEqual(getCanonicalGameFrame(320, 240), { width: 320, height: 240, worldHeight: 180, interfaceHeight: 60, scale: 1, renderedWidth: 320, renderedHeight: 240, layout: "narrow" });
  assert.deepEqual(getCanonicalGameFrame(1600, 900), { width: 640, height: 480, worldHeight: 360, interfaceHeight: 120, scale: 1, renderedWidth: 640, renderedHeight: 480, layout: "canonical" });
});
