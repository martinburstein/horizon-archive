# AI-901 Assessment, Review, and Readiness System

This is a course-authored coaching system, not a promise of an exam result. Microsoft reports a passing scaled score of 700 or greater; the stricter gates below are internal buffers intended to expose fragile knowledge before exam day.

## Retrieval cadence

Every launch-critical lesson gets:

- an immediate closed-note check;
- a next-day retrieval item;
- a three-day interleaved item;
- a seven-day scenario or code-trace item;
- a 14-day cumulative review item when the objective remains active.

Correct answers with low confidence remain in the queue. Incorrect answers with high confidence receive highest remediation priority because they suggest a misconception.

## Error log contract

Record one row per miss:

| Field | Meaning |
| --- | --- |
| date | Attempt date |
| objective_or_skill | AI-901 objective ID or Python skill ID |
| item_type | recall, scenario, ordering, code trace, debug, or live lab |
| chosen_reason | Why the learner selected the answer |
| correct_reason | The rule that resolves the item |
| misconception_tag | Stable label for recurrence tracking |
| confidence | low, medium, or high before feedback |
| remediation | Exact lesson/activity assigned |
| retry_due | Next scheduled attempt |
| retry_result | correct, partial, incorrect, or pending |

Do not merely reread after a miss. The remediation loop is: classify → explain → practice a near transfer → practice a far transfer → schedule retrieval.

## Timed practice sequence

Use original course-authored questions and official Microsoft practice resources. Do not reproduce live exam questions or use dumps.

1. **Diagnostic, untimed:** before Chapter 2; establishes baseline, does not gate progress.
2. **Domain set A:** concepts/capabilities; timed at a sustainable pace; review every option.
3. **Domain set B:** Foundry implementation; heavier weighting consistent with the official blueprint.
4. **Mixed half exam:** after all first-pass lessons; no notes, one sitting.
5. **Full simulation 1:** current blueprint proportions and varied item forms.
6. **Full simulation 2:** new questions after remediation, not an immediate repeat.
7. **[Final confidence simulation](readiness/SIM-03/README.md):** only after the readiness gate is met; entry evidence must also show the prior fresh simulations were separated by at least 48 hours and the controlling sources were reverified within seven days.

Question counts and time boxes should be adjusted to the current official exam experience near the booking date. The curriculum must not invent a fixed live-exam count.

## Readiness gates

### Python/implementation gate

- Independently run and debug short Python files.
- Read lists, dictionaries, JSON, functions, imports, environment variables, and response objects.
- Trace a lightweight client request and protect secrets.
- Complete each core simulated lab independently; live labs are desirable but not required when Azure access is unavailable.

### Objective gate

- Every current AI-901 objective has at least two successful retrievals on different days.
- Every implementation objective has at least one scenario/code/workflow success, not recall alone.
- No critical misconception remains open.

### Exam-simulation gate

- At least 85% on two fresh, blueprint-weighted full simulations separated by remediation and at least 48 hours.
- At least 80% in each domain on the later simulation.
- All high-confidence misses explained and successfully retested.
- Timing leaves a review buffer; no material cluster is answered by guessing alone.

Meeting the gate means “ready to schedule with a strong evidence base,” not “guaranteed score.” Missing it produces a targeted plan rather than a failure label.

## Remediation routing

- Python syntax/runtime miss → Chapter 1 or 3 micro-lab, then a new code trace.
- Workload-selection miss → objective concept lesson, contrast table from memory, then a novel scenario.
- Foundry portal/SDK/agent miss → workflow reconstruction, simulated lab, then ordering plus troubleshooting.
- Text/speech/vision/extraction miss → capability boundary exercise, then a multimodal scenario.
- Responsible AI miss → identify affected principle, harmed stakeholder, mitigation, and accountable owner in a new scenario.
- Repeated miss after two remediation cycles → shrink the skill, teach prerequisites, and require verbal self-explanation before another scored attempt.
