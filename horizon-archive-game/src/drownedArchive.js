import { responsibleAIDimensions, responsibleAIPrimaryScenarios, responsibleAITransferScenarios } from "./responsibleAIExercise.js";
import { sanitizeResponsibleAIEvidence } from "./responsibleAIExercise.js";
import { sanitizeModelChoiceEvidence } from "./modelChoiceExercise.js";

export const STRANDED_LENS_CRADLE_PATH = "Visual Direction/Production Masters/2026-08-10-first-run-host06/host06-stranded-lens-cradle-master-v1.png";

export const STRANDED_LENS_CRADLE_SOURCE_URL = null;

export const STRANDED_LENS_CRADLE_REGISTRY = Object.freeze({
  source: Object.freeze({
    enabled: false,
    path: null,
    sha256: null,
    byteLength: null,
    width: null,
    height: null,
    format: null,
    color: null,
    attemptOrdinal: null,
  }),
  physical: Object.freeze({ x: null, y: null, width: null, height: null, centerX: null, centerY: null }),
  activation: Object.freeze({ x: null, y: null, width: null, height: null }),
  label: Object.freeze({ insetOuterCss: 3, insetTextCss: 5 }),
  protected: Object.freeze({
    host05Cue: null,
    liveWater: null,
    returnLikeRidge: null,
    crown: null,
    tidalLens: null,
    secondLensCandidate: null,
  }),
  layouts: Object.freeze({
    desktop: null,
    laptop: null,
    narrow: null,
    effective200: null,
    retained320x180: null,
    retained320x240: null,
  }),
});

export const STRANDED_LENS_CRADLE_PROVENANCE = Object.freeze({
  sha256: null,
  byteLength: null,
});

export const FRPX05_IDENTIFICATION = Object.freeze({
  NAME: "Stranded Lens Cradle",
  STATE: Object.freeze({
    available: "available",
    in_progress: "in progress",
    remediation_required: "remediation required",
    complete: "complete",
  }),
  ALT: null,
});

export const FRPX05_COPY = Object.freeze({
  FRPX05_UNSEEN_INTERFACE: null,
  FRPX05_AVAILABLE: null,
  FRPX05_IN_PROGRESS: null,
  FRPX05_MISSED: null,
  FRPX05_MASTERED: null,
  FRPX05_RETURNED: null,
  FRPX05_NEXT_BOUNDARY: null,
});

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
  FRPX03_UNSEEN_INTERFACE: "Six unequal channels divide one inflow across two dry mineral lips; their local coupling lies within reach.",
  FRPX03_AVAILABLE: "PILOT // Six branches. One repeated relation. I'll call it the Sixfold Weir. SUIT // Separate compatible local surface confirmed; expedition work is available.",
  FRPX03_IN_PROGRESS: "SYSTEM // Expedition work remains unfinished and can resume from a clean boundary. SCENE // Water and branches remain unchanged.",
  FRPX03_MISSED: "901 TEACHER // One checked responsible-AI dimension remains unresolved. Answer-free guidance is available inside the Terminal.",
  FRPX03_MASTERED: "SYSTEM // Existing evidence is finalized. SCENE // The branches, basin, Crown, and route remain unchanged.",
  FRPX03_RETURNED: "SCENE // The same six branches still cross the two dry lips. SUIT // Sanitized evidence restores only the lawful expedition boundary.",
  FRPX03_NEXT_BOUNDARY: "PILOT // I'll follow the material trail already ahead. SYSTEM // The current continuation is available.",
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

const layoutContract = Object.freeze({
  desktop: Object.freeze({ width: 1920, height: 1080 }),
  laptop: Object.freeze({ width: 1366, height: 768 }),
  narrow: Object.freeze({ width: 390, height: 844 }),
  effective200: Object.freeze({ width: 768, height: 900 }),
  retained320x180: Object.freeze({ width: 320, height: 180 }),
  retained320x240: Object.freeze({ width: 320, height: 240 }),
});

const protectedKeys = Object.freeze([
  "host05Cue",
  "liveWater",
  "returnLikeRidge",
  "crown",
  "tidalLens",
  "secondLensCandidate",
]);

function isFiniteNumber(value) {
  return typeof value === "number" && Number.isFinite(value);
}

function isFiniteRect(value, { positive = true } = {}) {
  if (!value || typeof value !== "object") return false;
  if (!["x", "y", "width", "height"].every((key) => isFiniteNumber(value[key]))) return false;
  return !positive || (value.width > 0 && value.height > 0);
}

function rectContains(outer, inner) {
  return outer.x <= inner.x
    && outer.y <= inner.y
    && outer.x + outer.width >= inner.x + inner.width
    && outer.y + outer.height >= inner.y + inner.height;
}

function sourceRectPasses(rect) {
  return isFiniteRect(rect)
    && rect.x >= 0
    && rect.y >= 0
    && rect.x + rect.width <= 3840
    && rect.y + rect.height <= 2160;
}

function exactRect(actual, expected) {
  return isFiniteRect(actual) && ["x", "y", "width", "height"].every((key) => actual[key] === expected[key]);
}

function protectedLayoutPasses(record) {
  if (!record || typeof record !== "object") return false;
  return protectedKeys.every((key) => {
    const item = record[key];
    if (!item || typeof item !== "object") return false;
    if (item.sourceRect === "absent") {
      return item.mappedRect === "absent"
        && item.physicalIntersection === 0
        && item.semanticIntersection === 0
        && item.edgeSeparation === "absent";
    }
    return sourceRectPasses(item.sourceRect)
      && isFiniteRect(item.mappedRect)
      && item.physicalIntersection === 0
      && item.semanticIntersection === 0
      && isFiniteNumber(item.edgeSeparation?.source)
      && item.edgeSeparation.source >= 96
      && isFiniteNumber(item.edgeSeparation?.mapped)
      && item.edgeSeparation.mapped >= 8;
  });
}

function layoutPasses(id, record, registry, source) {
  const expectedViewport = layoutContract[id];
  if (!record || typeof record !== "object" || !expectedViewport) return false;
  const viewport = record.viewport;
  if (!viewport || viewport.width !== expectedViewport.width || viewport.height !== expectedViewport.height) return false;
  if (!isFiniteNumber(viewport.deviceScaleFactor) || viewport.deviceScaleFactor <= 0) return false;
  if (!isFiniteNumber(viewport.effectiveZoom) || viewport.effectiveZoom <= 0) return false;

  const sourceRecord = record.source;
  if (!sourceRecord
    || sourceRecord.path !== source.path
    || sourceRecord.sha256 !== source.sha256
    || sourceRecord.naturalWidth !== 3840
    || sourceRecord.naturalHeight !== 2160
    || sourceRecord.objectFit !== "cover"
    || sourceRecord.objectPosition !== "50% 50%"
    || !isFiniteRect(sourceRecord.renderedRect)
    || !exactRect(sourceRecord.visibleSourceRect, { x: 0, y: 0, width: 3840, height: 2160 })
    || sourceRecord.retainedArea !== 1) return false;

  const physical = record.physical;
  const semantic = record.semantic;
  if (!physical
    || !exactRect(physical.sourceRect, registry.physical)
    || !isFiniteRect(physical.mappedRect)
    || physical.centerSource?.x !== registry.physical.centerX
    || physical.centerSource?.y !== registry.physical.centerY
    || !isFiniteNumber(physical.centerMapped?.x)
    || !isFiniteNumber(physical.centerMapped?.y)) return false;
  if (!semantic
    || !exactRect(semantic.sourceRect, registry.activation)
    || !isFiniteRect(semantic.mappedRect)
    || semantic.targetWidth !== semantic.mappedRect.width
    || semantic.targetHeight !== semantic.mappedRect.height
    || semantic.targetWidth < 44
    || semantic.targetHeight < 44
    || semantic.containsPhysical !== true
    || !isFiniteNumber(semantic.areaRatio)
    || semantic.areaRatio > 1.5
    || !isFiniteNumber(semantic.centerClearance)
    || semantic.centerClearance < 4) return false;

  const label = record.label;
  if (!label
    || !isFiniteRect(label.outerRect)
    || !isFiniteRect(label.textRect)
    || label.insetOuterCss !== 3
    || label.insetTextCss !== 5
    || label.contained !== true
    || label.clipped !== false
    || label.overflowed !== false) return false;

  const order = record.order;
  if (!order
    || !Number.isInteger(order.imageIndex)
    || !Number.isInteger(order.host06Index)
    || !Number.isInteger(order.returnIndex)
    || !(order.imageIndex < order.host06Index && order.host06Index < order.returnIndex)
    || !Array.isArray(order.verbIndices)
    || order.verbIndices.length !== 3
    || !order.verbIndices.every(Number.isInteger)) return false;

  const focus = record.focus;
  if (!focus
    || !isFiniteRect(focus.beforeRect)
    || !isFiniteRect(focus.afterRect)
    || !focus.deltaEdges
    || !["top", "right", "bottom", "left"].every((key) => isFiniteNumber(focus.deltaEdges[key]) && Math.abs(focus.deltaEdges[key]) <= 1 / 64)
    || focus.activeName !== `use ${FRPX05_IDENTIFICATION.NAME}, in progress`
    || focus.outlineWidth !== "3px"
    || focus.outlineColor !== "Highlight"
    || focus.targetStable !== true) return false;

  return protectedLayoutPasses(record.protected);
}

export function isStrandedLensCradleMeasurementPass(registry = STRANDED_LENS_CRADLE_REGISTRY) {
  const { source, physical, activation, label, protected: protectedRegions, layouts } = registry ?? {};
  if (!source || !physical || !activation || !label || !protectedRegions || !layouts) return false;
  if (!sourceRectPasses(physical) || !sourceRectPasses(activation)) return false;
  if (physical.x < 0.34 * 3840 || physical.y < 0.30 * 2160) return false;
  if (physical.x + physical.width > 0.70 * 3840 || physical.y + physical.height > 0.74 * 2160) return false;
  if (physical.width < 0.30 * 3840 || physical.width > 0.36 * 3840) return false;
  if (physical.height < 0.30 * 2160 || physical.height > 0.40 * 2160) return false;
  if (physical.centerX !== physical.x + physical.width / 2 || physical.centerY !== physical.y + physical.height / 2) return false;
  if (!rectContains(activation, physical) || activation.width * activation.height > 1.5 * physical.width * physical.height) return false;
  if (label.insetOuterCss !== 3 || label.insetTextCss !== 5) return false;
  if (!protectedKeys.every((key) => protectedRegions[key] === "absent" || sourceRectPasses(protectedRegions[key]))) return false;
  return Object.keys(layoutContract).every((id) => layoutPasses(id, layouts[id], registry, source));
}

export function isStrandedLensCradleSourceIdentityPass(
  source = STRANDED_LENS_CRADLE_REGISTRY.source,
  provenance = STRANDED_LENS_CRADLE_PROVENANCE,
) {
  return source?.enabled === true
    && source.path === STRANDED_LENS_CRADLE_PATH
    && source.width === 3840
    && source.height === 2160
    && source.format === "png"
    && source.color === "opaque-srgb-8"
    && Number.isInteger(source.attemptOrdinal)
    && source.attemptOrdinal >= 1
    && source.attemptOrdinal <= 3
    && Number.isInteger(source.byteLength)
    && source.byteLength > 0
    && source.byteLength <= 12000000
    && typeof source.sha256 === "string"
    && /^[0-9a-f]{64}$/.test(source.sha256)
    && source.sha256 === provenance?.sha256
    && source.byteLength === provenance?.byteLength;
}

export function isStrandedLensCradleLawful({
  responsibleAIEvidence,
  registry = STRANDED_LENS_CRADLE_REGISTRY,
  provenance = STRANDED_LENS_CRADLE_PROVENANCE,
  decodedImage,
} = {}) {
  return sanitizeResponsibleAIEvidence(responsibleAIEvidence)?.masteryStatus === "mastered"
    && isStrandedLensCradleSourceIdentityPass(registry?.source, provenance)
    && isStrandedLensCradleMeasurementPass(registry)
    && decodedImage?.complete === true
    && decodedImage.naturalWidth === 3840
    && decodedImage.naturalHeight === 2160;
}

export function deriveStrandedLensCradleState({ modelChoiceEvidence, ...guardInputs } = {}) {
  if (!isStrandedLensCradleLawful(guardInputs)) return "hidden";
  if (modelChoiceEvidence == null) return "available";
  const evidence = sanitizeModelChoiceEvidence(modelChoiceEvidence);
  if (!evidence) return "hidden";
  if (evidence.masteryStatus === "mastered") return "complete";
  if (evidence.masteryStatus === "remediation_required") return "remediation_required";
  if (["in_progress", "primary_complete", "transfer_complete"].includes(evidence.masteryStatus)) return "in_progress";
  return "hidden";
}

export function isLegacyModelChoiceLauncherVisible(source = STRANDED_LENS_CRADLE_REGISTRY.source) {
  return source?.enabled !== true;
}

export function getStrandedLensCradleHotspot(registry = STRANDED_LENS_CRADLE_REGISTRY) {
  if (!isStrandedLensCradleMeasurementPass(registry)) return null;
  const { activation } = registry;
  return Object.freeze({
    left: `${(activation.x / 3840) * 100}%`,
    top: `${(activation.y / 2160) * 100}%`,
    width: `${(activation.width / 3840) * 100}%`,
    height: `${(activation.height / 2160) * 100}%`,
  });
}
