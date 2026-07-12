# Accessibility Sentinel baseline

## Audit scope

Preliminary accessibility and cognitive-load review of the title -> pixel Glass Meadow -> First Signal Terminal -> Route Marker -> optional Calibration flow. The intended visual targets were the canonical 640 x 480 canvas and a larger integer presentation.

This is **not a WCAG compliance claim**. Fresh visual and interaction capture was blocked; see [capture blocker](CAPTURE_BLOCKER.md). Findings below are limited to directly verified implementation structure, automated test/build output, and project contracts. No prior screenshots were used.

## Outcome

Established a reproducible baseline and identified one high-value keyboard/screen-reader integration issue for Round 5: opening a Terminal does not establish a coherent focus boundary or return-focus contract.

## Numbered flow

1. **Title / New expedition — structurally reviewable; visual health unverified.** The title has a named `h1` and native buttons. Fresh screenshot: unavailable due to the [capture blocker](CAPTURE_BLOCKER.md).
2. **Pixel Glass Meadow — structurally reviewable; visual/contrast health unverified.** The scene canvas has an accessible name and both hotspots are native buttons with verb-aware names. Fresh screenshot: unavailable due to the [capture blocker](CAPTURE_BLOCKER.md).
3. **First Signal Terminal — focus behavior at risk; visual health unverified.** The editor has a programmatic name, output uses a polite live region, and success waits for acknowledgement. The overlay does not receive focus, expose dialog semantics, contain focus, support Escape, or explicitly restore focus. Fresh screenshot: unavailable due to the [capture blocker](CAPTURE_BLOCKER.md).
4. **Route Marker primary/transfer/retrieval — learning recovery is structurally strong; keyboard/screen-reader state needs verification.** Predictions, source, output, hinting, fresh transfer, retrieval, confidence, and acknowledgement are present. Session-only privacy is stated in the status copy. Fresh screenshot: unavailable due to the [capture blocker](CAPTURE_BLOCKER.md).
5. **Optional Calibration — safe exit is structurally present; error association is incomplete.** `ROUTE OPEN` remains in copy, Exit is always rendered, source editing stays locked until diagnosis, and targeted hints exist. The three diagnosis selects do not identify which fields are invalid or reference the shared error. Fresh screenshot: unavailable due to the [capture blocker](CAPTURE_BLOCKER.md).
6. **Canonical 640 x 480 and larger integer host — blocked.** Neither viewport could be visually captured or directly keyboard-tested. Source inspection also confirms that the current runtime still scales the 320 x 180 meadow separately from responsive HTML controls rather than rendering the complete 640 x 480 surface as one unit.

## Confirmed strengths

- Native buttons, inputs, textareas, fieldsets, legends, and labels provide a useful semantic base.
- Scene hotspots expose action plus object in their accessible names.
- First Signal and Route Marker feedback use `role="status"` with polite live updates.
- First Signal, Route Marker, and Calibration require explicit acknowledgement rather than auto-advancing.
- Route Marker explicitly states that predictions, source, output, and choices are not persisted.
- Calibration repeatedly states `ROUTE OPEN`, keeps a visible Exit control in implementation, and does not make optional debugging a progression dead end.
- Source inspection found no current animation or timed input requirement; the reduced-motion stylesheet currently changes scroll behavior only because there is no authored motion in this slice yet.

## Findings

### 1. P1 — Terminal opening has no focus-entry, confinement, Escape, or return-focus contract

- **Affected learners:** keyboard-only users, screen-reader users, switch users, and beginners who lose track of context easily.
- **Relevant principle:** operable keyboard flow, logical focus order, visible focus, and robust state-change communication.
- **Reproduction from implementation:** activate a scene hotspot with Enter to open First Signal or Route Marker; focus remains on the activating scene button. Continue tabbing and background adventure controls remain focusable because the Terminal is a plain `section`, there is no focus move or inert boundary, and no Escape handler. Closing has no explicit return-focus target.
- **Evidence:** `App.jsx` renders `TerminalShell` as `<section>` and contains no `role="dialog"`, `aria-modal`, `inert`, focus call, focus reference, or keyboard handler. This is source-confirmed; the exact visual symptom remains browser-verification pending.
- **Recommendation:** in Round 5, implement and test one intentional overlay contract: focus a stable Terminal heading or Close control on open; prevent focus from drifting into inactive scene controls; support Escape without losing work; and restore focus to the exact physical Terminal hotspot on close. If the world remains intentionally operable, use a named non-modal region but still move/restore focus and make the intended order explicit.

### 2. P1 — The unified 640 x 480 accessibility target does not yet exist at runtime

- **Affected learners:** low-vision users, users at browser zoom, users on constrained laptop/tablet viewports, and anyone relying on predictable focus geometry.
- **Relevant principle:** responsive reflow, zoom resilience, readable text, and stable target placement.
- **Evidence:** the project contract requires a complete 640 x 480 surface scaled as one unit. Current CSS uses a viewport-responsive two-row `.adventure-screen`, a separately integer-scaled 320 x 180 canvas, and independently responsive HTML Terminal/command panels. This is source-confirmed; blur, clipping, and letterbox behavior remain visually unverified.
- **Recommendation:** Coder should make the Round 5 unified-canvas integration testable at 640 x 480, 1280 x 960, 320 x 240 alternate mode, and a non-multiple host before Pixel Patrol or Accessibility Sentinel signs off.

### 3. P2 — Selected verb state is not exposed programmatically

- **Affected learners:** screen-reader users and voice-control users checking the active action before choosing a hotspot.
- **Relevant principle:** name, role, value and color-independent state.
- **Evidence:** LOOK AT / USE / TALK TO are native buttons whose selected state is only the `active` CSS class; no `aria-pressed` or equivalent selected-state attribute is rendered.
- **Recommendation:** expose the active verb with `aria-pressed`, and preserve the existing verb-aware hotspot label.

### 4. P2 — Calibration diagnosis errors are announced globally but not associated with individual controls

- **Affected learners:** screen-reader users, users with attention or working-memory limits, and Python beginners who do not know which diagnosis dimension is wrong.
- **Relevant principle:** error identification, association, and recovery.
- **Evidence:** after an incomplete diagnosis, one `role="status"` paragraph appears. The error type, line, and named-token selects have labels but no `aria-invalid`, `aria-describedby`, or field-level result. Source locking guidance is likewise not programmatically associated with the disabled editor.
- **Recommendation:** retain bounded remediation while marking only missed fields invalid and associating each with a concise cue. Move focus to the first missed field after submission.

### 5. P2 — Several compact labels/tasks may be too small at the native 1x presentation

- **Affected learners:** low-vision users, older learners, and beginners reading unfamiliar code vocabulary.
- **Relevant principle:** perceivable text and cognitive load.
- **Evidence:** current CSS sets multiple task/status labels around `0.62rem` to `0.74rem` (roughly 10-12 CSS px at the default root), while the current UI is not yet a controlled bitmap-font canvas. Actual glyph clarity and contrast could not be captured.
- **Recommendation:** test the chosen licensed pixel font at native 1x with real beginner task copy. Do not treat period authenticity as permission for unreadable instructional text; provide an accessible larger-text presentation that preserves square pixels.

## Evidence limits and verification gaps

The following required checks remain unverified because the in-app Browser was unavailable: fresh screenshots, keyboard focus order/visibility in the rendered flow, Enter activation, target-size measurement, contrast/grayscale, screen-reader announcement order, live-region timing, reflow/zoom/letterboxing, actual pixel-type legibility, traceback comprehension in context, and visual proof of safe exit/recovery. These must be rerun in a browser-capable Accessibility Sentinel pass.

## Files

- `Accessibility Sentinel/baseline/REPORT.md`
- `Accessibility Sentinel/baseline/CAPTURE_BLOCKER.md`

No gameplay, curriculum, lore, or art files were edited.

## Validation

- Local Vite server: HTTP 200 at `127.0.0.1:4173`
- Unit tests: 30/30 passed
- Production build: passed
- Browser setup and required troubleshooting path: completed; `iab` unavailable and only Chrome discovered
- Screenshot acceptance: 0 accepted; none captured and no prior evidence reused
- Source review: labels, live regions, focus hooks, modal semantics, reduced-motion code, persistence/privacy copy, errors, exits, and runtime scaling

## Handoff

**Player Agent / Coder Agent, Round 5:** make Terminal focus behavior the first accessibility acceptance test during unified 640 x 480 integration. Keyboard-open First Signal, Route Marker, and Calibration; verify focus visibly enters the Terminal, cannot drift into inactive background controls, Escape closes without losing session work, and focus returns to the triggering physical Terminal. Add automated coverage where practical, then rerun this exact browser audit at 640 x 480 and 1280 x 960.

## Status

`ready to advance` — baseline documentation is complete; visual audit remains explicitly blocked pending an available in-app Browser.
