# Next Instance Handoff

Workflow: `FIRST_RUN_AGENT_WORKFLOW.md`

Current disposition: **`HOLD / STAGE-2 TOOL REJECTION / STAGE-4 PARSER
FAILURE / RETAINED ROOT TOKEN / NO E2E / FRCE-003-v1-VR-53`**

Stage and release remain HOLD.

Exact next owner: **fresh Mission Captain**

Immediate evidence: `Production Pipeline/First Run/FIRST_RUN_FUNCTIONAL_REPORT_FRCE-003-v1-VR-53.md`

Starting shell revision: `d78d064f3f994b8f0a3cd5ab2f48c05ce70a446e`

Stage 1 passed fully and retained one root. Exact cleanup authority:

```text
rootTokenB64=QzpcVXNlcnNcbWFydGlcQXBwRGF0YVxMb2NhbFxUZW1wXGhvcml6b24tYXJjaGl2ZS1mcnJjMDAyLTRkMjliOWQ2LTYzMzItNGM3Yy04ODdhLTcwMWI3ZDFmOGEzNQ==
rootTokenSha256=f9f20ff1dc54ca62993715bbc94d514f0f89570929b438bdf7b006c4a5ab703d
```

Stage 2 was rejected by tool safety before execution. No port query, preview,
or PID exists. Stage 3 did not run; E2E invocation count remains zero.

The mandatory Stage 4 call used PIDs `0/0` but failed at PowerShell parse time
before token verification or cleanup because compact `foreach` syntax omitted
the required space before `in`. No Stage 4 scalar was emitted and no deletion
executed. Combat did not retry or infer a path.

Fresh Mission must first adjudicate and issue an exact token-bound cleanup-only
authority. It must not enumerate or discover paths, run E2E, launch previews,
or infer root absence. Only after cleanup is proven may Mission consider a new
live authority.

Geometry correction / diagnostic transport lineage remains
`8aa1dcaf2d5a347cc21ec48a4d6022485fe7cd97` /
`6c64eb354b7dbb467df5725e2cae4eb67092ddc7`. The cumulative accepted gates,
ten prior OPEN classifications, and every frozen identity and meaning remain
exact. Diagnostic evidence remains non-release, forbidden verifier input, and
no-retry. No downstream stage or release action is authorized.
