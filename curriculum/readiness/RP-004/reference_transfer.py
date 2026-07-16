samples = [
    {"sample_id": "fiber_replica", "form": "filament"},
    {"sample_id": "wave_replica", "form": "oscillating"},
    {"sample_id": "gradient_replica", "form": "graded"},
]

corridor_for_form = {
    "filament": "meshed",
    "oscillating": "resonant",
    "graded": "layered",
}

correspondence = []
for sample in samples:
    correspondence.append(
        {
            "sample_id": sample["sample_id"],
            "corridor": corridor_for_form[sample["form"]],
        }
    )

common_return = {"observed": True, "purpose": None}
