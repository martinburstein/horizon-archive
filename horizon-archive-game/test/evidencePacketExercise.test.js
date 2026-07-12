import test from "node:test";
import assert from "node:assert/strict";
import referenceOutput from "../../curriculum/lessons/L-05-07/reference_output.json" with { type: "json" };
import {
  evaluateEvidencePacket,
  evidenceCheckCodes,
  evidenceStarter,
  sanitizeEvidencePacketMastery,
  updateEvidencePacketMastery,
} from "../src/evidencePacketExercise.js";

test("registered reference output passes all twelve mirrored checks", () => {
  const result = evaluateEvidencePacket(JSON.stringify(referenceOutput));
  assert.equal(result.passed, true);
  assert.equal(result.score, 12);
  assert.deepEqual(result.failedCodes, []);
  assert.deepEqual(Object.keys(result.checks), evidenceCheckCodes);
});

test("false and null remain different critical boundaries", () => {
  const nullAccess = structuredClone(referenceOutput);
  nullAccess.fields.access_surface_detected.value = null;
  const accessResult = evaluateEvidencePacket(JSON.stringify(nullAccess));
  assert.equal(accessResult.checks.E_ACCESS_FALSE, false);
  assert.equal(accessResult.checks.E_RESPONSE_NULL, true);
  assert(accessResult.criticalMisses.includes("E_ACCESS_FALSE"));

  const inventedMeaning = structuredClone(referenceOutput);
  inventedMeaning.fields.response_meaning.value = false;
  const meaningResult = evaluateEvidencePacket(JSON.stringify(inventedMeaning));
  assert.equal(meaningResult.checks.E_RESPONSE_NULL, false);
  assert(meaningResult.misconceptionTags.includes("invented-value"));
});

test("provenance and exact schema checks reject near misses", () => {
  const wrong = structuredClone(referenceOutput);
  wrong.fields.structure_count.source_ids.push("DA-TEL-01");
  wrong.fields.broad_description = { value: "open prose", source_ids: ["DA-IMG-01"], uncertainty: "not schema extraction" };
  const result = evaluateEvidencePacket(JSON.stringify(wrong));
  assert.equal(result.checks.E_STRUCTURE_SOURCES, false);
  assert.equal(result.checks.E_FIELD_SET, false);
  assert(result.misconceptionTags.includes("missing-provenance"));
  assert(result.misconceptionTags.includes("description-is-extraction"));
});

test("starter fails deterministically and malformed JSON gets syntax remediation", () => {
  assert.equal(evaluateEvidencePacket(evidenceStarter).passed, false);
  const malformed = evaluateEvidencePacket('{ "packet_id": ');
  assert.equal(malformed.parsed, false);
  assert.deepEqual(malformed.checks, {});
  assert.match(malformed.feedback, /E_JSON_SYNTAX/);
});

test("persistent mastery evidence strips working JSON, notes, and source", () => {
  const passing = evaluateEvidencePacket(JSON.stringify(referenceOutput));
  let evidence = updateEvidencePacketMastery(null, {
    incrementAttempt: true,
    checkResults: passing.checks,
    hintLevel: 2,
    confidence: "high",
    misconceptionTags: ["missing-provenance", "forged"],
    masteryStatus: "mastered",
  });
  evidence = sanitizeEvidencePacketMastery({
    ...evidence,
    learnerWorkingOutputJson: JSON.stringify(referenceOutput),
    learnerFreeFormNotes: "private note",
    learnerSourceCode: "print('private')",
  });
  assert.equal(evidence.attemptCount, 1);
  assert.equal(evidence.checkResults.E_RESPONSE_NULL, true);
  assert.deepEqual(evidence.misconceptionTags, ["missing-provenance"]);
  assert.equal("learnerWorkingOutputJson" in evidence, false);
  assert.equal("learnerFreeFormNotes" in evidence, false);
  assert.equal("learnerSourceCode" in evidence, false);
});
