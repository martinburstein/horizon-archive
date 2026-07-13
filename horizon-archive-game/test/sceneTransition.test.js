import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { buildMeadowDeparturePresentation, buildSceneArrivalAnnouncement } from "../src/sceneTransition.js";

const appSource = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const styleSource = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");

test("completed Meadow presents optional practice and a destination-aware departure", () => {
  assert.deepEqual(buildMeadowDeparturePresentation("The Drowned Archive"), {
    summary: "ROUTE OPEN // Depart now, or choose scored calibration: diagnose first, then pass 8/8 + 8/8 + 4/4. Retry or Exit safely; the route stays open.",
    calibrationLabel: "Optional calibration",
    calibrationAriaLabel: "Start optional calibration practice",
    departureLabel: "Depart: Drowned Archive",
    departureAriaLabel: "Depart for Chapter II, The Drowned Archive",
  });
  assert.deepEqual(buildMeadowDeparturePresentation("The Drowned Archive", {
    calibrationStarted: true,
    calibrationMastered: true,
  }), {
    summary: "ROUTE OPEN // Primary, transfer, retrieval, and optional calibration complete; crowned passage earned.",
    calibrationLabel: "Resume optional calibration",
    calibrationAriaLabel: "Resume optional calibration practice",
    departureLabel: "Depart: Drowned Archive",
    departureAriaLabel: "Depart for Chapter II, The Drowned Archive",
  });
});

test("optional calibration handoff distinguishes optional launch from strict mastery", () => {
  const presentation = buildMeadowDeparturePresentation("The Drowned Archive");
  assert.match(presentation.summary, /Depart now, or choose scored calibration/);
  assert.match(presentation.summary, /diagnose first, then pass 8\/8 \+ 8\/8 \+ 4\/4/);
  assert.match(presentation.summary, /Retry or Exit safely/);
  assert.match(presentation.summary, /the route stays open/);
  assert.doesNotMatch(presentation.summary, /not easy or unscored/);
});

test("arrival announcement is chapter and destination aware without adding story detail", () => {
  assert.equal(buildSceneArrivalAnnouncement({
    chapter: "II",
    location: "The Drowned Archive",
    prompt: "This remains visible in the separately announced dialogue line.",
  }), "Chapter II, The Drowned Archive.");
  assert.equal(buildSceneArrivalAnnouncement(null), "");
});

test("App moves focus and announces the scene while preserving the strict route gate", () => {
  assert.match(appSource, /const showMeadowDepartureChoice = pendingAdvance[\s\S]*?routeMarkerMastery\?\.masteryStatus === "mastered"[\s\S]*?calibrationMastery\?\.masteryStatus !== "mastered"/);
  assert.match(appSource, /aria-label=\{meadowDeparturePresentation\.calibrationAriaLabel\}/);
  assert.match(appSource, /id=\{showMeadowDepartureChoice \? "meadow-choice-summary"/);
  assert.match(appSource, /aria-describedby="meadow-choice-summary"/);
  assert.match(appSource, /aria-describedby=\{scene\.id === "meadow" && calibrationMastery\?\.masteryStatus !== "mastered" \? "meadow-choice-summary" : undefined\}/);
  assert.match(appSource, /meadowDeparturePresentation\.calibrationLabel/);
  assert.match(appSource, /aria-label=\{scene\.id === "meadow" \? meadowDeparturePresentation\.departureAriaLabel/);
  assert.match(appSource, /scene\.id === "meadow" \? meadowDeparturePresentation\.departureLabel : "Continue"/);
  assert.match(appSource, /nextSceneAlreadyCompleted[\s\S]*?sceneArrivalFocusPendingRef\.current = true;[\s\S]*?setSceneAnnouncement\(buildSceneArrivalAnnouncement\(nextScene\)\);[\s\S]*?setDialogue\(nextSceneAlreadyCompleted \? nextScene\.success : nextScene\.prompt, "system"\);/);
  assert.match(appSource, /primaryHotspotRef\.current\?\.focus\(\{ preventScroll: true \}\)/);
  assert.match(appSource, /className="sr-only" role="status" aria-live="polite" aria-atomic="true" data-scene-announcement/);
});

test("resume restores the earned Meadow choice and canonical actions retain readable targets", () => {
  assert.match(appSource, /saved\.pendingSceneId === "meadow" && saved\.routeMarkerMastery\?\.masteryStatus === "mastered"/);
  assert.match(appSource, /resumeContinueFocusPendingRef\.current = true/);
  assert.match(styleSource, /\.canonical-game-frame\[data-canonical-layout="narrow"\] \.dialogue-actions \{[\s\S]*?flex-wrap: nowrap;[\s\S]*?gap: 2px;/);
  assert.match(appSource, /data-meadow-departure-choice=\{showMeadowDepartureChoice \? "true" : undefined\}/);
  assert.match(appSource, /"dialogue-copy meadow-departure-choice"/);
  assert.match(styleSource, /#meadow-choice-summary \{ padding-left: 8px; border-left: 3px solid #b89554; \}/);
  assert.match(styleSource, /\.canonical-game-frame #meadow-choice-summary \{ padding-left: 4px; border-left-width: 2px; \}/);
  assert.match(styleSource, /data-canonical-layout="narrow"\] #meadow-choice-summary \{ padding-left: 2px; border-left-width: 1px; \}/);
  assert.match(styleSource, /data-scene="meadow"\][^}]*\.continue-action \{[\s\S]*?min-height: 24px;[\s\S]*?font-size: 8px;[\s\S]*?line-height: 10px;[\s\S]*?border-radius: 0;[\s\S]*?box-shadow: none;/);
  assert.match(styleSource, /\.command-panel\[data-meadow-departure-choice="true"\] \{[\s\S]*?grid-template-rows: minmax\(0, 1fr\);[\s\S]*?padding: 0;/);
  assert.match(styleSource, /data-meadow-departure-choice="true"\] > \.verb-grid,[\s\S]*?data-meadow-departure-choice="true"\] > \.inventory \{ display: none; \}/);
  assert.match(styleSource, /data-canonical-layout="narrow"\] \.meadow-departure-choice \{[\s\S]*?grid-template-rows: minmax\(0, 1fr\) 24px;[\s\S]*?gap: 2px;[\s\S]*?height: 100%;/);
  assert.match(styleSource, /\.meadow-departure-choice #meadow-choice-summary \{[\s\S]*?font-size: 8px;[\s\S]*?line-height: 8px;/);
  assert.match(styleSource, /\.meadow-departure-choice \.dialogue-actions \{[\s\S]*?width: 100%;[\s\S]*?height: 24px;[\s\S]*?padding: 0;/);
  assert.match(styleSource, /data-canonical-layout="narrow"\] \.dialogue-actions \.continue-action \{[\s\S]*?height: 24px;[\s\S]*?min-height: 24px;[\s\S]*?font-size: 8px;[\s\S]*?white-space: nowrap;/);
  assert.match(styleSource, /\.meadow-departure-choice \.continue-action:focus-visible \{[\s\S]*?outline-offset: -3px;/);
  assert.doesNotMatch(styleSource, /data-canonical-layout="narrow"\][^}]*\.continue-action \{[^}]*line-height: 1\.05;/s);
});
