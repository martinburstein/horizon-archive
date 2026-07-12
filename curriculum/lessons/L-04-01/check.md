# L-04-01 answer and remediation reference

The machine key is `answer_key.json`; both `reference_*_answers.json` files prove the passing paths.

- Phrases summarize concepts as a compact list; entities identify named things and types.
- Sentiment identifies attitude/polarity; summarization produces condensed natural language.
- Preserve input document IDs so each result or error maps back reliably.
- Inspect success/error per document rather than assuming the entire batch shares one state.

Run `python validate_text_analysis.py --self-test` to verify capability coverage, two client-flow items per form, reference passes, blank failures, and misconception probes.
