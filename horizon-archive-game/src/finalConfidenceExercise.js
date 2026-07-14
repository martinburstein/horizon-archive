import exercise from "../../curriculum/readiness/SIM-03/exercise.json" with {type:"json"};
import bank from "../../curriculum/readiness/SIM-03/scenario_bank.json" with {type:"json"};
import manifest from "../../curriculum/readiness/SIM-03/manifest.json" with {type:"json"};

export const finalConfidenceExercise=exercise;
export const finalConfidenceItems=bank.items;
export const finalConfidenceDimensions=exercise.dimensions;
export const finalConfidenceManifest=manifest;
export const finalConfidenceDialogDescribedBy="final-confidence-offline-warning final-confidence-text-equivalent";
const norm=value=>String(value??"").trim();
const scoreDimensions=correctness=>finalConfidenceItems.reduce((total,item)=>total+finalConfidenceDimensions.filter(d=>correctness[item.id]?.[d]===true).length,0);
const allObjectivesCovered=correctness=>{const covered=new Set(finalConfidenceItems.filter(item=>finalConfidenceDimensions.every(d=>correctness[item.id]?.[d]===true)).flatMap(item=>item.objective_ids));return manifest.objective_ids.every(id=>covered.has(id));};

export function getFinalConfidenceOptions(id){const index=finalConfidenceItems.findIndex(item=>item.id===id),item=finalConfidenceItems[index],other=finalConfidenceItems[(index+1)%finalConfidenceItems.length];return{decision:[item.decision,other.decision],reason:[item.reason,other.reason]};}
export function evaluateFinalConfidenceItem(id,response){const item=finalConfidenceItems.find(candidate=>candidate.id===id);if(!item)return null;const correctness={decision:norm(response?.decision)===item.decision,reason:norm(response?.reason)===item.reason},passed=Object.values(correctness).every(Boolean);return{correctness,score:Object.values(correctness).filter(Boolean).length,passed,objectiveIds:[...item.objective_ids],domain:item.domain,misconceptionTags:passed?[]:[`review-${item.objective_ids[0].toLowerCase()}`]};}
export function getFinalConfidenceFeedback(item,result){if(!result)return{systemScore:"Awaiting decision and reason.",teacherRemediation:null};return{systemScore:`${result.score}/2 · ${result.passed?"ITEM PASS · both dimensions confirmed.":"ITEM NOT YET COMPLETE."}`,teacherRemediation:result.passed?null:`Pause this form. Route ${item.objective_ids.join(" and ")} through the mapped lesson, retrieve the rule, repair a guided contrast, then retry with blank choices. Confidence does not repair a miss.`};}

export function sanitizeFinalConfidenceEntryEvidence(value){if(!value||typeof value!=="object")return null;return{
  l0603ReadinessState:value.l0603ReadinessState==="ready_for_next_practice_checkpoint"?value.l0603ReadinessState:"not_ready",
  cum01TransferScore:Number.isInteger(value.cum01TransferScore)?value.cum01TransferScore:0,
  sim01Score:Number.isInteger(value.sim01Score)?value.sim01Score:0,
  sim02Score:Number.isInteger(value.sim02Score)?value.sim02Score:0,
  priorSimulationSeparationHours:Number.isFinite(value.priorSimulationSeparationHours)?Math.max(0,value.priorSimulationSeparationHours):0,
  openCriticalMisconceptions:Number.isInteger(value.openCriticalMisconceptions)?Math.max(0,value.openCriticalMisconceptions):1,
  highConfidenceMissesRetested:value.highConfidenceMissesRetested===true,
  officialSourcesReverifiedOn:/^\d{4}-\d{2}-\d{2}$/.test(value.officialSourcesReverifiedOn||"")?value.officialSourcesReverifiedOn:"",
  attemptedOn:/^\d{4}-\d{2}-\d{2}$/.test(value.attemptedOn||"")?value.attemptedOn:"",
};}

export function evaluateFinalConfidenceEntryGate(value){const evidence=sanitizeFinalConfidenceEntryEvidence(value);if(!evidence)return{ready:false,checks:{},failed:["entry evidence missing"],sourceAgeDays:null};const verified=Date.parse(`${evidence.officialSourcesReverifiedOn}T00:00:00Z`),attempted=Date.parse(`${evidence.attemptedOn}T00:00:00Z`),sourceAgeDays=Number.isFinite(verified)&&Number.isFinite(attempted)?Math.round((attempted-verified)/86400000):null;const checks={
  l0603Readiness:evidence.l0603ReadinessState==="ready_for_next_practice_checkpoint",
  cum01Transfer:evidence.cum01TransferScore===16,
  sim01:evidence.sim01Score===24,
  sim02:evidence.sim02Score===24,
  spacing:evidence.priorSimulationSeparationHours>=48,
  criticalMisconceptions:evidence.openCriticalMisconceptions===0,
  highConfidenceRetest:evidence.highConfidenceMissesRetested,
  sourceFreshness:sourceAgeDays!==null&&sourceAgeDays>=0&&sourceAgeDays<=7,
};const failed=Object.entries(checks).filter(([,passed])=>!passed).map(([name])=>name);return{ready:failed.length===0,checks,failed,sourceAgeDays};}

export function sanitizeFinalConfidenceEvidence(value){if(!value||typeof value!=="object"||value.exerciseId!==exercise.exercise_id)return null;const entryEvidence=sanitizeFinalConfidenceEntryEvidence(value.entryEvidence),entryGate=evaluateFinalConfidenceEntryGate(entryEvidence),dimensionCorrectness={};for(const item of finalConfidenceItems){const source=value.dimensionCorrectness?.[item.id];if(source)dimensionCorrectness[item.id]=Object.fromEntries(finalConfidenceDimensions.filter(d=>typeof source[d]==="boolean").map(d=>[d,source[d]]));}const strict=entryGate.ready&&scoreDimensions(dimensionCorrectness)===24&&allObjectivesCovered(dimensionCorrectness);let masteryStatus=["entry_gate_incomplete","in_progress","remediation_required","mastered"].includes(value.masteryStatus)?value.masteryStatus:"entry_gate_incomplete";if(masteryStatus==="mastered"&&!strict)masteryStatus=entryGate.ready?"in_progress":"entry_gate_incomplete";const misconceptionTags=Array.isArray(value.misconceptionTags)?value.misconceptionTags.filter(tag=>typeof tag==="string"&&/^review-ai901-d[12]-o\d+$/.test(tag)).slice(0,15):[];return{exerciseId:exercise.exercise_id,simulationId:manifest.simulation_id,entryEvidence,dimensionCorrectness,objectiveIds:[...manifest.objective_ids],domainMix:{...manifest.domain_mix},attemptCount:Number.isInteger(value.attemptCount)?Math.max(0,value.attemptCount):0,hintLevel:Number.isInteger(value.hintLevel)?Math.max(0,Math.min(3,value.hintLevel)):0,confidence:["low","medium","high"].includes(value.confidence)?value.confidence:null,optionalElapsedSeconds:Number.isInteger(value.optionalElapsedSeconds)?Math.max(0,value.optionalElapsedSeconds):0,misconceptionTags,masteryStatus};}
export function updateFinalConfidenceEvidence(previous,change={}){const base=sanitizeFinalConfidenceEvidence(previous)||sanitizeFinalConfidenceEvidence({exerciseId:exercise.exercise_id}),dimensionCorrectness={...base.dimensionCorrectness};if(change.itemId&&change.correctness)dimensionCorrectness[change.itemId]={...change.correctness};const nextTags=change.clearMisconceptionTags?[]:change.misconceptionTags?[...new Set([...base.misconceptionTags,...change.misconceptionTags])]:base.misconceptionTags;return sanitizeFinalConfidenceEvidence({...base,entryEvidence:change.entryEvidence||base.entryEvidence,dimensionCorrectness,attemptCount:base.attemptCount+(change.incrementAttempt?1:0),hintLevel:Math.max(base.hintLevel,change.hintLevel||0),confidence:change.confidence||base.confidence,optionalElapsedSeconds:Number.isInteger(change.optionalElapsedSeconds)?change.optionalElapsedSeconds:base.optionalElapsedSeconds,misconceptionTags:nextTags,masteryStatus:change.masteryStatus||base.masteryStatus});}
export function deriveFinalConfidenceResume(value){const safe=sanitizeFinalConfidenceEvidence(value),correctness=safe?.dimensionCorrectness||{},index=finalConfidenceItems.findIndex(item=>!finalConfidenceDimensions.every(d=>correctness[item.id]?.[d]===true)),complete=index===-1;return{index:complete?finalConfidenceItems.length-1:index,complete,completedCount:finalConfidenceItems.filter(item=>finalConfidenceDimensions.every(d=>correctness[item.id]?.[d]===true)).length,elapsedSeconds:safe?.optionalElapsedSeconds||0,timingEnabled:Boolean(safe?.optionalElapsedSeconds)};}
