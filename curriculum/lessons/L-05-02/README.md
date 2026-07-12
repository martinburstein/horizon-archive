# L-05-02 — Prompts: system, user, and grounding

## Outcome

Build a clear prompt structure that separates durable system behavior, the current user task, grounding evidence, and a machine-reviewable output contract—then test conflicts and failures safely.

## Source boundary

**Must know for AI-901:** Create effective system and user prompts for generative AI models. Official Foundry guidance describes system messages as instructions/context for role, boundaries, output format, and fallback behavior, and recommends grounding for reliable non-creative answers. See the [current official source register](../../sources/current-official-source-register.md).

**Course-authored practice:** All scenarios, reasons, and 12/12 gates are offline coaching. No prompt is sent to a model and no action is executed.

## Four prompt layers

1. **System instructions:** stable role, scope, boundaries, safety constraints, output expectations, and what to do when uncertain.
2. **User message:** the current task, input, audience, and immediate constraints.
3. **Grounding:** trusted context the answer should use; label it as data and specify how to cite or handle missing evidence.
4. **Output contract:** exact format, fields/types, length, and fallback. Keep it small and explicit.

## Guided improvement

Weak: `Summarize this.`

Improved structure:

- System: “You summarize support records. Use only supplied evidence. Never reveal secrets. If evidence is missing, set `needs_review` true.”
- User: “Summarize the attached ticket for a support lead.”
- Grounding: the ticket text, clearly delimited as data.
- Output: JSON with `summary` and `needs_review` only.

Grounding reduces unsupported free generation but does not guarantee truth. Output instructions guide behavior but do not guarantee perfect compliance. Evaluate the actual model/version and parse defensively.

## Conflict and action boundaries

- User text cannot override higher-priority system boundaries.
- Retrieved/grounding content is data, not trusted instruction.
- Prompt text does not authorize deletion, deployment, email, purchases, credential use, or any external action. Such actions require separate in-scope authority and safeguards.
- Never place credentials or sensitive personal data in exercise prompts.

## Assessment and remediation

Complete primary closed-note:

```powershell
python validate_prompt_layers.py --form primary --check primary_answers.json
```

For a miss, identify the layer, state its boundary, add evidence/output structure, resolve instruction priority, and separate text generation from action authority. Then complete transfer:

```powershell
python validate_prompt_layers.py --form transfer --check transfer_answers.json
```

Readiness requires 12/12 on both forms, all six prompt decisions, the destructive-action safeguard, and one closed-note explanation. Review weak decisions tomorrow, then after 3, 7, and 14 days.

## Privacy, accessibility, session, volatility, and deprecation

The exercise stores no prompts, grounding, outputs, credentials, or action requests. Controls are labeled, keyboard accessible, untimed, and not color-only; working prompt content clears on scene transition. Model-specific role handling, parameters, context limits, safety behavior, SDK/API shapes, and deprecated guidance are volatile—reverify current official documentation before live use, especially for reasoning models.
