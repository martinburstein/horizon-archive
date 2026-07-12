# L-03-03 check and remediation reference

Passing code is in `reference_primary.py` and `reference_transfer.py`; retrieval answers are in `reference_retrieval_answers.json`.

- `required_imports`: use standard modules plus the supplied local `request_tools` module.
- `function_signature`: preserve the path and injectable environment-lookup parameters.
- `file_json_flow`: read the supplied path and parse its JSON; do not paste config values into code.
- `environment_lookup`: call the supplied lookup with `config["secret_env"]`.
- `missing_secret_rejected`: raise `ValueError` before building an unauthenticated request.
- `sample_request` and `hidden_config_reuse`: derive method, URL, headers, and body from inputs.
- `offline_no_network`: this bridge builds a request plan only.
- `secret_redacted`: use `safe_summary`; never print authorization values.

`validate_client_bridge.py --self-test` proves the references, unfinished starters, retrieval key, hidden config, missing-secret path, offline rule, and credential redaction.
