replica_summary = {"recurring_count": 4, "divergent_count": 3}
sealed_reading = None


def build_summary(replica_summary, sealed_reading):
    return {
        "recurring_count": replica_summary["recurring_count"],
        "divergent_count": replica_summary["divergent_count"],
        "sealed": sealed_reading,
        "judgment": None,
    }


summary = build_summary(replica_summary, sealed_reading)
