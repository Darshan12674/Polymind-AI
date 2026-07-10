import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";

const modulePath = "/workspaces/Polymind-AI/polymind-ai/src/utils/env.ts";

test("loads GEMINI_API_KEY from a .env file in the current working directory", async () => {
  const tempDir = mkdtempSync(path.join(os.tmpdir(), "polymind-env-"));
  writeFileSync(path.join(tempDir, ".env"), "GEMINI_API_KEY=test-key\n");

  const originalCwd = process.cwd();
  const originalKey = process.env.GEMINI_API_KEY;

  process.chdir(tempDir);
  delete process.env.GEMINI_API_KEY;

  try {
    const mod = await import(`${pathToFileURL(modulePath).href}?t=${Date.now()}`);
    assert.equal(mod.env.GEMINI_API_KEY, "test-key");
  } finally {
    process.chdir(originalCwd);
    if (originalKey === undefined) {
      delete process.env.GEMINI_API_KEY;
    } else {
      process.env.GEMINI_API_KEY = originalKey;
    }
    rmSync(tempDir, { recursive: true, force: true });
  }
});
