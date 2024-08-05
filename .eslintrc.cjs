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
            group: ["./components/*", "!./components"],
            message: "Please import from the components index file instead.",
          },
          {
            group: ["./types/*", "!./types"],
            message: "Please import from the types index file instead.",
          },
        ],
      },
    ],
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["@images", "./src/images"]],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
