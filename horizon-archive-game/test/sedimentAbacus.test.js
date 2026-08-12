import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { controlFlowChecks, controlFlowExercise, controlFlowExplanationDimensions } from "../src/controlFlowExercise.js";
import { modelChoiceDimensions, modelChoiceExercise, modelChoicePrimaryScenarios, modelChoiceTransferScenarios } from "../src/modelChoiceExercise.js";
import { structuredPacketChecks, structuredPacketExercise, structuredPacketExplanationDimensions } from "../src/structuredPacketExercise.js";

import {
  deriveSedimentAbacusState,
  getSedimentAbacusHotspot,
  isLegacyHost07LessonLauncherVisible,
  isSedimentAbacusLawful,
  isSedimentAbacusMeasurementPass,
  isSedimentAbacusSourceIdentityPass,
  SEDIMENT_ABACUS_COPY,
  SEDIMENT_ABACUS_PATH,
  SEDIMENT_ABACUS_PROVENANCE,
  SEDIMENT_ABACUS_REGISTRY,
  SEDIMENT_ABACUS_SOURCE_URL,
} from "../src/sedimentAbacus.js";

const app = await readFile(new URL("../src/App.jsx", import.meta.url), "utf8");
const source = await readFile(new URL("../src/sedimentAbacus.js", import.meta.url), "utf8");

const selectedSource = {
  enabled: true,
  path: SEDIMENT_ABACUS_PATH,
  sha256: "a".repeat(64),
  byteLength: 12345678,
  width: 3840,
  height: 2160,
  format: "png",
  color: "opaque-srgb-8",
  attemptId: "H7-3",
};
const selectedProvenance = {
  sha256: selectedSource.sha256,
  byteLength: selectedSource.byteLength,
  promptId: "HOST07-GEN-PROMPT-H7-3",
  promptBytes: 2690,
  promptSha256: "96cc2fa0dd12adf40dc3993832e95a3f7b1113ad265fbc8e3735cfc808f3b754",
  cliSha256: "c2cdb05244ad9a3dcb8731988790ea6a06a59ab3c062c0f872b35f4ad7d20b05",
};

function completeModelEvidence() {
  const ids = [...modelChoicePrimaryScenarios, ...modelChoiceTransferScenarios, { id: "closed_note_explanation" }].map(({ id }) => id);
  return { exerciseId: modelChoiceExercise.exercise_id, masteryStatus: "mastered", confidence: "high", itemCorrectness: Object.fromEntries(ids.map((id) => [id, Object.fromEntries(modelChoiceDimensions.map((key) => [key, true]))])) };
}
function completeStructuredEvidence() {
  return { exerciseId: structuredPacketExercise.exercise_id, masteryStatus: "mastered", confidence: "high", checkCorrectness: {
    primary: Object.fromEntries(structuredPacketChecks.map((key) => [key, true])),
    transfer: Object.fromEntries(structuredPacketChecks.map((key) => [key, true])),
    explanation: Object.fromEntries(structuredPacketExplanationDimensions.map((key) => [key, true])),
  } };
}
function completeControlEvidence() {
  return { exerciseId: controlFlowExercise.exercise_id, masteryStatus: "mastered", confidence: "high", checkCorrectness: {
    primary: Object.fromEntries(controlFlowChecks.map((key) => [key, true])),
    transfer: Object.fromEntries(controlFlowChecks.map((key) => [key, true])),
    explanation: Object.fromEntries(controlFlowExplanationDimensions.map((key) => [key, true])),
  } };
}
function lawfulRegistry() {
  const relation = Object.freeze({ x: 1152, y: 540, width: 1536, height: 864, centerX: 1920, centerY: 972 });
  const semanticTarget = Object.freeze({ x: 1080, y: 480, width: 1680, height: 1000 });
  const base = {
    source: selectedSource,
    relation,
    semanticTarget,
    labelAnchor: { x: 1110, y: 510, width: 1620, height: 940, insetOuterCss: 3, insetTextCss: 5 },
    sedimentHandoff: { x: 700, y: 1250, width: 500, height: 260 },
    dryApproach: { x: 900, y: 1300, width: 600, height: 300 },
    depthBands: [
      { x: 1250, y: 600, width: 1200, height: 170 },
      { x: 1200, y: 850, width: 1300, height: 170 },
      { x: 1150, y: 1100, width: 1400, height: 170 },
    ],
    noduleGroup: { x: 1200, y: 590, width: 1350, height: 700 },
    protected: { host06: "absent", liveWater: "absent", returnRoute: "absent", crown: "absent", tidalLens: "absent", host08: "absent" },
  };
  const layouts = Object.fromEntries(Object.entries({ desktop: [1920, 1080], laptop: [1366, 768], narrow: [390, 844], effective200: [768, 900], retained320x180: [320, 180], retained320x240: [320, 240] }).map(([id, [width, height]]) => [id, {
    viewport: { width, height }, retainedArea: 1, essentialCentersVisible: true,
    semanticTargetWidth: 140, semanticTargetHeight: 90, semanticContainsPhysicalCenter: true,
    protectedOverlap: 0, labelFocusSeparation: 8, focusTargetStable: true,
    objectFit: "cover", objectPosition: "50% 50%", relationSource: relation, semanticSource: semanticTarget,
  }]));
  return { ...base, layouts };
}

test("Host 07 selected registry is media-backed and measurement complete", () => {
  assert.equal(SEDIMENT_ABACUS_REGISTRY.source.enabled, true);
  assert.equal(SEDIMENT_ABACUS_REGISTRY.source.path, SEDIMENT_ABACUS_PATH);
  assert.equal(SEDIMENT_ABACUS_PROVENANCE.sha256, "19ae9894853a33bb52be2e32a11ce57d1de383fa9cc21dbd4d291dea00f492d9");
  assert.equal(SEDIMENT_ABACUS_SOURCE_URL, SEDIMENT_ABACUS_PATH);
  assert.match(SEDIMENT_ABACUS_COPY.alt, /Irregular mineral nodules/);
  assert.ok(getSedimentAbacusHotspot());
  assert.equal(isSedimentAbacusMeasurementPass(), true);
  assert.equal(isSedimentAbacusLawful(), false);
  assert.equal(deriveSedimentAbacusState(), "hidden");
  assert.match(app, /host07-sediment-abacus-master-v1\.png";/);
});

test("Host 07 accepts only the five frozen attempt identities and exact provenance", () => {
  assert.equal(isSedimentAbacusSourceIdentityPass(selectedSource, selectedProvenance), true);
  for (const attemptId of ["H7-1", "H7-2", "H7-4", "H7-5"]) {
    const bytes = { "H7-1": 3028, "H7-2": 2782, "H7-4": 2638, "H7-5": 2801 }[attemptId];
    const sha256 = { "H7-1": "193dfd6ebd76e7b323597114ba1e8ed62e48b2015487a90e3206d61d5227390c", "H7-2": "f37006c0f921144d17313e616fd561460d21308542178aa83558a17d93982d4c", "H7-4": "129f0413a24510226dd47924ac654ed1acb1a1731dc75ae3850fc7fb4e36e534", "H7-5": "ff081fa095f63ceee36bdbd95c2332f85e52804a3291a348327455f390586988" }[attemptId];
    assert.equal(isSedimentAbacusSourceIdentityPass({ ...selectedSource, attemptId }, { ...selectedProvenance, promptId: `HOST07-GEN-PROMPT-${attemptId}`, promptBytes: bytes, promptSha256: sha256 }), true);
  }
  assert.equal(isSedimentAbacusSourceIdentityPass({ ...selectedSource, attemptId: "H7-6" }, selectedProvenance), false);
  assert.equal(isSedimentAbacusSourceIdentityPass({ ...selectedSource, attemptId: "I2" }, selectedProvenance), false);
  assert.equal(isSedimentAbacusSourceIdentityPass({ ...selectedSource, byteLength: 30000001 }, selectedProvenance), false);
  assert.equal(isSedimentAbacusSourceIdentityPass(selectedSource, { ...selectedProvenance, sha256: "b".repeat(64) }), false);
});

test("legacy Structured Packets path disappears irreversibly at enablement", () => {
  assert.equal(isLegacyHost07LessonLauncherVisible({ enabled: false }), true);
  assert.equal(isLegacyHost07LessonLauncherVisible({ enabled: true }), false);
  assert.equal(isLegacyHost07LessonLauncherVisible({ enabled: true, path: null }), false);
  assert.match(app, /legacyHost07LessonLauncherVisible && pendingAdvance[\s\S]*?openStructuredPackets/);
  assert.match(source, /source\?\.enabled !== true/);
});

test("Host 07 requires Host 06 and strict L02-03 evidence before any state", () => {
  assert.equal(deriveSedimentAbacusState({ host06Lawful: false }), "hidden");
  assert.equal(deriveSedimentAbacusState({ host06Lawful: true, modelChoiceEvidence: { masteryStatus: "mastered" } }), "hidden");
  assert.match(source, /host06Lawful === true[\s\S]*?sanitizeModelChoiceEvidence\(modelChoiceEvidence\)\?\.masteryStatus === "mastered"/);
  assert.match(source, /sanitizeStructuredPacketEvidence/);
  assert.match(source, /sanitizeControlFlowEvidence/);
});

test("a fully measured source reaches available then exact L03-01 and L03-02 states", () => {
  const registry = lawfulRegistry();
  const guard = { host06Lawful: true, modelChoiceEvidence: completeModelEvidence(), registry, provenance: selectedProvenance, decodedImage: { complete: true, naturalWidth: 3840, naturalHeight: 2160 } };
  assert.equal(isSedimentAbacusMeasurementPass(registry), true);
  assert.equal(isSedimentAbacusLawful(guard), true);
  assert.equal(deriveSedimentAbacusState(guard), "available");
  assert.equal(deriveSedimentAbacusState({ ...guard, structuredPacketEvidence: completeStructuredEvidence() }), "in_progress");
  assert.equal(deriveSedimentAbacusState({ ...guard, structuredPacketEvidence: completeStructuredEvidence(), controlFlowEvidence: completeControlEvidence() }), "complete");
});

test("Host 07 selected phase routes USE through unchanged L03-01 then L03-02", () => {
  const handler = app.slice(app.indexOf("function useHotspot"), app.indexOf("function selectInventory"));
  assert.match(handler, /hotspotId === "sediment-abacus"/);
  assert.match(handler, /verb === "LOOK AT"[\s\S]*?SEDIMENT_ABACUS_COPY\.unseen/);
  assert.match(handler, /verb === "TALK TO"[\s\S]*?Complete silence/);
  assert.match(handler, /sanitizeStructuredPacketEvidence\(structuredPacketEvidence\)\?\.masteryStatus === "mastered"\) openControlFlow\(\);[\s\S]*?else openStructuredPackets\(\)/);
  assert.match(handler, /sedimentAbacusState === "complete"[\s\S]*?return/);
});

test("Host 07 uses one native target and selected image only after lawfulness", () => {
  assert.match(app, /sedimentAbacusActive \? \([\s\S]*?<img[\s\S]*?sediment-abacus-art[\s\S]*?sedimentAbacusImage/);
  assert.match(app, /const presentedSceneHotspots = scene\.id === "ruins" && sedimentAbacusActive[\s\S]*?sedimentAbacusHotspots/);
  assert.match(app, /data-sediment-abacus-state/);
  assert.match(app, /aria-label={`\$\{verb\.toLowerCase\(\)\} \$\{hotspot\.label\}, \$\{sedimentAbacusStateLabel\}`}/);
  assert.match(app, /sedimentAbacusActive \|\| strandedLensCradleActive/);
});

test("Host 07 transition is one-frame, focus-safe, and fail-closed", () => {
  assert.match(app, /sedimentAbacusTransitionPendingRef = useRef\(false\)/);
  assert.match(app, /requestAnimationFrame[\s\S]*?sedimentAbacusTransitionPendingRef\.current = false[\s\S]*?setSedimentAbacusPresented\(true\)/);
  assert.match(app, /sedimentAbacusRef\.current[\s\S]*?focus\(\{ preventScroll: true \}\)/);
  assert.match(app, /if \(!sedimentAbacusLawful\)[\s\S]*?setSedimentAbacusPresented\(false\)/);
  assert.doesNotMatch(app, /localStorage[^\n]*sedimentAbacus|saveGame\([^)]*sedimentAbacus/i);
});

test("Host 07 copy slots are final-purpose and bounded", () => {
  for (const key of ["unseen", "available", "inProgress", "missed", "mastered", "returned", "nextBoundary", "alt"]) assert.equal(typeof SEDIMENT_ABACUS_COPY[key], "string");
  assert.equal(SEDIMENT_ABACUS_COPY.name, "Sediment Abacus");
  assert.doesNotMatch(JSON.stringify(SEDIMENT_ABACUS_COPY), /Builder|Machine|reward|access granted|invitation/i);
});
