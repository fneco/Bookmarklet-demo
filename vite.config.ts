import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@scalajs": "./target/scala-3.3.4/scalajs-fastopt",
    },
  },
  build: {
    lib: {
      entry: "src/main.js",
      name: "main",
      formats: ["es", "iife"],
      fileName: (format) => `main${format == "iife" ? ".iife" : ""}.js`,
    },
  },
});
