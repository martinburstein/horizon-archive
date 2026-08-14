Evaluate the candidate as a complete player-facing game environment using `HA-IMAGE-RUBRIC-v1`, not as a literal forensic illustration.

Hard gates only:

1. A large identity-bearing interlock must read as visibly sealed, opaque, inert, and noninviting without becoming an open door, portal, puzzle, alarm, punishment, refusal, or unlock challenge.
2. A much smaller grounded service aperture must be visible beside the interlock, physically distinct and integrated into ordinary repair fabric rather than reading as a console, scanner, or control panel.
3. There must be no cable, wire, pipe, conduit, tunnel, channel, beam, or data stream connecting the service aperture to the sealed interlock; the image must not imply access to identity-bearing content.
4. A stable exposed heat-and-material working margin must remain physically continuous beyond the perimeter as a clear open dry pedestrian route.
5. Heat, repair, light, and maintenance must remain pre-existing and indifferent, with no humanoid, text, UI, marker, greeting, refusal, reward, tracking, reveal, opening, or response cue.
6. The image must be technically and compositionally usable as a 16:9 game environment plate.

Score 0–4 in each category: immediate scene read; composition/runtime usability; art direction/world fit; physical/story support; finish/production quality. A total of 14+ with no hard-gate failure is a practical pass. Exact interlock scale, repair color, aperture orientation, steam density, joint pattern, and cross-section visibility are preferences, not automatic failures.

Return JSON only with the standard evaluator keys plus:

- `hard_gate_failures`: array
- `category_scores`: object with five integer scores
- `practical_score`: integer 0–20
- `disposition`: `select`, `minor_polish_optional`, `hold_as_best`, or `new_concept`

Set `hard_pass` true when there is no hard-gate failure and practical_score is at least 14. Report no more than three meaningful weaknesses.
