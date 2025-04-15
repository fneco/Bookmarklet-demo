import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { toDocument } from "../src/lib/node";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
  const getHtml = () => readFile(resolve(__dirname, "demo.html"), "utf-8");
  const document = toDocument(await getHtml());
  console.log(document.title);
}

main();
