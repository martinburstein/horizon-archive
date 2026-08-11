# Next Instance Handoff

Workflow: `FIRST_RUN_AGENT_WORKFLOW.md`

Current disposition: **`HOLD / SOLE COMBINED SAME-PROCESS CHILD REJECTED AT
SCIENCE CLASSIFICATION / NO RETRY / FRVE-005-v7-VR-10`**

Current Work Order: `FRWO-005-v7`

Current Science return: `FRVE-005-v7-VR-10`

Current Mission shell decision: `FRSH-005-v1-VR-12`

Quartermaster return: `FRCA-005-v4`

Effective shell: `FRSH-005-v1` through `FRSH-005-v1-VR-12`

Effective treatment / blueprint: `FRDT-005-v1-VR-01` /
`FRPX-005-v1-VR-01`

Functional report: `FRCE-005-v1-VR-05`

Corrected inert code candidate:
`f4b2062508f9e0606953a4cc9bcdaff09b66ebc4`

Corrected candidate tree:
`92b22fc56d79d18cf1abf7213c5268c9e4149830`

Immutable accepted-media manifest: `FRAM-001-v1`, file SHA-256
`a674c337b377de113eaa4c6763bd431afc73ab613374a76501aa8c5ce37e5437`,
exact `17 / 37,410,731`, canonical digest
`c7ca95201029b490f2460a846e3dc2a64a26775b57e8c587cbc2d874df654d99`

Released predecessor: `FRAB-003-v1 / FIRST RUN PASS RELEASED`

Exact next owner: **one fresh Mission Captain / `mission_captain`**

## Science result

`FRVE-005-v7-VR-10` independently proved the unchanged launcher, prefix,
tail, and combined identities; parser; prefix equality; ordered stages;
Windows limits; and exhaustive bounded result-normalizer schema and secrecy
rejection. Science then invoked the exact credential-cleared no-request child
exactly once.

The child exited `87`, but the parent did not produce the sole accepted
semantic identity. It retained only:

```text
SCIENCE_HOST06_COMBINED_RESULT_V1|outcome=REJECTED_CHILD_RESULT|earliestStage=SR06_CHILD_CLASSIFY|code=ASSERTION_FAILED|childExit=87|childInvocations=1|credentialValueReads=0|requestConstructions=0|sendAsyncCalls=0|directSends=0|ordinalsConsumed=0|helperRootAbsent=true|helperDllAbsent=true|liveRootAbsent=true|ordinal2StageAbsent=true|ordinal2TargetAbsent=true|ordinal2DecisionAbsent=true|ordinal3StageAbsent=true|ordinal3TargetAbsent=true|ordinal3DecisionAbsent=true|productRootAbsent=true|productRasterAbsent=true|productProvenanceAbsent=true|scienceFixtureRootsAbsent=true
```

This is not `ACCEPTED_NO_REQUEST_STOP / PT06_CREDENTIAL_GATE /
CREDENTIAL_ABSENT`. The exact-one boundary forbids another child or retry in
this Science run. Exit `87`, static control flow, zero activity, and final
absence do not replace the missing accepted runtime result.

No API/generation request was constructed or sent; `SendAsync`, direct sends,
credential value reads, and ordinal consumption remain exact `0`. Helper,
live, ordinal, product, and Science fixture controlled paths remain absent.
No disallowed diagnostic or opaque value was retained.

## Exact next action

One fresh Mission Captain reads the complete active intake, full Mission
profile, complete `FRVE-005-v7-VR-10`, complete `FRSH-005-v1-VR-12`,
complete `FRVE-005-v7-VR-09`, complete `FRSH-005-v1-VR-11`,
`FRCA-005-v4`, complete `FRSH-005-v1-VR-10`, complete
`FRSH-005-v1-VR-09`, decisive `FRVE-005-v7-VR-08`, complete
`FRWO-005-v7`, decisive `FRVE-005-v7-VR-03`, the complete effective shell,
treatment, blueprint, `FRCE-005-v1-VR-05`, immutable `FRAM-001-v1`, and both
exact literal blocks.

Mission issues exactly one new versioned `FIRST RUN SHELL READY`, `REVISE`, or
`HOLD` decision adjudicating the rejected `SR06_CHILD_CLASSIFY /
ASSERTION_FAILED` result. It may define only a bounded correction consistent
with the exact-one lifetime already consumed in `FRVE-005-v7-VR-10`; it may
not reinterpret that run as acceptance or silently retry it.

Mission may not route to Quartermaster, execute generation/API, allocate the
live root or product target, read a credential value, construct/send a request,
call `SendAsync`, consume ordinal `2`, inspect media/pixels, change
product/tests, run E2E, reveal, advance maturity, close an OPEN record, access
a residual or VR-65, schedule, automate, push, release, or call
`FIRST RUN COMPLETE`.
