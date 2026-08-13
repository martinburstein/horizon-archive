import { sanitizeTextSpeechPatternEvidence } from "./textSpeechPatternExercise.js";
import { sanitizeVisualPatternEvidence } from "./visualPatternExercise.js";
import { deriveResponsiveEvidence, FIRST_RUN_RESPONSIVE_LAYOUTS } from "./responsiveImageProjection.js";

export const TIDAL_PATTERN_LOOM_PATH = "Visual Direction/Production Masters/2026-08-13-first-run-host13/host13-tidal-pattern-loom-master-v1.png";
export const TIDAL_PATTERN_LOOM_SOURCE_URL = null;
const emptyRect = Object.freeze({ x: null, y: null, width: null, height: null });
const emptyRelation = Object.freeze({ ...emptyRect, centerX: null, centerY: null });
const emptyLayouts = Object.freeze({ desktop: null, laptop: null, narrow: null, effective200: null, retained320x180: null, retained320x240: null });

export const TIDAL_PATTERN_LOOM_REGISTRY = Object.freeze({
  source: Object.freeze({ enabled: false, path: null, sha256: null, byteLength: null, width: null, height: null, format: null, color: null, attemptId: null }),
  relation: emptyRelation,
  dryApproach: emptyRect,
  spans: Object.freeze([]),
  collarPairs: Object.freeze([]),
  loadContacts: Object.freeze([]),
  residue: emptyRect,
  waterline: emptyRect,
  semanticTarget: emptyRect,
  labelAnchor: Object.freeze({ ...emptyRect, insetOuterCss: null, insetTextCss: null }),
  protected: Object.freeze({ host12: null, returnRoute: null, host14: null, witness: null }),
  layouts: emptyLayouts,
});

export const TIDAL_PATTERN_LOOM_PROVENANCE = Object.freeze({ sha256: null, byteLength: null, promptId: null, promptBytes: null, promptSha256: null, cliSha256: null });
export const TIDAL_PATTERN_LOOM_COPY = Object.freeze({ name: "Tidal Pattern Loom", unseen: null, available: null, textSpeechInProgress: null, visualInProgress: null, missed: null, mastered: null, returned: null, nextBoundary: null, alt: null });

const prompts = Object.freeze({
  "H13-1": [1610, "7749b50cc8d9870d2531250c9149165a438dfd6a3bdfb0e40005c27f47f44296"],
  "H13-2": [1238, "58f1b0ec98c3fba6ca7390389da8ef478425738f26209c9396deb0adf56e8e64"],
  "H13-3": [1118, "22032424df1a7f2847631a2076eb01b9af2f0434d55fc29c994f94e294014a79"],
  "H13-4": [1153, "8c95e110b6bb1c5a35e42ea8240ad35d8f0e7bce47d836897b0dff54b322570e"],
  "H13-5": [1112, "fe21d4ed53bfc6c91aaa81a4451a65a374a30a8b70924180f6eb401fa087eab0"],
  "H13-6": [1137, "6bd9b02148fb883973edccbbb73d0c5956896bda0dada1ce90241c1c85e88f31"],
  "H13-7": [1132, "d0eebfa5e38df518c1e95d570d1cc1d4ba82a41c5befb71bab8670c13cadb3d4"],
  "H13-8": [1124, "1ebdbac5b6e97871d832a12c673568da8ba1dc602e28c05e8e2387ae65519a14"],
});
const finite = (value) => typeof value === "number" && Number.isFinite(value);
const rect = (value) => value && ["x", "y", "width", "height"].every((key) => finite(value[key])) && value.width > 0 && value.height > 0 && value.x >= 0 && value.y >= 0 && value.x + value.width <= 3840 && value.y + value.height <= 2160;

export function deriveTidalPatternLoomResponsiveEvidence(registry = TIDAL_PATTERN_LOOM_REGISTRY) {
  if (!registry?.relation || !registry?.semanticTarget) return null;
  const collars = (registry.collarPairs ?? []).flatMap((pair) => [pair.start, pair.end]);
  const essential = [registry.dryApproach, ...(registry.spans ?? []), ...collars, ...(registry.loadContacts ?? []), registry.residue, registry.waterline];
  const protectedRects = Object.values(registry.protected ?? {}).filter(rect);
  return Object.freeze(Object.fromEntries(Object.entries(FIRST_RUN_RESPONSIVE_LAYOUTS).map(([id, viewport]) => [id, deriveResponsiveEvidence({ viewport, relation: registry.relation, semanticTarget: registry.semanticTarget, essentialRects: essential, protectedRects, objectFit: "cover", objectPosition: "50% 50%" })])));
}

export function isTidalPatternLoomSourceIdentityPass(source = TIDAL_PATTERN_LOOM_REGISTRY.source, provenance = TIDAL_PATTERN_LOOM_PROVENANCE) {
  const prompt = prompts[source?.attemptId];
  return source?.enabled === true && source.path === TIDAL_PATTERN_LOOM_PATH && source.width === 3840 && source.height === 2160 && source.format === "png" && source.color === "opaque-srgb-8" && prompt != null && Number.isInteger(source.byteLength) && source.byteLength > 0 && source.byteLength <= 30000000 && /^[0-9a-f]{64}$/.test(source.sha256 ?? "") && provenance?.byteLength === source.byteLength && provenance?.sha256 === source.sha256 && provenance?.promptId === `HOST13-GEN-PROMPT-${source.attemptId}` && provenance?.promptBytes === prompt[0] && provenance?.promptSha256 === prompt[1] && provenance?.cliSha256 === "c2cdb05244ad9a3dcb8731988790ea6a06a59ab3c062c0f872b35f4ad7d20b05";
}

export function isTidalPatternLoomMeasurementPass(registry = TIDAL_PATTERN_LOOM_REGISTRY) {
  const { relation, dryApproach, spans, collarPairs, loadContacts, residue, waterline, semanticTarget, labelAnchor } = registry ?? {};
  if (!rect(relation) || relation.centerX !== relation.x + relation.width / 2 || relation.centerY !== relation.y + relation.height / 2) return false;
  if (![dryApproach, residue, waterline, semanticTarget, labelAnchor].every(rect) || labelAnchor.insetOuterCss !== 3 || labelAnchor.insetTextCss !== 5) return false;
  if (!Array.isArray(spans) || spans.length < 3 || !spans.every((span) => rect(span) && finite(span.angleDegrees) && Number.isInteger(span.depthPlane))) return false;
  if (new Set(spans.map((span) => span.angleDegrees)).size < 3 || new Set(spans.map((span) => span.depthPlane)).size < 2) return false;
  if (!Array.isArray(collarPairs) || collarPairs.length !== spans.length || !collarPairs.every((pair) => rect(pair.start) && rect(pair.end))) return false;
  if (!Array.isArray(loadContacts) || loadContacts.length < 3 || !loadContacts.every(rect)) return false;
  const evidence = deriveTidalPatternLoomResponsiveEvidence(registry);
  return evidence != null && Object.values(evidence).every((value) => value != null && value.relation.retainedArea >= .95 && value.essentialCentersVisible && value.target.width >= 44 && value.target.height >= 44 && value.target.contained && value.semanticContainsPhysicalCenter && value.protectedOverlap === 0);
}

export function isTidalPatternLoomLawful({ predecessorComplete, registry = TIDAL_PATTERN_LOOM_REGISTRY, provenance = TIDAL_PATTERN_LOOM_PROVENANCE, decodedImage } = {}) {
  return predecessorComplete === true && isTidalPatternLoomSourceIdentityPass(registry.source, provenance) && isTidalPatternLoomMeasurementPass(registry) && decodedImage?.complete === true && decodedImage.naturalWidth === 3840 && decodedImage.naturalHeight === 2160;
}

export function deriveTidalPatternLoomState({ textSpeechPatternEvidence, visualPatternEvidence, ...guard } = {}) {
  if (!isTidalPatternLoomLawful(guard)) return "hidden";
  if (textSpeechPatternEvidence == null && visualPatternEvidence == null) return "available";
  const textSpeech = sanitizeTextSpeechPatternEvidence(textSpeechPatternEvidence);
  const visual = sanitizeVisualPatternEvidence(visualPatternEvidence);
  if ((textSpeechPatternEvidence != null && !textSpeech) || (visualPatternEvidence != null && !visual)) return "hidden";
  if (textSpeech?.masteryStatus === "mastered" && visual?.masteryStatus === "mastered") return "complete";
  if (textSpeech?.masteryStatus === "remediation_required" || visual?.masteryStatus === "remediation_required") return "remediation_required";
  return "in_progress";
}

export function isLegacyHost13LessonLauncherVisible(source = TIDAL_PATTERN_LOOM_REGISTRY.source) { return source?.enabled !== true; }

export function getTidalPatternLoomHotspot(registry = TIDAL_PATTERN_LOOM_REGISTRY) {
  if (!isTidalPatternLoomMeasurementPass(registry)) return null;
  const target = registry.semanticTarget;
  const centerX = (target.x + target.width / 2) / 38.4;
  const centerY = (target.y + target.height / 2) / 21.6;
  const width = `max(${target.width / 38.4}%, 44px)`;
  const height = `max(${target.height / 21.6}%, 44px)`;
  return Object.freeze({ left: `clamp(0px, calc(${centerX}% - ${width} / 2), calc(100% - ${width}))`, top: `clamp(0px, calc(${centerY}% - ${height} / 2), calc(100% - ${height}))`, width, height });
}
