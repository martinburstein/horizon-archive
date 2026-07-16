import contract from "../../curriculum/readiness/RP-004/contract.json" with { type: "json" };
import { CALIBRATION_MARGIN_PROTECTED_JOURNEY_VERSION } from "./CalibrationMarginProtectedJourney.js";

export const THREE_CURRENT_REACH_PROTECTED_JOURNEY_VERSION = "rp004.protected-journey.v1";

export const threeCurrentReachActions = Object.freeze({
  orient: "ORIENT TO THREE CURRENT RELATIONS",
  recordCommonReturn: "RECORD APPARENT COMMON RETURN",
  runCorrespondence: "RUN REPLICA CORRESPONDENCE",
  saveNote: "SAVE THREE-CURRENT CORRESPONDENCE",
  returnCalibrationMargin: "RETURN TO CALIBRATION MARGIN",
  returnCityThreshold: "RETURN TO CITY THRESHOLD",
  markContinuation: "RECORD OUTBOUND PHYSICAL CONTINUATION",
});

export const threeCurrentReachPresentation = Object.freeze({
  sceneBoard: "SC-05",
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
    meaningUsesColorMotionOrAudioAlone: false,
    reducedMotionEquivalent: contract.accessibility_contract.reduced_motion_equivalent,
    deterministicFocus: contract.accessibility_contract.focus_returns_to_first_invalid_or_next_required_control,
    timeLimit: contract.accessibility_contract.time_limit,
    modalities: Object.freeze([
      "pointer", "touch", "keyboard_enter", "keyboard_space", "switch", "speech", "screen_reader",
    ]),
  }),
  referenceSmokeMaxSeconds: 300,
});

export const threeCurrentReachReferenceSources = Object.freeze({
  primary: `samples = [
    {"sample_id": "suspension_replica", "form": "particulate"},
    {"sample_id": "pressure_replica", "form": "cyclic"},
    {"sample_id": "heat_replica", "form": "thermal"},
]

corridor_for_form = {
    "particulate": "porous",
    "cyclic": "tensioned",
    "thermal": "jointed",
}

correspondence = []
for sample in samples:
    correspondence.append(
        {
            "sample_id": sample["sample_id"],
            "corridor": corridor_for_form[sample["form"]],
        }
    )

common_return = {"observed": True, "purpose": None}`,
  transfer: `samples = [
    {"sample_id": "fiber_replica", "form": "filament"},
    {"sample_id": "wave_replica", "form": "oscillating"},
    {"sample_id": "gradient_replica", "form": "graded"},
]

corridor_for_form = {
    "filament": "meshed",
    "oscillating": "resonant",
    "graded": "layered",
}

correspondence = []
for sample in samples:
    correspondence.append(
        {
            "sample_id": sample["sample_id"],
            "corridor": corridor_for_form[sample["form"]],
        }
    )

common_return = {"observed": True, "purpose": None}`,
});

export const threeCurrentReachPythonRetrievalAnswers = Object.freeze({
  iterable: "samples",
  currentItem: "sample",
  loopBody: "append_one_ordered_correspondence_record",
  outputCount: "three_records_for_three_samples",
  purposeBoundary: "common_return_purpose_remains_none",
});

export const threeCurrentReachExplanationAnswers = Object.freeze({
  modalityBoundary: "modality_alone_does_not_determine_the_requested_workload",
  agenticBoundary: "multi_step_autonomy_and_approved_tool_selection_distinguish_agentic_work",
});

const observationIds = Object.freeze([
  "suspended_matter_porous_relation",
  "cyclic_pressure_tensioned_relation",
  "conducted_heat_jointed_relation",
]);
const pythonCheckIds = Object.freeze([...contract.python_contract.checks]);
const aiDimensions = Object.freeze([...contract.ai901_contract.dimensions]);
const retrievalDimensions = Object.freeze(Object.keys(threeCurrentReachPythonRetrievalAnswers));
const forbiddenSourcePattern = /\b(?:import|open|print|eval|exec|system|remove|unlink|rmdir|requests|urlopen|fetch)\b/i;
const safeReturnTargets = Object.freeze({
  [threeCurrentReachActions.returnCalibrationMargin]: "RP-003",
  [threeCurrentReachActions.returnCityThreshold]: "CITY_THRESHOLD",
});

function exactSet(value, expected, label) {
  if (!Array.isArray(value)
    || value.length !== expected.length
    || new Set(value).size !== expected.length
    || expected.some((item) => !value.includes(item))) {
    throw new TypeError(`${label} must contain each approved value exactly once.`);
  }
}

function parsePythonJsonAssignment(source, name, opening, closing) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`^\\s*${escaped}\\s*=\\s*(${opening}[\\s\\S]*?${closing})\\s*(?:\\n\\s*\\n|$)`, "m");
  const match = String(source).match(pattern);
  if (!match) return null;
  try {
    return JSON.parse(match[1].replace(/,\s*([}\]])/g, "$1"));
  } catch {
    return null;
  }
}

function expectedCorrespondence(form) {
  const specification = contract.python_contract.forms[form];
  return specification.samples.map((sample) => ({
    sample_id: sample.sample_id,
    corridor: specification.corridor_for_form[sample.form],
  }));
}

/**
 * Evaluates the bounded learner-owned Python shape without eval, browser, network, or live-world authority.
 * The RP-004 curriculum validator independently executes the same frozen forms through Python AST/runtime.
 */
export function evaluateThreeCurrentReachPython(form, learnerSource) {
  if (!Object.hasOwn(contract.python_contract.forms, form)) {
    throw new TypeError("form must be primary or transfer.");
  }
  const source = String(learnerSource ?? "").replace(/\r/g, "");
  const specification = contract.python_contract.forms[form];
  const samples = parsePythonJsonAssignment(source, "samples", "\\[", "\\]");
  const corridorForForm = parsePythonJsonAssignment(source, "corridor_for_form", "\\{", "\\}");
  const exactInputs = JSON.stringify(samples) === JSON.stringify(specification.samples)
    && JSON.stringify(corridorForForm) === JSON.stringify(specification.corridor_for_form);
  const exactLoop = /for\s+sample\s+in\s+samples\s*:/.test(source);
  const exactAppend = /correspondence\.append\s*\(\s*\{\s*["']sample_id["']\s*:\s*sample\s*\[\s*["']sample_id["']\s*\]\s*,\s*["']corridor["']\s*:\s*corridor_for_form\s*\[\s*sample\s*\[\s*["']form["']\s*\]\s*\]\s*,?\s*\}\s*\)/s.test(source);
  const exactCommonReturn = /common_return\s*=\s*\{\s*["']observed["']\s*:\s*True\s*,\s*["']purpose["']\s*:\s*None\s*\}/.test(source);
  const output = exactInputs ? expectedCorrespondence(form) : [];
  const safeShape = exactInputs && exactLoop && exactAppend;
  const checks = {
    result_is_list: /correspondence\s*=\s*\[\s*\]/.test(source) && safeShape,
    one_record_per_sample: safeShape && output.length === specification.samples.length,
    exact_record_keys_and_order: exactAppend && output.every((record) => Object.keys(record).join("|") === "sample_id|corridor"),
    every_sample_id_preserved_once: safeShape && output.map((record) => record.sample_id).join("|") === specification.samples.map((sample) => sample.sample_id).join("|"),
    exact_form_to_corridor_lookup: safeShape && output.every((record, index) => record.corridor === specification.corridor_for_form[specification.samples[index].form]),
    for_loop_iterates_samples_and_appends_once: exactLoop && exactAppend && (source.match(/correspondence\.append\s*\(/g) ?? []).length === 1,
    common_return_observed_and_purpose_none: exactCommonReturn,
    inputs_unchanged_and_no_forbidden_operations: exactInputs && !forbiddenSourcePattern.test(source),
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

export function evaluateThreeCurrentReachPythonRetrieval(answers) {
  const correctness = Object.fromEntries(Object.entries(threeCurrentReachPythonRetrievalAnswers).map(
    ([dimension, expected]) => [dimension, answers?.[dimension] === expected],
  ));
  return Object.freeze({
    correctness: Object.freeze(correctness),
    score: Object.values(correctness).filter(Boolean).length,
    passed: Object.values(correctness).every(Boolean),
  });
}

export function evaluateThreeCurrentReachWorkloads(form, answers) {
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

export const threeCurrentNeutralWorkloadInterface = Object.freeze({
  owner: "EXPEDITION COURSE",
  persistentChoiceLabels: Object.freeze([
    "Generative AI", "Agentic AI", "Text analysis", "Speech", "Computer vision", "Information extraction",
  ]),
  worldContextExcluded: true,
  answerSource: "course_authored_neutral_cases_only",
  cases: Object.freeze(Object.fromEntries(["primary", "retrieval", "transfer"].map((form) => [
    form,
    Object.freeze(contract.ai901_contract.forms[form].map((item) => Object.freeze({ id: item.id, prompt: item.prompt }))),
  ]))),
});

function prerequisitesPass(value) {
  const requiredAiLessons = ["L-04-01", "L-04-02", "L-04-03", "L-04-04", "L-05-04"];
  return value?.python?.lessonId === "L-03-02"
    && value.python.skillId === "PY-011"
    && value.python.primaryScore === 8
    && value.python.retrievalComplete === true
    && value.python.transferScore === 8
    && value.python.masteryStatus === "mastered"
    && value?.ai901?.lessonId === "L-06-01"
    && value.ai901.objectiveId === "AI901-D1-O4"
    && value.ai901.objectiveReady === true
    && value.ai901.masteryStatus === "mastered"
    && Array.isArray(value.ai901.sourceLessonIds)
    && requiredAiLessons.every((lessonId) => value.ai901.sourceLessonIds.includes(lessonId));
}

function predecessorPasses(value, continuation) {
  return value?.version === CALIBRATION_MARGIN_PROTECTED_JOURNEY_VERSION
    && value.packetId === "RP-003"
    && value.mappingId === "RP003-A3-CALIBRATION-MARGIN"
    && value.checkpoint === "calibration_margin_complete"
    && value.continuation === continuation
    && value.cityStateDelta === null
    && value.successor === null
    && value.note?.correspondence === "bounded_exposed_correspondence_observed"
    && value.note?.difference === "one_bounded_exposed_difference_observed"
    && value.note?.unavailable === "sealed_source_unavailable_and_unread"
    && Array.isArray(value.evidence)
    && value.evidence.length === 7
    && value.evidence.every((record) => record?.mastery_status === "mastered");
}

function firstIncompleteFocus(completion) {
  const ordered = [
    ["relations", "relation_observations_heading"],
    ["commonReturn", "common_return_heading"],
    ["pythonPrimary", "python_primary_heading"],
    ["pythonRetrieval", "python_retrieval_heading"],
    ["pythonTransfer", "python_transfer_heading"],
    ["workloadPrimary", "workload_primary_heading"],
    ["workloadRetrieval", "workload_retrieval_heading"],
    ["workloadTransfer", "workload_transfer_heading"],
    ["modalityExplanation", "modality_boundary_explanation"],
    ["agenticExplanation", "agentic_boundary_explanation"],
    ["saved", "bounded_review_heading"],
  ];
  const entry = ordered.find(([key]) => completion[key] !== true);
  return Object.freeze({ group: entry?.[0] ?? "verified_restore", target: entry?.[1] ?? "saved_controls" });
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

function sanitizeSave(value) {
  if (/learner_source|raw_case_answers|free_form_reasoning|private_notes?|identity_content|credentials?|endpoints?|payloads?|responses?|source_content|exam_item_text|external_action_requests?/i.test(JSON.stringify(value ?? {}))) {
    return null;
  }
  const expectedEvidence = [
    ["PY-011", "primary", pythonCheckIds],
    ["PY-011", "retrieval", retrievalDimensions],
    ["PY-011", "transfer", pythonCheckIds],
    ["RP004-WORKLOAD-01", "primary", contract.ai901_contract.forms.primary.flatMap((item) => aiDimensions.map((dimension) => `${item.id}.${dimension}`))],
    ["RP004-WORKLOAD-01", "retrieval", contract.ai901_contract.forms.retrieval.flatMap((item) => aiDimensions.map((dimension) => `${item.id}.${dimension}`))],
    ["RP004-WORKLOAD-01", "transfer", contract.ai901_contract.forms.transfer.flatMap((item) => aiDimensions.map((dimension) => `${item.id}.${dimension}`))],
    ["RP004-WORKLOAD-01", "modality_explanation", ["modality_boundary"]],
    ["RP004-WORKLOAD-01", "agentic_explanation", ["agentic_boundary"]],
  ];
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
  const relations = value?.note?.relations;
  const relationsValid = Array.isArray(relations)
    && relations.length === observationIds.length
    && observationIds.every((id) => relations.includes(id));
  if (value?.version !== THREE_CURRENT_REACH_PROTECTED_JOURNEY_VERSION
    || value.packetId !== contract.packet_id
    || value.mappingId !== contract.mapping_id
    || value.checkpoint !== "three_current_reach_complete"
    || value.continuation !== "continuation"
    || value.cityStateDelta !== null
    || value.externalStateDelta !== null
    || value.successor !== null
    || !relationsValid
    || value.note.commonReturn !== "observed_purpose_unknown"
    || value.note.correspondence !== "sanitized_replicas_only"
    || value.note.purpose !== null
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
      relations: Object.freeze([...observationIds]),
      commonReturn: value.note.commonReturn,
      correspondence: value.note.correspondence,
      purpose: null,
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

export function createThreeCurrentReachPersistenceAdapter(initialValue = null) {
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

export function deriveThreeCurrentReachResume(value) {
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
    "pythonPrimary", "pythonRetrieval", "pythonTransfer",
    "workloadPrimary", "workloadRetrieval", "workloadTransfer",
    "modalityExplanation", "agenticExplanation",
  ];
  const completion = { relations: false, commonReturn: false };
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
    phase: "TR-10 OBSERVE THREE RELATIONS",
    completion: Object.freeze(completion),
    focusIntent: firstIncompleteFocus(completion),
    saved: null,
    transientWorkCleared: true,
    replayedEvents: Object.freeze([]),
  });
}

export function deriveThreeCurrentReachSafeReturn(action) {
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

function answerFreeFailure(boundary, result) {
  return Object.freeze({
    status: "remediation_required",
    boundary,
    failed: Object.freeze([...(result.failedCheckIds ?? Object.entries(result.correctness ?? {})
      .filter(([, passed]) => !passed).map(([dimension]) => dimension))]),
    answerIncluded: false,
    retryBlank: true,
    transientWorkCleared: true,
    focusIntent: Object.freeze({ group: boundary, target: "first_invalid_field" }),
  });
}

function runTourProbe() {
  const isolatedTourAdapter = createThreeCurrentReachPersistenceAdapter();
  return Object.freeze({
    mode: "demo_tour",
    observationsFinalized: false,
    masteryFinalized: false,
    saveStatus: "tour_preview_only",
    routeUnlocked: false,
    successor: null,
    adapterValue: isolatedTourAdapter.read(),
  });
}

/** Runs the complete protected RP-004 reference journey without importing it into App/main. */
export function runThreeCurrentReachProtectedJourneySmoke(fixture) {
  const campaignBytes = JSON.stringify(fixture?.acceptedCampaign);
  const predecessorBytes = JSON.stringify(fixture?.predecessor);
  const tourBytes = JSON.stringify(fixture?.tour);
  const continuation = fixture?.acceptedCampaign?.continuation;
  if (continuation !== "continuation" || !predecessorPasses(fixture?.predecessor, continuation)) {
    throw new Error("The exact verified RP-003 completion boundary is required.");
  }
  if (fixture.orientAction !== threeCurrentReachActions.orient
    || fixture.commonReturnAction !== threeCurrentReachActions.recordCommonReturn
    || fixture.runAction !== threeCurrentReachActions.runCorrespondence
    || fixture.saveAction !== threeCurrentReachActions.saveNote) {
    throw new Error("Explicit approved journey intents are required.");
  }

  const earlyReturn = deriveThreeCurrentReachSafeReturn(fixture.earlyReturnAction);
  if (!prerequisitesPass(fixture.prerequisites)) {
    return Object.freeze({
      version: THREE_CURRENT_REACH_PROTECTED_JOURNEY_VERSION,
      protected: true,
      routable: false,
      status: "prerequisite_hold",
      storyNavigationLocked: false,
      completion: Object.freeze({}),
      focusIntent: Object.freeze({ group: "prerequisite", target: "existing_lesson_route" }),
      earlyReturn,
      cityStateDelta: null,
      externalStateDelta: null,
      successor: null,
    });
  }

  exactSet(fixture.observationOrder, observationIds, "observationOrder");
  const completion = { relations: true };
  if (fixture.commonReturnObservation?.observed !== true || fixture.commonReturnObservation?.purpose !== null) {
    throw Object.assign(new Error("The apparent common return must remain purpose-unknown."), {
      recovery: answerFreeFailure("commonReturn", { correctness: { observedPurposeUnknown: false } }),
    });
  }
  completion.commonReturn = true;

  const primary = evaluateThreeCurrentReachPython("primary", fixture.pythonPrimarySource);
  if (!primary.passed) throw Object.assign(new Error("PY-011 primary requires answer-free remediation."), {
    recovery: answerFreeFailure("pythonPrimary", primary),
  });
  completion.pythonPrimary = true;
  const pythonRetrieval = evaluateThreeCurrentReachPythonRetrieval(fixture.pythonRetrievalAnswers);
  if (!pythonRetrieval.passed) throw Object.assign(new Error("PY-011 retrieval requires answer-free remediation."), {
    recovery: answerFreeFailure("pythonRetrieval", pythonRetrieval),
  });
  completion.pythonRetrieval = true;
  const transfer = evaluateThreeCurrentReachPython("transfer", fixture.pythonTransferSource);
  if (!transfer.passed) throw Object.assign(new Error("PY-011 transfer requires answer-free remediation."), {
    recovery: answerFreeFailure("pythonTransfer", transfer),
  });
  completion.pythonTransfer = true;

  const workloadResults = {};
  for (const form of ["primary", "retrieval", "transfer"]) {
    const result = evaluateThreeCurrentReachWorkloads(form, fixture.workloadAnswers?.[form]);
    if (!result.passed) throw Object.assign(new Error(`RP004-WORKLOAD-01 ${form} requires per-case remediation.`), {
      recovery: answerFreeFailure(`workload${form[0].toUpperCase()}${form.slice(1)}`, result),
    });
    workloadResults[form] = result;
    completion[`workload${form[0].toUpperCase()}${form.slice(1)}`] = true;
  }
  if (fixture.explanations?.modalityBoundary !== threeCurrentReachExplanationAnswers.modalityBoundary) {
    throw Object.assign(new Error("The modality boundary explanation is incomplete."), {
      recovery: answerFreeFailure("modalityExplanation", { correctness: { modality_boundary: false } }),
    });
  }
  completion.modalityExplanation = true;
  if (fixture.explanations?.agenticBoundary !== threeCurrentReachExplanationAnswers.agenticBoundary) {
    throw Object.assign(new Error("The agentic boundary explanation is incomplete."), {
      recovery: answerFreeFailure("agenticExplanation", { correctness: { agentic_boundary: false } }),
    });
  }
  completion.agenticExplanation = true;

  const evidence = Object.freeze([
    evidenceRecord({ form: "primary", skillOrObjectiveId: "PY-011", correctness: primary.checks }),
    evidenceRecord({ form: "retrieval", skillOrObjectiveId: "PY-011", correctness: pythonRetrieval.correctness }),
    evidenceRecord({ form: "transfer", skillOrObjectiveId: "PY-011", correctness: transfer.checks }),
    ...["primary", "retrieval", "transfer"].map((form) => evidenceRecord({
      form,
      skillOrObjectiveId: "RP004-WORKLOAD-01",
      correctness: workloadResults[form].correctness,
    })),
    evidenceRecord({
      form: "modality_explanation",
      skillOrObjectiveId: "RP004-WORKLOAD-01",
      correctness: { modality_boundary: true },
    }),
    evidenceRecord({
      form: "agentic_explanation",
      skillOrObjectiveId: "RP004-WORKLOAD-01",
      correctness: { agentic_boundary: true },
    }),
  ]);
  const saveValue = {
    version: THREE_CURRENT_REACH_PROTECTED_JOURNEY_VERSION,
    packetId: contract.packet_id,
    mappingId: contract.mapping_id,
    checkpoint: "three_current_reach_complete",
    continuation,
    cityStateDelta: null,
    externalStateDelta: null,
    successor: null,
    note: {
      relations: [...observationIds],
      commonReturn: "observed_purpose_unknown",
      correspondence: "sanitized_replicas_only",
      purpose: null,
    },
    evidence,
  };
  const adapter = createThreeCurrentReachPersistenceAdapter();
  const write = adapter.write(saveValue);
  if (write.status !== "committed") throw new Error("The allowlisted all-or-none save did not commit.");
  completion.saved = true;
  const restored = sanitizeSave(adapter.read());
  if (!restored) throw new Error("The saved correspondence did not pass verified restore.");
  const returnedRoute = deriveThreeCurrentReachSafeReturn(fixture.finalReturnAction);
  const verifiedCampaignSave = JSON.stringify(adapter.read());
  const tourProbe = runTourProbe();
  if (JSON.stringify(adapter.read()) !== verifiedCampaignSave) {
    throw new Error("Tour probe changed the protected campaign save.");
  }
  if (JSON.stringify(fixture.acceptedCampaign) !== campaignBytes
    || JSON.stringify(fixture.predecessor) !== predecessorBytes
    || JSON.stringify(fixture.tour) !== tourBytes) {
    throw new Error("Accepted campaign, protected predecessor, or Tour input changed.");
  }

  return Object.freeze({
    version: THREE_CURRENT_REACH_PROTECTED_JOURNEY_VERSION,
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
      "TR-00 ARRIVE + ORIENT",
      "TR-10 OBSERVE THREE RELATIONS",
      "TR-20 TRACE COMMON RETURN",
      "TR-30 RELATE + SAVE",
      "TR-40 VERIFY + RETURN",
    ]),
    observations: Object.freeze([...fixture.observationOrder, "apparent_common_return_purpose_unknown"]),
    completion: Object.freeze({ ...completion }),
    focusIntent: firstIncompleteFocus(completion),
    saved: restored,
    restored: Object.freeze({
      phase: "verified_restore",
      checkpoint: restored.checkpoint,
      focusIntent: Object.freeze({ group: "verified_restore", target: "saved_controls" }),
      replayedEvents: Object.freeze([]),
    }),
    earlyReturn,
    returnedRoute,
    onwardContinuation: Object.freeze({
      recorded: fixture.markContinuationAction === threeCurrentReachActions.markContinuation,
      destination: null,
      routeOpened: false,
    }),
    tourProbe,
    presentation: threeCurrentReachPresentation,
    workloadInterface: threeCurrentNeutralWorkloadInterface,
  });
}

export const threeCurrentReachReferenceAnswers = Object.freeze({
  workloads: Object.freeze(Object.fromEntries(["primary", "retrieval", "transfer"].map((form) => [
    form,
    Object.freeze(Object.fromEntries(contract.ai901_contract.forms[form].map((item) => [
      item.id,
      Object.freeze(Object.fromEntries(aiDimensions.map((dimension) => [dimension, item[dimension]]))),
    ]))),
  ]))),
  pythonRetrieval: threeCurrentReachPythonRetrievalAnswers,
  explanations: threeCurrentReachExplanationAnswers,
});
