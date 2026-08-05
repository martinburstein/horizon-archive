# 1 - Surface-Canon Concordance

## Idea

Use browser-only ChatGPT Pro to turn the currently released, player-visible
Horizon Archive canon into a rigorous concordance: a source-traceable glossary
and continuity map of locations, transitions, observations, identities,
terminology, promises, prohibitions, and unresolved questions.

This is not a request to create new lore. It is a way to make the existing
surface canon easier to search, compare, and protect during later production.

## Why this suits browser-only Pro

The task requires careful reading across many uploaded documents, repeated
cross-checking, terminology normalization, and long-form synthesis. It does
not require code, runtime access, Git, or application testing. A large context
and generous token budget are useful because the concordance should preserve
source distinctions instead of compressing everything into a vague summary.

## Required inputs

Upload current copies of:

- `AGENTS.md`;
- `NEXT_INSTANCE_HANDOFF.md`;
- `SKYSCRAPER_AGENT_WORKFLOW.md`;
- `Skyscraper Agent Profiles/README.md`;
- the current world and narrative masterplan;
- released route, location, and packet records;
- accepted shell and as-built summaries for released work; and
- current player-facing text inventories, if available.

Provide an exact upload manifest. Do not upload hidden lore, the protected book
scan, protected training files, private saves, credentials, or stale archived
workflow authorities.

## Work to perform

1. Build an authority-ranked source manifest.
2. Extract every named player-visible entity, location, route, state,
   interaction, concept, and recurring term.
3. Record the first source, latest controlling source, accepted spelling,
   aliases, player-visible meaning, and boundaries of each term.
4. Map released predecessor and successor relationships without extending the
   graph beyond the current released boundary.
5. Identify terms that appear synonymous but may carry different meanings.
6. Identify contradictions, orphan references, undefined terms, and language
   that appears to expose later-state knowledge prematurely.
7. Separate confirmed surface canon from interpretation, production shorthand,
   proposals, and unresolved questions.
8. Build a continuity checklist that future canonical roles can use before
   approving new player-facing text.

## Deliverables

Ask Pro to produce:

- `SURFACE_CANON_GLOSSARY.md`;
- `RELEASED_CONTINUITY_MAP.md`;
- `TERMINOLOGY_COLLISION_REGISTER.md`;
- `SURFACE_CANON_OPEN_QUESTIONS.md`; and
- `FUTURE_CONTINUITY_CHECKLIST.md`.

Every entry should cite the uploaded file and heading that support it. Use the
labels `SOURCE-DIRECT`, `SOURCE-INFERRED`, `QUESTION`, and `DESKTOP-VERIFY`.

## Guardrails

- Production remains paused.
- Do not select or imply RP-011, a destination, route, shell, or successor.
- Do not infer hidden lore from gaps in surface canon.
- Do not invent explanations merely to reconcile a contradiction.
- Do not rewrite canonical files.
- Do not claim that a browser draft changes project authority.
- Route canon conflicts to the Colonel and project-direction conflicts to
  Martin or the Commandant, as appropriate.

## Copy-ready kickoff prompt

```text
Create a non-authoritative surface-canon concordance for Horizon Archive using
only the files uploaded to this chat. Begin with an exact source manifest and
authority order. Extract and cross-reference released, player-visible canon;
do not create new lore or infer hidden lore.

For every term or relationship, distinguish direct source evidence, bounded
inference, unresolved questions, and facts requiring desktop verification.
Do not select RP-011 or extend the released graph. Identify contradictions
without solving owner-reserved questions yourself.

First return the proposed concordance schema, the source coverage assessment,
and the first twenty extracted entries for my approval. After approval,
continue until the complete glossary, continuity map, collision register, open
questions, and future continuity checklist are ready as Markdown files.
```

## Useful result for Codex later

After the account resets, Codex can compare this concordance against the live
repository, reject unsupported entries, and integrate only verified glossary
or continuity improvements. The main value is faster orientation and stronger
protection against accidental canon drift.
