# SIM-01 check

Optional: enable a 25-minute diagnostic timer. An untimed attempt is fully equivalent.

```powershell
python validate_simulation.py --check answers.json
```

Readiness requires 24/24, all 15 objectives covered, remediation of every miss through `../CUM-01/remediation_routes.json`, and independent retention of the CUM-01 transfer gate.
