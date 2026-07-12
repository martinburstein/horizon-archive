import json

raw_json = '{"terminal":"ridge-2","readings":[{"sensor":"wind","values":[12,15]}],"meta":{"verified":false}}'
packet = json.loads(raw_json)
packet["readings"].append({"sensor": "light", "values": [3, 5]})
packet["meta"]["verified"] = True
second_sensor = packet["readings"][1]["sensor"]
first_value = packet["readings"][1]["values"][0]
encoded = json.dumps(packet, sort_keys=True)
print(second_sensor)
print(first_value)
print(encoded)
