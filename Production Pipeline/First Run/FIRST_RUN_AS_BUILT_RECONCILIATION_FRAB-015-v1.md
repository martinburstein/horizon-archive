# First Run As-Built Reconciliation — FRAB-015-v1

Disposition: **RELEASED / CITY THRESHOLD FINAL-PURPOSE COPY / STOP_SUCCESS**

Date: **2026-08-14**

Exact released product candidate: `1e0039bb`

## Released correction

The player-visible City Threshold status sentence no longer names a
`successor packet` or `staging boundary`. It now reads:

> SYSTEM // EXPEDITION STATE: The reversible local route is recorded. The already-lit civic bridge remains available.

This is System-owned expedition-state reporting. It does not claim a city
response, withheld content, new destination, reward, access grant, identity,
authority, or successor. Pilot ownership of the separate route action remains
unchanged.

## Proportionate proof

- Focused City Threshold and adjacent-entry tests pass `21 / 21`.
- A regression requires the exact replacement copy and rejects both retired
  production terms from the runtime component.
- Production build passes at `275` modules.
- The product diff is one runtime string plus its focused regression.
- Route control, action graph, save, recovery, learning, privacy, image bytes,
  world state, Measured Horizon outcomes, and `successor=null` are unchanged.

The full suite, curriculum validators, served-identity controls, image
reconciliation, and complete E2E from `FRAB-014-v1` were reused rather than
rerun because this bounded string replacement changes none of their logic or
inputs.

## Final decision

`STOP_SUCCESS`. The separate `FR-05` production-language contradiction is
closed at `FRAB-015-v1@1e0039bb`. No follow-up action remains.
