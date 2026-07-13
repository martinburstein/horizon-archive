# L-02-01 — AI Workloads and Azure AI Vocabulary

## Why this is exam-critical

**Official fact:** The AI-901 skills measured as of April 15, 2026 require you to identify scenarios for generative and agentic AI, text analysis, speech, computer vision, and information extraction. The exam's concepts-and-capabilities domain is 40–45%. See the [current official source register](../../sources/current-official-source-register.md).

Your first move in a scenario question is not to memorize a product name. Ask:

1. What is the primary input?
2. What must the system do?
3. What is the primary output?

Real systems can combine workloads. On a single-best-answer question, select the family that performs the central requested job.

## Six workload cards

| Workload | Primary job | Fast recognition cue |
| --- | --- | --- |
| Generative AI | Create new content from instructions or context | draft, compose, answer, generate |
| Agentic AI | Pursue a goal by reasoning over steps and using tools or actions | decide, call a tool, act, continue |
| Text analysis | Detect or summarize meaning in text | sentiment, entities, key phrases, summary |
| Speech | Convert between spoken audio and text or synthesized speech | transcribe, caption, speak, synthesize |
| Computer vision and image generation | Interpret visual content or create new visual output | describe image, detect visual feature, generate image |
| Information extraction | Turn documents, forms, images, audio, or video into requested structured fields | extract fields, schema, tables, named values |

**Official fact:** Microsoft describes Azure Language as NLP for understanding and analyzing text, Azure Speech as supporting speech-to-text and text-to-speech, and Content Understanding as multimodal information extraction. Foundry's documentation hub groups models, agents, and tools, and the Agent Service is the authority for agent behavior. Current product details are volatile; use these cards as workload concepts, not a promise that one product is always the implementation answer.

## Two high-value contrasts

### Generative versus agentic

- “Draft a reply to this customer” is primarily **generative AI**: the desired output is new content.
- “Check inventory, choose a substitute, update the order, and notify the customer” is primarily **agentic AI**: the system must decide and act across steps, likely using tools.

An agent can use a generative model, but tool-directed goal pursuit is the differentiator.

### Vision versus information extraction

- “Describe the objects and colors in this photograph” is primarily **computer vision**.
- “Return invoice number, vendor, date, and total as named fields” is **information extraction**.

Both may start with an image. The requested output decides the classification: visual interpretation versus a defined structured record.

## Activity 1 — Say the input, job, and output

For each case, state the three parts before naming the workload.

1. A help desk needs the sentiment of each written review.
2. A museum needs live captions for a spoken tour.
3. A designer needs a new image from a written brief.
4. An operations assistant must inspect a request, query inventory, and place an approved order.
5. Accounts payable needs invoice fields in a fixed schema.
6. A photo library needs descriptions of visible objects.

Check your reasoning in `check.md`, not merely the labels.

## Bridge retrieval — what the Machine Terminal remembers

**Bridge instruction:** This is Horizon Archive's course interaction model, not a Microsoft product or exam claim.

- **Editable source:** the instructions or code you are actively changing in the editor.
- **Runtime output:** the result produced by the latest Run action. It is evidence about that run, not editable source.
- **Saved mastery evidence:** privacy-limited facts such as lesson/activity ID, item correctness, attempts, hint level, confidence, misconception tags, and completion. It does not need your free-form source or answer text.

The active draft may survive closing and reopening the same Terminal because the exercise session can restore its local working state. A scene transition deliberately ends that working session and starts a clean draft so stale work cannot leak into a different encounter. Mastery evidence survives because it is saved separately from the temporary working session.

After a reload, resume, or scene round trip, read [Saved Evidence Is Prior Progress](saved-evidence-resume-guide.md). It explains why finalized results can be reconstructed with clean private controls without creating a new attempt, retaining your response, awarding exam credit, or acknowledging mastery.

Before looking back, answer:

1. Which layer can you edit?
2. Which layer is created when you press Run?
3. Which layer should record completion without retaining your free-form answer?
4. Why can close/reopen restore a draft while a scene transition resets it?

## Activity 2 — Workload Sort Terminal

Run the asset check first:

```powershell
python workload_terminal.py --self-test
```

Then run the exercise:

```powershell
python workload_terminal.py
```

Enter the short key shown beside each workload. The program gives one contrast-based hint after a miss and records no response text outside the process.

After remediation, use the fresh form instead of memorizing the first sequence:

```powershell
python workload_terminal.py --form retry
```

The playable Terminal may also reconstruct a finalized prefix after reload. Reconstruction never replaces the fresh retry required by a failed result or critical contrast miss.

## Mastery gate and remediation

Pass at 10/12 or higher with no critical contrast miss:

- `generative-is-agentic`
- `vision-is-extraction`
- `source-is-output`
- `working-state-is-mastery-evidence`

If you miss:

1. **Level 1 — cue:** underline the verb and circle the requested output.
2. **Level 2 — contrast:** compare only the two confused families using input → job → output.
3. **Level 3 — worked example:** read the matching explanation in `check.md`, then explain why the rejected family is weaker.
4. **Retry:** use a fresh scenario; do not repeat the same answer order.

## Spaced retrieval

- Tomorrow: recreate the six workload cards from memory and give one scenario for each.
- In three days: classify six fresh scenarios and justify each with input, job, and output.
- In seven days: complete the Terminal with no hints, then explain both critical contrasts and the three state layers aloud.
