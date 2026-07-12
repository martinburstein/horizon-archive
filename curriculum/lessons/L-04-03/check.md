# L-04-03 answer and remediation reference

The machine key is `answer_key.json`; reference files prove both passing paths.

- Existing image → description/labels: image analysis.
- Image plus textual question → general response: multimodal visual prompt.
- Prompt → new still: image generation.
- Prompt/storyboard → new motion media: video generation.
- Validate media path/type before requests.
- Parse structured analysis separately from generated media artifacts.

Run `python validate_visual_workloads.py --self-test` for coverage, blank rejection, analysis/generation confusion, and output-shape failure probes.
