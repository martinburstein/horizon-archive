# First Run Polish Viability Variance Envelope - Sixfold Weir Live Geometry

Variance ID: `FRVE-003-v1-VR-01`

Disposition: **`POLISH VIABILITY READY / FRVE-003-v1-VR-01`**

Stage / owner: Office of Science Administrator / `office_of_science_administrator`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Mission return: `HOLD / RETURN TO SCIENCE / FRSH-003-v1-VR-01`

Frozen product candidate:
`a9776e337f1820776864a5690332c364d0fb2556`

Frozen corrected harness candidate:
`bf58e528bc6ce4088f81f2c782ce2895259ab9fd`

Released rollback baseline:
`3e3da60dc2ffa097a3499a5e2f5fa6ce2273f602`

Science control source inspected:
`fc2bad11fb67e555b34116293cbf8a64b900a2b9`

Date: **2026-08-10**

## Decision

The frozen requirements can coexist. The live `62.796875 x 43.90625`
measurement is correct, and the earlier theoretical `64 x 45` measurement was
not. The earlier envelope multiplied the retained viewport/nominal scene
`320 x 180` directly. In the live nested shell, Host 05 resolves against the
`.scene-world-content` containing block, whose retained padding box is
`313.984375 x 175.625`; the bordered `.scene-frame` is
`313.984375 x 176.625`. Exact `20% x 25%` of the real containing block is
therefore `62.796875 x 43.90625`.

Science freezes one target-specific, code-only presentation mechanism. The
immutable physical registration remains exact `45/75/20/25`. The semantic
button keeps the same horizontal bounds and bottom edge, but uses
`top = min(75%, 100% - 44px)` and `height = max(25%, 44px)`. Its label border
box is inset `2px` on all sides, with `1px` padding, zero letter-spacing, and
hidden overflow. This is one Host-05-only inline presentation override in the
existing hotspot render; it adds no CSS, module, media, meaning, route,
learning, evaluator, save, or shell change.

At both retained layouts, the semantic button becomes exactly
`62.796875 x 44`, bottom-aligned with the physical registration. It expands
only `0.09375px` upward. The immutable physical registration, its exact
`55% / 87.5%` normalized center, and its provenance anchor remain unchanged.
The semantic center is exactly `0.046875px` above that registration center,
while the registration center remains strictly inside the semantic box. The
button remains on the same honest six-branch relation; its horizontal interval
does not change, so its already proven zero-area Host 04 and return overlap
remains exact zero.

Science authorizes documentation only. Tactical must clarify measurement
execution; Mission must readjudicate; Combat remains unauthorized.

## Four exact coordinate spaces

1. **Bordered frame.** `.scene-frame` uses global `border-box` sizing and has
   a `1px` bottom border. Its border-box height is therefore exactly one CSS
   pixel greater than its content/padding box in every accepted live row.
2. **Hotspot containing block.** `.scene-world-content { position:absolute;
   inset:0 }` fills the frame padding box. Hotspot percentage geometry resolves
   against this box, not the viewport and not the frame border box.
3. **Rendered image element.** The `<picture>` and `.scene-art` element boxes
   equal the containing block. The immutable `1672 x 941` source is painted
   with `object-fit:cover`; horizontal source retention is exact `1.0`. Current
   vertical position is `20%` at desktop/laptop/effective-200 and top-aligned
   at narrow/retained.
4. **Registration, activation, and label.** The physical registration is the
   untouched normalized `45/75/20/25` rectangle. The semantic activation may
   expand upward only under the frozen formula above. The label/state border
   box is the semantic activation inset exactly `2px` on every side.

All coordinates below are CSS pixels relative to the containing/image element
top-left. They reproduce the accepted live rows without running another E2E.

| Layout | Frame border box | Content/image box | Physical registration `x/y/w/h` | Semantic activation `x/y/w/h` | Label border box `x/y/w/h` | Min pass |
| --- | --- | --- | --- | --- | --- | --- |
| desktop | `1428.59375 x 803.5625` | `1428.59375 x 802.5625` | `642.8671875 / 601.921875 / 285.71875 / 200.640625` | same | `644.8671875 / 603.921875 / 281.71875 / 196.640625` | yes |
| laptop | `1328.515625 x 747.25` | `1328.515625 x 746.25` | `597.83203125 / 559.6875 / 265.703125 / 186.5625` | same | `599.83203125 / 561.6875 / 261.703125 / 182.5625` | yes |
| narrow | `383.984375 x 216` | `383.984375 x 215` | `172.79296875 / 161.25 / 76.796875 / 53.75` | same | `174.79296875 / 163.25 / 72.796875 / 49.75` | yes |
| effective-200 | `746.015625 x 419.625` | `746.015625 x 418.625` | `335.70703125 / 313.96875 / 149.203125 / 104.65625` | same | `337.70703125 / 315.96875 / 145.203125 / 100.65625` | yes |
| retained-320x180 | `313.984375 x 176.625` | `313.984375 x 175.625` | `141.29296875 / 131.71875 / 62.796875 / 43.90625` | `141.29296875 / 131.625 / 62.796875 / 44` | `143.29296875 / 133.625 / 58.796875 / 40` | yes, exact `44` |
| retained-320x240 | `313.984375 x 176.625` | `313.984375 x 175.625` | `141.29296875 / 131.71875 / 62.796875 / 43.90625` | `141.29296875 / 131.625 / 62.796875 / 44` | `143.29296875 / 133.625 / 58.796875 / 40` | yes, exact `44` |

The first four semantic rectangles remain byte-for-byte equivalent in geometry
to the physical registration because `25%` already exceeds `44px`. The two
retained semantic rectangles have bottom exactly `175.625`; there is no clip,
overflow, rounding credit, or tolerance.

## Rendered-source transform reconciliation

Let image element size be `Iw x Ih`, source size be `Sw=1672`, `Sh=941`, and
vertical object-position fraction be `p`. The exact cover transform is:

```text
s = max(Iw / Sw, Ih / Sh)
drawW = Sw * s
drawH = Sh * s
offsetX = (Iw - drawW) * 0.5
offsetY = (Ih - drawH) * p
sourceX = (cssX - offsetX) / s
sourceY = (cssY - offsetY) / s
```

The normalized authoring registration remains `45/75/20/25`, whose nominal
full-master bounds are `x 752.4-1086.8 / y 705.75-941` and nominal center is
`x 919.6 / y 823.375`. That nominal center and the live transformed sample are
different coordinate-space statements under a nonzero cover crop. Tactical
must record both; it may not pretend that the frame box and painted source are
the same space.

| Layout | `s` | painted `drawH` / `offsetY` | live source `y0-y1` | live source center `x/y` | exact nominal-band retention |
| --- | ---: | --- | --- | --- | ---: |
| desktop | `0.8544220992822966` | `804.0111954246411 / -0.28973908492821465` | `704.817460352182-939.643578694083` | `919.6 / 822.2305195231324` | `0.9942341283489181` |
| laptop | `0.7945667613636364` | `747.6873224431818 / -0.28746448863635127` | `704.7550837988827-939.5528491620112` | `919.6 / 822.1539664804469` | `0.9938484555239582` |
| narrow | `0.22965572667464115` | `216.10603880083733 / 0` | `702.1379450661241-936.1839267548321` | `919.6 / 819.1609359104781` | `0.9795278501799451` |
| effective-200 | `0.44618159389952156` | `419.8568798594498 / -0.24637597188996097` | `704.2314839250183-938.7912493454812` | `919.6 / 821.5113666352497` | `0.9906110492900371` |
| retained-320x180 | `0.18778969796650719` | `176.71010578648327 / 0` | `701.4162727046529-935.2216969395372` | `919.6 / 818.318984822095` | `0.9754376065442601` |
| retained-320x240 | `0.18778969796650719` | `176.71010578648327 / 0` | `701.4162727046529-935.2216969395372` | `919.6 / 818.318984822095` | `0.9754376065442601` |

Every live row remains above the frozen `0.95` floor. Horizontal bounds stay
exact `752.4-1086.8`; the source relation, dry foreground identity, immutable
media, and crop behavior are unchanged. Tactical must remeasure these values
from `.scene-art.getBoundingClientRect()` and computed object fit/position;
these Science expectations cannot be substituted for live evidence.

## Sole permitted mechanism

Combat may later implement this mechanism only after Tactical clarification
and a new Mission `READY`:

```text
Host05 activation inline override:
  top    = min(var(--hotspot-top), calc(100% - 44px))
  height = max(var(--hotspot-height), 44px)

Host05 label inline override:
  inset         = 2px
  padding       = 1px
  letter-spacing= 0
  overflow      = hidden
```

It must be applied only through the existing `isSixfoldWeir` render branch in
`App.jsx`. `DROWNED_ARCHIVE_HOTSPOTS.sixfoldWeir`, its four CSS variables, the
source data, `.scene-frame`, `.scene-world-content`, `.scene-art`, all shared
hotspot CSS, and all other targets remain unchanged. This exact separation is
why physical source registration is preserved while semantic hit size and
visible containment become true.

No new CSS is permitted by this variance mechanism. Current accepted PBA is
JavaScript `1,666,377`, CSS `119,247`, modules `217`. The narrow caps remain
JavaScript `1,675,664`, CSS `119,281`, modules `217`, leaving exact headroom
`9,287 / 34 / 0`. The inline mechanism uses JavaScript headroom and must still
pass both narrow and global PBA after build; any overage is `HOLD`.

## Ten-question variance adjudication

| Work Order question | Variance result |
| --- | --- |
| distinct dry-reachable provenance | preserved; no target/source/media change |
| geometry, crop, retention, center, overlap | ready under the exact four-space math and sole mechanism above |
| pure post-Host-04 availability | preserved; sanitized view state only, no new persistence |
| sole in-world `L02-02` entry | preserved; no generic launcher return and no learning/evaluator change |
| focus and fallback owners | preserved; geometry adds no focus owner or event |
| seven copy/voice slots | preserved verbatim; label box contains the current placeholder/state presentation |
| PBA/offline/media | ready only under exact `9,287 / 34 / 0` narrow headroom, zero CSS/media/dependency/network change |
| focused-to-single-E2E ladder | unchanged; no E2E is authorized by Science |
| manifest/live summary | `FRRC-002-v1` remains the required supersession; live rows must separate all coordinate spaces and aggregate fail closed |
| rollback | exact bounded rollback remains `3e3da60dc2ffa097a3499a5e2f5fa6ce2273f602` |

`L02-02` content, six principles, evaluator, strict `24/24`, remediation,
transfer, explanation, confidence, ownership, sanitizer, evidence, privacy,
save, recovery, `L02-03`, later order, route, world, equal MH-40 outcomes,
null deltas, and `successor=null` remain unchanged.

## Tactical clarification contract

Tactical may now create documentation only. Its one
`FRPX-003-v1-VR-01` must:

- derive source coordinates from actual `.scene-art.getBoundingClientRect()`
  plus computed `object-fit` and `object-position`, never `.scene-frame`;
- record frame border, containing block, image element, physical registration,
  semantic activation, label, Host 04, and return rectangles independently;
- preserve exact normalized registration `45/75/20/25`, nominal source bounds
  and center, actual transformed source sample, retention `>=0.95`, center
  containment, zero overlap, `>=44 x 44`, and label containment;
- enter forced-colors before focus verification, clear pointer modality, and
  reach Host 05 only through actual Tab/Shift+Tab from the preceding lawful
  focus owner;
- require Host 05 as `document.activeElement`, `:focus-visible === true`,
  forced colors active, and a visible nontransparent system outline at least
  `2px`; and
- preserve accessible identity/state, semantic order, reduced-motion result,
  manifest supersession, machine-owned live summary, corrected harness
  `bf58e52`, and the one-E2E boundary.

Programmatic `.focus()` is not forced-color acceptance evidence. Tactical may
not edit product/test/harness/manifest, run E2E, authorize Combat, or change
the mechanism.

## Validation, limits, and signature

- Reconciled complete `FRCE-003-v1` live evidence, Mission variance, prior
  viability, current DOM/CSS geometry, exact product candidate `a9776e3`, and
  corrected harness `bf58e52` read-only at synchronized source `fc2bad11`.
- Ran no product test, build, preview, browser, validator, summary verifier, or
  E2E and made no product/test/manifest/media/copy mutation.
- Did not inspect or mutate the protected repository QA quarantine,
  `Art Of No Mans Sky Book Scan.pdf`, `Simplilearn Training Files/`, hidden
  lore, or Martin's browser/profile/save.
- The required `foundry-azure-source-priority` skill is unavailable. This
  variance changes no AI-901 objective, learning claim, or Azure/Foundry
  implementation, so no external verification was material and no third-party
  source was used.
- No maturity, canon, route, world, ending, schedule, reveal, automation, or
  archived-workflow state advances.

Office of Science Administrator signs **`POLISH VIABILITY READY /
FRVE-003-v1-VR-01`**. Exact next owner is Tactical Operations Specialist for
the bounded clarification above. Mission remains the next adjudicator; Combat,
Quartermaster, Image Specialist, and Intelligence remain blocked.
