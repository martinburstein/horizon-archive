import { sanitizeObjectiveLedgerEvidence } from "./objectiveLedgerExercise.js";
import { sanitizeRemediationPlannerEvidence } from "./remediationPlannerExercise.js";
import {
  FIRST_RUN_RESPONSIVE_LAYOUTS,
  deriveResponsiveEvidence,
  projectSourceRect,
  rectanglesOverlap,
} from "./responsiveImageProjection.js";

export const WATERLINE_LEDGER_SCHEMA = "horizon.waterline-ledger.v1";
export const WATERLINE_LEDGER_PATH = "Visual Direction/Production Masters/2026-08-13-first-run-host14/host14-waterline-ledger-master-v1.png";
export const WATERLINE_LEDGER_SOURCE_URL = null;

export const WATERLINE_LEDGER_COPY = Object.freeze({
  name: "Waterline Ledger",
  unseen: "A broad dry face carries one irregular mineral band across older foundation, later repair, and present service skin.",
  available: "The same band crosses three material histories while service seams continue upward. Their relative order is visible; dates and authors are not.",
  look: "The dry face, crossed mineral band, material boundaries, and service seams remain physically unchanged.",
  talk: "No response follows. Water, mineral accumulation, and the service seams continue without acknowledgment.",
  objective_in_progress: "The face remains unchanged while objective-specific evidence is in progress.",
  remediation_in_progress: "The same physical record remains while the measured gap is routed to answer-free repair.",
  mastered: "Both expedition records are complete. The wall records no completion and gives no reply.",
  returned: "The same dry approach, crossed materials, waterline, and service seams remain.",
  next_boundary: "Continue along the existing dry service seam after both expedition records are complete.",
  alt: "A broad dry inclined basin face where one irregular mineral band crosses weathered foundation, later repair, and present service skin, with several service seams continuing upward and receded water nearby.",
});

const freeze = (value) => {
  if (value && typeof value === "object" && !Object.isFrozen(value)) {
    Object.freeze(value);
    for (const child of Object.values(value)) freeze(child);
  }
  return value;
};

const nullSource = { enabled: false, path: null, attemptId: null, bytes: null, sha256: null, width: null, height: null, format: null, color: null };
const nullLayouts = { desktop: null, laptop: null, narrow: null, effective200: null, retained320x180: null, retained320x240: null };

export const WATERLINE_LEDGER_REGISTRY = freeze({
  schema: WATERLINE_LEDGER_SCHEMA,
  source: nullSource,
  provenance: null,
  relation: null,
  dryApproach: null,
  histories: { foundation: null, repair: null, serviceSkin: null },
  depositionBand: null,
  waterline: null,
  serviceSeams: [],
  semanticTarget: null,
  physicalCenter: null,
  labelAnchor: null,
  protected: { predecessor: null, nextBoundary: null, liveWater: null, returnRoute: null, suspendedLandmark: null, crown: null, witness: null },
  layouts: nullLayouts,
  copy: null,
});

const ROOT_KEYS = ["schema", "source", "provenance", "relation", "dryApproach", "histories", "depositionBand", "waterline", "serviceSeams", "semanticTarget", "physicalCenter", "labelAnchor", "protected", "layouts", "copy"];
const SOURCE_KEYS = ["enabled", "path", "attemptId", "bytes", "sha256", "width", "height", "format", "color"];
const PROVENANCE_KEYS = ["schema", "path", "attemptId", "bytes", "sha256"];
const HISTORY_KEYS = ["foundation", "repair", "serviceSkin"];
const PROTECTED_KEYS = ["predecessor", "nextBoundary", "liveWater", "returnRoute", "suspendedLandmark", "crown", "witness"];
const LAYOUT_KEYS = Object.keys(FIRST_RUN_RESPONSIVE_LAYOUTS);
const COPY_KEYS = Object.keys(WATERLINE_LEDGER_COPY);
const finite = (value) => typeof value === "number" && Number.isFinite(value);
const sameKeys = (value, keys) => value != null && typeof value === "object" && !Array.isArray(value)
  && Object.keys(value).length === keys.length && keys.every((key) => Object.prototype.hasOwnProperty.call(value, key));
const rect = (value, width = 3840, height = 2160) => value != null
  && sameKeys(value, ["x", "y", "width", "height"])
  && [value.x, value.y, value.width, value.height].every(finite)
  && value.x >= 0 && value.y >= 0 && value.width > 0 && value.height > 0
  && value.x + value.width <= width && value.y + value.height <= height;
const point = (value, width = 3840, height = 2160) => sameKeys(value, ["x", "y"])
  && finite(value.x) && finite(value.y) && value.x >= 0 && value.y >= 0 && value.x <= width && value.y <= height;
const pointInRect = (value, area) => point(value) && rect(area)
  && value.x >= area.x && value.x <= area.x + area.width && value.y >= area.y && value.y <= area.y + area.height;
const polyline = (value) => Array.isArray(value) && value.length >= 2 && value.every((entry) => point(entry));
const boundsForPoints = (points) => {
  const xs = points.map(({ x }) => x); const ys = points.map(({ y }) => y);
  const x = Math.min(...xs); const y = Math.min(...ys);
  return { x, y, width: Math.max(...xs) - x || 1, height: Math.max(...ys) - y || 1 };
};
const intersectsRect = (points, area) => points.some((entry) => pointInRect(entry, area))
  || rectanglesOverlap(boundsForPoints(points), area);
const equalJson = (left, right) => JSON.stringify(left) === JSON.stringify(right);

function copyPass(copy) {
  return sameKeys(copy, COPY_KEYS) && COPY_KEYS.every((key) => typeof copy[key] === "string" && copy[key] === WATERLINE_LEDGER_COPY[key]);
}

function sourcePass(source, provenance) {
  return sameKeys(source, SOURCE_KEYS)
    && source.enabled === true
    && source.path === WATERLINE_LEDGER_PATH
    && /^H14-(?:[1-9]|[12][0-9]|3[0-2])$/.test(source.attemptId ?? "")
    && Number.isInteger(source.bytes) && source.bytes > 0 && source.bytes <= 30000000
    && /^[0-9a-f]{64}$/.test(source.sha256 ?? "")
    && source.width === 3840 && source.height === 2160
    && source.format === "png" && source.color === "opaque-srgb-8"
    && sameKeys(provenance, PROVENANCE_KEYS)
    && provenance.schema === "horizon.first-run.source-provenance.v1"
    && provenance.path === source.path && provenance.attemptId === source.attemptId
    && provenance.bytes === source.bytes && provenance.sha256 === source.sha256;
}

function geometryPass(registry) {
  if (!sameKeys(registry, ROOT_KEYS) || registry.schema !== WATERLINE_LEDGER_SCHEMA) return false;
  if (!sameKeys(registry.histories, HISTORY_KEYS) || !sameKeys(registry.protected, PROTECTED_KEYS)) return false;
  const { foundation, repair, serviceSkin } = registry.histories;
  if (![registry.relation, registry.dryApproach, foundation, repair, serviceSkin, registry.waterline, registry.semanticTarget].every((entry) => rect(entry))) return false;
  if (foundation === repair || foundation === serviceSkin || repair === serviceSkin || equalJson(foundation, repair) || equalJson(foundation, serviceSkin) || equalJson(repair, serviceSkin)) return false;
  if (!sameKeys(registry.depositionBand, ["bounds", "points"]) || !rect(registry.depositionBand.bounds) || !polyline(registry.depositionBand.points) || registry.depositionBand.points.length < 4) return false;
  if (!registry.depositionBand.points.every((entry) => pointInRect(entry, registry.depositionBand.bounds))) return false;
  if (![foundation, repair, serviceSkin].every((entry) => intersectsRect(registry.depositionBand.points, entry))) return false;
  const deltas = registry.depositionBand.points.slice(1).map((entry, index) => `${entry.x - registry.depositionBand.points[index].x}:${entry.y - registry.depositionBand.points[index].y}`);
  if (new Set(deltas).size < 2) return false;
  if (!Array.isArray(registry.serviceSeams) || registry.serviceSeams.length < 3 || !registry.serviceSeams.every(polyline)) return false;
  const seamIds = registry.serviceSeams.map((seam) => JSON.stringify(seam));
  if (new Set(seamIds).size !== seamIds.length || !registry.serviceSeams.every((seam) => seam.at(-1).y < seam[0].y)) return false;
  if (!point(registry.physicalCenter) || !pointInRect(registry.physicalCenter, registry.semanticTarget) || !pointInRect(registry.physicalCenter, registry.relation)) return false;
  if (!sameKeys(registry.labelAnchor, ["x", "y", "width", "height", "insetOuterCss", "insetTextCss", "focusSeparationCss"])) return false;
  const labelRect = { x: registry.labelAnchor.x, y: registry.labelAnchor.y, width: registry.labelAnchor.width, height: registry.labelAnchor.height };
  if (!rect(labelRect) || registry.labelAnchor.insetOuterCss < 3 || registry.labelAnchor.insetTextCss < 5 || registry.labelAnchor.focusSeparationCss < 8) return false;
  if (!PROTECTED_KEYS.every((key) => rect(registry.protected[key]))) return false;
  if (rectanglesOverlap(registry.semanticTarget, registry.protected.liveWater) || !rectanglesOverlap(registry.dryApproach, registry.relation)) return false;
  return true;
}

export function deriveWaterlineLedgerResponsiveEvidence(registry = WATERLINE_LEDGER_REGISTRY) {
  if (!geometryPass(registry)) return null;
  const essentialRects = [registry.dryApproach, ...Object.values(registry.histories), registry.depositionBand.bounds, registry.waterline, ...registry.serviceSeams.map(boundsForPoints), { x: registry.physicalCenter.x, y: registry.physicalCenter.y, width: 1, height: 1 }];
  const protectedRects = Object.values(registry.protected);
  const entries = Object.entries(FIRST_RUN_RESPONSIVE_LAYOUTS).map(([id, viewport]) => {
    const base = deriveResponsiveEvidence({ viewport, sourceWidth: 3840, sourceHeight: 2160, relation: registry.relation, semanticTarget: registry.semanticTarget, essentialRects, protectedRects, objectFit: "cover", objectPosition: "50% 50%" });
    if (!base) return [id, null];
    const label = projectSourceRect({ x: registry.labelAnchor.x, y: registry.labelAnchor.y, width: registry.labelAnchor.width, height: registry.labelAnchor.height }, base.geometry);
    const physical = projectSourceRect({ x: registry.physicalCenter.x, y: registry.physicalCenter.y, width: 1, height: 1 }, base.geometry);
    const labelVisible = label?.visible;
    const labelContained = Boolean(labelVisible && Math.abs(labelVisible.width - label.width) < 1e-6 && Math.abs(labelVisible.height - label.height) < 1e-6);
    const labelProtectedOverlap = protectedRects.map((entry) => projectSourceRect(entry, base.geometry)).filter((entry) => rectanglesOverlap(labelVisible, entry?.visible)).length;
    const physicalCenterInTarget = physical.centerX >= base.target.x && physical.centerX <= base.target.x + base.target.width && physical.centerY >= base.target.y && physical.centerY <= base.target.y + base.target.height;
    return [id, freeze({ ...base, label, labelContained, labelProtectedOverlap, physicalCenterInTarget })];
  });
  return freeze(Object.fromEntries(entries));
}

export function buildWaterlineLedgerLayoutRecords(registry) {
  const evidence = deriveWaterlineLedgerResponsiveEvidence(registry);
  if (!evidence) return null;
  return freeze(Object.fromEntries(Object.entries(evidence).map(([id, value]) => [id, {
    viewport: value.viewport,
    relationRetention: value.relation.retainedArea,
    essentialCentersVisible: value.essentialCentersVisible,
    target: value.target,
    physicalCenterInTarget: value.physicalCenterInTarget,
    protectedOverlap: value.protectedOverlap,
    labelContained: value.labelContained,
    labelProtectedOverlap: value.labelProtectedOverlap,
  }])));
}

function layoutsPass(registry) {
  if (!sameKeys(registry.layouts, LAYOUT_KEYS) || LAYOUT_KEYS.some((key) => registry.layouts[key] == null)) return false;
  const derived = buildWaterlineLedgerLayoutRecords(registry);
  return derived != null && equalJson(registry.layouts, derived) && Object.values(derived).every((value) => value.relationRetention >= .95
    && value.essentialCentersVisible === true && value.target.width >= 44 && value.target.height >= 44 && value.target.contained === true
    && value.physicalCenterInTarget === true && value.protectedOverlap === 0 && value.labelContained === true && value.labelProtectedOverlap === 0);
}

export function auditWaterlineLedgerRegistry(registry = WATERLINE_LEDGER_REGISTRY) {
  return freeze({
    source: sourcePass(registry?.source, registry?.provenance),
    geometry: geometryPass(registry),
    copy: copyPass(registry?.copy),
    layouts: layoutsPass(registry),
  });
}

function evidencePass(objectiveLedgerEvidence, remediationPlannerEvidence) {
  const objective = objectiveLedgerEvidence == null ? null : sanitizeObjectiveLedgerEvidence(objectiveLedgerEvidence);
  const planner = remediationPlannerEvidence == null ? null : sanitizeRemediationPlannerEvidence(remediationPlannerEvidence);
  if ((objectiveLedgerEvidence != null && objective == null) || (remediationPlannerEvidence != null && planner == null)) return null;
  if (planner != null && objective?.masteryStatus !== "mastered") return null;
  return { objective, planner };
}

export function isWaterlineLedgerLawful({ predecessorComplete, registry = WATERLINE_LEDGER_REGISTRY, decodedImage, objectiveLedgerEvidence = null, remediationPlannerEvidence = null } = {}) {
  return predecessorComplete === true && sourcePass(registry?.source, registry?.provenance) && geometryPass(registry) && copyPass(registry.copy)
    && layoutsPass(registry) && decodedImage?.complete === true && decodedImage.naturalWidth === 3840 && decodedImage.naturalHeight === 2160
    && evidencePass(objectiveLedgerEvidence, remediationPlannerEvidence) != null;
}

export function deriveWaterlineLedgerState({ returned = false, objectiveLedgerEvidence = null, remediationPlannerEvidence = null, ...guard } = {}) {
  if (!isWaterlineLedgerLawful({ ...guard, objectiveLedgerEvidence, remediationPlannerEvidence })) return freeze({ state: "hidden", lesson: null, presentation: "hidden" });
  const evidence = evidencePass(objectiveLedgerEvidence, remediationPlannerEvidence);
  let state = "available"; let lesson = "objective-ledger";
  if (evidence.objective?.masteryStatus === "mastered") {
    lesson = "remediation-planner";
    state = evidence.planner?.masteryStatus === "mastered" ? "complete" : evidence.planner?.masteryStatus === "remediation_required" ? "remediation_required" : "in_progress";
  } else if (evidence.objective != null) state = evidence.objective.masteryStatus === "remediation_required" ? "remediation_required" : "in_progress";
  return freeze({ state, lesson: state === "complete" ? null : lesson, presentation: returned ? "returned" : state });
}

export function deriveWaterlineLedgerSelector({ sceneId, pendingAdvance, presented, state } = {}) {
  return sceneId === "ruins" && pendingAdvance === true && presented === true && state?.state !== "hidden";
}

export function deriveWaterlineLedgerLauncherGuards({ nativeActive, sceneId, pendingAdvance, predecessorComplete, objectiveLedgerEvidence, remediationPlannerEvidence } = {}) {
  const objective = objectiveLedgerEvidence == null ? null : sanitizeObjectiveLedgerEvidence(objectiveLedgerEvidence);
  const planner = remediationPlannerEvidence == null ? null : sanitizeRemediationPlannerEvidence(remediationPlannerEvidence);
  const boundary = sceneId === "ruins" && pendingAdvance === true && predecessorComplete === true;
  return freeze({
    native: nativeActive === true,
    objectiveGeneric: nativeActive !== true && boundary && objective?.masteryStatus !== "mastered",
    plannerGeneric: nativeActive !== true && boundary && objective?.masteryStatus === "mastered" && planner?.masteryStatus !== "mastered",
  });
}

export function getWaterlineLedgerHotspot(registry = WATERLINE_LEDGER_REGISTRY, layout = "desktop") {
  const evidence = deriveWaterlineLedgerResponsiveEvidence(registry)?.[layout];
  if (!evidence) return null;
  const { target, world } = evidence;
  return freeze({ left: `${target.x / world.width * 100}%`, top: `${target.y / world.height * 100}%`, width: `max(${target.width / world.width * 100}%, 44px)`, height: `max(${target.height / world.height * 100}%, 44px)` });
}

export function getWaterlineLedgerCopyForState(state) {
  if (state?.presentation === "returned") return WATERLINE_LEDGER_COPY.returned;
  if (state?.state === "available") return WATERLINE_LEDGER_COPY.available;
  if (state?.lesson === "objective-ledger") return WATERLINE_LEDGER_COPY.objective_in_progress;
  if (state?.state === "complete") return WATERLINE_LEDGER_COPY.mastered;
  return WATERLINE_LEDGER_COPY.remediation_in_progress;
}
