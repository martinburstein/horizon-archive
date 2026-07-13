# WC-01 — Witness Corridor Evidence Terminal

## Identity

- **Scene ID:** WC-01
- **Player-facing survey name:** Witness Corridor
- **World / region:** World C / Witness Complex
- **Production status:** Interaction-integrated; alien-function art replacement required
- **Image:** [witness-corridor-evidence-terminal-v1.png](../images/witness-corridor-evidence-terminal-v1.png)
- **Original environment reference:** [Fallen Automoton.png](../../Concept%20Art/Fallen%20Automoton.png)
- **Purpose:** Give the Evidence Packet a distinct local contact while reframing the “corridor” as part of a nonhuman occupation involving articulated systems, channel correlation, maintenance, and environmental exchange without confirming one interpretation.

## Alien functionality and first-contact brief

- **Landscape system:** mounting fields, damp channels, atmospheric exchange, distributed contact apertures, articulated machine, empty couplings, and distant route must show input, transformation, handoff, byproduct/failure, and repair relationships.
- **Nested scales:** local contact apertures and repair seams; chamber-wide mounting/channel network; complex-scale atmosphere, continuity, or material exchange.
- **Nonhuman affordances:** no hallway, front-facing inspection desk, waist-high kiosk, human door cadence, bilateral control row, or eye-level screen. Couplings address several heights, depths, orientations, and sensory channels.
- **Discoverable clues:** repeat aperture triads across contact and wall fields; contrast occupied/empty/damaged mounts; show one channel state propagate separately through local contact, articulated machine, and distant chamber element.
- **Plausible first readings:** repair, calibration, record correlation, material transfer, or continuity handling remain compatible. “Witness Corridor” and “automaton” are provisional human survey terms, not confirmed Builder occupation or object class.
- **First contact:** the player occupies an incidental clear volume; no human path, retrofit, wear, sign, rail, furniture, body, companion, or ship appears.

## Navigation

- **Entry:** an incidental stable gap in the mounting/channel field reaches the lower-left edge.
- **Onward route:** path passes behind the Terminal and recedes into violet mist at upper-left.
- **Walkable plane:** lower-left and center paving remain open; the Terminal occupies a small apron beside, not inside, the route.
- **Camera:** intimate first-person three-quarter chamber view with exaggerated depth; the space must not read as a hallway built around human bodies.

## Interaction zones

| Zone | Approximate source area | Read | Intended interaction |
|---|---|---|---|
| Evidence contact | essential silhouette x 32–44%, y 45–76%; state spill begins near x 31% | distributed three-aperture coupling with no front, screen, row, or human operating position | primary `LOOK AT` / `USE` target opening the Evidence Packet through expedition translation layer |
| Fallen automaton | x 49–88%, y 18–78% | collapsed multi-axis articulated system with a restrained violet lens; “automaton” is a provisional survey analogy | narrative observation / conversation target; never part of contact hit area |
| Corridor route | x 0–49%, y 43–100% | damp paving narrowing toward upper-left mist | scene entry and depth cue |

## Contact anatomy

- Three short translucent fins fold around a dim core, preserving the established Terminal-family crown.
- A non-reflective phase surface is one side of a multi-oriented coupling, not an inspection screen angled toward the player.
- Exactly three non-text channel apertures occupy different depths/orientations: restrained violet faceted lens, cool-blue ripple aperture, and muted amber pulse prism. Their repeated relationships elsewhere teach the triad without a human control row.
- The base is water-worn stone and oxidized metal rooted through floor slabs. It is not attached to the automaton.

## Hotspot and crop implementation target

- **Desktop initial bounds:** `left: 30%`, `top: 43%`, `width: 15%`, `height: 32%` against the full clean plate. Keep the bottom at or above the desktop scene's approximate 74% source-image crop.
- **Narrow initial bounds:** because the centered 320–375px crop shows roughly source x 30–70%, begin with `left: 0%`, `top: 43%`, `width: 37%`, `height: 35%`; adjust from a browser capture so focus contains the complete visible node without entering the automaton.
- At the 320px minimum width the narrow target is approximately 118px wide, comfortably exceeding the 44 by 44 CSS-pixel minimum.
- Keep at least 3% source-width visual separation between the Terminal's right edge and the automaton's left silhouette. Do not combine targets.
- Desktop crop retains the crown, inspection surface, indicators, and nearly all of the base; the 320px centered crop begins near source x 31.8%, retaining the complete essential Terminal silhouette and the automaton's head/shoulder context while trimming only peripheral light spill.

### Implemented crop and targets

- Desktop uses `object-position: center 15%`. Terminal bounds are `31.5%, 54%, 13%, 45%`; automaton bounds are `49%, 18%, 39%, 81%`.
- Up to `760px`, the crop uses `center top`. Terminal bounds are `0%, 44%, 35%, 34%`; automaton bounds are `47%, 18%, 53%, 61%`.
- Both viewport targets map to their documented source zones under `object-fit: cover`, exceed 44 by 44 CSS pixels at 320px, remain separated, and use independent native buttons.
- The Terminal hover/focus label is narrow-edge anchored so its visible text remains within the 320px scene frame.

## Visual specification

- **Palette:** blue-black masonry, charcoal shadow, weathered umber metal, muted lavender, cool slate blue, tiny amber accent, pale crystal white.
- **Lighting:** violet atmospheric exchange from upper-left, restrained cool response on the articulated system, and three compact channel states whose reflected paths visibly connect to damp routing or repeated apertures rather than decorative ground glow.
- **Atmosphere:** thin corridor mist behind the subjects, never crossing either silhouette.
- **Scale cues:** mounting-cell families, repair seam periods, channel spans, articulated-machine joints, and chamber courses; no Builder feature uses human waist, seat, stair, door, or hand scale as its default.
- **Focal hierarchy:** automaton first at scenic scan; Terminal first at interaction scan; receding corridor third.
- **Traversability:** the path remains broad on the Terminal's left and visually continues behind it.

## Continuity constraints

- Surface-canon boundary: the node is a local evidence-inspection interface only; its three indicators do not define the larger system or answer the central mystery.
- Must preserve: collapsed articulated system on the right, violet-lens accent, intimate mounting-field enclosure, oblique damp channel gap, process-linked cultivated glass or mineral deposits, and quiet painterly melancholy.
- Must avoid: human hallway, door, stairs, rail, furniture, waist-high kiosk, front-facing inspection screen, bilateral indicator row, attaching the contact to the automaton, merging hit areas, readable symbols, projected UI, definitive human occupation labels, random surrealism, active combat, human retrofit, or additional figures.
- Terminal-family links: [GM-01 meadow reference](../../Concept%20Art/Alien%20Meadow.png) and [AB-01 grounded ruins node](../images/drowned-archive-workload-terminal-v1.png).

## Production record

- **Final prompt set:** [Prompt HA-LS-003](../prompt-provenance-log.md#ha-ls-003)
- **Generator / mode:** OpenAI built-in image generation, reference-guided generation plus one targeted placement edit
- **Native dimensions:** `1672 x 941` PNG
- **Selection notes:** the first candidate established the correct anatomy but failed the narrow-crop gate; the selected edit moved the node into the centered safe band without changing its design or the automaton.
- **Historical/technical validation:** clean plate and browser integration pass target separation, keyboard, responsive, alt-text, and mastery-to-credits checks. The current art predates the alien-function gate and is not production-approved until it shows three operating scales, nonhuman affordances, repeated/state/cause-effect clues, visible environmental process, two plausible readings, and no human ergonomic defaults.
