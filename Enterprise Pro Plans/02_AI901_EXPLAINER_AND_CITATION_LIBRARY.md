# 2 - AI-901 Explainer and Citation Library

## Idea

Use browser-only ChatGPT Pro to build a durable, source-backed library of
plain-language AI-901 explanations, misconceptions, examples, evidence
questions, and official Microsoft citations that Horizon Archive can draw on
during future curriculum design.

The library should clarify the learning domain without designing or
implementing a new game packet. It should help later roles make accurate
choices quickly and avoid relying on stale AI-900 assumptions.

## Why this suits browser-only Pro

This work benefits from web research, careful source comparison, citation
maintenance, pedagogical reasoning, and repeated rewriting for clarity. It
does not require repository access or programming. The browser model can spend
substantial time tracing claims back to official Microsoft documentation and
building multiple explanation levels for different learners.

## Required inputs

Upload:

- the current Horizon Archive curriculum spine;
- current AI-901 objective mappings;
- accepted learning-evidence definitions;
- current no-authority and no-exam-guarantee language;
- accessibility and alternative-evidence requirements; and
- the required current-authority packet from the project.

Give Pro these official-source priorities:

1. <https://learn.microsoft.com/en-us/azure/foundry/>
2. <https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview>
3. <https://learn.microsoft.com/en-us/azure/foundry/agents/overview>
4. <https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview>

Treat current AI-901 objectives as the master learning goals. Use AI-900 only
as supporting background where it genuinely overlaps. Record the page title,
URL, relevant heading, and access date for every external technical claim.

## Work to perform

1. Inventory each current AI-901 learning objective and subskill.
2. Research the relevant official Microsoft documentation.
3. Write a one-sentence, one-paragraph, and deep explanation for each concept.
4. List common misconceptions and explain why they are incorrect.
5. Create concrete but non-authoritative examples and counterexamples.
6. Identify what player action could demonstrate understanding without
   cross-crediting unrelated objectives.
7. Create oral, textual, visual, and interaction-based alternative evidence
   ideas for accessibility review.
8. Separate time-stable concepts from product details that need periodic
   source rechecking.
9. Compare the library with existing Horizon Archive curriculum language and
   record gaps or possible stale claims.
10. Produce a citation-maintenance checklist for future releases.

## Deliverables

- `AI901_OBJECTIVE_SOURCE_INDEX.md`;
- `AI901_PLAIN_LANGUAGE_EXPLAINERS.md`;
- `AI901_MISCONCEPTION_LIBRARY.md`;
- `AI901_EVIDENCE_QUESTION_BANK.md`;
- `AI901_ACCESSIBLE_EVIDENCE_ALTERNATIVES.md`; and
- `MICROSOFT_CITATION_MAINTENANCE_CHECKLIST.md`.

Every statement should be labeled as `OFFICIAL-SOURCE`,
`HORIZON-SOURCE`, `PEDAGOGICAL-PROPOSAL`, or `REQUIRES-RECHECK`.

## Guardrails

- Do not claim that an explanation is already implemented in the game.
- Do not claim that a proposed action produces accepted learning evidence.
- Do not promise certification, exam success, service authority, or real-world
  Azure permissions.
- Do not merge independent learning objectives into one evidence claim.
- Do not propose code, SDK calls, endpoints, commands, or implementation.
- Do not let a third-party source override current official Microsoft sources.
- Keep all project recommendations non-authoritative until desktop review.

## Copy-ready kickoff prompt

```text
Build a non-authoritative AI-901 explainer and citation library for Horizon
Archive. Use the uploaded current curriculum documents for project context and
official Microsoft documentation for external technical claims. Treat AI-901
as the master objective set and AI-900 only as overlapping background.

For each objective, provide layered explanations, misconceptions, examples,
candidate evidence questions, accessible alternatives, and precise citations.
Keep project facts separate from pedagogical proposals. Do not write code or
claim that any experience is implemented, tested, accepted, or released.

Begin with the complete objective inventory, research plan, official-source
manifest, and a sample entry. Wait for approval before expanding the library.
```

## Useful result for Codex later

Codex can validate the citations and use accepted portions as a curriculum
reference. This should reduce repeated web research, improve technical
accuracy, and make later shell reviews more precise without deciding what the
next shell will be.
