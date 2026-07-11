# L-05-03 Mastery Check

Ten points total.

1. One point each: URL = endpoint; `DefaultAzureCredential()` = credential; `"summarize this"` = input; `response.output_text` = response/output field; `"my-model"` = model/deployment. (5)
2. The endpoint only identifies where to connect; the caller can still lack a valid identity or required authorization/RBAC. (1)
3. Simulation safely practices code/data flow and debugging; it cannot prove Azure connectivity, authentication, authorization, deployment availability, or current service behavior. (1)
4. Create project client → obtain compatible client → send request → read output. (1)
5. Refuse to hardcode the key; use an approved secret/identity mechanism and current official guidance. (2; secret handling is critical)

Critical misconceptions:

- `endpoint-is-deployment`
- `credential-is-endpoint`
- `simulation-proves-live-access`
- `hardcoded-secret-is-acceptable`
- `response-is-plain-text-only`

Route any critical miss to remediation even if the raw score is 8 or higher.

