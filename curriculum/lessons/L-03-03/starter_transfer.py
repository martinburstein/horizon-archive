import json
import os
from pathlib import Path
from request_tools import safe_summary


def assemble_call(settings_path, getenv=os.getenv):
    # Apply the same safe pattern to transfer_config.json.
    return {}


if __name__ == "__main__":
    request = assemble_call(Path(__file__).with_name("transfer_config.json"))
    print(json.dumps(safe_summary(request), sort_keys=True))
