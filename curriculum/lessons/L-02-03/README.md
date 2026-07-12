# L-02-03 — Generative AI, models, and deployment choices

## Outcome

Explain the basic generation loop, then choose a model, deployment pattern, data-processing scope, or request parameter from stated requirements.

## Source boundary

**Must know for AI-901:** The current study guide requires describing how generative AI models work, choosing a model by capability, and identifying appropriate deployment options and configuration parameters. Current Foundry documentation says deployments name and configure models, and distinguishes standard pay-per-token from provisioned reserved-capacity deployment types. See the [official source register](../../sources/current-official-source-register.md).

**Course-authored practice:** All scenarios, answer reasons, and 16/16 gates here are original coaching material, not Microsoft exam questions. Live availability, regions, quota, prices, parameter support, and preview status must be reverified.

## 1. How generation works

A language model receives context as tokens and predicts a sequence of likely next tokens from learned patterns. That makes generation useful but probabilistic: it is not a guaranteed fact lookup, database query, or deterministic copy operation. Context and instructions shape output; evaluation and grounding remain necessary.

## 2. Choose the model from requirements

Use this order:

1. Required input/output modality: text, image, audio, or combinations.
2. Required capabilities: reasoning, tool calling, structured output, or another task feature.
3. Sufficient context and output limits.
4. Measured quality on representative data.
5. Latency, cost, safety, availability, and governance constraints.

The largest or newest model is not automatically the best fit. A smaller model that meets quality requirements at lower latency and cost can be the better choice.

## 3. Separate three layers

- **Model:** learned capability and supported inputs, outputs, context, and features.
- **Deployment:** a named, callable configuration for a model, including version and capacity-related settings.
- **Request:** the prompt plus supported generation parameters sent to that deployment.

Foundry requests use the deployment name. Do not assume it must equal the catalog model's product name.

## 4. Deployment and configuration cards

| Requirement | Best starting choice |
|---|---|
| Variable traffic, pay per token | Standard |
| Sustained high volume, predictable throughput, reserved capacity | Provisioned |
| Processing may occur broadly | Global |
| Processing limited to a named US/EU/APAC zone | Data Zone |
| Processing limited to one deployment region | Regional |
| More focused wording on a model that supports it | Lower temperature |
| Cap generated response length | Maximum output tokens |
| Adjust nucleus sampling | Top-p; generally do not tune temperature simultaneously |

Instant access can call supported models without deployment, but it is currently preview. Parameter support varies, especially for reasoning models, so check the selected model/version rather than memorizing a universal list.

## Practice and strict retrieval

Before opening `answer_key.json`, use `scenario_bank.json` to state both the decision and reason for every primary item. Complete `primary_answers.json` closed-note:

```powershell
python validate_model_choices.py --form primary --check primary_answers.json
```

For each miss: name the requirement, identify whether the decision belongs to model/deployment/request, compare two candidates, and state the tradeoff. Then complete the unseen transfer form:

```powershell
python validate_model_choices.py --form transfer --check transfer_answers.json
```

Readiness requires 16/16 on both forms, coverage of all four topic families, and one complete closed-note explanation. Revisit low-confidence items tomorrow, then at 3, 7, and 14 days.
