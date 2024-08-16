module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["./src/types/base/*"],
            message: "Please use the @typekits alias to import types.",
          },
        ],
      },
    ],
    // "no-restricted-imports": [
    //   "error",
    //   {
    //     patterns: [
    //       {
    //         group: ["./components/*", "!./components"],
    //         message: "Please import from the components index file instead.",
    //       },
    //       {
    //         group: ["./types/*", "!./types"],
    //         message: "Please import from the types index file instead.",
    //       },
    //     ],
    //   },
    // ],
    // "import/no-restricted-paths": [
    //   "error",
    //   {
    //     zones: [
    //       {
    //         // Restrict direct imports from src/components
    //         target: "@components",
    //         from: {
    //           paths: ["@basetypes"], // Disallow direct imports from src/components
    //         },
    //         to: {
    //           paths: ["@typekits"], // Allow imports only from @components
    //         },
    //       },
    //     ],
    //   },
    // ],
  },
  settings: {
    "import/resolver": {
      typescript: {},
      alias: {
        map: [["@images", "./src/images"]],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
