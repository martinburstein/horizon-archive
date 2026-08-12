# First Run As-Built Reconciliation Hold - Host 08

Package ID: `FRAB-008-v1-HOLD-01`

Disposition: **`HOLD / REQUIRED CORRECTION / RELEASE HARNESS ONLY`**

Intelligence independently verified the selected H8-3 product at `16,815,595`
bytes / SHA-256
`f6b31c4c410c9cfc89b18047a0a529e184e58261c79f647b2afab59ecd6662a8`,
the exact Cloud-product variance, full `993/993`, production build `222`, and
TD-012 fixture build `57`. The protected repository QA captures were not
opened, inspected, restored, staged, or used.

The release stopped before browser launch. The retained clean-start harness
completes Host 07, then still activates the obsolete generic `Start Client
Bridge` launcher. Accepted Host 08 enablement intentionally removes that
launcher, so the harness neither traverses the Severed Relay Spine nor proves
the shell's Host08-to-MH40 journey. This is a release-harness defect, not a
product defect.

Classification: **`REQUIRED CORRECTION / COMBAT / RELEASE HARNESS ONLY`**.
Combat may change only `playtest/e2e-playthrough.mjs` and focused static
contracts needed to replace obsolete post-Host07 Client Bridge activations
with the actual Host 08 native USE path. It must preserve the unchanged
`L03-03` exercise, later rail, external-QA-root contract, one-E2E budget, and
all product/media/canon/state boundaries. No E2E was consumed in this audit.

Intelligence signs **`HOLD / ROUTE FRESH COMBAT`**.
