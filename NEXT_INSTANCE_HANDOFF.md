# Next Instance Handoff

Workflow: `FIRST_RUN_AGENT_WORKFLOW.md`

Current disposition: **`FIRST RUN SHELL READY / IN-MEMORY TOKEN DIGEST-DOMAIN
CORRECTION PROOF ONLY / FRSH-003-v1-VR-62`**

Stage and release remain HOLD.

Exact next owner: **fresh Combat Engineer**

Immediate control: `FRSH-003-v1-VR-62`

Mission source: `b21fa15be4e3fa12f1daedc498ebfd48ec6c3b79`

VR-61 stopped before root or artifact access because its cleanup wrapper
reported a digest mismatch. No file/root deletion or inspection occurred.

Mission's literal in-memory audit proves the supplied digest is correct for
the Stage-1 contract: it matches the standard-base64 decoded bytes, their
strict UTF-8 round-trip bytes, and the unchanged normalized-path UTF-8 bytes.
It does not match the ASCII bytes of the base64 token text or lower/upper-cased
path UTF-8 variants.

Mission records **`REQUIRED CORRECTION / EXECUTION CONTROL / CLEANUP TOKEN
DIGEST IMPLEMENTATION / OPEN / VR-61`** as a thirteenth separate OPEN
classification. This is not token corruption, root ambiguity, or a substantive
E2E/candidate finding.

Fresh-child capacity remains unavailable; Mission context reuse is disclosed
and non-evidence.

Combat may run one in-memory correction proof only using the literal token and
digest. Decode base64 to `[byte[]]`, strict-UTF-8 round-trip, pure
`GetFullPath` normalization without filesystem access, and disposable SHA-256
over the decoded bytes. Separately prove the base64-ASCII and case-folded
domains do not match. Emit only the VR-62 scalar.

No filesystem/root/artifact existence or identity access, deletion,
enumeration, preview, browser, E2E, verifier, root creation, alternate token,
or retry is authorized. Cleanup remains deferred until fresh Mission accepts
an exact digest-domain proof.

The substantive VR-60 E2E PASS, consumed one-E2E budget, frozen candidates/
gates/invariants, twelve prior OPEN classifications, and new VR-61 digest
classification remain exact. No downstream action is authorized.
