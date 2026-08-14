Evaluate the candidate as a complete player-facing game environment using `HA-IMAGE-RUBRIC-v1`, not as a literal diagram or checklist illustration.

Terminology: the conductive seam is a flush persistent material relation across two unlike substrates. It is not expected to resemble a cable, route, written line, or active circuit. The membrane may transmit light but must not reveal an interior.

Hard gates only:

1. The primary scene must clearly contain a reachable nonhuman sacrificial laminate joining a broad pressure-bent translucent mineral membrane and pale porous mineral foam. Fabric, skin/biology, a screen, ordinary human composite panel, wrong place category, or an absent membrane-foam relation fails.
2. One continuous dark conductive seam must visibly persist from the membrane across the fused boundary into the foam. A cable, pipe, road, written line, broken/non-crossing relation, or meaning-changing glowing route fails. Exact thickness, curvature, and color are preferences.
3. A stable dense anchor line must provide the player-facing approach while the flexible membrane remains visibly separate from the walking surface. A route that requires walking on the membrane or lacks a credible stable approach fails. Exact anchor geometry and accretion are preferences.
4. The image must contain no meaning-changing text/API/SDK/endpoint symbol, external result, answer, reward, activation, response, humanoid, dominant biology, or UI.
5. The image must be technically and compositionally usable as a 16:9 game environment plate.

Score 0-4 in each category: immediate scene read; composition/runtime usability; art direction/world fit; physical/story support; finish/production quality. A total of 14+ with no hard-gate failure is a practical pass. Exact material palette, condensation amount, weathering, membrane translucency, anchor count, and distant bypass prominence are soft criteria, not automatic failures.

Return JSON only with the standard evaluator keys plus:

- `hard_gate_failures`: array
- `category_scores`: object with five integer scores
- `practical_score`: integer 0-20
- `disposition`: `select`, `minor_polish_optional`, `hold_as_best`, or `new_concept`

Set `hard_pass` true when there is no hard-gate failure and practical_score is at least 14. Report no more than three meaningful weaknesses. The evaluator is advisory: do not invent requirements beyond these hard gates.
