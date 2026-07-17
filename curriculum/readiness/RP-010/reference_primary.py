request_record = {
    "method": "POST",
    "route_label": "project_responses",
    "headers": {"content_type": "application/json"},
    "payload": {
        "record_ids": ["near_relation", "ordered_gap", "far_correspondence"],
        "scope": "sanitized_exposed_record_replicas",
    },
}

response_record = {
    "status_code": 200,
    "headers": {"content_type": "application/json"},
    "body": {
        "supported": ["near_relation"],
        "counterevidence": ["far_correspondence"],
        "ambiguous": ["ordered_gap"],
        "unavailable": ["outer_margin"],
        "identity": None,
        "topology": None,
        "continuity": None,
        "transformation": None,
        "unity": None,
        "synchronization": None,
        "chronology": None,
        "cause": None,
        "purpose": None,
    },
}

exchange_summary = {
    "request": {
        "method": request_record["method"],
        "route_label": request_record["route_label"],
        "content_type": request_record["headers"]["content_type"],
        "record_ids": request_record["payload"]["record_ids"],
        "scope": request_record["payload"]["scope"],
    },
    "response": {
        "status_code": response_record["status_code"],
        "content_type": response_record["headers"]["content_type"],
        "supported": response_record["body"]["supported"],
        "counterevidence": response_record["body"]["counterevidence"],
        "ambiguous": response_record["body"]["ambiguous"],
        "unavailable": response_record["body"]["unavailable"],
    },
    "unsupported": {
        key: response_record["body"][key]
        for key in (
            "identity",
            "topology",
            "continuity",
            "transformation",
            "unity",
            "synchronization",
            "chronology",
            "cause",
            "purpose",
        )
    },
}
