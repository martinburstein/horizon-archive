# L-03-03 — Imports, files, packages, secrets, and APIs

## Outcome

Explain and build the offline client bridge: import code, read configuration from a file, obtain a credential through an environment lookup, assemble an HTTP-shaped request, and keep request data distinct from response data.

## Source boundary

**Must know for AI-901:** The current guide expects Python foundations and familiarity with REST APIs, SDKs, and CLIs. Current Foundry documentation distinguishes SDKs by scenario, uses installed packages, and demonstrates environment-aware credentials and endpoints. See the [current official source register](../../sources/current-official-source-register.md).

**Course-authored bridge:** `example.invalid` endpoints, configs, request plans, data, and readiness gates are simulations. This lesson makes no network call and is not a current Foundry payload sample.

## Five layers

1. **Module/import:** `import json` loads a standard-library module; `from request_tools import safe_summary` imports from this lesson's local module.
2. **Package/environment:** A package is installed into a Python environment; an import uses it from that environment. Standard-library modules need no `pip`. A third-party package generally must be installed first, preferably with `python -m pip ...` in the active environment.
3. **File/config:** A path identifies a file. `Path(path).read_text()` reads text; `json.loads(...)` parses that text into Python dictionaries/lists.
4. **Secret:** Source code stores the environment-variable **name**, not the credential value. The value is retrieved at runtime and must not be printed or stored as mastery evidence. Production Foundry guidance commonly favors Microsoft Entra ID; this offline lab uses a generic injected lookup only to teach separation.
5. **API flow:** A request has a method, URL, headers, and optional body. A response arrives later with a status and response body. Building a request dictionary is not the same as sending it.

## Retrieval check

Complete `retrieval_answers.json`, then run:

```powershell
python validate_client_bridge.py --retrieval retrieval_answers.json
```

You must distinguish standard-library import, third-party installation, environment-backed secret retrieval, and request versus response parts at 4/4.

## Guided primary form

Complete `prepare_request` in `starter_primary.py`. It must read whichever path is passed, use the configured environment-variable name, reject a missing secret, and return this shape:

```python
{
    "method": "POST",
    "url": config["endpoint"],
    "headers": {
        "Authorization": f"Bearer {secret}",
        "Content-Type": "application/json",
    },
    "json": config["body"],
}
```

Validate without setting or exposing a real credential:

```powershell
python validate_client_bridge.py --form primary --check starter_primary.py
```

The validator injects temporary fake secrets and a hidden config. It performs no network request.

## Remediation and transfer

If a check fails, identify the layer first: import, environment, file, secret, request, or safe output. Trace the environment-variable name separately from its value. Then complete `starter_transfer.py`:

```powershell
python validate_client_bridge.py --form transfer --check starter_transfer.py
```

Readiness requires retrieval 4/4 and both code forms 10/10, including hidden-config, missing-secret, offline, and redaction checks. Explain module → file → parsed config → secret lookup → request → response without notes. Review weak layers tomorrow, then after 3, 7, and 14 days.

## Volatility and safety

Never paste a real secret into these files. Package names/versions, SDK choices, endpoints, identity flows, roles, API versions, request schemas, and supported runtimes can change; recheck official documentation immediately before a live lab.
