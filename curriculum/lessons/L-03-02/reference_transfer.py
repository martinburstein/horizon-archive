def route_items(items, minimum):
    routes = []
    for item in items:
        if item["score"] >= minimum:
            routes.append({"name": item["name"], "route": "review"})
        else:
            routes.append({"name": item["name"], "route": "hold"})
    return routes


items = [{"name": "alpha", "score": 2}, {"name": "beta", "score": 4}]
routes = route_items(items, 3)
print(routes)
