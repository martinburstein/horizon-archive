import exerciseAsset from "../../curriculum/lessons/L-02-01/exercise.json" with { type: "json" };

export const workloadSortExercise = exerciseAsset;

export const workloadChoices = [
  ["g", "Generative AI"],
  ["a", "Agentic AI"],
  ["t", "Text analysis"],
  ["s", "Speech"],
  ["v", "Vision / image generation"],
  ["i", "Information extraction"],
  ["src", "Editable source"],
  ["out", "Runtime output"],
  ["ev", "Saved mastery evidence"],
  ["session", "Temporary working session"],
];

const validItemIds = new Set([
  ...exerciseAsset.items.map((item) => item.id),
  ...exerciseAsset.retry_items.map((item) => item.id),
]);
const validTags = new Set(
  [...exerciseAsset.items, ...exerciseAsset.retry_items].flatMap((item) => item.tags),
);

export function getWorkloadItems(form) {
  return form === "retry" ? exerciseAsset.retry_items : exerciseAsset.items;
}

export function createWorkloadSession(form = "primary") {
  return {
    form: form === "retry" ? "retry" : "primary",
    index: 0,
    selected: "",
    itemAttempt: 0,
    results: {},
    criticalMisses: [],
    hintLevel: 0,
    phase: "answering",
    feedback: "Choose the best primary workload or Terminal state, then check the card.",
  };
}

function takeContiguousCorrectness(items, source) {
  const itemCorrectness = {};
  for (const item of items) {
    if (typeof source[item.id] !== "boolean") break;
    itemCorrectness[item.id] = source[item.id];
  }
  return itemCorrectness;
}

function getEvidenceForm(itemCorrectness) {
  return exerciseAsset.retry_items.some((item) => item.id in itemCorrectness) ? "retry" : "primary";
}

function getEvidenceCriticalMisses(items, itemCorrectness) {
  return [...new Set(items.flatMap((item) => (
    item.critical && itemCorrectness[item.id] === false ? item.tags : []
  )))];
}

function buildWorkloadResumeNotice(finalizedCount, total) {
  return `RESUME // PRIOR ASSESSED PROGRESS: ${finalizedCount}/${total} finalized · WORKING CONTROLS: reset clean`;
}

export function reconstructWorkloadSession(value) {
  const evidence = sanitizeWorkloadEvidence(value);
  if (!evidence) return createWorkloadSession();
  const form = getEvidenceForm(evidence.itemCorrectness);
  const items = getWorkloadItems(form);
  const results = Object.fromEntries(items
    .filter((item) => typeof evidence.itemCorrectness[item.id] === "boolean")
    .map((item) => [item.id, evidence.itemCorrectness[item.id]]));
  const criticalMisses = getEvidenceCriticalMisses(items, results);
  const firstIncompleteIndex = items.findIndex((item) => !(item.id in results));
  const base = createWorkloadSession(form);
  const resumeNotice = buildWorkloadResumeNotice(Object.keys(results).length, items.length);

  if (firstIncompleteIndex < 0) {
    const completed = {
      ...base,
      index: items.length - 1,
      results,
      criticalMisses,
      resumeNotice,
      phase: "form_complete",
      feedback: "Saved form complete. Review the result and confirm or remediate it.",
    };
    return completed;
  }

  return {
    ...base,
    index: firstIncompleteIndex,
    results,
    criticalMisses,
    resumeNotice,
    feedback: firstIncompleteIndex === 0
      ? base.feedback
      : "Saved evidence restored. Continue with the first incomplete card.",
  };
}

export function evaluateWorkloadSelection(session) {
  const items = getWorkloadItems(session.form);
  const item = items[session.index];
  if (!item || session.phase !== "answering") return { session, submitted: false, finalized: false };
  if (!workloadChoices.some(([key]) => key === session.selected)) {
    return {
      session: { ...session, feedback: "Select one fixed key before checking this card." },
      submitted: false,
      finalized: false,
    };
  }

  const attempt = session.itemAttempt + 1;
  if (session.selected === item.answer) {
    return {
      session: {
        ...session,
        itemAttempt: attempt,
        results: { ...session.results, [item.id]: true },
        phase: "item_complete",
        feedback: attempt === 1 ? "Correct. Classification confirmed." : "Correct after remediation. Contrast recovered.",
      },
      submitted: true,
      finalized: true,
      item,
      correct: true,
      attempt,
    };
  }

  if (attempt === 1) {
    return {
      session: {
        ...session,
        selected: "",
        itemAttempt: attempt,
        hintLevel: Math.max(session.hintLevel, 1),
        feedback: "Not yet. Level 1 cue: identify the primary input, central action, and requested output, then retry.",
      },
      submitted: true,
      finalized: false,
      item,
      attempt,
    };
  }

  const criticalMisses = item.critical
    ? [...new Set([...session.criticalMisses, ...item.tags])]
    : session.criticalMisses;
  const expected = workloadChoices.find(([key]) => key === item.answer)?.[1] || item.answer;
  return {
    session: {
      ...session,
      itemAttempt: attempt,
      results: { ...session.results, [item.id]: false },
      criticalMisses,
      hintLevel: Math.max(session.hintLevel, 3),
      phase: "item_complete",
      feedback: `Level 3 worked contrast: ${item.hint} Best match: ${expected}.`,
    },
    submitted: true,
    finalized: true,
    item,
    correct: false,
    attempt,
  };
}

export function revealWorkloadHint(session) {
  const item = getWorkloadItems(session.form)[session.index];
  if (!item || session.itemAttempt < 1 || session.phase !== "answering") return session;
  return {
    ...session,
    hintLevel: Math.max(session.hintLevel, 2),
    feedback: `Level 2 contrast: ${item.hint}`,
  };
}

export function advanceWorkloadSession(session) {
  if (session.phase !== "item_complete") return session;
  const items = getWorkloadItems(session.form);
  if (session.index + 1 >= items.length) return { ...session, phase: "form_complete", selected: "" };
  return {
    ...session,
    index: session.index + 1,
    selected: "",
    itemAttempt: 0,
    hintLevel: 0,
    phase: "answering",
    feedback: "Next card ready. Classify the primary job, not every capability involved.",
  };
}

export function getWorkloadOutcome(session) {
  const items = getWorkloadItems(session.form);
  const score = items.reduce((total, item) => total + (session.results[item.id] === true ? 1 : 0), 0);
  const passed = score >= exerciseAsset.mastery.minimum_correct && session.criticalMisses.length === 0;
  return { score, total: items.length, passed, criticalMisses: [...session.criticalMisses] };
}

export function sanitizeWorkloadEvidence(value) {
  if (!value || typeof value !== "object" || value.exerciseId !== exerciseAsset.exercise_id) return null;
  const allowlistedCorrectness = {};
  if (value.itemCorrectness && typeof value.itemCorrectness === "object") {
    for (const [itemId, correct] of Object.entries(value.itemCorrectness)) {
      if (validItemIds.has(itemId) && typeof correct === "boolean") allowlistedCorrectness[itemId] = correct;
    }
  }
  const primaryCorrectness = takeContiguousCorrectness(exerciseAsset.items, allowlistedCorrectness);
  const primaryComplete = Object.keys(primaryCorrectness).length === exerciseAsset.items.length;
  const retryCorrectness = primaryComplete
    ? takeContiguousCorrectness(exerciseAsset.retry_items, allowlistedCorrectness)
    : {};
  const itemCorrectness = { ...primaryCorrectness, ...retryCorrectness };
  const activeForm = getEvidenceForm(itemCorrectness);
  const activeItems = getWorkloadItems(activeForm);
  const activeResults = Object.fromEntries(activeItems
    .filter((item) => typeof itemCorrectness[item.id] === "boolean")
    .map((item) => [item.id, itemCorrectness[item.id]]));
  const activeCriticalMisses = getEvidenceCriticalMisses(activeItems, activeResults);
  const activeComplete = Object.keys(activeResults).length === activeItems.length;
  const activeScore = Object.values(activeResults).filter((correct) => correct === true).length;
  const confidence = ["low", "medium", "high"].includes(value.confidence) ? value.confidence : null;
  const canMaster = activeComplete
    && activeScore >= exerciseAsset.mastery.minimum_correct
    && activeCriticalMisses.length === 0
    && Boolean(confidence);
  const requestedMasteryStatus = ["in_progress", "remediation_required", "mastered"].includes(value.masteryStatus)
    ? value.masteryStatus
    : "in_progress";
  const masteryStatus = requestedMasteryStatus === "mastered" && !canMaster
    ? activeComplete && (activeScore < exerciseAsset.mastery.minimum_correct || activeCriticalMisses.length > 0)
      ? "remediation_required"
      : "in_progress"
    : requestedMasteryStatus;
  return {
    exerciseId: exerciseAsset.exercise_id,
    lessonId: exerciseAsset.lesson_id,
    activityId: exerciseAsset.activity_id,
    skillIds: [...exerciseAsset.skill_ids],
    itemCorrectness,
    attemptCount: Math.min(99, Math.max(0, Number.isInteger(value.attemptCount) ? value.attemptCount : 0)),
    hintLevel: Math.min(3, Math.max(0, Number.isInteger(value.hintLevel) ? value.hintLevel : 0)),
    confidence,
    misconceptionTags: Array.isArray(value.misconceptionTags)
      ? [...new Set([...value.misconceptionTags.filter((tag) => validTags.has(tag)), ...activeCriticalMisses])]
      : activeCriticalMisses,
    masteryStatus,
  };
}

export function updateWorkloadEvidence(previous, changes = {}) {
  const safe = sanitizeWorkloadEvidence(previous) || sanitizeWorkloadEvidence({ exerciseId: exerciseAsset.exercise_id });
  const itemCorrectness = { ...safe.itemCorrectness };
  if (changes.itemId && validItemIds.has(changes.itemId) && typeof changes.correct === "boolean") {
    itemCorrectness[changes.itemId] = changes.correct;
  }
  return sanitizeWorkloadEvidence({
    ...safe,
    itemCorrectness,
    attemptCount: changes.incrementAttempt ? Math.min(99, safe.attemptCount + 1) : safe.attemptCount,
    hintLevel: Math.max(safe.hintLevel, Number.isInteger(changes.hintLevel) ? Math.min(3, changes.hintLevel) : 0),
    confidence: ["low", "medium", "high"].includes(changes.confidence) ? changes.confidence : safe.confidence,
    misconceptionTags: [...new Set([
      ...safe.misconceptionTags,
      ...(Array.isArray(changes.misconceptionTags) ? changes.misconceptionTags.filter((tag) => validTags.has(tag)) : []),
    ])],
    masteryStatus: ["in_progress", "remediation_required", "mastered"].includes(changes.masteryStatus)
      ? changes.masteryStatus
      : safe.masteryStatus,
  });
}
