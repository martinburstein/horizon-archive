# L-04-02 answer and remediation reference

The machine key is `answer_key.json`; reference files prove both passing paths.

- Recognition: audio in, text out.
- Synthesis: text in, audio out.
- Multimodal spoken prompt: audio participates in a broader deployed-model request.
- Recognition audio files are inputs; synthesized audio files are outputs.
- Inspect result reasons and cancellation details; do not treat every completion as successful content.

Run `python validate_speech_workloads.py --self-test` to verify coverage, references, blanks, and recognition/synthesis plus cancellation failure probes.
