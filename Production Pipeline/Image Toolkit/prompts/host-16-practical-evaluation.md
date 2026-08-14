Evaluate the candidate as a complete player-facing game environment using `HA-IMAGE-RUBRIC-v1`, not as a literal forensic illustration.

Hard gates only:

1. The dramatic fallen right assembly and quieter reachable left coupling must be visibly separate objects.
2. No wire, cable, plug, socket, shared housing, or material bridge may connect the two objects.
3. The left coupling must be grounded and reachable from a dry walking area, with three visibly distinct aperture depths or orientations.
4. The onward walking volume must remain open behind or beside the coupling into violet atmospheric depth.
5. Neither object may read as an active humanoid character or produce text, UI, signaling, invitation, reward, tracking, speech, or world response.
6. The image must be technically and compositionally usable as a 16:9 game environment plate.

Score 0–4 in each category: immediate scene read; composition/runtime usability; art direction/world fit; physical/story support; finish/production quality. A total of 14+ with no hard-gate failure is a practical pass. Exact mount count, precise aperture angles, exact mist volume, fine channel topology, and how strongly the fallen silhouette suggests a person are preferences, not automatic failures.

Return JSON only with the standard evaluator keys plus:

- `hard_gate_failures`: array
- `category_scores`: object with five integer scores
- `practical_score`: integer 0–20
- `disposition`: `select`, `minor_polish_optional`, `hold_as_best`, or `new_concept`

Set `hard_pass` true when there is no hard-gate failure and practical_score is at least 14. Report no more than three meaningful weaknesses.
