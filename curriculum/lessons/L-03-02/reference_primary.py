def classify_readings(readings, threshold):
    results = []
    for value in readings:
        if value >= threshold:
            results.append("alert")
        else:
            results.append("clear")
    return results


readings = [3, 8, 5]
results = classify_readings(readings, 5)
print(results)
