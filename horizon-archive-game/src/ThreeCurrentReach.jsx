import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import threeThroatReplicaBloomImage from "../../Visual Direction/Production Masters/2026-08-14-first-run-host23/host23-environment-master-v1.png";
import calibrationMarginImage from "../../Visual Direction/Production Masters/2026-07-15-photorealistic-demo/city-threshold-overview-master.png";
import threeCurrentReachImage from "../../Visual Direction/Production Masters/2026-07-26-rp004-three-current-runtime-master/sc05-three-current-panorama-runtime-master-v1.webp";
import { CanonicalGameFrame } from "./CanonicalGameFrame.jsx";
import {
  resolveThreeCurrentReachWorldScene,
  threeCurrentReachActions,
  threeCurrentReachWorldPlateIds,
} from "./ThreeCurrentReachNormal.js";
import { THREE_THROAT_REPLICA_BLOOM_COPY, THREE_THROAT_REPLICA_BLOOM_REGISTRY, deriveThreeThroatReplicaBloomState } from "./threeCurrentHosts.js";

const host23Groups = new Set(["tr00_orient", "tr10_relations", "tr20_common_return", "tr30_python_primary", "tr30_python_retrieval", "tr30_python_transfer"]);
function useDecodedImage(enabled, src) { const [decoded, setDecoded] = useState(null); useEffect(() => { if (!enabled) { setDecoded(null); return undefined; } let connected = true; const image = new Image(); image.onload = () => connected && setDecoded({ complete: image.complete, naturalWidth: image.naturalWidth, naturalHeight: image.naturalHeight }); image.onerror = () => connected && setDecoded(null); image.src = src; return () => { connected = false; image.onload = null; image.onerror = null; }; }, [enabled, src]); return decoded; }

const headings = Object.freeze({
  cm50_route: "Depart from the verified expedition note",
  tr00_orient: "Orient within Three-Current Reach",
  tr10_relations: "Observe three equal physical relations",
  tr20_common_return: "Record convergence without assigning purpose",
  tr30_python_primary: "Relate three sanitized replicas with one loop",
  tr30_python_retrieval: "Retrieve the loop boundary from memory",
  tr30_python_transfer: "Transfer the loop to a fresh replica set",
  tr30_workload_primary: "Identify six requested AI workloads",
  tr30_workload_retrieval: "Retrieve four workload boundaries",
  tr30_workload_transfer: "Transfer workload recognition to six new cases",
  tr30_modality: "Separate modality from requested workload",
  tr30_agentic: "Separate generation from agentic work",
  tr30_repair: "Review one incomplete boundary",
  tr30_review: "Confirm each obligation stands alone",
  tr30_provenance: "Confirm local source boundaries",
  tr30_save_recovery: "Local note not replaced",
  tr40_restore: "Verify the restored expedition note",
  tr40_restore_recorded: "Restore with a destinationless continuation note",
});

const groupIntroductions = Object.freeze({
  cm50_route:
    "The prior note is verified. One expedition-marked survey and two known, write-free returns remain independent Pilot choices.",
  tr00_orient:
    "Three distinct handling systems share one immense reach. Orient to their visible relations before recording any observation.",
  tr10_relations:
    "The three observations are equal peers. Record them in any order; no observation creates course evidence.",
  tr20_common_return:
    "All three relations enter one visibly capped return. Record the convergence while leaving purpose, category, and destination unknown.",
  tr30_python_primary:
    "Builder work supplies a bounded unfinished pattern; the course supplies sanitized replicas. Your loop remains local and controls nothing in the reach.",
  tr30_python_retrieval:
    "The completed source is cleared. Reconstruct the loop's responsibilities from memory without reopening the prior form.",
  tr30_python_transfer:
    "A different sanitized replica set is ready in a genuinely blank form. Apply the same loop discipline without carrying source forward.",
  tr30_workload_primary:
    "Classify each neutral course case by its requested outcome and deciding signal. The landscape supplies no answer.",
  tr30_workload_retrieval:
    "Retrieve the workload boundaries in a smaller closed-note set. Each case and each dimension remains independently accountable.",
  tr30_workload_transfer:
    "Apply workload recognition to a fresh neutral set. No current, material, sound, or Builder feature maps to a choice.",
  tr30_modality:
    "Explain whether an input or output method is enough to determine the requested AI workload.",
  tr30_agentic:
    "Explain which responsibility separates multi-step agentic work from content generation alone.",
  tr30_repair:
    "Only the named boundary is incomplete. The prior response has been cleared, and the review below includes no answer.",
  tr30_review:
    "Physical observations, Python work, and AI workload practice must each stand on their own; none can substitute for another.",
  tr30_provenance:
    "The note may include only finalized local evidence and expedition observations derived from the supplied, sanitized material.",
  tr30_save_recovery:
    "The attempted replacement did not become the verified note. The last verified note, or verified absence, remains unchanged.",
  tr40_restore:
    "The expedition note passed strict local read-back. Its integrity verifies the record only, not a theory, destination, or authority.",
  tr40_restore_recorded:
    "The local note now includes an outbound physical continuation without a destination, route, or successor.",
});

const relationCopy = Object.freeze({
  suspended_matter_porous_relation:
    "Suspended matter remains visibly paired with a porous handling corridor.",
  cyclic_pressure_tensioned_relation:
    "Cyclic pressure remains visibly paired with a tensioned handling corridor.",
  conducted_heat_jointed_relation:
    "Conducted heat remains visibly paired with a jointed handling corridor.",
});

const fieldCopy = Object.freeze({
  iterable: "Collection traversed by the loop",
  currentItem: "Name for the current item",
  loopBody: "Work performed once per item",
  outputCount: "Expected number of output records",
  purposeBoundary: "Boundary on the apparent common return",
  workload: "Requested AI workload",
  deciding_signal: "Deciding signal",
});

const optionCopy = Object.freeze({
  samples: "The supplied samples",
  corridor_for_form: "The supplied form-to-corridor lookup",
  correspondence: "The output correspondence records",
  sample: "One current sample",
  corridor: "One current corridor",
  append_one_ordered_correspondence_record:
    "Append one ordered sample-and-corridor record",
  replace_the_supplied_samples: "Replace the supplied sample collection",
  open_a_live_source: "Open a live source",
  three_records_for_three_samples: "Three records for three samples",
  one_summary_for_all_samples: "One combined summary for all samples",
  unbounded_records: "A variable number of records",
  common_return_purpose_remains_none:
    "The apparent common return remains observed with no assigned purpose",
  common_return_is_a_route: "The apparent common return provides a travel route",
  common_return_identifies_a_workload:
    "The apparent common return identifies an AI workload",
  generative_ai: "Generative AI",
  agentic_ai: "Agentic AI",
  text_analysis: "Text analysis",
  speech: "Speech",
  computer_vision: "Computer vision",
  information_extraction: "Information extraction",
  create_new_content_from_a_prompt: "Create new content from a prompt",
  reason_across_steps_and_select_approved_tools:
    "Reason across steps and select approved tools",
  derive_sentiment_and_key_phrases_from_text:
    "Derive sentiment and key phrases from text",
  recognize_spoken_language_as_text: "Recognize spoken language as text",
  interpret_visible_defects_in_an_image:
    "Interpret visible defects in an image",
  return_named_invoice_fields_in_a_defined_schema:
    "Return named invoice fields in a defined schema",
  analyze_the_already_supplied_transcript_not_the_audio:
    "Analyze the supplied transcript rather than its original audio",
  describe_visual_damage_without_a_field_schema:
    "Describe visible damage without a field schema",
  populate_fixed_fields_from_the_supplied_image:
    "Populate fixed fields from the supplied image",
  choose_approved_tools_and_actions_across_multiple_steps:
    "Choose approved tools and actions across multiple steps",
  create_a_new_illustration_from_a_prompt:
    "Create a new illustration from a prompt",
  plan_then_call_approved_systems_across_multiple_steps:
    "Plan, then call approved systems across multiple steps",
  detect_named_entities_in_written_content:
    "Detect named entities in written content",
  synthesize_spoken_audio_from_text: "Synthesize spoken audio from text",
  interpret_objects_and_spatial_relations_in_an_image:
    "Interpret objects and spatial relations in an image",
  return_named_fields_from_audio_and_video_in_a_defined_schema:
    "Return named fields from supplied audio and video in a defined schema",
  modality_alone_does_not_determine_the_requested_workload:
    "The input or output method alone does not determine the requested workload",
  input_modality_alone_determines_the_requested_workload:
    "The input or output method alone determines the requested workload",
  all_audio_requests_are_speech_workloads:
    "Every request involving audio belongs to the speech workload",
  multi_step_autonomy_and_approved_tool_selection_distinguish_agentic_work:
    "Multi-step autonomy and selection of approved tools distinguish agentic work",
  generation_alone_makes_a_system_agentic:
    "Generating content alone makes a system agentic",
  any_single_model_response_is_an_agent:
    "Any single model response is an agent",
});

const failedBoundaryCopy = Object.freeze({
  result_is_list: "The output must be a list.",
  one_record_per_sample: "One output record is required for each supplied sample.",
  exact_record_keys_and_order:
    "Each output record must preserve the required fields and field order.",
  every_sample_id_preserved_once:
    "Each supplied sample identifier must appear exactly once.",
  exact_form_to_corridor_lookup:
    "Each form must use its value from the supplied corridor lookup.",
  for_loop_iterates_samples_and_appends_once:
    "One loop must traverse the supplied samples and append once per item.",
  common_return_observed_and_purpose_none:
    "The common return may be recorded as observed while its purpose remains unassigned.",
  inputs_unchanged_and_no_forbidden_operations:
    "Supplied inputs must remain unchanged and no live or forbidden operation may be used.",
  iterable: "Review which collection the loop traverses.",
  currentItem: "Review the name used for one current item.",
  loopBody: "Review the work performed once for each item.",
  outputCount: "Review the expected number of output records.",
  purposeBoundary: "Review the boundary on the apparent common return.",
  modality_boundary: "Review whether modality alone determines the requested workload.",
  agentic_boundary:
    "Review whether generation alone includes multi-step autonomy and approved-tool selection.",
});

function productionOptionCopy(value) {
  return optionCopy[value] ?? "Unrecognized course option";
}

function productionFailedBoundaryCopy(id) {
  if (failedBoundaryCopy[id]) return failedBoundaryCopy[id];
  const caseDimension = id.match(/^([PRT])(\d{2})\.(workload|deciding_signal)$/);
  if (caseDimension) {
    const formName = {
      P: "Primary",
      R: "Retrieval",
      T: "Transfer",
    }[caseDimension[1]];
    return `${formName} case ${Number(caseDimension[2])} — ${fieldCopy[caseDimension[3]]} remains incomplete.`;
  }
  return "A required course boundary remains incomplete.";
}

function actionTargetId(action) {
  return {
    [threeCurrentReachActions.observeSuspended]: "relation-suspended-action",
    [threeCurrentReachActions.observeCyclic]: "relation-cyclic-action",
    [threeCurrentReachActions.observeHeat]: "relation-heat-action",
    [threeCurrentReachActions.commonReturn]: "common-return-action",
    [threeCurrentReachActions.save]: "tr30-save-action",
    [threeCurrentReachActions.continuation]: "tr40-continuation-action",
    [threeCurrentReachActions.manyfoldReturn]: "td005-route-action",
    [threeCurrentReachActions.returnCalibration]: "return-calibration-action",
    [threeCurrentReachActions.returnThreshold]: "return-threshold-action",
  }[action];
}

export function ThreeCurrentReach({
  state,
  onAction,
  onFieldChange,
}) {
  const headingRef = useRef(null);
  const actionRefs = useRef(new Map());
  const fieldRefs = useRef(new Map());
  const [fields, setFields] = useState({});
  const host23DecodedImage = useDecodedImage(THREE_THROAT_REPLICA_BLOOM_REGISTRY.source.enabled, threeThroatReplicaBloomImage);

  useLayoutEffect(() => {
    setFields({});
    const target = state?.focusIntent?.target;
    if (!target || target === state.headingId || target.endsWith("-heading")) {
      headingRef.current?.focus({ preventScroll: true });
      return;
    }
    (actionRefs.current.get(target) ?? fieldRefs.current.get(target))
      ?.focus({ preventScroll: true });
  }, [state.activeGroup, state.focusIntent?.target]);

  const observationStatus = useMemo(() => new Map(
    state.observationControls.map((item) => [item.action, item]),
  ), [state.observationControls]);

  function updateField(name, value) {
    setFields((previous) => ({ ...previous, [name]: value }));
    onFieldChange(name, value);
  }

  function actionButton(action) {
    const observation = observationStatus.get(action);
    const targetId = actionTargetId(action) ?? action;
    return (
      <button
        key={action}
        id={actionTargetId(action)}
        ref={(element) => {
          if (element) actionRefs.current.set(targetId, element);
          else actionRefs.current.delete(targetId);
        }}
        type="button"
        data-action-id={action}
        data-observation-id={observation?.observationId}
        disabled={observation?.recorded || undefined}
        aria-describedby={action.startsWith("RETURN TO ")
          ? "three-current-return-boundary"
          : undefined}
        onClick={(event) => onAction(action, event)}
      >
        {observation ? `${action} — ${observation.status}` : action}
      </button>
    );
  }

  function renderForm() {
    const form = state.form;
    if (!form) return null;
    if (form.kind === "python") {
      return (
        <section className="three-current-form" aria-labelledby={`${state.headingId}-instructions`}>
          <h2 id={`${state.headingId}-instructions`}>
            {form.form === "primary"
              ? "Local loop practice with supplied replicas"
              : "Fresh loop transfer with new replicas"}
          </h2>
          <p>
            {form.form === "primary"
              ? "Use the course-owned sample dictionaries and lookup to build one ordered correspondence record per supplied item. Keep the apparent return observed and its purpose unassigned."
              : "Use this different course-owned sample set to build the same bounded correspondence. Begin from a blank source field; no completed source has been carried forward."}
          </p>
          <pre aria-label={`${form.form} supplied replica shape`}>
            {JSON.stringify(form.starter, null, 2)}
          </pre>
          <label htmlFor={`${state.activeGroup}-editor`}>
            Your Python loop
          </label>
          <textarea
            id={`${state.activeGroup}-editor`}
            ref={(element) => {
              if (element) fieldRefs.current.set(
                form.form === "primary"
                  ? "tr30-python-primary-editor"
                  : "tr30-python-transfer-editor",
                element,
              );
            }}
            value={fields.learnerSource ?? ""}
            aria-describedby={`${state.activeGroup}-help`}
            onChange={(event) => updateField("learnerSource", event.target.value)}
          />
          <small id={`${state.activeGroup}-help`}>
            Evaluated locally against only the displayed sanitized replicas.
            It cannot read or control the reach, a live source, Azure,
            Foundry, or any external system.
          </small>
        </section>
      );
    }
    if (form.kind === "retrieval") {
      return (
        <fieldset className="three-current-form">
          <legend>Closed-note loop trace</legend>
          {form.fieldIds.map((fieldId, index) => (
            <label key={fieldId}>
              <span>{fieldCopy[fieldId]}</span>
              <select
                ref={(element) => {
                  if (index === 0 && element) {
                    fieldRefs.current.set("tr30-python-retrieval-first", element);
                  }
                }}
                value={fields[fieldId] ?? ""}
                onChange={(event) => updateField(fieldId, event.target.value)}
              >
                <option value="">Choose one</option>
                {form.options[fieldId].map((option) => (
                  <option key={option} value={option}>
                    {productionOptionCopy(option)}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </fieldset>
      );
    }
    if (form.kind === "workload") {
      return (
        <div className="three-current-form">
          <p className="three-current-neutral-boundary">
            COURSE-AUTHORED NEUTRAL CASES · no landscape crop, material,
            movement, sound, or Builder feature supplies an answer.
          </p>
          {form.cases.map((scenario, caseIndex) => (
            <fieldset key={scenario.id}>
              <legend>Case {caseIndex + 1}: {scenario.prompt}</legend>
              {form.dimensions.map((dimension, dimensionIndex) => {
                const name = `${scenario.id}.${dimension}`;
                return (
                  <label key={name}>
                    <span>{fieldCopy[dimension]}</span>
                    <select
                      ref={(element) => {
                        if (caseIndex === 0 && dimensionIndex === 0 && element) {
                          const focusId = `tr30-ai-${form.form}-first`;
                          fieldRefs.current.set(focusId, element);
                        }
                      }}
                      value={fields[name] ?? ""}
                      onChange={(event) => updateField(name, event.target.value)}
                    >
                      <option value="">Choose one</option>
                      {form.options[dimension].map((option) => (
                        <option key={option} value={option}>
                          {productionOptionCopy(option)}
                        </option>
                      ))}
                    </select>
                  </label>
                );
              })}
            </fieldset>
          ))}
        </div>
      );
    }
    return (
      <fieldset className="three-current-form">
        <legend>
          {form.form === "modality"
            ? "Which boundary keeps modality separate from workload?"
            : "Which boundary distinguishes agentic work?"}
        </legend>
        <label>
          <span>Boundary explanation</span>
          <select
            ref={(element) => {
              if (element) fieldRefs.current.set(
                form.form === "modality"
                  ? "tr30-modality-field"
                  : "tr30-agentic-field",
                element,
              );
            }}
            value={fields[form.form] ?? ""}
            onChange={(event) => updateField(form.form, event.target.value)}
          >
            <option value="">Choose one</option>
            {form.options.map((option) => (
              <option key={option} value={option}>
                {productionOptionCopy(option)}
              </option>
            ))}
          </select>
        </label>
      </fieldset>
    );
  }

  const worldScene = resolveThreeCurrentReachWorldScene(state);
  const showThreeCurrentReach = worldScene?.assetId
    === threeCurrentReachWorldPlateIds.threeCurrentReach;
  const worldImage = showThreeCurrentReach
    ? threeCurrentReachImage
    : calibrationMarginImage;
  const worldAssetId = showThreeCurrentReach
    ? threeCurrentReachWorldPlateIds.threeCurrentReach
    : threeCurrentReachWorldPlateIds.calibrationMargin;
  const worldSceneId = showThreeCurrentReach ? "SC-05" : "SC-04";
  const host23State = deriveThreeThroatReplicaBloomState({ decodedImage: host23DecodedImage });
  const host23NativeActive = showThreeCurrentReach && host23State !== "hidden" && host23Groups.has(state.activeGroup);
  const selectedWorldImage = host23NativeActive ? threeThroatReplicaBloomImage : worldImage;
  const worldAlt = worldSceneId === "SC-04"
    ? "The restored Calibration Margin remains unchanged at its three-choice navigation boundary"
    : "A vast first-person working reach where suspended matter, cyclic pressure, and conducted heat follow three equally legible handling relations toward an apparent capped return";

  return (
    <CanonicalGameFrame enabled>
      <main
        className="game-shell city-threshold-screen three-current-reach"
        data-scene="three-current-reach"
        data-board={state.boardState}
        data-phase={state.phase}
        data-active-group={state.activeGroup}
        data-three-throat-replica-bloom-state={host23State}
        data-three-throat-replica-bloom-native-active={host23NativeActive ? "true" : undefined}
      >
        <section
          className="city-world three-current-world"
          aria-label={`${worldSceneId} invariant world`}
          data-world-scene={worldSceneId}
          data-world-master={worldAssetId}
        >
          <img
            className="city-world-plate city-world-plate-native"
            src={selectedWorldImage}
            alt={host23NativeActive ? THREE_THROAT_REPLICA_BLOOM_COPY.alt : worldAlt}
            data-three-throat-replica-bloom-source={host23NativeActive ? THREE_THROAT_REPLICA_BLOOM_REGISTRY.source.path : undefined}
          />
        </section>
        <section
          className="city-command-panel three-current-panel"
          aria-labelledby={state.headingId}
        >
          <header className="three-current-heading">
            <p className="eyebrow">{state.owner}</p>
            <h1 ref={headingRef} id={state.headingId} tabIndex="-1">
              {headings[state.activeGroup] ?? state.phase}
            </h1>
            <p>
              {groupIntroductions[state.activeGroup]}
            </p>
          </header>

          <div
            id="three-current-status"
            className="extraction-floor-status"
            role="status"
            aria-live="polite"
            aria-atomic="true"
            data-message-id={state.statusMessageId}
          >
            <strong>System status</strong>
            <span>{state.statusMessage}</span>
          </div>

          {state.activeGroup === "tr10_relations" && (
            <ol className="three-current-relations">
              {state.observationControls.map((item) => (
                <li key={item.observationId}>
                  <strong>{item.status}</strong>
                  <span>{relationCopy[item.observationId]}</span>
                </li>
              ))}
            </ol>
          )}

          {state.activeGroup === "tr20_common_return" && (
            <section aria-labelledby="apparent-return-boundary">
              <h2 id="apparent-return-boundary">Apparent common return</h2>
              <p>
                The three visible relations appear to meet at one capped
                return. Its purpose, destination, and category remain unknown.
              </p>
            </section>
          )}

          {renderForm()}

          {state.failedIds.length > 0 && (
            <section className="three-current-repair" aria-labelledby="three-current-failed-boundaries">
              <h2 id="three-current-failed-boundaries">Named boundaries to review</h2>
              <ul>
                {state.failedIds.map((id) => (
                  <li key={id}>{productionFailedBoundaryCopy(id)}</li>
                ))}
              </ul>
              <p>The prior response has been cleared. No answer is retained or supplied here.</p>
            </section>
          )}

          {state.reviewRows.length > 0 && (
            <ol className="three-current-review" aria-label="Independent bounded review">
              {state.reviewRows.map((row) => (
                <li key={row.id}>
                  <strong>{row.label}</strong>
                  <span>{row.state}</span>
                </li>
              ))}
            </ol>
          )}

          {state.note && (
            <section className="three-current-note" aria-labelledby="three-current-note-heading">
              <h2 id="three-current-note-heading">Expedition-owned local note</h2>
              <ul>
                {state.note.relations.map((relation) => (
                  <li key={relation}>{relationCopy[relation]}</li>
                ))}
              </ul>
              <p>
                Apparent common return recorded; purpose unknown. Correspondence
                used sanitized replicas only.
              </p>
            </section>
          )}

          {state.availableActions.some((action) => action.startsWith("RETURN TO ")) && (
            <p id="three-current-return-boundary">
              PILOT // KNOWN RETURN · Each destination is already known. A
              return is write-free and replay-free, preserves verified records,
              and creates no evidence, onward route, or world response.
            </p>
          )}

          <div
            className="extraction-floor-actions three-current-actions"
            role="group"
            aria-label={`${headings[state.activeGroup] ?? state.phase} actions`}
          >
            {state.availableActions.map(actionButton)}
          </div>

          <p className="extraction-floor-negative-authority">
            This expedition record stays local to this browser and device; it
            stores finalized allowlisted evidence, not submitted code,
            selections, reasoning, account data, credentials, or source
            content. No live landscape, Azure, Foundry, endpoint, request,
            response, cloud sync, external action, access, authority, exam
            standing, exam guarantee, or world response is created.
          </p>
        </section>
      </main>
    </CanonicalGameFrame>
  );
}
