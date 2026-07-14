# SIM-03 — AI-901 final confidence simulation

## Enter only after the readiness gate

This is the last course-authored fresh-transfer block, not a shortcut to readiness. Begin only after all of these are true:

- `L-06-03` reports `ready_for_next_practice_checkpoint`;
- `CUM-01` transfer remains 16/16;
- `SIM-01` and `SIM-02` remain 24/24 after remediation;
- the two prior simulations were separated by at least 48 hours;
- no critical misconception remains open and every high-confidence miss has been explained and retested; and
- the current [AI-901 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901) and priority Foundry sources in the [official source register](../../sources/current-official-source-register.md) were reverified within seven days.

Record only the non-sensitive gate facts in `entry_evidence.json`. Then answer the 12 new scenarios closed-note. Five items emphasize concepts and capabilities; seven emphasize Foundry implementation. Their objective tags collectively cover all 15 current objectives.

## Final confidence is evidence, not a feeling

For every item, select both a decision and the reason that resolves it. Confidence may prioritize later review, but confidence never changes correctness. Timing is optional and has no effect on mastery.

Check the entry gate and answers together:

```powershell
python validate_simulation.py --evidence entry_evidence.json --check answers.json
```

The internal gate is 24/24 with valid entry evidence. A miss routes every tagged objective through `../CUM-01/remediation_routes.json`; after remediation, use a genuinely fresh item rather than memorizing this form.

## Safeguards

Store only simulation/item IDs, objective tags, dimension correctness, attempts, confidence, optional elapsed time, misconception tags, prior gate scores, time separation, source-age evidence, and mastery state. Do not store exam item text, private notes, credentials, endpoints, resource or deployment names, payloads, responses, source content, or external-action requests. Clear working answers on scene transition and persist sanitized mastery evidence separately.

Controls require persistent labels, keyboard order, associated text feedback, a live region, untimed equivalence, and reduced motion. These are original practice scenarios, not Microsoft exam questions. Passing supports a cautious scheduling recommendation; it cannot guarantee an exam result or authorize service calls, credentials, Azure changes, disclosure, publication, purchase, email, or deletion.
