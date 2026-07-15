# SC-03 — Civic Record District

## Identity

- **Scene ID:** `SC-03`
- **Rail Packet:** `RP-002 — Civic Record Encounter`
- **Player-facing survey name:** Civic Record District (human provisional label)
- **World / region:** World D / Volcanic Habitation Vault / City Beneath / first civic-record district
- **Production status:** Brief — A2 storyboard locked; no final art
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

- **Camera:** first-person side-on three-quarter district view; low cavern horizon near `y=76`; no tactical isometric view.
- **Adjacency:** the already-lit SC-02 bridge leaves its lower-right crop and enters this view as a lower-left structural tail at `x=0..126, y=286..359`. Direct cut and shared cycle phase preserve the sense of one route.
- **Primary landmark:** asymmetric near layered mass at `x=206..454, y=76..304`, wrapped around—not facing away from—a heat return.
- **Secondary systems:** heat-return/maintenance fan `x=28..198, y=148..326`; distant scale echo `x=474..622, y=96..258`; separate closed interlock `x=410..566, y=112..286` on the detail board.
- **Attention order:** near three-condition intersection -> heat/maintenance process -> distant echo -> closed interlock -> reversible bridge tail. The future-survey edge is quiet and never becomes a glowing exit.
- **Quiet space:** preserve native `x=232..408, y=304..359` and narrow `x=112..208, y=132..179` for focus clarity.

## Visual evidence grammar

- Fixed trace: shallow broken-relief groups with irregular interval clusters and one continuous substrate edge; no lines of glyphs or readable writing.
- Later stewardship: one continuous darker laminate crosses the old groups obliquely, steps around preserved edges, and shows a newer joint rhythm.
- Outlined gap: a double border encloses an unfilled interval over solid, same-value substrate. It is not dark depth, a door, socket, missing portrait, or aperture.
- Closed identity layer: nested sealed interlock without a light well, handle, human front, screen, or request path.
- Function: pre-existing trace/environment input -> separation and alignment with later repair -> exterior provenance distinctions retained at two architectural scales -> heat returned and couplings serviced without exposing the closed layer.
- Stewardship phases: charcoal foundation laminates; pale trace substrate and later extensions; darker violet/amber repair fabric and currently serviced couplings.
- Keep preservation, computation, environmental regulation, maintenance routing, and coupled functions plausible. `Civic record` and `public evidence custody` remain Pilot language.

## Interaction map

Coordinates are world-viewport rectangles. Narrow boards are purpose-authored at `320 x 180`; all targets are at least `44 x 44`.

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

## Concise asset brief

- Three clean native `640 x 360` world plates: overview (`00/30/40/50`), near layer detail (`10`), and scale-echo/closed-boundary detail (`20`).
- Three purpose-authored `320 x 180` derivatives with simplified clusters and the exact narrow targets above; never smooth-resample or enlarge them as final scenery.
- Three transparent animation families at both logical sizes: heat/condensation, maintenance traffic, and restrained coupling exchange. One monotonic clock runs through inspection, save, reload, and return.
- Reduced-motion stills retain heat-flow topology, one maintenance form beside the closed seam, and the far repetition. Motion never carries required evidence.
- World assets contain no human UI. Existing interface systems own labels, status, save feedback, unchanged `continuation`, and next-survey marking.
- Production uses square logical pixels, deliberate clusters, limited value ramps, stepped edges, restrained dithering, nearest-neighbor integer presentation inside `640 x 480`, and letterboxing between supported sizes.

## Readability and validation gate

- Grayscale distinction: fixed trace = broken shallow relief; stewardship = continuous crossing laminate; gap = double border over solid substrate; identity layer = nested sealed interlock.
- Focus order: orientation -> near mass -> fixed trace -> stewardship -> gap -> distant echo -> closed identity -> optional maintenance -> comparison/save -> return -> completed LOOK-only direction.
- World-only blink/byte comparison must find identical overview geometry at entry, completion, and saved return; animation clocks remain phase-continuous.
- Reject any protagonist, hand, body, shadow, reflection, portrait, ship, occupant, human trace, human UI, readable inscription, screen, doorway, tomb, archive shelves, success glow, opening seam, moved maintenance route, or changed heat/light.
- Copy stays inside A1 budgets and speaker ownership. Visuals do not make `civic record`, `public`, identity, gap purpose, or occupational function native fact.

## Locked and flexible

- **Locked:** direct SC-02 adjacency; board order; three base compositions; target rectangles; near/far three-condition relation; separate closed interlock; no world delta; no successor route; world/interface separation.
- **Flexible:** exact mass contour within bounds, impression rhythm, repair joints, maintenance anatomy/count, layer timing, and palette values within indigo/charcoal/muted violet with scarce amber/peach accents.

Production status remains **Brief**. This A2 pass creates no raster or production art.
