---
name: cfo/cash-forecast
description: "Build a cash forecast skill that reports to my CFO. It looks at my bank balance, the invoices I am waiting on, and my regular bills, then shows what cash comes in and goes out each week for the next 13 weeks. It warns me about any week where cash runs low and tells me what changed since last time. It only uses the numbers I give it and marks anything it had to guess."
reports_to: cfo
source_brief: ~/AI-OS/downloads/b2b/cfo.txt
---

# Cash Forecast — reports to CFO

## Build prompt (from cfo.txt)

Build a cash forecast skill that reports to my CFO. It looks at my bank balance, the invoices I am waiting on, and my regular bills, then shows what cash comes in and goes out each week for the next 13 weeks. It warns me about any week where cash runs low and tells me what changed since last time. It only uses the numbers I give it and marks anything it had to guess.

Status: scaffold — ready for PromptAnything (not yet run).

## Rules inherited from the CFO

- It never moves money or pays a bill. It drafts, you approve.
- Every number comes from your own records. Anything it had to guess is marked as a guess.
- Check with your accountant before you file anything it prepares.
- Never paste passwords, bank logins, API keys, or other credentials into your chat or your code. They belong in a .env file. If you do not know what that is, ask your AI and it will set one up with you.
