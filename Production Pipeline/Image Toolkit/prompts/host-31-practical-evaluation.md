Evaluate the candidate as a complete player-facing game environment using `HA-IMAGE-RUBRIC-v1`, not as a literal checklist, four-panel diagram, or relationship chart.

Hard gates only:

1. Three visually distinct manufactured material families must coexist in one open environment and remain independently traceable: laminated ribbon, cellular mantle, and refractory filament fan. A single merged object, missing third family, or dominant biological substitution fails.
2. The scene must make both contact and non-contact physically plausible without framing either as success, failure, hierarchy, or universal rule. At least one filament-to-ribbon contact and one sealed opaque unknown casing must also be readable; exact counts and positions are preferences.
3. A small reachable isolated replica body beneath or beside the open passage must hold inert comparison samples near a low coupling and stable dry route. A dominant central core, live-work reader, inaccessible monument, reward station, or command center fails.
4. The casing must not reveal an interior, and the image must contain no meaning-changing answer, activation, reward, response, ranking, humanoid, dominant text/UI, or causal diagram.
5. The image must be technically and compositionally usable as a 16:9 game environment plate.

Score 0-4 in each category: immediate scene read; composition/runtime usability; art direction/world fit; physical/story support; finish/production quality. A total of 14+ with no hard-gate failure is a practical pass. Exact placement, contact count, sample count, filament branch count, material color, route curvature, repair detail, dust, haze, and lighting are preferences, not automatic failures.

Return JSON only with the standard evaluator keys plus:

- `hard_gate_failures`: array
- `category_scores`: object with five integer scores
- `practical_score`: integer 0-20
- `disposition`: `select`, `minor_polish_optional`, `hold_as_best`, or `new_concept`

Set `hard_pass` true when there is no hard-gate failure and practical_score is at least 14. Report no more than three meaningful weaknesses.
