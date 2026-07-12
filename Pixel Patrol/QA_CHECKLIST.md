# Pixel Patrol QA Checklist

Run at native 640 x 480, 2x 1280 x 960, the 320 x 240 alternate layout, and a non-multiple host such as 1600 x 900.

## Canvas and scaling

- [ ] Runtime logical canvas is exactly 640 x 480.
- [ ] World is 640 x 360 and lower band is 640 x 120.
- [ ] Complete canvas scales as one unit at integer multiples.
- [ ] Non-multiple hosts letterbox; no unequal x/y scaling.
- [ ] Smoothing is disabled in canvas and CSS.
- [ ] Narrow mode uses authored 320 x 240 layout, not resampled production art.
- [ ] Screenshot color sampling finds no alpha-fringe colors on hard silhouettes.

## World art

- [ ] Scene reads landmark -> actor/Terminal -> route -> detail at 1x.
- [ ] Walkable strip and exits are readable without hotspot labels.
- [ ] Required target differs from its background by shape plus value.
- [ ] Cluster sizes, outline weights, palette ramps, and dither density meet the bible.
- [ ] Concept art has been reinterpreted; no painterly plate or generic pixel filter ships.
- [ ] Scene does not reproduce a reference composition, prop, icon, character, or palette sequence.

## Character and motion

- [ ] Sprite scale stays within authored depth bands.
- [ ] Key poses read in silhouette and feet do not slide.
- [ ] Animation drawings change at the specified authored cadence.
- [ ] No filtered transforms or subpixel sprite placement.
- [ ] Reduced-motion mode preserves every semantic state.

## Interaction and inventory

- [ ] Cursor ready state has shape change, not color alone.
- [ ] Click default action is named before execution.
- [ ] Hold action cluster appears within 280-450 ms and cancels safely outside.
- [ ] Inspect, Operate, Address have keyboard equivalents and visible focus.
- [ ] Inventory selection is reversible and remains labeled.
- [ ] Invalid combinations consume nothing and provide recovery guidance.
- [ ] All pointer targets are at least 44 x 44 CSS at tested layouts.

## Dialogue and progress

- [ ] Dialogue uses at most three lines, period-correct logical type, and readable holds.
- [ ] Choice selection has bracket, underline, and value shift.
- [ ] ROUTE OPEN appears only after mastery plus acknowledgement.
- [ ] ROUTE OPEN persists correctly and never overlaps recovery or choices.
- [ ] Cutscene skip lands in a valid operable state and returns focus/cursor visibly.

## Terminal

- [ ] SOURCE, EVIDENCE, TASK, CALIBRATE tabs are always discoverable.
- [ ] Selected tab changes silhouette and border connection.
- [ ] Button cluster dimensions and labels match the spec.
- [ ] Calibration values are conveyed by blocks plus text.
- [ ] Error identifies failing location, evidence cue, and next action.
- [ ] Full browser stack traces are not dumped on beginners.
- [ ] Close/reopen, reload, completion, and privacy behavior match exercise contracts.
- [ ] Completion waits for explicit acknowledgement.
- [ ] The exact 102-character keyboard-orientation sentence is the final workspace row, not between route status and task.
- [ ] At 640 px it occupies one line with no clipping, ellipsis, or horizontal scroll; at 320 px it wraps to three complete lines.
- [ ] The footer does not cover the last focusable pane control at any scroll position.
- [ ] Focused Calibration tabs retain a visible 2 px internal outline, including when the selected tab is focused.
- [ ] Responsible AI field cards show complete labels and selects; none collapse into border-only strips.
- [ ] Responsible AI has one form scroller at both 640 x 480 and 320 x 240; the field grid does not create a nested scrollbar.
- [ ] Tab order and scroll order both remain principle -> stakeholder -> mitigation -> owner -> validator -> remediation.
- [ ] The focused select outline remains visible at the top and bottom scroll boundaries.
- [ ] After Check, score, remediation, and the next available action are visible together in the validator region.
- [ ] Transfer selects and closed-note inputs show the same 2 px internal focus frame at 640 x 480 and 320 x 240.
- [ ] Transfer and explanation stages remain visibly distinct in title, filename/status, and pane label.
- [ ] Closed-note typed values and field-associated remediation remain fully legible without horizontal scrolling.
- [ ] Model/deployment primary displays exactly one of eight cards and a persistent `PRIMARY n/8` status.
- [ ] Best decision precedes requirement-based reason in visual and keyboard order.
- [ ] The two fields are equal columns at 640 x 480 and one ordered column at 320 x 240.
- [ ] The Model Choices form is the only scroller; its field group and outer Terminal do not scroll independently.
- [ ] Decision/reason focus frames, field feedback, score, comparison hint, and next action remain unclipped.
- [ ] Dialogue ownership labels remain in the lower band and do not replace lesson/item status inside the Terminal.
- [ ] L-02-03 primary, transfer, closed-note, and mastered states expose the correct five-label hierarchy.
- [ ] Phase-aware exits name the active phase and use the System lower-strip speaker; completion uses the 901 Teacher speaker.
- [ ] Closing clears private draft controls while keeping sanitized eligibility; the visible message states that consequence.
- [ ] Primary, transfer-remediation, and closed-note captures exist under distinct filenames and are byte-distinct.
- [ ] Layer motif, border weights, focus frames, validator color, and typography remain consistent across all three captures.
- [ ] Structured Packets primary, transfer-remediation, and closed-note captures exist and are byte-distinct.
- [ ] System regions contain only score/pass state; Teacher remediation remains in its labeled amber two-pixel-rail block.
- [ ] Pilot closed-note prose and the three fields appear before System validation in visual and DOM order.
- [ ] Source, output/checks, and narrow stacked work remain contained without moving Terminal title/status chrome.
- [ ] Source textarea and all three explanation inputs retain visible 2 px focus outlines at scroll boundaries.
- [ ] Failed fields expose associated Teacher remediation; correct fields expose neutral System confirmation.
- [ ] Strict mastery closes the Terminal and moves focus to Continue, not Resume.
- [ ] Control Flow presents parameter -> loop -> condition/append -> return in that order.
- [ ] The `>=` equality boundary remains legible in task, source, checks, or Teacher remediation.
- [ ] Primary/transfer source and closed-note three-field views retain System/Teacher/Pilot separation.
- [ ] Control Flow primary, transfer-remediation, and closed-note captures exist and are byte-distinct.
- [ ] The closed-note parameter, loop/condition, and return fields have associated remediation and visible focus.
- [ ] Direct mastery and mastered-save resume both place focus on Continue.
- [ ] Client Bridge warning remains visible and complete in code, retrieval, and explanation phases at both logical sizes.
- [ ] Module -> file -> secret -> request -> response order matches visual, DOM, and keyboard order.
- [ ] Five closed-note fields use one row at 640 x 480 and one ordered column at 320 x 240.
- [ ] Missing-secret and redaction failures expose Teacher guidance without reproducing a secret or authorization value.
- [ ] System score, Teacher remediation, and Pilot source/prose remain visually and programmatically separate.
- [ ] Client Bridge primary, transfer-remediation, and closed-note captures exist and are byte-distinct.
- [ ] Direct mastery and restored mastery place focus on Continue.
- [ ] Text Analysis terminology bridge persists unchanged in primary, transfer, and closed-note phases.
- [ ] Keyword extraction and key phrase extraction are visibly connected, not presented as competing capabilities.
- [ ] Key phrases, entities, sentiment, and summary remain distinct workload reads.
- [ ] Stable document ID precedes per-document success/error branching in explanation and remediation.
- [ ] Four closed-note fields are associated, focused, and ordered at canonical and narrow sizes.
- [ ] System score, Teacher capability/correlation remediation, and Pilot prose remain separate.
- [ ] Three Text Analysis captures exist and are byte-distinct; direct/restored mastery focuses Continue.

## No-dead-end sweep

- [ ] Speech warning remains complete in primary, transfer, and closed-note modes and explicitly states the offline/no-audio boundaries.
- [ ] Speech transcript-equivalent direction occupies its own row and never overlaps scenario or explanation content.
- [ ] Recognition audio -> text, synthesis text -> audio, spoken multimodal prompt flow, file direction, and result/cancellation are distinct in reading and remediation order.
- [ ] Speech Pilot inputs, neutral System scores, and Teacher direction/cancellation remediation remain separate.
- [ ] Speech primary, transfer-remediation, and closed-note captures are byte-distinct at canonical, narrow, and host-context presentation; scrolling preserves all content.
- [ ] Speech direct/restored mastery moves focus to Continue, with square-pixel chrome and focus language unchanged.
- [ ] Visual offline, text-equivalent, and deprecation warnings remain complete, ordered, and non-overlapping in every phase.
- [ ] Analysis, multimodal prompting, image generation, and video generation remain four distinct workload reads.
- [ ] Media path/type validation precedes request handling; analysis JSON and generated-media output remain visibly distinct.
- [ ] Visual Pilot inputs, neutral System scores, and Teacher workload/media remediation remain separate.
- [ ] Visual primary, transfer-remediation, and closed-note captures are byte-distinct across canonical, narrow, and host-context presentation.
- [ ] Visual direct/restored mastery moves focus to Continue; the single form traversal preserves all content at 320 x 240.

- [ ] Every scene can recover after every ordinary verb on every hotspot.
- [ ] No required item can be lost or consumed early.
- [ ] Hints and retries remain available after failure and restore.
- [ ] Keyboard-only and pointer-only runs can reach the same safe ending.
- [ ] Save forgery cannot unlock route, completion, or credits.
