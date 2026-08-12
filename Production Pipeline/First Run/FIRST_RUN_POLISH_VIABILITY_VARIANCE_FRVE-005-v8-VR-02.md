# First Run Polish Viability Variance - v8 Helper Terminal LF

Envelope ID: `FRVE-005-v8-VR-02`

Stage / stable agent: Office of Science Administrator /
`office_of_science_administrator`

Work Order / active shell / predecessor: `FRWO-005-v8` /
`FRSH-005-v1-VR-35` / `FRCA-005-v7`

Disposition: **`POLISH VIABILITY READY / EXACT ONE-LF HELPER-SOURCE
CORRECTION IDENTIFIED / NEW COMPLETE MISSION SHELL REQUIRED / ZERO
CREDENTIAL, REQUEST, SEND, OR MEDIA ACTIVITY / A1 UNCONSUMED`**

Date: **2026-08-12**

Science source inspected: `a78ef7de71b706d0ce989620237eb55603af1682`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Exact next recipient: one fresh Mission Captain / `mission_captain`

## Science decision

Science read the complete required intake/profile, `FRCA-005-v7`, active
VR-35 shell, v8 viability and Work Order, terminal VR-34, every retained v8
launcher/parent/carrier/controller/builder source, and the decisive v7 helper
correction history. It executed no production carrier, child, helper, API,
credential, request, media, product, or cleanup operation.

Read-only ordinal source analysis reproduces the exact defect. The current v8
carrier's PowerShell here-string yields this helper value:

```text
helperSource current=1,692 / 443210df5bc93c95fb5758dc3a341eb37063bb7359b82090e86ea5c343573bab
helperSource plus exactly LF=1,693 / 98cf564b7d22da686adc204a3f6051927ac2d37ef7b5f2fe22d774cb10d5da97
```

The frozen predicate is correct. The v8 builder decodes the retained
pre-correction combined v7 carrier but omits the proven v7 transformation
recorded in `HOST06_SCIENCE_PARENT_V2.ps1`: after the unique helper closing
terminator and before `$utf8=...`, append exactly one `[char]10` to
`$helperSource`. The current v8 carrier contains that unique insertion point
exactly once. No helper C# byte other than the terminal LF changes.

Variance classification: **`REQUIRED CORRECTION / RESTORE THE PROVEN V7
TERMINAL-LF TRANSFORMATION IN THE DETERMINISTIC V8 BUILDER AND REFREEZE ALL
DEPENDENT SOURCE IDENTITIES`**.

## Exact bounded correction

Mission may change only the deterministic v8 construction and its dependent
identity predicates:

1. In `BUILD_HOST06_V8_A1_CARRIER.ps1`, immediately after decoding the
   retained combined carrier and before the v8 path/response/A1 patches,
   require exactly one ordinal occurrence of:
   `"@ + LF + "  $utf8=New-Object Text.UTF8Encoding($false,$true)"`.
2. Replace only that occurrence with:
   `"@ + LF + "  $helperSource += [char]10" + LF +
   "  $utf8=New-Object Text.UTF8Encoding($false,$true)"`.
3. Require the post-build helper source to be exact
   `1,693 / 98cf564b...`; do not weaken or replace the predicate.
4. Regenerate the retained carrier and update only its exact dependent
   identity predicates in the launcher and parent. Recompute and freeze the
   final executable source identities; do not hand-edit an executed carrier.
5. Parser-check all retained sources, then run one credential-cleared
   no-request Science fixture under the new shell. It must reach helper
   compile/load/identity/cleanup and stop at PT06 with zero request/send and
   all controlled paths absent. A1 remains unconsumed.

The direct in-memory projection of only this correction onto the current
retained sources is:

```text
carrier=33,666 / f3926cac83905f4d82f72627b9ea518bf69e545d5aeb3c5f78aafa37996c8077
launcher=2,638 / c9497754b90e18b4f8ab8bdea9fc4f2d86e6056a00e671850b3fec0f04783c1a
stdin parent=2,878 / 7f70a245d4e2c74a7af1ceade1e5ab1651638bdd73a9c3aba8bea5b102ec7091
```

These are construction targets for Mission to independently reproduce, not
execution authority. The fixture controller's diagnostic contract is
semantically unchanged; Mission must still refreeze every retained source.

## Boundaries and handoff

Credential reads, request constructions, `SendAsync` calls, API sends, media
reads, pixel review, product/provenance changes, and A1 consumption remain
exactly zero. Repository QA quarantine, protected PDF, training tree,
Martin's real browser/profile/save, accepted media, v7 paths/residuals, opaque
or managed residuals, VR-65, hidden lore, and unrelated work were not touched.

The one-path rail, sole unchanged `L02-03`, equal-dignity MH-40 outcomes,
shared RP-012 ending, all null deltas, and `successor=null` remain immutable.
Maturity does not advance.

One fresh Mission Captain reads this complete artifact and the authorities it
cites, applies only the deterministic one-LF construction correction, freezes
the complete corrected sources and identities, and issues one new complete
`FIRST RUN SHELL READY`, `REVISE`, or `HOLD` contract. Mission may not execute
the production carrier, read a credential, construct/send a request, consume
A1, inspect media, or change product state.

Office of Science Administrator signs **`POLISH VIABILITY READY /
FRVE-005-v8-VR-02 / EXACT TERMINAL-LF CORRECTION / FRESH MISSION NEXT`**.
