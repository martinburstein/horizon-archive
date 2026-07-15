# AB-01 — Drowned Archive Workload Terminal

## Identity

- **Scene ID:** AB-01
- **Player-facing survey name:** Drowned Archive
- **World / region:** World B / Drowned Archive Basin
- **Production status:** Interaction-integrated; alien-function art replacement required
- **Image:** [drowned-archive-workload-terminal-v1.png](../images/drowned-archive-workload-terminal-v1.png)
- **Archived pixel-era fallback:** [AB-01 available](../../Pixelated%20Draft/production-pixel/AB-01/ab01-available-640x360.png) · [package and QA](../../Pixelated%20Draft/production-pixel/AB-01/README.md)
- **Historical frame evidence:** [available/complete study](../../Pixelated%20Draft/production-pixel/AB-01/CANONICAL_FRAME.md)
- **Arrival continuity:** [completed Glass Meadow departure and safe-return map](GM-01-to-AB-01-departure-continuity.md)
- **Original environment reference:** [Alien Ruins.png](../../Concept%20Art/Alien%20Ruins.png)
- **Purpose:** Give L-02-01 a distinct local contact point while reframing the flooded basin as an active, nonhuman landscape process whose resource/terraforming occupation can be inferred but not fully decoded.

## Alien functionality and first-contact brief

- **Landscape system:** basin inflow, reflective phase surfaces, leaning field elements, suspended structure, segmented ridges, local contact, mist, and outflow must behave as one system with visible inputs, transformations, outputs/byproducts, failure states, and maintenance.
- **Nested scales:** local three-element contact; basin routing/phase separation; horizon or atmosphere-scale coupling.
- **Nonhuman affordances:** the contact has no front or human operating height; the segmented ridge is not a walkway by design; suspended and submerged elements couple across distances and orientations unavailable to a human body.
- **Discoverable clues:** repeat element triplets in basin and contact; contrast aligned/misaligned fluid or reflection states; show one contact change propagate through a channel, field element, and distant atmospheric or suspended response without using labels.
- **Plausible first readings:** resource fractionation, hydrologic/atmospheric terraforming, astronomical correlation, or preservation all fit the evidence. “Archive” remains a provisional human survey name, not a decoded occupation.
- **First contact:** the player uses an incidental stable ridge; no human path, stair, rail, console, retrofit, wear, body, companion, or ship appears.

## Navigation

- **Entry:** a stable segmented ridge reaches the lower-left edge incidentally.
- **Exit / onward route:** the same phase boundary continues behind the contact toward raised process shelves.
- **Walkable plane:** dry portions of the ridge form a readable safe route, but irregular cadence, nonhuman scale, and distributed coupling prevent it from reading as a constructed human causeway or operating apron.
- **Camera:** first-person wide three-quarter survey view with a low stable phase ridge and high cosmic horizon; Builder operating relationships must not align to human eye height.

## Interaction zones

| Zone | Approximate screen area | Read | Intended interaction |
|---|---|---|---|
| Workload Sort contact | x 60–73%, y 47–82% | asymmetric three-element local coupling with no screen, front, or human operating position | primary `LOOK AT` / `USE` target opening L-02-01 through expedition translation layer |
| Stable phase ridge | x 0–65%, y 49–100% | continuous dry system boundary narrowing toward process shelves | incidental entry and inferred player approach |
| Suspended archive | x 41–60%, y 8–40% | monumental dark geometric frame above the island | distant landmark and optional observation, not the exercise trigger |
| Raised process shelves | x 42–61%, y 39–55% | nonuniform stacked phase interfaces continuing the ridge | onward-route cue after completion, not human stairs |

## Hotspot implementation record

- Implemented Glass Meadow return ridge: canonical `left: 0%`, `top: 70%`, `width: 17.5%`, `height: 30%`, exactly `x=0, y=252, w=112, h=108` in the `640 x 360` world.
- Authored narrow return ridge: `left: 0%`, `top: 70%`, `width: 15%`, `height: 30%`, exactly `x=0, y=126, w=48, h=54` in the `320 x 180` world.
- The return ridge remains secondary negative space inside the existing lower-left phase ridge. It has no painted icon, arrow, sign, portal, path, glow, or persistent world label; hover/focus uses transparent containment, while the lower interface owns `Return: Glass Meadow`.
- Return is gated by completed Meadow route mastery and restores the completed/crowned Meadow composition and departure focus without changing evidence. See the [round-trip continuity map](GM-01-to-AB-01-departure-continuity.md).
- Desktop scene crop: `object-position: center 20%`; hotspot `left: 60.5%`, `top: 55%`, `width: 11%`, `height: 44%`.
- Current authored `320 x 180` world derivative: hotspot `left: 20%`, `top: 54%`, `width: 24%`, `height: 43%`, approximately `x=64, y=97, w=77, h=77`.
- These viewport bounds map back to the full-plate source zone (`x 60–73%`, `y 47–82%`) under `object-fit: cover`; they are intentionally different rather than copied raw from the plate.
- Maintain a minimum interactive target of 44 by 44 CSS pixels at supported viewport sizes. The focus indicator should follow a simple rectangular hit area without painting a permanent outline over the art.
- The former broad central ruins hotspot has been removed. The suspended landmark remains environmental and non-interactive.

## Workload Sort resume boundary

- Restored assessment language belongs only inside the open Terminal interface. The conditional status rail reads `RESUME // PRIOR ASSESSED PROGRESS: n/12 finalized · WORKING CONTROLS: reset clean` inside the scrolling task pane, between the checkpoint explanation and the live Activity/Form/Progress fields.
- The world plate, scene status, environmental description, image alternative, hotspot label, ridge focus treatment, and lower-band return action carry no restored item number, score, partial-progress state, or notification copy. Do not add a progress plaque, badge, toast, icon, numeral, arrow, sign, path, glow, or resume marker to the scene.
- Physical Terminal states remain coarse scene states rather than assessment counters: `available` when the incomplete scene has no Terminal open, `active` while an AB-01 Terminal is open, and `complete` only after the scene completion gate. Reopening at W02, W05, retry R-W04, or an unacknowledged 12/12 result uses the same generic `active` world geometry; the plate never encodes those restored values.
- Returning to the completed Meadow clears transient Workload Sort controls but preserves allowlisted assessed evidence. Returning again to AB-01 restores the unchanged available/complete scene relationship; only reopening the Terminal reconstructs and displays the resume rail. The lower-left ridge and its canonical/narrow geometry never change for resume.
- All physical state art remains confined to the existing Terminal contact footprint. Preserve the first-person plate and keep the protagonist, companions, ship, reflections, shadows, and body fragments out of frame.

## Visual specification

- **Terminal silhouette:** water-worn coupling intersects ridge, water, and a separate field element; three asymmetric purpose-grown elements fold around a core with no human-facing front or scale.
- **Family relationship:** three purpose-grown elements and a central coupling recur from the Glass Garden, but their basin relationships, distributed orientation, scale, and weathering prevent the contact from reading as a portable human device.
- **Palette:** blue-black basalt, charcoal masonry, indigo sky, muted violet water, sparse lavender crystal light, restrained peach-silver horizon accents.
- **Lighting:** cool cosmic ambient light and wet-surface response; any local violet state must visibly route through fluid, field element, or suspended/submerged counterpart rather than form an isolated decorative pool.
- **Atmosphere:** fine basin mist kept below the landmark and away from the Terminal silhouette.
- **Scale cues:** repeated phase-cell sizes, submerged/suspended correspondences, ridge segments, and atmosphere-scale response; avoid human slab, riser, or body proportions as Builder units.
- **Focal hierarchy:** stable ridge and local contact first at gameplay scan; suspended structure and basin-wide process first at scenic scan; raised process shelves third.

## Continuity constraints

- Surface-canon boundary: this is a local interface and exercise access point only; its form does not define the larger system or explain the site.
- Must preserve: reflective flooded basin, repeated leaning field elements, monumental suspended structure, cosmic indigo/peach atmosphere, and faceted painterly surfaces—while tying every major form to fluid, phase, atmospheric, state, or maintenance evidence.
- Must avoid: human causeway/stairs/rails/apron, front-facing or chest-high console, conventional screens or keyboards, readable glyphs, definitive “archive” occupation, functionless surreal monoliths, unexplained floating forms, magic-altar framing, combat, characters, human retrofit, or multiple competing bright nodes.
- Neighboring visual link: [selected GM-01 Glass Meadow painting](../../Glass%20Meadow%20Example.png) and [departure continuity map](GM-01-to-AB-01-departure-continuity.md).

## Production record

- **Next implementation asset:** a high-resolution photorealistic 16:9 basin master with separate registered Terminal state layers and responsive derivatives.
- **Archived state overlays:** `Pixelated Draft/production-pixel/AB-01/states/terminal-*-64x64.png` remain migration evidence only.
- **Interaction hotspot:** preserve the existing responsive percentage mapping until live review proves a composition change is necessary.
- **Visual target:** contemporary cinematic realism with physically credible water, geology, atmosphere, materials, reflections, scale, and alien process relationships; reject pixel-art texture and retro rendering.

- **Final prompt:** [Prompt HA-LS-002](../prompt-provenance-log.md#ha-ls-002)
- **Generator / mode:** OpenAI built-in image generation, reference-guided generation
- **Native dimensions:** `1672 x 941` PNG
- **Historical selection notes:** the original grounded node, causeway approach, landmark separation, and three-fin family resemblance read without annotation, but the human-route and console-scale assumptions are superseded.
- **Historical/technical validation:** clean plate and browser integration pass navigation, target, keyboard, responsive, and title-to-credits checks. The current art predates the alien-function gate and is not production-approved until it shows three operating scales, nonhuman affordances, repeated/state/cause-effect clues, resource/terraforming evidence, two plausible readings, and no human ergonomic defaults.
