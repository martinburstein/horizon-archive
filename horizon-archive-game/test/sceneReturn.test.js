import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  buildCompletedMeadowReturnPatch,
  canReturnToCompletedMeadow,
  DROWNED_ARCHIVE_RETURN_HOTSPOT,
  getForwardSceneIndex,
} from "../src/sceneTransition.js";

const appSource = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const styleSource = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");

test("the reserved Drowned Archive ridge uses the approved canonical and narrow bounds", () => {
  assert.deepEqual(DROWNED_ARCHIVE_RETURN_HOTSPOT, {
    left: "0%",
    top: "70%",
    width: "17.5%",
    height: "30%",
    narrow: { left: "0%", top: "70%", width: "15%", height: "30%" },
  });
  assert.match(appSource, /id: "meadow-return-ridge"[\s\S]*?label: "Glass Meadow return ridge"[\s\S]*?hotspot: DROWNED_ARCHIVE_RETURN_HOTSPOT/);
});

test("return requires the completed crowned Meadow and never weakens its gate", () => {
  assert.equal(canReturnToCompletedMeadow(["meadow"], { masteryStatus: "mastered" }), true);
  assert.equal(canReturnToCompletedMeadow(["meadow", "ruins"], { masteryStatus: "mastered" }), true);
  assert.equal(canReturnToCompletedMeadow([], { masteryStatus: "mastered" }), false);
  assert.equal(canReturnToCompletedMeadow(["meadow"], { masteryStatus: "in_progress" }), false);
  assert.equal(canReturnToCompletedMeadow(["meadow"], null), false);
});

test("departing a returned Meadow always revisits Chapter II before later progression", () => {
  assert.equal(getForwardSceneIndex("meadow", 1), 1);
  assert.equal(getForwardSceneIndex("meadow", 2), 1);
  assert.equal(getForwardSceneIndex("ruins", 2), 2);
});

test("Chapter II to Meadow to Chapter II is navigation only and cannot change exercise evidence", () => {
  const beforeReturn = {
    sceneIndex: 1,
    pendingAdvance: true,
    terminalOpen: true,
    questionOpen: true,
    completed: ["meadow", "ruins"],
    routeMarkerMastery: {
      masteryStatus: "mastered",
      attemptCount: 3,
      confidence: "medium",
      primaryPassed: true,
      transferPassed: true,
      retrievalPassed: true,
    },
    calibrationMastery: {
      masteryStatus: "remediation_required",
      attemptCount: 5,
      confidence: "low",
      diagnosisPassed: [true, false],
      primaryCheckCount: 8,
      transferCheckCount: 7,
      retrievalCheckCount: 4,
      unresolvedCriticalMisconceptions: ["traceback-first-line"],
    },
    workloadEvidence: { attempts: 2, correct: false },
    exerciseEvidence: { attempts: 4, correct: true },
    workloadSession: { privateSelection: "do not restore" },
    evidenceSession: { privateNotes: "do not restore" },
    calibrationSession: {
      source: "private working source",
      traceback: "private traceback",
      output: "private output",
      notes: "private notes",
    },
    verb: "USE",
  };
  const evidenceBefore = {
    routeMarkerMastery: structuredClone(beforeReturn.routeMarkerMastery),
    calibrationMastery: structuredClone(beforeReturn.calibrationMastery),
    workloadEvidence: structuredClone(beforeReturn.workloadEvidence),
    exerciseEvidence: structuredClone(beforeReturn.exerciseEvidence),
  };

  const returnPatch = buildCompletedMeadowReturnPatch(
    beforeReturn.completed,
    beforeReturn.routeMarkerMastery,
  );
  assert.ok(returnPatch);
  const returnedMeadow = { ...beforeReturn, ...returnPatch };

  assert.equal(returnedMeadow.sceneIndex, 0);
  assert.equal(returnedMeadow.pendingAdvance, true);
  assert.equal(returnedMeadow.workloadSession, null);
  assert.equal(returnedMeadow.evidenceSession, null);
  assert.equal(returnedMeadow.calibrationSession, null);
  assert.deepEqual({
    routeMarkerMastery: returnedMeadow.routeMarkerMastery,
    calibrationMastery: returnedMeadow.calibrationMastery,
    workloadEvidence: returnedMeadow.workloadEvidence,
    exerciseEvidence: returnedMeadow.exerciseEvidence,
  }, evidenceBefore);

  const redepartedChapterTwo = {
    ...returnedMeadow,
    sceneIndex: getForwardSceneIndex("meadow", returnedMeadow.completed.length),
    pendingAdvance: true,
    terminalOpen: false,
    questionOpen: false,
    workloadSession: null,
    evidenceSession: null,
    calibrationSession: null,
    verb: "LOOK AT",
  };
  assert.equal(redepartedChapterTwo.sceneIndex, 1);
  assert.deepEqual({
    routeMarkerMastery: redepartedChapterTwo.routeMarkerMastery,
    calibrationMastery: redepartedChapterTwo.calibrationMastery,
    workloadEvidence: redepartedChapterTwo.workloadEvidence,
    exerciseEvidence: redepartedChapterTwo.exerciseEvidence,
  }, evidenceBefore);
  assert.equal(redepartedChapterTwo.calibrationMastery.masteryStatus, "remediation_required");
  assert.equal(redepartedChapterTwo.calibrationMastery.primaryCheckCount, 8);
  assert.equal(redepartedChapterTwo.calibrationMastery.transferCheckCount, 7);
  assert.equal(redepartedChapterTwo.calibrationMastery.retrievalCheckCount, 4);
  assert.deepEqual(
    redepartedChapterTwo.calibrationMastery.unresolvedCriticalMisconceptions,
    ["traceback-first-line"],
  );
});

test("the return patch is unavailable before strict Meadow mastery and contains no evidence fields", () => {
  assert.equal(buildCompletedMeadowReturnPatch(["meadow"], { masteryStatus: "in_progress" }), null);
  assert.equal(buildCompletedMeadowReturnPatch([], { masteryStatus: "mastered" }), null);
  const patch = buildCompletedMeadowReturnPatch(["meadow"], { masteryStatus: "mastered" });
  assert.deepEqual(Object.keys(patch).sort(), [
    "calibrationSession",
    "evidenceSession",
    "pendingAdvance",
    "questionOpen",
    "sceneIndex",
    "terminalOpen",
    "verb",
    "workloadSession",
  ]);
  assert.equal(Object.isFrozen(patch), true);
});

test("return preserves evidence, restores the earned hold, and announces and focuses deterministically", () => {
  const returnBlock = appSource.match(/function returnToCompletedMeadow\(\) \{([\s\S]*?)\n  \}\n\n  function useHotspot/);
  assert.ok(returnBlock);
  assert.match(returnBlock[1], /buildCompletedMeadowReturnPatch\(completed, routeMarkerMastery\)/);
  assert.match(returnBlock[1], /resumeContinueFocusPendingRef\.current = true/);
  assert.match(returnBlock[1], /setPendingAdvance\(returnPatch\.pendingAdvance\)/);
  assert.match(returnBlock[1], /setSceneIndex\(returnPatch\.sceneIndex\)/);
  assert.match(returnBlock[1], /setDialogue\(buildMeadowReturnPresentation\(returnState\), "system"\)/);
  assert.match(returnBlock[1], /setSceneAnnouncement\(buildSceneArrivalAnnouncement\(meadowScene\)\)/);
  assert.doesNotMatch(returnBlock[1], /set(?:ExerciseEvidence|WorkloadEvidence|EvidencePacketMastery|RouteMarkerMastery|CalibrationMastery|ResponsibleAIEvidence|ModelChoiceEvidence|StructuredPacketEvidence|ControlFlowEvidence|ClientBridgeEvidence|TextAnalysisEvidence|SpeechEvidence|VisualEvidence|ExtractionEvidence|PortalEvidence|PromptEvidence|ClientBoundaryEvidence|SingleAgentEvidence|TextSpeechPatternEvidence|VisualPatternEvidence|ObjectiveLedgerEvidence|RemediationPlannerEvidence|CapstoneReadinessEvidence|MixedSimulationEvidence)\(/);
  assert.match(appSource, /const nextSceneIndex = getForwardSceneIndex\(scene\.id, completed\.length\)/);
  assert.match(appSource, /nextSceneAlreadyCompleted[\s\S]*?resumeContinueFocusPendingRef\.current = true;[\s\S]*?setPendingAdvance\(true\)/);
});

test("resuming the returned completed Meadow announces Chapter I while retaining departure focus", () => {
  assert.match(appSource, /saved\.pendingSceneId === "meadow" && saved\.routeMarkerMastery\?\.masteryStatus === "mastered"\) \{[\s\S]*?resumeContinueFocusPendingRef\.current = true;[\s\S]*?setSceneAnnouncement\(buildSceneArrivalAnnouncement\(resumedScene\)\)/);
  assert.match(appSource, /setDialogue\(saved\.pendingSceneId === "meadow"[\s\S]*?buildMeadowReturnPresentation\(resumedNurseryState\)/);
  assert.match(appSource, /setRouteMarkerMastery\(saved\.routeMarkerMastery\)/);
  assert.match(appSource, /setCalibrationMastery\(saved\.calibrationMastery\)/);
});

test("the lower-band return action stays named and contained at canonical and 320x240", () => {
  assert.match(appSource, /data-chapter-return=\{scene\.id === "ruins" && canReturnToCompletedMeadow\(completed, routeMarkerMastery\) \? "true" : undefined\}/);
  assert.match(appSource, /className="chapter-return-action"[\s\S]*?aria-label="Return to Chapter I, Glass Meadow"[\s\S]*?>Return: Glass Meadow<\/button>/);
  assert.match(appSource, /hotspotId === "meadow-return-ridge"[\s\S]*?Return: Glass Meadow below/);
  assert.match(styleSource, /\.inventory \.chapter-return-action \{[\s\S]*?width: 100%;[\s\S]*?min-height: 24px;[\s\S]*?font-size: 8px;/);
  assert.match(styleSource, /\.inventory \.chapter-return-action \{[\s\S]*?line-height: 8px;[\s\S]*?border-radius: 0;[\s\S]*?box-shadow: none;/);
  assert.match(styleSource, /data-canonical-layout="narrow"\] \.inventory\[data-chapter-return="true"\] \.chapter-return-action \{[\s\S]*?height: 24px;[\s\S]*?min-height: 24px;[\s\S]*?font-size: 8px;[\s\S]*?white-space: nowrap;/);
  assert.match(styleSource, /inventory\[data-chapter-return="true"\] > button:not\(\.chapter-return-action\) \{ display: none; \}/);
  assert.match(styleSource, /\.chapter-return-action:focus-visible,[\s\S]*?data-hotspot-id="meadow-return-ridge"\]:focus-visible \{ outline-offset: -3px; \}/);
  assert.match(styleSource, /data-hotspot-id="meadow-return-ridge"\]\:focus-visible \{ background: transparent; \}/);
  assert.match(styleSource, /data-hotspot-id="meadow-return-ridge"\] span \{[\s\S]*?left: 3px;[\s\S]*?right: 3px;[\s\S]*?width: auto;[\s\S]*?font-size: 8px;[\s\S]*?line-height: 8px;[\s\S]*?white-space: normal;/);
});
