import { sanitizeCapstoneReadinessEvidence } from "./capstoneReadinessExercise.js";
import { sanitizeFinalConfidenceEvidence } from "./finalConfidenceExercise.js";
import { sanitizeMixedSimulationEvidence } from "./mixedSimulationExercise.js";
import { FIRST_RUN_RESPONSIVE_LAYOUTS, deriveResponsiveEvidence } from "./responsiveImageProjection.js";

export const CROWN_COUNTERPOISE_SCHEMA = "horizon.crown-counterpoise.v1";
export const CROWN_COUNTERPOISE_SOURCE_ID = "HA-IMG-H15-v2";
export const CROWN_COUNTERPOISE_PROVENANCE_SCHEMA = "horizon.image-toolkit.production-master.v1";
export const CROWN_COUNTERPOISE_PATH = "Visual Direction/Production Masters/2026-08-13-first-run-host15/host15-environment-master-v2.png";
export const CROWN_COUNTERPOISE_WIDTH = 1920;
export const CROWN_COUNTERPOISE_HEIGHT = 1080;

export const CROWN_COUNTERPOISE_COPY = Object.freeze({
  name: "Crown Counterpoise",
  alt: "A monumental incomplete frame hangs silently above a drowned basin while a separate grounded alien coupling waits on a reachable dry shelf below.",
  available: "The grounded counterpoise is reachable beneath the silent frame. Water and mist continue without acknowledgement.",
  look: "The grounded coupling, dry shelf, overhead frame, water, and mist remain physically unchanged.",
  talk: "No response follows. The incomplete frame remains overhead while the grounded counterpoise carries the same local load.",
  capstone: "The counterpoise remains unchanged while capstone readiness evidence is assembled.",
  simulation: "The same physical relation remains while the mixed simulation is in progress.",
  optional: "The outflow remains open. Optional final confidence practice is available without blocking departure.",
  complete: "The evidence is complete. The Crown does not move or acknowledge it.",
  next: "The existing dry phase boundary continues into the outflow behind the counterpoise.",
});

const freeze = (value) => {
  if (value && typeof value === "object" && !Object.isFrozen(value)) {
    Object.freeze(value);
    for (const child of Object.values(value)) freeze(child);
  }
  return value;
};

const source = {
  enabled: true,
  path: CROWN_COUNTERPOISE_PATH,
  sourceId: CROWN_COUNTERPOISE_SOURCE_ID,
  bytes: 2460258,
  sha256: "fc7c8104eca3f365a03d481a964d2bbf1cf0f37b7578e204b3914479e8642e88",
  width: CROWN_COUNTERPOISE_WIDTH,
  height: CROWN_COUNTERPOISE_HEIGHT,
  format: "png",
  color: "opaque-srgb-8",
};

const provenance = {
  schema: CROWN_COUNTERPOISE_PROVENANCE_SCHEMA,
  path: source.path,
  sourceId: source.sourceId,
  bytes: source.bytes,
  sha256: source.sha256,
};

const geometry = {
  relation: { x: 300, y: 160, width: 1320, height: 760 },
  semanticTarget: { x: 620, y: 360, width: 680, height: 360 },
  dryApproach: { x: 360, y: 690, width: 1200, height: 330 },
  overheadFrame: { x: 430, y: 70, width: 1060, height: 430 },
  recededWater: { x: 0, y: 500, width: 420, height: 430 },
};

function buildLayouts(registry) {
  return Object.fromEntries(Object.entries(FIRST_RUN_RESPONSIVE_LAYOUTS).map(([id, viewport]) => {
    const evidence = deriveResponsiveEvidence({
      viewport,
      sourceWidth: CROWN_COUNTERPOISE_WIDTH,
      sourceHeight: CROWN_COUNTERPOISE_HEIGHT,
      relation: registry.geometry.relation,
      semanticTarget: registry.geometry.semanticTarget,
      essentialRects: [registry.geometry.dryApproach, registry.geometry.overheadFrame],
      objectFit: "cover",
      objectPosition: "50% 50%",
    });
    return [id, evidence && {
      viewport: evidence.viewport,
      relationRetention: evidence.relation.retainedArea,
      essentialCentersVisible: evidence.essentialCentersVisible,
      target: evidence.target,
    }];
  }));
}

const base = { schema: CROWN_COUNTERPOISE_SCHEMA, source, provenance, geometry, layouts: null, copy: CROWN_COUNTERPOISE_COPY };
export const CROWN_COUNTERPOISE_REGISTRY = freeze({ ...base, layouts: buildLayouts(base) });

function exactSource(registry) {
  const candidate = registry?.source;
  return candidate?.enabled === true
    && candidate.path === CROWN_COUNTERPOISE_PATH
    && candidate.sourceId === CROWN_COUNTERPOISE_SOURCE_ID
    && candidate.bytes === source.bytes
    && candidate.sha256 === source.sha256
    && candidate.width === CROWN_COUNTERPOISE_WIDTH
    && candidate.height === CROWN_COUNTERPOISE_HEIGHT
    && candidate.format === "png"
    && candidate.color === "opaque-srgb-8"
    && registry?.provenance?.schema === CROWN_COUNTERPOISE_PROVENANCE_SCHEMA
    && registry.provenance.path === candidate.path
    && registry.provenance.sourceId === candidate.sourceId
    && registry.provenance.bytes === candidate.bytes
    && registry.provenance.sha256 === candidate.sha256;
}

function exactLayouts(registry) {
  const expected = buildLayouts(registry);
  return JSON.stringify(registry?.layouts) === JSON.stringify(expected)
    && Object.values(expected).every((entry) => entry
      && entry.relationRetention >= 0.95
      && entry.essentialCentersVisible === true
      && entry.target.width >= 44
      && entry.target.height >= 44
      && entry.target.contained === true);
}

export function auditCrownCounterpoiseRegistry(registry = CROWN_COUNTERPOISE_REGISTRY) {
  return freeze({ source: exactSource(registry), layouts: exactLayouts(registry), copy: registry?.copy === CROWN_COUNTERPOISE_COPY });
}

export function deriveCrownCounterpoiseState({ predecessorComplete, registry = CROWN_COUNTERPOISE_REGISTRY, decodedImage, capstoneEvidence = null, mixedEvidence = null, finalEvidence = null } = {}) {
  const audit = auditCrownCounterpoiseRegistry(registry);
  if (predecessorComplete !== true || !Object.values(audit).every(Boolean)
    || decodedImage?.complete !== true || decodedImage.naturalWidth !== CROWN_COUNTERPOISE_WIDTH || decodedImage.naturalHeight !== CROWN_COUNTERPOISE_HEIGHT) {
    return freeze({ state: "hidden", lesson: null });
  }
  const capstone = capstoneEvidence == null ? null : sanitizeCapstoneReadinessEvidence(capstoneEvidence);
  const mixed = mixedEvidence == null ? null : sanitizeMixedSimulationEvidence(mixedEvidence);
  const final = finalEvidence == null ? null : sanitizeFinalConfidenceEvidence(finalEvidence);
  if ((capstoneEvidence != null && capstone == null) || (mixedEvidence != null && mixed == null) || (finalEvidence != null && final == null)) return freeze({ state: "hidden", lesson: null });
  return deriveCrownCounterpoiseLesson({ capstone, mixed, final });
}

export function deriveCrownCounterpoiseLesson({ capstone = null, mixed = null, final = null } = {}) {
  if (capstone?.masteryStatus !== "mastered") return freeze({ state: capstone?.masteryStatus === "remediation_required" ? "remediation_required" : capstone ? "in_progress" : "available", lesson: "capstone-readiness" });
  if (mixed?.masteryStatus !== "mastered") return freeze({ state: mixed?.masteryStatus === "remediation_required" ? "remediation_required" : "in_progress", lesson: "mixed-simulation" });
  if (final?.masteryStatus !== "mastered") return freeze({ state: "optional", lesson: "final-confidence" });
  return freeze({ state: "complete", lesson: null });
}

export function deriveCrownCounterpoiseSelector({ sceneId, pendingAdvance, state } = {}) {
  return sceneId === "ruins" && pendingAdvance === true && state?.state !== "hidden";
}

export function deriveCrownCounterpoiseLauncherGuards({ nativeActive, state } = {}) {
  return freeze({
    capstone: nativeActive !== true && state?.lesson === "capstone-readiness",
    mixed: nativeActive !== true && state?.lesson === "mixed-simulation",
    final: nativeActive !== true && state?.lesson === "final-confidence",
  });
}

export function getCrownCounterpoiseHotspot(registry = CROWN_COUNTERPOISE_REGISTRY) {
  if (!Object.values(auditCrownCounterpoiseRegistry(registry)).every(Boolean)) return null;
  const target = registry.geometry.semanticTarget;
  return freeze({
    left: `${target.x / CROWN_COUNTERPOISE_WIDTH * 100}%`,
    top: `${target.y / CROWN_COUNTERPOISE_HEIGHT * 100}%`,
    width: `max(${target.width / CROWN_COUNTERPOISE_WIDTH * 100}%, 44px)`,
    height: `max(${target.height / CROWN_COUNTERPOISE_HEIGHT * 100}%, 44px)`,
  });
}

export function getCrownCounterpoiseCopyForState(state) {
  if (state?.state === "available") return CROWN_COUNTERPOISE_COPY.available;
  if (state?.lesson === "capstone-readiness") return CROWN_COUNTERPOISE_COPY.capstone;
  if (state?.lesson === "mixed-simulation") return CROWN_COUNTERPOISE_COPY.simulation;
  if (state?.lesson === "final-confidence") return CROWN_COUNTERPOISE_COPY.optional;
  return CROWN_COUNTERPOISE_COPY.complete;
}
