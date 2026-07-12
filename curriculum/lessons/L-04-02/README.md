# L-04-02 — Speech workloads

## Outcome

Distinguish speech recognition, speech synthesis, and spoken prompts to a deployed multimodal model, then trace audio-file configuration and success/cancellation handling.

## Source boundary

**Must know for AI-901:** Speech recognition converts spoken audio to text; speech synthesis converts text to spoken audio. AI-901 also expects responding to spoken prompts with a deployed multimodal model and building a lightweight app with Azure Speech in Foundry Tools. See the [current official source register](../../sources/current-official-source-register.md).

**Course-authored practice:** Scenarios, reasons, and 12/12 gates are original. No microphone, speaker, audio capture, service call, or live Speech payload is used.

## Direction cards

| Input | Required output/interaction | Choice |
|---|---|---|
| Spoken audio | Text transcript or captions | Speech recognition / speech to text |
| Written text | Generated spoken audio | Speech synthesis / text to speech |
| Spoken question, possibly with image/text context | General model response | Deployed multimodal model spoken-prompt flow |

A microphone or audio file is an input source, not a capability. A speaker or audio file can be an output target. Choose the capability first, then configure sources and destinations.

## Guided contrasts

- Live captions: audio → text, so recognition.
- Read a notice aloud: text → audio, so synthesis.
- Ask a general model a spoken question about an image: multimodal model interaction, not merely transcription.

## Lightweight Speech flow

1. Choose recognition or synthesis from the required direction.
2. Reverify and configure the current Speech resource/client and authentication.
3. Bind the intended input: microphone or audio file for recognition.
4. Bind the intended output: speaker or audio file for synthesis.
5. Run the operation.
6. Inspect the result reason; handle recognized/synthesized content and cancellation/error explicitly.

## Assessment and remediation

Complete `primary_answers.json` closed-note:

```powershell
python validate_speech_workloads.py --form primary --check primary_answers.json
```

For a miss, name input modality, required output, service/model choice, file direction, and result branch. Then complete the unseen form:

```powershell
python validate_speech_workloads.py --form transfer --check transfer_answers.json
```

Readiness requires 12/12 on both forms, all three workload patterns and all three client safeguards per form, plus one closed-note explanation. Review weak contrasts tomorrow, then after 3, 7, and 14 days.

## Privacy, accessibility, and volatility

No audio, paths, transcript text, spoken prompt, or service body is stored as mastery evidence. Every audio scenario has a text equivalent; controls are keyboard accessible, labeled, untimed, and not color-only. Reverify SDKs, API shapes, endpoints, authentication, languages, voices, formats, regions, quotas, pricing, and preview status before live use.
