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

export const SHEDDING_CARRIER_SKIN_COPY = Object.freeze({ alt: "A translucent sacrificial skin sheds in controlled sheets from an alien bypass while an intact replacement continues beneath it toward three material routes." });
const skinSource = Object.freeze({ enabled: true, path: "Visual Direction/Production Masters/2026-08-14-first-run-host22/host22-environment-master-v1.png", sourceId: "HA-IMG-H22-v1", bytes: 3479590, sha256: "e93ecb5be8773ba37c85d52f2cb0e1e99c1a3dc53763a5f9314cd459b62320c4", width: 1920, height: 1080, format: "png", color: "opaque-srgb-8" });
const skinProvenance = Object.freeze({ schema: provenance.schema, path: skinSource.path, sourceId: skinSource.sourceId, bytes: skinSource.bytes, sha256: skinSource.sha256 });
export const SHEDDING_CARRIER_SKIN_REGISTRY = Object.freeze({ schema: "horizon.shedding-carrier-skin.v1", source: skinSource, provenance: skinProvenance, layouts: Object.freeze(Object.keys(FIRST_RUN_RESPONSIVE_LAYOUTS)), copy: SHEDDING_CARRIER_SKIN_COPY });
export function auditSheddingCarrierSkin(registry = SHEDDING_CARRIER_SKIN_REGISTRY) {
  const candidate = registry?.source;
  return Object.freeze({ source: candidate?.enabled === true && Object.keys(skinSource).every((key) => candidate[key] === skinSource[key]), provenance: skinProvenance.schema === registry?.provenance?.schema && ["path", "sourceId", "bytes", "sha256"].every((key) => registry.provenance[key] === candidate?.[key]), layouts: JSON.stringify(registry?.layouts) === JSON.stringify(Object.keys(FIRST_RUN_RESPONSIVE_LAYOUTS)), copy: registry?.copy === SHEDDING_CARRIER_SKIN_COPY });
}
export function deriveSheddingCarrierSkinState({ registry = SHEDDING_CARRIER_SKIN_REGISTRY, decodedImage } = {}) {
  return Object.values(auditSheddingCarrierSkin(registry)).every(Boolean) && decodedImage?.complete === true && decodedImage.naturalWidth === 1920 && decodedImage.naturalHeight === 1080 ? "available" : "hidden";
}
