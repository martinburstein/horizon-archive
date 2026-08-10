import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  deriveSixfoldWeirState,
  DROWNED_ARCHIVE_HOTSPOTS,
  FRPX03_COPY,
} from "../src/drownedArchive.js";
import {
  responsibleAIDimensions,
  responsibleAIPrimaryScenarios,
  responsibleAITransferScenarios,
} from "../src/responsibleAIExercise.js";

const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const styles = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");
const releaseManifest = JSON.parse(readFileSync(new URL("../../Production Pipeline/First Run/FIRST_RUN_RELEASE_COMMAND_MANIFEST_FRRC-002-v1.json", import.meta.url), "utf8"));
const pass = () => Object.fromEntries(responsibleAIDimensions.map((dimension) => [dimension, true]));
const sequence = [...responsibleAIPrimaryScenarios, ...responsibleAITransferScenarios].map(({ id }) => id);
const evidence = (count, masteryStatus, extra = {}) => ({
  masteryStatus,
  dimensionCorrectness: Object.fromEntries(sequence.slice(0, count).map((id) => [id, pass()])),
  ...extra,
});
const masteredWorkload = { masteryStatus: "mastered" };

test("Sixfold Weir uses the exact distinct canonical and narrow geometry", () => {
  assert.deepEqual(DROWNED_ARCHIVE_HOTSPOTS.sixfoldWeir, {
    left: "45%", top: "75%", width: "20%", height: "25%",
    narrow: { left: "45%", top: "75%", width: "20%", height: "25%" },
  });
  const host04 = { left: 24.375, top: 56.94, right: 35, bottom: 78.05 };
  const host05 = { left: 45, top: 75, right: 65, bottom: 100 };
  const returned = { left: 0, top: 70, right: 17.5, bottom: 100 };
  const overlap = (a, b) => Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left))
    * Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
  assert.equal(overlap(host05, host04), 0);
  assert.equal(overlap(host05, returned), 0);
});

test("Host 05 keeps physical registration while its inline semantic box reaches 44px and contains the label", () => {
  assert.match(app, /const sixfoldActivationStyle = isSixfoldWeir \? \{[\s\S]*?\.\.\.hotspotStyle,[\s\S]*?top: "min\(75%, calc\(100% - 44px\)\)",[\s\S]*?height: "max\(25%, 44px\)"/);
  assert.match(app, /const sixfoldLabelStyle = isSixfoldWeir \? \{[\s\S]*?left: "2px",[\s\S]*?right: "2px",[\s\S]*?top: "2px",[\s\S]*?bottom: "2px",[\s\S]*?padding: "1px",[\s\S]*?letterSpacing: 0,[\s\S]*?overflow: "hidden"/);
  assert.match(app, /style=\{sixfoldActivationStyle\}/);
  assert.match(app, /<span style=\{sixfoldLabelStyle\}>/);
  const content = { width: 313.984375, height: 175.625 };
  const physical = {
    left: content.width * 0.45,
    top: content.height * 0.75,
    width: content.width * 0.20,
    height: content.height * 0.25,
  };
  const semantic = {
    left: physical.left,
    top: Math.min(physical.top, content.height - 44),
    width: physical.width,
    height: Math.max(physical.height, 44),
  };
  assert.deepEqual(physical, { left: 141.29296875, top: 131.71875, width: 62.796875, height: 43.90625 });
  assert.deepEqual(semantic, { left: 141.29296875, top: 131.625, width: 62.796875, height: 44 });
  assert.equal(semantic.top + semantic.height, physical.top + physical.height);
  assert.deepEqual({ left: semantic.left + 2, top: semantic.top + 2, width: semantic.width - 4, height: semantic.height - 4 }, {
    left: 143.29296875, top: 133.625, width: 58.796875, height: 40,
  });
});

test("pure view state fails closed on missing prerequisites and malformed or noncontiguous evidence", () => {
  assert.equal(deriveSixfoldWeirState(null, null), "hidden");
  assert.equal(deriveSixfoldWeirState({ masteryStatus: "in_progress" }, null), "hidden");
  assert.equal(deriveSixfoldWeirState(masteredWorkload, null), "available");
  assert.equal(deriveSixfoldWeirState(masteredWorkload, evidence(1, "in_progress")), "in_progress");
  assert.equal(deriveSixfoldWeirState(masteredWorkload, evidence(1, "remediation_required")), "remediation_required");
  assert.equal(deriveSixfoldWeirState(masteredWorkload, evidence(6, "primary_complete")), "in_progress");
  assert.equal(deriveSixfoldWeirState(masteredWorkload, evidence(12, "transfer_complete")), "in_progress");
  assert.equal(deriveSixfoldWeirState(masteredWorkload, {
    ...evidence(12, "mastered", { confidence: "high" }),
    dimensionCorrectness: { ...evidence(12, "mastered").dimensionCorrectness, closed_note_explanation: pass() },
  }), "complete");
  assert.equal(deriveSixfoldWeirState(masteredWorkload, { masteryStatus: "in_progress", dimensionCorrectness: { P02: pass() } }), "hidden");
  assert.equal(deriveSixfoldWeirState(masteredWorkload, { masteryStatus: "in_progress", dimensionCorrectness: { P01: { principle: true } } }), "hidden");
  assert.doesNotMatch(app, /useState\([^\n]*sixfold|sixfoldWeirState:\s*/i);
});

test("Host 05 mounts only after Host 04 and precedes the return ridge in actual source order", () => {
  assert.match(app, /const sceneHotspots = \[primarySceneHotspot, \.\.\.\(scene\.id === "ruins" \? ruinsHotspots : meadowHotspots\)\]/);
  assert.match(app, /const ruinsHotspots = \[\.\.\.\(scene\.id === "ruins" && sixfoldWeirState !== "hidden"[\s\S]*?id: "sixfold-weir"[\s\S]*?DROWNED_ARCHIVE_HOTSPOTS\.sixfoldWeir[\s\S]*?\.\.\.\(scene\.secondaryHotspots \?\? \[\]\)\]/);
  assert.match(app, /data-sixfold-weir-state=\{isSixfoldWeir \? sixfoldWeirState : undefined\}/);
});

test("LOOK TALK and sole USE are one-hit native hotspot actions and completed USE is read-only", () => {
  const handler = app.slice(app.indexOf('if (scene.id === "ruins" && hotspotId === "sixfold-weir")'), app.indexOf('if (scene.id === "meadow" && hotspotId === "fracture-nursery")'));
  assert.match(handler, /verb === "LOOK AT"[\s\S]*?FRPX03_UNSEEN_INTERFACE[\s\S]*?"scene"[\s\S]*?return;/);
  assert.match(handler, /verb === "TALK TO"[\s\S]*?Complete silence\.[\s\S]*?"pilot"[\s\S]*?return;/);
  assert.match(handler, /sixfoldWeirState === "complete"[\s\S]*?FRPX03_MASTERED[\s\S]*?return;/);
  assert.match(handler, /openResponsibleAI\(\);\s*return;/);
  assert.doesNotMatch(app, />Start Responsible AI(?: Transfer)?</);
  assert.match(app, /function openResponsibleAI\(\) \{\s*if \(scene\.id !== "ruins" \|\| !\["available", "in_progress", "remediation_required"\]\.includes\(sixfoldWeirState\)\) return;/);
});

test("focus detection return reload and Terminal inertness are deterministic and nonpersisted", () => {
  assert.match(app, /const sixfoldWeirRef = useRef\(null\)/);
  assert.match(app, /const sixfoldWeirFocusPendingRef = useRef\(false\)/);
  assert.match(app, /sixfoldWeirFocusPendingRef\.current = false;\s*sixfoldWeirRef\.current\?\.focus/);
  assert.match(app, /function acknowledgeWorkloadCompletion[\s\S]*?sixfoldWeirFocusPendingRef\.current = true;[\s\S]*?FRPX03_AVAILABLE/);
  assert.match(app, /function acknowledgeResponsibleAIPrimary[\s\S]*?sixfoldWeirFocusPendingRef\.current = true;/);
  assert.match(app, /function acknowledgeResponsibleAIMastery[\s\S]*?sixfoldWeirFocusPendingRef\.current = true;/);
  assert.match(app, /setResponsibleAISession\(null\);[\s\S]*?setSceneIndex\(returnPatch\.sceneIndex\)/);
  assert.match(app, /className="scene-world-content" inert=\{terminalOpen \|\| demoTourConfirmation \? true : undefined\}/);
  assert.match(app, /className="command-panel"[\s\S]*?inert=\{terminalOpen \|\| demoTourConfirmation \? true : undefined\}/);
});

test("all seven Quartermaster placeholders remain explicit and no eighth meaning slot exists", () => {
  const slots = Object.keys(FRPX03_COPY).filter((key) => key.startsWith("FRPX03_"));
  assert.deepEqual(slots, [
    "FRPX03_UNSEEN_INTERFACE", "FRPX03_AVAILABLE", "FRPX03_IN_PROGRESS", "FRPX03_MISSED",
    "FRPX03_MASTERED", "FRPX03_RETURNED", "FRPX03_NEXT_BOUNDARY",
  ]);
  for (const slot of slots) assert.equal(FRPX03_COPY[slot], `[${slot}]`);
});

test("non-color states focus and forced-color treatment reuse the accepted hotspot system", () => {
  assert.match(styles, /sixfold-weir[^}]*in_progress[^}]*border-style: dashed/);
  assert.match(styles, /sixfold-weir[^}]*remediation_required[^}]*border-style: dotted/);
  assert.match(styles, /sixfold-weir[^}]*complete[^}]*border-style: double/);
  assert.match(styles, /button:focus-visible[^}]*outline: 2px solid/);
  assert.match(styles, /forced-colors: active[\s\S]*?sixfold-weir-state[^}]*focus-visible \{ outline: 3px solid Highlight/);
});

test("FRRC-002-v1 freezes all thirteen gates, one E2E, external QA, and a machine live verifier", () => {
  assert.equal(releaseManifest.manifest_id, "FRRC-002-v1");
  assert.equal(releaseManifest.work_order, "FRWO-003-v1");
  assert.equal(releaseManifest.shell, "FRSH-003-v1");
  assert.equal(Object.keys(releaseManifest.entries).length, 13);
  for (const id of ["focused", "related", "full", "validators", "production-build", "fixture-build", "production-preview", "fixture-preview", "served-identity", "complete-e2e", "live-summary-verify", "pba-media", "cleanup-identity"]) {
    const entry = releaseManifest.entries[id];
    assert.equal(entry.id, id);
    assert.ok(entry.workdir && (entry.command?.length || entry.invocations?.length) && entry.timeout_ms > 0);
    assert.equal(entry.expected_exit, 0);
    assert.equal(entry.owner, "combat_engineer");
    assert.ok("prerequisites" in entry && "output_port_ownership" in entry && "cleanup" in entry);
  }
  assert.equal(releaseManifest.policy.e2e_invocations, 1);
  assert.match(releaseManifest.policy.qa_root, /OS temp.*outside repository/);
  assert.deepEqual(releaseManifest.entries["complete-e2e"].command, ["node", "playtest/e2e-playthrough.mjs"]);
  assert.match(releaseManifest.entries["complete-e2e"].environment.HORIZON_ARCHIVE_QA_DIR, /GUID.*OS-temp.*outside-repository/);
  assert.match(releaseManifest.entries["live-summary-verify"].command.join(" "), /first-run\.live-summary\.v1[\s\S]*FRSH-003-v1-VR-02[\s\S]*productPredecessor[\s\S]*semanticBottomAnchored[\s\S]*Shift\+Tab -> Tab[\s\S]*sixfoldActivationMs/);
  assert.equal(releaseManifest.entries.validators.invocations.length, 40);
  assert.deepEqual(releaseManifest.entries.validators.invocations.map((entry) => entry.command[1]), [...releaseManifest.entries.validators.invocations.map((entry) => entry.command[1])].sort());
});
