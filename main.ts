import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Put up a bounty and watch agents race to build it — you only pay the winner.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
