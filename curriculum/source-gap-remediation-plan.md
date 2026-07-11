# Source Gap Remediation Plan

## Purpose

Tie known source gaps to product risk so the platform does not quietly overreach.

## Highest-priority missing captures

### Microsoft Foundry documentation hub

- URL: `https://learn.microsoft.com/en-us/azure/foundry/`
- Why it matters: baseline authority for Foundry terminology and product framing
- Impact if missing: reduced confidence in portal-oriented explanations
- Product mitigation: label Foundry portal lessons as gap-limited

### Foundry SDK and endpoints overview

- URL: `https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview`
- Why it matters: supports D2 endpoint/SDK flows
- Impact if missing: weaker implementation detail for client walkthroughs
- Product mitigation: use simulated client flow and avoid SDK-specific claims beyond current corpus

### Foundry Agent Service overview

- URL: `https://learn.microsoft.com/en-us/azure/foundry/agents/overview`
- Why it matters: supports D2 single-agent lessons
- Impact if missing: agent lessons must stay conceptual and conservative
- Product mitigation: explicit confidence warning on agent-specific lessons

### Content Understanding overview

- URL: `https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview`
- Why it matters: supports D2 information-extraction implementation depth
- Impact if missing: Content Understanding lessons must avoid fine-grained product claims
- Product mitigation: source-grounded-with-gap-warning mode

## Secondary source gaps

- incomplete local captures in some Microsoft Learn units
- no full AI-900 practice assessment export in the source repository

## Product rules while gaps remain

- no high-confidence live portal walkthrough language
- no SDK API surface claims from memory
- no specific agent workflow claims unless supported locally
- no detailed Content Understanding feature lists unless supported locally

## What can still be built safely now

- lesson architecture
- mastery tracking
- tutoring modes
- source-grounded concept lessons
- simulated labs
- remediation system
- objective review system

## Recommended order of future gap closure

1. Foundry hub
2. SDK overview
3. Agent Service overview
4. Content Understanding overview
5. incomplete Learn unit recapture
6. AI-900 practice assessment export or session copy
