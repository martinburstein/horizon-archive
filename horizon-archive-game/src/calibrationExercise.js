import exerciseAsset from "../../curriculum/lessons/L-01-03/exercise.json" with { type: "json" };

export const calibrationExercise = exerciseAsset;
export const calibrationCheckCodes = ["E_PARSE", "E_SAFE_SHAPE", "E_STATEMENT_COUNT", "E_VARIABLE_SET", "E_VALUE", "E_REPAIR_STRUCTURE", "E_OUTPUT", "E_REPAIR_BOUNDARY"];
export const calibrationStarters = {
  traceback: 'route_label = "ROUTE VERIFIED"\nprint(route_lable)',
  indentation: 'route_open = True\nif route_open:\nprint("CALIBRATION READY")',
};
export const calibrationTracebacks = {
  traceback: 'Traceback (most recent call last):\n  File "calibration_traceback.py", line 2\n    print(route_lable)\nNameError: name \'route_lable\' is not defined',
  indentation: '  File "calibration_indentation.py", line 3\n    print("CALIBRATION READY")\n    ^\nIndentationError: expected an indented block',
};
export const calibrationRetrieval = [
  ["R_ERROR_TYPE", "Which traceback line normally names the error type?", [["last", "The final line."], ["first", "The first line."], ["random", "A random line."]], "last", "traceback-is-punishment"],
  ["R_LINE", "What does File … line 2 provide?", [["location", "The source location to inspect first."], ["score", "A score."], ["cause", "A guaranteed cause."]], "location", "line-number-is-random"],
  ["R_ONE_CHANGE", "Why change one suspected cause before rerunning?", [["test", "It tests one explanation without adding noise."], ["slow", "Python permits only one edit."], ["route", "It keeps the route from closing."]], "test", "random-edits-are-debugging"],
  ["R_ROUTE", "Does a failed calibration run close the marked route?", [["open", "No. The completed route stays open."], ["closed", "Yes. It must be rebuilt."], ["sometimes", "Only after two misses."]], "open", "code-error-closes-route"],
];

const allowedTags = new Set(exerciseAsset.misconception_tags);
const formConfig = exerciseAsset.forms;

export function evaluateCalibrationDiagnosis(diagnosis, form) {
  const expected = formConfig[form].diagnosis_required_before_edit;
  return {
    errorType: diagnosis.errorType === expected.error_type,
    lineNumber: Number(diagnosis.lineNumber) === expected.line_number,
    namedToken: diagnosis.namedToken === expected.named_token,
  };
}

function failedResult(form) {
  const checks = Object.fromEntries(calibrationCheckCodes.map((code) => [code, false]));
  return { form, checks, score: 0, passed: false, failedCodes: [...calibrationCheckCodes], outputs: [], misconceptionTags: [form === "indentation" ? "indentation-is-decoration" : "random-edits-are-debugging"] };
}

export function evaluateCalibrationSource(source, form = "traceback") {
  const safeForm = form === "indentation" ? "indentation" : "traceback";
  const lines = source.replace(/\r/g, "").split("\n").filter((line) => line.trim());
  let checks;
  let outputs = [];
  if (safeForm === "traceback") {
    const assignment = lines[0]?.match(/^route_label\s*=\s*(["'])ROUTE VERIFIED\1$/);
    const print = lines[1]?.match(/^print\s*\(\s*route_label\s*\)$/);
    checks = {
      E_PARSE: lines.every((line) => /^(route_label\s*=|print\s*\()/.test(line.trim())),
      E_SAFE_SHAPE: Boolean(assignment && print),
      E_STATEMENT_COUNT: lines.length === 2,
      E_VARIABLE_SET: Boolean(assignment),
      E_VALUE: Boolean(assignment),
      E_REPAIR_STRUCTURE: Boolean(print),
      E_OUTPUT: Boolean(assignment && print),
      E_REPAIR_BOUNDARY: !source.includes("route_lable") && Boolean(print),
    };
    if (checks.E_OUTPUT) outputs = ["ROUTE VERIFIED"];
  } else {
    const assignment = lines[0]?.trim() === "route_open = True";
    const ifLine = lines[1]?.trim() === "if route_open:";
    const print = /^ {4}print\s*\(\s*(["'])CALIBRATION READY\1\s*\)$/.test(lines[2] || "");
    checks = {
      E_PARSE: Boolean(assignment && ifLine && print),
      E_SAFE_SHAPE: Boolean(assignment && ifLine && print),
      E_STATEMENT_COUNT: lines.length === 3,
      E_VARIABLE_SET: assignment,
      E_VALUE: assignment,
      E_REPAIR_STRUCTURE: Boolean(ifLine && print),
      E_OUTPUT: Boolean(assignment && ifLine && print),
      E_REPAIR_BOUNDARY: print,
    };
    if (checks.E_OUTPUT) outputs = ["CALIBRATION READY"];
  }
  if (!checks) return failedResult(safeForm);
  const failedCodes = calibrationCheckCodes.filter((code) => !checks[code]);
  const tags = [];
  if (failedCodes.includes("E_REPAIR_STRUCTURE")) tags.push(safeForm === "indentation" ? "indentation-is-decoration" : "random-edits-are-debugging");
  return { form: safeForm, checks, score: 8 - failedCodes.length, passed: failedCodes.length === 0, failedCodes, outputs, misconceptionTags: tags };
}

export function evaluateCalibrationRetrieval(answers) {
  return Object.fromEntries(calibrationRetrieval.map(([id,,, answer]) => [id, answers[id] === answer]));
}

export function calibrationRemediation(result, level) {
  const code = result?.failedCodes?.[0] || "E_PARSE";
  if (level <= 1) return `Locate — ${exerciseAsset.remediation_routes[code]}`;
  if (level === 2) return result.form === "traceback" ? "Compare route_lable with route_label character by character." : "Structure — indent the print line beneath the line ending in a colon.";
  return "Worked repair — change only the named boundary, then rerun. The route remains OPEN.";
}

export function sanitizeCalibrationMastery(value) {
  if (!value || typeof value !== "object" || value.exerciseId !== exerciseAsset.exercise_id) return null;
  const diagnosisCorrectness = {};
  const checkResults = {};
  for (const form of ["traceback", "indentation"]) {
    if (value.diagnosisCorrectness?.[form]) diagnosisCorrectness[form] = Object.fromEntries(["errorType", "lineNumber", "namedToken"].filter((key) => typeof value.diagnosisCorrectness[form][key] === "boolean").map((key) => [key, value.diagnosisCorrectness[form][key]]));
    if (value.checkResults?.[form]) checkResults[form] = Object.fromEntries(calibrationCheckCodes.filter((code) => typeof value.checkResults[form][code] === "boolean").map((code) => [code, value.checkResults[form][code]]));
  }
  if (value.checkResults?.retrieval) checkResults.retrieval = Object.fromEntries(calibrationRetrieval.filter(([id]) => typeof value.checkResults.retrieval[id] === "boolean").map(([id]) => [id, value.checkResults.retrieval[id]]));
  return {
    exerciseId: exerciseAsset.exercise_id, lessonId: exerciseAsset.lesson_id, activityId: exerciseAsset.activity_id, assessmentId: exerciseAsset.assessment_id,
    skillIds: [...exerciseAsset.skill_ids], formId: ["traceback", "indentation", "retrieval"].includes(value.formId) ? value.formId : "traceback",
    diagnosisCorrectness, checkResults,
    attemptCount: Math.min(99, Math.max(0, Number.isInteger(value.attemptCount) ? value.attemptCount : 0)),
    hintLevel: Math.min(3, Math.max(0, Number.isInteger(value.hintLevel) ? value.hintLevel : 0)),
    confidence: ["low", "medium", "high"].includes(value.confidence) ? value.confidence : null,
    misconceptionTags: Array.isArray(value.misconceptionTags) ? [...new Set(value.misconceptionTags.filter((tag) => allowedTags.has(tag)))] : [],
    masteryStatus: ["in_progress", "remediation_required", "mastered"].includes(value.masteryStatus) ? value.masteryStatus : "in_progress",
  };
}

export function updateCalibrationMastery(previous, changes = {}) {
  const safe = sanitizeCalibrationMastery(previous) || sanitizeCalibrationMastery({ exerciseId: exerciseAsset.exercise_id });
  return sanitizeCalibrationMastery({ ...safe,
    formId: changes.formId || safe.formId,
    diagnosisCorrectness: changes.diagnosisCorrectness ? { ...safe.diagnosisCorrectness, [changes.formId]: changes.diagnosisCorrectness } : safe.diagnosisCorrectness,
    checkResults: changes.checkResults ? { ...safe.checkResults, [changes.formId]: changes.checkResults } : safe.checkResults,
    attemptCount: safe.attemptCount + (changes.incrementAttempt ? 1 : 0), hintLevel: Math.max(safe.hintLevel, changes.hintLevel || 0),
    confidence: changes.confidence || safe.confidence, misconceptionTags: changes.clearMisconceptionTags ? [] : [...safe.misconceptionTags, ...(changes.misconceptionTags || [])], masteryStatus: changes.masteryStatus || safe.masteryStatus,
  });
}
