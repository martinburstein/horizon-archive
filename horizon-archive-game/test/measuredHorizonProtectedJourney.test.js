import test from "node:test";
import assert from "node:assert/strict";
import {
  createMeasuredHorizonPersistenceAdapter,
  deriveMeasuredHorizonFocus,
  deriveMeasuredHorizonResume,
  measuredHorizonDecisions,
  runMeasuredHorizonProtectedJourneySmoke,
} from "../src/MeasuredHorizonProtectedJourney.js";
import { UNBORROWED_REACH_PROTECTED_JOURNEY_VERSION } from "../src/UnborrowedReachProtectedJourney.js";
import contract from "../../curriculum/readiness/RP-012/contract.json" with { type: "json" };

const gateIds = [contract.python_mapping.id, ...contract.ai901_mapping.objective_ids];
const allPass = () => Object.fromEntries(gateIds.map((id) => [id, true]));
const predecessor = () => ({
  phase: "verified_restore",
  saved: {
    version: UNBORROWED_REACH_PROTECTED_JOURNEY_VERSION,
    packetId: "RP-011",
    checkpoint: "rp011_reconciliation_saved",
    continuation: "expedition-local-continuation",
    physicalStateDelta: null,
    externalStateDelta: null,
    successor: null,
  },
});
const fixture = (overrides = {}) => ({
  predecessor: predecessor(),
  evidenceReferenceIds: ["RP007-E1", "RP008-E1", "RP009-E1", "RP010-E1", "RP011-E1", "CUM01-E1"],
  freshAttempt: {
    attemptId: "FRESH-01",
    blankAtStart: true,
    closedNote: true,
    offline: true,
    objectiveVersion: contract.official_blueprint.effective_date,
    gateResults: allPass(),
  },
  ...overrides,
});

test("exact complete evidence produces only the bounded local ready decision", () => {
  const result = runMeasuredHorizonProtectedJourneySmoke(fixture());
  assert.equal(result.decision, measuredHorizonDecisions.ready);
  assert.equal(result.restored.saved.successor, null);
  assert.equal(result.liveServiceUsed, false);
  assert.equal(result.examGuarantee, false);
  assert.deepEqual(result.replayedEvents, []);
});

test("an actual miss produces only its answer-free remediation route", () => {
  const results = allPass();
  results["AI901-D2-O3"] = false;
  const result = runMeasuredHorizonProtectedJourneySmoke(fixture({ freshAttempt: { ...fixture().freshAttempt, gateResults: results } }));
  assert.equal(result.decision, measuredHorizonDecisions.notYetReady);
  assert.deepEqual(result.remediationRoutes, ["REMEDIATE-AI901-D2-O3"]);
});

test("completed remediation requires a new blank independent retry", () => {
  const results = allPass();
  results[contract.python_mapping.id] = false;
  const base = fixture({ freshAttempt: { ...fixture().freshAttempt, gateResults: results }, remediationCompleted: true });
  assert.throws(() => runMeasuredHorizonProtectedJourneySmoke(base), /new genuinely blank retry/);
  const result = runMeasuredHorizonProtectedJourneySmoke({
    ...base,
    retryAttempt: { ...fixture().freshAttempt, attemptId: "RETRY-02", gateResults: allPass() },
  });
  assert.equal(result.decision, measuredHorizonDecisions.ready);
});

test("entry, privacy, and version checks fail closed with deterministic focus", () => {
  assert.throws(() => runMeasuredHorizonProtectedJourneySmoke(fixture({ predecessor: {} })), /Exact verified RP-011/);
  assert.throws(() => runMeasuredHorizonProtectedJourneySmoke(fixture({ freshAttempt: { ...fixture().freshAttempt, tourCredit: true } })), /genuinely blank/);
  assert.equal(deriveMeasuredHorizonFocus({}), "verify_predecessor");
  assert.equal(deriveMeasuredHorizonFocus(fixture({ evidenceReferenceIds: [] })), "verify_evidence_references");
});

test("atomic failure is byte-stable and restore rejects tampering without replay", () => {
  const adapter = createMeasuredHorizonPersistenceAdapter({ sentinel: true });
  const failed = runMeasuredHorizonProtectedJourneySmoke(fixture({ failSave: true }), adapter);
  assert.equal(failed.byteStableRollback, true);
  assert.deepEqual(adapter.read(), { sentinel: true });

  const cleanAdapter = createMeasuredHorizonPersistenceAdapter();
  const saved = runMeasuredHorizonProtectedJourneySmoke(fixture(), cleanAdapter);
  assert.equal(saved.restored.focusIntent, "review_saved_readiness");
  assert.deepEqual(saved.restored.replayedEvents, []);
  assert.equal(deriveMeasuredHorizonResume({ ...cleanAdapter.read(), local_readiness_state: "FORGED" }).saved, null);
});

