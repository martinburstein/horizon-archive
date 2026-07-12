# Witness Corridor Interaction Packet

Status: production-ready, surface-canon only.

Scene contract: `WC-01` contains two separate interactive objects. The fallen automaton is an archaeological subject that may produce bounded physical and translated responses. The grounded three-fin **Evidence Terminal** alone owns source inspection, editable working state, validation, hints, mastery evidence, and exercise acknowledgement. Neither object's behavior proves consciousness, identity, motive, or a relationship to the whole Machine.

## Production alignment

- Scene sheet: `Concept Art Book/scenes/WC-01-witness-corridor-evidence-terminal.md`
- Game scene ID: `automaton`
- Primary hotspot ID: `evidence-terminal`
- Secondary hotspot ID: `fallen-automaton`
- Exercise: `EX-L0507-EVIDENCE-PACKET`
- Lesson: `L-05-07`
- Activity: `A-L0507-3`
- Objective: `AI901-D2-O7`
- Skills: `PY-015`, `PY-016`, `PY-020`, `AI901-D2-O7-SCHEMA-EXTRACT`
- Mastery gate: 12 of 12 deterministic checks, all critical boundaries, then recorded confidence.

The Evidence Packet is a human-authored offline course asset. The Evidence Terminal exposes a bounded local surface through the expedition link; it does not turn the exercise into a native Builder curriculum or a live Azure service call.

## Speaker ownership labels

Every line in this scene must carry one owner in script data, even if the current UI temporarily renders a generic dialogue label.

| Owner | UI label | May state | Must not state |
|---|---|---|---|
| Pilot | `PILOT // FLIGHT RECORDER` | Sensory observation, emotion, hypothesis clearly framed as personal | Objective system state, omniscient lore, another object's intent |
| Expedition mediation | `EXPEDITION LINK // LOCAL TOOLING` | Exercise instructions, source registration, validator results, session/save boundaries | Builder beliefs, Machine motives, product behavior not supported by curriculum sources |
| Translated object response | `LOCAL SURFACE // PROVISIONAL TRANSLATION` | Short measured conditions from the Terminal or automaton, with source object identified | Human learning judgments, exact metaphysical meaning, whole-Machine speech |
| Physical scene record | `SCENE // SENSOR RECORD` | Visible movement, light, sound, thresholds, lack of detected response | Emotional verbs such as wants, watches, remembers, refuses, welcomes |
| Save/navigation system | `SYSTEM // EXPEDITION STATE` | Close/reopen, reload, resume, pending acknowledgement, route availability | In-world dialogue or claims that the Machine stored a draft |

If two owners are needed, use two sequential lines. Never put a validator diagnosis and an automaton utterance in the same speech bubble.

## Two-object boundary

| Capability | Fallen automaton | Evidence Terminal |
|---|---:|---:|
| `LOOK AT` observation | Yes | Yes |
| `TALK TO` authored response | Yes, bounded pulse/translated fragment | Pilot addresses it; no voice required |
| `USE` opens exercise | No | Yes |
| Read-only evidence browser | No | Yes |
| Editable `working_output.json` | No | Yes |
| Session-only notes | No | Yes |
| Validator/remediation | No | Yes |
| Mastery acknowledgement | No | Yes |
| Narrative response after mastery | Yes, as a separate subsequent event | Yes, local transfer state |

The automaton can react near the exercise without becoming the exercise interface. The Terminal can validate evidence about another site without becoming that site's voice.

## Approach and first read

### WC00 — Scene arrival

`SCENE // SENSOR RECORD`:

> A three-fin node stands clear of the fallen figure. Its inspection glass is dark; three channel lights remain visible below it. The automaton's lens holds a separate violet aperture.

`PILOT // FLIGHT RECORDER`:

> Two objects. Two hotspots. If one answers, I don't get to assign the answer to both.

This establishes object ownership before the player can interact.

## Fallen automaton interaction ladder

### `LOOK AT` before mastery

`SCENE // SENSOR RECORD`:

> The automaton is seated against the wall, joints locked under its own weight. Its lens aperture shifts by fractions when the Terminal's channel lights change; the head and hands do not move.

`PILOT // FLIGHT RECORDER`:

> Correlated movement is not the same as attention. It is enough to keep measuring.

Tags: aperture change `OBSERVED`; relation to channel lights `CORRELATED`; attention remains `UNKNOWN`.

### `USE` before mastery

`EXPEDITION LINK // LOCAL TOOLING`:

> No bounded work surface detected on the automaton. Manipulation request withheld. Use the grounded Evidence Terminal for the registered packet.

This is a human safety boundary, not a claim that the automaton refused.

### `TALK TO` before mastery

`PILOT // FLIGHT RECORDER`:

> "Were you left here, or were you keeping this place?"

`SCENE // SENSOR RECORD`:

> The damaged speaker produces one pulse above the corridor noise floor. No stable speech pattern separates from it.

Optional `LOCAL SURFACE // PROVISIONAL TRANSLATION`, only if the translation layer has sufficient signal:

> CHANNEL PRESENT. CONTENT INCOMPLETE.

Do not write “the automaton is listening.” A measured pulse supports response timing, not awareness.

### Revisit after mastery

`SCENE // SENSOR RECORD`:

> The automaton's aperture opens one increment after the Terminal transfer. Its speaker produces a short patterned sequence.

`LOCAL SURFACE // PROVISIONAL TRANSLATION — AUTOMATON`:

> CONTINUITY CONFIRMED. WITNESS INCOMPLETE.

`PILOT // FLIGHT RECORDER`:

> A condition and a missing condition. Not a biography. Not yet a speaker I can name.

This preserves the established surface-safe phrase while making its source and limits explicit.

## Evidence Terminal interaction ladder

### `LOOK AT`

`PILOT // FLIGHT RECORDER`:

> Three indicators: image, audio, telemetry. The inspection glass stays blank until our workbench supplies a registered packet.

### `TALK TO`

`PILOT // FLIGHT RECORDER`:

> "You can hold evidence without deciding what it means. That's more discipline than I arrived with."

`SCENE // SENSOR RECORD`:

> The three channel lights remain steady. No audio response is detected from the Terminal.

### `USE` first open

`EXPEDITION LINK // LOCAL TOOLING`:

> Evidence workspace active. Inspect the registered image, audio, and telemetry; repair the JSON; validate all twelve boundaries.

`LOCAL SURFACE // PROVISIONAL TRANSLATION — EVIDENCE TERMINAL`:

> SOURCES BOUNDED. INTERPRETATION OPEN.

`SCENE // SENSOR RECORD`:

> Violet, blue, and amber indicators brighten without changing the automaton's posture.

## Evidence workspace state deck

### WC01 — Close before completion

- `SYSTEM // EXPEDITION STATE`: "Workbench closed. Active Evidence Packet held in local application memory."
- `SCENE // SENSOR RECORD`: "The inspection glass darkens. The three modality indicators remain visible."

### WC02 — Reopen within the same application session

- `SYSTEM // EXPEDITION STATE`: "Active Evidence Packet restored. Working JSON, notes, selected source, validator result, and hint level unchanged."
- `LOCAL SURFACE // PROVISIONAL TRANSLATION — EVIDENCE TERMINAL`: "SOURCES BOUNDED. TRANSFER INCOMPLETE."

Do not replay WC00 or the first-open spectacle.

### WC03 — Full reload before completion

- `SYSTEM // EXPEDITION STATE`: "Application session restarted. A clean registered packet has been loaded. Prior privacy-limited mastery evidence remains available; working JSON and scratch notes were not saved."
- `EXPEDITION LINK // LOCAL TOOLING`: "Reinspect the sources before validation."

This is the current implementation boundary. Do not describe the reset as the Machine forgetting.

### WC04 — JSON syntax failure

- `EXPEDITION LINK // LOCAL TOOLING`: "The working file is not valid JSON. Check commas, quotation marks, brackets, and braces. No packet was transferred."
- Physical response: none. A parser failure does not reach the local surface.

### WC05 — Exact field or simulation-mode failure

- `EXPEDITION LINK // LOCAL TOOLING`: "Keep the registered packet identity, offline-course label, and exact requested field set. Description outside the schema does not satisfy extraction."
- Misconception ownership: `simulation-is-live-service` or `description-is-extraction`; never present these as Builder categories.

### WC06 — Observed value failure

- `EXPEDITION LINK // LOCAL TOOLING`: "Return only the bounded observation supported by the named source. Recheck the landmark region or measured threshold."
- `PILOT`, first occurrence only: "An answer can be plausible and still not belong in this packet."

### WC07 — Provenance failure

- `EXPEDITION LINK // LOCAL TOOLING`: "The value is not reviewable without its registered source IDs. Attach only the sources that directly support this field."
- `SCENE // SENSOR RECORD`: "The corresponding channel light pulses once; the other channels remain steady."

### WC08 — `false` versus `null` failure

- Level 1: "A bounded check with zero detections is `false`. A requested meaning unsupported by the packet is `null`."
- Level 2: "Trace the detection field to its measurement sources; keep all reviewed sources attached to the unsupported interpretation boundary."
- Level 3: "Worked boundary: preserve measured absence as `false`; preserve unavailable meaning as `null`; do not turn either into an explanation."

All three are owned by `EXPEDITION LINK // LOCAL TOOLING`. The automaton does not provide remediation.

### WC09 — Modalities or uncertainty failure

- `EXPEDITION LINK // LOCAL TOOLING`: "Confirm image, audio, and telemetry review. Give each field a meaningful uncertainty statement and keep the unsupported-value policy `null`."

### WC10 — Repeat validation

- `SYSTEM // EXPEDITION STATE`: "Attempt recorded. The working packet remains editable; previously passing checks are still visible."
- Story rule: repeated misses add no unique lore and never disable the route permanently.

### WC11 — Twelve checks pass, confidence pending

- `EXPEDITION LINK // LOCAL TOOLING`: "12/12 deterministic checks confirmed. Record current confidence before final acknowledgement."
- `PILOT // FLIGHT RECORDER`: "The packet says what the sources support. Confidence says whether I can build that boundary again."

### WC12 — Final acknowledgement

- `EXPEDITION LINK // LOCAL TOOLING`: "Mastery evidence recorded. Working JSON, notes, and free-form text were not retained."
- `LOCAL SURFACE // PROVISIONAL TRANSLATION — EVIDENCE TERMINAL`: "EVIDENCE BOUNDED. MEANING UNASSIGNED."
- `SCENE // SENSOR RECORD`: "The Terminal indicators align into one narrow path of light. Only then does the automaton's lens open one increment and its damaged speaker produce a patterned sequence."
- Follow with the automaton's separate translated line from the post-mastery revisit. Do not merge the speakers.

### WC13 — Reload after acknowledgement, before descent

- `SYSTEM // EXPEDITION STATE`: "Final acknowledgement restored. The Evidence Packet working session is closed; the descent decision remains pending."
- Restore the production success sequence or its concise recap, then expose `Descend to the city`.
- Do not reopen the exercise or replay validation.

### WC14 — Transition to credits

- Continue action: `Descend to the city`
- `PILOT // FLIGHT RECORDER`: "I can support a response, a boundary, and an unfinished witness. I cannot support the story I want them to complete."
- `SCENE // SENSOR RECORD`: "Violet route lights descend beyond the corridor. The automaton remains seated. The Evidence Terminal returns to its steady three-channel state."

## Credits copy contract

The prologue ends with operational access and an unresolved record, not a declaration that “something below” knowingly classified the player.

Preferred credits copy:

> You came looking for an abandoned system.
>
> The city record now includes the expedition arrival under a provisional translated field: continuation.

`Archive access: partial` remains safe. `The City Beneath` remains a survey title. “Continuation” is a provisional `BUILDER_LABEL`, not proof of identity transfer, invitation, judgment, or consciousness.

### Credits reload

`SYSTEM // EXPEDITION STATE`:

> Completed expedition restored. Working sessions remain cleared; privacy-limited mastery evidence remains recorded.

## Remaining gameplay copy retirement list

These recommendations supersede current gameplay lines. A later Coder pass should implement them; this packet does not edit code.

| Current gameplay copy | Issue | Production replacement |
|---|---|---|
| "A dormant interface waits inside the crystal bloom." | “Waits” and “dormant” assign state and anticipation beyond observation | "A crystal field node exposes a bounded interface through the expedition link." |
| "Nothing here has a mouth. Something still seems to hear you." | Assigns hearing to an unspecified object | "No separable response is detected. The recorder preserves the question." |
| "Its lens tracks the three evidence channels without moving its head." | “Tracks” can imply attention without labeling the measurement | "Its lens aperture shifts by fractions when the three channel lights change; the head remains still." |
| "The automaton is listening, but the evidence channel is elsewhere." | Declares awareness | "The speaker returns one measured pulse. The grounded Terminal remains the registered evidence interface." |
| "Its locked joints reject the command." | Gives mechanical failure an intentional verb | "No bounded manipulation surface is detected. The joints remain fixed." |
| "Its lens opens. A voice older than the corridor says..." | Ambiguous object owner and anthropomorphic voice framing | "After the Terminal transfer, the automaton lens opens one increment. Its damaged speaker yields a provisionally translated condition: 'Continuity confirmed. Witness incomplete.'" |
| "The next interface is already awake." | Implies anticipation and consciousness | "A second local surface is visible along the route." |
| "Something below has recorded your arrival as a continuation." | Unspecified conscious agent and definitive classification | "The city record now includes the expedition arrival under a provisional translated field: continuation." |

The meadow and Drowned Archive replacements from `drowned-archive-interaction-packet.md` remain in force.

## Sequential beginner-learning handoff

The next learner-facing build after `L-01-01` should be `L-01-02`, **Strings, variables, and visible output**, covering `PY-004`, `PY-005`, and `PY-006`.

Spoiler-safe narrative hook: at a small route-marker Terminal before the Drowned Archive, the pilot must create three editable variables—`site_name`, `signal_label`, and a numeric `channel_count`—then print a compact survey label. The physical marker repeats only the produced label in light; it does not rename the Builder site or imply understanding.

Recommended transfer task:

```python
site_name = "DROWNED ARCHIVE"
signal_label = "LOCAL SURFACE"
channel_count = 3

print(site_name)
print(signal_label, channel_count)
```

Mastery question: change one variable, predict both output lines before running, then explain why editing a variable changes later output without changing the earlier source provenance. This advances the zero-Python pathway sequentially and prepares the three-channel evidence language without exposing later plot information.

## Validation gates

- The Evidence Terminal alone owns evidence inspection, editing, validation, remediation, confidence, and mastery acknowledgement.
- The automaton owns only its physical response and explicitly attributed provisional translation.
- A pulse, aperture change, or patterned sequence never automatically proves listening or consciousness.
- All validator language belongs to the human expedition layer.
- Close/reopen, full reload, pending acknowledgement, and completed-save behavior match the current implementation.
- Working JSON, notes, and source code are not described as durable mastery evidence.
- Wrong answers and hints contain no unique canon.
- Credits preserve “continuation” as a provisional label, not a final answer.
- No line explains the Machine, Builder disappearance, or continuity mechanism.

