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
import { CANONICAL_FRAME, NARROW_FRAME } from "../src/canonicalFrame.js";
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
  assert.match(source, /TEMPORARY_PROLOGUE_/);
  assert.match(source, /data-playtest-marker="CHAPTER_ONE_REVEAL"/);
  assert.match(source, /data-opening-objective=\{scene\.id === "meadow"[\s\S]*?dialogue === OPENING_TERMINAL_OBJECTIVE \? "terminal-search" : undefined\}/);
  assert.doesNotMatch(source, /className="opening-objective"/);
  assert.doesNotMatch(styles, /\.opening-objective\s*\{/);
  assert.equal((source.match(/setDialogue\(OPENING_TERMINAL_OBJECTIVE, "system"\)/g) ?? []).length, 2);
  assert.match(source, /saved\.sceneIndex === 0 && saved\.exerciseEvidence\?\.completed !== true && saved\.opening\.step === "playing"[\s\S]*?OPENING_TERMINAL_OBJECTIVE/);
  assert.match(source, /my instruments find no road or landing marker/);
  assert.match(source, /I'm down\. Glass tubes rise from flush patterns in the floor\. Their states repeat, but not in rows\./);
  assert.equal((source.match(/I'm down\./g) ?? []).length, 1);
  assert.match(source, /opening: createOpeningProgress\(/);
  assert.match(source, /setMode\(saved\.finished \? "ending" : saved\.opening\.step\)/);
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
  for (const frame of [CANONICAL_FRAME, NARROW_FRAME]) {
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
    assert.equal(intersects(objectiveBand, terminal), false);
  }
});
