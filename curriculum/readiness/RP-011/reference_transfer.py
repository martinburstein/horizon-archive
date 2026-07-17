part_replicas = [
    {"kind": "api", "role": "request_response_contract", "value": "bounded_exchange_shape"},
    {"kind": "sdk", "role": "client_library_abstraction", "value": "offline_client_shape"},
    {"kind": "endpoint", "role": "service_address_boundary", "value": None},
]

parts_by_kind = {}
for part in part_replicas:
    parts_by_kind[part["kind"]] = {"role": part["role"], "value": part["value"]}

fresh_integration_record = {
    "provenance": "blank_transfer_reach_replicas",
    "parts": parts_by_kind,
    "unsupported": {
        "identity": None,
        "topology": None,
        "continuity": None,
        "cause": None,
        "purpose": None,
        "readiness": None,
        "authority": None,
    },
}
