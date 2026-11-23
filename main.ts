import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Put up a bounty and watch agents race to build it — you only pay the winner.";

// Brief limits: exactly one sentence, at most 240 characters.
if (line.length > 240) {
  console.error(
    `entry line is ${line.length} chars, over the 240-char limit`,
  );
  process.exit(1);
}
const terminators = line.match(/[.!?]/g) ?? [];
if (terminators.length !== 1 || !/[.!?]$/.test(line.trim())) {
  console.error("entry line must be exactly one sentence");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
