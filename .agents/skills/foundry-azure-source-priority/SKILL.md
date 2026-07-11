# Foundry / Azure AI Source Priority Skill

## Purpose
When answering questions about Microsoft Foundry, Azure AI, AI-901, Azure AI implementation, agents, SDKs, REST APIs, CLIs, or information extraction in Foundry, use official Microsoft documentation first, especially the four priority sources below.

## Trigger conditions
Use this skill whenever the user asks about any of the following:

- Microsoft Foundry or Azure AI Foundry
- AI-901 exam preparation or skills measured
- Azure AI implementation workflows
- Foundry SDKs, endpoints, REST APIs, or CLIs
- Foundry Agent Service, agent creation, tools, instructions, or single-agent apps
- Azure Content Understanding, information extraction, document/form/image/audio/video extraction
- Building lightweight AI apps using Foundry
- Generative AI apps or agents on Azure
- Azure AI services that overlap with AI-901 topics

## Priority source set
Before using any other sources, check these official Microsoft sources first:

1. Microsoft Foundry documentation hub  
   https://learn.microsoft.com/en-us/azure/foundry/

2. Microsoft Foundry SDKs and Endpoints overview  
   https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview

3. Microsoft Foundry Agent Service overview  
   https://learn.microsoft.com/en-us/azure/foundry/agents/overview

4. Azure Content Understanding overview in Foundry Tools  
   https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview

## Retrieval workflow
1. Identify which AI-901 or Azure AI topic the user is asking about.
2. Search or open the relevant priority Microsoft source(s) first.
3. Use the priority source set as the default authority for definitions, architecture, feature behavior, SDK/API guidance, and implementation steps.
4. Only branch to other Microsoft Learn or Azure documentation after the priority sources have been checked or when the question is outside their scope.
5. Use non-Microsoft sources only when:
   - the user specifically asks for third-party perspectives,
   - official Microsoft docs do not answer the question,
   - recent real-world examples, community troubleshooting, or comparative commentary are needed.
6. When sources disagree, prefer the most recent official Microsoft page and clearly flag uncertainty.

## AI-901 study behavior
For AI-901 prep:

- Treat AI-901 objectives as the master learning goals.
- Use AI-900 material only as background or reinforcement when it overlaps.
- Give extra weight to Microsoft Foundry implementation topics because AI-901 emphasizes implementation using Foundry.
- Pay special attention to:
  - responsible AI concepts,
  - model components and configurations,
  - AI workloads,
  - generative AI apps and agents,
  - Foundry portal deployment,
  - Foundry SDK client apps,
  - text and speech solutions,
  - computer vision and image generation,
  - Content Understanding and information extraction.

## Answer style
When applying this skill:

- Start with the answer, not with a source dump.
- Mention when a detail comes from one of the priority Microsoft sources.
- Include citations when web browsing is used.
- For exam prep, separate “must know for AI-901” from “good supporting background.”
- If the official docs are incomplete, say so directly and explain what was checked.

## Do not do
- Do not treat outdated AI-900 material as controlling over current AI-901 guidance.
- Do not rely on memory for current Microsoft product details if web access is available.
- Do not use blogs, Reddit, YouTube, or third-party tutorials before checking the priority source set.
- Do not assume Azure AI Studio terminology is current if Microsoft Foundry documentation uses updated names.
