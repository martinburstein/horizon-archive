import { useLayoutEffect, useRef } from "react";
import {
  OFFSET_REACH_TRUTHFUL_WORKSPACE_LABEL,
  offsetReachActions,
  offsetReachObservationIds,
  offsetReachRegions,
  resolveOffsetReachWorldScene,
} from "./OffsetReachNormal.js";
import offsetReachPanorama from "../../Visual Direction/Production Masters/2026-08-01-rp008-offset-reach-runtime/sc09-offset-reach-panorama-runtime-master-v4.webp";
import offsetReachRelationDetail from "../../Visual Direction/Production Masters/2026-08-01-rp008-offset-reach-runtime/sc09-offset-reach-relation-detail-runtime-master-v1.webp";
import { useEffect, useState } from "react";
import counterexampleCoreImage from "../../Visual Direction/Production Masters/2026-08-14-first-run-host31/host31-environment-master-v1.png";
import mineralIndexSheathImage from "../../Visual Direction/Production Masters/2026-08-14-first-run-host32/host32-environment-master-v1.png";
import { COUNTEREXAMPLE_CORE_COPY, COUNTEREXAMPLE_CORE_REGISTRY, MINERAL_INDEX_SHEATH_COPY, MINERAL_INDEX_SHEATH_REGISTRY, deriveCounterexampleCoreState, deriveMineralIndexSheathState } from "./offsetHosts.js";

const host31Groups=new Set(["or00_orientation","or10_observations","or20_python_primary","or20_python_trace","or20_python_transfer"]);
function useDecodedImage(enabled,src){const[decoded,setDecoded]=useState(null);useEffect(()=>{if(!enabled){setDecoded(null);return undefined;}let connected=true;const image=new Image();image.onload=()=>connected&&setDecoded({complete:image.complete,naturalWidth:image.naturalWidth,naturalHeight:image.naturalHeight});image.onerror=()=>connected&&setDecoded(null);image.src=src;return()=>{connected=false;image.onload=null;image.onerror=null;};},[enabled,src]);return decoded;}

const headingCopy = {
  or00_orientation: "Offset Reach",
  or10_observations: "Inspect six equal offset observations",
  or20_python_primary: "Derive a bounded JSON scope summary",
  or20_python_trace: "Trace the JSON method",
  or20_python_transfer: "Transfer the bounded JSON method",
  or20_ai_primary: "Select information-extraction techniques",
  or20_ai_retrieval: "Retrieve the technique boundary",
  or20_ai_transfer: "Transfer the technique boundary",
  or20_selection_explanation: "Explain technique selection",
  or20_inference_explanation: "Explain the inference limit",
  or20_repair: "Review incomplete dimensions",
  or20_review: "Review retained local association and independent offset responsibilities",
  or20_save: "Save a bounded expedition note",
  or20_transaction: "Verify the local transaction",
  or20_save_recovery: "Recover the local save",
  or20_rollback_unverified: "Local transaction hold",
  or30_restore: "OR-30 verified restore",
};

const introductionCopy = {
  or00_orientation: "The retained local association remains valid while an immense reach exposes additional contact, non-contact, cross-family contact, unavailable, and stewardship cases without verdict.",
  or10_observations: "Record six equal physical observations in any order. Recurrence is not universal; non-contact is not separation; cross-family contact is not equivalence; unavailable evidence stays unavailable.",
  or20_python_primary: "Decode supplied sanitized JSON in memory, derive only the bounded ten-key summary, encode with sorted keys, decode once, and retain no private work.",
  or20_python_trace: "Identify the first decode, record-derived counts, retained local truth, explicit unavailable case, None limits, sorted encode, round trip, and blank retry.",
  or20_python_transfer: "Apply the same bounded JSON method to a genuinely fresh replica. No primary source, decoded records, summary, or result is carried forward.",
  or20_ai_primary: "Course-authored neutral cases distinguish OCR, field extraction, multimodal structured extraction, and extract-enrich-index for search. The scene carries no answer.",
  or20_ai_retrieval: "Retrieve the technique from source modality and requested output shape, not from scenery, confidence, or inferred weakness.",
  or20_ai_transfer: "Apply the distinction to fresh neutral cases. This offline practice performs no live extraction or external operation.",
  or20_selection_explanation: "Explain that source modality and requested output contract select the extraction technique.",
  or20_inference_explanation: "Explain that extracted or missing values establish none of truth, universality, exclusivity, separation, equivalence, unity, cause, or purpose.",
  or20_repair: "Only the named public dimensions remain incomplete. Guidance is answer-free and retry opens a wholly blank form.",
  or20_review: "Six physical observations, three Python records, three information-extraction records, and two explanations remain independent. There is no combined score or world verdict.",
  or20_save: "The preview contains only the strict eleven-key record, retained eight-key summary, thirteen-key note, and eight finalized evidence records. It is a local expedition record only.",
  or20_transaction: "The System is checking strict sanitation, one-key replacement, exact read-back, rollback safety, and unchanged TD-007 through TD-004 bytes.",
  or20_save_recovery: "The prior RP-008 bytes or verified absence were restored and checked. Retry begins without private work.",
  or20_rollback_unverified: "Progression is held because rollback or predecessor equality cannot be proven. No save, route, or success is claimed.",
  or30_restore: "The retained RP-007 summary and bounded offset note restored separately without replay. No universal, exclusive, separation, equivalence, unity, cause, purpose, access, authority, or destination follows.",
};
const observationLabels = {
  [offsetReachObservationIds[0]]: [
    "Familiar continuity trace", offsetReachActions.continuities,
    "The familiar laminated ribbon and cellular mantle remain separately traceable through the wider reach.",
  ],
  [offsetReachObservationIds[1]]: [
    "Recurring familiar contact", offsetReachActions.association,
    "One bounded familiar contact recurs. Recurrence remains local and does not establish a universal rule.",
  ],
  [offsetReachObservationIds[2]]: [
    "Comparable non-contact", offsetReachActions.difference,
    "A comparable exposed passage shows both familiar continuities without visible contact; non-contact does not prove separation.",
  ],
  [offsetReachObservationIds[3]]: [
    "Cross-family contact", offsetReachActions.order,
    "A third material continuity makes one comparable bounded contact with one familiar continuity; contact does not prove equivalence.",
  ],
  [offsetReachObservationIds[4]]: [
    "Unavailable case", offsetReachActions.junction,
    "One externally bounded case remains unavailable. Its boundary is evidence; its contents, access, and purpose are not.",
  ],
  [offsetReachObservationIds[5]]: [
    "Layered stewardship", offsetReachActions.stewardship,
    "Compatible maintenance layers remain visible without a single author, institution, hierarchy, rule, cause, or purpose.",
  ],
};
const actionIds = {
  [offsetReachActions.inspect]: "or00-orient",
  [offsetReachActions.continuities]: "or-observe-familiar-trace",
  [offsetReachActions.association]: "or-observe-recurring-contact",
  [offsetReachActions.difference]: "or-observe-comparable-non-contact",
  [offsetReachActions.order]: "or-observe-cross-family-contact",
  [offsetReachActions.junction]: "or-observe-unavailable-case",
  [offsetReachActions.stewardship]: "or-observe-layered-stewardship",
  [offsetReachActions.pythonPrimary]: "or20-python-primary-submit",
  [offsetReachActions.pythonTrace]: "or20-python-trace-submit",
  [offsetReachActions.pythonTransfer]: "or20-python-transfer-submit",
  [offsetReachActions.visionPrimary]: "or20-ai-primary-submit",
  [offsetReachActions.visionRetrieval]: "or20-ai-retrieval-submit",
  [offsetReachActions.visionTransfer]: "or20-ai-transfer-submit",
  [offsetReachActions.capabilityBoundary]: "or20-selection-explanation-submit",
  [offsetReachActions.relationBoundary]: "or20-inference-explanation-submit",
  [offsetReachActions.retry]: "or20-retry-blank",
  [offsetReachActions.review]: "or20-review",
  [offsetReachActions.save]: "or20-save",
  [offsetReachActions.cancelSave]: "or20-cancel-save",
  [offsetReachActions.retrySave]: "or20-retry-save",
  [offsetReachActions.notation]: "or30-notation",
  [offsetReachActions.returnInterval]: "or-return-braided-verge",
  [offsetReachActions.returnThreshold]: "or-return-city-threshold",
};

const panoramaAlt = "First-person view across the immense Offset Reach. A translucent laminated glass-ceramic ribbon and a dark cellular mineral mantle remain separately traceable through one recurring bounded contact and a broad open offset. A fan of thick fractured refractory mineral vanes meets the ribbon at one bounded contact while an opaque peripheral mass remains closed.";

const detailAltByCropId = {
  "sc09-detail-recurring-contact": "Flat-on material view of one ordinary bounded contact between the laminated glass-ceramic ribbon and cellular mineral mantle; both continuities remain distinct.",
  "sc09-detail-non-contact": "Flat-on material view of the familiar continuities remaining visible around a broad solid mineral offset without visible contact; the offset establishes no separation.",
  "sc09-detail-cross-family": "Flat-on material view of a rigid mauve sintered-mineral continuity touching the glass-ceramic ribbon at one small point while broad solid host rock separates it from the cellular mantle.",
};

function optionLabel(value) {
  return String(value).replaceAll("_", " ");
}

function OffsetReachForm({ form, onFieldChange }) {
  if (!form) return null;
  if (form.kind === "python") {
    return (
      <div className="offset-form-grid">
        <p className="offset-workspace-truth">{OFFSET_REACH_TRUTHFUL_WORKSPACE_LABEL}</p>
        <div className="offset-scaffold" aria-label="Supplied sanitized JSON replica">
          <strong>Supplied sanitized relation values and interpretation limits</strong>
          <pre>{JSON.stringify(form.scaffold.relations, null, 2)}</pre>
          <p>{form.scaffold.interpretationLimits.join(" · ")}</p>
        </div>
        <label>
          <span>Learner-owned approved JSON fragment</span>
          <textarea
            id={form.form === "primary" ? "or20-python-primary-editor" : "or20-python-transfer-editor"}
            rows="14"
            spellCheck="false"
            aria-describedby="offset-workspace-limit"
            onChange={(event) => onFieldChange("learnerSource", event.target.value)}
          />
        </label>
        <p id="offset-workspace-limit">Session-memory sanitized replicas only. No file, browser persistence, network, arbitrary Python, live service, or world operation.</p>
      </div>
    );
  }
  if (form.kind === "trace") {
    return (
      <div className="offset-form-grid">
        {form.fieldIds.map((id, index) => (
          <label key={id}>
            <span>{optionLabel(id)}</span>
            <select
              id={index === 0 ? "or20-python-trace-first" : undefined}
              defaultValue=""
              onChange={(event) => onFieldChange(id, event.target.value)}
            >
              <option value="" disabled>Select one</option>
              {form.options[id].map((value) => <option key={value} value={value}>{optionLabel(value)}</option>)}
            </select>
          </label>
        ))}
      </div>
    );
  }
  if (form.kind === "vision") {
    return (
      <div className="offset-cases">
        {form.cases.map((item, index) => (
          <fieldset key={item.id}>
            <legend>{item.id}: {item.prompt}</legend>
            {form.dimensions.map((dimension, dimensionIndex) => (
              <label key={dimension}>
                <span>{optionLabel(dimension)}</span>
                <select
                  id={index === 0 && dimensionIndex === 0 ? `or20-ai-${form.form}-first` : undefined}
                  defaultValue=""
                  onChange={(event) => onFieldChange(`${item.id}.${dimension}`, event.target.value)}
                >
                  <option value="" disabled>Select one</option>
                  {form.options[dimension].map((value) => <option key={value} value={value}>{optionLabel(value)}</option>)}
                </select>
              </label>
            ))}
          </fieldset>
        ))}
      </div>
    );
  }
  if (form.kind === "explanation") {
    const capability = form.form === "capabilityBoundary";
    return (
      <label>
        <span>{capability ? "Source and output contract technique-selection boundary" : "Extracted or missing value inference boundary"}</span>
        <select
          id={capability ? "or20-selection-explanation-field" : "or20-inference-explanation-field"}
          defaultValue=""
          onChange={(event) => onFieldChange(form.form, event.target.value)}
        >
          <option value="" disabled>Select one</option>
          {form.options.map((value) => <option key={value} value={value}>{optionLabel(value)}</option>)}
        </select>
      </label>
    );
  }
  return null;
}

export function OffsetReach({ state, onAction, onFieldChange }) {
  const rootRef = useRef(null);
  const host31DecodedImage=useDecodedImage(COUNTEREXAMPLE_CORE_REGISTRY.source.enabled,counterexampleCoreImage);
  const host32DecodedImage=useDecodedImage(MINERAL_INDEX_SHEATH_REGISTRY.source.enabled,mineralIndexSheathImage);
  const scene = resolveOffsetReachWorldScene(state);
  const isDetail = scene?.role === "SC-09-RELATION-DETAIL-MASTER";
  const alt = isDetail ? detailAltByCropId[scene?.cropId] : panoramaAlt;
  const releasedImageSource=isDetail?offsetReachRelationDetail:offsetReachPanorama;
  const host31State=deriveCounterexampleCoreState({decodedImage:host31DecodedImage});
  const host31NativeActive=scene?.sceneId==="SC-09"&&host31State!=="hidden"&&host31Groups.has(state.activeGroup);
  const host32State=deriveMineralIndexSheathState({decodedImage:host32DecodedImage});
  const host32NativeActive=scene?.sceneId==="SC-09"&&host32State!=="hidden"&&!host31NativeActive;
  const imageSource=host32NativeActive?mineralIndexSheathImage:host31NativeActive?counterexampleCoreImage:releasedImageSource;
  const selectedAlt=host32NativeActive?MINERAL_INDEX_SHEATH_COPY.alt:host31NativeActive?COUNTEREXAMPLE_CORE_COPY.alt:alt;
  const sourceName = host32NativeActive
    ? "host32-environment-master-v1.png"
    : host31NativeActive
    ? "host31-environment-master-v1.png"
    : isDetail
    ? "sc09-offset-reach-relation-detail-runtime-master-v1.webp"
    : "sc09-offset-reach-panorama-runtime-master-v4.webp";

  useLayoutEffect(() => {
    const root = rootRef.current;
    const target = root?.querySelector(`#${CSS.escape(state.focusIntent?.target ?? state.headingId)}`)
      ?? root?.querySelector(`#${CSS.escape(state.headingId)}`);
    target?.focus?.({ preventScroll: true });
  }, [state.activeGroup, state.focusIntent?.target, state.headingId]);

  const observations = new Set(state.recordedObservationIds ?? []);
  const observationActions = new Set(Object.values(observationLabels).map((entry) => entry[1]));
  const renderedActions = state.activeGroup === "or10_observations"
    ? state.availableActions.filter((action) => !observationActions.has(action))
    : state.availableActions;

  return (
    <main
      className="offset-verge"
      data-active-group={state.activeGroup}
      data-scene-id={scene?.sceneId}
      data-scene-role={scene?.role}
      data-crop-id={scene?.cropId}
      data-counterexample-core-state={host31State}
      data-counterexample-core-native-active={host31NativeActive?"true":undefined}
      data-mineral-index-sheath-state={host32State}
      data-mineral-index-sheath-native-active={host32NativeActive?"true":undefined}
      ref={rootRef}
      onKeyDown={(event) => {
        if (state.activeGroup === "or20_save" && event.key === "Escape") {
          event.preventDefault();
          onAction(offsetReachActions.cancelSave, event);
        }
      }}
    >
      <figure className={`offset-world ${isDetail ? "is-detail" : "is-panorama"}`}>
        <img
          src={imageSource}
          alt={selectedAlt}
          data-image-role={scene?.role}
          data-runtime-source-master={sourceName}
          data-counterexample-core-source={host31NativeActive?COUNTEREXAMPLE_CORE_REGISTRY.source.path:undefined}
          data-mineral-index-sheath-source={host32NativeActive?MINERAL_INDEX_SHEATH_REGISTRY.source.path:undefined}
        />
        <figcaption>
          Expedition view only. Retained local association, recurring contact, comparable
          non-contact, cross-family contact, unavailable evidence, and compatible stewardship
          support bounded description—not universal truth, separation, equivalence, unity,
          cause, purpose, access, authority, or response.
        </figcaption>
      </figure>

      <section className="offset-panel" aria-labelledby={state.headingId}>
        <header className="offset-heading">
          <p className="eyebrow">{state.owner}</p>
          <h1 id={state.headingId} tabIndex="-1">{headingCopy[state.activeGroup]}</h1>
        </header>
        <p>{introductionCopy[state.activeGroup]}</p>
        <p className="offset-boundary">
          SANITIZED PRECOMPUTED REPLICAS ONLY · OFFLINE COURSE-AUTHORED PRACTICE ·
          NO LIVE EXTRACTION, FILE, SERVICE, ACCESS, AUTHORITY, EXAM GUARANTEE,
          EXTERNAL ACTION, OR WORLD RESPONSE
        </p>

        {state.activeGroup === "or10_observations" && (
          <div>
          <h2 id="or10-observation-peer-heading" tabIndex="-1">Six equal observations</h2>
          <ul className="offset-observations" aria-label="Six equal material observations">
            {offsetReachObservationIds.map((id) => {
              const [label, action, description] = observationLabels[id];
              const recorded = observations.has(id);
              return (
                <li key={id}>
                  <button
                    id={actionIds[action]}
                    type="button"
                    data-action-id={action}
                    data-region-id={offsetReachRegions[id].id}
                    data-recorded={recorded ? "true" : "false"}
                    onClick={(event) => onAction(action, event)}
                  >
                    <strong>{label}</strong>
                    <span>{recorded ? "Recorded" : "Available"}</span>
                  </button>
                  <p>{description}</p>
                </li>
              );
            })}
          </ul>
          </div>
        )}

        <OffsetReachForm key={state.activeGroup} form={state.form} onFieldChange={onFieldChange} />

        {state.failedPublicIds?.length > 0 && (
          <div className="offset-errors" role="note">
            <strong>Incomplete public dimensions</strong>
            <ul>{state.failedPublicIds.map((id) => <li key={id}>{optionLabel(id)}</li>)}</ul>
          </div>
        )}

        {state.reviewRows?.length > 0 && (
          <ul className="offset-review" aria-label="Retained summary plus fourteen independent responsibilities">
            {state.reviewRows.map((row) => (
              <li key={row.id}><strong>{row.owner}</strong><span>{row.state}</span></li>
            ))}
          </ul>
        )}

        {state.activeGroup === "or20_save" && (
          <p className="offset-preview-limit">
            Local expedition record only — no world, route, service, Microsoft, exam, or authority effect.
            Exact schema: eleven root keys, eight retained-summary keys, thirteen note keys, eight evidence records.
          </p>
        )}

        {state.note && (
          <section className="offset-note" aria-label="Restored bounded expedition note">
            <h2>Retained summary and bounded offset note</h2>
            <dl>
              <div><dt>Retained RP-007 account</dt><dd>The recurrent exposed association remains separately valid and unchanged.</dd></div>
              <div><dt>Recurring contact</dt><dd>One familiar contact recurs without becoming universal.</dd></div>
              <div><dt>Comparable non-contact</dt><dd>One exposed passage has no visible contact and does not establish separation.</dd></div>
              <div><dt>Cross-family contact</dt><dd>One third continuity contacts one familiar continuity without equivalence.</dd></div>
              <div><dt>Unavailable case</dt><dd>The external boundary remains complete evidence; contents and access remain unavailable.</dd></div>
              <div><dt>Stewardship</dt><dd>Compatible layers remain visible without one author, institution, hierarchy, cause, or purpose.</dd></div>
            </dl>
          </section>
        )}

        <p
          id={state.statusRegionId}
          role="status"
          aria-live="polite"
          aria-atomic="true"
          data-status-id={state.statusMessageId}
        >
          {state.statusMessage}
        </p>

        <div className="offset-actions" aria-label="Current actions">
          {renderedActions.map((action) => (
            <button
              key={action}
              id={actionIds[action]}
              type="button"
              data-action-id={action}
              onClick={(event) => onAction(action, event)}
            >
              {action}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
