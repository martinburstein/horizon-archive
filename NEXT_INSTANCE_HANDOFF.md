# Next Instance Handoff

Workflow: `FIRST_RUN_AGENT_WORKFLOW.md`

Current disposition: **`FIRST RUN SHELL READY / EXACT TOKEN-BOUND RETAINED-ROOT
CLEANUP ONLY / FRSH-003-v1-VR-54`**

Stage and release remain HOLD.

Exact next owner: **fresh Combat Engineer**

Immediate control: `FRSH-003-v1-VR-54`

Mission source: `8d70921d7d3c6553a29540ea4e83f1db16cf6685`

Exact retained-root authority:

```text
rootTokenB64=QzpcVXNlcnNcbWFydGlcQXBwRGF0YVxMb2NhbFxUZW1wXGhvcml6b24tYXJjaGl2ZS1mcnJjMDAyLTRkMjliOWQ2LTYzMzItNGM3Yy04ODdhLTcwMWI3ZDFmOGEzNQ==
rootTokenSha256=f9f20ff1dc54ca62993715bbc94d514f0f89570929b438bdf7b006c4a5ab703d
prodPid=0
fixturePid=0
```

VR-53 Stage 1 passed and retained exactly this root. Stage 2 was rejected by
tool safety before execution and is **`EXECUTION-CONTROL REJECTION / TOOL
SAFETY / NON-EXECUTED / NO LIVE / VR-53 STAGE 2`**. Stage 4 then failed at
PowerShell parse time before token verification or cleanup because both compact
`foreach` statements omitted the required space before `in`.

Mission records **`REQUIRED CORRECTION / EXECUTION CONTROL / CLEANUP PARSER /
RETAINED ROOT / OPEN / VR-53 STAGE 4`** as an eleventh separate OPEN
classification. Neither event is a candidate/product finding. E2E invocation
count remains zero.

Fresh-child capacity remains unavailable; Mission context reuse is disclosed
and non-evidence.

Combat may execute exactly one cleanup-only call. Decode the literal token as
strict UTF-8, recompute/compare its digest with the proven disposable SHA
vector, normalize and prove its exact direct OS-temp-child identity, repository
exclusion, predecessor distinction, and existence. The PID loop must be
`foreach ($processId in @(...))` and will inspect no process because both
inputs are 0. The port loop must be `foreach ($portNumber in @(...))` and may
only prove exact ports 4173/4184 clear. Prove the exact root is empty, delete it
once with `[System.IO.Directory]::Delete($resolvedRoot,$false)`, and prove
absence.

No root creation, other-path inspection, process/listener recovery, preview,
browser, E2E, diagnostic, transport, summary, verifier, product/media/
protected action, or retry is authorized. Return only the VR-54 scalar.

Cumulative gates, frozen candidates/invariants, the ten prior OPEN
classifications, and the new VR-53 cleanup classification remain exact. No
downstream stage or release action is authorized.
