import contract from "../../curriculum/readiness/RP-007/contract.json" with { type: "json" };
import {
  INTERVAL_WORKS_CONTROLLER_VERSION,
  INTERVAL_WORKS_RECORD_VERSION,
  INTERVAL_WORKS_SAVE_KEY,
  INTERVAL_WORKS_SHELL_VERSION,
  sanitizeIntervalWorksSave,
} from "./IntervalWorksNormal.js";
import { MANYFOLD_RETURN_SAVE_KEY } from "./ManyfoldReturnNormal.js";
import { THREE_CURRENT_REACH_SAVE_KEY } from "./ThreeCurrentReachNormal.js";

export const BRAIDED_VERGE_SHELL_VERSION = "SS-RP007-BRAIDED-VERGE-v1";
export const BRAIDED_VERGE_CONTROLLER_VERSION = "rp007.braided-verge-controller.v1";
export const BRAIDED_VERGE_ROUTE_CONTROLLER_VERSION = "td007.route-controller.v1";
export const BRAIDED_VERGE_RECORD_VERSION = "rp007.braided-verge-save.v1";
export const BRAIDED_VERGE_SAVE_KEY = "horizon-archive-rp007-braided-verge-save-v1";
export const BRAIDED_VERGE_ROUTE_GROUP = "iw30_braided_route_choice";
export const BRAIDED_VERGE_ROUTE_OWNER = "PILOT // EXPEDITION NAVIGATION";
export const BRAIDED_VERGE_TRUTHFUL_WORKSPACE_LABEL = "The course validator executes the approved file-operation plan against an isolated session-only virtual temporary file. It does not execute arbitrary Python or contact a live service.";

export const braidedVergeModalities = Object.freeze([
  "pointer", "touch", "keyboard_enter", "keyboard_space", "switch", "speech", "screen_reader",
]);

export const braidedVergeActions = Object.freeze({
  route: "PILOT // FOLLOW EXPEDITION-MARKED ADJACENT SURVEY TO BRAIDED VERGE",
  inspect: "INSPECT BRAIDED EVIDENCE",
  continuities: "RECORD DISTINCT MATERIAL CONTINUITIES",
  association: "RECORD RECURRENT EXPOSED ASSOCIATION",
  difference: "RECORD BOUNDED CONTACT DIFFERENCE",
  order: "RECORD CROSS-CUT RELATIVE ORDER",
  junction: "RECORD CLOSED JUNCTION AND STEWARDSHIP",
  pythonPrimary: "VALIDATE APPROVED FILE-OPERATION PLAN",
  pythonTrace: "SUBMIT METHOD TRACE",
  pythonTransfer: "VALIDATE FRESH FILE-OPERATION PLAN",
  visionPrimary: "SUBMIT CAPABILITY PRACTICE",
  visionRetrieval: "SUBMIT RETRIEVAL",
  visionTransfer: "SUBMIT TRANSFER",
  capabilityBoundary: "SUBMIT CAPABILITY BOUNDARY",
  relationBoundary: "SUBMIT RELATION BOUNDARY",
  retry: "RETRY BLANK FORM",
  review: "REVIEW INDEPENDENT RESPONSIBILITIES",
  save: "SAVE BOUNDED EXPEDITION NOTE",
  retrySave: "RETRY LOCAL SAVE",
  notation: "RECORD DESTINATIONLESS CONTINUATION",
  returnInterval: "RETURN TO INTERVAL WORKS",
  returnThreshold: "RETURN TO CITY THRESHOLD",
});

export const braidedVergeObservationIds = Object.freeze([
  "distinct_continuities_trace",
  "recurrent_exposed_association",
  "bounded_contact_difference",
  "crosscut_relative_order",
  "closed_junction_stewardship",
]);

export const braidedVergeWorldPlateIds = Object.freeze({
  panorama: "SC-08-PANORAMA-MASTER",
  detail: "SC-08-CONTACT-DETAIL-MASTER",
  predecessor: "SC-07-PANORAMA-MASTER",
});

export const braidedVergeRegions = Object.freeze({
  distinct_continuities_trace: Object.freeze({ id: "sc08-region-continuities", master: "panorama", x: 0.02, y: 0.03, width: 0.95, height: 0.9 }),
  recurrent_exposed_association: Object.freeze({ id: "sc08-region-association", master: "panorama", x: 0.03, y: 0.02, width: 0.72, height: 0.88 }),
  bounded_contact_difference: Object.freeze({ id: "sc08-region-difference", master: "detail", x: 0.38, y: 0.18, width: 0.32, height: 0.58 }),
  crosscut_relative_order: Object.freeze({ id: "sc08-region-order", master: "detail", x: 0.05, y: 0.12, width: 0.52, height: 0.68 }),
  closed_junction_stewardship: Object.freeze({ id: "sc08-region-junction-stewardship", master: "detail", x: 0.68, y: 0.12, width: 0.3, height: 0.7 }),
});

export const braidedVergePythonTraceAnswers = Object.freeze({
  pathObject: "pathlib_path_object",
  relativeFilename: "supplied_relative_filename_only",
  operationOrder: "write_once_then_read_once",
  writeEncoding: "write_text_utf_8",
  readEncoding: "read_text_utf_8",
  roundTrip: "restored_report_equals_supplied_report_text",
  unavailableBoundary: "closed_junction_remains_unavailable",
  unknownBoundaries: "unity_cause_and_purpose_remain_none",
});

export const braidedVergeExplanationAnswers = Object.freeze({
  capabilityBoundary: "existing_visual_input_uses_vision_new_visual_output_uses_generation",
  relationBoundary: "visible_relation_does_not_prove_unity_cause_coordination_ownership_or_purpose",
});

const pythonChecks = Object.freeze([...contract.python_contract.checks]);
const traceDimensions = Object.freeze(Object.keys(braidedVergePythonTraceAnswers));
const visionDimensions = Object.freeze([...contract.ai901_contract.dimensions]);
const topKeys = Object.freeze([
  "version", "packetId", "mappingId", "checkpoint", "continuation",
  "cityStateDelta", "externalStateDelta", "successor", "note", "evidence",
]);
const noteKeys = Object.freeze([
  "observations", "continuities", "association", "difference", "order",
  "junction", "stewardship", "replicas", "unity", "coordination", "cause",
  "ownership", "purpose", "destination",
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
const forbiddenPython = /\b(?:open|print|eval|exec|system|remove|unlink|rmdir|requests|urlopen|fetch|connect|send|subprocess|socket|pip|install|localStorage|sessionStorage|indexedDB)\b/i;

const actionObservation = Object.freeze({
  [braidedVergeActions.continuities]: braidedVergeObservationIds[0],
  [braidedVergeActions.association]: braidedVergeObservationIds[1],
  [braidedVergeActions.difference]: braidedVergeObservationIds[2],
  [braidedVergeActions.order]: braidedVergeObservationIds[3],
  [braidedVergeActions.junction]: braidedVergeObservationIds[4],
});
const observationFocus = Object.freeze({
  [braidedVergeObservationIds[0]]: "bv-observation-continuities",
  [braidedVergeObservationIds[1]]: "bv-observation-association",
  [braidedVergeObservationIds[2]]: "bv-observation-difference",
  [braidedVergeObservationIds[3]]: "bv-observation-order",
  [braidedVergeObservationIds[4]]: "bv-observation-junction",
});

const groups = Object.freeze({
  bv00_orientation: ["BV-00 ARRIVE + ORIENT", "PILOT // FIELD ORIENTATION", "bv00-orientation-heading", [braidedVergeActions.inspect]],
  bv10_observations: ["BV-10 INSPECT BRAIDED EVIDENCE", "PILOT // FIELD OBSERVATION", "bv10-observations-heading", Object.keys(actionObservation)],
  bv20_python_primary: ["BV-20 PYTHON PRIMARY", "BUILDER WORK // SANITIZED REPLICA", "bv20-python-primary-heading", [braidedVergeActions.pythonPrimary]],
  bv20_python_trace: ["BV-20 PYTHON TRACE", "TEACHER / COURSE // METHOD TRACE", "bv20-python-trace-heading", [braidedVergeActions.pythonTrace]],
  bv20_python_transfer: ["BV-20 PYTHON TRANSFER", "BUILDER WORK // SANITIZED REPLICA", "bv20-python-transfer-heading", [braidedVergeActions.pythonTransfer]],
  bv20_vision_primary: ["BV-20 VISION / GENERATION PRIMARY", "TEACHER / COURSE // CAPABILITY PRACTICE", "bv20-vision-primary-heading", [braidedVergeActions.visionPrimary]],
  bv20_vision_retrieval: ["BV-20 VISION / GENERATION RETRIEVAL", "TEACHER / COURSE // CAPABILITY PRACTICE", "bv20-vision-retrieval-heading", [braidedVergeActions.visionRetrieval]],
  bv20_vision_transfer: ["BV-20 VISION / GENERATION TRANSFER", "TEACHER / COURSE // CAPABILITY PRACTICE", "bv20-vision-transfer-heading", [braidedVergeActions.visionTransfer]],
  bv20_capability_boundary: ["BV-20 CAPABILITY BOUNDARY", "TEACHER / COURSE // EXPLANATION", "bv20-capability-heading", [braidedVergeActions.capabilityBoundary]],
  bv20_relation_boundary: ["BV-20 RELATION BOUNDARY", "TEACHER / COURSE // EXPLANATION", "bv20-relation-heading", [braidedVergeActions.relationBoundary]],
  bv20_repair: ["BV-20 PRIVATE-SAFE RECOVERY", "SYSTEM // PRIVATE-SAFE RECOVERY", "bv20-repair-heading", [braidedVergeActions.retry]],
  bv20_review: ["BV-20 CONJUNCTIVE REVIEW", "PILOT // EXPEDITION REVIEW", "bv20-review-heading", [braidedVergeActions.review]],
  bv20_save: ["BV-20 LOCAL SAVE", "PILOT // LOCAL EXPEDITION RECORD", "bv20-save-heading", [braidedVergeActions.save]],
  bv20_transaction: ["BV-20 LOCAL TRANSACTION", "SYSTEM // LOCAL TRANSACTION", "bv20-transaction-heading", []],
  bv20_save_recovery: ["BV-20 VERIFIED ROLLBACK", "SYSTEM // VERIFIED ROLLBACK", "bv20-save-recovery-heading", [braidedVergeActions.retrySave]],
  bv20_rollback_unverified: ["BV-20 TRANSACTION HOLD", "SYSTEM // TRANSACTION HOLD", "bv20-rollback-unverified-heading", []],
  bv30_restore: ["BV-30 VERIFY + RETURN", "SYSTEM // RESTORED EXPEDITION NOTE", "bv30-restore-heading", [braidedVergeActions.notation]],
});

const learningGroups = Object.freeze([
  "bv20_python_primary", "bv20_python_trace", "bv20_python_transfer",
  "bv20_vision_primary", "bv20_vision_retrieval", "bv20_vision_transfer",
  "bv20_capability_boundary", "bv20_relation_boundary",
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

function parseReportText(source) {
  const body = String(source).match(/report_text\s*=\s*\(([\s\S]*?)\)\s*report_path\.write_text/);
  if (!body) return null;
  const pieces = [];
  for (const match of body[1].matchAll(/"((?:[^"\\]|\\.)*)"/g)) {
    try {
      pieces.push(JSON.parse(`"${match[1]}"`));
    } catch {
      return null;
    }
  }
  return pieces.length ? pieces.join("") : null;
}

export function executeBraidedVergeWorkspace(form, learnerSource, options = {}) {
  const expected = contract.python_contract.forms[form];
  if (!expected) throw new TypeError("form must be primary or transfer");
  let source = String(learnerSource ?? "").replace(/\r/g, "");
  let reportText = parseReportText(source);
  let restoredText = null;
  let bytes = null;
  let restoredBytes = null;
  const workspace = new Map();
  let writeCount = 0;
  let readCount = 0;
  const expectedText = `${expected.lines.join("\n")}\n`;
  const pathMatch = source.match(/report_path\s*=\s*Path\(\s*["']([^"']+)["']\s*\)/);
  const filename = pathMatch?.[1] ?? "";
  const exactRelativePath = filename === expected.filename
    && !/[\\/]|\.\.|^[A-Za-z]:|^~|^\$|^%|^[a-z]+:/i.test(filename);
  const importCount = (source.match(/^\s*from\s+pathlib\s+import\s+Path\s*$/gm) ?? []).length;
  const writeCalls = source.match(/report_path\.write_text\s*\(\s*report_text\s*,\s*encoding\s*=\s*["']utf-8["']\s*\)/g) ?? [];
  const readCalls = source.match(/report_path\.read_text\s*\(\s*encoding\s*=\s*["']utf-8["']\s*\)/g) ?? [];
  const exactAssignments = (source.match(/^\s*report_path\s*=/gm) ?? []).length === 1
    && (source.match(/^\s*report_text\s*=/gm) ?? []).length === 1
    && (source.match(/^\s*restored_report\s*=/gm) ?? []).length === 1;
  const safeSource = importCount === 1 && exactAssignments && !forbiddenPython.test(source)
    && !/os\.|sys\.|process\.|child_process|node:|https?:|\\\\|\/[A-Za-z0-9_-]+\//i.test(source);
  let cleanupVerified = false;
  try {
    if (exactRelativePath && reportText != null && writeCalls.length === 1 && readCalls.length === 1) {
      bytes = new TextEncoder().encode(reportText);
      workspace.set(filename, bytes);
      writeCount += 1;
      restoredBytes = workspace.get(filename);
      readCount += 1;
      restoredText = new TextDecoder("utf-8", { fatal: true }).decode(restoredBytes);
    }
  } catch {
    restoredText = null;
  } finally {
    if (bytes) bytes.fill(0);
    if (restoredBytes && restoredBytes !== bytes) restoredBytes.fill(0);
    workspace.delete(filename);
    workspace.clear();
    source = "";
    reportText = null;
    restoredText = null;
    bytes = null;
    restoredBytes = null;
    cleanupVerified = workspace.size === 0 && options.simulateCleanupFailure !== true;
  }
  const checks = {
    report_path_is_path: importCount === 1 && Boolean(pathMatch) && exactRelativePath,
    exact_report_text: parseReportText(learnerSource) === expectedText,
    write_text_called_once_utf8: writeCalls.length === 1 && writeCount === 1,
    read_text_called_once_utf8: readCalls.length === 1 && readCount === 1,
    round_trip_matches: writeCount === 1 && readCount === 1 && parseReportText(learnerSource) === expectedText,
    unavailable_junction_preserved: expectedText.includes("junction=unavailable\n"),
    unity_cause_purpose_none: ["unity", "cause", "purpose"].every((key) => expectedText.includes(`${key}=None\n`)),
    no_forbidden_or_external_operations: safeSource && exactRelativePath,
  };
  const failed = pythonChecks.filter((id) => checks[id] !== true);
  if (!cleanupVerified) failed.push("workspace_cleanup_verified");
  return Object.freeze({
    form,
    correctness: Object.freeze(checks),
    failed: Object.freeze(failed),
    passed: failed.length === 0,
    cleanupVerified,
    audit: Object.freeze({
      isolated: true,
      relativePathOnly: exactRelativePath,
      writeCount,
      readCount,
      utf8: true,
      workspaceEntryCountAfterFinally: 0,
      exposedPrivateContent: false,
    }),
  });
}

export function evaluateBraidedVergePythonTrace(answers) {
  const correctness = Object.fromEntries(Object.entries(braidedVergePythonTraceAnswers)
    .map(([id, expected]) => [id, answers?.[id] === expected]));
  const failed = Object.keys(correctness).filter((id) => !correctness[id]);
  return Object.freeze({ correctness: Object.freeze(correctness), failed: Object.freeze(failed), passed: failed.length === 0 });
}

export function evaluateBraidedVergeVision(form, answers) {
  const cases = contract.ai901_contract.forms[form];
  if (!cases) throw new TypeError("form must be primary, retrieval, or transfer");
  const correctness = {};
  for (const item of cases) for (const dimension of visionDimensions) {
    correctness[`${item.id}.${dimension}`] = answers?.[item.id]?.[dimension] === item[dimension];
  }
  const failed = Object.keys(correctness).filter((id) => !correctness[id]);
  return Object.freeze({ form, correctness: Object.freeze(correctness), failed: Object.freeze(failed), passed: failed.length === 0 });
}

function evidenceRecord(skill, form, correctness, attempts = 1) {
  return Object.freeze({
    packet_id: "RP-007",
    mapping_id: "RP007-A3-BRAIDED-VERGE",
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
    ["PY-015", "primary", pythonChecks],
    ["PY-015", "trace", traceDimensions],
    ["PY-015", "transfer", pythonChecks],
    ...["primary", "retrieval", "transfer"].map((form) => [
      "RP007-VISION-GENERATION-01",
      form,
      contract.ai901_contract.forms[form].flatMap((item) => visionDimensions.map((dimension) => `${item.id}.${dimension}`)),
    ]),
    ["RP007-VISION-GENERATION-01", "capability_boundary_explanation", ["capability_boundary"]],
    ["RP007-VISION-GENERATION-01", "relation_boundary_explanation", ["relation_boundary"]],
  ];
}

function sanitizeEvidence(value) {
  if (!Array.isArray(value)) return [];
  const expected = expectedEvidence();
  const safe = [];
  for (let index = 0; index < Math.min(value.length, expected.length); index += 1) {
    const [skill, form, dimensions] = expected[index];
    const record = value[index];
    if (!exactKeys(record, evidenceKeys)
      || record.packet_id !== "RP-007" || record.mapping_id !== "RP007-A3-BRAIDED-VERGE"
      || record.skill_or_objective_id !== skill || record.form !== form
      || record.mastery_status !== "mastered"
      || !exactKeys(record.dimension_correctness, dimensions)
      || !dimensions.every((id) => record.dimension_correctness[id] === true)
      || !Number.isInteger(record.attempt_count) || record.attempt_count < 1 || record.attempt_count > 99
      || !Number.isInteger(record.hint_level) || record.hint_level < 0 || record.hint_level > 3
      || ![null, "low", "medium", "high"].includes(record.confidence)
      || !Array.isArray(record.misconception_tags)
      || !record.misconception_tags.every((tag) => contract.ai901_contract.misconception_tags.includes(tag))) break;
    safe.push(Object.freeze({
      ...record,
      dimension_correctness: Object.freeze({ ...record.dimension_correctness }),
      misconception_tags: Object.freeze([...record.misconception_tags]),
    }));
  }
  return safe;
}

export function sanitizeBraidedVergeSave(value) {
  if (!exactKeys(value, topKeys)
    || value.version !== BRAIDED_VERGE_RECORD_VERSION
    || value.packetId !== "RP-007" || value.mappingId !== "RP007-A3-BRAIDED-VERGE"
    || value.checkpoint !== "braided_verge_complete" || value.continuation !== "continuation"
    || value.cityStateDelta !== null || value.externalStateDelta !== null || value.successor !== null
    || !exactKeys(value.note, noteKeys)
    || JSON.stringify(value.note.observations) !== JSON.stringify(braidedVergeObservationIds)
    || value.note.continuities !== "distinct_visible_continuities"
    || value.note.association !== "recurrent_exposed_association"
    || value.note.difference !== "one_bounded_difference"
    || value.note.order !== "relative_order_supported"
    || value.note.junction !== "closed_junction_unavailable"
    || value.note.stewardship !== "layered_stewardship_observed"
    || value.note.replicas !== "sanitized_precomputed_only"
    || value.note.unity !== null || value.note.coordination !== null || value.note.cause !== null
    || value.note.ownership !== null || value.note.purpose !== null || value.note.destination !== null) return null;
  const evidence = sanitizeEvidence(value.evidence);
  if (evidence.length !== 8 || value.evidence.length !== 8) return null;
  return Object.freeze({
    version: BRAIDED_VERGE_RECORD_VERSION,
    packetId: "RP-007",
    mappingId: "RP007-A3-BRAIDED-VERGE",
    checkpoint: "braided_verge_complete",
    continuation: "continuation",
    cityStateDelta: null,
    externalStateDelta: null,
    successor: null,
    note: Object.freeze({
      observations: Object.freeze([...braidedVergeObservationIds]),
      continuities: "distinct_visible_continuities",
      association: "recurrent_exposed_association",
      difference: "one_bounded_difference",
      order: "relative_order_supported",
      junction: "closed_junction_unavailable",
      stewardship: "layered_stewardship_observed",
      replicas: "sanitized_precomputed_only",
      unity: null,
      coordination: null,
      cause: null,
      ownership: null,
      purpose: null,
      destination: null,
    }),
    evidence: Object.freeze(evidence),
  });
}

export function createBraidedVergeStorageAdapter(storage, predecessor = {}) {
  const readRaw = (key) => {
    try { return storage?.getItem(key) ?? null; } catch { return null; }
  };
  const strictRead = () => {
    const raw = readRaw(BRAIDED_VERGE_SAVE_KEY);
    if (raw === null) return null;
    try {
      const safe = sanitizeBraidedVergeSave(JSON.parse(raw));
      return safe && JSON.stringify(safe) === raw ? safe : null;
    } catch {
      return null;
    }
  };
  return Object.freeze({
    read: strictRead,
    commit(candidate) {
      const priorRaw = readRaw(BRAIDED_VERGE_SAVE_KEY);
      const td006Before = readRaw(INTERVAL_WORKS_SAVE_KEY);
      const td005Before = readRaw(MANYFOLD_RETURN_SAVE_KEY);
      const td004Before = readRaw(THREE_CURRENT_REACH_SAVE_KEY);
      if (td006Before !== predecessor.intervalBytes
        || td005Before !== predecessor.manyfoldBytes
        || td004Before !== predecessor.threeCurrentBytes
        || !sanitizeIntervalWorksSave(predecessor.intervalRecord)
        || JSON.stringify(predecessor.intervalRecord) !== predecessor.intervalBytes) {
        return Object.freeze({ status: "failed", reason: "predecessor_changed", rollbackVerified: true, predecessorBytesPreserved: false });
      }
      if (priorRaw !== null) {
        try {
          if (!sanitizeBraidedVergeSave(JSON.parse(priorRaw))) {
            return Object.freeze({ status: "failed", reason: "malformed_prior_record", rollbackVerified: true, predecessorBytesPreserved: true });
          }
        } catch {
          return Object.freeze({ status: "failed", reason: "malformed_prior_record", rollbackVerified: true, predecessorBytesPreserved: true });
        }
      }
      const safe = sanitizeBraidedVergeSave(candidate);
      if (!safe) return Object.freeze({ status: "failed", reason: "candidate_rejected", rollbackVerified: true, predecessorBytesPreserved: true });
      const serialized = JSON.stringify(safe);
      try {
        storage?.setItem(BRAIDED_VERGE_SAVE_KEY, serialized);
        const raw = readRaw(BRAIDED_VERGE_SAVE_KEY);
        const object = strictRead();
        if (raw !== serialized || JSON.stringify(object) !== serialized
          || readRaw(INTERVAL_WORKS_SAVE_KEY) !== td006Before
          || readRaw(MANYFOLD_RETURN_SAVE_KEY) !== td005Before
          || readRaw(THREE_CURRENT_REACH_SAVE_KEY) !== td004Before) throw new Error("read_back_mismatch");
        return Object.freeze({ status: "committed", value: object, raw, rollbackVerified: true, predecessorBytesPreserved: true });
      } catch (error) {
        try {
          if (priorRaw === null) storage?.removeItem(BRAIDED_VERGE_SAVE_KEY);
          else storage?.setItem(BRAIDED_VERGE_SAVE_KEY, priorRaw);
        } catch {
          return Object.freeze({ status: "failed", reason: "rollback_unverified", rollbackVerified: false, predecessorBytesPreserved: false });
        }
        const rollbackVerified = readRaw(BRAIDED_VERGE_SAVE_KEY) === priorRaw
          && readRaw(INTERVAL_WORKS_SAVE_KEY) === td006Before
          && readRaw(MANYFOLD_RETURN_SAVE_KEY) === td005Before
          && readRaw(THREE_CURRENT_REACH_SAVE_KEY) === td004Before;
        return Object.freeze({
          status: "failed",
          reason: rollbackVerified ? (error?.message === "read_back_mismatch" ? "read_back_mismatch" : "local_write_unavailable") : "rollback_unverified",
          rollbackVerified,
          predecessorBytesPreserved: readRaw(INTERVAL_WORKS_SAVE_KEY) === td006Before
            && readRaw(MANYFOLD_RETURN_SAVE_KEY) === td005Before
            && readRaw(THREE_CURRENT_REACH_SAVE_KEY) === td004Before,
        });
      }
    },
  });
}

function publicForm(group) {
  if (group === "bv20_python_primary" || group === "bv20_python_transfer") {
    const form = group.endsWith("primary") ? "primary" : "transfer";
    return {
      kind: "python",
      form,
      fieldIds: ["learnerSource"],
      scaffold: {
        filename: contract.python_contract.forms[form].filename,
        reportLines: [...contract.python_contract.forms[form].lines],
        interpretationLimits: ["junction=unavailable", "unity=None", "cause=None", "purpose=None"],
      },
      truthfulLabel: BRAIDED_VERGE_TRUTHFUL_WORKSPACE_LABEL,
    };
  }
  if (group === "bv20_python_trace") {
    return {
      kind: "trace",
      form: "trace",
      fieldIds: traceDimensions,
      options: Object.fromEntries(traceDimensions.map((id) => [
        id,
        [braidedVergePythonTraceAnswers[id], `review_${id}_boundary`, `do_not_infer_${id}`],
      ])),
    };
  }
  if (["bv20_vision_primary", "bv20_vision_retrieval", "bv20_vision_transfer"].includes(group)) {
    const form = group.split("_").at(-1);
    const allSignals = [...new Set(Object.values(contract.ai901_contract.forms).flat().map((item) => item.deciding_signal))];
    return {
      kind: "vision",
      form,
      cases: contract.ai901_contract.forms[form].map(({ id, prompt }) => ({ id, prompt })),
      dimensions: visionDimensions,
      options: {
        capability: ["computer_vision", "image_generation"],
        deciding_signal: allSignals,
      },
    };
  }
  if (group === "bv20_capability_boundary" || group === "bv20_relation_boundary") {
    const kind = group === "bv20_capability_boundary" ? "capabilityBoundary" : "relationBoundary";
    return {
      kind: "explanation",
      form: kind,
      fieldIds: [kind],
      options: [
        braidedVergeExplanationAnswers[kind],
        `review_${kind}_without_world_inference`,
        `do_not_infer_${kind}`,
      ],
    };
  }
  return null;
}

function sceneForGroup(group, observationId) {
  const detail = group === "bv10_observations"
    && ["bounded_contact_difference", "crosscut_relative_order", "closed_junction_stewardship"].includes(observationId);
  if (detail) {
    return {
      sceneId: "SC-08",
      masterId: braidedVergeWorldPlateIds.detail,
      role: "SC-08-CONTACT-DETAIL-MASTER",
      cropId: observationId === "bounded_contact_difference" ? "sc08-detail-difference"
        : observationId === "crosscut_relative_order" ? "sc08-detail-order"
          : "sc08-detail-junction-stewardship",
    };
  }
  return {
    sceneId: "SC-08",
    masterId: braidedVergeWorldPlateIds.panorama,
    role: "SC-08-PANORAMA-MASTER",
    cropId: group === "bv10_observations" ? "sc08-panorama-relations"
      : group.startsWith("bv20_python") ? "sc08-panorama-work"
        : group.startsWith("bv20_vision") || group.includes("boundary") ? "sc08-panorama-course"
          : group === "bv30_restore" ? "sc08-panorama-restore"
            : group.startsWith("bv20_") ? "sc08-panorama-review" : "sc08-panorama-orient",
  };
}

export function resolveBraidedVergeWorldScene(state) {
  if (state?.boardState === "SC-07" && state?.activeGroup === BRAIDED_VERGE_ROUTE_GROUP) {
    return Object.freeze({ sceneId: "SC-07", masterId: braidedVergeWorldPlateIds.predecessor, role: "SC-07-PANORAMA-MASTER", cropId: "sc07-released" });
  }
  if (state?.boardState === "SC-08" && typeof state?.activeGroup === "string" && state.activeGroup.startsWith("bv")) {
    return Object.freeze(sceneForGroup(state.activeGroup, state.sceneObservationId));
  }
  return null;
}

function stateFor(group, observations, evidence, extra = {}) {
  const [phase, owner, headingId, localActions] = groups[group];
  const returnActions = group === "bv20_transaction" ? []
    : [braidedVergeActions.returnInterval, braidedVergeActions.returnThreshold];
  return {
    shellVersion: BRAIDED_VERGE_SHELL_VERSION,
    controllerVersion: BRAIDED_VERGE_CONTROLLER_VERSION,
    packetId: "RP-007",
    mappingId: "RP007-A3-BRAIDED-VERGE",
    phase,
    boardState: "SC-08",
    activeGroup: group,
    owner,
    headingId,
    statusRegionId: "braided-verge-status",
    statusMessageId: extra.statusMessageId ?? `td007:${group}:ready`,
    statusMessage: extra.statusMessage ?? "The current bounded responsibility is ready. The world, route, authority, and external systems remain unchanged.",
    availableActions: [...localActions, ...returnActions],
    recordedObservationIds: [...observations],
    sceneObservationId: extra.sceneObservationId ?? null,
    form: publicForm(group),
    failedPublicIds: extra.failedPublicIds ?? [],
    repairTarget: extra.repairTarget ?? null,
    reviewRows: extra.reviewRows ?? [],
    note: extra.note ?? null,
    evidenceCount: evidence.length,
    privateWorkCleared: true,
    transientWorkCleared: true,
    temporaryWorkspaceCleared: true,
    cityStateDelta: null,
    externalStateDelta: null,
    successor: null,
    authorityGranted: false,
    externalActionEnabled: false,
    worldStateChanged: false,
    replayedEvents: [],
    focusIntent: { group, target: extra.focusTarget ?? headingId },
    predecessorBytesPreserved: extra.predecessorBytesPreserved,
    routeOpened: false,
  };
}

function exactIntent(intent, state) {
  return exactKeys(intent, intentKeys)
    && intent.mode === "campaign"
    && intent.shellVersion === BRAIDED_VERGE_SHELL_VERSION
    && intent.controllerVersion === BRAIDED_VERGE_CONTROLLER_VERSION
    && intent.packetId === "RP-007"
    && intent.activeGroupId === state.activeGroup
    && intent.expectedOwner === state.owner
    && state.availableActions.includes(intent.allowlistedActionId)
    && braidedVergeModalities.includes(intent.activationKind)
    && tokenOkay(intent.opaqueFreshEventToken);
}

export function createBraidedVergeIntent(state, action, activationKind, opaqueFreshEventToken) {
  return Object.freeze({
    mode: "campaign",
    shellVersion: BRAIDED_VERGE_SHELL_VERSION,
    controllerVersion: BRAIDED_VERGE_CONTROLLER_VERSION,
    packetId: "RP-007",
    activeGroupId: state?.activeGroup ?? null,
    expectedOwner: state?.owner ?? null,
    allowlistedActionId: action,
    activationKind,
    opaqueFreshEventToken,
  });
}

export function createBraidedVergeRouteIntent(action, activationKind, opaqueFreshEventToken) {
  return Object.freeze({
    mode: "campaign",
    shellVersion: INTERVAL_WORKS_SHELL_VERSION,
    controllerVersion: INTERVAL_WORKS_CONTROLLER_VERSION,
    packetId: "RP-006",
    activeGroupId: BRAIDED_VERGE_ROUTE_GROUP,
    expectedOwner: BRAIDED_VERGE_ROUTE_OWNER,
    allowlistedActionId: action,
    activationKind,
    opaqueFreshEventToken,
  });
}

function routeIntentOkay(intent) {
  return exactKeys(intent, intentKeys)
    && intent.mode === "campaign"
    && intent.shellVersion === INTERVAL_WORKS_SHELL_VERSION
    && intent.controllerVersion === INTERVAL_WORKS_CONTROLLER_VERSION
    && intent.packetId === "RP-006"
    && intent.activeGroupId === BRAIDED_VERGE_ROUTE_GROUP
    && intent.expectedOwner === BRAIDED_VERGE_ROUTE_OWNER
    && intent.allowlistedActionId === braidedVergeActions.route
    && braidedVergeModalities.includes(intent.activationKind)
    && tokenOkay(intent.opaqueFreshEventToken);
}

function buildCandidate(evidence) {
  return {
    version: BRAIDED_VERGE_RECORD_VERSION,
    packetId: "RP-007",
    mappingId: "RP007-A3-BRAIDED-VERGE",
    checkpoint: "braided_verge_complete",
    continuation: "continuation",
    cityStateDelta: null,
    externalStateDelta: null,
    successor: null,
    note: {
      observations: [...braidedVergeObservationIds],
      continuities: "distinct_visible_continuities",
      association: "recurrent_exposed_association",
      difference: "one_bounded_difference",
      order: "relative_order_supported",
      junction: "closed_junction_unavailable",
      stewardship: "layered_stewardship_observed",
      replicas: "sanitized_precomputed_only",
      unity: null,
      coordination: null,
      cause: null,
      ownership: null,
      purpose: null,
      destination: null,
    },
    evidence: clone(evidence),
  };
}

export function createBraidedVergeNormalController(options = {}) {
  const predecessor = sanitizeIntervalWorksSave(options.predecessorRecord);
  const predecessorBytes = options.predecessorBytes ?? (predecessor ? JSON.stringify(predecessor) : null);
  const readPredecessorBytes = typeof options.readPredecessorBytes === "function" ? options.readPredecessorBytes : () => predecessorBytes;
  const manyfoldBytes = options.manyfoldBytes ?? options.readManyfoldBytes?.() ?? null;
  const threeCurrentBytes = options.threeCurrentBytes ?? options.readThreeCurrentBytes?.() ?? null;
  const readManyfoldBytes = typeof options.readManyfoldBytes === "function" ? options.readManyfoldBytes : () => manyfoldBytes;
  const readThreeCurrentBytes = typeof options.readThreeCurrentBytes === "function" ? options.readThreeCurrentBytes : () => threeCurrentBytes;
  const restored = sanitizeBraidedVergeSave(options.restoredRecord);
  const predecessorsStable = () => predecessor
    && predecessor.version === INTERVAL_WORKS_RECORD_VERSION
    && predecessorBytes === JSON.stringify(predecessor)
    && readPredecessorBytes() === predecessorBytes
    && readManyfoldBytes() === manyfoldBytes
    && readThreeCurrentBytes() === threeCurrentBytes;
  const acceptedEntry = options.mode !== "demo_tour"
    && (restored ? predecessorsStable() : routeIntentOkay(options.entryIntent) && predecessorsStable());
  const adapter = options.adapter;
  const tokens = new Set();
  if (acceptedEntry && options.entryIntent?.opaqueFreshEventToken) tokens.add(options.entryIntent.opaqueFreshEventToken);
  let observations = restored ? [...braidedVergeObservationIds] : [];
  let evidence = restored ? [...restored.evidence] : [];
  let draft = {};
  let attempts = {};
  let repairTarget = null;
  let record = restored;
  let lastObservation = null;
  let state = restored && acceptedEntry
    ? stateFor("bv30_restore", observations, evidence, {
      note: restored.note,
      statusMessageId: "td007:restore:no-replay",
      statusMessage: "The exact bounded note was restored heading-first. No route, arrival, observation, evaluator, explanation, save, sound, world, or return event replayed.",
    })
    : acceptedEntry
      ? stateFor("bv00_orientation", [], [], {
        statusMessageId: "td007:bv00_orientation:ready",
        statusMessage: "Braided Verge is present as an invariant shared region. Arrival grants no observation, learning evidence, access, authority, route, or response.",
      })
      : {
        shellVersion: INTERVAL_WORKS_SHELL_VERSION,
        controllerVersion: INTERVAL_WORKS_CONTROLLER_VERSION,
        packetId: "RP-006",
        mappingId: "RP006-A3-INTERVAL-WORKS",
        phase: "IW-30 ROUTE CHOICE",
        boardState: "SC-07",
        activeGroup: BRAIDED_VERGE_ROUTE_GROUP,
        owner: BRAIDED_VERGE_ROUTE_OWNER,
        headingId: "bv-route-choice-heading",
        statusRegionId: "interval-works-status",
        statusMessageId: "td007:route:rejected:no-effect",
        statusMessage: "The Braided Verge route was not accepted. Exact Interval Works remains available and no future valid route token was spent.",
        availableActions: [],
        privateWorkCleared: true,
        transientWorkCleared: true,
        cityStateDelta: null,
        externalStateDelta: null,
        successor: null,
        worldStateChanged: false,
        replayedEvents: [],
        focusIntent: { group: BRAIDED_VERGE_ROUTE_GROUP, target: "bv-route-choice-heading" },
      };

  const setGroup = (group, extra = {}) => {
    draft = {};
    state = stateFor(group, observations, evidence, {
      sceneObservationId: lastObservation,
      ...extra,
    });
    return clone(state);
  };
  const reject = (reason) => Object.freeze({ status: "rejected", reason, tokenConsumed: false, state: clone(state) });
  const fail = (target, failed, cleanupFailure = false) => {
    attempts[target] = (attempts[target] ?? 0) + 1;
    repairTarget = target;
    return Object.freeze({
      status: cleanupFailure ? "workspace_cleanup_failed" : "remediation_required",
      answerIncluded: false,
      failedIds: Object.freeze([...failed]),
      evidenceGranted: false,
      state: setGroup("bv20_repair", {
        failedPublicIds: failed,
        repairTarget: target,
        focusTarget: "bv20-repair-heading",
        statusMessageId: cleanupFailure ? "td007:workspace:cleanup-failed" : `td007:${target}:remediation`,
        statusMessage: cleanupFailure
          ? "The temporary workspace could not be verified as cleared. Private work was discarded; retry starts blank."
          : "Only the named public dimensions remain incomplete. Private work was discarded; guidance contains no answer and retry starts blank.",
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
        statusMessageId: `td007:${next}:ready`,
        statusMessage: "The prior responsibility finalized independently. The next form is genuinely blank and the invariant world remains unchanged.",
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
      status: target === "RP-006" ? "returned_to_interval_works_write_free" : "returned_to_city_threshold_write_free",
      route: Object.freeze({
        target,
        continuation: "continuation",
        cityStateDelta: null,
        externalStateDelta: null,
        successor: null,
        authorityGranted: false,
        externalActionEnabled: false,
        writePerformed: false,
        replayedEvents: Object.freeze([]),
      }),
      state: clone(state),
    });
  };

  return Object.freeze({
    getState: () => clone(state),
    getRecord: () => clone(record),
    updateField(name, value) {
      if (!state.form || typeof name !== "string" || typeof value !== "string" || value.length > 24000) return reject("field_update_rejected");
      const form = state.form;
      if (form.kind === "python" && name === "learnerSource") draft.learnerSource = value;
      else if (form.kind === "trace" && form.fieldIds.includes(name) && form.options[name].includes(value)) draft[name] = value;
      else if (form.kind === "vision") {
        const [caseId, dimension] = name.split(".");
        if (!form.cases.some((item) => item.id === caseId)
          || !form.dimensions.includes(dimension)
          || !form.options[dimension].includes(value)) return reject("field_update_rejected");
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
      if (action === braidedVergeActions.returnInterval) {
        if (!predecessorsStable()) return reject("predecessor_changed");
        tokens.add(token);
        return safeReturn("RP-006");
      }
      if (action === braidedVergeActions.returnThreshold) {
        tokens.add(token);
        return safeReturn("CITY_THRESHOLD");
      }
      if (!predecessorsStable()) return reject("predecessor_rejected");
      if (action === braidedVergeActions.inspect) {
        tokens.add(token);
        return Object.freeze({ status: "braided_evidence_visible_zero_credit", evidenceGranted: false, state: setGroup("bv10_observations") });
      }
      if (Object.hasOwn(actionObservation, action)) {
        const id = actionObservation[action];
        lastObservation = id;
        if (observations.includes(id)) {
          tokens.add(token);
          state = {
            ...state,
            sceneObservationId: id,
            statusMessageId: `td007:observation:${id}:recorded`,
            statusMessage: "Recorded already; no new evidence, order, score, route, or world effect was created.",
            focusIntent: {
              group: "bv10_observations",
              target: observationFocus[braidedVergeObservationIds.find((candidate) => !observations.includes(candidate))]
                ?? "bv10-observations-heading",
            },
          };
          return Object.freeze({ status: "observation_recorded_idempotent", evidenceGranted: false, state: clone(state) });
        }
        tokens.add(token);
        observations.push(id);
        const complete = observations.length === 5;
        const nextId = braidedVergeObservationIds.find((candidate) => !observations.includes(candidate));
        return Object.freeze({
          status: complete ? "observations_complete_zero_learning_credit" : "observation_recorded_zero_learning_credit",
          evidenceGranted: false,
          state: setGroup(complete ? "bv20_python_primary" : "bv10_observations", {
            sceneObservationId: id,
            focusTarget: complete ? "bv20-python-primary-heading" : observationFocus[nextId],
            statusMessageId: `td007:observation:${id}:recorded`,
            statusMessage: "One bounded physical fact was recorded within its interpretation limit. No course credit, unity, cause, access, authority, route, or response was created.",
          }),
        });
      }
      const submit = {
        [braidedVergeActions.pythonPrimary]: ["PY-015", "primary", "bv20_python_trace", "bv20_python_primary"],
        [braidedVergeActions.pythonTrace]: ["PY-015", "trace", "bv20_python_transfer", "bv20_python_trace"],
        [braidedVergeActions.pythonTransfer]: ["PY-015", "transfer", "bv20_vision_primary", "bv20_python_transfer"],
        [braidedVergeActions.visionPrimary]: ["RP007-VISION-GENERATION-01", "primary", "bv20_vision_retrieval", "bv20_vision_primary"],
        [braidedVergeActions.visionRetrieval]: ["RP007-VISION-GENERATION-01", "retrieval", "bv20_vision_transfer", "bv20_vision_retrieval"],
        [braidedVergeActions.visionTransfer]: ["RP007-VISION-GENERATION-01", "transfer", "bv20_capability_boundary", "bv20_vision_transfer"],
      };
      if (Object.hasOwn(submit, action)) {
        const [skill, form, next, current] = submit[action];
        let firstBlank = null;
        if (skill === "PY-015" && form !== "trace" && !String(draft.learnerSource ?? "").trim()) {
          firstBlank = form === "primary" ? "bv20-python-primary-editor" : "bv20-python-transfer-editor";
        } else if (skill === "PY-015" && form === "trace") {
          firstBlank = traceDimensions.some((id) => !draft[id]) ? "bv20-python-trace-first" : null;
        } else if (skill === "RP007-VISION-GENERATION-01") {
          const complete = contract.ai901_contract.forms[form].every((item) => visionDimensions.every((dimension) => Boolean(draft[item.id]?.[dimension])));
          firstBlank = complete ? null : `bv20-vision-${form}-first`;
        }
        if (firstBlank) {
          state = {
            ...state,
            statusMessageId: `td007:${current}:required`,
            statusMessage: "Complete the first blank labelled field before submitting. No token, evidence, or answer was consumed.",
            focusIntent: { group: current, target: firstBlank },
          };
          return Object.freeze({ status: "required_field_missing", evidenceGranted: false, tokenConsumed: false, state: clone(state) });
        }
        const result = skill === "PY-015"
          ? form === "trace"
            ? evaluateBraidedVergePythonTrace(draft)
            : executeBraidedVergeWorkspace(form, draft.learnerSource, options.workspaceOptions?.[form])
          : evaluateBraidedVergeVision(form, draft);
        tokens.add(token);
        if (!result.passed) return fail(`${skill}:${form}`, result.failed, result.cleanupVerified === false);
        return finalize(skill, form, result.correctness, next);
      }
      if (action === braidedVergeActions.capabilityBoundary || action === braidedVergeActions.relationBoundary) {
        const kind = action === braidedVergeActions.capabilityBoundary ? "capabilityBoundary" : "relationBoundary";
        const form = kind === "capabilityBoundary" ? "capability_boundary_explanation" : "relation_boundary_explanation";
        const dimension = kind === "capabilityBoundary" ? "capability_boundary" : "relation_boundary";
        if (!draft[kind]) {
          state = {
            ...state,
            statusMessageId: `td007:${state.activeGroup}:required`,
            statusMessage: "Complete the blank labelled explanation before submitting. No token, evidence, or answer was consumed.",
            focusIntent: { group: state.activeGroup, target: kind === "capabilityBoundary" ? "bv20-capability-field" : "bv20-relation-field" },
          };
          return Object.freeze({ status: "required_field_missing", evidenceGranted: false, tokenConsumed: false, state: clone(state) });
        }
        tokens.add(token);
        if (draft[kind] !== braidedVergeExplanationAnswers[kind]) {
          return fail(`RP007-VISION-GENERATION-01:${form}`, [dimension]);
        }
        return finalize(
          "RP007-VISION-GENERATION-01",
          form,
          { [dimension]: true },
          kind === "capabilityBoundary" ? "bv20_relation_boundary" : "bv20_review",
        );
      }
      if (action === braidedVergeActions.retry) {
        tokens.add(token);
        const target = repairTarget;
        repairTarget = null;
        const index = expectedEvidence().findIndex(([skill, form]) => `${skill}:${form}` === target);
        if (index < 0) return reject("repair_target_missing");
        return Object.freeze({
          status: "fresh_blank_retry_visible",
          state: setGroup(learningGroups[index], {
            statusMessageId: `td007:${learningGroups[index]}:retry-blank`,
            statusMessage: "A wholly blank retry is ready. No source, report, result, choice, case answer, or feedback carried forward.",
          }),
        });
      }
      if (action === braidedVergeActions.review) {
        if (observations.length !== 5 || evidence.length !== 8) {
          return Object.freeze({
            status: "review_incomplete_recovered",
            evidenceGranted: false,
            state: setGroup(observations.length !== 5 ? "bv10_observations" : learningGroups[evidence.length]),
          });
        }
        tokens.add(token);
        const reviewRows = [
          ...braidedVergeObservationIds.map((id) => ({ id, owner: `PILOT // ${id}`, state: "Complete" })),
          ...expectedEvidence().map(([skill, form]) => ({ id: `${skill}:${form}`, owner: `${skill} / ${form}`, state: "Complete" })),
        ];
        return Object.freeze({
          status: "bounded_review_visible_zero_credit",
          evidenceGranted: false,
          state: setGroup("bv20_save", {
            reviewRows,
            statusMessageId: "td007:review:ready",
            statusMessage: "Thirteen independent responsibilities are complete. The strict bounded preview is ready for an explicit local-only save.",
          }),
        });
      }
      if (action === braidedVergeActions.retrySave) {
        tokens.add(token);
        return Object.freeze({ status: "save_retry_ready_after_verified_rollback", state: setGroup("bv20_save") });
      }
      if (action === braidedVergeActions.save) {
        tokens.add(token);
        state = stateFor("bv20_transaction", observations, evidence);
        const result = adapter?.commit(buildCandidate(evidence))
          ?? { status: "failed", reason: "local_storage_unavailable", rollbackVerified: true, predecessorBytesPreserved: true };
        const stable = predecessorsStable();
        const safe = result.status === "committed" ? sanitizeBraidedVergeSave(result.value) : null;
        if (!safe || !stable) {
          const rollbackVerified = result.rollbackVerified === true && stable;
          return Object.freeze({
            status: rollbackVerified ? "save_failed_rollback_verified" : "save_failed_rollback_unverified",
            reason: stable ? result.reason ?? "read_back_rejected" : "predecessor_changed",
            rollbackVerified,
            predecessorBytesPreserved: stable,
            state: setGroup(rollbackVerified ? "bv20_save_recovery" : "bv20_rollback_unverified", {
              predecessorBytesPreserved: stable,
              statusMessageId: rollbackVerified
                ? `td007:save:${result.reason ?? "failed"}:rolled-back`
                : "td007:save:rollback-unverified",
              statusMessage: rollbackVerified
                ? "The candidate did not replace the prior verified record or verified absence. Rollback and predecessor bytes were verified; retry starts without private work."
                : "Rollback or predecessor equality could not be verified. Progression is held and only safe returns remain.",
            }),
          });
        }
        record = safe;
        evidence = [...safe.evidence];
        observations = [...braidedVergeObservationIds];
        return Object.freeze({
          status: "save_committed_verified_restore",
          record: clone(record),
          predecessorBytesPreserved: true,
          state: setGroup("bv30_restore", {
            note: record.note,
            statusMessageId: "td007:save:committed",
            statusMessage: "Exact raw and strict object read-back passed while TD-006, TD-005, and TD-004 bytes remained unchanged. No earlier event replayed and no route opened.",
          }),
        });
      }
      if (action === braidedVergeActions.notation) {
        tokens.add(token);
        state = {
          ...state,
          statusMessageId: "td007:bv30_restore:destinationless-notation",
          statusMessage: "A destinationless local notation was recorded with destination=null and routeOpened=false. It grants no evidence and opens nothing.",
          focusIntent: { group: "bv30_restore", target: "bv30-restore-heading" },
        };
        return Object.freeze({ status: "destinationless_notation_zero_evidence", evidenceGranted: false, routeOpened: false, state: clone(state) });
      }
      return reject("action_unavailable");
    },
  });
}

export const braidedVergePublicContract = Object.freeze({
  observationIds: braidedVergeObservationIds,
  minimumTargetCssPx: 44,
  offlineOnly: true,
  noAuthority: true,
  noExamGuarantee: true,
  imageRoles: Object.freeze(["SC-08-PANORAMA-MASTER", "SC-08-CONTACT-DETAIL-MASTER"]),
  layouts: Object.freeze(["1920x1080", "1366x768", "390x844", "768x900-effective-200"]),
});
