import json

raw_json = '{"terminal":"basin-7","observations":[{"kind":"audio","values":["whistle"]}],"meta":{"complete":false}}'
packet = json.loads(raw_json)
packet["observations"].append({"kind": "image", "values": ["arch", "blue"]})
packet["meta"]["complete"] = True
first_kind = packet["observations"][0]["kind"]
last_value = packet["observations"][1]["values"][-1]
encoded = json.dumps(packet, sort_keys=True)
print(first_kind)
print(last_value)
print(encoded)
