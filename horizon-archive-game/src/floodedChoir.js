import { sanitizeClientBridgeEvidence } from "./clientBridgeExercise.js";
import { sanitizeSpeechEvidence } from "./speechWorkloadExercise.js";
import { sanitizeTextAnalysisEvidence } from "./textAnalysisExercise.js";

export const FLOODED_CHOIR_PATH = "Visual Direction/Production Masters/2026-08-12-first-run-host09/host09-flooded-choir-master-v1.png";
export const FLOODED_CHOIR_SOURCE_URL = null;

const emptyRect = Object.freeze({ x: null, y: null, width: null, height: null });
const emptyRelation = Object.freeze({ ...emptyRect, centerX: null, centerY: null });
const emptyLayouts = Object.freeze({ desktop: null, laptop: null, narrow: null, effective200: null, retained320x180: null, retained320x240: null });

export const FLOODED_CHOIR_REGISTRY = Object.freeze({
  source: Object.freeze({ enabled: false, path: null, sha256: null, byteLength: null, width: null, height: null, format: null, color: null, attemptId: null }),
  family: emptyRelation,
  cavities: Object.freeze([emptyRect, emptyRect, emptyRect]),
  pressureContinuity: emptyRect,
  reflectedLightPair: Object.freeze([emptyRect, emptyRect]),
  noOpticalReturn: emptyRect,
  dryRim: emptyRect,
  wetExclusion: emptyRect,
  distributedCoupling: emptyRect,
  semanticTarget: emptyRect,
  labelAnchor: Object.freeze({ ...emptyRect, insetOuterCss: 3, insetTextCss: 5 }),
  protected: Object.freeze({ host08: null, returnRoute: null, crown: null, host10: null }),
  layouts: emptyLayouts,
});

export const FLOODED_CHOIR_PROVENANCE = Object.freeze({
  sha256: null, byteLength: null, promptId: null, promptBytes: null,
  promptSha256: null, cliSha256: null,
});

export const FLOODED_CHOIR_COPY = Object.freeze({
  name: "Flooded Choir",
  state: Object.freeze({ available: "available", in_progress: "in progress", remediation_required: "remediation required", complete: "complete" }),
  unseen: null, available: null, textInProgress: null, speechInProgress: null,
  missed: null, mastered: null, returned: null, nextBoundary: null, alt: null,
});

const promptIdentities = Object.freeze({
  "H9-1": Object.freeze({ bytes: 3076, sha256: "298287c29b477f8741ca2971dc2e56f28a4bf0a6ba3a4fb3bd68c528db5cc3ce" }),
  "H9-2": Object.freeze({ bytes: 2789, sha256: "80a7735cefa83fe04df03e37ed3cb5487b370e9dad7ffb8576f24585ce4e4409" }),
  "H9-3": Object.freeze({ bytes: 2915, sha256: "62a5b09d0bac3a88f7f69b24fdc82bd46c4822c173d0e69eb73bcc5f4392c207" }),
  "H9-4": Object.freeze({ bytes: 2634, sha256: "8c5c440981b09f2de0dd21b2133cd651b6827cbd80d38bf062092347b3f4036a" }),
  "H9-5": Object.freeze({ bytes: 2867, sha256: "5e868de1da500fc1176ee739e340a6aa3f3ae4cacac1a0c50f7d49c1d502247f" }),
});
const layoutContract = Object.freeze({ desktop: [1920,1080], laptop:[1366,768], narrow:[390,844], effective200:[768,900], retained320x180:[320,180], retained320x240:[320,240] });
const finite = (value) => typeof value === "number" && Number.isFinite(value);
function rect(value) { return value && ["x","y","width","height"].every((key) => finite(value[key])) && value.width>0 && value.height>0 && value.x>=0 && value.y>=0 && value.x+value.width<=3840 && value.y+value.height<=2160; }
function overlaps(a,b) { return rect(a) && rect(b) && a.x<b.x+b.width && a.x+a.width>b.x && a.y<b.y+b.height && a.y+a.height>b.y; }
function contains(container, child) { return rect(container) && rect(child) && child.x>=container.x && child.y>=container.y && child.x+child.width<=container.x+container.width && child.y+child.height<=container.y+container.height; }
function layoutPass(id,value,registry) { const [width,height]=layoutContract[id]; return value?.viewport?.width===width && value?.viewport?.height===height && value.retainedArea>=.95 && value.essentialCentersVisible===true && value.semanticTargetWidth>=44 && value.semanticTargetHeight>=44 && value.semanticContainsPhysicalCenter===true && value.protectedOverlap===0 && value.labelFocusSeparation>=8 && value.focusTargetStable===true && value.objectFit==="cover" && value.objectPosition==="50% 50%" && value.relationSource===registry.family && value.semanticSource===registry.semanticTarget; }

export function isFloodedChoirSourceIdentityPass(source=FLOODED_CHOIR_REGISTRY.source, provenance=FLOODED_CHOIR_PROVENANCE) {
  const prompt=promptIdentities[source?.attemptId];
  return source?.enabled===true && source.path===FLOODED_CHOIR_PATH && source.width===3840 && source.height===2160 && source.format==="png" && source.color==="opaque-srgb-8" && prompt!=null && Number.isInteger(source.byteLength) && source.byteLength>0 && source.byteLength<=30000000 && /^[0-9a-f]{64}$/.test(source.sha256??"") && provenance?.byteLength===source.byteLength && provenance?.sha256===source.sha256 && provenance?.promptId===`HOST09-GEN-PROMPT-${source.attemptId}` && provenance?.promptBytes===prompt.bytes && provenance?.promptSha256===prompt.sha256 && provenance?.cliSha256==="c2cdb05244ad9a3dcb8731988790ea6a06a59ab3c062c0f872b35f4ad7d20b05";
}

export function isFloodedChoirMeasurementPass(registry=FLOODED_CHOIR_REGISTRY) {
  const {family,cavities,pressureContinuity,reflectedLightPair,noOpticalReturn,dryRim,wetExclusion,distributedCoupling,semanticTarget,labelAnchor,protected:protectedRegions,layouts}=registry??{};
  if(!rect(family)||!Array.isArray(cavities)||cavities.length<3||!cavities.every(rect)||!Array.isArray(reflectedLightPair)||reflectedLightPair.length!==2||!reflectedLightPair.every(rect)||![pressureContinuity,noOpticalReturn,dryRim,wetExclusion,distributedCoupling,semanticTarget,labelAnchor].every(rect))return false;
  if(!finite(family.centerX)||!finite(family.centerY)||family.centerX!==family.x+family.width/2||family.centerY!==family.y+family.height/2)return false;
  if(family.x<.24*3840||family.y<.20*2160||family.x+family.width>.76*3840||family.y+family.height>.78*2160)return false;
  if(pressureContinuity.x+pressureContinuity.width/2<.30*3840||pressureContinuity.x+pressureContinuity.width/2>.46*3840||pressureContinuity.y+pressureContinuity.height/2<.48*2160||pressureContinuity.y+pressureContinuity.height/2>.68*2160)return false;
  if(dryRim.y<.66*2160||dryRim.y+dryRim.height>.88*2160||overlaps(dryRim,wetExclusion))return false;
  if(family.centerX<.46*3840||family.centerX>.58*3840||family.centerY<.43*2160||family.centerY>.61*2160)return false;
  if(!cavities.every((cavity)=>contains(family,cavity))||!reflectedLightPair.every((reflection)=>contains(family,reflection))||!contains(family,noOpticalReturn)||!contains(semanticTarget,distributedCoupling))return false;
  if(labelAnchor.insetOuterCss!==3||labelAnchor.insetTextCss!==5)return false;
  if(!protectedRegions||Object.values(protectedRegions).some((value)=>!(value==="absent"||rect(value))))return false;
  return Object.keys(layoutContract).every((id)=>layoutPass(id,layouts?.[id],registry));
}

export function isFloodedChoirLawful({host08Lawful,clientBridgeEvidence,registry=FLOODED_CHOIR_REGISTRY,provenance=FLOODED_CHOIR_PROVENANCE,decodedImage}={}) {
  return host08Lawful===true && sanitizeClientBridgeEvidence(clientBridgeEvidence)?.masteryStatus==="mastered" && isFloodedChoirSourceIdentityPass(registry.source,provenance) && isFloodedChoirMeasurementPass(registry) && decodedImage?.complete===true && decodedImage.naturalWidth===3840 && decodedImage.naturalHeight===2160;
}

export function deriveFloodedChoirState({textAnalysisEvidence,speechEvidence,...guard}={}) {
  if(!isFloodedChoirLawful(guard))return "hidden";
  if(textAnalysisEvidence==null&&speechEvidence==null)return "available";
  const text=sanitizeTextAnalysisEvidence(textAnalysisEvidence); const speech=sanitizeSpeechEvidence(speechEvidence);
  if((textAnalysisEvidence!=null&&!text)||(speechEvidence!=null&&!speech))return "hidden";
  if(text?.masteryStatus==="mastered"&&speech?.masteryStatus==="mastered")return "complete";
  if(text?.masteryStatus==="remediation_required"||speech?.masteryStatus==="remediation_required")return "remediation_required";
  return "in_progress";
}

export function isLegacyHost09LessonLauncherVisible(source=FLOODED_CHOIR_REGISTRY.source){return source?.enabled !== true;}
export function getFloodedChoirHotspot(registry=FLOODED_CHOIR_REGISTRY){if(!isFloodedChoirMeasurementPass(registry))return null;const target=registry.semanticTarget;return Object.freeze({left:`${target.x/38.4}%`,top:`${target.y/21.6}%`,width:`${target.width/38.4}%`,height:`${target.height/21.6}%`});}
