import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const source = readFileSync(new URL("./servedIdentity.test.js", import.meta.url), "utf8");

test("TD011 served identity holds the accepted shared browser/build lock through preview cleanup", () => {
  const importIndex = source.indexOf('import { acquireTd010BrowserResource } from "../td010-counterfield/browserResourceLock.js";');
  const acquireIndex = source.indexOf("const releaseBrowserResource = await acquireTd010BrowserResource();");
  const productionIndex = source.indexOf("const production = await preview(");
  const fixtureIndex = source.indexOf("const fixture = await preview(");
  const finallyIndex = source.lastIndexOf("} finally {");
  const releaseIndex = source.lastIndexOf("releaseBrowserResource();");

  assert.ok(importIndex >= 0, "must reuse the accepted shared lock");
  assert.ok(acquireIndex > importIndex, "must acquire before preview setup");
  assert.ok(productionIndex > acquireIndex, "must hold the lock before production preview");
  assert.ok(fixtureIndex > productionIndex, "must hold the same lock through fixture preview");
  assert.ok(finallyIndex > fixtureIndex, "must guarantee release with an outer finally");
  assert.ok(releaseIndex > finallyIndex, "must release only from the outer finally");
  assert.equal((source.match(/acquireTd010BrowserResource\(\)/g) ?? []).length, 1);
  assert.equal((source.match(/releaseBrowserResource\(\)/g) ?? []).length, 1);
});
