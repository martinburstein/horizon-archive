import { createOpeningProgress, sanitizeOpeningProgress } from "./openingFlow.js";
import { sanitizeCompleted, sceneIds } from "./gameLogic.js";

export const FIRST_RUN_CITY_MODE = "city-threshold-staging";

export function projectFirstRunCityFrontier(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const opening = sanitizeOpeningProgress(value.opening);
  const completed = sanitizeCompleted(value.completed);
  if (!opening || completed.length !== sceneIds.length) return null;

  const { finished: _finished, ...campaign } = value;
  return {
    ...campaign,
    opening: createOpeningProgress("playing", opening.characterName, 2),
    sceneIndex: sceneIds.length - 1,
    completed: [...sceneIds],
    pendingSceneId: null,
  };
}
