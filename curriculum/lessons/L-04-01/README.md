# L-04-01 — Text analysis workloads

## Outcome

Choose the correct text-analysis capability from the requested output, then trace a lightweight app flow that preserves document IDs and handles per-document results and errors.

## Source boundary

**Must know for AI-901:** The current guide names keyword extraction, entity detection, sentiment analysis, and summarization. Azure Language documentation calls the first service capability **key phrase extraction**. This lesson treats those as the exam-to-service terminology bridge, not as two unrelated techniques. See the [current official source register](../../sources/current-official-source-register.md).

**Course-authored practice:** Every scenario, reason, and 12/12 gate is original coaching material, not a Microsoft exam question or live service response.

## Choose by output

| Requested output | Capability |
|---|---|
| Important phrases representing main concepts | Key phrase extraction |
| People, places, organizations, products, and entity types | Named entity recognition/entity detection |
| Positive, neutral, or negative attitude and opinion signals | Sentiment analysis/opinion mining |
| A shorter coherent version preserving main meaning | Summarization |

The topic does not determine the capability. A product review could need entities, sentiment, phrases, or a summary depending on the requested output.

## Guided contrasts

- “Which organizations are named?” → entities, not phrases.
- “What concepts recur?” → key phrases, not sentiment.
- “Does the writer approve?” → sentiment, not summary.
- “Reduce this to three sentences” → summarization, not key phrases.

## Lightweight structured flow

1. Choose the capability from the required output.
2. Authenticate and create the appropriate current client.
3. Assign a stable ID to every input document.
4. Send documents using the current supported request shape.
5. Iterate results by document ID.
6. Branch for per-document success or error; a mixed batch is possible.
7. Store only the evidence required by the application.

The exact SDK, operation, payload, and authentication code is deliberately omitted from this offline lesson because those details are volatile and belong in a reverified live lab.

## Assessment and remediation

Complete `primary_answers.json` closed-note, then run:

```powershell
python validate_text_analysis.py --form primary --check primary_answers.json
```

For a miss, name the requested output, contrast the nearest capability, then state how the document ID and error branch protect result attribution. Complete the unseen form:

```powershell
python validate_text_analysis.py --form transfer --check transfer_answers.json
```

Readiness requires 12/12 on both forms, all four techniques on both forms, both client-flow items, and one closed-note explanation. Review low-confidence contrasts tomorrow, then after 3, 7, and 14 days.

## Privacy, accessibility, and volatility

The exercise stores dimension-level correctness, not document text or service bodies. Cards have persistent labels, keyboard access, field-associated feedback, no time limit, and no color-only state. Reverify SDK packages, operations, endpoints, authentication, supported languages, limits, regions, pricing, and preview status before live use.
