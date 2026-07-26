import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const entry = readFileSync(
  new URL("../src/CalibrationMarginEntry.jsx", import.meta.url),
  "utf8",
);
const view = readFileSync(
  new URL("../src/CalibrationMarginExtractionFloor.jsx", import.meta.url),
  "utf8",
);
const styles = readFileSync(
  new URL("../src/styles.css", import.meta.url),
  "utf8",
);

test("IE-EXP-024 one extraction owner group replaces Python inside invariant frame", () => {
  assert.match(entry, /extractionFloorActive \? \(/);
  assert.match(entry, /<CalibrationMarginExtractionFloor/);
  assert.match(entry, /className="city-world calibration-margin-world"/);
  assert.equal((entry.match(/city-threshold-overview-master\.png/g) ?? []).length, 1);
  assert.equal((entry.match(/<img\b/g) ?? []).length, 1);
  assert.doesNotMatch(view, /\bhidden\b|aria-hidden|\binert\b|position:\s*absolute/);
  assert.match(view, /data-active-group=\{state\.activeGroup\}/);
});

test("IE-EXP-025 labels, native states, errors and one atomic status are structural", () => {
  assert.match(view, /<fieldset/);
  assert.match(view, /<legend>\{copy\.label\}<\/legend>/);
  assert.match(view, /name=\{`\$\{state\.activeGroup\}-\$\{name\}`\}/);
  assert.match(view, /\brequired\b/);
  assert.match(view, /checked=\{state\.fieldValues\[name\] === choice\}/);
  assert.match(view, /aria-invalid=\{error \? "true" : undefined\}/);
  assert.match(view, /aria-describedby=\{error \? `\$\{helpId\} \$\{errorId\}` : helpId\}/);
  assert.equal((view.match(/role="status"/g) ?? []).length, 1);
  assert.equal((view.match(/aria-live="polite"/g) ?? []).length, 1);
  assert.equal((view.match(/aria-atomic="true"/g) ?? []).length, 1);
  assert.match(view, /data-status-message-id=\{state\.statusMessageId\}/);
});

test("IE-EXP-026 controls are 44px, clear is native-disabled and focus is deterministic", () => {
  assert.match(
    styles,
    /\.extraction-floor-options label \{[\s\S]*?min-width: 44px;[\s\S]*?min-height: 44px;/,
  );
  assert.match(
    styles,
    /\.extraction-floor-actions button \{[\s\S]*?min-width: 44px;[\s\S]*?min-height: 44px;/,
  );
  assert.match(view, /disabled=\{disabled\}/);
  assert.match(view, /aria-disabled=\{disabled \? "true" : undefined\}/);
  assert.match(view, /headingRef\.current\?\.focus/);
  assert.match(view, /inputRefs\.current\.get\(target\)\?\.focus/);
  assert.match(view, /actionRefs\.current\.get\(target\)\?\.focus/);
  assert.match(styles, /\.extraction-floor-panel :focus-visible \{[\s\S]*?outline: 3px/);
});

test("IE-EXP-027/028 desktop, narrow, zoom-safe, forced-color and reduced-motion rules exist", () => {
  assert.ok(
    entry.indexOf("calibration-margin-world")
      < entry.indexOf("<CalibrationMarginExtractionFloor"),
    "world precedes extraction group in DOM order",
  );
  assert.match(
    styles,
    /@media \(min-width: 1280px\)[\s\S]*?data-extraction-floor="true"[\s\S]*?grid-template-columns: minmax\(0, 3fr\) minmax\(430px, 2fr\)/,
  );
  assert.match(
    styles,
    /@media \(max-width: 1279px\)[\s\S]*?data-extraction-floor="true"[\s\S]*?grid-template-columns: 1fr/,
  );
  assert.match(
    styles,
    /@media \(max-width: 767px\)[\s\S]*?\.extraction-floor-actions/,
  );
  assert.match(
    styles,
    /@media \(forced-colors: active\)[\s\S]*?\.extraction-floor-panel[\s\S]*?Highlight/,
  );
  assert.match(
    styles,
    /@media \(prefers-reduced-motion: reduce\)[\s\S]*?\.extraction-floor-panel[\s\S]*?transition: none;[\s\S]*?animation: none;/,
  );
  assert.doesNotMatch(styles, /\.extraction-floor[^}]*\btransform:\s*scale/);
});

test("IE-EXP-003/007/010/013/017 blankness and answer-free repair have no defaults", () => {
  assert.doesNotMatch(view, /\splaceholder=/);
  assert.doesNotMatch(view, /\bdefaultValue=/);
  assert.match(view, /checked=\{state\.fieldValues\[name\] === choice\}/);
  assert.match(view, /<option value="">Not recorded<\/option>/);
  assert.match(view, /repairCopy\[failedId\]/);
  assert.doesNotMatch(view, />\s*\{failedId\}\s*</);
  assert.doesNotMatch(view, /correctAnswer|expectedAnswer|isCorrect/);
});

test("IE-EXP-014/019/029/032/033 UI has silent course ownership and hard stop", () => {
  assert.match(view, /EXPEDITION TRAINING CASE \/\/ LOCAL/);
  assert.match(view, /Supplied input:/);
  assert.match(view, /Output record:/);
  assert.match(view, /Unavailable input:/);
  assert.match(view, /Provenance:/);
  assert.match(view, /Course-authored practice runs offline on this device/);
  assert.match(view, /not City evidence or a live Microsoft Foundry or Content/);
  assert.match(view, /no onward action is available/i);
  assert.doesNotMatch(
    view,
    /<audio|<video|waveform|microphone|camera|permission request|CITY ACCEPTED|ACCESS GRANTED/i,
  );
  assert.doesNotMatch(
    view,
    /CM-40|SAVE EXPEDITION NOTE|MARK ONWARD|RP-004|RP-013|onWorld|hotspot|mask|relight/i,
  );
});

test("Quartermaster production copy retires raw evaluator labels without marking an answer", () => {
  const expectedChoiceKeys = [
    "process_supplied_content_only",
    "process_every_referenced_source_even_when_not_supplied",
    "infer_the_missing_source_from_the_supplied_images",
    "schema_aligned_structured_fields_with_provenance",
    "return_a_free_form_summary_without_provenance",
    "return_schema_fields_without_source_links",
    "preserve_unavailable_field_as_null_do_not_infer",
    "record_the_unavailable_field_as_a_negative_result",
    "infer_the_unavailable_value_from_other_sources",
    "identify_supplied_modalities_and_sources",
    "treat_every_named_modality_as_supplied",
    "use_the_requested_schema_as_proof_of_source_availability",
    "return_requested_fields_in_the_defined_schema",
    "return_an_unstructured_description",
    "add_fields_outside_the_defined_schema",
    "ground_supported_values_and_leave_unsupported_values_null",
    "convert_unsupported_values_to_false",
    "fill_unsupported_values_from_context",
    "process_the_available_video_without_claiming_audio_analysis",
    "claim_audio_analysis_from_the_video_track",
    "treat_the_missing_audio_file_as_silent_audio",
    "return_schema_fields_with_source_provenance",
    "return_schema_fields_without_source_provenance",
    "replace_the_requested_schema_with_a_narrative_summary",
    "keep_audio_only_fields_null_until_audio_is_supplied",
    "mark_audio_only_fields_as_negative",
    "infer_audio_only_fields_from_video",
    "unavailable_input_can_be_reported_as_a_negative_result",
    "unavailable_input_cannot_support_an_extracted_value",
    "missing_input_can_be_inferred_from_available_modalities",
  ];
  expectedChoiceKeys.forEach((key) => {
    assert.match(view, new RegExp(`\\b${key}:`));
  });
  assert.doesNotMatch(view, /function humanize/);
  assert.match(view, /getCalibrationMarginExtractionChoiceLabel\(choice\)/);
  assert.doesNotMatch(view, /correctAnswer|expectedAnswer|isCorrect|data-correct/);
});
