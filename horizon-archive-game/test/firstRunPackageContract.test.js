import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const canonical = readFileSync(resolve(root, "PLAY_HORIZON_ARCHIVE.cmd"), "utf8");
const wrapper = readFileSync(resolve(root, "PLAY_HORIZON_ARCHIVE_DEMO.cmd"), "utf8");
const guide = readFileSync(resolve(root, "PLAY_HORIZON_ARCHIVE.md"), "utf8");
const compatibilityGuide = readFileSync(resolve(root, "PLAYABLE_DEMO.md"), "utf8");

test("canonical launcher owns one quoted local build and preview path", () => {
  assert.match(canonical, /cd \/d "%~dp0horizon-archive-game"/i);
  assert.match(canonical, /where npm >nul 2>&1/i);
  assert.match(canonical, /call npm install --prefer-offline --no-audit --no-fund/i);
  assert.match(canonical, /call npm --silent run demo/i);
  assert.match(canonical, /exit \/b %horizon_launch_exit%/i);
  assert.doesNotMatch(canonical, /Playable Demo|frozen|slice|held work/i);
});

test("legacy launcher delegates exactly once and preserves the canonical exit code", () => {
  assert.equal((wrapper.match(/PLAY_HORIZON_ARCHIVE\.cmd/gi) ?? []).length, 1);
  assert.match(wrapper, /call "%~dp0PLAY_HORIZON_ARCHIVE\.cmd"/i);
  assert.match(wrapper, /exit \/b %errorlevel%/i);
  assert.doesNotMatch(wrapper, /npm|build|preview|playable demo/i);
});

test("missing npm fails clearly and nonzero without waiting for input", { skip: process.platform !== "win32" }, () => {
  const systemPath = resolve(process.env.SystemRoot ?? "C:\\Windows", "System32");
  const result = spawnSync(process.env.ComSpec, ["/d", "/c", resolve(root, "PLAY_HORIZON_ARCHIVE.cmd")], {
    cwd: root,
    env: { ...process.env, PATH: systemPath },
    encoding: "utf8",
    timeout: 5000,
  });
  assert.equal(result.status, 1);
  assert.match(`${result.stdout}\n${result.stderr}`, /needs Node\.js and npm/i);
});

test("canonical and compatibility guides state truthful local product boundaries", () => {
  assert.match(guide, /complete local Horizon Archive journey/i);
  assert.match(guide, /Measured Horizon ending/i);
  assert.match(guide, /Demo Tour is a separate no-credit preview/i);
  assert.match(guide, /not an official exam\s+result, an exam guarantee, or authority/i);
  assert.match(compatibilityGuide, /compatibility wrapper/i);
  assert.doesNotMatch(`${guide}\n${compatibilityGuide}`, /frozen demo|playable slice|held for|story pass|temporary prologue/i);
});
