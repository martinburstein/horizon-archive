# 4 - UX Writing and Narrative Voice Audit

## Idea

Use browser-only ChatGPT Pro to inventory and analyze Horizon Archive's
player-facing language: instructions, observations, labels, prompts, feedback,
errors, recovery text, accessibility descriptions, privacy language, and
narrative passages. The result should be a source-backed voice guide and copy
quality report, not an automatic rewrite of the game.

## Why this suits browser-only Pro

Language analysis rewards patient comparison across a large corpus. Pro can
group recurring patterns, identify inconsistent terminology, test readability,
produce alternative phrasings, and maintain a detailed rationale for each
suggestion. None of this requires code or runtime access when the relevant text
is supplied directly.

## Required inputs

Upload:

- the current authority and paused-state packet;
- current surface-canon and visual/narrative direction documents;
- exported or copied player-facing text with file/source labels;
- accessibility, privacy, ownership, and no-authority language requirements;
- current terminology or glossary documents; and
- accepted screenshots only when they are needed to understand context and are
  safe to share.

Do not upload hidden lore, source code merely to extract strings, private data,
the protected book scan, or protected training material.

## Work to perform

1. Create an exact corpus manifest and classify every text item by function.
2. Identify the current voice characteristics using direct examples.
3. Build a terminology table with preferred forms, variants, and collision
   risks.
4. Audit instructions for clarity, actionability, timing, and presumed
   knowledge.
5. Audit feedback and recovery language for blame, ambiguity, and next-action
   clarity.
6. Audit privacy, ownership, authority, and exam-language consistency.
7. Audit narrative lines for surface-canon continuity and accidental reveals.
8. Review sentence complexity, scanability, and translation risk.
9. Identify places where visual context may be carrying meaning that should
   also exist in text.
10. Draft alternatives in a separate proposal table, preserving the original
    wording and source.
11. Create a future copy-review checklist for Quartermaster, Image Specialist,
    and Intelligence Officer use.

## Deliverables

- `PLAYER_FACING_COPY_INVENTORY.md`;
- `HORIZON_VOICE_AND_TONE_GUIDE.md`;
- `TERMINOLOGY_AND_LABEL_STANDARD.md`;
- `UX_COPY_ISSUE_REGISTER.md`;
- `PROPOSED_COPY_ALTERNATIVES.md`; and
- `PLAYER_FACING_COPY_REVIEW_CHECKLIST.md`.

For every proposed rewrite, show:

| Source | Original | Issue | Proposed alternative | Meaning preserved? | Owner | Verification needed |
|---|---|---|---|---|---|---|

## Guardrails

- Never replace source text silently.
- Preserve exact original wording and provenance in the audit.
- Mark every rewrite as a proposal with no canonical effect.
- Do not simplify away technical accuracy, learning distinctions, privacy
  boundaries, accessibility meaning, or canon.
- Do not add lore, emotional outcomes, rewards, identity, authority, or world
  responses.
- Do not claim that proposed wording fits visually or functions correctly in
  the application; those require desktop verification.
- Route narrative conflicts to the Colonel, learning conflicts to Science,
  shell conflicts to Mission, and implemented-copy decisions to the owning
  downstream role.

## Copy-ready kickoff prompt

```text
Audit the uploaded Horizon Archive player-facing text as a non-authoritative UX
writer and narrative-language analyst. Begin with an exact corpus manifest and
classify every item by function and source. Infer the existing voice only from
the provided corpus.

Identify terminology conflicts, unclear instructions, weak recovery language,
privacy or authority ambiguity, accessibility risks, readability issues, and
possible surface-canon drift. Preserve every original line. Put all rewrites
in a separate proposal table with rationale, owner, and verification debt.

Do not write code, claim visual fit, alter canon, or imply that any proposal is
implemented. Start with the corpus inventory, voice findings, and ten highest-
priority issues before expanding the full audit.
```

## Useful result for Codex later

Codex can trace proposed wording back to real files, verify layout and behavior,
and implement only the copy changes approved by the correct owner. The audit
can also become a durable voice guide for future slices.
