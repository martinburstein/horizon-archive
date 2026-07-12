# L-03-02 — Conditionals, loops, and small functions

## Outcome

Write a reusable function that loops over inputs, applies an `if/else` rule, accumulates one result per item, and returns the completed list.

## Source boundary

**Official fact:** The current AI-901 guide expects foundational Python syntax and programming techniques. See the [current official source register](../../sources/current-official-source-register.md).

**Bridge instruction:** The readings, routing records, programs, and 8/8 gates are course-authored practice. They are not live Microsoft Foundry schemas or exam questions.

## The five-step flow

```python
def classify(values, threshold):       # 1. parameters receive inputs
    results = []                       # 2. accumulator starts empty
    for value in values:               # 3. loop visits every item
        if value >= threshold:          # 4. condition selects one branch
            results.append("alert")
        else:
            results.append("clear")
    return results                     # 5. return once, after the loop
```

- A **parameter** is a local name for an input supplied by the caller.
- A `for` loop repeats the indented body once per item.
- An `if/else` runs exactly one branch for each item.
- An accumulator collects results. Keep `append` inside the loop so every item contributes.
- Place `return` after the loop. A return inside the loop exits after the first item.

## Guided prediction

Before running the example above, predict:

- `classify([2, 5, 7], 5)` → `['clear', 'alert', 'alert']`
- The boundary value `5` is `alert` because the rule uses `>=`, not `>`.
- The input list remains unchanged because the function builds a new results list.

## Primary practice

Complete `starter_primary.py`, then run:

```powershell
python validate_control_flow.py --form primary --check starter_primary.py
```

The validator calls your function with unseen data. Printing or returning the sample answer directly cannot pass.

## Remediation and retrieval

For a miss, trace one iteration with a single value:

1. What do the parameters contain?
2. Is the boundary comparison true or false?
3. Which branch appends?
4. Is append inside the loop?
5. Does return happen only after every item?

Then complete `starter_transfer.py` closed-note:

```powershell
python validate_control_flow.py --form transfer --check starter_transfer.py
```

Readiness requires 8/8 on both forms, including boundary and unseen-input probes, plus a closed-note explanation of parameter → loop → condition → append → return. Review one low-confidence trace tomorrow, then after 3, 7, and 14 days.

## Privacy and volatility

The exercise stores check-level mastery evidence, not learner source or input records. Python control-flow syntax is stable, but future Foundry SDK versions, service schemas, endpoints, and runtime requirements must be reverified against current official documentation.
