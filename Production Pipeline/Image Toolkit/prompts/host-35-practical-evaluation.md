Evaluate the candidate as a complete player-facing game environment using `HA-IMAGE-RUBRIC-v1`, not as a literal diagram or checklist illustration.

Terminology: the twin chambers are sealed exterior volumes inside one local coupling body. They are not expected to show an interior, doors, literal communication, human request/reply symbols, or active machinery.

Hard gates only:

1. The primary scene must clearly contain a reachable maintained near-district outer skin with one off-axis artificial coupling holding two sealed related chambers in the same exterior body. Open rooms, biological organs/eggs, vehicles, ordinary human machinery, wrong place category, or an absent twin coupling fails.
2. Both chambers must terminate within the local body before any active process. Any pipe, cable, beam, channel, tunnel, signal, open interior, or explicit communication link from them to another work fails. Exact chamber symmetry, rib pattern, and material vocabulary are preferences.
3. A broad undisturbed mineral plain must visibly separate near, middle, and/or horizon districts. A marked lane, road, bridge, cable, repeated paving, synchronized light sequence, or other proven connection between districts fails. Exact number and prominence of distant districts are preferences.
4. The image must contain no meaning-changing text/request-reply symbol, answer, response, reward, activation, player synchronization, humanoid, dominant biology, or UI.
5. The image must be technically and compositionally usable as a 16:9 game environment plate with a stable unmarked onward bearing.

Score 0-4 in each category: immediate scene read; composition/runtime usability; art direction/world fit; physical/story support; finish/production quality. A total of 14+ with no hard-gate failure is a practical pass. Exact material palette, vane count, atmospheric depth, asymmetry, weathering, and subtle horizon recurrence are soft criteria, not automatic failures.

Return JSON only with the standard evaluator keys plus:

- `hard_gate_failures`: array
- `category_scores`: object with five integer scores
- `practical_score`: integer 0-20
- `disposition`: `select`, `minor_polish_optional`, `hold_as_best`, or `new_concept`

Set `hard_pass` true when there is no hard-gate failure and practical_score is at least 14. Report no more than three meaningful weaknesses. The evaluator is advisory: do not invent requirements beyond these hard gates.
