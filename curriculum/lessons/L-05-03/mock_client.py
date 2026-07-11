"""Offline learning simulation. This file does not call Microsoft Foundry."""

PROJECT_ENDPOINT = "https://training.services.ai.azure.com/api/projects/horizon"
MODEL_NAME = "horizon-training-model"


def simulate_response(endpoint, request):
    if not endpoint.startswith("https://"):
        raise ValueError("Endpoint must begin with https://")
    if "input" not in request:
        raise KeyError("Request payload needs an 'input' field")
    return {"output_text": "SIMULATED: Archive status received."}


request = {
    "model": MODEL_NAME,
    "input": "Report archive status.",
}
response = simulate_response(PROJECT_ENDPOINT, request)

print("Endpoint valid:", PROJECT_ENDPOINT.startswith("https://"))
print("Model selected:", request["model"])
print("Response:", response["output_text"])

