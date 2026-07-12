# L-05-04 check

For each scenario, record both the `decision` and `reason` in the selected answer file. Run:

```powershell
python validate_single_agent.py --form primary --check primary_answers.json
python validate_single_agent.py --form transfer --check transfer_answers.json
```

Each exact field earns one point. Readiness requires 12/12 on both forms, all six boundaries, and a closed-note explanation of the workflow and action safeguard. After a miss, use `answer_key.json`, explain the boundary, reset working state, and retry the fresh transfer form.
