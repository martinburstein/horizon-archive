import { FIRST_RUN_RESPONSIVE_LAYOUTS } from "./responsiveImageProjection.js";

export const FORKED_LOGIC_STITCH_COPY = Object.freeze({
  alt: "Two corresponding alien process bands retain one bounded difference beneath a later laminate stitch, beside an exterior bypass around an opaque route.",
});
const source = Object.freeze({ enabled: true, path: "Visual Direction/Production Masters/2026-08-14-first-run-host21/host21-environment-master-v1.png", sourceId: "HA-IMG-H21-v1", bytes: 3277889, sha256: "81abc5a74e06a6a94ff32a7601ed8a7387e890121aad6ea2220c99dff31557db", width: 1920, height: 1080, format: "png", color: "opaque-srgb-8" });
const provenance = Object.freeze({ schema: "horizon.image-toolkit.production-master.v1", path: source.path, sourceId: source.sourceId, bytes: source.bytes, sha256: source.sha256 });
export const FORKED_LOGIC_STITCH_REGISTRY = Object.freeze({ schema: "horizon.forked-logic-stitch.v1", source, provenance, layouts: Object.freeze(Object.keys(FIRST_RUN_RESPONSIVE_LAYOUTS)), copy: FORKED_LOGIC_STITCH_COPY });

export function auditForkedLogicStitch(registry = FORKED_LOGIC_STITCH_REGISTRY) {
  const candidate = registry?.source;
  return Object.freeze({
    source: candidate?.enabled === true && Object.keys(source).every((key) => candidate[key] === source[key]),
    provenance: provenance.schema === registry?.provenance?.schema && ["path", "sourceId", "bytes", "sha256"].every((key) => registry.provenance[key] === candidate?.[key]),
    layouts: JSON.stringify(registry?.layouts) === JSON.stringify(Object.keys(FIRST_RUN_RESPONSIVE_LAYOUTS)),
    copy: registry?.copy === FORKED_LOGIC_STITCH_COPY,
  });
}

export function deriveForkedLogicStitchState({ registry = FORKED_LOGIC_STITCH_REGISTRY, decodedImage } = {}) {
  return Object.values(auditForkedLogicStitch(registry)).every(Boolean) && decodedImage?.complete === true && decodedImage.naturalWidth === 1920 && decodedImage.naturalHeight === 1080 ? "available" : "hidden";
}
