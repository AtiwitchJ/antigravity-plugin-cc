#!/usr/bin/env node
/**
 * antigravity-companion - dispatcher stub for the Antigravity plugin.
 *
 * Implementation plan (copy from kilo-plugin-cc/plugins/kilo/scripts/kilo-companion.mjs):
 *   - swap `import "./lib/kilo.mjs"` for `import "./lib/antigravity.mjs"`
 *   - swap `runKilo`/`getKiloAvailability`/`getKiloAuthStatus` calls for their
 *     `runAntigravity`/`getAntigravityAvailability`/`getAntigravityAuthStatus` equivalents
 *   - the CLI binary is `agy`, not `kilo`
 */
import process from "node:process";

function printUsage() {
  console.log(
    [
      "Usage:",
      "  node scripts/antigravity-companion.mjs setup [--json]",
      "  node scripts/antigravity-companion.mjs review [--wait|--background] [--base <ref>]",
      "  node scripts/antigravity-companion.mjs adversarial-review [--wait|--background] [--base <ref>] [focus text]",
      "  node scripts/antigravity-companion.mjs task [--background] [--write] [--resume|--fresh] [prompt]",
      "  node scripts/antigravity-companion.mjs status [job-id] [--json]",
      "  node scripts/antigravity-companion.mjs result [job-id] [--json]",
      "  node scripts/antigravity-companion.mjs cancel [job-id] [--json]"
    ].join("\n")
  );
}

async function main() {
  const [subcommand] = process.argv.slice(2);
  if (!subcommand || subcommand === "help" || subcommand === "--help") {
    printUsage();
    return;
  }
  process.stderr.write(
    "`antigravity-companion` is a stub. See ../kilo-plugin-cc/plugins/kilo/scripts/kilo-companion.mjs for a complete reference implementation. The CLI binary is `agy`.\n"
  );
  process.exitCode = 1;
}

main();
