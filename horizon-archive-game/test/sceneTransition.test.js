import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  buildMeadowDeparturePresentation,
  buildMeadowReturnPresentation,
  buildSceneArrivalAnnouncement,
  FRPX02_COPY,
} from "../src/sceneTransition.js";

const appSource = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const styleSource = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");

test("completed Meadow presents Nursery-owned optional state and a destination-aware departure", () => {
  assert.deepEqual(buildMeadowDeparturePresentation("The Drowned Archive"), {
    summary: FRPX02_COPY.AVAILABLE,
    departureLabel: "Depart: Drowned Archive",
    departureAriaLabel: "Depart for Chapter II, The Drowned Archive",
  });
  assert.deepEqual(buildMeadowDeparturePresentation("The Drowned Archive", {
    calibrationState: "complete",
  }), {
    summary: FRPX02_COPY.COMPLETE,
    departureLabel: "Depart: Drowned Archive",
    departureAriaLabel: "Depart for Chapter II, The Drowned Archive",
  });
  assert.equal(buildMeadowDeparturePresentation("The Drowned Archive", { calibrationState: "in_progress" }).summary, FRPX02_COPY.IN_PROGRESS);
});

test("optional calibration handoff distinguishes optional launch from strict mastery", () => {
  const presentation = buildMeadowDeparturePresentation("The Drowned Archive");
  assert.match(presentation.summary, /Optional scored calibration is available at the Fracture Nursery coupling/);
  assert.match(presentation.summary, /Departure is already open/);
  assert.doesNotMatch(presentation.summary, /not easy or unscored/);
});

test("the twelve Quartermaster slots are final, owner-bounded, and return-truthful", () => {
  assert.deepEqual(Object.keys(FRPX02_COPY), [
    "MEADOW_ALT", "NURSERY_NAME", "NURSERY_STATE", "DETECTION", "CHAPTER_TURN", "LOOK",
    "TALK", "AVAILABLE", "IN_PROGRESS", "COMPLETE", "RETURN", "DEPARTURE",
  ]);
  assert.equal(FRPX02_COPY.NURSERY_NAME, "Fracture Nursery coupling");
  assert.deepEqual(FRPX02_COPY.NURSERY_STATE, {
    available: "available", in_progress: "in progress", complete: "complete",
  });
  assert.match(FRPX02_COPY.DETECTION, /classified[\s\S]*No material change detected/);
  assert.match(FRPX02_COPY.CHAPTER_TURN, /Three unlike bodies[\s\S]*expedition interface[\s\S]*came with us/);
  assert.match(FRPX02_COPY.COMPLETE, /^SYSTEM \/\/[\s\S]*SCENE \/\//);
  assert.match(buildMeadowReturnPresentation("available"), /^SCENE \/\/[\s\S]*SUIT \/\//);
  assert.match(buildMeadowReturnPresentation("in_progress"), /working copy is unfinished and can resume here/);
  assert.match(buildMeadowReturnPresentation("complete"), /every crack remains[\s\S]*evidence remains finalized/);
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
  assert.match(appSource, /const showMeadowDepartureChoice = pendingAdvance[\s\S]*?scene\.id === "meadow"[\s\S]*?fractureNurseryState !== "hidden"/);
  assert.match(appSource, /id=\{showMeadowDepartureChoice \? "meadow-choice-summary"/);
  assert.match(appSource, /aria-describedby=\{scene\.id === "meadow" \? "meadow-choice-summary" : undefined\}/);
  assert.doesNotMatch(appSource, /Optional calibration|Resume optional calibration|calibration-launch/);
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
  assert.doesNotMatch(styleSource, /data-meadow-departure-choice="true"\][^}]*> \.verb-grid[\s\S]*?display: none/);
  assert.match(styleSource, /data-canonical-layout="narrow"\] \.dialogue-actions \.continue-action \{[\s\S]*?height: 24px;[\s\S]*?min-height: 24px;[\s\S]*?font-size: 8px;[\s\S]*?white-space: nowrap;/);
  assert.match(styleSource, /data-scene="meadow"[\s\S]*?:is\(\.verb, \.dialogue-actions \.continue-action\)[\s\S]*?min-height: 44px/);
  assert.doesNotMatch(styleSource, /data-canonical-layout="narrow"\][^}]*\.continue-action \{[^}]*line-height: 1\.05;/s);
});
