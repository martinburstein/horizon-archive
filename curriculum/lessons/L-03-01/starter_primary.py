import json

raw_json = '{"terminal":"basin-7","observations":[{"kind":"audio","values":["whistle"]}],"meta":{"complete":false}}'
packet = json.loads(raw_json)

# TODO 1: append {"kind": "image", "values": ["arch", "blue"]}
# to packet["observations"].

# TODO 2: set packet["meta"]["complete"] to True.

# TODO 3: read the first observation kind and the last value of the
# second observation into first_kind and last_value.
first_kind = ""
last_value = ""

encoded = json.dumps(packet, sort_keys=True)
print(first_kind)
print(last_value)
print(encoded)
