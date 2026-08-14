import { FIRST_RUN_RESPONSIVE_LAYOUTS } from "./responsiveImageProjection.js";

export const NESTED_CUSTODY_FOLIO_PATH = "Visual Direction/Production Masters/2026-08-14-first-run-host19/host19-environment-master-v1.png";
export const NESTED_CUSTODY_FOLIO_COPY = Object.freeze({
  name: "Nested Custody Folio",
  alt: "Blank nested mineral shapes sit within a repaired alien civic mass beside a small heat-return coupling and an open perimeter route.",
});

const source = Object.freeze({
  enabled: true,
  path: NESTED_CUSTODY_FOLIO_PATH,
  sourceId: "HA-IMG-H19-v1",
  bytes: 3714330,
  sha256: "3590a7f6e41d4ad303bec850ba1801b4820940e9fa98b6594db73af577124814",
  width: 1920,
  height: 1080,
  format: "png",
  color: "opaque-srgb-8",
});
const provenance = Object.freeze({ schema: "horizon.image-toolkit.production-master.v1", path: source.path, sourceId: source.sourceId, bytes: source.bytes, sha256: source.sha256 });
export const NESTED_CUSTODY_FOLIO_REGISTRY = Object.freeze({
  schema: "horizon.nested-custody-folio.v1",
  source,
  provenance,
  layouts: Object.freeze(Object.keys(FIRST_RUN_RESPONSIVE_LAYOUTS)),
  copy: NESTED_CUSTODY_FOLIO_COPY,
});

export function auditNestedCustodyFolio(registry = NESTED_CUSTODY_FOLIO_REGISTRY) {
  const candidate = registry?.source;
  return Object.freeze({
    source: candidate?.enabled === true && Object.keys(source).every((key) => candidate[key] === source[key]),
    provenance: provenance.schema === registry?.provenance?.schema && ["path", "sourceId", "bytes", "sha256"].every((key) => registry.provenance[key] === candidate?.[key]),
    layouts: JSON.stringify(registry?.layouts) === JSON.stringify(Object.keys(FIRST_RUN_RESPONSIVE_LAYOUTS)),
    copy: registry?.copy === NESTED_CUSTODY_FOLIO_COPY,
  });
}

export function deriveNestedCustodyFolioState({ registry = NESTED_CUSTODY_FOLIO_REGISTRY, decodedImage } = {}) {
  return Object.values(auditNestedCustodyFolio(registry)).every(Boolean)
    && decodedImage?.complete === true
    && decodedImage.naturalWidth === 1920
    && decodedImage.naturalHeight === 1080 ? "available" : "hidden";
}

export const SILENT_ACCOUNTABILITY_APERTURE_PATH = "Visual Direction/Production Masters/2026-08-14-first-run-host20/host20-environment-master-v1.png";
export const SILENT_ACCOUNTABILITY_APERTURE_COPY = Object.freeze({
  name: "Silent Accountability Aperture",
  alt: "A sealed alien interlock stands beside a smaller separate service aperture and an open heat-return walking margin.",
});
const apertureSource = Object.freeze({
  enabled: true,
  path: SILENT_ACCOUNTABILITY_APERTURE_PATH,
  sourceId: "HA-IMG-H20-v1",
  bytes: 3852876,
  sha256: "95fd38b5e93aefafae9de4cd338d3becbbbdbde4f2563692e3f84086b76a47b5",
  width: 1920,
  height: 1080,
  format: "png",
  color: "opaque-srgb-8",
});
const apertureProvenance = Object.freeze({ schema: provenance.schema, path: apertureSource.path, sourceId: apertureSource.sourceId, bytes: apertureSource.bytes, sha256: apertureSource.sha256 });
export const SILENT_ACCOUNTABILITY_APERTURE_REGISTRY = Object.freeze({
  schema: "horizon.silent-accountability-aperture.v1",
  source: apertureSource,
  provenance: apertureProvenance,
  layouts: Object.freeze(Object.keys(FIRST_RUN_RESPONSIVE_LAYOUTS)),
  copy: SILENT_ACCOUNTABILITY_APERTURE_COPY,
});

export function auditSilentAccountabilityAperture(registry = SILENT_ACCOUNTABILITY_APERTURE_REGISTRY) {
  const candidate = registry?.source;
  return Object.freeze({
    source: candidate?.enabled === true && Object.keys(apertureSource).every((key) => candidate[key] === apertureSource[key]),
    provenance: apertureProvenance.schema === registry?.provenance?.schema && ["path", "sourceId", "bytes", "sha256"].every((key) => registry.provenance[key] === candidate?.[key]),
    layouts: JSON.stringify(registry?.layouts) === JSON.stringify(Object.keys(FIRST_RUN_RESPONSIVE_LAYOUTS)),
    copy: registry?.copy === SILENT_ACCOUNTABILITY_APERTURE_COPY,
  });
}

export function deriveSilentAccountabilityApertureState({ registry = SILENT_ACCOUNTABILITY_APERTURE_REGISTRY, decodedImage } = {}) {
  return Object.values(auditSilentAccountabilityAperture(registry)).every(Boolean)
    && decodedImage?.complete === true
    && decodedImage.naturalWidth === 1920
    && decodedImage.naturalHeight === 1080 ? "available" : "hidden";
}
