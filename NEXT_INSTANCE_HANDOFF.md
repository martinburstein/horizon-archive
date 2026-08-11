# Next Instance Handoff

Workflow: `FIRST_RUN_AGENT_WORKFLOW.md`

Current disposition: **`HOLD / MARTIN DECISION REQUIRED / MANAGED-DIRECTORY
FILETIME-OWNER DELTA CANNOT PROVE BUILT-IN CREATOR IDENTITY`**

Martin's controlling decision: **`Authorized new Drowned Media for Host 06`**

Current Science return: `FRVE-005-v4 / HOLD`

Current Work Order: `FRWO-005-v4`

Mission return / Quartermaster return: `FRSH-005-v1-VR-07` /
`FRCA-005-v2`

Base shell / effective Mission variances: `FRSH-005-v1` through
`FRSH-005-v1-VR-06`

Frozen inert code candidate:
`02d957e9d69dc7986928a391c37f899784f73ea5`

Frozen candidate tree:
`09da6293d72c8123b8d9673bd8e41329338e8d13`

Immutable accepted-media manifest: `FRAM-001-v1`, file SHA-256
`a674c337b377de113eaa4c6763bd431afc73ab613374a76501aa8c5ce37e5437`,
exact `17 / 37,410,731`, canonical digest
`c7ca95201029b490f2460a846e3dc2a64a26775b57e8c587cbc2d874df654d99`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Exact next owner: **Martin / explicit creator-binding transport decision**

## Science finding

The v4 bounded managed-directory adapter is not fail-closed. A disposable
synthetic fixture proved that an unrelated same-owner writer can create
exactly one ordinary direct file with both creation and last-write FILETIMEs
inside the bracket. The complete proposed owner/window/delta signature passes
even though the built-in call was not the producer.

Owner SID proves security ownership, not creator process. FILETIME proves
temporal inclusion, not causation. Canonical final path plus volume/128-bit
file ID proves object identity, not producer identity. With `output_hint`
opaque and no trusted result handle/file ID, the workflow cannot bind the new
file to the built-in call.

The fixture existed only in one exact GUID OS-temp child, was removed after a
containment check, and never touched the real managed directory. No generator
call occurred.

## Exact ordinal and residual state

- Total ordinal domain remains exactly `{1,2,3}`.
- Ordinal `1` remains permanently consumed.
- Ordinals `2` and `3` remain unconsumed and unavailable.
- Built-in calls in `FRCA-005-v2`: exact `0`.
- Built-in calls in Science: exact `0`.
- Conservative possible ordinal-associated managed residual count remains
  exact `1`, associated only with ordinal `1`.
- The ordinal-1 residual remains **`DEFERRED LIMITATION / RELEASE-PROCESS
  ONLY / NON-GATING / OPAQUE BUILT-IN MANAGED RESIDUAL`** and untouched.
- VR-65 remains separate, opaque, non-gating, and inaccessible.

## Preserved state

Maturity remains unchanged. `FR-03` remains continuity `FR2`; physical-host
expression `FR0 - 1 accepted shared compression / 1 exact / 10 missing`;
learning `FR2`; behavior/save/recovery `FR1`; content `FR2`; presentation
`FR3`; and prior bounded release proof `FR4`.

All thirteen inherited process records and the separate Commandant filename/
search-scope record remain OPEN. Product raster/provenance and Host 06 content
remain absent/null. Protected state, accepted media, the real managed
directory, opaque residuals, user work, and later addresses remain untouched.

## Exact next action

Martin must explicitly choose one boundary before planning resumes:

1. authorize a built-in result contract that returns a trusted identity-proved
   handle or independently authenticated volume/file ID;
2. explicitly authorize CLI/API mode with a predeclared create-new output
   target, followed by a new Operations -> Science -> Mission sequence; or
3. withdraw/terminate `FRWO-005-v4` with no media candidate.

No Mission stage follows this HOLD. No role may invoke generation; access the
real managed directory; parse `output_hint`; consume ordinal `2`; authorize
CLI/API on Martin's behalf; inspect pixels; import media; write copy or
provenance; run E2E; reveal; advance maturity; close an OPEN record; inspect
VR-65; schedule; automate; push; release; or call `FIRST RUN COMPLETE`.
