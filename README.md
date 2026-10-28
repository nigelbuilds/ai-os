# AI Operating System (Bishop AI / AIOS B2B)

One folder. Every skill. You are the owner; the **CEO / orchestrator** skill is who you talk to.

Built from the [AIOS for Business](https://aiosb2b.netlify.app/) course (Bishop AI).

## Business vs personal

- **Business** (GoWiener / agency): run on this local OS with Claude Code / Cursor.
- **Personal** (school, money, health, family): stays on Grok Bot — not this repo.

This GitHub repo is a **scrubbed public scaffold**. Live private packs (strategy, finance modelling, Instagram, marketing/engineering skill libraries, etc.) stay on the owner's machine only.

## Structure

```
.agent/
  skills/          CEO + 7 executives + specialists
  config/skills.json
  memory/context.json
  README.md
```

## How to use

1. Clone this repo (or copy into `~/.agent`).
2. Open the folder in [Cursor](https://cursor.com) or run [Claude Code](https://code.claude.com): `cd ~/.agent && claude`
3. Ask the CEO first, e.g. `Using the ceo skill, who should handle a buyer reply for Harrington?`

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

## Rules

- Draft-first: nothing sends, posts, pays, or deletes without owner approval.
- Personal / school matters stay out of business routing.

## License

MIT
