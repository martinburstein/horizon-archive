import { sanitizeExtractionEvidence } from "./extractionWorkloadExercise.js";
import { sanitizeVisualEvidence } from "./visualWorkloadExercise.js";
import { deriveResponsiveEvidence, FIRST_RUN_RESPONSIVE_LAYOUTS } from "./responsiveImageProjection.js";

export const BLIND_CAMERA_WELL_PATH = "Visual Direction/Production Masters/2026-08-12-first-run-host10/host10-blind-camera-well-master-v1.png";
export const BLIND_CAMERA_WELL_SOURCE_URL = null;

const emptyRect = Object.freeze({ x: null, y: null, width: null, height: null });
const emptyRelation = Object.freeze({ ...emptyRect, centerX: null, centerY: null });
const emptyLayouts = Object.freeze({ desktop: null, laptop: null, narrow: null, effective200: null, retained320x180: null, retained320x240: null });

export const BLIND_CAMERA_WELL_REGISTRY = Object.freeze({
  source: Object.freeze({ enabled: false, path: null, sha256: null, byteLength: null, width: null, height: null, format: null, color: null, attemptId: null }),
  hollow: emptyRelation,
  mounts: Object.freeze([]),
  fluidRoutes: Object.freeze([]),
  phaseSurface: emptyRect,
  dryRing: emptyRect,
  semanticTarget: emptyRect,
  labelAnchor: Object.freeze({ ...emptyRect, insetOuterCss: null, insetTextCss: null }),
  protected: Object.freeze({ host09: "absent", returnRoute: "absent", crown: "absent", host11: "absent" }),
  layouts: emptyLayouts,
});

export const BLIND_CAMERA_WELL_PROVENANCE = Object.freeze({ sha256: null, byteLength: null, promptId: null, promptBytes: null, promptSha256: null, cliSha256: null });
export const BLIND_CAMERA_WELL_COPY = Object.freeze({
  name: null, unseen: null, available: null, visualInProgress: null,
  extractionInProgress: null, missed: null, mastered: null, returned: null,
  nextBoundary: null, alt: null,
});

const prompts = Object.freeze({
  "H10-1": Object.freeze({ bytes: 1459, sha256: "c3ffdbf4626d6fc50ab0e63fbdff7659e5b7746d8dcbff80e2d1134d7bf02537" }),
  "H10-2": Object.freeze({ bytes: 1311, sha256: "a4089e93fc16fe2f2801e9469a802847c55c8af3481d7614822e256e6af9d33f" }),
  "H10-3": Object.freeze({ bytes: 1315, sha256: "e3532eb1eca9d0bc927bf6b41fbe0db7f29d7c43482ac8073a97775c1d95cc98" }),
  "H10-4": Object.freeze({ bytes: 1259, sha256: "cfd21a6ef66e11724b2e3d5c9d41f6dc8eec77af977954d6bd272ee3c120740a" }),
});
const finite = (value) => typeof value === "number" && Number.isFinite(value);
const rect = (value) => value && ["x","y","width","height"].every((key) => finite(value[key])) && value.width>0 && value.height>0 && value.x>=0 && value.y>=0 && value.x+value.width<=3840 && value.y+value.height<=2160;
const contains = (outer,inner) => rect(outer)&&rect(inner)&&inner.x>=outer.x&&inner.y>=outer.y&&inner.x+inner.width<=outer.x+outer.width&&inner.y+inner.height<=outer.y+outer.height;

export function deriveBlindCameraWellResponsiveEvidence(registry=BLIND_CAMERA_WELL_REGISTRY) {
  if(!registry?.hollow||!registry?.semanticTarget)return null;
  const protectedRects=Object.values(registry.protected??{}).filter((value)=>value!=="absent");
  const essential=[...(registry.mounts??[]),...(registry.fluidRoutes??[]),registry.phaseSurface,registry.dryRing];
  return Object.freeze(Object.fromEntries(Object.entries(FIRST_RUN_RESPONSIVE_LAYOUTS).map(([id,viewport])=>[id,deriveResponsiveEvidence({viewport,relation:registry.hollow,semanticTarget:registry.semanticTarget,essentialRects:essential,protectedRects,objectFit:"cover",objectPosition:"50% 50%"})])));
}

export function isBlindCameraWellSourceIdentityPass(source=BLIND_CAMERA_WELL_REGISTRY.source, provenance=BLIND_CAMERA_WELL_PROVENANCE) {
  const prompt=prompts[source?.attemptId];
  return source?.enabled===true && source.path===BLIND_CAMERA_WELL_PATH && source.width===3840 && source.height===2160 && source.format==="png" && source.color==="opaque-srgb-8" && prompt!=null && Number.isInteger(source.byteLength) && source.byteLength>0 && source.byteLength<=30000000 && /^[0-9a-f]{64}$/.test(source.sha256??"") && provenance?.byteLength===source.byteLength && provenance?.sha256===source.sha256 && provenance?.promptId===`HOST10-GEN-PROMPT-${source.attemptId}` && provenance?.promptBytes===prompt.bytes && provenance?.promptSha256===prompt.sha256 && provenance?.cliSha256==="c2cdb05244ad9a3dcb8731988790ea6a06a59ab3c062c0f872b35f4ad7d20b05";
}

export function isBlindCameraWellMeasurementPass(registry=BLIND_CAMERA_WELL_REGISTRY) {
  const {hollow,mounts,fluidRoutes,phaseSurface,dryRing,semanticTarget,labelAnchor,protected:protectedRegions}=registry??{};
  if(!rect(hollow)||!finite(hollow.centerX)||!finite(hollow.centerY)||hollow.centerX!==hollow.x+hollow.width/2||hollow.centerY!==hollow.y+hollow.height/2)return false;
  if(!Array.isArray(mounts)||mounts.length<3||!mounts.every(rect)||!Array.isArray(fluidRoutes)||fluidRoutes.length<2||!fluidRoutes.every(rect))return false;
  if(![phaseSurface,dryRing,semanticTarget,labelAnchor].every(rect)||!contains(hollow,phaseSurface)||!contains(semanticTarget,hollow))return false;
  if(labelAnchor.insetOuterCss!==3||labelAnchor.insetTextCss!==5)return false;
  if(!protectedRegions||Object.values(protectedRegions).some((value)=>!(value==="absent"||rect(value))))return false;
  const evidence=deriveBlindCameraWellResponsiveEvidence(registry);
  return evidence!=null && Object.values(evidence).every((value)=>value!=null && value.relation.retainedArea>=.95 && value.essentialCentersVisible && value.target.width>=44 && value.target.height>=44 && value.target.contained && value.semanticContainsPhysicalCenter && value.protectedOverlap===0);
}

export function isBlindCameraWellLawful({predecessorComplete,registry=BLIND_CAMERA_WELL_REGISTRY,provenance=BLIND_CAMERA_WELL_PROVENANCE,decodedImage}={}) {
  return predecessorComplete===true && isBlindCameraWellSourceIdentityPass(registry.source,provenance) && isBlindCameraWellMeasurementPass(registry) && decodedImage?.complete===true && decodedImage.naturalWidth===3840 && decodedImage.naturalHeight===2160;
}

export function deriveBlindCameraWellState({visualEvidence,extractionEvidence,...guard}={}) {
  if(!isBlindCameraWellLawful(guard))return "hidden";
  if(visualEvidence==null&&extractionEvidence==null)return "available";
  const visual=sanitizeVisualEvidence(visualEvidence); const extraction=sanitizeExtractionEvidence(extractionEvidence);
  if((visualEvidence!=null&&!visual)||(extractionEvidence!=null&&!extraction))return "hidden";
  if(visual?.masteryStatus==="mastered"&&extraction?.masteryStatus==="mastered")return "complete";
  if(visual?.masteryStatus==="remediation_required"||extraction?.masteryStatus==="remediation_required")return "remediation_required";
  return "in_progress";
}

export function isLegacyHost10LessonLauncherVisible(source=BLIND_CAMERA_WELL_REGISTRY.source){return source?.enabled!==true;}
export function getBlindCameraWellHotspot(registry=BLIND_CAMERA_WELL_REGISTRY){if(!isBlindCameraWellMeasurementPass(registry))return null;const target=registry.semanticTarget;const centerX=(target.x+target.width/2)/38.4;const centerY=(target.y+target.height/2)/21.6;const width=`max(${target.width/38.4}%, 44px)`;const height=`max(${target.height/21.6}%, 44px)`;return Object.freeze({left:`clamp(0px, calc(${centerX}% - ${width} / 2), calc(100% - ${width}))`,top:`clamp(0px, calc(${centerY}% - ${height} / 2), calc(100% - ${height}))`,width,height});}
