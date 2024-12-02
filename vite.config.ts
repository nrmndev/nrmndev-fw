import { defineConfig, optimizeDeps } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
// import alias from "@rollup/plugin-alias";
// import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),

    // alias({
    //   entries: [
    //     {
    //       find: "@uiComponents",
    //       replacement: path.resolve(__dirname, "src/components/index"),
    //     },
    //     {
    //       find: "@uiTypes",
    //       replacement: path.resolve(__dirname, "src/types/index"),
    //     },
    //     {
    //       find: "@basetypes",
    //       replacement: path.resolve(__dirname, "src/types/base/index"),
    //     },
    //     {
    //       find: "@uniontypes",
    //       replacement: path.resolve(__dirname, "src/types/union/index"),
    //     },
    //     {
    //       find: "@proptypes",
    //       replacement: path.resolve(__dirname, "src/types/props/index"),
    //     },
    //     {
    //       find: "@utils",
    //       replacement: path.resolve(__dirname, "src/utils/index"),
    //     },
    //     { find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
    //     {
    //       find: "@routing",
    //       replacement: path.resolve(__dirname, "src/routing"),
    //     },
    //     {
    //       find: "@images",
    //       replacement: path.resolve(__dirname, "src/images"),
    //     },
    //   ],
    // }),
  ],
  build: {
    outDir: "vite-build", // Replace with your desired folder name
  },
  optimizeDeps: {
    exclude: ["dist"], // Exclude `dist` explicitly
  },
  // resolve: {
  //   alias: {
  //     "@uiComponents": path.resolve(__dirname, "src/components/index"),
  //     "@hooks": path.resolve(__dirname, "src/hooks"),
  //     "@images": path.resolve(__dirname, "src/images"),
  //     "@routing": path.resolve(__dirname, "src/routing"),
  //     "@uiTypes": path.resolve(__dirname, "src/types/index"),
  //     "@basetypes": path.resolve(__dirname, "src/types/base/index"),
  //     "@uniontypes": path.resolve(__dirname, "src/types/union/index"),
  //     "@proptypes": path.resolve(__dirname, "src/types/props/index"),
  //     "@utils": path.resolve(__dirname, "src/utils/index"),
  //   },
  // },
});

// {
//   babel: {
//     plugins: [
//       [
//         "babel-plugin-styled-components",
//         {
//           displayName: true,
//           fileName: false,
//           namespace: false,
//         },
//       ],
//     ],
//   },
// }
