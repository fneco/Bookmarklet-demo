import clipboardy from "clipboardy";
import * as fs from "fs";
import * as path from "path";

async function copyBookmarkletToClipboard() {
  const filePath = path.resolve("./dist/bookmarklet.iife.js");
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    await clipboardy.write(`javascript: ${content}`);
    console.log("Content copied to clipboard successfully.");
  } catch (error) {
    console.error("Failed to copy content to clipboard:", error);
  }
}

copyBookmarkletToClipboard();
