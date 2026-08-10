# TE-001 Experience Blueprint - Root Script Reading Architecture

## Blueprint control

| Field | Value |
| --- | --- |
| Stage | Tactical Operations Specialist |
| Agent ID | `tactical_operations_specialist` |
| Shell | `SS-TE001-GAME-ON-PAPER-v1` |
| Treatment | `CT-TE001-SCRIPT-v1` |
| Blueprint | `XB-TE001-SCRIPT-v1` |
| Output target | Root `HORIZON_ARCHIVE_GAME_ON_PAPER.md` |
| Date | `2026-08-09` |
| Disposition | `EXPERIENCE READY` |

## Compatibility result

The shell and creative treatment are compatible. The complete script can read
as one cinematic work while retaining an exact, machine-checkable four-act,
fifteen-chapter, forty-Terminal structure. No variance is required.

## Complete document graph

The reading order is linear and exact:

```text
TITLE
 -> STATUS / HOW TO READ
 -> THE RAIL
 -> VOICES AND OWNERSHIP
 -> ACT I / CHAPTERS 1-3 / TERMINALS 01-16
 -> ACT II / CHAPTERS 4-9 / TERMINALS 17-28
 -> ACT III / CHAPTERS 10-14 / TERMINALS 29-38
 -> ACT IV / CHAPTER 15 / TERMINALS 39-40
      -> READY ---------\
      -> NOT YET READY --+-> SHARED CANON ENDING
 -> DIRECTOR'S CONTINUITY AND CHILLS AUDIT
 -> CANON / IMPLEMENTATION APPENDIX
 -> successor=null
```

Prose equivalent: the reader moves through introductory rules and voice
ownership, then reads all four acts and fifteen chapters in route order. The
only split is the equal final readiness language; both variants immediately
rejoin one shared ending. The audit and appendix explain why the work holds
together but add no story after the ending.

## Exact heading hierarchy

```text
# Horizon Archive - The Complete Game on Paper
## Status and How to Read This Script
## The Rail
## Voices in the Silence
## Act I - The Shape of an Answer
### Chapter 1 - Glass Meadow
#### Terminal 01 - First Signal `L01-01`
...
## Act IV - The Measure Belongs to You
### Chapter 15 - Measured Horizon
#### Terminal 39 - Flight Recorder Mirror `cumulative Python fresh transfer`
#### Terminal 40 - Measured Folio `all-objective readiness/remediation/outcome`
#### Outcome - READY
#### Outcome - NOT YET READY
#### The Shared Ending
## Director's Continuity and Chills Audit
## Canon and Implementation Status
```

The root file may use bold run-in labels inside chapters but must not add extra
H3 chapter or H4 Terminal headings.

## Chapter reading anatomy

Every chapter uses this prose sequence:

1. **Opening frame.** Two to five paragraphs of sensory world, route continuity,
   and current Pilot assumption.
2. **The walk.** One clear paragraph locating the footpath and next physical
   host relationships. Drowned Archive may introduce four internal movements.
3. **Terminal sections.** One H4 per host in exact order.
4. **The location turn.** One to three paragraphs identifying the tempting
   interpretation and the bounded correction.
5. **Exit frame.** A physical image and explicit on-foot continuity into the
   next chapter, or the shared hard stop in Chapter 15.

The anatomy is not printed as a repetitive checklist. Bold labels may be used
for `Opening frame`, `The walk`, and `Exit frame` only where they improve
navigation. The story itself must remain readable if those labels are ignored.

## Terminal section anatomy

Each `#### Terminal NN` section contains five moves in two to five paragraphs:

1. **Host and discovery:** what it physically is, why it belongs here, whether
   Pilot or Suit notices first, and how it is reached.
2. **Connection:** explicit Pilot intent and the stable suit overlay; no native
   screen or Machine speech.
3. **Learning pressure:** human-readable skill and why it matters now, with no
   solution, answer, exact evaluator mapping, or exam item.
4. **Local loop:** one tailored sentence describing miss -> actual-gap feedback
   -> answer-free remediation -> blank retry, plus pass -> finalized evidence.
   The full global contract is explained once in `The Rail`; later sections do
   not repeat policy boilerplate.
5. **After the overlay:** world remains physically stable, the Pilot's
   understanding shifts, and a material relationship motivates the next host.

For Terminals 39-40, replace physical host/discovery with explicit Pilot-owned
opening of a nonphysical suit surface at the unchanged outer margin.

## Group ownership and replacement

| Reading group | Owner | May state | Replaced by |
| --- | --- | --- | --- |
| World description | `Scene` | Direct physical/sensory observation and continuity | Pilot inference or Suit detection only after the observation is legible |
| Emotional interpretation | `Pilot` | Provisional name, motive, fear, envy, correction | Later Pilot revision; never silently promoted to Scene fact |
| Detection/interface | `Suit` or `System` | Compatibility, provenance, local work state, evidence, feedback, save, readiness limits | Next exact interface state or return to Scene |
| Learning action | `Pilot` inside Suit interface | Edit/run/explain/classify/review/retry intent | Neutral System result |
| Machine/Builder | None | No line, message, judgment, or instruction | Not applicable |

In prose, replacement means attention order rather than a rendered UI event.
The physical host must be re-established after every interface segment before
the Pilot interprets the result.

## Terminal registry and learning-pressure copy map

The Combat Engineer must reproduce this registry exactly once. Human-readable
summaries are topic labels, not answer material.

| # | Host | Ownership | Script-level learning pressure |
| ---: | --- | --- | --- |
| 01 | First Signal | `L01-01` | run a real Python file, visible output, strings, and first recoverable errors |
| 02 | Route Marker | `L01-02` | variables, values, types, reassignment, prediction, and retrieval |
| 03 | Fracture Nursery | `L01-03` | confidence-building Python consolidation, numbers, Booleans, debugging, and safe return |
| 04 | Tide-Sort Coupler | `L02-01` | recognize bounded AI workload families from evidence needs |
| 05 | Sixfold Weir | `L02-02` | responsible-AI principles and limits across scenarios |
| 06 | Stranded Lens Cradle | `L02-03` | model, deployment, and configuration choices without one universal best answer |
| 07 | Sediment Abacus | `L03-01 + L03-02` | lists/dictionaries, then conditionals/loops/functions over structured evidence |
| 08 | Severed Relay Spine | `L03-03` | imports, files, packages, secrets, and local API-client mental models |
| 09 | Flooded Choir | `L04-01 + L04-02` | text-analysis and speech workload distinctions |
| 10 | Blind Camera Well | `L04-03 + L04-04` | vision/generation and multimodal information-extraction boundaries |
| 11 | Wall of Borrowed Light | `L05-01 + L05-02` | Foundry portal orientation plus system/user/grounding prompt responsibilities |
| 12 | Drowned Switchyard | `L05-03 + L05-04` | SDK/endpoint route selection plus bounded single-agent surfaces |
| 13 | Tidal Pattern Loom | `L05-05 + L05-06` | offline text/speech and visual solution-pattern selection |
| 14 | Waterline Ledger | `L06-01 + L06-02` | objective-by-objective review and exact weak-area remediation planning |
| 15 | Crown Counterpoise | `L06-03 + SIM01 + available SIM03` | capstone/readiness synthesis plus approved simulation boundaries |
| 16 | Witness Spine | `L05-07` | multimodal evidence and unsupported-input/provenance limits |
| 17 | Condensate Spine | `PY020` | fresh Python reinforcement over explicit bounded provenance |
| 18 | Civic Shadow Theater | `CUM01` | independent all-objective cumulative review and fresh transfer |
| 19 | Nested Custody Folio | `PY009` | bounded dictionary update and explanation |
| 20 | Silent Accountability Aperture | `RAI D1O1` | transparency, privacy/security, and accountability reasoning |
| 21 | Forked Logic Stitch | `PY010` | conditionals over a supplied structured scaffold |
| 22 | Shedding Carrier Skin | `D2O7` | supplied input, structured output/provenance, and unsupported-value boundaries |
| 23 | Three-Throat Replica Bloom | `PY011` | one loop over sanitized replicas |
| 24 | Capped Return Prism | `D1O4` | six-workload recognition and boundary explanations |
| 25 | Receiver Chorus | `PY012` | a two-parameter function returning a nonjudgmental summary |
| 26 | Sealed Lexicon Cradle | `D1O5` | text-analysis technique recognition and limits |
| 27 | Strata Comb | `PY013` | explicit import and ordered flattening with gaps preserved |
| 28 | Pressure-Language Organ | `D1O6` | speech workload recognition, direction, and limits |
| 29 | Saddle Echo Organ | `PY015` | local UTF-8 file write/read round trip over a bounded report |
| 30 | Contact Camera Obscura | `D1O7` | existing-visual analysis versus new-visual generation |
| 31 | Counterexample Core | `PY016` | decode, summarize, encode, and re-decode sanitized JSON |
| 32 | Mineral Index Sheath | `D1O8` | OCR/field/multimodal/knowledge-mining technique recognition |
| 33 | Edge Configuration Cyst | `PY017` | allowlisted nonsecret environment configuration read |
| 34 | Exterior Prompt Palimpsest | `D2O1` | persistent system responsibilities versus current user task/input |
| 35 | Request-Reply Twin Chamber | `PY018` | offline request/response ownership and provenance |
| 36 | Unclocked Vane Switchyard | `D2O3` | Foundry client setup, compatible client, model/input submission, and output handling |
| 37 | Laminate Role Coupler | `PY019` | offline API/SDK/endpoint role synthesis |
| 38 | Tool-Limit Bloom | `D2O4` | portal authoring/testing versus lightweight agent-client invocation/results |
| 39 | Flight Recorder Mirror | `cumulative Python fresh transfer` | one fresh cumulative Python performance over current evidence |
| 40 | Measured Folio | `all-objective readiness/remediation/outcome` | all current objectives, exact actual-gap routes, and bounded local outcome |

## Drowned Archive internal movements

To prevent the twelve hosts from reading as a kiosk row, Chapter 2 uses four
unheaded movements introduced by prose transitions:

1. **Water sorts:** 04 Tide-Sort, 05 Sixfold Weir, 06 Stranded Lens.
2. **The basin keeps residue:** 07 Sediment Abacus, 08 Severed Relay, 09 Flooded
   Choir.
3. **Light fails to become an image:** 10 Blind Camera, 11 Borrowed Light, 12
   Drowned Switchyard.
4. **The climb under the Crown:** 13 Tidal Loom, 14 Waterline Ledger, 15 Crown
   Counterpoise.

Between movements, include a longer walking paragraph, one sensory change, one
look back toward the suspended frame, and no interface text.

## Action and eligibility matrix

The script describes, but does not implement, these actions:

| Action | Owner | Eligibility | Result | Zero-evidence states |
| --- | --- | --- | --- | --- |
| Observe host/landscape | Scene/Pilot intent | Physically present and reachable | Bounded observation | visibility, focus, reading, repeat look |
| Connect | Pilot intent | Suit confirms compatible local coupling | Stable suit overlay | approach, naming, detection, opening |
| Submit local work | Pilot | Current required input complete | Existing evaluator runs | typing, editing, reviewing, time spent |
| Remediate/retry | System then Pilot | Actual current gap | Answer-free guidance then blank work | miss, feedback reading, retry opening |
| Finalize evidence | System | Exact independent gate passes | Approved allowlisted record | world display, dialogue, save focus |
| Save | Pilot/System | Approved conjunction complete | Atomic private-free checkpoint | cancel, Escape, confirmation display |
| Walk forward | Pilot | Local required boundaries complete | Next physical location/host | scenery, route visibility, desire |
| Return/review | Pilot/System | Existing safe boundary | Deterministic prior state | replay, navigation, restore |

No described action may imply that the Machine evaluates, enables, or performs
any of these human-interface operations.

## Failure, retry, cancel, return, and resume rules

### Failure presentation

Explain the complete policy once in `The Rail`: a miss identifies only the
current gap, offers answer-free remediation, clears private working content at
the approved boundary, and returns a genuinely blank attempt. Within Terminal
sections, tailor the emotional sentence without restating the policy.

Suggested progression:

- early: “The error stays inside your tools. The field does not flinch.”
- middle: “The city continues while the suit narrows the gap.”
- late: “Capability has not made rigor optional.”
- final: “NOT YET is a map, not a sentence.”

### Cancel/return

Closing work returns attention to the same host and preserves only approved
finalized evidence. Physical returns use the exact predecessor continuity. A
chapter exit may mention the backward route once; it need not interrupt every
forward passage.

### Resume

The script may state that reload/revisit reconstructs the first incomplete safe
boundary without replaying arrival or success. It must not show or infer a real
save payload.

### Malformed state

Describe only at system-contract level in `The Rail` or appendix: fail closed,
retain valid finalized evidence, clear private/transient work, restore the first
incomplete safe boundary, and use no city-refusal language.

## Proposed-copy presentation

Use blockquotes only for short proposed lines, with the owner inside the line:

> **Pilot:** I named it before I understood it. I keep doing that.

Scene and Suit lines use the same form. Never place a bare quotation whose owner
must be inferred from color, alignment, or context. A single note near the top
states that all blockquotes are proposed game-on-paper copy.

Avoid screenplay character columns, centered text, or monospace dialogue tables;
they create accessibility and reflow problems.

## Reading focus and announcement matrix

| Entry point | First meaningful heading | Next expected unit | Recovery anchor |
| --- | --- | --- | --- |
| File open | H1 title | Status/how-to-read | H1 |
| Act navigation | H2 act | Act promise then first chapter | Same H2 |
| Chapter navigation | H3 chapter | Opening frame | Same H3 |
| Terminal navigation | H4 Terminal with number/name/code | Host/discovery paragraph | Same H4 |
| Outcome navigation | H4 outcome | Complete bounded result and action | Same H4 |
| Shared ending | H4 Shared Ending | One canon ending | Chapter 15 H3 |

For screen-reader heading navigation, each Terminal heading contains complete
number, host, and ownership. Do not require the preceding table for identity.

## Input-modality and responsive contract

The artifact is static Markdown, so supported reading/navigation depends on the
host renderer. The content itself must remain equivalent across pointer,
keyboard heading navigation, touch scrolling, screen reader, speech navigation,
zoom, forced colors, reduced motion, printed view, and plain-text reading.

- No hover-only content, collapsible essential sections, audio-only cues,
  color-only distinctions, fixed-width layout, or HTML positioning.
- Lines wrap naturally; avoid manual spacing used as alignment.
- Tables are supplementary and must not contain unique story content.
- The main narrative remains complete in source order.
- No animation or motion exists; reduced-motion meaning is therefore exact.
- Plain Markdown links use descriptive labels.

## Semantic world-region plan

No new hotspot or crop is implemented. In prose, every location must establish:

1. entry region;
2. safe pedestrian surface;
3. current host region;
4. noninteractive landmark or unavailable boundary where relevant;
5. reversible predecessor bearing; and
6. physically continuous forward bearing.

The prose must never place the required action on an inaccessible landmark,
sealed boundary, fallen Witness assembly, live current, flexible membrane, or
far face.

## Content, copy, and asset ownership

| Item | Downstream owner | Status |
| --- | --- | --- |
| Complete narrative prose | Combat Engineer, polished by Quartermaster | TO WRITE |
| Proposed Pilot/Scene/Suit lines | Combat within Recon limits; Quartermaster review | TO WRITE |
| Forty exact headings and codes | Combat Engineer | LOCKED MAP |
| Chapter transitions | Combat Engineer; Quartermaster polish | TO WRITE |
| Equal outcome copy | Combat Engineer; Quartermaster/Intelligence audit | CONTRACT LOCKED |
| Director's audit | Combat draft; Intelligence independent confirmation | TO WRITE |
| Images/media | None | DISABLED / NO WORK |

No player-facing placeholder such as `TBD`, `TODO`, `TK`, “write later,” or an
empty section may remain.

## Combat implementation acceptance tests

1. Root file exists and is under `204800` bytes.
2. UTF-8 decode succeeds; `git diff --check` passes.
3. `^## Act ` count is 4 and titles/order are exact.
4. `^### Chapter ` count is 15 and locations/order are exact.
5. `^#### Terminal [0-9]{2} ` count is 40; extracted numbers equal `01..40`.
6. Each extracted number maps to the exact host name and ownership cell above.
7. Every chapter contains opening, walk, local turn, and exit prose.
8. Chapter 2 contains all four Drowned movement transitions without extra H3/H4
   structural headings.
9. Proposed dialogue blockquotes include explicit owners.
10. READY and NOT YET READY are parallel H4 sections of comparable length and
    both lead immediately to one H4 Shared Ending.
11. Last story sentence is exact: `The horizon remains unfinished. This time,
    you let it.`
12. Appendix ends on explicit `successor=null` and adds no post-ending action.
13. No complete code solution, answer key, exam item, private learner state,
    live service, world response, planet travel, image work, or hidden lore.
14. Only approved documentation and handoff files change.

## Hard stop

The shared ending is the last story beat. Director audit and implementation
appendix may analyze what preceded it but may not continue the fiction. No new
signal, look, movement, destination, question prompt, or actionable hook may
follow.

## Variances

None.

## Disposition and Combat handoff

**`EXPERIENCE READY / XB-TE001-SCRIPT-v1`**

Combat Engineer must author the complete root
`HORIZON_ARCHIVE_GAME_ON_PAPER.md` from the exact shell, creative treatment,
and this blueprint. The file must read as a finished cinematic novella/script,
not a copied planning packet. Implement all structural counts, the forty-entry
registry, distinct chapter drama, local learning pressure without answers,
equal outcomes, the shared ending, and the director audit. Run the exact
documentation checks and record results. Do not change runtime, curriculum,
art, media, user state, or protected files; do not perform image work.
