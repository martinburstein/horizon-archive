Evaluate the candidate as a complete player-facing game environment using `HA-IMAGE-RUBRIC-v1`, not as a literal diagram or checklist illustration.

Terminology: in this asset, an exterior `record` means a visibly bounded or
readable material-history zone on the alien shell surface. It is not a written
record, book, manuscript, tablet, sign, or screen. Never fail a candidate for
lacking a written artifact. A reachable layered maintenance surface with
sealed overlaps, weathering, and a partially buried edge can satisfy the
record requirement without text or diagrammatic explanation.

Hard gates only:

1. The primary scene must clearly contain a reachable exterior alien shellwork record made from multiple overlapping weathered sacrificial skins. A book/manuscript, sign, screen, ordinary human wall, inaccessible high face, wrong place category, or absent layered record fails.
2. Physical residue, strain, repair, and accretion must support multiple plausible material correspondences without a written label, arrow, ranking, diagram, or visually singled-out answer. Exact skin count, color, and correspondence geometry are preferences.
3. The scene must preserve uncertainty through an unmatched exposed record and/or a buried unavailable outer margin, with no open interior, proven identity, mapped through-route, or resolved source. Exact placement and prominence are preferences.
4. The image must contain no meaning-changing text/prompt/code, answer, classification, reward, activation, response, humanoid, dominant biology, or UI.
5. The image must be technically and compositionally usable as a 16:9 game environment plate with a stable dry exterior approach.

Score 0-4 in each category: immediate scene read; composition/runtime usability; art direction/world fit; physical/story support; finish/production quality. A total of 14+ with no hard-gate failure is a practical pass. Exact material palette, layer count, weathering, haze, correspondence subtlety, and distant-fold prominence are soft criteria, not automatic failures.

Return JSON only with the standard evaluator keys plus:

- `hard_gate_failures`: array
- `category_scores`: object with five integer scores
- `practical_score`: integer 0-20
- `disposition`: `select`, `minor_polish_optional`, `hold_as_best`, or `new_concept`

Set `hard_pass` true when there is no hard-gate failure and practical_score is at least 14. Report no more than three meaningful weaknesses. The evaluator is advisory: do not invent requirements beyond these hard gates.
