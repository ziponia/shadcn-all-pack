import dts from "vite-plugin-dts";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { resolve } from "path";

const entryFile = resolve(__dirname, "src/index.ts");

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: [],
      tsconfigPath: "./tsconfig.app.json",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: entryFile,
      formats: ["es", "cjs"],
      fileName: (a) => `index${a !== "es" ? `.${a}` : ""}.js`,
    },
  },
});
