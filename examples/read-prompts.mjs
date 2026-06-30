import fs from "node:fs";
import path from "node:path";

const file = path.resolve(import.meta.dirname, "../data/nano-banana-pro-prompts.json");
const bundle = JSON.parse(fs.readFileSync(file, "utf8"));

console.log(`${bundle.count} Nano Banana Pro prompts`);
for (const prompt of bundle.prompts.slice(0, 5)) {
  console.log(`- ${prompt.title}: ${prompt.prompt}`);
}
