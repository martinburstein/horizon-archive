Evaluate the candidate as a complete player-facing game environment using `HA-IMAGE-RUBRIC-v1`, not as a literal diagram or checklist illustration.

Hard gates only:

1. The primary scene must clearly contain a richly textured external mineral sheath covering part of a massive opaque alien casing bypass in an open archaeological environment. A generic building, vehicle, ordinary human door, wrong place category, or absent sheath fails.
2. The sheath seam must read as fully fused and closed: no open panel, detached edge, hatch, door, handle, hinge, window, cutaway, transparent surface, visible interior, interior glow, or remove-action invitation. Exact seam shape, scale count, colors, and material vocabulary are preferences.
3. A small reachable inert local sample relationship must be present near a stable dry approach and support visual comparison with the sheath without labels, ranking, live work, a scanner, or a central core. Exact fragment count and placement are preferences.
4. The image must contain no meaning-changing text/index, classification, answer, success/failure signal, reward, activation, response, humanoid, dominant biology, or UI.
5. The image must be technically and compositionally usable as a 16:9 game environment plate.

Score 0-4 in each category: immediate scene read; composition/runtime usability; art direction/world fit; physical/story support; finish/production quality. A total of 14+ with no hard-gate failure is a practical pass. Background shell folds, exact material colors, seam complexity, weathering, haze, precise sample geometry, and minor crop preferences are soft criteria, not automatic failures.

Return JSON only with the standard evaluator keys plus:

- `hard_gate_failures`: array
- `category_scores`: object with five integer scores
- `practical_score`: integer 0-20
- `disposition`: `select`, `minor_polish_optional`, `hold_as_best`, or `new_concept`

Set `hard_pass` true when there is no hard-gate failure and practical_score is at least 14. Report no more than three meaningful weaknesses. The evaluator is advisory: do not invent requirements beyond these hard gates.
