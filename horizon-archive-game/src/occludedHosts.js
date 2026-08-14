import { FIRST_RUN_RESPONSIVE_LAYOUTS } from "./responsiveImageProjection.js";

export const EDGE_CONFIGURATION_CYST_COPY = Object.freeze({
  alt: "A sealed pressure-shaped bulge and shallow edge chambers lie fused into an immense opaque shellwork face beside a dry exterior service ledge.",
});

export const EXTERIOR_PROMPT_PALIMPSEST_COPY = Object.freeze({
  alt: "Weathered sacrificial skins overlap across a reachable alien shellwork skirt, preserving several physical correspondences while other records remain unmatched or buried.",
});

function createRegistry(schema, sourceId, path, bytes, sha256, copy) {
  const source = Object.freeze({
    enabled: true,
    path,
    sourceId,
    bytes,
    sha256,
    width: 1920,
    height: 1080,
    format: "png",
    color: "opaque-srgb-8",
  });
  return Object.freeze({
    schema,
    source,
    provenance: Object.freeze({ schema: "horizon.image-toolkit.production-master.v1", path, sourceId, bytes, sha256 }),
    layouts: Object.freeze(Object.keys(FIRST_RUN_RESPONSIVE_LAYOUTS)),
    copy,
  });
}

export const EDGE_CONFIGURATION_CYST_REGISTRY = createRegistry(
  "horizon.edge-configuration-cyst.v1",
  "HA-IMG-H33-v1",
  "Visual Direction/Production Masters/2026-08-14-first-run-host33/host33-environment-master-v1.png",
  3834871,
  "2298db1c5ce01a8fe94ee83f658a0565f5f2d143f67d379f3d0fd509fe7da264",
  EDGE_CONFIGURATION_CYST_COPY,
);

export const EXTERIOR_PROMPT_PALIMPSEST_REGISTRY = createRegistry(
  "horizon.exterior-prompt-palimpsest.v1",
  "HA-IMG-H34-v1",
  "Visual Direction/Production Masters/2026-08-14-first-run-host34/host34-environment-master-v1.png",
  4081937,
  "9b1703506d2dfd862d5b2f41a369b9d73ff57a18c2cffe36cc90454b302a5e2e",
  EXTERIOR_PROMPT_PALIMPSEST_COPY,
);

function auditRegistry(registry, expected, copy) {
  const candidate = registry?.source;
  return Object.freeze({
    source: candidate?.enabled === true && Object.keys(expected.source).every((key) => candidate[key] === expected.source[key]),
    provenance: expected.provenance.schema === registry?.provenance?.schema
      && ["path", "sourceId", "bytes", "sha256"].every((key) => registry.provenance[key] === candidate?.[key]),
    layouts: JSON.stringify(registry?.layouts) === JSON.stringify(Object.keys(FIRST_RUN_RESPONSIVE_LAYOUTS)),
    copy: registry?.copy === copy,
  });
}

function deriveState(registry, expected, copy, decodedImage) {
  return Object.values(auditRegistry(registry, expected, copy)).every(Boolean)
    && decodedImage?.complete === true
    && decodedImage.naturalWidth === 1920
    && decodedImage.naturalHeight === 1080
    ? "available"
    : "hidden";
}

export function auditEdgeConfigurationCyst(registry = EDGE_CONFIGURATION_CYST_REGISTRY) {
  return auditRegistry(registry, EDGE_CONFIGURATION_CYST_REGISTRY, EDGE_CONFIGURATION_CYST_COPY);
}

export function deriveEdgeConfigurationCystState({ registry = EDGE_CONFIGURATION_CYST_REGISTRY, decodedImage } = {}) {
  return deriveState(registry, EDGE_CONFIGURATION_CYST_REGISTRY, EDGE_CONFIGURATION_CYST_COPY, decodedImage);
}

export function auditExteriorPromptPalimpsest(registry = EXTERIOR_PROMPT_PALIMPSEST_REGISTRY) {
  return auditRegistry(registry, EXTERIOR_PROMPT_PALIMPSEST_REGISTRY, EXTERIOR_PROMPT_PALIMPSEST_COPY);
}

export function deriveExteriorPromptPalimpsestState({ registry = EXTERIOR_PROMPT_PALIMPSEST_REGISTRY, decodedImage } = {}) {
  return deriveState(registry, EXTERIOR_PROMPT_PALIMPSEST_REGISTRY, EXTERIOR_PROMPT_PALIMPSEST_COPY, decodedImage);
}
