# L-06-02 check

Record a `decision` and `reason` for each scenario, then run:

```powershell
python validate_remediation_planner.py --form primary --check primary_answers.json
python validate_remediation_planner.py --form transfer --check transfer_answers.json
```

Each exact field earns one point. Readiness requires 12/12 on both forms and a complete source-backed route for every weak objective. Confidence, repeating the same item, or a domain average cannot bypass missing evidence.
