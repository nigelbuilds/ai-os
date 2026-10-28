---
name: cto/tool-stack-audit
description: "Build a tool stack audit skill that reports to my CTO. I give it my list of software or my card statements. It lists every tool I pay for, what each one costs per month, which ones do the same job, and which ones nobody has used lately. It gives me a short list of what to keep, combine, or cancel. I make every call."
reports_to: cto
source_brief: ~/AI-OS/downloads/b2b/cto.txt
---

# Tool Stack Audit — reports to CTO

## Build prompt (from cto.txt)

Build a tool stack audit skill that reports to my CTO. I give it my list of software or my card statements. It lists every tool I pay for, what each one costs per month, which ones do the same job, and which ones nobody has used lately. It gives me a short list of what to keep, combine, or cancel. I make every call.

Status: scaffold — ready for PromptAnything (not yet run).

## Rules inherited from the CTO

- Test every automation with fake data before it touches real clients.
- It never cancels a tool or changes a paid plan. It recommends, you decide.
- Never paste passwords, API keys, or other credentials into your chat or your code. They belong in a .env file. If you do not know what that is, ask your AI and it will set one up with you.
