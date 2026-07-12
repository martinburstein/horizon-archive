# Reference Matrix

Research date: 2026-07-12. Additional sources stopped changing the core conclusions after coverage included bright and dark exteriors, interiors, conversation, inventory, action selection, travel/map views, animation, transitions, and the cutscene/gameplay boundary.

| ID | Source and coverage | Kind | What it supports | Confidence / limit |
|---|---|---|---|---|
| R1 | [Steam store page and trailer](https://store.steampowered.com/app/730820/The_Curse_of_Monkey_Island/) — official trailer, full published segment (approximately 0:00-end); store stills across outdoor, interior, dialogue, and action scenes | Official media | Native-era presentation, full-screen scene priority, line/color character | High for appearance; trailer timestamps may change if Valve replaces media |
| R2 | [ScummVM graphics backend API](https://doxygen.scummvm.org/d8/d8f/class_modular_graphics_backend.html#abcbd94c400b234e907e2c0f096d822d6) — `initSize`, lines 541-555 in retrieved page | Technical primary | 640 x 480 is a typical native client resolution for Curse; distinguishes logical from display resolution | High, observed fact |
| R3 | [ScummVM graphics settings](https://docs.scummvm.org/en/latest/advanced_topics/understand_graphics.html) — pixel-perfect scaling, nearest neighbor, letterboxing sections | Technical primary | Integer scaling, black bars, filter behavior | High, observed fact |
| R4 | [ScummVM touch controls](https://docs.scummvm.org/en/latest/other_platforms/ios.html#touch-controls) — press-and-hold action-wheel example | Technical primary | Hold, drag, and release interaction model for the action wheel | High, observed fact |
| R5 | [MobyGames screenshot index](https://www.mobygames.com/game/547/the-curse-of-monkey-island/screenshots/) — gallery-wide coverage: town, jungle, restaurant, graveyard, hotel, lighthouse, maps, inventory, action coin, dialogue choice, item use, animation, finale | Public reference gallery | Cross-scene comparison, UI modes, palette families, occupancy | Medium-high; measurements are estimates from displayed captures |
| R6 | [SteamDB store screenshot/trailer metadata](https://steamdb.info/app/730820/screenshots/) — store media listing and official screenshot/trailer asset metadata | Store metadata mirror | Confirms official media set and SCUMMVM packaging | Medium-high; not a Valve site |
| R7 | [World of Longplays listing via GameFAQs](https://gamefaqs.gamespot.com/pc/29083-the-curse-of-monkey-island/videos/140215) — complete playthrough listing, beginning-to-end coverage | Public gameplay capture index | Coverage check for gameplay/cutscene continuity and late-game environments | Medium; embedded video was not random-accessible in the current browser, so no frame-precise claims derive from it |
| R8 | [Gamer Walkthroughs video walkthrough](https://gamerwalkthroughs.com/the-curse-of-monkey-island/) — chapter-by-chapter coverage from opening through final chapter; control description | Public gameplay walkthrough | Interaction loop, inventory, action selection, transitions, puzzle feedback | Medium; editorial secondary source |
| R9 | [GameFAQs controls/inventory guide](https://gamefaqs.gamespot.com/pc/29083-the-curse-of-monkey-island/faqs/44905) — controls, cursor states, verb semantics, inventory paging, cutscene skip | Contemporary-style written reference | Semantic behavior of cursor/action/inventory, escape boundary | Medium; user-authored but detailed and cross-confirmed |
| R10 | [LucasArts Archives Vol. III user guide](https://www.mocagh.org/lucasfilm/lucasartsarchives3-manual.pdf) — indexed as a Curse demo control guide and original operating-context artifact | Scanned period manual | Period source lead for later confirmation | Low in this pass: the PDF link resolved but the web reader could not parse it; no production metric depends on it |

## Coverage ledger

The reference pass deliberately sampled these modes rather than one photogenic scene:

- Bright exterior / town: R1, R5, R7, R8.
- Dark exterior / graveyard and night locations: R5, R7, R8.
- Enclosed interior / ship, restaurant, hotel: R1, R5, R7, R8.
- Dialogue and choice lists: R5, R7, R8.
- Object hover, cursor state, and action wheel: R4, R5, R8, R9.
- Inventory open, item selection, and item-on-world use: R5, R8, R9.
- Character locomotion, idles, gestures, and bespoke actions: R1, R5, R7, R8.
- Scene exits, maps, and travel transitions: R5, R7, R8.
- Cutscene to gameplay continuity and skip boundary: R1, R7, R8, R9.

## Saturation conclusion

Later sources repeated the same stable findings: 640 x 480 logical presentation; scene-first full-frame composition; large expressive silhouettes; limited contextual actions; modal inventory; lower-edge interaction text/subtitles; and hard, authored transitions. Further footage could refine individual frame counts but would not change the production system. Exact proprietary palette indices, sprite frame tables, and font metrics remain intentionally unclaimed.
