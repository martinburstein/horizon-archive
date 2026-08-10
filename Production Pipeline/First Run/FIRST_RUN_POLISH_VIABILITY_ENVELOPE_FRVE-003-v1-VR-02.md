# First Run Polish Viability Variance Envelope - Browser-Resolved Host 05

Variance ID: `FRVE-003-v1-VR-02`

Disposition: **`POLISH VIABILITY READY / FRVE-003-v1-VR-02`**

Stage / owner: Office of Science Administrator / `office_of_science_administrator`

Mission return: `HOLD / RETURN TO SCIENCE THEN TACTICAL /
FRSH-003-v1-VR-03`

Work Order / governing shell: `FRWO-003-v1` / `FRSH-003-v1`

Frozen repaired candidate:
`7e85154abd8dbf116c4bb84ca66afd859903d750`

Frozen predecessors: `a9776e337f1820776864a5690332c364d0fb2556` /
`bf58e528bc6ce4088f81f2c782ce2895259ab9fd`

Released rollback baseline:
`3e3da60dc2ffa097a3499a5e2f5fa6ce2273f602`

Science control source inspected:
`75e73e03bda7a7c8cfe168f1664714cbf49dc7ce`

Date: **2026-08-10**

## Decision

The live browser evidence is compatible with the authored contract. Science
returns `READY` without a product change, tolerance, rounded comparison, or
threshold waiver.

Two coordinate statements had incorrectly been treated as byte-identical:

1. `45/75/20/25` is exact **authored normalized registration**; and
2. `DOMRect` is the browser's exact **used-value geometry**, resolved on the
   current Chromium CSS layout-unit lattice.

At desktop, the unquantized diagnostic arithmetic gives
`x 888.5671875 / width 285.73125`, while the exact used values are
`x 888.5625 / width 285.71875`. The differences are respectively
`0.0046875` and `0.0125` CSS px. They are residues discarded when the positive
percentage lengths resolve to Chromium's `1/64 CSS px` layout units; they are
not player-facing movement and are not an error tolerance.

Acceptance must never compare a DOM rectangle to independently unquantized
arithmetic. It proves the declarations exactly, applies the browser's exact
layout-unit resolution, and then compares actual DOM facts to those resolved
facts with strict equality. A value one layout unit away fails; `>=44`,
retention, anchor containment, overlap, label containment, and overflow remain
direct full-precision DOM/source tests.

The label evidence is also correct. Inline `2px` offsets begin at the button's
inner absolute-positioning containing edge. The button has an exact `1px`
border and zero padding, so the label's outer border is exactly `3px` from the
button's outer border. `2px inner` and `3px outer` are not competing target
values.

Science authorizes documentation only. Candidate `7e85154` and all product,
test, harness, manifest, media, copy, and thresholds remain frozen. Tactical is
the sole next owner; Mission must readjudicate before Combat.

## Exact declaration and used-value acceptance model

Let the actual `.scene-art` border box be
`I=(Ix,Iy,Iw,Ih)`. Image border and padding must remain exact zero and its box
must equal `.scene-world-content`. Let `q=1/64 CSS px`, the exact used-value
lattice proven by the accepted Chromium live record. For nonnegative offsets
and lengths in this bounded contract, define:

```text
Q(v) = floor(v / q) * q

P = browser-resolved physical registration
P.x = Ix + Q(0.45 * Iw)
P.y = Iy + Q(0.75 * Ih)
P.w = Q(0.20 * Iw)
P.h = Q(0.25 * Ih)

S = browser-resolved semantic activation
S.x = Ix + Q(0.45 * Iw)
S.y = Iy + Q(min(0.75 * Ih, Ih - 44))
S.w = Q(0.20 * Iw)
S.h = Q(max(0.25 * Ih, 44))
```

`Q` is an exact resolution function for the frozen runner, not `epsilon`,
`approximately equal`, decimal rounding, device-pixel rounding, or permission
to accept nearby values. Every expected component and the actual DOMRect
component must be exactly equal after this resolution. If the runner's layout
unit or positive-length resolution operator changes, that is an environment
identity variance and returns `HOLD`; a new tolerance may not be inferred.

The authoring side passes only when all of these are exact:

- immutable `DROWNED_ARCHIVE_HOTSPOTS.sixfoldWeir` values are
  `left=45`, `top=75`, `width=20`, `height=25` in both layout variants;
- the live Host 05 element carries exact corresponding custom declarations;
- its semantic inline declarations are exact
  `top:min(75%,calc(100% - 44px))` and `height:max(25%,44px)`; and
- no transform changes target geometry.

The used-value side passes only when actual full-precision rectangles satisfy
the `P` and `S` equations exactly. The nominal unquantized rectangle may be
recorded as diagnostics, but it is neither the expected DOMRect nor a release
gate.

## Six-layout results and comparisons

The accepted VR-02 record supplies these browser-resolved facts. The first
four `25%` heights exceed `44px`, so the semantic activation and the
browser-resolved physical rectangle are the same rectangle. At retained sizes,
the semantic box uses the exact `44px` branch and remains bottom anchored.

| Layout | Browser-resolved physical size | Browser-resolved semantic size | Exact label border-box size | Branch / result |
| --- | --- | --- | --- | --- |
| desktop | `285.71875 x 200.640625` | `285.71875 x 200.640625` | `279.71875 x 194.640625` | percentage / exact |
| laptop | `265.703125 x 186.5625` | `265.703125 x 186.5625` | `259.703125 x 180.5625` | percentage / exact |
| narrow | `76.796875 x 53.75` | `76.796875 x 53.75` | `70.796875 x 47.75` | percentage / exact |
| effective-200 | `149.203125 x 104.65625` | `149.203125 x 104.65625` | `143.203125 x 98.65625` | percentage / exact |
| retained-320x180 | `62.796875 x 43.90625` | `62.796875 x 44` | `56.796875 x 38` | minimum / exact |
| retained-320x240 | `62.796875 x 43.90625` | `62.796875 x 44` | `56.796875 x 38` | minimum / exact |

For every row, acceptance is separated as follows:

| Invariant | Exact proof source | Fail condition |
| --- | --- | --- |
| authored registration | source constants plus exact live declaration strings | any value other than `45/75/20/25` |
| physical used rectangle | actual image box passed through exact `Q`, compared strictly to actual physical used box | any unequal component or changed runner resolution |
| semantic used rectangle | actual Host 05 DOMRect compared strictly to exact `S` | any unequal component |
| source mapping | actual browser-resolved `P`, actual `.scene-art`, natural `1672 x 941`, and computed cover/object-position | anchor lost, retention `<0.95`, invalid crop, or nonfinite value |
| minimum activation | actual `S.w >= 44 && S.h >= 44` | either actual dimension below `44`, with no rounding |
| center | exact browser-resolved physical center lies inside `S`; nominal source anchor lies inside mapped source bounds | either containment false |
| overlap | actual semantic DOMRect intersections with actual Host 04/return DOMRects | area other than exact zero |
| label | exact box-model equations below plus actual scroll containment | unequal edge/size, escape, or scroll overflow |
| overflow | actual document and target geometry | horizontal/page escape |

Source bounds must be calculated from browser-resolved `P`, not from the
unquantized diagnostic rectangle. Cover scale, offsets, actual source center,
nominal source-anchor containment, and source-band retention remain the
`FRVE-003-v1-VR-01` equations. This changes only the rectangle supplied to
those equations. The accepted VR-02 run already proves the actual mapping,
anchor, `>0.95` retention, zero overlap, and zero overflow; no release pass or
new E2E is inferred.

## Exact label box model

Let semantic button `S` be its border box. Current exact button border widths
are `1px` on all four sides and button padding is `0`. The absolute label's
containing edge is therefore the button's inner padding/content edge, exactly
`1px` inside the outer border. Inline `left/right/top/bottom:2px` is measured
from that inner edge.

```text
label outer left/top distance from button outer border = 1px + 2px = 3px
label border-box width  = S.w - 2*(1px + 2px) = S.w - 6px
label border-box height = S.h - 2*(1px + 2px) = S.h - 6px
```

The label itself has exact `1px` borders and `1px` padding, so its text content
box is:

```text
label content width  = S.w - 10px
label content height = S.h - 10px
```

At retained size these are exact:

- button border box: `62.796875 x 44`;
- label outer-border distances: `3px` on all four sides;
- label border box: `56.796875 x 38`; and
- label text content box: `52.796875 x 34`.

Containment requires strict equality to those four outer distances and two
label dimensions, label border box strictly inside the button border box,
`scrollWidth <= clientWidth`, and `scrollHeight <= clientHeight`. Hidden
overflow alone is not proof. The accessible button name/state remains the
complete nonvisual identity if visual text is constrained. No label geometry,
font, copy, CSS, or product change is necessary or authorized.

## Preserved non-geometry contracts

- Repaired candidate `7e85154`, predecessors `a9776e3` / `bf58e52`, rollback
  `3e3da60`, and all seven placeholders remain exact.
- Current PBA remains JavaScript `1,666,665`, CSS `119,247`, modules `217`;
  narrow headroom is exact `8,999 / 34 / 0`. No code/CSS/module delta exists.
- Physical target identity, immutable media `17 / 37,410,731`, actual
  `.scene-art` crop, source relationship, dry center, Host 04/return order,
  pure sanitized availability, sole `USE`, completed read-only behavior,
  generic-launcher removal, and focus/recovery meanings remain fixed.
- `L02-02`, evaluator, sanitizer, evidence/privacy, save, Host 04, `L02-03`,
  return/reload, route, later rail, equal MH-40 outcomes, null deltas, and
  `successor=null` remain unchanged.
- `FRRC-002-v1`, the external GUID root, machine-owned live summary/verifier,
  cleanup, performance, offline, served identity, and one-E2E boundary remain
  exact. No new E2E is authorized.
- Genuine keyboard Host 05 `:focus-visible`, exact `3px solid` system
  `Highlight`, and zero reduced-motion durations/delays remain passing frozen
  facts. Tactical must correct only the assumed action/focus graph in its
  documentation.

## Exact Tactical handoff

Tactical may issue one documentation-only `FRPX-003-v1-VR-02` or `HOLD`.
It must adopt this exact declaration/used-value distinction and label box
model, preserve actual `.scene-art` source mapping, and change no geometry or
threshold.

Its remaining work is limited to recording the actual enabled action order
`Host 05 -> LOOK AT -> USE -> TALK TO -> remaining lawful controls`, naming
the actual element reached by genuine `Shift+Tab` from recovered Host 05, and
freezing the genuine keyboard sequence that returns to Host 05. Forced colors
and reduced motion must be active before traversal; pointer or programmatic
target focus is forbidden acceptance evidence. Exact Host 05 active element,
`:focus-visible`, `3px solid Highlight`, identity/state, and observed order
remain required.

Tactical may not run a browser/E2E, edit product/test/harness/manifest, reorder
player behavior, invent a focus predecessor, change this geometry convention,
or authorize Combat. Mission must reconcile Science and Tactical before any
implementation or execution.

## Validation, limits, and signature

- Read the current handoff, `FRSH-003-v1-VR-03`, prior Science variance,
  current exact Host 05 DOM/CSS controls, and complete latest `FRCE-003-v1`
  evidence at synchronized source `75e73e03`.
- Ran no product test, build, preview, browser, validator, verifier, or E2E and
  made no product/test/harness/manifest/media/copy mutation.
- Did not inspect or mutate the protected repository QA quarantine, protected
  PDF/training paths, hidden lore, or Martin's browser/profile/save.
- The required `foundry-azure-source-priority` skill is unavailable. This
  variance changes no AI-901 objective, learning claim, or Azure/Foundry
  implementation, so external objective verification was not material and no
  third-party source was used.
- No maturity, canon, route, world, ending, automation, schedule, reveal, or
  archived-workflow state advances.

Office of Science Administrator signs **`POLISH VIABILITY READY /
FRVE-003-v1-VR-02`**. Exact next owner is Tactical Operations Specialist for
`FRPX-003-v1-VR-02`; Mission remains the next adjudicator. Combat,
Quartermaster, Image Specialist, and Intelligence remain blocked.
