# First-Terminal orientation reflow accessibility gate

## Verdict

**PASS - the first-Terminal orientation reflow is cleared.** Canonical play keeps every required action visible without learner scrolling, narrow play provides a contained one-column recovery path, and the established focus, retry, target-size, CRT, and scene-containment contracts remain intact. No runtime or asset change was warranted in this gate.

## Numbered gate

1. **Canonical two-pane layout - healthy.** Explanation/disclaimer remain in the left pane; example or storage-boundary evidence, prompt, both answers, and feedback remain together in the right pane. Player's fresh measurements report `clientHeight = scrollHeight = 267` for run-control, safe-retry, and output-prediction. Storage-boundaries reports 267/274, but its prompt bottom (400.65), two answer bottoms (460.26), feedback bottom (480.94), and action-pane bottom (482.73) prove every required element is visible without scrolling. The residual 7 px is non-control box-model overflow hidden by the canonical contract.
2. **Answer targets and feedback - healthy.** Both canonical answers measure 53.54 px high; narrow answers measure 44 px high and 277.6 px wide. Feedback reserves space, uses `role="status"` with polite live announcement, remains fully visible after a wrong answer, and does not move required controls outside the canonical pane.
3. **Narrow reflow and containment - healthy.** Logical-narrow layout switches to a one-column flow within the existing Terminal scroller. Fresh live geometry reports 168/639 px vertical client/scroll height and 294/294 px client/scroll width, establishing reachable vertical content with no horizontal escape. Wrong-answer recovery reached scroll position 470.4/480 and exposed the complete retry message.
4. **Focus, retry, and recovery - healthy.** Wrong answers do not advance and preserve focus on the selected answer. A correct retry advances exactly one step and the layout effect focuses the new step heading. Close/reopen preserves the current orientation step and restores the scene trigger; orientation completion focuses the editor; reload/session boundaries retain their established clearing behavior.
5. **CRT and scene containment - healthy.** The orientation remains inside the 624 x 343 canonical and 312 x 171 narrow Terminal bounds. The canonical action pane clips only its non-control residue, narrow content scrolls inside the Terminal, and no change regresses exact 320 x 240 playfield containment, the compact threshold, scene controls, or decorative bezel behavior.

## Validation

- Accepted Player Agent's fresh live canonical and 320 x 240 measurements and recovery walkthrough as the runtime evidence for this bounded gate.
- Reviewed current `App.jsx`, orientation CSS, Coder and Player logs, and focused regression contracts.
- `node --test test/terminalExercise.test.js test/canonicalFrame.test.js`: 7/7 passed.
- Current Coder evidence: full unit suite 169/169 and production build passed.
- No retained screenshot was available because Player removed temporary captures after measurement; this gate therefore does not make a screenshot-based visual or WCAG-conformance claim.
- Human NVDA announcement cadence, physical switch control, forced colors, and 200% zoom remain outside this bounded gate.

## Handoff

Preserve the canonical two-pane grouping, visible prompt/answers/feedback bounds, 44 px minimum answers, narrow one-column scroll containment, polite status feedback, and heading/trigger/editor focus lifecycle.

## Status

`PASS - first-Terminal orientation reflow cleared`
