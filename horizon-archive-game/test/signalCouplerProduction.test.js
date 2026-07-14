import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const manifestUrl = new URL(
  "../../Concept Art Book/production-pixel/AB-01/signal-coupler/production/terminal-signal-coupler-production-manifest.json",
  import.meta.url,
);
const appUrl = new URL("../src/App.jsx", import.meta.url);
const styleUrl = new URL("../src/styles.css", import.meta.url);

test("playable first Terminal imports the scene-resolution production coupler", async () => {
  const app = await readFile(appUrl, "utf8");
  assert.match(app, /terminal-signal-coupler-loop-640x360\.gif/);
  assert.match(app, /terminal-signal-coupler-available-640x360\.png/);
  assert.match(app, /prefers-reduced-motion: reduce/);
  assert.doesNotMatch(app, /signal-coupler-loop-64x64/);
});

test("first-contact semantics and focus geometry match the authored coupler body", async () => {
  const [app, styles] = await Promise.all([readFile(appUrl, "utf8"), readFile(styleUrl, "utf8")]);
  assert.match(app, /hotspotLabel: "field-linked Terminal"/);
  assert.doesNotMatch(app, /Petal [Tt]erminal/);
  assert.match(app, /Cold glass fins rise from a dark housing\. Paired channels continue under the field and beyond sight\./);
  assert.match(styles, /data-scene="meadow"\] \.hotspot\[data-hotspot-id="primary"\] span \{[\s\S]*?left: -148px;[\s\S]*?top: 6px;[\s\S]*?width: 132px;/);
  assert.match(styles, /data-canonical-layout="narrow"\][\s\S]*?data-hotspot-id="primary"\] span \{[\s\S]*?left: -76px;[\s\S]*?top: 2px;[\s\S]*?width: 70px;/);
});

test("production coupler locks six bodies and animates only the membrane", async () => {
  const manifest = JSON.parse(await readFile(manifestUrl, "utf8"));
  assert.deepEqual(manifest.source_dimensions, [1254, 1254]);
  assert.deepEqual(manifest.production_dimensions, [640, 360]);
  assert.deepEqual(manifest.object_source_box, [160, 40, 320, 320]);
  assert.equal(manifest.frame_count, 6);
  assert.equal(manifest.unique_body_hashes, 1);
  assert.equal(manifest.central_coupler_body_unchanged, true);
  assert.equal(
    manifest.central_coupler_body_sha256,
    "dde04a431a528f5853632670bf624bf1cb0c4f361cafe73a8974121f605d27cc",
  );
  assert.equal(manifest.central_coupler_body_sha256, manifest.central_coupler_body_lock_sha256);
  assert.equal(manifest.decoded_gif_unique_body_hashes, 1);
  assert.equal(manifest.unique_screen_hashes, 6);
  assert.equal(manifest.only_screen_pixels_change, true);
  assert.equal(manifest.side_connections_reach_scene_edges, true);
  assert.equal(manifest.side_connections_are_continuous, true);
  assert.equal(manifest.transparent_break_count, 0);
  assert.deepEqual(manifest.narrow_derivative_dimensions, [320, 180]);
  assert.equal(manifest.narrow_derivative_resampling, "nearest-neighbor");
  assert.equal(manifest.connection_continuity_paths.native_breaks, 0);
  assert.equal(manifest.connection_continuity_paths.narrow_breaks, 0);
  assert.deepEqual(manifest.connection_continuity_paths.left_native.at(-1), [0, 268]);
  assert.deepEqual(manifest.connection_continuity_paths.right_native.at(-1), [640, 248]);
  assert.deepEqual(manifest.connection_continuity_paths.right_mat_branch_native.at(-1), [538, 281]);
  assert.deepEqual(manifest.field_integration, {
    route_grammar: "asymmetric partly buried glass-ceramic",
    flush_entry_collars: 2,
    crop_occlusions: 2,
    flush_growth_mat_contacts: 1,
    repair_joint_families: ["pearl knuckle", "violet stitch", "amber lattice"],
    parallel_cyan_tray_runs: 0,
    regular_repeated_clamps: 0,
  });
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
