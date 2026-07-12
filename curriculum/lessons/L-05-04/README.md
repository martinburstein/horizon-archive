# L-05-04 — Single-agent solutions

## Official target and safe scope

The current AI-901 study guide includes creating and testing a single-agent solution in the Foundry portal and creating a lightweight client app for an agent. Microsoft Foundry Agent Service describes agents as combining a model with instructions and tools to complete tasks. The current [prompt-agent quickstart](https://learn.microsoft.com/en-us/azure/foundry/agents/quickstarts/quickstart-prompt-agent) is the portal workflow authority for this lesson.

**Bridge label:** this is an offline design-and-test lab. It does not create an agent, call Azure, use credentials, or perform an external action.

## Mental model

```text
plain model flow: input -> model -> response
single-agent flow: goal -> agent instructions -> model reasoning -> approved tool step(s) -> result
client flow: agent identifier + input -> current agent API/run -> result or error
```

Choose the smallest sufficient pattern. A fixed response with no goal-directed steps or tools may only need a plain model flow. A single agent is useful when one bounded assistant must follow stable instructions, use approved tools, and manage steps toward one goal. More agents are not automatically better.

## Guided practice

For an inventory assistant:

1. State the goal and decide whether a plain response or one agent is sufficient.
2. Write stable instructions: role, allowed scope, required evidence, fallback, and forbidden actions.
3. Select only the inventory-read tool. A tool grants capability, not permission.
4. On the offline portal worksheet, order: choose model; define instructions; attach approved tools; test expected behavior; test edge and tool-failure behavior; test prompt injection and denied action; record observed result.
5. Trace the lightweight client: use the correct agent identifier, submit input through the current API contract, then read the result or error. Do not confuse the agent identifier with the project endpoint or model deployment name.

## Retrieval practice

Closed-note, answer:

- What does an agent add beyond a plain model call?
- Where do stable role and action limits belong?
- Why is a configured tool not permission to use it destructively?
- Which tests must follow a happy-path result?
- How do agent identifier, model deployment, endpoint, input, and result differ?

Repeat tomorrow, in three days with a new tool-failure case, and in seven days after reverifying official documentation.

## Primary, transfer, and remediation

Complete `primary_answers.json`, then run the primary command in [check.md](check.md). For every miss, name the failed boundary and use `answer_key.json` to repair the mental model. Then complete the fresh transfer form. Readiness is strict: 12/12 on each form across agent fit, instructions, tools, portal testing, action safety, and client flow, plus a closed-note explanation.

## Safeguards

Do not store instructions, tool payloads/results, agent IDs, endpoints, credentials, conversation text, or external-action requests. Clear working prompt, tool, and action state on scene transition; persist mastery evidence separately. Controls must have persistent labels, keyboard order, text errors, a live status region, no time limit, reduced motion, and no color-only meaning.

Portal labels, Agent Service APIs/SDKs, identity names, tools, run/session concepts, models, pricing, preview status, and deprecations are volatile. Reverify the [official Agent Service overview](https://learn.microsoft.com/en-us/azure/foundry/agents/overview), [Foundry documentation hub](https://learn.microsoft.com/en-us/azure/foundry/), and quickstart before any live use.

No prompt or lesson result authorizes email, purchase, deletion, deployment, resource creation, credential use, or any other external or destructive action. Such action requires separate verified scope, authority, and confirmation.
