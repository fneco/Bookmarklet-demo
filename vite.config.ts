import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@scalajs": path.resolve(__dirname, "./target/scala-3.3.4/hello-fastopt"),
    },
  },
  build: {
    lib: {
      entry: "src/main.js",
      name: "hello",
      formats: ["es", "iife"],
    },
  },
});
