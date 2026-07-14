# Signal-coupler and SDK Route Chooser accessibility gate — 2026-07-13

**Outcome: REVISE.** The production coupler's screen-only motion, reduced-motion still, exact frame containment, first-Terminal focus lifecycle, and SDK Route Chooser's assessment semantics pass the bounded gate. One visible-object/focus mismatch needs a Coder correction, and the deep SDK route state still needs rendered confirmation after a stale E2E scale assertion is repaired.

## Assistive modes and viewports

- Live keyboard-equivalent pointer/focus path in Chrome through title, save creation, naming, prologue, Chapter I, Meadow, verb selection, and first-Terminal launch.
- DOM/accessibility-tree inspection for names, pressed state, disabled background controls, dialog name/description, title focus, native selects/radios, field errors, and polite status regions.
- Exact `640 x 480` and `320 x 240` viewport overrides, plus the default desktop host.
- Source and automated inspection of `prefers-reduced-motion`, decorative-image semantics, GIF body lock, SDK Route Key reflow, privacy, recovery, and mastery gates.
- Human NVDA/equivalent speech, forced colors, 200% browser zoom, physical switch control, and reduced-motion media emulation were not observed; this is not a conformance claim.

## Evidence that passes

- The production package records six screen states, one PNG body hash, one decoded-GIF body hash, and no changed pixel outside the `3,596`-pixel membrane. The runtime supplies the static `640 x 360` PNG through `prefers-reduced-motion: reduce`; both animated and static overlays are decorative (`aria-hidden` picture and empty image alternative), pointer-transparent, and below the semantic hotspot.
- The first Terminal opens with `MACHINE TERMINAL // First Signal` focused at exact `320 x 240`. Background hotspots are disabled while the named modal dialog is open. Close remains `57.61 x 28 px`; the dialog is contained at `x=4, y=4, w=312, h=171`, owns its vertical scroll, and the document remains exactly `320 x 240` with no page overflow.
- Exact narrow geometry is `320 x 180` world plus `320 x 60` command panel. At `640 x 480`, the narrow-authored frame scales to `634.55 x 475.91` inside the host at `1.983x`; document client and scroll dimensions both remain exactly `640 x 480`.
- The SDK Route Chooser is one scenario at a time, uses native labeled selects, scores route and reason independently, exposes associated field feedback and a polite textual score, permits unlimited retry and safe Exit, begins transfer with blank controls, and stores no choices, endpoints, credentials, timing, or interaction-path evidence. Strict `16/16 + 16/16` and explicit acknowledgement remain unchanged.
- The persistent Route Key keeps all six full labels, including `service-specific Foundry Tools SDK`, at an `8 px / 10 px` floor. Its canonical three-column and narrow two-column grids wrap inside a dedicated scroll owner without weakening mastery.

## Prioritized findings

### P1 — the first-Terminal focus target no longer maps to the visible coupler

At exact `320 x 240`, the visible production body's authored object box maps to approximately `x=80..240, y=20..180`, but the focused primary hotspot is only `x=108..212, y=50.70..173.02`. It therefore represents about 65% of the object's width and 76% of its height, excluding the glass-fin crown and substantial side-body areas. At `640 x 480`, the same mismatch is `x=160..480, y=40..360` versus `x=216.88..423.09, y=102.89..346.11`. The contained focus label also crosses the membrane/body in the narrow scene. Runtime speech and visible labels still call the new field-linked object `Petal terminal`, despite the current narrative handoff explicitly retiring that freestanding anatomy.

Affected learners: keyboard, switch, low-vision, motor, and cognitive users who rely on the focus indicator or object name to identify what will activate. Relevant principles: visible and non-obscured focus, meaningful labels, and consistent visual/semantic relationships (WCAG-informed 1.3.1, 2.4.6, 2.4.7/2.4.11).

Exact handoff: Coder should apply the Lore Keeper's approved `field-linked Terminal` label/copy deck, expand or reshape only the primary hotspot so its focus geometry represents the central `320 x 320` authored body without entering the route-marker target, and relocate the transient world label so it does not cover the diagnostic membrane. Preserve the decorative overlay, pointer transparency, screen-only animation, route-marker geometry, and existing minimum target sizes. Player should then record pointer and keyboard focus bounds at both exact viewports.

### P2 — the SDK Route Key is over-attached to initial dialog speech and lacks deep-state rendered evidence

`sdkRouteDialogDescribedBy` attaches both the offline warning and the complete six-entry Route Key to the dialog title. A screen reader can therefore receive the entire persistent reference list on every open before reaching the one active scenario. The key is also a nested `overflow:auto` region above an independently scrolling form. Static layout and semantics pass, but the full browser route did not reach this newly added state because an earlier unrelated E2E alignment assertion is stale. No current-run evidence confirms the longest label's actual wrapping, the key's keyboard scroll discoverability, or focus visibility across the nested scroll owners at exact `320 x 240`.

Affected learners: screen-reader, keyboard, switch, low-vision, and cognitive users. Relevant principles: concise programmatic descriptions, meaningful labels/instructions, logical focus order, and keyboard access (WCAG-informed 1.3.1, 2.1.1, 2.4.3, 2.4.6, 3.3.2).

Exact handoff: Coder should keep the offline warning in the dialog description but expose the Route Key as an independently named reference region reached on demand, rather than forcing all six entries into the initial dialog description. Preserve every full route label and the one-scenario-at-a-time form. Player should capture the first primary scenario and one longest-label/error state at `640 x 480` and `320 x 240`, then keyboard-scroll the key and form separately and record focus/scroll ownership.

### P2 test-infrastructure drift — the earlier title-focus failure is not reproducible

The current live first-Terminal launch focuses `#terminal-title`, and the full E2E passed its two early `#terminal-title:focus` assertions, completed calibration, departed to Chapter II, and then failed in `assertRuinsTerminalAlignment`. The failure is a stale scale table after the CRT bezel correction: the harness still expects `1.636` at `1280 x 960` and `1.531` at `1600 x 900`, while `getCanonicalGameFrame()` now calculates approximately `1.597` and `1.495`. This is not an accessibility product regression, but it prevents deep SDK Route Chooser certification and regenerated tracked QA binaries before failing; those binaries were reverted.

Exact handoff: Coordinator/Coder should derive E2E scale expectations from the canonical-frame helper or update the two stale constants, rerun the complete route, and retain no incidental QA binary diffs.

## Validation

- Focused signal-coupler, SDK route, first-Terminal, and canonical-frame tests: `18/18` passed.
- Complete game unit suite: `215/215` passed.
- Production build passed with the existing `724.52 kB` JavaScript chunk advisory.
- Full E2E: title focus passed; run stopped at the stale Chapter II scale assertion described above after 48.7 seconds.
- All incidental tracked E2E PNG changes were restored. Untracked user files were preserved.

## Status

`REVISE — exact first-Terminal focus/label correction and SDK deep-state browser evidence required; mastery and reduced-motion contracts pass.`
