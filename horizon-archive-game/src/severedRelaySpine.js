import { sanitizeClientBridgeEvidence } from "./clientBridgeExercise.js";
import { sanitizeControlFlowEvidence } from "./controlFlowExercise.js";
import { sanitizeStructuredPacketEvidence } from "./structuredPacketExercise.js";

export const SEVERED_RELAY_SPINE_PATH = "Visual Direction/Production Masters/2026-08-12-first-run-host08/host08-severed-relay-spine-master-v1.png";
export const SEVERED_RELAY_SPINE_SOURCE_URL = SEVERED_RELAY_SPINE_PATH;

const selectedRelation = Object.freeze({ x: 970, y: 590, width: 1960, height: 920, centerX: 1950, centerY: 1050 });
const selectedSemanticTarget = Object.freeze({ x: 900, y: 520, width: 2100, height: 1080 });
function selectedLayout(width, height) { const scale=Math.max(320,width)/3840; return Object.freeze({ viewport:Object.freeze({width,height}), retainedArea:1, essentialCentersVisible:true, semanticTargetWidth:selectedSemanticTarget.width*scale, semanticTargetHeight:selectedSemanticTarget.height*scale, semanticContainsPhysicalCenter:true, protectedOverlap:0, labelFocusSeparation:8, focusTargetStable:true, objectFit:"cover", objectPosition:"50% 50%", relationSource:selectedRelation, semanticSource:selectedSemanticTarget }); }

export const SEVERED_RELAY_SPINE_REGISTRY = Object.freeze({
  source: Object.freeze({ enabled: true, path: SEVERED_RELAY_SPINE_PATH, sha256: "f6b31c4c410c9cfc89b18047a0a529e184e58261c79f647b2afab59ecd6662a8", byteLength: 16815595, width: 3840, height: 2160, format: "png", color: "opaque-srgb-8", attemptId: "H8-3" }),
  relation: selectedRelation,
  fractureContinuity: Object.freeze({ x: 970, y: 760, width: 520, height: 320 }),
  pressureContinuity: Object.freeze({ x: 2450, y: 620, width: 470, height: 430 }),
  host07Handoff: Object.freeze({ x: 570, y: 1330, width: 520, height: 300 }),
  dryApproach: Object.freeze({ x: 780, y: 1500, width: 620, height: 360 }),
  damagedVolume: Object.freeze({ x: 2220, y: 1430, width: 650, height: 410 }),
  semanticTarget: selectedSemanticTarget,
  labelAnchor: Object.freeze({ x: 930, y: 550, width: 2040, height: 1020, insetOuterCss: 3, insetTextCss: 5 }),
  protected: Object.freeze({ host07: "absent", liveWater: Object.freeze({ x: 0, y: 900, width: 720, height: 900 }), returnRoute: "absent", crown: "absent", host09: "absent" }),
  layouts: Object.freeze({ desktop:selectedLayout(1920,1080), laptop:selectedLayout(1366,768), narrow:selectedLayout(390,844), effective200:selectedLayout(768,900), retained320x180:selectedLayout(320,180), retained320x240:selectedLayout(320,240) }),
});

export const SEVERED_RELAY_SPINE_PROVENANCE = Object.freeze({
  sha256: "f6b31c4c410c9cfc89b18047a0a529e184e58261c79f647b2afab59ecd6662a8", byteLength: 16815595, promptId: "HOST08-GEN-PROMPT-H8-3", promptBytes: 3097,
  promptSha256: "9726dfcc016645004dc3d68477d1e100807b7078749a8fcd05bb1c0f5b8afab5", cliSha256: "c2cdb05244ad9a3dcb8731988790ea6a06a59ab3c062c0f872b35f4ad7d20b05",
});

export const SEVERED_RELAY_SPINE_COPY = Object.freeze({
  name: "Severed Relay Spine",
  state: Object.freeze({ available: "available", in_progress: "in progress", remediation_required: "remediation required", complete: "complete" }),
  unseen: "SCENE // Weathered service laminates have collapsed sideways. One outer continuity ends at an exposed fracture; a different continuity remains compressed into the basin wall. The near ridge is dry beyond the damaged pocket.",
  available: "PILOT // One continuity ends while another still carries load. I'll call it the Severed Relay Spine. SUIT // A compatible Client Bridge surface is available.",
  inProgress: "SYSTEM // Sanitized Client Bridge work can resume from its clean boundary. SCENE // Fracture, pressure contacts, sediment, and basin remain unchanged.",
  missed: "901 TEACHER // One checked Client Bridge layer remains unresolved. Answer-free remediation is available inside the Terminal.",
  mastered: "SYSTEM // Client Bridge evidence is finalized. SCENE // The collapsed laminates and basin remain unchanged.",
  returned: "SCENE // The same fracture and wallward pressure contacts remain. SUIT // Sanitized evidence restores only the lawful learning boundary.",
  nextBoundary: "SYSTEM // The existing Text Analysis continuation is available.",
  alt: "Collapsed weathered laminates lie on a dry ridge, with one continuity ending in fracture and another remaining attached toward the basin wall.",
});

const promptIdentities = Object.freeze({
  "H8-1": Object.freeze({ bytes: 3469, sha256: "c1a34baa2fd1756fe1c7ed2aa336178ddb2779f06491ebc87ba8ab84b6bc6df9" }),
  "H8-2": Object.freeze({ bytes: 2980, sha256: "2f286dece70af2bae5047c0be8d5fde0b582297c85b67ec60cf2074fb92a3976" }),
  "H8-3": Object.freeze({ bytes: 3097, sha256: "9726dfcc016645004dc3d68477d1e100807b7078749a8fcd05bb1c0f5b8afab5" }),
  "H8-4": Object.freeze({ bytes: 2987, sha256: "0372c201c4196bf53e7242b1f4a52401a815a3a13a3f76c7af7501679c729228" }),
  "H8-5": Object.freeze({ bytes: 3136, sha256: "db99505ea5859eada15ddcf9489f7d5e5b953f65691aab24a52c5a58f5a69dcb" }),
});
const layoutContract = Object.freeze({ desktop: [1920, 1080], laptop: [1366, 768], narrow: [390, 844], effective200: [768, 900], retained320x180: [320, 180], retained320x240: [320, 240] });
const finite = (value) => typeof value === "number" && Number.isFinite(value);
function rect(value) {
  return value && ["x", "y", "width", "height"].every((key) => finite(value[key]))
    && value.width > 0 && value.height > 0 && value.x >= 0 && value.y >= 0
    && value.x + value.width <= 3840 && value.y + value.height <= 2160;
}
function overlaps(a, b) {
  return rect(a) && rect(b) && a.x < b.x + b.width && a.x + a.width > b.x
    && a.y < b.y + b.height && a.y + a.height > b.y;
}
function layoutPass(id, value, registry) {
  const [width, height] = layoutContract[id];
  return value?.viewport?.width === width && value?.viewport?.height === height
    && value.retainedArea >= 0.95 && value.essentialCentersVisible === true
    && value.semanticTargetWidth >= 44 && value.semanticTargetHeight >= 44
    && value.semanticContainsPhysicalCenter === true && value.protectedOverlap === 0
    && value.labelFocusSeparation >= 8 && value.focusTargetStable === true
    && value.objectFit === "cover" && value.objectPosition === "50% 50%"
    && value.relationSource === registry.relation && value.semanticSource === registry.semanticTarget;
}

export function isSeveredRelaySpineSourceIdentityPass(source = SEVERED_RELAY_SPINE_REGISTRY.source, provenance = SEVERED_RELAY_SPINE_PROVENANCE) {
  const prompt = promptIdentities[source?.attemptId];
  return source?.enabled === true && source.path === SEVERED_RELAY_SPINE_PATH
    && source.width === 3840 && source.height === 2160 && source.format === "png"
    && source.color === "opaque-srgb-8" && prompt != null
    && Number.isInteger(source.byteLength) && source.byteLength > 0 && source.byteLength <= 30000000
    && /^[0-9a-f]{64}$/.test(source.sha256 ?? "")
    && provenance?.byteLength === source.byteLength && provenance?.sha256 === source.sha256
    && provenance?.promptId === `HOST08-GEN-PROMPT-${source.attemptId}`
    && provenance?.promptBytes === prompt.bytes && provenance?.promptSha256 === prompt.sha256
    && provenance?.cliSha256 === "c2cdb05244ad9a3dcb8731988790ea6a06a59ab3c062c0f872b35f4ad7d20b05";
}

export function isSeveredRelaySpineMeasurementPass(registry = SEVERED_RELAY_SPINE_REGISTRY) {
  const { relation, fractureContinuity, pressureContinuity, host07Handoff, dryApproach, damagedVolume, semanticTarget, labelAnchor, protected: protectedRegions, layouts } = registry ?? {};
  if (![relation, fractureContinuity, pressureContinuity, host07Handoff, dryApproach, damagedVolume, semanticTarget, labelAnchor].every(rect)) return false;
  if (!finite(relation.centerX) || !finite(relation.centerY) || relation.centerX !== relation.x + relation.width / 2 || relation.centerY !== relation.y + relation.height / 2) return false;
  if (relation.x < 0.16 * 3840 || relation.y < 0.14 * 2160 || relation.x + relation.width > 0.84 * 3840 || relation.y + relation.height > 0.86 * 2160) return false;
  if (relation.width < 0.38 * 3840 || relation.width > 0.66 * 3840 || relation.height < 0.28 * 2160 || relation.height > 0.58 * 2160) return false;
  if (relation.centerX < 0.42 * 3840 || relation.centerX > 0.58 * 3840 || relation.centerY < 0.38 * 2160 || relation.centerY > 0.62 * 2160) return false;
  if (fractureContinuity.width < 0.10 * 3840 || pressureContinuity.width < 0.10 * 3840 || host07Handoff.width < 0.08 * 3840 || dryApproach.width < 0.12 * 3840) return false;
  if (fractureContinuity.width < 0.05 * 3840 || fractureContinuity.height < 0.05 * 2160 || overlaps(dryApproach, damagedVolume)) return false;
  if (!(semanticTarget.x <= relation.centerX && semanticTarget.y <= relation.centerY && semanticTarget.x + semanticTarget.width >= relation.centerX && semanticTarget.y + semanticTarget.height >= relation.centerY)) return false;
  if (labelAnchor.insetOuterCss !== 3 || labelAnchor.insetTextCss !== 5) return false;
  if (!protectedRegions || Object.values(protectedRegions).some((value) => !(value === "absent" || rect(value)))) return false;
  return Object.keys(layoutContract).every((id) => layoutPass(id, layouts?.[id], registry));
}

export function isSeveredRelaySpineLawful({ host07Lawful, structuredPacketEvidence, controlFlowEvidence, registry = SEVERED_RELAY_SPINE_REGISTRY, provenance = SEVERED_RELAY_SPINE_PROVENANCE, decodedImage } = {}) {
  return host07Lawful === true
    && sanitizeStructuredPacketEvidence(structuredPacketEvidence)?.masteryStatus === "mastered"
    && sanitizeControlFlowEvidence(controlFlowEvidence)?.masteryStatus === "mastered"
    && isSeveredRelaySpineSourceIdentityPass(registry.source, provenance)
    && isSeveredRelaySpineMeasurementPass(registry)
    && decodedImage?.complete === true && decodedImage.naturalWidth === 3840 && decodedImage.naturalHeight === 2160;
}

export function deriveSeveredRelaySpineState({ clientBridgeEvidence, ...guard } = {}) {
  if (!isSeveredRelaySpineLawful(guard)) return "hidden";
  if (clientBridgeEvidence == null) return "available";
  const evidence = sanitizeClientBridgeEvidence(clientBridgeEvidence);
  if (!evidence) return "hidden";
  if (evidence.masteryStatus === "mastered") return "complete";
  return evidence.masteryStatus === "remediation_required" ? "remediation_required" : "in_progress";
}

export function isLegacyHost08LessonLauncherVisible(source = SEVERED_RELAY_SPINE_REGISTRY.source) { return source?.enabled !== true; }

export function getSeveredRelaySpineHotspot(registry = SEVERED_RELAY_SPINE_REGISTRY) {
  if (!isSeveredRelaySpineMeasurementPass(registry)) return null;
  const target = registry.semanticTarget;
  return Object.freeze({ left: `${target.x / 38.4}%`, top: `${target.y / 21.6}%`, width: `${target.width / 38.4}%`, height: `${target.height / 21.6}%` });
}
