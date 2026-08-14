import { FIRST_RUN_RESPONSIVE_LAYOUTS } from "./responsiveImageProjection.js";

export const RECEIVER_CHORUS_COPY = Object.freeze({
  alt: "Unequal alien receiver forms share recurring mineral traces above a low replica coupling, while maintained outliers and an opaque bypass remain equally lit.",
});

const source = Object.freeze({
  enabled: true,
  path: "Visual Direction/Production Masters/2026-08-14-first-run-host25/host25-environment-master-v1.png",
  sourceId: "HA-IMG-H25-v1",
  bytes: 3521236,
  sha256: "e026ac3396523d8c5f62a06cb384fb0201d4ef33e59bf4681d82e754eb2c1b4b",
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

export const RECEIVER_CHORUS_REGISTRY = Object.freeze({
  schema: "horizon.receiver-chorus.v1",
  source,
  provenance,
  layouts: Object.freeze(Object.keys(FIRST_RUN_RESPONSIVE_LAYOUTS)),
  copy: RECEIVER_CHORUS_COPY,
});

export function auditReceiverChorus(registry = RECEIVER_CHORUS_REGISTRY) {
  const candidate = registry?.source;
  return Object.freeze({
    source: candidate?.enabled === true
      && Object.keys(source).every((key) => candidate[key] === source[key]),
    provenance: provenance.schema === registry?.provenance?.schema
      && ["path", "sourceId", "bytes", "sha256"].every(
        (key) => registry.provenance[key] === candidate?.[key],
      ),
    layouts: JSON.stringify(registry?.layouts)
      === JSON.stringify(Object.keys(FIRST_RUN_RESPONSIVE_LAYOUTS)),
    copy: registry?.copy === RECEIVER_CHORUS_COPY,
  });
}

export function deriveReceiverChorusState({
  registry = RECEIVER_CHORUS_REGISTRY,
  decodedImage,
} = {}) {
  return Object.values(auditReceiverChorus(registry)).every(Boolean)
    && decodedImage?.complete === true
    && decodedImage.naturalWidth === 1920
    && decodedImage.naturalHeight === 1080
    ? "available"
    : "hidden";
}

export const SEALED_LEXICON_CRADLE_COPY = Object.freeze({
  alt: "An exterior alien cradle holds isolated material replicas beside a fully opaque branch while a separate bypass rejoins the distant carrier.",
});

const cradleSource = Object.freeze({
  enabled: true,
  path: "Visual Direction/Production Masters/2026-08-14-first-run-host26/host26-environment-master-v1.png",
  sourceId: "HA-IMG-H26-v1",
  bytes: 3242632,
  sha256: "0d32a0df8e47829a29aa38c604a7cc47c51919cd4156b274d222a6208a9c0987",
  width: 1920,
  height: 1080,
  format: "png",
  color: "opaque-srgb-8",
});

const cradleProvenance = Object.freeze({
  schema: provenance.schema,
  path: cradleSource.path,
  sourceId: cradleSource.sourceId,
  bytes: cradleSource.bytes,
  sha256: cradleSource.sha256,
});

export const SEALED_LEXICON_CRADLE_REGISTRY = Object.freeze({
  schema: "horizon.sealed-lexicon-cradle.v1",
  source: cradleSource,
  provenance: cradleProvenance,
  layouts: Object.freeze(Object.keys(FIRST_RUN_RESPONSIVE_LAYOUTS)),
  copy: SEALED_LEXICON_CRADLE_COPY,
});

export function auditSealedLexiconCradle(registry = SEALED_LEXICON_CRADLE_REGISTRY) {
  const candidate = registry?.source;
  return Object.freeze({
    source: candidate?.enabled === true
      && Object.keys(cradleSource).every((key) => candidate[key] === cradleSource[key]),
    provenance: cradleProvenance.schema === registry?.provenance?.schema
      && ["path", "sourceId", "bytes", "sha256"].every(
        (key) => registry.provenance[key] === candidate?.[key],
      ),
    layouts: JSON.stringify(registry?.layouts)
      === JSON.stringify(Object.keys(FIRST_RUN_RESPONSIVE_LAYOUTS)),
    copy: registry?.copy === SEALED_LEXICON_CRADLE_COPY,
  });
}

export function deriveSealedLexiconCradleState({
  registry = SEALED_LEXICON_CRADLE_REGISTRY,
  decodedImage,
} = {}) {
  return Object.values(auditSealedLexiconCradle(registry)).every(Boolean)
    && decodedImage?.complete === true
    && decodedImage.naturalWidth === 1920
    && decodedImage.naturalHeight === 1080
    ? "available"
    : "hidden";
}
