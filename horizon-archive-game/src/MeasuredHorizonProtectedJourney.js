import contract from "../../curriculum/readiness/RP-012/contract.json" with { type: "json" };
import { UNBORROWED_REACH_PROTECTED_JOURNEY_VERSION } from "./UnborrowedReachProtectedJourney.js";

export const MEASURED_HORIZON_PROTECTED_JOURNEY_VERSION = "rp012.protected-journey.v1";
export const measuredHorizonPhases = Object.freeze([
  "MH-00 ASSEMBLE",
  "MH-10 VERIFY ELIGIBILITY",
  "MH-20 FRESH TRANSFER",
  "MH-25 DELAY + TRANSFER",
  "MH-30 LOCAL DECISION",
  "MH-40 SAVE + REVIEW + CLOSE",
]);
export const measuredHorizonDecisions = Object.freeze({
  ready: "READY FOR CURRENT PRACTICE STANDARD",
  notYetReady: "NOT YET READY - REMEDIATION ROUTES SAVED",
});

const objectiveIds = Object.freeze([...contract.ai901_mapping.objective_ids]);
const allowlist = Object.freeze([...contract.privacy_allowlist]);
const forbiddenInputPattern = /answer|exam_item|private|credential|endpoint|payload|response|identity|live_source|transient|tour|scene|timing|confidence|authority|successor/i;

function stableJson(value) {
  if (value === null || typeof value !== "object") return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(stableJson).join(",")}]`;
  return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(",")}}`;
}

function checksumFor(value) {
  const text = stableJson(value);
  let hash = 0x811c9dc5;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return `fnv1a32-${hash.toString(16).padStart(8, "0")}`;
}

function frozenClone(value) {
  if (Array.isArray(value)) return Object.freeze(value.map(frozenClone));
  if (value && typeof value === "object") return Object.freeze(Object.fromEntries(Object.entries(value).map(([key, item]) => [key, frozenClone(item)])));
  return value;
}

function checked(value) {
  const payload = frozenClone(value);
  return Object.freeze({ ...payload, audit_checksum: checksumFor(payload) });
}

export function createMeasuredHorizonPersistenceAdapter(initialValue = null) {
  let stored = initialValue === null ? null : frozenClone(initialValue);
  return Object.freeze({
    read: () => frozenClone(stored),
    writeAtomically(candidate, { fail = false } = {}) {
      const before = stableJson(stored);
      if (fail) return Object.freeze({ saved: false, byteStable: before === stableJson(stored) });
      stored = frozenClone(candidate);
      return Object.freeze({ saved: true, byteStable: false });
    },
  });
}

function exactPredecessor(value) {
  const saved = value?.saved;
  return value?.phase === "verified_restore"
    && saved?.version === UNBORROWED_REACH_PROTECTED_JOURNEY_VERSION
    && saved?.packetId === "RP-011"
    && saved?.checkpoint === "rp011_reconciliation_saved"
    && saved?.physicalStateDelta === null
    && saved?.externalStateDelta === null
    && saved?.successor === null;
}

function validateEvidenceReferences(value) {
  if (!Array.isArray(value) || value.length < 6) return false;
  return value.every((reference) => typeof reference === "string" && /^[A-Z0-9-]+$/.test(reference));
}

function normalizeGateResults(value) {
  const required = [contract.python_mapping.id, ...objectiveIds];
  const supplied = value && typeof value === "object" ? value : {};
  return Object.freeze(Object.fromEntries(required.map((id) => [id, supplied[id] === true])));
}

function remediationFor(results) {
  return Object.freeze(Object.entries(results).filter(([, passed]) => !passed).map(([id]) => `REMEDIATE-${id}`));
}

function validateFreshAttempt(value) {
  return value?.blankAtStart === true
    && value?.closedNote === true
    && value?.offline === true
    && value?.objectiveVersion === contract.official_blueprint.effective_date
    && value?.attemptId && /^[A-Z0-9-]+$/.test(value.attemptId)
    && !forbiddenInputPattern.test(JSON.stringify(value));
}

export function deriveMeasuredHorizonFocus(value) {
  if (!exactPredecessor(value?.predecessor)) return "verify_predecessor";
  if (!validateEvidenceReferences(value?.evidenceReferenceIds)) return "verify_evidence_references";
  if (!validateFreshAttempt(value?.freshAttempt)) return "begin_blank_fresh_transfer";
  const failures = remediationFor(normalizeGateResults(value?.freshAttempt?.gateResults));
  if (failures.length > 0 && value?.remediationCompleted !== true) return failures[0];
  if (failures.length > 0 && !validateFreshAttempt(value?.retryAttempt)) return "begin_blank_retry_transfer";
  return "save_local_readiness_record";
}

export function runMeasuredHorizonProtectedJourneySmoke(fixture, adapter = createMeasuredHorizonPersistenceAdapter()) {
  if (!exactPredecessor(fixture?.predecessor)) throw new TypeError("Exact verified RP-011 completion is required.");
  if (!validateEvidenceReferences(fixture?.evidenceReferenceIds)) throw new TypeError("Independent allowlisted evidence references are required.");
  if (!validateFreshAttempt(fixture?.freshAttempt)) throw new TypeError("A genuinely blank, closed-note, offline fresh transfer is required.");

  const primaryResults = normalizeGateResults(fixture.freshAttempt.gateResults);
  const primaryRemediation = remediationFor(primaryResults);
  let finalResults = primaryResults;
  let remediationRoutes = primaryRemediation;
  let attemptId = fixture.freshAttempt.attemptId;

  if (primaryRemediation.length > 0 && fixture.remediationCompleted === true) {
    if (!validateFreshAttempt(fixture.retryAttempt)) throw new TypeError("Remediation requires a new genuinely blank retry.");
    if (fixture.retryAttempt.attemptId === fixture.freshAttempt.attemptId) throw new TypeError("Retry attempt must be independent.");
    finalResults = normalizeGateResults(fixture.retryAttempt.gateResults);
    remediationRoutes = remediationFor(finalResults);
    attemptId = fixture.retryAttempt.attemptId;
  }

  const ready = remediationRoutes.length === 0;
  const record = checked({
    version: MEASURED_HORIZON_PROTECTED_JOURNEY_VERSION,
    packet_id: "RP-012",
    checkpoint: "rp012_readiness_saved",
    objective_version: contract.official_blueprint.effective_date,
    objective_ids: objectiveIds,
    evidence_reference_ids: frozenClone(fixture.evidenceReferenceIds),
    per_gate_pass_boolean: finalResults,
    remediation_route_ids: remediationRoutes,
    local_readiness_state: ready ? measuredHorizonDecisions.ready : measuredHorizonDecisions.notYetReady,
    attempt_id: attemptId,
    continuation: fixture.predecessor.saved.continuation,
    physical_state_delta: null,
    external_state_delta: null,
    authority_delta: null,
    successor: null,
  });
  const permitted = new Set([...allowlist, "version", "packet_id", "checkpoint", "attempt_id", "continuation", "physical_state_delta", "external_state_delta", "authority_delta", "successor"]);
  if (Object.keys(record).some((key) => key !== "audit_checksum" && !permitted.has(key))) throw new TypeError("Readiness record exceeded the privacy allowlist.");

  const save = adapter.writeAtomically(record, { fail: fixture.failSave === true });
  if (!save.saved) return Object.freeze({ saved: false, byteStableRollback: save.byteStable, focusIntent: "retry_atomic_save", decision: null });
  const restored = deriveMeasuredHorizonResume(adapter.read());
  return Object.freeze({
    saved: true,
    decision: record.local_readiness_state,
    remediationRoutes,
    restored,
    privacyCleared: true,
    transientWorkRetained: false,
    replayedEvents: Object.freeze([]),
    presentationCreditUsed: false,
    tourCreditUsed: false,
    liveServiceUsed: false,
    examGuarantee: false,
    successor: null,
  });
}

export function deriveMeasuredHorizonResume(value) {
  if (!value || value.packet_id !== "RP-012" || value.checkpoint !== "rp012_readiness_saved") return Object.freeze({ phase: measuredHorizonPhases[0], focusIntent: "verify_predecessor", saved: null });
  const { audit_checksum: checksum, ...payload } = value;
  if (checksum !== checksumFor(payload)) return Object.freeze({ phase: measuredHorizonPhases[0], focusIntent: "verify_predecessor", saved: null });
  return Object.freeze({
    phase: measuredHorizonPhases[5],
    focusIntent: "review_saved_readiness",
    saved: frozenClone(value),
    replayedEvents: Object.freeze([]),
    privateWorkCleared: true,
    transientWorkCleared: true,
  });
}

