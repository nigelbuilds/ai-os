---
name: cro/upsell-spotter
description: "Build an upsell spotter skill that reports to my CRO. It reads my client list, what each client buys, and how they use it. It finds clients who are ready for more, like someone who keeps asking for extra work or has grown since they signed. For each one it explains why and drafts a short note I can send. I decide who to contact."
reports_to: cro
source_brief: ~/AI-OS/downloads/b2b/cro.txt
---

# Upsell Spotter — reports to CRO

## Build prompt (from cro.txt)

Build an upsell spotter skill that reports to my CRO. It reads my client list, what each client buys, and how they use it. It finds clients who are ready for more, like someone who keeps asking for extra work or has grown since they signed. For each one it explains why and drafts a short note I can send. I decide who to contact.

Status: scaffold — ready for PromptAnything (not yet run).

## Rules inherited from the CRO

- Real numbers only. Every figure comes from your CRM or your records, and anything it had to guess is marked as a guess.
- It suggests who to contact. You decide and you send.
- If your AI asks to install Playwright, say yes. It is the tool it uses to open websites.
- Never paste passwords, API keys, or other credentials into your chat or your code. They belong in a .env file. If you do not know what that is, ask your AI and it will set one up with you.
