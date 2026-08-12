import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { clientBridgeChecks, clientBridgeExercise, clientBridgeExplanationDimensions } from "../src/clientBridgeExercise.js";
import { controlFlowChecks, controlFlowExercise, controlFlowExplanationDimensions } from "../src/controlFlowExercise.js";
import { structuredPacketChecks, structuredPacketExercise, structuredPacketExplanationDimensions } from "../src/structuredPacketExercise.js";
import {
  deriveSeveredRelaySpineState,
  getSeveredRelaySpineHotspot,
  isLegacyHost08LessonLauncherVisible,
  isSeveredRelaySpineLawful,
  isSeveredRelaySpineMeasurementPass,
  isSeveredRelaySpineSourceIdentityPass,
  SEVERED_RELAY_SPINE_COPY,
  SEVERED_RELAY_SPINE_PATH,
  SEVERED_RELAY_SPINE_PROVENANCE,
  SEVERED_RELAY_SPINE_REGISTRY,
  SEVERED_RELAY_SPINE_SOURCE_URL,
} from "../src/severedRelaySpine.js";

const app = await readFile(new URL("../src/App.jsx", import.meta.url), "utf8");
const source = await readFile(new URL("../src/severedRelaySpine.js", import.meta.url), "utf8");
const prompts = {
  "H8-1": [3469, "c1a34baa2fd1756fe1c7ed2aa336178ddb2779f06491ebc87ba8ab84b6bc6df9"],
  "H8-2": [2980, "2f286dece70af2bae5047c0be8d5fde0b582297c85b67ec60cf2074fb92a3976"],
  "H8-3": [3097, "9726dfcc016645004dc3d68477d1e100807b7078749a8fcd05bb1c0f5b8afab5"],
  "H8-4": [2987, "0372c201c4196bf53e7242b1f4a52401a815a3a13a3f76c7af7501679c729228"],
  "H8-5": [3136, "db99505ea5859eada15ddcf9489f7d5e5b953f65691aab24a52c5a58f5a69dcb"],
};
const selectedSource = { enabled: true, path: SEVERED_RELAY_SPINE_PATH, sha256: "a".repeat(64), byteLength: 12345678, width: 3840, height: 2160, format: "png", color: "opaque-srgb-8", attemptId: "H8-1" };
const selectedProvenance = { sha256: selectedSource.sha256, byteLength: selectedSource.byteLength, promptId: "HOST08-GEN-PROMPT-H8-1", promptBytes: prompts["H8-1"][0], promptSha256: prompts["H8-1"][1], cliSha256: "c2cdb05244ad9a3dcb8731988790ea6a06a59ab3c062c0f872b35f4ad7d20b05" };

function mastery(exercise, checks, dimensions) {
  return { exerciseId: exercise.exercise_id, masteryStatus: "mastered", confidence: "high", checkCorrectness: {
    primary: Object.fromEntries(checks.map((key) => [key, true])), transfer: Object.fromEntries(checks.map((key) => [key, true])),
    explanation: Object.fromEntries(dimensions.map((key) => [key, true])),
  } };
}
function clientMastery() {
  return { exerciseId: clientBridgeExercise.exercise_id, masteryStatus: "mastered", confidence: "high", checkCorrectness: {
    primary: Object.fromEntries(clientBridgeChecks.map((key) => [key, true])), transfer: Object.fromEntries(clientBridgeChecks.map((key) => [key, true])),
    retrieval: Object.fromEntries(["R01", "R02", "R03", "R04"].map((key) => [key, true])), explanation: Object.fromEntries(clientBridgeExplanationDimensions.map((key) => [key, true])),
  } };
}
function lawfulRegistry() {
  const relation = { x: 1000, y: 600, width: 1840, height: 900, centerX: 1920, centerY: 1050 };
  const semanticTarget = { x: 900, y: 500, width: 2040, height: 1100 };
  const registry = {
    source: selectedSource, relation,
    fractureContinuity: { x: 1050, y: 820, width: 500, height: 250 }, pressureContinuity: { x: 2250, y: 750, width: 500, height: 300 },
    host07Handoff: { x: 700, y: 1400, width: 400, height: 220 }, dryApproach: { x: 950, y: 1550, width: 600, height: 300 },
    damagedVolume: { x: 2400, y: 1500, width: 500, height: 300 }, semanticTarget,
    labelAnchor: { x: 930, y: 530, width: 1980, height: 1040, insetOuterCss: 3, insetTextCss: 5 },
    protected: { host07: "absent", liveWater: "absent", returnRoute: "absent", crown: "absent", host09: "absent" },
  };
  registry.layouts = Object.fromEntries(Object.entries({ desktop: [1920,1080], laptop:[1366,768], narrow:[390,844], effective200:[768,900], retained320x180:[320,180], retained320x240:[320,240] }).map(([id,[width,height]]) => [id, { viewport:{width,height}, retainedArea:1, essentialCentersVisible:true, semanticTargetWidth:100, semanticTargetHeight:80, semanticContainsPhysicalCenter:true, protectedOverlap:0, labelFocusSeparation:8, focusTargetStable:true, objectFit:"cover", objectPosition:"50% 50%", relationSource:relation, semanticSource:semanticTarget }]));
  return registry;
}

test("Host 08 selected registry is identity-bound and copy complete", () => {
  assert.equal(SEVERED_RELAY_SPINE_REGISTRY.source.enabled, true);
  assert.equal(SEVERED_RELAY_SPINE_SOURCE_URL, SEVERED_RELAY_SPINE_PATH);
  assert.equal(SEVERED_RELAY_SPINE_PROVENANCE.sha256, "f6b31c4c410c9cfc89b18047a0a529e184e58261c79f647b2afab59ecd6662a8");
  for (const key of ["unseen","available","inProgress","missed","mastered","returned","nextBoundary","alt"]) assert.equal(typeof SEVERED_RELAY_SPINE_COPY[key], "string");
  assert.equal(deriveSeveredRelaySpineState(), "hidden");
  assert.ok(getSeveredRelaySpineHotspot());
});

test("Host 08 accepts exactly five immutable prompt identities", () => {
  for (const [attemptId,[promptBytes,promptSha256]] of Object.entries(prompts)) assert.equal(isSeveredRelaySpineSourceIdentityPass({ ...selectedSource, attemptId }, { ...selectedProvenance, promptId:`HOST08-GEN-PROMPT-${attemptId}`, promptBytes, promptSha256 }), true);
  assert.equal(isSeveredRelaySpineSourceIdentityPass({ ...selectedSource, attemptId:"H8-6" }, selectedProvenance), false);
  assert.equal(isSeveredRelaySpineSourceIdentityPass({ ...selectedSource, byteLength:30000001 }, selectedProvenance), false);
  assert.equal(isSeveredRelaySpineSourceIdentityPass(selectedSource, { ...selectedProvenance, sha256:"b".repeat(64) }), false);
});

test("Host 08 requires lawful Host 07 and strict L03-01/L03-02 mastery", () => {
  const registry = lawfulRegistry();
  const guard = { host07Lawful:true, structuredPacketEvidence:mastery(structuredPacketExercise, structuredPacketChecks, structuredPacketExplanationDimensions), controlFlowEvidence:mastery(controlFlowExercise, controlFlowChecks, controlFlowExplanationDimensions), registry, provenance:selectedProvenance, decodedImage:{complete:true,naturalWidth:3840,naturalHeight:2160} };
  assert.equal(isSeveredRelaySpineMeasurementPass(registry), true);
  assert.equal(isSeveredRelaySpineLawful(guard), true);
  assert.equal(deriveSeveredRelaySpineState(guard), "available");
  assert.equal(deriveSeveredRelaySpineState({ ...guard, clientBridgeEvidence:clientMastery() }), "complete");
  assert.equal(isSeveredRelaySpineLawful({ ...guard, host07Lawful:false }), false);
});

test("generic Client Bridge launcher disappears irreversibly only at enablement", () => {
  assert.equal(isLegacyHost08LessonLauncherVisible({ enabled:false }), true);
  assert.equal(isLegacyHost08LessonLauncherVisible({ enabled:true }), false);
  assert.equal(isLegacyHost08LessonLauncherVisible({ enabled:true, path:null }), false);
  assert.match(app, /legacyHost08LessonLauncherVisible && pendingAdvance[\s\S]*?openClientBridge/);
  assert.match(source, /source\?\.enabled !== true/);
});

test("Host 08 state is surfaced without DOM, media, save, or evidence writes", () => {
  assert.match(app, /data-severed-relay-spine-state/);
  assert.match(app, /severedRelaySpineImage[\s\S]*?severed-relay-spine-art/);
  assert.doesNotMatch(app, /localStorage[^\n]*severedRelaySpine|saveGame\([^)]*severedRelaySpine/i);
  assert.doesNotMatch(source, /updateClientBridgeEvidence|setClientBridgeEvidence/);
});
