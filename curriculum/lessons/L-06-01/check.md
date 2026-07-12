# L-06-01 check

For every scenario, record `decision` as the objective ID and `reason` as the evidence statement, then run:

```powershell
python validate_objective_ledger.py --form primary --check primary_answers.json
python validate_objective_ledger.py --form transfer --check transfer_answers.json
```

Each exact field earns one point. Readiness requires 30/30 on both forms, all 15 objectives, and a closed-note explanation of both domains. Any miss marks that objective `remediate`; confidence never changes the score.
