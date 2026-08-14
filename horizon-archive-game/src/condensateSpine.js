import { FIRST_RUN_RESPONSIVE_LAYOUTS, deriveResponsiveEvidence } from "./responsiveImageProjection.js";

export const CONDENSATE_SPINE_SCHEMA = "horizon.condensate-spine.v1";
export const CONDENSATE_SPINE_SOURCE_ID = "HA-IMG-H17-v1";
export const CONDENSATE_SPINE_PROVENANCE_SCHEMA = "horizon.image-toolkit.production-master.v1";
export const CONDENSATE_SPINE_PATH = "Visual Direction/Production Masters/2026-08-13-first-run-host17/host17-environment-master-v1.png";
export const CONDENSATE_SPINE_WIDTH = 1920;
export const CONDENSATE_SPINE_HEIGHT = 1080;
export const CIVIC_SHADOW_PATH = "Visual Direction/Production Masters/2026-08-14-first-run-host18/host18-environment-master-v1.png";

export const CONDENSATE_SPINE_COPY = Object.freeze({
  name: "Condensate Spine",
  alt: "An already-lit alien civic bridge crosses a geothermal vault beyond a small oblique coupling embedded beside a dry condensation route.",
  available: "The ordinary coupling remains open to ambient heat, air, and material circulation. The bridge was already lit.",
});

export const CIVIC_SHADOW_COPY = Object.freeze({
  name: "Civic Shadow Theater",
  alt: "Abstract civic light crosses steam and an angled mineral membrane beside a small service throat and an already-lit onward bridge.",
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
  path: CONDENSATE_SPINE_PATH,
  sourceId: CONDENSATE_SPINE_SOURCE_ID,
  bytes: 3514517,
  sha256: "3b08b8309ed7b3d0487038cfa14b0fe8a0372945060b82da38d609a8e43966fa",
  width: CONDENSATE_SPINE_WIDTH,
  height: CONDENSATE_SPINE_HEIGHT,
  format: "png",
  color: "opaque-srgb-8",
};

const provenance = {
  schema: CONDENSATE_SPINE_PROVENANCE_SCHEMA,
  path: source.path,
  sourceId: source.sourceId,
  bytes: source.bytes,
  sha256: source.sha256,
};

const geometry = {
  relation: { x: 120, y: 945, width: 250, height: 100 },
  semanticTarget: { x: 75, y: 930, width: 360, height: 150 },
  bridge: { x: 1140, y: 495, width: 740, height: 320 },
  operatingCycles: { x: 850, y: 500, width: 600, height: 460 },
  dryEdge: { x: 0, y: 850, width: 480, height: 230 },
};

function buildLayouts(registry) {
  return Object.fromEntries(Object.entries(FIRST_RUN_RESPONSIVE_LAYOUTS).map(([id, viewport]) => {
    const evidence = deriveResponsiveEvidence({
      viewport,
      sourceWidth: CONDENSATE_SPINE_WIDTH,
      sourceHeight: CONDENSATE_SPINE_HEIGHT,
      relation: registry.geometry.relation,
      semanticTarget: registry.geometry.semanticTarget,
      essentialRects: [registry.geometry.bridge, registry.geometry.operatingCycles, registry.geometry.dryEdge],
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

const base = { schema: CONDENSATE_SPINE_SCHEMA, source, provenance, geometry, layouts: null, copy: CONDENSATE_SPINE_COPY };
export const CONDENSATE_SPINE_REGISTRY = freeze({ ...base, layouts: buildLayouts(base) });

const civicSource = {
  enabled: true,
  path: CIVIC_SHADOW_PATH,
  sourceId: "HA-IMG-H18-v1",
  bytes: 3413275,
  sha256: "763415d5717d8fd03d89bcaa2a335685f2cd99e9a1753030e440db499ba9d0d5",
  width: CONDENSATE_SPINE_WIDTH,
  height: CONDENSATE_SPINE_HEIGHT,
  format: "png",
  color: "opaque-srgb-8",
};
const civicGeometry = {
  relation: { x: 40, y: 780, width: 150, height: 220 },
  semanticTarget: { x: 40, y: 780, width: 150, height: 220 },
  bridge: { x: 1350, y: 650, width: 530, height: 320 },
  phenomenon: { x: 550, y: 280, width: 550, height: 700 },
  quietMargin: { x: 70, y: 760, width: 480, height: 240 },
  operatingCycles: { x: 550, y: 280, width: 550, height: 700 },
  dryEdge: { x: 70, y: 760, width: 480, height: 240 },
};
const civicBase = {
  schema: "horizon.civic-shadow-theater.v1",
  source: civicSource,
  provenance: { schema: CONDENSATE_SPINE_PROVENANCE_SCHEMA, path: civicSource.path, sourceId: civicSource.sourceId, bytes: civicSource.bytes, sha256: civicSource.sha256 },
  geometry: civicGeometry,
  layouts: null,
  copy: CIVIC_SHADOW_COPY,
};
export const CIVIC_SHADOW_REGISTRY = freeze({ ...civicBase, layouts: buildLayouts(civicBase) });

function exactSource(registry) {
  const candidate = registry?.source;
  return candidate?.enabled === true
    && candidate.path === CONDENSATE_SPINE_PATH
    && candidate.sourceId === CONDENSATE_SPINE_SOURCE_ID
    && candidate.bytes === source.bytes
    && candidate.sha256 === source.sha256
    && candidate.width === CONDENSATE_SPINE_WIDTH
    && candidate.height === CONDENSATE_SPINE_HEIGHT
    && candidate.format === "png"
    && candidate.color === "opaque-srgb-8"
    && registry?.provenance?.schema === CONDENSATE_SPINE_PROVENANCE_SCHEMA
    && registry.provenance.path === candidate.path
    && registry.provenance.sourceId === candidate.sourceId
    && registry.provenance.bytes === candidate.bytes
    && registry.provenance.sha256 === candidate.sha256;
}

function exactCivicSource(registry) {
  const candidate = registry?.source;
  return candidate?.enabled === true
    && Object.keys(civicSource).every((key) => candidate[key] === civicSource[key])
    && registry?.provenance?.schema === CONDENSATE_SPINE_PROVENANCE_SCHEMA
    && ["path", "sourceId", "bytes", "sha256"].every((key) => registry.provenance[key] === candidate[key]);
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

export function auditCondensateSpineRegistry(registry = CONDENSATE_SPINE_REGISTRY) {
  return freeze({ source: exactSource(registry), layouts: exactLayouts(registry), copy: registry?.copy === CONDENSATE_SPINE_COPY });
}

export function auditCivicShadowRegistry(registry = CIVIC_SHADOW_REGISTRY) {
  return freeze({ source: exactCivicSource(registry), layouts: exactLayouts(registry), copy: registry?.copy === CIVIC_SHADOW_COPY });
}

export function deriveCondensateSpineState({ checkpoint = "threshold_entry", registry = CONDENSATE_SPINE_REGISTRY, decodedImage } = {}) {
  const audit = auditCondensateSpineRegistry(registry);
  if (!Object.values(audit).every(Boolean)
    || decodedImage?.complete !== true || decodedImage.naturalWidth !== CONDENSATE_SPINE_WIDTH || decodedImage.naturalHeight !== CONDENSATE_SPINE_HEIGHT) {
    return "hidden";
  }
  return checkpoint === "anchor_complete" ? "complete" : "available";
}

export function deriveCivicShadowState({ registry = CIVIC_SHADOW_REGISTRY, decodedImage } = {}) {
  const audit = auditCivicShadowRegistry(registry);
  return Object.values(audit).every(Boolean)
    && decodedImage?.complete === true
    && decodedImage.naturalWidth === CONDENSATE_SPINE_WIDTH
    && decodedImage.naturalHeight === CONDENSATE_SPINE_HEIGHT ? "available" : "hidden";
}

function projectRect(rect, width, height) {
  const scaleX = width / CONDENSATE_SPINE_WIDTH;
  const scaleY = height / CONDENSATE_SPINE_HEIGHT;
  const rawWidth = rect.width * scaleX;
  const rawHeight = rect.height * scaleY;
  const projectedWidth = Math.min(width, Math.max(44, rawWidth));
  const projectedHeight = Math.min(height, Math.max(44, rawHeight));
  const centerX = (rect.x + rect.width / 2) * scaleX;
  const centerY = (rect.y + rect.height / 2) * scaleY;
  return [
    Math.max(0, Math.min(width - projectedWidth, centerX - projectedWidth / 2)),
    Math.max(0, Math.min(height - projectedHeight, centerY - projectedHeight / 2)),
    projectedWidth,
    projectedHeight,
  ];
}

function cityRect(rect) {
  return freeze({ canonical: projectRect(rect, 640, 360), narrow: projectRect(rect, 320, 180) });
}

export function getCondensateSpineHotspots(registry = CONDENSATE_SPINE_REGISTRY) {
  if (!Object.values(auditCondensateSpineRegistry(registry)).every(Boolean)) return null;
  const coupling = cityRect(registry.geometry.semanticTarget);
  const bridge = cityRect(registry.geometry.bridge);
  const cycles = cityRect(registry.geometry.operatingCycles);
  return freeze({
    "SC-02-00": { cycles, boundary: coupling, routePreview: bridge },
    "SC-02-30": { anchor: coupling },
    "SC-02-40": { forward: bridge },
    "SC-02-50": { forward: bridge },
  });
}

export function getCivicShadowHotspots(registry = CIVIC_SHADOW_REGISTRY) {
  if (!Object.values(auditCivicShadowRegistry(registry)).every(Boolean)) return null;
  const throat = cityRect(registry.geometry.semanticTarget);
  const bridge = cityRect(registry.geometry.bridge);
  return freeze({
    "SC-02-30": { anchor: throat },
    "SC-02-40": { forward: bridge },
    "SC-02-50": { forward: bridge },
  });
}
