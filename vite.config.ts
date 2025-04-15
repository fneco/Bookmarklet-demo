import type { UserConfig } from "vite";

export default {
  build: {
    lib: {
      entry: "src/main.ts",
      name: "bookmarklet",
      fileName: "bookmarklet",
      formats: ["iife"],
    },
  },
} satisfies UserConfig;
