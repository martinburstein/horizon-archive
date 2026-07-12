# L-06-01 — Objective-by-objective mastery review

## Purpose and source boundary

The current [AI-901 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901) controls this review: eight concept/capability objectives and seven Foundry implementation objectives. Official Foundry and Azure AI pages in the [source register](../../sources/current-official-source-register.md) support current product claims. Course-authored scenarios are practice, not Microsoft exam questions, and this gate does not guarantee an exam result.

## Evidence ledger

Create one row for each of the 15 objective IDs. Use only these statuses:

- `ready`: passed primary and fresh-transfer evidence without notes.
- `remediate`: attempted but missed objective selection or evidence reasoning.
- `not_yet_assessed`: no valid attempt exists.

Confidence is useful tutoring data but never changes status. A domain average cannot hide an objective gap.

## Guided practice

For each objective:

1. Read its current official wording.
2. Name what observable evidence would prove it: explanation, scenario decision, portal rehearsal, client trace, schema, or safe failure handling.
3. Link the evidence to the prerequisite lesson artifact.
4. Mark the status. If evidence is missing, use `remediate` or `not_yet_assessed`, never “probably ready.”
5. Keep concept evidence separate from implementation evidence.

Example: explaining endpoint versus deployment supports a concept boundary, but independently tracing endpoint, credential, request, response, and errors is the implementation evidence for `AI901-D2-O3`.

## Retrieval and strict assessment

Closed-note, list all 15 objective IDs under their two domains and give one evidence artifact for each. Repeat tomorrow, in three days with shuffled scenarios, and in seven days after reverifying the study guide.

Run the primary command in [check.md](check.md). Every miss marks that objective `remediate`; return to its mapped lesson and produce fresh evidence. Then take transfer. Readiness requires 30/30 on both forms—objective plus evidence for every scenario—with all 15 objectives represented and a closed-note explanation of both domains.

## Safeguards

Store status and an evidence pointer, not exam item text, credentials, endpoints, payloads/responses, personal study notes, or external-action requests. Clear working scenario answers and runtime configuration on scene transition; persist the objective ledger separately. Controls use persistent labels, keyboard order, text status (not color), associated feedback, a live region, no timer, and reduced motion.

Exam objectives/weights, portal labels, SDK/APIs, models, tools, regions, prices, previews, and deprecations are volatile. Reverify the study guide and the [Foundry hub](https://learn.microsoft.com/en-us/azure/foundry/) before a final readiness decision.

No review answer, simulated evidence, prompt, or confidence rating authorizes a service call, credential use, Azure mutation, publication, disclosure, purchase, deletion, or other external/destructive action. Such action requires separate verified scope, authority, and confirmation.
