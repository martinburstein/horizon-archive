# Pixel Metrics

All numbers are logical pixels unless explicitly labeled CSS pixels.

## Canvas

| Element | Locked metric | Evidence class |
|---|---:|---|
| Complete canvas | 640 x 480, square pixels | Observed fact / Horizon lock |
| World viewport | x=0, y=0, 640 x 360 | Horizon adaptation |
| Lower dialogue/status band | x=0, y=360, 640 x 120 | Horizon adaptation |
| Safe outer inset | 8 px | Horizon adaptation |
| Standard line/border | 1 px | Design inference |
| Emphasis border | 2 px, never fractional | Horizon adaptation |
| Minimum visual control | 18 x 18 | Horizon adaptation |
| Minimum pointer target | 22 x 22 logical at 2x, yielding 44 x 44 CSS | Accessibility adaptation |
| Calibration help footer | 640 x 19; 102 characters at 6 px advance + 20 px inset = 632 px | Horizon adaptation |
| Responsible AI Terminal inset | 8 px canonical; 4 px narrow | Implemented Horizon metric |
| Responsible AI field card | natural content height; never compressed below label + select + feedback | Horizon adaptation |
| Responsible AI field focus | 2 px internal outline, -3 px offset | Horizon adaptation |
| Model/deployment scenario density | 1 of 8 cards visible; 2 response fields per card | Implemented Horizon metric |
| Model/deployment field grouping | 2 columns canonical; 1 column narrow | Horizon adaptation |
| L-02-03 persistent role labels | 5: course boundary, layer motif, Pilot owner, System validator, 901 Teacher gate | Implemented Horizon metric |
| L-02-03 retained QA stages | 3 byte-distinct captures: primary, transfer remediation, closed note | Production QA metric |
| Structured Packets frames | primary 640 x 480; transfer 320 x 240; closed note 1600 x 900 containing 640 x 480 logical frame | Production QA metric |
| Structured Packets closed-note fields | 3: container path, nested access, JSON round trip | Implemented Horizon metric |
| Control Flow execution motif | 4 ordered reads: parameter, loop, condition/append, return | Implemented Horizon metric |
| Control Flow closed-note fields | 3: parameter input, loop and condition, return placement | Implemented Horizon metric |
| Client Bridge chain | 5 ordered layers: module, file, secret, request, response | Implemented Horizon metric |
| Client Bridge warning | 1 persistent semantic strip in every phase | Safety-critical Horizon metric |
| Text Analysis workload family | 4 primary reads: key phrases, entities, sentiment, summary | Implemented Horizon metric |
| Text Analysis closed-note fields | 4: requested output, capability, document ID, mixed result | Implemented Horizon metric |

Do not compose the final frame from a separately scaled 320 x 180 world and responsive HTML UI. Render the complete 640 x 480 logical surface, then scale that surface as one unit.

## Scaling

```text
integerScale = max(1, floor(min(hostWidth / 640, hostHeight / 480)))
displayWidth  = 640 * integerScale
displayHeight = 480 * integerScale
```

- Use `imageSmoothingEnabled=false` and `image-rendering: pixelated` plus `crisp-edges` fallback.
- Center in solid near-black letterboxing. Never stretch x and y independently.
- Desktop supported presentations: 640 x 480, 1280 x 960, 1920 x 1440.
- If host width is under 640 CSS px, use the narrow adaptation below; do not claim it is integer-scaled 640 x 480.

## Narrow adaptation

- Preserve the canonical canvas as the source of truth.
- At 320-639 CSS px, show a 320 x 240 authored alternate presentation built on a 2:1 reduction grid, not browser resampling. World becomes 320 x 180 and band becomes 320 x 60.
- Terminal work may expand vertically below the scene as an accessibility mode, but every pane uses whole CSS pixels and the scene remains fully visible.
- Targets remain at least 44 x 44 CSS; this may require transparent hit padding around a 12-24 px narrow visual.
- Never crop a prerequisite, exit, active character, selected hotspot, ROUTE OPEN state, or error recovery instruction.

## Cluster scale

| Use | Typical cluster | Maximum isolated detail |
|---|---:|---:|
| Star/particle/indicator | 1-3 px | 1 px permitted |
| Surface texture | 2-8 px | no isolated 1 px noise |
| Interactive prop feature | 3-12 px | 2 px minimum if persistent |
| Character facial cue | 2-5 px | 1 px glint only |
| Major shadow plane | 16-120 px | coherent mass |
| Landmark mass | 24-240 px | coherent mass |

## Measured reference estimates

These are bounded estimates from displayed reference media, not engine facts:

- **Measured estimate:** subtitle/action-label baseline is approximately y=448-474 in full-frame scenes (±8 px depending on capture/crop).
- **Measured estimate:** verb/action wheel is approximately 104-140 px across (±12 px), centered near the held cursor rather than fixed to a corner.
- Exploration character: commonly 90-155 px tall in a full 480 px frame (±16 px), with strong perspective scaling.
- Inventory modal: central majority of screen with world still visible around/behind it; exact bounds vary and are not copied.
- Animation presentation often holds drawings for multiple display refreshes; frame cadence feels authored rather than uniformly smooth.

Horizon intentionally uses smaller nominal sprites in the 360 px world because the lower 120 px remains persistent.

## Pixel QA samples

At 1x capture:

- No partially covered logical pixel.
- No alpha-fringe intermediate colors along silhouettes.
- No border thinner than 1 px or thicker than 2 px without structural purpose.
- No text glyph feature thinner than 1 px.
- Every status color has a shape, label, or motion partner.
- Calibration help is one untruncated line at 640 px and three complete lines in the 320 px alternate layout.
- Responsible AI uses one contained vertical form scroller. Its header, four complete field cards, validator, remediation, and next action remain in one reading order; no nested field-grid scrollbar is permitted.

## Offline Speech Workloads viewport contract

- Speech uses three fixed workspace rows: persistent offline/no-listening warning, persistent transcript-equivalent direction strip, then one contained scrolling form. The transcript strip must never share or overlap the scenario or closed-note header row.
- At 640 x 480, recognition `audio -> text`, synthesis `text -> audio`, spoken multimodal prompt flow, and result/cancellation remain readable in that order. At 320 x 240 the same information remains available by vertical traversal; no safety or direction text is removed.
- The outer Terminal and its title/file/status chrome remain fixed. Primary and transfer use two ordered decision/reason cards at canonical width and one ordered column at narrow width; closed note uses four columns at canonical width and one at narrow width.
