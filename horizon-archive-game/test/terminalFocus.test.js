import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { shouldRestoreTerminalFocus } from "../src/terminalFocus.js";

test("Terminal cleanup preserves explicit connected transition focus", () => {
  const body = { isConnected: true };
  const requiredProgression = { isConnected: true };
  assert.equal(shouldRestoreTerminalFocus(requiredProgression, body), false);
});

test("Terminal cleanup restores after ordinary body or disconnected focus", () => {
  const body = { isConnected: true };
  assert.equal(shouldRestoreTerminalFocus(body, body), true);
  assert.equal(shouldRestoreTerminalFocus(null, body), true);
  assert.equal(shouldRestoreTerminalFocus({ isConnected: false }, body), true);
});

test("TerminalShell checks transition focus before trigger and fallback restoration", () => {
  const source = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
  const guard = source.indexOf("if (!shouldRestoreTerminalFocus(document.activeElement, document.body)) return;");
  const target = source.indexOf("const target = trigger?.isConnected", guard);
  const fallback = source.indexOf("document.querySelector('[data-terminal-focus-fallback]:not([disabled])')", target);
  assert.ok(guard >= 0, "cleanup focus guard is missing");
  assert.ok(target > guard, "trigger restoration runs before the focus guard");
  assert.ok(fallback > target, "ordinary fallback restoration is missing");
});
