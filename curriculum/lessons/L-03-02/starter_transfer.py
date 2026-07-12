def route_items(items, minimum):
    routes = []
    # TODO: loop over item dictionaries.
    # Append {"name": item["name"], "route": "review"} when
    # item["score"] >= minimum; otherwise use route "hold".
    # Return routes after the loop.
    return routes


items = [{"name": "alpha", "score": 2}, {"name": "beta", "score": 4}]
routes = route_items(items, 3)
print(routes)
