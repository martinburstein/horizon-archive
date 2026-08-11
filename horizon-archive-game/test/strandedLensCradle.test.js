import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  deriveStrandedLensCradleState,
  FRPX05_COPY,
  FRPX05_IDENTIFICATION,
  getStrandedLensCradleHotspot,
  isLegacyModelChoiceLauncherVisible,
  isStrandedLensCradleLawful,
  isStrandedLensCradleMeasurementPass,
  isStrandedLensCradleSourceIdentityPass,
  STRANDED_LENS_CRADLE_PATH,
  STRANDED_LENS_CRADLE_PROVENANCE,
  STRANDED_LENS_CRADLE_REGISTRY,
  STRANDED_LENS_CRADLE_SOURCE_URL,
} from "../src/drownedArchive.js";
import {
  modelChoiceDimensions,
  modelChoiceExercise,
  modelChoicePrimaryScenarios,
  modelChoiceTransferScenarios,
} from "../src/modelChoiceExercise.js";
import { responsibleAIExercise } from "../src/responsibleAIExercise.js";

const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const styles = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");

const hash = "a".repeat(64);
const source = {
  enabled: true,
  path: STRANDED_LENS_CRADLE_PATH,
  sha256: hash,
  byteLength: 5000000,
  width: 3840,
  height: 2160,
  format: "png",
  color: "opaque-srgb-8",
  attemptOrdinal: 1,
};
const physical = { x: 1344, y: 700, width: 1200, height: 700, centerX: 1944, centerY: 1050 };
const activation = { x: 1300, y: 650, width: 1300, height: 800 };
const absentProtected = Object.fromEntries([
  "host05Cue",
  "liveWater",
  "returnLikeRidge",
  "crown",
  "tidalLens",
  "secondLensCandidate",
].map((key) => [key, "absent"]));
const viewportByLayout = {
  desktop: [1920, 1080],
  laptop: [1366, 768],
  narrow: [390, 844],
  effective200: [768, 900],
  retained320x180: [320, 180],
  retained320x240: [320, 240],
};

function makeLayout([width, height]) {
  return {
    viewport: { width, height, deviceScaleFactor: 1, effectiveZoom: 1 },
    source: {
      path: source.path,
      sha256: source.sha256,
      naturalWidth: 3840,
      naturalHeight: 2160,
      objectFit: "cover",
      objectPosition: "50% 50%",
      renderedRect: { x: 0, y: 0, width: Math.max(320, width), height: Math.max(180, width * 9 / 16) },
      visibleSourceRect: { x: 0, y: 0, width: 3840, height: 2160 },
      retainedArea: 1,
    },
    physical: {
      sourceRect: physical,
      mappedRect: { x: 112, y: 58, width: 100, height: 60 },
      centerSource: { x: physical.centerX, y: physical.centerY },
      centerMapped: { x: 162, y: 88 },
    },
    semantic: {
      sourceRect: activation,
      mappedRect: { x: 105, y: 50, width: 120, height: 80 },
      targetWidth: 120,
      targetHeight: 80,
      containsPhysical: true,
      areaRatio: (activation.width * activation.height) / (physical.width * physical.height),
      centerClearance: 8,
    },
    label: {
      outerRect: { x: 108, y: 53, width: 114, height: 74 },
      textRect: { x: 110, y: 55, width: 110, height: 70 },
      insetOuterCss: 3,
      insetTextCss: 5,
      contained: true,
      clipped: false,
      overflowed: false,
    },
    protected: Object.fromEntries(Object.keys(absentProtected).map((key) => [key, {
      sourceRect: "absent",
      mappedRect: "absent",
      physicalIntersection: 0,
      semanticIntersection: 0,
      edgeSeparation: "absent",
    }])),
    order: { imageIndex: 0, host06Index: 1, returnIndex: 5, verbIndices: [2, 3, 4] },
    focus: {
      beforeRect: { x: 105, y: 50, width: 120, height: 80 },
      afterRect: { x: 105, y: 50, width: 120, height: 80 },
      deltaEdges: { top: 0, right: 0, bottom: 0, left: 0 },
      activeName: "use Stranded Lens Cradle, in progress",
      outlineWidth: "3px",
      outlineColor: "Highlight",
      targetStable: true,
    },
  };
}

const registry = {
  source,
  physical,
  activation,
  label: { insetOuterCss: 3, insetTextCss: 5 },
  protected: absentProtected,
  layouts: Object.fromEntries(Object.entries(viewportByLayout).map(([id, viewport]) => [id, makeLayout(viewport)])),
};
const provenance = { sha256: hash, byteLength: source.byteLength };
const decodedImage = { complete: true, naturalWidth: 3840, naturalHeight: 2160 };
const masteredHost05 = { exerciseId: responsibleAIExercise.exercise_id, masteryStatus: "mastered" };

function modelEvidence(masteryStatus) {
  return { exerciseId: modelChoiceExercise.exercise_id, masteryStatus };
}

function masteredModelEvidence() {
  const itemCorrectness = {};
  for (const scenario of [...modelChoicePrimaryScenarios, ...modelChoiceTransferScenarios, { id: "closed_note_explanation" }]) {
    itemCorrectness[scenario.id] = Object.fromEntries(modelChoiceDimensions.map((dimension) => [dimension, true]));
  }
  return { exerciseId: modelChoiceExercise.exercise_id, masteryStatus: "mastered", itemCorrectness };
}

test("Combat registry is inert, null-first, copy-empty, and media-free", () => {
  assert.equal(STRANDED_LENS_CRADLE_REGISTRY.source.enabled, false);
  assert.deepEqual(Object.values(STRANDED_LENS_CRADLE_REGISTRY.source).slice(1), Array(8).fill(null));
  assert.equal(STRANDED_LENS_CRADLE_SOURCE_URL, null);
  assert.deepEqual(STRANDED_LENS_CRADLE_PROVENANCE, { sha256: null, byteLength: null });
  assert.equal(FRPX05_IDENTIFICATION.ALT, null);
  assert.equal(Object.keys(FRPX05_COPY).length, 7);
  assert.ok(Object.values(FRPX05_COPY).every((value) => value === null));
  assert.doesNotMatch(app, /2026-08-10-first-run-host06\/host06-stranded-lens-cradle-master-v1\.png";/);
});

test("source, measurement, provenance, and decode guards fail closed independently", () => {
  assert.equal(isStrandedLensCradleSourceIdentityPass(source, provenance), true);
  assert.equal(isStrandedLensCradleSourceIdentityPass({ ...source, enabled: false }, provenance), false);
  assert.equal(isStrandedLensCradleSourceIdentityPass({ ...source, sha256: "b".repeat(64) }, provenance), false);
  assert.equal(isStrandedLensCradleSourceIdentityPass({ ...source, byteLength: 12000001 }, provenance), false);
  assert.equal(isStrandedLensCradleMeasurementPass(registry), true);
  assert.equal(isStrandedLensCradleMeasurementPass({ ...registry, physical: { ...physical, centerX: 0 } }), false);
  assert.equal(isStrandedLensCradleMeasurementPass({ ...registry, layouts: { ...registry.layouts, narrow: null } }), false);
  assert.equal(isStrandedLensCradleLawful({ responsibleAIEvidence: masteredHost05, registry, provenance, decodedImage }), true);
  assert.equal(isStrandedLensCradleLawful({ responsibleAIEvidence: masteredHost05, registry, provenance, decodedImage: { ...decodedImage, naturalWidth: 1 } }), false);
});

test("view state derives only from lawful source and sanitized allowlisted evidence", () => {
  const inputs = { responsibleAIEvidence: masteredHost05, registry, provenance, decodedImage };
  assert.equal(deriveStrandedLensCradleState(inputs), "available");
  assert.equal(deriveStrandedLensCradleState({ ...inputs, modelChoiceEvidence: modelEvidence("remediation_required") }), "remediation_required");
  assert.equal(deriveStrandedLensCradleState({ ...inputs, modelChoiceEvidence: modelEvidence("primary_complete") }), "in_progress");
  assert.equal(deriveStrandedLensCradleState({ ...inputs, modelChoiceEvidence: masteredModelEvidence() }), "complete");
  assert.equal(deriveStrandedLensCradleState({ ...inputs, responsibleAIEvidence: null }), "hidden");
  assert.equal(deriveStrandedLensCradleState({ ...inputs, modelChoiceEvidence: { masteryStatus: "mastered" } }), "hidden");
});

test("enabled is the irreversible legacy-launcher switch, not lawfulness proof", () => {
  assert.equal(isLegacyModelChoiceLauncherVisible({ enabled: false }), true);
  assert.equal(isLegacyModelChoiceLauncherVisible({ enabled: null }), true);
  assert.equal(isLegacyModelChoiceLauncherVisible({ enabled: true }), false);
  assert.match(app, /legacyModelChoiceLauncherVisible = isLegacyModelChoiceLauncherVisible\(STRANDED_LENS_CRADLE_REGISTRY\.source\)/);
  assert.match(app, /\{legacyModelChoiceLauncherVisible && pendingAdvance && scene\.id === "ruins"/);
});

test("Host 06 uses one selected img, sole USE, completed read-only behavior, and safe source succession", () => {
  assert.match(app, /strandedLensCradleActive \? \([\s\S]*?<img[\s\S]*?stranded-lens-cradle-art[\s\S]*?STRANDED_LENS_CRADLE_SOURCE_URL[\s\S]*?FRPX05_IDENTIFICATION\.ALT[\s\S]*?\) : \(\s*<picture>/);
  assert.match(app, /const activeSceneHotspots = scene\.id === "ruins" && strandedLensCradleActive[\s\S]*?\? strandedLensCradleHotspots\s*: sceneHotspots/);
  const handler = app.slice(app.indexOf('if (scene.id === "ruins" && hotspotId === "stranded-lens-cradle")'), app.indexOf('if (scene.id === "ruins" && hotspotId === "sixfold-weir")'));
  assert.match(handler, /verb === "LOOK AT"[\s\S]*?FRPX05_UNSEEN_INTERFACE[\s\S]*?return/);
  assert.match(handler, /verb === "TALK TO"[\s\S]*?FRPX05_AVAILABLE[\s\S]*?return/);
  assert.match(handler, /strandedLensCradleState === "complete"[\s\S]*?FRPX05_MASTERED[\s\S]*?return/);
  assert.match(handler, /openModelChoiceExercise\(\);\s*return/);
  assert.match(styles, /scene-art\.stranded-lens-cradle-art \{ object-fit: cover; object-position: 50% 50%; \}/);
  assert.match(styles, /forced-colors: active[\s\S]*?data-stranded-lens-cradle-state[^}]*outline: 3px solid Highlight/);
});

test("one committed reorientation token, native dispatch, focus, and recovery remain nonpersistent", () => {
  assert.match(app, /strandedLensCradleTransitionPendingRef = useRef\(false\)/);
  assert.match(app, /acknowledgeResponsibleAIMastery[\s\S]*?strandedLensCradleTransitionPendingRef\.current = STRANDED_LENS_CRADLE_REGISTRY\.source\.enabled === true/);
  assert.match(app, /window\.requestAnimationFrame[\s\S]*?setStrandedLensCradlePresented\(true\)/);
  assert.match(app, /target\.focus\(\{ preventScroll: true \}\)[\s\S]*?FRPX05_AVAILABLE/);
  assert.match(app, /onClick=\{\(event\) => \{ terminalTriggerRef\.current = event\.currentTarget; useHotspot\(hotspot\.id\); \}\}/);
  assert.doesNotMatch(app, /localStorage[^\n]*strandedLens|saveGame\([^)]*strandedLens/i);
});

test("candidate hotspot projection is finite only after the complete measurement gate", () => {
  const hotspot = getStrandedLensCradleHotspot(registry);
  assert.deepEqual(hotspot, {
    left: `${(activation.x / 3840) * 100}%`,
    top: `${(activation.y / 2160) * 100}%`,
    width: `${(activation.width / 3840) * 100}%`,
    height: `${(activation.height / 2160) * 100}%`,
  });
  assert.equal(getStrandedLensCradleHotspot(), null);
});
