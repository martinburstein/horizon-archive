# Structured Packets Physical Motif

[![Three nested sockets and continuous groove](structured-packets-sockets-64x64.png)](structured-packets-sockets-64x64.png)

One native `64 x 64` AB-01-compatible Terminal overlay presents three nested square sockets connected by one uninterrupted stepped data-path groove. It contains no embedded text; live labels are the semantic authority.

## Geometry

| Element | Distinguishing construction |
|---|---|
| Outer socket | continuous 2 px beveled square with a single highlight run |
| Middle socket | four open corner brackets with doubled corner studs and midpoint gates |
| Inner socket | compact 1 px square with four filled checker notches and a central pin |
| Data-path groove | one continuous stepped polyline from grounded lower-left entry through all three socket depths to upper-right exit; 3 px dark channel plus 1 px center line |

Hue reinforces the components but does not define them. Contour continuity, corner count, open gates, checker notches, nesting scale, and uninterrupted path remain distinct in grayscale.

## Delivery and placement

- **Native asset:** [structured-packets-sockets-64x64.png](structured-packets-sockets-64x64.png), transparent RGBA.
- **Exact nearest-neighbor 2x:** [128 x 128](qa/structured-packets-sockets-2x-128x128.png).
- **Grayscale QA:** [64 x 64](qa/structured-packets-sockets-grayscale-64x64.png).
- **Isolation QA:** [combined / outer / middle / inner / groove at 2x](qa/socket-groove-isolation-2x-640x128.png).
- **Renderer:** [build_structured_packets_motif.py](build_structured_packets_motif.py); integer geometry only, no reference assets.
- **AB-01 anchor:** `x=156, y=211` in the `640 x 360` world.
- **Painted bounds:** approximately `x=8–56, y=6–60`; 49 x 55 logical pixels.
- **Hotspot:** retain `x=156, y=205, w=68, h=76`; safely ≥44 x 44 at native 1x.

The motif replaces only the physical Terminal overlay. It cannot enter the lower interface band or quiet footer rows `461–479`.

## Accessibility boundary

Nested geometry supports recognition of packet structure, but cannot name fields or explain serialization. Runtime must provide persistent live labels, logical focus order, and textual feedback. The groove is not an arrow and does not imply a one-way or irreversible operation.
