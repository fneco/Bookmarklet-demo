import scalaJSPlugin from "@scala-js/vite-plugin-scalajs";
import { defineConfig, PluginOption } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/main.js",
      name: "hello",
      formats: ["es", "iife"],
    },
  },
  plugins: [scalaJSPlugin() as PluginOption],
});
