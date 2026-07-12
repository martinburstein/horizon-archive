# CUM-01 check

Record `decision` and `reason` for all eight items, then run:

```powershell
python validate_cumulative.py --form primary --check primary_answers.json
python validate_cumulative.py --form transfer --check transfer_answers.json
```

Readiness requires 16/16 on both forms and all 15 objectives represented per form. Any miss routes every tagged objective through `remediation_routes.json`. Timing may be recorded optionally but never changes mastery or accessibility.
