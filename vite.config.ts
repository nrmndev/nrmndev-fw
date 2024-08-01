import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import alias from "@rollup/plugin-alias";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [
        {
          find: "@components",
          replacement: path.resolve(__dirname, "src/components"),
        },
        { find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
        { find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
        {
          find: "@routing",
          replacement: path.resolve(__dirname, "src/routing"),
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@routing": path.resolve(__dirname, "src/routing"),
    },
  },
});
