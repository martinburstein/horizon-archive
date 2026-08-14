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

export const PRESSURE_LANGUAGE_ORGAN_COPY = Object.freeze({
  alt: "An alien pressure-relief manifold uses differently oriented cavities to sustain a physical cadence along an exterior detour without forming speech or response.",
});

const pressureSource = Object.freeze({
  enabled: true,
  path: "Visual Direction/Production Masters/2026-08-14-first-run-host28/host28-environment-master-v1.png",
  sourceId: "HA-IMG-H28-v1",
  bytes: 3807667,
  sha256: "250bace3373be1e095ddd75cd907e8ee561bb87781a9a352f2b0a8a7b83c6e81",
  width: 1920,
  height: 1080,
  format: "png",
  color: "opaque-srgb-8",
});

const pressureProvenance = Object.freeze({
  schema: provenance.schema,
  path: pressureSource.path,
  sourceId: pressureSource.sourceId,
  bytes: pressureSource.bytes,
  sha256: pressureSource.sha256,
});

export const PRESSURE_LANGUAGE_ORGAN_REGISTRY = Object.freeze({
  schema: "horizon.pressure-language-organ.v1",
  source: pressureSource,
  provenance: pressureProvenance,
  layouts: Object.freeze(Object.keys(FIRST_RUN_RESPONSIVE_LAYOUTS)),
  copy: PRESSURE_LANGUAGE_ORGAN_COPY,
});

export function auditPressureLanguageOrgan(registry = PRESSURE_LANGUAGE_ORGAN_REGISTRY) {
  const candidate = registry?.source;
  return Object.freeze({
    source: candidate?.enabled === true && Object.keys(pressureSource).every((key) => candidate[key] === pressureSource[key]),
    provenance: pressureProvenance.schema === registry?.provenance?.schema
      && ["path", "sourceId", "bytes", "sha256"].every((key) => registry.provenance[key] === candidate?.[key]),
    layouts: JSON.stringify(registry?.layouts) === JSON.stringify(Object.keys(FIRST_RUN_RESPONSIVE_LAYOUTS)),
    copy: registry?.copy === PRESSURE_LANGUAGE_ORGAN_COPY,
  });
}

export function derivePressureLanguageOrganState({ registry = PRESSURE_LANGUAGE_ORGAN_REGISTRY, decodedImage } = {}) {
  return Object.values(auditPressureLanguageOrgan(registry)).every(Boolean)
    && decodedImage?.complete === true
    && decodedImage.naturalWidth === 1920
    && decodedImage.naturalHeight === 1080
    ? "available"
    : "hidden";
}
