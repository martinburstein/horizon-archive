import contract from "../../curriculum/readiness/RP-004/contract.json" with { type: "json" };
import { sanitizeCalibrationMarginReviewSave } from "./CalibrationMarginReviewSave.js";

export const THREE_CURRENT_REACH_SHELL_VERSION = "SS-RP004-THREE-CURRENT-v1";
export const THREE_CURRENT_REACH_CONTROLLER_VERSION = "rp004.three-current-controller.v1";
export const THREE_CURRENT_REACH_RECORD_VERSION = "rp004.three-current-save.v1";
export const THREE_CURRENT_REACH_SAVE_KEY =
  "horizon-archive-rp004-three-current-save-v1";

export const threeCurrentReachActions = Object.freeze({
  route: "PILOT // FOLLOW EXPEDITION-MARKED SURVEY TO THREE-CURRENT REACH",
  orient: "ORIENT TO THREE CURRENT RELATIONS",
  observeSuspended: "OBSERVE SUSPENDED MATTER / POROUS HANDLING",
  observeCyclic: "OBSERVE CYCLIC PRESSURE / TENSIONED HANDLING",
  observeHeat: "OBSERVE CONDUCTED HEAT / JOINTED HANDLING",
  commonReturn: "RECORD APPARENT COMMON RETURN",
  submitPythonPrimary: "SUBMIT PYTHON PRIMARY",
  submitPythonRetrieval: "SUBMIT PYTHON RETRIEVAL",
  submitPythonTransfer: "SUBMIT PYTHON TRANSFER",
  submitWorkloadPrimary: "SUBMIT WORKLOAD PRIMARY",
  submitWorkloadRetrieval: "SUBMIT WORKLOAD RETRIEVAL",
  submitWorkloadTransfer: "SUBMIT WORKLOAD TRANSFER",
  submitModality: "SUBMIT MODALITY BOUNDARY",
  submitAgentic: "SUBMIT AGENTIC BOUNDARY",
  retry: "RETURN TO FRESH BLANK RETRY",
  review: "REVIEW PROVENANCE",
  save: "SAVE EXPEDITION NOTE",
  returnCivic: "RETURN TO CIVIC COMPARISON",
  returnCalibration: "RETURN TO CALIBRATION MARGIN",
  returnThreshold: "RETURN TO CITY THRESHOLD",
  continuation: "RECORD OUTBOUND PHYSICAL CONTINUATION",
  manyfoldReturn:
    "PILOT // FOLLOW EXPEDITION-MARKED ADJACENT SURVEY TO MANYFOLD RETURN",
});

export const threeCurrentReachModalities = Object.freeze([
  "pointer",
  "touch",
  "keyboard_enter",
  "keyboard_space",
  "switch",
  "speech",
  "screen_reader",
]);

export const threeCurrentReachObservationIds = Object.freeze([
  "suspended_matter_porous_relation",
  "cyclic_pressure_tensioned_relation",
  "conducted_heat_jointed_relation",
]);

export const threeCurrentReachWorldPlateIds = Object.freeze({
  calibrationMargin:
    "city-threshold-overview-master.png",
  threeCurrentReach:
    "sc05-three-current-panorama-runtime-master-v1.webp",
});

export function resolveThreeCurrentReachWorldScene(state) {
  if (state?.boardState === "SC-04" && state?.activeGroup === "cm50_route") {
    return Object.freeze({
      sceneId: "SC-04",
      assetId: threeCurrentReachWorldPlateIds.calibrationMargin,
    });
  }
  if (state?.boardState === "SC-05"
    && typeof state?.activeGroup === "string"
    && state.activeGroup.startsWith("tr")) {
    return Object.freeze({
      sceneId: "SC-05",
      assetId: threeCurrentReachWorldPlateIds.threeCurrentReach,
    });
  }
  return null;
}

const actionForObservation = Object.freeze({
  [threeCurrentReachActions.observeSuspended]: threeCurrentReachObservationIds[0],
  [threeCurrentReachActions.observeCyclic]: threeCurrentReachObservationIds[1],
  [threeCurrentReachActions.observeHeat]: threeCurrentReachObservationIds[2],
});
const observationActions = Object.freeze(Object.keys(actionForObservation));
const focusForObservation = Object.freeze({
  [threeCurrentReachActions.observeSuspended]: "relation-suspended-action",
  [threeCurrentReachActions.observeCyclic]: "relation-cyclic-action",
  [threeCurrentReachActions.observeHeat]: "relation-heat-action",
});
const pythonChecks = Object.freeze([...contract.python_contract.checks]);
const aiDimensions = Object.freeze([...contract.ai901_contract.dimensions]);
const retrievalAnswers = Object.freeze({
  iterable: "samples",
  currentItem: "sample",
  loopBody: "append_one_ordered_correspondence_record",
  outputCount: "three_records_for_three_samples",
  purposeBoundary: "common_return_purpose_remains_none",
});
const explanationAnswers = Object.freeze({
  modality: "modality_alone_does_not_determine_the_requested_workload",
  agentic: "multi_step_autonomy_and_approved_tool_selection_distinguish_agentic_work",
});
const intentKeys = Object.freeze([
  "mode",
  "shellVersion",
  "controllerVersion",
  "packetId",
  "activeGroupId",
  "expectedOwner",
  "allowlistedActionId",
  "activationKind",
  "opaqueFreshEventToken",
]);
const topKeys = Object.freeze([
  "version",
  "packetId",
  "mappingId",
  "checkpoint",
  "continuation",
  "cityStateDelta",
  "externalStateDelta",
  "successor",
  "note",
  "evidence",
]);
const noteKeys = Object.freeze([
  "relations",
  "commonReturn",
  "correspondence",
  "purpose",
]);
const evidenceKeys = Object.freeze([
  "packet_id",
  "mapping_id",
  "form",
  "skill_or_objective_id",
  "dimension_correctness",
  "attempt_count",
  "hint_level",
  "confidence",
  "misconception_tags",
  "mastery_status",
]);
const forbiddenPrivateKey = /learner_source|raw_case_answers|free_form_reasoning|private_notes?|identity_content|credentials?|endpoints?|payloads?|responses?|source_content|exam_item_text|external_action_requests?|route_token|event_token|focus_history|pointer_history|diagnostics?|tour_state/i;
const forbiddenPython = /\b(?:import|open|print|eval|exec|system|remove|unlink|rmdir|requests|urlopen|fetch)\b/i;

const groupDefinitions = Object.freeze({
  cm50_route: Object.freeze({
    phase: "CM-50 VERIFIED RESTORE",
    owner: "PILOT // EXPEDITION NAVIGATION",
    headingId: "cm50-route-heading",
    actions: Object.freeze([
      threeCurrentReachActions.route,
      threeCurrentReachActions.returnCivic,
      threeCurrentReachActions.returnThreshold,
    ]),
  }),
  tr00_orient: Object.freeze({
    phase: "TR-00 ARRIVE + ORIENT",
    owner: "SCENE // THREE-CURRENT REACH",
    headingId: "tr00-orient-heading",
    actions: Object.freeze([
      threeCurrentReachActions.orient,
      threeCurrentReachActions.returnCalibration,
      threeCurrentReachActions.returnThreshold,
    ]),
  }),
  tr10_relations: Object.freeze({
    phase: "TR-10 OBSERVE THREE RELATIONS",
    owner: "PILOT // EXPEDITION OBSERVATION",
    headingId: "tr10-relations-heading",
    actions: Object.freeze([
      ...observationActions,
      threeCurrentReachActions.returnCalibration,
      threeCurrentReachActions.returnThreshold,
    ]),
  }),
  tr20_common_return: Object.freeze({
    phase: "TR-20 TRACE APPARENT COMMON RETURN",
    owner: "PILOT // EXPEDITION OBSERVATION",
    headingId: "tr20-common-return-heading",
    actions: Object.freeze([
      threeCurrentReachActions.commonReturn,
      threeCurrentReachActions.returnCalibration,
      threeCurrentReachActions.returnThreshold,
    ]),
  }),
  tr30_python_primary: Object.freeze({
    phase: "TR-30 PYTHON PRIMARY",
    owner: "BUILDER WORK // SANITIZED REPLICA",
    headingId: "tr30-python-primary-heading",
    actions: Object.freeze([threeCurrentReachActions.submitPythonPrimary]),
  }),
  tr30_python_retrieval: Object.freeze({
    phase: "TR-30 PYTHON RETRIEVAL",
    owner: "BUILDER WORK // SANITIZED REPLICA",
    headingId: "tr30-python-retrieval-heading",
    actions: Object.freeze([threeCurrentReachActions.submitPythonRetrieval]),
  }),
  tr30_python_transfer: Object.freeze({
    phase: "TR-30 PYTHON TRANSFER",
    owner: "BUILDER WORK // SANITIZED REPLICA",
    headingId: "tr30-python-transfer-heading",
    actions: Object.freeze([threeCurrentReachActions.submitPythonTransfer]),
  }),
  tr30_workload_primary: Object.freeze({
    phase: "TR-30 AI-901 PRIMARY",
    owner: "901 TEACHER // COURSE PRACTICE",
    headingId: "tr30-ai-primary-heading",
    actions: Object.freeze([threeCurrentReachActions.submitWorkloadPrimary]),
  }),
  tr30_workload_retrieval: Object.freeze({
    phase: "TR-30 AI-901 RETRIEVAL",
    owner: "901 TEACHER // COURSE PRACTICE",
    headingId: "tr30-ai-retrieval-heading",
    actions: Object.freeze([threeCurrentReachActions.submitWorkloadRetrieval]),
  }),
  tr30_workload_transfer: Object.freeze({
    phase: "TR-30 AI-901 TRANSFER",
    owner: "901 TEACHER // COURSE PRACTICE",
    headingId: "tr30-ai-transfer-heading",
    actions: Object.freeze([threeCurrentReachActions.submitWorkloadTransfer]),
  }),
  tr30_modality: Object.freeze({
    phase: "TR-30 MODALITY BOUNDARY",
    owner: "901 TEACHER // COURSE PRACTICE",
    headingId: "tr30-modality-heading",
    actions: Object.freeze([threeCurrentReachActions.submitModality]),
  }),
  tr30_agentic: Object.freeze({
    phase: "TR-30 AGENTIC BOUNDARY",
    owner: "901 TEACHER // COURSE PRACTICE",
    headingId: "tr30-agentic-heading",
    actions: Object.freeze([threeCurrentReachActions.submitAgentic]),
  }),
  tr30_repair: Object.freeze({
    phase: "TR-30 ANSWER-FREE REPAIR",
    owner: "901 TEACHER // COURSE PRACTICE",
    headingId: "tr30-save-recovery-heading",
    actions: Object.freeze([threeCurrentReachActions.retry]),
  }),
  tr30_review: Object.freeze({
    phase: "TR-30 BOUNDED REVIEW",
    owner: "PILOT // BOUNDED REVIEW",
    headingId: "tr30-review-heading",
    actions: Object.freeze([threeCurrentReachActions.review]),
  }),
  tr30_provenance: Object.freeze({
    phase: "TR-30 PROVENANCE INSPECTED",
    owner: "PILOT // BOUNDED REVIEW",
    headingId: "tr30-provenance-heading",
    actions: Object.freeze([threeCurrentReachActions.save]),
  }),
  tr30_save_recovery: Object.freeze({
    phase: "TR-30 SAVE RECOVERY",
    owner: "SYSTEM // LOCAL EXPEDITION NOTE",
    headingId: "tr30-save-recovery-heading",
    actions: Object.freeze([threeCurrentReachActions.review]),
  }),
  tr40_restore: Object.freeze({
    phase: "TR-40 VERIFY + RETURN",
    owner: "SYSTEM // RESTORED EXPEDITION NOTE",
    headingId: "tr40-restore-heading",
    actions: Object.freeze([
      threeCurrentReachActions.manyfoldReturn,
      threeCurrentReachActions.continuation,
      threeCurrentReachActions.returnCalibration,
      threeCurrentReachActions.returnThreshold,
    ]),
  }),
  tr40_restore_recorded: Object.freeze({
    phase: "TR-40 VERIFIED + CONTINUATION NOTED",
    owner: "SYSTEM // RESTORED EXPEDITION NOTE",
    headingId: "tr40-restore-heading",
    actions: Object.freeze([
      threeCurrentReachActions.manyfoldReturn,
      threeCurrentReachActions.returnCalibration,
      threeCurrentReachActions.returnThreshold,
    ]),
  }),
});

const readyStatusMessages = Object.freeze({
  cm50_route:
    "The verified predecessor note is held unchanged. Choose one independent Pilot movement.",
  tr00_orient:
    "Orientation remains pending. No observation or course evidence is recorded.",
  tr10_relations:
    "Unrecorded physical relations remain available as equal peers.",
  tr20_common_return:
    "Three physical relations are recorded separately. The apparent return remains capped and unassigned.",
  tr30_python_primary:
    "A blank primary form is ready with course-owned sanitized replicas only.",
  tr30_python_retrieval:
    "The prior source is cleared. A closed-note loop trace is ready.",
  tr30_python_transfer:
    "A fresh transfer form is blank and uses a different sanitized replica set.",
  tr30_workload_primary:
    "Neutral primary cases are ready; each requested workload and deciding signal is separate.",
  tr30_workload_retrieval:
    "A smaller closed-note workload set is ready with no carried choices.",
  tr30_workload_transfer:
    "A fresh workload transfer set is ready with no landscape answer channel.",
  tr30_modality:
    "The modality boundary remains separately accountable.",
  tr30_agentic:
    "The agentic-work boundary remains separately accountable.",
  tr30_repair:
    "The prior response is cleared. Review only the named incomplete boundary.",
  tr30_review:
    "Physical, Python, and AI workload obligations are finalized independently.",
  tr30_provenance:
    "Only sanitized replicas and finalized local evidence are eligible for the expedition note.",
  tr30_save_recovery:
    "The last verified note, or verified absence, remains unchanged.",
  tr40_restore:
    "The exact local note is restored without replaying any completed event.",
  tr40_restore_recorded:
    "The outbound physical continuation is local, destinationless, and non-routing.",
});

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function exactKeys(value, expected) {
  return value && typeof value === "object" && !Array.isArray(value)
    && Object.keys(value).length === expected.length
    && expected.every((key, index) => Object.keys(value)[index] === key);
}

function opaqueToken(value) {
  return typeof value === "string" && value.length >= 8 && value.length <= 160
    && !/\s|private|answer|credential/i.test(value);
}

function parsePythonAssignment(source, name, opening, closing) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = String(source).match(new RegExp(
    `^\\s*${escaped}\\s*=\\s*(${opening}[\\s\\S]*?${closing})\\s*(?:\\n\\s*\\n|$)`,
    "m",
  ));
  if (!match) return null;
  try {
    return JSON.parse(match[1].replace(/,\s*([}\]])/g, "$1"));
  } catch {
    return null;
  }
}

export function evaluateThreeCurrentReachPython(form, learnerSource) {
  const specification = contract.python_contract.forms[form];
  if (!specification) throw new TypeError("form must be primary or transfer");
  const source = String(learnerSource ?? "").replace(/\r/g, "");
  const samples = parsePythonAssignment(source, "samples", "\\[", "\\]");
  const corridors = parsePythonAssignment(source, "corridor_for_form", "\\{", "\\}");
  const exactInputs = JSON.stringify(samples) === JSON.stringify(specification.samples)
    && JSON.stringify(corridors) === JSON.stringify(specification.corridor_for_form);
  const exactLoop = /for\s+sample\s+in\s+samples\s*:/.test(source);
  const exactAppend = /correspondence\.append\s*\(\s*\{\s*["']sample_id["']\s*:\s*sample\s*\[\s*["']sample_id["']\s*\]\s*,\s*["']corridor["']\s*:\s*corridor_for_form\s*\[\s*sample\s*\[\s*["']form["']\s*\]\s*\]\s*,?\s*\}\s*\)/s.test(source);
  const exactCommon = /common_return\s*=\s*\{\s*["']observed["']\s*:\s*True\s*,\s*["']purpose["']\s*:\s*None\s*\}/.test(source);
  const output = exactInputs
    ? specification.samples.map((sample) => ({
      sample_id: sample.sample_id,
      corridor: specification.corridor_for_form[sample.form],
    }))
    : [];
  const safeShape = exactInputs && exactLoop && exactAppend;
  const checks = {
    result_is_list: /correspondence\s*=\s*\[\s*\]/.test(source) && safeShape,
    one_record_per_sample: safeShape && output.length === specification.samples.length,
    exact_record_keys_and_order: exactAppend
      && output.every((record) => Object.keys(record).join("|") === "sample_id|corridor"),
    every_sample_id_preserved_once: safeShape
      && output.map((record) => record.sample_id).join("|")
        === specification.samples.map((sample) => sample.sample_id).join("|"),
    exact_form_to_corridor_lookup: safeShape
      && output.every((record, index) => (
        record.corridor === specification.corridor_for_form[specification.samples[index].form]
      )),
    for_loop_iterates_samples_and_appends_once: exactLoop && exactAppend
      && (source.match(/correspondence\.append\s*\(/g) ?? []).length === 1,
    common_return_observed_and_purpose_none: exactCommon,
    inputs_unchanged_and_no_forbidden_operations: exactInputs
      && !forbiddenPython.test(source),
  };
  const failed = pythonChecks.filter((id) => checks[id] !== true);
  return Object.freeze({
    correctness: Object.freeze(checks),
    failed: Object.freeze(failed),
    passed: failed.length === 0,
  });
}

function evaluateRetrieval(answers) {
  const correctness = Object.fromEntries(Object.entries(retrievalAnswers).map(
    ([key, expected]) => [key, answers?.[key] === expected],
  ));
  return {
    correctness,
    failed: Object.entries(correctness).filter(([, value]) => !value).map(([key]) => key),
    passed: Object.values(correctness).every(Boolean),
  };
}

function evaluateWorkloads(form, answers) {
  const correctness = {};
  for (const scenario of contract.ai901_contract.forms[form]) {
    for (const dimension of aiDimensions) {
      correctness[`${scenario.id}.${dimension}`] =
        answers?.[scenario.id]?.[dimension] === scenario[dimension];
    }
  }
  return {
    correctness,
    failed: Object.entries(correctness).filter(([, value]) => !value).map(([key]) => key),
    passed: Object.values(correctness).every(Boolean),
  };
}

function evidenceRecord(skill, form, correctness, attempts = 1) {
  return Object.freeze({
    packet_id: "RP-004",
    mapping_id: "RP004-A3-THREE-CURRENT-REACH",
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

function expectedEvidenceShape() {
  return [
    ["PY-011", "primary", pythonChecks],
    ["PY-011", "retrieval", Object.keys(retrievalAnswers)],
    ["PY-011", "transfer", pythonChecks],
    ...["primary", "retrieval", "transfer"].map((form) => [
      "RP004-WORKLOAD-01",
      form,
      contract.ai901_contract.forms[form]
        .flatMap((item) => aiDimensions.map((dimension) => `${item.id}.${dimension}`)),
    ]),
    ["RP004-WORKLOAD-01", "modality_explanation", ["modality_boundary"]],
    ["RP004-WORKLOAD-01", "agentic_explanation", ["agentic_boundary"]],
  ];
}

function sanitizeEvidencePrefix(value) {
  if (!Array.isArray(value)) return [];
  const expected = expectedEvidenceShape();
  const safe = [];
  for (let index = 0; index < Math.min(value.length, expected.length); index += 1) {
    const record = value[index];
    const [skill, form, dimensions] = expected[index];
    if (!exactKeys(record, evidenceKeys)
      || record.packet_id !== "RP-004"
      || record.mapping_id !== "RP004-A3-THREE-CURRENT-REACH"
      || record.skill_or_objective_id !== skill
      || record.form !== form
      || record.mastery_status !== "mastered"
      || !exactKeys(record.dimension_correctness, dimensions)
      || !dimensions.every((dimension) => record.dimension_correctness[dimension] === true)
      || !Number.isInteger(record.attempt_count)
      || record.attempt_count < 1
      || record.attempt_count > 99
      || !Number.isInteger(record.hint_level)
      || record.hint_level < 0
      || record.hint_level > 3
      || ![null, "low", "medium", "high"].includes(record.confidence)
      || !Array.isArray(record.misconception_tags)) break;
    safe.push(evidenceRecord(
      record.skill_or_objective_id,
      record.form,
      record.dimension_correctness,
      record.attempt_count,
    ));
  }
  return safe;
}

export function sanitizeThreeCurrentReachSave(value) {
  if (!exactKeys(value, topKeys)
    || forbiddenPrivateKey.test(JSON.stringify(value ?? {}))
    || value.version !== THREE_CURRENT_REACH_RECORD_VERSION
    || value.packetId !== "RP-004"
    || value.mappingId !== "RP004-A3-THREE-CURRENT-REACH"
    || value.checkpoint !== "three_current_reach_complete"
    || value.continuation !== "continuation"
    || value.cityStateDelta !== null
    || value.externalStateDelta !== null
    || value.successor !== null
    || !exactKeys(value.note, noteKeys)
    || JSON.stringify(value.note.relations) !== JSON.stringify(threeCurrentReachObservationIds)
    || value.note.commonReturn !== "observed_purpose_unknown"
    || value.note.correspondence !== "sanitized_replicas_only"
    || value.note.purpose !== null) return null;
  const evidence = sanitizeEvidencePrefix(value.evidence);
  if (evidence.length !== 8 || value.evidence.length !== 8) return null;
  return Object.freeze({
    version: THREE_CURRENT_REACH_RECORD_VERSION,
    packetId: "RP-004",
    mappingId: "RP004-A3-THREE-CURRENT-REACH",
    checkpoint: "three_current_reach_complete",
    continuation: "continuation",
    cityStateDelta: null,
    externalStateDelta: null,
    successor: null,
    note: Object.freeze({
      relations: Object.freeze([...threeCurrentReachObservationIds]),
      commonReturn: "observed_purpose_unknown",
      correspondence: "sanitized_replicas_only",
      purpose: null,
    }),
    evidence: Object.freeze(evidence),
  });
}

export function createThreeCurrentReachStorageAdapter(storage) {
  const readRaw = () => {
    try {
      return storage?.getItem(THREE_CURRENT_REACH_SAVE_KEY) ?? null;
    } catch {
      return null;
    }
  };
  const strictRead = () => {
    const raw = readRaw();
    if (raw === null) return null;
    try {
      return sanitizeThreeCurrentReachSave(JSON.parse(raw));
    } catch {
      return null;
    }
  };
  return Object.freeze({
    read: strictRead,
    commit(candidate) {
      const priorRaw = readRaw();
      let priorSafe = null;
      if (priorRaw !== null) {
        try {
          priorSafe = sanitizeThreeCurrentReachSave(JSON.parse(priorRaw));
        } catch {
          priorSafe = null;
        }
        if (!priorSafe) {
          return Object.freeze({
            status: "failed",
            reason: "malformed_prior_record",
            lastGoodBytesPreserved: true,
          });
        }
      }
      const safe = sanitizeThreeCurrentReachSave(candidate);
      if (!safe) {
        return Object.freeze({
          status: "failed",
          reason: "candidate_rejected",
          lastGoodBytesPreserved: readRaw() === priorRaw,
        });
      }
      const serialized = JSON.stringify(safe);
      try {
        storage?.setItem(THREE_CURRENT_REACH_SAVE_KEY, serialized);
        const rawReadBack = readRaw();
        const readBack = strictRead();
        if (!readBack || JSON.stringify(readBack) !== serialized || rawReadBack !== serialized) {
          throw new Error("read_back_mismatch");
        }
        return Object.freeze({ status: "committed", value: readBack });
      } catch (error) {
        try {
          if (priorRaw === null) storage?.removeItem(THREE_CURRENT_REACH_SAVE_KEY);
          else storage?.setItem(THREE_CURRENT_REACH_SAVE_KEY, priorRaw);
        } catch {
          return Object.freeze({
            status: "failed",
            reason: "rollback_failed",
            lastGoodBytesPreserved: false,
          });
        }
        return Object.freeze({
          status: "failed",
          reason: error?.message === "read_back_mismatch"
            ? "read_back_mismatch"
            : "local_write_unavailable",
          lastGoodBytesPreserved: readRaw() === priorRaw,
        });
      }
    },
  });
}

function publicForm(group) {
  if (group === "tr30_python_primary" || group === "tr30_python_transfer") {
    const form = group.endsWith("primary") ? "primary" : "transfer";
    return {
      kind: "python",
      form,
      fieldIds: ["learnerSource"],
      starter: contract.python_contract.forms[form],
    };
  }
  if (group === "tr30_python_retrieval") {
    return {
      kind: "retrieval",
      form: "retrieval",
      fieldIds: Object.keys(retrievalAnswers),
      options: {
        iterable: ["samples", "corridor_for_form", "correspondence"],
        currentItem: ["sample", "samples", "corridor"],
        loopBody: [
          "append_one_ordered_correspondence_record",
          "replace_the_supplied_samples",
          "open_a_live_source",
        ],
        outputCount: [
          "three_records_for_three_samples",
          "one_summary_for_all_samples",
          "unbounded_records",
        ],
        purposeBoundary: [
          "common_return_purpose_remains_none",
          "common_return_is_a_route",
          "common_return_identifies_a_workload",
        ],
      },
    };
  }
  const workloadForm = group.match(/^tr30_workload_(primary|retrieval|transfer)$/)?.[1];
  if (workloadForm) {
    const forms = Object.values(contract.ai901_contract.forms).flat();
    return {
      kind: "workload",
      form: workloadForm,
      dimensions: [...aiDimensions],
      cases: contract.ai901_contract.forms[workloadForm].map(({ id, prompt }) => ({ id, prompt })),
      options: {
        workload: [...new Set(forms.map((item) => item.workload))],
        deciding_signal: [...new Set(forms.map((item) => item.deciding_signal))],
      },
    };
  }
  if (group === "tr30_modality" || group === "tr30_agentic") {
    const kind = group.endsWith("modality") ? "modality" : "agentic";
    return {
      kind: "explanation",
      form: kind,
      fieldIds: [kind],
      options: kind === "modality"
        ? [
          explanationAnswers.modality,
          "input_modality_alone_determines_the_requested_workload",
          "all_audio_requests_are_speech_workloads",
        ]
        : [
          explanationAnswers.agentic,
          "generation_alone_makes_a_system_agentic",
          "any_single_model_response_is_an_agent",
        ],
    };
  }
  return null;
}

function baseState(group, options = {}) {
  const definition = groupDefinitions[group];
  const relationStatus = options.relations ?? [];
  const actions = definition.actions.filter((action) => (
    !observationActions.includes(action)
    || !relationStatus.includes(actionForObservation[action])
  ));
  return {
    shellVersion: THREE_CURRENT_REACH_SHELL_VERSION,
    controllerVersion: THREE_CURRENT_REACH_CONTROLLER_VERSION,
    packetId: "RP-004",
    boardState: group === "cm50_route" ? "SC-04" : "SC-05",
    phase: definition.phase,
    activeGroup: group,
    owner: options.owner ?? definition.owner,
    headingId: definition.headingId,
    statusRegionId: "three-current-status",
    statusMessageId: options.statusMessageId ?? `td004:${group}:ready`,
    statusMessage: options.statusMessage ?? readyStatusMessages[group],
    availableActions: actions,
    recordedObservationIds: [...relationStatus],
    observationControls: observationActions.map((action) => ({
      action,
      observationId: actionForObservation[action],
      recorded: relationStatus.includes(actionForObservation[action]),
      status: relationStatus.includes(actionForObservation[action])
        ? "Recorded - no second event"
        : "Available",
    })),
    form: publicForm(group),
    failedIds: options.failedIds ?? [],
    repairTarget: options.repairTarget ?? null,
    privateWorkCleared: true,
    transientWorkCleared: true,
    continuation: "continuation",
    cityStateDelta: null,
    externalStateDelta: null,
    successor: null,
    authorityGranted: false,
    externalActionEnabled: false,
    worldStateChanged: false,
    replayedEvents: [],
    evidenceCount: options.evidenceCount ?? 0,
    reviewRows: options.reviewRows ?? [],
    note: options.note ?? null,
    continuationRecorded: options.continuationRecorded ?? false,
    focusIntent: {
      group,
      target: options.focusTarget ?? definition.headingId,
    },
  };
}

function exactIntent(intent, state) {
  return exactKeys(intent, intentKeys)
    && intent.mode === "campaign"
    && intent.shellVersion === THREE_CURRENT_REACH_SHELL_VERSION
    && intent.controllerVersion === THREE_CURRENT_REACH_CONTROLLER_VERSION
    && intent.packetId === "RP-004"
    && intent.activeGroupId === state.activeGroup
    && intent.expectedOwner === state.owner
    && state.availableActions.includes(intent.allowlistedActionId)
    && threeCurrentReachModalities.includes(intent.activationKind)
    && opaqueToken(intent.opaqueFreshEventToken);
}

export function createThreeCurrentReachIntent(
  state,
  action,
  activationKind,
  opaqueFreshEventToken,
) {
  return Object.freeze({
    mode: "campaign",
    shellVersion: THREE_CURRENT_REACH_SHELL_VERSION,
    controllerVersion: THREE_CURRENT_REACH_CONTROLLER_VERSION,
    packetId: "RP-004",
    activeGroupId: state?.activeGroup ?? null,
    expectedOwner: state?.owner ?? null,
    allowlistedActionId: action,
    activationKind,
    opaqueFreshEventToken,
  });
}

function nextLearningGroup(evidence) {
  return [
    "tr30_python_primary",
    "tr30_python_retrieval",
    "tr30_python_transfer",
    "tr30_workload_primary",
    "tr30_workload_retrieval",
    "tr30_workload_transfer",
    "tr30_modality",
    "tr30_agentic",
    "tr30_review",
  ][Math.min(8, evidence.length)];
}

function buildCandidate(evidence) {
  return {
    version: THREE_CURRENT_REACH_RECORD_VERSION,
    packetId: "RP-004",
    mappingId: "RP004-A3-THREE-CURRENT-REACH",
    checkpoint: "three_current_reach_complete",
    continuation: "continuation",
    cityStateDelta: null,
    externalStateDelta: null,
    successor: null,
    note: {
      relations: [...threeCurrentReachObservationIds],
      commonReturn: "observed_purpose_unknown",
      correspondence: "sanitized_replicas_only",
      purpose: null,
    },
    evidence: clone(evidence),
  };
}

export function createThreeCurrentReachNormalController(options = {}) {
  const predecessor = sanitizeCalibrationMarginReviewSave(options.predecessorRecord);
  const restored = sanitizeThreeCurrentReachSave(options.restoredRecord);
  const adapter = options.adapter;
  const predecessorBytes = options.predecessorBytes ?? (
    predecessor ? JSON.stringify(predecessor) : null
  );
  const readPredecessorBytes = typeof options.readPredecessorBytes === "function"
    ? options.readPredecessorBytes
    : () => predecessorBytes;
  const handledTokens = new Set();
  let relations = [];
  let evidence = sanitizeEvidencePrefix(options.restoredEvidence);
  let draft = {};
  let attempts = {};
  let commonPurpose = null;
  let state = restored
    ? baseState("tr40_restore", {
      note: restored.note,
      evidenceCount: restored.evidence.length,
      statusMessageId: "td004:tr40_restore:no-replay",
      statusMessage: "The exact local expedition note was restored without replaying completed work or world events.",
    })
    : baseState("cm50_route", {
      statusMessageId: "td004:cm50_route:available",
      statusMessage: predecessor
        ? "One expedition-marked survey and two released returns are independently available."
        : "The expedition-marked survey is unavailable until the exact predecessor is restored.",
    });
  let record = restored;
  let repairTarget = null;

  const setGroup = (group, extra = {}) => {
    draft = {};
    commonPurpose = null;
    state = baseState(group, {
      relations,
      evidenceCount: evidence.length,
      ...extra,
    });
    return clone(state);
  };
  const reject = (reason) => Object.freeze({
    status: "rejected",
    reason,
    state: clone(state),
  });
  const returnResult = (target) => {
    draft = {};
    relations = [];
    commonPurpose = null;
    handledTokens.clear();
    return Object.freeze({
      status: target === "RP-003"
        ? "returned_to_calibration_margin_write_free"
        : "returned_to_city_threshold_write_free",
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
      state: target === "RP-003" ? setGroup("cm50_route") : clone(state),
    });
  };
  const failLearning = (target, failed) => {
    attempts[target] = (attempts[target] ?? 0) + 1;
    repairTarget = target;
    return Object.freeze({
      status: "remediation_required",
      answerIncluded: false,
      failedIds: Object.freeze([...failed]),
      state: setGroup("tr30_repair", {
        owner: target.startsWith("PY-011")
          ? "BUILDER WORK // SANITIZED REPLICA"
          : "901 TEACHER // COURSE PRACTICE",
        failedIds: failed,
        repairTarget: target,
        focusTarget: "tr30-save-recovery-heading",
        statusMessageId: `td004:tr30_repair:${target}`,
        statusMessage: "The attempt did not meet every named check. Private work was cleared; review the listed boundaries before opening a fresh blank retry.",
      }),
    });
  };
  const finalize = (skill, form, correctness, nextGroup) => {
    const key = `${skill}:${form}`;
    attempts[key] = (attempts[key] ?? 0) + 1;
    evidence.push(evidenceRecord(skill, form, correctness, attempts[key]));
    return Object.freeze({
      status: `${form}_finalized`,
      evidenceGranted: true,
      state: setGroup(nextGroup, {
        statusMessageId: `td004:${nextGroup}:fresh-blank`,
        statusMessage: "The prior boundary is finalized independently. This next form is genuinely blank.",
      }),
    });
  };

  return Object.freeze({
    getState() {
      return clone(state);
    },
    getRecord() {
      return record ? clone(record) : null;
    },
    updateField(name, value) {
      if (typeof name !== "string"
        || typeof value !== "string"
        || value.length > 20000
        || !state.form) return reject("field_update_rejected");
      if (state.form.kind === "workload") {
        const [caseId, dimension] = name.split(".");
        const validCase = state.form.cases.some((item) => item.id === caseId);
        if (!validCase || !aiDimensions.includes(dimension)
          || !state.form.options[dimension].includes(value)) {
          return reject("field_update_rejected");
        }
        draft[caseId] = { ...(draft[caseId] ?? {}), [dimension]: value };
      } else if (state.form.kind === "retrieval") {
        if (!state.form.fieldIds.includes(name)
          || !state.form.options[name].includes(value)) return reject("field_update_rejected");
        draft[name] = value;
      } else if (state.form.kind === "explanation") {
        if (!state.form.fieldIds.includes(name)
          || !state.form.options.includes(value)) return reject("field_update_rejected");
        draft[name] = value;
      } else if (state.form.kind === "python" && name === "learnerSource") {
        draft.learnerSource = value;
      } else {
        return reject("field_update_rejected");
      }
      return Object.freeze({ status: "field_updated_private", state: clone(state) });
    },
    setCommonReturnPurpose(value) {
      commonPurpose = value;
      return Object.freeze({ status: "transient_observation_updated", state: clone(state) });
    },
    dispatch(intent) {
      if (options.mode === "demo_tour") return reject("tour_route_closed");
      const valid = exactIntent(intent, state);
      const token = intent?.opaqueFreshEventToken;
      if (!valid || handledTokens.has(token)) {
        return reject(handledTokens.has(token) ? "one_hit_only" : "intent_rejected");
      }
      const action = intent.allowlistedActionId;
      if (action === threeCurrentReachActions.route) {
        if (!predecessor
          || predecessor.checkpoint !== "calibration_margin_complete"
          || state.phase !== "CM-50 VERIFIED RESTORE") return reject("predecessor_rejected");
        handledTokens.add(token);
        return Object.freeze({
          status: "three_current_arrived_zero_evidence",
          evidenceGranted: false,
          state: setGroup("tr00_orient", {
            statusMessageId: "td004:tr00_orient:arrived",
            statusMessage: "Arrival is recorded locally. No observation, course evidence, record write, or world response occurred.",
          }),
        });
      }
      if (action === threeCurrentReachActions.returnCalibration) {
        handledTokens.add(token);
        return returnResult("RP-003");
      }
      if (action === threeCurrentReachActions.returnCivic) {
        handledTokens.add(token);
        return Object.freeze({
          status: "returned_to_rp002_write_free",
          route: Object.freeze({
            target: "RP-002",
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
      }
      if (action === threeCurrentReachActions.returnThreshold) {
        handledTokens.add(token);
        return returnResult("CITY_THRESHOLD");
      }
      if (action === threeCurrentReachActions.orient) {
        handledTokens.add(token);
        return Object.freeze({
          status: "relations_visible_zero_evidence",
          evidenceGranted: false,
          state: setGroup("tr10_relations"),
        });
      }
      if (Object.hasOwn(actionForObservation, action)) {
        const id = actionForObservation[action];
        if (relations.includes(id)) return reject("observation_already_recorded");
        handledTokens.add(token);
        relations.push(id);
        const complete = relations.length === threeCurrentReachObservationIds.length;
        return Object.freeze({
          status: complete
            ? "relations_complete_zero_learning_credit"
            : "relation_recorded_zero_learning_credit",
          evidenceGranted: false,
          state: setGroup(complete ? "tr20_common_return" : "tr10_relations", {
            focusTarget: complete
              ? "tr20-common-return-heading"
              : focusForObservation[observationActions.find((candidate) => (
                !relations.includes(actionForObservation[candidate])
              ))],
          }),
        });
      }
      if (action === threeCurrentReachActions.commonReturn) {
        if (relations.length !== 3 || commonPurpose !== null) {
          commonPurpose = null;
          return Object.freeze({
            status: "purpose_inference_rejected",
            answerIncluded: false,
            evidenceGranted: false,
            state: setGroup("tr20_common_return", {
              focusTarget: "common-return-action",
              statusMessageId: "td004:tr20_common_return:purpose-rejected",
              statusMessage: "Record only the visible common return. Its purpose and destination remain unknown.",
            }),
          });
        }
        handledTokens.add(token);
        return Object.freeze({
          status: "common_return_recorded_zero_learning_credit",
          evidenceGranted: false,
          state: setGroup(nextLearningGroup(evidence), {
            statusMessageId: "td004:tr30:learning-boundary",
            statusMessage: "Physical observation is complete and remains separate from course evidence.",
          }),
        });
      }

      const submitMap = {
        [threeCurrentReachActions.submitPythonPrimary]: ["PY-011", "primary", "tr30_python_primary", "tr30_python_retrieval"],
        [threeCurrentReachActions.submitPythonRetrieval]: ["PY-011", "retrieval", "tr30_python_retrieval", "tr30_python_transfer"],
        [threeCurrentReachActions.submitPythonTransfer]: ["PY-011", "transfer", "tr30_python_transfer", "tr30_workload_primary"],
        [threeCurrentReachActions.submitWorkloadPrimary]: ["RP004-WORKLOAD-01", "primary", "tr30_workload_primary", "tr30_workload_retrieval"],
        [threeCurrentReachActions.submitWorkloadRetrieval]: ["RP004-WORKLOAD-01", "retrieval", "tr30_workload_retrieval", "tr30_workload_transfer"],
        [threeCurrentReachActions.submitWorkloadTransfer]: ["RP004-WORKLOAD-01", "transfer", "tr30_workload_transfer", "tr30_modality"],
      };
      if (Object.hasOwn(submitMap, action)) {
        const [skill, form, current, next] = submitMap[action];
        let result;
        if (skill === "PY-011") {
          result = form === "retrieval"
            ? evaluateRetrieval(draft)
            : evaluateThreeCurrentReachPython(form, draft.learnerSource);
        } else {
          result = evaluateWorkloads(form, draft);
        }
        if (!result.passed) {
          handledTokens.add(token);
          return failLearning(`${skill}:${form}`, result.failed);
        }
        handledTokens.add(token);
        return finalize(skill, form, result.correctness, next);
      }
      if (action === threeCurrentReachActions.submitModality
        || action === threeCurrentReachActions.submitAgentic) {
        const kind = action === threeCurrentReachActions.submitModality
          ? "modality"
          : "agentic";
        const passed = draft[kind] === explanationAnswers[kind];
        if (!passed) {
          handledTokens.add(token);
          return failLearning(
            `RP004-WORKLOAD-01:${kind}_explanation`,
            [`${kind}_boundary`],
          );
        }
        handledTokens.add(token);
        return finalize(
          "RP004-WORKLOAD-01",
          `${kind}_explanation`,
          { [`${kind}_boundary`]: true },
          kind === "modality" ? "tr30_agentic" : "tr30_review",
        );
      }
      if (action === threeCurrentReachActions.retry) {
        handledTokens.add(token);
        const target = repairTarget;
        repairTarget = null;
        const targetGroup = {
          "PY-011:primary": "tr30_python_primary",
          "PY-011:retrieval": "tr30_python_retrieval",
          "PY-011:transfer": "tr30_python_transfer",
          "RP004-WORKLOAD-01:primary": "tr30_workload_primary",
          "RP004-WORKLOAD-01:retrieval": "tr30_workload_retrieval",
          "RP004-WORKLOAD-01:transfer": "tr30_workload_transfer",
          "RP004-WORKLOAD-01:modality_explanation": "tr30_modality",
          "RP004-WORKLOAD-01:agentic_explanation": "tr30_agentic",
        }[target];
        if (!targetGroup) return reject("repair_target_missing");
        return Object.freeze({
          status: "fresh_blank_retry_visible",
          state: setGroup(targetGroup, {
            statusMessageId: `td004:${targetGroup}:retry-blank`,
            statusMessage: "A wholly blank retry is ready. No prior response or answer was carried forward.",
          }),
        });
      }
      if (action === threeCurrentReachActions.review) {
        if (evidence.length !== 8 || relations.length !== 3) {
          const group = evidence.length < 8 ? nextLearningGroup(evidence) : "tr10_relations";
          return Object.freeze({
            status: "review_incomplete_recovered",
            state: setGroup(group),
          });
        }
        handledTokens.add(token);
        return Object.freeze({
          status: "provenance_inspected_zero_credit",
          evidenceGranted: false,
          state: setGroup("tr30_provenance", {
            reviewRows: [
              {
                id: "physical",
                label: "Four physical observations",
                state: "Three relations and one apparent return finalized separately",
              },
              {
                id: "python",
                label: "Python loop evidence",
                state: "Primary, closed-note retrieval, and fresh transfer finalized",
              },
              {
                id: "ai901",
                label: "AI workload evidence",
                state: "Three forms and two explanations finalized independently",
              },
              {
                id: "provenance",
                label: "Local source and authority boundary",
                state: "Sanitized replicas only; no live read, control, or external action",
              },
            ],
            statusMessageId: "td004:tr30_provenance:inspected",
            statusMessage: "Sanitized replicas, offline processing, and no external action are confirmed for this local note.",
          }),
        });
      }
      if (action === threeCurrentReachActions.save) {
        const candidate = buildCandidate(evidence);
        handledTokens.add(token);
        const result = adapter?.commit(candidate) ?? {
          status: "failed",
          reason: "local_storage_unavailable",
          lastGoodBytesPreserved: true,
        };
        const predecessorStable = readPredecessorBytes() === predecessorBytes;
        const safe = result.status === "committed"
          ? sanitizeThreeCurrentReachSave(result.value)
          : null;
        if (!safe || !predecessorStable) {
          return Object.freeze({
            status: "save_failed_recovered",
            reason: predecessorStable ? result.reason ?? "read_back_rejected" : "predecessor_changed",
            lastGoodBytesPreserved: result.lastGoodBytesPreserved === true,
            predecessorBytesPreserved: predecessorStable,
            state: setGroup("tr30_save_recovery", {
              statusMessageId: "td004:tr30_save_recovery:failed",
              statusMessage: "The local note was not replaced. The last verified note or verified absence remains unchanged. Review provenance again before a fresh save.",
            }),
          });
        }
        record = safe;
        relations = [...threeCurrentReachObservationIds];
        evidence = [...safe.evidence];
        return Object.freeze({
          status: "save_committed_verified_restore",
          predecessorBytesPreserved: true,
          record: clone(record),
          state: setGroup("tr40_restore", {
            note: record.note,
            statusMessageId: "td004:tr40_restore:verified",
            statusMessage: "The exact local note passed strict read-back. No route, learning, or world event replayed.",
          }),
        });
      }
      if (action === threeCurrentReachActions.continuation) {
        handledTokens.add(token);
        return Object.freeze({
          status: "destinationless_continuation_recorded",
          routeOpened: false,
          destination: null,
          successor: null,
          evidenceGranted: false,
          state: setGroup("tr40_restore_recorded", {
            note: record?.note ?? null,
            continuationRecorded: true,
            statusMessageId: "td004:tr40_restore_recorded:local-only",
            statusMessage: "The physical relation continues beyond view. No destination or route was recorded.",
          }),
        });
      }
      return reject("action_unavailable");
    },
  });
}

export const threeCurrentReachPublicContract = Object.freeze({
  observationIds: threeCurrentReachObservationIds,
  workloadFamilies: Object.freeze([
    "generative_ai",
    "agentic_ai",
    "text_analysis",
    "speech",
    "computer_vision",
    "information_extraction",
  ]),
  minimumTargetCssPx: contract.accessibility_contract.minimum_target_css_px,
  offlineOnly: true,
  noAuthority: true,
  noExamGuarantee: true,
});
