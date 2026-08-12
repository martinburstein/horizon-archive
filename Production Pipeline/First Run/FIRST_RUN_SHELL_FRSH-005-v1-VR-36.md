# First Run Shell - Host 06 v8 Helper Terminal-LF Correction

Shell ID: `FRSH-005-v1-VR-36`

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / viability: `FRWO-005-v8` / `FRVE-005-v8-VR-02`

Disposition: **`FIRST RUN SHELL READY / EXACT ONE-LF HELPER CORRECTION /
COMPLETE SOURCES RE-FROZEN / CREDENTIAL-CLEARED SCIENCE PROOF REQUIRED / A1
UNCONSUMED / FRSH-005-v1-VR-36`**

Date: **2026-08-12**

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Exact next owner: one fresh Office of Science Administrator /
`office_of_science_administrator`

## Mission decision

Mission accepts `FRVE-005-v8-VR-02`. The v8 builder decoded the pre-correction
v7 production block but omitted the already-proved terminal-LF restoration for
the inline helper C# source. Mission changed only that deterministic
construction seam: immediately after the unique helper here-string terminator,
the builder and retained carrier now append exactly one `[char]10` before
strict UTF-8 hashing and compilation.

The helper predicate remains strict and unchanged:

```text
helper source=1,693 bytes
helper SHA-256=98cf564b7d22da686adc204a3f6051927ac2d37ef7b5f2fe22d774cb10d5da97
```

Mission context reuse is disclosed because the collaboration service rejected
a fresh Mission spawn at its thread limit. No production execution occurred.

## Frozen corrected sources

```text
builder=Production Pipeline/First Run/BUILD_HOST06_V8_A1_CARRIER.ps1
builder bytes=15,801
builder SHA-256=9f4fc333e271e7077b40835e774c46454f5f39f3c4c4cd0cfac41dea6e23c73e

carrier=Production Pipeline/First Run/HOST06_V8_A1_PRODUCTION_CARRIER.ps1
carrier bytes=33,666
carrier SHA-256=f3926cac83905f4d82f72627b9ea518bf69e545d5aeb3c5f78aafa37996c8077

launcher=Production Pipeline/First Run/HOST06_V8_A1_LAUNCHER.ps1
launcher bytes=2,638
launcher SHA-256=c9497754b90e18b4f8ab8bdea9fc4f2d86e6056a00e671850b3fec0f04783c1a

stdin parent=Production Pipeline/First Run/HOST06_V8_A1_STDIN_PARENT.ps1
parent bytes=2,878
parent SHA-256=7f70a245d4e2c74a7af1ceade1e5ab1651638bdd73a9c3aba8bea5b102ec7091

fixture controller=Production Pipeline/First Run/HOST06_V8_A1_STDIN_FIXTURE_CONTROLLER.ps1
controller bytes=2,192
controller SHA-256=f0340fcacc9989f0de92a9ae7196af8b0be6c1915e9600aa462096e126608726
```

All five retained PowerShell sources parse with zero errors. The carrier,
launcher, and stdin-parent identities independently match Science's projected
targets exactly. The launcher and parent require the corrected carrier identity
before invocation. The obsolete carrier environment binding remains absent;
delivery remains one closed redirected-standard-input stream.

## Exact Science proof

Fresh Science independently reproduces every identity above and proves all
nine v8 controlled paths absent. It then runs exactly one credential-cleared
fixture through the retained stdin parent, launcher, and corrected carrier.
The proof may compile/load/inspect and identity-clean only its owned helper
root and DLL. It must stop at `PT06_CREDENTIAL_GATE` with one child, exact
credential-absent exit, zero request construction, zero `SendAsync`, zero API
sends, zero A1 consumption, and all nine paths absent afterward.

There is no correction, second fixture, retry, alternate transport, API call,
credential value read, media operation, product change, or reveal in Science.
PASS yields `POLISH VIABILITY READY` and returns to fresh Mission for a new
Quartermaster shell. Anything else is exact `HOLD`.

## Immutable boundaries

The official `ImagesResponse` parser, sole-A1 budget, exact prompt/request,
env-only credential handling, response diagnostics, technical/physical/layout/
accessibility/provenance/PBA gates, no-reveal rule, and cleanup contract remain
unchanged from v8. A1 remains unconsumed. Repository QA quarantine, protected
PDF, training tree, Martin's real browser/profile/save, accepted media,
v7 paths/residuals, opaque roots, VR-65, hidden lore, and unrelated work remain
inaccessible.

The one-path rail, sole unchanged `L02-03`, equal-dignity MH-40 outcomes,
shared RP-012 ending, all null deltas, and `successor=null` remain immutable.

Mission Captain signs **`FIRST RUN SHELL READY / FRSH-005-v1-VR-36 / EXACT
ONE-LF HELPER CORRECTION / FRESH SCIENCE NEXT`**.
