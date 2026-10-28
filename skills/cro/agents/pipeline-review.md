---
name: cro/pipeline-review
description: "Build a pipeline review skill that reports to my CRO. Once a week it reads my CRM or deal list and gives me one page: deals that moved, deals that are stuck, and deals that went quiet. For each stuck deal it suggests one next step. It shows the total value at each stage, using only the numbers in my CRM."
reports_to: cro
source_brief: ~/AI-OS/downloads/b2b/cro.txt
---

# Pipeline Review — reports to CRO

## Build prompt (from cro.txt)

Build a pipeline review skill that reports to my CRO. Once a week it reads my CRM or deal list and gives me one page: deals that moved, deals that are stuck, and deals that went quiet. For each stuck deal it suggests one next step. It shows the total value at each stage, using only the numbers in my CRM.

Status: scaffold — ready for PromptAnything (not yet run).

## Rules inherited from the CRO

- Real numbers only. Every figure comes from your CRM or your records, and anything it had to guess is marked as a guess.
- It suggests who to contact. You decide and you send.
- If your AI asks to install Playwright, say yes. It is the tool it uses to open websites.
- Never paste passwords, API keys, or other credentials into your chat or your code. They belong in a .env file. If you do not know what that is, ask your AI and it will set one up with you.
