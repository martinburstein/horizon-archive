import { FIRST_RUN_RESPONSIVE_LAYOUTS, deriveResponsiveEvidence } from "./responsiveImageProjection.js";

export const WITNESS_SPINE_SCHEMA = "horizon.witness-spine.v1";
export const WITNESS_SPINE_SOURCE_ID = "HA-IMG-H16-v1";
export const WITNESS_SPINE_PROVENANCE_SCHEMA = "horizon.image-toolkit.production-master.v1";
export const WITNESS_SPINE_PATH = "Visual Direction/Production Masters/2026-08-13-first-run-host16/host16-environment-master-v1.png";
export const WITNESS_SPINE_WIDTH = 1920;
export const WITNESS_SPINE_HEIGHT = 1080;

export const WITNESS_SPINE_COPY = Object.freeze({
  name: "Witness Spine",
  fallenName: "fallen assembly",
  alt: "A silent fallen alien assembly rests on the right of a damp corridor while a separate three-aperture coupling stands beside the open route on the left.",
  available: "The grounded three-aperture coupling remains separate from the fallen assembly. The walking volume continues into violet mist.",
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
  path: WITNESS_SPINE_PATH,
  sourceId: WITNESS_SPINE_SOURCE_ID,
  bytes: 3293498,
  sha256: "b07b2a6602eb23e3742212ba84ca84d8e3377bb24cdacd95e8e20f4676ef9c2e",
  width: WITNESS_SPINE_WIDTH,
  height: WITNESS_SPINE_HEIGHT,
  format: "png",
  color: "opaque-srgb-8",
};

const provenance = {
  schema: WITNESS_SPINE_PROVENANCE_SCHEMA,
  path: source.path,
  sourceId: source.sourceId,
  bytes: source.bytes,
  sha256: source.sha256,
};

const geometry = {
  relation: { x: 260, y: 470, width: 100, height: 160 },
  semanticTarget: { x: 150, y: 350, width: 330, height: 450 },
  fallenAssembly: { x: 760, y: 150, width: 1120, height: 720 },
  openRoute: { x: 420, y: 90, width: 620, height: 830 },
  separationGap: { x: 480, y: 250, width: 260, height: 600 },
};

function buildLayouts(registry) {
  return Object.fromEntries(Object.entries(FIRST_RUN_RESPONSIVE_LAYOUTS).map(([id, viewport]) => {
    const evidence = deriveResponsiveEvidence({
      viewport,
      sourceWidth: WITNESS_SPINE_WIDTH,
      sourceHeight: WITNESS_SPINE_HEIGHT,
      relation: registry.geometry.relation,
      semanticTarget: registry.geometry.semanticTarget,
      essentialRects: [registry.geometry.fallenAssembly, registry.geometry.openRoute],
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

const base = { schema: WITNESS_SPINE_SCHEMA, source, provenance, geometry, layouts: null, copy: WITNESS_SPINE_COPY };
export const WITNESS_SPINE_REGISTRY = freeze({ ...base, layouts: buildLayouts(base) });

function exactSource(registry) {
  const candidate = registry?.source;
  return candidate?.enabled === true
    && candidate.path === WITNESS_SPINE_PATH
    && candidate.sourceId === WITNESS_SPINE_SOURCE_ID
    && candidate.bytes === source.bytes
    && candidate.sha256 === source.sha256
    && candidate.width === WITNESS_SPINE_WIDTH
    && candidate.height === WITNESS_SPINE_HEIGHT
    && candidate.format === "png"
    && candidate.color === "opaque-srgb-8"
    && registry?.provenance?.schema === WITNESS_SPINE_PROVENANCE_SCHEMA
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

export function auditWitnessSpineRegistry(registry = WITNESS_SPINE_REGISTRY) {
  return freeze({ source: exactSource(registry), layouts: exactLayouts(registry), copy: registry?.copy === WITNESS_SPINE_COPY });
}

export function deriveWitnessSpineState({ sceneId, completed = false, registry = WITNESS_SPINE_REGISTRY, decodedImage } = {}) {
  const audit = auditWitnessSpineRegistry(registry);
  if (sceneId !== "automaton" || !Object.values(audit).every(Boolean)
    || decodedImage?.complete !== true || decodedImage.naturalWidth !== WITNESS_SPINE_WIDTH || decodedImage.naturalHeight !== WITNESS_SPINE_HEIGHT) {
    return "hidden";
  }
  return completed === true ? "complete" : "available";
}

function rectToHotspot(rect, narrow) {
  return freeze({
    left: `${rect.x / WITNESS_SPINE_WIDTH * 100}%`,
    top: `${rect.y / WITNESS_SPINE_HEIGHT * 100}%`,
    width: `max(${rect.width / WITNESS_SPINE_WIDTH * 100}%, 44px)`,
    height: `max(${rect.height / WITNESS_SPINE_HEIGHT * 100}%, 44px)`,
    narrow,
  });
}

export function getWitnessSpineHotspots(registry = WITNESS_SPINE_REGISTRY) {
  if (!Object.values(auditWitnessSpineRegistry(registry)).every(Boolean)) return null;
  return freeze({
    primary: rectToHotspot(registry.geometry.semanticTarget, { left: "0%", top: "42%", width: "30%", height: "44%" }),
    fallen: rectToHotspot(registry.geometry.fallenAssembly, { left: "46%", top: "17%", width: "54%", height: "66%" }),
  });
}
