import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { basename, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { preview } from "vite";
import { acquireTd010BrowserResource } from "../td010-counterfield/browserResourceLock.js";

const gameRoot = fileURLToPath(new URL("../../", import.meta.url));
const fixtureConfig = fileURLToPath(new URL("./vite.config.js", import.meta.url));
const digest = (bytes) => createHash("sha256").update(bytes).digest("hex");
async function closePreview(server) { await new Promise((resolve, reject) => server.httpServer.close((error) => error ? reject(error) : resolve())); }
async function verifyServedTree({ server, localRoot, baseUrl }) {
  const localIndex = readFileSync(join(localRoot, "index.html"));
  for (const path of ["/", "/deep/fallback"]) { const response = await fetch(`${baseUrl}${path}`); assert.equal(response.status, 200); assert.equal(digest(Buffer.from(await response.arrayBuffer())), digest(localIndex)); }
  const assets = readdirSync(join(localRoot, "assets"), { withFileTypes: true }).filter((entry) => entry.isFile()).map((entry) => join(localRoot, "assets", entry.name));
  for (const asset of assets) { const response = await fetch(`${baseUrl}/assets/${encodeURIComponent(basename(asset))}`); assert.equal(response.status, 200, basename(asset)); assert.equal(digest(Buffer.from(await response.arrayBuffer())), digest(readFileSync(asset)), basename(asset)); }
  assert.ok(server.httpServer.listening); return assets.length;
}

test("TD011 production and closed fixture serve exact fresh-build bytes", { timeout: 120_000 }, async () => {
  const releaseBrowserResource = await acquireTd010BrowserResource();
  try {
    const production = await preview({ root: gameRoot, logLevel: "error", preview: { host: "127.0.0.1", port: 4290, strictPort: true } });
    try { assert.equal(await verifyServedTree({ server: production, localRoot: join(gameRoot, "dist"), baseUrl: "http://127.0.0.1:4290" }), 25); } finally { await closePreview(production); }
    const fixture = await preview({ configFile: fixtureConfig, logLevel: "error", preview: { host: "127.0.0.1", port: 4291, strictPort: true } });
    try { assert.equal(await verifyServedTree({ server: fixture, localRoot: join(gameRoot, "review-fixtures", "td011-unborrowed-reach", "dist"), baseUrl: "http://127.0.0.1:4291" }), 2); } finally { await closePreview(fixture); }
  } finally {
    releaseBrowserResource();
  }
});
