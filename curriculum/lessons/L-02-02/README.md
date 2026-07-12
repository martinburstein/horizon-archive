# L-02-02 — Responsible AI in practice

## Outcome

Choose the best primary responsible AI principle for a scenario, then connect it to the affected stakeholder, a concrete mitigation, and an accountable human owner.

## Source boundary

**Official fact:** The current AI-901 study guide expects learners to recognize fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability. Microsoft Foundry frames responsible AI work across a Discover, Protect, and Govern lifecycle. See the [current official source register](../../sources/current-official-source-register.md).

**Bridge instruction:** Every scenario, distractor, four-part response, and mastery threshold here is course-authored, not a Microsoft exam question. Real systems can implicate several principles; choose the one closest to the primary harm.

| Principle | Ask first |
|---|---|
| Fairness | Are similarly situated people or groups receiving inequitable treatment or representation? |
| Reliability and safety | Does the system behave predictably at edges and failures, and fail safely? |
| Privacy and security | Are collection, access, retention, isolation, and protection appropriate? |
| Inclusiveness | Can people with diverse abilities, languages, and circumstances participate? |
| Transparency | Do people understand AI's role, limits, evidence, and review path? |
| Accountability | Is a human or organization responsible for oversight, appeal, monitoring, and remedy? |

Fairness focuses first on disparity; inclusiveness focuses first on participation barriers. Transparency focuses on missing explanation or disclosure; accountability focuses on missing ownership, appeal, monitoring, or remedy.

## Four-part response and guided example

For every scenario answer: **principle**, **affected stakeholder**, **specific testable mitigation**, and **human or organizational owner**. If a support assistant exposes another customer's transcript: privacy and security; the exposed customer; authorization, minimization, and isolation tests; the service security/data owner.

Open `scenario_bank.json`. Predict all four fields for each primary scenario before opening `answer_key.json`.

## Retrieval, assessment, and remediation

Complete `primary_answers.json` closed-note, then run:

```powershell
python validate_responsible_ai.py --form primary --check primary_answers.json
```

For a miss: name the stakeholder, compare neighboring principles, choose a testable control, and replace any system/platform owner with a human role. Then complete the unseen transfer form:

```powershell
python validate_responsible_ai.py --form transfer --check transfer_answers.json
```

The strict gate is 24/24 on both forms, every principle demonstrated twice, plus one complete closed-note verbal explanation. Review one missed-or-low-confidence scenario tomorrow, then at 3, 7, and 14 days.
