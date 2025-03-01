import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  define: {
    "process.env": {}, // Countermeasure for "Uncaught ReferenceError: process is not defined"
  },
  resolve: {
    alias: {
      "@scalajs": path.resolve(
        __dirname,
        "./target/scala-3.3.4/scalajs-fastopt"
      ),
    },
  },
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "main",
      formats: ["es", "iife"],
      fileName: (format) => `main${format == "iife" ? ".iife" : ""}.js`,
    },
  },
  plugins: [react()],
});
