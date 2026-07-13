export const sceneIds = ["meadow", "ruins", "automaton"];

const answerPatterns = {
  meadow: /^print\s*\(\s*(["'])SIGNAL FOUND\1\s*\)$/,
  ruins: /^pilot_name\s*=\s*(["'])MARTIN\1$/,
  automaton: /^archive_open\s*=\s*True$/,
};

export function validateAnswer(sceneId, value) {
  return Boolean(answerPatterns[sceneId]?.test(value.trim()));
}

export function sanitizeCompleted(value) {
  if (!Array.isArray(value)) return [];
  const completed = [];
  for (const [index, sceneId] of sceneIds.entries()) {
    if (value[index] !== sceneId) break;
    completed.push(sceneId);
  }
  return completed;
}

export function getResumeState(value, pendingSceneId = null) {
  const completed = sanitizeCompleted(value);
  const pendingIndex = completed.length - 1;
  const hasCompletedMeadowReturn = completed.includes("meadow") && pendingSceneId === "meadow";
  const hasPendingAcknowledgement = hasCompletedMeadowReturn
    || (pendingIndex >= 0 && pendingSceneId === sceneIds[pendingIndex]);
  return {
    completed,
    sceneIndex: hasPendingAcknowledgement
      ? hasCompletedMeadowReturn ? 0 : pendingIndex
      : Math.min(completed.length, sceneIds.length - 1),
    finished: !hasPendingAcknowledgement && completed.length === sceneIds.length,
    pendingSceneId: hasPendingAcknowledgement ? pendingSceneId : null,
  };
}
