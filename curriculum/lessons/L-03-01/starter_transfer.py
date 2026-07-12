import json

raw_json = '{"terminal":"ridge-2","readings":[{"sensor":"wind","values":[12,15]}],"meta":{"verified":false}}'
packet = json.loads(raw_json)

# TODO 1: append {"sensor": "light", "values": [3, 5]} to readings.
# TODO 2: set packet["meta"]["verified"] to True.
# TODO 3: read the second sensor and its first value.
second_sensor = ""
first_value = 0

encoded = json.dumps(packet, sort_keys=True)
print(second_sensor)
print(first_value)
print(encoded)
