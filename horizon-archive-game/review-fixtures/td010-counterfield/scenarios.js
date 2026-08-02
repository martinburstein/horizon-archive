import contract from "../../../curriculum/readiness/RP-010/contract.json" with { type: "json" };
import manifest from "./launch-manifest.json" with { type: "json" };
import {
  COUNTERFIELD_CONTROLLER_VERSION, COUNTERFIELD_ROUTE_ACTION, COUNTERFIELD_ROUTE_GROUP,
  COUNTERFIELD_SHELL_VERSION, counterfieldActions, counterfieldExplanationAnswers,
  counterfieldObservationIds, counterfieldPythonTraceAnswers, counterfieldScopeRows,
  counterfieldTruthfulWorkspaceLabel,
} from "../../src/CounterfieldNormal.js";

export const TD010_COUNTERFIELD_FIXTURE = "TD010_COUNTERFIELD_FIXTURE";
export const counterfieldScenarioNames = Object.freeze([...manifest.scenarios]);
const layouts = { layout_desktop: "1920x1080", layout_laptop: "1366x768", layout_narrow: "390x844", layout_effective_200: "768x900-effective-200" };
const observations = Object.fromEntries(counterfieldObservationIds.map((id, index) => [`observation_${id}`, index]));
const groupSpecs = {
  cf00_orientation: ["SYSTEM // EXPEDITION LEDGER", "cf00-heading", "cf00-heading", "CF-00 — ARRIVE AND ORIENT WITHOUT ASSIGNING ONE SYSTEM", [counterfieldActions.inspect]],
  cf10_observations: ["PILOT // COUNTERFIELD SURVEY", "cf10-observation-peer-heading", "cf10-observation-peer-heading", "CF-10 — SURVEY SEVEN EQUAL PHYSICAL EVIDENCE CLASSES", Object.values(counterfieldActions).slice(2, 9)],
  cf20_python_primary: ["PILOT // COURSE WORK", "cf20-python-primary-heading", "cf20-python-primary-editor", "PY-018 — DERIVE ONE BOUNDED EXCHANGE SUMMARY FROM SANITIZED REPLICAS", [counterfieldActions.pythonPrimary]],
  cf20_python_trace: ["PILOT // COURSE WORK", "cf20-python-trace-heading", "cf20-python-trace-first", "TRACE REQUEST-OWNED AND RESPONSE-OWNED FIELDS WITHOUT COLLAPSING THEM", [counterfieldActions.pythonTrace]],
  cf20_python_transfer: ["PILOT // COURSE WORK", "cf20-python-transfer-heading", "cf20-python-transfer-editor", "PY-018 TRANSFER — DERIVE A FRESH BOUNDED EXCHANGE SUMMARY", [counterfieldActions.pythonTransfer]],
  cf20_client_primary: ["PILOT // COURSE WORK", "cf20-client-primary-heading", "cf20-client-primary-first", "AI901-D2-O3 — IDENTIFY THE FOUR DISTINCT CLIENT-FLOW RESPONSIBILITIES", [counterfieldActions.clientPrimary]],
  cf20_client_retrieval: ["PILOT // COURSE WORK", "cf20-client-retrieval-heading", "cf20-client-retrieval-first", "AI901-D2-O3 RETRIEVAL — KEEP CLIENT-FLOW RESPONSIBILITIES DISTINCT", [counterfieldActions.clientRetrieval]],
  cf20_client_transfer: ["PILOT // COURSE WORK", "cf20-client-transfer-heading", "cf20-client-transfer-first", "AI901-D2-O3 TRANSFER — APPLY THE CLIENT-FLOW BOUNDARY", [counterfieldActions.clientTransfer]],
  cf20_client_flow_explanation: ["PILOT // COURSE WORK", "cf20-client-flow-explanation-heading", "cf20-client-flow-explanation", "EXPLAIN THE FOUR DISTINCT CLIENT-FLOW RESPONSIBILITIES", [counterfieldActions.clientFlowBoundary]],
  cf20_truth_authority_explanation: ["PILOT // COURSE WORK", "cf20-truth-authority-explanation-heading", "cf20-truth-authority-explanation", "EXPLAIN WHY VALID CLIENT FLOW PROVES NEITHER OUTPUT TRUTH NOR LIVE AUTHORITY", [counterfieldActions.truthAuthorityBoundary]],
  cf20_recovery: ["SYSTEM // RECOVERY", "cf20-recovery-heading", "cf20-python-primary-first-failed", "RETRY THE FIRST INCOMPLETE RESPONSIBILITY WITHOUT AN ANSWER", [counterfieldActions.retry]],
  cf20_review: ["PILOT // EXPEDITION REVIEW", "cf20-review-heading", "cf20-review-heading", "REVIEW FOUR SEPARATELY ATTRIBUTABLE EXPEDITION SCOPES WITHOUT MERGING THEIR CLAIMS", [counterfieldActions.prepareSave]],
  cf20_save: ["PILOT // EXPEDITION LEDGER", "cf20-save-heading", "cf20-save-heading", "SAVE ONE PRIVATE-FREE BOUNDED COUNTERFIELD SCOPE REGISTER", [counterfieldActions.save, counterfieldActions.cancelSave]],
  cf20_save_recovery: ["SYSTEM // RECOVERY", "cf20-save-retry-heading", "cf20-save-retry-heading", "PRIOR COUNTERFIELD BYTES OR VERIFIED ABSENCE WERE RESTORED EXACTLY", [counterfieldActions.retrySave]],
  cf30_restore: ["SYSTEM // EXPEDITION LEDGER", "cf30-restore-heading", "cf30-restore-heading", "CF-30 — VERIFY FOUR BOUNDED SCOPES AND RETURN WITHOUT REPLAY", [counterfieldActions.look]],
};
function formFor(group) {
  if (["cf20_python_primary", "cf20_python_transfer"].includes(group)) return { kind: "python", form: group.endsWith("primary") ? "primary" : "transfer", fieldIds: ["learnerSource"], truthfulLabel: counterfieldTruthfulWorkspaceLabel };
  if (group === "cf20_python_trace") return { kind: "trace", form: "trace", fieldIds: Object.keys(counterfieldPythonTraceAnswers), options: Object.fromEntries(Object.entries(counterfieldPythonTraceAnswers).map(([id, value]) => [id, [value, `review_${id}_boundary`]])) };
  if (/^cf20_client_(primary|retrieval|transfer)$/.test(group)) { const form = group.split("_").at(-1), dimensions = [...contract.ai901_contract.dimensions]; return { kind: "client", form, cases: contract.ai901_contract.forms[form].map(({ id, case: text }) => ({ id, prompt: text })), dimensions, options: Object.fromEntries(dimensions.map((d) => [d, [...new Set(contract.ai901_contract.forms[form].map((item) => item[d]))]])) }; }
  if (group.endsWith("explanation")) { const form = group.includes("truth") ? "truthAuthorityBoundary" : "clientFlowBoundary"; return { kind: "explanation", form, fieldIds: [form], options: [counterfieldExplanationAnswers[form], `review_${form}`] }; }
  return null;
}
function learningGroup(name) {
  if (name === "python_primary_pass") return "cf20_python_trace"; if (name.startsWith("python_primary")) return name.endsWith("miss") ? "cf20_recovery" : "cf20_python_primary";
  if (name === "python_trace_pass") return "cf20_python_transfer"; if (name.startsWith("python_trace")) return "cf20_python_trace";
  if (name === "python_transfer_pass") return "cf20_client_primary"; if (name.startsWith("python_transfer")) return "cf20_python_transfer";
  if (name === "client_primary_pass") return "cf20_client_retrieval"; if (name.startsWith("client_primary")) return name.endsWith("miss") ? "cf20_recovery" : "cf20_client_primary";
  if (name === "client_retrieval_pass") return "cf20_client_transfer"; if (name.startsWith("client_retrieval")) return "cf20_client_retrieval";
  if (name === "client_transfer_pass") return "cf20_client_flow_explanation"; if (name.startsWith("client_transfer")) return "cf20_client_transfer";
  if (name === "client_flow_explanation_pass") return "cf20_truth_authority_explanation"; if (name.startsWith("client_flow_explanation")) return "cf20_client_flow_explanation";
  if (name === "truth_authority_explanation_pass") return "cf20_review"; if (name.startsWith("truth_authority_explanation")) return "cf20_truth_authority_explanation";
  return null;
}
function groupFor(name) {
  const learning = learningGroup(name); if (learning) return learning;
  if (["route_pointer", "route_touch", "route_keyboard_enter", "route_keyboard_space", "route_switch", "route_speech", "route_screen_reader"].includes(name)) return "cf00_orientation";
  if (name === "resume_contiguous_prefix") return "cf20_python_transfer";
  if (name === "resume_first_gap") return "cf20_python_primary";
  if (name === "request_response_work_cleared") return "cf20_python_trace";
  if (name === "cf00_arrive") return "cf00_orientation";
  if (name === "cf10_survey" || name in observations || name.startsWith("mode_")) return "cf10_observations";
  if (name === "cf20_exchange_save" || name === "review_ineligible") return "cf20_python_primary";
  if (name === "save_rollback_verified") return "cf20_save_recovery";
  if (["cf30_restore", "save_committed", "restore_replay_free", "continuation_inert"].includes(name)) return "cf30_restore";
  if (name.includes("work_cleared") || name === "atomic_polite_status") return "cf20_recovery";
  return "cf20_review";
}
function publicState(name) {
  const group = groupFor(name), [owner, headingId, focus, heading, actions] = groupSpecs[group];
  const recorded = name in observations ? [counterfieldObservationIds[observations[name]]] : name === "resume_contiguous_prefix" ? counterfieldObservationIds.slice(0, 3) : name === "resume_first_gap" ? [counterfieldObservationIds[0], counterfieldObservationIds[2]] : group.startsWith("cf20") || group === "cf30_restore" ? [...counterfieldObservationIds] : [];
  const resumeFocus = name === "client_primary_miss" ? "cf20-client-primary-first-failed" : focus;
  return Object.freeze({ shellVersion: COUNTERFIELD_SHELL_VERSION, controllerVersion: COUNTERFIELD_CONTROLLER_VERSION, packetId: "RP-010", mappingId: "RP010-REQUEST-CLIENT-BOUNDARY-01", phase: group === "cf30_restore" ? "CF-30 VERIFY + RETURN" : group === "cf10_observations" ? "CF-10 SURVEY SEPARATE DISTRICTS" : group === "cf00_orientation" ? "CF-00 ARRIVE + ORIENT" : "CF-20 BOUND EXCHANGE + SAVE", boardState: "SC-11", activeGroup: group, owner, headingId, heading, statusRegionId: "counterfield-status", statusMessageId: `td010:fixture:${name}`, statusMessage: group === "cf20_recovery" ? "SYSTEM // RECOVERY: Only the named public dimensions remain incomplete. Private work was discarded; guidance contains no answer and retry starts blank." : name === "continuation_inert" ? "A destinationless field-margin observation was recorded with destination=null, routeOpened=false, successor=null, zero persistence, and zero evidence." : `Selected exact ${name} product state is ready; storage, network, cross-credit, authority, successor, and world response remain absent.`, availableActions: [...actions, counterfieldActions.returnOccludedFold, counterfieldActions.returnThreshold], recordedObservationIds: recorded, sceneObservationId: name in observations ? counterfieldObservationIds[observations[name]] : null, form: formFor(group), failedPublicIds: group === "cf20_recovery" ? ["first_incomplete_responsibility"] : [], reviewRows: ["cf20_review", "cf20_save"].includes(group) ? counterfieldScopeRows.map((row) => ({ ...row })) : [], evidenceCount: ["cf20_review", "cf20_save", "cf30_restore"].includes(group) ? 8 : 0, cityStateDelta: null, externalStateDelta: null, successor: null, routeOpened: false, replayedEvents: [], focusIntent: { group, target: resumeFocus } });
}
function boundaryState(name) {
  const city = name === "return_city_threshold", of = name === "return_occluded_fold";
  const tour = name === "route_tour_isolated" || name === "tour_work_cleared";
  const routePass = name.startsWith("route_") && ["route_pointer", "route_touch", "route_keyboard_enter", "route_keyboard_space", "route_switch", "route_speech", "route_screen_reader"].includes(name);
  if (routePass) return publicState("cf00_arrive");
  return Object.freeze({ kind: city ? "city" : of ? "occluded" : tour ? "tour" : "route", owner: city ? "PILOT // FLIGHT RECORDER" : of ? "SYSTEM // EXPEDITION LEDGER" : tour ? "SYSTEM // DEMO TOUR" : "PILOT // EXPEDITION NAVIGATION", headingId: city ? "calibration-margin-entry-heading" : of ? "of30-restore-heading" : tour ? "td010-tour-heading" : "td010-route-heading", heading: city ? "City Threshold restored" : of ? "CF-30 return to exact Occluded Fold" : tour ? "COUNTERFIELD CAMPAIGN ROUTE UNAVAILABLE IN DEMO TOUR" : "SURVEY COUNTERFIELD FROM THE VERIFIED OCCLUDED FOLD BOUNDARY", statusMessage: tour ? "Demo Tour reads and writes no campaign storage and creates no route, observation, learning, remediation, save, scope, world, authority, or successor state." : "Counterfield was not entered. Exact released boundary remains restored and no future valid token was spent.", controls: city ? ["CONTINUE AT CITY THRESHOLD"] : of ? ["RETURN CONTROL"] : [COUNTERFIELD_ROUTE_ACTION], focusIntent: { group: "boundary", target: city ? "calibration-margin-entry-heading" : of ? "of30-restore-heading" : tour ? "td010-tour-heading" : "td010-route-heading" } });
}
const boundaryNames = new Set(["route_invalid_released_predecessor", "route_protected_predecessor_rejected", "route_invalid_intent", "route_duplicate_or_stale", "route_private_contaminated", "route_tour_isolated", "interruption_before_consumption", "interruption_after_cf00_pre_save", "tour_work_cleared", "return_occluded_fold", "return_city_threshold"]);
export function createCounterfieldScenario(name) {
  if (!counterfieldScenarioNames.includes(name)) throw new TypeError("A closed TD-010 scenario is required.");
  const state = boundaryNames.has(name) ? boundaryState(name) : publicState(name);
  return Object.freeze({ name, surface: boundaryNames.has(name) ? "contract-equivalent-boundary" : "production-counterfield", state, layout: layouts[name] ?? "representative", presentationMode: name === "mode_forced_colors" ? "forced-colors" : name === "mode_reduced_motion" ? "reduced-motion" : name === "mode_grayscale" ? "grayscale" : "standard", rendersShellLongestCopy: name === "longest_copy_contained" || name in layouts, storage: "frozen-in-memory-only", arbitraryStateAccepted: false, scene: { role: "SC-11-COUNTERFIELD-PANORAMA", structuralPlaceholder: false, renderingMedium: "css", runtimeImage: "not-selected", assetRoleDisposition: "retired-no-runtime-image" } });
}
