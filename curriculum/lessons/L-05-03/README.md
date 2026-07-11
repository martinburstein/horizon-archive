# L-05-03 — Endpoints, SDKs, and Lightweight Client Flow

## Why this is exam-critical

**Official fact:** The current AI-901 guide includes creating a lightweight chat client with the Foundry SDK, and the Foundry implementation domain is 55–60% of the exam. The official SDK overview describes a Foundry project endpoint and the current Python `AIProjectClient` pattern. See [the source register](../../sources/current-official-source-register.md).

**Bridge instruction:** This lab uses a local simulation so you can master the flow without an Azure subscription or secret. A simulated response is not proof that a live Foundry resource is configured.

## Mental model

```text
your Python app
  -> project client (endpoint + credential)
  -> OpenAI-compatible client
  -> request (model/deployment + input)
  -> Foundry service
  -> response object
  -> response.output_text
```

Keep these separate:

- **Endpoint:** the network address of the Foundry project.
- **Credential:** proves identity and authorization.
- **Model/deployment name:** selects what handles the request.
- **Input:** the prompt or other data sent.
- **Response:** the returned structured object.
- **SDK:** Python package that provides client objects and methods so you do not hand-build every HTTP detail.

## Activity 1 — Run the safe simulation

Run:

```powershell
python mock_client.py
```

Expected result:

```text
Endpoint valid: True
Model selected: horizon-training-model
Response: SIMULATED: Archive status received.
```

Open the file and trace each printed value back to configuration, request, or response.

## Activity 2 — Debug three boundaries

Make and repair one change at a time:

1. Remove `https://` from the endpoint. The validation should fail.
2. Change the model name. The response should report the new selected model while the endpoint stays unchanged.
3. Remove the `input` key. The simulation should raise a clear error.

After each repair, say which boundary failed: endpoint, model selection, or request payload.

## Activity 3 — Read the current official pattern

The official source currently shows this conceptual shape for Python:

```python
from azure.identity import DefaultAzureCredential
from azure.ai.projects import AIProjectClient

project_client = AIProjectClient(
    endpoint="https://<resource>.services.ai.azure.com/api/projects/<project>",
    credential=DefaultAzureCredential(),
)

with project_client.get_openai_client() as openai_client:
    response = openai_client.responses.create(
        model="<deployment-name>",
        input="<your prompt>",
    )
    print(response.output_text)
```

Do not run placeholders as though they were real configuration. Before a live attempt, re-open the [official SDK and endpoints page](https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview), verify the package/version and prerequisites, authenticate with the approved method, and use values from your own authorized resource.

**Safety rule:** never paste a real API key into lesson files, source control, screenshots, or assessment answers. Microsoft’s current sample uses `DefaultAzureCredential`; your organization may impose additional identity and RBAC requirements.

## Closed-note mastery check

Score with `check.md`.

1. Label each item endpoint, credential, model/deployment, input, or response: a URL; `DefaultAzureCredential()`; `"summarize this"`; `response.output_text`; `"my-model"`.
2. Why can a correct endpoint still produce an authorization failure?
3. Why is the local simulation useful, and what can it not prove?
4. Put in order: create project client; obtain compatible client; send request; read output.
5. Name the safest response to a sample that asks you to hardcode a real key.

## Mastery and remediation

- Advance at 8/10 or higher only if endpoint vs deployment and secret handling are both correct.
- If endpoint and deployment are confused, redraw the flow with the endpoint as an address and deployment as a selection.
- If authentication is confused with configuration, explain identity, authorization, and endpoint in three separate sentences.
- If code structure is the issue, annotate each line as import, configuration, client creation, request, or output.
- Retry with new mock values; do not memorize answer order alone.

## Spaced retrieval

- Tomorrow: redraw the six-part mental model from memory.
- In three days: repair a mock endpoint/payload fault without notes.
- In seven days: explain the official client pattern line by line and reverify the official documentation date/details.

