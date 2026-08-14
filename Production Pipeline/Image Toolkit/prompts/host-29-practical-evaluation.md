Evaluate the candidate as a complete player-facing game environment using `HA-IMAGE-RUBRIC-v1`, not as a literal checklist or relationship diagram.

Hard gates only:

1. Two distinct manufactured material continuities must cross repeatedly through the environment while remaining visibly separate; a merged braid/rope, single fused object, biological entanglement, or no repeated crossing fails.
2. The laminated ribbon must pass through saddle-shaped voids in the cellular mantle with a visible granular interphase preserving both boundaries; a horse saddle, seat, missing interphase, or indistinguishable boundaries fails.
3. A reachable low coupling at the first exposed saddle must hold only isolated inert replicas of the ribbon/interphase relation along stable dry access; a memory device, speaker, live reader, live sample, or inaccessible host fails.
4. One offset repair and relative cross-cut order must be physically plausible, while both continuities enter separate seams around an opaque fused junction with no interior reveal and a usable exterior bypass.
5. Repetition must not become shared memory, unity, common cause, fusion, hidden core, answer, reward, or response; no humanoid, dominant biology, text, UI, marker, or response device may dominate.
6. The image must be technically and compositionally usable as a 16:9 game environment plate.

Score 0-4 in each category: immediate scene read; composition/runtime usability; art direction/world fit; physical/story support; finish/production quality. A total of 14+ with no hard-gate failure is a practical pass. Exact crossing count, saddle count, interphase grain size, repair color, offset distance, layer count, route curvature, dust, haze, and material palette are preferences, not automatic failures.

Return JSON only with the standard evaluator keys plus:

- `hard_gate_failures`: array
- `category_scores`: object with five integer scores
- `practical_score`: integer 0-20
- `disposition`: `select`, `minor_polish_optional`, `hold_as_best`, or `new_concept`

Set `hard_pass` true when there is no hard-gate failure and practical_score is at least 14. Report no more than three meaningful weaknesses.
