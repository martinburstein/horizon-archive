import json
import os
from pathlib import Path
from request_tools import safe_summary


def prepare_request(config_path, getenv=os.getenv):
    config = json.loads(Path(config_path).read_text(encoding="utf-8"))
    secret = getenv(config["secret_env"])
    if not secret:
        raise ValueError("Required environment secret is missing")
    return {"method":"POST","url":config["endpoint"],"headers":{"Authorization":f"Bearer {secret}","Content-Type":"application/json"},"json":config["body"]}


if __name__ == "__main__":
    request = prepare_request(Path(__file__).with_name("primary_config.json"))
    print(json.dumps(safe_summary(request), sort_keys=True))
