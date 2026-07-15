# SC-03 — Civic Record District

## Identity

- **Scene ID:** `SC-03`
- **Rail Packet:** `RP-002 — Civic Record Encounter`
- **Player-facing survey name:** Civic Record District (human provisional label)
- **World / region:** World D / Volcanic Habitation Vault / City Beneath / first civic-record district
- **Production status:** Brief — A2 photorealistic impact review locked; no final art
- **Image:** No image selected. `Concept Art/Underground City.png` is scale and warm/cool depth evidence only; its people, suits, rails, platforms, domes, buildings, baked UI, and composition are excluded.
- **Purpose:** Show an exposed three-condition relation—fixed trace, later stewardship, outlined gap—at near and distant scales while a separate identity-bearing interlock stays closed and the physical district never changes.

## Sequence and state lock

| Board | Class | Required world read | Advance / exit |
|---|---|---|---|
| `SC-03-00` | Entry + idle | Heat return and maintenance are already mid-cycle across low heat-facing layered masses; predecessor bridge tail enters lower left | Near mass -> `10`; distant echo optional; threshold return available |
| `SC-03-10` | Changed observation | Near fixed trace, later crossing repair fabric, and bordered absence are structurally distinct | Inspect all three in any order -> `COMPARE SCALE`; return to overview |
| `SC-03-20` | Changed observation | Far mass repeats the relation; maintenance services environmental couplings and bypasses a separately closed interlock | Inspect far echo + closed interlock -> `OPEN LOCAL COMPARISON`; maintenance optional |
| `SC-03-30` | Changed expedition state | Reuse overview and continuous clock; comparison/save controls remain in the separate human interface band | Save bounded comparison -> `40`; cancel to overview |
| `SC-03-40` | Completed | World is identical to entry; separate UI confirms save, clears working notes, and marks—but does not open—a next-survey direction | Return to City Threshold; neighboring surface remains LOOK-only |
| `SC-03-50` | Saved return | Restore the same completed overview without arrival replay or restarted clocks | Review saved comparison or return to City Threshold |

Every transition preserves `continuation`, `city_state_delta=None`, `cityThresholdAnchorRecorded=true`, and `civicDistrictRouteAvailable=true`. Entry, completion, and return use invariant world geometry. Nothing opens, brightens, reroutes, or acknowledges completion.

## Composition and attention

- **Camera:** first-person side-on three-quarter district view; moderate `28–32 mm` full-frame-equivalent overview lens, rectilinear structure, and low cavern horizon near layout `y=76`; no tactical isometric view or extreme wide-angle distortion. `10` uses a `45–55 mm` oblique raking detail; `20` uses `35–45 mm` with enough depth of field to hold the echo, coupling, and interlock together.
- **Adjacency:** the already-lit SC-02 bridge leaves its lower-right crop and enters this view as a lower-left structural tail at `x=0..126, y=286..359`. Direct cut and shared cycle phase preserve the sense of one route.
- **Primary landmark:** asymmetric near layered mass at `x=206..454, y=76..304`, wrapped around—not facing away from—a heat return.
- **Secondary systems:** heat-return/maintenance fan `x=28..198, y=148..326`; distant scale echo `x=474..622, y=96..258`; separate closed interlock `x=410..566, y=112..286` on the detail board.
- **Attention order:** near three-condition intersection -> heat/maintenance process -> distant echo -> closed interlock -> reversible bridge tail. The future-survey edge is quiet and never becomes a glowing exit.
- **Quiet space:** preserve desktop layout `x=232..408, y=304..359` and narrow layout `x=112..208, y=132..179` as low-contrast, low-frequency calm regions. Photographic microdetail may remain only when it does not create a false hotspot.

## Visual evidence grammar

- Fixed trace: shallow broken-relief groups belong to one continuous aged technical substrate. Mineral residue, abrasion, rounded edges, shallow fractures, and raking-light contact shadows establish age; no line resolves into glyphs or readable writing.
- Later stewardship: one compatible but visibly newer laminate crosses the old groups obliquely. Prepared keyways, changed roughness, thermal-stain boundaries, contact shadow, and a newer joint rhythm prove relative chronology while the layer steps around preserved edges.
- Outlined gap: a double border encloses an unfilled interval over the same solid substrate. Dust, condensate, grain, reflected light, and heat stain continue across the interior plane, preventing a read as dark depth, door, socket, missing portrait, or aperture.
- Closed identity layer: nested sealed interlock shows compression, pore treatment, contact wear, and thermal isolation without a light well, handle, human front, screen, or request path.
- Function: pre-existing trace/environment input -> separation and alignment with later repair -> exterior provenance distinctions retained at two architectural scales -> heat returned and couplings serviced without exposing the closed layer.
- Stewardship phases: charcoal foundation laminates; pale trace substrate and later extensions; darker violet/amber repair fabric and currently serviced couplings.
- Keep preservation, computation, environmental regulation, maintenance routing, and coupled functions plausible. `Civic record` and `public evidence custody` remain Pilot language.
- Lighting: geothermal return is the dominant motivated warm source; cooler cavern bounce and restrained practical emission reveal form without generic teal-orange grading. Reflections, contact shadows, condensation, vapor, and heat distortion follow the visible route. Fog, bloom, darkness, shallow focus, and grading never hide required evidence.
- Scale echo: the far mass belongs to the same causal family but varies proportion, wear, repair era, and coupling context. Exact clones, mirrored repetitions, or generated decorative motifs fail the scene.

## Interaction map

Coordinates are interaction-layout rectangles, not art-production resolutions. High-resolution plates map into both layouts; all targets are at least `44 x 44` in the authored coordinate space.

| Zone | `640 x 360` | `320 x 180` |
|---|---|---|
| `00-ORIENTATION` | `32,150,170,142` | `8,62,88,68` |
| `00-NEAR-MASS` | `218,118,226,184` | `104,44,116,90` |
| `00-DISTANT-ECHO` | `470,120,150,164` | `232,46,80,82` |
| `10-FIXED-TRACE` | `70,128,150,150` | `8,50,84,74` |
| `10-STEWARDSHIP` | `244,108,170,178` | `108,42,94,84` |
| `10-OUTLINED-GAP` | `438,126,130,152` | `220,50,72,74` |
| `10-SCALE-NEXT` | `264,300,112,60` | `116,132,88,48` |
| `20-DISTANT-ECHO` | `48,100,174,178` | `8,40,92,84` |
| `20-MAINTENANCE` | `238,164,150,120` | `112,76,84,54` |
| `20-CLOSED-IDENTITY` | `410,104,176,184` | `216,42,90,86` |
| `20-COMPARISON-NEXT` | `264,300,112,60` | `116,132,88,48` |
| `ALL-THRESHOLD-RETURN` | `0,300,112,60` | `0,136,56,44` |
| `40/50-NEXT-SURVEY-LOOK` | `500,122,120,166` | `250,48,70,82` |

The comparison and save controls belong to the compact interface below the world. No interface, label, cursor, map line, icon, or text is painted or projected into Builder space.

## Human interface ownership-copy fit

- A2 impact verdict: `PASS`. The Custody Ledger runtime copy changes no plate, crop, camera, target rectangle, board order, state, material, lighting, registered effect, or city causality.
- Desktop uses the existing `640 x 120` band below the `640 x 360` world. One active message at a time is grouped as visible text owner -> message -> related explanation/action, with a two-line message region and a `44 px` minimum action row.
- The exact `320 x 240` derivative keeps the `320 x 180` world unobscured. Its interface starts below the world and may extend in scrollable document flow so owner, complete message, and `44 px` action remain readable; it may not overlay the plate, clip negative-authority clauses, shrink text, or turn feedback into a world cue.
- Every owner prefix is literal text and every message remains understandable without color. Semantic wrapping preserves `no local request`, `cannot claim access`, Pilot-owned provisional labeling, closed-record status, preview no-credit meaning, and unchanged `continuation`.
- Save, restore, failure, cancel, prerequisite, and Demo Tour messages use the human status region only. No copy is baked, projected, reflected, or implied on Builder matter, and no world light, seam, maintenance path, heat route, or animation responds to it.

## Concise asset brief

- Three lossless photorealistic 16:9 masters: registered overview (`00/30/40/50`), near-layer detail (`10`), and scale-echo/closed-boundary detail (`20`). Retain the largest clean sources; prefer `3840 x 2160` or larger when supported, with `1920 x 1080` as the minimum master.
- Complete all eight premium-production passes before approval: varied visual territories, composition selection, functional development, material/lighting development, full-size artifact cleanup, gameplay-fit review, registered state/animation production, and provenance delivery.
- Deliver high-quality desktop and narrow derivatives/crops that preserve every locked target and calm region. If resampling weakens a required read, create a separate high-resolution art-directed derivative from the same approved composition—never a pixelated, stretched, or detail-fabricated fallback.
- Three registered high-resolution effect families with explicit masks/depth support: heat/condensation, nonhumanoid maintenance traffic with coherent contact shadows/reflections, and restrained coupling exchange/local spill. One monotonic clock runs through inspection, save, reload, and return.
- Reduced-motion stills retain heat-flow topology, one maintenance form beside—not entering—the closed seam, and the meaningful far repetition. Motion never carries required evidence.
- Review package: grayscale/thumbnail sheets, desktop/narrow gameplay crops, full-size trace/stewardship/gap/interlock crops, registered overview difference masks, and artifact checks for pseudo-writing, faces, clones, melted joints, floating fragments, and incoherent lighting/reflections.
- World assets contain no human UI. Existing interface systems own labels, status, save feedback, unchanged `continuation`, and next-survey marking. Preserve prompts, model/tool, source references, selection rationale, edits, masks, crops, dates, and approvals.

## Readability and validation gate

- Grayscale distinction: fixed trace = broken shallow relief; stewardship = continuous crossing laminate; gap = double border over solid substrate; identity layer = nested sealed interlock.
- Focus order: orientation -> near mass -> fixed trace -> stewardship -> gap -> distant echo -> closed identity -> optional maintenance -> comparison/save -> return -> completed LOOK-only direction.
- Entry, completion, and saved return use the same approved overview master, crop, exposure, material state, lighting causes, and effect masks. Registered-frame difference review may show only permitted time-sampled operational layers; clocks remain phase-continuous.
- Reject any protagonist, hand, body, shadow, reflection, portrait, ship, occupant, human trace, human UI, readable inscription, screen, doorway, tomb, archive shelves, success glow, opening seam, moved maintenance route, or changed heat/light.
- Copy stays inside A1 budgets and speaker ownership. Visuals do not make `civic record`, `public`, identity, gap purpose, or occupational function native fact.

## Locked and flexible

- **Locked:** direct SC-02 adjacency; board order; three base compositions; target rectangles; near/far three-condition relation; separate closed interlock; no world delta; no successor route; world/interface separation.
- **Flexible:** exact mass contour within bounds, impression rhythm, compatible material families, repair joints, maintenance anatomy/count, effect timing, and restrained cinematic grade. City Beneath color continuity comes from motivated geothermal light, cavern bounce, and material response rather than a preset color recipe or generic neon.

## Photorealistic impact validation

- `PASS`: A1 age evidence, relative chronology, retained solid absence, separate closed boundary, causal operation, three stewardship eras, meaningful scale variation, state invariance, and artifact safety now have buildable photographic requirements.
- `PASS`: board order, interaction rectangles, entry/exit state, ownership, copy, canon, first-person framing, no-protagonist/no-ship rule, and zero-city-response causality are unchanged.
- `PASS`: the premium production package can be built from three high-resolution masters, responsive derivatives, registered effects, reduced-motion stills, evidence crops, difference masks, and provenance without Storyboarder creating final raster art.

Production status remains **Brief**. This impact review creates no raster or production art.
