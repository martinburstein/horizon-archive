import { FIRST_RUN_RESPONSIVE_LAYOUTS } from "./responsiveImageProjection.js";

export const STRATA_COMB_COPY = Object.freeze({
  alt: "A low alien strata coupling touches isolated replicas across an exposed layered cross-section while a conductive phase follows a detour around an opaque interval.",
});

const source = Object.freeze({
  enabled: true,
  path: "Visual Direction/Production Masters/2026-08-14-first-run-host27/host27-environment-master-v1.png",
  sourceId: "HA-IMG-H27-v1",
  bytes: 3677346,
  sha256: "b3c43a483b549265734aa735ee94137d8c919980a9ea9a58560bc984bc337672",
  width: 1920,
  height: 1080,
  format: "png",
  color: "opaque-srgb-8",
});

const provenance = Object.freeze({
  schema: "horizon.image-toolkit.production-master.v1",
  path: source.path,
  sourceId: source.sourceId,
  bytes: source.bytes,
  sha256: source.sha256,
});

export const STRATA_COMB_REGISTRY = Object.freeze({
  schema: "horizon.strata-comb.v1",
  source,
  provenance,
  layouts: Object.freeze(Object.keys(FIRST_RUN_RESPONSIVE_LAYOUTS)),
  copy: STRATA_COMB_COPY,
});

export function auditStrataComb(registry = STRATA_COMB_REGISTRY) {
  const candidate = registry?.source;
  return Object.freeze({
    source: candidate?.enabled === true && Object.keys(source).every((key) => candidate[key] === source[key]),
    provenance: provenance.schema === registry?.provenance?.schema
      && ["path", "sourceId", "bytes", "sha256"].every((key) => registry.provenance[key] === candidate?.[key]),
    layouts: JSON.stringify(registry?.layouts) === JSON.stringify(Object.keys(FIRST_RUN_RESPONSIVE_LAYOUTS)),
    copy: registry?.copy === STRATA_COMB_COPY,
  });
}

export function deriveStrataCombState({ registry = STRATA_COMB_REGISTRY, decodedImage } = {}) {
  return Object.values(auditStrataComb(registry)).every(Boolean)
    && decodedImage?.complete === true
    && decodedImage.naturalWidth === 1920
    && decodedImage.naturalHeight === 1080
    ? "available"
    : "hidden";
}
