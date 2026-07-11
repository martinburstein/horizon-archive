# AB-01 — Drowned Archive Workload Terminal

## Identity

- **Scene ID:** AB-01
- **Player-facing survey name:** Drowned Archive
- **World / region:** World B / Drowned Archive Basin
- **Production status:** Selected concept target; not integrated
- **Image:** [drowned-archive-workload-terminal-v1.png](../images/drowned-archive-workload-terminal-v1.png)
- **Original environment reference:** [Alien Ruins.png](../../Concept%20Art/Alien%20Ruins.png)
- **Purpose:** Give the playable L-02-01 Workload Sort exercise a distinct, grounded physical Terminal while preserving the suspended archive as the environmental landmark.

## Navigation

- **Entry:** broad causeway from the lower-left edge.
- **Exit / onward route:** causeway continues behind the Terminal toward the center steps.
- **Walkable plane:** dry, dark paving forms an uninterrupted lower-left to upper-center route; a widened right-hand apron provides approach space around the node.
- **Camera:** wide side-on three-quarter adventure view with a low causeway foreground and high cosmic horizon.

## Interaction zones

| Zone | Approximate screen area | Read | Intended interaction |
|---|---|---|---|
| Workload Sort Terminal | x 60–73%, y 47–82% | isolated three-fin crystal crown on a grounded black base with violet reflection | primary `LOOK AT` / `USE` target opening L-02-01 |
| Causeway | x 0–65%, y 49–100% | continuous dry paving narrowing toward the steps | entry and inferred player approach |
| Suspended archive | x 41–60%, y 8–40% | monumental dark geometric frame above the island | distant landmark and optional observation, not the exercise trigger |
| Central steps | x 42–61%, y 39–55% | raised continuation of the causeway | onward-route cue after completion |

## Hotspot implementation target

- Begin visual QA with CSS percentage bounds `left: 59%`, `top: 47%`, `width: 15%`, `height: 36%` against the full clean plate.
- Tighten to the visible base-and-crown silhouette if the browser's rendered crop differs; do not include the causeway or suspended archive in the Terminal target.
- Maintain a minimum interactive target of 44 by 44 CSS pixels at supported viewport sizes. The focus indicator should follow a simple rectangular hit area without painting a permanent outline over the art.
- The existing broad central ruins hotspot (`left: 38%`, `top: 21%`, `width: 24%`, `height: 38%`) targets the suspended landmark and should not be reused for this physical node.

## Visual specification

- **Terminal silhouette:** chest-high water-worn stalk and base; three short asymmetric translucent fins fold around a small central core.
- **Family relationship:** the meadow's many-petaled crown becomes a compact three-fin crown; faceting and central-core grammar carry across, while scale, base, and weathering distinguish the archive variant.
- **Palette:** blue-black basalt, charcoal masonry, indigo sky, muted violet water, sparse lavender crystal light, restrained peach-silver horizon accents.
- **Lighting:** cool cosmic ambient light, faint wet-stone rim, single localized violet pool and reflection at the node.
- **Atmosphere:** fine basin mist kept below the landmark and away from the Terminal silhouette.
- **Scale cues:** causeway slab width, stair risers, chest-high base proportions, and contrast with the suspended structure.
- **Focal hierarchy:** causeway route and Terminal first at gameplay scan; suspended archive first at scenic scan; steps third.

## Continuity constraints

- Surface-canon boundary: this is a local interface and exercise access point only; its form does not define the larger system or explain the site.
- Must preserve: reflective flooded basin, leaning dark monoliths, monumental suspended archive, cosmic indigo/peach atmosphere, faceted painterly surfaces.
- Must avoid: conventional screens or keyboards, readable glyphs, floating Terminal, giant flower scale, duplicated meadow landmark, magic-altar framing, combat, characters, or multiple competing bright nodes.
- Neighboring visual link: [GM-01 Glass Meadow reference](../../Concept%20Art/Alien%20Meadow.png).

## Production record

- **Final prompt:** [Prompt HA-LS-002](../prompt-provenance-log.md#ha-ls-002)
- **Generator / mode:** OpenAI built-in image generation, reference-guided generation
- **Native dimensions:** `1672 x 941` PNG
- **Selection notes:** selected first result; grounded node, causeway approach, landmark separation, and three-fin family resemblance all read without annotation.
- **Validation:** clean plate contains no UI, text, watermark, characters, weapons, or plot revelation; all required navigation and interaction reads are present.

