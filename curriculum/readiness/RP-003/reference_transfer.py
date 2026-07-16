exposed_a = ["north", "pulse", "settle", "settle"]
exposed_b = ["north", "pulse", "settle", "drift"]

comparison = []
for index in range(len(exposed_a)):
    if exposed_a[index] == exposed_b[index]:
        status = "corresponding"
    else:
        status = "different"
    comparison.append({"index": index, "status": status})

sealed_source = {"status": "unavailable", "value": None}
