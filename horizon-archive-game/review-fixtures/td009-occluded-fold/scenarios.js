import contract from "../../../curriculum/readiness/RP-009/contract.json" with { type: "json" };
import manifest from "./launch-manifest.json" with { type: "json" };
import {
  OCCLUDED_FOLD_CONTROLLER_VERSION,
  OCCLUDED_FOLD_SHELL_VERSION,
  OCCLUDED_FOLD_TRUTHFUL_WORKSPACE_LABEL,
  occludedFoldActions,
  occludedFoldExplanationAnswers,
  occludedFoldObservationIds,
  occludedFoldPythonTraceAnswers,
} from "../../src/OccludedFoldNormal.js";

export const TD009_OCCLUDED_FOLD_FIXTURE = "TD009_OCCLUDED_FOLD_FIXTURE";
export const occludedFoldScenarioNames = Object.freeze([...manifest.scenarios]);

export const FROZEN_LONGEST_COPY = Object.freeze({
  heading: "RECONCILE THREE SEPARATELY ATTRIBUTABLE EXPEDITION RECORDS WITHOUT INFERRING AN INTERNAL TOPOLOGY",
  label: "CONFIRM THAT BOUNDED CORRESPONDENCE DOES NOT ESTABLISH IDENTITY, CONTINUITY, TRANSFORMATION, CAUSE, PURPOSE, OR AUTHORITY",
  retainedRow: "RP-008 — Bounded offset record retained separately: comparable exposed relations remain local evidence and do not establish a universal arrangement, exclusive lineage, unity, cause, or purpose.",
  truthfulPythonLabel: OCCLUDED_FOLD_TRUTHFUL_WORKSPACE_LABEL,
});

const layouts = Object.freeze({
  layout_desktop: "1920x1080",
  layout_laptop: "1366x768",
  layout_narrow: "390x844",
  layout_effective_200: "768x900-effective-200",
});

const groupContract = Object.freeze({
  of00_orientation: Object.freeze({ owner: "SYSTEM // EXPEDITION LEDGER", headingId: "of00-heading", focusTarget: "of00-heading", actions: [occludedFoldActions.inspect] }),
  of10_observations: Object.freeze({ owner: "PILOT // EDGE SURVEY", headingId: "of10-heading", focusTarget: "of-observe-three-near-margins", actions: Object.freeze([
    occludedFoldActions.continuities, occludedFoldActions.association, occludedFoldActions.difference,
    occludedFoldActions.order, occludedFoldActions.junction, occludedFoldActions.stewardship,
  ]) }),
  of20_python_primary: Object.freeze({ owner: "PILOT // COURSE WORK", headingId: "of20-python-primary-heading", focusTarget: "of20-python-primary-editor", actions: [occludedFoldActions.pythonPrimary], attribution: "BUILDER WORK // SANITIZED REPLICA" }),
  of20_python_trace: Object.freeze({ owner: "PILOT // COURSE WORK", headingId: "of20-python-trace-heading", focusTarget: "of20-python-trace-first", actions: [occludedFoldActions.pythonTrace], attribution: "TEACHER / COURSE // CLOSED-NOTE TRACE" }),
  of20_python_transfer: Object.freeze({ owner: "PILOT // COURSE WORK", headingId: "of20-python-transfer-heading", focusTarget: "of20-python-transfer-editor", actions: [occludedFoldActions.pythonTransfer], attribution: "BUILDER WORK // SANITIZED REPLICA" }),
  of20_prompt_primary: Object.freeze({ owner: "PILOT // COURSE WORK", headingId: "of20-prompt-primary-heading", focusTarget: "of20-prompt-primary-first", actions: [occludedFoldActions.visionPrimary], attribution: "TEACHER // COURSE" }),
  of20_prompt_retrieval: Object.freeze({ owner: "PILOT // COURSE WORK", headingId: "of20-prompt-retrieval-heading", focusTarget: "of20-prompt-retrieval-first", actions: [occludedFoldActions.visionRetrieval], attribution: "TEACHER // COURSE" }),
  of20_prompt_transfer: Object.freeze({ owner: "PILOT // COURSE WORK", headingId: "of20-prompt-transfer-heading", focusTarget: "of20-prompt-transfer-first", actions: [occludedFoldActions.visionTransfer], attribution: "TEACHER // COURSE" }),
  of20_system_user_explanation: Object.freeze({ owner: "PILOT // COURSE WORK", headingId: "of20-system-user-explanation-heading", focusTarget: "of20-system-user-explanation-field", actions: [occludedFoldActions.capabilityBoundary], attribution: "TEACHER // COURSE" }),
  of20_truth_authority_explanation: Object.freeze({ owner: "PILOT // COURSE WORK", headingId: "of20-truth-authority-explanation-heading", focusTarget: "of20-truth-authority-explanation-field", actions: [occludedFoldActions.relationBoundary], attribution: "TEACHER // COURSE" }),
  of20_recovery: Object.freeze({ owner: "SYSTEM // RECOVERY", headingId: "of20-recovery-heading", focusTarget: "of20-recovery-heading", actions: [occludedFoldActions.retry] }),
  of20_review: Object.freeze({ owner: "PILOT // EXPEDITION REVIEW", headingId: "of20-review-heading", focusTarget: "of20-review-heading", actions: [occludedFoldActions.review] }),
  of20_save: Object.freeze({ owner: "PILOT // EXPEDITION LEDGER", headingId: "of20-save-heading", focusTarget: "of20-save-heading", actions: [occludedFoldActions.save, occludedFoldActions.cancelSave] }),
  of20_save_recovery: Object.freeze({ owner: "SYSTEM // RECOVERY", headingId: "of20-save-recovery-heading", focusTarget: "of20-save-recovery-heading", actions: [occludedFoldActions.retrySave] }),
  of30_restore: Object.freeze({ owner: "SYSTEM // EXPEDITION LEDGER", headingId: "of30-restore-heading", focusTarget: "of30-restore-heading", actions: [occludedFoldActions.notation] }),
});

const returnActions = Object.freeze([occludedFoldActions.returnInterval, occludedFoldActions.returnThreshold]);
const clone = (value) => JSON.parse(JSON.stringify(value));

function publicForm(group) {
  if (group === "of20_python_primary" || group === "of20_python_transfer") {
    const form = group.endsWith("primary") ? "primary" : "transfer";
    return {
      kind: "python", form, fieldIds: ["learnerSource"],
      scaffold: {
        records: [], environmentName: contract.python_contract.forms[form].environment_name,
        interpretationLimits: ["identity=None", "topology=None", "continuity=None", "transformation=None", "cause=None", "purpose=None"],
      },
      truthfulLabel: OCCLUDED_FOLD_TRUTHFUL_WORKSPACE_LABEL,
    };
  }
  if (group === "of20_python_trace") {
    const fieldIds = Object.keys(occludedFoldPythonTraceAnswers);
    return { kind: "trace", form: "trace", fieldIds, options: Object.fromEntries(fieldIds.map((id) => [id, [occludedFoldPythonTraceAnswers[id], `review_${id}_boundary`, `do_not_infer_${id}`]])) };
  }
  if (["of20_prompt_primary", "of20_prompt_retrieval", "of20_prompt_transfer"].includes(group)) {
    const form = group.split("_").at(-1);
    const signals = [...new Set(Object.values(contract.ai901_contract.forms).flat().map((item) => item.deciding_signal))];
    return {
      kind: "vision", form,
      cases: contract.ai901_contract.forms[form].map(({ id, prompt }) => ({ id, prompt })),
      dimensions: [...contract.ai901_contract.dimensions],
      options: { prompt_owner: ["system_prompt", "user_prompt"], deciding_signal: signals },
    };
  }
  if (group === "of20_system_user_explanation" || group === "of20_truth_authority_explanation") {
    const kind = group === "of20_system_user_explanation" ? "capabilityBoundary" : "relationBoundary";
    return { kind: "explanation", form: kind, fieldIds: [kind], options: [occludedFoldExplanationAnswers[kind], `review_${kind}_without_world_inference`, `do_not_infer_${kind}`] };
  }
  return null;
}

function learningGroupFor(name) {
  if (name.endsWith("_miss")) return "of20_recovery";
  if (name === "python_primary_pass") return "of20_python_trace";
  if (name.startsWith("python_primary")) return "of20_python_primary";
  if (name === "python_trace_pass") return "of20_python_transfer";
  if (name.startsWith("python_trace")) return "of20_python_trace";
  if (name === "python_transfer_pass") return "of20_prompt_primary";
  if (name.startsWith("python_transfer")) return "of20_python_transfer";
  if (name === "prompt_primary_pass") return "of20_prompt_retrieval";
  if (name.startsWith("prompt_primary")) return "of20_prompt_primary";
  if (name === "prompt_retrieval_pass") return "of20_prompt_transfer";
  if (name.startsWith("prompt_retrieval")) return "of20_prompt_retrieval";
  if (name === "prompt_transfer_pass") return "of20_system_user_explanation";
  if (name.startsWith("prompt_transfer")) return "of20_prompt_transfer";
  if (name === "system_user_explanation_pass") return "of20_truth_authority_explanation";
  if (name.startsWith("system_user_explanation")) return "of20_system_user_explanation";
  if (name === "truth_authority_explanation_pass") return "of20_review";
  if (name.startsWith("truth_authority_explanation")) return "of20_truth_authority_explanation";
  return null;
}

function groupFor(name) {
  const learning = learningGroupFor(name);
  if (learning) return learning;
  if (name === "of00_arrive" || name === "interruption_after_of00_pre_save") return "of00_orientation";
  if (name === "of10_survey" || name.startsWith("observation_") || name.startsWith("resume_")) return "of10_observations";
  if (name === "of20_reconcile" || name === "review_ineligible") return "of20_python_primary";
  if (name === "review_eligible") return "of20_save";
  if (name === "save_rollback_verified") return "of20_save_recovery";
  if (["of30_restore", "save_committed", "restore_replay_free", "continuation_inert"].includes(name)) return "of30_restore";
  if (name.includes("cleared") || name === "atomic_polite_status") return "of20_recovery";
  return "of20_review";
}

function reviewRows() {
  return [
    { id: "retained_rp007_scope", scope: "RP-007", owner: "Retained RP-007 summary", state: "Read-only // separately attributable" },
    { id: "retained_rp008_scope", scope: "RP-008", owner: "Retained RP-008 summary", state: FROZEN_LONGEST_COPY.retainedRow },
    { id: "candidate_rp009_scope", scope: "RP-009", owner: "Candidate RP-009 edge ledger", state: "Read-only // separately attributable" },
  ];
}

function observationFixtureState(name) {
  if (name === "resume_contiguous_prefix") {
    return {
      recordedIds: occludedFoldObservationIds.slice(0, 2),
      focusTarget: "of-observe-unmatched-record",
    };
  }
  if (name === "resume_first_gap") {
    return {
      recordedIds: [occludedFoldObservationIds[0], occludedFoldObservationIds[2]],
      focusTarget: "of-observe-bounded-correspondences",
    };
  }
  if (name.startsWith("observation_")) {
    return {
      recordedIds: [name.slice("observation_".length)],
      focusTarget: "of10-observation-peer-heading",
    };
  }
  return { recordedIds: [], focusTarget: "of-observe-three-near-margins" };
}

function stateFor(name) {
  const group = groupFor(name);
  const spec = groupContract[group];
  const observationId = name.startsWith("observation_") ? name.slice("observation_".length) : null;
  const observationState = group === "of10_observations" ? observationFixtureState(name) : null;
  const layout = layouts[name] ?? "representative";
  const isMiss = name.endsWith("_miss") || name === "review_ineligible";
  const state = {
    shellVersion: OCCLUDED_FOLD_SHELL_VERSION,
    controllerVersion: OCCLUDED_FOLD_CONTROLLER_VERSION,
    packetId: "RP-009", mappingId: "RP009-A3-OCCLUDED-FOLD",
    phase: group === "of30_restore" ? "OF-30 VERIFY + RETURN" : group.startsWith("of20") ? "OF-20 RECONCILE BOUNDARIES + SAVE" : group === "of10_observations" ? "OF-10 SURVEY EXPOSED EDGES" : "OF-00 ARRIVE + ORIENT",
    boardState: "SC-10", activeGroup: group, owner: spec.owner,
    contentAttribution: spec.attribution ?? null, headingId: spec.headingId,
    statusRegionId: "occluded-fold-status", statusMessageId: `td009:fixture:${name}`,
    statusMessage: name === "continuation_inert"
      ? "destination=null, routeOpened=false, and successor=null; no persistence, evidence, authority, or route was created."
      : isMiss
        ? "Only the named public dimensions remain incomplete. Private work was discarded; guidance contains no answer and retry starts blank."
        : `Selected exact ${name} product state is ready; no storage, network, cross-credit, route authority, or world response occurred.`,
    availableActions: [...spec.actions, ...returnActions],
    recordedObservationIds: observationState?.recordedIds
      ?? (group.startsWith("of20") || group === "of30_restore" ? [...occludedFoldObservationIds] : []),
    sceneObservationId: observationId,
    form: publicForm(group),
    failedPublicIds: isMiss ? [name.includes("prompt") ? "P01.prompt_owner" : name.includes("python") ? "ledger_exact_keys" : "first_incomplete_responsibility"] : [],
    repairTarget: isMiss ? name : null,
    reviewRows: group === "of20_save" ? reviewRows() : [],
    note: group === "of30_restore" ? { observations: [...occludedFoldObservationIds], reconciliation: { mode: "bounded" } } : null,
    evidenceCount: group === "of20_review" || group === "of20_save" || group === "of30_restore" ? 8 : 0,
    privateWorkCleared: true, transientWorkCleared: true, temporaryWorkspaceCleared: true,
    cityStateDelta: null, externalStateDelta: null, successor: null,
    authorityGranted: false, externalActionEnabled: false, worldStateChanged: false,
    replayedEvents: [], routeOpened: false,
    focusIntent: { group, target: observationState?.focusTarget ?? spec.focusTarget },
  };
  return Object.freeze(state);
}

function isBoundaryScenario(name) {
  return name.startsWith("route_") || name === "interruption_before_consumption"
    || name === "return_offset_reach" || name === "return_city_threshold";
}

function boundaryStateFor(name) {
  const city = name === "return_city_threshold";
  const invalid = name.includes("invalid") || name.includes("duplicate") || name.includes("private") || name.includes("tour") || name === "interruption_before_consumption";
  return Object.freeze({
    kind: city ? "city-threshold" : "offset-route",
    owner: city ? "SYSTEM // CITY THRESHOLD" : "PILOT // EXPEDITION NAVIGATION",
    heading: city ? "City Threshold restored" : "Occluded Fold adjacent survey",
    headingId: city ? "city-threshold-heading" : "td009-route-heading",
    status: invalid
      ? "Occluded Fold was not entered; exact Offset Reach remains available and no future valid token was spent."
      : city
        ? "City Threshold restored write-free and replay-free; no route, authority, evidence, or world effect was created."
        : "One adjacent expedition survey is available; the released Offset Reach returns and inert notation remain unchanged.",
    controls: city ? ["CONTINUE AT CITY THRESHOLD"] : [occludedFoldActions.route, occludedFoldActions.returnInterval, occludedFoldActions.returnThreshold],
    focusIntent: { group: city ? "city-threshold-return" : "td009-occluded-fold-route", target: city ? "city-threshold-heading" : "td009-route-heading" },
    landmark: city ? "city-threshold-product-landmark" : "offset-reach-product-landmark",
  });
}

export function createOccludedFoldScenario(name) {
  if (!occludedFoldScenarioNames.includes(name)) throw new TypeError("A closed TD-009 scenario is required.");
  const layout = layouts[name] ?? "representative";
  const presentationMode = name === "mode_forced_colors" ? "forced-colors"
    : name === "mode_reduced_motion" ? "reduced-motion"
      : name === "mode_grayscale" ? "grayscale" : "standard";
  const requiresLongestCopy = name === "longest_copy_contained" || Object.hasOwn(layouts, name);
  return Object.freeze({
    name,
    surface: isBoundaryScenario(name) ? "contract-equivalent-boundary" : "production-occluded-fold",
    state: isBoundaryScenario(name) ? boundaryStateFor(name) : stateFor(name),
    layout,
    presentationMode,
    frozenLongestCopy: requiresLongestCopy ? clone(FROZEN_LONGEST_COPY) : null,
    productLandmark: isBoundaryScenario(name) ? boundaryStateFor(name).landmark : "occluded-fold-product-landmark",
    scene: Object.freeze({ role: name.startsWith("observation_") && ["unmatched_exposed_record", "ambiguous_candidate_record", "unavailable_outer_margin", "layered_edge_stewardship"].includes(name.slice(12)) ? "SC-10-OCCLUDED-FOLD-EXPOSED-EDGE-DETAIL" : "SC-10-OCCLUDED-FOLD-PANORAMA", structuralPlaceholder: false, renderingMedium: "css", runtimeImage: "deferred" }),
    storage: "frozen-in-memory-only",
    arbitraryStateAccepted: false,
  });
}
