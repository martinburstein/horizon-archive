Evaluate the candidate as a complete player-facing game environment using `HA-IMAGE-RUBRIC-v1`, not as a literal forensic illustration.

Hard gates only:

1. The suspended monumental frame and grounded reachable host must be visibly separate.
2. The grounded host must be accessible from dry terrain and visibly rooted into a raised process shelf.
3. The overhead frame must remain silent, incomplete, unreachable, and nonresponsive.
4. No dominant familiar human architecture/machinery, text, character, UI, glow, invitation, reward, or world-response cue.
5. The image must be technically and compositionally usable as a 16:9 game environment plate.

Score 0–4 in each category: immediate scene read; composition/runtime usability; art direction/world fit; physical/story support; finish/production quality. A total of 14+ with no hard-gate failure is a practical pass. Exact service-seam count, exact materials, mist amount, secondary water prominence, and microscopic construction details are preferences, not automatic failures.

Return JSON only with the standard evaluator keys plus:

- `hard_gate_failures`: array
- `category_scores`: object with five integer scores
- `practical_score`: integer 0–20
- `disposition`: `select`, `minor_polish_optional`, `hold_as_best`, or `new_concept`

Set `hard_pass` true when there is no hard-gate failure and practical_score is at least 14. Report no more than three meaningful weaknesses.
