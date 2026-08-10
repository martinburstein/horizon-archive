import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  advanceOpeningProgress,
  createOpeningProgress,
  evaluateOpeningActivation,
  isRepeatedOpeningKey,
  LOCAL_SAVE_SLOT_ID,
  normalizeCharacterName,
  OPENING_TERMINAL_OBJECTIVE,
  sanitizeOpeningProgress,
  validateCharacterName,
} from "../src/openingFlow.js";
import { getCanonicalGameFrame } from "../src/canonicalFrame.js";
import { MEADOW_PIXEL_HOTSPOTS } from "../src/pixelMeadow.js";

test("character names normalize to a bounded, display-safe local value", () => {
  assert.equal(normalizeCharacterName("  Ada    Lovelace  "), "Ada Lovelace");
  assert.deepEqual(validateCharacterName("R2-D2"), {
    valid: true,
    characterName: "R2-D2",
    error: "",
  });
  assert.equal(validateCharacterName("A").valid, false);
  assert.equal(validateCharacterName("<img src=x>").valid, false);
  assert.equal(validateCharacterName("A".repeat(25)).valid, false);
});

test("opening progress cannot skip naming or forge a save slot", () => {
  assert.deepEqual(createOpeningProgress("playing", "", 99), {
    version: 1,
    saveSlot: LOCAL_SAVE_SLOT_ID,
    characterName: "",
    step: "character-name",
    prologueBeat: 2,
  });
  assert.equal(sanitizeOpeningProgress({ saveSlot: "slot-99", characterName: "Ada", step: "playing" }), null);

  const resumed = sanitizeOpeningProgress({
    saveSlot: LOCAL_SAVE_SLOT_ID,
    characterName: "  Ada Lovelace ",
    step: "prologue",
    prologueBeat: 999,
    privateNotes: "must not persist",
  });
  assert.deepEqual(resumed, {
    version: 1,
    saveSlot: LOCAL_SAVE_SLOT_ID,
    characterName: "Ada Lovelace",
    step: "prologue",
    prologueBeat: 2,
    migrated: false,
  });
  assert.equal("privateNotes" in resumed, false);
});

test("legacy gameplay saves migrate without losing established progress", () => {
  assert.deepEqual(sanitizeOpeningProgress(undefined, { legacySave: true }), {
    version: 1,
    saveSlot: LOCAL_SAVE_SLOT_ID,
    characterName: "Pilot",
    step: "playing",
    prologueBeat: 2,
    migrated: true,
  });
});

test("one pointer or keyboard activation burst advances exactly one persisted opening state", () => {
  let progress = createOpeningProgress("prologue", "Ada Lovelace", 0);
  let lastAcceptedAt = Number.NEGATIVE_INFINITY;
  const activate = (event) => {
    const activation = evaluateOpeningActivation(event, lastAcceptedAt);
    lastAcceptedAt = activation.lastAcceptedAt;
    progress = advanceOpeningProgress(progress, activation.accepted);
  };
  const resume = () => sanitizeOpeningProgress(progress);

  activate({ detail: 1, timeStamp: 1000 });
  activate({ detail: 2, timeStamp: 1060 });
  assert.equal(resume().step, "prologue");
  assert.equal(resume().prologueBeat, 1);

  activate({ detail: 0, repeat: false, timeStamp: 1600 });
  activate({ detail: 0, repeat: true, timeStamp: 1630 });
  assert.equal(resume().step, "prologue");
  assert.equal(resume().prologueBeat, 2);

  activate({ detail: 1, timeStamp: 2200 });
  activate({ detail: 1, timeStamp: 2260 });
  assert.equal(resume().step, "chapter-reveal");
  assert.equal(resume().prologueBeat, 2);

  activate({ detail: 0, repeat: false, timeStamp: 2700 });
  assert.equal(resume().step, "playing");
});

test("held Enter and Space are suppressed without blocking single keyboard activation", () => {
  assert.equal(isRepeatedOpeningKey({ key: "Enter", repeat: true }), true);
  assert.equal(isRepeatedOpeningKey({ key: " ", repeat: true }), true);
  assert.equal(isRepeatedOpeningKey({ key: "Spacebar", repeat: true }), true);
  assert.equal(isRepeatedOpeningKey({ key: "Enter", repeat: false }), false);
  assert.equal(isRepeatedOpeningKey({ key: "ArrowRight", repeat: true }), false);
});

test("App wires the complete resumable opening and exact selected meadow art", () => {
  const source = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
  const styles = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");
  assert.match(source, /2026-07-15-glass-meadow-integrated-terminal\/glass-meadow-integrated-terminal-master-v1\.png/);
  assert.doesNotMatch(source, /Pixelated Draft|signal-coupler|import \{ MeadowRouteMarker \}|<MeadowRouteMarker/);
  assert.doesNotMatch(source, /Glass Meadow Example\.png/);
  assert.match(source, /data-playtest-marker="CREATE_SAVE_FILE"/);
  assert.match(source, /data-playtest-marker="CHARACTER_NAME_FORM"/);
  assert.match(source, /data-playtest-marker=\{`PROLOGUE_BEAT_/);
  assert.doesNotMatch(source, /TEMPORARY_PROLOGUE_|STORY PASS PENDING|Placeholder sequence|Continue temporary prologue/);
  assert.match(source, /data-playtest-marker="CHAPTER_ONE_REVEAL"/);
  assert.match(source, /data-opening-objective=\{scene\.id === "meadow"[\s\S]*?dialogue === OPENING_TERMINAL_OBJECTIVE \? "terminal-search" : undefined\}/);
  assert.doesNotMatch(source, /className="opening-objective"/);
  assert.doesNotMatch(styles, /\.opening-objective\s*\{/);
  assert.equal((source.match(/setDialogue\(OPENING_TERMINAL_OBJECTIVE, "system"\)/g) ?? []).length, 2);
  assert.match(source, /saved\.sceneIndex === 0 && saved\.exerciseEvidence\?\.completed !== true && saved\.opening\.step === "playing"[\s\S]*?OPENING_TERMINAL_OBJECTIVE/);
  assert.match(source, /No road\. No landing marker\. Glass states repeat beneath a ruler-straight horizon without forming rows\./);
  assert.match(source, /I'm down in a low-growth band\. Glass rises from flush collars across a ruler-straight field\. Its states repeat, but not in rows\./);
  assert.equal((source.match(/I'm down in a low-growth band\./g) ?? []).length, 1);
  assert.match(source, /route-marker Terminal was visible in the crop from the start/);
  assert.doesNotMatch(source, /route-marker Terminal has risen|narrow path illuminates/);
  assert.match(source, /Crown remains distant and unchanged/);
  assert.match(source, /fallen assembly's joints and residue remain inert/);
  assert.match(source, /No response follows; the fallen assembly and corridor remain unchanged/);
  assert.match(source, /opening: createOpeningProgress\(/);
  assert.match(source, /if \(saved\.finished\) \{[\s\S]*?projectFirstRunCityFrontier\(saved\)[\s\S]*?setMode\(FIRST_RUN_CITY_MODE\)/);
  assert.match(source, /className="scene-art glass-meadow-art"[\s\S]*src=\{glassMeadowImage\}/);
  assert.doesNotMatch(source, /<PixelMeadow/);
  assert.equal(source.match(/<CanonicalGameFrame enabled>/g)?.length, 6);
  assert.match(source, /<DemoTourScreen state=\{demoTour\}/);
  assert.match(source, /<CanonicalGameFrame enabled=\{scene\.id === "meadow" \|\| scene\.id === "ruins"\}>/);
  assert.doesNotMatch(source, /className="prologue-field"/);
  assert.doesNotMatch(styles, /repeating-linear-gradient/);
  assert.match(source, /id="save-replacement-warning"/);
  assert.match(source, /aria-describedby=\{canResume \? "save-replacement-warning" : undefined\}/);
  assert.match(source, /meadowEntryFocusPendingRef\.current = true;[\s\S]*setMode\("playing"\)/);
  assert.match(source, /primaryHotspotRef\.current\?\.focus/);
  assert.equal(source.match(/<img className="title-art" src=\{glassMeadowImage\}/g)?.length ?? 0, 0);
  assert.equal(source.match(/<img className="title-art chapter-reveal-art" src=\{glassMeadowImage\}/g)?.length, 1);
  assert.match(styles, /\.canonical-game-frame \.scene-art\.glass-meadow-art \{[^}]*object-fit: cover;[^}]*image-rendering: auto;/s);
  assert.doesNotMatch(source, /openingTransitionRef/);
  assert.match(source, /evaluateOpeningActivation\(event, openingActivationAtRef\.current\)/);
  assert.equal(source.match(/onKeyDown=\{preventRepeatedOpeningKey\}/g)?.length, 2);
});

test("opening objective stays in the lower interface band and cannot cover the Terminal", () => {
  const percentage = (value) => Number.parseFloat(value) / 100;
  const intersects = (a, b) => (
    a.left < b.left + b.width
    && a.left + a.width > b.left
    && a.top < b.top + b.height
    && a.top + a.height > b.top
  );

  assert.equal(OPENING_TERMINAL_OBJECTIVE, "Objective: Find a Terminal in the Glass Meadow.");
  for (const frame of [getCanonicalGameFrame(1600, 900), getCanonicalGameFrame(360, 800)]) {
    const objectiveBand = {
      left: 0,
      top: frame.worldHeight,
      width: frame.width,
      height: frame.interfaceHeight,
    };
    const terminal = {
      left: percentage(MEADOW_PIXEL_HOTSPOTS.primary.left) * frame.width,
      top: percentage(MEADOW_PIXEL_HOTSPOTS.primary.top) * frame.worldHeight,
      width: percentage(MEADOW_PIXEL_HOTSPOTS.primary.width) * frame.width,
      height: percentage(MEADOW_PIXEL_HOTSPOTS.primary.height) * frame.worldHeight,
    };

    assert.ok(objectiveBand.left >= 0 && objectiveBand.top >= 0);
    assert.ok(objectiveBand.left + objectiveBand.width <= frame.width);
    assert.ok(objectiveBand.top + objectiveBand.height <= frame.height);
    assert.ok(terminal.left >= 0 && terminal.top >= 0);
    assert.ok(terminal.left + terminal.width <= frame.width);
    assert.ok(terminal.top + terminal.height <= frame.worldHeight + 0.001);
    assert.ok(objectiveBand.top >= terminal.top + terminal.height - 0.001);
  }
});

test("opening surfaces reject legacy islands and retain readable responsive targets", () => {
  const styles = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");
  const openingStart = styles.indexOf(".canonical-game-frame .title-screen,");
  const openingEnd = styles.indexOf(".adventure-screen", openingStart);
  const openingRules = styles.slice(openingStart, openingEnd);

  assert.ok(openingStart >= 0 && openingEnd > openingStart);
  assert.doesNotMatch(openingRules, /width:\s*(?:496|296)px|max-height:\s*224px/);
  assert.doesNotMatch(openingRules, /font-size:\s*(?:7|8|9|10|11)px|padding:\s*4px\s+6px/);
  assert.match(openingRules, /overflow-x:\s*hidden;[\s\S]*?overflow-y:\s*auto;/);
  assert.match(openingRules, /width:\s*min\(90vw,\s*900px\);/);
  assert.match(openingRules, /max-width:\s*68ch;/);
  assert.match(openingRules, /font-size:\s*clamp\(1rem,/);
  assert.match(openingRules, /\.primary-action,[\s\S]*?min-height:\s*48px;/);
  assert.match(openingRules, /\.opening-form input \{[\s\S]*?min-height:\s*48px;[\s\S]*?font-size:\s*1rem;/);
  assert.match(openingRules, /data-canonical-layout="narrow"\] \.title-copy,[\s\S]*?width:\s*100%;[\s\S]*?max-height:\s*none;/);
  assert.match(openingRules, /data-canonical-layout="narrow"\] \.secondary-action \{[\s\S]*?flex:\s*1 1 180px;[\s\S]*?min-height:\s*44px;/);
});
