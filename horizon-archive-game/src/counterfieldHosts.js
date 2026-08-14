import { FIRST_RUN_RESPONSIVE_LAYOUTS } from "./responsiveImageProjection.js";

export const TWIN_RETURN_COUPLING_COPY = Object.freeze({
  alt: "Two sealed chambers share an off-axis alien coupling in a near outer skin, while a broad unmarked mineral plain separates distant vane works.",
});

const source = Object.freeze({ enabled: true, path: "Visual Direction/Production Masters/2026-08-14-first-run-host35/host35-environment-master-v1.png", sourceId: "HA-IMG-H35-v1", bytes: 3448297, sha256: "243b0ac99d1f6a6a65d108e1217fd0c4d8e8583b3d1600fee9c8d2cbabd32f33", width: 1920, height: 1080, format: "png", color: "opaque-srgb-8" });
const provenance = Object.freeze({ schema: "horizon.image-toolkit.production-master.v1", path: source.path, sourceId: source.sourceId, bytes: source.bytes, sha256: source.sha256 });

export const TWIN_RETURN_COUPLING_REGISTRY = Object.freeze({ schema: "horizon.twin-return-coupling.v1", source, provenance, layouts: Object.freeze(Object.keys(FIRST_RUN_RESPONSIVE_LAYOUTS)), copy: TWIN_RETURN_COUPLING_COPY });

export function auditTwinReturnCoupling(registry = TWIN_RETURN_COUPLING_REGISTRY) {
  const candidate = registry?.source;
  return Object.freeze({
    source: candidate?.enabled === true && Object.keys(source).every((key) => candidate[key] === source[key]),
    provenance: provenance.schema === registry?.provenance?.schema && ["path", "sourceId", "bytes", "sha256"].every((key) => registry.provenance[key] === candidate?.[key]),
    layouts: JSON.stringify(registry?.layouts) === JSON.stringify(Object.keys(FIRST_RUN_RESPONSIVE_LAYOUTS)),
    copy: registry?.copy === TWIN_RETURN_COUPLING_COPY,
  });
}

export function deriveTwinReturnCouplingState({ registry = TWIN_RETURN_COUPLING_REGISTRY, decodedImage } = {}) {
  return Object.values(auditTwinReturnCoupling(registry)).every(Boolean) && decodedImage?.complete === true && decodedImage.naturalWidth === 1920 && decodedImage.naturalHeight === 1080 ? "available" : "hidden";
}
