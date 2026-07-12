def safe_summary(request):
    return {
        "method": request["method"],
        "url": request["url"],
        "has_authorization": request["headers"].get("Authorization", "").startswith("Bearer "),
        "body": request["json"],
    }
