# Practical Image Production Rubric

Rubric ID: `HA-IMAGE-RUBRIC-v1`

Status: **ACTIVE / PRACTICAL PRODUCTION SELECTION**

This rubric prevents a useful production image from failing because every
minor prompt detail is not independently and unmistakably rendered. It judges
the image as a player-facing asset at its intended presentation size—not as a
diagram, forensic specimen, or literal checklist illustration.

## Core principle

An image is acceptable when it truthfully communicates the intended scene,
supports the player-facing purpose, fits the product composition, and contains
no genuine disqualifier. It does **not** need to make every texture, contact,
wear reaction, background cue, and hypothetical crop equally explicit.

Use two stages:

1. a short hard-gate check for actual blockers;
2. a practical 20-point production score for overall quality.

Do not convert a soft preference into a hard failure after seeing a candidate.

## Stage 1 — hard gates

A candidate is rejected only if at least one of these is true:

1. **Technical invalidity**
   - cannot decode reliably;
   - wrong required aspect ratio or dimensions after normalization;
   - unintended alpha, animation, corruption, or destructive crop;
   - visible generation damage that makes the asset unusable.

2. **Primary subject failure**
   - the intended scene or focal subject is absent;
   - the image depicts the wrong category of place or object;
   - the player-facing action or relationship cannot be understood at all.

3. **Meaning-changing contradiction**
   - the image materially contradicts canon, route, access, lesson ownership,
     world behavior, or the asset card's player-critical facts;
   - a prohibited human, biological, textual, signaling, reward, or response
     cue dominates the reading and changes what the scene means.

4. **Product unusability**
   - required focal content cannot fit the actual runtime container;
   - an interaction region cannot be made legible or reachable;
   - text, watermark, logo, severe artifact, or composition failure prevents
     lawful integration.

If none of these applies, continue to scoring. Ambiguity, subtlety, imperfect
material specificity, or a preference that could be stronger is not by itself
a hard failure.

## Stage 2 — practical production score

Score each category from `0` to `4` using the image at its intended display
size. Total possible score: `20`.

### A. Immediate scene read

- `4`: scene, focal subject, and player-facing relationship read immediately.
- `3`: intended read is clear after a brief look; one secondary cue is subtle.
- `2`: correct scene and subject, but the relationship needs supporting context.
- `1`: partially correct but confusing or easily misread.
- `0`: wrong or absent primary scene/subject.

### B. Composition and runtime usability

- `4`: strong hierarchy, crop resilience, useful negative space, and clear
  interaction/focal region.
- `3`: production-usable composition with a minor crop or emphasis compromise.
- `2`: usable with deliberate containment or positioning.
- `1`: major composition repair would be needed.
- `0`: cannot be integrated into the intended surface.

### C. Art direction and world fit

- `4`: distinctive, coherent, and unmistakably belongs to Horizon Archive.
- `3`: strong fit with one familiar or generic visual note.
- `2`: broadly compatible but less distinctive than desired.
- `1`: mostly generic, derivative, or tonally inconsistent.
- `0`: contradicts the intended world or mood.

### D. Physical/story support

- `4`: the important physical evidence and material relationships are readily
  visible and reinforce the intended story without explanation.
- `3`: all core evidence is present; one fine relationship or reaction is
  subtle, approximate, or merged into the overall read.
- `2`: core idea is present but one important supporting relationship is weak.
- `1`: several important facts rely on inference.
- `0`: image communicates a materially wrong story.

### E. Finish and production quality

- `4`: polished, tactile, coherent, and ready for integration after mechanical
  normalization.
- `3`: strong production quality with a minor imperfection unlikely to affect
  play.
- `2`: usable draft quality; one visible finishing pass would materially help.
- `1`: distracting artifacts, inconsistency, or weak material finish.
- `0`: technically or visually unusable.

## Decision thresholds

| Score | Disposition |
| --- | --- |
| `17–20` | **SELECT** — production-ready; stop generating |
| `14–16` | **SELECT / MINOR POLISH OPTIONAL** — acceptable now; make at most one single-variable edit only when regression risk is low |
| `11–13` | **HOLD AS BEST** — promising but one important production issue remains |
| `0–10` | **REJECT / NEW CONCEPT** — do not spend edits rescuing it |

Additional rules:

- A score of `14+`, no hard-gate failure, and no category scored `0` is a
  practical pass.
- A `14–16` candidate may be selected without another edit when prior edits
  have regressed the best state or the remaining issue is not player-critical.
- Do not reject a candidate merely because one hypothetical crop is weaker.
  Judge the actual supported runtime layouts.
- Do not require a precise count of small interlocks, scars, plates, branches,
  or reactions when the overall physical relationship reads truthfully.
- Do not require subtle background elements to compete with the focal subject.
- The first practical pass stops generation. Unused attempts are saved.

## Twenty-attempt completion rule

Each image has a hard lifetime budget of **20 image-generation or edit
attempts**.

- Attempt ordinals are continuous for that image and include launched requests
  that fail in transport or return no usable artifact.
- The first practical pass stops the run before attempt 20.
- No strategy family receives more than two non-improving edits.
- If no candidate reaches the normal `14+` threshold, attempt 20 closes
  generation and the highest-scoring technically valid candidate without a
  meaning-changing contradiction is selected as **DONE**.
- The selected candidate is the best of the run, not automatically the latest
  or twentieth candidate.
- Remaining imperfections become documented production compromises or runtime
  presentation work; they do not authorize attempt 21.
- Only the absence of any decodable image, a legal/safety blocker, or a
  meaning-changing canon contradiction can prevent forced completion. These
  are not artistic-quality exceptions and do not reset the budget.

`DONE` at this gate means creative image production is complete. Runtime
import, responsive presentation, interaction geometry, accessibility, and
release validation remain separate integration work.

## Asset-card classification

Before generation, classify requirements into only two groups:

### Player-critical facts

Keep this list to `3–5` facts. Each fact must affect scene meaning, navigation,
interaction, learning, continuity, accessibility, or truthful world behavior.
Failure of one may trigger a hard rejection.

### Art-direction preferences

Everything else is a preference used to compare candidates: exact material
vocabulary, precise counts, subtle wear differences, ideal asymmetry, degree of
weathering, secondary background visibility, and other polish goals. These
influence the score; they do not independently veto an otherwise useful image.

## Current asset calibration

For the current drained-basin construction image, the player-critical facts
are:

1. a dry basin scene with a safely approachable constructed feature recessed
   into or integrated with the ground;
2. a visibly nonhuman/artificial layered construction rather than a dominant
   dam, building, road, ordinary geology, or biological organism;
3. multiple visually distinct material histories that overlap enough to read
   as one manufactured artifact;
4. physical age/damage and recessed structure that support investigation;
5. no text, message, glow, reward, character, or world-response cue.

The following are preferences, not independent rejection gates:

- exactly two visible interlocks for every material pair;
- a perfectly traceable scar with three separately countable reactions;
- exact charcoal/ivory/rust material terminology;
- an ideal number or branching pattern of recessed voids;
- equally prominent lateral water in every crop;
- perfect asymmetry, weathering, or material microtexture.

## Evaluator discipline

- Evaluate the whole player-facing image before zooming into details.
- State the hard-gate result separately from the production score.
- Report at most three material weaknesses.
- Compare the candidate with the current best, not with an imagined perfect
  render.
- A text-only model evaluator is advisory. It may identify risks and score the
  rubric, but it cannot invent new requirements or overrule deterministic
  technical checks and explicit human judgment.
- If evaluator wording is inconsistent but the candidate scores `14+` under
  the rubric, retain it as a practical pass rather than defaulting to reject.
- At attempt 20, apply the forced-completion rule even when the best valid score
  is below `14`; record the compromise and stop generating.
