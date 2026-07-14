import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const manifestUrl = new URL(
  "../../Concept Art Book/production-pixel/AB-01/signal-coupler/production/terminal-signal-coupler-production-manifest.json",
  import.meta.url,
);
const appUrl = new URL("../src/App.jsx", import.meta.url);

test("playable first Terminal imports the scene-resolution production coupler", async () => {
  const app = await readFile(appUrl, "utf8");
  assert.match(app, /terminal-signal-coupler-loop-640x360\.gif/);
  assert.match(app, /terminal-signal-coupler-available-640x360\.png/);
  assert.match(app, /prefers-reduced-motion: reduce/);
  assert.doesNotMatch(app, /signal-coupler-loop-64x64/);
});

test("production coupler locks six bodies and animates only the membrane", async () => {
  const manifest = JSON.parse(await readFile(manifestUrl, "utf8"));
  assert.deepEqual(manifest.source_dimensions, [1254, 1254]);
  assert.deepEqual(manifest.production_dimensions, [640, 360]);
  assert.deepEqual(manifest.object_source_box, [160, 40, 320, 320]);
  assert.equal(manifest.frame_count, 6);
  assert.equal(manifest.unique_body_hashes, 1);
  assert.equal(manifest.decoded_gif_unique_body_hashes, 1);
  assert.equal(manifest.unique_screen_hashes, 6);
  assert.equal(manifest.only_screen_pixels_change, true);
  assert.equal(manifest.side_connections_reach_scene_edges, true);
  assert.equal(manifest.source_is_not_64px_preview, true);
  assert.equal(manifest.detail_retention_by_frame.length, 6);
  assert.ok(manifest.detail_retention_by_frame.every(({ source_subject_dimensions, normalized_subject_dimensions }) =>
    source_subject_dimensions[0] >= 418
    && source_subject_dimensions[1] >= 427
    && normalized_subject_dimensions[0] >= 298
    && normalized_subject_dimensions[1] >= 305));
  assert.ok(manifest.minimum_linear_detail_retention >= 0.70);
  assert.equal(manifest.minimum_linear_detail_retention_required, 0.70);
});
