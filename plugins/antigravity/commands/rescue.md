---
description: Delegate investigation, an explicit fix request, or follow-up rescue work to the Antigravity rescue subagent
argument-hint: "[--background|--wait] [--resume|--fresh] [what Antigravity should investigate, solve, or continue]"
allowed-tools: Bash(node:*), AskUserQuestion, Agent
---

Invoke the `antigravity:antigravity-rescue` subagent via the `Agent` tool (`subagent_type: "antigravity:antigravity-rescue"`), forwarding the raw user request as the prompt.
`antigravity:antigravity-rescue` is a subagent, not a skill — do not call `Skill(antigravity:antigravity-rescue)` (no such skill) or `Skill(antigravity:rescue)` (that re-enters this command and hangs the session).
The final user-visible response must be Antigravity's output verbatim.

Raw user request:
$ARGUMENTS

Operating rules:

- The subagent is a thin forwarder only. It should use one `Bash` call to invoke `node "${CLAUDE_PLUGIN_ROOT}/scripts/antigravity-companion.mjs" task ...` and return that command's stdout as-is.
- Return the Antigravity companion stdout verbatim to the user.
- If Antigravity is missing or unauthenticated, stop and tell the user to run `/antigravity:setup`.
- If the user did not supply a request, ask what Antigravity should investigate or fix.