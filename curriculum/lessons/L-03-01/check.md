# L-03-01 check and answer reference

The passing implementations are `reference_primary.py` and `reference_transfer.py`. Run the validator self-test with:

```powershell
python validate_structures.py --self-test
```

Prediction answers: list, dictionary, list, `"echo"`.

- `json_to_nested_containers`: confirm `json.loads` produced a dictionary containing a list and nested metadata dictionary.
- `appends_record`: use `.append(...)`; do not replace the list.
- `updates_nested_flag`: assign at `packet["meta"][...]`.
- nested access checks: traverse from outer dictionary to list index to inner dictionary/list.
- `json_round_trip`: `json.loads(encoded)` must reconstruct the edited packet.
- `derived_output_no_bypass`: print variables and serialized data, not answer literals.
