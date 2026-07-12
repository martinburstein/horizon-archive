# L-05-06 check

Record a `decision` and `reason` for each scenario, then run:

```powershell
python validate_visual_patterns.py --form primary --check primary_answers.json
python validate_visual_patterns.py --form transfer --check transfer_answers.json
```

Each exact field earns one point. Readiness requires 12/12 on both forms, all six boundaries, and a closed-note explanation of one complete visual flow and its action safeguard. Remediate with `answer_key.json`; do not copy reference answers into learner files.
