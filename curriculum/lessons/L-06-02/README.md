# L-06-02 — Weak-area remediation planner

## Outcome and source boundary

Turn every `remediate` or `not_yet_assessed` row from `L-06-01` into a bounded route back to its mapped lesson and current official source. The [AI-901 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901) controls objective scope; implementation details route through the [official source register](../../sources/current-official-source-register.md).

This course-authored planner is offline. It uses no exam item text, service, credential, endpoint, or Azure resource. Completing it does not guarantee an exam result.

## Complete route contract

Every weak objective needs: objective ID; failed dimension; evidence pointer; priority reason; mapped lesson; official source; retrieval task; guided task; fresh transfer task; reassessment rule; and stop/escalate rule. Missing any field means the route is incomplete.

## Guided practice

1. Diagnose the failed dimension: objective selection, reason, concept, workflow, code/client boundary, result handling, or safety.
2. Prioritize repeated measured gaps and current exam scope. Keep spaced retrieval for already-ready objectives.
3. Route to the exact mapped lesson and current official source. Old notes never override current official guidance.
4. Retrieve the rule without notes, complete one guided repair, then solve a new equivalent case.
5. Mark `ready` only after independent fresh evidence passes. Guided or repeated-identical success remains `remediate`.
6. Stop and escalate if official scope is unclear, repeated fresh transfer fails, or the proposed step needs live/external authority.

Example: a wrong reason for `AI901-D2-O3` routes to `L-05-03` and `OFFICIAL-FOUNDRY-SDK`; redraw the client boundaries, repair a guided trace, then pass a new endpoint/credential/deployment case.

## Retrieval, assessment, and remediation

Tomorrow, recreate the six planning boundaries from memory. In three days, route a new concept miss and a new implementation miss. In seven days, reverify the official study guide and source links.

Run the primary command in [check.md](check.md). Remediate each missed planning boundary with `answer_key.json`, then take fresh transfer. The gate is 12/12 on both forms plus a complete route for every weak objective.

## Privacy, accessibility, session, volatility, and safeguards

Store objective IDs, failed dimensions, route identifiers, practice types, and reassessment status—not exam item text, private notes, credentials, endpoints, payloads, responses, or external-action requests. Clear working scenario/runtime state on scene transition; persist routes separately. Controls use persistent labels, keyboard order, text status rather than color, associated feedback, a live region, no timer, and reduced motion.

Exam objectives/weights and Foundry portal, SDK/API, model, tool, price, preview, and deprecation details are volatile. Reverify them before reassessment.

No status, plan, prompt, or local simulation guarantees exam success or authorizes a service call, credential use, Azure mutation, email, disclosure, purchase, publication, or deletion. External/destructive action requires separate verified scope, authority, privacy review where applicable, and confirmation.
