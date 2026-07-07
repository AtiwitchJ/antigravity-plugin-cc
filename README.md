# Antigravity plugin for Claude Code and Codex

This plugin is for Claude Code and Codex users who want to delegate code reviews or tasks to
Google's Antigravity CLI ([antigravity.google/docs/cli/using](https://antigravity.google/docs/cli/using)).

## What You Get

- `/antigravity:review` for a normal read-only review
- `/antigravity:adversarial-review` for a steerable challenge review
- `/antigravity:rescue`, `/antigravity:transfer`, `/antigravity:status`, `/antigravity:result`, and `/antigravity:cancel`
- `/antigravity:setup` to verify the CLI and authentication

## Requirements

- **`agy` CLI** installed locally. Install with: `irm antigravity.google/install.ps1 | iex`
- Authentication: run `!agy login`
- **Node.js 18.18 or later**

## Install in Claude Code

```bash
/plugin marketplace add <your-org>/antigravity-plugin-cc
/plugin install antigravity@agents-plugin-cc-antigravity
```

## Install in Codex

```bash
codex plugin marketplace add ./.agents/plugins/marketplace.json
codex plugin add antigravity@agents-plugin-cc-antigravity
```

Start a new Codex thread after installing or updating the plugin. Codex-facing skills live
under `plugins/antigravity/skills/` and call `plugins/antigravity/scripts/antigravity-companion.mjs`.

## Runtime

The companion invokes the local `agy` CLI with `agy --print <prompt>`. `/antigravity:setup`
or `node plugins/antigravity/scripts/antigravity-companion.mjs setup --json` reports missing
CLI/authentication steps without returning a placeholder error.

## Reference

See `../kilo-plugin-cc/` for the reference implementation this runtime follows.

## License

Apache-2.0
