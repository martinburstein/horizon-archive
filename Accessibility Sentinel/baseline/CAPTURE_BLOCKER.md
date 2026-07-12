# Baseline capture blocker

Audit run: 2026-07-12

The required Codex in-app Browser surface (`iab`) was unavailable. Browser runtime setup completed, but `agent.browsers.get("iab")` returned:

```text
Browser is not available: iab
```

The required troubleshooting path was followed. Browser discovery then returned only Martin's Chrome extension profile. The in-app Browser instructions prohibit substituting that unrelated browser surface after this failure, so no screenshots were captured or accepted. Prior QA screenshots were not reused.

The local game itself was started at `http://127.0.0.1:4173` and returned HTTP 200. This proves only that the app was runnable; it is not visual or interaction evidence.

