# SIM-03 check

Use optional 25-minute diagnostic timing or the fully equivalent untimed mode.

```powershell
python validate_simulation.py --evidence entry_evidence.json --check answers.json
```

Gate: valid prerequisite evidence plus 24/24 on this fresh form, all 15 objectives represented, no unresolved critical misconception, and no confidence, timing, or prior score used to average away a miss.

If the entry gate fails, return to the named prerequisite; do not take the final block early. If an item fails, route every tagged objective through `../CUM-01/remediation_routes.json`, explain the decision rule, repair a near-transfer case, then take a new far-transfer item.

`ready_to_schedule_with_strong_evidence` is a course recommendation, not a Microsoft result prediction or permission to perform any external action.

