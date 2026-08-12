# Horizon Archive First Run Polish Viability Envelope - Responsive Evidence Repair

Envelope ID: `FRVE-009-v4`

Stage / owner: Office of Science Administrator / `office_of_science_administrator`

Work Order: `FRWO-009-v7`

Disposition: **`POLISH VIABILITY READY / DERIVED PROJECTION + LIVE DOM`**

## Corrected evidence model

Science classifies the old layout verdicts as `REQUIRED CORRECTION`. A lawful
layout is derived from source size, actual `16:9` world size, computed
`object-fit`, computed `object-position`, and source rectangles. Production
must calculate rendered image bounds, visible source bounds, retained family
area, center visibility, mapped semantic/physical rectangles, and target size.
No caller-supplied retention/visibility/size/focus boolean is trusted.

The six declared outer viewports map to actual world boxes `1920x1080`,
`1366x768.375`, `390x219.375`, `768x432`, `320x180`, and `320x180`.
Because source and world share `16:9`, expected crop is zero and family
retention is `1`. Browser proof must independently confirm computed style and
DOM geometry.

The native hotspot must have a real CSS floor of `44x44`, remain within the
world, contain the mapped physical center, retain a stable focus outline, and
avoid protected/wet regions. Source-center preferences are non-gating.

## Validation and adjacent audit

Required tests: projection cover/contain/position/crop adversaries; all six
production layouts; malformed geometry; physical/canon negatives; DOM target
size; computed object-fit/position; narrow/effective-200%; focus; forced color;
reduced motion; adjacent Host07/08 validator evidence review; focused/full
suite and build. If adjacent live behavior passes, record evidence debt without
reopening accepted media. If it fails, stop and route a separate repair.

No browser may use Martin's real profile/save. Use an isolated temporary
Playwright context and a synthetic local fixture containing no protected or
generated media. No generation, API, credential, image, product, or reveal is
authorized.

Science signs **`POLISH VIABILITY READY / FRVE-009-v4 / ROUTE MISSION`**.
