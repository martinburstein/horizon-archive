import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const ordinalCompare = (left, right) => (left < right ? -1 : left > right ? 1 : 0);
const unsafeAbsolute = /^(?:[a-z]:[\\/]|\\\\|\/|file:\/\/)/i;

function canonicalize(value) {
  if (Array.isArray(value)) {
    const items = value.map(canonicalize);
    if (items.every((item) => typeof item === "string")) return items.sort(ordinalCompare);
    if (items.every((item) => item && typeof item === "object" && typeof item.path === "string")) {
      return items.sort((left, right) => ordinalCompare(left.path, right.path));
    }
    return items;
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort(ordinalCompare).map((key) => [key, canonicalize(value[key])]));
  }
  return value;
}

function containsUnsafePath(value, forbiddenRoot) {
  if (typeof value === "string") {
    return unsafeAbsolute.test(value)
      || (forbiddenRoot && value.toLocaleLowerCase("en-US").includes(forbiddenRoot.toLocaleLowerCase("en-US")));
  }
  if (Array.isArray(value)) return value.some((item) => containsUnsafePath(item, forbiddenRoot));
  if (value && typeof value === "object") return Object.values(value).some((item) => containsUnsafePath(item, forbiddenRoot));
  return false;
}

export function withBrowserClosed(diagnostic, browserClosed) {
  return { ...diagnostic, browserClosed: browserClosed === true };
}

export function buildFailureDetailTransport(diagnostic, { forbiddenRoot = "" } = {}) {
  if (!diagnostic || !Array.isArray(diagnostic.failurePaths) || !diagnostic.failuresByLayout) throw new Error("diagnostic shape");
  const failurePaths = [...diagnostic.failurePaths];
  if (!failurePaths.every((path) => typeof path === "string")) throw new Error("failure path shape");
  const failuresByLayout = canonicalize(diagnostic.failuresByLayout);
  const detail = {
    failurePaths: failurePaths.sort(ordinalCompare),
    failuresByLayout,
    browserClosed: diagnostic.browserClosed === true,
  };
  if (containsUnsafePath(detail, forbiddenRoot)) throw new Error("unsafe path");
  const canonicalJson = JSON.stringify(detail);
  const bytes = Buffer.from(canonicalJson, "utf8");
  const failureCount = Number(diagnostic.failureCount);
  if (!Number.isInteger(failureCount) || failureCount !== detail.failurePaths.length) throw new Error("failure count");
  return {
    failureCount,
    failurePathCount: detail.failurePaths.length,
    failureLayoutCount: Object.keys(detail.failuresByLayout).length,
    browserClosed: detail.browserClosed,
    failureDetailBytes: bytes.length,
    failureDetailBase64: bytes.toString("base64"),
    canonicalJson,
  };
}

export function formatFailureDetailScalar(transport) {
  return `failureCount=${transport.failureCount} failurePathCount=${transport.failurePathCount} failureLayoutCount=${transport.failureLayoutCount} browserClosed=${transport.browserClosed ? 1 : 0} failureDetailBytes=${transport.failureDetailBytes} failureDetailBase64=${transport.failureDetailBase64} transportExit=0`;
}

function failureScalar() {
  return "failureCount=-1 failurePathCount=-1 failureLayoutCount=-1 browserClosed=0 failureDetailBytes=-1 failureDetailBase64= transportExit=1";
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    const diagnosticPath = process.env.HORIZON_ARCHIVE_LIVE_DIAGNOSTIC;
    const qaRoot = process.env.HORIZON_ARCHIVE_QA_DIR;
    if (!diagnosticPath || !qaRoot || resolve(diagnosticPath) !== resolve(qaRoot, "first-run-live-diagnostic.json")) throw new Error("literal diagnostic");
    const diagnostic = JSON.parse(readFileSync(diagnosticPath, "utf8"));
    process.stdout.write(`${formatFailureDetailScalar(buildFailureDetailTransport(diagnostic, { forbiddenRoot: qaRoot }))}\n`);
  } catch {
    process.stdout.write(`${failureScalar()}\n`);
    process.exitCode = 1;
  }
}
