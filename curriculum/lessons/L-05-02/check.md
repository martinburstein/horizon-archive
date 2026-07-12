# L-05-02 answer and remediation reference

The machine key is `answer_key.json`; reference files prove both passing paths.

- Stable cross-request behavior → system instructions.
- Current task/input → user message.
- Trusted evidence → grounding, treated as data.
- Required structure → explicit output contract.
- Conflicting or injected instructions → preserve priority and block unapproved action.
- One good response → expand to representative, edge, failure, and adversarial evaluation.

Run `python validate_prompt_layers.py --self-test` for six-decision coverage, blank rejection, role confusion, prompt injection, and destructive-action probes.
