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
          replacement: path.resolve(__dirname, "src/components/index"),
        },
        {
          find: "@typekits",
          replacement: path.resolve(__dirname, "src/types/index"),
        },
        {
          find: "@basetypes",
          replacement: path.resolve(__dirname, "src/types/base/index"),
        },
        {
          find: "@utils",
          replacement: path.resolve(__dirname, "src/utils/index"),
        },
        { find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
        {
          find: "@routing",
          replacement: path.resolve(__dirname, "src/routing"),
        },
        {
          find: "@images",
          replacement: path.resolve(__dirname, "src/images"),
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/index"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@images": path.resolve(__dirname, "src/images"),
      "@routing": path.resolve(__dirname, "src/routing"),
      "@typekits": path.resolve(__dirname, "src/types/index"),
      "@basetypes": path.resolve(__dirname, "src/types/base/index"),
      "@utils": path.resolve(__dirname, "src/utils/index"),
    },
  },
});
