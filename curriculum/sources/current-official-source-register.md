# Current Official Source Register

Verified: 2026-07-11

This register separates official, time-sensitive Microsoft facts from generated bridge instruction. Recheck it before publishing lessons or beginning the final exam-readiness sprint.

## Controlling exam source

- `OFFICIAL-AI901-STUDY-GUIDE`: [Study guide for Exam AI-901](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901)
  - Skills measured as of April 15, 2026.
  - Domain weights: Identify AI concepts and capabilities, 40–45%; Implement AI solutions by using Microsoft Foundry, 55–60%.
  - Candidate prerequisites explicitly include Python syntax and programming techniques plus familiarity with Azure resources.
  - The guide says candidates should be familiar with REST APIs, SDKs, and CLIs.
  - A score of 700 or greater is required to pass. This curriculum uses higher internal gates; those gates are coaching policy, not Microsoft scoring policy.

## Priority Foundry sources checked first

- `OFFICIAL-FOUNDRY-HUB`: [Microsoft Foundry documentation](https://learn.microsoft.com/en-us/azure/foundry/)
  - Current navigation authority for Foundry Models, Agent Service, Tools, SDKs, observability, and governance.
- `OFFICIAL-FOUNDRY-SDK`: [Microsoft Foundry SDKs and Endpoints](https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview)
  - A Foundry resource provides a project endpoint for unified access.
  - For current Python examples in the new Foundry portal, the page lists `azure-ai-projects>=2.0.0`.
  - The current Python client pattern uses `AIProjectClient`, `DefaultAzureCredential`, and an OpenAI-compatible client obtained from the project client.
  - Microsoft recommends Microsoft Entra ID authentication in its samples. Do not hardcode credentials.
- `OFFICIAL-FOUNDRY-AGENTS`: [Foundry Agent Service overview](https://learn.microsoft.com/en-us/azure/foundry/agents/overview)
  - Authority for agent concepts and current service behavior.
- `OFFICIAL-CONTENT-UNDERSTANDING`: [Azure Content Understanding overview](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview)
  - Authority for current multimodal information-extraction capabilities and terminology.

## Provenance rules

- A statement labeled **Official fact** must trace to an official Microsoft source above or another explicitly cited Microsoft Learn page.
- A statement labeled **Bridge instruction** is course-authored explanation, analogy, scaffolding, practice, or simulated data. It must not be represented as Microsoft wording or product behavior.
- A statement labeled **Coaching policy** is an internal readiness rule, such as an 85% lesson gate or a two-exam streak. It is not an exam rule.
- UI labels, SDK versions, endpoints, authentication steps, product availability, and exam weights are volatile. Verify them again within seven days of a live lab or exam booking.
- AI-900 material can reinforce overlapping fundamentals but cannot override this AI-901 guide.

