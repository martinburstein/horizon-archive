import itertools

record_groups = [
    [{"state_id": "s1", "changed": None, "persistent": "joint", "available": True, "cause": None}],
    [{"state_id": "s2", "changed": "ridge", "persistent": "joint", "available": True, "cause": None}],
    [{"state_id": None, "changed": None, "persistent": None, "available": False, "cause": None}],
    [{"state_id": "s4", "changed": "coating", "persistent": "joint", "available": True, "cause": None}],
]

sequence = list(itertools.chain.from_iterable(record_groups))
