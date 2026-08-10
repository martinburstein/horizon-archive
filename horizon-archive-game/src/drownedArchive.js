import { responsibleAIDimensions, responsibleAIPrimaryScenarios, responsibleAITransferScenarios } from "./responsibleAIExercise.js";

export const DROWNED_ARCHIVE_HOTSPOTS = Object.freeze({
  sixfoldWeir: Object.freeze({
    left: "45%", top: "75%", width: "20%", height: "25%",
    narrow: Object.freeze({ left: "45%", top: "75%", width: "20%", height: "25%" }),
  }),
});

export const FRPX03_COPY = Object.freeze({
  NAME: "Sixfold Weir",
  STATE: Object.freeze({
    available: "available",
    in_progress: "in progress",
    remediation_required: "remediation required",
    complete: "complete",
  }),
  FRPX03_UNSEEN_INTERFACE: "[FRPX03_UNSEEN_INTERFACE]",
  FRPX03_AVAILABLE: "[FRPX03_AVAILABLE]",
  FRPX03_IN_PROGRESS: "[FRPX03_IN_PROGRESS]",
  FRPX03_MISSED: "[FRPX03_MISSED]",
  FRPX03_MASTERED: "[FRPX03_MASTERED]",
  FRPX03_RETURNED: "[FRPX03_RETURNED]",
  FRPX03_NEXT_BOUNDARY: "[FRPX03_NEXT_BOUNDARY]",
});

const orderedEvidenceIds = Object.freeze([
  ...responsibleAIPrimaryScenarios.map(({ id }) => id),
  ...responsibleAITransferScenarios.map(({ id }) => id),
  "closed_note_explanation",
]);

function isExactDimensionRecord(value) {
  return value && typeof value === "object"
    && Object.keys(value).length === responsibleAIDimensions.length
    && responsibleAIDimensions.every((dimension) => typeof value[dimension] === "boolean");
}

function hasContiguousEvidence(evidence) {
  const records = evidence?.dimensionCorrectness;
  if (!records || typeof records !== "object") return false;
  const ids = Object.keys(records);
  if (ids.some((id) => !orderedEvidenceIds.includes(id))) return false;
  if (!ids.every((id) => isExactDimensionRecord(records[id]))) return false;
  return ids.every((id, index) => id === orderedEvidenceIds[index]);
}

function allPassed(evidence, count) {
  return orderedEvidenceIds.slice(0, count).every((id) => (
    isExactDimensionRecord(evidence.dimensionCorrectness[id])
    && responsibleAIDimensions.every((dimension) => evidence.dimensionCorrectness[id][dimension] === true)
  ));
}

function isStructurallyValidResponsibleEvidence(evidence) {
  if (!evidence || !hasContiguousEvidence(evidence)) return false;
  const count = Object.keys(evidence.dimensionCorrectness).length;
  const primaryCount = responsibleAIPrimaryScenarios.length;
  const transferCount = primaryCount + responsibleAITransferScenarios.length;
  if (evidence.masteryStatus === "in_progress" || evidence.masteryStatus === "remediation_required") {
    return count > 0 && count <= primaryCount;
  }
  if (evidence.masteryStatus === "primary_complete") {
    return count >= primaryCount && count <= transferCount && allPassed(evidence, primaryCount);
  }
  if (evidence.masteryStatus === "transfer_complete") {
    return count >= transferCount && count <= orderedEvidenceIds.length && allPassed(evidence, transferCount);
  }
  if (evidence.masteryStatus === "mastered") {
    return count === orderedEvidenceIds.length && allPassed(evidence, orderedEvidenceIds.length) && Boolean(evidence.confidence);
  }
  return false;
}

export function deriveSixfoldWeirState(workloadEvidence, responsibleAIEvidence) {
  if (workloadEvidence?.masteryStatus !== "mastered") return "hidden";
  if (!responsibleAIEvidence) return "available";
  if (!isStructurallyValidResponsibleEvidence(responsibleAIEvidence)) return "hidden";
  if (responsibleAIEvidence.masteryStatus === "mastered") return "complete";
  if (responsibleAIEvidence.masteryStatus === "remediation_required") return "remediation_required";
  return "in_progress";
}

export function buildSixfoldWeirReturnPresentation(state) {
  if (state === "complete") return `${FRPX03_COPY.FRPX03_RETURNED} ${FRPX03_COPY.FRPX03_MASTERED}`;
  if (state === "remediation_required") return `${FRPX03_COPY.FRPX03_RETURNED} ${FRPX03_COPY.FRPX03_MISSED}`;
  if (state === "in_progress") return `${FRPX03_COPY.FRPX03_RETURNED} ${FRPX03_COPY.FRPX03_IN_PROGRESS}`;
  return `${FRPX03_COPY.FRPX03_RETURNED} ${FRPX03_COPY.FRPX03_AVAILABLE}`;
}
