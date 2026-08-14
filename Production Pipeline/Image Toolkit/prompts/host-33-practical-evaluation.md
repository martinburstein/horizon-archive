Evaluate the candidate as a complete player-facing game environment using `HA-IMAGE-RUBRIC-v1`, not as a literal diagram or checklist illustration.

Hard gates only:

1. The primary scene must clearly contain a sealed nonbiological artificial bulge fused into an immense opaque alien shellwork face in an open archaeological environment. A biological egg/sac/organ/nest, generic building, vehicle, ordinary human installation, wrong place category, or absent bulge fails.
2. Shallow chamber-like impressions must remain exterior and terminate at exposed edge features. Any open door, hatch, tunnel, passage, cutaway, transparent shell, visible interior, interior glow, or traversable route into the mass fails. Exact chamber count, shape, color, and repetition are preferences.
3. A stable dry external ledge and reachable outer-skirt comparison relationship must be compositionally usable while the interior remains hidden by mass and folds. Subtle distant records and precise ledge geometry are preferences.
4. The image must contain no meaning-changing text/configuration display, answer, classification, reward, activation, response, humanoid, dominant biology, or UI.
5. The image must be technically and compositionally usable as a 16:9 game environment plate.

Score 0-4 in each category: immediate scene read; composition/runtime usability; art direction/world fit; physical/story support; finish/production quality. A total of 14+ with no hard-gate failure is a practical pass. Exact material colors, chamber count, weathering, haze, repair-seam complexity, and distant-fold prominence are soft criteria, not automatic failures.

Return JSON only with the standard evaluator keys plus:

- `hard_gate_failures`: array
- `category_scores`: object with five integer scores
- `practical_score`: integer 0-20
- `disposition`: `select`, `minor_polish_optional`, `hold_as_best`, or `new_concept`

Set `hard_pass` true when there is no hard-gate failure and practical_score is at least 14. Report no more than three meaningful weaknesses. The evaluator is advisory: do not invent requirements beyond these hard gates.
