# Next Instance Handoff

Workflow: `FIRST_RUN_AGENT_WORKFLOW.md`

Current disposition: **`FIRST RUN SHELL READY / FAILURE EVIDENCE TRANSPORT
CORRECTION ONLY / FRSH-003-v1-VR-44`**

Stage and release remain HOLD.

Exact next owner: **Combat Engineer**

Immediate control: `FRSH-003-v1-VR-44`

Immediate return: VR-43 diagnostic-only E2E failure.

Mission predecessor source:
`aa89a4c7aae8ebad8925a868765175448779dae5`

Product / validation / diagnostic / evidence identities remain respectively:
`a91763e28d488f31f8cf7d40ece0b2682246ba9b` /
`4cd7fbf31291671dd28c0743b44a7c49aaad82bb` /
`2cccbfe104e0dc88b17343fe7a2950afe0c2a9cc` /
`ca89a679195c11d441a76e6c02983a6436f2ccb2`.

VR-43 ran one E2E for `61.152s`: exit failure, diagnostic inventory exact,
`failureCount=57`, no summary, no verifier, exact preview/root/port cleanup.
Failure paths/layouts were not captured before deletion and browser closure is
unknown. This is a transport-control defect, not a product finding.

Fresh-child capacity remains unavailable; Mission context reuse is disclosed
and non-evidence.

Combat may change only the E2E harness, optional diagnostic transport helper,
FRRC-002 entry, and existing Sixfold static control named in VR-44. Prefer
existing complete console/diagnostic transport if present; otherwise add only
the missing full sorted `failurePaths`, full sorted `failuresByLayout`, and
owned-lifecycle `browserClosed` transport.

The later failure wrapper must synchronously capture canonical compact JSON,
base64-encode it before QA-root cleanup, clean up, then emit only:

```text
failureCount=<int> failurePathCount=<int> failureLayoutCount=<int> browserClosed=<0|1> failureDetailBytes=<int> failureDetailBase64=<base64> transportExit=<0|1>
```

Run only FRRC JSON parse, `node --check` on changed Node files, and the exact
focused command requiring unchanged `68/68`. No E2E, preview, browser, build,
served identity, verifier, product change, or broader test is authorized.

Return **`FAILURE EVIDENCE TRANSPORT READY / JSON PASS / NODE PASS / FOCUSED
68/68 / STOP / RETURN TO FRESH MISSION`** or fail-closed HOLD.

All seven OPEN divergences and every frozen player/product meaning remain exact.
No downstream stage or release action is authorized.
