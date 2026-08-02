import { closeSync, openSync, rmSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const lockPath = join(tmpdir(), "horizon-archive-td010-browser-resource.lock");

export async function acquireTd010BrowserResource({ timeoutMs = 90_000 } = {}) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    let descriptor;
    try {
      descriptor = openSync(lockPath, "wx");
      writeFileSync(descriptor, `${process.pid}\n${new Date().toISOString()}\n`, "utf8");
      let released = false;
      return () => {
        if (released) return;
        released = true;
        closeSync(descriptor);
        rmSync(lockPath, { force: true });
      };
    } catch (error) {
      if (descriptor !== undefined) closeSync(descriptor);
      if (error?.code !== "EEXIST") throw error;
      try {
        if (Date.now() - statSync(lockPath).mtimeMs > 300_000) rmSync(lockPath, { force: true });
      } catch (inspectionError) {
        if (inspectionError?.code !== "ENOENT") throw inspectionError;
      }
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }
  throw new Error("Timed out waiting for the serialized TD-010 browser/preview resource.");
}
