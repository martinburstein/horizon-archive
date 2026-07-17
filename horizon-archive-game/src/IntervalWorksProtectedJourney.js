import contract from "../../curriculum/readiness/RP-006/contract.json" with { type: "json" };
import { MANYFOLD_RETURN_PROTECTED_JOURNEY_VERSION } from "./ManyfoldReturnProtectedJourney.js";

export const INTERVAL_WORKS_PROTECTED_JOURNEY_VERSION = "rp006.protected-journey.v1";

export const intervalWorksActions = Object.freeze({
  orient: "ORIENT TO INTERVAL WORKS",
  inspectMaterialOrder: "INSPECT MATERIAL ORDER",
  runSequence: "RUN REPLICA SEQUENCE",
  saveNote: "SAVE INTERVAL SUMMARY",
  returnManyfold: "RETURN TO MANYFOLD RETURN",
  returnCityThreshold: "RETURN TO CITY THRESHOLD",
  recordContinuation: "RECORD DESTINATIONLESS CONTINUATION",
});

export const intervalWorksPresentation = Object.freeze({
  sceneBoard: "SC-07",
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

export const intervalWorksReferenceSources = Object.freeze({
  primary: `import itertools

record_groups = [
    [{"state_id": "r1", "changed": None, "persistent": "continuity", "available": True, "cause": None}],
    [{"state_id": "r2", "changed": "vane", "persistent": "continuity", "available": True, "cause": None}],
    [{"state_id": None, "changed": None, "persistent": None, "available": False, "cause": None}],
    [{"state_id": "r4", "changed": "film", "persistent": "continuity", "available": True, "cause": None}],
]

sequence = list(itertools.chain.from_iterable(record_groups))`,
  transfer: `import itertools

record_groups = [
    [{"state_id": "s1", "changed": None, "persistent": "joint", "available": True, "cause": None}],
    [{"state_id": "s2", "changed": "ridge", "persistent": "joint", "available": True, "cause": None}],
    [{"state_id": None, "changed": None, "persistent": None, "available": False, "cause": None}],
    [{"state_id": "s4", "changed": "coating", "persistent": "joint", "available": True, "cause": None}],
]

sequence = list(itertools.chain.from_iterable(record_groups))`,
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

const observationIds = Object.freeze([
  "overlap_crosscut_relative_order",
  "changed_persistent_feature_pair",
  "closed_interval_unavailable",
  "layered_stewardship_visible",
]);
const pythonCheckIds = Object.freeze([...contract.python_contract.checks]);
const speechDimensions = Object.freeze([...contract.ai901_contract.dimensions]);
const traceDimensions = Object.freeze(Object.keys(intervalWorksPythonTraceAnswers));
const forbiddenSourcePattern = /\b(?:open|print|eval|exec|system|remove|unlink|rmdir|requests|urlopen|fetch|sorted|reversed)\b/i;
const unsafeFixturePattern = /private_?notes?|credentials?|endpoints?|payloads?|responses?|external_?action_?requests?|forged|stale|combined|scene_?derived|sound_?derived|tour_?derived|gap_?filled|cause_?inferred|duration_?inferred|authorship_?inferred|purpose_?inferred/i;
const safeReturnTargets = Object.freeze({
  [intervalWorksActions.returnManyfold]: "RP-005",
  [intervalWorksActions.returnCityThreshold]: "CITY_THRESHOLD",
});
const predecessorObservations = Object.freeze([
  "recurring_exposed_trace_range",
  "bounded_divergent_trace",
  "sealed_branch_unavailable",
  "layered_stewardship_visible",
]);
const predecessorEvidenceOwners = Object.freeze([
  ["PY-012", "primary"],
  ["PY-012", "trace"],
  ["PY-012", "transfer"],
  ["RP005-TEXT-01", "primary"],
  ["RP005-TEXT-01", "retrieval"],
  ["RP005-TEXT-01", "transfer"],
  ["RP005-TEXT-01", "requested_output_explanation"],
  ["RP005-TEXT-01", "truth_boundary_explanation"],
]);

function exactSet(value, expected, label) {
  if (!Array.isArray(value)
    || value.length !== expected.length
    || new Set(value).size !== expected.length
    || expected.some((item) => !value.includes(item))) {
    throw new TypeError(`${label} must contain each approved value exactly once.`);
  }
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

/**
 * Evaluates the bounded source shape without eval, browser, network, or live-world authority.
 * The frozen RP-006 validator independently parses and executes the same references with Python AST/runtime checks.
 */
export function evaluateIntervalWorksPython(form, learnerSource) {
  if (!Object.hasOwn(contract.python_contract.forms, form)) {
    throw new TypeError("form must be primary or transfer.");
  }
  const source = String(learnerSource ?? "").replace(/\r/g, "");
  const expected = contract.python_contract.forms[form];
  const records = parseRecords(source);
  const sourceOrder = records.map((record) => record.state_id);
  const exactKeys = records.length === 4
    && records.every((record) => Object.keys(record).join("|") === "state_id|changed|persistent|available|cause");
  const exactImport = (source.match(/^\s*import\s+itertools\s*$/gm) ?? []).length === 1
    && !/^\s*(?:from\s+itertools|import\s+[^\n,]+,)/m.test(source);
  const chainCalls = source.match(/itertools\.chain\.from_iterable\s*\(\s*record_groups\s*\)/g) ?? [];
  const exactListCall = /^\s*sequence\s*=\s*list\s*\(\s*itertools\.chain\.from_iterable\s*\(\s*record_groups\s*\)\s*\)\s*$/m.test(source)
    && chainCalls.length === 1;
  const recordMutation = /record_groups\s*\[[^\n=]+\]\s*=|record_groups\.(?:append|extend|insert|sort|reverse|clear|pop|remove)\s*\(/.test(source);
  const extraAssignments = (source.match(/^\s*record_groups\s*=/gm) ?? []).length !== 1
    || (source.match(/^\s*sequence\s*=/gm) ?? []).length !== 1;
  const checks = {
    sequence_is_list: exactListCall,
    exact_source_order: JSON.stringify(sourceOrder) === JSON.stringify(expected.state_ids),
    exact_record_keys: exactKeys,
    changed_and_persistent_preserved: JSON.stringify(records.map((record) => record.changed)) === JSON.stringify(expected.changed)
      && JSON.stringify(records.map((record) => record.persistent)) === JSON.stringify(expected.persistent),
    unavailable_interval_preserved: records[2]?.state_id === null && records[2]?.available === false,
    cause_remains_none_for_every_record: records.length === 4 && records.every((record) => record.cause === null),
    imports_itertools_and_calls_chain_once: exactImport && chainCalls.length === 1,
    inputs_unchanged_and_no_forbidden_operations: records.length === 4
      && !recordMutation
      && !extraAssignments
      && !forbiddenSourcePattern.test(source),
  };
  const failedCheckIds = pythonCheckIds.filter((checkId) => !checks[checkId]);
  return Object.freeze({
    form,
    checks: Object.freeze(checks),
    score: pythonCheckIds.length - failedCheckIds.length,
    passed: failedCheckIds.length === 0,
    failedCheckIds: Object.freeze(failedCheckIds),
  });
}

export function evaluateIntervalWorksPythonTrace(answers) {
  const correctness = Object.fromEntries(Object.entries(intervalWorksPythonTraceAnswers).map(
    ([dimension, expected]) => [dimension, answers?.[dimension] === expected],
  ));
  return Object.freeze({
    correctness: Object.freeze(correctness),
    score: Object.values(correctness).filter(Boolean).length,
    passed: Object.values(correctness).every(Boolean),
  });
}

export function evaluateIntervalWorksSpeech(form, answers) {
  const cases = contract.ai901_contract.forms[form];
  if (!cases) throw new TypeError("form must be primary, retrieval, or transfer.");
  const correctness = {};
  for (const item of cases) {
    for (const dimension of speechDimensions) {
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

export const intervalWorksNeutralSpeechInterface = Object.freeze({
  owner: "EXPEDITION COURSE",
  persistentChoiceLabels: Object.freeze(["Speech recognition", "Speech synthesis"]),
  worldContextExcluded: true,
  sceneOrderExcluded: true,
  sceneSoundExcluded: true,
  answerSource: "course_authored_neutral_cases_only",
  cases: Object.freeze(Object.fromEntries(["primary", "retrieval", "transfer"].map((form) => [
    form,
    Object.freeze(contract.ai901_contract.forms[form].map((item) => Object.freeze({ id: item.id, prompt: item.prompt }))),
  ]))),
});

function prerequisitesPass(value) {
  return value?.python?.lessonId === "L-03-03"
    && value.python.skillId === "PY-013"
    && value.python.primaryScore === 8
    && value.python.traceComplete === true
    && value.python.transferScore === 8
    && value.python.masteryStatus === "mastered"
    && value?.ai901?.lessonId === "L-06-01"
    && value.ai901.objectiveId === "AI901-D1-O6"
    && value.ai901.objectiveReady === true
    && value.ai901.masteryStatus === "mastered"
    && Array.isArray(value.ai901.sourceLessonIds)
    && value.ai901.sourceLessonIds.includes("L-04-02");
}

function predecessorPasses(value, continuation) {
  return value?.version === MANYFOLD_RETURN_PROTECTED_JOURNEY_VERSION
    && value.packetId === "RP-005"
    && value.mappingId === "RP005-A3-MANYFOLD-RETURN"
    && value.checkpoint === "manyfold_return_complete"
    && value.continuation === continuation
    && value.cityStateDelta === null
    && value.externalStateDelta === null
    && value.successor === null
    && Array.isArray(value.note?.observations)
    && value.note.observations.length === predecessorObservations.length
    && new Set(value.note.observations).size === predecessorObservations.length
    && predecessorObservations.every((id) => value.note.observations.includes(id))
    && value.note.recurrence === "exposed_recurring_range_observed"
    && value.note.divergence === "one_bounded_divergence_observed"
    && value.note.unavailable === "sealed_branch_unavailable"
    && value.note.stewardship === "layered_stewardship_observed"
    && value.note.replicas === "sanitized_precomputed_only"
    && value.note.truth === null
    && value.note.purpose === null
    && value.note.destination === null
    && Array.isArray(value.evidence)
    && value.evidence.length === predecessorEvidenceOwners.length
    && predecessorEvidenceOwners.every(([owner, form], index) => {
      const record = value.evidence[index];
      return record?.packet_id === "RP-005"
        && record.mapping_id === "RP005-A3-MANYFOLD-RETURN"
        && record.skill_or_objective_id === owner
        && record.form === form
        && record.mastery_status === "mastered"
        && record.dimension_correctness
        && Object.values(record.dimension_correctness).length > 0
        && Object.values(record.dimension_correctness).every((correct) => correct === true);
    });
}

function firstIncompleteFocus(completion) {
  const ordered = [
    ["observations", "material_order_observations_heading"],
    ["pythonPrimary", "python_primary_heading"],
    ["pythonTrace", "python_trace_heading"],
    ["pythonTransfer", "python_transfer_heading"],
    ["speechPrimary", "speech_primary_heading"],
    ["speechRetrieval", "speech_retrieval_heading"],
    ["speechTransfer", "speech_transfer_heading"],
    ["directionBoundaryExplanation", "direction_boundary_explanation"],
    ["causationBoundaryExplanation", "causation_boundary_explanation"],
    ["saved", "bounded_review_heading"],
  ];
  const entry = ordered.find(([key]) => completion[key] !== true);
  return Object.freeze({ group: entry?.[0] ?? "verified_restore", target: entry?.[1] ?? "saved_controls" });
}

function focusForBoundary(boundary) {
  const targets = {
    observations: "material_order_observations_heading",
    pythonPrimary: "python_primary_heading",
    pythonTrace: "python_trace_heading",
    pythonTransfer: "python_transfer_heading",
    speechPrimary: "speech_primary_heading",
    speechRetrieval: "speech_retrieval_heading",
    speechTransfer: "speech_transfer_heading",
    directionBoundaryExplanation: "direction_boundary_explanation",
    causationBoundaryExplanation: "causation_boundary_explanation",
    saved: "bounded_review_heading",
  };
  return Object.freeze({ group: boundary, target: targets[boundary] ?? "material_order_observations_heading" });
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
    ["PY-013", "primary", pythonCheckIds],
    ["PY-013", "trace", traceDimensions],
    ["PY-013", "transfer", pythonCheckIds],
    ["RP006-SPEECH-01", "primary", contract.ai901_contract.forms.primary.flatMap((item) => speechDimensions.map((dimension) => `${item.id}.${dimension}`))],
    ["RP006-SPEECH-01", "retrieval", contract.ai901_contract.forms.retrieval.flatMap((item) => speechDimensions.map((dimension) => `${item.id}.${dimension}`))],
    ["RP006-SPEECH-01", "transfer", contract.ai901_contract.forms.transfer.flatMap((item) => speechDimensions.map((dimension) => `${item.id}.${dimension}`))],
    ["RP006-SPEECH-01", "direction_boundary_explanation", ["direction_boundary"]],
    ["RP006-SPEECH-01", "causation_boundary_explanation", ["causation_boundary"]],
  ];
}

function sanitizeSave(value) {
  if (/learner_source|raw_case_answers|free_form_reasoning|private_notes?|identity_content|credentials?|endpoints?|payloads?|responses?|source_content|exam_item_text|external_action_requests?/i.test(JSON.stringify(value ?? {}))) {
    return null;
  }
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
  if (value?.version !== INTERVAL_WORKS_PROTECTED_JOURNEY_VERSION
    || value.packetId !== contract.packet_id
    || value.mappingId !== contract.mapping_id
    || value.checkpoint !== "interval_works_complete"
    || value.continuation !== "continuation"
    || value.cityStateDelta !== null
    || value.externalStateDelta !== null
    || value.successor !== null
    || !observationsValid
    || value.note.relativeOrder !== "exposed_source_order_preserved"
    || value.note.changed !== "one_visible_change_observed"
    || value.note.persistent !== "one_feature_persists"
    || value.note.unavailable !== "closed_interval_unavailable"
    || value.note.stewardship !== "layered_stewardship_observed"
    || value.note.replicas !== "sanitized_precomputed_only"
    || value.note.gap !== "explicit_unavailable_record"
    || value.note.cause !== null
    || value.note.purpose !== null
    || value.note.destination !== null
    || !evidenceValid) {
    return null;
  }
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
      relativeOrder: value.note.relativeOrder,
      changed: value.note.changed,
      persistent: value.note.persistent,
      unavailable: value.note.unavailable,
      stewardship: value.note.stewardship,
      replicas: value.note.replicas,
      gap: value.note.gap,
      cause: null,
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

export function createIntervalWorksPersistenceAdapter(initialValue = null) {
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

export function deriveIntervalWorksResume(value) {
  const saved = sanitizeSave(value);
  if (saved) {
    return Object.freeze({
      phase: "verified_restore",
      completion: Object.freeze({ saved: true }),
      focusIntent: Object.freeze({ group: "verified_restore", target: "saved_controls" }),
      saved,
      transientWorkCleared: true,
      replayedEvents: Object.freeze([]),
    });
  }
  const ordered = [
    "pythonPrimary", "pythonTrace", "pythonTransfer",
    "speechPrimary", "speechRetrieval", "speechTransfer",
    "directionBoundaryExplanation", "causationBoundaryExplanation",
  ];
  const completion = { observations: false };
  let gapFound = false;
  for (const key of ordered) {
    const finalized = value?.finalized?.[key] === true;
    if (gapFound || !finalized) {
      gapFound = true;
      completion[key] = false;
    } else {
      completion[key] = true;
    }
  }
  return Object.freeze({
    phase: "IW-10 INSPECT MATERIAL ORDER",
    completion: Object.freeze(completion),
    focusIntent: firstIncompleteFocus(completion),
    saved: null,
    transientWorkCleared: true,
    replayedEvents: Object.freeze([]),
  });
}

export function deriveIntervalWorksSafeReturn(action) {
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
    focusIntent: focusForBoundary(boundary),
  });
  throw error;
}

function allCorrect(correctness) {
  return Object.values(correctness).every(Boolean);
}

function buildEvidence(results) {
  return Object.freeze([
    evidenceRecord({ form: "primary", skillOrObjectiveId: "PY-013", correctness: results.pythonPrimary.checks }),
    evidenceRecord({ form: "trace", skillOrObjectiveId: "PY-013", correctness: results.pythonTrace.correctness }),
    evidenceRecord({ form: "transfer", skillOrObjectiveId: "PY-013", correctness: results.pythonTransfer.checks }),
    evidenceRecord({ form: "primary", skillOrObjectiveId: "RP006-SPEECH-01", correctness: results.speechPrimary.correctness }),
    evidenceRecord({ form: "retrieval", skillOrObjectiveId: "RP006-SPEECH-01", correctness: results.speechRetrieval.correctness }),
    evidenceRecord({ form: "transfer", skillOrObjectiveId: "RP006-SPEECH-01", correctness: results.speechTransfer.correctness }),
    evidenceRecord({ form: "direction_boundary_explanation", skillOrObjectiveId: "RP006-SPEECH-01", correctness: { direction_boundary: true } }),
    evidenceRecord({ form: "causation_boundary_explanation", skillOrObjectiveId: "RP006-SPEECH-01", correctness: { causation_boundary: true } }),
  ]);
}

/** Pure protected reference caller. It is intentionally absent from App/main and browser persistence. */
export function runIntervalWorksProtectedJourneySmoke(fixture) {
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
  }))) {
    throw new TypeError("Unsafe, private, forged, stale, combined, inferred, scene-derived, or Tour-derived input is not accepted.");
  }
  if (!predecessorPasses(fixture.predecessor, continuation)) {
    throw new TypeError("Exact verified RP-005 completion is required.");
  }
  const earlyReturn = deriveIntervalWorksSafeReturn(fixture.earlyReturnAction);
  if (fixture.orientAction !== intervalWorksActions.orient
    || fixture.inspectAction !== intervalWorksActions.inspectMaterialOrder) {
    throw new TypeError("Exact separate orient and inspect actions are required.");
  }
  if (!prerequisitesPass(fixture.prerequisites)) {
    return Object.freeze({
      version: INTERVAL_WORKS_PROTECTED_JOURNEY_VERSION,
      status: "prerequisite_hold",
      protected: true,
      routable: false,
      storyNavigationLocked: false,
      completion: Object.freeze({}),
      earlyReturn,
      cityStateDelta: null,
      externalStateDelta: null,
      successor: null,
    });
  }
  try {
    exactSet(fixture.observationOrder, observationIds, "observationOrder");
  } catch {
    answerFreeFailure("observations", "Record each supported physical observation once.");
  }
  if (fixture.runAction !== intervalWorksActions.runSequence) {
    throw new TypeError("Exact sequence action is required.");
  }
  const results = {
    pythonPrimary: evaluateIntervalWorksPython("primary", fixture.pythonPrimarySource),
    pythonTrace: evaluateIntervalWorksPythonTrace(fixture.pythonTraceAnswers),
    pythonTransfer: evaluateIntervalWorksPython("transfer", fixture.pythonTransferSource),
    speechPrimary: evaluateIntervalWorksSpeech("primary", fixture.speechAnswers?.primary),
    speechRetrieval: evaluateIntervalWorksSpeech("retrieval", fixture.speechAnswers?.retrieval),
    speechTransfer: evaluateIntervalWorksSpeech("transfer", fixture.speechAnswers?.transfer),
  };
  const checks = [
    ["pythonPrimary", results.pythonPrimary.passed],
    ["pythonTrace", results.pythonTrace.passed],
    ["pythonTransfer", results.pythonTransfer.passed],
    ["speechPrimary", results.speechPrimary.passed],
    ["speechRetrieval", results.speechRetrieval.passed],
    ["speechTransfer", results.speechTransfer.passed],
  ];
  for (const [boundary, passed] of checks) {
    if (!passed) answerFreeFailure(boundary, "The current bounded check is incomplete.");
  }
  if (fixture.explanations?.directionBoundary !== intervalWorksExplanationAnswers.directionBoundary) {
    answerFreeFailure("directionBoundaryExplanation", "Explain the input and output direction boundary.");
  }
  if (fixture.explanations?.causationBoundary !== intervalWorksExplanationAnswers.causationBoundary) {
    answerFreeFailure("causationBoundaryExplanation", "Explain the transcript causation boundary.");
  }
  if (fixture.saveAction !== intervalWorksActions.saveNote) {
    throw new TypeError("Exact separate atomic save action is required.");
  }
  const evidence = buildEvidence(results);
  if (!evidence.every((record) => allCorrect(record.dimension_correctness))) {
    throw new TypeError("Every evidence owner must be finalized before save.");
  }
  const candidate = {
    version: INTERVAL_WORKS_PROTECTED_JOURNEY_VERSION,
    packetId: contract.packet_id,
    mappingId: contract.mapping_id,
    checkpoint: "interval_works_complete",
    continuation,
    cityStateDelta: null,
    externalStateDelta: null,
    successor: null,
    note: {
      observations: fixture.observationOrder,
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
    evidence,
  };
  const adapter = createIntervalWorksPersistenceAdapter();
  const commit = adapter.write(candidate);
  if (commit.status !== "committed") throw new TypeError("Atomic save rejected the bounded evidence.");
  const restored = deriveIntervalWorksResume(adapter.read());
  if (restored.phase !== "verified_restore" || restored.replayedEvents.length !== 0) {
    throw new TypeError("Verified replay-free restore is required.");
  }
  const returnedRoute = deriveIntervalWorksSafeReturn(fixture.finalReturnAction);
  if (fixture.recordContinuationAction !== intervalWorksActions.recordContinuation) {
    throw new TypeError("Continuation may only be recorded by the exact optional action.");
  }
  const tourAdapter = createIntervalWorksPersistenceAdapter();
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
    speechPrimary: true,
    speechRetrieval: true,
    speechTransfer: true,
    directionBoundaryExplanation: true,
    causationBoundaryExplanation: true,
    saved: true,
  };
  return Object.freeze({
    version: INTERVAL_WORKS_PROTECTED_JOURNEY_VERSION,
    status: "protected_reference_complete",
    protected: true,
    routable: false,
    offlineOnly: true,
    browserStorageUsed: false,
    networkUsed: false,
    liveWorldRead: false,
    closedIntervalOpened: false,
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
      "IW-00 ARRIVE + IDLE",
      "IW-10 INSPECT MATERIAL ORDER",
      "IW-20 SEQUENCE + SAVE",
      "IW-30 VERIFY + RETURN",
    ]),
    observations: Object.freeze([...fixture.observationOrder]),
    completion: Object.freeze(completion),
    focusIntent: firstIncompleteFocus(completion),
    saved: restored.saved,
    restored: Object.freeze({
      phase: restored.phase,
      checkpoint: restored.saved.checkpoint,
      focusIntent: restored.focusIntent,
      replayedEvents: restored.replayedEvents,
    }),
    earlyReturn,
    returnedRoute,
    onwardContinuation: Object.freeze({ recorded: true, destination: null, routeOpened: false }),
    tourProbe,
    presentation: intervalWorksPresentation,
    speechInterface: intervalWorksNeutralSpeechInterface,
  });
}

export const intervalWorksReferenceAnswers = Object.freeze({
  speech: Object.freeze(Object.fromEntries(["primary", "retrieval", "transfer"].map((form) => [
    form,
    Object.freeze(Object.fromEntries(contract.ai901_contract.forms[form].map((item) => [
      item.id,
      Object.freeze(Object.fromEntries(speechDimensions.map((dimension) => [dimension, item[dimension]]))),
    ]))),
  ]))),
  pythonTrace: intervalWorksPythonTraceAnswers,
  explanations: intervalWorksExplanationAnswers,
});
