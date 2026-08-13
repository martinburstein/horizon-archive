import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { basename, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { preview } from "vite";
import { acquireTd010BrowserResource } from "./browserResourceLock.js";

const gameRoot = fileURLToPath(new URL("../../", import.meta.url));
const fixtureConfig = fileURLToPath(new URL("./vite.config.js", import.meta.url));
const digest = (bytes) => createHash("sha256").update(bytes).digest("hex");

async function closePreview(server) {
  await new Promise((resolve, reject) => server.httpServer.close((error) => error ? reject(error) : resolve()));
}

async function verifyServedTree({ server, localRoot, baseUrl }) {
  const localIndex = readFileSync(join(localRoot, "index.html"));
  for (const path of ["/", "/deep/fallback"]) {
    const response = await fetch(`${baseUrl}${path}`);
    assert.equal(response.status, 200, `${path} must serve successfully`);
    assert.equal(digest(Buffer.from(await response.arrayBuffer())), digest(localIndex), `${path} must serve exact built index bytes`);
  }
  const assets = readdirSync(join(localRoot, "assets"), { withFileTypes: true }).filter((entry) => entry.isFile()).map((entry) => join(localRoot, "assets", entry.name));
  for (const asset of assets) {
    const response = await fetch(`${baseUrl}/assets/${encodeURIComponent(basename(asset))}`);
    assert.equal(response.status, 200, `${basename(asset)} must serve successfully`);
    assert.equal(digest(Buffer.from(await response.arrayBuffer())), digest(readFileSync(asset)), `${basename(asset)} served bytes must equal the fresh build`);
  }
  assert.ok(server.httpServer.listening);
  return assets.length;
}

test("TD010 production and fixture root, deep fallback, chunks, and media serve exact fresh-build bytes", { timeout: 120_000 }, async () => {
  const releaseBrowserResource = await acquireTd010BrowserResource();
  try {
    const production = await preview({ root: gameRoot, logLevel: "error", preview: { host: "127.0.0.1", port: 4288, strictPort: true } });
    try {
      assert.equal(await verifyServedTree({ server: production, localRoot: join(gameRoot, "dist"), baseUrl: "http://127.0.0.1:4288" }), 24);
    } finally {
      await closePreview(production);
    }

    const fixture = await preview({ configFile: fixtureConfig, logLevel: "error", preview: { host: "127.0.0.1", port: 4289, strictPort: true } });
    try {
      assert.equal(await verifyServedTree({ server: fixture, localRoot: join(gameRoot, "review-fixtures", "td010-counterfield", "dist"), baseUrl: "http://127.0.0.1:4289" }), 2);
    } finally {
      await closePreview(fixture);
    }
  } finally {
    releaseBrowserResource();
  }
});
