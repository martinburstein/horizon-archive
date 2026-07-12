import json
import os
from pathlib import Path
from request_tools import safe_summary


def prepare_request(config_path, getenv=os.getenv):
    # TODO: read config_path, parse its JSON, and retrieve the secret by
    # calling getenv with config["secret_env"]. Raise ValueError if missing.
    # Return a POST request dictionary with url, Authorization and Content-Type
    # headers, and the config body under the "json" key.
    return {}


if __name__ == "__main__":
    request = prepare_request(Path(__file__).with_name("primary_config.json"))
    print(json.dumps(safe_summary(request), sort_keys=True))
