# Glass Meadow Dual-Node Interaction Packet

Status: production-ready, surface-canon only.

Scene contract: `GM-01` contains two separate learning surfaces with a strict sequence. The many-petaled **Petal Terminal** owns First Signal (`L-01-01`). The compact three-fin **Route Marker** is visible but prerequisite-locked until the player acknowledges First Signal; it then enters an awake route-training state for `L-01-02` and gains completed directional geometry only after route mastery. Neither node speaks for the whole Machine.

## Landscape function boundary

Apply the [Builder landscape function and reveal contract](builder-landscape-function-and-reveal-contract.md). `Glass Meadow` is the Pilot's first visual label; `Glass Garden` is the later provisional occupation earned from feedstock, controlled upward growth, trained component families, harvesting, annealing, rejection, salvage, and repair. This remains fictional silicate agriculture, not real glass science or a confirmed Builder category. The two Terminals reveal bounded relations inside that larger material-stewardship process; their human workbenches do not make the landscape human-oriented.

## Production and curriculum alignment

- Scene sheet: `Concept Art Book/scenes/GM-01-glass-meadow-petal-route-marker.md`
- Game scene ID: `meadow`
- Petal hotspot ID: `primary`
- Route hotspot ID: `route-marker`
- Pixel scene module: `horizon-archive-game/src/PixelMeadow.jsx`
- Current provisional module grid: `320 × 180` square logical pixels
- Final game canvas target: `640 × 480` square logical pixels, period-authentic 4:3, with the adventure scene above and compact dialogue/verb/inventory UI below
- Petal exercise: `terminal-l0101-independent-run`; lesson `L-01-01`; activity `A-L0101-3`; skills `PY-001`, `PY-002`, `PY-003`
- Route exercise: `EX-L0102-ROUTE-MARKER`; lesson `L-01-02`; activity `A-L0102-3`; skills `PY-004`, `PY-005`, `PY-006`

The `320 × 180` meadow renderer is a provisional scene module inside the final `640 × 480` composition, not the complete game resolution. Copy below is written for the compact bottom UI: one observation or instruction at a time, no scroll-dependent lore, and no paragraph longer than two short sentences.

## Speaker and copy budget

Use the shared labels:

- `PILOT // FLIGHT RECORDER`
- `EXPEDITION LINK // LOCAL TOOLING`
- `LOCAL SURFACE // PROVISIONAL TRANSLATION — PETAL`
- `LOCAL SURFACE // PROVISIONAL TRANSLATION — ROUTE MARKER`
- `SCENE // SENSOR RECORD`
- `SYSTEM // EXPEDITION STATE`

Pixel-UI budget:

- Pilot or scene line: preferred maximum 110 characters; hard maximum two short sentences.
- Local-surface condition: preferred maximum 52 characters.
- Link/system instruction: preferred maximum 120 characters; put technical detail inside the Terminal panel.
- Button label: verb phrase under 24 characters.
- Never combine two speakers in one dialogue box.

The shared modal, keyboard, dismissal, focus-return, and post-mastery navigation authority is `terminal-focus-and-dismissal-contract.md`. In particular, closing First Signal must return to the Petal without unlocking the Route Marker; only acknowledgement changes node state.

## Ownership and state model

| State | Petal Terminal | Route Marker | Forward action |
|---|---|---|---|
| `M0 — arrival` | available, visually locked until opened | visible, prerequisite-locked | Use Petal |
| `M1 — First Signal active` | awake; session open or held | prerequisite-locked | Complete and acknowledge First Signal |
| `M2 — route available` | completed geometry; no longer owns active lesson | awake core and short route groove | Use Route Marker |
| `M3 — route active` | completed and stable | awake; session open or held | Pass primary, transfer, retrieval, confidence |
| `M4 — meadow complete` | completed and stable | completed directional geometry | Follow marked route |

“Locked” means the human expedition has not met the prerequisite for opening that local lesson surface. It does not mean the Route Marker refuses, judges, sleeps, waits, or knows what the player has done.

## Scene arrival

### GM00 — First read

`SCENE // SENSOR RECORD`:

> A Petal Terminal rises beside the path. Farther right, a smaller three-fin marker remains dark.

`PILOT // FLIGHT RECORDER`:

> Two nodes. The larger one exposes the only active link.

No arrival line may call the Route Marker ready or available.

## Petal Terminal — before First Signal acknowledgement

### `LOOK AT`

`PILOT // FLIGHT RECORDER`:

> Crystal petals frame a dark core. The expedition link detects a bounded file exercise.

### `TALK TO`

`PILOT // FLIGHT RECORDER`:

> "First signal. Mine, not yours."

`SCENE // SENSOR RECORD`:

> No audio reply separates from wind and pollen.

Replace the generic “something hears you” response. Non-detection is useful feedback and preserves mystery.

### `USE` first open

`EXPEDITION LINK // LOCAL TOOLING`:

> First Signal active. Edit the file, run it, then review the output.

`LOCAL SURFACE // PROVISIONAL TRANSLATION — PETAL`:

> INPUT SURFACE OPEN. SOURCE UNNAMED.

`SCENE // SENSOR RECORD`:

> The Petal core brightens. The Route Marker stays dark.

## Petal session, hints, and remediation

### GM01 — Close unfinished

- `SYSTEM // EXPEDITION STATE`: "First Signal held in this application session."
- `SCENE // SENSOR RECORD`: "The workbench closes. The Petal edge light remains."

### GM02 — Reopen in the same application session

- `SYSTEM // EXPEDITION STATE`: "First Signal restored. Code, result, and current hint level are unchanged."
- `LOCAL SURFACE // PROVISIONAL TRANSLATION — PETAL`: "INPUT OPEN. TRANSFER INCOMPLETE."

### GM03 — Full reload before acknowledgement

- `SYSTEM // EXPEDITION STATE`: "Application session restarted. First Signal opens from a clean working file."
- `SYSTEM // EXPEDITION STATE`: "Attempt and hint-use evidence remain; learner code was not saved."

Current implementation resets active code, result, and visible hint level on reload while preserving sanitized exercise evidence. Do not call this the Petal forgetting.

### GM04 — Empty or missing assignment

- Empty: "The file is empty. Restore the starting lines, then make one change at a time."
- Missing signal: "Keep a line shaped like `signal = 2`. The name goes left; the value goes right."

Owner: `EXPEDITION LINK // LOCAL TOOLING`.

### GM05 — Wrong value or missing call sign

- Wrong value: "The program still stores the old signal value. Change only the number to `2`."
- Missing call sign: "Create `learner` as short quoted text. Check both quotation marks."

### GM06 — Missing output instruction

> Keep `print(message)`, print the signal value, then print `Operator:` with `learner`.

### GM07 — Progressive hints

1. "A variable stores a value with `name = value`. Change `signal` first."
2. "Text needs quotes. Try `learner = \"PILOT\"`, then pass the variable to `print()`."

Tone rule: point to the smallest useful correction. Never say “easy,” “obvious,” “failed,” or “wrong again.” No mistake changes the route, damages a node, or consumes an attempt resource.

### GM08 — Valid run, before acknowledgement

- `EXPEDITION LINK // LOCAL TOOLING`: "Output verified. Review all three lines, then acknowledge completion."
- `SCENE // SENSOR RECORD`: "The Petal core repeats three measured pulses. The Route Marker remains dark."

### GM09 — First Signal acknowledgement

- `EXPEDITION LINK // LOCAL TOOLING`: "First Signal mastery evidence recorded. Learner code was not retained."
- `LOCAL SURFACE // PROVISIONAL TRANSLATION — PETAL`: "VISIBLE SIGNAL CONFIRMED."
- `SCENE // SENSOR RECORD`: "The Petal core settles. The Route Marker gains a pale core and one short groove."
- `PILOT // FLIGHT RECORDER`: "The small node changed after the transfer. That supports a sequence, not an audience."

First Signal acknowledgement does **not** complete the meadow or enable departure. It changes ownership of the active lesson from Petal to Route Marker.

## Petal Terminal — after First Signal acknowledgement

### `LOOK AT`

> The Petal core holds a stepped completion mark. Its workbench is closed.

Owner: `SCENE // SENSOR RECORD`.

### `USE`

`EXPEDITION LINK // LOCAL TOOLING`:

> First Signal is complete. The awake Route Marker owns the next lesson.

### `TALK TO`

`PILOT // FLIGHT RECORDER`:

> "One output confirmed. I won't turn that into a conversation."

These actions always redirect without reopening or resetting either exercise.

## Route Marker — prerequisite-locked state

### `LOOK AT`

`PILOT // FLIGHT RECORDER`:

> Three fins surround a dark core. Its route groove has no active geometry.

### `TALK TO`

`PILOT // FLIGHT RECORDER`:

> "Not your turn yet. Mine, apparently."

`SCENE // SENSOR RECORD`:

> The marker produces no audio response.

### `USE`

`SYSTEM // EXPEDITION STATE`:

> Route lesson locked. Complete and acknowledge First Signal at the Petal Terminal.

Wrong-action recovery: keep the Route Marker selectable, identify the prerequisite, and name the exact usable hotspot. Never say it “refuses the link.” No state is lost.

## Route Marker — awake state

### GM10 — State change after Petal acknowledgement

`SCENE // SENSOR RECORD`:

> The marker core brightens. A short groove points along the existing path but stops at the node's base.

This is readiness geometry, not the completed route.

### `LOOK AT`

`PILOT // FLIGHT RECORDER`:

> The Route Marker is awake in the narrow sense: its exercise link is available.

“Awake” is explicitly human UI shorthand here, not a consciousness claim.

### `TALK TO`

`PILOT // FLIGHT RECORDER`:

> "Show me what changes when the name changes."

`SCENE // SENSOR RECORD`:

> Three fins hold steady. No voice channel is detected.

### `USE` first open

`EXPEDITION LINK // LOCAL TOOLING`:

> Route training active. Predict both lines, validate both forms, then complete retrieval.

`LOCAL SURFACE // PROVISIONAL TRANSLATION — ROUTE MARKER`:

> LABEL WORK OPEN. DIRECTION INCOMPLETE.

## Route session, validation, and retrieval

### GM11 — Close unfinished

- `SYSTEM // EXPEDITION STATE`: "Route session held locally. Source, predictions, form, results, and hint level remain."
- `SCENE // SENSOR RECORD`: "The editor closes. The short route groove stays lit."

### GM12 — Reopen within the same application session

- `SYSTEM // EXPEDITION STATE`: "Route session restored at the last form and phase."
- `LOCAL SURFACE // PROVISIONAL TRANSLATION — ROUTE MARKER`: "LABEL WORK OPEN. TRANSFER INCOMPLETE."

### GM13 — Full reload before route mastery

- `SYSTEM // EXPEDITION STATE`: "Application session restarted. A clean form is loaded; mastery evidence remains."
- `SYSTEM // EXPEDITION STATE`: "Source, predictions, output, and free-form text were not saved."

The Route Marker remains awake because First Signal mastery persists.

### GM14 — Missing prediction

> Predict both output lines before Run. A prediction is evidence of tracing, not a penalty gate.

Keep Run available only after both predictions are non-empty, but preserve all edits.

### GM15 — Source or value boundary miss

- Shape: "Keep the three literal assignments and two supplied `print()` calls."
- Variables: "Use only `site_name`, `signal_label`, and `channel_count`."
- Number: "Store `3` without quotes so `channel_count` is a number."
- Output: "Trace each `print()` from left to right using the latest value above it."

Owner: `EXPEDITION LINK // LOCAL TOOLING`. The Marker does not grade.

### GM16 — Route hint ladder

1. "Literal cue: change only the boundary named by the first check code."
2. "Assignment trace: follow each variable from top to bottom."
3. "Output trace: each `print()` uses the latest value assigned before that line."

### GM17 — Primary form passed

- `EXPEDITION LINK // LOCAL TOOLING`: "Primary form: 8/8. Load the fresh transfer form."
- `SCENE // SENSOR RECORD`: "The center fin gains one stepped mark. The route groove does not extend."

### GM18 — Transfer form passed

- `EXPEDITION LINK // LOCAL TOOLING`: "Transfer form: 8/8. Complete the four retrieval checks."
- `SCENE // SENSOR RECORD`: "A second fin gains a stepped mark. Direction remains incomplete."

### GM19 — Retrieval miss

> Review the missed distinction, keep the completed forms, and try the retrieval item again.

No form resets. No completed mark disappears. Hints affect telemetry, not story access.

### GM20 — Retrieval passed, confidence pending

- `EXPEDITION LINK // LOCAL TOOLING`: "Retrieval: 4/4. Record confidence before acknowledgement."
- `PILOT // FLIGHT RECORDER`: "I can trace the value. Now I have to say how sure I am."

### GM21 — Route mastery acknowledgement

- `EXPEDITION LINK // LOCAL TOOLING`: "Route mastery evidence recorded. Working source and predictions were not retained."
- `LOCAL SURFACE // PROVISIONAL TRANSLATION — ROUTE MARKER`: "LABEL VERIFIED. DIRECTION AVAILABLE."
- `SCENE // SENSOR RECORD`: "The groove extends into a stepped directional line along the path. All three fins hold completion marks."
- `PILOT // FLIGHT RECORDER`: "A route is available. Availability is not an invitation."

Only GM21 completes the meadow and exposes the departure choice.

## Route Marker — completed state

### `LOOK AT`

> Three stepped marks frame a directional groove leading toward the basin route.

### `USE`

> Route lesson complete. Follow the marked path when ready.

Owner: `SYSTEM // EXPEDITION STATE`.

### `TALK TO`

`PILOT // FLIGHT RECORDER`:

> "Useful, quiet, and still not an answer."

Normally hotspots are disabled while departure is pending. These lines support revisit or future implementation without creating a new branch.

## Reload after route acknowledgement

### GM22 — Pending transition restore and optional practice

The current runtime presentation is authoritative for this relay:

- `SYSTEM // EXPEDITION STATE`, required route complete: `ROUTE OPEN // Depart now, or choose scored calibration: diagnose first, then pass 8/8 + 8/8 + 4/4. Retry or Exit safely; the route stays open.`
- `SYSTEM // EXPEDITION STATE`, optional calibration also complete: `ROUTE OPEN // Primary, transfer, retrieval, and optional calibration complete; crowned passage earned.`
- Optional action: `Optional calibration`; accessible name: `Start optional calibration practice`.
- If an optional calibration session is held in memory, the matching labels are `Resume optional calibration` and `Resume optional calibration practice`.
- Departure action: `Depart: Drowned Archive`; accessible name: `Depart for Chapter II, The Drowned Archive`.

`crowned passage earned` is human expedition-state language for the completed learning gate. It does not mean the Route Marker judged, rewarded, selected, or invited the Pilot. `Drowned Archive` is the expedition's provisional survey name, not a decoded Builder destination label.

Optional calibration never changes route availability, departure wording, arrival, core story access, or the physical response already earned by required route mastery. Completing it may add only its own clause to the System summary. Reload after route acknowledgement restores the applicable summary, keeps both working sessions closed, and moves focus to the established departure action. Do not replay First Signal acknowledgement or auto-depart.

## Transition to Drowned Archive

### GM23 — Departure activation

The established departure button and focus behavior are locked for this relay. Activating `Depart: Drowned Archive` may move directly to the next scene; no extra Machine reply, approval beat, travel choice, or auto-opened Terminal is required.

If a visible departure beat is added in a later production pass, it may use only observed geometry:

- `SCENE // SENSOR RECORD`: `The stepped line crosses the flat glass toward the flooded basin.`
- Optional `PILOT // FLIGHT RECORDER`: `The marker gives me a direction. The name at its end is still ours.`

These lines must not delay, rename, or replace the established control.

### GM24 — Chapter II arrival

Arrival separates orientation from observation:

1. `SYSTEM // EXPEDITION STATE`, assistive announcement: `Chapter II, The Drowned Archive.`
2. `SCENE // SENSOR RECORD`, visible dialogue: `A grounded Terminal stands by the causeway. The Tidal Lens remains silent.`
3. Focus moves to the grounded Terminal hotspot without activating it.

The chapter and location announcement is human expedition structure. The scene line reports only the grounded access surface and the absence of a measured response from the landmark. Neither line claims that the Terminal is awake, waiting, listening, aware of the arrival, or native-named. The Drowned Archive packet remains authoritative for all interaction after this entry beat.

On reload at an already-entered, unfinished scene, the same bounded chapter/location announcement may repeat with the current scene prompt. It must not replay the meadow completion, manufacture a new arrival response, or open an exercise.

At canonical and narrow layouts, retain one compact System announcement and one compact Scene line. Do not merge System, Scene, and Pilot ownership into one dialogue box, and do not communicate arrival through motion, color, or sound alone.

## Current gameplay copy reconciliation

These production recommendations supersede stale runtime copy; no gameplay code is edited in this turn.

| Current copy | Issue | Compact replacement |
|---|---|---|
| "A dormant interface waits inside the crystal bloom." | “Dormant” and “waits” imply unsupported state and anticipation | "A Petal Terminal exposes the only active link in the meadow." |
| "The bloom answers in your own alphabet... already listening for you." | Claims no translation and prior attention | "The Petal repeats the verified output in visible light. Reception remains unknown." |
| "Nothing here has a mouth. Something still seems to hear you." | Assigns hearing without a source | "No audio response is detected. The recorder preserves the question." |
| "A separate route-marker Terminal has risen from the meadow." | The Marker was already visible in the finalized scene | "The visible Route Marker now carries an active core and short groove." |
| "The route marker refuses the link." | Gives a prerequisite state intent | "Route lesson locked. Acknowledge First Signal at the Petal Terminal." |
| "The route marker accepts both forms." | Personifies validation and omits retrieval | "Both forms and retrieval are complete. Directional geometry now marks the path." |
| "The next interface is already awake." | Implies availability and anticipation before observation | "The marked path reaches the flooded basin." |

## Wrong-action recovery matrix

| Player action | Safe response | State change |
|---|---|---|
| Use Route Marker while locked | Name First Signal prerequisite and Petal hotspot | None |
| Use Petal after completion | Point to awake Route Marker | None |
| Talk to either node | Pilot line plus bounded non-detection | None |
| Close either active Terminal | Confirm session held | None |
| Reload unfinished work | Explain clean working form and retained mastery evidence | Working session reset only |
| Miss validation | Name smallest boundary and preserve edits | Attempt/hint telemetry only |
| Miss retrieval | Preserve passed forms and retry item | Retrieval remains active |
| Click completed node | Confirm completion and point to marked route | None |

No response removes access, damages a node, consumes a finite resource, hides mandatory lore, or creates an unwinnable state.

## 901 Teacher handoff: `L-01-03`

Next sequential lesson: `L-01-03`, **Errors, indentation, and debugging mindset**, prerequisite `L-01-02`, skill `PY-007`, assessment `AS-L0103-DBG`.

Dependency-safe narrative hook: after Route Marker mastery, the marked route stays open while a **human expedition calibration copy** of the route-label script shows one small traceback or indentation fault. The learner diagnoses and repairs the copy; the physical route never closes and no Machine object is blamed for the bug.

Recommended activity:

1. Read a short traceback and identify the file line.
2. Fix one misspelled variable name.
3. Fix one indentation error in a separate fresh example.
4. Run again and explain what changed.

Narrative line:

> The route is stable. The error is in my copy. Good—mistakes I can locate are mistakes I can repair.

This preserves `L-01-01 → L-01-02 → L-01-03` order, normalizes beginner errors, and avoids making failure a threat to exploration.

## Validation gates

- Petal owns First Signal; Route Marker owns route training.
- Route Marker is visible but unavailable before Petal acknowledgement.
- Petal acknowledgement changes Route Marker from locked to awake; it does not complete the meadow.
- Route mastery changes awake geometry into completed directional geometry.
- All LOOK/USE/TALK actions have compact, recoverable responses in locked, awake, and completed states.
- Close/reopen and reload language matches current session/evidence contracts.
- No node waits, refuses, listens, understands, accepts a learner, or speaks for the whole Machine.
- Copy fits the final `640 × 480` 4:3 pixel UI contract; the `320 × 180` meadow remains a provisional scene module.
- No line reveals the Machine, Builder disappearance, continuity mechanism, or hidden plot.
