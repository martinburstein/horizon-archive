# Frozen Playable Demo Accessibility Gate

## Decision

**PASS / FREEZE through SIM-01.** No accessibility, privacy, ownership, progression, or no-authority blocker was found. No runtime, curriculum, art, or test change is warranted inside the demo freeze.

This is a release gate, not a WCAG conformance claim. Automated browser and source evidence cannot substitute for a real assistive-technology session.

## Evidence

1. **Keyboard and focus:** the shared named modal moves focus to its title, traps Tab and Shift+Tab, supports Escape, makes the background modal-inert, and restores the exact trigger or next meaningful action. The title-to-credits E2E passes SIM-01 launch, completion focus, reload focus, native form controls, visible focus contracts, and zero runtime errors.
2. **Direct open, close/reopen, and reload:** the Capstone handoff exposes `Continue to mixed simulation`; SIM-01 derives the first incomplete item only from sanitized two-dimension completion evidence. Focused tests cover timed and untimed mid-block derivation, forged cursor/private-response rejection, close/reopen session clearing, reload derivation, restored item labels, and the all-complete/unacknowledged result. Full E2E separately passes sanitized reload and final progression focus.
3. **Semantics and names:** SIM-01 is a named `role="dialog"` with `aria-modal="true"`, warning and text-equivalent descriptions, native checkbox/select/radio/button controls, explicit decision/reason names, associated invalid-field repair text, and a polite result status. Pilot, System, and 901 Teacher ownership remain distinct.
4. **Timer equivalence:** untimed is the default and visibly equivalent. The timer is optional diagnostic state, has text status, is not a countdown pressure cue, and cannot alter correctness or completion. Focused tests pass strict 24/24 in timed and untimed evidence.
5. **Privacy and authority:** the persistent dialog description says that no exam text, notes, content, credentials, endpoints, payloads, responses, requests, choices, or prose persist. It also states no service, Azure change, communication, disclosure, publication, purchase, deletion, or external action occurs or is authorized. Sanitizer and E2E privacy checks pass; completion remains explicitly “not an exam result.”
6. **Constrained and no-motion presentation:** the established authored 640 x 480, 320 x 240, and scaled-host contracts use one Terminal scroll owner, square-pixel rendering, persistent text labels, and visible focus. Reduced motion disables smooth scrolling; no SIM-01 state requires motion.
7. **No-color physical equivalent:** the native SIM-01 validator passes exact 64 x 64 RGBA, exact nearest-neighbor 2x, seven pairwise-distinct grayscale component tiles, distinct five/seven banks, split decision/reason sockets, detached timer, remediation return, keyed retention, and blocked external authority. The motif supplements rather than replaces live text.

## Validation

- `npm test`: **159/159 passed**
- `npm run build`: passed; non-blocking 688.64 kB chunk advisory only
- SIM-01 mixed-motif validator: all **14 acceptance checks passed**
- Full title-to-credits E2E: passed in **96.6 seconds**, credits reached, all registered gates true, zero runtime errors
- Native isolation strip visually inspected at original resolution
- Incidental regenerated QA PNG changes reverted before handoff

## Deferred risks

- **P2 — real screen-reader announcement order.** Affects screen-reader users; robust names and live regions pass source/automation, but NVDA or equivalent traversal has not been observed.
- **P2 — Windows forced colors/high contrast and interactive browser zoom.** Affects low-vision and contrast-mode users; color-independent labels, focus outlines, grayscale structure, authored narrow layout, and reduced-motion contracts pass, but OS/browser rendering remains unobserved.
- **P3 — sub-second timed reload.** A timed session reloaded before recording a positive elapsed second resumes as untimed. Position, correctness, and completion are unchanged; persisting the toggle would require a post-freeze evidence-contract decision.

## Exact next-round handoff

Keep the playable demo frozen. Before any accessibility-conformance claim, run one human NVDA keyboard pass plus Windows forced-colors and browser-zoom checks through Capstone and SIM-01. Reopen implementation only for a reproducible blocker; otherwise move demo effort to packaging and launch reliability.

**Status:** `release gate passed; playable demo frozen through SIM-01`
