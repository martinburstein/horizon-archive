import { sanitizeObjectiveLedgerEvidence } from "./objectiveLedgerExercise.js";
import { sanitizeRemediationPlannerEvidence } from "./remediationPlannerExercise.js";
import {
  FIRST_RUN_RESPONSIVE_LAYOUTS,
  deriveResponsiveEvidence,
  projectSourceRect,
  rectanglesOverlap,
} from "./responsiveImageProjection.js";

export const WATERLINE_LEDGER_SCHEMA = "horizon.waterline-ledger.v3";
export const WATERLINE_LEDGER_SOURCE_ID = "HA-IMG-H14-v1";
export const WATERLINE_LEDGER_PROVENANCE_SCHEMA = "horizon.image-toolkit.production-master.v1";
export const WATERLINE_LEDGER_PATH = "Visual Direction/Production Masters/2026-08-13-first-run-host14/host14-environment-master-v1.png";
export const WATERLINE_LEDGER_SOURCE_URL = WATERLINE_LEDGER_PATH;
export const WATERLINE_LEDGER_SOURCE_WIDTH = 1920;
export const WATERLINE_LEDGER_SOURCE_HEIGHT = 1080;

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
  alt: "A shallow, weathered alien construction lies embedded in a drained basin, its dark frame interlocked with pale ceramic forms and oxidized red layers.",
});

const freeze = (value) => {
  if (value && typeof value === "object" && !Object.isFrozen(value)) {
    Object.freeze(value);
    for (const child of Object.values(value)) freeze(child);
  }
  return value;
};

const nullSource = { enabled: false, path: null, sourceId: null, bytes: null, sha256: null, width: null, height: null, format: null, color: null };
const nullLayouts = { desktop: null, laptop: null, narrow: null, effective200: null, retained320x180: null, retained320x240: null };
const nullProtected = { predecessor: null, nextBoundary: null, liveWater: null, returnRoute: null, suspendedLandmark: null, crown: null, witness: null, narrationUi: null };

export const WATERLINE_LEDGER_GUIDE_CORE = freeze({
  canvas: { width: 1536, height: 1024 },
  core: { x: 0, y: 80, width: 1536, height: 864 },
  source: { width: WATERLINE_LEDGER_SOURCE_WIDTH, height: WATERLINE_LEDGER_SOURCE_HEIGHT },
  scale: 1.25,
});

export const WATERLINE_LEDGER_CONTROL_GEOMETRY = freeze({
  semanticTarget: { x: 375, y: 181.25, width: 1275, height: 668.75 },
  physicalCenter: { x: 960, y: 525 },
  labelAnchor: { x: 693.75, y: 25, width: 532.5, height: 112.5, insetOuterCss: 3, insetTextCss: 5, focusSeparationCss: 8 },
  protected: {
    predecessor: { x: 0, y: 712.5, width: 162.5, height: 367.5 },
    nextBoundary: { x: 1757.5, y: 275, width: 162.5, height: 325 },
    liveWater: { x: 1787.5, y: 631.25, width: 132.5, height: 448.75 },
    returnRoute: { x: 0, y: 275, width: 143.75, height: 312.5 },
    suspendedLandmark: { x: 1687.5, y: 0, width: 232.5, height: 212.5 },
    crown: { x: 1700, y: 337.5, width: 220, height: 212.5 },
    witness: { x: 0, y: 0, width: 220, height: 212.5 },
    narrationUi: { x: 650, y: 0, width: 620, height: 143.75 },
  },
});

const waterlineLedgerRegistryBase = {
  schema: WATERLINE_LEDGER_SCHEMA,
  source: {
    enabled: true,
    path: WATERLINE_LEDGER_PATH,
    sourceId: WATERLINE_LEDGER_SOURCE_ID,
    bytes: 3988028,
    sha256: "57669ea3496b98eab3cf710acc2f5d3ba3c2f2de47d47022357fde07d94e36c1",
    width: WATERLINE_LEDGER_SOURCE_WIDTH,
    height: WATERLINE_LEDGER_SOURCE_HEIGHT,
    format: "png",
    color: "opaque-srgb-8",
  },
  provenance: {
    schema: WATERLINE_LEDGER_PROVENANCE_SCHEMA,
    path: WATERLINE_LEDGER_PATH,
    sourceId: WATERLINE_LEDGER_SOURCE_ID,
    bytes: 3988028,
    sha256: "57669ea3496b98eab3cf710acc2f5d3ba3c2f2de47d47022357fde07d94e36c1",
  },
  visibleGeometry: {
    relation: { x: 112.5, y: 125, width: 1700, height: 762.5 },
    dryApproach: { x: 187.5, y: 725, width: 1550, height: 325 },
    histories: {
      foundation: { bounds: { x: 150, y: 175, width: 1612.5, height: 675 }, processEvidence: [{ x: 200, y: 250, width: 250, height: 250 }] },
      repair: { bounds: { x: 325, y: 212.5, width: 1012.5, height: 543.75 }, processEvidence: [{ x: 450, y: 300, width: 250, height: 250 }] },
      serviceSkin: { bounds: { x: 525, y: 187.5, width: 1112.5, height: 587.5 }, processEvidence: [{ x: 1100, y: 250, width: 250, height: 250 }] },
    },
    pairwiseContacts: {
      foundationRepair: [{ x: 312.5, y: 225, width: 275, height: 225 }, { x: 487.5, y: 575, width: 287.5, height: 187.5 }],
      foundationServiceSkin: [{ x: 1237.5, y: 175, width: 312.5, height: 237.5 }, { x: 1400, y: 562.5, width: 262.5, height: 212.5 }],
      repairServiceSkin: [{ x: 656.25, y: 256.25, width: 275, height: 212.5 }, { x: 925, y: 493.75, width: 300, height: 237.5 }],
    },
    depositionTrace: {
      bounds: { x: 250, y: 450, width: 1450, height: 175 },
      points: [{ x: 281.25, y: 568.75 }, { x: 537.5, y: 506.25 }, { x: 775, y: 543.75 }, { x: 987.5, y: 593.75 }, { x: 1225, y: 493.75 }, { x: 1487.5, y: 531.25 }, { x: 1656.25, y: 587.5 }],
      reactions: { foundation: { x: 281.25, y: 568.75 }, repair: { x: 775, y: 543.75 }, serviceSkin: { x: 1225, y: 493.75 } },
    },
    waterline: { x: 1650, y: 631.25, width: 270, height: 448.75 },
    serviceSeams: [
      { id: "seam-01", parent: null, points: [{ x: 525, y: 775 }, { x: 550, y: 575 }, { x: 512.5, y: 337.5 }, { x: 475, y: 131.25 }] },
      { id: "seam-02", parent: null, points: [{ x: 950, y: 775 }, { x: 975, y: 625 }, { x: 937.5, y: 437.5 }, { x: 987.5, y: 225 }] },
      { id: "seam-03", parent: null, points: [{ x: 1375, y: 775 }, { x: 1350, y: 600 }, { x: 1400, y: 425 }, { x: 1362.5, y: 175 }] },
      { id: "seam-02-branch", parent: "seam-02", points: [{ x: 975, y: 625 }, { x: 1125, y: 437.5 }, { x: 1225, y: 250 }] },
    ],
  },
  controlGeometry: WATERLINE_LEDGER_CONTROL_GEOMETRY,
  layouts: nullLayouts,
  copy: WATERLINE_LEDGER_COPY,
};

const ROOT_KEYS = ["schema", "source", "provenance", "visibleGeometry", "controlGeometry", "layouts", "copy"];
const SOURCE_KEYS = ["enabled", "path", "sourceId", "bytes", "sha256", "width", "height", "format", "color"];
const PROVENANCE_KEYS = ["schema", "path", "sourceId", "bytes", "sha256"];
const VISIBLE_KEYS = ["relation", "dryApproach", "histories", "pairwiseContacts", "depositionTrace", "waterline", "serviceSeams"];
const CONTROL_KEYS = ["semanticTarget", "physicalCenter", "labelAnchor", "protected"];
const HISTORY_KEYS = ["foundation", "repair", "serviceSkin"];
const HISTORY_VALUE_KEYS = ["bounds", "processEvidence"];
const CONTACT_KEYS = ["foundationRepair", "foundationServiceSkin", "repairServiceSkin"];
const TRACE_KEYS = ["bounds", "points", "reactions"];
const REACTION_KEYS = ["foundation", "repair", "serviceSkin"];
const SEAM_KEYS = ["id", "parent", "points"];
const PROTECTED_KEYS = ["predecessor", "nextBoundary", "liveWater", "returnRoute", "suspendedLandmark", "crown", "witness", "narrationUi"];
const LAYOUT_KEYS = Object.keys(FIRST_RUN_RESPONSIVE_LAYOUTS);
const COPY_KEYS = Object.keys(WATERLINE_LEDGER_COPY);
const finite = (value) => typeof value === "number" && Number.isFinite(value);
const sameKeys = (value, keys) => value != null && typeof value === "object" && !Array.isArray(value)
  && Object.keys(value).length === keys.length && keys.every((key) => Object.prototype.hasOwnProperty.call(value, key));
const rect = (value, width = WATERLINE_LEDGER_SOURCE_WIDTH, height = WATERLINE_LEDGER_SOURCE_HEIGHT) => value != null
  && sameKeys(value, ["x", "y", "width", "height"])
  && [value.x, value.y, value.width, value.height].every(finite)
  && value.x >= 0 && value.y >= 0 && value.width > 0 && value.height > 0
  && value.x + value.width <= width && value.y + value.height <= height;
const point = (value, width = WATERLINE_LEDGER_SOURCE_WIDTH, height = WATERLINE_LEDGER_SOURCE_HEIGHT) => sameKeys(value, ["x", "y"])
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
const distinctObjects = (values) => new Set(values).size === values.length && new Set(values.map((value) => JSON.stringify(value))).size === values.length;
const pointOnPolyline = (value, points) => points.some((entry) => entry.x === value.x && entry.y === value.y);
const hasSharedObjectAlias = (root) => {
  const seen = new WeakSet();
  const visit = (value) => {
    if (value == null || typeof value !== "object") return false;
    if (seen.has(value)) return true;
    seen.add(value);
    return Object.values(value).some(visit);
  };
  return visit(root);
};

export function mapWaterlineLedgerGuidePoint(value) {
  const x = Array.isArray(value) && value.length === 2 ? value[0] : value?.x;
  const y = Array.isArray(value) && value.length === 2 ? value[1] : value?.y;
  if (!(Array.isArray(value) ? value.length === 2 : sameKeys(value, ["x", "y"])) || !finite(x) || !finite(y)
    || x < 0 || x > 1536 || y < 80 || y > 944) return null;
  return freeze({ x: x * 1.25, y: (y - 80) * 1.25 });
}

export function mapWaterlineLedgerGuideRect(value) {
  if (!sameKeys(value, ["x", "y", "width", "height"]) || ![value.x, value.y, value.width, value.height].every(finite)
    || value.width <= 0 || value.height <= 0) return null;
  const left = mapWaterlineLedgerGuidePoint({ x: value.x, y: value.y });
  const right = mapWaterlineLedgerGuidePoint({ x: value.x + value.width, y: value.y + value.height });
  return left && right ? freeze({ x: left.x, y: left.y, width: right.x - left.x, height: right.y - left.y }) : null;
}

export function mapWaterlineLedgerGuidePolyline(value) {
  if (!Array.isArray(value) || value.length < 2) return null;
  const mapped = value.map(mapWaterlineLedgerGuidePoint);
  return mapped.every(Boolean) ? freeze(mapped) : null;
}

function copyPass(copy) {
  return sameKeys(copy, COPY_KEYS) && COPY_KEYS.every((key) => typeof copy[key] === "string" && copy[key] === WATERLINE_LEDGER_COPY[key]);
}

function sourcePass(source, provenance) {
  return sameKeys(source, SOURCE_KEYS)
    && source.enabled === true
    && source.path === WATERLINE_LEDGER_PATH
    && source.sourceId === WATERLINE_LEDGER_SOURCE_ID
    && Number.isInteger(source.bytes) && source.bytes > 0 && source.bytes <= 30000000
    && /^[0-9a-f]{64}$/.test(source.sha256 ?? "")
    && source.width === WATERLINE_LEDGER_SOURCE_WIDTH && source.height === WATERLINE_LEDGER_SOURCE_HEIGHT
    && source.format === "png" && source.color === "opaque-srgb-8"
    && sameKeys(provenance, PROVENANCE_KEYS)
    && provenance.schema === WATERLINE_LEDGER_PROVENANCE_SCHEMA
    && provenance.path === source.path && provenance.sourceId === source.sourceId
    && provenance.bytes === source.bytes && provenance.sha256 === source.sha256;
}

function geometryPass(registry) {
  const fail = () => false;
  if (!sameKeys(registry, ROOT_KEYS) || registry.schema !== WATERLINE_LEDGER_SCHEMA) return fail("root-schema");
  if (!sameKeys(registry.visibleGeometry, VISIBLE_KEYS) || !sameKeys(registry.controlGeometry, CONTROL_KEYS)) return fail("geometry-keys");
  const visible = registry.visibleGeometry;
  const control = registry.controlGeometry;
  if (hasSharedObjectAlias({ visible, control })) return fail("geometry-object-alias");
  if (!sameKeys(visible.histories, HISTORY_KEYS) || !sameKeys(visible.pairwiseContacts, CONTACT_KEYS)
    || !sameKeys(control.protected, PROTECTED_KEYS) || !equalJson(control, WATERLINE_LEDGER_CONTROL_GEOMETRY)) return fail("control-identity");
  const histories = HISTORY_KEYS.map((key) => visible.histories[key]);
  if (!histories.every((entry) => sameKeys(entry, HISTORY_VALUE_KEYS) && rect(entry.bounds)
    && Array.isArray(entry.processEvidence) && entry.processEvidence.length > 0 && entry.processEvidence.every((area) => rect(area) && rectanglesOverlap(area, entry.bounds)))) return fail("history-evidence");
  if (!distinctObjects(histories) || !distinctObjects(histories.map((entry) => entry.bounds))) return fail("history-alias");
  if (![visible.relation, visible.dryApproach, visible.waterline, control.semanticTarget].every((entry) => rect(entry))) return fail("primary-rects");
  const contacts = Object.values(visible.pairwiseContacts).flat();
  if (!CONTACT_KEYS.every((key) => Array.isArray(visible.pairwiseContacts[key]) && visible.pairwiseContacts[key].length >= 2
    && visible.pairwiseContacts[key].every((area) => rect(area))) || !distinctObjects(contacts)) return fail("contact-shape-alias");
  const pairs = { foundationRepair: ["foundation", "repair"], foundationServiceSkin: ["foundation", "serviceSkin"], repairServiceSkin: ["repair", "serviceSkin"] };
  if (!CONTACT_KEYS.every((key) => visible.pairwiseContacts[key].every((area) => pairs[key].every((history) => rectanglesOverlap(area, visible.histories[history].bounds))))) return fail("contact-process");
  if (!sameKeys(visible.depositionTrace, TRACE_KEYS) || !rect(visible.depositionTrace.bounds)
    || !polyline(visible.depositionTrace.points) || visible.depositionTrace.points.length < 4
    || !sameKeys(visible.depositionTrace.reactions, REACTION_KEYS)) return fail("trace-shape");
  if (!visible.depositionTrace.points.every((entry) => pointInRect(entry, visible.depositionTrace.bounds))) return fail("trace-bounds");
  if (!HISTORY_KEYS.every((key) => intersectsRect(visible.depositionTrace.points, visible.histories[key].bounds))) return fail("trace-process");
  if (!HISTORY_KEYS.every((key) => pointOnPolyline(visible.depositionTrace.reactions[key], visible.depositionTrace.points)
    && pointInRect(visible.depositionTrace.reactions[key], visible.histories[key].bounds))) return fail("trace-reaction");
  const deltas = visible.depositionTrace.points.slice(1).map((entry, index) => `${entry.x - visible.depositionTrace.points[index].x}:${entry.y - visible.depositionTrace.points[index].y}`);
  if (new Set(deltas).size < 2) return fail("trace-regular");
  if (!Array.isArray(visible.serviceSeams) || visible.serviceSeams.length < 4
    || !visible.serviceSeams.every((seam) => sameKeys(seam, SEAM_KEYS) && typeof seam.id === "string" && seam.id.length > 0
      && (seam.parent === null || typeof seam.parent === "string") && polyline(seam.points))) return fail("seam-shape");
  const ids = visible.serviceSeams.map((seam) => seam.id);
  if (new Set(ids).size !== ids.length || !distinctObjects(visible.serviceSeams.map((seam) => seam.points))) return fail("seam-alias");
  const mains = visible.serviceSeams.filter((seam) => seam.parent === null);
  const branches = visible.serviceSeams.filter((seam) => seam.parent !== null);
  if (mains.length < 3 || !mains.every((seam) => seam.points.at(-1).y < seam.points[0].y)
    || branches.length < 1 || !branches.every((branch) => {
      const parent = visible.serviceSeams.find((seam) => seam.id === branch.parent);
      return parent && pointOnPolyline(branch.points[0], parent.points);
    })) return fail("seam-branch");
  if (!point(control.physicalCenter) || !pointInRect(control.physicalCenter, control.semanticTarget) || !pointInRect(control.physicalCenter, visible.relation)) return fail("physical-center");
  if (!sameKeys(control.labelAnchor, ["x", "y", "width", "height", "insetOuterCss", "insetTextCss", "focusSeparationCss"])) return fail("label-shape");
  const labelRect = { x: control.labelAnchor.x, y: control.labelAnchor.y, width: control.labelAnchor.width, height: control.labelAnchor.height };
  if (!rect(labelRect) || control.labelAnchor.insetOuterCss < 3 || control.labelAnchor.insetTextCss < 5 || control.labelAnchor.focusSeparationCss < 8) return fail("label-insets");
  if (!PROTECTED_KEYS.every((key) => rect(control.protected[key]))) return fail("protected-shape");
  if (PROTECTED_KEYS.some((key) => rectanglesOverlap(control.semanticTarget, control.protected[key]))
    || !rectanglesOverlap(visible.dryApproach, visible.relation)
    || !rectanglesOverlap(labelRect, control.protected.narrationUi)
    || PROTECTED_KEYS.filter((key) => key !== "narrationUi").some((key) => rectanglesOverlap(labelRect, control.protected[key]))) return fail("protected-overlap");
  return true;
}

export function deriveWaterlineLedgerResponsiveEvidence(registry = WATERLINE_LEDGER_REGISTRY) {
  if (!geometryPass(registry)) return null;
  const visible = registry.visibleGeometry;
  const control = registry.controlGeometry;
  const essentialRects = [visible.dryApproach, ...Object.values(visible.histories).flatMap((entry) => [entry.bounds, ...entry.processEvidence]),
    ...Object.values(visible.pairwiseContacts).flat(), visible.depositionTrace.bounds, visible.waterline,
    ...visible.serviceSeams.map((seam) => boundsForPoints(seam.points)), { x: control.physicalCenter.x, y: control.physicalCenter.y, width: 1, height: 1 }];
  const protectedRects = Object.values(control.protected);
  const entries = Object.entries(FIRST_RUN_RESPONSIVE_LAYOUTS).map(([id, viewport]) => {
    const base = deriveResponsiveEvidence({ viewport, sourceWidth: WATERLINE_LEDGER_SOURCE_WIDTH, sourceHeight: WATERLINE_LEDGER_SOURCE_HEIGHT, relation: visible.relation, semanticTarget: control.semanticTarget, essentialRects, protectedRects, objectFit: "cover", objectPosition: "50% 50%" });
    if (!base) return [id, null];
    const label = projectSourceRect({ x: control.labelAnchor.x, y: control.labelAnchor.y, width: control.labelAnchor.width, height: control.labelAnchor.height }, base.geometry);
    const physical = projectSourceRect({ x: control.physicalCenter.x, y: control.physicalCenter.y, width: 1, height: 1 }, base.geometry);
    const labelVisible = label?.visible;
    const labelContained = Boolean(labelVisible && Math.abs(labelVisible.width - label.width) < 1e-6 && Math.abs(labelVisible.height - label.height) < 1e-6);
    const labelProtectedOverlap = PROTECTED_KEYS.filter((key) => key !== "narrationUi")
      .map((key) => projectSourceRect(control.protected[key], base.geometry)).filter((entry) => rectanglesOverlap(labelVisible, entry?.visible)).length;
    const labelInNarrationUi = rectanglesOverlap(labelVisible, projectSourceRect(control.protected.narrationUi, base.geometry)?.visible);
    const physicalCenterInTarget = physical.centerX >= base.target.x && physical.centerX <= base.target.x + base.target.width && physical.centerY >= base.target.y && physical.centerY <= base.target.y + base.target.height;
    return [id, freeze({ ...base, label, labelContained, labelProtectedOverlap, labelInNarrationUi, physicalCenterInTarget })];
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
    labelInNarrationUi: value.labelInNarrationUi,
  }])));
}

function layoutsPass(registry) {
  if (!sameKeys(registry.layouts, LAYOUT_KEYS) || LAYOUT_KEYS.some((key) => registry.layouts[key] == null)) return false;
  const derived = buildWaterlineLedgerLayoutRecords(registry);
  return derived != null && equalJson(registry.layouts, derived) && Object.values(derived).every((value) => value.relationRetention >= .95
    && value.essentialCentersVisible === true && value.target.width >= 44 && value.target.height >= 44 && value.target.contained === true
    && value.physicalCenterInTarget === true && value.protectedOverlap === 0 && value.labelContained === true
    && value.labelProtectedOverlap === 0 && value.labelInNarrationUi === true);
}

export function auditWaterlineLedgerRegistry(registry = WATERLINE_LEDGER_REGISTRY) {
  const geometry = geometryPass(registry);
  return freeze({
    source: sourcePass(registry?.source, registry?.provenance),
    geometry,
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
    && layoutsPass(registry) && decodedImage?.complete === true && decodedImage.naturalWidth === WATERLINE_LEDGER_SOURCE_WIDTH && decodedImage.naturalHeight === WATERLINE_LEDGER_SOURCE_HEIGHT
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

export const WATERLINE_LEDGER_REGISTRY = freeze({
  ...waterlineLedgerRegistryBase,
  layouts: buildWaterlineLedgerLayoutRecords(waterlineLedgerRegistryBase),
});
