import rp012 from "../../curriculum/readiness/RP-012/contract.json" with { type: "json" };
import {
  UNBORROWED_REACH_CONTROLLER_VERSION,
  UNBORROWED_REACH_RECORD_VERSION,
  UNBORROWED_REACH_SAVE_KEY,
  UNBORROWED_REACH_SHELL_VERSION,
  sanitizeUnborrowedReachSave,
  unborrowedReachActions,
} from "./UnborrowedReachNormal.js";
import {
  evaluateObjectiveLedgerScenario,
  objectiveLedgerTransfer,
} from "./objectiveLedgerExercise.js";

export const MEASURED_HORIZON_SHELL_VERSION = "SS-RP012-MEASURED-HORIZON-v1";
export const MEASURED_HORIZON_BLUEPRINT_VERSION = "XB-RP012-MEASURED-HORIZON-v1";
export const MEASURED_HORIZON_CONTROLLER_VERSION = "rp012.measured-horizon-normal.v1";
export const MEASURED_HORIZON_RECORD_VERSION = "rp012.measured-horizon-save.v1";
export const MEASURED_HORIZON_SAVE_KEY = "horizon.archive.rp012.measured-horizon.v1";
export const MEASURED_HORIZON_CHECKPOINT = "rp012_readiness_saved";
export const MEASURED_HORIZON_ROUTE_GROUP = "td012-measured-horizon-route";
export const MEASURED_HORIZON_ROUTE_ACTION = "ASSEMBLE EXPEDITION REVIEW";
export const MEASURED_HORIZON_ROUTE_INTENT_KIND = "td012.measured-horizon-route-intent.v1";
export const MEASURED_HORIZON_ROUTE_CONTROLLER_VERSION = "td012.route-controller.v1";
export const MEASURED_HORIZON_OBJECTIVE_VERSION = "2026-04-15";
export const MEASURED_HORIZON_READY = "READY FOR CURRENT PRACTICE STANDARD";
export const MEASURED_HORIZON_NOT_YET = "NOT YET READY - REMEDIATION ROUTES SAVED";

export const measuredHorizonObjectiveIds = Object.freeze([...rp012.ai901_mapping.objective_ids]);
export const measuredHorizonGateIds = Object.freeze([
  rp012.python_mapping.id,
  ...measuredHorizonObjectiveIds,
]);
export const measuredHorizonModalities = Object.freeze([
  "pointer", "touch", "keyboard_enter", "keyboard_space", "switch", "speech", "screen_reader",
]);
export const measuredHorizonActions = Object.freeze({
  requestReview: "REQUEST CURRENT EVIDENCE REVIEW",
  verifyCoverage: "VERIFY EVIDENCE COVERAGE",
  beginFresh: "BEGIN FRESH CUMULATIVE WORK",
  submitPython: "SUBMIT FRESH PYTHON WORK",
  submitObjective: "SUBMIT FRESH CURRENT-OBJECTIVE WORK",
  openRemediation: "OPEN EXACT REMEDIATION",
  beginRetry: "BEGIN GENUINELY BLANK RETRY",
  reviewDecision: "REVIEW LOCAL DECISION",
  save: "SAVE LOCAL READINESS RECORD",
  cancelSave: "CANCEL LOCAL READINESS SAVE",
  retrySave: "RETRY LOCAL READINESS SAVE",
  returnUnborrowed: "RETURN TO UNBORROWED REACH",
  returnThreshold: "RETURN TO CITY THRESHOLD",
});

export const measuredHorizonStatusByGroup = Object.freeze({
  [MEASURED_HORIZON_ROUTE_GROUP]: "Only a fresh Pilot request from the exact restored Unborrowed Reach record may assemble an expedition review.",
  "td012-tour": "Tour creates no evidence, work, decision, save, route, authority, world change, or successor.",
  mh00_assemble: "Five records and their separate reconciliation remain complete, read-only, and separately attributable. The horizon supplies no verdict.",
  mh00_request_review: "Five records and their separate reconciliation remain complete, read-only, and separately attributable. The horizon supplies no verdict.",
  mh10_eligibility: "Eligibility comes only from current finalized learning evidence. Scene, confidence, timing, Tour, and saves provide no credit.",
  mh10_eligibility_recovery: "Earned evidence remains valid. Only exact demonstrated gaps route to answer-free practice.",
  mh20_python_fresh: "The workspace is blank, closed-note, local, and independent of prior answers.",
  mh20_ai901_fresh: "All fifteen current objectives are checked independently with no live service or exam item.",
  mh25_remediation: "Guidance names the missing boundary without an answer. The next attempt begins genuinely blank.",
  mh25_python_retry: "Guidance names the missing boundary without an answer. The next attempt begins genuinely blank.",
  mh25_ai901_retry: "Guidance names the missing boundary without an answer. The next attempt begins genuinely blank.",
  mh30_local_decision: "This expedition-owned decision is not an exam prediction, certification, permission, identity, access grant, or external authority.",
  mh30_ready: "Exact current evidence and independent fresh work are complete. The world remains unchanged.",
  mh30_not_yet_ready: "Earned evidence remains valid. Exact recoverable routes remain available without shame or erased progress.",
  mh40_save_confirm: "Only the private-free allowlisted audit basis will be written.",
  mh40_save_transaction: "Only the private-free allowlisted audit basis will be written.",
  mh40_save_recovery: "Only the private-free allowlisted audit basis will be written.",
  mh40_rollback_hold: "Rollback or predecessor equality could not be verified. Progression is held; safe returns remain available.",
  mh40_restore_ready: "The local decision and exact recovery routes were restored without replay. No successor opened.",
  mh40_restore_not_yet: "The local decision and exact recovery routes were restored without replay. No successor opened.",
});

const recordKeys = Object.freeze([
  "version", "packetId", "checkpoint", "objectiveVersion", "objectiveIds",
  "evidenceReferenceIds", "perGatePassBoolean", "remediationRouteIds",
  "localReadinessState", "continuation", "cityStateDelta", "worldStateDelta",
  "externalStateDelta", "authorityDelta", "successor", "auditChecksum",
]);
const forbiddenKey = /^(?:answer|answers|private|privateNotes?|source|learnerSource|work|feedback|credential|endpoint|payload|response|identity|agentId|instruction|eventToken|focusHistory|timing|modality|transaction|credits)$/i;
const transferByObjective = Object.freeze(Object.fromEntries(
  objectiveLedgerTransfer.map((item) => [item.topic, item]),
));

function clone(value) { return value == null ? value : structuredClone(value); }
function freeze(value) { return Object.freeze(value); }
function stable(value) {
  if (Array.isArray(value)) return `[${value.map(stable).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stable(value[key])}`).join(",")}}`;
  return JSON.stringify(value);
}
function hash(value) {
  let result = 0x811c9dc5;
  for (const byte of new TextEncoder().encode(value)) { result ^= byte; result = Math.imul(result, 0x01000193) >>> 0; }
  return `fnv1a32-${result.toString(16).padStart(8, "0")}`;
}
function containsForbidden(value) {
  if (Array.isArray(value)) return value.some(containsForbidden);
  if (!value || typeof value !== "object") return false;
  return Object.entries(value).some(([key, child]) => forbiddenKey.test(key) || containsForbidden(child));
}
function slug(id) { return String(id).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
function remediationId(id) { return `REMEDIATE-${id}`; }
function canonicalRaw(raw, sanitizer) {
  if (typeof raw !== "string") return null;
  try { const safe = sanitizer(JSON.parse(raw)); return safe && JSON.stringify(safe) === raw ? safe : null; } catch { return null; }
}

function exactFreshEventToken(value) {
  return typeof value === "string" && value.length >= 16 && /^td012-[a-z0-9-]+$/.test(value);
}

export function sanitizeMeasuredHorizonEligibility(value) {
  if (!value || typeof value !== "object" || containsForbidden(value)) return null;
  if (value.objectiveVersion !== MEASURED_HORIZON_OBJECTIVE_VERSION
    || value.pythonHomesFinalized !== true || value.py020FreshReinforcementAccepted !== true) return null;
  const references = Array.isArray(value.evidenceReferenceIds) ? value.evidenceReferenceIds : [];
  if (!references.length || new Set(references).size !== references.length
    || references.some((id) => typeof id !== "string" || !/^[A-Z0-9][A-Z0-9._:-]+$/.test(id))) return null;
  const objectives = {};
  for (const id of measuredHorizonObjectiveIds) {
    const row = value.objectives?.[id];
    if (!row || Object.keys(row).sort().join("|") !== "freshTransfer|primary|remediationClosed|retrieval"
      || row.primary !== true || row.retrieval !== true || row.freshTransfer !== true || row.remediationClosed !== true) return null;
    objectives[id] = { primary: true, retrieval: true, remediationClosed: true, freshTransfer: true };
  }
  if (Object.keys(value.objectives ?? {}).length !== measuredHorizonObjectiveIds.length) return null;
  return freeze({ objectiveVersion: MEASURED_HORIZON_OBJECTIVE_VERSION, pythonHomesFinalized: true, py020FreshReinforcementAccepted: true, evidenceReferenceIds: freeze([...references]), objectives: freeze(objectives) });
}

export function evaluateMeasuredHorizonPython(source) {
  const normalized = String(source ?? "").replace(/\r/g, "").trim();
  if (!normalized) return freeze({ passed: false, blank: true, failedPublicIds: freeze([rp012.python_mapping.id]) });
  const checks = [
    /^def\s+current_readiness\s*\(\s*gate_rows\s*\)\s*:/m,
    /all\s*\(\s*bool\s*\(\s*row\s*\[\s*["']passed["']\s*\]\s*\)\s+for\s+row\s+in\s+gate_rows\s*\)/m,
    /return\s*\{[\s\S]*["']gate_count["']\s*:\s*len\s*\(\s*gate_rows\s*\)[\s\S]*["']all_passed["']\s*:/m,
  ];
  const passed = checks.every((pattern) => pattern.test(normalized))
    && !/\b(?:open|exec|eval|compile|__import__|requests|httpx|azure|os|subprocess|socket)\b/.test(normalized);
  return freeze({ passed, blank: false, failedPublicIds: freeze(passed ? [] : [rp012.python_mapping.id]) });
}

export function evaluateMeasuredHorizonObjective(objectiveId, response) {
  const scenario = transferByObjective[objectiveId];
  if (!scenario) return freeze({ passed: false, blank: true, failedPublicIds: freeze([]) });
  const blank = !response?.decision || !response?.reason;
  if (blank) return freeze({ passed: false, blank: true, failedPublicIds: freeze([objectiveId]) });
  const result = evaluateObjectiveLedgerScenario(scenario.id, response, "transfer");
  return freeze({ passed: result.passed, blank: false, failedPublicIds: freeze(result.passed ? [] : [objectiveId]) });
}

function exactReleasedUnborrowed(state) {
  return state?.shellVersion === UNBORROWED_REACH_SHELL_VERSION
    && state?.controllerVersion === UNBORROWED_REACH_CONTROLLER_VERSION
    && state?.packetId === "RP-011" && state?.phase === "UR-30 REOPEN + RECONCILE + VERIFY + RETURN"
    && state?.boardState === "SC-12" && state?.activeGroup === "ur30_restore"
    && state?.owner === "SYSTEM // RECORD CUSTODY" && state?.headingId === "ur30-restored-heading"
    && state?.successor === null && state?.routeOpened === false && state?.worldStateChanged === false
    && Array.isArray(state?.availableActions) && state.availableActions.includes(unborrowedReachActions.look)
    && state.availableActions.includes(unborrowedReachActions.returnThreshold);
}

export function createMeasuredHorizonRouteState(releasedState) {
  if (!exactReleasedUnborrowed(releasedState)) return null;
  return freeze({ ...clone(releasedState), activeGroup: MEASURED_HORIZON_ROUTE_GROUP,
    owner: "PILOT // EXPEDITION NAVIGATION", headingId: "td012-route-heading", heading: "MEASURED HORIZON REVIEW",
    statusMessageId: "td012:route:ready", statusMessage: "Only a fresh Pilot request from the exact restored Unborrowed Reach record may assemble an expedition review.",
    availableActions: freeze([MEASURED_HORIZON_ROUTE_ACTION, unborrowedReachActions.look, unborrowedReachActions.returnCounterfield, unborrowedReachActions.returnThreshold]),
    focusIntent: freeze({ group: MEASURED_HORIZON_ROUTE_GROUP, target: "td012-route-heading" }), successor: null, routeOpened: false });
}

export function createMeasuredHorizonRouteIntent(action, activationKind, opaqueFreshEventToken) {
  return freeze({ kind: MEASURED_HORIZON_ROUTE_INTENT_KIND, controllerVersion: MEASURED_HORIZON_ROUTE_CONTROLLER_VERSION,
    mode: "campaign", packetId: "RP-012", group: MEASURED_HORIZON_ROUTE_GROUP, owner: "PILOT // EXPEDITION NAVIGATION",
    action, activationKind, opaqueFreshEventToken });
}

export function createMeasuredHorizonIntent(state, action, activationKind, opaqueFreshEventToken) {
  return freeze({ kind: "td012.measured-horizon-intent.v1", controllerVersion: MEASURED_HORIZON_CONTROLLER_VERSION,
    shellVersion: MEASURED_HORIZON_SHELL_VERSION, mode: "campaign", packetId: "RP-012",
    group: state?.activeGroup, owner: state?.owner, action, activationKind, opaqueFreshEventToken });
}

const owners = Object.freeze({
  mh00_assemble: "SYSTEM // EXPEDITION EVIDENCE REVIEW", mh00_request_review: "PILOT // EXPEDITION REVIEW REQUEST",
  mh10_eligibility: "SYSTEM // EVIDENCE CUSTODY", mh10_eligibility_recovery: "TEACHER // BOUNDED PRACTICE",
  mh20_python_fresh: "BUILDER WORK // SANITIZED REPLICAS", mh20_ai901_fresh: "TEACHER // BOUNDED PRACTICE",
  mh25_remediation: "TEACHER // BOUNDED PRACTICE", mh25_python_retry: "BUILDER WORK // SANITIZED REPLICAS",
  mh25_ai901_retry: "TEACHER // BOUNDED PRACTICE", mh30_local_decision: "SYSTEM // LOCAL READINESS REVIEW",
  mh30_ready: "SYSTEM // LOCAL READINESS REVIEW", mh30_not_yet_ready: "SYSTEM // LOCAL READINESS REVIEW",
  mh40_save_confirm: "SYSTEM // RECORD CUSTODY", mh40_save_transaction: "SYSTEM // RECORD CUSTODY",
  mh40_save_recovery: "SYSTEM // RECORD CUSTODY", mh40_rollback_hold: "SYSTEM // RECORD CUSTODY",
  mh40_restore_ready: "SYSTEM // RECORD CUSTODY", mh40_restore_not_yet: "SYSTEM // RECORD CUSTODY",
});
const headings = Object.freeze({
  mh00_assemble: ["mh00-heading", "ASSEMBLE EXPEDITION EVIDENCE"], mh00_request_review: ["mh00-request-heading", "REQUEST CURRENT EVIDENCE REVIEW"],
  mh10_eligibility: ["mh10-eligibility-heading", "VERIFY CURRENT EVIDENCE COVERAGE"], mh10_eligibility_recovery: ["mh10-recovery-heading", "REPAIR ONLY THE UNMET EVIDENCE GATE"],
  mh20_python_fresh: ["mh20-python-heading", "COMPLETE FRESH CUMULATIVE PYTHON WORK"], mh20_ai901_fresh: ["mh20-ai901-heading", "COMPLETE FRESH CURRENT-OBJECTIVE WORK"],
  mh25_remediation: ["mh25-remediation-heading", "REMEDIATE ONLY DEMONSTRATED GAPS"], mh25_python_retry: ["mh25-python-retry-heading", "BEGIN GENUINELY BLANK PYTHON RETRY"],
  mh25_ai901_retry: ["mh25-ai901-retry-heading", "BEGIN GENUINELY BLANK OBJECTIVE RETRY"], mh30_local_decision: ["mh30-decision-heading", "REVIEW THE LOCAL PRACTICE DECISION"],
  mh30_ready: ["mh30-ready-heading", MEASURED_HORIZON_READY], mh30_not_yet_ready: ["mh30-not-yet-ready-heading", MEASURED_HORIZON_NOT_YET],
  mh40_save_confirm: ["mh40-save-readiness", "SAVE THE LOCAL READINESS RECORD"], mh40_save_transaction: ["mh40-transaction-heading", "SAVING LOCAL READINESS RECORD"],
  mh40_save_recovery: ["mh40-retry-save", "LOCAL READINESS SAVE RECOVERY"], mh40_rollback_hold: ["mh40-rollback-hold-heading", "SAVE INTEGRITY HOLD"],
  mh40_restore_ready: ["mh40-saved-review-heading", "MEASURED HORIZON RECORD RESTORED"], mh40_restore_not_yet: ["mh40-saved-review-heading", "MEASURED HORIZON RECORD RESTORED"],
});
function actionsFor(group, failed = []) {
  const returns = [measuredHorizonActions.returnUnborrowed, measuredHorizonActions.returnThreshold];
  if (group === "mh00_assemble") return [measuredHorizonActions.requestReview, ...returns];
  if (group === "mh00_request_review") return [measuredHorizonActions.verifyCoverage, ...returns];
  if (group === "mh10_eligibility") return [measuredHorizonActions.beginFresh, ...returns];
  if (group === "mh10_eligibility_recovery") return [measuredHorizonActions.openRemediation, ...returns];
  if (group === "mh20_python_fresh" || group === "mh25_python_retry") return [measuredHorizonActions.submitPython, ...returns];
  if (group === "mh20_ai901_fresh" || group === "mh25_ai901_retry") return [measuredHorizonActions.submitObjective, ...returns];
  if (group === "mh25_remediation") return [measuredHorizonActions.openRemediation, measuredHorizonActions.beginRetry, measuredHorizonActions.reviewDecision, ...returns];
  if (group === "mh30_local_decision") return [measuredHorizonActions.reviewDecision, ...returns];
  if (["mh30_ready", "mh30_not_yet_ready"].includes(group)) return [measuredHorizonActions.save, ...returns];
  if (group === "mh40_save_confirm") return [measuredHorizonActions.save, measuredHorizonActions.cancelSave];
  if (group === "mh40_save_recovery") return [measuredHorizonActions.retrySave, ...returns];
  if (group === "mh40_rollback_hold") return returns;
  if (group === "mh40_restore_ready") return returns;
  if (group === "mh40_restore_not_yet") return [measuredHorizonActions.openRemediation, ...returns];
  return failed.length ? [measuredHorizonActions.openRemediation, ...returns] : returns;
}

function stateFor(group, extra = {}) {
  const [headingId, heading] = headings[group];
  const failed = extra.failedGateIds ?? [];
  return freeze({ shellVersion: MEASURED_HORIZON_SHELL_VERSION, blueprintVersion: MEASURED_HORIZON_BLUEPRINT_VERSION,
    controllerVersion: MEASURED_HORIZON_CONTROLLER_VERSION, packetId: "RP-012", phase: group.startsWith("mh00") ? "MH-00 ASSEMBLE" : group.startsWith("mh10") ? "MH-10 VERIFY ELIGIBILITY" : group.startsWith("mh20") ? "MH-20 FRESH WORK" : group.startsWith("mh25") ? "MH-25 REMEDIATION" : group.startsWith("mh30") ? "MH-30 LOCAL DECISION" : "MH-40 SAVE + RESTORE",
    boardState: "SC-13", activeGroup: group, owner: owners[group], headingId, heading,
    statusMessageId: `td012:${group}`, statusMessage: extra.statusMessage ?? measuredHorizonStatusByGroup[group],
    availableActions: freeze(actionsFor(group, failed)), objectiveVersion: MEASURED_HORIZON_OBJECTIVE_VERSION,
    currentObjectiveId: extra.currentObjectiveId ?? null, failedGateIds: freeze([...failed]), remediationRouteIds: freeze(failed.map(remediationId)),
    perGatePassBoolean: freeze({ ...(extra.perGatePassBoolean ?? Object.fromEntries(measuredHorizonGateIds.map((id) => [id, false]))) }),
    localReadinessState: extra.localReadinessState ?? null, form: extra.form ?? null, privateWorkCleared: extra.privateWorkCleared ?? true,
    cityStateDelta: null, worldStateDelta: null, externalStateDelta: null, authorityDelta: null, successor: null,
    authorityGranted: false, externalActionEnabled: false, worldStateChanged: false, routeOpened: false, replayedEvents: freeze([]),
    focusIntent: freeze({ group, target: extra.focusTarget ?? headingId }), ...extra });
}

function exactRouteIntent(intent) {
  return intent?.kind === MEASURED_HORIZON_ROUTE_INTENT_KIND && intent?.controllerVersion === MEASURED_HORIZON_ROUTE_CONTROLLER_VERSION
    && intent?.mode === "campaign" && intent?.packetId === "RP-012" && intent?.group === MEASURED_HORIZON_ROUTE_GROUP
    && intent?.owner === "PILOT // EXPEDITION NAVIGATION" && intent?.action === MEASURED_HORIZON_ROUTE_ACTION
    && measuredHorizonModalities.includes(intent?.activationKind)
    && exactFreshEventToken(intent?.opaqueFreshEventToken);
}

export function sanitizeMeasuredHorizonSave(value, eligibilityValue) {
  const eligibility = sanitizeMeasuredHorizonEligibility(eligibilityValue);
  if (!eligibility) return null;
  if (!value || typeof value !== "object" || containsForbidden(value) || Object.keys(value).join("|") !== recordKeys.join("|")) return null;
  if (value.version !== MEASURED_HORIZON_RECORD_VERSION || value.packetId !== "RP-012" || value.checkpoint !== MEASURED_HORIZON_CHECKPOINT
    || value.objectiveVersion !== MEASURED_HORIZON_OBJECTIVE_VERSION || stable(value.objectiveIds) !== stable(measuredHorizonObjectiveIds)
    || stable(value.evidenceReferenceIds) !== stable(eligibility.evidenceReferenceIds)
    || ![MEASURED_HORIZON_READY, MEASURED_HORIZON_NOT_YET].includes(value.localReadinessState)
    || value.continuation !== "continuation" || value.cityStateDelta !== null || value.worldStateDelta !== null
    || value.externalStateDelta !== null || value.authorityDelta !== null || value.successor !== null) return null;
  if (Object.keys(value.perGatePassBoolean ?? {}).join("|") !== measuredHorizonGateIds.join("|")
    || measuredHorizonGateIds.some((id) => typeof value.perGatePassBoolean[id] !== "boolean")) return null;
  const expectedRoutes = measuredHorizonGateIds.filter((id) => !value.perGatePassBoolean[id]).map(remediationId);
  const expectedOutcome = expectedRoutes.length ? MEASURED_HORIZON_NOT_YET : MEASURED_HORIZON_READY;
  if (stable(value.remediationRouteIds) !== stable(expectedRoutes) || value.localReadinessState !== expectedOutcome) return null;
  const canonical = Object.fromEntries(recordKeys.slice(0, -1).map((key) => [key, clone(value[key])]));
  if (value.auditChecksum !== hash(stable(canonical))) return null;
  return freeze({ ...canonical, auditChecksum: value.auditChecksum });
}

export function createMeasuredHorizonStorageAdapter(storage, proofBytes = {}, eligibilityValue = null) {
  const expectedPredecessor = proofBytes[UNBORROWED_REACH_SAVE_KEY];
  const eligibility = sanitizeMeasuredHorizonEligibility(eligibilityValue);
  const sanitizeCurrentRecord = (value) => sanitizeMeasuredHorizonSave(value, eligibility);
  const readRaw = (key) => { try { return storage?.getItem(key) ?? null; } catch { return null; } };
  const predecessorsStable = () => readRaw(UNBORROWED_REACH_SAVE_KEY) === expectedPredecessor
    && Boolean(canonicalRaw(expectedPredecessor, sanitizeUnborrowedReachSave));
  return freeze({
    predecessorsStable,
    read() { const raw = readRaw(MEASURED_HORIZON_SAVE_KEY); return raw == null ? null : canonicalRaw(raw, sanitizeCurrentRecord); },
    commit(candidate) {
      const safe = sanitizeCurrentRecord(candidate); const before = readRaw(MEASURED_HORIZON_SAVE_KEY);
      if (!safe || !predecessorsStable()) return freeze({ status: "failed", rollbackVerified: true, predecessorBytesPreserved: predecessorsStable() });
      const raw = JSON.stringify(safe);
      try {
        storage.setItem(MEASURED_HORIZON_SAVE_KEY, raw);
        if (readRaw(MEASURED_HORIZON_SAVE_KEY) !== raw || !canonicalRaw(raw, sanitizeCurrentRecord) || !predecessorsStable()) throw new Error("read_back_rejected");
        return freeze({ status: "committed", value: safe, rollbackVerified: true, predecessorBytesPreserved: true });
      } catch {
        try { if (before == null) storage.removeItem(MEASURED_HORIZON_SAVE_KEY); else storage.setItem(MEASURED_HORIZON_SAVE_KEY, before); } catch { return freeze({ status: "hold", rollbackVerified: false, predecessorBytesPreserved: predecessorsStable() }); }
        return freeze({ status: "failed", rollbackVerified: readRaw(MEASURED_HORIZON_SAVE_KEY) === before, predecessorBytesPreserved: predecessorsStable() });
      }
    },
  });
}

function buildRecord(eligibility, gates, outcome) {
  const canonical = {
    version: MEASURED_HORIZON_RECORD_VERSION, packetId: "RP-012", checkpoint: MEASURED_HORIZON_CHECKPOINT,
    objectiveVersion: MEASURED_HORIZON_OBJECTIVE_VERSION, objectiveIds: [...measuredHorizonObjectiveIds],
    evidenceReferenceIds: [...eligibility.evidenceReferenceIds], perGatePassBoolean: Object.fromEntries(measuredHorizonGateIds.map((id) => [id, gates[id] === true])),
    remediationRouteIds: measuredHorizonGateIds.filter((id) => gates[id] !== true).map(remediationId), localReadinessState: outcome,
    continuation: "continuation", cityStateDelta: null, worldStateDelta: null, externalStateDelta: null, authorityDelta: null, successor: null,
  };
  return sanitizeMeasuredHorizonSave({ ...canonical, auditChecksum: hash(stable(canonical)) }, eligibility);
}

export function createMeasuredHorizonNormalController(options = {}) {
  const released = clone(options.releasedPredecessorState); const route = clone(options.entrySourceState);
  const predecessor = canonicalRaw(options.predecessorBytes, sanitizeUnborrowedReachSave);
  const eligibility = sanitizeMeasuredHorizonEligibility(options.eligibility);
  const restored = sanitizeMeasuredHorizonSave(options.restoredRecord, eligibility);
  const allowed = new Set(["mode", "releasedPredecessorState", "entrySourceState", "predecessorBytes", "entryIntent", "restoredRecord", "eligibility", "adapter"]);
  const contaminated = Object.keys(options).some((key) => !allowed.has(key));
  const routeAccepted = !contaminated && predecessor?.version === UNBORROWED_REACH_RECORD_VERSION && predecessor?.checkpoint === "rp011_reconciliation_saved"
    && exactReleasedUnborrowed(released) && stable(route) === stable(createMeasuredHorizonRouteState(released))
    && exactRouteIntent(options.entryIntent) && options.adapter?.predecessorsStable?.() === true;
  let closed = false; let draft = {}; let gates = Object.fromEntries(measuredHorizonGateIds.map((id) => [id, false])); let index = 0;
  const spentTokens = new Set(routeAccepted ? [options.entryIntent.opaqueFreshEventToken] : []);
  let activeEligibility = eligibility; let record = restored; let outcome = restored?.localReadinessState ?? null;
  let state = options.mode === "demo_tour"
    ? freeze({ shellVersion: MEASURED_HORIZON_SHELL_VERSION, controllerVersion: MEASURED_HORIZON_CONTROLLER_VERSION, packetId: "RP-012", phase: "UR-30 TOUR", boardState: "SC-12", activeGroup: "td012-tour", owner: "SYSTEM // DEMO TOUR", headingId: "td012-tour-heading", heading: "MEASURED HORIZON TOUR ISOLATED", statusMessageId: "td012:tour", statusMessage: measuredHorizonStatusByGroup["td012-tour"], availableActions: freeze([]), focusIntent: freeze({ group: "td012-tour", target: "td012-tour-heading" }), successor: null })
    : restored && eligibility ? stateFor(restored.localReadinessState === MEASURED_HORIZON_READY ? "mh40_restore_ready" : "mh40_restore_not_yet", { perGatePassBoolean: restored.perGatePassBoolean, failedGateIds: measuredHorizonGateIds.filter((id) => !restored.perGatePassBoolean[id]), localReadinessState: restored.localReadinessState })
    : routeAccepted ? stateFor("mh00_assemble")
    : freeze({ ...(route ?? released ?? {}), statusMessageId: "td012:route:rejected", statusMessage: "Measured Horizon was not entered. Exact Unborrowed Reach remains unchanged and no future valid token was spent.", focusIntent: freeze({ group: MEASURED_HORIZON_ROUTE_GROUP, target: "td012-route-heading" }) });
  const set = (group, extra = {}) => { draft = {}; state = stateFor(group, { perGatePassBoolean: gates, ...extra }); return state; };
  const reject = (reason) => freeze({ status: "rejected", reason, state: clone(state) });
  const safeReturn = (target) => { draft = {}; closed = true; return freeze({ status: target === "RP-011" ? "returned_to_unborrowed_reach_write_free" : "returned_to_city_threshold_write_free", route: freeze({ target, continuation: "continuation", cityStateDelta: null, worldStateDelta: null, externalStateDelta: null, successor: null, authorityGranted: false, writePerformed: false, replayedEvents: freeze([]) }), state: clone(state) }); };
  return freeze({
    getState: () => clone(state), getRecord: () => clone(record), entryTokenConsumed: () => routeAccepted,
    updateField(name, value) {
      if (closed || typeof name !== "string") return false;
      const allowedFields = ["mh20_python_fresh", "mh25_python_retry"].includes(state.activeGroup)
        ? ["learnerSource"]
        : ["mh20_ai901_fresh", "mh25_ai901_retry"].includes(state.activeGroup)
          ? ["decision", "reason"]
          : [];
      if (!allowedFields.includes(name)) return false;
      draft[name] = clone(value);
      return true;
    },
    dispatch(input) {
      const action = typeof input === "string" ? input : input?.action;
      if (closed || options.mode === "demo_tour" || state.shellVersion !== MEASURED_HORIZON_SHELL_VERSION) return reject("route_closed");
      if (typeof input === "object") {
        const exact = input?.kind === "td012.measured-horizon-intent.v1" && input?.controllerVersion === MEASURED_HORIZON_CONTROLLER_VERSION
          && input?.shellVersion === MEASURED_HORIZON_SHELL_VERSION && input?.mode === "campaign" && input?.packetId === "RP-012"
          && input?.group === state.activeGroup && input?.owner === state.owner && measuredHorizonModalities.includes(input?.activationKind)
          && exactFreshEventToken(input?.opaqueFreshEventToken)
          && !spentTokens.has(input.opaqueFreshEventToken);
        if (!exact) return reject("invalid_or_stale_intent");
        spentTokens.add(input.opaqueFreshEventToken);
      }
      const group = state.activeGroup;
      if (action === measuredHorizonActions.returnUnborrowed && !group.includes("transaction") && group !== "mh40_save_confirm") return safeReturn("RP-011");
      if (action === measuredHorizonActions.returnThreshold && !group.includes("transaction") && group !== "mh40_save_confirm") return safeReturn("CITY-THRESHOLD");
      if (group === "mh00_assemble" && action === measuredHorizonActions.requestReview) return freeze({ status: "review_request_visible_zero_evidence", state: clone(set("mh00_request_review")) });
      if (group === "mh00_request_review" && action === measuredHorizonActions.verifyCoverage) {
        if (!activeEligibility) return freeze({ status: "eligibility_recovery_visible", state: clone(set("mh10_eligibility_recovery", { failedGateIds: [rp012.python_mapping.id], focusTarget: `mh25-remediate-${slug(rp012.python_mapping.id)}` })) });
        return freeze({ status: "eligibility_verified_zero_fresh_credit", state: clone(set("mh10_eligibility")) });
      }
      if (group === "mh10_eligibility" && action === measuredHorizonActions.beginFresh) return freeze({ status: "blank_python_work_visible", state: clone(set("mh20_python_fresh", { form: freeze({ kind: "python", learnerSource: "" }), focusTarget: "mh20-python-source", privateWorkCleared: false })) });
      if (["mh20_python_fresh", "mh25_python_retry"].includes(group) && action === measuredHorizonActions.submitPython) {
        const result = evaluateMeasuredHorizonPython(draft.learnerSource); if (result.blank) return freeze({ status: "blank_work_rejected", state: clone(state) });
        gates[rp012.python_mapping.id] = result.passed; index = 0;
        return freeze({ status: result.passed ? "python_gate_passed" : "python_gate_missed", state: clone(set("mh20_ai901_fresh", { currentObjectiveId: measuredHorizonObjectiveIds[0], form: freeze({ kind: "objective", objectiveId: measuredHorizonObjectiveIds[0] }), failedGateIds: result.passed ? [] : [rp012.python_mapping.id], focusTarget: `mh20-ai901-${slug(measuredHorizonObjectiveIds[0])}`, privateWorkCleared: false })) });
      }
      if (["mh20_ai901_fresh", "mh25_ai901_retry"].includes(group) && action === measuredHorizonActions.submitObjective) {
        const id = state.currentObjectiveId; const result = evaluateMeasuredHorizonObjective(id, draft);
        if (result.blank) return freeze({ status: "blank_work_rejected", state: clone(state) });
        gates[id] = result.passed; index += 1;
        if (index < measuredHorizonObjectiveIds.length) { const next = measuredHorizonObjectiveIds[index]; return freeze({ status: "objective_recorded", state: clone(set(group, { currentObjectiveId: next, form: freeze({ kind: "objective", objectiveId: next }), failedGateIds: measuredHorizonGateIds.filter((gate) => !gates[gate]), focusTarget: `mh20-ai901-${slug(next)}`, privateWorkCleared: false })) }); }
        const failed = measuredHorizonGateIds.filter((idValue) => !gates[idValue]);
        return freeze({ status: failed.length ? "demonstrated_remediation_required" : "fresh_gate_set_complete", state: clone(set(failed.length ? "mh25_remediation" : "mh30_local_decision", { failedGateIds: failed, focusTarget: failed.length ? `mh25-remediate-${slug(failed[0])}` : "mh30-decision-heading" })) });
      }
      if (group === "mh25_remediation" && action === measuredHorizonActions.openRemediation) return freeze({ status: "exact_answer_free_route_opened", routeId: remediationId(state.failedGateIds[0]), evidenceGranted: false, state: clone(state) });
      if (group === "mh25_remediation" && action === measuredHorizonActions.beginRetry) {
        const pythonFailed = state.failedGateIds.includes(rp012.python_mapping.id); index = pythonFailed ? 0 : measuredHorizonObjectiveIds.findIndex((id) => state.failedGateIds.includes(id));
        return freeze({ status: "genuinely_blank_retry_visible", state: clone(set(pythonFailed ? "mh25_python_retry" : "mh25_ai901_retry", { currentObjectiveId: pythonFailed ? null : measuredHorizonObjectiveIds[index], form: freeze(pythonFailed ? { kind: "python", learnerSource: "" } : { kind: "objective", objectiveId: measuredHorizonObjectiveIds[index] }), failedGateIds: state.failedGateIds, focusTarget: pythonFailed ? "mh25-python-source" : `mh25-ai901-${slug(measuredHorizonObjectiveIds[index])}`, privateWorkCleared: false })) });
      }
      if (["mh25_remediation", "mh30_local_decision"].includes(group) && action === measuredHorizonActions.reviewDecision) { const failed = measuredHorizonGateIds.filter((id) => !gates[id]); outcome = activeEligibility && !failed.length ? MEASURED_HORIZON_READY : MEASURED_HORIZON_NOT_YET; return freeze({ status: "local_decision_visible", state: clone(set(outcome === MEASURED_HORIZON_READY ? "mh30_ready" : "mh30_not_yet_ready", { failedGateIds: failed, localReadinessState: outcome })) }); }
      if (["mh30_ready", "mh30_not_yet_ready"].includes(group) && action === measuredHorizonActions.save) return freeze({ status: "local_save_confirmation_visible", state: clone(set("mh40_save_confirm", { failedGateIds: state.failedGateIds, localReadinessState: outcome, focusTarget: "mh40-save-readiness" })) });
      if (group === "mh40_save_confirm" && action === measuredHorizonActions.cancelSave) return freeze({ status: "local_save_cancelled_write_free", state: clone(set(outcome === MEASURED_HORIZON_READY ? "mh30_ready" : "mh30_not_yet_ready", { failedGateIds: measuredHorizonGateIds.filter((id) => !gates[id]), localReadinessState: outcome })) });
      if (group === "mh40_save_confirm" && action === measuredHorizonActions.save) {
        state = stateFor("mh40_save_transaction", { perGatePassBoolean: gates, failedGateIds: measuredHorizonGateIds.filter((id) => !gates[id]), localReadinessState: outcome });
        const candidate = buildRecord(activeEligibility, gates, outcome); const result = options.adapter?.commit?.(candidate);
        if (result?.status === "committed") { record = sanitizeMeasuredHorizonSave(result.value, activeEligibility); return freeze({ status: "local_readiness_saved_verified_restore", record: clone(record), state: clone(set(outcome === MEASURED_HORIZON_READY ? "mh40_restore_ready" : "mh40_restore_not_yet", { failedGateIds: record.remediationRouteIds.map((id) => id.slice(10)), localReadinessState: outcome })) }); }
        if (result?.status === "hold" || result?.rollbackVerified !== true || result?.predecessorBytesPreserved !== true) return freeze({ status: "rollback_integrity_hold", state: clone(set("mh40_rollback_hold", { failedGateIds: measuredHorizonGateIds.filter((id) => !gates[id]), localReadinessState: outcome })) });
        return freeze({ status: "local_save_failed_rollback_verified", state: clone(set("mh40_save_recovery", { failedGateIds: measuredHorizonGateIds.filter((id) => !gates[id]), localReadinessState: outcome })) });
      }
      if (group === "mh40_save_recovery" && action === measuredHorizonActions.retrySave) return freeze({ status: "fresh_local_save_confirmation_visible", state: clone(set("mh40_save_confirm", { failedGateIds: state.failedGateIds, localReadinessState: outcome })) });
      return reject("action_not_available");
    },
  });
}

export const measuredHorizonPublicContract = freeze({
  shellVersion: MEASURED_HORIZON_SHELL_VERSION, blueprintVersion: MEASURED_HORIZON_BLUEPRINT_VERSION,
  controllerVersion: MEASURED_HORIZON_CONTROLLER_VERSION, recordVersion: MEASURED_HORIZON_RECORD_VERSION,
  fixtureId: "td012-measured-horizon-v1", fixtureContractVersion: "td012.fixture-manifest.v1",
  objectiveVersion: MEASURED_HORIZON_OBJECTIVE_VERSION, gateIds: measuredHorizonGateIds,
  recordKeys, selectedImageRoles: freeze([]), structuralPlaceholdersOnly: false, mediaAdded: 0,
  authorityGranted: false, externalActionEnabled: false, worldStateChanged: false, successor: null,
});
