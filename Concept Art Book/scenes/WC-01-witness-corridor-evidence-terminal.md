# WC-01 — Witness Corridor Evidence Terminal

## Identity

- **Scene ID:** WC-01
- **Player-facing survey name:** Witness Corridor
- **World / region:** World C / Witness Complex
- **Production status:** Selected concept target; not integrated
- **Image:** [witness-corridor-evidence-terminal-v1.png](../images/witness-corridor-evidence-terminal-v1.png)
- **Original environment reference:** [Fallen Automoton.png](../../Concept%20Art/Fallen%20Automoton.png)
- **Purpose:** Give the final Evidence Packet exercise a dedicated grounded Terminal while keeping the fallen automaton as the scene's narrative focal object.

## Navigation

- **Entry:** broad damp floor from the lower-left edge.
- **Onward route:** path passes behind the Terminal and recedes into violet mist at upper-left.
- **Walkable plane:** lower-left and center paving remain open; the Terminal occupies a small apron beside, not inside, the route.
- **Camera:** intimate side-on three-quarter corridor view with slightly exaggerated depth.

## Interaction zones

| Zone | Approximate source area | Read | Intended interaction |
|---|---|---|---|
| Evidence Terminal | essential silhouette x 32–44%, y 45–76%; light spill begins near x 31% | grounded three-fin crown, blank inspection surface, three channel lights, dark base | primary `LOOK AT` / `USE` target opening the Evidence Packet workspace |
| Fallen automaton | x 49–88%, y 18–78% | large seated articulated silhouette with a restrained violet lens | narrative observation / conversation target; never part of Terminal hit area |
| Corridor route | x 0–49%, y 43–100% | damp paving narrowing toward upper-left mist | scene entry and depth cue |

## Terminal anatomy

- Three short translucent fins fold around a dim core, preserving the established Terminal-family crown.
- A shallow blank black-glass inspection surface angles toward the player.
- Exactly three non-text modality indicators sit below it: restrained violet faceted lens, cool-blue ripple aperture, muted amber pulse prism.
- The base is water-worn stone and oxidized metal rooted through floor slabs. It is not attached to the automaton.

## Hotspot and crop implementation target

- **Desktop initial bounds:** `left: 30%`, `top: 43%`, `width: 15%`, `height: 32%` against the full clean plate. Keep the bottom at or above the desktop scene's approximate 74% source-image crop.
- **Narrow initial bounds:** because the centered 320–375px crop shows roughly source x 30–70%, begin with `left: 0%`, `top: 43%`, `width: 37%`, `height: 35%`; adjust from a browser capture so focus contains the complete visible node without entering the automaton.
- At the 320px minimum width the narrow target is approximately 118px wide, comfortably exceeding the 44 by 44 CSS-pixel minimum.
- Keep at least 3% source-width visual separation between the Terminal's right edge and the automaton's left silhouette. Do not combine targets.
- Desktop crop retains the crown, inspection surface, indicators, and nearly all of the base; the 320px centered crop begins near source x 31.8%, retaining the complete essential Terminal silhouette and the automaton's head/shoulder context while trimming only peripheral light spill.

## Visual specification

- **Palette:** blue-black masonry, charcoal shadow, weathered umber metal, muted lavender, cool slate blue, tiny amber accent, pale crystal white.
- **Lighting:** violet mist from upper-left, restrained cool rim on the automaton, compact violet/blue/amber node accents, narrow violet ground reflection.
- **Atmosphere:** thin corridor mist behind the subjects, never crossing either silhouette.
- **Scale cues:** floor slabs, waist-high node proportions, seated automaton anatomy, wall-block courses.
- **Focal hierarchy:** automaton first at scenic scan; Terminal first at interaction scan; receding corridor third.
- **Traversability:** the path remains broad on the Terminal's left and visually continues behind it.

## Continuity constraints

- Surface-canon boundary: the node is a local evidence-inspection interface only; its three indicators do not define the larger system or answer the central mystery.
- Must preserve: slumped automaton on the right, violet-lens accent, angular intimate masonry, oblique damp route, crystalline crack flora, quiet painterly melancholy.
- Must avoid: attaching the Terminal to the automaton, merging their hit areas, conventional laptop/kiosk form, readable symbols, projected UI, active combat, or additional figures.
- Terminal-family links: [GM-01 meadow reference](../../Concept%20Art/Alien%20Meadow.png) and [AB-01 grounded ruins node](../images/drowned-archive-workload-terminal-v1.png).

## Production record

- **Final prompt set:** [Prompt HA-LS-003](../prompt-provenance-log.md#ha-ls-003)
- **Generator / mode:** OpenAI built-in image generation, reference-guided generation plus one targeted placement edit
- **Native dimensions:** `1672 x 941` PNG
- **Selection notes:** the first candidate established the correct anatomy but failed the narrow-crop gate; the selected edit moved the node into the centered safe band without changing its design or the automaton.
- **Validation:** clean plate contains no UI, text, watermark, extra characters, weapons, or plot revelation; three indicators, inspection surface, separate silhouettes, route, and responsive crop requirements are present.
