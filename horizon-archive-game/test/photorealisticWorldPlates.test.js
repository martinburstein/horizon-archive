import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const plateDirectory = new URL("../../Visual Direction/Production Masters/2026-07-15-photorealistic-demo/", import.meta.url);
const integratedMeadowUrl = new URL(
  "../../Visual Direction/Production Masters/2026-07-15-glass-meadow-integrated-terminal/glass-meadow-integrated-terminal-master-v1.png",
  import.meta.url,
);
const civicRecordArrivalUrl = new URL(
  "../../Visual Direction/Production Masters/2026-07-16-civic-record-district-arrival/civic-record-district-arrival-master-v1.png",
  import.meta.url,
);
const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const city = readFileSync(new URL("../src/CityThresholdStaging.jsx", import.meta.url), "utf8");
const civicRecordArrival = readFileSync(new URL("../src/CivicRecordArrival.jsx", import.meta.url), "utf8");

const requiredPlates = [
  "drowned-archive-master.png",
  "witness-corridor-master.png",
  "city-threshold-overview-master.png",
  "city-threshold-boundary-master.png",
  "city-threshold-access-master.png",
];

function readPngSize(filename) {
  const bytes = readFileSync(new URL(filename, plateDirectory));
  assert.equal(bytes.toString("ascii", 1, 4), "PNG");
  return { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) };
}

test("every shipped landscape slide is wired to the coordinated photorealistic production family", () => {
  for (const filename of requiredPlates) {
    assert.match(`${app}\n${city}`, new RegExp(filename.replaceAll(".", "\\.")));
  }
  assert.match(app, /glass-meadow-integrated-terminal-master-v1\.png/);
  assert.match(civicRecordArrival, /civic-record-district-arrival-master-v1\.png/);
  assert.doesNotMatch(app, /Pixelated Draft|signal-coupler|import \{ MeadowRouteMarker \}|<MeadowRouteMarker/);
  assert.doesNotMatch(app, /Glass Meadow Example\.png|Concept Art\/Underground City\.png|witness-corridor-evidence-terminal-v1\.png|ab01-(available|active|complete)-/);
  assert.doesNotMatch(city, /Pixelated Draft\/city-threshold-pixel-staging/);
});

test("photorealistic source plates retain high-resolution landscape masters", () => {
  for (const filename of requiredPlates) {
    const { width, height } = readPngSize(filename);
    assert.ok(width >= 1600, `${filename} width ${width} is below the production-source floor`);
    assert.ok(height >= 900, `${filename} height ${height} is below the production-source floor`);
    assert.ok(Math.abs((width / height) - (16 / 9)) < 0.01, `${filename} is not a 16:9 landscape master`);
  }
  const integrated = readFileSync(integratedMeadowUrl);
  const width = integrated.readUInt32BE(16);
  const height = integrated.readUInt32BE(20);
  assert.ok(width >= 1600 && height >= 900);
  assert.ok(Math.abs((width / height) - (16 / 9)) < 0.01);
  const civicRecord = readFileSync(civicRecordArrivalUrl);
  const civicWidth = civicRecord.readUInt32BE(16);
  const civicHeight = civicRecord.readUInt32BE(20);
  assert.ok(civicWidth >= 1600 && civicHeight >= 900);
  assert.ok(Math.abs((civicWidth / civicHeight) - (16 / 9)) < 0.01);
  assert.doesNotMatch(civicRecordArrival, /city-threshold-overview-master|REGISTERED CONTINUITY HOOK|SC-03-00-overview-pending/);
});
