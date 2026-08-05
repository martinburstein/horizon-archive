# 3 - Player-Journey Tabletop Lab

## Idea

Use browser-only ChatGPT Pro as a tabletop facilitator that walks through
released or explicitly provided experience specifications from the viewpoint
of many different players. The goal is to expose ambiguous instructions,
confusing state transitions, recovery gaps, cognitive overload, and
accessibility risks before future desktop work begins.

This is a specification review, not a playtest. Pro must never claim that it
ran the game or observed real player behavior.

## Why this suits browser-only Pro

The model can sustain many long scenario walkthroughs, preserve detailed
state ledgers, compare personas, challenge assumptions, and synthesize failure
patterns. This is thinking-heavy work that uses uploaded product and UX
documents but does not require programming or a running application.

## Required inputs

Upload current copies of:

- the authoritative workflow and handoff packet;
- released shell or experience-blueprint documents being examined;
- exact entry, exit, focus, save, resume, and recovery contracts;
- player-facing instructions and feedback text;
- accessibility and responsive-layout requirements;
- learning objectives and evidence rules; and
- accepted as-built summaries, clearly identified as historical evidence.

Do not provide code or ask Pro to infer runtime behavior from implementation.

## Suggested tabletop lenses

Run each specified journey through several lenses:

1. first-time player with no project vocabulary;
2. returning player resuming mid-flow;
3. keyboard-only player;
4. screen-reader-oriented conceptual review;
5. low-vision or high-zoom conceptual review;
6. reduced-motion user;
7. narrow-screen user;
8. player who chooses an incorrect action repeatedly;
9. player who pauses or abandons at every state boundary;
10. player who misunderstands the learning objective;
11. privacy-conscious player questioning ownership and authority; and
12. player encountering offline or degraded behavior.

These are analytical lenses, not claims about real people or assistive
technology performance.

## Work to perform

1. Translate the provided specification into an explicit state table.
2. Record the information available to the player at each state.
3. For every persona lens, walk through each permitted action and response.
4. Track assumptions the journey requires the player to make.
5. Identify dead ends, loops, ambiguous focus targets, unclear recovery,
   premature explanations, missing feedback, and possible evidence leakage.
6. Distinguish specification defects from questions that require runtime
   verification.
7. Propose wording or specification questions, not code changes.
8. Rank issues by whether they block comprehension, learning, accessibility,
   recovery, or presentation.
9. Create a small set of future human playtest scripts based on the findings.

## Deliverables

- `SPECIFICATION_STATE_TABLE.md`;
- `TABLETOP_SESSION_LOGS.md`;
- `PLAYER_ASSUMPTION_REGISTER.md`;
- `COMPREHENSION_AND_RECOVERY_RISKS.md`;
- `DESKTOP_VERIFICATION_SCENARIOS.md`; and
- `FUTURE_HUMAN_PLAYTEST_SCRIPT.md`.

Each issue should include the exact source passage, tabletop lens, expected
contract, ambiguity, consequence, earliest owner, and required verification.

## Guardrails

- Label all sessions `SIMULATED SPECIFICATION WALKTHROUGH`.
- Never call the exercise a real playtest or accessibility validation.
- Do not claim visual layout, focus movement, timing, audio, saving, or runtime
  recovery works unless accepted uploaded evidence explicitly states it.
- Do not inspect private saves or ask Martin to expose browser data.
- Do not expand routes, canon, rewards, identity, authority, or later states.
- Do not produce implementation instructions or patches.

## Copy-ready kickoff prompt

```text
Facilitate a non-authoritative tabletop review of the uploaded Horizon Archive
experience specification. You are not running the game and must not describe
this as a real playtest. First convert the specification into an explicit
state, action, feedback, focus, save, and recovery table with source citations.

Then walk the specification through the provided player lenses. Record every
assumption, ambiguity, failure path, comprehension risk, and item requiring
desktop verification. Propose questions and verification scenarios, not code.
Do not extend canon or the released route.

Begin with the state table and one first-time-player walkthrough. Wait for my
approval before running the remaining lenses.
```

## Useful result for Codex later

Codex can compare the tabletop findings with the real implementation and use
the most credible scenarios as focused manual or automated checks. The browser
work supplies breadth of reasoning while desktop work supplies actual proof.
