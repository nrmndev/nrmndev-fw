import path from "path";
import { fileURLToPath } from "url";

// To get the current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.ts", // Adjust this path to your main entry file
  output: {
    filename: "bundle.js", // The output file name
    path: path.resolve(__dirname, "dist"), // The output directory
    library: "YourLibraryName", // Export name for the library
    libraryTarget: "module", // Using module as the target
  },
  experiments: {
    outputModule: true, // Enables support for ESM output
  },
  resolve: {
    extensions: [".ts", ".js"], // Resolve these extensions
    alias: {
      "@uiComponents": path.resolve(__dirname, "src/components/index.ts"),
      "@uiTypes": path.resolve(__dirname, "src/types/index.ts"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@basetypes": path.resolve(__dirname, "src/base"),
      "@uniontypes": path.resolve(__dirname, "src/union"),
      "@proptypes": path.resolve(__dirname, "src/props"),
      // Add other aliases as needed
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader", // Use ts-loader for TypeScript files
        exclude: /node_modules/,
      },
      // Add loaders for other asset types if necessary
    ],
  },
  mode: "production", // Set to 'development' for easier debugging
  experiments: {
    outputModule: true, // Enable outputting as ESM
  },
};
