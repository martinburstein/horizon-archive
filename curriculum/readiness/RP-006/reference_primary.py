import itertools

record_groups = [
    [{"state_id": "r1", "changed": None, "persistent": "continuity", "available": True, "cause": None}],
    [{"state_id": "r2", "changed": "vane", "persistent": "continuity", "available": True, "cause": None}],
    [{"state_id": None, "changed": None, "persistent": None, "available": False, "cause": None}],
    [{"state_id": "r4", "changed": "film", "persistent": "continuity", "available": True, "cause": None}],
]

sequence = list(itertools.chain.from_iterable(record_groups))
