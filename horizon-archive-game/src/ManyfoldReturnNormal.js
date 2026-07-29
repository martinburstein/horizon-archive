import contract from "../../curriculum/readiness/RP-005/contract.json" with { type: "json" };
import {
  THREE_CURRENT_REACH_SAVE_KEY,
  sanitizeThreeCurrentReachSave,
} from "./ThreeCurrentReachNormal.js";

export const MANYFOLD_RETURN_SHELL_VERSION = "SS-RP005-MANYFOLD-RETURN-v1";
export const MANYFOLD_RETURN_CONTROLLER_VERSION = "rp005.manyfold-return-controller.v1";
export const MANYFOLD_RETURN_RECORD_VERSION = "rp005.manyfold-return-save.v1";
export const MANYFOLD_RETURN_SAVE_KEY = "horizon-archive-rp005-manyfold-return-save-v1";

export const manyfoldReturnActions = Object.freeze({
  route: "PILOT // FOLLOW EXPEDITION-MARKED ADJACENT SURVEY TO MANYFOLD RETURN",
  orient: "ORIENT TO MANYFOLD RETURN",
  inspect: "INSPECT EXPOSED DISTRIBUTION",
  recurrence: "OBSERVE RECURRING EXPOSED TRACE RANGE",
  divergence: "OBSERVE BOUNDED DIVERGENT TRACE",
  sealed: "OBSERVE SEALED BRANCH BOUNDARY",
  stewardship: "OBSERVE LAYERED STEWARDSHIP",
  pythonPrimary: "SUBMIT PYTHON PRIMARY",
  pythonTrace: "SUBMIT PYTHON TRACE",
  pythonTransfer: "SUBMIT PYTHON TRANSFER",
  textPrimary: "SUBMIT TEXT PRIMARY",
  textRetrieval: "SUBMIT TEXT RETRIEVAL",
  textTransfer: "SUBMIT TEXT TRANSFER",
  requestedOutput: "SUBMIT REQUESTED-OUTPUT BOUNDARY",
  truthBoundary: "SUBMIT TRUTH BOUNDARY",
  retry: "RETURN TO FRESH BLANK RETRY",
  review: "REVIEW PROVENANCE",
  save: "SAVE EXPEDITION NOTE",
  reviewAgain: "REVIEW PROVENANCE AGAIN",
  continuation: "RECORD SERVICED CONTINUATION",
  intervalWorks: "PILOT // FOLLOW EXPEDITION-MARKED ADJACENT SURVEY TO INTERVAL WORKS",
  returnThreeCurrent: "RETURN TO THREE-CURRENT REACH",
  returnThreshold: "RETURN TO CITY THRESHOLD",
});

export const manyfoldReturnModalities = Object.freeze([
  "pointer", "touch", "keyboard_enter", "keyboard_space",
  "switch", "speech", "screen_reader",
]);

export const manyfoldReturnObservationIds = Object.freeze([
  "recurring_exposed_trace_range",
  "bounded_divergent_trace",
  "sealed_branch_unavailable",
  "layered_stewardship_visible",
]);

export const manyfoldReturnWorldPlateIds = Object.freeze({
  predecessor: "sc05-three-current-panorama-runtime-master-v1.webp",
  panorama: "SC-06-PANORAMA-MASTER",
  detail: "SC-06-DETAIL-MASTER",
});

const pythonTraceAnswers = Object.freeze({
  functionName: "build_summary",
  parameters: "replica_summary_and_sealed_reading",
  body: "construct_the_four_key_dictionary_from_parameters",
  returnValue: "return_the_nonjudgmental_summary_dictionary",
  callSite: "call_once_with_the_supplied_inputs",
  noneBoundary: "sealed_and_judgment_remain_none",
});
const explanationAnswers = Object.freeze({
  requestedOutput: "the_requested_output_selects_the_text_analysis_technique",
  truthBoundary: "summarization_does_not_establish_truth_or_quality",
});
const aiDimensions = Object.freeze([...contract.ai901_contract.dimensions]);
const pythonChecks = Object.freeze([...contract.python_contract.checks]);
const traceDimensions = Object.freeze(Object.keys(pythonTraceAnswers));
const intentKeys = Object.freeze([
  "mode", "shellVersion", "controllerVersion", "packetId", "activeGroupId",
  "expectedOwner", "allowlistedActionId", "activationKind", "opaqueFreshEventToken",
]);
const topKeys = Object.freeze([
  "version", "packetId", "mappingId", "checkpoint", "continuation",
  "cityStateDelta", "externalStateDelta", "successor", "note", "evidence",
]);
const noteKeys = Object.freeze([
  "observations", "recurrence", "divergence", "unavailable", "stewardship",
  "replicas", "truth", "purpose", "destination",
]);
const evidenceKeys = Object.freeze([
  "packet_id", "mapping_id", "form", "skill_or_objective_id",
  "dimension_correctness", "attempt_count", "hint_level", "confidence",
  "misconception_tags", "mastery_status",
]);
const forbiddenPrivateKey = /learner_source|raw_case_answers|free_form_reasoning|private_notes?|identity_content|credentials?|endpoints?|payloads?|responses?|source_content|exam_item_text|external_action_requests?|route_token|event_token|focus_history|pointer_history|diagnostics?|tour_state/i;
const forbiddenPython = /\b(?:import|open|print|eval|exec|system|remove|unlink|rmdir|requests|urlopen|fetch|sorted|max|min|mean)\b/i;

const actionObservation = Object.freeze({
  [manyfoldReturnActions.recurrence]: manyfoldReturnObservationIds[0],
  [manyfoldReturnActions.divergence]: manyfoldReturnObservationIds[1],
  [manyfoldReturnActions.sealed]: manyfoldReturnObservationIds[2],
  [manyfoldReturnActions.stewardship]: manyfoldReturnObservationIds[3],
});
const observationFocus = Object.freeze({
  [manyfoldReturnObservationIds[0]]: "observation-recurrence-action",
  [manyfoldReturnObservationIds[1]]: "observation-divergence-action",
  [manyfoldReturnObservationIds[2]]: "observation-sealed-action",
  [manyfoldReturnObservationIds[3]]: "observation-stewardship-action",
});

const groups = Object.freeze({
  mf00_arrive: ["MF-00 ARRIVE", "SCENE // MANYFOLD RETURN", "mf00-arrive-heading", [manyfoldReturnActions.orient]],
  mf00_oriented: ["MF-00 ORIENTED", "PILOT // EXPEDITION OBSERVATION", "mf00-oriented-heading", [manyfoldReturnActions.inspect]],
  mf10_observations: ["MF-10 OBSERVE", "PILOT // EXPEDITION OBSERVATION", "mf10-observations-heading", Object.keys(actionObservation)],
  mf20_python_primary: ["MF-20 PYTHON PRIMARY", "BUILDER WORK // SANITIZED PRECOMPUTED REPLICAS", "mf20-python-primary-heading", [manyfoldReturnActions.pythonPrimary]],
  mf20_python_trace: ["MF-20 PYTHON TRACE", "BUILDER WORK // SANITIZED PRECOMPUTED REPLICAS", "mf20-python-trace-heading", [manyfoldReturnActions.pythonTrace]],
  mf20_python_transfer: ["MF-20 PYTHON TRANSFER", "BUILDER WORK // SANITIZED PRECOMPUTED REPLICAS", "mf20-python-transfer-heading", [manyfoldReturnActions.pythonTransfer]],
  mf20_text_primary: ["MF-20 TEXT PRIMARY", "TEACHER / COURSE // TEXT TECHNIQUE PRACTICE", "mf20-text-primary-heading", [manyfoldReturnActions.textPrimary]],
  mf20_text_retrieval: ["MF-20 TEXT RETRIEVAL", "TEACHER / COURSE // TEXT TECHNIQUE PRACTICE", "mf20-text-retrieval-heading", [manyfoldReturnActions.textRetrieval]],
  mf20_text_transfer: ["MF-20 TEXT TRANSFER", "TEACHER / COURSE // TEXT TECHNIQUE PRACTICE", "mf20-text-transfer-heading", [manyfoldReturnActions.textTransfer]],
  mf20_requested_output: ["MF-20 REQUESTED OUTPUT", "TEACHER / COURSE // TEXT TECHNIQUE PRACTICE", "mf20-requested-output-heading", [manyfoldReturnActions.requestedOutput]],
  mf20_truth_boundary: ["MF-20 TRUTH BOUNDARY", "TEACHER / COURSE // TEXT TECHNIQUE PRACTICE", "mf20-truth-boundary-heading", [manyfoldReturnActions.truthBoundary]],
  mf20_repair: ["MF-20 ANSWER-FREE REPAIR", "TEACHER / COURSE // TEXT TECHNIQUE PRACTICE", "mf20-repair-heading", [manyfoldReturnActions.retry]],
  mf20_review: ["MF-20 BOUNDED REVIEW", "PILOT // BOUNDED REVIEW", "mf20-review-heading", [manyfoldReturnActions.review]],
  mf20_provenance: ["MF-20 PROVENANCE", "PILOT // BOUNDED REVIEW", "mf20-provenance-heading", [manyfoldReturnActions.save]],
  mf20_transaction: ["MF-20 LOCAL TRANSACTION", "SYSTEM // LOCAL EXPEDITION NOTE", "mf20-transaction-heading", []],
  mf20_save_recovery: ["MF-20 SAVE RECOVERY", "SYSTEM // LOCAL EXPEDITION NOTE", "mf20-save-recovery-heading", [manyfoldReturnActions.reviewAgain]],
  mf20_rollback_unverified: ["MF-20 ROLLBACK UNVERIFIED", "SYSTEM // LOCAL EXPEDITION NOTE", "mf20-rollback-unverified-heading", []],
  mf30_restore: ["MF-30 VERIFIED RESTORE", "SYSTEM // RESTORED EXPEDITION NOTE", "mf30-restore-heading", [manyfoldReturnActions.continuation, manyfoldReturnActions.intervalWorks]],
  mf30_restore_recorded: ["MF-30 CONTINUATION NOTED", "SYSTEM // RESTORED EXPEDITION NOTE", "mf30-restore-recorded-heading", [manyfoldReturnActions.intervalWorks]],
});

const formGroups = Object.freeze([
  "mf20_python_primary", "mf20_python_trace", "mf20_python_transfer",
  "mf20_text_primary", "mf20_text_retrieval", "mf20_text_transfer",
  "mf20_requested_output", "mf20_truth_boundary",
]);

function clone(value) {
  return value == null ? value : JSON.parse(JSON.stringify(value));
}
function exactKeys(value, expected) {
  return value && typeof value === "object" && !Array.isArray(value)
    && Object.keys(value).length === expected.length
    && expected.every((key, index) => Object.keys(value)[index] === key);
}
function tokenOkay(value) {
  return typeof value === "string" && value.length >= 8 && value.length <= 160
    && !/\s|private|answer|credential/i.test(value);
}
function parseJsonAssignment(source, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = String(source).match(new RegExp(`^\\s*${escaped}\\s*=\\s*(\\{[^\\n]*\\})\\s*$`, "m"));
  if (!match) return null;
  try { return JSON.parse(match[1]); } catch { return null; }
}

export function evaluateManyfoldReturnPython(form, learnerSource) {
  const specification = contract.python_contract.forms[form];
  if (!specification) throw new TypeError("form must be primary or transfer");
  const source = String(learnerSource ?? "").replace(/\r/g, "");
  const replica = parseJsonAssignment(source, "replica_summary");
  const exactInputs = JSON.stringify(replica) === JSON.stringify(specification.replica_summary)
    && /^\s*sealed_reading\s*=\s*None\s*$/m.test(source);
  const named = /def\s+build_summary\s*\(/.test(source)
    && (source.match(/def\s+build_summary\s*\(/g) ?? []).length === 1;
  const parameters = /def\s+build_summary\s*\(\s*replica_summary\s*,\s*sealed_reading\s*\)\s*:/.test(source);
  const returned = /return\s*\{\s*["']recurring_count["']\s*:\s*replica_summary\s*\[\s*["']recurring_count["']\s*\]\s*,\s*["']divergent_count["']\s*:\s*replica_summary\s*\[\s*["']divergent_count["']\s*\]\s*,\s*["']sealed["']\s*:\s*sealed_reading\s*,\s*["']judgment["']\s*:\s*None\s*,?\s*\}/s.test(source);
  const called = /^\s*summary\s*=\s*build_summary\s*\(\s*replica_summary\s*,\s*sealed_reading\s*\)\s*$/m.test(source)
    && (source.match(/build_summary\s*\(/g) ?? []).length === 2;
  const sealedAssignments = source.match(/^\s*sealed_reading\s*=.*$/gm) ?? [];
  const checks = {
    summary_is_dictionary: exactInputs && returned && called,
    exact_keys_and_values: exactInputs && returned && called,
    function_named_build_summary: named,
    exact_two_parameters: parameters,
    return_uses_parameters_without_inference: returned,
    function_called_once_with_supplied_inputs: called,
    sealed_and_judgment_remain_none: returned,
    inputs_unchanged_and_no_forbidden_operations: exactInputs
      && !/replica_summary\s*\[[^\]]+\]\s*=/.test(source)
      && sealedAssignments.length === 1
      && !forbiddenPython.test(source),
  };
  const failed = pythonChecks.filter((id) => checks[id] !== true);
  return Object.freeze({ correctness: Object.freeze(checks), failed: Object.freeze(failed), passed: failed.length === 0 });
}
export function evaluateManyfoldReturnPythonTrace(answers) {
  const correctness = Object.fromEntries(Object.entries(pythonTraceAnswers)
    .map(([id, expected]) => [id, answers?.[id] === expected]));
  return Object.freeze({ correctness: Object.freeze(correctness), failed: Object.keys(correctness).filter((id) => !correctness[id]), passed: Object.values(correctness).every(Boolean) });
}
export function evaluateManyfoldReturnText(form, answers) {
  const cases = contract.ai901_contract.forms[form];
  if (!cases) throw new TypeError("form must be primary, retrieval, or transfer");
  const correctness = {};
  for (const item of cases) for (const dimension of aiDimensions) {
    correctness[`${item.id}.${dimension}`] = answers?.[item.id]?.[dimension] === item[dimension];
  }
  return Object.freeze({ correctness: Object.freeze(correctness), failed: Object.keys(correctness).filter((id) => !correctness[id]), passed: Object.values(correctness).every(Boolean) });
}

function evidenceRecord(skill, form, correctness, attempts = 1) {
  return Object.freeze({
    packet_id: "RP-005",
    mapping_id: "RP005-A3-MANYFOLD-RETURN",
    form,
    skill_or_objective_id: skill,
    dimension_correctness: Object.freeze({ ...correctness }),
    attempt_count: Math.max(1, Math.min(99, attempts)),
    hint_level: 0,
    confidence: null,
    misconception_tags: Object.freeze([]),
    mastery_status: "mastered",
  });
}
function expectedEvidence() {
  return [
    ["PY-012", "primary", pythonChecks],
    ["PY-012", "trace", traceDimensions],
    ["PY-012", "transfer", pythonChecks],
    ...["primary", "retrieval", "transfer"].map((form) => [
      "RP005-TEXT-01", form,
      contract.ai901_contract.forms[form].flatMap((item) => aiDimensions.map((dimension) => `${item.id}.${dimension}`)),
    ]),
    ["RP005-TEXT-01", "requested_output_explanation", ["requested_output"]],
    ["RP005-TEXT-01", "truth_boundary_explanation", ["truth_boundary"]],
  ];
}
function sanitizeEvidence(value) {
  if (!Array.isArray(value)) return [];
  const expected = expectedEvidence();
  const safe = [];
  for (let i = 0; i < Math.min(value.length, expected.length); i += 1) {
    const [skill, form, dimensions] = expected[i];
    const record = value[i];
    if (!exactKeys(record, evidenceKeys)
      || record.packet_id !== "RP-005"
      || record.mapping_id !== "RP005-A3-MANYFOLD-RETURN"
      || record.skill_or_objective_id !== skill || record.form !== form
      || record.mastery_status !== "mastered"
      || !exactKeys(record.dimension_correctness, dimensions)
      || !dimensions.every((id) => record.dimension_correctness[id] === true)
      || !Number.isInteger(record.attempt_count) || record.attempt_count < 1 || record.attempt_count > 99
      || !Number.isInteger(record.hint_level) || record.hint_level < 0 || record.hint_level > 3
      || ![null, "low", "medium", "high"].includes(record.confidence)
      || !Array.isArray(record.misconception_tags)) break;
    safe.push(evidenceRecord(skill, form, record.dimension_correctness, record.attempt_count));
  }
  return safe;
}

export function sanitizeManyfoldReturnSave(value) {
  if (!exactKeys(value, topKeys) || forbiddenPrivateKey.test(JSON.stringify(value ?? {}))
    || value.version !== MANYFOLD_RETURN_RECORD_VERSION
    || value.packetId !== "RP-005"
    || value.mappingId !== "RP005-A3-MANYFOLD-RETURN"
    || value.checkpoint !== "manyfold_return_complete"
    || value.continuation !== "continuation"
    || value.cityStateDelta !== null || value.externalStateDelta !== null || value.successor !== null
    || !exactKeys(value.note, noteKeys)
    || JSON.stringify(value.note.observations) !== JSON.stringify(manyfoldReturnObservationIds)
    || value.note.recurrence !== "exposed_recurring_range_observed"
    || value.note.divergence !== "one_bounded_divergence_observed"
    || value.note.unavailable !== "sealed_branch_unavailable"
    || value.note.stewardship !== "layered_stewardship_observed"
    || value.note.replicas !== "sanitized_precomputed_only"
    || value.note.truth !== null || value.note.purpose !== null || value.note.destination !== null) return null;
  const evidence = sanitizeEvidence(value.evidence);
  if (evidence.length !== 8 || value.evidence.length !== 8) return null;
  return Object.freeze({
    version: MANYFOLD_RETURN_RECORD_VERSION,
    packetId: "RP-005",
    mappingId: "RP005-A3-MANYFOLD-RETURN",
    checkpoint: "manyfold_return_complete",
    continuation: "continuation",
    cityStateDelta: null,
    externalStateDelta: null,
    successor: null,
    note: Object.freeze({
      observations: Object.freeze([...manyfoldReturnObservationIds]),
      recurrence: "exposed_recurring_range_observed",
      divergence: "one_bounded_divergence_observed",
      unavailable: "sealed_branch_unavailable",
      stewardship: "layered_stewardship_observed",
      replicas: "sanitized_precomputed_only",
      truth: null, purpose: null, destination: null,
    }),
    evidence: Object.freeze(evidence),
  });
}

export function createManyfoldReturnStorageAdapter(storage, predecessor = {}) {
  const readRaw = (key) => {
    try { return storage?.getItem(key) ?? null; } catch { return null; }
  };
  const strictRead = () => {
    const raw = readRaw(MANYFOLD_RETURN_SAVE_KEY);
    if (raw === null) return null;
    try { return sanitizeManyfoldReturnSave(JSON.parse(raw)); } catch { return null; }
  };
  return Object.freeze({
    read: strictRead,
    commit(candidate) {
      const priorRaw = readRaw(MANYFOLD_RETURN_SAVE_KEY);
      const td004Before = readRaw(THREE_CURRENT_REACH_SAVE_KEY);
      if (td004Before !== predecessor.bytes || !sanitizeThreeCurrentReachSave(predecessor.record)) {
        return Object.freeze({ status: "failed", reason: "predecessor_changed", rollbackVerified: true, predecessorBytesPreserved: false });
      }
      if (priorRaw !== null) {
        try {
          if (!sanitizeManyfoldReturnSave(JSON.parse(priorRaw))) {
            return Object.freeze({ status: "failed", reason: "malformed_prior_record", rollbackVerified: true, predecessorBytesPreserved: true });
          }
        } catch {
          return Object.freeze({ status: "failed", reason: "malformed_prior_record", rollbackVerified: true, predecessorBytesPreserved: true });
        }
      }
      const safe = sanitizeManyfoldReturnSave(candidate);
      if (!safe) return Object.freeze({ status: "failed", reason: "candidate_rejected", rollbackVerified: true, predecessorBytesPreserved: true });
      const serialized = JSON.stringify(safe);
      try {
        storage?.setItem(MANYFOLD_RETURN_SAVE_KEY, serialized);
        const raw = readRaw(MANYFOLD_RETURN_SAVE_KEY);
        const object = strictRead();
        if (raw !== serialized || JSON.stringify(object) !== serialized
          || readRaw(THREE_CURRENT_REACH_SAVE_KEY) !== td004Before) throw new Error("read_back_mismatch");
        return Object.freeze({ status: "committed", value: object, raw, rollbackVerified: true, predecessorBytesPreserved: true });
      } catch (error) {
        try {
          if (priorRaw === null) storage?.removeItem(MANYFOLD_RETURN_SAVE_KEY);
          else storage?.setItem(MANYFOLD_RETURN_SAVE_KEY, priorRaw);
        } catch {
          return Object.freeze({ status: "failed", reason: "rollback_unverified", rollbackVerified: false, predecessorBytesPreserved: false });
        }
        const rollbackVerified = readRaw(MANYFOLD_RETURN_SAVE_KEY) === priorRaw
          && readRaw(THREE_CURRENT_REACH_SAVE_KEY) === td004Before;
        return Object.freeze({
          status: "failed",
          reason: rollbackVerified
            ? (error?.message === "read_back_mismatch" ? "read_back_mismatch" : "local_write_unavailable")
            : "rollback_unverified",
          rollbackVerified,
          predecessorBytesPreserved: readRaw(THREE_CURRENT_REACH_SAVE_KEY) === td004Before,
        });
      }
    },
  });
}

function publicForm(group) {
  if (group === "mf20_python_primary" || group === "mf20_python_transfer") {
    const form = group.endsWith("primary") ? "primary" : "transfer";
    return { kind: "python", form, fieldIds: ["learnerSource"], scaffold: contract.python_contract.forms[form] };
  }
  if (group === "mf20_python_trace") {
    return { kind: "trace", form: "trace", fieldIds: traceDimensions, options: Object.fromEntries(traceDimensions.map((id) => [id, [pythonTraceAnswers[id], `review_${id}_boundary`, `do_not_infer_${id}`]])) };
  }
  if (["mf20_text_primary", "mf20_text_retrieval", "mf20_text_transfer"].includes(group)) {
    const form = group.split("_").at(-1);
    return {
      kind: "text", form,
      cases: contract.ai901_contract.forms[form].map(({ id, prompt }) => ({ id, prompt })),
      dimensions: aiDimensions,
      options: {
        technique: ["keyword_extraction", "entity_detection", "sentiment_analysis", "summarization"],
        deciding_signal: [...new Set(contract.ai901_contract.forms[form].map((item) => item.deciding_signal))],
      },
    };
  }
  if (group === "mf20_requested_output" || group === "mf20_truth_boundary") {
    const kind = group === "mf20_requested_output" ? "requestedOutput" : "truthBoundary";
    return {
      kind: "explanation", form: kind,
      fieldIds: [kind],
      options: [explanationAnswers[kind], `review_${kind}_boundary`, `do_not_infer_${kind}`],
    };
  }
  return null;
}

function sceneForGroup(group) {
  if (group === "mf10_observations") return { sceneId: "SC-06", masterId: manyfoldReturnWorldPlateIds.detail, role: "SC-06-DETAIL-MASTER", cropId: "sc06-detail-equal" };
  return { sceneId: "SC-06", masterId: manyfoldReturnWorldPlateIds.panorama, role: "SC-06-PANORAMA-MASTER", cropId: group.startsWith("mf20_text") || group.includes("requested") || group.includes("truth") ? "sc06-panorama-course" : group.startsWith("mf20_python") ? "sc06-panorama-work" : "sc06-panorama-whole" };
}
export function resolveManyfoldReturnWorldScene(state) {
  if (state?.boardState === "SC-05" && typeof state?.activeGroup === "string" && state.activeGroup.startsWith("tr40")) {
    return Object.freeze({ sceneId: "SC-05", masterId: manyfoldReturnWorldPlateIds.predecessor, role: "SC-05-RELEASED-MASTER", cropId: "sc05-released" });
  }
  if (state?.boardState === "SC-06" && typeof state?.activeGroup === "string" && state.activeGroup.startsWith("mf")) {
    return Object.freeze(sceneForGroup(state.activeGroup));
  }
  return null;
}

function stateFor(group, observations, evidence, extra = {}) {
  const [phase, owner, headingId, localActions] = groups[group];
  const returnActions = group === "mf20_transaction"
    ? []
    : group === "mf20_rollback_unverified" && extra.predecessorBytesPreserved !== true
      ? []
      : [manyfoldReturnActions.returnThreeCurrent, manyfoldReturnActions.returnThreshold];
  return {
    shellVersion: MANYFOLD_RETURN_SHELL_VERSION,
    controllerVersion: MANYFOLD_RETURN_CONTROLLER_VERSION,
    packetId: "RP-005",
    mappingId: "RP005-A3-MANYFOLD-RETURN",
    phase, boardState: "SC-06", activeGroup: group, owner, headingId,
    statusRegionId: "manyfold-return-status",
    statusMessageId: extra.statusMessageId ?? `td005:${group}:ready`,
    statusMessage: extra.statusMessage ?? "The current responsibility is ready. No world, authority, or external action changed.",
    availableActions: [...localActions, ...returnActions],
    actionOwners: Object.fromEntries(
      [...localActions, ...returnActions].map((action) => [
        action,
        action === manyfoldReturnActions.intervalWorks
          ? "PILOT // EXPEDITION NAVIGATION"
          : owner,
      ]),
    ),
    recordedObservationIds: [...observations],
    form: publicForm(group),
    failedPublicIds: extra.failedPublicIds ?? [],
    repairTarget: extra.repairTarget ?? null,
    reviewRows: extra.reviewRows ?? [],
    note: extra.note ?? null,
    evidenceCount: evidence.length,
    continuationRecorded: extra.continuationRecorded ?? false,
    privateWorkCleared: true,
    transientWorkCleared: true,
    cityStateDelta: null, externalStateDelta: null, successor: null,
    authorityGranted: false, externalActionEnabled: false, worldStateChanged: false,
    replayedEvents: [],
    focusIntent: { group, target: extra.focusTarget ?? headingId },
    predecessorBytesPreserved: extra.predecessorBytesPreserved,
  };
}
function exactIntent(intent, state) {
  return exactKeys(intent, intentKeys)
    && intent.mode === "campaign"
    && intent.shellVersion === MANYFOLD_RETURN_SHELL_VERSION
    && intent.controllerVersion === MANYFOLD_RETURN_CONTROLLER_VERSION
    && intent.packetId === "RP-005"
    && intent.activeGroupId === state.activeGroup
    && intent.expectedOwner === state.owner
    && state.availableActions.includes(intent.allowlistedActionId)
    && manyfoldReturnModalities.includes(intent.activationKind)
    && tokenOkay(intent.opaqueFreshEventToken);
}
export function createManyfoldReturnIntent(state, action, activationKind, opaqueFreshEventToken) {
  return Object.freeze({
    mode: "campaign", shellVersion: MANYFOLD_RETURN_SHELL_VERSION,
    controllerVersion: MANYFOLD_RETURN_CONTROLLER_VERSION, packetId: "RP-005",
    activeGroupId: state?.activeGroup ?? null, expectedOwner: state?.owner ?? null,
    allowlistedActionId: action, activationKind, opaqueFreshEventToken,
  });
}
function buildCandidate(evidence) {
  return {
    version: MANYFOLD_RETURN_RECORD_VERSION,
    packetId: "RP-005", mappingId: "RP005-A3-MANYFOLD-RETURN",
    checkpoint: "manyfold_return_complete", continuation: "continuation",
    cityStateDelta: null, externalStateDelta: null, successor: null,
    note: {
      observations: [...manyfoldReturnObservationIds],
      recurrence: "exposed_recurring_range_observed",
      divergence: "one_bounded_divergence_observed",
      unavailable: "sealed_branch_unavailable",
      stewardship: "layered_stewardship_observed",
      replicas: "sanitized_precomputed_only",
      truth: null, purpose: null, destination: null,
    },
    evidence: clone(evidence),
  };
}
const learningGroups = Object.freeze([
  "mf20_python_primary", "mf20_python_trace", "mf20_python_transfer",
  "mf20_text_primary", "mf20_text_retrieval", "mf20_text_transfer",
  "mf20_requested_output", "mf20_truth_boundary", "mf20_review",
]);

export function createManyfoldReturnNormalController(options = {}) {
  const predecessor = sanitizeThreeCurrentReachSave(options.predecessorRecord);
  const predecessorBytes = options.predecessorBytes ?? (predecessor ? JSON.stringify(predecessor) : null);
  const readPredecessorBytes = typeof options.readPredecessorBytes === "function" ? options.readPredecessorBytes : () => predecessorBytes;
  const restored = sanitizeManyfoldReturnSave(options.restoredRecord);
  const adapter = options.adapter;
  const tokens = new Set();
  let observations = [];
  let evidence = [];
  let draft = {};
  let attempts = {};
  let repairTarget = null;
  let record = restored;
  let state = restored
    ? stateFor("mf30_restore", manyfoldReturnObservationIds, restored.evidence, {
      note: restored.note, statusMessageId: "td005:mf30_restore:no-replay",
      statusMessage: "The exact local note was restored without replaying completed work or a world event.",
    })
    : stateFor("mf00_arrive", [], [], {
      statusMessageId: "td005:mf00_arrive:arrived",
      statusMessage: predecessor ? "Manyfold Return is present. Arrival grants no observation, evidence, route, or response." : "The exact released predecessor is unavailable.",
    });
  if (restored) {
    observations = [...manyfoldReturnObservationIds];
    evidence = [...restored.evidence];
  }
  const setGroup = (group, extra = {}) => {
    draft = {};
    state = stateFor(group, observations, evidence, extra);
    return clone(state);
  };
  const reject = (reason) => Object.freeze({ status: "rejected", reason, state: clone(state) });
  const fail = (target, failed) => {
    attempts[target] = (attempts[target] ?? 0) + 1;
    repairTarget = target;
    return Object.freeze({
      status: "remediation_required", answerIncluded: false, failedIds: Object.freeze([...failed]),
      state: setGroup("mf20_repair", {
        failedPublicIds: failed, repairTarget: target, focusTarget: "mf20-repair-heading",
        statusMessageId: `td005:mf20_repair:${target}`,
        statusMessage: "The named checks remain incomplete. Private work was cleared; the guidance contains no answer.",
      }),
    });
  };
  const finalize = (skill, form, correctness, next) => {
    const key = `${skill}:${form}`;
    attempts[key] = (attempts[key] ?? 0) + 1;
    evidence.push(evidenceRecord(skill, form, correctness, attempts[key]));
    return Object.freeze({
      status: `${form}_finalized`, evidenceGranted: true,
      state: setGroup(next, {
        statusMessageId: `td005:${next}:fresh-blank`,
        statusMessage: "The prior responsibility is finalized independently. The next form is genuinely blank.",
      }),
    });
  };
  const safeReturn = (target) => {
    draft = {}; observations = []; evidence = []; repairTarget = null; tokens.clear();
    return Object.freeze({
      status: target === "RP-004" ? "returned_to_three_current_reach_write_free" : "returned_to_city_threshold_write_free",
      route: Object.freeze({ target, continuation: "continuation", cityStateDelta: null, externalStateDelta: null, successor: null, authorityGranted: false, externalActionEnabled: false, writePerformed: false, replayedEvents: Object.freeze([]) }),
      state: clone(state),
    });
  };

  return Object.freeze({
    getState: () => clone(state),
    getRecord: () => clone(record),
    updateField(name, value) {
      if (!state.form || typeof name !== "string" || typeof value !== "string" || value.length > 20000) return reject("field_update_rejected");
      const form = state.form;
      if (form.kind === "python" && name === "learnerSource") draft.learnerSource = value;
      else if (form.kind === "trace" && form.fieldIds.includes(name) && form.options[name].includes(value)) draft[name] = value;
      else if (form.kind === "text") {
        const [caseId, dimension] = name.split(".");
        if (!form.cases.some((item) => item.id === caseId) || !form.dimensions.includes(dimension) || !form.options[dimension].includes(value)) return reject("field_update_rejected");
        draft[caseId] = { ...(draft[caseId] ?? {}), [dimension]: value };
      } else if (form.kind === "explanation" && form.fieldIds.includes(name) && form.options.includes(value)) draft[name] = value;
      else return reject("field_update_rejected");
      return Object.freeze({ status: "field_updated_private", state: clone(state) });
    },
    dispatch(intent) {
      if (options.mode === "demo_tour") return reject("tour_route_closed");
      const token = intent?.opaqueFreshEventToken;
      if (!exactIntent(intent, state) || tokens.has(token)) return reject(tokens.has(token) ? "one_hit_only" : "intent_rejected");
      const action = intent.allowlistedActionId;
      if (action === manyfoldReturnActions.returnThreeCurrent) {
        if (readPredecessorBytes() !== predecessorBytes) return reject("predecessor_changed");
        tokens.add(token); return safeReturn("RP-004");
      }
      if (action === manyfoldReturnActions.returnThreshold) { tokens.add(token); return safeReturn("CITY_THRESHOLD"); }
      if (!predecessor || readPredecessorBytes() !== predecessorBytes) return reject("predecessor_rejected");
      if (action === manyfoldReturnActions.orient) {
        tokens.add(token); return Object.freeze({ status: "manyfold_oriented_zero_evidence", evidenceGranted: false, state: setGroup("mf00_oriented") });
      }
      if (action === manyfoldReturnActions.inspect) {
        tokens.add(token); return Object.freeze({ status: "distribution_visible_zero_evidence", evidenceGranted: false, state: setGroup("mf10_observations") });
      }
      if (Object.hasOwn(actionObservation, action)) {
        const id = actionObservation[action];
        if (observations.includes(id)) return reject("observation_already_recorded");
        tokens.add(token); observations.push(id);
        const complete = observations.length === 4;
        const nextId = manyfoldReturnObservationIds.find((candidate) => !observations.includes(candidate));
        return Object.freeze({
          status: complete ? "observations_complete_zero_learning_credit" : "observation_recorded_zero_learning_credit",
          evidenceGranted: false,
          state: setGroup(complete ? "mf20_python_primary" : "mf10_observations", {
            focusTarget: complete ? "mf20-python-primary-heading" : observationFocus[nextId],
            statusMessageId: `td005:mf10_observations:${id}`,
            statusMessage: "One physical class was recorded without judgment, course credit, authority, or world response.",
          }),
        });
      }
      const submit = {
        [manyfoldReturnActions.pythonPrimary]: ["PY-012", "primary", "mf20_python_trace", "mf20_python_primary"],
        [manyfoldReturnActions.pythonTrace]: ["PY-012", "trace", "mf20_python_transfer", "mf20_python_trace"],
        [manyfoldReturnActions.pythonTransfer]: ["PY-012", "transfer", "mf20_text_primary", "mf20_python_transfer"],
        [manyfoldReturnActions.textPrimary]: ["RP005-TEXT-01", "primary", "mf20_text_retrieval", "mf20_text_primary"],
        [manyfoldReturnActions.textRetrieval]: ["RP005-TEXT-01", "retrieval", "mf20_text_transfer", "mf20_text_retrieval"],
        [manyfoldReturnActions.textTransfer]: ["RP005-TEXT-01", "transfer", "mf20_requested_output", "mf20_text_transfer"],
      };
      if (Object.hasOwn(submit, action)) {
        const [skill, form, next, current] = submit[action];
        let firstBlank = null;
        if (skill === "PY-012" && form !== "trace" && !String(draft.learnerSource ?? "").trim()) {
          firstBlank = form === "primary"
            ? "mf20-python-primary-editor"
            : "mf20-python-transfer-editor";
        } else if (skill === "PY-012" && form === "trace") {
          firstBlank = traceDimensions.some((id) => !draft[id])
            ? "mf20-python-trace-first"
            : null;
        } else if (skill === "RP005-TEXT-01") {
          const firstCase = contract.ai901_contract.forms[form][0];
          const complete = contract.ai901_contract.forms[form].every((item) => (
            aiDimensions.every((dimension) => Boolean(draft[item.id]?.[dimension]))
          ));
          firstBlank = complete ? null : `mf20-text-${form}-first`;
          if (!firstCase) firstBlank = `mf20-text-${form}-first`;
        }
        if (firstBlank) {
          state = {
            ...state,
            statusMessageId: `td005:${current}:required-field`,
            statusMessage: "Complete the first blank labelled field before submitting. No token, evidence, or answer was consumed.",
            focusIntent: { group: current, target: firstBlank },
          };
          return Object.freeze({ status: "required_field_missing", evidenceGranted: false, state: clone(state) });
        }
        let result;
        if (skill === "PY-012") {
          result = form === "trace" ? evaluateManyfoldReturnPythonTrace(draft) : evaluateManyfoldReturnPython(form, draft.learnerSource);
        } else result = evaluateManyfoldReturnText(form, draft);
        tokens.add(token);
        if (!result.passed) return fail(`${skill}:${form}`, result.failed);
        return finalize(skill, form, result.correctness, next);
      }
      if (action === manyfoldReturnActions.requestedOutput || action === manyfoldReturnActions.truthBoundary) {
        const kind = action === manyfoldReturnActions.requestedOutput ? "requestedOutput" : "truthBoundary";
        const form = kind === "requestedOutput" ? "requested_output_explanation" : "truth_boundary_explanation";
        if (!draft[kind]) {
          state = {
            ...state,
            statusMessageId: `td005:${state.activeGroup}:required-field`,
            statusMessage: "Complete the blank labelled explanation before submitting. No token, evidence, or answer was consumed.",
            focusIntent: {
              group: state.activeGroup,
              target: kind === "requestedOutput"
                ? "mf20-requested-output-field"
                : "mf20-truth-boundary-field",
            },
          };
          return Object.freeze({ status: "required_field_missing", evidenceGranted: false, state: clone(state) });
        }
        tokens.add(token);
        if (draft[kind] !== explanationAnswers[kind]) return fail(`RP005-TEXT-01:${form}`, [kind === "requestedOutput" ? "requested_output" : "truth_boundary"]);
        return finalize("RP005-TEXT-01", form, { [kind === "requestedOutput" ? "requested_output" : "truth_boundary"]: true }, kind === "requestedOutput" ? "mf20_truth_boundary" : "mf20_review");
      }
      if (action === manyfoldReturnActions.retry) {
        tokens.add(token);
        const target = repairTarget;
        repairTarget = null;
        const index = expectedEvidence().findIndex(([skill, form]) => `${skill}:${form}` === target);
        if (index < 0) return reject("repair_target_missing");
        return Object.freeze({ status: "fresh_blank_retry_visible", state: setGroup(learningGroups[index], { statusMessageId: `td005:${learningGroups[index]}:retry-blank`, statusMessage: "A wholly blank retry is ready. No response, choice, source, or answer carried forward." }) });
      }
      if (action === manyfoldReturnActions.review) {
        if (observations.length !== 4 || evidence.length !== 8) return Object.freeze({ status: "review_incomplete_recovered", state: setGroup(observations.length !== 4 ? "mf10_observations" : learningGroups[evidence.length]) });
        tokens.add(token);
        return Object.freeze({
          status: "provenance_inspected_zero_credit", evidenceGranted: false,
          state: setGroup("mf20_provenance", {
            reviewRows: [
              { id: "physical", owner: "PILOT // PHYSICAL OBSERVATION", state: "Four equal observations finalized; no course substitute." },
              { id: "python", owner: "BUILDER WORK // PY-012", state: "Primary, trace, and transfer finalized independently." },
              { id: "text", owner: "TEACHER / COURSE // RP005-TEXT-01", state: "Primary, retrieval, and transfer finalized independently." },
              { id: "requested", owner: "TEACHER / COURSE // REQUESTED OUTPUT", state: "Requested-output explanation finalized separately." },
              { id: "truth", owner: "TEACHER / COURSE // TRUTH BOUNDARY", state: "Truth-boundary explanation finalized separately." },
            ],
            statusMessageId: "td005:mf20_provenance:inspected",
            statusMessage: "Sanitized precomputed replicas, neutral cases, offline work, and no live control or external action are confirmed.",
          }),
        });
      }
      if (action === manyfoldReturnActions.reviewAgain) {
        tokens.add(token); return Object.freeze({ status: "provenance_reopened_after_verified_rollback", state: setGroup("mf20_provenance") });
      }
      if (action === manyfoldReturnActions.save) {
        tokens.add(token);
        state = stateFor("mf20_transaction", observations, evidence);
        const result = adapter?.commit(buildCandidate(evidence)) ?? { status: "failed", reason: "local_storage_unavailable", rollbackVerified: true, predecessorBytesPreserved: true };
        const predecessorStable = readPredecessorBytes() === predecessorBytes;
        const safe = result.status === "committed" ? sanitizeManyfoldReturnSave(result.value) : null;
        if (!safe || !predecessorStable) {
          const rollbackVerified = result.rollbackVerified === true && predecessorStable;
          return Object.freeze({
            status: rollbackVerified ? "save_failed_rollback_verified" : "save_failed_rollback_unverified",
            reason: predecessorStable ? result.reason ?? "read_back_rejected" : "predecessor_changed",
            rollbackVerified, predecessorBytesPreserved: predecessorStable,
            state: setGroup(rollbackVerified ? "mf20_save_recovery" : "mf20_rollback_unverified", {
              predecessorBytesPreserved: predecessorStable,
              statusMessageId: `td005:${rollbackVerified ? "mf20_save_recovery" : "mf20_rollback_unverified"}:failed`,
              statusMessage: rollbackVerified
                ? "The candidate did not replace the last verified note or verified absence. Review provenance before retry."
                : "Rollback or predecessor stability could not be verified. Progression is held without claiming byte preservation.",
            }),
          });
        }
        record = safe; evidence = [...safe.evidence]; observations = [...manyfoldReturnObservationIds];
        return Object.freeze({
          status: "save_committed_verified_restore", record: clone(record), predecessorBytesPreserved: true,
          state: setGroup("mf30_restore", { note: record.note, statusMessageId: "td005:mf30_restore:verified", statusMessage: "Exact raw and strict object read-back passed while the TD-004 bytes remained unchanged. No event replayed." }),
        });
      }
      if (action === manyfoldReturnActions.continuation) {
        tokens.add(token);
        return Object.freeze({
          status: "destinationless_continuation_recorded", routeOpened: false, destination: null, successor: null, evidenceGranted: false,
          state: setGroup("mf30_restore_recorded", { note: record?.note ?? null, continuationRecorded: true, statusMessageId: "td005:mf30_restore_recorded:local-only", statusMessage: "Serviced continuation is noted locally with no destination, route, successor, or response." }),
        });
      }
      return reject("action_unavailable");
    },
  });
}

export const manyfoldReturnPublicContract = Object.freeze({
  observationIds: manyfoldReturnObservationIds,
  minimumTargetCssPx: 44,
  offlineOnly: true,
  noAuthority: true,
  noExamGuarantee: true,
  imageRoles: Object.freeze(["SC-06-PANORAMA-MASTER", "SC-06-DETAIL-MASTER"]),
});
