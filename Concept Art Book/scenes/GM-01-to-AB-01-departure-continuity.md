# GM-01 to AB-01 Departure Continuity

## Production boundary

This is the implementation map for the completed Glass Meadow departure and Drowned Archive arrival. It introduces no interstitial scene, overlay art, glow, smooth panel, protagonist, companion, ship, protected adventure-game motif, or story revelation.

- **Meadow base:** preserve the approved first-person [Glass Meadow Example.png](../../Glass%20Meadow%20Example.png) unchanged as the dominant world painting.
- **Meadow reward:** preserve the project-rendered completed three-fin marker over that painting. It is the only added world-state art.
- **Destination base:** use the existing original [AB-01 production plate](../production-pixel/AB-01/ab01-available-640x360.png) and its existing Terminal state assets.
- **Frame:** `640 x 480` complete canvas, with world rows `0-359` and interface rows `360-479`. The authored narrow derivative is `320 x 240`, with world rows `0-179` and interface rows `180-239`.

## Exact world-state and navigation map

| Element | Canonical `640 x 360` world | Authored `320 x 180` derivative | Contract |
|---|---:|---:|---|
| Completed Meadow marker painted bounds | `x=494..566, y=146..300` | `x=247..283, y=73..150` | Three transparent cultivated-glass fins, earned crown, restrained reflection clusters, warm mat pickup, and flush dark contact remain visible until explicit departure. |
| Completed Meadow route hotspot | `x=493, y=192, w=138, h=167` | `x=246.5, y=96, w=69, h=83.5` | Keeps the completed marker inspectable. Departure remains in the lower interface, never over the painting. |
| Meadow departure direction | right edge, `x=632..639, y=228..359` | `x=316..319, y=114..179` | Completed groove and local low-growth state point right without arrow, path, label, or animated beam. This is continuity, not a hotspot. |
| AB-01 visual entry ridge | `x=0..112, y=252..359` | `x=0..64, y=126..179` | Lower-left dry phase ridge receives the rightward departure. Irregular segments and water boundary imply incidental stability, not a human causeway. |
| AB-01 primary arrival hotspot | `x=156, y=205, w=68, h=76` | current narrow `x=64, y=97, w=77, h=77` | Focus lands on the grounded Workload Sort contact after the chapter announcement. Landmark and return edge remain secondary. |
| Reserved safe-return anchor | `x=0, y=252, w=112, h=108` | `x=0, y=126, w=48, h=54` | If backtracking is enabled, bind it to the same ridge and a lower-interface action. Paint no exit icon or new structure. |

Canonical AB arrival and return zones remain 44 pixels apart; narrow arrival and return zones remain 16 pixels apart. All actionable targets exceed `44 x 44` in their intended presentation.

## Departure, arrival, and recovery sequence

1. **Earned hold:** route mastery raises the completed marker. Do not auto-advance, dim the world, cover the marker with a summary card, or replace it with a generic success lamp. The reward stays visible while the compact lower-band summary is read.
2. **Optional work remains optional:** calibration leaves the completed world state intact. Exiting or missing it returns safely to the same completed Meadow; departure remains available.
3. **Explicit departure:** only the lower-band `Depart: Drowned Archive` action changes location. Replace the world plate directly inside the existing canvas; add no fade layer, portal, travel animation, spinner, smooth panel, or CSS scenery.
4. **Destination orientation:** AB-01 appears with its lower-left ridge as arrival side. Announce chapter/location, then focus the grounded Terminal at the canonical or narrow mapping above.
5. **Reload safety:** reloading after departure restores AB-01 and primary-hotspot focus. It does not replay departure, reset route mastery, or demote the Meadow marker.
6. **Backtracking safety:** when return is implemented, use the reserved ridge anchor and restore GM-01 with the marker completed. Focus the completed marker or departure action, never the locked first-contact state. Return cannot erase calibration evidence or close the route.

## Visual continuity

- **Direction without animation:** Meadow completion resolves right; AB-01 receives lower left. Screen direction supplies continuity without a road or tunnel.
- **Material:** trained glass and black/amber growth mats give way to wet three-fin glass, blue-black ridge material, and reflective water. Family resemblance survives while coupling and weathering change.
- **Light:** the marker's small warm floor pickup rhymes with AB-01's restrained peach-silver horizon. The destination is cooler and darker; no traveling glow crosses the cut.
- **Scale:** the marker remains a local crop component. AB-01 expands scale through low ridge, water plane, repeated field elements, and distant Tidal Lens while retaining a discoverable local contact.
- **Function:** Meadow shows cultivated component growth and routing; AB-01 shows phase/water/atmosphere coupling. Repeated triplets imply related practice without declaring purpose.
- **Viewpoint/canon:** Meadow retains its ruler-straight flat horizon, edge-to-edge crop, and nonhuman functional growth-mat landscape. Both plates remain first-person and exclude protagonist, companion, ship, human retrofit, labels, glyphs, and spoiler-bearing explanations.

## Accessibility and test handoff

- Keep the completed marker exposed to pointer and keyboard inspection until departure.
- Departure, calibration, and later return are named interface actions with visible focus; the painting carries no baked interaction text.
- Announce location change once, politely. Do not announce a travel effect that is not visible.
- Test completion -> calibration -> safe exit -> departure -> AB focus -> reload. When backtracking is added, test AB return -> completed Meadow restoration -> reload both ways.
- At `320 x 240`, keep actions inside the interface width and use explicit narrow AB coordinates rather than mechanically halving the canonical target.
- Direct scene replacement satisfies reduced motion; no substitute animation is required.
