import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";
import test from "node:test";
import { createServer } from "vite";
import manifest from "./launch-manifest.json" with { type: "json" };

const shellPath = fileURLToPath(new URL("../../../Production Pipeline/Skyscraper Test Drives/TD-010/05-PLAYABLE-SLICE-SHELL.md", import.meta.url));
const fixtureConfigPath = fileURLToPath(new URL("./vite.config.js", import.meta.url));

function parseShellScenarioContract() {
  const shell = readFileSync(shellPath, "utf8");
  const heading = "## Closed storage-free 66-scenario fixture";
  const start = shell.indexOf(heading);
  assert.notEqual(start, -1, "shell 05 fixture registry heading must exist");
  const rows = [...shell.slice(start).matchAll(/^\|\s*\d+\s*\|\s*`([^`]+)`\s*\|\s*`([^`]+)`\s*\|\s*`([^`]+)`\s*\|$/gm)]
    .map(([, id, owner, focus]) => ({ id, owner, focus }));
  assert.equal(rows.length, 66, "shell 05 must independently yield exactly 66 scenario rows");
  assert.equal(new Set(rows.map(({ id }) => id)).size, 66, "shell 05 scenario IDs must be unique");
  return rows;
}

function findChrome() {
  const candidates = [
    process.env.TD010_CHROME_PATH,
    process.env.PROGRAMFILES && join(process.env.PROGRAMFILES, "Google", "Chrome", "Application", "chrome.exe"),
    process.env["ProgramFiles(x86)"] && join(process.env["ProgramFiles(x86)"], "Google", "Chrome", "Application", "chrome.exe"),
    process.env.LOCALAPPDATA && join(process.env.LOCALAPPDATA, "Google", "Chrome", "Application", "chrome.exe"),
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
  ].filter(Boolean);
  const chrome = candidates.find(existsSync);
  assert.ok(chrome, "Chrome is required for the shell-authoritative rendered owner/actual-focus regression");
  return chrome;
}

function waitForDevTools(child) {
  return new Promise((resolve, reject) => {
    let stderr = "";
    const timer = setTimeout(() => reject(new Error(`Chrome DevTools endpoint did not start. ${stderr}`)), 15_000);
    child.stderr.setEncoding("utf8");
    child.stderr.on("data", (chunk) => {
      stderr += chunk;
      const match = stderr.match(/DevTools listening on (ws:\/\/[^\s]+)/);
      if (match) { clearTimeout(timer); resolve(match[1]); }
    });
    child.once("exit", (code) => { clearTimeout(timer); reject(new Error(`Chrome exited before DevTools was ready (${code}). ${stderr}`)); });
    child.once("error", (error) => { clearTimeout(timer); reject(error); });
  });
}

class CdpSession {
  constructor(url) {
    this.nextId = 1;
    this.pending = new Map();
    this.socket = new WebSocket(url);
    this.socket.addEventListener("message", ({ data }) => {
      const message = JSON.parse(data);
      if (!message.id) return;
      const pending = this.pending.get(message.id);
      if (!pending) return;
      this.pending.delete(message.id);
      if (message.error) pending.reject(new Error(`${pending.method}: ${message.error.message}`));
      else pending.resolve(message.result);
    });
  }
  async open() {
    if (this.socket.readyState === WebSocket.OPEN) return;
    await new Promise((resolve, reject) => {
      this.socket.addEventListener("open", resolve, { once: true });
      this.socket.addEventListener("error", reject, { once: true });
    });
  }
  send(method, params = {}) {
    const id = this.nextId++;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { method, resolve, reject });
      this.socket.send(JSON.stringify({ id, method, params }));
    });
  }
  close() { this.socket.close(); }
}

async function evaluate(session, expression) {
  const result = await session.send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text ?? "browser evaluation failed");
  return result.result.value;
}

async function waitForFixture(session) {
  const deadline = Date.now() + 15_000;
  while (Date.now() < deadline) {
    const ready = await evaluate(session, "document.readyState === 'complete' && Boolean(document.querySelector('[data-fixture-root=TD010_COUNTERFIELD_FIXTURE]'))");
    if (ready) return;
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  throw new Error("TD-010 fixture did not render before the browser-contract deadline");
}

test("TD010 shell 05 independently governs all 66 rendered owner and actual-focus contracts", { timeout: 60_000 }, async () => {
  const shellRows = parseShellScenarioContract();
  const shellIds = shellRows.map(({ id }) => id);
  assert.deepEqual(manifest.scenarios, shellIds, "manifest IDs and order must equal shell 05, not fixture-declared state");

  const server = await createServer({ configFile: fixtureConfigPath, logLevel: "error" });
  const profilePath = mkdtempSync(join(tmpdir(), "td010-shell-contract-"));
  let chrome;
  let session;
  try {
    await server.listen();
    chrome = spawn(findChrome(), [
      "--headless=new", "--disable-gpu", "--disable-background-networking", "--no-first-run",
      "--no-default-browser-check", "--remote-debugging-port=0", `--user-data-dir=${profilePath}`, "about:blank",
    ], { stdio: ["ignore", "ignore", "pipe"], windowsHide: true });
    const browserWs = await waitForDevTools(chrome);
    const debuggerPort = new URL(browserWs).port;
    const target = await fetch(`http://127.0.0.1:${debuggerPort}/json/new?${encodeURIComponent("http://127.0.0.1:4182/")}`, { method: "PUT" }).then((response) => response.json());
    session = new CdpSession(target.webSocketDebuggerUrl);
    await session.open();
    await session.send("Runtime.enable");
    await waitForFixture(session);

    const renderedManifestIds = await evaluate(session, "[...document.querySelectorAll('#fixture-scenario-picker option')].map((option) => option.value)");
    assert.deepEqual(renderedManifestIds, shellIds, "rendered scenario picker must expose exactly the shell 05 IDs");

    const renderScenario = (id) => evaluate(session, `(async () => {
      const picker = document.querySelector('#fixture-scenario-picker');
      picker.value = ${JSON.stringify(id)};
      picker.dispatchEvent(new Event('change', { bubbles: true }));
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      const product = document.querySelector('.fixture-product');
      return {
        selected: picker.value,
        owner: product?.querySelector('[data-active-owner]')?.textContent?.trim() ?? '',
        focus: document.activeElement?.id ?? '',
      };
    })()`);
    const differences = [];
    for (const expected of shellRows) {
      const actual = await renderScenario(expected.id);
      if (actual.selected !== expected.id || actual.owner !== expected.owner || actual.focus !== expected.focus) {
        differences.push({ expected, actual });
      }
    }
    assert.deepEqual(differences, [], `shell 05 rendered-owner/actual-focus differences:\n${JSON.stringify(differences, null, 2)}`);

    for (const [id, width, height] of [["layout_desktop", 1920, 1080], ["layout_laptop", 1366, 768], ["layout_narrow", 390, 844], ["layout_effective_200", 768, 900]]) {
      await session.send("Emulation.setDeviceMetricsOverride", { width, height, screenWidth: width, screenHeight: height, deviceScaleFactor: 1, mobile: false });
      await renderScenario(id);
      const layout = await evaluate(session, `(() => {
        const product = document.querySelector('.fixture-product');
        const controls = [...product.querySelectorAll('button, select, textarea')].filter((node) => {
          const rect = node.getBoundingClientRect(); return rect.width > 0 && rect.height > 0;
        }).map((node) => { const rect = node.getBoundingClientRect(); return { id: node.id, width: rect.width, height: rect.height }; });
        return {
          documentContained: document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1,
          productContained: product.scrollWidth <= product.clientWidth + 1,
          mains: product.querySelectorAll('[data-product-landmark]').length,
          statuses: product.querySelectorAll('[role=status]').length,
          undersized: controls.filter(({ width, height }) => width < 44 || height < 44),
        };
      })()`);
      assert.equal(layout.documentContained, true, `${id} document must not escape horizontally`);
      assert.equal(layout.productContained, true, `${id} product must remain horizontally contained`);
      assert.equal(layout.mains, 1, `${id} must render one product main`);
      assert.equal(layout.statuses, 1, `${id} must render one product status`);
      assert.deepEqual(layout.undersized, [], `${id} visible product controls must be at least 44 by 44 CSS pixels`);
    }
    await session.send("Emulation.clearDeviceMetricsOverride");

    await session.send("Emulation.setEmulatedMedia", { media: "screen", features: [{ name: "forced-colors", value: "active" }] });
    await renderScenario("mode_forced_colors");
    assert.equal(await evaluate(session, "getComputedStyle(document.querySelector('.fixture-product')).forcedColorAdjust"), "none");
    await session.send("Emulation.setEmulatedMedia", { media: "screen", features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
    await renderScenario("mode_reduced_motion");
    assert.deepEqual(await evaluate(session, `(() => { const style = getComputedStyle(document.querySelector('.fixture-product button')); return { animation: style.animationName, transition: style.transitionDuration, scroll: style.scrollBehavior }; })()`), { animation: "none", transition: "0s", scroll: "auto" });
    await session.send("Emulation.setEmulatedMedia", { media: "screen", features: [] });
    await renderScenario("mode_grayscale");
    assert.match(await evaluate(session, "getComputedStyle(document.querySelector('.fixture-product')).filter"), /grayscale\(1\)/);
  } finally {
    session?.close();
    if (chrome && chrome.exitCode === null) chrome.kill();
    await server.close();
    await new Promise((resolve) => setTimeout(resolve, 100));
    rmSync(profilePath, { recursive: true, force: true });
  }
});
