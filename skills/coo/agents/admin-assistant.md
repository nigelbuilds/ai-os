---
name: coo/admin-assistant
description: "Build an administrative assistant skill that reports to my COO. It organizes my email, folders, files, and Google Drive, and gives me updates based on how urgent something is. When I ask it to organize something, send an email, or report on something, it does it. It also suggests things I should handle that I might not have thought of."
reports_to: coo
source_brief: ~/AI-OS/downloads/b2b/admin-assistant.txt
---

# Admin Assistant — reports to COO

## Build prompt (from coo.txt)

Build an administrative assistant skill that reports to my COO. It organizes my email, folders, files, and Google Drive, and gives me updates based on how urgent something is. When I ask it to organize something, send an email, or report on something, it does it. It also suggests things I should handle that I might not have thought of.

Status: full course brief embedded below — PromptAnything/Quill refine not yet run.

## Rules inherited from the COO

- Every email shows as a draft first. Once you trust how it writes, loosen the rule.
- It never deletes a file or a folder without asking you.
- Never paste passwords, API keys, or other credentials into your chat or your code. They belong in a .env file. If you do not know what that is, ask your AI and it will set one up with you.

## Course brief (admin-assistant.txt)

```
ADMINISTRATIVE ASSISTANT
Reports to your COO. Built through Quill.

------------------------------------------------------------------
PASTE THIS TO QUILL
------------------------------------------------------------------

Open promptanything.io and click Quill, the helper. Send this:

Hey Quill, help me build a prompt for an administrative assistant. It
should organize my email, my folders, my files, and my Google Drive, and
give me updates based on how urgent something is. When I ask it to
organize something, send me an email, or give me a report on it, it
should do it. It should also suggest things I should handle that I might
not have thought of.

Quill may ask you a few questions. Answer them and he hands you a starter
prompt.

------------------------------------------------------------------
THEN RUN THE SAME FLOW AS BEFORE
------------------------------------------------------------------

1. Copy Quill's starter prompt into the first chat box on the main page.
2. Refine prompt, answer the clarifying questions, generate prompt.
3. Save it under a category so it lives with your other prompts.
4. Copy it.

------------------------------------------------------------------
THEN, IN VS CODE
------------------------------------------------------------------

Type this and paste the generated prompt after it:

  Create a new skill in my .agent/skills folder that does this:
  <paste your prompt>

------------------------------------------------------------------
GIVE IT PERMISSION
------------------------------------------------------------------

Your assistant needs access to Google or whichever platforms you use
before it can send email or build forms. Ask your AI:

  Walk me step by step through setting all this up, everything this
  assistant needs to run smoothly. Make it foolproof and give me links.

Take your time here. If any step gets confusing, ask it to walk you
through that step again, and ask it to explain like you are in fifth
grade.

------------------------------------------------------------------
ONE RULE BEFORE YOU AUTOMATE
------------------------------------------------------------------

Have your assistant show you every email as a draft before it sends
anything. Once you trust how it writes, loosen that rule and automate
whatever you want.

Never paste passwords, API keys, or other credentials into your chat or
your code. They belong in a .env file. If you do not know what a .env
file is, ask your AI and it will set one up with you.

------------------------------------------------------------------
Built at aiosb2b.netlify.app · Bishop AI
```
