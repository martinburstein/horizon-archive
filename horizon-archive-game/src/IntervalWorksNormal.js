import contract from "../../curriculum/readiness/RP-006/contract.json" with { type: "json" };
import {
  MANYFOLD_RETURN_SAVE_KEY,
  sanitizeManyfoldReturnSave,
} from "./ManyfoldReturnNormal.js";
import { THREE_CURRENT_REACH_SAVE_KEY } from "./ThreeCurrentReachNormal.js";

export const INTERVAL_WORKS_SHELL_VERSION = "SS-RP006-INTERVAL-WORKS-v1";
export const INTERVAL_WORKS_CONTROLLER_VERSION = "rp006.interval-works-controller.v1";
export const INTERVAL_WORKS_RECORD_VERSION = "rp006.interval-works-save.v1";
export const INTERVAL_WORKS_SAVE_KEY = "horizon-archive-rp006-interval-works-save-v1";

export const intervalWorksModalities = Object.freeze([
  "pointer", "touch", "keyboard_enter", "keyboard_space", "switch", "speech", "screen_reader",
]);

export const intervalWorksActions = Object.freeze({
  route: "PILOT // FOLLOW EXPEDITION-MARKED ADJACENT SURVEY TO INTERVAL WORKS",
  inspect: "INSPECT MATERIAL RELATIONS",
  overlap: "INSPECT OVERLAP AND CROSS-CUT RELATION",
  changedPersistent: "COMPARE CHANGED AND PERSISTENT FEATURES",
  closedInterval: "INSPECT CLOSED INTERVAL BOUNDARY",
  stewardship: "INSPECT LAYERED STEWARDSHIP",
  pythonPrimary: "SUBMIT PYTHON PRIMARY",
  pythonTrace: "SUBMIT PYTHON TRACE",
  pythonTransfer: "SUBMIT PYTHON TRANSFER",
  speechPrimary: "SUBMIT SPEECH PRIMARY",
  speechRetrieval: "SUBMIT SPEECH RETRIEVAL",
  speechTransfer: "SUBMIT SPEECH TRANSFER",
  directionBoundary: "SUBMIT INPUT AND OUTPUT DIRECTION BOUNDARY",
  causationBoundary: "SUBMIT TRANSCRIPT CAUSATION BOUNDARY",
  retry: "RETRY WITH BLANK FORM",
  review: "REVIEW BOUNDED NOTE",
  save: "SAVE LOCAL EXPEDITION NOTE",
  retrySave: "RETRY LOCAL SAVE",
  returnManyfold: "RETURN TO MANYFOLD RETURN",
  returnThreshold: "RETURN TO CITY THRESHOLD",
});

export const intervalWorksObservationIds = Object.freeze([
  "overlap_crosscut_relative_order",
  "changed_persistent_feature_pair",
  "closed_interval_unavailable",
  "layered_stewardship_visible",
]);

export const intervalWorksWorldPlateIds = Object.freeze({
  panorama: "SC-07-PANORAMA-MASTER",
  crosssection: "SC-07-CROSSSECTION-MASTER",
  predecessor: "SC-06-PANORAMA-MASTER",
});

export const intervalWorksPythonTraceAnswers = Object.freeze({
  importStatement: "import_itertools",
  moduleName: "itertools",
  qualifiedHelper: "itertools_chain_from_iterable",
  inputGroups: "supplied_sanitized_record_groups",
  listOutput: "flattened_sequence_list",
  sourceOrder: "preserve_group_and_record_source_order",
  explicitGap: "unavailable_interval_remains_explicit",
  causeBoundary: "every_cause_remains_none",
});

export const intervalWorksExplanationAnswers = Object.freeze({
  directionBoundary: "input_and_output_direction_selects_recognition_or_synthesis",
  causationBoundary: "transcript_order_or_content_does_not_establish_causation",
});

const pythonChecks = Object.freeze([...contract.python_contract.checks]);
const traceDimensions = Object.freeze(Object.keys(intervalWorksPythonTraceAnswers));
const speechDimensions = Object.freeze([...contract.ai901_contract.dimensions]);
const topKeys = Object.freeze([
  "version", "packetId", "mappingId", "checkpoint", "continuation",
  "cityStateDelta", "externalStateDelta", "successor", "note", "evidence",
]);
const noteKeys = Object.freeze([
  "observations", "relativeOrder", "changed", "persistent", "unavailable",
  "stewardship", "replicas", "gap", "cause", "purpose", "destination",
]);
const evidenceKeys = Object.freeze([
  "packet_id", "mapping_id", "form", "skill_or_objective_id",
  "dimension_correctness", "attempt_count", "hint_level", "confidence",
  "misconception_tags", "mastery_status",
]);
const intentKeys = Object.freeze([
  "mode", "shellVersion", "controllerVersion", "packetId", "activeGroupId",
  "expectedOwner", "allowlistedActionId", "activationKind", "opaqueFreshEventToken",
]);
const forbiddenPrivate = /learner_source|raw_?answers?|raw_?cases?|free_?reasoning|feedback|private_?notes?|identity|exam_?items?|credentials?|secrets?|resource_?ids?|endpoints?|urls?|payloads?|requests?|responses?|external_?action|pointer|focus|modality|token|route_?history|timing|tour|live_?read|inferred_?(?:cause|duration|authorship|purpose|category|value)|closed_?contents/i;
const forbiddenPython = /\b(?:open|print|eval|exec|system|remove|unlink|rmdir|requests|urlopen|fetch|sorted|reversed)\b/i;

const actionObservation = Object.freeze({
  [intervalWorksActions.overlap]: intervalWorksObservationIds[0],
  [intervalWorksActions.changedPersistent]: intervalWorksObservationIds[1],
  [intervalWorksActions.closedInterval]: intervalWorksObservationIds[2],
  [intervalWorksActions.stewardship]: intervalWorksObservationIds[3],
});
const observationFocus = Object.freeze({
  [intervalWorksObservationIds[0]]: "iw-observation-overlap",
  [intervalWorksObservationIds[1]]: "iw-observation-changed-persistent",
  [intervalWorksObservationIds[2]]: "iw-observation-closed",
  [intervalWorksObservationIds[3]]: "iw-observation-stewardship",
});

const groups = Object.freeze({
  iw00_orientation: ["IW-00 ARRIVE + IDLE", "SYSTEM // EXPEDITION ORIENTATION", "iw00-orientation-heading", [intervalWorksActions.inspect]],
  iw10_observations: ["IW-10 INSPECT MATERIAL ORDER", "SCENE // SENSOR RECORD", "iw10-observations-heading", Object.keys(actionObservation)],
  iw20_python_primary: ["IW-20 PYTHON PRIMARY", "BUILDER WORK // SANITIZED PRECOMPUTED REPLICAS", "iw20-python-primary-heading", [intervalWorksActions.pythonPrimary]],
  iw20_python_trace: ["IW-20 PYTHON TRACE", "BUILDER WORK // SANITIZED PRECOMPUTED REPLICAS", "iw20-python-trace-heading", [intervalWorksActions.pythonTrace]],
  iw20_python_transfer: ["IW-20 PYTHON TRANSFER", "BUILDER WORK // SANITIZED PRECOMPUTED REPLICAS", "iw20-python-transfer-heading", [intervalWorksActions.pythonTransfer]],
  iw20_speech_primary: ["IW-20 SPEECH PRIMARY", "TEACHER / COURSE // SPEECH CAPABILITY PRACTICE", "iw20-speech-primary-heading", [intervalWorksActions.speechPrimary]],
  iw20_speech_retrieval: ["IW-20 SPEECH RETRIEVAL", "TEACHER / COURSE // SPEECH CAPABILITY PRACTICE", "iw20-speech-retrieval-heading", [intervalWorksActions.speechRetrieval]],
  iw20_speech_transfer: ["IW-20 SPEECH TRANSFER", "TEACHER / COURSE // SPEECH CAPABILITY PRACTICE", "iw20-speech-transfer-heading", [intervalWorksActions.speechTransfer]],
  iw20_direction: ["IW-20 INPUT/OUTPUT DIRECTION", "TEACHER / COURSE // SPEECH CAPABILITY PRACTICE", "iw20-direction-heading", [intervalWorksActions.directionBoundary]],
  iw20_causation: ["IW-20 CAUSATION BOUNDARY", "TEACHER / COURSE // SPEECH CAPABILITY PRACTICE", "iw20-causation-heading", [intervalWorksActions.causationBoundary]],
  iw20_repair: ["IW-20 ANSWER-FREE REPAIR", "SYSTEM // LOCAL PRACTICE RECOVERY", "iw20-repair-heading", [intervalWorksActions.retry]],
  iw20_review: ["IW-20 CONJUNCTIVE REVIEW", "PILOT // BOUNDED EXPEDITION NOTE", "iw20-review-heading", [intervalWorksActions.review]],
  iw20_save: ["IW-20 LOCAL SAVE", "PILOT // BOUNDED EXPEDITION NOTE", "iw20-save-heading", [intervalWorksActions.save]],
  iw20_transaction: ["IW-20 LOCAL TRANSACTION", "SYSTEM // LOCAL EXPEDITION NOTE", "iw20-transaction-heading", []],
  iw20_save_recovery: ["IW-20 SAVE RECOVERY", "SYSTEM // LOCAL EXPEDITION NOTE", "iw20-save-recovery-heading", [intervalWorksActions.retrySave]],
  iw20_rollback_unverified: ["IW-20 ROLLBACK UNVERIFIED", "SYSTEM // LOCAL EXPEDITION NOTE", "iw20-rollback-unverified-heading", []],
  iw30_restore: ["IW-30 VERIFY + RETURN", "SYSTEM // RESTORED EXPEDITION NOTE", "iw30-restore-heading", []],
});

const learningGroups = Object.freeze([
  "iw20_python_primary", "iw20_python_trace", "iw20_python_transfer",
  "iw20_speech_primary", "iw20_speech_retrieval", "iw20_speech_transfer",
  "iw20_direction", "iw20_causation", "iw20_review",
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
function parseRecords(source) {
  const records = [];
  for (const match of String(source).matchAll(/\{"state_id":.*?\}/g)) {
    try {
      records.push(JSON.parse(match[0]
        .replace(/\bNone\b/g, "null")
        .replace(/\bTrue\b/g, "true")
        .replace(/\bFalse\b/g, "false")));
    } catch {
      return [];
    }
  }
  return records;
}

export function evaluateIntervalWorksPython(form, learnerSource) {
  const expected = contract.python_contract.forms[form];
  if (!expected) throw new TypeError("form must be primary or transfer");
  const source = String(learnerSource ?? "").replace(/\r/g, "");
  const records = parseRecords(source);
  const chainCalls = source.match(/itertools\.chain\.from_iterable\s*\(\s*record_groups\s*\)/g) ?? [];
  const exactImport = (source.match(/^\s*import\s+itertools\s*$/gm) ?? []).length === 1
    && !/^\s*(?:from\s+itertools|import\s+[^\n,]+,)/m.test(source);
  const exactListCall = /^\s*sequence\s*=\s*list\s*\(\s*itertools\.chain\.from_iterable\s*\(\s*record_groups\s*\)\s*\)\s*$/m.test(source)
    && chainCalls.length === 1;
  const exactRecordKeys = records.length === 4
    && records.every((record) => Object.keys(record).join("|") === "state_id|changed|persistent|available|cause");
  const mutation = /record_groups\s*\[[^\n=]+\]\s*=|record_groups\.(?:append|extend|insert|sort|reverse|clear|pop|remove)\s*\(/.test(source);
  const checks = {
    sequence_is_list: exactListCall,
    exact_source_order: JSON.stringify(records.map((record) => record.state_id)) === JSON.stringify(expected.state_ids),
    exact_record_keys: exactRecordKeys,
    changed_and_persistent_preserved: JSON.stringify(records.map((record) => record.changed)) === JSON.stringify(expected.changed)
      && JSON.stringify(records.map((record) => record.persistent)) === JSON.stringify(expected.persistent),
    unavailable_interval_preserved: records[2]?.state_id === null && records[2]?.available === false,
    cause_remains_none_for_every_record: records.length === 4 && records.every((record) => record.cause === null),
    imports_itertools_and_calls_chain_once: exactImport && chainCalls.length === 1,
    inputs_unchanged_and_no_forbidden_operations: records.length === 4 && !mutation
      && (source.match(/^\s*record_groups\s*=/gm) ?? []).length === 1
      && (source.match(/^\s*sequence\s*=/gm) ?? []).length === 1
      && !forbiddenPython.test(source),
  };
  const failed = pythonChecks.filter((id) => checks[id] !== true);
  return Object.freeze({ form, correctness: Object.freeze(checks), failed: Object.freeze(failed), passed: failed.length === 0 });
}

export function evaluateIntervalWorksPythonTrace(answers) {
  const correctness = Object.fromEntries(Object.entries(intervalWorksPythonTraceAnswers)
    .map(([id, expected]) => [id, answers?.[id] === expected]));
  return Object.freeze({ correctness: Object.freeze(correctness), failed: Object.keys(correctness).filter((id) => !correctness[id]), passed: Object.values(correctness).every(Boolean) });
}

export function evaluateIntervalWorksSpeech(form, answers) {
  const cases = contract.ai901_contract.forms[form];
  if (!cases) throw new TypeError("form must be primary, retrieval, or transfer");
  const correctness = {};
  for (const item of cases) for (const dimension of speechDimensions) {
    correctness[`${item.id}.${dimension}`] = answers?.[item.id]?.[dimension] === item[dimension];
  }
  return Object.freeze({ form, correctness: Object.freeze(correctness), failed: Object.keys(correctness).filter((id) => !correctness[id]), passed: Object.values(correctness).every(Boolean) });
}

function evidenceRecord(skill, form, correctness, attempts = 1) {
  return Object.freeze({
    packet_id: "RP-006",
    mapping_id: "RP006-A3-INTERVAL-WORKS",
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
    ["PY-013", "primary", pythonChecks],
    ["PY-013", "trace", traceDimensions],
    ["PY-013", "transfer", pythonChecks],
    ...["primary", "retrieval", "transfer"].map((form) => [
      "RP006-SPEECH-01", form,
      contract.ai901_contract.forms[form].flatMap((item) => speechDimensions.map((dimension) => `${item.id}.${dimension}`)),
    ]),
    ["RP006-SPEECH-01", "direction_boundary_explanation", ["direction_boundary"]],
    ["RP006-SPEECH-01", "causation_boundary_explanation", ["causation_boundary"]],
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
      || record.packet_id !== "RP-006"
      || record.mapping_id !== "RP006-A3-INTERVAL-WORKS"
      || record.skill_or_objective_id !== skill || record.form !== form
      || record.mastery_status !== "mastered"
      || !exactKeys(record.dimension_correctness, dimensions)
      || !dimensions.every((id) => record.dimension_correctness[id] === true)
      || !Number.isInteger(record.attempt_count) || record.attempt_count < 1 || record.attempt_count > 99
      || !Number.isInteger(record.hint_level) || record.hint_level < 0 || record.hint_level > 3
      || ![null, "low", "medium", "high"].includes(record.confidence)
      || !Array.isArray(record.misconception_tags)) break;
    safe.push(Object.freeze({ ...record, dimension_correctness: Object.freeze({ ...record.dimension_correctness }), misconception_tags: Object.freeze([...record.misconception_tags]) }));
  }
  return safe;
}

export function sanitizeIntervalWorksSave(value) {
  if (!exactKeys(value, topKeys) || forbiddenPrivate.test(JSON.stringify(value ?? {}))
    || value.version !== INTERVAL_WORKS_RECORD_VERSION
    || value.packetId !== "RP-006"
    || value.mappingId !== "RP006-A3-INTERVAL-WORKS"
    || value.checkpoint !== "interval_works_complete"
    || value.continuation !== "continuation"
    || value.cityStateDelta !== null || value.externalStateDelta !== null || value.successor !== null
    || !exactKeys(value.note, noteKeys)
    || JSON.stringify(value.note.observations) !== JSON.stringify(intervalWorksObservationIds)
    || value.note.relativeOrder !== "exposed_source_order_preserved"
    || value.note.changed !== "one_visible_change_observed"
    || value.note.persistent !== "one_feature_persists"
    || value.note.unavailable !== "closed_interval_unavailable"
    || value.note.stewardship !== "layered_stewardship_observed"
    || value.note.replicas !== "sanitized_precomputed_only"
    || value.note.gap !== "explicit_unavailable_record"
    || value.note.cause !== null || value.note.purpose !== null || value.note.destination !== null) return null;
  const evidence = sanitizeEvidence(value.evidence);
  if (evidence.length !== 8 || value.evidence.length !== 8) return null;
  return Object.freeze({
    version: INTERVAL_WORKS_RECORD_VERSION,
    packetId: "RP-006",
    mappingId: "RP006-A3-INTERVAL-WORKS",
    checkpoint: "interval_works_complete",
    continuation: "continuation",
    cityStateDelta: null,
    externalStateDelta: null,
    successor: null,
    note: Object.freeze({
      observations: Object.freeze([...intervalWorksObservationIds]),
      relativeOrder: "exposed_source_order_preserved",
      changed: "one_visible_change_observed",
      persistent: "one_feature_persists",
      unavailable: "closed_interval_unavailable",
      stewardship: "layered_stewardship_observed",
      replicas: "sanitized_precomputed_only",
      gap: "explicit_unavailable_record",
      cause: null,
      purpose: null,
      destination: null,
    }),
    evidence: Object.freeze(evidence),
  });
}

export function createIntervalWorksStorageAdapter(storage, predecessor = {}) {
  const readRaw = (key) => {
    try { return storage?.getItem(key) ?? null; } catch { return null; }
  };
  const strictRead = () => {
    const raw = readRaw(INTERVAL_WORKS_SAVE_KEY);
    if (raw === null) return null;
    try { return sanitizeIntervalWorksSave(JSON.parse(raw)); } catch { return null; }
  };
  return Object.freeze({
    read: strictRead,
    commit(candidate) {
      const priorRaw = readRaw(INTERVAL_WORKS_SAVE_KEY);
      const td005Before = readRaw(MANYFOLD_RETURN_SAVE_KEY);
      const td004Before = readRaw(THREE_CURRENT_REACH_SAVE_KEY);
      if (td005Before !== predecessor.manyfoldBytes
        || td004Before !== predecessor.threeCurrentBytes
        || !sanitizeManyfoldReturnSave(predecessor.manyfoldRecord)) {
        return Object.freeze({ status: "failed", reason: "predecessor_changed", rollbackVerified: true, predecessorBytesPreserved: false });
      }
      if (priorRaw !== null) {
        try {
          if (!sanitizeIntervalWorksSave(JSON.parse(priorRaw))) {
            return Object.freeze({ status: "failed", reason: "malformed_prior_record", rollbackVerified: true, predecessorBytesPreserved: true });
          }
        } catch {
          return Object.freeze({ status: "failed", reason: "malformed_prior_record", rollbackVerified: true, predecessorBytesPreserved: true });
        }
      }
      const safe = sanitizeIntervalWorksSave(candidate);
      if (!safe) return Object.freeze({ status: "failed", reason: "candidate_rejected", rollbackVerified: true, predecessorBytesPreserved: true });
      const serialized = JSON.stringify(safe);
      try {
        storage?.setItem(INTERVAL_WORKS_SAVE_KEY, serialized);
        const raw = readRaw(INTERVAL_WORKS_SAVE_KEY);
        const object = strictRead();
        if (raw !== serialized || JSON.stringify(object) !== serialized
          || readRaw(MANYFOLD_RETURN_SAVE_KEY) !== td005Before
          || readRaw(THREE_CURRENT_REACH_SAVE_KEY) !== td004Before) throw new Error("read_back_mismatch");
        return Object.freeze({ status: "committed", value: object, raw, rollbackVerified: true, predecessorBytesPreserved: true });
      } catch (error) {
        try {
          if (priorRaw === null) storage?.removeItem(INTERVAL_WORKS_SAVE_KEY);
          else storage?.setItem(INTERVAL_WORKS_SAVE_KEY, priorRaw);
        } catch {
          return Object.freeze({ status: "failed", reason: "rollback_unverified", rollbackVerified: false, predecessorBytesPreserved: false });
        }
        const rollbackVerified = readRaw(INTERVAL_WORKS_SAVE_KEY) === priorRaw
          && readRaw(MANYFOLD_RETURN_SAVE_KEY) === td005Before
          && readRaw(THREE_CURRENT_REACH_SAVE_KEY) === td004Before;
        return Object.freeze({
          status: "failed",
          reason: rollbackVerified ? (error?.message === "read_back_mismatch" ? "read_back_mismatch" : "local_write_unavailable") : "rollback_unverified",
          rollbackVerified,
          predecessorBytesPreserved: readRaw(MANYFOLD_RETURN_SAVE_KEY) === td005Before
            && readRaw(THREE_CURRENT_REACH_SAVE_KEY) === td004Before,
        });
      }
    },
  });
}

function publicForm(group) {
  if (group === "iw20_python_primary" || group === "iw20_python_transfer") {
    const form = group.endsWith("primary") ? "primary" : "transfer";
    return { kind: "python", form, fieldIds: ["learnerSource"], scaffold: contract.python_contract.forms[form] };
  }
  if (group === "iw20_python_trace") {
    return { kind: "trace", form: "trace", fieldIds: traceDimensions, options: Object.fromEntries(traceDimensions.map((id) => [id, [intervalWorksPythonTraceAnswers[id], `review_${id}_boundary`, `do_not_infer_${id}`]])) };
  }
  if (["iw20_speech_primary", "iw20_speech_retrieval", "iw20_speech_transfer"].includes(group)) {
    const form = group.split("_").at(-1);
    return {
      kind: "speech", form,
      cases: contract.ai901_contract.forms[form].map(({ id, prompt }) => ({ id, prompt })),
      dimensions: speechDimensions,
      options: {
        capability: ["speech_recognition", "speech_synthesis"],
        deciding_signal: [...new Set(contract.ai901_contract.forms[form].map((item) => item.deciding_signal))],
      },
    };
  }
  if (group === "iw20_direction" || group === "iw20_causation") {
    const kind = group === "iw20_direction" ? "directionBoundary" : "causationBoundary";
    return { kind: "explanation", form: kind, fieldIds: [kind], options: [intervalWorksExplanationAnswers[kind], `review_${kind}_boundary`, `do_not_infer_${kind}`] };
  }
  return null;
}

function sceneForGroup(group) {
  if (group === "iw10_observations") {
    return { sceneId: "SC-07", masterId: intervalWorksWorldPlateIds.crosssection, role: "SC-07-CROSSSECTION-MASTER", cropId: "sc07-crosssection-all" };
  }
  return {
    sceneId: "SC-07",
    masterId: intervalWorksWorldPlateIds.panorama,
    role: "SC-07-PANORAMA-MASTER",
    cropId: group.startsWith("iw20_python") ? "sc07-panorama-work"
      : group.startsWith("iw20_speech") || group.includes("direction") || group.includes("causation")
        ? "sc07-panorama-course"
        : group === "iw30_restore" ? "sc07-panorama-restore" : "sc07-panorama-orient",
  };
}
export function resolveIntervalWorksWorldScene(state) {
  if (state?.boardState === "SC-06" && typeof state?.activeGroup === "string" && state.activeGroup.startsWith("mf")) {
    return Object.freeze({ sceneId: "SC-06", masterId: intervalWorksWorldPlateIds.predecessor, role: "SC-06-PANORAMA-MASTER", cropId: "sc06-released" });
  }
  if (state?.boardState === "SC-07" && typeof state?.activeGroup === "string" && state.activeGroup.startsWith("iw")) {
    return Object.freeze(sceneForGroup(state.activeGroup));
  }
  return null;
}

function stateFor(group, observations, evidence, extra = {}) {
  const [phase, owner, headingId, localActions] = groups[group];
  const returnActions = group === "iw20_transaction" ? []
    : [intervalWorksActions.returnManyfold, intervalWorksActions.returnThreshold];
  return {
    shellVersion: INTERVAL_WORKS_SHELL_VERSION,
    controllerVersion: INTERVAL_WORKS_CONTROLLER_VERSION,
    packetId: "RP-006",
    mappingId: "RP006-A3-INTERVAL-WORKS",
    phase,
    boardState: "SC-07",
    activeGroup: group,
    owner,
    headingId,
    statusRegionId: "interval-works-status",
    statusMessageId: extra.statusMessageId ?? `td006:${group}:ready`,
    statusMessage: extra.statusMessage ?? "The current bounded responsibility is ready. The works, authority, and external world remain unchanged.",
    availableActions: [...localActions, ...returnActions],
    recordedObservationIds: [...observations],
    form: publicForm(group),
    failedPublicIds: extra.failedPublicIds ?? [],
    repairTarget: extra.repairTarget ?? null,
    reviewRows: extra.reviewRows ?? [],
    note: extra.note ?? null,
    evidenceCount: evidence.length,
    privateWorkCleared: true,
    transientWorkCleared: true,
    cityStateDelta: null,
    externalStateDelta: null,
    successor: null,
    authorityGranted: false,
    externalActionEnabled: false,
    worldStateChanged: false,
    replayedEvents: [],
    focusIntent: { group, target: extra.focusTarget ?? headingId },
    predecessorBytesPreserved: extra.predecessorBytesPreserved,
  };
}

function exactIntent(intent, state) {
  return exactKeys(intent, intentKeys)
    && intent.mode === "campaign"
    && intent.shellVersion === INTERVAL_WORKS_SHELL_VERSION
    && intent.controllerVersion === INTERVAL_WORKS_CONTROLLER_VERSION
    && intent.packetId === "RP-006"
    && intent.activeGroupId === state.activeGroup
    && intent.expectedOwner === state.owner
    && state.availableActions.includes(intent.allowlistedActionId)
    && intervalWorksModalities.includes(intent.activationKind)
    && tokenOkay(intent.opaqueFreshEventToken);
}
export function createIntervalWorksIntent(state, action, activationKind, opaqueFreshEventToken) {
  return Object.freeze({
    mode: "campaign",
    shellVersion: INTERVAL_WORKS_SHELL_VERSION,
    controllerVersion: INTERVAL_WORKS_CONTROLLER_VERSION,
    packetId: "RP-006",
    activeGroupId: state?.activeGroup ?? null,
    expectedOwner: state?.owner ?? null,
    allowlistedActionId: action,
    activationKind,
    opaqueFreshEventToken,
  });
}

function routeIntentOkay(intent) {
  return intent?.mode === "campaign"
    && intent.shellVersion === "SS-RP005-MANYFOLD-RETURN-v1"
    && intent.controllerVersion === "rp005.manyfold-return-controller.v1"
    && intent.packetId === "RP-005"
    && ["mf30_restore", "mf30_restore_recorded"].includes(intent.activeGroupId)
    && intent.expectedOwner === "PILOT // EXPEDITION NAVIGATION"
    && intent.allowlistedActionId === intervalWorksActions.route
    && intervalWorksModalities.includes(intent.activationKind)
    && tokenOkay(intent.opaqueFreshEventToken);
}

function buildCandidate(evidence) {
  return {
    version: INTERVAL_WORKS_RECORD_VERSION,
    packetId: "RP-006",
    mappingId: "RP006-A3-INTERVAL-WORKS",
    checkpoint: "interval_works_complete",
    continuation: "continuation",
    cityStateDelta: null,
    externalStateDelta: null,
    successor: null,
    note: {
      observations: [...intervalWorksObservationIds],
      relativeOrder: "exposed_source_order_preserved",
      changed: "one_visible_change_observed",
      persistent: "one_feature_persists",
      unavailable: "closed_interval_unavailable",
      stewardship: "layered_stewardship_observed",
      replicas: "sanitized_precomputed_only",
      gap: "explicit_unavailable_record",
      cause: null,
      purpose: null,
      destination: null,
    },
    evidence: clone(evidence),
  };
}

export function createIntervalWorksNormalController(options = {}) {
  const predecessor = sanitizeManyfoldReturnSave(options.predecessorRecord);
  const predecessorBytes = options.predecessorBytes ?? (predecessor ? JSON.stringify(predecessor) : null);
  const readPredecessorBytes = typeof options.readPredecessorBytes === "function" ? options.readPredecessorBytes : () => predecessorBytes;
  const readThreeCurrentBytes = typeof options.readThreeCurrentBytes === "function" ? options.readThreeCurrentBytes : () => options.threeCurrentBytes ?? null;
  const threeCurrentBytes = options.threeCurrentBytes ?? readThreeCurrentBytes();
  const restored = sanitizeIntervalWorksSave(options.restoredRecord);
  const acceptedEntry = restored ? true : routeIntentOkay(options.entryIntent);
  const adapter = options.adapter;
  const tokens = new Set();
  if (acceptedEntry && options.entryIntent?.opaqueFreshEventToken) tokens.add(options.entryIntent.opaqueFreshEventToken);
  let observations = restored ? [...intervalWorksObservationIds] : [];
  let evidence = restored ? [...restored.evidence] : [];
  let draft = {};
  let attempts = {};
  let repairTarget = null;
  let record = restored;
  let state = restored
    ? stateFor("iw30_restore", observations, evidence, {
      note: restored.note,
      statusMessageId: "td006:iw30_restore:restored-no-replay",
      statusMessage: "The exact bounded note was restored heading-first. No route, observation, learning, save, world, or return event replayed.",
    })
    : acceptedEntry && predecessor
      ? stateFor("iw00_orientation", [], [], {
        statusMessageId: "td006:iw00_orientation:ready",
        statusMessage: "Interval Works is present as an invariant exposed cut. Arrival grants no observation, evidence, access, authority, or response.",
      })
      : {
        shellVersion: "SS-RP005-MANYFOLD-RETURN-v1",
        controllerVersion: "rp005.manyfold-return-controller.v1",
        packetId: "RP-005",
        mappingId: "RP005-A3-MANYFOLD-RETURN",
        phase: "MF-30 VERIFIED RESTORE",
        boardState: "SC-06",
        activeGroup: "mf30_restore",
        owner: "SYSTEM // RESTORED EXPEDITION NOTE",
        headingId: "mf30-restore-heading",
        availableActions: [],
        statusMessageId: "td006:entry:no-effect",
        statusMessage: "The fresh Interval Works route was not accepted. Exact Manyfold Return remains.",
        privateWorkCleared: true,
        transientWorkCleared: true,
        cityStateDelta: null,
        externalStateDelta: null,
        successor: null,
        replayedEvents: [],
        focusIntent: { group: "mf30_restore", target: "mf30-restore-heading" },
      };

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
      status: "remediation_required",
      answerIncluded: false,
      failedIds: Object.freeze([...failed]),
      state: setGroup("iw20_repair", {
        failedPublicIds: failed,
        repairTarget: target,
        focusTarget: "iw20-repair-heading",
        statusMessageId: `td006:iw20_repair:${target}`,
        statusMessage: "The named dimensions remain incomplete. Private work was cleared; guidance contains no answer and the retry will be blank.",
      }),
    });
  };
  const finalize = (skill, form, correctness, next) => {
    const key = `${skill}:${form}`;
    attempts[key] = (attempts[key] ?? 0) + 1;
    evidence.push(evidenceRecord(skill, form, correctness, attempts[key]));
    return Object.freeze({
      status: `${form}_finalized`,
      evidenceGranted: true,
      state: setGroup(next, {
        statusMessageId: `td006:${next}:ready`,
        statusMessage: "The prior responsibility is finalized independently. The next form is genuinely blank; the works remain unchanged.",
      }),
    });
  };
  const safeReturn = (target) => {
    draft = {};
    observations = [];
    evidence = [];
    repairTarget = null;
    tokens.clear();
    return Object.freeze({
      status: target === "RP-005" ? "returned_to_manyfold_return_write_free" : "returned_to_city_threshold_write_free",
      route: Object.freeze({
        target, continuation: "continuation", cityStateDelta: null, externalStateDelta: null,
        successor: null, authorityGranted: false, externalActionEnabled: false,
        writePerformed: false, replayedEvents: Object.freeze([]),
      }),
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
      else if (form.kind === "speech") {
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
      if (action === intervalWorksActions.returnManyfold) {
        if (readPredecessorBytes() !== predecessorBytes || readThreeCurrentBytes() !== threeCurrentBytes) return reject("predecessor_changed");
        tokens.add(token);
        return safeReturn("RP-005");
      }
      if (action === intervalWorksActions.returnThreshold) {
        tokens.add(token);
        return safeReturn("CITY_THRESHOLD");
      }
      if (!predecessor || readPredecessorBytes() !== predecessorBytes || readThreeCurrentBytes() !== threeCurrentBytes) return reject("predecessor_rejected");
      if (action === intervalWorksActions.inspect) {
        tokens.add(token);
        return Object.freeze({ status: "material_order_visible_zero_evidence", evidenceGranted: false, state: setGroup("iw10_observations") });
      }
      if (Object.hasOwn(actionObservation, action)) {
        const id = actionObservation[action];
        if (observations.includes(id)) {
          state = {
            ...state,
            statusMessageId: `td006:iw10_observations:${id}:recorded`,
            statusMessage: "Recorded already; no new evidence, order, score, or world effect was created.",
            focusIntent: { group: "iw10_observations", target: observationFocus[intervalWorksObservationIds.find((candidate) => !observations.includes(candidate))] ?? "iw10-observations-heading" },
          };
          return Object.freeze({ status: "observation_recorded_idempotent", evidenceGranted: false, state: clone(state) });
        }
        tokens.add(token);
        observations.push(id);
        const complete = observations.length === 4;
        const nextId = intervalWorksObservationIds.find((candidate) => !observations.includes(candidate));
        return Object.freeze({
          status: complete ? "observations_complete_zero_learning_credit" : "observation_recorded_zero_learning_credit",
          evidenceGranted: false,
          state: setGroup(complete ? "iw20_python_primary" : "iw10_observations", {
            focusTarget: complete ? "iw20-python-primary-heading" : observationFocus[nextId],
            statusMessageId: `td006:iw10_observations:${id}:recorded`,
            statusMessage: "One physical fact was recorded within its interpretation limit. No course credit, chronology, cause, authority, or response was created.",
          }),
        });
      }
      const submit = {
        [intervalWorksActions.pythonPrimary]: ["PY-013", "primary", "iw20_python_trace", "iw20_python_primary"],
        [intervalWorksActions.pythonTrace]: ["PY-013", "trace", "iw20_python_transfer", "iw20_python_trace"],
        [intervalWorksActions.pythonTransfer]: ["PY-013", "transfer", "iw20_speech_primary", "iw20_python_transfer"],
        [intervalWorksActions.speechPrimary]: ["RP006-SPEECH-01", "primary", "iw20_speech_retrieval", "iw20_speech_primary"],
        [intervalWorksActions.speechRetrieval]: ["RP006-SPEECH-01", "retrieval", "iw20_speech_transfer", "iw20_speech_retrieval"],
        [intervalWorksActions.speechTransfer]: ["RP006-SPEECH-01", "transfer", "iw20_direction", "iw20_speech_transfer"],
      };
      if (Object.hasOwn(submit, action)) {
        const [skill, form, next, current] = submit[action];
        let firstBlank = null;
        if (skill === "PY-013" && form !== "trace" && !String(draft.learnerSource ?? "").trim()) {
          firstBlank = form === "primary" ? "iw20-python-primary-editor" : "iw20-python-transfer-editor";
        } else if (skill === "PY-013" && form === "trace") {
          firstBlank = traceDimensions.some((id) => !draft[id]) ? "iw20-python-trace-first" : null;
        } else if (skill === "RP006-SPEECH-01") {
          const complete = contract.ai901_contract.forms[form].every((item) => speechDimensions.every((dimension) => Boolean(draft[item.id]?.[dimension])));
          firstBlank = complete ? null : `iw20-speech-${form}-first`;
        }
        if (firstBlank) {
          state = {
            ...state,
            statusMessageId: `td006:${current}:required`,
            statusMessage: "Complete the first blank labelled field before submitting. No token, evidence, or answer was consumed.",
            focusIntent: { group: current, target: firstBlank },
          };
          return Object.freeze({ status: "required_field_missing", evidenceGranted: false, state: clone(state) });
        }
        const result = skill === "PY-013"
          ? form === "trace" ? evaluateIntervalWorksPythonTrace(draft) : evaluateIntervalWorksPython(form, draft.learnerSource)
          : evaluateIntervalWorksSpeech(form, draft);
        tokens.add(token);
        if (!result.passed) return fail(`${skill}:${form}`, result.failed);
        return finalize(skill, form, result.correctness, next);
      }
      if (action === intervalWorksActions.directionBoundary || action === intervalWorksActions.causationBoundary) {
        const kind = action === intervalWorksActions.directionBoundary ? "directionBoundary" : "causationBoundary";
        const form = kind === "directionBoundary" ? "direction_boundary_explanation" : "causation_boundary_explanation";
        if (!draft[kind]) {
          state = {
            ...state,
            statusMessageId: `td006:${state.activeGroup}:required`,
            statusMessage: "Complete the blank labelled explanation before submitting. No token, evidence, or answer was consumed.",
            focusIntent: { group: state.activeGroup, target: kind === "directionBoundary" ? "iw20-direction-field" : "iw20-causation-field" },
          };
          return Object.freeze({ status: "required_field_missing", evidenceGranted: false, state: clone(state) });
        }
        tokens.add(token);
        if (draft[kind] !== intervalWorksExplanationAnswers[kind]) {
          return fail(`RP006-SPEECH-01:${form}`, [kind === "directionBoundary" ? "direction_boundary" : "causation_boundary"]);
        }
        return finalize(
          "RP006-SPEECH-01",
          form,
          { [kind === "directionBoundary" ? "direction_boundary" : "causation_boundary"]: true },
          kind === "directionBoundary" ? "iw20_causation" : "iw20_review",
        );
      }
      if (action === intervalWorksActions.retry) {
        tokens.add(token);
        const target = repairTarget;
        repairTarget = null;
        const index = expectedEvidence().findIndex(([skill, form]) => `${skill}:${form}` === target);
        if (index < 0) return reject("repair_target_missing");
        return Object.freeze({
          status: "fresh_blank_retry_visible",
          state: setGroup(learningGroups[index], {
            statusMessageId: `td006:${learningGroups[index]}:retry-blank`,
            statusMessage: "A wholly blank retry is ready. No response, source, choice, case answer, or feedback carried forward.",
          }),
        });
      }
      if (action === intervalWorksActions.review) {
        if (observations.length !== 4 || evidence.length !== 8) {
          return Object.freeze({ status: "review_incomplete_recovered", state: setGroup(observations.length !== 4 ? "iw10_observations" : learningGroups[evidence.length]) });
        }
        tokens.add(token);
        return Object.freeze({
          status: "bounded_review_visible_zero_credit",
          evidenceGranted: false,
          state: setGroup("iw20_save", {
            reviewRows: [
              { id: "physical", owner: "SCENE // RECORDED PHYSICAL FACTS", state: "Four equal observations finalized; no learning substitute." },
              { id: "python", owner: "BUILDER WORK // PY-013", state: "Primary, trace, and transfer finalized independently." },
              { id: "speech", owner: "TEACHER / COURSE // RP006-SPEECH-01", state: "Primary, retrieval, and transfer finalized independently." },
              { id: "explanations", owner: "TEACHER / COURSE // BOUNDARIES", state: "Direction and causation explanations finalized separately." },
            ],
            statusMessageId: "td006:iw20_save:review-ready",
            statusMessage: "The exact bounded note is ready for explicit local save. It contains no source, answers, private work, cause, purpose, destination, or world claim.",
          }),
        });
      }
      if (action === intervalWorksActions.retrySave) {
        tokens.add(token);
        return Object.freeze({ status: "save_retry_ready_after_verified_rollback", state: setGroup("iw20_save") });
      }
      if (action === intervalWorksActions.save) {
        tokens.add(token);
        state = stateFor("iw20_transaction", observations, evidence);
        const result = adapter?.commit(buildCandidate(evidence))
          ?? { status: "failed", reason: "local_storage_unavailable", rollbackVerified: true, predecessorBytesPreserved: true };
        const predecessorsStable = readPredecessorBytes() === predecessorBytes && readThreeCurrentBytes() === threeCurrentBytes;
        const safe = result.status === "committed" ? sanitizeIntervalWorksSave(result.value) : null;
        if (!safe || !predecessorsStable) {
          const rollbackVerified = result.rollbackVerified === true && predecessorsStable;
          return Object.freeze({
            status: rollbackVerified ? "save_failed_rollback_verified" : "save_failed_rollback_unverified",
            reason: predecessorsStable ? result.reason ?? "read_back_rejected" : "predecessor_changed",
            rollbackVerified,
            predecessorBytesPreserved: predecessorsStable,
            state: setGroup(rollbackVerified ? "iw20_save_recovery" : "iw20_rollback_unverified", {
              predecessorBytesPreserved: predecessorsStable,
              statusMessageId: `td006:${rollbackVerified ? "iw20_save_recovery" : "iw20_rollback_unverified"}:failed`,
              statusMessage: rollbackVerified
                ? "The candidate did not replace the prior verified note or verified absence. Retry or return safely."
                : "Rollback or predecessor stability could not be verified. Progression is held; only safe returns remain.",
            }),
          });
        }
        record = safe;
        evidence = [...safe.evidence];
        observations = [...intervalWorksObservationIds];
        return Object.freeze({
          status: "save_committed_verified_restore",
          record: clone(record),
          predecessorBytesPreserved: true,
          state: setGroup("iw30_restore", {
            note: record.note,
            statusMessageId: "td006:iw30_restore:committed",
            statusMessage: "Exact raw and strict object read-back passed while TD-005 and TD-004 bytes remained unchanged. No event replayed and no route opened.",
          }),
        });
      }
      return reject("action_unavailable");
    },
  });
}

export const intervalWorksPublicContract = Object.freeze({
  observationIds: intervalWorksObservationIds,
  minimumTargetCssPx: 44,
  offlineOnly: true,
  noAuthority: true,
  noExamGuarantee: true,
  imageRoles: Object.freeze(["SC-07-PANORAMA-MASTER", "SC-07-CROSSSECTION-MASTER"]),
  layouts: Object.freeze(["1920x1080", "1366x768", "390x844", "768x900-effective-200"]),
});
