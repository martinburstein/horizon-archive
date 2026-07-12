# L-05-06 — Build vision and image-generation solution patterns in Foundry

## Must know for AI-901

The current AI-901 guide includes interpreting visual input with a deployed multimodal model, generating images with a deployed image-generation model, and building a lightweight computer-vision app with Azure Vision in Foundry Tools. The [official source register](../../sources/current-official-source-register.md) links the controlling guide, Foundry SDK overview, and Azure Vision overview.

**Course-authored bridge:** this is an offline decision and client-boundary lab. It opens, uploads, generates, publishes, or deletes no media and calls no service.

## Choose by input and required output

| Need | Pattern |
|---|---|
| Structured interpretation of existing pixels | image-analysis capability |
| General response using image plus text context | deployed multimodal visual-prompt model |
| New still visual from a prompt | deployed image-generation model |

## Guided solution flow

1. Decide whether media is existing input or a requested new output.
2. Define the output contract: structured analysis, general response, or generated artifact.
3. Reverify a current deployment/capability, region, and SDK/API pattern.
4. Keep endpoint, approved credential, deployment/capability selection, and payload separate.
5. Validate media bytes, declared type, format/size limits, and request shape; an extension alone is insufficient.
6. Parse the result for the selected operation. Preserve errors, label generated content, and record appropriate provenance.
7. Require separate authority and review for publication, disclosure, deletion, or other external consequences.

## Guided practice

- Existing photo to labels: analysis.
- Diagram plus question to explanation: multimodal visual prompt.
- Written brief to new poster: image generation.
- Realistic generated image proposed as observed evidence: label and segregate it; appearance is not provenance.

For each case, identify the deployed capability, input validation, output shape, failure branch, provenance, and action boundary.

## Retrieval, assessment, and remediation

Tomorrow, redraw the three-pattern table and seven-step flow without notes. In three days, solve an invalid-media and unsupported-deployment case. In seven days, reverify the official pages before repeating transfer.

Complete the primary command in [check.md](check.md). For each miss, name whether media is existing or new, required output, supported deployment, request contract, result shape, provenance, and action boundary. Then complete fresh transfer. Readiness requires 12/12 on both forms across image analysis, multimodal prompting, image generation, request contract, result/provenance, and action safety, plus one closed-note flow explanation.

## Privacy, accessibility, session, volatility, and action safety

Store no media bytes/paths, visual descriptions, prompts, generated media, endpoints, credentials, service bodies, or external-action requests. Clear working media, prompt, configuration, and result state on scene transition; persist mastery separately. Every visual has a text equivalent. Controls have persistent labels, keyboard order, textual field feedback, a live status region, no timer, reduced motion, and no color-only meaning.

Portal labels, supported models/capabilities, SDK/API versions, endpoints, authentication, formats/limits, regions, quotas, prices, safety controls, previews, and deprecations are volatile. Reverify the [Foundry hub](https://learn.microsoft.com/en-us/azure/foundry/), [SDK overview](https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview), and [Azure Vision overview](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/overview) before live use.

No prompt, analysis, generated artifact, local result, or assessment authorizes a service call, upload, publication, disclosure, file deletion, deployment, credential use, or Azure mutation. External or destructive action requires separate verified scope, authority, review, and confirmation.
