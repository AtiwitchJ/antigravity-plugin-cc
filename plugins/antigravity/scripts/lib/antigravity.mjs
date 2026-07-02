import { binaryAvailable, formatCommandFailure, runCommand } from "./process.mjs";

const BINARY = "agy";

export function getAntigravityAvailability(cwd) {
  return binaryAvailable(BINARY, ["--version"], { cwd });
}

export async function getAntigravityAuthStatus(cwd) {
  const availability = getAntigravityAvailability(cwd);
  if (!availability.available) {
    return {
      available: false,
      loggedIn: false,
      detail: `Antigravity CLI is missing: ${availability.detail}`,
      source: "binary"
    };
  }
  return {
    available: true,
    loggedIn: true,
    detail: "Antigravity CLI is available; command execution will surface any provider authentication errors.",
    source: "binary"
  };
}

export function ensureAntigravityAvailable(cwd) {
  const availability = getAntigravityAvailability(cwd);
  if (!availability.available) {
    throw new Error(
      `Antigravity CLI is not installed or is missing required runtime support (${availability.detail}). Install Antigravity and make sure the \`agy\` binary is on PATH, then rerun /antigravity:setup.`
    );
  }
}

export async function runAntigravity(cwd, options = {}) {
  ensureAntigravityAvailable(cwd);
  const prompt = String(options.prompt ?? options.defaultPrompt ?? "").trim();
  const result = runCommand(BINARY, ["--print", prompt], { cwd });
  const failure = result.error
    ? result.error.message
    : result.status === 0
      ? ""
      : formatCommandFailure(result);
  return {
    status: result.error ? 1 : result.status,
    text: result.stdout.trim(),
    stderr: result.stderr.trim(),
    error: failure,
    sessionId: null
  };
}

export async function findLatestResumableSession() {
  return null;
}

export const AGENT_RUNTIME = {
  agent: "antigravity",
  displayName: "Antigravity",
  cliLabel: "Antigravity CLI",
  installHint: "Install Antigravity and make sure the `agy` binary is on PATH.",
  authHint: "Authenticate Antigravity with your configured provider, then rerun /antigravity:setup.",
  getAvailability: getAntigravityAvailability,
  getAuthStatus: getAntigravityAuthStatus,
  ensureAvailable: ensureAntigravityAvailable,
  run: runAntigravity
};
