# Next Instance Handoff

Workflow: `FIRST_RUN_AGENT_WORKFLOW.md`

Current disposition: **`FIRST RUN SHELL READY / FULLY STAGED ONE-E2E
DIAGNOSTIC-CONTROL VERIFICATION / FRSH-003-v1-VR-60`**

Stage and release remain HOLD.

Exact next owner: **fresh Combat Engineer**

Immediate control: `FRSH-003-v1-VR-60`

Mission source: `261390a19b6f1d2a304be8b12a4f5ec4caeceb0c`

VR-59 fixture preclear, hidden direct launch/PID, separate root readiness, and
exact-PID cleanup/absence/port-clear controls all passed. Production and
fixture split control shapes are now independently proven. Fresh-root token,
disposable SHA, and token-bound root deletion controls also remain proven.

Fresh-child capacity remains unavailable; Mission context reuse is disclosed
and non-evidence.

Combat may execute only the ten separate bounded VR-60 calls: port preclear;
root create/token; production launch only; production readiness only; fixture
launch only; fixture readiness only; exactly one E2E evidence branch; fixture
PID cleanup; production PID cleanup; root cleanup. Launch, readiness, process
cleanup, and root cleanup patterns may never be combined.

Exactly one E2E invocation remains. Success requires diagnostic
`checkInventoryExact=true`, `failureCount=0`, `browserClosed=true`, summary 1,
verifier 1 PASS, both PIDs absent/ports clear, and root deleted. Failure
requires full canonical base64 transport before cleanup, no verifier, and no
rerun. Any pre-E2E failure/rejection exhausts this shell without spending E2E
and activates only the applicable independent cleanup calls.

No product/media/protected change, build, test, PBA, formal served-identity
rerun, second E2E, or retry is authorized. Frozen candidates, cumulative
accepted gates/invariants, and all eleven OPEN classifications remain exact.
Return all VR-60 scalars/evidence to fresh Mission; no downstream action is
authorized.
