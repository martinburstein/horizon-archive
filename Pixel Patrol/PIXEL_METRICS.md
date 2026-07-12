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

## Offline Visual Workloads viewport contract

- Visual uses four fixed workspace rows: offline/no-media warning, text-equivalent flow, deprecation warning, then one contained scrolling form. None may overlap or reorder at 640 x 480 or 320 x 240.
- The initial narrow viewport prioritizes the complete safety boundary. All four workload choices, media path/type validation, output branching, remediation, and actions remain available through vertical traversal without horizontal clipping.
- Primary and transfer use decision then reason; closed note uses four columns at canonical width and one ordered column at narrow width. Outer Machine/file/status chrome remains fixed.

## Offline Information Extraction viewport contract

- Extraction uses three fixed workspace rows: persistent offline/privacy warning, persistent text-equivalent schema/evidence flow, then one contained scrolling form. No row may overlap or reorder at 640 x 480 or 320 x 240.
- The complete narrow warning may occupy the initial viewport; document/form, image, audio, video, schema/null/evidence content remains reachable through one vertical traversal without horizontal clipping.
- Primary and transfer retain decision then reason. Closed note uses four schema-integrity fields in one canonical row and one narrow column while outer Machine/file/status chrome stays fixed.

## Offline Portal Orientation viewport contract

- Portal Orientation uses three fixed workspace rows: persistent offline/no-authority warning, persistent eight-checkpoint equivalent, then one contained scrolling form. Warning and workflow may wrap but never overlap or reorder.
- At 640 x 480 the checkpoint strip reads access -> project -> model -> deployment -> readiness -> interaction -> connection -> cleanup. At 320 x 240 the complete warning receives the initial viewport and the same workflow remains available by vertical traversal.
- Primary/transfer retain decision then reason. Closed note uses four safeguard fields in one canonical row and one narrow column; outer Machine/file/status chrome remains fixed.

## Offline Prompt Layers viewport contract

- Prompt Layers uses three fixed workspace rows: persistent offline/no-authority warning, persistent six-layer equivalent, then one contained scrolling form. Warning and layer strip may wrap but cannot overlap or reorder.
- The canonical six-layer read is system -> user -> grounding -> output contract -> conflict/no-action authority -> representative/edge/failure/adversarial evaluation. At 320 x 240 the complete warning leads and all layers remain reachable by vertical traversal.
- Primary/transfer retain decision then reason. Closed note uses four explanation fields in one canonical row and one narrow column; outer Machine/file/status chrome stays fixed.

## Offline Client Boundaries viewport contract

- Client Boundaries uses three fixed workspace rows: offline/mock/no-authority warning, six-boundary equivalent with current mock-PASS meaning, then one contained phase/form region. Rows may wrap but cannot overlap or reorder.
- Canonical order is endpoint -> credential -> deployment -> project/inference client -> request/response -> simulation/no-action proof. At 320 x 240 the complete warning leads and the remaining boundaries stay reachable by vertical traversal.
- Primary/transfer retain decision then reason. Closed note uses four explanation fields in one canonical row and one narrow column; outer Machine/file/status chrome stays fixed.

## Offline Single-Agent Solutions viewport contract

- Single-Agent uses three fixed workspace rows: persistent no-agent/tool/action warning, persistent six-boundary equivalent, then one contained form. Rows wrap but cannot overlap or reorder at canonical or narrow size.
- Canonical order is fit -> stable instructions -> least-privilege tools -> expected/edge/injection/denied/failure tests -> verified action authority -> agent-ID submit/read honest result or error. Narrow retains the same order by vertical traversal.
- Primary/transfer retain decision then reason. Closed note uses four grouped explanation fields in one canonical row and one narrow column; outer Machine/file/status chrome stays fixed.

## Offline Text/Speech Patterns viewport contract

- Text/Speech uses three fixed rows: persistent offline/no-readiness/no-disclosure/action warning, six-boundary transcript equivalent, then one contained form. Rows wrap without overlap or reordering.
- Canonical order is text analysis -> recognition -> synthesis -> multimodal prompt -> client configuration/payload -> honest result/error/cancellation plus simulation limits. Narrow preserves the full order through vertical traversal.
- Primary/transfer retain decision then reason. Closed note uses four grouped explanation fields in one canonical row and one narrow column; outer Machine/file/status chrome stays fixed.

## Offline Visual Patterns viewport contract

- Visual Patterns uses three fixed rows: persistent offline/no-action warning, six-boundary visual text equivalent, then one contained form. Dense text wraps inside its row without collision or reordering.
- Canonical order is analysis/multimodal/generation -> request validation -> honest operation/result -> provenance -> simulation limits -> separate publication/deletion authority. Narrow preserves all boundaries by vertical traversal.
- Primary/transfer retain decision then reason. Closed note uses four grouped explanation fields in one canonical row and one narrow column; outer Machine/file/status chrome stays fixed.

## Offline Objective Ledger viewport contract

- Objective Ledger uses four explicit rows: course-authored/not-exam/no-guarantee warning, domain/status equivalent, contained 15-objective ledger, then contained scenario or closed-note form. All four remain ordered and independently traversable.
- At 640 x 480 the domain equivalent and at least one ledger row remain visible with the validator region. At 320 x 240 the complete warning leads; domain, ledger, and form remain reachable by vertical traversal.
- Closed note uses four domain/safeguard fields in one canonical row and one narrow column. Outer Machine/file/status chrome remains fixed.
