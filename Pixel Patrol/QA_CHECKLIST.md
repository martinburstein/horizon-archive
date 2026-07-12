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

## No-dead-end sweep

- [ ] Every scene can recover after every ordinary verb on every hotspot.
- [ ] No required item can be lost or consumed early.
- [ ] Hints and retries remain available after failure and restore.
- [ ] Keyboard-only and pointer-only runs can reach the same safe ending.
- [ ] Save forgery cannot unlock route, completion, or credits.
