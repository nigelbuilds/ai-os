---
name: cfo/invoice-chaser
description: "Build an invoice chaser skill that reports to my CFO. When I tell it who to bill and for what, it drafts the invoice with my business details and payment terms. It tracks which invoices are paid and which are late. For late ones, it drafts a friendly reminder at 3, 10, and 30 days past due. I approve every invoice and every reminder before it goes out."
reports_to: cfo
source_brief: ~/AI-OS/downloads/b2b/cfo.txt
---

# Invoice Chaser — reports to CFO

## Build prompt (from cfo.txt)

Build an invoice chaser skill that reports to my CFO. When I tell it who to bill and for what, it drafts the invoice with my business details and payment terms. It tracks which invoices are paid and which are late. For late ones, it drafts a friendly reminder at 3, 10, and 30 days past due. I approve every invoice and every reminder before it goes out.

Status: scaffold — ready for PromptAnything (not yet run).

## Rules inherited from the CFO

- It never moves money or pays a bill. It drafts, you approve.
- Every number comes from your own records. Anything it had to guess is marked as a guess.
- Check with your accountant before you file anything it prepares.
- Never paste passwords, bank logins, API keys, or other credentials into your chat or your code. They belong in a .env file. If you do not know what that is, ask your AI and it will set one up with you.
