const path = require("path");
const { withCustomConfig } = require("react-docgen-typescript");

module.exports = {
  //components: "src/components/**/*.tsx",
  //webpackConfig: require("./webpack.config.cjs"),
  components: [
    "src/components/**/!(*index).ts", // Exclude all index.ts files
    "src/components/**/*.tsx", // Include all other .tsx files
  ],
  ignore: [
    "src/components/**/!(*index).ts",
    "src/components/index.ts",
    "src/components/button/index.ts",
  ],
  propsParser: withCustomConfig(path.resolve(__dirname, "tsconfig.app.json"))
    .parse,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "tsconfig.app.json"),
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: ["file-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
        "@uiComponents": path.resolve(__dirname, "src/components/index"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@utils": path.resolve(__dirname, "src/utils/index"),
        "@uiTypes": path.resolve(__dirname, "src/types/index"),
        "@basetypes": path.resolve(__dirname, "src/base/index"),
        "@uniontypes": path.resolve(__dirname, "src/union/index"),
        "@proptypes": path.resolve(__dirname, "src/props/index"),
      },
    },
  },
};
