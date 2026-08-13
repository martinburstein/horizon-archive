import { sanitizePortalEvidence } from "./portalOrientationExercise.js";
import { sanitizePromptEvidence } from "./promptLayerExercise.js";
import { deriveResponsiveEvidence, FIRST_RUN_RESPONSIVE_LAYOUTS } from "./responsiveImageProjection.js";

export const BORROWED_LIGHT_WALL_PATH = "Visual Direction/Production Masters/2026-08-12-first-run-host11/host11-wall-of-borrowed-light-master-v1.png";
export const BORROWED_LIGHT_WALL_SOURCE_URL = BORROWED_LIGHT_WALL_PATH;
const emptyRect = Object.freeze({ x: null, y: null, width: null, height: null });
const emptyRelation = Object.freeze({ ...emptyRect, centerX: null, centerY: null });
const emptyLayouts = Object.freeze({ desktop: null, laptop: null, narrow: null, effective200: null, retained320x180: null, retained320x240: null });

export const BORROWED_LIGHT_WALL_REGISTRY = Object.freeze({
  source: Object.freeze({ enabled: true, path: BORROWED_LIGHT_WALL_PATH, sha256: "562273619e50ca4de632ba8bd6437e776eda0d789385498a3deede45ecf6f74a", byteLength: 16856674, width: 3840, height: 2160, format: "png", color: "opaque-srgb-8", attemptId: "H11-1" }),
  receivingWall: Object.freeze({ x: 610, y: 0, width: 3190, height: 1740, centerX: 2205, centerY: 870 }),
  mineralFilm: Object.freeze({ x: 650, y: 190, width: 2470, height: 1280 }),
  apertures: Object.freeze([Object.freeze({ x: 990, y: 1000, width: 260, height: 390 }), Object.freeze({ x: 1580, y: 840, width: 300, height: 520 }), Object.freeze({ x: 2200, y: 1030, width: 270, height: 390 })]),
  returnPaths: Object.freeze([Object.freeze({ x: 650, y: 1010, width: 1170, height: 250 }), Object.freeze({ x: 1860, y: 1120, width: 680, height: 230 })]),
  dryApron: Object.freeze({ x: 300, y: 1350, width: 3500, height: 810 }),
  serviceThroat: Object.freeze({ x: 3110, y: 860, width: 700, height: 650 }),
  semanticTarget: Object.freeze({ x: 560, y: 0, width: 3280, height: 2000 }),
  labelAnchor: Object.freeze({ x: 590, y: 30, width: 3220, height: 1940, insetOuterCss: 3, insetTextCss: 5 }),
  protected: Object.freeze({ host10: null, returnRoute: null, crown: null, host12: null }),
  layouts: emptyLayouts,
});
export const BORROWED_LIGHT_WALL_PROVENANCE = Object.freeze({ sha256: "562273619e50ca4de632ba8bd6437e776eda0d789385498a3deede45ecf6f74a", byteLength: 16856674, promptId: "HOST11-GEN-PROMPT-H11-1", promptBytes: 1301, promptSha256: "0e32cea1cbab100ee44ec2fd502cf1eaab0a97d029eb3504ae9bcad1c9949d92", cliSha256: "c2cdb05244ad9a3dcb8731988790ea6a06a59ab3c062c0f872b35f4ad7d20b05" });
export const BORROWED_LIGHT_WALL_COPY = Object.freeze({
  name: "Wall of Borrowed Light",
  unseen: "Borrowed daylight crosses a mineral skin, enters three apertures, and returns at changed angles above the dry apron.",
  available: "The dry apron reaches the receiving wall and its off-axis service throat. The wall generates no light of its own.",
  portalInProgress: "The same borrowed light crosses the wall while Portal Orientation evidence remains in progress.",
  promptInProgress: "The receiving wall remains unchanged while Prompt Layers evidence remains in progress.",
  missed: "The wall does not address you. Recheck the received light, aperture paths, dry apron, and off-axis throat.",
  mastered: "Both records are complete. Borrowed light still returns from the wall without writing or response.",
  returned: "The wall receives the same light and returns it at the same angles.",
  nextBoundary: "Continue through the single dry service route after both records are complete.",
  alt: "A vast pale mineral wall with three recessed apertures redirecting natural reflected light above a broad dry apron and an off-center service tunnel.",
});

const prompts = Object.freeze({
  "H11-1": [1301, "0e32cea1cbab100ee44ec2fd502cf1eaab0a97d029eb3504ae9bcad1c9949d92"], "H11-2": [1135, "e5ef2db8254afcb94c3eb3932aff936723860c3257f7429f4a9399c9f714c6e9"], "H11-3": [1052, "f5b81e19c9e0ab53ac1a98c1169c95d77b3fb1349ca2757362ea3e999051daeb"], "H11-4": [985, "4bdb6ed47c2aa58f23a63ed50ff41f6923708f4001e235e3ebea699350298c59"], "H11-5": [983, "088d1a86ebe438bab1c9b8c5dcdec529b21efacfab3f9ea8857d8e0736ac5f1f"], "H11-6": [976, "a6c84928b90ddcf25f4ffb4d1386d2a9640d1dc63fc0af026d18c2e876fa9768"], "H11-7": [958, "8fb6895a0dc751a1fe639e8a0c3eea9063d00d75c5f435e182bfa04c201b2580"], "H11-8": [987, "7de21a9becfef66993f068f07ac443fd3b781677a99271d76aa1ade144dd9ffc"], "H11-9": [987, "d2c0ea31398cf7bb3ad53d9d33a7a1f5ce54c05094669e454e24ee2b8bbcb2d3"], "H11-10": [974, "4b6a5a1c59dac2889377ade3ddb7864af826f5f74d3e111ead57e0bff640aafe"],
});
const finite = (value) => typeof value === "number" && Number.isFinite(value);
const rect = (value) => value && ["x", "y", "width", "height"].every((key) => finite(value[key])) && value.width > 0 && value.height > 0 && value.x >= 0 && value.y >= 0 && value.x + value.width <= 3840 && value.y + value.height <= 2160;

export function deriveBorrowedLightWallResponsiveEvidence(registry = BORROWED_LIGHT_WALL_REGISTRY) { if (!registry?.receivingWall || !registry?.semanticTarget) return null; const protectedRects = Object.values(registry.protected ?? {}).filter(rect); const essential = [registry.mineralFilm, ...(registry.apertures ?? []), ...(registry.returnPaths ?? []), registry.dryApron, registry.serviceThroat]; return Object.freeze(Object.fromEntries(Object.entries(FIRST_RUN_RESPONSIVE_LAYOUTS).map(([id, viewport]) => [id, deriveResponsiveEvidence({ viewport, relation: registry.receivingWall, semanticTarget: registry.semanticTarget, essentialRects: essential, protectedRects, objectFit: "cover", objectPosition: "50% 50%" })]))); }
export function isBorrowedLightWallSourceIdentityPass(source = BORROWED_LIGHT_WALL_REGISTRY.source, provenance = BORROWED_LIGHT_WALL_PROVENANCE) { const prompt = prompts[source?.attemptId]; return source?.enabled === true && source.path === BORROWED_LIGHT_WALL_PATH && source.width === 3840 && source.height === 2160 && source.format === "png" && source.color === "opaque-srgb-8" && prompt != null && Number.isInteger(source.byteLength) && source.byteLength > 0 && source.byteLength <= 30000000 && /^[0-9a-f]{64}$/.test(source.sha256 ?? "") && provenance?.byteLength === source.byteLength && provenance?.sha256 === source.sha256 && provenance?.promptId === `HOST11-GEN-PROMPT-${source.attemptId}` && provenance?.promptBytes === prompt[0] && provenance?.promptSha256 === prompt[1] && provenance?.cliSha256 === "c2cdb05244ad9a3dcb8731988790ea6a06a59ab3c062c0f872b35f4ad7d20b05"; }
export function isBorrowedLightWallMeasurementPass(registry = BORROWED_LIGHT_WALL_REGISTRY) { const { receivingWall, mineralFilm, apertures, returnPaths, dryApron, serviceThroat, semanticTarget, labelAnchor } = registry ?? {}; if (!rect(receivingWall) || !finite(receivingWall.centerX) || !finite(receivingWall.centerY) || receivingWall.centerX !== receivingWall.x + receivingWall.width / 2 || receivingWall.centerY !== receivingWall.y + receivingWall.height / 2) return false; if (![mineralFilm, dryApron, serviceThroat, semanticTarget, labelAnchor].every(rect) || !Array.isArray(apertures) || apertures.length < 3 || !apertures.every(rect) || !Array.isArray(returnPaths) || returnPaths.length < 2 || !returnPaths.every(rect)) return false; if (labelAnchor.insetOuterCss !== 3 || labelAnchor.insetTextCss !== 5) return false; const evidence = deriveBorrowedLightWallResponsiveEvidence(registry); return evidence != null && Object.values(evidence).every((value) => value != null && value.relation.retainedArea >= .95 && value.essentialCentersVisible && value.target.width >= 44 && value.target.height >= 44 && value.target.contained && value.semanticContainsPhysicalCenter && value.protectedOverlap === 0); }
export function isBorrowedLightWallLawful({ predecessorComplete, registry = BORROWED_LIGHT_WALL_REGISTRY, provenance = BORROWED_LIGHT_WALL_PROVENANCE, decodedImage } = {}) { return predecessorComplete === true && isBorrowedLightWallSourceIdentityPass(registry.source, provenance) && isBorrowedLightWallMeasurementPass(registry) && decodedImage?.complete === true && decodedImage.naturalWidth === 3840 && decodedImage.naturalHeight === 2160; }
export function deriveBorrowedLightWallState({ portalEvidence, promptEvidence, ...guard } = {}) { if (!isBorrowedLightWallLawful(guard)) return "hidden"; if (portalEvidence == null && promptEvidence == null) return "available"; const portal = sanitizePortalEvidence(portalEvidence); const prompt = sanitizePromptEvidence(promptEvidence); if ((portalEvidence != null && !portal) || (promptEvidence != null && !prompt)) return "hidden"; if (portal?.masteryStatus === "mastered" && prompt?.masteryStatus === "mastered") return "complete"; if (portal?.masteryStatus === "remediation_required" || prompt?.masteryStatus === "remediation_required") return "remediation_required"; return "in_progress"; }
export function isLegacyHost11LessonLauncherVisible(source = BORROWED_LIGHT_WALL_REGISTRY.source) { return source?.enabled !== true; }
export function getBorrowedLightWallHotspot(registry = BORROWED_LIGHT_WALL_REGISTRY) { if (!isBorrowedLightWallMeasurementPass(registry)) return null; const target = registry.semanticTarget; const centerX = (target.x + target.width / 2) / 38.4; const centerY = (target.y + target.height / 2) / 21.6; const width = `max(${target.width / 38.4}%, 44px)`; const height = `max(${target.height / 21.6}%, 44px)`; return Object.freeze({ left: `clamp(0px, calc(${centerX}% - ${width} / 2), calc(100% - ${width}))`, top: `clamp(0px, calc(${centerY}% - ${height} / 2), calc(100% - ${height}))`, width, height }); }
