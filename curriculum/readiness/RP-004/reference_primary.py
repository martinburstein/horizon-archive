samples = [
    {"sample_id": "suspension_replica", "form": "particulate"},
    {"sample_id": "pressure_replica", "form": "cyclic"},
    {"sample_id": "heat_replica", "form": "thermal"},
]

corridor_for_form = {
    "particulate": "porous",
    "cyclic": "tensioned",
    "thermal": "jointed",
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
