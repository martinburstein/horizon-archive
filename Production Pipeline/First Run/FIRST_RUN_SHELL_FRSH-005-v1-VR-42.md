# First Run Shell - Host 06 Dictionary-Safe D1

Shell ID: `FRSH-005-v1-VR-42`

Stage / stable agent: Mission Captain / `mission_captain`

Work Order / viability / predecessor: `FRWO-005-v11` / `FRVE-005-v10` /
`FRCA-005-v10`

Disposition: **`FIRST RUN SHELL READY / SOLE D1 / DICTIONARY-SAFE
FORWARD-COMPATIBLE RESPONSE PARSER / ONE SEND / NO RETRY / PRIVATE REVIEW`**

Date: **2026-08-12**

Exact next owner: one fresh Quartermaster / `quartermaster`

## Frozen retained sources

```text
BUILD_HOST06_V11_D1_CARRIER.ps1
  25086 / e2d289cfe47129cb63e0a43559c1ed947bf7dfef9a8da79e6f0fe7064f2a340b
HOST06_V11_D1_PRODUCTION_CARRIER.ps1
  34948 / 48a0b3556db83ec5fa6266b3e248c763dd3ed50b009271ea0f39e432152f5392
HOST06_V11_D1_LAUNCHER.ps1
  2639 / a05570a6d3c330bda5d87421c24d1944a20a856b1cb2c170a70e7044a8b0cfa3
HOST06_V11_D1_STDIN_PARENT.ps1
  2880 / b3c375cb06efd5d2ddb7e9b85fc50d2a40130e3dfe7954054d26e598674a6661
HOST06_V11_D1_STDIN_FIXTURE_CONTROLLER.ps1
  2200 / 6ede575905c165288e6961e3fd43a09428a2027fe8430fd0ff8262cb8b1453e4
parserErrors=0 for all five
```

Science's dictionary-safe semantic suite passed `15/15`. The retained carrier
uses case-sensitive key-set membership, keeps whole-JSON duplicate/syntax
validation, requires created/one data/one string canonical b64_json, validates
known echoes and usage, rejects non-null URL/revised prompt, and tolerates only
bounded unknown metadata. The credential-cleared retained fixture passed PT06
with one child, zero credential/request/send/API/D1 activity, exact cleanup,
and all nine paths absent.

## Production authority

Quartermaster invokes only `HOST06_V11_D1_STDIN_PARENT.ps1` exactly once.
D1 begins at the sole `SendAsync` and is consumed regardless of result. There
is no retry, D2, relaunch, fallback, alternate transport/model/endpoint, edit,
variation, reference input, or second output.

All exact request, `40,500,000 / 40,000,000 / 30,000,000` response/Base64/PNG
budgets, same-run helper, strict PNG, materialization identity, private
no-reveal `PHY-01..12`, layout/accessibility, decision, byte-identical import,
provenance, runtime slot, tests/build/PBA/served/E2E, cleanup, rollback, canon,
learning, save/privacy, ending, and protected-state gates from
`FRSH-005-v1-VR-41` remain exact, substituting only v11/D1 source and path
identities.

Mission made zero credential reads, requests, API sends, media operations, or
D1 consumption. The one-path rail, unchanged L02-03, MH-40 parity, RP-012,
null deltas, and `successor=null` remain immutable. No reveal is authorized.

Mission signs **`FIRST RUN SHELL READY / FRSH-005-v1-VR-42 / SOLE D1 /
DICTIONARY-SAFE PARSER / ONE SEND / NO RETRY / FRESH QUARTERMASTER NEXT`**.
