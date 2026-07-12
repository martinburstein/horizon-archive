# L-02-03 answer and remediation guide

`answer_key.json` is the machine key. The two `reference_*_answers.json` files demonstrate a passing submission.

- **Mechanics miss:** replace “lookup” or “copy” with probabilistic token generation from context.
- **Model-choice miss:** begin with modality/capability/context, then use evaluation, latency, and cost.
- **Deployment miss:** identify traffic, billing/capacity, and processing-location requirements separately.
- **Configuration miss:** state what the parameter controls and what it does not guarantee.
- **Layer miss:** model is capability; deployment is the named callable configuration; request carries prompt and supported parameters.

Do not memorize preview features or SKU names without rechecking the current official page.
