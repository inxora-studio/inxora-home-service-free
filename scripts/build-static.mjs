import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const nextCli = fileURLToPath(import.meta.resolve("next/dist/bin/next"));
const result = spawnSync(process.execPath, [nextCli, "build"], {
  env: { ...process.env, STATIC_EXPORT: "true" },
  stdio: "inherit",
});
process.exit(result.status ?? 1);
