---
description: Run an Antigravity review that challenges the implementation approach and design choices
argument-hint: '[--wait|--background] [--base <ref>] [--scope auto|working-tree|branch] [focus ...]'
disable-model-invocation: true
allowed-tools: Read, Glob, Grep, Bash(node:*), Bash(git:*), AskUserQuestion
---

Run an adversarial Antigravity review through the shared plugin runtime.

Raw slash-command arguments:
`$ARGUMENTS`

Foreground flow:

```bash
node "${CLAUDE_PLUGIN_ROOT}/scripts/antigravity-companion.mjs" adversarial-review "$ARGUMENTS"
```

Background flow:

```typescript
Bash({
  command: `node "${CLAUDE_PLUGIN_ROOT}/scripts/antigravity-companion.mjs" adversarial-review "$ARGUMENTS"`,
  description: "Antigravity adversarial review",
  run_in_background: true
})
```

- After launching, tell the user: "Antigravity adversarial review started in the background. Check `/antigravity:status` for progress."