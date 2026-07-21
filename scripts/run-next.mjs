import { spawn } from "node:child_process";
import path from "node:path";

const nextCommand = process.argv[2] ?? "dev";
const nextArgs = process.argv.slice(3);

const nextBin = path.join(
  process.cwd(),
  "node_modules",
  "next",
  "dist",
  "bin",
  "next",
);

process.env.NEXT_TEST_WASM_DIR = path.join(
  process.cwd(),
  "node_modules",
  "@next",
  "swc-wasm-nodejs",
);

const child = spawn(
  process.execPath,
  ["--no-addons", nextBin, nextCommand, ...nextArgs],
  {
    cwd: process.cwd(),
    env: process.env,
    stdio: "inherit",
  },
);

child.on("exit", (code) => {
  process.exit(code ?? 0);
});
