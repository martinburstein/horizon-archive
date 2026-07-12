# Dialogue and Interaction Scaffolds

These are modular writing patterns, not a final dialogue script. They are designed for the bottom dialogue panel and short point-and-click exchanges.

## Voice palette

### Pilot / flight recorder

- Concrete before philosophical: notices the physical fact, then admits what it evokes.
- Mortal without constant speeches about mortality.
- Willing to be awed; increasingly careful about conclusions.
- Humor is dry and private, used to manage stress rather than puncture sacred moments.
- Early language leans toward ownership and answers; later language leans toward provenance and responsibility.

Do: "The lights are still keeping an appointment. I don't know with whom."

Avoid: "Obviously the Machine is alive and waiting for me."

### Expedition assistant

- Clear, bounded, and useful.
- Separates evidence from inference in natural language.
- Never becomes omniscient or a sarcastic companion.
- Can identify uncertainty but should not use uncertainty as an excuse to say nothing.

Pattern: "Observed: [fact]. One interpretation: [inference]. Evidence is insufficient to distinguish [alternatives]."

### Builder interfaces

- Brief, relational, and procedurally precise.
- Translated wording should feel almost familiar but category-slippery.
- Prefer paired distinctions: open/complete, named/witnessed, present/continuous, permitted/possible.
- Never deliver a lore lecture.

Pattern: "[Condition] confirmed. [Related condition] incomplete."

### Recovered Builder voices

- People speaking to people, not ancients addressing the player.
- Allow tenderness, disagreement, fatigue, practical concerns, and incomplete sentences.
- Avoid universal proclamations about Builder culture.
- Context can make ordinary lines philosophically heavy without making every speaker a philosopher.

## Three-click interaction ladder

Important hotspots should support escalating verbs:

1. `LOOK AT`: direct observation plus one sensory anomaly.
2. `USE`: opens the learning interaction or changes the object state.
3. `TALK TO`: reveals the pilot's projection, a recorded voice, or meaningful silence; it must not always be a joke response.

Example scaffold:

- LOOK AT: "[Material fact]. [One detail that resists the first category]."
- USE before access: "The surface returns [bounded requirement]."
- TALK TO before access: "[Pilot addresses it]. [Environment responds ambiguously or not at all]."
- USE after success: "[Observable state change]. [Evidence fragment]."
- TALK TO after success: "[Short responsive line or preserved silence]."

## Operable surface versus silent landmark

When a scene contains both a small Terminal and a monumental structure, keep their interaction grammar separate:

- The Terminal may expose `LOOK AT`, `USE`, and `TALK TO`; only `USE` opens the human mediation layer.
- The landmark receives observation language, not Terminal status language.
- A Terminal response cannot be narrated as the landmark's response without direct evidence.
- Authored silence should name measured channels—no access surface, no separable audio, no observed movement—rather than declaring an object dormant, dead, or unwilling.
- Completion may alter the local node and navigation route while the landmark remains unchanged.

Contrast pattern:

> The small surface gives the player an operation. The large object gives the player an unknown.

This prevents visual scale from becoming accidental narrative authority and allows awe without turning every ruin into a speaking character.

## Success-message scaffold

Every code success gets three compact layers:

1. Physical response: what changes in the scene.
2. Recovered evidence: what becomes available.
3. Reframing line: why it complicates the question.

Template:

> [The object moves/lights/answers]. The recovered record identifies [bounded fact]. It does not call [human assumption] the same thing as [Builder label].

Keep success text under about 55 words for the main panel. Longer evidence belongs in an inspectable record.

## Failure-message scaffold

Failure must preserve confidence and fiction:

1. State that the program ran or failed to parse.
2. Point to the smallest useful correction.
3. Keep the interface patient.

Templates:

- Syntax: "The interface marks the place where the instruction stopped making sense. Check [specific feature]. Nothing has been lost."
- Wrong value: "The command is valid, but it names a different condition. Compare [expected concept] with [entered concept]."
- Partial structure: "The archive recognizes the outer structure. One required field is still unnamed: [field]."
- Unsafe inference: "The pipeline can produce that conclusion, but the evidence tag is missing. Label it as inference or return to the source."

Never punish a learner mistake with irreversible narrative loss.

## Hint ladder

Offer hints in three levels:

1. Concept reminder: describes the Python idea without supplying the line.
2. Shape hint: shows syntax with neutral placeholder values.
3. Near-complete assist: fills the structure and leaves one meaningful edit.

The story response should be identical after success regardless of hint use. Assistance affects mastery telemetry, not access to core narrative.

## Optional interaction families

### Inventory reflection

An item should gain one new observation after each chapter. Repeated inspection creates a private emotional thread without adding mandatory exposition.

### Revisit line

On returning to a prior scene, change one sentence to show that the pilot's interpretation has matured. The environment need not physically change every time.

### Contradictory witnesses

Present two short records that are both credible. The interaction asks the player to preserve both with provenance, not select a winner prematurely.

### Consent boundary

The interface says an operation is technically possible but not permitted by the surviving record. The learning goal is to distinguish capability from responsible use.

### Silence as authored data

A transcript marks a pause as intentional. The player may inspect its duration, position, and recurrence, but cannot fill it with generated speech and call that recovery.

## Chapter-end recorder prompts

Each chapter ends with a two-part reflection stored in the flight recorder:

- "What can I now support with evidence?"
- "What do I want to be true?"

The second answer is never graded for correctness. It can subtly alter later pilot narration while leaving canonical events unchanged.
