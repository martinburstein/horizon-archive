# Foundry Lab Roadmap

## Purpose

Define the implementation-lab path for Foundry-heavy learning while respecting current source gaps and the possibility that live Azure resources are unavailable.

## Guiding rule

The first version should support three lab modes:

- `conceptual_walkthrough`
- `simulated_lab`
- `live_optional_lab`

It should not require live Azure access for core curriculum completion.

## Launch lab sequence

### Lab 1: Foundry portal orientation

- Supports: `AI901-D2-O2`
- Mode: `conceptual_walkthrough`
- Goal: understand workspace, models, deployments, and interaction flow
- Blockers: missing local official Foundry hub capture limits portal-detail confidence
- Safe design: use source-grounded flow descriptions and explicit gap labels

### Lab 2: Prompt design mini-lab

- Supports: `AI901-D2-O1`
- Mode: `simulated_lab`
- Goal: compare weak and improved prompts
- Live Azure required: no

### Lab 3: Endpoint and SDK mental model lab

- Supports: `AI901-D2-O3`
- Mode: `simulated_lab`
- Goal: trace request, endpoint, deployment name, payload, and response
- Live Azure required: no
- Safe design: mock config values and pseudo-response payloads

### Lab 4: Lightweight chat client walkthrough

- Supports: `AI901-D2-O3`
- Mode: `live_optional_lab`
- Goal: inspect a tiny client structure and understand imports, config, call path, and response handling
- Live Azure required: optional
- Safe design: include local simulation fallback

### Lab 5: Single-agent solution overview

- Supports: `AI901-D2-O4`
- Mode: `conceptual_walkthrough`
- Goal: explain what an agent is and how the flow differs from a single prompt
- Blockers: missing official Agent Service local capture

### Lab 6: Text and speech solution pattern lab

- Supports: `AI901-D2-O5`
- Mode: `simulated_lab`
- Goal: choose the right workflow and interpret structured outputs

### Lab 7: Vision and image-generation solution pattern lab

- Supports: `AI901-D2-O6`
- Mode: `simulated_lab`
- Goal: compare analysis vs generation use cases

### Lab 8: Content Understanding workflow lab

- Supports: `AI901-D2-O7`
- Mode: `conceptual_walkthrough` with `simulated_lab` fallback
- Goal: explain input types, extraction goals, and structured outputs
- Blockers: missing official Content Understanding local capture

## Secret-handling policy

- never require real secrets for the default path
- use mock placeholders in code samples
- label live mode clearly
- never encourage hardcoded keys

## Failure mode explanations to support

- wrong file path
- missing package
- env var not set
- malformed JSON
- confusion between endpoint and deployment
- confusion between prompt and agent

## Launch recommendation

Ship labs 1 through 4 and 6 through 8 as mostly simulated experiences first. Upgrade them toward richer official walkthroughs only after missing Foundry captures are added locally.
