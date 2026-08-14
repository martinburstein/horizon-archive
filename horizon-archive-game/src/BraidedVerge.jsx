import { useEffect, useLayoutEffect, useRef, useState } from "react";
import saddleEchoOrganImage from "../../Visual Direction/Production Masters/2026-08-14-first-run-host29/host29-environment-master-v1.png";
import {
  BRAIDED_VERGE_TRUTHFUL_WORKSPACE_LABEL,
  braidedVergeActions,
  braidedVergeObservationIds,
  braidedVergeRegions,
  resolveBraidedVergeWorldScene,
} from "./BraidedVergeNormal.js";
import braidedVergePanorama from "../../Visual Direction/Production Masters/2026-07-29-rp007-braided-verge-runtime/sc08-braided-verge-panorama-runtime-master-v1.webp";
import braidedVergeContactDetail from "../../Visual Direction/Production Masters/2026-07-29-rp007-braided-verge-runtime/sc08-braided-verge-contact-detail-runtime-master-v1.webp";
import { SADDLE_ECHO_ORGAN_COPY, SADDLE_ECHO_ORGAN_REGISTRY, deriveSaddleEchoOrganState } from "./braidedHosts.js";

const host29Groups = new Set(["bv00_orientation", "bv10_observations", "bv20_python_primary", "bv20_python_trace", "bv20_python_transfer"]);

function useDecodedImage(enabled, src) {
  const [decoded, setDecoded] = useState(null);
  useEffect(() => {
    if (!enabled) { setDecoded(null); return undefined; }
    let connected = true;
    const image = new Image();
    image.onload = () => connected && setDecoded({ complete: image.complete, naturalWidth: image.naturalWidth, naturalHeight: image.naturalHeight });
    image.onerror = () => connected && setDecoded(null);
    image.src = src;
    return () => { connected = false; image.onload = null; image.onerror = null; };
  }, [enabled, src]);
  return decoded;
}

const headingCopy = {
  bv30_offset_reach_route_choice: "Offset Reach adjacent survey",
  bv00_orientation: "Braided Verge",
  bv10_observations: "Inspect braided evidence",
  bv20_python_primary: "Write and read the bounded report",
  bv20_python_trace: "Trace the file-operation method",
  bv20_python_transfer: "Transfer the bounded method",
  bv20_vision_primary: "Distinguish vision and generation",
  bv20_vision_retrieval: "Retrieve the capability boundary",
  bv20_vision_transfer: "Transfer the capability boundary",
  bv20_capability_boundary: "Explain the capability boundary",
  bv20_relation_boundary: "Explain the relation boundary",
  bv20_repair: "Review incomplete dimensions",
  bv20_review: "Review independent responsibilities",
  bv20_save: "Save a bounded expedition note",
  bv20_transaction: "Verify the local transaction",
  bv20_save_recovery: "Recover the local save",
  bv20_rollback_unverified: "Local transaction hold",
  bv30_restore: "BV-30 verified restore",
};

const introductionCopy = {
  bv30_offset_reach_route_choice: "The released Braided Verge note remains unchanged. A fresh Pilot-owned adjacent survey choice may enter Offset Reach; scenery and prior results do not dispatch it.",
  bv00_orientation: "Two material continuities cross one immense serviced region without becoming one system. Recurrent local contact supports cautious association only; the closed junction remains unavailable.",
  bv10_observations: "Record five equal physical observations in any order. Shared region is not shared identity; recurrence is not coordination; difference is not error; relative order is not cause; closure is not an access challenge.",
  bv20_python_primary: "Use the supplied sanitized report and exact relative filename. The approved plan writes once with UTF-8, reads once with UTF-8, compares the round trip, and clears its isolated session-only memory workspace.",
  bv20_python_trace: "Identify the Path object, exact relative name, one write, one read, UTF-8 encoding, exact round trip, unavailable junction, and explicit unknown limits.",
  bv20_python_transfer: "Apply the same bounded method to a genuinely fresh report. No primary source, result, filename state, or output is carried forward.",
  bv20_vision_primary: "Course-authored neutral cases distinguish analysis of existing visual input from creation of new visual output. The scene carries no answer.",
  bv20_vision_retrieval: "Retrieve the distinction from the requested operation, not from sequence, subject, confidence, or scenery.",
  bv20_vision_transfer: "Apply the distinction to fresh neutral cases. This offline practice performs no live analysis or image generation.",
  bv20_capability_boundary: "State that existing supplied visual input selects vision or analysis, while a prompt requesting new visual output selects generation.",
  bv20_relation_boundary: "State that adjacency, recurrence, difference, or order proves none of unity, cause, coordination, ownership, or purpose.",
  bv20_repair: "Only the named public dimensions remain incomplete. Guidance is answer-free and retry opens a wholly blank form.",
  bv20_review: "Five physical observations, three Python records, three capability records, and two explanations remain thirteen separate responsibilities. There is no combined score or world verdict.",
  bv20_save: "The preview contains only the strict ten-key record, fourteen-key note, and eight finalized evidence records. It is a local expedition record only.",
  bv20_transaction: "The System is checking strict sanitation, one-key replacement, exact read-back, rollback safety, and unchanged TD-006 through TD-004 bytes.",
  bv20_save_recovery: "The prior RP-007 bytes or verified absence were restored and checked. Retry begins without private work.",
  bv20_rollback_unverified: "Progression is held because rollback or predecessor equality cannot be proven. No save, route, or success is claimed.",
  bv30_restore: "The bounded note restored without replay. Distinctness, association, difference, relative order, closed unavailability, and compatible stewardship remain bounded observations—not unity, cause, ownership, purpose, or destination.",
};

const observationLabels = {
  [braidedVergeObservationIds[0]]: [
    "Distinct material continuities",
    braidedVergeActions.continuities,
    "A laminated ribbon and cellular mantle remain separately traceable through the shared region; shared region is not shared identity.",
  ],
  [braidedVergeObservationIds[1]]: [
    "Recurrent exposed association",
    braidedVergeActions.association,
    "Repeated local saddle contacts support association, not coordination, communication, dependence, or unity.",
  ],
  [braidedVergeObservationIds[2]]: [
    "Bounded contact difference",
    braidedVergeActions.difference,
    "One ordinary contact differs within the visible family; difference is not error, damage, correction, progress, or response.",
  ],
  [braidedVergeObservationIds[3]]: [
    "Cross-cut relative order",
    braidedVergeActions.order,
    "One exposed cross-cut supports relative order only—not chronology, duration, authorship, intent, or cause.",
  ],
  [braidedVergeObservationIds[4]]: [
    "Closed junction and stewardship",
    braidedVergeActions.junction,
    "An opaque junction, separate seams, bypass, and layered stewardship remain visible; closure is unavailable evidence, not access, common ownership, or purpose.",
  ],
};

const actionIds = {
  "PILOT // FOLLOW EXPEDITION-MARKED ADJACENT SURVEY TO OFFSET REACH": "td008-route-offset-reach",
  [braidedVergeActions.inspect]: "bv00-inspect-action",
  [braidedVergeActions.continuities]: "bv-observation-continuities",
  [braidedVergeActions.association]: "bv-observation-association",
  [braidedVergeActions.difference]: "bv-observation-difference",
  [braidedVergeActions.order]: "bv-observation-order",
  [braidedVergeActions.junction]: "bv-observation-junction",
  [braidedVergeActions.retry]: "bv20-retry-action",
  [braidedVergeActions.review]: "bv20-review-action",
  [braidedVergeActions.save]: "bv20-save-action",
  [braidedVergeActions.retrySave]: "bv20-save-retry-action",
  [braidedVergeActions.notation]: "bv30-notation-action",
  [braidedVergeActions.returnInterval]: "bv-return-interval",
  [braidedVergeActions.returnThreshold]: "bv-return-threshold",
};

const panoramaAlt = "First-person panorama across an immense mineral vault. A laminated glass-ceramic ribbon and dense cellular mantle remain separately traceable through recurrent saddle contacts. An opaque off-axis junction remains sealed while a separate bypass continues around it.";

const detailAltByCropId = {
  "sc08-detail-difference": "Close first-person material view. One offset saddle carries an ordinary quilted granular repair while the surrounding laminated ribbon and cellular mantle continue as distinct structures.",
  "sc08-detail-order": "Close first-person material view. Cellular substrate ends beneath crossing glass-ceramic lamellae and later mineral accretion covers both, supporting relative order only.",
  "sc08-detail-junction-stewardship": "Close first-person material view. An opaque junction has separate peripheral seams and an external bypass beside compatible foundation, crossing, and repaired contact layers. Its interior remains unavailable.",
};

function optionLabel(value) {
  return String(value).replaceAll("_", " ");
}

function BraidedVergeForm({ form, onFieldChange }) {
  if (!form) return null;
  if (form.kind === "python") {
    return (
      <div className="braided-form-grid">
        <p className="braided-workspace-truth">{BRAIDED_VERGE_TRUTHFUL_WORKSPACE_LABEL}</p>
        <div className="braided-scaffold" aria-label="Supplied sanitized report">
          <strong>Supplied sanitized report and interpretation limits</strong>
          <p><code>{form.scaffold.filename}</code></p>
          <pre>{form.scaffold.reportLines.join("\n")}</pre>
          <p>{form.scaffold.interpretationLimits.join(" · ")}</p>
        </div>
        <label>
          <span>Learner-owned approved file-operation fragment</span>
          <textarea
            id={form.form === "primary" ? "bv20-python-primary-editor" : "bv20-python-transfer-editor"}
            rows="14"
            spellCheck="false"
            aria-describedby="braided-workspace-limit"
            onChange={(event) => onFieldChange("learnerSource", event.target.value)}
          />
        </label>
        <p id="braided-workspace-limit">Relative-path, UTF-8, one-write/one-read plan only. No disk, network, arbitrary Python, live service, or world operation.</p>
      </div>
    );
  }
  if (form.kind === "trace") {
    return (
      <div className="braided-form-grid">
        {form.fieldIds.map((id, index) => (
          <label key={id}>
            <span>{optionLabel(id)}</span>
            <select
              id={index === 0 ? "bv20-python-trace-first" : undefined}
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
      <div className="braided-cases">
        {form.cases.map((item, index) => (
          <fieldset key={item.id}>
            <legend>{item.id}: {item.prompt}</legend>
            {form.dimensions.map((dimension, dimensionIndex) => (
              <label key={dimension}>
                <span>{optionLabel(dimension)}</span>
                <select
                  id={index === 0 && dimensionIndex === 0 ? `bv20-vision-${form.form}-first` : undefined}
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
        <span>{capability ? "Existing-input versus new-output capability boundary" : "Visible-relation interpretation boundary"}</span>
        <select
          id={capability ? "bv20-capability-field" : "bv20-relation-field"}
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

export function BraidedVerge({ state, onAction, onFieldChange }) {
  const rootRef = useRef(null);
  const host29DecodedImage = useDecodedImage(SADDLE_ECHO_ORGAN_REGISTRY.source.enabled, saddleEchoOrganImage);
  const scene = resolveBraidedVergeWorldScene(state);
  const isDetail = scene?.role === "SC-08-CONTACT-DETAIL-MASTER";
  const alt = isDetail ? detailAltByCropId[scene?.cropId] : panoramaAlt;
  const releasedImageSource = isDetail ? braidedVergeContactDetail : braidedVergePanorama;
  const host29State = deriveSaddleEchoOrganState({ decodedImage: host29DecodedImage });
  const host29NativeActive = scene?.sceneId === "SC-08" && host29State !== "hidden" && host29Groups.has(state.activeGroup);
  const imageSource = host29NativeActive ? saddleEchoOrganImage : releasedImageSource;
  const selectedAlt = host29NativeActive ? SADDLE_ECHO_ORGAN_COPY.alt : alt;
  const sourceName = host29NativeActive
    ? "host29-environment-master-v1.png"
    : isDetail
    ? "sc08-braided-verge-contact-detail-runtime-master-v1.webp"
    : "sc08-braided-verge-panorama-runtime-master-v1.webp";

  useLayoutEffect(() => {
    const root = rootRef.current;
    const target = root?.querySelector(`#${CSS.escape(state.focusIntent?.target ?? state.headingId)}`)
      ?? root?.querySelector(`#${CSS.escape(state.headingId)}`);
    target?.focus?.({ preventScroll: true });
  }, [state.activeGroup, state.focusIntent?.target, state.headingId]);

  const observations = new Set(state.recordedObservationIds ?? []);
  const observationActions = new Set(Object.values(observationLabels).map((entry) => entry[1]));
  const renderedActions = state.activeGroup === "bv10_observations"
    ? state.availableActions.filter((action) => !observationActions.has(action))
    : state.availableActions;

  return (
    <main
      className="braided-verge"
      data-active-group={state.activeGroup}
      data-scene-id={scene?.sceneId}
      data-scene-role={scene?.role}
      data-crop-id={scene?.cropId}
      data-saddle-echo-organ-state={host29State}
      data-saddle-echo-organ-native-active={host29NativeActive ? "true" : undefined}
      ref={rootRef}
    >
      <figure className={`braided-world ${isDetail ? "is-detail" : "is-panorama"}`}>
        <img
          src={imageSource}
          alt={selectedAlt}
          data-image-role={scene?.role}
          data-runtime-source-master={sourceName}
          data-saddle-echo-organ-source={host29NativeActive ? SADDLE_ECHO_ORGAN_REGISTRY.source.path : undefined}
        />
        <figcaption>
          Expedition view only. Distinct continuities, recurrent contact, bounded difference,
          relative order, and a closed boundary support cautious description—not unity,
          cause, coordination, ownership, purpose, access, or response.
        </figcaption>
      </figure>

      <section className="braided-panel" aria-labelledby={state.headingId}>
        <header className="braided-heading">
          <p className="eyebrow">{state.owner}</p>
          <h1 id={state.headingId} tabIndex="-1">{headingCopy[state.activeGroup]}</h1>
        </header>
        <p>{introductionCopy[state.activeGroup]}</p>
        <p className="braided-boundary">
          SANITIZED PRECOMPUTED REPLICAS ONLY · OFFLINE COURSE-AUTHORED PRACTICE ·
          NO LIVE FILE, VISION, GENERATION, SERVICE, ACCESS, AUTHORITY, EXAM GUARANTEE,
          EXTERNAL ACTION, OR WORLD RESPONSE
        </p>

        {state.activeGroup === "bv10_observations" && (
          <ul className="braided-observations" aria-label="Five equal material observations">
            {braidedVergeObservationIds.map((id) => {
              const [label, action, description] = observationLabels[id];
              const recorded = observations.has(id);
              return (
                <li key={id}>
                  <button
                    id={actionIds[action]}
                    type="button"
                    data-action-id={action}
                    data-region-id={braidedVergeRegions[id].id}
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
        )}

        <BraidedVergeForm key={state.activeGroup} form={state.form} onFieldChange={onFieldChange} />

        {state.failedPublicIds?.length > 0 && (
          <div className="braided-errors" role="note">
            <strong>Incomplete public dimensions</strong>
            <ul>{state.failedPublicIds.map((id) => <li key={id}>{optionLabel(id)}</li>)}</ul>
          </div>
        )}

        {state.reviewRows?.length > 0 && (
          <ul className="braided-review" aria-label="Thirteen independent responsibilities">
            {state.reviewRows.map((row) => (
              <li key={row.id}><strong>{row.owner}</strong><span>{row.state}</span></li>
            ))}
          </ul>
        )}

        {state.activeGroup === "bv20_save" && (
          <p className="braided-preview-limit">
            Local expedition record only — no world, route, service, Microsoft, exam, or authority effect.
            Exact schema: ten root keys, fourteen note keys, eight evidence records.
          </p>
        )}

        {state.note && (
          <section className="braided-note" aria-label="Restored bounded expedition note">
            <h2>Bounded note</h2>
            <dl>
              <div><dt>Continuities</dt><dd>Distinct visible continuities remain separately traceable.</dd></div>
              <div><dt>Association</dt><dd>Recurrent exposed association is local and does not prove unity or coordination.</dd></div>
              <div><dt>Difference</dt><dd>One bounded difference is observed without error, damage, or progress framing.</dd></div>
              <div><dt>Order</dt><dd>Relative order is supported without chronology, authorship, intent, or cause.</dd></div>
              <div><dt>Junction</dt><dd>The closed junction remains unavailable; its interior and destination remain unknown.</dd></div>
              <div><dt>Stewardship</dt><dd>Compatible layered stewardship is visible without common ownership or purpose.</dd></div>
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

        <div className="braided-actions" aria-label="Current actions">
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
