import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  createOpeningProgress,
  LOCAL_SAVE_SLOT_ID,
  normalizeCharacterName,
  sanitizeOpeningProgress,
  validateCharacterName,
} from "../src/openingFlow.js";

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

test("App wires the complete resumable opening and exact selected meadow art", () => {
  const source = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
  const styles = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");
  assert.match(source, /Glass Meadow Example\.png/);
  assert.match(source, /data-playtest-marker="CREATE_SAVE_FILE"/);
  assert.match(source, /data-playtest-marker="CHARACTER_NAME_FORM"/);
  assert.match(source, /TEMPORARY_PROLOGUE_/);
  assert.match(source, /data-playtest-marker="CHAPTER_ONE_REVEAL"/);
  assert.match(source, /data-opening-objective="terminal-search">OBJECTIVE \/\/ FIND A TERMINAL/);
  assert.match(source, /opening: createOpeningProgress\(/);
  assert.match(source, /setMode\(saved\.finished \? "ending" : saved\.opening\.step\)/);
  assert.match(source, /className="scene-art glass-meadow-art"[\s\S]*src=\{glassMeadowImage\}/);
  assert.doesNotMatch(source, /<PixelMeadow/);
  assert.equal(source.match(/<CanonicalGameFrame enabled>/g)?.length, 5);
  assert.match(source, /<CanonicalGameFrame enabled=\{scene\.id === "meadow" \|\| scene\.id === "ruins"\}>/);
  assert.doesNotMatch(source, /className="prologue-field"/);
  assert.doesNotMatch(styles, /repeating-linear-gradient/);
  assert.match(source, /id="save-replacement-warning"/);
  assert.match(source, /aria-describedby=\{canResume \? "save-replacement-warning" : undefined\}/);
  assert.match(source, /meadowEntryFocusPendingRef\.current = true;[\s\S]*setMode\("playing"\)/);
  assert.match(source, /meadowPrimaryHotspotRef\.current\?\.focus/);
  assert.equal(source.match(/<img className="title-art" src=\{glassMeadowImage\}/g)?.length ?? 0, 0);
  assert.equal(source.match(/<img className="title-art chapter-reveal-art" src=\{glassMeadowImage\}/g)?.length, 1);
  assert.match(styles, /\.canonical-game-frame \.scene-art\.glass-meadow-art \{[^}]*object-fit: cover;[^}]*image-rendering: pixelated;[^}]*image-rendering: crisp-edges;/s);
});
