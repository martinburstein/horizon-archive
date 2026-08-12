# Horizon Archive First Run Work Order

Work Order ID: `FRWO-005-v11`

Title: **Stranded Lens Cradle - Dictionary-Safe Image Response Attempt**

Stage / stable agent: Operations Planning Major / `operations_planning_major`

Disposition: **`WORK ORDER READY / ONE FRESH D1 / DICTIONARY-SAFE
FORWARD-COMPATIBLE PARSER / NO RETRY OR D2 / FRESH MISSION`**

Date: **2026-08-12**

Authority: Martin's explicit approval for one further paid request;
`FRCA-005-v10`; `FRVE-005-v10`; `FRPB-001-v2`; `FRCL-004-v2`.

Exact next recipient: one fresh Mission Captain / `mission_captain`

## Finite attempt and correction

V10 C1 is consumed and inaccessible. V11 creates exactly `{D1}`: one request,
one output, no retry, D2, relaunch, alternate transport/model/endpoint, edit,
variation, or fallback. D1 begins at the sole `SendAsync` and is consumed
regardless of result.

The exact request and `40,500,000 / 40,000,000 / 30,000,000` response/Base64/
PNG budgets remain unchanged. The semantic parser alone changes:

- use case-sensitive key-set membership, never `.Contains(key)`, for generic
  dictionaries returned by PowerShell 5.1;
- preserve whole-document strict syntax and duplicate rejection;
- require nonnegative integral `created`, exactly one data item, and one string
  `b64_json`;
- validate known request echoes and known usage numerics when present;
- require `url` and `revised_prompt` absent or null;
- ignore bounded unknown metadata after syntax/duplicate validation; and
- preserve canonical Base64, PNG, identity, cleanup, no-reveal, physical,
  layout, accessibility, provenance, runtime, validation, and rollback gates.

Fresh paths:

```text
helper root=C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-native-identity-v11-6cf2e401-916a-4457-9396-2fd2b228547d
helper DLL=<helper root>\Host06FileIdentity.dll
live root=C:\Users\marti\AppData\Local\Temp\horizon-archive-host06-api-v11-8bd3fc8a-9097-423a-8941-2cbf188f5f34
stage=<live root>\.attempt-D1-817cfc16-b9a3-4812-af66-64f672a48c0f.stage
target=<live root>\attempt-D1.png
decision=<live root>\.attempt-D1.review-v1
product root=C:\Users\marti\OneDrive\Desktop\Horizon Archive\Visual Direction\Production Masters\2026-08-10-first-run-host06
product raster=<product root>\host06-stranded-lens-cradle-master-v1.png
product provenance=<product root>\PROVENANCE.md
```

Mission must retain distinct v11 sources, prove parser-zero and exact hashes,
run a dictionary-safe synthetic fixture plus one credential-cleared no-send
fixture, prove all nine paths absent, and issue the complete shell. Operations
performs zero credential/API/media/path/product activity.

All route, lesson, canon, state, privacy, accessibility, ending, protected
path, accepted-media, and no-reveal boundaries remain exact.

Operations signs **`WORK ORDER READY / FRWO-005-v11 / ONE D1 /
DICTIONARY-SAFE PARSER / FRESH MISSION / NO CURRENT API AUTHORITY`**.
