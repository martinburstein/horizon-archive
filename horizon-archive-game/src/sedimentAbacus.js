import { sanitizeControlFlowEvidence } from "./controlFlowExercise.js";
import { sanitizeModelChoiceEvidence } from "./modelChoiceExercise.js";
import { sanitizeStructuredPacketEvidence } from "./structuredPacketExercise.js";

export const SEDIMENT_ABACUS_PATH = "Visual Direction/Production Masters/2026-08-12-first-run-host07/host07-sediment-abacus-master-v1.png";

// Quartermaster replaces this null placeholder with the selected bundled URL.
export const SEDIMENT_ABACUS_SOURCE_URL = null;

const nullRect = Object.freeze({ x: null, y: null, width: null, height: null });
const nullCenteredRect = Object.freeze({ ...nullRect, centerX: null, centerY: null });

export const SEDIMENT_ABACUS_REGISTRY = Object.freeze({
  source: Object.freeze({
    enabled: false,
    path: null,
    sha256: null,
    byteLength: null,
    width: null,
    height: null,
    format: null,
    color: null,
    attemptId: null,
  }),
  relation: nullCenteredRect,
  semanticTarget: nullRect,
  labelAnchor: Object.freeze({ ...nullRect, insetOuterCss: 3, insetTextCss: 5 }),
  sedimentHandoff: nullRect,
  dryApproach: nullRect,
  depthBands: null,
  noduleGroup: nullRect,
  protected: Object.freeze({ host06: null, liveWater: null, returnRoute: null, crown: null, tidalLens: null, host08: null }),
  layouts: Object.freeze({ desktop: null, laptop: null, narrow: null, effective200: null, retained320x180: null, retained320x240: null }),
});

export const SEDIMENT_ABACUS_PROVENANCE = Object.freeze({
  sha256: null,
  byteLength: null,
  promptId: null,
  promptBytes: null,
  promptSha256: null,
  cliSha256: null,
});

export const SEDIMENT_ABACUS_COPY = Object.freeze({
  name: "Sediment Abacus",
  state: Object.freeze({ available: "available", in_progress: "in progress", remediation_required: "remediation required", complete: "complete" }),
  unseen: null,
  available: null,
  inProgress: null,
  missed: null,
  mastered: null,
  returned: null,
  nextBoundary: null,
  alt: null,
});

const attemptIds = Object.freeze(["H7-1", "H7-2", "H7-3", "H7-4", "H7-5"]);
const promptIdentities = Object.freeze({
  "H7-1": Object.freeze({ bytes: 3028, sha256: "193dfd6ebd76e7b323597114ba1e8ed62e48b2015487a90e3206d61d5227390c" }),
  "H7-2": Object.freeze({ bytes: 2782, sha256: "f37006c0f921144d17313e616fd561460d21308542178aa83558a17d93982d4c" }),
  "H7-3": Object.freeze({ bytes: 2690, sha256: "96cc2fa0dd12adf40dc3993832e95a3f7b1113ad265fbc8e3735cfc808f3b754" }),
  "H7-4": Object.freeze({ bytes: 2638, sha256: "129f0413a24510226dd47924ac654ed1acb1a1731dc75ae3850fc7fb4e36e534" }),
  "H7-5": Object.freeze({ bytes: 2801, sha256: "ff081fa095f63ceee36bdbd95c2332f85e52804a3291a348327455f390586988" }),
});

const layoutContract = Object.freeze({
  desktop: Object.freeze({ width: 1920, height: 1080 }),
  laptop: Object.freeze({ width: 1366, height: 768 }),
  narrow: Object.freeze({ width: 390, height: 844 }),
  effective200: Object.freeze({ width: 768, height: 900 }),
  retained320x180: Object.freeze({ width: 320, height: 180 }),
  retained320x240: Object.freeze({ width: 320, height: 240 }),
});

function finite(value) { return typeof value === "number" && Number.isFinite(value); }
function rect(value) {
  return value && ["x", "y", "width", "height"].every((key) => finite(value[key]))
    && value.width > 0 && value.height > 0
    && value.x >= 0 && value.y >= 0
    && value.x + value.width <= 3840 && value.y + value.height <= 2160;
}
function contained(outer, inner) {
  return rect(outer) && rect(inner) && outer.x <= inner.x && outer.y <= inner.y
    && outer.x + outer.width >= inner.x + inner.width
    && outer.y + outer.height >= inner.y + inner.height;
}
function layoutPass(id, value, registry) {
  const expected = layoutContract[id];
  if (!value || value.viewport?.width !== expected.width || value.viewport?.height !== expected.height) return false;
  return value.retainedArea >= 0.95
    && value.essentialCentersVisible === true
    && value.semanticTargetWidth >= 44
    && value.semanticTargetHeight >= 44
    && value.semanticContainsPhysicalCenter === true
    && value.protectedOverlap === 0
    && value.labelFocusSeparation >= 8
    && value.focusTargetStable === true
    && value.objectFit === "cover"
    && value.objectPosition === "50% 50%"
    && value.relationSource === registry.relation
    && value.semanticSource === registry.semanticTarget;
}

export function isSedimentAbacusSourceIdentityPass(source = SEDIMENT_ABACUS_REGISTRY.source, provenance = SEDIMENT_ABACUS_PROVENANCE) {
  const prompt = promptIdentities[source?.attemptId];
  return source?.enabled === true
    && source.path === SEDIMENT_ABACUS_PATH
    && source.width === 3840 && source.height === 2160
    && source.format === "png" && source.color === "opaque-srgb-8"
    && attemptIds.includes(source.attemptId)
    && Number.isInteger(source.byteLength) && source.byteLength > 0 && source.byteLength <= 30000000
    && /^[0-9a-f]{64}$/.test(source.sha256 ?? "")
    && provenance?.byteLength === source.byteLength
    && provenance?.sha256 === source.sha256
    && provenance?.promptId === `HOST07-GEN-PROMPT-${source.attemptId}`
    && provenance?.promptSha256 === prompt?.sha256
    && provenance?.promptBytes === prompt?.bytes
    && provenance?.cliSha256 === "c2cdb05244ad9a3dcb8731988790ea6a06a59ab3c062c0f872b35f4ad7d20b05";
}

export function isSedimentAbacusMeasurementPass(registry = SEDIMENT_ABACUS_REGISTRY) {
  const { relation, semanticTarget, labelAnchor, sedimentHandoff, dryApproach, depthBands, noduleGroup, protected: protectedRegions, layouts } = registry ?? {};
  if (![relation, semanticTarget, labelAnchor, sedimentHandoff, dryApproach, noduleGroup].every(rect)) return false;
  if (!finite(relation.centerX) || !finite(relation.centerY) || relation.centerX !== relation.x + relation.width / 2 || relation.centerY !== relation.y + relation.height / 2) return false;
  if (relation.x < 0.18 * 3840 || relation.y < 0.14 * 2160 || relation.x + relation.width > 0.82 * 3840 || relation.y + relation.height > 0.86 * 2160) return false;
  if (relation.width < 0.32 * 3840 || relation.width > 0.58 * 3840 || relation.height < 0.28 * 2160 || relation.height > 0.56 * 2160) return false;
  if (relation.centerX < 0.42 * 3840 || relation.centerX > 0.58 * 3840 || relation.centerY < 0.38 * 2160 || relation.centerY > 0.62 * 2160) return false;
  if (!contained(semanticTarget, { x: relation.centerX, y: relation.centerY, width: 1, height: 1 })) return false;
  if (sedimentHandoff.width < 0.08 * 3840 || dryApproach.width < 0.08 * 3840) return false;
  if (!Array.isArray(depthBands) || depthBands.length < 3 || !depthBands.every((band) => rect(band) && band.height >= 0.07 * 2160)) return false;
  const ordered = [...depthBands].sort((a, b) => a.y - b.y);
  if (ordered.some((band, index) => index > 0 && band.y < ordered[index - 1].y + ordered[index - 1].height)) return false;
  if ((ordered.at(-1).y + ordered.at(-1).height - ordered[0].y) < 0.24 * 2160) return false;
  if (labelAnchor.insetOuterCss !== 3 || labelAnchor.insetTextCss !== 5) return false;
  if (!protectedRegions || Object.keys(SEDIMENT_ABACUS_REGISTRY.protected).some((key) => !(protectedRegions[key] === "absent" || rect(protectedRegions[key])))) return false;
  return Object.keys(layoutContract).every((id) => layoutPass(id, layouts?.[id], registry));
}

export function isSedimentAbacusLawful({ host06Lawful, modelChoiceEvidence, registry = SEDIMENT_ABACUS_REGISTRY, provenance = SEDIMENT_ABACUS_PROVENANCE, decodedImage } = {}) {
  return host06Lawful === true
    && sanitizeModelChoiceEvidence(modelChoiceEvidence)?.masteryStatus === "mastered"
    && isSedimentAbacusSourceIdentityPass(registry.source, provenance)
    && isSedimentAbacusMeasurementPass(registry)
    && decodedImage?.complete === true && decodedImage.naturalWidth === 3840 && decodedImage.naturalHeight === 2160;
}

export function deriveSedimentAbacusState({ structuredPacketEvidence, controlFlowEvidence, ...guard } = {}) {
  if (!isSedimentAbacusLawful(guard)) return "hidden";
  if (structuredPacketEvidence == null) return "available";
  const structured = sanitizeStructuredPacketEvidence(structuredPacketEvidence);
  if (!structured) return "hidden";
  if (structured.masteryStatus !== "mastered") return structured.masteryStatus === "remediation_required" ? "remediation_required" : "in_progress";
  if (controlFlowEvidence == null) return "in_progress";
  const control = sanitizeControlFlowEvidence(controlFlowEvidence);
  if (!control) return "hidden";
  if (control.masteryStatus === "mastered") return "complete";
  return control.masteryStatus === "remediation_required" ? "remediation_required" : "in_progress";
}

export function isLegacyHost07LessonLauncherVisible(source = SEDIMENT_ABACUS_REGISTRY.source) { return source?.enabled !== true; }

export function getSedimentAbacusHotspot(registry = SEDIMENT_ABACUS_REGISTRY) {
  if (!isSedimentAbacusMeasurementPass(registry)) return null;
  const target = registry.semanticTarget;
  return Object.freeze({ left: `${target.x / 38.4}%`, top: `${target.y / 21.6}%`, width: `${target.width / 38.4}%`, height: `${target.height / 21.6}%` });
}
