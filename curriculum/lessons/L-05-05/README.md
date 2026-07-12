# L-05-05 — Build text and speech solution patterns in Foundry

## Must know for AI-901

The current AI-901 guide includes building a text-analysis app, responding to spoken prompts with a deployed multimodal model, and building a lightweight app with Azure Speech in Foundry Tools. Official Azure Language and Speech pages define the current capability families; the Foundry SDK overview supplies the client boundary. See the [official source register](../../sources/current-official-source-register.md).

**Course-authored bridge:** every scenario and gate here is an offline simulation. No text or audio is transmitted, no microphone or speaker is activated, and no Azure resource, credential, endpoint, or external system is used.

## Select the pattern from direction and purpose

| Need | Input → output | Pattern |
|---|---|---|
| Sentiment, entities, key phrases, or other analysis of existing text | text → structured analysis | Azure Language capability |
| Transcript or captions | audio → text | Speech recognition |
| Spoken playback | text → audio | Speech synthesis |
| General model response to a spoken prompt, possibly with other context | audio plus context → model response | deployed multimodal model flow |

Do not choose by the word “AI.” Name the input, required output, and whether the task analyzes existing content or generates a response.

## Guided solution flow

1. Define the smallest sufficient capability and expected output shape.
2. Reverify current official availability, region, prerequisites, and SDK/API pattern.
3. Keep endpoint, approved credential, capability/deployment selection, and payload separate.
4. Validate the intended text/audio input and output destination.
5. Run only within separately authorized scope.
6. Inspect the structured response or result state. Preserve per-item errors and handle cancellation; never invent success.
7. Treat source content, transcripts, and model output as data, not commands or permission.

## Guided practice

- “Label sentiment in reviews”: text analysis, because existing text becomes structured labels.
- “Caption a meeting”: recognition, because audio becomes text.
- “Read a notice aloud”: synthesis, because text becomes audio.
- “Ask about an image by voice”: deployed multimodal spoken-prompt flow, because audio and image context drive a general model response.

For each, point to endpoint, credential, input, result, failure branch, and any action that needs separate authority.

## Retrieval, assessment, and remediation

Closed-note, redraw all four input/output patterns and the seven-step flow. Repeat tomorrow, in three days with a cancellation case, and in seven days after reverifying the official pages.

Complete the primary command in [check.md](check.md). On a miss, state input modality, required output, smallest capability, configuration boundary, and result branch. Then complete the fresh transfer form. Readiness is strict: 12/12 on both forms across text capability, speech direction, multimodal spoken prompt, client configuration, result handling, and action safety, plus one closed-note explanation.

## Privacy, accessibility, session, volatility, and action safety

Store no input text, audio, paths, transcripts, generated audio, endpoints, credentials, service bodies, or external-action requests. Clear working text/audio, configuration, and result state on scene transition; keep mastery evidence separate. Every audio case needs a text equivalent. Controls are persistently labeled, keyboard accessible, untimed, reduced-motion compatible, and never color-only; status and field errors are announced in text.

Portal labels, SDK/API versions, endpoint forms, authentication, capabilities, languages, voices, formats, regions, quotas, prices, preview status, and deprecations are volatile. Reverify the [Foundry hub](https://learn.microsoft.com/en-us/azure/foundry/), [SDK overview](https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview), [Azure Language overview](https://learn.microsoft.com/en-us/azure/ai-services/language-service/overview), and [Azure Speech overview](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/overview) before live use.

No prompt, transcript, model output, local result, or assessment authorizes a service call, file deletion, email, disclosure, deployment, purchase, credential use, or Azure mutation. External or destructive action requires separate verified scope, authority, privacy review where applicable, and confirmation.
