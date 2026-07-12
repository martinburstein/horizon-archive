# L-05-01 — Foundry portal orientation

## Outcome

Navigate the learner-safe Foundry workflow from verified access and project scope through model deployment, portal interaction, connection-detail handoff, and scoped cleanup.

## Source boundary

**Must know for AI-901:** Deploy a model and interact with it in the Foundry portal. The current official setup quickstart organizes work in a Foundry project, deploys a model, verifies provisioning, and records the project endpoint and deployment name. See the [current official source register](../../sources/current-official-source-register.md).

**Course-authored rehearsal:** All scenarios, reasons, and 16/16 gates are offline coaching. This lesson creates, deploys, prompts, shares, or deletes nothing.

## Durable eight-checkpoint flow

1. **Access:** verify Azure account, tenant, subscription, and sufficient role.
2. **Project:** create or select the intended Foundry project and confirm its parent scope.
3. **Model:** choose by required capability, constraints, availability, region, and cost—not popularity.
4. **Deployment:** create or reuse a named deployment. A catalog model entry alone is not the callable deployment.
5. **Readiness:** confirm provisioning succeeded before interaction.
6. **Interaction:** send a bounded prompt in the current portal surface and review output and limitations. One response is a smoke test, not production validation.
7. **Connection details:** record project endpoint and deployment name separately. They are configuration; credentials remain secret.
8. **Cleanup:** verify ownership and exact scope before deleting. Deleting a resource group can remove everything in it.

## Guided contrasts

- Project ≠ resource group; the project organizes Foundry work within a larger Azure scope.
- Catalog model ≠ model deployment; the deployment has the name requests use.
- Project endpoint ≠ credential; protect credentials, and share configuration only under policy.
- Successful prompt ≠ production readiness; broader evaluation, safety, reliability, cost, and governance work remains.

## Assessment and remediation

Complete primary closed-note:

```powershell
python validate_portal_orientation.py --form primary --check primary_answers.json
```

For a miss, identify current scope, required artifact, state to verify, and any destructive or secret-bearing action. Then complete transfer:

```powershell
python validate_portal_orientation.py --form transfer --check transfer_answers.json
```

Readiness requires 16/16 on both forms, all eight checkpoints, access and cleanup safeguards, and a closed-note explanation. Review low-confidence checkpoints tomorrow, then after 3, 7, and 14 days.

## Privacy, accessibility, volatility, and deprecation

Do not enter real tenant IDs, subscriptions, endpoints, deployment names, credentials, prompts, or responses into the exercise. Controls are labeled, keyboard accessible, untimed, and not color-only. Portal labels/navigation, roles, model availability, deployment options, regions, quotas, pricing, endpoints, preview features, and deprecations are volatile; reverify the official quickstart immediately before live use. Classic-portal instructions are not controlling for the current portal.
