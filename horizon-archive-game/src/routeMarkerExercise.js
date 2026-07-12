import exerciseAsset from "../../curriculum/lessons/L-01-02/exercise.json" with { type: "json" };

export const routeMarkerExercise = exerciseAsset;
export const routeCheckCodes = [
  "E_SAFE_SHAPE",
  "E_VARIABLE_SET",
  "E_SITE_VALUE",
  "E_LABEL_HISTORY",
  "E_CHANNEL_TYPE",
  "E_PRINT_VARIABLES",
  "E_OUTPUT_1",
  "E_OUTPUT_2",
];
export const routeRetrieval = [
  {
    id: "R_NUMBER_STRING",
    prompt: "What is the difference between 3 and \"3\"?",
    options: [["number_string", "3 is a number; \"3\" is text."], ["same", "They are the same value type."], ["both_text", "Both are text."]],
    answer: "number_string",
    tag: "quoted-number-is-number",
  },
  {
    id: "R_ASSIGNMENT_OUTPUT",
    prompt: "Does signal_label = \"LOCAL SURFACE\" display text by itself?",
    options: [["no", "No. Assignment stores; print displays."], ["yes", "Yes. Every assignment displays."], ["sometimes", "Only when the value is text."]],
    answer: "no",
    tag: "assignment-prints-output",
  },
  {
    id: "R_REASSIGNMENT",
    prompt: "What does a later print(signal_label) use after reassignment?",
    options: [["latest", "The latest value: ROUTE VERIFIED."], ["first", "The first value: LOCAL SURFACE."], ["both", "Both values together."]],
    answer: "latest",
    tag: "earlier-value-survives-reassignment",
  },
  {
    id: "R_VARIABLE_PRINT",
    prompt: "Why print variable names instead of repeating literal answers?",
    options: [["reuse", "It demonstrates storage and reuse."], ["faster", "Literal text cannot be printed."], ["style", "It only changes the color of output."]],
    answer: "reuse",
    tag: "hardcoded-output-is-variable-use",
  },
];

const allowedTags = new Set(exerciseAsset.misconception_tags);
const errorTags = {
  E_SAFE_SHAPE: ["hardcoded-output-is-variable-use"],
  E_VARIABLE_SET: ["hardcoded-output-is-variable-use"],
  E_SITE_VALUE: [],
  E_LABEL_HISTORY: ["reassignment-changes-everything", "earlier-value-survives-reassignment"],
  E_CHANNEL_TYPE: ["quoted-number-is-number"],
  E_PRINT_VARIABLES: ["hardcoded-output-is-variable-use"],
  E_OUTPUT_1: ["reassignment-changes-everything"],
  E_OUTPUT_2: ["earlier-value-survives-reassignment"],
};

const expected = {
  primary: {
    siteHistory: ["DROWNED ARCHIVE"],
    labelHistory: ["LOCAL SURFACE"],
    channelHistory: [3],
    outputs: ["DROWNED ARCHIVE", "LOCAL SURFACE 3"],
  },
  transfer: {
    siteHistory: ["DROWNED ARCHIVE"],
    labelHistory: ["LOCAL SURFACE", "ROUTE VERIFIED"],
    channelHistory: [3],
    outputs: ["DROWNED ARCHIVE", "ROUTE VERIFIED 3"],
  },
};

function parseLiteral(text) {
  const value = text.trim();
  if (/^-?\d+$/.test(value)) return { valid: true, value: Number(value), type: "int" };
  if (value === "True" || value === "False") return { valid: true, value: value === "True", type: "bool" };
  const match = value.match(/^(["'])(.*)\1$/);
  if (match && !match[2].includes(match[1])) return { valid: true, value: match[2], type: "string" };
  return { valid: false };
}

export function analyzeRouteSource(source) {
  const result = { safe: true, names: new Set(), history: {}, printNames: [], outputs: [] };
  const environment = {};
  const lines = source.replace(/\r/g, "").split("\n");
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#") || /^("""|''').*("""|''')$/.test(line)) continue;
    const assignment = line.match(/^([A-Za-z_]\w*)\s*=\s*(.+)$/);
    if (assignment) {
      const literal = parseLiteral(assignment[2]);
      if (!literal.valid) { result.safe = false; continue; }
      const name = assignment[1];
      result.names.add(name);
      result.history[name] ||= [];
      result.history[name].push({ value: literal.value, type: literal.type });
      environment[name] = literal.value;
      continue;
    }
    const printCall = line.match(/^print\s*\((.*)\)$/);
    if (printCall) {
      const names = printCall[1].split(",").map((item) => item.trim()).filter(Boolean);
      if (!names.length || names.some((name) => !/^[A-Za-z_]\w*$/.test(name) || !(name in environment))) {
        result.safe = false;
        continue;
      }
      result.printNames.push(names);
      result.outputs.push(names.map((name) => String(environment[name])).join(" "));
      continue;
    }
    result.safe = false;
  }
  return result;
}

function values(history) {
  return (history || []).map((item) => item.value);
}

function sameArray(left, right) {
  return left.length === right.length && left.every((item, index) => item === right[index]);
}

export function evaluateRouteSource(source, form = "primary") {
  const safeForm = form === "transfer" ? "transfer" : "primary";
  const observed = analyzeRouteSource(source);
  const target = expected[safeForm];
  const checks = {
    E_SAFE_SHAPE: observed.safe,
    E_VARIABLE_SET: sameArray([...observed.names].sort(), ["channel_count", "signal_label", "site_name"]),
    E_SITE_VALUE: sameArray(values(observed.history.site_name), target.siteHistory),
    E_LABEL_HISTORY: sameArray(values(observed.history.signal_label), target.labelHistory),
    E_CHANNEL_TYPE: sameArray(values(observed.history.channel_count), target.channelHistory)
      && (observed.history.channel_count || []).every((item) => item.type === "int"),
    E_PRINT_VARIABLES: JSON.stringify(observed.printNames) === JSON.stringify([["site_name"], ["signal_label", "channel_count"]]),
    E_OUTPUT_1: observed.outputs[0] === target.outputs[0],
    E_OUTPUT_2: observed.outputs[1] === target.outputs[1],
  };
  const failedCodes = routeCheckCodes.filter((code) => !checks[code]);
  return {
    form: safeForm,
    checks,
    score: routeCheckCodes.length - failedCodes.length,
    passed: failedCodes.length === 0,
    failedCodes,
    outputs: observed.outputs.slice(0, 2),
    misconceptionTags: [...new Set(failedCodes.flatMap((code) => errorTags[code] || []))],
    feedback: failedCodes.length
      ? `${failedCodes[0]}: ${exerciseAsset.remediation_routes[failedCodes[0]]}`
      : `PASS: 8/8 ${safeForm} checks confirmed.`,
  };
}

export function evaluateRoutePrediction(prediction, form) {
  const expectedLines = exerciseAsset.forms[form === "transfer" ? "transfer" : "primary"].prediction;
  return expectedLines.map((line, index) => prediction[index]?.trim() === line);
}

export function evaluateRouteRetrieval(answers) {
  return Object.fromEntries(routeRetrieval.map((item) => [item.id, answers[item.id] === item.answer]));
}

export function routeRemediation(result, level) {
  const code = result?.failedCodes?.[0];
  if (!code) return "All eight checks pass.";
  if (level <= 1) return `Literal cue — change only the boundary named by ${code}.`;
  if (level === 2) return `Assignment trace — ${exerciseAsset.remediation_routes[code]}`;
  return "Output trace — read each print call from left to right using the latest value assigned above it.";
}

export function sanitizeRouteMarkerMastery(value) {
  if (!value || typeof value !== "object" || value.exerciseId !== exerciseAsset.exercise_id) return null;
  const predictionCorrectness = {};
  for (const form of ["primary", "transfer"]) {
    if (Array.isArray(value.predictionCorrectness?.[form])) {
      predictionCorrectness[form] = value.predictionCorrectness[form].slice(0, 2).map((item) => item === true);
    }
  }
  const checkResults = {};
  for (const form of ["primary", "transfer"]) {
    if (value.checkResults?.[form] && typeof value.checkResults[form] === "object") {
      checkResults[form] = Object.fromEntries(routeCheckCodes
        .filter((code) => typeof value.checkResults[form][code] === "boolean")
        .map((code) => [code, value.checkResults[form][code]]));
    }
  }
  if (value.checkResults?.retrieval && typeof value.checkResults.retrieval === "object") {
    checkResults.retrieval = Object.fromEntries(routeRetrieval
      .filter((item) => typeof value.checkResults.retrieval[item.id] === "boolean")
      .map((item) => [item.id, value.checkResults.retrieval[item.id]]));
  }
  return {
    exerciseId: exerciseAsset.exercise_id,
    lessonId: exerciseAsset.lesson_id,
    activityId: exerciseAsset.activity_id,
    skillIds: [...exerciseAsset.skill_ids],
    formId: ["primary", "transfer", "retrieval"].includes(value.formId) ? value.formId : "primary",
    predictionCorrectness,
    checkResults,
    attemptCount: Math.min(99, Math.max(0, Number.isInteger(value.attemptCount) ? value.attemptCount : 0)),
    hintLevel: Math.min(3, Math.max(0, Number.isInteger(value.hintLevel) ? value.hintLevel : 0)),
    confidence: ["low", "medium", "high"].includes(value.confidence) ? value.confidence : null,
    misconceptionTags: Array.isArray(value.misconceptionTags)
      ? [...new Set(value.misconceptionTags.filter((tag) => allowedTags.has(tag)))]
      : [],
    masteryStatus: ["in_progress", "remediation_required", "mastered"].includes(value.masteryStatus)
      ? value.masteryStatus
      : "in_progress",
  };
}

export function updateRouteMarkerMastery(previous, changes = {}) {
  const safe = sanitizeRouteMarkerMastery(previous)
    || sanitizeRouteMarkerMastery({ exerciseId: exerciseAsset.exercise_id });
  return sanitizeRouteMarkerMastery({
    ...safe,
    formId: changes.formId || safe.formId,
    predictionCorrectness: changes.predictionCorrectness
      ? { ...safe.predictionCorrectness, [changes.formId]: changes.predictionCorrectness }
      : safe.predictionCorrectness,
    checkResults: changes.checkResults
      ? { ...safe.checkResults, [changes.formId]: changes.checkResults }
      : safe.checkResults,
    attemptCount: changes.incrementAttempt ? safe.attemptCount + 1 : safe.attemptCount,
    hintLevel: Math.max(safe.hintLevel, changes.hintLevel || 0),
    confidence: changes.confidence || safe.confidence,
    misconceptionTags: [...safe.misconceptionTags, ...(changes.misconceptionTags || [])],
    masteryStatus: changes.masteryStatus || safe.masteryStatus,
  });
}
