import {
  MEASURED_HORIZON_CONTROLLER_VERSION,
  MEASURED_HORIZON_NOT_YET,
  MEASURED_HORIZON_READY,
  MEASURED_HORIZON_ROUTE_ACTION,
  MEASURED_HORIZON_ROUTE_GROUP,
  MEASURED_HORIZON_SHELL_VERSION,
  measuredHorizonActions,
  measuredHorizonGateIds,
} from "../../src/MeasuredHorizonNormal.js";

const slug = (id) => id.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const gateRows = measuredHorizonGateIds.map((gateId) => [`gate-miss-${slug(gateId)}`, "mh25_remediation", "TEACHER // BOUNDED PRACTICE", `mh25-remediate-${slug(gateId)}`, [gateId]]);
const rows = [
  ["route-ready", MEASURED_HORIZON_ROUTE_GROUP, "PILOT // EXPEDITION NAVIGATION", "td012-route-heading"],
  ...["pointer", "touch", "keyboard-enter", "keyboard-space", "switch", "speech", "screen-reader"].map((mode) => [`route-accept-${mode}`, "mh00_assemble", "SYSTEM // EXPEDITION EVIDENCE REVIEW", "mh00-heading"]),
  ["route-reject-protected", MEASURED_HORIZON_ROUTE_GROUP, "PILOT // EXPEDITION NAVIGATION", "td012-route-heading"],
  ["route-reject-private", MEASURED_HORIZON_ROUTE_GROUP, "PILOT // EXPEDITION NAVIGATION", "td012-route-heading"],
  ["route-reject-stale-duplicate", MEASURED_HORIZON_ROUTE_GROUP, "PILOT // EXPEDITION NAVIGATION", "td012-route-heading"],
  ["tour-isolated", "td012-tour", "SYSTEM // DEMO TOUR", "td012-tour-heading"],
  ["mh00-assemble", "mh00_assemble", "SYSTEM // EXPEDITION EVIDENCE REVIEW", "mh00-heading"],
  ["mh00-return-unborrowed", MEASURED_HORIZON_ROUTE_GROUP, "PILOT // EXPEDITION NAVIGATION", "ur30-restored-heading"],
  ["mh10-eligible", "mh10_eligibility", "SYSTEM // EVIDENCE CUSTODY", "mh10-eligibility-heading"],
  ...gateRows,
  ["python-blank", "mh20_python_fresh", "BUILDER WORK // SANITIZED REPLICAS", "mh20-python-source"],
  ["python-miss", "mh25_remediation", "TEACHER // BOUNDED PRACTICE", `mh25-remediate-${slug(measuredHorizonGateIds[0])}`, [measuredHorizonGateIds[0]]],
  ["python-pass", "mh20_ai901_fresh", "TEACHER // BOUNDED PRACTICE", `mh-objective-${slug(measuredHorizonGateIds[1])}-decision`],
  ["ai901-blank", "mh20_ai901_fresh", "TEACHER // BOUNDED PRACTICE", `mh-objective-${slug(measuredHorizonGateIds[1])}-decision`],
  ["ai901-miss", "mh25_remediation", "TEACHER // BOUNDED PRACTICE", `mh25-remediate-${slug(measuredHorizonGateIds[1])}`, [measuredHorizonGateIds[1]]],
  ["ai901-pass", "mh30_local_decision", "SYSTEM // LOCAL READINESS REVIEW", "mh30-decision-heading"],
  ["remediation-open", "mh25_remediation", "TEACHER // BOUNDED PRACTICE", `mh25-remediate-${slug(measuredHorizonGateIds[1])}`, [measuredHorizonGateIds[1]]],
  ["retry-blank", "mh25_ai901_retry", "TEACHER // BOUNDED PRACTICE", `mh-objective-${slug(measuredHorizonGateIds[1])}-decision`, [measuredHorizonGateIds[1]]],
  ["retry-pass", "mh30_local_decision", "SYSTEM // LOCAL READINESS REVIEW", "mh30-decision-heading"],
  ["decision-review", "mh30_local_decision", "SYSTEM // LOCAL READINESS REVIEW", "mh30-decision-heading"],
  ["decision-ready", "mh30_ready", "SYSTEM // LOCAL READINESS REVIEW", "mh30-ready-heading"],
  ["decision-not-yet-ready", "mh30_not_yet_ready", "SYSTEM // LOCAL READINESS REVIEW", `mh25-remediate-${slug(measuredHorizonGateIds[1])}`, [measuredHorizonGateIds[1]]],
  ["save-confirm-ready", "mh40_save_confirm", "SYSTEM // RECORD CUSTODY", "mh40-save-readiness"],
  ["save-confirm-not-yet-ready", "mh40_save_confirm", "SYSTEM // RECORD CUSTODY", "mh40-save-readiness", [measuredHorizonGateIds[1]]],
  ["save-transaction", "mh40_save_transaction", "SYSTEM // RECORD CUSTODY", "mh40-transaction-heading"],
  ["save-failure", "mh40_save_recovery", "SYSTEM // RECORD CUSTODY", "mh40-retry-save"],
  ["rollback-hold", "mh40_rollback_hold", "SYSTEM // RECORD CUSTODY", "mh40-rollback-hold-heading"],
  ["save-cancel", "mh30_ready", "SYSTEM // LOCAL READINESS REVIEW", "mh30-ready-heading"],
  ["restore-ready", "mh40_restore_ready", "SYSTEM // RECORD CUSTODY", "mh40-saved-review-heading"],
  ["restore-not-yet-ready", "mh40_restore_not_yet", "SYSTEM // RECORD CUSTODY", `mh25-remediate-${slug(measuredHorizonGateIds[1])}`, [measuredHorizonGateIds[1]]],
  ["return-unborrowed", MEASURED_HORIZON_ROUTE_GROUP, "PILOT // EXPEDITION NAVIGATION", "ur30-restored-heading"],
  ["return-city-threshold", MEASURED_HORIZON_ROUTE_GROUP, "PILOT // EXPEDITION NAVIGATION", "city-threshold-heading"],
  ["invalid-restore", "mh10_eligibility", "SYSTEM // EVIDENCE CUSTODY", "mh10-eligibility-heading"],
  ["presentation-narrow", "mh20_python_fresh", "BUILDER WORK // SANITIZED REPLICAS", "mh20-python-source"],
  ["presentation-text-zoom", "mh20_ai901_fresh", "TEACHER // BOUNDED PRACTICE", `mh-objective-${slug(measuredHorizonGateIds[1])}-decision`],
  ["presentation-forced-colors", "mh40_restore_ready", "SYSTEM // RECORD CUSTODY", "mh40-saved-review-heading"],
  ["presentation-reduced-motion", "mh00_assemble", "SYSTEM // EXPEDITION EVIDENCE REVIEW", "mh00-heading"],
];
if (rows.length !== 58) throw new Error(`TD012 fixture row count ${rows.length}`);
const contracts = Object.freeze(Object.fromEntries(rows.map(([id, group, owner, focus, failed = []]) => [id, Object.freeze({ id, group, owner, focus, failed: Object.freeze(failed) })])));
export const measuredHorizonScenarioNames = Object.freeze(rows.map(([id]) => id));

function headingFor(group, focus) {
  if (group === MEASURED_HORIZON_ROUTE_GROUP) return [focus, "MEASURED HORIZON REVIEW"];
  const names = { "td012-tour": "MEASURED HORIZON TOUR ISOLATED", mh00_assemble: "ASSEMBLE EXPEDITION EVIDENCE", mh10_eligibility: "VERIFY CURRENT EVIDENCE COVERAGE", mh20_python_fresh: "COMPLETE FRESH CUMULATIVE PYTHON WORK", mh20_ai901_fresh: "COMPLETE FRESH CURRENT-OBJECTIVE WORK", mh25_remediation: "REPAIR ONLY DEMONSTRATED GAPS", mh25_ai901_retry: "BEGIN GENUINELY BLANK OBJECTIVE RETRY", mh30_local_decision: "REVIEW THE LOCAL EVIDENCE DATUM", mh30_ready: MEASURED_HORIZON_READY, mh30_not_yet_ready: MEASURED_HORIZON_NOT_YET, mh40_save_confirm: "SAVE THE LOCAL READINESS RECORD", mh40_save_transaction: "SAVING LOCAL READINESS RECORD", mh40_save_recovery: "LOCAL READINESS SAVE RECOVERY", mh40_rollback_hold: "SAVE INTEGRITY HOLD", mh40_restore_ready: "MEASURED HORIZON RECORD RESTORED", mh40_restore_not_yet: "MEASURED HORIZON RECORD RESTORED" };
  const canonical = { td012: "td012-tour-heading", mh00: "mh00-heading", mh10: "mh10-eligibility-heading", mh20_python: "mh20-python-heading", mh20_ai901: "mh20-ai901-heading", mh25_remediation: "mh25-remediation-heading", mh25_ai901: "mh25-ai901-retry-heading", mh30_local: "mh30-decision-heading", mh30_ready: "mh30-ready-heading", mh30_not: "mh30-not-yet-ready-heading", mh40_save_confirm: "mh40-save-readiness", mh40_save_transaction: "mh40-transaction-heading", mh40_save_recovery: "mh40-retry-save", mh40_rollback: "mh40-rollback-hold-heading", mh40_restore: "mh40-saved-review-heading" };
  const prefix = Object.keys(canonical).find((key) => group.startsWith(key));
  return [canonical[prefix] ?? focus, names[group] ?? group.toUpperCase()];
}
function actionsFor(group) {
  if (group === MEASURED_HORIZON_ROUTE_GROUP) return [MEASURED_HORIZON_ROUTE_ACTION];
  if (group === "td012-tour") return [];
  const map = { mh00_assemble: measuredHorizonActions.requestReview, mh10_eligibility: measuredHorizonActions.beginFresh, mh20_python_fresh: measuredHorizonActions.submitPython, mh20_ai901_fresh: measuredHorizonActions.submitObjective, mh25_remediation: measuredHorizonActions.openRemediation, mh25_ai901_retry: measuredHorizonActions.submitObjective, mh30_local_decision: measuredHorizonActions.reviewDecision, mh30_ready: measuredHorizonActions.save, mh30_not_yet_ready: measuredHorizonActions.save, mh40_save_confirm: measuredHorizonActions.save, mh40_save_recovery: measuredHorizonActions.retrySave };
  return map[group] ? [map[group], measuredHorizonActions.returnUnborrowed, measuredHorizonActions.returnThreshold] : [measuredHorizonActions.returnUnborrowed, measuredHorizonActions.returnThreshold];
}
export function createMeasuredHorizonScenario(id) {
  const contract = contracts[id]; if (!contract) throw new TypeError("Unknown TD-012 fixture scenario");
  const [headingId, heading] = headingFor(contract.group, contract.focus);
  const outcome = contract.group.includes("not_yet") || contract.failed.length ? MEASURED_HORIZON_NOT_YET : MEASURED_HORIZON_READY;
  return Object.freeze({ fixtureId: "td012-measured-horizon-v1", fixtureContractVersion: "td012.fixture-manifest.v1", id,
    declaredOwner: contract.owner, declaredFocus: contract.focus, storage: "frozen-in-memory-only", arbitraryStateAccepted: false,
    layout: id === "presentation-narrow" ? "390x844" : id === "presentation-text-zoom" ? "768x900-effective-200" : "1366x768",
    presentationMode: id === "presentation-forced-colors" ? "forced-colors" : id === "presentation-reduced-motion" ? "reduced-motion" : "standard",
    state: Object.freeze({ shellVersion: MEASURED_HORIZON_SHELL_VERSION, controllerVersion: MEASURED_HORIZON_CONTROLLER_VERSION, packetId: "RP-012", phase: contract.group.slice(0, 4).toUpperCase(), boardState: "SC-13", activeGroup: contract.group, owner: contract.owner, headingId, heading,
      statusMessageId: `td012:fixture:${id}`, statusMessage: "Closed public review state. No storage, network, arbitrary input, authority, world response, route, or successor is available.",
      availableActions: Object.freeze(actionsFor(contract.group)), currentObjectiveId: measuredHorizonGateIds[1], failedGateIds: contract.failed,
      perGatePassBoolean: Object.freeze(Object.fromEntries(measuredHorizonGateIds.map((gate) => [gate, !contract.failed.includes(gate)]))), localReadinessState: outcome,
      privateWorkCleared: true, cityStateDelta: null, worldStateDelta: null, externalStateDelta: null, authorityDelta: null, successor: null, authorityGranted: false, externalActionEnabled: false, worldStateChanged: false, routeOpened: false, replayedEvents: Object.freeze([]), focusIntent: Object.freeze({ group: contract.group, target: contract.focus }) }),
  });
}
