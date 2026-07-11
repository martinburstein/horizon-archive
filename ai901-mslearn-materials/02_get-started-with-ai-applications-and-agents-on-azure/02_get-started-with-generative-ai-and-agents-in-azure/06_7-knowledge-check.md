---
title: Knowledge check
source_url: https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/7-knowledge-check/
learning_path: Get started with AI applications and agents on Azure
module: Get started with generative AI and agents in Azure
unit_number: 6
unit_type: knowledge_check
duration_minutes: 5
captured_at_utc: '2026-05-29T15:44:01Z'
source: Microsoft Learn
usage_note: Personal study archive. Preserve Microsoft attribution. Do not redistribute.
---


# Knowledge check

Source: https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/7-knowledge-check/

## Extracted content

1.

What best describes Foundry's model catalog?

A catalog consisting of only Microsoft-exclusive foundation models

A central hub to discover, filter, compare, and test many generative AI models from multiple providers

A tool that replaces the need for an Azure subscription

2.

Which statement best describes a foundation model in Microsoft Foundry

A small, task‑specific model that must be fine‑tuned before it can perform any useful function

A benchmarking tool used to compare different model families

A large, pretrained model that provides general capabilities and can be used immediately or customized

3.

In the Foundry portal, what is the primary benefit of using the Model Playground before writing code?

It lets you test prompts, compare models, and capture working settings that you can reuse in code.

It deploys the model for you and removes the need to use an API.

It replaces system instructions by automatically generating the best system prompt for every scenario.

4.

What is the primary outcome of publishing an agent in Microsoft Foundry?

It converts the agent into a managed Azure resource with a stable endpoint that you can share and integrate without exposing your Foundry project or source code.

It automatically reduces costs by making the agent free to run, regardless of model tokens, tools, or connected data services.

It replaces the need for the Project API by allowing the agent to be called only through the Foundry portal UI.

5.

In the Python example, which line is responsible for calling the published agent (rather than calling a model deployment directly) when generating a response?

`agent = project_client.agents.get(agent_name=myAgent)`

`openai_client = project_client.get_openai_client()`

`response = openai_client.responses.create(input=[{'role': 'user', 'content': 'Tell me what you can help with.''}], extra_body={'agent': {'name': agent.name, 'type': 'agent_reference'}},)`

Submit answers

You must answer all questions before checking your work.

You must answer all questions before checking your work.
