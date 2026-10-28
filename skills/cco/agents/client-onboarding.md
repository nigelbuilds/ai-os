---
name: cco/client-onboarding
description: "Build a client onboarding skill that reports to my CCO. When a new client signs, it drafts a welcome email, a checklist of what I need from them, and an agenda for our kickoff call. It tracks what they have sent and drafts a friendly nudge for anything missing. Every email stays a draft until I approve it."
reports_to: cco
source_brief: ~/AI-OS/downloads/b2b/cco.txt
---

# Client Onboarding — reports to CCO

## Build prompt (from cco.txt)

Build a client onboarding skill that reports to my CCO. When a new client signs, it drafts a welcome email, a checklist of what I need from them, and an agenda for our kickoff call. It tracks what they have sent and drafts a friendly nudge for anything missing. Every email stays a draft until I approve it.

Status: scaffold — ready for PromptAnything (not yet run).

## Rules inherited from the CCO

- Hard questions, money questions, and upset clients always go to you.
- It only answers from what you gave it. If the answer is not there, it says so and asks you.
- Never paste passwords, API keys, or other credentials into your chat or your code. They belong in a .env file. If you do not know what that is, ask your AI and it will set one up with you.
