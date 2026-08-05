# 5 - Production Retrospective Meta-Analysis

## Idea

Use browser-only ChatGPT Pro to study completed Horizon Archive production
cycles as a body of operational evidence. It can catalog delays, corrections,
variances, repeated QA findings, handoff failures, successful safeguards, and
process improvements, then propose a more efficient future workflow without
resuming production.

This is institutional-memory work: learning from what already happened rather
than selecting what should happen next in the story.

## Why this suits browser-only Pro

Retrospective analysis is reading- and reasoning-intensive. It benefits from
processing many historical handoffs and comparing patterns across cycles. The
browser model can normalize inconsistent records, quantify recurring themes,
and challenge causal stories without needing code or a live application.

## Required inputs

Upload deliberately selected historical records:

- current workflow and profile authorities;
- completed cycle handoffs and release summaries;
- accepted variance ledgers;
- QA findings and correction records;
- process retrospectives and changelogs;
- stage-duration or test-duration records, where available; and
- current `NEXT_INSTANCE_HANDOFF.md` so historical actions are not mistaken
  for live authority.

Archived material may be analyzed as history only. Label it clearly. Do not
upload the protected book scan, training files, hidden lore, private data,
source code, build artifacts, or credentials.

## Work to perform

1. Build a chronological manifest of completed cycles and supplied evidence.
2. Normalize stage names, dispositions, variance classes, and validation tiers.
3. Record where each correction was first discoverable, first discovered, and
   finally resolved.
4. Identify repeated failure modes and repeated successful safeguards.
5. Compare planned validation with the evidence eventually needed for release.
6. Analyze handoff clarity, duplicated reading, ambiguous ownership, late
   returns, and verification bottlenecks.
7. Separate correlation from a defensible causal explanation.
8. Identify which checks could move earlier without weakening independent
   release review.
9. Identify templates or source indexes that could reduce repeated reasoning.
10. Propose `KEEP`, `TUNE`, or `REDESIGN` candidates, each with evidence,
    benefit, risk, owner, and rollback condition.
11. Create a measurement plan for evaluating any accepted process change in a
    future authorized cycle.

## Suggested analyses

- findings by stage and severity;
- correction discovery latency;
- variance recurrence;
- source-reading duplication;
- shell ambiguity categories;
- focused versus full-validation yield;
- accessibility and responsive defect timing;
- runtime-evidence versus documentation-evidence gaps;
- late content or presentation churn;
- handoff length versus actionable clarity; and
- process changes that demonstrably prevented recurrence.

Do not invent numeric precision where records are incomplete. Use ranges,
counts with denominators, or `UNKNOWN`.

## Deliverables

- `HISTORICAL_CYCLE_EVIDENCE_INDEX.md`;
- `RECURRING_FINDING_TAXONOMY.md`;
- `PROCESS_BOTTLENECK_ANALYSIS.md`;
- `SAFEGUARDS_THAT_WORKED.md`;
- `PROCESS_CHANGE_CANDIDATES.md`;
- `FUTURE_CYCLE_MEASUREMENT_PLAN.md`; and
- `RETROSPECTIVE_EXECUTIVE_BRIEF.md`.

Every recommendation should cite at least one historical example and state
what evidence would falsify the recommendation.

## Guardrails

- Historical exact-next actions are not current authority.
- The archived two-team workflow remains inactive.
- The analysis may recommend process changes but may not apply them.
- Do not reopen an accepted release merely because a different process might
  have been preferable.
- Do not downgrade independent Intelligence Officer review.
- Do not turn missing data into fabricated metrics.
- Do not resume automation, schedule work, select RP-011, or execute a role.
- Do not produce code or Git instructions.

## Copy-ready kickoff prompt

```text
Perform a non-authoritative meta-analysis of the uploaded Horizon Archive
production records. Treat completed and archived documents as historical
evidence only; the current handoff remains the sole exact-next-action authority.

Build a chronological evidence index, normalize findings and variances, locate
recurring bottlenecks and successful safeguards, and evaluate where problems
could have been detected earlier. Separate evidence, inference, and proposal.
Do not fabricate metrics, reopen releases, change the workflow, resume
production, or write code.

Begin with the source manifest, cycle coverage table, proposed taxonomy, and
data-quality limitations. After approval, produce the complete analysis,
change candidates, and future measurement plan.
```

## Useful result for Codex later

Codex can verify the historical citations and turn accepted findings into
small workflow edits or better stage prompts. The browser model does the broad
pattern analysis; the desktop agent preserves repository truth and implements
only explicitly approved process changes.
