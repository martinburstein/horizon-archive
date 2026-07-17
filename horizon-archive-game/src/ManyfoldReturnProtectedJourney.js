import contract from "../../curriculum/readiness/RP-005/contract.json" with { type: "json" };
import { THREE_CURRENT_REACH_PROTECTED_JOURNEY_VERSION } from "./ThreeCurrentReachProtectedJourney.js";

export const MANYFOLD_RETURN_PROTECTED_JOURNEY_VERSION = "rp005.protected-journey.v1";

export const manyfoldReturnActions = Object.freeze({
  orient: "ORIENT TO MANYFOLD RETURN",
  inspectDistribution: "INSPECT EXPOSED DISTRIBUTION",
  runSummary: "RUN REPLICA SUMMARY",
  saveNote: "SAVE MANYFOLD SUMMARY",
  returnThreeCurrentReach: "RETURN TO THREE-CURRENT REACH",
  returnCityThreshold: "RETURN TO CITY THRESHOLD",
  recordContinuation: "RECORD SERVICED CONTINUATION",
});

export const manyfoldReturnPresentation = Object.freeze({
  sceneBoard: "SC-06",
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
    meaningUsesColorMotionAudioPositionOrFrequencyAlone: false,
    reducedMotionEquivalent: contract.accessibility_contract.reduced_motion_equivalent,
    deterministicFocus: contract.accessibility_contract.focus_returns_to_first_invalid_or_next_required_control,
    timeLimit: contract.accessibility_contract.time_limit,
    modalities: Object.freeze([
      "pointer", "touch", "keyboard_enter", "keyboard_space", "switch", "speech", "screen_reader",
    ]),
  }),
  referenceSmokeMaxSeconds: 300,
});

export const manyfoldReturnReferenceSources = Object.freeze({
  primary: `replica_summary = {"recurring_count": 5, "divergent_count": 2}
sealed_reading = None


def build_summary(replica_summary, sealed_reading):
    return {
        "recurring_count": replica_summary["recurring_count"],
        "divergent_count": replica_summary["divergent_count"],
        "sealed": sealed_reading,
        "judgment": None,
    }


summary = build_summary(replica_summary, sealed_reading)`,
  transfer: `replica_summary = {"recurring_count": 4, "divergent_count": 3}
sealed_reading = None


def build_summary(replica_summary, sealed_reading):
    return {
        "recurring_count": replica_summary["recurring_count"],
        "divergent_count": replica_summary["divergent_count"],
        "sealed": sealed_reading,
        "judgment": None,
    }


summary = build_summary(replica_summary, sealed_reading)`,
});

export const manyfoldReturnPythonTraceAnswers = Object.freeze({
  functionName: "build_summary",
  parameters: "replica_summary_and_sealed_reading",
  body: "construct_the_four_key_dictionary_from_parameters",
  returnValue: "return_the_nonjudgmental_summary_dictionary",
  callSite: "call_once_with_the_supplied_inputs",
  noneBoundary: "sealed_and_judgment_remain_none",
});

export const manyfoldReturnExplanationAnswers = Object.freeze({
  requestedOutput: "the_requested_output_selects_the_text_analysis_technique",
  truthBoundary: "summarization_does_not_establish_truth_or_quality",
});

const observationIds = Object.freeze([
  "recurring_exposed_trace_range",
  "bounded_divergent_trace",
  "sealed_branch_unavailable",
  "layered_stewardship_visible",
]);
const pythonCheckIds = Object.freeze([...contract.python_contract.checks]);
const aiDimensions = Object.freeze([...contract.ai901_contract.dimensions]);
const traceDimensions = Object.freeze(Object.keys(manyfoldReturnPythonTraceAnswers));
const forbiddenSourcePattern = /\b(?:import|open|print|eval|exec|system|remove|unlink|rmdir|requests|urlopen|fetch|sorted|max|min|mean)\b/i;
const unsafeFixturePattern = /private_?notes?|credentials?|endpoints?|payloads?|responses?|external_?action_?requests?|forged|stale|combined|scenery_?derived|frequency_?derived|truth_?inferred|tour_?derived/i;
const safeReturnTargets = Object.freeze({
  [manyfoldReturnActions.returnThreeCurrentReach]: "RP-004",
  [manyfoldReturnActions.returnCityThreshold]: "CITY_THRESHOLD",
});
const predecessorRelations = Object.freeze([
  "suspended_matter_porous_relation",
  "cyclic_pressure_tensioned_relation",
  "conducted_heat_jointed_relation",
]);
const predecessorEvidenceOwners = Object.freeze([
  ["PY-011", "primary"],
  ["PY-011", "retrieval"],
  ["PY-011", "transfer"],
  ["RP004-WORKLOAD-01", "primary"],
  ["RP004-WORKLOAD-01", "retrieval"],
  ["RP004-WORKLOAD-01", "transfer"],
  ["RP004-WORKLOAD-01", "modality_explanation"],
  ["RP004-WORKLOAD-01", "agentic_explanation"],
]);

function exactSet(value, expected, label) {
  if (!Array.isArray(value)
    || value.length !== expected.length
    || new Set(value).size !== expected.length
    || expected.some((item) => !value.includes(item))) {
    throw new TypeError(`${label} must contain each approved value exactly once.`);
  }
}

function parseJsonAssignment(source, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = String(source).match(new RegExp(`^\\s*${escaped}\\s*=\\s*(\\{[^\\n]*\\})\\s*$`, "m"));
  if (!match) return null;
  try {
    return JSON.parse(match[1]);
  } catch {
    return null;
  }
}

function expectedSummary(form) {
  const specification = contract.python_contract.forms[form];
  return {
    recurring_count: specification.replica_summary.recurring_count,
    divergent_count: specification.replica_summary.divergent_count,
    sealed: null,
    judgment: null,
  };
}

/**
 * Evaluates the bounded source shape without eval, browser, network, or live-world authority.
 * The RP-005 Python validator independently executes these same frozen forms with AST checks.
 */
export function evaluateManyfoldReturnPython(form, learnerSource) {
  if (!Object.hasOwn(contract.python_contract.forms, form)) {
    throw new TypeError("form must be primary or transfer.");
  }
  const source = String(learnerSource ?? "").replace(/\r/g, "");
  const specification = contract.python_contract.forms[form];
  const replicaSummary = parseJsonAssignment(source, "replica_summary");
  const exactInputs = JSON.stringify(replicaSummary) === JSON.stringify(specification.replica_summary)
    && /^\s*sealed_reading\s*=\s*None\s*$/m.test(source);
  const exactFunctionName = /def\s+build_summary\s*\(/.test(source)
    && (source.match(/def\s+build_summary\s*\(/g) ?? []).length === 1;
  const exactParameters = /def\s+build_summary\s*\(\s*replica_summary\s*,\s*sealed_reading\s*\)\s*:/.test(source);
  const exactReturn = /return\s*\{\s*["']recurring_count["']\s*:\s*replica_summary\s*\[\s*["']recurring_count["']\s*\]\s*,\s*["']divergent_count["']\s*:\s*replica_summary\s*\[\s*["']divergent_count["']\s*\]\s*,\s*["']sealed["']\s*:\s*sealed_reading\s*,\s*["']judgment["']\s*:\s*None\s*,?\s*\}/s.test(source);
  const exactCall = /^\s*summary\s*=\s*build_summary\s*\(\s*replica_summary\s*,\s*sealed_reading\s*\)\s*$/m.test(source)
    && (source.match(/build_summary\s*\(/g) ?? []).length === 2;
  const replicaMutation = /replica_summary\s*\[[^\]]+\]\s*=/.test(source);
  const sealedAssignments = source.match(/^\s*sealed_reading\s*=.*$/gm) ?? [];
  const output = exactInputs && exactReturn && exactCall ? expectedSummary(form) : null;
  const checks = {
    summary_is_dictionary: output !== null && /^\s*summary\s*=\s*build_summary/m.test(source),
    exact_keys_and_values: output !== null
      && Object.keys(output).join("|") === "recurring_count|divergent_count|sealed|judgment"
      && output.recurring_count === specification.replica_summary.recurring_count
      && output.divergent_count === specification.replica_summary.divergent_count,
    function_named_build_summary: exactFunctionName,
    exact_two_parameters: exactParameters,
    return_uses_parameters_without_inference: exactReturn,
    function_called_once_with_supplied_inputs: exactCall,
    sealed_and_judgment_remain_none: exactReturn && output?.sealed === null && output?.judgment === null,
    inputs_unchanged_and_no_forbidden_operations: exactInputs
      && !replicaMutation
      && sealedAssignments.length === 1
      && /^\s*sealed_reading\s*=\s*None\s*$/.test(sealedAssignments[0])
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

export function evaluateManyfoldReturnPythonTrace(answers) {
  const correctness = Object.fromEntries(Object.entries(manyfoldReturnPythonTraceAnswers).map(
    ([dimension, expected]) => [dimension, answers?.[dimension] === expected],
  ));
  return Object.freeze({
    correctness: Object.freeze(correctness),
    score: Object.values(correctness).filter(Boolean).length,
    passed: Object.values(correctness).every(Boolean),
  });
}

export function evaluateManyfoldReturnTextAnalysis(form, answers) {
  const cases = contract.ai901_contract.forms[form];
  if (!cases) throw new TypeError("form must be primary, retrieval, or transfer.");
  const correctness = {};
  for (const item of cases) {
    for (const dimension of aiDimensions) {
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

export const manyfoldNeutralTextInterface = Object.freeze({
  owner: "EXPEDITION COURSE",
  persistentChoiceLabels: Object.freeze([
    "Keyword extraction", "Entity detection", "Sentiment analysis", "Summarization",
  ]),
  worldContextExcluded: true,
  frequencyExcluded: true,
  answerSource: "course_authored_neutral_cases_only",
  cases: Object.freeze(Object.fromEntries(["primary", "retrieval", "transfer"].map((form) => [
    form,
    Object.freeze(contract.ai901_contract.forms[form].map((item) => Object.freeze({ id: item.id, prompt: item.prompt }))),
  ]))),
});

function prerequisitesPass(value) {
  return value?.python?.lessonId === "L-03-02"
    && value.python.skillId === "PY-012"
    && value.python.primaryScore === 8
    && value.python.traceComplete === true
    && value.python.transferScore === 8
    && value.python.masteryStatus === "mastered"
    && value?.ai901?.lessonId === "L-06-01"
    && value.ai901.objectiveId === "AI901-D1-O5"
    && value.ai901.objectiveReady === true
    && value.ai901.masteryStatus === "mastered"
    && Array.isArray(value.ai901.sourceLessonIds)
    && value.ai901.sourceLessonIds.includes("L-04-01");
}

function predecessorPasses(value, continuation) {
  return value?.version === THREE_CURRENT_REACH_PROTECTED_JOURNEY_VERSION
    && value.packetId === "RP-004"
    && value.mappingId === "RP004-A3-THREE-CURRENT-REACH"
    && value.checkpoint === "three_current_reach_complete"
    && value.continuation === continuation
    && value.cityStateDelta === null
    && value.externalStateDelta === null
    && value.successor === null
    && Array.isArray(value.note?.relations)
    && value.note.relations.length === predecessorRelations.length
    && new Set(value.note.relations).size === predecessorRelations.length
    && predecessorRelations.every((id) => value.note.relations.includes(id))
    && value.note.commonReturn === "observed_purpose_unknown"
    && value.note.correspondence === "sanitized_replicas_only"
    && value.note.purpose === null
    && Array.isArray(value.evidence)
    && value.evidence.length === predecessorEvidenceOwners.length
    && predecessorEvidenceOwners.every(([owner, form], index) => {
      const record = value.evidence[index];
      return record?.packet_id === "RP-004"
        && record.mapping_id === "RP004-A3-THREE-CURRENT-REACH"
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
    ["observations", "distribution_observations_heading"],
    ["pythonPrimary", "python_primary_heading"],
    ["pythonTrace", "python_trace_heading"],
    ["pythonTransfer", "python_transfer_heading"],
    ["textPrimary", "text_primary_heading"],
    ["textRetrieval", "text_retrieval_heading"],
    ["textTransfer", "text_transfer_heading"],
    ["requestedOutputExplanation", "requested_output_explanation"],
    ["truthBoundaryExplanation", "truth_boundary_explanation"],
    ["saved", "bounded_review_heading"],
  ];
  const entry = ordered.find(([key]) => completion[key] !== true);
  return Object.freeze({ group: entry?.[0] ?? "verified_restore", target: entry?.[1] ?? "saved_controls" });
}

function focusForBoundary(boundary) {
  const targets = {
    observations: "distribution_observations_heading",
    pythonPrimary: "python_primary_heading",
    pythonTrace: "python_trace_heading",
    pythonTransfer: "python_transfer_heading",
    textPrimary: "text_primary_heading",
    textRetrieval: "text_retrieval_heading",
    textTransfer: "text_transfer_heading",
    requestedOutputExplanation: "requested_output_explanation",
    truthBoundaryExplanation: "truth_boundary_explanation",
    saved: "bounded_review_heading",
  };
  return Object.freeze({ group: boundary, target: targets[boundary] ?? "distribution_observations_heading" });
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
    ["PY-012", "primary", pythonCheckIds],
    ["PY-012", "trace", traceDimensions],
    ["PY-012", "transfer", pythonCheckIds],
    ["RP005-TEXT-01", "primary", contract.ai901_contract.forms.primary.flatMap((item) => aiDimensions.map((dimension) => `${item.id}.${dimension}`))],
    ["RP005-TEXT-01", "retrieval", contract.ai901_contract.forms.retrieval.flatMap((item) => aiDimensions.map((dimension) => `${item.id}.${dimension}`))],
    ["RP005-TEXT-01", "transfer", contract.ai901_contract.forms.transfer.flatMap((item) => aiDimensions.map((dimension) => `${item.id}.${dimension}`))],
    ["RP005-TEXT-01", "requested_output_explanation", ["requested_output"]],
    ["RP005-TEXT-01", "truth_boundary_explanation", ["truth_boundary"]],
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
    && observationIds.every((id) => observations.includes(id));
  if (value?.version !== MANYFOLD_RETURN_PROTECTED_JOURNEY_VERSION
    || value.packetId !== contract.packet_id
    || value.mappingId !== contract.mapping_id
    || value.checkpoint !== "manyfold_return_complete"
    || value.continuation !== "continuation"
    || value.cityStateDelta !== null
    || value.externalStateDelta !== null
    || value.successor !== null
    || !observationsValid
    || value.note.recurrence !== "exposed_recurring_range_observed"
    || value.note.divergence !== "one_bounded_divergence_observed"
    || value.note.unavailable !== "sealed_branch_unavailable"
    || value.note.stewardship !== "layered_stewardship_observed"
    || value.note.replicas !== "sanitized_precomputed_only"
    || value.note.truth !== null
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
      recurrence: value.note.recurrence,
      divergence: value.note.divergence,
      unavailable: value.note.unavailable,
      stewardship: value.note.stewardship,
      replicas: value.note.replicas,
      truth: null,
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

export function createManyfoldReturnPersistenceAdapter(initialValue = null) {
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

export function deriveManyfoldReturnResume(value) {
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
    "textPrimary", "textRetrieval", "textTransfer",
    "requestedOutputExplanation", "truthBoundaryExplanation",
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
    phase: "MF-10 INSPECT DISTRIBUTION",
    completion: Object.freeze(completion),
    focusIntent: firstIncompleteFocus(completion),
    saved: null,
    transientWorkCleared: true,
    replayedEvents: Object.freeze([]),
  });
}

export function deriveManyfoldReturnSafeReturn(action) {
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
    evidenceRecord({ form: "primary", skillOrObjectiveId: "PY-012", correctness: results.pythonPrimary.checks }),
    evidenceRecord({ form: "trace", skillOrObjectiveId: "PY-012", correctness: results.pythonTrace.correctness }),
    evidenceRecord({ form: "transfer", skillOrObjectiveId: "PY-012", correctness: results.pythonTransfer.checks }),
    evidenceRecord({ form: "primary", skillOrObjectiveId: "RP005-TEXT-01", correctness: results.textPrimary.correctness }),
    evidenceRecord({ form: "retrieval", skillOrObjectiveId: "RP005-TEXT-01", correctness: results.textRetrieval.correctness }),
    evidenceRecord({ form: "transfer", skillOrObjectiveId: "RP005-TEXT-01", correctness: results.textTransfer.correctness }),
    evidenceRecord({ form: "requested_output_explanation", skillOrObjectiveId: "RP005-TEXT-01", correctness: { requested_output: true } }),
    evidenceRecord({ form: "truth_boundary_explanation", skillOrObjectiveId: "RP005-TEXT-01", correctness: { truth_boundary: true } }),
  ]);
}

/** Pure protected reference caller. It is intentionally absent from App/main and browser persistence. */
export function runManyfoldReturnProtectedJourneySmoke(fixture) {
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
    throw new TypeError("Unsafe, private, forged, stale, combined, inferred, or Tour-derived input is not accepted.");
  }
  if (!predecessorPasses(fixture.predecessor, continuation)) {
    throw new TypeError("Exact verified RP-004 completion is required.");
  }
  const earlyReturn = deriveManyfoldReturnSafeReturn(fixture.earlyReturnAction);
  if (fixture.orientAction !== manyfoldReturnActions.orient
    || fixture.inspectAction !== manyfoldReturnActions.inspectDistribution) {
    throw new TypeError("Exact separate orient and inspect actions are required.");
  }
  if (!prerequisitesPass(fixture.prerequisites)) {
    return Object.freeze({
      version: MANYFOLD_RETURN_PROTECTED_JOURNEY_VERSION,
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
  if (fixture.runAction !== manyfoldReturnActions.runSummary) {
    throw new TypeError("Exact summary action is required.");
  }
  const results = {
    pythonPrimary: evaluateManyfoldReturnPython("primary", fixture.pythonPrimarySource),
    pythonTrace: evaluateManyfoldReturnPythonTrace(fixture.pythonTraceAnswers),
    pythonTransfer: evaluateManyfoldReturnPython("transfer", fixture.pythonTransferSource),
    textPrimary: evaluateManyfoldReturnTextAnalysis("primary", fixture.textAnswers?.primary),
    textRetrieval: evaluateManyfoldReturnTextAnalysis("retrieval", fixture.textAnswers?.retrieval),
    textTransfer: evaluateManyfoldReturnTextAnalysis("transfer", fixture.textAnswers?.transfer),
  };
  const checks = [
    ["pythonPrimary", results.pythonPrimary.passed],
    ["pythonTrace", results.pythonTrace.passed],
    ["pythonTransfer", results.pythonTransfer.passed],
    ["textPrimary", results.textPrimary.passed],
    ["textRetrieval", results.textRetrieval.passed],
    ["textTransfer", results.textTransfer.passed],
  ];
  for (const [boundary, passed] of checks) {
    if (!passed) answerFreeFailure(boundary, "The current bounded check is incomplete.");
  }
  if (fixture.explanations?.requestedOutput !== manyfoldReturnExplanationAnswers.requestedOutput) {
    answerFreeFailure("requestedOutputExplanation", "Explain which property selects the technique.");
  }
  if (fixture.explanations?.truthBoundary !== manyfoldReturnExplanationAnswers.truthBoundary) {
    answerFreeFailure("truthBoundaryExplanation", "Explain the truth and quality boundary.");
  }
  if (fixture.saveAction !== manyfoldReturnActions.saveNote) {
    throw new TypeError("Exact separate atomic save action is required.");
  }
  const evidence = buildEvidence(results);
  if (!evidence.every((record) => allCorrect(record.dimension_correctness))) {
    throw new TypeError("Every evidence owner must be finalized before save.");
  }
  const candidate = {
    version: MANYFOLD_RETURN_PROTECTED_JOURNEY_VERSION,
    packetId: contract.packet_id,
    mappingId: contract.mapping_id,
    checkpoint: "manyfold_return_complete",
    continuation,
    cityStateDelta: null,
    externalStateDelta: null,
    successor: null,
    note: {
      observations: fixture.observationOrder,
      recurrence: "exposed_recurring_range_observed",
      divergence: "one_bounded_divergence_observed",
      unavailable: "sealed_branch_unavailable",
      stewardship: "layered_stewardship_observed",
      replicas: "sanitized_precomputed_only",
      truth: null,
      purpose: null,
      destination: null,
    },
    evidence,
  };
  const adapter = createManyfoldReturnPersistenceAdapter();
  const commit = adapter.write(candidate);
  if (commit.status !== "committed") throw new TypeError("Atomic save rejected the bounded evidence.");
  const restored = deriveManyfoldReturnResume(adapter.read());
  if (restored.phase !== "verified_restore" || restored.replayedEvents.length !== 0) {
    throw new TypeError("Verified replay-free restore is required.");
  }
  const returnedRoute = deriveManyfoldReturnSafeReturn(fixture.finalReturnAction);
  if (fixture.recordContinuationAction !== manyfoldReturnActions.recordContinuation) {
    throw new TypeError("Continuation may only be recorded by the exact optional action.");
  }
  const tourAdapter = createManyfoldReturnPersistenceAdapter();
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
    textPrimary: true,
    textRetrieval: true,
    textTransfer: true,
    requestedOutputExplanation: true,
    truthBoundaryExplanation: true,
    saved: true,
  };
  return Object.freeze({
    version: MANYFOLD_RETURN_PROTECTED_JOURNEY_VERSION,
    status: "protected_reference_complete",
    protected: true,
    routable: false,
    offlineOnly: true,
    browserStorageUsed: false,
    networkUsed: false,
    liveWorldRead: false,
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
      "MF-00 ARRIVE + IDLE",
      "MF-10 INSPECT DISTRIBUTION",
      "MF-20 SUMMARIZE + SAVE",
      "MF-30 VERIFY + RETURN",
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
    presentation: manyfoldReturnPresentation,
    textInterface: manyfoldNeutralTextInterface,
  });
}

export const manyfoldReturnReferenceAnswers = Object.freeze({
  text: Object.freeze(Object.fromEntries(["primary", "retrieval", "transfer"].map((form) => [
    form,
    Object.freeze(Object.fromEntries(contract.ai901_contract.forms[form].map((item) => [
      item.id,
      Object.freeze(Object.fromEntries(aiDimensions.map((dimension) => [dimension, item[dimension]]))),
    ]))),
  ]))),
  pythonTrace: manyfoldReturnPythonTraceAnswers,
  explanations: manyfoldReturnExplanationAnswers,
});
