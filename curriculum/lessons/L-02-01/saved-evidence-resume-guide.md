# Saved Evidence Is Prior Progress

When Workload Sort reopens after a reload or scene round trip, it creates a clean working session from sanitized saved evidence. A reconstructed card result is **prior assessed progress**. Reconstruction does not check a card again and does not create a new attempt.

This is a course interaction boundary, not a Microsoft product or exam behavior claim. The workload concepts still trace to the [current official source register](../../sources/current-official-source-register.md).

## What “finalized” means

A card becomes finalized only after its assessment path records a result:

- a correct selection finalizes the card as correct;
- a first miss does not finalize it, because contrast remediation and another selection remain available;
- a later finalized miss records the result and any critical misconception that must be remediated.

On reconstruction, the System accepts only the contiguous allowlisted prefix of finalized results. It derives the active form, first incomplete card, score, and critical-contrast override from that prefix. It does not rerun the evaluator, increment attempts, reveal an answer, or infer a result from total attempt or hint counts.

## Read the resume message literally

| Saved state | Exact System message | What you do next |
| --- | --- | --- |
| No contiguous finalized card | `Choose the best primary workload or Terminal state, then check the card.` | Begin with clean controls. |
| One or more finalized cards, then an incomplete card | `Saved evidence restored. Continue with the first incomplete card.` | Continue at the first gap; earlier results are prior progress, not new attempts. |
| Active form fully finalized but not acknowledged | `Saved form complete. Review the result and confirm or remediate it.` | Review the reconstructed result gate, then acknowledge or load the required fresh retry. |

“Saved evidence restored” does not mean that a physical Terminal remembered you. It reports reconstruction by the local course System from a bounded saved record.

## What was and was not retained

The durable record may contain identifiers, finalized item correctness, bounded total attempt and hint telemetry, allowlisted misconception tags, confidence, and mastery status.

It does not retain your selected choice, private or free-form response, copied scenario prompt, transient feedback, cursor or focus position, working index, per-card attempt state, open hint state, or the session object. Packaged course prompts can load again from the exercise asset; that is not retention of your response.

Close and reopen within the same application session is different: the in-memory working session may restore the exact current card, choice, remediation, and feedback. Closing still does not submit a selected choice. Reload, resume, or a scene round trip clears that live working session before reconstruction.

## The strict gate is unchanged

Reconstruction can display prior results, but it cannot award mastery. Workload Sort still requires:

1. at least **10/12** on the active form;
2. no critical contrast miss;
3. targeted remediation and a fresh-form retry when the result gate requires it;
4. recorded confidence; and
5. the explicit **`Acknowledge mastery`** action.

An 11/12 result with a critical miss does not pass. A reconstructed 12/12 result is still unacknowledged until confidence is present and you explicitly acknowledge it. Reloading, backtracking, or reopening never substitutes for remediation, retry, confidence, or acknowledgement.

## Exam, readiness, and authority boundary

- Reconstruction is not a new assessment attempt and does not preserve a retained private response.
- Prior course evidence does not count as Microsoft exam credit.
- A Workload Sort result is lesson evidence, not a readiness guarantee or an AI-901 result guarantee.
- This exercise is offline. It does not call Microsoft Foundry or Azure, use credentials, change a service, or grant external authority.

## Quick retrieval check

1. After one unfinalized miss, reload opens the first incomplete card with no choice selected. Was your missed choice retained? **No. Only bounded aggregate telemetry may persist; private working controls reset.**
2. Four finalized cards reappear in the result prefix. Did reload create four new attempts? **No. They are reconstructed prior assessed progress.**
3. A reconstructed form shows 12/12 and no critical miss. Is mastery automatic? **No. Confidence and `Acknowledge mastery` are still required.**
4. A reconstructed form shows 11/12 with a critical miss. Can the raw score bypass remediation? **No. The critical override requires remediation and a fresh form.**
5. Does restored course evidence give exam credit, readiness assurance, or permission to change Azure resources? **No.**
