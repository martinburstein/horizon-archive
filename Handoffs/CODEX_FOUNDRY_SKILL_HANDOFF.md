# Codex Handoff: Install and Activate the Foundry / Azure AI Source Priority Skill

## Goal
Install the existing `foundry_azure_source_priority_skill` so Codex uses it whenever the work involves Microsoft Foundry, Azure AI, AI-901, agents, SDKs/endpoints, REST APIs/CLIs, or Azure Content Understanding.

The user already completed Step 1: they downloaded and/or unzipped the skill package. Your job is to finish the setup in the current Codex workspace.

---

## Source rule to preserve
For Microsoft Foundry, Azure AI, AI-901, Azure AI implementation, agents, SDKs/endpoints, REST APIs/CLIs, or information extraction questions, check these official Microsoft sources before any others:

1. Microsoft Foundry documentation hub  
   https://learn.microsoft.com/en-us/azure/foundry/

2. Microsoft Foundry SDKs and Endpoints overview  
   https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview

3. Microsoft Foundry Agent Service overview  
   https://learn.microsoft.com/en-us/azure/foundry/agents/overview

4. Azure Content Understanding overview in Foundry Tools  
   https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview

---

## Files expected
Look for an extracted skill folder named something like:

```text
foundry_azure_source_priority_skill/
```

It should contain:

```text
SKILL.md
```

If the user gives you the ZIP instead of the extracted folder, unzip it first and then continue.

---

## Install the skill in this repository
From the repository root, create this directory if it does not already exist:

```text
.agents/skills/foundry-azure-source-priority/
```

Copy the existing `SKILL.md` into that folder:

```text
.agents/skills/foundry-azure-source-priority/SKILL.md
```

Do not rewrite the skill unless the user asks. Preserve the four-source priority rule exactly.

---

## Add or update AGENTS.md
At the repository root, create or update:

```text
AGENTS.md
```

Add this section. If an AGENTS.md already exists, append this without deleting any existing project instructions.

```markdown
## Microsoft Foundry / Azure AI source priority

When work involves Microsoft Foundry, Azure AI, AI-901, Azure AI implementation, agents, Foundry SDKs/endpoints, REST APIs/CLIs, or Azure Content Understanding, use the `foundry-azure-source-priority` skill first.

Before using third-party sources or general web results, check these official Microsoft sources:

1. Microsoft Foundry documentation hub: https://learn.microsoft.com/en-us/azure/foundry/
2. Microsoft Foundry SDKs and Endpoints overview: https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview
3. Microsoft Foundry Agent Service overview: https://learn.microsoft.com/en-us/azure/foundry/agents/overview
4. Azure Content Understanding overview in Foundry Tools: https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview

Treat AI-901 objectives as the master learning goals. Use AI-900 material only as supporting background when it overlaps.
```

---

## Verification checklist
After setup, verify:

- `.agents/skills/foundry-azure-source-priority/SKILL.md` exists.
- `AGENTS.md` exists at the repository root.
- `AGENTS.md` tells Codex to use the skill first for Foundry/Azure AI/AI-901 work.
- The four Microsoft priority URLs are present in either `AGENTS.md`, the skill, or both.
- Existing repository instructions were preserved.

---

## Suggested terminal commands
Use these only if they fit the workspace layout.

```bash
mkdir -p .agents/skills/foundry-azure-source-priority
cp foundry_azure_source_priority_skill/SKILL.md .agents/skills/foundry-azure-source-priority/SKILL.md
cat >> AGENTS.md <<'AGENTS_APPEND'

## Microsoft Foundry / Azure AI source priority

When work involves Microsoft Foundry, Azure AI, AI-901, Azure AI implementation, agents, Foundry SDKs/endpoints, REST APIs/CLIs, or Azure Content Understanding, use the `foundry-azure-source-priority` skill first.

Before using third-party sources or general web results, check these official Microsoft sources:

1. Microsoft Foundry documentation hub: https://learn.microsoft.com/en-us/azure/foundry/
2. Microsoft Foundry SDKs and Endpoints overview: https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview
3. Microsoft Foundry Agent Service overview: https://learn.microsoft.com/en-us/azure/foundry/agents/overview
4. Azure Content Understanding overview in Foundry Tools: https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview

Treat AI-901 objectives as the master learning goals. Use AI-900 material only as supporting background when it overlaps.
AGENTS_APPEND

ls -la .agents/skills/foundry-azure-source-priority/
grep -n "Foundry\|AI-901\|Content Understanding" AGENTS.md
```

If the extracted folder is located somewhere else, adjust the `cp` source path accordingly.

---

## Final response to user
After completing setup, summarize what changed in plain English:

```text
Done — I installed the Foundry/Azure source-priority skill in `.agents/skills/foundry-azure-source-priority/` and updated `AGENTS.md` so Codex will check the four official Microsoft sources first for Foundry, Azure AI, AI-901, agents, SDKs/endpoints, and Content Understanding work.
```

If anything fails, say exactly what failed and what file/folder path was missing.
