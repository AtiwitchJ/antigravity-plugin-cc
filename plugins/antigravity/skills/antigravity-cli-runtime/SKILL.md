---
name: antigravity-cli-runtime
description: Operational guidance for calling the Antigravity CLI from this plugin's companion script.
---

# Antigravity CLI runtime

The Antigravity plugin wraps the local `agy` CLI. The companion script is implemented and
uses the same command surface in Claude Code and Codex.

## Binary

- Command name: `agy`
- Install: `irm antigravity.google/install.ps1 | iex`
- Authentication: `agy login`

## Invocation

- Availability probe: `agy --version`
- Task/review execution: `agy --print <prompt>`
- Setup output: `node scripts/antigravity-companion.mjs setup --json`

If `agy` is missing or unauthenticated, setup reports actionable next steps. Runtime
commands should not describe the companion as a placeholder.
