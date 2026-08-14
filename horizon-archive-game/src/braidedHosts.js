import { FIRST_RUN_RESPONSIVE_LAYOUTS } from "./responsiveImageProjection.js";

export const SADDLE_ECHO_ORGAN_COPY = Object.freeze({
  alt: "A laminated ribbon repeatedly crosses a cellular mantle through saddle-shaped voids while a granular interphase keeps both materials separate beside an isolated replica coupling.",
});

const source = Object.freeze({
  enabled: true,
  path: "Visual Direction/Production Masters/2026-08-14-first-run-host29/host29-environment-master-v1.png",
  sourceId: "HA-IMG-H29-v1",
  bytes: 3586759,
  sha256: "a51d9e67448b6f00f38dc11d2b45dae44b389d140753e3e2d043b4cb959ae174",
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

export const SADDLE_ECHO_ORGAN_REGISTRY = Object.freeze({
  schema: "horizon.saddle-echo-organ.v1",
  source,
  provenance,
  layouts: Object.freeze(Object.keys(FIRST_RUN_RESPONSIVE_LAYOUTS)),
  copy: SADDLE_ECHO_ORGAN_COPY,
});

export function auditSaddleEchoOrgan(registry = SADDLE_ECHO_ORGAN_REGISTRY) {
  const candidate = registry?.source;
  return Object.freeze({
    source: candidate?.enabled === true && Object.keys(source).every((key) => candidate[key] === source[key]),
    provenance: provenance.schema === registry?.provenance?.schema
      && ["path", "sourceId", "bytes", "sha256"].every((key) => registry.provenance[key] === candidate?.[key]),
    layouts: JSON.stringify(registry?.layouts) === JSON.stringify(Object.keys(FIRST_RUN_RESPONSIVE_LAYOUTS)),
    copy: registry?.copy === SADDLE_ECHO_ORGAN_COPY,
  });
}

export function deriveSaddleEchoOrganState({ registry = SADDLE_ECHO_ORGAN_REGISTRY, decodedImage } = {}) {
  return Object.values(auditSaddleEchoOrgan(registry)).every(Boolean)
    && decodedImage?.complete === true
    && decodedImage.naturalWidth === 1920
    && decodedImage.naturalHeight === 1080
    ? "available"
    : "hidden";
}
