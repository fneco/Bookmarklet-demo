import { toDocument } from "./lib/web";

async function main() {
  const getHtml = () => fetch("/").then((res) => res.text());
  const document = toDocument(await getHtml());
  console.log(document.title);
}

main();
