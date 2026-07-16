exposed_a = ["steady", "rise", "steady", "cool"]
exposed_b = ["steady", "rise", "hold", "cool"]

comparison = []
for index in range(len(exposed_a)):
    if exposed_a[index] == exposed_b[index]:
        status = "corresponding"
    else:
        status = "different"
    comparison.append({"index": index, "status": status})

sealed_source = {"status": "unavailable", "value": None}
