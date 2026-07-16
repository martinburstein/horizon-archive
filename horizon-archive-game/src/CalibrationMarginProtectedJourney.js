import contract from "../../curriculum/readiness/RP-003/contract.json" with { type: "json" };

export const CALIBRATION_MARGIN_PROTECTED_JOURNEY_VERSION = "rp003.protected-journey.v1";

export const calibrationMarginActions = Object.freeze({
  orient: "ORIENT TO EXPOSED CHANNELS",
  runComparison: "RUN BOUNDED COMPARISON",
  saveNote: "SAVE EXPEDITION NOTE",
  returnCivicComparison: "RETURN TO CIVIC COMPARISON",
  returnCityThreshold: "RETURN TO CITY THRESHOLD",
  markBearing: "MARK ONWARD SURVEY BEARING",
});

export const calibrationMarginPresentation = Object.freeze({
  sceneBoard: "SC-04",
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
    minTargetCssPx: 44,
    persistentLabels: true,
    fieldAssociatedErrors: true,
    statusLiveRegion: true,
    meaningUsesColorMotionOrAudioAlone: false,
    reducedMotionEquivalent: true,
    modalities: Object.freeze([
      "pointer", "touch", "keyboard_enter", "keyboard_space", "switch", "speech", "screen_reader",
    ]),
  }),
  referenceSmokeMaxSeconds: 300,
});

export const calibrationMarginReferenceSources = Object.freeze({
  primary: `exposed_a = ["steady", "rise", "steady", "cool"]
exposed_b = ["steady", "rise", "hold", "cool"]

comparison = []
for index in range(len(exposed_a)):
    if exposed_a[index] == exposed_b[index]:
        status = "corresponding"
    else:
        status = "different"
    comparison.append({"index": index, "status": status})

sealed_source = {"status": "unavailable", "value": None}`,
  transfer: `exposed_a = ["north", "pulse", "settle", "settle"]
exposed_b = ["north", "pulse", "settle", "drift"]

comparison = []
for index in range(len(exposed_a)):
    if exposed_a[index] == exposed_b[index]:
        status = "corresponding"
    else:
        status = "different"
    comparison.append({"index": index, "status": status})

sealed_source = {"status": "unavailable", "value": None}`,
});

export const calibrationMarginPythonRetrievalAnswers = Object.freeze({
  condition: "compare_exposed_values_at_same_index",
  trueBranch: "corresponding",
  falseBranch: "different",
  unavailableBoundary: "sealed_source_remains_unread_and_unavailable",
});

export const calibrationMarginUnsupportedExplanation =
  "unavailable_input_cannot_support_an_extracted_value";

const observationIds = Object.freeze(["correspondence", "bounded_difference", "sealed_unavailable"]);
const pythonCheckIds = Object.freeze([...contract.python_contract.checks]);
const aiDimensions = Object.freeze([...contract.ai901_contract.dimensions]);
const forbiddenSourcePattern = /\b(?:import|open|print|eval|exec|system|remove|unlink|rmdir|requests|urlopen|fetch)\b|sealed_source\s*\[/i;
const safeReturnTargets = Object.freeze({
  [calibrationMarginActions.returnCivicComparison]: "RP-002",
  [calibrationMarginActions.returnCityThreshold]: "CITY_THRESHOLD",
});

function exactSet(value, expected, label) {
  if (!Array.isArray(value)
    || value.length !== expected.length
    || new Set(value).size !== expected.length
    || expected.some((item) => !value.includes(item))) {
    throw new TypeError(`${label} must contain each approved value exactly once.`);
  }
}

function parseAssignedList(source, name) {
  const match = String(source).match(new RegExp(`^\\s*${name}\\s*=\\s*(\\[[^\\n]+\\])\\s*$`, "m"));
  if (!match) return null;
  try {
    return JSON.parse(match[1].replace(/'/g, '"'));
  } catch {
    return null;
  }
}

function expectedComparison(form) {
  const specification = contract.python_contract.forms[form];
  const differences = new Set(specification.different_indices);
  return specification.exposed_a.map((_, index) => ({
    index,
    status: differences.has(index) ? "different" : "corresponding",
  }));
}

/**
 * Evaluates the bounded learner-owned Python fragment without eval, network, or browser authority.
 * The curriculum validator independently executes the same contract through Python's AST/runtime.
 */
export function evaluateCalibrationMarginPython(form, learnerSource) {
  if (!Object.hasOwn(contract.python_contract.forms, form)) {
    throw new TypeError("form must be primary or transfer.");
  }
  const source = String(learnerSource ?? "").replace(/\r/g, "");
  const specification = contract.python_contract.forms[form];
  const exposedA = parseAssignedList(source, "exposed_a");
  const exposedB = parseAssignedList(source, "exposed_b");
  const comparison = expectedComparison(form);
  const exactInputs = JSON.stringify(exposedA) === JSON.stringify(specification.exposed_a)
    && JSON.stringify(exposedB) === JSON.stringify(specification.exposed_b);
  const exactCondition = /if\s+exposed_a\s*\[\s*index\s*\]\s*==\s*exposed_b\s*\[\s*index\s*\]\s*:/.test(source);
  const exactBranches = /if[^\n]+:\s*\n\s+status\s*=\s*["']corresponding["']\s*\n\s*else\s*:\s*\n\s+status\s*=\s*["']different["']/.test(source);
  const exactLoop = /for\s+index\s+in\s+range\s*\(\s*len\s*\(\s*exposed_a\s*\)\s*\)\s*:/.test(source);
  const exactAppend = /comparison\.append\s*\(\s*\{\s*["']index["']\s*:\s*index\s*,\s*["']status["']\s*:\s*status\s*\}\s*\)/.test(source);
  const sealedUnavailable = /sealed_source\s*=\s*\{\s*["']status["']\s*:\s*["']unavailable["']\s*,\s*["']value["']\s*:\s*None\s*\}/.test(source);
  const safeShape = exactInputs && exactCondition && exactBranches && exactLoop && exactAppend;
  const checks = {
    result_is_list: /comparison\s*=\s*\[\s*\]/.test(source) && safeShape,
    one_record_per_exposed_index: safeShape && comparison.length === specification.exposed_a.length,
    exact_record_keys_and_index_order: exactAppend && comparison.every((record, index) => (
      Object.keys(record).join("|") === "index|status" && record.index === index
    )),
    corresponding_positions_correct: safeShape && comparison.every((record) => (
      record.status === (specification.exposed_a[record.index] === specification.exposed_b[record.index]
        ? "corresponding" : "different")
    )),
    difference_positions_correct: safeShape && comparison
      .filter((record) => record.status === "different")
      .every((record) => specification.different_indices.includes(record.index)),
    conditional_compares_exposed_values_at_same_index: exactCondition && exactBranches,
    sealed_source_marked_unavailable_none: sealedUnavailable,
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

export function evaluateCalibrationMarginPythonRetrieval(answers) {
  const correctness = Object.fromEntries(Object.entries(calibrationMarginPythonRetrievalAnswers).map(
    ([dimension, expected]) => [dimension, answers?.[dimension] === expected],
  ));
  return Object.freeze({
    correctness: Object.freeze(correctness),
    score: Object.values(correctness).filter(Boolean).length,
    passed: Object.values(correctness).every(Boolean),
  });
}

export function evaluateCalibrationMarginInformationExtraction(form, answers) {
  const specification = contract.ai901_contract.forms[form]?.[0];
  if (!specification) throw new TypeError("form must be primary, retrieval, or transfer.");
  const correctness = Object.fromEntries(aiDimensions.map((dimension) => [
    dimension,
    answers?.[specification.id]?.[dimension] === specification[dimension],
  ]));
  return Object.freeze({
    form,
    caseId: specification.id,
    correctness: Object.freeze(correctness),
    score: Object.values(correctness).filter(Boolean).length,
    passed: Object.values(correctness).every(Boolean),
  });
}

function prerequisitesPass(value) {
  return value?.python?.lessonId === "L-03-02"
    && value.python.skillId === "PY-010"
    && value.python.primaryScore === 8
    && value.python.transferScore === 8
    && value.python.explanationComplete === true
    && value.python.masteryStatus === "mastered"
    && value?.ai901?.lessonId === "L-05-07"
    && value.ai901.objectiveId === "AI901-D2-O7"
    && value.ai901.primaryScore === 12
    && value.ai901.transferComplete === true
    && value.ai901.provenanceComplete === true
    && value.ai901.nullFalseComplete === true
    && value.ai901.masteryStatus === "mastered";
}

function predecessorPasses(value, continuation) {
  return value?.packetId === "RP-002"
    && value.checkpoint === "comparison_complete"
    && value.verificationStatus === "verified"
    && value.civicComparisonSaved === true
    && value.nextSurveyDirectionMarked === true
    && value.continuation === continuation
    && value.cityStateDelta === null;
}

function firstIncompleteFocus(completion) {
  const ordered = [
    ["observations", "survey_heading"],
    ["pythonPrimary", "python_primary_heading"],
    ["pythonRetrieval", "python_retrieval_heading"],
    ["pythonTransfer", "python_transfer_heading"],
    ["aiPrimary", "information_extraction_primary_heading"],
    ["aiRetrieval", "information_extraction_retrieval_heading"],
    ["aiTransfer", "information_extraction_transfer_heading"],
    ["unsupportedExplanation", "unsupported_input_explanation"],
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
  const expectedEvidence = [
    ["PY-010", "primary", pythonCheckIds],
    ["PY-010", "retrieval", Object.keys(calibrationMarginPythonRetrievalAnswers)],
    ["PY-010", "transfer", pythonCheckIds],
    ["RP003-IE-01", "primary", aiDimensions],
    ["RP003-IE-01", "retrieval", aiDimensions],
    ["RP003-IE-01", "transfer", aiDimensions],
    ["RP003-IE-01", "unsupported_explanation", ["unavailable_input_cannot_support_value"]],
  ];
  const evidenceValid = Array.isArray(value?.evidence)
    && value.evidence.length === expectedEvidence.length
    && expectedEvidence.every(([id, form, dimensions], index) => {
      const record = value.evidence[index];
      const correctness = record?.dimension_correctness;
      return record?.skill_or_objective_id === id
        && record.form === form
        && record.mastery_status === "mastered"
        && correctness
        && Object.keys(correctness).length === dimensions.length
        && dimensions.every((dimension) => correctness[dimension] === true);
    });
  if (value?.version !== CALIBRATION_MARGIN_PROTECTED_JOURNEY_VERSION
    || value.packetId !== contract.packet_id
    || value.mappingId !== contract.mapping_id
    || value.checkpoint !== "calibration_margin_complete"
    || value.continuation !== "continuation"
    || value.cityStateDelta !== null
    || value.successor !== null
    || value.note?.correspondence !== "bounded_exposed_correspondence_observed"
    || value.note?.difference !== "one_bounded_exposed_difference_observed"
    || value.note?.unavailable !== "sealed_source_unavailable_and_unread"
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
    successor: null,
    note: Object.freeze({ ...value.note }),
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

export function createCalibrationMarginPersistenceAdapter(initialValue = null) {
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

export function deriveCalibrationMarginSafeReturn(action) {
  const target = safeReturnTargets[action];
  if (!target) throw new TypeError("An explicit approved return action is required.");
  return Object.freeze({
    target,
    continuation: "continuation",
    cityStateDelta: null,
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
  const isolatedTourAdapter = createCalibrationMarginPersistenceAdapter();
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

/**
 * Runs the complete protected RP-003 reference journey without importing it into App/main.
 */
export function runCalibrationMarginProtectedJourneySmoke(fixture) {
  const campaignBytes = JSON.stringify(fixture?.acceptedCampaign);
  const tourBytes = JSON.stringify(fixture?.tour);
  const continuation = fixture?.acceptedCampaign?.continuation;
  if (continuation !== "continuation" || !predecessorPasses(fixture?.predecessor, continuation)) {
    throw new Error("The exact verified RP-002 completion boundary is required.");
  }
  if (fixture.orientAction !== calibrationMarginActions.orient
    || fixture.runAction !== calibrationMarginActions.runComparison
    || fixture.saveAction !== calibrationMarginActions.saveNote) {
    throw new Error("Explicit approved journey intents are required.");
  }

  const earlyReturn = deriveCalibrationMarginSafeReturn(fixture.earlyReturnAction);
  if (!prerequisitesPass(fixture.prerequisites)) {
    return Object.freeze({
      version: CALIBRATION_MARGIN_PROTECTED_JOURNEY_VERSION,
      protected: true,
      routable: false,
      status: "prerequisite_hold",
      storyNavigationLocked: false,
      completion: Object.freeze({}),
      focusIntent: Object.freeze({ group: "prerequisite", target: "existing_lesson_route" }),
      earlyReturn,
      cityStateDelta: null,
      successor: null,
    });
  }

  exactSet(fixture.observationOrder, observationIds, "observationOrder");
  const completion = { observations: true };
  const primary = evaluateCalibrationMarginPython("primary", fixture.pythonPrimarySource);
  if (!primary.passed) throw Object.assign(new Error("PY-010 primary requires answer-free remediation."), {
    recovery: answerFreeFailure("pythonPrimary", primary),
  });
  completion.pythonPrimary = true;
  const pythonRetrieval = evaluateCalibrationMarginPythonRetrieval(fixture.pythonRetrievalAnswers);
  if (!pythonRetrieval.passed) throw Object.assign(new Error("PY-010 retrieval requires answer-free remediation."), {
    recovery: answerFreeFailure("pythonRetrieval", pythonRetrieval),
  });
  completion.pythonRetrieval = true;
  const transfer = evaluateCalibrationMarginPython("transfer", fixture.pythonTransferSource);
  if (!transfer.passed) throw Object.assign(new Error("PY-010 transfer requires answer-free remediation."), {
    recovery: answerFreeFailure("pythonTransfer", transfer),
  });
  completion.pythonTransfer = true;

  const aiResults = {};
  for (const form of ["primary", "retrieval", "transfer"]) {
    const result = evaluateCalibrationMarginInformationExtraction(form, fixture.aiAnswers?.[form]);
    if (!result.passed) throw Object.assign(new Error(`RP003-IE-01 ${form} requires per-dimension remediation.`), {
      recovery: answerFreeFailure(`ai${form[0].toUpperCase()}${form.slice(1)}`, result),
    });
    aiResults[form] = result;
    completion[`ai${form[0].toUpperCase()}${form.slice(1)}`] = true;
  }
  if (fixture.unsupportedExplanation !== calibrationMarginUnsupportedExplanation) {
    throw Object.assign(new Error("The unsupported-input explanation is incomplete."), {
      recovery: answerFreeFailure("unsupportedExplanation", { correctness: { unavailableBoundary: false } }),
    });
  }
  completion.unsupportedExplanation = true;

  const evidence = Object.freeze([
    evidenceRecord({ form: "primary", skillOrObjectiveId: "PY-010", correctness: primary.checks }),
    evidenceRecord({ form: "retrieval", skillOrObjectiveId: "PY-010", correctness: pythonRetrieval.correctness }),
    evidenceRecord({ form: "transfer", skillOrObjectiveId: "PY-010", correctness: transfer.checks }),
    ...["primary", "retrieval", "transfer"].map((form) => evidenceRecord({
      form,
      skillOrObjectiveId: "RP003-IE-01",
      correctness: aiResults[form].correctness,
    })),
    evidenceRecord({
      form: "unsupported_explanation",
      skillOrObjectiveId: "RP003-IE-01",
      correctness: { unavailable_input_cannot_support_value: true },
    }),
  ]);
  const saveValue = {
    version: CALIBRATION_MARGIN_PROTECTED_JOURNEY_VERSION,
    packetId: contract.packet_id,
    mappingId: contract.mapping_id,
    checkpoint: "calibration_margin_complete",
    continuation,
    cityStateDelta: null,
    successor: null,
    note: {
      correspondence: "bounded_exposed_correspondence_observed",
      difference: "one_bounded_exposed_difference_observed",
      unavailable: "sealed_source_unavailable_and_unread",
    },
    evidence,
  };
  const adapter = createCalibrationMarginPersistenceAdapter();
  const write = adapter.write(saveValue);
  if (write.status !== "committed") throw new Error("The allowlisted all-or-none save did not commit.");
  completion.saved = true;
  const restored = sanitizeSave(adapter.read());
  if (!restored) throw new Error("The saved note did not pass verified restore.");
  const returnedRoute = deriveCalibrationMarginSafeReturn(fixture.finalReturnAction);
  const verifiedCampaignSave = JSON.stringify(adapter.read());
  const tourProbe = runTourProbe();
  if (JSON.stringify(adapter.read()) !== verifiedCampaignSave) {
    throw new Error("Tour probe changed the protected campaign save.");
  }

  if (JSON.stringify(fixture.acceptedCampaign) !== campaignBytes
    || JSON.stringify(fixture.tour) !== tourBytes) {
    throw new Error("Accepted campaign or Tour input changed during the protected journey.");
  }

  return Object.freeze({
    version: CALIBRATION_MARGIN_PROTECTED_JOURNEY_VERSION,
    protected: true,
    routable: false,
    offlineOnly: true,
    browserStorageUsed: false,
    externalActionEnabled: false,
    authorityGranted: false,
    examCreditGranted: false,
    examGuarantee: false,
    continuation,
    cityStateDelta: null,
    worldStateChanged: false,
    sealedSourceRead: false,
    successor: null,
    timeline: Object.freeze([
      "CM-00 ARRIVE + IDLE",
      "CM-10 SURVEY",
      "CM-20-23 PYTHON",
      "CM-30-34 EXTRACTION",
      "CM-40 BOUNDED REVIEW",
      "CM-41 ATOMIC SAVE",
      "CM-50 VERIFY + RETURN",
    ]),
    observations: Object.freeze([...fixture.observationOrder]),
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
    onwardBearing: Object.freeze({
      marked: fixture.markBearingAction === calibrationMarginActions.markBearing,
      destination: null,
      routeOpened: false,
    }),
    tourProbe,
    presentation: calibrationMarginPresentation,
  });
}

export const calibrationMarginReferenceAnswers = Object.freeze({
  ai: Object.freeze(Object.fromEntries(["primary", "retrieval", "transfer"].map((form) => {
    const specification = contract.ai901_contract.forms[form][0];
    return [form, Object.freeze({
      [specification.id]: Object.freeze(Object.fromEntries(aiDimensions.map((dimension) => [
        dimension,
        specification[dimension],
      ]))),
    })];
  }))),
  pythonRetrieval: calibrationMarginPythonRetrievalAnswers,
  unsupportedExplanation: calibrationMarginUnsupportedExplanation,
});
