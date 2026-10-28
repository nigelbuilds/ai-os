# AI OS Dashboard

Local, offline, read-only dashboard for `~/.agent`.

## Start

From the repo root after you have installed this project to `~/.agent`:

```bash
python3 ui/serve.py
```

Opens http://127.0.0.1:8765 (Ctrl+C to stop). If the port is already in use, it opens the dashboard that is already running.

## What it shows

- Org chart: CEO → 7 executives → agents (from `~/.agent/config/skills.json`)
- Click any card to read its markdown
- "Talk to CEO" copy box for Cursor / Claude Code

API: `/api/skills`, `/api/skill?path=skills/ceo/SKILL.md` (restricted to `~/.agent`, read-only).
