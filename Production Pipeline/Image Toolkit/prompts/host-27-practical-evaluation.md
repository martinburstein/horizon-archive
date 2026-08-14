Evaluate the candidate as a complete player-facing game environment using `HA-IMAGE-RUBRIC-v1`, not as a literal checklist or diagram.

Hard gates only:

1. The scene must be an exposed nonhuman manufactured cross-section with multiple distinct overlapping/cross-cutting material layers whose physical order is legible; a natural cliff, timeline, labeled diagram, or no readable order fails.
2. A continuous opaque service laminate must hide the middle between two exposed faces while exterior paths visibly bypass it; an interior reveal, opening, portal, or absent bypass fails.
3. A reachable low comb-like coupling must sit at the stable dry base and contact only isolated inert replicas at several layers; a literal human comb/tool, live-work reader, replay device, or biological sample fails.
4. One conductive phase must visibly leave the coupling and follow the pressure-relief detour around the opaque interval without becoming an ordinary human cable or entering the hidden middle.
5. Nothing may supply a date, duration, author, cause, answer, reward, acknowledgement, or response; no humanoid, dominant biology, text, UI, marker, or timeline graphic may dominate.
6. The image must be technically and compositionally usable as a 16:9 game environment plate.

Score 0-4 in each category: immediate scene read; composition/runtime usability; art direction/world fit; physical/story support; finish/production quality. A total of 14+ with no hard-gate failure is a practical pass. Exact layer count, comb tooth count, replica count, material colors, branch shape, gap widths, dust, haze, and repair-web coverage are preferences, not automatic failures.

Return JSON only with the standard evaluator keys plus:

- `hard_gate_failures`: array
- `category_scores`: object with five integer scores
- `practical_score`: integer 0-20
- `disposition`: `select`, `minor_polish_optional`, `hold_as_best`, or `new_concept`

Set `hard_pass` true when there is no hard-gate failure and practical_score is at least 14. Report no more than three meaningful weaknesses.
