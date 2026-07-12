# L-04-04 answer and remediation reference

The machine key is `answer_key.json`; reference files prove both passing paths.

- Choose modality from the source, then extraction from the requested fixed fields.
- A transcript, caption, OCR result, or visual description can be intermediate evidence, not necessarily the final record.
- Define field names/types/descriptions before analysis.
- Preserve null/missing and evidence; never guess an unsupported value.

Run `python validate_extraction_workloads.py --self-test` for modality/integrity coverage, blank rejection, vision-versus-extraction, and invented-value probes.
