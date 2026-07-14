# SDK route decision trace - remediation and retrieval

Verified against current official Microsoft Learn pages on **2026-07-13**.

This is course-authored practice, not Microsoft exam content. It follows the SDK Route Chooser when a route or reason is missed. It makes no service call and does not prove access, authentication, authorization, or exam readiness by itself.

## Why trace three decisions?

A product name alone is not enough. Trace each scenario through three separate decisions:

1. **Route:** choose the client family that matches the requested capability.
2. **Endpoint family:** identify the endpoint family that the current official route expects. Do not memorize or enter a real URL.
3. **Next action:** verify current documentation, approved resource scope, identity, and RBAC before any live use.

The same endpoint family can support different routes. In current Microsoft guidance, both the Foundry SDK and Agent Framework use the Foundry project boundary, but they serve different development patterns. A correct endpoint family therefore does not prove that the client route is correct.

## Compact decision table

| Capability signal | Route | Endpoint family |
|---|---|---|
| Foundry project APIs, agents, evaluations, or Foundry-specific features | `foundry_sdk` | `foundry_project_endpoint` |
| Hosted agents or code-based multi-agent orchestration | `agent_framework` | `foundry_project_endpoint` |
| Embeddings, direct-model Chat Completions, maximum OpenAI compatibility, or lowest latency | `openai_sdk` | `openai_v1_endpoint` |
| Anthropic Claude deployed in Foundry | `anthropic_sdk` | `anthropic_endpoint` |
| A specific prebuilt service such as Speech, Vision, or Language | `foundry_tools_sdk` | `tool_specific_endpoint` |
| Resource, endpoint, identity, role, version, preview state, or availability is not verified | `reverify_before_live` | `unverified_endpoint` |

The endpoint labels above are conceptual families, not configuration values. Never put a real endpoint, key, tenant, subscription, resource, deployment, request, or response in these answer files.

## Error clinic

- **Foundry SDK vs Agent Framework:** ask whether the task is broad Foundry project access or code-based hosted/multi-agent orchestration.
- **Foundry SDK vs OpenAI SDK:** ask whether the task needs Foundry-native project operations or the broad OpenAI API surface.
- **OpenAI SDK vs Foundry Tools SDK:** ask whether the task is a general model operation or a specific prebuilt service client.
- **OpenAI SDK vs Anthropic SDK:** follow the deployed provider/model requirement rather than API familiarity.
- **Route vs endpoint:** select both; one cannot substitute for the other.
- **Technical fit vs authority:** even a correct route and endpoint family do not grant permission. Verify approved identity, RBAC, resource, and scope before live use.

## Practice

1. Complete the primary trace in `sdk_route_trace_answers.json` without opening the key.
2. Check it:

   ```powershell
   python validate_sdk_route_trace.py --form primary --check sdk_route_trace_answers.json
   ```

3. For each miss, say whether the error was route, endpoint family, or next action. Re-read only that row or clinic contrast.
4. Complete the fresh transfer trace in `sdk_route_trace_transfer_answers.json`.
5. Check it:

   ```powershell
   python validate_sdk_route_trace.py --form transfer --check sdk_route_trace_transfer_answers.json
   ```

The remediation gate is **18/18 on primary and 18/18 on fresh transfer**. Every item requires all three decisions. Retry is unlimited and untimed.

## Retrieval schedule

- Tomorrow: redraw the six-row table using only the capability signals.
- In three days: explain why two routes can share an endpoint family without becoming interchangeable.
- In seven days: re-open the official SDK page, recheck every route, and complete the transfer form again.

## Privacy and authority boundary

Persist only item IDs, dimension correctness, attempts, confidence, misconception tags, form, and mastery status. Keep selected answers in temporary working state. Do not collect endpoints, credentials, resource names, deployment names, payloads, responses, source code, timing, or interaction paths. No answer authorizes login, provisioning, deployment, purchase, credential use, disclosure, service call, or deletion.

## Official sources

- [AI-901 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901)
- [Microsoft Foundry documentation](https://learn.microsoft.com/en-us/azure/foundry/)
- [Microsoft Foundry SDKs and Endpoints](https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview)
- [Microsoft Foundry Agent Service overview](https://learn.microsoft.com/en-us/azure/foundry/agents/overview)
- [Azure Content Understanding in Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview)
