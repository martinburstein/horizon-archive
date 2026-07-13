export const OPENING_SAVE_VERSION = 1;
export const LOCAL_SAVE_SLOT_ID = "expedition-01";
export const PROLOGUE_BEAT_COUNT = 3;

const resumableSteps = new Set(["character-name", "prologue", "chapter-reveal", "playing"]);
const namePattern = /^[\p{L}\p{N}][\p{L}\p{N} .'-]{0,22}[\p{L}\p{N}.']$/u;

export function normalizeCharacterName(value) {
  if (typeof value !== "string") return "";
  return value.normalize("NFKC").trim().replace(/\s+/g, " ").slice(0, 24);
}

export function validateCharacterName(value) {
  const fullName = typeof value === "string" ? value.normalize("NFKC").trim().replace(/\s+/g, " ") : "";
  const characterName = normalizeCharacterName(value);
  if (fullName.length > 24) {
    return { valid: false, characterName, error: "Use no more than 24 characters." };
  }
  if (characterName.length < 2) {
    return { valid: false, characterName, error: "Enter at least 2 characters." };
  }
  if (!namePattern.test(characterName)) {
    return {
      valid: false,
      characterName,
      error: "Use letters, numbers, spaces, periods, apostrophes, or hyphens.",
    };
  }
  return { valid: true, characterName, error: "" };
}

export function createOpeningProgress(step, characterName = "", prologueBeat = 0) {
  const checkedName = validateCharacterName(characterName);
  const safeStep = checkedName.valid && resumableSteps.has(step) ? step : "character-name";
  return {
    version: OPENING_SAVE_VERSION,
    saveSlot: LOCAL_SAVE_SLOT_ID,
    characterName: checkedName.valid ? checkedName.characterName : "",
    step: safeStep,
    prologueBeat: Math.max(0, Math.min(PROLOGUE_BEAT_COUNT - 1, Number.isInteger(prologueBeat) ? prologueBeat : 0)),
  };
}

export function sanitizeOpeningProgress(value, { legacySave = false } = {}) {
  if (legacySave && (!value || typeof value !== "object")) {
    return {
      version: OPENING_SAVE_VERSION,
      saveSlot: LOCAL_SAVE_SLOT_ID,
      characterName: "Pilot",
      step: "playing",
      prologueBeat: PROLOGUE_BEAT_COUNT - 1,
      migrated: true,
    };
  }
  if (!value || typeof value !== "object" || value.saveSlot !== LOCAL_SAVE_SLOT_ID) return null;
  return { ...createOpeningProgress(value.step, value.characterName, value.prologueBeat), migrated: false };
}
