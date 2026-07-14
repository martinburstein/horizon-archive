# SDK route chooser — current-pattern retrieval drill

Verified against official Microsoft Learn pages on **2026-07-13**.

This is course-authored practice, not Microsoft exam content. It strengthens `L-05-03`; it does not replace the lesson's existing client-boundary gate or prove live Azure access.

## The decision rule

Start with the work you need to do, then select the narrowest current route that fits:

| Need | Current route |
|---|---|
| Foundry-native project APIs, agents, evaluations, or Foundry-specific features | Foundry SDK |
| Hosted agents or multi-agent systems written in code | Agent Framework |
| Maximum OpenAI compatibility, embeddings, low latency, or direct-model Chat Completions | OpenAI SDK |
| Anthropic Claude models deployed in Foundry | Anthropic SDK |
| A specific prebuilt service such as Speech, Vision, or Language | Foundry Tools SDK for that service |

The Foundry SDK is the thin-client layer over Foundry project APIs. Higher-level routes can build on it. An SDK choice does not grant permission, create a resource, prove authentication, or authorize an external action.

## Three boundaries to keep separate

1. **Scenario fit:** Which capability and development pattern does the application need?
2. **Resource and endpoint:** A Foundry resource and an Azure OpenAI resource do not expose the same set of endpoints.
3. **Identity and authority:** Microsoft samples may use Microsoft Entra ID and `DefaultAzureCredential`, but the learner must still verify the approved identity, RBAC, resource, and current documentation before live use.

## Practice sequence

1. Read each scenario in `sdk_route_scenarios.json` without opening the key.
2. Enter one `route` token and one `reason` token per item in `sdk_route_answers.json`.
3. Check the primary form:

   ```powershell
   python validate_sdk_route_chooser.py --form primary --check sdk_route_answers.json
   ```

4. For every miss, name the confused boundary and re-read the decision table.
5. Complete the fresh transfer form in `sdk_route_transfer_answers.json`, then run:

   ```powershell
   python validate_sdk_route_chooser.py --form transfer --check sdk_route_transfer_answers.json
   ```

The strengthening gate is **16/16 on primary and 16/16 on fresh transfer**. A correct route with an incorrect reason is not mastery.

## Retrieval and remediation

- Tomorrow: redraw the five-route table from memory.
- In three days: explain why “Foundry” is not one interchangeable client or endpoint.
- In seven days: re-open the official SDK page before repeating transfer; product names, packages, versions, endpoints, roles, models, and availability are volatile.
- If you confuse a project endpoint with a model/deployment name, return to the main `L-05-03` flow before retrying.
- If you choose from brand familiarity instead of scenario fit, underline the capability requested in each scenario and try again.

## Privacy, access, and action boundary

Store only item IDs, route/reason correctness, attempts, confidence, misconception tags, and mastery status. Do not store real endpoints, credentials, resource names, deployment names, payloads, responses, or learner source. This drill makes no service call and authorizes no login, deployment, resource creation, credential use, purchase, disclosure, or deletion.

## Official sources

- [AI-901 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901)
- [Microsoft Foundry documentation](https://learn.microsoft.com/en-us/azure/foundry/)
- [Microsoft Foundry SDKs and Endpoints](https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview)
- [Microsoft Foundry Agent Service overview](https://learn.microsoft.com/en-us/azure/foundry/agents/overview)
- [Azure Content Understanding in Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview)
