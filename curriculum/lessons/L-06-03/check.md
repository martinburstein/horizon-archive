# L-06-03 check

Record a `decision` and `reason` for each scenario, then run:

```powershell
python validate_capstone_readiness.py --form primary --check primary_answers.json
python validate_capstone_readiness.py --form transfer --check transfer_answers.json
```

Each exact field earns one point. Readiness requires 12/12 on both forms, all 15 objective-ledger rows ready, all remediation routes closed, and a closed-note capstone explanation. The result is a next-practice recommendation, not an exam guarantee.
