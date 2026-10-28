---
name: cso/cold-outreach
description: "Build a cold outreach skill that reports to my CSO. I tell it who I want to reach, a city, and how many prospects I want. It finds the companies, the decision maker, and one real, recent fact about each one, then drafts a short personal email in my Gmail. It skips any company where it found nothing real to say. It never sends anything. I approve every email."
reports_to: cso
source_brief: ~/AI-OS/downloads/b2b/cold-outreach.txt
---

# Cold Outreach — reports to CSO

## Build prompt (from cso.txt)

Build a cold outreach skill that reports to my CSO. I tell it who I want to reach, a city, and how many prospects I want. It finds the companies, the decision maker, and one real, recent fact about each one, then drafts a short personal email in my Gmail. It skips any company where it found nothing real to say. It never sends anything. I approve every email.

Status: full course brief embedded below — PromptAnything/Quill refine not yet run.

## Rules inherited from the CSO

- It never sends an email on its own. You read and approve every one.
- It only writes to people who would want to hear from you, and every email gives them an easy way to say no.
- Never paste passwords, API keys, or other credentials into your chat or your code. They belong in a .env file. If you do not know what that is, ask your AI and it will set one up with you.

## Course brief (cold-outreach.txt)

```
COLD OUTREACH MACHINE Paste this into promptanything.io, Step 1.

--------------------------------------------------------------------
WHAT I WANT TO BUILD
--------------------------------------------------------------------

I want to build a cold outreach agent. I tell it who I want to reach
and it comes back with a stack of personalized email drafts waiting in
my Gmail, each one built on something real that happened at that
company. It never sends anything. I approve every email myself.

--------------------------------------------------------------------
WHAT I GIVE IT
--------------------------------------------------------------------

A description of my ideal customer. A city. How many prospects I want.
My offer in one paragraph.

That is the whole input. Everything else the agent works out.

--------------------------------------------------------------------
HOW IT SHOULD WORK
--------------------------------------------------------------------

Step 1, discovery. Find companies matching my description in the city
I named. For funded startups, search Crunchbase or the Y Combinator
directory. For local businesses, use Google Maps. For a specific job
title in a specific place, search LinkedIn through a browser using my
own logged-in session, not a password stored in the agent.

Step 2, enrichment. For each company, get the founder or decision
maker's name plus their email address and LinkedIn profile. Use Apollo
or Vibe Prospecting for this.

Step 3, research. This is the step that makes the whole thing work.
For every company, fetch their homepage and find one recent signal: a
funding round, a new hire, a product launch, something they posted.
One specific fact per company. If there is no signal, skip that
company rather than writing a generic email.

Step 4, drafting. Write a three-line email. Line one references the
signal. Line two names a problem my offer solves. Line three is a soft
ask, not a hard pitch. Keep the whole email under 90 words. No
greeting filler, no "I hope this finds you well," no "I wanted to
reach out." Write like a person who has a reason to be writing.

Step 5, queue. Create the emails as Gmail drafts. Never send. Log each
one in a spreadsheet with the contact, the company, the signal used,
and a status column.

Step 6, review. Build me one HTML page listing every draft next to the
signal it was built on, so I can read them all in one place and decide
what goes out.

--------------------------------------------------------------------
RULES THAT MUST NOT BE BROKEN
--------------------------------------------------------------------

Drafts only. The agent never sends an email under any circumstance.

One email per contact, ever. No follow-up sequences.

A hard cap per run. Default 20. Stop when it hits the cap.

If research turns up nothing specific about a company, skip it. A
generic email is worse than no email.

--------------------------------------------------------------------
WHAT DONE LOOKS LIKE
--------------------------------------------------------------------

I run it for 20 companies. I open Gmail and there are 20 drafts. I
read them and every single one mentions something true and specific
about the company it is addressed to. Nothing has been sent.
```
