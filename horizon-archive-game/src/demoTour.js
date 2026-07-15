export const DEMO_TOUR_STORAGE_KEY = "horizon-archive-demo-tour-v1";

export const DEMO_TOUR_CONFIRMATION = "Demo Tour shows later shipped scenes. It records no attempts, scores, mastery, campaign completion, or city change. Resume Campaign returns to this unfinished gate.";
export const DEMO_TOUR_STATUS = "DEMO TOUR // PRACTICE SKIPPED // NO CAMPAIGN CREDIT";
export const DEMO_TOUR_PREVIEW_STATUS = "Preview only — bounded comparison not saved";

export const FIRST_SIGNAL_TOUR_RESUME = Object.freeze({
  sceneId: "meadow",
  terminalKind: "first",
  boundary: "terminal-l0101-independent-run",
  orientationStep: 0,
  verb: "USE",
  dialogue: "First Signal active. Edit the file, run it, then review the output.",
});

export const FIRST_SIGNAL_TOUR_RESUME_LABEL = "First Signal — unfinished practice";

export const SHIPPED_DEMO_TOUR_SCENE_IDS = Object.freeze([
  "meadow",
  "ruins",
  "automaton",
  "city-threshold",
]);

const FORBIDDEN_TOUR_KEYS = new Set([
  "mastery",
  "masteryStatus",
  "correctness",
  "attempt",
  "attempts",
  "attemptCount",
  "hint",
  "hintLevel",
  "completed",
  "completion",
  "unlock",
  "unlocks",
  "cityState",
  "cityStateDelta",
  "identity",
  "source",
  "sourceCode",
  "campaign",
  "evidence",
]);

function isAllowlistedScene(sceneId) {
  return SHIPPED_DEMO_TOUR_SCENE_IDS.includes(sceneId);
}

function hasForbiddenField(value) {
  return Object.keys(value).some((key) => FORBIDDEN_TOUR_KEYS.has(key));
}

function cleanBoundary(value) {
  if (typeof value !== "string") return "unfinished-practice";
  const bounded = value.trim().slice(0, 80);
  return /^[A-Za-z0-9._:-]+$/.test(bounded) ? bounded : "unfinished-practice";
}

export function getNextTourSceneId(sceneId) {
  const currentIndex = SHIPPED_DEMO_TOUR_SCENE_IDS.indexOf(sceneId);
  if (currentIndex < 0) return SHIPPED_DEMO_TOUR_SCENE_IDS[0];
  return SHIPPED_DEMO_TOUR_SCENE_IDS[currentIndex + 1] ?? null;
}

export function createDemoTourState({ tourSceneId, resumeCampaignSceneId, resumeBoundary }) {
  const safeResumeScene = isAllowlistedScene(resumeCampaignSceneId)
    ? resumeCampaignSceneId
    : SHIPPED_DEMO_TOUR_SCENE_IDS[0];
  const safeTourScene = isAllowlistedScene(tourSceneId)
    ? tourSceneId
    : getNextTourSceneId(safeResumeScene) ?? safeResumeScene;
  return {
    mode: "demo_tour",
    tourSceneId: safeTourScene,
    resumeCampaignSceneId: safeResumeScene,
    resumeBoundary: cleanBoundary(resumeBoundary),
  };
}

export function sanitizeDemoTourState(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  if (value.mode !== "demo_tour" || hasForbiddenField(value)) return null;
  if (!isAllowlistedScene(value.tourSceneId) || !isAllowlistedScene(value.resumeCampaignSceneId)) return null;
  const clean = createDemoTourState(value);
  return clean.resumeBoundary === value.resumeBoundary ? clean : null;
}

export function moveDemoTour(state, requestedSceneId) {
  const current = sanitizeDemoTourState(state);
  if (!current || !isAllowlistedScene(requestedSceneId)) return current;
  return { ...current, tourSceneId: requestedSceneId };
}

export function getDemoTourResumeTarget(state) {
  const current = sanitizeDemoTourState(state);
  if (!current) return null;
  if (current.resumeCampaignSceneId !== FIRST_SIGNAL_TOUR_RESUME.sceneId) return null;
  if (current.resumeBoundary !== FIRST_SIGNAL_TOUR_RESUME.boundary) return null;
  return { ...FIRST_SIGNAL_TOUR_RESUME };
}

export function getDemoTourResumeLabel(state) {
  const current = sanitizeDemoTourState(state);
  if (!current) return "Unfinished practice";
  if (
    current.resumeCampaignSceneId === FIRST_SIGNAL_TOUR_RESUME.sceneId
    && current.resumeBoundary === FIRST_SIGNAL_TOUR_RESUME.boundary
  ) return FIRST_SIGNAL_TOUR_RESUME_LABEL;
  return "Unfinished practice";
}

export function loadDemoTour(storage) {
  try {
    return sanitizeDemoTourState(JSON.parse(storage.getItem(DEMO_TOUR_STORAGE_KEY) || "null"));
  } catch {
    return null;
  }
}

export function saveDemoTour(storage, state) {
  const clean = sanitizeDemoTourState(state);
  if (!clean) {
    storage.removeItem(DEMO_TOUR_STORAGE_KEY);
    return null;
  }
  storage.setItem(DEMO_TOUR_STORAGE_KEY, JSON.stringify(clean));
  return clean;
}

export function clearDemoTour(storage) {
  storage.removeItem(DEMO_TOUR_STORAGE_KEY);
}
