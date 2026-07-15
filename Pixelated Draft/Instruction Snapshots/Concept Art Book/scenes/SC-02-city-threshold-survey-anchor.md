# SC-02 — City Threshold Survey Anchor

## Identity

- **Scene ID:** `SC-02`
- **Rail Packet:** `RP-001 — City Threshold`
- **Player-facing survey name:** City Threshold
- **World / region:** World D / Volcanic Habitation Vault / City Beneath threshold
- **Production status:** Brief — A2 storyboard locked; no final art
- **Image:** No image selected. `Concept Art/Underground City.png` is historical mood-and-scale evidence only and must not be copied, downscaled, or used as production art.
- **Purpose:** Carry the first-person journey immediately beyond `THE CITY BENEATH / Prologue complete`, establish pre-existing civic operation without visible occupants, distinguish environmental access from identity-record access, and let the expedition record a reversible survey anchor without causing a city response.

## Exact board order

The first successful traversal is locked to `SC-02-00 -> SC-02-10 -> SC-02-20 -> SC-02-30 -> SC-02-40`. Detail boards may return to the most advanced overview without losing observations. `SC-02-50` is the saved return board.

| Order | Board | State class | Player-facing state | Composition and required read | Advance / exit |
|---:|---|---|---|---|---|
| 1 | `SC-02-00` | Entry + idle | Threshold arrival / idle overview | Wide first-person cavern view. Heat channels, bridge lights, steam exchange, and small maintenance forms are already mid-cycle on the first frame. No occupant, protagonist, ship, body, hand, shadow, or reflection appears. The rightward civic bridge is already lit but not yet an enabled route. | Inspect cycles; then `TRACE MAINTENANCE` to `SC-02-10` |
| 2 | `SC-02-10` | Changed observation | Maintenance-boundary detail | Closer oblique bridge view. Low nonhumanoid maintenance assemblies cross the span and stop at a material/coupling seam. A separate expedition-map division appears only in the human UI and is visibly offset from the stop seam. | `COMPARE BOUNDARIES` to `SC-02-20`; `RETURN TO THRESHOLD` to the overview |
| 3 | `SC-02-20` | Changed observation | Access distinction | One environmental coupling remains physically open to heat/air/material circulation while a separate identity-record aperture remains closed. The two systems have different silhouettes, routes, values, and states; neither reads as welcome or refusal. | Inspect both zones; `ESTABLISH SURVEY POINT` to `SC-02-30`; return remains available |
| 4 | `SC-02-30` | Changed expedition state | Anchor selection | Reuse the overview world plate and continuous animation phase. A human expedition overlay identifies a bounded local survey coordinate. No beam, pulse, city light, door, bridge, maintenance form, or record surface changes. | `RECORD LOCAL ANCHOR` to `SC-02-40`; cancel returns to the unchanged overview |
| 5 | `SC-02-40` | Completed | Anchored / completed overview | Same city geometry, values, open environmental coupling, closed identity-record aperture, and uninterrupted cycle timing as entry. Only expedition UI reports the saved anchor and enables the already-lit rightward bridge as a reversible route. | `ENTER CIVIC DISTRICT` exits to the successor packet |
| Return | `SC-02-50` | Return | Saved return overview | Same physical board as `SC-02-40`; no arrival replay or fresh activation. Working inspections are cleared, the anchor and route remain, and `continuation` is unchanged. | Review observations or re-enter the civic district |

## State deltas

| Transition | Expedition state delta | Physical city delta |
|---|---|---|
| credits -> `SC-02-00` | Preserve accepted prologue completion and chosen descent; set threshold visit only | None; all cycles were already operating |
| `SC-02-00` -> `SC-02-10` | Record maintenance-boundary observation | None |
| `SC-02-10` -> `SC-02-20` | Record that the observed stop seam differs from the Pilot map division | None |
| `SC-02-20` -> `SC-02-30` | Record separate environmental-access and identity-record observations | None |
| `SC-02-30` -> `SC-02-40` | Set `cityThresholdAnchorRecorded=true` and `civicDistrictRouteAvailable=true`; preserve `continuation` unchanged | **None.** Animation clocks do not restart; route lighting does not brighten; record access does not open |
| reload / later return -> `SC-02-50` | Restore anchor and route; clear temporary working inspection state | None |

## Functional landscape and composition

- **Camera:** first-person, side-on three-quarter overlook; high cavern horizon near `y=82`; no tactical isometric view. A stable incidental threshold lip occupies the lower edge without resembling a human platform, guardrail, road, or doorway.
- **Dominant landmark:** a coupled heat-exchange crown and branching civic distribution mass centered around `x=244..398, y=78..238`.
- **Route:** an already-lit bridge runs from the middle field toward the right crop. It remains visually secondary until the expedition route action is enabled.
- **Operating chain:** geothermal intake below the bridge -> laminated exchange ribs and vapor chambers -> light/heat/material distribution across bridge and dome families -> condensation and waste-return channels back toward the chasm.
- **Three scales:** palm-sized-looking maintenance assemblies at distance; bridge/district couplings at architectural scale; cavern-wide synchronized heat and atmosphere exchange.
- **Stewardship phases:** deep charcoal foundational fabric; later pale basalt/ceramic extensions with altered joint rhythm; current amber-violet replacement patches and sealed reroutes. Repairs are coordinated but not uniform.
- **Boundary evidence:** on `SC-02-10`, center the physical maintenance stop seam at `x=356, y=158..270` and the human expedition-map division at `x=433, y=132..280`. The `77 px` horizontal separation remains `39 px` in the purpose-authored narrow derivative (`x=177` versus `x=216`), exceeding the `47 px` / `23 px` minimums.
- **Access distinction:** on `SC-02-20`, the environmental coupling's continuous open throat occupies `x=142..226, y=164..276`; the identity-record aperture's nested closed interlock occupies `x=414..528, y=154..282`. Their different routes, silhouettes, and values must survive grayscale and reduced motion.
- **Failure/reroute evidence:** a sealed former exchange throat and a later replacement bypass sit beside a still-operating distribution route. Their joints belong to different stewardship phases and imply graceful rerouting without rubble or a fresh reaction.
- **Negative space:** keep `x=198..426, y=292..359` quiet enough for anchor focus and keep the lower-right route exit readable without an arrow, sign, glyph, or welcoming glow.

## Interaction zones

Coordinates are world-viewport rectangles. Narrow targets are purpose-authored for `320 x 180`, not smooth resamples. Every active target is at least `44 x 44`.

| Board / zone | `640 x 360` | `320 x 180` | Read / action |
|---|---|---|---|
| `00-CYCLES` | `x=36, y=154, w=158, h=140` | `x=10, y=64, w=82, h=64` | Observe pre-existing heat, steam, and light cycles |
| `00-BOUNDARY` | `x=218, y=176, w=186, h=124` | `x=107, y=74, w=98, h=64` | Follow maintenance movement |
| `00-ROUTE-PREVIEW` | `x=458, y=197, w=150, h=95` | `x=228, y=82, w=82, h=50` | See the already-lit route; LOOK only before completion |
| `10-STOP-SEAM` | `x=214, y=138, w=190, h=160` | `x=105, y=58, w=102, h=78` | Inspect forms stopping at the civic seam |
| `10-MAP-DIVISION` | `x=430, y=132, w=138, h=132` | `x=214, y=54, w=80, h=78` | Compare human map division with observed stop seam |
| `20-ENVIRONMENTAL` | `x=78, y=130, w=180, h=170` | `x=22, y=50, w=92, h=82` | Inspect open environmental circulation |
| `20-IDENTITY` | `x=382, y=126, w=180, h=174` | `x=206, y=50, w=92, h=82` | Inspect closed identity-bearing record boundary |
| `20-ANCHOR-NEXT` | `x=262, y=300, w=116, h=60` | `x=116, y=132, w=88, h=48` | Continue after both access observations |
| `30-ANCHOR` | `x=246, y=258, w=148, h=92` | `x=112, y=126, w=96, h=54` | Record the expedition-only local anchor |
| `DETAIL-RETURN` | `x=0, y=300, w=112, h=60` | `x=0, y=136, w=56, h=44` | Return to the unchanged overview |
| `40-FORWARD` / `50-FORWARD` | `x=492, y=296, w=148, h=64` | `x=248, y=136, w=72, h=44` | Enter the civic district after the anchor is saved |

## Required asset plan

- Author clean square-logical-pixel world assets at native `640 x 360` inside the `640 x 480` game. UI and expedition overlays remain separate.
- Required native world plates: one `640 x 360` overview base (`00/30/40/50`), one `640 x 360` bridge-boundary detail (`10`), and one `640 x 360` access-detail plate (`20`). Do not manufacture separate “activated” city art.
- Required narrow world plates: three purpose-authored `320 x 180` derivatives matching the same boards and exact narrow targets; simplify clusters without smooth resampling.
- Required animation layers: four transparent native layers and four purpose-authored narrow equivalents for the steady bridge-light sequence, vapor/condensation exchange, heat shimmer, and maintenance forms. Preserve a shared monotonic cycle clock across board changes and anchor recording.
- Required expedition overlays: separate native and narrow map-division, anchor-coordinate, saved-state, unchanged-`continuation`, and route-enabled states; none may be baked into Builder space.
- Maintenance loop: assemblies traverse an established route, stop at the physical seam, hold, and withdraw/re-route. They never orient toward the camera or react to the anchor.
- Anchor/completion feedback exists only in the expedition interface through text, focus order, and an enabled route action. No marker is painted into Builder space.
- The `320 x 180` narrow boards are never enlarged as final scenery.
- Present only at integer scale with nearest-neighbor behavior, square pixels, and letterboxing between supported sizes.
- Historical `Underground City.png` may inform immense layered depth and warm/cool contrast only. Its people, suits, rails, human platforms, familiar domes, baked UI, and layout are explicitly excluded.

## Accessibility and readability

- Pointer/keyboard order: cycles -> maintenance boundary -> environmental access -> identity-record access -> anchor -> forward route; return follows the current primary action.
- Motion is supplementary. Reduced-motion stills show one maintenance assembly held at the seam, continuous environmental through-flow geometry, and the separately closed record interlock.
- Every distinction uses silhouette, value, topology, and persistent human-interface text; no required cue depends only on amber/cyan hue, steam timing, or audio.
- Screen-reader ownership must distinguish `SCENE // SENSOR RECORD` observations from `SYSTEM // EXPEDITION STATE` anchor/route status.
- The first frame and completed frame must pass a world-only blink comparison for invariant city geometry and must not imply welcome, recognition, refusal, or activation.

## Continuity constraints

- **Must preserve:** accepted Witness Corridor/prologue completion; chosen descent; first-person framing; no protagonist or ship; no visible occupant; pre-existing city operation; unchanged `continuation`; reversible expedition-only progress.
- **Must avoid:** activation sweep, opening doors, new bridge lights, city-wide response, humanoid residents, enemies, conventional transit vehicles, human stairs/rails/consoles, readable Builder text, mission assignment, or identity acceptance.
- **Locked visual decisions:** exact board order; three unique base compositions; boundary/map mismatch; open environmental versus closed identity-record silhouettes; already-lit forward bridge; no physical delta after anchor.
- **Flexible decisions:** exact maintenance-form anatomy and count, loop timing, steam cadence, repair-patch shapes, and palette values within the indigo/charcoal/amber/violet doctrine.
- **Neighboring-scene links:** predecessor `SC-01 City Overlook` / accepted credits boundary; successor is the first bounded civic-record district packet.

## Validation gate

- Framing passes only if no protagonist, ship, body part, shadow, reflection, portrait, or visible Builder occupant appears.
- Continuity passes only if cycles are visibly mid-phase on entry and remain phase-continuous through completion/return.
- Readability passes if a reviewer can distinguish the maintenance stop seam from the Pilot-map division and environmental access from identity-record access in color, grayscale, and reduced motion.
- Feasibility passes with three `640 x 360` base plates, four restrained animation layers, separate UI overlays, and the exact native/narrow target map above.
- Production status remains **Brief**. This A2 pass creates no final art.
