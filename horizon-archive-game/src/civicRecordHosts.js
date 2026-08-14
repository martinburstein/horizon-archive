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
