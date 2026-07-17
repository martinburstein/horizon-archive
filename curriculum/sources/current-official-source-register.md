# Current Official Source Register

Verified: 2026-07-16

This register separates official, time-sensitive Microsoft facts from generated bridge instruction. Recheck it before publishing lessons or beginning the final exam-readiness sprint.

## Controlling exam source

- `OFFICIAL-AI901-STUDY-GUIDE`: [Study guide for Exam AI-901](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901)
  - Skills measured as of April 15, 2026.
  - Domain weights: Identify AI concepts and capabilities, 40–45%; Implement AI solutions by using Microsoft Foundry, 55–60%.
  - Candidate prerequisites explicitly include Python syntax and programming techniques plus familiarity with Azure resources.
  - The guide says candidates should be familiar with REST APIs, SDKs, and CLIs.
  - A score of 700 or greater is required to pass. This curriculum uses higher internal gates; those gates are coaching policy, not Microsoft scoring policy.
  - Reverified July 16, 2026: the page remains last updated July 13, 2026 and the April 15, 2026 objective set and domain weights are unchanged.
  - Reverified for RP-004 A3 on July 16, 2026: `Identify AI workloads` still explicitly covers generative and agentic AI, text analysis, speech, computer vision, and information extraction. The packet uses separate course-authored cases and never infers a workload from story scenery.
  - Reverified for RP-005 A3 on July 16, 2026: the guide still explicitly names keyword extraction, entity detection, sentiment analysis, and summarization as common text-analysis techniques. RP-005 uses separate neutral course-authored cases selected by requested output; SC-06 frequency is never a technique, metric, model, or answer cue.
  - Reverified for RP-006 A3 on July 16, 2026: the guide still explicitly requires recognition of speech recognition and speech synthesis features/capabilities. RP-006 uses neutral course-authored input/output-direction cases; SC-07 order, sound, and story content are never capability or causation cues.
  - Reverified for RP-007 A3 on July 16, 2026: the guide still explicitly requires identification of computer-vision and image-generation capabilities. RP-007 uses separate neutral course-authored existing-input versus new-output cases; SC-08 layout, association, order, motion, sound, and story content are never capability, unity, or causation cues. The Microsoft Computer Vision overview was also checked for current official capability context. No third-party source or exam item was used, and course gates do not guarantee an exam result.

## Priority Foundry sources checked first

- `OFFICIAL-FOUNDRY-HUB`: [Microsoft Foundry documentation](https://learn.microsoft.com/en-us/azure/foundry/)
  - Current navigation authority for Foundry Models, Agent Service, Tools, SDKs, observability, and governance.
- `OFFICIAL-FOUNDRY-SDK`: [Microsoft Foundry SDKs and Endpoints](https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview)
  - The current page describes the Foundry SDK as a thin client over Foundry project APIs through one project endpoint.
  - Its current scenario chooser distinguishes Foundry SDK, Agent Framework, OpenAI SDK, Anthropic SDK, and service-specific Foundry Tools SDKs; these routes are related but not interchangeable.
  - The current route table also distinguishes Foundry project, OpenAI v1, Anthropic, and tool-specific endpoint families. Foundry SDK and Agent Framework can share the Foundry project boundary without becoming interchangeable client routes.
  - A Foundry resource and an Azure OpenAI resource do not expose the same endpoint set.
  - For current Python examples in the new Foundry portal, the page lists `azure-ai-projects>=2.0.0`.
  - The current Python client pattern uses `AIProjectClient`, `DefaultAzureCredential`, and an OpenAI-compatible client obtained from the project client.
  - The current samples use Microsoft Entra ID authentication with `DefaultAzureCredential`. Do not hardcode credentials.
- `OFFICIAL-FOUNDRY-RESOURCE-QUICKSTART`: [Set up Microsoft Foundry resources](https://learn.microsoft.com/en-us/azure/foundry/tutorials/quickstart-create-foundry-resources)
  - Current portal authority for project creation, model deployment, provisioning verification, project endpoint, deployment name, access, and scoped cleanup. Portal labels and example models are volatile.
- `OFFICIAL-FOUNDRY-AGENTS`: [Foundry Agent Service overview](https://learn.microsoft.com/en-us/azure/foundry/agents/overview)
  - Authority for agent concepts and current service behavior.
- `OFFICIAL-FOUNDRY-PROMPT-AGENT-QUICKSTART`: [Create a prompt agent](https://learn.microsoft.com/en-us/azure/foundry/agents/quickstarts/quickstart-prompt-agent)
  - Current portal workflow authority for configuring a model, instructions, tools, and testing a prompt agent. Portal labels and API details are volatile.
- `OFFICIAL-FOUNDRY-RESPONSIBLE-AI`: [Responsible use of AI overview](https://learn.microsoft.com/en-us/azure/foundry/responsible-use-of-ai-overview)
  - Authority for the current Discover, Protect, and Govern responsible AI lifecycle in Microsoft Foundry.
- `OFFICIAL-RESPONSIBLE-AI-TRAINING`: [Apply responsible AI principles](https://learn.microsoft.com/en-us/training/modules/apply-responsible-ai-principles/)
  - Official instruction covering fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability.
- `OFFICIAL-GENAI-CONCEPTS`: [Introduction to generative AI and agents](https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/)
  - Beginner authority for core generative AI, large language model, prompt, and agent concepts.
- `OFFICIAL-FOUNDRY-MODEL-ENDPOINTS`: [Endpoints for Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/endpoints)
  - Authority for the model-versus-deployment distinction and deployment-name request behavior.
- `OFFICIAL-FOUNDRY-DEPLOYMENT-TYPES`: [Deployment types for Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/deployment-types)
  - Authority for current standard/provisioned categories, processing scope, capacity, and preview labels.
- `OFFICIAL-FOUNDRY-PROMPT-PARAMETERS`: [Prompt engineering techniques](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/prompt-engineering)
  - Supporting authority for probabilistic completion behavior and temperature/top-p tradeoffs; model-specific support must be reverified.
- `OFFICIAL-FOUNDRY-SYSTEM-MESSAGES`: [System message design](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/advanced-prompt-engineering)
  - Authority for system-message role, scope, boundaries, output contracts, fallback behavior, safety constraints, and test/iterate guidance. Model-specific behavior remains volatile.
- `OFFICIAL-CONTENT-UNDERSTANDING`: [Azure Content Understanding overview](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview)
  - Authority for current multimodal information-extraction capabilities and terminology. The current page describes document, image, video, and audio inputs, user-defined output formats, analyzer field schemas, and structured JSON.
- `OFFICIAL-CONTENT-UNDERSTANDING-ANALYZER`: [Content Understanding analyzer reference](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/concepts/analyzer-reference)
  - Authority for current analyzer configuration and `fieldSchema` concepts. Exact payloads and supported field behavior are volatile.
- `OFFICIAL-CONTENT-UNDERSTANDING-QUICKSTART`: [Content Understanding REST API and SDK quickstart](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/quickstart/use-rest-api)
  - Current implementation entry point for multimodal analysis. The page currently uses the GA `2025-11-01` API and current SDK examples; reverify before live use.

## Official workload sources

- `OFFICIAL-AZURE-LANGUAGE`: [Azure Language in Foundry Tools overview](https://learn.microsoft.com/en-us/azure/ai-services/language-service/overview)
  - Authority for text-analysis capabilities including entity recognition, key phrase extraction, sentiment analysis, and summarization.
- `OFFICIAL-AZURE-SPEECH`: [Azure Speech in Foundry Tools overview](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/overview)
  - Authority for speech-to-text, text-to-speech, and related speech capabilities.
- `OFFICIAL-AZURE-VISION`: [Azure Vision in Foundry Tools overview](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/overview)
  - Authority for visual-input analysis terminology. The page currently flags Image Analysis 4.0 as deprecated, so implementation lessons must verify the recommended current route rather than copying legacy APIs.

## Provenance rules

- A statement labeled **Official fact** must trace to an official Microsoft source above or another explicitly cited Microsoft Learn page.
- A statement labeled **Bridge instruction** is course-authored explanation, analogy, scaffolding, practice, or simulated data. It must not be represented as Microsoft wording or product behavior.
- A statement labeled **Coaching policy** is an internal readiness rule, such as an 85% lesson gate or a two-exam streak. It is not an exam rule.
- UI labels, SDK versions, endpoints, authentication steps, product availability, and exam weights are volatile. Verify them again within seven days of a live lab or exam booking.
- AI-900 material can reinforce overlapping fundamentals but cannot override this AI-901 guide.
