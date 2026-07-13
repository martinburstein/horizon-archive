# Opening 45-Second Surface Contract

Status: production contract for the current title-to-Chapter-I opening. Surface-canon only. The three prologue cards remain explicitly provisional.

Implementation alignment: `horizon-archive-game/src/openingFlow.js` and the opening copy/state slice in `horizon-archive-game/src/App.jsx`.

## Status vocabulary

- `PRODUCT UI — LOCKED`: safe interface copy. It is not story evidence.
- `SURFACE CANON — APPROVED`: may be treated as observed or Pilot-recorded story fact.
- `PROVISIONAL PLACEHOLDER`: temporary staging copy only. It must remain visibly labeled and must not be cited as lore.
- `STRUCTURE — LOCKED`: sequence, ownership, privacy, or transition behavior is fixed even if prose changes.

## Nominal first-45-second sequence

This is a pacing budget, never a timer: title → local save → display name → three provisional beats → Chapter I card → first-person arrival aftermath → Terminal-search objective. No card auto-advances, and keyboard or screen-reader users receive unlimited time.

## Title, save, and name ownership

| Surface | Owner | Status | Contract |
|---|---|---|---|
| `THE HORIZON ARCHIVE` | Product title UI | `PRODUCT UI — LOCKED` | Project identity, not an in-world utterance. |
| `Prologue: The Patient Signal` | Product title UI | `PRODUCT UI — LOCKED` | Prologue label; it does not confirm a patient or intentional sender. |
| `New expedition` / `Resume signal` | Product title UI | `PRODUCT UI — LOCKED` | Navigation only. Resume means local save recovery, not Machine memory. |
| Create Slot 01 and overwrite warning | `SYSTEM // LOCAL SAVE` | `STRUCTURE — LOCKED` | One browser-local slot; replacement requires a visible warning. Save state is not Builder storage. |
| `Name your character` | Product setup UI | `PRODUCT UI — LOCKED` | This chooses a flight-recorder display name, not a legal identity, Builder designation, credential, or call sign accepted by the Machine. |
| Name validation/help/errors | `SYSTEM // LOCAL SAVE` | `STRUCTURE — LOCKED` | Normalize and validate 2–24 characters; errors remain human UI feedback. |
| `FLIGHT RECORDER // {DISPLAY_NAME}` | `PILOT // FLIGHT RECORDER` | `STRUCTURE — LOCKED` | The only opening-story interpolation point. Uppercase styling carries no semantic meaning. |

The selected name stays in Slot 01 on the device. It may label Pilot-authored recorder text, but it must never appear in `LOCAL SURFACE`, `SCENE`, Builder-label, Teacher, validator, credential, endpoint, payload, or exam content. Never generate `welcome`, `identity accepted`, `recognized`, or prior-contact copy from the name. Render it as plain text, preserve the normalized value for accessible naming, and do not treat the legacy fallback `Pilot` as canon.

## Three explicitly provisional prologue beats

All three cards remain `PROVISIONAL PLACEHOLDER`. Their visible eyebrow must say `PROVISIONAL PROLOGUE // STORY PASS PENDING // n OF 3` or the current equivalent `TEMPORARY PROLOGUE // STORY PASS PENDING // n OF 3`. Headings, bodies, backgrounds, timing, and transition-button wording are not surface canon until a later authorized story pass removes that label.

| Beat | Allowed temporary function | Required boundary |
|---|---|---|
| 1 — signal detection | The Pilot's recorder isolates a repeatable signal beyond the Pilot's mapped routes. | Do not identify a sender, motive, audience, or prior knowledge of the Pilot. `The flight recorder wakes` is placeholder personification, not canon. |
| 2 — bounded approach | The Pilot's own instruments support one reversible approach. | Do not say the Machine selected, resolved, offered, withheld, invited, or guaranteed the route. The current Machine-agency sentence is placeholder-only. |
| 3 — descent threshold | First-person instruments establish a ruler-straight horizon and nonhuman glass process patterns before arrival. | Do not show or mention a ship, party, crew, body, hands, reflection, or omniscient view. Do not yet declare the landscape's occupation. |

Surface-safe temporary drafting pattern, still explicitly placeholder:

1. `PILOT`: “My recorder isolates a repeating pattern beyond every route I have mapped. Nothing in it names a sender.”
2. `PILOT`: “My instruments hold one reversible approach. They cannot tell me what shaped it or why it remains open.”
3. `PILOT`: “The horizon is ruler-straight. Glass tubes rise from flush patterns in the floor.”

These lines are safe staging candidates, not approved final prose. Their purpose is to keep the filler sequence from accidentally establishing agency or hidden canon.

## Chapter I reveal and arrival aftermath

| Copy/state | Status | Contract |
|---|---|---|
| `Chapter I` | `PRODUCT UI — LOCKED` | Chapter navigation label. |
| `Glass Meadow` | `SURFACE CANON — APPROVED` | The Pilot's provisional first-look survey name, not a Builder term or final occupation. |
| Current line `A working landscape. No visible welcome. One signal somewhere in the glass.` | `PROVISIONAL PLACEHOLDER` | Surface-safe in implication, but replace with the required first-person arrival line before narrative freeze. |
| `Enter the meadow` | `PRODUCT UI — LOCKED` | Learner-controlled transition; never automatic. |

Approved first-person arrival aftermath:

> `PILOT // FLIGHT RECORDER — {DISPLAY_NAME}`: “I'm down. The horizon is ruler-straight. Glass tubes rise from flush patterns in the floor.”

This is the first approved story fact after the provisional cards. It establishes arrival, flatness, and visible glass forms only. It does not show a ship, claim a crash, name an occupation, imply welcome, or explain the landscape's process.

After the learner activates `Enter the meadow`, focus enters Chapter I in normal document order and the objective becomes available as System state.

## Initial objective

Approved compact objective pair:

- Dialogue: `SYSTEM // EXPEDITION STATE`: `Objective: Find a Terminal in the Glass Meadow.`
- Persistent text: `OBJECTIVE // FIND A TERMINAL`

`Terminal` is a human working class for a bounded accessible node. The objective must not name the Petal hotspot, imply that the native landscape was built for human ergonomics, or claim the Machine summoned the Pilot. Exploration remains first-person and mistakes remain recoverable.

The current `Search ... for a Terminal` dialogue and `SEARCH FOR A TERMINAL` banner are implementation-safe placeholders but should be unified to the approved `Find` pair during the next copy pass.

## Accessibility and density

- Move focus to each new card heading; associate name help and errors with the input.
- Decorative opening art remains hidden from assistive technology unless it gains narrative information.
- Each card carries one short idea and one obvious action within the `640 × 480` canvas.
- No timed transition, flashing signal, audio-only fact, color-only state, or name-dependent instruction.
- Resume restores the sanitized opening step and chosen display name; it never claims that a Builder surface remembered either.

## Freeze boundary

Before declaring the opening narrative-ready:

1. keep all three filler cards visibly provisional;
2. remove unsupported Machine agency from their staging copy;
3. use the approved first-person arrival aftermath on the Chapter I reveal;
4. unify the objective to the approved `Find` pair;
5. verify the chosen name appears only in the flight-recorder owner line;
6. preserve local-save warning, focus order, and no-auto-advance behavior.

Everything beyond these surface facts remains deferred. This contract neither opens nor interprets hidden lore.
