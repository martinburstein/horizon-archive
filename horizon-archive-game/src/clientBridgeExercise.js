import exerciseAsset from "../../curriculum/lessons/L-03-03/exercise.json" with { type: "json" };
import retrievalBank from "../../curriculum/lessons/L-03-03/retrieval_bank.json" with { type: "json" };
import retrievalKey from "../../curriculum/lessons/L-03-03/reference_retrieval_answers.json" with { type: "json" };

export const clientBridgeExercise = exerciseAsset;
export const clientBridgeChecks = ["loads", "required_imports", "function_signature", "file_json_flow", "environment_lookup", "missing_secret_rejected", "sample_request", "hidden_config_reuse", "offline_no_network", "secret_redacted"];
export const clientBridgeRetrieval = retrievalBank;
export const clientBridgeExplanationDimensions = ["module", "file", "secret", "request", "response"];
export const clientBridgeStarters = {
  primary: `import json
import os
from pathlib import Path
from request_tools import safe_summary

def prepare_request(config_path, getenv=os.getenv):
    # TODO: parse the passed JSON file, look up its named secret, reject missing.
    # Return an offline POST request dictionary. Never send it or print the secret.
    return {}

if __name__ == "__main__":
    request = prepare_request(Path(__file__).with_name("primary_config.json"))
    print(json.dumps(safe_summary(request), sort_keys=True))`,
  transfer: `import json
import os
from pathlib import Path
from request_tools import safe_summary

def assemble_call(settings_path, getenv=os.getenv):
    # TODO: reuse the safe offline pattern for whichever settings path is passed.
    return {}

if __name__ == "__main__":
    request = assemble_call(Path(__file__).with_name("transfer_config.json"))
    print(json.dumps(safe_summary(request), sort_keys=True))`,
};

const configs = {
  primary: { signature: "def prepare_request(config_path, getenv=os.getenv):", path: "config_path" },
  transfer: { signature: "def assemble_call(settings_path, getenv=os.getenv):", path: "settings_path" },
};
const tags = { loads: "hardcoded-config", required_imports: "module-equals-package", function_signature: "hardcoded-config", file_json_flow: "path-is-file-content", environment_lookup: "secret-in-source", missing_secret_rejected: "secret-in-source", sample_request: "body-is-header", hidden_config_reuse: "hardcoded-config", offline_no_network: "request-is-response", secret_redacted: "secret-in-output" };
const validTags = new Set(exerciseAsset.misconception_tags);
function has(source, text) { return source.includes(text); }

export function evaluateClientBridgeSource(source, form = "primary") {
  const cfg = configs[form];
  const forbiddenNetwork = /(?:import|from)\s+(?:requests|urllib|httpx|aiohttp)|\.(?:get|post|request|send)\s*\(/.test(source);
  const imports = ["import json", "import os", "from pathlib import Path", "from request_tools import safe_summary"].every((line) => has(source, line));
  const signature = has(source, cfg.signature);
  const fileJson = has(source, `json.loads(Path(${cfg.path}).read_text(encoding="utf-8"))`);
  const env = /secret\s*=\s*getenv\(config\["secret_env"\]\)/.test(source);
  const missing = /if\s+not\s+secret\s*:/.test(source) && /raise\s+ValueError/.test(source);
  const request = has(source, '"method":"POST"') && has(source, '"url":config["endpoint"]') && has(source, '"Authorization":f"Bearer {secret}"') && has(source, '"Content-Type":"application/json"') && has(source, '"json":config["body"]');
  const redacted = has(source, "safe_summary(request)") && !/print\s*\(\s*(?:secret|request\[.*Authorization)/.test(source);
  const safe = typeof source === "string" && !/(?:eval|exec|__import__|subprocess|socket)/.test(source);
  const checks = { loads: safe && !/\bTODO\b/.test(source) && signature, required_imports: imports, function_signature: signature, file_json_flow: fileJson, environment_lookup: env, missing_secret_rejected: missing, sample_request: request, hidden_config_reuse: fileJson && env && request && !/(?:primary_config|transfer_config)\.json/.test(source.slice(source.indexOf(cfg.signature), source.indexOf("if __name__"))), offline_no_network: !forbiddenNetwork, secret_redacted: redacted };
  const score = clientBridgeChecks.filter((key) => checks[key]).length; const failedChecks = clientBridgeChecks.filter((key) => !checks[key]);
  return { form, checks, score, passed: score === 10, failedChecks, misconceptionTags: [...new Set(failedChecks.map((key) => tags[key]))] };
}

export function getClientBridgeRetrievalOptions(id) {
  const distractors = { R01: "install_every_module_with_pip", R02: "import_before_installing", R03: "paste_secret_into_source", R04: "request_and_response_are_the_same_object" };
  return [retrievalKey[id], distractors[id]];
}
export function evaluateClientBridgeRetrieval(answers) { const correctness = Object.fromEntries(retrievalBank.map((item) => [item.id, answers[item.id] === retrievalKey[item.id]])); return { correctness, score: Object.values(correctness).filter(Boolean).length, passed: Object.values(correctness).every(Boolean) }; }
function normalize(value) { return String(value ?? "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, ""); }
export function evaluateClientBridgeExplanation(response) {
  const expected = { module: "import_module_from_active_environment", file: "read_file_text_then_parse_json_config", secret: "lookup_named_environment_secret_reject_missing", request: "build_offline_method_url_headers_body_request", response: "response_arrives_later_with_status_and_body" };
  const correctness = Object.fromEntries(clientBridgeExplanationDimensions.map((key) => [key, normalize(response[key]) === expected[key]])); return { correctness, score: Object.values(correctness).filter(Boolean).length, passed: Object.values(correctness).every(Boolean) };
}
export function clientBridgeRemediation(result, level) { const failed = result.failedChecks?.[0] || "bridge"; if (level <= 1) return `${failed}: identify the failed layer—module, file, secret, request, response, or safe output.`; if (level === 2) return `${failed}: trace the path to parsed config and keep the secret-variable name separate from its injected value.`; return `${failed}: label method, URL, headers, body, later response, and retry the hidden configuration without networking.`; }
export function getClientBridgeFeedback(result, level) {
  if (!result) return { systemScore: "Static validation only; no code or network is executed.", teacherRemediation: null };
  return { systemScore: `${result.score}/10 · ${result.passed ? "FORM PASS · all ten offline checks confirmed." : "FORM NOT YET COMPLETE."}`, teacherRemediation: result.passed ? null : clientBridgeRemediation(result, level) };
}
export function getClientBridgeRetrievalFeedback(result) {
  if (!result) return { systemScore: "Awaiting all four retrieval distinctions.", teacherRemediation: null };
  return { systemScore: `${result.score}/4 · ${result.passed ? "RETRIEVAL PASS" : "RETRIEVAL NOT YET COMPLETE."}`, teacherRemediation: result.passed ? null : "Correct every module, installation, secret, and request/response distinction before advancing." };
}
export function getClientBridgeExplanationFeedback(result) {
  if (!result) return { systemScore: "Awaiting the learner's five-layer explanation.", teacherRemediation: null };
  return { systemScore: `${result.score}/5 · ${result.passed ? "EXPLANATION PASS · all five layers confirmed." : "EXPLANATION NOT YET COMPLETE."}`, teacherRemediation: result.passed ? null : "Keep imported code, parsed file, injected secret, offline request plan, and later response separate." };
}
function complete(c, form) { return clientBridgeChecks.every((key) => c[form]?.[key] === true); }
export function sanitizeClientBridgeEvidence(value) {
  if (!value || typeof value !== "object" || value.exerciseId !== exerciseAsset.exercise_id) return null; const checkCorrectness = {};
  for (const form of ["primary", "transfer", "retrieval", "explanation"]) { const keys = form === "retrieval" ? retrievalBank.map((item) => item.id) : form === "explanation" ? clientBridgeExplanationDimensions : clientBridgeChecks; if (value.checkCorrectness?.[form]) checkCorrectness[form] = Object.fromEntries(keys.filter((key) => typeof value.checkCorrectness[form][key] === "boolean").map((key) => [key, value.checkCorrectness[form][key]])); }
  const strict = complete(checkCorrectness, "primary") && complete(checkCorrectness, "transfer") && retrievalBank.every((item) => checkCorrectness.retrieval?.[item.id] === true) && clientBridgeExplanationDimensions.every((key) => checkCorrectness.explanation?.[key] === true);
  let masteryStatus = ["in_progress", "remediation_required", "primary_complete", "transfer_complete", "retrieval_complete", "mastered"].includes(value.masteryStatus) ? value.masteryStatus : "in_progress"; if (masteryStatus === "mastered" && !strict) masteryStatus = retrievalBank.every((item) => checkCorrectness.retrieval?.[item.id] === true) ? "retrieval_complete" : complete(checkCorrectness, "transfer") ? "transfer_complete" : complete(checkCorrectness, "primary") ? "primary_complete" : "in_progress";
  return { exerciseId: exerciseAsset.exercise_id, lessonId: exerciseAsset.lesson_id, activityId: exerciseAsset.activity_id, assessmentId: exerciseAsset.assessment_id, objectiveIds: [], skillIds: [...exerciseAsset.skill_ids], form: ["primary", "transfer", "retrieval", "explanation"].includes(value.form) ? value.form : "primary", checkCorrectness, attemptCount: Math.min(99, Math.max(0, Number.isInteger(value.attemptCount) ? value.attemptCount : 0)), hintLevel: Math.min(3, Math.max(0, Number.isInteger(value.hintLevel) ? value.hintLevel : 0)), confidence: ["low", "medium", "high"].includes(value.confidence) ? value.confidence : null, misconceptionTags: Array.isArray(value.misconceptionTags) ? [...new Set(value.misconceptionTags.filter((tag) => validTags.has(tag)))] : [], masteryStatus };
}
export function updateClientBridgeEvidence(previous, changes = {}) { const safe = sanitizeClientBridgeEvidence(previous) || sanitizeClientBridgeEvidence({ exerciseId: exerciseAsset.exercise_id }); const checkCorrectness = { ...safe.checkCorrectness }; if (changes.form && changes.correctness) checkCorrectness[changes.form] = changes.correctness; return sanitizeClientBridgeEvidence({ ...safe, form: changes.form || safe.form, checkCorrectness, attemptCount: safe.attemptCount + (changes.incrementAttempt ? 1 : 0), hintLevel: Math.max(safe.hintLevel, changes.hintLevel || 0), confidence: changes.confidence || safe.confidence, misconceptionTags: changes.clearMisconceptionTags ? [] : [...safe.misconceptionTags, ...(changes.misconceptionTags || [])], masteryStatus: changes.masteryStatus || safe.masteryStatus }); }
