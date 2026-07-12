# Terminal Interaction Voice and Continuity Packet

Status: production-ready, surface-canon only. This packet defines player-facing language for Machine Terminal encounters without deciding what the Machine is, whether it is conscious, or why the Builders vanished.

## Purpose

Terminals are small exposed surfaces of a much larger system. Their language must support a complete learning loop—approach, attempt, correction, reconnection, success, and departure—while preserving three distinctions:

- A Terminal can preserve session state without remembering as a person.
- A Terminal can respond to input without understanding it as a person.
- A Terminal can accept a record without approving its interpretation.

The current playable implementation preserves the active meadow exercise when its workbench is closed and reopened during the same scene. It resets that working session at a new expedition, after acknowledged completion, and when the player advances to another scene. The lines below make those boundaries legible in the fiction.

## Speaker channels

Use only one channel per line. Do not blend the pilot's inference into interface output.

| Channel | UI label | Job | Voice constraint |
|---|---|---|---|
| Physical response | `SCENE // SENSOR RECORD` | Describe a visible or audible change | Concrete, sensory, no motive |
| Human mediation layer | `EXPEDITION LINK // LOCAL TOOLING` | Explain editor state and learning action | Clear, bounded, technically useful |
| Translated surface response | `LOCAL SURFACE // PROVISIONAL TRANSLATION` | Return short procedural conditions from an identified object | Paired distinctions; never a lore lecture |
| Pilot reflection | `PILOT // FLIGHT RECORDER` | Admit interpretation or emotion | Fact first, interpretation second |
| Save and navigation state | `SYSTEM // EXPEDITION STATE` | Explain close/reopen, reload, resume, acknowledgement, and route state | Never presented as in-world speech |

The dark editor belongs to the human expedition's mediation layer. Python is real, but the UI must not claim that Python is the Builders' native language. Preferred formulation: the expedition link translates valid local Python operations into a bounded request the exposed surface can answer.

When more than one object is present, append the source object in script data or visible copy, for example `LOCAL SURFACE // PROVISIONAL TRANSLATION — AUTOMATON`. Never let an unattributed “it” cross from a Terminal action to a landmark or automaton response.

## Continuity vocabulary

Use these terms consistently across writing and implementation.

| Runtime state | Player-facing term | Safe implication | Do not imply |
|---|---|---|---|
| Never opened in current scene | `No local session` | No working copy exists yet | The site has never seen anyone before |
| Open and unfinished | `Local session active` | Edits and hints remain available | A conscious presence is watching |
| Closed and unfinished | `Local session held` | Work is retained in the expedition link | The Machine remembers the pilot |
| Reopened before scene transition | `Local session restored` | Same working copy and assistance level return | The Terminal judged or missed the pilot |
| Valid run, awaiting acknowledgement | `Output verified` | The program met the exercise contract | The recovered interpretation is true |
| Completion acknowledged | `Record transferred` | Evidence and mastery metadata were committed | The player's code was stored by the Machine |
| New scene / new expedition | `Local session cleared` | Working state begins cleanly | Prior discoveries were erased |

Avoid `memory restored`, `welcome back`, `I was waiting`, `you are recognized`, and `test passed` in early encounters. These collapse procedural persistence into personhood or judgment.

## Reusable interaction state map

### T00 — Approach, before first contact

- `LOOK AT` / Pilot: "The node is no larger than a field marker. The editor hovering above it is ours; the answer beneath it is not."
- `USE` / Expedition link: "No local session. A bounded translation channel is available."
- `TALK TO` / Pilot: "Can you hear me?" Then scene narration: "The petals hold their position. The link records no reply."

### T01 — First contact

- Physical response: "A narrow band of light climbs the node and stops at the open editor."
- Expedition link: "Local session active. Edits remain on this device until transfer or departure."
- Local surface: "INPUT SURFACE OPEN. SOURCE UNNAMED."
- Pilot: "Open is a condition. It isn't an invitation."

### T02 — Close before completion

- Expedition link: "Workbench closed. Local session held."
- Pilot: "The light goes down, but not out. My unfinished file is still here—not necessarily anywhere else."

This line is optional after the first occurrence. Subsequent closes should use only the expedition-link status.

### T03 — Reconnect within the same scene

- Physical response: "The editor returns with the cursor where you left it."
- Expedition link: "Local session restored. Working copy and assistance level unchanged."
- Local surface: "INPUT SURFACE OPEN. TRANSFER INCOMPLETE."
- Pilot: "It preserved the interruption. That tells me how the link behaves, not what waits below it."

Do not replay first-contact spectacle or reset hints on reconnection.

### T04 — Empty or structurally incomplete attempt

- Expedition link: "The file has no complete request yet. Restore the starting structure, then make the requested edits."
- Physical response: "The node remains lit at the same low level. Nothing in the scene closes or retracts."
- Pilot, after repeated empty runs only: "No punishment. Just the same unfinished channel."

### T05 — Valid Python, wrong target condition

- Expedition link: "The program ran, but the requested condition was not produced. Compare the current value with the task."
- Local surface: "REQUEST RECEIVED. CONDITION UNMET."
- Pilot: "It distinguishes a working instruction from the result it was asked to carry."

### T06 — Syntax or structure error

- Expedition link: "The instruction stopped making sense at the marked structure. Check the assignment, quotation marks, or call shape. Nothing has been transferred."
- Local surface: no new line. A parse failure belongs to the human mediation layer unless an exercise explicitly establishes otherwise.
- Physical response: "One thin segment marks the interruption; the rest of the node stays steady."

### T07 — First hint

- Expedition link: "Guidance 1 of 2: a value changes when the variable on the left is assigned a new value on the right."
- Pilot: "A hint changes my route to the answer, not the evidence waiting after it."

### T08 — Escalated hint

- Expedition link: "Guidance 2 of 2: text needs matching quotation marks. Use `name = \"VALUE\"`, then pass the label and variable to `print()`."
- Local surface: "ASSISTANCE NOTED. ACCESS UNCHANGED."

Assistance is recorded for remediation and mastery evidence only. It must never weaken the story response or produce a lesser discovery.

### T09 — Successful run, before acknowledgement

- Expedition link: "Output verified. Review the three lines, then acknowledge transfer."
- Physical response: "The node repeats the output as three measured pulses. A fourth space remains unlit."
- Local surface: "VISIBLE SIGNAL CONFIRMED. SOURCE DESIGNATION PRESENT."
- Pilot: "It answered the structure of the request. I still don't know what, if anything, read the name."

### T10 — Acknowledgement and evidence transfer

- Expedition link: "Record transferred. The working file has not been retained in expedition evidence."
- Physical response: "The lowest petal turns toward the distant basin. A line of light crosses the meadow and stops at the water."
- Evidence payload (`OBSERVED`): The local surface changed state after the mediation layer transferred a valid visible-output record with a source designation.
- Reframing line / Pilot: "The bloom didn't give me an answer. It gave my next question a direction."

### T11 — Transfer to the next scene

- Continue action: `Follow the signal`
- Scene-exit narration: "The workbench clears when you leave the node's range. The accepted record remains in the flight recorder; the unfinished session does not follow."
- Next-scene arrival: "Across the water, a grounded three-fin node carries the same violet line. The suspended structure above the island remains silent."

This confirms coordination only at the observable level. It does not establish a conscious sender, a chosen recipient, or real-time intent.

## First Signal implementation copy deck

This is the preferred coherent copy set for `terminal-l0101-independent-run`, lesson `L-01-01`, activity `A-L0101-3`, skills `PY-001`, `PY-002`, and `PY-003`.

| Event ID | Trigger | Channel | Player-facing copy | Evidence tag |
|---|---|---|---|---|
| `FS-01` | `LOOK AT` meadow node | Pilot | "The crystal opens around a field node. Our editor can reach it; nothing says it was built for us." | `OBSERVED` + `HUMAN_INFERENCE` |
| `FS-02` | First `USE` | Expedition link | "Local session active. Complete the file, run it, and review the output before transfer." | UI status |
| `FS-03` | Workbench opens first time | Local surface | "INPUT SURFACE OPEN. SOURCE UNNAMED." | `BUILDER_LABEL` |
| `FS-04` | Close unfinished | Expedition link | "Workbench closed. Local session held." | UI status |
| `FS-05` | Reopen unfinished | Expedition link | "Local session restored. Working copy and assistance level unchanged." | UI status |
| `FS-06` | Empty file | Expedition link | "The file is empty. Restore the starting structure, then make the requested edits." | Learning feedback |
| `FS-07` | `signal` not assigned | Expedition link | "No signal assignment was found. Keep a line shaped like `signal = 2`." | Learning feedback |
| `FS-08` | `signal` has wrong value | Expedition link | "The program still gives `signal` the wrong value. Change only its value to the number `2`." | Learning feedback |
| `FS-09` | `learner` missing/malformed | Expedition link | "Create `learner` as quoted text. Check the equals sign and matching quotation marks." | Learning feedback |
| `FS-10` | call sign too long | Expedition link | "Use a call sign of 24 characters or fewer so the local display can show it completely." | Learning feedback |
| `FS-11` | output call missing/malformed | Expedition link | "One expected output instruction is missing. Compare its label, variable, parentheses, and comma with the task." | Learning feedback |
| `FS-12` | First hint | Expedition link | "Guidance 1 of 2: assign the number `2` to `signal`. A variable stores a value with `name = value`." | Learning assist |
| `FS-13` | Second hint | Expedition link | "Guidance 2 of 2: try `learner = \"PILOT\"`, then print the label `Operator:` with the `learner` variable." | Learning assist |
| `FS-14` | Valid run | Expedition link | "Output verified. The file produced all three expected lines. Review them before transfer." | Learning result |
| `FS-15` | Valid run | Local surface | "VISIBLE SIGNAL CONFIRMED. SOURCE DESIGNATION PRESENT." | `BUILDER_LABEL` |
| `FS-16` | Acknowledge | Physical response | "The node repeats the output as measured light. One petal turns toward the flooded ruins." | `OBSERVED` |
| `FS-17` | Acknowledge | Pilot | "It accepted a visible signal and a name. That is evidence of a protocol, not proof of an audience." | `HUMAN_INFERENCE` |
| `FS-18` | Continue | Scene narration | "A line of light crosses the meadow and stops at the water." | `OBSERVED` |

### Prologue personhood correction

Do not ship the earlier draft line, "It did not translate the signal. It was already listening for you." It claims both an unsupported translation mechanism and prior personal attention. Preferred replacement:

> The bloom repeats the expedition output in visible light. That confirms a compatible surface—not who or what, if anything, received it.

The physical response is `OBSERVED`; “compatible surface” is an expedition classification; any audience remains `UNKNOWN`.

## Repeat-attempt rhythm

Avoid repeating full prose on every run. Use this cadence:

1. First failure: targeted technical feedback plus one physical reassurance.
2. Second failure on the same condition: shorter targeted feedback; make the first hint prominent.
3. Third or later failure: keep the feedback stable, offer the next hint, and add no new canon.
4. After editing: clear stale result language but retain session and hint level.
5. After success: disable further hint escalation; require explicit acknowledgement before changing the scene.

Never hide unique lore in a wrong-answer branch. Failure can characterize the interface as patient, but all required evidence arrives after successful completion.

## Continuity hooks for later Terminals

Later encounters may echo the same state grammar without repeating the meadow wording:

- First contact: `[SURFACE] OPEN. [REQUIRED RELATION] UNNAMED.`
- Held session: `[WORK TYPE] HELD LOCALLY. TRANSFER INCOMPLETE.`
- Reconnect: `[WORK TYPE] RESTORED. ACCEPTED RECORD UNCHANGED.`
- Wrong target: `REQUEST RECEIVED. [CONDITION] UNMET.`
- Success: `[NARROW CONDITION] CONFIRMED. [RELATED CONDITION] INCOMPLETE.`
- Transfer: `RECORD ACCEPTED. INTERPRETATION UNBOUND.`

Vary physical response by environment—petal movement, reflected geometry, lens aperture, city illumination—while keeping the epistemic distinction stable.

## 901 Teacher handoff: spoiler-safe teaching opportunity

Use the Terminal's session language to teach a compact beginner distinction among **source code**, **runtime output**, and **saved mastery evidence**:

- Source code is the learner's editable working copy and is cleared at the scene boundary.
- Runtime output is the immediate result of running the file and can be reviewed before acknowledgement.
- Mastery evidence records lesson/activity IDs, attempts, hint use, and completion—not the learner's submitted code.

Recommended retrieval prompt: "After closing and reopening the Terminal, which state should remain, and which event should clear it? Explain why preserving an unfinished working copy is different from saving a program as evidence."

This reinforces `PY-001`–`PY-003`, prepares the learner for files and state later, and supports privacy-conscious evidence collection without making an AI-901 product claim.

## Validation checklist

- All Machine-language lines describe state or relation, never motive.
- The mediation layer owns Python parsing and technical correction.
- Reconnection restores working state without using personhood language.
- Hint use changes telemetry, not access or narrative reward.
- Acknowledgement separates output review from evidence transfer.
- The learner's code is not described as archived or uploaded.
- Scene transfer confirms only an observable coordination event.
- Every interpretation remains labeled as pilot inference.
- No line answers the nature of the Machine, the Builders' disappearance, or the continuity mechanism.
