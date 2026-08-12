# Horizon Archive First Run Work Order

Work Order ID: `FRWO-005-v10`

Title: **Stranded Lens Cradle - Corrected 4K Envelope Attempt**

Stage / stable agent: Operations Planning Major / `operations_planning_major`

Disposition: **`WORK ORDER READY / ONE FRESH C1 / CORRECTED 4K RESPONSE
ENVELOPE / FRESH MISSION REQUIRED / NO RETRY OR C2`**

Date: **2026-08-12**

Authority: Martin's active bounded Host 06 Image API instruction;
`FRCA-005-v9`; `FRVE-005-v9-VR-01`; `FRPB-001-v2`; `FRCL-004-v2`.

Exact next recipient: one fresh Mission Captain / `mission_captain`

## Operations decision and finite domain

V9 B1 is permanently consumed at HTTP `200` / `application/json` /
`responseBytes=cap-exceeded`; its discarded body is not candidate evidence and
all v9 paths remain inaccessible. Science proved the old envelope could reject
a lawful 4K truecolor PNG and approved exact larger finite ceilings.

This Work Order creates exactly one new attempt `{C1}`. C1 begins at one
authoritative `SendAsync` and is consumed regardless of result. There is no
C2, retry, relaunch, alternate endpoint/model/transport, SDK, CLI, browser
generation, edit, variation, reference image, or second output. Any transport,
HTTP, parser, Base64, PNG, identity, review, import, validation, or cleanup
failure closes v10.

## Corrected response and media budgets

The request remains exact: one non-streaming `POST` to
`https://api.openai.com/v1/images/generations`, exact
`HOST06-GEN-PROMPT-v1`, `model=gpt-image-2`, `n=1`, `size=3840x2160`,
`quality=high`, `background=opaque`, `output_format=png`, env-only secret,
redirects disabled, ten-minute timeout, and one `SendAsync`.

Only these limits change from v9:

```text
complete response bytes <= 40,500,000
canonical b64_json characters <= 40,000,000
decoded PNG bytes <= 30,000,000
accepted media inventory <= 18 files / 67,410,731 bytes
```

The carrier must use bounded `65,536`-byte response reads, pre-append checks,
strict UTF-8/no BOM, the unchanged strict official ImagesResponse allowlist,
exactly one canonical Base64 item, decoded-length precomputation, and staged
reference clearing. It may never retain/report a body, JSON, Base64, payload,
key, header, request body, stack, request ID, or account/project identity.

All strict PNG, same-run helper, CreateNew/Flush/handle identity/atomic move,
private no-reveal `PHY-01..12`, six-layout/accessibility, byte-identical import,
provenance, runtime null-slot, learning/state/save/privacy/offline/canon,
tests/build/PBA/served/E2E, cleanup, rollback, and protected-state gates remain
unchanged and conjunctive.

## Fresh controlled paths

```text
helper root=C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-native-identity-v10-ea8cf781-baba-4d6b-bf86-6424f54fab99
helper DLL=<helper root>\Host06FileIdentity.dll
live root=C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-api-v10-3ac708f4-5a20-466e-9c18-14cc66a82d59
stage=<live root>\.attempt-C1-7eb25013-d4b3-46d9-ac8e-c49fd7242161.stage
target=<live root>\attempt-C1.png
decision=<live root>\.attempt-C1.review-v1
product root=C:\Users\marti\OneDrive\Desktop\Horizon Archive\Visual Direction\Production Masters\2026-08-10-first-run-host06
product raster=<product root>\host06-stranded-lens-cradle-master-v1.png
product provenance=<product root>\PROVENANCE.md
```

Mission must prove all nine paths absent, retain a distinct v10 builder,
carrier, launcher, stdin parent, and credential-cleared fixture controller,
freeze exact byte/SHA/parser-zero identities, and run one zero-send fixture
through PT06 before issuing a complete C1 shell. Operations performs no
credential, API, media, path, product, or runtime activity.

Repository QA quarantine, protected PDF, training tree, Martin's browser/
profile/save, accepted media, v7-v9 paths/residuals, opaque roots, VR-65,
hidden lore, and unrelated work remain inaccessible. The exact Host 05 -> Host
06 -> unchanged L02-03 route, MH-40 parity, RP-012, null deltas, and
`successor=null` remain immutable. No reveal is authorized.

Operations signs **`WORK ORDER READY / FRWO-005-v10 / ONE C1 / CORRECTED 4K
ENVELOPE / FRESH MISSION / NO CURRENT API AUTHORITY`**.
