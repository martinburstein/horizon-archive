import { useLayoutEffect, useRef } from "react";
import {
  OCCLUDED_FOLD_TRUTHFUL_WORKSPACE_LABEL,
  occludedFoldActions,
  occludedFoldObservationIds,
  occludedFoldRegions,
  resolveOccludedFoldWorldScene,
} from "./OccludedFoldNormal.js";

const headingCopy = {
  of00_orientation: "Occluded Fold orientation",
  of10_observations: "Survey six equal exposed-edge records",
  of20_python_primary: "Build a bounded edge ledger from sanitized replicas",
  of20_python_trace: "Trace the environment and secret boundary",
  of20_python_transfer: "Transfer the bounded environment method",
  of20_prompt_primary: "Assign persistent and current prompt responsibilities",
  of20_prompt_retrieval: "Retrieve the prompt responsibility boundary",
  of20_prompt_transfer: "Transfer the prompt responsibility boundary",
  of20_system_user_explanation: "Explain system and user prompt ownership",
  of20_truth_authority_explanation: "Explain the truth and authority limit",
  of20_recovery: "Review an incomplete responsibility",
  of20_review: "RECONCILE THREE SEPARATELY ATTRIBUTABLE EXPEDITION RECORDS WITHOUT INFERRING AN INTERNAL TOPOLOGY",
  of20_save: "Save the bounded edge ledger",
  of20_transaction: "Verify the local transaction",
  of20_save_recovery: "Recover the local save",
  of20_rollback_unverified: "Local transaction hold",
  of30_restore: "OF-30 verified restore",
};

const introductionCopy = {
  of00_orientation: "Three known continuities reach distinct receiving faces while the immense opaque interior remains unavailable and unchanged.",
  of10_observations: "Record six equal exposed-edge facts in any order. Correspondence remains bounded; unmatched and ambiguous records remain ordinary; unavailable evidence stays unavailable.",
  of20_python_primary: "Inspect approved source shape and derive a bounded ledger from session-only sanitized replicas without reading a real environment or secret.",
  of20_python_trace: "Identify the allowlisted nonsecret configuration read, unchanged environment and records, four separate evidence classes, and unsupported null limits.",
  of20_python_transfer: "Apply the same bounded method to a genuinely fresh replica. No primary source, records, ledger, or result is carried forward.",
  of20_prompt_primary: "Neutral course-authored cases distinguish persistent system responsibilities from the current user task and supplied input.",
  of20_prompt_retrieval: "Retrieve prompt ownership from scope and responsibility, not scenery, confidence, or success display.",
  of20_prompt_transfer: "Apply the boundary to fresh neutral cases. This offline practice performs no live model, agent, tool, or external operation.",
  of20_system_user_explanation: "Explain the separate persistent-system and current-user responsibility boundary.",
  of20_truth_authority_explanation: "Explain that prompt quality and grounding neither prove output truth nor authorize live action.",
  of20_recovery: "Only the named public dimensions remain incomplete. Guidance is answer-free and retry opens a wholly blank form.",
  of20_review: "Retained RP-007, retained RP-008, and candidate RP-009 records remain ordered, separately attributable, read-only, and free of inferred internal topology.",
  of20_save: "The preview contains only the strict twelve-key record, three separate scopes, and eight finalized evidence rows. It is a local expedition record only.",
  of20_transaction: "The System is checking strict sanitation, one canonical write and read-back, rollback safety, and unchanged TD-008 through TD-004 bytes.",
  of20_save_recovery: "The prior RP-008 bytes or verified absence were restored and checked. Retry begins without private work.",
  of20_rollback_unverified: "Progression is held because rollback or predecessor equality cannot be proven. No save, route, or success is claimed.",
  of30_restore: "The retained RP-007, retained RP-008, and bounded RP-009 records restored separately without replay. No identity, topology, continuity, transformation, cause, purpose, access, authority, or destination follows.",
};
const observationLabels = {
  [occludedFoldObservationIds[0]]: [
    "Three near margins", occludedFoldActions.continuities,
    "Lamellar ribbon, cellular mantle, and refractory filament fan reach three distinct receiving faces.",
  ],
  [occludedFoldObservationIds[1]]: [
    "Bounded correspondences", occludedFoldActions.association,
    "Related features recur across exposed depth with intervening mass and natural variation; no identity or path follows.",
  ],
  [occludedFoldObservationIds[2]]: [
    "Unmatched exposed record", occludedFoldActions.difference,
    "One maintained ordinary far record remains unmatched without implying failure, creation, destruction, or transformation.",
  ],
  [occludedFoldObservationIds[3]]: [
    "Unranked candidate record", occludedFoldActions.order,
    "One ordinary record has two compatible feature families without rank, branch, merge, identity, or internal topology.",
  ],
  [occludedFoldObservationIds[4]]: [
    "Unavailable outer margin", occludedFoldActions.junction,
    "An opaque complete outer boundary and service detour are evidence; interior contents and access remain unavailable.",
  ],
  [occludedFoldObservationIds[5]]: [
    "Layered edge stewardship", occludedFoldActions.stewardship,
    "Foundation folds, later faces, skins, sealed scars, detours, and repairs remain compatible without unity, ownership, cause, or purpose.",
  ],
};
const actionIds = {
  [occludedFoldActions.inspect]: "of00-begin-survey",
  [occludedFoldActions.continuities]: "of-observe-three-near-margins",
  [occludedFoldActions.association]: "of-observe-bounded-correspondences",
  [occludedFoldActions.difference]: "of-observe-unmatched-record",
  [occludedFoldActions.order]: "of-observe-ambiguous-candidates",
  [occludedFoldActions.junction]: "of-observe-unavailable-margin",
  [occludedFoldActions.stewardship]: "of-observe-layered-stewardship",
  [occludedFoldActions.pythonPrimary]: "of20-python-primary-submit",
  [occludedFoldActions.pythonTrace]: "of20-python-trace-submit",
  [occludedFoldActions.pythonTransfer]: "of20-python-transfer-submit",
  [occludedFoldActions.visionPrimary]: "of20-prompt-primary-submit",
  [occludedFoldActions.visionRetrieval]: "of20-prompt-retrieval-submit",
  [occludedFoldActions.visionTransfer]: "of20-prompt-transfer-submit",
  [occludedFoldActions.capabilityBoundary]: "of20-system-user-explanation-submit",
  [occludedFoldActions.relationBoundary]: "of20-truth-authority-explanation-submit",
  [occludedFoldActions.retry]: "of20-retry-blank",
  [occludedFoldActions.review]: "of20-review",
  [occludedFoldActions.save]: "of20-save",
  [occludedFoldActions.cancelSave]: "of20-cancel-save",
  [occludedFoldActions.retrySave]: "of20-retry-save",
  [occludedFoldActions.notation]: "of30-look-outward",
  [occludedFoldActions.returnInterval]: "of-return-offset-reach",
  [occludedFoldActions.returnThreshold]: "of-return-city-threshold",
};

const panoramaAlt = "Structural placeholder for the SC-10 Occluded Fold panorama: an immense folded Builder work exposes three distinct near margins and separated far records around an opaque outer margin; the interior remains unavailable and nothing responds or opens.";

const detailAltByCropId = {
  "sc10-detail-unmatched": "Structural detail placeholder: one maintained ordinary far record remains unmatched without implying failure or transformation.",
  "sc10-detail-ambiguous": "Structural detail placeholder: one ordinary record carries two independently legible compatible feature families without ranking, branching, merging, or identity.",
  "sc10-detail-unavailable": "Structural detail placeholder: an opaque pressure apron, complete external boundary, and service detour expose no gap, contents, access, invitation, or route.",
  "sc10-detail-stewardship": "Structural detail placeholder: foundation folds, later faces, sacrificial skins, sealed service scars, detours, and maintained repairs remain separately legible.",
};

function optionLabel(value) {
  return String(value).replaceAll("_", " ");
}

function OccludedFoldForm({ form, onFieldChange }) {
  if (!form) return null;
  if (form.kind === "python") {
    return (
      <div className="occluded-form-grid">
        <p className="occluded-workspace-truth">{OCCLUDED_FOLD_TRUTHFUL_WORKSPACE_LABEL}</p>
        <div className="occluded-scaffold" aria-label="Supplied sanitized edge-record replica">
          <strong>Supplied sanitized records, allowlisted nonsecret mode name, and interpretation limits</strong>
          <pre>{JSON.stringify({ environmentName: form.scaffold.environmentName, records: form.scaffold.records }, null, 2)}</pre>
          <p>{form.scaffold.interpretationLimits.join(" · ")}</p>
        </div>
        <label>
          <span>Learner-owned approved Python source</span>
          <textarea
            id={form.form === "primary" ? "of20-python-primary-editor" : "of20-python-transfer-editor"}
            rows="14"
            spellCheck="false"
            aria-describedby="occluded-workspace-limit"
            onChange={(event) => onFieldChange("learnerSource", event.target.value)}
          />
        </label>
        <p id="occluded-workspace-limit">Session-memory sanitized replicas only. No file, browser persistence, network, arbitrary Python, live service, or world operation.</p>
      </div>
    );
  }
  if (form.kind === "trace") {
    return (
      <div className="occluded-form-grid">
        {form.fieldIds.map((id, index) => (
          <label key={id}>
            <span>{optionLabel(id)}</span>
            <select
              id={index === 0 ? "of20-python-trace-first" : undefined}
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
      <div className="occluded-cases">
        {form.cases.map((item, index) => (
          <fieldset key={item.id}>
            <legend>{item.id}: {item.prompt}</legend>
            {form.dimensions.map((dimension, dimensionIndex) => (
              <label key={dimension}>
                <span>{optionLabel(dimension)}</span>
                <select
                  id={index === 0 && dimensionIndex === 0 ? `of20-prompt-${form.form}-first` : undefined}
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
        <span>{capability ? "System and user prompt responsibility boundary" : "Truth and live-authority limit"}</span>
        <select
          id={capability ? "of20-system-user-explanation-field" : "of20-truth-authority-explanation-field"}
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

export function OccludedFold({ state, onAction, onFieldChange }) {
  const rootRef = useRef(null);
  const scene = resolveOccludedFoldWorldScene(state);
  const isDetail = scene?.role === "SC-10-OCCLUDED-FOLD-EXPOSED-EDGE-DETAIL";
  const alt = isDetail ? detailAltByCropId[scene?.cropId] : panoramaAlt;
  const sourceName = isDetail
    ? "SC-10-OCCLUDED-FOLD-EXPOSED-EDGE-DETAIL structural placeholder"
    : "SC-10-OCCLUDED-FOLD-PANORAMA structural placeholder";

  useLayoutEffect(() => {
    const root = rootRef.current;
    const target = root?.querySelector(`#${CSS.escape(state.focusIntent?.target ?? state.headingId)}`)
      ?? root?.querySelector(`#${CSS.escape(state.headingId)}`);
    target?.focus?.({ preventScroll: true });
  }, [state.activeGroup, state.focusIntent?.target, state.headingId]);

  const observations = new Set(state.recordedObservationIds ?? []);
  const observationActions = new Set(Object.values(observationLabels).map((entry) => entry[1]));
  const renderedActions = state.activeGroup === "of10_observations"
    ? state.availableActions.filter((action) => !observationActions.has(action))
    : state.availableActions;

  return (
    <main
      className="occluded-verge"
      data-active-group={state.activeGroup}
      data-scene-id={scene?.sceneId}
      data-scene-role={scene?.role}
      data-crop-id={scene?.cropId}
      ref={rootRef}
      onKeyDown={(event) => {
        if (state.activeGroup === "of20_save" && event.key === "Escape") {
          event.preventDefault();
          onAction(occludedFoldActions.cancelSave, event);
        }
      }}
    >
      <figure className={`occluded-world occluded-structural-placeholder ${isDetail ? "is-detail" : "is-panorama"}`}>
        <div
          role="img"
          aria-label={alt}
          data-image-role={scene?.role}
          data-runtime-source-master={sourceName}
        ><span>{sourceName}</span><small>Quartermaster-owned final media seam — not final art</small></div>
        <figcaption>
          Expedition view only. Three near margins, bounded correspondences, one unmatched
          record, one ordinary ambiguity, one unavailable outer margin, and layered stewardship
          support bounded description—not identity, topology, continuity, transformation,
          cause, purpose, access, authority, or response.
        </figcaption>
      </figure>

      <section className="occluded-panel" aria-labelledby={state.headingId}>
        <header className="occluded-heading">
          <p className="eyebrow">{state.owner}</p>
          <h1 id={state.headingId} tabIndex="-1">{headingCopy[state.activeGroup]}</h1>
        </header>
        <p>{introductionCopy[state.activeGroup]}</p>
        <p className="occluded-boundary">
          SANITIZED PRECOMPUTED REPLICAS ONLY · OFFLINE COURSE-AUTHORED PRACTICE ·
          NO LIVE EXTRACTION, FILE, SERVICE, ACCESS, AUTHORITY, EXAM GUARANTEE,
          EXTERNAL ACTION, OR WORLD RESPONSE
        </p>
        <p className="occluded-longest-copy">CONFIRM THAT BOUNDED CORRESPONDENCE DOES NOT ESTABLISH IDENTITY, CONTINUITY, TRANSFORMATION, CAUSE, PURPOSE, OR AUTHORITY</p>

        {state.activeGroup === "of10_observations" && (
          <div>
          <h2 id="of10-observation-peer-heading" tabIndex="-1">Six equal observations</h2>
          <ul className="occluded-observations" aria-label="Six equal material observations">
            {occludedFoldObservationIds.map((id) => {
              const [label, action, description] = observationLabels[id];
              const recorded = observations.has(id);
              return (
                <li key={id}>
                  <button
                    id={actionIds[action]}
                    type="button"
                    data-action-id={action}
                    data-region-id={occludedFoldRegions[id].id}
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

        <OccludedFoldForm key={state.activeGroup} form={state.form} onFieldChange={onFieldChange} />

        {state.failedPublicIds?.length > 0 && (
          <div className="occluded-errors" role="note">
            <strong>Incomplete public dimensions</strong>
            <ul>{state.failedPublicIds.map((id) => <li key={id}>{optionLabel(id)}</li>)}</ul>
          </div>
        )}

        {state.reviewRows?.length > 0 && (
          <ul className="occluded-review" aria-label="Retained summary plus fourteen independent responsibilities">
            {state.reviewRows.map((row) => (
              <li key={row.id}><strong>{row.owner}</strong><span>{row.state}</span></li>
            ))}
          </ul>
        )}

        {state.activeGroup === "of20_save" && (
          <p className="occluded-preview-limit">
            Local expedition record only — no world, route, service, Microsoft, exam, or authority effect.
            Exact schema: twelve root keys, three separately attributable scopes, and eight evidence records.
          </p>
        )}

        {state.note && (
          <section className="occluded-note" aria-label="Restored three-scope bounded expedition record">
            <h2>Three separately attributable expedition records</h2>
            <dl>
              <div><dt>Retained RP-007 summary</dt><dd>The recurrent exposed association remains separately valid and unchanged.</dd></div>
              <div><dt>Retained RP-008 summary</dt><dd>RP-008 — Bounded offset record retained separately: comparable exposed relations remain local evidence and do not establish a universal arrangement, exclusive lineage, unity, cause, or purpose.</dd></div>
              <div><dt>Candidate RP-009 edge ledger</dt><dd>Six canonical observations and four bounded evidence classes are retained; identity, topology, continuity, transformation, cause, and purpose remain null.</dd></div>
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

        <div className="occluded-actions" aria-label="Current actions">
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
