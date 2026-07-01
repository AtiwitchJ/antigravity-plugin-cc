import { binaryAvailable } from "./process.mjs";
/**
 * antigravity wrapper - stub.
 * Copy ../kilo-plugin-cc/plugins/kilo/scripts/lib/kilo.mjs and adapt:
 *   - replace kilo binary with $binary
 *   - replace --format json with Antigravity's equivalent output flag
 *   - replace kilo profile auth probe with $binary's equivalent
 *   - replace kilo session list resume lookup with $binary's equivalent
 */
export function getAntigravityAvailability(cwd) { return binaryAvailable("agy", ["--version"], { cwd }); }
export async function getAntigravityAuthStatus(cwd) {
  return { available: false, loggedIn: false, detail: "antigravity-companion is a stub.", source: "stub" };
}
export async function runAntigravity() {
  throw new Error("antigravity-companion is a stub. Implement scripts/lib/antigravity.mjs.");
}
export async function findLatestResumableSession(cwd) { return null; }