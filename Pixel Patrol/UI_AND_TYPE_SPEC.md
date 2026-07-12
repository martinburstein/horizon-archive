# UI and Type Specification

## Lower band hierarchy

The 640 x 120 lower band is Horizon Archive's major intentional departure from Curse's scene-first full-frame UI.

```text
y 360-367  top seam and current-context strip
y 368-407  dialogue / narration, up to 3 lines
y 408-447  contextual actions, inventory, or Terminal status
y 448-471  persistent progress / recovery row
y 472-479  bottom frame and focus-safe inset
```

- Band fill: near-black indigo; separate from the world with one 1 px light edge and one 2 px shadow block.
- Main dialogue: 8 px cap height, 10 px line advance, maximum 58 monospaced columns or equivalent proportional measure.
- Speaker/context label: 7 px cap height, uppercase, one line.
- Compact system label: 6 px cap height, 8 px line advance.
- Choice list: no more than five visible rows; 12 px row height; selected row has a left bracket, inverted 1 px underline, and value shift.
- Use an original bitmap font licensed for the project. Never extract, trace, imitate glyph-for-glyph, or package a LucasArts font.

## Verb and cursor interaction

- Default cursor: original four-point survey reticle, 11 x 11, 1 px stem; hotspot-ready state adds a lower-right 3 x 3 square and changes central negative space.
- Primary activation on a hotspot performs the default safe action shown in the lower band.
- Press-and-hold for 280-450 ms opens an original **three-lobe action cluster** around the cursor: Inspect, Operate, Address. It is not circular gold, uses no skull/hand/parrot imagery, and has an asymmetric Machine silhouette.
- Keyboard alternatives: `I` Inspect, `O` Operate, `A` Address, `Tab` inventory, `Esc` dismiss; visible legend appears on first use and remains available in Help.
- Selected lobe grows by 2 px, inverts its center mark, and gains a 1 px outer bracket. Never use color alone.
- Release executes; moving outside cancels safely. A short click always uses the labeled default action.
- Invalid actions produce a specific non-punitive line and leave state unchanged. Never consume an item or lock progression on an invalid attempt.

## Inventory

- Modal Machine tray, 448 x 224, centered at x=96, y=68 over a 25% ordered darkening mask.
- 5 columns x 2 rows visible; slot 72 x 72 with 8 px gutters. Paging uses original paired rail marks, not arrows copied from references.
- Item art fits 48 x 48 and has an 8 px quiet margin. Item name appears in the lower band, not baked into the slot.
- Selected item becomes a 24 x 24 cursor badge with a persistent text label. `Esc` or right click returns it to inventory without loss.
- Combining items is reversible until explicitly confirmed when the operation could change learning evidence.

## Terminal four-pane layout

The Exercise Agent handoff is resolved with a compact calibration layout that preserves all four content families without tiny modern IDE chrome.

### Full 640 x 480 Terminal mode

```text
x 000-407  editor/evidence main pane
x 408-639  task and calibration pane
y 000-025  four tabs
y 026-327  pane content
y 328-359  Run / Validate / Hint cluster
y 360-479  shared dialogue, output, and status band
```

- Four tabs: **SOURCE**, **EVIDENCE**, **TASK**, **CALIBRATE**. Only two can be expanded at once; all four remain visible as 102 px, 102 px, 102 px, and 102 px tabs plus frame gaps.
- Selected tab silhouette: top edge rises 2 px, lower border disappears into its pane, and a 6 x 3 notch appears at left. Inactive tabs remain flat. This is the primary state signal.
- Tab labels use 6 px cap height. No close icons unless a tab is genuinely closable.
- Compact calibration UI: three stacked 208 x 24 rows for Confidence, Source fit, and Null policy. Each uses a 6-step block meter; keyboard left/right changes one block; the current value is also spelled out.
- Button cluster at x=416-632, y=328-355: `RUN` 64 x 24, `VALIDATE` 80 x 24, `HINT` 56 x 24, gaps 4 px. Default focus is RUN only when source changed; otherwise it remains where the learner left it.
- Traceback/error emphasis: first failing line gets a 2 px left rail and 1 px underline; output shows one headline, one evidence cue, and one next action. Never flood the pane with a full browser stack trace.
- Success changes the Run cluster geometry and exposes an acknowledgement control. Completion never auto-advances before acknowledgement.

### Narrow Terminal mode

- Keep the 320 x 180 world module visible above the dock.
- Tabs become a 2 x 2 grid of 156 x 24 controls; selected silhouette rules remain.
- One pane visible at a time; task summary pins above the editor in a 48 px block.
- RUN / VALIDATE / HINT each remain at least 92 x 44 CSS.
- Output and remediation follow the editor in DOM/tab order; no horizontal scroll for prose.

## Persistent ROUTE OPEN

- Location: lower band right edge, x=520-631, y=448-471 on full canvas; narrow x=204-315, y=216-239.
- Shape: 108 x 20 frame with a three-segment route glyph and literal `ROUTE OPEN` label.
- Appears only after the route's mastery and acknowledgement gates both pass.
- Persists until scene transition and reappears on completed-save resume. It cannot overlap dialogue choices, error recovery, or inventory paging.
- Locked state must never display the words faintly; absence avoids false affordance.

## Calibration keyboard-orientation footer

Decision: place the exact sentence `Tab moves through this workspace. Shift+Tab moves back. Escape closes without discarding this session.` in a persistent footer below the active pane. Do not place it between the route-status strip and pane content.

- The copy is exactly 102 characters. At the production 5 x 7 bitmap-style face with 6 px character advance, it occupies 612 px. Two 10 px horizontal insets make a 632 px row inside the 640 px border box; after two 2 px frame edges, 4 px of safety remains.
- Footer height at canonical width is 19 px: 1 px top seam + 3 px top padding + 12 px line box + 3 px bottom padding. It is the final row of the Terminal workspace and does not overlay pane controls.
- The route strip remains directly beneath the tabs. The active task begins immediately after it, preserving `tab -> file/form/ROUTE OPEN -> task` as the visual hierarchy.
- The footer remains earlier than pane controls in DOM reading order so a screen-reader user receives orientation before interaction. CSS grid placement moves it visually without changing that order.
- At 320 px narrow presentation the sentence remains exact and wraps naturally to three 12 px lines inside the available 296 px text width. The reserved footer becomes 43 px high; no ellipsis, clipping, abbreviation, or horizontal scrolling is allowed.
- Footer fill is one value lighter than the deepest route strip and one value darker than pane content. It uses a 1 px top seam only; this reads as period status chrome without imitating a proprietary interface.
- Calibration tab focus uses a 2 px gold internal outline with `-3px` offset so it remains visible and cannot be clipped by the tab strip. Selected-tab silhouette and focus outline must both remain visible when they coincide.

## Safe failure contract

Every failure response contains: what the Machine observed, one bounded cue, and one next available action. Required controls remain enabled. Hints do not reduce attempts or erase work. There are no dead ends, item-loss traps, surprise deaths, or irreversible ordinary experiments.

## Model and deployment choice cards

- The eight-card primary form is sequential: render exactly one scenario at a time and retain `PRIMARY n/8` in the Terminal status. Never compress all eight into a dashboard or checklist.
- Each card contains a scenario header followed by the paired fields **Best decision** and **Requirement-based reason**. At 640 x 480 they form two equal columns; at 320 x 240 they become one column in decision-then-reason order.
- The form is the only scroll owner. The outer Terminal frame stays fixed, and the two-field group uses visible overflow so it cannot create a nested scrollbar.
- Decision and reason selects use the established 2 px gold internal focus frame with -3 px offset. Field feedback remains directly below its owning select and cannot be detached into a remote summary.
- Validator order is score -> requirement/layer cue -> comparison hint -> next action. The hint must distinguish model, deployment, and request configuration rather than merely announcing an incorrect answer.
- Stage hierarchy is title -> `primary_choices.json` and lesson/status -> course-authored/live-facts boundary -> topic/item count -> scenario -> decision/reason -> strict validator. Speaker ownership remains outside the modal in the lower dialogue band and must not compete with item status.
- Native controls and scrollbars remain until accessible original bitmap equivalents exist. Square one- and two-pixel borders, stepped state changes, and the limited indigo/amber ramp provide period character without copying proprietary chrome.
- Across the complete flow, preserve five ownership/context labels: course-authored/live-facts boundary; `MODEL · DEPLOYMENT · REQUEST CONFIGURATION`; `PILOT // DECISION OWNER`; `SYSTEM // ... VALIDATOR`; and `901 TEACHER // ... GATE/COMPLETE`. These labels form a semantic hierarchy, not decorative badges.
- Exit copy must name `Primary form`, `Transfer form`, or `Closed-note gate` and render in the lower strip under `SYSTEM // EXPEDITION STATE`. Primary and strict-mastery completion copy renders under `901 TEACHER // SOURCE-GROUNDED COURSE`.
- Motif continuity is phase-stable: indigo frame for Machine context, amber for volatile-source/boundary text, violet for phase/item labels, light text for learner-owned decisions, and amber validator feedback. Do not assign a new palette to transfer or closed-note stages.

## Structured Packets ownership and density

- Reading hierarchy is Machine title -> filename/form score -> course-authored/reverification boundary -> phase and Pilot ownership -> task/data-path trace -> editable Python -> System score/checks -> Teacher remediation/action.
- `SYSTEM // STRICT 8-CHECK VALIDATOR` and the closed-note System validator report only deterministic scores and completion state. Course explanations belong in a separately framed amber `901 TEACHER // ... REMEDIATION` block.
- Closed-note prose begins with `PILOT // CLOSED-NOTE EXPLANATION OWNER`, followed by exactly three associated fields: container path, nested access, and JSON round trip. Correct dimensions use neutral System confirmation; missed dimensions use explicit Teacher reconstruction cues.
- Keep the outer Terminal fixed. The primary/transfer work region owns traversal through task, source, and output; the textarea retains its expected intrinsic code scroll, and the output region may scroll its check list without moving title/status chrome. At narrow width the stacked work region is the page-level content scroller.
- Primary source remains readable at 640 x 480 with 0.68rem/1.4 monospace code. The 320 x 240 transfer view prioritizes title, form score, boundary, and phase before deeper content; no information is removed, and the work region scrolls below.
- Focus uses the project 2 px gold square outline. After strict mastery closes the Terminal, focus moves to Continue in the lower dialogue strip; Resume must not retain focus.
- Structured Packets reuse the indigo, amber, violet, and pale-code ramp already established by earlier Terminals. Brackets, one-pixel seams, two-pixel ownership rails, and hard-edged panels supply period character without proprietary imitation.

## Responsible AI primary-form containment

- The canonical Terminal sits 8 px inside the 640 x 360 world viewport, producing a 624 x 344 border box. The authored 320 x 240 alternate uses a 4 px inset.
- Do not force prompt, four field cards, and validator into three simultaneously visible grid rows. The initial 640 x 480 QA capture compressed the field region to approximately 18 px, exposing only card borders and hiding the actual controls.
- Treat the form as one vertically scrollable document: scenario header -> principle -> stakeholder -> mitigation -> accountable human owner -> validator -> remediation/action.
- The four-field container itself must not scroll. Each card takes its natural height for label, select, and associated feedback. This prevents nested-scroll traps and keeps keyboard focus movement consistent with visual movement.
- The validator follows the fourth field. Because the learner must reach its submit button to validate, resulting error/remediation text appears in the same visible region without an automatic viewport jump.
- Scrollbars, borders, and focus outlines remain square and whole-pixel. Use the browser's functional scrollbar until an original accessible pixel scrollbar exists; never hide the only position cue.
- At 640 x 480, retain the two-column field grouping. At 320 x 240, use one column and the same single form scroller. No field label, selected value, feedback association, or focus outline may be horizontally clipped.
- Transfer selects and closed-note text inputs share the same 2 px gold focus outline with a -3 px internal offset. The frame must remain visible at both scroll boundaries and does not depend on native platform glow or color fill alone.
- Stage hierarchy remains title -> filename/form status -> non-exam boundary -> stage label and scenario -> four fields -> validator/remediation. `PRIMARY`, `TRANSFER`, and `EXPLANATION` must never be communicated only by filename.
