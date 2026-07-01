---
description: Check whether the local Antigravity CLI is ready and authenticated
argument-hint: '[]'
disable-model-invocation: true
allowed-tools: Bash(node:*), Bash(npm:*), AskUserQuestion
---

Run:

```bash
node "${CLAUDE_PLUGIN_ROOT}/scripts/antigravity-companion.mjs" setup --json $ARGUMENTS
```

If the result says Antigravity is unavailable:
- Use `AskUserQuestion` exactly once to ask whether Claude should install Antigravity now.
- Put the install option first and suffix it with `(Recommended)`.
- Use these two options:
  - `Install Antigravity (Recommended)`
  - `Skip for now`
- If the user chooses install, run:

```bash
irm antigravity.google/install.ps1 | iex
```

- Then rerun:

```bash
node "${CLAUDE_PLUGIN_ROOT}/scripts/antigravity-companion.mjs" setup --json $ARGUMENTS
```

If Antigravity is already installed:
- Do not ask about installation.

Output rules:
- Present the final setup output to the user.
- If installation was skipped, present the original setup output.
- If Antigravity is installed but not authenticated, preserve the guidance to run `!agy login`.