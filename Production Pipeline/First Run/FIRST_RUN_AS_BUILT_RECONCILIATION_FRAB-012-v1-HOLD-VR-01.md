# FIRST RUN AS-BUILT RECONCILIATION / FRAB-012-v1-HOLD-VR-01

## Disposition

`HOLD / REQUIRED CORRECTION / COMBAT E2E NATIVE VERB ACTIVATION`

Combat variance `FRCE-012-v1-VR-01` correctly replaced stale generic-launcher
selectors with the selected native Host12 hotspot. Focused tests passed `6/6`,
syntax and patch checks passed, and the synchronized candidate was
`ba57699cb3a91355c0a3a4a3d49165a7eaab4914`.

The sole fresh clean-start E2E reached and focused that native boundary after
Client Boundaries mastery, then timed out waiting for the SDK Route exercise.
The harness clicked the hotspot without first selecting the game's native
`USE` verb. This is a narrower test-interaction defect: selected hotspots obey
the unchanged verb contract, whereas the retired generic launcher was a direct
button. Product, media, focus restoration, lesson state, and encounter
selection are not contradicted.

Classification: `REQUIRED CORRECTION / COMBAT TEST HARNESS`. Before each
selected-boundary activation that opens the next owned lesson, the harness must
select exact native verb `USE`, then click the already-focused native hotspot.
Add focused static coverage. Do not change product/media/copy/CSS or generic
preselection behavior.

The owned preview listener was stopped, port 5174 is clear, and the exact
external QA root was validated inside OS temp, deleted, and proved absent. No
QA artifact was imported, retained, or used beyond bounded failure
localization. Eight generation calls remain unused.

Exact next owner: one fresh Combat Engineer.
