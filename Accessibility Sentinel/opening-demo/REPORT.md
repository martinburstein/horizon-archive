# Opening demo accessibility audit

## Post-fix scope and verdict

Source-and-test gate for title -> save creation -> character naming -> three prologue beats -> Chapter I reveal -> first Glass Meadow -> first Terminal orientation.

**PASS for the post-fix opening relay.** No current P0-P2 source or automated-test defect was confirmed. The opening now resists pointer, keyboard, and switch-like activation bursts; moves focus through each state boundary; associates the conditional save-replacement warning with its destructive action; and keeps the compact orientation sequence ordered, recoverable, and usable. No implementation change was warranted in this pass.

## Confirmed behavior

1. `evaluateOpeningActivation()` rejects multi-clicks, held Enter/Space repeats, and accepted activations within the 400 ms burst window. `advanceOpeningProgress()` advances only one persisted prologue/chapter state for one accepted activation. Regression tests cover pointer and keyboard bursts.
2. Setup, every prologue beat, and Chapter I focus their visible heading. Entering the Meadow sets a one-shot pending flag and focuses the primary Terminal hotspot after the playing state mounts. Opening the Terminal focuses its orientation heading; every orientation step refocuses that heading; close restores the physical trigger; completion focuses the editor.
3. The conditional save-replacement warning has a stable ID and is included in the Create Slot control's accessible description only when a resumable slot will be replaced.
4. The compact opening uses 8 logical px for secondary copy and at least 9 logical px for body/actions where agreed. The Meadow's primary hotspot label remains 8 logical px, and the first-Terminal orientation uses rem-based labels with two-column choices that retain a 44 px minimum height. The narrow Terminal inset remains four logical pixels without clipping the dialog.
5. First-Terminal orientation DOM order is context heading/copy -> current action/example -> named choice group -> polite feedback. The privacy/save disclaimer appears only once at the relevant run-control step, and storage boundaries appear once at the dedicated boundary step. Tests guard source order, occurrence counts, session-only orientation state, reload clearing, and trigger restoration.
6. Character-name help/errors remain programmatically associated; invalid input exposes `aria-invalid` and a live alert. Native controls, visible focus treatment, reduced-motion support, non-color wording, and crisp square-pixel rendering remain intact.

## Resolved findings from the initial audit

- **Resolved P1 - Chapter I to Meadow focus:** the primary Meadow Terminal hotspot now receives focus after the chapter action unmounts.
- **Resolved P2 - compact opening readability:** the relevant opening copy/action floor was raised from the earlier 5-8 logical px range to the agreed 8-10 logical px range. Native-scale and 200% zoom observation remains a human check, not an automated conformance claim.
- **Resolved P2 - save-warning relationship:** Create Slot conditionally uses `aria-describedby="save-replacement-warning"`.
- **Resolved burst-skip risk:** accepted opening activations are debounced and held Enter/Space events are suppressed without blocking a deliberate single activation.

## Human-only checks before an accessibility-conformance claim

- Run one NVDA keyboard pass to confirm the perceived cadence and order of heading changes, the save warning, Terminal disclaimer, state boundaries, and polite feedback.
- Exercise a physical switch/repeat-key setup to confirm device timing matches the modeled repeat and 400 ms burst cases.
- Inspect Windows forced-colors/high-contrast focus indicators and borders.
- Inspect 320 x 240 native presentation and 200% browser zoom for perceived text readability, scroll reachability, and control clipping.

## Validation

- `node --test test/openingFlow.test.js test/terminalExercise.test.js`: 12/12 passed
- `npm test`: 169/169 passed
- `npm run build`: passed; existing 697.37 kB chunk-size warning remains
- Static review: activation gate, state progression, heading/Meadow/Terminal focus lifecycle, warning association, compact CSS, orientation reading order, live feedback, privacy boundaries, persistence, and target size
- Browser and human AT QA: not run; coordinator-owned

## Handoff

Preserve the activation gate, one-shot Meadow focus flag, conditional warning description, orientation DOM order, single disclaimer/boundary occurrences, and 44 px choice targets. The opening may advance to the next relay step; schedule the listed human checks before making a formal accessibility-conformance claim.

## Status

`PASS - ready to advance with human-only verification risks documented`
