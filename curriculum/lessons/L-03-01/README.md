# L-03-01 — Lists, dictionaries, and JSON-shaped thinking

## Outcome

Read and edit nested structured data using Python lists and dictionaries, then convert between a Python object and JSON text.

## Why this bridge exists

**Official fact:** The current AI-901 guide expects foundational Python syntax and programming techniques. Later Foundry and Content Understanding work uses structured request and response data. See the [current official source register](../../sources/current-official-source-register.md).

**Bridge instruction:** The packets, field names, programs, and gates in this lesson are course-authored. They simulate structure without claiming to be live Foundry payloads.

## Three shapes

- A **list** is ordered. Use a numeric index: `items[0]`. Add an item with `items.append(value)`.
- A **dictionary** maps keys to values. Use a key: `record["status"]`.
- **JSON** is text that can represent nested objects, arrays, strings, numbers, booleans, and null. `json.loads(text)` parses JSON text into Python data; `json.dumps(data)` serializes Python data to JSON text.

Python dictionaries and JSON objects look similar but are not identical things. In particular, Python uses `True`, `False`, and `None`; JSON text uses `true`, `false`, and `null`.

## Trace one bracket at a time

Given:

```python
packet = {
    "observations": [
        {"kind": "audio", "values": ["whistle", "echo"]}
    ]
}
```

Predict before running:

1. `packet["observations"]` → a list
2. `packet["observations"][0]` → a dictionary
3. `packet["observations"][0]["values"]` → a list
4. `packet["observations"][0]["values"][1]` → `"echo"`

Say the container type at each step. A string key opens a dictionary; a numeric index selects from a list.

## Guided primary form

Open `starter_primary.py`. Complete the three TODOs, predict its three output lines, then run:

```powershell
python validate_structures.py --form primary --check starter_primary.py
```

Do not replace `raw_json`, replace the whole packet, or hardcode printed answers. The point is to preserve and transform structure.

## Remediation and transfer

For a failed check:

1. Name the current container type.
2. Trace one bracket at a time.
3. Separate the in-memory Python object from serialized JSON text.
4. Fix only the failed operation and rerun.

Then complete `starter_transfer.py` without copying field names from the primary form:

```powershell
python validate_structures.py --form transfer --check starter_transfer.py
```

Readiness requires 8/8 on both forms, four correct predictions, and a closed-note explanation of list vs dictionary vs JSON. Review a low-confidence trace tomorrow, then after 3, 7, and 14 days.

## Volatility note

The Python standard-library operations here are stable, but future service payload fields, SDK objects, endpoints, and API versions are volatile and must be checked against current official documentation.
