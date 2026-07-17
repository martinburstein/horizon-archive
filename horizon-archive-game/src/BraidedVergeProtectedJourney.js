import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, isAbsolute, join, normalize } from "node:path";
import contract from "../../curriculum/readiness/RP-007/contract.json" with { type: "json" };
import {
  INTERVAL_WORKS_PROTECTED_JOURNEY_VERSION,
  deriveIntervalWorksResume,
} from "./IntervalWorksProtectedJourney.js";

export const BRAIDED_VERGE_PROTECTED_JOURNEY_VERSION = "rp007.protected-journey.v1";

export const braidedVergeActions = Object.freeze({
  orient: "ORIENT TO BRAIDED VERGE",
  inspectEvidence: "INSPECT BRAIDED EVIDENCE",
  runReport: "RUN BOUNDED RELATION REPORT",
  saveNote: "SAVE BRAIDED SUMMARY",
  returnIntervalWorks: "RETURN TO INTERVAL WORKS",
  returnCityThreshold: "RETURN TO CITY THRESHOLD",
  recordContinuation: "RECORD DESTINATIONLESS INFRASTRUCTURE",
});

export const braidedVergePresentation = Object.freeze({
  sceneBoard: "SC-08",
  firstPerson: true,
  photorealistic: true,
  invariantWorld: true,
  protagonistVisible: false,
  shipVisible: false,
  representativeViewport: Object.freeze({ width: 1920, height: 1080 }),
  fullShell: Object.freeze({
    fitWithinDynamicViewport: true,
    outerHorizontalScroll: false,
    outerVerticalScroll: false,
    currentActionsVisible: true,
    worldAndActiveGroupVisibleTogether: true,
    optionalCrtConsumesFitBudget: false,
  }),
  reflow: Object.freeze({
    narrowNaturalDocumentColumn: true,
    textZoomPercent: 200,
    verticalScrollAllowed: true,
    horizontalPageEscape: false,
    semanticOrderPreserved: true,
  }),
  accessibility: Object.freeze({
    minTargetCssPx: contract.accessibility_contract.minimum_target_css_px,
    oneActiveOwnerGroup: contract.accessibility_contract.one_active_owner_message_content_action_group,
    persistentLabels: contract.accessibility_contract.persistent_labels,
    fieldAssociatedErrors: contract.accessibility_contract.field_associated_text_feedback,
    statusLiveRegion: contract.accessibility_contract.status_live_region,
    meaningUsesColorMotionAudioPositionOrSequenceAlone: false,
    reducedMotionEquivalent: contract.accessibility_contract.reduced_motion_equivalent,
    deterministicFocus: contract.accessibility_contract.focus_returns_to_first_invalid_or_next_required_control,
    timeLimit: contract.accessibility_contract.time_limit,
    modalities: Object.freeze([
      "pointer", "touch", "keyboard_enter", "keyboard_space", "switch", "speech", "screen_reader",
    ]),
  }),
  referenceSmokeMaxSeconds: 300,
});

export const braidedVergeReferenceSources = Object.freeze({
  primary: `from pathlib import Path

report_path = Path("braided_relation_report.txt")
report_text = (
    "continuities=distinct\\n"
    "association=recurrent\\n"
    "difference=bounded\\n"
    "order=relative\\n"
    "junction=unavailable\\n"
    "unity=None\\n"
    "cause=None\\n"
    "purpose=None\\n"
)
report_path.write_text(report_text, encoding="utf-8")
restored_report = report_path.read_text(encoding="utf-8")`,
  transfer: `from pathlib import Path

report_path = Path("contact_replica_note.txt")
report_text = (
    "continuities=separate\\n"
    "association=observed\\n"
    "difference=limited\\n"
    "order=supported\\n"
    "junction=unavailable\\n"
    "unity=None\\n"
    "cause=None\\n"
    "purpose=None\\n"
)
report_path.write_text(report_text, encoding="utf-8")
restored_report = report_path.read_text(encoding="utf-8")`,
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

const observationIds = Object.freeze([
  "distinct_continuities_trace",
  "recurrent_exposed_association",
  "bounded_contact_difference",
  "crosscut_relative_order",
  "closed_junction_stewardship",
]);
const pythonCheckIds = Object.freeze([...contract.python_contract.checks]);
const traceDimensions = Object.freeze(Object.keys(braidedVergePythonTraceAnswers));
const visionDimensions = Object.freeze([...contract.ai901_contract.dimensions]);
const safeReturnTargets = Object.freeze({
  [braidedVergeActions.returnIntervalWorks]: "RP-006",
  [braidedVergeActions.returnCityThreshold]: "CITY_THRESHOLD",
});
const unsafeFixturePattern = /private_?notes?|credentials?|endpoints?|payloads?|responses?|external_?action_?requests?|forged|stale|combined|scene_?derived|relation_?derived|motion_?derived|sound_?derived|tour_?derived|unknown_?filled|unity_?inferred|coordination_?inferred|cause_?inferred|ownership_?inferred|purpose_?inferred/i;
const forbiddenSourcePattern = /\b(?:open|print|eval|exec|system|remove|unlink|rmdir|requests|urlopen|fetch|connect|send|subprocess|socket|pip|install)\b/i;

function exactSet(value, expected, label) {
  if (!Array.isArray(value)
    || value.length !== expected.length
    || new Set(value).size !== expected.length
    || expected.some((item) => !value.includes(item))) {
    throw new TypeError(`${label} must contain each approved value exactly once.`);
  }
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

function evaluateFileRoundTrip(form, learnerSource) {
  const expected = contract.python_contract.forms[form];
  if (!expected) throw new TypeError("form must be primary or transfer.");
  const source = String(learnerSource ?? "").replace(/\r/g, "");
  const expectedText = `${expected.lines.join("\n")}\n`;
  const pathMatch = source.match(/report_path\s*=\s*Path\(\s*["']([^"']+)["']\s*\)/);
  const pathValue = pathMatch?.[1] ?? "";
  const importCount = (source.match(/^\s*from\s+pathlib\s+import\s+Path\s*$/gm) ?? []).length;
  const writeCalls = source.match(/report_path\.write_text\s*\(\s*report_text\s*,\s*encoding\s*=\s*["']utf-8["']\s*\)/g) ?? [];
  const readCalls = source.match(/report_path\.read_text\s*\(\s*encoding\s*=\s*["']utf-8["']\s*\)/g) ?? [];
  const parsedText = parseReportText(source);
  const relativePath = pathValue.length > 0
    && !isAbsolute(pathValue)
    && normalize(pathValue) === basename(pathValue)
    && !pathValue.includes("..");
  const exactAssignments = (source.match(/^\s*report_path\s*=/gm) ?? []).length === 1
    && (source.match(/^\s*report_text\s*=/gm) ?? []).length === 1
    && (source.match(/^\s*restored_report\s*=/gm) ?? []).length === 1;
  const safeSource = importCount === 1
    && exactAssignments
    && !forbiddenSourcePattern.test(source)
    && !/os\.|sys\.|process\.|child_process|node:|https?:|\\\\|\/[A-Za-z0-9_-]+\//i.test(source);
  let restored = null;
  let temporaryDirectory = null;
  let temporaryPath = null;
  let writeCount = 0;
  let readCount = 0;
  try {
    temporaryDirectory = mkdtempSync(join(tmpdir(), "horizon-rp007-"));
    temporaryPath = join(temporaryDirectory, pathValue || expected.filename);
    if (relativePath && parsedText != null && writeCalls.length === 1 && readCalls.length === 1) {
      writeFileSync(temporaryPath, parsedText, "utf8");
      writeCount += 1;
      restored = readFileSync(temporaryPath, "utf8");
      readCount += 1;
    }
  } finally {
    if (temporaryDirectory) rmSync(temporaryDirectory, { recursive: true, force: true });
  }
  const checks = {
    report_path_is_path: importCount === 1 && Boolean(pathMatch) && relativePath && pathValue === expected.filename,
    exact_report_text: parsedText === expectedText,
    write_text_called_once_utf8: writeCalls.length === 1 && writeCount === 1,
    read_text_called_once_utf8: readCalls.length === 1 && readCount === 1,
    round_trip_matches: restored === parsedText && parsedText === expectedText,
    unavailable_junction_preserved: restored?.includes("junction=unavailable\n") === true,
    unity_cause_purpose_none: ["unity", "cause", "purpose"].every((key) => restored?.includes(`${key}=None\n`)),
    no_forbidden_or_external_operations: safeSource && relativePath,
  };
  const failedCheckIds = pythonCheckIds.filter((checkId) => !checks[checkId]);
  return Object.freeze({
    form,
    checks: Object.freeze(checks),
    score: pythonCheckIds.length - failedCheckIds.length,
    passed: failedCheckIds.length === 0,
    failedCheckIds: Object.freeze(failedCheckIds),
    temporaryAudit: Object.freeze({
      isolated: true,
      writeCount,
      readCount,
      relativePathOnly: relativePath,
      fileCleared: temporaryPath == null || !existsSync(temporaryPath),
      directoryCleared: temporaryDirectory == null || !existsSync(temporaryDirectory),
    }),
  });
}

export function evaluateBraidedVergePython(form, learnerSource) {
  return evaluateFileRoundTrip(form, learnerSource);
}

export function evaluateBraidedVergePythonTrace(answers) {
  const correctness = Object.fromEntries(Object.entries(braidedVergePythonTraceAnswers).map(
    ([dimension, expected]) => [dimension, answers?.[dimension] === expected],
  ));
  return Object.freeze({
    correctness: Object.freeze(correctness),
    score: Object.values(correctness).filter(Boolean).length,
    passed: Object.values(correctness).every(Boolean),
  });
}

export function evaluateBraidedVergeVision(form, answers) {
  const cases = contract.ai901_contract.forms[form];
  if (!cases) throw new TypeError("form must be primary, retrieval, or transfer.");
  const correctness = {};
  for (const item of cases) {
    for (const dimension of visionDimensions) {
      correctness[`${item.id}.${dimension}`] = answers?.[item.id]?.[dimension] === item[dimension];
    }
  }
  return Object.freeze({
    form,
    correctness: Object.freeze(correctness),
    score: Object.values(correctness).filter(Boolean).length,
    passed: Object.values(correctness).every(Boolean),
  });
}

export const braidedVergeNeutralCapabilityInterface = Object.freeze({
  owner: "EXPEDITION COURSE",
  persistentChoiceLabels: Object.freeze(["Computer vision", "Image generation"]),
  worldContextExcluded: true,
  sceneRelationsExcluded: true,
  sceneMaterialMotionSoundExcluded: true,
  performsLiveVisualAnalysis: false,
  performsImageGeneration: false,
  answerSource: "course_authored_neutral_text_cases_only",
  cases: Object.freeze(Object.fromEntries(["primary", "retrieval", "transfer"].map((form) => [
    form,
    Object.freeze(contract.ai901_contract.forms[form].map((item) => Object.freeze({ id: item.id, prompt: item.prompt }))),
  ]))),
});

function prerequisitesPass(value) {
  return value?.python?.lessonId === "L-03-03"
    && value.python.skillId === "PY-015"
    && value.python.readinessStatus === "ready"
    && Array.isArray(value.python.prerequisiteSkillIds)
    && ["PY-009", "PY-012"].every((id) => value.python.prerequisiteSkillIds.includes(id))
    && value?.ai901?.lessonId === "L-06-01"
    && value.ai901.objectiveId === "AI901-D1-O7"
    && value.ai901.objectiveReady === true
    && value.ai901.readinessStatus === "ready"
    && Array.isArray(value.ai901.sourceLessonIds)
    && value.ai901.sourceLessonIds.includes("L-04-03");
}

function predecessorPasses(value, continuation) {
  const restored = deriveIntervalWorksResume(value);
  const saved = restored?.saved;
  return restored?.phase === "verified_restore"
    && saved?.version === INTERVAL_WORKS_PROTECTED_JOURNEY_VERSION
    && saved.packetId === "RP-006"
    && saved.mappingId === "RP006-A3-INTERVAL-WORKS"
    && saved.checkpoint === "interval_works_complete"
    && saved.continuation === continuation
    && saved.cityStateDelta === null
    && saved.externalStateDelta === null
    && saved.successor === null
    && saved.note?.cause === null
    && saved.note?.purpose === null
    && saved.note?.destination === null;
}

function focusForBoundary(boundary) {
  const targets = {
    observations: "braided_evidence_heading",
    pythonPrimary: "python_primary_heading",
    pythonTrace: "python_trace_heading",
    pythonTransfer: "python_transfer_heading",
    visionPrimary: "vision_primary_heading",
    visionRetrieval: "vision_retrieval_heading",
    visionTransfer: "vision_transfer_heading",
    capabilityBoundaryExplanation: "capability_boundary_explanation",
    relationBoundaryExplanation: "relation_boundary_explanation",
    saved: "bounded_review_heading",
  };
  return Object.freeze({ group: boundary, target: targets[boundary] ?? "braided_evidence_heading" });
}

function firstIncompleteFocus(completion) {
  const order = [
    "observations", "pythonPrimary", "pythonTrace", "pythonTransfer",
    "visionPrimary", "visionRetrieval", "visionTransfer",
    "capabilityBoundaryExplanation", "relationBoundaryExplanation", "saved",
  ];
  const boundary = order.find((key) => completion[key] !== true);
  return boundary
    ? focusForBoundary(boundary)
    : Object.freeze({ group: "verified_restore", target: "saved_controls" });
}

function evidenceRecord({ form, skillOrObjectiveId, correctness, attempts = 1, hints = 0, confidence = null }) {
  return Object.freeze({
    packet_id: contract.packet_id,
    mapping_id: contract.mapping_id,
    form,
    skill_or_objective_id: skillOrObjectiveId,
    dimension_correctness: Object.freeze({ ...correctness }),
    attempt_count: Math.max(0, Math.min(99, Number.isInteger(attempts) ? attempts : 0)),
    hint_level: Math.max(0, Math.min(3, Number.isInteger(hints) ? hints : 0)),
    confidence: ["low", "medium", "high"].includes(confidence) ? confidence : null,
    misconception_tags: Object.freeze([]),
    mastery_status: "mastered",
  });
}

function expectedEvidenceShape() {
  return [
    ["PY-015", "primary", pythonCheckIds],
    ["PY-015", "trace", traceDimensions],
    ["PY-015", "transfer", pythonCheckIds],
    ["RP007-VISION-GENERATION-01", "primary", contract.ai901_contract.forms.primary.flatMap((item) => visionDimensions.map((dimension) => `${item.id}.${dimension}`))],
    ["RP007-VISION-GENERATION-01", "retrieval", contract.ai901_contract.forms.retrieval.flatMap((item) => visionDimensions.map((dimension) => `${item.id}.${dimension}`))],
    ["RP007-VISION-GENERATION-01", "transfer", contract.ai901_contract.forms.transfer.flatMap((item) => visionDimensions.map((dimension) => `${item.id}.${dimension}`))],
    ["RP007-VISION-GENERATION-01", "capability_boundary_explanation", ["capability_boundary"]],
    ["RP007-VISION-GENERATION-01", "relation_boundary_explanation", ["relation_boundary"]],
  ];
}

function sanitizeSave(value) {
  if (/learner_source|report_content|raw_cases?|raw_case_answers|free_form_reasoning|private_notes?|identity_content|credentials?|endpoints?|payloads?|responses?|source_content|exam_item_text|external_action_requests?|temporary_path/i.test(JSON.stringify(value ?? {}))) return null;
  const expectedEvidence = expectedEvidenceShape();
  const evidenceValid = Array.isArray(value?.evidence)
    && value.evidence.length === expectedEvidence.length
    && expectedEvidence.every(([id, form, dimensions], index) => {
      const record = value.evidence[index];
      const correctness = record?.dimension_correctness;
      return record?.packet_id === contract.packet_id
        && record.mapping_id === contract.mapping_id
        && record.skill_or_objective_id === id
        && record.form === form
        && record.mastery_status === "mastered"
        && correctness
        && Object.keys(correctness).length === dimensions.length
        && dimensions.every((dimension) => correctness[dimension] === true);
    });
  const observations = value?.note?.observations;
  const observationsValid = Array.isArray(observations)
    && observations.length === observationIds.length
    && new Set(observations).size === observationIds.length
    && observationIds.every((id) => observations.includes(id));
  if (value?.version !== BRAIDED_VERGE_PROTECTED_JOURNEY_VERSION
    || value.packetId !== contract.packet_id
    || value.mappingId !== contract.mapping_id
    || value.checkpoint !== "braided_verge_complete"
    || value.continuation !== "continuation"
    || value.cityStateDelta !== null
    || value.externalStateDelta !== null
    || value.successor !== null
    || !observationsValid
    || value.note.continuities !== "distinct_visible_continuities"
    || value.note.association !== "recurrent_exposed_association"
    || value.note.difference !== "one_bounded_difference"
    || value.note.order !== "relative_order_supported"
    || value.note.junction !== "closed_junction_unavailable"
    || value.note.stewardship !== "layered_stewardship_observed"
    || value.note.replicas !== "sanitized_precomputed_only"
    || value.note.unity !== null
    || value.note.coordination !== null
    || value.note.cause !== null
    || value.note.ownership !== null
    || value.note.purpose !== null
    || value.note.destination !== null
    || !evidenceValid) return null;
  return Object.freeze({
    version: value.version,
    packetId: value.packetId,
    mappingId: value.mappingId,
    checkpoint: value.checkpoint,
    continuation: value.continuation,
    cityStateDelta: null,
    externalStateDelta: null,
    successor: null,
    note: Object.freeze({
      observations: Object.freeze([...observationIds]),
      continuities: value.note.continuities,
      association: value.note.association,
      difference: value.note.difference,
      order: value.note.order,
      junction: value.note.junction,
      stewardship: value.note.stewardship,
      replicas: value.note.replicas,
      unity: null,
      coordination: null,
      cause: null,
      ownership: null,
      purpose: null,
      destination: null,
    }),
    evidence: Object.freeze(value.evidence.map((record) => evidenceRecord({
      form: record.form,
      skillOrObjectiveId: record.skill_or_objective_id,
      correctness: record.dimension_correctness,
      attempts: record.attempt_count,
      hints: record.hint_level,
      confidence: record.confidence,
    }))),
  });
}

export function createBraidedVergePersistenceAdapter(initialValue = null) {
  let stored = initialValue == null ? null : sanitizeSave(initialValue);
  return Object.freeze({
    read: () => stored,
    write(value) {
      const safe = sanitizeSave(value);
      if (!safe) return Object.freeze({ status: "rejected", value: stored });
      stored = safe;
      return Object.freeze({ status: "committed", value: stored });
    },
  });
}

export function deriveBraidedVergeResume(value) {
  const saved = sanitizeSave(value);
  if (saved) {
    return Object.freeze({
      phase: "verified_restore",
      completion: Object.freeze({ saved: true }),
      focusIntent: Object.freeze({ group: "verified_restore", target: "saved_controls" }),
      saved,
      transientWorkCleared: true,
      temporaryFileCleared: true,
      replayedEvents: Object.freeze([]),
    });
  }
  const ordered = [
    "pythonPrimary", "pythonTrace", "pythonTransfer",
    "visionPrimary", "visionRetrieval", "visionTransfer",
    "capabilityBoundaryExplanation", "relationBoundaryExplanation",
  ];
  const completion = { observations: false };
  let gapFound = false;
  for (const key of ordered) {
    const finalized = value?.finalized?.[key] === true;
    if (gapFound || !finalized) {
      gapFound = true;
      completion[key] = false;
    } else completion[key] = true;
  }
  return Object.freeze({
    phase: "BV-10 INSPECT BRAIDED EVIDENCE",
    completion: Object.freeze(completion),
    focusIntent: firstIncompleteFocus(completion),
    saved: null,
    transientWorkCleared: true,
    temporaryFileCleared: true,
    replayedEvents: Object.freeze([]),
  });
}

export function deriveBraidedVergeSafeReturn(action) {
  const target = safeReturnTargets[action];
  if (!target) throw new TypeError("An explicit approved return action is required.");
  return Object.freeze({
    target,
    continuation: "continuation",
    cityStateDelta: null,
    externalStateDelta: null,
    replayedEvents: Object.freeze([]),
    successor: null,
    authorityGranted: false,
    externalActionEnabled: false,
    temporaryFileCleared: true,
  });
}

function answerFreeFailure(boundary, message) {
  const error = new Error(message);
  error.recovery = Object.freeze({
    boundary,
    answerIncluded: false,
    retryBlank: true,
    attemptsRemaining: "unlimited",
    transientWorkCleared: true,
    temporaryFileCleared: true,
    focusIntent: focusForBoundary(boundary),
  });
  throw error;
}

function buildEvidence(results) {
  return Object.freeze([
    evidenceRecord({ form: "primary", skillOrObjectiveId: "PY-015", correctness: results.pythonPrimary.checks }),
    evidenceRecord({ form: "trace", skillOrObjectiveId: "PY-015", correctness: results.pythonTrace.correctness }),
    evidenceRecord({ form: "transfer", skillOrObjectiveId: "PY-015", correctness: results.pythonTransfer.checks }),
    evidenceRecord({ form: "primary", skillOrObjectiveId: "RP007-VISION-GENERATION-01", correctness: results.visionPrimary.correctness }),
    evidenceRecord({ form: "retrieval", skillOrObjectiveId: "RP007-VISION-GENERATION-01", correctness: results.visionRetrieval.correctness }),
    evidenceRecord({ form: "transfer", skillOrObjectiveId: "RP007-VISION-GENERATION-01", correctness: results.visionTransfer.correctness }),
    evidenceRecord({ form: "capability_boundary_explanation", skillOrObjectiveId: "RP007-VISION-GENERATION-01", correctness: { capability_boundary: true } }),
    evidenceRecord({ form: "relation_boundary_explanation", skillOrObjectiveId: "RP007-VISION-GENERATION-01", correctness: { relation_boundary: true } }),
  ]);
}

/** Protected Node-only reference caller. It is intentionally absent from App/main and browser persistence. */
export function runBraidedVergeProtectedJourneySmoke(fixture) {
  const acceptedBytes = JSON.stringify(fixture?.acceptedCampaign);
  const predecessorBytes = JSON.stringify(fixture?.predecessor);
  const tourBytes = JSON.stringify(fixture?.tour);
  const continuation = fixture?.acceptedCampaign?.continuation;
  if (continuation !== "continuation"
    || fixture.acceptedCampaign?.cityStateDelta !== null
    || fixture.acceptedCampaign?.externalStateDelta !== null
    || fixture.acceptedCampaign?.successor !== null) {
    throw new TypeError("The exact accepted campaign boundary is required.");
  }
  if (unsafeFixturePattern.test(JSON.stringify({
    privateNotes: fixture.privateNotes,
    credentials: fixture.credentials,
    endpoint: fixture.endpoint,
    flags: fixture.flags,
  }))) throw new TypeError("Unsafe, private, inferred, scene-derived, or Tour-derived input is not accepted.");
  if (!predecessorPasses(fixture.predecessor, continuation)) {
    throw new TypeError("Exact verified RP-006 completion is required.");
  }
  const earlyReturn = deriveBraidedVergeSafeReturn(fixture.earlyReturnAction);
  if (fixture.orientAction !== braidedVergeActions.orient
    || fixture.inspectAction !== braidedVergeActions.inspectEvidence) {
    throw new TypeError("Exact separate orient and inspect actions are required.");
  }
  if (!prerequisitesPass(fixture.prerequisites)) {
    return Object.freeze({
      version: BRAIDED_VERGE_PROTECTED_JOURNEY_VERSION,
      status: "prerequisite_hold",
      protected: true,
      routable: false,
      storyNavigationLocked: false,
      completion: Object.freeze({}),
      earlyReturn,
      cityStateDelta: null,
      externalStateDelta: null,
      successor: null,
      temporaryFileCleared: true,
    });
  }
  try {
    exactSet(fixture.observationOrder, observationIds, "observationOrder");
  } catch {
    answerFreeFailure("observations", "Record each supported physical observation once.");
  }
  if (fixture.runAction !== braidedVergeActions.runReport) {
    throw new TypeError("Exact bounded report action is required.");
  }
  const results = {
    pythonPrimary: evaluateBraidedVergePython("primary", fixture.pythonPrimarySource),
    pythonTrace: evaluateBraidedVergePythonTrace(fixture.pythonTraceAnswers),
    pythonTransfer: evaluateBraidedVergePython("transfer", fixture.pythonTransferSource),
    visionPrimary: evaluateBraidedVergeVision("primary", fixture.visionAnswers?.primary),
    visionRetrieval: evaluateBraidedVergeVision("retrieval", fixture.visionAnswers?.retrieval),
    visionTransfer: evaluateBraidedVergeVision("transfer", fixture.visionAnswers?.transfer),
  };
  const checks = [
    ["pythonPrimary", results.pythonPrimary.passed],
    ["pythonTrace", results.pythonTrace.passed],
    ["pythonTransfer", results.pythonTransfer.passed],
    ["visionPrimary", results.visionPrimary.passed],
    ["visionRetrieval", results.visionRetrieval.passed],
    ["visionTransfer", results.visionTransfer.passed],
  ];
  for (const [boundary, passed] of checks) {
    if (!passed) answerFreeFailure(boundary, "The current bounded check is incomplete.");
  }
  if (fixture.explanations?.capabilityBoundary !== braidedVergeExplanationAnswers.capabilityBoundary) {
    answerFreeFailure("capabilityBoundaryExplanation", "Explain the existing-input and new-output capability boundary.");
  }
  if (fixture.explanations?.relationBoundary !== braidedVergeExplanationAnswers.relationBoundary) {
    answerFreeFailure("relationBoundaryExplanation", "Explain the bounded visual-relation interpretation limit.");
  }
  if (fixture.saveAction !== braidedVergeActions.saveNote) {
    throw new TypeError("Exact separate atomic save action is required.");
  }
  const evidence = buildEvidence(results);
  if (!evidence.every((record) => Object.values(record.dimension_correctness).every(Boolean))) {
    throw new TypeError("Every evidence owner must be finalized before save.");
  }
  const candidate = {
    version: BRAIDED_VERGE_PROTECTED_JOURNEY_VERSION,
    packetId: contract.packet_id,
    mappingId: contract.mapping_id,
    checkpoint: "braided_verge_complete",
    continuation,
    cityStateDelta: null,
    externalStateDelta: null,
    successor: null,
    note: {
      observations: fixture.observationOrder,
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
    evidence,
  };
  const adapter = createBraidedVergePersistenceAdapter();
  const commit = adapter.write(candidate);
  if (commit.status !== "committed") throw new TypeError("Atomic save rejected the bounded evidence.");
  const restored = deriveBraidedVergeResume(adapter.read());
  if (restored.phase !== "verified_restore" || restored.replayedEvents.length !== 0) {
    throw new TypeError("Verified replay-free restore is required.");
  }
  const returnedRoute = deriveBraidedVergeSafeReturn(fixture.finalReturnAction);
  if (fixture.recordContinuationAction !== braidedVergeActions.recordContinuation) {
    throw new TypeError("Continuation may only be recorded by the exact optional action.");
  }
  const tourAdapter = createBraidedVergePersistenceAdapter();
  const tourProbe = Object.freeze({
    mode: fixture.tour?.mode,
    observationsFinalized: false,
    masteryFinalized: false,
    saveStatus: "tour_preview_only",
    routeUnlocked: false,
    successor: null,
    adapterValue: tourAdapter.read(),
  });
  if (JSON.stringify(fixture.acceptedCampaign) !== acceptedBytes
    || JSON.stringify(fixture.predecessor) !== predecessorBytes
    || JSON.stringify(fixture.tour) !== tourBytes) {
    throw new TypeError("Protected inputs must remain byte-stable.");
  }
  const completion = {
    observations: true,
    pythonPrimary: true,
    pythonTrace: true,
    pythonTransfer: true,
    visionPrimary: true,
    visionRetrieval: true,
    visionTransfer: true,
    capabilityBoundaryExplanation: true,
    relationBoundaryExplanation: true,
    saved: true,
  };
  return Object.freeze({
    version: BRAIDED_VERGE_PROTECTED_JOURNEY_VERSION,
    status: "protected_reference_complete",
    protected: true,
    routable: false,
    offlineOnly: true,
    browserStorageUsed: false,
    networkUsed: false,
    liveWorldRead: false,
    liveVisualAnalysisPerformed: false,
    imageGenerationPerformed: false,
    continuitiesJoined: false,
    closedJunctionOpened: false,
    environmentMutated: false,
    externalActionEnabled: false,
    authorityGranted: false,
    examCreditGranted: false,
    examGuarantee: false,
    continuation,
    cityStateDelta: null,
    externalStateDelta: null,
    worldStateChanged: false,
    successor: null,
    timeline: Object.freeze([
      "BV-00 ARRIVE + ORIENT",
      "BV-10 INSPECT BRAIDED EVIDENCE",
      "BV-20 RELATE + SAVE",
      "BV-30 VERIFY + RETURN",
    ]),
    observations: Object.freeze([...fixture.observationOrder]),
    completion: Object.freeze(completion),
    focusIntent: firstIncompleteFocus(completion),
    temporaryAudit: Object.freeze({
      primary: results.pythonPrimary.temporaryAudit,
      transfer: results.pythonTransfer.temporaryAudit,
      allCleared: [results.pythonPrimary, results.pythonTransfer].every(
        (result) => result.temporaryAudit.fileCleared && result.temporaryAudit.directoryCleared,
      ),
    }),
    saved: restored.saved,
    restored: Object.freeze({
      phase: restored.phase,
      checkpoint: restored.saved.checkpoint,
      focusIntent: restored.focusIntent,
      temporaryFileCleared: restored.temporaryFileCleared,
      replayedEvents: restored.replayedEvents,
    }),
    earlyReturn,
    returnedRoute,
    onwardContinuation: Object.freeze({ recorded: true, destination: null, routeOpened: false }),
    tourProbe,
    presentation: braidedVergePresentation,
    capabilityInterface: braidedVergeNeutralCapabilityInterface,
  });
}

export const braidedVergeReferenceAnswers = Object.freeze({
  vision: Object.freeze(Object.fromEntries(["primary", "retrieval", "transfer"].map((form) => [
    form,
    Object.freeze(Object.fromEntries(contract.ai901_contract.forms[form].map((item) => [
      item.id,
      Object.freeze(Object.fromEntries(visionDimensions.map((dimension) => [dimension, item[dimension]]))),
    ]))),
  ]))),
  pythonTrace: braidedVergePythonTraceAnswers,
  explanations: braidedVergeExplanationAnswers,
});
