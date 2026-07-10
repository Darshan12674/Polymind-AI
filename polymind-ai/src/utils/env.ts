import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

function findEnvFile(startDir: string): string | null {
    let currentDir = path.resolve(startDir);

    while (true) {
        const candidate = path.join(currentDir, ".env");
        if (existsSync(candidate)) {
            return candidate;
        }

        const parentDir = path.dirname(currentDir);
        if (parentDir === currentDir) {
            return null;
        }

        currentDir = parentDir;
    }
}

function loadEnvFile() {
    const envFilePath = findEnvFile(process.cwd());
    if (!envFilePath) {
        return;
    }

    const contents = readFileSync(envFilePath, "utf8");

    for (const line of contents.split(/\r?\n/)) {
        const trimmedLine = line.trim();
        if (!trimmedLine || trimmedLine.startsWith("#")) {
            continue;
        }

        const separatorIndex = trimmedLine.indexOf("=");
        if (separatorIndex === -1) {
            continue;
        }

        const key = trimmedLine.slice(0, separatorIndex).trim();
        const value = trimmedLine.slice(separatorIndex + 1).trim();

        if (!key || process.env[key] !== undefined) {
            continue;
        }

        process.env[key] = value.replace(/^['"]|['"]$/g, "");
    }
}

loadEnvFile();

export const env = {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY ?? "",
    OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY ?? "",
};

if (!env.GEMINI_API_KEY) {
    throw new Error("Missing GEMINI_API_KEY");
}

if (!env.OPENROUTER_API_KEY) {
  throw new Error("Missing OPENROUTER_API_KEY");
}
