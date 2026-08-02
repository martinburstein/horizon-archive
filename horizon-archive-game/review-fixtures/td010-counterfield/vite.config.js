import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { parseCounterfieldLongestCopy } from "./shellLongestCopyContract.js";
const root = fileURLToPath(new URL(".", import.meta.url));
const shellPath = fileURLToPath(new URL("../../../Production Pipeline/Skyscraper Test Drives/TD-010/05-PLAYABLE-SLICE-SHELL.md", import.meta.url));
const shellLongestCopy = parseCounterfieldLongestCopy(readFileSync(shellPath, "utf8"));
export default defineConfig({ root, plugins: [react()], define: { __TD010_SHELL_LONGEST_COPY__: JSON.stringify(shellLongestCopy) }, server: { host: "127.0.0.1", port: 4182, strictPort: true }, build: { outDir: "dist", emptyOutDir: true } });
