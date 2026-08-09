import {
  UNBORROWED_REACH_CONTROLLER_VERSION, UNBORROWED_REACH_ROUTE_ACTION, UNBORROWED_REACH_ROUTE_GROUP,
  UNBORROWED_REACH_SHELL_VERSION, unborrowedReachActions,
} from "../../src/UnborrowedReachNormal.js";

const rows = `
route-ready|PILOT // EXPEDITION NAVIGATION|td011-route-heading
route-valid-pointer|SYSTEM // INDEPENDENT RECORD MODE|ur00-heading
route-reject-protected|PILOT // EXPEDITION NAVIGATION|td011-route-heading
route-reject-tour|SYSTEM // DEMO TOUR|td011-tour-heading
route-reject-stale-token|PILOT // EXPEDITION NAVIGATION|td011-route-heading
route-return-control|PILOT // EXPEDITION NAVIGATION|td011-route-heading
ur00-arrival|SYSTEM // INDEPENDENT RECORD MODE|ur00-heading
ur00-isolation-ready|SYSTEM // INDEPENDENT RECORD MODE|ur00-isolate-action
ur00-isolated|SCENE // UNBORROWED REACH|ur10-observations-heading
ur00-return-counterfield|SYSTEM // INDEPENDENT RECORD MODE|ur00-return-counterfield
ur10-blank|SCENE // UNBORROWED REACH|ur10-observations-heading
ur10-persistent-transition|SCENE // UNBORROWED REACH|ur10-persistent-transition
ur10-differing-relation|SCENE // UNBORROWED REACH|ur10-similar-form-different-relation
ur10-maintained-bypass|SCENE // UNBORROWED REACH|ur10-maintained-bypass
ur10-multiple-candidate|SCENE // UNBORROWED REACH|ur10-multiple-candidate-exposure
ur10-unavailable-margin|SCENE // UNBORROWED REACH|ur10-unavailable-comparable-margin
ur10-layered-stewardship|SCENE // UNBORROWED REACH|ur10-layered-stewardship
ur10-recorded-revisit|SCENE // UNBORROWED REACH|ur10-observations-heading
ur10-complete|BUILDER WORK // SANITIZED REPLICAS|ur20-python-primary-source
ur10-return-counterfield|SCENE // UNBORROWED REACH|ur10-return-counterfield
ur20-python-primary-blank|BUILDER WORK // SANITIZED REPLICAS|ur20-python-primary-source
ur20-python-primary-miss|TEACHER // BOUNDED PRACTICE|ur20-recovery-heading
ur20-python-primary-retry|BUILDER WORK // SANITIZED REPLICAS|ur20-python-primary-source
ur20-python-primary-pass|BUILDER WORK // SANITIZED REPLICAS|ur20-python-trace-local-execution
ur20-python-trace-blank|BUILDER WORK // SANITIZED REPLICAS|ur20-python-trace-local-execution
ur20-python-trace-miss|TEACHER // BOUNDED PRACTICE|ur20-recovery-heading
ur20-python-trace-retry|BUILDER WORK // SANITIZED REPLICAS|ur20-python-trace-local-execution
ur20-python-trace-pass|BUILDER WORK // SANITIZED REPLICAS|ur20-python-transfer-source
ur20-python-transfer-blank|BUILDER WORK // SANITIZED REPLICAS|ur20-python-transfer-source
ur20-python-transfer-miss|TEACHER // BOUNDED PRACTICE|ur20-recovery-heading
ur20-python-transfer-retry|BUILDER WORK // SANITIZED REPLICAS|ur20-python-transfer-source
ur20-python-transfer-pass|TEACHER // BOUNDED PRACTICE|ur20-agent-primary-p01-agent-surface
ur20-agent-primary-blank|TEACHER // BOUNDED PRACTICE|ur20-agent-primary-p01-agent-surface
ur20-agent-primary-miss|TEACHER // BOUNDED PRACTICE|ur20-recovery-heading
ur20-agent-primary-retry|TEACHER // BOUNDED PRACTICE|ur20-agent-primary-p01-agent-surface
ur20-agent-primary-pass|TEACHER // BOUNDED PRACTICE|ur20-agent-retrieval-r01-agent-surface
ur20-agent-retrieval-blank|TEACHER // BOUNDED PRACTICE|ur20-agent-retrieval-r01-agent-surface
ur20-agent-retrieval-miss|TEACHER // BOUNDED PRACTICE|ur20-recovery-heading
ur20-agent-retrieval-retry|TEACHER // BOUNDED PRACTICE|ur20-agent-retrieval-r01-agent-surface
ur20-agent-retrieval-pass|TEACHER // BOUNDED PRACTICE|ur20-agent-transfer-t01-agent-surface
ur20-agent-transfer-blank|TEACHER // BOUNDED PRACTICE|ur20-agent-transfer-t01-agent-surface
ur20-agent-transfer-miss|TEACHER // BOUNDED PRACTICE|ur20-recovery-heading
ur20-agent-transfer-retry|TEACHER // BOUNDED PRACTICE|ur20-agent-transfer-t01-agent-surface
ur20-agent-transfer-pass|PILOT // BOUNDARY EXPLANATION|ur20-surface-explanation
ur20-surface-explanation-blank|PILOT // BOUNDARY EXPLANATION|ur20-surface-explanation
ur20-surface-explanation-miss|TEACHER // BOUNDED PRACTICE|ur20-recovery-heading
ur20-surface-explanation-pass|PILOT // BOUNDARY EXPLANATION|ur20-truth-permission-explanation
ur20-truth-explanation-blank|PILOT // BOUNDARY EXPLANATION|ur20-truth-permission-explanation
ur20-truth-explanation-miss|TEACHER // BOUNDED PRACTICE|ur20-recovery-heading
ur20-truth-explanation-pass|SYSTEM // RECORD CUSTODY|ur20-fresh-review-heading
ur20-review-ineligible|SYSTEM // RECORD CUSTODY|ur20-first-incomplete
ur20-review-eligible|SYSTEM // RECORD CUSTODY|ur20-fresh-review-heading
ur20-fresh-confirm|SYSTEM // RECORD CUSTODY|ur20-finalize-fresh
ur20-fresh-transaction|SYSTEM // RECORD CUSTODY|ur20-fresh-transaction-heading
ur20-fresh-write-recovery|SYSTEM // RECORD CUSTODY|ur20-fresh-retry-save
ur20-fresh-rollback-hold|SYSTEM // RECORD CUSTODY|ur20-rollback-hold-heading
ur20-fresh-restored|SYSTEM // RECORD CUSTODY|ur30-reopen-rp007
ur30-reopen-rp007|SYSTEM // RECORD CUSTODY|ur30-reopen-rp007
ur30-reopen-rp008|SYSTEM // RECORD CUSTODY|ur30-reopen-rp008
ur30-reopen-rp009|SYSTEM // RECORD CUSTODY|ur30-reopen-rp009
ur30-reopen-rp010|SYSTEM // RECORD CUSTODY|ur30-reopen-rp010
ur30-all-reopened|PILOT // METHOD RECONCILIATION|ur30-method-inspect-fresh-before-prior-conclusions
ur30-reconciliation-blank|PILOT // METHOD RECONCILIATION|ur30-method-inspect-fresh-before-prior-conclusions
ur30-reconciliation-miss|TEACHER // BOUNDED PRACTICE|ur30-reconciliation-recovery-heading
ur30-reconciliation-retry|PILOT // METHOD RECONCILIATION|ur30-method-inspect-fresh-before-prior-conclusions
ur30-reconciliation-ready|SYSTEM // RECORD CUSTODY|ur30-final-review-heading
ur30-final-confirm|SYSTEM // RECORD CUSTODY|ur30-save-reconciliation
ur30-final-transaction|SYSTEM // RECORD CUSTODY|ur30-final-transaction-heading
ur30-final-write-recovery|SYSTEM // RECORD CUSTODY|ur30-final-retry-save
ur30-final-rollback-hold|SYSTEM // RECORD CUSTODY|ur30-rollback-hold-heading
ur30-restored|SYSTEM // RECORD CUSTODY|ur30-restored-heading
ur30-return-counterfield|SYSTEM // RECORD CUSTODY|ur30-return-counterfield
ur30-return-city-threshold|SYSTEM // RECORD CUSTODY|ur30-return-city-threshold
ur30-look|SCENE // UNBORROWED REACH|ur30-restored-heading
tour-isolated|SYSTEM // DEMO TOUR|td011-tour-heading
invalid-restore|SYSTEM // RECORD CUSTODY|ur10-observations-heading
presentation-reduced-motion|SYSTEM // INDEPENDENT RECORD MODE|ur00-heading
presentation-forced-colors|SYSTEM // RECORD CUSTODY|ur30-restored-heading
presentation-narrow|SCENE // UNBORROWED REACH|ur10-observations-heading
presentation-text-zoom|TEACHER // BOUNDED PRACTICE|ur20-agent-primary-p01-agent-surface
`.trim().split("\n").map((row) => row.split("|"));

const contracts = Object.freeze(Object.fromEntries(rows.map(([id, owner, focus]) => [id, Object.freeze({ id, owner, focus })])));
export const unborrowedReachScenarioNames = Object.freeze(rows.map(([id]) => id));

function groupFor({ id, focus }) {
  if (id === "route-reject-tour" || id === "tour-isolated") return "td011-tour";
  if (id.startsWith("route-") && id !== "route-valid-pointer") return UNBORROWED_REACH_ROUTE_GROUP;
  if (focus.startsWith("ur00")) return "ur00_isolation";
  if (focus.startsWith("ur10")) return "ur10_fresh_observations";
  if (focus === "ur20-recovery-heading") return "ur20_recovery";
  if (focus.includes("python-primary")) return "ur20_python_primary";
  if (focus.includes("python-trace")) return "ur20_python_trace";
  if (focus.includes("python-transfer")) return "ur20_python_transfer";
  if (focus.includes("agent-primary")) return "ur20_agent_primary";
  if (focus.includes("agent-retrieval")) return "ur20_agent_retrieval";
  if (focus.includes("agent-transfer")) return "ur20_agent_transfer";
  if (focus === "ur20-surface-explanation") return "ur20_surface_explanation";
  if (focus === "ur20-truth-permission-explanation") return "ur20_truth_permission_explanation";
  if (["ur20-fresh-review-heading", "ur20-first-incomplete"].includes(focus)) return "ur20_fresh_review";
  if (focus === "ur20-finalize-fresh") return "ur20_fresh_confirm";
  if (focus === "ur20-fresh-transaction-heading") return "ur20_fresh_transaction";
  if (focus === "ur20-fresh-retry-save") return "ur20_fresh_save_recovery";
  if (focus === "ur20-rollback-hold-heading") return "ur20_rollback_hold";
  if (focus.startsWith("ur30-reopen")) return "ur30_scope_reopen";
  if (focus === "ur30-method-inspect-fresh-before-prior-conclusions") return "ur30_reconciliation";
  if (focus === "ur30-reconciliation-recovery-heading") return "ur30_reconciliation_recovery";
  if (focus === "ur30-final-review-heading") return "ur30_final_review";
  if (focus === "ur30-save-reconciliation") return "ur30_final_confirm";
  if (focus === "ur30-final-transaction-heading") return "ur30_final_transaction";
  if (focus === "ur30-final-retry-save") return "ur30_final_save_recovery";
  if (focus === "ur30-rollback-hold-heading") return "ur30_rollback_hold";
  return "ur30_restore";
}

function actionsFor(group) {
  const returns = [unborrowedReachActions.returnCounterfield, unborrowedReachActions.returnThreshold];
  if (group === UNBORROWED_REACH_ROUTE_GROUP) return [UNBORROWED_REACH_ROUTE_ACTION, "LOOK AT FIELD-MARGIN CONTINUATION", "RETURN TO OCCLUDED FOLD", "RETURN TO CITY THRESHOLD"];
  if (group === "td011-tour") return [];
  if (group === "ur00_isolation") return [unborrowedReachActions.isolate, unborrowedReachActions.returnCounterfield];
  if (group === "ur10_fresh_observations") return [...Object.values(unborrowedReachActions).slice(1, 7), ...returns];
  if (group === "ur20_recovery" || group === "ur30_reconciliation_recovery") return [unborrowedReachActions.retry, ...returns];
  if (group === "ur20_fresh_review") return [unborrowedReachActions.reviewFresh, ...returns];
  if (group === "ur20_fresh_confirm") return [unborrowedReachActions.finalizeFresh, unborrowedReachActions.cancelFresh, ...returns];
  if (group === "ur20_fresh_save_recovery") return [unborrowedReachActions.retryFreshSave, ...returns];
  if (group === "ur30_scope_reopen") return [unborrowedReachActions.reopenRp007, unborrowedReachActions.reopenRp008, unborrowedReachActions.reopenRp009, unborrowedReachActions.reopenRp010, ...returns];
  if (group === "ur30_reconciliation") return [unborrowedReachActions.checkReconciliation, ...returns];
  if (group === "ur30_final_review") return [unborrowedReachActions.reviewReconciliation, ...returns];
  if (group === "ur30_final_confirm") return [unborrowedReachActions.saveReconciliation, unborrowedReachActions.cancelReconciliation, ...returns];
  if (group === "ur30_final_save_recovery") return [unborrowedReachActions.retryFinalSave, ...returns];
  if (group === "ur30_restore") return [unborrowedReachActions.look, ...returns];
  if (group.endsWith("transaction")) return [];
  if (group.includes("rollback")) return returns;
  return returns;
}

export function createUnborrowedReachScenario(id) {
  const contract = contracts[id];
  if (!contract) throw new TypeError("Unknown TD-011 fixture scenario");
  const group = groupFor(contract);
  const layout = id === "presentation-narrow" ? "390x844" : id === "presentation-text-zoom" ? "768x900-effective-200" : "1366x768";
  const presentationMode = id === "presentation-reduced-motion" ? "reduced-motion" : id === "presentation-forced-colors" ? "forced-colors" : "standard";
  return Object.freeze({
    fixtureId: "td011-unborrowed-reach-v1", fixtureContractVersion: "td011.fixture-manifest.v1",
    id, declaredOwner: contract.owner, declaredFocus: contract.focus, storage: "frozen-in-memory-only",
    arbitraryStateAccepted: false, layout, presentationMode,
    state: Object.freeze({
      shellVersion: UNBORROWED_REACH_SHELL_VERSION, controllerVersion: UNBORROWED_REACH_CONTROLLER_VERSION,
      packetId: "RP-011", phase: group.startsWith("ur00") ? "UR-00 ARRIVE + ISOLATE" : group.startsWith("ur10") ? "UR-10 INSPECT FRESH EVIDENCE" : group.startsWith("ur20") ? "UR-20 REVIEW LOCAL WORK + FINALIZE FRESH RECORD" : "UR-30 REOPEN + RECONCILE + VERIFY + RETURN",
      boardState: "SC-12", activeGroup: group, owner: contract.owner, headingId: contract.focus,
      heading: id.replaceAll("-", " ").toUpperCase(), statusMessageId: `td011:fixture:${id}`,
      statusMessage: "Closed public review state. No storage, network, arbitrary input, evidence, authority, world response, route, or successor is available.",
      availableActions: Object.freeze(actionsFor(group)), recordedObservationIds: Object.freeze([]), reopenedScopes: Object.freeze([]), evidenceCount: 0,
      form: null, failedPublicIds: Object.freeze([]), failedMisconceptionTags: Object.freeze([]),
      privateWorkCleared: true, transientWorkCleared: true, temporaryWorkspaceCleared: true,
      cityStateDelta: null, worldStateDelta: null, externalStateDelta: null, successor: null,
      authorityGranted: false, externalActionEnabled: false, worldStateChanged: false, routeOpened: false,
      replayedEvents: Object.freeze([]), focusIntent: Object.freeze({ group, target: contract.focus }),
    }),
  });
}
