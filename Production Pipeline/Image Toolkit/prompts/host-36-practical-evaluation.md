Evaluate the candidate as a complete player-facing game environment using `HA-IMAGE-RUBRIC-v1`, not as a literal diagram or checklist illustration.

Terminology: `unclocked` means the vanes are visibly caught at different angles or motion phases. The image does not need to diagram time, animate, or prove exact speeds. `Switchyard` is only a human analogy and must not require rails or human infrastructure.

Hard gates only:

1. The primary scene must clearly contain a nonhuman refractory-vane assembly surrounding one return body, with a distinct reachable local coupling at its base. A wind farm, turbine, rail switchyard, power substation, antenna/radar array, vehicle, ordinary human machine, wrong place category, or absent base coupling fails.
2. The vanes must read as independently phased rather than one synchronized fan, clock, coordinated signal, or viewer-reactive display. Exact vane count, angle, amount of blur, and pivot geometry are preferences.
3. Broad open substrate must separate other visible districts, with no road, rail, bridge, cable, beam, channel, marked lane, synchronized lights, or proven route connecting them. Exact number and prominence of distant districts are preferences.
4. The image must contain no meaning-changing text/endpoint/credential, external result, answer, reward, activation, response, player synchronization, humanoid, dominant biology, or UI.
5. The image must be technically and compositionally usable as a 16:9 game environment plate with a stable dry approach to the base coupling.

Score 0-4 in each category: immediate scene read; composition/runtime usability; art direction/world fit; physical/story support; finish/production quality. A total of 14+ with no hard-gate failure is a practical pass. Exact material palette, vane count, atmospheric depth, weathering, motion-blur strength, and distant laminar margin are soft criteria, not automatic failures.

Return JSON only with the standard evaluator keys plus:

- `hard_gate_failures`: array
- `category_scores`: object with five integer scores
- `practical_score`: integer 0-20
- `disposition`: `select`, `minor_polish_optional`, `hold_as_best`, or `new_concept`

Set `hard_pass` true when there is no hard-gate failure and practical_score is at least 14. Report no more than three meaningful weaknesses. The evaluator is advisory: do not invent requirements beyond these hard gates.
