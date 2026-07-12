import json
import os
from pathlib import Path
from request_tools import safe_summary


def assemble_call(settings_path, getenv=os.getenv):
    config = json.loads(Path(settings_path).read_text(encoding="utf-8"))
    secret = getenv(config["secret_env"])
    if not secret:
        raise ValueError("Required environment secret is missing")
    return {"method":"POST","url":config["endpoint"],"headers":{"Authorization":f"Bearer {secret}","Content-Type":"application/json"},"json":config["body"]}


if __name__ == "__main__":
    request = assemble_call(Path(__file__).with_name("transfer_config.json"))
    print(json.dumps(safe_summary(request), sort_keys=True))
