---
name: cro/go-to-market
description: "Build a go-to-market skill that reports to my CRO. When I give it a company's website or any information about a company, it builds a full go-to-market strategy covering sales, marketing, and customer success: who the company is, their ideal customer, sales funnels, the pain, problem, and solution, their pitches, a 90-day plan, and a 12-month plan. Deliver it as an HTML site the reader can click through step by step. It can use Playwright to visit company sites and pull their copy."
reports_to: cro
source_brief: ~/AI-OS/downloads/b2b/go-to-market.txt
---

# Go-to-Market Strategist — reports to CRO

## Build prompt (from cro.txt)

Build a go-to-market skill that reports to my CRO. When I give it a company's website or any information about a company, it builds a full go-to-market strategy covering sales, marketing, and customer success: who the company is, their ideal customer, sales funnels, the pain, problem, and solution, their pitches, a 90-day plan, and a 12-month plan. Deliver it as an HTML site the reader can click through step by step. It can use Playwright to visit company sites and pull their copy.

Status: full course brief embedded below — PromptAnything/Quill refine not yet run.

## Rules inherited from the CRO

- Real numbers only. Every figure comes from your CRM or your records, and anything it had to guess is marked as a guess.
- It suggests who to contact. You decide and you send.
- If your AI asks to install Playwright, say yes. It is the tool it uses to open websites.
- Never paste passwords, API keys, or other credentials into your chat or your code. They belong in a .env file. If you do not know what that is, ask your AI and it will set one up with you.

## Course brief (go-to-market.txt)

```
GO-TO-MARKET STRATEGIST
Reports to your CRO. Built through Quill. This is the one you can charge for today.

This is a main skill you hang other skills under. After this, try building
a sales skill, a marketing skill, a brand kit skill, or a customer success
chatbot beneath it.

------------------------------------------------------------------
PASTE THIS TO QUILL
------------------------------------------------------------------

Open promptanything.io and click Quill. Send this:

Hey Quill, help me build a go-to-market skill. When I give it a company's
website or any information about a company, it builds a full go-to-market
strategy for the company, covering sales, marketing, and customer success.
The strategy should include who the company is, their ideal customer
profile, sales funnels, the pain, problem, and solution, their pitches, a
90-day plan, a 12-month plan, and anything else a go-to-market strategy
needs. Deliver this as an HTML site the reader can click through step by
step. Keep it easy to follow and be concise without losing detail. It can
use Playwright to visit company sites, take screenshots, record the
screen, and pull their company copy and context.

------------------------------------------------------------------
THEN RUN THE SAME FLOW
------------------------------------------------------------------

1. Answer Quill's questions.
2. Paste his prompt into the main chat box.
3. Refine prompt, answer the clarifying questions, generate prompt, copy.

------------------------------------------------------------------
THEN, IN VS CODE
------------------------------------------------------------------

Type this and paste the generated prompt after it:

  Create a new skill in my .agent/skills folder that does this:
  <paste your prompt>

If your AI asks to install Playwright, say yes. That is the tool it uses
to open up websites.

------------------------------------------------------------------
TEST IT
------------------------------------------------------------------

Grab any company's website and have it build their go-to-market strategy.
Read what comes back and tighten the skill where the output is thin.

Build a brand kit skill next, so this strategy, your assistant's reports,
and everything else your AI OS produces comes out looking like your brand.

------------------------------------------------------------------
Built at aiosb2b.netlify.app · Bishop AI
```
