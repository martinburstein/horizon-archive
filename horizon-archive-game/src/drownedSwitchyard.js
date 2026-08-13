import { sanitizeSdkRouteEvidence } from "./sdkRouteChooserExercise.js";
import { sanitizeSingleAgentEvidence } from "./singleAgentExercise.js";
import { deriveResponsiveEvidence, FIRST_RUN_RESPONSIVE_LAYOUTS } from "./responsiveImageProjection.js";

export const DROWNED_SWITCHYARD_PATH = "Visual Direction/Production Masters/2026-08-12-first-run-host12/host12-drowned-switchyard-master-v1.png";
export const DROWNED_SWITCHYARD_SOURCE_URL = DROWNED_SWITCHYARD_PATH;
const emptyRect = Object.freeze({ x: null, y: null, width: null, height: null });
const emptyRelation = Object.freeze({ ...emptyRect, centerX: null, centerY: null });
const emptyLayouts = Object.freeze({ desktop: null, laptop: null, narrow: null, effective200: null, retained320x180: null, retained320x240: null });

export const DROWNED_SWITCHYARD_REGISTRY = Object.freeze({
  source: Object.freeze({ enabled: true, path: DROWNED_SWITCHYARD_PATH, sha256: "d8b5c6abe887fa0c17321f7f426a0bea2f6bfbcddfdaca6875b219d51a8292fc", byteLength: 14744405, width: 3840, height: 2160, format: "png", color: "opaque-srgb-8", attemptId: "H12-1" }),
  upperCrown: Object.freeze({ x: 760, y: 480, width: 2580, height: 740, centerX: 2050, centerY: 850 }),
  dryApproach: Object.freeze({ x: 740, y: 1050, width: 2500, height: 1110 }),
  bypassSeams: Object.freeze([Object.freeze({ x: 980, y: 690, width: 330, height: 560 }), Object.freeze({ x: 1800, y: 690, width: 300, height: 560 }), Object.freeze({ x: 2500, y: 690, width: 330, height: 560 })]),
  sealedChambers: Object.freeze([Object.freeze({ x: 1230, y: 480, width: 490, height: 270 }), Object.freeze({ x: 2440, y: 480, width: 430, height: 260 })]),
  drownedReturns: Object.freeze([Object.freeze({ x: 0, y: 1100, width: 1180, height: 1060 }), Object.freeze({ x: 2680, y: 1100, width: 1160, height: 1060 })]),
  waterBoundary: Object.freeze({ x: 0, y: 810, width: 3840, height: 1350 }),
  semanticTarget: Object.freeze({ x: 700, y: 400, width: 2700, height: 1450 }),
  labelAnchor: Object.freeze({ x: 730, y: 430, width: 2640, height: 1390, insetOuterCss: 3, insetTextCss: 5 }),
  protected: Object.freeze({ host11: null, returnRoute: null, host13: null, witness: null }),
  layouts: emptyLayouts,
});
export const DROWNED_SWITCHYARD_PROVENANCE = Object.freeze({ sha256: "d8b5c6abe887fa0c17321f7f426a0bea2f6bfbcddfdaca6875b219d51a8292fc", byteLength: 14744405, promptId: "HOST12-GEN-PROMPT-H12-1", promptBytes: 1285, promptSha256: "a5b2af07451e0a562986a8b59314d9acda57979615c9ac3d4034fade4dd9411d", cliSha256: "c2cdb05244ad9a3dcb8731988790ea6a06a59ab3c062c0f872b35f4ad7d20b05" });
export const DROWNED_SWITCHYARD_COPY = Object.freeze({
  name: "Drowned Switchyard",
  unseen: "A dry high slab reaches a fused crown above separate drowned returns.",
  available: "Three bypass seams rise from the water into the crown. Two sealed chambers remain closed and dry.",
  sdkInProgress: "The dry crown remains unchanged while SDK route evidence is in progress.",
  agentInProgress: "The drowned returns remain unreachable while Single Agent evidence is in progress.",
  missed: "The junction does not answer. Recheck the dry crown, route boundaries, and sealed chambers.",
  mastered: "Both records are complete. The chambers remain sealed and the drowned junction remains beyond the water.",
  returned: "The same dry crown stands above the same converging returns.",
  nextBoundary: "Continue along the dry upper route after both records are complete.",
  alt: "A broad dry stone approach reaching a low fused crown above basin water, with three descending bypass seams, two closed circular chambers, and separate drowned return structures on both sides.",
});

const prompts = Object.freeze({
  "H12-1": [1285, "a5b2af07451e0a562986a8b59314d9acda57979615c9ac3d4034fade4dd9411d"],
  "H12-2": [1056, "6371870a331cb1de226f1e41d871734e12e73ea66eae24395c95150e32158549"],
  "H12-3": [972, "114cd6c938971820250b879bc550ad91bf219a55f3fbb83556900472f8931e15"],
  "H12-4": [856, "67005f4885780d1652188158e936b971e7d7fb26a06fea1d032f8fd6d8bfa9b3"],
  "H12-5": [877, "6aa0a273004b2ee9730e1d6034fd2e8c3bcf6da61e122e947a40f91a43334665"],
  "H12-6": [838, "f0dec5c420b25dd035c68187965ae6c1052341a3750f0cfed0eb4bd36045ffad"],
  "H12-7": [849, "d6a0317069a4cab7849c8602870555324fe6dc66fc2be1858a865d402b6b3878"],
  "H12-8": [812, "1f0f6e4c275d4c02ecb17420adec633baa66a6850091acc4e5fa07374768ee69"],
  "H12-9": [909, "e08247347d21d8be2234728b087c3f2c23df2cdb1a16106f294541fdf5f36087"],
});
const finite = (value) => typeof value === "number" && Number.isFinite(value);
const rect = (value) => value && ["x", "y", "width", "height"].every((key) => finite(value[key])) && value.width > 0 && value.height > 0 && value.x >= 0 && value.y >= 0 && value.x + value.width <= 3840 && value.y + value.height <= 2160;

export function deriveDrownedSwitchyardResponsiveEvidence(registry = DROWNED_SWITCHYARD_REGISTRY) {
  if (!registry?.upperCrown || !registry?.semanticTarget) return null;
  const essential = [registry.dryApproach, ...(registry.bypassSeams ?? []), ...(registry.sealedChambers ?? []), ...(registry.drownedReturns ?? []), registry.waterBoundary];
  const protectedRects = Object.values(registry.protected ?? {}).filter(rect);
  return Object.freeze(Object.fromEntries(Object.entries(FIRST_RUN_RESPONSIVE_LAYOUTS).map(([id, viewport]) => [id, deriveResponsiveEvidence({ viewport, relation: registry.upperCrown, semanticTarget: registry.semanticTarget, essentialRects: essential, protectedRects, objectFit: "cover", objectPosition: "50% 50%" })])));
}
export function isDrownedSwitchyardSourceIdentityPass(source = DROWNED_SWITCHYARD_REGISTRY.source, provenance = DROWNED_SWITCHYARD_PROVENANCE) {
  const prompt = prompts[source?.attemptId];
  return source?.enabled === true && source.path === DROWNED_SWITCHYARD_PATH && source.width === 3840 && source.height === 2160 && source.format === "png" && source.color === "opaque-srgb-8" && prompt != null && Number.isInteger(source.byteLength) && source.byteLength > 0 && source.byteLength <= 30000000 && /^[0-9a-f]{64}$/.test(source.sha256 ?? "") && provenance?.byteLength === source.byteLength && provenance?.sha256 === source.sha256 && provenance?.promptId === `HOST12-GEN-PROMPT-${source.attemptId}` && provenance?.promptBytes === prompt[0] && provenance?.promptSha256 === prompt[1] && provenance?.cliSha256 === "c2cdb05244ad9a3dcb8731988790ea6a06a59ab3c062c0f872b35f4ad7d20b05";
}
export function isDrownedSwitchyardMeasurementPass(registry = DROWNED_SWITCHYARD_REGISTRY) {
  const { upperCrown, dryApproach, bypassSeams, sealedChambers, drownedReturns, waterBoundary, semanticTarget, labelAnchor } = registry ?? {};
  if (!rect(upperCrown) || !finite(upperCrown.centerX) || !finite(upperCrown.centerY) || upperCrown.centerX !== upperCrown.x + upperCrown.width / 2 || upperCrown.centerY !== upperCrown.y + upperCrown.height / 2) return false;
  if (![dryApproach, waterBoundary, semanticTarget, labelAnchor].every(rect) || !Array.isArray(bypassSeams) || bypassSeams.length < 3 || !bypassSeams.every(rect) || !Array.isArray(sealedChambers) || sealedChambers.length < 2 || !sealedChambers.every(rect) || !Array.isArray(drownedReturns) || drownedReturns.length < 2 || !drownedReturns.every(rect)) return false;
  if (labelAnchor.insetOuterCss !== 3 || labelAnchor.insetTextCss !== 5) return false;
  const evidence = deriveDrownedSwitchyardResponsiveEvidence(registry);
  return evidence != null && Object.values(evidence).every((value) => value != null && value.relation.retainedArea >= .95 && value.essentialCentersVisible && value.target.width >= 44 && value.target.height >= 44 && value.target.contained && value.semanticContainsPhysicalCenter && value.protectedOverlap === 0);
}
export function isDrownedSwitchyardLawful({ predecessorComplete, registry = DROWNED_SWITCHYARD_REGISTRY, provenance = DROWNED_SWITCHYARD_PROVENANCE, decodedImage } = {}) { return predecessorComplete === true && isDrownedSwitchyardSourceIdentityPass(registry.source, provenance) && isDrownedSwitchyardMeasurementPass(registry) && decodedImage?.complete === true && decodedImage.naturalWidth === 3840 && decodedImage.naturalHeight === 2160; }
export function deriveDrownedSwitchyardState({ sdkRouteEvidence, singleAgentEvidence, ...guard } = {}) {
  if (!isDrownedSwitchyardLawful(guard)) return "hidden";
  if (sdkRouteEvidence == null && singleAgentEvidence == null) return "available";
  const sdk = sanitizeSdkRouteEvidence(sdkRouteEvidence);
  const agent = sanitizeSingleAgentEvidence(singleAgentEvidence);
  if ((sdkRouteEvidence != null && !sdk) || (singleAgentEvidence != null && !agent)) return "hidden";
  if (sdk?.masteryStatus === "mastered" && agent?.masteryStatus === "mastered") return "complete";
  if (sdk?.masteryStatus === "remediation_required" || agent?.masteryStatus === "remediation_required") return "remediation_required";
  return "in_progress";
}
export function isLegacyHost12LessonLauncherVisible(source = DROWNED_SWITCHYARD_REGISTRY.source) { return source?.enabled !== true; }
export function getDrownedSwitchyardHotspot(registry = DROWNED_SWITCHYARD_REGISTRY) {
  if (!isDrownedSwitchyardMeasurementPass(registry)) return null;
  const target = registry.semanticTarget;
  const centerX = (target.x + target.width / 2) / 38.4;
  const centerY = (target.y + target.height / 2) / 21.6;
  const width = `max(${target.width / 38.4}%, 44px)`;
  const height = `max(${target.height / 21.6}%, 44px)`;
  return Object.freeze({ left: `clamp(0px, calc(${centerX}% - ${width} / 2), calc(100% - ${width}))`, top: `clamp(0px, calc(${centerY}% - ${height} / 2), calc(100% - ${height}))`, width, height });
}
