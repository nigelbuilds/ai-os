# AI Operating System

One folder. Every skill. You are the owner; the **CEO / orchestrator** skill is who you talk to.

Built in Miami at the Richmond Bishop workshop, from the [AIOS for Business](https://aiosb2b.netlify.app) course.

Personal memory from the author's install was scrubbed before this repo was published. `memory/context.json` is placeholders only. Replace `YOUR_NAME` and `YOUR_COMPANY` (in that file, in `config/skills.json`, and in the skill prompts) with your own before you rely on it. Do not commit client lists, inboxes, or secrets.

## Install

Clone this repo into `~/.agent` so Cursor and Claude Code read the skills from the standard location:

```bash
git clone https://github.com/nigelbuilds/ai-os.git ~/.agent
cd ~/.agent
```

If `~/.agent` already exists, copy `skills/`, `config/`, `memory/`, and `ui/` into it instead of cloning over the folder.

Then fill in `memory/context.json` (`YOUR_NAME`, `YOUR_COMPANY`, `YOUR_CITY`) and the `owner` field in `config/skills.json`.

## Local dashboard

From the install directory:

```bash
python3 ui/serve.py
```

That serves a read-only org chart at [http://127.0.0.1:8765](http://127.0.0.1:8765). It only binds to localhost and only reads files under `~/.agent`. Ctrl+C stops it. If the port is already in use, the script opens the existing dashboard.

Click any card to read that skill. The "Talk to CEO" box copies a starter prompt.

## Cursor and Claude Code

Open `~/.agent` as the project folder.

In Cursor chat, talk to the CEO first, for example:

```text
Using the ceo skill, who should handle a reply from a new buyer?
```

In Claude Code:

```bash
cd ~/.agent && claude
```

Use the same kind of prompt. The CEO routes work to an executive (COO, CFO, CMO, CSO, CRO, CTO, CCO) and that seat's agents. Nothing is sent, posted, paid, or deleted until you approve the draft.

## Layout

```
~/.agent/
  skills/             CEO + 7 executives + specialists
  config/skills.json  capability registry
  memory/context.json placeholders only — fill this in locally
  ui/                 local dashboard (serve.py + static)
  README.md
```

## Seats

| Exec | Domain | Agents |
|------|--------|--------|
| CEO / orchestrator | Routes everything | — |
| COO | Ops, admin, projects | admin-assistant, sop-writer, project-tracker |
| CFO | Money | bookkeeper, invoice-chaser, cash-forecast |
| CMO | Marketing | content-engine, brand-kit, competitor-watch |
| CSO | Sales | lead-researcher, proposal-writer, cold-outreach |
| CRO | Revenue | go-to-market, pipeline-review, upsell-spotter |
| CTO | Tech | website-builder, automation-builder, tool-stack-audit |
| CCO | Customer | client-onboarding, support-desk, reviews-and-feedback |

CCO is Chief Customer Officer (onboarding, support, reviews), not compliance.

## Rules

- Draft-first: nothing sends, posts, pays, or deletes without owner approval.
- Personal matters stay out of business routing.
- Keep credentials in `.env` (gitignored), never in skill files.

## License

MIT. See [LICENSE](LICENSE). Skill scaffolding in this repo is free to use and adapt. Course structure comes from the Richmond Bishop workshop and [AIOS for Business](https://aiosb2b.netlify.app).
